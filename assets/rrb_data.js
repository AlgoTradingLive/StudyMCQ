var RRB_MAINS_DATA = {
    marking: { correct: 1, wrong: -0.25, label: "+1 | -0.25" },
    questions: [
        // --- Reasoning Ability ---
        {
            en: { q: "In a certain code language, 'RAILWAY' is written as 'SBJMXBZ'. How will 'STATION' be written in that code?", opts: ["TUBU JPM", "TUBUJPO", "TVCVKPO", "SUBUJPO"] },
            hi: { q: "एक निश्चित कूट भाषा में, 'RAILWAY' को 'SBJMXBZ' लिखा जाता है। उसी कूट भाषा में 'STATION' को कैसे लिखा जाएगा?", opts: ["TUBU JPM", "TUBUJPO", "TVCVKPO", "SUBUJPO"] },
            correct: 1
        },
        {
            en: { q: "Pointing to a man, a woman said, 'His mother is the only daughter of my mother.' How is the woman related to the man?", opts: ["Sister", "Grandmother", "Mother", "Aunt"] },
            hi: { q: "एक पुरुष की ओर इशारा करते हुए एक महिला ने कहा, 'उनकी मां मेरी मां की इकलौती बेटी हैं।' महिला का उस पुरुष से क्या संबंध है?", opts: ["बहन", "दादी/नानी", "माँ", "चाची/मौसी"] },
            correct: 2
        },
        {
            en: { q: "If '+' means 'divided by', '-' means 'add', '*' means 'multiply' and '/' means 'subtract', then what is the value of: 24 + 6 - 2 * 3 / 4?", opts: ["6", "8", "10", "12"] },
            hi: { q: "यदि '+' का अर्थ 'भाग', '-' का अर्थ 'जोड़', '*' का अर्थ 'गुणा' और '/' का अर्थ 'घटाव' है, तो 24 + 6 - 2 * 3 / 4 का मान क्या होगा?", opts: ["6", "8", "10", "12"] },
            correct: 0
        },
        {
            en: { q: "Five planning experts A, B, C, D and E are sitting around a circular table facing the centre. B is between A and C. E is to the immediate left of D. C is to the immediate left of B. Who is sitting to the immediate right of A?", opts: ["B", "C", "D", "E"] },
            hi: { q: "पांच योजना विशेषज्ञ A, B, C, D और E एक वृत्ताकार मेज के चारों ओर केंद्र की ओर मुख करके बैठे हैं। B, A और C के बीच में है। E, D के ठीक बाईं ओर है। C, B के ठीक बाईं ओर है। A के ठीक दाईं ओर कौन बैठा है?", opts: ["B", "C", "D", "E"] },
            correct: 3
        },
        {
            en: { q: "Choose the odd one out from the given options.", opts: ["Ahmedabad", "Mumbai", "Kolkata", "Chennai"] },
            hi: { q: "दिए गए विकल्पों में से विषम को चुनिए।", opts: ["अहमदाबाद", "मुंबई", "कोलकाता", "चेन्नई"] },
            correct: 0
        },

        // --- Quantitative Aptitude ---
        {
            en: { q: "A train standardizing at 60 km/h crosses a pole in 9 seconds. What is the length of the train?", opts: ["120 metres", "150 metres", "180 metres", "324 metres"] },
            hi: { q: "60 किमी/घंटा की गति से चलने वाली एक ट्रेन 9 सेकंड में एक खंभे को पार करती है। ट्रेन की लंबाई क्या है?", opts: ["120 मीटर", "150 मीटर", "180 मीटर", "324 मीटर"] },
            correct: 1
        },
        {
            en: { q: "A sum of money doubles itself at compound interest in 15 years. In how many years will it become eight times itself?", opts: ["30 years", "45 years", "50 years", "60 years"] },
            hi: { q: "कोई धनराशि चक्रवृद्धि ब्याज पर 15 वर्षों में दोगुनी हो जाती है। कितने वर्षों में यह अपने आप की आठ गुनी हो जाएगी?", opts: ["30 वर्ष", "45 वर्ष", "50 वर्ष", "60 वर्ष"] },
            correct: 1
        },
        {
            en: { q: "The ratio of the ages of A and B is 4:5. After 5 years, the ratio will become 5:6. Find the present age of A.", opts: ["20 years", "25 years", "30 years", "15 years"] },
            hi: { q: "A और B की आयु का अनुपात 4:5 है। 5 वर्ष बाद यह अनुपात 5:6 हो जाएगा। A की वर्तमान आयु ज्ञात कीजिए।", opts: ["20 वर्ष", "25 वर्ष", "30 वर्ष", "15 वर्ष"] },
            correct: 0
        },
        {
            en: { q: "An article is sold for ₹300 at a profit of 25%. What is the cost price of the article?", opts: ["₹240", "₹220", "₹250", "₹260"] },
            hi: { q: "एक वस्तु को 25% के लाभ पर ₹300 में बेचा जाता है। वस्तु का क्रय मूल्य क्या है?", opts: ["₹240", "₹220", "₹250", "₹260"] },
            correct: 0
        },
        {
            en: { q: "Two pipes A and B can fill a tank in 20 and 30 minutes respectively. If both pipes are opened together, how long will it take to fill the tank?", opts: ["10 minutes", "12 minutes", "15 minutes", "25 minutes"] },
            hi: { q: "दो पाइप A और B एक टैंक को क्रमशः 20 और 30 मिनट में भर सकते हैं। यदि दोनों पाइपों को एक साथ खोल दिया जाए, तो टैंक को भरने में कितना समय लगेगा?", opts: ["10 मिनट", "12 मिनट", "15 मिनट", "25 मिनट"] },
            correct: 1
        },

        // --- General Awareness / Railway GK ---
        {
            en: { q: "In which year was the first railway line opened in India?", opts: ["1853", "1857", "1905", "1947"] },
            hi: { q: "भारत में पहली रेलवे लाइन किस वर्ष खोली गई थी?", opts: ["1853", "1857", "1905", "1947"] },
            correct: 0
        },
        {
            en: { q: "Where is the headquarters of the Central Railway zone located?", opts: ["Mumbai CST", "Mumbai Churchgate", "New Delhi", "Kolkata"] },
            hi: { q: "मध्य रेलवे ज़ोन का मुख्यालय कहाँ स्थित है?", opts: ["मुंबई सीएसटी", "मुंबई चर्चगेट", "नई दिल्ली", "कोलकाता"] },
            correct: 0
        },
        {
            en: { q: "Which is the longest railway tunnel in India?", opts: ["Karbude Tunnel", "Pir Panjal Tunnel", "Natuwadi Tunnel", "Tike Tunnel"] },
            hi: { q: "भारत में सबसे लंबी रेलवे सुरंग कौन सी है?", opts: ["करबुडे सुरंग", "पीर पंजाल सुरंग", "नाटुवाड़ी सुरंग", "टीके सुरंग"] },
            correct: 1
        },
        {
            en: { q: "Where is the Integral Coach Factory (ICF) located?", opts: ["Kapurthala", "Perambur", "Varanasi", "Bengaluru"] },
            hi: { q: "इंटिग्रल कोच फैक्ट्री (ICF) कहाँ स्थित है?", opts: ["कपूरथला", "पेरंबूर", "वाराणसी", "बेंगलुरु"] },
            correct: 1
        },
        {
            en: { q: "Who was the first Railway Minister of independent India?", opts: ["John Mathai", "Lal Bahadur Shastri", "Jagjivan Ram", "Asaf Ali"] },
            hi: { q: "स्वतंत्र भारत के पहले रेल मंत्री कौन थे?", opts: ["जॉन मथाई", "लाल बहादुर शास्त्री", "जगजीवन राम", "आसिफ अली"] },
            correct: 0
        },
        {
            en: { q: "The National Rail Museum is located in which city?", opts: ["Mumbai", "Kolkata", "New Delhi", "Chennai"] },
            hi: { q: "राष्ट्रीय रेल संग्रहालय किस शहर में स्थित है?", opts: ["मुंबई", "कोलकाता", "नई दिल्ली", "चेन्नई"] },
            correct: 2
        },
        {
            en: { q: "Which railway station has the world's longest railway platform?", opts: ["Gorakhpur", "Kollam Junction", "Kharagpur", "Hubballi Junction"] },
            hi: { q: "किस रेलवे स्टेशन पर दुनिया का सबसे लंबा रेलवे प्लेटफॉर्म है?", opts: ["गोरखपुर", "कोल्लम जंक्शन", "खड़गपुर", "हुब्बल्ली जंक्शन"] },
            correct: 3
        },
        {
            en: { q: "Swaraj Express runs between which of the following stations?", opts: ["Mumbai to Delhi", "Mumbai to Amritsar", "Howrah to Delhi", "Chennai to Delhi"] },
            hi: { q: "स्वराज एक्सप्रेस निम्नलिखित में से किस स्टेशन के बीच चलती है?", opts: ["मुंबई से दिल्ली", "मुंबई से अमृतसर", "हावड़ा से दिल्ली", "चेन्नई से दिल्ली"] },
            correct: 1
        },
        {
            en: { q: "Which state has the densest rail network in India?", opts: ["Uttar Pradesh", "West Bengal", "Maharashtra", "Bihar"] },
            hi: { q: "भारत में किस राज्य का रेल नेटवर्क सबसे सघन है?", opts: ["उत्तर प्रदेश", "पश्चिम बंगाल", "महाराष्ट्र", "बिहार"] },
            correct: 0
        },
        // --- Reasoning Ability (Next Set) ---
        {
            en: { q: "If 'A + B' means A is the brother of B; 'A - B' means A is the sister of B; and 'A * B' means A is the father of B. Which of the following means that C is the son of M?", opts: ["M - N * C", "M * N - C", "M * C + N", "C + N * M"] },
            hi: { q: "यदि 'A + B' का अर्थ है A, B का भाई है; 'A - B' का अर्थ है A, B की बहन है; और 'A * B' का अर्थ है A, B का पिता है। निम्नलिखित में से किसका अर्थ है कि C, M का पुत्र है?", opts: ["M - N * C", "M * N - C", "M * C + N", "C + N * M"] },
            correct: 2
        },
        {
            en: { q: "In a row of 40 students, Rakesh is 12th from the left end. What is his position from the right end?", opts: ["28th", "29th", "30th", "31st"] },
            hi: { q: "40 छात्रों की एक पंक्ति में, राकेश बाएं छोर से 12वें स्थान पर है। दाएं छोर से उसका स्थान क्या है?", opts: ["28वां", "29वां", "30वां", "31वां"] },
            correct: 1
        },
        {
            en: { q: "Statements: All laptops are computers. Some computers are tablets. Conclusions: I. Some laptops are tablets. II. No laptop is a tablet.", opts: ["Only I follows", "Only II follows", "Either I or II follows", "Neither I nor II follows"] },
            hi: { q: "कथन: सभी लैपटॉप कंप्यूटर हैं। कुछ कंप्यूटर टैबलेट हैं। निष्कर्ष: I. कुछ लैपटॉप टैबलेट हैं। II. कोई लैपटॉप टैबलेट नहीं है।", opts: ["केवल I अनुसरण करता है", "केवल II अनुसरण करता है", "या तो I या II अनुसरण करता है", "न तो I और न ही II अनुसरण करता है"] },
            correct: 2
        },
        {
            en: { q: "Select the missing number from the given series: 4, 9, 19, 39, 79, ?", opts: ["119", "139", "159", "169"] },
            hi: { q: "दी गई श्रृंखला में से लुप्त संख्या चुनिए: 4, 9, 19, 39, 79, ?", opts: ["119", "139", "159", "169"] },
            correct: 2
        },
        {
            en: { q: "A man walks 5 km towards South, then turns right and walks 3 km, then turns left and walks 5 km. In which direction is he now from the starting point?", opts: ["West", "South", "South-West", "North-East"] },
            hi: { q: "एक व्यक्ति दक्षिण की ओर 5 किमी चलता है, फिर दाईं ओर मुड़कर 3 किमी चलता है, फिर बाईं ओर मुड़कर 5 किमी चलता है। वह अब प्रारंभिक बिंदु से किस दिशा में है?", opts: ["पश्चिम", "दक्षिण", "दक्षिण-पश्चिम", "उत्तर-पूर्व"] },
            correct: 2
        },
        {
            en: { q: "If 1st January 2024 was a Monday, what day of the week was 1st January 2025?", opts: ["Tuesday", "Wednesday", "Thursday", "Friday"] },
            hi: { q: "यदि 1 जनवरी 2024 को सोमवार था, तो 1 जनवरी 2025 को सप्ताह का कौन सा दिन था?", opts: ["मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार"] },
            correct: 1
        },
        {
            en: { q: "Identify the diagram that best represents the relationship among the given classes: Travelers, Train, Bus", opts: ["Three separate circles", "Two intersecting circles inside a big circle", "Three intersecting circles", "Two separate circles inside a big circle"] },
            hi: { q: "उस आरेख को पहचानें जो दिए गए वर्गों के बीच संबंध को सबसे अच्छी तरह दर्शाता है: यात्री, ट्रेन, बस", opts: ["तीन अलग वृत्त", "एक बड़े वृत्त के अंदर दो प्रतिच्छेदी वृत्त", "तीन प्रतिच्छेदी वृत्त", "एक बड़े वृत्त के अंदर दो अलग वृत्त"] },
            correct: 2
        },
        {
            en: { q: "In a certain code, 'TEMPLE' is written as 'VHQROH'. How is 'CHURCH' written in that code?", opts: ["EKYWFK", "EKYVFK", "EJYWFK", "EKXWFK"] },
            hi: { q: "एक निश्चित कूट में, 'TEMPLE' को 'VHQROH' लिखा जाता है। उसी कूट में 'CHURCH' कैसे लिखा जाएगा?", opts: ["EKYWFK", "EKYVFK", "EJYWFK", "EKXWFK"] },
            correct: 0
        },
        {
            en: { q: "Arrange the following words in a meaningful logical sequence: 1. Reservation, 2. Train Journey, 3. Destination, 4. Planning, 5. Return", opts: ["4, 1, 2, 3, 5", "4, 2, 1, 3, 5", "1, 4, 2, 3, 5", "4, 1, 3, 2, 5"] },
            hi: { q: "निम्नलिखित शब्दों को एक सार्थक तार्किक क्रम में व्यवस्थित करें: 1. आरक्षण, 2. ट्रेन यात्रा, 3. गंतव्य, 4. योजना, 5. वापसी", opts: ["4, 1, 2, 3, 5", "4, 2, 1, 3, 5", "1, 4, 2, 3, 5", "4, 1, 3, 2, 5"] },
            correct: 0
        },
        {
            en: { q: "If 'M' denotes 'multiplication', 'D' denotes 'division', 'A' denotes 'addition' and 'S' denotes 'subtraction', then what will be the value of 18 D 6 M 4 A 8 S 2?", opts: ["18", "20", "14", "22"] },
            hi: { q: "यदि 'M' का अर्थ 'गुणा', 'D' का अर्थ 'भाग', 'A' का अर्थ 'जोड़' और 'S' का अर्थ 'घटाव' है, तो 18 D 6 M 4 A 8 S 2 का मान क्या होगा?", opts: ["18", "20", "14", "22"] },
            correct: 0
        },

        // --- Quantitative Aptitude (Next Set) ---
        {
            en: { q: "The average weight of 8 persons increases by 2.5 kg when a new person comes in place of one of them weighing 65 kg. What might be the weight of the new person?", opts: ["75 kg", "80 kg", "85 kg", "90 kg"] },
            hi: { q: "8 व्यक्तियों का औसत वजन 2.5 किग्रा बढ़ जाता है जब उनमें से 65 किग्रा वजन वाले एक व्यक्ति के स्थान पर एक नया व्यक्ति आता है। नए व्यक्ति का वजन क्या हो सकता है?", opts: ["75 किग्रा", "80 किग्रा", "85 किग्रा", "90 किग्रा"] },
            correct: 2
        },
        {
            en: { q: "A boat can travel with a speed of 13 km/h in still water. If the speed of the stream is 4 km/h, find the time taken by the boat to go 68 km downstream.", opts: ["3 hours", "4 hours", "5 hours", "6 hours"] },
            hi: { q: "एक नाव शांत जल में 13 किमी/घंटा की गति से यात्रा कर सकती है। यदि धारा की गति 4 किमी/घंटा है, तो नाव द्वारा धारा के अनुकूल 68 किमी जाने में लिया गया समय ज्ञात कीजिए।", opts: ["3 घंटे", "4 घंटे", "5 घंटे", "6 घंटे"] },
            correct: 1
        },
        {
            en: { q: "A reduction of 20% in the price of sugar enables a housewife to buy 5 kg more for ₹320. Find the reduced price per kg.", opts: ["₹12.80", "₹14.00", "₹16.00", "₹10.50"] },
            hi: { q: "चीनी की कीमत में 20% की कमी होने से एक गृहिणी ₹320 में 5 किग्रा अधिक चीनी खरीद सकती है। प्रति किग्रा कम हुई कीमत ज्ञात कीजिए।", opts: ["₹12.80", "₹14.00", "₹16.00", "₹10.50"] },
            correct: 0
        },
        {
            en: { q: "The compound interest on ₹10,000 for 2 years at 10% per annum, compounded annually, is:", opts: ["₹2,000", "₹2,100", "₹2,200", "₹2,400"] },
            hi: { q: "₹10,000 पर 2 वर्ष के लिए 10% वार्षिक दर से वार्षिक रूप से संयोजित चक्रवृद्धि ब्याज कितना है?", opts: ["₹2,000", "₹2,100", "₹2,200", "₹2,400"] },
            correct: 1
        },
        {
            en: { q: "A and B can do a piece of work in 12 days, B and C in 15 days, and C and A in 20 days. In how many days can A alone finish the work?", opts: ["30 days", "40 days", "24 days", "20 days"] },
            hi: { q: "A और B एक काम को 12 दिनों में कर सकते हैं, B और C 15 दिनों में, तथा C और A 20 दिनों में कर सकते हैं। A अकेला उस काम को कितने दिनों में पूरा कर सकता है?", opts: ["30 दिन", "40 दिन", "24 दिन", "20 दिन"] },
            correct: 2
        },
        {
            en: { q: "Two trains of lengths 140 m and 160 m are running at speeds of 60 km/h and 40 km/h respectively in opposite directions on parallel tracks. Find the time taken to cross each other.", opts: ["10.2 seconds", "10.8 seconds", "12 seconds", "9.6 seconds"] },
            hi: { q: "140 मीटर और 160 मीटर लंबी दो ट्रेनें क्रमशः 60 किमी/घंटा और 40 किमी/घंटा की गति से समानांतर पटरियों पर विपरीत दिशाओं में चल रही हैं। एक दूसरे को पार करने में लिया गया समय ज्ञात कीजिए।", opts: ["10.2 सेकंड", "10.8 सेकंड", "12 सेकंड", "9.6 सेकंड"] },
            correct: 1
        },
        {
            en: { q: "The HCF and LCM of two numbers are 11 and 7700 respectively. If one of the numbers is 275, find the other number.", opts: ["279", "308", "318", "420"] },
            hi: { q: "दो संख्याओं का म.स.प. (HCF) और ल.स.प. (LCM) क्रमशः 11 और 7700 है। यदि उनमें से एक संख्या 275 है, तो दूसरी संख्या ज्ञात कीजिए।", opts: ["279", "308", "318", "420"] },
            correct: 1
        },
        {
            en: { q: "A sum of ₹12,500 amounts to ₹15,500 in 4 years at simple interest. What is the rate of interest?", opts: ["5%", "6%", "7%", "8%"] },
            hi: { q: "₹12,500 की एक राशि साधारण ब्याज पर 4 वर्षों में ₹15,500 हो जाती है। ब्याज की दर क्या है?", opts: ["5%", "6%", "7%", "8%"] },
            correct: 1
        },
        {
            en: { q: "A jar contains a mixture of milk and water in the ratio 4:1. When 10 litres of the mixture is replaced with water, the ratio becomes 2:3. Find the initial quantity of milk.", opts: ["16 litres", "20 litres", "24 litres", "32 litres"] },
            hi: { q: "एक जार में दूध और पानी का मिश्रण 4:1 के अनुपात में है। जब 10 लीटर मिश्रण को पानी से बदल दिया जाता है, तो अनुपात 2:3 हो जाता है। दूध की प्रारंभिक मात्रा ज्ञात कीजिए।", opts: ["16 लीटर", "20 लीटर", "24 लीटर", "32 लीटर"] },
            correct: 0
        },
        {
            en: { q: "The diagonal of a rectangle is 17 cm and its perimeter is 46 cm. Find the area of the rectangle.", opts: ["120 sq.cm", "130 sq.cm", "140 sq.cm", "150 sq.cm"] },
            hi: { q: "एक आयत का विकर्ण 17 सेमी है और उसका परिमाप 46 सेमी है। आयत का क्षेत्रफल ज्ञात कीजिए।", opts: ["120 वर्ग सेमी", "130 वर्ग सेमी", "140 वर्ग सेमी", "150 वर्ग सेमी"] },
            correct: 0
        },

        // --- General Awareness & Railway GK (Next Set) ---
        {
            en: { q: "Which railway station has the distinction of being the highest railway station in India?", opts: ["Ghoom", "Shimla", "Ooty", "Leh"] },
            hi: { q: "भारत का सबसे ऊँचा रेलवे स्टेशन होने का गौरव किस रेलवे स्टेशन को प्राप्त है?", opts: ["घूम (Ghoom)", "शिमला", "ऊटी", "लेह"] },
            correct: 0
        },
        {
            en: { q: "The 'Lifeline Express', the world's first hospital train, started its journey in which year?", opts: ["1989", "1991", "1993", "1995"] },
            hi: { q: "दुनिया की पहली हॉस्पिटल ट्रेन 'लाइफलाइन एक्सप्रेस' ने अपनी यात्रा किस वर्ष शुरू की थी?", opts: ["1989", "1991", "1993", "1995"] },
            correct: 1
        },
        {
            en: { q: "Which of the following is the longest railway route in India?", opts: ["Kanyakumari to Jammu Tawi", "Dibrugarh to Kanyakumari", "Agartala to Mumbai", "Kolkata to Amritsar"] },
            hi: { q: "निम्नलिखित में से कौन सा भारत का सबसे लंबा रेलवे मार्ग है?", opts: ["कन्याकुमारी से जम्मू तवी", "डिब्रूगढ़ से कन्याकुमारी", "अगरतला से मुंबई", "कोलकाता से अमृतसर"] },
            correct: 1
        },
        {
            en: { q: "Where is the Wheel and Axle Plant of Indian Railways located?", opts: ["Yelahanka, Bengaluru", "Harnaut, Bihar", "Chittaranjan, West Bengal", "Kapurtala, Punjab"] },
            hi: { q: "भारतीय रेलवे का व्हील एंड एक्सेल प्लांट कहाँ स्थित है?", opts: ["येलाहंका, बेंगलुरु", "हरनौत, बिहार", "चित्तरंजन, पश्चिम बंगाल", "कपूरथला, पंजाब"] },
            correct: 0
        },
        {
            en: { q: "Which type of rail gauge is predominantly used by Indian Railways today for main lines?", opts: ["Meter Gauge", "Narrow Gauge", "Broad Gauge", "Standard Gauge"] },
            hi: { q: "मुख्य लाइनों के लिए आज भारतीय रेलवे द्वारा मुख्य रूप से किस प्रकार के रेल गेज का उपयोग किया जाता है?", opts: ["मीटर गेज", "नैरोगैज", "ब्रॉड गेज", "मानक गेज"] },
            correct: 2
        },
        {
            en: { q: "The first electric train in India, 'Deccan Queen', ran between which two stations?", opts: ["Kalyan to Pune", "Bombay VT to Kurla", "Bombay to Thane", "Howrah to Bandel"] },
            hi: { q: "भारत में पहली इलेक्ट्रिक ट्रेन 'डेक्कन क्वीन' किन दो स्टेशनों के बीच चली थी?", opts: ["कल्याण से पुणे", "बॉम्बे वीटी से कुर्ला", "बॉम्बे से ठाणे", "हावड़ा से बंदेल"] },
            correct: 1
        },
        {
            en: { q: "Which mountain railway of India is NOT inscribed as a UNESCO World Heritage Site?", opts: ["Darjeeling Himalayan Railway", "Nilgiri Mountain Railway", "Kalka-Shimla Railway", "Matheran Hill Railway"] },
            hi: { q: "भारत का कौन सा पर्वतीय रेलवे यूनेस्को (UNESCO) की विश्व धरोहर स्थल के रूप में शामिल नहीं है?", opts: ["दार्जिलिंग हिमालयन रेलवे", "नीलगिरि माउंटेन रेलवे", "कालका-शिमला रेलवे", "माथेरान हिल रेलवे"] },
            correct: 3
        },
        {
            en: { q: "What is the rank of Indian Railways network in the world by size?", opts: ["Second", "Third", "Fourth", "Fifth"] },
            hi: { q: "आकार के मामले में दुनिया में भारतीय रेलवे नेटवर्क का कौन सा स्थान है?", opts: ["दूसरा", "तीसरा", "चौथा", "पांचवां"] },
            correct: 2
        },
        {
            en: { q: "The 'Maitree Express' connects India with which of the following countries?", opts: ["Nepal", "Pakistan", "Bangladesh", "Bhutan"] },
            hi: { q: "ँ'मैत्री एक्सप्रेस' भारत को निम्नलिखित में से किस देश से जोड़ती है?", opts: ["नेपाल", "पाकिस्तान", "बांग्लादेश", "भूटान"] },
            correct: 2
        },
        {
            en: { q: "In Indian Railways, what does the acronym 'PNR' stand for?", opts: ["Passenger Number Record", "Passenger Name Record", "Public Number Reservation", "Private Name Record"] },
            hi: { q: "भारतीय रेलवे में, संक्षिप्त नाम 'PNR' का पूर्ण रूप क्या है?", opts: ["पैसेंजर नंबर रिकॉर्ड", "पैसेंजर नेम रिकॉर्ड", "पब्लिक नंबर रिजर्वेशन", "प्राइवेट नेम रिकॉर्ड"] },
            correct: 1
        },

        // --- Basic Computer Knowledge (Mains Special) ---
        {
            en: { q: "Which of the following is considered the brain of the computer?", opts: ["RAM", "CPU", "Hard Disk", "Motherboard"] },
            hi: { q: "निम्नलिखित में से किसे कंप्यूटर का मस्तिष्क माना जाता है?", opts: ["RAM", "CPU", "हार्ड डिस्क", "मदरबोर्ड"] },
            correct: 1
        },
        {
            en: { q: "What is the full form of 'URL' in web browsing?", opts: ["Uniform Resource Locator", "Universal Resource Link", "Uniform Resource Link", "Universal Resource Locator"] },
            hi: { q: "वेब ब्राउज़िंग में 'URL' का पूर्ण रूप क्या है?", opts: ["यूनिफॉर्म रिसोर्स लोकेटर", "यूनिवर्सल रिसोर्स लिंक", "यूनिफॉर्म रिसोर्स लिंक", "यूनिवर्सल रिसोर्स लोकेटर"] },
            correct: 0
        },
        {
            en: { q: "Which memory is volatile and loses its content when the power is turned off?", opts: ["ROM", "RAM", "PROM", "EEPROM"] },
            hi: { q: "कौन सी मेमोरी अस्थिर (volatile) होती है और पावर बंद होने पर अपनी सामग्री खो देती है?", opts: ["ROM", "RAM", "PROM", "EEPROM"] },
            correct: 1
        },
        {
            en: { q: "1 Gigabyte (GB) is equal to how many Megabytes (MB)?", opts: ["1000 MB", "1024 MB", "512 MB", "2048 MB"] },
            hi: { q: "1 गीगाबाइट (GB) कितने मेगाबाइट (MB) के बराबर होता है?", opts: ["1000 MB", "1024 MB", "512 MB", "2048 MB"] },
            correct: 1
        },
        {
            en: { q: "Which of the following is an example of an Operating System?", opts: ["MS Office", "Google Chrome", "Linux", "Adobe Reader"] },
            hi: { q: "निम्नलिखित में से कौन सा ऑपरेटिंग सिस्टम का एक उदाहरण है?", opts: ["MS Office", "Google Chrome", "Linux", "Adobe Reader"] },
            correct: 2
        },

        // --- More Quantitative Aptitude ---
        {
            en: { q: "A person cross a 600m long street in 5 minutes. What is his speed in km per hour?", opts: ["3.6", "7.2", "8.4", "10"] },
            hi: { q: "एक व्यक्ति 5 मिनट में 600 मीटर लंबी सड़क पार करता है। किमी प्रति घंटे में उसकी गति क्या है?", opts: ["3.6", "7.2", "8.4", "10"] },
            correct: 1
        },
        {
            en: { q: "If 15% of x is same as 20% of y, then x:y is:", opts: ["3:4", "4:3", "17:16", "16:17"] },
            hi: { q: "यदि x का 15%, y के 20% के समान है, तो x:y क्या होगा?", opts: ["3:4", "4:3", "17:16", "16:17"] },
            correct: 1
        },
        {
            en: { q: "The price of 2 sarees and 4 shirts is ₹1600. With the same money, one can buy 1 saree and 6 shirts. Find the price of 12 shirts.", opts: ["₹1200", "₹2400", "₹4800", "Cannot be determined"] },
            hi: { q: "2 साड़ियों और 4 शर्ट की कीमत ₹1600 है। उसी पैसे से कोई 1 साड़ी और 6 शर्ट खरीद सकता है। 12 शर्ट की कीमत ज्ञात कीजिए।", opts: ["₹1200", "₹2400", "₹4800", "निर्धारित नहीं किया जा सकता"] },
            correct: 1
        },
        {
            en: { q: "Find the odd man out in the series: 10, 25, 45, 54, 60, 75, 80", opts: ["45", "54", "60", "75"] },
            hi: { q: "श्रृंखला में विषम संख्या ज्ञात कीजिए: 10, 25, 45, 54, 60, 75, 80", opts: ["45", "54", "60", "75"] },
            correct: 1
        },
        {
            en: { q: "A vendor bought toffees at 6 for a rupee. How many for a rupee must he sell to gain 20%?", opts: ["3", "4", "5", "6"] },
            hi: { q: "एक विक्रेता ने ₹1 में 6 की दर से टॉफियां खरीदीं। 20% का लाभ प्राप्त करने के लिए उसे ₹1 में कितनी टॉफियां बेचनी चाहिए?", opts: ["3", "4", "5", "6"] },
            correct: 2
        },

        // --- More Reasoning Ability ---
        {
            en: { q: "In a certain code, '743' means 'mangoes are good', '657' means 'eat good food' and '934' means 'mangoes are ripe'. Which digit means 'ripe' in that code?", opts: ["9", "4", "3", "7"] },
            hi: { q: "एक निश्चित कूट में, '743' का अर्थ 'mangoes are good', '657' का अर्थ 'eat good food' और '934' का अर्थ 'mangoes are ripe' है। उस कूट में किस अंक का अर्थ 'ripe' है?", opts: ["9", "4", "3", "7"] },
            correct: 0
        },
        {
            en: { q: "Look at this series: 7, 10, 8, 11, 9, 12, ... What number should come next?", opts: ["7", "10", "12", "13"] },
            hi: { q: "इस श्रृंखला को देखें: 7, 10, 8, 11, 9, 12, ... आगे कौन सी संख्या आनी चाहिए?", opts: ["7", "10", "12", "13"] },
            correct: 1
        },
        {
            en: { q: "A, B, C, D and E play a game of cards. A says to B, 'If you give me 3 cards, you will have as many as E has and I shall have 3 times as many as E has.' If A and B together have 34 cards, how many cards does E have?", opts: ["8", "10", "12", "6"] },
            hi: { q: "A, B, C, D और E ताश का खेल खेलते हैं। A, B से कहता है, 'यदि तुम मुझे 3 कार्ड देते हो, तो तुम्हारे पास उतने ही कार्ड होंगे जितने E के पास हैं और मेरे पास E से 3 गुना कार्ड होंगे।' यदि A और B के पास मिलाकर 34 कार्ड हैं, तो E के पास कितने कार्ड हैं?", opts: ["8", "10", "12", "6"] },
            correct: 3
        },
        {
            en: { q: "Introducing a boy, a girl said, 'He is the son of the daughter of the father of my uncle.' How is the boy related to the girl?", opts: ["Brother", "Nephew", "Uncle", "Son-in-law"] },
            hi: { q: "एक लड़के का परिचय देते हुए एक लड़की ने कहा, 'वह मेरे चाचा के पिता की बेटी का बेटा है।' लड़के का लड़की से क्या संबंध है?", opts: ["भाई (या ममेरा/फुफेरा भाई)", "भतीजा", "चाचा", "दामाद"] },
            correct: 0
        },
        {
            en: { q: "If South-East becomes North, North-East becomes West and so on. What will West become?", opts: ["North-East", "North-West", "South-East", "South-West"] },
            hi: { q: "यदि दक्षिण-पूर्व, उत्तर बन जाता है, उत्तर-पूर्व, पश्चिम बन जाता है और इसी तरह आगे भी बदलता है, तो पश्चिम क्या बन जाएगा?", opts: ["उत्तर-पूर्व", "उत्तर-पश्चिम", "दक्षिण-पूर्व", "दक्षिण-पश्चिम"] },
            correct: 2
        },

        // --- More General Awareness ---
        {
            en: { q: "The international boundary between India and Pakistan along Punjab/Rajasthan is known as?", opts: ["McMahon Line", "Radcliffe Line", "Durand Line", "Line of Control"] },
            hi: { q: "पंजाब/राजस्थान के साथ भारत और पाकिस्तान के बीच अंतर्राष्ट्रीय सीमा को किस नाम से जाना जाता है?", opts: ["मैकमोहन रेखा", "रेडक्लिफ रेखा", "डूरंड रेखा", "नियंत्रण रेखा (LoC)"] },
            correct: 1
        },
        {
            en: { q: "Which Indian state has the longest coastline?", opts: ["Maharashtra", "Tamil Nadu", "Gujarat", "Andhra Pradesh"] },
            hi: { q: "किस भारतीय राज्य की तटरेखा सबसे लंबी है?", opts: ["महाराष्ट्र", "तमिलनाडु", "गुजरात", "आंध्र प्रदेश"] },
            correct: 2
        },
        {
            en: { q: "Who is known as the 'Father of Indian Green Revolution'?", opts: ["Dr. Verghese Kurien", "M.S. Swaminathan", "Dr. Homi Bhabha", "Sam Pitroda"] },
            hi: { q: "भारत में 'हरित क्रांति के जनक' के रूप में किसे जाना जाता है?", opts: ["डॉ. वर्गीज कुरियन", "एम. एस. स्वामीनाथन", "डॉ. होमी भाभा", "सैम पित्रोदा"] },
            correct: 1
        },
        {
            en: { q: "The fundamental rights in the Indian Constitution are borrowed from the constitution of which country?", opts: ["UK", "USA", "USSR", "Ireland"] },
            hi: { q: "भारतीय संविधान में मौलिक अधिकार किस देश के संविधान से लिए गए हैं?", opts: ["यूके (UK)", "यूएसए (USA)", "यूएसएसआर (USSR)", "आयरलैंड"] },
            correct: 1
        },
        {
            en: { q: "Which planet is known as the 'Morning Star' or 'Evening Star'?", opts: ["Mercury", "Venus", "Mars", "Jupiter"] },
            hi: { q: "किस ग्रह को 'भोर का तारा' या 'सांझ का तारा' कहा जाता है?", opts: ["बुध", "शुक्र", "मंगल", "बृहस्पति"] },
            correct: 1
        },
        // --- Quantitative Aptitude (Set 3) ---
        {
            en: { q: "The ratio of the areas of two squares is 1:4. Find the ratio of their perimeters.", opts: ["1:2", "1:4", "1:8", "2:3"] },
            hi: { q: "दो वर्गों के क्षेत्रफलों का अनुपात 1:4 है। उनके परिमापों का अनुपात ज्ञात कीजिए।", opts: ["1:2", "1:4", "1:8", "2:3"] },
            correct: 0
        },
        {
            en: { q: "A sum of ₹8,000 amounts to ₹9,261 in 3 years at compound interest. Find the rate of interest per annum.", opts: ["4%", "5%", "6%", "8%"] },
            hi: { q: "₹8,000 की राशि चक्रवृद्धि ब्याज पर 3 वर्षों में ₹9,261 हो जाती है। वार्षिक ब्याज दर ज्ञात कीजिए।", opts: ["4%", "5%", "6%", "8%"] },
            correct: 1
        },
        {
            en: { q: "If the cost price of 15 articles is equal to the selling price of 12 articles, find the profit percentage.", opts: ["20%", "25%", "30%", "33.33%"] },
            hi: { q: "यदि 15 वस्तुओं का क्रय मूल्य 12 वस्तुओं के विक्रय मूल्य के बराबर है, तो लाभ प्रतिशत ज्ञात कीजिए।", opts: ["20%", "25%", "30%", "33.33%"] },
            correct: 1
        },
        {
            en: { q: "A and B start a business with investments of ₹5000 and ₹4500 respectively. After 4 months, A withdraws half of his capital. If the total annual profit is ₹3200, find A's share.", opts: ["₹1400", "₹1600", "₹1500", "₹1800"] },
            hi: { q: "A और B क्रमशः ₹5000 और ₹4500 के निवेश के साथ एक व्यवसाय शुरू करते हैं। 4 महीने बाद, A अपनी आधी पूंजी निकाल लेता है। यदि कुल वार्षिक लाभ ₹3200 है, तो A का हिस्सा ज्ञात कीजिए।", opts: ["₹1400", "₹1600", "₹1500", "₹1800"] },
            correct: 0
        },
        {
            en: { q: "A train 150 metres long passes a telegraph post in 12 seconds. In how much time will it cross a bridge 250 metres long?", opts: ["20 seconds", "24 seconds", "32 seconds", "40 seconds"] },
            hi: { q: "150 मीटर लंबी एक ट्रेन 12 सेकंड में एक टेलीग्राफ पोस्ट को पार करती है। 250 मीटर लंबे पुल को पार करने में इसे कितना समय लगेगा?", opts: ["20 सेकंड", "24 सेकंड", "32 सेकंड", "40 सेकंड"] },
            correct: 2
        },
        {
            en: { q: "The average age of a class of 30 students is 15 years. If the teacher's age is included, the average increases by 1 year. What is the teacher's age?", opts: ["45 years", "46 years", "40 years", "50 years"] },
            hi: { q: "30 छात्रों की एक कक्षा की औसत आयु 15 वर्ष है। यदि शिक्षक की आयु को शामिल कर लिया जाए, तो औसत 1 वर्ष बढ़ जाता है। शिक्षक की आयु क्या है?", opts: ["45 वर्ष", "46 वर्ष", "40 वर्ष", "50 वर्ष"] },
            correct: 1
        },
        {
            en: { q: "What is the value of (0.04)^(-1.5)?", opts: ["25", "125", "250", "625"] },
            hi: { q: "(0.04)^(-1.5) का मान क्या है?", opts: ["25", "125", "250", "625"] },
            correct: 1
        },
        {
            en: { q: "Two numbers are in the ratio 3:4. If their LCM is 240, find the smaller number.", opts: ["60", "80", "90", "120"] },
            hi: { q: "दो संख्याएँ 3:4 के अनुपात में हैं। यदि उनका एलसीएम (LCM) 240 है, तो छोटी संख्या ज्ञात कीजिए।", opts: ["60", "80", "90", "120"] },
            correct: 0
        },
        {
            en: { q: "A man can row 6 km/h in still water. If the speed of the current is 2 km/h, it takes him 4 hours to row to a place and come back. How far is the place?", opts: ["6 km", "8 km", "10 km", "12 km"] },
            hi: { q: "एक व्यक्ति शांत जल में 6 किमी/घंटा की गति से नाव चला सकता है। यदि धारा की गति 2 किमी/घंटा है, तो उसे एक स्थान पर जाने और वापस आने में 4 घंटे लगते हैं। वह स्थान कितनी दूर है?", opts: ["6 किमी", "8 किमी", "10 किमी", "12 किमी"] },
            correct: 1
        },
        {
            en: { q: "A pipe can empty a tank in 40 minutes. A second pipe with twice the diameter of the first pipe is also attached to empty the tank. How long will both pipes together take to empty the tank?", opts: ["8 minutes", "10 minutes", "13.33 minutes", "20 minutes"] },
            hi: { q: "एक पाइप 40 मिनट में एक टैंक को खाली कर सकता है। टैंक को खाली करने के लिए पहले पाइप से दोगुने व्यास वाला एक दूसरा पाइप भी लगाया जाता है। दोनों पाइप मिलकर टैंक को खाली करने में कितना समय लेंगे?", opts: ["8 मिनट", "10 मिनट", "13.33 मिनट", "20 मिनट"] },
            correct: 0
        },

        // --- Reasoning Ability (Set 3) ---
        {
            en: { q: "In a certain code, 'GIVE' is written as '5137' and 'BAT' is written as '924'. How is 'GATE' written in that code?", opts: ["5247", "5427", "5724", "2547"] },
            hi: { q: "एक निश्चित कूट में, 'GIVE' को '5137' और 'BAT' को '924' लिखा जाता है। उसी कूट में 'GATE' कैसे लिखा जाएगा?", opts: ["5247", "5427", "5724", "2547"] },
            correct: 0
        },
        {
            en: { q: "Find the missing term in the sequence: Z1A, X2D, V6G, T21J, ?", opts: ["R88M", "R84M", "R88N", "S88M"] },
            hi: { q: "श्रृंखला में लुप्त पद ज्ञात कीजिए: Z1A, X2D, V6G, T21J, ?", opts: ["R88M", "R84M", "R88N", "S88M"] },
            correct: 0
        },
        {
            en: { q: "Statements: Some keys are staplers. All staplers are pins. Conclusions: I. Some pins are keys. II. Some pins are staplers.", opts: ["Only I follows", "Only II follows", "Neither I nor II follows", "Both I and II follow"] },
            hi: { q: "कथन: कुछ चाबियां स्टेपलर हैं। सभी स्टेपलर पिन हैं। निष्कर्ष: I. कुछ पिन चाबियां हैं। II. कुछ पिन स्टेपलर हैं।", opts: ["केवल I अनुसरण करता है", "केवल II अनुसरण करता", "न तो I और न ही II अनुसरण करता है", "I और II दोनों अनुसरण करते हैं"] },
            correct: 3
        },
        {
            en: { q: "If A is to the South of B and C is to the East of B, in what direction is A with respect to C?", opts: ["North-East", "North-West", "South-East", "South-West"] },
            hi: { q: "यदि A, B के दक्षिण में है और C, B के पूर्व में है, तो C के संदर्भ में A किस दिशा में है?", opts: ["उत्तर-पूर्व", "उत्तर-पश्चिम", "दक्षिण-पूर्व", "दक्षिण-पश्चिम"] },
            correct: 3
        },
        {
            en: { q: "Suresh is older than Ramesh. Mohan is younger than Ramesh but older than Sohan. Who is the youngest among them?", opts: ["Ramesh", "Mohan", "Sohan", "Suresh"] },
            hi: { q: "सुरेश, रमेश से बड़ा है। मोहन, रमेश से छोटा है लेकिन सोहन से बड़ा है। उनमें सबसे छोटा कौन है?", opts: ["रमेश", "मोहन", "सोहन", "सुरेश"] },
            correct: 2
        },
        {
            en: { q: "An accurate clock shows 8 o'clock in the morning. Through how many degrees will the hour hand rotate when the clock shows 2 o'clock in the afternoon?", opts: ["150°", "160°", "180°", "210°"] },
            hi: { q: "एक सटीक घड़ी सुबह के 8 बजे दिखाती है। जब घड़ी दोपहर के 2 बजे दिखाएगी, तो घंटे की सुई कितने डिग्री घूमेगी?", opts: ["150°", "160°", "180°", "210°"] },
            correct: 2
        },
        {
            en: { q: "In a class of 50 students, Jatin's rank is 15th from the top. What is his rank from the bottom?", opts: ["35th", "36th", "37th", "34th"] },
            hi: { q: "50 छात्रों की एक कक्षा में, जतिन का स्थान ऊपर से 15वां है। नीचे से उसका स्थान क्या है?", opts: ["35वां", "36वां", "37वां", "34वां"] },
            correct: 1
        },
        {
            en: { q: "Which of the following diagrams indicates the best relation between Iron, Lead and Nitrogen?", opts: ["Three separate circles", "Two intersecting circles inside a big circle", "Three intersecting circles", "One circle inside another circle"] },
            hi: { q: "निम्नलिखित में से कौन सा आरेख लोहा (Iron), सीसा (Lead) और नाइट्रोजन (Nitrogen) के बीच सबसे अच्छा संबंध दर्शाता है?", opts: ["तीन अलग वृत्त", "एक बड़े वृत्त के अंदर दो प्रतिच्छेदी वृत्त", "तीन प्रतिच्छेदी वृत्त", "एक वृत्त के अंदर दूसरा वृत्त"] },
            correct: 0
        },
        {
            en: { q: "If 'white' is called 'blue', 'blue' is called 'red', 'red' is called 'yellow', and 'yellow' is called 'green', what is the color of human blood?", opts: ["Red", "Blue", "Yellow", "Green"] },
            hi: { q: "यदि 'सफेद' को 'नीला' कहा जाए, 'नीला' को 'लाल' कहा जाए, 'लाल' को 'पीला' कहा जाए, और 'पीला' को 'हरा' कहा जाए, तो मानव रक्त का रंग क्या होगा?", opts: ["लाल", "नीला", "पीला", "हरा"] },
            correct: 2
        },
        {
            en: { q: "Pointing to a photograph, a man said, 'I have no brother or sister but that man's father is my father's son.' Whose photograph was it?", opts: ["His own", "His son's", "His father's", "His nephew's"] },
            hi: { q: "एक तस्वीर की ओर इशारा करते हुए एक व्यक्ति ने कहा, 'मेरा कोई भाई या बहन नहीं है, लेकिन उस आदमी का पिता मेरे पिता का बेटा है।' वह तस्वीर किसकी थी?", opts: ["उसकी अपनी", "उसके बेटे की", "उसके पिता की", "उसके भतीजे की"] },
            correct: 1
        },

        // --- General Awareness & Railway Knowledge (Set 3) ---
        {
            en: { q: "Which zone is the largest railway zone in India by route kilometers?", opts: ["Central Railway", "Western Railway", "Northern Railway", "Eastern Railway"] },
            hi: { q: "मार्ग किलोमीटर के हिसाब से भारत का सबसे बड़ा रेलवे ज़ोन कौन सा है?", opts: ["मध्य रेलवे", "पश्चिम रेलवे", "उत्तर रेलवे", "पूर्व रेलवे"] },
            correct: 2
        },
        {
            en: { q: "Where is the Indian Railways Institute of Mechanical and Electrical Engineering (IRIMEE) located?", opts: ["Jamalpur", "Nasik", "Secunderabad", "Pune"] },
            hi: { q: "भारतीय रेलवे मैकेनिकल और इलेक्ट्रिकल इंजीनियरिंग संस्थान (IRIMEE) कहाँ स्थित है?", opts: ["जमालपुर", "नासिक", "सिकंदराबाद", "पुणे"] },
            correct: 0
        },
        {
            en: { q: "Which railway line runs parallel to the Arabian Sea, offering scenic coastal views?", opts: ["Konkan Railway", "Kalka-Shimla Railway", "Nilgiri Mountain Railway", "Kashmir Railway"] },
            hi: { q: "कौन सी रेलवे लाइन अरब सागर के समानांतर चलती है, जो सुंदर तटीय दृश्य प्रदान करती है?", opts: ["कोंकण रेलवे", "कालका-शिमला रेलवे", "नीलगिरि माउंटेन रेलवे", "कश्मीर रेलवे"] },
            correct: 0
        },
        {
            en: { q: "What is the acronym 'RDSO' associated with Indian Railways full form?", opts: ["Research Designs and Standards Organisation", "Railway Development and Safety Organisation", "Regional Development and Security Office", "Railway Design and Specifications Office"] },
            hi: { q: "भारतीय रेलवे से जुड़े संक्षिप्त नाम 'RDSO' का पूर्ण रूप क्या है?", opts: ["रिसर्च डिज़ाइन्स एंड स्टैंडर्ड्स ऑर्गनाइजेशन", "रेलवे डेवलपमेंट एंड सेफ्टी ऑर्गनाइजेशन", "रीजनल डेवलपमेंट एंड सिक्योरिटी ऑफिस", "रेलवे डिजाइन एंड स्पेसिफिकेशन्स ऑफिस"] },
            correct: 0
        },
        {
            en: { q: "The first computerised reservation system of Indian Railways was introduced in which city?", opts: ["Mumbai", "Kolkata", "New Delhi", "Chennai"] },
            hi: { q: "भारतीय रेलवे की पहली कम्प्यूटरीकृत आरक्षण प्रणाली किस शहर में शुरू की गई थी?", opts: ["मुंबई", "कोलकाता", "नई दिल्ली", "चेन्नई"] },
            correct: 2
        },
        {
            en: { q: "Which train in India has the longest non-stop run between two stations?", opts: ["Rajdhani Express", "Vande Bharat Express", "Trivandrum Rajdhani", "Duronto Express"] },
            hi: { q: "भारत में किस ट्रेन का दो स्टेशनों के बीच सबसे लंबा नॉन-स्टॉप रन है?", opts: ["राजधानी एक्सप्रेस", "वंदे भारत एक्सप्रेस", "त्रिवेंद्रम राजधानी", "दुरंतो एक्सप्रेस"] },
            correct: 2
        },
        {
            en: { q: "Where is the Rail Wheel Factory located, other than Bengaluru?", opts: ["Bela, Bihar", "Kapurthala, Punjab", "Chittaranjan, West Bengal", "Rae Bareli, UP"] },
            hi: { q: "बेंगलुरु के अलावा रेल व्हील फैक्ट्री (Rail Wheel Factory) कहाँ स्थित है?", opts: ["बेला, बिहार", "कपूरथला, पंजाब", "चित्तरंजन, पश्चिम बंगाल", "रायबरेली, यूपी"] },
            correct: 0
        },
        {
            en: { q: "Which express train was introduced to commemorate the 150th anniversary of Swami Vivekananda's birth?", opts: ["Vivek Express", "Kavi Guru Express", "Yuva Express", "Shatabdi Express"] },
            hi: { q: "स्वामी विवेकानंद की 150वीं जयंती के उपलक्ष्य में कौन सी एक्सप्रेस ट्रेन शुरू की गई थी?", opts: ["विवेक एक्सप्रेस", "कवि गुरु एक्सप्रेस", "युवा एक्सप्रेस", "शताब्दी एक्सप्रेस"] },
            correct: 0
        },
        {
            en: { q: "What is the slogan of Indian Railways?", opts: ["Lifeline of the Nation", "Service with a Smile", "Connecting India", "Gateway to Progress"] },
            hi: { q: "भारतीय रेलवे का नारा (Slogan) क्या है?", opts: ["राष्ट्र की जीवन रेखा (Lifeline of the Nation)", "सेवा मुस्कान के साथ", "कनेक्टिंग इंडिया", "प्रगति का प्रवेश द्वार"] },
            correct: 0
        },
        {
            en: { q: "Which luxury train operates primarily in the state of Rajasthan?", opts: ["Palace on Wheels", "Deccan Odyssey", "The Golden Chariot", "Maharajas' Express"] },
            hi: { q: "कौन सी लग्जरी ट्रेन मुख्य रूप से राजस्थान राज्य में चलती है?", opts: ["पैलेस ऑन व्हील्स (Palace on Wheels)", "डेक्कन ओडिसी", "द गोल्डन चैरियट", "महाराजा एक्सप्रेस"] },
            correct: 0
        },

        // --- General Science (Mains Important) ---
        {
            en: { q: "Which gas is predominantly responsible for the greenhouse effect?", opts: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"] },
            hi: { q: "ग्रीनहाउस प्रभाव के लिए मुख्य रूप से कौन सी गैस जिम्मेदार है?", opts: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"] },
            correct: 1
        },
        {
            en: { q: "What is the chemical name of common baking soda?", opts: ["Sodium Carbonate", "Sodium Bicarbonate", "Calcium Chloride", "Sodium Chloride"] },
            hi: { q: "सामान्य बेकिंग सोडा का रासायनिक नाम क्या है?", opts: ["सोडियम कार्बोनेट", "सोडियम बाइकार्बोनेट", "कैल्शियम क्लोराइड", "सोडियम क्लोराइड"] },
            correct: 1
        },
        {
            en: { q: "Which lens is used to correct Short-sightedness (Myopia)?", opts: ["Convex lens", "Concave lens", "Cylindrical lens", "Bifocal lens"] },
            hi: { q: "निकट-दृष्टि दोष (मायोपिया) को ठीक करने के लिए किस लेंस का उपयोग किया जाता है?", opts: ["उत्तल लेंस (Convex lens)", "अवतल लेंस (Concave lens)", "बेलनाकार लेंस", "द्विफोकली लेंस"] },
            correct: 1
        },
        {
            en: { q: "Scurvy is caused due to the deficiency of which vitamin?", opts: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"] },
            hi: { q: "स्कर्वी रोग किस विटामिन की कमी के कारण होता है?", opts: ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"] },
            correct: 2
        },
        {
            en: { q: "Sound waves travel fastest in which of the following mediums?", opts: ["Solids", "Liquids", "Gases", "Vacuum"] },
            hi: { q: "ध्वनि तरंगें निम्नलिखित में से किस माध्यम में सबसे तेज गति से चलती हैं?", opts: ["ठोस (Solids)", "द्रव (Liquids)", "गैस (Gases)", "निर्वात (Vacuum)"] },
            correct: 0
        },

        // --- Basic Computer Knowledge ---
        {
            en: { q: "What does 'RAM' stand for in computer terminology?", opts: ["Read Access Memory", "Random Access Memory", "Read Alternate Memory", "Random Alternate Memory"] },
            hi: { q: "कंप्यूटर शब्दावली में 'RAM' का पूर्ण रूप क्या है?", opts: ["रीड एक्सेस मेमोरी", "रैंडम एक्सेस मेमोरी", "रीड अल्टरनेट मेमोरी", "रैंडम अल्टरनेट मेमोरी"] },
            correct: 1
        },
        {
            en: { q: "Which of the following keys is used to refresh a web page or file explorer?", opts: ["F2", "F5", "F7", "F11"] },
            hi: { q: "वेब पेज या फ़ाइल एक्सप्लोरर को रीफ्रेश करने के लिए निम्नलिखित में से किस कुंजी (Key) का उपयोग किया जाता है?", opts: ["F2", "F5", "F7", "F11"] },
            correct: 1
        },
        {
            en: { q: "What is the name of the first operational electronic digital computer in the world?", opts: ["ENIAC", "UNIVAC", "EDVAC", "PASCAL"] },
            hi: { q: "दुनिया के पहले कार्यात्मक इलेक्ट्रॉनिक डिजिटल कंप्यूटर का नाम क्या है?", opts: ["ENIAC", "UNIVAC", "EDVAC", "PASCAL"] },
            correct: 0
        },
        {
            en: { q: "In computing, what is 'Phishing'?", opts: ["A type of cyberattack to steal sensitive data", "A software to clean temporary files", "A method of database indexing", "A networking hardware component"] },
            hi: { q: "कंप्यूटिंग में, 'फिशिंग' (Phishing) क्या है?", opts: ["संवेदनशील डेटा चुराने के लिए एक प्रकार का साइबर हमला", "अस्थायी फ़ाइलों को साफ करने के लिए एक सॉफ़्टवेयर", "डेटाबेस इंडेक्सिंग की एक विधि", "एक नेटवर्किंग हार्डवेयर घटक"] },
            correct: 0
        },
        {
            en: { q: "Which protocol is universally used for sending emails?", opts: ["HTTP", "FTP", "SMTP", "SSH"] },
            hi: { q: "ईमेल भेजने के लिए सार्वभौमिक रूप से किस प्रोटोकॉल का उपयोग किया जाता है?", opts: ["HTTP", "FTP", "SMTP", "SSH"] },
            correct: 2
        },

        // --- Mix Core Topics (Mains Level) ---
        {
            en: { q: "A sum of money invested at simple interest triples itself in 8 years. How many times will it become in 20 years?", opts: ["5 times", "6 times", "7 times", "8 times"] },
            hi: { q: "साधारण ब्याज पर निवेश की गई कोई धनराशि 8 वर्षों में तीन गुनी हो जाती है। 20 वर्षों में यह कितने गुना हो जाएगी?", opts: ["5 गुना", "6 गुना", "7 गुना", "8 गुना"] },
            correct: 0
        },
        {
            en: { q: "If CLOCK is coded as 34135 and TIME is coded as 8679, how is MOTEL coded?", opts: ["71894", "71849", "78194", "71984"] },
            hi: { q: "यदि CLOCK को 34135 और TIME को 8679 के रूप में कूटबद्ध किया जाता है, तो MOTEL को कैसे कूटबद्ध किया जाएगा?", opts: ["71894", "71849", "78194", "71984"] },
            correct: 0
        },
        {
            en: { q: "The ratio of spirit and water in two mixtures of 20 litres and 36 litres is 3:1 and 5:4 respectively. Both mixtures are mixed together. Find the ratio of spirit to water in the new mixture.", opts: ["7:4", "7:3", "2:1", "5:3"] },
            hi: { q: "20 लीटर और 36 लीटर के दो मिश्रणों में स्पिरिट और पानी का अनुपात क्रमशः 3:1 और 5:4 है। दोनों मिश्रणों को एक साथ मिला दिया जाता है। नए मिश्रण में स्पिरिट का पानी से अनुपात ज्ञात कीजिए।", opts: ["7:4", "7:3", "2:1", "5:3"] },
            correct: 1
        },
        {
            en: { q: "In a family, there are a husband, a wife, their two sons and two daughters. All the ladies were invited to a dinner. Both sons went out to play. Who was left at home?", opts: ["Only the sons", "Only the daughters", "Only the husband", "Nobody was left"] },
            hi: { q: "एक परिवार में एक पति, एक पत्नी, उनके दो बेटे और दो बेटियां हैं। सभी महिलाओं को रात्रिभोज पर आमंत्रित किया गया था। दोनों बेटे खेलने बाहर गए। घर पर कौन बचा था?", opts: ["केवल बेटे", "केवल बेटियां", "केवल पति", "कोई नहीं बचा था"] },
            correct: 2
        },
        {
            en: { q: "A dealer marks his goods 20% above the cost price and allows a discount of 10%. Find his gain percentage.", opts: ["8%", "10%", "12%", "15%"] },
            hi: { q: "एक डीलर अपनी वस्तुओं पर क्रय मूल्य से 20% अधिक मूल्य अंकित करता है और 10% की छूट देता है। उसका लाभ प्रतिशत ज्ञात कीजिए।", opts: ["8%", "10%", "12%", "15%"] },
            correct: 0
        },
        {
            en: { q: "Which organ of the human body is primarily affected by the disease Hepatitis?", opts: ["Lungs", "Heart", "Liver", "Kidneys"] },
            hi: { q: "हेपेटाइटिस रोग से मानव शरीर का कौन सा अंग मुख्य रूप से प्रभावित होता है?", opts: ["फेफड़े", "हृदय", "यकृत (Liver)", "गुर्दे (Kidneys)"] },
            correct: 2
        },
        {
            en: { q: "The permanent hardness of water can be removed by adding which compound?", opts: ["Alum", "Washing Soda", "Lime", "Potassium Permanganate"] },
            hi: { q: "पानी की स्थायी कठोरता को किस यौगिक को मिलाकर दूर किया जा सकता है?", opts: ["फिटकरी", "धावन सोडा (Washing Soda)", "चूना", "पोटेशियम परमैंगनेट"] },
            correct: 1
        },
        {
            en: { q: "If the radius of a circle is increased by 50%, its area will increase by how much percentage?", opts: ["50%", "100%", "125%", "150%"] },
            hi: { q: "यदि किसी वृत्त की त्रिज्या में 50% की वृद्धि की जाती है, तो उसके क्षेत्रफल में कितने प्रतिशत की वृद्धि होगी?", opts: ["50%", "100%", "125%", "150%"] },
            correct: 2
        },
        {
            en: { q: "Where is the head office of the Asian Development Bank (ADB) located?", opts: ["Tokyo", "Beijing", "Manila", "Bangkok"] },
            hi: { q: "एशियाई विकास बैंक (ADB) का मुख्यालय कहाँ स्थित है?", opts: ["टोक्यो", "बीजिंग", "मनीला (Manila)", "बैंकॉक"] },
            correct: 2
        },
        {
            en: { q: "Who authored the famous book 'Discovery of India'?", opts: ["Mahatma Gandhi", "Jawaharlal Nehru", "Rabindranath Tagore", "Subhash Chandra Bose"] },
            hi: { q: "प्रसिद्ध पुस्तक 'डिस्कवरी ऑफ इंडिया' (भारत की खोज) किसने लिखी थी?", opts: ["महात्मा गांधी", "जवाहरलाल नेहरू", "रवींद्रनाथ टैगोर", "सुभाष चंद्र बोस"] },
            correct: 1
        },
        // --- Quantitative Aptitude (Set 4) ---
        {
            en: { q: "The ratio of numbers of boys and girls in a school is 3:2. If 20% of the boys and 25% of the girls are scholarship holders, what is the percentage of students who do not get scholarship?", opts: ["78%", "75%", "72%", "68%"] },
            hi: { q: "एक स्कूल में लड़कों और लड़कियों की संख्या का अनुपात 3:2 है। यदि 20% लड़कों और 25% लड़कियों को छात्रवृत्ति मिलती है, तो छात्रवृत्ति न पाने वाले छात्रों का प्रतिशत क्या है?", opts: ["78%", "75%", "72%", "68%"] },
            correct: 0
        },
        {
            en: { q: "A person covers a certain distance by car at 40 km/h and returns back to the starting point by scooter at 10 km/h. Find his average speed for the whole journey.", opts: ["16 km/h", "25 km/h", "20 km/h", "15 km/h"] },
            hi: { q: "एक व्यक्ति कार द्वारा 40 किमी/घंटा की गति से एक निश्चित दूरी तय करता है और स्कूटर द्वारा 10 किमी/घंटा की गति से प्रारंभिक बिंदु पर वापस आता है। पूरी यात्रा के लिए उसकी औसत गति ज्ञात कीजिए।", opts: ["16 किमी/घंटा", "25 किमी/घंटा", "20 किमी/घंटा", "15 किमी/घंटा"] },
            correct: 0
        },
        {
            en: { q: "By selling an article for ₹720, a man loses 10%. At what price should he sell it to gain 5%?", opts: ["₹800", "₹840", "₹820", "₹850"] },
            hi: { q: "एक वस्तु को ₹720 में बेचने पर एक व्यक्ति को 10% की हानि होती है। 5% का लाभ प्राप्त करने के लिए उसे इसे किस मूल्य पर बेचना चाहिए?", opts: ["₹800", "₹840", "₹820", "₹850"] },
            correct: 1
        },
        {
            en: { q: "Three numbers are in the ratio 1:2:3 and their HCF is 12. Find the largest number among them.", opts: ["12", "24", "36", "48"] },
            hi: { q: "तीन संख्याएँ 1:2:3 के अनुपात में हैं और उनका म.स.प. (HCF) 12 है। उनमें से सबसे बड़ी संख्या ज्ञात कीजिए।", opts: ["12", "24", "36", "48"] },
            correct: 2
        },
        {
            en: { q: "A and B can complete a work in 15 days and 10 days respectively. They started the work together but after 2 days, B left. In how many days will A alone finish the remaining work?", opts: ["10 days", "8 days", "11 days", "12 days"] },
            hi: { q: "A और B एक काम को क्रमशः 15 दिनों और 10 दिनों में पूरा कर सकते हैं। उन्होंने एक साथ काम शुरू किया लेकिन 2 दिनों के बाद B ने काम छोड़ दिया। A अकेला शेष काम को कितने दिनों में पूरा करेगा?", opts: ["10 दिन", "8 दिन", "11 दिन", "12 दिन"] },
            correct: 0
        },
        {
            en: { q: "The difference between simple interest and compound interest on a sum of money for 2 years at 5% per annum is ₹25. Find the sum.", opts: ["₹5,000", "₹10,000", "₹8,000", "₹12,000"] },
            hi: { q: "5% वार्षिक दर से 2 वर्ष के लिए किसी धनराशि पर साधारण ब्याज और चक्रवृद्धि ब्याज का अंतर ₹25 है। वह राशि ज्ञात कीजिए।", opts: ["₹5,000", "₹10,000", "₹8,000", "₹12,000"] },
            correct: 1
        },
        {
            en: { q: "The population of a town increases by 10% annually. If its present population is 20,000, what will be its population after 2 years?", opts: ["22,000", "24,000", "24,200", "25,000"] },
            hi: { q: "एक शहर की जनसंख्या में वार्षिक रूप से 10% की वृद्धि होती है। यदि इसकी वर्तमान जनसंख्या 20,000 है, तो 2 वर्ष बाद इसकी जनसंख्या कितनी होगी?", opts: ["22,000", "24,000", "24,200", "25,000"] },
            correct: 2
        },
        {
            en: { q: "A train running at a speed of 90 km/h crosses a 300 m long platform in 25 seconds. Find the length of the train.", opts: ["325 m", "300 m", "250 m", "275 m"] },
            hi: { q: "90 किमी/घंटा की गति से चलने वाली एक ट्रेन 25 सेकंड में 300 मीटर लंबे प्लेटफॉर्म को पार करती है। ट्रेन की लंबाई ज्ञात कीजिए।", opts: ["325 मीटर", "300 मीटर", "250 मीटर", "275 मीटर"] },
            correct: 3
        },
        {
            en: { q: "If the perimeter of a semi-circular protector is 36 cm, find its diameter. (Take pi = 22/7)", opts: ["7 cm", "14 cm", "21 cm", "28 cm"] },
            hi: { q: "यदि एक अर्धवृत्ताकार चांदे (protector) का परिमाप 36 सेमी है, तो इसका व्यास ज्ञात कीजिए। (pi = 22/7 लें)", opts: ["7 सेमी", "14 सेमी", "21 सेमी", "28 सेमी"] },
            correct: 1
        },
        {
            en: { q: "A cistern can be filled by two pipes in 4 hours and 6 hours respectively. A third pipe can empty it in 8 hours. If all pipes are opened together, in how many hours will the cistern be full?", opts: ["2.4 hours", "3.2 hours", "3.43 hours", "4.1 hours"] },
            hi: { q: "एक टंकी को दो पाइपों द्वारा क्रमशः 4 घंटे और 6 घंटे में भरा जा सकता है। एक तीसरा पाइप इसे 8 घंटे में खाली कर सकता है। यदि सभी पाइप एक साथ खोल दिए जाएं, तो टंकी कितने घंटों में भर जाएगी?", opts: ["2.4 घंटे", "3.2 घंटे", "3.43 घंटे", "4.1 घंटे"] },
            correct: 2
        },

        // --- Reasoning Ability (Set 4) ---
        {
            en: { q: "In a certain code, 'ROSE' is written as '6821', 'CHAIR' is written as '73456'. How is 'SEARCH' written in that code?", opts: ["214673", "214763", "216473", "241673"] },
            hi: { q: "एक निश्चित कूट में, 'ROSE' को '6821', 'CHAIR' को '73456' लिखा जाता है। उसी कूट में 'SEARCH' कैसे लिखा जाएगा?", opts: ["214673", "214763", "216473", "241673"] },
            correct: 0
        },
        {
            en: { q: "Find the next alphabet group in the series: BDF, CFI, DHL, ?", opts: ["EIO", "EJO", "EKO", "EKP"] },
            hi: { q: "श्रृंखला में अगला अक्षर समूह ज्ञात कीजिए: BDF, CFI, DHL, ?", opts: ["EIO", "EJO", "EKO", "EKP"] },
            correct: 1
        },
        {
            en: { q: "Statements: All stars are moons. All moons are planets. Conclusions: I. All stars are planets. II. Some planets are stars.", opts: ["Only I follows", "Only II follows", "Neither I nor II follows", "Both I and II follow"] },
            hi: { q: "कथन: सभी तारे चंद्रमा हैं। सभी चंद्रमा ग्रह हैं। निष्कर्ष: I. सभी तारे ग्रह हैं। II. कुछ ग्रह तारे हैं।", opts: ["केवल I अनुसरण करता है", "केवल II अनुसरण करता है", "न तो I और न ही II अनुसरण करता है", "I और II दोनों अनुसरण करते हैं"] },
            correct: 3
        },
        {
            en: { q: "If South-West becomes North, what will North-East become?", opts: ["West", "South", "East", "North-West"] },
            hi: { q: "यदि दक्षिण-पश्चिम, उत्तर बन जाता है, तो उत्तर-पूर्व क्या बन जाएगा?", opts: ["पश्चिम", "दक्षिण", "पूर्व", "उत्तर-पश्चिम"] },
            correct: 1
        },
        {
            en: { q: "If '+' means 'multiplied by', '-' means 'divided by', '*' means 'add' and '/' means 'subtract'; then find the value of: 16 - 4 + 3 * 5 / 2", opts: ["15", "14", "13", "12"] },
            hi: { q: "यदि '+' का अर्थ 'गुणा', '-' का अर्थ 'भाग', '*' का अर्थ 'जोड़' और '/' का अर्थ 'घटाव' है; तो मान ज्ञात कीजिए: 16 - 4 + 3 * 5 / 2", opts: ["15", "14", "13", "12"] },
            correct: 0
        },
        {
            en: { q: "Anil is taller than Anand, but not as tall as Alok. Alok is shorter than Ashok. Who is the tallest among them?", opts: ["Anil", "Alok", "Ashok", "Anand"] },
            hi: { q: "अनिल, आनंद से लंबा है, लेकिन आलोक जितना लंबा नहीं है। आलोक, अशोक से छोटा है। उनमें सबसे लंबा कौन है?", opts: ["अनिल", "आलोक", "अशोक", "आनंद"] },
            correct: 2
        },
        {
            en: { q: "Find the missing number in the matrix: [[4, 9, 2], [3, 5, 7], [8, 1, ?]]", opts: ["9", "6", "5", "4"] },
            hi: { q: "मैट्रिक्स में लुप्त संख्या ज्ञात कीजिए: [[4, 9, 2], [3, 5, 7], [8, 1, ?]]", opts: ["9", "6", "5", "4"] },
            correct: 1
        },
        {
            en: { q: "A woman introduces a man as the son of the brother of her mother. How is the man related to the woman?", opts: ["Nephew", "Son", "Cousin", "Uncle"] },
            hi: { q: "एक महिला एक पुरुष का परिचय अपनी मां के भाई के बेटे के रूप में कराती है। पुरुष का महिला से क्या संबंध है?", opts: ["भतीजा/भांजा", "पुत्र", "ममेरा भाई (Cousin)", "ममा (Uncle)"] },
            correct: 2
        },
        {
            en: { q: "Choose the word which is least like the other words in the group.", opts: ["Geology", "Zoology", "Botany", "Chemistry"] },
            hi: { q: "वह शब्द चुनिए जो समूह के अन्य शब्दों से सबसे कम मिलता-जुलता है।", opts: ["भूविज्ञान (Geology)", "प्राणी विज्ञान (Zoology)", "वनस्पति विज्ञान (Botany)", "रसायन विज्ञान (Chemistry)"] },
            correct: 3
        },
        {
            en: { q: "How many times do the hands of a clock coincide in a day (24 hours)?", opts: ["12 times", "22 times", "24 times", "44 times"] },
            hi: { q: "एक दिन (24 घंटे) में घड़ी की सुइयां कितनी बार एक साथ (coincide) आती हैं?", opts: ["12 बार", "22 बार", "24 बार", "44 बार"] },
            correct: 1
        },

        // --- General Awareness & Railway Knowledge (Set 4) ---
        {
            en: { q: "Which station is the junction point where the maximum number of railway lines emerge?", opts: ["Howrah", "Mathura Junction", "New Delhi", "Vijayawada"] },
            hi: { q: "कौन सा स्टेशन वह जंक्शन बिंदु है जहां से अधिकतम संख्या में रेलवे लाइनें निकलती हैं?", opts: ["हावड़ा", "मथुरा जंक्शन", "नई दिल्ली", "विजयवाड़ा"] },
            correct: 1
        },
        {
            en: { q: "In which city is the Rail Spring Karkhana situated?", opts: ["Sithouli, Gwalior", "Secunderabad", "Jabalpur", "Patiala"] },
            hi: { q: "रेल स्प्रिंग कारखाना (Rail Spring Karkhana) किस शहर में स्थित है?", opts: ["सिथौली, ग्वालियर", "सिकंदराबाद", "जबलपुर", "पटियाला"] },
            correct: 0
        },
        {
            en: { q: "Which railway zone is called the 'Blue Chip' of Indian Railways?", opts: ["South Eastern Railway", "East Coast Railway", "South Central Railway", "North Eastern Railway"] },
            hi: { q: "किस रेलवे ज़ोन को भारतीय रेलवे का 'ब्लू चिप' (Blue Chip) कहा जाता है?", opts: ["दक्षिण पूर्व रेलवे", "पूर्व तटीय रेलवे", "दक्षिण मध्य रेलवे", "पूर्वोत्तर रेलवे"] },
            correct: 0
        },
        {
            en: { q: "Who was the Governor-General of India when the first railway line was established?", opts: ["Lord Canning", "Lord Dalhousie", "Lord Curzon", "Lord William Bentinck"] },
            hi: { q: "जब पहली रेलवे लाइन स्थापित की गई थी तब भारत का गवर्नर-जनरल कौन था?", opts: ["लॉर्ड कैनिंग", "लॉर्ड डलहौजी", "लॉर्ड कर्जन", "लॉर्ड विलियम बेंटिक"] },
            correct: 1
        },
        {
            en: { q: "What is the unique feature of the 'Himsagar Express'?", opts: ["It is the fastest train", "It connects northernmost and southernmost stations", "It is the first fully green train", "It is a completely unreserved express"] },
            hi: { q: "हिमसेंटर एक्सप्रेस (Himsagar Express) की अनूठी विशेषता क्या है?", opts: ["यह सबसे तेज़ ट्रेन है", "यह सबसे उत्तरी और सबसे दक्षिणी स्टेशनों को जोड़ती है", "यह पहली पूरी तरह से हरित ट्रेन है", "यह पूरी तरह से अनारक्षित एक्सप्रेस है"] },
            correct: 1
        },
        {
            en: { q: "Where is the head office of the North Western Railway zone located?", opts: ["Jodhpur", "Ajmer", "Jaipur", "Bikaner"] },
            hi: { q: "उत्तर पश्चिम रेलवे ज़ोन का मुख्यालय कहाँ स्थित है?", opts: ["जोधपुर", "अजमेर", "जयपुर", "बीकानेर"] },
            correct: 2
        },
        {
            en: { q: "Which luxury train of Indian Railways showcases the heritage of Maharashtra?", opts: ["Palace on Wheels", "Deccan Odyssey", "Golden Chariot", "Royal Rajasthan on Wheels"] },
            hi: { q: "भारतीय रेलवे की कौन सी लग्जरी ट्रेन महाराष्ट्र की विरासत को प्रदर्शित करती है?", opts: ["पैलेस ऑन व्हील्स", "डेक्कन ओडिसी (Deccan Odyssey)", "गोल्डन चैरियट", "रॉयल राजस्थान ऑन व्हील्स"] },
            correct: 1
        },
        {
            en: { q: "What does the abbreviation 'RITES' stand for in railway organizations?", opts: ["Rail India Technical and Economic Service", "Railway Information Technology and Engineering Solutions", "Regional Integrated Transport and Energy System", "Railway Industrial Technical and Safety Enterprise"] },
            hi: { q: "रेलवे संगठनों में संक्षिप्त नाम 'RITES' का पूर्ण रूप क्या है?", opts: ["रेल इंडिया टेक्निकल एंड इकोनॉमिक सर्विस", "रेलवे इंफॉर्मेशन टेक्नोलॉजी एंड इंजीनियरिंग सॉल्यूशंस", "रीजनल इंटीग्रेटेड ट्रांसपोर्ट एंड एनर्जी सिस्टम", "रेलवे इंडस्ट्रियल टेक्निकल एंड सेफ्टी एंटरप्राइज"] },
            correct: 0
        },
        {
            en: { q: "Which railway station has India's first food truck launched by Indian Railways?", opts: ["Mumbai CST", "Pune Junction", "New Delhi", "Bengaluru City"] },
            hi: { q: "भारतीय रेलवे द्वारा शुरू की गई भारत की पहली फूड ट्रक सुविधा किस रेलवे स्टेशन पर है?", opts: ["मुंबई सीएसटी", "पुणे जंक्शन", "नई दिल्ली", "बेंगलुरु सिटी"] },
            correct: 1
        },
        {
            en: { q: "Which model of public-private partnership is being widely utilized for redevelopment of railway stations in India?", opts: ["EPC Model", "BOT Model", "DBFOT Model", "HAM Model"] },
            hi: { q: "भारत में रेलवे स्टेशनों के पुनर्विकास के लिए सार्वजनिक-निजी भागीदारी (PPP) के किस मॉडल का व्यापक रूप से उपयोग किया जा रहा है?", opts: ["EPC मॉडल", "BOT मॉडल", "DBFOT मॉडल", "HAM मॉडल"] },
            correct: 2
        },

        // --- General Science ---
        {
            en: { q: "Which instrument is used to measure the intensity of earthquakes?", opts: ["Barometer", "Seismograph", "Hydrometer", "Polygraph"] },
            hi: { q: "भूकंप की तीव्रता मापने के लिए किस उपकरण का उपयोग किया जाता है?", opts: ["बैरोमीटर", "सिस्मोोग्राफ (Seismograph)", "हाइड्रोमीटर", "पॉलीग्राफ"] },
            correct: 1
        },
        {
            en: { q: "What is the primary constituent of natural gas?", opts: ["Methane", "Ethane", "Propane", "Butane"] },
            hi: { q: "प्राकृतिक गैस का मुख्य घटक क्या है?", opts: ["मीथेन (Methane)", "इथेन", "प्रोपेन", "ब्यूटेन"] },
            correct: 0
        },
        {
            en: { q: "Which layer of the Earth's atmosphere contains the Ozone layer?", opts: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"] },
            hi: { q: "पृथ्वी के वायुमंडल की किस परत में ओजोन परत पाई जाती है?", opts: ["क्षोभमंडल (Troposphere)", "समतापमंडल (Stratosphere)", "मध्यमंडल", "बाह्य वायुमंडल"] },
            correct: 1
        },
        {
            en: { q: "The chemical formula of Plaster of Paris is:", opts: ["CaSO4.2H2O", "CaSO4.1/2H2O", "CuSO4.5H2O", "MgSO4.7H2O"] },
            hi: { q: "प्लास्टर ऑफ पेरिस (Plaster of Paris) का रासायनिक सूत्र क्या है?", opts: ["CaSO4.2H2O", "CaSO4.1/2H2O", "CuSO4.5H2O", "MgSO4.7H2O"] },
            correct: 1
        },
        {
            en: { q: "Which blood group is known as the 'Universal Donor'?", opts: ["A+", "B+", "AB+", "O-"] },
            hi: { q: "किस रक्त समूह को 'सार्वभौमिक दाता' (Universal Donor) कहा जाता है?", opts: ["A+", "B+", "AB+", "O-"] },
            correct: 3
        },

        // --- Computer Knowledge ---
        {
            en: { q: "What is the full form of 'PDF' in computer documents?", opts: ["Portable Document Format", "Printable Document File", "Portable Data File", "Port Document Format"] },
            hi: { q: "कंप्यूटर दस्तावेजों में 'PDF' का पूर्ण रूप क्या है?", opts: ["पोर्टेबल डॉक्यूमेंट फॉर्मेट (Portable Document Format)", "प्रिटेबल डॉक्यूमेंट फाइल", "पोर्टेबल डेटा फाइल", "पोर्ट डॉक्यूमेंट फॉर्मेट"] },
            correct: 0
        },
        {
            en: { q: "Which among the following is the fastest memory in a computer system?", opts: ["RAM", "ROM", "Cache Memory", "Hard Disk"] },
            hi: { q: "निम्नलिखित में से कौन सी कंप्यूटर सिस्टम में सबसे तेज़ मेमोरी है?", opts: ["RAM", "ROM", "कैश मेमोरी (Cache Memory)", "हार्ड डिस्क"] },
            correct: 2
        },
        {
            en: { q: "A 'Nibble' in computer memory consists of how many bits?", opts: ["2 bits", "4 bits", "8 bits", "16 bits"] },
            hi: { q: "कंप्यूटर मेमोरी में एक 'निबल' (Nibble) कितने बिट्स के बराबर होता है?", opts: ["2 बिट्स", "4 बिट्स", "8 बिट्स", "16 बिट्स"] },
            correct: 1
        },
        {
            en: { q: "Which key combination is used to permanently delete a file from Windows without sending it to Recycle Bin?", opts: ["Ctrl + Delete", "Shift + Delete", "Alt + Delete", "Ctrl + Shift + Delete"] },
            hi: { q: "रीसायकल बिन में भेजे बिना विंडोज से किसी फ़ाइल को स्थायी रूप से हटाने के लिए किस कुंजी संयोजन का उपयोग किया जाता है?", opts: ["Ctrl + Delete", "Shift + Delete", "Alt + Delete", "Ctrl + Shift + Delete"] },
            correct: 1
        },
        {
            en: { q: "Which malicious software triggers self-replication and spreads across networks without human intervention?", opts: ["Trojan Horse", "Worm", "Spyware", "Adware"] },
            hi: { q: "कौन सा दुर्भावनापूर्ण सॉफ़्टवेयर मानव हस्तक्षेप के बिना स्वयं की प्रतिकृति (self-replication) बनाता है और नेटवर्क पर फैलता है?", opts: ["ट्रोजन हॉर्स", "वॉर्म (Worm)", "स्पाइवेयर", "एडवेयर"] },
            correct: 1
        },

        // --- Mixed Core Topics ---
        {
            en: { q: "If a sum of money triples itself in 15 years at simple interest, find the rate of interest per annum.", opts: ["10%", "12.5%", "13.33%", "15%"] },
            hi: { q: "यदि साधारण ब्याज पर कोई धनराशि 15 वर्षों में तीन गुनी हो जाती है, तो वार्षिक ब्याज दर ज्ञात कीजिए।", opts: ["10%", "12.5%", "13.33%", "15%"] },
            correct: 2
        },
        {
            en: { q: "In a class of 60 students, the number of boys is twice that of girls. Rohit ranked 17th from the top. If there are 9 girls ahead of Rohit, how many boys are after him in rank?", opts: ["26 boys", "28 boys", "30 boys", "32 boys"] },
            hi: { q: "60 छात्रों की एक कक्षा में, लड़कों की संख्या लड़कियों से दोगुनी है। रोहित का स्थान ऊपर से 17वां है। यदि रोहित से आगे 9 लड़कियां हैं, तो रैंक में उसके बाद कितने लड़के हैं?", opts: ["26 लड़के", "28 लड़के", "30 लड़के", "32 लड़के"] },
            correct: 3
        },
        {
            en: { q: "A alloy contains copper and zinc in the ratio 5:3. If the total weight of the alloy is 48 kg, find the quantity of zinc.", opts: ["18 kg", "24 kg", "30 kg", "15 kg"] },
            hi: { q: "एक मिश्र धातु में तांबा और जस्ता 5:3 के अनुपात में हैं। यदि मिश्र धातु का कुल वजन 48 किग्रा है, तो जस्ता की मात्रा ज्ञात कीजिए।", opts: ["18 किग्रा", "24 किग्रा", "30 किग्रा", "15 किग्रा"] },
            correct: 0
        },
        {
            en: { q: "If code for 'PENCIL' is '59' based on alphabetic addition, what will be the code for 'PAPER'?", opts: ["50", "52", "54", "56"] },
            hi: { q: "यदि वर्णानुक्रमिक जुड़ाव के आधार पर 'PENCIL' का कूट '59' है, तो 'PAPER' का कूट क्या होगा?", opts: ["50", "52", "54", "56"] },
            correct: 1
        },
        {
            en: { q: "A shopkeeper cheats 10% while buying as well as 10% while selling goods using faulty weights. Find his total profit percentage.", opts: ["20%", "21%", "22%", "25%"] },
            hi: { q: "एक दुकानदार दोषपूर्ण वजन का उपयोग करके सामान खरीदते समय 10% और बेचते समय भी 10% की धोखाधड़ी करता है। उसका कुल लाभ प्रतिशत ज्ञात कीजिए।", opts: ["20%", "21%", "22%", "25%"] },
            correct: 1
        },
        {
            en: { q: "Which part of human brain controls the maintainance of posture and balance of body?", opts: ["Cerebrum", "Cerebellum", "Medulla Oblongata", "Hypothalamus"] },
            hi: { q: "मानव मस्तिष्क का कौन सा भाग शरीर की मुद्रा (posture) और संतुलन के नियंत्रण को नियंत्रित करता है?", opts: ["प्रमस्तिष्क (Cerebrum)", "अनुमस्तिष्क (Cerebellum)", "मज्जा (Medulla Oblongata)", "हाइपोथैलेमस"] },
            correct: 1
        },
        {
            en: { q: "Which acid is present in ant stings?", opts: ["Formic Acid", "Citric Acid", "Acetic Acid", "Oxalic Acid"] },
            hi: { q: "चींटी के डंक में कौन सा अम्ल मौजूद होता है?", opts: ["फॉर्मिक अम्ल (Formic Acid)", "साइट्रिक अम्ल", "एसिटिक अम्ल", "ऑक्सालिक अम्ल"] },
            correct: 0
        },
        {
            en: { q: "The surface area of a cube is 96 sq.cm. Find its volume.", opts: ["36 cc", "48 cc", "64 cc", "125 cc"] },
            hi: { q: "एक घन का पृष्ठीय क्षेत्रफल 96 वर्ग सेमी है। इसका आयतन ज्ञात कीजिए।", opts: ["36 घन सेमी", "48 घन सेमी", "64 घन सेमी", "125 घन सेमी"] },
            correct: 2
        },
        {
            en: { q: "Where is the headquarters of the World Trade Organization (WTO)?", opts: ["New York", "Geneva", "Paris", "London"] },
            hi: { q: "विश्व व्यापार संगठन (WTO) का मुख्यालय कहाँ स्थित है?", opts: ["न्यूयॉर्क", "जेनेवा (Geneva)", "पेरिस", "लंदन"] },
            correct: 1
        },
        {
            en: { q: "Who was the first woman President of the Indian National Congress?", opts: ["Sarojini Naidu", "Annie Besant", "Sucheta Kripalani", "Indira Gandhi"] },
            hi: { q: "भारतीय राष्ट्रीय कांग्रेस की पहली महिला अध्यक्ष कौन थीं?", opts: ["सरोजिनी नायडू", "एनी बेसेंट (Annie Besant)", "सुचेता कृपलानी", "इंदिरा गांधी"] },
            correct: 1
        },
        // --- Quantitative Aptitude (Set 5) ---
        {
            en: { q: "If x + 1/x = 5, then find the value of x^2 + 1/x^2.", opts: ["23", "25", "27", "21"] },
            hi: { q: "यदि x + 1/x = 5 है, तो x^2 + 1/x^2 का मान ज्ञात कीजिए।", opts: ["23", "25", "27", "21"] },
            correct: 0
        },
        {
            en: { q: "The ratio of the speed of three cars is 2:3:4. What is the ratio of the time taken by them to cover the same distance?", opts: ["4:3:2", "2:3:4", "6:4:3", "4:6:3"] },
            hi: { q: "तीन कारों की गति का अनुपात 2:3:4 है। समान दूरी तय करने में उनके द्वारा लिए गए समय का अनुपात क्या होगा?", opts: ["4:3:2", "2:3:4", "6:4:3", "4:6:3"] },
            correct: 2
        },
        {
            en: { q: "A sum of ₹6,000 is lent at 10% per annum simple interest for 3 years. Find the total amount received after 3 years.", opts: ["₹7,800", "₹7,200", "₹6,800", "₹8,000"] },
            hi: { q: "₹6,000 की राशि 10% वार्षिक साधारण ब्याज की दर से 3 वर्षों के लिए उधार दी जाती है। 3 वर्षों के बाद प्राप्त कुल राशि (Amount) ज्ञात कीजिए।", opts: ["₹7,800", "₹7,200", "₹6,800", "₹8,000"] },
            correct: 0
        },
        {
            en: { q: "If 12 men or 18 women can reap a field in 14 days, then in how many days can 8 men and 16 women reap the same field?", opts: ["7 days", "8 days", "9 days", "10 days"] },
            hi: { q: "यदि 12 पुरुष या 18 महिलाएं एक खेत को 14 दिनों में काट सकते हैं, तो 8 पुरुष और 16 महिलाएं उसी खेत को कितने दिनों में काट सकेंगे?", opts: ["7 दिन", "8 दिन", "9 दिन", "10 दिन"] },
            correct: 2
        },
        {
            en: { q: "The marked price of a watch is ₹1600. After allowing two successive discounts, it is sold for ₹1224. If the first discount is 10%, find the second discount percentage.", opts: ["12%", "15%", "8%", "10%"] },
            hi: { q: "एक घड़ी का अंकित मूल्य ₹1600 है। दो क्रमिक छूट देने के बाद, इसे ₹1224 में बेचा जाता है। यदि पहली छूट 10% है, तो दूसरी छूट प्रतिशत ज्ञात कीजिए।", opts: ["12%", "15%", "8%", "10%"] },
            correct: 1
        },
        {
            en: { q: "A person sells two pipes at ₹12 प्रत्येक. On one he gains 20% and on the other he loses 20%. In the whole transaction, what is his net profit or loss?", opts: ["1% gain", "1% loss", "4% loss", "No profit no loss"] },
            hi: { q: "एक व्यक्ति दो पाइपों में से प्रत्येक को ₹12 में बेचता है। एक पर उसे 20% का लाभ होता है और दूसरे पर 20% की हानि होती है। पूरे लेनदेन में उसका शुद्ध लाभ या हानि क्या है?", opts: ["1% लाभ", "1% हानि", "4% हानि", "न लाभ न हानि"] },
            correct: 2
        },
        {
            en: { q: "Find the value of (sec^2 theta - tan^2 theta) + (cosec^2 theta - cot^2 theta).", opts: ["0", "1", "2", "4"] },
            hi: { q: "(sec^2 theta - tan^2 theta) + (cosec^2 theta - cot^2 theta) का मान ज्ञात कीजिए।", opts: ["0", "1", "2", "4"] },
            correct: 2
        },
        {
            en: { q: "The average of 5 consecutive numbers is 20. Find the largest among these numbers.", opts: ["20", "21", "22", "24"] },
            hi: { q: "5 लगातार संख्याओं का औसत 20 है। इन संख्याओं में सबसे बड़ी संख्या ज्ञात कीजिए।", opts: ["20", "21", "22", "24"] },
            correct: 2
        },
        {
            en: { q: "A container contains 40 litres of milk. From this container, 4 litres of milk was taken out and replaced with water. This process was repeated further two times. How much milk is now contained by the container?", opts: ["26.34 litres", "27.36 litres", "29.16 litres", "31.54 litres"] },
            hi: { q: "एक बर्तन में 40 लीटर दूध है। इस बर्तन से 4 लीटर दूध निकाला गया और उसकी जगह पानी डाल दिया गया। यह प्रक्रिया आगे दो बार और दोहराई गई। अब बर्तन में कितना दूध है?", opts: ["26.34 लीटर", "27.36 लीटर", "29.16 लीटर", "31.54 लीटर"] },
            correct: 2
        },
        {
            en: { q: "The length, breadth, and height of a room are 5m, 4m, and 3m respectively. Find the cost of white-washing the walls of the room and the ceiling at the rate of ₹7.50 per sq.m.", opts: ["₹555", "₹540", "₹525", "₹560"] },
            hi: { q: "एक कमरे की लंबाई, चौड़ाई और ऊंचाई क्रमशः 5 मीटर, 4 मीटर और 3 मीटर हैं। ₹7.50 प्रति वर्ग मीटर की दर से कमरे की दीवारों और छत की सफेदी करने की लागत ज्ञात कीजिए।", opts: ["₹555", "₹540", "₹525", "₹560"] },
            correct: 1
        },

        // --- Reasoning Ability (Set 5) ---
        {
            en: { q: "If 'MONKO' is coded as '57637' and 'KLJMN' is coded as '32456', then how is 'LJMNK' coded?", opts: ["24563", "24653", "25463", "24536"] },
            hi: { q: "यदि 'MONKO' को '57637' और 'KLJMN' को '32456' के रूप में कूटबद्ध किया जाता है, तो 'LJMNK' को कैसे कूटबद्ध किया जाएगा?", opts: ["24563", "24653", "25463", "24536"] },
            correct: 0
        },
        {
            en: { q: "Find the missing term in the given series: 2, 5, 11, 23, 47, ?", opts: ["93", "95", "97", "99"] },
            hi: { q: "दी गई श्रृंखला में लुप्त पद ज्ञात कीजिए: 2, 5, 11, 23, 47, ?", opts: ["93", "95", "97", "99"] },
            correct: 1
        },
        {
            en: { q: "Statements: Some mangoes are yellow. Some tiffin are mangoes. Conclusions: I. Some mangoes are tiffin. II. Some yellow are mangoes.", opts: ["Only I follows", "Only II follows", "Neither I nor II follows", "Both I and II follow"] },
            hi: { q: "कथन: कुछ आम पीले हैं। कुछ टिफिन आम हैं। निष्कर्ष: I. कुछ आम टिफिन हैं। II. कुछ पीले आम हैं।", opts: ["केवल I अनुसरण करता है", "केवल II अनुसरण करता है", "न तो I और न ही II अनुसरण करता है", "I और II दोनों अनुसरण करते हैं"] },
            correct: 3
        },
        {
            en: { q: "A man starts walking from a point towards East. After walking 3 km, he turns South and walks 4 km. How far is he from the starting point?", opts: ["5 km", "6 km", "7 km", "8 km"] },
            hi: { q: "एक व्यक्ति एक बिंदु से पूर्व की ओर चलना शुरू करता है। 3 किमी चलने के बाद, वह दक्षिण की ओर मुड़ता है और 4 किमी चलता है। वह प्रारंभिक बिंदु से कितनी दूर है?", opts: ["5 किमी", "6 किमी", "7 किमी", "8 किमी"] },
            correct: 0
        },
        {
            en: { q: "If A is the brother of B; B is the sister of C; and C is the father of D, how D is related to A?", opts: ["Brother", "Sister", "Nephew or Niece", "Cannot be determined"] },
            hi: { q: "यदि A, B का भाई है; B, C की बहन है; और C, D का पिता है, तो D का A से क्या संबंध है?", opts: ["भाई", "बहन", "भतीजा/भांजा या भतीजी/भांजी", "निर्धारित नहीं किया जा सकता"] },
            correct: 2
        },
        {
            en: { q: "Arrange the words in alphabetical order and choose the one that comes third: 1. Blast, 2. Black, 3. Blame, 4. Blank", opts: ["Black", "Blame", "Blank", "Blast"] },
            hi: { q: "शब्दों को वर्णानुक्रम (Alphabetical order) में व्यवस्थित करें और तीसरा आने वाला शब्द चुनें: 1. Blast, 2. Black, 3. Blame, 4. Blank", opts: ["Black", "Blame", "Blank", "Blast"] },
            correct: 2
        },
        {
            en: { q: "In a class, Suresh is 7th from the top and 28th from the bottom. How many students are there in the class?", opts: ["34", "35", "36", "37"] },
            hi: { q: "एक कक्षा में, सुरेश का स्थान ऊपर से 7वां और नीचे से 28वां है। कक्षा में कुल कितने छात्र हैं?", opts: ["34", "35", "36", "37"] },
            correct: 0
        },
        {
            en: { q: "Which of the following elements represents the relationship among: Seconds, Minutes, Hours", opts: ["Three intersecting circles", "One circle inside another, inside a third", "Three separate circles", "Two intersecting circles inside a big circle"] },
            hi: { q: "निम्नलिखित में से कौन सा आरेख सेकंड, मिनट, घंटे के बीच संबंध को दर्शाता है?", opts: ["तीन प्रतिच्छेदी वृत्त", "एक वृत्त के अंदर दूसरा, उसके अंदर तीसरा वृत्त", "तीन अलग वृत्त", "एक बड़े वृत्त के अंदर दो प्रतिच्छेदी वृत्त"] },
            correct: 1
        },
        {
            en: { q: "If 15th August 2011 was a Monday, what day of the week was 15th August 2012?", opts: ["Tuesday", "Wednesday", "Thursday", "Friday"] },
            hi: { q: "यदि 15 अगस्त 2011 को सोमवार था, तो 15 अगस्त 2012 को सप्ताह का कौन सा दिन था?", opts: ["मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार"] },
            correct: 1
        },
        {
            en: { q: "Find the odd one out from the given options.", opts: ["April", "June", "August", "September"] },
            hi: { q: "दिए गए विकल्पों में से विषम (Odd) विकल्प चुनिए।", opts: ["अप्रैल", "जून", "अगस्त", "सितंबर"] },
            correct: 2
        },

        // --- General Awareness & Railway Knowledge (Set 5) ---
        {
            en: { q: "Which railway station has the longest railway platform in the world as of today?", opts: ["Gorakhpur", "Kollam Junction", "Hubballi Junction", "Kharagpur"] },
            hi: { q: "आज की तारीख में विश्व का सबसे लंबा रेलवे प्लेटफॉर्म किस रेलवे स्टेशन पर है?", opts: ["गोरखपुर", "कोल्लम जंक्शन", "हुब्बली जंक्शन (Shree Siddharoodha Swamiji Hubballi Jn)", "खड़गपुर"] },
            correct: 2
        },
        {
            en: { q: "Where is the National Rail Museum located in India?", opts: ["Mumbai", "New Delhi", "Kolkata", "Chennai"] },
            hi: { q: "भारत में राष्ट्रीय रेल संग्रहालय (National Rail Museum) कहां स्थित है?", opts: ["मुंबई", "नई दिल्ली", "कोलकाता", "चेन्नई"] },
            correct: 1
        },
        {
            en: { q: "What is the name of India's first indigenous semi-high speed train?", opts: ["Tejas Express", "Gatimaan Express", "Vande Bharat Express", "Humsafar Express"] },
            hi: { q: "भारत की पहली स्वदेशी सेमी-हाई स्पीड ट्रेन का नाम क्या है?", opts: ["तेजस एक्सप्रेस", "गतिमान एक्सप्रेस", "वंदे भारत एक्सप्रेस", "हम्सफ़र एक्सप्रेस"] },
            correct: 2
        },
        {
            en: { q: "Which country assisted India in building the first underground Metro railway network in Kolkata?", opts: ["USA", "UK", "USSR (Russia)", "Japan"] },
            hi: { q: "कोलकाता में पहले भूमिगत मेट्रो रेलवे नेटवर्क के निर्माण में किस देश ने भारत की सहायता की थी?", opts: ["USA", "UK", "USSR (रूस)", "जापान"] },
            correct: 2
        },
        {
            en: { q: "Where is the Integral Coach Factory (ICF) of Indian Railways located?", opts: ["Perambur, Chennai", "Kapurthala, Punjab", "Raebareli, UP", "Bengaluru"] },
            hi: { q: "भारतीय रेलवे की इंटीग्रल कोच फैक्ट्री (ICF) कहां स्थित है?", opts: ["पेराम्बुर, चेन्नई", "कपूरथला, पंजाब", "रायबरेली, यूपी", "बेंगलुरु"] },
            correct: 0
        },
        {
            en: { q: "Which railway line is known for cross-country Engineering marvel cutting across the Western Ghats?", opts: ["Konkan Railway", "Darjeeling Himalayan Railway", "Nilgiri Mountain Railway", "Kalka-Shimla Railway"] },
            hi: { q: "पश्चिमी घाट को काटते हुए इंजीनियरिंग का बेजोड़ नमूना पेश करने वाली कौन सी रेलवे लाइन प्रसिद्ध है?", opts: ["कोंकण रेलवे", "दार्जिलिंग हिमालयन रेलवे", "नीलगिरि माउंटेन रेलवे", "कालका-शिमला रेलवे"] },
            correct: 0
        },
        {
            en: { q: "In Indian Railways, what is the role of 'CRIS'?", opts: ["It manages healthcare for staff", "It develops and maintains railway IT systems", "It manages track maintenance", "It manufactures signaling equipment"] },
            hi: { q: "भारतीय रेलवे में 'CRIS' (क्रिस) की क्या भूमिका है?", opts: ["यह कर्मचारियों के लिए स्वास्थ्य सेवा का प्रबंधन करता है", "यह रेलवे आईटी सिस्टम का विकास और रखरखाव करता है", "यह ट्रैक रखरखाव का प्रबंधन करता है", "यह सिग्नलिंग उपकरणों का निर्माण करता है"] },
            correct: 1
        },
        {
            en: { q: "Which city serves as the headquarters of two railway zones simultaneously?", opts: ["Kolkata", "Mumbai", "New Delhi", "Both 0 and 1"] },
            hi: { q: "कौन सा शहर एक साथ दो रेलवे ज़ोन के मुख्यालय के रूप में कार्य करता है?", opts: ["कोलकाता", "मुंबई", "नई दिल्ली", "0 और 1 दोनों"] },
            correct: 3
        },
        {
            en: { q: "The Train Protection & Warning System (TPWS) implementation on Indian Railways is called?", opts: ["Kavach", "Suraksha", "Ratsahik", "Drishti"] },
            hi: { q: "भारतीय रेलवे पर ट्रेन सुरक्षा और चेतावनी प्रणाली (TPWS) के स्वदेशी कार्यान्वयन को क्या कहा जाता है?", opts: ["कवच (Kavach)", "सुरक्षा", "रक्षक", "दृष्टि"] },
            correct: 0
        },
        {
            en: { q: "Which state in India has the highest density of railway network?", opts: ["Uttar Pradesh", "West Bengal", "Punjab", "Bihar"] },
            hi: { q: "भारत के किस राज्य में रेलवे नेटवर्क का घनत्व (Density) सबसे अधिक है?", opts: ["उत्तर प्रदेश", "पश्चिम बंगाल", "पंजाब", "बिहार"] },
            correct: 2
        },

        // --- General Science ---
        {
            en: { q: "What is the SI unit of electric current?", opts: ["Volt", "Ampere", "Ohm", "Watt"] },
            hi: { q: "विद्युत धारा (Electric current) का एसआई (SI) मात्रक क्या है?", opts: ["वोल्ट", "एम्पीयर (Ampere)", "ओम", "वाट"] },
            correct: 1
        },
        {
            en: { q: "Which element is the most abundant metal in the Earth's crust?", opts: ["Iron", "Aluminum", "Calcium", "Silicon"] },
            hi: { q: "पृथ्वी की पपड़ी (Earth's crust) में सबसे प्रचुर मात्रा में पाई जाने वाली धातु कौन सी है?", opts: ["लोहा", "एल्युमिनियम (Aluminum)", "कैल्शियम", "सिलिकॉन"] },
            correct: 1
        },
        {
            en: { q: "LPG (Liquefied Petroleum Gas) is a mixture of which hydrocarbons?", opts: ["Methane and Ethane", "Propane and Butane", "Ethane and Propane", "Methane and Butane"] },
            hi: { q: "एलपीजी (लिक्विफाइड पेट्रोलियम गैस) किन हाइड्रोकार्बन का मिश्रण है?", opts: ["मीथेन और इथेन", "प्रोपेन और ब्यूटेन (Propane and Butane)", "इथेन और प्रोपेन", "मीथेन और ब्यूटेन"] },
            correct: 1
        },
        {
            en: { q: "Which gland in the human body is known as the 'Master Gland'?", opts: ["Thyroid Gland", "Adrenal Gland", "Pituitary Gland", "Pancreas"] },
            hi: { q: "मानव शरीर की किस ग्रंथि को 'मास्टर ग्रंथि' कहा जाता है?", opts: ["थायराइड ग्रंथि", "एड्रिनल ग्रंथि", "पीयूष ग्रंथि (Pituitary Gland)", "अग्न्याशय (Pancreas)"] },
            correct: 2
        },
        {
            en: { q: "What type of mirror is used by dentists to see large images of teeth?", opts: ["Convex mirror", "Concave mirror", "Plane mirror", "Bifocal mirror"] },
            hi: { q: "दंत चिकित्सकों द्वारा दांतों की बड़ी छवि देखने के लिए किस प्रकार के दर्पण का उपयोग किया जाता है?", opts: ["उत्तल दर्पण", "अवतल दर्पण (Concave mirror)", "समतल दर्पण", "द्विफोकली दर्पण"] },
            correct: 1
        },

        // --- Computer Knowledge ---
        {
            en: { q: "What is the primary function of an Operating System?", opts: ["To perform database calculation", "To manage computer hardware and software resources", "To safeguard against all viruses", "To design web interfaces"] },
            hi: { q: "ऑपरेटिंग सिस्टम का प्राथमिक कार्य क्या है?", opts: ["डेटाबेस गणना करना", "कंप्यूटर हार्डवेयर और सॉफ्टवेयर संसाधनों का प्रबंधन करना", "सभी वायरस से रक्षा करना", "वेब इंटरफेस डिजाइन करना"] },
            correct: 1
        },
        {
            en: { q: "Which shortcut key is used to undo the last action in Windows?", opts: ["Ctrl + Y", "Ctrl + U", "Ctrl + Z", "Ctrl + X"] },
            hi: { q: "विंडोज में अंतिम क्रिया को पूर्ववत (Undo) करने के लिए किस शॉर्टकट कुंजी का उपयोग किया जाता है?", opts: ["Ctrl + Y", "Ctrl + U", "Ctrl + Z", "Ctrl + X"] },
            correct: 2
        },
        {
            en: { q: "Which of the following is NOT an application software?", opts: ["MS Word", "VLC Media Player", "Windows 11", "Adobe Photoshop"] },
            hi: { q: "निम्नलिखित में से कौन सा एप्लिकेशन सॉफ़्टवेयर नहीं है?", opts: ["MS Word", "VLC मीडिया प्लेयर", "Windows 11", "एडोब फोटोशॉप"] },
            correct: 2
        },
        {
            en: { q: "What is the full form of 'SQL' in computing?", opts: ["Structured Query Language", "Standard Query Language", "Sequential Query Language", "Server Query Language"] },
            hi: { q: "कंप्यूटिंग में 'SQL' का पूर्ण रूप क्या है?", opts: ["स्ट्रक्चर्ड क्वेरी लैंग्वेज (Structured Query Language)", "स्टैंडर्ड क्वेरी लैंग्वेज", "सिक्वेंशियल क्वेरी लैंग्वेज", "सर्वर क्वेरी लैंग्वेज"] },
            correct: 0
        },
        {
            en: { q: "Which component of a computer architecture holds data temporarily while processing?", opts: ["Hard Disk", "Cache Memory and RAM", "ROM", "Optical Drive"] },
            hi: { q: "कंप्यूटर आर्किटेक्चर का कौन सा घटक प्रसंस्करण (processing) के दौरान डेटा को अस्थायी रूप से रखता है?", opts: ["हार्ड डिस्क", "कैश मेमोरी और रैम (Cache and RAM)", "रॉम (ROM)", "ऑप्टिकल ड्राइव"] },
            correct: 1
        },

        // --- Mixed Core Topics ---
        {
            en: { q: "A rectangular park 60m long and 40m wide has a concrete path 2m wide running all around the outside. Find the area of the path.", opts: ["416 sq.m", "432 sq.m", "400 sq.m", "424 sq.m"] },
            hi: { q: "60 मीटर लंबे और 40 मीटर चौड़े एक आयताकार पार्क के चारों ओर बाहर से 2 मीटर चौड़ा कंक्रीट का रास्ता है। रास्ते का क्षेत्रफल ज्ञात कीजिए।", opts: ["416 वर्ग मीटर", "432 वर्ग मीटर", "400 वर्ग मीटर", "424 वर्ग मीटर"] },
            correct: 0
        },
        {
            en: { q: "In a certain code language, 'COMPUTER' is written as 'RFUVQNPC'. How is 'MEDICINE' written in that code?", opts: ["EOJDJEFM", "EOHDJEFM", "MFEJDHOE", "EOJDEJFM"] },
            hi: { q: "एक निश्चित कूट भाषा में, 'COMPUTER' को 'RFUVQNPC' लिखा जाता है। उसी कूट में 'MEDICINE' कैसे लिखा जाएगा?", opts: ["EOJDJEFM", "EOHDJEFM", "MFEJDHOE", "EOJDEJFM"] },
            correct: 0
        },
        {
            en: { q: "The compound interest on ₹5,000 for 1.5 years at 10% per annum, compounded half-yearly, is:", opts: ["₹750.25", "₹788.13", "₹800", "₹762.50"] },
            hi: { q: "₹5,000 पर 1.5 वर्ष के लिए 10% वार्षिक दर से अर्धवार्षिक रूप से संयोजित होने वाला चक्रवृद्धि ब्याज कितना है?", opts: ["₹750.25", "₹788.13", "₹800", "₹762.50"] },
            correct: 1
        },
        {
            en: { q: "Introducing a man, a woman said, 'His wife is the only daughter of my father.' How is the man related to the woman?", opts: ["Husband", "Brother", "Father-in-law", "Maternal Uncle"] },
            hi: { q: "एक पुरुष का परिचय देते हुए एक महिला ने कहा, 'उसकी पत्नी मेरे पिता की इकलौती बेटी है।' पुरुष का महिला से क्या संबंध है?", opts: ["पति (Husband)", "भाई", "ससुर", "ममा"] },
            correct: 0
        },
        {
            en: { q: "A boat goes 24 km upstream and 28 km downstream in 6 hours. It goes 30 km upstream and 21 km downstream in 6.5 hours. Find the speed of the boat in still water.", opts: ["8 km/h", "10 km/h", "12 km/h", "14 km/h"] },
            hi: { q: "एक नाव 6 घंटे में 24 किमी धारा के प्रतिकूल और 28 किमी धारा के अनुकूल जाती है। यह 6.5 घंटे में 30 किमी धारा के प्रतिकूल और 21 किमी धारा के अनुकूल जाती है। शांत जल में नाव की गति ज्ञात कीजिए।", opts: ["8 किमी/घंटा", "10 किमी/घंटा", "12 किमी/घंटा", "14 किमी/घंटा"] },
            correct: 1
        },
        {
            en: { q: "Deficiency of Iodine in diet leads to which of the following disease?", opts: ["Rickets", "Goitre", "Anemia", "Night Blindness"] },
            hi: { q: "आहार में आयोडीन की कमी से निम्नलिखित में से कौन सा रोग होता है?", opts: ["सूखा रोग (Rickets)", "घेंघा रोग (Goitre)", "एनीमिया", "रतौंधी"] },
            correct: 1
        },
        {
            en: { q: "Which chemical substance is known as 'Oil of Vitriol'?", opts: ["Nitric Acid", "Hydrochloric Acid", "Sulfuric Acid", "Phosphoric Acid"] },
            hi: { q: "किस रासायनिक पदार्थ को 'ऑयल ऑफ विट्रिओल' (Oil of Vitriol) कहा जाता है?", opts: ["नाइट्रिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "सल्फ्यूरिक अम्ल (Sulfuric Acid)", "फॉस्फोरिक अम्ल"] },
            correct: 2
        },
        {
            en: { q: "If the base of a triangle is doubled and height is halved, its area will change by how much percentage?", opts: ["Increases by 50%", "Decreases by 50%", "Remains same (0% change)", "Doubled"] },
            hi: { q: "यदि किसी त्रिभुज का आधार दोगुना और ऊंचाई आधी कर दी जाए, तो उसके क्षेत्रफल में कितने प्रतिशत का परिवर्तन होगा?", opts: ["50% की वृद्धि", "50% की कमी", "समान रहेगा (0% परिवर्तन)", "दोगुना"] },
            correct: 2
        },
        {
            en: { q: "Where is the headquarters of Interpol located?", opts: ["Paris, France", "Lyon, France", "Vienna, Austria", "Geneva, Switzerland"] },
            hi: { q: "इंटरपोल (Interpol) का मुख्यालय कहाँ स्थित है?", opts: ["पेरिस, फ्रांस", "लियोन, फ्रांस (Lyon)", "वियना, ऑस्ट्रिया", "जेनेवा, स्विट्जरलैंड"] },
            correct: 1
        },
        {
            en: { q: "Who was the founder of the Brahmo Samaj in India?", opts: ["Swami Vivekananda", "Ishwar Chandra Vidyasagar", "Raja Ram Mohan Roy", "Dayanand Saraswati"] },
            hi: { q: "भारत में ब्रह्म समाज के संस्थापक कौन थे?", opts: ["स्वामी विवेकानंद", "ईश्वर चंद्र विद्यासागर", "राजा राम मोहन राय", "दयानंद सरस्वती"] },
            correct: 2
        },
        // --- Quantitative Aptitude (Set 6) ---
        {
            en: { q: "If the cost price of an item is ₹2500 and it is sold for ₹2000, find the loss percentage.", opts: ["15%", "20%", "25%", "30%"] },
            hi: { q: "यदि किसी वस्तु का क्रय मूल्य ₹2500 है और इसे ₹2000 में बेचा जाता है, तो हानि प्रतिशत ज्ञात कीजिए।", opts: ["15%", "20%", "25%", "30%"] },
            correct: 1
        },
        {
            en: { q: "A car travels at a speed of 60 km/h for 2 hours and then at 80 km/h for another 3 hours. Find its average speed for the entire journey.", opts: ["70 km/h", "72 km/h", "74 km/h", "75 km/h"] },
            hi: { q: "एक कार 2 घंटे के लिए 60 किमी/घंटा की गति से और फिर अगले 3 घंटे के लिए 80 किमी/घंटा की गति से चलती है। पूरी यात्रा के लिए इसकी औसत गति ज्ञात कीजिए।", opts: ["70 किमी/घंटा", "72 किमी/घंटा", "74 किमी/घंटा", "75 किमी/घंटा"] },
            correct: 1
        },
        {
            en: { q: "The sum of two numbers is 45 and their ratio is 2:3. Find the square of the larger number.", opts: ["729", "484", "625", "900"] },
            hi: { q: "दो संख्याओं का योग 45 है और उनका अनुपात 2:3 है। बड़ी संख्या का वर्ग ज्ञात कीजिए।", opts: ["729", "484", "625", "900"] },
            correct: 0
        },
        {
            en: { q: "A work can be completed by 10 men in 12 days. In how many days can 6 men complete the same work?", opts: ["15 days", "18 days", "20 days", "24 days"] },
            hi: { q: "एक काम को 10 पुरुष 12 दिनों में पूरा कर सकते हैं। 6 पुरुष उसी काम को कितने दिनों में पूरा कर सकते हैं?", opts: ["15 दिन", "18 दिन", "20 दिन", "24 दिन"] },
            correct: 2
        },
        {
            en: { q: "The simple interest on a certain sum at 8% per annum for 3 years is ₹1200. Find the principal sum.", opts: ["₹4,000", "₹5,000", "₹6,000", "₹4,500"] },
            hi: { q: "8% वार्षिक दर से 3 वर्ष के लिए किसी निश्चित राशि पर साधारण ब्याज ₹1200 है। मूलधन ज्ञात कीजिए।", opts: ["₹4,000", "₹5,000", "₹6,000", "₹4,500"] },
            correct: 1
        },
        {
            en: { q: "If the radius of a cylinder is doubled keeping its height same, its volume will become how many times?", opts: ["2 times", "3 times", "4 times", "8 times"] },
            hi: { q: "यदि एक बेलन की ऊंचाई समान रखते हुए उसकी त्रिज्या दोगुनी कर दी जाए, तो उसका आयतन कितने गुना हो जाएगा?", opts: ["2 गुना", "3 गुना", "4 गुना", "8 गुना"] },
            correct: 2
        },
        {
            en: { q: "A train 200 m long is moving at a speed of 72 km/h. How much time will it take to pass a signal post?", opts: ["8 seconds", "10 seconds", "12 seconds", "15 seconds"] },
            hi: { q: "200 मीटर लंबी एक ट्रेन 72 किमी/घंटा की गति से चल रही है। एक सिग्नल पोस्ट को पार करने में इसे कितना समय लगेगा?", opts: ["8 सेकंड", "10 सेकंड", "12 सेकंड", "15 सेकंड"] },
            correct: 1
        },
        {
            en: { q: "The ratio of present ages of Amit and Deepak is 4:3. After 6 years, Amit's age will be 26 years. What is the present age of Deepak?", opts: ["12 years", "15 years", "18 years", "21 years"] },
            hi: { q: "अमित और दीपक की वर्तमान आयु का अनुपात 4:3 है। 6 वर्ष बाद अमित की आयु 26 वर्ष होगी। दीपक की वर्तमान आयु क्या है?", opts: ["12 वर्ष", "15 वर्ष", "18 वर्ष", "21 वर्ष"] },
            correct: 1
        },
        {
            en: { q: "The HCF of two expressions is (x-5) and their LCM is (x^2 - 19x + 90). If one of the expressions is (x-10), find the other expression.", opts: ["x-5", "x-9", "(x-5)(x-9)", "(x-5)(x-10)"] },
            hi: { q: "दो व्यंजकों का म.स.प. (HCF) (x-5) है और उनका ल.स.प. (LCM) (x^2 - 19x + 90) है। यदि उनमें से एक व्यंजक (x-10) है, तो दूसरा व्यंजक ज्ञात कीजिए।", opts: ["x-5", "x-9", "(x-5)(x-9)", "(x-5)(x-10)"] },
            correct: 2
        },
        {
            en: { q: "A cistern is normally filled in 5 hours but takes 6 hours to fill because of a leak in its bottom. If the cistern is full, the leak will empty it in how many hours?", opts: ["20 hours", "25 hours", "30 hours", "35 hours"] },
            hi: { q: "एक टंकी सामान्यतः 5 घंटे में भर जाती है लेकिन इसकी तली में रिसाव के कारण इसे भरने में 6 घंटे लगते हैं। यदि टंकी पूरी भरी हो, तो रिसाव इसे कितने घंटों में खाली कर देगा?", opts: ["20 घंटे", "25 घंटे", "30 घंटे", "35 घंटे"] },
            correct: 2
        },

        // --- Reasoning Ability (Set 6) ---
        {
            en: { q: "In a certain code, 'PAPER' is written as 'SBTES'. How is 'BOARD' written in that code?", opts: ["ERDUD", "CQBSE", "EOCSG", "ERDUG"] },
            hi: { q: "एक निश्चित कूट में, 'PAPER' को 'SBTES' लिखा जाता है। उसी कूट में 'BOARD' कैसे लिखा जाएगा?", opts: ["ERDUD", "CQBSE", "EOCSG", "ERDUG"] },
            correct: 0
        },
        {
            en: { q: "Find the missing number in the series: 3, 7, 15, 31, 63, ?", opts: ["95", "111", "127", "139"] },
            hi: { q: "श्रृंखला में लुप्त संख्या ज्ञात कीजिए: 3, 7, 15, 31, 63, ?", opts: ["95", "111", "127", "139"] },
            correct: 2
        },
        {
            en: { q: "Statements: All pens are pencils. No pencil is an eraser. Conclusions: I. No pen is an eraser. II. Some pencils are pens.", opts: ["Only I follows", "Only II follows", "Neither I nor II follows", "Both I and II follow"] },
            hi: { q: "कथन: सभी पेन पेंसिल हैं। कोई पेंसिल इरेज़र नहीं है। निष्कर्ष: I. कोई पेन इरेज़र नहीं है। II. कुछ पेंसिल पेन हैं।", opts: ["केवल I अनुसरण करता है", "केवल II अनुसरण करता है", "न तो I और न ही II अनुसरण करता है", "I और II दोनों अनुसरण करते हैं"] },
            correct: 3
        },
        {
            en: { q: "A man walks 6 km North, then turns Right and walks 4 km, then turns Right again and walks 6 km. How far is he from his starting point?", opts: ["4 km", "6 km", "10 km", "2 km"] },
            hi: { q: "एक व्यक्ति 6 किमी उत्तर की ओर चलता है, फिर दाईं ओर मुड़कर 4 किमी चलता है, फिर से दाईं ओर मुड़कर 6 किमी चलता है। वह अपने प्रारंभिक बिंदु से कितनी दूर है?", opts: ["4 किमी", "6 किमी", "10 किमी", "2 किमी"] },
            correct: 0
        },
        {
            en: { q: "Karan is older than Arjun. Arjun is younger than Preeti but older than Rahul. Who is the youngest among them?", opts: ["Karan", "Arjun", "Preeti", "Rahul"] },
            hi: { q: "करण, अर्जुन से बड़ा है। अर्जुन, प्रीति से छोटा है लेकिन राहुल से बड़ा है। उनमें सबसे छोटा कौन है?", opts: ["करण", "अर्जुन", "प्रीति", "राहुल"] },
            correct: 3
        },
        {
            en: { q: "Pointing to a man, a lady said, 'His mother is the only daughter of my father.' How is the lady related to the man?", opts: ["Sister", "Mother", "Aunt", "Daughter"] },
            hi: { q: "एक पुरुष की ओर इशारा करते हुए एक महिला ने कहा, 'उनकी मां मेरे पिता की इकलौती बेटी हैं।' महिला का उस पुरुष से क्या संबंध है?", opts: ["बहन", "माँ (Mother)", "चाची", "पुत्री"] },
            correct: 1
        },
        {
            en: { q: "If Tuesday falls on the 4th of a month, which day will fall three days after the 24th of that month?", opts: ["Thursday", "Friday", "Saturday", "Sunday"] },
            hi: { q: "यदि किसी महीने की 4 तारीख को मंगलवार पड़ता है, तो उस महीने की 24 तारीख के तीन दिन बाद कौन सा दिन पड़ेगा?", opts: ["गुरुवार", "शुक्रवार", "शनिवार", "रविवार"] },
            correct: 1
        },
        {
            en: { q: "Identify the alternative which represents the best relationship among: Doctors, Lawyers, Professionals", opts: ["Three separate circles", "Two separate circles inside a big circle", "Two intersecting circles inside a big circle", "Three intersecting circles"] },
            hi: { q: "उस विकल्प की पहचान करें जो डॉक्टरों, वकीलों और पेशेवरों (Professionals) के बीच सबसे अच्छा संबंध दर्शाता है:", opts: ["तीन अलग वृत्त", "एक बड़े वृत्त के अंदर दो अलग वृत्त", "एक बड़े वृत्त के अंदर दो प्रतिच्छेदी वृत्त", "तीन प्रतिच्छेदी वृत्त"] },
            correct: 1
        },
        {
            en: { q: "Arrange the words in a logical order: 1. Sentence, 2. Letter, 3. Word, 4. Paragraph", opts: ["2, 3, 1, 4", "3, 2, 1, 4", "2, 1, 3, 4", "1, 2, 3, 4"] },
            hi: { q: "शब्दों को तार्किक क्रम में व्यवस्थित करें: 1. वाक्य, 2. अक्षर, 3. शब्द, 4. पैराग्राफ", opts: ["2, 3, 1, 4", "3, 2, 1, 4", "2, 1, 3, 4", "1, 2, 3, 4"] },
            correct: 0
        },
        {
            en: { q: "If 'A' denotes '+', 'B' denotes '-', 'C' denotes '*' and 'D' denotes '/', then find the value of: 20 C 4 A 10 B 6 D 2", opts: ["87", "83", "84", "92"] },
            hi: { q: "यदि 'A' का अर्थ '+', 'B' का अर्थ '-', 'C' का अर्थ '*' और 'D' का अर्थ '/' है, तो मान ज्ञात कीजिए: 20 C 4 A 10 B 6 D 2", opts: ["87", "83", "84", "92"] },
            correct: 0
        },

        // --- General Awareness & Railway Knowledge (Set 6) ---
        {
            en: { q: "Which railway station has the distinction of being the first solar-powered railway station in India?", opts: ["Guwahati", "New Delhi", "Chennai Central", "Mumbai CST"] },
            hi: { q: "भारत का पहला पूर्णतः सौर ऊर्जा संचालित रेलवे स्टेशन होने का गौरव किस रेलवे स्टेशन को प्राप्त है?", opts: ["गुवाहाटी (Guwahati)", "नई दिल्ली", "चेन्नई सेंट्रल", "मुंबई सीएसटी"] },
            correct: 0
        },
        {
            en: { q: "Where is the Indian Railways Institute of Civil Engineering (IRICEN) located?", opts: ["Secunderabad", "Pune", "Jamalpur", "Vadodara"] },
            hi: { q: "भारतीय रेलवे सिविल इंजीनियरिंग संस्थान (IRICEN) कहाँ स्थित है?", opts: ["सिकंदराबाद", "पुणे", "जमालपुर", "वडोदारा"] },
            correct: 1
        },
        {
            en: { q: "The mascot of Indian Railways, 'Bholu', represents which animal dressed as a guard?", opts: ["Elephant", "Lion", "Tiger", "Bear"] },
            hi: { q: "भारतीय रेलवे का शुभंकर (Mascot) 'भोलू', गार्ड की पोशाक में किस जानवर का प्रतिनिधित्व करता है?", opts: ["हाथी (Elephant)", "शेर", "बाघ", "भालू"] },
            correct: 0
        },
        {
            en: { q: "In which year was the Railway Budget merged with the Union Budget in India?", opts: ["2015", "2016", "2017", "2018"] },
            hi: { q: "भारत में किस वर्ष रेल बजट का केंद्रीय बजट में विलय कर दिया गया था?", opts: ["2015", "2016", "2017", "2018"] },
            correct: 2
        },
        {
            en: { q: "Which of the following is the headquarters of the South Central Railway zone?", opts: ["Hubli", "Vijayawada", "Secunderabad", "Guntakal"] },
            hi: { q: "निम्नलिखित में से कौन सा दक्षिण मध्य रेलवे ज़ोन का मुख्यालय है?", opts: ["हुबली", "विजयवाड़ा", "सिकंदराबाद", "गुंतकल"] },
            correct: 2
        },
        {
            en: { q: "The luxury tourist train 'Maharajas' Express' is operated by which organization?", opts: ["IRCTC", "Ministry of Tourism", "RTDC", "Indian Railways directly"] },
            hi: { q: "लक्ज़री पर्यटक ट्रेन 'महाराजा एक्सप्रेस' का संचालन किस संगठन द्वारा किया जाता है?", opts: ["IRCTC", "पर्यटन मंत्रालय", "RTDC", "सीधे भारतीय रेलवे द्वारा"] },
            correct: 0
        },
        {
            en: { q: "Which city is known for having India's first dedicated Railway University (National Rail and Transportation Institute)?", opts: ["New Delhi", "Vadodara", "Bhopal", "Kharagpur"] },
            hi: { q: "भारत का पहला समर्पित रेलवे विश्वविद्यालय (राष्ट्रीय रेल और परिवहन संस्थान) किस शहर में स्थित है?", opts: ["नई दिल्ली", "वडोदारा (Vadodara)", "भोपाल", "खड़गपुर"] },
            correct: 1
        },
        {
            en: { q: "The 'Samjhauta Express' historically ran between India and which country?", opts: ["Bangladesh", "Nepal", "Pakistan", "China"] },
            hi: { q: "'समझौता एक्सप्रेस' ऐतिहासिक रूप से भारत और किस देश के बीच चलती थी?", opts: ["बांग्लादेश", "नेपाल", "पाकिस्तान", "चीन"] },
            correct: 2
        },
        {
            en: { q: "What is the standard width of the Broad Gauge track used in Indian Railways?", opts: ["1.000 m", "1.676 m", "1.435 m", "0.762 m"] },
            hi: { q: "भारतीय रेलवे में प्रयुक्त ब्रॉड गेज (Broad Gauge) ट्रैक की मानक चौड़ाई कितनी होती है?", opts: ["1.000 मीटर", "1.676 मीटर", "1.435 मीटर", "0.762 मीटर"] },
            correct: 1
        },
        {
            en: { q: "Which committee recommended the separation of the Railway Budget from the General Budget in 1924?", opts: ["Acworth Committee", "Hunter Committee", "Simon Commission", "Muddiman Committee"] },
            hi: { q: "1924 में सामान्य बजट से रेल बजट को अलग करने की सिफारिश किस समिति ने की थी?", opts: ["एकवर्थ समिति (Acworth Committee)", "हंटर समिति", "साइमन कमीशन", "मुैडिमन समिति"] },
            correct: 0
        },

        // --- General Science ---
        {
            en: { q: "What is the power of a lens whose focal length is 1 meter?", opts: ["1 Diopter", "2 Diopter", "0.5 Diopter", "1.5 Diopter"] },
            hi: { q: "उस लेंस की क्षमता (Power) क्या होगी जिसकी फोकस दूरी 1 मीटर है?", opts: ["1 डायोप्टर (Diopter)", "2 डायोप्टर", "0.5 डायोप्टर", "1.5 डायोप्टर"] },
            correct: 0
        },
        {
            en: { q: "Which element is commonly used as a moderator in nuclear reactors?", opts: ["Uranium", "Heavy Water", "Plutonium", "Liquid Sodium"] },
            hi: { q: "परमाणु रिएक्टरों में मंदक (Moderator) के रूप में आमतौर पर किस तत्व का उपयोग किया जाता है?", opts: ["यूरेनियम", "भारी जल (Heavy Water)", "प्लूटोनियम", "तरल सोडियम"] },
            correct: 1
        },
        {
            en: { q: "Which acid is majorly found in lemons and oranges?", opts: ["Acetic Acid", "Citric Acid", "Tartaric Acid", "Lactic Acid"] },
            hi: { q: "नींबू और संतरे में मुख्य रूप से कौन सा अम्ल पाया जाता है?", opts: ["एसिटिक अम्ल", "साइट्रिक अम्ल (Citric Acid)", "टार्टरिक अम्ल", "लैक्टिक अम्ल"] },
            correct: 1
        },
        {
            en: { q: "Which vitamin is essential for the regular clotting of human blood?", opts: ["Vitamin A", "Vitamin B12", "Vitamin D", "Vitamin K"] },
            hi: { q: "मानव रक्त के सामान्य थक्के (Clotting) जमने के लिए कौन सा विटामिन आवश्यक है?", opts: ["विटामिन A", "विटामिन B12", "विटामिन D", "विटामिन K"] },
            correct: 3
        },
        {
            en: { q: "The chemical compound used in making matchsticks is:", opts: ["Sodium", "Phosphorus", "Potassium", "Calcium"] },
            hi: { q: "माचिस की तीली बनाने में प्रयुक्त होने वाला रासायनिक यौगिक कौन सा है?", opts: ["सोडियम", "फास्फोरस (Phosphorus)", "पोटेशियम", "कैल्शियम"] },
            correct: 1
        },

        // --- Computer Knowledge ---
        {
            en: { q: "Which protocol is primarily used to secure data transfer over the World Wide Web via encryption?", opts: ["HTTP", "HTTPS", "FTP", "SMTP"] },
            hi: { q: "एन्क्रिप्शन के माध्यम से वर्ल्ड वाइड वेब पर डेटा ट्रांसफर को सुरक्षित करने के लिए मुख्य रूप से किस प्रोटोकॉल का उपयोग किया जाता है?", opts: ["HTTP", "HTTPS", "FTP", "SMTP"] },
            correct: 1
        },
        {
            en: { q: "What is the function of a 'Compiler' in computing?", opts: ["To execute assembly language directly", "To convert high-level programming code into machine language", "To link network databases", "To manage system memory allocation"] },
            hi: { q: "कंप्यूटिंग में 'कंपाइलर' (Compiler) का क्या कार्य है?", opts: ["असेंबली भाषा को सीधे निष्पादित करना", "उच्च स्तरीय प्रोग्रामिंग कोड को मशीन भाषा में परिवर्तित करना", "नेटवर्क डेटाबेस को लिंक करना", "सिस्टम मेमोरी आवंटन प्रबंधित करना"] },
            correct: 1
        },
        {
            en: { q: "In Microsoft Excel, which symbol must all formulas begin with?", opts: ["+", "@", "=", "#"] },
            hi: { q: "माइक्रोसॉफ्ट एक्सेल (MS Excel) में, सभी सूत्र किस प्रतीक (Symbol) से शुरू होने चाहिए?", opts: ["+", "@", "=", "#"] },
            correct: 2
        },
        {
            en: { q: "Which type of computing storage holds the BIOS software inside a motherboard?", opts: ["RAM", "ROM", "Cache", "External Storage"] },
            hi: { q: "किस प्रकार का कंप्यूटिंग स्टोरेज मदरबोर्ड के अंदर BIOS सॉफ़्टवेयर को रखता है?", opts: ["RAM", "ROM", "कैश", "बाहरी स्टोरेज"] },
            correct: 1
        },
        {
            en: { q: "What does the term 'GUI' stand for in Operating Systems?", opts: ["Graphical User Interface", "Global User Index", "General Utility Interface", "Graphic Universal Integration"] },
            hi: { q: "ऑपरेटिंग सिस्टम में 'GUI' का पूर्ण रूप क्या है?", opts: ["ग्राफिकल यूजर इंटरफेस (Graphical User Interface)", "ग्लोबल यूजर इंडेक्स", "जनरल यूटिलिटी इंटरफेस", "ग्राफिक यूनिवर्सल इंटीग्रेशन"] },
            correct: 0
        },

        // --- Mixed Core Topics ---
        {
            en: { q: "A person sells an item at a profit of 10%. If he had bought it for 10% less and sold it for ₹3 more, he would have gained 25%. Find the cost price.", opts: ["₹100", "₹120", "₹150", "₹200"] },
            hi: { q: "एक व्यक्ति एक वस्तु को 10% के लाभ पर बेचता है। यदि उसने इसे 10% कम में खरीदा होता और ₹3 अधिक में बेचा होता, तो उसे 25% का लाभ होता। क्रय मूल्य ज्ञात कीजिए।", opts: ["₹100", "₹120", "₹150", "₹200"] },
            correct: 1
        },
        {
            en: { q: "If 'STOVE' is coded as 'EVOTS', then how is 'CANDLE' coded?", opts: ["ELDNAC", "ELDANC", "EDLNAC", "ELNDAC"] },
            hi: { q: "यदि 'STOVE' को 'EVOTS' के रूप में कूटबद्ध किया जाता है, तो 'CANDLE' को कैसे कूटबद्ध किया जाएगा?", opts: ["ELDNAC", "ELDANC", "EDLNAC", "ELNDAC"] },
            correct: 0
        },
        {
            en: { q: "The value of a machine depreciates at the rate of 10% annually. If its present value is ₹1,62,000, what was its value 2 years ago?", opts: ["₹1,80,000", "₹2,00,000", "₹1,95,000", "₹2,10,000"] },
            hi: { q: "एक मशीन का मूल्य 10% वार्षिक दर से घटता है। यदि इसका वर्तमान मूल्य ₹1,62,000 है, तो 2 वर्ष पहले इसका मूल्य क्या था?", opts: ["₹1,80,000", "₹2,00,000", "₹1,95,000", "₹2,10,000"] },
            correct: 1
        },
        {
            en: { q: "A man is facing West. He turns 45° in the clockwise direction and then another 180° in the same direction. In which direction is he facing now?", opts: ["South-West", "North-West", "South-East", "North-East"] },
            hi: { q: "एक व्यक्ति का मुख पश्चिम की ओर है। वह घड़ी की सुई की दिशा (Clockwise) में 45° मुड़ता है और फिर उसी दिशा में 180° मुड़ता है। अब उसका मुख किस दिशा में है?", opts: ["दक्षिण-पश्चिम", "उत्तर-पश्चिम", "दक्षिण-पूर्व", "उत्तर-पूर्व"] },
            correct: 2
        },
        {
            en: { q: "The lengths of the two diagonals of a rhombus are 24 cm and 10 cm respectively. Find its perimeter.", opts: ["48 cm", "52 cm", "56 cm", "60 cm"] },
            hi: { q: "एक समचतुर्भुज (Rhombus) के दो विकर्णों की लंबाई क्रमशः 24 सेमी और 10 सेमी है। इसका परिमाप ज्ञात कीजिए।", opts: ["48 सेमी", "52 सेमी", "56 सेमी", "60 सेमी"] },
            correct: 1
        },
        {
            en: { q: "Which component of blood helps in transport of oxygen to different cells?", opts: ["White Blood Cells", "Blood Platelets", "Hemoglobin in Red Blood Cells", "Plasma"] },
            hi: { q: "रक्त का कौन सा घटक विभिन्न कोशिकाओं तक ऑक्सीजन के परिवहन में मदद करता है?", opts: ["श्वेत रक्त कोशिकाएं", "रक्त प्लेटलेट्स", "लाल रक्त कोशिकाओं में हीमोग्लोबिन", "प्लाज्मा"] },
            correct: 2
        },
        {
            en: { q: "What is the main component of CNG (Compressed Natural Gas)?", opts: ["Methane", "Butane", "Propane", "Ethane"] },
            hi: { q: "सीएनजी (कंप्रैस्ड नेचुरल गैस) का मुख्य घटक क्या है?", opts: ["मीथेन (Methane)", "ब्यूटेन", "प्रोपेन", "इथेन"] },
            correct: 0
        },
        {
            en: { q: "If the radius of a sphere is decreased by 20%, its surface area will decrease by how much percentage?", opts: ["20%", "36%", "40%", "44%"] },
            hi: { q: "यदि किसी गोले की त्रिज्या में 20% की कमी की जाती है, तो उसके पृष्ठीय क्षेत्रफल में कितने प्रतिशत की कमी होगी?", opts: ["20%", "36%", "40%", "44%"] },
            correct: 1
        },
        {
            en: { q: "Where is the head office of the International Monetary Fund (IMF) located?", opts: ["New York", "Geneva", "Washington D.C.", "Paris"] },
            hi: { q: "अंतर्राष्ट्रीय मुद्रा कोष (IMF) का मुख्यालय कहाँ स्थित है?", opts: ["न्यूयॉर्क", "जेनेवा", "वाशिंगटन डी.सी. (Washington D.C.)", "पेरिस"] },
            correct: 2
        },
        {
            en: { q: "Who gave the slogan 'Swaraj is my birthright and I shall have it'?", opts: ["Mahatma Gandhi", "Bal Gangadhar Tilak", "Subhash Chandra Bose", "Lala Lajpat Rai"] },
            hi: { q: "यह नारा किसने दिया था: 'स्वराज्य मेरा जन्मसिद्ध अधिकार है और मैं इसे लेकर रहूँगा'?", opts: ["महात्मा गांधी", "बाल गंगाधर तिलक", "सुभाष चंद्र बोस", "लाला लाजपत राय"] },
            correct: 1
        },
        // --- Quantitative Aptitude (Set 7) ---
        {
            en: { q: "The ratio of numbers of sides of two regular polygons is 1:2 and the ratio of their interior angles is 3:4. Find the number of sides of these polygons.", opts: ["5, 10", "4, 8", "6, 12", "3, 6"] },
            hi: { q: "दो सम बहुभुजों (Regular polygons) की भुजाओं की संख्या का अनुपात 1:2 है और उनके आंतरिक कोणों का अनुपात 3:4 है। इन बहुभुजों की भुजाओं की संख्या ज्ञात कीजिए।", opts: ["5, 10", "4, 8", "6, 12", "3, 6"] },
            correct: 0
        },
        {
            en: { q: "A train passes a 50 m long platform in 14 seconds and a lamp post in 10 seconds. Find the speed of the train in km/h.", opts: ["45 km/h", "50 km/h", "36 km/h", "54 km/h"] },
            hi: { q: "एक ट्रेन 50 मीटर लंबे प्लेटफॉर्म को 14 सेकंड में और एक लैंप पोस्ट को 10 सेकंड में पार करती है। किमी/घंटा में ट्रेन की गति ज्ञात कीजिए।", opts: ["45 किमी/घंटा", "50 किमी/घंटा", "36 किमी/घंटा", "54 किमी/घंटा"] },
            correct: 0
        },
        {
            en: { q: "Find the compound interest on ₹10,000 for 2 years at 4% per annum, the interest being compounded half-yearly.", opts: ["₹824.32", "₹832.16", "₹816.48", "₹840.50"] },
            hi: { q: "₹10,000 पर 2 वर्ष के लिए 4% वार्षिक दर से चक्रवृद्धि ब्याज ज्ञात कीजिए, जबकि ब्याज अर्धवार्षिक रूप से संयोजित होता है।", opts: ["₹824.32", "₹832.16", "₹816.48", "₹840.50"] },
            correct: 0
        },
        {
            en: { q: "The sum of a fraction and its reciprocal is 2(16/21). Find the fraction.", opts: ["4/3", "7/3", "3/4", "5/3"] },
            hi: { q: "एक भिन्न (Fraction) और उसके व्युत्क्रम (Reciprocal) का योग 2(16/21) है। वह भिन्न ज्ञात कीजिए।", opts: ["4/3", "7/3", "3/4", "5/3"] },
            correct: 1
        },
        {
            en: { q: "If x = 3 + 2*sqrt(2), then find the value of (sqrt(x) - 1/sqrt(x)).", opts: ["1", "2", "sqrt(2)", "2*sqrt(2)"] },
            hi: { q: "यदि x = 3 + 2*sqrt(2) है, तो (sqrt(x) - 1/sqrt(x)) का मान ज्ञात कीजिए।", opts: ["1", "2", "sqrt(2)", "2*sqrt(2)"] },
            correct: 1
        },
        {
            en: { q: "A jar contains a mixture of two liquids A and B in the ratio 4:1. When 10 litres of the mixture is taken out and 10 litres of liquid B is poured into the jar, the ratio becomes 2:3. How many litres of liquid A was contained in the jar initially?", opts: ["12 litres", "16 litres", "20 litres", "24 litres"] },
            hi: { q: "एक जार में दो तरलों A और B का मिश्रण 4:1 के अनुपात में है। जब 10 लीटर मिश्रण निकाला जाता है और 10 लीटर तरल B जार में डाला जाता है, तो अनुपात 2:3 हो जाता है। प्रारंभ में जार में कितने लीटर तरल A था?", opts: ["12 लीटर", "16 लीटर", "20 लीटर", "24 लीटर"] },
            correct: 1
        },
        {
            en: { q: "Find the area of a sector of a circle with radius 6 cm if the angle of the sector is 60°.", opts: ["18.84 sq.cm", "12.56 sq.cm", "15.42 sq.cm", "22.12 sq.cm"] },
            hi: { q: "6 सेमी त्रिज्या वाले एक वृत्त के त्रिज्यखंड (Sector) का क्षेत्रफल ज्ञात कीजिए यदि त्रिज्यखंड का कोण 60° है।", opts: ["18.84 वर्ग सेमी", "12.56 वर्ग सेमी", "15.42 वर्ग सेमी", "22.12 वर्ग सेमी"] },
            correct: 0
        },
        {
            en: { q: "The total surface area of a solid hemisphere is 462 sq.cm. Find its volume.", opts: ["616 cubic cm", "718.67 cubic cm", "539 cubic cm", "692 cubic cm"] },
            hi: { q: "एक ठोस अर्धगोले (Hemosphere) का कुल पृष्ठीय क्षेत्रफल 462 वर्ग सेमी है। इसका आयतन ज्ञात कीजिए।", opts: ["616 घन सेमी", "718.67 घन सेमी", "539 घन सेमी", "692 घन सेमी"] },
            correct: 1
        },
        {
            en: { q: "A sum of money doubles itself in 8 years at simple interest. In how many years will it become four times of itself?", opts: ["16 years", "24 years", "32 years", "20 years"] },
            hi: { q: "साधारण ब्याज पर कोई राशि 8 वर्षों में दोगुनी हो जाती है। कितने वर्षों में यह स्वयं की चार गुनी हो जाएगी?", opts: ["16 वर्ष", "24 वर्ष", "32 वर्ष", "20 वर्ष"] },
            correct: 1
        },
        {
            en: { q: "The angle of elevation of the top of a tower from a point on the ground, which is 30m away from the foot of the tower, is 30°. Find the height of the tower.", opts: ["10*sqrt(3) m", "15*sqrt(3) m", "20 m", "30 m"] },
            hi: { q: "भूमि के एक बिंदु से, जो मीनार के पाद-बिंदु से 30 मीटर दूर है, मीनार के शिखर का उन्नयन कोण 30° है। मीनार की ऊंचाई ज्ञात कीजिए।", opts: ["10*sqrt(3) मीटर", "15*sqrt(3) मीटर", "20 मीटर", "30 मीटर"] },
            correct: 0
        },

        // --- Reasoning Ability (Set 7) ---
        {
            en: { q: "If 'GIVE' is coded as '5137' and 'BAT' is coded as '924', how is 'GATE' coded?", opts: ["5247", "5427", "5237", "2547"] },
            hi: { q: "यदि 'GIVE' को '5137' और 'BAT' को '924' के रूप में कूटबद्ध किया जाता है, तो 'GATE' को कैसे कूटबद्ध किया जाएगा?", opts: ["5247", "5427", "5237", "2547"] },
            correct: 0
        },
        {
            en: { q: "Complete the series: 4, 9, 25, 49, 121, ?", opts: ["144", "169", "196", "225"] },
            hi: { q: "श्रृंखला को पूरा करें: 4, 9, 25, 49, 121, ?", opts: ["144", "169", "196", "225"] },
            correct: 1
        },
        {
            en: { q: "Statements: All keys are locks. All locks are screws. Conclusions: I. All keys are screws. II. Some screws are locks.", opts: ["Only I follows", "Only II follows", "Neither I nor II follows", "Both I and II follow"] },
            hi: { q: "कथन: सभी चाबियां ताले हैं। सभी ताले पेंच हैं। निष्कर्ष: I. सभी चाबियां पेंच हैं। II. कुछ पेंच ताले हैं।", opts: ["केवल I अनुसरण करता है", "केवल II अनुसरण करता है", "न तो I और न ही II अनुसरण करता है", "I और II दोनों अनुसरण करते हैं"] },
            correct: 3
        },
        {
            en: { q: "A child is looking for his father. He went 90 metres in the East before turning to his right. He went 20 metres before turning to his right again to look for his father at his uncle's place 30 metres from this point. His father was not there. From here he went 100 metres to the North before meeting his father in a street. How far did the son meet his father from the starting point?", opts: ["80 m", "100 m", "140 m", "260 m"] },
            hi: { q: "एक बच्चा अपने पिता को ढूंढ रहा है। वह दाएं मुड़ने से पहले पूर्व में 90 मीटर गया। वह फिर से दाएं मुड़ने से पहले 20 मीटर गया और इस बिंदु से 30 मीटर दूर अपने चाचा के घर पर अपने पिता को देखा। उसके पिता वहां नहीं थे। यहां से वह गली में अपने पिता से मिलने से पहले उत्तर की ओर 100 मीटर गया। बेटा शुरुआती बिंदु से कितनी दूरी पर अपने पिता से मिला?", opts: ["80 मीटर", "100 मीटर", "140 मीटर", "260 मीटर"] },
            correct: 1
        },
        {
            en: { q: "Pointing to a photograph, a man said, 'I have no brother or sister but that man's father is my father's son.' Whose photograph was it?", opts: ["His own", "His son's", "His father's", "His nephew's"] },
            hi: { q: "एक तस्वीर की ओर इशारा करते हुए एक व्यक्ति ने कहा, 'मेरा कोई भाई या बहन नहीं है, लेकिन उस आदमी का पिता मेरे पिता का बेटा है।' वह तस्वीर किसकी थी?", opts: ["उसकी अपनी", "उसके बेटे की (His son's)", "उसके पिता की", "उसके भतीजे की"] },
            correct: 1
        },
        {
            en: { q: "Six friends A, B, C, D, E and F are sitting in a circle facing the center. F is to the immediate left of A. Who is sitting opposite to F if B is between C and D, and E is between A and D?", opts: ["C", "B", "D", "E"] },
            hi: { q: "छह मित्र A, B, C, D, E और F केंद्र की ओर मुख करके एक वृत्त में बैठे हैं। F, A के ठीक बाईं ओर है। यदि B, C और D के बीच में है, और E, A और D के बीच में है, तो F के विपरीत कौन बैठा है?", opts: ["C", "B", "D", "E"] },
            correct: 2
        },
        {
            en: { q: "If '+' means '/', '/' means '-', '-' means '*' and '*' means '+', then find the value of: 12 + 6 / 3 - 2 * 8", opts: ["2", "4", "6", "8"] },
            hi: { q: "यदि '+' का अर्थ '/', '/' का अर्थ '-', '-' का अर्थ '*' और '*' का अर्थ '+' है, तो मान ज्ञात कीजिए: 12 + 6 / 3 - 2 * 8", opts: ["2", "4", "6", "8"] },
            correct: 1
        },
        {
            en: { q: "Choose the word which is least like the other words in the group.", opts: ["Geometry", "Algebra", "Calculus", "Thermodynamics"] },
            hi: { q: "उस शब्द को चुनें जो समूह के अन्य शब्दों से सबसे कम मेल खाता हो।", opts: ["ज्यामिति (Geometry)", "बीजगणित (Algebra)", "कलन (Calculus)", "ऊष्मागतिकी (Thermodynamics)"] },
            correct: 3
        },
        {
            en: { q: "In a row of boys, if A who is 10th from the left and B who is 9th from the right interchange their positions, A becomes 15th from the left. How many boys are there in the row?", opts: ["23", "24", "27", "28"] },
            hi: { q: "लड़कों की एक पंक्ति में, यदि A जो बाईं ओर से 10वें स्थान पर है और B जो दाईं ओर से 9वें स्थान पर है, अपने स्थानों को आपस में बदल लेते हैं, तो A बाईं ओर से 15वां हो जाता है। पंक्ति में कुल कितने लड़के हैं?", opts: ["23", "24", "27", "28"] },
            correct: 0
        },
        {
            en: { q: "If the day before yesterday was Thursday, what day will be the day after tomorrow?", opts: ["Monday", "Tuesday", "Wednesday", "Sunday"] },
            hi: { q: "यदि परसों (day before yesterday) गुरुवार था, तो अगले परसों (day after tomorrow) कौन सा दिन होगा?", opts: ["सोमवार", "मंगलवार", "बुधवार", "रविवार"] },
            correct: 0
        },

        // --- General Awareness & Railway Knowledge (Set 7) ---
        {
            en: { q: "Which is the longest railway tunnel in India as of today?", opts: ["Pir Panjal Tunnel", "T-49 Tunnel", "Karbude Tunnel", "Natuwadi Tunnel"] },
            hi: { q: "आज की तारीख में भारत की सबसे लंबी रेलवे सुरंग कौन सी है?", opts: ["पीर पंजाल सुरंग", "टी-49 सुरंग (T-49 Tunnel - Udhampur-Srinagar-Baramulla)", "करबुड़े सुरंग", "नाटुवाड़ी सुरंग"] },
            correct: 1
        },
        {
            en: { q: "Where is the Wheel and Axle Plant of Indian Railways located?", opts: ["Yelahanka, Bengaluru", "Kapurthala", "Chittaranjan", "Bela, Bihar"] },
            hi: { q: "भारतीय रेलवे का व्हील एंड एक्सेल प्लांट (Wheel and Axle Plant) कहाँ स्थित है?", opts: ["येलाहंका, बेंगलुरु", "कपूरथला", "चित्तरंजन", "बेला, बिहार"] },
            correct: 0
        },
        {
            en: { q: "Which railway station has the unique distinction of having all three tracks (Broad, Metre, and Narrow gauges)?", opts: ["Siliguri Junction", "New Jalpaiguri", "Matheran", "Shimla"] },
            hi: { q: "किस रेलवे स्टेशन को तीनों ट्रैक (ब्रॉड, मीटर और नैरो गेज) होने का अनूठा गौरव प्राप्त है?", opts: ["सिलीगुड़ी जंक्शन (Siliguri Junction)", "न्यू जलपाईगुड़ी", "माथेरान", "शिमला"] },
            correct: 0
        },
        {
            en: { q: "What is the primary objective of the 'RAIL MADAD' application launched by Indian Railways?", opts: ["Train tracking", "Grievance redressal and assistance", "Ticket booking", "Food delivery in trains"] },
            hi: "भारतीय रेलवे द्वारा लॉन्च किए गए 'रेल मदद' (RAIL MADAD) एप्लिकेशन का प्राथमिक उद्देश्य क्या है?", opts: ["ट्रेन ट्रैकिंग", "शिकायत निवारण और सहायता", "टिकट बुकिंग", "ट्रेनों में भोजन वितरण"] },
            correct: 1
        },
        {
            en: { q: "The luxury train 'Deccan Odyssey' is primarily operated in which state of India?", opts: ["Rajasthan", "Maharashtra", "Karnataka", "Goa"] },
            hi: { q: "लक्ज़री ट्रेन 'डेक्कन ओडिसी' मुख्य रूप से भारत के किस राज्य में संचालित होती है?", opts: ["राजस्थान", "महाराष्ट्र (Maharashtra)", "कर्नाटक", "गोवा"] },
            correct: 1
        },
        {
            en: { q: "In which city is the Central Railway zone headquartered?", opts: ["Mumbai CST", "Mumbai Churchgate", "Nagpur", "Pune"] },
            hi: { q: "मध्य रेलवे (Central Railway) ज़ोन का मुख्यालय किस शहर में स्थित है?", opts: ["मुंबई सीएसटी (Mumbai CST)", "मुंबई चर्चगेट", "नागपुर", "पुणे"] },
            correct: 0
        },
        {
            en: { q: "Which autonomous body under the Ministry of Railways handles the computerised passenger reservation system?", opts: ["IRCTC", "CRIS", "CONCOR", "RLDA"] },
            hi: { q: "रेल मंत्रालय के तहत कौन सा स्वायत्त निकाय कम्प्यूटरीकृत यात्री आरक्षण प्रणाली (PRS) को संभालता है?", opts: ["IRCTC", "क्रिस (CRIS)", "CONCOR", "RLDA"] },
            correct: 1
        },
        {
            en: { q: "The historical train 'Fairy Queen' is certified as the world's oldest working:", opts: ["Steam Locomotive", "Diesel Locomotive", "Electric Locomotive", "Metro Train"] },
            hi: { q: "ऐतिहासिक ट्रेन 'फेयरी क्वीन' (Fairy Queen) को दुनिया के सबसे पुराने कार्यशील किस इंजन के रूप में प्रमाणित किया गया है?", opts: ["भाप इंजन (Steam Locomotive)", "डीजल इंजन", "इलेक्ट्रिक इंजन", "मेट्रो ट्रेन"] },
            correct: 0
        },
        {
            en: { q: "Which production unit of Indian Railways is famous for manufacturing Electric Locomotives like WAG-9 and WAP-7?", opts: ["DLW Varanasi", "CLW Chittaranjan", "RCF Kapurthala", "DMW Patiala"] },
            hi: { q: "भारतीय रेलवे की कौन सी उत्पादन इकाई WAG-9 और WAP-7 जैसे इलेक्ट्रिक इंजनों के निर्माण के लिए प्रसिद्ध है?", opts: ["DLW वाराणसी", "CLW चित्तरंजन (Chittaranjan Locomotive Works)", "RCF कपूरथला", "DMW पटियाला"] },
            correct: 1
        },
        {
            en: { q: "What does 'RDSO' stand for in relation to Indian Railways?", opts: ["Railway Development and Safety Organization", "Research Designs and Standards Organisation", "Railway Dynamic Systems Operations", "Regional Delivery and Security Office"] },
            hi: { q: "भारतीय रेलवे के संबंध में 'RDSO' का पूर्ण रूप क्या है?", opts: ["रेलवे डेवलपमेंट एंड सेफ्टी ऑर्गनाइजेशन", "रिसर्च डिज़ाइन एंड स्टैंडर्ड्स ऑर्गनाइजेशन", "रेलवे डायनेमिक सिस्टम्स ऑपरेशंस", "रीजनल डिलीवरी एंड सिक्योरिटी ऑफिस"] },
            correct: 1
        },

        // --- General Science ---
        {
            en: { q: "What is the escape velocity from the surface of the Earth?", opts: ["9.8 km/s", "11.2 km/s", "42.1 km/s", "7.5 km/s"] },
            hi: { q: "पृथ्वी की सतह से पलायन वेग (Escape velocity) कितना है?", opts: ["9.8 किमी/सेकंड", "11.2 किमी/सेकंड (11.2 km/s)", "42.1 किमी/सेकंड", "7.5 किमी/सेकंड"] },
            correct: 1
        },
        {
            en: { q: "Which phenomena of light causes the blue appearance of the sky?", opts: ["Refraction", "Reflection", "Scattering", "Total Internal Reflection"] },
            hi: { q: "प्रकाश की किस घटना के कारण आकाश का रंग नीला दिखाई देता है?", opts: ["अपवर्तन", "परावर्तन", "प्रकीर्णन (Scattering)", "पूर्ण आंतरिक परावर्तन"] },
            correct: 2
        },
        {
            en: { q: "What is the chemical name of common baking powder?", opts: ["Sodium Carbonate", "Sodium Bicarbonate", "Calcium Chloride", "Sodium Chloride"] },
            hi: { q: "सामान्य बेकिंग पाउडर का रासायनिक नाम क्या है?", opts: ["सोडियम कार्बोनेट", "सोडियम बाइकार्बोनेट (Sodium Bicarbonate)", "कैल्शियम क्लोराइड", "सोडियम क्लोराइड"] },
            correct: 1
        },
        {
            en: { q: "Which metal remains in liquid state at normal room temperature?", opts: ["Mercury", "Gallium", "Bromine", "Both 0 and 1"] },
            hi: { q: "सामान्य कमरे के तापमान पर कौन सी धातु तरल अवस्था में रहती है?", opts: ["पारा (Mercury)", "गैलियम", "ब्रोमीन", "0 और 1 दोनों"] },
            correct: 3
        },
        {
            en: { q: "Which part of the human eye controls the amount of light entering the eye?", opts: ["Cornea", "Iris", "Retina", "Lens"] },
            hi: { q: "मानव आँख का कौन सा भाग आँख में प्रवेश करने वाले प्रकाश की मात्रा को नियंत्रित करता है?", opts: ["कॉर्निया", "परितारिका (Iris)", "रेटिना", "लेंस"] },
            correct: 1
        },

        // --- Computer Knowledge ---
        {
            en: { q: "Which layer of the OSI model handles routing and logical addressing?", opts: ["Physical Layer", "Data Link Layer", "Network Layer", "Transport Layer"] },
            hi: { q: "OSI मॉडल की कौन सी परत (Layer) रूटिंग और लॉजिकल एड्रेसिंग को संभालती है?", opts: ["फिजिकल लेयर", "डेटा लिंक लेयर", "नेटवर्क लेयर (Network Layer)", "ट्रांसपोर्ट लेयर"] },
            correct: 2
        },
        {
            en: { q: "What is the primary purpose of a 'Firewall' in a network computer system?", opts: ["To speed up internet transmission", "To prevent unauthorized access", "To clear temporary data logs", "To host network servers"] },
            hi: { q: "नेटवर्क कंप्यूटर सिस्टम में 'फ़ायरवॉल' (Firewall) का प्राथमिक उद्देश्य क्या है?", opts: ["इंटरनेट ट्रांसमिशन तेज करना", "अनधिकृत पहुंच (Unauthorized access) को रोकना", "अस्थायी डेटा लॉग साफ़ करना", "नेटवर्क सर्वर होस्ट करना"] },
            correct: 1
        },
        {
            en: { q: "Which storage technology uses lasers to read or write data?", opts: ["Solid State Drive", "Magnetic Tape", "Optical Disk", "Hard Disk Drive"] },
            hi: { q: "कौन सी स्टोरेज तकनीक डेटा पढ़ने या लिखने के लिए लेजर का उपयोग करती है?", opts: ["सॉलिड स्टेट ड्राइव", "मैग्नेटिक टेप", "ऑप्टिकल डिस्क (Optical Disk)", "हार्ड डिस्क ड्राइव"] },
            correct: 2
        },
        {
            en: { q: "What is the full form of 'URL' in web development?", opts: ["Uniform Resource Locator", "Universal Resource Link", "Unified Routing Location", "Universal Resource Locator"] },
            hi: { q: "वेब डेवलपमेंट में 'URL' का पूर्ण रूप क्या है?", opts: ["यूनिफ़ॉर्म रिसोर्स लोकेटर (Uniform Resource Locator)", "यूनिवर्सल रिसोर्स लिंक", "यूनिफाइड रूटिंग लोकेशन", "यूनिवर्सल रिसोर्स लोकेटर"] },
            correct: 0
        },
        {
            en: { q: "Which malicious software replicates itself automatically and spreads across networks without human intervention?", opts: ["Trojan Horse", "Computer Worm", "Spyware", "Adware"] },
            hi: { q: "कौन सा दुर्भावनापूर्ण सॉफ़्टवेयर (Malware) स्वचालित रूप से खुद को रेप्लिकेट करता है और मानवीय हस्तक्षेप के बिना नेटवर्क पर फैलता है?", opts: ["ट्रोजन हॉर्स", "कंप्यूटर वॉर्म (Computer Worm)", "स्पाइवेयर", "एडवेयर"] },
            correct: 1
        },

        // --- Mixed Core Topics ---
        {
            en: { q: "If cost price is 80% of selling price, what is the profit percentage?", opts: ["20%", "25%", "16.66%", "30%"] },
            hi: { q: "यदि क्रय मूल्य, विक्रय मूल्य का 80% है, तो लाभ प्रतिशत क्या है?", opts: ["20%", "25%", "16.66%", "30%"] },
            correct: 1
        },
        {
            en: { q: "If 'CLOCK' is written as '34135' and 'TIME' as '8679', how is 'MOLE' written?", opts: ["7159", "7359", "7149", "7158"] },
            hi: { q: "यदि 'CLOCK' को '34135' और 'TIME' को '8679' लिखा जाता है, तो 'MOLE' कैसे लिखा जाएगा?", opts: ["7159", "7359", "7149", "7158"] },
            correct: 0
        },
        {
            en: { q: "The difference between simple interest and compound interest on a sum of money at 5% per annum for 2 years is ₹25. Find the sum.", opts: ["₹10,000", "₹12,000", "₹8,000", "₹15,000"] },
            hi: { q: "किसी धनराशि पर 5% वार्षिक दर से 2 वर्ष के साधारण ब्याज और चक्रवृद्धि ब्याज का अंतर ₹25 है। वह राशि ज्ञात कीजिए।", opts: ["₹10,000", "₹12,000", "₹8,000", "₹15,000"] },
            correct: 0
        },
        {
            en: { q: "Pointing to a man on the stage, Rita said, 'He is the brother of the daughter of the wife of my husband.' How is the man on the stage related to Rita?", opts: ["Son", "Husband", "Cousin", "Nephew"] },
            hi: { q: "मंच पर एक आदमी की ओर इशारा करते हुए रीता ने कहा, 'वह मेरे पति की पत्नी की बेटी का भाई है।' मंच पर मौजूद व्यक्ति का रीता से क्या संबंध है?", opts: ["पुत्र (Son)", "पति", "चचेरा भाई", "भतीजा/भांजा"] },
            correct: 0
        },
        {
            en: { q: "A man can row 6 km/h in still water. If the speed of the current is 2 km/h, it takes him 4 hours to row to a place and come back. Find the distance.", opts: ["6 km", "8 km", "10 km", "12 km"] },
            hi: { q: "एक व्यक्ति शांत जल में 6 किमी/घंटा की गति से नाव चला सकता है। यदि धारा की गति 2 किमी/घंटा है, तो उसे एक स्थान पर जाने और वापस आने में 4 घंटे लगते हैं। दूरी ज्ञात कीजिए।", opts: ["6 किमी", "8 किमी", "10 किमी", "12 किमी"] },
            correct: 1
        },
        {
            en: { q: "Which part of the human brain is responsible for balance and posture of the body?", opts: ["Cerebrum", "Cerebellum", "Medulla Oblongata", "Pons"] },
            hi: { q: "मानव मस्तिष्क का कौन सा भाग शरीर के संतुलन और मुद्रा (Posture) के लिए जिम्मेदार है?", opts: ["सेरेब्रम (प्रमस्तिष्क)", "सेरेबेलम (अनुमस्तिष्क - Cerebellum)", "मड्यूला ऑब्लांगेटा", "पोंस"] },
            correct: 1
        },
        {
            en: { q: "Which gas is evolved when an acid reacts with a metal?", opts: ["Oxygen", "Hydrogen", "Carbon Dioxide", "Nitrogen"] },
            hi: { q: "जब कोई अम्ल किसी धातु के साथ अभिक्रिया करता है तो कौन सी गैस निकलती है?", opts: ["ऑक्सीजन", "हाइड्रोजन (Hydrogen)", "कार्बन डाइऑक्साइड", "नाइट्रोजन"] },
            correct: 1
        },
        {
            en: { q: "If the radius of a cylinder is decreased by 50% and its height is increased by 50%, find the percentage change in its volume.", opts: ["62.5% decrease", "37.5% decrease", "50% decrease", "No change"] },
            hi: { q: "यदि एक बेलन की त्रिज्या में 50% की कमी की जाती है और उसकी ऊंचाई में 50% की वृद्धि की जाती है, तो उसके आयतन में प्रतिशत परिवर्तन ज्ञात कीजिए।", opts: ["62.5% की कमी", "37.5% की कमी", "50% की कमी", "कोई परिवर्तन नहीं"] },
            correct: 0
        },
        {
            en: { q: "In which year was the first session of the Indian National Congress held?", opts: ["1885", "1886", "1890", "1905"] },
            hi: { q: "भारतीय राष्ट्रीय कांग्रेस (INC) का पहला सत्र किस वर्ष आयोजित किया गया था?", opts: ["1885", "1886", "1890", "1905"] },
            correct: 0
        },
        {
            en: { q: "Which article of the Indian Constitution deals with the Right to Equality?", opts: ["Article 14-18", "Article 19", "Article 21", "Article 32"] },
            hi: { q: "भारतीय संविधान का कौन सा अनुच्छेद समानता के अधिकार (Right to Equality) से संबंधित है?", opts: ["अनुच्छेद 14-18", "अनुच्छेद 19", "अनुच्छेद 21", "अनुच्छेद 32"] },
            correct: 0
        },
        // --- Quantitative Aptitude (Set 8) ---
        {
            en: { q: "The ratio of the areas of two squares is 9:16. Find the ratio of their perimeters.", opts: ["3:4", "9:16", "27:64", "2:3"] },
            hi: { q: "दो वर्गों के क्षेत्रफलों का अनुपात 9:16 है। उनके परिमापों (Perimeters) का अनुपात ज्ञात कीजिए।", opts: ["3:4", "9:16", "27:64", "2:3"] },
            correct: 0
        },
        {
            en: { q: "A train 150 m long passes a telegraph post in 12 seconds. Find the time taken by the train to cross a bridge of length 250 m.", opts: ["20 seconds", "24 seconds", "32 seconds", "36 seconds"] },
            hi: { q: "150 मीटर लंबी एक ट्रेन एक टेलीग्राफ पोस्ट को 12 सेकंड में पार करती है। 250 मीटर लंबे पुल को पार करने में ट्रेन द्वारा लिया गया समय ज्ञात कीजिए।", opts: ["20 सेकंड", "24 सेकंड", "32 सेकंड", "36 सेकंड"] },
            correct: 2
        },
        {
            en: { q: "Find the compound interest on ₹8,000 for 1 year at 10% per annum, interest being compounded half-yearly.", opts: ["₹800", "₹820", "₹840", "₹810"] },
            hi: { q: "₹8,000 पर 1 वर्ष के लिए 10% वार्षिक दर से चक्रवृद्धि ब्याज ज्ञात कीजिए, यदि ब्याज अर्धवार्षिक रूप से संयोजित होता है।", opts: ["₹800", "₹820", "₹840", "₹810"] },
            correct: 1
        },
        {
            en: { q: "If 4a = 5b and 7b = 9c, then find the ratio of a:c.", opts: ["45:28", "28:45", "35:36", "36:35"] },
            hi: { q: "यदि 4a = 5b और 7b = 9c है, तो a:c का अनुपात ज्ञात कीजिए।", opts: ["45:28", "28:45", "35:36", "36:35"] },
            correct: 0
        },
        {
            en: { q: "If x + 1/x = 4, then find the value of x^3 + 1/x^3.", opts: ["52", "64", "76", "48"] },
            hi: { q: "यदि x + 1/x = 4 है, तो x^3 + 1/x^3 का मान ज्ञात कीजिए।", opts: ["52", "64", "76", "48"] },
            correct: 0
        },
        {
            en: { q: "A container contains 50 litres of pure milk. 5 litres of milk is replaced with water. This process is done one more time. Find the remaining quantity of pure milk.", opts: ["40 litres", "40.5 litres", "41.25 litres", "42.5 litres"] },
            hi: { q: "एक बर्तन में 50 लीटर शुद्ध दूध है। 5 लीटर दूध को पानी से बदल दिया जाता है। यह प्रक्रिया एक बार और दोहराई जाती है। शुद्ध दूध की शेष मात्रा ज्ञात कीजिए।", opts: ["40 लीटर", "40.5 लीटर", "41.25 लीटर", "42.5 लीटर"] },
            correct: 1
        },
        {
            en: { q: "The length of a diagonal of a rectangle is 13 cm and its perimeter is 34 cm. Find the area of the rectangle.", opts: ["60 sq.cm", "120 sq.cm", "65 sq.cm", "72 sq.cm"] },
            hi: { q: "एक आयत के विकर्ण की लंबाई 13 सेमी है और इसका परिमाप 34 सेमी है। आयत का क्षेत्रफल ज्ञात कीजिए।", opts: ["60 वर्ग सेमी", "120 वर्ग सेमी", "65 वर्ग सेमी", "72 वर्ग सेमी"] },
            correct: 0
        },
        {
            en: { q: "If the radius of a cone is doubled and height is kept same, find the ratio of the volume of new cone to the original cone.", opts: ["2:1", "4:1", "1:4", "8:1"] },
            hi: { q: "यदि एक शंकु (Cone) की त्रिज्या दोगुनी कर दी जाए और ऊंचाई समान रखी जाए, तो नए शंकु और मूल शंकु के आयतन का अनुपात ज्ञात कीजिए।", opts: ["2:1", "4:1", "1:4", "8:1"] },
            correct: 1
        },
        {
            en: { q: "A sum of money invested at compound interest amounts to ₹4624 in 2 years and to ₹4913 in 3 years. Find the rate of interest per annum.", opts: ["5%", "6%", "6.25%", "7.5%"] },
            hi: { q: "चक्रवृद्धि ब्याज पर निवेश की गई कोई राशि 2 वर्षों में ₹4624 और 3 वर्षों में ₹4913 हो जाती है। वार्षिक ब्याज दर ज्ञात कीजिए।", opts: ["5%", "6%", "6.25%", "7.5%"] },
            correct: 2
        },
        {
            en: { q: "The angle of depression of a car parked on the road from the top of a 150m high tower is 30°. Find the distance of the car from the tower.", opts: ["150 m", "150*sqrt(3) m", "75*sqrt(3) m", "300 m"] },
            hi: { q: "150 मीटर ऊंची मीनार के शिखर से सड़क पर खड़ी एक कार का अवनमन कोण (Angle of depression) 30° है। मीनार से कार की दूरी ज्ञात कीजिए।", opts: ["150 मीटर", "150*sqrt(3) मीटर", "75*sqrt(3) मीटर", "300 मीटर"] },
            correct: 1
        },

        // --- Reasoning Ability (Set 8) ---
        {
            en: { q: "In a certain code, 'FRIEND' is written as 'HUMJTK'. How is 'CANDLE' written in that code?", opts: ["EDRIRL", "DCQHQK", "ESJFME", "EYOBOC"] },
            hi: { q: "एक निश्चित कूट में, 'FRIEND' को 'HUMJTK' लिखा जाता है। उसी कूट में 'CANDLE' कैसे लिखा जाएगा?", opts: ["EDRIRL", "DCQHQK", "ESJFME", "EYOBOC"] },
            correct: 0
        },
        {
            en: { q: "Find the next alphabet term in the series: B, D, G, K, P, ?", opts: ["S", "T", "U", "V"] },
            hi: { q: "श्रृंखला में अगला अक्षर पद ज्ञात कीजिए: B, D, G, K, P, ?", opts: ["S", "T", "U", "V"] },
            correct: 3
        },
        {
            en: { q: "Statements: All laptops are computers. Some computers are androids. Conclusions: I. Some androids are computers. II. Some laptops are androids.", opts: ["Only I follows", "Only II follows", "Neither I nor II follows", "Both I and II follow"] },
            hi: { q: "कथन: सभी लैपटॉप कंप्यूटर हैं। कुछ कंप्यूटर एंड्रॉइड हैं। निष्कर्ष: I. कुछ एंड्रॉइड कंप्यूटर हैं। II. कुछ लैपटॉप एंड्रॉइड हैं।", opts: ["केवल I अनुसरण करता है", "केवल II अनुसरण करता है", "न तो I और न ही II अनुसरण करता है", "I और II दोनों अनुसरण करते हैं"] },
            correct: 0
        },
        {
            en: { q: "A man goes 10m towards South, then 24m towards West. How far is he from his starting point?", opts: ["26 m", "34 m", "28 m", "30 m"] },
            hi: { q: "एक व्यक्ति 10 मीटर दक्षिण की ओर जाता है, फिर 24 मीटर पश्चिम की ओर जाता है। वह अपने प्रारंभिक बिंदु से कितनी दूर है?", opts: ["26 मीटर", "34 मीटर", "28 मीटर", "30 मीटर"] },
            correct: 0
        },
        {
            en: { q: "Introducing a lady, a man said, 'Her husband is the only son of my mother.' How is the lady related to the man?", opts: ["Sister", "Mother", "Wife", "Daughter"] },
            hi: { q: "एक महिला का परिचय देते हुए एक पुरुष ने कहा, 'उनके पति मेरी माँ के इकलौते बेटे हैं।' महिला का पुरुष से क्या संबंध है?", opts: ["बहन", "माँ", "पत्नी (Wife)", "पुत्री"] },
            correct: 2
        },
        {
            en: { q: "Five boys A, B, C, D and E are sitting in a row facing North. A is to the immediate right of B. E is to the left of B but to the right of C. If D is at the extreme right end, who is in the middle?", opts: ["A", "B", "C", "E"] },
            hi: { q: "पांच लड़के A, B, C, D और E उत्तर की ओर मुख करके एक पंक्ति में बैठे हैं। A, B के ठीक दाईं ओर है। E, B के बाईं ओर है लेकिन C के दाईं ओर है। यदि D अंतिम दाईं छोर पर है, तो मध्य में कौन है?", opts: ["A", "B", "C", "E"] },
            correct: 1
        },
        {
            en: { q: "If '-' means '+', '+' means '-', '*' means '/' and '/' means '*', then evaluate: 40 * 8 - 6 + 3 / 2", opts: ["5", "11", "8", "9"] },
            hi: { q: "यदि '-' का अर्थ '+', '+' का अर्थ '-', '*' का अर्थ '/' और '/' का अर्थ '*' है, तो मान ज्ञात कीजिए: 40 * 8 - 6 + 3 / 2", opts: ["5", "11", "8", "9"] },
            correct: 0
        },
        {
            en: { q: "Which word does NOT belong with the others?", opts: ["Leopard", "Cougar", "Cheetah", "Wolf"] },
            hi: { q: "कौन सा शब्द अन्य शब्दों से मेल नहीं खाता है?", opts: ["तेंदुआ (Leopard)", "कूगर (Cougar)", "चीता (Cheetah)", "भेड़िया (Wolf)"] },
            correct: 3
        },
        {
            en: { q: "Anil is taller than Anand, but not as tall as Alok. Anand is taller than Ashok but shorter than Amit. Who is the tallest among them?", opts: ["Anil", "Alok", "Amit", "Anand"] },
            hi: { q: "अनिल, आनंद से लंबा है, लेकिन आलोक जितना लंबा नहीं है। आनंद, अशोक से लंबा है लेकिन अमित से छोटा है। उनमें सबसे लंबा कौन है?", opts: ["अनिल", "आलोक (Alok)", "अमित", "आनंद"] },
            correct: 1
        },
        {
            en: { q: "If the 3rd day of a month is Monday, which of the following will be the fifth day after the 21st of that month?", opts: ["Tuesday", "Wednesday", "Thursday", "Friday"] },
            hi: { q: "यदि किसी महीने का तीसरा दिन सोमवार है, तो निम्नलिखित में से कौन सा उस महीने की 21 तारीख के पांच दिन बाद का दिन होगा?", opts: ["मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार"] },
            correct: 1
        },

        // --- General Awareness & Railway Knowledge (Set 8) ---
        {
            en: { q: "Which railway station became the first 'Eat Right Station' in India certified by FSSAI?", opts: ["Mumbai Central", "New Delhi", "Chhatrapati Shivaji Maharaj Terminus", "Anand Vihar"] },
            hi: { q: "FSSAI द्वारा प्रमाणित भारत का पहला 'ईट राइट स्टेशन' (Eat Right Station) कौन सा रेलवे स्टेशन बना?", opts: ["मुंबई सेंट्रल (Mumbai Central)", "नई दिल्ली", "छत्रपति शिवाजी महाराज टर्मिनस", "आनंद विहार"] },
            correct: 0
        },
        {
            en: { q: "Where is the Indian Railways Institute of Signal Engineering and Telecommunications (IRISET) located?", opts: ["Pune", "Secunderabad", "Lucknow", "Kharagpur"] },
            hi: { q: "भारतीय रेलवे सिग्नल इंजीनियरिंग और दूरसंचार संस्थान (IRISET) कहाँ स्थित है?", opts: ["पुणे", "सिकंदराबाद (Secunderabad)", "लखनऊ", "खड़गपुर"] },
            correct: 1
        },
        {
            en: { q: "What color code is primarily used for the liveries of Humsafar Express trains?", opts: ["Teal and Blue", "Red and Silver", "Yellow and Orange", "Pure Green"] },
            hi: { q: "हम्सफ़र एक्सप्रेस ट्रेनों के डिब्बों के लिए मुख्य रूप से किस रंग कोड (Livery) का उपयोग किया जाता है?", opts: ["टील और नीला (Teal and Blue)", "लाल और सिल्वर", "पीला और नारंगी", "शुद्ध हरा"] },
            correct: 0
        },
        {
            en: { q: "In which city is the South Eastern Railway zone headquartered?", opts: ["Bhubaneswar", "Bilaspur", "Kolkata (Garden Reach)", "Guwahati"] },
            hi: { q: "दक्षिण पूर्व रेलवे (South Eastern Railway) ज़ोन का मुख्यालय किस शहर में स्थित है?", opts: ["भुवनेश्वर", "बिलासपुर", "कोलकाता - गार्डन रीच (Garden Reach)", "गुवाहाटी"] },
            correct: 2
        },
        {
            en: { q: "The computerised Passenger Reservation System (PRS) of Indian Railways was first introduced in which year?", opts: ["1984", "1986", "1990", "1995"] },
            hi: { q: "भारतीय रेलवे की कम्प्यूटरीकृत यात्री आरक्षण प्रणाली (PRS) पहली बार किस वर्ष शुरू की गई थी?", opts: ["1984", "1986", "1990", "1995"] },
            correct: 1
        },
        {
            en: { q: "Which is the highest railway station in India located on the Darjeeling Himalayan Railway track?", opts: ["Ghum", "Ooty", "Shimla", "Qazigund"] },
            hi: { q: "दार्जिलिंग हिमालयन रेलवे ट्रैक पर स्थित भारत का सबसे ऊंचा रेलवे स्टेशन कौन सा है?", opts: ["घूम (Ghum)", "ऊटी", "शिमला", "काजीगुंड"] },
            correct: 0
        },
        {
            en: { q: "The multi-modal transport terminal 'Pristine Mega Logistics Park' is managed by which railway subsidiary?", opts: ["CONCOR", "DFCCIL", "RITES", "IRCTC"] },
            hi: { q: "मल्टी-मोडल ट्रांसपोर्ट टर्मिनल 'प्रिस्टिन मेगा लॉजिस्टिक्स पार्क' का प्रबंधन मुख्य रूप से किसके सहयोग से होता है?", opts: ["CONCOR (कंटेनर कॉर्पोरेशन ऑफ इंडिया)", "DFCCIL", "RITES", "IRCTC"] },
            correct: 0
        },
        {
            en: { q: "Which train is famously known as the 'Hospital on Wheels' in India?", opts: ["Red Cross Express", "Lifeline Express", "Arogya Express", "Sanjeevani Train"] },
            hi: { q: "भारत में किस ट्रेन को 'हॉस्पिटल ऑन व्हील्स' (Hospital on Wheels) के नाम से जाना जाता है?", opts: ["रेड क्रॉस एक्सप्रेस", "लाइफलाइन एक्सप्रेस (Lifeline Express)", "आरोग्य एक्सप्रेस", "संजीवनी ट्रेन"] },
            correct: 1
        },
        {
            en: { q: "What is the standard track gauge distance of Narrow Gauge (A category) tracks in Indian Railways?", opts: ["0.762 m", "0.610 m", "1.000 m", "1.435 m"] },
            hi: { q: "भारतीय रेलवे में नैरो गेज (Narrow Gauge - A श्रेणी) ट्रैक की मानक दूरी कितनी होती है?", opts: ["0.762 मीटर", "0.610 मीटर", "1.000 मीटर", "1.435 मीटर"] },
            correct: 0
        },
        {
            en: { q: "The dynamic pricing system in premium Indian trains like Rajdhani and Shatabdi is called:", opts: ["Flexi Fare System", "Surge Pricing", "Peak System", "Tatkal Dynamic"] },
            hi: { q: "राजधानी और शताब्दी जैसी प्रीमियम भारतीय ट्रेनों में गतिशील मूल्य निर्धारण प्रणाली (Dynamic pricing) को क्या कहा जाता है?", opts: ["फ्लेक्सी फेयर सिस्टम (Flexi Fare System)", "सर्ज प्राइसिंग", "पीक सिस्टम", "तत्काल डायनेमिक"] },
            correct: 0
        },

        // --- General Science ---
        {
            en: { q: "What is the unit of measure for the frequency of a wave?", opts: ["Hertz", "Decibel", "Meter/second", "Joule"] },
            hi: { q: "तरंग की आवृत्ति (Frequency) को मापने की इकाई क्या है?", opts: ["हर्ट्ज़ (Hertz)", "डेसिबल", "मीटर/सेकंड", "जूल"] },
            correct: 0
        },
        {
            en: { q: "Which acid is produced naturally inside the human stomach to help in digestion?", opts: ["Sulphuric Acid", "Hydrochloric Acid", "Citric Acid", "Nitric Acid"] },
            hi: { q: "पाचन में सहायता के लिए मानव आमाशय (Stomach) के अंदर प्राकृतिक रूप से कौन सा अम्ल उत्पन्न होता है?", opts: ["सल्फ्यूरिक अम्ल", "हाइड्रोक्लोरिक अम्ल (Hydrochloric Acid)", "साइट्रिक अम्ल", "नाइट्रिक अम्ल"] },
            correct: 1
        },
        {
            en: { q: "What is the chemical name of Bleaching Powder?", opts: ["Calcium Hypochlorite", "Sodium Carbonate", "Calcium Sulphate", "Sodium Hydroxide"] },
            hi: { q: "ब्लीचिंग पाउडर (Bleaching Powder) का रासायनिक नाम क्या है?", opts: ["कैल्शियम हाइपोक्लोराइड (Calcium Hypochlorite)", "सोडियम कार्बोनेट", "कैल्शियम सल्फेट", "सोडियम हाइड्रोक्साइड"] },
            correct: 0
        },
        {
            en: { q: "Which blood group is universally known as the 'Universal Donor'?", opts: ["AB+", "AB-", "O+", "O-"] },
            hi: { q: "किस रक्त समूह (Blood group) को 'सार्वभौमिक दाता' (Universal Donor) कहा जाता है?", opts: ["AB+", "AB-", "O+", "O-"] },
            correct: 3
        },
        {
            en: { q: "The process of conversion of a solid directly into gas state is called:", opts: ["Evaporation", "Sublimation", "Condensation", "Fusion"] },
            hi: { q: "किसी ठोस के सीधे गैस अवस्था में परिवर्तित होने की प्रक्रिया कहलाती है:", opts: ["वाष्पीकरण", "ऊर्ध्वपातन (Sublimation)", "संघनन", "संलयन"] },
            correct: 1
        },

        // --- Computer Knowledge ---
        {
            en: { q: "Which network topology connects all device terminals via a single shared central cable line?", opts: ["Star Topology", "Ring Topology", "Bus Topology", "Mesh Topology"] },
            hi: { q: "कौन सी नेटवर्क टोपोलॉजी सभी डिवाइस टर्मिनलों को एक साझा केंद्रीय केबल लाइन से जोड़ती है?", opts: ["स्टार टोपोलॉजी", "रिंग टोपोलॉजी", "बस टोपोलॉजी (Bus Topology)", "मेश टोपोलॉजी"] },
            correct: 2
        },
        {
            en: { q: "What kind of data storage encryption algorithm is AES?", opts: ["Symmetric Key", "Asymmetric Key", "Hashing Algorithm", "Open Source Public Protocol"] },
            hi: { q: "AES किस प्रकार का डेटा स्टोरेज एन्क्रिप्शन एल्गोरिदम है?", opts: ["सममित कुंजी (Symmetric Key)", "असममित कुंजी (Asymmetric Key)", "हैशिंग एल्गोरिदम", "ओपन सोर्स पब्लिक प्रोटोकॉल"] },
            correct: 0
        },
        {
            en: { q: "In Microsoft Word, which function key opens the 'Save As' dialogue window panel?", opts: ["F8", "F9", "F10", "F12"] },
            hi: { q: "माइक्रोसॉफ्ट वर्ड (MS Word) में, कौन सी फंक्शन कुंजी 'Save As' डायलॉग विंडो पैनल खोलती है?", opts: ["F8", "F9", "F10", "F12"] },
            correct: 3
        },
        {
            en: { q: "What is the full form of 'VGA' cables in computer hardware graphics?", opts: ["Video Graphics Array", "Virtual Graphic Adapter", "Visual Generation Array", "Video Graphic Architecture"] },
            hi: { q: "कंप्यूटर हार्डवेयर ग्राफिक्स में 'VGA' केबल का पूर्ण रूप क्या है?", opts: ["वीडियो ग्राफिक्स एरे (Video Graphics Array)", "वर्चुअल ग्राफिक एडॉप्टर", "विजुअल जेनरेशन एरे", "वीडियो ग्राफिक आर्किटेक्चर"] },
            correct: 0
        },
        {
            en: { q: "Which core element handles logical arithmetic decisions inside a CPU microchip architecture?", opts: ["Control Unit", "ALU", "Registers", "Cache L1"] },
            hi: { q: "CPU माइक्रोचिप आर्किटेक्चर के अंदर कौन सा मुख्य तत्व तार्किक अंकगणितीय निर्णय (Logical arithmetic decisions) लेता है?", opts: ["कंट्रोल यूनिट", "ALU (Arithmetic Logic Unit)", "रजिस्टर", "कैश L1"] },
            correct: 1
        },

        // --- Mixed Core Topics ---
        {
            en: { q: "By selling an article for ₹720, a shopkeeper loses 10%. At what price should he sell it to gain 20%?", opts: ["₹960", "₹900", "₹840", "₹1000"] },
            hi: { q: "एक वस्तु को ₹720 में बेचने पर एक दुकानदार को 10% की हानि होती है। 20% का लाभ प्राप्त करने के लिए उसे इसे किस मूल्य पर बेचना चाहिए?", opts: ["₹960", "₹900", "₹840", "₹1000"] },
            correct: 0
        },
        {
            en: { q: "If 'PEOPLE' is coded as 'PLPOEE', then how is 'TRENDS' coded in that language?", opts: ["TNESRD", "TNDSER", "TSNERD", "TNDRSE"] },
            hi: { q: "यदि 'PEOPLE' को 'PLPOEE' के रूप में कूटबद्ध किया जाता है, तो उसी भाषा में 'TRENDS' को कैसे कूटबद्ध किया जाएगा?", opts: ["TNESRD", "TNDSER", "TSNERD", "TNDRSE"] },
            correct: 1
        },
        {
            en: { q: "The population of a town increases by 5% annually. If its present population is 92610, find its population 3 years ago.", opts: ["80000", "84000", "85000", "75000"] },
            hi: { q: "एक शहर की जनसंख्या में प्रतिवर्ष 5% की वृद्धि होती है। यदि इसकी वर्तमान जनसंख्या 92610 है, तो 3 वर्ष पहले इसकी जनसंख्या ज्ञात कीजिए।", opts: ["80000", "84000", "85000", "75000"] },
            correct: 0
        },
        {
            en: { q: "A man walks 4 km North, then turns Left and walks 3 km. Find the shortest distance between his starting and ending point.", opts: ["5 km", "7 km", "1 km", "6 km"] },
            hi: { q: "एक व्यक्ति 4 किमी उत्तर की ओर चलता है, फिर बाईं ओर मुड़कर 3 किमी चलता है। उसके प्रारंभिक और अंतिम बिंदु के बीच की न्यूनतम दूरी ज्ञात कीजिए।", opts: ["5 किमी", "7 किमी", "1 किमी", "6 किमी"] },
            correct: 0
        },
        {
            en: { q: "Find the total surface area of a cylinder whose radius is 7 cm and height is 10 cm.", opts: ["748 sq.cm", "616 sq.cm", "440 sq.cm", "528 sq.cm"] },
            hi: { q: "एक बेलन (Cylinder) का कुल पृष्ठीय क्षेत्रफल ज्ञात कीजिए जिसकी त्रिज्या 7 सेमी और ऊंचाई 10 सेमी है।", opts: ["748 वर्ग सेमी", "616 वर्ग सेमी", "440 वर्ग सेमी", "528 वर्ग सेमी"] },
            correct: 0
        },
        {
            en: { q: "Which part of the plant cell provides structural rigidity and protection?", opts: ["Cell Membrane", "Cell Wall", "Cytoplasm", "Vacuoles"] },
            hi: { q: "पादप कोशिका (Plant cell) का कौन सा भाग संरचनात्मक दृढ़ता और सुरक्षा प्रदान करता है?", opts: ["कोशिका झिल्ली", "कोशिका भित्ति (Cell Wall)", "कोशिकाद्रव्य", "रिक्तिकाएं"] },
            correct: 1
        },
        {
            en: { q: "What is the common chemical name of Wash Soda?", opts: ["Sodium Bicarbonate", "Sodium Carbonate Decahydrate", "Calcium Hydroxide", "Sodium Chloride"] },
            hi: { q: "धोने के सोडे (Wash Soda) का सामान्य रासायनिक नाम क्या है?", opts: ["सोडियम बाइकार्बोनेट", "सोडियम कार्बोनेट डेकाहाइड्रेट (Sodium Carbonate)", "कैल्शियम हाइड्रोक्साइड", "सोडियम क्लोराइड"] },
            correct: 1
        },
        {
            en: { q: "If the radius of a sphere is doubled, its volume increases by what percentage?", opts: ["100%", "300%", "700%", "800%"] },
            hi: { q: "यदि किसी गोले की त्रिज्या दोगुनी कर दी जाए, तो उसके आयतन में कितने प्रतिशत की वृद्धि होगी?", opts: ["100%", "300%", "700%", "800%"] },
            correct: 2
        },
        {
            en: { q: "Who was the first Governor-General of independent India?", opts: ["Lord Mountbatten", "C. Rajagopalachari", "Dr. Rajendra Prasad", "Jawaharlal Nehru"] },
            hi: { q: "स्वतंत्र भारत के पहले गवर्नर-जनरल कौन थे?", opts: ["लॉर्ड माउंटबेटन (Lord Mountbatten)", "सी. राजगोपालाचारी", "डॉ. राजेंद्र प्रसाद", "जवाहरलाल नेहरू"] },
            correct: 0
        },
        {
            en: { q: "Which fundamental right is called the 'Heart and Soul' of the Indian Constitution by Dr. B.R. Ambedkar?", opts: ["Right to Freedom", "Right to Equality", "Right to Constitutional Remedies", "Right against Exploitation"] },
            hi: { q: "डॉ. बी.आर. अम्बेडकर ने किस मौलिक अधिकार को भारतीय संविधान का 'हृदय और आत्मा' कहा था?", opts: ["स्वतंत्रता का अधिकार", "समानता का अधिकार", "संवैधानिक उपचारों का अधिकार (Article 32)", "शोषण के विरुद्ध अधिकार"] },
            correct: 2
        },
        // --- Quantitative Aptitude (Set 9) ---
        {
            en: { q: "The ratio of the length of a rod and its shadow is 1:sqrt(3). Find the angle of elevation of the sun.", opts: ["30°", "45°", "60°", "90°"] },
            hi: { q: "एक छड़ की लंबाई और उसकी छाया की लंबाई का अनुपात 1:sqrt(3) है। सूर्य का उन्नयन कोण (Angle of elevation) ज्ञात कीजिए।", opts: ["30°", "45°", "60°", "90°"] },
            correct: 0
        },
        {
            en: { q: "A train running at the speed of 60 km/h crosses a pole in 9 seconds. What is the length of the train?", opts: ["120 m", "150 m", "180 m", "324 m"] },
            hi: { q: "60 किमी/घंटा की गति से चल रही एक ट्रेन एक खंभे को 9 सेकंड में पार करती है। ट्रेन की लंबाई क्या है?", opts: ["120 मीटर", "150 मीटर", "180 मीटर", "324 मीटर"] },
            correct: 1
        },
        {
            en: { q: "The difference between simple interest and compound interest annually on a certain sum of money for 2 years at 4% per annum is ₹1. Find the sum.", opts: ["₹625", "₹630", "₹640", "₹650"] },
            hi: { q: "किसी निश्चित धनराशि पर 2 वर्ष के लिए 4% वार्षिक दर से साधारण ब्याज और वार्षिक रूप से संयोजित चक्रवृद्धि ब्याज का अंतर ₹1 है। वह राशि ज्ञात कीजिए।", opts: ["₹625", "₹630", "₹640", "₹650"] },
            correct: 0
        },
        {
            en: { q: "If A:B = 2:3, B:C = 4:5 and C:D = 6:7, then find A:D.", opts: ["16:35", "4:7", "8:15", "16:21"] },
            hi: { q: "यदि A:B = 2:3, B:C = 4:5 और C:D = 6:7 है, तो A:D ज्ञात कीजिए।", opts: ["16:35", "4:7", "8:15", "16:21"] },
            correct: 0
        },
        {
            en: { q: "If a + b + c = 0, then find the value of (a^3 + b^3 + c^3) / (a*b*c).", opts: ["1", "2", "3", "0"] },
            hi: { q: "यदि a + b + c = 0 है, तो (a^3 + b^3 + c^3) / (a*b*c) का मान ज्ञात कीजिए।", opts: ["1", "2", "3", "0"] },
            correct: 2
        },
        {
            en: { q: "A vessel is filled with liquid, 3 parts of which are water and 5 parts syrup. How much of the mixture must be drawn off and replaced with water so that the mixture may be half water and half syrup?", opts: ["1/3", "1/4", "1/5", "1/7"] },
            hi: { q: "एक बर्तन में एक तरल भरा हुआ है, जिसमें 3 भाग पानी और 5 भाग सिरप है। मिश्रण का कितना भाग निकालकर उसके स्थान पर पानी डाला जाए ताकि मिश्रण में आधा पानी और आधा सिरप हो जाए?", opts: ["1/3", "1/4", "1/5", "1/7"] },
            correct: 2
        },
        {
            en: { q: "The perimeter of a semi-circular protector is 72 cm. Find its radius. (Take pi = 22/7)", opts: ["14 cm", "7 cm", "21 cm", "28 cm"] },
            hi: { q: "एक अर्धवृत्ताकार चांदे (Protector) का परिमाप 72 सेमी है। इसकी त्रिज्या ज्ञात कीजिए। (pi = 22/7 लें)", opts: ["14 सेमी", "7 सेमी", "21 सेमी", "28 सेमी"] },
            correct: 0
        },
        {
            en: { q: "The curved surface area of a cylindrical pillar is 264 sq.m and its volume is 924 cubic m. Find the ratio of its diameter to its height.", opts: ["3:7", "7:3", "6:7", "7:6"] },
            hi: { q: "एक बेलनाकार स्तंभ का वक्र पृष्ठीय क्षेत्रफल (CSA) 264 वर्ग मीटर है और इसका आयतन 924 घन मीटर है। इसके व्यास (Diameter) का इसकी ऊंचाई से अनुपात ज्ञात कीजिए।", opts: ["3:7", "7:3", "6:7", "7:6"] },
            correct: 1
        },
        {
            en: { q: "At what rate percent per annum simple interest will a sum of money triple itself in 20 years?", opts: ["10%", "15%", "20%", "25%"] },
            hi: { q: "कितने प्रतिशत वार्षिक साधारण ब्याज की दर से कोई धनराशि 20 वर्षों में स्वयं की तिगुनी हो जाएगी?", opts: ["10%", "15%", "20%", "25%"] },
            correct: 0
        },
        {
            en: { q: "A man on the top of a cliff 100m high finds the angle of depression of a boat to be 30°. Find the distance of the boat from the foot of the cliff.", opts: ["100 m", "100*sqrt(3) m", "50*sqrt(3) m", "200 m"] },
            hi: { q: "100 मीटर ऊंची चट्टान के शिखर से एक व्यक्ति देखता है कि एक नाव का अवनमन कोण 30° है। चट्टान के पाद से नाव की दूरी ज्ञात कीजिए।", opts: ["100 मीटर", "100*sqrt(3) मीटर", "50*sqrt(3) मीटर", "200 मीटर"] },
            correct: 1
        },

        // --- Reasoning Ability (Set 9) ---
        {
            en: { q: "If 'ROSE' is coded as '6821', 'CHAIR' is coded as '73456' and 'PREACH' is coded as '961473', what is the code for 'SEARCH'?", opts: ["214673", "214763", "214376", "214637"] },
            hi: { q: "यदि 'ROSE' को '6821', 'CHAIR' को '73456' और 'PREACH' को '961473' कूटबद्ध किया जाता है, तो 'SEARCH' का कूट क्या होगा?", opts: ["214673", "214763", "214376", "214637"] },
            correct: 0
        },
        {
            en: { q: "Complete the series: 2, 5, 11, 23, 47, ?", opts: ["95", "96", "94", "98"] },
            hi: { q: "श्रृंखला को पूरा करें: 2, 5, 11, 23, 47, ?", opts: ["95", "96", "94", "98"] },
            correct: 0
        },
        {
            en: { q: "Statements: Some mangoes are yellow. Some tiffin-boxes are mangoes. Conclusions: I. Some mangoes are green. II. Tiffin-boxes are yellow.", opts: ["Only I follows", "Only II follows", "Neither I nor II follows", "Both I and II follow"] },
            hi: { q: "कथन: कुछ आम पीले हैं। कुछ टिफिन-बॉक्स आम हैं। निष्कर्ष: I. कुछ आम हरे हैं। II. टिफिन-बॉक्स पीले हैं।", opts: ["केवल I अनुसरण करता है", "केवल II अनुसरण करता है", "न तो I और न ही II अनुसरण करता है", "I और II दोनों अनुसरण करते हैं"] },
            correct: 2
        },
        {
            en: { q: "A man walks 6 km South, turns Left and walks 4 km, again turns Left and walks 5 km. Which direction is he facing now?", opts: ["North", "South", "East", "West"] },
            hi: { q: "एक व्यक्ति 6 किमी दक्षिण की ओर चलता है, बाईं ओर मुड़कर 4 किमी चलता है, फिर से बाईं ओर मुड़कर 5 किमी चलता है। अब उसका मुख किस दिशा की ओर है?", opts: ["उत्तर", "दक्षिण", "पूर्व", "पश्चिम"] },
            correct: 0
        },
        {
            en: { q: "Deepak has a brother Anil. Deepak is the son of Prem. Vimal is Prem's father. In terms of relationship, what is Anil to Vimal?", opts: ["Son", "Grandson", "Brother", "Grandfather"] },
            hi: { q: "दीपक का एक भाई अनिल है। दीपक, प्रेम का पुत्र है। विमल, प्रेम के पिता हैं। संबंधों के मामले में, अनिल का विमल से क्या संबंध है?", opts: ["पुत्र", "पोता (Grandson)", "भाई", "दादा"] },
            correct: 1
        },
        {
            en: { q: "Six persons A, B, C, D, E and F are sitting in two rows, three in each. E is not at the end of any row. D is second to the left of F. C, the neighbor of E, is sitting diagonally opposite to D. B is the neighbor of F. Who is opposite to B?", opts: ["A", "E", "C", "D"] },
            hi: { q: "छह व्यक्ति A, B, C, D, E और F दो पंक्तियों में बैठे हैं, प्रत्येक में तीन हैं। E किसी भी पंक्ति के अंत में नहीं है। D, F के बाईं ओर दूसरा है। C, जो E का पड़ोसी है, D के विकर्णतः विपरीत (Diagonally opposite) बैठा है। B, F का पड़ोसी है। B के विपरीत कौन बैठा है?", opts: ["A", "E", "C", "D"] },
            correct: 1
        },
        {
            en: { q: "If P denotes '+', Q denotes '-', R denotes '*' and S denotes '/', then what is the value of: 18 R 12 P 49 S 7 Q 9", opts: ["214", "221", "204", "195"] },
            hi: { q: "यदि P, '+' को दर्शाता है, Q, '-' को, R, '*' को और S, '/' को दर्शाता है, तो मान ज्ञात कीजिए: 18 R 12 P 49 S 7 Q 9", opts: ["214", "221", "204", "195"] },
            correct: 0
        },
        {
            en: { q: "Find the odd one out from the given options.", opts: ["Graphite", "Diamond", "Coal", "Quartz"] },
            hi: { q: "दिए गए विकल्पों में से विषम (Odd) को चुनें।", opts: ["ग्रेफाइट", "हीरा (Diamond)", "कोयला", "क्वार्ट्ज (Quartz)"] },
            correct: 3
        },
        {
            en: { q: "In a class of 45 students, Akanksha's rank is 15th from the top. What is her rank from the bottom?", opts: ["30th", "31st", "29th", "32nd"] },
            hi: { q: "45 छात्रों की एक कक्षा में, आकांक्षा का स्थान ऊपर से 15वां है। नीचे से उसका स्थान क्या होगा?", opts: ["30वां", "31वां", "29वां", "32वां"] },
            correct: 1
        },
        {
            en: { q: "If Jan 1, 2012 was a Sunday, what day of the week was Jan 1, 2013?", opts: ["Monday", "Tuesday", "Wednesday", "Thursday"] },
            hi: { q: "यदि 1 जनवरी 2012 को रविवार था, तो 1 जनवरी 2013 को सप्ताह का कौन सा दिन था?", opts: ["सोमवार", "मंगलवार (Tuesday)", "बुधवार", "गुरुवार"] },
            correct: 1
        },

        // --- General Awareness & Railway Knowledge (Set 9) ---
        {
            en: { q: "Which railway station has the longest railway platform in India?", opts: ["Gorakhpur", "Kollam Junction", "Hubballi Junction", "Kharagpur"] },
            hi: { q: "भारत में किस रेलवे स्टेशन पर सबसे लंबा रेलवे प्लेटफॉर्म है?", opts: ["गोरखपुर", "कोल्लम जंक्शन", "हुब्बल्ली जंक्शन (Sri Siddharoodha Swamiji Hubballi)", "खड़गपुर"] },
            correct: 2
        },
        {
            en: { q: "Where is the Indian Railways Institute of Mechanical and Electrical Engineering (IRIMEE) located?", opts: ["Jamalpur, Bihar", "Nasik", "Secunderabad", "Vadodara"] },
            hi: { q: "भारतीय रेलवे मैकेनिकल और इलेक्ट्रिकल इंजीनियरिंग संस्थान (IRIMEE) कहाँ स्थित है?", opts: ["जमालपुर, बिहार", "नासिक", "सिकंदराबाद", "वडोदरा"] },
            correct: 0
        },
        {
            en: { q: "What is the name of the anti-collision technology implemented by Indian Railways to prevent train accidents?", opts: ["Kavach", "Rakshak", "Suraksha", "Drishti"] },
            hi: { q: "ट्रेन दुर्घटनाओं को रोकने के लिए भारतीय रेलवे द्वारा लागू की गई एंटी-कोलिजन तकनीक (ट्रेन टक्कर सुरक्षा प्रणाली) का नाम क्या है?", opts: ["कवच (Kavach)", "रक्षक", "सुरक्षा", "दृष्टि"] },
            correct: 0
        },
        {
            en: { q: "In which city is the North Western Railway zone headquartered?", opts: ["Jaipur", "Jodhpur", "Ajmer", "Bikaner"] },
            hi: { q: "उत्तर पश्चिम रेलवे (North Western Railway) ज़ोन का मुख्यालय किस शहर में स्थित है?", opts: ["जयपुर (Jaipur)", "जोधपुर", "अजमेर", "बीकानेर"] },
            correct: 0
        },
        {
            en: { q: "Which committee recommended the merger of the Railway Budget with the General Budget of India?", opts: ["Acworth Committee", "Bibek Debroy Committee", "Sam Pitroda Committee", "Sarkaria Commission"] },
            hi: { q: "किस समिति ने रेलवे बजट को भारत के सामान्य बजट के साथ विलय करने की सिफारिश की थी?", opts: ["एकवर्थ समिति", "बिबेक देबरॉय समिति (Bibek Debroy Committee)", "सैम पित्रोदा समिति", "सरकारी आयोग"] },
            correct: 1
        },
        {
            en: { q: "Which luxury train runs across the desert circuit of India, covering Delhi, Jaipur, Jodhpur, and Udaipur?", opts: ["Palace on Wheels", "Maharajas' Express", "Deccan Odyssey", "Golden Chariot"] },
            hi: { q: "कौन सी लक्ज़री ट्रेन भारत के डेजर्ट सर्किट में दिल्ली, जयपुर, जोधपुर और उदयपुर को कवर करते हुए चलती है?", opts: ["पैलेस ऑन व्हील्स (Palace on Wheels)", "महाराजा एक्सप्रेस", "डेक्कन ओडिसी", "गोल्डन चेरियट"] },
            correct: 0
        },
        {
            en: { q: "What is the public portal of Indian Railways used for tracking freight operations and cargo bookings?", opts: ["FOIS", "COACH", "NTES", "IRCTC Freight"] },
            hi: { q: "माल ढुलाई संचालन और कार्गो बुकिंग को ट्रैक करने के लिए उपयोग किया जाने वाला भारतीय रेलवे का सार्वजनिक/आंतरिक पोर्टल कौन सा है?", opts: ["FOIS (Freight Operations Information System)", "COACH", "NTES", "IRCTC Freight"] },
            correct: 0
        },
        {
            en: { q: "The National Rail and Transportation Institute (NRTI), India's first rail university, is located in which city?", opts: ["New Delhi", "Vadodara", "Lucknow", "Kharagpur"] },
            hi: { q: "भारत का पहला रेल विश्वविद्यालय, राष्ट्रीय रेल और परिवहन संस्थान (NRTI) किस शहर में स्थित है?", opts: ["नई दिल्ली", "वडोदरा (Vadodara)", "लखनऊ", "खड़गपुर"] },
            correct: 1
        },
        {
            en: { q: "Which railway station has the unique distinction of being located on the border of two states (Maharashtra and Gujarat)?", opts: ["Navapur", "Nandurbar", "Valsad", "Bhusaula"] },
            hi: { q: "किस रेलवे स्टेशन को दो राज्यों (महाराष्ट्र और गुजरात) की सीमा पर स्थित होने का अनूठा गौरव प्राप्त है?", opts: ["नवापुर (Navapur)", "नंदुरबार", "वलसाड", "भुसावल"] },
            correct: 0
        },
        {
            en: { q: "What is the primary role of the Commission of Railway Safety (CRS) in India?", opts: ["Passenger hospitality", "Statutory clearance and safety inspection of new lines", "Ticket auditing", "Freight tracking management"] },
            hi: { q: "भारत में रेलवे सुरक्षा आयोग (CRS) की प्राथमिक भूमिका क्या है?", opts: ["यात्री सत्कार", "नई लाइनों की वैधानिक मंजूरी और सुरक्षा निरीक्षण", "टिकट ऑडिटिंग", "माल ढुलाई ट्रैकिंग प्रबंधन"] },
            correct: 1
        },

        // --- General Science ---
        {
            en: { q: "What is the unit of electric power?", opts: ["Watt", "Volt", "Ampere", "Ohm"] },
            hi: { q: "विद्युत शक्ति (Electric power) की इकाई क्या है?", opts: ["वाट (Watt)", "वोल्ट", "एम्पीयर", "ओम"] },
            correct: 0
        },
        {
            en: { q: "Which acid is present in sour milk or curd?", opts: ["Lactic Acid", "Citric Acid", "Tartaric Acid", "Acetic Acid"] },
            hi: { q: "खट्टे दूध या दही में कौन सा अम्ल उपस्थित होता है?", opts: ["लैक्टिक अम्ल (Lactic Acid)", "साइट्रिक अम्ल", "टार्टरिक अम्ल", "एसिटिक अम्ल"] },
            correct: 0
        },
        {
            en: { q: "What is the chemical formula of Plaster of Paris?", opts: ["CaSO4 * 2H2O", "CaSO4 * (1/2)H2O", "CaCO3", "CaO"] },
            hi: { q: "प्लास्टर ऑफ पेरिस (Plaster of Paris) का रासायनिक सूत्र क्या है?", opts: ["CaSO4 * 2H2O", "CaSO4 * (1/2)H2O", "CaCO3", "CaO"] },
            correct: 1
        },
        {
            en: { q: "Which gland in the human body is known as the 'Master Gland'?", opts: ["Thyroid Gland", "Pituitary Gland", "Adrenal Gland", "Pancreas"] },
            hi: { q: "मानव शरीर की किस ग्रंथि को 'मास्टर ग्रंथि' (Master Gland) कहा जाता है?", opts: ["थायराइड ग्रंथि", "पिट्यूटरी ग्रंथि (Pituitary Gland)", "एड्रिनल ग्रंथि", "अग्न्याशय"] },
            correct: 1
        },
        {
            en: { q: "The process of rust formation on iron is called:", opts: ["Oxidation", "Reduction", "Fractional Distillation", "Sublimation"] },
            hi: { q: "लोहे पर जंग लगने की प्रक्रिया क्या कहलाती है?", opts: ["ऑक्सीकरण (Oxidation)", "अपचयन", "प्रभाजी आसवन", "ऊर्ध्वपातन"] },
            correct: 0
        },

        // --- Computer Knowledge ---
        {
            en: { q: "Which network protocol is used to assign IP addresses automatically to devices on a network?", opts: ["DHCP", "DNS", "FTP", "SMTP"] },
            hi: { q: "नेटवर्क पर उपकरणों को स्वचालित रूप से आईपी एड्रेस असाइन करने के लिए किस नेटवर्क प्रोटोकॉल का उपयोग किया जाता है?", opts: ["DHCP", "DNS", "FTP", "SMTP"] },
            correct: 0
        },
        {
            en: { q: "What type of cryptographic system uses a public key and a private key pair?", opts: ["Symmetric Encryption", "Asymmetric Encryption", "Hashing", "Obfuscation"] },
            hi: { q: "किस प्रकार की क्रिप्टोग्राफिक प्रणाली एक सार्वजनिक कुंजी (Public key) और एक निजी कुंजी (Private key) युग्म का उपयोग करती है?", opts: ["सममित एन्क्रिप्शन", "असममित एन्क्रिप्शन (Asymmetric Encryption)", "हैशिंग", "ऑब्फ्यूजेशन"] },
            correct: 1
        },
        {
            en: { q: "In Microsoft Excel, what keyboard shortcut is used to insert the current date?", opts: ["Ctrl + ;", "Ctrl + Shift + :", "Ctrl + D", "Alt + D"] },
            hi: { q: "माइक्रोसॉफ्ट एक्सेल (MS Excel) में, वर्तमान तिथि डालने के लिए किस कीबोर्ड शॉर्टकट का उपयोग किया जाता है?", opts: ["Ctrl + ;", "Ctrl + Shift + :", "Ctrl + D", "Alt + D"] },
            correct: 0
        },
        {
            en: { q: "What is the full form of 'SATA' in computer storage hard drive interfaces?", opts: ["Serial Advanced Technology Attachment", "System Automated Technical Architecture", "Sequential Advanced Transfer Array", "Synchronous Auxiliary Technology Array"] },
            hi: { q: "कंप्यूटर स्टोरेज हार्ड ड्राइव इंटरफेस में 'SATA' का पूर्ण रूप क्या है?", opts: ["सीरियल एडवांस्ड टेक्नोलॉजी अटैचमेंट (Serial Advanced Technology Attachment)", "सिस्टम ऑटोमेटेड टेक्निकल आर्किटेक्चर", "सीक्वेंशियल एडवांस्ड ट्रांसफर एरे", "सिंक्रोनस ऑक्सिलरी टेक्नोलॉजी एरे"] },
            correct: 0
        },
        {
            en: { q: "Which system utility program optimizes hard disk performance by reordering files into contiguous memory blocks?", opts: ["Disk Defragmenter", "Antivirus Cleaner", "Task Manager", "Registry Editor"] },
            hi: { q: "कौन सा सिस्टम यूटिलिटी प्रोग्राम फाइलों को सन्निहित मेमोरी ब्लॉकों में पुनर्व्यवस्थित करके हार्ड डिस्क के प्रदर्शन को अनुकूलित करता है?", opts: ["डिस्क डीफ़्रेग्मेंटर (Disk Defragmenter)", "एंटीवायरस क्लीनर", "टास्क मैनेजर", "रजिस्ट्री एडिटर"] },
            correct: 0
        },

        // --- Mixed Core Topics ---
        {
            en: { q: "If a person sells an item for ₹450 making a loss of 10%, what was its cost price?", opts: ["₹500", "₹480", "₹520", "₹490"] },
            hi: { q: "यदि कोई व्यक्ति किसी वस्तु को ₹450 में बेचकर 10% की हानि उठाता है, तो उसका क्रय मूल्य क्या था?", opts: ["₹500", "₹480", "₹520", "₹490"] },
            correct: 0
        },
        {
            en: { q: "If 'MONKO' is coded as '57632', then how is 'KLMN' coded in that system?", opts: ["3245", "2345", "2354", "3254"] },
            hi: { q: "यदि 'MONKO' को '57632' कूटबद्ध किया जाता है, तो उस प्रणाली में 'KLMN' को कैसे कूटबद्ध किया जाएगा?", opts: ["3245", "2345", "2354", "3254"] },
            correct: 1
        },
        {
            en: { q: "A sum of ₹12,000 deposited at compound interest becomes double after 5 years. After 20 years, it will become:", opts: ["₹1,92,000", "₹96,000", "₹1,20,000", "₹2,40,000"] },
            hi: { q: "चक्रवृद्धि ब्याज पर जमा की गई ₹12,000 की राशि 5 वर्षों में दोगुनी हो जाती है। 20 वर्षों के बाद, यह कितनी हो जाएगी?", opts: ["₹1,92,000", "₹96,000", "₹1,20,000", "₹2,40,000"] },
            correct: 0
        },
        {
            en: { q: "A boy runs 5 km East, turns Right and runs 12 km. What is the shortest distance back to his starting location?", opts: ["13 km", "17 km", "7 km", "15 km"] },
            hi: { q: "एक लड़का 5 किमी पूर्व की ओर दौड़ता है, दाईं ओर मुड़ता है और 12 किमी दौड़ता है। उसके प्रारंभिक स्थान पर वापस जाने की न्यूनतम दूरी क्या है?", opts: ["13 किमी", "17 किमी", "7 किमी", "15 किमी"] },
            correct: 0
        },
        {
            en: { q: "Find the volume of a sphere whose radius is 3 cm.", opts: ["36*pi cubic cm", "12*pi cubic cm", "18*pi cubic cm", "27*pi cubic cm"] },
            hi: { q: "एक गोले (Sphere) का आयतन ज्ञात कीजिए जिसकी त्रिज्या 3 सेमी है।", opts: ["36*pi घन सेमी", "12*pi घन सेमी", "18*pi घन सेमी", "27*pi घन सेमी"] },
            correct: 0
        },
        {
            en: { q: "Which pigment gives green color to plant leaves?", opts: ["Chlorophyll", "Carotenoid", "Anthocyanin", "Hemoglobin"] },
            hi: { q: "कौन सा पिगमेंट (वर्णक) पौधों की पत्तियों को हरा रंग प्रदान करता है?", opts: ["क्लोरोफिल (Chlorophyll)", "कैरोटीनॉयड", "एंथोसायनिन", "हीमोग्लोबिन"] },
            correct: 0
        },
        {
            en: { q: "What is the primary gas found in natural gas composition?", opts: ["Methane", "Ethane", "Propane", "Butane"] },
            hi: { q: "प्राकृतिक गैस (Natural gas) के संगठन में मुख्य रूप से कौन सी गैस पाई जाती है?", opts: ["मीथेन (Methane)", "इथेन", "प्रोपेन", "ब्यूटेन"] },
            correct: 0
        },
        {
            en: { q: "If the height of a cylinder is doubled and radius remains same, its curved surface area increases by what percent?", opts: ["50%", "100%", "200%", "No change"] },
            hi: { q: "यदि किसी बेलन की ऊंचाई दोगुनी कर दी जाए और त्रिज्या समान रहे, तो उसके वक्र पृष्ठीय क्षेत्रफल में कितने प्रतिशत की वृद्धि होगी?", opts: ["50%", "100%", "200%", "कोई परिवर्तन नहीं"] },
            correct: 1
        },
        {
            en: { q: "Who was the founder of the Brahmo Samaj in India?", opts: ["Raja Ram Mohan Roy", "Swami Vivekananda", "Dayanand Saraswati", "Ishwar Chandra Vidyasagar"] },
            hi: { q: "भारत में ब्रह्म समाज के संस्थापक कौन थे?", opts: ["राजा राम मोहन राय (Raja Ram Mohan Roy)", "स्वामी विवेकानंद", "दयानंद सरस्वती", "ईश्वर चंद्र विद्यासागर"] },
            correct: 0
        },
        {
            en: { q: "Which classical dance form originates from the state of Kerala?", opts: ["Kathakali", "Bharatanatyam", "Kathak", "Kuchipudi"] },
            hi: { q: "कौन सा शास्त्रीय नृत्य रूप केरल राज्य से उत्पन्न हुआ है?", opts: ["कथकली (Kathakali)", "भरतनाट्यम", "कथक", "कुचिपुड़ी"] },
            correct: 0
        },
        // --- Quantitative Aptitude (Set 10) ---
        {
            en: { q: "If the radius of a circle is increased by 20%, then find the percentage increase in its area.", opts: ["40%", "44%", "20%", "36%"] },
            hi: { q: "यदि एक वृत्त की त्रिज्या में 20% की वृद्धि की जाती है, तो उसके क्षेत्रफल में प्रतिशत वृद्धि ज्ञात कीजिए।", opts: ["40%", "44%", "20%", "36%"] },
            correct: 1
        },
        {
            en: { q: "A train 240 m long passes a pole in 24 seconds. How long will it take to pass a platform 650 m long?", opts: ["65 seconds", "89 seconds", "50 seconds", "74 seconds"] },
            hi: { q: "240 मीटर लंबी एक ट्रेन एक खंभे को 24 सेकंड में पार करती है। 650 मीटर लंबे प्लेटफॉर्म को पार करने में इसे कितना समय लगेगा?", opts: ["65 सेकंड", "89 सेकंड", "50 सेकंड", "74 सेकंड"] },
            correct: 1
        },
        {
            en: { q: "Find the compound interest on ₹16,000 for 9 months at 20% per annum, interest being compounded quarterly.", opts: ["₹2,522", "₹2,420", "₹2,315", "₹2,600"] },
            hi: { q: "₹16,000 पर 9 महीने के लिए 20% वार्षिक दर से चक्रवृद्धि ब्याज ज्ञात कीजिए, जबकि ब्याज त्रैमासिक (Quarterly) रूप से संयोजित होता है।", opts: ["₹2,522", "₹2,420", "₹2,315", "₹2,600"] },
            correct: 0
        },
        {
            en: { q: "If a:b = 3:4 and b:c = 8:9, then find a:b:c.", opts: ["3:4:9", "6:8:9", "3:8:9", "6:8:12"] },
            hi: { q: "यदि a:b = 3:4 और b:c = 8:9 है, तो a:b:c ज्ञात कीजिए।", opts: ["3:4:9", "6:8:9", "3:8:9", "6:8:12"] },
            correct: 1
        },
        {
            en: { q: "If x - 1/x = 5, then find the value of x^2 + 1/x^2.", opts: ["23", "27", "25", "29"] },
            hi: { q: "यदि x - 1/x = 5 है, तो x^2 + 1/x^2 का मान ज्ञात कीजिए।", opts: ["23", "27", "25", "29"] },
            correct: 1
        },
        {
            en: { q: "In what ratio must water be mixed with milk to gain 16(2/3)% on selling the mixture at cost price?", opts: ["1:6", "6:1", "2:3", "4:3"] },
            hi: { q: "मिश्रण को क्रय मूल्य पर बेचने पर 16(2/3)% का लाभ प्राप्त करने के लिए दूध में पानी को किस अनुपात में मिलाया जाना चाहिए?", opts: ["1:6", "6:1", "2:3", "4:3"] },
            correct: 0
        },
        {
            en: { q: "The diagonal of a square is 4*sqrt(2) cm. Find the diagonal of another square whose area is double that of the first square.", opts: ["8 cm", "8*sqrt(2) cm", "4*sqrt(3) cm", "16 cm"] },
            hi: { q: "एक वर्ग का विकर्ण 4*sqrt(2) सेमी है। एक अन्य वर्ग का विकर्ण ज्ञात कीजिए जिसका क्षेत्रफल पहले वर्ग के क्षेत्रफल का दोगुना है।", opts: ["8 सेमी", "8*sqrt(2) सेमी", "4*sqrt(3) सेमी", "16 सेमी"] },
            correct: 0
        },
        {
            en: { q: "Find the volume of a right circular cone of height 12 cm and base radius 3.5 cm.", opts: ["154 cubic cm", "308 cubic cm", "77 cubic cm", "462 cubic cm"] },
            hi: { q: "12 सेमी ऊंचाई और 3.5 सेमी आधार त्रिज्या वाले एक लंब वृत्तीय शंकु का आयतन ज्ञात कीजिए।", opts: ["154 घन सेमी", "308 घन सेमी", "77 घन सेमी", "462 घन सेमी"] },
            correct: 0
        },
        {
            en: { q: "A sum of money amounts to ₹6690 after 3 years and to ₹10035 after 6 years on compound interest. Find the sum.", opts: ["₹4460", "₹4400", "₹4500", "₹4360"] },
            hi: { q: "कोई धनराशि चक्रवृद्धि ब्याज पर 3 वर्षों के बाद ₹6690 और 6 वर्षों के बाद ₹10035 हो जाती है। वह राशि ज्ञात कीजिए।", opts: ["₹4460", "₹4400", "₹4500", "₹4360"] },
            correct: 0
        },
        {
            en: { q: "From a point 20m away from the foot of a tower, the angle of elevation of the top of the tower is 60°. Find the height of the tower.", opts: ["20*sqrt(3) m", "20/sqrt(3) m", "40 m", "10*sqrt(3) m"] },
            hi: { q: "एक मीनार के पाद से 20 मीटर दूर एक बिंदु से, मीनार के शिखर का उन्नयन कोण 60° है। मीनार की ऊंचाई ज्ञात कीजिए।", opts: ["20*sqrt(3) मीटर", "20/sqrt(3) मीटर", "40 मीटर", "10*sqrt(3) मीटर"] },
            correct: 0
        },

        // --- Reasoning Ability (Set 10) ---
        {
            en: { q: "If 'COULD' is written as 'BNTKC' and 'MARGIN' is written as 'LZQFHM', how will 'MOULDING' be written?", opts: ["LNTKCHMF", "LNKTCHMF", "LNTKCMHF", "LNTKCHFM"] },
            hi: { q: "यदि 'COULD' को 'BNTKC' और 'MARGIN' को 'LZQFHM' लिखा जाता है, तो 'MOULDING' को कैसे लिखा जाएगा?", opts: ["LNTKCHMF", "LNKTCHMF", "LNTKCMHF", "LNTKCHFM"] },
            correct: 0
        },
        {
            en: { q: "Find the missing number in the series: 3, 12, 48, 192, ?", opts: ["768", "576", "960", "684"] },
            hi: { q: "श्रृंखला में लुप्त संख्या ज्ञात कीजिए: 3, 12, 48, 192, ?", opts: ["768", "576", "960", "684"] },
            correct: 0
        },
        {
            en: { q: "Statements: All papers are books. All bags are books. Conclusions: I. Some papers are bags. II. Some books are papers.", opts: ["Only I follows", "Only II follows", "Neither I nor II follows", "Both I and II follow"] },
            hi: { q: "कथन: सभी कागज किताबें हैं। सभी बैग किताबें हैं। निष्कर्ष: I. कुछ कागज बैग हैं। II. कुछ किताबें कागज हैं।", opts: ["केवल I अनुसरण करता है", "केवल II अनुसरण करता है", "न तो I और न ही II अनुसरण करता है", "I और II दोनों अनुसरण करते हैं"] },
            correct: 1
        },
        {
            en: { q: "A man walks 30 metres South, then turns to his right and walks 30 metres, then turns to his left and walks 20 metres, again turns to his left and walks 30 metres. How far is he from his starting point?", opts: ["50 m", "60 m", "30 m", "80 m"] },
            hi: { q: "एक व्यक्ति 30 मीटर दक्षिण की ओर चलता है, फिर अपने दाईं ओर मुड़कर 30 मीटर चलता है, फिर अपने बाईं ओर मुड़कर 20 मीटर चलता है, फिर से अपने बाईं ओर मुड़कर 30 मीटर चलता है। वह अपने प्रारंभिक बिंदु से कितनी दूर है?", opts: ["50 मीटर", "60 मीटर", "30 मीटर", "80 मीटर"] },
            correct: 0
        },
        {
            en: { q: "Looking at a portrait of a man, Harsh said, 'His mother is the wife of my father's son. Brothers and sisters I have none.' At whose portrait was Harsh looking?", opts: ["His son", "His cousin", "His uncle", "His nephew"] },
            hi: { q: "एक व्यक्ति के चित्र को देखते हुए हर्ष ने कहा, 'उनकी माँ मेरे पिता के पुत्र की पत्नी हैं। मेरा कोई भाई या बहन नहीं है।' हर्ष किसका चित्र देख रहा था?", opts: ["अपने बेटे का (His son)", "अपने चचेरे भाई का", "अपने चाचा का", "अपने भतीजे का"] },
            correct: 0
        },
        {
            en: { q: "Six friends P, Q, R, S, T and U are sitting around a circular table facing the center. R is between P and T. In addition, U is between Q and S, and V is not part of group. If T is to the immediate left of S, who is opposite to P?", opts: ["Q", "S", "T", "U"] },
            hi: { q: "छह मित्र P, Q, R, S, T और U एक वृत्ताकार मेज के चारों ओर केंद्र की ओर मुख करके बैठे हैं। R, P और T के बीच में है। इसके अतिरिक्त, U, Q और S के बीच में है। यदि T, S के ठीक बाईं ओर है, तो P के विपरीत कौन बैठा है?", opts: ["Q", "S", "T", "U"] },
            correct: 1
        },
        {
            en: { q: "If '+' means '*', '-' means '/', '*' means '+' and '/' means '-', then evaluate: 8 + 4 - 2 / 5 * 3", opts: ["14", "15", "12", "16"] },
            hi: { q: "यदि '+' का अर्थ '*', '-' का अर्थ '/', '*' का अर्थ '+' और '/' का अर्थ '-' है, तो मान ज्ञात कीजिए: 8 + 4 - 2 / 5 * 3", opts: ["14", "15", "12", "16"] },
            correct: 0
        },
        {
            en: { q: "Choose the word which is different from the rest.", opts: ["Rigveda", "Yajurveda", "Atharvaveda", "Ayurveda"] },
            hi: { q: "उस शब्द को चुनें जो बाकी शब्दों से भिन्न है।", opts: ["ऋग्वेद", "यजुर्वेद", "अथर्ववेद", "आयुर्वेद (Ayurveda - It is a branch of medicine)"] },
            correct: 3
        },
        {
            en: { q: "In a class of 35 students, Kunal is placed 7th from the bottom whereas Sonali is placed 9th from the top. How many students are there between them?", opts: ["19", "18", "17", "20"] },
            hi: { q: "35 छात्रों की एक कक्षा में, कुणाल को नीचे से 7वां स्थान मिला है जबकि सोनाली को ऊपर से 9वां स्थान मिला है। उनके बीच कुल कितने छात्र हैं?", opts: ["19", "18", "17", "20"] },
            correct: 0
        },
        {
            en: { q: "If October 25 is Saturday, then find the number of Mondays in that month.", opts: ["3", "4", "5", "6"] },
            hi: { q: "यदि 25 अक्टूबर को शनिवार है, तो उस महीने में सोमवारों (Mondays) की संख्या ज्ञात कीजिए।", opts: ["3", "4", "5", "6"] },
            correct: 1
        },

        // --- General Awareness & Railway Knowledge (Set 10) ---
        {
            en: { q: "Which railway station is India's first fully solar-powered station under the Guwahati zone?", opts: ["Guwahati Railway Station", "Kamakhya Railway Station", "Lumding", "Silchar"] },
            hi: { q: "गुवाहाटी ज़ोन के अंतर्गत भारत का पहला पूर्ण रूप से सौर ऊर्जा संचालित रेलवे स्टेशन कौन सा है?", opts: ["गुवाहाटी रेलवे स्टेशन (Guwahati Railway Station)", "कामाख्या रेलवे स्टेशन", "लुमडिंग", "सिलचर"] },
            correct: 0
        },
        {
            en: { q: "Where is the Indian Railways Institute of Electrical Engineering (IRIEEN) located?", opts: ["Nasik", "Pune", "Secunderabad", "Vadodara"] },
            hi: { q: "भारतीय रेलवे विद्युत इंजीनियरिंग संस्थान (IRIEEN) कहाँ स्थित है?", opts: ["नासिक (Nasik)", "पुणे", "सिकंदराबाद", "वडोदरा"] },
            correct: 0
        },
        {
            en: { q: "What is the name of the central web portal of Indian Railways used by staff for HR management, leaves, and salary slips?", opts: ["HRMS", "AIMS", "IPAS", "Umid"] },
            hi: { q: "कर्मचारियों द्वारा मानव संसाधन प्रबंधन, छुट्टी और वेतन पर्ची के लिए उपयोग किए जाने वाले भारतीय रेलवे के केंद्रीय वेब पोर्टल का नाम क्या है?", opts: ["HRMS (Human Resource Management System)", "AIMS", "IPAS", "Umid"] },
            correct: 0
        },
        {
            en: { q: "In which city is the West Central Railway zone headquartered?", opts: ["Jabalpur", "Bhopal", "Indore", "Kota"] },
            hi: { q: "पश्चिम मध्य रेलवे (West Central Railway) ज़ोन का मुख्यालय किस शहर में स्थित है?", opts: ["जबलपुर (Jabalpur)", "भोपाल", "इंदौर", "कोटा"] },
            correct: 0
        },
        {
            en: { q: "Which year saw the introduction of the first Rajdhani Express train in India (running between New Delhi and Howrah)?", opts: ["1969", "1971", "1965", "1975"] },
            hi: { q: "भारत में पहली राजधानी एक्सप्रेस ट्रेन (नई दिल्ली और हावड़ा के बीच) की शुरुआत किस वर्ष हुई थी?", opts: ["1969", "1971", "1965", "1975"] },
            correct: 0
        },
        {
            en: { q: "Which standard class token key is issued to loco pilots to strictly enter into single-line token block territories?", opts: ["Neale's Ball Token", "Paper Ticket Line", "Tablet Block", "Metal Ring Key"] },
            hi: { q: "लोको पायलटों को सिंगल-लाइन टोकन ब्लॉक क्षेत्रों में प्रवेश करने के लिए कौन सा मानक टोकन जारी किया जाता है?", opts: ["नील्स बॉल टोकन (Neale's Ball Token)", "पेपर टिकट लाइन", "टैबलेट ब्लॉक", "मेटल रिंग की"] },
            correct: 0
        },
        {
            en: { q: "The computerized tracking architecture platform integrated to monitor global assets of containers is managed by:", opts: ["CONCOR", "CRIS", "FOIS", "RLDA"] },
            hi: { q: "कंटेनरों की वैश्विक संपत्तियों की निगरानी के लिए एकीकृत कम्प्यूटरीकृत ट्रैकिंग आर्किटेक्चर प्लेटफॉर्म किसके द्वारा प्रबंधित किया जाता है?", opts: ["CONCOR", "CRIS", "FOIS", "RLDA"] },
            correct: 0
        },
        {
            en: { q: "Which train holds the record for being the first semi-high speed fully indigenous train set of India?", opts: ["Vande Bharat Express", "Tejas Express", "Gatimaan Express", "Shatabdi Express"] },
            hi: { q: "भारत का पहला सेमी-हाई स्पीड पूर्णतः स्वदेशी ट्रेन सेट होने का रिकॉर्ड किस ट्रेन के नाम है?", opts: ["वंदे भारत एक्सप्रेस (Vande Bharat Express / Train 18)", "तेजस एक्सप्रेस", "गतिमान एक्सप्रेस", "शताब्दी एक्सप्रेस"] },
            correct: 0
        },
        {
            en: { q: "What is the standard width distance of the Meter Gauge track configuration in world railways?", opts: ["1.000 m", "1.435 m", "1.676 m", "0.762 m"] },
            hi: { q: "विश्व रेलवे में मीटर गेज (Meter Gauge) ट्रैक कॉन्फ़िगरेशन की मानक चौड़ाई दूरी कितनी होती है?", opts: ["1.000 मीटर", "1.435 मीटर", "1.676 मीटर", "0.762 मीटर"] },
            correct: 0
        },
        {
            en: { q: "Which operational railway route is famously inscribed as a UNESCO World Heritage Site under Mountain Railways of India?", opts: ["Kalka-Shimla Railway", "Konkan Railway", "Kashmir Valley Railway", "Malshej Ghat Track"] },
            hi: { q: "भारत की माउंटेन रेलवे के तहत किस चालू रेलवे मार्ग को यूनेस्को (UNESCO) की विश्व धरोहर स्थल के रूप में अंकित किया गया है?", opts: ["कालका-शिमला रेलवे (Kalka-Shimla Railway)", "कोंकण रेलवे", "कश्मीर घाटी रेलवे", "मालशेज घाट ट्रैक"] },
            correct: 0
        },

        // --- General Science ---
        {
            en: { q: "What is the unit of measure for electrical resistance?", opts: ["Ohm", "Volt", "Ampere", "Watt"] },
            hi: { q: "विद्युत प्रतिरोध (Electrical resistance) को मापने की इकाई क्या है?", opts: ["ओम (Ohm)", "वोल्ट", "एम्पीयर", "वाट"] },
            correct: 0
        },
        {
            en: { q: "Which chemical acid is prominently found in vinegar solutions?", opts: ["Acetic Acid", "Formic Acid", "Citric Acid", "Malic Acid"] },
            hi: { q: "सिरका (Vinegar) के घोल में मुख्य रूप से कौन सा रासायनिक अम्ल पाया जाता है?", opts: ["एसिटिक अम्ल (Acetic Acid)", "फॉर्मिक अम्ल", "साइट्रिक अम्ल", "मैलिक अम्ल"] },
            correct: 0
        },
        {
            en: { q: "What is the scientific chemical name of Quicklime?", opts: ["Calcium Oxide", "Calcium Carbonate", "Calcium Hydroxide", "Calcium Sulphate"] },
            hi: { q: "बिना बुझे चूने (Quicklime) का वैज्ञानिक रासायनिक नाम क्या है?", opts: ["कैल्शियम ऑक्साइड (Calcium Oxide)", "कैल्शियम कार्बोनेट", "कैल्शियम हाइड्रोक्साइड", "कैल्शियम सल्फेट"] },
            correct: 0
        },
        {
            en: { q: "Which component of blood is primarily responsible for blood clotting at injury sites?", opts: ["Platelets", "RBC", "WBC", "Plasma"] },
            hi: { q: "चोट लगने वाले स्थानों पर रक्त का थक्का जमाने (Blood clotting) के लिए मुख्य रूप से रक्त का कौन सा घटक जिम्मेदार है?", opts: ["प्लेटलेट्स (Platelets / Thrombocytes)", "आरबीसी (RBC)", "डब्ल्यूबीसी (WBC)", "प्लाज्मा"] },
            correct: 0
        },
        {
            en: { q: "The absolute zero temperature value on the Celsius thermodynamic scale is evaluated as:", opts: ["-273.15°C", "0°C", "-100°C", "-300°C"] },
            hi: { q: "सैलिसियस थर्मोडायनामिक स्केल पर परम शून्य तापमान (Absolute zero temperature) का मान कितना होता है?", opts: ["-273.15°C", "0°C", "-100°C", "-300°C"] },
            correct: 0
        },

        // --- Computer Knowledge ---
        {
            en: { q: "Which network communication protocol ensures reliable end-to-end data packet delivery?", opts: ["TCP", "UDP", "IP", "ICMP"] },
            hi: { q: "कौन सा नेटवर्क संचार प्रोटोकॉल विश्वसनीय एंड-टू-एंड डेटा पैकेट डिलीवरी सुनिश्चित करता है?", opts: ["TCP (Transmission Control Protocol)", "UDP", "IP", "ICMP"] },
            correct: 0
        },
        {
            en: { q: "What type of attack vector uses deceptive emails to trick users into revealing sensitive credentials?", opts: ["Phishing", "Ransomware", "DDoS", "Spyware"] },
            hi: { q: "संवेदनशील क्रेडेंशियल प्रकट करने के लिए उपयोगकर्ताओं को धोखा देने के लिए किस प्रकार के हमला वेक्टर (Attack vector) भ्रामक ईमेल का उपयोग करते हैं?", opts: ["फ़िशिंग (Phishing)", "रैनसमवेयर", "DDoS", "स्पाइवेयर"] },
            correct: 0
        },
        {
            en: { q: "In Microsoft Windows systems, which utility allows users to view active programs and CPU metrics?", opts: ["Task Manager", "Control Panel", "Device Manager", "Disk Management"] },
            hi: { q: "माइक्रोसॉफ्ट विंडोज सिस्टम में, कौन सी यूटिलिटी उपयोगकर्ताओं को सक्रिय प्रोग्राम और सीपीयू मेट्रिक्स देखने की अनुमति देती है?", opts: ["टास्क मैनेजर (Task Manager)", "कंट्रोल पैनल", "डिवाइस मैनेजर", "डिस्क मैनेजमेंट"] },
            correct: 0
        },
        {
            en: { q: "What is the full form of 'HDMI' ports in computer multimedia displays?", opts: ["High-Definition Multimedia Interface", "High-Density Media Insertion", "Hyper-Digital Management Interface", "Highly-Detailed Media Interface"] },
            hi: { q: "कंप्यूटर मल्टीमीडिया डिस्प्ले में 'HDMI' पोर्ट का पूर्ण रूप क्या है?", opts: ["हाई-डेफिनिशन मल्टीमीडिया इंटरफेस (High-Definition Multimedia Interface)", "हाई-डेंसिटी मीडिया इंसर्शन", "हाइपर-डिजिटल मैनेजमेंट इंटरफेस", "हाइली-डिटेल्ड मीडिया इंटरफेस"] },
            correct: 0
        },
        {
            en: { q: "Which fundamental element inside an operating system interacts directly with the computer system hardware components?", opts: ["Kernel", "Shell", "Compiler", "File Explorer"] },
            hi: { q: "ऑपरेटिंग सिस्टम के अंदर कौन सा मौलिक तत्व कंप्यूटर सिस्टम के हार्डवेयर घटकों के साथ सीधे इंटरैक्ट करता है?", opts: ["कर्नेल (Kernel)", "शेल", "कंपाइलर", "फाइल एक्सप्लोरर"] },
            correct: 0
        },

        // --- Mixed Core Topics ---
        {
            en: { q: "By selling a watch for ₹1440, a man loses 10%. At what price must he sell it to gain 10%?", opts: ["₹1760", "₹1600", "₹1650", "₹1800"] },
            hi: { q: "एक घड़ी को ₹1440 में बेचने पर एक व्यक्ति को 10% की हानि होती है। 10% का लाभ प्राप्त करने के लिए उसे इसे किस मूल्य पर बेचना चाहिए?", opts: ["₹1760", "₹1600", "₹1650", "₹1800"] },
            correct: 0
        },
        {
            en: { q: "If 'STOVE' is coded as 'EVOTS', then how is 'CANDLE' coded in that system?", opts: ["ELDNAC", "ELDANC", "ELDNCA", "EDLNAC"] },
            hi: { q: "यदि 'STOVE' को 'EVOTS' के रूप में कूटबद्ध किया जाता है, तो उस प्रणाली में 'CANDLE' को कैसे कूटबद्ध किया जाएगा?", opts: ["ELDNAC", "ELDANC", "ELDNCA", "EDLNAC"] },
            correct: 0
        },
        {
            en: { q: "The difference between simple interest and compound interest at 10% per annum for 3 years on a certain sum is ₹31. Find the sum.", opts: ["₹1000", "₹2000", "₹1500", "₹1200"] },
            hi: { q: "एक निश्चित राशि पर 3 वर्ष के लिए 10% वार्षिक दर से साधारण ब्याज और चक्रवृद्धि ब्याज का अंतर ₹31 है। वह राशि ज्ञात कीजिए।", opts: ["₹1000", "₹2000", "₹1500", "₹1200"] },
            correct: 0
        },
        {
            en: { q: "A man runs 8 km towards South, then turns Left and runs 6 km. Find his direct distance from the initial point.", opts: ["10 km", "14 km", "2 km", "12 km"] },
            hi: { q: "एक व्यक्ति 8 किमी दक्षिण की ओर दौड़ता है, फिर बाईं ओर मुड़कर 6 किमी दौड़ता है। प्रारंभिक बिंदु से उसकी सीधी दूरी ज्ञात कीजिए।", opts: ["10 किमी", "14 किमी", "2 किमी", "12 किमी"] },
            correct: 0
        },
        {
            en: { q: "Find the total surface area of a solid sphere whose radius is 7 cm.", opts: ["616 sq.cm", "154 sq.cm", "308 sq.cm", "462 sq.cm"] },
            hi: { q: "एक ठोस गोले का कुल पृष्ठीय क्षेत्रफल (TSA) ज्ञात कीजिए जिसकी त्रिज्या 7 सेमी है।", opts: ["616 वर्ग सेमी", "154 वर्ग सेमी", "308 वर्ग सेमी", "462 वर्ग सेमी"] },
            correct: 0
        },
        {
            en: { q: "Which cell organelle is famously known as the 'Suicide Bag' of the cell?", opts: ["Lysosome", "Mitochondria", "Golgi Apparatus", "Ribosome"] },
            hi: { q: "किस कोशिका अंगक (Cell organelle) को कोशिका की 'आत्मघाती थैली' (Suicide Bag) के रूप में जाना जाता है?", opts: ["लाइसोसोम (Lysosome)", "माइटोकॉन्ड्रिया", "गोल्गी तंत्र", "राइबोसोम"] },
            correct: 0
        },
        {
            en: { q: "What is the primary organic compound present in Marsh gas?", opts: ["Methane", "Ethane", "Propane", "Acetylene"] },
            hi: { q: "मार्श गैस (Marsh gas) में मुख्य रूप से कौन सा कार्बनिक यौगिक उपस्थित होता है?", opts: ["मीथेन (Methane)", "इथेन", "प्रोपेन", "एसिटिलीन"] },
            correct: 0
        },
        {
            en: { q: "If the radius of a cylinder is doubled and height is halved, find the ratio of its new volume to original volume.", opts: ["2:1", "1:2", "4:1", "1:1"] },
            hi: { q: "यदि एक बेलन की त्रिज्या दोगुनी कर दी जाए और ऊंचाई आधी कर दी जाए, तो उसके नए आयतन का मूल आयतन से अनुपात ज्ञात कीजिए।", opts: ["2:1", "1:2", "4:1", "1:1"] },
            correct: 0
        },
        {
            en: { q: "Who was the permanent President of the Constituent Assembly of India?", opts: ["Dr. Rajendra Prasad", "Dr. B.R. Ambedkar", "Jawaharlal Nehru", "Sachchidananda Sinha"] },
            hi: { q: "भारत की संविधान सभा के स्थायी अध्यक्ष कौन थे?", opts: ["डॉ. राजेंद्र प्रसाद (Dr. Rajendra Prasad)", "डॉ. बी.आर. अम्बेडकर", "जवाहरलाल नेहरू", "सच्चिदानंद सिन्हा"] },
            correct: 0
        },
        {
            en: { q: "Which Indian state shares the longest international border boundary with Bangladesh?", opts: ["West Bengal", "Assam", "Meghalaya", "Tripura"] },
            hi: { q: "कौन सा भारतीय राज्य बांग्लादेश के साथ सबसे लंबी अंतर्राष्ट्रीय सीमा साझा करता है?", opts: ["पश्चिम बंगाल (West Bengal)", "असम", "मेघालय", "त्रिपुरा"] },
            correct: 0
        },
        // --- Quantitative Aptitude (Set 11) ---
        {
            en: { q: "If the area of a circle is decreased by 36%, then find the percentage decrease in its radius.", opts: ["20%", "18%", "16%", "25%"] },
            hi: { q: "यदि एक वृत्त के क्षेत्रफल में 36% की कमी की जाती है, तो उसकी त्रिज्या में प्रतिशत कमी ज्ञात कीजिए।", opts: ["20%", "18%", "16%", "25%"] },
            correct: 0
        },
        {
            en: { q: "A train moves past a telegraph post and a 264 m long bridge in 8 seconds and 20 seconds respectively. What is the speed of the train?", opts: ["79.2 km/h", "60 km/h", "54 km/h", "66 km/h"] },
            hi: { q: "एक ट्रेन क्रमशः 8 सेकंड और 20 सेकंड में एक टेलीग्राफ पोस्ट और 264 मीटर लंबे पुल को पार करती है। ट्रेन की गति क्या है?", opts: ["79.2 किमी/घंटा", "60 किमी/घंटा", "54 किमी/घंटा", "66 किमी/घंटा"] },
            correct: 0
        },
        {
            en: { q: "Find the compound interest on ₹25,000 for 1 year at 20% per annum, interest being compounded half-yearly.", opts: ["₹5,250", "₹5,000", "₹5,500", "₹5,125"] },
            hi: { q: "₹25,000 पर 1 वर्ष के लिए 20% वार्षिक दर से चक्रवृद्धि ब्याज ज्ञात कीजिए, यदि ब्याज अर्धवार्षिक रूप से संयोजित होता है।", opts: ["₹5,250", "₹5,000", "₹5,500", "₹5,125"] },
            correct: 0
        },
        {
            en: { q: "If x:y = 3:4, find the value of (5x - 2y) / (7x + 3y).", opts: ["7/33", "5/21", "3/14", "1/3"] },
            hi: { q: "यदि x:y = 3:4 है, तो (5x - 2y) / (7x + 3y) का मान ज्ञात कीजिए।", opts: ["7/33", "5/21", "3/14", "1/3"] },
            correct: 0
        },
        {
            en: { q: "If x + 1/x = 5, then find the value of x^4 + 1/x^4.", opts: ["527", "625", "523", "623"] },
            hi: { q: "यदि x + 1/x = 5 है, तो x^4 + 1/x^4 का मान ज्ञात कीजिए।", opts: ["527", "625", "523", "623"] },
            correct: 0
        },
        {
            en: { q: "A mixture contains alcohol and water in the ratio 4:3. If 5 litres of water is added to the mixture, the ratio becomes 4:5. Find the quantity of alcohol in the given mixture.", opts: ["10 litres", "12 litres", "15 litres", "18 litres"] },
            hi: { q: "एक मिश्रण में अल्कोहल और पानी का अनुपात 4:3 है। यदि मिश्रण में 5 लीटर पानी मिलाया जाता है, तो अनुपात 4:5 हो जाता है। दिए गए मिश्रण में अल्कोहल की मात्रा ज्ञात कीजिए।", opts: ["10 लीटर", "12 लीटर", "15 लीटर", "18 लीटर"] },
            correct: 0
        },
        {
            en: { q: "The sides of a triangle are in the ratio 3:4:5 and its perimeter is 144 cm. Find the area of the triangle.", opts: ["864 sq.cm", "432 sq.cm", "576 sq.cm", "720 sq.cm"] },
            hi: { q: "एक त्रिभुज की भुजाएँ 3:4:5 के अनुपात में हैं और इसका परिमाप 144 सेमी है। त्रिभुज का क्षेत्रफल ज्ञात कीजिए।", opts: ["864 वर्ग सेमी", "432 वर्ग सेमी", "576 वर्ग सेमी", "720 वर्ग सेमी"] },
            correct: 0
        },
        {
            en: { q: "A right circular cylinder and a cone have equal bases and equal heights. Find the ratio of their volumes.", opts: ["3:1", "1:3", "9:1", "1:9"] },
            hi: { q: "एक लंब वृत्तीय बेलन और एक शंकु के आधार और ऊँचाई समान हैं। उनके आयतनों का अनुपात ज्ञात कीजिए।", opts: ["3:1", "1:3", "9:1", "1:9"] },
            correct: 0
        },
        {
            en: { q: "A sum of money doubles itself in 4 years at compound interest. In how many years will it become 8 times of itself?", opts: ["12 years", "16 years", "8 years", "24 years"] },
            hi: { q: "कोई राशि चक्रवृद्धि ब्याज पर 4 वर्षों में दोगुनी हो जाती है। कितने वर्षों में यह स्वयं की 8 गुनी हो जाएगी?", opts: ["12 वर्ष", "16 वर्ष", "8 वर्ष", "24 वर्ष"] },
            correct: 0
        },
        {
            en: { q: "Two ships are sailing in the sea on the two sides of a lighthouse. The angles of elevation of the top of the lighthouse as observed from the ships are 30° and 45° respectively. If the lighthouse is 100m high, find the distance between the two ships.", opts: ["100*(sqrt(3) + 1) m", "100*(sqrt(3) - 1) m", "200*sqrt(3) m", "150 m"] },
            hi: { q: "एक लाइटहाउस के दोनों ओर समुद्र में दो जहाज चल रहे हैं। जहाजों से लाइटहाउस के शिखर के उन्नयन कोण क्रमशः 30° और 45° देखे जाते हैं। यदि लाइटहाउस 100 मीटर ऊँचा है, तो दोनों जहाजों के बीच की दूरी ज्ञात कीजिए।", opts: ["100*(sqrt(3) + 1) मीटर", "100*(sqrt(3) - 1) मीटर", "200*sqrt(3) मीटर", "150 मीटर"] },
            correct: 0
        },

        // --- Reasoning Ability (Set 11) ---
        {
            en: { q: "In a certain code, 'MONKEY' is written as 'XDJMNL'. How is 'TIGER' written in that code?", opts: ["QDFHS", "SDFHS", "QDHFS", "QDFHR"] },
            hi: { q: "एक निश्चित कूट में, 'MONKEY' को 'XDJMNL' लिखा जाता है। उसी कूट में 'TIGER' कैसे लिखा जाएगा?", opts: ["QDFHS", "SDFHS", "QDHFS", "QDFHR"] },
            correct: 0
        },
        {
            en: { q: "Complete the alphanumeric series: Z1A, X2D, V6G, T24J, ?", opts: ["R120M", "R120N", "S120M", "S24K"] },
            hi: { q: "अक्षरांक श्रृंखला (Alphanumeric series) को पूरा करें: Z1A, X2D, V6G, T24J, ?", opts: ["R120M", "R120N", "S120M", "S24K"] },
            correct: 0
        },
        {
            en: { q: "Statements: All cars are cats. All fans are cats. Conclusions: I. All cars are fans. II. Some cats are cars.", opts: ["Only II follows", "Only I follows", "Neither I nor II follows", "Both I and II follow"] },
            hi: { q: "कथन: सभी कार बिल्लियाँ हैं। सभी पंखे बिल्लियाँ हैं। निष्कर्ष: I. सभी कार पंखे हैं। II. कुछ बिल्लियाँ कार हैं।", opts: ["केवल II अनुसरण करता है", "केवल I अनुसरण करता है", "न तो I और न ही II अनुसरण करता है", "I और II दोनों अनुसरण करते हैं"] },
            correct: 0
        },
        {
            en: { q: "A person starts from a point and walks 4 km North, then turns Right and walks 3 km. How far and in which direction is he now from his starting point?", opts: ["5 km, North-East", "5 km, South-West", "7 km, North", "7 km, East"] },
            hi: { q: "एक व्यक्ति एक बिंदु से शुरू करता है और 4 किमी उत्तर की ओर चलता है, फिर दाईं ओर मुड़कर 3 किमी चलता है। अब वह अपने प्रारंभिक बिंदु से कितनी दूर और किस दिशा में है?", opts: ["5 किमी, उत्तर-पूर्व", "5 किमी, दक्षिण-पश्चिम", "7 किमी, उत्तर", "7 किमी, पूर्व"] },
            correct: 0
        },
        {
            en: { q: "Pointing to a man, a woman said, 'His mother is the only daughter of my mother.' How is the woman related to the man?", opts: ["Mother", "Daughter", "Sister", "Grandmother"] },
            hi: { q: "एक आदमी की ओर इशारा करते हुए एक महिला ने कहा, 'उनकी माँ मेरी माँ की इकलौती बेटी हैं।' महिला का उस आदमी से क्या संबंध है?", opts: ["माँ (Mother)", "पुत्री", "बहन", "दादी/नानी"] },
            correct: 0
        },
        {
            en: { q: "Six panels A, B, C, D, E and F are arranged in a row facing East. C is between A and E. B is just to the right of E but left of D. F is not at the right end. Who is at the left end?", opts: ["F", "A", "C", "E"] },
            hi: { q: "छह पैनल A, B, C, D, E और F पूर्व की ओर मुख करके एक पंक्ति में व्यवस्थित हैं। C, A और E के बीच में है। B, E के ठीक दाईं ओर लेकिन D के बाईं ओर है। F दाएं छोर पर नहीं है। बाएं छोर पर कौन है?", opts: ["F", "A", "C", "E"] },
            correct: 0
        },
        {
            en: { q: "If P means 'division', T means 'addition', M means 'subtraction' and D means 'multiplication', then evaluate: 12 T 8 D 4 P 2 M 1", opts: ["27", "26", "28", "30"] },
            hi: { q: "यदि P का अर्थ 'भाग', T का अर्थ 'जोड़', M का अर्थ 'घटाव' और D का अर्थ 'गुणा' है, तो मान ज्ञात कीजिए: 12 T 8 D 4 P 2 M 1", opts: ["27", "26", "28", "30"] },
            correct: 0
        },
        {
            en: { q: "Choose the number pair which is different from others in the group.", opts: ["50-65", "37-50", "26-37", "17-26"] },
            hi: { q: "उस संख्या युग्म को चुनें जो समूह में दूसरों से भिन्न है।", opts: ["50-65 (अंतर 15 है, बाकियों में 13 है)", "37-50", "26-37", "17-26"] },
            correct: 0
        },
        {
            en: { q: "In a class of 60, where girls are twice that of boys, Kamal ranked 17th from the top. If there are 9 girls ahead of Kamal, how many boys are after him in rank?", opts: ["12", "13", "14", "15"] },
            hi: { q: "60 की एक कक्षा में, जहाँ लड़कियाँ लड़कों से दोगुनी हैं, कमल का स्थान ऊपर से 17वाँ है। यदि कमल से आगे 9 लड़कियाँ हैं, तो रैंक में उसके बाद कितने लड़के हैं?", opts: ["12", "13", "14", "15"] },
            correct: 0
        },
        {
            en: { q: "If the first day of a non-leap year is Friday, what will be the last day of that year?", opts: ["Friday", "Saturday", "Thursday", "Sunday"] },
            hi: { q: "यदि किसी गैर-लीप वर्ष (Ordinary year) का पहला दिन शुक्रवार है, तो उस वर्ष का अंतिम दिन क्या होगा?", opts: ["शुक्रवार (Friday)", "शनिवार", "गुरुवार", "रविवार"] },
            correct: 0
        },

        // --- General Awareness & Railway Knowledge (Set 11) ---
        {
            en: { q: "Which railway station has become the first green silent station in India by eliminating public announcements?", opts: ["Chhatrapati Shivaji Maharaj Terminus", "New Delhi Railway Station", "Chennai Central", "Secunderabad Junction"] },
            hi: { q: "सार्वजनिक घोषणाओं (Inquiry Announcements) को समाप्त करके कौन सा रेलवे स्टेशन भारत का पहला ग्रीन साइलेंट स्टेशन बन गया है?", opts: ["छत्रपति शिवाजी महाराज टर्मिनस", "नई दिल्ली रेलवे स्टेशन", "चेन्नई सेंट्रल (MGR Chennai Central)", "सिकंदराबाद जंक्शन"] },
            correct: 2
        },
        {
            en: { q: "Where is the Indian Railways Institute of Advanced Track Technology (IRICEN) located?", opts: ["Pune", "Nasik", "Secunderabad", "Jamalpur"] },
            hi: { q: "भारतीय रेलवे उन्नत ट्रैक प्रौद्योगिकी संस्थान (IRICEN) कहाँ स्थित है?", opts: ["पुणे (Pune)", "नासिक", "सिकंदराबाद", "जमालपुर"] },
            correct: 0
        },
        {
            en: { q: "What does the abbreviation 'RDSO' specify in the engineering division of Ministry of Railways?", opts: ["Research Designs and Standards Organisation", "Railway Development and Safety Office", "Regional Director of Safety Operations", "Rail Division Security Organization"] },
            hi: { q: "रेल मंत्रालय के इंजीनियरिंग डिवीजन में 'RDSO' का पूर्ण रूप क्या निर्दिष्ट करता है?", opts: ["रिसर्च डिज़ाइन एंड स्टैंडर्ड्स ऑर्गनाइजेशन (Research Designs and Standards Organisation)", "रेलवे डेवलपमेंट एंड सेफ्टी ऑफिस", "रीजनल डायरेक्टर ऑफ सेफ्टी ऑपरेशंस", "रेल डिवीज़न सिक्योरिटी ऑर्गनाइजेशन"] },
            correct: 0
        },
        {
            en: { q: "In which city is the North Central Railway zone headquartered?", opts: ["Prayagraj", "Lucknow", "Jhansi", "Agra"] },
            hi: { q: "उत्तर मध्य रेलवे (North Central Railway) ज़ोन का मुख्यालय किस शहर में स्थित है?", opts: ["प्रयागराज (Prayagraj / Allahabad)", "लखनऊ", "झांसी", "आगरा"] },
            correct: 0
        },
        {
            en: { q: "The legendary train 'Frontier Mail' was renamed as which of the following in post-independence India?", opts: ["Golden Temple Mail", "Paschim Express", "Punjab Mail", "Dehradun Express"] },
            hi: { q: "स्वतंत्रता के बाद भारत में प्रसिद्ध ट्रेन 'फ्रंटियर मेल' (Frontier Mail) का नाम बदलकर निम्नलिखित में से क्या रखा गया था?", opts: ["गोल्डन टेम्पल मेल (Golden Temple Mail)", "पश्चिम एक्सप्रेस", "पंजाब मेल", "देहरादून एक्सप्रेस"] },
            correct: 0
        },
        {
            en: { q: "What type of braking system mechanism is heavily incorporated in standard LHB passenger coaches?", opts: ["Disc Braking System", "Tread Brake Unit", "Clasp Brakes", "Vacuum Block"] },
            hi: { q: "मानक LHB यात्री डिब्बों (Coaches) में किस प्रकार की ब्रेकिंग सिस्टम प्रणाली को प्रमुखता से शामिल किया गया है?", opts: ["डिस्क ब्रेकिंग सिस्टम (Disc Braking System)", "ट्रेड ब्रेक यूनिट", "क्लैस्प ब्रेक्स", "वैक्यूम ब्लॉक"] },
            correct: 0
        },
        {
            en: { q: "Which Indian Railways enterprise handles the execution and infrastructure of dedicated freight corridors?", opts: ["DFCCIL", "RITES", "IRCON", "RVNL"] },
            hi: { q: "भारतीय रेलवे का कौन सा उद्यम समर्पित माल ढुलाई गलियारों (Dedicated Freight Corridors) के निष्पादन और बुनियादी ढांचे को संभालता है?", opts: ["DFCCIL", "RITES", "IRCON", "RVNL"] },
            correct: 0
        },
        {
            en: { q: "Which production factory of Indian Railways is located in Raebareli, Uttar Pradesh?", opts: ["Modern Coach Factory", "Integral Coach Factory", "Rail Coach Factory", "Wheel Plant"] },
            hi: { q: "भारतीय रेलवे की कौन सी उत्पादन फैक्ट्री रायबरेली, उत्तर प्रदेश में स्थित है?", opts: ["मॉडर्न कोच फैक्ट्री (Modern Coach Factory - MCF)", "इंटीग्रल कोच फैक्ट्री", "रेल कोच फैक्ट्री", "व्हील प्लांट"] },
            correct: 0
        },
        {
            en: { q: "What is the standard broad gauge configuration width clearance of tracks in Indian Railways?", opts: ["1.676 m", "1.435 m", "1.000 m", "0.762 m"] },
            hi: { q: "भारतीय रेलवे में ब्रॉड गेज (Broad Gauge) ट्रैक कॉन्फ़िगरेशन की मानक चौड़ाई कितनी होती है?", opts: ["1.676 मीटर", "1.435 मीटर", "1.000 मीटर", "0.762 मीटर"] },
            correct: 0
        },
        {
            en: { q: "The historical Matheran Hill Railway falls under the operational jurisdiction of which railway zone?", opts: ["Central Railway", "Western Railway", "Konkan Railway", "South Western Railway"] },
            hi: { q: "ऐतिहासिक माथेरान हिल रेलवे किस रेलवे ज़ोन के परिचालन अधिकार क्षेत्र (Jurisdiction) के अंतर्गत आता है?", opts: ["मध्य रेलवे (Central Railway)", "पश्चिम रेलवे", "कोंकण रेलवे", "दक्षिण पश्चिम रेलवे"] },
            correct: 0
        },

        // --- General Science ---
        {
            en: { q: "What is the SI unit of luminous intensity?", opts: ["Candela", "Lumen", "Lux", "Watt"] },
            hi: { q: "ज्योति तीव्रता (Luminous intensity) की SI इकाई क्या है?", opts: ["कैंडेला (Candela)", "ल्यूमेन", "लक्स", "वाट"] },
            correct: 0
        },
        {
            en: { q: "Which chemical compound is known as the 'King of Chemicals'?", opts: ["Sulphuric Acid", "Hydrochloric Acid", "Nitric Acid", "Phosphoric Acid"] },
            hi: { q: "किस रासायनिक यौगिक को 'रसायनों का राजा' (King of Chemicals) कहा जाता है?", opts: ["सल्फ्यूरिक अम्ल (Sulphuric Acid - H2SO4)", "हाइड्रोक्लोरिक अम्ल", "नाइट्रिक अम्ल", "फास्फोरिक अम्ल"] },
            correct: 0
        },
        {
            en: { q: "What is the chemical name of Slaked Lime?", opts: ["Calcium Hydroxide", "Calcium Oxide", "Calcium Carbonate", "Calcium Chloride"] },
            hi: { q: "बुझे हुए चूने (Slaked Lime) का रासायनिक नाम क्या है?", opts: ["कैल्शियम हाइड्रोक्साइड (Calcium Hydroxide - Ca(OH)2)", "कैल्शियम ऑक्साइड", "कैल्शियम कार्बोनेट", "कैल्शियम क्लोराइड"] },
            correct: 0
        },
        {
            en: { q: "Which instrument is used to measure blood pressure in human beings?", opts: ["Sphygmomanometer", "Barometer", "Stethoscope", "Thermometer"] },
            hi: { q: "मनुष्यों में रक्तचाप (Blood pressure) मापने के लिए किस उपकरण का उपयोग किया जाता है?", opts: ["स्फिग्मोमैनोमीटर (Sphygmomanometer)", "बैरोमीटर", "स्टेथस्कोप", "थर्मामीटर"] },
            correct: 0
        },
        {
            en: { q: "At what temperature are the Celsius and Fahrenheit scale metrics precisely identical?", opts: ["-40°", "0°", "40°", "-100°"] },
            hi: { q: "किस तापमान पर सेल्सियस और फारेनहाइट स्केल के मान बिल्कुल समान होते हैं?", opts: ["-40°", "0°", "40°", "-100°"] },
            correct: 0
        },

        // --- Computer Knowledge ---
        {
            en: { q: "Which protocol layer resolves logical domain names into routable physical IP addresses?", opts: ["DNS", "DHCP", "FTP", "HTTP"] },
            hi: { q: "कौन सा प्रोटोकॉल लेयर लॉजिकल डोमेन नामों को रूंकेबल भौतिक आईपी एड्रेस में रिज़ॉल्व करता है?", opts: ["DNS (Domain Name System)", "DHCP", "FTP", "HTTP"] },
            correct: 0
        },
        {
            en: { q: "What kind of cyber threat payload encrypts files and demands payment for decryption keys?", opts: ["Ransomware", "Trojan Horse", "Spyware", "Adware"] },
            hi: { q: "किस प्रकार का साइबर थ्रेट पेलोड फाइलों को एन्क्रिप्ट करता है और डिक्रिप्शन कुंजियों के लिए भुगतान की मांग करता है?", opts: ["रैनसमवेयर (Ransomware)", "ट्रोजन हॉर्स", "स्पाइवेयर", "एडवेयर"] },
            correct: 0
        },
        {
            en: { q: "Which shortcut key combination permanently deletes a selected item in Windows without moving it to the Recycle Bin?", opts: ["Shift + Delete", "Ctrl + Delete", "Alt + Delete", "Ctrl + Shift + D"] },
            hi: { q: "कौन सा शॉर्टकट कुंजी संयोजन विंडोज में किसी चयनित आइटम को रीसायकल बिन में भेजे बिना स्थायी रूप से हटा देता है?", opts: ["Shift + Delete", "Ctrl + Delete", "Alt + Delete", "Ctrl + Shift + D"] },
            correct: 0
        },
        {
            en: { q: "What does the abbreviation 'USB' represent in peripheral computer architecture hardware?", opts: ["Universal Serial Bus", "Unified System Buffer", "Universal Storage Block", "United Serial Buffer"] },
            hi: { q: "पेरिफेरल कंप्यूटर आर्किटेक्चर हार्डवेयर में 'USB' का क्या अर्थ है?", opts: ["यूनिवर्सल सीरियल बस (Universal Serial Bus)", "यूनिफाइड सिस्टम बफर", "यूनिवर्सल स्टोरेज ब्लॉक", "यूनाइटेड सीरियल बफर"] },
            correct: 0
        },
        {
            en: { q: "Which specialized memory bank holds frequently executed operations directly on the CPU substrate for ultra-fast access?", opts: ["Cache Memory", "RAM", "ROM", "Virtual Memory"] },
            hi: { q: "कौन सा विशिष्ट मेमोरी बैंक अल्ट्रा-फास्ट एक्सेस के लिए सीधे सीपीयू सबस्ट्रेट पर अक्सर निष्पादित होने वाले ऑपरेशन्स को रखता है?", opts: ["कैश मेमोरी (Cache Memory)", "रैम (RAM)", "रोम (ROM)", "वर्चुअल मेमोरी"] },
            correct: 0
        },

        // --- Mixed Core Topics ---
        {
            en: { q: "A vendor bought toffees at 6 for a rupee. How many for a rupee must he sell to gain 20%?", opts: ["5", "4", "3", "2"] },
            hi: { q: "एक विक्रेता ने ₹1 में 6 की दर से टॉफियां खरीदीं। 20% का लाभ प्राप्त करने के लिए उसे ₹1 में कितनी टॉफियां बेचनी चाहिए?", opts: ["5", "4", "3", "2"] },
            correct: 0
        },
        {
            en: { q: "If 'GIVE' is coded as 'VIEG', then how is 'OVER' coded in that system?", opts: ["EVRO", "REVO", "VREO", "EVOR"] },
            hi: { q: "यदि 'GIVE' को 'VIEG' के रूप में कूटबद्ध किया जाता है, तो उस प्रणाली में 'OVER' को कैसे कूटबद्ध किया जाएगा?", opts: ["EVRO", "REVO", "VREO", "EVOR"] },
            correct: 0
        },
        {
            en: { q: "The simple interest on a certain sum of money for 3 years at 8% per annum is half the compound interest on ₹4,000 for 2 years at 10% per annum. Find the sum.", opts: ["₹1,750", "₹2,000", "₹1,500", "₹1,800"] },
            hi: { q: "किसी निश्चित राशि पर 8% वार्षिक दर से 3 वर्ष का साधारण ब्याज, ₹4,000 पर 10% वार्षिक दर से 2 वर्ष के चक्रवृद्धि ब्याज का आधा है। वह राशि ज्ञात कीजिए।", opts: ["₹1,750", "₹2,000", "₹1,500", "₹1,800"] },
            correct: 0
        },
        {
            en: { q: "A man travels 12 km North, then 5 km East. Find the shortest radial distance from his starting coordinates.", opts: ["13 km", "17 km", "15 km", "14 km"] },
            hi: { q: "एक व्यक्ति 12 किमी उत्तर की ओर यात्रा करता है, फिर 5 किमी पूर्व की ओर जाता है। उसके प्रारंभिक निर्देशांक से न्यूनतम रेडियल दूरी ज्ञात कीजिए।", opts: ["13 किमी", "17 किमी", "15 किमी", "14 किमी"] },
            correct: 0
        },
        {
            en: { q: "Find the surface area of a cube whose volume is 216 cubic cm.", opts: ["216 sq.cm", "144 sq.cm", "180 sq.cm", "288 sq.cm"] },
            hi: { q: "एक घन (Cube) का पृष्ठीय क्षेत्रफल ज्ञात कीजिए जिसका आयतन 216 घन सेमी है।", opts: ["216 वर्ग सेमी", "144 वर्ग सेमी", "180 वर्ग सेमी", "288 वर्ग सेमी"] },
            correct: 0
        },
        {
            en: { q: "Which component of the cell is known as the 'Powerhouse of the cell'?", opts: ["Mitochondria", "Chloroplast", "Nucleus", "Ribosome"] },
            hi: { q: "कोशिका के किस घटक को 'कोशिका का पावरहाउस' (Powerhouse of the cell) कहा जाता है?", opts: ["माइटोकॉन्ड्रिया (Mitochondria)", "क्लोरोप्लास्ट", "केंद्रक (Nucleus)", "राइबोसोम"] },
            correct: 0
        },
        {
            en: { q: "Which gas is majorly responsible for the greenhouse effect on Earth?", opts: ["Carbon Dioxide", "Nitrogen", "Oxygen", "Hydrogen"] },
            hi: { q: "पृथ्वी पर ग्रीनहाउस प्रभाव (Greenhouse effect) के लिए मुख्य रूप से कौन सी गैस जिम्मेदार है?", opts: ["कार्बन डाइऑक्साइड (Carbon Dioxide)", "नाइट्रोजन", "ऑक्सीजन", "हाइड्रोजन"] },
            correct: 0
        },
        {
            en: { q: "If the radius of a sphere is halved, then its volume reduces to what fraction of its original volume?", opts: ["1/8", "1/4", "1/2", "1/6"] },
            hi: { q: "यदि किसी गोले की त्रिज्या आधी कर दी जाए, तो उसका आयतन मूल आयतन का कितना भाग रह जाएगा?", opts: ["1/8", "1/4", "1/2", "1/6"] },
            correct: 0
        },
        {
            en: { q: "Who presided over the historic 1929 Lahore session of the Indian National Congress?", opts: ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose", "Motilal Nehru"] },
            hi: { q: "भारतीय राष्ट्रीय कांग्रेस के ऐतिहासिक 1929 के लाहौर सत्र की अध्यक्षता किसने की थी?", opts: ["जवाहरलाल नेहरू (Jawaharlal Nehru)", "महात्मा गांधी", "सुभाष चंद्र बोस", "मोतीलाल नेहरू"] },
            correct: 0
        },
        {
            en: { q: "Which is the largest fresh water lake in India?", opts: ["Wular Lake", "Chilika Lake", "Dal Lake", "Loktak Lake"] },
            hi: { q: "भारत की सबसे बड़ी मीठे पानी की झील (Fresh water lake) कौन सी है?", opts: ["वुलर झील (Wular Lake - Jammu & Kashmir)", "चिल्का झील", "डल झील", "लोकटक झील"] },
            correct: 0
        },
        // --- Quantitative Aptitude (Set 12) ---
        {
            en: { q: "If the radius of a cylinder is decreased by 50% and its height is increased by 50%, find the percentage change in its volume.", opts: ["62.5% decrease", "37.5% decrease", "50% decrease", "25% increase"] },
            hi: { q: "यदि एक बेलन की त्रिज्या में 50% की कमी की जाती है और उसकी ऊंचाई में 50% की वृद्धि की जाती है, तो उसके आयतन में प्रतिशत परिवर्तन ज्ञात कीजिए।", opts: ["62.5% की कमी", "37.5% की कमी", "50% की कमी", "25% की वृद्धि"] },
            correct: 0
        },
        {
            en: { q: "A train 110 m long passes a man running at 6 km/h in the direction of the train in 6 seconds. Find the speed of the train.", opts: ["72 km/h", "66 km/h", "60 km/h", "78 km/h"] },
            hi: { q: "110 मीटर लंबी एक ट्रेन ट्रेन की दिशा में 6 किमी/घंटा की गति से दौड़ रहे एक व्यक्ति को 6 सेकंड में पार करती है। ट्रेन की गति ज्ञात कीजिए।", opts: ["72 किमी/घंटा", "66 किमी/घंटा", "60 किमी/घंटा", "78 किमी/घंटा"] },
            correct: 0
        },
        {
            en: { q: "The compound interest on ₹30,000 at 7% per annum is ₹4,347. Find the time period (in years).", opts: ["2 years", "3 years", "1.5 years", "4 years"] },
            hi: { q: "₹30,000 पर 7% वार्षिक दर से चक्रवृद्धि ब्याज ₹4,347 है। समय अवधि (वर्षों में) ज्ञात कीजिए।", opts: ["2 वर्ष", "3 वर्ष", "1.5 वर्ष", "4 वर्ष"] },
            correct: 0
        },
        {
            en: { q: "If x:y = 5:2, then find the value of (8x + 9y) : (8x + 2y).", opts: ["29:22", "27:22", "7:4", "29:24"] },
            hi: { q: "यदि x:y = 5:2 है, तो (8x + 9y) : (8x + 2y) का मान ज्ञात कीजिए।", opts: ["29:22", "27:22", "7:4", "29:24"] },
            correct: 0
        },
        {
            en: { q: "If x^2 - 3x + 1 = 0, then find the value of x + 1/x.", opts: ["3", "1", "9", "2"] },
            hi: { q: "यदि x^2 - 3x + 1 = 0 है, तो x + 1/x का मान ज्ञात कीजिए।", opts: ["3", "1", "9", "2"] },
            correct: 0
        },
        {
            en: { q: "A jar full of whisky contains 40% alcohol. A part of this whisky is replaced by another containing 19% alcohol and now the percentage of alcohol was found to be 26%. Find the quantity of whisky replaced.", opts: ["2/3", "1/3", "2/5", "3/5"] },
            hi: { q: "व्हिस्की से भरे एक जार में 40% अल्कोहल है। इस व्हिस्की के एक हिस्से को 19% अल्कोहल वाली दूसरी व्हिस्की से बदल दिया जाता है और अब अल्कोहल का प्रतिशत 26% पाया गया। बदली गई व्हिस्की की मात्रा ज्ञात कीजिए।", opts: ["2/3", "1/3", "2/5", "3/5"] },
            correct: 0
        },
        {
            en: { q: "Find the area of a rhombus one of whose diagonals is 12 cm and its perimeter is 40 cm.", opts: ["96 sq.cm", "192 sq.cm", "48 sq.cm", "72 sq.cm"] },
            hi: { q: "एक समचतुर्भुज (Rhombus) का क्षेत्रफल ज्ञात कीजिए जिसका एक विकर्ण 12 सेमी है और इसका परिमाप 40 सेमी है।", opts: ["96 वर्ग सेमी", "192 वर्ग सेमी", "48 वर्ग सेमी", "72 वर्ग सेमी"] },
            correct: 0
        },
        {
            en: { q: "The material of a solid cone is melted and recast into the shape of a solid cylinder of equal radius. If the height of the cylinder is 5 cm, find the height of the cone.", opts: ["15 cm", "5 cm", "10 cm", "20 cm"] },
            hi: { q: "एक ठोस शंकु की सामग्री को पिघलाया जाता है और समान त्रिज्या वाले एक ठोस बेलन के आकार में ढाला जाता है। यदि बेलन की ऊंचाई 5 सेमी है, तो शंकु की ऊंचाई ज्ञात कीजिए।", opts: ["15 सेमी", "5 सेमी", "10 सेमी", "20 सेमी"] },
            correct: 0
        },
        {
            en: { q: "If a sum of money invested at simple interest amounts to ₹2800 in 2 years and to ₹3200 in 4 years, find the sum.", opts: ["₹2400", "₹2000", "₹2200", "₹2500"] },
            hi: { q: "यदि साधारण ब्याज पर निवेश की गई कोई राशि 2 वर्षों में ₹2800 और 4 वर्षों में ₹3200 हो जाती है, तो वह राशि ज्ञात कीजिए।", opts: ["₹2400", "₹2000", "₹2200", "₹2500"] },
            correct: 0
        },
        {
            en: { q: "An observer 1.6m tall is 20*sqrt(3) m away from a tower. The angle of elevation of the top of the tower from his eye is 30°. Find the height of the tower.", opts: ["21.6 m", "20 m", "23.2 m", "18.4 m"] },
            hi: { q: "1.6 मीटर लंबा एक पर्यवेक्षक एक मीनार से 20*sqrt(3) मीटर दूर है। उसकी आँख से मीनार के शिखर का उन्नयन कोण 30° है। मीनार की ऊंचाई ज्ञात कीजिए।", opts: ["21.6 मीटर", "20 मीटर", "23.2 मीटर", "18.4 मीटर"] },
            correct: 0
        },

        // --- Reasoning Ability (Set 12) ---
        {
            en: { q: "In a certain code language, 'COMPUTER' is written as 'RFUVQNPC'. How is 'MEDICINE' written in that code?", opts: ["EOJDJEFM", "EOJDEJFM", "MFEJDJOE", "EOJJDEFM"] },
            hi: { q: "एक निश्चित कूट भाषा में, 'COMPUTER' को 'RFUVQNPC' लिखा जाता है। उसी कूट में 'MEDICINE' कैसे लिखा जाएगा?", opts: ["EOJDJEFM", "EOJDEJFM", "MFEJDJOE", "EOJJDEFM"] },
            correct: 0
        },
        {
            en: { q: "Find the next term in the series: 4, 9, 25, 49, 121, ?", opts: ["169", "144", "196", "225"] },
            hi: { q: "श्रृंखला में अगला पद ज्ञात कीजिए: 4, 9, 25, 49, 121, ?", opts: ["169 (यह अभाज्य संख्याओं के वर्ग की श्रृंखला है)", "144", "196", "225"] },
            correct: 0
        },
        {
            en: { q: "Statements: Some keys are staplers. Some staplers are stickers. Conclusions: I. Some stickers are keys. II. No sticker is a key.", opts: ["Either I or II follows", "Only I follows", "Only II follows", "Neither I nor II follows"] },
            hi: { q: "कथन: कुछ चाबियां स्टेपलर हैं। कुछ स्टेपलर स्टिकर हैं। निष्कर्ष: I. कुछ स्टिकर चाबियां हैं। II. कोई स्टिकर चाबी नहीं है।", opts: ["या तो I या II अनुसरण करता है (Either or case)", "केवल I अनुसरण करता है", "केवल II अनुसरण करता है", "न तो I और न ही II अनुसरण करता है"] },
            correct: 0
        },
        {
            en: { q: "A child is looking for his father. He went 90 metres in the East before turning to his right. He went 20 metres before turning to his right again to look for his father at his uncle's place 30 metres from this point. His father was not there. From here he went 100 metres to the North before meeting his father in a street. How far did the son meet his father from the starting point?", opts: ["100 m", "80 m", "140 m", "260 m"] },
            hi: { q: "एक बच्चा अपने पिता को ढूंढ रहा है। वह दाईं ओर मुड़ने से पहले पूर्व में 90 मीटर गया। वह फिर से दाईं ओर मुड़ने से पहले 20 मीटर गया और इस बिंदु से 30 मीटर दूर अपने चाचा के घर पर अपने पिता को देखा। उसके पिता वहाँ नहीं थे। यहाँ से वह एक गली में अपने पिता से मिलने से पहले उत्तर की ओर 100 मीटर गया। बेटा अपने पिता से प्रारंभिक बिंदु से कितनी दूर मिला?", opts: ["100 मीटर", "80 मीटर", "140 मीटर", "260 मीटर"] },
            correct: 0
        },
        {
            en: { q: "A's mother is sister of B and daughter of C. D is daughter of B and sister of E. How is C related to E?", opts: ["Grandmother or Grandfather", "Mother", "Aunt", "Sister-in-law"] },
            hi: { q: "A की माँ, B की बहन और C की पुत्री है। D, B की पुत्री और E की बहन है। C, E से किस प्रकार संबंधित है?", opts: ["दादी/नानी या दादा/नाना", "माँ", "चाची/मौसी", "सिस्टर-इन-लॉ"] },
            correct: 0
        },
        {
            en: { q: "Seven friends A, B, C, D, E, F and G are sitting in a row facing North. F is to the immediate right of E. E is 4th to the right of G. C is the neighbor of B and D. Person who is third to the left of D is at one of the ends. Who are at the extreme ends?", opts: ["G and A", "G and F", "B and D", "A and E"] },
            hi: { q: "सात मित्र A, B, C, D, E, F और G उत्तर की ओर मुख करके एक पंक्ति में बैठे हैं। F, E के ठीक दाईं ओर है। E, G के दाईं ओर चौथा है। C, B और D का पड़ोसी है। जो व्यक्ति D के बाईं ओर तीसरा है, वह किसी एक छोर पर है। अंतिम छोरों पर कौन हैं?", opts: ["G और A", "G और F", "B और D", "A और E"] },
            correct: 0
        },
        {
            en: { q: "If '+' stands for 'multiplication', '-' stands for 'division', '*' stands for 'addition' and '/' stands for 'subtraction', then evaluate: 20 - 4 + 2 * 6 / 3", opts: ["13", "11", "15", "10"] },
            hi: { q: "यदि '+' का अर्थ 'गुणा', '-' का अर्थ 'भाग', '*' का अर्थ 'जोड़' और '/' का अर्थ 'घटाव' है, तो मान ज्ञात कीजिए: 20 - 4 + 2 * 6 / 3", opts: ["13", "11", "15", "10"] },
            correct: 0
        },
        {
            en: { q: "Find the odd number out from the series: 3, 5, 11, 14, 17, 21", opts: ["14", "11", "17", "21"] },
            hi: { q: "श्रृंखला में से विषम संख्या (Odd number) ज्ञात कीजिए: 3, 5, 11, 14, 17, 21", opts: ["14 (यह एकमात्र सम संख्या है)", "11", "17", "21"] },
            correct: 0
        },
        {
            en: { q: "Satish remembers that his brother's birthday is after 15th but before 18th of February whereas his sister remembers that her brother's birthday is after 16th but before 19th of February. On which date in February is Satish's brother's birthday?", opts: ["17th", "16th", "18th", "None of these"] },
            hi: { q: "सतीश को याद है कि उसके भाई का जन्मदिन 15 के बाद लेकिन 18 फरवरी से पहले है, जबकि उसकी बहन को याद है कि उसके भाई का जन्मदिन 16 के बाद लेकिन 19 फरवरी से पहले है। फरवरी की किस तारीख को सतीश के भाई का जन्मदिन है?", opts: ["17 तारीख", "16 तारीख", "18 तारीख", "इनमें से कोई नहीं"] },
            correct: 0
        },
        {
            en: { q: "If 1st October is Sunday, then 1st November will be:", opts: ["Wednesday", "Monday", "Tuesday", "Thursday"] },
            hi: { q: "यदि 1 अक्टूबर को रविवार है, तो 1 नवंबर को कौन सा दिन होगा?", opts: ["बुधवार (Wednesday)", "सोमवार", "मंगलवार", "गुरुवार"] },
            correct: 0
        },

        // --- General Awareness & Railway Knowledge (Set 12) ---
        {
            en: { q: "Which railway station has become the first in India to be completely operated by all-women staff?", opts: ["Matunga (Mumbai)", "Gandhinagar Jaipur", "Ajni (Nagpur)", "Maninagar"] },
            hi: { q: "कौन सा रेलवे स्टेशन पूरी तरह से महिला कर्मचारियों द्वारा संचालित होने वाला भारत का पहला स्टेशन बन गया है?", opts: ["माटुंगा - मुंबई (Matunga)", "गांधीनगर जयपुर", "अजनी - नागपुर", "मणिनगर"] },
            correct: 0
        },
        {
            en: { q: "Where is the Indian Railways Institute of Logistics and Materials Management (IRILMM) located?", opts: ["New Delhi", "Vadodara", "Lucknow", "Kharagpur"] },
            hi: { q: "भारतीय रेलवे रसद और सामग्री प्रबंधन संस्थान (IRILMM) कहाँ स्थित है?", opts: ["नई दिल्ली (New Delhi)", "वडोदरा", "लखनऊ", "खड़गपुर"] },
            correct: 0
        },
        {
            en: { q: "What does the abbreviation 'CLW' stand for in Indian Railways rolling stock division?", opts: ["Chittaranjan Locomotive Works", "Central Locomotive Workshop", "Coach Locomotive Works", "Central Line Works"] },
            hi: { q: "भारतीय रेलवे के रोलिंग स्टॉक डिवीजन में 'CLW' का पूर्ण रूप क्या है?", opts: ["चित्तरंजन लोकोमोटिव वर्क्स (Chittaranjan Locomotive Works)", "सेंट्रल लोकोमोटिव वर्कशॉप", "कोच लोकोमोटिव वर्क्स", "सेंट्रल लाइन वर्क्स"] },
            correct: 0
        },
        {
            en: { q: "In which city is the East Coast Railway zone headquartered?", opts: ["Bhubaneswar", "Visakhapatnam", "Kolkata", "Bilaspur"] },
            hi: { q: "पूर्व तटीय रेलवे (East Coast Railway) ज़ोन का मुख्यालय किस शहर में स्थित है?", opts: ["भुवनेश्वर (Bhubaneswar)", "विशाखापत्तनम", "कोलकाता", "बिलासपुर"] },
            correct: 0
        },
        {
            en: { q: "The absolute highest railway bridge in the world, the Chenab Bridge, is part of which Indian Railways project?", opts: ["USBRL Project", "Kashmir Ring Road", "Jammu Highway Rail", "Kalka Extension"] },
            hi: { q: "दुनिया का सबसे ऊँचा रेलवे पुल, चिनाब ब्रिज, भारतीय रेलवे की किस परियोजना का हिस्सा है?", opts: ["USBRL परियोजना (Udhampur-Srinagar-Baramulla Rail Link)", "कश्मीर रिंग रोड", "जम्मू हाईवे रेल", "कालका एक्सटेंशन"] },
            correct: 0
        },
        {
            en: { q: "What color aspect is shown by the distant signal in Indian Railways when the line ahead is completely clear through the station territory?", opts: ["Two Yellows", "Green", "Single Yellow", "Red"] },
            hi: { q: "भारतीय रेलवे में डिस्टेंट सिग्नल (Distant Signal) द्वारा कौन सा रंग दिखाया जाता है जब आगे की लाइन स्टेशन क्षेत्र से पूरी तरह स्पष्ट/क्लियर होती है?", opts: ["दो पीले (Two Yellows)", "हरा", "एक अकेला पीला", "लाल"] },
            correct: 0
        },
        {
            en: { q: "Which public sector enterprise under the Ministry of Railways specializes in project consultancy, engineering, and export of rolling stock?", opts: ["RITES", "IRCON", "CONCOR", "RVNL"] },
            hi: { q: "रेल मंत्रालय के तहत कौन सा सार्वजनिक क्षेत्र का उद्यम परियोजना परामर्श, इंजीनियरिंग और रोलिंग स्टॉक के निर्यात में माहिर है?", opts: ["RITES (Rail India Technical and Economic Service)", "IRCON", "CONCOR", "RVNL"] },
            correct: 0
        },
        {
            en: { q: "The lifelines of Mumbai, the Western and Central Suburban local lines, use which standard overhead electrification voltage?", opts: ["25 kV AC", "1500 V DC", "750 V DC", "11 kV AC"] },
            hi: { q: "मुंबई की लाइफलाइन, वेस्टर्न और सेंट्रल सबअर्बन लोकल लाइनें, वर्तमान में किस मानक ओवरहेड इलेक्ट्रिफिकेशन वोल्टेज का उपयोग करती हैं?", opts: ["25 kV AC (25,000 वोल्ट एसी)", "1500 V DC", "750 V DC", "11 kV AC"] },
            correct: 0
        },
        {
            en: { q: "What is the primary technical objective of the 'Airtel-GPS' or 'RTIS' tracking systems mounted on Indian Railways locomotives?", opts: ["Real-time train tracking and plotting", "Passenger Wi-Fi delivery", "Loco pilot health check", "Food ordering synchronization"] },
            hi: { q: "भारतीय रेलवे के इंजनों पर लगे 'RTIS' ट्रैकिंग सिस्टम का प्राथमिक तकनीकी उद्देश्य क्या है?", opts: ["वास्तविक समय में ट्रेनों की लाइव ट्रैकिंग और प्लॉटिंग (Real-time train tracking)", "यात्री वाई-फाई वितरण", "लोको पायलट स्वास्थ्य जांच", "भोजन ऑर्डर सिंक्रोनाइज़ेशन"] },
            correct: 0
        },
        {
            en: { q: "The Nilgiri Mountain Railway utilizes which mechanical transmission system to safely climb steep gradients?", opts: ["Rack and Pinion System", "Magnetic Levitation", "Hydraulic Counterweight", "Dual Cable Propulsion"] },
            hi: { q: "नीलगिरि माउंटेन रेलवे खड़ी ढलानों पर सुरक्षित रूप से चढ़ने के लिए किस यांत्रिक ट्रांसमिशन प्रणाली का उपयोग करती है?", opts: ["रैक और पिनियन प्रणाली (Rack and Pinion System)", "मैग्नेटिक लेविटेशन", "हाइड्रोलिक काउंटरवेट", "डुअल केबल प्रोपल्शन"] },
            correct: 0
        },

        // --- General Science ---
        {
            en: { q: "What is the unit of measure for mechanical work done or energy consumed in SI metrics?", opts: ["Joule", "Watt", "Newton", "Pascal"] },
            hi: { q: "SI मेट्रिक्स में यांत्रिक कार्य (Mechanical work done) या खपत की गई ऊर्जा को मापने की इकाई क्या है?", opts: ["जूल (Joule)", "वाट", "न्यूटन", "पास्कल"] },
            correct: 0
        },
        {
            en: { q: "Which functional acid is majorly present inside ants' stings?", opts: ["Formic Acid", "Methanoic Acid", "Both Formic and Methanoic Acid", "Citric Acid"] },
            hi: { q: "चींटियों के डंक के अंदर मुख्य रूप से कौन सा अम्ल उपस्थित होता है?", opts: ["फॉर्मिक अम्ल", "मेथैनोइक अम्ल", "फॉर्मिक और मेथैनोइक अम्ल दोनों (Both Formic and Methanoic Acid are same)", "साइट्रिक अम्ल"] },
            correct: 2
        },
        {
            en: { q: "What is the chemical composition formula of Common Table Salt?", opts: ["NaCl", "NaHCO3", "Na2CO3", "NaOH"] },
            hi: { q: "सामान्य खाने के नमक (Common Table Salt) का रासायनिक सूत्र क्या है?", opts: ["NaCl (Sodium Chloride)", "NaHCO3", "Na2CO3", "NaOH"] },
            correct: 0
        },
        {
            en: { q: "Which organ inside the human body produces the digestive bile juice fluid?", opts: ["Liver", "Pancreas", "Gallbladder", "Stomach"] },
            hi: { q: "मानव शरीर के अंदर कौन सा अंग पाचक पित्त रस (Bile juice) का उत्पादन करता है?", opts: ["यकृत (Liver - Note: Gallbladder stores it)", "अग्न्याशय", "पित्ताशय", "आमाशय"] },
            correct: 0
        },
        {
            en: { q: "The acoustic echo phenomenon occurs due to which basic property of sound waves?", opts: ["Reflection", "Refraction", "Diffraction", "Interference"] },
            hi: { q: "ध्वनि तरंगों के किस मूल गुण के कारण गूँज (Echo) की घटना घटित होती है?", opts: ["परावर्तन (Reflection)", "अपवर्तन", "विवर्तन", "व्यतिकरण"] },
            correct: 0
        },

        // --- Computer Knowledge ---
        {
            en: { q: "Which layer of the OSI architecture model is directly responsible for routing packets across networks?", opts: ["Network Layer", "Data Link Layer", "Transport Layer", "Physical Layer"] },
            hi: { q: "OSI आर्किटेक्चर मॉडल की कौन सी लेयर नेटवर्क पर पैकेटों को रूट करने के लिए सीधे जिम्मेदार है?", opts: ["नेटवर्क लेयर (Network Layer)", "डेटा लिंक लेयर", "ट्रांसपोर्ट लेयर", "भौतिक लेयर"] },
            correct: 0
        },
        {
            en: { q: "What type of malware code replicates itself and spreads automatically across networked systems without human actions?", opts: ["Computer Worm", "Trojan Horse", "Spyware", "Logic Bomb"] },
            hi: { q: "किस प्रकार का मैलवेयर कोड स्वयं की नकल करता है और मानवीय क्रियाओं के बिना नेटवर्क वाले सिस्टम में स्वचालित रूप से फैलता है?", opts: ["कंप्यूटर वर्म (Computer Worm)", "ट्रोजन हॉर्स", "स्पाइवेयर", "लॉजिक बॉम्ब"] },
            correct: 0
        },
        {
            en: { q: "In Microsoft Windows, which shortcut key combination toggles display visibility directly to the active desktop screen?", opts: ["Windows Key + D", "Alt + F4", "Ctrl + Alt + Del", "Windows Key + L"] },
            hi: { q: "माइक्रोसोफ्ट विंडोज में, कौन सा शॉर्टकट कुंजी संयोजन डिस्प्ले विजिबिलिटी को सीधे सक्रिय डेस्कटॉप स्क्रीन पर ले जाता है?", opts: ["Windows Key + D", "Alt + F4", "Ctrl + Alt + Del", "Windows Key + L"] },
            correct: 0
        },
        {
            en: { q: "What does the abbreviation 'BIOS' represent in computer hardware systems initialization?", opts: ["Basic Input Output System", "Binary Input Output Standard", "Buffer Internal Operating System", "Base Integrated Operating Software"] },
            hi: { q: "कंप्यूटर हार्डवेयर सिस्टम इनिशियलाइजेशन में 'BIOS' का क्या अर्थ है?", opts: ["बेसिक इनपुट आउटपुट सिस्टम (Basic Input Output System)", "बाइनरी इनपुट आउटपुट स्टैंडर्ड", "बफर इंटरनल ऑपरेटिंग सिस्टम", "बेस इंटीग्रेटेड ऑपरेटिंग सॉफ्टवेयर"] },
            correct: 0
        },
        {
            en: { q: "Which technology allows multiple operating system instances to execute concurrently on a single physical host hardware platform?", opts: ["Virtualization", "Cloud Compilation", "Multi-threading", "Grid Computing"] },
            hi: { q: "कौन सी तकनीक कई ऑपरेटिंग सिस्टम इंस्टेंस को एक ही भौतिक होस्ट हार्डवेयर प्लेटफॉर्म पर एक साथ निष्पादित करने की अनुमति देती है?", opts: ["वर्चुअलाइजेशन (Virtualization)", "क्लाउड कम्पाइलेशन", "मल्टी-थ्रेडिंग", "ग्रिड कंप्यूटिंग"] },
            correct: 0
        },

        // --- Mixed Core Topics ---
        {
            en: { q: "By selling an umbrella for ₹300, a shopkeeper gains 20%. Find its cost price.", opts: ["₹250", "₹240", "₹260", "₹270"] },
            hi: { q: "एक छतरी को ₹300 में बेचने पर एक दुकानदार को 20% का लाभ होता है। इसका क्रय मूल्य ज्ञात कीजिए।", opts: ["₹250", "₹240", "₹260", "₹270"] },
            correct: 0
        },
        {
            en: { q: "If 'BEAUTY' is coded as 'YVZFGB', then how is 'CHARM' coded in that system?", opts: ["XSZIN", "XSZIM", "XSAIN", "XRSIM"] },
            hi: { q: "यदि 'BEAUTY' को 'YVZFGB' के रूप में कूटबद्ध किया जाता है, तो उस प्रणाली में 'CHARM' को कैसे कूटबद्ध किया जाएगा?", opts: ["XSZIN", "XSZIM (विपरीत अक्षरों की श्रृंखला)", "XSAIN", "XRSIM"] },
            correct: 1
        },
        {
            en: { q: "The compound interest on ₹10,000 for 2 years at 10% per annum, compounded annually, is:", opts: ["₹2,100", "₹2,000", "₹2,200", "₹2,050"] },
            hi: { q: "₹10,000 पर 2 वर्ष के लिए 10% वार्षिक दर से वार्षिक रूप से संयोजित चक्रवृद्धि ब्याज कितना होगा?", opts: ["₹2,100", "₹2,000", "₹2,200", "₹2,050"] },
            correct: 0
        },
        {
            en: { q: "A man goes 24 m towards West and then 10 m towards North. How far is he from his starting point?", opts: ["26 m", "34 m", "14 m", "28 m"] },
            hi: { q: "एक व्यक्ति 24 मीटर पश्चिम की ओर जाता है और फिर 10 मीटर उत्तर की ओर जाता है। वह अपने प्रारंभिक बिंदु से कितनी दूर है?", opts: ["26 मीटर", "34 मीटर", "14 मीटर", "28 मीटर"] },
            correct: 0
        },
        {
            en: { q: "Find the total surface area of a cone whose radius is 7 cm and slant height is 10 cm.", opts: ["374 sq.cm", "220 sq.cm", "154 sq.cm", "440 sq.cm"] },
            hi: { q: "एक शंकु का कुल पृष्ठीय क्षेत्रफल ज्ञात कीजिए जिसकी त्रिज्या 7 सेमी और तिर्यक ऊंचाई (Slant height) 10 सेमी है।", opts: ["374 वर्ग सेमी", "220 वर्ग सेमी", "154 वर्ग सेमी", "440 वर्ग सेमी"] },
            correct: 0
        },
        {
            en: { q: "Which cell organelle contains its own DNA and ribosomes, allowing it to synthesize some of its own proteins?", opts: ["Mitochondria", "Lysosome", "Endoplasmic Reticulum", "Golgi Apparatus"] },
            hi: { q: "किस कोशिका अंगक में अपना स्वयं का डीएनए और राइबोसोम होता है, जिससे वह अपने कुछ प्रोटीनों का संश्लेषण स्वयं कर सकता है?", opts: ["माइटोकॉन्ड्रिया (Mitochondria)", "लाइसोसोम", "एंडोप्लाज्मिक रेटिकुलम", "गोल्गी तंत्र"] },
            correct: 0
        },
        {
            en: { q: "What is the primary commercial use of the chemical gas Ethylene?", opts: ["Artificial ripening of fruits", "Fire extinguishing", "Welding metals", "Anesthesia component"] },
            hi: { q: "एथिलीन (Ethylene) रासायनिक गैस का प्राथमिक व्यावसायिक उपयोग क्या है?", opts: ["फलों को कृत्रिम रूप से पकाना (Artificial ripening of fruits)", "आग बुझाना", "धातुओं की वेल्डिंग", "एनेस्थीसिया घटक"] },
            correct: 0
        },
        {
            en: { q: "If the surface area of a sphere increases by 44%, then find the percentage increase in its volume.", opts: ["72.8%", "60%", "44%", "50%"] },
            hi: { q: "यदि किसी गोले का पृष्ठीय क्षेत्रफल 44% बढ़ जाता है, तो उसके आयतन में प्रतिशत वृद्धि ज्ञात कीजिए।", opts: ["72.8%", "60%", "44%", "50%"] },
            correct: 0
        },
        {
            en: { q: "Who was the political guru of Mahatma Gandhi?", opts: ["Gopal Krishna Gokhale", "Bal Gangadhar Tilak", "Dadabhai Naoroji", "Rabindranath Tagore"] },
            hi: { q: "महात्मा गांधी के राजनीतिक गुरु कौन थे?", opts: ["गोपाल कृष्ण गोखले (Gopal Krishna Gokhale)", "बाल गंगाधर तिलक", "दादाभाई नौरोजी", "रविंद्रनाथ टैगोर"] },
            correct: 0
        },
        {
            en: { q: "Which line separates India and China in the northeastern sector?", opts: ["McMahon Line", "Radcliffe Line", "Durand Line", "Palk Strait"] },
            hi: { q: "पूर्वोत्तर क्षेत्र में भारत और चीन को कौन सी रेखा अलग करती है?", opts: ["मैकमोहन रेखा (McMahon Line)", "रेडक्लिफ रेखा", "डूरंड रेखा", "पाक जलडमरूमध्य"] },
            correct: 0
        },
        // --- Quantitative Aptitude (Set 13) ---
        {
            en: { q: "If the radius of a sphere is increased by 10%, then find the percentage increase in its volume.", opts: ["33.1%", "30%", "21%", "10%"] },
            hi: { q: "यदि एक गोले की त्रिज्या में 10% की वृद्धि की जाती है, तो उसके आयतन में प्रतिशत वृद्धि ज्ञात कीजिए।", opts: ["33.1%", "30%", "21%", "10%"] },
            correct: 0
        },
        {
            en: { q: "A train 150 m long passes a telegraph post in 12 seconds. In what time will it pass a bridge 250 m long?", opts: ["32 seconds", "20 seconds", "25 seconds", "30 seconds"] },
            hi: { q: "150 मीटर लंबी एक ट्रेन एक टेलीग्राम पोस्ट को 12 सेकंड में पार करती है। 250 मीटर लंबे पुल को पार करने में इसे कितना समय लगेगा?", opts: ["32 सेकंड", "20 सेकंड", "25 सेकंड", "30 seconds"] },
            correct: 0
        },
        {
            en: { q: "Find the compound interest on ₹8,000 for 1 year at 10% per annum, interest being compounded half-yearly.", opts: ["₹820", "₹800", "₹410", "₹840"] },
            hi: { q: "₹8,000 पर 1 वर्ष के लिए 10% वार्षिक दर से चक्रवृद्धि ब्याज ज्ञात कीजिए, यदि ब्याज अर्धवार्षिक रूप से संयोजित होता है।", opts: ["₹820", "₹800", "₹410", "₹840"] },
            correct: 0
        },
        {
            en: { q: "If a:b = 2:3, b:c = 4:5 and c:d = 6:7, find a:d.", opts: ["16:35", "8:15", "4:7", "12:35"] },
            hi: { q: "यदि a:b = 2:3, b:c = 4:5 और c:d = 6:7 है, तो a:d ज्ञात कीजिए।", opts: ["16:35", "8:15", "4:7", "12:35"] },
            correct: 0
        },
        {
            en: { q: "If x - 1/x = 4, then find the value of x^3 - 1/x^3.", opts: ["76", "52", "64", "68"] },
            hi: { q: "यदि x - 1/x = 4 है, तो x^3 - 1/x^3 का मान ज्ञात कीजिए।", opts: ["76", "52", "64", "68"] },
            correct: 0
        },
        {
            en: { q: "In what ratio must water be mixed with spirit to gain 20% by selling the mixture at cost price?", opts: ["1:5", "5:1", "1:4", "4:1"] },
            hi: { q: "मिश्रण को क्रय मूल्य पर बेचने पर 20% का लाभ प्राप्त करने के लिए स्पिरिट में पानी को किस अनुपात में मिलाया जाना चाहिए?", opts: ["1:5", "5:1", "1:4", "4:1"] },
            correct: 0
        },
        {
            en: { q: "The perimeter of a rectangle is 60 cm and its breadth is 12 cm. Find its area.", opts: ["216 sq.cm", "180 sq.cm", "240 sq.cm", "144 sq.cm"] },
            hi: { q: "एक आयत का परिमाप 60 सेमी है और इसकी चौड़ाई 12 सेमी है। इसका क्षेत्रफल ज्ञात कीजिए।", opts: ["216 वर्ग सेमी", "180 वर्ग सेमी", "240 वर्ग सेमी", "144 वर्ग सेमी"] },
            correct: 0
        },
        {
            en: { q: "Find the length of the longest rod that can be placed in a room 12 m long, 9 m broad and 8 m high.", opts: ["17 m", "15 m", "19 m", "21 m"] },
            hi: { q: "12 मीटर लंबे, 9 मीटर चौड़े और 8 मीटर ऊंचे कमरे में रखी जा सकने वाली सबसे लंबी छड़ की लंबाई ज्ञात कीजिए।", opts: ["17 मीटर", "15 मीटर", "19 मीटर", "21 मीटर"] },
            correct: 0
        },
        {
            en: { q: "A sum of money invested at compound interest triples itself in 3 years. In how many years will it become 9 times of itself?", opts: ["6 years", "9 years", "12 years", "8 years"] },
            hi: { q: "चक्रवृद्धि ब्याज पर निवेश की गई कोई राशि 3 वर्षों में स्वयं की तीन गुनी हो जाती है। कितने वर्षों में यह स्वयं की 9 गुनी हो जाएगी?", opts: ["6 वर्ष", "9 वर्ष", "12 वर्ष", "8 वर्ष"] },
            correct: 0
        },
        {
            en: { q: "From the top of a cliff 90m high, the angle of depression of a boat is 30°. Find the distance of the boat from the foot of the cliff.", opts: ["90*sqrt(3) m", "90/sqrt(3) m", "45*sqrt(3) m", "180 m"] },
            hi: { q: "90 मीटर ऊँची चट्टान के शिखर से, एक नाव का अवनमन कोण (Angle of depression) 30° है। चट्टान के पाद से नाव की दूरी ज्ञात कीजिए।", opts: ["90*sqrt(3) मीटर", "90/sqrt(3) मीटर", "45*sqrt(3) मीटर", "180 मीटर"] },
            correct: 0
        },

        // --- Reasoning Ability (Set 13) ---
        {
            en: { q: "If 'PEOPLE' is coded as 'PLPOEE', how is 'TRENDS' coded in that language?", opts: ["TNESRD", "TNDSER", "TNSRED", "TSNERD"] },
            hi: { q: "यदि 'PEOPLE' को 'PLPOEE' के रूप में कूटबद्ध किया जाता है, तो उसी भाषा में 'TRENDS' को कैसे कूटबद्ध किया जाएगा?", opts: ["TNESRD", "TNDSER", "TNSRED", "TSNERD"] },
            correct: 0
        },
        {
            en: { q: "Find the missing number in the series: 2, 6, 12, 20, 30, ?", opts: ["42", "40", "36", "44"] },
            hi: { q: "श्रृंखला में लुप्त संख्या ज्ञात कीजिए: 2, 6, 12, 20, 30, ?", opts: ["42 (पैटर्न: +4, +6, +8, +10, +12)", "40", "36", "44"] },
            correct: 0
        },
        {
            en: { q: "Statements: All doors are floors. Some floors are roofs. Conclusions: I. Some doors are roofs. II. Some floors are doors.", opts: ["Only II follows", "Only I follows", "Neither I nor II follows", "Both I and II follow"] },
            hi: { q: "कथन: सभी दरवाजे फर्श हैं। कुछ फर्श छत हैं। निष्कर्ष: I. कुछ दरवाजे छत हैं। II. कुछ फर्श दरवाजे हैं।", opts: ["केवल II अनुसरण करता है", "केवल I अनुसरण करता है", "न तो I और न ही II अनुसरण करता है", "I और II दोनों अनुसरण करते हैं"] },
            correct: 0
        },
        {
            en: { q: "A man faces North. He turns 45° in the clockwise direction and then another 180° in the same direction and then 45° in the anticlockwise direction. Which direction is he facing now?", opts: ["South", "East", "West", "South-East"] },
            hi: { q: "एक व्यक्ति का मुख उत्तर की ओर है। वह दक्षिणावर्त (Clockwise) दिशा में 45° मुड़ता है और फिर उसी दिशा में 180° मुड़ता है और फिर वामावर्त (Anticlockwise) दिशा में 45° मुड़ता है। अब उसका मुख किस दिशा में है?", opts: ["दक्षिण (South)", "पूर्व", "पश्चिम", "दक्षिण-पूर्व"] },
            correct: 0
        },
        {
            en: { q: "Introducing a girl, Vipin said, 'Her mother is the only daughter of my mother-in-law.' How is Vipin related to the girl?", opts: ["Father", "Brother", "Uncle", "Husband"] },
            hi: { q: "एक लड़की का परिचय देते हुए विपिन ने कहा, 'उनकी माँ मेरी सास की इकलौती बेटी हैं।' विपिन का उस लड़की से क्या संबंध है?", opts: ["पिता (Father)", "भाई", "चाचा/मामा", "पति"] },
            correct: 0
        },
        {
            en: { q: "Five boys are sitting in a circle facing the center. Ajay is to the immediate left of Ramesh. Sourav is between Ajay and Vipin. If Mohan is to the immediate right of Ramesh, who is to the immediate left of Mohan?", opts: ["Vipin", "Ajay", "Sourav", "Ramesh"] },
            hi: { q: "पांच लड़के केंद्र की ओर मुख करके एक वृत्त में बैठे हैं। अजय, रमेश के ठीक बाईं ओर है। सौरव, अजय और विपिन के बीच में है। यदि मोहन, रमेश के ठीक दाईं ओर है, तो मोहन के ठीक बाईं ओर कौन है?", opts: ["विपिन", "अजय", "सौरव", "रमेश"] },
            correct: 0
        },
        {
            en: { q: "If 'P' means '+', 'Q' means '-', 'R' means '*' and 'S' means '/', then what is the value of: 36 S 4 R 5 P 4 Q 2", opts: ["47", "42", "45", "50"] },
            hi: { q: "यदि 'P' का अर्थ '+', 'Q' का अर्थ '-', 'R' का अर्थ '*' और 'S' का अर्थ '/' है, तो मान ज्ञात कीजिए: 36 S 4 R 5 P 4 Q 2", opts: ["47", "42", "45", "50"] },
            correct: 0
        },
        {
            en: { q: "Choose the number which is different from others in the group.", opts: ["81", "64", "49", "25"] },
            hi: { q: "उस संख्या को चुनें जो समूह में दूसरों से भिन्न है।", opts: ["64 (यह वर्ग और घन दोनों है, बाकी केवल वर्ग हैं)", "81", "49", "25"] },
            correct: 0
        },
        {
            en: { q: "In a row of trees, a tree is 7th from either end of the row. How many trees are there in the row?", opts: ["13", "14", "15", "12"] },
            hi: { q: "पेड़ों की एक पंक्ति में, एक पेड़ पंक्ति के किसी भी छोर से 7वें स्थान पर है। पंक्ति में कुल कितने पेड़ हैं?", opts: ["13", "14", "15", "12"] },
            correct: 0
        },
        {
            en: { q: "If Jan 1, 2007 was Monday, what day of the week was Jan 1, 2008?", opts: ["Tuesday", "Monday", "Wednesday", "Sunday"] },
            hi: { q: "यदि 1 जनवरी 2007 को सोमवार था, तो 1 जनवरी 2008 को सप्ताह का कौन सा दिन था?", opts: ["मंगलवार (Tuesday - 2007 ordinary year है, इसलिए +1 दिन)", "सोमवार", "बुधवार", "रविवार"] },
            correct: 0
        },

        // --- General Awareness & Railway Knowledge (Set 13) ---
        {
            en: { q: "Which division of Indian Railways rolled out India's first Hydrogen-powered train under the 'Hydrogen for Heritage' initiative?", opts: ["Northern Railway", "Western Railway", "Central Railway", "Southern Railway"] },
            hi: { q: "भारतीय रेलवे के किस डिवीजन ने 'हाइड्रोजन फॉर हेरिटेज' पहल के तहत भारत की पहली हाइड्रोजन संचालित ट्रेन शुरू करने का प्रोजेक्ट लिया?", opts: ["उत्तर रेलवे (Northern Railway - Jind-Sonipat route)", "पश्चिम रेलवे", "मध्य रेलवे", "दक्षिण रेलवे"] },
            correct: 0
        },
        {
            en: { q: "Where is the Indian Railways Institute of Mechanical and Electrical Engineering (IRIMEE) located?", opts: ["Jamalpur", "Nasik", "Pune", "Secunderabad"] },
            hi: { q: "भारतीय रेलवे मैकेनिकल और इलेक्ट्रिकल इंजीनियरिंग संस्थान (IRIMEE) कहाँ स्थित है?", opts: ["जमालपुर (Jamalpur - Bihar)", "नासिक", "पुणे", "सिकंदराबाद"] },
            correct: 0
        },
        {
            en: { q: "What does the abbreviation 'RITES' stand for under the Indian Railways public sector enterprises?", opts: ["Rail India Technical and Economic Service", "Railway Infrastructure Technical and Engineering Services", "Rail India Transportation and Engineering System", "Railway Information Technology and Security"] },
            hi: { q: "भारतीय रेलवे के सार्वजनिक क्षेत्र के उपक्रमों के तहत 'RITES' का पूर्ण रूप क्या है?", opts: ["रेल इंडिया टेक्निकल एंड इकोनॉमिक सर्विस (Rail India Technical and Economic Service)", "रेलवे इन्फ्रास्ट्रक्चर टेक्निकल एंड इंजीनियरिंग सर्विसेज", "रेल इंडिया ट्रांसपोर्टेशन एंड इंजीनियरिंग सिस्टम", "रेलवे इंफॉर्मेशन टेक्नोलॉजी एंड सिक्योरिटी"] },
            correct: 0
        },
        {
            en: { q: "In which city is the North Western Railway zone headquartered?", opts: ["Jaipur", "Jodhpur", "Ajmer", "Bikaner"] },
            hi: { q: "उत्तर पश्चिम रेलवे (North Western Railway) ज़ोन का मुख्यालय किस शहर में स्थित है?", opts: ["जयपुर (Jaipur)", "जोधपुर", "अजमेर", "बीकानेर"] },
            correct: 0
        },
        {
            en: { q: "Which railway minister of India presented the first live telecast of the Railway Budget in the year 1994?", opts: ["Jaffar Sharief", "Laloo Prasad Yadav", "Mamata Banerjee", "Nitish Kumar"] },
            hi: { q: "भारत के किस रेलवे मंत्री ने वर्ष 1994 में रेलवे बजट का पहला सीधा प्रसारण (Live telecast) पेश किया था?", opts: ["जाफर शरीफ (Jaffar Sharief)", "लालू प्रसाद यादव", "ममता बनर्जी", "नीतीश कुमार"] },
            correct: 0
        },
        {
            en: { q: "What unique signaling track indicator aspect is verified by an engineering gatekeeper before opening a manned level crossing gate for road traffic?", opts: ["Gate Target/Banner Flag", "Distant Signal Line", "Warner Aspect", "Shunt Indicator"] },
            hi: { q: "सड़क यातायात के लिए मानवयुक्त लेवल क्रॉसिंग गेट (Manned LC Gate) खोलने से पहले एक इंजीनियरिंग गेटकीपर द्वारा किस अनूठे संकेतक की पुष्टि की जाती है?", opts: ["गेट टारगेट/बैनर फ्लैग (Gate Target / Banner Flag)", "डिस्टेंट सिग्नल लाइन", "वार्नर आस्पेक्ट", "शंट इंडिकेटर"] },
            correct: 0
        },
        {
            en: { q: "The computerized tracking architecture platform integrated to monitor the freight train operations and wagon movements across India is named:", opts: ["FOIS", "CRIS", "COA", "NTES"] },
            hi: { q: "मालगाड़ियों के संचालन और वैगन की गतिविधियों की निगरानी के लिए एकीकृत कम्प्यूटरीकृत ट्रैकिंग आर्किटेक्चर प्लेटफॉर्म का नाम क्या है?", opts: ["FOIS (Freight Operations Information System)", "CRIS", "COA", "NTES"] },
            correct: 0
        },
        {
            en: { q: "Which manufacturing unit of Indian Railways is dedicated to constructing specialized wheels and axles, located in Yelahanka, Bengaluru?", opts: ["Rail Wheel Factory", "Rail Wheel Plant", "Integral Coach Factory", "Diesel Locomotive Works"] },
            hi: { q: "येलहंका, बेंगलुरु में स्थित भारतीय रेलवे की कौन सी विनिर्माण इकाई विशेष रूप से पहियों और धुरों (Wheels and axles) के निर्माण के लिए समर्पित है?", opts: ["रेल व्हील फैक्ट्री (Rail Wheel Factory - RWF)", "रेल व्हील प्लांट", "इंटीग्रल कोच फैक्ट्री", "डीजल लोकोमोटिव वर्क्स"] },
            correct: 0
        },
        {
            en: { q: "What is the track width clearance dimensions of the Standard Gauge tracking design used heavily in Metro systems across India?", opts: ["1.435 m", "1.676 m", "1.000 m", "0.762 m"] },
            hi: { q: "भारत भर के मेट्रो सिस्टम में भारी उपयोग किए जाने वाले स्टैंडर गेज (Standard Gauge) ट्रैकिंग डिज़ाइन की चौड़ाई कितनी होती है?", opts: ["1.435 मीटर", "1.676 मीटर", "1.000 मीटर", "0.762 मीटर"] },
            correct: 0
        },
        {
            en: { q: "The Darjeeling Himalayan Railway, a UNESCO World Heritage site, runs on which gauge infrastructure type?", opts: ["Narrow Gauge", "Meter Gauge", "Broad Gauge", "Standard Gauge"] },
            hi: { q: "दार्जिलिंग हिमालयन रेलवे, जो एक यूनेस्को विश्व धरोहर स्थल है, किस गेज बुनियादी ढांचे पर चलती है?", opts: ["नैरोगॉज (Narrow Gauge - 2 ft)", "मीटर गेज", "ब्रॉड गेज", "स्टैंडर्ड गेज"] },
            correct: 0
        },

        // --- General Science ---
        {
            en: { q: "What is the SI unit of pressure?", opts: ["Pascal", "Newton", "Joule", "Watt"] },
            hi: { q: "दाब (Pressure) की SI इकाई क्या है?", opts: ["पास्कल (Pascal)", "न्यूटन", "जूल", "वाट"] },
            correct: 0
        },
        {
            en: { q: "Which element is found prominently inside the core structure of a Green Chlorophyll leaf cell?", opts: ["Magnesium", "Iron", "Calcium", "Zinc"] },
            hi: { q: "हरे क्लोरोफिल (Chlorophyll) पत्ती कोशिका की मुख्य संरचना के अंदर कौन सा तत्व प्रमुखता से पाया जाता है?", opts: ["मैग्नीशियम (Magnesium)", "लोहा", "कैल्शियम", "जिंक"] },
            correct: 0
        },
        {
            en: { q: "What is the scientific chemical formula of Washing Soda?", opts: ["Na2CO3.10H2O", "NaHCO3", "NaOH", "CaCO3"] },
            hi: { q: "वाशिंग सोडा (Washing Soda) का वैज्ञानिक रासायनिक सूत्र क्या है?", opts: ["Na2CO3.10H2O (Sodium Carbonate)", "NaHCO3", "NaOH", "CaCO3"] },
            correct: 0
        },
        {
            en: { q: "Which endocrine gland inside the human anatomy controls the master biological metabolic rate and is shaped like a butterfly?", opts: ["Thyroid Gland", "Pituitary Gland", "Adrenal Gland", "Pancreas"] },
            hi: { q: "मानव शरीर के अंदर कौन सी अंतःस्रावी ग्रंथि (Endocrine gland) जैविक चयापचय दर (Metabolic rate) को नियंत्रित करती है और तितली के आकार की होती है?", opts: ["थायराइड ग्रंथि (Thyroid Gland)", "पिट्यूटरी ग्रंथि", "एड्रिनल ग्रंथि", "अग्न्याशय"] },
            correct: 0
        },
        {
            en: { q: "The optical phenomenon 'Mirage' observed in hot deserts is primarily caused by which action?", opts: ["Total Internal Reflection", "Scattering", "Diffraction", "Interference"] },
            hi: { q: "गर्म रेगिस्तानों में देखी जाने वाली ऑप्टिकल घटना 'मृगतृष्णा' (Mirage) मुख्य रूप से किस क्रिया के कारण होती है?", opts: ["पूर्ण आंतरिक परावर्तन (Total Internal Reflection)", "प्रकीर्णन", "विवर्तन", "व्यतिकरण"] },
            correct: 0
        },

        // --- Computer Knowledge ---
        {
            en: { q: "Which networking hardware element routes electronic data packet vectors strictly across physical MAC addresses within a Local Area Network?", opts: ["Network Switch", "Router", "Hub", "Gateway"] },
            hi: { q: "कौन सा नेटवर्किंग हार्डवेयर तत्व लोकल एरिया नेटवर्क (LAN) के भीतर भौतिक मैक (MAC) पते पर इलेक्ट्रॉनिक डेटा पैकेट वेक्टर को रूट करता है?", opts: ["नेटवर्क स्विच (Network Switch)", "राउटर", "हब", "गेटवे"] },
            correct: 0
        },
        {
            en: { q: "What malicious payload is disguised intentionally as a legitimate benign file tool but drops backdoors upon execution?", opts: ["Trojan Horse", "Computer Worm", "Spyware", "Rootkit"] },
            hi: { q: "कौन सा दुर्भावनापूर्ण पेलोड जानबूझकर एक वैध सौम्य फ़ाइल टूल के रूप में प्रच्छन्न होता है लेकिन निष्पादन पर बैकडोर खोल देता है?", opts: ["ट्रोजन हॉर्स (Trojan Horse)", "कंप्यूटर वर्म", "स्पाइवेयर", "रूटकिट"] },
            correct: 0
        },
        {
            en: { q: "Which operational utility tool inside Microsoft Windows is used to completely fix logical file system errors on storage sectors?", opts: ["CHKDSK", "Disk Cleanup", "Defragmenter", "Task Scheduler"] },
            hi: { q: "माइक्रोसॉफ्ट विंडोज के अंदर कौन सारेशनल यूटिलिटी टूल स्टोरेज सेक्टरों पर लॉजिकल फाइल सिस्टम त्रुटियों को पूरी तरह से ठीक करने के लिए उपयोग किया जाता है?", opts: ["CHKDSK (Check Disk)", "डिस्क क्लीनअप", "डीफ़्रेग्मेंटर", "टास्क शेड्यूलर"] },
            correct: 0
        },
        {
            en: { q: "What is the full expansion text form of the 'URL' string locator in internet web architectures?", opts: ["Uniform Resource Locator", "Universal Radio Link", "Unified Register Location", "Universal Resource Line"] },
            hi: { q: "इंटरनेट वेब आर्किटेक्चर में 'URL' स्ट्रिंग लोकेटर का पूर्ण विस्तारित रूप क्या है?", opts: ["यूनिफ़ॉर्म रिसोर्स लोकेटर (Uniform Resource Locator)", "यूनिवर्सल रेडियो लिंक", "यूनिफाइड रजिस्टर लोकेशन", "यूनिवर्सल रिसोर्स लाइन"] },
            correct: 0
        },
        {
            en: { q: "Which architectural scheduling state allows a CPU process to temporarily halt and wait for external peripheral hardware I/O responses?", opts: ["Blocked / Waiting State", "Ready State", "Running State", "Terminated State"] },
            hi: { q: "कौन सी आर्किटेक्चरल शेड्यूलिंग स्थिति एक सीपीयू प्रक्रिया को अस्थायी रूप से रोकने और बाहरी परिधीय हार्डवेयर आई/ओ (I/O) प्रतिक्रियाओं की प्रतीक्षा करने की अनुमति देती है?", opts: ["ब्लॉक / वेटिंग स्टेट (Blocked / Waiting State)", "रेडी स्टेट", "रनिंग स्टेट", "टर्मिनेटेड स्टेट"] },
            correct: 0
        },

        // --- Mixed Core Topics ---
        {
            en: { q: "A man buys a cycle for ₹1400 and sells it at a loss of 15%. What is the selling price of the cycle?", opts: ["₹1190", "₹1200", "₹1160", "₹1000"] },
            hi: { q: "एक व्यक्ति ₹1400 में एक साइकिल खरीदता है और उसे 15% की हानि पर बेचता है। साइकिल का विक्रय मूल्य क्या है?", opts: ["₹1190", "₹1200", "₹1160", "₹1000"] },
            correct: 0
        },
        {
            en: { q: "If 'MIND' is coded as 'KGLB', then how is 'DIAGRAM' coded in that system?", opts: ["BGYEPYK", "BGYERYK", "BGYEPYJ", "AGYEPYK"] },
            hi: { q: "यदि 'MIND' को 'KGLB' के रूप में कूटबद्ध किया जाता है, तो उस प्रणाली में 'DIAGRAM' को कैसे कूटबद्ध किया जाएगा?", opts: ["BGYEPYK (प्रत्येक अक्षर से -2)", "BGYERYK", "BGYEPYJ", "AGYEPYK"] },
            correct: 0
        },
        {
            en: { q: "The difference between simple and compound interests compounded annually on a certain sum of money for 2 years at 4% per annum is ₹1. The sum is:", opts: ["₹625", "₹600", "₹650", "₹500"] },
            hi: { q: "एक निश्चित राशि पर 2 वर्ष के लिए 4% वार्षिक दर से वार्षिक रूप से संयोजित साधारण और चक्रवृद्धि ब्याज का अंतर ₹1 है। वह राशि कितनी है?", opts: ["₹625", "₹600", "₹650", "₹500"] },
            correct: 0
        },
        {
            en: { q: "A boy rides his bicycle 10 km South, turns Right and rides 5 km, turns Right and rides 10 km, turns Left and rides 10 km. How far is he from the starting point?", opts: ["15 km", "10 km", "5 km", "20 km"] },
            hi: { q: "एक लड़का अपनी साइकिल से 10 किमी दक्षिण की ओर जाता है, दाईं ओर मुड़कर 5 किमी जाता है, फिर दाईं ओर मुड़कर 10 किमी जाता है, फिर बाईं ओर मुड़कर 10 किमी जाता है। वह प्रारंभिक बिंदु से कितनी दूर है?", opts: ["15 किमी", "10 किमी", "5 किमी", "20 किमी"] },
            correct: 0
        },
        {
            en: { q: "Find the volume of a sphere whose surface area is 154 sq.cm.", opts: ["179.67 cubic cm", "308 cubic cm", "154 cubic cm", "224.33 cubic cm"] },
            hi: { q: "एक गोले का आयतन ज्ञात कीजिए जिसका पृष्ठीय क्षेत्रफल 154 वर्ग सेमी है।", opts: ["179.67 घन सेमी", "308 घन सेमी", "154 घन सेमी", "224.33 घन सेमी"] },
            correct: 0
        },
        {
            en: { q: "Which organic cell structure handles synthesis of lipid layers and steroids, without ribosome alignment?", opts: ["Smooth Endoplasmic Reticulum", "Rough Endoplasmic Reticulum", "Golgi Body", "Lysosome"] },
            hi: { q: "कौन सी कार्बनिक कोशिका संरचना राइबोसोम संरेखण के बिना, लिपिड परतों और स्टेरॉयड के संश्लेषण को संभालती है?", opts: ["चिकनी अंतःप्रद्रव्यी जालिका (Smooth Endoplasmic Reticulum - SER)", "खुरदरी अंतःप्रद्रव्यी जालिका", "गोल्गी काय", "लाइसोसोम"] },
            correct: 0
        },
        {
            en: { q: "What is the key chemical component in LPG cylinders used for odor detection in case of leaks?", opts: ["Ethyl Mercaptan", "Methyl Mercaptan", "Propane Gas", "Butane Solution"] },
            hi: { q: "एलपीजी सिलेंडरों में रिसाव के मामले में गंध का पता लगाने के लिए उपयोग किया जाने वाला मुख्य रासायनिक घटक क्या है?", opts: ["एथिल मर्कैप्टान (Ethyl Mercaptan)", "मिथाइल मर्कैप्टान", "प्रोपेन गैस", "ब्यूटेन सॉल्यूशन"] },
            correct: 0
        },
        {
            en: { q: "If the surface area of a cube is 150 sq.cm, then find its volume.", opts: ["125 cubic cm", "150 cubic cm", "100 cubic cm", "216 cubic cm"] },
            hi: { q: "यदि एक घन का पृष्ठीय क्षेत्रफल 150 वर्ग सेमी है, तो उसका आयतन ज्ञात कीजिए।", opts: ["125 घन सेमी", "150 घन सेमी", "100 घन सेमी", "216 घन सेमी"] },
            correct: 0
        },
        {
            en: { q: "Which Fundamental Right in the Indian Constitution cannot be suspended even during a National Emergency?", opts: ["Article 20 and 21", "Article 19", "Article 14", "Article 32"] },
            hi: { q: "भारतीय संविधान में कौन सा मौलिक अधिकार राष्ट्रीय आपातकाल (National Emergency) के दौरान भी निलंबित नहीं किया जा सकता है?", opts: ["अनुच्छेद 20 और 21 (Protection in respect of conviction & Right to life)", "अनुच्छेद 19", "अनुच्छेद 14", "अनुच्छेद 32"] },
            correct: 0
        },
        {
            en: { q: "Which Indian river passes through the rift valley ecosystem between Vindhya and Satpura ranges?", opts: ["Narmada", "Tapti", "Godavari", "Mahanadi"] },
            hi: { q: "कौन सी भारतीय नदी विंध्य और सतपुड़ा श्रेणियों के बीच भ्रंश घाटी (Rift valley) पारिस्थितिकी तंत्र से होकर गुजरती है?", opts: ["नर्मदा (Narmada River)", "ताप्ती", "गोदावरी", "महानदी"] },
            correct: 0
        },
        // --- Quantitative Aptitude (Set 14) ---
        {
            en: { q: "If the radius of a sphere is doubled, then find the percentage increase in its surface area.", opts: ["300%", "400%", "200%", "100%"] },
            hi: { q: "यदि एक गोले की त्रिज्या दोगुनी कर दी जाए, तो उसके पृष्ठीय क्षेत्रफल में प्रतिशत वृद्धि ज्ञात कीजिए।", opts: ["300%", "400%", "200%", "100%"] },
            correct: 0
        },
        {
            en: { q: "A train 300 m long crosses a platform 900 m long in 1 minute. Find the speed of the train in km/h.", opts: ["72 km/h", "60 km/h", "54 km/h", "90 km/h"] },
            hi: { q: "300 मीटर लंबी एक ट्रेन 900 मीटर लंबे प्लेटफॉर्म को 1 मिनट में पार करती है। किमी/घंटा में ट्रेन की गति ज्ञात कीजिए।", opts: ["72 किमी/घंटा", "60 किमी/घंटा", "54 किमी/घंटा", "90 किमी/घंटा"] },
            correct: 0
        },
        {
            en: { q: "Find the compound interest on ₹12,000 for 9 months at 20% per annum, interest being compounded quarterly.", opts: ["₹1,891.50", "₹1,800", "₹1,920", "₹1,860"] },
            hi: { q: "₹12,000 पर 9 महीने के लिए 20% वार्षिक दर से चक्रवृद्धि ब्याज ज्ञात कीजिए, जबकि ब्याज त्रैमासिक (Quarterly) रूप से संयोजित होता है।", opts: ["₹1,891.50", "₹1,800", "₹1,920", "₹1,860"] },
            correct: 0
        },
        {
            en: { q: "If x:y = 3:5 and y:z = 2:3, then find x:y:z.", opts: ["6:10:15", "3:5:3", "6:5:15", "3:10:15"] },
            hi: { q: "यदि x:y = 3:5 और y:z = 2:3 है, तो x:y:z ज्ञात कीजिए।", opts: ["6:10:15", "3:5:3", "6:5:15", "3:10:15"] },
            correct: 0
        },
        {
            en: { q: "If x + 1/x = 6, then find the value of x^2 + 1/x^2.", opts: ["34", "36", "38", "32"] },
            hi: { q: "यदि x + 1/x = 6 है, तो x^2 + 1/x^2 का मान ज्ञात कीजिए।", opts: ["34", "36", "38", "32"] },
            correct: 0
        },
        {
            en: { q: "A merchant has 1000 kg of sugar, part of which he sells at 8% profit and the rest at 18% profit. He gains 14% on the whole. Find the quantity sold at 18% profit.", opts: ["600 kg", "400 kg", "500 kg", "640 kg"] },
            hi: { q: "एक व्यापारी के पास 1000 किग्रा चीनी है, जिसका एक हिस्सा वह 8% लाभ पर और शेष 18% लाभ पर बेचता है। उसे कुल मिलाकर 14% का लाभ होता है। 18% लाभ पर बेची गई मात्रा ज्ञात कीजिए।", opts: ["600 किग्रा", "400 किग्रा", "500 किग्रा", "640 किग्रा"] },
            correct: 0
        },
        {
            en: { q: "The diagonal of a rectangle is 17 cm and its length is 15 cm. Find the area of the rectangle.", opts: ["120 sq.cm", "136 sq.cm", "90 sq.cm", "60 sq.cm"] },
            hi: { q: "एक आयत का विकर्ण 17 सेमी है और इसकी लंबाई 15 सेमी है। आयत का क्षेत्रफल ज्ञात कीजिए।", opts: ["120 वर्ग सेमी", "136 वर्ग सेमी", "90 वर्ग सेमी", "60 वर्ग सेमी"] },
            correct: 0
        },
        {
            en: { q: "The radii of two cylinders are in the ratio 2:3 and their heights are in the ratio 5:3. Find the ratio of their volumes.", opts: ["20:27", "4:9", "10:9", "20:9"] },
            hi: { q: "दो बेलनों की त्रिज्याएँ 2:3 के अनुपात में हैं और उनकी ऊँचाइयाँ 5:3 के अनुपात में हैं। उनके आयतनों का अनुपात ज्ञात कीजिए।", opts: ["20:27", "4:9", "10:9", "20:9"] },
            correct: 0
        },
        {
            en: { q: "A sum of money amounts to ₹4624 in 2 years and to ₹4913 in 3 years on compound interest. Find the rate of interest per annum.", opts: ["6.25%", "6%", "5%", "7.5%"] },
            hi: { q: "कोई धनराशि चक्रवृद्धि ब्याज पर 2 वर्षों में ₹4624 और 3 वर्षों में ₹4913 हो जाती है। वार्षिक ब्याज दर ज्ञात कीजिए।", opts: ["6.25%", "6%", "5%", "7.5%"] },
            correct: 0
        },
        {
            en: { q: "The angle of elevation of the top of a tower from a certain point on the ground is 30°. On walking 40m towards the tower, the angle becomes 60°. Find the height of the tower.", opts: ["20*sqrt(3) m", "40 m", "20 m", "30*sqrt(3) m"] },
            hi: { q: "जमीन पर एक निश्चित बिंदु से एक मीनार के शिखर का उन्नयन कोण 30° है। मीनार की ओर 40 मीटर चलने पर कोण 60° हो जाता है। मीनार की ऊंचाई ज्ञात कीजिए।", opts: ["20*sqrt(3) मीटर", "40 मीटर", "20 मीटर", "30*sqrt(3) मीटर"] },
            correct: 0
        },

        // --- Reasoning Ability (Set 14) ---
        {
            en: { q: "If 'DELHI' is coded as '73541' and 'CALCUTTA' as '82589662', how can 'CALICUT' be coded?", opts: ["8251896", "8251892", "8251796", "8521896"] },
            hi: { q: "यदि 'DELHI' को '73541' और 'CALCUTTA' को '82589662' के रूप में कूटबद्ध किया जाता है, तो 'CALICUT' को कैसे कूटबद्ध किया जा सकता है?", opts: ["8251896", "8251892", "8251796", "8521896"] },
            correct: 0
        },
        {
            en: { q: "Find the missing term in the sequence: 1, 4, 9, 16, 25, 36, ?", opts: ["49", "48", "64", "50"] },
            hi: { q: "अनुक्रम में लुप्त पद ज्ञात कीजिए: 1, 4, 9, 16, 25, 36, ?", opts: ["49 (यह पूर्ण वर्ग संख्याओं की श्रृंखला है)", "48", "64", "50"] },
            correct: 0
        },
        {
            en: { q: "Statements: All columns are rows. All rows are grids. Conclusions: I. All columns are grids. II. Some grids are columns.", opts: ["Both I and II follow", "Only I follows", "Only II follows", "Neither I nor II follows"] },
            hi: { q: "कथन: सभी कॉलम रो (rows) हैं। सभी रो ग्रिड हैं। निष्कर्ष: I. सभी कॉलम ग्रिड हैं। II. कुछ ग्रिड कॉलम हैं।", opts: ["I और II दोनों अनुसरण करते हैं", "केवल I अनुसरण करता है", "केवल II अनुसरण करता है", "न तो I और न ही II अनुसरण करता है"] },
            correct: 0
        },
        {
            en: { q: "One morning after sunrise, Suresh was standing facing a pole. The shadow of the pole fell exactly to his right. To which direction was he facing?", opts: ["South", "North", "East", "West"] },
            hi: { q: "एक सुबह सूर्योदय के बाद, सुरेश एक खंभे के सामने खड़ा था। खंभे की छाया उसके ठीक दाईं ओर पड़ी। उसका मुख किस दिशा की ओर था?", opts: ["दक्षिण (South)", "उत्तर", "पूर्व", "पश्चिम"] },
            correct: 0
        },
        {
            en: { q: "Pointing to a photograph, a man said, 'I have no brother or sister but that man's father is my father's son.' Whose photograph was it?", opts: ["His son's", "His own", "His father's", "His nephew's"] },
            hi: { q: "एक तस्वीर की ओर इशारा करते हुए एक व्यक्ति ने कहा, 'मेरा कोई भाई या बहन नहीं है, लेकिन उस व्यक्ति के पिता मेरे पिता के बेटे हैं।' वह तस्वीर किसकी थी?", opts: ["उसके बेटे की (His son's)", "उसकी अपनी", "उसके पिता की", "उसके भतीजे की"] },
            correct: 0
        },
        {
            en: { q: "Eight executives J, K, L, M, N, O, P and Q are sitting around a circular table facing the center. J is second to the right of P who is third to the right of K. M is second to the left of O who is sits between P and J. L is not a neighbor of K or N. Who is to the immediate left of N?", opts: ["J", "K", "Q", "P"] },
            hi: { q: "आठ कार्यकारी J, K, L, M, N, O, P और Q एक वृत्ताकार मेज के चारों ओर केंद्र की ओर मुख करके बैठे हैं। J, P के दाईं ओर दूसरा है, जो K के दाईं ओर तीसरा है। M, O के बाईं ओर दूसरा है, जो P और J के बीच बैठा है। L, K या N का पड़ोसी नहीं है। N के ठीक बाईं ओर कौन है?", opts: ["J", "K", "Q", "P"] },
            correct: 0
        },
        {
            en: { q: "If 'A' denotes '+', 'B' denotes '-', 'C' denotes '*' and 'D' denotes '/', then evaluate: 18 C 14 A 6 B 16 D 4", opts: ["254", "258", "248", "262"] },
            hi: { q: "यदि 'A' का अर्थ '+', 'B' का अर्थ '-', 'C' का अर्थ '*' और 'D' का अर्थ '/' है, तो मान ज्ञात कीजिए: 18 C 14 A 6 B 16 D 4", opts: ["254", "258", "248", "262"] },
            correct: 0
        },
        {
            en: { q: "Choose the word which is least like the other words in the group.", opts: ["Geometry", "Algebra", "Trigonometry", "Mathematics"] },
            hi: { q: "उस शब्द को चुनें जो समूह के अन्य शब्दों से सबसे कम मिलता-जुलता है।", opts: ["ज्यामिति", "बीजगणित", "त्रिकोणमिति", "गणित (Mathematics - बाकी सभी इसकी शाखाएं हैं)"] },
            correct: 3
        },
        {
            en: { q: "In a class of 45 students, Akhil's rank is 18th from the top. What is his rank from the bottom?", opts: ["28th", "27th", "29th", "26th"] },
            hi: { q: "45 छात्रों की एक कक्षा में, अखिल का स्थान ऊपर से 18वाँ है। नीचे से उसका स्थान कौन सा है?", opts: ["28वां (Formula: 45 - 18 + 1)", "27वां", "29वां", "26वां"] },
            correct: 0
        },
        {
            en: { q: "If the day before yesterday was Thursday, what day will it be day after tomorrow?", opts: ["Monday", "Sunday", "Tuesday", "Wednesday"] },
            hi: { q: "यदि परसों (day before yesterday) गुरुवार था, तो अगले परसों (day after tomorrow) कौन सा दिन होगा?", opts: ["सोमवार (Monday)", "रविवार", "मंगलवार", "बुधवार"] },
            correct: 0
        },

        // --- General Awareness & Railway Knowledge (Set 14) ---
        {
            en: { q: "Which station is historically notable for being the starting point of the first passenger train in India in 1853?", opts: ["Bori Bunder", "Thane", "Byculla", "Dadar"] },
            hi: { q: "1853 में भारत की पहली यात्री ट्रेन का प्रारंभिक बिंदु होने के लिए कौन सा स्टेशन ऐतिहासिक रूप से प्रसिद्ध है?", opts: ["बोरी बंदर (Bori Bunder - Mumbai)", "ठाणे", "भायखला", "दादर"] },
            correct: 0
        },
        {
            en: { q: "Where is the Indian Railways Institute of Signal Engineering and Telecommunications (IRISET) located?", opts: ["Secunderabad", "Pune", "Nasik", "Vadodara"] },
            hi: { q: "भारतीय रेलवे सिग्नल इंजीनियरिंग और दूरसंचार संस्थान (IRISET) कहाँ स्थित है?", opts: ["सिकंदराबाद (Secunderabad)", "पुणे", "नासिक", "वडोदरा"] },
            correct: 0
        },
        {
            en: { q: "What does the acronym 'CRIS' stand for in the IT infrastructure wing of Indian Railways?", opts: ["Centre for Railway Information Systems", "Central Rail Information Services", "Core Railway Integrated Software", "Council for Railway Infrastructure Support"] },
            hi: { q: "भारतीय रेलवे के आईटी इंफ्रास्ट्रक्चर विंग में 'CRIS' का पूर्ण रूप क्या है?", opts: ["सेंटर फॉर रेलवे इंफॉर्मेशन सिस्टम्स (Centre for Railway Information Systems)", "सेंट्रल रेल इंफॉर्मेशन सर्विसेज", "कोर रेलवे इंटीग्रेटेड सॉफ्टवेयर", "काउंसिल फॉर रेलवे इंफ्रास्ट्रक्चर सपोर्ट"] },
            correct: 0
        },
        {
            en: { q: "In which city is the North Eastern Railway zone headquartered?", opts: ["Gorakhpur", "Hajipur", "Guwahati", "Kolkata"] },
            hi: { q: "पूर्वोत्तर रेलवे (North Eastern Railway) ज़ोन का मुख्यालय किस शहर में स्थित है?", opts: ["गोरखपुर (Gorakhpur)", "हाजीपुर", "गुवाहाटी", "कोलकाता"] },
            correct: 0
        },
        {
            en: { q: "The absolute longest platform in India, located at Shree Siddharoodha Swamiji Hubballi Junction, measures approximately:", opts: ["1505 m", "1366 m", "1100 m", "1225 m"] },
            hi: "श्री सिद्धारूढ़ स्वामीजी हुब्बल्ली जंक्शन पर स्थित भारत के सबसे लंबे रेलवे प्लेटफॉर्म की लंबाई लगभग कितनी है?", opts: ["1505 मीटर", "1366 मीटर", "1100 मीटर", "1225 मीटर"] ,
            correct: 0
        },
        {
            en: { q: "What signaling aspect is indicated to a loco pilot when a warning repeater signal shows a single fixed green illumination?", opts: ["Proceed with caution to find stop signal", "Line clear, proceed at maximum speed", "Stop dead at signal", "Shunt operation authorized"] },
            hi: { q: "लोको पायलट को क्या सिग्नल पहलू संकेतित होता है जब एक वार्निंग रिपीटर सिग्नल सिंगल फिक्स्ड ग्रीन लाइट दिखाता है?", opts: ["स्टॉप सिग्नल खोजने के लिए सावधानी से आगे बढ़ें", "लाइन क्लियर है, अधिकतम गति से आगे बढ़ें (Line clear, proceed)", "सिग्नल पर तुरंत रुकें", "शंट ऑपरेशन अधिकृत है"] },
            correct: 1
        },
        {
            en: { q: "Which Indian Railways corporate entity manages public catering, hospitality, and internet ticketing services?", opts: ["IRCTC", "CONCOR", "RITES", "RVNL"] },
            hi: { q: "भारतीय रेलवे की कौन सी कॉर्पोरेट इकाई सार्वजनिक खान-पान, आतिथ्य (hospitality) और इंटरनेट टिकटिंग सेवाओं का प्रबंधन करती है?", opts: ["IRCTC (Indian Railway Catering and Tourism Corporation)", "CONCOR", "RITES", "RVNL"] },
            correct: 0
        },
        {
            en: { q: "Which historical production workshop of Indian Railways holds the record for being the oldest manufacturing unit, established in 1862?", opts: ["Jamalpur Workshop", "Chittaranjan Locomotive Works", "Integral Coach Factory", "Perambur Workshop"] },
            hi: { q: "1862 में स्थापित भारतीय रेलवे की कौन सी ऐतिहासिक उत्पादन कार्यशाला (Workshop) सबसे पुरानी विनिर्माण इकाई होने का रिकॉर्ड रखती है?", opts: ["जमालपुर कार्यशाला (Jamalpur Workshop - Bihar)", "चित्तरंजन लोकोमोटिव वर्क्स", "इंटीग्रल कोच फैक्ट्री", "पेराम्बूर कार्यशाला"] },
            correct: 0
        },
        {
            en: { q: "The narrow gauge configuration width of '762 mm' is classified under which tracking layout division?", opts: ["Narrow Gauge", "Broad Gauge", "Meter Gauge", "Standard Gauge"] },
            hi: { q: "भारतीय रेलवे में '762 मिमी' की नैरोगेज कॉन्फ़िगरेशन चौड़ाई को किस ट्रैकिंग लेआउट श्रेणी के तहत वर्गीकृत किया गया है?", opts: ["नैरोगेज (Narrow Gauge)", "ब्रॉड गेज", "मीटर गेज", "स्टैंडर्ड गेज"] },
            correct: 0
        },
        {
            en: { q: "The famous Kangra Valley Railway layout runs across which northern mountain range territory of India?", opts: ["Himachal Pradesh", "Jammu & Kashmir", "Uttarakhand", "Sikkim"] },
            hi: { q: "प्रसिद्ध कांगड़ा घाटी रेलवे (Kangra Valley Railway) मार्ग भारत के किस उत्तरी पर्वतीय क्षेत्र से होकर गुजरता है?", opts: ["हिमाचल प्रदेश (Himachal Pradesh)", "जम्मू और कश्मीर", "उत्तराखंड", "सिक्किम"] },
            correct: 0
        },

        // --- General Science ---
        {
            en: { q: "What is the SI unit of electric current?", opts: ["Ampere", "Volt", "Ohm", "Watt"] },
            hi: { q: "विद्युत धारा (Electric current) की SI इकाई क्या है?", opts: ["एम्पीयर (Ampere)", "वोल्ट", "ओम", "वाट"] },
            correct: 0
        },
        {
            en: { q: "Which element is found abundantly inside the chemical composition of bleaching powder?", opts: ["Chlorine", "Fluorine", "Iodine", "Bromine"] },
            hi: { q: "ब्लीचिंग पाउडर (Bleaching powder) के रासायनिक संगठन में कौन सा तत्व प्रचुर मात्रा में पाया जाता है?", opts: ["क्लोरीन (Chlorine)", "फ्लोरीन", "आयोडीन", "ब्रोमीन"] },
            correct: 0
        },
        {
            en: { q: "What is the scientific chemical name of Baking Soda?", opts: ["Sodium Bicarbonate", "Sodium Carbonate", "Sodium Hydroxide", "Sodium Chloride"] },
            hi: { q: "बेकिंग सोडा (Baking Soda) का वैज्ञानिक रासायनिक नाम क्या है?", opts: ["सोडियम बाइकार्बोनेट (Sodium Bicarbonate - NaHCO3)", "सोडियम कार्बोनेट", "सोडियम हाइड्रोक्साइड", "सोडियम क्लोराइड"] },
            correct: 0
        },
        {
            en: { q: "Which layer of the skin inside the human anatomy does not contain any blood vessels?", opts: ["Epidermis", "Dermis", "Hypodermis", "Stratum corneum"] },
            hi: { q: "मानव शरीर रचना में त्वचा की किस परत (Layer of skin) में कोई रक्त वाहिकाएं (Blood vessels) नहीं होती हैं?", opts: ["एपिडर्मिस (Epidermis - outermost layer)", "डर्मिस", "हाइपोडर्मिस", "स्ट्रॅटम कॉर्नियम"] },
            correct: 0
        },
        {
            en: { q: "The phenomenon of the blue color of the sky is majorly caused due to which property of light?", opts: ["Scattering", "Reflection", "Refraction", "Dispersion"] },
            hi: { q: "आकाश के नीले रंग की घटना मुख्य रूप से प्रकाश के किस गुण के कारण होती है?", opts: ["प्रकीर्णन (Scattering of light)", "परावर्तन", "अपवर्तन", "वर्ण-विक्षेपण"] },
            correct: 0
        },

        // --- Computer Knowledge ---
        {
            en: { q: "Which hardware layer inside network architectures uses MAC addresses to switch incoming frame frames?", opts: ["Data Link Layer", "Physical Layer", "Network Layer", "Transport Layer"] },
            hi: { q: "नेटवर्क आर्किटेक्चर के अंदर कौन सी हार्डवेयर लेयर इनकमिंग फ्रेम को स्विच करने के लिए मैक (MAC) पते का उपयोग करती है?", opts: ["डेटा लिंक लेयर (Data Link Layer - Layer 2)", "भौतिक लेयर", "नेटवर्क लेयर", "ट्रांसपोर्ट लेयर"] },
            correct: 0
        },
        {
            en: { q: "What type of computer virus payload records every single keystroke made by a user to steal passwords?", opts: ["Keylogger", "Ransomware", "Rootkit", "Spyware"] },
            hi: { q: "पासवर्ड चुराने के लिए उपयोगकर्ता द्वारा दबाई गई प्रत्येक कुंजी (Keystroke) को रिकॉर्ड करने वाले कंप्यूटर वायरस पेलोड को क्या कहा जाता है?", opts: ["कीलॉगर (Keylogger)", "रैनसमवेयर", "रूटकिट", "स्पाइवेयर"] },
            correct: 0
        },
        {
            en: { q: "In Microsoft Windows systems, which shortcut key sequence opens the advanced Run dialogue window?", opts: ["Windows Key + R", "Windows Key + E", "Ctrl + Shift + Esc", "Alt + F2"] },
            hi: { q: "माइक्रोसोफ्ट विंडोज सिस्टम में, कौन सा शॉर्टकट कुंजी संयोजन एडवांस्ड 'Run' डायलॉग विंडो खोलता है?", opts: ["Windows Key + R", "Windows Key + E", "Ctrl + Shift + Esc", "Alt + F2"] },
            correct: 0
        },
        {
            en: { q: "What does the abbreviation 'FTP' stand for in internet network file data transfers?", opts: ["File Transfer Protocol", "Fast Transmission Protocol", "File Tracking Procedure", "Format Transfer Protocol"] },
            hi: { q: "इंटरनेट नेटवर्क फ़ाइल डेटा ट्रांसफर में 'FTP' का क्या अर्थ है?", opts: ["फाइल ट्रांसफर प्रोटोकॉल (File Transfer Protocol)", "फास्ट ट्रांसमिशन प्रोटोकॉल", "फाइल ट्रैकिंग प्रोसीजर", "फॉर्मेट ट्रांसफर प्रोटोकॉल"] },
            correct: 0
        },
        {
            en: { q: "Which central core management module inside OS architectures executes CPU scheduling operations?", opts: ["Kernel", "Shell", "Desktop Manager", "Driver Engine"] },
            hi: { q: "ओएस आर्किटेक्चर के अंदर कौन सा मुख्य कोर मैनेजमेंट मॉड्यूल सीपीयू शेड्यूलिंग ऑपरेशन्स को निष्पादित करता है?", opts: ["कर्नेल (Kernel)", "शेल", "डेस्कटॉप मैनेजर", "ड्राइवर इंजन"] },
            correct: 0
        },

        // --- Mixed Core Topics ---
        {
            en: { q: "By selling a book for ₹115.20, a man loses 10%. At what price should he sell it to gain 5%?", opts: ["₹134.40", "₹138.50", "₹125", "₹130"] },
            hi: { q: "एक किताब को ₹115.20 में बेचने पर एक व्यक्ति को 10% की हानि होती है। 5% का लाभ प्राप्त करने के लिए उसे इसे किस मूल्य पर बेचना चाहिए?", opts: ["₹134.40", "₹138.50", "₹125", "₹130"] },
            correct: 0
        },
        {
            en: { q: "If 'COACH' is coded as 'XLZXS', then how is 'PLAYER' coded in that system?", opts: ["KOBBVI", "KOBBIV", "KOABVI", "KPBBVI"] },
            hi: { q: "यदि 'COACH' को 'XLZXS' के रूप में कूटबद्ध किया जाता है, तो उस प्रणाली में 'PLAYER' को कैसे कूटबद्ध किया जाएगा?", opts: ["KOBBVI (विपरीत अक्षरों का कूट)", "KOBBIV", "KOABVI", "KPBBVI"] },
            correct: 0
        },
        {
            en: { q: "A certain sum of money amounts to ₹756 in 2 years and to ₹873 in 3.5 years at simple interest. Find the rate of interest per annum.", opts: ["13%", "12%", "11%", "10%"] },
            hi: { q: "एक निश्चित धनराशि साधारण ब्याज पर 2 वर्षों में ₹756 और 3.5 वर्षों में ₹873 हो जाती है। वार्षिक ब्याज दर ज्ञात कीजिए।", opts: ["13%", "12%", "11%", "10%"] },
            correct: 0
        },
        {
            en: { q: "A man walks 6 km North, turns Right and walks 4 km, again turns Right and walks 5 km. Which direction is he facing now?", opts: ["South", "North", "East", "West"] },
            hi: { q: "एक व्यक्ति 6 किमी उत्तर की ओर चलता है, दाईं ओर मुड़कर 4 किमी चलता है, फिर से दाईं ओर मुड़कर 5 किमी चलता है। अब उसका मुख किस दिशा में है?", opts: ["दक्षिण (South)", "उत्तर", "पूर्व", "पश्चिम"] },
            correct: 0
        },
        {
            en: { q: "Find the curved surface area of a cylinder whose radius is 7 cm and height is 10 cm.", opts: ["440 sq.cm", "220 sq.cm", "154 sq.cm", "308 sq.cm"] },
            hi: { q: "एक बेलन का वक्र पृष्ठीय क्षेत्रफल (CSA) ज्ञात कीजिए जिसकी त्रिज्या 7 सेमी और ऊंचाई 10 सेमी है।", opts: ["440 वर्ग सेमी", "220 वर्ग सेमी", "154 वर्ग सेमी", "308 वर्ग सेमी"] },
            correct: 0
        },
        {
            en: { q: "Which biological cell organelle processes and packages protein macromolecules into vesicles before export?", opts: ["Golgi Apparatus", "Lysosome", "Ribosome", "Centrosome"] },
            hi: { q: "कौन सा जैविक कोशिका अंगक प्रोटीन मैक्रोमोलेक्यूल्स को निर्यात करने से पहले वेसिकल्स में संसाधित (processes) आणि पॅकेज करता है?", opts: ["गोल्गी उपकरण (Golgi Apparatus)", "लाइसोसोम", "राइबोसोम", "सेंट्रोसोम"] },
            correct: 0
        },
        {
            en: { q: "What is the primary chemical gas component integrated into standard commercial gas lighters?", opts: ["Butane", "Propane", "Methane", "Ethane"] },
            hi: { q: "मानक व्यावसायिक गैस लाइटरों में एकीकृत प्राथमिक रासायनिक गैस घटक क्या है?", opts: ["ब्यूटेन (Butane)", "प्रोपेन", "मीथेन", "इथेन"] },
            correct: 0
        },
        {
            en: { q: "If the height of a cylinder is doubled keeping radius same, what is the ratio of new volume to original volume?", opts: ["2:1", "1:2", "4:1", "1:1"] },
            hi: { q: "यदि त्रिज्या को समान रखते हुए एक बेलन की ऊंचाई दोगुनी कर दी जाए, तो नए आयतन का मूल आयतन से अनुपात क्या होगा?", opts: ["2:1", "1:2", "4:1", "1:1"] },
            correct: 0
        },
        {
            en: { q: "Who was the founder of the famous slave dynasty (Mamluk Dynasty) of the Delhi Sultanate?", opts: ["Qutb-ud-din Aibak", "Iltutmish", "Balban", "Razia Sultana"] },
            hi: { q: "दिल्ली सल्तनत के प्रसिद्ध गुलाम वंश (ममलुक वंश) का संस्थापक कौन था?", opts: ["कुतुबुद्दीन ऐबक (Qutb-ud-din Aibak)", "इल्तुतमिश", "बलबन", "रज़िया सुल्ताना"] },
            correct: 0
        },
        {
            en: { q: "Which operational pass channel connects Srinagar with Leh across the Himalayan ranges?", opts: ["Zoji La Pass", "Shipki La Pass", "Nathu La Pass", "Rohtang Pass"] },
            hi: { q: "कौन सा दर्रा (Pass) हिमालय पर्वतमाला में श्रीनगर को लेह से जोड़ता है?", opts: ["जोजी ला दर्रा (Zoji La Pass)", "शिपकी ला दर्रा", "नाथू ला दर्रा", "रोहतांग दर्रा"] },
            correct: 0
        },
        // --- Quantitative Aptitude (Set 15) ---
        {
            en: { q: "If the radius of a cylinder is increased by 20% and its height is decreased by 20%, find the percentage change in its volume.", opts: ["15.2% increase", "14.4% increase", "4% decrease", "12% increase"] },
            hi: { q: "यदि एक बेलन की त्रिज्या में 20% की वृद्धि की जाती है और उसकी ऊंचाई में 20% की कमी की जाती है, तो उसके आयतन में प्रतिशत परिवर्तन ज्ञात कीजिए।", opts: ["15.2% की वृद्धि", "14.4% की वृद्धि", "4% की कमी", "12% की वृद्धि"] },
            correct: 1
        },
        {
            en: { q: "A train 120 m long is running at 54 km/h. In how much time will it pass a bridge 180 m long?", opts: ["20 seconds", "15 seconds", "18 seconds", "24 seconds"] },
            hi: { q: "120 मीटर लंबी एक ट्रेन 54 किमी/घंटा की गति से चल रही है। 180 मीटर लंबे पुल को पार करने में इसे कितना समय लगेगा?", opts: ["20 सेकंड", "15 सेकंड", "18 सेकंड", "24 सेकंड"] },
            correct: 0
        },
        {
            en: { q: "Find the compound interest on ₹25,000 for 2 years at 12% per annum, compounded annually.", opts: ["₹6,360", "₹6,000", "₹6,240", "₹6,480"] },
            hi: { q: "₹25,000 पर 2 वर्ष के लिए 12% वार्षिक दर से वार्षिक रूप से संयोजित चक्रवृद्धि ब्याज ज्ञात कीजिए।", opts: ["₹6,360", "₹6,000", "₹6,240", "₹6,480"] },
            correct: 0
        },
        {
            en: { q: "If (x + y) : (x - y) = 7 : 3, then find the value of (x^2 + y^2) : (x^2 - y^2).", opts: ["29:21", "25:21", "29:20", "25:24"] },
            hi: { q: "यदि (x + y) : (x - y) = 7 : 3 है, तो (x^2 + y^2) : (x^2 - y^2) का मान ज्ञात कीजिए।", opts: ["29:21", "25:21", "29:20", "25:24"] },
            correct: 0
        },
        {
            en: { q: "If x + 1/x = 3, then find the value of x^4 + 1/x^4.", opts: ["47", "49", "51", "45"] },
            hi: { q: "यदि x + 1/x = 3 है, तो x^4 + 1/x^4 का मान ज्ञात कीजिए।", opts: ["47", "49", "51", "45"] },
            correct: 0
        },
        {
            en: { q: "A mixture contains milk and water in the ratio 4:3. If 5 liters of water is added to the mixture, the ratio becomes 4:5. Find the quantity of milk in the given mixture.", opts: ["10 liters", "12 liters", "15 liters", "8 liters"] },
            hi: { q: "एक मिश्रण में दूध और पानी का अनुपात 4:3 है। यदि मिश्रण में 5 लीटर पानी मिलाया जाता है, तो अनुपात 4:5 हो जाता है। दिए गए मिश्रण में दूध की मात्रा ज्ञात कीजिए।", opts: ["10 लीटर", "12 लीटर", "15 लीटर", "8 लीटर"] },
            correct: 0
        },
        {
            en: { q: "The perimeter of a square is equal to the perimeter of a rectangle of length 16 cm and breadth 14 cm. Find the area of the square.", opts: ["225 sq.cm", "256 sq.cm", "196 sq.cm", "210 sq.cm"] },
            hi: { q: "एक वर्ग का परिमाप 16 सेमी लंबाई और 14 सेमी चौड़ाई वाले आयत के परिमाप के बराबर है। वर्ग का क्षेत्रफल ज्ञात कीजिए।", opts: ["225 वर्ग सेमी", "256 वर्ग सेमी", "196 वर्ग सेमी", "210 वर्ग सेमी"] },
            correct: 0
        },
        {
            en: { q: "If the volume of a cube is 729 cubic cm, find its total surface area.", opts: ["486 sq.cm", "324 sq.cm", "243 sq.cm", "512 sq.cm"] },
            hi: { q: "यदि एक घन का आयतन 729 घन सेमी है, तो उसका कुल पृष्ठीय क्षेत्रफल ज्ञात कीजिए।", opts: ["486 वर्ग सेमी", "324 वर्ग सेमी", "243 वर्ग सेमी", "512 वर्ग सेमी"] },
            correct: 0
        },
        {
            en: { q: "A sum of money doubled itself in 4 years at simple interest. In how many years will it become 5 times of itself at the same rate?", opts: ["16 years", "12 years", "20 years", "15 years"] },
            hi: { q: "कोई धनराशि साधारण ब्याज पर 4 वर्षों में स्वयं की दोगुनी हो जाती है। समान दर से कितने वर्षों में यह स्वयं की 5 गुनी हो जाएगी?", opts: ["16 वर्ष", "12 वर्ष", "20 वर्ष", "15 वर्ष"] },
            correct: 0
        },
        {
            en: { q: "A ladder 15 m long just reaches the top of a vertical wall. If the ladder makes an angle of 60° with the wall, find the height of the wall.", opts: ["7.5 m", "7.5*sqrt(3) m", "15*sqrt(3) m", "10 m"] },
            hi: { q: "15 मीटर लंबी एक सीढ़ी एक ऊर्ध्वाधर दीवार के शीर्ष तक पहुँचती है। यदि सीढ़ी दीवार के साथ 60° का कोण बनाती है, तो दीवार की ऊंचाई ज्ञात कीजिए।", opts: ["7.5 मीटर (ध्यान दें: दीवार के साथ कोण 60° है, यानी जमीन के साथ 30°)", "7.5*sqrt(3) मीटर", "15*sqrt(3) मीटर", "10 मीटर"] },
            correct: 0
        },

        // --- Reasoning Ability (Set 15) ---
        {
            en: { q: "In a certain code language, 'STATION' is written as 'URYVGML'. How is 'AIRPORT' written in that code?", opts: ["CGTNKPV", "CHTMKPV", "CGSMKPU", "BGTMKPV"] },
            hi: { q: "एक निश्चित कूट भाषा में, 'STATION' को 'URYVGML' लिखा जाता है। उसी कूट में 'AIRPORT' कैसे लिखा जाएगा?", opts: ["CGTNKPV (पैटर्न: +2, -2, +2, -2...)", "CHTMKPV", "CGSMKPU", "BGTMKPV"] },
            correct: 0
        },
        {
            en: { q: "Find the next number in the series: 5, 11, 23, 47, 95, ?", opts: ["191", "189", "193", "185"] },
            hi: { q: "श्रृंखला में अगली संख्या ज्ञात कीजिए: 5, 11, 23, 47, 95, ?", opts: ["191 (पैटर्न: *2 + 1)", "189", "193", "185"] },
            correct: 0
        },
        {
            en: { q: "Statements: Some bats are balls. All balls are gloves. Conclusions: I. Some gloves are bats. II. No ball is a bat.", opts: ["Only I follows", "Only II follows", "Either I or II follows", "Neither I nor II follows"] },
            hi: { q: "कथन: कुछ बल्ले गेंद हैं। सभी गेंदें दस्ताने हैं। निष्कर्ष: I. कुछ दस्ताने बल्ले हैं। II. कोई गेंद बल्ला नहीं है।", opts: ["केवल I अनुसरण करता है", "केवल II अनुसरण करता है", "या तो I या II अनुसरण करता है", "न तो I और न ही II अनुसरण करता है"] },
            correct: 0
        },
        {
            en: { q: "A man walks 30 metres towards South. Then, turning to his right, he walks 30 metres. Then, turning to his left, he walks 20 metres. Again, he turns to his left and walks 30 metres. How far is he from his initial position?", opts: ["50 m", "30 m", "60 m", "80 m"] },
            hi: { q: "एक व्यक्ति 30 मीटर दक्षिण की ओर चलता है। फिर, अपने दाईं ओर मुड़कर वह 30 मीटर चलता है। फिर, अपने बाईं ओर मुड़कर वह 20 मीटर चलता है। दोबारा, वह अपने बाईं ओर मुड़ता है और 30 मीटर चलता है। वह अपने प्रारंभिक स्थान से कितनी दूर है?", opts: ["50 मीटर", "30 मीटर", "60 मीटर", "80 मीटर"] },
            correct: 0
        },
        {
            en: { q: "E is the sister of B. A is the father of C. B is the son of C. How is A related to E?", opts: ["Grandfather", "Father", "Uncle", "Brother"] },
            hi: { q: "E, B की बहन है। A, C का पिता है। B, C का पुत्र है। A, E से किस प्रकार संबंधित है?", opts: ["दादा/नाना (Grandfather)", "पिता", "चाचा/मामा", "भाई"] },
            correct: 0
        },
        {
            en: { q: "Six persons P, Q, R, S, T and U are sitting in two rows, three in each. T is not at the end of any row. S is second to the left of U. R, the neighbor of T, is sitting diagonally opposite to S. Q is the neighbor of U. Who is facing R?", opts: ["Q", "S", "P", "U"] },
            hi: { q: "छह व्यक्ति P, Q, R, S, T और U दो पंक्तियों में बैठे हैं, प्रत्येक में तीन। T किसी भी पंक्ति के छोर पर नहीं है। S, U के बाईं ओर दूसरा है। R, जो T का पड़ोसी है, S के विकर्णतः विपरीत (Diagonally opposite) बैठा है। Q, U का पड़ोसी है। R के सामने किसका मुख है?", opts: ["Q", "S", "P", "U"] },
            correct: 0
        },
        {
            en: { q: "If '*' stands for '/', '/' stands for '*', '+' stands for '-' and '-' stands for '+', then solve: 30 - 6 / 4 * 2 + 5", opts: ["37", "42", "35", "30"] },
            hi: { q: "यदि '*' का अर्थ '/', '/' का अर्थ '*', '+' का अर्थ '-' और '-' का अर्थ '+' है, तो हल कीजिए: 30 - 6 / 4 * 2 + 5", opts: ["37", "42", "35", "30"] },
            correct: 0
        },
        {
            en: { q: "Choose the number-pair which is different from others.", opts: ["5:25", "7:49", "9:81", "8:60"] },
            hi: { q: "उस संख्या-युग्म को चुनें जो दूसरों से भिन्न है।", opts: ["8:60 (बाकी सभी संख्या और उनके वर्ग के युग्म हैं)", "5:25", "7:49", "9:81"] },
            correct: 0
        },
        {
            en: { q: "In a queue, Amrita is 10th from the front while Mukul is 25th from the behind and Mamta is just in the middle of the two. If there be 50 persons in the queue, what position does Mamta occupy from the front?", opts: ["18th", "17th", "19th", "20th"] },
            hi: { q: "एक कतार में, अमृता आगे से 10वें स्थान पर है जबकि मुकुल पीछे से 25वें स्थान पर है और ममता इन दोनों के ठीक बीच में है। यदि कतार में 50 व्यक्ति हों, तो ममता का आगे से कौन सा स्थान है?", opts: ["18वाँ", "17वाँ", "19वाँ", "20वाँ"] },
            correct: 0
        },
        {
            en: { q: "If 15th August 2011 was Monday, what day of the week was 15th August 2012?", opts: ["Wednesday", "Tuesday", "Thursday", "Monday"] },
            hi: { q: "यदि 15 अगस्त 2011 को सोमवार था, तो 15 अगस्त 2012 को सप्ताह का कौन सा दिन था?", opts: ["बुधवार (Wednesday - क्योंकि 2012 एक लीप वर्ष है और इसमें फरवरी शामिल है, इसलिए +2 दिन)", "मंगलवार", "गुरुवार", "सोमवार"] },
            correct: 0
        },

        // --- General Awareness & Railway Knowledge (Set 15) ---
        {
            en: { q: "Which automatic train protection (ATP) system has been indigenously developed by Indian Railways to prevent train collisions?", opts: ["Kavach", "Gajraj", "Tri-Netra", "Rakshak"] },
            hi: { q: "ट्रेन दुर्घटनाओं/टक्करों को रोकने के लिए भारतीय रेलवे द्वारा स्वदेशी रूप से विकसित स्वचालित ट्रेन सुरक्षा (ATP) प्रणाली का नाम क्या है?", opts: ["कवच (Kavach)", "गजराज", "त्रिनेत्र", "रक्षक"] },
            correct: 0
        },
        {
            en: { q: "Where is the Indian Railways Institute of Advanced Track Technology (IRICEN) located?", opts: ["Pune", "Nasik", "Secunderabad", "Vadodara"] },
            hi: { q: "भारतीय रेलवे उन्नत ट्रैक प्रौद्योगिकी संस्थान (IRICEN) कहाँ स्थित है?", opts: ["पुणे (Pune)", "नासिक", "सिकंदराबाद", "वडोदरा"] },
            correct: 0
        },
        {
            en: { q: "What does the abbreviation 'RDSO' stand for, which acts as the technical advisor to Indian Railways?", opts: ["Research Designs and Standards Organisation", "Railway Development and Security Organisation", "Regional Development and Standards Office", "Research Designs and Safety Organisation"] },
            hi: { q: "भारतीय रेलवे के तकनीकी सलाहकार के रूप में कार्य करने वाले 'RDSO' का पूर्ण रूप क्या है?", opts: ["अनुसंधान अभिकल्प एवं मानक संगठन (Research Designs and Standards Organisation - Lucknow)", "रेलवे डेवलपमेंट एंड सिक्योरिटी ऑर्गनाइजेशन", "रीजनल डेवलपमेंट एंड स्टैंडर्ड्स ऑफिस", "रिसर्च डिज़ाइन एंड सेफ्टी ऑर्गनाइजेशन"] },
            correct: 0
        },
        {
            en: { q: "In which city is the North Central Railway zone headquartered?", opts: ["Prayagraj", "Jabalpur", "Hajipur", "Gorakhpur"] },
            hi: { q: "उत्तर मध्य रेलवे (North Central Railway) ज़ोन का मुख्यालय किस शहर में स्थित है?", opts: ["प्रयागराज (Prayagraj)", "जबलपुर", "हाजीपुर", "गोरखपुर"] },
            correct: 0
        },
        {
            en: { q: "India's first semi-high-speed train, Vande Bharat Express (initially Train 18), ran between which two stations on its inaugural commercial run?", opts: ["New Delhi - Varanasi", "New Delhi - Vaishno Devi Katra", "Mumbai Central - Gandhinagar", "New Delhi - Amb Andaura"] },
            hi: { q: "भारत की पहली सेमी-हाई-स्पीड ट्रेन, वंदे भारत एक्सप्रेस, अपनी पहली व्यावसायिक व्यावसायिक दौड़ में किन दो स्टेशनों के बीच चली थी?", opts: ["नई दिल्ली - वाराणसी (New Delhi - Varanasi)", "नई दिल्ली - वैष्णो देवी कटरा", "मुंबई सेंट्रल - गांधीनगर", "नई दिल्ली - अम्ब अंदौरा"] },
            correct: 0
        },
        {
            en: { q: "What is the meaning of a 'Flashing Amber' aspect in Indian Railways intermediate block signaling context?", opts: ["Proceed at restricted speed prepared to stop at next signal", "Proceed passing station loop line layout safely", "Stop dead before signal boundaries", "Shunting activity clear validation"] },
            hi: { q: "भारतीय रेलवे के इंटरमीडिएट ब्लॉक सिग्नलिंग के संदर्भ में 'फ्लैशिंग एम्बर/पीला' (Flashing Amber) सिग्नल का क्या अर्थ होता है?", opts: ["अगले सिग्नल पर रुकने के लिए तैयार रहते हुए प्रतिबंधित गति से आगे बढ़ें", "स्टेशन लूप लाइन लेआउट को सुरक्षित रूप से पार करते हुए आगे बढ़ें", "सिग्नल सीमाओं से पहले पूरी तरह रुकें", "शंटिंग गतिविधि स्पष्ट पुष्टिकरण"] },
            correct: 1
        },
        {
            en: { q: "Which corporate PSU under the Ministry of Railways is responsible for executing infrastructure projects like doubling, gauge conversion, and railway electrification?", opts: ["RVNL", "CONCOR", "IRCTC", "RITES"] },
            hi: { q: "रेल मंत्रालय के तहत कौन सा पीएसयू इंफ्रास्ट्रक्चर परियोजनाओं जैसे रेल लाइनों के दोहरीकरण, गेज परिवर्तन और रेलवे विद्युतीकरण को निष्पादित करने के लिए जिम्मेदार है?", opts: ["RVNL (Rail Vikas Nigam Limited)", "CONCOR", "IRCTC", "RITES"] },
            correct: 0
        },
        {
            en: { q: "The modern LHB (Linke Hofmann Busch) coaches of Indian Railways are primarily manufactured at which facility?", opts: ["Rail Coach Factory, Kapurthala", "Integral Coach Factory, Perambur", "Modern Coach Factory, Raebareli", "Rail Wheel Plant, Bela"] },
            hi: { q: "भारतीय रेलवे के आधुनिक एलएचबी (LHB) कोच मुख्य रूप से किस विनिर्माण इकाई में बनाए जाते हैं?", opts: ["रेल कोच फैक्ट्री, कपूरथला (RCF Kapurthala)", "इंटीग्रल कोच फैक्ट्री, पेराम्बूर", "मॉडर्न कोच फैक्ट्री, रायबरेली", "रेल व्हील प्लांट, बेला"] },
            correct: 0
        },
        {
            en: { q: "What is the gauge width dimension of the Meter Gauge tracking layout?", opts: ["1.000 m", "1.676 m", "0.762 m", "1.435 m"] },
            hi: { q: "मीटर गेज (Meter Gauge) ट्रैकिंग लेआउट की चौड़ाई का आयाम क्या होता है?", opts: ["1.000 मीटर", "1.676 मीटर", "0.762 मीटर", "1.435 मीटर"] },
            correct: 0
        },
        {
            en: { q: "The Matheran Hill Railway, a popular narrow-gauge heritage line, is located in which Indian state?", opts: ["Maharashtra", "Himachal Pradesh", "Tamil Nadu", "West Bengal"] },
            hi: { q: "माथेरान हिल रेलवे (Matheran Hill Railway), जो एक लोकप्रिय नैरोगेज हेरिटेज लाइन है, भारत के किस राज्य में स्थित है?", opts: ["महाराष्ट्र (Maharashtra)", "हिमाचल प्रदेश", "तमिलनाडु", "पश्चिम बंगाल"] },
            correct: 0
        },

        // --- General Science ---
        {
            en: { q: "What is the SI unit of frequency?", opts: ["Hertz", "Decibel", "Joule", "Watt"] },
            hi: { q: "आवृत्ति (Frequency) की SI इकाई क्या है?", opts: ["हर्ट्ज़ (Hertz)", "डेसिबल", "जूल", "वाट"] },
            correct: 0
        },
        {
            en: { q: "Which non-metal remains in a liquid state at room temperature?", opts: ["Bromine", "Mercury", "Chlorine", "Phosphorus"] },
            hi: { q: "कौन सी अधातु (Non-metal) कमरे के तापमान पर तरल अवस्था में रहती है?", opts: ["ब्रोमीन (Bromine - Note: Mercury is a metal)", "पारा", "क्लोरीन", "फास्फोरस"] },
            correct: 0
        },
        {
            en: { q: "What is the chemical formula of Plaster of Paris?", opts: ["CaSO4.1/2H2O", "CaSO4.2H2O", "CaCO3", "CaO"] },
            hi: { q: "प्लास्टर ऑफ पेरिस (Plaster of Paris) का रासायनिक सूत्र क्या है?", opts: ["CaSO4.1/2H2O (Calcium Sulphate Hemihydrate)", "CaSO4.2H2O (Gypsum)", "CaCO3", "CaO"] },
            correct: 0
        },
        {
            en: { q: "Which component inside human blood is majorly responsible for blood clotting at injury sites?", opts: ["Platelets", "Red Blood Cells", "White Blood Cells", "Plasma"] },
            hi: { q: "मानव रक्त के अंदर कौन सा घटक चोट के स्थानों पर रक्त का थक्का जमने (Blood clotting) के लिए मुख्य रूप से जिम्मेदार है?", opts: ["प्लेटलेट्स (Platelets / Thrombocytes)", "लाल रक्त कोशिकाएं", "सफेद रक्त कोशिकाएं", "प्लाज्मा"] },
            correct: 0
        },
        {
            en: { q: "The process of scattering of light by colloidal particles is scientifically known as:", opts: ["Tyndall Effect", "Raman Effect", "Doppler Effect", "Newtonian Effect"] },
            hi: { q: "कोलाइडी कणों द्वारा प्रकाश के प्रकीर्णन की प्रक्रिया को वैज्ञानिक रूप से किस नाम से जाना जाता है?", opts: ["टिंडल प्रभाव (Tyndall Effect)", "रमन प्रभाव", "डॉप्लर प्रभाव", "न्यूटनियन प्रभाव"] },
            correct: 0
        },

        // --- Computer Knowledge ---
        {
            en: { q: "Which protocol is responsible for auto-assigning IP addresses to client systems inside a network?", opts: ["DHCP", "DNS", "FTP", "SMTP"] },
            hi: { q: "एक नेटवर्क के भीतर क्लाइंट सिस्टम को स्वचालित रूप से आईपी एड्रेस (IP addresses) सौंपने के लिए कौन सा प्रोटोकॉल जिम्मेदार है?", opts: ["DHCP (Dynamic Host Configuration Protocol)", "DNS", "FTP", "SMTP"] },
            correct: 0
        },
        {
            en: { q: "What type of cybersecurity attack floods a targeted web server with excessive dummy traffic to crash it?", opts: ["DDoS Attack", "Phishing", "Man-in-the-Middle", "SQL Injection"] },
            hi: { q: "कौन सा साइबर सुरक्षा हमला एक लक्षित वेब सर्वर को क्रैश करने के लिए अत्यधिक डमी ट्रैफ़िक से भर देता है?", opts: ["DDoS हमला (Distributed Denial of Service)", "फिशिंग", "मैन-इन-द-मिडल", "एसक्यूएल इंजक्शन"] },
            correct: 0
        },
        {
            en: { q: "In Microsoft Word, which function key combination explicitly triggers the Spelling and Grammar check tool?", opts: ["F7", "F5", "Alt + F7", "F1"] },
            hi: { q: "माइक्रोसॉफ्ट वर्ड में, कौन सा फंक्शन कुंजी संयोजन स्पष्ट रूप से स्पेलिंग और ग्रामर चेक टूल को ट्रिगर करता है?", opts: ["F7", "F5", "Alt + F7", "F1"] },
            correct: 0
        },
        {
            en: { q: "What does the technical abbreviation 'HDMI' represent in video/audio display outputs?", opts: ["High-Definition Multimedia Interface", "High-Density Memory Infrastructure", "Hyper-Digital Media Integration", "Hydro-Dynamic Media Interface"] },
            hi: { q: "वीडियो/ऑडियो डिस्प्ले आउटपुट में तकनीकी संक्षिप्त नाम 'HDMI' का क्या अर्थ है?", opts: ["हाई-डेफिनिशन मल्टीमीडिया इंटरफेस (High-Definition Multimedia Interface)", "हाई-डेंसिटी मेमोरी इन्फ्रास्ट्रक्चर", "हाइपर-डिजिटल मीडिया इंटीग्रेशन", "हाइड्रो-डायनेमिक मीडिया इंटरफेस"] },
            correct: 0
        },
        {
            en: { q: "What is the primary function of a Compiler inside computer programming architectures?", opts: ["Translates high-level source code directly into machine object code", "Executes code line-by-line", "Manages database rows", "Protects network endpoints"] },
            hi: { q: "कंप्यूटर प्रोग्रामिंग आर्किटेक्चर के भीतर कंपाइलर (Compiler) का प्राथमिक कार्य क्या है?", opts: ["उच्च-स्तरीय सोर्स कोड को सीधे मशीन ऑब्जेक्ट कोड में अनुवादित करना", "कोड को लाइन-बाय-line निष्पादित करना", "डेटाबेस पंक्तियों का प्रबंधन करना", "नेटवर्क एंडपॉइंट्स की सुरक्षा करना"] },
            correct: 0
        },

        // --- Mixed Core Topics ---
        {
            en: { q: "By selling an article for ₹720, a shopkeeper incurs a loss of 10%. To gain 20%, what should be the selling price?", opts: ["₹960", "₹900", "₹850", "₹1000"] },
            hi: { q: "एक वस्तु को ₹720 में बेचने पर एक दुकानदार को 10% की हानि होती है। 20% का लाभ प्राप्त करने के लिए विक्रय मूल्य क्या होना चाहिए?", opts: ["₹960", "₹900", "₹850", "₹1000"] },
            correct: 0
        },
        {
            en: { q: "If 'PRIME' is coded as '91845' and 'TIME' as '21845', then how is 'PITY' coded?", opts: ["9127", "9126", "9137", "8127"] },
            hi: { q: "यदि 'PRIME' को '91845' और 'TIME' को '21845' के रूप में कूटबद्ध किया जाता है, तो 'PITY' को कैसे कूटबद्ध किया जाएगा?", opts: ["9127", "9126", "9137", "8127"] },
            correct: 0
        },
        {
            en: { q: "The simple interest on a sum of money for 3 years at 8% per annum is half the compound interest on ₹4000 for 2 years at 10% per annum. Find the sum.", opts: ["₹1750", "₹2000", "₹1500", "₹1800"] },
            hi: { q: "किसी राशि पर 8% वार्षिक दर से 3 वर्ष का साधारण ब्याज, ₹4000 पर 2 वर्ष के 10% वार्षिक दर से चक्रवृद्धि ब्याज का आधा है। वह राशि ज्ञात कीजिए।", opts: ["₹1750", "₹2000", "₹1500", "₹1800"] },
            correct: 0
        },
        {
            en: { q: "Kunal walks 10 km towards North. From there, he walks 6 km towards South. Then, he walks 3 km towards East. How far and in which direction is he with reference to his starting point?", opts: ["5 km North-East", "5 km South-East", "7 km East", "5 km West"] },
            hi: { q: "कुणाल उत्तर की ओर 10 किमी चलता है। वहाँ से वह दक्षिण की ओर 6 किमी चलता है। फिर वह पूर्व की ओर 3 किमी चलता है। वह अपने प्रारंभिक बिंदु के संदर्भ में कितनी दूर और किस दिशा में है?", opts: ["5 किमी उत्तर-पूर्व (5 km North-East)", "5 किमी दक्षिण-पूर्व", "7 किमी पूर्व", "5 किमी पश्चिम"] },
            correct: 0
        },
        {
            en: { q: "Find the total surface area of a hemisphere whose radius is 7 cm.", opts: ["462 sq.cm", "308 sq.cm", "154 sq.cm", "616 sq.cm"] },
            hi: { q: "एक अर्धगोले (Hemisphere) का कुल पृष्ठीय क्षेत्रफल (TSA) ज्ञात कीजिए जिसकी त्रिज्या 7 सेमी है।", opts: ["462 वर्ग सेमी (Formula: 3 * pi * r^2)", "308 वर्ग सेमी", "154 वर्ग सेमी", "616 वर्ग सेमी"] },
            correct: 0
        },
        {
            en: { q: "Which cell organelle acts as the main waste disposal system and is loaded with hydrolytic digestive enzymes?", opts: ["Lysosome", "Ribosome", "Golgi Body", "Mitochondria"] },
            hi: { q: "कौन सा कोशिका अंगक मुख्य कचरा निपटान प्रणाली के रूप में कार्य करता है और हाइड्रोलाइटिक पाचक एंजाइमों से भरा होता है?", opts: ["लाइसोसोम (Lysosome - Suicide bags)", "राइबोसोम", "गोल्गी काय", "माइटोकॉन्ड्रिया"] },
            correct: 0
        },
        {
            en: { q: "What is the chemical composition of laughing gas used across mild clinical sedations?", opts: ["Nitrous Oxide", "Nitric Oxide", "Nitrogen Dioxide", "Dinitrogen Pentoxide"] },
            hi: { q: "हल्की नैदानिक बेहोशी (Sedations) में उपयोग की जाने वाली लाफिंग गैस (Laughing gas) का रासायनिक संगठन क्या है?", opts: ["नाइट्रस ऑक्साइड (Nitrous Oxide - N2O)", "नाइट्रिक ऑक्साइड", "नाइट्रोजन डाइऑक्साइड", "डाइनिट्रोजन पेंटाऑक्साइड"] },
            correct: 0
        },
        {
            en: { q: "If the diagonal of a cube is 4*sqrt(3) cm, then find its volume.", opts: ["64 cubic cm", "16 cubic cm", "48 cubic cm", "36 cubic cm"] },
            hi: { q: "यदि एक घन का विकर्ण 4*sqrt(3) सेमी है, तो उसका आयतन ज्ञात कीजिए।", opts: ["64 घन सेमी", "16 घन सेमी", "48 घन सेमी", "36 घन सेमी"] },
            correct: 0
        },
        {
            en: { q: "Who was the first female ruler of the Delhi Sultanate?", opts: ["Razia Sultana", "Chand Bibi", "Nur Jahan", "Mumtaz Mahal"] },
            hi: { q: "दिल्ली सल्तनत की पहली महिला शासक कौन थी?", opts: ["रज़िया सुल्ताना (Razia Sultana)", "चांद बीबी", "नूरजहां", "मुमताज महल"] },
            correct: 0
        },
        {
            en: { q: "Which mountain pass connects India (Sikkim) with China (Tibet Autonomous Region)?", opts: ["Nathu La Pass", "Zoji La Pass", "Shipki La Pass", "Rohtang Pass"] },
            hi: { q: "कौन सा पर्वतीय दर्रा भारत (सिक्किम) को चीन (तिब्बत स्वायत्त क्षेत्र) से जोड़ता है?", opts: ["नाथू ला दर्रा (Nathu La Pass)", "जोजी ला दर्रा", "शिपकी ला दर्रा", "रोहतांग दर्रा"] },
            correct: 0
        },
        // --- Quantitative Aptitude (Set 16) ---
        {
            en: { q: "The ratio of the volume of two cones is 4:5 and the ratio of their base radii is 2:3. Find the ratio of their vertical heights.", opts: ["9:5", "5:9", "3:5", "4:9"] },
            hi: { q: "दो शंकुओं के आयतन का अनुपात 4:5 है और उनकी आधार त्रिज्याओं का अनुपात 2:3 है। उनकी ऊर्ध्वाधर ऊँचाइयों का अनुपात ज्ञात कीजिए।", opts: ["9:5", "5:9", "3:5", "4:9"] },
            correct: 0
        },
        {
            en: { q: "A train running at 72 km/h crosses a pole in 15 seconds. How much time will it take to cross a platform 400 m long?", opts: ["35 seconds", "30 seconds", "25 seconds", "40 seconds"] },
            hi: { q: "72 किमी/घंटा की गति से चल रही एक ट्रेन 15 सेकंड में एक खंभे को पार करती है। 400 मीटर लंबे प्लेटफॉर्म को पार करने में इसे कितना समय लगेगा?", opts: ["35 सेकंड", "30 सेकंड", "25 सेकंड", "40 seconds"] },
            correct: 0
        },
        {
            en: { q: "If the difference between compound interest (compounded annually) and simple interest on a certain sum of money for 2 years at 10% per annum is ₹150, find the sum.", opts: ["₹15,000", "₹12,000", "₹10,000", "₹18,000"] },
            hi: { q: "यदि किसी निश्चित धनराशि पर 2 वर्ष के लिए 10% वार्षिक दर से चक्रवृद्धि ब्याज (वार्षिक रूप से संयोजित) और साधारण ब्याज का अंतर ₹150 है, तो धनराशि ज्ञात कीजिए।", opts: ["₹15,000 (Formula: Diff = P*(R/100)^2)", "₹12,000", "₹10,000", "₹18,000"] },
            correct: 0
        },
        {
            en: { q: "If 15% of A is equal to 20% of B, then find the ratio A:B.", opts: ["4:3", "3:4", "5:3", "3:5"] },
            hi: { q: "यदि A का 15%, B के 20% के बराबर है, तो अनुपात A:B ज्ञात कीजिए।", opts: ["4:3", "3:4", "5:3", "3:5"] },
            correct: 0
        },
        {
            en: { q: "If x^2 - 5x + 1 = 0, then find the value of x^3 + 1/x^3.", opts: ["110", "125", "115", "140"] },
            hi: { q: "यदि x^2 - 5x + 1 = 0 है, तो x^3 + 1/x^3 का मान ज्ञात कीजिए।", opts: ["110 (संकेत: x + 1/x = 5)", "125", "115", "140"] },
            correct: 0
        },
        {
            en: { q: "In what ratio must a grocer mix two varieties of pulses costing ₹75 per kg and ₹90 per kg respectively, so as to get a mixture worth ₹80 per kg?", opts: ["2:1", "1:2", "3:2", "2:3"] },
            hi: { q: "एक पंसारी को क्रमशः ₹75 प्रति किग्रा और ₹90 प्रति किग्रा मूल्य वाली दालों की दो किस्मों को किस अनुपात में मिलाना चाहिए, ताकि ₹80 प्रति किग्रा मूल्य का मिश्रण प्राप्त हो सके?", opts: ["2:1", "1:2", "3:2", "2:3"] },
            correct: 0
        },
        {
            en: { q: "The length of a rectangle is increased by 25%. By what percentage should the breadth be decreased to maintain the same area?", opts: ["20%", "25%", "15%", "16.66%"] },
            hi: { q: "एक आयत की लंबाई में 25% की वृद्धि की जाती है। समान क्षेत्रफल बनाए रखने के लिए चौड़ाई में कितने प्रतिशत की कमी की जानी चाहिए?", opts: ["20%", "25%", "15%", "16.66%"] },
            correct: 0
        },
        {
            en: { q: "If the total surface area of a cube is 294 sq.cm, find its volume.", opts: ["343 cubic cm", "216 cubic cm", "512 cubic cm", "729 cubic cm"] },
            hi: { q: "यदि एक घन का कुल पृष्ठीय क्षेत्रफल 294 वर्ग सेमी है, तो उसका आयतन ज्ञात कीजिए।", opts: ["343 घन सेमी", "216 घन सेमी", "512 घन सेमी", "729 घन सेमी"] },
            correct: 0
        },
        {
            en: { q: "A sum of ₹1600 gives a simple interest of ₹252 in 2 years and 3 months. Find the rate of interest per annum.", opts: ["7%", "6%", "8%", "5.5%"] },
            hi: { q: "₹1600 की राशि पर 2 वर्ष 3 महीने में ₹252 का साधारण ब्याज प्राप्त होता है। वार्षिक ब्याज दर ज्ञात कीजिए।", opts: ["7%", "6%", "8%", "5.5%"] },
            correct: 0
        },
        {
            en: { q: "Two points A and B are on the ground on opposite sides of a tower. The angles of elevation of the top of the tower from A and B are 30° and 60° respectively. If the height of the tower is 30m, find the distance AB.", opts: ["40*sqrt(3) m", "30*sqrt(3) m", "40 m", "50 m"] },
            hi: { q: "दो बिंदु A और B एक मीनार के विपरीत पक्षों पर जमीन पर स्थित हैं। A और B से मीनार के शिखर के उन्नयन कोण क्रमशः 30° और 60° हैं। यदि मीनार की ऊंचाई 30 मीटर है, तो दूरी AB ज्ञात कीजिए।", opts: ["40*sqrt(3) मीटर", "30*sqrt(3) मीटर", "40 मीटर", "50 मीटर"] },
            correct: 0
        },

        // --- Reasoning Ability (Set 16) ---
        {
            en: { q: "If 'GALAXY' is coded as 'LQFACS', how is 'PLANET' coded in that language?", opts: ["UQFSMY", "UQERMY", "UPFSMY", "VQFSMY"] },
            hi: { q: "यदि 'GALAXY' को 'LQFACS' के रूप में कूटबद्ध किया जाता है, तो उस भाषा में 'PLANET' को कैसे कूटबद्ध किया जाएगा?", opts: ["UQFSMY (पैटर्न: +5 सर्वत्र)", "UQERMY", "UPFSMY", "VQFSMY"] },
            correct: 0
        },
        {
            en: { q: "Find the missing number in the matrix: [ [3, 5, 34], [4, 7, 65], [6, 8, ?] ]", opts: ["100", "98", "104", "92"] },
            hi: { q: "मैट्रिक्स में लुप्त संख्या ज्ञात कीजिए: [ [3, 5, 34], [4, 7, 65], [6, 8, ?] ]", opts: ["100 (तर्क: x^2 + y^2 = z)", "98", "104", "92"] },
            correct: 0
        },
        {
            en: { q: "Statements: All keys are locks. No lock is a toy. Conclusions: I. No key is a toy. II. Some toys are keys.", opts: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"] },
            hi: { q: "कथन: सभी चाबियां ताले हैं। कोई ताला खिलौना नहीं है। निष्कर्ष: I. कोई चाबी खिलौना नहीं है। II. कुछ खिलौने चाबियां हैं।", opts: ["केवल I अनुसरण करता है", "केवल II अनुसरण करता है", "I और II दोनों अनुसरण करते हैं", "न तो I और न ही II अनुसरण करता है"] },
            correct: 0
        },
        {
            en: { q: "A man faces West and turns 45° clockwise, then another 180° in the same direction and then 270° anticlockwise. Which direction is he facing now?", opts: ["South-West", "North-West", "South-East", "North-East"] },
            hi: { q: "एक व्यक्ति का मुख पश्चिम की ओर है और वह 45° दक्षिणावर्त (Clockwise) मुड़ता है, फिर उसी दिशा में 180° और फिर 270° वामावर्त (Anticlockwise) मुड़ता है। अब उसका मुख किस दिशा में है?", opts: ["दक्षिण-पश्चिम (South-West)", "उत्तर-पश्चिम", "दक्षिण-पूर्व", "उत्तर-पूर्व"] },
            correct: 0
        },
        {
            en: { q: "Introducing a lady, a man said, 'Her husband is the only son of my mother.' How is the lady related to the man?", opts: ["Wife", "Sister", "Mother", "Daughter"] },
            hi: { q: "एक महिला का परिचय देते हुए एक पुरुष ने कहा, 'उसके पति मेरी माँ के इकलौते बेटे हैं।' वह महिला उस पुरुष से किस प्रकार संबंधित है?", opts: ["पत्नी (Wife)", "बहन", "माँ", "पुत्री"] },
            correct: 0
        },
        {
            en: { q: "Seven friends A, B, C, D, E, F and G are sitting in a row facing North. F is to the immediate right of E. G is fourth to the left of C. B is between D and A. E is third to the right of A. Who is sitting at the extreme right end?", opts: ["C", "F", "G", "D"] },
            hi: { q: "सात मित्र A, B, C, D, E, F और G उत्तर की ओर मुख करके एक पंक्ति में बैठे हैं। F, E के ठीक दाईं ओर है। G, C के बाईं ओर चौथा है। B, D और A के बीच में है। E, A के दाईं ओर तीसरा है। अत्यंत दाईं ओर (Extreme right end) कौन बैठा है?", opts: ["C", "F", "G", "D"] },
            correct: 0
        },
        {
            en: { q: "If '+' means '*', '-' means '/', '*' means '-' and '/' means '+', then evaluate: 16 / 8 - 4 * 2 + 3", opts: ["12", "14", "10", "16"] },
            hi: { q: "यदि '+' का अर्थ '*', '-' का अर्थ '/', '*' का अर्थ '-' और '/' का अर्थ '+' है, तो मान ज्ञात कीजिए: 16 / 8 - 4 * 2 + 3", opts: ["12", "14", "10", "16"] },
            correct: 0
        },
        {
            en: { q: "Choose the odd one out from the given alphabetic groups.", opts: ["BDE", "XZA", "LNP", "PRT"] },
            hi: { q: "दिए गए वर्णमाला समूहों में से विषम (Odd) को चुनें।", opts: ["BDE (बाकी सभी में +2, +2 का पैटर्न है, जबकि इसमें +2, +1 है)", "XZA", "LNP", "PRT"] },
            correct: 0
        },
        {
            en: { q: "If the alphabet series is written in reverse order, which letter will be 7th to the left of the 12th letter from the right end?", opts: ["S", "G", "T", "R"] },
            hi: { q: "यदि वर्णमाला श्रृंखला को उल्टे क्रम में लिखा जाता है, तो दाएं छोर से 12वें अक्षर के बाईं ओर 7वां अक्षर कौन सा होगा?", opts: ["S (दाएं से 12वां यानी वास्तविक A-Z श्रृंखला का बाएं से 12वां = L, उसके बाएं 7वां यानी +7 = 19वां अक्षर S)", "G", "T", "R"] },
            correct: 0
        },
        {
            en: { q: "What was the day of the week on 26th January 1950?", opts: ["Thursday", "Friday", "Wednesday", "Tuesday"] },
            hi: { q: "26 जनवरी 1950 को सप्ताह का कौन सा दिन था?", opts: ["गुरुवार (Thursday)", "शुक्रवार", "बुधवार", "मंगलवार"] },
            correct: 0
        },

        // --- General Awareness & Railway Knowledge (Set 16) ---
        {
            en: { q: "Which railway station serves as the central administrative headquarters for the Western Railway zone?", opts: ["Mumbai Churchgate", "Mumbai CSMT", "Ahmedabad", "Ratlam"] },
            hi: { q: "कौन सा रेलवे स्टेशन पश्चिमी रेलवे (Western Railway) ज़ोन के केंद्रीय प्रशासनिक मुख्यालय के रूप में कार्य करता है?", opts: ["मुंबई चर्चगेट (Mumbai Churchgate)", "मुंबई सीएसएमटी", "अहमदाबाद", "रतलाम"] },
            correct: 0
        },
        {
            en: { q: "Where is the Indian Railways Institute of Mechanical and Electrical Engineering (IRIMEE) located?", opts: ["Jamalpur", "Pune", "Secunderabad", "Vadodara"] },
            hi: { q: "भारतीय रेलवे मैकेनिकल और इलेक्ट्रिकल इंजीनियरिंग संस्थान (IRIMEE) कहाँ स्थित है?", opts: ["जमालपुर (Jamalpur - Bihar)", "पुणे", "सिकंदराबाद", "वडोदरा"] },
            correct: 0
        },
        {
            en: { q: "What does the abbreviation 'RITES' stand for in the context of Indian Railways engineering consultancy?", opts: ["Rail India Technical and Economic Service", "Railway Infrastructure Technical and Engineering Support", "Research and Infrastructure Technical Evaluation Systems", "Rail Integrated Tracking and Engineering Services"] },
            hi: { q: "भारतीय रेलवे इंजीनियरिंग परामर्श के संदर्भ में 'RITES' का पूर्ण रूप क्या है?", opts: ["रेल इंडिया टेक्निकल एंड इकोनॉमिक सर्विस (Rail India Technical and Economic Service)", "रेलवे इन्फ्रास्ट्रक्चर टेक्निकल एंड इंजीनियरिंग सपोर्ट", "रिसर्च एंड इन्फ्रास्ट्रक्चर टेक्निकल इवैल्यूएशन सिस्टम्स", "रेल इंटीग्रेटेड ट्रैकिंग एंड इंजीनियरिंग सर्विसेज"] },
            correct: 0
        },
        {
            en: { q: "In which city is the South Western Railway zone headquartered?", opts: ["Hubballi", "Secunderabad", "Chennai", "Bengaluru"] },
            hi: { q: "दक्षिण पश्चिम रेलवे (South Western Railway) ज़ोन का मुख्यालय किस शहर में स्थित है?", opts: ["हुब्बली (Hubballi)", "सिकंदराबाद", "चेन्नई", "बेंगलुरु"] },
            correct: 0
        },
        {
            en: { q: "Which public sector undertaking of Indian Railways specifically manages containerized cargo logistics across its network?", opts: ["CONCOR", "RITES", "RVNL", "DFCCIL"] },
            hi: { q: "भारतीय रेलवे का कौन सा सार्वजनिक क्षेत्र का उपक्रम (PSU) विशेष रूप से अपने नेटवर्क पर कंटेनरीकृत कार्गो लॉजिस्टिक्स का प्रबंधन करता है?", opts: ["CONCOR (Container Corporation of India Limited)", "RITES", "RVNL", "DFCCIL"] },
            correct: 0
        },
        {
            en: { q: "What layout configuration does a 'Calling-on' signal possess within Indian Railways mechanical infrastructure?", opts: ["Miniature arm or small white light below main signal", "Flashing violet aspect indicator", "Fixed continuous horizontal green strip", "Co-acting high overhead auxiliary mast"] },
            hi: { q: "भारतीय रेलवे के यांत्रिक बुनियादी ढांचे के भीतर 'कॉलिंग-ऑन' (Calling-on) सिग्नल का लेआउट कॉन्फ़िगरेशन कैसा होता है?", opts: ["मुख्य सिग्नल के नीचे छोटा आर्म या छोटी सफेद लाइट (Miniature arm/light below main signal)", "फ्लैशिंग बैंगनी पहलू सूचक", "फिक्स्ड निरंतर क्षैतिज हरी पट्टी", "सह-अभिनय उच्च ओवरहेड सहायक मस्तूल"] },
            correct: 0
        },
        {
            en: { q: "Which operational railway zone within India is completely distinct from the regular zonal grids and operates its own dedicated metro network routes?", opts: ["Kolkata Metro", "DMRC Grid", "Namma Metro Grid", "Mumbai Transit Grid"] },
            hi: { q: "भारत का कौन सा चालू रेलवे ज़ोन नियमित क्षेत्रीय ग्रिड से पूरी तरह अलग है और अपना समर्पित मेट्रो नेटवर्क संचालित करता है?", opts: ["कोलकाता मेट्रो (Kolkata Metro - 17th Zone)", "डीएमआरसी ग्रिड", "नम्मा मेट्रो ग्रिड", "मुंबई ट्रांजिट ग्रिड"] },
            correct: 0
        },
        {
            en: { q: "The Diesel Locomotive Works (DLW), which was rebranded as Diesel Locomotive Modernization Works, is located at which spiritual-historical city?", opts: ["Varanasi", "Patiala", "Chittaranjan", "Bengaluru"] },
            hi: { q: "डीजल लोकोमोटिव वर्क्स (DLW), जिसे बाद में बनारस लोकोमोटिव वर्क्स (BLW) के रूप में रीब्रांड किया गया, किस शहर में स्थित है?", opts: ["वाराणसी (Varanasi)", "पटियाला", "चित्तरंजन", "बेंगलुरु"] },
            correct: 0
        },
        {
            en: { q: "What tracking gauge layout standard width configuration corresponds exactly to the dimension of '1676 mm'?", opts: ["Broad Gauge", "Standard Gauge", "Meter Gauge", "Narrow Gauge"] },
            hi: { q: "कौन सा ट्रैकिंग गेज लेआउट मानक चौड़ाई कॉन्फ़िगरेशन बिल्कुल '1676 मिमी' के आयाम के अनुरूप है?", opts: ["ब्रॉड गेज (Broad Gauge)", "स्टैंडर्ड गेज", "मीटर गेज", "नैरोगेज"] },
            correct: 0
        },
        {
            en: { q: "The Nilgiri Mountain Railway, a UNESCO World Heritage site, famously uses which unique mechanical track system to climb steep gradients?", opts: ["Rack and Pinion system", "Magnetic Levitation architecture", "Pneumatic booster lines", "Counter-weight cable system"] },
            hi: { q: "नीलगिरि माउंटेन रेलवे, जो एक यूनेस्को विश्व धरोहर स्थल है, खड़ी ढलानों पर चढ़ने के लिए किस अनूठी यांत्रिक ट्रैक प्रणाली का उपयोग करती है?", opts: ["रैक और पिनियन प्रणाली (Rack and Pinion system)", "मैग्नेटिक लेविटेशन आर्किटेक्चर", "न्यूमेटिक बूस्टर लाइनें", "काउंटर-वेट केबल सिस्टम"] },
            correct: 0
        },

        // --- General Science ---
        {
            en: { q: "What is the SI unit of power?", opts: ["Watt", "Joule", "Newton", "Pascal"] },
            hi: { q: "शक्ति (Power) की SI इकाई क्या है?", opts: ["वाट (Watt)", "जूल", "न्यूटन", "पास्कल"] },
            correct: 0
        },
        {
            en: { q: "Which metal is the most abundant element inside the composition of the Earth's crust?", opts: ["Aluminum", "Iron", "Calcium", "Sodium"] },
            hi: { q: "पृथ्वी की पपड़ी (Earth's crust) के संगठन में कौन सी धातु सबसे प्रचुर मात्रा में पाई जाने वाली तत्व है?", opts: ["एल्युमिनियम (Aluminum)", "लोहा", "कैल्शियम", "सोडियम"] },
            correct: 0
        },
        {
            en: { q: "What is the scientific chemical name of Washing Soda?", opts: ["Sodium Carbonate", "Sodium Bicarbonate", "Sodium Hydroxide", "Calcium Carbonate"] },
            hi: { q: "वाशिंग सोडा (Washing Soda) का वैज्ञानिक रासायनिक नाम क्या है?", opts: ["सोडियम कार्बोनेट (Sodium Carbonate - Na2CO3)", "सोडियम बाइकार्बोनेट", "सोडियम हाइड्रोक्साइड", "कैल्शियम कार्बोनेट"] },
            correct: 0
        },
        {
            en: { q: "Which component inside the human eye regulates and controls the amount of incoming light by adjusting the size of the pupil?", opts: ["Iris", "Cornea", "Retina", "Ciliary Muscles"] },
            hi: { q: "मानव आँख के अंदर कौन सा घटक पुतली (Pupil) के आकार को समायोजित करके आने वाले प्रकाश की मात्रा को नियंत्रित करता है?", opts: ["आयरिस (Iris)", "कॉर्निया", "रेटीना", "सिलियरी मांसपेशियां"] },
            correct: 0
        },
        {
            en: { q: "The process of a solid substance turning directly into vapor form without changing into liquid state is called:", opts: ["Sublimation", "Evaporation", "Condensation", "Deposition"] },
            hi: { q: "किसी ठोस पदार्थ के बिना तरल अवस्था में बदले सीधे वाष्प के रूप में परिवर्तित होने की प्रक्रिया कहलाती है:", opts: ["ऊर्ध्वपातन (Sublimation)", "वाष्पीकरण", "संघनन", "निक्षेपण"] },
            correct: 0
        },

        // --- Computer Knowledge ---
        {
            en: { q: "Which network topology connects every individual host node directly to a centralized hub switch device?", opts: ["Star Topology", "Bus Topology", "Ring Topology", "Mesh Topology"] },
            hi: { q: "कौन सी नेटवर्क टोपोलॉजी प्रत्येक व्यक्तिगत होस्ट नोड को सीधे एक केंद्रीकृत हब/स्विच डिवाइस से जोड़ती है?", opts: ["स्टार टोपोलॉजी (Star Topology)", "बस टोपोलॉजी", "रिंग टोपोलॉजी", "मेष टोपोलॉजी"] },
            correct: 0
        },
        {
            en: { q: "What cybersecurity mechanism creates an encrypted private communication tunnel over a public internet network infrastructure?", opts: ["VPN", "Firewall", "Antivirus Shield", "Proxy Server"] },
            hi: { q: "कौन सा साइबर सुरक्षा तंत्र सार्वजनिक इंटरनेट नेटवर्क बुनियादी ढांचे पर एक एन्क्रिप्टेड निजी संचार सुरंग बनाता है?", opts: ["वीपीएन (VPN - Virtual Private Network)", "फायरवॉल", "एंटीवायरस शील्ड", "प्रॉक्सी सर्वर"] },
            correct: 0
        },
        {
            en: { q: "In Microsoft Excel, which shortcut key explicitly inserts a new chart sheet from selected table cell parameters instantly?", opts: ["F11", "F5", "Alt + F4", "Ctrl + P"] },
            hi: { q: "माइक्रोसॉफ्ट एक्सेल में, कौन सी शॉर्टकट कुंजी चयनित टेबल सेल मापदंडों से तुरंत एक नया चार्ट शीट सम्मिलित करती है?", opts: ["F11", "F5", "Alt + F4", "Ctrl + P"] },
            correct: 0
        },
        {
            en: { q: "What does the abbreviation 'BIOS' stand for inside motherboard firmware configurations?", opts: ["Basic Input Output System", "Binary Integrated Operating Software", "Base Instruction Operations Scheme", "Broadband Interface Output Service"] },
            hi: { q: "मदरबोर्ड फर्मवेयर कॉन्फ़िगरेशन के अंदर संक्षिप्त नाम 'BIOS' का क्या अर्थ है?", opts: ["बेसिक इनपुट आउटपुट सिस्टम (Basic Input Output System)", "बाइनरी इंटीग्रेटेड ऑपरेटिंग सॉफ्टवेयर", "बेस इंस्ट्रक्शन ऑपरेशन्स स्कीम", "ब्रॉडबैंड इंटरफेस आउटपुट सर्विस"] },
            correct: 0
        },
        {
            en: { q: "Which non-volatile flash storage technology architecture variant forms the solid infrastructure base of modern SSD hard drives?", opts: ["NAND Flash", "DRAM Module", "SRAM Matrix", "Magnetic Platters"] },
            hi: { q: "कौन सी नॉन-वोलेटाइल फ्लैश स्टोरेज तकनीक आर्किटेक्चर आधुनिक एसएसडी (SSD) हार्ड ड्राइव का ठोस बुनियादी ढांचा आधार बनाती है?", opts: ["नैंड फ्लैश (NAND Flash)", "डीरैम मॉड्यूल", "एसरैम मैट्रिक्स", "मैग्नेटिक प्लेटर्स"] },
            correct: 0
        },

        // --- Mixed Core Topics ---
        {
            en: { q: "A tradesman marks his goods 20% above the cost price and allows a discount of 10% on the marked price. Find his gain percentage.", opts: ["8%", "10%", "12%", "6%"] },
            hi: { q: "एक व्यापारी अपने माल पर क्रय मूल्य से 20% अधिक अंकित करता है और अंकित मूल्य पर 10% की छूट देता है। उसका लाभ प्रतिशत ज्ञात कीजिए।", opts: ["8%", "10%", "12%", "6%"] },
            correct: 0
        },
        {
            en: { q: "If 'MIND' is coded as 'KGLB' and 'ARGUE' as 'YPESC', then how is 'DIAGRAM' coded?", opts: ["BGYEPYK", "BGYERVK", "BGYEPVK", "CHZEQZL"] },
            hi: { q: "यदि 'MIND' को 'KGLB' और 'ARGUE' को 'YPESC' के रूप में कूटबद्ध किया जाता है, तो 'DIAGRAM' को कैसे कूटबद्ध किया जाएगा?", opts: ["BGYEPYK (पैटर्न: -2 सर्वत्र)", "BGYERVK", "BGYEPVK", "CHZEQZL"] },
            correct: 0
        },
        {
            en: { q: "At what rate percent per annum simple interest will a sum of money triple itself in 16 years?", opts: ["12.5%", "10%", "15%", "11.25%"] },
            hi: { q: "किस वार्षिक साधारण ब्याज की दर से कोई धनराशि 16 वर्षों में स्वयं की तिगुनी हो जाएगी?", opts: ["12.5% (Formula: R = (N-1)*100 / T)", "10%", "15%", "11.25%"] },
            correct: 0
        },
        {
            en: { q: "A child is looking for his father. He went 90 metres in the East before turning to his right. He went 20 metres before turning to his right again to look for his father at his uncle's place 30 metres from this point. His father was not there. From here he went 100 metres to the North before meeting his father in a street. How far did the son meet his father from the starting point?", opts: ["100 m", "80 m", "140 m", "260 m"] },
            hi: { q: "एक बच्चा अपने पिता की तलाश कर रहा है। वह दाएं मुड़ने से पहले 90 मीटर पूर्व में गया। वह अपने चाचा के घर पर अपने पिता को खोजने के लिए फिर से दाएं मुड़ने से पहले 20 मीटर गया, जो इस बिंदु से 30 मीटर दूर है। उसके पिता वहां नहीं थे। यहां से वह एक गली में अपने पिता से मिलने से पहले 100 मीटर उत्तर की ओर गया। पुत्र अपने पिता से प्रारंभिक बिंदु से कितनी दूर मिला?", opts: ["100 मीटर (तर्क: पाइथागोरस प्रमेय से आधार = 60, लंब = 80)", "80 मीटर", "140 मीटर", "260 मीटर"] },
            correct: 0
        },
        {
            en: { q: "Find the volume of a sphere whose radius is 3 cm.", opts: ["36*pi cubic cm", "12*pi cubic cm", "18*pi cubic cm", "24*pi cubic cm"] },
            hi: { q: "एक गोले का आयतन ज्ञात कीजिए जिसकी त्रिज्या 3 सेमी है।", opts: ["36*pi घन सेमी (Formula: 4/3 * pi * r^3)", "12*pi घन सेमी", "18*pi घन सेमी", "24*pi घन सेमी"] },
            correct: 0
        },
        {
            en: { q: "Which organelle inside plant plant cells performs photo-synthetic reactions converting sunlight into ATP molecules?", opts: ["Chloroplast", "Chromoplast", "Leucoplast", "Amyloplast"] },
            hi: { q: "पादप कोशिकाओं के अंदर कौन सा अंगक सूर्य के प्रकाश को एटीपी अणुओं में परिवर्तित करने वाली प्रकाश-संश्लेषण (Photo-synthetic) प्रतिक्रियाएं निष्पादित करता है?", opts: ["क्लोरोप्लास्ट (Chloroplast)", "क्रोमोप्लास्ट", "ल्यूकोप्लास्ट", "एमाइलोप्लास्ट"] },
            correct: 0
        },
        {
            en: { q: "What is the primary organic acid component configured inside commercial vinegar compositions?", opts: ["Acetic Acid", "Citric Acid", "Tartaric Acid", "Formic Acid"] },
            hi: { q: "व्यावसायिक सिरका (Vinegar) के संगठनों के अंदर कॉन्फ़िगर किया गया प्राथमिक कार्बनिक अम्ल घटक क्या है?", opts: ["एसिटिक अम्ल (Acetic Acid)", "साइट्रिक अम्ल", "टार्टरिक अम्ल", "फॉर्मिक अम्ल"] },
            correct: 0
        },
        {
            en: { q: "If the surface area of a sphere is 616 sq.cm, then find its radius.", opts: ["7 cm", "14 cm", "3.5 cm", "10.5 cm"] },
            hi: { q: "यदि एक गोले का पृष्ठीय क्षेत्रफल 616 वर्ग सेमी है, तो उसकी त्रिज्या ज्ञात कीजिए।", opts: ["7 सेमी (Formula: 4 * pi * r^2 = 616)", "14 सेमी", "3.5 सेमी", "10.5 सेमी"] },
            correct: 0
        },
        {
            en: { q: "The famous market regulatory framework reforms were introduced by which Delhi Sultanate ruler?", opts: ["Alauddin Khalji", "Muhammad bin Tughluq", "Iltutmish", "Firoz Shah Tughlaq"] },
            hi: { q: "प्रसिद्ध बाजार नियामक ढांचा सुधार (Market reforms) किस दिल्ली सल्तनत शासक द्वारा पेश किए गए थे?", opts: ["अलाउद्दीन खिलजी (Alauddin Khalji)", "मुहम्मद बिन तुगलक", "इल्तुतमिश", "फिरोज शाह तुगलक"] },
            correct: 0
        },
        {
            en: { q: "Which core channel strait separates the Andaman Islands from the Nicobar Islands group in the Indian Ocean geography?", opts: ["Ten Degree Channel", "Nine Degree Channel", "Eight Degree Channel", "Palk Strait"] },
            hi: { q: "हिंद महासागर भूगोल में कौन सा मुख्य चैनल जलडमरूमध्य अंडमान द्वीप समूह को निकोबार द्वीप समूह से अलग करता है?", opts: ["दस डिग्री चैनल (Ten Degree Channel)", "नौ डिग्री चैनल", "आठ डिग्री चैनल", "पाक जलडमरूमध्य"] },
            correct: 0
        },
        
        {
            en: { q: "In which year was the Railway Budget merged with the General Budget?", opts: ["2015", "2016", "2017", "2018"] },
            hi: { q: "रेल बजट का आम बजट में विलय किस वर्ष किया गया था?", opts: ["2015", "2016", "2017", "2018"] },
            correct: 2
        }
    ]
};