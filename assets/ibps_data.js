var IBPS_DATA = {
    marking: { correct: 4, wrong: -1, label: "+4 | -1" },
    questions: [

        // --- Reasoning Ability (Q1–Q50) ---
        {
            en: { q: "In a certain code, APPLE is written as BQQMF. How is MANGO written?", opts: ["NBOHO", "NBOHP", "NCOHO", "NBOGO"] },
            hi: { q: "एक निश्चित कूट भाषा में APPLE को BQQMF लिखा जाता है। MANGO को कैसे लिखा जाएगा?", opts: ["NBOHO", "NBOHP", "NCOHO", "NBOGO"] },
            correct: 1
        },
        
        {
            en: { q: "In a certain code language, 'MOBILE' is written as 'NPCJMF'. How will 'LAPTOP' be written in that code?", opts: ["MBQUPQ", "MBQUQP", "MAQUOP", "LBQUPQ"] },
            hi: { q: "एक निश्चित कूट भाषा में 'MOBILE' को 'NPCJMF' लिखा जाता है। उसी कूट भाषा में 'LAPTOP' को कैसे लिखा जाएगा?", opts: ["MBQUPQ", "MBQUQP", "MAQUOP", "LBQUPQ"] },
            correct: 0
        },
        {
            en: { q: "Pointing to a photograph, Ramesh said, 'She is the daughter of my grandfather's only son.' How is the woman in the photograph related to Ramesh?", opts: ["Sister", "Aunt", "Cousin", "Mother"] },
            hi: { q: "एक फोटो की ओर इशारा करते हुए रमेश ने कहा, 'वह मेरे दादा के एकमात्र पुत्र की पुत्री है।' फोटो में महिला रमेश से किस प्रकार संबंधित है?", opts: ["बहन", "चाची", "कज़न", "माँ"] },
            correct: 0
        },
        {
            en: { q: "If 'A' is coded as 1, 'B' as 2, and so on, what is the code for 'BANK'?", opts: ["2-1-14-11", "2-1-13-11", "1-2-14-11", "2-1-14-12"] },
            hi: { q: "यदि 'A' को 1, 'B' को 2 आदि से कूटबद्ध किया जाए, तो 'BANK' का कोड क्या होगा?", opts: ["2-1-14-11", "2-1-13-11", "1-2-14-11", "2-1-14-12"] },
            correct: 0
        },
        {
            en: { q: "In a row of 40 students, Mohan is 15th from the left. What is his position from the right?", opts: ["25th", "26th", "24th", "27th"] },
            hi: { q: "40 छात्रों की एक पंक्ति में मोहन बाईं ओर से 15वें स्थान पर है। दाईं ओर से उसका स्थान क्या होगा?", opts: ["25वाँ", "26वाँ", "24वाँ", "27वाँ"] },
            correct: 1
        },
        {
            en: { q: "Which number will come next in the series: 2, 6, 12, 20, 30, ?", opts: ["40", "42", "44", "38"] },
            hi: { q: "श्रृंखला में अगला नंबर क्या होगा: 2, 6, 12, 20, 30, ?", opts: ["40", "42", "44", "38"] },
            correct: 1
        },
        {
            en: { q: "If South-East becomes North, North-East becomes West, then what does South become?", opts: ["North-East", "North-West", "East", "South-West"] },
            hi: { q: "यदि दक्षिण-पूर्व, उत्तर बन जाए और उत्तर-पूर्व, पश्चिम बन जाए, तो दक्षिण क्या बनेगा?", opts: ["उत्तर-पूर्व", "उत्तर-पश्चिम", "पूर्व", "दक्षिण-पश्चिम"] },
            correct: 1
        },
        {
            en: { q: "A man walks 5 km towards North, then turns right and walks 3 km. Then he turns right again and walks 5 km. How far is he from the starting point?", opts: ["3 km", "5 km", "8 km", "0 km"] },
            hi: { q: "एक व्यक्ति उत्तर दिशा में 5 किमी चलता है, फिर दाईं ओर मुड़कर 3 किमी चलता है। फिर दाईं ओर मुड़कर 5 किमी चलता है। वह प्रारंभिक बिंदु से कितनी दूर है?", opts: ["3 किमी", "5 किमी", "8 किमी", "0 किमी"] },
            correct: 0
        },
        {
            en: { q: "Five friends A, B, C, D, E are sitting in a row. B is to the right of A. D is to the left of E but to the right of C. Who is sitting in the middle?", opts: ["B", "D", "C", "A"] },
            hi: { q: "पाँच मित्र A, B, C, D, E एक पंक्ति में बैठे हैं। B, A के दाईं ओर है। D, E के बाईं ओर है लेकिन C के दाईं ओर है। बीच में कौन बैठा है?", opts: ["B", "D", "C", "A"] },
            correct: 1
        },
        {
            en: { q: "Which of the following is the odd one out? 36, 49, 64, 75, 81", opts: ["49", "64", "75", "81"] },
            hi: { q: "निम्नलिखित में से कौन सा बेमेल है? 36, 49, 64, 75, 81", opts: ["49", "64", "75", "81"] },
            correct: 2
        },
        {
            en: { q: "Statement: All pens are books. All books are papers. Conclusion: (I) All pens are papers. (II) All papers are pens. Which conclusion(s) follow?", opts: ["Only I", "Only II", "Both I and II", "Neither I nor II"] },
            hi: { q: "कथन: सभी पेन किताबें हैं। सभी किताबें कागज़ हैं। निष्कर्ष: (I) सभी पेन कागज़ हैं। (II) सभी कागज़ पेन हैं। कौन सा निष्कर्ष सही है?", opts: ["केवल I", "केवल II", "I और II दोनों", "न I न II"] },
            correct: 0
        },
        {
            en: { q: "If CLOCK = 25, MATCH = 20, then BROOM = ?", opts: ["22", "23", "24", "25"] },
            hi: { q: "यदि CLOCK = 25, MATCH = 20, तो BROOM = ?", opts: ["22", "23", "24", "25"] },
            correct: 1
        },
        {
            en: { q: "Find the missing number: 3, 7, 13, 21, 31, ?", opts: ["41", "43", "45", "47"] },
            hi: { q: "लुप्त संख्या ज्ञात करें: 3, 7, 13, 21, 31, ?", opts: ["41", "43", "45", "47"] },
            correct: 1
        },
        {
            en: { q: "In a certain code, GIVEN is written as MDYLR. How is TIGER written in that code?", opts: ["ZOMYL", "ZOMNL", "YNMKL", "ZOMKL"] },
            hi: { q: "एक निश्चित कोड में GIVEN को MDYLR लिखा जाता है। उसी कोड में TIGER को कैसे लिखा जाएगा?", opts: ["ZOMYL", "ZOMNL", "YNMKL", "ZOMKL"] },
            correct: 0
        },
        {
            en: { q: "If 2nd December is a Monday, what day will be 25th December of the same year?", opts: ["Monday", "Tuesday", "Wednesday", "Thursday"] },
            hi: { q: "यदि 2 दिसंबर सोमवार है, तो उसी वर्ष 25 दिसंबर को कौन सा दिन होगा?", opts: ["सोमवार", "मंगलवार", "बुधवार", "गुरुवार"] },
            correct: 0
        },
        {
            en: { q: "A is the brother of B. C is the mother of A. D is the father of C. How is B related to D?", opts: ["Granddaughter", "Grandson", "Grandchild", "Cannot be determined"] },
            hi: { q: "A, B का भाई है। C, A की माँ है। D, C का पिता है। B, D से किस प्रकार संबंधित है?", opts: ["पोती", "पोता", "पोता/पोती", "निर्धारित नहीं किया जा सकता"] },
            correct: 3
        },
        {
            en: { q: "How many meaningful English words can be formed using letters A, E, R, C (each used once)?", opts: ["One", "Two", "Three", "Four"] },
            hi: { q: "A, E, R, C अक्षरों का उपयोग करके (प्रत्येक एक बार) कितने अर्थपूर्ण अंग्रेजी शब्द बनाए जा सकते हैं?", opts: ["एक", "दो", "तीन", "चार"] },
            correct: 1
        },
        {
            en: { q: "In blood relation: If X is the son of Y's father's sister, then X is Y's —", opts: ["Uncle", "Brother", "Cousin", "Nephew"] },
            hi: { q: "रक्त संबंध में: यदि X, Y के पिता की बहन का पुत्र है, तो X, Y का क्या है?", opts: ["चाचा", "भाई", "कज़न", "भतीजा"] },
            correct: 2
        },
        {
            en: { q: "Which of the following Venn diagrams best represents: Doctors, Teachers, Graduates?", opts: ["Two circles overlapping a third", "Three separate circles", "Three mutually overlapping circles", "Two circles inside the third"] },
            hi: { q: "निम्नलिखित में से कौन सा वेन आरेख डॉक्टर, शिक्षक, स्नातक का सबसे अच्छा प्रतिनिधित्व करता है?", opts: ["दो वृत्त तीसरे को काटते हुए", "तीन अलग वृत्त", "तीन परस्पर काटते वृत्त", "दो वृत्त तीसरे के अंदर"] },
            correct: 2
        },
        {
            en: { q: "Choose the correct mirror image of the word 'WORLD' when kept in front of a mirror:", opts: ["DLROW", "WORLD", "BLIOW", "WOPLD"] },
            hi: { q: "दर्पण के सामने रखने पर 'WORLD' शब्द का सही दर्पण प्रतिबिंब चुनें:", opts: ["DLROW", "WORLD", "BLIOW", "WOPLD"] },
            correct: 0
        },
        {
            en: { q: "If + means ÷, × means −, ÷ means +, − means ×, then 15 + 3 − 2 × 6 ÷ 4 = ?", opts: ["2", "6", "8", "3"] },
            hi: { q: "यदि + का अर्थ ÷ है, × का अर्थ − है, ÷ का अर्थ + है, − का अर्थ × है, तो 15 + 3 − 2 × 6 ÷ 4 = ?", opts: ["2", "6", "8", "3"] },
            correct: 1
        },
        {
            en: { q: "Arrange the following words in a meaningful sequence: 1-Sentence, 2-Word, 3-Chapter, 4-Letter, 5-Book, 6-Paragraph", opts: ["4,2,1,6,3,5", "4,1,2,6,3,5", "2,4,1,6,3,5", "4,2,6,1,3,5"] },
            hi: { q: "निम्नलिखित शब्दों को अर्थपूर्ण क्रम में व्यवस्थित करें: 1-वाक्य, 2-शब्द, 3-अध्याय, 4-अक्षर, 5-पुस्तक, 6-अनुच्छेद", opts: ["4,2,1,6,3,5", "4,1,2,6,3,5", "2,4,1,6,3,5", "4,2,6,1,3,5"] },
            correct: 0
        },
        {
            en: { q: "If in a certain language, COMPUTER is written as RFUVQNPC, then how is MEDICINE written?", opts: ["MFEJDJOF", "NFEJDJOF", "NFEJDOF", "NFEJEJOF"] },
            hi: { q: "यदि एक निश्चित भाषा में COMPUTER को RFUVQNPC लिखा जाता है, तो MEDICINE को कैसे लिखा जाएगा?", opts: ["MFEJDJOF", "NFEJDJOF", "NFEJDOF", "NFEJEJOF"] },
            correct: 1
        },
        {
            en: { q: "Statement: Some dogs are cats. All cats are birds. Conclusion: I. Some dogs are birds. II. All birds are dogs. Which follows?", opts: ["Only I", "Only II", "Both I and II", "Neither I nor II"] },
            hi: { q: "कथन: कुछ कुत्ते बिल्लियाँ हैं। सभी बिल्लियाँ पक्षी हैं। निष्कर्ष: I. कुछ कुत्ते पक्षी हैं। II. सभी पक्षी कुत्ते हैं। कौन सा सही है?", opts: ["केवल I", "केवल II", "I और II दोनों", "न I न II"] },
            correct: 0
        },
        {
            en: { q: "Find the odd one out: 17, 19, 23, 25, 29", opts: ["25", "19", "23", "29"] },
            hi: { q: "बेमेल ज्ञात करें: 17, 19, 23, 25, 29", opts: ["25", "19", "23", "29"] },
            correct: 0
        },
        {
            en: { q: "Which of the following cube's opposite faces when unfolded are correct: Top–Bottom, Front–Back, Left–Right?", opts: ["They sum to 7", "They are always even", "They cannot be determined", "They are parallel faces"] },
            hi: { q: "एक घन के विपरीत फलक (Top–Bottom, Front–Back, Left–Right) के बारे में क्या सही है?", opts: ["वे 7 का योग करते हैं", "वे हमेशा सम होते हैं", "निर्धारित नहीं किए जा सकते", "वे समान्तर फलक हैं"] },
            correct: 3
        },
        {
            en: { q: "If the 5th day after tomorrow is Monday, what day is today?", opts: ["Tuesday", "Wednesday", "Monday", "Sunday"] },
            hi: { q: "यदि परसों के बाद का 5वाँ दिन सोमवार है, तो आज कौन सा दिन है?", opts: ["मंगलवार", "बुधवार", "सोमवार", "रविवार"] },
            correct: 0
        },
        {
            en: { q: "Six people P, Q, R, S, T, U sit in a circle facing centre. P sits opposite to T. Q is between P and R. Who sits opposite Q?", opts: ["U", "S", "T", "Cannot be determined"] },
            hi: { q: "छह लोग P, Q, R, S, T, U एक वृत्त में केंद्र की ओर मुख करके बैठे हैं। P, T के विपरीत बैठा है। Q, P और R के बीच है। Q के विपरीत कौन बैठा है?", opts: ["U", "S", "T", "निर्धारित नहीं किया जा सकता"] },
            correct: 3
        },
        {
            en: { q: "In a queue, Ankit is 10th from front and 15th from back. Total number of persons in the queue is:", opts: ["24", "25", "26", "23"] },
            hi: { q: "एक कतार में अंकित आगे से 10वाँ और पीछे से 15वाँ है। कतार में कुल कितने व्यक्ति हैं?", opts: ["24", "25", "26", "23"] },
            correct: 0
        },
        {
            en: { q: "Choose the correct analogy: Book : Library :: Painting : ?", opts: ["Artist", "Gallery", "Museum", "Canvas"] },
            hi: { q: "सही सादृश्य चुनें: पुस्तक : पुस्तकालय :: चित्रकारी : ?", opts: ["कलाकार", "गैलरी", "संग्रहालय", "कैनवास"] },
            correct: 1
        },
        {
            en: { q: "Find the next term in the series: ACE, BDF, CEG, ?", opts: ["DFH", "EGI", "DFI", "EFH"] },
            hi: { q: "श्रृंखला में अगला पद ज्ञात करें: ACE, BDF, CEG, ?", opts: ["DFH", "EGI", "DFI", "EFH"] },
            correct: 0
        },
        {
            en: { q: "A clock shows 6:30. What angle does the hour hand make with the minute hand?", opts: ["0°", "15°", "10°", "5°"] },
            hi: { q: "एक घड़ी 6:30 दिखाती है। घंटे की सुई और मिनट की सुई के बीच कितना कोण होगा?", opts: ["0°", "15°", "10°", "5°"] },
            correct: 1
        },
        {
            en: { q: "If FRIEND is coded as HUMJTK, then CANDLE will be coded as:", opts: ["EDRIRL", "EDRIRN", "ECPGNG", "EDRJRL"] },
            hi: { q: "यदि FRIEND को HUMJTK कूटबद्ध किया जाता है, तो CANDLE को कैसे कूटबद्ध किया जाएगा?", opts: ["EDRIRL", "EDRIRN", "ECPGNG", "EDRJRL"] },
            correct: 0
        },
        {
            en: { q: "Which of the following is different from the rest? Mango, Apple, Banana, Carrot, Grapes", opts: ["Mango", "Apple", "Carrot", "Grapes"] },
            hi: { q: "निम्नलिखित में से कौन सा बाकी से अलग है? आम, सेब, केला, गाजर, अंगूर", opts: ["आम", "सेब", "गाजर", "अंगूर"] },
            correct: 2
        },
        {
            en: { q: "In a certain code language, 135 means 'good sweet fruit', 657 means 'good red rose', 537 means 'good fruit rose'. What is the code for 'sweet'?", opts: ["1", "3", "5", "7"] },
            hi: { q: "एक कूट भाषा में 135 का अर्थ 'अच्छा मीठा फल', 657 का अर्थ 'अच्छा लाल गुलाब', 537 का अर्थ 'अच्छा फल गुलाब' है। 'मीठा' के लिए कूट क्या है?", opts: ["1", "3", "5", "7"] },
            correct: 0
        },
        {
            en: { q: "Statement: All rivers are mountains. No mountain is cloud. Conclusion: I. No river is cloud. II. Some rivers are clouds. Which follows?", opts: ["Only I", "Only II", "Both", "Neither"] },
            hi: { q: "कथन: सभी नदियाँ पर्वत हैं। कोई पर्वत बादल नहीं है। निष्कर्ष: I. कोई नदी बादल नहीं है। II. कुछ नदियाँ बादल हैं। कौन सा सही है?", opts: ["केवल I", "केवल II", "दोनों", "कोई नहीं"] },
            correct: 0
        },
        {
            en: { q: "How many triangles are in a regular six-pointed star (Star of David)?", opts: ["6", "8", "10", "12"] },
            hi: { q: "एक नियमित छः-नुकीले तारे (Star of David) में कितने त्रिभुज हैं?", opts: ["6", "8", "10", "12"] },
            correct: 1
        },
        {
            en: { q: "A is heavier than B but lighter than C. D is heavier than C. Who is the lightest?", opts: ["A", "B", "C", "D"] },
            hi: { q: "A, B से भारी है लेकिन C से हल्का है। D, C से भारी है। सबसे हल्का कौन है?", opts: ["A", "B", "C", "D"] },
            correct: 1
        },
        {
            en: { q: "Which word does NOT belong to the group? Symphony, Opera, Ballet, Sculpture, Orchestra", opts: ["Symphony", "Opera", "Sculpture", "Orchestra"] },
            hi: { q: "कौन सा शब्द समूह से संबंधित नहीं है? Symphony, Opera, Ballet, Sculpture, Orchestra", opts: ["Symphony", "Opera", "Sculpture", "Orchestra"] },
            correct: 2
        },
        {
            en: { q: "If all the letters of the word PENCIL are arranged alphabetically, which letter will be at the 4th position?", opts: ["I", "L", "N", "P"] },
            hi: { q: "यदि PENCIL शब्द के सभी अक्षरों को वर्णमाला क्रम में व्यवस्थित किया जाए, तो चौथे स्थान पर कौन सा अक्षर होगा?", opts: ["I", "L", "N", "P"] },
            correct: 2
        },
        {
            en: { q: "Which of the following correctly shows input-output: Input: 7 15 23 31. Output: 15 23 31 39. Rule applied is?", opts: ["×2−1", "+8", "+7", "×2+1"] },
            hi: { q: "निम्नलिखित में से कौन सा इनपुट-आउटपुट सही दिखाता है: Input: 7 15 23 31. Output: 15 23 31 39. लागू नियम है?", opts: ["×2−1", "+8", "+7", "×2+1"] },
            correct: 1
        },
        {
            en: { q: "If the word STOVE becomes VWRYH when each letter is moved forward by 3 places, which word will CHAIR become?", opts: ["FKDLU", "FKDLU", "FKCLR", "GLDLU"] },
            hi: { q: "यदि STOVE शब्द में प्रत्येक अक्षर को 3 स्थान आगे बढ़ाने पर VWRYH मिलता है, तो CHAIR क्या बनेगा?", opts: ["FKDLU", "FKDLU", "FKCLR", "GLDLU"] },
            correct: 0
        },

        // --- Quantitative Aptitude (Q41–Q90) ---
        {
            en: { q: "A sum of Rs. 8000 is lent at 10% per annum simple interest for 3 years. What is the total interest earned?", opts: ["Rs. 2000", "Rs. 2400", "Rs. 2800", "Rs. 3200"] },
            hi: { q: "₹8000 की राशि 10% प्रति वर्ष साधारण ब्याज पर 3 वर्षों के लिए उधार दी जाती है। कुल ब्याज कितना होगा?", opts: ["₹2000", "₹2400", "₹2800", "₹3200"] },
            correct: 1
        },
        {
            en: { q: "A train 300 m long passes a pole in 15 seconds. What is the speed of the train in km/h?", opts: ["60 km/h", "68 km/h", "72 km/h", "80 km/h"] },
            hi: { q: "300 मीटर लंबी एक रेलगाड़ी एक खंभे को 15 सेकंड में पार करती है। रेलगाड़ी की गति km/h में क्या है?", opts: ["60 km/h", "68 km/h", "72 km/h", "80 km/h"] },
            correct: 2
        },
        {
            en: { q: "If the cost price of an article is Rs. 500 and it is sold at a profit of 20%, the selling price is:", opts: ["Rs. 550", "Rs. 580", "Rs. 600", "Rs. 620"] },
            hi: { q: "यदि किसी वस्तु का क्रय मूल्य ₹500 है और इसे 20% लाभ पर बेचा जाता है, तो विक्रय मूल्य है:", opts: ["₹550", "₹580", "₹600", "₹620"] },
            correct: 2
        },
        {
            en: { q: "Two numbers are in the ratio 3:5. If their LCM is 75, what is their HCF?", opts: ["3", "5", "15", "25"] },
            hi: { q: "दो संख्याएँ 3:5 के अनुपात में हैं। यदि उनका LCM 75 है, तो HCF क्या होगा?", opts: ["3", "5", "15", "25"] },
            correct: 1
        },
        {
            en: { q: "A shopkeeper gives a discount of 15% on the marked price. If the marked price is Rs. 400, what is the selling price?", opts: ["Rs. 320", "Rs. 330", "Rs. 340", "Rs. 350"] },
            hi: { q: "एक दुकानदार अंकित मूल्य पर 15% छूट देता है। यदि अंकित मूल्य ₹400 है, तो विक्रय मूल्य क्या होगा?", opts: ["₹320", "₹330", "₹340", "₹350"] },
            correct: 2
        },
        {
            en: { q: "A cistern has two pipes. One fills it in 12 minutes and the other empties it in 18 minutes. If both are opened together, the cistern will be filled in:", opts: ["36 minutes", "30 minutes", "24 minutes", "18 minutes"] },
            hi: { q: "एक टंकी में दो पाइप हैं। एक 12 मिनट में भरता है और दूसरा 18 मिनट में खाली करता है। दोनों एक साथ खोले जाने पर टंकी कितने मिनट में भरेगी?", opts: ["36 मिनट", "30 मिनट", "24 मिनट", "18 मिनट"] },
            correct: 0
        },
        {
            en: { q: "A and B together can do a work in 12 days. A alone can do it in 20 days. In how many days can B alone do it?", opts: ["25 days", "28 days", "30 days", "32 days"] },
            hi: { q: "A और B मिलकर एक काम 12 दिनों में कर सकते हैं। A अकेला 20 दिनों में कर सकता है। B अकेला कितने दिनों में करेगा?", opts: ["25 दिन", "28 दिन", "30 दिन", "32 दिन"] },
            correct: 2
        },
        {
            en: { q: "What is the compound interest on Rs. 5000 at 10% per annum for 2 years, compounded annually?", opts: ["Rs. 1000", "Rs. 1050", "Rs. 1025", "Rs. 1100"] },
            hi: { q: "₹5000 पर 10% प्रति वर्ष की दर से 2 वर्षों का वार्षिक चक्रवृद्धि ब्याज कितना होगा?", opts: ["₹1000", "₹1050", "₹1025", "₹1100"] },
            correct: 1
        },
        {
            en: { q: "The average of 5 numbers is 30. If one number is excluded, the average becomes 28. What is the excluded number?", opts: ["35", "38", "40", "42"] },
            hi: { q: "5 संख्याओं का औसत 30 है। यदि एक संख्या हटाने पर औसत 28 हो जाता है, तो हटाई गई संख्या क्या है?", opts: ["35", "38", "40", "42"] },
            correct: 1
        },
        {
            en: { q: "A boat goes 12 km upstream and 18 km downstream in 3 hours. If the speed of stream is 2 km/h, what is speed of boat in still water?", opts: ["8 km/h", "10 km/h", "12 km/h", "6 km/h"] },
            hi: { q: "एक नाव 3 घंटे में 12 किमी ऊपर की ओर और 18 किमी नीचे की ओर जाती है। यदि धारा की गति 2 km/h है, तो शांत जल में नाव की गति क्या है?", opts: ["8 km/h", "10 km/h", "12 km/h", "6 km/h"] },
            correct: 1
        },
        {
            en: { q: "If the radius of a circle is increased by 10%, by what percent does its area increase?", opts: ["10%", "21%", "20%", "100%"] },
            hi: { q: "यदि एक वृत्त की त्रिज्या 10% बढ़ाई जाए, तो उसका क्षेत्रफल कितने प्रतिशत बढ़ेगा?", opts: ["10%", "21%", "20%", "100%"] },
            correct: 1
        },
        {
            en: { q: "A man spends 60% of his salary on food and 20% on rent. If he saves Rs. 1600, what is his salary?", opts: ["Rs. 7000", "Rs. 7500", "Rs. 8000", "Rs. 8500"] },
            hi: { q: "एक व्यक्ति अपनी वेतन का 60% भोजन पर और 20% किराये पर खर्च करता है। यदि वह ₹1600 बचाता है, तो उसका वेतन क्या है?", opts: ["₹7000", "₹7500", "₹8000", "₹8500"] },
            correct: 2
        },
        {
            en: { q: "A number when divided by 296 gives a remainder of 75. When divided by 8, what is the remainder?", opts: ["1", "2", "3", "4"] },
            hi: { q: "एक संख्या को 296 से विभाजित करने पर शेषफल 75 आता है। उसी संख्या को 8 से विभाजित करने पर शेषफल क्या होगा?", opts: ["1", "2", "3", "4"] },
            correct: 2
        },
        {
            en: { q: "If 15 men can do a work in 20 days, how many men are needed to do the same work in 12 days?", opts: ["20", "22", "25", "28"] },
            hi: { q: "यदि 15 आदमी 20 दिनों में एक काम कर सकते हैं, तो उसी काम को 12 दिनों में पूरा करने के लिए कितने आदमियों की जरूरत है?", opts: ["20", "22", "25", "28"] },
            correct: 2
        },
        {
            en: { q: "In a mixture of 45 litres, milk and water are in ratio 4:1. How much water must be added to make ratio 3:2?", opts: ["10 litres", "12 litres", "15 litres", "18 litres"] },
            hi: { q: "45 लीटर के मिश्रण में दूध और पानी 4:1 के अनुपात में हैं। अनुपात 3:2 बनाने के लिए कितना पानी मिलाना होगा?", opts: ["10 लीटर", "12 लीटर", "15 लीटर", "18 लीटर"] },
            correct: 2
        },
        {
            en: { q: "The perimeter of a rectangle is 60 m and length is twice its breadth. What is the area?", opts: ["150 sq m", "180 sq m", "200 sq m", "240 sq m"] },
            hi: { q: "एक आयत का परिमाप 60 मीटर है और लंबाई चौड़ाई की दोगुनी है। क्षेत्रफल क्या होगा?", opts: ["150 वर्ग मीटर", "180 वर्ग मीटर", "200 वर्ग मीटर", "240 वर्ग मीटर"] },
            correct: 2
        },
        {
            en: { q: "A sum becomes Rs. 6050 in 2 years and Rs. 6655 in 3 years at compound interest. What is the rate of interest?", opts: ["8%", "10%", "12%", "15%"] },
            hi: { q: "एक राशि चक्रवृद्धि ब्याज पर 2 वर्षों में ₹6050 और 3 वर्षों में ₹6655 हो जाती है। ब्याज दर क्या है?", opts: ["8%", "10%", "12%", "15%"] },
            correct: 1
        },
        {
            en: { q: "The cost price of 20 articles is equal to the selling price of 16 articles. What is the profit percentage?", opts: ["20%", "22%", "25%", "28%"] },
            hi: { q: "20 वस्तुओं का क्रय मूल्य 16 वस्तुओं के विक्रय मूल्य के बराबर है। लाभ प्रतिशत क्या होगा?", opts: ["20%", "22%", "25%", "28%"] },
            correct: 2
        },
        {
            en: { q: "Two trains start at same time from A and B towards each other. After passing each other, they take 9 and 4 hours to reach B and A. What is the ratio of their speeds?", opts: ["2:3", "3:2", "4:9", "9:4"] },
            hi: { q: "दो रेलगाड़ियाँ A और B से एक ही समय एक दूसरे की ओर चलना शुरू करती हैं। एक दूसरे को पार करने के बाद वे B और A तक पहुँचने में क्रमशः 9 और 4 घंटे लेती हैं। उनकी गति का अनुपात क्या है?", opts: ["2:3", "3:2", "4:9", "9:4"] },
            correct: 0
        },
        {
            en: { q: "A and B invest Rs. 4000 and Rs. 6000 respectively. At year's end, total profit is Rs. 3500. What is B's share?", opts: ["Rs. 1400", "Rs. 2100", "Rs. 1750", "Rs. 1800"] },
            hi: { q: "A और B क्रमशः ₹4000 और ₹6000 निवेश करते हैं। साल के अंत में कुल लाभ ₹3500 है। B का हिस्सा क्या होगा?", opts: ["₹1400", "₹2100", "₹1750", "₹1800"] },
            correct: 1
        },
        {
            en: { q: "A sum of Rs. 2000 amounts to Rs. 2240 in 2 years at simple interest. What is the rate per annum?", opts: ["5%", "6%", "7%", "8%"] },
            hi: { q: "₹2000 की राशि 2 वर्षों में साधारण ब्याज से ₹2240 हो जाती है। वार्षिक दर क्या है?", opts: ["5%", "6%", "7%", "8%"] },
            correct: 1
        },
        {
            en: { q: "The speed of a boat in still water is 8 km/h and stream speed is 2 km/h. Time taken to go 24 km downstream is:", opts: ["2 hours", "3 hours", "4 hours", "2.4 hours"] },
            hi: { q: "शांत जल में नाव की गति 8 km/h है और धारा की गति 2 km/h है। 24 किमी धारा के साथ जाने में लगा समय है:", opts: ["2 घंटे", "3 घंटे", "4 घंटे", "2.4 घंटे"] },
            correct: 0
        },
        {
            en: { q: "What is 35% of 560?", opts: ["182", "192", "196", "202"] },
            hi: { q: "560 का 35% क्या है?", opts: ["182", "192", "196", "202"] },
            correct: 2
        },
        {
            en: { q: "Three partners invest in ratio 5:7:8. The total profit at the end of year is Rs. 8000. What is the share of the partner with highest investment?", opts: ["Rs. 2000", "Rs. 2800", "Rs. 3200", "Rs. 3000"] },
            hi: { q: "तीन साझेदार 5:7:8 के अनुपात में निवेश करते हैं। वर्ष के अंत में कुल लाभ ₹8000 है। सबसे अधिक निवेश वाले साझेदार का हिस्सा क्या होगा?", opts: ["₹2000", "₹2800", "₹3200", "₹3000"] },
            correct: 2
        },
        {
            en: { q: "If 7 times a number is 84 less than 11 times the number, what is the number?", opts: ["18", "21", "24", "27"] },
            hi: { q: "यदि किसी संख्या का 7 गुना उस संख्या के 11 गुने से 84 कम है, तो संख्या क्या है?", opts: ["18", "21", "24", "27"] },
            correct: 1
        },
        {
            en: { q: "On selling 17 balls at Rs. 720, there is a loss equal to the cost price of 5 balls. What is the cost price of a ball?", opts: ["Rs. 45", "Rs. 50", "Rs. 60", "Rs. 55"] },
            hi: { q: "17 गेंदों को ₹720 में बेचने पर 5 गेंदों के क्रय मूल्य के बराबर हानि होती है। एक गेंद का क्रय मूल्य क्या है?", opts: ["₹45", "₹50", "₹60", "₹55"] },
            correct: 2
        },
        {
            en: { q: "A train covers a distance of 360 km at a speed of 90 km/h. How much time does it take?", opts: ["3 hours", "4 hours", "5 hours", "6 hours"] },
            hi: { q: "एक रेलगाड़ी 90 km/h की गति से 360 किमी की दूरी तय करती है। इसमें कितना समय लगता है?", opts: ["3 घंटे", "4 घंटे", "5 घंटे", "6 घंटे"] },
            correct: 1
        },
        {
            en: { q: "What is the value of √(1024)?", opts: ["28", "30", "32", "34"] },
            hi: { q: "√(1024) का मान क्या है?", opts: ["28", "30", "32", "34"] },
            correct: 2
        },
        {
            en: { q: "Find the Simple Interest on Rs. 6400 at 6.25% per annum for 2 years:", opts: ["Rs. 800", "Rs. 900", "Rs. 750", "Rs. 850"] },
            hi: { q: "₹6400 पर 6.25% प्रति वर्ष की दर से 2 वर्षों का साधारण ब्याज ज्ञात करें:", opts: ["₹800", "₹900", "₹750", "₹850"] },
            correct: 0
        },
        {
            en: { q: "In a class of 60 students, 40% are girls. How many boys are there?", opts: ["24", "30", "36", "32"] },
            hi: { q: "60 छात्रों की एक कक्षा में 40% लड़कियाँ हैं। कितने लड़के हैं?", opts: ["24", "30", "36", "32"] },
            correct: 2
        },
        {
            en: { q: "A, B and C can do a work in 6, 8 and 12 days respectively. How long will they take working together?", opts: ["2 days", "2.67 days", "3 days", "4 days"] },
            hi: { q: "A, B और C एक काम क्रमशः 6, 8 और 12 दिनों में कर सकते हैं। एक साथ काम करने पर कितने दिन लगेंगे?", opts: ["2 दिन", "2.67 दिन", "3 दिन", "4 दिन"] },
            correct: 1
        },
        {
            en: { q: "The marked price of a watch is Rs. 1200. After two successive discounts of 10% and 5%, the selling price is:", opts: ["Rs. 1026", "Rs. 1030", "Rs. 1020", "Rs. 1040"] },
            hi: { q: "एक घड़ी का अंकित मूल्य ₹1200 है। 10% और 5% की दो क्रमिक छूटों के बाद विक्रय मूल्य है:", opts: ["₹1026", "₹1030", "₹1020", "₹1040"] },
            correct: 0
        },
        {
            en: { q: "What is the probability of getting a sum of 7 when two dice are rolled?", opts: ["1/6", "5/36", "7/36", "1/4"] },
            hi: { q: "दो पासे फेंकने पर 7 का योग आने की प्रायिकता क्या है?", opts: ["1/6", "5/36", "7/36", "1/4"] },
            correct: 0
        },
        {
            en: { q: "The present ages of A and B are in ratio 3:4. Five years later their ages will be in ratio 4:5. What is B's present age?", opts: ["15", "16", "20", "24"] },
            hi: { q: "A और B की वर्तमान आयु 3:4 के अनुपात में है। पाँच वर्ष बाद उनकी आयु 4:5 के अनुपात में होगी। B की वर्तमान आयु क्या है?", opts: ["15", "16", "20", "24"] },
            correct: 2
        },
        {
            en: { q: "How many litres of pure acid must be added to 20 litres of 30% acid solution to make it 50% acid?", opts: ["6 litres", "7 litres", "8 litres", "10 litres"] },
            hi: { q: "20 लीटर 30% अम्ल घोल को 50% अम्ल घोल बनाने के लिए कितने लीटर शुद्ध अम्ल मिलाना होगा?", opts: ["6 लीटर", "7 लीटर", "8 लीटर", "10 लीटर"] },
            correct: 2
        },
        {
            en: { q: "If 4x − 3 = 2x + 7, then x = ?", opts: ["3", "4", "5", "6"] },
            hi: { q: "यदि 4x − 3 = 2x + 7, तो x = ?", opts: ["3", "4", "5", "6"] },
            correct: 2
        },
        {
            en: { q: "A man buys a book for Rs. 120 and sells it for Rs. 150. What is the profit percentage?", opts: ["20%", "22%", "25%", "30%"] },
            hi: { q: "एक आदमी एक किताब ₹120 में खरीदता है और ₹150 में बेचता है। लाभ प्रतिशत क्या है?", opts: ["20%", "22%", "25%", "30%"] },
            correct: 2
        },
        {
            en: { q: "A shopkeeper marks up his goods by 25% and gives a discount of 20%. What is his profit or loss percentage?", opts: ["5% profit", "0% (no profit no loss)", "5% loss", "10% profit"] },
            hi: { q: "एक दुकानदार अपनी वस्तुओं पर 25% अधिक मूल्य अंकित करता है और 20% की छूट देता है। लाभ या हानि प्रतिशत क्या होगा?", opts: ["5% लाभ", "0% (न लाभ न हानि)", "5% हानि", "10% लाभ"] },
            correct: 1
        },
        {
            en: { q: "A rectangle has length 24 m and breadth 7 m. What is the length of its diagonal?", opts: ["22 m", "23 m", "24 m", "25 m"] },
            hi: { q: "एक आयत की लंबाई 24 मीटर और चौड़ाई 7 मीटर है। इसके विकर्ण की लंबाई क्या होगी?", opts: ["22 मीटर", "23 मीटर", "24 मीटर", "25 मीटर"] },
            correct: 3
        },
        {
            en: { q: "Two numbers are in the ratio 5:3. Their difference is 10. What is the smaller number?", opts: ["10", "15", "12", "20"] },
            hi: { q: "दो संख्याएँ 5:3 के अनुपात में हैं। उनका अंतर 10 है। छोटी संख्या क्या है?", opts: ["10", "15", "12", "20"] },
            correct: 1
        },
        {
            en: { q: "The sum of three consecutive even numbers is 78. What is the largest number?", opts: ["24", "26", "28", "30"] },
            hi: { q: "तीन क्रमागत सम संख्याओं का योग 78 है। सबसे बड़ी संख्या क्या है?", opts: ["24", "26", "28", "30"] },
            correct: 2
        },
        {
            en: { q: "A 200 m long train passes a 300 m platform in 25 seconds. What is the speed of the train?", opts: ["18 m/s", "20 m/s", "22 m/s", "24 m/s"] },
            hi: { q: "200 मीटर लंबी एक रेलगाड़ी 300 मीटर के प्लेटफ़ॉर्म को 25 सेकंड में पार करती है। रेलगाड़ी की गति क्या है?", opts: ["18 m/s", "20 m/s", "22 m/s", "24 m/s"] },
            correct: 1
        },

        // --- English Language (Q91–Q130) ---
        {
            en: { q: "Choose the correct synonym for BENEVOLENT:", opts: ["Cruel", "Kind", "Selfish", "Lazy"] },
            hi: { q: "BENEVOLENT का सही पर्यायवाची शब्द चुनें:", opts: ["क्रूर", "दयालु", "स्वार्थी", "आलसी"] },
            correct: 1
        },
        {
            en: { q: "Choose the correct antonym for DILIGENT:", opts: ["Hardworking", "Careful", "Lazy", "Skillful"] },
            hi: { q: "DILIGENT का सही विलोम शब्द चुनें:", opts: ["मेहनती", "सावधान", "आलसी", "कुशल"] },
            correct: 2
        },
        {
            en: { q: "Select the correct meaning of the idiom 'Bite the bullet':", opts: ["To eat fast", "To endure pain bravely", "To argue strongly", "To fire a gun"] },
            hi: { q: "मुहावरे 'Bite the bullet' का सही अर्थ चुनें:", opts: ["जल्दी खाना", "साहसपूर्वक कष्ट सहना", "तीव्रता से बहस करना", "बंदूक चलाना"] },
            correct: 1
        },
        {
            en: { q: "Fill in the blank: She ______ to the market every day. (go/goes/gone/going)", opts: ["go", "goes", "gone", "going"] },
            hi: { q: "रिक्त स्थान भरें: She ______ to the market every day.", opts: ["go", "goes", "gone", "going"] },
            correct: 1
        },
        {
            en: { q: "Identify the error in the sentence: 'He is one of the best student in the class.'", opts: ["is", "one of", "student", "in the class"] },
            hi: { q: "वाक्य में त्रुटि पहचानें: 'He is one of the best student in the class.'", opts: ["is", "one of", "student", "in the class"] },
            correct: 2
        },
        {
            en: { q: "Choose the correctly spelt word:", opts: ["Accomodation", "Accommodation", "Acommodation", "Acomodation"] },
            hi: { q: "सही वर्तनी वाला शब्द चुनें:", opts: ["Accomodation", "Accommodation", "Acommodation", "Acomodation"] },
            correct: 1
        },
        {
            en: { q: "Select the correct passive voice: 'The teacher teaches the students.'", opts: ["The students were taught by the teacher.", "The students are taught by the teacher.", "The students have been taught by the teacher.", "The students taught the teacher."] },
            hi: { q: "सही कर्मवाच्य चुनें: 'The teacher teaches the students.'", opts: ["The students were taught by the teacher.", "The students are taught by the teacher.", "The students have been taught by the teacher.", "The students taught the teacher."] },
            correct: 1
        },
        {
            en: { q: "Choose the correct meaning of the word 'LUCID':", opts: ["Confused", "Dark", "Clear and easy to understand", "Expensive"] },
            hi: { q: "'LUCID' शब्द का सही अर्थ चुनें:", opts: ["भ्रमित", "अंधेरा", "स्पष्ट और समझने में आसान", "महंगा"] },
            correct: 2
        },
        {
            en: { q: "Fill in the blank with the correct preposition: He is good ______ mathematics.", opts: ["in", "at", "on", "with"] },
            hi: { q: "सही preposition से रिक्त स्थान भरें: He is good ______ mathematics.", opts: ["in", "at", "on", "with"] },
            correct: 1
        },
        {
            en: { q: "Identify the correct indirect speech of: He said, 'I am happy.'", opts: ["He said that he was happy.", "He said that he is happy.", "He told that he was happy.", "He says that he was happy."] },
            hi: { q: "निम्नलिखित का सही indirect speech पहचानें: He said, 'I am happy.'", opts: ["He said that he was happy.", "He said that he is happy.", "He told that he was happy.", "He says that he was happy."] },
            correct: 0
        },
        {
            en: { q: "Choose the word most similar in meaning to VERBOSE:", opts: ["Silent", "Wordy", "Brief", "Angry"] },
            hi: { q: "VERBOSE के समान अर्थ वाला शब्द चुनें:", opts: ["चुप", "शब्दाडंबरपूर्ण", "संक्षिप्त", "क्रोधित"] },
            correct: 1
        },
        {
            en: { q: "Find the correctly formed sentence:", opts: ["He has went to school.", "He have gone to school.", "He has gone to school.", "He had went to school."] },
            hi: { q: "सही रूप से बना वाक्य खोजें:", opts: ["He has went to school.", "He have gone to school.", "He has gone to school.", "He had went to school."] },
            correct: 2
        },
        {
            en: { q: "Select the one-word substitution for 'One who walks in sleep':", opts: ["Insomniac", "Somnambulant", "Somnambulist", "Somnolent"] },
            hi: { q: "नींद में चलने वाले के लिए एक शब्द प्रतिस्थापन चुनें:", opts: ["Insomniac", "Somnambulant", "Somnambulist", "Somnolent"] },
            correct: 2
        },
        {
            en: { q: "Fill in the blank: Neither he nor his friends ______ invited to the party.", opts: ["was", "were", "has", "have"] },
            hi: { q: "रिक्त स्थान भरें: Neither he nor his friends ______ invited to the party.", opts: ["was", "were", "has", "have"] },
            correct: 1
        },
        {
            en: { q: "Choose the correct meaning of idiom 'Burn the midnight oil':", opts: ["To waste fuel", "To work late into the night", "To start a fire", "To sleep early"] },
            hi: { q: "मुहावरे 'Burn the midnight oil' का सही अर्थ चुनें:", opts: ["ईंधन बर्बाद करना", "रात देर तक काम करना", "आग जलाना", "जल्दी सोना"] },
            correct: 1
        },
        {
            en: { q: "Which of the following is NOT a type of clause?", opts: ["Noun clause", "Adjective clause", "Pronoun clause", "Adverb clause"] },
            hi: { q: "निम्नलिखित में से कौन सा clause का प्रकार नहीं है?", opts: ["Noun clause", "Adjective clause", "Pronoun clause", "Adverb clause"] },
            correct: 2
        },
        {
            en: { q: "Choose the antonym of 'OPAQUE':", opts: ["Dark", "Transparent", "Dense", "Solid"] },
            hi: { q: "'OPAQUE' का विलोम शब्द चुनें:", opts: ["अंधेरा", "पारदर्शी", "घना", "ठोस"] },
            correct: 1
        },
        {
            en: { q: "Fill in the blank with correct article: I saw ______ one-eyed man in the market.", opts: ["a", "an", "the", "no article needed"] },
            hi: { q: "सही article से रिक्त स्थान भरें: I saw ______ one-eyed man in the market.", opts: ["a", "an", "the", "no article needed"] },
            correct: 0
        },
        {
            en: { q: "Choose the meaning of 'AMBIGUOUS':", opts: ["Clear", "Open to more than one interpretation", "Impossible", "Unimportant"] },
            hi: { q: "'AMBIGUOUS' का अर्थ चुनें:", opts: ["स्पष्ट", "एक से अधिक अर्थों वाला", "असंभव", "महत्वहीन"] },
            correct: 1
        },
        {
            en: { q: "Select the correct question tag: 'She speaks French, ______?'", opts: ["does she", "doesn't she", "isn't she", "wasn't she"] },
            hi: { q: "सही question tag चुनें: 'She speaks French, ______?'", opts: ["does she", "doesn't she", "isn't she", "wasn't she"] },
            correct: 1
        },
        {
            en: { q: "Which word is the correct spelling?", opts: ["Neccessary", "Necesary", "Necessary", "Neccesary"] },
            hi: { q: "कौन सा शब्द सही वर्तनी वाला है?", opts: ["Neccessary", "Necesary", "Necessary", "Neccesary"] },
            correct: 2
        },
        {
            en: { q: "Pick the sentence with correct subject-verb agreement:", opts: ["The news are good.", "The cattle is grazing.", "The jury were divided in opinion.", "Mathematics are my favourite subject."] },
            hi: { q: "सही subject-verb agreement वाला वाक्य चुनें:", opts: ["The news are good.", "The cattle is grazing.", "The jury were divided in opinion.", "Mathematics are my favourite subject."] },
            correct: 2
        },
        {
            en: { q: "Select the correct meaning of 'EXORBITANT':", opts: ["Very cheap", "Extremely high in price", "Moderate", "Affordable"] },
            hi: { q: "'EXORBITANT' का सही अर्थ चुनें:", opts: ["बहुत सस्ता", "अत्यधिक महंगा", "सामान्य", "किफ़ायती"] },
            correct: 1
        },
        {
            en: { q: "Select the synonym of PLACID:", opts: ["Angry", "Calm", "Noisy", "Dangerous"] },
            hi: { q: "PLACID का पर्यायवाची शब्द चुनें:", opts: ["क्रोधित", "शांत", "शोरगुल", "खतरनाक"] },
            correct: 1
        },
        {
            en: { q: "Fill in the blank: The committee has submitted ______ report.", opts: ["their", "its", "it's", "there"] },
            hi: { q: "रिक्त स्थान भरें: The committee has submitted ______ report.", opts: ["their", "its", "it's", "there"] },
            correct: 1
        },
        {
            en: { q: "Choose the correct voice change: 'The lion was chased by the dog.'", opts: ["The dog chased the lion.", "The dog is chasing the lion.", "The dog will chase the lion.", "The dog had chased the lion."] },
            hi: { q: "सही voice change चुनें: 'The lion was chased by the dog.'", opts: ["The dog chased the lion.", "The dog is chasing the lion.", "The dog will chase the lion.", "The dog had chased the lion."] },
            correct: 0
        },
        {
            en: { q: "The word 'PEEVISH' means:", opts: ["Happy", "Irritable", "Generous", "Energetic"] },
            hi: { q: "'PEEVISH' शब्द का अर्थ है:", opts: ["खुश", "चिड़चिड़ा", "उदार", "ऊर्जावान"] },
            correct: 1
        },
        {
            en: { q: "Choose the correct meaning of one-word substitution 'Philatelist':", opts: ["One who collects coins", "One who collects stamps", "One who studies birds", "One who writes novels"] },
            hi: { q: "'Philatelist' शब्द का सही अर्थ चुनें:", opts: ["जो सिक्के संग्रह करता है", "जो डाक टिकट संग्रह करता है", "जो पक्षियों का अध्ययन करता है", "जो उपन्यास लिखता है"] },
            correct: 1
        },
        {
            en: { q: "Identify the type of sentence: 'What a beautiful day it is!'", opts: ["Declarative", "Interrogative", "Exclamatory", "Imperative"] },
            hi: { q: "वाक्य का प्रकार पहचानें: 'What a beautiful day it is!'", opts: ["विधानात्मक", "प्रश्नवाचक", "विस्मयादिबोधक", "आज्ञार्थक"] },
            correct: 2
        },
        {
            en: { q: "Fill in: The train had left before I ______ to the station.", opts: ["reach", "reached", "had reached", "reaching"] },
            hi: { q: "रिक्त स्थान भरें: The train had left before I ______ to the station.", opts: ["reach", "reached", "had reached", "reaching"] },
            correct: 1
        },
        {
            en: { q: "Select the word which is opposite in meaning to FRUGAL:", opts: ["Economical", "Thrifty", "Wasteful", "Careful"] },
            hi: { q: "FRUGAL के विपरीत अर्थ वाला शब्द चुनें:", opts: ["मितव्ययी", "किफायती", "फिज़ूलखर्ची", "सावधान"] },
            correct: 2
        },

        // --- General Awareness – Banking & Finance (Q131–Q175) ---
        {
            en: { q: "Which committee recommended the establishment of NABARD?", opts: ["Narasimham Committee", "Shivaraman Committee", "Kelkar Committee", "Rangarajan Committee"] },
            hi: { q: "किस समिति ने NABARD की स्थापना की सिफारिश की?", opts: ["नरसिम्हम समिति", "शिवरामन समिति", "केलकर समिति", "रंगराजन समिति"] },
            correct: 1
        },
        {
            en: { q: "The headquarters of IBPS (Institute of Banking Personnel Selection) is located in:", opts: ["New Delhi", "Mumbai", "Chennai", "Kolkata"] },
            hi: { q: "IBPS (Institute of Banking Personnel Selection) का मुख्यालय कहाँ स्थित है?", opts: ["नई दिल्ली", "मुंबई", "चेन्नई", "कोलकाता"] },
            correct: 1
        },
        {
            en: { q: "Which is the apex regulatory body for the financial markets in India?", opts: ["RBI", "SEBI", "IRDAI", "NABARD"] },
            hi: { q: "भारत में वित्तीय बाज़ारों का सर्वोच्च नियामक निकाय कौन सा है?", opts: ["RBI", "SEBI", "IRDAI", "NABARD"] },
            correct: 1
        },
        {
            en: { q: "What does NPA stand for in banking terminology?", opts: ["Net Profit Asset", "Non-Performing Asset", "Net Pay Amount", "Non-Provisional Asset"] },
            hi: { q: "बैंकिंग शब्दावली में NPA का पूर्ण रूप क्या है?", opts: ["Net Profit Asset", "Non-Performing Asset", "Net Pay Amount", "Non-Provisional Asset"] },
            correct: 1
        },
        {
            en: { q: "The monetary policy in India is formulated by:", opts: ["Ministry of Finance", "SEBI", "Reserve Bank of India", "Planning Commission"] },
            hi: { q: "भारत में मौद्रिक नीति किसके द्वारा तैयार की जाती है?", opts: ["वित्त मंत्रालय", "SEBI", "भारतीय रिजर्व बैंक", "योजना आयोग"] },
            correct: 2
        },
        {
            en: { q: "Which of the following is NOT a function of commercial banks?", opts: ["Accepting deposits", "Giving loans", "Issuing currency notes", "Remittance of funds"] },
            hi: { q: "निम्नलिखित में से कौन सा व्यावसायिक बैंकों का कार्य नहीं है?", opts: ["जमा स्वीकार करना", "ऋण देना", "मुद्रा नोट जारी करना", "धन प्रेषण"] },
            correct: 2
        },
        {
            en: { q: "What is the full form of RTGS?", opts: ["Real Time Gross Settlement", "Regional Transfer Gross System", "Real Transfer Gross Settlement", "Real Time General Settlement"] },
            hi: { q: "RTGS का पूर्ण रूप क्या है?", opts: ["Real Time Gross Settlement", "Regional Transfer Gross System", "Real Transfer Gross Settlement", "Real Time General Settlement"] },
            correct: 0
        },
        {
            en: { q: "The Reserve Bank of India was established in the year:", opts: ["1935", "1947", "1949", "1950"] },
            hi: { q: "भारतीय रिजर्व बैंक की स्थापना किस वर्ष हुई थी?", opts: ["1935", "1947", "1949", "1950"] },
            correct: 0
        },
        {
            en: { q: "Which bank is called the 'Banker's Bank' in India?", opts: ["State Bank of India", "Punjab National Bank", "Reserve Bank of India", "Bank of Baroda"] },
            hi: { q: "भारत में किस बैंक को 'बैंकों का बैंक' कहा जाता है?", opts: ["भारतीय स्टेट बैंक", "पंजाब नेशनल बैंक", "भारतीय रिजर्व बैंक", "बैंक ऑफ बड़ौदा"] },
            correct: 2
        },
        {
            en: { q: "CRR stands for:", opts: ["Credit Reserve Ratio", "Cash Reserve Ratio", "Capital Reserve Requirement", "Currency Reserve Ratio"] },
            hi: { q: "CRR का पूर्ण रूप है:", opts: ["Credit Reserve Ratio", "Cash Reserve Ratio", "Capital Reserve Requirement", "Currency Reserve Ratio"] },
            correct: 1
        },
        {
            en: { q: "What is the minimum balance to open a Basic Savings Bank Deposit Account (BSBDA) in India?", opts: ["Rs. 500", "Rs. 1000", "Zero", "Rs. 100"] },
            hi: { q: "भारत में Basic Savings Bank Deposit Account (BSBDA) खोलने के लिए न्यूनतम शेष राशि क्या है?", opts: ["₹500", "₹1000", "शून्य", "₹100"] },
            correct: 2
        },
        {
            en: { q: "Which scheme was launched by the Government of India for financial inclusion of the unbanked population?", opts: ["Jan Dhan Yojana", "Kisan Vikas Patra", "Atal Pension Yojana", "Sukanya Samriddhi Yojana"] },
            hi: { q: "अनबैंक्ड आबादी के वित्तीय समावेशन के लिए भारत सरकार ने कौन सी योजना शुरू की?", opts: ["जन धन योजना", "किसान विकास पत्र", "अटल पेंशन योजना", "सुकन्या समृद्धि योजना"] },
            correct: 0
        },
        {
            en: { q: "SLR stands for:", opts: ["Statutory Liquidity Ratio", "Standard Lending Rate", "Surplus Liquidity Reserve", "Secured Loan Rate"] },
            hi: { q: "SLR का पूर्ण रूप है:", opts: ["Statutory Liquidity Ratio", "Standard Lending Rate", "Surplus Liquidity Reserve", "Secured Loan Rate"] },
            correct: 0
        },
        {
            en: { q: "NEFT stands for:", opts: ["National Electronic Fund Transfer", "Net Electronic Fund Transfer", "National Economic Fund Transfer", "None of these"] },
            hi: { q: "NEFT का पूर्ण रूप है:", opts: ["National Electronic Fund Transfer", "Net Electronic Fund Transfer", "National Economic Fund Transfer", "इनमें से कोई नहीं"] },
            correct: 0
        },
        {
            en: { q: "Which organisation regulates the insurance sector in India?", opts: ["RBI", "SEBI", "IRDAI", "PFRDA"] },
            hi: { q: "भारत में बीमा क्षेत्र को कौन नियंत्रित करता है?", opts: ["RBI", "SEBI", "IRDAI", "PFRDA"] },
            correct: 2
        },
        {
            en: { q: "Which of the following is a credit rating agency in India?", opts: ["NSE", "BSE", "CRISIL", "SIDBI"] },
            hi: { q: "निम्नलिखित में से कौन सा भारत में एक क्रेडिट रेटिंग एजेंसी है?", opts: ["NSE", "BSE", "CRISIL", "SIDBI"] },
            correct: 2
        },
        {
            en: { q: "The headquarters of the World Bank is located in:", opts: ["New York", "London", "Washington D.C.", "Geneva"] },
            hi: { q: "विश्व बैंक का मुख्यालय कहाँ स्थित है?", opts: ["न्यूयॉर्क", "लंदन", "वाशिंगटन डी.सी.", "जिनेवा"] },
            correct: 2
        },
        {
            en: { q: "Basel III norms are related to:", opts: ["Insurance companies", "Capital adequacy of banks", "Export promotion", "Tax reforms"] },
            hi: { q: "Basel III नियम किससे संबंधित हैं?", opts: ["बीमा कंपनियाँ", "बैंकों की पूंजी पर्याप्तता", "निर्यात संवर्धन", "कर सुधार"] },
            correct: 1
        },
        {
            en: { q: "What is 'Repo Rate'?", opts: ["Rate at which RBI borrows from commercial banks", "Rate at which commercial banks borrow from RBI", "Rate of return on government bonds", "Minimum lending rate of banks"] },
            hi: { q: "'Repo Rate' क्या है?", opts: ["वह दर जिस पर RBI वाणिज्यिक बैंकों से उधार लेता है", "वह दर जिस पर वाणिज्यिक बैंक RBI से उधार लेते हैं", "सरकारी बांड पर रिटर्न की दर", "बैंकों की न्यूनतम उधार दर"] },
            correct: 1
        },
        {
            en: { q: "Which of the following countries is NOT a member of BRICS?", opts: ["Brazil", "Russia", "Indonesia", "China"] },
            hi: { q: "निम्नलिखित में से कौन सा देश BRICS का सदस्य नहीं है?", opts: ["ब्राज़ील", "रूस", "इंडोनेशिया", "चीन"] },
            correct: 2
        },
        {
            en: { q: "Which is the oldest public sector bank of India?", opts: ["State Bank of India", "Bank of India", "Allahabad Bank", "Punjab National Bank"] },
            hi: { q: "भारत का सबसे पुराना सार्वजनिक क्षेत्र का बैंक कौन सा है?", opts: ["भारतीय स्टेट बैंक", "बैंक ऑफ इंडिया", "इलाहाबाद बैंक", "पंजाब नेशनल बैंक"] },
            correct: 2
        },
        {
            en: { q: "Pradhan Mantri Mudra Yojana provides loans up to a maximum of:", opts: ["Rs. 5 lakh", "Rs. 10 lakh", "Rs. 15 lakh", "Rs. 20 lakh"] },
            hi: { q: "प्रधानमंत्री मुद्रा योजना अधिकतम कितने तक ऋण प्रदान करती है?", opts: ["₹5 लाख", "₹10 लाख", "₹15 लाख", "₹20 लाख"] },
            correct: 1
        },
        {
            en: { q: "KYC stands for:", opts: ["Keep Your Cash", "Know Your Customer", "Keep Your Credit", "Know Your Creditor"] },
            hi: { q: "KYC का पूर्ण रूप है:", opts: ["Keep Your Cash", "Know Your Customer", "Keep Your Credit", "Know Your Creditor"] },
            correct: 1
        },
        {
            en: { q: "Which bank was formed by the merger of State Bank of India and its associate banks?", opts: ["Bank of Baroda", "Punjab National Bank", "State Bank of India (post-merger)", "Canara Bank"] },
            hi: { q: "किस बैंक का गठन भारतीय स्टेट बैंक और उसके सहयोगी बैंकों के विलय से हुआ?", opts: ["बैंक ऑफ बड़ौदा", "पंजाब नेशनल बैंक", "भारतीय स्टेट बैंक (विलय के बाद)", "केनरा बैंक"] },
            correct: 2
        },
        {
            en: { q: "The Marginal Standing Facility (MSF) rate is generally ______ than Repo Rate.", opts: ["lower", "higher", "equal", "unrelated"] },
            hi: { q: "सीमांत स्थायी सुविधा (MSF) दर आमतौर पर Repo Rate से ______ होती है।", opts: ["कम", "अधिक", "बराबर", "असंबंधित"] },
            correct: 1
        },
        {
            en: { q: "Which body supervises the functioning of cooperative banks in India?", opts: ["SEBI", "RBI", "NABARD", "Both RBI and NABARD"] },
            hi: { q: "भारत में सहकारी बैंकों के कार्यकरण की निगरानी कौन करता है?", opts: ["SEBI", "RBI", "NABARD", "RBI और NABARD दोनों"] },
            correct: 3
        },

        // --- Computer Knowledge (Q176–Q200) ---
        {
            en: { q: "What does CPU stand for?", opts: ["Central Processing Unit", "Computer Processing Unit", "Control Processing Unit", "Core Processing Unit"] },
            hi: { q: "CPU का पूर्ण रूप क्या है?", opts: ["Central Processing Unit", "Computer Processing Unit", "Control Processing Unit", "Core Processing Unit"] },
            correct: 0
        },
        {
            en: { q: "Which of the following is an example of an operating system?", opts: ["Microsoft Word", "Adobe Photoshop", "Windows 10", "Google Chrome"] },
            hi: { q: "निम्नलिखित में से कौन सा ऑपरेटिंग सिस्टम का उदाहरण है?", opts: ["Microsoft Word", "Adobe Photoshop", "Windows 10", "Google Chrome"] },
            correct: 2
        },
        {
            en: { q: "What does HTTP stand for?", opts: ["HyperText Transfer Protocol", "High Transfer Text Protocol", "HyperText Transfer Process", "Home Transfer Text Protocol"] },
            hi: { q: "HTTP का पूर्ण रूप क्या है?", opts: ["HyperText Transfer Protocol", "High Transfer Text Protocol", "HyperText Transfer Process", "Home Transfer Text Protocol"] },
            correct: 0
        },
        {
            en: { q: "RAM stands for:", opts: ["Read Access Memory", "Random Access Memory", "Rapid Access Memory", "Read Assigned Memory"] },
            hi: { q: "RAM का पूर्ण रूप है:", opts: ["Read Access Memory", "Random Access Memory", "Rapid Access Memory", "Read Assigned Memory"] },
            correct: 1
        },
        {
            en: { q: "Which of the following is a primary storage device?", opts: ["Hard Disk", "RAM", "CD-ROM", "USB Drive"] },
            hi: { q: "निम्नलिखित में से कौन सा प्राथमिक भंडारण उपकरण है?", opts: ["Hard Disk", "RAM", "CD-ROM", "USB Drive"] },
            correct: 1
        },
        {
            en: { q: "A firewall in computer networking is used to:", opts: ["Speed up internet", "Protect network from unauthorized access", "Store data", "Compress files"] },
            hi: { q: "कंप्यूटर नेटवर्किंग में फ़ायरवॉल का उपयोग किया जाता है:", opts: ["इंटरनेट गति बढ़ाने के लिए", "अनधिकृत पहुँच से नेटवर्क की रक्षा के लिए", "डेटा संग्रहीत करने के लिए", "फ़ाइलें संपीड़ित करने के लिए"] },
            correct: 1
        },
        {
            en: { q: "Which of the following is NOT a type of computer virus?", opts: ["Trojan Horse", "Worm", "Bug", "Firewall"] },
            hi: { q: "निम्नलिखित में से कौन सा कंप्यूटर वायरस का प्रकार नहीं है?", opts: ["Trojan Horse", "Worm", "Bug", "Firewall"] },
            correct: 3
        },
        {
            en: { q: "Which of the following is a web browser?", opts: ["Oracle", "MS Excel", "Mozilla Firefox", "Linux"] },
            hi: { q: "निम्नलिखित में से कौन सा वेब ब्राउज़र है?", opts: ["Oracle", "MS Excel", "Mozilla Firefox", "Linux"] },
            correct: 2
        },
        {
            en: { q: "1 byte is equal to how many bits?", opts: ["4", "8", "16", "32"] },
            hi: { q: "1 byte कितने bits के बराबर है?", opts: ["4", "8", "16", "32"] },
            correct: 1
        },
        {
            en: { q: "Which shortcut key is used to UNDO the last action in MS Word?", opts: ["Ctrl+Z", "Ctrl+Y", "Ctrl+U", "Alt+Z"] },
            hi: { q: "MS Word में अंतिम क्रिया को UNDO करने के लिए कौन सी शॉर्टकट key का उपयोग किया जाता है?", opts: ["Ctrl+Z", "Ctrl+Y", "Ctrl+U", "Alt+Z"] },
            correct: 0
        },
        {
            en: { q: "Which of the following is the full form of 'URL'?", opts: ["Uniform Resource Locator", "Universal Resource Link", "Unique Record Location", "Uniform Record Locator"] },
            hi: { q: "'URL' का पूर्ण रूप क्या है?", opts: ["Uniform Resource Locator", "Universal Resource Link", "Unique Record Location", "Uniform Record Locator"] },
            correct: 0
        },
        {
            en: { q: "The process of starting a computer is called:", opts: ["Processing", "Booting", "Saving", "Loading"] },
            hi: { q: "कंप्यूटर चालू करने की प्रक्रिया को क्या कहते हैं?", opts: ["Processing", "Booting", "Saving", "Loading"] },
            correct: 1
        },
        {
            en: { q: "MS Excel is a:", opts: ["Word Processor", "Spreadsheet Software", "Database Software", "Presentation Software"] },
            hi: { q: "MS Excel है:", opts: ["Word Processor", "Spreadsheet Software", "Database Software", "Presentation Software"] },
            correct: 1
        },
        {
            en: { q: "Which of the following is used for sending and receiving emails?", opts: ["FTP", "SMTP", "HTTP", "SNMP"] },
            hi: { q: "निम्नलिखित में से कौन ईमेल भेजने और प्राप्त करने के लिए उपयोग किया जाता है?", opts: ["FTP", "SMTP", "HTTP", "SNMP"] },
            correct: 1
        },
        {
            en: { q: "The full form of PDF is:", opts: ["Portable Document File", "Portable Document Format", "Personal Document File", "Printable Document Format"] },
            hi: { q: "PDF का पूर्ण रूप है:", opts: ["Portable Document File", "Portable Document Format", "Personal Document File", "Printable Document Format"] },
            correct: 1
        },
        {
            en: { q: "Which key is used to delete the character to the left of the cursor?", opts: ["Delete", "Backspace", "Esc", "Shift"] },
            hi: { q: "कर्सर के बाईं ओर के वर्ण को हटाने के लिए कौन सी key का उपयोग किया जाता है?", opts: ["Delete", "Backspace", "Esc", "Shift"] },
            correct: 1
        },
        {
            en: { q: "The term 'Phishing' in cyber security refers to:", opts: ["Fishing online", "Fraudulently obtaining personal information", "Hacking hardware", "Installing software"] },
            hi: { q: "साइबर सुरक्षा में 'Phishing' शब्द का अर्थ है:", opts: ["ऑनलाइन मछली पकड़ना", "व्यक्तिगत जानकारी धोखे से प्राप्त करना", "हार्डवेयर हैक करना", "सॉफ्टवेयर इंस्टॉल करना"] },
            correct: 1
        },
        {
            en: { q: "Which of the following is NOT an input device?", opts: ["Keyboard", "Mouse", "Scanner", "Monitor"] },
            hi: { q: "निम्नलिखित में से कौन सा इनपुट उपकरण नहीं है?", opts: ["Keyboard", "Mouse", "Scanner", "Monitor"] },
            correct: 3
        },
        {
            en: { q: "The function key F5 in MS Word is used to:", opts: ["Save the file", "Open Find & Replace dialog", "Close the document", "Print the document"] },
            hi: { q: "MS Word में फंक्शन key F5 का उपयोग किया जाता है:", opts: ["फ़ाइल सहेजने के लिए", "Find & Replace डायलॉग खोलने के लिए", "दस्तावेज़ बंद करने के लिए", "दस्तावेज़ प्रिंट करने के लिए"] },
            correct: 1
        },
        {
            en: { q: "MICR stands for:", opts: ["Magnetic Ink Character Recognition", "Magnetic Interface Character Reader", "Manual Input Character Recognition", "Magnetic Input Control Reader"] },
            hi: { q: "MICR का पूर्ण रूप है:", opts: ["Magnetic Ink Character Recognition", "Magnetic Interface Character Reader", "Manual Input Character Recognition", "Magnetic Input Control Reader"] },
            correct: 0
        },
        {
            en: { q: "Which of the following is the correct extension for an MS Word document?", opts: [".txt", ".xls", ".docx", ".ppt"] },
            hi: { q: "MS Word दस्तावेज़ के लिए सही एक्सटेंशन कौन सा है?", opts: [".txt", ".xls", ".docx", ".ppt"] },
            correct: 2
        },
        {
            en: { q: "What is the use of Ctrl+P in MS Office?", opts: ["Paste", "Print", "Paragraph formatting", "Preview"] },
            hi: { q: "MS Office में Ctrl+P का उपयोग क्या है?", opts: ["Paste", "Print", "Paragraph formatting", "Preview"] },
            correct: 1
        },
        {
            en: { q: "LAN stands for:", opts: ["Large Area Network", "Local Area Network", "Linked Area Network", "Local Access Network"] },
            hi: { q: "LAN का पूर्ण रूप है:", opts: ["Large Area Network", "Local Area Network", "Linked Area Network", "Local Access Network"] },
            correct: 1
        },
        {
            en: { q: "Which of the following is used to uniquely identify a computer on the internet?", opts: ["Email ID", "IP Address", "Username", "Password"] },
            hi: { q: "इंटरनेट पर किसी कंप्यूटर की विशिष्ट पहचान के लिए क्या उपयोग किया जाता है?", opts: ["Email ID", "IP Address", "Username", "Password"] },
            correct: 1
        },
        {
            en: { q: "Which generation of computers uses VLSI (Very Large Scale Integration) technology?", opts: ["First", "Second", "Third", "Fourth"] },
            hi: { q: "VLSI (Very Large Scale Integration) तकनीक किस पीढ़ी के कंप्यूटर में उपयोग की जाती है?", opts: ["पहली", "दूसरी", "तीसरी", "चौथी"] },
            correct: 3
        },
        {
            en: { q: "The full form of GUI is:", opts: ["General User Interface", "Graphical User Interface", "Global Unified Interface", "Graphical Unified Interface"] },
            hi: { q: "GUI का पूर्ण रूप है:", opts: ["General User Interface", "Graphical User Interface", "Global Unified Interface", "Graphical Unified Interface"] },
            correct: 1
        },

        // --- Additional Reasoning (Q169–Q180) ---
        {
            en: { q: "How many times do the hands of a clock coincide in 12 hours?", opts: ["10", "11", "12", "22"] },
            hi: { q: "12 घंटों में घड़ी की सुइयाँ कितनी बार मिलती हैं?", opts: ["10", "11", "12", "22"] },
            correct: 1
        },
        {
            en: { q: "In a certain code, 'STRONG' is written as 'ROTNSG'. How is 'FINGER' written?", opts: ["IGNEFR", "IGENFR", "INGFER", "NGIEFR"] },
            hi: { q: "एक कूट भाषा में 'STRONG' को 'ROTNSG' लिखा जाता है। 'FINGER' को कैसे लिखा जाएगा?", opts: ["IGNEFR", "IGENFR", "INGFER", "NGIEFR"] },
            correct: 0
        },
        {
            en: { q: "Find the next number: 1, 4, 9, 16, 25, ?", opts: ["30", "36", "49", "35"] },
            hi: { q: "अगली संख्या ज्ञात करें: 1, 4, 9, 16, 25, ?", opts: ["30", "36", "49", "35"] },
            correct: 1
        },
        {
            en: { q: "A is B's sister. C is B's mother. D is C's father. E is D's mother. How is A related to D?", opts: ["Granddaughter", "Daughter", "Great Granddaughter", "Grandmother"] },
            hi: { q: "A, B की बहन है। C, B की माँ है। D, C का पिता है। E, D की माँ है। A, D से कैसे संबंधित है?", opts: ["पोती", "बेटी", "पड़पोती", "दादी"] },
            correct: 0
        },
        {
            en: { q: "In a group of 6 persons P, Q, R, S, T, U – P is taller than Q but shorter than R. S is the shortest. T is taller than U but shorter than P. Who is the tallest?", opts: ["P", "R", "T", "U"] },
            hi: { q: "6 व्यक्तियों P, Q, R, S, T, U के समूह में – P, Q से लंबा है लेकिन R से छोटा है। S सबसे छोटा है। T, U से लंबा है लेकिन P से छोटा है। सबसे लंबा कौन है?", opts: ["P", "R", "T", "U"] },
            correct: 1
        },
        {
            en: { q: "Statement: No flower is fruit. All fruits are trees. Conclusion: I. No flower is tree. II. Some trees are not flowers. Which follows?", opts: ["Only I", "Only II", "Both I and II", "Neither I nor II"] },
            hi: { q: "कथन: कोई फूल फल नहीं है। सभी फल पेड़ हैं। निष्कर्ष: I. कोई फूल पेड़ नहीं है। II. कुछ पेड़ फूल नहीं हैं। कौन सा सही है?", opts: ["केवल I", "केवल II", "I और II दोनों", "न I न II"] },
            correct: 1
        },
        {
            en: { q: "Looking at a portrait, a man said 'His mother is the wife of my father's son. Brothers and sisters I have none.' Whose portrait is it?", opts: ["His nephew", "His son", "His cousin", "His uncle"] },
            hi: { q: "एक चित्र को देखकर एक आदमी ने कहा, 'इसकी माँ मेरे पिता के बेटे की पत्नी है। मेरा कोई भाई या बहन नहीं है।' यह किसका चित्र है?", opts: ["उसके भतीजे का", "उसके बेटे का", "उसके कज़न का", "उसके चाचा का"] },
            correct: 1
        },
        {
            en: { q: "Arrange in order: 1-Birth, 2-Death, 3-Marriage, 4-Education, 5-Employment", opts: ["1,4,3,5,2", "1,3,4,5,2", "1,4,5,3,2", "1,2,3,4,5"] },
            hi: { q: "क्रमबद्ध करें: 1-जन्म, 2-मृत्यु, 3-विवाह, 4-शिक्षा, 5-रोज़गार", opts: ["1,4,3,5,2", "1,3,4,5,2", "1,4,5,3,2", "1,2,3,4,5"] },
            correct: 0
        },
        {
            en: { q: "Which figure comes next in the series: Circle, Square, Triangle, Circle, Square, ?", opts: ["Circle", "Square", "Triangle", "Rectangle"] },
            hi: { q: "श्रृंखला में अगली आकृति कौन सी होगी: वृत्त, वर्ग, त्रिभुज, वृत्त, वर्ग, ?", opts: ["वृत्त", "वर्ग", "त्रिभुज", "आयत"] },
            correct: 2
        },
        {
            en: { q: "P, Q, R, S, T are five friends. P is shorter than Q. R is taller than S. T is shorter than S. Q is shorter than R. Who is the tallest?", opts: ["Q", "P", "R", "S"] },
            hi: { q: "P, Q, R, S, T पाँच मित्र हैं। P, Q से छोटा है। R, S से लंबा है। T, S से छोटा है। Q, R से छोटा है। सबसे लंबा कौन है?", opts: ["Q", "P", "R", "S"] },
            correct: 2
        },
        {
            en: { q: "Find the wrong term in the series: 5, 10, 17, 26, 37, 50, 64", opts: ["26", "37", "64", "50"] },
            hi: { q: "श्रृंखला में गलत पद ज्ञात करें: 5, 10, 17, 26, 37, 50, 64", opts: ["26", "37", "64", "50"] },
            correct: 2
        },
        {
            en: { q: "In a code language: 'pin kin din' means 'roses are red'; 'din bin gin' means 'red is beautiful'. What is the code for 'is'?", opts: ["din", "bin or gin", "gin", "bin"] },
            hi: { q: "एक कूट भाषा में: 'pin kin din' का अर्थ 'गुलाब लाल हैं'; 'din bin gin' का अर्थ 'लाल सुंदर है'। 'है' के लिए कूट क्या है?", opts: ["din", "bin या gin", "gin", "bin"] },
            correct: 1
        },

        // --- Additional Quantitative Aptitude (Q181–Q190) ---
        {
            en: { q: "A can complete a work in 15 days and B in 20 days. After working together for 5 days, B left. In how many more days will A complete the remaining work?", opts: ["7 days", "8 days", "9 days", "10 days"] },
            hi: { q: "A एक काम 15 दिनों में और B 20 दिनों में पूरा कर सकता है। 5 दिन एक साथ काम करने के बाद B चला गया। A शेष काम कितने और दिनों में पूरा करेगा?", opts: ["7 दिन", "8 दिन", "9 दिन", "10 दिन"] },
            correct: 0
        },
        {
            en: { q: "A sum invested at 5% p.a. simple interest amounts to Rs. 1050 in 2 years. What is the principal?", opts: ["Rs. 900", "Rs. 950", "Rs. 1000", "Rs. 1100"] },
            hi: { q: "5% प्रति वर्ष साधारण ब्याज पर निवेश की गई राशि 2 वर्षों में ₹1050 हो जाती है। मूलधन क्या है?", opts: ["₹900", "₹950", "₹1000", "₹1100"] },
            correct: 1
        },
        {
            en: { q: "The ratio of ages of father and son is 7:2. If the sum of their ages is 54, what is the father's age?", opts: ["38", "40", "42", "44"] },
            hi: { q: "पिता और पुत्र की आयु का अनुपात 7:2 है। यदि उनकी आयु का योग 54 है, तो पिता की आयु क्या है?", opts: ["38", "40", "42", "44"] },
            correct: 2
        },
        {
            en: { q: "What is the value of (17)² − (13)²?", opts: ["80", "100", "120", "60"] },
            hi: { q: "(17)² − (13)² का मान क्या है?", opts: ["80", "100", "120", "60"] },
            correct: 2
        },
        {
            en: { q: "A man sold two articles for Rs. 990 each. On one he gained 10% and on the other he lost 10%. His overall profit or loss is:", opts: ["1% profit", "1% loss", "No profit no loss", "2% loss"] },
            hi: { q: "एक आदमी ने दो वस्तुएँ ₹990 प्रत्येक में बेचीं। एक पर 10% लाभ हुआ और दूसरी पर 10% हानि। कुल लाभ या हानि है:", opts: ["1% लाभ", "1% हानि", "न लाभ न हानि", "2% हानि"] },
            correct: 1
        },
        {
            en: { q: "Find the sum of the series: 2 + 4 + 6 + ... + 50", opts: ["600", "625", "650", "676"] },
            hi: { q: "श्रृंखला का योग ज्ञात करें: 2 + 4 + 6 + ... + 50", opts: ["600", "625", "650", "676"] },
            correct: 2
        },
        {
            en: { q: "The compound interest on Rs. 8000 at 10% per annum for 1.5 years, compounded half-yearly is:", opts: ["Rs. 1216", "Rs. 1200", "Rs. 1261", "Rs. 1250"] },
            hi: { q: "₹8000 पर 10% प्रति वर्ष की दर से 1.5 वर्ष का अर्धवार्षिक चक्रवृद्धि ब्याज है:", opts: ["₹1216", "₹1200", "₹1261", "₹1250"] },
            correct: 2
        },
        {
            en: { q: "If the length of a rectangle is increased by 20% and breadth decreased by 20%, what happens to its area?", opts: ["Increases by 4%", "Decreases by 4%", "Remains same", "Decreases by 2%"] },
            hi: { q: "यदि आयत की लंबाई 20% बढ़ाई जाए और चौड़ाई 20% घटाई जाए, तो क्षेत्रफल पर क्या प्रभाव होगा?", opts: ["4% बढ़ेगा", "4% घटेगा", "अपरिवर्तित रहेगा", "2% घटेगा"] },
            correct: 1
        },
        {
            en: { q: "In how many ways can 4 boys and 3 girls be seated in a row so that no two girls sit together?", opts: ["144", "288", "360", "720"] },
            hi: { q: "4 लड़कों और 3 लड़कियों को एक पंक्ति में कितने तरीकों से बैठाया जा सकता है ताकि कोई दो लड़कियाँ एक साथ न बैठें?", opts: ["144", "288", "360", "720"] },
            correct: 2
        },
        {
            en: { q: "The HCF of two numbers is 12 and their LCM is 360. If one number is 72, what is the other?", opts: ["48", "56", "60", "72"] },
            hi: { q: "दो संख्याओं का HCF 12 और LCM 360 है। यदि एक संख्या 72 है, तो दूसरी क्या है?", opts: ["48", "56", "60", "72"] },
            correct: 2
        },

        // --- Additional Banking GK (Q191–Q200) ---
        {
            en: { q: "Which of the following is an instrument of credit control used by RBI?", opts: ["Open Market Operations", "Income Tax", "Fiscal Deficit", "GST"] },
            hi: { q: "निम्नलिखित में से कौन सा RBI द्वारा उपयोग किया जाने वाला ऋण नियंत्रण का साधन है?", opts: ["खुले बाज़ार परिचालन", "आयकर", "राजकोषीय घाटा", "GST"] },
            correct: 0
        },
        {
            en: { q: "Which of the following committees is associated with banking sector reforms in India?", opts: ["Kelkar Committee", "Narasimham Committee", "Rangarajan Committee", "Chelliah Committee"] },
            hi: { q: "निम्नलिखित में से कौन सी समिति भारत में बैंकिंग क्षेत्र के सुधारों से संबंधित है?", opts: ["केलकर समिति", "नरसिम्हम समिति", "रंगराजन समिति", "चेलैया समिति"] },
            correct: 1
        },
        {
            en: { q: "The maximum amount insured by DICGC (Deposit Insurance and Credit Guarantee Corporation) per depositor per bank is:", opts: ["Rs. 1 lakh", "Rs. 2 lakh", "Rs. 5 lakh", "Rs. 10 lakh"] },
            hi: { q: "DICGC द्वारा प्रति जमाकर्ता प्रति बैंक बीमित अधिकतम राशि है:", opts: ["₹1 लाख", "₹2 लाख", "₹5 लाख", "₹10 लाख"] },
            correct: 2
        },
        {
            en: { q: "SWIFT stands for:", opts: ["Society for Worldwide Interbank Financial Telecommunication", "System for World Interbank Fund Transfer", "Secure World Interbank Financial Transaction", "None of these"] },
            hi: { q: "SWIFT का पूर्ण रूप है:", opts: ["Society for Worldwide Interbank Financial Telecommunication", "System for World Interbank Fund Transfer", "Secure World Interbank Financial Transaction", "इनमें से कोई नहीं"] },
            correct: 0
        },
        {
            en: { q: "Priority Sector Lending (PSL) target for domestic commercial banks is what percentage of ANBC (Adjusted Net Bank Credit)?", opts: ["30%", "35%", "40%", "45%"] },
            hi: { q: "घरेलू वाणिज्यिक बैंकों के लिए प्राथमिकता क्षेत्र ऋण (PSL) लक्ष्य ANBC का कितना प्रतिशत है?", opts: ["30%", "35%", "40%", "45%"] },
            correct: 2
        },
        {
            en: { q: "SARFAESI Act, 2002 is related to:", opts: ["Agricultural Loans", "Securities and Asset Reconstruction", "Foreign Exchange", "Microfinance"] },
            hi: { q: "SARFAESI अधिनियम, 2002 किससे संबंधित है?", opts: ["कृषि ऋण", "प्रतिभूति और परिसंपत्ति पुनर्निर्माण", "विदेशी मुद्रा", "सूक्ष्म वित्त"] },
            correct: 1
        },
        {
            en: { q: "The term 'Bancassurance' refers to:", opts: ["Providing banking and insurance products together", "Insuring bank deposits", "A type of insurance for banks", "None of these"] },
            hi: { q: "'Bancassurance' शब्द का अर्थ है:", opts: ["बैंकिंग और बीमा उत्पाद एक साथ प्रदान करना", "बैंक जमा का बीमा", "बैंकों के लिए एक प्रकार का बीमा", "इनमें से कोई नहीं"] },
            correct: 0
        },
        {
            en: { q: "Which of the following is the regulatory body for pension funds in India?", opts: ["SEBI", "IRDAI", "PFRDA", "RBI"] },
            hi: { q: "भारत में पेंशन फंड का नियामक निकाय कौन सा है?", opts: ["SEBI", "IRDAI", "PFRDA", "RBI"] },
            correct: 2
        },
        {
            en: { q: "What is a 'Demat Account' used for?", opts: ["Depositing cash", "Holding shares and securities in electronic form", "Taking loans", "Paying utility bills"] },
            hi: { q: "'Demat Account' का उपयोग किसके लिए किया जाता है?", opts: ["नकदी जमा करने के लिए", "इलेक्ट्रॉनिक रूप में शेयर और प्रतिभूतियाँ रखने के लिए", "ऋण लेने के लिए", "उपयोगिता बिल भुगतान के लिए"] },
            correct: 1
        },
        {
            en: { q: "Small Finance Banks in India are regulated by:", opts: ["SEBI", "Ministry of Finance", "Reserve Bank of India", "NABARD"] },
            hi: { q: "भारत में लघु वित्त बैंक किसके द्वारा विनियमित होते हैं?", opts: ["SEBI", "वित्त मंत्रालय", "भारतीय रिजर्व बैंक", "NABARD"] },
            correct: 2
        },


        {
            en: { q: "If TAP is coded as SZO, how is CUP coded?", opts: ["BTO", "BTP", "BTQ", "CSO"] },
            hi: { q: "यदि TAP को SZO कूटबद्ध किया जाता है, तो CUP को कैसे कूटबद्ध किया जाएगा?", opts: ["BTO", "BTP", "BTQ", "CSO"] },
            correct: 0
        },
        {
            en: { q: "Rahul walks 10 m North, turns left and walks 5 m, then turns left again and walks 10 m. How far is he from starting point?", opts: ["5 m", "10 m", "15 m", "0 m"] },
            hi: { q: "राहुल 10 मीटर उत्तर चलता है, बाईं ओर मुड़कर 5 मीटर, फिर बाईं ओर मुड़कर 10 मीटर चलता है। वह प्रारंभिक बिंदु से कितनी दूर है?", opts: ["5 मीटर", "10 मीटर", "15 मीटर", "0 मीटर"] },
            correct: 0
        },
       
        {
            en: { q: "In a row of students, Geeta is 8th from left and 14th from right. How many students are in the row?", opts: ["20", "21", "22", "23"] },
            hi: { q: "छात्रों की एक पंक्ति में गीता बाईं ओर से 8वीं और दाईं ओर से 14वीं है। पंक्ति में कुल छात्र कितने हैं?", opts: ["20", "21", "22", "23"] },
            correct: 1
        },
        {
            en: { q: "Which of the following is the odd one out? 12, 22, 34, 48, 62, 78", opts: ["22", "34", "62", "78"] },
            hi: { q: "निम्न में से बेमेल कौन सा है? 12, 22, 34, 48, 62, 78", opts: ["22", "34", "62", "78"] },
            correct: 1
        },
        {
            en: { q: "If ROSE is coded as 6821 and CHAIR is coded as 73456, what is the code for SEARCH?", opts: ["214673", "214376", "246137", "214637"] },
            hi: { q: "यदि ROSE को 6821 और CHAIR को 73456 से कूटबद्ध किया जाए, तो SEARCH का कोड क्या होगा?", opts: ["214673", "214376", "246137", "214637"] },
            correct: 3
        },
        {
            en: { q: "Statements: All stars are moons. Some moons are planets. Conclusions: I. Some stars are planets. II. Some planets are moons. Which follows?", opts: ["Only I", "Only II", "Both I and II", "Neither I nor II"] },
            hi: { q: "कथन: सभी तारे चंद्रमा हैं। कुछ चंद्रमा ग्रह हैं। निष्कर्ष: I. कुछ तारे ग्रह हैं। II. कुछ ग्रह चंद्रमा हैं। कौन सा सही है?", opts: ["केवल I", "केवल II", "I और II दोनों", "न I न II"] },
            correct: 1
        },
        {
            en: { q: "A is the father of C. B is the mother of D. C and D are siblings. How is A related to B?", opts: ["Brother", "Husband", "Father", "Cannot be determined"] },
            hi: { q: "A, C का पिता है। B, D की माँ है। C और D भाई-बहन हैं। A, B से किस प्रकार संबंधित है?", opts: ["भाई", "पति", "पिता", "निर्धारित नहीं किया जा सकता"] },
            correct: 1
        },
        {
            en: { q: "Series: 3, 6, 11, 18, 27, 38, ? Find the next number.", opts: ["49", "51", "53", "47"] },
            hi: { q: "श्रृंखला: 3, 6, 11, 18, 27, 38, ? अगली संख्या ज्ञात करें।", opts: ["49", "51", "53", "47"] },
            correct: 1
        },
        {
            en: { q: "In a circular arrangement of 8 persons facing the centre, A is 3rd to the right of B and 2nd to the left of C. How many persons are between B and C (going clockwise from B)?", opts: ["2", "3", "4", "5"] },
            hi: { q: "केंद्र की ओर मुख करके बैठे 8 व्यक्तियों की गोलाकार व्यवस्था में, A, B के दाईं ओर 3वाँ और C के बाईं ओर 2वाँ है। B और C के बीच (B से दक्षिणावर्त) कितने व्यक्ति हैं?", opts: ["2", "3", "4", "5"] },
            correct: 2
        },
        {
            en: { q: "Choose the correct analogy: Court : Judge :: Hospital : ?", opts: ["Medicine", "Patient", "Doctor", "Nurse"] },
            hi: { q: "सही सादृश्य चुनें: न्यायालय : न्यायाधीश :: अस्पताल : ?", opts: ["दवाई", "मरीज़", "डॉक्टर", "नर्स"] },
            correct: 2
        },
        {
            en: { q: "If in a certain code 'MASTER' = 411259, then 'STREAM' = ?", opts: ["429511", "412959", "952411", "954211"] },
            hi: { q: "यदि एक कूट भाषा में 'MASTER' = 411259, तो 'STREAM' = ?", opts: ["429511", "412959", "952411", "954211"] },
            correct: 2
        },
        {
            en: { q: "Pointing to a man, a woman says 'His mother is the only daughter of my mother.' How is the woman related to the man?", opts: ["Daughter", "Sister", "Mother", "Aunt"] },
            hi: { q: "एक पुरुष की ओर इशारा करते हुए एक महिला कहती है 'उसकी माँ मेरी माँ की एकमात्र बेटी है।' महिला पुरुष से कैसे संबंधित है?", opts: ["बेटी", "बहन", "माँ", "चाची"] },
            correct: 2
        },
        {
            en: { q: "How many pairs of letters in the word SPORADIC have the same number of letters between them as in the English alphabet?", opts: ["2", "3", "4", "5"] },
            hi: { q: "SPORADIC शब्द में कितने अक्षर जोड़े ऐसे हैं जिनके बीच अंग्रेज़ी वर्णमाला के समान संख्या में अक्षर हैं?", opts: ["2", "3", "4", "5"] },
            correct: 1
        },
        {
            en: { q: "In a group of 5 persons sitting in a line, P is to the immediate right of Q and immediate left of R. S is to the immediate right of T. T is to the left of Q. Who is in the middle?", opts: ["P", "Q", "R", "T"] },
            hi: { q: "एक पंक्ति में बैठे 5 व्यक्तियों में P, Q के तुरंत दाईं ओर और R के तुरंत बाईं ओर है। S, T के तुरंत दाईं ओर है। T, Q के बाईं ओर है। बीच में कौन है?", opts: ["P", "Q", "R", "T"] },
            correct: 1
        },
        {
            en: { q: "Which word cannot be formed from the letters of COMPUTATIONAL?", opts: ["COMPUT", "CAPITAL", "MOTION", "NATURAL"] },
            hi: { q: "COMPUTATIONAL के अक्षरों से कौन सा शब्द नहीं बनाया जा सकता?", opts: ["COMPUT", "CAPITAL", "MOTION", "NATURAL"] },
            correct: 3
        },
        {
            en: { q: "Find the missing number in: 4, 9, 25, 49, ?, 169", opts: ["81", "100", "121", "144"] },
            hi: { q: "4, 9, 25, 49, ?, 169 में लुप्त संख्या ज्ञात करें:", opts: ["81", "100", "121", "144"] },
            correct: 2
        },
        {
            en: { q: "If 'A × B' means A is the mother of B, 'A + B' means A is the sister of B, and 'A ÷ B' means A is the father of B. What does P ÷ Q × R mean?", opts: ["P is grandmother of R", "P is grandfather of R", "P is uncle of R", "P is father of R"] },
            hi: { q: "यदि 'A × B' का अर्थ A, B की माँ है, 'A + B' का अर्थ A, B की बहन है, 'A ÷ B' का अर्थ A, B का पिता है। P ÷ Q × R का अर्थ क्या है?", opts: ["P, R की नानी/दादी है", "P, R का नाना/दादा है", "P, R का चाचा है", "P, R का पिता है"] },
            correct: 1
        },
        {
            en: { q: "Choose the correct mirror image: QUIZ", opts: ["ZIUQ", "QUIZ (reversed)", "ZUIQ", "QIUZ"] },
            hi: { q: "QUIZ का सही दर्पण प्रतिबिंब चुनें:", opts: ["ZIUQ", "QUIZ (उल्टा)", "ZUIQ", "QIUZ"] },
            correct: 0
        },
        {
            en: { q: "Statements: Some chairs are tables. All tables are wooden. Conclusions: I. Some chairs are wooden. II. All wooden things are tables. Which follows?", opts: ["Only I", "Only II", "Both", "Neither"] },
            hi: { q: "कथन: कुछ कुर्सियाँ मेज़ हैं। सभी मेज़ लकड़ी की हैं। निष्कर्ष: I. कुछ कुर्सियाँ लकड़ी की हैं। II. सभी लकड़ी की चीजें मेज़ हैं। कौन सा सही है?", opts: ["केवल I", "केवल II", "दोनों", "कोई नहीं"] },
            correct: 0
        },
        {
            en: { q: "A man facing East turns 90° clockwise, then 180° anti-clockwise. Which direction is he facing now?", opts: ["North", "South", "West", "East"] },
            hi: { q: "पूर्व की ओर मुख किए एक व्यक्ति 90° दक्षिणावर्त, फिर 180° वामावर्त मुड़ता है। अब वह किस दिशा में मुख किए है?", opts: ["उत्तर", "दक्षिण", "पश्चिम", "पूर्व"] },
            correct: 0
        },
        {
            en: { q: "Five books are placed on a shelf. Chemistry is above Physics. Maths is below Biology. English is between Chemistry and Maths. Which book is at the bottom?", opts: ["Physics", "Biology", "Maths", "English"] },
            hi: { q: "एक शेल्फ पर पाँच किताबें रखी हैं। Chemistry, Physics से ऊपर है। Maths, Biology से नीचे है। English, Chemistry और Maths के बीच है। सबसे नीचे कौन सी किताब है?", opts: ["Physics", "Biology", "Maths", "English"] },
            correct: 0
        },
        {
            en: { q: "In a certain code: 'GONE' = 32, 'DONE' = 25. What is the code for 'BONE'?", opts: ["18", "20", "22", "24"] },
            hi: { q: "एक कूट भाषा में: 'GONE' = 32, 'DONE' = 25. 'BONE' का कूट क्या होगा?", opts: ["18", "20", "22", "24"] },
            correct: 0
        },
        {
            en: { q: "Find the odd one: 121, 144, 169, 196, 225, 250", opts: ["196", "225", "250", "169"] },
            hi: { q: "बेमेल ज्ञात करें: 121, 144, 169, 196, 225, 250", opts: ["196", "225", "250", "169"] },
            correct: 2
        },
        {
            en: { q: "A, B, C, D, E are five friends. D is shorter than A but taller than E. C is taller than B. B is shorter than D. Who is the second tallest?", opts: ["A", "C", "D", "B"] },
            hi: { q: "A, B, C, D, E पाँच मित्र हैं। D, A से छोटा लेकिन E से लंबा है। C, B से लंबा है। B, D से छोटा है। दूसरा सबसे लंबा कौन है?", opts: ["A", "C", "D", "B"] },
            correct: 2
        },
        {
            en: { q: "If CLOCK = 3-12-15-3-11, then WATCH = ?", opts: ["23-1-20-3-8", "23-1-20-8-3", "22-1-20-3-8", "23-2-20-3-8"] },
            hi: { q: "यदि CLOCK = 3-12-15-3-11, तो WATCH = ?", opts: ["23-1-20-3-8", "23-1-20-8-3", "22-1-20-3-8", "23-2-20-3-8"] },
            correct: 0
        },
        {
            en: { q: "Input: 85 47 32 91 63 17. Step 1: 17 85 47 32 91 63. Step 2: 17 32 85 47 91 63. What will Step 3 be?", opts: ["17 32 47 85 91 63", "17 32 85 47 63 91", "17 32 47 63 85 91", "17 32 63 85 47 91"] },
            hi: { q: "Input: 85 47 32 91 63 17. Step 1: 17 85 47 32 91 63. Step 2: 17 32 85 47 91 63. Step 3 क्या होगा?", opts: ["17 32 47 85 91 63", "17 32 85 47 63 91", "17 32 47 63 85 91", "17 32 63 85 47 91"] },
            correct: 0
        },
        {
            en: { q: "A piece of paper is folded and a hole is punched. When unfolded, how many holes are there if folded once diagonally?", opts: ["1", "2", "3", "4"] },
            hi: { q: "एक कागज़ को मोड़कर एक छेद किया जाता है। एक बार विकर्णीय रूप से मोड़ने पर खोलने पर कितने छेद होंगे?", opts: ["1", "2", "3", "4"] },
            correct: 1
        },
        {
            en: { q: "Statement: Some dogs are cats. No cat is white. Conclusion: I. No dog is white. II. Some dogs are not white. Which conclusion follows?", opts: ["Only I", "Only II", "Both I and II", "Neither I nor II"] },
            hi: { q: "कथन: कुछ कुत्ते बिल्लियाँ हैं। कोई बिल्ली सफेद नहीं है। निष्कर्ष: I. कोई कुत्ता सफेद नहीं है। II. कुछ कुत्ते सफेद नहीं हैं। कौन सा सही है?", opts: ["केवल I", "केवल II", "I और II दोनों", "न I न II"] },
            correct: 1
        },
        {
            en: { q: "What comes next in: AZ, BY, CX, DW, ?", opts: ["EV", "FU", "EU", "FV"] },
            hi: { q: "AZ, BY, CX, DW, ? में आगे क्या आएगा?", opts: ["EV", "FU", "EU", "FV"] },
            correct: 0
        },
        {
            en: { q: "In a class, 20 students passed in English, 17 in Maths, and 5 in both. How many passed in at least one subject?", opts: ["30", "32", "37", "42"] },
            hi: { q: "एक कक्षा में 20 छात्र अंग्रेज़ी में, 17 गणित में और 5 दोनों में पास हुए। कम से कम एक विषय में कितने पास हुए?", opts: ["30", "32", "37", "42"] },
            correct: 1
        },
        {
            en: { q: "From the given alternative words, select the word which cannot be formed using letters of: ORGANISATION", opts: ["ORIGIN", "RATION", "NATION", "GRAINS"] },
            hi: { q: "ORGANISATION के अक्षरों से कौन सा शब्द नहीं बनाया जा सकता?", opts: ["ORIGIN", "RATION", "NATION", "GRAINS"] },
            correct: 3
        },
        {
            en: { q: "Introducing a man, a woman said 'He is the son of the woman who is the mother of the husband of my mother.' How is the man related to the woman?", opts: ["Uncle", "Son", "Cousin", "Nephew"] },
            hi: { q: "एक महिला ने एक पुरुष का परिचय देते हुए कहा, 'वह उस महिला का बेटा है जो मेरी माँ के पति की माँ है।' पुरुष महिला से कैसे संबंधित है?", opts: ["चाचा", "बेटा", "कज़न", "भतीजा"] },
            correct: 0
        },
        {
            en: { q: "Find the next term: 1, 8, 27, 64, 125, ?", opts: ["196", "210", "216", "225"] },
            hi: { q: "अगला पद ज्ञात करें: 1, 8, 27, 64, 125, ?", opts: ["196", "210", "216", "225"] },
            correct: 2
        },
        {
            en: { q: "Which of the following pairs is NOT correctly matched (Planet: Position from Sun)?", opts: ["Mercury: 1st", "Venus: 2nd", "Mars: 4th", "Jupiter: 5th"] },
            hi: { q: "निम्न में से कौन सा जोड़ा सही नहीं है (ग्रह: सूर्य से स्थान)?", opts: ["बुध: 1st", "शुक्र: 2nd", "मंगल: 4th", "बृहस्पति: 5th"] },
            correct: 3
        },
        {
            en: { q: "Arrange in logical order: 1-Infant 2-Old 3-Adult 4-Teenager 5-Child", opts: ["1,5,4,3,2", "1,4,5,3,2", "1,5,3,4,2", "5,1,4,3,2"] },
            hi: { q: "तार्किक क्रम में व्यवस्थित करें: 1-शिशु 2-वृद्ध 3-वयस्क 4-किशोर 5-बालक", opts: ["1,5,4,3,2", "1,4,5,3,2", "1,5,3,4,2", "5,1,4,3,2"] },
            correct: 0
        },
        {
            en: { q: "Vikram starts from office, walks 2 km East, turns South and walks 3 km, then turns West and walks 2 km. Where is he now relative to office?", opts: ["3 km South", "2 km West", "3 km North", "2 km East"] },
            hi: { q: "विक्रम दफ्तर से 2 किमी पूर्व, फिर दक्षिण 3 किमी, फिर पश्चिम 2 किमी चलता है। वह दफ्तर से अभी कहाँ है?", opts: ["3 किमी दक्षिण", "2 किमी पश्चिम", "3 किमी उत्तर", "2 किमी पूर्व"] },
            correct: 0
        },
        {
            en: { q: "If 5 # 3 = 34 and 6 # 2 = 40, then 4 # 7 = ?", opts: ["65", "53", "58", "72"] },
            hi: { q: "यदि 5 # 3 = 34 और 6 # 2 = 40, तो 4 # 7 = ?", opts: ["65", "53", "58", "72"] },
            correct: 0
        },
        {
            en: { q: "Water : Thirst :: Food : ?", opts: ["Eat", "Hunger", "Taste", "Cook"] },
            hi: { q: "पानी : प्यास :: भोजन : ?", opts: ["खाना", "भूख", "स्वाद", "पकाना"] },
            correct: 1
        },
        {
            en: { q: "If the 3rd day after the day before yesterday is Friday, what day is today?", opts: ["Monday", "Tuesday", "Wednesday", "Thursday"] },
            hi: { q: "यदि परसों से एक दिन पहले के बाद का 3वाँ दिन शुक्रवार है, तो आज कौन सा दिन है?", opts: ["सोमवार", "मंगलवार", "बुधवार", "गुरुवार"] },
            correct: 1
        },
        {
            en: { q: "In a family photo: Two fathers, two sons, one grandfather and one grandson — minimum how many persons?", opts: ["3", "4", "5", "6"] },
            hi: { q: "एक पारिवारिक फोटो में: दो पिता, दो बेटे, एक दादा और एक पोता — न्यूनतम कितने व्यक्ति हैं?", opts: ["3", "4", "5", "6"] },
            correct: 0
        },
        {
            en: { q: "Series: J2Z, K4X, L7V, M11T, ? Find the next term.", opts: ["N16R", "N15R", "N16S", "O16R"] },
            hi: { q: "श्रृंखला: J2Z, K4X, L7V, M11T, ? अगला पद ज्ञात करें।", opts: ["N16R", "N15R", "N16S", "O16R"] },
            correct: 0
        },
        {
            en: { q: "Among five friends P, Q, R, S, T; P scored more than Q. R scored less than T. S scored more than T but less than P. Who scored the least?", opts: ["Q", "R", "S", "T"] },
            hi: { q: "पाँच मित्रों P, Q, R, S, T में; P ने Q से अधिक अंक प्राप्त किए। R ने T से कम। S ने T से अधिक लेकिन P से कम। सबसे कम किसने प्राप्त किए?", opts: ["Q", "R", "S", "T"] },
            correct: 1
        },
        {
            en: { q: "Find the number of squares in a 3×3 grid:", opts: ["9", "12", "14", "16"] },
            hi: { q: "3×3 ग्रिड में वर्गों की संख्या ज्ञात करें:", opts: ["9", "12", "14", "16"] },
            correct: 2
        },
        {
            en: { q: "Choose the word that is least like the others: Wheat, Rice, Maize, Mustard, Barley", opts: ["Wheat", "Mustard", "Rice", "Barley"] },
            hi: { q: "वह शब्द चुनें जो बाकी से सबसे कम मिलता-जुलता हो: गेहूँ, चावल, मक्का, सरसों, जौ", opts: ["गेहूँ", "सरसों", "चावल", "जौ"] },
            correct: 1
        },
        {
            en: { q: "At 3:15, what is the angle between the hour and minute hand of a clock?", opts: ["0°", "7.5°", "15°", "22.5°"] },
            hi: { q: "3:15 बजे घंटे और मिनट की सुई के बीच कोण कितना होगा?", opts: ["0°", "7.5°", "15°", "22.5°"] },
            correct: 1
        },
        {
            en: { q: "Which of the following does NOT fit the group? Surgeon, Cardiologist, Dermatologist, Physiotherapist, Radiologist", opts: ["Surgeon", "Radiologist", "Physiotherapist", "Cardiologist"] },
            hi: { q: "निम्न में से कौन समूह में नहीं आता? Surgeon, Cardiologist, Dermatologist, Physiotherapist, Radiologist", opts: ["Surgeon", "Radiologist", "Physiotherapist", "Cardiologist"] },
            correct: 2
        },
        {
            en: { q: "If GOOD = 32 and FOOD = 28, then MOOD = ?", opts: ["26", "28", "30", "32"] },
            hi: { q: "यदि GOOD = 32 और FOOD = 28, तो MOOD = ?", opts: ["26", "28", "30", "32"] },
            correct: 2
        },
        {
            en: { q: "Statements: All mangoes are fruits. All fruits are nutritious. Conclusions: I. All mangoes are nutritious. II. Some nutritious things are mangoes. Which follows?", opts: ["Only I", "Only II", "Both I and II", "Neither I nor II"] },
            hi: { q: "कथन: सभी आम फल हैं। सभी फल पौष्टिक हैं। निष्कर्ष: I. सभी आम पौष्टिक हैं। II. कुछ पौष्टिक चीजें आम हैं। कौन सा सही है?", opts: ["केवल I", "केवल II", "I और II दोनों", "न I न II"] },
            correct: 2
        },

        // --- Quantitative Aptitude (Q51–Q100) ---
        {
            en: { q: "A can do a piece of work in 10 days. B is 25% more efficient than A. In how many days can B do the same work?", opts: ["6", "7", "8", "9"] },
            hi: { q: "A एक काम 10 दिनों में कर सकता है। B, A से 25% अधिक कुशल है। B उसी काम को कितने दिनों में करेगा?", opts: ["6", "7", "8", "9"] },
            correct: 2
        },
        {
            en: { q: "The ratio of the sum and difference of two numbers is 11:3. What is the ratio of the two numbers?", opts: ["7:2", "11:3", "7:4", "11:4"] },
            hi: { q: "दो संख्याओं के योग और अंतर का अनुपात 11:3 है। दो संख्याओं का अनुपात क्या है?", opts: ["7:2", "11:3", "7:4", "11:4"] },
            correct: 2
        },
        {
            en: { q: "A vessel contains 40 litres of milk. 4 litres are removed and replaced with water. This process is repeated 3 times. How much milk remains?", opts: ["27.5 L", "29.16 L", "29.05 L", "28.36 L"] },
            hi: { q: "एक बर्तन में 40 लीटर दूध है। 4 लीटर निकालकर पानी मिलाया जाता है। यह प्रक्रिया 3 बार दोहराई जाती है। कितना दूध बचता है?", opts: ["27.5 L", "29.16 L", "29.05 L", "28.36 L"] },
            correct: 1
        },
        {
            en: { q: "Divide Rs. 1400 among A, B, C in ratio 2:3:5. What does C get?", opts: ["Rs. 560", "Rs. 420", "Rs. 700", "Rs. 630"] },
            hi: { q: "₹1400 को A, B, C में 2:3:5 के अनुपात में बाँटें। C को कितना मिलेगा?", opts: ["₹560", "₹420", "₹700", "₹630"] },
            correct: 2
        },
        {
            en: { q: "The simple interest on Rs. 5000 for 2 years at 4% per annum is:", opts: ["Rs. 350", "Rs. 400", "Rs. 450", "Rs. 500"] },
            hi: { q: "₹5000 पर 2 वर्षों के लिए 4% प्रति वर्ष का साधारण ब्याज है:", opts: ["₹350", "₹400", "₹450", "₹500"] },
            correct: 1
        },
        {
            en: { q: "A train 250 m long runs at 90 km/h. How long will it take to cross a 500 m long bridge?", opts: ["25 sec", "30 sec", "35 sec", "40 sec"] },
            hi: { q: "250 मीटर लंबी ट्रेन 90 km/h की गति से 500 मीटर लंबे पुल को पार करने में कितना समय लेगी?", opts: ["25 सेकंड", "30 सेकंड", "35 सेकंड", "40 सेकंड"] },
            correct: 1
        },
        {
            en: { q: "A number is increased by 15% and then decreased by 15%. The net change is:", opts: ["No change", "2.25% decrease", "2.25% increase", "0.25% decrease"] },
            hi: { q: "एक संख्या में 15% वृद्धि के बाद 15% कमी की जाती है। शुद्ध परिवर्तन है:", opts: ["कोई परिवर्तन नहीं", "2.25% कमी", "2.25% वृद्धि", "0.25% कमी"] },
            correct: 1
        },
        {
            en: { q: "The average of 11 numbers is 35. If the average of first 6 is 32 and last 6 is 37, what is the 6th number?", opts: ["25", "28", "30", "32"] },
            hi: { q: "11 संख्याओं का औसत 35 है। यदि पहले 6 का औसत 32 और अंतिम 6 का औसत 37 है, तो 6वीं संख्या क्या है?", opts: ["25", "28", "30", "32"] },
            correct: 1
        },
        {
            en: { q: "In a mixture of milk and water in ratio 5:1, if 6 litres of water is added, the ratio becomes 5:2. Find the original quantity of mixture.", opts: ["28 L", "30 L", "36 L", "42 L"] },
            hi: { q: "दूध और पानी के 5:1 के मिश्रण में यदि 6 लीटर पानी मिलाया जाए तो अनुपात 5:2 हो जाता है। मूल मिश्रण की मात्रा ज्ञात करें।", opts: ["28 L", "30 L", "36 L", "42 L"] },
            correct: 2
        },
        {
            en: { q: "The cost of 5 chairs and 3 tables is Rs. 3110. Cost of 1 chair is Rs. 210. What is the cost of 1 table?", opts: ["Rs. 680", "Rs. 700", "Rs. 720", "Rs. 640"] },
            hi: { q: "5 कुर्सियों और 3 मेज़ों की कीमत ₹3110 है। 1 कुर्सी की कीमत ₹210 है। 1 मेज़ की कीमत क्या है?", opts: ["₹680", "₹700", "₹720", "₹640"] },
            correct: 1
        },
        {
            en: { q: "The speed of a stream is 3 km/h. A boat goes 36 km downstream and comes back in 8 hours. What is the speed of the boat in still water?", opts: ["8 km/h", "9 km/h", "10 km/h", "12 km/h"] },
            hi: { q: "एक धारा की गति 3 km/h है। एक नाव 36 किमी आगे जाती है और 8 घंटे में वापस आती है। शांत जल में नाव की गति क्या है?", opts: ["8 km/h", "9 km/h", "10 km/h", "12 km/h"] },
            correct: 1
        },
        {
            en: { q: "By selling 45 lemons for Rs. 40, a man loses 20%. How many should he sell for Rs. 24 to gain 20%?", opts: ["16", "18", "20", "22"] },
            hi: { q: "₹40 में 45 नींबू बेचने पर 20% हानि होती है। 20% लाभ के लिए ₹24 में कितने नींबू बेचने चाहिए?", opts: ["16", "18", "20", "22"] },
            correct: 1
        },
        {
            en: { q: "Pipes A and B can fill a tank in 20 and 30 minutes. Pipe C can empty it in 15 minutes. All three are opened simultaneously. In how many minutes will the tank be full?", opts: ["60", "90", "120", "The tank never fills"] },
            hi: { q: "पाइप A और B क्रमशः 20 और 30 मिनट में टंकी भर सकते हैं। पाइप C 15 मिनट में खाली कर सकता है। तीनों एक साथ खोले जाएँ तो टंकी कब भरेगी?", opts: ["60 मिनट", "90 मिनट", "120 मिनट", "टंकी कभी नहीं भरेगी"] },
            correct: 3
        },
        {
            en: { q: "A shopkeeper earns a profit of 12% after giving a discount of 10% on the marked price. By what percent is the marked price above cost price?", opts: ["21.5%", "22%", "24.4%", "25%"] },
            hi: { q: "एक दुकानदार अंकित मूल्य पर 10% छूट देने के बाद 12% लाभ कमाता है। अंकित मूल्य क्रय मूल्य से कितने प्रतिशत अधिक है?", opts: ["21.5%", "22%", "24.4%", "25%"] },
            correct: 2
        },
        {
            en: { q: "The curved surface area of a cylinder is 264 sq cm and its height is 14 cm. What is the radius?", opts: ["2 cm", "3 cm", "4 cm", "5 cm"] },
            hi: { q: "एक बेलन का वक्र पृष्ठ क्षेत्रफल 264 वर्ग सेमी है और ऊँचाई 14 सेमी है। त्रिज्या क्या है?", opts: ["2 सेमी", "3 सेमी", "4 सेमी", "5 सेमी"] },
            correct: 1
        },
        {
            en: { q: "X and Y invest in ratio 2:3. After 4 months, X withdraws half his investment. After 12 months total profit is Rs. 9900. What is X's share?", opts: ["Rs. 2700", "Rs. 3300", "Rs. 3600", "Rs. 4000"] },
            hi: { q: "X और Y 2:3 के अनुपात में निवेश करते हैं। 4 महीने बाद X अपना आधा निवेश निकाल लेता है। 12 महीने बाद कुल लाभ ₹9900 है। X का हिस्सा क्या है?", opts: ["₹2700", "₹3300", "₹3600", "₹4000"] },
            correct: 0
        },
        {
            en: { q: "What is the least number which when divided by 4, 6, 8 and 10 leaves remainder 3 in each case?", opts: ["123", "63", "43", "83"] },
            hi: { q: "वह न्यूनतम संख्या कौन सी है जिसे 4, 6, 8 और 10 से विभाजित करने पर प्रत्येक में 3 शेषफल आए?", opts: ["123", "63", "43", "83"] },
            correct: 1
        },
        {
            en: { q: "The volume of a cube is 512 cm³. What is the total surface area?", opts: ["284 cm²", "296 cm²", "384 cm²", "392 cm²"] },
            hi: { q: "एक घन का आयतन 512 cm³ है। कुल पृष्ठ क्षेत्रफल क्या है?", opts: ["284 cm²", "296 cm²", "384 cm²", "392 cm²"] },
            correct: 2
        },
        {
            en: { q: "What is 40% of 3/5 of 650?", opts: ["145", "155", "156", "160"] },
            hi: { q: "650 के 3/5 का 40% क्या है?", opts: ["145", "155", "156", "160"] },
            correct: 2
        },
        {
            en: { q: "In a school, 60% of students play cricket and 45% play football. If 20% play both, what percentage play neither?", opts: ["10%", "15%", "20%", "25%"] },
            hi: { q: "एक स्कूल में 60% छात्र क्रिकेट और 45% फुटबॉल खेलते हैं। यदि 20% दोनों खेलते हैं, तो कितने प्रतिशत कोई नहीं खेलते?", opts: ["10%", "15%", "20%", "25%"] },
            correct: 1
        },
        {
            en: { q: "An article is sold at 20% profit. If the cost price were 20% less and selling price were Rs. 10 less, profit would be 25%. What is the original cost price?", opts: ["Rs. 50", "Rs. 60", "Rs. 80", "Rs. 100"] },
            hi: { q: "एक वस्तु 20% लाभ पर बेची जाती है। यदि क्रय मूल्य 20% कम और विक्रय मूल्य ₹10 कम होता, तो लाभ 25% होता। मूल क्रय मूल्य क्या है?", opts: ["₹50", "₹60", "₹80", "₹100"] },
            correct: 0
        },
        {
            en: { q: "The average marks of 30 students is 60. Five of them score 100 each. What is the average of remaining students?", opts: ["50.83", "51.11", "52.5", "53.33"] },
            hi: { q: "30 छात्रों का औसत अंक 60 है। उनमें से 5 के अंक 100-100 हैं। शेष छात्रों का औसत क्या है?", opts: ["50.83", "51.11", "52.5", "53.33"] },
            correct: 0
        },
        {
            en: { q: "A person invested Rs. 10000 for 3 years at CI of 10% per annum. How much more did he earn than at SI?", opts: ["Rs. 300", "Rs. 305", "Rs. 310", "Rs. 315"] },
            hi: { q: "एक व्यक्ति ने ₹10000 को 10% प्रति वर्ष CI पर 3 वर्षों के लिए निवेश किया। SI की तुलना में कितना अधिक मिला?", opts: ["₹300", "₹305", "₹310", "₹315"] },
            correct: 2
        },
        {
            en: { q: "If 3x + 5y = 30 and 5x + 3y = 34, then x + y = ?", opts: ["7", "8", "9", "10"] },
            hi: { q: "यदि 3x + 5y = 30 और 5x + 3y = 34, तो x + y = ?", opts: ["7", "8", "9", "10"] },
            correct: 1
        },
        {
            en: { q: "A 120 m long train crosses a pole in 12 seconds. How long will it take to cross a platform 180 m long?", opts: ["24 sec", "27 sec", "30 sec", "33 sec"] },
            hi: { q: "120 मीटर लंबी ट्रेन एक खंभे को 12 सेकंड में पार करती है। 180 मीटर लंबे प्लेटफ़ॉर्म को पार करने में कितना समय लगेगा?", opts: ["24 सेकंड", "27 सेकंड", "30 सेकंड", "33 सेकंड"] },
            correct: 2
        },
        {
            en: { q: "Two pipes A and B can fill a cistern in 12 and 15 hours respectively. They are opened together. After 3 hours, B is closed. How much more time will A take to fill the cistern?", opts: ["7.5 hr", "8 hr", "8.25 hr", "9 hr"] },
            hi: { q: "दो पाइप A और B क्रमशः 12 और 15 घंटे में टंकी भर सकते हैं। दोनों एक साथ खोले जाते हैं। 3 घंटे बाद B बंद हो जाता है। A को शेष टंकी भरने में कितना समय लगेगा?", opts: ["7.5 घंटे", "8 घंटे", "8.25 घंटे", "9 घंटे"] },
            correct: 0
        },
        {
            en: { q: "What is the value of (0.1)³ + (0.2)³ + (0.3)³ − 3(0.1)(0.2)(0.3)?", opts: ["0", "0.018", "0.036", "0.054"] },
            hi: { q: "(0.1)³ + (0.2)³ + (0.3)³ − 3(0.1)(0.2)(0.3) का मान क्या है?", opts: ["0", "0.018", "0.036", "0.054"] },
            correct: 0
        },

        // --- English Language (Q101–Q140) ---
        {
            en: { q: "Fill in the blank: She has been working here ______ 2015.", opts: ["from", "since", "for", "by"] },
            hi: { q: "रिक्त स्थान भरें: She has been working here ______ 2015.", opts: ["from", "since", "for", "by"] },
            correct: 1
        },
        {
            en: { q: "Choose the correct synonym for EPHEMERAL:", opts: ["Permanent", "Short-lived", "Eternal", "Vast"] },
            hi: { q: "EPHEMERAL का सही पर्यायवाची चुनें:", opts: ["स्थायी", "अल्पकालिक", "शाश्वत", "विशाल"] },
            correct: 1
        },
        {
            en: { q: "The sentence 'It is time we left the party' is grammatically:", opts: ["Incorrect", "Correct", "Needs 'had' before 'left'", "Needs 'have' before 'left'"] },
            hi: { q: "वाक्य 'It is time we left the party' व्याकरणिक रूप से:", opts: ["गलत", "सही", "'left' से पहले 'had' चाहिए", "'left' से पहले 'have' चाहिए"] },
            correct: 1
        },
        {
            en: { q: "Select the correct antonym of GREGARIOUS:", opts: ["Sociable", "Lonely", "Reserved", "Outgoing"] },
            hi: { q: "GREGARIOUS का सही विलोम चुनें:", opts: ["मिलनसार", "अकेला", "अंतर्मुखी", "बाहरमुखी"] },
            correct: 2
        },
        {
            en: { q: "Identify the error: 'He is one of those persons who believes in hard work.'", opts: ["is", "one of those persons", "who believes", "in hard work"] },
            hi: { q: "त्रुटि पहचानें: 'He is one of those persons who believes in hard work.'", opts: ["is", "one of those persons", "who believes", "in hard work"] },
            correct: 2
        },
        {
            en: { q: "Choose the correct meaning of the idiom 'A bolt from the blue':", opts: ["A thunderstorm", "A completely unexpected event", "Bad weather", "A lucky escape"] },
            hi: { q: "मुहावरे 'A bolt from the blue' का सही अर्थ चुनें:", opts: ["तूफान", "एकदम अप्रत्याशित घटना", "खराब मौसम", "भाग्यशाली बचाव"] },
            correct: 1
        },
        {
            en: { q: "Select the correct passive: 'People speak English all over the world.'", opts: ["English was spoken all over the world.", "English is spoken all over the world.", "English has been spoken all over the world.", "English will be spoken all over the world."] },
            hi: { q: "सही passive चुनें: 'People speak English all over the world.'", opts: ["English was spoken all over the world.", "English is spoken all over the world.", "English has been spoken all over the world.", "English will be spoken all over the world."] },
            correct: 1
        },
        {
            en: { q: "Fill in: The teacher, along with her students, ______ going to the picnic.", opts: ["are", "is", "were", "have been"] },
            hi: { q: "रिक्त स्थान भरें: The teacher, along with her students, ______ going to the picnic.", opts: ["are", "is", "were", "have been"] },
            correct: 1
        },
        {
            en: { q: "Choose the one-word substitution for 'Fear of open spaces':", opts: ["Acrophobia", "Agoraphobia", "Claustrophobia", "Hydrophobia"] },
            hi: { q: "'खुले स्थानों का भय' के लिए एक शब्द चुनें:", opts: ["Acrophobia", "Agoraphobia", "Claustrophobia", "Hydrophobia"] },
            correct: 1
        },
        {
            en: { q: "Select the correctly spelt word:", opts: ["Reccommend", "Recomend", "Recommend", "Recommand"] },
            hi: { q: "सही वर्तनी वाला शब्द चुनें:", opts: ["Reccommend", "Recomend", "Recommend", "Recommand"] },
            correct: 2
        },
        {
            en: { q: "Identify the type of underlined clause: 'I know WHERE he lives.'", opts: ["Noun clause", "Adjective clause", "Adverb clause", "Independent clause"] },
            hi: { q: "रेखांकित उपवाक्य का प्रकार पहचानें: 'I know WHERE he lives.'", opts: ["Noun clause", "Adjective clause", "Adverb clause", "Independent clause"] },
            correct: 0
        },
        {
            en: { q: "Choose the word closest in meaning to LACONIC:", opts: ["Wordy", "Brief and to the point", "Loud", "Vague"] },
            hi: { q: "LACONIC के सबसे करीबी अर्थ वाला शब्द चुनें:", opts: ["शब्दाडंबरपूर्ण", "संक्षिप्त और सटीक", "ज़ोरदार", "अस्पष्ट"] },
            correct: 1
        },
        {
            en: { q: "Fill in with correct form: If I ______ rich, I would help the poor.", opts: ["am", "was", "were", "had been"] },
            hi: { q: "सही रूप से रिक्त स्थान भरें: If I ______ rich, I would help the poor.", opts: ["am", "was", "were", "had been"] },
            correct: 2
        },
        {
            en: { q: "Select the correct meaning: 'ENERVATE'", opts: ["To strengthen", "To weaken", "To energize", "To delay"] },
            hi: { q: "सही अर्थ चुनें: 'ENERVATE'", opts: ["मज़बूत करना", "कमज़ोर करना", "ऊर्जावान करना", "विलंबित करना"] },
            correct: 1
        },
        {
            en: { q: "Which sentence is grammatically correct?", opts: ["Each of the boys have done their homework.", "Each of the boys has done his homework.", "Each of the boys have done his homework.", "Each of the boys has done their homework."] },
            hi: { q: "कौन सा वाक्य व्याकरणिक रूप से सही है?", opts: ["Each of the boys have done their homework.", "Each of the boys has done his homework.", "Each of the boys have done his homework.", "Each of the boys has done their homework."] },
            correct: 1
        },
        {
            en: { q: "Select the antonym of TACITURN:", opts: ["Quiet", "Reserved", "Talkative", "Shy"] },
            hi: { q: "TACITURN का विलोम चुनें:", opts: ["शांत", "संयमित", "बातूनी", "शर्मीला"] },
            correct: 2
        },
        {
            en: { q: "Fill in: Neither the manager nor the employees ______ happy with the decision.", opts: ["is", "are", "was", "were"] },
            hi: { q: "रिक्त स्थान भरें: Neither the manager nor the employees ______ happy with the decision.", opts: ["is", "are", "was", "were"] },
            correct: 1
        },
        {
            en: { q: "Choose the correct indirect speech: 'She said, \"I will finish the work tomorrow.\"'", opts: ["She said she would finish the work tomorrow.", "She said she will finish the work the next day.", "She said she would finish the work the next day.", "She said she finished the work the next day."] },
            hi: { q: "सही indirect speech चुनें: 'She said, \"I will finish the work tomorrow.\"'", opts: ["She said she would finish the work tomorrow.", "She said she will finish the work the next day.", "She said she would finish the work the next day.", "She said she finished the work the next day."] },
            correct: 2
        },
        {
            en: { q: "Select the synonym of CANDID:", opts: ["Dishonest", "Frank", "Clever", "Reserved"] },
            hi: { q: "CANDID का पर्यायवाची चुनें:", opts: ["बेईमान", "स्पष्टवादी", "चालाक", "संयमित"] },
            correct: 1
        },
        {
            en: { q: "Identify the figure of speech: 'The stars danced in the night sky.'", opts: ["Simile", "Metaphor", "Personification", "Hyperbole"] },
            hi: { q: "अलंकार पहचानें: 'The stars danced in the night sky.'", opts: ["उपमा", "रूपक", "मानवीकरण", "अतिशयोक्ति"] },
            correct: 2
        },
        {
            en: { q: "Fill in: He is ______ honest man.", opts: ["a", "an", "the", "no article"] },
            hi: { q: "रिक्त स्थान भरें: He is ______ honest man.", opts: ["a", "an", "the", "no article"] },
            correct: 1
        },
        {
            en: { q: "Select the correct meaning of 'OSTENTATIOUS':", opts: ["Simple and modest", "Showy and pretentious", "Quiet and peaceful", "Strong and powerful"] },
            hi: { q: "'OSTENTATIOUS' का सही अर्थ चुनें:", opts: ["सरल और विनम्र", "दिखावटी और घमंडी", "शांत और शांतिपूर्ण", "मज़बूत और शक्तिशाली"] },
            correct: 1
        },
        {
            en: { q: "Choose the correctly punctuated sentence:", opts: ["I asked him, what is your name?", "I asked him what is your name.", "I asked him what his name was.", "I asked him, what his name was?"] },
            hi: { q: "सही विराम चिह्न वाला वाक्य चुनें:", opts: ["I asked him, what is your name?", "I asked him what is your name.", "I asked him what his name was.", "I asked him, what his name was?"] },
            correct: 2
        },
        {
            en: { q: "One word substitution for 'A person who is always doubtful about the truth of things':", opts: ["Atheist", "Skeptic", "Agnostic", "Cynic"] },
            hi: { q: "'जो व्यक्ति हमेशा चीज़ों की सत्यता पर संदेह करता है' के लिए एक शब्द:", opts: ["नास्तिक", "संशयवादी", "अज्ञेयवादी", "निंदक"] },
            correct: 1
        },
        {
            en: { q: "Select the correct question tag: 'Let us go to the cinema, ______?'", opts: ["shall we", "will we", "don't we", "won't we"] },
            hi: { q: "सही question tag चुनें: 'Let us go to the cinema, ______?'", opts: ["shall we", "will we", "don't we", "won't we"] },
            correct: 0
        },
        {
            en: { q: "Choose the antonym of OBLIVION:", opts: ["Forgetfulness", "Memory", "Darkness", "Ignorance"] },
            hi: { q: "OBLIVION का विलोम चुनें:", opts: ["विस्मृति", "स्मृति", "अंधेरा", "अज्ञानता"] },
            correct: 1
        },
        {
            en: { q: "Fill in: The news ______ disturbing.", opts: ["are", "were", "is", "have been"] },
            hi: { q: "रिक्त स्थान भरें: The news ______ disturbing.", opts: ["are", "were", "is", "have been"] },
            correct: 2
        },
        {
            en: { q: "Choose the correct meaning of 'ACRIMONY':", opts: ["Sweetness", "Bitterness of speech or manner", "Kindness", "Humility"] },
            hi: { q: "'ACRIMONY' का सही अर्थ चुनें:", opts: ["मधुरता", "वाणी या व्यवहार की कटुता", "दयालुता", "विनम्रता"] },
            correct: 1
        },
        {
            en: { q: "Identify the error: 'The price of petrol are rising every month.'", opts: ["The price", "of petrol", "are rising", "every month"] },
            hi: { q: "त्रुटि पहचानें: 'The price of petrol are rising every month.'", opts: ["The price", "of petrol", "are rising", "every month"] },
            correct: 2
        },
        {
            en: { q: "Choose the correct idiom meaning for 'To smell a rat':", opts: ["To find a rat in the house", "To suspect something wrong", "To have a good sense of smell", "To be confused"] },
            hi: { q: "'To smell a rat' मुहावरे का सही अर्थ चुनें:", opts: ["घर में चूहा मिलना", "किसी गड़बड़ी का संदेह होना", "अच्छी सूँघने की शक्ति होना", "भ्रमित होना"] },
            correct: 1
        },
        {
            en: { q: "Fill in the blank with the correct tense: By the time she arrived, I ______ the work.", opts: ["finished", "had finished", "have finished", "was finishing"] },
            hi: { q: "सही काल के साथ रिक्त स्थान भरें: By the time she arrived, I ______ the work.", opts: ["finished", "had finished", "have finished", "was finishing"] },
            correct: 1
        },

        // --- General Awareness – Banking & Finance (Q141–Q175) ---
        {
            en: { q: "Which is the largest public sector bank in India by assets?", opts: ["Punjab National Bank", "Bank of Baroda", "State Bank of India", "Canara Bank"] },
            hi: { q: "संपत्ति के हिसाब से भारत का सबसे बड़ा सार्वजनिक क्षेत्र का बैंक कौन सा है?", opts: ["पंजाब नेशनल बैंक", "बैंक ऑफ बड़ौदा", "भारतीय स्टेट बैंक", "केनरा बैंक"] },
            correct: 2
        },
        {
            en: { q: "Which of the following is the regulatory body for stock exchanges in India?", opts: ["RBI", "SEBI", "AMFI", "NSE"] },
            hi: { q: "भारत में स्टॉक एक्सचेंजों का नियामक निकाय कौन सा है?", opts: ["RBI", "SEBI", "AMFI", "NSE"] },
            correct: 1
        },
        {
            en: { q: "The term 'Stagflation' refers to:", opts: ["High growth with low inflation", "Low growth with high inflation and unemployment", "Rapid economic growth", "Deflation in economy"] },
            hi: { q: "'Stagflation' शब्द का अर्थ है:", opts: ["उच्च वृद्धि और कम मुद्रास्फीति", "कम वृद्धि के साथ उच्च मुद्रास्फीति और बेरोज़गारी", "तीव्र आर्थिक वृद्धि", "अर्थव्यवस्था में अपस्फीति"] },
            correct: 1
        },
        {
            en: { q: "IMF stands for:", opts: ["International Monetary Forum", "International Monetary Fund", "International Market Federation", "Indian Money Fund"] },
            hi: { q: "IMF का पूर्ण रूप है:", opts: ["International Monetary Forum", "International Monetary Fund", "International Market Federation", "Indian Money Fund"] },
            correct: 1
        },
        {
            en: { q: "The Kisan Credit Card (KCC) scheme was introduced in:", opts: ["1996", "1998", "2000", "2004"] },
            hi: { q: "किसान क्रेडिट कार्ड (KCC) योजना किस वर्ष शुरू की गई थी?", opts: ["1996", "1998", "2000", "2004"] },
            correct: 1
        },
        {
            en: { q: "Which of the following is NOT a Negotiable Instrument?", opts: ["Cheque", "Demand Draft", "Fixed Deposit Receipt", "Promissory Note"] },
            hi: { q: "निम्नलिखित में से कौन सा परक्राम्य लिखत (Negotiable Instrument) नहीं है?", opts: ["चेक", "डिमांड ड्राफ्ट", "सावधि जमा रसीद", "वचन पत्र"] },
            correct: 2
        },
        {
            en: { q: "Which of the following schemes provides old age protection to workers of unorganised sector?", opts: ["Jan Dhan Yojana", "Atal Pension Yojana", "Pradhan Mantri Jeevan Jyoti Bima Yojana", "PMSBY"] },
            hi: { q: "असंगठित क्षेत्र के श्रमिकों को वृद्धावस्था सुरक्षा कौन सी योजना प्रदान करती है?", opts: ["जन धन योजना", "अटल पेंशन योजना", "प्रधानमंत्री जीवन ज्योति बीमा योजना", "PMSBY"] },
            correct: 1
        },
        {
            en: { q: "What is the full form of IMPS in banking?", opts: ["Immediate Payment Service", "Integrated Mobile Payment System", "Instant Money Payment Service", "Interbank Mobile Payment Service"] },
            hi: { q: "बैंकिंग में IMPS का पूर्ण रूप है:", opts: ["Immediate Payment Service", "Integrated Mobile Payment System", "Instant Money Payment Service", "Interbank Mobile Payment Service"] },
            correct: 0
        },
        {
            en: { q: "Foreign exchange reserves of India are maintained by:", opts: ["Ministry of Finance", "Reserve Bank of India", "SEBI", "Ministry of Commerce"] },
            hi: { q: "भारत के विदेशी मुद्रा भंडार किसके द्वारा रखे जाते हैं?", opts: ["वित्त मंत्रालय", "भारतीय रिजर्व बैंक", "SEBI", "वाणिज्य मंत्रालय"] },
            correct: 1
        },
        {
            en: { q: "The concept of 'Financial Inclusion' was first recommended in India by which committee?", opts: ["C. Rangarajan Committee", "Khan Commission", "Nair Committee", "Kelkar Committee"] },
            hi: { q: "भारत में 'वित्तीय समावेशन' की अवधारणा सबसे पहले किस समिति ने अनुशंसित की थी?", opts: ["सी. रंगराजन समिति", "खान आयोग", "नायर समिति", "केलकर समिति"] },
            correct: 0
        },
        {
            en: { q: "Which of the following is NOT a part of broad money (M3) in India?", opts: ["Currency in circulation", "Demand deposits", "Time deposits", "Foreign currency assets of RBI"] },
            hi: { q: "निम्नलिखित में से कौन भारत में व्यापक मुद्रा (M3) का हिस्सा नहीं है?", opts: ["प्रचलन में मुद्रा", "माँग जमा", "सावधि जमा", "RBI की विदेशी मुद्रा संपत्ति"] },
            correct: 3
        },
        {
            en: { q: "The headquarters of ADB (Asian Development Bank) is located in:", opts: ["Beijing", "Tokyo", "Manila", "Singapore"] },
            hi: { q: "ADB (एशियाई विकास बैंक) का मुख्यालय कहाँ है?", opts: ["बीजिंग", "टोक्यो", "मनीला", "सिंगापुर"] },
            correct: 2
        },
        {
            en: { q: "Under the Banking Ombudsman Scheme, complaints can be filed if not resolved within ______ days by the bank:", opts: ["15 days", "30 days", "45 days", "60 days"] },
            hi: { q: "बैंकिंग लोकपाल योजना के तहत शिकायत कितने दिनों के भीतर बैंक द्वारा हल न होने पर दर्ज की जा सकती है:", opts: ["15 दिन", "30 दिन", "45 दिन", "60 दिन"] },
            correct: 1
        },
        {
            en: { q: "What does 'CIBIL' stand for?", opts: ["Credit Information Bureau of India Limited", "Central Indian Banking Information Limit", "Credit Integrity Bureau of India Ltd", "Central Information Bureau of India Ltd"] },
            hi: { q: "'CIBIL' का पूर्ण रूप क्या है?", opts: ["Credit Information Bureau of India Limited", "Central Indian Banking Information Limit", "Credit Integrity Bureau of India Ltd", "Central Information Bureau of India Ltd"] },
            correct: 0
        },
        {
            en: { q: "The term 'Sub-prime lending' refers to:", opts: ["Lending at below-prime rates", "Lending to borrowers with poor credit history", "Prime lending by banks", "Government lending schemes"] },
            hi: { q: "'Sub-prime lending' का अर्थ है:", opts: ["प्राइम दर से कम पर उधार देना", "खराब क्रेडिट इतिहास वाले उधारकर्ताओं को उधार देना", "बैंकों द्वारा प्राइम उधार", "सरकारी उधार योजनाएँ"] },
            correct: 1
        },
        {
            en: { q: "NBFC stands for:", opts: ["National Banking Finance Company", "Non-Banking Financial Company", "Net Banking Financial Corporation", "National Board Finance Council"] },
            hi: { q: "NBFC का पूर्ण रूप है:", opts: ["National Banking Finance Company", "Non-Banking Financial Company", "Net Banking Financial Corporation", "National Board Finance Council"] },
            correct: 1
        },
        {
            en: { q: "Which of the following is a Money Market Instrument?", opts: ["Equity Share", "Debenture", "Treasury Bill", "Preference Share"] },
            hi: { q: "निम्नलिखित में से कौन सा एक मुद्रा बाज़ार उपकरण है?", opts: ["इक्विटी शेयर", "डिबेंचर", "ट्रेज़री बिल", "प्राथमिकता शेयर"] },
            correct: 2
        },
        {
            en: { q: "The first bank to introduce ATM in India was:", opts: ["State Bank of India", "ICICI Bank", "HSBC", "Citibank"] },
            hi: { q: "भारत में ATM शुरू करने वाला पहला बैंक था:", opts: ["भारतीय स्टेट बैंक", "ICICI बैंक", "HSBC", "सिटीबैंक"] },
            correct: 3
        },
        {
            en: { q: "The term 'Lender of Last Resort' is associated with:", opts: ["World Bank", "IMF", "RBI", "NABARD"] },
            hi: { q: "'Lender of Last Resort' शब्द किससे जुड़ा है?", opts: ["विश्व बैंक", "IMF", "RBI", "NABARD"] },
            correct: 2
        },
        {
            en: { q: "UPI in the payment system stands for:", opts: ["Unified Payment Interface", "Universal Payment Interface", "United Payment Integration", "Unified Payment Integration"] },
            hi: { q: "भुगतान प्रणाली में UPI का पूर्ण रूप है:", opts: ["Unified Payment Interface", "Universal Payment Interface", "United Payment Integration", "Unified Payment Integration"] },
            correct: 0
        },
        {
            en: { q: "Payment Banks in India are permitted to accept deposits up to a maximum of:", opts: ["Rs. 50,000", "Rs. 1,00,000", "Rs. 2,00,000", "Rs. 5,00,000"] },
            hi: { q: "भारत में पेमेंट बैंकों को अधिकतम कितनी जमा स्वीकार करने की अनुमति है:", opts: ["₹50,000", "₹1,00,000", "₹2,00,000", "₹5,00,000"] },
            correct: 1
        },
        {
            en: { q: "Which of the following is NOT included in India's Scheduled Commercial Banks?", opts: ["Nationalised Banks", "Private Sector Banks", "Foreign Banks", "Land Development Banks"] },
            hi: { q: "निम्न में से कौन भारत के अनुसूचित वाणिज्यिक बैंकों में शामिल नहीं है?", opts: ["राष्ट्रीयकृत बैंक", "निजी क्षेत्र के बैंक", "विदेशी बैंक", "भूमि विकास बैंक"] },
            correct: 3
        },
        {
            en: { q: "The concept of 'Green Banking' aims at:", opts: ["Banking for agricultural sector", "Eco-friendly banking practices reducing carbon footprint", "Providing green loans", "Banking for forest areas"] },
            hi: { q: "'ग्रीन बैंकिंग' की अवधारणा का उद्देश्य है:", opts: ["कृषि क्षेत्र के लिए बैंकिंग", "कार्बन फुटप्रिंट कम करने वाली पर्यावरण-अनुकूल बैंकिंग प्रथाएँ", "हरित ऋण प्रदान करना", "वन क्षेत्रों के लिए बैंकिंग"] },
            correct: 1
        },
        {
            en: { q: "What is the full form of ECS in banking?", opts: ["Electronic Clearing System", "Electronic Credit System", "Electronic Cash Settlement", "Extra Credit Scheme"] },
            hi: { q: "बैंकिंग में ECS का पूर्ण रूप है:", opts: ["Electronic Clearing System", "Electronic Credit System", "Electronic Cash Settlement", "Extra Credit Scheme"] },
            correct: 0
        },
        {
            en: { q: "Capital Market deals with:", opts: ["Short-term funds", "Medium and long-term funds", "Only government securities", "Only foreign exchange"] },
            hi: { q: "पूँजी बाज़ार किससे संबंधित है:", opts: ["अल्पकालिक कोष", "मध्यम और दीर्घकालिक कोष", "केवल सरकारी प्रतिभूतियाँ", "केवल विदेशी मुद्रा"] },
            correct: 1
        },
        {
            en: { q: "Pradhan Mantri Jan Dhan Yojana (PMJDY) was launched in the year:", opts: ["2012", "2013", "2014", "2015"] },
            hi: { q: "प्रधानमंत्री जन धन योजना (PMJDY) किस वर्ष शुरू की गई थी?", opts: ["2012", "2013", "2014", "2015"] },
            correct: 2
        },
        {
            en: { q: "Which of the following is the main source of income for commercial banks?", opts: ["Fees and charges", "Interest on loans", "Exchange commission", "Dividend"] },
            hi: { q: "वाणिज्यिक बैंकों की आय का मुख्य स्रोत क्या है?", opts: ["शुल्क और प्रभार", "ऋण पर ब्याज", "विनिमय कमीशन", "लाभांश"] },
            correct: 1
        },
        {
            en: { q: "Who issues coins in India?", opts: ["Reserve Bank of India", "Ministry of Finance", "State Bank of India", "Planning Commission"] },
            hi: { q: "भारत में सिक्के कौन जारी करता है?", opts: ["भारतीय रिजर्व बैंक", "वित्त मंत्रालय", "भारतीय स्टेट बैंक", "योजना आयोग"] },
            correct: 1
        },
        {
            en: { q: "Reverse Repo Rate is the rate at which:", opts: ["Banks borrow money from RBI", "RBI borrows money from commercial banks", "Banks give loans to customers", "RBI gives loans to government"] },
            hi: { q: "Reverse Repo Rate वह दर है जिस पर:", opts: ["बैंक RBI से पैसा उधार लेते हैं", "RBI वाणिज्यिक बैंकों से पैसा उधार लेता है", "बैंक ग्राहकों को ऋण देते हैं", "RBI सरकार को ऋण देता है"] },
            correct: 1
        },
        {
            en: { q: "SIDBI stands for:", opts: ["Small Industries Development Bank of India", "State Industries Development Bank of India", "Small Investment Development Bank of India", "Standard Investment Development Bank of India"] },
            hi: { q: "SIDBI का पूर्ण रूप है:", opts: ["Small Industries Development Bank of India", "State Industries Development Bank of India", "Small Investment Development Bank of India", "Standard Investment Development Bank of India"] },
            correct: 0
        },
        {
            en: { q: "Which of the following is an example of Open Market Operation (OMO) by RBI?", opts: ["Changing CRR", "Changing SLR", "Buying/Selling government securities", "Changing Repo Rate"] },
            hi: { q: "निम्नलिखित में से कौन सा RBI द्वारा खुले बाज़ार परिचालन (OMO) का उदाहरण है?", opts: ["CRR बदलना", "SLR बदलना", "सरकारी प्रतिभूतियाँ खरीदना/बेचना", "Repo Rate बदलना"] },
            correct: 2
        },
        {
            en: { q: "EXIM Bank of India is related to:", opts: ["External deposits", "Export-Import financing", "Electronic transactions", "Exchange rate management"] },
            hi: { q: "भारत का EXIM बैंक किससे संबंधित है:", opts: ["बाह्य जमाएँ", "निर्यात-आयात वित्तपोषण", "इलेक्ट्रॉनिक लेन-देन", "विनिमय दर प्रबंधन"] },
            correct: 1
        },
        {
            en: { q: "What is the minimum and maximum tenure of a Fixed Deposit in India?", opts: ["7 days to 10 years", "15 days to 10 years", "7 days to 5 years", "30 days to 10 years"] },
            hi: { q: "भारत में सावधि जमा की न्यूनतम और अधिकतम अवधि क्या है?", opts: ["7 दिन से 10 वर्ष", "15 दिन से 10 वर्ष", "7 दिन से 5 वर्ष", "30 दिन से 10 वर्ष"] },
            correct: 0
        },
        {
            en: { q: "Which regulatory authority governs Mutual Funds in India?", opts: ["RBI", "SEBI", "AMFI", "IRDAI"] },
            hi: { q: "भारत में म्यूचुअल फंड को कौन सा नियामक प्राधिकरण नियंत्रित करता है?", opts: ["RBI", "SEBI", "AMFI", "IRDAI"] },
            correct: 1
        },
        {
            en: { q: "What is 'Moral Suasion' in monetary policy?", opts: ["Legal directive to banks", "Advising/persuading banks informally to follow certain policies", "Court order on banks", "Fiscal policy tool"] },
            hi: { q: "मौद्रिक नीति में 'Moral Suasion' क्या है?", opts: ["बैंकों को कानूनी निर्देश", "बैंकों को अनौपचारिक रूप से कुछ नीतियों का पालन करने की सलाह देना", "बैंकों पर न्यायालय आदेश", "राजकोषीय नीति उपकरण"] },
            correct: 1
        },
        {
            en: { q: "India's first commercial bank was:", opts: ["Bank of Bombay", "Bank of Madras", "Bank of Hindustan", "Bank of Bengal"] },
            hi: { q: "भारत का पहला वाणिज्यिक बैंक था:", opts: ["बैंक ऑफ बॉम्बे", "बैंक ऑफ मद्रास", "बैंक ऑफ हिंदुस्तान", "बैंक ऑफ बंगाल"] },
            correct: 2
        },

        // --- Computer Knowledge (Q176–Q200) ---
        {
            en: { q: "What does 'BIOS' stand for?", opts: ["Basic Input Output System", "Binary Input Output System", "Basic Internal Operating System", "Binary Integrated Output System"] },
            hi: { q: "'BIOS' का पूर्ण रूप क्या है?", opts: ["Basic Input Output System", "Binary Input Output System", "Basic Internal Operating System", "Binary Integrated Output System"] },
            correct: 0
        },
        {
            en: { q: "Which of the following is a non-volatile memory?", opts: ["RAM", "Cache Memory", "Register", "ROM"] },
            hi: { q: "निम्नलिखित में से कौन सा non-volatile memory है?", opts: ["RAM", "Cache Memory", "Register", "ROM"] },
            correct: 3
        },
        {
            en: { q: "The shortcut key to select all text in MS Word is:", opts: ["Ctrl+A", "Ctrl+S", "Ctrl+X", "Ctrl+T"] },
            hi: { q: "MS Word में सभी टेक्स्ट चुनने की शॉर्टकट key है:", opts: ["Ctrl+A", "Ctrl+S", "Ctrl+X", "Ctrl+T"] },
            correct: 0
        },
        {
            en: { q: "Which topology connects all nodes to a single central cable?", opts: ["Star", "Ring", "Bus", "Mesh"] },
            hi: { q: "कौन सी टोपोलॉजी सभी nodes को एक केंद्रीय केबल से जोड़ती है?", opts: ["Star", "Ring", "Bus", "Mesh"] },
            correct: 2
        },
        {
            en: { q: "The storage capacity of a standard DVD is approximately:", opts: ["700 MB", "1.4 GB", "4.7 GB", "8.5 GB"] },
            hi: { q: "एक मानक DVD की भंडारण क्षमता लगभग है:", opts: ["700 MB", "1.4 GB", "4.7 GB", "8.5 GB"] },
            correct: 2
        },
        {
            en: { q: "Which of the following is an example of application software?", opts: ["Linux", "Windows XP", "MS Excel", "Android Kernel"] },
            hi: { q: "निम्नलिखित में से कौन Application Software का उदाहरण है?", opts: ["Linux", "Windows XP", "MS Excel", "Android Kernel"] },
            correct: 2
        },
        {
            en: { q: "What does 'https' indicate in a website URL?", opts: ["The site has multiple servers", "The connection is secure", "The site is hosted in the US", "The site uses high-speed servers"] },
            hi: { q: "वेबसाइट URL में 'https' क्या दर्शाता है?", opts: ["साइट में कई सर्वर हैं", "कनेक्शन सुरक्षित है", "साइट अमेरिका में होस्ट है", "साइट हाई-स्पीड सर्वर उपयोग करती है"] },
            correct: 1
        },
        {
            en: { q: "Which device converts digital signals to analog signals for transmission over telephone lines?", opts: ["Router", "Switch", "Modem", "Hub"] },
            hi: { q: "कौन सा उपकरण डिजिटल संकेतों को टेलीफोन लाइनों पर ट्रांसमिशन के लिए एनालॉग संकेतों में बदलता है?", opts: ["Router", "Switch", "Modem", "Hub"] },
            correct: 2
        },
        {
            en: { q: "Excel function to count cells containing numbers is:", opts: ["SUM", "COUNT", "COUNTA", "COUNTIF"] },
            hi: { q: "संख्याएँ वाली cells गिनने के लिए Excel function है:", opts: ["SUM", "COUNT", "COUNTA", "COUNTIF"] },
            correct: 1
        },
        {
            en: { q: "Which of the following is NOT a type of malware?", opts: ["Virus", "Worm", "Trojan", "Cache"] },
            hi: { q: "निम्नलिखित में से कौन malware का प्रकार नहीं है?", opts: ["Virus", "Worm", "Trojan", "Cache"] },
            correct: 3
        },
        {
            en: { q: "In MS Word, which feature is used to automatically correct common spelling errors?", opts: ["AutoFormat", "AutoCorrect", "Spell Check", "AutoText"] },
            hi: { q: "MS Word में सामान्य वर्तनी त्रुटियों को स्वचालित रूप से ठीक करने के लिए कौन सी सुविधा उपयोग की जाती है?", opts: ["AutoFormat", "AutoCorrect", "Spell Check", "AutoText"] },
            correct: 1
        },
        {
            en: { q: "WAN stands for:", opts: ["Wireless Area Network", "Wide Area Network", "Web Area Network", "Wide Access Network"] },
            hi: { q: "WAN का पूर्ण रूप है:", opts: ["Wireless Area Network", "Wide Area Network", "Web Area Network", "Wide Access Network"] },
            correct: 1
        },
        {
            en: { q: "The brain of a computer is:", opts: ["Hard Disk", "Monitor", "CPU", "Keyboard"] },
            hi: { q: "कंप्यूटर का मस्तिष्क है:", opts: ["हार्ड डिस्क", "मॉनीटर", "CPU", "कीबोर्ड"] },
            correct: 2
        },
        {
            en: { q: "Which of the following is an example of an optical storage device?", opts: ["Hard Disk", "RAM", "CD-ROM", "USB Pen Drive"] },
            hi: { q: "निम्नलिखित में से कौन ऑप्टिकल भंडारण उपकरण का उदाहरण है?", opts: ["हार्ड डिस्क", "RAM", "CD-ROM", "USB पेन ड्राइव"] },
            correct: 2
        },
        {
            en: { q: "What is the function of the Recycle Bin in Windows?", opts: ["Store copies of files", "Temporarily hold deleted files", "Clean viruses", "Back up data"] },
            hi: { q: "Windows में Recycle Bin का क्या कार्य है?", opts: ["फ़ाइलों की प्रतियाँ संग्रहीत करना", "हटाई गई फ़ाइलों को अस्थायी रूप से रखना", "वायरस साफ़ करना", "डेटा का बैकअप लेना"] },
            correct: 1
        },
        {
            en: { q: "The shortcut key to open Task Manager in Windows is:", opts: ["Ctrl+Alt+Delete", "Ctrl+Shift+Esc", "Ctrl+Alt+Esc", "Ctrl+Shift+Delete"] },
            hi: { q: "Windows में Task Manager खोलने की शॉर्टकट key है:", opts: ["Ctrl+Alt+Delete", "Ctrl+Shift+Esc", "Ctrl+Alt+Esc", "Ctrl+Shift+Delete"] },
            correct: 1
        },
        {
            en: { q: "Which company developed the Java programming language?", opts: ["Microsoft", "Apple", "Sun Microsystems", "IBM"] },
            hi: { q: "Java programming language किस कंपनी ने विकसित की?", opts: ["Microsoft", "Apple", "Sun Microsystems", "IBM"] },
            correct: 2
        },
        {
            en: { q: "The process of converting a higher-level language to machine language is called:", opts: ["Assembling", "Compiling", "Interpreting", "Linking"] },
            hi: { q: "उच्च-स्तरीय भाषा को मशीन भाषा में बदलने की प्रक्रिया कहलाती है:", opts: ["Assembling", "Compiling", "Interpreting", "Linking"] },
            correct: 1
        },
        {
            en: { q: "What does HTML stand for?", opts: ["Hyper Text Markup Language", "High Text Makeup Language", "Hyper Transfer Markup Language", "Hyper Text Making Language"] },
            hi: { q: "HTML का पूर्ण रूप क्या है?", opts: ["Hyper Text Markup Language", "High Text Makeup Language", "Hyper Transfer Markup Language", "Hyper Text Making Language"] },
            correct: 0
        },
        {
            en: { q: "Which shortcut key is used to save a document in MS Word?", opts: ["Ctrl+P", "Ctrl+S", "Ctrl+D", "Alt+S"] },
            hi: { q: "MS Word में दस्तावेज़ सहेजने के लिए कौन सी शॉर्टकट key उपयोग की जाती है?", opts: ["Ctrl+P", "Ctrl+S", "Ctrl+D", "Alt+S"] },
            correct: 1
        },
        {
            en: { q: "The first generation computers used:", opts: ["Transistors", "Integrated Circuits", "Vacuum Tubes", "VLSI chips"] },
            hi: { q: "पहली पीढ़ी के कंप्यूटरों में किसका उपयोग किया जाता था?", opts: ["ट्रांजिस्टर", "इंटीग्रेटेड सर्किट", "वैक्यूम ट्यूब", "VLSI चिप"] },
            correct: 2
        },
        {
            en: { q: "Which of the following is a correct format for an IPv4 address?", opts: ["192.168.1.300", "192.168.1.1", "192:168:1:1", "192-168-1-1"] },
            hi: { q: "निम्नलिखित में से कौन सा IPv4 address का सही format है?", opts: ["192.168.1.300", "192.168.1.1", "192:168:1:1", "192-168-1-1"] },
            correct: 1
        },
        {
            en: { q: "What type of software is an antivirus program?", opts: ["System Software", "Application Software", "Utility Software", "Programming Software"] },
            hi: { q: "एंटीवायरस प्रोग्राम किस प्रकार का सॉफ्टवेयर है?", opts: ["System Software", "Application Software", "Utility Software", "Programming Software"] },
            correct: 2
        },
        {
            en: { q: "In MS Excel, which symbol is used to start a formula?", opts: ["#", "@", "=", "$"] },
            hi: { q: "MS Excel में formula शुरू करने के लिए कौन सा चिह्न उपयोग किया जाता है?", opts: ["#", "@", "=", "$"] },
            correct: 2
        },
        {
            en: { q: "E-mail attachment refers to:", opts: ["The subject of an email", "A file sent along with an email", "The email signature", "The CC list of an email"] },
            hi: { q: "E-mail attachment का अर्थ है:", opts: ["ईमेल का विषय", "ईमेल के साथ भेजी गई फ़ाइल", "ईमेल हस्ताक्षर", "ईमेल की CC सूची"] },
            correct: 1
        },
        {
            en: { q: "DNS stands for:", opts: ["Domain Name System", "Digital Network Service", "Data Name System", "Dynamic Network Server"] },
            hi: { q: "DNS का पूर्ण रूप है:", opts: ["Domain Name System", "Digital Network Service", "Data Name System", "Dynamic Network Server"] },
            correct: 0
        },

        // --- Additional Reasoning (Q201–Q210) ---
        {
            en: { q: "Find the next term: 2, 3, 5, 8, 13, 21, ?", opts: ["29", "34", "35", "40"] },
            hi: { q: "अगला पद ज्ञात करें: 2, 3, 5, 8, 13, 21, ?", opts: ["29", "34", "35", "40"] },
            correct: 1
        },
        {
            en: { q: "If 'PAPER' is coded as 'SCTGZ', how is 'PENCIL' coded?", opts: ["SHQFLP", "SHQENL", "SHQFLO", "TIRGNM"] },
            hi: { q: "यदि 'PAPER' को 'SCTGZ' कूटबद्ध किया जाता है, तो 'PENCIL' को कैसे लिखेंगे?", opts: ["SHQFLP", "SHQENL", "SHQFLO", "TIRGNM"] },
            correct: 0
        },
        {
            en: { q: "Choose the correct analogy: Thermometer : Temperature :: Barometer : ?", opts: ["Heat", "Wind", "Pressure", "Humidity"] },
            hi: { q: "सही सादृश्य चुनें: थर्मामीटर : तापमान :: बैरोमीटर : ?", opts: ["गर्मी", "हवा", "दबाव", "आर्द्रता"] },
            correct: 2
        },
        {
            en: { q: "In a class, there are 18 boys and 12 girls. What percentage of the class are girls?", opts: ["30%", "35%", "40%", "45%"] },
            hi: { q: "एक कक्षा में 18 लड़के और 12 लड़कियाँ हैं। कक्षा में लड़कियों का प्रतिशत क्या है?", opts: ["30%", "35%", "40%", "45%"] },
            correct: 2
        },
        {
            en: { q: "Statements: All birds can fly. Penguins are birds. Conclusion: Penguins can fly. The argument is:", opts: ["Valid", "Invalid — penguins cannot fly", "Partially valid", "Cannot be determined"] },
            hi: { q: "कथन: सभी पक्षी उड़ सकते हैं। पेंगुइन पक्षी हैं। निष्कर्ष: पेंगुइन उड़ सकते हैं। तर्क है:", opts: ["वैध", "अवैध — पेंगुइन नहीं उड़ सकते", "आंशिक रूप से वैध", "निर्धारित नहीं किया जा सकता"] },
            correct: 0
        },
        {
            en: { q: "If TRAIN = 25 and PLANE = 23, then BUS = ?", opts: ["9", "10", "11", "12"] },
            hi: { q: "यदि TRAIN = 25 और PLANE = 23, तो BUS = ?", opts: ["9", "10", "11", "12"] },
            correct: 0
        },
        {
            en: { q: "Which of the following is odd one out? January, March, May, June, July, August", opts: ["January", "June", "May", "August"] },
            hi: { q: "निम्न में से बेमेल कौन सा है? January, March, May, June, July, August", opts: ["January", "June", "May", "August"] },
            correct: 1
        },
        {
            en: { q: "Ravi is 7 ranks ahead of Sumit in a class of 39. If Sumit's rank is 17th from the last, what is Ravi's rank from the start?", opts: ["14th", "15th", "16th", "17th"] },
            hi: { q: "39 छात्रों की कक्षा में रवि, सुमित से 7 रैंक आगे है। यदि सुमित की रैंक अंत से 17वीं है, तो रवि की शुरुआत से रैंक क्या है?", opts: ["14वीं", "15वीं", "16वीं", "17वीं"] },
            correct: 1
        },
        {
            en: { q: "Find the odd pair: (16,4), (25,5), (36,6), (48,7)", opts: ["(16,4)", "(25,5)", "(48,7)", "(36,6)"] },
            hi: { q: "बेमेल जोड़ा ज्ञात करें: (16,4), (25,5), (36,6), (48,7)", opts: ["(16,4)", "(25,5)", "(48,7)", "(36,6)"] },
            correct: 2
        },
        {
            en: { q: "Statement: All politicians are educated. Ram is educated. Conclusion: Ram is a politician.", opts: ["Conclusion follows", "Conclusion does not follow", "Partially follows", "Data insufficient"] },
            hi: { q: "कथन: सभी राजनेता शिक्षित हैं। राम शिक्षित है। निष्कर्ष: राम एक राजनेता है।", opts: ["निष्कर्ष सही है", "निष्कर्ष सही नहीं है", "आंशिक रूप से सही है", "डेटा अपर्याप्त"] },
            correct: 1
        },

        // --- Additional Quantitative Aptitude (Q211–Q220) ---
        {
            en: { q: "What is the value of sin²30° + cos²60° + tan²45°?", opts: ["1", "1.5", "2", "2.5"] },
            hi: { q: "sin²30° + cos²60° + tan²45° का मान क्या है?", opts: ["1", "1.5", "2", "2.5"] },
            correct: 1
        },
        {
            en: { q: "A father is 4 times older than his son. After 20 years, he will be twice as old as his son. What is the son's present age?", opts: ["10 years", "12 years", "15 years", "20 years"] },
            hi: { q: "एक पिता अपने बेटे से 4 गुना बड़ा है। 20 साल बाद वह अपने बेटे से दोगुना बड़ा होगा। बेटे की वर्तमान आयु क्या है?", opts: ["10 वर्ष", "12 वर्ष", "15 वर्ष", "20 वर्ष"] },
            correct: 0
        },
        {
            en: { q: "The difference between a two-digit number and the number obtained by reversing its digits is 36. What is the difference between the two digits?", opts: ["3", "4", "5", "6"] },
            hi: { q: "एक दो अंकों की संख्या और उसके अंक पलटने पर बनी संख्या का अंतर 36 है। दोनों अंकों का अंतर क्या है?", opts: ["3", "4", "5", "6"] },
            correct: 1
        },
        {
            en: { q: "Rs. 6000 is lent in two parts. One part at 5% and other at 8% per annum SI. After 2 years total interest is Rs. 750. What is the amount lent at 5%?", opts: ["Rs. 4000", "Rs. 3500", "Rs. 4500", "Rs. 3000"] },
            hi: { q: "₹6000 को दो भागों में दिया जाता है। एक भाग 5% पर और दूसरा 8% प्रति वर्ष SI पर। 2 वर्ष बाद कुल ब्याज ₹750 है। 5% पर उधार दी गई राशि क्या है?", opts: ["₹4000", "₹3500", "₹4500", "₹3000"] },
            correct: 2
        },
        {
            en: { q: "A and B start running from the same point on a circular track of 600 m at 12 m/s and 8 m/s in the same direction. When will they first meet?", opts: ["100 sec", "150 sec", "120 sec", "200 sec"] },
            hi: { q: "A और B 600 मीटर के एक गोलाकार ट्रैक पर एक ही बिंदु से क्रमशः 12 m/s और 8 m/s पर एक ही दिशा में दौड़ना शुरू करते हैं। वे पहली बार कब मिलेंगे?", opts: ["100 सेकंड", "150 सेकंड", "120 सेकंड", "200 सेकंड"] },
            correct: 1
        },
        {
            en: { q: "If a:b = 2:3 and b:c = 4:5, then a:b:c = ?", opts: ["8:12:15", "2:3:5", "8:12:20", "6:9:15"] },
            hi: { q: "यदि a:b = 2:3 और b:c = 4:5, तो a:b:c = ?", opts: ["8:12:15", "2:3:5", "8:12:20", "6:9:15"] },
            correct: 0
        },
        {
            en: { q: "In a triangle, two angles are 65° and 45°. What is the third angle?", opts: ["60°", "70°", "75°", "80°"] },
            hi: { q: "एक त्रिभुज में दो कोण 65° और 45° हैं। तीसरा कोण क्या होगा?", opts: ["60°", "70°", "75°", "80°"] },
            correct: 1
        },
        {
            en: { q: "What is 15% of 20% of 500?", opts: ["10", "12", "15", "20"] },
            hi: { q: "500 के 20% का 15% क्या है?", opts: ["10", "12", "15", "20"] },
            correct: 2
        },
        {
            en: { q: "A sum of money doubles itself in 8 years at simple interest. In how many years will it become 4 times?", opts: ["16 years", "20 years", "24 years", "32 years"] },
            hi: { q: "एक राशि साधारण ब्याज पर 8 वर्षों में दोगुनी हो जाती है। कितने वर्षों में यह 4 गुनी हो जाएगी?", opts: ["16 वर्ष", "20 वर्ष", "24 वर्ष", "32 वर्ष"] },
            correct: 2
        },
        {
            en: { q: "A cylinder has radius 7 cm and height 10 cm. What is its volume? (π = 22/7)", opts: ["1450 cm³", "1540 cm³", "1560 cm³", "1620 cm³"] },
            hi: { q: "एक बेलन की त्रिज्या 7 सेमी और ऊँचाई 10 सेमी है। इसका आयतन क्या है? (π = 22/7)", opts: ["1450 cm³", "1540 cm³", "1560 cm³", "1620 cm³"] },
            correct: 1
        },

        // --- Additional Banking GK (Q221–Q230) ---
        {
            en: { q: "RuPay card was launched by which organisation?", opts: ["RBI", "NPCI", "SEBI", "Visa"] },
            hi: { q: "RuPay कार्ड किस संगठन द्वारा लॉन्च किया गया था?", opts: ["RBI", "NPCI", "SEBI", "Visa"] },
            correct: 1
        },
        {
            en: { q: "Which of the following is the correct full form of NEFT?", opts: ["National Electronic Fund Transfer", "Net Electronic Fund Transfer", "National Economic Fund Transfer", "National Easy Fund Transfer"] },
            hi: { q: "NEFT का सही पूर्ण रूप कौन सा है?", opts: ["National Electronic Fund Transfer", "Net Electronic Fund Transfer", "National Economic Fund Transfer", "National Easy Fund Transfer"] },
            correct: 0
        },
        {
            en: { q: "Under Pradhan Mantri Suraksha Bima Yojana (PMSBY), the annual premium is:", opts: ["Rs. 12", "Rs. 20", "Rs. 330", "Rs. 436"] },
            hi: { q: "प्रधानमंत्री सुरक्षा बीमा योजना (PMSBY) के तहत वार्षिक प्रीमियम है:", opts: ["₹12", "₹20", "₹330", "₹436"] },
            correct: 1
        },
        {
            en: { q: "The minimum paid-up equity capital for Small Finance Banks is:", opts: ["Rs. 100 crore", "Rs. 200 crore", "Rs. 500 crore", "Rs. 1000 crore"] },
            hi: { q: "लघु वित्त बैंकों के लिए न्यूनतम चुकता इक्विटी पूँजी है:", opts: ["₹100 करोड़", "₹200 करोड़", "₹500 करोड़", "₹1000 करोड़"] },
            correct: 1
        },
        {
            en: { q: "The full form of NACH is:", opts: ["National Automated Clearing House", "National Accounts Clearing Hub", "Net Automated Clearing House", "National Agency Clearing Hub"] },
            hi: { q: "NACH का पूर्ण रूप है:", opts: ["National Automated Clearing House", "National Accounts Clearing Hub", "Net Automated Clearing House", "National Agency Clearing Hub"] },
            correct: 0
        },
        {
            en: { q: "Priority sector lending for foreign banks with less than 20 branches is what percent of ANBC?", opts: ["32%", "36%", "40%", "50%"] },
            hi: { q: "20 से कम शाखाओं वाले विदेशी बैंकों के लिए प्राथमिकता क्षेत्र ऋण ANBC का कितना प्रतिशत है?", opts: ["32%", "36%", "40%", "50%"] },
            correct: 1
        },
        {
            en: { q: "The term 'Hot Money' in economics refers to:", opts: ["Black money", "Funds that move quickly between markets seeking highest return", "Counterfeit currency", "Emergency funds"] },
            hi: { q: "अर्थशास्त्र में 'Hot Money' शब्द का अर्थ है:", opts: ["काला धन", "वे धन जो उच्च रिटर्न की तलाश में बाज़ारों के बीच तेज़ी से घूमते हैं", "नकली मुद्रा", "आपातकालीन निधि"] },
            correct: 1
        },
        {
            en: { q: "Which of the following is the correct full form of CRAR?", opts: ["Capital to Risk-weighted Assets Ratio", "Credit Risk Asset Ratio", "Capital Reserves and Assets Ratio", "Central Risk Asset Regulation"] },
            hi: { q: "CRAR का सही पूर्ण रूप कौन सा है?", opts: ["Capital to Risk-weighted Assets Ratio", "Credit Risk Asset Ratio", "Capital Reserves and Assets Ratio", "Central Risk Asset Regulation"] },
            correct: 0
        },
        {
            en: { q: "Which bank was the first to launch mobile banking in India?", opts: ["ICICI Bank", "HDFC Bank", "SBI", "Axis Bank"] },
            hi: { q: "भारत में मोबाइल बैंकिंग शुरू करने वाला पहला बैंक कौन सा था?", opts: ["ICICI बैंक", "HDFC बैंक", "SBI", "Axis बैंक"] },
            correct: 0
        },
        {
            en: { q: "The headquarters of National Payments Corporation of India (NPCI) is in:", opts: ["New Delhi", "Chennai", "Mumbai", "Bengaluru"] },
            hi: { q: "National Payments Corporation of India (NPCI) का मुख्यालय कहाँ है?", opts: ["नई दिल्ली", "चेन्नई", "मुंबई", "बेंगलुरु"] },
            correct: 2
        }
    ]
};
