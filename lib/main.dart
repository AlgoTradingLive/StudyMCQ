import 'package:flutter/material.dart';
import 'package:google_mobile_ads/google_mobile_ads.dart';
import 'package:webview_flutter/webview_flutter.dart';
import 'package:flutter_native_splash/flutter_native_splash.dart';

void main() async {
  WidgetsBinding widgetsBinding = WidgetsFlutterBinding.ensureInitialized();
  FlutterNativeSplash.preserve(widgetsBinding: widgetsBinding);

  await MobileAds.instance.initialize();
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Study MCQ',
      debugShowCheckedModeBanner: false,
      home: const WebViewPage(),
    );
  }
}

class WebViewPage extends StatefulWidget {
  const WebViewPage({super.key});

  @override
  State<WebViewPage> createState() => _WebViewPageState();
}

class _WebViewPageState extends State<WebViewPage> {
  late final WebViewController _controller;

  // Ad Unit IDs
  static const String _bannerAdUnitId =
      'ca-app-pub-6724873553204610/8551581467';
  static const String _interstitialAdUnitId =
      'ca-app-pub-6724873553204610/5214172927';

  BannerAd? _bannerAd;
  bool _isBannerAdReady = false;

  InterstitialAd? _interstitialAd;
  bool _isInterstitialAdReady = false;

  // Splash removal safety net
  bool _splashRemoved = false;

  @override
  void initState() {
    super.initState();
    _loadBannerAd();
    _loadInterstitialAd();
    _initWebView();

    // Safety net: जर onPageFinished काही कारणाने trigger झालं नाही,
    // तरी ३ सेकंदांनंतर splash आपोआप हटेल.
    Future.delayed(const Duration(seconds: 3), _removeSplash);
  }

  void _removeSplash() {
    if (!_splashRemoved) {
      _splashRemoved = true;
      FlutterNativeSplash.remove();
    }
  }

  void _initWebView() {
    _controller = WebViewController()
      ..setJavaScriptMode(JavaScriptMode.unrestricted)
      ..setNavigationDelegate(
        NavigationDelegate(
          onPageFinished: (String url) {
            // StudyMCQ.html पूर्ण लोड झाल्यावर native splash हटवा.
            _removeSplash();
          },
        ),
      )
      ..addJavaScriptChannel(
        'AdMobBridge',
        onMessageReceived: (JavaScriptMessage message) {
          if (message.message == 'showInterstitial') {
            _showInterstitialAd();
          }
        },
      )
      ..loadFlutterAsset('assets/StudyMCQ.html');
  }

  void _loadBannerAd() {
    _bannerAd = BannerAd(
      adUnitId: _bannerAdUnitId,
      size: AdSize.banner,
      request: const AdRequest(),
      listener: BannerAdListener(
        onAdLoaded: (_) {
          setState(() => _isBannerAdReady = true);
        },
        onAdFailedToLoad: (ad, error) {
          ad.dispose();
          _bannerAd = null;
        },
      ),
    )..load();
  }

  void _loadInterstitialAd() {
    InterstitialAd.load(
      adUnitId: _interstitialAdUnitId,
      request: const AdRequest(),
      adLoadCallback: InterstitialAdLoadCallback(
        onAdLoaded: (ad) {
          _interstitialAd = ad;
          _isInterstitialAdReady = true;
          _interstitialAd!.setImmersiveMode(true);
        },
        onAdFailedToLoad: (error) {
          _isInterstitialAdReady = false;
        },
      ),
    );
  }

  void _showInterstitialAd() {
    if (_isInterstitialAdReady && _interstitialAd != null) {
      _interstitialAd!.fullScreenContentCallback = FullScreenContentCallback(
        onAdDismissedFullScreenContent: (ad) {
          ad.dispose();
          _loadInterstitialAd(); // पुढच्यासाठी reload
        },
        onAdFailedToShowFullScreenContent: (ad, error) {
          ad.dispose();
          _loadInterstitialAd();
        },
      );
      _interstitialAd!.show();
      _isInterstitialAdReady = false;
    }
  }

  @override
  void dispose() {
    _bannerAd?.dispose();
    _interstitialAd?.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Column(
          children: [
            // WebView - full space
            Expanded(
              child: WebViewWidget(controller: _controller),
            ),
            // Banner ad at bottom
            if (_isBannerAdReady && _bannerAd != null)
              SizedBox(
                height: _bannerAd!.size.height.toDouble(),
                width: _bannerAd!.size.width.toDouble(),
                child: AdWidget(ad: _bannerAd!),
              ),
          ],
        ),
      ),
    );
  }
}
