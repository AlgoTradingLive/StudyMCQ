var NISM_DATA = {
    marking: { correct: 4, wrong: -1, label: "+4 | -1" },
    questions: [

        // --- Reasoning A/ --- NISM / NCFM: Equity & Share Market (Part 1) ---
        {
            en: { q: "What is the primary role of a clearing corporation in the equity market?", opts: ["To act as a counterparty to every trade and guarantee settlement", "To decide the opening and closing prices of stocks", "To regulate the listed companies' board meetings", "To provide margin funding to retail investors"] },
            hi: { q: "इक्विटी बाजार में क्लियरिंग कॉरपोरेशन (Clearing Corporation) की प्राथमिक भूमिका क्या है?", opts: ["प्रत्येक व्यापार के लिए एक काउंटरपार्टी के रूप में कार्य करना और निपटान (Settlement) की गारंटी देना", "शेयरों के खुलने और बंद होने की कीमतें तय करना", "सूचीबद्ध कंपनियों के बोर्ड की बैठकों को विनियमित करना", "खुदरा निवेशकों को मार्जिन फंडिंग प्रदान करना"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI guidelines, what is the maximum investment limit for a retail individual investor in an Initial Public Offering (IPO)?", opts: ["₹2,00,000", "₹5,00,000", "₹1,00,000", "₹10,00,000"] },
            hi: { q: "सेबी (SEBI) के दिशानिर्देशों के तहत, एक प्रारंभिक सार्वजनिक निर्गम (IPO) में खुदरा व्यक्तिगत निवेशक के लिए अधिकतम निवेश सीमा क्या है?", opts: ["₹2,00,000", "₹5,00,000", "₹1,00,000", "₹10,00,000"] },
            correct: 0
        },
        {
            en: { q: "Which corporate action increases the number of outstanding shares without altering the company's total market capitalization?", opts: ["Stock Split", "Right Issue", "Bonus Issue with cash payout", "Buyback of shares"] },
            hi: { q: "कौन सी कॉर्पोरेट कार्रवाई कंपनी के कुल बाजार पूंजीकरण (Market Capitalization) को बदले बिना बकाया शेयरों की संख्या बढ़ा देती है?", opts: ["स्टॉक स्प्लिट (Stock Split)", "राइट इश्यू (Right Issue)", "नकद भुगतान के साथ बोनस इश्यू", "शेयरों का बायबैक"] },
            correct: 0
        },
        {
            en: { q: "What does the P/E (Price-to-Earnings) ratio of a stock signify?", opts: ["The amount investors are willing to pay for each rupee of a company's earnings", "The percentage of profit distributed as dividend", "The total asset value divided by total liabilities", "The growth rate of a company's quarterly revenue"] },
            hi: { q: "किसी स्टॉक का पी/ई (मूल्य-टू-कमाई) अनुपात क्या दर्शाता है?", opts: ["कंपनी की कमाई के प्रत्येक रुपये के लिए निवेशक जितनी राशि देने को तैयार हैं", "लाभांश के रूप में वितरित लाभ का प्रतिशत", "कुल संपत्ति मूल्य को कुल देनदारियों से विभाजित करना", "कंपनी के त्रैमासिक राजस्व की वृद्धि दर"] },
            correct: 0
        },
        {
            en: { q: "The process of physical share certificates being converted into electronic form is known as:", opts: ["Dematerialization", "Rematerialization", "Securitization", "Amortization"] },
            hi: { q: "भौतिक शेयर प्रमाणपत्रों को इलेक्ट्रॉनिक रूप में परिवर्तित करने की प्रक्रिया को क्या कहा जाता है?", opts: ["डीमटेरियलाइजेशन (Dematerialization)", "रिमटेरियलाइजेशन", "सिक्योरिटाइजेशन", "अमॉर्टाइजेशन"] },
            correct: 0
        },
        {
            en: { q: "Which of the following is considered a systematic risk in the Indian equity markets?", opts: ["An increase in Repo Rate by the RBI", "A labor strike in a specific automobile factory", "A sudden fire inside a tech company's data center", "Failure of a pharmaceutical company's new drug trial"] },
            hi: { q: "निम्नलिखित में से किसे भारतीय इक्विटी बाजारों में एक व्यवस्थित जोखिम (Systematic Risk) माना जाता है?", opts: ["आरबीआई द्वारा रेपो रेट में वृद्धि", "एक विशिष्ट ऑटोमोबाइल कारखाने में श्रमिक हड़ताल", "एक टेक कंपनी के डेटा सेंटर के अंदर अचानक आग लगना", "एक फार्मास्युटिकल कंपनी के नए ड्रग ट्रायल की विफलता"] },
            correct: 0
        },
        {
            en: { q: "What is the settlement cycle followed for standard equity shares trades on Indian stock exchanges currently?", opts: ["T+1 rolling settlement", "T+2 rolling settlement", "T+3 rolling settlement", "T+5 rolling settlement"] },
            hi: { q: "वर्तमान में भारतीय स्टॉक एक्सचेंजों पर मानक इक्विटी शेयर ट्रेडों के लिए किस सेटलमेंट चक्र का पालन किया जाता है?", opts: ["T+1 रोलिंग सेटलमेंट", "T+2 रोलिंग सेटलमेंट", "T+3 रोलिंग सेटलमेंट", "T+5 रोलिंग सेटलमेंट"] },
            correct: 0
        },
        {
            en: { q: "Which index serves as the benchmark tracker for the Bombay Stock Exchange (BSE)?", opts: ["S&P BSE SENSEX", "NIFTY 50", "NIFTY NEXT 50", "BSE MIDCAP"] },
            hi: { q: "कौन सा सूचकांक बॉम्बे स्टॉक एक्सचेंज (BSE) के बेंचमार्क ट्रैकर के रूप में कार्य करता है?", opts: ["S&P BSE SENSEX", "NIFTY 50", "NIFTY NEXT 50", "BSE MIDCAP"] },
            correct: 0
        },
        {
            en: { q: "What is the minimum public shareholding percentage required for listed companies in India as per SEBI norms?", opts: ["25%", "20%", "30%", "15%"] },
            hi: { q: "सेबी के मानदंडों के अनुसार भारत में सूचीबद्ध कंपनियों के लिए आवश्यक न्यूनतम सार्वजनिक शेयरधारिता (Minimum Public Shareholding) प्रतिशत क्या है?", opts: ["25%", "20%", "30%", "15%"] },
            correct: 0
        },
        {
            en: { q: "Which document must be filed by an unlisted company with SEBI before launching an Initial Public Offering (IPO)?", opts: ["Red Herring Prospectus (RHP)", "Articles of Association", "Annual Financial Audit Statement", "Memorandum of Understanding"] },
            hi: { q: "प्रारंभिक सार्वजनिक निर्गम (IPO) शुरू करने से पहले एक गैर-सूचीबद्ध कंपनी द्वारा सेबी के पास कौन सा दस्तावेज दायर किया जाना चाहिए?", opts: ["रेड हेरिंग प्रॉस्पेक्टस (RHP)", "आर्टिकल्स ऑफ एसोसिएशन", "वार्षिक वित्तीय ऑडिट विवरण", "समझौता ज्ञापन"] },
            correct: 0
        },

        // --- NISM: Commodity Markets (Part 1) ---
        {
            en: { q: "Which regulator was merged with the Securities and Exchange Board of India (SEBI) in 2015 to unify commodity derivatives regulations?", opts: ["Forward Markets Commission (FMC)", "Commodity Board of India", "PFRDA", "IRDAI"] },
            hi: { q: "कमोडिटी डेरिवेटिव्स विनियमों को एकीकृत करने के लिए 2015 में किस नियामक का भारतीय प्रतिभूति और विनिमय बोर्ड (SEBI) में विलय कर दिया गया था?", opts: ["फॉरवर्ड मार्केट्स कमीशन (FMC)", "कमोडिटी बोर्ड ऑफ इंडिया", "PFRDA", "IRDAI"] },
            correct: 0
        },
        {
            en: { q: "What term describes a market situation where futures prices are higher than the spot prices of a commodity?", opts: ["Contango", "Backwardation", "Short Squeeze", "Arbitrage Lock"] },
            hi: { q: "बाजार की उस स्थिति को क्या कहा जाता है जहां फ्यूचर्स की कीमतें किसी कमोडिटी की हाजिर (Spot) कीमतों से अधिक होती हैं?", opts: ["कंटैंगो (Contango)", "बैकवर्डेशन (Backwardation)", "शॉर्ट स्क्वीज़", "आर्बिट्रेज लॉक"] },
            correct: 0
        },
        {
            en: { q: "In commodity markets, what is the purpose of 'Daily Mark-to-Market (MTM)' margins?", opts: ["To settle daily gains or losses resulting from price fluctuations", "To pay structural warehousing expenses to logistics vaults", "To clear physical transportation charges between mandis", "To calculate the statutory goods and services tax values"] },
            hi: { q: "कमोडिटी बाजारों में, 'डेली मार्क-टू-मार्केट (MTM)' मार्जिन का उद्देश्य क्या है?", opts: ["कीमतों के उतार-चढ़ाव से होने वाले दैनिक लाभ या हानि का निपटान करना", "लॉजिस्टिक्स वॉल्ट को संरचनात्मक वेयरहाउसिंग खर्चों का भुगतान करना", "मंडी के बीच भौतिक परिवहन शुल्क को स्पष्ट करना", "वैधानिक वस्तु एवं सेवा कर मूल्यों की गणना करना"] },
            correct: 0
        },
        {
            en: { q: "Which contract type binds the buyer to take physical delivery and the seller to deliver the exact commodity asset at a predetermined date without an exchange-traded clearing entity?", opts: ["Forward Contract", "Futures Contract", "American Option", "Exchange Traded Option"] },
            hi: { q: "कौन सा अनुबंध प्रकार खरीदार को भौतिक डिलीवरी लेने और विक्रेता को बिना किसी एक्सचेंज-ट्रेडेड क्लियरिंग इकाई के एक पूर्व निर्धारित तिथि पर सटीक कमोडिटी संपत्ति देने के लिए बाध्य करता है?", opts: ["फॉरवर्ड अनुबंध (Forward Contract)", "फ्यूचर्स अनुबंध", "अमेरिकन ऑप्शन", "एक्सचेंज ट्रेडेड ऑप्शन"] },
            correct: 0
        },
        {
            en: { q: "What does the 'Basis' in commodity trading represent mathematically?", opts: ["Spot Price minus Futures Price", "Futures Price plus Initial Margin", "Options Premium minus Strike Price", "Maintenance Margin divided by Lot Size"] },
            hi: { q: "कमोडिटी ट्रेडिंग में 'बेसिस' (Basis) गणितीय रूप से क्या दर्शाता है?", opts: ["हाजिर मूल्य (Spot Price) घटाव फ्यूचर्स मूल्य", "फ्यूचर्स मूल्य प्लस प्रारंभिक मार्जिन", "ऑप्शंस प्रीमियम घटाव स्ट्राइक प्राइस", "रखरखाव मार्जिन विभाजित लॉट साइज"] },
            correct: 0
        },
        {
            en: { q: "What is the primary role of an 'Arbitrageur' inside commodity derivatives exchange grids?", opts: ["To profit from price discrepancies between two distinct market segments", "To safeguard long term warehouse storage from physical degradation", "To execute high-volume speculation on macro economic parameters", "To provide statutory credit ratings to multi-state commodity platforms"] },
            hi: { q: "कमोडिटी डेरिवेटिव्स एक्सचेंज ग्रिड के भीतर एक 'आर्बिट्रेजूर' (Arbitrageur) की प्राथमिक भूमिका क्या है?", opts: ["दो अलग-अलग बाजार खंडों के बीच मूल्य विसंगतियों से लाभ कमाना", "भौतिक गिरावट से दीर्घकालिक गोदाम भंडारण की रक्षा करना", "मैक्रो आर्थिक मापदंडों पर उच्च मात्रा में सट्टा लगाना", "बहु-राज्य कमोडिटी प्लेटफॉर्म को वैधानिक क्रेडिट रेटिंग प्रदान करना"] },
            correct: 0
        },
        {
            en: { q: "Which of the following commodities falls under the 'Bullion' asset division on Indian multi-commodity platforms?", opts: ["Gold and Silver", "Crude Oil and Natural Gas", "Copper and Zinc", "Mentha Oil and Cotton"] },
            hi: { q: "निम्नलिखित में से कौन सी कमोडिटी भारतीय मल्टी-कमोडिटी प्लेटफॉर्म पर 'बुलियन' (Bullion) परिसंपत्ति प्रभाग के अंतर्गत आती है?", opts: ["सोना और चांदी (Gold and Silver)", "क्रूड ऑयल और नेचुरल गैस", "कॉपर और जिंक", "मेंथा ऑयल और कॉटन"] },
            correct: 0
        },
        {
            en: { q: "A farmers' group locks a selling price for crops months before harvest to prevent loss from price drop. What is this practice called?", opts: ["Hedging", "Speculation", "Scalping", "Short Selling"] },
            hi: { q: "एक किसान समूह फसल की कीमतों में गिरावट से होने वाले नुकसान को रोकने के लिए कटाई से महीनों पहले बिक्री मूल्य लॉक करता है। इस प्रथा को क्या कहा जाता है?", opts: ["हेजिंग (Hedging)", "सट्टा (Speculation)", "स्कैल्पिंग", "शॉर्ट सेलिंग"] },
            correct: 0
        },
        {
            en: { q: "What type of settlement is executed if a commodity futures contract does not mandate physical delivery of warehouse goods?", opts: ["Cash Settlement", "Compulsory Delivery Settlement", "Seller's Option Delivery", "Asymmetric Delivery Layout"] },
            hi: { q: "यदि कमोडिटी फ्यूचर्स अनुबंध में गोदाम के सामानों की भौतिक डिलीवरी अनिवार्य नहीं है, तो किस प्रकार का निपटान निष्पादित किया जाता है?", opts: ["नकद निपटान (Cash Settlement)", "अनिवार्य डिलीवरी निपटान", "विक्रेता का विकल्प डिलीवरी", "असममित डिलीवरी लेआउट"] },
            correct: 0
        },
        {
            en: { q: "What is the certified structural repository unit called that handles physical standard checkups for agro-commodities?", opts: ["WDRA accredited warehouse", "SEBI regional depository office", "RBI currency chest vault", "APEDA custom packaging unit"] },
            hi: { q: "कृषि-कमोडिटी के लिए भौतिक मानक जांच को संभालने वाली प्रमाणित संरचनात्मक रिपॉजिटरी इकाई को क्या कहा जाता है?", opts: ["WDRA मान्यता प्राप्त गोदाम (Warehouse)", "सेबी क्षेत्रीय डिपॉजिटरी कार्यालय", "आरबीआई मुद्रा तिजोरी वॉल्ट", "एपीडा कस्टम पैकेजिंग इकाई"] },
            correct: 0
        },

        // --- NISM: Currency Markets / Forex Derivatives (Part 1) ---
        {
            en: { q: "In India, exchange-traded currency derivatives contracts are permitted on which underlying asset pairings?", opts: ["USD-INR, EUR-INR, GBP-INR, JPY-INR", "USD-EUR, USD-GBP, USD-CAD, USD-AUD", "EUR-USD, GBP-USD, JPY-USD, CHF-USD", "Only USD-INR contracts are allowed"] },
            hi: { q: "भारत में, एक्सचेंज-ट्रेडेड मुद्रा डेरिवेटिव अनुबंधों की अनुमति किन अंतर्निहित परिसंपत्ति युग्मों (Underlying Asset Pairings) पर है?", opts: ["USD-INR, EUR-INR, GBP-INR, JPY-INR", "USD-EUR, USD-GBP, USD-CAD, USD-AUD", "EUR-USD, GBP-USD, JPY-USD, CHF-USD", "केवल USD-INR अनुबंधों की अनुमति है"] },
            correct: 0
        },
        {
            en: { q: "Who is responsible for publishing the official daily reference rates for the Indian Rupee against major foreign currencies?", opts: ["Financial Benchmarks India Pvt. Ltd. (FBIL)", "Securities and Exchange Board of India (SEBI)", "State Bank of India (Internal Treasury)", "Ministry of Commerce and Industry"] },
            hi: { q: "प्रमुख विदेशी मुद्राओं के मुकाबले भारतीय रुपये के लिए आधिकारिक दैनिक संदर्भ दरें (Reference Rates) प्रकाशित करने के लिए कौन जिम्मेदार है?", opts: ["फाइनेंशियल बेंचमार्क इंडिया प्राइवेट लिमिटेड (FBIL)", "भारतीय प्रतिभूति और विनिमय बोर्ड (SEBI)", "भारतीय स्टेट बैंक (आंतरिक ट्रेजरी)", "वाणिज्य और उद्योग मंत्रालय"] },
            correct: 0
        },
        {
            en: { q: "What is the typical lot size for a standard USD-INR futures contract traded on Indian stock exchanges?", opts: ["USD 1,000", "USD 10,000", "USD 5,000", "USD 100"] },
            hi: { q: "भारतीय स्टॉक एक्सचेंजों पर कारोबार करने वाले एक मानक USD-INR फ्यूचर्स अनुबंध के लिए विशिष्ट लॉट आकार (Lot Size) क्या है?", opts: ["USD 1,000", "USD 10,000", "USD 5,000", "USD 100"] },
            correct: 0
        },
        {
            en: { q: "If the USD-INR exchange rate moves from 83.40 to 83.45, what is the size of this price movement called in forex trading terminologies?", opts: ["5 pips or ticks", "50 points macro", "0.5 spread basis", "5 margin leverage units"] },
            hi: { q: "यदि USD-INR विनिमय दर 83.40 से 83.45 पर चली जाती है, तो विदेशी मुद्रा व्यापार शब्दावली में इस मूल्य आंदोलन के आकार को क्या कहा जाता है?", opts: ["5 पिप्स या टिक्स (Pips/Ticks)", "50 अंक मैक्रो", "0.5 स्प्रेड आधार", "5 मार्जिन उत्तोलन इकाइयाँ"] },
            correct: 0
        },
        {
            en: { q: "An Indian software company expects to receive USD 50,000 in exports after 3 months. To protect against a falling USD, which derivative strategy should they deploy?", opts: ["Sell/Short USD-INR Futures", "Buy USD-INR Futures", "Sell USD-INR Put Options", "Buy USD-INR Call Options"] },
            hi: { q: "एक भारतीय सॉफ्टवेयर कंपनी को 3 महीने के बाद निर्यात में 50,000 यूएसडी प्राप्त होने की उम्मीद है। गिरते यूएसडी से बचाव के लिए, उन्हें कौन सी डेरिवेटिव रणनीति अपनानी चाहिए?", opts: ["USD-INR फ्यूचर्स बेचें/शॉर्ट करें (Sell USD-INR Futures)", "USD-INR फ्यूचर्स खरीदें", "USD-INR पुट ऑप्शंस बेचें", "USD-INR कॉल ऑप्शंस खरीदें"] },
            correct: 0
        },
        {
            en: { q: "What legislation empowers the Reserve Bank of India (RBI) to regulate and govern the foreign exchange markets in India?", opts: ["Foreign Exchange Management Act (FEMA), 1999", "Reserve Bank Act, 1934 Chapter II", "Securities Contracts (Regulation) Act, 1956", "Banking Regulation Act, 1949 Section 42"] },
            hi: { q: "कौन सा कानून भारतीय रिजर्व बैंक (RBI) को भारत में विदेशी मुद्रा बाजारों को विनियमित और नियंत्रित करने का अधिकार देता है?", opts: ["विदेशी मुद्रा प्रबंधन अधिनियम (FEMA), 1999", "रिज़र्व बैंक अधिनियम, 1934 अध्याय II", "प्रतिभूति अनुबंध (विनियमन) अधिनियम, 1956", "बैंकिंग विनियमन अधिनियम, 1949 धारा 42"] },
            correct: 0
        },
        {
            en: { q: "What is the standard final settlement style for exchange-traded currency futures contracts inside India?", opts: ["Cash-settled in Indian Rupees (INR)", "Physical delivery of foreign banknote vaults", "Cross currency escrow matching", "Settled exclusively via US Federal reserves clearing"] },
            hi: { q: "भारत के भीतर एक्सचेंज-ट्रेडेड मुद्रा फ्यूचर्स अनुबंधों के लिए मानक अंतिम निपटान शैली (Final Settlement Style) क्या है?", opts: ["भारतीय रुपये (INR) में नकद-निपटान", "विदेशी बैंकनोट वॉल्ट की भौतिक डिलीवरी", "क्रॉस करेंसी एस्क्रो मिलान", "विशेष रूप से यूएस फेडरल रिजर्व क्लियरिंग के माध्यम से निपटाया गया"] },
            correct: 0
        },
        {
            en: { q: "In a currency quotation 'EUR/USD = 1.0850', which currency is called the 'Base Currency'?", opts: ["EUR", "USD", "Both EUR and USD", "The quote does not contain a base currency"] },
            hi: { q: "मुद्रा उद्धरण (Currency quotation) 'EUR/USD = 1.0850' में, किस मुद्रा को 'आधार मुद्रा' (Base Currency) कहा जाता है?", opts: ["EUR (पहली मुद्रा को बेस और दूसरी को कोट मुद्रा कहते हैं)", "USD", "EUR और USD दोनों", "उद्धरण में कोई आधार मुद्रा नहीं है"] },
            correct: 0
        },
        {
            en: { q: "What happens to the option premium of a USD-INR Call Option if the spot USD-INR exchange rate increases sharply, keeping all other factors constant?", opts: ["The premium increases", "The premium decreases", "The premium remains completely unchanged", "The option immediately expires worthless"] },
            hi: { q: "यदि अन्य सभी कारकों को स्थिर रखते हुए हाजिर USD-INR विनिमय दर में तेजी से वृद्धि होती है, तो USD-INR कॉल ऑप्शन के प्रीमियम का क्या होगा?", opts: ["प्रीमियम बढ़ता है (Premium increases)", "प्रीमियम घटता है", "प्रीमियम पूरी तरह से अपरिवर्तित रहता है", "ऑप्शन तुरंत बेकार समाप्त हो जाता है"] },
            correct: 0
        },
        {
            en: { q: "What economic factor describes the theoretical adjustment link relating spot forex rates, future forex rates, and cross-border interest ratios?", opts: ["Interest Rate Parity (IRP)", "Purchasing Power Parity (PPP)", "Phillips Curve Equilibrium", "Gresham's Law Distribution"] },
            hi: { q: "कौन सा आर्थिक कारक हाजिर विदेशी मुद्रा दरों, भविष्य की विदेशी मुद्रा दरों और सीमा पार ब्याज अनुपातों से संबंधित सैद्धांतिक समायोजन लिंक का वर्णन करता है?", opts: ["ब्याज दर समानता (Interest Rate Parity - IRP)", "क्रय शक्ति समानता (PPP)", "फिलिप्स वक्र संतुलन", "ग्रेशम का नियम वितरण"] },
            correct: 0
        },

        // --- NISM / NCFM: Future & Options / Equity Derivatives (Part 1) ---
        {
            en: { q: "What does 'Open Interest' in a derivatives contract signify?", opts: ["The total number of outstanding derivative contracts that have not been settled or closed", "The amount of interest paid by traders to the stockbroker for leverage", "The trading volume recorded during the peak market hours", "The percentage of delivery trades executed in options market"] },
            hi: { q: "डेरिवेटिव अनुबंध में 'ओपन इंटरेस्ट' (Open Interest) क्या दर्शाता है?", opts: ["बकाया डेरिवेटिव अनुबंधों की कुल संख्या जिनका निपटान या बंद नहीं किया गया है", "उत्तोलन (Leverage) के लिए व्यापारियों द्वारा स्टॉकब्रोकर को भुगतान की गई ब्याज की राशि", "पीक मार्केट ऑवर्स के दौरान रिकॉर्ड किया गया ट्रेडिंग वॉल्यूम", "ऑप्शंस मार्केट में निष्पादित डिलीवरी ट्रेडों का प्रतिशत"] },
            correct: 0
        },
        {
            en: { q: "A trader buys a NIFTY Call option with a strike price of 22,000 at a premium of ₹150. If NIFTY expires at 22,250, what is the intrinsic value of the option at expiry?", opts: ["₹250", "₹100", "₹150", "₹0"] },
            hi: { q: "एक व्यापारी ₹150 के प्रीमियम पर 22,000 के स्ट्राइक प्राइस के साथ एक निफ्टी (NIFTY) कॉल ऑप्शन खरीदता है। यदि निफ्टी 22,250 पर समाप्त होता है, तो समाप्ति पर ऑप्शन का अंतर्निहित मूल्य (Intrinsic Value) क्या है?", opts: ["₹250 (Formula: Spot - Strike = 22250 - 22000)", "₹100", "₹150", "₹0"] },
            correct: 0
        },
        {
            en: { q: "Which option Greek measures the sensitivity of an option's premium to a change in the volatility of the underlying asset?", opts: ["Vega", "Delta", "Theta", "Gamma"] },
            hi: { q: "कौन सा ऑप्शन ग्रीक (Option Greek) अंतर्निहित परिसंपत्ति की अस्थिरता (Volatility) में बदलाव के प्रति ऑप्शन के प्रीमियम की संवेदनशीलता को मापता है?", opts: ["वेगा (Vega)", "डेल्टा (Delta)", "थिटा (Theta)", "गामा (Gamma)"] },
            correct: 0
        },
        {
            en: { q: "What is an 'Out-of-the-Money (OTM)' Put option?", opts: ["A put option whose strike price is lower than the current spot price of the underlying asset", "A put option whose strike price is higher than the current spot price", "An option whose premium has dropped down to zero units exactly", "An option contract traded without maintaining initial margins"] },
            hi: { q: "एक 'आउट-ऑफ-द-मनी' (OTM) पुट ऑप्शन क्या होता है?", opts: ["एक पुट ऑप्शन जिसका स्ट्राइक प्राइस अंतर्निहित परिसंपत्ति के वर्तमान हाजिर मूल्य से कम है", "एक पुट ऑप्शन जिसका स्ट्राइक प्राइस वर्तमान हाजिर मूल्य से अधिक है", "एक ऑप्शन जिसका प्रीमियम बिल्कुल शून्य इकाइयों तक गिर गया है", "प्रारंभिक मार्जिन बनाए बिना कारोबार किया गया एक ऑप्शन अनुबंध"] },
            correct: 0
        },
        {
            en: { q: "What type of option contract permits execution only on the exact final expiration date?", opts: ["European Option", "American Option", "Bermudan Option", "Exotic Option"] },
            hi: { q: "किस प्रकार का ऑप्शन अनुबंध केवल सटीक अंतिम समाप्ति तिथि (Expiration Date) पर निष्पादन की अनुमति देता है?", opts: ["यूरोपियन ऑप्शन (European Option - भारत में यही उपयोग होता है)", "अमेरिकन ऑप्शन", "बरमूडन ऑप्शन", "एक्सोटिक ऑप्शन"] },
            correct: 0
        },
        {
            en: { q: "The strategy of simultaneously buying an At-the-Money Call option and an At-the-Money Put option with the same strike price and expiry date is known as:", opts: ["Long Straddle", "Long Strangle", "Bull Call Spread", "Iron Condor"] },
            hi: { q: "समान स्ट्राइक प्राइस और समाप्ति तिथि के साथ एक एट-द-मनी (ATM) कॉल ऑप्शन और एक एट-द-मनी पुट ऑप्शन को एक साथ खरीदने की रणनीति को क्या कहा जाता है?", opts: ["लॉन्ग स्ट्रैडल (Long Straddle)", "लॉन्ग स्ट्रैंगल (Long Strangle)", "बुल कॉल स्प्रेड", "आयरन कोंडोर"] },
            correct: 0
        },
        {
            en: { q: "What component inside option pricing setups erodes continuously over time, hurting the buyer of an option contract?", opts: ["Time Value (Theta)", "Intrinsic Value Layout", "Historical Volatility Index", "Underlying Spot Momentum"] },
            hi: { q: "ऑप्शन मूल्य निर्धारण सेटअप के अंदर कौन सा घटक समय के साथ लगातार घटता जाता है, जिससे ऑप्शन अनुबंध के खरीदार को नुकसान होता है?", opts: ["समय मूल्य (Time Value / Theta Decay)", "अंतर्निहित मूल्य लेआउट", "ऐतिहासिक अस्थिरता सूचकांक", "अंतर्निहित हाजिर गति"] },
            correct: 0
        },
        {
            en: { q: "If a speculator writes/sells an uncovered naked Call option, what is their maximum theoretical risk potential?", opts: ["Unlimited Risk", "Limited only to the extent of Initial Margins maintained", "Limited to the amount of option premium received", "Equivalent to the strike price configuration value"] },
            hi: { q: "यदि कोई सटोरिया एक अनकवर्ड नेकेड कॉल ऑप्शन बेचता/शॉर्ट (Write) करता है, तो उनका अधिकतम सैद्धांतिक जोखिम (Risk) क्या है?", opts: ["असीमित जोखिम (Unlimited Risk)", "केवल बनाए रखे गए प्रारंभिक मार्जिन की सीमा तक सीमित", "प्राप्त ऑप्शन प्रीमियम की राशि तक सीमित", "स्ट्राइक प्राइस कॉन्फ़िगरेशन मूल्य के बराबर"] },
            correct: 0
        },
        {
            en: { q: "What ratio is calculated by dividing the total trading volume of put options by the total trading volume of call options?", opts: ["Put-Call Ratio (PCR)", "Delta Neutral Leverage Ratio", "Volatility Skew Co-efficient", "Beta Hedging Parameter Matrix"] },
            hi: { q: "पुट ऑप्शंस के कुल ट्रेडिंग वॉल्यूम को कॉल ऑप्शंस के कुल ट्रेडिंग वॉल्यूम से विभाजित करके कौन सा अनुपात निकाला जाता है?", opts: ["पुट-कॉल अनुपात (PCR)", "डेल्टा न्यूट्रल उत्तोलन अनुपात", "अस्थिरता तिरछा सह-कुशलता", "बीटा हेजिंग पैरामीटर मैट्रिक्स"] },
            correct: 0
        },
        {
            en: { q: "What does an option's Delta of '0.50' imply for a Call option?", opts: ["The option premium will change by ₹0.50 for every ₹1 change in the underlying asset's price", "The option has a 50% probability of getting settled via physical cargo rules", "The buyer must maintain half layout margins inside trading terminals", "The strike price sits exactly fifty percent below current market trackers"] },
            hi: { q: "एक कॉल ऑप्शन के लिए ऑप्शन का डेल्टा (Delta) '0.50' क्या दर्शाता है?", opts: ["अंतर्निहित परिसंपत्ति की कीमत में प्रत्येक ₹1 के बदलाव के लिए ऑप्शन प्रीमियम में ₹0.50 का बदलाव होगा", "ऑप्शन के भौतिक कार्गो नियमों के माध्यम से निपटाए जाने की 50% संभावना है", "खरीदार को ट्रेडिंग टर्मिनलों के अंदर आधा लेआउट मार्जिन बनाए रखना चाहिए", "स्ट्राइक प्राइस वर्तमान बाजार ट्रैकर्स से ठीक पचास प्रतिशत नीचे बैठता है"] },
            correct: 0
        },

        // --- IRDAI / NISM: Insurance Exams (Part 1) ---
        {
            en: { q: "Which core principle of insurance implies that both parties to the contract must disclose all material facts honestly?", opts: ["Uberrimae Fidei (Utmost Good Faith)", "Insurable Interest Rules", "Principle of Indemnity Layout", "Causa Proxima Verification"] },
            hi: { q: "बीमा का कौन सा मूल सिद्धांत यह दर्शाता है कि अनुबंध के दोनों पक्षों को सभी भौतिक तथ्यों का ईमानदारी से खुलासा करना चाहिए?", opts: ["उबेरिमे फिदेई (Utmost Good Faith / परम सद्भाव)", "बीमायोग्य हित नियम", "क्षतिपूर्ति लेआउट का सिद्धांत", "कॉसा प्रॉक्सिमा सत्यापन"] },
            correct: 0
        },
        {
            en: { q: "What does the 'Principle of Indemnity' ensure in non-life general insurance contracts?", opts: ["The insured is placed back in the same financial position as before the loss, without making a profit", "The insured receives double the asset value upon structural asset destruction", "The corporate policy turns completely irrevocable after twelve months operation", "The policy premium gets refunded entirely if zero accidents occur over time"] },
            hi: { q: "गैर-जीवन सामान्य बीमा (Non-life general insurance) अनुबंधों में 'क्षतिपूर्ति का सिद्धांत' (Principle of Indemnity) क्या सुनिश्चित करता है?", opts: ["बीमित व्यक्ति को बिना लाभ कमाए नुकसान से पहले की वित्तीय स्थिति में वापस लाया जाता है", "संरचनात्मक संपत्ति विनाश पर बीमित व्यक्ति को संपत्ति का दोगुना मूल्य प्राप्त होता है", "कॉर्पोरेट पॉलिसी बारह महीनों के संचालन के बाद पूरी तरह से अपरिवर्तनीय हो जाती है", "यदि समय के साथ शून्य दुर्घटनाएं होती हैं तो पॉलिसी प्रीमियम पूरी तरह से वापस कर दिया जाता है"] },
            correct: 0
        },
        {
            en: { q: "What type of life insurance policy offers exclusively death benefit protection without any savings or maturity survival benefits?", opts: ["Term Insurance Policy", "Endowment Assurance Plan", "Whole Life Savings Layout", "Unit Linked Insurance Plan"] },
            hi: { q: "किस प्रकार की जीवन बीमा पॉलिसी बिना किसी बचत या परिपक्वता (Maturity) उत्तरजीविता लाभ के विशेष रूप से मृत्यु लाभ सुरक्षा प्रदान करती है?", opts: ["टर्म इंश्योरेंस पॉलिसी (Term Insurance Policy)", "एंडोमेंट एश्योरेंस प्लान", "संपूर्ण जीवन बचत लेआउट", "यूनिट लिंक्ड इंश्योरेंस प्लान (ULIP)"] },
            correct: 0
        },
        {
            en: { q: "What is a 'ULIP' in the Indian insurance domain?", opts: ["Unit Linked Insurance Plan", "Unified Universal Life Insurance Policy", "Underwritten Long-term Indemnity Product", "Utility Linked Investment Portfolio"] },
            hi: { q: "भारतीय बीमा क्षेत्र में 'ULIP' का क्या अर्थ है?", opts: ["यूनिट लिंक्ड इंश्योरेंस प्लान (Unit Linked Insurance Plan)", "यूनिफाइड यूनिवर्सल लाइफ इंश्योरेंस पॉलिसी", "अंडररिटन लॉन्ग-टर्म इंडेम्निटी प्रोडक्ट", "यूटिलिटी लिंक्ड इन्वेस्टमेंट पोर्टफोलियो"] },
            correct: 0
        },
        {
            en: { q: "The professional expert who mathematically evaluates risk profiles, premium configurations, and statutory solvency ratios for insurance firms is called an:", opts: ["Actuary", "Underwriter", "Surveyor", "Loss Assessor"] },
            hi: { q: "बीमा कंपनियों के लिए जोखिम प्रोफाइल, प्रीमियम कॉन्फ़िगरेशन और वैधानिक सॉल्वेंसी अनुपात का गणितीय मूल्यांकन करने वाले पेशेवर विशेषज्ञ को क्या कहा जाता है?", opts: ["एक्चुअरी (Actuary / बीमांकक)", "अंडरराइटर", "सर्वेक्षक", "नुकसान निर्धारक"] },
            correct: 0
        },
        {
            en: { q: "What is the statutory minimum 'Grace Period' allowed for the payment of premiums on monthly mode life insurance policies in India?", opts: ["15 days", "30 days", "7 days", "45 days"] },
            hi: { q: "भारत में मासिक मोड जीवन बीमा पॉलिसियों पर प्रीमियम के भुगतान के लिए अनुमत वैधानिक न्यूनतम 'ग्रेस पीरियड' (Grace Period) क्या है?", opts: ["15 दिन", "30 दिन", "7 दिन", "45 दिन"] },
            correct: 0
        },
        {
            en: { q: "Which principle prevents an insured person from collecting insurance payouts from two different insurers for the exact same loss to claim double profit?", opts: ["Principle of Contribution", "Principle of Subrogation", "Principle of Proximate Cause", "Principle of Warranties Layout"] },
            hi: { q: "कौन सा सिद्धांत एक बीमित व्यक्ति को दोहरा लाभ कमाने के लिए एक ही नुकसान के लिए दो अलग-अलग बीमा कंपनियों से बीमा भुगतान एकत्र करने से रोकता है?", opts: ["अंशदान का सिद्धांत (Principle of Contribution)", "प्रत्यासन का सिद्धांत (Subrogation)", "निकटतम कारण का सिद्धांत", "वारंटी लेआउट का सिद्धांत"] },
            correct: 0
        },
        {
            en: { q: "What is the purpose of 'Underwriting' inside insurance onboarding pipelines?", opts: ["To assess the risk profile of an applicant and determine premium fairness or policy rejection", "To settle old pending corporate court litigation across grievance channels", "To distribute free marketing advertisements across state broadcasting channels", "To audit the internal software safety parameters of financial portals"] },
            hi: { q: "बीमा ऑनबोर्डिंग पाइपलाइनों के अंदर 'अंडरराइटिंग' (Underwriting) का उद्देश्य क्या है?", opts: ["एक आवेदक के जोखिम प्रोफाइल का आकलन करना और प्रीमियम निष्पक्षता या पॉलिसी अस्वीकृति का निर्धारण करना", "शिकायत चैनलों में पुराने लंबित कॉर्पोरेट अदालती मुकदमों का निपटारा करना", "राज्य प्रसारण चैनलों पर मुफ्त विपणन विज्ञापन वितरित करना", "वित्तीय पोर्टलों के आंतरिक सॉफ्टवेयर सुरक्षा मापदंडों का ऑडिट करना"] },
            correct: 0
        },
        {
            en: { q: "Under the Insurance Regulatory and Development Authority of India (IRDAI) rules, what does 'TPA' stand for in health insurance?", opts: ["Third Party Administrator", "Total Premium Accounted", "Term Policy Assured", "Tax Protection Allocation"] },
            hi: { q: "भारतीय बीमा विनियामक और विकास प्राधिकरण (IRDAI) के नियमों के तहत, स्वास्थ्य बीमा में 'TPA' का पूर्ण रूप क्या है?", opts: ["थर्ड पार्टी एडमिनिस्ट्रेटर (Third Party Administrator)", "टोटल प्रीमियम एकाउंटेड", "टर्म पॉलिसी एश्योर्ड", "टैक्स प्रोटेक्शन एलोकेशन"] },
            correct: 0
        },
        {
            en: { q: "What occurs when an insurance policy is cancelled because the policyholder fails to pay the required renewal premium even within the designated grace duration?", opts: ["The policy lapses", "The policy gets automatically converted into an index annuity", "The insurer distributes bonus points to nominees", "The coverage shifts permanently to a cross-border platform"] },
            hi: { q: "क्या होता है जब एक बीमा पॉलिसी रद्द हो जाती है क्योंकि पॉलिसीधारक निर्दिष्ट ग्रेस अवधि के भीतर भी आवश्यक नवीनीकरण प्रीमियम का भुगतान करने में विफल रहता है?", opts: ["पॉलिसी लैप्स (Lapse) हो जाती है", "पॉलिसी स्वचालित रूप से एक इंडेक्स वार्षिकी में परिवर्तित हो जाती है", "बीमाकर्ता नामांकित व्यक्तियों को बोनस अंक वितरित करता है", "कवरेज स्थायी रूप से एक सीमा पार प्लेटफॉर्म पर स्थानांतरित हो जाता है"] },
            correct: 0
        },
        // --- NISM / NCFM: Equity, Derivatives, Commodity, Currency, MF & Insurance (Set 1) ---
        {
            en: { q: "An investor sells shares which they do not own at the time of trade. If they fail to deliver the shares on the settlement day, what action is taken by the Clearing Corporation?", opts: ["The Clearing Corporation auctions the shares to buy them for the buyer and penalizes the short seller", "The trade is automatically rolled over to the next settlement cycle", "The trade is cancelled and the buyer's money is refunded with interest", "The investor's Demat account is permanently blocked"] },
            hi: { q: "एक निवेशक उन शेयरों को बेचता है जो व्यापार के समय उनके पास नहीं हैं। यदि वे निपटान (Settlement) के दिन शेयरों की डिलीवरी देने में विफल रहते हैं, तो क्लियरिंग कॉरपोरेशन द्वारा क्या कार्रवाई की जाती है?", opts: ["क्लियरिंग कॉरपोरेशन खरीदार के लिए शेयर खरीदने के लिए उनकी नीलामी (Auction) करता है और शॉर्ट सेलर पर जुर्माना लगाता है", "व्यापार स्वचालित रूप से अगले निपटान चक्र में रोल ओवर हो जाता है", "व्यापार रद्द कर दिया जाता है और खरीदार का पैसा ब्याज सहित वापस कर दिया जाता है", "निवेशक का डीमैट खाता स्थायी रूप से ब्लॉक कर दिया जाता है"] },
            correct: 0
        },
        {
            en: { q: "Regarding the 'Exit Load' in Mutual Funds, which of the following statements is true?", opts: ["It is a fee charged when an investor redeems units before a specified period, and it is credited back to the scheme", "It is a recurring annual charge levied for fund management expenses", "It is an initial charge levied at the time of investing during an NFO", "It is compulsorily levied only on Overnight and Liquid Funds"] },
            hi: { q: "म्यूचुअल फंड में 'एग्जिट लोड' (Exit Load) के संबंध में निम्नलिखित में से कौन सा कथन सत्य है?", opts: ["यह एक शुल्क है जो तब लगाया जाता है जब कोई निवेशक एक निर्दिष्ट अवधि से पहले इकाइयों को भुनाता है, और इसे वापस योजना (Scheme) में जमा किया जाता है", "यह फंड प्रबंधन खर्चों के लिए लगाया जाने वाला एक आवर्ती वार्षिक शुल्क है", "यह एनएफओ (NFO) के दौरान निवेश करते समय लगाया जाने वाला प्रारंभिक शुल्क है", "यह अनिवार्य रूप से केवल ओवरनाइट और लिक्विड फंड पर लगाया जाता है"] },
            correct: 0
        },
        {
            en: { q: "If the spot price of Nifty is 25,000 and a trader buys a Call Option with a strike price of 24,800, how is this option classified?", opts: ["In-the-Money (ITM)", "Out-of-the-Money (OTM)", "At-the-Money (ATM)", "Deep Out-of-the-Money"] },
            hi: { q: "यदि निफ्टी का हाजिर (Spot) मूल्य 25,000 है और एक ट्रेडर 24,800 के स्ट्राइक मूल्य के साथ कॉल ऑप्शन खरीदता है, तो इस ऑप्शन को कैसे वर्गीकृत किया जाता है?", opts: ["इन-द-मनी (In-the-Money - ITM)", "आउट-ऑफ-द-मनी (Out-of-the-Money - OTM)", "एट-द-मनी (At-the-Money - ATM)", "डीप आउट-ऑफ-द-मनी"] },
            correct: 0
        },
        {
            en: { q: "In commodity derivatives markets, what term describes a situation where futures prices are lower than the spot prices?", opts: ["Backwardation", "Contango", "Arbitrage Lock", "Short Squeeze"] },
            hi: { q: "कमोडिटी डेरिवेटिव बाजारों में, उस स्थिति को क्या कहा जाता है जहां फ्यूचर्स की कीमतें हाजिर (Spot) कीमतों से कम होती हैं?", opts: ["बैकवर्डेशन (Backwardation)", "कंटैंगो (Contango)", "आर्बिट्रेज लॉक", "शॉर्ट स्क्वीज़"] },
            correct: 0
        },
        {
            en: { q: "On exchange-traded currency derivatives in India, the final settlement of USD-INR contracts is done based on which rate?", opts: ["Official reference rate published by FBIL on the last trading day", "Closing rate announced by the US Federal Reserve", "Physical delivery of US Dollar bank notes", "Volume-weighted average spot rate of the last trading hour"] },
            hi: { q: "भारत में एक्सचेंज-ट्रेडेड मुद्रा डेरिवेटिव पर, USD-INR अनुबंधों का अंतिम निपटान किस दर के आधार पर किया जाता है?", opts: ["अंतिम ट्रेडिंग दिन पर FBIL द्वारा प्रकाशित आधिकारिक संदर्भ दर (Reference Rate)", "यूएस फेडरल रिजर्व द्वारा घोषित समापन दर", "यूएस डॉलर बैंक नोटों की भौतिक डिलीवरी", "अंतिम ट्रेडिंग घंटे का वॉल्यूम-वेटेड एवरेज स्पॉट रेट"] },
            correct: 0
        },
        {
            en: { q: "Which core principle of insurance implies that both parties to the contract must disclose all material facts honestly without hiding anything?", opts: ["Uberrimae Fidei (Utmost Good Faith)", "Principle of Indemnity", "Causa Proxima", "Insurable Interest"] },
            hi: { q: "बीमा का कौन सा मूल सिद्धांत यह दर्शाता है कि अनुबंध के दोनों पक्षों को बिना कुछ छुपाए सभी भौतिक तथ्यों का ईमानदारी से खुलासा करना चाहिए?", opts: ["उबेरिमे फिदेई (Utmost Good Faith / परम सद्भाव)", "क्षतिपूर्ति का सिद्धांत (Principle of Indemnity)", "कॉसा प्रॉक्सिमा (Causa Proxima)", "बीमायोग्य हित (Insurable Interest)"] },
            correct: 0
        },
        {
            en: { q: "What is the primary feature of an 'Open-ended Scheme' in Mutual Funds?", opts: ["Investors can buy and redeem units at NAV on a continuous basis directly from the fund", "Units can be purchased only during the New Fund Offer (NFO) period", "It is mandatory for these schemes to be traded exclusively on stock exchanges", "The scheme has a fixed maturity period ranging from 3 to 5 years"] },
            hi: { q: "म्यूचुअल फंड में 'ओपन-एंडेड स्कीम' (Open-ended Scheme) की प्राथमिक विशेषता क्या है?", opts: ["निवेशक सीधे फंड से निरंतर आधार पर एनएवी (NAV) पर इकाइयों को खरीद आणि भुना (Redeem) सकते हैं", "इकाइयां केवल न्यू फंड ऑफर (NFO) अवधि के दौरान ही खरीदी जा सकती हैं", "इन योजनाओं के लिए विशेष रूप से स्टॉक एक्सचेंजों पर कारोबार करना अनिवार्य है", "योजना की परिपक्वता अवधि 3 से 5 वर्ष तक निश्चित होती है"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI rules, the 'Total Expense Ratio (TER)' of a mutual fund scheme includes which of the following costs?", opts: ["Investment management fees, registrar fees, and marketing expenses", "Brokerage costs paid on internal portfolio equity trades", "Exit loads paid by the redeeming investors", "Securities Transaction Tax (STT) paid on exchange transactions"] },
            hi: { q: "सेबी के नियमों के तहत, म्यूचुअल फंड योजना के 'टोटल एक्सपेंस रेशियो' (TER) में निम्नलिखित में से कौन सी लागत शामिल है?", opts: ["निवेश प्रबंधन शुल्क, रजिस्ट्रार शुल्क और विपणन (Marketing) खर्च", "आंतरिक पोर्टफोलियो इक्विटी ट्रेडों पर भुगतान की गई ब्रोकरेज लागत", "भुनाने वाले निवेशकों द्वारा भुगतान किया गया एग्जिट लोड", "एक्सचेंज लेनदेन पर भुगतान किया गया प्रतिभूति लेनदेन कर (STT)"] },
            correct: 0
        },
        {
            en: { q: "What option Greek measures the rate of change of Delta with respect to a change in the price of the underlying asset?", opts: ["Gamma", "Vega", "Theta", "Rho"] },
            hi: { q: "कौन सा ऑप्शन ग्रीक (Option Greek) अंतर्निहित परिसंपत्ति की कीमत में बदलाव के संबंध में डेल्टा (Delta) के बदलाव की दर को मापता है?", opts: ["गामा (Gamma)", "वेगा (Vega)", "थिटा (Theta)", "रो (Rho)"] },
            correct: 0
        },
        {
            en: { q: "In commodity futures trading, if a producer locks in a selling price for their future output to eliminate price risk, they are known as a:", opts: ["Short Hedger", "Long Hedger", "Arbitrageur", "Speculator"] },
            hi: { q: "कमोडिटी फ्यूचर्स ट्रेडिंग में, यदि कोई उत्पादक मूल्य जोखिम को खत्म करने के लिए अपने भविष्य के उत्पादन के लिए बिक्री मूल्य लॉक करता है, तो उसे किस रूप में जाना जाता है?", opts: ["शॉर्ट हेजर (Short Hedger)", "लॉन्ग हेजर (Long Hedger)", "आर्बिट्रेजूर", "सटोरिया (Speculator)"] },
            correct: 0
        },
        {
            en: { q: "What is the premium multiplier effect called in derivative trading where an investor controls a large contract value with a small margin amount?", opts: ["Leverage", "Beta Factor", "Compounding", "Asymmetry"] },
            hi: { q: "डेरिवेटिव ट्रेडिंग में प्रीमियम मल्टीप्लायर प्रभाव को क्या कहा जाता है जहां एक निवेशक छोटी मार्जिन राशि के साथ बड़े अनुबंध मूल्य को नियंत्रित करता है?", opts: ["लिवरेज (Leverage / उत्तोलन)", "बीटा फैक्टर", "कंपाउंडिंग", "असममितता (Asymmetry)"] },
            correct: 0
        },
        {
            en: { q: "Which type of life insurance policy offers a combination of investment insurance protection and allows the policyholder to choose the underlying equity or debt funds?", opts: ["ULIP (Unit Linked Insurance Plan)", "Term Insurance", "Endowment Policy", "Whole Life Policy"] },
            hi: { q: "किस प्रकार की जीवन बीमा पॉलिसी निवेश और बीमा सुरक्षा का संयोजन प्रदान करती है और पॉलिसीधारक को अंतर्निहित इक्विटी या डेट फंड चुनने की अनुमति देती है?", opts: ["यूलिप (ULIP - Unit Linked Insurance Plan)", "टर्म इंश्योरेंस", "एंडोमेंट पॉलिसी", "होल लाइफ पॉलिसी"] },
            correct: 0
        },
        {
            en: { q: "According to SEBI Mutual Fund regulations, a 'Large Cap' stock is defined as a company that falls within which market capitalization rank?", opts: ["1st to 100th company", "101st to 250th company", "Top 50 companies only", "1st to 250th company"] },
            hi: { q: "सेबी म्यूचुअल फंड नियमों के अनुसार, 'लार्ज कैप' (Large Cap) स्टॉक को उस कंपनी के रूप में परिभाषित किया गया है जो किस बाजार पूंजीकरण रैंक के अंतर्गत आती है?", opts: ["पहली से 100वीं कंपनी (1st to 100th company)", "101वीं से 250वीं कंपनी", "केवल शीर्ष 50 कंपनियां", "पहली से 250वीं कंपनी"] },
            correct: 0
        },
        {
            en: { q: "What does the 'Principle of Subrogation' in general insurance imply?", opts: ["The insurer gets the right to recover damages from a third party responsible for the loss after settling the insured's claim", "The insured can claim compensation from multiple companies to make a profit", "The policy becomes void if the premium is paid after the grace period", "The insurance company can change the policy terms without the consent of the customer"] },
            hi: { q: "सामान्य बीमा में 'प्रत्यासन का सिद्धांत' (Principle of Subrogation) क्या दर्शाता है?", opts: ["बीमाकर्ता को बीमित व्यक्ति के दावे का निपटान करने के बाद नुकसान के लिए जिम्मेदार तीसरे पक्ष से हर्जाना वसूलने का अधिकार मिल जाता है", "बीमित व्यक्ति लाभ कमाने के लिए कई कंपनियों से मुआवजे का दावा कर सकता है", "यदि प्रीमियम का भुगतान ग्रेस पीरियड के बाद किया जाता है तो पॉलिसी शून्य हो जाती है", "बीमा कंपनी ग्राहक की सहमति के बिना पॉलिसी की शर्तों को बदल सकती है"] },
            correct: 0
        },
        {
            en: { q: "In the context of clearing and settlement, what does 'Novation' mean?", opts: ["The Clearing Corporation interposes itself between the buyer and seller, becoming the counterparty to every trade", "The legal cancellation of a trade due to erroneous price matching", "The automatic extension of a contract's expiration date", "The process of converting physical contracts into digital format"] },
            hi: { q: "क्लियरिंग और सेटलमेंट के संदर्भ में, 'नोवेशन' (Novation) का क्या अर्थ है?", opts: ["क्लियरिंग कॉरपोरेशन खरीदार और विक्रेता के बीच हस्तक्षेप करता है, और प्रत्येक व्यापार के लिए काउंटरपार्टी बन जाता है", "गलत मूल्य मिलान के कारण व्यापार का कानूनी रद्दीकरण", "एक अनुबंध की समाप्ति तिथि का स्वचालित विस्तार", "भौतिक अनुबंधों को डिजिटल प्रारूप में बदलने की प्रक्रिया"] },
            correct: 0
        },
        {
            en: { q: "What is the net asset value (NAV) of a mutual fund scheme?", opts: ["The market value of the scheme's assets minus its liabilities, divided by the number of outstanding units", "The total face value of all the shares purchased by the fund house", "The total amount of capital raised during the New Fund Offer (NFO)", "The highest price at which a unit of the scheme was traded during the year"] },
            hi: { q: "म्यूचुअल फंड योजना की नेट एसेट वैल्यू (NAV) क्या है?", opts: ["योजना की संपत्तियों का बाजार मूल्य ऋण उसकी देनदारियां, बकाया इकाइयों की संख्या से विभाजित", "फंड हाउस द्वारा खरीदे गए सभी शेयरों का कुल अंकित मूल्य (Face Value)", "न्यू फंड ऑफर (NFO) के दौरान जुटाई गई कुल पूंजी", "वर्ष के दौरान योजना की एक इकाई का उच्चतम कारोबार मूल्य"] },
            correct: 0
        },
        {
            en: { q: "An options trader sells a Put Option. What is their market outlook on the underlying asset?", opts: ["Bullish or Neutral", "Bearish only", "Highly Volatile", "Extremely Bearish"] },
            hi: { q: "एक ऑप्शंस ट्रेडर पुट ऑप्शन (Put Option) बेचता है। अंतर्निहित परिसंपत्ति (Underlying Asset) पर उनका बाजार दृष्टिकोण क्या है?", opts: ["तेजी या तटस्थ (Bullish or Neutral)", "केवल मंदी (Bearish only)", "अत्यधिक अस्थिर (Highly Volatile)", "अत्यधिक मंदी"] },
            correct: 0
        },
        {
            en: { q: "Which body acts as the central repository for insurance policies in electronic form in India, similar to depository participants in the stock market?", opts: ["Insurance Repositories authorized by IRDAI", "National Securities Depository Limited (NSDL) only", "Reserve Bank of India Database Wing", "Life Insurance Corporation of India (LIC) IT Division"] },
            hi: { q: "भारत में इलेक्ट्रॉनिक रूप में बीमा पॉलिसियों के लिए कौन सा निकाय केंद्रीय भंडार (Repository) के रूप में कार्य करता है, जो शेयर बाजार में डिपॉजिटरी पार्टिसिपेंट्स के समान है?", opts: ["IRDAI द्वारा अधिकृत बीमा रिपॉजिटरी (Insurance Repositories)", "केवल नेशनल सिक्योरिटीज डिपॉजिटरी लिमिटेड (NSDL)", "भारतीय रिजर्व बैंक डेटाबेस विंग", "भारतीय जीवन बीमा निगम (LIC) आईटी डिवीजन"] },
            correct: 0
        },
        {
            en: { q: "In currency trading, what does the term 'Pip' stand for?", opts: ["Percentage in Point", "Price Interest Premium", "Portfolio Investment Position", "Public Interest Parity"] },
            hi: { q: "मुद्रा (Currency) व्यापार में, 'पिप' (Pip) शब्द का क्या अर्थ है?", opts: ["परसेंटेज इन पॉइंट (Percentage in Point)", "प्राइस इंटरेस्ट प्रीमियम", "पोर्टफोलियो इन्वेस्टमेंट पोजीशन", "पब्लिक इंटरेस्ट पारिटी"] },
            correct: 0
        },
        {
            en: { q: "What type of risk cannot be diversified away by adding more stocks to a mutual fund portfolio?", opts: ["Systematic Risk", "Unsystematic Risk", "Company Specific Risk", "Liquidity Risk of a single stock"] },
            hi: { q: "म्यूचुअल फंड पोर्टफोलियो में अधिक स्टॉक जोड़ने पर भी किस प्रकार के जोखिम को कम (Diversify) नहीं किया जा सकता है?", opts: ["व्यवस्थित जोखिम (Systematic Risk / Market Risk)", "अव्यवस्थित जोखिम (Unsystematic Risk)", "कंपनी विशिष्ट जोखिम", "एक ही स्टॉक का तरलता जोखिम"] },
            correct: 0
        },
        {
            en: { q: "In the Indian equity market, what is the maximum duration within which an Asset Management Company (AMC) must deploy the funds collected in an NFO after its closure?", opts: ["Within 5 business days", "Within 30 business days", "Within 15 business days", "Within 2 business days"] },
            hi: { q: "भारतीय इक्विटी बाजार में, न्यू फंड ऑफर (NFO) के बंद होने के बाद एसेट मैनेजमेंट कंपनी (AMC) को कितने दिनों के भीतर जुटाए गए फंड को तैनात (Deploy) करना अनिवार्य है?", opts: ["5 व्यावसायिक दिनों के भीतर", "30 व्यावसायिक दिनों के भीतर", "15 व्यावसायिक दिनों के भीतर", "2 व्यावसायिक दिनों के भीतर"] },
            correct: 0
        },
        {
            en: { q: "A derivative strategy that involves buying an Out-of-the-Money Call and an Out-of-the-Money Put with the same expiry date but different strike prices is called a:", opts: ["Long Strangle", "Long Straddle", "Bull Call Spread", "Bear Put Spread"] },
            hi: { q: "एक डेरिवेटिव रणनीति जिसमें समान समाप्ति तिथि लेकिन विभिन्न स्ट्राइक कीमतों के साथ आउट-ऑफ-द-मनी कॉल और आउट-ऑफ-द-मनी पुट खरीदना शामिल है, कहलाती है:", opts: ["लॉन्ग स्ट्रैंगल (Long Strangle)", "लॉन्ग स्ट्रैडल (Long Straddle)", "बुल कॉल स्प्रेड", "बियर पुट स्प्रेड"] },
            correct: 0
        },
        {
            en: { q: "Which of the following commodities is classified as a 'Soft Commodity' in international derivative exchanges?", opts: ["Sugar", "Crude Oil", "Copper", "Gold"] },
            hi: { q: "अंतरराष्ट्रीय डेरिवेटिव एक्सचेंजों में निम्नलिखित में से कौन सी कमोडिटी 'सॉफ्ट कमोडिटी' (Soft Commodity) के रूप में वर्गीकृत है?", opts: ["चीनी (Sugar / कॉफी / कपास)", "क्रूड ऑयल", "कॉपर", "सोना"] },
            correct: 0
        },
        {
            en: { q: "What is the economic concept behind 'Purchasing Power Parity' (PPP) in currency markets?", opts: ["Exchange rates between currencies are in equilibrium when their purchasing power is the same in each of the two countries", "The country with the higher interest rate will always have a stronger currency", "Central banks must back their currency entirely with gold reserves", "Importers and exporters must buy currency at the same flat premium"] },
            hi: { q: "मुद्रा बाजारों में 'क्रय शक्ति समानता' (Purchasing Power Parity - PPP) के पीछे क्या आर्थिक अवधारणा है?", opts: ["मुद्राओं के बीच विनिमय दरें तब संतुलन में होती हैं जब दोनों देशों में उनकी क्रय शक्ति समान होती है", "उच्च ब्याज दर वाले देश की मुद्रा हमेशा मजबूत होगी", "केंद्रीय बैंकों को अपनी मुद्रा को पूरी तरह से स्वर्ण भंडार से समर्थन देना चाहिए", "आयातकों और निर्यातकों को समान फ्लैट प्रीमियम पर मुद्रा खरीदनी चाहिए"] },
            correct: 0
        },
        {
            en: { q: "Under the Principle of Indemnity in insurance, what is the maximum amount payable in the event of a loss?", opts: ["The actual financial loss suffered or the sum insured, whichever is less", "Double the market value of the property insured", "The exact sum insured plus all past premiums paid", "An amount decided by the insurance agent post the incident"] },
            hi: { q: "बीमा में क्षतिपूर्ति के सिद्धांत (Principle of Indemnity) के तहत, नुकसान की स्थिति में देय अधिकतम राशि क्या है?", opts: ["वास्तविक वित्तीय नुकसान या बीमित राशि (Sum Insured), जो भी कम हो", "बीमित संपत्ति के बाजार मूल्य का दोगुना", "सटीक बीमित राशि और पिछले सभी प्रीमियमों का भुगतान", "घटना के बाद बीमा एजेंट द्वारा तय की गई राशि"] },
            correct: 0
        },
        {
            en: { q: "In Mutual Funds, what does the 'Sharpe Ratio' measure?", opts: ["Risk-adjusted returns of a portfolio relative to the risk-free rate", "The total tracking error of an index fund against its benchmark", "The percentage of cash held by the fund manager during a bear market", "The turnover frequency of assets within the scheme"] },
            hi: { q: "म्यूचुअल फंड में 'शार्प रेशियो' (Sharpe Ratio) क्या मापता है?", opts: ["जोखिम-मुक्त दर (Risk-free rate) के संबंध में पोर्टफोलियो का जोखिम-समायोजित रिटर्न", "अपने बेंचमार्क के खिलाफ एक इंडेक्स फंड का कुल ट्रैकिंग एरर", "मंदी के बाजार के दौरान फंड मैनेजर द्वारा रखी गई नकदी का प्रतिशत", "योजना के भीतर संपत्तियों के कारोबार (Turnover) की आवृत्ति"] },
            correct: 0
        },
        {
            en: { q: "What happens to the Theta (Time Decay) of an option contract as it approaches its expiration date?", opts: ["Theta decay accelerates and option value erodes faster", "Theta becomes positive for the option buyer", "Theta decay slows down to zero instantly", "Theta remains completely constant throughout the contract life"] },
            hi: { q: "एक ऑप्शन अनुबंध के थिटा (Theta / टाइम डेके) का क्या होता है जैसे-जैसे वह अपनी समाप्ति तिथि के करीब पहुंचता है?", opts: ["थिटा डेके तेज हो जाता है (Accelerates) और ऑप्शन मूल्य तेजी से घटता है", "ऑप्शन खरीदार के लिए थिटा सकारात्मक हो जाता है", "थिटा डेके तुरंत शून्य हो जाता है", "अनुबंध के पूरे जीवनकाल में थिटा पूरी तरह से स्थिर रहता है"] },
            correct: 0
        },
        {
            en: { q: "Which entity manages and regulates physical delivery warehouses for agro-commodities in India?", opts: ["Warehousing Development and Regulatory Authority (WDRA)", "Securities and Exchange Board of India (SEBI)", "Food Corporation of India (FCI)", "Agricultural and Processed Food Products Export Development Authority (APEDA)"] },
            hi: { q: "भारत में कृषि-कमोडिटीज के लिए भौतिक डिलीवरी गोदामों (Warehouses) का प्रबंधन और नियमन कौन सी इकाई करती है?", opts: ["वेयरहाउसिंग डेवलपमेंट एंड रेगुलेटरी अथॉरिटी (WDRA)", "भारतीय प्रतिभूति और विनिमय बोर्ड (SEBI)", "भारतीय खाद्य निगम (FCI)", "कृषि और प्रसंस्कृत खाद्य उत्पाद निर्यात विकास प्राधिकरण (APEDA)"] },
            correct: 0
        },
        {
            en: { q: "If an Indian exporter wants to hedge against the depreciation of the US Dollar (USD), what position should they take in the USD-INR futures market?", opts: ["Short/Sell USD-INR Futures", "Long/Buy USD-INR Futures", "Buy USD-INR Call Options", "Sell USD-INR Put Options"] },
            hi: { q: "यदि कोई भारतीय निर्यातक अमेरिकी डॉलर (USD) के मूल्यह्रास (Depreciation) के खिलाफ बचाव (Hedge) करना चाहता है, तो उन्हें USD-INR फ्यूचर्स बाजार में क्या स्थिति लेनी चाहिए?", opts: ["USD-INR फ्यूचर्स को शॉर्ट/बेचना चाहिए (Short/Sell USD-INR Futures)", "USD-INR फ्यूचर्स को लॉन्ग/खरीदना चाहिए", "USD-INR कॉल ऑप्शन्स खरीदना चाहिए", "USD-INR पुट ऑप्शन्स बेचना चाहिए"] },
            correct: 0
        },
        {
            en: { q: "What is a 'Suicide Bag' or a provision inside health and life insurance contracts that specifies a waiting period before covering self-inflicted harm?", opts: ["Suicide Clause", "Exclusionary Grace Protocol", "Indemnity Cap", "Material Misstatement Warranty"] },
            hi: { q: "स्वास्थ्य और जीवन बीमा अनुबंधों के अंदर कौन सा प्रावधान आत्म-उत्पीड़न (Self-inflicted harm) को कवर करने से पहले एक प्रतीक्षा अवधि निर्दिष्ट करता है?", opts: ["सुसाइड क्लॉज (Suicide Clause)", "एक्सक्लूज़नरी ग्रेस प्रोटोकॉल", "इंडेम्निटी कैप", "मटेरियल मिसस्टेटमेंट वारंटी"] },
            correct: 0
        },
        {
            en: { q: "In Mutual Funds, what is the primary benefit of a 'Systematic Transfer Plan' (STP)?", opts: ["To transfer a fixed amount from one scheme (usually debt) to another scheme (usually equity) regularly", "To dynamically change the nominee of the investment portfolio", "To automatically convert regular mutual fund units into direct equity stocks", "To waive off the total expense ratio of the fund during market highs"] },
            hi: { q: "म्यूचुअल फंड में, 'सिस्टमैटिक ट्रांसफर प्लान' (STP) का प्राथमिक लाभ क्या है?", opts: ["एक योजना (आमतौर पर डेट) से दूसरी योजना (आमतौर पर इक्विटी) में नियमित रूप से एक निश्चित राशि स्थानांतरित करना", "निवेश पोर्टफोलियो के नामांकित व्यक्ति (Nominee) को गतिशील रूप से बदलना", "नियमित म्यूचुअल फंड इकाइयों को स्वचालित रूप से सीधे इक्विटी शेयरों में बदलना", "बाजार के उच्चतम स्तर के दौरान फंड के कुल व्यय अनुपात (TER) को माफ करना"] },
            correct: 0
        },
        {
            en: { q: "Which of the following describes an 'Arbitrage' opportunity in the stock and derivative market?", opts: ["Simultaneously buying an asset in one market and selling it in another at a higher price to lock in a risk-free profit", "Predicting the future movement of a stock based on technical charts", "Holding a diversified basket of micro-cap stocks for a long period", "Selling call options without holding the underlying stock asset"] },
            hi: { q: "निम्नलिखित में से कौन स्टॉक और डेरिवेटिव बाजार में 'आर्बिट्रेज' (Arbitrage) अवसर का वर्णन करता है?", opts: ["जोखिम-मुक्त लाभ लॉक करने के लिए एक बाजार में संपत्ति खरीदना और दूसरे बाजार में उच्च कीमत पर बेचना", "तकनीकी चार्ट के आधार पर स्टॉक के भविष्य के आंदोलन की भविष्यवाणी करना", "लंबे समय तक माइक्रो-कैप शेयरों की एक विविध टोकरी रखना", "अंतर्निहित स्टॉक संपत्ति को रखे बिना कॉल ऑप्शन बेचना"] },
            correct: 0
        },
        {
            en: { q: "What does the 'Beta' of a mutual fund portfolio signify?", opts: ["The volatility of the fund relative to its benchmark index", "The total amount of dividend generated by the scheme assets", "The expertise and track record of the fund manager", "The percentage of small-cap stocks inside the multi-cap allocation"] },
            hi: { q: "म्यूचुअल फंड पोर्टफोलियो का 'बीटा' (Beta) क्या दर्शाता है?", opts: ["अपने बेंचमार्क इंडेक्स के सापेक्ष फंड की अस्थिरता (Sensitivity / Volatility)", "योजना परिसंपत्तियों द्वारा उत्पन्न लाभांश (Dividend) की कुल राशि", "फंड मैनेजर की विशेषज्ञता और ट्रैक रिकॉर्ड", "मल्टी-कैप आवंटन के अंदर स्मॉल-कैप शेयरों का प्रतिशत"] },
            correct: 0
        },
        {
            en: { q: "In commodity derivatives, what is the margin collected to cover potential losses arising from extreme price movements beyond the daily standard value?", opts: ["Extreme Loss Margin (ELM)", "Initial Margin", "Mark-to-Market Margin", "Tender Period Margin"] },
            hi: { q: "कमोडिटी डेरिवेटिव्स में, दैनिक मानक मूल्य से परे अत्यधिक मूल्य उतार-चढ़ाव से उत्पन्न होने वाले संभावित नुकसान को कवर करने के लिए कौन सा मार्जिन एकत्र किया जाता है?", opts: ["एक्सट्रीम लॉस मार्जिन (ELM)", "प्रारंभिक मार्जिन (Initial Margin)", "मार्क-टू-मार्केट मार्जिन", "टेंडर पीरियड मार्जिन"] },
            correct: 0
        },
        {
            en: { q: "Which currency pair is classified as an 'Indirect Quote' in India?", opts: ["The amount of foreign currency required to buy one fixed unit of Indian Rupee (INR)", "The amount of Indian Rupee required to buy one unit of foreign currency", "Any cross-currency contract that does not involve the Indian Rupee", "A standard quotation fixed by the International Monetary Fund"] },
            hi: { q: "भारत में किस मुद्रा युग्म (Currency pair) को 'अप्रत्यक्ष उद्धरण' (Indirect Quote) के रूप में वर्गीकृत किया गया है?", opts: ["भारतीय रुपये (INR) की एक निश्चित इकाई खरीदने के लिए आवश्यक विदेशी मुद्रा की मात्रा", "विदेशी मुद्रा की एक इकाई खरीदने के लिए आवश्यक भारतीय रुपये की मात्रा", "कोई भी क्रॉस-करेंसी अनुबंध जिसमें भारतीय रुपया शामिल नहीं है", "अंतर्राष्ट्रीय मुद्रा कोष द्वारा तय किया गया एक मानक उद्धरण"] },
            correct: 0
        },
        {
            en: { q: "Under IRDAI regulations, what is the mandatory minimum solvency ratio that an insurance company must maintain in India?", opts: ["1.50 (150%)", "1.00 (100%)", "2.00 (200%)", "0.50 (50%)"] },
            hi: { q: "IRDAI के नियमों के तहत, भारत में एक बीमा कंपनी को अनिवार्य न्यूनतम सॉल्वेंसी अनुपात (Solvency Ratio) कितना बनाए रखना चाहिए?", opts: ["1.50 (150%)", "1.00 (100%)", "2.00 (200%)", "0.50 (50%)"] },
            correct: 0
        },
        {
            en: { q: "What does 'Tracking Error' signify in the context of Mutual Fund Index Funds?", opts: ["The divergence between the price behavior of a position or portfolio and the price behavior of a benchmark", "The total mechanical lag in updating the NAV on the digital interface", "The error committed by the clearing corporation during settlement", "The computational variance inside tax deduction schemes"] },
            hi: { q: "म्यूचुअल फंड इंडेक्स फंड के संदर्भ में 'ट्रैकिंग एरर' (Tracking Error) क्या दर्शाता है?", opts: ["एक पोर्टफोलियो के मूल्य व्यवहार और एक बेंचमार्क इंडेक्स के मूल्य व्यवहार के बीच विचलन (Divergence)", "डिजिटल इंटरफ़ेस पर एनएवी अपडेट करने में कुल यांत्रिक अंतराल", "निपटान के दौरान क्लियरिंग कॉरपोरेशन द्वारा की गई त्रुटि", "कर कटौती योजनाओं के अंदर गणनात्मक भिन्नता"] },
            correct: 0
        },
        {
            en: { q: "If an options contract has an intrinsic value of zero but still possesses a positive market premium, this premium is entirely composed of:", opts: ["Time Value", "Implied Volatility Cap", "Delta Ratio Value", "Gamma Spillover Value"] },
            hi: { q: "यदि एक ऑप्शंस अनुबंध का अंतर्निहित मूल्य (Intrinsic Value) शून्य है, लेकिन फिर भी उसका बाजार प्रीमियम सकारात्मक है, तो यह प्रीमियम पूरी तरह से किससे बना है?", opts: ["समय मूल्य (Time Value)", "निहित अस्थिरता कैप", "डेल्टा अनुपात मूल्य", "गामा स्पिलओवर मूल्य"] },
            correct: 0
        },
        {
            en: { q: "Which of the following is an example of an 'Agro Commodity' traded on Indian derivative exchanges?", opts: ["Guar Seed", "Crude Oil", "Natural Gas", "Aluminum"] },
            hi: { q: "निम्नलिखित में से कौन सा भारतीय डेरिवेटिव एक्सचेंजों पर कारोबार करने वाली 'कृषि कमोडिटी' (Agro Commodity) का एक उदाहरण है?", opts: ["ग्वार बीज (Guar Seed)", "क्रूड ऑयल", "नेचुरल गैस", "एल्युमिनियम"] },
            correct: 0
        },
        {
            en: { q: "The expansion of the technical acronym 'NDF' inside cross-border forex derivative instruments is:", opts: ["Non-Deliverable Forward", "Net Derivative Fund", "National Deposit Framework", "Nominal Delta Factor"] },
            hi: { q: "सीमा पार विदेशी मुद्रा डेरिवेटिव उपकरणों के भीतर तकनीकी संक्षिप्त नाम 'NDF' का विस्तार क्या है?", opts: ["नॉन-डिलिवरेबल फॉरवर्ड (Non-Deliverable Forward)", "नेट डेरिवेटिव फंड", "नेशनल डिपॉजिट फ्रेमवर्क", "नॉमिनल डेल्टा फैक्टर"] },
            correct: 0
        },
        {
            en: { q: "What does the 'Principle of Contribution' in insurance imply?", opts: ["If an asset is insured with multiple companies, they share the loss proportionately to indemnify the insured", "The policyholder must contribute a percentage of their salary to a public emergency pool", "The insurance premium is redistributed to downstream micro-agents automatically", "The nominee must pay a statutory fee to claim the maturity values"] },
            hi: { q: "बीमा में 'अंशदान का सिद्धांत' (Principle of Contribution) क्या दर्शाता है?", opts: ["यदि किसी संपत्ति का कई कंपनियों से बीमा कराया जाता है, तो वे बीमित व्यक्ति की क्षतिपूर्ति के लिए आनुपातिक रूप से नुकसान साझा करते हैं", "पॉलिसीधारक को अपने वेतन का एक प्रतिशत सार्वजनिक आपातकालीन पूल में योगदान देना चाहिए", "बीमा प्रीमियम स्वचालित रूप से डाउनस्ट्रीम माइक्रो-एजेंटों को पुनर्वितरित किया जाता है", "नामांकित व्यक्ति को परिपक्वता मूल्यों का दावा करने के लिए वैधानिक शुल्क का भुगतान करना होगा"] },
            correct: 0
        },
        {
            en: { q: "In Mutual Funds, what is the maximum lock-in period for an Equity Linked Savings Scheme (ELSS)?", opts: ["3 years", "5 years", "1 year", "10 years"] },
            hi: { q: "म्यूचुअल फंड में, इक्विटी लिंक्ड सेविंग्स स्कीम (ELSS) के लिए अधिकतम लॉक-इन अवधि (Lock-in Period) कितनी है?", opts: ["3 वर्ष (3 years)", "5 वर्ष", "1 वर्ष", "10 वर्ष"] },
            correct: 0
        },
        {
            en: { q: "An option contract where the buyer has the right to buy the underlying asset is called a:", opts: ["Call Option", "Put Option", "Swap Contract", "Forward Warrant"] },
            hi: { q: "एक ऑप्शन अनुबंध जहां खरीदार के पास अंतर्निहित संपत्ति खरीदने का अधिकार होता है, कहलाता है:", opts: ["कॉल ऑप्शन (Call Option)", "पुट ऑप्शन (Put Option)", "स्वैप अनुबंध", "फॉरवर्ड वारंट"] },
            correct: 0
        },
        {
            en: { q: "What represents the 'Cost of Carry' inside commodity futures contracts?", opts: ["The total expense of storage, insurance, and financing required to hold a physical commodity over time", "The brokerage charges collected by terminal trading application desks", "The logistics transportation toll levied between interstate entry borders", "The custom validation packaging tariffs imposed at seaport grids"] },
            hi: { q: "कमोडिटी फ्यूचर्स अनुबंधों के अंदर 'कॉस्ट ऑफ कैरी' (Cost of Carry) क्या दर्शाता है?", opts: ["समय के साथ भौतिक कमोडिटी रखने के लिए आवश्यक भंडारण, बीमा और वित्तपोषण का कुल खर्च", "टर्मिनल ट्रेडिंग एप्लिकेशन डेस्क द्वारा एकत्र किया गया ब्रोकरेज शुल्क", "अंतरराज्यीय प्रवेश सीमाओं के बीच लगाया जाने वाला लॉजिस्टिक्स परिवहन टोल", "समुद्री बंदरगाह ग्रिड पर लगाए जाने वाले कस्टम सत्यापन पैकेजिंग टैरिफ"] },
            correct: 0
        },
        {
            en: { q: "What historical act governs the statutory operations of the foreign exchange ecosystem inside India currently?", opts: ["Foreign Exchange Management Act (FEMA), 1999", "Foreign Exchange Regulation Act (FERA), 1973", "Reserve Bank Configuration Statutes, 1934", "Securities Contracts Regulation Provision, 1956"] },
            hi: { q: "वर्तमान में भारत के भीतर विदेशी मुद्रा पारिस्थितिकी तंत्र के वैधानिक संचालन को कौन सा ऐतिहासिक अधिनियम नियंत्रित करता है?", opts: ["विदेशी मुद्रा प्रबंधन अधिनियम (FEMA), 1999", "विदेशी मुद्रा विनियमन अधिनियम (FERA), 1973", "रिजर्व बैंक कॉन्फ़िगरेशन क़ानून, 1934", "प्रतिभूति अनुबंध विनियमन प्रावधान, 1956"] },
            correct: 0
        },
        {
            en: { q: "What does an insurance 'Rider' signify?", opts: ["An amendment or addition to an existing insurance policy that provides extra coverage or benefits", "The driver responsible for transport infrastructure risk logistics", "The third-party surveyor who calculates physical property damages", "The statutory validation license granted to corporate brokerage houses"] },
            hi: { q: "बीमा 'राइडर' (Rider) क्या दर्शाता है?", opts: ["एक मौजूदा बीमा पॉलिसी में संशोधन या जोड़ जो अतिरिक्त कवरेज या लाभ प्रदान करता है", "परिवहन बुनियादी ढांचा जोखिम रसद के लिए जिम्मेदार चालक", "तीसरे पक्ष का सर्वेक्षक जो भौतिक संपत्ति के नुकसान की गणना करता है", "कॉर्पोरेट ब्रोकरेज हाउसों को दिया गया वैधानिक सत्यापन लाइसेंस"] },
            correct: 0
        },
        {
            en: { q: "What does an Asset Management Company (AMC) use to calculate daily transaction tracking values for fractional portfolio units?", opts: ["Net Asset Value (NAV)", "Price-to-Book Multiplier Matrix", "Wholesale Price Inflation Tracker", "Weighted Margin Average Index"] },
            hi: { q: "एसेट मैनेजमेंट कंपनी (AMC) आंशिक पोर्टफोलियो इकाइयों के लिए दैनिक लेनदेन ट्रैकिंग मूल्यों की गणना करने के लिए किसका उपयोग करती है?", opts: ["नेट एसेट वैल्यू (NAV)", "मूल्य-टू-बुक गुणक मैट्रिक्स", "थोक मूल्य मुद्रास्फीति ट्रैकर", "भारित मार्जिन औसत सूचकांक"] },
            correct: 0
        },
        {
            en: { q: "A strategy where a trader simultaneously sells a Call and a Put option of the same strike price and expiry is known as a:", opts: ["Short Straddle", "Short Strangle", "Long Straddle", "Long Strangle"] },
            hi: { q: "एक रणनीति जहां एक ट्रेडर एक ही स्ट्राइक प्राइस और समाप्ति के कॉल और पुट ऑप्शन को एक साथ बेचता है, कहलाती है:", opts: ["शॉर्ट स्ट्रैडल (Short Straddle)", "शॉर्ट स्ट्रैंगल (Short Strangle)", "लॉन्ग स्ट्रैडल", "लॉन्ग स्ट्रैंगल"] },
            correct: 0
        },
        {
            en: { q: "Which of the following belongs to the 'Energy' classification quadrant on Indian multi-commodity exchanges?", opts: ["Crude Oil", "Silver", "Lead", "Cotton"] },
            hi: { q: "निम्नलिखित में से कौन सा भारतीय मल्टी-कमोडिटी एक्सचेंजों पर 'ऊर्जा' (Energy) वर्गीकरण चतुर्थांश के अंतर्गत आता है?", opts: ["क्रूड ऑयल (Crude Oil)", "चांदी", "सीसा (Lead)", "कपास"] },
            correct: 0
        },
        {
            en: { q: "What standard unit configuration represents the contract base value format of an exchange-traded USD-INR futures lot in India?", opts: ["USD 1,000", "USD 10,000", "USD 5,000", "USD 100"] },
            hi: { q: "कौन सा मानक इकाई कॉन्फ़िगरेशन भारत में एक्सचेंज-ट्रेडेड USD-INR फ्यूचर्स लॉट के अनुबंध आधार मूल्य प्रारूप का प्रतिनिधित्व करता है?", opts: ["USD 1,000", "USD 10,000", "USD 5,000", "USD 100"] },
            correct: 0
        },
        // --- NISM / NCFM: Equity, Derivatives, Commodity, Currency, MF & Insurance (Set 2) ---
        {
            en: { q: "According to SEBI regulations, a Mutual Fund scheme's NAV must be calculated and published on which basis for all business days?", opts: ["Daily basis", "Weekly basis", "Fortnightly basis", "Monthly basis"] },
            hi: { q: "सेबी (SEBI) के नियमों के अनुसार, एक म्यूचुअल फंड योजना की एनएवी (NAV) सभी व्यावसायिक दिनों के लिए किस आधार पर गणना और प्रकाशित की जानी चाहिए?", opts: ["दैनिक आधार पर (Daily basis)", "साप्ताहिक आधार पर", "पाक्षिक आधार पर", "मासिक आधार पर"] },
            correct: 0
        },
        {
            en: { q: "What does the 'AUM' of an Asset Management Company (AMC) represent?", opts: ["Assets Under Management - The total market value of investments managed by the fund", "Annual Usage Margin - The administrative charges levied on investors", "Approved Unit Multiplier - The total number of valid folios registered", "Asset Allocation Matrix - The ratio between equity and debt assets"] },
            hi: { q: "किसी एसेट मैनेजमेंट कंपनी (AMC) का 'AUM' क्या दर्शाता है?", opts: ["एसेट्स अंडर मैनेजमेंट (Assets Under Management) - फंड द्वारा प्रबंधित निवेश का कुल बाजार मूल्य", "एनुअल यूसेज मार्जिन - निवेशकों पर लगाया जाने वाला प्रशासनिक शुल्क", "अप्रूव्ड यूनिट मल्टीप्लायर - पंजीकृत वैध फोलियो की कुल संख्या", "एसेट एलोकेशन मैट्रिक्स - इक्विटी और डेट परिसंपत्तियों के बीच का अनुपात"] },
            correct: 0
        },
        {
            en: { q: "Which type of mutual fund scheme dynamically changes its allocation between equity and debt based on market conditions?", opts: ["Balanced Advantage Fund (Dynamic Asset Allocation)", "Equity Linked Savings Scheme (ELSS)", "Gilt Fund", "Sectoral / Thematic Fund"] },
            hi: { q: "किस प्रकार की म्यूचुअल फंड योजना बाजार की स्थितियों के आधार पर इक्विटी और डेट के बीच अपने आवंटन (Allocation) को गतिशील रूप से बदलती है?", opts: ["बैलेंस्ड एडवांटेज फंड (Dynamic Asset Allocation)", "इक्विटी लिंक्ड सेविंग्स स्कीम (ELSS)", "गिल्ट फंड (Gilt Fund)", "सेक्टरल / थमैटिक फंड"] },
            correct: 0
        },
        {
            en: { q: "In a mutual fund dividend option, who pays the tax on dividends received by the investor under the current Indian Income Tax rules?", opts: ["The investor pays tax at their applicable income tax slab rate", "The Asset Management Company pays Dividend Distribution Tax (DDT) directly", "Dividends are completely tax-free for all retail individual investors", "The Custodian bank deducts flat 30% without considering slabs"] },
            hi: { q: "वर्तमान भारतीय आयकर नियमों के तहत म्यूचुअल फंड डिविडेंड विकल्प में, निवेशक को प्राप्त लाभांश (Dividend) पर कर (Tax) कौन चुकाता है?", opts: ["निवेशक अपने लागू आयकर स्लैब दर के अनुसार कर का भुगतान करता है", "एसेट मैनेजमेंट कंपनी सीधे डिविडेंड डिस्ट्रीब्यूशन टैक्स (DDT) का भुगतान करती है", "सभी खुदरा व्यक्तिगत निवेशकों के लिए लाभांश पूरी तरह से कर-मुक्त है", "कस्टोडियन बैंक स्लैब पर विचार किए बिना फ्लैट 30% की कटौती करता है"] },
            correct: 0
        },
        {
            en: { q: "What is the primary investment objective of a 'Gilt Fund' in the mutual fund sector?", opts: ["To invest exclusively in government securities with zero sovereign credit risk", "To invest in high-growth small-cap technology startups", "To generate risk-free arbitrage profits from physical gold commodities", "To invest in international blue-chip companies traded across US markets"] },
            hi: { q: "म्यूचुअल फंड क्षेत्र में 'गिल्ट फंड' (Gilt Fund) का प्राथमिक निवेश उद्देश्य क्या है?", opts: ["शून्य सॉवरेन क्रेडिट जोखिम वाली सरकारी प्रतिभूतियों (Government Securities) में निवेश करना", "उच्च विकास वाले स्मॉल-कैप टेक्नोलॉजी स्टार्टअप्स में निवेश करना", "भौतिक सोने की कमोडिटी से जोखिम मुक्त आर्बिट्रेज लाभ उत्पन्न करना", "अमेरिकी बाजारों में कारोबार करने वाली अंतरराष्ट्रीय ब्लू-चिप कंपनियों में निवेश करना"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI guidelines, what mandatory document must be provided to a potential investor before they invest in a mutual fund scheme?", opts: ["Key Information Memorandum (KIM)", "The complete balance sheet of the sponsor company", "The income tax assessment report of the fund manager", "The structural map of the regional warehouse networks"] },
            hi: { q: "सेबी के दिशानिर्देशों के तहत, किसी संभावित निवेशक को म्यूचुअल फंड योजना में निवेश करने से पहले कौन सा अनिवार्य दस्तावेज प्रदान किया जाना चाहिए?", opts: ["की इंफॉर्मेशन मेमोरैंडम (Key Information Memorandum - KIM)", "प्रायोजक (Sponsor) कंपनी की पूरी बैलेंस शीट", "फंड मैनेजर की आयकर निर्धारण रिपोर्ट", "क्षेत्रीय गोदाम नेटवर्क का संरचनात्मक मानचित्र"] },
            correct: 0
        },
        {
            en: { q: "Who holds the physical cash and securities of a Mutual Fund scheme in safe custody to prevent fraud or misuse by the AMC?", opts: ["The Custodian", "The Sponsor", "The Registrar and Transfer Agent (RTA)", "The Independent Trustees"] },
            hi: { q: "एएमसी (AMC) द्वारा धोखाधड़ी या दुरुपयोग को रोकने के लिए म्यूचुअल फंड योजना की भौतिक नकदी और प्रतिभूतियों को सुरक्षित अभिरक्षा में कौन रखता है?", opts: ["कस्टोडियन (The Custodian / अभिरक्षक)", "प्रायोजक (The Sponsor)", "रजिस्ट्रार और ट्रांसफर एजेंट (RTA)", "स्वतंत्र ट्रस्टी (Independent Trustees)"] },
            correct: 0
        },
        {
            en: { q: "A mutual fund scheme that charges an ongoing expenses fee of 2.25% is categorized under which investment route?", opts: ["Regular Plan", "Direct Plan", "Institutional Closed Plan", "Sovereign Exempt Plan"] },
            hi: { q: "एक म्यूचुअल फंड योजना जो 2.25% का निरंतर व्यय शुल्क (Expenses Fee) लेती है, उसे किस निवेश मार्ग के तहत वर्गीकृत किया जाता है?", opts: ["रेगुलर प्लान (Regular Plan - क्योंकि इसमें डिस्ट्रीब्यूटर कमीशन शामिल होता है)", "डायरेक्ट प्लान (Direct Plan)", "संस्थागत बंद योजना", "सॉवरेन छूट योजना"] },
            correct: 0
        },
        {
            en: { q: "What does the 'Lock-in Period' of 3 years imply for an ELSS (Equity Linked Savings Scheme) mutual fund?", opts: ["The units cannot be sold or redeemed under any circumstances until 3 years from the date of purchase", "The NAV of the fund remains fixed and frozen for the first 3 years", "The fund manager cannot change the underlying stocks for 3 years", "The investor must compulsorily make monthly deposits for 3 years"] },
            hi: { q: "ELSS (इक्विटी लिंक्ड सेविंग्स स्कीम) म्यूचुअल फंड के लिए 3 वर्ष की 'लॉक-इन अवधि' का क्या अर्थ है?", opts: ["खरीद की तारीख से 3 वर्ष तक किसी भी परिस्थिति में इकाइयों को बेचा या भुनाया (Redeem) नहीं जा सकता", "फंड की एनएवी पहले 3 वर्षों के लिए निश्चित और फ्रीज रहती है", "फंड मैनेजर 3 साल तक अंतर्निहित शेयरों को नहीं बदल सकता है", "निवेशक को 3 साल तक अनिवार्य रूप से मासिक जमा करना होगा"] },
            correct: 0
        },
        {
            en: { q: "In mutual funds, what is the process of purchasing additional units automatically using the dividends declared by the scheme called?", opts: ["Dividend Reinvestment Plan", "Dividend Payout Plan", "Systematic Withdrawal Plan", "Capital Appreciation Transfer"] },
            hi: { q: "म्यूचुअल फंड में, योजना द्वारा घोषित लाभांश का उपयोग करके स्वचालित रूप से अतिरिक्त इकाइयाँ खरीदने की प्रक्रिया को क्या कहा जाता है?", opts: ["डिविडेंड रीइन्वेस्टमेंट प्लान (Dividend Reinvestment Plan)", "डिविडेंड पेआउट प्लान", "सिस्टमैटिक विड्रॉल प्लान", "कैपिटल अप्रिसिएशन ट्रांसफर"] },
            correct: 0
        },
        {
            en: { q: "What is the role of 'Registrar and Transfer Agents' (RTAs) like CAMS or KFintech in the mutual fund ecosystem?", opts: ["To maintain investor records, process applications, purchases, and redemption transactions", "To decide the corporate governance policies of listed stock assets", "To underwrite the risks of high-net-worth individual investments", "To manage the structural derivative margin exposure grids"] },
            hi: { q: "म्यूचुअल फंड पारिस्थितिकी तंत्र में CAMS या KFintech जैसे 'रजिस्ट्रार और ट्रांसफर एजेंट' (RTA) की क्या भूमिका है?", opts: ["निवेशकों के रिकॉर्ड को बनाए रखना, आवेदनों, खरीद और मोचन (Redemption) लेनदेन को प्रोसेस करना", "सूचीबद्ध स्टॉक परिसंपत्तियों की कॉर्पोरेट प्रशासन नीतियों को तय करना", "उच्च नेट-वर्थ वाले व्यक्तिगत निवेश के जोखिमों को अंडरराइट करना", "संरचनात्मक डेरिवेटिव मार्जिन एक्सपोजर ग्रिड का प्रबंधन करना"] },
            correct: 0
        },
        {
            en: { q: "Which parameter measures the total percentage of a mutual fund portfolio's holdings that have changed over a period of one year?", opts: ["Portfolio Turnover Rate", "Expense Ratio Coefficient", "Tracking Error Standard", "Sharpe Deviation Index"] },
            hi: { q: "कौन सा पैरामीटर म्यूचुअल फंड पोर्टफोलियो की होल्डिंग्स के कुल प्रतिशत को मापता है जो एक वर्ष की अवधि में बदला है?", opts: ["पोर्टफोलियो टर्नओवर रेट (Portfolio Turnover Rate)", "व्यय अनुपात गुणांक", "ट्रैकिंग एरर मानक", "शार्प विचलन सूचकांक"] },
            correct: 0
        },
        {
            en: { q: "If a mutual fund scheme invests at least 80% of its total assets in stocks of a single specific industry, like banking or infrastructure, it is classified as:", opts: ["Sectoral Fund", "Flexi Cap Fund", "Multi Cap Fund", "Large and Mid Cap Fund"] },
            hi: { q: "यदि कोई म्यूचुअल फंड योजना अपनी कुल संपत्ति का कम से कम 80% किसी एक विशिष्ट उद्योग (जैसे बैंकिंग या बुनियादी ढांचा) के शेयरों में निवेश करती है, तो उसे किस रूप में वर्गीकृत किया जाता है?", opts: ["सेक्टरल फंड (Sectoral Fund)", "फ्लेक्सी कैप फंड (Flexi Cap Fund)", "मल्टी कैप Fund", "लार्ज एंड मिड कैप फंड"] },
            correct: 0
        },
        {
            en: { q: "Which mutual fund risk classification tool features a meter format ranking risks from 'Low' to 'Very High'?", opts: ["Riskometer", "Beta Gauge", "Standard Deviation Scale", "Credit Matrix Meter"] },
            hi: { q: "कौन सा म्यूचुअल फंड जोखिम वर्गीकरण उपकरण एक मीटर प्रारूप प्रदर्शित करता है जो जोखिमों को 'कम' से 'बहुत उच्च' तक रैंक करता है?", opts: ["रिस्कोमीटर (Riskometer)", "बीटा गेज", "मानक विचलन पैमाना", "क्रेडिट मैट्रिक्स मीटर"] },
            correct: 0
        },
        {
            en: { q: "What does an investor set up if they want to withdraw a fixed amount of money from their mutual fund scheme every month regularly?", opts: ["SWP (Systematic Withdrawal Plan)", "SIP (Systematic Investment Plan)", "STP (Systematic Transfer Plan)", "NFO (New Fund Offer)"] },
            hi: { q: "यदि कोई निवेशक हर महीने नियमित रूप से अपनी म्यूचुअल फंड योजना से एक निश्चित राशि निकालना चाहता है, तो वह क्या सेटअप करता है?", opts: ["एसडब्ल्यूपी (SWP - Systematic Withdrawal Plan)", "एसआईपी (SIP)", "एसटीपी (STP)", "एनएफओ (NFO)"] },
            correct: 0
        },
        {
            en: { q: "What type of risk arises when an AMC cannot sell its portfolio assets quickly at a fair price to meet sudden massive redemption requests?", opts: ["Liquidity Risk", "Credit Risk", "Interest Rate Risk", "Sovereign Default Risk"] },
            hi: { q: "किस प्रकार का जोखिम तब उत्पन्न होता है जब कोई एएमसी अचानक भारी रिडेम्पशन अनुरोधों को पूरा करने के लिए उचित मूल्य पर अपने पोर्टफोलियो परिसंपत्तियों को जल्दी से नहीं बेच पाती है?", opts: ["तरलता जोखिम (Liquidity Risk)", "क्रेडिट जोखिम", "ब्याज दर जोखिम", "सॉवरेन डिफॉल्ट जोखिम"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI rules, close-ended mutual fund schemes must offer liquidity to investors through which mechanism after the NFO closes?", opts: ["Mandatory listing on a recognized stock exchange for secondary trading", "Daily direct redemption facility open at the AMC cash counter", "Automatic conversion into public infrastructure tax bonds", "Interstate money market credit swap pipelines"] },
            hi: { q: "सेबी के नियमों के तहत, क्लोज-एंडेड म्यूचुअल फंड योजनाओं को एनएफओ बंद होने के बाद किस तंत्र के माध्यम से निवेशकों को तरलता प्रदान करनी चाहिए?", opts: ["द्वितीयक व्यापार (Secondary Trading) के लिए एक मान्यता प्राप्त स्टॉक एक्सचेंज पर अनिवार्य लिस्टिंग", "एएमसी कैश काउंटर पर दैनिक प्रत्यक्ष रिडेम्पशन सुविधा", "सार्वजनिक बुनियादी ढांचा कर बांड में स्वचालित रूपांतरण", "अंतरराज्यीय मुद्रा बाजार क्रेडिट स्वैप पाइपलाइन"] },
            correct: 0
        },
        {
            en: { q: "What does 'Cut-off Time' signify in mutual fund transactions?", opts: ["The historical daily deadline time after which applications receive the next business day's NAV", "The duration allocated to change the portfolio stock setup", "The final lock-in expiry date of tax exemption schemes", "The time taken by the custodian to verify physical cash vaults"] },
            hi: { q: "म्यूचुअल फंड लेनदेन में 'कट-ऑफ टाइम' (Cut-off Time) क्या दर्शाता है?", opts: ["दैनिक समय सीमा (Deadline) जिसके बाद प्राप्त आवेदनों को अगले व्यावसायिक दिन की एनएवी (NAV) मिलती है", "पोर्टफोलियो स्टॉक सेटअप को बदलने के लिए आवंटित अवधि", "कर छूट योजनाओं की अंतिम लॉक-इन समाप्ति तिथि", "कस्टोडियन द्वारा भौतिक नकदी तिजोरियों को सत्यापित करने में लिया गया समय"] },
            correct: 0
        },
        {
            en: { q: "Which regulation framework governs the legal verification and anti-money laundering documentation (KYC) for mutual fund investments in India?", opts: ["Prevention of Money Laundering Act (PMLA), 2002", "Securities Contracts (Regulation) Act, 1956", "Companies Act, 2013 Schedule Corporate Law", "Reserve Bank Operational Banking Code, 1949"] },
            hi: { q: "कौन सा विनियमन ढांचा भारत में म्यूचुअल फंड निवेश के लिए कानूनी सत्यापन और मनी-लॉन्ड्रिंग विरोधी दस्तावेज़ीकरण (KYC) को नियंत्रित करता है?", opts: ["धन शोधन निवारण अधिनियम (PMLA), 2002", "प्रतिभूति अनुबंध (विनियमन) अधिनियम, 1956", "कंपनी अधिनियम, 2013 अनुसूची कॉर्पोरेट कानून", "रिजर्व बैंक परिचालन बैंकिंग कोड, 1949"] },
            correct: 0
        },
        {
            en: { q: "In a Mutual Fund, who appoints the Asset Management Company (AMC) and ensures that all activities comply with SEBI regulations?", opts: ["The Board of Trustees", "The Custodian Firm", "The Lead Brokerage Syndicate", "The Ministry of Finance Corporate Wing"] },
            hi: { q: "म्यूचुअल फंड में, एसेट मैनेजमेंट कंपनी (AMC) की नियुक्ति कौन करता है और यह सुनिश्चित करता है कि सभी गतिविधियां सेबी के नियमों के अनुरूप हों?", opts: ["ट्रस्टी बोर्ड (The Board of Trustees)", "कस्टोडियन फर्म", "लीड ब्रोकरेज सिंडिकेट", "वित्त मंत्रालय कॉर्पोरेट विंग"] },
            correct: 0
        },

        // --- NISM: Currency, Commodity & Derivatives Mix ---
        {
            en: { q: "What is an 'Arbitrageur' inside the derivative exchange trading grid?", opts: ["A market participant who looks for price discrepancies between markets to lock in risk-free profits", "A high-risk speculator who trades uncovered call options using massive leverage", "A structural regulator appointed by SEBI to audit the commodity warehouses", "A long-term investor holding core micro-cap equity assets inside their portfolio"] },
            hi: { q: "डेरिवेटिव एक्सचेंज ट्रेडिंग ग्रिड के भीतर एक 'आर्बिट्रेजूर' (Arbitrageur) क्या है?", opts: ["एक बाजार भागीदार जो जोखिम मुक्त लाभ लॉक करने के लिए बाजारों के बीच मूल्य विसंगतियों की तलाश करता है", "एक उच्च जोखिम वाला सटोरिया जो बड़े लिवरेज का उपयोग करके अनकवर्ड कॉल ऑप्शन का व्यापार करता है", "सेबी द्वारा कमोडिटी गोदामों का ऑडिट करने के लिए नियुक्त एक संरचनात्मक नियामक", "अपने पोर्टफोलियो के भीतर मुख्य माइक्रो-कैप इक्विटी परिसंपत्तियों को रखने वाला एक दीर्घकालिक निवेशक"] },
            correct: 0
        },
        {
            en: { q: "What represents the 'Strike Price' of an options derivative contract?", opts: ["The predetermined price at which the option buyer can buy or sell the underlying asset", "The highest trading price recorded during the premium life cycle", "The initial margin configuration threshold set up by the exchange clearing unit", "The settlement reference valuation declared by central banks at expiry"] },
            hi: { q: "ऑप्शंस डेरिवेटिव अनुबंध का 'स्ट्राइक प्राइस' (Strike Price) क्या दर्शाता है?", opts: ["वह पूर्व निर्धारित मूल्य जिस पर ऑप्शन खरीदार अंतर्निहित संपत्ति खरीद या बेच सकता है", "प्रीमियम जीवन चक्र के दौरान दर्ज किया गया उच्चतम व्यापारिक मूल्य", "एक्सचेंज क्लियरिंग यूनिट द्वारा स्थापित प्रारंभिक मार्जिन कॉन्फ़िगरेशन सीमा", "समाप्ति पर केंद्रीय बैंकों द्वारा घोषित निपटान संदर्भ मूल्यांकन"] },
            correct: 0
        },
        {
            en: { q: "In commodity markets, gold, silver, and platinum futures contracts are classified under which division?", opts: ["Bullion Derivatives", "Base Metals Division", "Energy Complex Instruments", "Soft Agri-Commodities Segment"] },
            hi: { q: "कमोडिटी बाजारों में, सोना, चांदी और प्लैटिनम फ्यूचर्स अनुबंधों को किस प्रभाग के तहत वर्गीकृत किया गया है?", opts: ["बुलियन डेरिवेटिव्स (Bullion Derivatives)", "बेस मेटल्स डिवीजन", "ऊर्जा परिसर उपकरण", "सॉफ्ट एग्री-कमोडिटीज सेगमेंट"] },
            correct: 0
        },
        {
            en: { q: "What is the premium movement sensitivity of an option called when measured relative to a 1% change in interest rates?", opts: ["Rho", "Delta", "Gamma", "Vega"] },
            hi: { q: "ब्याज दरों में 1% के बदलाव के सापेक्ष मापे जाने वाले ऑप्शन के प्रीमियम आंदोलन की संवेदनशीलता को क्या कहा जाता है?", opts: ["रो (Rho)", "डेल्टा (Delta)", "गामा (Gamma)", "वेगा (Vega)"] },
            correct: 0
        },
        {
            en: { q: "Which currency contract code represents the Euro against the Indian Rupee on Indian stock exchanges?", opts: ["EURINR", "USDEUR", "GBPEUR", "EURUSD"] },
            hi: { q: "कौन सा मुद्रा अनुबंध कोड भारतीय स्टॉक एक्सचेंजों पर भारतीय रुपये के मुकाबले यूरो का प्रतिनिधित्व करता है?", opts: ["EURINR", "USDEUR", "GBPEUR", "EURUSD"] },
            correct: 0
        },
        {
            en: { q: "What happens to the intrinsic value of an Out-of-the-Money (OTM) option contract?", opts: ["It is always zero", "It is equal to the total option premium paid", "It increases exponentially with volatility spikes", "It equals the strike price configuration value"] },
            hi: { q: "एक आउट-ऑफ-द-मनी (OTM) ऑप्शन अनुबंध के अंतर्निहित मूल्य (Intrinsic Value) का क्या होता है?", opts: ["यह हमेशा शून्य होता है (It is always zero)", "यह भुगतान किए गए कुल ऑप्शन प्रीमियम के बराबर होता है", "यह अस्थिरता स्पाइक्स के साथ तेजी से बढ़ता है", "यह स्ट्राइक प्राइस कॉन्फ़िगरेशन मूल्य के बराबर होता है"] },
            correct: 0
        },
        {
            en: { q: "What entity acts as the legal counterparty to guarantee financial trade settlement across Indian commodity derivatives exchanges?", opts: ["Clearing Corporation", "Depository Participant", "Merchant Broker Syndicate", "Sovereign Vault Registry"] },
            hi: { q: "भारतीय कमोडिटी डेरिवेटिव्स एक्सचेंजों में वित्तीय व्यापार निपटान (Trade Settlement) की गारंटी देने के लिए कानूनी काउंटरपार्टी के रूप में कौन सी इकाई कार्य करती है?", opts: ["क्लियरिंग कॉरपोरेशन (Clearing Corporation)", "डिपॉजिटरी पार्टिसिपेंट", "मर्चेंट ब्रोकर सिंडिकेट", "सॉवरेन वॉल्ट रजिस्ट्री"] },
            correct: 0
        },
        {
            en: { q: "If the spot USD-INR exchange rate is 84.20 and the 1-month futures contract trades at 84.45, what is the 0.25 difference called?", opts: ["Premium", "Discount", "Basis Delta", "Intrinsic Spread"] },
            hi: { q: "यदि हाजिर USD-INR विनिमय दर 84.20 है और 1-महीने का फ्यूचर्स अनुबंध 84.45 पर ट्रेड कर रहा है, तो 0.25 के इस अंतर को क्या कहा जाता है?", opts: ["प्रीमियम (Premium)", "डिस्काउंट (Discount)", "बेसिस डेल्टा", "अंतर्निहित स्प्रेड"] },
            correct: 0
        },
        {
            en: { q: "Which underlying asset drives the valuation of an Equity Index Derivative contract inside India?", opts: ["The performance index basket of selected stocks like NIFTY 50 or SENSEX", "The aggregate volume of public warehouse infrastructure", "The benchmark reference rate published by commercial banks", "The physical price movement of bullion commodities"] },
            hi: { q: "भारत के भीतर इक्विटी इंडेक्स डेरिवेटिव अनुबंध के मूल्यांकन को कौन सी अंतर्निहित संपत्ति संचालित करती है?", opts: ["चयनित शेयरों की प्रदर्शन सूचकांक टोकरी जैसे NIFTY 50 या SENSEX", "सार्वजनिक गोदाम बुनियादी ढांचे की कुल मात्रा", "वाणिज्यिक बैंकों द्वारा प्रकाशित बेंचमार्क संदर्भ दर", "बुलियन कमोडिटीज का भौतिक मूल्य आंदोलन"] },
            correct: 0
        },
        {
            en: { q: "What does the option Greek 'Vega' measure precisely?", opts: ["The sensitivity of an option's premium to a change in the implied volatility of the underlying asset", "The sensitivity of an option's premium to a change in the time remaining until expiration", "The rate of change of Delta per unit change in spot tracker pricing", "The interest rate fluctuation impact on physical delivery commodity units"] },
            hi: { q: "ऑप्शन ग्रीक 'वेगा' (Vega) सटीक रूप से क्या मापता है?", opts: ["अंतर्निहित परिसंपत्ति की निहित अस्थिरता (Implied Volatility) में बदलाव के प्रति ऑप्शन के प्रीमियम की संवेदनशीलता", "समाप्ति तक बचे समय में बदलाव के प्रति ऑप्शन के प्रीमियम की संवेदनशीलता", "स्पॉट ट्रैकर मूल्य निर्धारण में प्रति इकाई परिवर्तन पर डेल्टा के परिवर्तन की दर", "भौतिक डिलीवरी कमोडिटी इकाइयों पर ब्याज दर में उतार-चढ़ाव का प्रभाव"] },
            correct: 0
        },

        // --- IRDAI: Insurance Regulations & Advanced Core ---
        {
            en: { q: "What occurs under the 'Principle of Indemnity' if an insured party attempts to profit from a general insurance payout?", opts: ["The claim is restricted to the actual financial loss to restore their original position, preventing profit", "The insurance regulator permanently cancels their basic civil identity card", "The premium is doubled and collected forcefully via tax deduction codes", "The entire asset shifts under the structural ownership of central bank networks"] },
            hi: { q: "यदि कोई बीमित व्यक्ति सामान्य बीमा भुगतान से लाभ कमाने का प्रयास करता है तो 'क्षतिपूर्ति के सिद्धांत' (Principle of Indemnity) के तहत क्या होता है?", opts: ["लाभ को रोकने के लिए दावे को उनकी मूल स्थिति बहाल करने वाले वास्तविक वित्तीय नुकसान तक सीमित किया जाता है", "बीमा नियामक उनके बुनियादी नागरिक पहचान पत्र को स्थायी रूप से रद्द कर देता है", "प्रीमियम को दोगुना किया जाता है और कर कटौती कोड के माध्यम से जबरन एकत्र किया जाता है", "पूरी संपत्ति केंद्रीय बैंक नेटवर्क के संरचनात्मक स्वामित्व के तहत स्थानांतरित हो जाती है"] },
            correct: 0
        },
        {
            en: { q: "Which concept inside insurance contracts describes the nearest, most direct operational cause of an accidental loss?", opts: ["Causa Proxima (Proximate Cause)", "Uberrimae Fidei Protocol", "Contribution Assessment Layout", "Subrogation Lien Configuration"] },
            hi: { q: "बीमा अनुबंधों के भीतर कौन सी अवधारणा दुर्घटना जनित नुकसान के सबसे करीबी, सबसे प्रत्यक्ष परिचालन कारण का वर्णन करती है?", opts: ["कॉसा प्रॉक्सिमा (Causa Proxima / निकटतम कारण)", "उबेरिमे फिदेई प्रोटोकॉल", "अंशदान मूल्यांकन लेआउट", "प्रत्यासन ग्रहणाधिकार कॉन्फ़िगरेशन"] },
            correct: 0
        },
        {
            en: { q: "What is the statutory minimum cooling-off 'Free Look Period' granted to a life insurance policyholder after receiving the physical policy document?", opts: ["15 days", "30 days", "7 days", "45 days"] },
            hi: { q: "भौतिक पॉलिसी दस्तावेज प्राप्त करने के बाद जीवन बीमा पॉलिसीधारक को दी जाने वाली वैधानिक न्यूनतम कूलिंग-ऑफ 'फ्री लुक अवधि' (Free Look Period) क्या है?", opts: ["15 दिन (15 days - कुछ मामलों में ऑनलाइन पॉलिसी के लिए 30 दिन)", "30 दिन", "7 दिन", "45 दिन"] },
            correct: 0
        },
        {
            en: { q: "What entity regulates and licenses all insurance companies and intermediaries inside India?", opts: ["IRDAI (Insurance Regulatory and Development Authority of India)", "SEBI (Securities and Exchange Board of India)", "PFRDA (Pension Fund Regulatory and Development Authority)", "AMFI (Association of Mutual Funds in India)"] },
            hi: { q: "भारत के भीतर सभी बीमा कंपनियों और मध्यस्थों (Intermediaries) को कौन सी इकाई विनियमित और लाइसेंस देती है?", opts: ["IRDAI (भारतीय बीमा विनियामक और विकास प्राधिकरण)", "SEBI (भारतीय प्रतिभूति और विनिमय बोर्ड)", "PFRDA (पेंशन फंड विनियामक और विकास प्राधिकरण)", "AMFI (एसोसिएशन ऑफ म्यूचुअल फंड्स इन इंडिया)"] },
            correct: 0
        },
        {
            en: { q: "If a policyholder provides fraudulent misleading health information in a proposal form, the insurance contract becomes:", opts: ["Voidable at the option of the insurer", "Automatically converted into a single-term savings bond", "Permanently backed by sovereign state guarantees", "Enforceable with mandatory compound interest penalty fine assets"] },
            hi: { q: "यदि कोई पॉलिसीधारक प्रस्ताव प्रपत्र (Proposal Form) में धोखाधड़ी वाली भ्रामक स्वास्थ्य जानकारी प्रदान करता है, तो बीमा अनुबंध बन जाता है:", opts: ["बीमाकर्ता के विकल्प पर अमान्य (Voidable at the option of the insurer)", "स्वचालित रूप से एकल-अवधि के बचत बांड में परिवर्तित", "स्थायी रूप से संप्रभु राज्य गारंटी द्वारा समर्थित", "अनिवार्य चक्रवृद्धि ब्याज जुर्माना जुर्माना संपत्ति के साथ लागू करने योग्य"] },
            correct: 0
        },
        {
            en: { q: "What does the insurance term 'Moral Hazard' refer to?", opts: ["An increase in the probability of loss due to the dishonest tendencies or behavioral carelessness of the insured", "The fluctuation of tax compliance rates across financial investment portals", "The physical structural degradation of warehouse logistics systems over time", "The geometric variance used by actuaries to trace mortality statistics"] },
            hi: { q: "बीमा शब्द 'नैतिक संकट' (Moral Hazard) किसे संदर्भित करता है?", opts: ["बीमित व्यक्ति की बेईमान प्रवृत्तियों या व्यवहार संबंधी लापरवाही के कारण नुकसान की संभावना में वृद्धि", "वित्तीय निवेश पोर्टलों में कर अनुपालन दरों का उतार-चढ़ाव", "समय के साथ गोदाम रसद प्रणालियों का भौतिक संरचनात्मक क्षरण", "मृत्यु दर के आंकड़ों का पता लगाने के लिए बीमांकक (Actuaries) द्वारा उपयोग किया जाने वाला ज्यामितीय विचरण"] },
            correct: 0
        },
        {
            en: { q: "What is an insurance 'Deductible'?", opts: ["A specified amount of loss that the insured must pay out of pocket before the insurance company pays its share", "The structural discount provided to long term clients during renewal cycles", "The commission payout processed to licensed field agents dynamically", "The statutory validation tariff imposed on cross-border re-insurance grids"] },
            hi: { q: "बीमा में 'डीडक्टिबल' (Deductible) क्या है?", opts: ["नुकसान की एक निर्दिष्ट राशि जो बीमा कंपनी द्वारा अपना हिस्सा चुकाने से पहले बीमित व्यक्ति को अपनी जेब से चुकानी होगी", "नवीनीकरण चक्रों के दौरान दीर्घकालिक ग्राहकों को प्रदान की जाने वाली संरचनात्मक छूट", "लाइसेंस प्राप्त फील्ड एजेंटों को गतिशील रूप से संसाधित कमीशन भुगतान", "सीमा पार पुनर्बीमा (Re-insurance) ग्रिड पर लगाया जाने वाला वैधानिक सत्यापन टैरिफ"] },
            correct: 0
        },
        {
            en: { q: "Which type of insurance contract handles extreme large-scale risks by transferring a portion of risk from one primary insurer to another secondary global insurance firm?", opts: ["Reinsurance", "Double Insurance", "Co-insurance Allocation", "Indemnity Splitting Grid"] },
            hi: { q: "किस प्रकार का बीमा अनुबंध जोखिम के एक हिस्से को एक प्राथमिक बीमाकर्ता से दूसरे माध्यमिक वैश्विक बीमा फर्म में स्थानांतरित करके अत्यधिक बड़े पैमाने के जोखिमों को संभालता है?", opts: ["पुनर्बीमा (Reinsurance)", "दोहरा बीमा (Double Insurance)", "सह-बीमा आवंटन", "क्षतिपूर्ति विभाजन ग्रिड"] },
            correct: 0
        },
        {
            en: { q: "What does 'Insurable Interest' mean in the context of taking a life insurance policy?", opts: ["The policyholder must suffer a financial loss or hardship upon the death of the insured person", "The interest rate paid by commercial banks on life annuity deposits", "The compound premium bonus generated inside underlying debt instrument fields", "The structural tax deduction percentage permitted under civil code parameters"] },
            hi: { q: "जीवन बीमा पॉलिसी लेने के संदर्भ में 'बीमायोग्य हित' (Insurable Interest) का क्या अर्थ है?", opts: ["बीमित व्यक्ति की मृत्यु पर पॉलिसीधारक को वित्तीय नुकसान या कठिनाई का सामना करना पड़ना चाहिए", "जीवन वार्षिकी जमा पर वाणिज्यिक बैंकों द्वारा भुगतान की जाने वाली ब्याज दर", "अंतर्निहित ऋण साधन क्षेत्रों के अंदर उत्पन्न यौगिक प्रीमियम बोनस", "सिविल कोड मापदंडों के तहत अनुमत संरचनात्मक कर कटौती प्रतिशत"] },
            correct: 0
        },
        {
            en: { q: "What type of policy offers life insurance protection for a lifetime and accumulates a cash value component over time?", opts: ["Whole Life Insurance Policy", "Pure Term Insurance Plan", "Group Personal Accident Policy", "Critical Illness Standalone Rider"] },
            hi: { q: "कौन सी पॉलिसी आजीवन जीवन बीमा सुरक्षा प्रदान करती है और समय के साथ नकद मूल्य घटक (Cash value component) जमा करती है?", opts: ["संपूर्ण जीवन बीमा पॉलिसी (Whole Life Insurance Policy)", "शुद्ध टर्म इंश्योरेंस प्लान", "समूह व्यक्तिगत दुर्घटना पॉलिसी", "क्रिटिकल इलनेस स्टैंडअलोन राइडर"] },
            correct: 0
        },
        // --- NISM / IRDAI Comprehensive Mock Test: All Modules Shuffled (Set 3) ---
        {
            en: { q: "What is the key structural benefit of a 'Flexi Cap Fund' compared to a 'Multi Cap Fund' under SEBI norms?", opts: ["The fund manager has complete dynamic flexibility to allocate 0% to 100% across any market cap without sector limits", "The fund must strictly maintain 25% each in Large, Mid, and Small-cap stocks at all times", "The fund is completely exempt from the Total Expense Ratio caps mandated by SEBI", "The fund is legally required to hold at least 80% of its assets in gold commodities"] },
            hi: { q: "सेबी के मानदंडों के तहत 'मल्टी कैप फंड' की तुलना में 'फ्लेक्सी कैप फंड' (Flexi Cap Fund) का मुख्य संरचनात्मक लाभ क्या है?", opts: ["फंड मैनेजर के पास बिना किसी सेक्टर सीमा के किसी भी मार्केट कैप में 0% से 100% तक गतिशील रूप से आवंटित करने की पूर्ण लचीलापन है", "फंड को हर समय लार्ज, मिड और स्मॉल-कैप शेयरों में अनिवार्य रूप से 25% प्रत्येक बनाए रखना चाहिए", "फंड को सेबी द्वारा अनिवार्य टोटल एक्सपेंस रेशियो (TER) की सीमा से पूरी तरह छूट प्राप्त है", "फंड के लिए अपनी संपत्तियों का कम से कम 80% सोने की वस्तुओं में रखना कानूनी रूप से आवश्यक है"] },
            correct: 0
        },
        {
            en: { q: "An investor is holding a portfolio of 20 distinct blue-chip stocks. Which type of risk has been minimized through this strategy?", opts: ["Unsystematic Risk", "Systematic Risk", "Market Risk", "Inflation Risk"] },
            hi: { q: "एक निवेशक के पास 20 अलग-अलग ब्लू-चिप शेयरों का पोर्टफोलियो है। इस रणनीति के माध्यम से किस प्रकार के जोखिम को न्यूनतम (Minimize) किया गया है?", opts: ["अव्यवस्थित जोखिम (Unsystematic Risk / Company Specific Risk)", "व्यवस्थित जोखिम (Systematic Risk)", "बाजार जोखिम (Market Risk)", "मुद्रास्फीति जोखिम (Inflation Risk)"] },
            correct: 0
        },
        {
            en: { q: "In an options contract, if the underlying stock price remains completely stagnant for 2 weeks, who benefits from this scenario?", opts: ["The Seller of the Option (Option Writer) due to Theta decay", "The Buyer of the Option due to Delta expansion", "Both the Buyer and Seller equally", "Neither party, as the contract gets automatically cancelled by SEBI"] },
            hi: { q: "एक ऑप्शंस अनुबंध में, यदि अंतर्निहित स्टॉक की कीमत 2 सप्ताह तक पूरी तरह से स्थिर रहती है, तो इस परिदृश्य से किसे लाभ होता है?", opts: ["थिटा डेके (Theta decay) के कारण ऑप्शन के विक्रेता (Option Writer) को", "डेल्टा विस्तार के कारण ऑप्शन के खरीदार को", "खरीदार और विक्रेता दोनों को समान रूप से", "किसी भी पक्ष को नहीं, क्योंकि अनुबंध सेबी द्वारा स्वचालित रूप से रद्द कर दिया जाता है"] },
            correct: 0
        },
        {
            en: { q: "Under IRDAI guidelines, what does the 'Principle of Proximate Cause' determine in general insurance claims?", opts: ["The nearest and most direct operational cause that triggered the accidental loss", "The geographical distance between the accident spot and the insurance headquarters", "The exact ratio of contribution payable by multiple insurance providers", "The total depreciation percentage applied to physical car components over time"] },
            hi: { q: "IRDAI के दिशानिर्देशों के तहत, सामान्य बीमा दावों में 'निकटतम कारण का सिद्धांत' (Principle of Proximate Cause) क्या निर्धारित करता है?", opts: ["सबसे करीबी और सबसे प्रत्यक्ष परिचालन कारण जिसने दुर्घटना जनित नुकसान को ट्रिगर किया", "दुर्घटना स्थल और बीमा मुख्यालय के बीच की भौगोलिक दूरी", "कई बीमा प्रदाताओं द्वारा देय योगदान का सटीक अनुपात", "समय के साथ भौतिक कार घटकों पर लागू कुल मूल्यह्रास (Depreciation) प्रतिशत"] },
            correct: 0
        },
        {
            en: { q: "What is the typical lot size for a standard EUR-INR currency futures contract traded on Indian stock exchanges?", opts: ["EUR 1,000", "EUR 10,000", "EUR 5,000", "EUR 100"] },
            hi: { q: "भारतीय स्टॉक एक्सचेंजों पर कारोबार करने वाले एक मानक EUR-INR मुद्रा फ्यूचर्स अनुबंध के लिए विशिष्ट लॉट आकार (Lot Size) क्या है?", opts: ["EUR 1,000", "EUR 10,000", "EUR 5,000", "EUR 100"] },
            correct: 0
        },
        {
            en: { q: "In the physical delivery mechanism of commodity futures, what document proves the ownership of goods stored in an exchange-accredited warehouse?", opts: ["Electronic Warehouse Receipt (EWR)", "Commercial Bill of Lading", "Red Herring Prospectus", "Tender Period Allocation Slip"] },
            hi: { q: "कमोडिटी फ्यूचर्स के भौतिक निपटान तंत्र में, एक्सचेंज-मान्यता प्राप्त गोदाम में संग्रहीत सामानों के स्वामित्व को कौन सा दस्तावेज प्रमाणित करता है?", opts: ["इलेक्ट्रॉनिक वेयरहाउस रसीद (Electronic Warehouse Receipt - EWR)", "कमर्शियल बिल ऑफ लैडिंग", "रेड हेरिंग प्रॉस्पेक्टस", "टेंडर पीरियड एलोकेशन स्लिप"] },
            correct: 0
        },
        {
            en: { q: "What happens to the Net Asset Value (NAV) of a Mutual Fund scheme on its ex-dividend date after a dividend distribution?", opts: ["The NAV falls by the exact extent of the dividend distributed per unit plus statutory taxes", "The NAV increases by the extent of the dividend distribution payout", "The NAV remains completely unchanged, as dividends are paid from cash reserves", "The scheme gets permanently closed and merged with an index grid"] },
            hi: { q: "लाभांश वितरण के बाद एक्स-डिविडेंड (Ex-dividend) तिथि पर म्यूचुअल फंड योजना की नेट एसेट वैल्यू (NAV) का क्या होता है?", opts: ["प्रति इकाई वितरित लाभांश और वैधानिक करों की सीमा तक एनएवी गिर जाती है", "लाभांश वितरण भुगतान की सीमा तक एनएवी बढ़ जाती", "एनएवी पूरी तरह से अपरिवर्तित रहती है, क्योंकि लाभांश नकद आरक्षित से भुगतान किया जाता है", "योजना स्थायी रूप से बंद हो जाती है और एक इंडेक्स ग्रिड के साथ विलय हो जाती है"] },
            correct: 0
        },
        {
            en: { q: "Which parameter is evaluated by calculating the standard deviation of a mutual fund portfolio's daily returns over a specific timeframe?", opts: ["Total Volatility / Historical Risk profile of the scheme", "The fund manager's active stock selection expertise (Alpha)", "The dynamic correlation with the sovereign cross-border indexes", "The institutional tracking error of a physical gold ETF asset"] },
            hi: { q: "एक विशिष्ट समय सीमा में म्यूचुअल फंड पोर्टफोलियो के दैनिक रिटर्न के मानक विचलन (Standard Deviation) की गणना करके किस पैरामीटर का मूल्यांकन किया जाता है?", opts: ["योजना की कुल अस्थिरता / ऐतिहासिक जोखिम प्रोफ़ाइल (Total Volatility)", "फंड मैनेजर की सक्रिय स्टॉक चयन विशेषज्ञता (Alpha)", "संप्रभु सीमा पार सूचकांकों के साथ गतिशील संबंध", "एक भौतिक स्वर्ण ईटीएफ परिसंपत्ति की संस्थागत ट्रैकिंग त्रुटि"] },
            correct: 0
        },
        {
            en: { q: "If a trader sells a NIFTY 25,000 Put Option at a premium of ₹200, what is the maximum possible profit potential for this position?", opts: ["Limited to the premium received (₹200 multiplied by lot size)", "Unlimited profit potential as NIFTY can rise infinitely", "Limited to the strike price value minus the initial margin setup", "Equivalent to the total margin money locked inside the trading account"] },
            hi: { q: "यदि कोई ट्रेडर ₹200 के प्रीमियम पर NIFTY 25,000 पुट ऑप्शन बेचता है, तो इस पोजीशन के लिए अधिकतम संभावित लाभ क्या है?", opts: ["प्राप्त प्रीमियम तक सीमित (₹200 गुणा लॉट साइज)", "असीमित लाभ क्षमता क्योंकि निफ्टी अनंत तक बढ़ सकता है", "स्ट्राइक प्राइस मूल्य घटाव प्रारंभिक मार्जिन सेटअप तक सीमित", "ट्रेडिंग खाते के अंदर लॉक किए गए कुल मार्जिन मनी के बराबर"] },
            correct: 0
        },
        {
            en: { q: "Which of the following is considered a 'Base Metal' on Indian multi-commodity derivatives platforms?", opts: ["Copper", "Crude Oil", "Gold", "Natural Gas"] },
            hi: { q: "निम्नलिखित में से किसे भारतीय मल्टी-कमोडिटी डेरिवेटिव्स प्लेटफॉर्म पर 'बेस मेटल' (Base Metal) माना जाता है?", opts: ["कॉपर (Copper / तांबा)", "क्रूड ऑयल", "सोना", "नेचुरल गैस"] },
            correct: 0
        },
        {
            en: { q: "What does an 'Inward Reinsurance' transaction mean inside global insurance business networks?", opts: ["An insurance company accepting a portion of risk from another primary insurer in exchange for premium", "A corporate client purchasing health insurance directly from an offshore portal", "The complete cancellation of downstream sub-agent commissions across states", "The legal return of old maturity bonus reserves back to the sovereign vault"] },
            hi: { q: "वैश्विक बीमा व्यापार नेटवर्क के भीतर 'इनवर्ड रीइन्श्योरेंस' (Inward Reinsurance) लेनदेन का क्या अर्थ है?", opts: ["एक बीमा कंपनी द्वारा प्रीमियम के बदले दूसरी प्राथमिक बीमाकर्ता से जोखिम का एक हिस्सा स्वीकार करना", "एक कॉर्पोरेट ग्राहक द्वारा सीधे एक अपतटीय पोर्टल से स्वास्थ्य बीमा खरीदना", "राज्यों में डाउनस्ट्रीम उप-एजेंट कमीशन का पूर्ण रद्दीकरण", "पुराने परिपक्वता बोनस भंडार की संप्रभु तिजोरी में कानूनी वापसी"] },
            correct: 0
        },
        {
            en: { q: "On Indian stock exchanges, currency derivatives trading hours typically extend up to which time for standard cross-currency pairs like EUR-USD?", opts: ["5:00 PM IST", "3:30 PM IST", "7:30 PM IST", "11:30 PM IST"] },
            hi: { q: "भारतीय स्टॉक एक्सचेंजों पर, मुद्रा डेरिवेटिव ट्रेडिंग घंटे आमतौर पर EUR-USD जैसे मानक क्रॉस-करेंसी जोड़ों के लिए किस समय तक विस्तारित होते हैं?", opts: ["5:00 PM IST (भारतीय समयानुसार शाम 5 बजे तक)", "3:30 PM IST", "7:30 PM IST", "11:30 PM IST"] },
            correct: 0
        },
        {
            en: { q: "What calculation is used to determine the 'Information Ratio' of an actively managed mutual fund scheme?", opts: ["Active Return divided by Tracking Error", "Portfolio Return minus Risk-Free Rate divided by Beta", "Total Expense Ratio divided by AUM turnover frequency", "Net Asset Value minus Face Value multiplied by Gamma coefficient"] },
            hi: { q: "एक सक्रिय रूप से प्रबंधित म्यूचुअल फंड योजना के 'इनफॉर्मेशन रेशियो' (Information Ratio) को निर्धारित करने के लिए किस गणना का उपयोग किया जाता है?", opts: ["एक्टिव रिटर्न विभाजित ट्रैकिंग एरर (Active Return / Tracking Error)", "पोर्टफोलियो रिटर्न ऋण जोखिम-मुक्त दर विभाजित बीटा", "कुल व्यय अनुपात विभाजित एयूएम टर्नओवर आवृत्ति", "नेट एसेट वैल्यू ऋण फेस वैल्यू गुणा गामा गुणांक"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI insider trading regulations, a 'Connected Person' is prohibited from trading in a company's shares based on which information?", opts: ["Unpublished Price Sensitive Information (UPSI)", "Macro-economic growth projections published by RBI", "Technical breakout analysis patterns available on public forums", "Historical dividend payout ratios mentioned in the annual report"] },
            hi: { q: "सेबी के इनसाइडर ट्रेडिंग नियमों के तहत, एक 'कनेक्टेड पर्सन' (Connected Person) को किस जानकारी के आधार पर कंपनी के शेयरों में व्यापार करने की मनाही है?", opts: ["अप्रकाशित मूल्य संवेदनशील सूचना (Unpublished Price Sensitive Information - UPSI)", "आरबीआई द्वारा प्रकाशित व्यापक आर्थिक विकास अनुमान", "सार्वजनिक मंचों पर उपलब्ध तकनीकी ब्रेकआउट विश्लेषण पैटर्न", "वार्षिक रिपोर्ट में उल्लिखित ऐतिहासिक लाभांश भुगतान अनुपात"] },
            correct: 0
        },
        {
            en: { q: "An options strategy involving the purchase of a Call option at a lower strike price and the sale of another Call option at a higher strike price on the same underlying asset and expiry is known as a:", opts: ["Bull Call Spread", "Bear Put Spread", "Long Straddle", "Iron Condor"] },
            hi: { q: "एक ही अंतर्निहित परिसंपत्ति और समाप्ति पर कम स्ट्राइक मूल्य पर कॉल ऑप्शन खरीदने और उच्च स्ट्राइक मूल्य पर दूसरे कॉल ऑप्शन को बेचने की रणनीति को क्या कहा जाता है?", opts: ["बुल कॉल स्प्रेड (Bull Call Spread)", "बियर पुट स्प्रेड (Bear Put Spread)", "लॉन्ग स्ट्रैडल", "आयरन कोंडोर"] },
            correct: 0
        },
        {
            en: { q: "In commodity derivatives, what does the 'Tender Period' signify?", opts: ["The specified days leading up to contract expiration during which buyers and sellers must declare their delivery intentions", "The introductory window allocated to register new physical mandis inside state grids", "The time duration allowed to deposit initial margin money into clearing accounts", "The grace period given to process structural custom warehouse tax tariffs"] },
            hi: { q: "कमोडिटी डेरिवेटिव्स में, 'टेंडर पीरियड' (Tender Period) क्या दर्शाता है?", opts: ["अनुबंध समाप्ति से पहले के निर्दिष्ट दिन जिसके दौरान खरीदारों और विक्रेताओं को अपनी डिलीवरी की मंशा घोषित करनी होगी", "राज्य ग्रिड के अंदर नई भौतिक मंडियों को पंजीकृत करने के लिए आवंटित परिचयात्मक विंडो", "क्लियरिंग खातों में प्रारंभिक मार्जिन राशि जमा करने की अनुमति दी गई समय अवधि", "संरचनात्मक कस्टम गोदाम कर टैरिफ को संसाधित करने के लिए दी गई ग्रेस अवधि"] },
            correct: 0
        },
        {
            en: { q: "What does the 'Suicide Clause' inside standard Indian life insurance contracts state regarding the payout if death occurs within 12 months of policy issuance?", opts: ["The full sum insured is not payable; only a refund of a specific percentage of premiums paid is granted", "The full sum insured is paid compulsorily backed by court intervention", "The entire contract is transferred to the next legal heir's name automatically", "The policy shifts into an open-ended annuity matrix under IRDAI supervision"] },
            hi: { q: "मानक भारतीय जीवन बीमा अनुबंधों के अंदर 'सुसाइड क्लॉज' (Suicide Clause) पॉलिसी जारी होने के 12 महीनों के भीतर मृत्यु होने पर भुगतान के संबंध में क्या बताता है?", opts: ["पूर्ण बीमित राशि देय नहीं है; केवल भुगतान किए गए प्रीमियम के एक विशिष्ट प्रतिशत की वापसी दी जाती है", "अदालत के हस्तक्षेप के समर्थन से पूर्ण बीमित राशि का अनिवार्य रूप से भुगतान किया जाता है", "पूरा अनुबंध स्वचालित रूप से अगले कानूनी उत्तराधिकारी के नाम पर स्थानांतरित कर दिया जाता है", "पॉलिसी IRDAI की देखरेख में एक ओपन-एंडेड वार्षिकी मैट्रिक्स में स्थानांतरित हो जाती है"] },
            correct: 0
        },
        {
            en: { q: "What calculation identifies the 'Direct Plan' NAV of a mutual fund compared to its 'Regular Plan' NAV?", opts: ["Direct Plan NAV is higher because it does not include distributor commission expenses", "Regular Plan NAV is higher due to extra compounding index multipliers", "Both NAV trackers remain exactly identical across all market conditions", "Direct Plan NAV is calculated by dividing total assets by regional folio counts"] },
            hi: { q: "म्यूचुअल फंड के 'रेगुलर प्लान' एनएवी की तुलना में उसके 'डायरेक्ट प्लान' (Direct Plan) एनएवी की पहचान कैसे की जाती है?", opts: ["डायरेक्ट प्लान एनएवी अधिक होती है क्योंकि इसमें डिस्ट्रीब्यूटर कमीशन का खर्च शामिल नहीं होता है", "अतिरिक्त कंपाउंडिंग इंडेक्स मल्टीप्लायर्स के कारण रेगुलर प्लान एनएवी अधिक होती है", "दोनों एनएवी ट्रैकर सभी बाजार स्थितियों में बिल्कुल समान रहते हैं", "डायरेक्ट प्लान एनएवी की गणना कुल संपत्ति को क्षेत्रीय फोलियो संख्या से विभाजित करके की जाती है"] },
            correct: 0
        },
        {
            en: { q: "In currency derivatives trading, if the domestic inflation rate increases substantially compared to foreign nations, what is the theoretical long-term impact on the domestic currency?", opts: ["The domestic currency tends to depreciate over time", "The domestic currency appreciates sharply against global reference pairs", "The currency exchange rate gets pegged permanently at zero spread volatility", "Central banks stop publishing daily reference indices entirely"] },
            hi: { q: "मुद्रा डेरिवेटिव ट्रेडिंग में, यदि विदेशी देशों की तुलना में घरेलू मुद्रास्फीति (Inflation) दर काफी बढ़ जाती है, तो घरेलू मुद्रा पर सैद्धांतिक दीर्घकालिक प्रभाव क्या होता है?", opts: ["घरेलू मुद्रा का मूल्य समय के साथ घटता (Depreciate) है", "घरेलू मुद्रा वैश्विक संदर्भ जोड़ों के मुकाबले तेजी से मजबूत होती है", "मुद्रा विनिमय दर शून्य स्प्रेड अस्थिरता पर स्थायी रूप से आंकी जाती है", "केंद्रीय बैंक दैनिक संदर्भ सूचकांक प्रकाशित करना पूरी तरह बंद कर देते हैं"] },
            correct: 0
        },
        {
            en: { q: "What does the financial metric 'P/B Ratio' stand for inside equity market investment analysis?", opts: ["Price-to-Book Ratio", "Profit-to-Bonus Matrix", "Premium-to-Beta Coefficient", "Public-to-Broker Allocation"] },
            hi: { q: "इक्विटी बाजार निवेश विश्लेषण के भीतर वित्तीय मीट्रिक 'P/B Ratio' का क्या अर्थ है?", opts: ["प्राइस-टू-बुक रेशियो (Price-to-Book Ratio)", "प्रॉफिट-टू-बोनस मैट्रिक्स", "प्रीमियम-टू-बीता गुणांक", "पब्लिक-टू-ब्रोकर एलोकेशन"] },
            correct: 0
        },
        {
            en: { q: "What type of life insurance policy provides payouts at regular predefined intervals during the policy term rather than a single lump sum at maturity?", opts: ["Money Back Policy", "Pure Term Plan", "Deferred Annuity Bond", "Decreasing Term Insurance"] },
            hi: { q: "किस प्रकार की जीवन बीमा पॉलिसी परिपक्वता (Maturity) पर एकमुश्त राशि के बजाय पॉलिसी अवधि के दौरान नियमित पूर्व निर्धारित अंतरालों पर भुगतान प्रदान करती है?", opts: ["मनी बैक पॉलिसी (Money Back Policy)", "शुद्ध टर्म प्लान", "डिफर्ड एन्युटी बांड", "डिक्रीजिंग टर्म इंश्योरेंस"] },
            correct: 0
        },
        {
            en: { q: "In the mutual fund structure, which body is legally responsible for safeguarding the assets and interest of investors, and has the power to dismiss an AMC with SEBI's approval?", opts: ["Board of Trustees", "The Sponsor Group", "The Registrar and Transfer Agent (RTA)", "The Lead Custodian Syndicate"] },
            hi: { q: "म्यूचुअल फंड संरचना में, निवेशकों की संपत्ति और हितों की रक्षा के लिए कानूनी रूप से कौन सा निकाय जिम्मेदार है, और सेबी की मंजूरी से एएमसी को बर्खास्त करने की शक्ति रखता है?", opts: ["ट्रस्टी बोर्ड (Board of Trustees)", "प्रायोजक (Sponsor) समूह", "रजिस्ट्रार और ट्रांसफर एजेंट (RTA)", "लीड कस्टोडियन सिंडिकेट"] },
            correct: 0
        },
        {
            en: { q: "If an investor buys a stock at ₹500 and simultaneously buys a Put Option with a strike price of ₹480, what derivative risk-management technique are they deploying?", opts: ["Protective Put (Hedging against downside risk)", "Covered Call writing strategy", "Short Straddle volatility capture", "Calendar spread arbitrage layout"] },
            hi: { q: "यदि कोई निवेशक ₹500 पर स्टॉक खरीदता है और साथ ही ₹480 के स्ट्राइक मूल्य के साथ पुट ऑप्शन खरीदता है, तो वे कौन सी जोखिम-प्रबंधन तकनीक अपना रहे हैं?", opts: ["प्रोटेक्टिव पुट (Protective Put - गिरावट के जोखिम के खिलाफ बचाव)", "कवर्ड कॉल राइटिंग रणनीति", "शॉर्ट स्ट्रैडल अस्थिरता कैप्चर", "कैलेंडर स्प्रेड आर्बिट्रेज लेआउट"] },
            correct: 0
        },
        {
            en: { q: "In commodity futures trading, if the 'Basis' turns from negative to positive over a week, what does this indicate about the market dynamic?", opts: ["The spot price has risen faster than the futures price, showing strengthening of the basis", "The futures contract price has jumped infinitely above spot limits", "The storage warehousing costs have dropped down to absolute zero", "The market has officially shifted from Backwardation to deep Contango"] },
            hi: { q: "कमोडिटी फ्यूचर्स ट्रेडिंग में, यदि 'बेसिस' (Basis) एक सप्ताह में नकारात्मक से सकारात्मक हो जाता है, तो यह बाजार की गतिशीलता के बारे में क्या संकेत देता है?", opts: ["हाजिर मूल्य फ्यूचर्स मूल्य की तुलना में तेजी से बढ़ा है, जो बेसिस की मजबूती को दर्शाता है", "फ्यूचर्स अनुबंध मूल्य स्पॉट सीमाओं से ऊपर अनंत तक बढ़ गया है", "भंडारण गोदाम लागत पूर्ण शून्य तक गिर गई है", "बाजार आधिकारिक तौर पर बैकवर्डेशन से गहरे कंटैंगो में स्थानांतरित हो गया है"] },
            correct: 0
        },
        {
            en: { q: "What does the option Greek 'Gamma' measure precisely?", opts: ["The rate of change of Delta with respect to a change in the price of the underlying asset", "The sensitivity of the option premium to a 1% shift in cross-border interest index ratios", "The erosion speed of time value inside deeply out-of-the-money option brackets", "The direct percentage variance tracked across macro industry benchmarks"] },
            hi: { q: "ऑप्शन ग्रीक 'गामा' (Gamma) सटीक रूप से क्या मापता है?", opts: ["अंतर्निहित परिसंपत्ति की कीमत में बदलाव के संबंध में डेल्टा (Delta) के बदलाव की दर", "सीमा पार ब्याज सूचकांक अनुपातों में 1% बदलाव के प्रति ऑप्शन प्रीमियम की संवेदनशीलता", "डीपली आउट-ऑफ-द-मनी ऑप्शन ब्रैकेट के अंदर समय मूल्य के घटने की गति", "मैक्रो उद्योग बेंचमार्क में ट्रैक किया गया प्रत्यक्ष प्रतिशत विचरण"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI Mutual Fund regulations, what is the maximum permissible lock-in period for an Equity Linked Savings Scheme (ELSS)?", opts: ["3 years", "5 years", "1 year", "10 years"] },
            hi: { q: "सेबी म्यूचुअल फंड नियमों के तहत, इक्विटी लिंक्ड सेविंग्स स्कीम (ELSS) के लिए अधिकतम अनुमत लॉक-इन अवधि कितनी है?", opts: ["3 वर्ष (3 years)", "5 वर्ष", "1 वर्ष", "10 वर्ष"] },
            correct: 0
        },
        {
            en: { q: "Which core principle of general insurance prevents an insured individual from collecting multiple payouts from two different insurers for the exact same loss to make a profit?", opts: ["Principle of Contribution", "Principle of Subrogation", "Principle of Utmost Good Faith", "Principle of Insurable Interest"] },
            hi: { q: "सामान्य बीमा का कौन सा मूल सिद्धांत एक बीमित व्यक्ति को दोहरा लाभ कमाने के लिए एक ही नुकसान के लिए दो अलग-अलग बीमा कंपनियों से कई भुगतान एकत्र करने से रोकता है?", opts: ["अंशदान का सिद्धांत (Principle of Contribution)", "प्रत्यासन का सिद्धांत (Principle of Subrogation)", "परम सद्भाव का सिद्धांत", "बीमायोग्य हित का सिद्धांत"] },
            correct: 0
        },
        {
            en: { q: "In the exchange-traded currency derivatives ecosystem in India, what represents the tick size for a USD-INR futures contract?", opts: ["₹0.0025 (Quarter of a paisa)", "₹0.0100 (One paisa)", "₹0.0500 (Five paisa)", "按0.0001 (One basis pip)"] },
            hi: { q: "भारत में एक्सचेंज-ट्रेडेड मुद्रा डेरिवेटिव पारिस्थितिकी तंत्र में, USD-INR फ्यूचर्स अनुबंध के लिए टिक आकार (Tick Size) क्या दर्शाता है?", opts: ["₹0.0025 (पैसे का एक चौथाई)", "₹0.0100 (एक पैसा)", "₹0.0500 (पाँच पैसा)", "0.0001 (एक आधार पिप)"] },
            correct: 0
        },
        {
            en: { q: "What is the primary role of an 'Underwriter' in the structural onboarding operational pipeline of an insurance firm?", opts: ["To assess the risk profile of an applicant and determine premium fairness or policy rejection", "To handle digital marketing campaigns across state broadcasting networks", "To settle old legal litigation issues across civil court grievance chambers", "To distribute bonus points to nominee structures after maturity cycles"] },
            hi: { q: "एक बीमा कंपनी के ऑनबोर्डिंग परिचालन पाइपलाइन में 'अंडरराइटर' (Underwriter) की प्राथमिक भूमिका क्या है?", opts: ["एक आवेदक के जोखिम प्रोफाइल का आकलन करना और प्रीमियम निष्पक्षता या पॉलिसी अस्वीकृति का निर्धारण करना", "राज्य प्रसारण नेटवर्क पर डिजिटल विपणन अभियानों को संभालना", "सिविल कोर्ट शिकायत कक्षों में पुराने कानूनी मुकदमों के मुद्दों का निपटारा करना", "परिपक्वता चक्र के बाद नामांकित संरचनाओं को बोनस अंक वितरित करना"] },
            correct: 0
        },
        {
            en: { q: "In Mutual Funds, what parameter describes the structural ratio calculated by dividing the total operational expenses of a scheme by its average daily net assets?", opts: ["Total Expense Ratio (TER)", "Portfolio Turnover Frequency Coefficient", "Tracking Error Variance Matrix", "Sharpe Risk Adjusted Index"] },
            hi: { q: "म्यूचुअल फंड में, कौन सा पैरामीटर किसी योजना के कुल परिचालन खर्चों को उसकी औसत दैनिक शुद्ध संपत्तियों (Average Net Assets) से विभाजित करके गणना किए गए संरचनात्मक अनुपात का वर्णन करता है?", opts: ["टोटल एक्सपेंस रेशियो (Total Expense Ratio - TER)", "पोर्टफोलियो टर्नओवर आवृत्ति गुणांक", "ट्रैकिंग एरर वेरिएंस मैट्रिक्स", "शार्प रिस्क एडजस्टेड इंडेक्स"] },
            correct: 0
        },
        {
            en: { q: "Which type of options contract allows the holder to exercise their derivative right at any point in time on or before the designated expiration date?", opts: ["American Option", "European Option", "Bermudan Option", "Binary Asian Option"] },
            hi: { q: "किस प्रकार का ऑप्शंस अनुबंध धारक को निर्दिष्ट समाप्ति तिथि पर या उससे पहले किसी भी समय अपने डेरिवेटिव अधिकार का उपयोग करने की अनुमति देता है?", opts: ["अमेरिकन ऑप्शन (American Option)", "यूरोपियन ऑप्शन (European Option)", "बरमूडन ऑप्शन", "बाइनरी एशियन ऑप्शन"] },
            correct: 0
        },
        {
            en: { q: "What index tracks and serves as the primary structural benchmark for the National Stock Exchange (NSE) of India?", opts: ["NIFTY 50", "S&P BSE SENSEX", "NIFTY NEXT 50", "NSE MIDCAP 100"] },
            hi: { q: "कौन सा सूचकांक भारत के नेशनल स्टॉक एक्सचेंज (NSE) के लिए प्राथमिक संरचनात्मक बेंचमार्क के रूप में कार्य करता है?", opts: ["NIFTY 50", "S&P BSE SENSEX", "NIFTY NEXT 50", "NSE MIDCAP 100"] },
            correct: 0
        },
        {
            en: { q: "In commodity markets, which contract type binds a buyer to physical cargo delivery and a seller to supply the exact commodity without an exchange clearing house?", opts: ["Forward Contract", "Futures Contract", "Vanilla Option Instrument", "Exchange Traded Spread"] },
            hi: { q: "कमोडिटी बाजारों में, कौन सा अनुबंध प्रकार खरीदार को भौतिक कार्गो डिलीवरी और विक्रेता को बिना किसी एक्सचेंज क्लियरिंग हाउस के सटीक कमोडिटी की आपूर्ति करने के लिए बाध्य करता है?", opts: ["फॉरवर्ड अनुबंध (Forward Contract)", "फ्यूचर्स अनुबंध", "वैनिला ऑप्शन इंस्ट्रूमेंट", "एक्सचेंज ट्रेडेड स्प्रेड"] },
            correct: 0
        },
        {
            en: { q: "What is the primary operational objective of a 'Liquid Fund' in the mutual fund ecosystem?", opts: ["To capital preserve high liquidity by investing in short-term money market instruments with maturity up to 91 days", "To capture long term capital growth by holding small cap technology infrastructure stocks", "To track the physical spot valuation parameters of agricultural mandis across states", "To distribute monthly mandatory compounding equity dividends to retail investors"] },
            hi: { q: "म्यूचुअल फंड पारिस्थितिकी तंत्र में 'लिक्विड फंड' (Liquid Fund) का प्राथमिक परिचालन उद्देश्य क्या है?", opts: ["91 दिनों तक की परिपक्वता वाले अल्पकालिक मुद्रा बाजार उपकरणों में निवेश करके उच्च तरलता और पूंजी की रक्षा करना", "स्मॉल कैप टेक्नोलॉजी इंफ्रास्ट्रक्चर शेयरों को रखकर दीर्घकालिक पूंजीगत वृद्धि को कैप्चर करना", "राज्यों में कृषि मंडियों के भौतिक स्थान मूल्यांकन मापदंडों को ट्रैक करना", "खुदरा निवेशकों को मासिक अनिवार्य कंपाउंडिंग इक्विटी लाभांश वितरित करना"] },
            correct: 0
        },
        {
            en: { q: "Under IRDAI rules, what is the mandatory minimum 'Solvency Ratio' that an insurance company operating inside India must maintain at all times?", opts: ["1.50 (150%)", "1.00 (100%)", "2.00 (200%)", "0.75 (75%)"] },
            hi: { q: "IRDAI के नियमों के तहत, भारत के भीतर काम करने वाली बीमा कंपनी को हर समय अनिवार्य न्यूनतम 'सॉल्वेंसी अनुपात' (Solvency Ratio) कितना बनाए रखना चाहिए?", opts: ["1.50 (150%)", "1.00 (100%)", "2.00 (200%)", "0.75 (75%)"] },
            correct: 0
        },
        {
            en: { q: "What does the option Greek 'Rho' measure in derivative modeling frameworks?", opts: ["The sensitivity of an option's premium to a change in the risk-free interest rate", "The sensitivity of an option's premium to a change in the historical market volatility", "The mathematical acceleration rate of Delta per unit change in underlying spot index pricing", "The decay pattern of time value inside deep in-the-money options contracts"] },
            hi: { q: "डेरिवेटिव मॉडलिंग फ्रेमवर्क में ऑप्शन ग्रीक 'रो' (Rho) क्या मापता है?", opts: ["जोखिम-मुक्त ब्याज दर (Risk-free interest rate) में बदलाव के प्रति ऑप्शन के प्रीमियम की संवेदनशीलता", "ऐतिहासिक बाजार अस्थिरता में बदलाव के प्रति ऑप्शन के प्रीमियम की संवेदनशीलता", "अंतर्निहित हाजिर सूचकांक मूल्य निर्धारण में प्रति इकाई परिवर्तन पर डेल्टा की गणितीय त्वरण दर", "डीप इन-द-मनी ऑप्शंस अनुबंधों के अंदर समय मूल्य का क्षय पैटर्न"] },
            correct: 0
        },
        {
            en: { q: "Which body provides official central registration numbers called 'Folio Numbers' to mutual fund individual account holdings?", opts: ["The Registrar and Transfer Agent (RTA) of the respective fund", "The Securities and Exchange Board of India (SEBI) Head Office", "The Association of Mutual Funds in India (AMFI) central board", "The Custodian bank authorized by central reserve authorities"] },
            hi: { q: "कौन सा निकाय म्यूचुअल फंड व्यक्तिगत खाता होल्डिंग्स को 'फोलियो नंबर' (Folio Number) नामक आधिकारिक केंद्रीय पंजीकरण नंबर प्रदान करता है?", opts: ["संबंधित फंड का रजिस्ट्रार और ट्रांसफर एजेंट (RTA)", "भारतीय प्रतिभूति और विनिमय बोर्ड (SEBI) का प्रधान कार्यालय", "एसोसिएशन ऑफ म्यूचुअल फंड्स इन इंडिया (AMFI) केंद्रीय बोर्ड", "केंद्रीय रिजर्व अधिकारियों द्वारा अधिकृत कस्टोडियन बैंक"] },
            correct: 0
        },
        {
            en: { q: "What represents the 'Mark-to-Market (MTM)' process inside exchange-traded derivative settlement structures?", opts: ["The daily adjustment of trading accounts to reflect gains or losses based on closing market prices", "The evaluation fee collected by stockbrokers to change system account passwords", "The physical grading certification layout provided to warehouse logistics managers", "The statutory processing tax deducted during new public IPO subscription allocations"] },
            hi: { q: "एक्सचेंज-ट्रेडेड डेरिवेटिव निपटान संरचनाओं के अंदर 'मार्क-टू-मार्केट (MTM)' प्रक्रिया क्या दर्शाती है?", opts: ["समापन बाजार कीमतों के आधार पर लाभ या हानि को प्रतिबिंबित करने के लिए ट्रेडिंग खातों का दैनिक समायोजन", "सिस्टम खाता पासवर्ड बदलने के लिए स्टॉकब्रोकर द्वारा एकत्र किया गया मूल्यांकन शुल्क", "गोदाम रसद प्रबंधकों को प्रदान किया गया भौतिक ग्रेडिंग प्रमाणन लेआउट", "नए सार्वजनिक आईपीओ सदस्यता आवंटन के दौरान काटा जाने वाला वैधानिक प्रसंस्करण कर"] },
            correct: 0
        },
        {
            en: { q: "In commodity derivatives, crude oil futures contracts traded on Multi Commodity Exchange (MCX) are deeply synchronized with which international reference benchmark index?", opts: ["WTI / Brent Crude benchmarks on NYMEX / ICE exchanges", "S&P Gold Commodity tracking spreadsheet index", "London Metal Exchange (LME) copper copper valuation table", "Chicago Board of Trade (CBOT) soft agro commodity layout portfolio"] },
            hi: { q: "कमोडिटी डेरिवेटिव्स में, मल्टी कमोडिटी एक्सचेंज (MCX) पर कारोबार करने वाले कच्चे तेल (Crude Oil) के फ्यूचर्स अनुबंध किस अंतरराष्ट्रीय संदर्भ बेंचमार्क सूचकांक के साथ गहराई से जुड़े हुए हैं?", opts: ["NYMEX / ICE एक्सचेंजों पर WTI / Brent क्रूड बेंचमार्क", "S&P गोल्ड कमोडिटी ट्रैकिंग स्प्रेडशीट इंडेक्स", "लंदन मेटल एक्सचेंज (LME) तांबा मूल्यांकन तालिका", "शिकागो बोर्ड ऑफ ट्रेड (CBOT) सॉफ्ट एग्रो कमोडिटी लेआउट पोर्टफोलियो"] },
            correct: 0
        },
        {
            en: { q: "What does the 'Principle of Indemnity' ensure inside general non-life insurance contracts?", opts: ["To restore the insured to the exact same financial position as before the loss, without allowing any profit", "To distribute double payout allocations to the designated nominees after accident verification", "To render the commercial corporate insurance contract completely unalterable after 30 days registration", "To refund the entire cumulative premium pool if zero accidents occur over a decade"] },
            hi: { q: "सामान्य गैर-जीवन बीमा (Non-life insurance) अनुबंधों में 'क्षतिपूर्ति का सिद्धांत' (Principle of Indemnity) क्या सुनिश्चित करता है?", opts: ["बीमित व्यक्ति को बिना कोई लाभ कमाए, नुकसान से पहले की सटीक वित्तीय स्थिति में वापस लाना", "दुर्घटना सत्यापन के बाद नामित नामांकित व्यक्तियों को दोगुना भुगतान आवंटन वितरित करना", "30 दिनों के पंजीकरण के बाद वाणिज्यिक कॉर्पोरेट बीमा अनुबंध को पूरी तरह से अपरिवर्तनीय बनाना", "यदि एक दशक में शून्य दुर्घटनाएं होती हैं तो पूरे संचयी प्रीमियम पूल को वापस करना"] },
            correct: 0
        },
        {
            en: { q: "In currency derivatives trading, what term is used when the exchange rate quote layout displays the price of 1 unit of foreign currency in terms of domestic currency?", opts: ["Direct Quote", "Indirect Quote", "Cross Currency Pair", "Arbitrage Spread Matrix"] },
            hi: { q: "मुद्रा डेरिवेटिव ट्रेडिंग में, जब विनिमय दर उद्धरण (Quote) घरेलू मुद्रा के संदर्भ में विदेशी मुद्रा की 1 इकाई की कीमत प्रदर्शित करता है, तो किस शब्द का उपयोग किया जाता है?", opts: ["प्रत्यक्ष उद्धरण (Direct Quote)", "अप्रत्यक्ष उद्धरण (Indirect Quote)", "क्रॉस करेंसी पेयर", "आर्बिट्रेज स्प्रेड मैट्रिक्स"] },
            correct: 0
        },
        {
            en: { q: "What component is calculated by dividing an individual asset's active performance variance by its systematic correlation index to find market sensitivity?", opts: ["Beta Coefficient", "Alpha Tracker", "Sharpe Deviation Index", "Information Ratio Factor"] },
            hi: { q: "बाजार संवेदनशीलता का पता लगाने के लिए किसी व्यक्तिगत संपत्ति के सक्रिय प्रदर्शन विचरण को उसके व्यवस्थित सहसंबंध सूचकांक (Systematic Correlation) से विभाजित करके कौन सा घटक निकाला जाता है?", opts: ["बीटा गुणांक (Beta Coefficient)", "अल्फा ट्रैकर", "शार्प विचलन सूचकांक", "सूचना अनुपात कारक"] },
            correct: 0
        },
        {
            en: { q: "An options trader simultaneously buys one In-the-Money Call and sells one Out-of-the-Money Call with identical expiration parameters. What is this structural strategy called?", opts: ["Bull Call Spread", "Bear Call Spread", "Long Straddle", "Short Strangle"] },
            hi: { q: "एक ऑप्शंस ट्रेडर एक साथ एक इन-द-मनी कॉल खरीदता है और समान समाप्ति मापदंडों के साथ एक आउट-ऑफ-द-मनी कॉल बेचता है। इस संरचनात्मक रणनीति को क्या कहा जाता है?", opts: ["बुल कॉल स्प्रेड (Bull Call Spread)", "बियर कॉल स्प्रेड", "लॉन्ग स्ट्रैडल", "शॉर्ट स्ट्रैंगल"] },
            correct: 0
        },
        {
            en: { q: "Which legislation empowers SEBI to register, regulate, and audit the structural operations of Mutual Funds inside India?", opts: ["SEBI (Mutual Funds) Regulations, 1996", "Companies Act, 2013 Schedule XII Law", "Securities Contracts (Regulation) Rules, 1957", "Reserve Bank Consolidated Financial Provision Act, 1949"] },
            hi: { q: "कौन सा कानून सेबी (SEBI) को भारत के भीतर म्यूचुअल फंड के संरचनात्मक संचालन को पंजीकृत, विनियमित और ऑडिट करने का अधिकार देता है?", opts: ["सेबी (म्यूचुअल फंड) विनियम, 1996 (SEBI Mutual Funds Regulations, 1996)", "कंपनी अधिनियम, 2013 अनुसूची XII कानून", "प्रतिभूति अनुबंध (विनियमन) नियम, 1957", "रिजर्व बैंक समेकित वित्तीय प्रावधान अधिनियम, 1949"] },
            correct: 0
        },
        {
            en: { q: "In commodity markets, what term describes a temporary severe market scenario where short sellers struggle to find physical cargo to cover positions, spiking prices?", opts: ["Short Squeeze", "Contango Expansion", "Backwardation Eradication", "Arbitrage Lockout"] },
            hi: { q: "कमोडिटी बाजारों में, कौन सा शब्द एक अस्थायी गंभीर बाजार परिदृश्य का वर्णन करता है जहां शॉर्ट सेलर्स को पोजीशन कवर करने के लिए भौतिक कार्गो खोजने में संघर्ष करना पड़ता है, जिससे कीमतें बढ़ जाती हैं?", opts: ["शॉर्ट स्क्वीज़ (Short Squeeze)", "कंटैंगो विस्तार", "बैकवर्डेशन उन्मूलन", "आर्बिट्रेज लॉकआउट"] },
            correct: 0
        },
        {
            en: { q: "What does a 'Term Insurance Policy' provide to a policyholder inside the life insurance sector?", opts: ["Pure death benefit protection for a specified period without any maturity or survival benefits", "High dynamic equity investment returns accompanied by partial liquidity choices", "A guaranteed periodic money-back refund payout allocation every 3 years", "A lifetime retirement pension annuity backed by sovereign state guarantees"] },
            hi: { q: "जीवन बीमा क्षेत्र के भीतर एक 'टर्म इंश्योरेंस पॉलिसी' (Term Insurance Policy) पॉलिसीधारक को क्या प्रदान करती है?", opts: ["बिना किसी परिपक्वता या उत्तरजीविता लाभ के एक निर्दिष्ट अवधि के लिए शुद्ध मृत्यु लाभ सुरक्षा", "आंशिक तरलता विकल्पों के साथ उच्च गतिशील इक्विटी निवेश रिटर्न", "हर 3 साल में एक गारंटीकृत आवधिक मनी-बैक रिफंड भुगतान आवंटन", "संप्रभु राज्य गारंटी द्वारा समर्थित आजीवन सेवानिवृत्ति पेंशन वार्षिकी"] },
            correct: 0
        },
        {
            en: { q: "In the currency derivative ecosystem, who calculates and publishes the official daily Foreign Exchange Reference Rates for India?", opts: ["Financial Benchmarks India Pvt. Ltd. (FBIL)", "The Securities and Exchange Board of India (SEBI) Treasury Desk", "State Bank of India Corporate FX Portal", "Ministry of Commerce and Foreign Trade Division"] },
            hi: { q: "मुद्रा डेरिवेटिव पारिस्थितिकी तंत्र में, भारत के लिए आधिकारिक दैनिक विदेशी मुद्रा संदर्भ दरें (Reference Rates) कौन सी संस्था संकलित और प्रकाशित करती है?", opts: ["फाइनेंशियल बेंचमार्क इंडिया प्राइवेट लिमिटेड (FBIL)", "भारतीय प्रतिभूति और विनिमय बोर्ड (SEBI) ट्रेजरी डेस्क", "भारतीय स्टेट बैंक कॉर्पोरेट एफएक्स पोर्टल", "वाणिज्य और विदेश व्यापार प्रभाग मंत्रालय"] },
            correct: 0
        },
        {
            en: { q: "What does the financial metric 'Tracking Error' measure inside a passive Mutual Fund Index Fund scheme?", opts: ["The divergence between the performance returns of the index fund and its target benchmark index", "The systematic network lag in updating fractional portfolio unit balances on the digital application", "The mathematical calculation variance inside corporate long term capital gains tax schedules", "The operational error committed by the custodian during vault auditing schedules"] },
            hi: { q: "एक पैसिव म्यूचुअल फंड इंडेक्स फंड योजना के भीतर वित्तीय मीट्रिक 'ट्रैकिंग एरर' (Tracking Error) क्या मापता है?", opts: ["इंडेक्स फंड के प्रदर्शन रिटर्न और उसके लक्षित बेंचमार्क इंडेक्स के बीच विचलन (Divergence)", "डिजिटल एप्लिकेशन पर आंशिक पोर्टफोलियो यूनिट बैलेंस को अपडेट करने में सिस्टम नेटवर्क लैग", "कॉर्पोरेट दीर्घकालिक पूंजीगत लाभ कर अनुसूचियों के अंदर गणितीय गणना भिन्नता", "तिजोरी ऑडिटिंग अनुसूचियों के दौरान कस्टोडियन द्वारा की गई परिचालन त्रुटि"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI rules, what is the default settlement cycle followed for standard physical derivative conversion trades post contract expiry?", opts: ["T+1 cycle", "T+2 rolling cycle", "T+5 rolling cycle", "T+3 rolling cycle"] },
            hi: { q: "सेबी के नियमों के तहत, अनुबंध समाप्ति के बाद मानक भौतिक डेरिवेटिव रूपांतरण ट्रेडों के लिए किस डिफॉल्ट सेटलमेंट चक्र का पालन किया जाता है?", opts: ["T+1 चक्र (T+1 cycle)", "T+2 रोलिंग चक्र", "T+5 रोलिंग चक्र", "T+3 रोलिंग चक्र"] },
            correct: 0
        },
        {
            en: { q: "What does the term 'Reinstatement' signify inside an insurance contract context?", opts: ["Restoring a lapsed policy back to active status after paying outstanding premiums and providing proof of insurability", "The legal reassignment of nominee structures to a dynamic multi-state corporate platform", "The complete operational replacement of independent field inspectors post client grievance reports", "The permanent transfer of accrued annuity benefits back under sovereign trust management grids"] },
            hi: { q: "बीमा अनुबंध के संदर्भ में 'रीइन्स्टेटमेंट' (Reinstatement / पुनरुद्धार) शब्द क्या दर्शाता है?", opts: ["बकाया प्रीमियम का भुगतान करने और बीमायोग्यता का प्रमाण प्रदान करने के बाद एक लैप्स पॉलिसी को वापस सक्रिय स्थिति में लाना", "नामांकित संरचनाओं का एक गतिशील बहु-राज्य कॉर्पोरेट प्लेटफॉर्म पर कानूनी पुनर्मूल्यांकन", "ग्राहक शिकायत रिपोर्ट के बाद स्वतंत्र क्षेत्र निरीक्षकों का पूर्ण परिचालन प्रतिस्थापन", "संचित वार्षिकी लाभों का संप्रभु ट्रस्ट प्रबंधन ग्रिड के तहत स्थायी स्थानांतरण"] },
            correct: 0
        },
        // --- NISM / IRDAI Comprehensive Mock Test: All Modules Shuffled (Set 4) ---
        {
            en: { q: "Which type of risk is also known as 'Diversifiable Risk' and is specific to a particular company or industry?", opts: ["Unsystematic Risk", "Systematic Risk", "Market Risk", "Purchasing Power Risk"] },
            hi: { q: "किस प्रकार के जोखिम को 'विविधतापूर्ण जोखिम' (Diversifiable Risk) के रूप में भी जाना जाता है और यह किसी विशेष कंपनी या उद्योग के लिए विशिष्ट होता है?", opts: ["अव्यवस्थित जोखिम (Unsystematic Risk)", "व्यवस्थित जोखिम (Systematic Risk)", "बाजार जोखिम (Market Risk)", "क्रय शक्ति जोखिम"] },
            correct: 0
        },
        {
            en: { q: "What does the 'Sharpe Ratio' of a mutual fund scheme indicate?", opts: ["The excess return generated by the fund per unit of total risk (Standard Deviation)", "The sensitivity of the fund's returns relative to its benchmark index", "The total operational cost incurred by the fund house per unit of AUM", "The active return generated by the fund manager relative to the fund's Beta"] },
            hi: { q: "किसी म्यूचुअल फंड योजना का 'शार्प रेशियो' (Sharpe Ratio) क्या दर्शाता है?", opts: ["कुल जोखिम (Standard Deviation) की प्रति इकाई पर फंड द्वारा उत्पन्न अतिरिक्त रिटर्न", "बेंचमार्क इंडेक्स के सापेक्ष फंड के रिटर्न की संवेदनशीलता", "एयूएम की प्रति इकाई पर फंड हाउस द्वारा किया गया कुल परिचालन खर्च", "फंड के बीटा के सापेक्ष फंड मैनेजर द्वारा उत्पन्न सक्रिय रिटर्न"] },
            correct: 0
        },
        {
            en: { q: "In the context of Option Greeks, which metric measures the sensitivity of an option's premium to changes in the time remaining until expiration?", opts: ["Theta", "Delta", "Gamma", "Vega"] },
            hi: { q: "ऑप्शन ग्रीक्स (Option Greeks) के संदर्भ में, कौन सा मीट्रिक समाप्ति तक बचे समय के बदलाव के प्रति ऑप्शन के प्रीमियम की संवेदनशीलता को मापता है?", opts: ["थिटा (Theta)", "डेल्टा (Delta)", "गामा (Gamma)", "वेगा (Vega)"] },
            correct: 0
        },
        {
            en: { q: "Under IRDAI regulations, what is the maximum duration of the standard 'Grace Period' allowed for paying renewal premiums on a monthly life insurance policy?", opts: ["15 days", "30 days", "7 days", "45 days"] },
            hi: { q: "IRDAI के नियमों के तहत, मासिक जीवन बीमा पॉलिसी पर नवीनीकरण प्रीमियम (Renewal Premium) का भुगतान करने के लिए मानक 'ग्रेस पीरियड' की अधिकतम अवधि कितनी है?", opts: ["15 दिन (15 days)", "30 दिन", "7 दिन", "45 दिन"] },
            correct: 0
        },
        {
            en: { q: "Which cross-currency derivative pair is permitted for trading on recognized stock exchanges in India besides USD-INR?", opts: ["EUR-USD", "USD-JPY", "GBP-USD", "All of the above"] },
            hi: { q: "भारत में मान्यता प्राप्त स्टॉक एक्सचेंजों पर USD-INR के अलावा किस क्रॉस-करेंसी डेरिवेटिव जोड़े में व्यापार करने की अनुमति है?", opts: ["EUR-USD, GBP-USD, USD-JPY (उपरोक्त सभी)", "केवल EUR-USD", "केवल USD-JPY", "केवल GBP-USD"] },
            correct: 0
        },
        {
            en: { q: "In commodity derivatives, what is a market situation called where the futures contract is trading at a premium over the spot price?", opts: ["Contango", "Backwardation", "Arbitrage Lock", "Short Squeeze"] },
            hi: { q: "कमोडिटी डेरिवेटिव्स में, उस बाजार स्थिति को क्या कहा जाता है जहां फ्यूचर्स अनुबंध हाजिर (Spot) कीमत से अधिक प्रीमियम पर ट्रेड कर रहा होता है?", opts: ["कंतैंगो (Contango)", "बैकवर्डेशन (Backwardation)", "आर्बिट्रेज लॉक", "शॉर्ट स्क्वीज़"] },
            correct: 0
        },
        {
            en: { q: "According to SEBI Mutual Fund categorization, what is the minimum allocation required in equity and equity-related instruments for an 'Arbitrage Fund'?", opts: ["65% of total assets", "80% of total assets", "50% of total assets", "75% of total assets"] },
            hi: { q: "सेबी म्यूचुअल फंड वर्गीकरण के अनुसार, एक 'आर्बिट्रेज फंड' (Arbitrage Fund) के लिए इक्विटी और इक्विटी-संबंधित उपकरणों में न्यूनतम कितना आवंटन आवश्यक है?", opts: ["कुल संपत्ति का 65% (65% of total assets)", "कुल संपत्ति का 80%", "कुल संपत्ति का 50%", "कुल संपत्ति का 75%"] },
            correct: 0
        },
        {
            en: { q: "In the Indian equity market, who holds the shares of an investor in electronic form on behalf of the depository?", opts: ["Depository Participant (DP)", "Clearing Corporation", "Asset Management Company", "Stockbroker Terminal"] },
            hi: { q: "भारतीय इक्विटी बाजार में, डिपॉजिटरी की ओर से इलेक्ट्रॉनिक रूप में किसी निवेशक के शेयरों को कौन संभालता है?", opts: ["डिपॉजिटरी पार्टिसिपेंट (Depository Participant - DP)", "क्लियरिंग कॉरपोरेशन", "एसेट मैनेजमेंट कंपनी", "स्टॉकब्रोकर टर्मिनल"] },
            correct: 0
        },
        {
            en: { q: "An option contract that gives the buyer the right, but not the obligation, to sell the underlying asset at a predetermined price is called a:", opts: ["Put Option", "Call Option", "Forward Contract", "Swap Swap"] },
            hi: { q: "एक ऑप्शन अनुबंध जो खरीदार को एक पूर्व निर्धारित मूल्य पर अंतर्निहित संपत्ति बेचने का अधिकार देता है, लेकिन दायित्व नहीं, कहलाता है:", opts: ["पुट ऑप्शन (Put Option)", "कॉल ऑप्शन (Call Option)", "फॉरवर्ड अनुबंध", "स्वैप अनुबंध"] },
            correct: 0
        },
        {
            en: { q: "Which core principle of insurance states that the insured should not be allowed to over-insure an asset to profit from a loss scenario?", opts: ["Principle of Indemnity", "Principle of Subrogation", "Principle of Contribution", "Principle of Proximate Cause"] },
            hi: { q: "बीमा का कौन सा मूल सिद्धांत यह बताता है कि बीमित व्यक्ति को नुकसान की स्थिति में लाभ कमाने के लिए किसी संपत्ति का अत्यधिक बीमा (Over-insure) करने की अनुमति नहीं दी जानी चाहिए?", opts: ["क्षतिपूर्ति का सिद्धांत (Principle of Indemnity)", "प्रत्यासन का सिद्धांत (Principle of Subrogation)", "अंशदान का सिद्धांत", "निकटतम कारण का सिद्धांत"] },
            correct: 0
        },
        {
            en: { q: "What does 'VaR' stand for in derivative risk management and margin calculation frameworks?", opts: ["Value at Risk", "Volatility Adjusted Ratio", "Variable Account Registry", "Volume Average Return"] },
            hi: { q: "डेरिवेटिव जोखिम प्रबंधन और मार्जिन गणना ढांचे में 'VaR' का क्या अर्थ है?", opts: ["वैल्यू एट रिस्क (Value at Risk)", "वोलाटिलिटी एडजस्टेड रेशियो", "वेरिएबल अकाउंट रजिस्ट्री", "वॉल्यूम एवरेज रिटर्न"] },
            correct: 0
        },
        {
            en: { q: "In mutual funds, which metric measures the fund manager's ability to generate excess returns over the benchmark relative to the systematic risk taken?", opts: ["Treynor Ratio", "Sharpe Ratio", "Information Ratio", "Jensen's Alpha"] },
            hi: { q: "म्यूचुअल फंड में, कौन सा मीट्रिक लिए गए व्यवस्थित जोखिम (Systematic Risk) के सापेक्ष बेंचमार्क पर अतिरिक्त रिटर्न उत्पन्न करने की फंड मैनेजर की क्षमता को मापता है?", opts: ["ट्रेनर रेशियो (Treynor Ratio)", "शार्प रेशियो", "इनफॉर्मेशन रेशियो", "जेन्शन्स अल्फा (Jensen's Alpha)"] },
            correct: 1
        },
        {
            en: { q: "What is the primary feature of a 'Multi Cap Fund' as mandated by SEBI?", opts: ["It must invest a minimum of 25% each in Large Cap, Mid Cap, and Small Cap stocks", "It can dynamically invest up to 100% in any market capitalization without constraints", "It must hold at least 80% of assets in the top 50 exchange-listed companies", "It is legally restricted from investing in debt instruments entirely"] },
            hi: { q: "सेबी द्वारा अनिवार्य 'मल्टी कैप फंड' (Multi Cap Fund) की प्राथमिक विशेषता क्या है?", opts: ["इसे लार्ज कैप, मिड कैप और स्मॉल कैप शेयरों में न्यूनतम 25% प्रत्येक निवेश करना अनिवार्य है", "यह बिना किसी प्रतिबंध के किसी भी मार्केट कैप में 100% तक गतिशील रूप से निवेश कर सकता है", "इसे शीर्ष 50 एक्सचेंज-सूचीबद्ध कंपनियों में कम से कम 80% संपत्ति रखनी होगी", "इसे ऋण साधनों (Debt Instruments) में निवेश करने से कानूनी रूप से पूरी तरह प्रतिबंधित किया गया है"] },
            correct: 0
        },
        {
            en: { q: "In the physical delivery model of Indian commodity derivatives, what is the 'Tender Period Margin' intended to cover?", opts: ["The increased risk of price default during the final delivery execution phase", "The basic transaction charges levied by the exchange application desks", "The warehouse logistical storage fees charged by interstate networks", "The structural custom tariff tax imposed at physical maritime borders"] },
            hi: { q: "भारतीय कमोडिटी डेरिवेटिव्स के भौतिक निपटान मॉडल में, 'टेंडर पीरियड मार्जिन' (Tender Period Margin) का उद्देश्य क्या कवर करना है?", opts: ["अंतिम डिलीवरी निष्पादन चरण के दौरान मूल्य चूक (Price Default) के बढ़ते जोखिम को", "एक्सचेंज एप्लिकेशन डेस्क द्वारा लगाया जाने वाला बुनियादी लेनदेन शुल्क", "अंतरराज्यीय नेटवर्क द्वारा लिया जाने वाला गोदाम रसद भंडारण शुल्क", "भौतिक समुद्री सीमाओं पर लगाया जाने वाला संरचनात्मक कस्टम टैरिफ कर"] },
            correct: 0
        },
        {
            en: { q: "Which type of life insurance plan provides a payout only if the insured passes away within the specified policy term, with no survival benefits?", opts: ["Pure Term Insurance Plan", "Endowment Assurance Policy", "Whole Life Policy Plan", "Unit Linked Insurance Plan"] },
            hi: { q: "किस प्रकार की जीवन बीमा योजना केवल तभी भुगतान प्रदान करती है जब बीमित व्यक्ति की निर्दिष्ट पॉलिसी अवधि के भीतर मृत्यु हो जाती है, और इसमें कोई उत्तरजीविता लाभ (Survival Benefit) नहीं होता?", opts: ["शुद्ध टर्म इंश्योरेंस प्लान (Pure Term Insurance Plan)", "एंडोमेंट एश्योरेंस पॉलिसी", "संपूर्ण जीवन बीमा पॉलिसी", "यूनिट लिंक्ड इंश्योरेंस प्लान"] },
            correct: 0
        },
        {
            en: { q: "What is the structural contract size of an exchange-traded GBP-INR futures contract in India?", opts: ["GBP 1,000", "GBP 10,000", "GBP 5,000", "GBP 100"] },
            hi: { q: "भारत में एक्सचेंज-ट्रेडेड GBP-INR फ्यूचर्स अनुबंध का संरचनात्मक अनुबंध आकार (Contract Size) क्या है?", opts: ["GBP 1,000", "GBP 10,000", "GBP 5,000", "GBP 100"] },
            correct: 0
        },
        {
            en: { q: "In a mutual fund transaction, what happens to an equity application submitted exactly at 2:15 PM IST on a working day?", opts: ["It receives the same day's closing NAV because it is submitted before the 3:00 PM SEBI cut-off time", "It receives the next business day's closing NAV automatically", "The trade is processed based on the volume-weighted average index of the last hour", "The transaction is flagged for mandatory compliance auditing"] },
            hi: { q: "म्यूचुअल फंड लेनदेन में, कार्य दिवस पर दोपहर ठीक 2:15 बजे जमा किए गए इक्विटी आवेदन का क्या होता है?", opts: ["इसे उसी दिन की क्लोजिंग एनएवी (NAV) मिलती है क्योंकि यह दोपहर 3:00 बजे की सेबी कट-ऑफ समय से पहले जमा किया गया है", "इसे स्वचालित रूप से अगले व्यावसायिक दिन की क्लोजिंग एनएवी मिलती है", "व्यापार को अंतिम घंटे के वॉल्यूम-वेटेड एवरेज इंडेक्स के आधार पर प्रोसेस किया जाता है", "लेनदेन को अनिवार्य अनुपालन ऑडिटिंग के लिए फ्लैग किया जाता है"] },
            correct: 0
        },
        {
            en: { q: "What is the primary role of a 'Sponsor' in the structural configuration of a Mutual Fund in India?", opts: ["To establish the mutual fund trust and complete registrations with SEBI, similar to a promoter of a company", "To manage the daily stock portfolio buying and selling operations", "To physically secure the underlying securities in safe vaults", "To audit the accounting practices of the asset management company annually"] },
            hi: { q: "भारत में म्यूचुअल फंड के संरचनात्मक विन्यास में 'प्रायोजक' (Sponsor) की प्राथमिक भूमिका क्या है?", opts: ["म्यूचुअल फंड ट्रस्ट की स्थापना करना और सेबी के साथ पंजीकरण पूरा करना, जो किसी कंपनी के प्रमोटर के समान है", "दैनिक स्टॉक पोर्टफोलियो खरीद और बिक्री संचालन का प्रबंधन करना", "सुरक्षित तिजोरियों में अंतर्निहित प्रतिभूतियों को भौतिक रूप से सुरक्षित करना", "एसेट मैनेजमेंट कंपनी की लेखा प्रथाओं का वार्षिक ऑडिट करना"] },
            correct: 0
        },
        {
            en: { q: "If an equity trader buys a stock at ₹1000 and simultaneously sells a Call option with a strike price of ₹1050, this option strategy is called a:", opts: ["Covered Call", "Protective Put", "Bull Call Spread", "Short Straddle"] },
            hi: { q: "यदि कोई इक्विटी ट्रेडर ₹1000 पर स्टॉक खरीदता है और साथ ही ₹1050 के स्ट्राइक मूल्य के साथ कॉल ऑप्शन बेचता है, तो इस ऑप्शन रणनीति को क्या कहा जाता है?", opts: ["कवर्ड कॉल (Covered Call)", "प्रोटेक्टिव पुट (Protective Put)", "बुल कॉल स्प्रेड", "शॉर्ट स्ट्रैडल"] },
            correct: 0
        },
        {
            en: { q: "Under the Insurance Act, 1938, what section prohibits the offering of rebates or incentives as an inducement to any person to take out an insurance policy?", opts: ["Section 41", "Section 45", "Section 39", "Section 27"] },
            hi: { q: "बीमा अधिनियम, 1938 के तहत, कौन सी धारा किसी व्यक्ति को बीमा पॉलिसी लेने के प्रलोभन के रूप में छूट (Rebates) या प्रोत्साहन देने से प्रतिबंधित करती है?", opts: ["धारा 41 (Section 41)", "धारा 45", "धारा 39", "धारा 27"] },
            correct: 0
        },
        {
            en: { q: "In currency markets, what economic theory relates the change in foreign exchange rates to the difference in nominal interest rates between two countries?", opts: ["Interest Rate Parity (IRP)", "Purchasing Power Parity (PPP)", "International Fisher Effect", "Balance of Payments Theory"] },
            hi: { q: "मुद्रा बाजारों में, कौन सा आर्थिक सिद्धांत विदेशी विनिमय दरों में बदलाव को दो देशों के बीच नाममात्र ब्याज दरों (Nominal Interest Rates) के अंतर से जोड़ता है?", opts: ["ब्याज दर समता (Interest Rate Parity - IRP)", "क्रय शक्ति समता (PPP)", "अंतर्राष्ट्रीय फिशर प्रभाव", "भुगतान संतुलन सिद्धांत"] },
            correct: 0
        },
        {
            en: { q: "What is an 'Index Fund' in the mutual fund industry?", opts: ["A passive fund that replicates the portfolio tracking behavior of a specific benchmark index like Nifty 50", "An active fund that aims to maximize Alpha by trading small cap infrastructure stocks", "A structural fixed income scheme investing exclusively in high-yield corporate commercial papers", "A fund that dynamically switches allocation between gold commodities and cross-border currency blocks"] },
            hi: { q: "म्यूचुअल फंड उद्योग में 'इंडेक्स फंड' (Index Fund) क्या है?", opts: ["एक पैसिव फंड जो निफ्टी 50 जैसे विशिष्ट बेंचमार्क इंडेक्स के पोर्टफोलियो ट्रैकिंग व्यवहार की नकल करता है", "एक एक्टिव फंड जिसका उद्देश्य स्मॉल कैप इंफ्रास्ट्रक्चर शेयरों में व्यापार करके अल्फा को अधिकतम करना है", "एक संरचनात्मक निश्चित आय योजना जो विशेष रूप से उच्च-उपज वाले कॉर्पोरेट वाणिज्यिक पत्रों में निवेश करती है", "एक फंड जो सोने की वस्तुओं और सीमा पार मुद्रा ब्लॉकों के बीच आवंटन को गतिशील रूप से बदलता है"] },
            correct: 0
        },
        {
            en: { q: "In the derivative trading architecture, what term defines the cancellation or liquidation of an outstanding position by executing an opposite transaction?", opts: ["Squaring Off", "Rollover", "Mark-to-Market", "Novation"] },
            hi: { q: "डेरिवेटिव ट्रेडिंग आर्किटेक्चर में, कौन सा शब्द विपरीत लेनदेन निष्पादित करके किसी बकाया पोजीशन को रद्द या समाप्त करने को परिभाषित करता है?", opts: ["स्क्वायरिंग ऑफ (Squaring Off)", "रोलओवर (Rollover)", "मार्क-टू-मार्केट", "नोवेशन"] },
            correct: 0
        },
        {
            en: { q: "Which body provides licensing and validation for corporate insurance brokers and individual field agents in India?", opts: ["IRDAI", "SEBI", "AMFI", "PFRDA"] },
            hi: { q: "भारत में कॉर्पोरेट बीमा दलालों (Brokers) और व्यक्तिगत फील्ड एजेंटों को कौन सा निकाय लाइसेंस और सत्यापन प्रदान करता है?", opts: ["IRDAI", "SEBI", "AMFI", "PFRDA"] },
            correct: 0
        },
        {
            en: { q: "In the context of commodity markets, what do agricultural products like Chana, Coriander, Castor Seed, and Jeera represent?", opts: ["Agri Commodities", "Non-Agri Base Metals", "Energy Derivatives", "Bullion Assets"] },
            hi: { q: "कमोडिटी बाजारों के संदर्भ में, चना, धनिया, अरंडी का बीज (Castor Seed) और जीरा जैसे कृषि उत्पाद क्या दर्शाते हैं?", opts: ["कृषि कमोडिटी (Agri Commodities)", "गैर-कृषि बेस मेटल्स", "ऊर्जा डेरिवेटिव", "बुलियन परिसंपत्तियां"] },
            correct: 0
        },
        {
            en: { q: "What does the 'Total Expense Ratio' (TER) of a mutual fund scheme directly impact?", opts: ["The net asset value (NAV) and overall returns delivered to the investor", "The maximum lock-in period parameter configuration", "The number of independent trustees appointed by the sponsor", "The physical security storage protocols of the custodian bank"] },
            hi: { q: "किसी म्यूचुअल फंड योजना का 'टोटल एक्सपेंस रेशियो' (TER) सीधे किस पर प्रभाव डालता है?", opts: ["निवेशक को मिलने वाले नेट एसेट वैल्यू (NAV) और समग्र रिटर्न पर", "अधिकतम लॉक-इन अवधि पैरामीटर कॉन्फ़िगरेशन पर", "प्रायोजक द्वारा नियुक्त स्वतंत्र ट्रस्टियों की संख्या पर", "कस्टोडियन बैंक के भौतिक सुरक्षा भंडारण प्रोटोकॉल पर"] },
            correct: 0
        },
        {
            en: { q: "An option contract where the strike price is exactly equal to the current spot price of the underlying asset is classified as:", opts: ["At-the-Money (ATM)", "In-the-Money (ITM)", "Out-of-the-Money (OTM)", "Deep Out-of-the-Money"] },
            hi: { q: "एक ऑप्शन अनुबंध जहां स्ट्राइक मूल्य अंतर्निहित परिसंपत्ति के वर्तमान हाजिर (Spot) मूल्य के बिल्कुल बराबर होता है, उसे किस रूप में वर्गीकृत किया जाता है?", opts: ["एट-द-मनी (At-the-Money - ATM)", "इन-द-मनी (In-the-Money - ITM)", "आउट-ऑफ-द-मनी (Out-of-the-Money - OTM)", "डीप आउट-ऑफ-द-मनी"] },
            correct: 0
        },
        {
            en: { q: "What happens under the 'Principle of Subrogation' in general insurance once the insurer settles the full claim for an asset damaged by a third party?", opts: ["The legal rights to recover damages from the responsible third party transfer entirely to the insurance company", "The insured person can still claim compensation from the third party independently", "The insurance policy is automatically renewed for 3 years without premium", "The clearing corporation intervenes to auction the damaged physical asset"] },
            hi: { q: "सामान्य बीमा में एक बार जब बीमाकर्ता किसी तीसरे पक्ष द्वारा क्षतिग्रस्त संपत्ति के पूर्ण दावे का निपटान कर देता है, तो 'प्रत्यासन का सिद्धांत' (Principle of Subrogation) के तहत क्या होता है?", opts: ["जिम्मेदार तीसरे पक्ष से हर्जाना वसूलने के कानूनी अधिकार पूरी तरह से बीमा कंपनी को स्थानांतरित हो जाते हैं", "बीमित व्यक्ति अभी भी स्वतंत्र रूप से तीसरे पक्ष से मुआवजे का दावा कर सकता है", "बीमा पॉलिसी बिना प्रीमियम के 3 साल के लिए स्वचालित रूप से नवीनीकृत हो जाती है", "क्षतिग्रस्त भौतिक संपत्ति की नीलामी के लिए क्लियरिंग कॉरपोरेशन हस्तक्षेप करता है"] },
            correct: 0
        },
        {
            en: { q: "In the currency derivative segment, the abbreviation 'FBIL' stands for which official entity?", opts: ["Financial Benchmarks India Pvt. Ltd.", "Foreign Banking Institutional League", "Federal Bureau of Interest Leverage", "Forex Board of International Liquidity"] },
            hi: { q: "मुद्रा डेरिवेटिव सेगमेंट में, संक्षिप्त नाम 'FBIL' किस आधिकारिक इकाई के लिए उपयोग किया जाता है?", opts: ["फाइनेंशियल बेंचमार्क इंडिया प्राइवेट लिमिटेड (Financial Benchmarks India Pvt. Ltd.)", "फॉरेन बैंकिंग इंस्टीट्यूशनल लीग", "फेडरल ब्यूरो ऑफ इंटरेस्ट लिवरेज", "फॉरेक्स बोर्ड ऑफ इंटरनेशनल लिक्विडिटी"] },
            correct: 0
        },
        {
            en: { q: "Which type of mutual fund scheme is legally allowed to invest in international equities or overseas financial instruments under SEBI rules?", opts: ["Fund of Funds (FoF) / International Feeder Funds", "Gilt Funds with zero sovereign risk", "Balanced Advantage Funds (Dynamic Asset Allocation)", "Sectoral Banking Infrastructure Schemes"] },
            hi: { q: "सेबी के नियमों के तहत किस प्रकार की म्यूचुअल फंड योजना को अंतरराष्ट्रीय इक्विटी या विदेशी वित्तीय साधनों में निवेश करने की कानूनी अनुमति है?", opts: ["फंड ऑफ फंड्स (FoF) / इंटरनेशनल फीडर फंड्स", "शून्य सॉवरेन जोखिम वाले गिल्ट फंड", "बैलेंस्ड एडवांटेज फंड्स (Dynamic Asset Allocation)", "सेक्टरल बैंकिंग इंफ्रास्ट्रक्चर स्कीम्स"] },
            correct: 0
        },
        {
            en: { q: "What does the option Greek 'Vega' measure precisely?", opts: ["The sensitivity of the option premium to a 1% change in the implied volatility of the underlying asset", "The acceleration rate of Delta per unit shift in spot pricing", "The decay pattern of time premium as the contract reaches expiration", "The interest rate fluctuation impact on the basic underlying asset matrix"] },
            hi: { q: "ऑप्शन ग्रीक 'वेगा' (Vega) सटीक रूप से क्या मापता है?", opts: ["अंतर्निहित परिसंपत्ति की निहित अस्थिरता (Implied Volatility) में 1% बदलाव के प्रति ऑप्शन प्रीमियम की संवेदनशीलता", "स्पॉट प्राइसिंग में प्रति इकाई बदलाव पर डेल्टा की त्वरण दर", "अनुबंध की समाप्ति के करीब पहुंचने पर समय प्रीमियम के क्षय (Decay) का पैटर्न", "मूल अंतर्निहित परिसंपत्ति मैट्रिक्स पर ब्याज दर में उतार-चढ़ाव का प्रभाव"] },
            correct: 0
        },
        {
            en: { q: "Under IRDAI rules, an insurance contract is built on 'Utmost Good Faith'. If a policyholder hides a pre-existing medical condition, the contract is legally considered:", opts: ["Voidable at the option of the insurance company", "Fully binding with double premium charges", "Automatically backed by state social guarantees", "Valid only for accident insurance coverage exclusions"] },
            hi: { q: "IRDAI के नियमों के तहत, एक बीमा अनुबंध 'परम सद्भाव' (Utmost Good Faith) पर बनाया जाता है। यदि कोई पॉलिसीधारक पहले से मौजूद बीमारी को छुपाता है, तो अनुबंध कानूनी रूप से माना जाता है:", opts: ["बीमा कंपनी के विकल्प पर अमान्य (Voidable at the option of the insurance company)", "दोगुने प्रीमियम शुल्क के साथ पूरी तरह से बाध्यकारी", "राज्य सामाजिक गारंटी द्वारा स्वचालित रूप से समर्थित", "केवल दुर्घटना बीमा कवरेज अपवर्जन के लिए मान्य"] },
            correct: 0
        },
        {
            en: { q: "In the physical storage of commodity assets, what does 'Warehouse Development and Regulatory Authority' (WDRA) regulate in India?", opts: ["The registration and operational accreditation of physical warehouses and quality testing setups", "The daily option premium calculation metrics across multi-commodity exchanges", "The maximum interstate transportation toll grid limits", "The import custom tariffs imposed on petroleum cargo grids"] },
            hi: { q: "कमोडिटी परिसंपत्तियों के भौतिक भंडारण में, भारत में 'वेयरहाउस डेवलपमेंट एंड रेगुलेटरी अथॉरिटी' (WDRA) किसका नियमन करती है?", opts: ["भौतिक गोदामों (Warehouses) और गुणवत्ता परीक्षण सेटअपों का पंजीकरण और परिचालन मान्यता", "मल्टी-कमोडिटी एक्सचेंजों में दैनिक ऑप्शन प्रीमियम गणना मीट्रिक", "अधिकतम अंतरराज्यीय परिवहन टोल ग्रिड सीमा", "पेट्रोलियम कार्गो ग्रिड पर लगाए जाने वाले आयात कस्टम टैरिफ"] },
            correct: 0
        },
        {
            en: { q: "What component is deducted from a mutual fund scheme's daily net asset value tracking system to calculate the absolute published NAV?", opts: ["The daily management and operational expenses calculated via the Total Expense Ratio (TER)", "The entry load charges processed for retail individual folios", "The statutory brokerage commission paid during exchange-listed IPO allocations", "The custom index tracking fees configured by reserve banking authorities"] },
            hi: { q: "पूर्ण प्रकाशित एनएवी की गणना करने के लिए म्यूचुअल फंड योजना के दैनिक शुद्ध संपत्ति मूल्य ट्रैकिंग सिस्टम से कौन सा घटक घटाया जाता है?", opts: ["टोटल एक्सपेंस रेशियो (TER) के माध्यम से गणना किया गया दैनिक प्रबंधन और परिचालन खर्च", "खुदरा व्यक्तिगत फोलियो के लिए संसाधित प्रविष्टि लोड (Entry load) शुल्क", "एक्सचेंज-सूचीबद्ध आईपीओ आवंटन के दौरान भुगतान किया गया वैधानिक ब्रोकरेज कमीशन", "रिजर्व बैंकिंग अधिकारियों द्वारा कॉन्फ़िगर की गई कस्टम इंडेक्स ट्रैकिंग फीस"] },
            correct: 0
        },
        {
            en: { q: "If a trader sells an Out-of-the-Money (OTM) Call option and an Out-of-the-Money (OTM) Put option on the same underlying asset with identical expiry dates but different strike prices, what strategy are they using?", opts: ["Short Strangle", "Short Straddle", "Long Strangle", "Long Straddle"] },
            hi: { q: "यदि कोई ट्रेडर एक ही अंतर्निहित परिसंपत्ति पर समान समाप्ति तिथि लेकिन अलग-अलग स्ट्राइक कीमतों के साथ एक आउट-ऑफ-द-मनी (OTM) कॉल ऑप्शन और एक आउट-ऑफ-द-मनी (OTM) पुट ऑप्शन बेचता है, तो वे किस रणनीति का उपयोग कर रहे हैं?", opts: ["शॉर्ट स्ट्रैंगल (Short Strangle)", "शॉर्ट स्ट्रैडल (Short Straddle)", "लॉन्ग स्ट्रैंगल", "लॉन्ग स्ट्रैडल"] },
            correct: 0
        },
        {
            en: { q: "Which act defines the core legal framework for governing and regulating securities contracts, including equity options and futures, in India?", opts: ["Securities Contracts (Regulation) Act, 1956", "SEBI Act, 1992", "Companies Act, 2013", "Reserve Bank Configuration Statutes, 1934"] },
            hi: { q: "कौन सा अधिनियम भारत में इक्विटी ऑप्शंस और फ्यूचर्स सहित प्रतिभूति अनुबंधों के संचालन और विनियमन के लिए मुख्य कानूनी ढांचा परिभाषित करता है?", opts: ["प्रतिभूति अनुबंध (विनियमन) अधिनियम, 1956 (Securities Contracts Regulation Act)", "सेबी अधिनियम, 1992", "कंपनी अधिनियम, 2013", "रिजर्व बैंक कॉन्फ़िगरेशन कानून, 1934"] },
            correct: 0
        },
        {
            en: { q: "What does an insurance 'Rider' provide when attached to a primary life insurance policy?", opts: ["Additional specific benefits or insurance coverage options beyond the core policy structure for an extra premium", "A dynamic system utility to track the field agent's vehicle metrics", "A structural waiver that cuts the total expense framework down to zero", "The right to inherit the physical infrastructure properties of the company"] },
            hi: { q: "प्राथमिक जीवन बीमा पॉलिसी के साथ संलग्न होने पर एक बीमा 'राइडर' (Rider) क्या प्रदान करता है?", opts: ["अतिरिक्त प्रीमियम के लिए मुख्य पॉलिसी संरचना से परे अतिरिक्त विशिष्ट लाभ या बीमा कवरेज विकल्प", "फील्ड एजेंट के वाहन मेट्रिक्स को ट्रैक करने के लिए एक गतिशील सिस्टम उपयोगिता", "एक संरचनात्मक छूट जो कुल व्यय ढांचे को शून्य कर देती है", "कंपनी की भौतिक बुनियादी ढांचा संपत्तियों को विरासत में पाने का अधिकार"] },
            correct: 0
        },
        {
            en: { q: "In the currency derivative segment, what does the 'Indirect Quote' format show?", opts: ["The amount of foreign currency required to purchase one fixed unit of domestic currency", "The amount of domestic currency required to purchase one fixed unit of foreign currency", "Any cross-currency reference transaction that excludes the domestic currency parameter", "A fixed baseline evaluation index declared by the International Monetary Fund"] },
            hi: { q: "मुद्रा डेरिवेटिव सेगमेंट में, 'अप्रत्यक्ष उद्धरण' (Indirect Quote) प्रारूप क्या प्रदर्शित करता है?", opts: ["घरेलू मुद्रा की एक निश्चित इकाई खरीदने के लिए आवश्यक विदेशी मुद्रा की मात्रा", "विदेशी मुद्रा की एक निश्चित इकाई खरीदने के लिए आवश्यक घरेलू मुद्रा की मात्रा", "कोई भी क्रॉस-करेंसी संदर्भ लेनदेन जिसमें घरेलू मुद्रा पैरामीटर शामिल नहीं है", "अंतर्राष्ट्रीय मुद्रा कोष द्वारा घोषित एक निश्चित आधारभूत मूल्यांकन सूचकांक"] },
            correct: 0
        },
        {
            en: { q: "Which type of mutual fund scheme invests a minimum of 80% of its assets in government securities, treasury bills, and state development loans across various maturities?", opts: ["Gilt Fund", "Liquid Fund", "Corporate Bond Fund", "Dynamic Bond Fund"] },
            hi: { q: "कौन सी म्यूचुअल फंड योजना विभिन्न परिपक्वताओं में सरकारी प्रतिभूतियों (Government Securities), ट्रेजरी बिलों और राज्य विकास ऋणों में अपनी संपत्ति का न्यूनतम 80% निवेश करती है?", opts: ["गिल्ट फंड (Gilt Fund)", "लिक्विड फंड", "कॉर्पोरेट बॉन्ड फंड", "डायनेमिक बॉन्ड फंड"] },
            correct: 0
        },
        {
            en: { q: "What happens to the time value of an option contract as it moves closer to the expiration date?", opts: ["It decays and erodes at an accelerated rate, reaching zero at expiration", "It increases exponentially due to the delta expansion paradox", "It remains completely fixed and constant until the final settlement hour", "It shifts under the structural ownership of the clearing corporation unit"] },
            hi: { q: "एक ऑप्शन अनुबंध के समय मूल्य (Time Value) का क्या होता है जैसे-जैसे वह समाप्ति तिथि के करीब पहुंचता है?", opts: ["यह तेज दर से घटता (Decay) है और समाप्ति पर शून्य हो जाता है", "डेल्टा विस्तार विरोधाभास के कारण यह तेजी से बढ़ता है", "यह अंतिम निपटान घंटे तक पूरी तरह से निश्चित और स्थिर रहता है", "यह क्लियरिंग कॉरपोरेशन यूनिट के संरचनात्मक स्वामित्व के तहत स्थानांतरित हो जाता है"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI rules, the 'Total Expense Ratio' (TER) for an equity-oriented mutual fund scheme is capped based on what parameter?", opts: ["The total Assets Under Management (AUM) slabs of the specific scheme", "The cumulative folio count registered under the regional database", "The absolute net profit margins generated by the asset management company", "The historical tracking error coefficient tracked over a decade"] },
            hi: { q: "सेबी के नियमों के तहत, एक इक्विटी-उन्मुख म्यूचुअल फंड योजना के लिए 'टोटल एक्सपेंस रेशियो' (TER) की सीमा किस पैरामीटर के आधार पर तय की जाती है?", opts: ["विशिष्ट योजना के कुल प्रबंधन अधीन संपत्ति (AUM) स्लैब के आधार पर", "क्षेत्रीय डेटाबेस के तहत पंजीकृत संचयी फोलियो संख्या के आधार पर", "एसेट मैनेजमेंट कंपनी द्वारा उत्पन्न शुद्ध लाभ मार्जिन के आधार पर", "एक दशक में ट्रैक किए गए ऐतिहासिक ट्रैकिंग एरर गुणांक के आधार पर"] },
            correct: 0
        },
        {
            en: { q: "In the context of life insurance, what does the 'Free Look Period' allow a new policyholder to do?", opts: ["Review the terms and cancel the policy within 15 days of receipt if unsatisfied, receiving a premium refund", "Drive field agent operations across regional corporate offices without charge", "Modify the underlying equity fund choices within the first year without any expense caps", "Transfer the maturity claims to any offshore international banking network automatically"] },
            hi: { q: "जीवन बीमा के संदर्भ में, 'फ्री लुक पीरियड' (Free Look Period) एक नए पॉलिसीधारक को क्या करने की अनुमति देता है?", opts: ["शर्तों की समीक्षा करना और असंतुष्ट होने पर प्राप्ति के 15 दिनों के भीतर पॉलिसी रद्द करके प्रीमियम रिफंड पाना", "बिना किसी शुल्क के क्षेत्रीय कॉर्पोरेट कार्यालयों में फील्ड एजेंट संचालन चलाना", "बिना किसी व्यय सीमा के पहले वर्ष के भीतर अंतर्निहित इक्विटी फंड विकल्पों को संशोधित करना", "परिपक्वता दावों को किसी भी अपतटीय अंतर्राष्ट्रीय बैंकिंग नेटवर्क में स्वचालित रूप से स्थानांतरित करना"] },
            correct: 0
        },
        {
            en: { q: "Which body guarantees the performance of all contracts and trade settlements across commodity derivative exchanges in India?", opts: ["The Exchange-Accredited Clearing Corporation", "The Warehousing Development and Regulatory Authority (WDRA)", "The Financial Benchmarks India Pvt. Ltd. (FBIL)", "The Ministry of Consumer Affairs Trading Board"] },
            hi: { q: "भारत में कमोडिटी डेरिवेटिव एक्सचेंजों में सभी अनुबंधों और व्यापार निपटान के प्रदर्शन की गारंटी कौन सा निकाय देता है?", opts: ["एक्सचेंज-मान्यता प्राप्त क्लियरिंग कॉरपोरेशन (Clearing Corporation)", "वेयरहाउसिंग डेवलपमेंट एंड रेगुलेटरी अथॉरिटी (WDRA)", "फाइनेंशियल बेंचमार्क इंडिया प्राइवेट लिमिटेड (FBIL)", "उपभोक्ता मामले मंत्रालय का व्यापार बोर्ड"] },
            correct: 0
        },
        {
            en: { q: "In currency futures trading in India, what represents the standard reference rate provider used for the final settlement of currency pairs?", opts: ["FBIL (Financial Benchmarks India Pvt. Ltd.) daily published reference rate", "The US Federal Reserve closing ticker benchmark layout", "The volume weighted average price of the initial trading hour", "The commercial baseline matrix fixed by state banking syndicates"] },
            hi: { q: "भारत में मुद्रा फ्यूचर्स ट्रेडिंग में, मुद्रा जोड़े के अंतिम निपटान (Final Settlement) के लिए उपयोग किया जाने वाला मानक संदर्भ दर प्रदाता कौन सा है?", opts: ["FBIL द्वारा दैनिक प्रकाशित आधिकारिक संदर्भ दर (Reference Rate)", "यूएस फेडरल रिजर्व क्लोजिंग टिकर बेंचमार्क लेआउट", "प्रारंभिक ट्रेडिंग घंटे का वॉल्यूम वेटेड एवरेज प्राइस", "राज्य बैंकिंग सिंडिकेट द्वारा तय की गई वाणिज्यिक आधारभूत मैट्रिक्स"] },
            correct: 0
        },
        {
            en: { q: "What is an 'Arbitrageur' in the stock and derivative market architecture?", opts: ["A market participant who exploits price differences of the same asset across different markets to make a risk-free profit", "A long term fundamental investor holding micro-cap assets inside secure portfolios", "A corporate regulator appointed by SEBI to inspect exchange database rooms", "A speculator trading uncovered option brackets with massive margin debt configuration"] },
            hi: { q: "स्टॉक और डेरिवेटिव बाजार आर्किटेक्चर में एक 'आर्बिट्रेजूर' (Arbitrageur) कौन होता है?", opts: ["एक बाजार भागीदार जो जोखिम मुक्त लाभ कमाने के लिए विभिन्न बाजारों में एक ही संपत्ति के मूल्य अंतर का लाभ उठाता है", "सुरक्षित पोर्टफोलियो के भीतर माइक्रो-कैप परिसंपत्तियों को रखने वाला एक दीर्घकालिक मौलिक निवेशक", "एक्सचेंज डेटाबेस रूम का निरीक्षण करने के लिए सेबी द्वारा नियुक्त एक कॉर्पोरेट नियामक", "बड़े मार्जिन ऋण कॉन्फ़िगरेशन के साथ अनकवर्ड ऑप्शन ब्रैकेट का व्यापार करने वाला सटोरिया"] },
            correct: 0
        },
        {
            en: { q: "In the mutual fund structure, who appoints the independent directors of the Asset Management Company (AMC)?", opts: ["The Board of Trustees of the Mutual Fund", "The Securities and Exchange Board of India (SEBI)", "The Sponsor company executive panel exclusively", "The Registrar and Transfer Agent (RTA) board"] },
            hi: { q: "म्यूचुअल फंड संरचना में, एसेट मैनेजमेंट कंपनी (AMC) के स्वतंत्र निदेशकों (Independent Directors) की नियुक्ति कौन करता?", opts: ["म्यूचुअल फंड का ट्रस्टी बोर्ड (The Board of Trustees)", "भारतीय प्रतिभूति और विनिमय बोर्ड (SEBI)", "विशेष रूप से प्रायोजक (Sponsor) कंपनी का कार्यकारी पैनल", "रजिस्ट्रार और ट्रांसफर एजेंट (RTA) बोर्ड"] },
            correct: 0
        },
        {
            en: { q: "What does the option Greek 'Delta' indicate?", opts: ["The rate of change of an option's premium relative to a change in the price of the underlying asset", "The sensitivity of an option's premium to a 1% change in historical market volatility", "The mathematical erosion pattern of time premium across deep out-of-the-money brackets", "The change in option value triggered by shifting international reserve currency ratios"] },
            hi: { q: "ऑप्शन ग्रीक 'डेल्टा' (Delta) क्या दर्शाता है?", opts: ["अंतर्निहित परिसंपत्ति की कीमत में बदलाव के सापेक्ष ऑप्शन के प्रीमियम के बदलाव की दर", "ऐतिहासिक बाजार अस्थिरता में 1% बदलाव के प्रति ऑप्शन के प्रीमियम की संवेदनशीलता", "डीप आउट-ऑफ-the-मनी ब्रैकेट में समय प्रीमियम का गणितीय क्षरण पैटर्न", "अंतरराष्ट्रीय आरक्षित मुद्रा अनुपातों को बदलने से ट्रिगर होने वाला ऑप्शन मूल्य में बदलाव"] },
            correct: 0
        },
        {
            en: { q: "Which type of insurance contract handles extreme large-scale commercial threats by allowing a primary insurer to buy insurance from another global firm?", opts: ["Reinsurance", "Double Insurance", "Co-insurance Allocation", "Indemnity Splitting Model"] },
            hi: { q: "किस प्रकार का बीमा अनुबंध एक प्राथमिक बीमाकर्ता को दूसरी वैश्विक फर्म से बीमा खरीदने की अनुमति देकर अत्यधिक बड़े पैमाने के वाणिज्यिक खतरों को संभालता है?", opts: ["पुनर्बीमा (Reinsurance)", "दोहरा बीमा (Double Insurance)", "सह-बीमा आवंटन", "क्षतिपूर्ति विभाजन मॉडल"] },
            correct: 0
        },
        {
            en: { q: "In commodity markets, what term describes a temporary severe situation where short sellers struggle to locate physical goods to cover positions, causing prices to spike?", opts: ["Short Squeeze", "Contango Expansion", "Backwardation Eradication", "Arbitrage Lockout"] },
            hi: { q: "कमोडिटी बाजारों में, कौन सा शब्द एक अस्थायी गंभीर स्थिति का वर्णन करता है जहां शॉर्ट सेलर्स को पोजीशन कवर करने के लिए भौतिक सामान खोजने में संघर्ष करना पड़ता है, जिससे कीमतें बढ़ जाती हैं?", opts: ["शॉर्ट स्क्वीज़ (Short Squeeze)", "कंतैंगो विस्तार", "बैकवर्डेशन उन्मूलन", "आर्बिट्रेज लॉकआउट"] },
            correct: 0
        },
        {
            en: { q: "What represents the 'Net Asset Value' (NAV) of a mutual fund scheme?", opts: ["The total market value of the scheme's assets minus liabilities, divided by the number of outstanding units", "The initial face value configuration fixed during the new fund offer (NFO)", "The highest transaction benchmark price recorded by the asset management company during a calendar year", "The aggregate volume of cash capital deployment handled across regional databases"] },
            hi: { q: "म्यूचुअल फंड योजना की 'नेट एसेट वैल्यू' (NAV) क्या दर्शाती है?", opts: ["योजना की परिसंपत्तियों का कुल बाजार मूल्य ऋण देनदारियां, बकाया इकाइयों की संख्या से विभाजित", "न्यू फंड ऑफर (NFO) के दौरान तय किया गया प्रारंभिक फेस वैल्यू कॉन्फ़िगरेशन", "एक कैलेंडर वर्ष के दौरान एसेट मैनेजमेंट कंपनी द्वारा दर्ज किया गया उच्चतम लेनदेन बेंचमार्क मूल्य", "क्षेत्रीय डेटाबेस में संभाले जाने वाले नकद पूंजी परिनियोजन की कुल मात्रा"] },
            correct: 0
        },
        // --- NISM / IRDAI Comprehensive Mock Test: All Modules Shuffled (Set 5) ---
        {
            en: { q: "What does the 'Tracking Error' of an Index Fund reflect?", opts: ["The measure of how closely the fund replicates the returns of its target benchmark index", "The mechanical delay in processing redemption payouts on the mobile platform", "The percentage of fraudulent transactions identified by the custodian bank", "The divergence between the Direct plan and Regular plan expense parameters"] },
            hi: { q: "किसी इंडेक्स फंड का 'ट्रैकिंग एरर' (Tracking Error) क्या दर्शाता है?", opts: ["यह माप कि फंड अपने लक्षित बेंचमार्क इंडेक्स के रिटर्न की कितनी बारीकी से नकल करता है", "मोबाइल प्लेटफॉर्म पर रिडेम्पशन भुगतान को प्रोसेस करने में होने वाली तकनीकी देरी", "कस्टोडियन बैंक द्वारा पहचाने गए धोखाधड़ी वाले लेनदेन का प्रतिशत", "डायरेक्ट प्लान और रेगुलर प्लान के व्यय मापदंडों के बीच का अंतर"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI guidelines, a 'Large Cap' company is defined as a company ranking within which tier based on market capitalization?", opts: ["1st to 100th company", "1st to 250th company", "101st to 250th company", "Top 50 companies exclusively"] },
            hi: { q: "सेबी के दिशानिर्देशों के तहत, 'लार्ज कैप' (Large Cap) कंपनी को मार्केट कैपिटलाइजेशन के आधार पर किस रैंक के भीतर परिभाषित किया गया है?", opts: ["1 से 100वीं कंपनी (1st to 100th company)", "1 से 250वीं कंपनी", "101 से 250वीं company", "विशेष रूप से शीर्ष 50 कंपनियां"] },
            correct: 0
        },
        {
            en: { q: "In an options transaction, if an investor sells a Put option, their market outlook on the underlying asset is typically:", opts: ["Bullish or Neutral", "Bearish or Highly Volatile", "Completely stagnant with zero volume", "Highly bearish with immediate crash expectations"] },
            hi: { q: "ऑप्शंस लेनदेन में, यदि कोई निवेशक पुट ऑप्शन (Put option) बेचता है, तो अंतर्निहित परिसंपत्ति पर उनका बाजार दृष्टिकोण आमतौर पर होता है:", opts: ["तेजी (Bullish) या तटस्थ (Neutral)", "मंदी (Bearish) या अत्यधिक अस्थिर", "शून्य वॉल्यूम के साथ पूरी तरह से स्थिर", "तत्काल क्रैश की उम्मीदों के साथ अत्यधिक मंदी"] },
            correct: 0
        },
        {
            en: { q: "Which core principle of insurance prevents a property from being insured for more than its actual economic worth across multiple insurance providers?", opts: ["Principle of Contribution", "Principle of Subrogation", "Principle of Proximate Cause", "Principle of Indemnity Matrix"] },
            hi: { q: "बीमा का कौन सा मूल सिद्धांत किसी संपत्ति को कई बीमा प्रदाताओं के पास उसके वास्तविक आर्थिक मूल्य से अधिक के लिए बीमाकृत होने से रोकता है?", opts: ["अंशदान का सिद्धांत (Principle of Contribution)", "प्रत्यासन का सिद्धांत (Principle of Subrogation)", "निकटतम कारण का सिद्धांत", "क्षतिपूर्ति मैट्रिक्स का सिद्धांत"] },
            correct: 0
        },
        {
            en: { q: "What is the premium movement sensitivity of an options contract relative to a 1% change in the volatility of the underlying asset measured by?", opts: ["Vega", "Delta", "Gamma", "Theta"] },
            hi: { q: "अंतर्निहित परिसंपत्ति की अस्थिरता (Volatility) में 1% के बदलाव के सापेक्ष ऑप्शंस अनुबंध के प्रीमियम आंदोलन की संवेदनशीलता को किसके द्वारा मापा जाता है?", opts: ["वेगा (Vega)", "डेल्टा (Delta)", "गामा (Gamma)", "थिटा (Theta)"] },
            correct: 0
        },
        {
            en: { q: "Which currency pairs are classified as 'Cross Currency pairs' inside the exchange-traded derivatives segment in India?", opts: ["Pairs that do not involve the Indian Rupee (INR) as one of the currencies, like EUR-USD or GBP-USD", "Pairs that exclusively trade against the sovereign physical gold reserves", "Contracts that settle via offshore digital token channels exclusively", "Any transaction matching the local interstate clearing pipeline parameters"] },
            hi: { q: "भारत में एक्सचेंज-ट्रेडेड डेरिवेटिव सेगमेंट के भीतर किन मुद्रा जोड़ों को 'क्रॉस करेंसी पेयर्स' (Cross Currency pairs) के रूप में वर्गीकृत किया गया है?", opts: ["वे जोड़े जिनमें भारतीय रुपया (INR) शामिल नहीं होता है, जैसे EUR-USD या GBP-USD", "वे जोड़े जो विशेष रूप से संप्रभु भौतिक स्वर्ण भंडार के खिलाफ व्यापार करते हैं", "अनुबंध जो विशेष रूप से अपतटीय डिजिटल टोकन चैनलों के माध्यम से निपटते हैं", "स्थानीय अंतरराज्यीय क्लियरिंग पाइपलाइन मापदंडों से मेल खाने वाला कोई भी लेनदेन"] },
            correct: 0
        },
        {
            en: { q: "In commodity derivatives, what does the 'Basis' represent?", opts: ["The difference between the Spot Price and the Futures Price of the same underlying commodity", "The statutory warehousing insurance charge configured per square meter", "The initial transaction margin threshold allocated by clearing houses", "The total custom transport tariff tax evaluated at physical trade state borders"] },
            hi: { q: "कमोडिटी डेरिवेटिव्स में, 'बेसिस' (Basis) क्या दर्शाता है?", opts: ["उसी अंतर्निहित कमोडिटी की हाजिर कीमत (Spot Price) और फ्यूचर्स कीमत (Futures Price) के बीच का अंतर", "प्रति वर्ग मीटर कॉन्फ़िगर किया गया वैधानिक गोदाम बीमा शुल्क", "क्लियरिंग हाउस द्वारा आवंटित प्रारंभिक लेनदेन मार्जिन सीमा", "भौतिक व्यापार राज्य सीमाओं पर मूल्यांकित कुल कस्टम परिवहन टैरिफ कर"] },
            correct: 0
        },
        {
            en: { q: "What does the 'Lock-in Period' imply for an investor subscribing to an Equity Linked Savings Scheme (ELSS) mutual fund?", opts: ["The invested units cannot be redeemed or transferred for a mandatory period of 3 years from the purchase date", "The NAV of the scheme remains frozen at a constant flat price for 5 years", "The fund manager is restricted from rebalancing the stock portfolio matrix for 3 years", "The investor must make consecutive monthly payments without missing any cycle"] },
            hi: { q: "इक्विटी लिंक्ड सेविंग्स स्कीम (ELSS) म्यूचुअल फंड में निवेश करने वाले निवेशक के लिए 'लॉक-इन अवधि' (Lock-in Period) का क्या अर्थ है?", opts: ["निवेश की गई इकाइयों को खरीद की तारीख से 3 वर्ष की अनिवार्य अवधि के लिए भुनाया या स्थानांतरित नहीं किया जा सकता है", "योजना की एनएवी 5 वर्षों के लिए एक स्थिर फ्लैट मूल्य पर जमी रहती है", "फंड मैनेजर को 3 साल तक स्टॉक पोर्टफोलियो मैट्रिक्स को पुनर्संतुलित करने से प्रतिबंधित किया जाता है", "निवेशक को बिना किसी चक्र को छोड़े लगातार मासिक भुगतान करना होगा"] },
            correct: 0
        },
        {
            en: { q: "Which corporate entity acts as the legal custodian to safeguard the physical gold assets held by a Gold Exchange Traded Fund (ETF)?", opts: ["The Custodian bank approved by SEBI", "The Asset Management Company's executive committee", "The Ministry of Finance Bullion Vault Management Wing", "The Association of Mutual Funds in India (AMFI) Central Registrar"] },
            hi: { q: "गोल्ड एक्सचेंज ट्रेडेड फंड (ETF) द्वारा रखी गई भौतिक सोने की संपत्तियों की सुरक्षा के लिए कौन सी कॉर्पोरेट इकाई कानूनी संरक्षक (Custodian) के रूप में कार्य करती है?", opts: ["सेबी (SEBI) द्वारा अनुमोदित कस्टोडियन बैंक", "एसेट Management कंपनी की कार्यकारी समिति", "वित्त मंत्रालय बुलियन वॉल्ट मैनेजमेंट विंग", "एसोसिएशन ऑफ म्यूचुअल फंड्स इन इंडिया (AMFI) केंद्रीय रजिस्ट्रार"] },
            correct: 0
        },
        {
            en: { q: "What is the primary corporate purpose of an Initial Public Offering (IPO) in the equity capital market?", opts: ["To raise capital from the public and list the company's shares on a recognized stock exchange for secondary trading", "To forcefully buy back existing employee stock options at zero cost", "To shift corporate legal headquarters to offshore international tax-free zones", "To settle outstanding trade litigations under central bank administrative intervention"] },
            hi: { q: "इक्विटी कैपिटल मार्केट में इनिशियल पब्लिक ऑफरिंग (IPO) का प्राथमिक कॉर्पोरेट उद्देश्य क्या है?", opts: ["जनता से पूंजी जुटाना और द्वितीयक व्यापार (Secondary Trading) के लिए एक मान्यता प्राप्त स्टॉक एक्सचेंज पर कंपनी के शेयरों को सूचीबद्ध करना", "शून्य लागत पर मौजूदा कर्मचारी स्टॉक विकल्पों को जबरन वापस खरीदना", "कॉर्पोरेट कानूनी मुख्यालयों को अपतटीय अंतर्राष्ट्रीय कर-मुक्त क्षेत्रों में स्थानांतरित करना", "केंद्रीय बैंक के प्रशासनिक हस्तक्षेप के तहत बकाया व्यापार मुकदमों का निपटारा करना"] },
            correct: 0
        },
        {
            en: { q: "In the context of Option Pricing, what happens to the intrinsic value of an Out-of-the-Money (OTM) Call option contract?", opts: ["It is always exactly equal to zero", "It is equivalent to the total option premium paid by the buyer", "It increases exponentially during market hours when volatility spikes", "It matches the current spot index price configuration value"] },
            hi: { q: "ऑप्शन प्राइसिंग (Option Pricing) के संदर्भ में, एक आउट-ऑफ-द-मनी (OTM) कॉल ऑप्शन अनुबंध के अंतर्निहित मूल्य (Intrinsic Value) का क्या होता है?", opts: ["यह हमेशा बिल्कुल शून्य के बराबर होता है (It is always exactly equal to zero)", "यह खरीदार द्वारा भुगतान किए गए कुल ऑप्शन प्रीमियम के बराबर होता है", "अस्थिरता बढ़ने पर बाजार के घंटों के दौरान यह तेजी से बढ़ता है", "यह वर्तमान हाजिर सूचकांक मूल्य कॉन्फ़िगरेशन मूल्य से मेल खाता है"] },
            correct: 0
        },
        {
            en: { q: "Under IRDAI guidelines, what is the mandatory minimum period granted as a 'Free Look Period' for long-term health or life insurance policies purchased digitally?", opts: ["30 days", "15 days", "7 days", "45 days"] },
            hi: { q: "IRDAI के दिशानिर्देशों के तहत, डिजिटल रूप से खरीदी गई दीर्घकालिक स्वास्थ्य या जीवन बीमा पॉलिसियों के लिए 'फ्री लुक पीरियड' (Free Look Period) के रूप में दी जाने वाली अनिवार्य न्यूनतम अवधि क्या है?", opts: ["30 दिन (30 days - क्योंकि ऑनलाइन/डिजिटल पॉलिसियों के लिए यह 30 दिन है, सामान्य के लिए 15 दिन)", "15 दिन", "7 दिन", "45 दिन"] },
            correct: 0
        },
        {
            en: { q: "What transaction cost parameters compose the 'Total Expense Ratio' (TER) of a mutual fund scheme?", opts: ["Management fees, administrative expenses, marketing fees, and distributor commissions", "The exit load penalty fees deducted during panic redemption hours", "The dynamic overnight margin charges levied by the stock exchange clearing units", "The capital gains tax deductions processed at source by asset platforms"] },
            hi: { q: "कौन से लेनदेन लागत पैरामीटर किसी म्यूचुअल फंड योजना के 'टोटल एक्सपेंस रेशियो' (TER) की रचना करते हैं?", opts: ["प्रबंधन शुल्क, प्रशासनिक व्यय, विपणन शुल्क और वितरक कमीशन (Distributor commissions)", "आतंक मोचन (Panic redemption) घंटों के दौरान काटी जाने वाली निकास लोड जुर्माना फीस", "स्टॉक एक्सचेंज क्लियरिंग इकाइयों द्वारा लगाया जाने वाला गतिशील रातोंरात मार्जिन शुल्क", "परिसंपत्ति प्लेटफार्मों द्वारा स्रोत पर संसाधित पूंजीगत लाभ कर कटौती"] },
            correct: 0
        },
        {
            en: { q: "Which underlying benchmark index tracks the performance of the largest 30 financially sound companies listed on the Bombay Stock Exchange (BSE)?", opts: ["S&P BSE SENSEX", "NIFTY 50", "BSE MIDCAP", "NIFTY NEXT 50"] },
            hi: { q: "कौन सा अंतर्निहित बेंचमार्क सूचकांक बॉम्बे स्टॉक एक्सचेंज (BSE) पर सूचीबद्ध सबसे बड़ी 30 वित्तीय रूप से मजबूत कंपनियों के प्रदर्शन को ट्रैक करता है?", opts: ["S&P BSE SENSEX", "NIFTY 50", "BSE MIDCAP", "NIFTY NEXT 50"] },
            correct: 0
        },
        {
            en: { q: "In commodity derivatives markets, what does a 'Short Squeeze' scenario typically trigger?", opts: ["A rapid and extreme surge in prices as short sellers panic to buy back contracts to cover positions", "An immediate and total crash of physical cargo valuation indicators across state mandis", "The permanent cancellation of all option premium models by exchange authorities", "A structural drop in warehouse storage logistics tariffs across regional pipelines"] },
            hi: { q: "कमोडिटी डेरिवेटिव्स बाजारों में, 'शॉर्ट स्क्वीज़' (Short Squeeze) परिदृश्य आमतौर पर क्या ट्रिगर करता है?", opts: ["कीमतों में एक तीव्र और अत्यधिक वृद्धि क्योंकि शॉर्ट सेलर्स पोजीशन कवर करने के लिए अनुबंधों को वापस खरीदने के लिए घबराते हैं", "राज्य मंडियों में भौतिक कार्गो मूल्यांकन संकेतकों का तत्काल और पूर्ण क्रैश", "एक्सचेंज अधिकारियों द्वारा सभी ऑप्शन प्रीमियम मॉडल का स्थायी रद्दीकरण", "क्षेत्रीय पाइपलाइनों में गोदाम भंडारण रसद टैरिफ में संरचनात्मक गिरावट"] },
            correct: 0
        },
        {
            en: { q: "Under the Prevention of Money Laundering Act (PMLA), 2002, what documentation process is legally mandatory for onboarding a mutual fund investor in India?", opts: ["KYC (Know Your Customer) compliance verification via PAN and officially valid identity documents", "Submitting a complete certified copy of corporate commercial property ownership bills", "An annual dynamic security audit clearance from central forensic laboratories", "A formal net worth tracking certificate issued by state cooperative bank structures"] },
            hi: { q: "धन शोधन निवारण अधिनियम (PMLA), 2002 के तहत, भारत में म्यूचुअल फंड निवेशक को ऑनबोर्ड करने के लिए कौन सी दस्तावेज़ीकरण प्रक्रिया कानूनी रूप से अनिवार्य है?", opts: ["पैन (PAN) और आधिकारिक रूप से वैध पहचान दस्तावेजों के माध्यम से केवाईसी (KYC) अनुपालन सत्यापन", "कॉर्पोरेट वाणिज्यिक संपत्ति स्वामित्व बिलों की एक पूर्ण प्रमाणित प्रति जमा करना", "केंद्रीय फोरेंसिक प्रयोगशालाओं से वार्षिक गतिशील सुरक्षा ऑडिट क्लीयरेंस", "राज्य सहकारी बैंक संरचनाओं द्वारा जारी एक औपचारिक नेट वर्थ ट्रैकिंग प्रमाणपत्र"] },
            correct: 0
        },
        {
            en: { q: "What does the option Greek 'Theta' describe in derivative contracts pricing?", opts: ["The rate at which an option's time value decays as it approaches expiration, assuming other factors remain constant", "The speed of premium acceleration relative to sharp movements inside underlying spot prices", "The sensitivity of the contract to macroeconomic interest rate adjustments executed by central banks", "The volatility correlation threshold monitored by exchange clearing risk management frameworks"] },
            hi: { q: "डेरिवेटिव अनुबंधों के मूल्य निर्धारण में ऑप्शन ग्रीक 'थिटा' (Theta) क्या वर्णन करता है?", opts: ["वह दर जिस पर किसी ऑप्शन का समय मूल्य (Time value) समाप्ति के करीब पहुंचने पर घटता है, यह मानते हुए कि अन्य कारक स्थिर हैं", "अंतर्निहित हाजिर कीमतों के अंदर तेज आंदोलनों के सापेक्ष प्रीमियम त्वरण की गति", "केंद्रीय बैंकों द्वारा निष्पादित व्यापक आर्थिक ब्याज दर समायोजन के प्रति अनुबंध की संवेदनशीलता", "एक्सचेंज क्लियरिंग जोखिम प्रबंधन ढांचे द्वारा निगरानी की जाने वाली अस्थिरता सहसंबंध सीमा"] },
            correct: 0
        },
        {
            en: { q: "Inside the insurance sector, what does the term 'Moral Hazard' specifically refer to?", opts: ["An increase in the probability or severity of loss due to the dishonest behavior or careless attitude of the insured person after getting coverage", "The structural tax variation implemented dynamically across insurance premium collections", "The natural physical decay of asset conditions monitored over structural evaluation lifecycles", "The risk of statutory fine implementations post policy registry compliance failures"] },
            hi: { q: "बीमा क्षेत्र के भीतर, 'नैतिक संकट' (Moral Hazard) शब्द विशेष रूप से किसे संदर्भित करता है?", opts: ["कवरेज मिलने के बाद बीमित व्यक्ति के बेईमान व्यवहार या लापरवाही के कारण नुकसान की संभावना या गंभीरता में वृद्धि", "बीमा प्रीमियम संग्रह में गतिशील रूप से लागू संरचनात्मक कर भिन्नता", "संरचनात्मक मूल्यांकन जीवनचक्रों में निगरानी की जाने वाली संपत्ति स्थितियों का प्राकृतिक भौतिक क्षय", "पॉलिसी रजिस्ट्री अनुपालन विफलताओं के बाद वैधानिक जुर्माना कार्यान्वयन का जोखिम"] },
            correct: 0
        },
        {
            en: { q: "In exchange-traded currency derivatives, what entity acts as the legal counterparty to guarantee the fulfillment of every trade transaction?", opts: ["The Exchange-Accredited Clearing Corporation", "The Reserve Bank Treasury Operation Bureau", "The Association of Mutual Funds in India Central Wing", "The Lead Brokerage Syndicate Risk Management Counter"] },
            hi: { q: "एक्सचेंज-ट्रेडेड मुद्रा डेरिवेटिव में, प्रत्येक व्यापार लेनदेन की पूर्ति की गारंटी देने के लिए कौन सी संस्था कानूनी काउंटरपार्टी (Counterparty) के रूप में कार्य करती है?", opts: ["एक्सचेंज-मान्यता प्राप्त क्लियरिंग कॉरपोरेशन (Clearing Corporation)", "रिजर्व बैंक ट्रेजरी ऑपरेशन ब्यूरो", "एसोसिएशन ऑफ म्यूचुअल फंड्स इन इंडिया केंद्रीय विंग", "लीड ब्रोकरेज सिंडिकेट जोखिम प्रबंधन काउंटर"] },
            correct: 0
        },
        {
            en: { q: "What type of mutual fund scheme dynamically changes its allocation matrix between equity and debt assets based on shifting market parameters?", opts: ["Balanced Advantage Fund (Dynamic Asset Allocation Fund)", "Equity Linked Savings Scheme (ELSS)", "Gilt Fund with Sovereign Allocation", "Sectoral / Thematic Infrastructure Scheme"] },
            hi: { q: "परिवर्तनशील बाजार मापदंडों के आधार पर कौन सी म्यूचुअल फंड योजना इक्विटी और डेट परिसंपत्तियों के बीच अपने आवंटन मैट्रिक्स को गतिशील रूप से बदलती है?", opts: ["बैलेंस्ड एडवांटेज फंड (Balanced Advantage Fund / Dynamic Asset Allocation Fund)", "इक्विटी लिंक्ड सेविंग्स स्कीम (ELSS)", "संप्रभु आवंटन के साथ गिल्ट फंड", "सेक्टरल / थमैटिक इंफ्रास्ट्रक्चर योजना"] },
            correct: 0
        },
        {
            en: { q: "What does the 'Solvency Ratio' of an insurance company operating in India represent?", opts: ["The measure of an insurer's capital adequacy and capacity to meet its long-term policyholder claims and liabilities", "The total count of active field agents registered under the regional corporate databases", "The ratio of administrative expenses incurred relative to the aggregate direct premium collected", "The dynamic compliance timeline allocation configured to process death benefit nominations"] },
            hi: { q: "भारत में काम करने वाली बीमा कंपनी का 'सॉल्वेंसी रेशियो' (Solvency Ratio) क्या दर्शाता है?", opts: ["एक बीमाकर्ता की पूंजी पर्याप्तता और अपने दीर्घकालिक पॉलिसीधारक दावों और देनदारियों को पूरा करने की क्षमता का माप", "क्षेत्रीय कॉर्पोरेट डेटाबेस के तहत पंजीकृत सक्रिय फ़ील्ड एजेंटों की कुल संख्या", "एकत्रित कुल प्रत्यक्ष प्रीमियम के सापेक्ष किए गए प्रशासनिक खर्चों का अनुपात", "मृत्यु लाभ नामांकनों को संसाधित करने के लिए कॉन्फ़िगर किया गया गतिशील अनुपालन समयरेखा आवंटन"] },
            correct: 0
        },
        {
            en: { q: "In the derivative trading architecture, executing a transaction that creates a position exactly identical but opposite to an existing open market position is known as:", opts: ["Squaring Off", "Rolling Over", "Mark-to-Market Settlement", "Novation Protocol"] },
            hi: { q: "डेरिवेटिव ट्रेडिंग आर्किटेक्चर में, एक ऐसा लेनदेन निष्पादित करना जो मौजूदा ओपन मार्केट पोजीशन के बिल्कुल समान लेकिन विपरीत पोजीशन बनाता है, कहलाता है:", opts: ["स्क्वायरिंग ऑफ (Squaring Off)", "रोलिंग ओवर (Rolling Over)", "मार्क-टू-मार्केट सेटलमेंट", "नोवेशन प्रोटोकॉल"] },
            correct: 0
        },
        {
            en: { q: "What represents the structural lot size for a standard USD-INR currency futures contract on recognized Indian exchanges?", opts: ["USD 1,000", "USD 10,000", "USD 5,000", "USD 100"] },
            hi: { q: "मान्यता प्राप्त भारतीय एक्सचेंजों पर एक मानक USD-INR मुद्रा फ्यूचर्स अनुबंध के लिए संरचनात्मक लॉट आकार (Lot Size) क्या है?", opts: ["USD 1,000", "USD 10,000", "USD 5,000", "USD 100"] },
            correct: 0
        },
        {
            en: { q: "Which core parameter measures the total percentage of a mutual fund portfolio's equity holdings that have been bought and sold over a 1-year timeframe?", opts: ["Portfolio Turnover Rate", "Expense Ratio Coefficient", "Tracking Error Standard Variance", "Sharpe Volatility Matrix"] },
            hi: { q: "कौन सा मुख्य पैरामीटर म्यूचुअल फंड पोर्टफोलियो की इक्विटी होल्डिंग्स के कुल प्रतिशत को मापता है जिसे 1-वर्ष की समय सीमा में खरीदा और बेचा गया है?", opts: ["पोर्टफोलियो टर्नओवर रेट (Portfolio Turnover Rate)", "व्यय अनुपात गुणांक", "ट्रैकिंग एरर मानक वेरिएंस", "शार्प वोलाटिलिटी मैट्रिक्स"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI Mutual Fund regulations, what mandatory legal document containing all operational parameters must be provided to a potential investor before subscription?", opts: ["Key Information Memorandum (KIM)", "The full balance sheet of the corporate sponsor network", "The individual tax assessment filings of the designated fund manager", "The structural warehouse map setup verified by state authorities"] },
            hi: { q: "सेबी म्यूचुअल फंड नियमों के तहत, सदस्यता से पहले किसी संभावित निवेशक को सभी परिचालन मापदंडों वाला कौन सा अनिवार्य कानूनी दस्तावेज प्रदान किया जाना चाहिए?", opts: ["की इंफॉर्मेशन मेमोरैंडम (Key Information Memorandum - KIM)", "कॉर्पोरेट प्रायोजक नेटवर्क की पूरी बैलेंस शीट", "नामित फंड मैनेजर की व्यक्तिगत कर निर्धारण फाइलिंग", "राज्य अधिकारियों द्वारा सत्यापित संरचनात्मक गोदाम मानचित्र सेटअप"] },
            correct: 0
        },
        {
            en: { q: "What is an 'Arbitrageur' in the financial market ecosystem?", opts: ["A participant who simultaneously buys and sells an asset in different markets to exploit price discrepancies for risk-free profit", "A long-term micro-cap value investor tracking corporate fundamental accounting records", "A regulatory field auditor appointed directly by SEBI to inspect exchange computer systems", "A high-leverage speculator trading uncovered short call options during macroeconomic events"] },
            hi: { q: "वित्तीय बाजार पारिस्थितिकी तंत्र में एक 'आर्बिट्रेजूर' (Arbitrageur) कौन होता है?", opts: ["एक भागीदार जो जोखिम मुक्त लाभ के लिए मूल्य विसंगतियों का लाभ उठाने के लिए विभिन्न बाजारों में एक साथ संपत्ति खरीदता और बेचता है", "कॉर्पोरेट मौलिक लेखा रिकॉर्ड को ट्रैक करने वाला एक दीर्घकालिक माइक्रो-कैप मूल्य निवेशक", "एक्सचेंज कंप्यूटर सिस्टम का निरीक्षण करने के लिए सेबी द्वारा सीधे नियुक्त एक नियामक क्षेत्र लेखा परीक्षक", "व्यापक आर्थिक घटनाओं के दौरान अनकवर्ड शॉर्ट कॉल ऑप्शंस का व्यापार करने वाला एक उच्च-लिवरेज सटोरिया"] },
            correct: 0
        },
        {
            en: { q: "Inside the commodity derivatives market framework, what asset division covers items such as crude oil and natural gas?", opts: ["Energy Complex Derivatives", "Base Metals Division", "Bullion Assets Segment", "Agri-Commodities Category"] },
            hi: { q: "कमोडिटी डेरिवेटिव्स बाजार ढांचे के भीतर, कच्चे तेल (Crude oil) और प्राकृतिक गैस (Natural gas) जैसी वस्तुओं को कौन सा परिसंपत्ति प्रभाग कवर करता है?", opts: ["ऊर्जा परिसर डेरिवेटिव्स (Energy Complex Derivatives)", "बेस मेटल्स डिवीजन", "बुलियन परिसंपत्तियां खंड", "कृषि-कमोडिटी श्रेणी"] },
            correct: 0
        },
        {
            en: { q: "What is the primary investment directive of a 'Gilt Fund' in the debt mutual fund category?", opts: ["To invest a minimum of 80% of assets exclusively in sovereign government securities with zero credit risk", "To optimize risk adjustments by trading high-growth small-cap technology stocks", "To extract risk-free arbitrage profits from physical gold spot markets across states", "To fund international blue-chip corporate real estate projects monitored under cross-border grids"] },
            hi: { q: "डेट म्यूचुअल फंड श्रेणी में 'गिल्ट फंड' (Gilt Fund) का प्राथमिक निवेश निर्देश क्या है?", opts: ["शून्य क्रेडिट जोखिम वाली संप्रभु सरकारी प्रतिभूतियों (Government securities) में विशेष रूप से संपत्ति का न्यूनतम 80% निवेश करना", "उच्च विकास वाले स्मॉल-कैप टेक्नोलॉजी शेयरों में व्यापार करके जोखिम समायोजन को अनुकूलित करना", "राज्यों में भौतिक सोने के हाजिर बाजारों से जोखिम मुक्त आर्बिट्रेज लाभ निकालना", "सीमा पार ग्रिड के तहत निगरानी की जाने वाली अंतर्राष्ट्रीय ब्लू-चिप कॉर्पोरेट रियल एस्टेट परियोजनाओं को वित्तपोषित करना"] },
            correct: 0
        },
        {
            en: { q: "In life insurance contracts, what happens under the 'Suicide Clause' if the insured person commits suicide within 12 months of policy issuance?", opts: ["The full sum insured is void; only a refund of the premiums paid (typically 80% or more) is granted to nominees", "The complete death benefit sum insured is paid compulsorily following court intervention", "The entire policy shifts ownership automatically to the state civil treasury wing", "The contract converts into an open-ended dynamic annuity bond under central banking oversight"] },
            hi: { q: "जीवन बीमा अनुबंधों में, यदि बीमित व्यक्ति पॉलिसी जारी होने के 12 महीनों के भीतर आत्महत्या कर लेता है, तो 'सुसाइड क्लॉज' (Suicide Clause) के तहत क्या होता है?", opts: ["पूर्ण बीमित राशि शून्य है; नामांकित व्यक्तियों को केवल भुगतान किए गए प्रीमियम का रिफंड (आमतौर पर 80% या अधिक) दिया जाता है", "अदालत के हस्तक्षेप के बाद पूर्ण मृत्यु लाभ बीमित राशि का अनिवार्य रूप से भुगतान किया जाता है", "पूरी पॉलिसी स्वचालित रूप से राज्य नागरिक ट्रेजरी विंग के स्वामित्व में स्थानांतरित हो जाती है", "अनुबंध केंद्रीय बैंकिंग निरीक्षण के तहत एक ओपन-एंडेड गतिशील वार्षिकी बांड में परिवर्तित हो जाता है"] },
            correct: 0
        },
        {
            en: { q: "What metric calculates the market risk or sensitivity of an equity share or mutual fund portfolio relative to the broader market index?", opts: ["Beta Coefficient", "Alpha Tracker", "Standard Deviation Scale", "Information Ratio Factor"] },
            hi: { q: "कौन सा मीट्रिक व्यापक बाजार सूचकांक (Market Index) के सापेक्ष किसी इक्विटी शेयर या म्यूचुअल फंड पोर्टफोलियो के बाजार जोखिम या संवेदनशीलता की गणना करता है?", opts: ["बीटा गुणांक (Beta Coefficient)", "अल्फा ट्रैकर", "मानक विचलन पैमाना", "सूचना अनुपात कारक"] },
            correct: 0
        },
        {
            en: { q: "Which official entity calculates and publishes the foreign exchange daily Reference Rates for major currency pairs in India?", opts: ["Financial Benchmarks India Pvt. Ltd. (FBIL)", "The Securities and Exchange Board of India Head Office Treasury Desk", "State Bank of India Institutional Forex Portal Division", "Ministry of Commerce Foreign Exchange Monitoring Wing"] },
            hi: { q: "भारत में प्रमुख मुद्रा जोड़ों के लिए दैनिक विदेशी मुद्रा संदर्भ दरें (Reference Rates) कौन सी आधिकारिक संस्था संकलित और प्रकाशित करती है?", opts: ["फाइनेंशियल बेंचमार्क इंडिया प्राइवेट लिमिटेड (FBIL)", "भारतीय प्रतिभूति और विनिमय बोर्ड प्रधान कार्यालय ट्रेजरी डेस्क", "भारतीय स्टेट बैंक संस्थागत विदेशी मुद्रा पोर्टल प्रभाग", "वाणिज्य मंत्रालय विदेशी मुद्रा निगरानी विंग"] },
            correct: 0
        },
        {
            en: { q: "What does an insurance 'Deductible' mean in general non-life insurance claims?", opts: ["A specified pre-determined amount of loss that the insured must pay out-of-pocket before the insurer pays its share", "The structural promotional discount provided to high-net-worth clients during annual renewal cycles", "The commission layout processed dynamically to licensed field distribution agents", "The statutory processing tax tariff imposed across cross-border reinsurance transactions"] },
            hi: { q: "सामान्य गैर-जीवन बीमा दावों में बीमा 'डीडक्टिबल' (Deductible) का क्या अर्थ है?", opts: ["नुकसान की एक निर्दिष्ट पूर्व-निर्धारित राशि जो बीमाकर्ता द्वारा अपना हिस्सा चुकाने से पहले बीमित व्यक्ति को अपनी जेब से चुकानी होगी", "वार्षिक नवीनीकरण चक्रों के दौरान उच्च-नेट-वर्थ वाले ग्राहकों को प्रदान की जाने वाली संरचनात्मक प्रचार छूट", "लाइसेंस प्राप्त क्षेत्र वितरण एजेंटों को गतिशील रूप से संसाधित कमीशन लेआउट", "सीमा पार पुनर्बीमा लेनदेन पर लगाया जाने वाला वैधानिक प्रसंस्करण कर टैरिफ"] },
            correct: 0
        },
        {
            en: { q: "In the mutual fund structure, who holds the physical cash and core securities of a scheme in safe custody to prevent any corporate fraud by the AMC?", opts: ["The Custodian bank", "The Sponsor company", "The Registrar and Transfer Agent (RTA)", "The Board of Independent Trustees"] },
            hi: { q: "म्यूचुअल फंड संरचना में, एएमसी (AMC) द्वारा किसी भी कॉर्पोरेट धोखाधड़ी को रोकने के लिए योजना की भौतिक नकदी और मुख्य प्रतिभूतियों को सुरक्षित अभिरक्षा (Safe custody) में कौन रखता है?", opts: ["कस्टोडियन बैंक (The Custodian bank)", "प्रायोजक कंपनी", "रजिस्ट्रार और ट्रांसफर एजेंट (RTA)", "स्वतंत्र ट्रस्टी बोर्ड"] },
            correct: 0
        },
        {
            en: { q: "What options strategy is deployed when a trader simultaneously buys an At-the-Money (ATM) Call option and an At-the-Money (ATM) Put option on the same underlying asset with the identical expiry parameters?", opts: ["Long Straddle", "Long Strangle", "Short Straddle", "Bull Call Spread"] },
            hi: { q: "जब कोई ट्रेडर एक ही अंतर्निहित परिसंपत्ति पर समान समाप्ति मापदंडों के साथ एक साथ एट-द-मनी (ATM) कॉल ऑप्शन और एट-द-मनी (ATM) पुट ऑप्शन खरीदता है, तो कौन सी ऑप्शंस रणनीति अपनाई जाती है?", opts: ["लॉन्ग स्ट्रैडल (Long Straddle)", "लॉन्ग स्ट्रैंगल (Long Strangle)", "शॉर्ट स्ट्रैडल", "बुल कॉल स्प्रेड"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI rules, close-ended mutual fund schemes must offer liquidity to retail investors through which mandatory channel after the NFO closes?", opts: ["Mandatory listing and secondary trading capabilities on a recognized stock exchange", "Daily direct liquidity redemption access at the physical AMC corporate counters", "Automatic structural conversion into high-yield public infrastructure tax bonds", "Interstate money market commercial credit lines swap configurations"] },
            hi: { q: "सेबी के नियमों के तहत, क्लोज-एंडेड म्यूचुअल फंड योजनाओं को एनएफओ बंद होने के बाद किस अनिवार्य चैनल के माध्यम से खुदरा निवेशकों को तरलता प्रदान करनी चाहिए?", opts: ["एक मान्यता प्राप्त स्टॉक एक्सचेंज पर अनिवार्य लिस्टिंग और द्वितीयक व्यापार (Secondary trading) क्षमताएं", "भौतिक एएमसी कॉर्पोरेट काउंटरों पर दैनिक प्रत्यक्ष तरलता रिडेम्पशन पहुंच", "उच्च उपज वाले सार्वजनिक बुनियादी ढांचा कर बांड में स्वचालित संरचनात्मक रूपांतरण", "अंतरराज्यीय मुद्रा बाजार वाणिज्यिक क्रेडिट लाइन स्वैप कॉन्फ़िगरेशन"] },
            correct: 0
        },
        {
            en: { q: "What does the financial index 'P/E Ratio' represent inside fundamental equity analysis?", opts: ["Price-to-Earnings Ratio", "Profit-to-Expense Matrix", "Premium-to-Equity Coefficient", "Public-to-Exchange Allocation"] },
            hi: { q: "मौलिक इक्विटी विश्लेषण (Fundamental equity analysis) के भीतर वित्तीय सूचकांक 'P/E Ratio' क्या दर्शाता है?", opts: ["प्राइस-टू-अर्निंग रेशियो (Price-to-Earnings Ratio)", "प्रॉफिट-टू-एक्सपेंस मैट्रिक्स", "प्रीमियम-टू-इक्विटी गुणांक", "पब्लिक-टू-एक्सचेंज एलोकेशन"] },
            correct: 0
        },
        {
            en: { q: "In commodity derivatives trading, what is the market scenario known as 'Backwardation'?", opts: ["A condition where the current spot price of a commodity is trading higher than its futures contract price", "A situation where the futures contract price is expanding infinitely above spot indicators", "A structural balance state where warehousing costs drop down to absolute zero margins", "The mandatory conversion phase of option premiums inside clearing house settlement structures"] },
            hi: { q: "कमोडिटी डेरिवेटिव्स ट्रेडिंग में, 'बैकवर्डेशन' (Backwardation) के रूप में जाने जाने वाला बाजार परिदृश्य क्या है?", opts: ["एक ऐसी स्थिति जहां किसी कमोडिटी की वर्तमान हाजिर कीमत (Spot price) उसके फ्यूचर्स अनुबंध मूल्य से अधिक पर ट्रेड कर रही होती है", "एक ऐसी स्थिति जहां फ्यूचर्स अनुबंध मूल्य स्पॉट संकेतकों से ऊपर अनंत रूप से बढ़ रहा है", "एक संरचनात्मक संतुलन स्थिति जहां गोदाम लागत पूर्ण शून्य मार्जिन तक गिर जाती है", "क्लियरिंग हाउस निपटान संरचनाओं के अंदर ऑप्शन प्रीमियम का अनिवार्य रूपांतरण चरण"] },
            correct: 0
        },
        {
            en: { q: "Under the Insurance Act, 1938, what section dictates that a life insurance policy cannot be called into question by the insurer on grounds of misstatement after the expiry of 3 years?", opts: ["Section 45 (Indisputability Clause)", "Section 41 (Anti-Rebate Regulation)", "Section 39 (Nomination Framework)", "Section 27 (Investment Compliance Code)"] },
            hi: { q: "बीमा अधिनियम, 1938 के तहत, कौन सी धारा यह निर्देश देती है कि जीवन बीमा पॉलिसी को 3 वर्ष की समाप्ति के बाद गलत बयानी के आधार पर बीमाकर्ता द्वारा चुनौती नहीं दी जा सकती?", opts: ["धारा 45 (Section 45 - Indisputability Clause)", "धारा 41 (एंटी-रिबेट विनियमन)", "धारा 39 (नामांकन ढांचा)", "धारा 27 (निवेश अनुपालन कोड)"] },
            correct: 0
        },
        {
            en: { q: "What is the primary role of an 'Underwriter' in the financial operational framework of an insurance corporation?", opts: ["To evaluate the risk profile of an applicant and determine the appropriate premium rates or reject policy issuance", "To manage international digital brand campaigns across cross-border video platforms", "To handle litigation settlements across corporate consumer dispute redressal panels", "To process compound loyalty bonus point distributions to nominee bank registries post maturity"] },
            hi: { q: "एक बीमा निगम के वित्तीय परिचालन ढांचे में 'अंडरराइटर' (Underwriter) की प्राथमिक भूमिका क्या है?", opts: ["एक आवेदक के जोखिम प्रोफाइल (Risk profile) का मूल्यांकन करना और उपयुक्त प्रीमियम दरें निर्धारित करना या पॉलिसी जारी करने को अस्वीकार करना", "क्रॉस-बॉर्डर वीडियो प्लेटफॉर्म पर अंतर्राष्ट्रीय डिजिटल ब्रांड अभियानों का प्रबंधन करना", "कॉर्पोरेट उपभोक्ता विवाद निवारण पैनलों में मुकदमेबाजी बस्तियों को संभालना", "परिपक्वता के बाद नामांकित बैंक रजिस्ट्रियों को चक्रवृद्धि वफादारी बोनस अंक वितरण को संसाधित करना"] },
            correct: 0
        },
        {
            en: { q: "In the mutual fund industry, what defines a 'Liquid Fund'?", opts: ["An open-ended debt scheme investing exclusively in short-term money market instruments with maturities up to 91 days", "An active equity scheme focused on high-growth technology startups traded on international platforms", "A passive infrastructure product configured to track physical commodity price trackers across states", "A structural tax exemption vehicle with a mandatory five-year capital lock-in profile"] },
            hi: { q: "म्यूचुअल फंड उद्योग में, 'लिक्विड फंड' (Liquid Fund) को क्या परिभाषित करता है?", opts: ["एक ओपन-ended डेट योजना जो विशेष रूप से 91 दिनों तक की परिपक्वता वाले अल्पकालिक मुद्रा बाजार उपकरणों (Money market instruments) में निवेश करती है", "अंतरराष्ट्रीय प्लेटफार्मों पर कारोबार करने वाले उच्च-विकास वाले प्रौद्योगिकी स्टार्टअप पर केंद्रित एक सक्रिय इक्विटी योजना", "राज्यों में भौतिक कमोडिटी मूल्य ट्रैकर्स को ट्रैक करने के लिए कॉन्फ़िगर किया गया एक पैसिव इंफ्रास्ट्रक्चर उत्पाद", "अनिवार्य पांच साल के पूंजी लॉक-इन प्रोफाइल के साथ एक संरचनात्मक कर छूट वाहन"] },
            correct: 0
        },
        {
            en: { q: "What does the option Greek 'Delta' evaluate precisely inside derivative modeling?", opts: ["The expected change in an option's premium relative to a 1-unit change in the price of the underlying asset", "The breakdown velocity of time value assets tracked inside out-of-the-money contract brackets", "The percentage change triggered by shifting central bank repo rate index parameters", "The core correlation index tracking physical gold warehouse storage values daily"] },
            hi: { q: "डेरिवेटिव मॉडलिंग के भीतर ऑप्शन ग्रीक 'डेल्टा' (Delta) सटीक रूप से किसका मूल्यांकन करता है?", opts: ["अंतर्निहित परिसंपत्ति की कीमत में 1-इकाई के बदलाव के सापेक्ष ऑप्शन के प्रीमियम में अपेक्षित बदलाव", "आउट-ऑफ-द-मनी अनुबंध ब्रैकेट के अंदर ट्रैक की गई समय मूल्य संपत्तियों का टूटने का वेग", "केंद्रीय बैंक रेपो दर सूचकांक मापदंडों को बदलने से ट्रिगर हुआ प्रतिशत परिवर्तन", "भौतिक सोने के गोदाम भंडारण मूल्यों को दैनिक रूप से ट्रैक करने वाला मुख्य सहसंबंध सूचकांक"] },
            correct: 0
        },
        {
            en: { q: "Inside the exchange-traded derivatives architecture in India, what does the 'Mark-to-Market (MTM)' process ensure?", opts: ["The daily financial settlement of trading accounts to reflect gains or losses based on the closing market price of contracts", "The administrative fee collected by stockbrokers to re-verify digital system login access credentials", "The quality testing certification standard applied to raw assets held in exchange warehouses", "The compliance tax verification processed during initial corporate equity public IPO allocations"] },
            hi: { q: "भारत में एक्सचेंज-ट्रेडेड डेरिवेटिव आर्किटेक्चर के अंदर, 'मार्क-टू-मार्केट (MTM)' प्रक्रिया क्या सुनिश्चित करती है?", opts: ["अनुबंधों के समापन बाजार मूल्य के आधार पर लाभ या हानि को प्रतिबिंबित करने के लिए ट्रेडिंग खातों का दैनिक वित्तीय निपटान", "डिजिटल सिस्टम लॉगिन एक्सेस क्रेडेंशियल्स को फिर से सत्यापित करने के लिए स्टॉकब्रोकर द्वारा एकत्र किया गया प्रशासनिक शुल्क", "एक्सचेंज गोदामों में रखी गई कच्ची संपत्तियों पर लागू गुणवत्ता परीक्षण प्रमाणन मानक", "प्रारंभिक कॉर्पोरेट इक्विटी सार्वजनिक आईपीओ आवंटन के दौरान संसाधित अनुपालन कर सत्यापन"] },
            correct: 0
        },
        {
            en: { q: "What does 'Insurable Interest' mean in the context of taking out a valid life insurance policy?", opts: ["The policyholder must suffer a direct financial loss or legal hardship upon the death of the insured individual", "The compound interest percentage guaranteed by commercial banks on life annuity cash values", "The premium bonus multiplier ratio generated inside underlying debt security investment asset blocks", "The regulatory tax deduction capability permitted under national internal revenue civil parameters"] },
            hi: { q: "एक वैध जीवन बीमा पॉलिसी लेने के संदर्भ में 'बीमायोग्य हित' (Insurable Interest) का क्या अर्थ है?", opts: ["बीमित व्यक्ति की मृत्यु पर पॉलिसीधारक को प्रत्यक्ष वित्तीय नुकसान या कानूनी कठिनाई का सामना करना पड़ना चाहिए", "जीवन वार्षिकी नकद मूल्यों पर वाणिज्यिक बैंकों द्वारा गारंटीकृत चक्रवृद्धि ब्याज प्रतिशत", "अंतर्निहित ऋण सुरक्षा निवेश परिसंपत्ति ब्लॉकों के अंदर उत्पन्न प्रीमियम बोनस गुणक अनुपात", "राष्ट्रीय आंतरिक राजस्व नागरिक मापदंडों के तहत अनुमत नियामक कर कटौती क्षमता"] },
            correct: 0
        },
        {
            en: { q: "Which type of options contract permits the buyer to exercise their derivative rights at any point on or before the designated contract expiration date?", opts: ["American Option", "European Option", "Bermudan Option", "Binary Asian Option Matrix"] },
            hi: { q: "किस प्रकार का ऑप्शंस अनुबंध खरीदार को निर्दिष्ट अनुबंध समाप्ति तिथि पर या उससे पहले किसी भी बिंदु पर अपने डेरिवेटिव अधिकारों का उपयोग करने की अनुमति देता है?", opts: ["अमेरिकन ऑप्शन (American Option)", "यूरोपियन ऑप्शन (European Option)", "बरमूडन ऑप्शन", "बाइनरी एशियन ऑप्शन मैट्रिक्स"] },
            correct: 0
        },
        {
            en: { q: "Under IRDAI statutory regulations, what is the absolute mandatory minimum 'Solvency Ratio' that an insurance firm must maintain at all times?", opts: ["1.50 (150%)", "1.00 (100%)", "2.00 (200%)", "0.75 (75%)"] },
            hi: { q: "IRDAI वैधानिक नियमों के तहत, वह पूर्ण अनिवार्य न्यूनतम 'सॉल्वेंसी अनुपात' (Solvency Ratio) क्या है जिसे एक बीमा फर्म को हर समय बनाए रखना चाहिए?", opts: ["1.50 (150%)", "1.00 (100%)", "2.00 (200%)", "0.75 (75%)"] },
            correct: 0
        },
        {
            en: { q: "What does the option Greek 'Gamma' measure inside derivative volatility modeling?", opts: ["The rate of change of Delta with respect to a change in the price of the underlying asset", "The sensitivity of an option premium to adjustments inside global corporate bond interest indexes", "The decay acceleration velocity of the time premium component inside out-of-the-money brackets", "The direct variance tracked across macro industrial sector benchmarks daily"] },
            hi: { q: "डेरिवेटिव अस्थिरता मॉडलिंग के भीतर ऑप्शन ग्रीक 'गामा' (Gamma) क्या मापता है?", opts: ["अंतर्निहित परिसंपत्ति की कीमत में बदलाव के संबंध में डेल्टा (Delta) के बदलाव की दर", "वैश्विक कॉर्पोरेट बॉन्ड ब्याज सूचकांकों के अंदर समायोजन के प्रति ऑप्शन प्रीमियम की संवेदनशीलता", "आउट-ऑफ-द-मनी ब्रैकेट के अंदर समय प्रीमियम घटक के घटने की त्वरण गति", "मैक्रो औद्योगिक क्षेत्र बेंचमार्क में दैनिक रूप से ट्रैक किया गया प्रत्यक्ष विचरण"] },
            correct: 0
        },
        {
            en: { q: "Which corporate body issues unique identification registration numbers called 'Folio Numbers' for mutual fund investor accounts?", opts: ["The Registrar and Transfer Agent (RTA) of that specific mutual fund", "The Securities and Exchange Board of India Central Records Office", "The Association of Mutual Funds in India Governance Panel", "The Custodian institution managing core clearing operations"] },
            hi: { q: "कौन सा कॉर्पोरेट निकाय म्यूचुअल फंड निवेशक खातों के लिए 'फोलियो नंबर' (Folio Number) नामक अद्वितीय पहचान पंजीकरण संख्या जारी करता है?", opts: ["उस विशिष्ट म्यूचुअल फंड का रजिस्ट्रार और ट्रांसफर एजेंट (RTA)", "भारतीय प्रतिभूति और विनिमय बोर्ड केंद्रीय रिकॉर्ड कार्यालय", "एसोसिएशन ऑफ म्यूचुअल फंड्स इन इंडिया गवर्नेंस पैनल", "मुख्य क्लियरिंग संचालन का प्रबंधन करने वाला कस्टोडियन संस्थान"] },
            correct: 0
        },
        {
            en: { q: "In currency derivatives trading, what term describes the विनिमय दर quote layout when it represents the price of 1 unit of foreign currency in terms of domestic currency?", opts: ["Direct Quote", "Indirect Quote", "Cross Currency Pair", "Arbitrage Spread Matrix"] },
            hi: { q: "मुद्रा डेरिवेटिव ट्रेडिंग में, विनिमय दर उद्धरण (Quote) लेआउट का वर्णन करने के लिए किस शब्द का उपयोग किया जाता है जब यह घरेलू मुद्रा के संदर्भ में विदेशी मुद्रा की 1 इकाई की कीमत का प्रतिनिधित्व करता है?", opts: ["प्रत्यक्ष उद्धरण (Direct Quote)", "अप्रत्यक्ष उद्धरण (Indirect Quote)", "क्रॉस करेंसी पेयर", "आर्बिट्रेज स्प्रेड मैट्रिक्स"] },
            correct: 0
        },
        {
            en: { q: "Which type of insurance contract addresses extreme or systemic risk pools by allowing a primary insurance company to pass a portion of risk to a global secondary insurance firm?", opts: ["Reinsurance", "Double Insurance", "Co-insurance Allocation", "Indemnity Splitting Model"] },
            hi: { q: "किस प्रकार का बीमा अनुबंध एक प्राथमिक बीमा कंपनी को वैश्विक द्वितीयक बीमा फर्म को जोखिम का एक हिस्सा पारित करने की अनुमति देकर अत्यधिक या प्रणालीगत जोखिम पूलों को संबोधित करता है?", opts: ["पुनर्बीमा (Reinsurance)", "दोहरा बीमा (Double Insurance)", "सह-बीमा आवंटन", "क्षतिपूर्ति विभाजन मॉडल"] },
            correct: 0
        },
        {
            en: { q: "What does the 'Net Asset Value' (NAV) of a mutual fund scheme directly quantify for an investor?", opts: ["The total market value of the scheme's assets minus liabilities, divided by the total number of outstanding units", "The initial absolute face value established during the launch of the New Fund Offer (NFO)", "The highest premium trading index value processed by the AMC during a financial year", "The cumulative volume of public capital deployment structured across banking databases"] },
            hi: { q: "किसी म्यूचुअल फंड योजना की 'नेट एसेट वैल्यू' (NAV) सीधे निवेशक के लिए किसका मात्रात्मक मूल्यांकन करती है?", opts: ["योजना की परिसंपत्तियों का कुल बाजार मूल्य ऋण देनदारियां, बकाया इकाइयों की कुल संख्या से विभाजित", "न्यू फंड ऑफर (NFO) के लॉन्च के दौरान स्थापित प्रारंभिक पूर्ण फेस वैल्यू", "एक वित्तीय वर्ष के दौरान एएमसी द्वारा संसाधित उच्चतम प्रीमियम ट्रेडिंग इंडेक्स मूल्य", "बैंकिंग डेटाबेस में संरचित सार्वजनिक पूंजी परिनियोजन की संचयी मात्रा"] },
            correct: 0
        },
        // --- NISM / IRDAI Comprehensive Mock Test: All Modules Shuffled (Set 6) ---
        {
            en: { q: "What does an 'Asymmetrical Payoff' profile in standard long vanilla option contracts imply for the buyer?", opts: ["The maximum loss is limited to the premium paid, while the profit potential is theoretically unlimited", "The profit and loss are perfectly balanced and linear relative to the asset movement", "The investor is guaranteed to double their capital regardless of the market direction", "The clearing corporation can dynamically change the strike price during market hours"] },
            hi: { q: "मानक लॉन्ग वैनिला ऑप्शन अनुबंधों में एक 'असममित पेऑफ' (Asymmetrical Payoff) प्रोफाइल खरीदार के लिए क्या दर्शाता है?", opts: ["अधिकतम नुकसान भुगतान किए गए प्रीमियम तक सीमित है, जबकि लाभ की संभावना सैद्धांतिक रूप से असीमित है", "परिसंपत्ति के उतार-चढ़ाव के सापेक्ष लाभ और हानि पूरी तरह से संतुलित और रैखिक (Linear) हैं", "बाजार की दिशा की परवाह किए बिना निवेशक को अपनी पूंजी दोगुनी करने की गारंटी दी जाती है", "क्लियरिंग कॉरपोरेशन बाजार के घंटों के दौरान स्ट्राइक मूल्य को गतिशील रूप से बदल सकता है"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI mutual fund rules, what is the maximum permissible investment limit for a single sector inside a diversified equity scheme portfolio?", opts: ["20% of the scheme's net assets, extendable to 25% with trustee approval", "50% of the scheme's net assets completely without any constraints", "10% of the aggregate AUM registered under the regional database", "There is no legal sector limit as long as the fund manager captures high Alpha"] },
            hi: { q: "सेबी म्यूचुअल फंड नियमों के तहत, एक विविधीकृत इक्विटी योजना पोर्टफोलियो के भीतर एकल क्षेत्र (Single Sector) के लिए अधिकतम अनुमत निवेश सीमा क्या है?", opts: ["योजना की शुद्ध संपत्ति का 20%, जिसे ट्रस्टी की मंजूरी से 25% तक बढ़ाया जा सकता है", "बिना किसी प्रतिबंध के पूरी तरह से योजना की शुद्ध संपत्ति का 50%", "क्षेत्रीय डेटाबेस के तहत पंजीकृत कुल एयूएम का 10%", "जब तक फंड मैनेजर उच्च अल्फा कैप्चर करता है, तब तक कोई कानूनी क्षेत्र सीमा नहीं है"] },
            correct: 0
        },
        {
            en: { q: "Which type of marine insurance policy covers the loss or damage caused to the physical ship hull or machinery during a specific voyage?", opts: ["Hull Insurance", "Cargo Insurance", "Freight Protection Cover", "Liability Indemnity Matrix"] },
            hi: { q: "किस प्रकार की समुद्री बीमा (Marine insurance) पॉलिसी किसी विशिष्ट यात्रा के दौरान भौतिक जहाज के पतवार (Hull) या मशीनरी को होने वाले नुकसान या क्षति को कवर करती है?", opts: ["हल इंश्योरेंस (Hull Insurance / पतवार बीमा)", "कार्गो इंश्योरेंस", "फ्रेट प्रोटेक्शन कवर", "लायबिलिटी इंडेम्निटी मैट्रिक्स"] },
            correct: 0
        },
        {
            en: { q: "In the currency derivative segment, if an exporter expects the Indian Rupee (INR) to appreciate sharply, what action should they theoretically execute to hedge their revenue?", opts: ["Sell USD-INR Futures contracts", "Buy USD-INR Call options contracts", "Sell EUR-INR Put options contracts exclusively", "Register an offshore non-deliverable forward contract sweep"] },
            hi: { q: "मुद्रा डेरिवेटिव सेगमेंट में, यदि एक निर्यातक (Exporter) को उम्मीद है कि भारतीय रुपया (INR) तेजी से मजबूत होगा, तो उन्हें अपने राजस्व के बचाव (Hedging) के लिए सैद्धांतिक रूप से क्या कार्रवाई करनी चाहिए?", opts: ["USD-INR फ्यूचर्स अनुबंध बेचना (Sell USD-INR Futures)", "USD-INR कॉल ऑप्शंस अनुबंध खरीदना", "विशेष रूप से EUR-INR पुट ऑप्शंस अनुबंध बेचना", "एक अपतटीय गैर-डिलिवरेबल फॉरवर्ड अनुबंध स्वीप पंजीकृत करना"] },
            correct: 0
        },
        {
            en: { q: "What does the term 'Backwardation' indicate inside a physical commodity futures asset configuration?", opts: ["The spot price of the commodity is higher than its futures price, showing near-term supply tightness", "The futures price is expanding exponentially above the daily spot index", "The storage warehousing operational tariff drops down to absolute zero margins", "The physical delivery is permanently cancelled by exchange clearing desks"] },
            hi: { q: "एक भौतिक कमोडिटी फ्यूचर्स परिसंपत्ति कॉन्फ़िगरेशन के भीतर 'बैकवर्डेशन' (Backwardation) शब्द क्या दर्शाता है?", opts: ["कमोडिटी की हाजिर कीमत (Spot price) उसकी फ्यूचर्स कीमत से अधिक है, जो निकट अवधि की आपूर्ति में कमी को दर्शाती है", "फ्यूचर्स कीमत दैनिक हाजिर सूचकांक से ऊपर तेजी से बढ़ रही है", "गोदाम भंडारण परिचालन शुल्क पूर्ण शून्य मार्जिन तक गिर जाता है", "एक्सचेंज क्लियरिंग डेस्क द्वारा भौतिक डिलीवरी को स्थायी रूप से रद्द कर दिया जाता है"] },
            correct: 0
        },
        {
            en: { q: "Which metric represents the systematic or non-diversifiable risk of a stock relative to the broader market index?", opts: ["Beta Coefficient", "Standard Deviation Scale", "Alpha Tracker", "Sharpe Ratio Vector"] },
            hi: { q: "कौन सा मीट्रिक व्यापक बाजार सूचकांक के सापेक्ष किसी स्टॉक के व्यवस्थित (Systematic) या गैर-विविधतापूर्ण जोखिम का प्रतिनिधित्व करता है?", opts: ["बीटा गुणांक (Beta Coefficient)", "मानक विचलन पैमाना", "अल्फा ट्रैकर", "शार्प रेशियो वेक्टर"] },
            correct: 0
        },
        {
            en: { q: "Under IRDAI rules, what legal mechanism protects an insurance policy from being disputed on any grounds after 3 years of continuous coverage?", opts: ["Section 45 of the Insurance Act (Indisputability Clause)", "Section 41 regarding anti-rebate provisions", "Section 39 covering the assignment and nomination pipeline", "The sovereign consumer protection arbitration matrix"] },
            hi: { q: "IRDAI के नियमों के तहत, कौन सा कानूनी तंत्र निरंतर कवरेज के 3 वर्षों के बाद किसी बीमा पॉलिसी को किसी भी आधार पर विवादित होने से बचाता है?", opts: ["बीमा अधिनियम की धारा 45 (Section 45 - Indisputability Clause)", "एंटी-रिबेट प्रावधानों के संबंध में धारा 41", "असाइनमेंट और नामांकन पाइपलाइन को कवर करने वाली धारा 39", "संप्रभु उपभोक्ता संरक्षण मध्यस्थता मैट्रिक्स"] },
            correct: 0
        },
        {
            en: { q: "What calculation is deployed to determine the 'Information Ratio' of an actively managed mutual fund scheme?", opts: ["The active return generated over the benchmark divided by the tracking error of the scheme", "The total portfolio return minus the risk-free rate divided by Beta", "The total expense ratio divided by the net asset value allocation slabs", "The face value configuration multiplied by the dynamic asset allocation coefficient"] },
            hi: { q: "एक सक्रिय रूप से प्रबंधित म्यूचुअल फंड योजना के 'इनफॉर्मेशन रेशियो' (Information Ratio) को निर्धारित करने के लिए किस गणना का उपयोग किया जाता है?", opts: ["बेंचमार्क पर उत्पन्न सक्रिय रिटर्न (Active return) को योजना के ट्रैकिंग एरर से विभाजित करके", "कुल पोर्टफोलियो रिटर्न ऋण जोखिम-मुक्त दर विभाजित बीटा", "कुल व्यय अनुपात विभाजित नेट एसेट वैल्यू आवंटन स्लैब", "फेस वैल्यू कॉन्फ़िगरेशन गुणा गतिशील परिसंपत्ति आवंटन गुणांक"] },
            correct: 0
        },
        {
            en: { q: "In exchange-traded options trading, what does an 'In-the-Money' (ITM) Put option possess?", opts: ["An intrinsic value greater than zero, because the strike price is higher than the current spot price", "An intrinsic value exactly equal to zero, relying entirely on time premium", "An linear correlation that matches cross-border benchmark volatility indicators", "The legal authorization to bypass daily mark-to-market settlement margins"] },
            hi: { q: "एक्सचेंज-ट्रेडेड ऑप्शंस ट्रेडिंग में, एक 'इन-द-मनी' (ITM) पुट ऑप्शन में क्या होता है?", opts: ["शून्य से अधिक अंतर्निहित मूल्य (Intrinsic value), क्योंकि स्ट्राइक मूल्य वर्तमान हाजिर मूल्य से अधिक होता है", "बिल्कुल शून्य के बराबर अंतर्निहित मूल्य, जो पूरी तरह से समय प्रीमियम पर निर्भर करता है", "एक रैखिक सहसंबंध जो सीमा पार बेंचमार्क अस्थिरता संकेतकों से मेल खाता है", "दैनिक मार्क-टू-मार्केट निपटान मार्जिन को बायपास करने का कानूनी अधिकार"] },
            correct: 0
        },
        {
            en: { q: "Which body provides official warehousing license accreditations and enforces structural storage regulations across India?", opts: ["WDRA (Warehousing Development and Regulatory Authority)", "MCX Clearing Risk Wing", "Financial Benchmarks India Pvt. Ltd.", "Ministry of Commerce Transport Management Division"] },
            hi: { q: "भारत भर में कौन सा निकाय आधिकारिक गोदाम लाइसेंस मान्यता (Warehousing license accreditations) प्रदान करता है और संरचनात्मक भंडारण नियमों को लागू करता है?", opts: ["WDRA (वेयरहाउसिंग डेवलपमेंट एंड रेगुलेटरी अथॉरिटी)", "एमसीएक्स क्लियरिंग रिस्क विंग", "फाइनेंशियल बेंचमार्क इंडिया प्राइवेट लिमिटेड", "वाणिज्य मंत्रालय परिवहन प्रबंधन प्रभाग"] },
            correct: 0
        },
        {
            en: { q: "In a corporate equity structure, what is the primary distinction between 'Rights Issue' and 'Bonus Issue' of shares?", opts: ["Rights issue requires the shareholder to pay for the new units at a discount, while Bonus issue is completely free", "Bonus issue dilutes the total market capitalization of the firm instantly, while Rights issue expands it", "Rights issue is offered exclusively to institutional brokers, while Bonus issue covers retail folios", "Both parameters require mandatory compliance clearing via central reserve banks"] },
            hi: { q: "एक कॉर्पोरेट इक्विटी संरचना में, शेयरों के 'राइट्स इश्यू' (Rights Issue) और 'बोनस इश्यू' (Bonus Issue) के बीच प्राथमिक अंतर क्या है?", opts: ["राइट्स इश्यू में शेयरधारक को रियायती मूल्य पर नई इकाइयों के लिए भुगतान करना होता है, जबकि बोनस इश्यू पूरी तरह से मुफ्त होता है", "बोनस इश्यू कंपनी के कुल बाजार पूंजीकरण को तुरंत कम कर देता है, जबकि राइट्स इश्यू इसका विस्तार करता है", "राइट्स इश्यू विशेष रूप से संस्थागत दलालों को दिया जाता है, जबकि बोनस इश्यू खुदरा फोलियो को कवर करता है", "दोनों मापदंडों के लिए केंद्रीय रिजर्व बैंकों के माध्यम से अनिवार्य अनुपालन क्लियरिंग की आवश्यकता होती है"] },
            correct: 0
        },
        {
            en: { q: "What does the option Greek 'Vega' quantify inside derivative pricing matrices?", opts: ["The sensitivity of the option's premium to a 1% change in the implied volatility of the underlying asset", "The breakdown speed of time value as the contract moves closer to expiration", "The mathematical acceleration rate of Delta per unit shift in spot index configurations", "The direct interest rate risk triggered by shifting macroeconomic capital baselines"] },
            hi: { q: "डेरिवेटिव मूल्य निर्धारण मेट्रिसेस के भीतर ऑप्शन ग्रीक 'वेगा' (Vega) क्या मापता है?", opts: ["अंतर्निहित परिसंपत्ति की निहित अस्थिरता (Implied Volatility) में 1% के बदलाव के प्रति ऑप्शन के प्रीमियम की संवेदनशीलता", "अनुबंध की समाप्ति के करीब पहुंचने पर समय मूल्य के घटने की गति", "स्पॉट इंडेक्स कॉन्फ़िगरेशन में प्रति इकाई बदलाव पर डेल्टा की गणितीय त्वरण दर", "व्यापक आर्थिक पूंजी आधारों को बदलने से ट्रिगर होने वाला प्रत्यक्ष ब्याज दर जोखिम"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI Mutual Fund regulations, an 'Arbitrage Fund' primarily generates its investment returns through what practice?", opts: ["Exploiting mispricing opportunities between the spot equity market and the derivatives futures segment", "Holding long-term physical infrastructure bonds backed by sovereign state corporations", "Trading cross-border commodity spreads inside overseas derivatives markets", "Distributing mandatory monthly compounding dividend payouts from cash capital pools"] },
            hi: { q: "सेबी म्यूचुअल फंड नियमों के तहत, एक 'आर्बिट्रेज फंड' (Arbitrage Fund) मुख्य रूप से अपनी निवेश आय किस अभ्यास के माध्यम से उत्पन्न करता है?", opts: ["हाजिर इक्विटी बाजार (Spot equity market) और डेरिवेटिव फ्यूचर्स सेगमेंट के बीच गलत मूल्य निर्धारण (Mispricing) के अवसरों का लाभ उठाकर", "संप्रभु राज्य निगमों द्वारा समर्थित दीर्घकालिक भौतिक बुनियादी ढांचा बॉन्ड रखना", "विदेशी डेरिवेटिव बाजारों के भीतर सीमा पार कमोडिटी स्प्रेड का व्यापार करना", "नकद पूंजी पूल से मासिक अनिवार्य कंपाउंडिंग लाभांश भुगतान वितरित करना"] },
            complete: 0
        },
        {
            en: { q: "Which type of life insurance setup allows a policyholder to direct a portion of their premium towards equity or debt fund choices, shifting investment risk to the client?", opts: ["Unit Linked Insurance Plan (ULIP)", "Pure Money Back Endowment Cover", "Decreasing Term Insurance Assurance", "Whole Life Sovereign Pension Annuity"] },
            hi: { q: "किस प्रकार का जीवन बीमा सेटअप पॉलिसीधारक को अपने प्रीमियम का एक हिस्सा इक्विटी या डेट फंड विकल्पों की ओर निर्देशित करने की अनुमति देता है, जिससे निवेश का जोखिम ग्राहक पर स्थानांतरित हो जाता है?", opts: ["यूनिट लिंक्ड इंश्योरेंस प्लान (ULIP)", "प्योर मनी बैक एंडोमेंट कवर", "डिक्रीजिंग टर्म इंश्योरेंस एश्योरेंस", "होल लाइफ सॉवरेन पेंशन एन्युटी"] },
            correct: 0
        },
        {
            en: { q: "What is the structural contract size for an exchange-traded JPY-INR currency futures contract in India?", opts: ["JPY 100,000", "JPY 10,000", "JPY 1,000", "JPY 50,000"] },
            hi: { q: "भारत में एक्सचेंज-ट्रेडेड JPY-INR मुद्रा फ्यूचर्स अनुबंध के लिए संरचनात्मक अनुबंध आकार (Contract Size) क्या है?", opts: ["JPY 100,000", "JPY 10,000", "JPY 1,000", "JPY 50,000"] },
            correct: 0
        },
        {
            en: { q: "In commodity futures trading, if the clearing house demands an 'Additional Margin' beyond the Initial Margin, what is it intended to tackle?", opts: ["Extreme or unexpected intraday price volatility shifts in the market", "The administrative registration fee configured for corporate accounts", "The physical warehouse delivery transport custom tariff adjustments", "The annual compliance audit expense handled by exchange commissions"] },
            hi: { q: "कमोडिटी फ्यूचर्स ट्रेडिंग में, यदि क्लियरिंग हाउस प्रारंभिक मार्जिन के अलावा एक 'अतिरिक्त मार्जिन' (Additional Margin) की मांग करता है, तो इसका उद्देश्य क्या संभालना है?", opts: ["बाजार में अत्यधिक या अप्रत्याशित इंट्राडे मूल्य अस्थिरता (Price volatility) के बदलाव को", "कॉर्पोरेट खातों के लिए कॉन्फ़िगर किया गया प्रशासनिक पंजीकरण शुल्क", "भौतिक गोदाम वितरण परिवहन कस्टम टैरिफ समायोजन", "एक्सचेंज कमीशन द्वारा नियंत्रित वार्षिक अनुपालन ऑडिट खर्च"] },
            correct: 0
        },
        {
            en: { q: "What component is dynamically added to a mutual fund scheme's total operational expense tracking to establish its net asset valuation output?", opts: ["The recurring distributor management commissions and sub-agent fees", "The exit load penalty deductions calculated during retail panics", "The capital gains tax processed at source during corporate IPO setups", "The baseline reserve registry parameters configured by central authorities"] },
            hi: { q: "म्यूचुअल फंड योजना के कुल परिचालन व्यय ट्रैकिंग में कौन सा घटक गतिशील रूप से जोड़ा जाता है जिससे उसका नेट एसेट वैल्यूएशन आउटपुट स्थापित होता है?", opts: ["आवर्ती वितरक प्रबंधन कमीशन (Distributor commissions) और उप-एजेंट शुल्क", "खुदरा दहशत के दौरान गणना की गई निकास लोड जुर्माना कटौती", "कॉर्पोरेट आईपीओ सेटअप के दौरान स्रोत पर संसाधित पूंजीगत लाभ कर", "केंद्रीय अधिकारियों द्वारा कॉन्फ़िगर किए गए आधारभूत रिजर्व रजिस्ट्री पैरामीटर"] },
            correct: 0
        },
        {
            en: { q: "Which corporate parameter calculates the exact relation between the total equity dividends distributed inside a calendar year and the current market share price?", opts: ["Dividend Yield", "P/E Multiple Scale", "Earnings Per Share Tracker", "Book Value Coefficient"] },
            hi: { q: "कौन सा कॉर्पोरेट पैरामीटर एक कैलेंडर वर्ष के भीतर वितरित कुल इक्विटी लाभांश और वर्तमान बाजार शेयर मूल्य के बीच सटीक संबंध की गणना करता है?", opts: ["डिविडेंड यील्ड (Dividend Yield / लाभांश प्रतिफल)", "पी/ई मल्टीपल स्केल", "अर्निंग पर शेयर ट्रैकर", "बुक वैल्यू गुणांक"] },
            correct: 0
        },
        {
            en: { q: "In options strategy development, what does an 'Iron Condor' setup involve executing?", opts: ["Simultaneously selling one OTM Call and Put, while buying a further OTM Call and Put as protection", "Buying a deep ITM Call and selling a matching expiration spot Put option", "Executing an open-ended long strangle backed by high leverage debt financing", "Swapping cross-border currency blocks across regional exchange grid clearing counters"] },
            hi: { q: "ऑप्शंस रणनीति विकास में, एक 'आयरन कोंडोर' (Iron Condor) सेटअप में क्या निष्पादित करना शामिल है?", opts: ["एक साथ एक ओटीएम (OTM) कॉल और पुट बेचना, जबकि सुरक्षा के रूप में आगे का ओटीएम कॉल और पुट खरीदना", "एक डीप आईटीएम कॉल खरीदना और एक मिलान समाप्ति स्पॉट पुट ऑप्शन बेचना", "उच्च उत्तोलन (Leverage) ऋण वित्तपोषण द्वारा समर्थित एक ओपन-ended लॉन्ग स्ट्रैंगल निष्पादित करना", "क्षेत्रीय एक्सचेंज ग्रिड क्लियरिंग काउंटरों पर सीमा पार मुद्रा ब्लॉकों की अदला-बदली करना"] },
            correct: 0
        },
        {
            en: { q: "Under IRDAI insurance guidelines, what does the 'Principle of Contribution' imply in case of a dual policy setup for a single asset?", opts: ["The insurers will share the total loss proportionately; the client cannot claim the full amount from both to make a profit", "The entire claim must be paid compulsorily by the oldest insurance entity exclusively", "The client receives double payouts automatically backed by state judicial interventions", "The clearing corporation confiscates the physical damaged asset for global auctioning"] },
            hi: { q: "IRDAI बीमा दिशानिर्देशों के तहत, एक ही संपत्ति के लिए दोहरी पॉलिसी सेटअप के मामले में 'अंशदान का सिद्धांत' (Principle of Contribution) क्या दर्शाता है?", opts: ["बीमाकर्ता कुल नुकसान को आनुपातिक रूप से साझा करेंगे; ग्राहक लाभ कमाने के लिए दोनों से पूर्ण राशि का दावा नहीं कर सकता है", "पूरे दावे का भुगतान विशेष रूप से सबसे पुरानी बीमा इकाई द्वारा अनिवार्य रूप से किया जाना चाहिए", "ग्राहक को राज्य के न्यायिक हस्तक्षेपों द्वारा समर्थित स्वचालित रूप से दोगुना भुगतान प्राप्त होता है", "क्लियरिंग कॉरपोरेशन वैश्विक नीलामी के लिए भौतिक क्षतिग्रस्त संपत्ति को जब्त करता है"] },
            correct: 0
        },
        {
            en: { q: "In exchange-traded currency derivatives, what represents the tick size for a standard EUR-INR futures contract?", opts: ["₹0.0025", "₹0.0100", "₹0.0500", "₹0.0001"] },
            hi: { q: "एक्सचेंज-ट्रेडेड मुद्रा डेरिवेटिव में, एक मानक EUR-INR फ्यूचर्स अनुबंध के लिए टिक आकार (Tick Size) क्या दर्शाता है?", opts: ["₹0.0025 (पैसे का एक चौथाई)", "₹0.0100", "₹0.0500", "₹0.0001"] },
            correct: 0
        },
        {
            en: { q: "What does the option Greek 'Gamma' calculate precisely?", opts: ["The rate of change of Delta relative to a 1-unit change in the price of the underlying asset", "The decay sensitivity of the time value premium component across calendar weeks", "The volatility spread tracker matching international base metal commodity indexes", "The macroeconomic interest parameter shifting corporate valuation multipliers"] },
            hi: { q: "ऑप्शन ग्रीक 'गामा' (Gamma) सटीक रूप से क्या गणना करता है?", opts: ["अंतर्निहित परिसंपत्ति की कीमत में 1-इकाई के बदलाव के सापेक्ष डेल्टा (Delta) के बदलाव की दर", "कैलेंडर सप्ताहों में समय मूल्य प्रीमियम घटक की क्षय संवेदनशीलता", "अंतरराष्ट्रीय बेस मेटल कमोडिटी सूचकांकों से मेल खाने वाला अस्थिरता स्प्रेड ट्रैकर", "कॉर्पोरेट मूल्यांकन मल्टीप्लायरों को स्थानांतरित करने वाला व्यापक आर्थिक ब्याज पैरामीटर"] },
            correct: 0
        },
        {
            en: { q: "Which type of debt mutual fund scheme focuses its asset deployment exclusively on short-term corporate debt instruments with maturity profiles up to 91 days?", opts: ["Liquid Fund", "Gilt Fund with Sovereign Risks", "Corporate Bond Fund", "Dynamic Duration Asset Scheme"] },
            hi: { q: "किस प्रकार की डेट म्यूचुअल फंड योजना अपने परिसंपत्ति परिनियोजन को विशेष रूप से 91 दिनों तक की परिपक्वता प्रोफाइल वाले अल्पकालिक कॉर्पोरेट ऋण साधनों पर केंद्रित करती है?", opts: ["लिक्विड फंड (Liquid Fund)", "संप्रभु जोखिमों के साथ गिल्ट फंड", "कॉर्पोरेट बॉन्ड फंड", "डायनेमिक ड्यूरेशन एसेट स्कीम"] },
            correct: 0
        },
        {
            en: { q: "Under the Insurance Act, 1938, what section strictly prohibits any payment of commission or rebates to an unlicensed individual or field agent?", opts: ["Section 41", "Section 45", "Section 39", "Section 27"] },
            hi: { q: "बीमा अधिनियम, 1938 के तहत, कौन सी धारा किसी बिना लाइसेंस वाले व्यक्ति या फील्ड एजेंट को कमीशन या छूट (Rebates) के किसी भी भुगतान को कड़ाई से प्रतिबंधित करती है?", opts: ["धारा 41 (Section 41)", "धारा 45", "धारा 39", "धारा 27"] },
            correct: 0
        },
        {
            en: { q: "In physical commodity trading, what entity manages the grading, quality certification, and logistics of goods stored in accredited warehouses?", opts: ["The Exchange Repository and Accredited Warehouse Managers", "The WDRA Central Legal Court Wing", "The Financial Benchmarks India Pvt. Ltd. Treasury Operations", "The state level agricultural marketing mandis registry panels"] },
            hi: { q: "भौतिक कमोडिटी कोरोबार में, मान्यता प्राप्त गोदामों में संग्रहीत सामानों की ग्रेडिंग, गुणवत्ता प्रमाणन और रसद का प्रबंधन कौन सी संस्था करती है?", opts: ["एक्सचेंज रिपोजिटरी और मान्यता प्राप्त गोदाम प्रबंधक (Accredited Warehouse Managers)", "डब्ल्यूडीआरए केंद्रीय कानूनी न्यायालय विंग", "फाइनेंशियल बेंचमार्क इंडिया प्राइवेट लिमिटेड ट्रेजरी ऑपरेशंस", "राज्य स्तरीय कृषि विपणन मंडी रजिस्ट्री पैनल"] },
            correct: 0
        },
        {
            en: { q: "What does the financial metric 'P/B Ratio' calculate inside fundamental equity analysis?", opts: ["Price-to-Book Value Ratio", "Profit-to-Bonus Matrix", "Premium-to-Beta Index", "Public-to-Exchange Allocation Parameter"] },
            hi: { q: "मौलिक इक्विटी विश्लेषण के भीतर वित्तीय मीट्रिक 'P/B Ratio' क्या गणना करता है?", opts: ["प्राइस-टू-बुक वैल्यू रेशियो (Price-to-Book Value Ratio)", "प्रॉफिट-टू-बोनस मैट्रिक्स", "प्रीमियम-टू-बीटा इंडेक्स", "पब्लिक-टू-एक्सचेंज एलोकेशन पैरामीटर"] },
            correct: 0
        },
        {
            en: { q: "In the context of Option Greeks, what parameter measures the option premium's sensitivity to shifts in the risk-free interest rate?", opts: ["Rho", "Theta", "Vega", "Delta"] },
            hi: { q: "ऑप्शन ग्रीक्स के संदर्भ में, कौन सा पैरामीटर जोखिम-मुक्त ब्याज दर (Risk-free interest rate) में बदलाव के प्रति ऑप्शन प्रीमियम की संवेदनशीलता को मापता है?", opts: ["रो (Rho)", "थिटा (Theta)", "वेगा (Vega)", "डेल्टा (Delta)"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI guidelines, what is the mandatory lock-in period for an Equity Linked Savings Scheme (ELSS) mutual fund allocation?", opts: ["3 years", "5 years", "1 year", "10 years"] },
            hi: { q: "सेबी के दिशानिर्देशों के तहत, इक्विटी लिंक्ड सेविंग्स स्कीम (ELSS) म्यूचुअल फंड आवंटन के लिए अनिवार्य लॉक-इन अवधि कितनी है?", opts: ["3 वर्ष (3 years)", "5 वर्ष", "1 वर्ष", "10 वर्ष"] },
            correct: 0
        },
        {
            en: { q: "Inside the general insurance operational pipeline, what is the primary role of a 'Surveyor and Loss Assessor'?", opts: ["To independently inspect, quantify, and report the real extent of physical loss post accident for claim settlement", "To handle digital marketing and client onboarding pipelines across states", "To calculate the solvency ratio parameters of the parent insurance company annually", "To manage corporate bond portfolio allocation switches under treasury oversight"] },
            hi: { q: "सामान्य बीमा परिचालन पाइपलाइन के भीतर, 'सर्वेक्षक और हानि मूल्यांकक' (Surveyor and Loss Assessor) की प्राथमिक भूमिका क्या है?", opts: ["दावा निपटान के लिए दुर्घटना के बाद भौतिक नुकसान की वास्तविक सीमा का स्वतंत्र रूप से निरीक्षण, मात्रा निर्धारित और रिपोर्ट करना", "राज्यों में डिजिटल मार्केटिंग और ग्राहक ऑनबोर्डिंग पाइपलाइनों को संभालना", "मूल बीमा कंपनी के सॉल्वेंसी अनुपात मापदंडों की सालाना गणना करना", "ट्रेजरी निरीक्षण के तहत कॉर्पोरेट बॉन्ड पोर्टफोलियो आवंटन स्विच का प्रबंधन करना"] },
            correct: 0
        },
        {
            en: { q: "What economic theory states that exchange rate movements between two currencies are primarily driven by differences in their national inflation rates?", opts: ["Purchasing Power Parity (PPP)", "Interest Rate Parity (IRP)", "International Fisher Effect Matrix", "Balance of Payments Deficit Theory"] },
            hi: { q: "कौन सा आर्थिक सिद्धांत यह बताता है कि दो मुद्राओं के बीच विनिमय दर का उतार-चढ़ाव मुख्य रूप से उनकी राष्ट्रीय मुद्रास्फीति (Inflation) दरों में अंतर से प्रेरित होता है?", opts: ["क्रय शक्ति समता (Purchasing Power Parity - PPP)", "ब्याज दर समता (IRP)", "अंतर्राष्ट्रीय फिशर प्रभाव मैट्रिक्स", "भुगतान संतुलन घाटा सिद्धांत"] },
            correct: 0
        },
        {
            en: { q: "In commodity derivatives trading, crude oil contracts on Indian multi-commodity exchanges are deeply tracking which international reference pricing hub?", opts: ["WTI / Brent Crude on NYMEX / ICE exchanges", "S&P Global Bullion tracking indexes", "London Metal Exchange (LME) raw metal pricing spreadsheet", "Chicago Board of Trade (CBOT) agricultural soft option layout"] },
            hi: { q: "कमोडिटी डेरिवेटिव्स ट्रेडिंग में, भारतीय मल्टी-कमोडिटी एक्सचेंजों पर कच्चे तेल (Crude oil) के अनुबंध गहराई से किस अंतर्राष्ट्रीय संदर्भ मूल्य निर्धारण केंद्र को ट्रैक करते हैं?", opts: ["NYMEX / ICE एक्सचेंजों पर WTI / Brent क्रूड बेंचमार्क", "एसएंडपी ग्लोबल बुलियन ट्रैकिंग इंडेक्स", "लंदन मेटल एक्सचेंज (एलएमई) कच्चा धातु मूल्य निर्धारण स्प्रेडशीट", "शिकागो बोर्ड ऑफ ट्रेड (सीबीओटी) कृषि सॉफ्ट ऑप्शन लेआउट"] },
            correct: 0
        },
        {
            en: { q: "What does the metric 'Tracking Error' precisely quantify inside a passive Mutual Fund Index Fund scheme?", opts: ["The performance returns divergence between the index fund and its target tracking benchmark index", "The mechanical lag configuration while updating fractional balance tokens on the screen", "The absolute accounting mistake committed by the corporate asset management team", "The statutory processing tax discrepancy evaluated by central internal revenue wings"] },
            hi: { q: "एक पैसिव म्यूचुअल फंड इंडेक्स फंड योजना के भीतर मीट्रिक 'ट्रैकिंग एरर' (Tracking Error) सटीक रूप से क्या मापता है?", opts: ["इंडेक्स फंड के प्रदर्शन रिटर्न और उसके लक्षित ट्रैकिंग बेंचमार्क इंडेक्स के बीच विचलन (Divergence)", "स्क्रीन पर आंशिक बैलेंस टोकन अपडेट करते समय होने वाली यांत्रिक देरी", "कॉर्पोरेट एसेट मैनेजमेंट टीम द्वारा की गई पूर्ण लेखांकन गलती", "केंद्रीय आंतरिक राजस्व विंग द्वारा मूल्यांकित वैधानिक प्रसंस्करण कर विसंगति"] },
            correct: 0
        },
        {
            en: { q: "In derivatives settlement, what does the 'Mark-to-Market (MTM)' mechanism represent?", opts: ["The daily adjustment of trading margins to reflect profits or losses based on closing exchange market prices", "The processing fee levied by stockbrokers to change system account passwords", "The physical grading score card verified across commodity warehouse systems", "The statutory direct tax deduction processed during new public IPO subscriptions"] },
            hi: { q: "डेरिवेटिव निपटान में, 'मार्क-टू-मार्केट (MTM)' तंत्र क्या दर्शाता है?", opts: ["समापन एक्सचेंज बाजार कीमतों के आधार पर लाभ या हानि को प्रतिबिंबित करने के लिए ट्रेडिंग मार्जिन का दैनिक समायोजन", "सिस्टम खाता पासवर्ड बदलने के लिए स्टॉकब्रोकर द्वारा लगाया जाने वाला प्रोसेसिंग शुल्क", "कमोडिटी वेयरहाउस सिस्टम में सत्यापित भौतिक ग्रेडिंग स्कोर कार्ड", "नए सार्वजनिक आईपीओ सब्सक्रिप्शन के दौरान संसाधित वैधानिक प्रत्यक्ष कर कटौती"] },
            correct: 0
        },
        {
            en: { q: "Which core principle of general insurance states that the insured party must have a valid financial interest in the preservation of the asset?", opts: ["Principle of Insurable Interest", "Principle of Indemnity", "Principle of Subrogation", "Principle of Utmost Good Faith"] },
            hi: { q: "सामान्य बीमा का कौन सा मूल सिद्धांत यह बताता है कि बीमित पक्ष का संपत्ति के संरक्षण में एक वैध वित्तीय हित होना चाहिए?", opts: ["बीमायोग्य हित का सिद्धांत (Principle of Insurable Interest)", "क्षतिपूर्ति का सिद्धांत", "प्रत्यासन का सिद्धांत", "परम सद्भाव का सिद्धांत"] },
            correct: 0
        },
        {
            en: { q: "What represents the standard settlement cycle for exchange-traded currency futures transactions in India?", opts: ["T+1 cycle", "T+2 rolling cycle", "T+5 rolling settlement", "T+3 settlement pipeline"] },
            hi: { q: "भारत में एक्सचेंज-ट्रेडेड मुद्रा फ्यूचर्स लेनदेन के लिए मानक निपटान चक्र (Settlement cycle) क्या दर्शाता है?", opts: ["T+1 चक्र (T+1 cycle)", "T+2 रोलिंग चक्र", "T+5 रोलिंग निपटान", "T+3 निपटान पाइपलाइन"] },
            correct: 0
        },
        {
            en: { q: "Inside a Mutual Fund organizational blueprint, which legal body holds the supreme power to terminate an AMC with SEBI's validation?", opts: ["Board of Trustees", "The Sponsor Group", "The Lead Custodian Syndicate", "The Registrar and Transfer Agent (RTA) Panel"] },
            hi: { q: "म्यूचुअल फंड संगठनात्मक ब्लूप्रिंट के भीतर, सेबी (SEBI) के सत्यापन के साथ एएमसी (AMC) को समाप्त करने की सर्वोच्च शक्ति किस कानूनी निकाय के पास है?", opts: ["ट्रस्टी बोर्ड (Board of Trustees)", "प्रायोजक (Sponsor) समूह", "लीड कस्टोडियन सिंडिकेट", "रजिस्ट्रार और ट्रांसफर एजेंट (RTA) पैनल"] },
            correct: 0
        },
        {
            en: { q: "What options position possesses a risk profile of unlimited potential loss paired with limited premium profit potential?", opts: ["Short Call Option (Uncovered Call Writing)", "Long Put Option position", "Long Straddle option combination", "Bull Call Spread strategy layout"] },
            hi: { q: "किस ऑप्शंस पोजीशन में सीमित प्रीमियम लाभ की संभावना के साथ असीमित संभावित नुकसान का जोखिम प्रोफाइल होता है?", opts: ["शॉर्ट कॉल ऑप्शन (Short Call Option / अनकवर्ड कॉल राइटिंग)", "लॉन्ग पुट ऑप्शन पोजीशन", "लॉन्ग स्ट्रैडल ऑप्शन कॉम्बिनेशन", "बुल कॉल स्प्रेड रणनीति लेआउट"] },
            correct: 0
        },
        {
            en: { q: "Under IRDAI rules, what is the mandatory minimum 'Solvency Ratio' that an insurance firm must maintain to operate inside India?", opts: ["1.50 (150%)", "1.00 (100%)", "2.00 (200%)", "0.75 (75%)"] },
            hi: { q: "IRDAI के नियमों के तहत, भारत के भीतर काम करने के लिए एक बीमा फर्म को अनिवार्य न्यूनतम 'सॉल्वेंसी अनुपात' (Solvency Ratio) कितना बनाए रखना चाहिए?", opts: ["1.50 (150%)", "1.00 (100%)", "2.00 (200%)", "0.75 (75%)"] },
            correct: 0
        },
        {
            en: { q: "In commodity derivatives trading, what term describes a market scenario where the futures price is trading lower than the physical spot price?", opts: ["Backwardation", "Contango Expansion", "Arbitrage Lockout", "Short Squeeze Paradigm"] },
            hi: { q: "कमोडिटी डेरिवेटिव्स ट्रेडिंग में, उस बाजार परिदृश्य को क्या कहा जाता है जहां फ्यूचर्स मूल्य भौतिक हाजिर (Spot) मूल्य से कम पर ट्रेड कर रहा होता है?", opts: ["बैकवर्डेशन (Backwardation)", "कंतैंगो विस्तार", "आर्बिट्रेज लॉकआउट", "शॉर्ट स्क्वीज़ पैराडाइम"] },
            correct: 0
        },
        {
            en: { q: "Which body acts as the central recordkeeping registrar that issues 'Folio Numbers' for individual mutual fund scheme investments?", opts: ["The respective fund's Registrar and Transfer Agent (RTA)", "The SEBI Central Registry Department", "The Association of Mutual Funds in India Governance Panel", "The Custodian bank network clearing office"] },
            hi: { q: "कौन सा निकाय केंद्रीय रिकॉर्ड कीपिंग रजिस्ट्रार के रूप में कार्य करता है जो व्यक्तिगत म्यूचुअल फंड योजना निवेश के लिए 'फोलियो नंबर' (Folio Number) जारी करता है?", opts: ["संबंधित फंड का रजिस्ट्रार और ट्रांसफर एजेंट (RTA)", "सेबी केंद्रीय रजिस्ट्री विभाग", "एसोसिएशन ऑफ म्यूचुअल फंड्स इन इंडिया गवर्नेंस पैनल", "कस्टोडियन बैंक नेटवर्क क्लियरिंग ऑफिस"] },
            correct: 0
        },
        {
            en: { q: "What does the option Greek 'Delta' track precisely inside derivative modeling?", opts: ["The absolute change expected in the option premium relative to a 1-unit movement in the underlying asset price", "The erosion velocity of the time premium element inside deep OTM options contracts", "The volatility correlation threshold monitored across global stock exchange clearings", "The macroeconomic interest impact triggered via central bank monetary updates"] },
            hi: { q: "डेरिवेटिव मॉडलिंग के भीतर ऑप्शन ग्रीक 'डेल्टा' (Delta) सटीक रूप से क्या ट्रैक करता है?", opts: ["अंतर्निहित परिसंपत्ति की कीमत में 1-इकाई के उतार-चढ़ाव के सापेक्ष ऑप्शन प्रीमियम में अपेक्षित पूर्ण परिवर्तन", "डीप ओटीएम ऑप्शंस अनुबंधों के अंदर समय प्रीमियम तत्व के घटने का वेग", "वैश्विक स्टॉक एक्सचेंज क्लियरिंग में निगरानी की जाने वाली अस्थिरता सहसंबंध सीमा", "केंद्रीय बैंक के मौद्रिक अपडेट के माध्यम से ट्रिगर होने वाला व्यापक आर्थिक ब्याज प्रभाव"] },
            correct: 0
        },
        {
            en: { q: "What type of general insurance contract compensates a commercial firm for the loss of net profit suffered due to a temporary operational halt post fire accident?", opts: ["Business Interruption Insurance (Consequential Loss Cover)", "Public Liability General Policy", "Marine Cargo Voyage Protection Indemnity", "Standard Physical Property Cover"] },
            hi: { q: "किस प्रकार का सामान्य बीमा अनुबंध एक वाणिज्यिक फर्म को आग दुर्घटना के बाद अस्थायी परिचालन रुकने के कारण हुए शुद्ध लाभ के नुकसान की भरपाई करता है?", opts: ["बिजनेस इंटरप्शन इंश्योरेंस (Business Interruption Insurance / परिणामी नुकसान कवर)", "पब्लिक लायबिलिटी जनरल पॉलिसी", "मरीन कार्गो वोयाज प्रोटेक्शन इंडेम्निटी", "मानक भौतिक संपत्ति कवर"] },
            correct: 0
        },
        {
            en: { q: "In exchange-traded currency derivatives in India, what represents the standard reference rate provider used for final contract settlements?", opts: ["FBIL daily published reference rates", "The closing ticker index layout of the US Federal Reserve", "The volume weighted average price compiled during the initial market hour", "The commercial baseline matrix fixed by sovereign banking syndicates"] },
            hi: { q: "भारत में एक्सचेंज-ट्रेडेड मुद्रा डेरिवेटिव में, अंतिम अनुबंध निपटान के लिए उपयोग किया जाने वाला मानक संदर्भ दर प्रदाता कौन सा है?", opts: ["FBIL द्वारा दैनिक प्रकाशित आधिकारिक संदर्भ दरें (Reference Rates)", "यूएस फेडरल रिजर्व का क्लोजिंग टिकर इंडेक्स लेआउट", "प्रारंभिक बाजार घंटे के दौरान संकलित वॉल्यूम वेटेड एवरेज प्राइस", "संप्रभु बैंकिंग सिंडिकेट द्वारा तय की गई वाणिज्यिक आधारभूत मैट्रिक्स"] },
            correct: 0
        },
        {
            en: { q: "What does the 'Total Expense Ratio' (TER) of a mutual fund passive index fund scheme primarily influence?", opts: ["The published Net Asset Value (NAV) and the real performance returns received by the end investor", "The structural configuration parameter of the lock-in period", "The exact count of independent directors appointed to the trustee panel", "The physical security vault management layout of the custodian bank unit"] },
            hi: { q: "किसी म्यूचुअल फंड पैसिव इंडेक्स फंड योजना का 'टोटल एक्सपेंस रेशियो' (TER) मुख्य रूप से किसे प्रभावित करता है?", opts: ["प्रकाशित नेट एसेट वैल्यू (NAV) और अंतिम निवेशक द्वारा प्राप्त वास्तविक प्रदर्शन रिटर्न को", "लॉक-इन अवधि का संरचनात्मक कॉन्फ़िगरेशन पैरामीटर", "ट्रस्टी पैनल में नियुक्त स्वतंत्र निदेशकों की सटीक संख्या", "कस्टोडियन बैंक यूनिट का भौतिक सुरक्षा वॉल्ट प्रबंधन लेआउट"] },
            correct: 0
        },
        {
            en: { q: "If an options trader simultaneously buys one In-the-Money Call and sells one Out-of-the-Money Call on the same underlying asset with identical expiry, the strategy is a:", opts: ["Bull Call Spread", "Bear Call Spread", "Long Straddle Option Layout", "Short Strangle Volatility Setup"] },
            hi: { q: "यदि कोई ऑप्शंस ट्रेडर एक ही अंतर्निहित परिसंपत्ति पर समान समाप्ति के साथ एक साथ एक इन-द-मनी कॉल खरीदता है और एक आउट-ऑफ-द-मनी कॉल बेचता है, तो यह रणनीति है:", opts: ["बुल कॉल स्प्रेड (Bull Call Spread)", "बियर कॉल स्प्रेड", "लॉन्ग स्ट्रैडल ऑप्शन लेआउट", "शॉर्ट स्ट्रैंगल वोलाटिलिटी सेटअप"] },
            correct: 0
        },
        {
            en: { q: "Under IRDAI regulations, what mandatory framework allows a new life insurance policyholder to review terms and return the policy within 15 days for a refund if unsatisfied?", opts: ["Free Look Period", "Grace Period Configuration", "Reinstatement Turnaround Window", "Indisputability Phase Matrix"] },
            hi: { q: "IRDAI के नियमों के तहत, कौन सा अनिवार्य ढांचा एक नए जीवन बीमा पॉलिसीधारक को शर्तों की समीक्षा करने और असंतुष्ट होने पर रिफंड के लिए १५ दिनों के भीतर पॉलिसी वापस करने की अनुमति देता है?", opts: ["फ्री लुक पीरियड (Free Look Period)", "ग्रेस पीरियड कॉन्फ़िगरेशन", "रीइन्स्टेटमेंट टर्नअराउंड विंडो", "इन्डिसप्युटेबिलिटी फेज मैट्रिक्स"] },
            correct: 0
        },
        {
            en: { q: "In exchange-traded derivative risk management, what abbreviation represents the regulatory methodology used to calculate portfolio-level initial margin requirements?", opts: ["SPAN (Standardized Portfolio Analysis of Risk)", "VaR Variable Scale Matrix", "MTM Settlement Allocation Register", "FBIL Leverage Verification Factor"] },
            hi: { q: "एक्सचेंज-ट्रेडेड डेरिवेटिव जोखिम प्रबंधन में, पोर्टफोलियो-स्तर की प्रारंभिक मार्जिन आवश्यकताओं की गणना के लिए उपयोग की जाने वाली नियामक पद्धति का प्रतिनिधित्व कौन सा संक्षिप्त नाम करता है?", opts: ["SPAN (Standardized Portfolio Analysis of Risk / जोखिम का मानकीकृत पोर्टफोलियो विश्लेषण)", "VaR वेरिएबल स्केल मैट्रिक्स", "MTM सेटलमेंट एलोकेशन रजिस्टर", "FBIL लीवरेज वेरिफिकेशन फैक्टर"] },
            correct: 0
        },
        {
            en: { q: "What does the financial evaluation metric 'Alpha' reflect for an actively managed mutual fund scheme?", opts: ["The excess return generated by the fund manager over the benchmark index relative to the risk taken", "The sensitivity of the scheme portfolio returns matching macro cross-border indexes", "The total operational cost optimization coefficient managed across calendar quarters", "The absolute tracking deviation recorded inside physical bullion exchange accounts"] },
            hi: { q: "एक सक्रिय रूप से प्रबंधित म्यूचुअल फंड योजना के लिए वित्तीय मूल्यांकन मीट्रिक 'अल्फा' (Alpha) क्या दर्शाता है?", opts: ["लिए गए जोखिम के सापेक्ष बेंचमार्क इंडेक्स पर फंड मैनेजर द्वारा उत्पन्न अतिरिक्त रिटर्न", "मैक्रो क्रॉस-बॉर्डर इंडेक्स से मेल खाने वाले स्कीम पोर्टफोलियो रिटर्न की संवेदनशीलता", "कैलेंडर तिमाहियों में प्रबंधित कुल परिचालन लागत अनुकूलन गुणांक", "भौतिक बुलियन एक्सचेंज खातों के अंदर दर्ज पूर्ण ट्रैकिंग विचलन"] },
            correct: 0
        },
        {
            en: { q: "Which type of life insurance structure delivers pure financial death benefit protection throughout the policyholder's entire lifetime up to 100 years of age, rather than a limited term?", opts: ["Whole Life Insurance Policy", "Pure Term Insurance Plan", "Endowment Money Back Assurance", "Variable Unit Linked Asset Vector"] },
            hi: { q: "किस प्रकार की जीवन बीमा संरचना एक सीमित अवधि के बजाय, १०० वर्ष की आयु तक पॉलिसीधारक के पूरे जीवनकाल में शुद्ध वित्तीय मृत्यु लाभ सुरक्षा प्रदान करती है?", opts: ["संपूर्ण जीवन बीमा पॉलिसी (Whole Life Insurance Policy)", "शुद्ध टर्म इंश्योरेंस प्लान", "एंडोमेंट मनी बैक एश्योरेंस", "वेरिएबल यूनिट लिंक्ड एसेट वेक्टर"] },
            correct: 0
        },
        {
            en: { q: "In commodity derivatives, what does a 'Contango' market layout indicate?", opts: ["A situation where the futures contract price is trading higher than the physical spot price, reflecting storage and financing costs", "A severe structural short squeeze scenario spiking daily tracking indices infinitely", "The permanent eradication of option premium values inside exchange clearing counters", "A flat baseline where spot and futures indicators merge at absolute zero margins"] },
            hi: { q: "कमोडिटी डेरिवेटिव्स में, एक 'कंतैंगो' (Contango) बाजार लेआउट क्या दर्शाता है?", opts: ["एक ऐसी स्थिति जहां फ्यूचर्स अनुबंध मूल्य भौतिक हाजिर मूल्य से अधिक पर ट्रेड कर रहा होता है, जो भंडारण और वित्तीय लागतों को दर्शाता है", "एक गंभीर संरचनात्मक शॉर्ट स्क्वीज़ परिदृश्य जो दैनिक ट्रैकिंग सूचकांकों को असीमित रूप से बढ़ाता है", "एक्सचेंज क्लियरिंग काउंटरों के अंदर ऑप्शन प्रीमियम मूल्यों का स्थायी उन्मूलन", "एक फ्लैट बेसलाइन जहां हाजिर और फ्यूचर्स संकेतक पूर्ण शून्य मार्जिन पर विलीन हो जाते हैं"] },
            correct: 0
        },
        // --- NISM / IRDAI Comprehensive Mock Test: All Modules Shuffled (Set 7) ---
        {
            en: { q: "What does the option Greek 'Rho' measure inside derivative pricing models?", opts: ["The sensitivity of an option's premium relative to a 1% change in the risk-free interest rate", "The acceleration velocity of Delta per unit shift in the underlying spot price", "The decay pattern of the time value premium component as expiration approaches", "The statistical correlation coefficient between cross-border currency blocks"] },
            hi: { q: "डेरिवेटिव मूल्य निर्धारण मॉडल के भीतर ऑप्शन ग्रीक 'रो' (Rho) क्या मापता है?", opts: ["जोखिम-मुक्त ब्याज दर में 1% के बदलाव के सापेक्ष ऑप्शन के प्रीमियम की संवेदनशीलता", "अंतर्निहित हाजिर मूल्य में प्रति इकाई बदलाव पर डेल्टा की त्वरण गति", "समाप्ति के करीब पहुंचने पर समय मूल्य प्रीमियम घटक का क्षय पैटर्न", "सीमा पार मुद्रा ब्लॉकों के बीच सांख्यिकीय सहसंबंध गुणांक"] },
            correct: 0
        },
        {
            en: { q: "According to SEBI mutual fund rules, a 'Mid Cap' company is strictly defined based on market capitalization rank within which tier?", opts: ["101st to 250th company", "1st to 100th company", "251st to 500th company", "Top 50 listed corporate entities exclusively"] },
            hi: { q: "सेबी म्यूचुअल फंड नियमों के अनुसार, एक 'मिड कैप' (Mid Cap) कंपनी को मार्केट कैपिटलाइजेशन रैंक के आधार पर किस दायरे में परिभाषित किया गया है?", opts: ["101वीं से 250वीं कंपनी (101st to 250th company)", "1 से 100वीं company", "251वीं से 500वीं company", "विशेष रूप से शीर्ष 50 सूचीबद्ध कॉर्पोरेट संस्थाएं"] },
            correct: 0
        },
        {
            en: { q: "Under IRDAI statutory regulations, what is the 'Grace Period' allowed for paying renewal premiums on a life insurance policy with an annual premium payment mode?", opts: ["30 days", "15 days", "7 days", "45 days"] },
            hi: { q: "IRDAI वैधानिक नियमों के तहत, वार्षिक प्रीमियम भुगतान मोड वाली जीवन बीमा पॉलिसी पर नवीनीकरण प्रीमियम का भुगतान करने के लिए कितना 'ग्रेस पीरियड' दिया जाता है?", opts: ["30 दिन (30 days)", "15 दिन", "7 दिन", "45 दिन"] },
            correct: 0
        },
        {
            en: { q: "In the currency derivative segment on Indian exchanges, what is the lot size for a standard EUR-INR futures contract?", opts: ["EUR 1,000", "EUR 10,000", "EUR 5,000", "EUR 100"] },
            hi: { q: "भारतीय एक्सचेंजों पर मुद्रा डेरिवेटिव सेगमेंट में, एक मानक EUR-INR फ्यूचर्स अनुबंध का लॉट आकार (Lot Size) क्या होता है?", opts: ["EUR 1,000", "EUR 10,000", "EUR 5,000", "EUR 100"] },
            correct: 0
        },
        {
            en: { q: "In commodity derivatives trading, what does an 'Arbitrageur' do when a futures contract trades at an irrational premium over the physical spot price?", opts: ["Buys the commodity in the spot market and simultaneously sells the futures contract", "Sells the physical commodity in the spot mandi and buys the futures contract", "Executes an uncovered long call option spread with maximum margin debt", "Swaps the currency parameters through cross-border offshore banking channels"] },
            hi: { q: "कमोडिटी डेरिवेटिव्स ट्रेडिंग में, जब कोई फ्यूचर्स अनुबंध भौतिक हाजिर मूल्य पर अतार्किक प्रीमियम पर ट्रेड करता है, तो एक 'आर्बिट्रेजूर' क्या करता है?", opts: ["हाजिर बाजार में कमोडिटी खरीदता है और साथ ही फ्यूचर्स अनुबंध बेचता है", "भौतिक हाजिर मंडी में कमोडिटी बेचता है और फ्यूचर्स अनुबंध खरीदता है", "अधिकतम मार्जिन ऋण के साथ एक अनकवर्ड लॉन्ग कॉल ऑप्शन स्प्रेड निष्पादित करता", "ऑफशॉर बैंकिंग चैनलों के माध्यम से मुद्रा मापदंडों की अदला-बदली करता है"] },
            correct: 0
        },
        {
            en: { q: "What is the primary operational objective of a 'Sovereign Gold Bond' (SGB) issued by the Reserve Bank of India?", opts: ["To provide investors an alternative to physical gold investment, offering capital appreciation plus a fixed annual interest interest", "To establish a liquid options marketplace for physical bullion dealers across state pipelines", "To forcefully back corporate infrastructure commercial debt allocations", "To cut the total operational expense ratio of asset management companies down to zero"] },
            hi: { q: "भारतीय रिजर्व बैंक द्वारा जारी 'सोवरन गोल्ड बॉन्ड' (SGB) का प्राथमिक परिचालन उद्देश्य क्या है?", opts: ["निवेशकों को भौतिक सोने के निवेश का एक विकल्प देना, जो पूंजी वृद्धि और एक निश्चित वार्षिक ब्याज प्रदान करता है", "राज्य पाइपलाइनों में भौतिक बुलियन डीलरों के लिए एक तरलता ऑप्शंस बाजार स्थापित करना", "कॉर्पोरेट बुनियादी ढांचा वाणिज्यिक ऋण आवंटन को जबरन वापस समर्थन देना", "एसेट मैनेजमेंट कंपनियों के कुल परिचालन व्यय अनुपात को शून्य पर लाना"] },
            correct: 0
        },
        {
            en: { q: "Which statistical metric measures the total volatility or dispersion of a mutual fund scheme's historical returns relative to its average return?", opts: ["Standard Deviation", "Beta Coefficient", "Alpha Tracker", "Jensen's Differential Index"] },
            hi: { q: "कौन सा सांख्यिकीय मीट्रिक अपने औसत रिटर्न के सापेक्ष म्यूचुअल फंड योजना के ऐतिहासिक रिटर्न की कुल अस्थिरता (Volatility) या फैलाव को मापता है?", opts: ["मानक विचलन (Standard Deviation)", "बीटा गुणांक", "अल्फा ट्रैकर", "जेन्शन्स डिफरेंशियल इंडेक्स"] },
            correct: 0
        },
        {
            en: { q: "In equity trading architecture, what term describes the financial process where a clearing corporation steps in to become the buyer to every seller and seller to every buyer?", opts: ["Novation / Central Counterparty Clearing", "Short Squeeze Execution", "Mark-to-Market Rebalancing", "Rolling Settlement Protocol"] },
            hi: { q: "इक्विटी ट्रेडिंग आर्किटेक्चर में, उस वित्तीय प्रक्रिया को क्या कहा जाता है जहां एक क्लियरिंग कॉरपोरेशन प्रत्येक विक्रेता के लिए खरीदार और प्रत्येक खरीदार के लिए विक्रेता बनता है?", opts: ["नोवेशन / सेंट्रल काउंटरपार्टी क्लियरिंग (Novation)", "शॉर्ट स्क्वीज़ निष्पादन", "मार्क-टू-मार्केट रीबैलेंसिंग", "रोलिंग सेटलमेंट प्रोटोकॉल"] },
            correct: 0
        },
        {
            en: { q: "What strategy is formed if an options trader buys a Call option with a low strike price and simultaneously sells a Call option with a higher strike price on the same underlying asset and expiry?", opts: ["Bull Call Spread", "Bear Call Spread", "Long Straddle Layout", "Short Strangle Volatility Grid"] },
            hi: { q: "यदि कोई ऑप्शंस ट्रेडर एक ही अंतर्निहित परिसंपत्ति और समाप्ति पर कम स्ट्राइक मूल्य वाला कॉल ऑप्शन खरीदता है और साथ ही उच्च स्ट्राइक मूल्य वाला कॉल ऑप्शन बेचता है, तो कौन सी रणनीति बनती है?", opts: ["बुल कॉल स्प्रेड (Bull Call Spread)", "बियर कॉल स्प्रेड", "लॉन्ग स्ट्रैडल लेआउट", "शॉर्ट स्ट्रैंगल वोलाटिलिटी ग्रिड"] },
            correct: 0
        },
        {
            en: { q: "Which principle of insurance dictates that the policyholder cannot claim compensation that exceeds the actual economic loss suffered from an insured event?", opts: ["Principle of Indemnity", "Principle of Subrogation", "Principle of Insurable Interest", "Principle of Utmost Good Faith"] },
            hi: { q: "बीमा का कौन सा सिद्धांत यह निर्देश देता है कि पॉलिसीधारक उस मुआवजे का दावा नहीं कर सकता जो बीमित घटना से हुए वास्तविक आर्थिक नुकसान से अधिक हो?", opts: ["क्षतिपूर्ति का सिद्धांत (Principle of Indemnity)", "प्रत्यासन का सिद्धांत", "बीमायोग्य हित का सिद्धांत", "परम सद्भाव का सिद्धांत"] },
            correct: 0
        },
        {
            en: { q: "What does the 'Information Ratio' of an actively managed equity mutual fund scheme evaluate?", opts: ["The fund manager's ability to generate excess returns over the benchmark relative to the active risk (tracking error) taken", "The administrative capability parameter configured to update internal ledger logs", "The percentage variance separating direct investment plans from distributor commission paths", "The corporate balance sheet health coefficient monitored by accounting trustees"] },
            hi: { q: "एक सक्रिय रूप से प्रबंधित इक्विटी म्यूचुअल फंड योजना का 'इनफॉर्मेशन रेशियो' (Information Ratio) क्या मूल्यांकन करता है?", opts: ["लिए गए सक्रिय जोखिम (ट्रैकिंग एरर) के सापेक्ष बेंचमार्क इंडेक्स पर अतिरिक्त रिटर्न उत्पन्न करने की फंड मैनेजर की क्षमता", "आंतरिक बहीखाता लॉग को अपडेट करने के लिए कॉन्फ़िगर किया गया प्रशासनिक क्षमता पैरामीटर", "डायरेक्ट निवेश प्लान को वितरक कमीशन मार्गों से अलग करने वाला प्रतिशत विचरण", "लेखांकन ट्रस्टियों द्वारा निगरानी गुणांक कॉर्पोरेट बैलेंस शीट स्वास्थ्य"] },
            correct: 0
        },
        {
            en: { q: "In currency derivatives trading inside India, what official financial entity provides the calculation framework for the daily exchange reference rates?", opts: ["FBIL (Financial Benchmarks India Pvt. Ltd.)", "SEBI Treasury Compliance Division", "Sovereign Banking Syndicate Executive Desk", "International Monetary Fund Central Bureau"] },
            hi: { q: "भारत के भीतर मुद्रा डेरिवेटिव ट्रेडिंग में, कौन सी आधिकारिक वित्तीय संस्था दैनिक विनिमय संदर्भ दरों के लिए गणना ढांचा प्रदान करती है?", opts: ["FBIL (फाइनेंशियल बेंचमार्क इंडिया प्राइवेट लिमिटेड)", "सेबी ट्रेजरी अनुपालन प्रभाग", "संप्रभु बैंकिंग सिंडिकेट कार्यकारी डेस्क", "अंतर्राष्ट्रीय मुद्रा कोष केंद्रीय ब्यूरो"] },
            correct: 0
        },
        {
            en: { q: "In commodity markets, what term defines a severe near-term shortage that drives spot prices significantly higher than long-term futures contract prices?", opts: ["Backwardation", "Contango", "Arbitrage Compression", "Short Squeeze Grid"] },
            hi: { q: "कमोडिटी बाजारों में, कौन सा शब्द एक गंभीर निकट-अवधि की कमी को परिभाषित करता है जो हाजिर कीमतों को दीर्घकालिक फ्यूचर्स अनुबंध कीमतों की तुलना में काफी अधिक बढ़ा देती है?", opts: ["बैकवर्डेशन (Backwardation)", "कंतैंगो (Contango)", "आर्बिट्रेज कम्प्रेशन", "शॉर्ट स्क्वीज़ ग्रिड"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI categorization rules, what is the minimum asset allocation required in debt and money market instruments for a 'Liquid Fund' scheme?", opts: ["100% of total assets inside instruments with maturity up to 91 days", "80% of assets inside overnight sovereign government cash bonds", "65% of total infrastructure commercial credit papers exclusively", "50% of the aggregate value backed via reserve central registry setups"] },
            hi: { q: "सेबी वर्गीकरण नियमों के तहत, 'लिक्विड फंड' योजना के लिए ऋण (Debt) और मुद्रा बाजार साधनों में न्यूनतम परिसंपत्ति आवंटन कितना आवश्यक है?", opts: ["91 दिनों तक की परिपक्वता वाले साधनों में कुल संपत्ति का 100%", "रातोंरात संप्रभु सरकारी नकद बांडों में संपत्ति का 80%", "विशेष रूप से कुल बुनियादी ढांचा वाणिज्यिक क्रेडिट पत्रों का 65%", "आरक्षित केंद्रीय रजिस्ट्री सेटअप के माध्यम से समर्थित कुल मूल्य का 50%"] },
            correct: 0
        },
        {
            en: { q: "What does an insurance 'Rider' offer when attached to a standard term life insurance baseline cover?", opts: ["Additional specific insurance benefits or protection, like accidental death or critical illness, for an added premium", "A structural discount model that automatically slashes annual renewals to zero cost", "A dynamic system utility tool to track field broker performance matrices daily", "The absolute legal right to claim corporate ownership over asset management physical facilities"] },
            hi: { q: "एक मानक टर्म लाइफ इंश्योरेंस बेसलाइन कवर के साथ संलग्न होने पर एक बीमा 'राइडर' (Rider) क्या प्रदान करता है?", opts: ["अतिरिक्त प्रीमियम के लिए दुर्घटना मृत्यु या गंभीर बीमारी जैसी अतिरिक्त विशिष्ट बीमा लाभ या सुरक्षा", "एक संरचनात्मक छूट मॉडल जो वार्षिक नवीनीकरण को स्वचालित रूप से शून्य लागत पर कम कर देता है", "दैनिक क्षेत्र ब्रोकर प्रदर्शन मेट्रिसेस को ट्रैक करने के लिए एक गतिशील सिस्टम उपयोगिता उपकरण", "परिसंपत्ति प्रबंधन भौतिक सुविधाओं पर कॉर्पोरेट स्वामित्व का दावा करने का पूर्ण कानूनी अधिकार"] },
            correct: 0
        },
        {
            en: { q: "What is an option contract classified as if its strike price is identical to the current spot price of the underlying asset?", opts: ["At-the-Money (ATM)", "In-the-Money (ITM)", "Out-of-the-Money (OTM)", "Deep Out-of-the-Money Matrix"] },
            hi: { q: "एक ऑप्शन अनुबंध को किस रूप में वर्गीकृत किया जाता है यदि उसका स्ट्राइक मूल्य अंतर्निहित परिसंपत्ति के वर्तमान हाजिर मूल्य के बिल्कुल समान हो?", opts: ["एट-द-मनी (At-the-Money - ATM)", "इन-द-मनी (In-the-Money - ITM)", "आउट-ऑफ-द-मनी (Out-of-the-Money - OTM)", "डीप आउट-ऑफ-द-मनी मैट्रिक्स"] },
            correct: 0
        },
        {
            en: { q: "Under the Insurance Act, 1938, what section strictly prohibits the practice of passing rebates or commissions to entice individuals to purchase insurance?", opts: ["Section 41", "Section 45", "Section 39", "Section 27"] },
            hi: { q: "बीमा अधिनियम, 1938 के तहत, कौन सी धारा व्यक्तियों को बीमा खरीदने के लिए लुभाने के लिए छूट (Rebates) या कमीशन देने की प्रथा को कड़ाई से प्रतिबंधित करती है?", opts: ["धारा 41 (Section 41)", "धारा 45", "धारा 39", "धारा 27"] },
            correct: 0
        },
        {
            en: { q: "In the context of equity investments, what corporate action results in dividing existing shares into multiple units without changing the total market capitalization?", opts: ["Stock Split", "Bonus Issue", "Rights Offering", "Share Buyback Plan"] },
            hi: { q: "इक्विटी निवेश के संदर्भ में, कौन सी कॉर्पोरेट कार्रवाई कुल बाजार पूंजीकरण को बदले बिना मौजूदा शेयरों को कई इकाइयों में विभाजित करती है?", opts: ["स्टॉक स्प्लिट (Stock Split)", "बोनस इश्यू (Bonus Issue)", "राइट्स ऑफरिंग", "शेयर बायबैक प्लान"] },
            correct: 0
        },
        {
            en: { q: "What risk management margin system calculates portfolio-level initial margin requirements across derivatives exchanges in India?", opts: ["SPAN (Standardized Portfolio Analysis of Risk)", "VaR Historical Simulation Register", "MTM Extreme Volatility Tracker", "FBIL Leverage Verification Matrix"] },
            hi: { q: "भारत में डेरिवेटिव एक्सचेंजों में पोर्टफोलियो-स्तर की प्रारंभिक मार्जिन आवश्यकताओं की गणना कौन सी जोखिम प्रबंधन मार्जिन प्रणाली करती है?", opts: ["SPAN (जोखिम का मानकीकृत पोर्टफोलियो विश्लेषण)", "VaR ऐतिहासिक सिमुलेशन रजिस्टर", "MTM चरम अस्थिरता ट्रैकर", "FBIL लीवरेज सत्यापन मैट्रिक्स"] },
            correct: 0
        },
        {
            en: { q: "Which corporate entity manages the safe custody of a mutual fund scheme's financial gold assets and listed stock certificates?", opts: ["The Custodian bank approved by SEBI", "The Asset Management Company's executive board", "The Association of Mutual Funds in India (AMFI) Central Bureau", "The Sponsor network financial accounting team"] },
            hi: { q: "कौन सी कॉर्पोरेट इकाई म्यूचुअल फंड योजना की वित्तीय सोने की संपत्ति और सूचीबद्ध स्टॉक प्रमाणपत्रों को सुरक्षित अभिरक्षा (Safe custody) में प्रबंधित करती है?", opts: ["सेबी द्वारा अनुमोदित कस्टोडियन बैंक (The Custodian bank)", "एसेट मैनेजमेंट कंपनी का कार्यकारी बोर्ड", "एसोसिएशन ऑफ म्यूचुअल फंड्स इन इंडिया (AMFI) केंद्रीय ब्यूरो", "प्रायोजक नेटवर्क वित्तीय लेखांकन टीम"] },
            correct: 0
        },
        {
            en: { q: "What does the option Greek 'Delta' indicate inside option pricing mathematics?", opts: ["The expected change in an option premium for a 1-unit change in the price of the underlying asset", "The decay pattern of time premium as the contract moves closer to expiration", "The sensitivity of premium relative to a 1% shift in historical market volatility", "The interest rate variance index handled via global clearing repositories"] },
            hi: { q: "ऑप्शन प्राइसिंग गणित के भीतर ऑप्शन ग्रीक 'डेल्टा' (Delta) क्या दर्शाता है?", opts: ["अंतर्निहित परिसंपत्ति की कीमत में 1-इकाई के बदलाव के लिए ऑप्शन प्रीमियम में अपेक्षित बदलाव", "अनुबंध की समाप्ति के करीब पहुंचने पर समय प्रीमियम का क्षय पैटर्न", "ऐतिहासिक बाजार अस्थिरता में 1% के बदलाव के सापेक्ष प्रीमियम की संवेदनशीलता", "वैश्विक क्लियरिंग रिपॉजिटरी के माध्यम से संभाला जाने वाला ब्याज दर विचरण सूचकांक"] },
            correct: 0
        },
        {
            en: { q: "Under IRDAI rules, what mandatory timeframe is given as a 'Free Look Period' for a newly purchased offline life insurance policy?", opts: ["15 days from the date of receipt of the policy document", "30 days from the date of application submission", "7 days from the initial premium clearing date", "45 days under state consumer court arbitration protocols"] },
            hi: { q: "IRDAI के नियमों के तहत, नई खरीदी गई ऑफलाइन जीवन बीमा पॉलिसी के लिए 'फ्री लुक पीरियड' के रूप में कितनी अनिवार्य समयसीमा दी जाती है?", opts: ["पॉलिसी दस्तावेज प्राप्त होने की तारीख से 15 दिन", "आवेदन जमा करने की तारीख से 30 दिन", "प्रारंभिक प्रीमियम क्लियरिंग तारीख से 7 दिन", "राज्य उपभोक्ता अदालत मध्यस्थता प्रोटोकॉल के तहत 45 दिन"] },
            correct: 0
        },
        {
            en: { q: "What does the 'Total Expense Ratio' (TER) of an equity mutual fund scheme directly reduce?", opts: ["The net asset value (NAV) and actual performance returns delivered to investors", "The mandatory structural lock-in timeline parameters", "The count of independent trustees managing fund governance profiles", "The physical security storage tracking configurations at the custodian desk"] },
            hi: { q: "किसी इक्विटी म्यूचुअल फंड योजना का 'टोटल एक्सपेंस रेशियो' (TER) सीधे किसे कम करता है?", opts: ["निवेशकों को मिलने वाले नेट एसेट वैल्यू (NAV) और वास्तविक प्रदर्शन रिटर्न को", "अनिवार्य संरचनात्मक लॉक-इन समयरेखा मापदंडों को", "फंड गवर्नेंस प्रोफाइल का प्रबंधन करने वाले स्वतंत्र ट्रस्टियों की संख्या को", "कस्टोडियन डेस्क पर भौतिक सुरक्षा भंडारण ट्रैकिंग कॉन्फ़िगरेशन को"] },
            correct: 0
        },
        {
            en: { q: "In exchange-traded currency futures inside India, what represents the structural contract size for a standard GBP-INR contract?", opts: ["GBP 1,000", "GBP 10,000", "GBP 5,000", "GBP 100"] },
            hi: { q: "भारत में एक्सचेंज-ट्रेडेड मुद्रा फ्यूचर्स में, एक मानक GBP-INR अनुबंध के लिए संरचनात्मक अनुबंध आकार (Contract Size) क्या है?", opts: ["GBP 1,000", "GBP 10,000", "GBP 5,000", "GBP 100"] },
            correct: 0
        },
        {
            en: { q: "In commodity derivatives, what does the market scenario known as 'Contango' describe?", opts: ["A situation where the futures contract price trades higher than the physical spot price, reflecting carrying costs", "A severe short squeeze event triggering infinite daily price spikes", "The permanent cancellation of physical warehouse delivery models by the exchange", "A flat baseline where spot and futures indices settle at absolute zero margins"] },
            hi: { q: "कमोडिटी डेरिवेटिव्स में, 'कंतैंगो' (Contango) के रूप में जाने जाने वाला बाजार परिदृश्य क्या वर्णन करता है?", opts: ["एक ऐसी स्थिति जहां फ्यूचर्स अनुबंध मूल्य भौतिक हाजिर मूल्य से अधिक पर ट्रेड करता है, जो वहन लागतों (Carrying costs) को दर्शाता है", "एक गंभीर शॉर्ट स्क्वीज़ घटना जो दैनिक मूल्य में असीमित वृद्धि को ट्रिगर करती है", "एक्सचेंज द्वारा भौतिक गोदाम वितरण मॉडल का स्थायी रद्दीकरण", "एक फ्लैट बेसलाइन जहां हाजिर और फ्यूचर्स सूचकांक पूर्ण शून्य मार्जिन पर व्यवस्थित होते हैं"] },
            correct: 0
        },
        {
            en: { q: "What does the 'Treynor Ratio' of a mutual fund scheme evaluate?", opts: ["The excess return generated by the fund per unit of systematic risk (Beta)", "The absolute alpha tracking performance over a ten-year cycle", "The total operational cost incurred relative to the absolute count of folios", "The variance between the direct investment framework and distributor paths"] },
            hi: { q: "किसी म्यूचुअल फंड योजना का 'ट्रेनर रेशियो' (Treynor Ratio) क्या मूल्यांकन करता है?", opts: ["व्यवस्थित जोखिम (Beta) की प्रति इकाई पर फंड द्वारा उत्पन्न अतिरिक्त रिटर्न", "दस साल के चक्र में पूर्ण अल्फा ट्रैकिंग प्रदर्शन", "फोलियो की पूर्ण संख्या के सापेक्ष किया गया कुल परिचालन खर्च", "डायरेक्ट निवेश ढांचे और वितरक मार्गों के बीच का अंतर"] },
            correct: 0
        },
        {
            en: { q: "What is an options position called where an investor sells an uncovered option without holding the underlying asset or a protective contract?", opts: ["Naked / Uncovered Option Writing", "Covered Call Position", "Protective Put Strategy", "Bull Put Spread Layout"] },
            hi: { q: "उस ऑप्शंस पोजीशन को क्या कहा जाता है जहां एक निवेशक अंतर्निहित परिसंपत्ति या सुरक्षात्मक अनुबंध रखे बिना एक अनकवर्ड ऑप्शन बेचता है?", opts: ["नेकेड / अनकवर्ड ऑप्शन राइटिंग (Naked / Uncovered Option Writing)", "कवर्ड कॉल पोजीशन", "प्रोटेक्टिव पुट रणनीति", "बुल पुट स्प्रेड लेआउट"] },
            correct: 0
        },
        {
            en: { q: "Which core principle of general insurance gives the insurer the legal right to pursue liable third parties to recover claim amounts after settling the insured's loss?", opts: ["Principle of Subrogation", "Principle of Contribution", "Principle of Indemnity Matrix", "Principle of Proximate Cause"] },
            hi: { q: "सामान्य बीमा का कौन सा मूल सिद्धांत बीमाकर्ता को बीमित व्यक्ति के नुकसान का निपटान करने के बाद दावा राशि वसूलने के लिए उत्तरदायी तीसरे पक्षों पर कानूनी कार्रवाई करने का अधिकार देता है?", opts: ["प्रत्यासन का सिद्धांत (Principle of Subrogation)", "अंशदान का सिद्धांत", "क्षतिपूर्ति मैट्रिक्स का सिद्धांत", "निकटतम कारण का सिद्धांत"] },
            correct: 0
        },
        {
            en: { q: "In the currency derivative segment, what does an 'Indirect Quote' format show?", opts: ["The amount of foreign currency required to purchase one fixed unit of domestic currency", "The amount of domestic currency required to purchase one fixed unit of foreign currency", "Any cross-currency transaction that excludes the domestic parameter completely", "A baseline evaluation index declared by international monetary funds"] },
            hi: { q: "मुद्रा डेरिवेटिव सेगमेंट में, 'अप्रत्यक्ष उद्धरण' (Indirect Quote) प्रारूप क्या प्रदर्शित करता है?", opts: ["घरेलू मुद्रा की एक निश्चित इकाई खरीदने के लिए आवश्यक विदेशी मुद्रा की मात्रा", "विदेशी मुद्रा की एक निश्चित इकाई खरीदने के लिए आवश्यक घरेलू मुद्रा की मात्रा", "कोई भी क्रॉस-करेंसी लेनदेन जो घरेलू पैरामीटर को पूरी तरह से बाहर करता है", "अंतर्राष्ट्रीय मौद्रिक कोष द्वारा घोषित एक आधारभूत मूल्यांकन सूचकांक"] },
            correct: 0
        },
        {
            en: { q: "What type of mutual fund scheme passive tracking structure aims to perfectly replicate the stock composition and performance of an index like Nifty 50?", opts: ["Index Fund", "Sectoral Infrastructure Fund", "Balanced Advantage Dynamic Fund", "Multi-Cap Diversified Scheme"] },
            hi: { q: "किस प्रकार की म्यूचुअल फंड योजना की पैसिव ट्रैकिंग संरचना का उद्देश्य निफ्टी 50 जैसे इंडेक्स के स्टॉक संयोजन और प्रदर्शन की पूरी तरह से नकल करना है?", opts: ["इंडेक्स फंड (Index Fund)", "सेक्टरल इंफ्रास्ट्रक्चर फंड", "बैलेंस्ड एडवांटेज डायनेमिक फंड", "मल्टी-कैप डायवर्सिफाइड स्कीम"] },
            correct: 0
        },
        {
            en: { q: "What does the option Greek 'Gamma' indicate precise inside derivative modeling?", opts: ["The rate of change of Delta relative to a 1-unit change in the price of the underlying asset", "The decay velocity of the time premium component across calendar weeks", "The volatility spread coefficient matching international bullion indexes", "The direct variance tracked across macro corporate interest metrics"] },
            hi: { q: "डेरिवेटिव मॉडलिंग के भीतर ऑप्शन ग्रीक 'गामा' (Gamma) सटीक रूप से क्या दर्शाता है?", opts: ["अंतर्निहित परिसंपत्ति की कीमत में 1-इकाई के बदलाव के सापेक्ष डेल्टा (Delta) के बदलाव की दर", "कैलेंडर सप्ताहों में समय प्रीमियम घटक की क्षय गति", "अंतरराष्ट्रीय बुलियन सूचकांकों से मेल खाने वाला अस्थिरता स्प्रेड गुणांक", "मैक्रो कॉर्पोरेट ब्याज मेट्रिक्स में ट्रैक किया गया प्रत्यक्ष विचरण"] },
            correct: 0
        },
        {
            en: { q: "Under the Insurance Act, 1938, what section dictates the indisputability of a life insurance policy after it has been active for 3 years?", opts: ["Section 45", "Section 41", "Section 39", "Section 27"] },
            hi: { q: "बीमा अधिनियम, 1938 के तहत, कौन सी धारा जीवन बीमा पॉलिसी के ३ वर्ष तक सक्रिय रहने के बाद उसकी अविवादास्पदता (Indisputability) का निर्देश देती है?", opts: ["धारा 45 (Section 45)", "धारा 41", "धारा 39", "धारा 27"] },
            correct: 0
        },
        {
            en: { q: "In commodity derivatives, what does the 'Tender Period Margin' intended to cover inside physical delivery models?", opts: ["The increased risk of counterparty contract default during the final delivery execution phase", "The basic transaction charges levied by the exchange desks", "The warehouse logistical storage fees charged by interstate networks", "The structural custom tariff tax imposed at physical maritime borders"] },
            hi: { q: "कमोडिटी डेरिवेटिव्स में, भौतिक निपटान मॉडल के भीतर 'टेंडर पीरियड मार्जिन' का उद्देश्य क्या कवर करना है?", opts: ["अंतिम डिलीवरी निष्पादन चरण के दौरान काउंटरपार्टी अनुबंध चूक के बढ़ते जोखिम को", "एक्सचेंज डेस्क द्वारा लगाया जाने वाला बुनियादी लेनदेन शुल्क", "अंतरराज्यीय नेटवर्क द्वारा लिया जाने वाला गोदाम रसद भंडारण शुल्क", "भौतिक समुद्री सीमाओं पर लगाया जाने वाला संरचनात्मक कस्टम टैरिफ कर"] },
            correct: 0
        },
        {
            en: { q: "What is the structural settlement cycle for exchange-traded equity transactions on recognized Indian stock exchanges?", opts: ["T+1 rolling settlement cycle", "T+2 rolling cycle framework", "T+5 rolling settlement pipeline", "T+3 settlement execution desk"] },
            hi: { q: "मान्यता प्राप्त भारतीय स्टॉक एक्सचेंजों पर एक्सचेंज-ट्रेडेड इक्विटी लेनदेन के लिए संरचनात्मक निपटान चक्र (Settlement Cycle) क्या है?", opts: ["T+1 रोलिंग सेटलमेंट चक्र (T+1 rolling settlement cycle)", "T+2 रोलिंग चक्र ढांचा", "T+5 रोलिंग निपटान पाइपलाइन", "T+3 निपटान निष्पादन डेस्क"] },
            correct: 0
        },
        {
            en: { q: "What does an insurance 'Deductible' represent in general or health insurance claims?", opts: ["The pre-determined amount of loss that the insured must pay out-of-pocket before the insurance provider pays its liability share", "The structural promotional discount provided during annual renewal cycles", "The commission layout processed dynamically to licensed field distribution agents", "The statutory processing tax tariff imposed across reinsurance transactions"] },
            hi: { q: "सामान्य या स्वास्थ्य बीमा दावों में बीमा 'डीडक्टिबल' (Deductible) क्या दर्शाता है?", opts: ["नुकसान की वह पूर्व-निर्धारित राशि जो बीमा प्रदाता द्वारा अपनी देयता हिस्सेदारी का भुगतान करने से पहले बीमित व्यक्ति को अपनी जेब से चुकानी होगी", "वार्षिक नवीनीकरण चक्रों के दौरान प्रदान की जाने वाली संरचनात्मक प्रचार छूट", "लाइसेंस प्राप्त क्षेत्र वितरण एजेंटों को गतिशील रूप से संसाधित कमीशन लेआउट", "पुनर्बीमा लेनदेन पर लगाया जाने वाला वैधानिक प्रसंस्करण कर टैरिफ"] },
            correct: 0
        },
        {
            en: { q: "In mutual funds, who holds the ultimate legal power to terminate or replace an Asset Management Company (AMC) subject to SEBI's validation?", opts: ["The Board of Trustees of the Mutual Fund", "The Sponsor company executive panel exclusively", "The Association of Mutual Funds in India Central Registrar", "The designated Registrar and Transfer Agent (RTA) board"] },
            hi: { q: "म्यूचुअल फंड में, सेबी के सत्यापन के अधीन एसेट मैनेजमेंट कंपनी (AMC) को समाप्त करने या बदलने की अंतिम कानूनी शक्ति किसके पास होती है?", opts: ["म्यूचुअल फंड का ट्रस्टी बोर्ड (The Board of Trustees)", "विशेष रूप से प्रायोजक कंपनी का कार्यकारी पैनल", "एसोसिएशन ऑफ म्यूचुअल फंड्स इन इंडिया केंद्रीय रजिस्ट्रार", "नामित रजिस्ट्रार और ट्रांसफर एजेंट (RTA) बोर्ड"] },
            correct: 0
        },
        {
            en: { q: "What does the option Greek 'Vega' quantify inside derivative volatility matrices?", opts: ["The sensitivity of an option's premium to a 1% change in the implied volatility of the underlying asset", "The breakdown speed of time value as the contract moves closer to expiration", "The mathematical acceleration rate of Delta per unit shift in spot index configurations", "The direct interest rate risk triggered by shifting macroeconomic capital baselines"] },
            hi: { q: "डेरिवेटिव वोलाटिलिटी मेट्रिसेस के भीतर ऑप्शन ग्रीक 'वेगा' (Vega) क्या मापता है?", opts: ["अंतर्निहित परिसंपत्ति की निहित अस्थिरता (Implied Volatility) में 1% के बदलाव के प्रति ऑप्शन के प्रीमियम की संवेदनशीलता", "अनुबंध की समाप्ति के करीब पहुंचने पर समय मूल्य के घटने की गति", "स्पॉट इंडेक्स कॉन्फ़िगरेशन में प्रति इकाई बदलाव पर डेल्टा की गणितीय त्वरण दर", "व्यापक आर्थिक पूंजी आधारों को बदलने से ट्रिगर होने वाला प्रत्यक्ष ब्याज दर जोखिम"] },
            correct: 0
        },
        {
            en: { q: "Which corporate parameter calculates the exact relation between the total equity dividends distributed inside a calendar year and the current market share price?", opts: ["Dividend Yield", "P/E Multiple Scale", "Earnings Per Share Tracker", "Book Value Coefficient"] },
            hi: { q: "कौन सा कॉर्पोरेट पैरामीटर एक कैलेंडर वर्ष के भीतर वितरित कुल इक्विटी लाभांश और वर्तमान बाजार शेयर मूल्य के बीच सटीक संबंध की गणना करता है?", opts: ["डिविडेंड यील्ड (Dividend Yield)", "पी/ई मल्टीपल स्केल", "अर्निंग पर शेयर ट्रैकर", "बुक वैल्यू गुणांक"] },
            correct: 0
        },
        {
            en: { q: "Under IRDAI insurance guidelines, what does the 'Principle of Contribution' imply in case of a dual policy setup for a single asset?", opts: ["The insurers will share the total loss proportionately; the client cannot claim the full amount from both to make a profit", "The entire claim must be paid compulsorily by the oldest insurance entity exclusively", "The client receives double payouts automatically backed by state judicial interventions", "The clearing corporation confiscates the physical damaged asset for global auctioning"] },
            hi: { q: "IRDAI बीमा दिशानिर्देशों के तहत, एक ही संपत्ति के लिए दोहरी पॉलिसी सेटअप के मामले में 'अंशदान का सिद्धांत' क्या दर्शाता है?", opts: ["बीमाकर्ता कुल नुकसान को आनुपातिक रूप से साझा करेंगे; ग्राहक लाभ कमाने के लिए दोनों से पूर्ण राशि का दावा नहीं कर सकता है", "पूरे दावे का भुगतान विशेष रूप से सबसे पुरानी बीमा इकाई द्वारा अनिवार्य रूप से किया जाना चाहिए", "ग्राहक को राज्य के न्यायिक हस्तक्षेपों द्वारा समर्थित स्वचालित रूप से दोगुना भुगतान प्राप्त होता है", "क्लियरिंग कॉरपोरेशन वैश्विक नीलामी के लिए भौतिक क्षतिग्रस्त संपत्ति को जब्त करता है"] },
            correct: 0
        },
        {
            en: { q: "In exchange-traded currency derivatives, what represents the tick size for a standard USD-INR futures contract?", opts: ["₹0.0025", "₹0.0100", "₹0.0500", "₹0.0001"] },
            hi: { q: "एक्सचेंज-ट्रेडेड मुद्रा डेरिवेटिव में, एक मानक USD-INR फ्यूचर्स अनुबंध के लिए टिक आकार (Tick Size) क्या होता है?", opts: ["₹0.0025", "₹0.0100", "₹0.0500", "₹0.0001"] },
            correct: 0
        },
        {
            en: { q: "Which type of debt mutual fund scheme focuses its asset deployment exclusively on short-term corporate debt instruments with maturity profiles up to 91 days?", opts: ["Liquid Fund", "Gilt Fund with Sovereign Risks", "Corporate Bond Fund", "Dynamic Duration Asset Scheme"] },
            hi: { q: "किस प्रकार की डेट म्यूचुअल फंड योजना अपने परिसंपत्ति परिनियोजन को विशेष रूप से 91 दिनों तक की परिपक्वता प्रोफाइल वाले अल्पकालिक कॉर्पोरेट ऋण साधनों पर केंद्रित करती है?", opts: ["लिक्विड फंड (Liquid Fund)", "संप्रभु जोखिमों के साथ गिल्ट फंड", "कॉर्पोरेट बॉन्ड फंड", "डायनेमिक ड्यूरेशन एसेट स्कीम"] },
            correct: 0
        },
        {
            en: { q: "Under the Insurance Act, 1938, what section strictly prohibits any payment of commission or rebates to an unlicensed individual or field agent?", opts: ["Section 41", "Section 45", "Section 39", "Section 27"] },
            hi: { q: "बीमा अधिनियम, 1938 के तहत, कौन सी धारा किसी बिना लाइसेंस वाले व्यक्ति या फील्ड एजेंट को कमीशन या छूट के किसी भी भुगतान को कड़ाई से प्रतिबंधित करती है?", opts: ["धारा 41 (Section 41)", "धारा 45", "धारा 39", "धारा 27"] },
            correct: 0
        },
        {
            en: { q: "In physical commodity trading, what entity manages the grading, quality certification, and logistics of goods stored in accredited warehouses?", opts: ["The Exchange Repository and Accredited Warehouse Managers", "The WDRA Central Legal Court Wing", "The Financial Benchmarks India Pvt. Ltd. Treasury Operations", "The state level agricultural marketing mandis registry panels"] },
            hi: { q: "भौतिक कमोडिटी कोरोबार में, मान्यता प्राप्त गोदामों में संग्रहीत सामानों की ग्रेडिंग, गुणवत्ता प्रमाणन और रसद का प्रबंधन कौन सी संस्था करती है?", opts: ["एक्सचेंज रिपोजिटरी और मान्यता प्राप्त गोदाम प्रबंधक (Accredited Warehouse Managers)", "डब्ल्यूडीआरए केंद्रीय कानूनी न्यायालय विंग", "फाइनेंशियल बेंचमार्क इंडिया प्राइवेट लिमिटेड ट्रेजरी ऑपरेशंस", "राज्य स्तरीय कृषि विपणन मंडी रजिस्ट्री पैनल"] },
            correct: 0
        },
        {
            en: { q: "What does the financial metric 'P/B Ratio' calculate inside fundamental equity analysis?", opts: ["Price-to-Book Value Ratio", "Profit-to-Bonus Matrix", "Premium-to-Beta Index", "Public-to-Exchange Allocation Parameter"] },
            hi: { q: "मौलिक इक्विटी विश्लेषण के भीतर वित्तीय मीट्रिक 'P/B Ratio' क्या गणना करता है?", opts: ["प्राइस-टू-बुक वैल्यू रेशियो (Price-to-Book Value Ratio)", "प्रॉफिट-टू-बोनस मैट्रिक्स", "प्रीमियम-टू-बीटा इंडेक्स", "पब्लिक-टू-एक्सचेंज एलोकेशन पैरामीटर"] },
            correct: 0
        },
        {
            en: { q: "In the context of Option Greeks, what parameter measures the option premium's sensitivity to shifts in the risk-free interest rate?", opts: ["Rho", "Theta", "Vega", "Delta"] },
            hi: { q: "ऑप्शन ग्रीक्स के संदर्भ में, कौन सा पैरामीटर जोखिम-मुक्त ब्याज दर में बदलाव के प्रति ऑप्शन प्रीमियम की संवेदनशीलता को मापता है?", opts: ["रो (Rho)", "थिटा (Theta)", "वेगा (Vega)", "डेल्टा (Delta)"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI guidelines, what is the mandatory lock-in period for an Equity Linked Savings Scheme (ELSS) mutual fund allocation?", opts: ["3 years", "5 years", "1 year", "10 years"] },
            hi: { q: "सेबी के दिशानिर्देशों के तहत, इक्विटी लिंक्ड सेविंग्स स्कीम (ELSS) म्यूचुअल फंड आवंटन के लिए अनिवार्य लॉक-इन अवधि कितनी है?", opts: ["3 वर्ष (3 years)", "5 वर्ष", "1 वर्ष", "10 वर्ष"] },
            correct: 0
        },
        {
            en: { q: "Inside the general insurance operational pipeline, what is the primary role of a 'Surveyor and Loss Assessor'?", opts: ["To independently inspect, quantify, and report the real extent of physical loss post accident for claim settlement", "To handle digital marketing and client onboarding pipelines across states", "To calculate the solvency ratio parameters of the parent insurance company annually", "To manage corporate bond portfolio allocation switches under treasury oversight"] },
            hi: { q: "सामान्य बीमा परिचालन पाइपलाइन के भीतर, 'सर्वेक्षक और हानि मूल्यांकक' (Surveyor and Loss Assessor) की प्राथमिक भूमिका क्या है?", opts: ["दावा निपटान के लिए दुर्घटना के बाद भौतिक नुकसान की वास्तविक सीमा का स्वतंत्र रूप से निरीक्षण, मात्रा निर्धारित और रिपोर्ट करना", "राज्यों में डिजिटल मार्केटिंग और ग्राहक ऑनबोर्डिंग पाइपलाइनों को संभालना", "मूल बीमा कंपनी के सॉल्वेंसी अनुपात मापदंडों की सालाना गणना करना", "ट्रेजरी निरीक्षण के तहत कॉर्पोरेट बॉन्ड पोर्टफोलियो आवंटन स्विच का प्रबंधन करना"] },
            correct: 0
        },
        {
            en: { q: "What economic theory states that exchange rate movements between two currencies are primarily driven by differences in their national inflation rates?", opts: ["Purchasing Power Parity (PPP)", "Interest Rate Parity (IRP)", "International Fisher Effect Matrix", "Balance of Payments Deficit Theory"] },
            hi: { q: "कौन सा आर्थिक सिद्धांत यह बताता है कि दो मुद्राओं के बीच विनिमय दर का उतार-चढ़ाव मुख्य रूप से उनकी राष्ट्रीय मुद्रास्फीति (Inflation) दरों में अंतर से प्रेरित होता है?", opts: ["क्रय शक्ति समता (Purchasing Power Parity - PPP)", "ब्याज दर समता (IRP)", "अंतर्राष्ट्रीय फिशर प्रभाव मैट्रिक्स", "भुगतान संतुलन घाटा सिद्धांत"] },
            correct: 0
        },
        {
            en: { q: "In commodity derivatives trading, crude oil contracts on Indian multi-commodity exchanges are deeply tracking which international reference pricing hub?", opts: ["WTI / Brent Crude on NYMEX / ICE exchanges", "S&P Global Bullion tracking indexes", "London Metal Exchange (LME) raw metal pricing spreadsheet", "Chicago Board of Trade (CBOT) agricultural soft option layout"] },
            hi: { q: "कमोडिटी डेरिवेटिव्स trading में, भारतीय मल्टी-कमोडिटी एक्सचेंजों पर कच्चे तेल के अनुबंध गहराई से किस अंतर्राष्ट्रीय संदर्भ मूल्य निर्धारण केंद्र को ट्रैक करते हैं?", opts: ["NYMEX / ICE एक्सचेंजों पर WTI / Brent क्रूड बेंचमार्क", "एसएंडपी ग्लोबल बुलियन ट्रैकिंग इंडेक्स", "लंदन मेटल एक्सचेंज (एलएमई) कच्चा धातु मूल्य निर्धारण स्प्रेडशीट", "शिकागो बोर्ड ऑफ ट्रेड (सीबीओटी) कृषि सॉफ्ट ऑप्शन लेआउट"] },
            correct: 0
        },
        {
            en: { q: "What does the metric 'Tracking Error' precisely quantify inside a passive Mutual Fund Index Fund scheme?", opts: ["The performance returns divergence between the index fund and its target tracking benchmark index", "The mechanical lag configuration while updating fractional balance tokens on the screen", "The absolute accounting mistake committed by the corporate asset management team", "The statutory processing tax discrepancy evaluated by central internal revenue wings"] },
            hi: { q: "एक पैसिव म्यूचुअल फंड इंडेक्स फंड योजना के भीतर मीट्रिक 'ट्रैकिंग एरर' (Tracking Error) सटीक रूप से क्या मापता है?", opts: ["इंडेक्स फंड के प्रदर्शन रिटर्न और उसके लक्षित ट्रैकिंग बेंचमार्क इंडेक्स के बीच विचलन (Divergence)", "स्क्रीन पर आंशिक बैलेंस टोकन अपडेट करते समय होने वाली यांत्रिक देरी", "कॉर्पोरेट एसेट管理 टीम द्वारा की गई पूर्ण लेखांकन गलती", "केंद्रीय आंतरिक राजस्व विंग द्वारा मूल्यांकित वैधानिक प्रसंस्करण कर विसंगति"] },
            correct: 0
        },
        // --- NISM / IRDAI Comprehensive Mock Test: All Modules Shuffled (Set 8) ---
        {
            en: { q: "In the derivatives market, what is the 'Mark-to-Market (MTM)' mechanism designed to achieve?", opts: ["The daily financial settlement of profits and losses based on closing market prices to mitigate systemic default risk", "The calculation of dynamic system processing fees by retail brokerages", "The physical grading certification layout handled inside designated warehouses", "The static deduction of direct capital gains tax during a new public IPO allocation"] },
            hi: { q: "डेरिवेटिव बाजार में, 'मार्क-टू-मार्केट (MTM)' तंत्र को क्या हासिल करने के लिए डिज़ाइन किया गया है?", opts: ["प्रणालीगत डिफ़ॉल्ट जोखिम को कम करने के लिए समापन बाजार कीमतों के आधार पर लाभ और हानि का दैनिक वित्तीय निपटान", "खुदरा ब्रोकरेज द्वारा गतिशील सिस्टम प्रोसेसिंग शुल्क की गणना करना", "नामित गोदामों के भीतर संभाला जाने वाला भौतिक ग्रेडिंग प्रमाणन लेआउट", "नए सार्वजनिक आईपीओ आवंटन के दौरान प्रत्यक्ष पूंजीगत लाभ कर की स्थिर कटौती"] },
            correct: 0
        },
        {
            en: { q: "Which core principle of general insurance states that the insured must have a valid financial interest in the preservation of the subject matter?", opts: ["Principle of Insurable Interest", "Principle of Indemnity Matrix", "Principle of Subrogation Rights", "Principle of Utmost Good Faith"] },
            hi: { q: "सामान्य बीमा का कौन सा मूल सिद्धांत यह बताता है कि बीमित व्यक्ति का विषय वस्तु के संरक्षण में एक वैध वित्तीय हित होना चाहिए?", opts: ["बीमायोग्य हित का सिद्धांत (Principle of Insurable Interest)", "क्षतिपूर्ति मैट्रिक्स का सिद्धांत", "प्रत्यासन अधिकारों का सिद्धांत", "परम सद्भाव का सिद्धांत"] },
            correct: 0
        },
        {
            en: { q: "What is the standard rolling settlement cycle enforced for exchange-traded currency futures transactions in India?", opts: ["T+1 cycle", "T+2 rolling cycle", "T+5 rolling framework", "T+3 settlement pipeline"] },
            hi: { q: "भारत में एक्सचेंज-ट्रेडेड मुद्रा फ्यूचर्स लेनदेन के लिए लागू मानक रोलिंग निपटान चक्र (Settlement Cycle) क्या है?", opts: ["T+1 चक्र (T+1 cycle)", "T+2 रोलिंग चक्र", "T+5 रोलिंग ढांचा", "T+3 निपटान पाइपलाइन"] },
            correct: 0
        },
        {
            en: { q: "Inside a Mutual Fund corporate setup, which legal entity holds the ultimate power to terminate an Asset Management Company (AMC)?", opts: ["The Board of Trustees", "The Sponsor Group Executive Core", "The Lead Custodian Institution", "The Registrar and Transfer Agent Panel"] },
            hi: { q: "म्यूचुअल फंड कॉर्पोरेट सेटअप के भीतर, एसेट मैनेजमेंट कंपनी (AMC) को समाप्त करने की अंतिम शक्ति किस कानूनी इकाई के पास होती?", opts: ["ट्रस्टी बोर्ड (Board of Trustees)", "प्रायोजक समूह कार्यकारी कोर", "अग्रणी कस्टोडियन संस्थान", "रजिस्ट्रार और ट्रांसफर एजेंट पैनल"] },
            correct: 0
        },
        {
            en: { q: "What options writing position carries a theoretical risk profile of unlimited potential loss paired with strictly limited premium profit potential?", opts: ["Short Call Option (Uncovered / Naked Call)", "Long Put Option position", "Long Straddle strategy layout", "Bull Call Spread combination framework"] },
            hi: { q: "किस ऑप्शंस राइटिंग पोजीशन में सीमित प्रीमियम लाभ की संभावना के साथ असीमित संभावित नुकसान का सैद्धांतिक जोखिम प्रोफाइल होता है?", opts: ["शॉर्ट कॉल ऑप्शन (Uncovered / Naked Call)", "लॉन्ग पुट ऑप्शन पोजीशन", "लॉन्ग स्ट्रैडल रणनीति लेआउट", "बुल कॉल स्प्रेड संयोजन ढांचा"] },
            correct: 0
        },
        {
            en: { q: "Under IRDAI statutory frameworks, what is the absolute mandatory minimum 'Solvency Ratio' that an insurance company must maintain at all times?", opts: ["1.50 (150%)", "1.00 (100%)", "2.00 (200%)", "0.75 (75%)"] },
            hi: { q: "IRDAI वैधानिक ढांचे के तहत, वह पूर्ण अनिवार्य न्यूनतम 'सॉल्वेंसी अनुपात' (Solvency Ratio) क्या है जिसे एक बीमा कंपनी को हर समय बनाए रखना चाहिए?", opts: ["1.50 (150%)", "1.00 (100%)", "2.00 (200%)", "0.75 (75%)"] },
            correct: 0
        },
        {
            en: { q: "In commodity derivatives trading, what does the market term 'Backwardation' specifically indicate?", opts: ["A market scenario where the physical spot price is trading higher than the derivatives futures price", "A situation where the futures price is expanding exponentially above near-term spot indicators", "A structural equilibrium state where warehouse storage logistics costs drop down to zero margins", "The mandatory cash-settlement phase of options premiums handled by clearing houses"] },
            hi: { q: "कमोडिटी डेरिवेटिव्स ट्रेडिंग में, बाजार शब्द 'बैकवर्डेशन' (Backwardation) विशेष रूप से क्या दर्शाता है?", opts: ["एक बाजार परिदृश्य जहां भौतिक हाजिर मूल्य (Spot price) डेरिवेटिव फ्यूचर्स मूल्य से अधिक पर ट्रेड कर रहा होता है", "एक ऐसी स्थिति जहां फ्यूचर्स मूल्य निकट-अवधि के हाजिर संकेतकों से ऊपर तेजी से बढ़ रहा है", "एक संरचनात्मक संतुलन स्थिति जहां गोदाम भंडारण रसद लागत शून्य मार्जिन तक गिर जाती है", "क्लियरिंग हाउस द्वारा संभाला जाने वाला ऑप्शन प्रीमियम का अनिवार्य नकद-निपटान चरण"] },
            correct: 0
        },
        {
            en: { q: "Which core entity acts as the central recordkeeping registrar that issues dynamic 'Folio Numbers' for mutual fund investor accounts?", opts: ["The Registrar and Transfer Agent (RTA) of that specific mutual fund", "The Securities and Exchange Board of India Head Office Central Files", "The Association of Mutual Funds in India (AMFI) Central Bureau", "The Custodian clearing banking institution network"] },
            hi: { q: "म्यूचुअल फंड निवेशक खातों के लिए गतिशील 'फोलियो नंबर' (Folio Number) जारी करने वाले केंद्रीय रिकॉर्ड कीपिंग रजिस्ट्रार के रूप में कौन सी मुख्य संस्था कार्य करती है?", opts: ["उस विशिष्ट म्यूचुअल फंड का रजिस्ट्रार और ट्रांसफर एजेंट (RTA)", "भारतीय प्रतिभूति और विनिमय बोर्ड प्रधान कार्यालय केंद्रीय फाइलें", "एसोसिएशन ऑफ म्यूचुअल फंड्स इन इंडिया (AMFI) केंद्रीय ब्यूरो", "कस्टोडियन क्लियरिंग बैंकिंग संस्थान नेटवर्क"] },
            correct: 0
        },
        {
            en: { q: "What does the option Greek 'Delta' track precisely inside derivative sensitivity modeling?", opts: ["The expected absolute change in an option's premium relative to a 1-unit movement in the underlying asset price", "The erosion speed velocity of the time premium element inside out-of-the-money contract brackets", "The percentage volatility shift triggered by changing central bank interest repo benchmarks", "The physical bullion warehouse tracking index monitored across state-level operations"] },
            hi: { q: "डेरिवेटिव संवेदनशीलता मॉडलिंग के भीतर ऑप्शन ग्रीक 'डेल्टा' (Delta) सटीक रूप से क्या ट्रैक करता है?", opts: ["अंतर्निहित परिसंपत्ति की कीमत में 1-इकाई के उतार-चढ़ाव के सापेक्ष ऑप्शन के प्रीमियम में अपेक्षित पूर्ण परिवर्तन", "आउट-ऑफ-द-मनी अनुबंध ब्रैकेट के अंदर समय प्रीमियम तत्व के घटने का वेग", "केंद्रीय बैंक ब्याज रेपो बेंचमार्क को बदलने से ट्रिगर होने वाला प्रतिशत अस्थिरता परिवर्तन", "राज्य-स्तरीय संचालन में निगरानी की जाने वाली भौतिक बुलियन गोदाम ट्रैकिंग सूचकांक"] },
            correct: 0
        },
        {
            en: { q: "Which type of commercial general insurance contract compensates a business for loss of net profits due to a temporary operational halt post fire event?", opts: ["Business Interruption Insurance (Consequential Loss Cover)", "Public Liability General Policy Layout", "Marine Cargo Voyage Protection Matrix", "Standard Physical Structural Asset Protection Plan"] },
            hi: { q: "किस प्रकार का वाणिज्यिक सामान्य बीमा अनुबंध आग दुर्घटना के बाद अस्थायी परिचालन रुकने के कारण हुए शुद्ध लाभ के नुकसान की भरपाई करता है?", opts: ["बिजनेस इंटरप्शन इंश्योरेंस (Business Interruption Insurance / परिणामी नुकसान कवर)", "पब्लिक लायबिलिटी जनरल पॉलिसी लेआउट", "मरीन कार्गो वोयाज प्रोटेक्शन मैट्रिक्स", "मानक भौतिक संरचनात्मक संपत्ति संरक्षण योजना"] },
            correct: 0
        },
        {
            en: { q: "Inside exchange-traded currency derivatives in India, what represents the primary standard reference rate provider used for contract settlement?", opts: ["FBIL daily published reference rates", "The closing ticker layout framework of the US Federal Reserve System", "The volume-weighted average price index compiled during the initial opening hour", "The commercial reference baseline matrix configured by sovereign banking syndicates"] },
            hi: { q: "भारत में एक्सचेंज-ट्रेडेड मुद्रा डेरिवेटिव के भीतर, अनुबंध निपटान के लिए उपयोग किया जाने वाला प्राथमिक मानक संदर्भ दर प्रदाता कौन सा है?", opts: ["FBIL द्वारा दैनिक प्रकाशित आधिकारिक संदर्भ दरें (Reference Rates)", "यूएस फेडरल रिजर्व सिस्टम का क्लोजिंग टिकर लेआउट ढांचा", "प्रारंभिक शुरुआती घंटे के दौरान संकलित वॉल्यूम-वेटेड एवरेज प्राइस इंडेक्स", "संप्रभु बैंकिंग सिंडिकेट द्वारा कॉन्फ़िगर की गई वाणिज्यिक संदर्भ आधारभूत मैट्रिक्स"] },
            correct: 0
        },
        {
            en: { q: "What does the 'Total Expense Ratio' (TER) of a passive mutual fund index scheme directly impact for the end investor?", opts: ["The declared Net Asset Value (NAV) and the actual performance returns delivered to the retail client", "The structural configuration timeline of the legislative lock-in period", "The absolute count of independent external directors managing fund governance files", "The physical asset safety vault structure maintained at the custodian bank headquarters"] },
            hi: { q: "किसी पैसिव म्यूचुअल फंड इंडेक्स योजना का 'टोटल एक्सपेंस रेशियो' (TER) अंतिम निवेशक के लिए सीधे किसे प्रभावित करता है?", opts: ["घोषित नेट एसेट वैल्यू (NAV) और खुदरा ग्राहक को दिए जाने वाले वास्तविक प्रदर्शन रिटर्न को", "विधायी लॉक-इन अवधि की संरचनात्मक कॉन्फ़िगरेशन समयरेखा को", "फंड गवर्नेंस फाइलों का प्रबंधन करने वाले स्वतंत्र बाहरी निदेशकों की पूर्ण संख्या को", "कस्टोडियन बैंक मुख्यालय में बनाए रखे जाने वाले भौतिक संपत्ति सुरक्षा वॉल्ट ढांचे को"] },
            correct: 0
        },
        {
            en: { q: "If an options trader simultaneously buys one In-the-Money (ITM) Call option and sells one Out-of-the-Money (OTM) Call option on the same underlying asset with identical expiry, the strategy is a:", opts: ["Bull Call Spread", "Bear Call Spread Layout", "Long Straddle Volatility Grid", "Short Strangle Premium Setup"] },
            hi: { q: "यदि कोई ऑप्शंस ट्रेडर एक ही अंतर्निहित परिसंपत्ति पर समान समाप्ति के साथ एक साथ एक इन-द-मनी (ITM) कॉल ऑप्शन खरीदता है और एक आउट-ऑफ-द-मनी (OTM) कॉल ऑप्शन बेचता है, तो यह रणनीति है:", opts: ["बुल कॉल स्प्रेड़ (Bull Call Spread)", "बियर कॉल स्प्रेड लेआउट", "लॉन्ग स्ट्रैडल वोलाटिलिटी ग्रिड", "शॉर्ट स्ट्रैंगल प्रीमियम सेटअप"] },
            correct: 0
        },
        {
            en: { q: "Under IRDAI regulations, what mandatory framework allows a consumer to review life insurance policy terms and return it within 15 days for a refund if unsatisfied?", opts: ["Free Look Period", "Grace Period Configuration Matrix", "Reinstatement Turnaround Window Layout", "Indisputability Phase Regulatory Slabs"] },
            hi: { q: "IRDAI के नियमों के तहत, कौन सा अनिवार्य ढांचा एक उपभोक्ता को जीवन बीमा पॉलिसी की शर्तों की समीक्षा करने और असंतुष्ट होने पर रिफंड के लिए 15 दिनों के भीतर इसे वापस करने की अनुमति देता है?", opts: ["फ्री लुक पीरियड (Free Look Period)", "ग्रेस पीरियड कॉन्फ़िगरेशन मैट्रिक्स", "रीइन्स्टेटमेंट टर्नअराउंड विंडो लेआउट", "अविवादास्पदता चरण नियामक स्लैब"] },
            correct: 0
        },
        {
            en: { q: "In exchange-traded derivative risk management systems, what abbreviation represents the regulatory methodology used to calculate portfolio-level initial margin requirements?", opts: ["SPAN (Standardized Portfolio Analysis of Risk)", "VaR Variable Simulation Slabs", "MTM Extreme Volatility Logs", "FBIL Leverage Verification Factor"] },
            hi: { q: "एक्सचेंज-ट्रेडेड डेरिवेटिव जोखिम प्रबंधन प्रणालियों में, पोर्टफोलियो-स्तर की प्रारंभिक मार्जिन आवश्यकताओं की गणना के लिए उपयोग की जाने वाली नियामक पद्धति का प्रतिनिधित्व कौन सा संक्षिप्त नाम करता है?", opts: ["SPAN (जोखिम का मानकीकृत पोर्टफोलियो विश्लेषण)", "VaR वेरिएबल सिमुलेशन स्लैब", "MTM एक्सट्रीम वोलाटिलिटी लॉग्स", "FBIL लीवरेज वेरिफिकेशन फैक्टर"] },
            correct: 0
        },
        {
            en: { q: "What does the financial evaluation metric 'Alpha' reflect for an actively managed mutual fund scheme?", opts: ["The excess return generated by the fund manager over the benchmark index relative to the systematic risk taken", "The sensitivity threshold of portfolio asset tracking matching macroeconomic cross-border variables", "The absolute operational overhead expenditure optimized across calendar quarters", "The structural tracking error standard variance recorded inside physical gold accounts"] },
            hi: { q: "एक सक्रिय रूप से प्रबंधित म्यूचुअल फंड योजना के लिए वित्तीय मूल्यांकन मीट्रिक 'अल्फा' (Alpha) क्या दर्शाता है?", opts: ["लिए गए व्यवस्थित जोखिम के सापेक्ष बेंचमार्क इंडेक्स पर फंड मैनेजर द्वारा उत्पन्न अतिरिक्त रिटर्न", "व्यापक आर्थिक सीमा पार चर से मेल खाने वाले पोर्टफोलियो परिसंपत्ति ट्रैकिंग की संवेदनशीलता सीमा", "कैलेंडर तिमाहियों में अनुकूलित कुल परिचालन ओवरहेड व्यय", "भौतिक सोने के खातों के अंदर दर्ज संरचनात्मक ट्रैकिंग त्रुटि मानक विचरण"] },
            correct: 0
        },
        {
            en: { q: "Which type of life insurance setup delivers pure financial death benefit protection throughout the policyholder's entire lifetime up to 100 years of age?", opts: ["Whole Life Insurance Policy", "Pure Term Insurance Slabs", "Endowment Money Back Cover", "Variable Unit Linked Security Array"] },
            hi: { q: "किस प्रकार का जीवन बीमा सेटअप सीमित अवधि के बजाय, 100 वर्ष की आयु तक पॉलिसीधारक के पूरे जीवनकाल में शुद्ध वित्तीय मृत्यु लाभ सुरक्षा प्रदान करता है?", opts: ["संपूर्ण जीवन बीमा पॉलिसी (Whole Life Insurance Policy)", "शुद्ध टर्म इंश्योरेंस स्लैब", "एंडोमेंट मनी बैक कवर", "वेरिएबल यूनिट लिंक्ड सिक्योरिटी एरे"] },
            correct: 0
        },
        {
            en: { q: "In commodity derivatives markets, what does a 'Contango' market layout indicate?", opts: ["A situation where the futures contract price is trading higher than the physical spot price, reflecting storage and financing costs over time", "A severe structural short squeeze spike driving daily tracking benchmarks infinitely higher", "The permanent structural cancellation of options premium values inside exchange frameworks", "A flat baseline grid where spot and futures prices merge at absolute zero margins"] },
            hi: { q: "कमोडिटी डेरिवेटिव्स बाजारों में, एक 'कंतैंगो' (Contango) बाजार लेआउट क्या दर्शाता है?", opts: ["एक ऐसी स्थिति जहां फ्यूचर्स अनुबंध मूल्य भौतिक हाजिर मूल्य से अधिक पर ट्रेड कर रहा होता है, जो समय के साथ भंडारण और वित्तीय लागतों को दर्शाता है", "एक गंभीर संरचनात्मक शॉर्ट स्क्वीज़ स्पाइक जो दैनिक ट्रैकिंग बेंचमार्क को असीमित रूप से ऊपर ले जाता है", "एक्सचेंज ढांचे के भीतर ऑप्शन प्रीमियम मूल्यों का स्थायी संरचनात्मक रद्दीकरण", "एक फ्लैट बेसलाइन ग्रिड जहां हाजिर और फ्यूचर्स कीमतें पूर्ण शून्य मार्जिन पर विलीन हो जाती हैं"] },
            correct: 0
        },
        {
            en: { q: "What does the option Greek 'Theta' measure in derivative options contracts pricing?", opts: ["The rate at which an option's premium time value decays as it approaches expiration, assuming other factors remain constant", "The acceleration metric of contract premium velocity relative to spot adjustments", "The asset sensitivity to macroeconomic interest benchmark shifts executed by central bank operations", "The structural volatility variance managed across clearing house accounting grids"] },
            hi: { q: "डेरिवेटिव ऑप्शंस अनुबंधों के मूल्य निर्धारण में ऑप्शन ग्रीक 'थिटा' (Theta) क्या मापता है?", opts: ["वह दर जिस पर किसी ऑप्शन का प्रीमियम समय मूल्य (Time value) समाप्ति के करीब पहुंचने पर घटता है, यह मानते हुए कि अन्य कारक स्थिर हैं", "हाजिर समायोजन के सापेक्ष अनुबंध प्रीमियम वेग का त्वरण मीट्रिक", "केंद्रीय बैंक के संचालन द्वारा निष्पादित व्यापक आर्थिक ब्याज बेंचमार्क बदलावों के प्रति परिसंपत्ति संवेदनशीलता", "क्लियरिंग हाउस लेखांकन ग्रिड में प्रबंधित संरचनात्मक अस्थिरता विचरण"] },
            correct: 0
        },
        {
            en: { q: "Inside the insurance sector, what does the specific term 'Moral Hazard' refer to?", opts: ["An increase in the probability or severity of loss due to the dishonest behavior or careless attitude of the insured person after getting policy coverage", "The structural calculation variations monitored dynamically across premium tax collections", "The natural physical decay parameters evaluated over a structural lifecycle tracker", "The risk of statutory fines post corporate compliance execution failures"] },
            hi: { q: "बीमा क्षेत्र के भीतर, विशिष्ट शब्द 'नैतिक संकट' (Moral Hazard) किसे संदर्भित करता है?", opts: ["पॉलिसी कवरेज मिलने के बाद बीमित व्यक्ति के बेईमान व्यवहार या लापरवाही के कारण नुकसान की संभावना या गंभीरता में वृद्धि", "प्रीमियम कर संग्रह में गतिशील रूप से निगरानी किए जाने वाले संरचनात्मक गणना भिन्नता", "संरचनात्मक जीवनचक्र ट्रैकर पर मूल्यांकित प्राकृतिक भौतिक क्षय पैरामीटर", "कॉर्पोरेट अनुपालन निष्पादन विफलताओं के बाद वैधानिक जुर्माने का जोखिम"] },
            correct: 0
        },
        {
            en: { q: "In exchange-traded currency derivatives, what entity acts as the legal central counterparty to guarantee the fulfillment of every contract trade?", opts: ["The Exchange-Accredited Clearing Corporation", "The Reserve Bank of India Treasury Operation Bureau", "The Association of Mutual Funds in India Central Core Desk", "The Lead Brokerage Syndicate Risk Management Counter"] },
            hi: { q: "एक्सचेंज-ट्रेडेड मुद्रा डेरिवेटिव में, प्रत्येक अनुबंध व्यापार की पूर्ति की गारंटी देने के लिए कौन सी संस्था कानूनी केंद्रीय काउंटरपार्टी के रूप में कार्य करती है?", opts: ["एक्सचेंज-मान्यता प्राप्त क्लियरिंग कॉरपोरेशन (Clearing Corporation)", "भारतीय रिजर्व बैंक ट्रेजरी ऑपरेशन ब्यूरो", "एसोसिएशन ऑफ म्यूचुअल फंड्स इन इंडिया सेंट्रल कोर डेस्क", "लीड ब्रोकरेज सिंडिकेट जोखिम प्रबंधन काउंटर"] },
            correct: 0
        },
        {
            en: { q: "What type of mutual fund asset class dynamically rebalances its portfolio allocation between equity and debt securities based on changing market valuations?", opts: ["Balanced Advantage Fund (Dynamic Asset Allocation Fund)", "Equity Linked Savings Scheme (ELSS Tax Vehicle)", "Gilt Fund with Central Sovereign Backing", "Sectoral / Thematic Infrastructure Scheme Portfolio"] },
            hi: { q: "परिवर्तनशील बाजार मूल्यांकनों के आधार पर कौन सा म्यूचुअल फंड एसेट क्लास इक्विटी और डेट प्रतिभूतियों के बीच अपने पोर्टफोलियो आवंटन को गतिशील रूप से पुनर्संतुलित करता है?", opts: ["बैलेंस्ड एडवांटेज फंड (Dynamic Asset Allocation Fund)", "इक्विटी लिंक्ड सेविंग्स स्कीम (ELSS Tax Vehicle)", "केंद्रीय संप्रभु समर्थन के साथ गिल्ट फंड", "सेक्टरल / थमैटिक इंफ्रास्ट्रक्चर योजना पोर्टफोलियो"] },
            correct: 0
        },
        {
            en: { q: "What does the 'Solvency Ratio' of an insurance company operating inside India represent?", opts: ["The metric evaluating an insurer's capital adequacy and structural capacity to meet long-term policyholder claims and corporate liabilities", "The total register count of active field distribution agents logged in databases", "The ratio of administrative overheads incurred relative to direct premiums collected", "The dynamic processing timeline threshold allocated to handle nomination benefits"] },
            hi: "भारत के भीतर काम करने वाली बीमा कंपनी का 'सॉल्वेंसी रेशियो' (Solvency Ratio) क्या दर्शाता है?", opts: ["बीमाकर्ता की पूंजी पर्याप्तता और दीर्घकालिक पॉलिसीधारक दावों और कॉर्पोरेट देनदारियों को पूरा करने की संरचनात्मक क्षमता का मूल्यांकन करने वाला मीट्रिक", "डेटाबेस में लॉग इन सक्रिय फ़ील्ड वितरण एजेंटों की कुल रजिस्टर संख्या", "एकत्रित प्रत्यक्ष प्रीमियम के सापेक्ष किए गए प्रशासनिक ओवरहेड्स का अनुपात", "नामांकन लाभों को संभालने के लिए आवंटित गतिशील प्रसंस्करण समयसीमा सीमा"] ,
            correct: 0
        },
        {
            en: { q: "In derivatives trading operations, executing an transaction that establishes a position completely identical but opposite to an existing open market position is called:", opts: ["Squaring Off", "Rolling Over", "Mark-to-Market Rebalancing Slabs", "Novation Protocol Exchange"] },
            hi: { q: "डेरिवेटिव ट्रेडिंग ऑपरेशन्स में, एक ऐसा लेनदेन निष्पादित करना जो मौजूदा ओपन मार्केट पोजीशन के बिल्कुल समान लेकिन विपरीत पोजीशन स्थापित करता है, कहलाता है:", opts: ["स्क्वायरिंग ऑफ (Squaring Off)", "रोलिंग ओवर (Rolling Over)", "मार्क-टू-मार्केट रीबैलेंसिंग स्लैब", "नोवेशन प्रोटोकॉल एक्सचेंज"] },
            correct: 0
        },
        {
            en: { q: "What represents the structural lot size configuration for a standard USD-INR currency futures contract on recognized Indian derivatives exchanges?", opts: ["USD 1,000", "USD 10,000", "USD 5,000", "USD 100"] },
            hi: { q: "मान्यता प्राप्त भारतीय डेरिवेटिव एक्सचेंजों पर एक मानक USD-INR मुद्रा फ्यूचर्स अनुबंध के लिए संरचनात्मक लॉट आकार (Lot Size) क्या है?", opts: ["USD 1,000", "USD 10,000", "USD 5,000", "USD 100"] },
            correct: 0
        },
        {
            en: { q: "Which key parameter measures the complete turnover percentage of a mutual fund portfolio's stock assets bought and sold within a 1-year window?", opts: ["Portfolio Turnover Rate", "Expense Ratio Coefficient Layout", "Tracking Error Standard Variance Scale", "Sharpe Volatility Matrix Metric"] },
            hi: { q: "कौन सा मुख्य पैरामीटर 1-वर्ष की अवधि के भीतर खरीदे और बेचे गए म्यूचुअल फंड पोर्टफोलियो की स्टॉक परिसंपत्तियों के पूर्ण टर्नओवर प्रतिशत को मापता है?", opts: ["पोर्टफोलियो टर्नओवर रेट (Portfolio Turnover Rate)", "व्यय अनुपात गुणांक लेआउट", "ट्रैकिंग एरर मानक विचरण पैमाना", "शार्प वोलाटिलिटी मैट्रिक्स मीट्रिक"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI Mutual Fund rules, what mandatory legal summary containing core risk factors and fees must be given to a potential investor prior to subscription?", opts: ["Key Information Memorandum (KIM)", "The full financial ledger statements of the parent corporate sponsor", "The individual tax filing records of the designated portfolio manager", "The structural map layout of commodity warehouse storage locations"] },
            hi: { q: "सेबी म्यूचुअल फंड नियमों के तहत, सदस्यता से पहले किसी संभावित निवेशक को मुख्य जोखिम कारकों और शुल्कों वाला कौन सा अनिवार्य कानूनी सारांश दिया जाना चाहिए?", opts: ["की इंफॉर्मेशन मेमोरैंडम (KIM)", "मूल कॉर्पोरेट प्रायोजक के पूर्ण वित्तीय बहीखाता विवरण", "नामित पोर्टफोलियो प्रबंधक के व्यक्तिगत कर फाइलिंग रिकॉर्ड", "कमोडिटी गोदाम भंडारण स्थानों का संरचनात्मक मानचित्र लेआउट"] },
            correct: 0
        },
        {
            en: { q: "What is an 'Arbitrageur' inside the financial ecosystem?", opts: ["A participant who simultaneously buys and sells an asset across different markets to exploit pricing discrepancies for risk-free profit", "A long-term micro-cap value asset investor tracking core fundamental accounting books", "A regulatory system inspector appointed directly via SEBI to audit network mainframes", "A high-leverage market speculator writing uncovered call options during calendar updates"] },
            hi: { q: "वित्तीय पारिस्थितिकी तंत्र के भीतर एक 'आर्बिट्रेजूर' (Arbitrageur) कौन होता है?", opts: ["एक भागीदार जो जोखिम मुक्त लाभ के लिए मूल्य विसंगतियों का लाभ उठाने के लिए विभिन्न बाजारों में एक साथ संपत्ति खरीदता और बेचता है", "मुख्य मौलिक लेखा पुस्तकों को ट्रैक करने वाला एक दीर्घकालिक माइक्रो-कैप मूल्य संपत्ति निवेशक", "नेटवर्क मेनफ्रेम का ऑडिट करने के लिए सेबी के माध्यम से सीधे नियुक्त एक नियामक प्रणाली निरीक्षक", "कैलेंडर अपडेट के दौरान अनकवर्ड कॉल ऑप्शंस लिखने वाला एक उच्च-लीवरेज बाजार सटोरिया"] },
            correct: 0
        },
        {
            en: { q: "Inside the commodity derivatives marketplace, what sector classification covers resources such as crude oil and natural gas?", opts: ["Energy Complex", "Base Metals Wing", "Bullion Segment", "Agri-Commodities Category"] },
            hi: { q: "कमोडिटी डेरिवेटिव्स बाजार के भीतर, कच्चे तेल (Crude oil) और प्राकृतिक गैस (Natural gas) जैसे संसाधनों को कौन सा क्षेत्र वर्गीकरण कवर करता है?", opts: ["ऊर्जा परिसर (Energy Complex)", "बेस मेटल्स विंग", "बुलियन सेगमेंट", "कृषि-कमोडिटी श्रेणी"] },
            correct: 0
        },
        {
            en: { q: "What is the primary investment mandate of a 'Gilt Fund' inside the debt mutual fund product category?", opts: ["To deploy a minimum of 80% of asset assets in sovereign government securities carrying zero credit risk profiles", "To maximize dynamic yield by trading volatile small-cap technology equities", "To capture risk-free pricing profits from physical gold spot markets across states", "To finance cross-border commercial real estate projects managed under global syndicates"] },
            hi: { q: "डेट म्यूचुअल फंड उत्पाद श्रेणी के भीतर 'गिल्ट फंड' (Gilt Fund) का प्राथमिक निवेश अधिदेश क्या है?", opts: ["शून्य क्रेडिट जोखिम प्रोफाइल वाली संप्रभु सरकारी प्रतिभूतियों (Government securities) में न्यूनतम 80% परिसंपत्ति निवेश करना", "अस्थिर स्मॉल-कैप टेक्नोलॉजी इक्विटी का व्यापार करके गतिशील उपज को अधिकतम करना", "राज्यों में भौतिक सोने के हाजिर बाजारों से जोखिम मुक्त मूल्य निर्धारण लाभ प्राप्त करना", "वैश्विक सिंडिकेट के तहत प्रबंधित सीमा पार वाणिज्यिक रियल एस्टेट परियोजनाओं को वित्तपोषित करना"] },
            correct: 0
        },
        {
            en: { q: "In life insurance contracts, what occurs under the standard 'Suicide Clause' if the insured person commits suicide within 12 months of policy issuance?", opts: ["The full sum insured is void; only a refund of the premiums paid (typically 80% or higher) is returned to the nominee", "The absolute death benefit sum insured is paid compulsorily following judicial court interventions", "The entire policy asset switches ownership dynamically to the state civil treasury wing", "The contract converts into an open-ended dynamic annuity bond backed via central oversight"] },
            hi: { q: "जीवन बीमा अनुबंधों में, यदि बीमित व्यक्ति पॉलिसी जारी होने के 12 महीनों के भीतर आत्महत्या कर लेता है, तो मानक 'सुसाइड क्लॉज' (Suicide Clause) के तहत क्या होता है?", opts: ["पूर्ण बीमित राशि शून्य है; नामांकित व्यक्ति को केवल भुगतान किए गए प्रीमियम का रिफंड (आमतौर पर 80% या अधिक) वापस किया जाता है", "अदालती हस्तक्षेप के बाद पूर्ण मृत्यु लाभ बीमित राशि का अनिवार्य रूप से भुगतान किया जाता है", "पूरी पॉलिसी परिसंपत्ति स्वचालित रूप से राज्य नागरिक ट्रेजरी विंग में स्थानांतरित हो जाती है", "अनुबंध केंद्रीय निरीक्षण के माध्यम से समर्थित एक ओपन-एंडेड गतिशील वार्षिकी बांड में परिवर्तित हो जाता है"] },
            correct: 0
        },
        {
            en: { q: "What metric measures the historical price sensitivity or structural market risk of an equity share or mutual fund portfolio relative to the broader market index?", opts: ["Beta Coefficient", "Alpha Tracker Framework", "Standard Deviation Scale Layout", "Information Ratio Factor Slabs"] },
            hi: { q: "कौन सा मीट्रिक व्यापक बाजार सूचकांक के सापेक्ष किसी इक्विटी शेयर या म्यूचुअल फंड पोर्टफोलियो के ऐतिहासिक मूल्य संवेदनशीलता या संरचनात्मक बाजार जोखिम को मापता है?", opts: ["बीटा गुणांक (Beta Coefficient)", "अल्फा ट्रैकर ढांचा", "मानक विचलन पैमाना लेआउट", "सूचना अनुपात कारक स्लैब"] },
            correct: 0
        },
        {
            en: { q: "Which statutory institution compiles, evaluates, and publishes the official foreign exchange daily Reference Rates for core currency pairs in India?", opts: ["Financial Benchmarks India Pvt. Ltd. (FBIL)", "The Securities and Exchange Board of India Main Compliance Desk", "State Bank of India Institutional Forex Trade Wing", "Ministry of Commerce Foreign Exchange Monitoring Bureau Desk"] },
            hi: { q: "भारत में मुख्य मुद्रा जोड़ों के लिए आधिकारिक विदेशी मुद्रा दैनिक संदर्भ दरें (Reference Rates) कौन सी वैधानिक संस्था संकलित, मूल्यांकित और प्रकाशित करती है?", opts: ["फाइनेंशियल बेंचमार्क इंडिया प्राइवेट लिमिटेड (FBIL)", "भारतीय प्रतिभूति और विनिमय बोर्ड मुख्य अनुपालन डेस्क", "भारतीय स्टेट班क संस्थागत विदेशी मुद्रा व्यापार विंग", "वाणिज्य मंत्रालय विदेशी मुद्रा निगरानी ब्यूरो डेस्क"] },
            correct: 0
        },
        {
            en: { q: "What does an insurance 'Deductible' represent in standard non-life corporate insurance claims?", opts: ["A pre-determined loss threshold amount that the insured must pay out-of-pocket before the insurer settles the remaining liability share", "The structural customer loyalty discount offered during annual renewal cycles", "The commission distribution blueprint mapped to licensed field distribution agents", "The statutory processing tax tariff assessed across cross-border reinsurance grids"] },
            hi: { q: "मानक गैर-जीवन कॉर्पोरेट बीमा दावों में बीमा 'डीडक्टिबल' (Deductible) क्या दर्शाता है?", opts: ["एक पूर्व-निर्धारित नुकसान सीमा राशि जो बीमाकर्ता द्वारा शेष देयता हिस्सेदारी का निपटान करने से पहले बीमित व्यक्ति को अपनी जेब से चुकानी होगी", "वार्षिक नवीनीकरण चक्रों के दौरान दी जाने वाली संरचनात्मक ग्राहक वफादारी छूट", "लाइसेंस प्राप्त क्षेत्र वितरण एजेंटों के लिए मैप किया गया कमीशन वितरण ब्लूप्रिंट", "सीमा पार पुनर्बीमा ग्रिड में मूल्यांकित वैधानिक प्रसंस्करण कर टैरिफ"] },
            correct: 0
        },
        {
            en: { q: "In the mutual fund architecture, who holds the core financial assets and securities of a scheme in safe custody to prevent asset misappropriation by the AMC?", opts: ["The Custodian bank", "The Sponsor corporation network", "The Registrar and Transfer Agent (RTA)", "The Board of Independent Trustees Group"] },
            hi: { q: "म्यूचुअल फंड आर्किटेक्चर में, एएमसी द्वारा परिसंपत्ति के दुरुपयोग को रोकने के लिए किसी योजना की मुख्य वित्तीय संपत्तियों और प्रतिभूतियों को सुरक्षित अभिरक्षा (Safe custody) में कौन रखता है?", opts: ["कस्टोडियन बैंक (The Custodian bank)", "प्रायोजक निगम नेटवर्क", "रजिस्ट्रार और ट्रांसफर एजेंट (RTA)", "स्वतंत्र ट्रस्टी समूह बोर्ड"] },
            correct: 0
        },
        {
            en: { q: "What trading strategy is formulated when an investor simultaneously buys an At-the-Money (ATM) Call option and an At-the-Money (ATM) Put option on the identical asset with matching expiry?", opts: ["Long Straddle", "Long Strangle Combinations", "Short Straddle Layout", "Bull Call Spread Matrix"] },
            hi: { q: "जब एक निवेशक समान समाप्ति के साथ एक ही संपत्ति पर एक साथ एक एट-द-मनी (ATM) कॉल ऑप्शन और एक एट-द-मनी (ATM) पुट ऑप्शन खरीदता है, तो कौन सी ट्रेडिंग रणनीति बनती है?", opts: ["लॉन्ग स्ट्रैडल (Long Straddle)", "लॉन्ग स्ट्रैंगल संयोजन", "शॉर्ट स्ट्रैडल लेआउट", "बुल कॉल स्प्रेड मैट्रिक्स"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI mutual fund guidelines, close-ended schemes must provide liquidity pathways to retail investors through what channel after the NFO concludes?", opts: ["Mandatory listing and secondary trading capabilities on a recognized stock exchange platform", "Daily direct redemption window features operated at physical AMC corporate head office counters", "Automatic structural conversions into sovereign high-yield infrastructure credit bonds", "Interstate money market commercial line swap configuration access points"] },
            hi: { q: "सेबी म्यूचुअल फंड दिशानिर्देशों के तहत, एनएफओ समाप्त होने के बाद क्लोज-एंडेड योजनाओं को किस चैनल के माध्यम से खुदरा निवेशकों को तरलता मार्ग प्रदान करना चाहिए?", opts: ["एक मान्यता प्राप्त स्टॉक एक्सचेंज प्लेटफॉर्म पर अनिवार्य लिस्टिंग और द्वितीयक व्यापार (Secondary trading) क्षमताएं", "भौतिक एएमसी कॉर्पोरेट प्रधान कार्यालय काउंटरों पर संचालित दैनिक प्रत्यक्ष रिडेम्पशन विंडो सुविधाएं", "संप्रभु उच्च उपज वाले बुनियादी ढांचा क्रेडिट बांड में स्वचालित संरचनात्मक रूपांतरण", "अंतरराज्यीय मुद्रा बाजार वाणिज्यिक लाइन स्वैप कॉन्फ़िगरेशन एक्सेस पॉइंट"] },
            correct: 0
        },
        {
            en: { q: "What does the valuation multiple 'P/E Ratio' quantify inside fundamental equity stock research?", opts: ["Price-to-Earnings Ratio", "Profit-to-Expense Operational Slabs", "Premium-to-Equity Standard Coefficient", "Public-to-Exchange Asset Allocation Parameter"] },
            hi: { q: "मौलिक इक्विटी स्टॉक अनुसंधान के भीतर मूल्यांकन मल्टीपल 'P/E Ratio' क्या दर्शाता है?", opts: ["प्राइस-टू-अर्निंग रेशियो (Price-to-Earnings Ratio)", "प्रॉफिट-टू-एक्सपेंस ऑपरेशनल स्लैब", "प्रीमियम-टू-इक्विटी मानक गुणांक", "पब्लिक-टू-एक्सचेंज एसेट एलोकेशन पैरामीटर"] },
            correct: 0
        },
        {
            en: { q: "In commodity derivatives trading frameworks, what is the market pricing state known as 'Backwardation'?", opts: ["A market layout where the near-term physical spot price trades higher than its corresponding futures contract price", "A state where the derivatives futures price expands infinitely above the current spot value", "A structural balance condition where warehouse storage costs drop down to absolute zero margins", "The mandatory execution phase of underlying contract conversions inside clearing house setups"] },
            hi: { q: "कमोडिटी डेरिवेटिव्स ट्रेडिंग फ्रेमवर्क में, 'बैकवर्डेशन' (Backwardation) के रूप में जानी जाने वाली बाजार मूल्य निर्धारण स्थिति क्या है?", opts: ["एक बाजार लेआउट जहां निकट-अवधि का भौतिक हाजिर मूल्य उसके संबंधित फ्यूचर्स अनुबंध मूल्य से अधिक पर ट्रेड करता है", "एक ऐसी स्थिति जहां डेरिवेटिव फ्यूचर्स मूल्य वर्तमान हाजिर मूल्य से ऊपर असीमित रूप से बढ़ता है", "एक संरचनात्मक संतुलन स्थिति जहां गोदाम भंडारण लागत पूर्ण शून्य मार्जिन तक गिर जाती है", "क्लियरिंग हाउस सेटअप के अंदर अंतर्निहित अनुबंध रूपांतरणों का अनिवार्य निष्पादन चरण"] },
            correct: 0
        },
        {
            en: { q: "Under the Insurance Act, 1938, what section mandates that a life policy cannot be called into question by the insurer on grounds of misstatement after 3 years have lapsed?", opts: ["Section 45 (Indisputability Regulation)", "Section 41 (Anti-Rebate Enforcements)", "Section 39 (Nomination Framework Slabs)", "Section 27 (Investment Compliance Ledger)"] },
            hi: { q: "बीमा अधिनियम, 1938 के तहत, कौन सी धारा यह निर्देश देती है कि ३ वर्ष बीत जाने के बाद गलत बयानी के आधार पर बीमाकर्ता द्वारा जीवन पॉलिसी को चुनौती नहीं दी जा सकती?", opts: ["धारा 45 (Section 45 - Indisputability Regulation)", "धारा 41 (एंटी-रिबेट प्रवर्तन)", "धारा 39 (नामांकन ढांचा स्लैब)", "धारा 27 (निवेश अनुपालन बहीखाता)"] },
            correct: 0
        },
        {
            en: { q: "What is the primary corporate role of an 'Underwriter' within an insurance enterprise?", opts: ["To assess the risk profile of an applicant and establish correct premium pricing terms or decline risk acceptance", "To design international branding campaigns across cross-border web platform networks", "To orchestrate legal settlements inside corporate consumer dispute arbitration cells", "To process compound loyalty bonus point payouts to database nominees post maturity cycles"] },
            hi: { q: "एक बीमा उद्यम के भीतर 'अंडरराइटर' (Underwriter) की प्राथमिक कॉर्पोरेट भूमिका क्या है?", opts: ["एक आवेदक के जोखिम प्रोफाइल का मूल्यांकन करना और सही प्रीमियम मूल्य निर्धारण शर्तें स्थापित करना या जोखिम स्वीकृति को अस्वीकार करना", "सीमा पार वेब प्लेटफॉर्म नेटवर्क पर अंतर्राष्ट्रीय ब्रांडिंग अभियानों को डिज़ाइन करना", "कॉर्पोरेट उपभोक्ता विवाद मध्यस्थता सेल के भीतर कानूनी बस्तियों को व्यवस्थित करना", "परिपक्वता चक्र के बाद डेटाबेस नामांकित व्यक्तियों को चक्रवृद्धि वफादारी बोनस अंक भुगतान संसाधित करना"] },
            correct: 0
        },
        {
            en: { q: "In the Indian mutual fund industry, what parameters define a 'Liquid Fund' scheme allocation?", opts: ["An open-ended debt product deploying capital exclusively in short-term money market instruments with maturity up to 91 days", "An active high-growth equity allocation focused on international software startup stocks", "A passive commodity tracking investment tool mapped to physical baseline asset registries", "A structural tax vehicle carrying a mandatory 5-year capital lock-in profile blueprint"] },
            hi: { q: "भारतीय म्यूचुअल फंड उद्योग में, कौन से पैरामीटर 'लिक्विड फंड' (Liquid Fund) योजना आवंटन को परिभाषित करते हैं?", opts: ["एक ओपन-एंडेड डेट उत्पाद जो विशेष रूप से 91 दिनों तक की परिपक्वता वाले अल्पकालिक मुद्रा बाजार उपकरणों में पूंजी लगाता है", "अंतरराष्ट्रीय सॉफ्टवेयर स्टार्टअप शेयरों पर केंद्रित एक सक्रिय उच्च-विकास इक्विटी आवंटन", "भौतिक आधारभूत परिसंपत्ति रजिस्ट्रियों के लिए मैप किया गया एक पैसिव कमोडिटी ट्रैकिंग निवेश उपकरण", "अनिवार्य 5-वर्षीय पूंजी लॉक-इन प्रोफाइल ब्लूप्रिंट वाला एक संरचनात्मक कर वाहन"] },
            correct: 0
        },
        {
            en: { q: "What does the option Greek 'Tracking Alpha' reflect for a fund layout?", opts: ["The active return outperformance generated over the benchmark index relative to the systematic beta risk profile", "The percentage velocity of capital depreciation monitored across out-of-the-money options brackets", "The interest index variation monitored via central banking repo update logs across quarters", "The absolute volume discrepancy evaluated inside physical asset storage pipelines"] },
            hi: { q: "एक फंड लेआउट के लिए वित्तीय मीट्रिक 'अल्फा' (Alpha) क्या दर्शाता है?", opts: ["व्यवस्थित बीटा जोखिम प्रोफाइल के सापेक्ष बेंचमार्क इंडेक्स पर उत्पन्न सक्रिय आउटपरफॉर्मेंस रिटर्न", "आउट-ऑफ-the-मनी ऑप्शंस ब्रैकेट में मॉनिटर की गई पूंजी मूल्यह्रास की प्रतिशत गति", "तिमाहियों में केंद्रीय बैंकिंग रेपो अपडेट लॉग के माध्यम से निगरानी की जाने वाली ब्याज सूचकांक भिन्नता", "भौतिक संपत्ति भंडारण पाइपलाइनों के भीतर मूल्यांकित पूर्ण मात्रा विसंगति"] },
            correct: 0
        },
        {
            en: { q: "Which type of life insurance contract supplies comprehensive financial death protection spanning the entire lifecycle up to 100 years of age?", opts: ["Whole Life Insurance Slabs", "Pure Term Insurance Cover", "Endowment Asset Protection Plan", "Variable Unit Linked Premium Array"] },
            hi: { q: "किस प्रकार का जीवन बीमा अनुबंध 100 वर्ष की आयु तक पूरे जीवनचक्र में व्यापक वित्तीय मृत्यु सुरक्षा प्रदान करता है?", opts: ["संपूर्ण जीवन बीमा स्लैब (Whole Life Insurance Slabs)", "शुद्ध टर्म इंश्योरेंस कवर", "एंडोमेंट संपत्ति संरक्षण योजना", "वेरिएबल यूनिट लिंक्ड प्रीमियम एरे"] },
            correct: 0
        },
        {
            en: { q: "In physical commodity futures asset configurations, what does a 'Contango' structure indicate?", opts: ["A market state where futures contract prices trade at a premium over physical spot indicators, capturing storage and interest carry overheads", "A structural near-term asset deficit spiking exchange indices infinitely higher", "The permanent cancellation of options premium calculations by clearing registry centers", "A horizontal baseline where spot and derivatives indices converge at absolute zero margins"] },
            hi: { q: "भौतिक कमोडिटी फ्यूचर्स परिसंपत्ति कॉन्फ़िगरेशन में, 'कंतैंगो' (Contango) संरचना क्या दर्शाती है?", opts: ["एक बाजार स्थिति जहां फ्यूचर्स अनुबंध कीमतें भौतिक हाजिर संकेतकों पर प्रीमियम पर ट्रेड करती हैं, जो भंडारण और ब्याज वहन ओवरहेड्स को दर्शाती हैं", "एक संरचनात्मक निकट-अवधि परिसंपत्ति घाटा जो एक्सचेंज सूचकांकों को असीमित रूप से ऊपर ले जाता है", "क्लियरिंग रजिस्ट्री केंद्रों द्वारा ऑप्शन प्रीमियम गणना का स्थायी रद्दीकरण", "एक क्षैतिज बेसलाइन जहां हाजिर और डेरिवेटिव सूचकांक पूर्ण शून्य मार्जिन पर विलीन हो जाते हैं"] },
            correct: 0
        },
        {
            en: { q: "What does the option Greek 'Delta' evaluate precisely inside derivative pricing layouts?", opts: ["The expected shift in an option's premium for a 1-unit modification inside the underlying asset price", "The deterioration pace of time values tracked across out-of-the-money contract brackets", "The structural percentage change driven by adjustment layers inside central bank repo metrics", "The core correlation threshold mapping physical gold spot values to warehouse receipts"] },
            hi: { q: "डेरिवेटिव मूल्य निर्धारण लेआउट के भीतर ऑप्शन ग्रीक 'डेल्टा' (Delta) सटीक रूप से किसका मूल्यांकन करता है?", opts: ["अंतर्निहित परिसंपत्ति की कीमत में 1-इकाई के संशोधन के लिए ऑप्शन के प्रीमियम में अपेक्षित बदलाव", "आउट-ऑफ-द-मनी अनुबंध ब्रैकेट में ट्रैक किए गए समय मूल्यों की गिरावट की गति", "केंद्रीय बैंक रेपो मेट्रिक्स के अंदर समायोजन परतों द्वारा संचालित संरचनात्मक प्रतिशत परिवर्तन", "भौतिक सोने के हाजिर मूल्यों को गोदाम रसीदों से मैप करने वाली मुख्य सहसंबंध सीमा"] },
            correct: 0
        },
        {
            en: { q: "Inside the exchange derivatives trading framework, what process guarantees the daily operational mitigation of counterparty default risks?", opts: ["Mark-to-Market (MTM) daily financial settlement adjustment", "The standard collection of administrative systems re-verification login audit fees", "The dynamic warehouse grading checks applied to core physical metals cargo pipelines", "The compliance registry clearance steps executed during public initial stock IPO offerings"] },
            hi: { q: "एक्सचेंज डेरिवेटिव ट्रेडिंग ढांचे के भीतर, कौन सी प्रक्रिया काउंटरपार्टी डिफ़ॉल्ट जोखिमों के दैनिक परिचालन शमन की गारंटी देती है?", opts: ["मार्क-टू-मार्केट (MTM) दैनिक वित्तीय निपटान समायोजन", "प्रशासनिक प्रणाली पुनर्सत्यापन लॉगिन ऑडिट शुल्क का मानक संग्रह", "मुख्य भौतिक धातु कार्गो पाइपलाइनों पर लागू गतिशील गोदाम ग्रेडिंग जांच", "सार्वजनिक प्रारंभिक स्टॉक आईपीओ पेशकशों के दौरान निष्पादित अनुपालन रजिस्ट्री क्लीयरेंस चरण"] },
            correct: 0
        },
        {
            en: { q: "What is meant by the principle of 'Insurable Interest' when purchasing an insurance policy?", opts: ["The purchaser must experience direct financial loss or legal hardship upon the damage or death of the subject matter", "The compound interest rate metric guaranteed via commercial banks on annuity cash values", "The dynamic premium multiplier scale generated inside core underlying credit investment blocks", "The legislative internal revenue tax deduction capability managed under civil codes"] },
            hi: { q: "बीमा पॉलिसी खरीदते समय 'बीमायोग्य हित' (Insurable Interest) के सिद्धांत से क्या तात्पर्य है?", opts: ["विषय वस्तु के नुकसान या मृत्यु पर खरीदार को प्रत्यक्ष वित्तीय नुकसान या कानूनी कठिनाई का अनुभव होना चाहिए", "वार्षिकी नकद मूल्यों पर वाणिज्यिक बैंकों के माध्यम से गारंटीकृत चक्रवृद्धि ब्याज दर मीट्रिक", "मुख्य अंतर्निहित क्रेडिट निवेश ब्लॉकों के अंदर उत्पन्न गतिशील प्रीमियम गुणक पैमाना", "सिविल कोड के तहत प्रबंधित विधायी आंतरिक राजस्व कर कटौती क्षमता"] },
            correct: 0
        },
        {
            en: { q: "Which format of options execution allows the contract owner to exercise their derivative rights at any moment up to and including the expiration date?", opts: ["American Option", "European Option Setup", "Bermudan Choice Layout", "Binary Asian Option Array"] },
            hi: { q: "ऑप्शंस निष्पादन का कौन सा प्रारूप अनुबंध के मालिक को समाप्ति तिथि तक किसी भी क्षण अपने डेरिवेटिव अधिकारों का उपयोग करने की अनुमति देता है?", opts: ["अमेरिकन ऑप्शन (American Option)", "यूरोपियन ऑप्शन सेटअप", "बरमूडन चॉइस लेआउट", "बाइनरी एशियन ऑप्शन एरे"] },
            correct: 0
        },
        {
            en: { q: "What options position combines a short call option along with holding an equivalent quantity of the underlying equity stock?", opts: ["Covered Call", "Naked Short Straddle Layout", "Protective Put Framework", "Bear Call Spread Combination"] },
            hi: { q: "कौन सी ऑप्शंस पोजीशन अंतर्निहित इक्विटी स्टॉक की समकक्ष मात्रा रखने के साथ एक शॉर्ट कॉल ऑप्शन को जोड़ती है?", opts: ["कवर्ड कॉल (Covered Call)", "नेकेड शॉर्ट स्ट्रैडल लेआउट", "प्रोटेक्टिव पुट फ्रेमवर्क", "बियर कॉल स्प्रेड संयोजन"] },
            correct: 0
        },
        // --- NISM / IRDAI Comprehensive Mock Test: All Modules Shuffled (Set 9) ---
        {
            en: { q: "What does the option Greek 'Theta' measure in derivative options contracts pricing?", opts: ["The rate at which an option's premium time value decays as it approaches expiration, assuming other factors remain constant", "The acceleration metric of contract premium velocity relative to spot adjustments", "The asset sensitivity to macroeconomic interest benchmark shifts executed by central bank operations", "The structural volatility variance managed across clearing house accounting grids"] },
            hi: { q: "डेरिवेटिव ऑप्शंस अनुबंधों के मूल्य निर्धारण में ऑप्शन ग्रीक 'थिटा' (Theta) क्या मापता है?", opts: ["वह दर जिस पर किसी ऑप्शन का प्रीमियम समय मूल्य (Time value) समाप्ति के करीब पहुंचने पर घटता है, यह मानते हुए कि अन्य कारक स्थिर हैं", "हाजिर समायोजन के सापेक्ष अनुबंध प्रीमियम वेग का त्वरण मीट्रिक", "केंद्रीय बैंक के संचालन द्वारा निष्पादित व्यापक आर्थिक ब्याज बेंचमार्क बदलावों के प्रति परिसंपत्ति संवेदनशीलता", "क्लियरिंग校स लेखांकन ग्रिड में प्रबंधित संरचनात्मक अस्थिरता विचरण"] },
            correct: 0
        },
        {
            en: { q: "Inside the insurance sector, what does the specific term 'Moral Hazard' refer to?", opts: ["An increase in the probability or severity of loss due to the dishonest behavior or careless attitude of the insured person after getting policy coverage", "The structural calculation variations monitored dynamically across premium tax collections", "The natural physical decay parameters evaluated over a structural lifecycle tracker", "The risk of statutory fines post corporate compliance execution failures"] },
            hi: { q: "बीमा क्षेत्र के भीतर, विशिष्ट शब्द 'नैतिक संकट' (Moral Hazard) किसे संदर्भित करता है?", opts: ["पॉलिसी कवरेज मिलने के बाद बीमित व्यक्ति के बेईमान व्यवहार या लापरवाही के कारण नुकसान की संभावना या गंभीरता में वृद्धि", "प्रीमियम कर संग्रह में गतिशील रूप से निगरानी किए जाने वाले संरचनात्मक गणना भिन्नता", "संरचनात्मक जीवनचक्र ट्रैकर पर मूल्यांकित प्राकृतिक भौतिक क्षय पैरामीटर", "कॉर्पोरेट अनुपालन निष्पादन विफलताओं के बाद वैधानिक जुर्माने का जोखिम"] },
            correct: 0
        },
        {
            en: { q: "In exchange-traded currency derivatives, what entity acts as the legal central counterparty to guarantee the fulfillment of every contract trade?", opts: ["The Exchange-Accredited Clearing Corporation", "The Reserve Bank of India Treasury Operation Bureau", "The Association of Mutual Funds in India Central Core Desk", "The Lead Brokerage Syndicate Risk Management Counter"] },
            hi: { q: "एक्सचेंज-ट्रेडेड मुद्रा डेरिवेटिव में, प्रत्येक अनुबंध व्यापार की पूर्ति की गारंटी देने के लिए कौन सी संस्था कानूनी केंद्रीय काउंटरपार्टी के रूप में कार्य करती है?", opts: ["एक्सचेंज-मान्यता प्राप्त क्लियरिंग कॉरपोरेशन (Clearing Corporation)", "भारतीय रिजर्व बैंक ट्रेजरी ऑपरेशन ब्यूरो", "एसोसिएशन ऑफ म्यूचुअल फंड्स इन इंडिया सेंट्रल कोर डेस्क", "लीड ब्रोकरेज सिंडिकेट जोखिम प्रबंधन काउंटर"] },
            correct: 0
        },
        {
            en: { q: "What type of mutual fund asset class dynamically rebalances its portfolio allocation between equity and debt securities based on changing market valuations?", opts: ["Balanced Advantage Fund (Dynamic Asset Allocation Fund)", "Equity Linked Savings Scheme (ELSS Tax Vehicle)", "Gilt Fund with Central Sovereign Backing", "Sectoral / Thematic Infrastructure Scheme Portfolio"] },
            hi: { q: "परिवर्तनशील बाजार मूल्यांकनों के आधार पर कौन सा म्यूचुअल फंड एसेट क्लास इक्विटी और डेट प्रतिभूतियों के बीच अपने पोर्टफोलियो आवंटन को गतिशील रूप से पुनर्संतुलित करता है?", opts: ["बैलेंस्ड एडवांटेज फंड (Dynamic Asset Allocation Fund)", "इक्विटी लिंक्ड सेविंग्स स्कीम (ELSS Tax Vehicle)", "केंद्रीय संप्रभु समर्थन के साथ गिल्ट फंड", "सेक्टरल / थमैटिक इंफ्रास्ट्रक्चर योजना पोर्टफोलियो"] },
            correct: 0
        },
        {
            en: { q: "What does the 'Solvency Ratio' of an insurance company operating inside India represent?", opts: ["The metric evaluating an insurer's capital adequacy and structural capacity to meet long-term policyholder claims and corporate liabilities", "The total register count of active field distribution agents logged in databases", "The ratio of administrative overheads incurred relative to direct premiums collected", "The dynamic processing timeline threshold allocated to handle nomination benefits"] },
            hi: { q: "भारत के भीतर काम करने वाली बीमा कंपनी का 'सॉल्वेंसी रेशियो' (Solvency Ratio) क्या दर्शाता है?", opts: ["बीमाकर्ता की पूंजी पर्याप्तता और दीर्घकालिक पॉलिसीधारक दावों और कॉर्पोरेट देनदारियों को पूरा करने की संरचनात्मक क्षमता का मूल्यांकन करने वाला मीट्रिक", "डेटाबेस में लॉग इन सक्रिय फ़ील्ड वितरण एजेंटों की कुल रजिस्टर संख्या", "एकत्रित प्रत्यक्ष प्रीमियम के सापेक्ष किए गए प्रशासनिक ओवरहेड्स का अनुपात", "नामांकन लाभों को संभालने के लिए आवंटित गतिशील प्रसंस्करण समयसीमा सीमा"] },
            correct: 0
        },
        {
            en: { q: "In derivatives trading operations, executing a transaction that establishes a position completely identical but opposite to an existing open market position is called:", opts: ["Squaring Off", "Rolling Over", "Mark-to-Market Rebalancing Slabs", "Novation Protocol Exchange"] },
            hi: { q: "डेरिवेटिव ट्रेडिंग ऑपरेशन्स में, एक ऐसा लेनदेन निष्पादित करना जो मौजूदा ओपन接收बाजार पोजीशन के बिल्कुल समान लेकिन विपरीत पोजीशन स्थापित करता है, कहलाता है:", opts: ["स्क्वायरिंग ऑफ (Squaring Off)", "रोलिंग ओवर (Rolling Over)", "मार्क-टू-मार्केट रीबैलेंसिंग स्लैब", "नोवेशन प्रोटोकॉल एक्सचेंज"] },
            correct: 0
        },
        {
            en: { q: "What represents the structural lot size configuration for a standard USD-INR currency futures contract on recognized Indian derivatives exchanges?", opts: ["USD 1,000", "USD 10,000", "USD 5,000", "USD 100"] },
            hi: { q: "मान्यता प्राप्त भारतीय डेरिवेटिव एक्सचेंजों पर एक मानक USD-INR मुद्रा फ्यूचर्स अनुबंध के लिए संरचनात्मक लॉट आकार (Lot Size) क्या है?", opts: ["USD 1,000", "USD 10,000", "USD 5,000", "USD 100"] },
            correct: 0
        },
        {
            en: { q: "Which key parameter measures the complete turnover percentage of a mutual fund portfolio's stock assets bought and sold within a 1-year window?", opts: ["Portfolio Turnover Rate", "Expense Ratio Coefficient Layout", "Tracking Error Standard Variance Scale", "Sharpe Volatility Matrix Metric"] },
            hi: { q: "कौन सा मुख्य पैरामीटर 1-वर्ष की अवधि के भीतर खरीदे और बेचे गए म्यूचुअल फंड पोर्टफोलियो की stock परिसंपत्तियों के पूर्ण टर्नओवर प्रतिशत को मापता है?", opts: ["पोर्टफोलियो टर्नओवर रेट (Portfolio Turnover Rate)", "व्यय अनुपात गुणांक लेआउट", "ट्रैकिंग एरर मानक विचरण पैमाना", "शार्प वोलाटिलिटी मैट्रिक्स मीट्रिक"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI Mutual Fund rules, what mandatory legal summary containing core risk factors and fees must be given to a potential investor prior to subscription?", opts: ["Key Information Memorandum (KIM)", "The full financial ledger statements of the parent corporate sponsor", "The individual tax filing records of the designated portfolio manager", "The structural map layout of commodity warehouse storage locations"] },
            hi: { q: "सेबी म्यूचुअल फंड नियमों के तहत, सदस्यता से पहले किसी संभावित निवेशक को मुख्य जोखिम कारकों और शुल्कों वाला कौन सा अनिवार्य कानूनी सारांश दिया जाना चाहिए?", opts: ["की इंफॉर्मेशन मेमोरैंडम (KIM)", "मूल कॉर्पोरेट प्रायोजक के पूर्ण वित्तीय बहीखाता विवरण", "नामित पोर्टफोलियो प्रबंधक के व्यक्तिगत कर फाइलिंग रिकॉर्ड", "कमोडिटी गोदाम भंडारण स्थानों का संरचनात्मक मानचित्र लेआउट"] },
            correct: 0
        },
        {
            en: { q: "What is an 'Arbitrageur' inside the financial ecosystem?", opts: ["A participant who simultaneously buys and sells an asset across different markets to exploit pricing discrepancies for risk-free profit", "A long-term micro-cap value asset investor tracking core fundamental accounting books", "A regulatory system inspector appointed directly via SEBI to audit network mainframes", "A high-leverage market speculator writing uncovered call options during calendar updates"] },
            hi: { q: "वित्तीय पारिस्थितिकी तंत्र के भीतर एक 'आर्बिट्रिजूर' (Arbitrageur) कौन होता है?", opts: ["एक भागीदार जो जोखिम मुक्त लाभ के लिए मूल्य विसंगतियों का लाभ उठाने के लिए विभिन्न बाजारों में एक साथ संपत्ति खरीदता और बेचता है", "मुख्य मौलिक लेखा पुस्तकों को ट्रैक करने वाला एक दीर्घकालिक माइक्रो-कैप मूल्य संपत्ति निवेशक", "नेटवर्क मेनफ्रेम का ऑडिट करने के लिए सेबी के माध्यम से सीधे नियुक्त एक नियामक प्रणाली निरीक्षक", "कैलेंडर अपडेट के दौरान अनकवर्ड कॉल ऑप्शंस लिखने वाला एक उच्च-लीवरेज बाजार सटोरिया"] },
            correct: 0
        },
        {
            en: { q: "Inside the commodity derivatives marketplace, what sector classification covers resources such as crude oil and natural gas?", opts: ["Energy Complex", "Base Metals Wing", "Bullion Segment", "Agri-Commodities Category"] },
            hi: { q: "कमोडिटी डेरिवेटिव्स बाजार के भीतर, कच्चे तेल (Crude oil) और प्राकृतिक गैस (Natural gas) जैसे संसाधनों को कौन सा क्षेत्र वर्गीकरण कवर करता है?", opts: ["ऊर्जा परिसर (Energy Complex)", "बेस मेटल्स विंग", "बुलियन सेगमेंट", "कृषि-कमोडिटी श्रेणी"] },
            correct: 0
        },
        {
            en: { q: "What is the primary investment mandate of a 'Gilt Fund' inside the debt mutual fund product category?", opts: ["To deploy a minimum of 80% of net assets in sovereign government securities carrying zero credit risk profiles", "To maximize dynamic yield by trading volatile small-cap technology equities", "To capture risk-free pricing profits from physical gold spot markets across states", "To finance cross-border commercial real estate projects managed under global syndicates"] },
            hi: { q: "डेट म्यूचुअल फंड उत्पाद श्रेणी के भीतर 'गिल्ट फंड' (Gilt Fund) का प्राथमिक निवेश अधिदेश क्या है?", opts: ["शून्य क्रेडिट जोखिम प्रोफाइल वाली संप्रभु सरकारी प्रतिभूतियों (Government securities) में न्यूनतम 80% परिसंपत्ति निवेश करना", "अस्थिर स्मॉल-कैप टेक्नोलॉजी इक्विटी का व्यापार करके गतिशील उपज को अधिकतम करना", "राज्यों में भौतिक सोने के हाजिर बाजारों से जोखिम मुक्त मूल्य निर्धारण लाभ प्राप्त करना", "वैश्विक सिंडिकेट के तहत प्रबंधित सीमा पार वाणिज्यिक रियल एस्टेट परियोजनाओं को वित्तपोषित करना"] },
            correct: 0
        },
        {
            en: { q: "In life insurance contracts, what occurs under the standard 'Suicide Clause' if the insured person commits suicide within 12 months of policy issuance?", opts: ["The full sum insured is void; only a refund of the premiums paid (typically 80% or higher) is returned to the nominee", "The absolute death benefit sum insured is paid compulsorily following judicial court interventions", "The entire policy asset switches ownership dynamically to the state civil treasury wing", "The contract converts into an open-ended dynamic annuity bond backed via central oversight"] },
            hi: { q: "जीवन बीमा अनुबंधों में, यदि बीमित व्यक्ति पॉलिसी जारी होने के 12 महीनों के भीतर आत्महत्या कर लेता है, तो मानक 'सुसाइड क्लॉज' (Suicide Clause) के तहत क्या होता है?", opts: ["पूर्ण बीमित राशि शून्य है; नामांकित व्यक्ति को केवल भुगतान किए गए प्रीमियम का रिफंड (आमतौर पर 80% या अधिक) वापस किया जाता है", "अदालती हस्तक्षेप के बाद पूर्ण मृत्यु लाभ बीमित राशि का अनिवार्य रूप से भुगतान किया जाता है", "पूरी पॉलिसी परिसंपत्ति स्वचालित रूप से राज्य नागरिक ट्रेजरी विंग में स्थानांतरित हो जाती है", "अनुबंध केंद्रीय निरीक्षण के माध्यम से समर्थित एक ओपन-एंडेड गतिशील वार्षिकी बांड में परिवर्तित हो जाता है"] },
            correct: 0
        },
        {
            en: { q: "What metric measures the historical price sensitivity or structural market risk of an equity share or mutual fund portfolio relative to the broader market index?", opts: ["Beta Coefficient", "Alpha Tracker Framework", "Standard Deviation Scale Layout", "Information Ratio Factor Slabs"] },
            hi: { q: "कौन सा मीट्रिक व्यापक बाजार सूचकांक के सापेक्ष किसी इक्विटी शेयर या म्यूचुअल फंड पोर्टफोलियो के ऐतिहासिक मूल्य संवेदनशीलता या संरचनात्मक बाजार जोखिम को मापता है?", opts: ["बीटा गुणांक (Beta Coefficient)", "अल्फा ट्रैकर ढांचा", "मानक विचलन पैमाना लेआउट", "सूचना अनुपात कारक स्लैब"] },
            correct: 0
        },
        {
            en: { q: "Which statutory institution compiles, evaluates, and publishes the official foreign exchange daily Reference Rates for core currency pairs in India?", opts: ["Financial Benchmarks India Pvt. Ltd. (FBIL)", "The Securities and Exchange Board of India Main Compliance Desk", "State Bank of India Institutional Forex Trade Wing", "Ministry of Commerce Foreign Exchange Monitoring Bureau Desk"] },
            hi: { q: "भारत में मुख्य मुद्रा जोड़ों के लिए आधिकारिक विदेशी मुद्रा दैनिक संदर्भ दरें (Reference Rates) कौन सी वैधानिक संस्था संकलित, मूल्यांकित और प्रकाशित करती है?", opts: ["फाइनेंशियल बेंचमार्क इंडिया प्राइवेट लिमिटेड (FBIL)", "भारतीय प्रतिभूति और विनिमय बोर्ड मुख्य अनुपालन डेस्क", "भारतीय स्टेट बैंक संस्थागत विदेशी मुद्रा व्यापार विंग", "वाणिज्य मंत्रालय विदेशी मुद्रा निगरानी ब्यूरो डेस्क"] },
            correct: 0
        },
        {
            en: { q: "What does an insurance 'Deductible' represent in standard non-life corporate insurance claims?", opts: ["A pre-determined loss threshold amount that the insured must pay out-of-pocket before the insurer settles the remaining liability share", "The structural customer loyalty discount offered during annual renewal cycles", "The commission distribution blueprint mapped to licensed field distribution agents", "The statutory processing tax tariff assessed across cross-border reinsurance grids"] },
            hi: { q: "मानक गैर-जीवन कॉर्पोरेट बीमा दावों में बीमा 'डीडक्टिबल' (Deductible) क्या दर्शाता है?", opts: ["एक पूर्व-निर्धारित नुकसान सीमा राशि जो बीमाकर्ता द्वारा शेष देयता हिस्सेदारी का निपटान करने से पहले बीमित व्यक्ति को अपनी जेब से चुकानी होगी", "वार्षिक नवीनीकरण चक्रों के दौरान दी जाने वाली संरचनात्मक ग्राहक वफादारी छूट", "लाइसेंस प्राप्त क्षेत्र वितरण एजेंटों के लिए मैप किया गया कमीशन वितरण ब्लूप्रिंट", "सीमा पार पुनर्बीमा ग्रिड में मूल्यांकित वैधानिक प्रसंस्करण कर टैरिफ"] },
            correct: 0
        },
        {
            en: { q: "In the mutual fund architecture, who holds the core financial assets and securities of a scheme in safe custody to prevent asset misappropriation by the AMC?", opts: ["The Custodian bank", "The Sponsor corporation network", "The Registrar and Transfer Agent (RTA)", "The Board of Independent Trustees Group"] },
            hi: { q: "म्यूचुअल फंड आर्किटेक्चर में, एएमसी द्वारा परिसंपत्ति के दुरुपयोग को रोकने के लिए किसी योजना की मुख्य वित्तीय संपत्तियों और प्रतिभूतियों को सुरक्षित अभिरक्षा (Safe custody) में कौन रखता है?", opts: ["कस्टोडियन बैंक (The Custodian bank)", "प्रायोजक निगम नेटवर्क", "रजिस्ट्रार और ट्रांसफर एजेंट (RTA)", "स्वतंत्र ट्रस्टी समूह बोर्ड"] },
            correct: 0
        },
        {
            en: { q: "What trading strategy is formulated when an investor simultaneously buys an At-the-Money (ATM) Call option and an At-the-Money (ATM) Put option on the identical asset with matching expiry?", opts: ["Long Straddle", "Long Strangle Combinations", "Short Straddle Layout", "Bull Call Spread Matrix"] },
            hi: { q: "जब एक निवेशक समान समाप्ति के साथ एक ही संपत्ति पर एक साथ एक एट-द-मनी (ATM) कॉल ऑप्शन और एक एट-द-मनी (ATM) पुट ऑप्शन खरीदता है, तो कौन सी ट्रेडिंग रणनीति बनती है?", opts: ["लॉन्ग स्ट्रैडल (Long Straddle)", "लॉन्ग स्ट्रैंगल संयोजन", "शॉर्ट स्ट्रैडल लेआउट", "बुल कॉल स्प्रेड मैट्रिक्स"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI mutual fund guidelines, close-ended schemes must provide liquidity pathways to retail investors through what channel after the NFO concludes?", opts: ["Mandatory listing and secondary trading capabilities on a recognized stock exchange platform", "Daily direct redemption window features operated at physical AMC corporate head office counters", "Automatic structural conversions into sovereign high-yield infrastructure credit bonds", "Interstate money market commercial line swap configuration access points"] },
            hi: { q: "सेबी म्यूचुअल फंड दिशानिर्देशों के तहत, एनएफओ समाप्त होने के बाद क्लोज-एंडेड योजनाओं को किस चैनल के माध्यम से खुदरा निवेशकों को तरलता मार्ग प्रदान करना चाहिए?", opts: ["एक मान्यता प्राप्त स्टॉक एक्सचेंज प्लेटफॉर्म पर अनिवार्य लिस्टिंग और द्वितीयक व्यापार (Secondary trading) क्षमताएं", "भौतिक एएमसी कॉर्पोरेट प्रधान कार्यालय काउंटरों पर संचालित दैनिक प्रत्यक्ष रिडेम्पशन विंडो सुविधाएं", "संप्रभु उच्च उपज वाले बुनियादी ढांचा क्रेडिट बांड में स्वचालित संरचनात्मक रूपांतरण", "अंतरराज्यीय मुद्रा बाजार वाणिज्यिक लाइन स्वैप कॉन्फ़िगरेशन एक्सेस पॉइंट"] },
            correct: 0
        },
        {
            en: { q: "What does the valuation multiple 'P/E Ratio' quantify inside fundamental equity stock research?", opts: ["Price-to-Earnings Ratio", "Profit-to-Expense Operational Slabs", "Premium-to-Equity Standard Coefficient", "Public-to-Exchange Asset Allocation Parameter"] },
            hi: { q: "मौलिक इक्विटी स्टॉक अनुसंधान के भीतर मूल्यांकन मल्टीपल 'P/E Ratio' क्या दर्शाता है?", opts: ["प्राइस-टू-अर्निंग रेशियो (Price-to-Earnings Ratio)", "प्रॉफिट-टू-एक्सपेंस ऑपरेशनल स्लैब", "प्रीमियम-टू-इक्विटी मानक गुणांक", "पब्लिक-टू-एक्सचेंज एसेट एलोकेशन पैरामीटर"] },
            correct: 0
        },
        {
            en: { q: "In commodity derivatives trading frameworks, what is the market pricing state known as 'Backwardation'?", opts: ["A market layout where the near-term physical spot price trades higher than its corresponding futures contract price", "A state where the derivatives futures price expands infinitely above the current spot value", "A structural balance condition where warehouse storage costs drop down to absolute zero margins", "The mandatory execution phase of underlying contract conversions inside clearing house setups"] },
            hi: { q: "कमोडिटी डेरिवेटिव्स ट्रेडिंग फ्रेमवर्क में, 'बैकवर्डेशन' (Backwardation) के रूप में जानी जाने वाली बाजार मूल्य निर्धारण स्थिति क्या है?", opts: ["एक बाजार लेआउट जहां निकट-अवधि का भौतिक हाजिर मूल्य उसके संबंधित फ्यूचर्स अनुबंध मूल्य से अधिक पर ट्रेड करता है", "एक ऐसी स्थिति जहां डेरिवेटिव फ्यूचर्स मूल्य वर्तमान हाजिर मूल्य से ऊपर असीमित रूप से बढ़ता है", "एक संरचनात्मक संतुलन स्थिति जहां गोदाम भंडारण लागत पूर्ण शून्य मार्जिन तक गिर जाती है", "क्लियरिंग हाउसकअप के अंदर अंतर्निहित अनुबंध रूपांतरणों का अनिवार्य निष्पादन चरण"] },
            correct: 0
        },
        {
            en: { q: "Under the Insurance Act, 1938, what section mandates that a life policy cannot be called into question by the insurer on grounds of misstatement after 3 years have lapsed?", opts: ["Section 45 (Indisputability Regulation)", "Section 41 (Anti-Rebate Enforcements)", "Section 39 (Nomination Framework Slabs)", "Section 27 (Investment Compliance Ledger)"] },
            hi: { q: "बीमा अधिनियम, 1938 के तहत, कौन सी धारा यह निर्देश देती है कि ३ वर्ष बीत जाने के बाद गलत बयानी के आधार पर बीमाकर्ता द्वारा जीवन पॉलिसी को चुनौती नहीं दी जा सकती?", opts: ["धारा 45 (Section 45 - Indisputability Regulation)", "धारा 41 (एंटी-रिबेट प्रवर्तन)", "धारा 39 (नामांकन ढांचा स्लैब)", "धारा 27 (निवेश अनुपालन बहीखाता)"] },
            correct: 0
        },
        {
            en: { q: "What is the primary corporate role of an 'Underwriter' within an insurance enterprise?", opts: ["To assess the risk profile of an applicant and establish correct premium pricing terms or decline risk acceptance", "To design international branding campaigns across cross-border web platform networks", "To orchestrate legal settlements inside corporate consumer dispute arbitration cells", "To process compound loyalty bonus point payouts to database nominees post maturity cycles"] },
            hi: { q: "एक बीमा उद्यम के भीतर 'अंडरराइटर' (Underwriter) की प्राथमिक कॉर्पोरेट भूमिका क्या है?", opts: ["एक आवेदक के जोखिम प्रोफाइल का मूल्यांकन करना और सही प्रीमियम मूल्य निर्धारण शर्तें स्थापित करना या जोखिम स्वीकृति को अस्वीकार करना", "सीमा पार वेब प्लेटफॉर्म नेटवर्क पर अंतर्राष्ट्रीय ब्रांडिंग अभियानों को डिज़ाइन करना", "कॉर्पोरेट उपभोक्ता विवाद मध्यस्थता सेल के भीतर कानूनी बस्तियों को व्यवस्थित करना", "परिपक्वता चक्र के बाद डेटाबेस नामांकित व्यक्तियों को चक्रवृद्धि वफादारी बोनस अंक भुगतान संसाधित करना"] },
            correct: 0
        },
        {
            en: { q: "In the Indian mutual fund industry, what parameters define a 'Liquid Fund' scheme allocation?", opts: ["An open-ended debt product deploying capital exclusively in short-term money market instruments with maturity up to 91 days", "An active high-growth equity allocation focused on international software startup stocks", "A passive commodity tracking investment tool mapped to physical baseline asset registries", "A structural tax vehicle carrying a mandatory 5-year capital lock-in profile blueprint"] },
            hi: { q: "भारतीय म्यूचुअल फंड उद्योग में, कौन से पैरामीटर 'लिक्विड फंड' (Liquid Fund) योजना आवंटन को परिभाषित करते हैं?", opts: ["एक ओपन-एंडेड डेट उत्पाद जो विशेष रूप से 91 दिनों तक की परिपक्वता वाले अल्पकालिक मुद्रा बाजार उपकरणों में पूंजी लगाता है", "अंतरराष्ट्रीय सॉफ्टवेयर स्टार्टअप शेयरों पर केंद्रित एक सक्रिय उच्च-विकास इक्विटी आवंटन", "भौतिक आधारभूत परिसंपत्ति रजिस्ट्रियों के लिए मैप किया गया एक पैसिव कमोडिटी ट्रैकिंग निवेश उपकरण", "अनिवार्य 5-वर्षीय पूंजी लॉक-इन प्रोफाइल ब्लूप्रिंट वाला एक संरचनात्मक कर वाहन"] },
            correct: 0
        },
        {
            en: { q: "What does the option Greek 'Alpha' reflect for a fund layout?", opts: ["The active return outperformance generated over the benchmark index relative to the systematic beta risk profile", "The percentage velocity of capital depreciation monitored across out-of-the-money options brackets", "The interest index variation monitored via central banking repo update logs across quarters", "The absolute volume discrepancy evaluated inside physical asset storage pipelines"] },
            hi: { q: "एक फंड लेआउट के लिए वित्तीय मीट्रिक 'अल्फा' (Alpha) क्या दर्शाता है?", opts: ["व्यवस्थित बीटा जोखिम प्रोफाइल के सापेक्ष बेंचमार्क इंडेक्स पर उत्पन्न सक्रिय आउटपरफॉर्मेंस रिटर्न", "आउट-ऑफ-द-मनी ऑप्शंस ब्रैकेट में मॉनिटर की गई पूंजी मूल्यह्रास की प्रतिशत गति", "तिमाहियों में केंद्रीय बैंकिंग रेपो अपडेट लॉग के माध्यम से निगरानी की जाने वाली ब्याज सूचकांक भिन्नता", "भौतिक संपत्ति भंडारण पाइपलाइनों के भीतर मूल्यांकित पूर्ण मात्रा विसंगति"] },
            correct: 0
        },
        {
            en: { q: "Which type of life insurance contract supplies comprehensive financial death protection spanning the entire lifecycle up to 100 years of age?", opts: ["Whole Life Insurance Slabs", "Pure Term Insurance Cover", "Endowment Asset Protection Plan", "Variable Unit Linked Premium Array"] },
            hi: { q: "किस प्रकार का जीवन बीमा अनुबंध 100 वर्ष की आयु तक पूरे जीवनचक्र में व्यापक वित्तीय मृत्यु सुरक्षा प्रदान करता है?", opts: ["संपूर्ण जीवन बीमा स्लैब (Whole Life Insurance Slabs)", "शुद्ध टर्म इंश्योरेंस कवर", "एंडोमेंट संपत्ति संरक्षण योजना", "वेरिएबल यूनिट लिंक्ड प्रीमियम एरे"] },
            correct: 0
        },
        {
            en: { q: "In physical commodity futures asset configurations, what does a 'Contango' structure indicate?", opts: ["A market state where futures contract prices trade at a premium over physical spot indicators, capturing storage and interest carry overheads", "A structural near-term asset deficit spiking exchange indices infinitely higher", "The permanent cancellation of options premium calculations by clearing registry centers", "A horizontal baseline where spot and derivatives indices converge at absolute zero margins"] },
            hi: { q: "भौतिक कमोडिटी फ्यूचर्स परिसंपत्ति कॉन्फ़िगरेशन में, 'कंतैंगो' (Contango) संरचना क्या दर्शाती है?", opts: ["एक बाजार स्थिति जहां फ्यूचर्स अनुबंध कीमतें भौतिक हाजिर संकेतकों पर प्रीमियम पर ट्रेड करती हैं, जो भंडारण और ब्याज वहन ओवरहेड्स को दर्शाती हैं", "एक संरचनात्मक निकट-अवधि परिसंपत्ति घाटा जो एक्सचेंज सूचकांकों को असीमित रूप से ऊपर ले जाता है", "क्लियरिंग रजिस्ट्री केंद्रों द्वारा ऑप्शन प्रीमियम गणना का स्थायी रद्दीकरण", "एक क्षैतिज बेसलाइन जहां हाजिर और डेरिवेटिव सूचकांक पूर्ण शून्य मार्जिन पर विलीन हो जाती हैं"] },
            correct: 0
        },
        {
            en: { q: "What does the option Greek 'Delta' evaluate precisely inside derivative pricing layouts?", opts: ["The expected shift in an option's premium for a 1-unit modification inside the underlying asset price", "The deterioration pace of time values tracked across out-of-the-money contract brackets", "The structural percentage change driven by adjustment layers inside central bank repo metrics", "The core correlation threshold mapping physical gold spot values to warehouse receipts"] },
            hi: { q: "डेरिवेटिव मूल्य निर्धारण लेआउट के भीतर ऑप्शन ग्रीक 'डेल्टा' (Delta) सटीक रूप से किसका मूल्यांकन करता है?", opts: ["अंतर्निहित परिसंपत्ति की कीमत में 1-इकाई के संशोधन के लिए ऑप्शन के प्रीमियम में अपेक्षित बदलाव", "आउट-ऑफ-द-मनी अनुबंध ब्रैकेट में ट्रैक किए गए समय मूल्यों की गिरावट की गति", "केंद्रीय बैंक रेपो मेट्रिक्स के अंदर समायोजन परतों द्वारा संचालित संरचनात्मक प्रतिशत परिवर्तन", "भौतिक सोने के हाजिर मूल्यों को गोदाम रसीदों से मैप करने वाली मुख्य सहसंबंध सीमा"] },
            correct: 0
        },
        {
            en: { q: "Inside the exchange derivatives trading framework, what process guarantees the daily operational mitigation of counterparty default risks?", opts: ["Mark-to-Market (MTM) daily financial settlement adjustment", "The standard collection of administrative systems re-verification login audit fees", "The dynamic warehouse grading checks applied to core physical metals cargo pipelines", "The compliance registry clearance steps executed during public initial stock IPO offerings"] },
            hi: { q: "एक्सचेंज डेरिवेटिव ट्रेडिंग ढांचे के भीतर, कौन सी प्रक्रिया काउंटरपार्टी डिफ़ॉल्ट जोखिमों के दैनिक परिचालन शमन की गारंटी देती है?", opts: ["मार्क-टू-मार्केट (MTM) दैनिक वित्तीय निपटान समायोजन", "प्रशासनिक प्रणाली पुनर्सत्यापन लॉगिन ऑडिट शुल्क का मानक संग्रह", "मुख्य भौतिक धातु कार्गो पाइपलाइनों पर लागू गतिशील गोदाम ग्रेडिंग जांच", "सार्वजनिक प्रारंभिक स्टॉक आईपीओ पेशकशों के दौरान निष्पादित अनुपालन रजिस्ट्री क्लीयरेंस चरण"] },
            correct: 0
        },
        {
            en: { q: "What is meant by the principle of 'Insurable Interest' when purchasing an insurance policy?", opts: ["The purchaser must experience direct financial loss or legal hardship upon the damage or death of the subject matter", "The compound interest rate metric guaranteed via commercial banks on annuity cash values", "The dynamic premium multiplier scale generated inside core underlying credit investment blocks", "The legislative internal revenue tax deduction capability managed under civil codes"] },
            hi: { q: "बीमा पॉलिसी खरीदते समय 'बीमायोग्य हित' (Insurable Interest) के सिद्धांत से क्या तात्पर्य है?", opts: ["विषय वस्तु के नुकसान या मृत्यु पर खरीदार को प्रत्यक्ष वित्तीय नुकसान या कानूनी कठिनाई का अनुभव होना चाहिए", "वार्षिकी नकद मूल्यों पर वाणिज्यिक बैंकों के माध्यम से गारंटीकृत चक्रवृद्धि ब्याज दर मीट्रिक", "मुख्य अंतर्निहित क्रेडिट निवेश ब्लॉकों के अंदर उत्पन्न गतिशील प्रीमियम गुणक पैमाना", "सिविल कोड के तहत प्रबंधित विधायी आंतरिक राजस्व कर कटौती क्षमता"] },
            correct: 0
        },
        {
            en: { q: "Which format of options execution allows the contract owner to exercise their derivative rights at any moment up to and including the expiration date?", opts: ["American Option", "European Option Setup", "Bermudan Choice Layout", "Binary Asian Option Array"] },
            hi: { q: "ऑप्शंस निष्पादन का कौन सा प्रारूप अनुबंध के मालिक को समाप्ति तिथि तक किसी भी क्षण अपने डेरिवेटिव अधिकारों का उपयोग करने की अनुमति देता है?", opts: ["अमेरिकन ऑप्शन (American Option)", "यूरोपियन ऑप्शन सेटअप", "बरमूडन चॉइस लेआउट", "बाइनरी एशियन ऑप्शन एरे"] },
            correct: 0
        },
        {
            en: { q: "What options position combines a short call option along with holding an equivalent quantity of the underlying equity stock?", opts: ["Covered Call", "Naked Short Straddle Layout", "Protective Put Framework", "Bear Call Spread Combination"] },
            hi: { q: "कौन सी ऑप्शंस पोजीशन अंतर्निहित इक्विटी स्टॉक की समकक्ष मात्रा रखने के साथ एक शॉर्ट कॉल ऑप्शन को जोड़ती है?", opts: ["कवर्ड कॉल (Covered Call)", "नेकेड शॉर्ट स्ट्रैडल लेआउट", "प्रोटेक्टिव पुट फ्रेमवर्क", "बियर कॉल स्प्रेड संयोजन"] },
            correct: 0
        },
        {
            en: { q: "What does the option Greek 'Vega' quantify inside derivative volatility matrices?", opts: ["The sensitivity of an option's premium to a 1% change in the implied volatility of the underlying asset", "The breakdown speed of time value as the contract moves closer to expiration", "The mathematical acceleration rate of Delta per unit shift in spot index configurations", "The direct interest rate risk triggered by shifting macroeconomic capital baselines"] },
            hi: { q: "डेरिवेटिव वोलाटिलिटी मेट्रिसेस के भीतर ऑप्शन ग्रीक 'वेगा' (Vega) क्या मापता है?", opts: ["अंतर्निहित परिसंपत्ति की निहित अस्थिरता (Implied Volatility) में 1% के बदलाव के प्रति ऑप्शन के प्रीमियम की संवेदनशीलता", "अनुबंध की समाप्ति के करीब पहुंचने पर समय मूल्य के घटने की गति", "स्पॉट इंडेक्स कॉन्फ़िगरेशन में प्रति इकाई बदलाव पर डेल्टा की गणितीय त्वरण दर", "व्यापक आर्थिक पूंजी आधारों को बदलने से ट्रिगर होने वाला प्रत्यक्ष ब्याज दर जोखिम"] },
            correct: 0
        },
        {
            en: { q: "Which corporate parameter calculates the exact relation between the total equity dividends distributed inside a calendar year and the current market share price?", opts: ["Dividend Yield", "P/E Multiple Scale", "Earnings Per Share Tracker", "Book Value Coefficient"] },
            hi: { q: "कौन सा कॉर्पोरेट पैरामीटर एक calendar वर्ष के भीतर वितरित कुल इक्विटी लाभांश और वर्तमान बाजार शेयर मूल्य के बीच सटीक संबंध की गणना करता है?", opts: ["डिविडेंड यील्ड (Dividend Yield)", "पी/ई मल्टीपल स्केल", "अर्निंग पर शेयर ट्रैकर", "बुक वैल्यू गुणांक"] },
            correct: 0
        },
        {
            en: { q: "Under IRDAI insurance guidelines, what does the 'Principle of Contribution' imply in case of a dual policy setup for a single asset?", opts: ["The insurers will share the total loss proportionately; the client cannot claim the full amount from both to make a profit", "The entire claim must be paid compulsorily by the oldest insurance entity exclusively", "The client receives double payouts automatically backed by state judicial interventions", "The clearing corporation confiscates the physical damaged asset for global auctioning"] },
            hi: { q: "IRDAI बीमा दिशानिर्देशों के तहत, एक ही संपत्ति के लिए दोहरी पॉलिसी सेटअप के मामले में 'अंशदान का सिद्धांत' क्या दर्शाता है?", opts: ["बीमाकर्ता कुल नुकसान को आनुपातिक रूप से साझा करेंगे; ग्राहक लाभ कमाने के लिए दोनों से पूर्ण राशि का दावा नहीं कर सकता है", "पूरे दावे का भुगतान विशेष रूप से सबसे पुरानी बीमा इकाई द्वारा अनिवार्य रूप से किया जाना चाहिए", "ग्राहक को राज्य के न्यायिक हस्तक्षेपों द्वारा समर्थित स्वचालित रूप से दोगुना भुगतान प्राप्त होता है", "क्लियरिंग कॉरपोरेशन वैश्विक नीलामी के लिए भौतिक क्षतिग्रस्त संपत्ति को जब्त करता है"] },
            correct: 0
        },
        {
            en: { q: "In exchange-traded currency derivatives, what represents the tick size for a standard USD-INR futures contract?", opts: ["₹0.0025", "₹0.0100", "₹0.0500", "₹0.0001"] },
            hi: { q: "एक्सचेंज-ट्रेडेड मुद्रा डेरिवेटिव में, एक मानक USD-INR फ्यूचर्स अनुबंध के लिए टिक आकार (Tick Size) क्या होता है?", opts: ["₹0.0025", "₹0.0100", "₹0.0500", "₹0.0001"] },
            correct: 0
        },
        {
            en: { q: "Which type of debt mutual fund scheme focuses its asset deployment exclusively on short-term corporate debt instruments with maturity profiles up to 91 days?", opts: ["Liquid Fund", "Gilt Fund with Sovereign Risks", "Corporate Bond Fund", "Dynamic Duration Asset Scheme"] },
            hi: { q: "किस प्रकार की डेट म्यूचुअल फंड योजना अपने परिसंपत्ति परिनियोजन को विशेष रूप से 91 दिनों तक की परिपक्वता प्रोफाइल वाले अल्पकालिक कॉर्पोरेट ऋण साधनों पर केंद्रित करती है?", opts: ["लिक्विड फंड (Liquid Fund)", "संप्रभु जोखिमों के साथ गिल्ट फंड", "कॉर्पोरेट बॉन्ड फंड", "डायनेमिक ड्यूरेशन एसेट स्कीम"] },
            correct: 0
        },
        {
            en: { q: "Under the Insurance Act, 1938, what section strictly prohibits any payment of commission or rebates to an unlicensed individual or field agent?", opts: ["Section 41", "Section 45", "Section 39", "Section 27"] },
            hi: { q: "बीमा अधिनियम, 1938 के तहत, कौन सी धारा किसी बिना लाइसेंस वाले व्यक्ति या field एजेंट को कमीशन या छूट के किसी भी भुगतान को कड़ाई से प्रतिबंधित करती है?", opts: ["धारा 41 (Section 41)", "धारा 45", "धारा 39", "धारा 27"] },
            correct: 0
        },
        {
            en: { q: "In physical commodity trading, what entity manages the grading, quality certification, and logistics of goods stored in accredited warehouses?", opts: ["The Exchange Repository and Accredited Warehouse Managers", "The WDRA Central Legal Court Wing", "The Financial Benchmarks India Pvt. Ltd. Treasury Operations", "The state level agricultural marketing mandis registry panels"] },
            hi: { q: "भौतिक कमोडिटी कोरोबार में, मान्यता प्राप्त गोदामों में संग्रहीत सामानों की ग्रेडिंग, गुणवत्ता प्रमाणन और रसद का प्रबंधन कौन सी संस्था करती है?", opts: ["एक्सचेंज रिपोजिटरी और मान्यता प्राप्त गोदाम प्रबंधक (Accredited Warehouse Managers)", "डब्ल्यूडीआरए केंद्रीय कानूनी न्यायालय विंग", "फाइनेंशियल बेंचमार्क इंडिया प्राइवेट लिमिटेड ट्रेजरी ऑपरेशंस", "राज्य स्तरीय कृषि विपणन मंडी रजिस्ट्री पैनल"] },
            correct: 0
        },
        {
            en: { q: "What does the financial metric 'P/B Ratio' calculate inside fundamental equity analysis?", opts: ["Price-to-Book Value Ratio", "Profit-to-Bonus Matrix", "Premium-to-Beta Index", "Public-to-Exchange Allocation Parameter"] },
            hi: { q: "मौलिक इक्विटी विश्लेषण के भीतर वित्तीय मीट्रिक 'P/B Ratio' क्या गणना करता है?", opts: ["प्राइस-टू-बुक वैल्यू रेशियो (Price-to-Book Value Ratio)", "प्रॉफिट-टू-बोनस मैट्रिक्स", "प्रीमियम-टू-बीटा इंडेक्स", "पब्लिक-टू-एक्सचेंज एलोकेशन पैरामीटर"] },
            correct: 0
        },
        {
            en: { q: "In the context of Option Greeks, what parameter measures the option premium's sensitivity to shifts in the risk-free interest rate?", opts: ["Rho", "Theta", "Vega", "Delta"] },
            hi: { q: "ऑप्शन ग्रीक्स के संदर्भ में, कौन सा पैरामीटर जोखिम-मुक्त ब्याज दर में बदलाव के प्रति ऑप्शन प्रीमियम की संवेदनशीलता को मापता है?", opts: ["रो (Rho)", "थिटा (Theta)", "वेगा (Vega)", "डेल्टा (Delta)"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI guidelines, what is the mandatory lock-in period for an Equity Linked Savings Scheme (ELSS) mutual fund allocation?", opts: ["3 years", "5 years", "1 year", "10 years"] },
            hi: { q: "सेबी के दिशानिर्देशों के तहत, इक्विटी लिंक्ड सेविंग्स स्कीम (ELSS) म्यूचुअल फंड आवंटन के लिए अनिवार्य लॉक-इन अवधि कितनी है?", opts: ["3 वर्ष (3 years)", "5 वर्ष", "1 वर्ष", "10 वर्ष"] },
            correct: 0
        },
        {
            en: { q: "Inside the general insurance operational pipeline, what is the primary role of a 'Surveyor and Loss Assessor'?", opts: ["To independently inspect, quantify, and report the real extent of physical loss post accident for claim settlement", "To handle digital marketing and client onboarding pipelines across states", "To calculate the solvency ratio parameters of the parent insurance company annually", "To manage corporate bond portfolio allocation switches under treasury oversight"] },
            hi: { q: "सामान्य बीमा परिचालन पाइपलाइन के भीतर, 'सर्वेक्षक और हानि मूल्यांकक' (Surveyor and Loss Assessor) की प्राथमिक भूमिका क्या है?", opts: ["दावा निपटान के लिए दुर्घटना के बाद भौतिक नुकसान की वास्तविक सीमा का स्वतंत्र रूप से निरीक्षण, मात्रा निर्धारित और रिपोर्ट करना", "राज्यों में डिजिटल मार्केटिंग और ग्राहक ऑनबोर्डिंग पाइपलाइनों को संभालना", "मूल बीमा कंपनी के सॉल्वेंसी अनुपात मापदंडों की सालाना गणना करना", "ट्रेजरी निरीक्षण के तहत कॉर्पोरेट बॉन्ड पोर्टफोलियो आवंटन स्विच का प्रबंधन करना"] },
            correct: 0
        },
        {
            en: { q: "What economic theory states that exchange rate movements between two currencies are primarily driven by differences in their national inflation rates?", opts: ["Purchasing Power Parity (PPP)", "Interest Rate Parity (IRP)", "International Fisher Effect Matrix", "Balance of Payments Deficit Theory"] },
            hi: { q: "कौन सा आर्थिक सिद्धांत यह बताता है कि दो मुद्राओं के बीच विनिमय दर का उतार-चढ़ाव मुख्य रूप से उनकी राष्ट्रीय मुद्रास्फीति (Inflation) दरों में अंतर से प्रेरित होता है?", opts: ["क्रय शक्ति समता (Purchasing Power Parity - PPP)", "ब्याज दर समता (IRP)", "अंतर्राष्ट्रीय फिशर प्रभाव मैट्रिक्स", "भुगतान संतुलन घाटा सिद्धांत"] },
            correct: 0
        },
        {
            en: { q: "In commodity derivatives trading, crude oil contracts on Indian multi-commodity exchanges are deeply tracking which international reference pricing hub?", opts: ["WTI / Brent Crude on NYMEX / ICE exchanges", "S&P Global Bullion tracking indexes", "London Metal Exchange (LME) raw metal pricing spreadsheet", "Chicago Board of Trade (CBOT) agricultural soft option layout"] },
            hi: { q: "कमोडिटी डेरिवेटिव्स trading में, भारतीय稳टी-कमोडिटी एक्सचेंजों पर कच्चे तेल के अनुबंध गहराई से किस अंतर्राष्ट्रीय संदर्भ मूल्य निर्धारण केंद्र को ट्रैक करते हैं?", opts: ["NYMEX / ICE एक्सचेंजों पर WTI / Brent क्रूड बेंचमार्क", "एसएंडपी ग्लोबल बुलियन ट्रैकिंग इंडेक्स", "लंदन मेटल एक्सचेंज (एलएमई) कच्चा धातु मूल्य निर्धारण स्प्रेडशीट", "शिकागो बोर्ड ऑफ ट्रेड (सीबीओटी) कृषि सॉफ्ट ऑप्शन लेआउट"] },
            correct: 0
        },
        {
            en: { q: "What does the metric 'Tracking Error' precisely quantify inside a passive Mutual Fund Index Fund scheme?", opts: ["The performance returns divergence between the index fund and its target tracking benchmark index", "The mechanical lag configuration while updating fractional balance tokens on the screen", "The absolute accounting mistake committed by the corporate asset management team", "The statutory processing tax discrepancy evaluated by central internal revenue wings"] },
            hi: { q: "एक पैसिव म्यूचुअल फंड इंडेक्स फंड योजना के भीतर मीट्रिक 'ट्रैकिंग एरर' (Tracking Error) सटीक रूप से क्या मापता है?", opts: ["इंडेक्स फंड के प्रदर्शन रिटर्न और उसके लक्षित ट्रैकिंग बेंचमार्क इंडेक्स के बीच विचलन (Divergence)", "स्क्रीन पर आंशिक बैलेंस टोकन अपडेट करते समय होने वाली यांत्रिक देरी", "कॉर्पोरेट एसेट मैनेजमेंट टीम द्वारा की गई पूर्ण लेखांकन गलती", "केंद्रीय आंतरिक राजस्व विंग द्वारा मूल्यांकित वैधानिक प्रसंस्करण कर विसंगति"] },
            correct: 0
        },
        {
            en: { q: "What does the option Greek 'Asymmetrical Payoff' profile in standard long vanilla option contracts imply for the buyer?", opts: ["The maximum loss is limited to the premium paid, while the profit potential is theoretically unlimited", "The profit and loss are perfectly balanced and linear relative to the asset movement", "The investor is guaranteed to double their capital regardless of the market direction", "The clearing corporation can dynamically change the strike price during market hours"] },
            hi: { q: "मानक लॉन्ग वैनिला ऑप्शन अनुबंधों में एक 'असममित पेऑफ' (Asymmetrical Payoff) प्रोफाइल खरीदार के लिए क्या दर्शाता है?", opts: ["अधिकतम नुकसान भुगतान किए गए प्रीमियम तक सीमित है, जबकि लाभ की संभावना सैद्धांतिक रूप से असीमित है", "परिसंपत्ति के उतार-चढ़ाव के सापेक्ष लाभ और हानि पूरी तरह से संतुलित और रैखिक हैं", "बाजार की दिशा की परवाह किए बिना निवेशक को अपनी पूंजी दोगुनी करने की गारंटी दी जाती है", "क्लियरिंग कॉरपोरेशन बाजार के घंटों के दौरान स्ट्राइक मूल्य को गतिशील रूप से बदल सकता है"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI mutual fund rules, what is the maximum permissible investment limit for a single sector inside a diversified equity scheme portfolio?", opts: ["20% of the scheme's net assets, extendable to 25% with trustee approval", "50% of the scheme's net assets completely without any constraints", "10% of the aggregate AUM registered under the regional database", "There is no legal sector limit as long as the fund manager captures high Alpha"] },
            hi: { q: "सेबी म्यूचुअल फंड नियमों के तहत, एक विविवीकृत इक्विटी योजना पोर्टफोलियो के भीतर एकल क्षेत्र (Single Sector) के लिए अधिकतम अनुमत निवेश सीमा क्या है?", opts: ["योजना की शुद्ध संपत्ति का 20%, जिसे ट्रस्टी की मंजूरी से 25% तक बढ़ाया जा सकता है", "बिना किसी प्रतिबंध के पूरी तरह से योजना की शुद्ध संपत्ति का 50%", "क्षेत्रीय डेटाबेस के तहत पंजीकृत कुल एयूएम का 10%", "जब तक फंड मैनेजर उच्च अल्फा कैप्चर करता है, तब तक कोई कानूनी क्षेत्र सीमा नहीं है"] },
            correct: 0
        },
        {
            en: { q: "Which type of marine insurance policy covers the loss or damage caused to the physical ship hull or machinery during a specific voyage?", opts: ["Hull Insurance", "Cargo Insurance", "Freight Protection Cover", "Liability Indemnity Matrix"] },
            hi: { q: "किस प्रकार की समुद्री बीमा (Marine insurance) पॉलिसी किसी विशिष्ट यात्रा के दौरान भौतिक जहाज के पतवार (Hull) या मशीनरी को होने वाले नुकसान या क्षति को कवर करती है?", opts: ["हल इंश्योरेंस (Hull Insurance / पतवार बीमा)", "कार्गो इंश्योरेंस", "फ्रेट प्रोटेक्शन कवर", "लायबिलिटी इंडेम्निटी मैट्रिक्स"] },
            correct: 0
        },
        {
            en: { q: "In the currency derivative segment, if an exporter expects the Indian Rupee (INR) to appreciate sharply, what action should they theoretically execute to hedge their revenue?", opts: ["Sell USD-INR Futures contracts", "Buy USD-INR Call options contracts", "Sell EUR-INR Put options contracts exclusively", "Register an offshore non-deliverable forward contract sweep"] },
            hi: { q: "मुद्रा डेरिवेटिव सेगमेंट में, यदि एक निर्यातक (Exporter) को उम्मीद है कि भारतीय रुपया (INR) तेजी से मजबूत होगा, तो उन्हें अपने राजस्व के बचाव (Hedging) के लिए सैद्धांतिक रूप से क्या कार्रवाई करनी चाहिए?", opts: ["USD-INR फ्यूचर्स अनुबंध बेचना (Sell USD-INR Futures)", "USD-INR कॉल ऑप्शंस अनुबंध खरीदना", "विशेष रूप से EUR-INR पुट ऑप्शंस अनुबंध बेचना", "एक अपतटीय गैर-डिलिवरेबल फॉरवर्ड अनुबंध स्वीप पंजीकृत करना"] },
            correct: 0
        },
        // --- NISM / IRDAI Comprehensive Mock Test: All Modules Shuffled (Set 10) ---
        {
            en: { q: "What does the option Greek 'Gamma' precisely quantify inside derivative risk matrices?", opts: ["The rate of change in Delta per 1-unit movement in the underlying asset's spot price", "The sensitivity of the option premium to a 1% shift in implied volatility", "The absolute time decay pattern calculated across calendar quarters", "The interest rate variance index managed via cross-border treasury desks"] },
            hi: { q: "डेरिवेटिव जोखिम मेट्रिसेस के भीतर ऑप्शन ग्रीक 'गामा' (Gamma) सटीक रूप से क्या मापता है?", opts: ["अंतर्निहित परिसंपत्ति के हाजिर मूल्य में 1-इकाई के उतार-चढ़ाव पर डेल्टा (Delta) में बदलाव की दर", "निहित अस्थिरता में 1% के बदलाव के प्रति ऑप्शन प्रीमियम की संवेदनशीलता", "कैलेंडर तिमाहियों में गणना किया गया पूर्ण समय क्षय पैटर्न", "सीमा पार ट्रेजरी डेस्क के माध्यम से प्रबंधित ब्याज दर विचरण सूचकांक"] },
            correct: 0
        },
        {
            en: { q: "According to SEBI mutual fund regulations, a 'Large Cap' company is strictly defined as a listed corporate entity ranking within which market capitalization slab?", opts: ["1st to 100th company based on market capitalization", "101st to 250th company range", "Top 50 listed corporate entities exclusively", "251st to 500th listed company matrix"] },
            hi: { q: "सेबी म्यूचुअल फंड नियमों के अनुसार, एक 'लार्ज कैप' (Large Cap) कंपनी को मार्केट कैपिटलाइजेशन के आधार पर किस दायरे में परिभाषित किया गया है?", opts: ["मार्केट कैपिटलाइजेशन के आधार पर 1वीं से 100वीं कंपनी", "101वीं से 250वीं कंपनी का दायरा", "विशेष रूप से शीर्ष 50 सूचीबद्ध कॉर्पोरेट संस्थाएं", "251वीं से 500वीं सूचीबद्ध कंपनी मैट्रिक्स"] },
            correct: 0
        },
        {
            en: { q: "Under IRDAI regulations, what is the 'Grace Period' allowed for paying renewal premiums on a life insurance policy with a monthly premium payment mode?", opts: ["15 days", "30 days", "7 days", "45 days"] },
            hi: { q: "IRDAI नियमों के तहत, मासिक प्रीमियम भुगतान मोड वाली जीवन बीमा पॉलिसी पर नवीनीकरण प्रीमियम का भुगतान करने के लिए कितना 'ग्रेस पीरियड' दिया जाता है?", opts: ["15 दिन (15 days)", "30 दिन", "7 दिन", "45 दिन"] },
            correct: 0
        },
        {
            en: { q: "In exchange-traded currency options contracts inside India, what is the standard lot size for a USD-INR options contract?", opts: ["USD 1,000", "USD 10,000", "USD 5,000", "USD 500"] },
            hi: { q: "भारत के भीतर एक्सचेंज-ट्रेडेड मुद्रा ऑप्शंस अनुबंधों में, एक USD-INR ऑप्शंस अनुबंध के लिए मानक लॉट आकार (Lot Size) क्या है?", opts: ["USD 1,000", "USD 10,000", "USD 5,000", "USD 500"] },
            correct: 0
        },
        {
            en: { q: "In commodity derivatives, what does an 'Arbitrageur' execute when a futures contract trades at a significant discount below the physical spot market price?", opts: ["Buys the futures contract and simultaneously sells the physical commodity in the spot market", "Sells the futures contract and buys an equivalent quantity of call options", "Executes an uncovered naked short put spread strategy across options centers", "Swaps the currency parameters through cross-border offshore banking channels"] },
            hi: { q: "कमोडिटी डेरिवेटिव्स में, जब कोई फ्यूचर्स अनुबंध भौतिक हाजिर बाजार मूल्य से महत्वपूर्ण छूट (Discount) पर ट्रेड करता है, तो एक 'आर्बिट्रेजूर' क्या निष्पादित करता है?", opts: ["फ्यूचर्स अनुबंध खरीदता है और साथ ही हाजिर बाजार में भौतिक कमोडिटी बेचता है", "फ्यूचर्स अनुबंध बेचता है और कॉल ऑप्शंस की समकक्ष मात्रा खरीदता है", "ऑप्शंस केंद्रों में एक अनकवर्ड नेकेड शॉर्ट पुट स्प्रेड रणनीति निष्पादित करता है", "ऑफशॉर बैंकिंग चैनलों के माध्यम से मुद्रा मापदंडों की अदला-बदली करता है"] },
            correct: 0
        },
        {
            en: { q: "What does the 'Sharpe Ratio' of a mutual fund scheme evaluate?", opts: ["The fund's excess return generated per unit of total risk (Standard Deviation)", "The excess return generated per unit of systematic risk (Beta)", "The absolute alpha tracking outperformance over a ten-year cycle", "The variance separating direct investment plans from distributor routes"] },
            hi: { q: "किसी म्यूचुअल फंड योजना का 'शार्प रेशियो' (Sharpe Ratio) क्या मूल्यांकन करता है?", opts: ["कुल जोखिम (Standard Deviation) की प्रति इकाई पर फंड द्वारा उत्पन्न अतिरिक्त रिटर्न", "व्यवस्थित जोखिम (Beta) की प्रति इकाई पर उत्पन्न अतिरिक्त रिटर्न", "दस साल के चक्र में पूर्ण अल्फा ट्रैकिंग आउटपरफॉर्मेंस", "डायरेक्ट निवेश प्लान को वितरक मार्गों से अलग करने वाला विचरण"] },
            correct: 0
        },
        {
            en: { q: "Which core principle of general insurance dictates that if an asset is insured with multiple companies, the client cannot claim full recovery from all to make a profit?", opts: ["Principle of Contribution", "Principle of Subrogation", "Principle of Indemnity Matrix", "Principle of Proximate Cause"] },
            hi: { q: "सामान्य बीमा का कौन सा मूल सिद्धांत यह निर्देश देता है कि यदि किसी संपत्ति का बीमा कई कंपनियों से कराया गया है, तो ग्राहक लाभ कमाने के लिए सभी से पूर्ण दावा राशि वसूल नहीं कर सकता है?", opts: ["अंशदान का सिद्धांत (Principle of Contribution)", "प्रत्यासन का सिद्धांत", "क्षतिपूर्ति मैट्रिक्स का सिद्धांत", "निकटतम कारण का सिद्धांत"] },
            correct: 0
        },
        {
            en: { q: "In the context of Option Greeks, what parameter measures the option premium's sensitivity to shifts in implied market volatility?", opts: ["Vega", "Theta", "Rho", "Delta"] },
            hi: { q: "ऑप्शन ग्रीक्स के संदर्भ में, कौन सा पैरामीटर निहित बाजार अस्थिरता (Implied Volatility) में बदलाव के प्रति ऑप्शन प्रीमियम की संवेदनशीलता को मापता है?", opts: ["वेगा (Vega)", "थिटा (Theta)", "रो (Rho)", "डेल्टा (Delta)"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI guidelines, what is the mandatory minimum percentage of asset allocation in equity and equity-related instruments for an Equity Linked Savings Scheme (ELSS)?", opts: ["80% of total assets", "65% of total assets", "75% of total assets", "100% of total assets exclusively"] },
            hi: { q: "सेबी के दिशानिर्देशों के तहत, इक्विटी लिंक्ड सेविंग्स स्कीम (ELSS) के लिए इक्विटी और इक्विटी से संबंधित उपकरणों में परिसंपत्ति आवंटन का अनिवार्य न्यूनतम प्रतिशत कितना है?", opts: ["कुल संपत्ति का 80% (80% of total assets)", "कुल संपत्ति का 65%", "कुल संपत्ति का 75%", "विशेष रूप से कुल संपत्ति का 100%"] },
            correct: 0
        },
        {
            en: { q: "What does the 'Principle of Proximate Cause' imply in general insurance claims processing?", opts: ["The insurer is only liable to pay if the loss was directly triggered by an insured peril listed in the policy document", "The closest physical location parameter to verify damaged corporate warehouse storage items", "The dynamic processing matrix used to calculate field broker commission structures", "The operational solvency threshold evaluated across quarterly reinsurance grids"] },
            hi: { q: "सामान्य बीमा दावों के प्रसंस्करण में 'निकटतम कारण का सिद्धांत' (Principle of Proximate Cause) क्या दर्शाता है?", opts: ["बीमाकर्ता केवल तभी भुगतान करने के लिए उत्तरदायी है जब नुकसान सीधे पॉलिसी दस्तावेज़ में सूचीबद्ध बीमित जोखिम (Insured peril) के कारण हुआ हो", "क्षतिग्रस्त कॉर्पोरेट गोदाम भंडारण वस्तुओं को सत्यापित करने के लिए निकटतम भौतिक स्थान पैरामीटर", "फील्ड ब्रोकर कमीशन संरचनाओं की गणना के लिए उपयोग की जाने वाली गतिशील प्रसंस्करण मैट्रिक्स", "तिमाही पुनर्बीमा ग्रिड में मूल्यांकित परिचालन सॉल्वेंसी सीमा"] },
            correct: 0
        },
        {
            en: { q: "In the currency derivative segment on Indian stock exchanges, what is the standard lot size for a GBP-INR futures contract?", opts: ["GBP 1,000", "GBP 10,000", "GBP 5,000", "GBP 100"] },
            hi: { q: "भारतीय स्टॉक एक्सचेंजों पर मुद्रा डेरिवेटिव सेगमेंट में, एक GBP-INR फ्यूचर्स अनुबंध के लिए मानक लॉट आकार (Lot Size) क्या होता है?", opts: ["GBP 1,000", "GBP 10,000", "GBP 5,000", "GBP 100"] },
            correct: 0
        },
        {
            en: { q: "Which type of debt mutual fund scheme manages asset deployment exclusively in short-term sovereign government securities with zero credit risk?", opts: ["Gilt Fund", "Liquid Fund", "Corporate Bond Fund", "Dynamic Duration Fund Layout"] },
            hi: { q: "किस प्रकार की डेट म्यूचुअल फंड योजना अपने परिसंपत्ति परिनियोजन को विशेष रूप से शून्य क्रेडिट जोखिम वाली अल्पकालिक संप्रभु सरकारी प्रतिभूतियों (Government securities) में प्रबंधित करती है?", opts: ["गिल्ट फंड (Gilt Fund)", "लिक्विड फंड", "कॉर्पोरेट बॉन्ड फंड", "डायनेमिक ड्यूरेशन फंड लेआउट"] },
            correct: 0
        },
        {
            en: { q: "Under the Insurance Act, 1938, what section strictly prohibits the practice of offering rebates or commissions to entice individuals to buy a policy?", opts: ["Section 41", "Section 45", "Section 39", "Section 27"] },
            hi: { q: "बीमा अधिनियम, 1938 के तहत, कौन सी धारा व्यक्तियों को पॉलिसी खरीदने के लिए लुभाने के लिए छूट (Rebates) या कमीशन देने की प्रथा को कड़ाई से प्रतिबंधित करती है?", opts: ["धारा 41 (Section 41)", "धारा 45", "धारा 39", "धारा 27"] },
            correct: 0
        },
        {
            en: { q: "In commodity markets, what term defines a market structure where long-term futures contract prices trade at a premium over near-term spot prices, reflecting financing and carrying costs?", opts: ["Contango", "Backwardation", "Arbitrage Compression", "Short Squeeze Layout"] },
            hi: { q: "कमोडिटी बाजारों में, कौन सा शब्द उस बाजार संरचना को परिभाषित करता है जहां दीर्घकालिक फ्यूचर्स अनुबंध मूल्य निकट-अवधि की हाजिर कीमतों पर प्रीमियम पर ट्रेड करते हैं, जो वित्तीय और वहन लागतों (Carrying costs) को दर्शाते हैं?", opts: ["कंतैंगो (Contango)", "बैकवर्डेशन (Backwardation)", "आर्बिट्रेज कम्प्रेशन", "शॉर्ट स्क्वीज़ लेआउट"] },
            correct: 0
        },
        {
            en: { q: "What does the metric 'Tracking Error' precisely measure inside a passive mutual fund scheme?", opts: ["The performance returns divergence separating an index fund or ETF from its target tracking benchmark index", "The mechanical delay log when syncing balance sheets via corporate accounting networks", "The absolute volume error triggered inside warehouse storage physical inventory audits", "The regulatory fine threshold evaluated post corporate compliance verification failures"] },
            hi: { q: "एक पैसिव म्यूचुअल फंड योजना के भीतर मीट्रिक 'ट्रैकिंग एरर' (Tracking Error) सटीक रूप से क्या मापता है?", opts: ["एक इंडेक्स फंड या ईटीएफ के प्रदर्शन रिटर्न और उसके लक्षित ट्रैकिंग बेंचमार्क इंडेक्स के बीच का विचलन (Divergence)", "कॉर्पोरेट अकाउंटिंग नेटवर्क के माध्यम से बैलेंस शीट सिंक करते समय होने वाली यांत्रिक देरी लॉग", "गोदाम भंडारण भौतिक सूची ऑडिट के भीतर ट्रिगर की गई पूर्ण मात्रा त्रुटि", "कॉर्पोरेट अनुपालन सत्यापन विफलताओं के बाद मूल्यांकित नियामक जुर्माना सीमा"] },
            correct: 0
        },
        {
            en: { q: "What options writing strategy is formed if an investor sells a Call option without holding either the underlying asset or a protective long contract?", opts: ["Naked / Uncovered Call Writing", "Covered Call Position", "Protective Put Strategy Layout", "Bull Call Spread Combination"] },
            hi: { q: "यदि कोई निवेशक अंतर्निहित परिसंपत्ति या सुरक्षात्मक लॉन्ग अनुबंध रखे बिना कॉल ऑप्शन बेचता है, तो कौन सी ऑप्शंस राइटिंग रणनीति बनती है?", opts: ["नेकेड / अनकवर्ड कॉल राइटिंग (Naked / Uncovered Call Writing)", "कवर्ड कॉल पोजीशन", "प्रोटेक्टिव पुट रणनीति लेआउट", "बुल कॉल स्प्रेड संयोजन"] },
            correct: 0
        },
        {
            en: { q: "Inside the insurance sector, what does the specific term 'Moral Hazard' refer to?", opts: ["An increase in the probability or severity of loss due to the dishonest behavior or careless attitude of the insured person after getting policy coverage", "The structural calculation variations monitored dynamically across premium tax collections", "The natural physical decay parameters evaluated over a structural lifecycle tracker", "The risk of statutory fines post corporate compliance execution failures"] },
            hi: { q: "बीमा क्षेत्र के भीतर, विशिष्ट शब्द 'नैतिक संकट' (Moral Hazard) किसे संदर्भित करता है?", opts: ["पॉलिसी कवरेज मिलने के बाद बीमित व्यक्ति के बेईमान व्यवहार या लापरवाही के कारण नुकसान की संभावना या गंभीरता में वृद्धि", "प्रीमियम कर संग्रह में गतिशील रूप से निगरानी किए जाने वाले संरचनात्मक गणना भिन्नता", "संरचनात्मक जीवनचक्र ट्रैकर पर मूल्यांकित प्राकृतिक भौतिक क्षय पैरामीटर", "कॉर्पोरेट अनुपालन निष्पादन विफलताओं के बाद वैधानिक जुर्माने का जोखिम"] },
            correct: 0
        },
        {
            en: { q: "In exchange-traded currency derivatives, what entity acts as the legal central counterparty to guarantee the fulfillment of every contract trade?", opts: ["The Exchange-Accredited Clearing Corporation", "The Reserve Bank of India Treasury Operation Bureau", "The Association of Mutual Funds in India Central Core Desk", "The Lead Brokerage Syndicate Risk Management Counter"] },
            hi: { q: "एक्सचेंज-ट्रेडेड मुद्रा डेरिवेटिव में, प्रत्येक अनुबंध व्यापार की पूर्ति की गारंटी देने के लिए कौन सी संस्था कानूनी केंद्रीय काउंटरपार्टी के रूप में कार्य करती है?", opts: ["एक्सचेंज-मान्यता प्राप्त क्लियरिंग कॉरपोरेशन (Clearing Corporation)", "भारतीय रिजर्व बैंक ट्रेजरी ऑपरेशन ब्यूरो", "एसोसिएशन ऑफ म्यूचुअल फंड्स इन इंडिया सेंट्रल कोर狂स्क", "लीड ब्रोकरेज सिंडिकेट जोखिम प्रबंधन काउंटर"] },
            correct: 0
        },
        {
            en: { q: "What type of mutual fund asset class dynamically rebalances its portfolio allocation between equity and debt securities based on changing market valuations?", opts: ["Balanced Advantage Fund (Dynamic Asset Allocation Fund)", "Equity Linked Savings Scheme (ELSS Tax Vehicle)", "Gilt Fund with Central Sovereign Backing", "Sectoral / Thematic Infrastructure Scheme Portfolio"] },
            hi: { q: "परिवर्तनशील बाजार मूल्यांकनों के आधार पर कौन सा म्यूचुअल फंड एसेट क्लास इक्विटी और डेट प्रतिभूतियों के बीच अपने पोर्टफोलियो आवंटन को गतिशील रूप से पुनर्संतुलित करता है?", opts: ["बैलेंस्ड एडवांटेज फंड (Dynamic Asset Allocation Fund)", "इक्विटी लिंक्ड सेविंग्स स्कीम (ELSS Tax Vehicle)", "केंद्रीय संप्रभु समर्थन के साथ गिल्ट फंड", "सेक्टरल / थमैटिक इंफ्रास्ट्रक्चर योजना पोर्टफोलियो"] },
            correct: 0
        },
        {
            en: { q: "What does the 'Solvency Ratio' of an insurance company operating inside India represent?", opts: ["The metric evaluating an insurer's capital adequacy and structural capacity to meet long-term policyholder claims and corporate liabilities", "The total register count of active field distribution agents logged in databases", "The ratio of administrative overheads incurred relative to direct premiums collected", "The dynamic processing timeline threshold allocated to handle nomination benefits"] },
            hi: { q: "भारत के भीतर काम करने वाली बीमा कंपनी का 'सॉल्वेंसी रेशियो' (Solvency Ratio) क्या दर्शाता है?", opts: ["बीमाकर्ता की पूंजी पर्याप्तता और दीर्घकालिक पॉलिसीधारक दावों और कॉर्पोरेट देनदारियों को पूरा करने की संरचनात्मक क्षमता का मूल्यांकन करने वाला मीट्रिक", "डेटाबेस में लॉग इन सक्रिय फ़ील्ड वितरण एजेंटों की कुल रजिस्टर संख्या", "एकत्रित प्रत्यक्ष प्रीमियम के सापेक्ष किए गए प्रशासनिक ओवरहेड्स का अनुपात", "नामांकन लाभों को संभालने के लिए आवंटित गतिशील प्रसंस्करण समयसीमा सीमा"] },
            correct: 0
        },
        {
            en: { q: "In derivatives trading operations, executing a transaction that establishes a position completely identical but opposite to an existing open market position is called:", opts: ["Squaring Off", "Rolling Over", "Mark-to-Market Rebalancing Slabs", "Novation Protocol Exchange"] },
            hi: { q: "डेरिवेटिव ट्रेडिंग ऑपरेशन्स में, एक ऐसा लेनदेन निष्पादित करना जो मौजूदा ओपन मार्केट पोजीशन के बिल्कुल समान लेकिन विपरीत पोजीशन स्थापित करता है, कहलाता है:", opts: ["स्क्वायरिंग ऑफ (Squaring Off)", "रोलिंग ओवर (Rolling Over)", "मार्क-टू-मार्केट रीबैलेंसिंग स्लैब", "नोवेशन प्रोटोकॉल एक्सचेंज"] },
            correct: 0
        },
        {
            en: { q: "What represents the structural lot size configuration for a standard USD-INR currency futures contract on recognized Indian derivatives exchanges?", opts: ["USD 1,000", "USD 10,000", "USD 5,000", "USD 100"] },
            hi: { q: "मान्यता प्राप्त भारतीय डेरिवेटिव एक्सचेंजों पर एक मानक USD-INR मुद्रा फ्यूचर्स अनुबंध के लिए संरचनात्मक लॉट आकार (Lot Size) क्या है?", opts: ["USD 1,000", "USD 10,000", "USD 5,000", "USD 100"] },
            correct: 0
        },
        {
            en: { q: "Which key parameter measures the complete turnover percentage of a mutual fund portfolio's stock assets bought and sold within a 1-year window?", opts: ["Portfolio Turnover Rate", "Expense Ratio Coefficient Layout", "Tracking Error Standard Variance Scale", "Sharpe Volatility Matrix Metric"] },
            hi: { q: "कौन सा मुख्य पैरामीटर 1-वर्ष की अवधि के भीतर खरीदे और बेचे गए म्यूचुअल फंड पोर्टफोलियो की stock परिसंपत्तियों के पूर्ण टर्नओवर प्रतिशत को मापता है?", opts: ["पोर्टफोलियो टर्नओवर रेट (Portfolio Turnover Rate)", "व्यय अनुपात गुणांक लेआउट", "ट्रैकिंग एरर मानक विचरण पैमाना", "शार्प वोलाटिलिटी मैट्रिक्स मीट्रिक"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI Mutual Fund rules, what mandatory legal summary containing core risk factors and fees must be given to a potential investor prior to subscription?", opts: ["Key Information Memorandum (KIM)", "The full financial ledger statements of the parent corporate sponsor", "The individual tax filing records of the designated portfolio manager", "The structural map layout of commodity warehouse storage locations"] },
            hi: { q: "सेबी म्यूचुअल फंड नियमों के तहत, सदस्यता से पहले किसी संभावित निवेशक को मुख्य जोखिम कारकों और शुल्कों वाला कौन सा अनिवार्य कानूनी सारांश दिया जाना चाहिए?", opts: ["की इंफॉर्मेशन मेमोरैंडम (KIM)", "मूल कॉर्पोरेट प्रायोजक के पूर्ण वित्तीय बहीखाता विवरण", "नामित पोर्टफोलियो प्रबंधक के व्यक्तिगत कर फाइलिंग रिकॉर्ड", "कमोडिटी गोदाम भंडारण स्थानों का संरचनात्मक मानचित्र लेआउट"] },
            correct: 0
        },
        {
            en: { q: "What is an 'Arbitrageur' inside the financial ecosystem?", opts: ["A participant who simultaneously buys and sells an asset across different markets to exploit pricing discrepancies for risk-free profit", "A long-term micro-cap value asset investor tracking core fundamental accounting books", "A regulatory system inspector appointed directly via SEBI to audit network mainframes", "A high-leverage market speculator writing uncovered call options during calendar updates"] },
            hi: { q: "वित्तीय पारिस्थितिकी तंत्र के भीतर एक 'आर्बिट्रेजूर' (Arbitrageur) कौन होता है?", opts: ["एक भागीदार जो जोखिम मुक्त लाभ के लिए मूल्य विसंगतियों का लाभ उठाने के लिए विभिन्न बाजारों में एक साथ संपत्ति खरीदता और बेचता है", "मुख्य मौलिक लेखा पुस्तकों को ट्रैक करने वाला एक दीर्घकालिक माइक्रो-कैप मूल्य संपत्ति निवेशक", "नेटवर्क मेनफ्रेम का ऑडिट करने के लिए सेबी के माध्यम से सीधे नियुक्त एक नियामक प्रणाली निरीक्षक", "कैलेंडर अपडेट के दौरान अनकवर्ड कॉल ऑप्शंस लिखने वाला एक उच्च-लीवरेज बाजार सटोरिया"] },
            correct: 0
        },
        {
            en: { q: "Inside the commodity derivatives marketplace, what sector classification covers resources such as crude oil and natural gas?", opts: ["Energy Complex", "Base Metals Wing", "Bullion Segment", "Agri-Commodities Category"] },
            hi: { q: "कमोडिटी डेरिवेटिव्स बाजार के भीतर, कच्चे तेल (Crude oil) और प्राकृतिक गैस (Natural gas) जैसे संसाधनों को कौन सा क्षेत्र वर्गीकरण कवर करता है?", opts: ["ऊर्जा परिसर (Energy Complex)", "बेस मेटल्स विंग", "बुलियन सेगमेंट", "कृषि-कमोडिटी श्रेणी"] },
            correct: 0
        },
        {
            en: { q: "What is the primary investment mandate of a 'Gilt Fund' inside the debt mutual fund product category?", opts: ["To deploy a minimum of 80% of net assets in sovereign government securities carrying zero credit risk profiles", "To maximize dynamic yield by trading volatile small-cap technology equities", "To capture risk-free pricing profits from physical gold spot markets across states", "To finance cross-border commercial real estate projects managed under global syndicates"] },
            hi: { q: "डेट म्यूचुअल फंड उत्पाद श्रेणी के भीतर 'गिल्ट फंड' (Gilt Fund) का प्राथमिक निवेश अधिदेश क्या है?", opts: ["शून्य क्रेडिट जोखिम प्रोफाइल वाली संप्रभु सरकारी प्रतिभूतियों (Government securities) में न्यूनतम 80% परिसंपत्ति निवेश करना", "अस्थिर स्मॉल-कैप टेक्नोलॉजी इक्विटी का व्यापार करके गतिशील उपज को अधिकतम करना", "राज्यों में भौतिक सोने के हाजिर बाजारों से जोखिम मुक्त मूल्य निर्धारण लाभ प्राप्त करना", "वैश्विक सिंडिकेट के तहत प्रबंधित सीमा पार वाणिज्यिक रियल एस्टेट परियोजनाओं को वित्तपोषित करना"] },
            correct: 0
        },
        {
            en: { q: "In life insurance contracts, what occurs under the standard 'Suicide Clause' if the insured person commits suicide within 12 months of policy issuance?", opts: ["The full sum insured is void; only a refund of the premiums paid (typically 80% or higher) is returned to the nominee", "The absolute death benefit sum insured is paid compulsorily following judicial court interventions", "The entire policy asset switches ownership dynamically to the state civil treasury wing", "The contract converts into an open-ended dynamic annuity bond backed via central oversight"] },
            hi: { q: "जीवन बीमा अनुबंधों में, यदि बीमित व्यक्ति पॉलिसी जारी होने के 12 महीनों के भीतर आत्महत्या कर लेता है, तो मानक 'सुसाइड क्लॉज' (Suicide Clause) के तहत क्या होता है?", opts: ["पूर्ण बीमित राशि शून्य है; नामांकित व्यक्ति को केवल भुगतान किए गए प्रीमियम का रिफंड (आमतौर पर 80% या अधिक) वापस किया जाता है", "अदालती हस्तक्षेप के बाद पूर्ण मृत्यु लाभ बीमित राशि का अनिवार्य रूप से भुगतान किया जाता है", "पूरी पॉलिसी परिसंपत्ति स्वचालित रूप से राज्य नागरिक ट्रेजरी विंग में स्थानांतरित हो जाती है", "अनुबंध केंद्रीय निरीक्षण के माध्यम से समर्थित एक ओपन-एंडेड गतिशील वार्षिकी बांड में परिवर्तित हो जाता है"] },
            correct: 0
        },
        {
            en: { q: "What metric measures the historical price sensitivity or structural market risk of an equity share or mutual fund portfolio relative to the broader market index?", opts: ["Beta Coefficient", "Alpha Tracker Framework", "Standard Deviation Scale Layout", "Information Ratio Factor Slabs"] },
            hi: { q: "कौन सा मीट्रिक व्यापक बाजार सूचकांक के सापेक्ष किसी इक्विटी शेयर या म्यूचुअल फंड पोर्टफोलियो के ऐतिहासिक मूल्य संवेदनशीलता या संरचनात्मक बाजार जोखिम को मापता है?", opts: ["बीटा गुणांक (Beta Coefficient)", "अल्फा ट्रैकर ढांचा", "मानक विचलन पैमाना लेआउट", "सूचना अनुपात कारक स्लैब"] },
            correct: 0
        },
        {
            en: { q: "Which statutory institution compiles, evaluates, and publishes the official foreign exchange daily Reference Rates for core currency pairs in India?", opts: ["Financial Benchmarks India Pvt. Ltd. (FBIL)", "The Securities and Exchange Board of India Main Compliance Desk", "State Bank of India Institutional Forex Trade Wing", "Ministry of Commerce Foreign Exchange Monitoring Bureau Desk"] },
            hi: { q: "भारत में मुख्य मुद्रा जोड़ों के लिए आधिकारिक विदेशी मुद्रा दैनिक संदर्भ दरें (Reference Rates) कौन सी वैधानिक संस्था संकलित, मूल्यांकित और प्रकाशित करती है?", opts: ["फाइनेंशियल बेंचमार्क इंडिया प्राइवेट लिमिटेड (FBIL)", "भारतीय प्रतिभूति और विनिमय बोर्ड मुख्य अनुपालन डेस्क", "भारतीय स्टेट बैंक संस्थागत विदेशी मुद्रा व्यापार विंग", "वाणिज्य मंत्रालय विदेशी मुद्रा निगरानी ब्यूरो डेस्क"] },
            correct: 0
        },
        {
            en: { q: "What does an insurance 'Deductible' represent in standard non-life corporate insurance claims?", opts: ["A pre-determined loss threshold amount that the insured must pay out-of-pocket before the insurer settles the remaining liability share", "The structural customer loyalty discount offered during annual renewal cycles", "The commission distribution blueprint mapped to licensed field distribution agents", "The statutory processing tax tariff assessed across cross-border reinsurance grids"] },
            hi: { q: "मानक गैर-जीवन कॉर्पोरेट बीमा दावों में बीमा 'डीडक्टिबल' (Deductible) क्या दर्शाता है?", opts: ["एक पूर्व-निर्धारित नुकसान सीमा राशि जो बीमाकर्ता द्वारा शेष देयता हिस्सेदारी का निपटान करने से पहले बीमित व्यक्ति को अपनी जेब से चुकानी होगी", "वार्षिक नवीनीकरण चक्रों के दौरान दी जाने वाली संरचनात्मक ग्राहक वफादारी छूट", "लाइसेंस प्राप्त क्षेत्र वितरण एजेंटों के लिए मैप किया गया कमीशन वितरण ब्लूप्रिंट", "सीमा पार पुनर्बीमा ग्रिड में मूल्यांकित वैधानिक प्रसंस्करण कर टैरिफ"] },
            correct: 0
        },
        {
            en: { q: "In the mutual fund architecture, who holds the core financial assets and securities of a scheme in safe custody to prevent asset misappropriation by the AMC?", opts: ["The Custodian bank", "The Sponsor corporation network", "The Registrar and Transfer Agent (RTA)", "The Board of Independent Trustees Group"] },
            hi: { q: "म्यूचुअल फंड आर्किटेक्चर में, एएमसी द्वारा परिसंपत्ति के दुरुपयोग को रोकने के लिए किसी योजना की मुख्य वित्तीय संपत्तियों और प्रतिभूतियों को सुरक्षित अभिरक्षा (Safe custody) में कौन रखता है?", opts: ["कस्टोडियन बैंक (The Custodian bank)", "प्रायोजक निगम नेटवर्क", "रजिस्ट्रार और ट्रांसफर एजेंट (RTA)", "स्वतंत्र ट्रस्टी समूह बोर्ड"] },
            correct: 0
        },
        {
            en: { q: "What trading strategy is formulated when an investor simultaneously buys an At-the-Money (ATM) Call option and an At-the-Money (ATM) Put option on the identical asset with matching expiry?", opts: ["Long Straddle", "Long Strangle Combinations", "Short Straddle Layout", "Bull Call Spread Matrix"] },
            hi: { q: "जब एक investor समान समाप्ति के साथ एक ही संपत्ति पर एक साथ एक एट-द-मनी (ATM) कॉल ऑप्शन और एक एट-द-मनी (ATM) पुट ऑप्शन खरीदता है, तो कौन सी ट्रेडिंग रणनीति बनती है?", opts: ["लॉन्ग स्ट्रैडल (Long Straddle)", "लॉन्ग स्ट्रैंगल संयोजन", "शॉर्ट स्ट्रैडल लेआउट", "बुल कॉल स्प्रेड मैट्रिक्स"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI mutual fund guidelines, close-ended schemes must provide liquidity pathways to retail investors through what channel after the NFO concludes?", opts: ["Mandatory listing and secondary trading capabilities on a recognized stock exchange platform", "Daily direct redemption window features operated at physical AMC corporate head office counters", "Automatic structural conversions into sovereign high-yield infrastructure credit bonds", "Interstate money market commercial line swap configuration access points"] },
            hi: { q: "सेबी म्यूचुअल फंड दिशानिर्देशों के तहत, एनएफओ समाप्त होने के बाद क्लोज-एंडेड योजनाओं को किस चैनल के माध्यम से खुदरा निवेशकों को तरलता मार्ग प्रदान करना चाहिए?", opts: ["एक मान्यता प्राप्त स्टॉक एक्सचेंज प्लेटफॉर्म पर अनिवार्य लिस्टिंग और द्वितीयक व्यापार (Secondary trading) क्षमताएं", "भौतिक एएमसी कॉर्पोरेट प्रधान कार्यालय काउंटरों पर संचालित दैनिक प्रत्यक्ष रिडेम्पशन विंडो सुविधाएं", "संप्रभु उच्च उपज वाले बुनियादी ढांचा क्रेडिट बांड में स्वचालित संरचनात्मक रूपांतरण", "अंतरराज्यीय मुद्रा बाजार वाणिज्यिक लाइन स्वैप कॉन्फ़िगरेशन एक्सेस पॉइंट"] },
            correct: 0
        },
        {
            en: { q: "What does the valuation multiple 'P/E Ratio' quantify inside fundamental equity stock research?", opts: ["Price-to-Earnings Ratio", "Profit-to-Expense Operational Slabs", "Premium-to-Equity Standard Coefficient", "Public-to-Exchange Asset Allocation Parameter"] },
            hi: { q: "मौलिक इक्विटी स्टॉक अनुसंधान के भीतर मूल्यांकन मल्टीपल 'P/E Ratio' क्या दर्शाता है?", opts: ["प्राइस-टू-अर्निंग रेशियो (Price-to-Earnings Ratio)", "प्रॉफिट-टू-एक्सपेंस ऑपरेशनल स्लैब", "प्रीमियम-टू-इक्विटी मानक गुणांक", "पब्लिक-टू-एक्सचेंज एसेट एलोकेशन पैरामीटर"] },
            correct: 0
        },
        {
            en: { q: "In commodity derivatives trading frameworks, what is the market pricing state known as 'Backwardation'?", opts: ["A market layout where the near-term physical spot price trades higher than its corresponding futures contract price", "A state where the derivatives futures price expands infinitely above the current spot value", "A structural balance condition where warehouse storage costs drop down to absolute zero margins", "The mandatory execution phase of underlying contract conversions inside clearing house setups"] },
            hi: { q: "कमोडिटी डेरिवेटिव्स ट्रेडिंग फ्रेमवर्क में, 'बैकवर्डेशन' (Backwardation) के रूप में जानी जाने वाली बाजार मूल्य निर्धारण स्थिति क्या है?", opts: ["एक बाजार लेआउट जहां निकट-अवधि का भौतिक हाजिर मूल्य उसके संबंधित फ्यूचर्स अनुबंध मूल्य से अधिक पर ट्रेड करता है", "एक ऐसी स्थिति जहां डेरिवेटिव फ्यूचर्स मूल्य वर्तमान हाजिर मूल्य से ऊपर असीमित रूप से बढ़ता है", "एक संरचनात्मक संतुलन स्थिति जहां गोदाम भंडारण लागत पूर्ण शून्य मार्जिन तक गिर जाती है", "क्लियरिंग हाउस सेटअप के अंदर अंतर्निहित अनुबंध रूपांतरणों का अनिवार्य निष्पादन चरण"] },
            correct: 0
        },
        {
            en: { q: "Under the Insurance Act, 1938, what section mandates that a life policy cannot be called into question by the insurer on grounds of misstatement after 3 years have lapsed?", opts: ["Section 45 (Indisputability Regulation)", "Section 41 (Anti-Rebate Enforcements)", "Section 39 (Nomination Framework Slabs)", "Section 27 (Investment Compliance Ledger)"] },
            hi: { q: "बीमा अधिनियम, 1938 के तहत, कौन सी धारा यह निर्देश देती है कि ३ वर्ष बीत जाने के बाद गलत बयानी के आधार पर बीमाकर्ता द्वारा जीवन पॉलिसी को चुनौती नहीं दी जा सकती?", opts: ["धारा 45 (Section 45 - Indisputability Regulation)", "धारा 41 (एंटी-रिबेट प्रवर्तन)", "धारा 39 (नामांकन ढांचा स्लैब)", "धारा 27 (निवेश अनुपालन बहीखाता)"] },
            correct: 0
        },
        {
            en: { q: "What is the primary corporate role of an 'Underwriter' within an insurance enterprise?", opts: ["To assess the risk profile of an applicant and establish correct premium pricing terms or decline risk acceptance", "To design international branding campaigns across cross-border web platform networks", "To orchestrate legal settlements inside corporate consumer dispute arbitration cells", "To process compound loyalty bonus point payouts to database nominees post maturity cycles"] },
            hi: { q: "एक बीमा उद्यम के भीतर 'अंडरराइटर' (Underwriter) की प्राथमिक कॉर्पोरेट भूमिका क्या है?", opts: ["एक आवेदक के जोखिम प्रोफाइल का मूल्यांकन करना और सही प्रीमियम मूल्य निर्धारण शर्तें स्थापित करना या जोखिम स्वीकृति को अस्वीकार करना", "सीमा पार वेब प्लेटफॉर्म नेटवर्क पर अंतर्राष्ट्रीय ब्रांडिंग अभियानों को डिज़ाइन करना", "कॉर्पोरेट उपभोक्ता विवाद मध्यस्थता सेल के भीतर कानूनी बस्तियों को व्यवस्थित करना", "परिपक्वता चक्र के बाद डेटाबेस नामांकित व्यक्तियों को चक्रवृद्धि वफादारी बोनस अंक भुगतान संसाधित करना"] },
            correct: 0
        },
        {
            en: { q: "In the Indian mutual fund industry, what parameters define a 'Liquid Fund' scheme allocation?", opts: ["An open-ended debt product deploying capital exclusively in short-term money market instruments with maturity up to 91 days", "An active high-growth equity allocation focused on international software startup stocks", "A passive commodity tracking investment tool mapped to physical baseline asset registries", "A structural tax vehicle carrying a mandatory 5-year capital lock-in profile blueprint"] },
            hi: { q: "भारतीय म्यूचुअल फंड उद्योग में, कौन से पैरामीटर 'लिक्विड फंड' (Liquid Fund) योजना आवंटन को परिभाषित करते हैं?", opts: ["एक ओपन-एंडेड डेट उत्पाद जो विशेष रूप से 91 दिनों तक की परिपक्वता वाले अल्पकालिक मुद्रा बाजार उपकरणों में पूंजी लगाता है", "अंतरराष्ट्रीय सॉफ्टवेयर स्टार्टअप शेयरों पर केंद्रित एक सक्रिय उच्च-विकास इक्विटी आवंटन", "भौतिक आधारभूत परिसंपत्ति रजिस्ट्रियों के लिए मैप किया गया एक पैसिव कमोडिटी ट्रैकिंग निवेश उपकरण", "अनिवार्य 5-वर्षीय पूंजी लॉक-इन प्रोफाइल ब्लूप्रिंट वाला एक संरचनात्मक कर वाहन"] },
            correct: 0
        },
        {
            en: { q: "What does the option Greek 'Tracking Alpha' reflect for a fund layout?", opts: ["The active return outperformance generated over the benchmark index relative to the systematic beta risk profile", "The percentage velocity of capital depreciation monitored across out-of-the-money options brackets", "The interest index variation monitored via central banking repo update logs across quarters", "The absolute volume discrepancy evaluated inside physical asset storage pipelines"] },
            hi: { q: "एक फंड लेआउट के लिए वित्तीय मीट्रिक 'अल्फा' (Alpha) क्या दर्शाता है?", opts: ["व्यवस्थित बीटा जोखिम प्रोफाइल के सापेक्ष बेंचमार्क इंडेक्स पर उत्पन्न सक्रिय आउटपरफॉर्मेंस रिटर्न", "आउट-of-the-money ऑप्शंस ब्रैकेट में मॉनिटर की गई पूंजी मूल्यह्रास की प्रतिशत गति", "तिमाहियों में केंद्रीय बैंकिंग रेपो अपडेट लॉग के माध्यम से निगरानी की जाने वाली ब्याज सूचकांक भिन्नता", "भौतिक संपत्ति भंडारण पाइपलाइनों के भीतर मूल्यांकित पूर्ण मात्रा विसंगति"] },
            correct: 0
        },
        {
            en: { q: "Which type of life insurance contract supplies comprehensive financial death protection spanning the entire lifecycle up to 100 years of age?", opts: ["Whole Life Insurance Slabs", "Pure Term Insurance Cover", "Endowment Asset Protection Plan", "Variable Unit Linked Premium Array"] },
            hi: { q: "किस प्रकार का जीवन बीमा अनुबंध 100 वर्ष की आयु तक पूरे जीवनचक्र में व्यापक वित्तीय मृत्यु सुरक्षा प्रदान करता है?", opts: ["संपूर्ण जीवन बीमा स्लैब (Whole Life Insurance Slabs)", "शुद्ध टर्म इंश्योरेंस कवर", "एंडोमेंट संपत्ति संरक्षण योजना", "वेरिएबल यूनिट लिंक्ड प्रीमियम एरे"] },
            correct: 0
        },
        {
            en: { q: "In physical commodity futures asset configurations, what does a 'Contango' structure indicate?", opts: ["A market state where futures contract prices trade at a premium over physical spot indicators, capturing storage and interest carry overheads", "A structural near-term asset deficit spiking exchange indices infinitely higher", "The permanent cancellation of options premium calculations by clearing registry centers", "A horizontal baseline where spot and derivatives indices converge at absolute zero margins"] },
            hi: { q: "भौतिक कमोडिटी फ्यूचर्स परिसंपत्ति कॉन्फ़िगरेशन में, 'कंतैंगो' (Contango) संरचना क्या दर्शाती है?", opts: ["एक बाजार स्थिति जहां फ्यूचर्स अनुबंध कीमतें भौतिक हाजिर संकेतकों पर प्रीमियम पर ट्रेड करती हैं, जो भंडारण और ब्याज वहन ओवरहेड्स को दर्शाती हैं", "एक संरचनात्मक निकट-अवधि परिसंपत्ति घाटा जो एक्सचेंज सूचकांकों को असीमित रूप से ऊपर ले जाता है", "क्लियरिंग रजिस्ट्री केंद्रों द्वारा ऑप्शन प्रीमियम गणना का स्थायी रद्दीकरण", "एक क्षैतिज बेसलाइन जहां हाजिर और डेरिवेटिव सूचकांक पूर्ण शून्य मार्जिन पर विलीन हो जाती हैं"] },
            correct: 0
        },
        {
            en: { q: "What does the option Greek 'Delta' evaluate precisely inside derivative pricing layouts?", opts: ["The expected shift in an option's premium for a 1-unit modification inside the underlying asset price", "The deterioration pace of time values tracked across out-of-the-money contract brackets", "The structural percentage change driven by adjustment layers inside central bank repo metrics", "The core correlation threshold mapping physical gold spot values to warehouse receipts"] },
            hi: { q: "डेरिवेटिव मूल्य निर्धारण लेआउट के भीतर ऑप्शन ग्रीक 'डेल्टा' (Delta) सटीक रूप से किसका मूल्यांकन करता है?", opts: ["अंतर्निहित परिसंपत्ति की कीमत में 1-इकाई के संशोधन के लिए ऑप्शन के प्रीमियम में अपेक्षित बदलाव", "आउट-of-the-money अनुबंध ब्रैकेट में ट्रैक किए गए समय मूल्यों की गिरावट की गति", "केंद्रीय बैंक रेपो मेट्रिक्स के अंदर समायोजन परतों द्वारा संचालित संरचनात्मक प्रतिशत परिवर्तन", "भौतिक सोने के हाजिर मूल्यों को गोदाम रसीदों से मैप करने वाली मुख्य सहसंबंध सीमा"] },
            correct: 0
        },
        {
            en: { q: "Inside the exchange derivatives trading framework, what process guarantees the daily operational mitigation of counterparty default risks?", opts: ["Mark-to-Market (MTM) daily financial settlement adjustment", "The standard collection of administrative systems re-verification login audit fees", "The dynamic warehouse grading checks applied to core physical metals cargo pipelines", "The compliance registry clearance steps executed during public initial stock IPO offerings"] },
            hi: { q: "एक्सचेंज डेरिवेटिव ट्रेडिंग ढांचे के भीतर, कौन सी प्रक्रिया काउंटरपार्टी डिफ़ॉल्ट जोखिमों के दैनिक परिचालन शमन की गारंटी देती है?", opts: ["मार्क-टू-मार्केट (MTM) दैनिक वित्तीय निपटान समायोजन", "प्रशासनिक प्रणाली पुनर्सत्यापन लॉगिन ऑडिट शुल्क का मानक संग्रह", "मुख्य भौतिक धातु कार्गो पाइपलाइनों पर लागू गतिशील गोदाम ग्रेडिंग जांच", "सार्वजनिक प्रारंभिक स्टॉक आईपीओ पेशकशों के दौरान निष्पादित अनुपालन रजिस्ट्री क्लीयरेंस चरण"] },
            correct: 0
        },
        {
            en: { q: "What is meant by the principle of 'Insurable Interest' when purchasing an insurance policy?", opts: ["The purchaser must experience direct financial loss or legal hardship upon the damage or death of the subject matter", "The compound interest rate metric guaranteed via commercial banks on annuity cash values", "The dynamic premium multiplier scale generated inside core underlying credit investment blocks", "The legislative internal revenue tax deduction capability managed under civil codes"] },
            hi: { q: "बीमा पॉलिसी खरीदते समय 'बीमायोग्य हित' (Insurable Interest) के सिद्धांत से क्या तात्पर्य है?", opts: ["विषय वस्तु के नुकसान या मृत्यु पर खरीदार को प्रत्यक्ष वित्तीय नुकसान या कानूनी कठिनाई का अनुभव होना चाहिए", "वार्षिकी नकद मूल्यों पर वाणिज्यिक बैंकों के माध्यम से गारंटीकृत चक्रवृद्धि ब्याज दर मीट्रिक", "मुख्य अंतर्निहित क्रेडिट निवेश ब्लॉकों के अंदर उत्पन्न गतिशील प्रीमियम गुणक पैमाना", "सिविल कोड के तहत प्रबंधित विधायी आंतरिक राजस्व कर कटौती क्षमता"] },
            correct: 0
        },
        {
            en: { q: "Which format of options execution allows the contract owner to exercise their derivative rights at any moment up to and including the expiration date?", opts: ["American Option", "European Option Setup", "Bermudan Choice Layout", "Binary Asian Option Array"] },
            hi: { q: "ऑप्शंस निष्पादन का कौन सा प्रारूप अनुबंध के मालिक को समाप्ति तिथि तक किसी भी क्षण अपने डेरिवेटिव अधिकारों का उपयोग करने की अनुमति देता है?", opts: ["अमेरिकन ऑप्शन (American Option)", "यूरोपियन ऑप्शन设置up", "बरमूडन चॉइस लेआउट", "बाइनरी एशियन ऑप्शन एरे"] },
            correct: 0
        },
        {
            en: { q: "What options position combines a short call option along with holding an equivalent quantity of the underlying equity stock?", opts: ["Covered Call", "Naked Short Straddle Layout", "Protective Put Framework", "Bear Call Spread Combination"] },
            hi: { q: "कौन सी ऑप्शंस पोजीशन अंतर्निहित इक्विटी स्टॉक की समकक्ष मात्रा रखने के साथ एक शॉर्ट कॉल ऑप्शन को जोड़ती है?", opts: ["कवर्ड कॉल (Covered Call)", "नेकेड शॉर्ट स्ट्रैडल लेआउट", "प्रोटेक्टिव पुट फ्रेमवर्क", "बियर कॉल स्प्रेड संयोजन"] },
            correct: 0
        },
        {
            en: { q: "What does the option Greek 'Rho' measure inside derivative pricing models?", opts: ["The sensitivity of an option's premium relative to a 1% change in the risk-free interest rate", "The acceleration velocity of Delta per unit shift in the underlying spot price", "The decay pattern of the time value premium component as expiration approaches", "The statistical correlation coefficient between cross-border currency blocks"] },
            hi: { q: "डेरिवेटिव मूल्य निर्धारण मॉडल के भीतर ऑप्शन ग्रीक 'रो' (Rho) क्या मापता है?", opts: ["जोखिम-मुक्त ब्याज दर में 1% के बदलाव के सापेक्ष ऑप्शन के प्रीमियम की संवेदनशीलता", "अंतर्निहित हाजिर मूल्य में प्रति इकाई बदलाव पर डेल्टा की त्वरण गति", "समाप्ति के करीब पहुंचने पर समय मूल्य प्रीमियम घटक का क्षय पैटर्न", "सीमा पार मुद्रा ब्लॉकों के बीच सांख्यिकीय सहसंबंध गुणांक"] },
            correct: 0
        },
        {
            en: { q: "According to SEBI mutual fund rules, a 'Mid Cap' company is strictly defined based on market capitalization rank within which tier?", opts: ["101st to 250th company", "1st to 100th company", "251st to 500th company", "Top 50 listed corporate entities exclusively"] },
            hi: { q: "सेबी म्यूचुअल फंड नियमों के अनुसार, एक 'मिड कैप' (Mid Cap) कंपनी को मार्केट कैपिटलाइजेशन रैंक के आधार पर किस दायरे में परिभाषित किया गया है?", opts: ["101वीं से 250वीं कंपनी (101st to 250th company)", "1 से 100वीं company", "251वीं से 500वीं company", "विशेष रूप से शीर्ष 50 सूचीबद्ध कॉर्पोरेट संस्थाएं"] },
            correct: 0
        },
        {
            en: { q: "Under IRDAI statutory regulations, what is the 'Grace Period' allowed for paying renewal premiums on a life insurance policy with an annual premium payment mode?", opts: ["30 days", "15 days", "7 days", "45 days"] },
            hi: { q: "IRDAI वैधानिक नियमों के तहत, वार्षिक प्रीमियम भुगतान मोड वाली जीवन बीमा पॉलिसी पर नवीनीकरण प्रीमियम का भुगतान करने के लिए कितना 'ग्रेस पीरियड' दिया जाता है?", opts: ["30 दिन (30 days)", "15 दिन", "7 दिन", "45 दिन"] },
            correct: 0
        },
        // --- NISM / IRDAI Comprehensive Mock Test: All Modules Shuffled (Set 11) ---
        {
            en: { q: "What does the option Greek 'Vega' quantify inside derivative volatility matrices?", opts: ["The sensitivity of an option's premium to a 1% change in the implied volatility of the underlying asset", "The breakdown speed of time value as the contract moves closer to expiration", "The mathematical acceleration rate of Delta per unit shift in spot index configurations", "The direct interest rate risk triggered by shifting macroeconomic capital baselines"] },
            hi: { q: "डेरिवेटिव वोलाटिलिटी मेट्रिसेस के भीतर ऑप्शन ग्रीक 'वेगा' (Vega) क्या मापता है?", opts: ["अंतर्निहित परिसंपत्ति की निहित अस्थिरता (Implied Volatility) में 1% के बदलाव के प्रति ऑप्शन के प्रीमियम की संवेदनशीलता", "अनुबंध की समाप्ति के करीब पहुंचने पर समय मूल्य के घटने की गति", "स्पॉट इंडेक्स कॉन्फ़िगरेशन में प्रति इकाई बदलाव पर डेल्टा की गणितीय त्वरण दर", "व्यापक आर्थिक पूंजी आधारों को बदलने से ट्रिगर होने वाला प्रत्यक्ष ब्याज दर जोखिम"] },
            correct: 0
        },
        {
            en: { q: "Which corporate parameter calculates the exact relation between the total equity dividends distributed inside a calendar year and the current market share price?", opts: ["Dividend Yield", "P/E Multiple Scale", "Earnings Per Share Tracker", "Book Value Coefficient"] },
            hi: { q: "कौन सा कॉर्पोरेट पैरामीटर एक calendar वर्ष के भीतर वितरित कुल इक्विटी लाभांश और वर्तमान बाजार शेयर मूल्य के बीच सटीक संबंध की गणना करता है?", opts: ["डिविडेंड यील्ड (Dividend Yield)", "पी/ई मल्टीपल स्केल", "अर्निंग पर शेयर ट्रैकर", "बुक वैल्यू गुणांक"] },
            correct: 0
        },
        {
            en: { q: "Under IRDAI insurance guidelines, what does the 'Principle of Contribution' imply in case of a dual policy setup for a single asset?", opts: ["The insurers will share the total loss proportionately; the client cannot claim the full amount from both to make a profit", "The entire claim must be paid compulsorily by the oldest insurance entity exclusively", "The client receives double payouts automatically backed by state judicial interventions", "The clearing corporation confiscates the physical damaged asset for global auctioning"] },
            hi: { q: "IRDAI बीमा दिशानिर्देशों के तहत, एक ही संपत्ति के लिए दोहरी पॉलिसी सेटअप के मामले में 'अंशदान का सिद्धांत' क्या दर्शाता है?", opts: ["बीमाकर्ता कुल नुकसान को आनुपातिक रूप से साझा करेंगे; ग्राहक लाभ कमाने के लिए दोनों से पूर्ण राशि का दावा नहीं कर सकता है", "पूरे दावे का भुगतान विशेष रूप से सबसे पुरानी बीमा इकाई द्वारा अनिवार्य रूप से किया जाना चाहिए", "ग्राहक को राज्य के न्यायिक हस्तक्षेपों द्वारा समर्थित स्वचालित रूप से दोगुना भुगतान प्राप्त होता है", "क्लियरिंग कॉरपोरेशन वैश्विक नीलामी के लिए भौतिक क्षतिग्रस्त संपत्ति को जब्त करता है"] },
            correct: 0
        },
        {
            en: { q: "In exchange-traded currency derivatives, what represents the tick size for a standard USD-INR futures contract?", opts: ["₹0.0025", "₹0.0100", "₹0.0500", "₹0.0001"] },
            hi: { q: "एक्सचेंज-ट्रेडेड मुद्रा डेरिवेटिव में, एक मानक USD-INR फ्यूचर्स अनुबंध के लिए टिक आकार (Tick Size) क्या होता है?", opts: ["₹0.0025", "₹0.0100", "₹0.0500", "₹0.0001"] },
            correct: 0
        },
        {
            en: { q: "Which type of debt mutual fund scheme focuses its asset deployment exclusively on short-term corporate debt instruments with maturity profiles up to 91 days?", opts: ["Liquid Fund", "Gilt Fund with Sovereign Risks", "Corporate Bond Fund", "Dynamic Duration Asset Scheme"] },
            hi: { q: "किस प्रकार की डेट म्यूचुअल फंड योजना अपने परिसंपत्ति परिनियोजन को विशेष रूप से 91 दिनों तक की परिपक्वता प्रोफाइल वाले अल्पकालिक कॉर्पोरेट ऋण साधनों पर केंद्रित करती है?", opts: ["लिक्विड फंड (Liquid Fund)", "संप्रभु जोखिमों के साथ गिल्ट फंड", "कॉर्पोरेट बॉन्ड फंड", "डायनेमिक ड्यूरेशन एसेट स्कीम"] },
            correct: 0
        },
        {
            en: { q: "Under the Insurance Act, 1938, what section strictly prohibits any payment of commission or rebates to an unlicensed individual or field agent?", opts: ["Section 41", "Section 45", "Section 39", "Section 27"] },
            hi: { q: "बीमा अधिनियम, 1938 के तहत, कौन सी धारा किसी बिना लाइसेंस वाले व्यक्ति या field एजेंट को कमीशन या छूट के किसी भी भुगतान को कड़ाई से प्रतिबंधित करती है?", opts: ["धारा 41 (Section 41)", "धारा 45", "धारा 39", "धारा 27"] },
            correct: 0
        },
        {
            en: { q: "In physical commodity trading, what entity manages the grading, quality certification, and logistics of goods stored in accredited warehouses?", opts: ["The Exchange Repository and Accredited Warehouse Managers", "The WDRA Central Legal Court Wing", "The Financial Benchmarks India Pvt. Ltd. Treasury Operations", "The state level agricultural marketing mandis registry panels"] },
            hi: { q: "भौतिक कमोडिटी कारोबार में, मान्यता प्राप्त गोदामों में संग्रहीत सामानों की ग्रेडिंग, गुणवत्ता प्रमाणन और रसद का प्रबंधन कौन सी संस्था करती है?", opts: ["एक्सचेंज रिपोजिटरी और मान्यता प्राप्त गोदाम प्रबंधक (Accredited Warehouse Managers)", "डब्ल्यूडीआरए केंद्रीय कानूनी न्यायालय विंग", "फाइनेंशियल बेंचमार्क इंडिया प्राइवेट लिमिटेड ट्रेजरी ऑपरेशंस", "राज्य स्तरीय कृषि विपणन मंडी रजिस्ट्री पैनल"] },
            correct: 0
        },
        {
            en: { q: "What does the financial metric 'P/B Ratio' calculate inside fundamental equity analysis?", opts: ["Price-to-Book Value Ratio", "Profit-to-Bonus Matrix", "Premium-to-Beta Index", "Public-to-Exchange Allocation Parameter"] },
            hi: { q: "मौलिक इक्विटी विश्लेषण के भीतर वित्तीय मीट्रिक 'P/B Ratio' क्या गणना करता है?", opts: ["प्राइस-टू-बुक मूल्य अनुपात (Price-to-Book Value Ratio)", "प्रॉफिट-टू-बोनस मैट्रिक्स", "प्रीमियम-टू-बीटा इंडेक्स", "पब्लिक-टू-एक्सचेंज एलोकेशन पैरामीटर"] },
            correct: 0
        },
        {
            en: { q: "In the context of Option Greeks, what parameter measures the option premium's sensitivity to shifts in the risk-free interest rate?", opts: ["Rho", "Theta", "Vega", "Delta"] },
            hi: { q: "ऑप्शन ग्रीक्स के संदर्भ में, कौन सा पैरामीटर जोखिम-मुक्त ब्याज दर में बदलाव के प्रति ऑप्शन प्रीमियम की संवेदनशीलता को मापता है?", opts: ["रो (Rho)", "थिटा (Theta)", "वेगा (Vega)", "डेल्टा (Delta)"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI guidelines, what is the mandatory lock-in period for an Equity Linked Savings Scheme (ELSS) mutual fund allocation?", opts: ["3 years", "5 years", "1 year", "10 years"] },
            hi: { q: "सेबी के दिशानिर्देशों के तहत, इक्विटी लिंक्ड सेविंग्स स्कीम (ELSS) म्यूचुअल फंड आवंटन के लिए अनिवार्य लॉक-इन अवधि कितनी है?", opts: ["3 वर्ष (3 years)", "5 वर्ष", "1 वर्ष", "10 वर्ष"] },
            correct: 0
        },
        {
            en: { q: "Inside the general insurance operational pipeline, what is the primary role of a 'Surveyor and Loss Assessor'?", opts: ["To independently inspect, quantify, and report the real extent of physical loss post accident for claim settlement", "To handle digital marketing and client onboarding pipelines across states", "To calculate the solvency ratio parameters of the parent insurance company annually", "To manage corporate bond portfolio allocation switches under treasury oversight"] },
            hi: { q: "सामान्य बीमा परिचालन पाइपलाइन के भीतर, 'सर्वेक्षक और हानि मूल्यांकक' (Surveyor and Loss Assessor) की प्राथमिक भूमिका क्या है?", opts: ["दावा निपटान के लिए दुर्घटना के बाद भौतिक नुकसान की वास्तविक सीमा का स्वतंत्र रूप से निरीक्षण, मात्रा निर्धारित और रिपोर्ट करना", "राज्यों में डिजिटल मार्केटिंग और ग्राहक ऑनबोर्डिंग पाइपलाइनों को संभालना", "मूल बीमा कंपनी के सॉल्वेंसी अनुपात मापदंडों की सालाना गणना करना", "ट्रेजरी निरीक्षण के तहत कॉर्पोरेट बॉन्ड पोर्टफोलियो आवंटन स्विच का प्रबंधन करना"] },
            correct: 0
        },
        {
            en: { q: "What economic theory states that exchange rate movements between two currencies are primarily driven by differences in their national inflation rates?", opts: ["Purchasing Power Parity (PPP)", "Interest Rate Parity (IRP)", "International Fisher Effect Matrix", "Balance of Payments Deficit Theory"] },
            hi: { q: "कौन सा आर्थिक सिद्धांत यह बताता है कि दो मुद्राओं के बीच विनिमय दर का उतार-चढ़ाव मुख्य रूप से उनकी राष्ट्रीय मुद्रास्फीति (Inflation) दरों में अंतर से प्रेरित होता है?", opts: ["क्रय शक्ति समता (Purchasing Power Parity - PPP)", "ब्याज दर समता (IRP)", "अंतर्राष्ट्रीय फिशर प्रभाव मैट्रिक्स", "भुगतान संतुलन घाटा सिद्धांत"] },
            correct: 0
        },
        {
            en: { q: "In commodity derivatives trading, crude oil contracts on Indian multi-commodity exchanges are deeply tracking which international reference pricing hub?", opts: ["WTI / Brent Crude on NYMEX / ICE exchanges", "S&P Global Bullion tracking indexes", "London Metal Exchange (LME) raw metal pricing spreadsheet", "Chicago Board of Trade (CBOT) agricultural soft option layout"] },
            hi: { q: "कमोडिटी डेरिवेटिव्स trading में, भारतीय मल्टी-कमोडिटी एक्सचेंजों पर कच्चे तेल के अनुबंध गहराई से किस अंतर्राष्ट्रीय संदर्भ मूल्य निर्धारण केंद्र को ट्रैक करते हैं?", opts: ["NYMEX / ICE एक्सचेंजों पर WTI / Brent क्रूड बेंचमार्क", "एसएंडपी ग्लोबल बुलियन ट्रैकिंग इंडेक्स", "लंदन मेटल एक्सचेंज (एलएमई) कच्चा धातु मूल्य निर्धारण स्प्रेडशीट", "शिकागो बोर्ड ऑफ ट्रेड (सीबीओटी) कृषि सॉफ्ट ऑप्शन लेआउट"] },
            correct: 0
        },
        {
            en: { q: "What does the metric 'Tracking Error' precisely quantify inside a passive Mutual Fund Index Fund scheme?", opts: ["The performance returns divergence between the index fund and its target tracking benchmark index", "The mechanical lag configuration while updating fractional balance tokens on the screen", "The absolute accounting mistake committed by the corporate asset management team", "The statutory processing tax discrepancy evaluated by central internal revenue wings"] },
            hi: { q: "एक पैसिव म्यूचुअल फंड इंडेक्स फंड योजना के भीतर मीट्रिक 'ट्रैकिंग एरर' (Tracking Error) सटीक रूप से क्या मापता है?", opts: ["इंडेक्स फंड के प्रदर्शन रिटर्न और उसके लक्षित ट्रैकिंग बेंचमार्क इंडेक्स के बीच विचलन (Divergence)", "SCREEN पर आंशिक बैलेंस टोकन अपडेट करते समय होने वाली यांत्रिक देरी", "कॉर्पोरेट एसेट मैनेजमेंट टीम द्वारा की गई पूर्ण लेखांकन गलती", "केंद्रीय आंतरिक राजस्व विंग द्वारा मूल्यांकित वैधानिक प्रसंस्करण कर विसंगति"] },
            correct: 0
        },
        {
            en: { q: "What does the option Greek 'Asymmetrical Payoff' profile in standard long vanilla option contracts imply for the buyer?", opts: ["The maximum loss is limited to the premium paid, while the profit potential is theoretically unlimited", "The profit and loss are perfectly balanced and linear relative to the asset movement", "The investor is guaranteed to double their capital regardless of the market direction", "The clearing corporation can dynamically change the strike price during market hours"] },
            hi: { q: "मानक लॉग वैनिला ऑप्शन अनुबंधों में एक 'असममित पेऑफ' (Asymmetrical Payoff) प्रोफाइल खरीडर के लिए क्या दर्शाता है?", opts: ["अधिकतम नुकसान भुगतान किए गए प्रीमियम तक सीमित है, जबकि लाभ की संभावना सैद्धांतिक रूप से असीमित है", "परिसंपत्ति के उतार-चढ़ाव के सापेक्ष लाभ और हानि पूरी तरह से संतुलित और रैखिक हैं", "बाजार की दिशा की परवाह किए बिना निवेशक को अपनी पूंजी दोगुनी करने की गारंटी दी जाती है", "क्लियरिंग कॉरपोरेशन बाजार के घंटों के दौरान स्ट्राइक मूल्य को गतिशील रूप से बदल सकता है"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI mutual fund rules, what is the maximum permissible investment limit for a single sector inside a diversified equity scheme portfolio?", opts: ["20% of the scheme's net assets, extendable to 25% with trustee approval", "50% of the scheme's net assets completely without any constraints", "10% of the aggregate AUM registered under the regional database", "There is no legal sector limit as long as the fund manager captures high Alpha"] },
            hi: { q: "सेबी म्यूचुअल फंड नियमों के तहत, एक विविधीकृत इक्विटी योजना पोर्टफोलियो के भीतर एकल क्षेत्र (Single Sector) के लिए अधिकतम अनुमत निवेश सीमा क्या है?", opts: ["योजना की शुद्ध संपत्ति का 20%, जिसे ट्रस्टी की मंजूरी से 25% तक बढ़ाया जा सकता है", "बिना किसी प्रतिबंध के पूरी तरह से योजना की शुद्ध संपत्ति का 50%", "क्षेत्रीय डेटाबेस के तहत पंजीकृत कुल एयूएम का 10%", "जब तक फंड मैनेजर उच्च अल्फा कैप्चर करता है, तब तक कोई कानूनी क्षेत्र सीमा नहीं है"] },
            correct: 0
        },
        {
            en: { q: "Which type of marine insurance policy covers the loss or damage caused to the physical ship hull or machinery during a specific voyage?", opts: ["Hull Insurance", "Cargo Insurance", "Freight Protection Cover", "Liability Indemnity Matrix"] },
            hi: { q: "किस प्रकार की समुद्री बीमा (Marine insurance) पॉलिसी किसी विशिष्ट यात्रा के दौरान भौतिक जहाज के पतवार (Hull) या मशीनरी को होने वाले नुकसान या क्षति को कवर करती है?", opts: ["हल इंश्योरेंस (Hull Insurance / पतवार बीमा)", "कारगो इंश्योरेंस", "फ्रेट प्रोटेक्शन कवर", "लायबिलिटी इंडेम्निटी मैट्रिक्स"] },
            correct: 0
        },
        {
            en: { q: "In the currency derivative segment, if an exporter expects the Indian Rupee (INR) to appreciate sharply, what action should they theoretically execute to hedge their revenue?", opts: ["Sell USD-INR Futures contracts", "Buy USD-INR Call options contracts", "Sell EUR-INR Put options contracts exclusively", "Register an offshore non-deliverable forward contract sweep"] },
            hi: { q: "मुद्रा डेरिवेटिव सेगमेंट में, यदि एक निर्यातक (Exporter) को उम्मीद है कि भारतीय रुपया (INR) तेजी से मजबूत होगा, तो उन्हें अपने राजस्व के बचाव (Hedging) के लिए सैद्धांतिक रूप से क्या कार्रवाई करनी चाहिए?", opts: ["USD-INR फ्यूचर्स अनुबंध बेचना (Sell USD-INR Futures)", "USD-INR कॉल ऑप्शंस अनुबंध खरीदना", "विशेष रूप से EUR-INR पुट ऑप्शंस अनुबंध बेचना", "एक अपतटीय गैर-डिलिवरेबल फॉरवर्ड अनुबंध स्वीप पंजीकृत करना"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI mutual fund categories, what defines a 'Multi Cap Fund' asset configuration requirement?", opts: ["A minimum of 25% allocation each in Large Cap, Mid Cap, and Small Cap corporate equities", "A dynamic structure deploying 100% funds into international sector matrices", "An index configuration tracking the top 50 exchange assets exclusively", "A corporate asset product focused 80% on long-term government securities"] },
            hi: { q: "सेबी म्यूचुअल फंड श्रेणियों के तहत, 'मल्टी कैप फंड' (Multi Cap Fund) परिसंपत्ति विन्यास की आवश्यकता को क्या परिभाषित करता है?", opts: ["लार्ज कैप, मिड कैप और स्मॉल कैप कॉर्पोरेट इक्विटी में न्यूनतम 25-25% आवंटन होना अनिवार्य है", "अंतरराष्ट्रीय क्षेत्र मेट्रिसेस में 100% धन लगाने वाली एक गतिशील संरचना", "विशेष रूप से शीर्ष 50 एक्सचेंज परिसंपत्तियों को ट्रैक करने वाला एक इंडेक्स कॉन्फ़िगरेशन", "दीर्घकालिक सरकारी प्रतिभूतियों पर 80% केंद्रित एक कॉर्पोरेट परिसंपत्ति उत्पाद"] },
            correct: 0
        },
        {
            en: { q: "Inside health insurance frameworks inside India, what does the specific protocol 'TPA' signify?", opts: ["Third Party Administrator", "Total Premium Assessment Slabs", "Tax Penalty Avoidance Scheme", "Terminal Patient Allocation Grid"] },
            hi: { q: "भारत के भीतर स्वास्थ्य बीमा ढांचे के अंदर, विशिष्ट प्रोटोकॉल 'TPA' क्या दर्शाता है?", opts: ["थर्ड पार्टी एडमिनिस्ट्रेटर (Third Party Administrator)", "टोटल प्रीमियम असेसमेंट स्लैब", "टैक्स पेनल्टी अवॉइडेंस स्कीम", "टर्मिनल पेशेंट एलोकेशन ग्रिड"] },
            correct: 0
        },
        {
            en: { q: "What derivative position creates a 'Short Straddle' trading setup on recognized Indian options networks?", opts: ["Simultaneously selling an ATM Call option and an ATM Put option with identical strike and expiry parameters", "Buying a deep ITM call alongside selling a deep OTM option structure", "Executing consecutive monthly rollover contracts across sovereign banking desks", "Combining a physical spot gold buy order along with cross-currency futures writing"] },
            hi: { q: "मान्यता प्राप्त भारतीय ऑप्शंस नेटवर्क पर कौन सी डेरिवेटिव पोजीशन 'शॉर्ट स्ट्रैडल' (Short Straddle) ट्रेडिंग सेटअप बनाती है?", opts: ["समान स्ट्राइक और एक्सपायरी मापदंडों के साथ एक ही समय में एक एटीएम (ATM) कॉल ऑप्शन और एक एटीएम पुट ऑप्शन बेचना", "एक गहरी आईटीएम कॉल खरीदने के साथ-साथ एक गहरी ओटीएम ऑप्शन संरचना बेचना", "संप्रभु बैंकिंग डेस्क पर लगातार मासिक रोलओवर अनुबंध निष्पादित करना", "क्रॉस-करेंसी फ्यूचर्स राइटिंग के साथ एक भौतिक हाजिर सोने की खरीद के आदेश को जोड़ना"] },
            correct: 0
        },
        {
            en: { q: "In physical commodity futures settlements inside India, what does the acronym 'CENVAT' or standard input credit tracking impact during invoicing?", opts: ["The netting and legal deduction thresholds applied to core physical asset goods and services tax grids", "The clearing corporation margin calculator metrics tracked during calendar extensions", "The mechanical grading calibration applied over base metals physical inventory logs", "The dynamic calculation formula of out-of-the-money option premiums"] },
            hi: { q: "भारत में भौतिक कमोडिटी फ्यूचर्स निपटान में, चालान (Invoicing) के दौरान 'CENVAT' या मानक इनपुट क्रेडिट ट्रैकिंग का क्या प्रभाव पड़ता है?", opts: ["मुख्य भौतिक संपत्ति वस्तु एवं सेवा कर (GST) ग्रिड पर लागू नेटिंग और कानूनी कटौती की सीमा", "कैलेंडर विस्तार के दौरान ट्रैक किए गए क्लियरिंग कॉर्पोरेशन मार्जिन कैलकुलेटर मीट्रिक", "बेस मेटल भौतिक सूची लॉग पर लागू यांत्रिक ग्रेडिंग अंशांकन", "आउट-ऑफ-द-मनी ऑप्शन प्रीमियम का गतिशील गणना फॉर्मूला"] },
            correct: 0
        },
        {
            en: { q: "What does the option Greek 'Lambda' represent inside advanced financial options evaluation models?", opts: ["The measure of leverage capability representing the percentage adjustment in option premium relative to a 1% shift in the underlying asset", "The decay acceleration parameter affecting the absolute intrinsic value across horizons", "The historical correlation mapping cross-border index yields over sovereign bond blocks", "The standard deviation metric isolating tracking errors from passive index strategies"] },
            hi: { q: "उन्नत वित्तीय ऑप्शंस मूल्यांकन मॉडल के भीतर ऑप्शन ग्रीक 'लैम्ब्डा' (Lambda) क्या दर्शाता है?", opts: ["लीवरेज क्षमता का माप जो अंतर्निहित परिसंपत्ति में 1% के बदलाव के सापेक्ष ऑप्शन प्रीमियम में प्रतिशत समायोजन को दर्शाता है", "समय क्षय त्वरण पैरामीटर जो विभिन्न क्षितिज पर पूर्ण आंतरिक मूल्य को प्रभावित करता है", "संप्रभु बांड ब्लॉकों पर सीमा पार इंडेक्स यील्ड का ऐतिहासिक सहसंबंध मानचित्रण", "पैसिव इंडेक्स रणनीतियों से ट्रैकिंग त्रुटियों को अलग करने वाला मानक विचलन मीट्रिक"] },
            correct: 0
        },
        {
            en: { q: "Under the SEBI infrastructure framework, an Asset Management Company (AMC) must possess a minimum net worth of what value to manage mutual fund schemes legally?", opts: ["₹50 Crore", "₹10 Crore", "₹25 Crore", "₹100 Crore"] },
            hi: { q: "सेबी बुनियादी ढांचा ढांचे के तहत, म्यूचुअल फंड योजनाओं को कानूनी रूप से प्रबंधित करने के लिए एक एसेट मैनेजमेंट कंपनी (AMC) के पास न्यूनतम कितनी नेट वर्थ होनी चाहिए?", opts: ["₹50 करोड़ (₹50 Crore)", "₹10 करोड़", "₹25 करोड़", "₹100 करोड़"] },
            correct: 0
        },
        {
            en: { q: "Inside life insurance contract architectures, what does the 'Principle of Indemnity' specifically exclude from full commercial restitution formats?", opts: ["Pure Life Insurance policies, because human life possesses an inestimable financial value that cannot be replaced", "Marine cargo transit damages caused via physical oceanic climate hazards", "Commercial fire breakdowns tracked across corporate factory mainframes", "Cross-border logistics asset liabilities covered under syndicated reinsurance wrappers"] },
            hi: { q: "जीवन बीमा अनुबंध संरचनाओं के भीतर, 'क्षतिपूर्ति का सिद्धांत' (Principle of Indemnity) विशेष रूप से पूर्ण व्यावसायिक बहाली प्रारूपों से किसे बाहर करता है?", opts: ["शुद्ध जीवन बीमा पॉलिसियां, क्योंकि मानव जीवन का एक अमूल्य वित्तीय मूल्य है जिसे बदला नहीं जा सकता", "भौतिक समुद्री जलवायु खतरों के कारण समुद्री कार्गो पारगमन नुकसान", "कॉर्पोरेट फैक्ट्री मेनफ्रेम में ट्रैक किए गए व्यावसायिक आग के नुकसान", "सिंडिकेटेड पुनर्बीमा रैपर्स के तहत कवर की गई सीमा पार रसद परिसंपत्ति देनदारियां"] },
            correct: 0
        },
        {
            en: { q: "What occurs inside exchange derivatives clearing house loops when an account triggers a 'Margin Call'?", opts: ["The client must instantly deploy additional capital funds to fulfill initial maintenance margin gaps or risk forced position liquidations", "The database automatically prints compound interest rate bonus payouts to nominee logs", "The trading clearing entity switches option execution formats from European to American setups", "The structural baseline conversion flips the underlying futures parameters into spot deliveries"] },
            hi: { q: "एक्सचेंज डेरिवेटिव क्लियरिंग हाउस लूप के भीतर क्या होता है जब कोई खाता 'मार्जिन कॉल' (Margin Call) ट्रिगर करता है?", opts: ["प्रारंभिक रखरखाव मार्जिन अंतराल को पूरा करने के लिए ग्राहक को तुरंत अतिरिक्त पूंजी लगानी होगी अन्यथा पोजीशन को जबरन बंद कर दिया जाएगा", "डेटाबेस स्वचालित रूप से नामांकित लॉग में चक्रवृद्धि ब्याज दर बोनस भुगतान प्रिंट करता है", "ट्रेडिंग क्लियरिंग इकाई ऑप्शन निष्पादन प्रारूपों को यूरोपीय से अमेरिकी सेटअप में बदल देती है", "संरचनात्मक बेसलाइन रूपांतरण अंतर्निहित फ्यूचर्स मापदंडों को हाजिर डिलीवरी में बदल देता है"] },
            correct: 0
        },
        {
            en: { q: "What does the specific term 'Contango' describe inside exchange-traded commodity forward curves?", opts: ["A market layout where future delivery prices exceed current spot parameters, reflecting continuous carrying overheads", "An acute drop in physical warehouse storage metrics reaching absolute zero capacities", "The immediate suspension of derivative clearing house protocols triggered via statutory bodies", "A linear convergence zone where option delta metrics match baseline asset yields precisely"] },
            hi: { q: "एक्सचेंज-ट्रेडेड कमोडिटी फॉरवर्ड कर्व्स के भीतर विशिष्ट शब्द 'कंतैंगो' (Contango) क्या दर्शाता है?", opts: ["एक बाजार लेआउट जहां भविष्य की डिलीवरी की कीमतें वर्तमान हाजिर मापदंडों से अधिक होती हैं, जो निरंतर वहन ओवरहेड्स को दर्शाती हैं", "भौतिक गोदाम भंडारण मेट्रिक्स में भारी गिरावट जो पूर्ण शून्य क्षमता तक पहुंच जाती है", "वैधानिक निकायों के माध्यम से ट्रिगर किए गए डेरिवेटिव क्लियरिंग हाउस प्रोटोकॉल का तत्काल निलंबन", "एक रैखिक अभिसरण क्षेत्र जहां ऑप्शन डेल्टा मेट्रिक्स बेसलाइन परिसंपत्ति यील्ड से सटीक रूप से मेल खाते हैं"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI mutual fund guidelines, how frequently must open-ended mutual fund schemes calculate and publish their Net Asset Value (NAV) on official portals?", opts: ["Every Business Day", "Once a Week on Friday afternoons", "Monthly inside corporate accounting journals", "Quarterly post board of trustee verification cycles"] },
            hi: { q: "सेबी म्यूचुअल फंड दिशानिर्देशों के तहत, ओपन-एंडेड म्यूचुअल फंड योजनाओं को आधिकारिक पोर्टलों पर कितनी बार अपने नेट एसेट वैल्यू (NAV) की गणना और प्रकाशन करना चाहिए?", opts: ["प्रत्येक व्यावसायिक दिन (Every Business Day)", "सप्ताह में एक बार शुक्रवार की दोपहर को", "कॉर्पोरेट लेखांकन पत्रिकाओं के भीतर मासिक रूप से", "ट्रस्टी सत्यापन चक्र के त्रैमासिक पोस्ट बोर्ड के बाद"] },
            correct: 0
        },
        {
            en: { q: "What does the option Greek 'Charm' or 'Delta Decay' map inside multi-asset derivatives portfolios?", opts: ["The rate of modification in Delta relative to the passage of time over horizons", "The acceleration velocity of Vega changes when implied volatility moves by 1%", "The structural interest index tracking benchmark adjustments handled via central bank updates", "The dynamic error variance checked across physical warehouse metals cargo sheets"] },
            hi: { q: "मल्टी-एसेट डेरिवेटिव पोर्टफोलियो के भीतर ऑप्शन ग्रीक 'चार्म' (Charm) या 'डेल्टा डिके' क्या दर्शाता है?", opts: ["क्षितिज पर समय बीतने के सापेक्ष डेल्टा (Delta) में होने वाले संशोधन की दर", "निहित अस्थिरता में 1% के बदलाव पर वेगा परिवर्तनों की त्वरण गति", "केंद्रीय बैंक अपडेट के माध्यम से संभाले जाने वाले संरचनात्मक ब्याज सूचकांक ट्रैकिंग बेंचमार्क समायोजन", "भौतिक गोदाम धातु कार्गो शीट में जांची गई गतिशील त्रुटि विचरण"] },
            correct: 0
        },
        {
            en: { q: "Inside the IRDAI legislative network, a life insurance policy can be absolute and complete in its assignment pathway through what mechanism?", opts: ["An endorsement executed formally upon the back of the policy document or via a separate registered deed", "An oral configuration verified before field distribution agents across state centers", "A dynamic loyalty bonus point allocation tracked on digital database nodes", "A standard clearance step managed via clearing house corporate accounting desks"] },
            hi: { q: "IRDAI विधायी नेटवर्क के भीतर, एक जीवन बीमा पॉलिसी किस तंत्र के माध्यम से अपने असाइनमेंट (Assignment) मार्ग में पूर्ण और मुकम्मल हो सकती है?", opts: ["पॉलिसी दस्तावेज़ के पीछे औपचारिक रूप से निष्पादित एक एंडोर्समेंट या एक अलग पंजीकृत विलेख (Registered deed) के माध्यम से", "राज्य केंद्रों में फील्ड वितरण एजेंटों के सामने सत्यापित एक मौखिक विन्यास", "डिजिटल डेटाबेस नोड्स पर ट्रैक किया गया एक गतिशील वफादारी बोनस अंक आवंटन", "क्लियरिंग हाउस कॉर्पोरेट अकाउंटिंग डेस्क के माध्यम से प्रबंधित एक मानक क्लीयरेंस चरण"] },
            correct: 0
        },
        {
            en: { q: "In exchange currency derivatives configurations, what entity acts as the primary market regulator executing inspections over trading desks inside India?", opts: ["The Securities and Exchange Board of India (SEBI)", "The Association of Mutual Funds in India Central Bureau", "The Ministry of Commerce Foreign Trade Wing Allocation Panel", "The Lead Broker Syndicate Risk Management Core Node"] },
            hi: { q: "एक्सचेंज मुद्रा डेरिवेटिव कॉन्फ़िगरेशन में, भारत के भीतर ट्रेडिंग डेस्क का निरीक्षण करने वाली प्राथमिक बाजार नियामक संस्था कौन सी है?", opts: ["भारतीय प्रतिभूति और विनिमय बोर्ड (SEBI)", "एसोसिएशन ऑफ म्यूचुअल फंड्स इन इंडिया सेंट्रल ब्यूरो", "वाणिज्य मंत्रालय विदेश व्यापार विंग आवंटन पैनल", "लीड ब्रोकर सिंडिकेट जोखिम प्रबंधन कोर नोड"] },
            correct: 0
        },
        {
            en: { q: "What does an investor execute when constructing a 'Bear Put Spread' options trading layout?", opts: ["Buys an ATM Put option alongside simultaneously selling a lower strike OTM Put option on the identical underlying asset", "Sells an uncovered deep ITM call contract while executing capital swaps across currencies", "Combines a spot commodity purchase layout backed with structural gold warehouse certificates", "Writes sequential calendar rollover put options across different expiry series parameters"] },
            hi: { q: "एक 'बियर पुट स्प्रेड' (Bear Put Spread) ऑप्शंस ट्रेडिंग लेआउट का निर्माण करते समय एक निवेशक क्या निष्पादित करता है?", opts: ["समान अंतर्निहित परिसंपत्ति पर एक एटीएम (ATM) पुट ऑप्शन खरीदता है और साथ ही एक कम स्ट्राइक वाला ओटीएम (OTM) पुट ऑप्शन बेचता है", "मुद्राओं में पूंजी स्वैप निष्पादित करते समय एक अनकवर्ड डीप आईटीएम कॉल अनुबंध बेचता है", "संरचनात्मक स्वर्ण गोदाम प्रमाणपत्रों द्वारा समर्थित एक हाजिर कमोडिटी खरीद लेआउट को जोड़ता है", "विभिन्न एक्सपायरी श्रृंखला मापदंडों में अनुक्रमिक कैलेंडर रोलओवर पुट ऑप्शंस लिखता है"] },
            correct: 0
        },
        {
            en: { q: "Inside fundamental equity asset research, what does the specific term 'Enterprise Value' (EV) evaluate?", opts: ["The absolute theoretical takeover price of a corporate entity, calculated as Market Cap plus Total Debt minus Cash reserves", "The total count of permanent workers logged inside corporate human resource software mainframes", "The administrative processing tax ledger evaluated across state revenue departments", "The historical dividend payout coefficient tracking benchmark index changes dynamically"] },
            hi: { q: "मौलिक इक्विटी परिसंपत्ति अनुसंधान के भीतर, विशिष्ट शब्द 'एंटरप्राइज वैल्यू' (Enterprise Value - EV) क्या दर्शाता है?", opts: ["किसी कॉर्पोरेट इकाई की पूर्ण सैद्धांतिक अधिग्रहण कीमत, जिसकी गणना मार्केट कैप प्लस कुल ऋण माइनस नकद भंडार के रूप में की जाती है", "कॉर्पोरेट मानव संसाधन सॉफ्टवेयर मेनफ्रेम के भीतर लॉग इन स्थायी श्रमिकों की कुल संख्या", "राज्य राजस्व विभागों में मूल्यांकित प्रशासनिक प्रसंस्करण कर बहीखाता", "बेंचमार्क इंडेक्स परिवर्तनों को गतिशील रूप से ट्रैक करने वाला ऐतिहासिक लाभांश भुगतान गुणांक"] },
            correct: 0
        },
        {
            en: { q: "In commodity markets, what term defines a market state where near-term physical spot asset prices trade significantly above corresponding futures contract configurations?", opts: ["Backwardation", "Contango Curve Layout", "Arbitrage Equalization Slabs", "Short Squeeze Horizon Grid"] },
            hi: { q: "कमोडिटी बाजारों में, कौन सा शब्द उस बाजार स्थिति को परिभाषित करता है जहां निकट-अवधि की भौतिक हाजिर परिसंपत्ति की कीमतें संबंधित फ्यूचर्स अनुबंध विन्यासों से काफी ऊपर ट्रेड करती हैं?", opts: ["बैकवर्डेशन (Backwardation)", "कंतैंगो कर्व लेआउट", "आर्बिट्रेज इक्वलाइजेशन स्लैब", "शॉर्ट स्क्वीज़ होराइजन ग्रिड"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI mutual fund guidelines, what represents the primary structural objective of an open-ended 'Arbitrage Fund' scheme?", opts: ["To generate capital returns by exploiting mispricing opportunities between cash and derivatives markets simultaneously", "To deploy capital assets 100% into small-cap technological micro startup venture shares", "To trade international physical bullion setups across cross-border commodity registries", "To lock in funds for 15 years inside sovereign high-yield infrastructure credit channels"] },
            hi: { q: "सेबी म्यूचुअल फंड दिशानिर्देशों के तहत, एक ओपन-एंडेड 'आर्बिट्रेज फंड' (Arbitrage Fund) योजना का प्राथमिक संरचनात्मक उद्देश्य क्या है?", opts: ["नकद (Cash) और डेरिवेटिव बाजारों के बीच मूल्य निर्धारण के अवसरों का एक साथ लाभ उठाकर पूंजीगत रिटर्न उत्पन्न करना", "स्मॉल-कैप तकनीकी माइक्रो स्टार्टअप वेंचर शेयरों में पूंजीगत संपत्ति का 100% निवेश करना", "सीमा पार कमोडिटी रजिस्ट्रियों में अंतरराष्ट्रीय भौतिक बुलियन सेटअप का व्यापार करना", "संप्रभु उच्च उपज वाले बुनियादी ढांचा क्रेडिट चैनलों के भीतर 15 वर्षों के लिए धन को लॉक करना"] },
            correct: 0
        },
        {
            en: { q: "Inside the general insurance corporate ecosystem, what does the 'Principle of Subrogation' authorize an insurer to execute post claim settlement?", opts: ["To legally step into the shoes of the insured to pursue recovery damages from the third party responsible for the loss", "To double the direct premium multiplier parameters dynamically inside renewal database logs", "To cancel all statutory nominee allocation listings managed across corporate network mainframes", "To transfer the remaining physical asset layers to interstate sovereign treasury vaults"] },
            hi: { q: "सामान्य बीमा कॉर्पोरेट पारिस्थितिकी तंत्र के भीतर, 'प्रत्यासन का सिद्धांत' (Principle of Subrogation) दावा निपटान के बाद बीमाकर्ता को क्या निष्पादित करने के लिए अधिकृत करता है?", opts: ["नुकसान के लिए जिम्मेदार तीसरे पक्ष से वसूली के लिए कानूनी रूप से बीमित व्यक्ति के स्थान पर कदम रखना", "नवीनीकरण डेटाबेस लॉग के भीतर प्रत्यक्ष प्रीमियम गुणक मापदंडों को गतिशील रूप से दोगुना करना", "कॉर्पोरेट नेटवर्क मेनफ्रेम में प्रबंधित सभी वैधानिक नामांकित आवंटन लिस्टिंग को रद्द करना", "शेष भौतिक संपत्ति परतों को अंतरराज्यीय संप्रभु ट्रेजरी वॉल्ट में स्थानांतरित करना"] },
            correct: 0
        },
        {
            en: { q: "What does the option Greek 'Vanna' measure inside multi-asset complex derivatives structures?", opts: ["The sensitivity of an option's Delta relative to a 1% shift in the underlying asset's implied volatility", "The breakdown speed of the Theta component tracked over calendar horizons", "The calculation variance separating sovereign repo metrics across treasury desks", "The grading accuracy index tracking physical warehouse metals delivery logs"] },
            hi: { q: "मल्टी-एसेट जटिल डेरिवेटिव संरचनाओं के भीतर ऑप्शन ग्रीक 'वान्ना' (Vanna) क्या मापता है?", opts: ["अंतर्निहित परिसंपत्ति की निहित अस्थिरता में 1% के बदलाव के सापेक्ष किसी ऑप्शन के डेल्टा (Delta) की संवेदनशीलता", "कैलेंडर क्षितिज पर ट्रैक किए गए थिटा (Theta) घटक के घटने की गति", "ट्रेजरी डेस्क पर संप्रभु रेपो मेट्रिक्स को अलग करने वाला गणना विचरण", "भौतिक गोदाम धातुओं के वितरण लॉग को ट्रैक करने वाला ग्रेडिंग सटीकता सूचकांक"] },
            correct: 0
        },
        {
            en: { q: "Under IRDAI rules, what legal status does a 'Nominee' possess inside a standard life insurance contract structure?", opts: ["A legal trustee authorized to receive the claim benefits on death, bound to distribute them to the legal heirs", "The absolute owner of the policy asset layers completely bypassing inheritance codes", "A corporate field agent appointed directly to handle cross-border marketing networks", "The primary clearing desk officer managing database re-verification login steps"] },
            hi: { q: "IRDAI नियमों के तहत, एक मानक जीवन बीमा अनुबंध संरचना के भीतर एक 'नामांकित व्यक्ति' (Nominee) के पास क्या कानूनी दर्जा होता है?", opts: ["मृत्यु पर दावा लाभ प्राप्त करने के लिए अधिकृत एक कानूनी ट्रस्टी, जो उन्हें कानूनी वारिसों में वितरित करने के लिए बाध्य है", "उत्तराधिकार संहिताओं को पूरी तरह से दरकिनार करते हुए पॉलिसी परिसंपत्ति परतों का पूर्ण मालिक", "सीमा पार विपणन नेटवर्क को संभालने के लिए सीधे नियुक्त एक कॉर्पोरेट क्षेत्र एजेंट", "डेटाबेस पुनर्सत्यापन लॉगिन चरणों का प्रबंधन करने वाला प्राथमिक क्लियरिंग डेस्क अधिकारी"] },
            correct: 0
        },
        {
            en: { q: "In exchange currency derivatives systems inside India, what does the specific term 'Cross-Currency Pairs' signify?", opts: ["Contracts trading pairs that do not involve the Indian Rupee (INR) as one of its legs, such as EUR-USD or GBP-USD", "The automatic conversion of spot cash balances into physical sovereign treasury bonds", "The regulatory interface mechanism connecting SEBI platforms to international tracking registries", "The clearing corporation ledger adjustments managed over interstate clearing centers"] },
            hi: { q: "भारत में एक्सचेंज मुद्रा डेरिवेटिव प्रणालियों के भीतर, विशिष्ट शब्द 'क्रॉस-करेंसी जोड़े' (Cross-Currency Pairs) क्या दर्शाता है?", opts: ["अनुबंध ट्रेडिंग जोड़े जिनमें भारतीय रुपया (INR) शामिल नहीं है, जैसे EUR-USD या GBP-USD", "हाजिर नकद शेष का भौतिक संप्रभु ट्रेजरी बांड में स्वचालित रूपांतरण", "सेबी प्लेटफॉर्म को अंतरराष्ट्रीय ट्रैकिंग रजिस्ट्रियों से जोड़ने वाला नियामक इंटरफ़ेस तंत्र", "अंतरराज्यीय क्लियरिंग केंद्रों पर प्रबंधित क्लियरिंग कॉर्पोरेशन बहीखाता समायोजन"] },
            correct: 0
        },
        {
            en: { q: "What options configuration is established when an investor executes a 'Bull Call Spread' strategy layout?", opts: ["Buys an ATM Call option alongside simultaneously selling a higher strike OTM Call option on matching underlying assets", "Writes an uncovered deep ITM put option while executing macro asset allocation switches", "Combines a spot gold delivery order backed via certified physical commodity repository channels", "Sells consecutive calendar rollover structures across volatile technology index parameters"] },
            hi: { q: "जब एक निवेशक 'बुल कॉल स्प्रेड' (Bull Call Spread) रणनीति लेआउट निष्पादित करता है तो कौन सा ऑप्शंस कॉन्फ़िगरेशन स्थापित होता है?", opts: ["एक एटीएम (ATM) कॉल ऑप्शन खरीदता है और साथ ही मिलान वाले अंतर्निहित परिसंपत्तियों पर एक उच्च स्ट्राइक वाला ओटीएम (OTM) कॉल ऑप्शन बेचता है", "व्यापक परिसंपत्ति आवंटन स्विच निष्पादित करते समय एक अनकवर्ड डीप आईटीएम पुट ऑप्शन लिखता है", "प्रमाणित भौतिक कमोडिटी रिपोजिटरी चैनलों के माध्यम से समर्थित हाजिर सोने के वितरण आदेश को जोड़ता है", "अस्थिर प्रौद्योगिकी सूचकांक मापदंडों में लगातार कैलेंडर रोलओवर संरचनाएं बेचता है"] },
            correct: 0
        },
        {
            en: { q: "Inside fundamental equity research, what does the evaluation multiplier 'Price-to-Sales (P/S) Ratio' precisely isolate?", opts: ["The market capitalization of a company divided by its total annual sales or revenue turnover metrics", "The relation separating direct asset premiums from operational overhead tax indices", "The structural error configuration tracking network mainframe re-verification login delays", "The dividend allocation percentage distributed to institutional corporate sponsors annually"] },
            hi: { q: "मौलिक इक्विटी अनुसंधान के भीतर, मूल्यांकन मल्टीपल 'प्राइस-टू-सेल्स (P/S) रेशियो' सटीक रूप से क्या दर्शाता है?", opts: ["कंपनी का मार्केट कैपिटलाइजेशन उसकी कुल वार्षिक बिक्री या राजस्व टर्नओवर मेट्रिक्स द्वारा विभाजित", "प्रत्यक्ष परिसंपत्ति प्रीमियम को परिचालन ओवरहेड कर सूचकांकों से अलग करने वाला संबंध", "नेटवर्क मेनफ्रेम पुनर्सत्यापन लॉगिन देरी को ट्रैक करने वाला संरचनात्मक त्रुटि विन्यास", "वार्षिक रूप से संस्थागत कॉर्पोरेट प्रायोजकों को वितरित लाभांश आवंटन प्रतिशत"] },
            correct: 0
        },
        {
            en: { q: "In the physical commodity derivatives ecosystem, what process is known as 'Grading' inside certified warehouses?", opts: ["The scientific testing and classification of a commodity's physical quality based on exchange-specified standards", "The allocation step mapping distributor commission tiers to certified field brokers", "The dynamic processing matrix evaluated to clear outdated accounting ledger rows", "The statutory inspection applied over structural mainframe computer network installations"] },
            hi: { q: "भौतिक कमोडिटी डेरिवेटिव पारिस्थितिकी तंत्र के भीतर, प्रमाणित गोदामों में 'ग्रेडिंग' (Grading) के रूप में किस प्रक्रिया को जाना जाता है?", opts: ["एक्सचेंज द्वारा निर्दिष्ट मानकों के आधार पर किसी कमोडिटी की भौतिक गुणवत्ता का वैज्ञानिक परीक्षण और वर्गीकरण", "प्रमाणित फ़ील्ड दलालों को वितरक कमीशन स्तरों से मैप करने वाला आवंटन चरण", "पुराने लेखा बहीखाता पंक्तियों को साफ करने के लिए मूल्यांकित गतिशील प्रसंस्करण मैट्रिक्स", "संरचनात्मक मेनफ्रेम कंप्यूटर नेटवर्क इंस्टॉलेशन पर लागू वैधानिक निरीक्षण"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI mutual fund guidelines, what represents the maximum percentage cap for the 'Total Expense Ratio' (TER) allowed in an open-ended diversified equity scheme with an AUM up to ₹500 Crore?", opts: ["2.25%", "1.50%", "1.00%", "3.00%"] },
            hi: { q: "सेबी म्यूचुअल फंड दिशानिर्देशों के तहत, ₹500 करोड़ तक की एयूएम (AUM) वाली ओपन-एंडेड विविधीकृत इक्विटी योजना में अनुमत 'टोटल एक्सपेंस रेशियो' (TER) की अधिकतम प्रतिशत सीमा क्या है?", opts: ["2.25%", "1.50%", "1.00%", "3.00%"] },
            correct: 0
        },
        {
            en: { q: "What does the option Greek 'Volga' or 'Vomma' quantify inside complex mathematical volatility tracking matrix blocks?", opts: ["The rate of change in an option's Vega relative to shifts inside the underlying asset's implied volatility layer", "The time decay factor affecting the intrinsic value parameter across contract updates", "The dynamic variance checked between cross-border sovereign baseline treasury asset indices", "The standard deviation metric isolating tracking errors from physical warehouse deliveries"] },
            hi: { q: "जटिल गणितीय अस्थिरता ट्रैकिंग मैट्रिक्स ब्लॉकों के भीतर ऑप्शन ग्रीक 'वोल्गा' (Volga) या 'वोम्मा' (Vomma) क्या मापता है?", opts: ["अंतर्निहित परिसंपत्ति की निहित अस्थिरता परत के भीतर बदलाव के सापेक्ष किसी ऑप्शन के वेगा (Vega) में बदलाव की दर", "अनुबंध अपडेट में आंतरिक मूल्य पैरामीटर को प्रभावित करने वाला समय क्षय कारक", "सीमा पार संप्रभु आधारभूत ट्रेजरी परिसंपत्ति सूचकांकों के बीच जांचा गया गतिशील विचरण", "भौतिक गोदाम वितरण से ट्रैकिंग त्रुटियों को अलग करने वाला मानक विचलन मीट्रिक"] },
            correct: 0
        },
        {
            en: { q: "Inside the insurance administrative pipeline, what does the specific principle 'Uberrimae Fidei' enforce completely?", opts: ["The Principle of Utmost Good Faith, requiring both parties to disclose all material facts transparently without concealment", "The structural allocation formula used to determine broker incentive configurations across states", "The legal pathway enabling clearing house desks to confiscate damaged physical cargo items", "The automated calculation matrix measuring solvency adequate capital baselines quarterly"] },
            hi: { q: "बीमा प्रशासनिक पाइपलाइन के भीतर, विशिष्ट सिद्धांत 'उबेरिमे फिदेई' (Uberrimae Fidei) पूरी तरह से क्या लागू करता है?", opts: ["परम सद्विश्वास का सिद्धांत (Principle of Utmost Good Faith), जिसके तहत दोनों पक्षों को बिना किसी छुपाव के सभी भौतिक तथ्यों को पारदर्शी रूप से प्रकट करना आवश्यक है", "राज्यों में ब्रोकर प्रोत्साहन विन्यास निर्धारित करने के लिए उपयोग किया जाने वाला संरचनात्मक आवंटन फॉर्मूला", "क्लियरिंग हाउस डेस्क को क्षतिग्रस्त भौतिक कार्गो वस्तुओं को जब्त करने में सक्षम बनाने वाला कानूनी मार्ग", "त्रैमासिक रूप से सॉल्वेंसी पर्याप्त पूंजी आधार को मापने वाला स्वचालित गणना मैट्रिक्स"] },
            correct: 0
        },
        {
            en: { q: "In exchange currency derivatives setups, what does the specific metric 'Premium' signify during execution?", opts: ["The absolute cost price paid by the option buyer to the option writer to acquire derivative contract privileges", "The dynamic processing tax tariff evaluated across interstate clearance center mainframes", "The cumulative tracking error variance monitored inside passive index allocation strategies", "The sovereign interest rate multiplier added dynamically by central banking repository units"] },
            hi: { q: "एक्सचेंज मुद्रा डेरिवेटिव सेटअप में, निष्पादन के दौरान विशिष्ट मीट्रिक 'प्रीमियम' (Premium) क्या दर्शाता है?", opts: ["ऑप्शन अनुबंध विशेषाधिकार प्राप्त करने के लिए ऑप्शन खरीदार द्वारा ऑप्शन राइटर को भुगतान की गई कुल लागत कीमत", "अंतरराज्यीय क्लीयरेंस सेंटर मेनफ्रेम में मूल्यांकित गतिशील प्रसंस्करण कर टैरिफ", "पैसिव इंडेक्स आवंटन रणनीतियों के भीतर मॉनिटर की गई संचयी ट्रैकिंग त्रुटि विचरण", "केंद्रीय बैंकिंग रिपोजिटरी इकाइयों द्वारा गतिशील रूप से जोड़ा गया संप्रभु ब्याज दर गुणक"] },
            correct: 0
        },
        {
            en: { q: "What options trading layout is formulated when an investor simultaneously sells a higher strike Call option and buys an even higher strike Call option?", opts: ["Bear Call Spread Layout", "Bull Call Spread Combo", "Long Straddle Execution Matrix", "Protective Put Structural Setup"] },
            hi: { q: "जब एक निवेशक एक साथ एक उच्च स्ट्राइक कॉल ऑप्शन बेचता है और उससे भी अधिक स्ट्राइक कॉल ऑप्शन खरीदता है, तो कौन सा ऑप्शंस ट्रेडिंग लेआउट बनता है?", opts: ["बियर कॉल स्प्रेड लेआउट (Bear Call Spread Layout)", "बुल कॉल स्प्रेड कॉम्बो", "लॉन्ग स्ट्रैडल निष्पादन मैट्रिक्स", "प्रोटेक्टिव पुट स्ट्रक्चरल सेटअप"] },
            correct: 0
        },
        {
            en: { q: "Inside fundamental equity stock research, what parameters define the evaluation metric 'Return on Equity' (ROE)?", opts: ["Net Income divided by Total Shareholders' Equity capital assets, expressed as a percentage", "The total count of institutional retail distributors logged across regional database grids", "The dividend payout value divided by the administrative processing tax overhead coefficient", "The structural error variance separating exchange baseline parameters from network login mainframes"] },
            hi: { q: "मौलिक इक्विटी स्टॉक अनुसंधान के भीतर, कौन से पैरामीटर मूल्यांकन मीट्रिक 'रिटर्न ऑन इक्विटी' (ROE) को परिभाषित करते हैं?", opts: ["कुल शेयरधारकों की इक्विटी पूंजी परिसंपत्तियों द्वारा विभाजित शुद्ध आय (Net Income), प्रतिशत के रूप में व्यक्त", "क्षेत्रीय डेटाबेस ग्रिड में लॉग इन संस्थागत खुदरा वितरकों की कुल संख्या", "प्रशासनिक प्रसंस्करण कर ओवरहेड गुणांक द्वारा विभाजित लाभांश भुगतान मूल्य", "नेटवर्क लॉगिन मेनफ्रेम से एक्सचेंज बेसलाइन मापदंडों को अलग करने वाला संरचनात्मक त्रुटि विचरण"] },
            correct: 0
        },
        {
            en: { q: "In physical commodity futures contract configurations, what does an exchange entity declare as the 'Delivery Logic'?", opts: ["The strict operational rules specifying whether a contract is settled via physical asset handover or via cash netting payouts upon expiry", "The marketing layout route used by licensed field distributors across state hubs", "The automated computer processing time threshold required to refresh database interface rows", "The statutory fine schedule triggered following corporate regulatory compliance audit failures"] },
            hi: { q: "भौतिक कमोडिटी फ्यूचर्स अनुबंध विन्यासों में, एक एक्सचेंज संस्था 'डिलीवरी लॉजिक' (Delivery Logic) के रूप में क्या घोषित करती है?", opts: ["सख्त परिचालन नियम जो यह निर्दिष्ट करते हैं कि अनुबंध समाप्ति पर भौतिक संपत्ति हैंडओवर के माध्यम से निपटाया जाएगा या नकद नेटिंग भुगतान के माध्यम से", "राज्य केंद्रों में लाइसेंस प्राप्त क्षेत्र वितरकों द्वारा उपयोग किया जाने वाला विपणन लेआउट मार्ग", "डेटाबेस इंटरफ़ेस पंक्तियों को रीफ्रेश करने के लिए आवश्यक स्वचालित कंप्यूटर प्रसंस्करण समय सीमा", "कॉर्पोरेट नियामक अनुपालन ऑडिट विफलताओं के बाद ट्रिगर होने वाली वैधानिक जुर्माना अनुसूची"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI mutual fund guidelines, what represents the primary mandate of an 'Equity Savings Fund' product category?", opts: ["To deploy capital across equity assets, derivatives arbitrage setups, and debt fixed income channels simultaneously", "To allocate 100% of available net funds into international cryptocurrency venture registries", "To invest exclusively inside sovereign gold futures across multi-commodity exchange counters", "To lock in retail capital assets for a mandatory 10-year structural lifecycle blueprint"] },
            hi: { q: "सेबी म्यूचुअल फंड दिशानिर्देशों के तहत, 'इक्विटी सेविंग्स फंड' (Equity Savings Fund) उत्पाद श्रेणी के प्राथमिक अधिदेश को क्या दर्शाता है?", opts: ["एक ही समय में इक्विटी परिसंपत्तियों, डेरिवेटिव आर्बिट्रेज सेटअप और डेट फिक्स्ड इनकम चैनलों में पूंजी लगाना", "अंतरराष्ट्रीय क्रिप्टोकरेंसी वेंचर रजिस्ट्रियों में उपलब्ध शुद्ध धन का 100% आवंटित करना", "मल्टी-कमोडिटी एक्सचेंज काउंटरों पर विशेष रूप से संप्रभु स्वर्ण फ्यूचर्स के भीतर निवेश करना", "एक अनिवार्य 10-वर्षीय संरचनात्मक जीवनचक्र ब्लूप्रिंट के लिए खुदरा पूंजीगत संपत्तियों को लॉक करना"] },
            correct: 0
        },
        // --- NISM Advanced Standard Mock Test: New Module Compositions (Set 12) ---
        {
            en: { q: "An options portfolio exhibits a high positive Gamma and a high negative Theta. If the underlying spot asset price remains completely stagnant over consecutive trading sessions, what is the compounding financial impact on this net position?", opts: ["The portfolio will experience severe premium decay losses due to the accelerating velocity of Theta, while Gamma fails to generate offsetting gains", "The position value will expand linearly because stagnation triggers volatility compression advantages", "The Delta metric flips its mathematical sign dynamically to establish an automated delta-neutral structural ledger", "The clearing corporation forces an immediate settlement waiver by absorbing the time decay matrix"] },
            hi: { q: "एक ऑप्शंस पोर्टफोलियो में उच्च सकारात्मक गामा (Positive Gamma) और उच्च नकारात्मक थिटा (Negative Theta) दिखाई देता है। यदि अंतर्निहित हाजिर परिसंपत्ति की कीमत लगातार कई ट्रेडिंग सत्रों तक पूरी तरह से स्थिर रहती है, तो इस नेट पोजीशन पर पड़ने वाला वित्तीय प्रभाव क्या होगा?", opts: ["थिटा की बढ़ती गति के कारण पोर्टफोलियो को गंभीर प्रीमियम क्षय (Decay) का नुकसान होगा, जबकि गामा कोई प्रतिपूरक लाभ उत्पन्न नहीं कर पाएगा", "पोजीशन का मूल्य रैखिक रूप से बढ़ेगा क्योंकि स्थिरता से अस्थिरता संपीड़न के लाभ ट्रिगर होते हैं", "डेल्टा मीट्रिक एक स्वचालित डेल्टा-न्यूट्रल संरचनात्मक बहीखाता स्थापित करने के लिए गतिशील रूप से अपने गणितीय चिह्न को बदल देता है", "क्लियरिंग कॉरपोरेशन समय क्षय मैट्रिक्स को अवशोषित करके तत्काल निपटान छूट लागू करता है"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI Alternative Investment Funds (AIF) Regulations, what is the mandatory minimum corpus size required for a fund to operate legally as a Category I or Category II AIF inside India?", opts: ["₹20 Crore", "₹10 Crore", "₹50 Crore", "₹5 Crore"] },
            hi: { q: "सेबी वैकल्पिक निवेश कोष (AIF) नियमों के तहत, भारत के भीतर श्रेणी I या श्रेणी II AIF के रूप में कानूनी रूप से काम करने के लिए किसी फंड के पास न्यूनतम कितना कॉर्पस (Corpus Size) होना अनिवार्य है?", opts: ["₹20 करोड़ (₹20 Crore)", "₹10 करोड़", "₹50 करोड़", "₹5 करोड़"] },
            correct: 0
        },
        {
            en: { q: "In interest rate derivatives traded on Indian stock exchanges, what precise underlying parameter is tracked by a 10-year Government of India (GoI) Security Futures contract?", opts: ["A notional 10-year Government of India security with a fixed semi-annual coupon of 6% per annum", "The daily weighted average operational Repo Rate published officially via the RBI Treasury Desk", "The dynamic overnight call money index managed through institutional banking mainframes", "A basket composed exclusively of short-term 91-day sovereign Treasury Bills"] },
            hi: { q: "भारतीय स्टॉक एक्सचेंजों पर कारोबार करने वाले ब्याज दर डेरिवेटिव (Interest Rate Derivatives) में, 10-वर्षीय भारत सरकार (GoI) प्रतिभूति फ्यूचर्स अनुबंध सटीक रूप से किस अंतर्निहित पैरामीटर को ट्रैक करता है?", opts: ["प्रति वर्ष 6% के निश्चित अर्ध-वार्षिक कूपन वाली एक काल्पनिक 10-वर्षीय भारत सरकार की प्रतिभूति", "आरबीआई ट्रेजरी डेस्क के माध्यम से आधिकारिक तौर पर प्रकाशित दैनिक भारित औसत परिचालन रेपो दर", "संस्थागत बैंकिंग मेनफ्रेम के माध्यम से प्रबंधित गतिशील ओवरनाइट कॉल मनी इंडेक्स", "विशेष रूप से अल्पकालिक 91-दिवसीय संप्रभु ट्रेजरी बिलों से बनी एक टोकरी"] },
            correct: 0
        },
        {
            en: { q: "What does the option Greek 'Speed' or '3rd Order Gamma' quantify inside advanced derivative risk management models?", opts: ["The rate of change in Gamma relative to a 1-unit movement inside the underlying asset's spot price", "The sensitivity of Vega relative to continuous shifts inside implied volatility parameters", "The acceleration of time value decay per calendar day across out-of-the-money contract brackets", "The interest rate variance index mapped to cross-border sovereign baseline treasury blocks"] },
            hi: { q: "उन्नत डेरिवेटिव जोखिम प्रबंधन मॉडल के भीतर ऑप्शन ग्रीक 'स्पीड' (Speed) या 'थर्ड ऑर्डर गामा' सटीक रूप से क्या मापता है?", opts: ["अंतर्निहित परिसंपत्ति के हाजिर मूल्य में 1-इकाई के उतार-चढ़ाव के सापेक्ष गामा (Gamma) में बदलाव की दर", "निहित अस्थिरता मापदंडों के भीतर निरंतर बदलावों के सापेक्ष वेगा (Vega) की संवेदनशीलता", "आउट-ऑफ-द-मनी अनुबंध ब्रैकेट में प्रति कैलेंडर दिन समय मूल्य क्षय की त्वरण गति", "सीमा पार संप्रभु आधारभूत ट्रेजरी ब्लॉकों से मैप किया गया ब्याज दर विचरण सूचकांक"] },
            correct: 0
        },
        {
            en: { q: "According to SEBI REIT (Real Estate Investment Trusts) regulations, what is the mandatory minimum percentage of assets that a REIT must invest in operating, income-generating real estate projects?", opts: ["80% of the total REIT asset value", "50% of the total REIT asset value", "65% of the total REIT asset value", "75% of the total REIT asset value"] },
            hi: { q: "सेबी आरईआईटी (रियल एस्टेट इन्वेस्टमेंट ट्रस्ट) नियमों के अनुसार, आरईआईटी को परिचालन वाले, आय उत्पन्न करने वाले रियल एस्टेट प्रोजेक्ट्स में अपनी संपत्ति का न्यूनतम कितना प्रतिशत अनिवार्य रूप से निवेश करना चाहिए?", opts: ["कुल आरईआईटी परिसंपत्ति मूल्य का 80% (80% of total REIT asset value)", "कुल आरईआईटी परिसंपत्ति मूल्य का 50%", "कुल आरईआईटी परिसंपत्ति मूल्य का 65%", "कुल आरईआईटी परिसंपत्ति मूल्य का 75%"] },
            correct: 0
        },
        {
            en: { q: "A portfolio manager constructs an equity long position worth ₹50 Lakh and wants to hedge against market risk using Nifty Index Futures. If the portfolio beta is 1.20 and the current Nifty Futures contract value is ₹10 Lakh, what is the exact number of contracts required to execute a perfect hedge?", opts: ["6 Short Contracts", "5 Short Contracts", "6 Long Contracts", "4 Short Contracts"] },
            hi: { q: "एक पोर्टफोलियो मैनेजर ₹50 लाख का इक्विटी लॉन्ग पोजीशन बनाता है और निफ्टी इंडेक्स फ्यूचर्स का उपयोग करके बाजार जोखिम से बचाव (Hedge) करना चाहता है। यदि पोर्टफोलियो बीटा 1.20 है और वर्तमान निफ्टी फ्यूचर्स अनुबंध का मूल्य ₹10 लाख है, तो एक सटीक हेज निष्पादित करने के लिए आवश्यक अनुबंधों की संख्या क्या होगी?", opts: ["6 शॉर्ट अनुबंध (6 Short Contracts)", "5 शॉर्ट अनुबंध", "6 लॉन्ग अनुबंध", "4 शॉर्ट अनुबंध"] },
            correct: 0
        },
        {
            en: { q: "Under the SEBI (Prohibition of Insider Trading) Regulations, what specific operational block is defined as a period during which insiders are strictly prohibited from trading in the company's listed securities?", opts: ["Trading Window Closure Period", "Black Out Arbitrage Interval", "Compliance Silence Ledger Threshold", "Regulatory Interlocking Freeze"] },
            hi: { q: "सेबी (अंदरूनी व्यापार निषेध) नियमों के तहत, किस विशिष्ट परिचालन ब्लॉक को ऐसी अवधि के रूप में परिभाषित किया गया है जिसके दौरान अंदरूनी सूत्रों (Insiders) को कंपनी की सूचीबद्ध प्रतिभूतियों में व्यापार करने की सख्त मनाही होती है?", opts: ["ट्रेडिंग विंडो क्लोजर पीरियड (Trading Window Closure Period)", "ब्लैक आउट आर्बिट्रेज इंटरवल", "अनुपालन साइलेंस बहीखाता सीमा", "नियामक इंटरलॉकिंग फ्रीज"] },
            correct: 0
        },
        {
            en: { q: "In commodity options contracts on recognized Indian exchanges, what unique regulatory feature occurs upon the expiration of an In-the-Money (ITM) commodity option?", opts: ["The option contract automatically devolves into a corresponding futures contract position", "The contract is compulsorily settled via direct physical spot cash distribution exclusively", "The clearing house forfeits the entire margin allocation to redistribute it among field brokers", "The option premium parameters freeze retroactively to align with global bullion metrics"] },
            hi: { q: "मान्यता प्राप्त भारतीय एक्सचेंजों पर कमोडिटी ऑप्शंस अनुबंधों में, इन-द-मनी (ITM) कमोडिटी ऑप्शन की समाप्ति पर कौन सी अनूठी नियामक विशेषता सामने आती है?", opts: ["ऑप्शन अनुबंध स्वचालित रूप से एक संबंधित फ्यूचर्स अनुबंध पोजीशन (Futures Contract) में बदल जाता है", "अनुबंध को विशेष रूप से प्रत्यक्ष भौतिक हाजिर नकद वितरण के माध्यम से अनिवार्य रूप से निपटाया जाता है", "क्लियरिंग हाउस फ़ील्ड दलालों के बीच पुनर्वितरित करने के लिए संपूर्ण मार्जिन आवंटन को जब्त कर लेता है", "वैश्विक बुलियन मेट्रिक्स के साथ संरेखित करने के लिए ऑप्शन प्रीमियम पैरामीटर पूर्वव्यापी रूप से फ्रीज हो जाते हैं"] },
            correct: 0
        },
        {
            en: { q: "What does the 'Information Ratio' of an active portfolio manager isolate and evaluate inside investment performance benchmarking matrices?", opts: ["The risk-adjusted active excess return generated by the manager per unit of active risk (Tracking Error)", "The total portfolio return divided by the standard deviation of absolute market movements", "The systematic performance variation calibrated against overnight repo index changes", "The turnover frequency separating growth funds from passive target indices"] },
            hi: { q: "निवेश प्रदर्शन बेंचमार्किंग मेट्रिसेस के भीतर एक सक्रिय पोर्टफोलियो मैनेजर का 'इन्फॉर्मेशन रेशियो' (Information Ratio) किसका मूल्यांकन करता है?", opts: ["सक्रिय जोखिम (Tracking Error) की प्रति इकाई पर प्रबंधक द्वारा उत्पन्न जोखिम-समायोजित सक्रिय अतिरिक्त रिटर्न", "कुल पोर्टफोलियो रिटर्न को पूर्ण बाजार उतार-चढ़ाव के मानक विचलन (Standard Deviation) द्वारा विभाजित मान", "ओवरनाइट रेपो इंडेक्स परिवर्तनों के खिलाफ कैलिब्रेट किया गया व्यवस्थित प्रदर्शन विचरण", "ग्रोथ फंड को पैसिव टारगेट इंडेक्स से अलग करने वाली टर्नओवर आवृत्ति"] },
            correct: 0
        },
        {
            en: { q: "Under IRDAI statutory norms, what mandatory asset liability percentage must an insurance company continuously maintain as its 'Solvency Margin' to absorb catastrophic claim spikes?", opts: ["150%", "100%", "75%", "200%"] },
            hi: { q: "IRDAI वैधानिक मानदंडों के तहत, आकस्मिक दावों के उछाल को अवशोषित करने के लिए एक बीमा कंपनी को अपने 'सॉल्वेंसी मार्जिन' (Solvency Margin) के रूप में लगातार कितना अनिवार्य परिसंपत्ति देयता प्रतिशत बनाए रखना चाहिए?", opts: ["150%", "100%", "75%", "200%"] },
            correct: 0
        },
        {
            en: { q: "What type of technical fixed-income derivative strategy involves buying a near-term bond futures contract and selling a far-term bond futures contract to capitalize on shifts in the yield curve slope?", opts: ["Intra-Commodity Calendar Spread", "Yield Curve Basis Arbitrage", "Cross-Currency Duration Swap", "Naked Volatility Straddle Layout"] },
            hi: { q: "यील्ड कर्व स्लोप (Yield curve slope) में बदलाव का लाभ उठाने के लिए निकट-अवधि के बॉन्ड फ्यूचर्स अनुबंध को खरीदने और दूर-अवधि के बॉन्ड फ्यूचर्स अनुबंध को बेचने वाली तकनीकी फिक्स्ड-इनकम डेरिवेटिव रणनीति को क्या कहा जाता है?", opts: ["इंट्रा-कमोडिटी कैलेंडर स्प्रेड", "यील्ड कर्व बेसिस आर्बिट्रेज (Yield Curve Basis Arbitrage)", "क्रॉस-करेंसी ड्यूरेशन स्वैप", "नेकेड वोलाटिलिटी स्ट्रैडल लेआउट"] },
            correct: 1
        },
        {
            en: { q: "An investor constructs a 'Ratio Call Spread' option strategy. What structural risk profile does this position carry if the underlying spot price spikes infinitely past the upper strike levels?", opts: ["Unlimited downside risk on the short option leg because the quantity of short options exceeds the long options held", "A completely locked and guaranteed flat profit matrix backed by clearing house reserves", "An automated conversion into physical sovereign treasury bonds upon contract expiry", "Zero structural risk since the long call options completely neutralize the entire writing block"] },
            hi: { q: "एक निवेशक 'रेशियो कॉल स्प्रेड' (Ratio Call Spread) ऑप्शन रणनीति बनाता है। यदि अंतर्निहित हाजिर कीमत ऊपरी स्ट्राइक स्तरों के पार असीमित रूप से बढ़ जाती है, तो इस पोजीशन का संरचनात्मक जोखिम प्रोफाइल क्या होगा?", opts: ["शॉर्ट ऑप्शन लेग पर असीमित गिरावट का जोखिम क्योंकि शॉर्ट ऑप्शंस की मात्रा लॉन्ग ऑप्शंस की मात्रा से अधिक है", "क्लियरिंग हाउस रिजर्व द्वारा समर्थित पूरी तरह से लॉक और गारंटीकृत फ्लैट लाभ मैट्रिक्स", "अनुबंध समाप्ति पर भौतिक संप्रभु ट्रेजरी बांड में एक स्वचालित रूपांतरण", "शून्य संरचनात्मक जोखिम क्योंकि लॉन्ग कॉल ऑप्शंस पूरे राइटिंग ब्लॉक को पूरी तरह से न्यूट्रलाइज कर देते हैं"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI Mutual Fund regulations, a 'Flexi Cap Fund' is mandated to deploy what minimum percentage of its aggregate assets into equity and equity-related instruments?", opts: ["65% of total assets", "80% of total assets", "75% of total assets", "100% of total assets exclusively"] },
            hi: { q: "सेबी म्यूचुअल फंड नियमों के अनुसार, एक 'फ्लेक्सी कैप फंड' (Flexi Cap Fund) के लिए अपनी कुल संपत्ति का कितना न्यूनतम प्रतिशत इक्विटी और इक्विटी से संबंधित उपकरणों में निवेश करना अनिवार्य है?", opts: ["कुल संपत्ति का 65% (65% of total assets)", "कुल संपत्ति का 80%", "कुल संपत्ति का 75%", "विशेष रूप से कुल संपत्ति का 100%"] },
            correct: 0
        },
        {
            en: { q: "In currency derivatives trading, what precise pricing anomaly does an arbitrageur exploit if the forward rate exceeds the spot rate adjusted for interest rate differentials between the two nations?", opts: ["Covered Interest Arbitrage Opportunity", "Purchasing Power Parity Variance Calibration", "Uncovered Speculative Momentum Drift", "Cross-Border Sovereign Tax Arbitrage Slabs"] },
            hi: { q: "मुद्रा डेरिवेटिव ट्रेडिंग में, यदि फॉरवर्ड दर दोनों देशों के बीच ब्याज दर के अंतर के लिए समायोजित हाजिर दर (Spot Rate) से अधिक हो जाती है, तो एक आर्बिट्रेजूर किस सटीक मूल्य विसंगति का लाभ उठाता है?", opts: ["कवर्ड इंटरेस्ट आर्बिट्रेज अपॉर्चुनिटी (Covered Interest Arbitrage Opportunity)", "क्रय शक्ति समता विचरण अंशांकन", "अनकवर्ड सट्टा मोमेंटम ड्रिफ्ट", "सीमा पार संप्रभु कर आर्बिट्रेज स्लैब"] },
            correct: 0
        },
        {
            en: { q: "What does the 'Treynor Ratio' of a portfolio isolate when measuring financial performance benchmarks inside modern asset pricing systems?", opts: ["The excess portfolio return generated per unit of systematic risk (Beta)", "The absolute excess return produced relative to the total portfolio standard deviation", "The performance returns tracking error divergence separating active funds from indices", "The accounting asset layout variance calculated post corporate dividend payouts"] },
            hi: { q: "आधुनिक परिसंपत्ति मूल्य निर्धारण प्रणालियों के भीतर वित्तीय प्रदर्शन बेंचमार्क को मापते समय एक पोर्टफोलियो का 'ट्रेनर रेशियो' (Treynor Ratio) क्या अलग करता है?", opts: ["व्यवस्थित जोखिम (Beta) की प्रति इकाई पर उत्पन्न अतिरिक्त पोर्टफोलियो रिटर्न", "कुल पोर्टफोलियो मानक विचलन के सापेक्ष उत्पादित पूर्ण अतिरिक्त रिटर्न", "इंडेक्स से सक्रिय फंड को अलग करने वाला प्रदर्शन रिटर्न ट्रैकिंग एरर विचलन", "कॉर्पोरेट लाभांश भुगतान के बाद गणना की गई लेखांकन परिसंपत्ति लेआउट विचरण"] },
            correct: 0
        },
        {
            en: { q: "Under the SEBI (Issue of Capital and Disclosure Requirements) Regulations, what represents the mandatory structural anchor booking allocation block for Institutional Buyers inside an Initial Public Offering (IPO)?", opts: ["Anchor Investor Portion", "Qualified Institutional Placement Grid", "Qualified Retail Syndicate Allocation", "Non-Institutional High Networth Slabs"] },
            hi: { q: "सेबी (पूंजी जारी करना और प्रकटीकरण आवश्यकताएं) नियमों के तहत, एक आरंभिक सार्वजनिक पेशकश (IPO) के भीतर संस्थागत खरीदारों के लिए अनिवार्य संरचनात्मक एंकर बुकिंग आवंटन ब्लॉक क्या दर्शाता है?", opts: ["एंकर इन्वेस्टर पोर्शन (Anchor Investor Portion)", "क्वालिफाइड इंस्टीट्यूशनल प्लेसमेंट ग्रिड", "क्वालिफाइड रिटेल सिंडिकेट एलोकेशन", "गैर-संस्थागत हाई नेटवर्थ स्लैब"] },
            correct: 0
        },
        {
            en: { q: "In physical commodity futures structures, what exact risk is a commercial metal refiner mitigating when they build a 'Short Hedge' position?", opts: ["The risk of a sharp decline in the physical market spot price of the refined metal before sales are completed", "The risk of a sudden escalation in raw inventory warehouse procurement costs across corridors", "The statutory processing tax fine schedule triggered by unexpected compliance delays", "The internal processing machine structural breakdowns logged inside refinery mainframes"] },
            hi: { q: "भौतिक कमोडिटी फ्यूचर्स संरचनाओं में, एक वाणिज्यिक धातु रिफाइनर (Metal refiner) 'शॉर्ट हेज' (Short Hedge) पोजीशन बनाते समय किस सटीक जोखिम को कम कर रहा होता है?", opts: ["बिक्री पूरी होने से पहले रिफाइंड धातु के भौतिक बाजार हाजिर मूल्य (Spot Price) में भारी गिरावट का जोखिम", "कॉरिडोर में कच्चे इन्वेंट्री गोदाम खरीद लागत में अचानक वृद्धि का जोखिम", "अप्रत्याशित अनुपालन देरी के कारण ट्रिगर होने वाली वैधानिक प्रसंस्करण कर जुर्माना अनुसूची", "रिफाइनरी मेनफ्रेम के भीतर लॉग इन आंतरिक प्रसंस्करण मशीन संरचनात्मक खराबी"] },
            correct: 0
        },
        {
            en: { q: "What does the option Greek 'Color' or 'Gamma Decay' precisely quantify inside multi-asset complex derivatives matrices?", opts: ["The rate of change in Gamma relative to the passage of time over horizons", "The acceleration velocity of Vega changes when implied market volatility shifts by 1%", "The mathematical sensitivity of Rho relative to structural repo adjustment layers", "The standard tracking error variance separating index funds from target assets"] },
            hi: { q: "मल्टी-एसेट जटिल डेरिवेटिव मेट्रिसेस के भीतर ऑप्शन ग्रीक 'कलर' (Color) या 'गामा डिके' सटीक रूप से क्या मापता है?", opts: ["क्षितिज पर समय बीतने (Passage of time) के सापेक्ष गामा (Gamma) में बदलाव की दर", "निहित बाजार अस्थिरता में 1% के बदलाव पर वेगा (Vega) परिवर्तनों की त्वरण गति", "संरचनात्मक रेपो समायोजन परतों के सापेक्ष रो (Rho) की गणितीय संवेदनशीलता", "इंडेक्स फंड को लक्षित परिसंपत्तियों से अलग करने वाला मानक ट्रैकिंग त्रुटि विचरण"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI Mutual Fund rules, what strict asset concentration cap is applied to avoid individual stock exposure hazards within a diversified equity scheme portfolio?", opts: ["No single stock investment can exceed 10% of the scheme's net asset value, subject to explicit sector category limits", "A maximum allocation of 25% per listed corporate entity without any trustee monitoring constraints", "An absolute volume limit equivalent to 50% of the active corporate sponsor's net worth assets", "A floating ceiling metric adjusted dynamically via central clearing corporation algorithms daily"] },
            hi: { q: "सेबी म्यूचुअल फंड नियमों के अनुसार, एक विविवधीकृत इक्विटी योजना पोर्टफोलियो के भीतर व्यक्तिगत स्टॉक एक्सपोजर खतरों से बचने के लिए कौन सी सख्त परिसंपत्ति एकाग्रता सीमा (Asset concentration cap) लागू की गई है?", opts: ["कोई भी एकल स्टॉक निवेश योजना के शुद्ध संपत्ति मूल्य के 10% से अधिक नहीं हो सकता है, जो स्पष्ट क्षेत्र श्रेणी सीमाओं के अधीन है", "बिना किसी ट्रस्टी निगरानी प्रतिबंध के प्रति सूचीबद्ध कॉर्पोरेट संस्था में अधिकतम 25% आवंटन", "सक्रिय कॉर्पोरेट प्रायोजक की कुल मूल्य संपत्ति के 50% के बराबर एक पूर्ण मात्रा सीमा", "दैनिक केंद्रीय क्लियरिंग कॉर्पोरेशन एल्गोरिदम के माध्यम से गतिशील रूप से समायोजित एक फ्लोटिंग सीलिंग मीट्रिक"] },
            correct: 0
        },
        {
            en: { q: "Inside the structural infrastructure of Indian debt markets, what precise instrument characterizes an unsecured short-term debt vehicle issued by corporate entities with a maximum maturity profile up to 1 year?", opts: ["Commercial Paper (CP)", "Certificate of Deposit (CD)", "Sovereign Treasury Zero Bill Bond", "Corporate Infrastructure Floating Debenture"] },
            hi: { q: "भारतीय ऋण बाजारों के ढांचागत बुनियादी ढांचे के भीतर, कौन सा सटीक उपकरण कॉर्पोरेट संस्थाओं द्वारा जारी एक असुरक्षित अल्पकालिक ऋण वाहन (Unsecured short-term debt vehicle) की विशेषता है जिसकी अधिकतम परिपक्वता अवधि 1 वर्ष तक होती है?", opts: ["कमर्शियल पेपर (Commercial Paper - CP)", "सर्टिफिकेट ऑफ डिपॉजिट (CD)", "संप्रभु ट्रेजरी ज़ीरो बिल बॉन्ड", "कॉर्पोरेट इंफ्रास्ट्रक्चर फ्लोटिंग डिबेंचर"] },
            correct: 0
        },
        {
            en: { q: "What advanced option position is created when an investor constructs a 'Iron Condor' strategy layout?", opts: ["Simultaneously selling an OTM Put and buying a lower strike OTM Put, along with selling an OTM Call and buying a higher strike OTM Call", "Buying a deep ITM call contract alongside writing sequential calendar structures across currency blocks", "Combining an asset spot delivery layout backed with structural bullion warehouse certification grids", "Writing sequential calendar rollover put options across mismatched expiration series parameters"] },
            hi: { q: "जब एक निवेशक 'आयरन कोंडोर' (Iron Condor) रणनीति लेआउट बनाता है तो कौन सी उन्नत ऑप्शन पोजीशन स्थापित होती है?", opts: ["एक ओटीएम (OTM) पुट बेचना और कम स्ट्राइक वाला ओटीएम पुट खरीदना, साथ ही एक ओटीएम कॉल बेचना और उच्च स्ट्राइक वाला ओटीएम कॉल खरीदना", "मुद्रा ब्लॉकों में अनुक्रमिक कैलेंडर संरचनाएं लिखने के साथ-साथ एक गहरी आईटीएम कॉल अनुबंध खरीदना", "संरचनात्मक बुलियन गोदाम प्रमाणन ग्रिड द्वारा समर्थित परिसंपत्ति हाजिर वितरण लेआउट को जोड़ना", "असंगत समाप्ति श्रृंखला मापदंडों में अनुक्रमिक कैलेंडर रोलओवर पुट ऑप्शंस लिखना"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI Investment Advisers Regulations, what strict fiduciary operational parameter separates fee-based advisory actions from product distribution execution activities?", opts: ["Corporate entities must completely segregate investment advisory operations from distribution activities via independent arms with zero overlapping staff", "The advisor can collect product commissions directly from asset management entities while charging clients flat hourly rates", "The database automatically blends marketing execution portfolios to compress accounting overhead tax structures", "The compliance infrastructure allows advisory officers to execute client trade layouts through their own personal broker codes"] },
            hi: { q: "सेबी निवेश सलाहकार (Investment Advisers) नियमों के तहत, कौन सा सख्त संप्रभु परिचालन पैरामीटर शुल्क-आधारित सलाहकार कार्यों को उत्पाद वितरण निष्पादन गतिविधियों से अलग करता है?", opts: ["कॉर्पोरेट संस्थाओं को निवेश सलाहकार संचालन को वितरण गतिविधियों से पूरी तरह से अलग करना चाहिए, जिसमें शून्य ओवरलैपिंग कर्मचारी हों", "सलाहकार ग्राहकों से फ्लैट प्रति घंटा दर वसूलते हुए सीधे परिसंपत्ति प्रबंधन संस्थाओं से उत्पाद कमीशन एकत्र कर सकता है", "लेखांकन ओवरहेड कर संरचनाओं को संपीड़ित करने के लिए डेटाबेस स्वचालित रूप से विपणन निष्पादन पोर्टफोलियो को मिश्रित करता है", "अनुपालन बुनियादी ढांचा सलाहकार अधिकारियों को अपने स्वयं के व्यक्तिगत ब्रोकर कोड के माध्यम से ग्राहक व्यापार लेआउट निष्पादित करने की अनुमति देता है"] },
            correct: 0
        },
        {
            en: { q: "Inside fundamental corporate accounting research, what does a company's 'Quick Ratio' or 'Acid-Test Metric' isolate and isolate during systemic liquidity stress tests?", opts: ["The capacity to fulfill immediate short-term obligations using highly liquid current assets, strictly excluding inventory and prepaid expenses", "The gross revenue turnover relative to physical machinery depreciation logged across corporate factories", "The compound dividend payout percentage tracking baseline stock indices dynamically over calendar years", "The structural accounting asset variance calculated post corporate infrastructure line splits"] },
            hi: { q: "मौलिक कॉर्पोरेट लेखांकन अनुसंधान के भीतर, किसी कंपनी का 'क्विक रेशियो' (Quick Ratio) या 'एसिड-टेस्ट मीट्रिक' प्रणालीगत तरलता तनाव परीक्षणों के दौरान किसे अलग करता है और मूल्यांकन करता है?", opts: ["इन्वेंट्री और प्रीपेड खर्चों को कड़ाई से छोड़कर, अत्यधिक तरल वर्तमान संपत्तियों का उपयोग करके तत्काल अल्पकालिक दायित्वों को पूरा करने की क्षमता", "कॉर्पोरेट कारखानों में लॉग इन भौतिक मशीनरी मूल्यह्रास के सापेक्ष सकल राजस्व टर्नओवर", "कैलेंडर वर्षों में गतिशील रूप से आधारभूत स्टॉक सूचकांकों को ट्रैक करने वाला चक्रवृद्धि लाभांश भुगतान प्रतिशत", "कॉर्पोरेट बुनियादी ढांचा लाइन विभाजन के बाद गणना की गई संरचनात्मक लेखांकन परिसंपत्ति विचरण"] },
            correct: 0
        },
        {
            en: { q: "In the exchange currency derivatives segment on Indian platforms, what represents the legal maximum contract expiration profile allowed for trading in USD-INR futures?", opts: ["12 Months", "3 Months", "6 Months", "24 Months"] },
            hi: { q: "भारतीय प्लेटफॉर्म पर एक्सचेंज मुद्रा डेरिवेटिव सेगमेंट में, USD-INR फ्यूचर्स में ट्रेडिंग के लिए अनुमत कानूनी अधिकतम अनुबंध समाप्ति प्रोफाइल (Maximum Contract Expiry) क्या है?", opts: ["12 महीने (12 Months)", "3 महीने", "6 महीने", "24 महीने"] },
            correct: 0
        },
        {
            en: { q: "What structural market condition is defined by the term 'Basis Risk' inside hedging operations utilizing derivative futures instruments?", opts: ["The risk driven by the divergence between the physical spot price of the asset being hedged and the futures price of the contract utilized", "The structural operational risk of clearing house mainframe network login authentication failures", "The absolute capital volume fine structure triggered post corporate compliance execution oversight gaps", "The natural material degradation parameters monitored across accredited commodity warehouse storage hubs"] },
            hi: { q: "डेरिवेटिव फ्यूचर्स उपकरणों का उपयोग करने वाले हेजिंग ऑपरेशन्स के भीतर 'बेसिस रिस्क' (Basis Risk) शब्द किस संरचनात्मक बाजार स्थिति को परिभाषित करता है?", opts: ["हेज़ की जा रही संपत्ति की भौतिक हाजिर कीमत (Spot Price) और उपयोग किए जा रहे अनुबंध की फ्यूचर्स कीमत के बीच विचलन के कारण होने वाला जोखिम", "क्लियरिंग हाउस मेनफ्रेम नेटवर्क लॉगिन प्रमाणीकरण विफलताओं का संरचनात्मक परिचालन जोखिम", "कॉर्पोरेट अनुपालन निष्पादन निरीक्षण अंतराल के बाद ट्रिगर की गई पूर्ण पूंजी मात्रा जुर्माना संरचना", "मान्यता प्राप्त कमोडिटी गोदाम भंडारण केंद्रों में मॉनिटर किए गए प्राकृतिक सामग्री गिरावट पैरामीटर"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI Mutual Fund regulations, what mandatory framework governs the valuation of debt and money market securities inside a scheme portfolio to ensure absolute transparency?", opts: ["Mark-to-Market (MTM) valuation framework processed through independent external valuation agencies approved via SEBI", "A static historical amortization pricing accounting ledger maintained internally by the fund manager", "An automated spreadsheet conversion based exclusively on sovereign central banking overnight baseline indices", "A floating processing matrix adjusted dynamically by corporate sponsors during administrative updates"] },
            hi: { q: "सेबी म्यूचुअल फंड नियमों के तहत, पूर्ण पारदर्शिता सुनिश्चित करने के लिए योजना पोर्टफोलियो के भीतर ऋण (Debt) और मुद्रा बाजार प्रतिभूतियों के मूल्यांकन को कौन सा अनिवार्य ढांचा नियंत्रित करता है?", opts: ["सेबी के माध्यम से अनुमोदित स्वतंत्र बाहरी मूल्यांकन एजेंसियों द्वारा संसाधित मार्क-टू-मार्केट (MTM) मूल्यांकन ढांचा", "फंड मैनेजर द्वारा आंतरिक रूप से बनाए रखा गया एक स्थिर ऐतिहासिक मूल्य निर्धारण लेखा बहीखाता", "विशेष रूप से संप्रभु केंद्रीय बैंकिंग ओवरनाइट आधारभूत सूचकांकों पर आधारित एक स्वचालित स्प्रेडशीट रूपांतरण", "प्रशासनिक अपडेट के दौरान कॉर्पोरेट प्रायोजकों द्वारा गतिशील रूप से समायोजित एक फ्लोटिंग प्रोसेसिंग मैट्रिक्स"] },
            correct: 0
        },
        {
            en: { q: "What does the option Greek 'Zomma' measure inside advanced multi-asset derivatives risk control matrices?", opts: ["The rate of change in an option's Gamma relative to continuous shifts inside the implied volatility layer", "The breakdown speed of the intrinsic parameter component tracked over calendar horizons", "The historical correlation mapping index performance over cross-border treasury desks", "The variance separating direct distribution channels from distributor marketing networks"] },
            hi: { q: "उन्नत मल्टी-एसेट डेरिवेटिव जोखिम नियंत्रण मेट्रिसेस के भीतर ऑप्शन ग्रीक 'जोम्मा' (Zomma) क्या मापता है?", opts: ["निहित अस्थिरता (Implied Volatility) परत के भीतर निरंतर बदलावों के सापेक्ष किसी ऑप्शन के गामा (Gamma) में बदलाव की दर", "कैलेंडर क्षितिज पर ट्रैक किए गए आंतरिक पैरामीटर घटक के घटने की गति", "सीमा पार ट्रेजरी डेस्क पर इंडेक्स प्रदर्शन का ऐतिहासिक सहसंबंध मानचित्रण", "प्रत्यक्ष वितरण चैनलों को वितरक विपणन नेटवर्क से अलग करने वाला विचरण"] },
            correct: 0
        },
        {
            en: { q: "Inside the legislative framework of Indian corporate securities, what statutory institution maintains the master legal ownership records of dematerialized corporate equities and debt papers?", opts: ["The Sebi-Registered Depositories (NSDL / CDSL)", "The National Stock Exchange Clearing Corporation Wing", "The Ministry of Corporate Affairs Online Management Cell", "The Reserve Bank of India Central Public Debt Bureau Counter"] },
            hi: { q: "भारतीय कॉर्पोरेट प्रतिभूतियों के विधायी ढांचे के भीतर, कौन सी वैधानिक संस्था डीमटेरियलाइज्ड (Dematerialized) कॉर्पोरेट इक्विटी और ऋण पत्रों के मास्टर कानूनी स्वामित्व रिकॉर्ड को बनाए रखती है?", opts: ["सेबी-पंजीकृत डिपॉजिटरी (NSDL / CDSL)", "नेशनल स्टॉक एक्सचेंज क्लियरिंग कॉरपोरेशन विंग", "कॉर्पोरेट मामलों के मंत्रालय सेल", "भारतीय रिजर्व बैंक केंद्रीय सार्वजनिक ऋण ब्यूरो काउंटर"] },
            correct: 0
        },
        {
            en: { q: "What options strategy is formulated when an investor purchases a 'Strangle' trading combination layout?", opts: ["Simultaneously purchasing an Out-of-the-Money (OTM) Call option and an Out-of-the-Money (OTM) Put option on matching assets with identical expiry", "Buying an At-the-Money call option alongside writing sequential calendar structures across volatile tech spaces", "Combining a physical gold spot purchase order along with cross-currency futures tracking indices", "Writing sequential calendar rollover options across mismatched expiration series parameters"] },
            hi: { q: "जब एक निवेशक 'स्ट्रैंगल' (Strangle) ट्रेडिंग संयोजन लेआउट खरीदता है तो कौन सी ऑप्शंस रणनीति बनती है?", opts: ["समान एक्सपायरी के साथ मिलान वाली परिसंपत्तियों पर एक साथ एक आउट-ऑफ-द-मनी (OTM) कॉल ऑप्शन और एक आउट-ऑफ-द-मनी (OTM) पुट ऑप्शन खरीदना", "अस्थिर तकनीकी क्षेत्रों में अनुक्रमिक कैलेंडर संरचनाएं लिखने के साथ-साथ एक एट-द-मनी कॉल ऑप्शन खरीदना", "क्रॉस-करेंसी फ्यूचर्स ट्रैकिंग इंडेक्स के साथ एक भौतिक सोने की खरीद के आदेश को जोड़ना", "असंगत समाप्ति श्रृंखला मापदंडों में अनुक्रमिक कैलेंडर रोलओवर ऑप्शंस लिखना"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI rules, what precise category of credit ratings indicates that a debt mutual fund scheme's fixed income instruments possess the absolute highest degree of safety regarding timely servicing of financial obligations?", opts: ["AAA or A1+ ratings according to certified credit rating agencies registered with SEBI", "BBB- structural operational baseline investment indicators", "D tier speculative default indicators tracked inside corporate accounting logs", "AA corporate credit indicators carrying moderate duration parameter margins"] },
            hi: { q: "सेबी के नियमों के अनुसार, क्रेडिट रेटिंग की कौन सी सटीक श्रेणी यह दर्शाती है कि डेट म्यूचुअल फंड योजना के फिक्स्ड इनकम उपकरण वित्तीय दायित्वों के समय पर भुगतान के संबंध में पूर्ण उच्चतम सुरक्षा (Highest Safety) रखते हैं?", opts: ["सेबी के पास पंजीकृत प्रमाणित क्रेडिट रेटिंग एजेंसियों के अनुसार AAA या A1+ रेटिंग", "BBB- संरचनात्मक परिचालन आधारभूत निवेश संकेतक", "कॉर्पोरेट लेखांकन लॉग के भीतर ट्रैक किए गए D श्रेणी के सट्टा डिफ़ॉल्ट संकेतक", "मध्यम अवधि पैरामीटर मार्जिन ले जाने वाले AA कॉर्पोरेट क्रेडिट संकेतक"] },
            correct: 0
        },
        {
            en: { q: "Inside fundamental equity stock research, what does the valuation metric 'EV/EBITDA' precisely assess and evaluate?", opts: ["The total enterprise value of a company relative to its earnings before interest, taxes, depreciation, and amortization, acting as a capital-structure neutral multiple", "The relationship separating corporate asset premiums from administrative processing tax structures", "The structural error configuration tracking network mainframe re-verification delay parameters", "The dividend allocation percentage distributed to institutional corporate sponsors annually across states"] },
            hi: { q: "मौलिक इक्विटी स्टॉक अनुसंधान के भीतर, मूल्यांकन मीट्रिक 'EV/EBITDA' सटीक रूप से क्या आकलन और मूल्यांकन करता है?", opts: ["ब्याज, कर, मूल्यह्रास और अमॉर्टाइजेशन से पहले की कमाई (EBITDA) के सापेक्ष कंपनी का कुल एंटरप्राइज वैल्यू, जो पूंजी-संरचना तटस्थ गुणक के रूप में कार्य करता है", "कॉर्पोरेट परिसंपत्ति प्रीमियम को प्रशासनिक प्रसंस्करण कर संरचनाओं से अलग करने वाला संबंध", "नेटवर्क मेनफ्रेम पुनर्सत्यापन देरी मापदंडों को ट्रैक करने वाला संरचनात्मक त्रुटि विन्यास", "राज्यों में संस्थागत कॉर्पोरेट प्रायोजकों को वार्षिक रूप से वितरित लाभांश आवंटन प्रतिशत"] },
            correct: 0
        },
        {
            en: { q: "In physical commodity derivatives trading frameworks, what operational process handles the electronic generation and management of negotiable warehouse receipts inside India?", opts: ["Repository Systems regulated via the Warehouse Development and Regulatory Authority (WDRA)", "The Clearing House Corporate System Re-verification Bureau Desk", "The State Level Agricultural Mandis Central Database Wing", "The Financial Benchmarks India Pvt. Ltd. Treasury Allocation Counter"] },
            hi: { q: "भौतिक कमोडिटी डेरिवेटिव्स ट्रेडिंग फ्रेमवर्क में, भारत के भीतर परक्राम्य गोदाम रसीदों (Negotiable warehouse receipts) के इलेक्ट्रॉनिक उत्पादन और प्रबंधन को कौन सी परिचालन प्रक्रिया संभालती है?", opts: ["गोदाम विकास और नियामक प्राधिकरण (WDRA) द्वारा विनियमित रिपोजिटरी सिस्टम", "क्लियरिंग हाउस कॉर्पोरेट सिस्टम पुनर्सत्यापन ब्यूरो डेस्क", "राज्य स्तरीय कृषि मंडी केंद्रीय डेटाबेस विंग", "फाइनेंशियल बेंचमार्क इंडिया प्राइवेट लिमिटेड ट्रेजरी आवंटन काउंटर"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI mutual fund guidelines, what represents the primary investment mandate of a 'Dividend Yield Fund' asset category?", opts: ["To deploy a minimum of 65% of net assets into equity and equity-related instruments of companies that are high dividend-yielding entities", "To allocate 100% of available net funds into international technology start-up venture instruments", "To invest exclusively inside sovereign gold futures across multi-commodity exchange clearing windows", "To lock in retail capital assets for a mandatory 15-year structural lifecycle blueprint scheme"] },
            hi: { q: "सेबी म्यूचुअल फंड दिशानिर्देशों के तहत, 'डिविडेंड यील्ड फंड' (Dividend Yield Fund) परिसंपत्ति श्रेणी के प्राथमिक निवेश अधिदेश को क्या दर्शाता है?", opts: ["उच्च लाभांश देने वाली कंपनियों के इक्विटी और इक्विटी से संबंधित उपकरणों में शुद्ध संपत्ति का न्यूनतम 65% निवेश करना", "अंतरराष्ट्रीय प्रौद्योगिकी स्टार्ट-अप वेंचर उपकरणों में उपलब्ध शुद्ध धन का 100% आवंटित करना", "मल्टी-कमोडिटी एक्सचेंज क्लियरिंग विंडो में विशेष रूप से संप्रभु स्वर्ण फ्यूचर्स के भीतर निवेश करना", "एक अनिवार्य 15-वर्षीय संरचनात्मक जीवनचक्र ब्लूप्रिंट योजना के लिए खुदरा पूंजीगत संपत्तियों को लॉक करना"] },
            correct: 0
        },
        {
            en: { q: "What does the option Greek 'Veta' or 'Volatility Decay' quantify inside advanced derivatives mathematical pricing matrix structures?", opts: ["The rate of change in an option's Vega relative to the passage of time over horizons", "The time decay factor affecting the baseline intrinsic value parameter across contract updates", "The dynamic variance checked between cross-border sovereign treasury asset indices quarterly", "The standard deviation metric isolating tracking errors from physical warehouse delivery sheets"] },
            hi: { q: "उन्नत डेरिवेटिव गणितीय मूल्य निर्धारण मैट्रिक्स संरचनाओं के भीतर ऑप्शन ग्रीक 'वीटा' (Veta) या 'वोलाटिलिटी डिके' क्या मापता है?", opts: ["क्षितिज पर समय बीतने (Passage of time) के सापेक्ष किसी ऑप्शन के वेगा (Vega) में बदलाव की दर", "अनुबंध अपडेट में आधारभूत आंतरिक मूल्य पैरामीटर को प्रभावित करने वाला समय क्षय कारक", "त्रैमासिक रूप से सीमा पार संप्रभु ट्रेजरी परिसंपत्ति सूचकांकों के बीच जांचा गया गतिशील विचरण", "भौतिक गोदाम वितरण शीट से ट्रैकिंग त्रुटियों को अलग करने वाला मानक विचलन मीट्रिक"] },
            correct: 0
        },
        {
            en: { q: "Inside the insurance corporate ecosystem, what does the specific term 'Reinsurance' refer to during strategic risk management operations?", opts: ["The process where an insurance company transfers a portion of its corporate underwriting risk exposures to another insurance entity to protect its financial solvency", "The structural allocation formula used to determine field distribution agent incentive tiers", "The legal pathway enabling clearing house desks to auction damaged physical warehouse goods", "The automated calculation matrix measuring capital adequacy baselines across cross-border hubs"] },
            hi: { q: "बीमा कॉर्पोरेट पारिस्थितिकी तंत्र के भीतर, रणनीतिक जोखिम प्रबंधन ऑपरेशन्स के दौरान विशिष्ट शब्द 'पुनर्बीमा' (Reinsurance) किसे संदर्भित करता है?", opts: ["वह प्रक्रिया जिसके तहत एक बीमा कंपनी अपनी वित्तीय सॉल्वेंसी की रक्षा के लिए अपने कॉर्पोरेट अंडरराइटिंग जोखिम एक्सपोजर का एक हिस्सा दूसरी बीमा इकाई को स्थानांतरित करती है", "फील्ड वितरण एजेंट प्रोत्साहन स्तरों को निर्धारित करने के लिए उपयोग किया जाने वाला संरचनात्मक आवंटन फॉर्मूला", "क्लियरिंग हाउस डेस्क को क्षतिग्रस्त भौतिक गोदाम सामानों की नीलामी करने में सक्षम बनाने वाला कानूनी मार्ग", "सीमा पार केंद्रों में पूंजी पर्याप्तता आधार को मापने वाला स्वचालित गणना मैट्रिक्स"] },
            correct: 0
        },
        {
            en: { q: "In exchange currency derivatives execution frameworks, what does the specific term 'In-the-Money (ITM)' signify for a Call Option holder?", opts: ["A market state where the underlying asset's current spot price or futures price is higher than the option's strike price parameters", "A condition where the aggregate option premium drops down to absolute zero margins upon calendar extensions", "The cumulative tracking error variance monitored inside passive index allocation strategies over horizons", "The sovereign interest rate multiplier added dynamically by central banking repository units during adjustments"] },
            hi: { q: "एक्सचेंज मुद्रा डेरिवेटिव निष्पादन ढांचे में, एक कॉल ऑप्शन (Call Option) धारक के लिए विशिष्ट शब्द 'इन-द-मनी (ITM)' क्या दर्शाता है?", opts: ["एक बाजार स्थिति जहां अंतर्निहित परिसंपत्ति की वर्तमान हाजिर कीमत या फ्यूचर्स कीमत ऑप्शन के स्ट्राइक मूल्य (Strike Price) मापदंडों से अधिक होती है", "एक ऐसी स्थिति जहां संचयी ऑप्शन प्रीमियम कैलेंडर विस्तार पर पूर्ण शून्य मार्जिन तक गिर जाता है", "क्षितिज पर पैसिव इंडेक्स आवंटन रणनीतियों के भीतर मॉनिटर की गई संचयी ट्रैकिंग त्रुटि विचरण", "समायोजन के दौरान केंद्रीय बैंकिंग रिपोजिटरी इकाइयों द्वारा गतिशील रूप से जोड़ा गया संप्रभु ब्याज दर गुणक"] },
            correct: 0
        },
        {
            en: { q: "What options configuration is established when an investor executes a 'Bear Call Spread' strategy layout?", opts: ["Buying a higher strike Call option and simultaneously selling a lower strike Call option on matching underlying assets", "Writing an uncovered deep ITM put option while executing macro asset allocation switches across systems", "Combining a spot gold delivery order backed via certified physical commodity repository channels across states", "Sells consecutive calendar rollover structures across volatile technology index parameters inside clearing rooms"] },
            hi: { q: "जब एक निवेशक 'बियर कॉल स्प्रेड' (Bear Call Spread) रणनीति लेआउट निष्पादित करता है तो कौन सा ऑप्शंस कॉन्फ़िगरेशन स्थापित होता है?", opts: ["एक उच्च स्ट्राइक कॉल ऑप्शन खरीदना और साथ ही मिलान वाले अंतर्निहित परिसंपत्तियों पर एक कम स्ट्राइक कॉल ऑप्शन बेचना", "प्रणालियों में व्यापक परिसंपत्ति आवंटन स्विच निष्पादित करते समय एक अनकवर्ड डीप आईटीएम पुट ऑप्शन लिखना", "राज्यों में प्रमाणित भौतिक कमोडिटी रिपोजिटरी चैनलों के माध्यम से समर्थित हाजिर सोने के वितरण आदेश को जोड़ता है", "क्लियरिंग रूम के भीतर अस्थिर प्रौद्योगिकी सूचकांक मापदंडों में लगातार कैलेंडर रोलओवर संरचनाएं बेचना"] },
            correct: 0
        },
        {
            en: { q: "Inside fundamental equity research, what parameters define the corporate evaluation metric 'Return on Capital Employed' (ROCE)?", opts: ["Earnings Before Interest and Taxes (EBIT) divided by Capital Employed (Total Assets minus Current Liabilities), expressed as a percentage", "The total count of institutional retail distributors logged across regional database grid networks", "The dividend payout value divided by the administrative processing tax overhead coefficient baseline", "The structural error variance separating exchange baseline parameters from network login mainframes daily"] },
            hi: { q: "मौलिक इक्विटी अनुसंधान के भीतर, कौन से मापदंड कॉर्पोरेट मूल्यांकन मीट्रिक 'रिटर्न ऑन कैपिटल एम्प्लॉयड' (ROCE) को परिभाषित करते हैं?", opts: ["ब्याज और करों से पहले की कमाई (EBIT) को नियोजित पूंजी (कुल संपत्ति माइनस वर्तमान देनदारियां) द्वारा विभाजित मान, प्रतिशत के रूप में व्यक्त", "क्षेत्रीय डेटाबेस ग्रिड नेटवर्क में लॉग इन संस्थागत खुदरा वितरकों की कुल संख्या", "प्रशासनिक प्रसंस्करण कर ओवरहेड गुणांक आधार रेखा द्वारा विभाजित लाभांश भुगतान मूल्य", "दैनिक नेटवर्क लॉगिन मेनफ्रेम से एक्सचेंज बेसलाइन मापदंडों को अलग करने वाला संरचनात्मक त्रुटि विचरण"] },
            correct: 0
        },
        {
            en: { q: "In physical commodity futures contract configurations, what does an exchange entity declare as the 'Tender Period' inside delivery parameters?", opts: ["The specific window of days prior to contract expiration during which sellers declare their formal intention to deliver physical assets", "The marketing layout route used by licensed field distributors across state hubs during annual reviews", "The automated computer processing time threshold required to refresh database interface rows dynamically", "The statutory fine schedule triggered following corporate regulatory compliance audit failures across networks"] },
            hi: { q: "भौतिक कमोडिटी फ्यूचर्स अनुबंध विन्यासों में, एक एक्सचेंज संस्था डिलीवरी मापदंडों के भीतर 'टेंडर पीरियड' (Tender Period) के रूप में क्या घोषित करती है?", opts: ["अनुबंध समाप्ति से पहले के दिनों की वह विशिष्ट विंडो जिसके दौरान विक्रेता भौतिक संपत्ति वितरित करने के अपने औपचारिक इरादे की घोषणा करते हैं", "वार्षिक समीक्षा के दौरान राज्य केंद्रों में लाइसेंस प्राप्त क्षेत्र वितरकों द्वारा उपयोग किया जाने वाला विपणन लेआउट मार्ग", "डेटाबेस इंटरफ़ेस पंक्तियों को गतिशील रूप से रीफ्रेश करने के लिए आवश्यक स्वचालित कंप्यूटर प्रसंस्करण समय सीमा", "नेटवर्क पर कॉर्पोरेट नियामक अनुपालन ऑडिट विफलताओं के बाद ट्रिगर होने वाली वैधानिक जुर्माना अनुसूची"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI mutual fund guidelines, what represents the primary mandate of a 'Value Fund' product category?", opts: ["To deploy a minimum of 65% of net assets into equity and equity-related instruments following a value investment strategy layout", "To allocate 100% of available net funds into international cryptocurrency venture registries across corridors", "To invest exclusively inside sovereign gold futures across multi-commodity exchange counters daily", "To lock in retail capital assets for a mandatory 10-year structural lifecycle blueprint layout scheme"] },
            hi: { q: "सेबी म्यूचुअल फंड दिशानिर्देशों के तहत, 'वैल्यू फंड' (Value Fund) उत्पाद श्रेणी के प्राथमिक अधिदेश को क्या दर्शाता है?", opts: ["वैल्यू इन्वेस्टमेंट रणनीति लेआउट का पालन करते हुए इक्विटी और इक्विटी से संबंधित उपकरणों में शुद्ध संपत्ति का न्यूनतम 65% निवेश करना", "कॉरिडोर में अंतरराष्ट्रीय क्रिप्टोकरेंसी वेंचर रजिस्ट्रियों में उपलब्ध शुद्ध धन का 100% आवंटित करना", "दैनिक मल्टी-कमोडिटी एक्सचेंज काउंटरों पर विशेष रूप से संप्रभु स्वर्ण फ्यूचर्स के भीतर निवेश करना", "एक अनिवार्य 10-वर्षीय संरचनात्मक जीवनचक्र ब्लूप्रिंट लेआउट योजना के लिए खुदरा पूंजीगत संपत्तियों को लॉक करना"] },
            correct: 0
        },
        {
            en: { q: "What does the option Greek 'DvegaDtime' or 'Vanna Decay' quantify inside advanced derivatives risk matrices?", opts: ["The rate of change in an option's Vega relative to the passage of time over horizons", "The acceleration parameter affecting the absolute intrinsic value across horizons dynamically", "The historical correlation mapping cross-border index yields over sovereign bond blocks quarterly", "The standard deviation metric isolating tracking errors from passive index strategies across networks"] },
            hi: { q: "उन्नत डेरिवेटिव जोखिम मेट्रिसेस के भीतर ऑप्शन ग्रीक 'DvegaDtime' या 'वेगा डिके' सटीक रूप से क्या मापता है?", opts: ["क्षितिज पर समय बीतने (Passage of time) के सापेक्ष किसी ऑप्शन के वेगा (Vega) में बदलाव की दर", "गतिशील रूप से विभिन्न क्षितिज पर पूर्ण आंतरिक मूल्य को प्रभावित करने वाला त्वरण पैरामीटर", "त्रैमासिक रूप से संप्रभु बांड ब्लॉकों पर सीमा पार इंडेक्स यील्ड का ऐतिहासिक सहसंबंध मानचित्रण", "नेटवर्क पर पैसिव इंडेक्स रणनीतियों से ट्रैकिंग त्रुटियों को अलग करने वाला मानक विचलन मीट्रिक"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI AIF Regulations, what represents the strict 'Lock-in Period' profile for investment funds deploying capital inside Category III Alternative Investment Funds?", opts: ["Category III AIFs can be open-ended or close-ended; close-ended structures carry a mandatory minimum tenure of 3 years", "A fixed mandatory lock-in period of 10 years completely without any structural exit capabilities", "An absolute liquidity block equivalent to 15 years managed under sovereign trust frameworks", "A floating window altered dynamically by corporate sponsors during monthly compliance tracking ledger reviews"] },
            hi: { q: "सेबी एआईएफ नियमों के तहत, श्रेणी III वैकल्पिक निवेश कोष (Category III AIF) के भीतर पूंजी लगाने वाले निवेश फंड के लिए सख्त लॉक-इन अवधि प्रोफाइल क्या दर्शाता है?", opts: ["श्रेणी III AIF ओपन-एंडेड या क्लोज-एंडेड हो सकते हैं; क्लोज-एंडेड संरचनाओं में न्यूनतम 3 वर्ष का अनिवार्य कार्यकाल होता है", "बिना किसी संरचनात्मक निकास क्षमताओं के पूरी तरह से 10 वर्षों की एक निश्चित अनिवार्य लॉक-इन अवधि", "संप्रभु ट्रस्ट ढांचे के तहत प्रबंधित 15 वर्षों के बराबर एक पूर्ण तरलता ब्लॉक", "मासिक अनुपालन ट्रैकिंग बहीखाता समीक्षाओं के दौरान कॉर्पोरेट प्रायोजकों द्वारा गतिशील रूप से बदली जाने वाली एक फ्लोटिंग विंडो"] },
            correct: 0
        },
        {
            en: { q: "Inside the legislative framework of Indian debt instruments, what precise entity operationalizes the electronic execution and clearing of sovereign Government Securities (G-Secs) transactions?", opts: ["The Clearing Corporation of India Limited (CCIL)", "The National Stock Exchange Clearing Wing Mainframe Desk", "The Securities and Exchange Board of India Public Debt Cell", "The Association of Mutual Funds in India Central Operations Counter"] },
            hi: { q: "भारतीय ऋण उपकरणों के विधायी ढांचे के भीतर, कौन सी सटीक संस्था संप्रभु सरकारी प्रतिभूतियों (G-Secs) के लेनदेन के इलेक्ट्रॉनिक निष्पादन और समाशोधन (Clearing) को संचालित करती है?", opts: ["क्लियरिंग कॉरपोरेशन ऑफ इंडिया लिमिटेड (CCIL)", "नेशनल स्टॉक एक्सचेंज क्लियरिंग विंग मेनफ्रेम डेस्क", "भारतीय प्रतिभूति और विनिमय बोर्ड सार्वजनिक ऋण सेल", "एसोसिएशन ऑफ म्यूचुअल फंड्स इन इंडिया सेंट्रल ऑपरेशन्स काउंटर"] },
            correct: 0
        },
        {
            en: { q: "What options strategy is constructed if an investor sells a 'Strangle' trading combination layout?", opts: ["Simultaneously writing an Out-of-the-Money (OTM) Call option and an Out-of-the-Money (OTM) Put option on matching assets with matching expiry", "Buying an At-the-Money call option alongside writing sequential calendar structures across volatile tech spaces", "Combining a physical gold spot purchase order along with cross-currency futures tracking indices dynamically", "Writing sequential calendar rollover options across mismatched expiration series parameters inside clearing rooms"] },
            hi: { q: "यदि कोई निवेशक 'स्ट्रैंगल' (Strangle) ट्रेडिंग संयोजन लेआउट बेचता है (Sells) तो कौन सी ऑप्शंस रणनीति बनती है?", opts: ["समान एक्सपायरी के साथ मिलान वाली परिसंपत्तियों पर एक साथ एक आउट-ऑफ-डी-मनी (OTM) कॉल ऑप्शन और एक आउट-ऑफ-द-मनी (OTM) पुट ऑप्शन बेचना (Writing)", "अस्थिर तकनीकी क्षेत्रों में अनुक्रमिक कैलेंडर संरचनाएं लिखने के साथ-साथ एक एट-द-मनी कॉल ऑप्शन खरीदना", "गतिशील रूप से क्रॉस-करेंसी फ्यूचर्स ट्रैकिंग इंडेक्स के साथ एक भौतिक सोने की खरीद के आदेश को जोड़ना", "क्लियरिंग रूम के भीतर असंगत समाप्ति श्रृंखला मापदंडों में अनुक्रमिक कैलेंडर रोलओवर ऑप्शंस लिखना"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI Portfolio Managers Regulations, what represents the mandatory minimum ticket size investment required from a client to legally open a Portfolio Management Services (PMS) account inside India?", opts: ["₹50 Lakh", "₹25 Lakh", "₹10 Lakh", "₹1 Crore"] },
            hi: { q: "सेबी पोर्टफोलियो प्रबंधक नियमों के अनुसार, भारत के भीतर कानूनी रूप से पोर्टफोलियो प्रबंधन सेवाएं (PMS) खाता खोलने के लिए ग्राहक से आवश्यक अनिवार्य न्यूनतम निवेश राशि (Minimum Ticket Size) क्या है?", opts: ["₹50 लाख (₹50 Lakh)", "₹25 लाख", "₹10 लाख", "₹1 करोड़"] },
            correct: 0
        },
        {
            en: { q: "Inside fundamental equity stock analysis, what does the specific term 'Free Cash Flow to Firm (FCFF)' represent during institutional valuation exercises?", opts: ["The cash flow available to all capital providers (both equity and debt holders) after meeting all operating expenses and capital expenditure requirements", "The absolute gross cash reserves stored inside corporate physical safe lockers across corridors", "The accounting dividend allocation percentage distributed to retail fund holders during calendar updates", "The structural error tracking delay logged inside network mainframe re-verification software systems"] },
            hi: { q: "मौलिक इक्विटी स्टॉक विश्लेषण के भीतर, संस्थागत मूल्यांकन अभ्यासों के दौरान विशिष्ट शब्द 'फ्री कैश फ्लो टू फर्म (FCFF)' क्या दर्शाता है?", opts: ["सभी परिचालन खर्चों और पूंजीगत व्यय (CapEx) आवश्यकताओं को पूरा करने के बाद सभी पूंजी प्रदाताओं (इक्विटी और ऋण धारकों दोनों) के लिए उपलब्ध नकद प्रवाह", "कॉरिडोर में कॉर्पोरेट भौतिक सुरक्षित लॉकरों के भीतर संग्रहीत पूर्ण सकल नकद भंडार", "कैलेंडर अपडेट के दौरान खुदरा फंड धारकों को वितरित लेखांकन लाभांश आवंटन प्रतिशत", "नेटवर्क मेनफ्रेम पुनर्सत्यापन सॉफ्टवेयर सिस्टम के भीतर लॉग इन संरचनात्मक त्रुटि ट्रैकिंग देरी"] },
            correct: 0
        },
        {
            en: { q: "In physical commodity markets inside India, what statutorily mandated system executes the standardized electronic generation of spot electronic Gold Receipts (EGR)?", opts: ["SEBI-Regulated Stock Exchanges hosting the EGR Segment", "The WDRA Central Certified Invoicing Counter Desk", "The Multi-Commodity Exchange Physical Bullion Vault Registry Panels", "The Financial Benchmarks India Pvt. Ltd. Treasury Operations"] },
            hi: { q: "भारत के भीतर भौतिक कमोडिटी बाजारों में, कौन सी वैधानिक प्रणाली हाजिर इलेक्ट्रॉनिक स्वर्ण रसीदों (EGR) के मानकीकृत इलेक्ट्रॉनिक उत्पादन को निष्पादित करती है?", opts: ["ईजीआर (EGR) सेगमेंट की मेजबानी करने वाले सेबी-विनियमित स्टॉक एक्सचेंज", "डब्ल्यूडीआरए केंद्रीय प्रमाणित चालान काउंटर डेस्क", "मल्टी-कमोडिटी एक्सचेंज भौतिक बुलियन वॉल्ट रजिस्ट्री पैनल", "फाइनेंशियल बेंचमार्क इंडिया प्राइवेट लिमिटेड ट्रेजरी ऑपरेशन्स"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI mutual fund guidelines, what represents the primary mandate of an 'Arbitrage Fund' asset category?", opts: ["To generate capital returns by exploiting mispricing opportunities between cash and derivatives markets simultaneously, maintaining equity tax status", "To allocate 100% of available net funds into international micro-cap software start-up venture shares", "To invest exclusively inside sovereign gold futures across multi-commodity exchange counters daily", "To lock in retail capital assets for a mandatory 5-year structural lifecycle blueprint scheme layout"] },
            hi: { q: "सेबी म्यूचुअल फंड दिशानिर्देशों के तहत, 'आर्बिट्रेज फंड' (Arbitrage Fund) परिसंपत्ति श्रेणी के प्राथमिक अधिदेश को क्या दर्शाता है?", opts: ["इक्विटी टैक्स स्टेटस बनाए रखते हुए, नकद (Cash) और डेरिवेटिव बाजारों के बीच मूल्य निर्धारण विसंगतियों का लाभ उठाकर रिटर्न उत्पन्न करना", "अंतरराष्ट्रीय माइक्रो-कैप सॉफ्टवेयर स्टार्ट-अप वेंचर शेयरों में उपलब्ध शुद्ध धन का 100% आवंटित करना", "दैनिक मल्टी-कमोडिटी एक्सचेंज काउंटरों पर विशेष रूप से संप्रभु स्वर्ण फ्यूचर्स के भीतर निवेश करना", "एक अनिवार्य 5-वर्षीय संरचनात्मक जीवनचक्र ब्लूप्रिंट योजना लेआउट के लिए खुदरा पूंजीगत संपत्तियों को लॉक करना"] },
            correct: 0
        },
        {
            en: { q: "What does the option Greek 'Dual Delta' quantify inside exotic advanced options analysis models?", opts: ["The sensitivity of the option price relative to a 1-unit modification inside the contract's strike price parameter", "The time decay acceleration component affecting the intrinsic value matrix dynamically", "The dynamic variance checked between cross-border sovereign baseline treasury asset index configurations", "The standard deviation metric isolating tracking errors from physical warehouse baseline asset logs"] },
            hi: { q: "उन्नत ऑप्शंस विश्लेषण मॉडल के भीतर ऑप्शन ग्रीक 'डुअल डेल्टा' (Dual Delta) सटीक रूप से क्या मापता है?", opts: ["अनुबंध के स्ट्राइक मूल्य (Strike Price) पैरामीटर के भीतर 1-इकाई के संशोधन के सापेक्ष ऑप्शन की कीमत की संवेदनशीलता", "आंतरिक मूल्य मैट्रिक्स को गतिशील रूप से प्रभावित करने वाला समय क्षय त्वरण घटक", "सीमा पार संप्रभु आधारभूत ट्रेजरी परिसंपत्ति सूचकांक विन्यासों के बीच जांचा गया गतिशील विचरण", "भौतिक गोदाम आधारभूत परिसंपत्ति लॉग से ट्रैकिंग त्रुटियों को अलग करने वाला मानक विचलन मीट्रिक"] },
            correct: 0
        },
        {
            en: { q: "Inside the insurance sector framework, what does the specific term 'Retrocession' describe during sovereign risk distribution exercises?", opts: ["The process where a Reinsurance company further cedes a portion of its accepted risk exposures to another reinsurance entity", "The structural allocation formula used to map broker incentive tiers across regional databases", "The legal pathway enabling clearing house desks to handle physical asset cargo claims", "The automated calculation matrix measuring solvency capital adequacy limits quarterly"] },
            hi: { q: "बीमा क्षेत्र के ढांचे के भीतर, जोखिम वितरण अभ्यासों के दौरान विशिष्ट शब्द 'रेट्रोसेशन' (Retrocession) किसे परिभाषित करता है?", opts: ["वह प्रक्रिया जिसके तहत एक पुनर्बीमा कंपनी (Reinsurance company) अपने स्वीकृत जोखिम एक्सपोजर का एक हिस्सा दूसरी पुनर्बीमा इकाई को हस्तांतरित करती है", "क्षेत्रीय डेटाबेस में ब्रोकर प्रोत्साहन स्तरों को मैप करने के लिए उपयोग किया जाने वाला संरचनात्मक आवंटन फॉर्मूला", "क्लियरिंग हाउस डेस्क को भौतिक संपत्ति कार्गो दावों को संभालने में सक्षम बनाने वाला कानूनी मार्ग", "त्रैमासिक रूप से सॉल्वेंसी पूंजी पर्याप्तता सीमा को मापने वाला स्वचालित गणना मैट्रिक्स"] },
            correct: 0
        },
        {
            en: { q: "In exchange currency derivatives systems inside India, what does the specific term 'At-the-Money (ATM)' signify during execution?", opts: ["A market state where the option's strike price is exactly identical to the current spot or futures price of the underlying asset", "A condition where the aggregate option premium drops down to absolute zero margins upon calendar adjustments", "The cumulative tracking error variance monitored inside passive index allocation strategies over horizons", "The sovereign interest rate multiplier added dynamically by central banking repository units during adjustments"] },
            hi: { q: "भारत में एक्सचेंज मुद्रा डेरिवेटिव प्रणालियों के भीतर, निष्पादन के दौरान विशिष्ट शब्द 'एट-द-मनी (ATM)' क्या दर्शाता है?", opts: ["एक बाजार स्थिति जहां ऑप्शन का स्ट्राइक मूल्य (Strike Price) अंतर्निहित परिसंपत्ति की वर्तमान हाजिर या फ्यूचर्स कीमत के बिल्कुल समान होता है", "एक ऐसी स्थिति जहां संचयी ऑप्शन प्रीमियम कैलेंडर समायोजन पर पूर्ण शून्य मार्जिन तक गिर जाता है", "क्षितिज पर पैसिव इंडेक्स आवंटन रणनीतियों के भीतर मॉनिटर की गई संचयी ट्रैकिंग त्रुटि विचरण", "समायोजन के दौरान केंद्रीय बैंकिंग रिपोजिटरी इकाइयों द्वारा गतिशील रूप से जोड़ा गया संप्रभु ब्याज दर गुणक"] },
            correct: 0
        },
        // --- NISM Advanced Standard Mock Test: Core Financial Architecture (Set 13) ---
        {
            en: { q: "An exotic options position exhibits a high positive 'Dual Gamma'. What precise structural parameter changes relative to this mathematical index?", opts: ["The sensitivity of the option's Delta relative to a continuous shift inside the contract's strike price parameter", "The rate of acceleration in time value decay across dynamic operational calendar boundaries", "The structural error configuration separating cross-border sovereign baseline treasury asset metrics", "The statistical variance isolating index tracking deficiencies from physical warehouse logistics"] },
            hi: { q: "एक एक्सोटिक ऑप्शंस पोजीशन में उच्च सकारात्मक 'डुअल गामा' (Dual Gamma) दिखाई देता है। इस गणितीय सूचकांक के सापेक्ष कौन सा सटीक संरचनात्मक पैरामीटर बदलता है?", opts: ["अनुबंध के स्ट्राइक मूल्य (Strike Price) पैरामीटर के भीतर निरंतर बदलाव के सापेक्ष ऑप्शन के डेल्टा (Delta) की संवेदनशीलता", "गतिशील परिचालन कैलेंडर सीमाओं में समय मूल्य क्षय (Time value decay) की त्वरण दर", "सीमा पार संप्रभु आधारभूत ट्रेजरी परिसंपत्ति मेट्रिक्स को अलग करने वाला संरचनात्मक त्रुटि विन्यास", "भौतिक गोदाम रसद से इंडेक्स ट्रैकिंग कमियों को अलग करने वाला सांख्यिकीय विचरण"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI Alternative Investment Funds (AIF) Regulations, what represents the strict maximum number of retail or accredited investors permitted inside a single close-ended Category I or Category II AIF scheme setup?", opts: ["1000 investors", "200 investors", "50 investors", "There is no legal limit for accredited investors inside AIF setups"] },
            hi: { q: "सेबी वैकल्पिक निवेश कोष (AIF) नियमों के तहत, एकल क्लोज-एंडेड श्रेणी I या श्रेणी II AIF योजना सेटअप के भीतर अनुमत खुदरा या मान्यता प्राप्त निवेशकों (Accredited Investors) की सख्त अधिकतम संख्या क्या है?", opts: ["1000 निवेशक (1000 investors)", "200 निवेशक", "50 निवेशक", "AIF सेटअप के भीतर मान्यता प्राप्त निवेशकों के लिए कोई कानूनी सीमा नहीं है"] },
            correct: 0
        },
        {
            en: { q: "In exchange-traded currency options inside India, what exact protocol triggers the mechanical 'Mark-to-Market' (MTM) cash flows at the end of each volatile trading session?", opts: ["The daily premium settlement is executed based on the official RBI Reference Rate or Exchange-computed closing price metrics", "The accounts automatically freeze until cross-border banking nodes complete manual audits", "The clearing corporation switches option execution formats from European to American structures retroactively", "The margin layout baseline drops to absolute zero parameters to absorb sovereign asset index shocks"] },
            hi: { q: "भारत में एक्सचेंज-ट्रेडेड मुद्रा ऑप्शंस (Currency Options) में, प्रत्येक उतार-चढ़ाव वाले ट्रेडिंग सत्र के अंत में कौन सा सटीक प्रोटोकॉल यांत्रिक 'मार्क-टू-मार्केट' (MTM) नकद प्रवाह को ट्रिगर करता है?", opts: ["दैनिक प्रीमियम निपटान आधिकारिक आरबीआई संदर्भ दर (RBI Reference Rate) या एक्सचेंज-गणना क्लोजिंग मूल्य मेट्रिक्स के आधार पर निष्पादित किया जाता है", "सीमा पार बैंकिंग नोड्स द्वारा मैन्युअल ऑडिट पूरा करने तक खाते स्वचालित रूप से फ्रीज हो जाते हैं", "क्लियरिंग कॉरपोरेशन पूर्वव्यापी रूप से ऑप्शन निष्पादन प्रारूपों को यूरोपीय से अमेरिकी संरचनाओं में बदल देता है", "संप्रभु परिसंपत्ति सूचकांक झटकों को अवशोषित करने के लिए मार्जिन लेआउट बेसलाइन पूर्ण शून्य मापदंडों तक गिर जाती है"] },
            correct: 0
        },
        {
            en: { q: "What does the advanced risk parameter 'Modified Duration' measure inside professional fixed-income debt portfolio analysis frameworks?", opts: ["The percentage change in a bond's price relative to a 1% change in its Yield to Maturity (YTM)", "The physical time period required to recover the initial capital outlay through discounted coupons", "The historical systematic volatility mapping sovereign yields over corporate debt indices", "The structural tracking error separating passive gilt funds from target banking benchmarks"] },
            hi: { q: "पेशेवर फिक्स्ड-इनकम ऋण पोर्टफोलियो विश्लेषण ढांचे के भीतर उन्नत जोखिम पैरामीटर 'मॉडिफाइड ड्यूरेशन' (Modified Duration) क्या मापता है?", opts: ["बॉन्ड की मैच्योरिटी यील्ड (YTM) में 1% के बदलाव के सापेक्ष उसके मूल्य में होने वाला प्रतिशत बदलाव", "डिस्काउंटेड कूपन के माध्यम से प्रारंभिक पूंजी परिव्यय को वसूल करने के लिए आवश्यक भौतिक समयावधि", "कॉर्पोरेट ऋण सूचकांकों पर संप्रभु यील्ड का मानचित्रण करने वाली ऐतिहासिक व्यवस्थित अस्थिरता", "पैसिव गिल्ट फंड को लक्षित बैंकिंग बेंचमार्क से अलग करने वाली संरचनात्मक ट्रैकिंग त्रुटि"] },
            correct: 0
        },
        {
            en: { q: "According to SEBI InvIT (Infrastructure Investment Trusts) guidelines, what represents the mandatory minimum distribution requirement of net distributable cash flows to investors annually?", opts: ["90% of net distributable cash flows", "80% of net distributable cash flows", "75% of net distributable cash flows", "100% of net distributable cash flows exclusively"] },
            hi: { q: "सेबी इनविट (InvIT - इंफ्रास्ट्रक्चर इन्वेस्टमेंट ट्रस्ट) दिशानिर्देशों के अनुसार, निवेशकों को सालाना शुद्ध वितरण योग्य नकद प्रवाह (Net Distributable Cash Flows) का कितना न्यूनतम वितरण करना अनिवार्य है?", opts: ["शुद्ध वितरण योग्य नकद प्रवाह का 90% (90% of net distributable cash flows)", "शुद्ध वितरण योग्य नकद प्रवाह का 80%", "शुद्ध वितरण योग्य नकद प्रवाह का 75%", "विशेष रूप से शुद्ध वितरण योग्य नकद प्रवाह का 100%"] },
            correct: 0
        },
        {
            en: { q: "A corporate exporter executes a hedge by purchasing a USD-INR Put Option. If the Indian Rupee depreciates violently past the contract's strike price, what occurs to this protective position?", opts: ["The option contract expires Out-of-the-Money (OTM) and becomes worthless, limiting the exporter's loss to the initial premium paid", "The option automatically exercises to lock in massive losses on the clearing corporation database logs", "The system shifts the underlying futures contract parameter into cross-currency physical gold bars", "The advisor triggers a mandatory capital replacement swap through offshore sovereign banking mainframes"] },
            hi: { q: "एक कॉर्पोरेट निर्यातक (Exporter) USD-INR पुट ऑप्शन खरीदकर एक हेज निष्पादित करता है। यदि भारतीय रुपया अनुबंध के स्ट्राइक मूल्य के पार तेजी से कमजोर (Depreciate) होता है, तो इस सुरक्षात्मक पोजीशन का क्या होगा?", opts: ["ऑप्शन अनुबंध आउट-ऑफ-द-मनी (OTM) समाप्त हो जाएगा और बेकार हो जाएगा, जिससे निर्यातक का नुकसान प्रारंभिक भुगतान किए गए प्रीमियम तक सीमित रहेगा", "क्लियरिंग कॉरपोरेशन डेटाबेस लॉग पर भारी नुकसान को लॉक करने के लिए ऑप्शन स्वचालित रूप से प्रयोग हो जाता है", "सिस्टम अंतर्निहित फ्यूचर्स अनुबंध पैरामीटर को क्रॉस-करेंसी भौतिक सोने की छड़ों में बदल देता है", "सलाहकार अपतटीय संप्रभु बैंकिंग मेनफ्रेम के माध्यम से एक अनिवार्य पूंजी प्रतिस्थापन स्वैप को ट्रिगर करता है"] },
            correct: 0
        },
        {
            en: { q: "Under the SEBI (Substantial Acquisition of Shares and Takeovers) Regulations, what precise equity stake threshold triggers a mandatory open offer to public shareholders?", opts: ["Acquiring 25% or more of the voting rights or shares inside a listed corporate entity inside India", "Crossing a rolling volume limit equivalent to 10% of the active sponsor's total assets", "Reaching an absolute accounting net worth boundary evaluated via state corporate registers", "An aggregate capital block representing 50% of the company's floating market capitalization"] },
            hi: { q: "सेबी (शेयरों का पर्याप्त अधिग्रहण और टेकओवर) नियमों के तहत, कौन सी सटीक इक्विटी हिस्सेदारी सीमा सार्वजनिक शेयरधारकों के लिए एक अनिवार्य ओपन ऑफर (Mandatory Open Offer) को ट्रिगर करती है?", opts: ["भारत के भीतर एक सूचीबद्ध कॉर्पोरेट इकाई में 25% या अधिक शेयर या वोटिंग अधिकार प्राप्त करना", "सक्रिय प्रायोजक की कुल संपत्ति के 10% के बराबर रोलिंग वॉल्यूम सीमा को पार करना", "राज्य कॉर्पोरेट रजिस्टरों के माध्यम से मूल्यांकित एक पूर्ण लेखांकन नेट वर्थ सीमा तक पहुंचना", "कंपनी के फ्लोटिंग मार्केट कैपिटलाइजेशन के 50% का प्रतिनिधित्व करने वाला एक कुल पूंजी ब्लॉक"] },
            correct: 0
        },
        {
            en: { q: "In multi-commodity exchange clearing layouts inside India, what strict financial entity ensures trade guarantee and eliminates counterparty risk across complex delivery parameters?", opts: ["SEBI-Recognized Clearing Corporations (e.g., MCXCCL)", "The WDRA Central Legal Adjudication Cell Desk", "The Financial Benchmarks India Pvt. Ltd. Corporate Registry Board", "The Lead Broker Syndicate Sovereign Asset Management Counter"] },
            hi: { q: "भारत के भीतर मल्टी-कमोडिटी एक्सचेंज क्लियरिंग लेआउट में, कौन सी सख्त वित्तीय संस्था व्यापार गारंटी सुनिश्चित करती है और जटिल वितरण मापदंडों में प्रतिपक्ष जोखिम (Counterparty Risk) को समाप्त करती है?", opts: ["सेबी-मान्यता प्राप्त क्लियरिंग कॉरपोरेशन (जैसे, MCXCCL)", "डब्ल्यूडीआरए केंद्रीय कानूनी निर्णय सेल डेस्क", "फाइनेंशियल बेंचमार्क इंडिया प्राइवेट लिमिटेड कॉर्पोरेट रजिस्ट्री बोर्ड", "लीड ब्रोकर सिंडिकेट संप्रभु संपत्ति प्रबंधन काउंटर"] },
            correct: 0
        },
        {
            en: { q: "What does the financial valuation matrix 'Jensen's Alpha' isolate and establish when executing deep fund manager tracking analysis?", opts: ["The excess portfolio return generated over and above the expected return predicted via the Capital Asset Pricing Model (CAPM)", "The absolute performance return divided by the total active systematic volatility variance tracking block", "The compound error configuration separating baseline target indices from passive equity products", "The administrative asset layout variance calculated post corporate infrastructure restructuring events"] },
            hi: { q: "गहन फंड मैनेजर ट्रैकिंग विश्लेषण निष्पादित करते समय वित्तीय मूल्यांकन मैट्रिक्स 'जेन्सेन्स अल्फा' (Jensen's Alpha) क्या अलग करता है और स्थापित करता है?", opts: ["कैपिटल एसेट प्राइसिंग मॉडल (CAPM) के माध्यम से अनुमानित अपेक्षित रिटर्न से ऊपर और परे उत्पन्न अतिरिक्त पोर्टफोलियो रिटर्न", "कुल सक्रिय व्यवस्थित अस्थिरता विचरण ट्रैकिंग ब्लॉक द्वारा विभाजित पूर्ण प्रदर्शन रिटर्न", "पैसिव इक्विटी उत्पादों से आधारभूत लक्षित सूचकांकों को अलग करने वाला चक्रवृद्धि त्रुटि विन्यास", "कॉर्पोरेट बुनियादी ढांचे के पुनर्गठन की घटनाओं के बाद गणना की गई प्रशासनिक परिसंपत्ति लेआउट विचरण"] },
            correct: 0
        },
        {
            en: { q: "Under IRDAI regulations, what precise operational status defines a policy that has lapsed due to non-payment of premiums but has acquired a baseline 'Paid-Up Value'?", opts: ["Paid-Up Policy with reduced sum assured benefits based on premiums actually collected", "Void Contract carrying absolute structural enforcement fines retroactively across centers", "Surrendered Asset Wrapper handled via central clearing house accounting desks", "Replaced Insurance Wrapper monitored under dynamic state infrastructure databases"] },
            hi: { q: "IRDAI नियमों के तहत, कौन सी सटीक परिचालन स्थिति उस पॉलिसी को परिभाषित करती है जो प्रीमियम का भुगतान न करने के कारण समाप्त (Lapsed) हो गई है लेकिन उसने एक आधारभूत 'पेड-अप वैल्यू' (Paid-Up Value) प्राप्त कर ली है?", opts: ["वास्तव में एकत्र किए गए प्रीमियम के आधार पर कम बीमा राशि (Sum Assured) के लाभों के साथ पेड-अप पॉलिसी", "केंद्रों में पूर्वव्यापी रूप से पूर्ण संरचनात्मक प्रवर्तन जुर्माना ले जाने वाला शून्य अनुबंध", "केंद्रीय क्लियरिंग हाउस लेखांकन डेस्क के माध्यम से संभाला गया सरेंडर एसेट रैपर", "गतिशील राज्य बुनियादी ढांचा डेटाबेस के तहत मॉनिटर किया गया प्रतिस्थापित बीमा रैपर"] },
            correct: 0
        },
        {
            en: { q: "What does an options market state characterized as 'Volatility Smile' graphically illustrate across fixed expiration contract sheets?", opts: ["Implied volatility trades significantly higher for deep OTM and deep ITM strikes compared to ATM options", "The time decay acceleration rate remains perfectly linear across out-of-the-money brackets", "The structural baseline conversion flips underlying futures configurations into spot bullion deliveries", "The mathematical acceleration rate of Delta matches baseline index yields precisely during shifts"] },
            hi: { q: "फिक्स एक्सपायरी अनुबंध शीट पर ग्राफिकल रूप से 'वोलाटिलिटी स्माइल' (Volatility Smile) के रूप में जानी जाने वाली ऑप्शंस बाजार की स्थिति क्या दर्शाती है?", opts: ["एटीएम (ATM) ऑप्शंस की तुलना में डीप ओटीएम (OTM) और डीप आईटीएम (ITM) स्ट्राइक्स के लिए निहित अस्थिरता काफी अधिक ट्रेड करती है", "आउट-ऑफ-द-मनी ब्रैकेट में समय क्षय त्वरण दर पूरी तरह से रैखिक रहती है", "संरचनात्मक बेसलाइन रूपांतरण अंतर्निहित फ्यूचर्स विन्यासों को हाजिर बुलियन डिलीवरी में बदल देता है", "बदलाव के दौरान डेल्टा की गणितीय त्वरण दर बेसलाइन इंडेक्स यील्ड से सटीक रूप से मेल खाती है"] },
            correct: 0
        },
        {
            en: { q: "An investor executes a 'Short Put Spread' options trading strategy layout. What represents the maximum possible financial loss profile for this position?", opts: ["The net difference between the higher and lower strike price parameters minus the net premium credit received initially", "An infinite capital downside hazard triggered if the asset price falls down to absolute zero boundaries", "The complete initial margin volume locked under central clearing corporation maintenance matrix parameters", "Zero potential hazard since the short leg completely neutralizes the entire protective option layer"] },
            hi: { q: "एक निवेशक 'शॉर्ट पुट स्प्रेड' (Short Put Spread) ऑप्शंस ट्रेडिंग रणनीति लेआउट निष्पादित करता है। इस पोजीशन के लिए अधिकतम संभावित वित्तीय नुकसान (Maximum Financial Loss) प्रोफाइल क्या दर्शाता है?", opts: ["उच्च और निम्न स्ट्राइक मूल्य मापदंडों के बीच का शुद्ध अंतर माइनस प्रारंभ में प्राप्त शुद्ध प्रीमियम क्रेडिट", "यदि परिसंपत्ति की कीमत पूर्ण शून्य सीमाओं तक गिर जाती है तो ट्रिगर होने वाला एक असीमित पूंजी गिरावट का जोखिम", "केंद्रीय क्लियरिंग कॉर्पोरेशन रखरखाव मैट्रिक्स मापदंडों के तहत लॉक की गई पूर्ण प्रारंभिक मार्जिन मात्रा", "शून्य संभावित जोखिम क्योंकि शॉर्ट लेग पूरी सुरक्षात्मक ऑप्शन परत को पूरी तरह से निष्प्रभावी कर देता है"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI Mutual Fund regulations, an Open-Ended 'Gilt Fund' scheme must maintain what minimum percentage asset deployment inside sovereign Government Securities across horizons?", opts: ["80% of the scheme's net assets", "65% of the scheme's net assets", "75% of the scheme's net assets", "100% of the scheme's net assets exclusively"] },
            hi: { q: "सेबी म्यूचुअल फंड नियमों के अनुसार, एक ओपन-एंडेड 'गिल्ट फंड' (Gilt Fund) योजना को संप्रभु सरकारी प्रतिभूतियों (G-Secs) के भीतर न्यूनतम कितना प्रतिशत परिसंपत्ति निवेश बनाए रखना चाहिए?", opts: ["योजना की शुद्ध संपत्ति का 80% (80% of the scheme's net assets)", "योजना की शुद्ध संपत्ति का 65%", "योजना की शुद्ध संपत्ति का 75%", "विशेष रूप से योजना की शुद्ध संपत्ति का 100%"] },
            correct: 0
        },
        {
            en: { q: "In currency derivatives trading pipelines, what precise economic factor is captured when evaluating the 'Forward Premium' or 'Forward Discount' matrix?", opts: ["The nominal interest rate differential separating the two sovereign geographic economies across horizons", "The historical tracking error variance calculated post international human resource labor adjustments", "The structural tax tariff fine structure checked across offshore transaction clearing databases", "The administrative balance sheet parameters evaluated during automated database re-verification login loops"] },
            hi: { q: "मुद्रा डेरिवेटिव ट्रेडिंग पाइपलाइनों में, 'फॉरवर्ड प्रीमियम' या 'फॉरवर्ड डिस्काउंट' मैट्रिक्स का मूल्यांकन करते समय कौन सा सटीक आर्थिक कारक कैप्चर किया जाता है?", opts: ["क्षितिज पर दोनों संप्रभु भौगोलिक अर्थव्यवस्थाओं को अलग करने वाला नाममात्र ब्याज दर अंतर (Interest rate differential)", "अंतर्राष्ट्रीय मानव संसाधन श्रम समायोजन के बाद गणना की गई ऐतिहासिक ट्रैकिंग त्रुटि विचरण", "अपतटीय लेनदेन समाशोधन डेटाबेस में जांची गई संरचनात्मक कर टैरिफ जुर्माना संरचना", "स्वचालित डेटाबेस पुनर्सत्यापन लॉगिन लूप के दौरान मूल्यांकित प्रशासनिक बैलेंस शीट पैरामीटर"] },
            correct: 0
        },
        {
            en: { q: "What does the financial metric 'Sortino Ratio' evaluate inside modern asset risk-adjusted optimization models?", opts: ["The active excess portfolio return generated per unit of downside semi-standard deviation risk exclusively", "The total asset return produced relative to the absolute systematic portfolio beta parameter layers", "The tracking discrepancy variance separating active growth fund portfolios from indices across networks", "The accounting net capital volume adjusted post corporate infrastructure asset liquidation actions"] },
            hi: { q: "आधुनिक परिसंपत्ति जोखिम-समायोजित अनुकूलन मॉडल के भीतर वित्तीय मीट्रिक 'सॉर्टिनो रेशियो' (Sortino Ratio) किसका मूल्यांकन करता है?", opts: ["विशेष रूप से डाउनसाइड सेमी-स्टैंडर्ड डेविएशन जोखिम (Downside Risk) की प्रति इकाई पर उत्पन्न सक्रिय अतिरिक्त पोर्टफोलियो रिटर्न", "अपूर्ण व्यवस्थित पोर्टफोलियो बीटा पैरामीटर परतों के सापेक्ष उत्पादित कुल परिसंपत्ति रिटर्न", "नेटवर्क पर इंडेक्स से सक्रिय ग्रोथ फंड पोर्टफोलियो को अलग करने वाला ट्रैकिंग विसंगति विचरण", "कॉर्पोरेट बुनियादी ढांचा परिसंपत्ति परिसमापन कार्यों के बाद समायोजित लेखांकन शुद्ध पूंजी मात्रा"] },
            correct: 0
        },
        {
            en: { q: "Under the SEBI (Listing Obligations and Disclosure Requirements) Regulations, listed companies must submit their certified financial results within what strict timeframe post quarter closure?", opts: ["Within 45 days from the end of the quarter", "Within 30 days from the end of the quarter", "Within 60 days from the end of the quarter", "Within 15 days from the end of the quarter"] },
            hi: { q: "सेबी (सूचीबद्धता दायित्व और प्रकटीकरण आवश्यकताएं) नियमों के तहत, सूचीबद्ध कंपनियों को तिमाही बंद होने के बाद कितने सख्त समय के भीतर अपने प्रमाणित वित्तीय परिणाम जमा करने होंगे?", opts: ["तिमाही समाप्त होने के ४५ दिनों के भीतर (Within 45 days from the end of the quarter)", "तिमाही समाप्त होने के ३० दिनों के भीतर", "तिमाही समाप्त होने के ६० दिनों के भीतर", "तिमाही समाप्त होने के १५ दिनों के भीतर"] },
            correct: 0
        },
        {
            en: { q: "In structural physical commodity warehouse logistics, what precise document represents a legal instrument of title that can be electronically pledged to banks for credit lines?", opts: ["Electronic Negotiable Warehouse Receipt (eNWR)", "Certified Grading and Quality Calibration Sheet", "Accredited Inventory Logistics Transit Pass", "Sovereign Clearing Corporation Delivery Voucher"] },
            hi: { q: "संरचनात्मक भौतिक कमोडिटी गोदाम रसद (Warehouse logistics) में, कौन सा सटीक दस्तावेज स्वामित्व का एक कानूनी साधन (Instrument of title) है जिसे क्रेडिट लाइनों के लिए बैंकों के पास इलेक्ट्रॉनिक रूप से गिरवी रखा जा सकता है?", opts: ["इलेक्ट्रॉनिक नेगोशिएबल वेयरहाउस रसीद (eNWR)", "प्रमाणित ग्रेडिंग और गुणवत्ता अंशांकन शीट", "मान्यता प्राप्त इन्वेंटरी लॉजिस्टिक्स ट्रांजिट पास", "संप्रभु क्लियरिंग कॉर्पोरेशन डिलीवरी वाउचर"] },
            correct: 0
        },
        {
            en: { q: "What does the option Greek 'DdeltaDvol' or 'Vanna' measure inside complex quantitative options valuation sheets?", opts: ["The modification sensitivity of an option's Delta relative to a 1% shift inside underlying implied volatility parameters", "The acceleration velocity of time value erosion tracking over contract calendar periods", "The historical tracking index correlation adjustments handled via central bank repository updates", "The dynamic error variance checked across physical warehouse metals cargo distribution logs"] },
            hi: { q: "जटिल मात्रात्मक ऑप्शंस मूल्यांकन शीट के भीतर ऑप्शन ग्रीक 'DdeltaDvol' या 'वान्ना' (Vanna) क्या मापता है?", opts: ["अंतर्निहित निहित अस्थिरता मापदंडों (Implied Volatility) के भीतर 1% के बदलाव के सापेक्ष किसी ऑप्शन के डेल्टा (Delta) की संशोधन संवेदनशीलता", "अनुबंध कैलेंडर अवधि में समय मूल्य क्षरण ट्रैकिंग की त्वरण गति", "केंद्रीय बैंक रिपोजिटरी अपडेट के माध्यम से संभाले जाने वाले ऐतिहासिक ट्रैकिंग सूचकांक सहसंबंध समायोजन", "भौतिक गोदाम धातु कार्गो वितरण लॉग में जांची गई गतिशील त्रुटि विचरण"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI Mutual Fund rules, what strict requirement defines the 'Skin in the Game' mandate for Asset Management Companies (AMCs) and Key Employees?", opts: ["AMCs and key personnel must invest a specified percentage of their salary or asset base into their own managed schemes based on risk profiles", "The corporate sponsor must commit a flat cash injection worth ₹100 Crore into international registries", "The database automatically clears all administrative tracking tax ledger balances post annual reviews", "The compliance infrastructure enables fund officers to route personal stock allocations through corporate broker accounts"] },
            hi: { q: "सेबी म्यूचुअल फंड नियमों के अनुसार, कौन सी सख्त आवश्यकता एसेट मैनेजमेंट कंपनियों (AMCs) और प्रमुख कर्मचारियों (Key Employees) के लिए 'स्किन इन द गेम' (Skin in the Game) शासनादेश को परिभाषित करती है?", opts: ["एएमसी और प्रमुख कर्मियों को जोखिम प्रोफाइल के आधार पर अपनी खुद की प्रबंधित योजनाओं में अपने वेतन या परिसंपत्ति आधार का एक निर्दिष्ट प्रतिशत निवेश करना होगा", "कॉर्पोरेट प्रायोजक को अंतरराष्ट्रीय रजिस्ट्रियों में ₹100 करोड़ का फ्लैट नकद निवेश करना होगा", "डेटाबेस वार्षिक समीक्षा के बाद सभी प्रशासनिक ट्रैकिंग टैक्स लेजर बैलेंस को स्वचालित रूप से साफ कर देता है", "अनुपालन बुनियादी ढांचा फंड अधिकारियों को कॉर्पोरेट ब्रोकर खातों के माध्यम से व्यक्तिगत स्टॉक आवंटन को रूट करने में सक्षम बनाता है"] },
            correct: 0
        },
        {
            en: { q: "Inside the sovereign money markets framework inside India, what tool characterizes an electronic trading network managed via the RBI to execute secondary transactions in Government Securities?", opts: ["Negotiated Dealing System-Order Matching (NDS-OM)", "Sovereign Debt Cleared Registry Ledger", "Centralized Interbank Public Treasury Board", "Automated Liquidity Adjustment Window Module"] },
            hi: { q: "भारत के भीतर संप्रभु मुद्रा बाजार ढांचे के अंदर, कौन सा उपकरण सरकारी प्रतिभूतियों (G-Secs) में माध्यमिक लेनदेन निष्पादित करने के लिए आरबीआई के माध्यम से प्रबंधित एक इलेक्ट्रॉनिक ट्रेडिंग नेटवर्क की विशेषता है?", opts: ["नेगोशिएटेड डीलिंग सिस्टम-ऑर्डर मैचिंग (NDS-OM)", "संप्रभु ऋण शोधित रजिस्ट्री बहीखाता", "केन्द्रीकृत अंतरबैंक सार्वजनिक ट्रेजरी बोर्ड", "स्वचालित तरलता समायोजन विंडो मॉड्यूल"] },
            correct: 0
        },
        {
            en: { q: "What advanced option configuration is established when an investor constructs a 'Long Butterfly Spread' using Call Options?", opts: ["Purchasing one ITM Call, selling two ATM Calls, and purchasing one OTM Call with equal strike intervals and identical expiry", "Buying two consecutive monthly rollover deep out-of-the-money contract layers across currency nodes", "Combining a physical commodity delivery order with certified warehouse structural repository certificates", "Writing sequential calendar rollover call options across mismatched expiration configurations inside clearing systems"] },
            hi: { q: "जब एक निवेशक कॉल ऑप्शंस (Call Options) का उपयोग करके 'लॉन्ग बटरफ्लाई स्प्रेड' (Long Butterfly Spread) रणनीति बनाता है तो कौन सा उन्नत ऑप्शन कॉन्फ़िगरेशन स्थापित होता है?", opts: ["समान स्ट्राइक अंतराल और समान एक्सपायरी के साथ एक आईटीएम (ITM) कॉल खरीदना, दो एटीएम (ATM) कॉल बेचना, और एक ओटीएम (OTM) कॉल खरीदना", "मुद्रा नोड्स में लगातार दो मासिक रोलओवर गहरी आउट-of-the-money अनुबंध परतें खरीदना", "प्रमाणित गोदाम संरचनात्मक रिपोजिटरी प्रमाणपत्रों के साथ एक भौतिक कमोडिटी डिलीवरी आदेश को जोड़ना", "क्लियरिंग सिस्टम के भीतर बेमेल समाप्ति विन्यासों में अनुक्रमिक कैलेंडर रोलओवर कॉल ऑप्शंस लिखना"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI Investment Advisers Guidelines, what represents the strict qualification parameter required for an individual to operate as an Investment Adviser inside India?", opts: ["A professional certification from NISM or equivalent body along with specified higher educational degrees in finance or related fields", "A registration clearance code executed via international maritime freight forwarding syndicates", "An active accounting database record reflecting zero personal infrastructure debt parameters across repositories", "A corporate marketing license clearance issued through regional agricultural mandis registry cells"] },
            hi: { q: "सेबी निवेश सलाहकार दिशानिर्देशों के तहत, भारत के भीतर एक निवेश सलाहकार (Investment Adviser) के रूप में काम करने के लिए किसी व्यक्ति के पास कौन सा सख्त योग्यता पैरामीटर होना आवश्यक है?", opts: ["एनआईएसएम (NISM) या समकक्ष निकाय से एक पेशेवर प्रमाणन के साथ वित्त या संबंधित क्षेत्रों में निर्दिष्ट उच्च शैक्षणिक डिग्री होना", "अंतरराष्ट्रीय समुद्री माल अग्रेषण सिंडिकेट के माध्यम से निष्पादित एक पंजीकरण निकासी कोड", "रिपोजिटरी में शून्य व्यक्तिगत बुनियादी ढांचा ऋण मापदंडों को दर्शाने वाला एक सक्रिय लेखांकन डेटाबेस रिकॉर्ड", "क्षेत्रीय कृषि मंडी रजिस्ट्री सेल के माध्यम से जारी एक कॉर्पोरेट विपणन लाइसेंस निकासी"] },
            correct: 0
        },
        {
            en: { q: "Inside fundamental equity asset optimization layers, what does a company's 'Debt-to-Equity Ratio' evaluate during deep solvency stress modeling operations?", opts: ["The exact relation separating total corporate liabilities from net shareholder equity capital layers", "The physical equipment turnover volume checked against asset depreciation logged across warehouses", "The compound dividend allocation scale tracked dynamically across multiple operational calendar cycles", "The structural processing tax tariff evaluated across state internal revenue management divisions"] },
            hi: { q: "मौलिक इक्विटी परिसंपत्ति अनुकूलन परतों के भीतर, गहन सॉल्वेंसी तनाव मॉडलिंग संचालन के दौरान किसी कंपनी का 'डेट-टू-इक्विटी रेशियो' (Debt-to-Equity Ratio) क्या दर्शाता है?", opts: ["कुल कॉर्पोरेट देनदारियों को शुद्ध शेयरधारक इक्विटी पूंजी परतों से अलग करने वाला सटीक संबंध", "गोदामों में लॉग इन परिसंपत्ति मूल्यह्रास के खिलाफ जांचा गया भौतिक उपकरण टर्नओवर वॉल्यूम", "कई परिचालन कैलेंडर चक्रों में गतिशील रूप से ट्रैक किया गया चक्रवृद्धि लाभांश आवंटन पैमाना", "राज्य आंतरिक राजस्व प्रबंधन डिवीजनों में मूल्यांकित संरचनात्मक प्रसंस्करण कर टैरिफ"] },
            correct: 0
        },
        {
            en: { q: "In exchange currency derivatives configurations on Indian platforms, what represents the tick size for a cross-currency Euro-US Dollar (EUR-USD) contract?", opts: ["0.0001", "0.0025", "0.0500", "0.0100"] },
            hi: { q: "भारतीय प्लेटफॉर्म पर एक्सचेंज मुद्रा डेरिवेटिव कॉन्फ़िगरेशन में, एक क्रॉस-करेंसी यूरो-यूएस डॉलर (EUR-USD) अनुबंध के लिए टिक आकार (Tick Size) क्या होता है?", opts: ["0.0001", "0.0025", "0.0500", "0.0100"] },
            correct: 0
        },
        {
            en: { q: "What precise corporate asset risk parameter is defined by the term 'Credit Spread Risk' inside fixed income portfolio optimization operations?", opts: ["The hazard of financial loss driven by changes in the yield spread between a corporate debt security and a risk-free sovereign benchmark", "The structural operational failure tracking network mainframe login authentication delay parameters across centers", "The absolute legal penalty ledger fine structure applied post compliance monitoring omission gaps", "The natural material decay profile evaluated across accredited cold storage commodity distribution corridors"] },
            hi: { q: "फिक्स्ड इनकम पोर्टफोलियो अनुकूलन ऑपरेशन्स के भीतर 'क्रेडिट स्प्रेड रिस्क' (Credit Spread Risk) शब्द से कौन सा सटीक कॉर्पोरेट परिसंपत्ति जोखिम पैरामीटर परिभाषित होता है?", opts: ["एक कॉर्पोरेट ऋण सुरक्षा (Corporate debt security) और एक जोखिम-मुक्त संप्रभु बेंचमार्क के बीच यील्ड स्प्रेड में बदलाव के कारण होने वाले वित्तीय नुकसान का जोखिम", "केंद्रों में नेटवर्क मेनफ्रेम लॉगिन प्रमाणीकरण देरी मापदंडों को ट्रैक करने वाली संरचनात्मक परिचालन विफलता", "अनुपालन निगरानी चूक अंतराल के बाद लागू पूर्ण कानूनी दंड बहीखाता जुर्माना संरचना", "मान्यता प्राप्त कोल्ड स्टोरेज कमोडिटी वितरण कॉरिडोर में मूल्यांकित प्राकृतिक सामग्री क्षय प्रोफाइल"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI Mutual Fund regulations, what mandatory framework governs the 'Stress Testing' of overnight and liquid scheme portfolios to handle sudden redemption runs?", opts: ["Asset Management Companies must execute asset liquidity stress tests based on mandated standardized risk parameters to evaluate portfolio resilience", "A static ledger review maintained internally by corporate sponsors during administrative audits", "An automated spreadsheet matrix derived exclusively from sovereign central banking discount windows", "A floating compliance matrix adjusted dynamically post board of trustee annual validation cycles"] },
            hi: { q: "सेबी म्यूचुअल फंड नियमों के तहत, अचानक आने वाले रिडेम्पशन दबाव को संभालने के लिए ओवरनाइट और लिक्विड योजना पोर्टफोलियो के 'स्ट्रेस टेस्टिंग' (Stress Testing) को कौन सा अनिवार्य ढांचा नियंत्रित करता है?", opts: ["एसेट मैनेजमेंट कंपनियों को पोर्टफोलियो लचीलेपन का मूल्यांकन करने के लिए अनिवार्य मानकीकृत जोखिम मापदंडों के आधार पर परिसंपत्ति तरलता तनाव परीक्षण निष्पादित करना होगा", "प्रशासनिक ऑडिट के दौरान कॉर्पोरेट प्रायोजकों द्वारा आंतरिक रूप से बनाए रखा गया एक स्थिर बहीखाता समीक्षा", "विशेष रूप से संप्रभु केंद्रीय बैंकिंग डिस्काउंट विंडो से प्राप्त एक स्वचालित स्प्रेडशीट मैट्रिक्स", "ट्रस्टी वार्षिक सत्यापन चक्र के त्रैमासिक पोस्ट बोर्ड के बाद गतिशील रूप से समायोजित एक फ्लोटिंग अनुपालन मैट्रिक्स"] },
            correct: 0
        },
        {
            en: { q: "What does the option Greek 'DvegaDvol' or 'Volga' measure inside advanced derivatives option risk auditing matrix sheets?", opts: ["The rate of change in an option's Vega relative to shifts inside the underlying asset's implied volatility layer", "The time decay factor affecting the intrinsic value parameter across consecutive calendar updates", "The historical correlation mapping index performance over cross-border sovereign treasury asset blocks", "The variance separating direct distribution mechanisms from field distributor marketing channels"] },
            hi: { q: "उन्नत डेरिवेटिव ऑप्शन जोखिम ऑडिटिंग मैट्रिक्स शीट के भीतर ऑप्शन ग्रीक 'DvegaDvol' या 'वोल्गा' (Volga) क्या मापता है?", opts: ["अंतर्निहित परिसंपत्ति की निहित अस्थिरता (Implied Volatility) परत के भीतर बदलाव के सापेक्ष किसी ऑप्शन के वेगा (Vega) में बदलाव की दर", "लगातार कैलेंडर अपडेट में आंतरिक मूल्य पैरामीटर को प्रभावित करने वाला समय क्षय कारक", "सीमा पार संप्रभु ट्रेजरी परिसंपत्ति ब्लॉकों पर इंडेक्स प्रदर्शन का ऐतिहासिक सहसंबंध मानचित्रण", "प्रत्यक्ष वितरण तंत्र को फील्ड वितरक विपणन चैनलों से अलग करने वाला विचरण"] },
            correct: 0
        },
        {
            en: { q: "Inside the legislative setup of Indian securities trading, what statutory entity operationalizes the formal physical or electronic settlement of currency derivatives transactions?", opts: ["SEBI-Recognized Clearing Corporations (e.g., NCL / ICCL)", "The Reserve Bank of India Foreign Exchange Treasury Management Counter", "The Ministry of Commerce International Settlement Cell Desk", "The Association of Mutual Funds in India Operations Bureau Counter"] },
            hi: { q: "भारतीय प्रतिभूति व्यापार के विधायी ढांचे के भीतर, कौन सी वैधानिक संस्था मुद्रा डेरिवेटिव (Currency Derivatives) लेनदेन के औपचारिक भौतिक या इलेक्ट्रॉनिक निपटान (Settlement) को संचालित करती है?", opts: ["सेबी-मान्यता प्राप्त क्लियरिंग कॉरपोरेशन (जैसे, NCL / ICCL)", "भारतीय रिजर्व बैंक विदेशी मुद्रा ट्रेजरी प्रबंधन काउंटर", "वाणिज्य मंत्रालय अंतर्राष्ट्रीय निपटान सेल डेस्क", "एसोसिएशन ऑफ म्यूचुअल फंड्स इन इंडिया ऑपरेशन्स ब्यूरो काउंटर"] },
            correct: 0
        },
        {
            en: { q: "What options position is formulated when an investor purchases a 'Bear Call Spread' trading layout?", opts: ["Purchasing a higher strike Call option and simultaneously selling a lower strike Call option on the identical asset and expiry", "Buying an At-the-Money put option alongside writing consecutive calendar structures across volatile spaces", "Combining a physical gold spot purchase order along with cross-currency futures tracking parameters", "Writing sequential calendar rollover call options across mismatched expiration series parameters inside centers"] },
            hi: { q: "जब एक निवेशक 'बियर कॉल स्प्रेड' (Bear Call Spread) ट्रेडिंग लेआउट खरीदता है, तो कौन सी ऑप्शंस पोजीशन बनती है?", opts: ["एक उच्च स्ट्राइक कॉल ऑप्शन खरीदना (Purchasing) और साथ ही समान संपत्ति और एक्सपायरी पर एक कम स्ट्राइक कॉल ऑप्शन बेचना (Selling)", "अस्थिर क्षेत्रों में लगातार कैलेंडर संरचनाएं लिखने के साथ-साथ एक एट-द-मनी पुट ऑप्शन खरीदना", "क्रॉस-करेंसी फ्यूचर्स ट्रैकिंग मापदंडों के साथ एक भौतिक सोने की खरीद के आदेश को जोड़ना", "केंद्रों के भीतर असंगत समाप्ति श्रृंखला मापदंडों में अनुक्रमिक कैलेंडर रोलओवर कॉल ऑप्शंस लिखना"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI regulations, what represents the primary legal objective of the 'Investor Protection Fund' (IPF) maintained via recognized stock exchanges?", opts: ["To compensate retail clients in case of a registered stockbroker's absolute default or asset insolvency failures", "To deploy capital assets into small-cap technological technological startup venture structures globally", "To clear historical administrative processing tax ledger balances managed across sovereign mainframes", "To boost the operational marketing performance baseline of listed corporate sponsors across states"] },
            hi: { q: "सेबी के नियमों के अनुसार, मान्यता प्राप्त स्टॉक एक्सचेंजों द्वारा बनाए रखे जाने वाले 'इन्वेस्टर प्रोटेक्शन फंड' (IPF) का प्राथमिक कानूनी उद्देश्य क्या है?", opts: ["पंजीकृत स्टॉकब्रोकर के पूर्ण डिफ़ॉल्ट या परिसंपत्ति दिवालियापन विफलताओं के मामले में खुदरा ग्राहकों को क्षतिपूर्ति (Compensate) करना", "वैश्विक स्तर पर स्मॉल-कैप तकनीकी स्टार्टअप वेंचर संरचनाओं में पूंजीगत संपत्ति लगाना", "संप्रभु मेनफ्रेम में प्रबंधित ऐतिहासिक प्रशासनिक प्रसंस्करण कर बहीखाता शेष को साफ करना", "राज्यों में सूचीबद्ध कॉर्पोरेट प्रायोजकों के परिचालन विपणन प्रदर्शन आधार रेखा को बढ़ावा देना"] },
            correct: 0
        },
        {
            en: { q: "Inside fundamental corporate stock evaluation matrices, what parameters define the metric 'Price-to-Earnings-to-Growth (PEG) Ratio'?", opts: ["The Price-to-Earnings (P/E) Ratio divided by the annual earnings growth rate percentage of the corporate entity", "The relationship separating baseline asset premiums from administrative processing tax structures across sectors", "The structural error variance configuration tracking network mainframe re-verification delay codes", "The dividend allocation percentage distributed to institutional corporate sponsors divided by asset growth indices"] },
            hi: { q: "मौलिक कॉर्पोरेट स्टॉक मूल्यांकन मेट्रिसेस के भीतर, कौन से मापदंड 'प्राइस-टू-एर्निंग्स-टू-ग्रोथ (PEG) रेशियो' को परिभाषित करते हैं?", opts: ["कॉर्पोरेट इकाई की वार्षिक आय वृद्धि दर प्रतिशत (Earnings growth rate) द्वारा विभाजित प्राइस-टू-एर्निंग्स (P/E) रेशियो", "क्षेत्रों में कॉर्पोरेट परिसंपत्ति प्रीमियम को प्रशासनिक प्रसंस्करण कर संरचनाओं से अलग करने वाला संबंध", "नेटवर्क मेनफ्रेम पुनर्सत्यापन देरी कोड को ट्रैक करने वाला संरचनात्मक त्रुटि विचरण विन्यास", "परिसंपत्ति वृद्धि सूचकांकों द्वारा विभाजित संस्थागत कॉर्पोरेट प्रायोजकों को वितरित लाभांश आवंटन प्रतिशत"] },
            correct: 0
        },
        {
            en: { q: "In the certified physical commodity ecosystem, what precise role is assigned to an 'Assayer'?", opts: ["An independent certified professional who samples, tests, and certifies the exact quality, purity, and grade of a commodity", "The financial clearing desk officer managing database re-verification login interfaces cross-border", "The marketing agent appointed to handle cross-border regional agricultural mandis networks", "The corporate trustee managing administrative infrastructure layout allocation splits annually"] },
            hi: { q: "प्रमाणित भौतिक कमोडिटी पारिस्थितिकी तंत्र में, एक 'एसेयर' (Assayer / परखकर्ता) को कौन सी सटीक भूमिका सौंपी जाती है?", opts: ["एक स्वतंत्र प्रमाणित पेशेवर जो किसी कमोडिटी की सटीक गुणवत्ता, शुद्धता और ग्रेड का नमूना लेता है, परीक्षण करता है और प्रमाणित करता है", "सीमा पार डेटाबेस पुनर्सत्यापन लॉगिन इंटरफेस का प्रबंधन करने वाला वित्तीय क्लियरिंग डेस्क अधिकारी", "सीमा पार क्षेत्रीय कृषि मंडी नेटवर्क को संभालने के लिए नियुक्त विपणन एजेंट", "सालाना प्रशासनिक बुनियादी ढांचा लेआउट आवंटन विभाजन का प्रबंधन करने वाला कॉर्पोरेट ट्रस्टी"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI mutual fund rules, what defines the core configuration parameter for a 'Value Fund' asset structure?", opts: ["The scheme must follow a value investment strategy layout, allocating a minimum of 65% of net assets into value equity instruments", "A dynamic structural layout deploying 100% funds into international sector indices exclusively across borders", "An index setup tracking the top 50 sovereign treasury bonds registered under the regional database cells", "A product focused 80% on short-term high yield commercial paper issues backed by sponsors"] },
            hi: { q: "सेबी म्यूचुअल फंड नियमों के अनुसार, 'वैल्यू फंड' (Value Fund) परिसंपत्ति संरचना के लिए मुख्य कॉन्फ़िगरेशन पैरामीटर को क्या परिभाषित करता है?", opts: ["योजना को एक मूल्य निवेश रणनीति लेआउट का पालन करना चाहिए, जिसमें शुद्ध संपत्ति का न्यूनतम 65% मूल्य इक्विटी उपकरणों में आवंटित किया जाए", "सीमा पार विशेष रूप से अंतरराष्ट्रीय क्षेत्र सूचकांकों में 100% धन लगाने वाला एक गतिशील संरचनात्मक लेआउट", "क्षेत्रीय डेटाबेस सेल के तहत पंजीकृत शीर्ष 50 संप्रभु ट्रेजरी बांडों को ट्रैक करने वाला एक इंडेक्स सेटअप", "प्रायोजकों द्वारा समर्थित अल्पकालिक उच्च उपज कमर्शियल पेपर मुद्दों पर 80% केंद्रित उत्पाद"] },
            correct: 0
        },
        {
            en: { q: "What does the option Greek 'Vanna' measure inside multi-asset derivatives asset management frameworks?", opts: ["The sensitivity of an option's Delta relative to a 1% shift inside the underlying asset's implied volatility layer", "The breakdown speed of the Theta component tracked over contract expiration horizons", "The calculation variance separating sovereign repo metrics across centralized treasury desks daily", "The grading accuracy index tracking physical warehouse metals delivery logs across centers"] },
            hi: { q: "मल्टी-एसेट डेरिवेटिव परिसंपत्ति प्रबंधन ढांचे के भीतर ऑप्शन ग्रीक 'वान्ना' (Vanna) क्या मापता है?", opts: ["अंतर्निहित परिसंपत्ति की निहित अस्थिरता (Implied Volatility) परत के भीतर 1% के बदलाव के सापेक्ष किसी ऑप्शन के डेल्टा (Delta) की संवेदनशीलता", "अनुबंध समाप्ति क्षितिज पर ट्रैक किए गए थिटा (Theta) घटक के घटने की गति", "दैनिक आधार पर केंद्रीकृत ट्रेजरी डेस्क पर संप्रभु रेपो मेट्रिक्स को अलग करने वाला गणना विचरण", "केंद्रों में भौतिक गोदाम धातुओं के वितरण लॉग को ट्रैक करने वाला ग्रेडिंग सटीकता सूचकांक"] },
            correct: 0
        },
        {
            en: { q: "Inside health insurance legislative setups inside India, what does the specific term 'Co-Payment' enforce upon the policyholder?", opts: ["A cost-sharing requirement where the insured agrees to pay a specified fixed percentage of the total admissible claim amount", "An automatic premium multiplication factor applied retroactively inside renewal database logs across centers", "A statutory penalty fine schedule triggered by unexpected compliance reporting delays across corridors", "The complete transfer of remaining physical asset layers to interstate sovereign treasury vaults post exit"] },
            hi: { q: "भारत के भीतर स्वास्थ्य बीमा विधायी व्यवस्था के अंदर, विशिष्ट शब्द 'को-पेमेंट' (Co-Payment) पॉलिसीधारक पर क्या लागू करता है?", opts: ["लागत-साझाकरण (Cost-sharing) की आवश्यकता जहां बीमित व्यक्ति कुल स्वीकार्य दावा राशि का एक निर्दिष्ट निश्चित प्रतिशत भुगतान करने के लिए सहमत होता है", "केंद्रों में नवीनीकरण डेटाबेस लॉग के भीतर पूर्वव्यापी रूप से लागू एक स्वचालित प्रीमियम गुणन कारक", "कॉरिडोर में अप्रत्याशित अनुपालन रिपोर्टिंग देरी के कारण ट्रिगर होने वाली वैधानिक जुर्माना अनुसूची", "निकास के बाद शेष भौतिक संपत्ति परतों को अंतरराज्यीय संप्रभु ट्रेजरी वॉल्ट में पूरी तरह से स्थानांतरित करना"] },
            correct: 0
        },
        {
            en: { q: "In exchange currency derivatives systems inside India, what represents the tick value for a standard USD-INR futures contract?", opts: ["₹0.25 per lot based on a tick size of ₹0.0025 and a lot size of USD 1,000", "₹1.00 per lot based on a tick size of ₹0.0100 and a lot size of USD 10,000", "₹0.50 per lot based on a tick size of ₹0.0500 and a lot size of USD 5,000", "₹0.10 per lot based on a tick size of ₹0.0001 and a lot size of USD 1,000"] },
            hi: { q: "भारत में एक्सचेंज मुद्रा डेरिवेटिव प्रणालियों के भीतर, एक मानक USD-INR फ्यूचर्स अनुबंध के लिए टिक मूल्य (Tick Value) क्या दर्शाता है?", opts: ["₹0.0025 के टिक आकार और 1,000 अमरीकी डालर के लॉट आकार के आधार पर प्रति लॉट ₹0.25", "₹0.0100 के टिक आकार और 10,000 अमरीकी डालर के लॉट आकार के आधार पर प्रति लॉट ₹1.00", "₹0.0500 के टिक आकार और 5,000 अमरीकी डालर के लॉट आकार के आधार पर प्रति लॉट ₹0.50", "₹0.0001 के टिक आकार और 1,000 अमरीकी डालर के लॉट आकार के आधार पर प्रति लॉट ₹0.10"] },
            correct: 0
        },
        {
            en: { q: "What options strategy is established when an investor executes a 'Long Straddle' trading layout?", opts: ["Simultaneously purchasing an At-the-Money (ATM) Call option and an At-the-Money (ATM) Put option on matching assets with identical expiry", "Selling an uncovered deep ITM call contract while executing capital swaps across currency blocks", "Combining a physical gold spot purchase order along with cross-currency futures tracking indices dynamically", "Writes sequential calendar rollover put options across different expiry series parameters inside clearing hubs"] },
            hi: { q: "जब एक निवेशक 'लॉन्ग स्ट्रैडल' (Long Straddle) ट्रेडिंग लेआउट निष्पादित करता है तो कौन सा ऑप्शंस कॉन्फ़िगरेशन स्थापित होता है?", opts: ["समान एक्सपायरी के साथ मिलान वाली परिसंपत्तियों पर एक साथ एक एट-द-मनी (ATM) कॉल ऑप्शन और एक एट-द-मनी (ATM) पुट ऑप्शन खरीदना (Purchasing)", "मुद्रा ब्लॉकों में पूंजी स्वैप निष्पादित करते समय एक अनकवर्ड डीप आईटीएम कॉल अनुबंध बेचना", "गतिशील रूप से क्रॉस-करेंसी फ्यूचर्स ट्रैकिंग इंडेक्स के साथ एक भौतिक सोने की खरीद के आदेश को जोड़ना", "क्लियरिंग हब के भीतर विभिन्न एक्सपायरी श्रृंखला मापदंडों में अनुक्रमिक कैलेंडर रोलओवर पुट ऑप्शंस लिखना"] },
            correct: 0
        },
        {
            en: { q: "Inside fundamental equity stock evaluation layers, what parameters define the asset indicator 'Return on Assets' (ROA)?", opts: ["Net Income divided by Total Assets of the corporate entity, expressed as a percentage", "The total count of institutional retail distributors logged across regional database grid networks", "The dividend payout value divided by the administrative processing tax overhead coefficient baseline", "The structural error variance separating exchange baseline parameters from network login mainframes daily"] },
            hi: { q: "मौलिक इक्विटी स्टॉक मूल्यांकन परतों के भीतर, कौन से मापदंड परिसंपत्ति संकेतक 'रिटर्न ऑन एसेट्स' (ROA) को परिभाषित करते हैं?", opts: ["कॉर्पोरेट इकाई की कुल संपत्ति (Total Assets) द्वारा विभाजित शुद्ध आय (Net Income), प्रतिशत के रूप में व्यक्त", "क्षेत्रीय डेटाबेस ग्रिड नेटवर्क में लॉग इन संस्थागत खुदरा वितरकों की कुल संख्या", "प्रशासनिक प्रसंस्करण कर ओवरहेड गुणांक आधार रेखा द्वारा विभाजित लाभांश भुगतान मूल्य", "दैनिक नेटवर्क लॉगिन मेनफ्रेम से एक्सचेंज बेसライン मापदंडों को अलग करने वाला संरचनात्मक त्रुटि विचरण"] },
            correct: 0
        },
        {
            en: { q: "In physical commodity futures contract configurations, what does an exchange entity declare as the 'Daily Price Limit' (DPL)?", opts: ["The maximum permissible price movement allowed for a commodity contract within a single trading day to prevent extreme panic", "The marketing layout route used by licensed field distributors across state hubs during annual reviews", "The automated computer processing time threshold required to refresh database interface rows dynamically", "The statutory fine schedule triggered following corporate regulatory compliance audit failures across networks"] },
            hi: { q: "भौतिक कमोडिटी फ्यूचर्स अनुबंध विन्यासों में, एक एक्सचेंज संस्था 'डेली प्राइस लिमिट' (Daily Price Limit - DPL) के रूप में क्या घोषित करती है?", opts: ["अत्यधिक पैनिक को रोकने के लिए एक ही ट्रेडिंग दिन के भीतर कमोडिटी अनुबंध के लिए अनुमत अधिकतम मूल्य उतार-चढ़ाव सीमा", "वार्षिक समीक्षा के दौरान राज्य केंद्रों में लाइसेंस प्राप्त क्षेत्र वितरकों द्वारा उपयोग किया जाने वाला विपणन लेआउट मार्ग", "डेटाबेस इंटरफ़ेस पंक्तियों को गतिशील रूप से रीफ्रेश करने के लिए आवश्यक स्वचालित कंप्यूटर प्रसंस्करण समय सीमा", "नेटवर्क पर कॉर्पोरेट नियामक अनुपालन ऑडिट विफलताओं के बाद ट्रिगर होने वाली वैधानिक जुर्माना अनुसूची"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI mutual fund guidelines, what represents the primary mandate of an 'Aggressive Hybrid Fund' product category?", opts: ["To invest between 65% to 80% of total net assets in equity equity-related instruments, and the remaining in debt vehicles", "To allocate 100% of available net funds into international cryptocurrency venture registries across corridors", "To invest exclusively inside sovereign gold futures across multi-commodity exchange counters daily", "To lock in retail capital assets for a mandatory 10-year structural lifecycle blueprint layout scheme"] },
            hi: { q: "सेबी म्यूचुअल फंड दिशानिर्देशों के तहत, 'एग्रेसिव हाइब्रिड फंड' (Aggressive Hybrid Fund) उत्पाद श्रेणी के प्राथमिक अधिदेश को क्या दर्शाता है?", opts: ["कुल शुद्ध संपत्ति का 65% से 80% इक्विटी और इक्विटी से संबंधित उपकरणों में, और शेष ऋण (Debt) वाहनों में निवेश करना", "कॉरिडोर में अंतरराष्ट्रीय क्रिप्टोकरेंसी वेंचर रजिस्ट्रियों में उपलब्ध शुद्ध धन का 100% आवंटित करना", "दैनिक मल्टी-कमोडिटी एक्सचेंज काउंटरों पर विशेष रूप से संप्रभु स्वर्ण फ्यूचर्स के भीतर निवेश करना", "एक अनिवार्य 10-वर्षीय संरचनात्मक जीवनचक्र ब्लूप्रिंट लेआउट योजना के लिए खुदरा पूंजीगत संपत्तियों को लॉक करना"] },
            correct: 0
        },
        {
            en: { q: "What does the option Greek 'Theta' quantify inside multi-asset complex derivatives risk matrix structures?", opts: ["The mathematical rate of decay in an option's premium due exclusively to the absolute passage of time", "The acceleration parameter affecting the absolute intrinsic value across horizons dynamically", "The historical correlation mapping cross-border index yields over sovereign bond blocks quarterly", "The standard deviation metric isolating tracking errors from passive index strategies across networks"] },
            hi: { q: "मल्टी-एसेट जटिल डेरिवेटिव जोखिम मैट्रिक्स संरचनाओं के भीतर ऑप्शन ग्रीक 'थिटा' (Theta) क्या मापता है?", opts: ["विशेष रूप से समय बीतने (Passage of time) के कारण किसी ऑप्शन के प्रीमियम में होने वाली गिरावट (Decay) की गणितीय दर", "गतिशील रूप से विभिन्न क्षितिज पर पूर्ण आंतरिक मूल्य को प्रभावित करने वाला त्वरण पैरामीटर", "त्रैमासिक रूप से संप्रभु बांड ब्लॉकों पर सीमा पार इंडेक्स यील्ड का ऐतिहासिक सहसंबंध मानचित्रण", "नेटवर्क पर पैसिव इंडेक्स रणनीतियों से ट्रैकिंग त्रुटियों को अलग करने वाला मानक विचलन मीट्रिक"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI AIF Regulations, what defines a Category I Alternative Investment Fund profile inside India?", opts: ["Funds that invest in start-ups, early-stage ventures, social ventures, or infrastructure, carrying positive economic spillover effects", "A financial vehicle focused 100% on trading short-term speculative currency options inside clearing house accounts", "An absolute liquidity block equivalent to 15 years managed under sovereign trust frameworks without exit windows", "A floating window altered dynamically by corporate sponsors during monthly compliance tracking ledger reviews"] },
            hi: { q: "सेबी एआईएफ नियमों के तहत, भारत के भीतर श्रेणी I वैकल्पिक निवेश कोष (Category I AIF) प्रोफाइल को क्या परिभाषित करता है?", opts: ["ऐसे फंड जो स्टार्ट-अप, शुरुआती चरण के उपक्रमों, सामाजिक उपक्रमों या बुनियादी ढांचे में निवेश करते हैं, जिनके सकारात्मक आर्थिक प्रभाव होते हैं", "क्लियरिंग हाउस खातों के भीतर अल्पकालिक सट्टा मुद्रा विकल्पों के व्यापार पर 100% केंद्रित एक वित्तीय वाहन", "निकास खिड़कियों के बिना संप्रभु ट्रस्ट ढांचे के तहत प्रबंधित 15 वर्षों के बराबर एक पूर्ण तरलता ब्लॉक", "मासिक अनुपालन ट्रैकिंग बहीखाता समीक्षाओं के दौरान कॉर्पोरेट प्रायोजकों द्वारा गतिशील रूप से बदला जाने वाला एक फ्लोटिंग विंडो"] },
            correct: 0
        },
        {
            en: { q: "Inside the legislative infrastructure of Indian debt instruments, what characterizes a 'Capital Indexed Bond' issued by sovereign entities?", opts: ["A fixed-income security where the principal amount is adjusted periodically to protect investors against national inflation tracking matrices", "An unsecured corporate paper carrying rolling variable coupons evaluated post administrative audit cycles", "A debt asset product structured 100% around international cross-currency settlement ledger adjustments", "A short-term money market instrument with a maturity profile restricted up to 91 days exclusively"] },
            hi: { q: "भारतीय ऋण उपकरणों के विधायी बुनियादी ढांचे के भीतर, संप्रभु संस्थाओं द्वारा जारी 'कैपिटल इंडेक्स्ड बॉन्ड' (Capital Indexed Bond) की क्या विशेषता है?", opts: ["एक फिक्स्ड-इनकम सुरक्षा जिसमें राष्ट्रीय मुद्रास्फीति (Inflation) ट्रैकिंग मेट्रिसेस के खिलाफ निवेशकों की रक्षा के लिए मूल राशि (Principal amount) को समय-समय पर समायोजित किया जाता है", "प्रशासनिक ऑडिट चक्रों के बाद मूल्यांकित रोलिंग परिवर्तनीय कूपन ले जाने वाला एक असुरक्षित कॉर्पोरेट पेपर", "अंतरराष्ट्रीय क्रॉस-करेंसी निपटान बहीखाता समायोजन के आसपास 100% संरचित एक ऋण परिसंपत्ति उत्पाद", "विशेष रूप से 91 दिनों तक सीमित परिपक्वता प्रोफाइल वाला एक अल्पकालिक मुद्रा बाजार उपकरण"] },
            correct: 0
        },
        {
            en: { q: "What options strategy is constructed if an investor executes a 'Short Straddle' trading combination layout?", opts: ["Simultaneously selling an At-the-Money (ATM) Call option and an At-the-Money (ATM) Put option on identical assets with matching expiry", "Buying an At-the-Money call option alongside writing sequential calendar structures across volatile tech spaces", "Combining a physical gold spot purchase order along with cross-currency futures tracking indices dynamically", "Writing sequential calendar rollover options across mismatched expiration series parameters inside clearing rooms"] },
            hi: { q: "यदि कोई निवेशक 'शॉर्ट स्ट्रैडल' (Short Straddle) ट्रेडिंग संयोजन लेआउट निष्पादित करता है तो कौन सा ऑप्शंस रणनीति बनती है?", opts: ["समान एक्सपायरी के साथ समान परिसंपत्तियों पर एक साथ एक एट-द-मनी (ATM) कॉल ऑप्शन और एक एट-द-मनी (ATM) पुट ऑप्शन बेचना (Selling)", "अस्थिर तकनीकी क्षेत्रों में अनुक्रमिक कैलेंडर संरचनाएं लिखने के साथ-साथ एक एट-द-मनी कॉल ऑप्शन खरीदना", "गतिशील रूप से क्रॉस-करेंसी फ्यूचर्स ट्रैकिंग इंडेक्स के साथ एक भौतिक सोने की खरीद के आदेश को जोड़ना", "क्लियरिंग रूम के भीतर असंगत समाप्ति श्रृंखला मापदंडों में अनुक्रमिक कैलेंडर रोलओवर ऑप्शंस लिखना"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI Portfolio Managers rules, what is the mandatory structural requirement governing the separation of client assets inside a PMS setup?", opts: ["The portfolio manager must maintain a clear segregation of each client's funds and securities inside distinct bank and demat accounts", "The provider can pool all retail client assets inside a single corporate ledger to capture high transaction scale benefits", "The system blends advisory asset metrics with marketing pipeline funds to compress administrative accounting tax structures", "The alignment allows investment officers to execute omnibus trade entries utilizing their own personal member broker codes"] },
            hi: { q: "सेबी पोर्टफोलियो प्रबंधक नियमों के अनुसार, पीएमएस (PMS) सेटअप के भीतर ग्राहक परिसंपत्तियों के अलगाव को नियंत्रित करने वाली अनिवार्य संरचनात्मक आवश्यकता क्या है?", opts: ["पोर्टफोलियो प्रबंधक को अलग-अलग बैंक और डिमैट खातों के भीतर प्रत्येक ग्राहक के फंड और प्रतिभूतियों का स्पष्ट अलगाव (Segregation) बनाए रखना होगा", "प्रदाता उच्च लेनदेन पैमाने के लाभों को प्राप्त करने के लिए एक ही कॉर्पोरेट बहीखाता के भीतर सभी खुदरा ग्राहक संपत्तियों को पूल कर सकता है", "प्रणाली प्रशासनिक लेखांकन कर संरचनाओं को संपीड़ित करने के लिए विपणन पाइपलाइन फंड के साथ सलाहकार परिसंपत्ति मेट्रिक्स को मिश्रित करती है", "संरेखण निवेश अधिकारियों को अपने स्वयं के व्यक्तिगत सदस्य ब्रोकर कोड का उपयोग करके सर्वव्यापी व्यापार प्रविष्टियों को निष्पादित करने की अनुमति देता है"] },
            correct: 0
        },
        {
            en: { q: "Inside fundamental equity stock research, what does the corporate evaluation multiplier 'Price-to-Book (P/B) Ratio' precisely evaluate?", opts: ["The market capitalization or share price of a corporate entity divided by its total net asset book value layer", "The relation separating direct asset premiums from operational overhead tax indices across geographical corridors", "The structural error configuration tracking network mainframe re-verification login delays within processing systems", "The dividend allocation percentage distributed to institutional corporate sponsors annually across clearing nodes"] },
            hi: { q: "मौलिक इक्विटी स्टॉक अनुसंधान के भीतर, कॉर्पोरेट मूल्यांकन गुणक 'प्राइस-टू-बुक (P/B) रेशियो' सटीक रूप से क्या दर्शाता है?", opts: ["एक कॉर्पोरेट इकाई का मार्केट कैपिटलाइजेशन या शेयर मूल्य उसके कुल शुद्ध परिसंपत्ति बुक मूल्य परत (Book Value) द्वारा विभाजित", "भौगोलिक गलियारों में प्रत्यक्ष परिसंपत्ति प्रीमियम को परिचालन ओवरहेड कर सूचकांकों से अलग करने वाला संबंध", "प्रसंस्करण प्रणालियों के भीतर नेटवर्क मेनफ्रेम पुनर्सत्यापन लॉगिन देरी को ट्रैक करने वाला संरचनात्मक त्रुटि विन्यास", "क्लियरिंग नोड्स में संस्थागत कॉर्पोरेट प्रायोजकों को वार्षिक रूप से वितरित लाभांश आवंटन प्रतिशत"] },
            correct: 0
        },
        {
            en: { q: "In the physical commodity derivatives ecosystem, what precise parameter defines a 'Negotiable Warehouse Receipt' (NWR) compared to a standard receipt?", opts: ["It is a statutorily recognized document of title that can be transferred or endorsed to another party, enabling trading without moving goods", "The allocation step mapping distributor commission tiers to certified field brokers across regional storage hubs", "The dynamic processing matrix evaluated to clear outdated accounting ledger rows during administrative audits", "The statutory inspection applied over structural mainframe computer network installations inside certified hubs"] },
            hi: { q: "भौतिक कमोडिटी डेरिवेटिव पारिस्थितिकी तंत्र के भीतर, एक मानक रसीद की तुलना में 'नेगोशिएबल वेयरहाउस रसीद' (NWR) को कौन सा सटीक पैरामीटर परिभाषित करता है?", opts: ["यह स्वामित्व का एक वैधानिक रूप से मान्यता प्राप्त दस्तावेज़ (Document of title) है जिसे किसी अन्य पार्टी को स्थानांतरित या एंडोर्स किया जा सकता है, जिससे माल को स्थानांतरित किए बिना व्यापार सक्षम होता है", "क्षेत्रीय भंडारण केंद्रों में प्रमाणित फ़ील्ड दलालों को वितरक कमीशन स्तरों से मैप करने वाला आवंटन चरण", "प्रशासनिक ऑडिट के दौरान पुराने लेखा बहीखाता पंक्तियों को साफ करने के लिए मूल्यांकित गतिशील प्रसंस्करण मैट्रिक्स", "प्रमाणित केंद्रों के भीतर संरचनात्मक मेनफ्रेम कंप्यूटर नेटवर्क इंस्टॉलेशन पर लागू वैधानिक निरीक्षण"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI mutual fund rules, what represents the primary mandate of a 'Large & Mid Cap Fund' asset allocation configuration?", opts: ["The scheme must deploy a minimum of 35% of total assets in large-cap equities and a minimum of 35% in mid-cap equities simultaneously", "To allocate 100% of available net funds into international technology start-up venture instruments across corridors", "To invest exclusively inside sovereign gold futures across multi-commodity exchange clearing windows daily", "To lock in retail capital assets for a mandatory 15-year structural lifecycle blueprint scheme layout across states"] },
            hi: { q: "सेबी म्यूचुअल फंड नियमों के अनुसार, 'लार्ज आणि मिड कैप फंड' (Large & Mid Cap Fund) परिसंपत्ति आवंटन कॉन्फ़िगरेशन के प्राथमिक अधिदेश को क्या परिभाषित करता है?", opts: ["योजना को एक ही समय में कुल संपत्ति का न्यूनतम 35% लार्ज-कैप इक्विटी में और न्यूनतम 35% मिड-कैप इक्विटी में अनिवार्य रूप से निवेश करना होगा", "कॉरिडोर में अंतरराष्ट्रीय प्रौद्योगिकी स्टार्ट-अप वेंचर उपकरणों में उपलब्ध शुद्ध धन का 100% आवंटित करना", "मल्टी-कमोडिटी एक्सचेंज क्लियरिंग विंडो में दैनिक रूप से विशेष रूप से संप्रभु स्वर्ण फ्यूचर्स के भीतर निवेश करना", "राज्यों में एक अनिवार्य 15-वर्षीय संरचनात्मक जीवनचक्र ब्लूप्रिंट योजना लेआउट के लिए खुदरा पूंजीगत संपत्तियों को लॉक करना"] },
            correct: 0
        },
        {
            en: { q: "What does the option Greek 'Gamma' quantify inside multi-asset complex derivatives volatility management tracking models?", opts: ["The rate of change in an option's Delta relative to a 1-unit shift inside the underlying asset's spot or futures price", "The time decay factor affecting the intrinsic value parameter across consecutive contract expiration updates", "The dynamic variance checked between cross-border sovereign baseline treasury asset index configurations quarterly", "The standard deviation metric isolating tracking errors from physical warehouse deliveries across networks"] },
            hi: { q: "मल्टी-एसेट जटिल डेरिवेटिव वोलाटिलिटी प्रबंधन ट्रैकिंग मॉडल के भीतर ऑप्शन ग्रीक 'गामा' (Gamma) क्या मापता है?", opts: ["अंतर्निहित परिसंपत्ति की हाजिर या फ्यूचर्स कीमत में 1-इकाई के बदलाव के सापेक्ष किसी ऑप्शन के डेल्टा (Delta) में बदलाव की दर", "लगातार अनुबंध समाप्ति अपडेट में आंतरिक मूल्य पैरामीटर को प्रभावित करने वाला समय क्षय कारक", "त्रैमासिक रूप से सीमा पार संप्रभु आधारभूत ट्रेजरी परिसंपत्ति सूचकांक विन्यासों के बीच जांचा गया गतिशील विचरण", "नेटवर्क पर भौतिक गोदाम वितरण से ट्रैकिंग त्रुटियों को अलग करने वाला मानक विचलन मीट्रिक"] },
            correct: 0
        },
        {
            en: { q: "Inside the insurance administrative pipeline, what does the specific principle 'Indemnity' enforce across general property contracts?", opts: ["To place the insured in the same financial position after a loss as they were immediately before the loss; they cannot profit from insurance", "The structural allocation formula used to determine broker incentive configurations across states during reviews", "The legal pathway enabling clearing house desks to confiscate damaged physical cargo items following events", "The automated calculation matrix measuring solvency adequate capital baselines quarterly across corporate repositories"] },
            hi: { q: "बीमा प्रशासनिक पाइपलाइन के भीतर, विशिष्ट सिद्धांत 'क्षतिपूर्ति' (Indemnity) सामान्य संपत्ति अनुबंधों में क्या लागू करता है?", opts: ["नुकसान के बाद बीमित व्यक्ति को उसी वित्तीय स्थिति में रखना जिसमें वह नुकसान से ठीक पहले था; वे बीमा से लाभ (Profit) नहीं कमा सकते", "समीक्षाओं के दौरान राज्यों में ब्रोकर प्रोत्साहन विन्यास निर्धारित करने के लिए उपयोग किया जाने वाला संरचनात्मक आवंटन फॉर्मूला", "घटनाओं के बाद क्लियरिंग हाउस डेस्क को क्षतिग्रस्त भौतिक कार्गो वस्तुओं को जब्त करने में सक्षम बनाने वाला कानूनी मार्ग", "कॉर्पोरेट रिपोजिटरी में त्रैमासिक रूप से सॉल्वेंसी पर्याप्त पूंजी आधार को मापने वाला स्वचालित गणना मैट्रिक्स"] },
            correct: 0
        },
        {
            en: { q: "In exchange currency derivatives configurations, what does the specific term 'Open Interest (OI)' signify during trading hours?", opts: ["The total number of outstanding or unliquidated derivative contracts that remain active in the market at any given time", "The dynamic processing tax tariff evaluated across interstate clearance center mainframes during sessions", "The cumulative tracking error variance monitored inside passive index allocation strategies over horizons", "The sovereign interest rate multiplier added dynamically by central banking repository units during updates"] },
            hi: { q: "एक्सचेंज मुद्रा डेरिवेटिव कॉन्फ़िगरेशन में, ट्रेडिंग घंटों के दौरान विशिष्ट शब्द 'ओपन इंटरेस्ट (OI)' क्या दर्शाता है?", opts: ["बकाया या गैर-परिसमाप्त (Unliquidated) डेरिवेटिव अनुबंधों की कुल संख्या जो किसी भी समय बाजार में सक्रिय रहते हैं", "सत्रों के दौरान अंतरराज्यीय क्लीयरेंस सेंटर मेनफ्रेम में मूल्यांकित गतिशील प्रसंस्करण कर टैरिफ", "क्षितिज पर पैसिव इंडेक्स आवंटन रणनीतियों के भीतर मॉनिटर की गई संचयी ट्रैकिंग त्रुटि विचरण", "अपडेट के दौरान केंद्रीय बैंकिंग रिपोजिटरी इकाइयों द्वारा गतिशील रूप से जोड़ा गया संप्रभु ब्याज दर गुणक"] },
            correct: 0
        },
        // --- NISM Advanced Standard Mock Test: Structural Risk & Asset Layouts (Set 14) ---
        {
            en: { q: "An exotic option's pricing structure shows a high positive 'Charm' (Delta Decay). What precise structural modification occurs within this derivative contract parameters?", opts: ["The rate of change in the option's Delta relative to the absolute passage of time over horizons", "The sensitivity of the option's Vega relative to shifts inside the spot price underlying layer", "The dynamic variance checked between cross-border sovereign baseline treasury asset metrics quarterly", "The mathematical acceleration of Gamma relative to a 1-unit structural spot execution movement"] },
            hi: { q: "एक एक्सोटिक ऑप्शन की मूल्य निर्धारण संरचना में उच्च सकारात्मक 'चार्म' (Charm / डेल्टा डिके) दिखाई देता है। इस डेरिवेटिव अनुबंध मापदंडों के भीतर कौन सा सटीक संरचनात्मक संशोधन होता है?", opts: ["क्षितिज पर पूर्ण समय बीतने (Passage of time) के सापेक्ष ऑप्शन के डेल्टा (Delta) में बदलाव की दर", "अंतर्निहित परिसंपत्ति की हाजिर कीमत (Spot Price) में बदलाव के सापेक्ष ऑप्शन के वेगा (Vega) की संवेदनशीलता", "त्रैमासिक रूप से सीमा पार संप्रभु आधारभूत ट्रेजरी परिसंपत्ति मेट्रिक्स के बीच जांचा गया गतिशील विचरण", "1-इकाई संरचनात्मक हाजिर निष्पादन आंदोलन के सापेक्ष गामा (Gamma) का गणितीय त्वरण"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI Alternative Investment Funds (AIF) Regulations, what represents the strict mandatory minimum investment size required from an individual investor to allocate capital into a Category III AIF?", opts: ["₹1 Crore", "₹50 Lakh", "₹2 Crore", "₹5 Crore"] },
            hi: { q: "सेबी वैकल्पिक निवेश कोष (AIF) नियमों के तहत, किसी व्यक्तिगत निवेशक के लिए श्रेणी III AIF (Category III AIF) के भीतर पूंजी लगाने के लिए आवश्यक सख्त अनिवार्य न्यूनतम निवेश राशि क्या है?", opts: ["₹1 करोड़ (₹1 Crore)", "₹50 लाख", "₹2 करोड़", "₹5 करोड़"] },
            correct: 0
        },
        {
            en: { q: "In exchange-traded currency derivatives inside India, what exact regulatory accounting process captures the realized daily profit or loss from overnight positions?", opts: ["Daily Mark-to-Market (MTM) margin debit or credit processed into client ledger accounts via the clearing corporation", "A static historical amortization pricing accounting review executed at contract maturity exclusively", "An automated spreadsheet conversion based on central banking overnight repo index parameters", "A floating processing matrix adjusted dynamically by corporate sponsors post administrative updates"] },
            hi: { q: "भारत में एक्सचेंज-ट्रेडेड मुद्रा डेरिवेटिव (Currency Derivatives) के भीतर, कौन सी सटीक नियामक लेखांकन प्रक्रिया ओवरनाइट पोजीशन से वास्तविक दैनिक लाभ या हानि को कैप्चर करती है?", opts: ["क्लियरिंग कॉरपोरेशन के माध्यम से ग्राहक बहीखाता खातों में संसाधित दैनिक मार्क-टू-मार्केट (MTM) मार्जिन डेबिट या क्रेडिट", "विशेष रूप से अनुबंध परिपक्वता पर निष्पादित एक स्थिर ऐतिहासिक मूल्य निर्धारण लेखा समीक्षा", "केंद्रीय बैंकिंग ओवरनाइट रेपो इंडेक्स मापदंडों पर आधारित एक स्वचालित स्प्रेडशीट रूपांतरण", "प्रशासनिक अपडेट के बाद कॉर्पोरेट प्रायोजकों द्वारा गतिशील रूप से समायोजित एक फ्लोटिंग प्रसंस्करण मैट्रिक्स"] },
            correct: 0
        },
        {
            en: { q: "What does the risk metric 'Macaulay Duration' quantify inside advanced fixed-income analytics and institutional debt trading systems?", opts: ["The weighted average time required for an investor to receive all cash flows from a bond, expressed in years", "The percentage change in a bond's price relative to a 100-basis point parallel shift in the yield curve", "The historical systematic correlation tracking corporate bond spreads against risk-free sovereign paper", "The structural error variance separating passive target gilt funds from overnight call money indexes"] },
            hi: { q: "उन्नत फिक्स्ड-इनकम एनालिटिक्स और संस्थागत ऋण व्यापार प्रणालियों के भीतर जोखिम मीट्रिक 'मैकाले ड्यूरेशन' (Macaulay Duration) क्या मापता है?", opts: ["एक निवेशक को बॉन्ड से सभी नकद प्रवाह (Cash flows) प्राप्त करने के लिए आवश्यक भारित औसत समय, वर्षों में व्यक्त", "यील्ड कर्व में 100-बेसिस पॉइंट के समानांतर बदलाव के सापेक्ष बॉन्ड की कीमत में होने वाला प्रतिशत बदलाव", "जोखिम-मुक्त संप्रभु पेपर के खिलाफ कॉर्पोरेट बॉन्ड स्प्रेड को ट्रैक करने वाला ऐतिहासिक व्यवस्थित सहसंबंध", "पैसिव लक्षित गिल्ट फंड को ओवरनाइट कॉल मनी इंडेक्स से अलग करने वाला संरचनात्मक त्रुटि विचरण"] },
            correct: 0
        },
        {
            en: { q: "According to SEBI REIT (Real Estate Investment Trusts) regulations, what represents the strict minimum frequency mandated for the operational valuation of a REIT's physical assets?", opts: ["At least once in every financial year, conducted via a certified independent registered valuer", "Bi-monthly tracking monitored through automated regional infrastructure mainframe systems", "Quarterly database updates handled directly by the corporate trustee's internal accounting desk", "A floating lifecycle calendar profile determined dynamically by the clearing corporation board"] },
            hi: { q: "सेबी आरईआईटी (रियल एस्टेट इन्वेस्टमेंट ट्रस्ट) नियमों के अनुसार, आरईआईटी की भौतिक संपत्तियों के परिचालन मूल्यांकन के लिए अनिवार्य सख्त न्यूनतम आवृत्ति क्या है?", opts: ["प्रत्येक वित्तीय वर्ष में कम से कम एक बार, एक प्रमाणित स्वतंत्र पंजीकृत मूल्यांकक (Registered valuer) के माध्यम से आयोजित", "स्वचालित क्षेत्रीय बुनियादी ढांचा मेनफ्रेम प्रणालियों के माध्यम से मॉनिटर की जाने वाली द्वि-मासिक ट्रैकिंग", "कॉर्पोरेट ट्रस्टी के आंतरिक लेखा डेस्क द्वारा सीधे संभाला जाने वाला त्रैमासिक डेटाबेस अपडेट", "क्लियरिंग कॉरपोरेशन बोर्ड द्वारा गतिशील रूप से निर्धारित एक फ्लोटिंग जीवनचक्र कैलेंडर प्रोफाइल"] },
            correct: 0
        },
        {
            en: { q: "An options portfolio exhibits a 'Delta' profile of zero and a highly positive 'Vega' configuration. What market expectation is the portfolio manager capitalizing on?", opts: ["An anticipated explosive expansion in the underlying asset's implied volatility, regardless of the spot direction", "A completely stagnant and range-bound underlying price action mixed with rapid time decay acceleration", "A linear directional upward breakout inside the sovereign overnight interbank interest rate curves", "An automated conversion of physical commodity warehouse positions into global bullion deliveries"] },
            hi: { q: "एक ऑप्शंस पोर्टफोलियो शून्य का 'डेल्टा' (Delta) प्रोफाइल और एक अत्यधिक सकारात्मक 'वेगा' (Vega) कॉन्फ़िगरेशन प्रदर्शित करता है। पोर्टफोलियो मैनेजर किस बाजार प्रत्याशा का लाभ उठा रहा है?", opts: ["अंतर्निहित परिसंपत्ति की निहित अस्थिरता (Implied Volatility) में एक प्रत्याशित विस्फोटक वृद्धि, चाहे हाजिर मूल्य की दिशा कुछ भी हो", "तीव्र समय क्षय (Time decay) त्वरण के साथ मिश्रित एक पूरी तरह से स्थिर और सीमा-बद्ध अंतर्निहित मूल्य कार्रवाई", "संप्रभु ओवरनाइट अंतरबैंक ब्याज दर वक्रों के भीतर एक रैखिक दिशात्मक ऊपर की ओर ब्रेकआउट", "भौतिक कमोडिटी गोदाम पोजीशन का वैश्विक बुलियन डिलीवरी में एक स्वचालित रूपांतरण"] },
            correct: 0
        },
        {
            en: { q: "Under the SEBI (Prohibition of Fraudulent and Unfair Trade Practices) Regulations, what manipulative market practice is defined by executing artificial trades to inflate trading volumes?", opts: ["Wash Sales or Churning structures designed to create a false appearance of market liquidity", "Front-Running block configurations executed ahead of institutional multi-asset orders", "Arbitrage Basis Degradation calibrated through offshore central banking mainframes", "Regulatory Interlocking Slippage tracked across state level corporate databases"] },
            hi: { q: "सेबी (धोखाधड़ी और अनुचित व्यापार प्रथाओं का निषेध) नियमों के तहत, ट्रेडिंग वॉल्यूम को कृत्रिम रूप से बढ़ाने के लिए किए जाने वाले बनावटी सौदों को कौन सी हेरफेर वाली बाजार प्रथा (Manipulative practice) परिभाषित करती है?", opts: ["बाजार की तरलता (Liquidity) का झूठा आभास पैदा करने के लिए डिज़ाइन की गई वॉश सेल्स (Wash Sales) या चर्निंग संरचनाएं", "संस्थागत मल्टी-एसेट ऑर्डर से पहले निष्पादित फ्रंट-रनिंग (Front-Running) ब्लॉक कॉन्फ़िगरेशन", "अपतटीय केंद्रीय बैंकिंग मेनफ्रेम के माध्यम से कैलिब्रेट किया गया आर्बिट्रेज बेसिस डिग्रेडेशन", "राज्य स्तरीय कॉर्पोरेट डेटाबेस में ट्रैक की गई नियामक इंटरलॉकिंग स्लिपेज"] },
            correct: 0
        },
        {
            en: { q: "In physical commodity futures contracts on Indian platforms, what does the 'Alternative Delivery Mechanism' (ADM) empower trading participants to execute?", opts: ["Sellers and buyers mutually agree to settle delivery specifications outside exchange-mandated warehouses on customized terms", "The clearing corporation forfeits the entire margin allocation to redistribute it among field brokers dynamically", "The contract is compulsorily converted into long-term sovereign treasury paper upon contract expiration", "An automated cash liquidation framework that waives all physical product grading assessments retroactively"] },
            hi: { q: "भारतीय प्लेटफॉर्म पर भौतिक कमोडिटी फ्यूचर्स अनुबंधों में, 'वैकल्पिक वितरण तंत्र' (ADM) ट्रेडिंग प्रतिभागियों को क्या निष्पादित करने का अधिकार देता है?", opts: ["विक्रेता और खरीदार अनुकूलित शर्तों पर एक्सचेंज-अनिवार्य गोदामों के बाहर डिलीवरी विनिर्देशों को निपटाने के लिए पारस्परिक रूप से सहमत होते हैं", "क्लियरिंग कॉरपोरेशन फ़ील्ड दलालों के बीच गतिशील रूप से पुनर्वितरित करने के लिए संपूर्ण मार्जिन आवंटन को जब्त कर लेता है", "अनुबंध समाप्ति पर अनुबंध को अनिवार्य रूप से दीर्घकालिक संप्रभु ट्रेजरी पेपर में बदल दिया जाता है", "एक स्वचालित नकद परिसमापन ढांचा जो पूर्वव्यापी रूप से सभी भौतिक उत्पाद ग्रेडिंग आकलनों को माफ कर देता है"] },
            correct: 0
        },
        {
            en: { q: "What does the active equity benchmarking metric 'Information Ratio' isolate and establish during professional fund selection filters?", opts: ["The active excess return generated per unit of tracking error risk relative to a target baseline index", "The absolute gross performance divided by the total unsystematic portfolio standard deviation baseline", "The compound correlation index separating growth strategies from passive exchange traded setups", "The accounting asset structure layout variance evaluated post corporate spin-off execution events"] },
            hi: { q: "पेशेवर फंड चयन फिल्टर के दौरान सक्रिय इक्विटी बेंचमार्किंग मीट्रिक 'इन्फॉर्मेशन रेशियो' (Information Ratio) क्या अलग करता है और स्थापित करता है?", opts: ["एक लक्षित बेसलाइन इंडेक्स के सापेक्ष ट्रैकिंग त्रुटि जोखिम (Tracking error risk) की प्रति इकाई पर उत्पन्न सक्रिय अतिरिक्त रिटर्न", "कुल व्यवस्थित पोर्टफोलियो मानक विचलन आधार रेखा द्वारा विभाजित पूर्ण सकल प्रदर्शन", "पैसिव एक्सचेंज ट्रेडेड सेटअप से ग्रोथ रणनीतियों को अलग करने वाला चक्रवृद्धि सहसंबंध सूचकांक", "कॉर्पोरेट स्पिन-ऑफ निष्पादन घटनाओं के बाद मूल्यांकित लेखांकन परिसंपत्ति संरचना लेआउट विचरण"] },
            correct: 0
        },
        {
            en: { q: "Under IRDAI regulations, what mandatory asset protection ledger is an insurance company required to build to handle long-tail catastrophic losses over cycles?", opts: ["Catastrophic Reserve or Special Contingency Ledger Allocation", "Void Claims Settlement Amortization Block", "Surrendered Wrapper Capital Alignment Matrix", "Dynamic Interstate Sovereign Redistribution Vault"] },
            hi: { q: "IRDAI नियमों के तहत, एक बीमा कंपनी को चक्रों में लंबे समय तक चलने वाले विनाशकारी नुकसान को संभालने के लिए कौन सा अनिवार्य परिसंपत्ति सुरक्षा बहीखाता बनाने की आवश्यकता होती है?", opts: ["विनाशकारी रिजर्व (Catastrophic Reserve) या विशेष आकस्मिक बहीखाता आवंटन", "शून्य दावा निपटान परिशोधन ब्लॉक", "सरेंडर किए गए रैपर कैपिटल एलाइनमेंट मैट्रिक्स", "गतिशील अंतरराज्यीय संप्रभु पुनर्वितरण वॉल्ट"] },
            correct: 0
        },
        {
            en: { q: "What does an options pricing environment characterized as 'Volatility Skew' reflect across a structural strike price series?", opts: ["Implied volatility parameters vary significantly across different strike prices for the identical expiration contract layer", "The time value decay factor changes perfectly linearly as the position approaches calendar expiration boundaries", "The structural conversion mechanism flips dynamic currency futures parameters into spot physical delivery", "The mathematical acceleration velocity of Delta remains completely decoupled from baseline asset yields"] },
            hi: { q: "एक ऑप्शंस मूल्य निर्धारण माहौल जिसे 'वोलाटिलिटी स्क्यू' (Volatility Skew) कहा जाता है, एक संरचनात्मक स्ट्राइक मूल्य श्रृंखला में क्या दर्शाता है?", opts: ["समान समाप्ति अनुबंध परत (Identical expiration) के लिए विभिन्न स्ट्राइक मूल्यों पर निहित अस्थिरता (Implied volatility) मापदंडों का काफी भिन्न होना", "स्थिति कैलेंडर समाप्ति सीमाओं के करीब पहुंचने पर समय मूल्य क्षय कारक पूरी तरह से रैखिक रूप से बदलता है", "संरचनात्मक रूपांतरण तंत्र गतिशील मुद्रा वायदा मापदंडों को हाजिर भौतिक वितरण में बदल देता है", "डेल्टा का गणितीय त्वरण वेग आधारभूत परिसंपत्ति प्रतिफल से पूरी तरह से अलग रहता है"] },
            correct: 0
        },
        {
            en: { q: "An investor constructs a 'Short Straddle' options trading layout. What structural financial risk profile does this net position hold?", opts: ["Unlimited risk exposure on both the upside and downside if the underlying spot price breaks out aggressively", "A completely locked flat loss matrix backed by central clearing corporation stabilization funds", "An automated conversion into physical sovereign treasury debt notes upon contract calendar expiry", "Zero structural risk since the upfront premium collection builds a total defensive clearing barrier"] },
            hi: { q: "एक निवेशक 'शॉर्ट स्ट्रैडल' (Short Straddle) ऑप्शंस ट्रेडिंग लेआउट बनाता है। इस नेट पोजीशन का संरचनात्मक वित्तीय जोखिम प्रोफाइल क्या होता है?", opts: ["यदि अंतर्निहित हाजिर मूल्य (Spot price) आक्रामक रूप से ब्रेकआउट करता है तो ऊपर और नीचे दोनों तरफ असीमित जोखिम एक्सपोजर (Unlimited risk)", "केंद्रीय क्लियरिंग कॉर्पोरेशन स्थिरीकरण कोष द्वारा समर्थित एक पूरी तरह से लॉक फ्लैट नुकसान मैट्रिक्स", "अनुबंध कैलेंडर समाप्ति पर भौतिक संप्रभु ट्रेजरी ऋण नोटों में एक स्वचालित रूपांतरण", "शून्य संरचनात्मक जोखिम क्योंकि अग्रिम प्रीमियम संग्रह एक पूर्ण रक्षात्मक क्लियरिंग बाधा बनाता है"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI Mutual Fund rules, a 'Multi Cap Fund' scheme faces what strict mandatory asset allocation percentages inside its portfolio layout?", opts: ["A minimum of 25% each in Large-Cap, Mid-Cap, and Small-Cap equities simultaneously at all times", "A minimum allocation of 65% in large corporate entities without any sector category constraints", "An absolute volume boundary equivalent to 50% of the active sponsor's aggregate asset ledger sheets", "A floating layout template adjusted dynamically via centralized clearing corporation computing nodes"] },
            hi: { q: "सेबी म्यूचुअल फंड नियमों के अनुसार, एक 'मल्टी कैप फंड' (Multi Cap Fund) योजना को अपने पोर्टफोलियो लेआउट के भीतर किन सख्त अनिवार्य परिसंपत्ति आवंटन प्रतिशतों का पालन करना पड़ता है?", opts: ["हर समय एक साथ लार्ज-कैप, मिड-कैप और स्मॉल-कैप इक्विटी में न्यूनतम 25%-25% निवेश अनिवार्य", "बिना किसी क्षेत्र श्रेणी प्रतिबंध के बड़ी कॉर्पोरेट संस्थाओं में 65% का न्यूनतम आवंटन", "सक्रिय प्रायोजक के कुल परिसंपत्ति बहीखाता शीट के 50% के बराबर एक पूर्ण मात्रा सीमा", "केंद्रीय क्लियरिंग कॉर्पोरेशन कंप्यूटिंग नोड्स के माध्यम से गतिशील रूप से समायोजित एक फ्लोटिंग लेआउट टेम्पलेट"] },
            correct: 0
        },
        {
            en: { q: "In corporate debt restructuring setups inside Indian financial networks, what does the specific metric 'Yield-to-Call' (YTC) assess for a fixed income paper?", opts: ["The expected return generated if a callable bond is held by the investor until its designated corporate call date", "The historical tracking index divergence separating debt mutual funds from passive benchmark assets", "The administrative tax tariff structural penalty calculated post cross-border repository execution updates", "The dynamic processing speed required to clear network mainframe login authentication verification logs"] },
            hi: { q: "भारतीय वित्तीय नेटवर्कों के भीतर कॉर्पोरेट ऋण पुनर्गठन व्यवस्था में, विशिष्ट मीट्रिक 'यील्ड-टू-कॉल' (YTC) एक फिक्स्ड इनकम पेपर के लिए किसका आकलन करता है?", opts: ["यदि निवेशक द्वारा एक कॉलेबल बॉन्ड (Callable bond) को उसकी निर्दिष्ट कॉर्पोरेट कॉल तिथि तक रखा जाता है, तो उत्पन्न अपेक्षित रिटर्न", "ऋण म्यूचुअल फंड को पैसिव बेंचमार्क परिसंपत्तियों से अलग करने वाला ऐतिहासिक ट्रैकिंग इंडेक्स विचलन", "सीमा पार रिपोजिटरी निष्पादन अपडेट के बाद गणना की गई प्रशासनिक कर टैरिफ संरचनात्मक जुर्माना", "नेटवर्क मेनफ्रेम लॉगिन प्रमाणीकरण सत्यापन लॉग को साफ करने के लिए आवश्यक गतिशील प्रसंस्करण गति"] },
            correct: 0
        },
        {
            en: { q: "What does the portfolio optimization index 'Omega Ratio' evaluate inside advanced asset risk-adjusted benchmarking platforms?", opts: ["The probability-weighted ratio of gains versus losses relative to a specified target or threshold return parameter", "The absolute performance return produced relative to the systematic portfolio standard deviation layers", "The tracking discrepancy variance separating active growth fund portfolios from indices across networks", "The accounting net capital volume adjusted post corporate infrastructure asset liquidation actions"] },
            hi: { q: "उन्नत परिसंपत्ति जोखिम-समायोजित बेंचमार्किंग प्लेटफॉर्म के भीतर पोर्टफोलियो अनुकूलन सूचकांक 'ओमेगा रेशियो' (Omega Ratio) किसका मूल्यांकन करता है?", opts: ["एक निर्दिष्ट लक्ष्य या सीमा रिटर्न पैरामीटर के सापेक्ष लाभ बनाम हानि का संभाव्यता-भारित अनुपात (Probability-weighted ratio)", "व्यवस्थित पोर्टफोलियो मानक विचलन परतों के सापेक्ष उत्पादित पूर्ण प्रदर्शन रिटर्न", "नेटवर्क पर सूचकांकों से सक्रिय विकास कोष पोर्टफोलियो को अलग करने वाला ट्रैकिंग विसंगति विचरण", "कॉर्पोरेट बुनियादी ढांचा परिसंपत्ति परिसमापन कार्यों के बाद समायोजित लेखांकन शुद्ध पूंजी मात्रा"] },
            correct: 0
        },
        {
            en: { q: "Under the SEBI (Listing Obligations and Disclosure Requirements) Regulations, what strict frequency is mandated for listed companies to submit their certified shareholding pattern reports?", opts: ["Within 21 days from the end of each quarter", "Within 30 days from the end of each financial year exclusively", "Within 45 days from the completion of the semi-annual processing horizon", "A rolling weekly cycle processed via central depository automated network terminals"] },
            hi: { q: "सेबी (सूचीबद्धता दायित्व और प्रकटीकरण आवश्यकताएं) नियमों के तहत, सूचीबद्ध कंपनियों को अपनी प्रमाणित शेयरहोल्डिंग पैटर्न रिपोर्ट (Shareholding pattern reports) जमा करने के लिए कौन सी सख्त आवृत्ति अनिवार्य है?", opts: ["प्रत्येक तिमाही (Quarter) समाप्त होने के २१ दिनों के भीतर", "विशेष रूप से प्रत्येक वित्तीय वर्ष के अंत से ३० दिनों के भीतर", "अर्ध-वार्षिक प्रसंस्करण क्षितिज पूरा होने के ४५ दिनों के भीतर", "केंद्रीय डिपॉजिटरी स्वचालित नेटवर्क टर्मिनलों के माध्यम से संसाधित एक रोलिंग साप्ताहिक चक्र"] },
            correct: 0
        },
        {
            en: { q: "In structural physical commodity infrastructure, what precise mechanism handles the standardization and security verification of precious metals inside refinery setups?", opts: ["The India Good Delivery Standard (IGDS) framework managed under certified regulatory monitoring bodies", "The Warehouse Clearing Corporate Re-verification Settlement Bureau Counter", "The National Agricultural Mandis Central Database Verification Wing", "The Financial Benchmarks India Pvt. Ltd. Asset Operations Counter"] },
            hi: { q: "संरचनात्मक भौतिक कमोडिटी बुनियादी ढांचे में, रिफाइनरी सेटअप के भीतर कीमती धातुओं के मानकीकरण और सुरक्षा सत्यापन को कौन सा सटीक तंत्र संभालता है?", opts: ["प्रमाणित नियामक निगरानी निकायों के तहत प्रबंधित इंडिया गुड डिलीवरी स्टैंडर्ड (IGDS) ढांचा", "गोदाम समाशोधन कॉर्पोरेट पुनर्सत्यापन निपटान ब्यूरो काउंटर", "राष्ट्रीय कृषि मंडी केंद्रीय डेटाबेस सत्यापन विंग", "फाइनेंशियल बेंचमार्क इंडिया प्राइवेट लिमिटेड परिसंपत्ति परिचालन काउंटर"] },
            correct: 0
        },
        {
            en: { q: "What does the option Greek 'DgammaDvol' or 'Zomma' measure inside quantitative multi-asset derivatives valuation frameworks?", opts: ["The modification sensitivity of an option's Gamma relative to a 1% shift inside underlying implied volatility layers", "The acceleration rate of time value erosion tracking across contract calendar boundaries", "The historical tracking index correlation adjustments handled through central banking updates", "The dynamic error variance checked across physical warehouse metals cargo distribution logs"] },
            hi: { q: "मात्रात्मक मल्टी-एसेट डेरिवेटिव मूल्यांकन ढांचे के भीतर ऑप्शन ग्रीक 'DgammaDvol' या 'जोम्मा' (Zomma) क्या मापता है?", opts: ["अंतर्निहित निहित अस्थिरता परतों (Implied volatility layers) के भीतर 1% के बदलाव के सापेक्ष किसी ऑप्शन के गामा (Gamma) की संशोधन संवेदनशीलता", "अनुबंध कैलेंडर सीमाओं में समय मूल्य क्षरण ट्रैकिंग की त्वरण दर", "केंद्रीय बैंकिंग अपडेट के माध्यम से संभाले जाने वाले ऐतिहासिक ट्रैकिंग सूचकांक सहसंबंध समायोजन", "भौतिक गोदाम धातु कार्गो वितरण लॉग में जांची गई गतिशील त्रुटि विचरण"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI Mutual Fund guidelines, what mandatory operational step must an Asset Management Company (AMC) take if a debt security inside its portfolio experiences a sudden default?", opts: ["The AMC must immediately segregate the distressed asset portfolio layer from the main scheme via a side-pocketing structural frame", "The fund manager must inject corporate capital directly from the sponsor net worth to cover all losses", "The database automatically wipes out all administrative tracking metrics across transaction centers", "The compliance infrastructure enables fund officers to transfer personal stock shares to neutralize the write-down"] },
            hi: { q: "सेबी म्यूचुअल फंड दिशानिर्देशों के तहत, यदि एसेट मैनेजमेंट कंपनी (AMC) के पोर्टफोलियो के भीतर कोई ऋण सुरक्षा (Debt security) अचानक डिफ़ॉल्ट हो जाती है, तो उसे कौन सा अनिवार्य परिचालन कदम उठाना होगा?", opts: ["एएमसी को तुरंत साइड-पॉकेटिंग (Side-pocketing) संरचनात्मक ढांचे के माध्यम से मुख्य योजना से संकटग्रस्त परिसंपत्ति पोर्टफोलियो परत को अलग करना होगा", "फंड मैनेजर को सभी नुकसानों को कवर करने के लिए प्रायोजक की कुल संपत्ति से सीधे कॉर्पोरेट पूंजी लगानी होगी", "डेटाबेस स्वचालित रूप से लेनदेन केंद्रों में सभी प्रशासनिक ट्रैकिंग मेट्रिक्स को मिटा देता", "अनुपालन बुनियादी ढांचा फंड अधिकारियों को राइट-डाउन को बेअसर करने के लिए व्यक्तिगत स्टॉक शेयरों को स्थानांतरित करने में सक्षम बनाता है"] },
            correct: 0
        },
        {
            en: { q: "Inside the structural framework of Indian money markets, what precise system operationalizes the real-time processing and clearing of interbank call money transactions legally?", opts: ["The Reserve Bank of India Real Time Gross Settlement (RTGS) architecture along with CCIL settlement", "The National Stock Exchange Clearing Wing Corporate Infrastructure Mainframe Platform", "The Securities and Exchange Board of India Public Debt Cell Settlement Bureau", "The Association of Mutual Funds in India Central Operations Database Counter"] },
            hi: { q: "भारतीय मुद्रा बाजारों के ढांचागत ढांचे के भीतर, कौन सी सटीक प्रणाली अंतरबैंक कॉल मनी (Call money) लेनदेन के वास्तविक समय के प्रसंस्करण और समाशोधन को कानूनी रूप से संचालित करती है?", opts: ["भारतीय रिजर्व बैंक रीयल टाइम ग्रॉस सेटलमेंट (RTGS) आर्किटेक्चर और CCIL सेटलमेंट", "नेशनल स्टॉक एक्सचेंज क्लियरिंग विंग कॉर्पोरेट इंफ्रास्ट्रक्चर मेनफ्रेम प्लेटफॉर्म", "भारतीय प्रतिभूति और विनिमय बोर्ड सार्वजनिक ऋण सेल निपटान ब्यूरो", "एसोसिएशन ऑफ म्यूचुअल फंड्स इन इंडिया सेंट्रल ऑपरेशन्स डेटाबेस काउंटर"] },
            correct: 0
        },
        {
            en: { q: "What advanced option configuration is established when an investor constructs a 'Short Butterfly Spread' using Put Options?", opts: ["Selling one ITM Put, purchasing two ATM Puts, and selling one OTM Put with equal strike price intervals and identical expiration", "Buying two consecutive monthly rollover deep out-of-the-money put contract layers across currency network channels", "Combining a physical commodity delivery order with certified warehouse structural repository certificates dynamically", "Writing sequential calendar rollover call options across mismatched expiration configurations inside clearing systems"] },
            hi: { q: "जब एक निवेशक पुट ऑप्शंस (Put Options) का उपयोग करके 'शॉर्ट बटरफ्लाई स्प्रेड' (Short Butterfly Spread) रणनीति बनाता है तो कौन सा उन्नत ऑप्शन कॉन्फ़िगरेशन स्थापित होता है?", opts: ["समान स्ट्राइक मूल्य अंतराल और समान समाप्ति के साथ एक आईटीएम (ITM) पुट बेचना, दो एटीएम (ATM) पुट खरीदना, और एक ओटीएम (OTM) पुट बेचना", "मुद्रा नेटवर्क चैनलों में लगातार दो मासिक रोलओवर गहरी आउट-ऑफ-द-मनी पुट अनुबंध परतें खरीदना", "प्रमाणित गोदाम संरचनात्मक रिपोजिटरी प्रमाणपत्रों के साथ एक भौतिक कमोडिटी वितरण आदेश को गतिशील रूप से जोड़ना", "क्लियरिंग सिस्टम के भीतर बेमेल समाप्ति विन्यासों में अनुक्रमिक कैलेंडर रोलओवर कॉल ऑप्शंस लिखना"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI Investment Advisers Regulations, what strict fiduciary operational parameter governs the disclosure of conflicts of interest to clients?", opts: ["The Investment Adviser must disclose all material conflicts of interest, including any holding or commission ties, in writing prior to advising the client", "The advisor can conceal product commission matrices if the client signing threshold falls below standard baseline rates", "The database automatically blends marketing execution portfolios to compress accounting overhead tax structures across centers", "The compliance infrastructure allows advisory officers to waive disclosure protocols if trades route via personal broker codes"] },
            hi: { q: "सेबी निवेश सलाहकार नियमों के तहत, ग्राहकों के लिए हितों के टकराव (Conflicts of interest) के प्रकटीकरण को कौन सा सख्त संप्रभु परिचालन पैरामीटर नियंत्रित करता है?", opts: ["निवेश सलाहकार को ग्राहक को सलाह देने से पहले किसी भी होल्डिंग या कमीशन संबंधों सहित हितों के सभी महत्वपूर्ण टकरावों का लिखित रूप में खुलासा करना चाहिए", "सलाहकार उत्पाद कमीशन मेट्रिक्स को छुपा सकता है यदि ग्राहक हस्ताक्षर सीमा मानक आधारभूत दरों से नीचे गिर जाती है", "डेटाबेस केंद्रों पर लेखांकन ओवरहेड कर संरचनाओं को संपीड़ित करने के लिए स्वचालित रूप से विपणन निष्पादन पोर्टफोलियो को मिश्रित करता है", "अनुपालन बुनियादी ढांचा सलाहकार अधिकारियों को प्रकटीकरण प्रोटोकॉल को माफ करने की अनुमति देता है यदि ट्रेड व्यक्तिगत ब्रोकर कोड के माध्यम से रूट होते हैं"] },
            correct: 0
        },
        {
            en: { q: "Inside fundamental corporate financial evaluation layers, what does a company's 'Interest Coverage Ratio' isolate and assess during structural default modeling?", opts: ["The capability of a corporate entity to fulfill its outstanding interest obligations using its Earnings Before Interest and Taxes (EBIT)", "The gross equipment turnover volume checked against machinery asset depreciation logged across processing centers", "The compound dividend allocation scale tracked dynamically across multiple operational calendar lifecycle loops", "The structural processing tax tariff evaluated across state internal revenue management divisions post audits"] },
            hi: { q: "मौलिक कॉर्पोरेट वित्तीय मूल्यांकन परतों के भीतर, संरचनात्मक डिफ़ॉल्ट मॉडलिंग के दौरान किसी कंपनी का 'इंटरेस्ट कवरेज रेशियो' (Interest Coverage Ratio) क्या अलग करता है और उसका आकलन करता है?", opts: ["ब्याज और करों से पहले की कमाई (EBIT) का उपयोग करके अपने बकाया ब्याज दायित्वों को पूरा करने की कॉर्पोरेट इकाई की क्षमता", "प्रसंस्करण केंद्रों में लॉग इन मशीनरी परिसंपत्ति मूल्यह्रास के खिलाफ जांचा गया सकल उपकरण टर्नओवर वॉल्यूम", "कई परिचालन कैलेंडर जीवनचक्र लूपों में गतिशील रूप से ट्रैक किया गया चक्रवृद्धि लाभांश आवंटन पैमाना", "ऑडिट के बाद राज्य आंतरिक राजस्व प्रबंधन प्रणालियों में मूल्यांकित संरचनात्मक प्रसंस्करण कर टैरिफ"] },
            correct: 0
        },
        {
            en: { q: "In exchange currency derivatives execution frameworks on Indian platforms, what is the exact base currency lot size applied for a cross-currency Pound Sterling-US Dollar (GBP-USD) contract?", opts: ["GBP 1,000 per lot", "USD 1,000 per lot", "GBP 10,000 per lot", "USD 10,000 per lot"] },
            hi: { q: "भारतीय प्लेटफॉर्म पर एक्सचेंज मुद्रा डेरिवेटिव निष्पादन ढांचे में, क्रॉस-करेंसी पाउंड स्टर्लिंग-यूएस डॉलर (GBP-USD) अनुबंध के लिए लागू सटीक आधार मुद्रा लॉट आकार (Lot size) क्या होता है?", opts: ["प्रति लॉट GBP 1,000 (GBP 1,000 per lot)", "प्रति लॉट USD 1,000", "प्रति लॉट GBP 10,000", "प्रति लॉट USD 10,000"] },
            correct: 0
        },
        {
            en: { q: "What precise structural market condition is defined by the term 'Contango' inside derivative commodities futures operations?", opts: ["A market condition where the futures price of a commodity trades higher than the current physical spot price parameters over horizons", "The structural operational failure tracking network mainframe login authentication delay parameters across centers", "The absolute legal penalty ledger fine structure applied post compliance monitoring omission gaps inside database sheets", "The natural material decay profile evaluated across accredited cold storage commodity distribution corridors"] },
            hi: { q: "डेरिवेटिव कमोडिटीज फ्यूचर्स ऑपरेशन्स के भीतर 'कंटैंगो' (Contango) शब्द से कौन सी सटीक संरचनात्मक बाजार स्थिति परिभाषित होती है?", opts: ["एक बाजार स्थिति जहां किसी कमोडिटी की फ्यूचर्स कीमत (Futures price) क्षितिज पर वर्तमान भौतिक हाजिर मूल्य (Spot price) मापदंडों से अधिक ट्रेड करती है", "केंद्रों में नेटवर्क मेनफ्रेम लॉगिन प्रमाणीकरण देरी मापदंडों को ट्रैक करने वाली संरचनात्मक परिचालन विफलता", "डेटाबेस शीट के भीतर अनुपालन निगरानी चूक अंतराल के बाद लागू पूर्ण कानूनी दंड बहीखाता जुर्माना संरचना", "मान्यता प्राप्त कोल्ड स्टोरेज कमोडिटी वितरण कॉरिडोर में मूल्यांकित प्राकृतिक सामग्री क्षय प्रोफाइल"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI Mutual Fund regulations, what mandatory framework governs the calculation and publication of a scheme's Net Asset Value (NAV) to ensure uniform transparency?", opts: ["The NAV must be computed and published on every trading day based on standardized valuation guidelines processed through SEBI-approved agencies", "A static ledger amortization valuation model maintained internally by the fund manager on a weekly baseline cycle", "An automated spreadsheet matrix derived exclusively from sovereign central banking discount windows post closing pricing", "A floating compliance matrix adjusted dynamically by corporate sponsors during administrative updates"] },
            hi: { q: "सेबी म्यूचुअल फंड नियमों के तहत, समान पारदर्शिता सुनिश्चित करने के लिए किसी योजना के शुद्ध संपत्ति मूल्य (NAV) की गणना और प्रकाशन को कौन सा अनिवार्य ढांचा नियंत्रित करता है?", opts: ["सेबी-अनुमोदित एजेंसियों के माध्यम से संसाधित मानकीकृत मूल्यांकन दिशानिर्देशों के आधार पर प्रत्येक ट्रेडिंग दिन (Every trading day) पर एनएवी की गणना और प्रकाशन होना चाहिए", "साप्ताहिक आधारभूत चक्र पर फंड मैनेजर द्वारा आंतरिक रूप से बनाए रखा गया एक स्थिर बहीखाता परिशोधन मूल्यांकन मॉडल", "क्लोजिंग प्राइसिंग के बाद विशेष रूप से संप्रभु केंद्रीय बैंकिंग डिस्काउंट विंडो से प्राप्त एक स्वचालित स्प्रेडशीट मैट्रिक्स", "प्रशासनिक अपडेट के दौरान कॉर्पोरेट प्रायोजकों द्वारा गतिशील रूप से समायोजित एक फ्लोटिंग अनुपालन मैट्रिक्स"] },
            correct: 0
        },
        {
            en: { q: "What does the option Greek 'DthetaDvol' or 'Vera' measure inside advanced structural derivatives option risk auditing matrix setups?", opts: ["The rate of change in an option's Theta relative to continuous modifications inside underlying implied volatility parameters", "The time decay factor affecting the intrinsic value parameter across consecutive contract expiration updates", "The historical correlation mapping index performance over cross-border sovereign treasury asset blocks", "The variance separating direct distribution mechanisms from field distributor marketing channels across states"] },
            hi: { q: "उन्नत संरचनात्मक डेरिवेटिव ऑप्शन जोखिम ऑडिटिंग मैट्रिक्स सेटअप के भीतर ऑप्शन ग्रीक 'DthetaDvol' या 'वेरा' (Vera) क्या मापता है?", opts: ["अंतर्निहित निहित अस्थिरता मापदंडों (Implied volatility) के भीतर निरंतर संशोधनों के सापेक्ष किसी ऑप्शन के थिटा (Theta) में बदलाव की दर", "लगातार अनुबंध समाप्ति अपडेट में आंतरिक मूल्य पैरामीटर को प्रभावित करने वाला समय क्षय कारक", "सीमा पार संप्रभु ट्रेजरी परिसंपत्ति ब्लॉकों पर इंडेक्स प्रदर्शन का ऐतिहासिक सहसंबंध मानचित्रण", "राज्यों में प्रत्यक्ष वितरण तंत्र को फ़ील्ड वितरक विपणन चैनलों से अलग करने वाला विचरण"] },
            correct: 0
        },
        {
            en: { q: "Inside the statutory setup of Indian stock exchanges, what institutional cell manages the settlement and risk management of equity derivatives transactions?", opts: ["A SEBI-Recognized Clearing Corporation acting as a central counterparty to ensure absolute trade fulfillment", "The National Stock Exchange Board of Trustee Internal Settlement Account Counter Desk", "The Securities and Exchange Board of India Public Debt Cell Settlement Bureau Mainframe", "The Association of Mutual Funds in India Central Operations Database Counter Platform"] },
            hi: { q: "भारतीय स्टॉक एक्सचेंजों के वैधानिक ढांचे के भीतर, कौन सा संस्थागत सेल इक्विटी डेरिवेटिव लेनदेन के निपटान (Settlement) और जोखिम प्रबंधन का प्रबंधन करता है?", opts: ["पूर्ण व्यापार पूर्ति सुनिश्चित करने के लिए केंद्रीय प्रतिपक्ष (Central counterparty) के रूप में कार्य करने वाला एक सेबी-मान्यता प्राप्त क्लियरिंग कॉरपोरेशन", "नेशनल स्टॉक एक्सचेंज बोर्ड ऑफ ट्रस्टी इंटरनल सेटलमेंट अकाउंट काउंटर डेस्क", "भारतीय प्रतिभूति और विनिमय बोर्ड सार्वजनिक ऋण सेल निपटान ब्यूरो मेनफ्रेम", "एसोसिएशन ऑफ म्यूचुअल फंड्स इन इंडिया सेंट्रल ऑपरेशन्स डेटाबेस काउंटर प्लेटफॉर्म"] },
            correct: 0
        },
        {
            en: { q: "What options strategy layout is formulated when an investor purchases a 'Bear Put Spread' trading combination?", opts: ["Purchasing a higher strike Put option and simultaneously selling a lower strike Put option on the matching asset and identical expiry", "Buying an At-the-Money call option alongside writing consecutive calendar structures across volatile technology spaces", "Combining a physical commodity purchase order with cross-currency futures tracking parameters dynamically", "Writing sequential calendar rollover call options across mismatched expiration series parameters inside centers"] },
            hi: { q: "जब एक निवेशक 'बियर पुट स्प्रेड' (Bear Put Spread) ट्रेडिंग संयोजन खरीदता है तो कौन सा ऑप्शंस रणनीति लेआउट बनता है?", opts: ["एक उच्च स्ट्राइक पुट ऑप्शन खरीदना (Purchasing) और साथ ही मिलान वाली परिसंपत्ति और समान एक्सपायरी पर एक कम स्ट्राइक पुट ऑप्शन बेचना (Selling)", "अस्थिर प्रौद्योगिकी क्षेत्रों में लगातार कैलेंडर संरचनाएं लिखने के साथ-साथ एक एट-द-मनी कॉल ऑप्शन खरीदना", "गतिशील रूप से क्रॉस-करेंसी फ्यूचर्स ट्रैकिंग मापदंडों के साथ एक भौतिक कमोडिटी खरीद आदेश को जोड़ना", "केंद्रों के भीतर असंगत समाप्ति श्रृंखला मापदंडों में अनुक्रमिक कैलेंडर रोलओवर कॉल ऑप्शंस लिखना"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI rules, what precise structural metric defines 'Tracking Error' for an index or passive mutual fund scheme portfolio?", opts: ["The annualized standard deviation of the difference in daily returns between the passive scheme portfolio and its target benchmark index", "The total count of institutional retail distributors logged across regional database grid networks during annual updates", "The absolute dividend allocation value divided by the administrative processing tax overhead baseline coefficient sheet", "The structural error variance separating exchange baseline metrics from network login mainframes daily post reviews"] },
            hi: { q: "सेबी के नियमों के अनुसार, कौन सा सटीक संरचनात्मक मीट्रिक किसी इंडेक्स या पैसिव म्यूचुअल फंड योजना पोर्टफोलियो के लिए 'ट्रैकिंग एरर' (Tracking Error) को परिभाषित करता है?", opts: ["पैसिव योजना पोर्टफोलियो (Passive scheme portfolio) और उसके लक्षित बेंचमार्क इंडेक्स के बीच दैनिक रिटर्न के अंतर का वार्षिक मानक विचलन (Standard deviation)", "वार्षिक अपडेट के दौरान क्षेत्रीय डेटाबेस ग्रिड नेटवर्क में लॉग इन संस्थागत खुदरा वितरकों की कुल संख्या", "प्रशासनिक प्रसंस्करण कर ओवरहेड बेसलाइन गुणांक शीट द्वारा विभाजित पूर्ण लाभांश आवंटन मूल्य", "समीक्षा के बाद दैनिक नेटवर्क लॉगिन मेनफ्रेम से एक्सचेंज बेसलाइन मेट्रिक्स को अलग करने वाला संरचनात्मक त्रुटि विचरण"] },
            correct: 0
        },
        {
            en: { q: "Inside fundamental corporate equity evaluation, what parameters characterize the valuation multiple 'Price-to-Sales (P/S) Ratio'?", opts: ["The market capitalization or share price of a corporate entity divided by its total annual gross sales revenue stream", "The relation separating baseline asset premiums from administrative processing tax structures across sectors", "The structural error variance configuration tracking network mainframe re-verification delay codes within mainframes", "The dividend allocation percentage distributed to institutional corporate sponsors divided by asset growth indices annually"] },
            hi: { q: "मौलिक कॉर्पोरेट इक्विटी मूल्यांकन के भीतर, कौन से मापदंड 'प्राइस-टू-सेल्स (P/S) रेशियो' को परिभाषित करते हैं?", opts: ["एक कॉर्पोरेट इकाई का मार्केट कैपिटलाइजेशन या शेयर मूल्य उसके कुल वार्षिक सकल बिक्री राजस्व प्रवाह (Gross sales revenue) द्वारा विभाजित", "क्षेत्रों में कॉर्पोरेट परिसंपत्ति प्रीमियम को प्रशासनिक प्रसंस्करण कर संरचनाओं से अलग करने वाला संबंध", "मेनफ्रेम के भीतर नेटवर्क मेनफ्रेम पुनर्सत्यापन देरी कोड को ट्रैक करने वाला संरचनात्मक त्रुटि विचरण विन्यास", "वार्षिक रूप से परिसंपत्ति वृद्धि सूचकांकों द्वारा विभाजित संस्थागत कॉर्पोरेट प्रायोजकों को वितरित लाभांश आवंटन प्रतिशत"] },
            correct: 0
        },
        {
            en: { q: "In the physical commodity derivatives settlement framework inside India, what does the specific term 'Backwardation' signify?", opts: ["A market state where the spot price of a physical commodity trades higher than its corresponding futures contract prices over horizons", "The allocation step mapping distributor commission tiers to certified field brokers across storage hubs during annual audits", "The dynamic processing matrix evaluated to clear outdated accounting ledger rows during institutional database overhauls", "The statutory inspection applied over structural mainframe computer network installations inside certified hubs post updates"] },
            hi: { q: "भारत के भीतर भौतिक कमोडिटी डेरिवेटिव निपटान ढांचे में, विशिष्ट शब्द 'बैकवर्डेशन' (Backwardation) क्या दर्शाता है?", opts: ["एक बाजार स्थिति जहां किसी भौतिक कमोडिटी की हाजिर कीमत (Spot price) क्षितिज पर उसके संबंधित फ्यूचर्स अनुबंध कीमतों से अधिक ट्रेड करती है", "वार्षिक ऑडिट के दौरान भंडारण केंद्रों में प्रमाणित फ़ील्ड दलालों को वितरक कमीशन स्तरों से मैप करने वाला आवंटन चरण", "संस्थागत डेटाबेस ओवरहाल के दौरान पुरानी लेखा बहीखाता पंक्तियों को साफ करने के लिए मूल्यांकित गतिशील प्रसंस्करण मैट्रिक्स", "अपडेट के बाद प्रमाणित केंद्रों के भीतर संरचनात्मक मेनफ्रेम कंप्यूटर नेटवर्क इंस्टॉलेशन पर लागू वैधानिक निरीक्षण"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI mutual fund rules, what defines the core configuration parameter for an 'ELSS' (Equity Linked Savings Scheme) asset structure?", opts: ["The scheme must follow a diversified equity investment strategy, carrying a mandatory statutory lock-in period of 3 years", "A dynamic structural layout deploying 100% funds into international sector indices exclusively across borders with exit options", "An index setup tracking the top 50 sovereign treasury bonds registered under the regional database cells with open execution", "A product focused 80% on short-term high yield commercial paper issues backed by corporate sponsors without limits"] },
            hi: { q: "सेबी म्यूचुअल फंड नियमों के अनुसार, एक 'ELSS' (Equity Linked Savings Scheme) परिसंपत्ति संरचना के लिए मुख्य कॉन्फ़िगरेशन पैरामीटर को क्या परिभाषित करता है?", opts: ["योजना को एक विविधीकृत इक्विटी निवेश रणनीति का पालन करना चाहिए, जिसमें ३ वर्ष की अनिवार्य वैधानिक लॉक-इन अवधि (Statutory lock-in) शामिल है", "निकास विकल्पों के साथ सीमा पार विशेष रूप से अंतरराष्ट्रीय क्षेत्र सूचकांकों में 100% धन लगाने वाला एक गतिशील संरचनात्मक लेआउट", "खुले निष्पादन के साथ क्षेत्रीय डेटाबेस सेल के तहत पंजीकृत शीर्ष 50 संप्रभु ट्रेजरी बांडों को ट्रैक करने वाला एक इंडेक्स सेटअप", "बिना किसी सीमा के कॉर्पोरेट प्रायोजकों द्वारा समर्थित अल्पकालिक उच्च उपज कमर्शियल पेपर मुद्दों पर 80% केंद्रित उत्पाद"] },
            correct: 0
        },
        {
            en: { q: "What does the option Greek 'Vanna' quantify inside multi-asset exotic derivatives volatility management tracking models?", opts: ["The mathematical sensitivity of an option's Delta relative to changes inside the underlying asset's implied volatility layer", "The breakdown speed of the Theta component tracked over contract expiration horizons across operational nodes", "The calculation variance separating sovereign repo metrics across centralized treasury desks daily post processing adjustments", "The grading accuracy index tracking physical warehouse metals delivery logs across centers during tracking exercises"] },
            hi: { q: "मल्टी-एसेट एक्सोटिक डेरिवेटिव वोलाटिलिटी प्रबंधन ट्रैकिंग मॉडल के भीतर ऑप्शन ग्रीक 'वान्ना' (Vanna) क्या मापता है?", opts: ["अंतर्निहित परिसंपत्ति की निहित अस्थिरता (Implied volatility) परत के भीतर बदलाव के सापेक्ष किसी ऑप्शन के डेल्टा (Delta) की गणितीय संवेदनशीलता", "परिचालन नोड्स में अनुबंध समाप्ति क्षितिज पर ट्रैक किए गए थिटा (Theta) घटक के घटने की गति", "प्रसंस्करण समायोजन के बाद दैनिक आधार पर केंद्रीकृत ट्रेजरी डेस्क पर संप्रभु रेपो मेट्रिक्स को अलग करने वाला गणना विचरण", "ट्रैकिंग अभ्यासों के दौरान केंद्रों में भौतिक गोदाम धातुओं के वितरण लॉग को ट्रैक करने वाला ग्रेडिंग सटीकता सूचकांक"] },
            correct: 0
        },
        {
            en: { q: "Inside property insurance administrative pipelines, what does the specific principle 'Subrogation' enforce post loss settlements?", opts: ["The transfer of legal rights from the insured to the insurance company to pursue recovery from the third party responsible for the loss", "The structural allocation formula used to determine broker incentive configurations across states during reviews", "The legal pathway enabling clearing house desks to confiscate damaged physical cargo items following corporate events", "The automated calculation matrix measuring solvency adequate capital baselines quarterly across corporate repositories"] },
            hi: { q: "संपत्ति बीमा प्रशासनिक पाइपलाइनों के भीतर, विशिष्ट सिद्धांत 'सब्रोगेशन' (Subrogation / प्रतिस्थापन) नुकसान निपटान के बाद क्या लागू करता है?", opts: ["नुकसान के लिए जिम्मेदार तीसरे पक्ष से वसूली करने के लिए बीमित व्यक्ति से बीमा कंपनी को कानूनी अधिकारों का हस्तांतरण (Transfer of legal rights)", "समीक्षाओं के दौरान राज्यों में ब्रोकर प्रोत्साहन विन्यास निर्धारित करने के लिए उपयोग किया जाने वाला संरचनात्मक आवंटन फॉर्मूला", "कॉर्पोरेट घटनाओं के बाद क्लियरिंग校 डेस्क को क्षतिग्रस्त भौतिक कार्गो वस्तुओं को जब्त करने में सक्षम बनाने वाला कानूनी मार्ग", "कॉर्पोरेट रिपोजिटरी में त्रैमासिक रूप से सॉल्वेंसी पर्याप्त पूंजी आधार को मापने वाला स्वचालित गणना मैट्रिक्स"] },
            correct: 0
        },
        {
            en: { q: "In exchange currency derivatives systems inside India, what represents the final settlement protocol for an expiring USD-INR futures contract?", opts: ["The contract is compulsorily cash-settled in Indian Rupees based on the official RBI Reference Rate published on the last trading day", "The clearing corporation forces physical delivery of US Dollar notes through accredited international banking terminals", "The parameters freeze retroactively to align with global physical warehouse bullion delivery sheets automatically", "The margin allocation drops to absolute zero parameters to waive all systematic clearing hazards post expiration loops"] },
            hi: { q: "भारत में एक्सचेंज मुद्रा डेरिवेटिव प्रणालियों के भीतर, समाप्त होने वाले USD-INR फ्यूचर्स अनुबंध के लिए अंतिम निपटान प्रोटोकॉल (Final settlement protocol) क्या दर्शाता है?", opts: ["अंतिम ट्रेडिंग दिन प्रकाशित आधिकारिक आरबीआई संदर्भ दर (RBI Reference Rate) के आधार पर अनुबंध अनिवार्य रूप से भारतीय रुपये में नकद-निपटाया (Cash-settled) जाता है", "क्लियरिंग कॉरपोरेशन मान्यता प्राप्त अंतर्राष्ट्रीय बैंकिंग टर्मिनलों के माध्यम से अमेरिकी डॉलर के नोटों की भौतिक डिलीवरी लागू करता है", "वैश्विक भौतिक गोदाम बुलियन वितरण शीट के साथ स्वचालित रूप से संरेखित करने के लिए पैरामीटर पूर्वव्यापी रूप से फ्रीज हो जाते हैं", "समाप्ति लूप के बाद सभी व्यवस्थित क्लियरिंग खतरों को माफ करने के लिए मार्जिन आवंटन पूर्ण शून्य मापदंडों तक गिर जाता है"] },
            correct: 0
        },
        {
            en: { q: "What options strategy is constructed if an investor sells a 'Long Butterfly Spread' configuration layout?", opts: ["Selling the wing strikes and purchasing the middle strike option layers simultaneously with matching expiry profiles", "Buying two consecutive monthly rollover deep out-of-the-money contract layers across currency nodes during sessions", "Combining a physical commodity delivery order with certified warehouse structural repository certificates inside centers", "Writing sequential calendar rollover call options across mismatched expiration configurations inside clearing systems"] },
            hi: { q: "यदि कोई निवेशक 'लॉन्ग बटरफ्लाई स्प्रेड' (Long Butterfly Spread) कॉन्फ़िगरेशन लेआउट बेचता है (Sells) तो कौन सा ऑप्शंस रणनीति बनती है?", opts: ["मैचिंग एक्सपायरी प्रोफाइल के साथ विंग स्ट्राइक्स को बेचना आणि मिडल स्ट्राइक ऑप्शन परतों को एक साथ खरीदना", "सत्रों के दौरान मुद्रा नोड्स में लगातार दो मासिक रोलओवर गहरी आउट-ऑफ-द-मनी अनुबंध परतें खरीदना", "केंद्रों के भीतर प्रमाणित गोदाम संरचनात्मक रिपोजिटरी प्रमाणपत्रों के साथ एक भौतिक कमोडिटी वितरण आदेश को जोड़ना", "क्लियरिंग सिस्टम के भीतर बेमेल समाप्ति विन्यासों में अनुक्रमिक कैलेंडर रोलओवर कॉल ऑप्शंस लिखना"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI Portfolio Managers rules, what represents the strict 'Discretionary Portfolio Management' mandate inside India?", opts: ["The portfolio manager independently executes investment choices and manages client assets based on the formal contract grid, without prior approval for each trade", "The provider must obtain written authorization from the retail client before routing every individual system entry", "The database automatically blends marketing execution portfolios to compress accounting overhead tax structures across centers", "The compliance infrastructure enables fund officers to route personal stock allocations through corporate member broker codes"] },
            hi: { q: "सेबी पोर्टफोलियो प्रबंधक नियमों के अनुसार, भारत के भीतर सख्त 'विवेकधीन पोर्टफोलियो प्रबंधन' (Discretionary Portfolio Management) शासनादेश क्या दर्शाता है?", opts: ["पोर्टफोलियो प्रबंधक प्रत्येक व्यापार के लिए पूर्व स्वीकृति के बिना, औपचारिक अनुबंध ग्रिड के आधार पर स्वतंत्र रूप से निवेश विकल्पों को निष्पादित करता है", "प्रदाता को प्रत्येक व्यक्तिगत सिस्टम प्रविष्टि को रूट करने से पहले खुदरा ग्राहक से लिखित प्राधिकरण प्राप्त करना होगा", "डेटाबेस केंद्रों पर लेखांकन ओवरहेड कर संरचनाओं को संपीड़ित करने के लिए स्वचालित रूप से विपणन निष्पादन पोर्टफोलियो को मिश्रित करता है", "अनुपालन बुनियादी ढांचा फंड अधिकारियों को कॉर्पोरेट सदस्य ब्रोकर कोड के माध्यम से व्यक्तिगत स्टॉक आवंटन को रूट करने में सक्षम बनाता है"] },
            correct: 0
        },
        {
            en: { q: "Inside fundamental corporate equity evaluation matrices, what does the multiplier 'Enterprise Value-to-Sales (EV/Sales)' precisely assess?", opts: ["The entire enterprise valuation of a corporate entity relative to its annual gross sales revenue layer, incorporating debt configurations", "The relation separating direct asset premiums from operational overhead tax indices across geographical corridors post updates", "The structural error configuration tracking network mainframe re-verification login delays within processing systems after reviews", "The dividend allocation percentage distributed to institutional corporate sponsors annually across clearing nodes during validations"] },
            hi: { q: "मौलिक कॉर्पोरेट इक्विटी मूल्यांकन मेट्रिसेस के भीतर, गुणक 'एंटरप्राइज वैल्यू-टू-सेल्स (EV/Sales)' सटीक रूप से क्या दर्शाता है?", opts: ["ऋण विन्यासों (Debt) को शामिल करते हुए, कॉर्पोरेट इकाई के वार्षिक सकल बिक्री राजस्व परत के सापेक्ष उसका संपूर्ण एंटरप्राइज वैल्यूएशन", "अपडेट के बाद भौगोलिक गलियारों में प्रत्यक्ष परिसंपत्ति प्रीमियम को परिचालन ओवरहेड कर सूचकांकों से अलग करने वाला संबंध", "समीक्षाओं के बाद प्रसंस्करण प्रणालियों के भीतर नेटवर्क मेनफ्रेम पुनर्सत्यापन लॉगिन देरी को ट्रैक करने वाला संरचनात्मक त्रुटि विन्यास", "सत्यापन के दौरान क्लियरिंग नोड्स में संस्थागत कॉर्पोरेट प्रायोजकों को वार्षिक रूप से वितरित लाभांश आवंटन प्रतिशत"] },
            correct: 0
        },
        {
            en: { q: "In physical commodity derivatives environments, what precise parameter characterizes a 'Warehouse Receipt' issued under regulatory compliance channels?", opts: ["It serves as a legal document evidencing that specified commodity quantity, quality, and grade parameters are deposited inside an accredited facility", "The allocation step mapping distributor commission tiers to certified field brokers across storage hubs during audits", "The dynamic processing matrix evaluated to clear outdated accounting ledger rows during institutional database updates", "The statutory inspection applied over structural mainframe computer network installations inside certified hubs post configuration reviews"] },
            hi: { q: "भौतिक कमोडिटी डेरिवेटिव वातावरण के भीतर, नियामक अनुपालन चैनलों के तहत जारी 'वेयरहाउस रसीद' (Warehouse Receipt) को कौन सा सटीक पैरामीटर परिभाषित करता है?", opts: ["यह एक कानूनी दस्तावेज के रूप में कार्य करता है जो यह प्रमाणित करता है कि निर्दिष्ट कमोडिटी मात्रा, गुणवत्ता और ग्रेड मापदंडों को एक मान्यता प्राप्त सुविधा में जमा किया गया है", "ऑडिट के दौरान भंडारण केंद्रों में प्रमाणित फ़ील्ड दलालों को वितरक कमीशन स्तरों से मैप करने वाला आवंटन चरण", "संस्थागत डेटाबेस अपडेट के दौरान पुरानी लेखा बहीखाता पंक्तियों को साफ करने के लिए मूल्यांकित गतिशील प्रसंस्करण मैट्रिक्स", "कॉन्फ़िगरेशन समीक्षाओं के बाद प्रमाणित केंद्रों के भीतर संरचनात्मक मेनफ्रेम कंप्यूटर नेटवर्क इंस्टॉलेशन पर लागू वैधानिक निरीक्षण"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI mutual fund guidelines, what represents the primary mandate of a 'Contra Fund' asset allocation configuration?", opts: ["To generate capital returns by adopting a contrarian investment strategy, investing a minimum of 65% of net assets in equity and equity-related tools", "To allocate 100% of available net funds into international technology start-up venture instruments across corridors dynamically", "To invest exclusively inside sovereign gold futures across multi-commodity exchange clearing windows daily post session updates", "To lock in retail capital assets for a mandatory 15-year structural lifecycle blueprint scheme layout across states during initialization"] },
            hi: { q: "सेबी म्यूचुअल फंड दिशानिर्देशों के तहत, 'कॉन्ट्रा फंड' (Contra Fund) परिसंपत्ति आवंटन कॉन्फ़िगरेशन के प्राथमिक अधिदेश को क्या परिभाषित करता है?", opts: ["एक विपरीत निवेश रणनीति (Contrarian strategy) अपनाकर रिटर्न उत्पन्न करना, इक्विटी उपकरणों में शुद्ध संपत्ति का न्यूनतम 65% निवेश करना", "गतिशील रूप से कॉरिडोर में अंतरराष्ट्रीय प्रौद्योगिकी स्टार्ट-अप वेंचर उपकरणों में उपलब्ध शुद्ध धन का 100% आवंटित करना", "सत्र अपडेट के बाद दैनिक रूप से मल्टी-कमोडिटी एक्सचेंज क्लियरिंग विंडो में विशेष रूप से संप्रभु स्वर्ण वायदा के भीतर निवेश करना", "आरंभीकरण के दौरान राज्यों में एक अनिवार्य 15-वर्षीय संरचनात्मक जीवनचक्र ब्लूप्रिंट योजना लेआउट के लिए खुदरा पूंजीगत संपत्तियों को लॉक करना"] },
            correct: 0
        },
        // --- NISM Advanced Standard Mock Test: Quantitative Derivatives & Structural Frameworks (Set 15) ---
        {
            en: { q: "An exotic options portfolio possesses a high negative 'Speed' parameter. What exact physical and mathematical transition does this indicate inside advanced risk management models?", opts: ["The rate of change of the option's Gamma relative to changes in the underlying asset's spot price layer", "The velocity of time value decay erosion calculated across variable operational calendar periods", "The structural error configuration separating cross-border sovereign baseline treasury asset metrics", "The statistical variance isolating index tracking deficiencies from physical warehouse logistics"] },
            hi: { q: "एक एक्सोटिक ऑप्शंस पोर्टफोलियो में उच्च नकारात्मक 'स्पीड' (Speed) पैरामीटर है। यह उन्नत जोखिम प्रबंधन मॉडल के भीतर किस सटीक भौतिक और गणितीय परिवर्तन को दर्शाता है?", opts: ["अंतर्निहित परिसंपत्ति की हाजिर कीमत (Spot Price) परत में बदलाव के सापेक्ष ऑप्शन के गामा (Gamma) के बदलने की दर", "परिवर्तनीय परिचालन कैलेंडर अवधियों में गणना की गई समय मूल्य क्षय (Time value decay) क्षरण की गति", "सीमा पार संप्रभु आधारभूत ट्रेजरी परिसंपत्ति मेट्रिक्स को अलग करने वाला संरचनात्मक त्रुटि विन्यास", "भौतिक गोदाम रसद से इंडेक्स ट्रैकिंग कमियों को अलग करने वाला सांख्यिकीय विचरण"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI Alternative Investment Funds (AIF) Regulations, what represents the strict minimum corpus size parameter required for a single Category I or Category II AIF scheme setup inside India?", opts: ["₹20 Crore", "₹10 Crore", "₹50 Crore", "There is no minimum corpus size parameter required for Category I AIFs"] },
            hi: { q: "सेबी वैकल्पिक निवेश कोष (AIF) नियमों के तहत, भारत के भीतर एकल श्रेणी I या श्रेणी II AIF योजना सेटअप के लिए आवश्यक सख्त न्यूनतम कॉर्पस आकार (Corpus Size) पैरामीटर क्या है?", opts: ["₹20 करोड़ (₹20 Crore)", "₹10 करोड़", "₹50 करोड़", "श्रेणी I AIF के लिए कोई न्यूनतम कॉर्पस आकार पैरामीटर आवश्यक नहीं है"] },
            correct: 0
        },
        {
            en: { q: "In exchange-traded currency derivatives, what occurs to the option premium if the underlying exchange rate remains static but implied volatility collapses instantly?", opts: ["The option premium falls significantly for both Call and Put options because Vega decreases their pricing layer", "The option premium increases aggressively because Theta accelerates time decay gains dynamically", "The clearing corporation forces an automatic retroactive transition from European to American structures", "The margin layout baseline drops to absolute zero parameters to absorb sovereign asset index shocks"] },
            hi: { q: "एक्सचेंज-ट्रेडेड मुद्रा डेरिवेटिव में, यदि अंतर्निहित विनिमय दर (Exchange rate) स्थिर रहती है लेकिन निहित अस्थिरता (Implied volatility) तुरंत समाप्त हो जाती है, तो ऑप्शन प्रीमियम का क्या होगा?", opts: ["कॉल (Call) और पुट (Put) दोनों ऑप्शंस के लिए ऑप्शन प्रीमियम काफी गिर जाता है क्योंकि वेगा (Vega) उनके मूल्य निर्धारण स्तर को कम कर देता है", "ऑप्शन प्रीमियम आक्रामक रूप से बढ़ जाता है क्योंकि थिटा (Theta) गतिशील रूप से समय क्षय लाभ को तेज करता है", "क्लियरिंग कॉरपोरेशन यूरोपीय से अमेरिकी संरचनाओं में एक स्वचालित पूर्वव्यापी संक्रमण लागू करता है", "संप्रभु परिसंपत्ति सूचकांक झटकों को अवशोषित करने के लिए मार्जिन लेआउट बेसलाइन पूर्ण शून्य मापदंडों तक गिर जाती है"] },
            correct: 0
        },
        {
            en: { q: "What does the advanced portfolio metrics parameter 'Convexity' measure inside professional fixed-income institutional analysis?", opts: ["The sensitivity of a bond's Duration relative to changes inside the underlying Yield to Maturity (YTM) parameters", "The exact chronological time required to recover initial principal outlays via compound coupon metrics", "The systematic volatility mapping corporate yields over sovereign debt indexes across trading platforms", "The structural error variance separating passive gilt funds from corporate debt investment indices"] },
            hi: { q: "पेशेवर फिक्स्ड-इनकम संस्थागत विश्लेषण के भीतर उन्नत पोर्टफोलियो मेट्रिक्स पैरामीटर 'कॉन्वेक्सिटी' (Convexity) क्या मापता है?", opts: ["अंतर्निहित मैच्योरिटी यील्ड (YTM) मापदंडों के भीतर बदलाव के सापेक्ष बॉन्ड के ड्यूरेशन (Duration) की संवेदनशीलता", "चक्रवृद्धि कूपन मेट्रिक्स के माध्यम से प्रारंभिक मूल परिव्यय को वसूल करने के लिए आवश्यक सटीक कालानुक्रमिक समय", "ट्रेडिंग प्लेटफॉर्म पर संप्रभु ऋण सूचकांकों पर कॉर्पोरेट यील्ड का मानचित्रण करने वाली व्यवस्थित अस्थिरता", "कॉर्पोरेट ऋण निवेश सूचकांकों से पैसिव गिल्ट फंड को अलग करने वाली संरचनात्मक त्रुटि विचरण"] },
            correct: 0
        },
        {
            en: { q: "According to SEBI REIT (Real Estate Investment Trusts) guidelines, what represents the strict minimum percentage of a REIT's assets that must be invested in completed and income-generating properties?", opts: ["80% of the total value of REIT assets", "50% of the total value of REIT assets", "65% of the total value of REIT assets", "90% of the total value of REIT assets"] },
            hi: { q: "सेबी आरईआईटी (Real Estate Investment Trusts) दिशानिर्देशों के अनुसार, आरईआईटी की परिसंपत्तियों का न्यूनतम कितना प्रतिशत पूर्ण और आय उत्पन्न करने वाली (Income-generating) संपत्तियों में निवेश किया जाना अनिवार्य है?", opts: ["आरईआईटी परिसंपत्तियों के कुल मूल्य का 80% (80% of the total value of REIT assets)", "आरईआईटी परिसंपत्तियों के कुल मूल्य का 50%", "आरईआईटी परिसंपत्तियों के कुल मूल्य का 65%", "आरईआईटी परिसंपत्तियों के कुल मूल्य का 90%"] },
            correct: 0
        },
        {
            en: { q: "An options trader constructs an options strategy by purchasing a USD-INR Call option. If the spot currency rate trades exactly equal to the contract strike price at expiration, what represents the final outcome?", opts: ["The option contract expires At-the-Money (ATM) and becomes worthless, limiting the trader's total loss to the initial premium paid", "The option automatically exercises at the clearing house server logs to lock in structural rollover charges", "The system shifts the underlying futures settlement into cross-currency physical gold bar layout metrics", "The advisor triggers a mandatory capital replacement swap through offshore sovereign banking mainframes"] },
            hi: { q: "एक ऑप्शंस ट्रेडर USD-INR कॉल ऑप्शन खरीदकर एक रणनीति बनाता है। यदि समाप्ति (Expiration) पर हाजिर मुद्रा दर अनुबंध के स्ट्राइक मूल्य के बिल्कुल बराबर ट्रेड करती है, तो अंतिम परिणाम क्या होगा?", opts: ["ऑप्शन अनुबंध एट-द-मनी (ATM) समाप्त हो जाएगा और बेकार हो जाएगा, जिससे ट्रेडर का कुल नुकसान प्रारंभिक भुगतान किए गए प्रीमियम तक सीमित रहेगा", "संरचनात्मक रोलओवर शुल्कों को लॉक करने के लिए क्लियरिंग हाउस सर्वर लॉग पर ऑप्शन स्वचालित रूप से निष्पादित होता है", "सिस्टम अंतर्निहित फ्यूचर्स निपटान को क्रॉस-करेंसी भौतिक सोने की छड़ लेआउट मेट्रिक्स में बदल देता है", "सलाहकार अपतटीय संप्रभु बैंकिंग मेनफ्रेम के माध्यम से एक अनिवार्य पूंजी प्रतिस्थापन स्वैप को ट्रिगर करता है"] },
            correct: 0
        },
        {
            en: { q: "Under the SEBI (Substantial Acquisition of Shares and Takeovers) Regulations, what strict disclosure threshold applies when an acquirer's holding crosses a baseline parameter?", opts: ["Disclosing to the listed company and stock exchanges upon acquiring 5% or more shares or voting rights inside the entity", "Crossing a rolling volume limit equivalent to 2% of the active sponsor's total asset registration sheet", "Reaching an absolute accounting net worth boundary evaluated via state corporate registers post quarterly audits", "An aggregate capital block representing 10% of the company's floating market capitalization layout"] },
            hi: { q: "सेबी (शेयरों का पर्याप्त अधिग्रहण और टेकओवर) नियमों के तहत, जब किसी अधिग्रहणकर्ता (Acquirer) की होल्डिंग एक आधारभूत पैरामीटर को पार करती है तो कौन सी सख्त प्रकटीकरण (Disclosure) सीमा लागू होती है?", opts: ["इकाई के भीतर 5% या अधिक शेयर या वोटिंग अधिकार प्राप्त करने पर सूचीबद्ध कंपनी और स्टॉक एक्सचेंजों को खुलासा करना", "सक्रिय प्रायोजक की कुल संपत्ति पंजीकरण शीट के 2% के बराबर रोलिंग वॉल्यूम सीमा को पार करना", "त्रैमासिक ऑडिट के बाद राज्य कॉर्पोरेट रजिस्टरों के माध्यम से मूल्यांकित एक पूर्ण लेखांकन नेट वर्थ सीमा तक पहुंचना", "कंपनी के फ्लोटिंग मार्केट कैपिटलाइजेशन लेआउट के 10% का प्रतिनिधित्व करने वाला एक कुल पूंजी ब्लॉक"] },
            correct: 0
        },
        {
            en: { q: "In commodity derivatives clearing frameworks inside India, what structural safeguard isolates clearing members from extreme price shocks over consecutive holidays?", opts: ["The collection of Initial Margin along with Extreme Loss Margins (ELM) enforced via SEBI-approved clearing entities", "The WDRA Central Legal Adjudication Cell Desk emergency credit window access", "The Financial Benchmarks India Pvt. Ltd. Corporate Registry Board clearing override ledger", "The Lead Broker Syndicate Sovereign Asset Management Counter dynamic buffer optimization parameters"] },
            hi: { q: "भारत के भीतर कमोडिटी डेरिवेटिव क्लियरिंग ढांचे में, कौन सा संरचनात्मक सुरक्षा उपाय क्लियरिंग सदस्यों को लगातार छुट्टियों के दौरान अत्यधिक मूल्य झटकों से अलग करता है?", opts: ["सेबी-अनुमोदित क्लियरिंग संस्थाओं के माध्यम से लागू इनिशियल मार्जिन (Initial Margin) के साथ एक्सट्रीम लॉस मार्जिन (ELM) का संग्रह", "डब्ल्यूडीआरए केंद्रीय कानूनी निर्णय सेल डेस्क आपातकालीन क्रेडिट विंडो एक्सेस", "फाइनेंशियल बेंचमार्क इंडिया प्राइवेट लिमिटेड कॉर्पोरेट रजिस्ट्री बोर्ड क्लियरिंग ओवरराइड लेजर", "लीड ब्रोकर सिंडिकेट संप्रभु संपत्ति प्रबंधन काउंटर गतिशील बफर अनुकूलन पैरामीटर"] },
            correct: 0
        },
        {
            en: { q: "What does the financial metric 'Treynor Ratio' quantify when evaluating a multi-asset fund manager's long-term performance profile?", opts: ["The portfolio's excess return generated per unit of systematic risk as measured by Beta parameter layers", "The absolute performance return divided by the total active unsystematic volatility variance tracking block", "The compound error configuration separating baseline target indices from passive equity products across horizons", "The administrative asset layout variance calculated post corporate infrastructure restructuring events"] },
            hi: { q: "एक मल्टी-एसेट फंड मैनेजर के दीर्घकालिक प्रदर्शन प्रोफाइल का मूल्यांकन करते समय वित्तीय मीट्रिक 'ट्रेयनॉर रेशियो' (Treynor Ratio) क्या मापता है?", opts: ["बीटा (Beta) पैरामीटर परतों द्वारा मापे गए व्यवस्थित जोखिम (Systematic Risk) की प्रति इकाई पर उत्पन्न पोर्टफोलियो का अतिरिक्त रिटर्न", "कुल सक्रिय व्यवस्थित अस्थिरता विचरण ट्रैकिंग ब्लॉक द्वारा विभाजित पूर्ण प्रदर्शन रिटर्न", "क्षितिज पर पैसिव इक्विटी उत्पादों से आधारभूत लक्षित सूचकांकों को अलग करने वाला चक्रवृद्धि त्रुटि विन्यास", "कॉर्पोरेट बुनियादी ढांचा पुनर्गठन घटनाओं के बाद गणना की गई प्रशासनिक परिसंपत्ति लेआउट विचरण"] },
            correct: 0
        },
        {
            en: { q: "Under IRDAI guidelines, what precise mechanism defines an insurance policyholder's right to cancel a new life insurance contract within a specific initial window?", opts: ["Free-Look Period parameter enforcing a 15-day or 30-day structural window for contract cancellation and premium refund", "Void Contract carrying absolute structural enforcement fines retroactively across centers", "Surrendered Asset Wrapper handled via central clearing house accounting desks dynamically", "Replaced Insurance Wrapper monitored under dynamic state infrastructure databases across horizons"] },
            hi: { q: "IRDAI दिशानिर्देशों के तहत, कौन सा सटीक तंत्र एक बीमा पॉलिसीधारक के एक निश्चित प्रारंभिक विंडो के भीतर एक नए जीवन बीमा अनुबंध को रद्द करने के अधिकार को परिभाषित करता है?", opts: ["फ्री-लुक पीरियड (Free-Look Period) पैरामीटर, जो अनुबंध रद्द करने और प्रीमियम रिफंड के लिए 15 या 30 दिनों की संरचनात्मक विंडो लागू करता है", "केंद्रों में पूर्वव्यापी रूप से पूर्ण संरचनात्मक प्रवर्तन जुर्माना ले जाने वाला शून्य अनुबंध", "केंद्रीय क्लियरिंग हाउस लेखांकन डेस्क के माध्यम से गतिशील रूप से संभाला गया सरेंडर एसेट रैपर", "क्षितिज पर गतिशील राज्य बुनियादी ढांचा डेटाबेस के तहत मॉनिटर किया गया प्रतिस्थापित बीमा रैपर"] },
            correct: 0
        },
        {
            en: { q: "What does the mathematical option risk parameter 'Color' (Gamma Decay over Time) isolate inside complex derivatives risk auditing?", opts: ["The rate of change of an option's Gamma relative to the continuous absolute passage of time over contract parameters", "The time decay acceleration rate remains perfectly linear across out-of-the-money brackets", "The structural baseline conversion flips underlying futures configurations into spot bullion deliveries", "The mathematical acceleration rate of Delta matches baseline index yields precisely during shifts"] },
            hi: { q: "जटिल डेरिवेटिव जोखिम ऑडिटिंग के भीतर गणितीय ऑप्शन जोखिम पैरामीटर 'कलर' (Color / समय के साथ गामा क्षय) क्या अलग करता है?", opts: ["अनुबंध मापदंडों पर निरंतर पूर्ण समय बीतने (Passage of time) के सापेक्ष किसी ऑप्शन के गामा (Gamma) में बदलाव की दर", "आउट-ऑफ-द-मनी ब्रैकेट में समय क्षय त्वरण दर पूरी तरह से रैखिक रहती है", "संरचनात्मक बेसलाइन रूपांतरण अंतर्निहित फ्यूचर्स विन्यासों को हाजिर बुलियन डिलीवरी में बदल देता है", "बदलाव के दौरान डेल्टा की गणितीय त्वरण दर बेसलाइन इंडेक्स यील्ड से सटीक रूप से मेल खाती है"] },
            correct: 0
        },
        {
            en: { q: "An investor executes a 'Short Call Spread' options trading strategy layout. What represents the maximum possible financial profit profile for this net position?", opts: ["The net premium credit received initially at the time of constructing the options strategy layout", "The infinite capital upside hazard triggered if the asset price breaks past absolute zero boundaries", "The complete initial margin volume locked under central clearing corporation maintenance matrix parameters", "The physical differential separating the higher strike parameter from the lower execution baseline"] },
            hi: { q: "एक निवेशक 'शॉर्ट कॉल स्प्रेड' (Short Call Spread) ऑप्शंस ट्रेडिंग रणनीति लेआउट निष्पादित करता है। इस नेट पोजीशन के लिए अधिकतम संभावित वित्तीय लाभ (Maximum Financial Profit) प्रोफाइल क्या दर्शाता है?", opts: ["ऑप्शंस रणनीति लेआउट के निर्माण के समय प्रारंभ में प्राप्त शुद्ध प्रीमियम क्रेडिट (Net premium credit)", "यदि परिसंपत्ति की कीमत पूर्ण शून्य सीमाओं को पार कर जाती है तो ट्रिगर होने वाला एक असीमित पूंजी वृद्धि का जोखिम", "केंद्रीय क्लियरिंग कॉर्पोरेशन रखरखाव मैट्रिक्स मापदंडों के तहत लॉक की गई पूर्ण प्रारंभिक मार्जिन मात्रा", "उच्च स्ट्राइक पैरामीटर को निम्न निष्पादन बेसलाइन से अलग करने वाला भौतिक अंतर"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI Mutual Fund regulations, what represents the mandatory allocation parameter for an Open-Ended 'Equity Savings Fund' scheme layout?", opts: ["A minimum investment of 65% in equity and equity-related instruments, and a minimum of 10% in debt securities", "A minimum allocation of 80% in high yield debt commercial papers without any equity components", "A static allocation layout deploying 100% funds into international sector indices exclusively across borders", "A floating layout template adjusted dynamically via centralized clearing corporation computing nodes"] },
            hi: { q: "सेबी म्यूचुअल फंड नियमों के अनुसार, एक ओपन-एंडेड 'इक्विटी सेविंग्स फंड' (Equity Savings Fund) योजना लेआउट के लिए अनिवार्य आवंटन पैरामीटर क्या है?", opts: ["इक्विटी और इक्विटी से संबंधित उपकरणों में न्यूनतम 65% निवेश, आणि ऋण (Debt) प्रतिभूतियों में न्यूनतम 10% निवेश", "बिना किसी इक्विटी घटक के उच्च उपज वाले ऋण कमर्शियल पेपर्स में 80% का न्यूनतम आवंटन", "सीमा पार विशेष रूप से अंतरराष्ट्रीय क्षेत्र सूचकांकों में 100% धन लगाने वाला एक स्थिर आवंटन लेआउट", "केंद्रीय क्लियरिंग कॉर्पोरेशन कंप्यूटिंग नोड्स के माध्यम से गतिशील रूप से समायोजित एक फ्लोटिंग लेआउट टेम्पलेट"] },
            correct: 0
        },
        {
            en: { q: "In currency derivatives trading architectures, what precise mechanism handles the automated mathematical calibration of the 'Cost of Carry' index?", opts: ["The nominal interest rate differential separating the host currency from the target cross-currency asset over horizons", "The historical tracking error variance calculated post international human resource labor adjustments across centers", "The structural tax tariff fine structure checked across offshore transaction clearing databases", "The administrative balance sheet parameters evaluated during automated database re-verification login loops"] },
            hi: { q: "मुद्रा डेरिवेटिव ट्रेडिंग आर्किटेक्चर में, 'कॉस्ट ऑफ कैरी' (Cost of Carry) सूचकांक के स्वचालित गणितीय अंशांकन को कौन सा सटीक तंत्र संभालता है?", opts: ["क्षितिज पर लक्षित क्रॉस-करेंसी परिसंपत्ति से मेजबान मुद्रा को अलग करने वाला नाममात्र ब्याज दर अंतर (Interest rate differential)", "केंद्रों में अंतरराष्ट्रीय मानव संसाधन श्रम समायोजन के बाद गणना की गई ऐतिहासिक ट्रैकिंग त्रुटि विचरण", "अपतटीय लेनदेन समाशोधन डेटाबेस में जांची गई संरचनात्मक कर टैरिफ जुर्माना संरचना", "स्वचालित डेटाबेस पुनर्सत्यापन लॉगिन लूप के दौरान मूल्यांकित प्रशासनिक बैलेंस शीट पैरामीटर"] },
            correct: 0
        },
        {
            en: { q: "What does the financial optimization metric 'Sharpe Ratio' evaluate inside institutional modern portfolio risk asset tracking frameworks?", opts: ["The active excess portfolio return generated per unit of total risk as quantified by standard deviation metrics", "The total asset return produced relative to the absolute systematic portfolio beta parameter layers", "The tracking discrepancy variance separating active growth fund portfolios from indices across networks", "The accounting net capital volume adjusted post corporate infrastructure asset liquidation actions"] },
            hi: { q: "संस्थागत आधुनिक पोर्टफोलियो जोखिम परिसंपत्ति ट्रैकिंग ढांचे के भीतर वित्तीय अनुकूलन मीट्रिक 'शार्प रेशियो' (Sharpe Ratio) किसका मूल्यांकन करता है?", opts: ["मानक विचलन (Standard Deviation) मेट्रिक्स द्वारा परिमाणित कुल जोखिम की प्रति इकाई पर उत्पन्न सक्रिय अतिरिक्त पोर्टफोलियो रिटर्न", "अपूर्ण व्यवस्थित पोर्टफोलियो बीटा पैरामीटर परतों के सापेक्ष उत्पादित कुल परिसंपत्ति रिटर्न", "नेटवर्क पर इंडेक्स से सक्रिय ग्रोथ फंड पोर्टफोलियो को अलग करने वाला ट्रैकिंग विसंगति विचरण", "कॉर्पोरेट बुनियादी ढांचा परिसंपत्ति परिसमापन कार्यों के बाद समायोजित लेखांकन शुद्ध पूंजी मात्रा"] },
            correct: 0
        },
        {
            en: { q: "Under the SEBI (Listing Obligations and Disclosure Requirements) Regulations, what strict timeframe applies to the prior disclosure of a board meeting called to evaluate corporate dividend parameters?", opts: ["At least two working days in advance, excluding the date of the intimation and the date of the meeting", "At least five working days in advance, including the date of the intimation and the date of the meeting", "Within 24 hours from the finalization of the internal leadership board meeting draft parameters", "A rolling weekly cycle processed via central depository automated network terminals across locations"] },
            hi: { q: "सेबी (सूचीबद्धता दायित्व और प्रकटीकरण आवश्यकताएं) नियमों के तहत, कॉर्पोरेट लाभांश (Dividend) मापदंडों का मूल्यांकन करने के लिए बुलाई गई बोर्ड बैठक के पूर्व प्रकटीकरण पर कौन सी सख्त समय सीमा लागू होती है?", opts: ["सूचना की तारीख और बैठक की तारीख को छोड़कर, कम से कम दो कार्य दिवस पहले (At least two working days in advance)", "सूचना की तारीख और बैठक की तारीख को शामिल करते हुए, कम से कम पांच कार्य दिवस पहले", "आंतरिक नेतृत्व बोर्ड बैठक मसौदा मापदंडों को अंतिम रूप देने के २४ घंटों के भीतर", "स्थानों पर केंद्रीय डिपॉजिटरी स्वचालित नेटवर्क टर्मिनलों के माध्यम से संसाधित एक रोलिंग साप्ताहिक चक्र"] },
            correct: 0
        },
        {
            en: { q: "In certified physical commodity structures, what precise regulatory entity acts as the statutory apex controller overseeing warehouse accreditation registry nodes inside India?", opts: ["Warehouse Development and Regulatory Authority (WDRA)", "SEBI-Recognized Commodity Clearing Management Desk Bureau", "The Financial Benchmarks India Pvt. Ltd. Corporate Registry Board", "The National Agricultural Mandis Central Database Verification Wing"] },
            hi: { q: "प्रमाणित भौतिक कमोडिटी संरचनाओं के भीतर, कौन सी सटीक नियामक संस्था भारत के अंदर गोदाम मान्यता रजिस्ट्री नोड्स की देखरेख करने वाले वैधानिक शीर्ष नियंत्रक के रूप में कार्य करती है?", opts: ["वेयरहाउस डेवलपमेंट एंड रेगुलेटरी अथॉरिटी (WDRA)", "सेबी-मान्यता प्राप्त कमोडिटी क्लियरिंग मैनेजमेंट डेस्क ब्यूरो", "फाइनेंशियल बेंचमार्क इंडिया प्राइवेट लिमिटेड कॉर्पोरेट रजिस्ट्री बोर्ड", "राष्ट्रीय कृषि मंडी केंद्रीय डेटाबेस सत्यापन विंग"] },
            correct: 0
        },
        {
            en: { q: "What does the option Greek 'Ultima' quantify inside quantitative multi-asset derivatives risk analytics layers?", opts: ["The sensitivity of the option's Volga parameter relative to shifts inside underlying implied volatility metrics", "The acceleration velocity of time value erosion tracking over contract calendar periods across systems", "The historical tracking index correlation adjustments handled via central bank repository updates", "The dynamic error variance checked across physical warehouse metals cargo distribution logs"] },
            hi: { q: "मात्रात्मक मल्टी-एसेट डेरिवेटिव जोखिम एनालिटिक्स परतों के भीतर ऑप्शन ग्रीक 'अल्टीमा' (Ultima) क्या मापता है?", opts: ["अंतर्निहित निहित अस्थिरता मेट्रिक्स के भीतर बदलाव के सापेक्ष ऑप्शन के वोल्गा (Volga) पैरामीटर की संवेदनशीलता", "प्रणालियों में अनुबंध कैलेंडर अवधि में समय मूल्य क्षरण ट्रैकिंग की त्वरण गति", "केंद्रीय बैंक रिपोजिटरी अपडेट के माध्यम से संभाले जाने वाले ऐतिहासिक ट्रैकिंग सूचकांक सहसंबंध समायोजन", "भौतिक गोदाम धातु कार्गो वितरण लॉग में जांची गई गतिशील त्रुटि विचरण"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI Mutual Fund rules, what strict mandate governs the operational separation of core fund roles inside an Asset Management Company (AMC) setup?", opts: ["The AMC must ensure absolute functional segregation between fund management team layers and operations/dealing room staff", "The corporate sponsor must commit a flat cash injection worth ₹100 Crore into international registries annually", "The database automatically clears all administrative tracking tax ledger balances post annual reviews across centers", "The compliance infrastructure enables fund officers to route personal stock allocations through corporate broker accounts"] },
            hi: { q: "सेबी म्यूचुअल फंड नियमों के अनुसार, एसेट एनेजमेंट कंपनी (AMC) सेटअप के भीतर मुख्य फंड भूमिकाओं के परिचालन अलगाव को कौन सा सख्त शासनादेश नियंत्रित करता है?", opts: ["एएमसी को फंड प्रबंधन टीम परतों (Fund management) और ऑपरेशन्स/डीलिंग रूम स्टाफ के बीच पूर्ण कार्यात्मक अलगाव सुनिश्चित करना होगा", "कॉर्पोरेट प्रायोजक को सालाना अंतरराष्ट्रीय रजिस्ट्रियों में ₹100 करोड़ का फ्लैट नकद निवेश करना होगा", "डेटाबेस वार्षिक समीक्षा के बाद सभी प्रशासनिक ट्रैकिंग टैक्स लेजर बैलेंस को स्वचालित रूप से साफ कर देता है", "अनुपालन बुनियादी ढांचा फंड अधिकारियों को कॉर्पोरेट ब्रोकर खातों के माध्यम से व्यक्तिगत स्टॉक आवंटन को रूट करने में सक्षम बनाता है"] },
            correct: 0
        },
        {
            en: { q: "Inside the money market infrastructure inside India, what specific instrument characterizes a short-term unsecured debt paper issued by corporate entities via discounting formats?", opts: ["Commercial Paper (CP) with a maturity profile ranging from a minimum of 7 days up to a maximum of 1 year", "Sovereign Debt Cleared Registry Certificate carrying zero structural counterparty hazard profiles", "Centralized Interbank Public Treasury Board bill with dynamic rollover structural maturities", "Automated Liquidity Adjustment Window Certificate executed via the central repository dashboard"] },
            hi: { q: "भारत के भीतर मुद्रा बाजार के बुनियादी ढांचे के अंदर, कौन सा विशिष्ट उपकरण कॉर्पोरेट संस्थाओं द्वारा डिस्काउंटिंग प्रारूपों के माध्यम से जारी किए जाने वाले अल्पकालिक असुरक्षित ऋण पेपर की विशेषता है?", opts: ["कमर्शियल पेपर (CP), जिसकी परिपक्वता प्रोफाइल न्यूनतम 7 दिनों से लेकर अधिकतम 1 वर्ष तक होती है", "शून्य संरचनात्मक प्रतिपक्ष जोखिम प्रोफाइल ले जाने वाला संप्रभु ऋण शोधित रजिस्ट्री प्रमाणपत्र", "गतिशील रोलओवर संरचनात्मक परिपक्वता वाला केन्द्रीकृत अंतरबैंक सार्वजनिक ट्रेजरी बोर्ड बिल", "केंद्रीय रिपोजिटरी डैशबोर्ड के माध्यम से निष्पादित स्वचालित तरलता समायोजन विंडो प्रमाणपत्र"] },
            correct: 0
        },
        {
            en: { q: "What options strategy layout is established when an investor constructs a 'Long Iron Condor Spread' using options contracts?", opts: ["Purchasing an OTM Put, selling a higher strike OTM Put, selling an OTM Call, and purchasing a higher strike OTM Call with matching expiry", "Buying two consecutive monthly rollover deep out-of-the-money contract layers across currency nodes during trading", "Combining a physical commodity delivery order with certified warehouse structural repository certificates dynamically", "Writing sequential calendar rollover call options across mismatched expiration configurations inside clearing systems"] },
            hi: { q: "जब एक निवेशक ऑप्शंस अनुबंधों का उपयोग करके 'लॉन्ग आयरन कोंडोर स्प्रेड' (Long Iron Condor Spread) रणनीति बनाता है, तो कौन सा ऑप्शंस रणनीति लेआउट स्थापित होता है?", opts: ["एक ओटीएम पुट खरीदना, एक उच्च स्ट्राइक ओटीएम पुट बेचना, एक ओटीएम कॉल बेचना, आणि मैचिंग एक्सपायरी के साथ एक उच्च स्ट्राइक ओटीएम कॉल खरीदना", "ट्रेडिंग के दौरान मुद्रा नोड्स में लगातार दो मासिक रोलओवर गहरी आउट-ऑफ-द-मनी अनुबंध परतें खरीदना", "प्रमाणित गोदाम संरचनात्मक रिपोजिटरी प्रमाणपत्रों के साथ एक भौतिक कमोडिटी वितरण आदेश को गतिशील रूप से जोड़ना", "क्लियरिंग सिस्टम के भीतर बेमेल समाप्ति विन्यासों में अनुक्रमिक कैलेंडर रोलओवर कॉल ऑप्शंस लिखना"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI Investment Advisers Regulations, what is the mandatory corporate architecture requirement for an entity operating as a non-individual Investment Adviser?", opts: ["Appointing a dedicated compliance officer and maintaining separate infrastructure blocks for advisory and execution services", "A registration clearance code executed via international maritime freight forwarding syndicates across networks", "An active accounting database record reflecting zero personal infrastructure debt parameters across repositories", "A corporate marketing license clearance issued through regional agricultural mandis registry cells across states"] },
            hi: { q: "सेबी निवेश सलाहकार नियमों के तहत, एक गैर-व्यक्तिगत (Non-individual) निवेश सलाहकार के रूप में काम करने वाली इकाई के लिए अनिवार्य कॉर्पोरेट आर्किटेक्चर आवश्यकता क्या है?", opts: ["एक समर्पित अनुपालन अधिकारी नियुक्त करना आणि सलाहकार व निष्पादन सेवाओं के लिए अलग-अलग बुनियादी ढांचा ब्लॉक बनाए रखना", "नेटवर्क पर अंतरराष्ट्रीय समुद्री माल अग्रेषण सिंडिकेट के माध्यम से निष्पादित एक पंजीकरण निकासी कोड", "रिपोजिटरी में शून्य व्यक्तिगत बुनियादी ढांचा ऋण मापदंडों को दर्शाने वाला एक सक्रिय लेखांकन डेटाबेस रिकॉर्ड", "राज्यों में क्षेत्रीय कृषि मंडी रजिस्ट्री सेल के माध्यम से जारी एक कॉर्पोरेट विपणन लाइसेंस निकासी"] },
            correct: 0
        },
        {
            en: { q: "Inside fundamental balance sheet auditing, what exact metric evaluates a listed entity's short-term liquidity posture by isolating inventory assets?", opts: ["Quick Ratio (or Acid-Test Ratio) parameter mapping highly liquid assets over total current liabilities", "The physical equipment turnover volume checked against asset depreciation logged across warehouses", "The compound dividend allocation scale tracked dynamically across multiple operational calendar cycles", "The structural processing tax tariff evaluated across state internal revenue management divisions"] },
            hi: { q: "मौलिक बैलेंस शीट ऑडिटिंग के भीतर, कौन सा सटीक मीट्रिक इन्वेंट्री परिसंपत्तियों (Inventory) को अलग करके एक सूचीबद्ध इकाई की अल्पकालिक तरलता स्थिति का मूल्यांकन करता है?", opts: ["क्विक रेशियो (या एसिड-टेस्ट रेशियो) पैरामीटर, जो कुल वर्तमान देनदारियों पर अत्यधिक तरल संपत्तियों का मानचित्रण करता है", "गोदामों में लॉग इन परिसंपत्ति मूल्यह्रास के खिलाफ जांचा गया भौतिक उपकरण टर्नओवर वॉल्यूम", "कई परिचालन कैलेंडर चक्रों में गतिशील रूप से ट्रैक किया गया चक्रवृद्धि लाभांश आवंटन पैमाना", "राज्य आंतरिक राजस्व प्रबंधन डिवीजनों में मूल्यांकित संरचनात्मक प्रसंस्करण कर टैरिफ"] },
            correct: 0
        },
        {
            en: { q: "In exchange currency derivatives systems inside India, what represents the absolute contract settlement day cycle parameter for trade completions?", opts: ["T+1 rolling settlement cycle parameter for daily transaction and mark-to-market balances processing", "T+2 structural settlement timeline tracking standard interbank cash physical flow constraints across regions", "T+0 same day instant clearing system executed retroactively through international maritime channels", "T+5 extended administrative clearing block handled via interstate accounting desks exclusively"] },
            hi: { q: "भारत में एक्सचेंज मुद्रा डेरिवेटिव प्रणालियों के भीतर, व्यापार पूरा होने के लिए पूर्ण अनुबंध निपटान दिवस चक्र (Settlement cycle) पैरामीटर क्या दर्शाता है?", opts: ["दैनिक लेनदेन और मार्क-टू-मार्केट बैलेंस प्रोसेसिंग के लिए T+1 रोलिंग सेटलमेंट चक्र पैरामीटर", "क्षेत्रों में मानक अंतरबैंक नकद भौतिक प्रवाह बाधाओं को ट्रैक करने वाली T+2 संरचनात्मक निपटान समयरेखा", "अंतरराष्ट्रीय समुद्री चैनलों के माध्यम से पूर्वव्यापी रूप से निष्पादित T+0 उसी दिन तत्काल समाशोधन प्रणाली", "विशेष रूप से अंतरराज्यीय लेखांकन डेस्क के माध्यम से संभाला गया T+5 विस्तारित प्रशासनिक समाशोधन ब्लॉक"] },
            correct: 0
        },
        {
            en: { q: "What precise structural asset parameter defines 'Reinvestment Risk' inside institutional fixed-income portfolio management operations?", opts: ["The hazard that future coupon cash flows must be reinvested at a lower interest rate parameter than the initial asset yield", "The structural operational failure tracking network mainframe login authentication delay parameters across centers", "The absolute legal penalty ledger fine structure applied post compliance monitoring omission gaps inside database systems", "The natural material decay profile evaluated across accredited cold storage commodity distribution corridors"] },
            hi: { q: "संस्थागत फिक्स्ड-इनकम पोर्टफोलियो प्रबंधन संचालन के भीतर 'पुनर्निवेश जोखिम' (Reinvestment Risk) को कौन सा सटीक संरचनात्मक परिसंपत्ति पैरामीटर परिभाषित करता है?", opts: ["यह जोखिम कि भविष्य के कूपन नकद प्रवाह (Coupon cash flows) को प्रारंभिक परिसंपत्ति प्रतिफल की तुलना में कम ब्याज दर पैरामीटर पर पुनर्निवेशित किया जाना चाहिए", "केंद्रों में नेटवर्क मेनफ्रेम लॉगिन प्रमाणीकरण देरी मापदंडों को ट्रैक करने वाली संरचनात्मक परिचालन विफलता", "डेटाबेस प्रणालियों के भीतर अनुपालन निगरानी चूक अंतराल के बाद लागू पूर्ण कानूनी दंड बहीखाता जुर्माना संरचना", "मान्यता प्राप्त कोल्ड स्टोरेज कमोडिटी वितरण कॉरिडोर में मूल्यांकित प्राकृतिक सामग्री क्षय प्रोफाइल"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI Mutual Fund regulations, what represents the strict maximum 'Total Expense Ratio' (TER) permitted inside a standard open-ended equity scheme layout?", opts: ["A maximum of 2.25% under a sliding scale configuration based on the scheme's Assets Under Management (AUM) tiers", "A flat 3.00% across all available investment horizons without any size asset limitations inside centers", "An absolute volume constraint worth 1.50% checked exclusively during annual leadership audit setups", "A floating compliance matrix adjusted dynamically post board of trustee annual validation cycles across networks"] },
            hi: { q: "सेबी म्यूचुअल फंड नियमों के अनुसार, एक मानक ओपन-एंडेड इक्विटी योजना लेआउट के भीतर अनुमत सख्त अधिकतम 'टोटल एक्सपेंस रेशियो' (TER) क्या दर्शाता है?", opts: ["योजना के एसेट्स अंडर मैनेजमेंट (AUM) स्तरों के आधार पर एक स्लाइडिंग स्केल कॉन्फ़िगरेशन के तहत अधिकतम 2.25%", "केंद्रों के भीतर बिना किसी आकार परिसंपत्ति सीमाओं के सभी उपलब्ध निवेश क्षितिज पर फ्लैट 3.00%", "वार्षिक नेतृत्व ऑडिट सेटअप के दौरान विशेष रूप से जांचा गया 1.50% का एक पूर्ण मात्रा प्रतिबंध", "नेटवर्क पर ट्रस्टी वार्षिक सत्यापन चक्र के पोस्ट बोर्ड के बाद गतिशील रूप से समायोजित एक फ्लोटिंग अनुपालन मैट्रिक्स"] },
            correct: 0
        },
        {
            en: { q: "What does the advanced options parameter 'Dual Vanna' isolate inside institutional derivatives pricing structures?", opts: ["The sensitivity of the option's Vanna relative to a continuous shift inside underlying implied volatility layers", "The time decay factor affecting the intrinsic value parameter across consecutive calendar updates across horizons", "The historical correlation mapping index performance over cross-border sovereign treasury asset blocks across networks", "The variance separating direct distribution mechanisms from field distributor marketing channels across states"] },
            hi: { q: "संस्थागत डेरिवेटिव मूल्य निर्धारण संरचनाओं के भीतर उन्नत ऑप्शंस पैरामीटर 'डुअल वान्ना' (Dual Vanna) क्या अलग करता है?", opts: ["अंतर्निहित निहित अस्थिरता परतों (Implied volatility layers) के भीतर एक निरंतर बदलाव के सापेक्ष ऑप्शन के वान्ना (Vanna) की संवेदनशीलता", "क्षितिज पर लगातार कैलेंडर अपडेट में आंतरिक मूल्य पैरामीटर को प्रभावित करने वाला समय क्षय कारक", "नेटवर्क पर सीमा पार संप्रभु ट्रेजरी परिसंपत्ति ब्लॉकों पर इंडेक्स प्रदर्शन का ऐतिहासिक सहसंबंध मानचित्रण", "राज्यों में प्रत्यक्ष वितरण तंत्र को फील्ड वितरक विपणन चैनलों से अलग करने वाला विचरण"] },
            correct: 0
        },
        {
            en: { q: "Inside the sovereign money market frameworks inside India, what exact role is assigned to the 'Clearing Corporation of India Limited' (CCIL)?", opts: ["Acting as a central counterparty to guarantee clearing and physical or cash settlement of G-Secs, money market, and forex trades", "The Reserve Bank of India Foreign Exchange Treasury Management internal accounting counter module", "The Ministry of Commerce International Settlement Cell Desk administrative validation framework", "The Association of Mutual Funds in India Operations Bureau Counter structural reconciliation platform"] },
            hi: { q: "भारत के भीतर संप्रभु मुद्रा बाजार ढांचे के अंदर, 'क्लियरिंग कॉरपोरेशन ऑफ इंडिया लिमिटेड' (CCIL) को कौन सी सटीक भूमिका सौंपी जाती है?", opts: ["जी-सेक (G-Secs), मनी मार्केट और फॉरेक्स ट्रेडों की क्लियरिंग और नकद निपटान की गारंटी के लिए एक केंद्रीय प्रतिपक्ष (Central Counterparty) के रूप में कार्य करना", "भारतीय रिजर्व बैंक विदेशी मुद्रा ट्रेजरी प्रबंधन आंतरिक लेखांकन काउंटर मॉड्यूल", "वाणिज्य मंत्रालय अंतर्राष्ट्रीय निपटान सेल डेस्क प्रशासनिक सत्यापन ढांचा", "एसोसिएशन ऑफ म्यूचुअल फंड्स इन इंडिया ऑपरेशन्स ब्यूरो काउंटर संरचनात्मक समाधान प्लेटफॉर्म"] },
            correct: 0
        },
        {
            en: { q: "What advanced option strategy layout is constructed if an investor executes a 'Short Iron Condor' combination setup?", opts: ["Selling an OTM Put, purchasing a lower strike OTM Put, selling an OTM Call, and purchasing a higher strike OTM Call with matching expiry", "Buying an At-the-Money put option alongside writing consecutive calendar structures across volatile spaces", "Combining a physical gold spot purchase order along with cross-currency futures tracking parameters dynamically", "Writing sequential calendar rollover call options across mismatched expiration series parameters inside centers"] },
            hi: { q: "यदि कोई निवेशक 'शॉर्ट आयरन कोंडोर' (Short Iron Condor) संयोजन सेटअप निष्पादित करता है, तो कौन सा उन्नत ऑप्शंस रणनीति लेआउट बनता है?", opts: ["एक ओटीएम पुट बेचना, एक निचला स्ट्राइक ओटीएम पुट खरीदना, एक ओटीएम कॉल बेचना, आणि मैचिंग एक्सपायरी के साथ एक उच्च स्ट्राइक ओटीएम कॉल खरीदना", "अस्थिर क्षेत्रों में लगातार कैलेंडर संरचनाएं लिखने के साथ-साथ एक एट-द-मनी पुट ऑप्शन खरीदना", "गतिशील रूप से क्रॉस-करेंसी वायदा ट्रैकिंग मापदंडों के साथ एक भौतिक सोने की खरीद के आदेश को जोड़ना", "केंद्रों के भीतर असंगत समाप्ति श्रृंखला मापदंडों में अनुक्रमिक कैलेंडर रोलओवर कॉल ऑप्शंस लिखना"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI guidelines, what precise mandatory function belongs to the 'Registrar and Transfer Agent' (RTA) operating inside mutual fund infrastructures?", opts: ["Maintaining institutional records of investor data, handling application processing, and updating unit balancing ledgers", "Deploying capital assets into small-cap technological technological startup venture structures globally across centers", "To clear historical administrative processing tax ledger balances managed across sovereign mainframes post audits", "To boost the operational marketing performance baseline of listed corporate sponsors across states dynamically"] },
            hi: { q: "सेबी के दिशानिर्देशों के तहत, म्यूचुअल फंड बुनियादी ढांचे के भीतर काम करने वाले 'रजिस्ट्रार एंड ट्रांसफर एजेंट' (RTA) का सटीक अनिवार्य कार्य क्या है?", opts: ["निवेशक डेटा का संस्थागत रिकॉर्ड बनाए रखना, एप्लिकेशन प्रोसेसिंग को संभालना आणि यूनिट बैलेंसिंग लेजर को अपडेट करना", "केंद्रों में वैश्विक स्तर पर स्मॉल-कैप तकनीकी स्टार्टअप वेंचर संरचनाओं में पूंजीगत संपत्ति लगाना", "ऑडिट के बाद संप्रभु मेनफ्रेम में प्रबंधित ऐतिहासिक प्रशासनिक प्रसंस्करण कर बहीखाता शेष को साफ करना", "राज्यों में सूचीबद्ध कॉर्पोरेट प्रायोजकों के परिचालन विपणन प्रदर्शन आधार रेखा को गतिशील रूप से बढ़ावा देना"] },
            correct: 0
        },
        {
            en: { q: "Inside fundamental corporate research models, what does the valuation indicator 'EV-to-EBITDA' evaluate during cross-sectional analysis?", opts: ["The total enterprise value of a listed entity relative to its operational cash profitability layer before depreciation and taxes", "The relationship separating baseline asset premiums from administrative processing tax structures across sectors", "The structural error variance configuration tracking network mainframe re-verification delay codes inside mainframes", "The dividend allocation percentage distributed to institutional corporate sponsors divided by asset growth indices across centers"] },
            hi: { q: "मौलिक कॉर्पोरेट अनुसंधान मॉडल के भीतर, क्रॉस-अनुभागीय विश्लेषण के दौरान मूल्यांकन संकेतक 'EV-to-EBITDA' किसका मूल्यांकन करता है?", opts: ["मूल्यह्रास और करों से पहले सूचीबद्ध इकाई के परिचालन नकद लाभप्रदता स्तर (Operational cash profitability) के सापेक्ष उसका कुल एंटरप्राइज मूल्य", "क्षेत्रों में कॉर्पोरेट परिसंपत्ति प्रीमियम को प्रशासनिक प्रसंस्करण कर संरचनाओं से अलग करने वाला संबंध", "मेनफ्रेम के भीतर नेटवर्क मेनफ्रेम पुनर्सत्यापन देरी कोड को ट्रैक करने वाला संरचनात्मक त्रुटि विचरण विन्यास", "केंद्रों में परिसंपत्ति वृद्धि सूचकांकों द्वारा विभाजित संस्थागत कॉर्पोरेट प्रायोजकों को वितरित लाभांश आवंटन प्रतिशत"] },
            correct: 0
        },
        {
            en: { q: "In the physical commodity logistics framework inside India, what structural protocol handles the digital conversion of repository asset items?", opts: ["The electronic creation of warehouse assets managed via WDRA-registered repositories like NERL or CCRL", "The financial clearing desk officer managing database re-verification login interfaces cross-border across platforms", "The marketing agent appointed to handle cross-border regional agricultural mandis networks across states", "The corporate trustee managing administrative infrastructure layout allocation splits annually post auditing reviews"] },
            hi: { q: "भारत के भीतर भौतिक कमोडिटी लॉजिस्टिक्स ढांचे में, कौन सा संरचनात्मक प्रोटोकॉल रिपोजिटरी परिसंपत्ति वस्तुओं के डिजिटल रूपांतरण को संभालता है?", opts: ["एनईआरएल (NERL) या सीसीआरएल (CCRL) जैसी डब्ल्यूडीआरए-पंजीकृत रिपोजिटरी के माध्यम से प्रबंधित गोदाम परिसंपत्तियों का इलेक्ट्रॉनिक निर्माण", "प्लेटफॉर्म पर सीमा पार डेटाबेस पुनर्सत्यापन लॉगिन इंटरफेस का प्रबंधन करने वाला वित्तीय क्लियरिंग डेस्क अधिकारी", "राज्यों में सीमा पार क्षेत्रीय कृषि मंडी नेटवर्क को संभालने के लिए नियुक्त विपणन एजेंट", "ऑडिटिंग समीक्षाओं के बाद सालाना प्रशासनिक बुनियादी ढांचा लेआउट आवंटन विभाजन का प्रबंधन करने वाला कॉर्पोरेट ट्रस्टी"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI Mutual Fund guidelines, what strict parameter defines the portfolio mandate for a 'Focused Fund' asset layout category?", opts: ["The scheme must restrict its core asset portfolio configuration to a maximum of 30 equity shares across asset layers", "A dynamic structural layout deploying 100% funds into international sector indices exclusively across borders with exit options", "An index setup tracking the top 50 sovereign treasury bonds registered under the regional database cells with open execution", "A product focused 80% on short-term high yield commercial paper issues backed by sponsors without limits inside networks"] },
            hi: { q: "सेबी म्यूचुअल फंड दिशानिर्देशों के तहत, कौन सा सख्त पैरामीटर एक 'फोकस्ड फंड' (Focused Fund) परिसंपत्ति लेआउट श्रेणी के लिए पोर्टफोलियो जनादेश को परिभाषित करता है?", opts: ["योजना को अपनी मुख्य परिसंपत्ति पोर्टफोलियो कॉन्फ़िगरेशन को परिसंपत्ति परतों में अधिकतम 30 इक्विटी शेयरों (Maximum 30 equity shares) तक सीमित करना होगा", "निकास विकल्पों के साथ सीमा पार विशेष रूप से अंतरराष्ट्रीय क्षेत्र सूचकांकों में 100% धन लगाने वाला एक गतिशील संरचनात्मक लेआउट", "खुले निष्पादन के साथ क्षेत्रीय डेटाबेस सेल के तहत पंजीकृत शीर्ष 50 संप्रभु ट्रेजरी बांडों को ट्रैक करने वाला एक इंडेक्स सेटअप", "नेटवर्क के भीतर बिना किसी सीमा के प्रायोजकों द्वारा समर्थित अल्पकालिक उच्च उपज कमर्शियल पेपर मुद्दों पर 80% केंद्रित उत्पाद"] },
            correct: 0
        },
        {
            en: { q: "What does the option Greek 'Dual Gamma' isolate inside multi-asset cross-currency exotic option pricing frameworks?", opts: ["The cross-sensitivity of the option's Delta relative to a dual mathematical shift inside contract strike and asset price parameters", "The breakdown speed of the Theta component tracked over contract expiration horizons across operational nodes inside networks", "The calculation variance separating sovereign repo metrics across centralized treasury desks daily post processing adjustments", "The grading accuracy index tracking physical warehouse metals delivery logs across centers during tracking exercises"] },
            hi: { q: "मल्टी-एसेट क्रॉस-करेंसी एक्सोटिक ऑप्शन मूल्य निर्धारण ढांचे के भीतर ऑप्शन ग्रीक 'डुअल गामा' (Dual Gamma) क्या अलग करता है?", opts: ["अनुबंध स्ट्राइक और परिसंपत्ति मूल्य मापदंडों के भीतर एक दोहरे गणितीय बदलाव के सापेक्ष ऑप्शन के डेल्टा (Delta) की क्रॉस-संवेदनशीलता", "नेटवर्क के भीतर परिचालन नोड्स में अनुबंध समाप्ति क्षितिज पर ट्रैक किए गए थिटा (Theta) घटक के घटने की गति", "प्रसंस्करण समायोजन के बाद दैनिक आधार पर केंद्रीकृत ट्रेजरी डेस्क पर संप्रभु रेपो मेट्रिक्स को अलग करने वाला गणना विचरण", "ट्रैकिंग अभ्यासों के दौरान केंद्रों में भौतिक गोदाम धातुओं के वितरण लॉग को ट्रैक करने वाला ग्रेडिंग सटीकता सूचकांक"] },
            correct: 0
        },
        {
            en: { q: "Inside general insurance contract frameworks, what does the specific term 'Deductible' represent for an active policyholder?", opts: ["The upfront specified financial volume that the insured must pay out-of-pocket before the insurance company covers claims", "An automatic premium multiplication factor applied retroactively inside renewal database logs across centers during processing", "A statutory penalty fine schedule triggered by unexpected compliance reporting delays across corridors inside systems", "The complete transfer of remaining physical asset layers to interstate sovereign treasury vaults post exit operations"] },
            hi: { q: "सामान्य बीमा अनुबंध ढांचे के भीतर, विशिष्ट शब्द 'डिडक्टिबल' (Deductible / कटौती योग्य) एक सक्रिय पॉलिसीधारक के लिए क्या दर्शाता है?", opts: ["वह अग्रिम निर्दिष्ट वित्तीय राशि जिसका भुगतान बीमा कंपनी द्वारा दावों को कवर करने से पहले बीमित व्यक्ति को अपनी जेब (Out-of-pocket) से करना होगा", "प्रसंस्करण के दौरान केंद्रों में नवीनीकरण डेटाबेस लॉग के भीतर पूर्वव्यापी रूप से लागू एक स्वचालित प्रीमियम गुणन कारक", "प्रणालियों के भीतर कॉरिडोर में अप्रत्याशित अनुपालन रिपोर्टिंग देरी के कारण ट्रिगर होने वाली वैधानिक जुर्माना अनुसूची", "निकास संचालन के बाद शेष भौतिक संपत्ति परतों को अंतरराज्यीय संप्रभु ट्रेजरी वॉल्ट में पूरी तरह से स्थानांतरित करना"] },
            correct: 0
        },
        {
            en: { q: "In exchange currency options setups inside India, what precise protocol determines the 'Strike Price Intervals' for a standard USD-INR contract?", opts: ["The exchange establishes a fixed strike price interval parameter of ₹0.25 across active currency option option configurations", "The clearing corporation forces dynamic shifts equivalent to 1.00% of the active sponsor's total registration sheets", "The parameters freeze retroactively to align with global physical warehouse bullion delivery sheets automatically post session", "The margin allocation drops to absolute zero parameters to waive all systematic clearing hazards post expiration loops"] },
            hi: { q: "भारत में एक्सचेंज मुद्रा ऑप्शंस सेटअप के भीतर, कौन सा सटीक प्रोटोकॉल एक मानक USD-INR अनुबंध के लिए 'स्ट्राइक प्राइस इंटरवल्स' (Strike Price Intervals) निर्धारित करता है?", opts: ["एक्सचेंज सक्रिय मुद्रा विकल्प कॉन्फ़िगरेशन में ₹0.25 का एक निश्चित स्ट्राइक मूल्य अंतराल पैरामीटर स्थापित करता है", "क्लियरिंग कॉरपोरेशन सक्रिय प्रायोजक की कुल पंजीकरण शीट के 1.00% के बराबर गतिशील बदलाव लागू करता है", "सत्र के बाद वैश्विक भौतिक गोदाम बुलियन वितरण शीट के साथ स्वचालित रूप से संरेखित करने के लिए पैरामीटर पूर्वव्यापी रूप से फ्रीज हो जाते हैं", "समाप्ति लूप के बाद सभी व्यवस्थित क्लियरिंग खतरों को माफ करने के लिए मार्जिन आवंटन पूर्ण शून्य मापदंडों तक गिर जाता है"] },
            correct: 0
        },
        {
            en: { q: "What options configuration is constructed when an investor executes a 'Long Straddle' using index option options contracts?", opts: ["The simultaneous purchase of a Call option and a Put option on the identical asset with matching strike prices and expiry", "Buying two consecutive monthly rollover deep out-of-the-money contract layers across currency network channels during sessions", "Combining a physical commodity delivery order with certified warehouse structural repository certificates dynamically inside centers", "Writing sequential calendar rollover call options across mismatched expiration configurations inside clearing systems across states"] },
            hi: { q: "जब एक निवेशक इंडेक्स ऑप्शंस अनुबंधों का उपयोग करके 'लॉन्ग स्ट्रैडल' (Long Straddle) रणनीति बनाता है तो कौन सा ऑप्शंस कॉन्फ़िगरेशन स्थापित होता है?", opts: ["समान स्ट्राइक मूल्य और समान एक्सपायरी के साथ समान परिसंपत्ति पर एक साथ एक कॉल ऑप्शन आणि एक पुट ऑप्शन खरीदना (Purchase)", "सत्रों के दौरान मुद्रा नेटवर्क चैनलों में लगातार दो मासिक रोलओवर गहरी आउट-ऑफ-डी-मनी अनुबंध परतें खरीदना", "केंद्रों के भीतर प्रमाणित गोदाम संरचनात्मक रिपोजिटरी प्रमाणपत्रों के साथ एक भौतिक कमोडिटी वितरण आदेश को गतिशील रूप से जोड़ना", "राज्यों में क्लियरिंग सिस्टम के भीतर बेमेल समाप्ति विन्यासों में अनुक्रमिक कैलेंडर रोलओवर कॉल ऑप्शंस लिखना"] },
            correct: 0
        },
        {
            en: { q: "Inside fundamental corporate asset research layers, what precise metric evaluates a listed company's asset asset lifecycle utilization efficiency?", opts: ["Asset Turnover Ratio parameter quantifying total annual sales revenue generated divided by average total corporate assets", "The total count of institutional retail distributors logged across regional database grid networks during annual updates across locations", "The dividend payout value divided by the administrative processing tax overhead coefficient baseline parameter sheets across centers", "The structural error variance separating exchange baseline parameters from network login mainframes daily post monitoring reviews"] },
            hi: { q: "मौलिक कॉर्पोरेट परिसंपत्ति अनुसंधान परतों के भीतर, कौन सा सटीक मीट्रिक एक सूचीबद्ध कंपनी की परिसंपत्ति जीवनचक्र उपयोग दक्षता का मूल्यांकन करता है?", opts: ["एसेट टर्नओवर रेशियो (Asset Turnover Ratio) पैरामीटर, जो उत्पन्न कुल वार्षिक बिक्री राजस्व को औसत कुल कॉर्पोरेट परिसंपत्तियों द्वारा विभाजित करके मापता है", "स्थानों पर वार्षिक अपडेट के दौरान क्षेत्रीय डेटाबेस ग्रिड नेटवर्क में लॉग इन संस्थागत खुदरा वितरकों की कुल संख्या", "केंद्रों में प्रशासनिक प्रसंस्करण कर ओवरहेड गुणांक आधार रेखा पैरामीटर शीट द्वारा विभाजित लाभांश भुगतान मूल्य", "निगरानी समीक्षाओं के बाद दैनिक नेटवर्क लॉगिन मेनफ्रेम से एक्सचेंज बेसलाइन मापदंडों को अलग करने वाला संरचनात्मक त्रुटि विचरण"] },
            correct: 0
        },
        {
            en: { q: "In exchange-traded commodity derivatives layouts inside India, what represents the primary statutory mandate of the 'Daily Price Limits' (DPL) framework?", opts: ["To curb extreme speculative market volatility by temporarily halting trading or restricting price movements beyond specified bands", "The marketing layout route used by licensed field distributors across state hubs during annual reviews across corridors", "The automated computer processing time threshold required to refresh database interface rows dynamically across centers", "The statutory fine schedule triggered following corporate regulatory compliance audit failures across networks inside systems"] },
            hi: { q: "भारत के भीतर एक्सचेंज-ट्रेडेड कमोडिटी डेरिवेटिव लेआउट में, 'डेली प्राइस लिमिट्स' (DPL) ढांचे के प्राथमिक वैधानिक शासनादेश को क्या परिभाषित करता है?", opts: ["निर्दिष्ट बैंड से परे मूल्य उतार-चढ़ाव को प्रतिबंधित करके या अस्थायी रूप से व्यापार रोककर अत्यधिक सट्टा बाजार अस्थिरता को नियंत्रित करना", "कॉरिडोर में वार्षिक समीक्षा के दौरान राज्य केंद्रों में लाइसेंस प्राप्त क्षेत्र वितरकों द्वारा उपयोग किया जाने वाला विपणन लेआउट मार्ग", "केंद्रों में डेटाबेस इंटरफ़ेस पंक्तियों को गतिशील रूप से रीफ्रेश करने के लिए आवश्यक स्वचालित कंप्यूटर प्रसंस्करण समय सीमा", "सिस्टम के भीतर नेटवर्क पर कॉर्पोरेट नियामक अनुपालन ऑडिट विफलताओं के बाद ट्रिगर होने वाली वैधानिक जुर्माना अनुसूची"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI mutual fund guidelines, what strict parameter defines the portfolio mandate for a 'Large Cap Fund' asset allocation scheme?", opts: ["The scheme must deploy a minimum of 80% of total available net assets inside equity shares of top 100 large-cap corporate entities", "To allocate 100% of available net funds into international cryptocurrency venture registries across corridors dynamically inside centers", "To invest exclusively inside sovereign gold futures across multi-commodity exchange counters daily across monitoring locations", "To lock in retail capital assets for a mandatory 10-year structural lifecycle blueprint layout scheme across state lines"] },
            hi: { q: "सेबी म्यूचुअल फंड दिशानिर्देशों के तहत, कौन सा सख्त पैरामीटर एक 'लार्ज कैप फंड' (Large Cap Fund) परिसंपत्ति आवंटन योजना के लिए पोर्टफोलियो जनादेश को परिभाषित करता है?", opts: ["योजना को शीर्ष 100 लार्ज-कैप कॉर्पोरेट संस्थाओं के इक्विटी शेयरों के भीतर कुल उपलब्ध शुद्ध संपत्ति का न्यूनतम 80% निवेश करना होगा", "केंद्रों में गतिशील रूप से कॉरिडोर में अंतरराष्ट्रीय क्रिप्टोकरेंसी वेंचर रजिस्ट्रियों में उपलब्ध शुद्ध धन का 100% आवंटित करना", "निगरानी स्थानों पर दैनिक रूप से मल्टी-कमोडिटी एक्सचेंज काउंटरों पर विशेष रूप से संप्रभु स्वर्ण फ्यूचर्स के भीतर निवेश करना", "राज्य की सीमाओं में एक अनिवार्य 10-वर्षीय संरचनात्मक जीवनचक्र ब्लूप्रिंट लेआउट योजना के लिए खुदरा पूंजीगत संपत्तियों को लॉक करना"] },
            correct: 0
        },
        {
            en: { q: "What does the option Greek 'Vega' quantify inside multi-asset complex institutional portfolio risk management architectures?", opts: ["The sensitivity of an option's financial pricing relative to a 1% absolute shift inside underlying implied volatility parameters", "The acceleration parameter affecting the absolute intrinsic value across horizons dynamically across transaction systems", "The historical correlation mapping cross-border index yields over sovereign bond blocks quarterly across repositories", "The standard deviation metric isolating tracking errors from passive index strategies across networks inside processing matrices"] },
            hi: { q: "मल्टी-एसेट जटिल संस्थागत पोर्टफोलियो जोखिम प्रबंधन आर्किटेक्चर के भीतर ऑप्शन ग्रीक 'वेगा' (Vega) क्या मापता है?", opts: ["अंतर्निहित निहित अस्थिरता (Implied Volatility) मापदंडों के भीतर 1% के पूर्ण बदलाव के सापेक्ष किसी ऑप्शन के वित्तीय मूल्य निर्धारण की संवेदनशीलता", "लेनदेन प्रणालियों में गतिशील रूप से विभिन्न क्षितिज पर पूर्ण आंतरिक मूल्य को प्रभावित करने वाला त्वरण पैरामीटर", "रिपोजिटरी में त्रैमासिक रूप से संप्रभु बांड ब्लॉकों पर सीमा पार इंडेक्स यील्ड का ऐतिहासिक सहसंबंध मानचित्रण", "प्रसंस्करण मेट्रिसेस के भीतर नेटवर्क पर पैसिव इंडेक्स रणनीतियों से ट्रैकिंग त्रुटियों को अलग करने वाला मानक विचलन मीट्रिक"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI AIF Regulations, what structural parameters characterize a Category II Alternative Investment Fund setup inside India?", opts: ["Funds that do not undertake leverage or borrowing other than to meet day-to-day operational requirements (e.g., Private Equity Funds)", "A financial vehicle focused 100% on trading short-term speculative currency options inside clearing house accounts across locations", "An absolute liquidity block equivalent to 15 years managed under sovereign trust frameworks without exit windows across systems", "A floating window altered dynamically by corporate sponsors during monthly compliance tracking ledger reviews inside centers"] },
            hi: { q: "सेबी एआईएफ नियमों के तहत, भारत के भीतर श्रेणी II वैकल्पिक निवेश कोष (Category II AIF) सेटअप की क्या विशेषताएं हैं?", opts: ["ऐसे फंड जो दिन-प्रतिदिन की परिचालन आवश्यकताओं को पूरा करने के अलावा अन्य लीवरेज या उधार नहीं लेते हैं (जैसे, प्राइवेट इक्विटी फंड)", "स्थानों पर क्लियरिंग हाउस खातों के भीतर अल्पकालिक सट्टा मुद्रा विकल्पों के व्यापार पर 100% केंद्रित एक वित्तीय वाहन", "प्रणालियों में निकास खिड़कियों के बिना संप्रभु ट्रस्ट ढांचे के तहत प्रबंधित 15 वर्षों के बराबर एक पूर्ण तरलता ब्लॉक", "केंद्रों में मासिक अनुपालन ट्रैकिंग बहीखाता समीक्षाओं के दौरान कॉर्पोरेट प्रायोजकों द्वारा गतिशील रूप से बदला जाने वाला एक फ्लोटिंग विंडो"] },
            correct: 0
        },
        {
            en: { q: "Inside the legislative infrastructure of sovereign debt instruments, what characterizes an 'Inflation-Indexed Bond' (IIB) issued via the RBI?", opts: ["A fixed-income asset where both coupon payments and principal layouts are explicitly adjusted to track national consumer inflation parameters", "An unsecured corporate paper carrying rolling variable coupons evaluated post administrative audit cycles across networks", "A debt asset product structured 100% around international cross-currency settlement ledger adjustments inside processing centers", "A short-term money market instrument with a maturity profile restricted up to 91 days exclusively across location registries"] },
            hi: { q: "संप्रभु ऋण उपकरणों के विधायी बुनियादी ढांचे के भीतर, आरबीआई के माध्यम से जारी 'इन्फ्लेशन-इंडेक्स्ड बॉन्ड' (IIB / मुद्रास्फीति-इंडेक्स्ड बॉन्ड) की क्या विशेषता है?", opts: ["एक फिक्स्ड-इनकम संपत्ति जिसमें कूपन भुगतान (Coupon payments) और मूल लेआउट दोनों को राष्ट्रीय उपभोक्ता मुद्रास्फीति मापदंडों को ट्रैक करने के लिए स्पष्ट रूप से समायोजित किया जाता है", "नेटवर्क पर प्रशासनिक ऑडिट चक्रों के बाद मूल्यांकित रोलिंग परिवर्तनीय कूपन ले जाने वाला एक असुरक्षित कॉर्पोरेट पेपर", "प्रसंस्करण केंद्रों में अंतरराष्ट्रीय क्रॉस-करेंसी निपटान बहीखाता समायोजन के आसपास 100% संरचित एक ऋण परिसंपत्ति उत्पाद", "स्थान रजिस्ट्रियों में विशेष रूप से 91 दिनों तक सीमित परिपक्वता प्रोफाइल वाला एक अल्पकालिक मुद्रा बाजार उपकरण"] },
            correct: 0
        },
        {
            en: { q: "What options strategy is constructed if an investor executes a 'Short Strangle' trading combination asset layout?", opts: ["The simultaneous writing of an out-of-the-money Call option and an out-of-the-money Put option on the identical asset with matching expiry", "Buying an At-the-Money call option alongside writing sequential calendar structures across volatile tech spaces across locations", "Combining a physical gold spot purchase order along with cross-currency futures tracking indices dynamically inside database rooms", "Writing sequential calendar rollover options across mismatched expiration series parameters inside clearing rooms across states"] },
            hi: { q: "यदि कोई निवेशक 'शॉर्ट स्ट्रैंगल' (Short Strangle) ट्रेडिंग संयोजन परिसंपत्ति लेआउट निष्पादित करता है तो कौन सा ऑप्शंस रणनीति बनती है?", opts: ["समान एक्सपायरी के साथ समान परिसंपत्ति पर एक साथ एक आउट-ऑफ-द-मनी कॉल ऑप्शन आणि एक आउट-ऑफ-द-मनी पुट ऑप्शन बेचना / लिखना (Writing)", "स्थानों पर अस्थिर तकनीकी क्षेत्रों में अनुक्रमिक कैलेंडर संरचनाएं लिखने के साथ-साथ एक एट-द-मनी कॉल ऑप्शन खरीदना", "डेटाबेस रूम में गतिशील रूप से क्रॉस-करेंसी फ्यूचर्स ट्रैकिंग इंडेक्स के साथ एक भौतिक सोने की खरीद के आदेश को जोड़ना", "राज्यों में क्लियरिंग रूम के भीतर असंगत समाप्ति श्रृंखला मापदंडों में अनुक्रमिक कैलेंडर रोलओवर ऑप्शंस लिखना"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI Portfolio Managers rules, what represents the mandatory minimum capital allocation size required from a single client to onboard a PMS setup?", opts: ["₹50 Lakh per client account baseline", "₹25 Lakh per client account baseline", "₹1 Crore per client account baseline", "There is no statutory minimum size restriction inside professional institutional PMS setup configurations"] },
            hi: { q: "सेबी पोर्टफोलियो प्रबंधक नियमों के अनुसार, पीएमएस (PMS) सेटअप में शामिल होने के लिए एकल ग्राहक से आवश्यक अनिवार्य न्यूनतम पूंजी आवंटन राशि क्या है?", opts: ["₹50 लाख प्रति ग्राहक खाता बेसलाइन (₹50 Lakh per client)", "₹25 लाख प्रति ग्राहक खाता बेसलाइन", "₹1 करोड़ प्रति ग्राहक खाता बेसलाइन", "पेशेवर संस्थागत पीएमएस सेटअप कॉन्फ़िगरेशन के भीतर कोई वैधानिक न्यूनतम राशि प्रतिबंध नहीं है"] },
            correct: 0
        },
        {
            en: { q: "Inside fundamental corporate equity analysis metrics, what parameters define the indicator 'Return on Equity' (ROE)?", opts: ["Net Income divided by Net Shareholders' Equity of the corporate entity, expressed as a percentage value layer", "The relation separating direct asset premiums from operational overhead tax indices across geographical corridors post updates", "The structural error configuration tracking network mainframe re-verification login delays within processing systems after reviews", "The dividend allocation percentage distributed to institutional corporate sponsors annually across clearing nodes during validations"] },
            hi: { q: "मौलिक कॉर्पोरेट इक्विटी विश्लेषण मेट्रिक्स के भीतर, कौन से मापदंड संकेतक 'रिटर्न ऑन इक्विटी' (ROE) को परिभाषित करते हैं?", opts: ["कॉर्पोरेट इकाई की शुद्ध शेयरधारक इक्विटी (Shareholders' Equity) द्वारा विभाजित शुद्ध आय (Net Income), प्रतिशत मान परत के रूप में व्यक्त", "अपडेट के बाद भौगोलिक गलियारों में प्रत्यक्ष परिसंपत्ति प्रीमियम को परिचालन ओवरहेड कर सूचकांकों से अलग करने वाला संबंध", "समीक्षाओं के बाद प्रसंस्करण प्रणालियों के भीतर नेटवर्क मेनफ्रेम पुनर्सत्यापन लॉगिन देरी को ट्रैक करने वाला संरचनात्मक त्रुटि विन्यास", "सत्यापन के दौरान क्लियरिंग नोड्स में संस्थागत कॉर्पोरेट प्रायोजकों को वार्षिक रूप से वितरित लाभांश आवंटन प्रतिशत"] },
            correct: 0
        },
        {
            en: { q: "In the physical commodity derivatives ecosystem inside India, what statutory body regulates warehouse infrastructure development channels?", opts: ["Warehousing Development and Regulatory Authority (WDRA) operating under apex central legislative enactments", "The allocation step mapping distributor commission tiers to certified field brokers across storage hubs during annual audits across corridors", "The dynamic processing matrix evaluated to clear outdated accounting ledger rows during institutional database overhauls across networks", "The statutory inspection applied over structural mainframe computer network installations inside certified hubs post updates inside hubs"] },
            hi: { q: "भारत के भीतर भौतिक कमोडिटी डेरिवेटिव पारिस्थितिकी तंत्र में, कौन सा वैधानिक निकाय गोदाम बुनियादी ढांचा विकास चैनलों को नियंत्रित करता है?", opts: ["शीर्ष केंद्रीय विधायी अधिनियमों के तहत काम करने वाली वेयरहाउसिंग डेवलपमेंट एंड रेगुलेटरी ऑथोरिटी (WDRA)", "कॉरिडोर में वार्षिक ऑडिट के दौरान भंडारण केंद्रों में प्रमाणित फ़ील्ड दलालों को वितरक कमीशन स्तरों से मैप करने वाला आवंटन चरण", "नेटवर्क पर संस्थागत डेटाबेस ओवरहाल के दौरान पुरानी लेखा बहीखाता पंक्तियों को साफ करने के लिए मूल्यांकित गतिशील प्रसंस्करण मैट्रिक्स", "हब के भीतर अपडेट के बाद प्रमाणित केंद्रों के भीतर संरचनात्मक मेनफ्रेम कंप्यूटर नेटवर्क इंस्टॉलेशन पर लागू वैधानिक निरीक्षण"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI mutual fund rules, what represents the primary structural mandate of a 'Multi Asset Allocation Fund' portfolio layout?", opts: ["The scheme must invest in at least three asset classes with a minimum allocation of 10% in each asset class simultaneously", "To allocate 100% of available net funds into international technology start-up venture instruments across corridors across states", "To invest exclusively inside sovereign gold futures across multi-commodity exchange clearing windows daily post session updates across centers", "To lock in retail capital assets for a mandatory 15-year structural lifecycle blueprint scheme layout across states during initialization steps"] },
            hi: { q: "सेबी म्यूचुअल फंड नियमों के अनुसार, 'मल्टी एसेट एलोकेशन फंड' (Multi Asset Allocation Fund) पोर्टफोलियो लेआउट के प्राथमिक संरचनात्मक अधिदेश को क्या परिभाषित करता है?", opts: ["योजना को एक ही समय में प्रत्येक परिसंपत्ति वर्ग में न्यूनतम 10% आवंटन के साथ कम से कम तीन परिसंपत्ति वर्गों (At least three asset classes) में निवेश करना होगा", "राज्यों में कॉरिडोर में अंतरराष्ट्रीय प्रौद्योगिकी स्टार्ट-अप वेंचर उपकरणों में उपलब्ध शुद्ध धन का 100% आवंटित करना", "केंद्रों में सत्र अपडेट के बाद दैनिक रूप से मल्टी-कमोडिटी एक्सचेंज क्लियरिंग विंडो में विशेष रूप से संप्रभु स्वर्ण वायदा के भीतर निवेश करना", "आरंभीकरण चरणों के दौरान राज्यों में एक अनिवार्य 15-वर्षीय संरचनात्मक जीवनचक्र ब्लूप्रिंट योजना लेआउट के लिए खुदरा पूंजीगत संपत्तियों को लॉक करना"] },
            correct: 0
        },
        {
            en: { q: "What does the option Greek 'Delta' quantify inside institutional derivative asset tracking models?", opts: ["The mathematical rate of change in an option's premium relative to a 1-unit shift inside the underlying asset's spot or futures price layer", "The time decay factor affecting the intrinsic value parameter across consecutive contract expiration updates across locations", "The dynamic variance checked between cross-border sovereign baseline treasury asset index configurations quarterly across repositories", "The standard deviation metric isolating tracking errors from physical warehouse deliveries across networks inside matrix models"] },
            hi: { q: "संस्थागत डेरिवेटिव परिसंपत्ति ट्रैकिंग मॉडल के भीतर ऑप्शन ग्रीक 'डेल्टा' (Delta) क्या मापता है?", opts: ["अंतर्निहित परिसंपत्ति की हाजिर या फ्यूचर्स कीमत परत (Spot or futures price) में 1-इकाई के बदलाव के सापेक्ष किसी ऑप्शन के प्रीमियम में बदलाव की गणितीय दर", "स्थानों पर लगातार अनुबंध समाप्ति अपडेट में आंतरिक मूल्य पैरामीटर को प्रभावित करने वाला समय क्षय कारक", "रिपोजिटरी में त्रैमासिक रूप से सीमा पार संप्रभु आधारभूत ट्रेजरी परिसंपत्ति सूचकांक विन्यासों के बीच जांचा गया गतिशील विचरण", "मैट्रिक्स मॉडल के भीतर नेटवर्क पर भौतिक गोदाम वितरण से ट्रैकिंग त्रुटियों को अलग करने वाला मानक विचलन मीट्रिक"] },
            correct: 0
        },
        {
            en: { q: "Inside the sovereign insurance legal frameworks inside India, what does the specific principle 'Utmost Good Faith' (Uberrimae Fidei) mandate?", opts: ["The statutory obligation of both parties to disclose all material facts honestly and completely prior to contract execution", "The structural allocation formula used to determine broker incentive configurations across states during reviews across networks", "The legal pathway enabling clearing house desks to confiscate damaged physical cargo items following corporate events across systems", "The automated calculation matrix measuring solvency adequate capital baselines quarterly across corporate repositories inside databases"] },
            hi: { q: "भारत के भीतर संप्रभु बीमा कानूनी ढांचे के अंदर, विशिष्ट सिद्धांत 'अत्यंत सद्भाव' (Utmost Good Faith / Uberrimae Fidei) क्या आदेश देता है?", opts: ["अनुबंध निष्पादन से पहले सभी महत्वपूर्ण तथ्यों (Material facts) को ईमानदारी से और पूरी तरह से प्रकट करने का दोनों पक्षों का वैधानिक दायित्व", "नेटवर्क पर समीक्षाओं के दौरान राज्यों में ब्रोकर प्रोत्साहन विन्यास निर्धारित करने के लिए उपयोग किया जाने वाला संरचनात्मक आवंटन फॉर्मूला", "सिस्टम में कॉर्पोरेट घटनाओं के बाद क्लियरिंग हाउस डेस्क को क्षतिग्रस्त भौतिक कार्गो वस्तुओं को जब्त करने में सक्षम बनाने वाला कानूनी मार्ग", "डेटाबेस के भीतर कॉर्पोरेट रिपोजिटरी में त्रैमासिक रूप से सॉल्वेंसी पर्याप्त पूंजी आधार को मापने वाला स्वचालित गणना मैट्रिक्स"] },
            correct: 0
        },
        {
            en: { q: "In exchange currency derivatives systems inside India, what represents the primary parameter defining a 'Cross-Currency' futures contract setup?", opts: ["A derivative contract traded on Indian exchanges where both underlying currencies exclude the Indian Rupee (e.g., EUR-USD)", "The dynamic processing tax tariff evaluated across interstate clearance center mainframes during sessions across locations", "The cumulative tracking error variance monitored inside passive index allocation strategies over horizons across systems", "The sovereign interest rate multiplier added dynamically by central banking repository units during updates inside frameworks"] },
            hi: { q: "भारत में एक्सचेंज मुद्रा डेरिवेटिव प्रणालियों के भीतर, 'क्रॉस-करेंसी' (Cross-Currency) फ्यूचर्स अनुबंध सेटअप को परिभाषित करने वाला प्राथमिक पैरामीटर क्या है?", opts: ["भारतीय एक्सचेंजों पर कारोबार करने वाला एक डेरिवेटिव अनुबंध जहां दोनों अंतर्निहित मुद्राओं में भारतीय रुपया शामिल नहीं होता है (जैसे, EUR-USD)", "स्थानों पर सत्रों के दौरान अंतरराज्यीय क्लीयरेंस सेंटर मेनफ्रेम में मूल्यांकित गतिशील प्रसंस्करण कर टैरिफ", "सिस्टम में क्षितिज पर पैसिव इंडेक्स आवंटन रणनीतियों के भीतर मॉनिटर की गई संचयी ट्रैकिंग त्रुटि विचरण", "ढांचे के भीतर अपडेट के दौरान केंद्रीय बैंकिंग रिपोजिटरी इकाइयों द्वारा गतिशील रूप से जोड़ा गया संप्रभु ब्याज दर गुणक"] },
            correct: 0
        },
        // --- NISM Advanced Standard Mock Test: Quantitative Risk & Structural Compliance (Set 16) ---
        {
            en: { q: "What does the option Greek 'Lambda' (also known as 'Omega' or 'Elasticity') measure within the framework of leveraged derivatives?", opts: ["The percentage change in an option's price for a 1% change in the underlying asset's price", "The sensitivity of Vega to shifts in the interest rate structure across long-dated horizons", "The historical decay rate of premium erosion tracking against exchange margin maintenance requirements", "The structural variance separating central counterparty clearing ledger balances from active broker accounts"] },
            hi: { q: "लीवरेज्ड डेरिवेटिव्स के ढांचे के भीतर ऑप्शन ग्रीक 'लैम्ब्डा' (जिसे 'ओमेगा' या 'इलास्टिसिटी' भी कहा जाता है) क्या मापता है?", opts: ["अंतर्निहित परिसंपत्ति की कीमत में 1% बदलाव के लिए ऑप्शन की कीमत में प्रतिशत बदलाव", "लंबी अवधि के क्षितिज पर ब्याज दर संरचना में बदलाव के प्रति वेगा की संवेदनशीलता", "एक्सचेंज मार्जिन रखरखाव आवश्यकताओं के मुकाबले प्रीमियम क्षरण की ऐतिहासिक क्षय दर", "केंद्रीय प्रतिपक्ष क्लियरिंग बहीखाता शेष को सक्रिय ब्रोकर खातों से अलग करने वाला संरचनात्मक विचरण"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI (AIF) Regulations, what is the mandatory minimum investment size for an 'Angel Fund' investor?", opts: ["₹25 Lakh", "₹1 Crore", "₹10 Lakh", "₹5 Crore"] },
            hi: { q: "सेबी (एआईएफ) नियमों के तहत, 'एंजेल फंड' (Angel Fund) निवेशक के लिए अनिवार्य न्यूनतम निवेश राशि क्या है?", opts: ["₹25 लाख", "₹1 करोड़", "₹10 लाख", "₹5 करोड़"] },
            correct: 0
        },
        {
            en: { q: "In the context of 'VIX' (Volatility Index) futures, what does the index primarily represent for market participants?", opts: ["A measure of market expectations of near-term volatility conveyed by S&P 500 index option prices", "The historical realized variance of the sovereign debt yield curves over a 10-year rolling cycle", "The aggregate volume of physical bullion deliveries handled by designated national refineries", "The net interest margin differential tracked across interbank call money lending platforms daily"] },
            hi: { q: "'VIX' (वोलाटिलिटी इंडेक्स) फ्यूचर्स के संदर्भ में, यह सूचकांक बाजार प्रतिभागियों के लिए मुख्य रूप से क्या दर्शाता है?", opts: ["S&P 500 इंडेक्स ऑप्शन कीमतों द्वारा व्यक्त निकट-अवधि की अस्थिरता की बाजार अपेक्षाओं का एक माप", "10-वर्षीय रोलिंग चक्र पर संप्रभु ऋण यील्ड वक्रों का ऐतिहासिक वास्तविक विचरण", "नामित राष्ट्रीय रिफाइनरियों द्वारा संभाली गई भौतिक बुलियन डिलीवरी की कुल मात्रा", "अंतरबैंक कॉल मनी लेंडिंग प्लेटफॉर्म पर दैनिक रूप से ट्रैक किया गया शुद्ध ब्याज मार्जिन अंतर"] },
            correct: 0
        },
        {
            en: { q: "What structural event triggers the 'Circuit Breaker' mechanism in the Indian stock exchange for index-based market-wide volatility?", opts: ["A significant movement (10%, 15%, and 20%) in the BSE Sensex or Nifty 50 within a single trading session", "The sudden bankruptcy of a major corporate sponsor listed on the Nifty Next 50 index", "The automated clearing house failure to reconcile margin balances after 5:00 PM IST", "A 1% increase in the central bank's repo rate announced during unscheduled press conferences"] },
            hi: { q: "सूचकांक-आधारित बाजार-व्यापी अस्थिरता के लिए भारतीय स्टॉक एक्सचेंज में 'सर्किट ब्रेकर' (Circuit Breaker) तंत्र को कौन सी संरचनात्मक घटना ट्रिगर करती है?", opts: ["एक एकल ट्रेडिंग सत्र के भीतर बीएसई सेंसेक्स या निफ्टी 50 में महत्वपूर्ण हलचल (10%, 15%, और 20%)", "निफ्टी नेक्स्ट 50 इंडेक्स पर सूचीबद्ध एक प्रमुख कॉर्पोरेट प्रायोजक की अचानक दिवालियापन", "शाम 5:00 बजे IST के बाद मार्जिन बैलेंस का मिलान करने में स्वचालित क्लियरिंग हाउस की विफलता", "अनिर्धारित प्रेस कॉन्फ्रेंस के दौरान घोषित केंद्रीय बैंक की रेपो दर में 1% की वृद्धि"] },
            correct: 0
        },
        {
            en: { q: "What is 'Tracking Error' in the context of an Index Fund?", opts: ["The standard deviation of the difference between the returns of the fund and its benchmark index", "The total expense ratio charged by the asset management company for administrative services", "The slippage incurred by the fund manager while purchasing stocks during market opening hours", "The difference between the NAV of the fund and the price at which it is traded on the stock exchange"] },
            hi: { q: "इंडेक्स फंड के संदर्भ में 'ट्रैकिंग एरर' (Tracking Error) क्या है?", opts: ["फंड के रिटर्न और उसके बेंचमार्क इंडेक्स के रिटर्न के बीच के अंतर का मानक विचलन", "प्रशासनिक सेवाओं के लिए एसेट मैनेजमेंट कंपनी द्वारा लिया गया कुल व्यय अनुपात (TER)", "बाजार खुलने के घंटों के दौरान स्टॉक खरीदते समय फंड मैनेजर द्वारा वहन किया गया स्लिपेज", "फंड की एनएवी (NAV) और स्टॉक एक्सचेंज पर जिस कीमत पर इसका कारोबार होता है, उसके बीच का अंतर"] },
            correct: 0
        },
        {
            en: { q: "Which of the following describes a 'Butterfly Spread' options strategy?", opts: ["Combining bull and bear spreads to profit from low volatility with capped risk and capped profit", "A strategy involving buying and selling options of the same underlying and expiration, but different strikes", "The act of buying stock and selling calls simultaneously to generate income", "A speculative play on the direction of interest rate changes using swap derivatives"] },
            hi: { q: "निम्नलिखित में से कौन 'बटरफ्लाई स्प्रेड' (Butterfly Spread) ऑप्शंस रणनीति का वर्णन करता है?", opts: ["सीमित जोखिम और सीमित लाभ के साथ कम अस्थिरता से लाभ उठाने के लिए बुल और बियर स्प्रेड्स का संयोजन", "समान अंतर्निहित और समाप्ति, लेकिन अलग-अलग स्ट्राइक वाले ऑप्शंस को खरीदने और बेचने से जुड़ी एक रणनीति", "आय उत्पन्न करने के लिए स्टॉक खरीदना और कॉल बेचना", "स्वैप डेरिवेटिव का उपयोग करके ब्याज दर में बदलाव की दिशा पर एक सट्टा दांव"] },
            correct: 0
        },
        {
            en: { q: "In the context of REITs, what is the 'Net Distributable Cash Flow' (NDCF)?", opts: ["The cash flow available for distribution to unit holders after operational and financial obligations are met", "The gross revenue collected from rental properties before deducting maintenance and tax expenses", "The total market capitalization of the REIT based on its current traded price on the exchange", "The initial capital investment amount allocated by the sponsor during the IPO stage"] },
            hi: { q: "आरईआईटी (REITs) के संदर्भ में, 'शुद्ध वितरण योग्य नकद प्रवाह' (NDCF) क्या है?", opts: ["परिचालन और वित्तीय दायित्वों को पूरा करने के बाद यूनिट धारकों को वितरण के लिए उपलब्ध नकद प्रवाह", "रखरखाव और कर खर्चों में कटौती से पहले किराये की संपत्तियों से एकत्र किया गया सकल राजस्व", "एक्सचेंज पर इसकी वर्तमान कारोबार मूल्य के आधार पर आरईआईटी का कुल मार्केट कैपिटलाइजेशन", "आईपीओ चरण के दौरान प्रायोजक द्वारा आवंटित प्रारंभिक पूंजी निवेश राशि"] },
            correct: 0
        },
        {
            en: { q: "What does 'Mark-to-Market' (MTM) margin imply in futures trading?", opts: ["Settling the profit or loss on a daily basis based on the closing price of the futures contract", "The initial amount deposited with the broker to initiate a trade position", "The commission charged by the exchange for processing a high-frequency trading order", "The tax deducted at source on the profits generated from commodity derivatives"] },
            hi: { q: "फ्यूचर्स ट्रेडिंग में 'मार्क-टू-मार्केट' (MTM) मार्जिन का क्या अर्थ है?", opts: ["फ्यूचर्स अनुबंध की क्लोजिंग कीमत के आधार पर दैनिक आधार पर लाभ या हानि का निपटान", "ट्रेड पोजीशन शुरू करने के लिए ब्रोकर के पास जमा की गई प्रारंभिक राशि", "हाई-फ्रीक्वेंसी ट्रेडिंग ऑर्डर को संसाधित करने के लिए एक्सचेंज द्वारा लिया गया कमीशन", "कमोडिटी डेरिवेटिव्स से उत्पन्न लाभ पर स्रोत पर काटा गया कर (TDS)"] },
            correct: 0
        },
        {
            en: { q: "What is the primary function of the 'Clearing Corporation' in the Indian derivative market?", opts: ["To act as the counterparty for every trade, ensuring the settlement of trades and mitigating counterparty risk", "To provide investment advisory services to retail investors for portfolio diversification", "To regulate the listing requirements for new companies entering the stock market", "To manage the website infrastructure for online stock trading across all registered brokers"] },
            hi: { q: "भारतीय डेरिवेटिव बाजार में 'क्लियरिंग कॉरपोरेशन' (Clearing Corporation) का प्राथमिक कार्य क्या है?", opts: ["प्रत्येक ट्रेड के लिए प्रतिपक्ष के रूप में कार्य करना, ट्रेडों का निपटान सुनिश्चित करना और प्रतिपक्ष जोखिम को कम करना", "खुदरा निवेशकों को पोर्टफोलियो विविधीकरण के लिए निवेश सलाहकार सेवाएं प्रदान करना", "स्टॉक मार्केट में प्रवेश करने वाली नई कंपनियों के लिए लिस्टिंग आवश्यकताओं को विनियमित करना", "सभी पंजीकृत ब्रोकरों के लिए ऑनलाइन स्टॉक ट्रेडिंग के लिए वेबसाइट बुनियादी ढांचे का प्रबंधन करना"] },
            correct: 0
        },
        {
            en: { q: "What is a 'Credit Default Swap' (CDS)?", opts: ["A financial derivative that allows an investor to swap their credit risk with that of another investor", "A type of loan provided by banks to farmers with subsidized interest rates", "A government-issued bond that guarantees inflation-protected returns over a decade", "An equity instrument representing ownership in a private company's debt portfolio"] },
            hi: { q: "'क्रेडिट डिफॉल्ट स्वैप' (CDS) क्या है?", opts: ["एक वित्तीय डेरिवेटिव जो एक निवेशक को अपने क्रेडिट जोखिम को दूसरे निवेशक के जोखिम के साथ स्वैप करने की अनुमति देता है", "रियायती ब्याज दरों पर किसानों को बैंकों द्वारा प्रदान किया जाने वाला ऋण का एक प्रकार", "सरकार द्वारा जारी किया गया एक बॉन्ड जो एक दशक में मुद्रास्फीति-संरक्षित रिटर्न की गारंटी देता है", "एक निजी कंपनी के ऋण पोर्टफोलियो में स्वामित्व का प्रतिनिधित्व करने वाला एक इक्विटी उपकरण"] },
            correct: 0
        },
        {
            en: { q: "In the context of mutual funds, what is an 'Exit Load'?", opts: ["A fee charged to an investor when they redeem their units before a specified period", "A commission paid to the distributor for selling the mutual fund scheme to a client", "A tax levied on the dividends distributed by the fund to the unit holders", "The cost incurred by the AMC for market research and stock selection"] },
            hi: { q: "म्यूचुअल फंड के संदर्भ में 'एक्जिट लोड' (Exit Load) क्या है?", opts: ["एक निर्दिष्ट अवधि से पहले अपनी यूनिट्स को रिडीम (भुनाने) पर निवेशक से लिया गया शुल्क", "क्लाइंट को म्यूचुअल फंड योजना बेचने के लिए वितरक को दिया जाने वाला कमीशन", "फंड द्वारा यूनिट धारकों को वितरित लाभांश पर लगाया गया कर", "बाजार अनुसंधान और स्टॉक चयन के लिए एएमसी द्वारा वहन की गई लागत"] },
            correct: 0
        },
        {
            en: { q: "What is 'Arbitrage' in financial markets?", opts: ["The practice of taking advantage of a price difference between two or more markets", "The act of buying low-quality assets to manipulate market indices", "A regulatory strategy used to stabilize the exchange rate of a currency", "The process of liquidating a company's assets to pay off creditors"] },
            hi: { q: "वित्तीय बाजारों में 'आर्बिट्रेज' (Arbitrage) क्या है?", opts: ["दो या दो से अधिक बाजारों के बीच मूल्य अंतर का लाभ उठाने की प्रथा", "बाजार सूचकांकों में हेरफेर करने के लिए कम गुणवत्ता वाली संपत्तियां खरीदने का कार्य", "मुद्रा की विनिमय दर को स्थिर करने के लिए उपयोग की जाने वाली एक नियामक रणनीति", "लेनदारों को भुगतान करने के लिए कंपनी की संपत्ति को परिसमाप्त करने की प्रक्रिया"] },
            correct: 0
        },
        {
            en: { q: "What does 'Beta' measure in relation to an equity investment?", opts: ["The volatility of a stock relative to the market benchmark", "The total dividend payout of a company over the last five years", "The debt-to-equity ratio of a firm, indicating financial leverage", "The percentage of shares held by the promoters of a company"] },
            hi: { q: "इक्विटी निवेश के संबंध में 'बीटा' (Beta) क्या मापता है?", opts: ["बाजार बेंचमार्क के सापेक्ष स्टॉक की अस्थिरता", "पिछले पांच वर्षों में कंपनी का कुल लाभांश भुगतान", "फर्म का ऋण-इक्विटी अनुपात, जो वित्तीय लीवरेज का संकेत देता है", "कंपनी के प्रमोटरों द्वारा रखे गए शेयरों का प्रतिशत"] },
            correct: 0
        },
        {
            en: { q: "Which regulatory body governs the commodity derivatives market in India?", opts: ["SEBI (Securities and Exchange Board of India)", "RBI (Reserve Bank of India)", "IRDAI (Insurance Regulatory and Development Authority of India)", "PFRDA (Pension Fund Regulatory and Development Authority)"] },
            hi: { q: "भारत में कमोडिटी डेरिवेटिव बाजार को कौन सा नियामक निकाय नियंत्रित करता है?", opts: ["सेबी (भारतीय प्रतिभूति और विनिमय बोर्ड)", "आरबीआई (भारतीय रिजर्व बैंक)", "इरडा (भारतीय बीमा नियामक और विकास प्राधिकरण)", "पीएफआरडीए (पेंशन फंड नियामक और विकास प्राधिकरण)"] },
            correct: 0
        },
        {
            en: { q: "What is the role of a 'Custodian' in the context of Mutual Funds?", opts: ["To safeguard the physical and electronic securities owned by the mutual fund", "To provide financial planning advice to individual investors", "To market the mutual fund schemes to potential investors", "To audit the financial statements of the Asset Management Company"] },
            hi: { q: "म्यूचुअल फंड के संदर्भ में 'कस्टोडियन' (Custodian) की भूमिका क्या है?", opts: ["म्यूचुअल फंड के स्वामित्व वाली भौतिक और इलेक्ट्रॉनिक प्रतिभूतियों की सुरक्षा करना", "व्यक्तिगत निवेशकों को वित्तीय योजना की सलाह देना", "संभावित निवेशकों को म्यूचुअल फंड योजनाओं का विपणन करना", "एसेट मैनेजमेंट कंपनी के वित्तीय विवरणों का ऑडिट करना"] },
            correct: 0
        },
        {
            en: { q: "What is 'Basis Risk' in hedging?", opts: ["The risk that the price of the hedging instrument will not move in perfect correlation with the asset being hedged", "The risk of a sudden change in government interest rate policy", "The risk that a broker will default on a trade execution", "The risk associated with investing in foreign currency-denominated debt instruments"] },
            hi: { q: "हेजिंग (Hedging) में 'बेसिस रिस्क' (Basis Risk) क्या है?", opts: ["यह जोखिम कि हेजिंग इंस्ट्रूमेंट की कीमत हेज की जा रही संपत्ति के साथ पूर्ण सहसंबंध (Correlation) में नहीं चलेगी", "सरकारी ब्याज दर नीति में अचानक बदलाव का जोखिम", "ट्रेड निष्पादन पर ब्रोकर के डिफॉल्ट करने का जोखिम", "विदेशी मुद्रा-मूल्यवर्गित ऋण साधनों में निवेश से जुड़ा जोखिम"] },
            correct: 0
        },
        {
            en: { q: "What is a 'Limit Order'?", opts: ["An order to buy or sell a security at a specific price or better", "An order to buy or sell a security immediately at the best available current market price", "An order to stop trading if the price reaches a certain limit", "An order to execute a trade only if a specific volume is achieved"] },
            hi: { q: "'लिमिट ऑर्डर' (Limit Order) क्या है?", opts: ["किसी विशिष्ट कीमत या उससे बेहतर पर सुरक्षा खरीदने या बेचने का ऑर्डर", "तत्काल सर्वोत्तम उपलब्ध वर्तमान बाजार मूल्य पर सुरक्षा खरीदने या बेचने का ऑर्डर", "यदि कीमत एक निश्चित सीमा तक पहुंच जाती है तो ट्रेडिंग रोकने का ऑर्डर", "किसी विशिष्ट मात्रा प्राप्त होने पर ही ट्रेड निष्पादित करने का ऑर्डर"] },
            correct: 0
        },
        {
            en: { q: "What is 'Insider Trading'?", opts: ["Trading of securities by individuals who possess non-public, material information about a company", "Buying large quantities of shares to become a significant stakeholder", "The legal process of providing tips to family members regarding stock market trends", "Trading of stocks within the same family to consolidate voting power"] },
            hi: { q: "'इनसाइडर ट्रेडिंग' (Insider Trading) क्या है?", opts: ["उन व्यक्तियों द्वारा प्रतिभूतियों का कारोबार जिनके पास किसी कंपनी के बारे में गैर-सार्वजनिक, महत्वपूर्ण जानकारी है", "एक महत्वपूर्ण हितधारक बनने के लिए बड़ी मात्रा में शेयर खरीदना", "स्टॉक मार्केट के रुझानों के बारे में परिवार के सदस्यों को टिप्स देने की कानूनी प्रक्रिया", "वोटिंग शक्ति को मजबूत करने के लिए एक ही परिवार के भीतर स्टॉक का कारोबार"] },
            correct: 0
        },
        {
            en: { q: "What is a 'Prospectus' in the context of an IPO?", opts: ["A legal document providing details about an investment offering for the sale of securities to the public", "An advertisement campaign run by the company to promote its brand image", "A summary of the company's past annual reports published in a newspaper", "A list of shareholders who are eligible to vote in the annual general meeting"] },
            hi: { q: "आईपीओ (IPO) के संदर्भ में 'प्रॉस्पेक्टस' (Prospectus) क्या है?", opts: ["सार्वजनिक रूप से प्रतिभूतियों की बिक्री के लिए निवेश पेशकश के बारे में विवरण प्रदान करने वाला एक कानूनी दस्तावेज", "कंपनी द्वारा अपनी ब्रांड छवि को बढ़ावा देने के लिए चलाया गया एक विज्ञापन अभियान", "अखबार में प्रकाशित कंपनी की पिछली वार्षिक रिपोर्टों का सारांश", "उन शेयरधारकों की सूची जो वार्षिक आम बैठक में मतदान करने के पात्र हैं"] },
            correct: 0
        },
        {
            en: { q: "What is 'Derivative'?", opts: ["A financial contract whose value is derived from the performance of an underlying asset", "A type of loan that is guaranteed by the government", "A physical asset like gold or silver kept in a bank locker", "A form of insurance that covers loss in the stock market"] },
            hi: { q: "'डेरिवेटिव' (Derivative) क्या है?", opts: ["एक वित्तीय अनुबंध जिसका मूल्य किसी अंतर्निहित परिसंपत्ति (Underlying asset) के प्रदर्शन से प्राप्त होता है", "सरकार द्वारा गारंटीकृत ऋण का एक प्रकार", "बैंक लॉकर में रखी गई सोना या चांदी जैसी भौतिक संपत्ति", "बीमा का एक रूप जो शेयर बाजार में होने वाले नुकसान को कवर करता है"] },
            correct: 0
        },
        {
            en: { q: "What is a 'Bear Market'?", opts: ["A market condition where prices are falling, or are expected to fall, over a sustained period", "A market condition where prices are rising, or are expected to rise, over a sustained period", "A state where the market is stagnant with no trading volume", "A market dominated by a single large investor controlling all prices"] },
            hi: { q: "'बियर मार्केट' (Bear Market) क्या है?", opts: ["ऐसी बाजार स्थिति जहां कीमतें गिर रही हैं, या एक निरंतर अवधि में गिरने की उम्मीद है", "ऐसी बाजार स्थिति जहां कीमतें बढ़ रही हैं, या एक निरंतर अवधि में बढ़ने की उम्मीद है", "ऐसी स्थिति जहां बाजार स्थिर है और कोई ट्रेडिंग वॉल्यूम नहीं है", "एक एकल बड़े निवेशक द्वारा नियंत्रित बाजार जहां वही सभी कीमतों को नियंत्रित करता है"] },
            correct: 0
        },
        {
            en: { q: "What is 'Equity'?", opts: ["Ownership interest in a corporation in the form of shares of stock", "A debt obligation that must be repaid with interest", "A government grant provided to startup companies", "A short-term lease agreement for industrial equipment"] },
            hi: { q: "'इक्विटी' (Equity) क्या है?", opts: ["स्टॉक के शेयरों के रूप में निगम में स्वामित्व हित", "एक ऋण दायित्व जिसे ब्याज के साथ चुकाया जाना चाहिए", "स्टार्टअप कंपनियों को प्रदान किया गया एक सरकारी अनुदान", "औद्योगिक उपकरणों के लिए एक अल्पकालिक पट्टा समझौता"] },
            correct: 0
        },
        {
            en: { q: "What is 'Dividend'?", opts: ["A portion of a company's earnings distributed to its shareholders", "The interest paid on a loan taken by a company", "The tax paid by a company on its profits", "The capital investment made by a promoter in a new project"] },
            hi: { q: "'लाभांश' (Dividend) क्या है?", opts: ["कंपनी की कमाई का एक हिस्सा जो उसके शेयरधारकों को वितरित किया जाता है", "कंपनी द्वारा लिए गए ऋण पर दिया जाने वाला ब्याज", "कंपनी द्वारा अपने मुनाफे पर भुगतान किया जाने वाला कर", "एक नई परियोजना में प्रमोटर द्वारा किया गया पूंजी निवेश"] },
            correct: 0
        },
        {
            en: { q: "What is 'KYC' (Know Your Customer)?", opts: ["A process used by financial institutions to verify the identity of their clients", "A system for tracking the performance of a stock portfolio", "A tool for calculating the tax liability of an individual", "A method for predicting the future price of a commodity"] },
            hi: { q: "'केवाईसी' (KYC - Know Your Customer) क्या है?", opts: ["वित्तीय संस्थानों द्वारा अपने ग्राहकों की पहचान सत्यापित करने के लिए उपयोग की जाने वाली एक प्रक्रिया", "स्टॉक पोर्टफोलियो के प्रदर्शन को ट्रैक करने के लिए एक प्रणाली", "किसी व्यक्ति की कर देयता की गणना करने के लिए एक उपकरण", "किसी कमोडिटी की भविष्य की कीमत की भविष्यवाणी करने की एक विधि"] },
            correct: 0
        },
        {
            en: { q: "What is 'Primary Market'?", opts: ["The market where new securities are issued and sold for the first time", "The market where investors trade existing securities among themselves", "The market for government bonds and treasury bills only", "The market for trading foreign currency exchange rates"] },
            hi: { q: "'प्राइमरी मार्केट' (Primary Market) क्या है?", opts: ["वह बाजार जहां नई प्रतिभूतियां पहली बार जारी और बेची जाती हैं", "वह बाजार जहां निवेशक मौजूदा प्रतिभूतियों का आपस में कारोबार करते हैं", "केवल सरकारी बॉन्ड और ट्रेजरी बिलों के लिए बाजार", "विदेशी मुद्रा विनिमय दरों के व्यापार के लिए बाजार"] },
            correct: 0
        },
        {
            en: { q: "What is 'Secondary Market'?", opts: ["The market where previously issued securities are traded between investors", "The market for new IPOs and follow-on public offerings", "A market regulated exclusively by private banks without government oversight", "The market for raw materials like coal and steel"] },
            hi: { q: "'सेकेंडरी मार्केट' (Secondary Market) क्या है?", opts: ["वह बाजार जहां पहले से जारी प्रतिभूतियों का निवेशकों के बीच कारोबार होता है", "नए आईपीओ और फॉलो-ऑन पब्लिक ऑफरिंग्स के लिए बाजार", "सरकार की देखरेख के बिना निजी बैंकों द्वारा विशेष रूप से विनियमित बाजार", "कोयला और स्टील जैसे कच्चे माल के लिए बाजार"] },
            correct: 0
        },
        {
            en: { q: "What is 'Face Value' of a share?", opts: ["The nominal value of a share as stated in the company's memorandum of association", "The current market price at which a share is traded", "The value of a share after accounting for all liabilities", "The price at which the share was last sold in a block deal"] },
            hi: { q: "शेयर का 'फेस वैल्यू' (Face Value) क्या है?", opts: ["कंपनी के ज्ञापन (Memorandum of association) में उल्लिखित शेयर का नाममात्र मूल्य", "वर्तमान बाजार मूल्य जिस पर शेयर का कारोबार होता है", "सभी देनदारियों का लेखा-जोखा करने के बाद शेयर का मूल्य", "वह कीमत जिस पर शेयर अंतिम बार ब्लॉक डील में बेचा गया था"] },
            correct: 0
        },
        {
            en: { q: "What is 'Book Building'?", opts: ["A process of price discovery in an IPO where the company determines the issue price based on investor demand", "The process of printing and distributing physical share certificates to investors", "The method of evaluating a company's balance sheet for tax purposes", "A technique used by brokers to artificially increase trading volumes"] },
            hi: { q: "'बुक बिल्डिंग' (Book Building) क्या है?", opts: ["आईपीओ में मूल्य खोज की एक प्रक्रिया जहां कंपनी निवेशक की मांग के आधार पर इश्यू मूल्य निर्धारित करती है", "निवेशकों को भौतिक शेयर प्रमाण पत्र प्रिंट करने और वितरित करने की प्रक्रिया", "कर उद्देश्यों के लिए कंपनी की बैलेंस शीट का मूल्यांकन करने की विधि", "ट्रेडिंग वॉल्यूम को कृत्रिम रूप से बढ़ाने के लिए ब्रोकरों द्वारा उपयोग की जाने वाली एक तकनीक"] },
            correct: 0
        },
        {
            en: { q: "What is 'Depository'?", opts: ["An institution that holds securities in electronic (dematerialized) form for investors", "A bank that provides loans to brokers for stock market operations", "An exchange where futures and options are traded", "A regulatory body that monitors corporate governance"] },
            hi: { q: "'डिपॉजिटरी' (Depository) क्या है?", opts: ["एक संस्था जो निवेशकों के लिए इलेक्ट्रॉनिक (डीमटेरियलाइज्ड) रूप में प्रतिभूतियों को रखती है", "एक बैंक जो ब्रोकरों को शेयर बाजार संचालन के लिए ऋण प्रदान करता है", "एक एक्सचेंज जहां फ्यूचर्स और ऑप्शंस का कारोबार होता है", "एक नियामक निकाय जो कॉर्पोरेट प्रशासन की निगरानी करता है"] },
            correct: 0
        },
        {
            en: { q: "What is 'Dematerialization'?", opts: ["The process of converting physical share certificates into electronic format", "The physical printing of electronic records for documentation", "The liquidation of a company's assets during bankruptcy", "The transfer of shares from one depository to another"] },
            hi: { q: "'डीमटेरियलाइजेशन' (Dematerialization) क्या है?", opts: ["भौतिक शेयर प्रमाण पत्रों को इलेक्ट्रॉनिक प्रारूप में बदलने की प्रक्रिया", "दस्तावेज के लिए इलेक्ट्रॉनिक रिकॉर्ड की भौतिक छपाई", "दिवालियापन के दौरान कंपनी की संपत्ति का परिसमापन", "एक डिपॉजिटरी से दूसरे में शेयरों का हस्तांतरण"] },
            correct: 0
        },
        {
            en: { q: "What is 'Asset Allocation'?", opts: ["The strategy of dividing an investment portfolio among different asset categories like stocks, bonds, and cash", "The process of selecting the best stocks in a specific sector", "The act of donating a portion of company profit to social causes", "The calculation of total tax payable on investment gains"] },
            hi: { q: "'एसेट एलोकेशन' (Asset Allocation) क्या है?", opts: ["स्टॉक, बॉन्ड और नकद जैसी विभिन्न परिसंपत्ति श्रेणियों के बीच निवेश पोर्टफोलियो को विभाजित करने की रणनीति", "किसी विशिष्ट क्षेत्र में सर्वश्रेष्ठ स्टॉक चुनने की प्रक्रिया", "सामाजिक उद्देश्यों के लिए कंपनी के लाभ का एक हिस्सा दान करने का कार्य", "निवेश लाभ पर देय कुल कर की गणना"] },
            correct: 0
        },
        {
            en: { q: "What is 'Net Asset Value' (NAV)?", opts: ["The market value of a mutual fund's assets minus its liabilities, divided by the number of outstanding units", "The total amount of commission paid to the distributor of the fund", "The face value of the securities held by the fund", "The profit earned by the fund manager during a quarter"] },
            hi: { q: "'नेट एसेट वैल्यू' (NAV) क्या है?", opts: ["म्यूचुअल फंड की परिसंपत्तियों का बाजार मूल्य घटाकर उसकी देनदारियां, जिसे बकाया यूनिट्स की संख्या से विभाजित किया गया है", "फंड के वितरक को दिया गया कुल कमीशन", "फंड द्वारा रखी गई प्रतिभूतियों का फेस वैल्यू", "फंड मैनेजर द्वारा एक तिमाही के दौरान अर्जित लाभ"] },
            correct: 0
        },
        {
            en: { q: "What is 'Portfolio Management Service' (PMS)?", opts: ["A professional service where a portfolio manager makes investment decisions on behalf of high-net-worth clients", "A self-service platform for individual investors to trade stocks online", "A low-cost index fund managed by a robot", "A type of insurance policy that protects against financial loss"] },
            hi: { q: "'पोर्टफोलियो मैनेजमेंट सर्विस' (PMS) क्या है?", opts: ["एक पेशेवर सेवा जहां एक पोर्टफोलियो मैनेजर उच्च-नेट-वर्थ क्लाइंट्स की ओर से निवेश निर्णय लेता है", "व्यक्तिगत निवेशकों के लिए ऑनलाइन स्टॉक ट्रेड करने के लिए एक सेल्फ-सर्विस प्लेटफॉर्म", "रोबोट द्वारा प्रबंधित एक कम लागत वाला इंडेक्स फंड", "वित्तीय नुकसान से बचाने वाली एक प्रकार की बीमा पॉलिसी"] },
            correct: 0
        },
        {
            en: { q: "What is 'Systematic Investment Plan' (SIP)?", opts: ["A method of investing a fixed amount of money at regular intervals in a mutual fund scheme", "A strategy to invest all money at once during a market crash", "A plan for retirement planning managed by the government", "A technique to diversify investments across international markets only"] },
            hi: { q: "'सिस्टमैटिक इन्वेस्टमेंट प्लान' (SIP) क्या है?", opts: ["म्यूचुअल फंड योजना में नियमित अंतराल पर निश्चित राशि निवेश करने की एक विधि", "बाजार में गिरावट के दौरान एक साथ सारा पैसा निवेश करने की एक रणनीति", "सरकार द्वारा प्रबंधित सेवानिवृत्ति योजना के लिए एक योजना", "केवल अंतरराष्ट्रीय बाजारों में निवेश को विविधता लाने की एक तकनीक"] },
            correct: 0
        },
        {
            en: { q: "What is 'Volatile' in the context of stock market?", opts: ["Refers to the rapid and unpredictable change in the price of a stock or market index", "Refers to the slow and steady growth of a company's profit", "Refers to the stable and fixed dividend payout of a stock", "Refers to the long-term investment holding period of an investor"] },
            hi: { q: "शेयर बाजार के संदर्भ में 'वोलाटाइल' (Volatile / अस्थिर) का क्या अर्थ है?", opts: ["स्टॉक या बाजार सूचकांक की कीमत में तेजी से और अप्रत्याशित बदलाव को संदर्भित करता है", "कंपनी के लाभ की धीमी और स्थिर वृद्धि को संदर्भित करता है", "स्टॉक के स्थिर और निश्चित लाभांश भुगतान को संदर्भित करता है", "निवेशक की दीर्घकालिक निवेश होल्डिंग अवधि को संदर्भित करता है"] },
            correct: 0
        },
        {
            en: { q: "What is 'Capital Gain'?", opts: ["The profit realized from the sale of an investment or asset", "The interest earned on a bank savings account", "The annual salary earned by an employee", "The dividend received by a shareholder"] },
            hi: { q: "'कैपिटल गेन' (Capital Gain / पूंजीगत लाभ) क्या है?", opts: ["निवेश या परिसंपत्ति की बिक्री से प्राप्त लाभ", "बैंक बचत खाते पर अर्जित ब्याज", "कर्मचारी द्वारा अर्जित वार्षिक वेतन", "शेयरधारक द्वारा प्राप्त लाभांश"] },
            correct: 0
        },
        {
            en: { q: "What is 'Book Value'?", opts: ["The net value of a company's assets as recorded on its balance sheet", "The current stock price at which the company is trading", "The total amount of revenue generated by the company in a year", "The amount of cash held by the company in its bank accounts"] },
            hi: { q: "'बुक वैल्यू' (Book Value) क्या है?", opts: ["बैलेंस शीट पर दर्ज कंपनी की परिसंपत्तियों का शुद्ध मूल्य", "वर्तमान स्टॉक मूल्य जिस पर कंपनी का कारोबार हो रहा है", "एक वर्ष में कंपनी द्वारा उत्पन्न कुल राजस्व", "कंपनी के बैंक खातों में रखी गई नकदी की मात्रा"] },
            correct: 0
        },
        {
            en: { q: "What is 'Bull Market'?", opts: ["A market condition where prices are rising, or are expected to rise, over a sustained period", "A market condition where prices are falling, or are expected to fall, over a sustained period", "A state where the market is closed for holidays", "A market where only government securities are traded"] },
            hi: { q: "'बुल मार्केट' (Bull Market) क्या है?", opts: ["ऐसी बाजार स्थिति जहां कीमतें बढ़ रही हैं, या एक निरंतर अवधि में बढ़ने की उम्मीद है", "ऐसी बाजार स्थिति जहां कीमतें गिर रही हैं, या एक निरंतर अवधि में गिरने की उम्मीद है", "ऐसी स्थिति जहां बाजार छुट्टियों के लिए बंद है", "एक बाजार जहां केवल सरकारी प्रतिभूतियों का कारोबार होता है"] },
            correct: 0
        },
        {
            en: { q: "What is 'Liquidity' in financial markets?", opts: ["The ease with which an asset can be converted into cash without affecting its market price", "The amount of profit a company makes in a fiscal year", "The number of employees working in a brokerage firm", "The speed at which a computer processes a trade order"] },
            hi: { q: "वित्तीय बाजारों में 'लिक्विडिटी' (Liquidity / तरलता) क्या है?", opts: ["वह आसानी जिसके साथ किसी परिसंपत्ति को उसके बाजार मूल्य को प्रभावित किए बिना नकदी में परिवर्तित किया जा सकता है", "वित्तीय वर्ष में कंपनी द्वारा कमाया गया लाभ", "ब्रोकरेज फर्म में काम करने वाले कर्मचारियों की संख्या", "वह गति जिस पर एक कंप्यूटर ट्रेड ऑर्डर संसाधित करता है"] },
            correct: 0
        },
        {
            en: { q: "What is 'Diversification'?", opts: ["The practice of spreading investments across different assets, sectors, and regions to reduce risk", "The act of putting all money in one high-performing stock", "The strategy of buying only government bonds", "The process of ignoring market trends and holding stocks for decades"] },
            hi: { q: "'विविधीकरण' (Diversification) क्या है?", opts: ["जोखिम को कम करने के लिए विभिन्न संपत्तियों, क्षेत्रों और क्षेत्रों में निवेश फैलाने की प्रथा", "एक ही उच्च प्रदर्शन करने वाले स्टॉक में सारा पैसा लगाने का कार्य", "केवल सरकारी बॉन्ड खरीदने की रणनीति", "बाजार के रुझानों को अनदेखा करने और दशकों तक स्टॉक रखने की प्रक्रिया"] },
            correct: 0
        },
        {
            en: { q: "What is 'Underlying Asset'?", opts: ["The asset upon which a derivative's value depends, such as a stock, commodity, or currency", "The physical building where a company operates its business", "The total amount of cash held by the company's promoters", "A type of insurance policy used to cover stock losses"] },
            hi: { q: "'अंतर्निहित परिसंपत्ति' (Underlying Asset) क्या है?", opts: ["वह परिसंपत्ति जिस पर डेरिवेटिव का मूल्य निर्भर करता है, जैसे कि स्टॉक, कमोडिटी, या मुद्रा", "वह भौतिक इमारत जहां कंपनी अपना व्यवसाय संचालित करती है", "कंपनी के प्रमोटरों के पास मौजूद नकदी की कुल राशि", "स्टॉक के नुकसान को कवर करने के लिए उपयोग की जाने वाली एक प्रकार की बीमा पॉलिसी"] },
            correct: 0
        },
        {
            en: { q: "What is a 'Call Option'?", opts: ["A contract giving the buyer the right to purchase an underlying asset at a specified price within a specific time", "A contract giving the seller the right to force the buyer to purchase an asset", "A type of high-interest loan provided by private banks", "An agreement to sell a stock at a lower price than the current market price"] },
            hi: { q: "'कॉल ऑप्शन' (Call Option) क्या है?", opts: ["एक अनुबंध जो खरीदार को एक विशिष्ट समय के भीतर एक निर्दिष्ट मूल्य पर अंतर्निहित परिसंपत्ति खरीदने का अधिकार देता है", "एक अनुबंध जो विक्रेता को खरीदार को संपत्ति खरीदने के लिए मजबूर करने का अधिकार देता है", "निजी बैंकों द्वारा प्रदान किया जाने वाला उच्च-ब्याज ऋण का एक प्रकार", "वर्तमान बाजार मूल्य से कम कीमत पर स्टॉक बेचने का एक समझौता"] },
            correct: 0
        },
        {
            en: { q: "What is a 'Put Option'?", opts: ["A contract giving the buyer the right to sell an underlying asset at a specified price within a specific time", "A contract that guarantees a fixed return on equity investment", "A type of corporate bond with a very long maturity period", "A strategy used to buy stocks during an IPO"] },
            hi: { q: "'पुट ऑप्शन' (Put Option) क्या है?", opts: ["एक अनुबंध जो खरीदार को एक विशिष्ट समय के भीतर एक निर्दिष्ट मूल्य पर अंतर्निहित परिसंपत्ति बेचने का अधिकार देता है", "एक अनुबंध जो इक्विटी निवेश पर निश्चित रिटर्न की गारंटी देता है", "बहुत लंबी परिपक्वता अवधि वाला कॉर्पोरेट बॉन्ड का एक प्रकार", "आईपीओ के दौरान स्टॉक खरीदने के लिए उपयोग की जाने वाली रणनीति"] },
            correct: 0
        },
        {
            en: { q: "What is 'Expiry Date' in derivatives?", opts: ["The date on which a derivative contract ceases to exist and settlement takes place", "The date on which a company pays dividends to its shareholders", "The date on which an IPO is officially closed for bidding", "The date on which a mutual fund declares its quarterly results"] },
            hi: { q: "डेरिवेटिव्स में 'एक्सपायरी डेट' (Expiry Date) क्या है?", opts: ["वह तारीख जिस दिन एक डेरिवेटिव अनुबंध का अस्तित्व समाप्त हो जाता है और निपटान होता है", "वह तारीख जिस दिन कंपनी अपने शेयरधारकों को लाभांश का भुगतान करती है", "वह तारीख जिस दिन आईपीओ आधिकारिक तौर पर बोली लगाने के लिए बंद हो जाता है", "वह तारीख जिस दिन म्यूचुअल फंड अपने तिमाही परिणाम घोषित करता है"] },
            correct: 0
        },
        {
            en: { q: "What is 'Strike Price'?", opts: ["The pre-determined price at which the buyer of an option can buy or sell the underlying asset", "The current market price of a stock on the stock exchange", "The price at which the company initially issued its shares", "The commission charged by the broker for the trade"] },
            hi: { q: "'स्ट्राइक प्राइस' (Strike Price) क्या है?", opts: ["पूर्व-निर्धारित मूल्य जिस पर एक ऑप्शन का खरीदार अंतर्निहित परिसंपत्ति को खरीद या बेच सकता है", "स्टॉक एक्सचेंज पर स्टॉक की वर्तमान बाजार कीमत", "वह कीमत जिस पर कंपनी ने शुरू में अपने शेयर जारी किए थे", "ट्रेड के लिए ब्रोकर द्वारा लिया गया कमीशन"] },
            correct: 0
        },
        {
            en: { q: "What is 'Premium' in the context of options?", opts: ["The price paid by the buyer of an option to the seller for the rights acquired", "The extra commission paid to the broker for executing a trade", "The tax paid on the profit earned from the sale of an option", "The value of an option at the time of expiry"] },
            hi: { q: "ऑप्शंस के संदर्भ में 'प्रीमियम' (Premium) क्या है?", opts: ["प्राप्त अधिकारों के लिए ऑप्शन के खरीदार द्वारा विक्रेता को भुगतान की गई कीमत", "ट्रेड निष्पादित करने के लिए ब्रोकर को दिया गया अतिरिक्त कमीशन", "ऑप्शन की बिक्री से अर्जित लाभ पर भुगतान किया गया कर", "एक्सपायरी के समय ऑप्शन का मूल्य"] },
            correct: 0
        },
        {
            en: { q: "What is 'Hedging'?", opts: ["An investment strategy used to reduce the risk of adverse price movements in an asset", "The practice of borrowing money to invest in high-risk stocks", "The process of selling all assets to avoid market losses", "A method of predicting future economic trends"] },
            hi: { q: "'हेजिंग' (Hedging) क्या है?", opts: ["किसी परिसंपत्ति में प्रतिकूल मूल्य आंदोलनों के जोखिम को कम करने के लिए उपयोग की जाने वाली एक निवेश रणनीति", "उच्च-जोखिम वाले स्टॉक में निवेश करने के लिए पैसे उधार लेने की प्रथा", "बाजार के नुकसान से बचने के लिए सभी संपत्तियों को बेचने की प्रक्रिया", "भविष्य के आर्थिक रुझानों की भविष्यवाणी करने की एक विधि"] },
            correct: 0
        },
        // --- NISM Advanced Comprehensive Mix Test: Balanced Coverage (Set 17) ---
        {
            en: { q: "Which organization is primarily responsible for the supervision of the Indian stock exchanges to ensure investor protection?", opts: ["SEBI", "RBI", "Ministry of Finance", "NSE"] },
            hi: { q: "निवेशक संरक्षण सुनिश्चित करने के लिए भारतीय स्टॉक एक्सचेंजों की निगरानी के लिए मुख्य रूप से कौन सा संगठन जिम्मेदार है?", opts: ["सेबी (SEBI)", "आरबीआई (RBI)", "वित्त मंत्रालय", "एनएसई (NSE)"] },
            correct: 0
        },
        {
            en: { q: "What is the primary objective of a 'Balanced Hybrid Fund'?", opts: ["Providing both growth and income by investing in equity and debt", "Investing only in high-risk derivative contracts", "Targeting tax-free returns through gold bonds", "Generating returns exclusively from international market indices"] },
            hi: { q: "'बैलेंस्ड हाइब्रिड फंड' का प्राथमिक उद्देश्य क्या है?", opts: ["इक्विटी और डेट (ऋण) में निवेश करके विकास और आय दोनों प्रदान करना", "केवल उच्च-जोखिम वाले डेरिवेटिव अनुबंधों में निवेश करना", "गोल्ड बॉन्ड के माध्यम से कर-मुक्त रिटर्न को लक्षित करना", "विशेष रूप से अंतरराष्ट्रीय बाजार सूचकांकों से रिटर्न उत्पन्न करना"] },
            correct: 0
        },
        {
            en: { q: "In the Black-Scholes model, what does 'Theta' represent?", opts: ["The rate of change of option price with respect to the passage of time", "The sensitivity of option price to changes in underlying asset price", "The rate of change of option price with respect to interest rate", "The sensitivity to volatility changes"] },
            hi: { q: "ब्लैक-स्कोल्स मॉडल में 'थिटा' (Theta) क्या दर्शाता है?", opts: ["समय बीतने के संबंध में ऑप्शन मूल्य में बदलाव की दर", "अंतर्निहित परिसंपत्ति मूल्य में बदलाव के प्रति ऑप्शन मूल्य की संवेदनशीलता", "ब्याज दर के संबंध में ऑप्शन मूल्य में बदलाव की दर", "अस्थिरता (Volatility) में बदलाव के प्रति संवेदनशीलता"] },
            correct: 0
        },
        {
            en: { q: "What is the 'Face Value' of a bond typically associated with?", opts: ["The amount the issuer agrees to pay the bondholder at maturity", "The market price at which the bond is traded daily", "The interest rate paid by the bond issuer", "The discount offered by the broker during the bond purchase"] },
            hi: { q: "बॉन्ड का 'फेस वैल्यू' (Face Value) आमतौर पर किससे जुड़ा होता है?", opts: ["परिपक्वता पर बॉन्डधारक को भुगतान करने के लिए जारीकर्ता द्वारा सहमत राशि", "दैनिक आधार पर बॉन्ड के कारोबार की बाजार कीमत", "बॉन्ड जारीकर्ता द्वारा भुगतान की जाने वाली ब्याज दर", "बॉन्ड खरीद के दौरान ब्रोकर द्वारा दी जाने वाली छूट"] },
            correct: 0
        },
        {
            en: { q: "Which of these is a key feature of 'Dematerialization'?", opts: ["Elimination of risks associated with physical certificates like loss or theft", "Increased costs related to printing certificates", "Reduction in the speed of trading", "Requirement to maintain physical storage for securities"] },
            hi: { q: "'डीमटेरियलाइजेशन' (Dematerialization) की एक प्रमुख विशेषता क्या है?", opts: ["खो जाने या चोरी होने जैसे भौतिक प्रमाण पत्रों से जुड़े जोखिमों का उन्मूलन", "प्रमाण पत्र प्रिंट करने से संबंधित लागत में वृद्धि", "ट्रेडिंग की गति में कमी", "प्रतिभूतियों के लिए भौतिक भंडारण बनाए रखने की आवश्यकता"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI rules, what is the maximum time for an IPO to be listed after the closure of the issue?", opts: ["T+3 days", "T+7 days", "T+15 days", "T+30 days"] },
            hi: { q: "सेबी नियमों के तहत, इश्यू बंद होने के बाद आईपीओ के सूचीबद्ध होने के लिए अधिकतम समय क्या है?", opts: ["T+3 दिन", "T+7 दिन", "T+15 दिन", "T+30 दिन"] },
            correct: 0
        },
        {
            en: { q: "What does 'Short Selling' mean in equity markets?", opts: ["Selling securities one does not own in anticipation of a price decline", "Buying shares and holding them for a long duration", "Selling shares only during market peaks", "Buying shares on behalf of a third party"] },
            hi: { q: "इक्विटी बाजारों में 'शॉर्ट सेलिंग' (Short Selling) का क्या अर्थ है?", opts: ["कीमत में गिरावट की प्रत्याशा में उन प्रतिभूतियों को बेचना जो आपके पास नहीं हैं", "शेयर खरीदना और उन्हें लंबी अवधि के लिए रखना", "शेयर केवल बाजार के शिखर पर बेचना", "किसी तीसरे पक्ष की ओर से शेयर खरीदना"] },
            correct: 0
        },
        {
            en: { q: "Which instrument is used to hedge against interest rate risk in banking?", opts: ["Interest Rate Swaps", "Equity Options", "Gold Futures", "Real Estate Investment Trusts"] },
            hi: { q: "बैंकिंग में ब्याज दर जोखिम (Interest rate risk) के खिलाफ हेजिंग के लिए किस उपकरण का उपयोग किया जाता है?", opts: ["इंटरेस्ट रेट स्वैप (Interest Rate Swaps)", "इक्विटी ऑप्शंस", "गोल्ड फ्यूचर्स", "रियल एस्टेट इन्वेस्टमेंट ट्रस्ट (REITs)"] },
            correct: 0
        },
        {
            en: { q: "In mutual funds, what is the 'Expense Ratio'?", opts: ["The annual percentage of fund assets used to cover management and administrative expenses", "The fee paid to the stock exchange for listing the fund", "The tax deducted from the investor's profits", "The commission paid to the fund's auditor"] },
            hi: { q: "म्यूचुअल फंड में 'एक्सपेंस रेशियो' (Expense Ratio) क्या है?", opts: ["प्रबंधन और प्रशासनिक खर्चों को कवर करने के लिए उपयोग की जाने वाली फंड परिसंपत्तियों का वार्षिक प्रतिशत", "फंड को सूचीबद्ध करने के लिए स्टॉक एक्सचेंज को दिया गया शुल्क", "निवेशक के लाभ से काटा गया कर", "फंड के ऑडिटर को दिया गया कमीशन"] },
            correct: 0
        },
        {
            en: { q: "What is the function of the 'Depositories Act, 1996'?", opts: ["To regulate the electronic maintenance and transfer of securities", "To define the minimum capital requirements for brokerage firms", "To manage the fiscal policy of the country", "To oversee the export of commodities"] },
            hi: { q: "'डिपॉजिटरी अधिनियम, 1996' का कार्य क्या है?", opts: ["प्रतिभूतियों के इलेक्ट्रॉनिक रखरखाव और हस्तांतरण को विनियमित करना", "ब्रोकरेज फर्मों के लिए न्यूनतम पूंजी आवश्यकताओं को परिभाषित करना", "देश की राजकोषीय नीति का प्रबंधन करना", "वस्तुओं (Commodities) के निर्यात की देखरेख करना"] },
            correct: 0
        },
        {
            en: { q: "What is the primary role of a 'Portfolio Manager' under SEBI (PMS) Regulations?", opts: ["Managing investments of clients based on a customized strategy", "Providing general tax advice to the public", "Selling insurance products to retail clients", "Operating a commercial bank branch"] },
            hi: { q: "सेबी (पीएमएस) नियमों के तहत 'पोर्टफोलियो मैनेजर' की प्राथमिक भूमिका क्या है?", opts: ["अनुकूलित रणनीति के आधार पर क्लाइंट्स के निवेश का प्रबंधन करना", "जनता को सामान्य कर सलाह प्रदान करना", "खुदरा ग्राहकों को बीमा उत्पाद बेचना", "एक वाणिज्यिक बैंक शाखा का संचालन करना"] },
            correct: 0
        },
        {
            en: { q: "Which index measures the performance of the largest 50 companies listed on the NSE?", opts: ["Nifty 50", "BSE Sensex", "Bank Nifty", "Nifty Next 50"] },
            hi: { q: "कौन सा सूचकांक एनएसई (NSE) पर सूचीबद्ध सबसे बड़ी 50 कंपनियों के प्रदर्शन को मापता है?", opts: ["निफ्टी 50 (Nifty 50)", "बीएसई सेंसेक्स", "बैंक निफ्टी", "निफ्टी नेक्स्ट 50"] },
            correct: 0
        },
        {
            en: { q: "What is 'Market Risk'?", opts: ["Risk of loss due to changes in overall market conditions like price or interest rates", "Risk of a specific company going bankrupt", "Risk related to the operational failure of a brokerage", "Risk associated with inflation in foreign countries"] },
            hi: { q: "'मार्केट रिस्क' (बाजार जोखिम) क्या है?", opts: ["कीमत या ब्याज दरों जैसी समग्र बाजार स्थितियों में बदलाव के कारण नुकसान का जोखिम", "किसी विशिष्ट कंपनी के दिवालिया होने का जोखिम", "ब्रोकरेज की परिचालन विफलता से संबंधित जोखिम", "विदेशी देशों में मुद्रास्फीति से जुड़ा जोखिम"] },
            correct: 0
        },
        {
            en: { q: "What is a 'Limit Order' in trading?", opts: ["An order to buy/sell at a specified price or better", "An order to buy/sell at the current market price", "An order that stays active indefinitely", "An order restricted to institutional investors only"] },
            hi: { q: "ट्रेडिंग में 'लिमिट ऑर्डर' क्या है?", opts: ["निर्दिष्ट मूल्य या उससे बेहतर पर खरीदने/बेचने का ऑर्डर", "वर्तमान बाजार मूल्य पर खरीदने/बेचने का ऑर्डर", "एक ऑर्डर जो अनिश्चित काल तक सक्रिय रहता है", "केवल संस्थागत निवेशकों तक सीमित ऑर्डर"] },
            correct: 0
        },
        {
            en: { q: "What is the 'Current Ratio' used for?", opts: ["To measure a company's ability to pay its short-term liabilities with short-term assets", "To calculate the long-term debt-to-equity ratio", "To determine the dividend yield of a stock", "To check the volatility of a stock"] },
            hi: { q: "'करंट रेशियो' का उपयोग किसके लिए किया जाता है?", opts: ["अल्पकालिक परिसंपत्तियों के साथ कंपनी की अल्पकालिक देनदारियों का भुगतान करने की क्षमता को मापने के लिए", "दीर्घकालिक ऋण-इक्विटी अनुपात की गणना करने के लिए", "स्टॉक के लाभांश यील्ड को निर्धारित करने के लिए", "स्टॉक की अस्थिरता की जांच करने के लिए"] },
            correct: 0
        },
        {
            en: { q: "Which of the following is a type of 'Collective Investment Scheme'?", opts: ["Mutual Fund", "Direct stock investment", "Bank savings account", "Corporate fixed deposit"] },
            hi: { q: "निम्नलिखित में से कौन सा 'कलेक्टिव इन्वेस्टमेंट स्कीम' (सामूहिक निवेश योजना) का एक प्रकार है?", opts: ["म्यूचुअल फंड", "प्रत्यक्ष स्टॉक निवेश", "बैंक बचत खाता", "कॉर्पोरेट फिक्स्ड डिपॉजिट"] },
            correct: 0
        },
        {
            en: { q: "What is 'Insider Trading' considered as in India?", opts: ["Illegal and punishable offence", "A standard business practice", "A necessary action for market liquidity", "Allowed only for independent directors"] },
            hi: { q: "भारत में 'इनसाइडर ट्रेडिंग' को क्या माना जाता है?", opts: ["अवैध और दंडनीय अपराध", "एक मानक व्यावसायिक अभ्यास", "बाजार की तरलता के लिए एक आवश्यक कार्रवाई", "केवल स्वतंत्र निदेशकों के लिए अनुमत"] },
            correct: 0
        },
        {
            en: { q: "What is the 'Strike Price' in an option contract?", opts: ["The price at which the underlying asset can be bought or sold", "The commission paid to the broker", "The current market price of the option", "The time value of the option"] },
            hi: { q: "ऑप्शन अनुबंध में 'स्ट्राइक प्राइस' क्या है?", opts: ["वह मूल्य जिस पर अंतर्निहित परिसंपत्ति खरीदी या बेची जा सकती है", "ब्रोकर को दिया गया कमीशन", "ऑप्शन का वर्तमान बाजार मूल्य", "ऑप्शन का समय मूल्य"] },
            correct: 0
        },
        {
            en: { q: "What does 'Gilt Fund' invest in?", opts: ["Government securities", "Corporate bonds", "High-risk equity", "International derivatives"] },
            hi: { q: "'गिल्ट फंड' किसमें निवेश करता है?", opts: ["सरकारी प्रतिभूतियां (Government securities)", "कॉर्पोरेट बॉन्ड", "उच्च-जोखिम वाली इक्विटी", "अंतरराष्ट्रीय डेरिवेटिव"] },
            correct: 0
        },
        {
            en: { q: "What is 'Asset Backed Security'?", opts: ["A financial security collateralized by a pool of assets such as loans or leases", "A security issued by the government", "A share of a new tech company", "A type of derivative without any underlying asset"] },
            hi: { q: "'एसेट बैक्ड सिक्योरिटी' क्या है?", opts: ["ऋण या पट्टे जैसी परिसंपत्तियों के पूल द्वारा संपार्श्विक (Collateralized) एक वित्तीय सुरक्षा", "सरकार द्वारा जारी सुरक्षा", "एक नई टेक कंपनी का शेयर", "बिना किसी अंतर्निहित परिसंपत्ति के डेरिवेटिव का एक प्रकार"] },
            correct: 0
        },
        {
            en: { q: "Which document contains all details of an IPO?", opts: ["Red Herring Prospectus", "Annual Report", "Balance Sheet", "Cash Flow Statement"] },
            hi: { q: "आईपीओ का पूरा विवरण किस दस्तावेज में होता है?", opts: ["रेड हेरिंग प्रॉस्पेक्टस", "वार्षिक रिपोर्ट", "बैलेंस शीट", "कैश फ्लो स्टेटमेंट"] },
            correct: 0
        },
        {
            en: { q: "What is the primary function of 'ASBA' in IPOs?", opts: ["Blocking the application amount in the investor's bank account until allotment", "Automatically selling shares on listing day", "Providing loans to investors for IPO application", "Calculating the tax liability of the investor"] },
            hi: { q: "आईपीओ में 'ASBA' का प्राथमिक कार्य क्या है?", opts: ["आवंटन तक निवेशक के बैंक खाते में आवेदन राशि को ब्लॉक करना", "लिस्टिंग के दिन स्वचालित रूप से शेयर बेचना", "आईपीओ आवेदन के लिए निवेशकों को ऋण प्रदान करना", "निवेशक की कर देयता की गणना करना"] },
            correct: 0
        },
        {
            en: { q: "Which of these is a money market instrument?", opts: ["Treasury Bill", "Long-term Corporate Bond", "Equity Share", "Real Estate"] },
            hi: { q: "इनमें से कौन सा मनी मार्केट इंस्ट्रूमेंट है?", opts: ["ट्रेजरी बिल", "दीर्घकालिक कॉर्पोरेट बॉन्ड", "इक्विटी शेयर", "रियल एस्टेट"] },
            correct: 0
        },
        {
            en: { q: "What is 'Dividend Yield'?", opts: ["Annual dividend per share divided by the stock price", "The total profit of the company", "The tax rate on dividends", "The growth rate of the stock price"] },
            hi: { q: "'लाभांश यील्ड' (Dividend Yield) क्या है?", opts: ["प्रति शेयर वार्षिक लाभांश को स्टॉक मूल्य से विभाजित किया गया", "कंपनी का कुल लाभ", "लाभांश पर कर की दर", "स्टॉक मूल्य की विकास दर"] },
            correct: 0
        },
        {
            en: { q: "What is 'NAV'?", opts: ["Net Asset Value of a mutual fund unit", "Nominal Asset Value of a stock", "Net Annual Volume of trade", "National Accounting Value"] },
            hi: { q: "'NAV' क्या है?", opts: ["म्यूचुअल फंड यूनिट का नेट एसेट वैल्यू", "स्टॉक का नाममात्र एसेट वैल्यू", "ट्रेड का नेट वार्षिक वॉल्यूम", "राष्ट्रीय लेखांकन मूल्य"] },
            correct: 0
        },
        {
            en: { q: "Which authority regulates the insurance sector in India?", opts: ["IRDAI", "SEBI", "RBI", "PFRDA"] },
            hi: { q: "भारत में बीमा क्षेत्र को कौन सा प्राधिकरण नियंत्रित करता है?", opts: ["इरडा (IRDAI)", "सेबी (SEBI)", "आरबीआई (RBI)", "पीएफआरडीए (PFRDA)"] },
            correct: 0
        },
        {
            en: { q: "What is a 'Blue Chip' company?", opts: ["A large, well-established, and financially sound company", "A newly listed startup with high growth potential", "A company that deals only in gold", "A government-owned utility company"] },
            hi: { q: "'ब्लू चिप' कंपनी क्या है?", opts: ["एक बड़ी, सुस्थापित और आर्थिक रूप से मजबूत कंपनी", "उच्च विकास क्षमता वाली नई सूचीबद्ध स्टार्टअप", "एक कंपनी जो केवल सोने में काम करती है", "एक सरकारी स्वामित्व वाली उपयोगिता कंपनी"] },
            correct: 0
        },
        {
            en: { q: "In which market do companies raise capital for the first time?", opts: ["Primary Market", "Secondary Market", "Derivative Market", "Foreign Exchange Market"] },
            hi: { q: "कंपनियां पहली बार पूंजी किस बाजार में जुटाती हैं?", opts: ["प्राइमरी मार्केट", "सेकेंडरी मार्केट", "डेरिवेटिव मार्केट", "विदेशी मुद्रा बाजार"] },
            correct: 0
        },
        {
            en: { q: "What is the 'Margin' in derivative trading?", opts: ["The collateral deposited by an investor to cover potential losses", "The commission paid to the exchange", "The profit earned from a trade", "The tax deducted on derivatives"] },
            hi: { q: "डेरिवेटिव ट्रेडिंग में 'मार्जिन' क्या है?", opts: ["संभावित नुकसान को कवर करने के लिए निवेशक द्वारा जमा की गई संपार्श्विक (Collateral)", "एक्सचेंज को दिया गया कमीशन", "ट्रेड से अर्जित लाभ", "डेरिवेटिव पर काटा गया कर"] },
            correct: 0
        },
        {
            en: { q: "What is a 'Mutual Fund'?", opts: ["A financial vehicle that pools money from many investors to invest in securities", "A bank that gives home loans", "A company that manufactures gold coins", "An exchange where stocks are traded"] },
            hi: { q: "'म्यूचुअल फंड' क्या है?", opts: ["एक वित्तीय वाहन जो प्रतिभूतियों में निवेश करने के लिए कई निवेशकों से पैसा जमा करता है", "एक बैंक जो गृह ऋण देता है", "सोने के सिक्के बनाने वाली कंपनी", "एक एक्सचेंज जहां स्टॉक का कारोबार होता है"] },
            correct: 0
        },
        {
            en: { q: "What is 'Yield to Maturity' (YTM)?", opts: ["The total return anticipated on a bond if held until it matures", "The current interest rate of the bank", "The dividend paid by a company", "The inflation rate of the economy"] },
            hi: { q: "'यील्ड टू मैच्योरिटी' (YTM) क्या है?", opts: ["यदि परिपक्वता तक रखा जाए तो बॉन्ड पर प्रत्याशित कुल रिटर्न", "बैंक की वर्तमान ब्याज दर", "कंपनी द्वारा भुगतान किया गया लाभांश", "अर्थव्यवस्था की मुद्रास्फीति दर"] },
            correct: 0
        },
        {
            en: { q: "What is the 'Price-to-Earnings' (P/E) ratio?", opts: ["A ratio for valuing a company that measures its current share price relative to its per-share earnings", "The ratio of total assets to total liabilities", "The ratio of dividends to stock price", "The ratio of sales to cost of goods sold"] },
            hi: { q: "'प्राइस-टू-अर्निंग्स' (P/E) अनुपात क्या है?", opts: ["एक कंपनी के मूल्यांकन के लिए अनुपात जो उसकी प्रति-शेयर कमाई के सापेक्ष उसकी वर्तमान शेयर कीमत को मापता है", "कुल परिसंपत्तियों का कुल देनदारियों से अनुपात", "लाभांश का स्टॉक मूल्य से अनुपात", "बिक्री का बेची गई वस्तुओं की लागत से अनुपात"] },
            correct: 0
        },
        {
            en: { q: "Which market is known for trading foreign currencies?", opts: ["Forex Market", "Stock Market", "Bond Market", "Commodity Market"] },
            hi: { q: "कौन सा बाजार विदेशी मुद्राओं के व्यापार के लिए जाना जाता है?", opts: ["फॉरेक्स मार्केट (Forex Market)", "शेयर बाजार", "बॉन्ड मार्केट", "कमोडिटी मार्केट"] },
            correct: 0
        },
        {
            en: { q: "What is a 'Credit Rating'?", opts: ["An assessment of the creditworthiness of a borrower", "The salary of a corporate executive", "The cost of building a factory", "The market price of a gold bar"] },
            hi: { q: "'क्रेडिट रेटिंग' क्या है?", opts: ["एक उधारकर्ता की ऋण-पात्रता (Creditworthiness) का आकलन", "कॉर्पोरेट कार्यकारी का वेतन", "फैक्ट्री बनाने की लागत", "सोने की छड़ की बाजार कीमत"] },
            correct: 0
        },
        {
            en: { q: "What does 'Sovereign' mean in the context of government bonds?", opts: ["Backed by the government", "Backed by private banks", "Backed by gold", "Backed by foreign companies"] },
            hi: { q: "सरकारी बॉन्ड के संदर्भ में 'संप्रभु' (Sovereign) का क्या अर्थ है?", opts: ["सरकार द्वारा समर्थित", "निजी बैंकों द्वारा समर्थित", "सोने द्वारा समर्थित", "विदेशी कंपनियों द्वारा समर्थित"] },
            correct: 0
        },
        {
            en: { q: "What is the 'Settlement Date'?", opts: ["The date on which the transaction is finalized and securities/money are exchanged", "The date on which the stock market opens", "The date on which a company declares a dividend", "The date on which a broker is registered"] },
            hi: { q: "'सेटलमेंट डेट' (निपटान तिथि) क्या है?", opts: ["वह तारीख जिस दिन लेनदेन अंतिम होता है और प्रतिभूतियों/पैसे का आदान-प्रदान होता है", "वह तारीख जिस दिन शेयर बाजार खुलता है", "वह तारीख जिस दिन कंपनी लाभांश घोषित करती है", "वह तारीख जिस दिन ब्रोकर पंजीकृत होता है"] },
            correct: 0
        },
        {
            en: { q: "Which index is associated with the Mumbai Stock Exchange (BSE)?", opts: ["Sensex", "Nifty", "Nasdaq", "FTSE"] },
            hi: { q: "कौन सा सूचकांक मुंबई स्टॉक एक्सचेंज (बीएसई) से जुड़ा है?", opts: ["सेंसेक्स (Sensex)", "निफ्टी", "नैस्डैक (Nasdaq)", "एफटीएसई (FTSE)"] },
            correct: 0
        },
        {
            en: { q: "What is 'Diversification'?", opts: ["Reducing risk by investing in a variety of assets", "Putting all money in one stock", "Avoiding the stock market entirely", "Only buying high-risk assets"] },
            hi: { q: "'विविधीकरण' क्या है?", opts: ["विभिन्न संपत्तियों में निवेश करके जोखिम को कम करना", "सारा पैसा एक ही स्टॉक में डालना", "शेयर बाजार से पूरी तरह बचना", "केवल उच्च-जोखिम वाली संपत्ति खरीदना"] },
            correct: 0
        },
        {
            en: { q: "What is a 'Broker'?", opts: ["An intermediary who connects buyers and sellers in the stock market", "A person who lends money to banks", "A government official who monitors taxes", "A manufacturer of trading software"] },
            hi: { q: "'ब्रोकर' क्या है?", opts: ["एक मध्यस्थ जो शेयर बाजार में खरीदारों और विक्रेताओं को जोड़ता है", "एक व्यक्ति जो बैंकों को पैसा उधार देता है", "एक सरकारी अधिकारी जो करों की निगरानी करता है", "ट्रेडिंग सॉफ्टवेयर का निर्माता"] },
            correct: 0
        },
        {
            en: { q: "What is 'Inflation'?", opts: ["A general increase in prices and a fall in the purchasing power of money", "A decrease in the price of gold", "A rise in the stock market", "An increase in bank interest rates"] },
            hi: { q: "'मुद्रास्फीति' (Inflation) क्या है?", opts: ["कीमतों में सामान्य वृद्धि और पैसे की क्रय शक्ति में गिरावट", "सोने की कीमत में कमी", "शेयर बाजार में वृद्धि", "बैंक ब्याज दरों में वृद्धि"] },
            correct: 0
        },
        {
            en: { q: "What is a 'Debenture'?", opts: ["A type of long-term debt instrument that is not secured by physical collateral", "A type of equity share", "A short-term loan for daily expenses", "A government grant"] },
            hi: { q: "'डिबेंचर' क्या है?", opts: ["एक प्रकार का दीर्घकालिक ऋण साधन जो भौतिक संपार्श्विक (Collateral) द्वारा सुरक्षित नहीं है", "इक्विटी शेयर का एक प्रकार", "दैनिक खर्चों के लिए अल्पकालिक ऋण", "एक सरकारी अनुदान"] },
            correct: 0
        },
        {
            en: { q: "What is 'Compounding'?", opts: ["Earning interest on both the principal and the previously accumulated interest", "Earning interest only on the principal amount", "Paying interest on a loan", "Buying shares at a low price"] },
            hi: { q: "'कंपाउंडिंग' (चक्रवृद्धि) क्या है?", opts: ["मूलधन और पहले से संचित ब्याज दोनों पर ब्याज अर्जित करना", "केवल मूलधन पर ब्याज अर्जित करना", "ऋण पर ब्याज चुकाना", "कम कीमत पर शेयर खरीदना"] },
            correct: 0
        },
        {
            en: { q: "What is 'Equity Dilution'?", opts: ["The decrease in percentage ownership of existing shareholders due to issuance of new shares", "The increase in company profits", "The payment of dividends to shareholders", "The process of selling company assets"] },
            hi: { q: "'इक्विटी डाइल्यूशन' क्या है?", opts: ["नए शेयर जारी होने के कारण मौजूदा शेयरधारकों की स्वामित्व प्रतिशत में कमी", "कंपनी के लाभ में वृद्धि", "शेयरधारकों को लाभांश का भुगतान", "कंपनी की संपत्ति बेचने की प्रक्रिया"] },
            correct: 0
        },
        {
            en: { q: "What is a 'Primary Dealer'?", opts: ["A bank or financial institution authorized to buy and sell government securities", "A manufacturer of physical goods", "A retail investor in the stock market", "An insurance agent"] },
            hi: { q: "'प्राइमरी डीलर' क्या है?", opts: ["सरकारी प्रतिभूतियों को खरीदने और बेचने के लिए अधिकृत एक बैंक या वित्तीय संस्थान", "भौतिक वस्तुओं का निर्माता", "शेयर बाजार में खुदरा निवेशक", "एक बीमा एजेंट"] },
            correct: 0
        },
        {
            en: { q: "What is 'Annual General Meeting' (AGM)?", opts: ["A yearly gathering of shareholders to discuss company performance", "A meeting of employees to discuss bonuses", "A meeting of the government to discuss budget", "A monthly meeting of stockbrokers"] },
            hi: { q: "'वार्षिक आम बैठक' (AGM) क्या है?", opts: ["कंपनी के प्रदर्शन पर चर्चा करने के लिए शेयरधारकों की एक वार्षिक सभा", "बोनस पर चर्चा करने के लिए कर्मचारियों की बैठक", "बजट पर चर्चा करने के लिए सरकार की एक बैठक", "स्टॉकब्रोकरों की एक मासिक बैठक"] },
            correct: 0
        },
        {
            en: { q: "What is the 'repo rate'?", opts: ["The rate at which the central bank lends money to commercial banks", "The rate at which banks lend to customers", "The rate of tax on corporate profits", "The rate of return on gold"] },
            hi: { q: "'रेपो रेट' (Repo rate) क्या है?", opts: ["वह दर जिस पर केंद्रीय बैंक वाणिज्यिक बैंकों को पैसा उधार देता है", "वह दर जिस पर बैंक ग्राहकों को उधार देते हैं", "कॉर्पोरेट मुनाफे पर कर की दर", "सोने पर रिटर्न की दर"] },
            correct: 0
        },
        {
            en: { q: "What is a 'Stop Loss' order?", opts: ["An order to sell a security when it reaches a certain price to limit loss", "An order to buy as much as possible", "An order that is never executed", "An order to pay dividends automatically"] },
            hi: { q: "'स्टॉप लॉस' (Stop Loss) ऑर्डर क्या है?", opts: ["नुकसान को सीमित करने के लिए एक निश्चित कीमत पर पहुंचने पर सुरक्षा बेचने का ऑर्डर", "जितना संभव हो उतना खरीदने का ऑर्डर", "एक ऑर्डर जो कभी निष्पादित नहीं होता", "स्वचालित रूप से लाभांश का भुगतान करने का ऑर्डर"] },
            correct: 0
        },
        {
            en: { q: "What is 'Risk Appetite'?", opts: ["The level of risk an investor is willing to take to achieve their goals", "The amount of money an investor has in their bank account", "The speed at which a company grows", "The desire to buy expensive stocks"] },
            hi: { q: "'रिस्क एपेटाइट' (जोखिम लेने की क्षमता) क्या है?", opts: ["अपने लक्ष्यों को प्राप्त करने के लिए निवेशक द्वारा जोखिम लेने की इच्छा का स्तर", "निवेशक के बैंक खाते में पैसे की मात्रा", "कंपनी के विकास की गति", "महंगे स्टॉक खरीदने की इच्छा"] },
            correct: 0
        },
        {
            en: { q: "What is a 'Growth Fund'?", opts: ["A mutual fund that focuses on stocks expected to grow faster than the market average", "A fund that invests only in government bonds", "A fund that pays very high dividends", "A fund that invests in declining companies"] },
            hi: { q: "'ग्रोथ फंड' क्या है?", opts: ["एक म्यूचुअल फंड जो बाजार औसत से तेजी से बढ़ने की उम्मीद वाले शेयरों पर ध्यान केंद्रित करता है", "एक फंड जो केवल सरकारी बॉन्ड में निवेश करता है", "एक फंड जो बहुत अधिक लाभांश का भुगतान करता है", "एक फंड जो गिरती हुई कंपनियों में निवेश करता है"] },
            correct: 0
        },
        {
            en: { q: "What is the role of 'SEBI' in the Indian financial system?", opts: ["To protect the interests of investors in securities and promote the development of the market", "To manage the printing of currency", "To provide loans to farmers", "To regulate the insurance companies"] },
            hi: { q: "भारतीय वित्तीय प्रणाली में 'सेबी' (SEBI) की भूमिका क्या है?", opts: ["प्रतिभूतियों में निवेशकों के हितों की रक्षा करना और बाजार के विकास को बढ़ावा देना", "मुद्रा की छपाई का प्रबंधन करना", "किसानों को ऋण प्रदान करना", "बीमा कंपनियों को विनियमित करना"] },
            correct: 0
        },
        // --- NISM Advanced Comprehensive Mix Test: Balanced Coverage (Set 18) ---
        {
            en: { q: "What does the option Greek 'Gamma' measure inside advanced derivatives pricing layouts?", opts: ["The rate of change in an option's Delta relative to a 1-unit modification inside the underlying asset price", "The deterioration pace of time values tracked across out-of-the-money contract brackets", "The structural percentage change driven by adjustment layers inside central bank repo metrics", "The core correlation threshold mapping physical gold spot values to warehouse receipts"] },
            hi: { q: "उन्नत डेरिवेटिव मूल्य निर्धारण लेआउट के भीतर ऑप्शन ग्रीक 'गामा' (Gamma) सटीक रूप से क्या मापता है?", opts: ["अंतर्निहित परिसंपत्ति की कीमत में 1-इकाई के संशोधन के लिए ऑप्शन के डेल्टा (Delta) में बदलाव की दर", "आउट-ऑफ-द-मनी अनुबंध ब्रैकेट में ट्रैक किए गए समय मूल्यों की गिरावट की गति", "केंद्रीय बैंक रेपो मेट्रिक्स के अंदर समायोजन परतों द्वारा संचालित संरचनात्मक प्रतिशत परिवर्तन", "भौतिक सोने के हाजिर मूल्यों को गोदाम रसीदों से मैप करने वाली मुख्य सहसंबंध सीमा"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI Mutual Fund regulations, what represents the strict portfolio mandate for a 'Large Cap Fund' asset allocation scheme?", opts: ["The scheme must deploy a minimum of 80% of total available net assets inside equity shares of top 100 large-cap corporate entities", "To allocate 100% of available net funds into international cryptocurrency venture registries across corridors", "To invest exclusively inside sovereign gold futures across multi-commodity exchange counters daily", "To lock in retail capital assets for a mandatory 10-year structural lifecycle blueprint layout scheme"] },
            hi: { q: "सेबी म्यूचुअल फंड दिशानिर्देशों के तहत, कौन सा सख्त पैरामीटर एक 'लार्ज कैप फंड' (Large Cap Fund) परिसंपत्ति आवंटन योजना के लिए पोर्टफोलियो जनादेश को परिभाषित करता है?", opts: ["योजना को शीर्ष 100 लार्ज-कैप कॉर्पोरेट संस्थाओं के इक्विटी शेयरों के भीतर कुल उपलब्ध शुद्ध संपत्ति का न्यूनतम 80% निवेश करना होगा", "कॉरिडोर में अंतरराष्ट्रीय क्रिप्टोकरेंसी वेंचर रजिस्ट्रियों में उपलब्ध शुद्ध धन का 100% आवंटित करना", "दैनिक रूप से मल्टी-कमोडिटी एक्सचेंज काउंटरों पर विशेष रूप से संप्रभु स्वर्ण फ्यूचर्स के भीतर निवेश करना", "एक अनिवार्य 10-वर्षीय संरचनात्मक जीवनचक्र ब्लूप्रिंट लेआउट योजना के लिए खुदरा पूंजीगत संपत्तियों को लॉक करना"] },
            correct: 0
        },
        {
            en: { q: "What occurs under the 'Principle of Indemnity' if an insured party attempts to profit from a general insurance payout?", opts: ["The claim is restricted to the actual financial loss to restore their original position, preventing profit", "The insurance regulator permanently cancels their basic civil identity card", "The premium is doubled and collected forcefully via tax deduction codes", "The entire asset shifts under the structural ownership of central bank networks"] },
            hi: { q: "यदि कोई बीमित व्यक्ति सामान्य बीमा भुगतान से लाभ कमाने का प्रयास करता है तो 'क्षतिपूर्ति के सिद्धांत' (Principle of Indemnity) के तहत क्या होता है?", opts: ["लाभ को रोकने के लिए दावे को उनकी मूल स्थिति बहाल करने वाले वास्तविक वित्तीय नुकसान तक सीमित किया जाता है", "बीमा नियामक उनके बुनियादी नागरिक पहचान पत्र को स्थायी रूप से रद्द कर देता है", "प्रीमियम को दोगुना किया जाता है और कर कटौती कोड के माध्यम से जबरन एकत्र किया जाता है", "पूरी संपत्ति केंद्रीय बैंक नेटवर्क के संरचनात्मक स्वामित्व के तहत स्थानांतरित हो जाती है"] },
            correct: 0
        },
        {
            en: { q: "In currency derivatives trading, what term is used when the exchange rate quote layout displays the price of 1 unit of foreign currency in terms of domestic currency?", opts: ["Direct Quote", "Indirect Quote", "Cross Currency Pair", "Arbitrage Spread Matrix"] },
            hi: { q: "मुद्रा डेरिवेटिव ट्रेडिंग में, जब विनिमय दर उद्धरण (Quote) घरेलू मुद्रा के संदर्भ में विदेशी मुद्रा की 1 इकाई की कीमत प्रदर्शित करता है, तो किस शब्द का उपयोग किया जाता है?", opts: ["प्रत्यक्ष उद्धरण (Direct Quote)", "अप्रत्यक्ष उद्धरण (Indirect Quote)", "क्रॉस करेंसी पेयर", "आर्बिट्रेज स्प्रेड मैट्रिक्स"] },
            correct: 0
        },
        {
            en: { q: "What is the certified structural repository unit called that handles physical standard checkups for agro-commodities?", opts: ["WDRA accredited warehouse", "SEBI regional depository office", "RBI currency chest vault", "APEDA custom packaging unit"] },
            hi: { q: "कृषि-कमोडिटी के लिए भौतिक मानक जांच को संभालने वाली प्रमाणित संरचनात्मक रिपॉजिटरी इकाई को क्या कहा जाता है?", opts: ["WDRA मान्यता प्राप्त गोदाम (Warehouse)", "सेबी क्षेत्रीय डिपॉजिटरी कार्यालय", "आरबीआई मुद्रा तिजोरी वॉल्ट", "एपीडा कस्टम पैकेजिंग इकाई"] },
            correct: 0
        },
        {
            en: { q: "In the context of clearing and settlement, what does 'Novation' mean?", opts: ["The Clearing Corporation interposes itself between the buyer and seller, becoming the counterparty to every trade", "The legal cancellation of a trade due to erroneous price matching", "The automatic extension of a contract's expiration date", "The process of converting physical contracts into digital format"] },
            hi: { q: "क्लियरिंग और सेटलमेंट के संदर्भ में, 'नोवेशन' (Novation) का क्या अर्थ है?", opts: ["क्लियरिंग कॉरपोरेशन खरीदार और विक्रेता के बीच हस्तक्षेप करता है, और प्रत्येक व्यापार के लिए काउंटरपार्टी बन जाता है", "गलत मूल्य मिलान के कारण व्यापार का कानूनी रद्दीकरण", "एक अनुबंध की समाप्ति तिथि का स्वचालित विस्तार", "भौतिक अनुबंधों को डिजिटल प्रारूप में बदलने की प्रक्रिया"] },
            correct: 0
        },
        {
            en: { q: "Regarding the 'Exit Load' in Mutual Funds, which of the following statements is true?", opts: ["It is a fee charged when an investor redeems units before a specified period, and it is credited back to the scheme", "It is a recurring annual charge levied for fund management expenses", "It is an initial charge levied at the time of investing during an NFO", "It is compulsorily levied only on Overnight and Liquid Funds"] },
            hi: { q: "म्यूचुअल फंड में 'एग्जिट लोड' (Exit Load) के संबंध में निम्नलिखित में से कौन सा कथन सत्य है?", opts: ["यह एक शुल्क है जो तब लगाया जाता है जब कोई निवेशक एक निर्दिष्ट अवधि से पहले इकाइयों को भुनाता है, और इसे वापस योजना (Scheme) में जमा किया जाता है", "यह फंड प्रबंधन खर्चों के लिए लगाया जाने वाला एक आवर्ती वार्षिक शुल्क है", "यह एनएफओ (NFO) के दौरान निवेश करते समय लगाया जाने वाला प्रारंभिक शुल्क है", "यह अनिवार्य रूप से केवल ओवरनाइट और लिक्विड फंड पर लगाया जाता है"] },
            correct: 0
        },
        {
            en: { q: "Under IRDAI statutory regulations, what is the mandatory minimum cooling-off 'Free Look Period' granted to a life insurance policyholder after receiving the physical policy document?", opts: ["15 days", "30 days", "7 days", "45 days"] },
            hi: { q: "IRDAI के नियमों के तहत, भौतिक पॉलिसी दस्तावेज प्राप्त करने के बाद जीवन बीमा पॉलिसीधारक को दी जाने वाली वैधानिक न्यूनतम कूलिंग-ऑफ 'फ्री लुक अवधि' (Free Look Period) क्या है?", opts: ["15 दिन (15 days)", "30 दिन", "7 दिन", "45 दिन"] },
            correct: 0
        },
        {
            en: { q: "In currency trading, what does the term 'Pip' stand for?", opts: ["Percentage in Point", "Price Interest Premium", "Portfolio Investment Position", "Public Interest Parity"] },
            hi: { q: "मुद्रा (Currency) व्यापार में, 'पिप' (Pip) शब्द का क्या अर्थ है?", opts: ["परसेंटेज इन पॉइंट (Percentage in Point)", "प्राइस इंटरेस्ट प्रीमियम", "पोर्टफोलियो इन्वेस्टमेंट पोजीशन", "पब्लिक इंटरेस्ट पारिटी"] },
            correct: 0
        },
        {
            en: { q: "In commodity derivatives, what does the 'Tender Period' signify?", opts: ["The specified days leading up to contract expiration during which buyers and sellers must declare their delivery intentions", "The introductory window allocated to register new physical mandis inside state grids", "The time duration allowed to deposit initial margin money into clearing accounts", "The grace period given to process structural custom warehouse tax tariffs"] },
            hi: { q: "कमोडिटी डेरिवेटिव्स में, 'टेंडर पीरियड' (Tender Period) क्या दर्शाता है?", opts: ["अनुबंध समाप्ति से पहले के निर्दिष्ट दिन जिसके दौरान खरीदारों और विक्रेताओं को अपनी डिलीवरी की मंशा घोषित करनी होगी", "राज्य ग्रिड के अंदर नई भौतिक मंडियों को पंजीकृत करने के लिए आवंटित परिचयात्मक विंडो", "क्लियरिंग खातों में प्रारंभिक मार्जिन राशि जमा करने की अनुमति दी गई समय अवधि", "संरचनात्मक कस्टम गोदाम कर टैरिफ को संसाधित करने के लिए दी गई ग्रेस अवधि"] },
            correct: 0
        },
        {
            en: { q: "What component is calculated by dividing an individual asset's active performance variance by its systematic correlation index to find market sensitivity?", opts: ["Beta Coefficient", "Alpha Tracker", "Sharpe Deviation Index", "Information Ratio Factor"] },
            hi: { q: "बाजार संवेदनशीलता का पता लगाने के लिए किसी व्यक्तिगत संपत्ति के सक्रिय प्रदर्शन विचरण को उसके व्यवस्थित सहसंबंध सूचकांक (Systematic Correlation) से विभाजित करके कौन सा घटक निकाला जाता है?", opts: ["बीटा गुणांक (Beta Coefficient)", "अल्फा ट्रैकर", "शार्प विचलन सूचकांक", "सूचना अनुपात कारक"] },
            correct: 0
        },
        {
            en: { q: "Which core principle of insurance implies that both parties to the contract must disclose all material facts honestly?", opts: ["Uberrimae Fidei (Utmost Good Faith)", "Insurable Interest Rules", "Principle of Indemnity Layout", "Causa Proxima Verification"] },
            hi: { q: "बीमा का कौन सा मूल सिद्धांत यह दर्शाता है कि अनुबंध के दोनों पक्षों को सभी भौतिक तथ्यों का ईमानदारी से खुलासा करना चाहिए?", opts: ["उबेरिमे फिदेई (Utmost Good Faith / परम सद्भाव)", "बीमायोग्य हित नियम", "क्षतिपूर्ति लेआउट का सिद्धांत", "कॉसा प्रॉक्सिमा सत्यापन"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI mutual fund rules, what happens to the Net Asset Value (NAV) of a Mutual Fund scheme on its ex-dividend date after a dividend distribution?", opts: ["The NAV falls by the exact extent of the dividend distributed per unit plus statutory taxes", "The NAV increases by the extent of the dividend distribution payout", "The NAV remains completely unchanged, as dividends are paid from cash reserves", "The scheme gets permanently closed and merged with an index grid"] },
            hi: { q: "लाभांश वितरण के बाद एक्स-डिविडेंड (Ex-dividend) तिथि पर म्यूचुअल फंड योजना की नेट एसेट वैल्यू (NAV) का क्या होता है?", opts: ["प्रति इकाई वितरित लाभांश और वैधानिक करों की सीमा तक एनएवी गिर जाती है", "लाभांश वितरण भुगतान की सीमा तक एनएवी बढ़ जाती", "एनएवी पूरी तरह से अपरिवर्तित रहती है, क्योंकि लाभांश नकद आरक्षित से भुगतान किया जाता है", "योजना स्थायी रूप से बंद हो जाती है और एक इंडेक्स ग्रिड के साथ विलय हो जाती है"] },
            correct: 0
        },
        {
            en: { q: "An options trader sells a Put Option. What is their market outlook on the underlying asset?", opts: ["Bullish or Neutral", "Bearish only", "Highly Volatile", "Extremely Bearish"] },
            hi: { q: "एक ऑप्शंस ट्रेडर पुट ऑप्शन (Put Option) बेचता है। अंतर्निहित परिसंपत्ति (Underlying Asset) पर उनका बाजार दृष्टिकोण क्या है?", opts: ["तेजी या तटस्थ (Bullish or Neutral)", "केवल मंदी (Bearish only)", "अत्यधिक अस्थिर (Highly Volatile)", "अत्यधिक मंदी"] },
            correct: 0
        },
        {
            en: { q: "The professional expert who mathematically evaluates risk profiles, premium configurations, and statutory solvency ratios for insurance firms is called an:", opts: ["Actuary", "Underwriter", "Surveyor", "Loss Assessor"] },
            hi: { q: "बीमा कंपनियों के लिए जोखिम प्रोफाइल, प्रीमियम कॉन्फ़िगरेशन और वैधानिक सॉल्वेंसी अनुपात का गणितीय मूल्यांकन करने वाले पेशेवर विशेषज्ञ को क्या कहा जाता है?", opts: ["एक्चुअरी (Actuary / बीमांकक)", "अंडरराइटर", "सर्वेक्षक", "नुकसान निर्धारक"] },
            correct: 0
        },
        {
            en: { q: "What ratio is calculated by dividing the total trading volume of put options by the total trading volume of call options?", opts: ["Put-Call Ratio (PCR)", "Delta Neutral Leverage Ratio", "Volatility Skew Co-efficient", "Beta Hedging Parameter Matrix"] },
            hi: { q: "पुट ऑप्शंस के कुल ट्रेडिंग वॉल्यूम को कॉल ऑप्शंस के कुल ट्रेडिंग वॉल्यूम से विभाजित करके कौन सा अनुपात निकाला जाता है?", opts: ["पुट-कॉल अनुपात (PCR)", "डेल्टा न्यूट्रल उत्तोलन अनुपात", "अस्थिरता तिरछा सह-कुशलता", "बीटा हेजिंग पैरामीटर मैट्रिक्स"] },
            correct: 0
        },
        {
            en: { q: "Which of the following commodities is classified as a 'Soft Commodity' in international derivative exchanges?", opts: ["Sugar", "Crude Oil", "Copper", "Gold"] },
            hi: { q: "अंतरराष्ट्रीय डेरिवेटिव एक्सचेंजों में निम्नलिखित में से कौन सी कमोडिटी 'सॉफ्ट कमोडिटी' (Soft Commodity) के रूप में वर्गीकृत है?", opts: ["चीनी (Sugar / कॉफी / कपास)", "क्रूड ऑयल", "कॉपर", "सोना"] },
            correct: 0
        },
        {
            en: { q: "What does the financial metric 'Tracking Error' measure inside a passive Mutual Fund Index Fund scheme?", opts: ["The divergence between the performance returns of the index fund and its target benchmark index", "The systematic network lag in updating fractional portfolio unit balances on the digital application", "The mathematical calculation variance inside corporate long term capital gains tax schedules", "The operational error committed by the custodian during vault auditing schedules"] },
            hi: { q: "एक पैसिव म्यूचुअल फंड इंडेक्स फंड योजना के भीतर वित्तीय मीट्रिक 'ट्रैकिंग एरर' (Tracking Error) क्या मापता है?", opts: ["इंडेक्स फंड के प्रदर्शन रिटर्न और उसके लक्षित बेंचमार्क इंडेक्स के बीच विचलन (Divergence)", "डिजिटल एप्लिकेशन पर आंशिक पोर्टफोलियो यूनिट बैलेंस को अपडेट करने में सिस्टम नेटवर्क लैग", "कॉर्पोरेट दीर्घकालिक पूंजीगत लाभ कर अनुसूचियों के अंदर गणितीय गणना भिन्नता", "तिजोरी ऑडिटिंग अनुसूचियों के दौरान कस्टोडियन द्वारा की गई परिचालन त्रुटि"] },
            correct: 0
        },
        {
            en: { q: "What legislative empowers the Reserve Bank of India (RBI) to regulate and govern the foreign exchange markets in India?", opts: ["Foreign Exchange Management Act (FEMA), 1999", "Reserve Bank Act, 1934 Chapter II", "Securities Contracts (Regulation) Act, 1956", "Banking Regulation Act, 1949 Section 42"] },
            hi: { q: "कौन सा कानून भारतीय रिजर्व बैंक (RBI) को भारत में विदेशी मुद्रा बाजारों को विनियमित और नियंत्रित करने का अधिकार देता है?", opts: ["विदेशी मुद्रा प्रबंधन अधिनियम (FEMA), 1999", "रिज़र्व बैंक अधिनियम, 1934 अध्याय II", "प्रतिभूति अनुबंध (विनियमन) अधिनियम, 1956", "बैंकिंग विनियमन अधिनियम, 1949 धारा 42"] },
            correct: 0
        },
        {
            en: { q: "In commodity derivatives, what is the margin collected to cover potential losses arising from extreme price movements beyond the daily standard value?", opts: ["Extreme Loss Margin (ELM)", "Initial Margin", "Mark-to-Market Margin", "Tender Period Margin"] },
            hi: { q: "कमोडिटी डेरिवेटिव्स में, दैनिक मानक मूल्य से परे अत्यधिक मूल्य उतार-चढ़ाव से उत्पन्न होने वाले संभावित नुकसान को कवर करने के लिए कौन सा मार्जिन एकत्र किया जाता है?", opts: ["एक्सट्रीम लॉस मार्जिन (ELM)", "प्रारंभिक मार्जिन (Initial Margin)", "मार्क-टू-मार्केट मार्जिन", "टेंडर पीरियड मार्जिन"] },
            correct: 0
        },
        {
            en: { q: "What represents the 'Cost of Carry' inside commodity futures contracts?", opts: ["The total expense of storage, insurance, and financing required to hold a physical commodity over time", "The brokerage charges collected by terminal trading application desks", "The logistics transportation toll levied between interstate entry borders", "The custom validation packaging tariffs imposed at seaport grids"] },
            hi: { q: "कमोडिटी फ्यूचर्स अनुबंधों के अंदर 'कॉस्ट ऑफ कैरी' (Cost of Carry) क्या दर्शाता है?", opts: ["समय के साथ भौतिक कमोडिटी रखने के लिए आवश्यक भंडारण, बीमा और वित्तपोषण का कुल खर्च", "टर्मिनल ट्रेडिंग एप्लिकेशन डेस्क द्वारा एकत्र किया गया ब्रोरेज शुल्क", "अंतरराज्यीय प्रवेश सीमाओं के बीच लगाया जाने वाला लॉजिस्टिक्स परिवहन टोल", "समुद्री बंदरगाह ग्रिड पर लगाए जाने वाले कस्टम सत्यापन पैकेजिंग टैरिफ"] },
            correct: 0
        },
        {
            en: { q: "What does the 'Principle of Subrogation' in general insurance imply?", opts: ["The insurer gets the right to recover damages from a third party responsible for the loss after settling the insured's claim", "The insured can claim compensation from multiple companies to make a profit", "The policy becomes void if the premium is paid after the grace period", "The insurance company can change the policy terms without the consent of the customer"] },
            hi: { q: "सामान्य बीमा में 'प्रत्यासन का सिद्धांत' (Principle of Subrogation) क्या दर्शाता है?", opts: ["बीмаकर्ता को बीमित व्यक्ति के दावे का निपटान करने के बाद नुकसान के लिए जिम्मेदार तीसरे पक्ष से हर्जाना वसूलने का अधिकार मिल जाता है", "बीमित व्यक्ति लाभ कमाने के लिए कई कंपनियों से मुआवजे का दावा कर सकता है", "यदि प्रीमियम का भुगतान ग्रेस पीरियड के बाद किया जाता है तो पॉलिसी शून्य हो जाती है", "बीमा कंपनी ग्राहक की सहमति के बिना पॉलिसी की शर्तों को बदल सकती है"] },
            correct: 0
        },
        {
            en: { q: "What does 'Open Interest' in a derivatives contract signify?", opts: ["The total number of outstanding derivative contracts that have not been settled or closed", "The amount of interest paid by traders to the stockbroker for leverage", "The trading volume recorded during the peak market hours", "The percentage of delivery trades executed in options market"] },
            hi: { q: "डेरिवेटिव अनुबंध में 'ओपन इंटरेस्ट' (Open Interest) क्या दर्शाता है?", opts: ["बकाया डेरिवेटिव अनुबंधों की कुल संख्या जिनका निपटान या बंद नहीं किया गया है", "उत्तोलन (Leverage) के लिए व्यापारियों द्वारा स्टॉकब्रोकर को भुगतान की गई ब्याज की राशि", "पीक特色केीट ऑवर्स के दौरान रिकॉर्ड किया गया ट्रेडिंग वॉल्यूम", "ऑप्शंस मार्केट में निष्पादित डिलीवरी ट्रेडों का प्रतिशत"] },
            correct: 0
        },
        {
            en: { q: "According to SEBI regulations, a Mutual Fund scheme's NAV must be calculated and published on which basis for all business days?", opts: ["Daily basis", "Weekly basis", "Fortnightly basis", "Monthly basis"] },
            hi: { q: "सेबी (SEBI) के नियमों के अनुसार, एक म्यूचुअल फंड योजना की एनएवी (NAV) सभी व्यावसायिक दिनों के लिए किस आधार पर गणना और प्रकाशित की जानी चाहिए?", opts: ["दैनिक आधार पर (Daily basis)", "साप्ताहिक आधार पर", "पाक्षिक आधार पर", "मासिक आधार पर"] },
            correct: 0
        },
        {
            en: { q: "An Indian software company expects to receive USD 50,000 in exports after 3 months. To protect against a falling USD, which derivative strategy should they deploy?", opts: ["Sell/Short USD-INR Futures", "Buy USD-INR Futures", "Sell USD-INR Put Options", "Buy USD-INR Call Options"] },
            hi: { q: "एक भारतीय सॉफ्टवेयर कंपनी को 3 महीने के बाद निर्यात में 50,000 यूएसडी प्राप्त होने की उम्मीद है। गिरते यूएसडी से बचाव के लिए, उन्हें कौन सी डेरिवेटिव रणनीति अपनानी चाहिए?", opts: ["USD-INR फ्यूचर्स बेचें/शॉर्ट करें (Sell USD-INR Futures)", "USD-INR फ्यूचर्स खरीदें", "USD-INR पुट ऑप्शंस बेचें", "USD-INR कॉल ऑप्शंस खरीदें"] },
            correct: 0
        },
        {
            en: { q: "What does the insurance term 'Moral Hazard' refer to?", opts: ["An increase in the probability of loss due to the dishonest tendencies or behavioral carelessness of the insured company", "The fluctuation of tax compliance rates across financial investment portals", "The physical structural degradation of warehouse logistics systems over time", "The geometric variance used by actuaries to trace mortality statistics"] },
            hi: { q: "बीमा शब्द 'नैतिक संकट' (Moral Hazard) किसे संदर्भित करता है?", opts: ["बीमित कंपनी की बेईमान प्रवृत्तियों या व्यवहार संबंधी लापरवाही के कारण नुकसान की संभावना में वृद्धि", "वित्तीय निवेश पोर्टलों में कर अनुपालन दरों का उतार-चढ़ाव", "समय के साथ गोदाम रसद प्रणालियों का भौतिक संरचनात्मक क्षरण", "मृत्यु दर के आंकड़ों का पता लगाने के लिए बीमांकक (Actuaries) द्वारा उपयोग किया जाने वाला ज्यामितीय विचरण"] },
            correct: 0
        },
        {
            en: { q: "In commodity futures trading, if a producer locks in a selling price for their future output to eliminate price risk, they are known as a:", opts: ["Short Hedger", "Long Hedger", "Arbitrageur", "Speculator"] },
            hi: { q: "कमोडिटी फ्यूचर्स ट्रेडिंग में, यदि कोई उत्पादक मूल्य जोखिम को खत्म करने के लिए अपने भविष्य के उत्पादन के लिए बिक्री मूल्य लॉक करता है, तो उसे किस रूप में जाना जाता है?", opts: ["शॉर्ट हेजर (Short Hedger)", "लॉन्ग हेजर (Long Hedger)", "आर्बिट्रेजूर", "सटोरिया (Speculator)"] },
            correct: 0
        },
        {
            en: { q: "What is the net asset value (NAV) of a mutual fund scheme?", opts: ["The market value of the scheme's assets minus its liabilities, divided by the number of outstanding units", "The total face value of all the shares purchased by the fund house", "The total amount of capital raised during the New Fund Offer (NFO)", "The highest price at which a unit of the scheme was traded during the year"] },
            hi: { q: "म्यूचुअल फंड योजना की नेट एसेट वैल्यू (NAV) क्या है?", opts: ["योजना की संपत्तियों का बाजार मूल्य ऋण उसकी देनदारियां, बकाया इकाइयों की संख्या से विभाजित", "फंड हाउस द्वारा खरीदे गए सभी शेयरों का कुल अंकित मूल्य (Face Value)", "न्यू फंड ऑफर (NFO) के दौरान जुटाई गई कुल पूंजी", "वर्ष के दौरान योजना की एक इकाई का उच्चतम कारोबार मूल्य"] },
            correct: 0
        },
        {
            en: { q: "In a currency quotation 'EUR/USD = 1.0850', which currency is called the 'Base Currency'?", opts: ["EUR", "USD", "Both EUR and USD", "The quote does not contain a base currency"] },
            hi: { q: "मुद्रा उद्धरण (Currency quotation) 'EUR/USD = 1.0850' में, किस मुद्रा को 'आधार मुद्रा' (Base Currency) कहा जाता है?", opts: ["EUR (पहली मुद्रा को बेस और दूसरी को कोट मुद्रा कहते हैं)", "USD", "EUR और USD दोनों", "उद्धरण में कोई आधार मुद्रा नहीं है"] },
            correct: 0
        },
        {
            en: { q: "What is an insurance 'Deductible'?", opts: ["A specified amount of loss that the insured must pay out of pocket before the insurance company pays its share", "The structural discount provided to long term clients during renewal cycles", "The commission payout processed to licensed field agents dynamically", "The statutory validation tariff imposed on cross-border re-insurance grids"] },
            hi: { q: "बीमा में 'डीडक्टिबल' (Deductible) क्या है?", opts: ["नुकसान की एक निर्दिष्ट राशि जो बीमा कंपनी द्वारा अपना हिस्सा चुकाने से पहले बीमित व्यक्ति को अपनी जेब से चुकानी होगी", "नवीनीकरण चक्रों के दौरान दीर्घकालिक ग्राहकों को प्रदान की जाने वाली संरचनात्मक छूट", "लाइसेंस प्राप्त फील्ड एजेंटों को गतिशील रूप से संसाधित कमीशन भुगतान", "सीमा पार पुनर्बीमा (Re-insurance) ग्रिड पर लगाया जाने वाला वैधानिक सत्यापन टैरिफ"] },
            correct: 0
        },
        {
            en: { q: "What does the option Greek 'Vega' measure precisely?", opts: ["The sensitivity of an option's premium to a change in the implied volatility of the underlying asset", "The sensitivity of an option's premium to a change in the time remaining until expiration", "The rate of change of Delta per unit change in spot tracker pricing", "The interest rate fluctuation impact on physical delivery commodity units"] },
            hi: { q: "ऑप्शन ग्रीक 'वेगा' (Vega) सटीक रूप से क्या मापता है?", opts: ["अंतर्निहित परिसंपत्ति की निहित अस्थिरता (Implied Volatility) में बदलाव के प्रति ऑप्शन के प्रीमियम की संवेदनशीलता", "समाप्ति तक बचे समय में बदलाव के प्रति ऑप्शन के प्रीमियम की संवेदनशीलता", "स्पॉट ट्रैकर मूल्य निर्धारण में प्रति इकाई परिवर्तन पर डेल्टा के परिवर्तन की दर", "भौतिक डिलीवरी कमोडिटी इकाइयों पर ब्याज दर में उतार-चढ़ाव का प्रभाव"] },
            correct: 0
        },
        {
            en: { q: "Which parameter measures the total percentage of a mutual fund portfolio's holdings that have changed over a period of one year?", opts: ["Portfolio Turnover Rate", "Expense Ratio Coefficient", "Tracking Error Standard", "Sharpe Deviation Index"] },
            hi: { q: "कौन सा पैरामीटर म्यूचुअल फंड पोर्टफोलियो की होल्डिंग्स के कुल प्रतिशत को मापता है जो एक वर्ष की अवधि में बदला है?", opts: ["पोर्टफोलियो टर्नओवर रेट (Portfolio Turnover Rate)", "व्यय अनुपात गुणांक", "ट्रैकिंग एरर मानक", "शार्प विचलन सूचकांक"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI guidelines, what is the maximum investment limit for a retail individual investor in an Initial Public Offering (IPO)?", opts: ["₹2,00,000", "₹5,00,000", "₹1,00,000", "₹10,00,000"] },
            hi: { q: "सेबी (SEBI) के दिशानिर्देशों के तहत, एक प्रारंभिक सार्वजनिक निर्गम (IPO) में खुदरा व्यक्तिगत निवेशक के लिए अधिकतम निवेश सीमा क्या है?", opts: ["₹2,00,000", "₹5,00,000", "₹1,00,000", "₹10,00,000"] },
            correct: 0
        },
        {
            en: { q: "What term describes a market situation where futures prices are higher than the spot prices of a commodity?", opts: ["Contango", "Backwardation", "Short Squeeze", "Arbitrage Lock"] },
            hi: { q: "बाजार की उस स्थिति को क्या कहा जाता है जहां फ्यूचर्स की कीमतें किसी कमोडिटी की हाजिर (Spot) कीमतों से अधिक होती हैं?", opts: ["कंतैंगो (Contango)", "बैकवर्डेशन (Backwardation)", "शॉर्ट स्क्वीज़", "आर्बिट्रेज लॉक"] },
            correct: 0
        },
        {
            en: { q: "What type of life insurance policy offers exclusively death benefit protection without any savings or maturity survival benefits?", opts: ["Term Insurance Policy", "Endowment Assurance Plan", "Whole Life Savings Layout", "Unit Linked Insurance Plan"] },
            hi: { q: "किस प्रकार की जीवन बीमा पॉलिसी बिना किसी बचत या परिपक्वता (Maturity) उत्तरजीविता लाभ के विशेष रूप से मृत्यु लाभ सुरक्षा प्रदान करती है?", opts: ["टर्म इंश्योरेंस पॉलिसी (Term Insurance Policy)", "एंडोमेंट एश्योरेंस观察plan", "संपूर्ण जीवन बचत लेआउट", "यूनिट लिंक्ड इंश्योरेंस प्लान (ULIP)"] },
            correct: 0
        },
        {
            en: { q: "An options trader simultaneously buys an Out-of-the-Money Call and an Out-of-the-Money Put with the same expiry date but different strike prices. This strategy is called a:", opts: ["Long Strangle", "Long Straddle", "Bull Call Spread", "Bear Put Spread"] },
            hi: { q: "एक डेरिवेटिव रणनीति जिसमें समान समाप्ति तिथि लेकिन विभिन्न स्ट्राइक कीमतों के साथ आउट-ऑफ-द-मनी कॉल और आउट-ऑफ-द-मनी पुट एक साथ खरीदना शामिल है, कहलाती है:", opts: ["लॉन्ग स्ट्रैंगल (Long Strangle)", "लॉन्ग स्ट्रैडल (Long Straddle)", "बुल कॉल स्प्रेड", "बियर पुट स्प्रेड"] },
            correct: 0
        },
        {
            en: { q: "Which type of insurance contract handles extreme large-scale risks by transferring a portion of risk from one primary insurer to another secondary global insurance firm?", opts: ["Reinsurance", "Double Insurance", "Co-insurance Allocation", "Indemnity Splitting Grid"] },
            hi: { q: "किस प्रकार का बीमा अनुबंध जोखिम के एक हिस्से को एक प्राथमिक बीमाकर्ता से दूसरे माध्यमिक वैश्विक बीमा फर्म में स्थानांतरित करके अत्यधिक बड़े पैमाने के जोखिमों को संभालता है?", opts: ["पुनर्बीमा (Reinsurance)", "दोहरा बीमा (Double Insurance)", "सह-बीमा आवंटन", "क्षतिपूर्ति विभाजन ग्रिड"] },
            correct: 0
        },
        {
            en: { q: "What is the typical lot size for a standard USD-INR futures contract traded on Indian stock exchanges?", opts: ["USD 1,000", "USD 10,000", "USD 5,000", "USD 100"] },
            hi: { q: "भारतीय स्टॉक एक्सचेंजों पर कारोबार करने वाले एक मानक USD-INR फ्यूचर्स अनुबंध के लिए विशिष्ट लॉट आकार (Lot Size) क्या है?", opts: ["USD 1,000", "USD 10,000", "USD 5,000", "USD 100"] },
            correct: 0
        },
        {
            en: { q: "What is the primary investment objective of a 'Gilt Fund' in the mutual fund sector?", opts: ["To invest exclusively in government securities with zero sovereign credit risk", "To invest in high-growth small-cap technology startups", "To generate risk-free arbitrage profits from physical gold commodities", "To invest in international blue-chip companies traded across US markets"] },
            hi: { q: "म्यूचुअल फंड क्षेत्र में 'गिल्ट फंड' (Gilt Fund) का प्राथमिक निवेश उद्देश्य क्या है?", opts: ["शून्य सॉवरेन क्रेडिट जोखिम वाली सरकारी प्रतिभूतियों (Government Securities) में निवेश करना", "उच्च विकास वाले स्मॉल-कैप टेक्नोलॉजी स्टार्टअप्स में निवेश करना", "भौतिक सोने की कमोडिटी से जोखिम मुक्त आर्बिट्रेज लाभ उत्पन्न करना", "अमेरिकी बाजारों में कारोबार करने वाली अंतरराष्ट्रीय ब्लू-चिप कंपनियों में निवेश करना"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI rules, the 'Total Expense Ratio' (TER) of a mutual fund scheme includes which of the following costs?", opts: ["Investment management fees, registrar fees, and marketing expenses", "Brokerage costs paid on internal portfolio equity trades", "Exit loads paid by the redeeming investors", "Securities Transaction Tax (STT) paid on exchange transactions"] },
            hi: { q: "सेबी के नियमों के तहत, म्यूचुअल फंड योजना के 'टोटल एक्सपेंस रेशियो' (TER) में निम्नलिखित में से कौन सी लागत शामिल है?", opts: ["निवेश प्रबंधन शुल्क, रजिस्ट्रार शुल्क और विपणन (Marketing) खर्च", "आंतरिक पोर्टफोलियो इक्विटी ट्रेडों पर भुगतान की गई ब्रोकरेज लागत", "भुनाने वाले निवेशकों द्वारा भुगतान किया गया एग्जिट लोड", "एक्सचेंज लेनदेन पर भुगतान किया गया प्रतिभूति लेनदेन कर (STT)"] },
            correct: 0
        },
        {
            en: { q: "A strategy where a trader simultaneously sells a Call and a Put option of the same strike price and expiry is known as a:", opts: ["Short Straddle", "Short Strangle", "Long Straddle", "Long Strangle"] },
            hi: { q: "एक रणनीति जहां एक ट्रेडर एक ही स्ट्राइक प्राइस और समाप्ति के कॉल और पुट ऑप्शन को एक साथ बेचता है, कहलाती है:", opts: ["शॉर्ट स्ट्रैडल (Short Straddle)", "शॉर्ट स्ट्रैंगल (Short Strangle)", "लॉन्ग स्ट्रैडल", "लॉन्ग स्ट्रैंगल"] },
            correct: 0
        },
        {
            en: { q: "Who holds the physical cash and securities of a Mutual Fund scheme in safe custody to prevent fraud or misuse by the AMC?", opts: ["The Custodian", "The Sponsor", "The Registrar and Transfer Agent (RTA)", "The Independent Trustees"] },
            hi: { q: "एएमसी (AMC) द्वारा धोखाधड़ी या दुरुपयोग को रोकने के लिए म्यूचुअल फंड योजना की भौतिक नकदी और प्रतिभूतियों को सुरक्षित अभिरक्षा में कौन रखता है?", opts: ["कस्टोडियन (The Custodian / अभिरक्षक)", "प्रायोजक (The Sponsor)", "रजिस्ट्रार और ट्रांसफर एजेंट (RTA)", "स्वतंत्र ट्रस्टी (Independent Trustees)"] },
            correct: 0
        },
        {
            en: { q: "In India, exchange-traded currency derivatives contracts are permitted on which underlying asset pairings?", opts: ["USD-INR, EUR-INR, GBP-INR, JPY-INR", "USD-EUR, USD-GBP, USD-CAD, USD-AUD", "EUR-USD, GBP-USD, JPY-USD, CHF-USD", "Only USD-INR contracts are allowed"] },
            hi: { q: "भारत में, एक्सचेंज-ट्रेडेड मुद्रा डेरिवेटिव अनुबंधों की अनुमति किन अंतर्निहित परिसंपत्ति युग्मों (Underlying Asset Pairings) पर है?", opts: ["USD-INR, EUR-INR, GBP-INR, JPY-INR", "USD-EUR, USD-GBP, USD-CAD, USD-AUD", "EUR-USD, GBP-USD, JPY-USD, CHF-USD", "केवल USD-INR अनुबंधों की अनुमति है"] },
            correct: 0
        },
        {
            en: { q: "Which body acts as the central repository for insurance policies in electronic form in India, similar to depository participants in the stock market?", opts: ["Insurance Repositories authorized by IRDAI", "National Securities Depository Limited (NSDL) only", "Reserve Bank of India Database Wing", "Life Insurance Corporation of India (LIC) IT Division"] },
            hi: { q: "भारत में इलेक्ट्रॉनिक रूप में बीमा पॉलिसियों के लिए कौन सा निकाय केंद्रीय भंडार (Repository) के रूप में कार्य करता है, जो शेयर बाजार में डिपॉजिटरी पार्टिसिपेंट्स के समान है?", opts: ["IRDAI द्वारा अधिकृत बीमा रिपॉजिटरी (Insurance Repositories)", "केवल नेशनल सिक्योरिटीज डिपॉजिटरी लिमिटेड (NSDL)", "भारतीय रिजर्व बैंक डेटाबेस विंग", "भारतीय जीवन बीमा निगम (LIC) आईटी डिवीजन"] },
            correct: 0
        },
        {
            en: { q: "What does an options's Delta of '0.50' imply for a Call option?", opts: ["The option premium will change by ₹0.50 for every ₹1 change in the underlying asset's price", "The option has a 50% probability of getting settled via physical cargo rules", "The buyer must maintain half layout margins inside trading terminals", "The strike price sits exactly fifty percent below current market trackers"] },
            hi: { q: "एक कॉल ऑप्शन के लिए ऑप्शन का डेल्टा (Delta) '0.50' क्या दर्शाता है?", opts: ["अंतर्निहित परिसंपत्ति की कीमत में प्रत्येक ₹1 के बदलाव के लिए ऑप्शन प्रीमियम में ₹0.50 का बदलाव होगा", "ऑप्शन के भौतिक कार्गो नियमों के माध्यम से निपटाए जाने की 50% संभावना है", "खरीदार को ट्रेडिंग टर्मिनलों के अंदर आधा लेआउट मार्जिन बनाए रखना चाहिए", "स्ट्राइक प्राइस वर्तमान बाजार ट्रैकर्स से ठीक पचास प्रतिशत नीचे बैठता है"] },
            correct: 0
        },
        {
            en: { q: "Which index serves as the benchmark tracker for the Bombay Stock Exchange (BSE)?", opts: ["S&P BSE SENSEX", "NIFTY 50", "NIFTY NEXT 50", "BSE MIDCAP"] },
            hi: { q: "कौन सा सूचकांक बॉम्बे स्टॉक एक्सचेंज (BSE) के बेंचमार्क ट्रैकर के रूप में कार्य करता है?", opts: ["S&P BSE SENSEX", "NIFTY 50", "NIFTY NEXT 50", "BSE MIDCAP"] },
            correct: 0
        },
        {
            en: { q: "The process of physical share certificates being converted into electronic form is known as:", opts: ["Dematerialization", "Rematerialization", "Securitization", "Amortization"] },
            hi: { q: "भौतिक शेयर प्रमाणपत्रों को इलेक्ट्रॉनिक रूप में परिवर्तित करने की प्रक्रिया को क्या कहा जाता है?", opts: ["डीमटेरियलाइजेशन (Dematerialization)", "रिमटेरियलाइजेशन", "सिक्योरिटाइजेशन", "अमॉर्टाइजेशन"] },
            correct: 0
        },
        {
            en: { q: "What does an investor set up if they want to withdraw a fixed amount of money from their mutual fund scheme every month regularly?", opts: ["SWP (Systematic Withdrawal Plan)", "SIP (Systematic Investment Plan)", "STP (Systematic Transfer Plan)", "NFO (New Fund Offer)"] },
            hi: { q: "यदि कोई निवेशक हर महीने नियमित रूप से अपनी म्यूचुअल फंड योजना से एक निश्चित राशि निकालना चाहता है, तो वह क्या सेटअप करता है?", opts: ["एसडब्ल्यूपी (SWP - Systematic Withdrawal Plan)", "एसआईपी (SIP)", "एसटीपी (STP)", "एनएफओ (NFO)"] },
            correct: 0
        },
        {
            en: { q: "What option Greek measures the rate of change of Delta with respect to a change in the price of the underlying asset?", opts: ["Gamma", "Vega", "Theta", "Rho"] },
            hi: { q: "कौन सा ऑप्शन ग्रीक (Option Greek) अंतर्निहित परिसंपत्ति की कीमत में बदलाव के संबंध में डेल्टा (Delta) के बदलाव की दर को मापता है?", opts: ["गामा (Gamma)", "वेगा (Vega)", "थिटा (Theta)", "रो (Rho)"] },
            correct: 0
        },
        {
            en: { q: "A farmers' group locks a selling price for crops months before harvest to prevent loss from price drop. What is this practice called?", opts: ["Hedging", "Speculation", "Scalping", "Short Selling"] },
            hi: { q: "एक किसान समूह फसल की कीमतों में गिरावट से होने वाले नुकसान को रोकने के लिए कटाई से महीनों पहले बिक्री मूल्य लॉक करता है। इस प्रथा को क्या कहा जाता है?", opts: ["हेजिंग (Hedging)", "सट्टा (Speculation)", "स्कैल्पिंग", "शॉर्ट सेलिंग"] },
            correct: 0
        },
        // --- NISM Advanced Comprehensive Mix Test: Final Stretch (Set 19) ---
        {
            en: { q: "What is the primary function of a 'Clearing House' in an exchange-traded derivatives market?", opts: ["Acting as the buyer to every seller and seller to every buyer", "Providing stock recommendations to clients", "Regulating the listing of new companies", "Designing the software for trading platforms"] },
            hi: { q: "एक्सचेंज-ट्रेडेड डेरिवेटिव्स बाजार में 'क्लियरिंग हाउस' का प्राथमिक कार्य क्या है?", opts: ["हर विक्रेता के लिए खरीदार और हर खरीदार के लिए विक्रेता के रूप में कार्य करना", "ग्राहकों को स्टॉक सिफारिशें प्रदान करना", "नई कंपनियों की लिस्टिंग को विनियमित करना", "ट्रेडिंग प्लेटफॉर्म के लिए सॉफ्टवेयर डिजाइन करना"] },
            correct: 0
        },
        {
            en: { q: "In the context of mutual funds, what is 'Portfolio Churning'?", opts: ["Excessive buying and selling of securities by the fund manager", "The process of redeeming units by investors", "The systematic transfer of funds between schemes", "The periodic calculation of the fund's NAV"] },
            hi: { q: "म्यूचुअल फंड के संदर्भ में 'पोर्टफोलियो चर्निंग' क्या है?", opts: ["फंड मैनेजर द्वारा प्रतिभूतियों की अत्यधिक खरीद और बिक्री", "निवेशकों द्वारा इकाइयों को भुनाने की प्रक्रिया", "योजनाओं के बीच फंड का व्यवस्थित हस्तांतरण", "फंड की एनएवी (NAV) की आवधिक गणना"] },
            correct: 0
        },
        {
            en: { q: "Which regulatory body governs 'Alternative Investment Funds' (AIFs) in India?", opts: ["SEBI", "RBI", "IRDAI", "PFRDA"] },
            hi: { q: "भारत में 'अल्टरनेटिव इन्वेस्टमेंट फंड्स' (AIFs) को कौन सा नियामक निकाय नियंत्रित करता है?", opts: ["सेबी (SEBI)", "आरबीआई (RBI)", "इरडा (IRDAI)", "पीएफआरडीए (PFRDA)"] },
            correct: 0
        },
        {
            en: { q: "What is 'Systematic Risk'?", opts: ["Risk inherent to the entire market or market segment", "Risk related to a specific company's performance", "Risk associated with a specific industry sector", "Risk arising from poor management decisions"] },
            hi: { q: "'सिस्टमैटिक रिस्क' (व्यवस्थित जोखिम) क्या है?", opts: ["संपूर्ण बाजार या बाजार खंड में निहित जोखिम", "किसी विशिष्ट कंपनी के प्रदर्शन से संबंधित जोखिम", "किसी विशिष्ट उद्योग क्षेत्र से जुड़ा जोखिम", "खराब प्रबंधन निर्णयों से उत्पन्न जोखिम"] },
            correct: 0
        },
        {
            en: { q: "In bond terminology, what is 'Duration'?", opts: ["A measure of the sensitivity of a bond's price to interest rate changes", "The time remaining until the bond reaches maturity", "The total amount of interest paid over the bond's life", "The credit rating of the bond issuer"] },
            hi: { q: "बॉन्ड शब्दावली में, 'ड्यूरेशन' क्या है?", opts: ["ब्याज दर परिवर्तनों के प्रति बॉन्ड की कीमत की संवेदनशीलता का माप", "बॉन्ड के परिपक्व होने तक का शेष समय", "बॉन्ड के जीवनकाल में भुगतान की गई कुल ब्याज की राशि", "बॉन्ड जारीकर्ता की क्रेडिट रेटिंग"] },
            correct: 0
        },
        {
            en: { q: "What is 'Insider Trading'?", opts: ["Trading based on non-public, material information", "Trading of company stocks by employees as part of an ESOP", "Buying stocks after a public announcement", "Selling stocks to rebalance a portfolio"] },
            hi: { q: "'इनसाइडर ट्रेडिंग' क्या है?", opts: ["गैर-सार्वजनिक, महत्वपूर्ण जानकारी के आधार पर ट्रेडिंग", "ESOP के हिस्से के रूप में कर्मचारियों द्वारा कंपनी के शेयरों की ट्रेडिंग", "सार्वजनिक घोषणा के बाद स्टॉक खरीदना", "पोर्टफोलियो को रिबैलेंस करने के लिए स्टॉक बेचना"] },
            correct: 0
        },
        {
            en: { q: "Which of these is not a 'Money Market Instrument'?", opts: ["Corporate Equity Share", "Treasury Bill", "Certificate of Deposit", "Commercial Paper"] },
            hi: { q: "इनमें से कौन सा 'मनी मार्केट इंस्ट्रूमेंट' नहीं है?", opts: ["कॉर्पोरेट इक्विटी शेयर", "ट्रेजरी बिल", "सर्टिफिकेट ऑफ डिपॉजिट", "कमर्शियल पेपर"] },
            correct: 0
        },
        {
            en: { q: "What is 'Asset Allocation'?", opts: ["Dividing an investment portfolio among different asset categories", "Selecting the best stock in a sector", "Donating profit to charity", "Borrowing money to invest in stocks"] },
            hi: { q: "'एसेट एलोकेशन' (परिसंपत्ति आवंटन) क्या है?", opts: ["विभिन्न परिसंपत्ति श्रेणियों के बीच निवेश पोर्टफोलियो को विभाजित करना", "एक क्षेत्र में सर्वश्रेष्ठ स्टॉक चुनना", "लाभ का दान करना", "स्टॉक में निवेश करने के लिए पैसे उधार लेना"] },
            correct: 0
        },
        {
            en: { q: "What is 'NAV'?", opts: ["Net Asset Value of a mutual fund scheme", "Nominal Asset Value", "New Asset Valuation", "Net Annual Volume"] },
            hi: { q: "'NAV' क्या है?", opts: ["म्यूचुअल फंड योजना का नेट एसेट वैल्यू", "नाममात्र एसेट वैल्यू", "नई परिसंपत्ति मूल्यांकन", "नेट वार्षिक वॉल्यूम"] },
            correct: 0
        },
        {
            en: { q: "Which market deals with the trading of government securities?", opts: ["Gilt Market", "Equity Market", "Derivative Market", "Foreign Exchange Market"] },
            hi: { q: "कौन सा बाजार सरकारी प्रतिभूतियों (Government Securities) के व्यापार से संबंधित है?", opts: ["गिल्ट मार्केट (Gilt Market)", "इक्विटी मार्केट", "डेरिवेटिव मार्केट", "विदेशी मुद्रा बाजार"] },
            correct: 0
        },
        {
            en: { q: "What does 'Mark-to-Market' (MTM) imply?", opts: ["Daily settlement of profit or loss in futures", "A type of stock market order", "An insurance policy clause", "A method of calculating taxes"] },
            hi: { q: "'मार्क-टू-मार्केट' (MTM) का क्या अर्थ है?", opts: ["फ्यूचर्स में लाभ या हानि का दैनिक निपटान", "एक प्रकार का शेयर बाजार ऑर्डर", "बीमा पॉलिसी का खंड", "करों की गणना करने की एक विधि"] },
            correct: 0
        },
        {
            en: { q: "What is a 'Prospectus'?", opts: ["A document providing details about an IPO", "A weekly stock report", "An internal company memo", "A financial news article"] },
            hi: { q: "'प्रॉस्पेक्टस' क्या है?", opts: ["आईपीओ (IPO) के बारे में विवरण प्रदान करने वाला एक दस्तावेज", "साप्ताहिक स्टॉक रिपोर्ट", "आंतरिक कंपनी मेमो", "एक वित्तीय समाचार लेख"] },
            correct: 0
        },
        {
            en: { q: "What is a 'Depository'?", opts: ["An institution that holds securities in electronic form", "A bank that gives home loans", "An exchange for trading commodities", "A regulatory body for insurance"] },
            hi: { q: "'डिपॉजिटरी' क्या है?", opts: ["इलेक्ट्रॉनिक रूप में प्रतिभूतियों को रखने वाली एक संस्था", "गृह ऋण देने वाला बैंक", "वस्तुओं के व्यापार के लिए एक एक्सचेंज", "बीमा के लिए एक नियामक निकाय"] },
            correct: 0
        },
        {
            en: { q: "Which ratio indicates the valuation of a company?", opts: ["P/E Ratio", "Current Ratio", "Debt-Equity Ratio", "Inventory Turnover Ratio"] },
            hi: { q: "कौन सा अनुपात कंपनी के मूल्यांकन को दर्शाता है?", opts: ["P/E अनुपात", "करंट रेशियो", "डेट-इक्विटी रेशियो", "इन्वेंट्री टर्नओवर रेशियो"] },
            correct: 0
        },
        {
            en: { q: "What is the role of a 'Custodian'?", opts: ["Safekeeping of assets", "Managing daily trades", "Setting interest rates", "Regulating brokers"] },
            hi: { q: "'कस्टोडियन' (अभिरक्षक) की भूमिका क्या है?", opts: ["परिसंपत्तियों की सुरक्षा करना", "दैनिक ट्रेडों का प्रबंधन करना", "ब्याज दरें निर्धारित करना", "ब्रोकरों को विनियमित करना"] },
            correct: 0
        },
        {
            en: { q: "What is a 'Limit Order'?", opts: ["Buying/selling at a specific price", "Buying/selling at market price", "Stopping all trades", "Canceling an order"] },
            hi: { q: "'लिमिट ऑर्डर' क्या है?", opts: ["एक विशिष्ट कीमत पर खरीदना/बेचना", "बाजार मूल्य पर खरीदना/बेचना", "सभी ट्रेडों को रोकना", "ऑर्डर रद्द करना"] },
            correct: 0
        },
        {
            en: { q: "What is 'Beta' in finance?", opts: ["Measure of stock volatility relative to market", "Measure of company debt", "Measure of dividend yield", "Measure of asset growth"] },
            hi: { q: "वित्त में 'बीटा' (Beta) क्या है?", opts: ["बाजार के सापेक्ष स्टॉक अस्थिरता का माप", "कंपनी के ऋण का माप", "लाभांश यील्ड का माप", "परिसंपत्ति विकास का माप"] },
            correct: 0
        },
        {
            en: { q: "Which index tracks 50 large-cap companies in India?", opts: ["Nifty 50", "BSE Sensex", "Bank Nifty", "Nifty Next 50"] },
            hi: { q: "भारत में कौन सा सूचकांक 50 लार्ज-कैप कंपनियों को ट्रैक करता है?", opts: ["निफ्टी 50 (Nifty 50)", "बीएसई सेंसेक्स", "बैंक निफ्टी", "निफ्टी नेक्स्ट 50"] },
            correct: 0
        },
        {
            en: { q: "What is 'Arbitrage'?", opts: ["Profiting from price differences in different markets", "High-risk gambling", "Investing in gold only", "A tax-saving scheme"] },
            hi: { q: "'आर्बिट्रेज' क्या है?", opts: ["विभिन्न बाजारों में मूल्य अंतर से लाभ कमाना", "उच्च जोखिम वाला जुआ", "केवल सोने में निवेश करना", "एक कर-बचत योजना"] },
            correct: 0
        },
        {
            en: { q: "What is 'Diversification'?", opts: ["Spreading investment to reduce risk", "Investing in only one stock", "Buying foreign currency", "Selling all assets"] },
            hi: { q: "'विविधीकरण' क्या है?", opts: ["जोखिम कम करने के लिए निवेश फैलाना", "केवल एक स्टॉक में निवेश करना", "विदेशी मुद्रा खरीदना", "सभी संपत्ति बेचना"] },
            correct: 0
        },
        {
            en: { q: "Which body regulates the Commodities market in India?", opts: ["SEBI", "RBI", "Ministry of Commerce", "FMC"] },
            hi: { q: "भारत में कमोडिटी बाजार को कौन सा निकाय नियंत्रित करता है?", opts: ["सेबी (SEBI)", "आरबीआई (RBI)", "वाणिज्य मंत्रालय", "एफएमसी (FMC)"] },
            correct: 0
        },
        {
            en: { q: "What is the 'Strike Price'?", opts: ["Pre-determined price in an option contract", "Current market price of a stock", "The face value of a share", "The commission of a broker"] },
            hi: { q: "'स्ट्राइक प्राइस' क्या है?", opts: ["ऑप्शन अनुबंध में पूर्व-निर्धारित मूल्य", "स्टॉक की वर्तमान बाजार कीमत", "शेयर का अंकित मूल्य", "ब्रोकर का कमीशन"] },
            correct: 0
        },
        {
            en: { q: "What is 'Expiry Date' in derivatives?", opts: ["Last date of the contract", "Date of company profit declaration", "Date of dividend payment", "Date of new IPO"] },
            hi: { q: "डेरिवेटिव्स में 'एक्सपायरी डेट' क्या है?", opts: ["अनुबंध की अंतिम तिथि", "कंपनी लाभ घोषणा की तिथि", "लाभांश भुगतान की तिथि", "नए आईपीओ की तिथि"] },
            correct: 0
        },
        {
            en: { q: "What is a 'Call Option'?", opts: ["Right to buy an asset", "Right to sell an asset", "Obligation to buy", "Obligation to sell"] },
            hi: { q: "'कॉल ऑप्शन' क्या है?", opts: ["परिसंपत्ति खरीदने का अधिकार", "परिसंपत्ति बेचने का अधिकार", "खरीदने की बाध्यता", "बेचने की बाध्यता"] },
            correct: 0
        },
        {
            en: { q: "What is 'Put Option'?", opts: ["Right to sell an asset", "Right to buy an asset", "Obligation to buy", "Obligation to sell"] },
            hi: { q: "'पुट ऑप्शन' क्या है?", opts: ["परिसंपत्ति बेचने का अधिकार", "परिसंपत्ति खरीदने का अधिकार", "खरीदने की बाध्यता", "बेचने की बाध्यता"] },
            correct: 0
        },
        {
            en: { q: "Which is a 'Bearish' market signal?", opts: ["Falling prices", "Rising prices", "Stagnant prices", "High volume buying"] },
            hi: { q: "कौन सा 'बियरिश' (मंदी) बाजार संकेत है?", opts: ["गिरती कीमतें", "बढ़ती कीमतें", "स्थिर कीमतें", "उच्च वॉल्यूम खरीदारी"] },
            correct: 0
        },
        {
            en: { q: "Which is a 'Bullish' market signal?", opts: ["Rising prices", "Falling prices", "Low volume", "Regulatory restrictions"] },
            hi: { q: "कौन सा 'बुलिश' (तेजी) बाजार संकेत है?", opts: ["बढ़ती कीमतें", "गिरती कीमतें", "कम वॉल्यूम", "नियामक प्रतिबंध"] },
            correct: 0
        },
        {
            en: { q: "What is a 'Dividend'?", opts: ["Part of profit distributed to shareholders", "Interest on loan", "Tax paid to govt", "Commission of broker"] },
            hi: { q: "'लाभांश' (Dividend) क्या है?", opts: ["शेयरधारकों को वितरित लाभ का हिस्सा", "ऋण पर ब्याज", "सरकार को दिया गया कर", "ब्रोकर का कमीशन"] },
            correct: 0
        },
        {
            en: { q: "What is 'Equity'?", opts: ["Ownership interest in a company", "Debt obligation", "Govt grant", "Fixed deposit"] },
            hi: { q: "'इक्विटी' क्या है?", opts: ["कंपनी में स्वामित्व हित", "ऋण दायित्व", "सरकारी अनुदान", "फिक्स्ड डिपॉजिट"] },
            correct: 0
        },
        {
            en: { q: "What is 'Capital Gain'?", opts: ["Profit from selling an asset", "Income from salary", "Interest from bank", "Bonus from company"] },
            hi: { q: "'कैपिटल गेन' (पूंजीगत लाभ) क्या है?", opts: ["संपत्ति बेचने से लाभ", "वेतन से आय", "बैंक से ब्याज", "कंपनी से बोनस"] },
            correct: 0
        },
        {
            en: { q: "What is 'KYC'?", opts: ["Know Your Customer", "Keep Your Cash", "Key Yield Calculation", "Knowledge of Yield Curve"] },
            hi: { q: "'KYC' क्या है?", opts: ["नो योर कस्टमर (Know Your Customer)", "कीप योर कैश", "की यील्ड कैलकुलेशन", "नॉलेज ऑफ यील्ड कर्व"] },
            correct: 0
        },
        {
            en: { q: "What is 'Primary Market'?", opts: ["Market for new issues", "Market for old shares", "Market for gold", "Market for currency"] },
            hi: { q: "'प्राइमरी मार्केट' क्या है?", opts: ["नए इश्यू के लिए बाजार", "पुराने शेयरों के लिए बाजार", "सोने के लिए बाजार", "मुद्रा के लिए बाजार"] },
            correct: 0
        },
        {
            en: { q: "What is 'Secondary Market'?", opts: ["Market for trading existing shares", "Market for new IPOs", "Market for bank loans", "Market for Govt grants"] },
            hi: { q: "'सेकेंडरी मार्केट' क्या है?", opts: ["मौजूदा शेयरों के व्यापार के लिए बाजार", "नए आईपीओ के लिए बाजार", "बैंक ऋण के लिए बाजार", "सरकारी अनुदान के लिए बाजार"] },
            correct: 0
        },
        {
            en: { q: "What is 'Book Value'?", opts: ["Value of assets as per balance sheet", "Market price of stock", "Price of gold", "Face value of bond"] },
            hi: { q: "'बुक वैल्यू' क्या है?", opts: ["बैलेंस शीट के अनुसार संपत्तियों का मूल्य", "स्टॉक की बाजार कीमत", "सोने की कीमत", "बॉन्ड का अंकित मूल्य"] },
            correct: 0
        },
        {
            en: { q: "What is 'Liquidity'?", opts: ["Ease of converting asset to cash", "Speed of trading computer", "Salary of employees", "Volume of sales"] },
            hi: { q: "'लिक्विडिटी' (तरलता) क्या है?", opts: ["संपत्ति को नकदी में बदलने में आसानी", "ट्रेडिंग कंप्यूटर की गति", "कर्मचारियों का वेतन", "बिक्री का वॉल्यूम"] },
            correct: 0
        },
        {
            en: { q: "What is an 'Underlying Asset'?", opts: ["Asset that determines derivative value", "Asset that is very old", "Asset that is not traded", "Asset owned by the govt"] },
            hi: { q: "'अंतर्निहित परिसंपत्ति' (Underlying Asset) क्या है?", opts: ["परिसंपत्ति जो डेरिवेटिव मूल्य निर्धारित करती है", "बहुत पुरानी संपत्ति", "जिसका व्यापार नहीं होता", "सरकार के स्वामित्व वाली संपत्ति"] },
            correct: 0
        },
        {
            en: { q: "What is 'Hedging'?", opts: ["Strategy to reduce risk", "Strategy to gain maximum profit", "Strategy to avoid taxes", "Strategy to borrow money"] },
            hi: { q: "'हेजिंग' क्या है?", opts: ["जोखिम कम करने की रणनीति", "अधिकतम लाभ प्राप्त करने की रणनीति", "करों से बचने की रणनीति", "पैसे उधार लेने की रणनीति"] },
            correct: 0
        },
        {
            en: { q: "What is 'Premium' in options?", opts: ["Price paid for the option contract", "Tax paid on profit", "Commission of broker", "Face value of stock"] },
            hi: { q: "ऑप्शंस में 'प्रीमियम' क्या है?", opts: ["ऑप्शन अनुबंध के लिए भुगतान की गई कीमत", "लाभ पर भुगतान किया गया कर", "ब्रोकर का कमीशन", "स्टॉक का अंकित मूल्य"] },
            correct: 0
        },
        {
            en: { q: "What is 'Dematerialization'?", opts: ["Converting physical shares to electronic", "Selling electronic shares", "Buying physical shares", "Printing share certificates"] },
            hi: { q: "'डीमटेरियलाइजेशन' क्या है?", opts: ["भौतिक शेयरों को इलेक्ट्रॉनिक में बदलना", "इलेक्ट्रॉनिक शेयर बेचना", "भौतिक शेयर खरीदना", "शेयर प्रमाणपत्र प्रिंट करना"] },
            correct: 0
        },
        {
            en: { q: "What is a 'Blue Chip' company?", opts: ["A financially sound, large company", "A small startup", "A company in loss", "A govt company"] },
            hi: { q: "'ब्लू चिप' कंपनी क्या है?", opts: ["एक आर्थिक रूप से मजबूत, बड़ी कंपनी", "एक छोटा स्टार्टअप", "घाटे में चल रही कंपनी", "एक सरकारी कंपनी"] },
            correct: 0
        },
        {
            en: { q: "Which is a short-term debt instrument?", opts: ["Commercial Paper", "Equity Share", "Preference Share", "Bond"] },
            hi: { q: "कौन सा अल्पकालिक ऋण साधन है?", opts: ["कमर्शियल पेपर", "इक्विटी शेयर", "पसंदीदा शेयर", "बॉन्ड"] },
            correct: 0
        },
        {
            en: { q: "What is 'Portfolio Management Service' (PMS)?", opts: ["Customized investment management for wealthy clients", "Standard mutual fund", "Saving account service", "Loan service"] },
            hi: { q: "'पोर्टफोलियो मैनेजमेंट सर्विस' (PMS) क्या है?", opts: ["धनी ग्राहकों के लिए अनुकूलित निवेश प्रबंधन", "मानक म्यूचुअल फंड", "बचत खाता सेवा", "ऋण सेवा"] },
            correct: 0
        },
        {
            en: { q: "What is 'SIP'?", opts: ["Systematic Investment Plan", "Systematic Income Plan", "Simple Interest Plan", "Savings Investment Plan"] },
            hi: { q: "'SIP' क्या है?", opts: ["सिस्टमैटिक इन्वेस्टमेंट प्लान", "सिस्टमैटिक इनकम प्लान", "सिंपल इंटरेस्ट प्लान", "सेविंग्स इन्वेस्टमेंट प्लान"] },
            correct: 0
        },
        {
            en: { q: "What is 'Yield'?", opts: ["Income return on an investment", "Cost of investment", "Tax on investment", "Profit on sale of asset"] },
            hi: { q: "'यील्ड' (उपज) क्या है?", opts: ["निवेश पर आय रिटर्न", "निवेश की लागत", "निवेश पर कर", "संपत्ति की बिक्री पर लाभ"] },
            correct: 0
        },
        {
            en: { q: "Who is a 'Retail Investor'?", opts: ["An individual investor buying small quantities", "A big bank", "A foreign institution", "A mutual fund house"] },
            hi: { q: "'खुदरा निवेशक' (Retail Investor) कौन है?", opts: ["कम मात्रा में खरीदारी करने वाला व्यक्तिगत निवेशक", "एक बड़ा बैंक", "एक विदेशी संस्था", "एक म्यूचुअल फंड हाउस"] },
            correct: 0
        },
        {
            en: { q: "What is 'Book Building'?", opts: ["Process of price discovery in IPO", "Printing of books", "Managing account books", "Calculating tax"] },
            hi: { q: "'बुक बिल्डिंग' क्या है?", opts: ["आईपीओ में मूल्य खोज की प्रक्रिया", "पुस्तकों की छपाई", "खाता बही का प्रबंधन", "कर की गणना"] },
            correct: 0
        },
        {
            en: { q: "Which index relates to BSE?", opts: ["Sensex", "Nifty", "Nasdaq", "FTSE"] },
            hi: { q: "कौन सा सूचकांक बीएसई (BSE) से संबंधित है?", opts: ["सेंसेक्स (Sensex)", "निफ्टी", "नैस्डैक", "एफटीएसई"] },
            correct: 0
        },
        {
            en: { q: "What is 'Volatile'?", opts: ["Rapid price fluctuations", "Stable price", "No change in price", "Low trading volume"] },
            hi: { q: "'वोलाटाइल' (अस्थिर) क्या है?", opts: ["तेजी से मूल्य में उतार-चढ़ाव", "स्थिर मूल्य", "कीमत में कोई बदलाव नहीं", "कम ट्रेडिंग वॉल्यूम"] },
            correct: 0
        },
        {
            en: { q: "What is a 'Margin'?", opts: ["Collateral for trading", "Commission for broker", "Tax paid to govt", "Profit from trade"] },
            hi: { q: "'मार्जिन' क्या है?", opts: ["ट्रेडिंग के लिए संपार्श्विक (Collateral)", "ब्रोकर के लिए कमीशन", "सरकार को भुगतान किया गया कर", "ट्रेड से लाभ"] },
            correct: 0
        },
        {
            en: { q: "What is 'Bond'?", opts: ["A fixed-income debt instrument", "An equity share", "A bank account", "A mutual fund"] },
            hi: { q: "'बॉन्ड' क्या है?", opts: ["एक निश्चित आय वाला ऋण साधन", "एक इक्विटी शेयर", "एक बैंक खाता", "एक म्यूचुअल फंड"] },
            correct: 0
        },
        // --- NISM Advanced Comprehensive Mix Test: Ultimate Grand Finale (Set 20) ---
        {
            en: { q: "What does the financial pricing indicator 'Implied Volatility' (IV) reflect inside options markets?", opts: ["The market's expectation of future price volatility of the underlying asset as reflected in the option's premium", "The historical maximum stock turnover frequency tracked over a rolling calendar decade", "The absolute accounting net asset value calculated by the custodian bank daily", "The statutory direct tax deduction code enforced by central revenue bureaus post audits"] },
            hi: { q: "ऑप्शंस बाजारों के भीतर वित्तीय मूल्य निर्धारण संकेतक 'निहित अस्थिरता' (Implied Volatility - IV) क्या दर्शाता है?", opts: ["ऑप्शन के प्रीमियम में प्रतिबिंबित अंतर्निहित परिसंपत्ति की भविष्य की मूल्य अस्थिरता की बाजार की उम्मीद", "एक रोलिंग कैलेंडर दशक में ट्रैक की गई ऐतिहासिक अधिकतम स्टॉक टर्नओवर आवृत्ति", "ककस्टोडियन बैंक द्वारा दैनिक रूप से गणना किया गया पूर्ण लेखांकन शुद्ध संपत्ति मूल्य", "ऑडिट के बाद केंद्रीय राजस्व ब्यूरो द्वारा लागू वैधानिक प्रत्यक्ष कर कटौती कोड"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI Mutual Fund rules, what represents the strict regulatory definition of a 'Small Cap' listed corporate entity?", opts: ["Companies ranking from the 251st onwards in terms of full market capitalization", "Companies ranking from the 101st to 250th in market capitalization tier", "Listed corporate entities falling exclusively within the bottom 10 regional exchange setups", "The top 50 corporate startups backed by direct venture capital funding networks"] },
            hi: { q: "सेबी म्यूचुअल फंड नियमों के अनुसार, 'स्मॉल कैप' (Small Cap) सूचीबद्ध कॉर्पोरेट इकाई की सख्त नियामक परिभाषा क्या है?", opts: ["पूर्ण बाजार पूंजीकरण (Market Capitalization) के मामले में 251वें स्थान से आगे की कंपनियां", "मार्केट कैपिटलाइजेशन स्तर में 101वें से 250वें स्थान पर आने वाली कंपनियां", "विशेष रूप से निचले 10 क्षेत्रीय एक्सचेंज सेटअप के भीतर आने वाली सूचीबद्ध कॉर्पोरेट संस्थाएं", "प्रत्यक्ष उद्यम पूंजी वित्तपोषण नेटवर्क द्वारा समर्थित शीर्ष 50 कॉर्पोरेट स्टार्टअप"] },
            correct: 0
        },
        {
            en: { q: "What occurs inside standard Indian life insurance contracts if a claim arises post the expiry of the 8-day technical 'Reinstatement Turnaround Window'?", opts: ["The policy cannot be automatically revived without providing fresh evidence of insurability and clearing all outstanding premium debts", "The absolute sum insured is paid compulsorily following state judicial court interventions", "The entire contract shifts ownership dynamically to the central civil treasury wrapper", "The system converts the premium architecture into a cross-currency dynamic annuity bond layout"] },
            hi: { q: "मानक भारतीय जीवन बीमा अनुबंधों के भीतर क्या होता है यदि 8-दिवसीय तकनीकी 'रीइन्स्टेटमेंट टर्नअराउंड विंडो' की समाप्ति के बाद कोई दावा उठता है?", opts: ["बीमायोग्यता का नया प्रमाण प्रदान किए बिना और सभी बकाया प्रीमियम ऋणों को चुकाए बिना पॉलिसी को स्वचालित रूप से पुनर्जीवित नहीं किया जा सकता है", "राज्य न्यायिक अदालत के हस्तक्षेप के बाद पूर्ण बीमित राशि का अनिवार्य रूप से भुगतान किया जाता है", "पूरा अनुबंध स्वामित्व गतिशील रूप से केंद्रीय नागरिक ट्रेजरी रैपर में स्थानांतरित कर देता है", "सिस्टम प्रीमियम आर्किटेक्चर को क्रॉस-करेंसी गतिशील वार्षिकी बांड लेआउट में बदल देता है"] },
            correct: 0
        },
        {
            en: { q: "In the currency derivative segment on recognized Indian stock exchanges, what represents the standard lot size for a USD-INR options contract?", opts: ["USD 1,000", "USD 10,000", "USD 5,000", "USD 100"] },
            hi: { q: "मान्यता प्राप्त भारतीय स्टॉक एक्सचेंजों पर मुद्रा डेरिवेटिव सेगमेंट में, एक USD-INR ऑप्शंस अनुबंध के लिए मानक लॉट आकार (Lot Size) क्या होता है?", opts: ["USD 1,000", "USD 10,000", "USD 5,000", "USD 100"] },
            correct: 0
        },
        {
            en: { q: "In commodity derivatives trading frameworks, what does a short hedger execute when they anticipate a structural decline in physical mandi prices?", opts: ["Sells futures contracts on the exchange to lock in a guaranteed baseline selling price for their physical inventory", "Buys deep out-of-the-money put options while removing initial maintenance margins entirely", "Combines a spot gold delivery order backed via certified corporate warehouse repositories", "Swaps structural currency parameters across mismatched expiration series setups"] },
            hi: { q: "कमोडिटी डेरिवेटिव्स ट्रेडिंग फ्रेमवर्क में, जब कोई शॉर्ट हेजर (Short Hedger) भौतिक मंडी कीमतों में संरचनात्मक गिरावट की उम्मीद करता है, तो वह क्या निष्पादित करता है?", opts: ["अपनी भौतिक इन्वेंट्री के लिए एक गारंटीकृत आधारभूत बिक्री मूल्य लॉक करने के लिए एक्सचेंज पर फ्यूचर्स अनुबंध बेचता है", "प्रारंभिक रखरखाव मार्जिन को पूरी तरह से हटाते हुए डीप आउट-ऑफ-द-मनी पुट ऑप्शंस खरीदता है", "प्रमाणित कॉर्पोरेट गोदाम रिपोजिटरी के माध्यम से समर्थित हाजिर सोने के वितरण आदेश को जोड़ता है", "असंगत समाप्ति श्रृंखला सेटअप में संरचनात्मक मुद्रा मापदंडों की अदला-बदली करता है"] },
            correct: 0
        },
        {
            en: { q: "What does the financial evaluation metric 'Tracking Error' precisely identify inside passive Mutual Fund Index Funds?", opts: ["The annualized standard deviation of the difference in returns between the passive fund and its target benchmark index", "The systematic network lag compiled when processing digital transaction receipts inside banking setups", "The absolute accounting calculation error committed by the clearing corporation during rollover allocations", "The statutory percentage variance separating direct investment plans from distributor network commission paths"] },
            hi: { q: "पैसिव म्यूचुअल फंड इंडेक्स फंड के भीतर वित्तीय मूल्यांकन मीट्रिक 'ट्रैकिंग एरर' (Tracking Error) सटीक रूप से क्या पहचानता है?", opts: ["पैसिव फंड और उसके लक्षित बेंचमार्क इंडेक्स के बीच रिटर्न के अंतर का वार्षिक मानक विचलन (Standard Deviation)", "बैंकिंग सेटअप के भीतर डिजिटल लेनदेन रसीदों को संसाधित करते समय संकलित व्यवस्थित नेटवर्क लैग", "रोलओवर आवंटन के दौरान क्लियरिंग कॉरपोरेशन द्वारा की गई पूर्ण लेखांकन गणना त्रुटि", "डायरेक्ट निवेश योजनाओं को वितरक नेटवर्क कमीशन पथों से अलग करने वाला वैधानिक प्रतिशत विचरण"] },
            correct: 0
        },
        {
            en: { q: "Which key parameter measures the total percentage of a mutual fund debt portfolio's structural holdings that have been realigned within a 1-year timeframe?", opts: ["Portfolio Turnover Rate", "Expense Ratio Coefficient Layout", "Tracking Error Standard Variance", "Sharpe Volatility Matrix"] },
            hi: { q: "कौन सा मुख्य पैरामीटर किसी म्यूचुअल फंड ऋण पोर्टफोलियो की संरचनात्मक होल्डिंग्स के कुल प्रतिशत को मापता है जिसे 1-वर्ष की समय सीमा में पुनर्गठित किया गया है?", opts: ["पोर्टफोलियो टर्नओवर रेट (Portfolio Turnover Rate)", "व्यय अनुपात गुणांक लेआउट", "ट्रैकिंग एरर मानक विचरण", "शार्प वोलाटिलिटी मैट्रिक्स"] },
            correct: 0
        },
        {
            en: { q: "In exchange-traded options pricing, what does an 'Out-of-the-Money' (OTM) Call option contract possess?", opts: ["An intrinsic value of zero, because the strike price is strictly higher than the current spot price of the underlying asset", "An intrinsic value greater than zero, relying entirely on the implied volatility layer coefficient", "A linear asset correlation index that matches cross-border benchmark tracking parameters precisely", "The legal clearance enabling terminal traders to bypass daily mark-to-market accounting settlement margins"] },
            hi: { q: "एक्सचेंज-ट्रेडेड ऑप्शंस मूल्य निर्धारण में, एक 'आउट-ऑफ-द-मनी' (OTM) कॉल ऑप्शन अनुबंध में क्या होता है?", opts: ["शून्य का अंतर्निहित मूल्य (Intrinsic Value), क्योंकि स्ट्राइक मूल्य अंतर्निहित परिसंपत्ति के वर्तमान हाजिर मूल्य से कड़ाई से अधिक होता है", "शून्य से अधिक अंतर्निहित मूल्य, जो पूरी तरह से निहित अस्थिरता परत गुणांक पर निर्भर करता है", "एक रैखिक परिसंपत्ति सहसंबंध सूचकांक जो सीमा पार बेंचमार्क ट्रैकिंग मापदंडों से सटीक रूप से मेल खाता है", "टर्मिनल व्यापारियों को दैनिक मार्क-टू-मार्केट लेखांकन निपटान मार्जिन को बायपास करने में सक्षम बनाने वाली कानूनी मंजूरी"] },
            correct: 0
        },
        {
            en: { q: "Under IRDAI statutory norms, what legal framework governs the 'Indisputability' of a life insurance policy after a specified duration of active coverage?", opts: ["Section 45 of the Insurance Act, stating the policy cannot be called into question by the insurer after 3 years on grounds of misstatement", "Section 41 regarding strict anti-rebate enforcements processed dynamically across distribution channels", "Section 39 covering the assignment and nominee allocation pipeline managed inside centers", "The consumer protection arbitration matrix enforced via state judicial court interventions"] },
            hi: { q: "IRDAI वैधानिक मानदंडों के तहत, कौन सा कानूनी ढांचा सक्रिय कवरेज की एक निर्दिष्ट अवधि के बाद जीवन बीमा पॉलिसी की 'अविवादास्पदता' (Indisputability) को नियंत्रित करता है?", opts: ["बीमा अधिनियम की धारा 45, जिसमें कहा गया है कि गलत बयानी के आधार पर 3 साल के बाद बीमाकर्ता द्वारा पॉलिसी पर सवाल नहीं उठाया जा सकता है", "वितरण चैनलों में गतिशील रूप से संसाधित सख्त एंटी-रिबेट प्रवर्तन के संबंध में धारा 41", "केंद्रों के भीतर प्रबंधित असाइनमेंट और नामांकित आवंटन पाइपलाइन को कवर करने वाली धारा 39", "राज्य न्यायिक अदालत के हस्तक्षेप के माध्यम से लागू उपभोक्ता संरक्षण मध्यस्थता मैट्रिक्स"] },
            correct: 0
        },
        {
            en: { q: "What does the option Greek 'Vega' precise quantify inside institutional derivative modeling frameworks?", opts: ["The absolute change expected in an option premium relative to a 1% shift inside the underlying asset's implied volatility layer", "The decay velocity threshold of time value assets tracked inside out-of-the-money contract brackets", "The structural percentage change driven by adjustment layers inside central bank repo metrics", "The core correlation index mapping physical gold spot values to warehouse receipts database sheets"] },
            hi: { q: "संस्थागत डेरिवेटिव मॉडलिंग ढांचे के भीतर ऑप्शन ग्रीक 'वेगा' (Vega) सटीक रूप से क्या मापता है?", opts: ["अंतर्निहित परिसंपत्ति की निहित अस्थिरता (Implied Volatility) परत के भीतर 1% के बदलाव के सापेक्ष ऑप्शन प्रीमियम में अपेक्षित अपेक्षित परिवर्तन", "आउट-ऑफ-द-मनी अनुबंध ब्रैकेट के अंदर ट्रैक की गई समय मूल्य संपत्तियों की क्षय वेग सीमा", "केंद्रीय बैंक रेपो मेट्रिक्स के अंदर समायोजन परतों द्वारा संचालित संरचनात्मक प्रतिशत परिवर्तन", "भौतिक सोने के हाजिर मूल्यों को गोदाम रसीद डेटाबेस शीट से मैप करने वाला मुख्य सहसंबंध सूचकांक"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI Mutual Fund regulations, what represents the strict corporate eligibility Net Worth required for an entity to operate legally as an Asset Management Company (AMC)?", opts: ["A continuous minimum Net Worth of ₹50 Crore", "An absolute volume ledger allocation worth ₹10 Crore", "A floating capital structure baseline fixed at ₹25 Crore", "A sovereign financial backing index worth ₹100 Crore exclusively"] },
            hi: { q: "सेबी म्यूचुअल फंड नियमों के तहत, किसी इकाई को एसेट मैनेजमेंट कंपनी (AMC) के रूप में कानूनी रूप से काम करने के लिए आवश्यक सख्त कॉर्पोरेट पात्रता नेट वर्थ (Net Worth) क्या दर्शाता है?", opts: ["₹50 करोड़ की निरंतर न्यूनतम नेट वर्थ (Minimum Net Worth of ₹50 Crore)", "₹10 करोड़ मूल्य का एक पूर्ण वॉल्यूम बहीखाता आवंटन", "₹25 करोड़ पर तय की गई एक फ्लोटिंग पूंजी संरचना बेसलाइन", "विशेष रूप से ₹100 करोड़ मूल्य का एक संप्रभु वित्तीय समर्थन सूचकांक"] },
            correct: 0
        },
        {
            en: { q: "In the context of Option Greeks, what parameter measures the option premium's sensitivity to shifts in the risk-free interest rate?", opts: ["Rho", "Theta", "Vega", "Delta"] },
            hi: { q: "ऑप्शन ग्रीक्स के संदर्भ में, कौन सा पैरामीटर जोखिम-मुक्त ब्याज दर (Risk-free interest rate) में बदलाव के प्रति ऑप्शन प्रीमियम की संवेदनशीलता को मापता है?", opts: ["रो (Rho)", "थिटा (Theta)", "वेगा (Vega)", "डेल्टा (Delta)"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI mutual fund guidelines, what strict parameter defines the portfolio asset allocation requirement for a 'Focused Fund' category?", opts: ["The scheme must restrict its equity asset allocation portfolio configuration to a maximum of 30 shares", "A dynamic structure deploying 100% funds into international sector matrices exclusively across borders", "An index configuration tracking the top 50 exchange assets registered under regional depository participants", "A corporate asset product focused 80% on short-term high yield commercial paper issues backed by sponsors"] },
            hi: { q: "सेबी म्यूचुअल फंड दिशानिर्देशों के तहत, कौन सा सख्त पैरामीटर एक 'फोकस्ड फंड' (Focused Fund) श्रेणी के लिए पोर्टफोलियो परिसंपत्ति आवंटन आवश्यकता को परिभाषित करता है?", opts: ["योजना को अपने इक्विटी परिसंपत्ति आवंटन पोर्टफोलियो कॉन्फ़िगरेशन को अधिकतम 30 शेयरों (Maximum 30 shares) तक सीमित करना होगा", "सीमा पार विशेष रूप से अंतरराष्ट्रीय क्षेत्र मेट्रिसेस में 100% धन लगाने वाली एक गतिशील संरचना", "क्षेत्रीय डिपॉजिटरी पार्टिसिपेंट्स के तहत पंजीकृत शीर्ष 50 एक्सचेंज परिसंपत्तियों को ट्रैक करने वाला एक इंडेक्स कॉन्फ़िगरेशन", "प्रायोजकों द्वारा समर्थित अल्पकालिक उच्च उपज कमर्शियल पेपर मुद्दों पर 80% केंद्रित एक कॉर्पोरेट परिसंपत्ति उत्पाद"] },
            correct: 0
        },
        {
            en: { q: "Inside properties insurance operational setups, what does the 'Principle of Subrogation' authorize an insurance provider to execute post claim settlement?", opts: ["To legally step into the shoes of the insured to pursue recovery damages from the third party responsible for the loss", "To double the direct premium multiplier parameters dynamically inside renewal database logs across centers", "To cancel all statutory nominee allocation listings managed across corporate network mainframes", "To transfer the remaining physical asset layers to interstate sovereign treasury vaults post exit operations"] },
            hi: { q: "संपत्ति बीमा परिचालन सेटअप के भीतर, 'प्रत्यासन का सिद्धांत' (Principle of Subrogation) दावा निपटान के बाद बीमा प्रदाता को क्या निष्पादित करने के लिए अधिकृत करता है?", opts: ["नुकसान के लिए जिम्मेदार तीसरे पक्ष से वसूली के लिए कानूनी रूप से बीमित व्यक्ति के स्थान पर कदम रखना (Transfer of legal rights)", "केंद्रों में नवीनीकरण डेटाबेस लॉग के भीतर प्रत्यक्ष प्रीमियम गुणक मापदंडों को गतिशील रूप से दोगुना करना", "कॉर्पोरेट नेटवर्क मेनफ्रेम में प्रबंधित सभी वैधानिक नामांकित आवंटन लिस्टिंग को रद्द करना", "निकास संचालन के बाद शेष भौतिक संपत्ति परतों को अंतरराज्यीय संप्रभु ट्रेजरी वॉल्ट में स्थानांतरित करना"] },
            correct: 0
        },
        {
            en: { q: "In exchange-traded currency derivatives in India, what represents the standard settlement day cycle parameter for transactional clearing completions?", opts: ["T+1 rolling settlement cycle parameter for daily transaction and mark-to-market balances processing", "T+2 structural settlement timeline tracking standard interbank cash physical flow constraints across regions", "T+0 same day instant clearing system executed retroactively through international maritime channels", "T+5 extended administrative clearing block handled via interstate accounting desks exclusively"] },
            hi: { q: "भारत में एक्सचेंज-ट्रेडेड मुद्रा डेरिवेटिव में, लेनदेन समाशोधन पूरा होने के लिए मानक निपटान दिवस चक्र (Settlement Cycle) पैरामीटर क्या दर्शाता है?", opts: ["दैनिक लेनदेन और मार्क-टू-मार्केट बैलेंस प्रोसेसिंग के लिए T+1 रोलिंग सेटलमेंट चक्र पैरामीटर", "क्षेत्रों में मानक अंतरबैंक नकद भौतिक प्रवाह बाधाओं को ट्रैक करने वाली T+2 संरचनात्मक निपटान समयरेखा", "अंतरराष्ट्रीय समुद्री चैनलों के माध्यम से पूर्वव्यापी रूप से निष्पादित T+0 उसी दिन तत्काल समाशोधन प्रणाली", "विशेष रूप से अंतरराज्यीय लेखांकन डेस्क के माध्यम से संभाला गया T+5 विस्तारित प्रशासनिक समाशोधन ब्लॉक"] },
            correct: 0
        },
        {
            en: { q: "What does the option Greek 'Gamma' calculate precisely inside advanced derivatives modeling frameworks?", opts: ["The rate of change in an option's Delta relative to a 1-unit modification inside the underlying asset price", "The decay sensitivity of the time value premium component across calendar weeks managed via central clearings", "The volatility spread tracker matching international base metal commodity indices across horizons", "The macroeconomic interest parameter shifting corporate valuation multipliers across state hubs"] },
            hi: { q: "उन्नत डेरिवेटिव मॉडलिंग ढांचे के भीतर ऑप्शन ग्रीक 'गामा' (Gamma) सटीक रूप से क्या गणना करता है?", opts: ["अंतर्निहित परिसंपत्ति की कीमत में 1-इकाई के संशोधन के सापेक्ष ऑप्शन के डेल्टा (Delta) के बदलाव की दर", "केंद्रीय क्लियरिंग के माध्यम से प्रबंधित कैलेंडर सप्ताहों में समय मूल्य प्रीमियम घटक की क्षय संवेदनशीलता", "क्षितिज पर अंतरराष्ट्रीय बेस मेटल कमोडिटी सूचकांकों से मेल खाने वाला अस्थिरता स्प्रेड ट्रैकर", "राज्य केंद्रों में कॉर्पोरेट मूल्यांकन मल्टीप्लायरों को स्थानांतरित करने वाला व्यापक आर्थिक ब्याज पैरामीटर"] },
            correct: 0
        },
        {
            en: { q: "Under the SEBI (Listing Obligations and Disclosure Requirements) Regulations, what strict frequency is mandated for listed companies to submit their certified financial results?", opts: ["Quarterly within 45 days from the end of each quarter timeframe block", "Bi-monthly tracking monitored through automated regional infrastructure mainframe systems", "Within 30 days from the completion of the semi-annual processing horizon exclusively", "A rolling weekly cycle processed via central depository automated network terminals across locations"] },
            hi: { q: "सेबी (सूचीबद्धता दायित्व और प्रकटीकरण आवश्यकताएं) नियमों के तहत, सूचीबद्ध कंपनियों को अपने प्रमाणित वित्तीय परिणाम (Financial Results) जमा करने के लिए कौन सी सख्त आवृत्ति अनिवार्य है?", opts: ["प्रत्येक तिमाही (Quarter) की समय सीमा समाप्त होने के 45 दिनों के भीतर त्रैमासिक रूप से", "स्वचालित क्षेत्रीय बुनियादी ढांचा मेनफ्रेम प्रणालियों के माध्यम से मॉनिटर की जाने वाली द्वि-मासिक ट्रैकिंग", "विशेष रूप से अर्ध-वार्षिक प्रसंस्करण क्षितिज पूरा होने के 30 दिनों के भीतर", "स्थानों पर केंद्रीय डिपॉजिटरी स्वचालित नेटवर्क टर्मिनलों के माध्यम से संसाधित एक रोलिंग साप्ताहिक चक्र"] },
            correct: 0
        },
        {
            en: { q: "In the physical commodity derivatives settlement framework inside India, what does the specific term 'Contango' signify?", opts: ["A market condition where the futures contract price trades higher than the current physical spot price parameters over horizons", "The structural operational failure tracking network mainframe login authentication delay parameters across centers", "The absolute legal penalty ledger fine structure applied post compliance monitoring omission gaps inside database sheets", "The natural material decay profile evaluated across accredited cold storage commodity distribution corridors"] },
            hi: { q: "भारत के भीतर भौतिक कमोडिटी डेरिवेटिव निपटान ढांचे में, विशिष्ट शब्द 'कंतैंगो' (Contango) क्या दर्शाता है?", opts: ["एक बाजार स्थिति जहां फ्यूचर्स अनुबंध मूल्य (Futures price) क्षितिज पर वर्तमान भौतिक हाजिर मूल्य मापदंडों से अधिक ट्रेड करता है", "केंद्रों में नेटवर्क मेनफ्रेम लॉगिन प्रमाणीकरण देरी मापदंडों को ट्रैक करने वाली संरचनात्मक परिचालन विफलता", "डेटाबेस शीट के भीतर अनुपालन निगरानी चूक अंतराल के बाद लागू पूर्ण कानूनी दंड बहीखाता जुर्माना संरचना", "मान्यता प्राप्त कोल्ड स्टोरेज कमोडिटी वितरण कॉरिडोर में मूल्यांकित प्राकृतिक सामग्री क्षय प्रोफाइल"] },
            correct: 0
        },
        {
            en: { q: "What does the option Greek 'DthetaDvol' or 'Vera' measure inside advanced structural derivatives option risk auditing matrix setups?", opts: ["The rate of change in an option's Theta relative to continuous modifications inside underlying implied volatility parameters", "The time decay factor affecting the intrinsic value parameter across consecutive contract expiration updates", "The historical correlation mapping index performance over cross-border sovereign treasury asset blocks", "The variance separating direct distribution mechanisms from field distributor marketing channels across states"] },
            hi: { q: "उन्नत संरचनात्मक डेरिवेटिव ऑप्शन जोखिम ऑडिटिंग मैट्रिक्स सेटअप के भीतर ऑप्शन ग्रीक 'DthetaDvol' या 'वेरा' (Vera) क्या मापता है?", opts: ["अंतर्निहित निहित अस्थिरता मापदंडों के भीतर निरंतर संशोधनों के सापेक्ष किसी ऑप्शन के थिटा (Theta) में बदलाव की दर", "लगातार अनुबंध समाप्ति अपडेट में आंतरिक मूल्य पैरामीटर को प्रभावित करने वाला समय क्षय कारक", "सीमा पार संप्रभु ट्रेजरी परिसंपत्ति ब्लॉकों पर इंडेक्स प्रदर्शन का ऐतिहासिक सहसंबंध मानचित्रण", "राज्यों में प्रत्यक्ष वितरण तंत्र को फील्ड वितरक विक्षेपण चैनलों से अलग करने वाला विचरण"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI rules, what precise category of credit ratings indicates that a debt mutual fund scheme's fixed income instruments possess the highest degree of safety?", opts: ["AAA or A1+ ratings according to certified credit rating agencies registered with SEBI", "BBB- structural operational baseline investment indicators carrying moderate duration parameter margins", "D tier speculative default indicators tracked inside corporate accounting logs across centers", "AA corporate credit indicators carrying moderate duration parameter margins across horizons"] },
            hi: { q: "सेबी के नियमों के अनुसार, क्रेडिट रेटिंग की कौन सी सटीक श्रेणी यह दर्शाती है कि डेट म्यूचुअल फंड योजना के फिक्स्ड इनकम उपकरण सुरक्षा की उच्चतम डिग्री (Highest degree of safety) रखते हैं?", opts: ["सेबी के पास पंजीकृत प्रमाणित क्रेडिट रेटिंग एजेंसियों के अनुसार AAA या A1+ रेटिंग", "BBB- संरचनात्मक परिचालन आधारभूत निवेश संकेतक जो मध्यम अवधि पैरामीटर मार्जिन ले जाते हैं", "केंद्रों में कॉर्पोरेट लेखांकन लॉग के भीतर ट्रैक किए गए D श्रेणी के सट्टा डिफ़ॉल्ट संकेतक", "क्षितिज पर मध्यम अवधि पैरामीटर मार्जिन ले जाने वाले AA कॉर्पोरेट क्रेडिट संकेतक"] },
            correct: 0
        },
        {
            en: { q: "What options configuration is established when an investor executes a 'Bear Call Spread' strategy layout?", opts: ["Buying a higher strike Call option and simultaneously selling a lower strike Call option on matching underlying assets", "Writing an uncovered deep ITM put option while executing macro asset allocation switches across systems", "Combining a spot gold delivery order backed via certified physical commodity repository channels across states", "Sells consecutive calendar rollover structures across volatile technology index parameters inside clearing rooms"] },
            hi: { q: "जब एक निवेशक 'बियर कॉल स्प्रेड' (Bear Call Spread) रणनीति लेआउट निष्पादित करता है तो कौन सा ऑप्शंस कॉन्फ़िगरेशन स्थापित होता है?", opts: ["एक उच्च स्ट्राइक कॉल ऑप्शन खरीदना और साथ ही मिलान वाले अंतर्निहित परिसंपत्तियों पर एक कम स्ट्राइक कॉल ऑप्शन बेचना", "प्रणालियों में व्यापक परिसंपत्ति आवंटन स्विच निष्पादित करते समय एक अनकवर्ड डीप आईटीएम पुट ऑप्शन लिखना", "राज्यों में प्रमाणित भौतिक कमोडिटी रिपोजिटरी चैनलों के माध्यम से समर्थित हाजिर सोने के वितरण आदेश को जोड़ता है", "क्लियरिंग रूम के भीतर अस्थिर प्रौद्योगिकी सूचकांक मापदंडों में लगातार कैलेंडर रोलओवर संरचनाएं बेचना"] },
            correct: 0
        },
        {
            en: { q: "Inside the insurance corporate ecosystem, what does the specific term 'Reinsurance' refer to during strategic risk management operations?", opts: ["The process where an insurance company transfers a portion of its corporate underwriting risk exposures to another insurance entity to protect its financial solvency", "The structural allocation formula used to determine field distribution agent incentive tiers", "The legal pathway enabling clearing house desks to auction damaged physical warehouse goods", "The automated calculation matrix measuring capital adequacy baselines across cross-border hubs"] },
            hi: { q: "बीमा कॉर्पोरेट पारिस्थितिकी तंत्र के भीतर, रणनीतिक जोखिम प्रबंधन ऑपरेशन्स के दौरान विशिष्ट शब्द 'पुनर्बीमा' (Reinsurance) किसे संदर्भित करता है?", opts: ["वह प्रक्रिया जिसके तहत एक बीमा कंपनी अपनी वित्तीय सॉल्वेंसी की रक्षा के लिए अपने कॉर्पोरेट अंडरराइटिंग जोखिम एक्सपोजर का एक हिस्सा दूसरी बीमा इकाई को स्थानांतरित करती है", "फील्ड वितरण एजेंट प्रोत्साहन स्तरों को निर्धारित करने के लिए उपयोग किया जाने वाला संरचनात्मक आवंटन फॉर्मूला", "क्लियरिंग हाउस डेस्क को क्षतिग्रस्त भौतिक गोदाम सामानों की नीलामी करने में सक्षम बनाने वाला कानूनी मार्ग", "सीमा पार केंद्रों में पूंजी पर्याप्तता आधार को मापने वाला स्वचालित गणना मैट्रिक्स"] },
            correct: 0
        },
        {
            en: { q: "What does the valuation multiple 'P/E Ratio' quantify inside fundamental equity stock research?", opts: ["Price-to-Earnings Ratio", "Profit-to-Expense Operational Slabs", "Premium-to-Equity Standard Coefficient", "Public-to-Exchange Asset Allocation Parameter"] },
            hi: { q: "मौलिक इक्विटी स्टॉक अनुसंधान के भीतर मूल्यांकन मल्टीपल 'P/E Ratio' क्या दर्शाता है?", opts: ["प्राइस-टू-अर्निंग रेशियो (Price-to-Earnings Ratio)", "प्रॉफिट-टू-एक्सपेंस ऑपरेशनल स्लैब", "प्रीमियम-टू-इक्विटी मानक गुणांक", "पब्लिक-टू-एक्सचेंज एसेट एलोकेशन पैरामीटर"] },
            correct: 0
        },
        {
            en: { q: "Under IRDAI insurance guidelines, what does the 'Principle of Contribution' imply in case of a dual policy setup for a single asset?", opts: ["The insurers will share the total loss proportionately; the client cannot claim the full amount from both to make a profit", "The entire claim must be paid compulsorily by the oldest insurance entity exclusively", "The client receives double payouts automatically backed by state judicial interventions", "The clearing corporation confiscates the physical damaged asset for global auctioning"] },
            hi: { q: "IRDAI बीमा दिशानिर्देशों के तहत, एक ही संपत्ति के लिए दोहरी पॉलिसी सेटअप के मामले में 'अंशदान का सिद्धांत' (Principle of Contribution) क्या दर्शाता है?", opts: ["बीमाकर्ता कुल नुकसान को आनुपातिक रूप से साझा करेंगे; ग्राहक लाभ कमाने के लिए दोनों से पूर्ण राशि का दावा नहीं कर सकता है", "पूरे दावे का भुगतान विशेष रूप से सबसे पुरानी बीमा इकाई द्वारा अनिवार्य रूप से किया जाना चाहिए", "ग्राहक को राज्य के न्यायिक हस्तक्षेपों द्वारा समर्थित स्वचालित रूप से दोगुना भुगतान प्राप्त होता है", "क्लियरिंग कॉरपोरेशन वैश्विक नीलामी के लिए भौतिक क्षतिग्रस्त संपत्ति को जब्त करता है"] },
            correct: 0
        },
        {
            en: { q: "In exchange currency derivatives execution frameworks on Indian platforms, what is the exact base currency lot size applied for a cross-currency Pound Sterling-US Dollar (GBP-USD) contract?", opts: ["GBP 1,000 per lot", "USD 1,000 per lot", "GBP 10,000 per lot", "USD 10,000 per lot"] },
            hi: { q: "भारतीय प्लेटफॉर्म पर एक्सचेंज मुद्रा डेरिवेटिव निष्पादन ढांचे में, क्रॉस-करेंसी पाउंड स्टर्लिंग-यूएस डॉलर (GBP-USD) अनुबंध के लिए लागू सटीक आधार मुद्रा लॉट आकार (Lot Size) क्या होता है?", opts: ["प्रति लॉट GBP 1,000 (GBP 1,000 per lot)", "प्रति लॉट USD 1,000", "प्रति लॉट GBP 10,000", "प्रति लॉट USD 10,000"] },
            correct: 0
        },
        {
            en: { q: "What does the option Greek 'Vega' quantify inside derivative volatility matrices?", opts: ["The sensitivity of an option's premium to a 1% change in the implied volatility of the underlying asset", "The breakdown speed of time value as the contract moves closer to expiration", "The mathematical acceleration rate of Delta per unit shift in spot index configurations", "The direct interest rate risk triggered by shifting macroeconomic capital baselines"] },
            hi: { q: "डेरिवेटिव वोलाटिलिटी मेट्रिसेस के भीतर ऑप्शन ग्रीक 'वेगा' (Vega) क्या मापता है?", opts: ["अंतर्निहित परिसंपत्ति की निहित अस्थिरता (Implied Volatility) में 1% के बदलाव के प्रति ऑप्शन के प्रीमियम की संवेदनशीलता", "अनुबंध की समाप्ति के करीब पहुंचने पर समय मूल्य के घटने की गति", "स्पॉट इंडेक्स कॉन्फ़िगरेशन में प्रति इकाई बदलाव पर डेल्टा की गणितीय त्वरण दर", "व्यापक आर्थिक पूंजी आधारों को बदलने से ट्रिगर होने वाला प्रत्यक्ष ब्याज दर जोखिम"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI mutual fund guidelines, what represents the primary mandate of a 'Value Fund' product category?", opts: ["To deploy a minimum of 65% of net assets into equity and equity-related instruments following a value investment strategy layout", "To allocate 100% of available net funds into international cryptocurrency venture registries across corridors", "To invest exclusively inside sovereign gold futures across multi-commodity exchange counters daily", "To lock in retail capital assets for a mandatory 10-year structural lifecycle blueprint layout scheme"] },
            hi: { q: "सेबी म्यूचुअल फंड दिशानिर्देशों के तहत, 'वैल्यू फंड' (Value Fund) उत्पाद श्रेणी के प्राथमिक अधिदेश को क्या दर्शाता है?", opts: ["वैल्यू इन्वेस्टमेंट रणनीति लेआउट का पालन करते हुए इक्विटी और इक्विटी से संबंधित उपकरणों में शुद्ध संपत्ति का न्यूनतम 65% निवेश करना", "कॉरिडोर में अंतरराष्ट्रीय क्रिप्टोकरेंसी वेंचर रजिस्ट्रियों में उपलब्ध शुद्ध धन का 100% आवंटित करना", "दैनिक मल्टी-कमोडिटी एक्सचेंज काउंटरों पर विशेष रूप से संप्रभु स्वर्ण फ्यूचर्स के भीतर निवेश करना", "एक अनिवार्य 10-वर्षीय संरचनात्मक जीवनचक्र ब्लूप्रिंट लेआउट योजना के लिए खुदरा पूंजीगत संपत्तियों को लॉक करना"] },
            correct: 0
        },
        {
            en: { q: "Which type of debt mutual fund scheme focuses its asset deployment exclusively on short-term corporate debt instruments with maturity profiles up to 91 days?", opts: ["Liquid Fund", "Gilt Fund with Sovereign Risks", "Corporate Bond Fund", "Dynamic Duration Asset Scheme"] },
            hi: { q: "किस प्रकार की डेट म्यूचुअल फंड योजना अपने परिसंपत्ति परिनियोजन को विशेष रूप से 91 दिनों तक की परिपक्वता प्रोफाइल वाले अल्पकालिक कॉर्पोरेट ऋण साधनों पर केंद्रित करती है?", opts: ["लिक्विड फंड (Liquid Fund)", "संप्रभु जोखिमों के साथ गिल्ट फंड", "कॉर्पोरेट बॉन्ड फंड", "डायनेमिक ड्यूरेशन एसेट स्कीम"] },
            correct: 0
        },
        {
            en: { q: "Under the Insurance Act, 1938, what section strictly prohibits any payment of commission or rebates to an unlicensed individual or field agent?", opts: ["Section 41", "Section 45", "Section 39", "Section 27"] },
            hi: { q: "बीमा अधिनियम, 1938 के तहत, कौन सी धारा किसी बिना लाइसेंस वाले व्यक्ति या field एजेंट को कमीशन या छूट के किसी भी भुगतान को कड़ाई से प्रतिबंधित करती है?", opts: ["धारा 41 (Section 41)", "धारा 45", "धारा 39", "धारा 27"] },
            correct: 0
        },
        {
            en: { q: "In physical commodity trading, what entity manages the grading, quality certification, and logistics of goods stored in accredited warehouses?", opts: ["The Exchange Repository and Accredited Warehouse Managers", "The WDRA Central Legal Court Wing", "The Financial Benchmarks India Pvt. Ltd. Treasury Operations", "The state level agricultural marketing mandis registry panels"] },
            hi: { q: "भौतिक कमोडिटी कोरोबार में, मान्यता प्राप्त गोदामों में संग्रहीत सामानों की ग्रेडिंग, गुणवत्ता प्रमाणन और रसद का प्रबंधन कौन सी संस्था करती है?", opts: ["एक्सचेंज रिपोजिटरी और मान्यता प्राप्त गोदाम प्रबंधक (Accredited Warehouse Managers)", "डब्ल्यूडीआरए केंद्रीय कानूनी न्यायालय विंग", "फाइनेंशियल बेंचमार्क इंडिया प्राइवेट लिमिटेड ट्रेजरी ऑपरेशंस", "राज्य स्तरीय कृषि विपणन मंडी रजिस्ट्री पैनल"] },
            correct: 0
        },
        {
            en: { q: "What does the financial metric 'P/B Ratio' calculate inside fundamental equity analysis?", opts: ["Price-to-Book Value Ratio", "Profit-to-Bonus Matrix", "Premium-to-Beta Index", "Public-to-Exchange Allocation Parameter"] },
            hi: { q: "मौलिक इक्विटी विश्लेषण के भीतर वित्तीय मीट्रिक 'P/B Ratio' क्या गणना करता है?", opts: ["प्राइस-टू-बुक मूल्य अनुपात (Price-to-Book Value Ratio)", "प्रॉफिट-टू-बोनस मैट्रिक्स", "प्रीमियम-टू-बीटा इंडेक्स", "पब्लिक-टू-एक्सचेंज एलोकेशन पैरामीटर"] },
            correct: 0
        },
        {
            en: { q: "In the context of Option Greeks, what parameter measures the option premium's sensitivity to shifts in the risk-free interest rate?", opts: ["Rho", "Theta", "Vega", "Delta"] },
            hi: { q: "ऑप्शन ग्रीक्स के संदर्भ में, कौन सा पानामीटर जोखिम-मुक्त ब्याज दर में बदलाव के प्रति ऑप्शन प्रीमियम की संवेदनशीलता को मापता है?", opts: ["रो (Rho)", "थिटा (Theta)", "वेगा (Vega)", "डेल्टा (Delta)"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI guidelines, what is the mandatory lock-in period for an Equity Linked Savings Scheme (ELSS) mutual fund allocation?", opts: ["3 years", "5 years", "1 year", "10 years"] },
            hi: { q: "सेबी के दिशानिर्देशों के तहत, इक्विटी लिंक्ड सेविंग्स स्कीम (ELSS) म्यूचुअल फंड आवंटन के लिए अनिवार्य लॉक-इन अवधि कितनी है?", opts: ["3 वर्ष (3 years)", "5 वर्ष", "1 वर्ष", "10 वर्ष"] },
            correct: 0
        },
        {
            en: { q: "Inside the general insurance operational pipeline, what is the primary role of a 'Surveyor and Loss Assessor'?", opts: ["To independently inspect, quantify, and report the real extent of physical loss post accident for claim settlement", "To handle digital marketing and client onboarding pipelines across states", "To calculate the solvency ratio parameters of the parent insurance company annually", "To manage corporate bond portfolio allocation switches under treasury oversight"] },
            hi: { q: "सामान्य बीमा परिचालन पाइपलाइन के भीतर, 'सर्वेक्षक और हानि मूल्यांकक' (Surveyor and Loss Assessor) की प्राथमिक भूमिका क्या है?", opts: ["दावा निपटान के लिए दुर्घटना के बाद भौतिक नुकसान की वास्तविक सीमा का स्वतंत्र रूप से निरीक्षण, मात्रा निर्धारित और रिपोर्ट करना", "राज्यों में डिजिटल मार्केटिंगและ ग्राहक ऑनबोर्डिंग पाइपलाइनों को संभालना", "मूल बीमा कंपनी के सॉल्वेंसी अनुपात मापदंडों की सालाना गणना करना", "ट्रेजरी निरीक्षण के तहत कॉर्पोरेट बॉन्ड पोर्टफोलियो आवंटन स्विच का प्रबंधन करना"] },
            correct: 0
        },
        {
            en: { q: "What economic theory states that exchange rate movements between two currencies are primarily driven by differences in their national inflation rates?", opts: ["Purchasing Power Parity (PPP)", "Interest Rate Parity (IRP)", "International Fisher Effect Matrix", "Balance of Payments Deficit Theory"] },
            hi: { q: "कौन सा आर्थिक सिद्धांत यह बताता है कि दो मुद्राओं के बीच विनिमय दर का उतार-चढ़ाव मुख्य रूप से उनकी राष्ट्रीय मुद्रास्फीति (Inflation) दरों में अंतर से प्रेरित होता है?", opts: ["क्रय शक्ति समता (Purchasing Power Parity - PPP)", "ब्याज दर समता (IRP)", "अंतर्राष्ट्रीय फिशर प्रभाव मैट्रिक्स", "भुगतान संतुलन घाटा सिद्धांत"] },
            correct: 0
        },
        {
            en: { q: "In commodity derivatives trading, crude oil contracts on Indian multi-commodity exchanges are deeply tracking which international reference pricing hub?", opts: ["WTI / Brent Crude on NYMEX / ICE exchanges", "S&P Global Bullion tracking indexes", "London Metal Exchange (LME) raw metal pricing spreadsheet", "Chicago Board of Trade (CBOT) agricultural soft option layout"] },
            hi: { q: "कमोडिटी डेरिवेटिव्स trading में, भारतीय मल्टी-कमोडिटी एक्सचेंजों पर कच्चे तेल के अनुबंध गहराई से किस अंतर्राष्ट्रीय संदर्भ मूल्य निर्धारण केंद्र को ट्रैक करते हैं?", opts: ["NYMEX / ICE एक्सचेंजों पर WTI / Brent क्रूड बेंचमार्क", "एसएंडपी ग्लोबल बुलियन ट्रैकिंग इंडेक्स", "लंदन मेटल एक्सचेंज (एलएमई) कच्चा धातु मूल्य निर्धारण स्प्रेडशीट", "शिकागो बोर्ड ऑफ ट्रेड (सीबीओटी) कृषि सॉफ्ट ऑप्शन लेआउट"] },
            correct: 0
        },
        {
            en: { q: "What does the option Greek 'Asymmetrical Payoff' profile in standard long vanilla option contracts imply for the buyer?", opts: ["The maximum loss is limited to the premium paid, while the profit potential is theoretically unlimited", "The profit and loss are perfectly balanced and linear relative to the asset movement", "The investor is guaranteed to double their capital regardless of the market direction", "The clearing corporation can dynamically change the strike price during market hours"] },
            hi: { q: "मानक लॉग वैनिला ऑप्शन अनुबंधों में एक 'असममित पेऑफ' (Asymmetrical Payoff) प्रोफाइल खरीडर के लिए क्या दर्शाता है?", opts: ["अधिकतम नुकसान भुगतान किए गए प्रीमियम तक सीमित है, जबकि लाभ की संभावना सैद्धांतिक रूप से असीमित है", "परिसंपत्ति के उतार-चढ़ाव के सापेक्ष लाभ और हानि पूरी तरह से संतुलित और रैखिक हैं", "बाजार की दिशा की परवाह किए बिना निवेशक को अपनी पूंजी दोगुनी करने की गारंटी दी जाती है", "क्लियरिंग कॉरपोरेशन बाजार के घंटों के दौरान स्ट्राइक मूल्य को गतिशील रूप से बदल सकता है"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI mutual fund rules, what is the maximum permissible investment limit for a single sector inside a diversified equity scheme portfolio?", opts: ["20% of the scheme's net assets, extendable to 25% with trustee approval", "50% of the scheme's net assets completely without any constraints", "10% of the aggregate AUM registered under the regional database", "There is no legal sector limit as long as the fund manager captures high Alpha"] },
            hi: { q: "सेबी म्यूचुअल फंड नियमों के तहत, एक विविवीकृत इक्विटी योजना पोर्टफोलियो के भीतर एकल क्षेत्र (Single Sector) के लिए अधिकतम अनुमत निवेश सीमा क्या है?", opts: ["योजना की शुद्ध संपत्ति का 20%, जिसे ट्रस्टी की मंजूरी से 25% तक बढ़ाया जा सकता है", "बिना किसी प्रतिबंध के पूरी तरह से योजना की शुद्ध संपत्ति का 50%", "क्षेत्रीय डेटाबेस के तहत पंजीकृत कुल एयूएम का 10%", "जब तक फंड मैनेजर उच्च अल्फा कैप्चर करता है, तब तक कोई कानूनी क्षेत्र सीमा नहीं है"] },
            correct: 0
        },
        {
            en: { q: "Which type of marine insurance policy covers the loss or damage caused to the physical ship hull or machinery during a specific voyage?", opts: ["Hull Insurance", "Cargo Insurance", "Freight Protection Cover", "Liability Indemnity Matrix"] },
            hi: { q: "किस प्रकार की समुद्री बीमा (Marine insurance) पॉलिसी किसी विशिष्ट यात्रा के दौरान भौतिक जहाज के पतवार (Hull) या मशीनरी को होने वाले नुकसान या क्षति को कवर करती है?", opts: ["हल इंश्योरेंस (Hull Insurance / पतवार बीमा)", "कारगो इंश्योरेंस", "फ्रेट प्रोटेक्शन कवर", "लायबिलिटी इंडेम्निटी मैट्रिक्स"] },
            correct: 0
        },
        {
            en: { q: "In the currency derivative segment, if an exporter expects the Indian Rupee (INR) to appreciate sharply, what action should they theoretically execute to hedge their revenue?", opts: ["Sell USD-INR Futures contracts", "Buy USD-INR Call options contracts", "Sell EUR-INR Put options contracts exclusively", "Register an offshore non-deliverable forward contract sweep"] },
            hi: { q: "मुद्रा डेरिवेटिव सेगमेंट में, यदि एक निर्यातक (Exporter) को उम्मीद है कि भारतीय रुपया (INR) तेजी से मजबूत होगा, तो उन्हें अपने राजस्व के बचाव (Hedging) के लिए सैद्धांतिक रूप से क्या कार्रवाई करनी चाहिए?", opts: ["USD-INR फ्यूचर्स अनुबंध बेचना (Sell USD-INR Futures)", "USD-INR कॉल ऑप्शंस अनुबंध खरीदना", "विशेष रूप से EUR-INR पुट ऑप्शंस अनुबंध बेचना", "एक अपतटीय गैर-डिलिवरेबल फॉरवर्ड अनुबंध स्वीप पंजीकृत करना"] },
            correct: 0
        },
        {
            en: { q: "Under SEBI mutual fund categories, what defines a 'Multi Cap Fund' asset configuration requirement?", opts: ["A minimum of 25% allocation each in Large Cap, Mid Cap, and Small Cap corporate equities", "A dynamic structure deploying 100% funds into international sector matrices", "An index configuration tracking the top 50 exchange assets registered under regional depository participants", "A corporate asset product focused 80% on long-term government securities"] },
            hi: { q: "सेबी म्यूचुअल फंड श्रेणियों के तहत, 'मल्टी कैप फंड' (Multi Cap Fund) परिसंपत्ति विन्यास की आवश्यकता को क्या परिभाषित करता है?", opts: ["लार्ज कैप, मिड कैप और स्मॉल कैप कॉर्पोरेट इक्विटी में न्यूनतम 25-25% आवंटन होना अनिवार्य है", "अंतरराष्ट्रीय क्षेत्र मेट्रिसेस में 100% धन लगाने वाली एक गतिशील संरचना", "क्षेत्रीय डिपॉजिटरी पार्टिसिपेंट्स के तहत पंजीकृत शीर्ष 50 एक्सचेंज परिसंपत्तियों को ट्रैक करने वाला एक इंडेक्स कॉन्फ़िगरेशन", "दीर्घकालिक सरकारी प्रतिभूतियों पर 80% केंद्रित एक कॉर्पोरेट परिसंपत्ति उत्पाद"] },
            correct: 0
        },
        {
            en: { q: "Inside health insurance frameworks inside India, what does the specific protocol 'TPA' signify?", opts: ["Third Party Administrator", "Total Premium Assessment Slabs", "Tax Penalty Avoidance Scheme", "Terminal Patient Allocation Grid"] },
            hi: { q: "भारत के भीतर स्वास्थ्य बीमा ढांचे के अंदर, विशिष्ट प्रोटोकॉल 'TPA' क्या दर्शाता है?", opts: ["थर्ड पार्टी एडमिनिस्ट्रेटर (Third Party Administrator)", "टोटल प्रीमियम असेसमेंट स्लैब", "टैक्स पेनल्टी अवॉइडेंस स्कीम", "टर्मिनल पेशेंट एलोकेशन ग्रिड"] },
            correct: 0
        },
        {
            en: { q: "What derivative position creates a 'Short Straddle' trading setup on recognized Indian options networks?", opts: ["Simultaneously selling an ATM Call option and an ATM Put option with identical strike and expiry parameters", "Buying a deep ITM call alongside selling a deep OTM option structure", "Executing consecutive monthly rollover contracts across sovereign banking desks", "Combining a physical spot gold buy order along with cross-currency futures writing"] },
            hi: { q: "मानकता प्राप्त भारतीय ऑप्शंस नेटवर्क पर कौन सी डेरिवेटिव पोजीशन 'शॉर्ट स्ट्रैडल' (Short Straddle) ट्रेडिंग कअप बनाती है?", opts: ["समान स्ट्राइक और एक्सपायरी मापदंडों के साथ एक ही समय में एक एटीएम (ATM) कॉल ऑप्शन और एक एटीएम पुट ऑप्शन बेचना", "एक गहरी आईटीएम कॉल खरीदने के साथ-साथ एक गहरी ओटीएम ऑप्शन संरचना बेचना", "संप्रभु बैंकिंग डेस्क पर लगातार मासिक रोलओवर अनुबंध निष्पादित करना", "क्रॉस-करेंसी फ्यूचर्स राइटिंग के साथ एक भौतिक हाजिर सोने की खरीद के आदेश को जोड़ना"] },
            correct: 0
        },
        {
            en: { q: "In physical commodity futures settlements inside India, what does the acronym 'CENVAT' or standard input credit tracking impact during invoicing?", opts: ["The netting and legal deduction thresholds applied to core physical asset goods and services tax grids", "The clearing corporation margin calculator metrics tracked during calendar extensions", "The mechanical grading calibration applied over base metals physical inventory logs", "The dynamic calculation formula of out-of-the-money option premiums"] },
            hi: { q: "भारत में भौतिक कमोडिटी फ्यूचर्स निपटान में, चालान (Invoicing) के दौरान 'CENVAT' या मानक इनपुट क्रेडिट क्षेत्राधिकार ट्रैकिंग का क्या प्रभाव पड़ता है?", opts: ["मुख्य भौतिक संपत्ति वस्तु एवं सेवा कर (GST) ग्रिड पर लागू नेटिंग और कानूनी कटौती की सीमा", "कैलेंडर विस्तार के दौरान ट्रैक किए गए क्लियरिंग कॉर्पोरेशन मार्जिन कैलकुलेटर मीट्रिक", "बेस मेटल भौतिक सूची लॉग पर लागू यांत्रिक ग्रेडिंग अंशांकन", "आउट-ऑफ-द-मनी ऑप्शन प्रीमियम का गतिशील गणना फॉर्मूला"] },
            correct: 0
        },
        {
            en: { q: "What does the option Greek 'Lambda' represent inside advanced financial options evaluation models?", opts: ["The measure of leverage capability representing the percentage adjustment in option premium relative to a 1% shift in the underlying asset", "The decay acceleration parameter affecting the absolute intrinsic value across horizons", "The historical correlation mapping cross-border index yields over sovereign bond blocks", "The standard deviation metric isolating tracking errors from passive index strategies"] },
            hi: { q: "उन्नत वित्तीय ऑप्शंस मूल्यांकन मॉडल के भीतर ऑप्शन ग्रीक 'लैम्ब्डा' (Lambda) क्या दर्शाता है?", opts: ["लीवरेज क्षमता का माप जो अंतर्निहित परिसंपत्ति में 1% के बदलाव के सापेक्ष ऑप्शन प्रीमियम में प्रतिशत समायोजन को दर्शाता है", "समय क्षय त्वरण पैरामीटर जो विभिन्न क्षितिज पर पूर्ण आंतरिक मूल्य को प्रभावित करता है", "संप्रभु बांड ब्लॉकों पर सीमा पार इंडेक्स यील्ड का ऐतिहासिक सहसंबंध मानचित्रण", "पैसिव इंडेक्स रणनीतियों से ट्रैकिंग त्रुटियों को अलग करने वाला मानक विचलन मीट्रिक"] },
            correct: 0
        },
        {
            en: { q: "Under the SEBI infrastructure framework, an Asset Management Company (AMC) must possess a minimum net worth of what value to manage mutual fund schemes legally?", opts: ["₹50 Crore", "₹10 Crore", "₹25 Crore", "₹100 Crore"] },
            hi: { q: "सेबी बुनियादी ढांचा ढांचे के तहत, म्यूचुअल फंड योजनाओं को कानूनी रूप से प्रबंधित करने के लिए एक एसेट Management कंपनी (AMC) के पास न्यूनतम कितनी नेट वर्थ होनी चाहिए?", opts: ["₹50 करोड़ (₹50 Crore)", "₹10 करोड़", "₹25 करोड़", "₹100 करोड़"] },
            correct: 0
        },
        {
            en: { q: "Inside life insurance contract architectures, what does the 'Principle of Indemnity' specifically exclude from full commercial restitution formats?", opts: ["Pure Life Insurance policies, because human life possesses an inestimable financial value that cannot be replaced", "Marine cargo transit damages caused via physical oceanic climate hazards", "Commercial fire breakdowns tracked across corporate factory mainframes", "Cross-border logistics asset liabilities covered under syndicated reinsurance wrappers"] },
            hi: { q: "जीवन बीमा अनुबंध संरचनाओं के भीतर, 'क्षतिपूर्ति का सिद्धांत' (Principle of Indemnity) विशेष रूप से पूर्ण व्यावसायिक बहाली प्रारूपों से किसे बाहर करता है?", opts: ["शुद्ध जीवन बीमा पॉलिसियां, क्योंकि मानव जीवन का एक अमूल्य वित्तीय मूल्य है जिसे बदला नहीं जा सकता", "भौतिक समुद्री जलवायु खतरों के कारण समुद्री कार्गो पारगमन नुकसान", "कॉर्पोरेट फैक्ट्री मेनफ्रेम में ट्रैक किए गए व्यावसायिक आग के नुकसान", "सिंडिकेटेड पुनर्बीमा रैपर्स के तहत कवर की गई सीमा पार रसद परिसंपत्ति देनदारियां"] },
            correct: 0
        },
        {
            en: { q: "What occurs inside exchange derivatives clearing house loops when an account triggers a 'Margin Call'?", opts: ["The client must instantly deploy additional capital funds to fulfill initial maintenance margin gaps or risk forced position liquidations", "The database automatically prints compound interest rate bonus payouts to nominee logs", "The trading clearing entity switches option execution formats from European to American setups", "The structural baseline conversion flips the underlying futures parameters into spot deliveries"] },
            hi: { q: "एक्सचेंज डेरिवेटिव क्लियरिंग हाउस लूप के भीतर क्या होता है जब कोई खाता 'मार्जिन कॉल' (Margin Call) ट्रिगर करता है?", opts: ["प्रारंभिक रखरखाव मार्जिन अंतराल को पूरा करने के लिए ग्राहक को तुरंत अतिरिक्त पूंजी लगानी होगी अन्यथा पोजीशन को जबरन बंद कर दिया जाएगा", "डेटाबेस स्वचालित रूप से नामांकित लॉग में चक्रवृद्धि ब्याज दर बोनस भुगतान प्रिंट करता है", "ट्रेडिंग क्लियरिंग इकाई ऑप्शन निष्पादन प्रारूपों को यूरोपीय से अमेरिकी सेटअप में बदल देती है", "संरचनात्मक बेसलाइन रूपांतरण अंतर्निहित फ्यूचर्स मापदंडों को हाजिर डिलीवरी में बदल देता है"] },
            correct: 0
        },
        {
            en: { q: "What does the specific term 'Contango' describe inside exchange-traded commodity forward curves?", opts: ["A market layout where future delivery prices exceed current spot parameters, reflecting continuous carrying overheads", "An acute drop in physical warehouse storage metrics reaching absolute zero capacities", "The immediate suspension of derivative clearing house protocols triggered via statutory bodies", "A linear convergence zone where option delta metrics match baseline asset yields precisely"] },
            hi: { q: "एक्सचेंज-ट्रेडेड कमोडिटी फॉरवर्ड कर्व्स के भीतर विशिष्ट शब्द 'कंतैंगो' (Contango) क्या दर्शाता है?", opts: ["एक बाजार लेआउट जहां भविष्य की डिलीवरी की कीमतें वर्तमान हाजिर मापदंडों से अधिक होती हैं, जो निरंतर वहन ओवरहेड्स को दर्शाती हैं", "भौतिक गोदाम भंडारण मेट्रिक्स में भारी गिरावट जो पूर्ण शून्य क्षमता तक पहुंच जाती है", "वैधानिक निकायों के माध्यम से ट्रिगर किए गए डेरिवेटिव क्लियरिंग हाउस प्रोटोकॉल का तत्काल निलंबन", "एक रैखिक अभिसरण क्षेत्र जहां ऑप्शन डेल्टा मेट्रिक्स बेसलाइन परिसंपत्ति यील्ड से सटीक रूप से मेल खाते हैं"] },
            correct: 0
        }
            ]
};
