var JEE_DATA = {        
            marking: { correct: 4, wrong: -1, label: "+4 | -1" },	
            questions: [	
                {	
                    en: { q: "JEE Main: If the kinetic energy of a body becomes four times its initial value, its new momentum will become?", opts: ["Two Times", "Three Times", "Four Times", "Remains Unchanged"] },	
                    hi: { q: "JEE Main: यदि किसी पिंड की गतिज ऊर्जा उसके प्रारंभिक मान की चार गुनी हो जाती है, तो उसका नया संवेग कितना हो जाएगा?", opts: ["दो गुना", "तीन गुना", "चार गुना", "अपरिवर्तित रहेगा"] },	
                    correct: 0	
                },	
                	
            // --- १ ते ७५ प्रश्नांचा संच (JEE Main & Advanced - Last 10 Years) ---	
            {	
                en: { q: "Let $A$ and $B$ be two invertible matrices of order $3 \times 3$. If $\\det(A) = 2$ and $\\det(A^{-1}B) = 10$, then what is the value of $\\det(B)$?", opts: ["5", "20", "1/5", "2"] },	
                hi: { q: "माना $A$ तथा $B$, कोटी $3 \times 3$ के दो व्युत्क्रमणीय आव्यूह (Invertible matrices) हैं। यदि $\\det(A) = 2$ और $\\det(A^{-1}B) = 10$ है, तो $\\det(B)$ का मान क्या होगा?", opts: ["5", "20", "1/5", "2"] },	
                correct: 1	
            },	
            {	
                en: { q: "The absolute temperature of a gas is increased 3 times. What will be the increase in the root mean square (rms) velocity of the gas molecules?", opts: ["3 times", "9 times", "$\\sqrt{3}$ times", "1/3 times"] },	
                hi: { q: "एक गैस का परम ताप 3 गुना बढ़ा दिया जाता है। गैस के अणुओं के वर्ग माध्य मूल (rms) वेग में कितनी वृद्धि होगी?", opts: ["3 गुना", "9 गुना", "$\\sqrt{3}$ गुना", "1/3 गुना"] },	
                correct: 2	
            },	
            {	
                en: { q: "Which of the following organic compounds will give a positive Iodoform test upon treatment with $I_2$ and $NaOH$?", opts: ["Methanol", "Ethanol", "Benzaldehyde", "Diethyl ether"] },	
                hi: { q: "निम्नलिखित में से कौन सा कार्बनिक यौगिक $I_2$ और $NaOH$ के साथ उपचारित करने पर धनात्मक आयोडोफॉर्म परीक्षण (Iodoform test) देगा?", opts: ["मेथॉल", "एथेनॉल (Ethanol)", "बेन्जैल्डिहाइड", "डाईएथिल ईथर"] },	
                correct: 1	
            },	
            {	
                en: { q: "The value of $\\lim_{x \\to 0} \\frac{1 - \\cos 4x}{x^2}$ is equal to calculated numeric matrix parameter:", opts: ["2", "4", "8", "16"] },	
                hi: { q: "सीमा $\\lim_{x \\to 0} \\frac{1 - \\cos 4x}{x^2}$ का परिकलित मान किसके बराबर होगा?", opts: ["2", "4", "8 (Using L'Hopital or expansion)", "16"] },	
                correct: 2	
            },	
            {	
                en: { q: "A particle is moving in a circular path of radius $r$ with a constant speed $v$. What is the magnitude of average acceleration during a semi-circular displacement?", opts: ["Zero", "$v^2 / r$", "$2v^2 / \\pi r$", "$v^2 / \\pi r$"] },	
                hi: { q: "एक कण त्रिज्या $r$ के वृत्ताकार पथ पर नियत चाल $v$ से गति कर रहा है। अर्धवृत्ताकार विस्थापन के दौरान औसत त्वरण का परिमाण क्या होगा?", opts: ["शून्य", "$v^2 / r$", "$2v^2 / \\pi r$", "$v^2 / \\pi r$"] },	
                correct: 2	
            },	
            {	
                en: { q: "The order of basic strength of aliphatic amines in aqueous solution for methyl substituted groups is correctly mapped as:", opts: ["$CH_3NH_2 > (CH_3)_2NH > (CH_3)_3N > NH_3$", "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$", "$(CH_3)_3N > (CH_3)_2NH > CH_3NH_2 > NH_3$", "$NH_3 > CH_3NH_2 > (CH_3)_2NH > (CH_3)_3N$"] },	
                hi: { q: "जलीय विलयन में मेथिल प्रतिस्थापित एलिफैटिक एमीनों के क्षारीय सामर्थ्य का सही क्रम कौन सा है?", opts: ["$CH_3NH_2 > (CH_3)_2NH > (CH_3)_3N > NH_3$", "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary)", "$(CH_3)_3N > (CH_3)_2NH > CH_3NH_2 > NH_3$", "$NH_3 > CH_3NH_2 > (CH_3)_2NH > (CH_3)_3N$"] },	
                correct: 1	
            },	
            {	
                en: { q: "The number of real roots of the quadratic equation $e^{2x} - 4e^x + 3 = 0$ is exactly matching with:", opts: ["0", "1", "2", "Infinite"] },	
                hi: { q: "द्विघात समीकरण $e^{2x} - 4e^x + 3 = 0$ के वास्तविक मूलों (Real roots) की संख्या कितनी होगी?", opts: ["0", "1", "2 (Roots are x = 0 and x = ln 3)", "अनंत"] },	
                correct: 2	
            },	
            {	
                en: { q: "An electromagnetic wave propagation has a magnetic field vector given by $B = B_0 \\sin(kx - \\omega t)\\hat{j}$. The electric field vector configuration is represented by:", opts: ["$E = cB_0 \\sin(kx - \\omega t)\\hat{k}$", "$E = -cB_0 \\sin(kx - \\omega t)\\hat{k}$", "$E = cB_0 \\sin(kx - \\omega t)\\hat{i}$", "$E = -cB_0 \\sin(kx - \\omega t)\\hat{i}$"] },	
                hi: { q: "एक विद्युत चुंबकीय तरंग संचरण में चुंबकीय क्षेत्र वेक्टर $B = B_0 \\sin(kx - \\omega t)\\hat{j}$ द्वारा दिया गया है। विद्युत क्षेत्र वेक्टर ($E$) का विन्यास होगा:", opts: ["$E = cB_0 \\sin(kx - \\omega t)\\hat{k}$", "$E = -cB_0 \\sin(kx - \\omega t)\\hat{k}$", "$E = cB_0 \\sin(kx - \\omega t)\\hat{i}$", "$E = -cB_0 \\sin(kx - \\omega t)\\hat{i}$"] },	
                correct: 0	
            },	
            {	
                en: { q: "Which of the following d-block metal ions exhibits the highest spin-only magnetic moment calculated configuration?", opts: ["$Ti^{3+}$", "$V^{3+}$", "$Mn^{2+}$", "$Fe^{2+}$"] },	
                hi: { q: "निम्नलिखित में से कौन सा d-ब्लॉक धातु आयन उच्चतम केवल-प्रचक्रण चुंबकीय आघूर्ण (Spin-only magnetic moment) प्रदर्शित करता है?", opts: ["$Ti^{3+}$", "$V^{3+}$", "$Mn^{2+}$ (d5 high spin, 5 unpaired electrons)", "$Fe^{2+}$"] },	
                correct: 2	
            },	
            {	
                en: { q: "If the eccentricity of a standard hyperbola passing through the origin axis links satisfies $e = \\sqrt{2}$, then the geometry is classified as a:", opts: ["Rectangular hyperbola", "Parabolic limit template", "Conjugate ellipse axis row", "Skew circular orientation"] },	
                hi: { q: "यदि एक मानक अतिपरवलय (Hyperbola) की उत्केन्द्रता (Eccentricity) $e = \\sqrt{2}$ को संतुष्ट करती है, तो इस ज्यामिति को वर्गीकृत किया जाता है:", opts: ["समकोणीय अतिपरवलय (Rectangular hyperbola)", "परवलयिक सीमा टेम्पलेट", "संयुग्मी दीर्घवृत्त अक्ष पंक्ति", "विषम वृत्ताकार अभिविन्यास"] },	
                correct: 0	
            },	
            {	
                en: { q: "A parallel plate capacitor with air medium has capacitance $C$. When filled completely with a dielectric slab of dielectric constant $K=5$, the new storage potential scale changes by:", opts: ["Increases by 5 times", "Decreases by 5 times if isolated", "Remains absolutely constant", "Drops to zero index scale value"] },	
                hi: { q: "वायु माध्यम वाले एक समांतर पट्टिका संधारित्र की धारिता $C$ है। जब इसे परावैद्युतांक $K=5$ की पट्टी से पूरी तरह भर दिया जाता है, तो विलगित (Isolated) अवस्था में विभव:", opts: ["5 गुना बढ़ जाता है", "5 गुना कम हो जाता है (V = V0 / K)", "बिल्कुल स्थिर रहता है", "शून्य सूचकांक पैमाने पर गिर जाता है"] },	
                correct: 1	
            },	
            {	
                en: { q: "The structural monomer units required to compile the synthetic polymer chain layout known as Nylon-6,6 are:", opts: ["Caprolactam rows", "Adipic acid and Hexamethylene diamine", "Terephthalic acid and Ethylene glycol", "Styrene units exclusively"] },	
                hi: { q: "नायलॉन-6,6 (Nylon-6,6) कृत्रिम बहुलक श्रृंखला विन्यास को संकलित करने के लिए आवश्यक संरचनात्मक मोनोमर इकाइयाँ हैं:", opts: ["कैप्रोलैक्टम पंक्तियाँ", "एडिपिक अम्ल और हेक्सामेथिलीन डायमीन", "टेरेफ्थेलिक अम्ल और एथिलीन ग्लाइकोल", "विशेष रूप से स्टाइलिन इकाइयाँ"] },	
                correct: 1	
            },	
            {	
                en: { q: "The sum of the focal distances of any point on the ellipse $9x^2 + 25y^2 = 225$ is equal to which length metric?", opts: ["6", "10", "15", "34"] },	
                hi: { q: "दीर्घवृत्त $9x^2 + 25y^2 = 225$ पर स्थित किसी भी बिंदु की नाभीय दूरियों (Focal distances) का योग किस लंबाई के बराबर होता है?", opts: ["6", "10 (Sum of focal distances = 2a = 2 * 5 = 10)", "15", "34"] },	
                correct: 1	
            },	
            {	
                en: { q: "A radioactive isotope element sample track drops to $1/16$th of its primary original mass indicator after a period of 40 days. The half-life period is calculated as:", opts: ["5 days", "10 days", "20 days", "8 days"] },	
                hi: { q: "एक रेडियोधर्मी समस्थानिक तत्व का नमूना 40 दिनों की अवधि के बाद अपने मूल द्रव्यमान का $1/16$ भाग रह जाता है। अर्ध-आयु काल (Half-life) की गणना होगी:", opts: ["5 दिन", "10 दिन (4 half-lives = 40 days, so 1 half-life = 10 days)", "20 दिन", "8 दिन"] },	
                correct: 1	
            },	
            {	
                en: { q: "Which core interhalogen compound sequence maps the correct decreasing order of Lewis acid character trends?", opts: ["$IF_7 > IF_5 > IF_3$", "$IF_3 > IF_5 > IF_7$", "$IF_5 > IF_7 > IF_3$", "$IF_7 > IF_3 > IF_5$"] },	
                hi: { q: "कौन सा अंतर-हैलोजन यौगिक अनुक्रम लुईस अम्ल लक्षण प्रवृत्ति का सही घटता हुआ क्रम दर्शाता है?", opts: ["$IF_7 > IF_5 > IF_3$ (Higher oxidation state = Stronger Lewis acid)", "$IF_3 > IF_5 > IF_7$", "$IF_5 > IF_7 > IF_3$", "$IF_7 > IF_3 > IF_5$"] },	
                correct: 0	
            },	
            {	
                en: { q: "If $\\vec{a}$ and $\\vec{b}$ are two unit vectors such that $|\\vec{a} + \\vec{b}| = \\sqrt{3}$, then what is the scalar dot product value calculated for $(2\\vec{a} - 5\\vec{b}) \\cdot (3\\vec{a} + \\vec{b})$?", opts: ["-11.5", "-7.5", "1.5", "5.5"] },	
                hi: { q: "यदि $\\vec{a}$ तथा $\\vec{b}$ दो ऐसे मात्रक वेक्टर (Unit vectors) हैं कि $|\\vec{a} + \\vec{b}| = \\sqrt{3}$ है, तो $(2\\vec{a} - 5\\vec{b}) \\cdot (3\\vec{a} + \\vec{b})$ का अदिश गुणनफल (Dot product) क्या होगा?", opts: ["-11.5", "-7.5 (Since angle is 60 degrees, dot product yields -7.5)", "1.5", "5.5"] },	
                correct: 1	
            },	
            {	
                en: { q: "A thin uniform circular ring of mass $M$ and radius $R$ rotates about its central axis line perpendicular to plane. Its radius of gyration is:", opts: ["$R / 2$", "$R / \\sqrt{2}$", "$R$", "$2R$"] },	
                hi: { q: "द्रव्यमान $M$ और त्रिज्या $R$ की एक पतली समरूप वृत्ताकार वलय (Ring) अपने तल के लंबवत केंद्रीय अक्ष के परितः घूर्णन करती है। इसकी घूर्णन त्रिज्या (Radius of gyration) है:", opts: ["$R / 2$", "$R / \\sqrt{2}$", "$R$ (Since I = MR^2, k = R)", "$2R$"] },	
                correct: 2	
            },	
            {	
                en: { q: "The major product formed during the acid-catalyzed dehydration profile step belonging to 2-Methylbutanol is identified as:", opts: ["2-Methylbut-1-ene", "2-Methylbut-2-ene", "3-Methylbut-1-ene", "2-Methylbutan-2-ol"] },	
                hi: { q: "2-मेथिलब्यूटेनॉल के अम्ल-उत्प्रेरित निर्जलीकरण (Acid-catalyzed dehydration) प्रक्रम के दौरान बनने वाला मुख्य उत्पाद होगा:", opts: ["2-मेथिलब्यूट-1-ीन", "2-मेथिलब्यूट-2-ीन (Saytzeff rule product via carbocation rearrangement)", "3-मेथिलब्यूट-1-ीन", "2-मेथिलब्यूटेन-2-ऑल"] },	
                correct: 1	
            },	
            {	
                en: { q: "The total number of terms containing rational values inside the binomial expansion layout grid of $(x^{1/2} + y^{1/5})^{20}$ is computed as:", opts: ["2 terms", "3 terms", "5 terms", "21 terms"] },	
                hi: { q: "द्विपद प्रसार $(x^{1/2} + y^{1/5})^{20}$ के भीतर परिमेय मानों (Rational values) वाले पदों की कुल संख्या कितनी होगी?", opts: ["2 पद", "3 पद (Multiples of LCM of 2 and 5, i.e., 10 -> 0, 10, 20)", "5 पद", "21 पद"] },	
                correct: 1	
            },	
            {	
                en: { q: "The primary de Broglie wavelength parameter ($\\lambda$) associated with an electron accelerated through a voltage potential matrix $V$ volts is:", opts: ["$\\lambda = 12.27 / \\sqrt{V}$ Å", "$\\lambda = 1.227 / \\sqrt{V}$ Å", "$\\lambda = 122.7 / V$ Å", "$\\lambda = 0.1227 / \\sqrt{V}$ Å"] },	
                hi: { q: "एक $V$ वोल्ट के विभवांतर मैट्रिक्स द्वारा त्वरित इलेक्ट्रॉन से संबद्ध प्राथमिक डी ब्रोग्ली तरंगदैर्ध्य ($\\lambda$) सूत्र द्वारा दी जाती है:", opts: ["$\\lambda = 12.27 / \\sqrt{V}$ Å (Standard electron wavelength relation)", "$\\lambda = 1.227 / \\sqrt{V}$ Å", "$\\lambda = 122.7 / V$ Å", "$\\lambda = 0.1227 / \\sqrt{V}$ Å"] },	
                correct: 0	
            },	
            {	
                en: { q: "Which crystalline solid configuration maps a classic example of a network covalent lattice structure matrix layout?", opts: ["$NaCl$", "$I_2$", "Silicon Carbide ($SiC$)", "$H_2O$ ice grids"] },	
                hi: { q: "कौन सा क्रिस्टलीय ठोस एक नेटवर्क सहसंयोजक जालक संरचना (Network covalent lattice) का उत्कृष्ट उदाहरण है?", opts: ["$NaCl$", "$I_2$", "सिलिकॉन कार्बाइड ($SiC$ / Carborundum)", "$H_2O$ बर्फ ग्रिड"] },	
                correct: 2	
            },	
            {	
                en: { q: "If a line makes angles $\\alpha, \\beta, \\gamma$ with the positive coordinate axes, then the value of $\\sin^2 \\alpha + \\sin^2 \\beta + \\sin^2 \\gamma$ matches:", opts: ["1", "2", "1.5", "0"] },	
                hi: { q: "यदि एक रेखा धनात्मक निर्देशांक अक्षों के साथ $\\alpha, \\beta, \\gamma$ कोण बनाती है, तो $\\sin^2 \\alpha + \\sin^2 \\beta + \\sin^2 \\gamma$ का मान होगा:", opts: ["1", "2 (Using cos^2 a + cos^2 b + cos^2 c = 1)", "1.5", "0"] },	
                correct: 1	
            },	
            {	
                en: { q: "The work done during an isothermal reversible expansion process of an ideal gas inside an enclosure system is mathematically quantified by:", opts: ["$W = -P\\Delta V$", "$W = -2.303 nRT \\log(V_2 / V_1)$", "$W = \\Delta U$", "$W = 0$"] },	
                hi: { q: "एक बंद प्रणाली के भीतर एक आदर्श गैस के समतापीय उत्क्रमणीय प्रसार (Isothermal reversible expansion) के दौरान किए गए कार्य का सूत्र है:", opts: ["$W = -P\\Delta V$", "$W = -2.303 nRT \\log(V_2 / V_1)$ (Isothermal reversible work equation)", "$W = \\Delta U$", "$W = 0$"] },	
                correct: 1	
            },	
            {	
                en: { q: "A vertical spring-mass system oscillates with period $T$. If the spring is cut into two equal halves and linked in parallel layout, the new period is:", opts: ["$T / 2$", "$T / \\sqrt{2}$", "$2T$", "$T$"] },	
                hi: { q: "एक ऊर्ध्वाधर स्प्रिंग-द्रव्यमान निकाय आवर्तकाल $T$ से दोलन करता है। यदि स्प्रिंग को दो बराबर भागों में काटकर समांतर क्रम में जोड़ा जाए, तो नया आवर्तकाल होगा:", opts: ["$T / 2$ (Each half has 2k, parallel makes 4k, so period becomes T/2)", "$T / \\sqrt{2}$", "$2T$", "$T$"] },	
                correct: 0	
            },	
            {	
                en: { q: "Which crystal field splitting parameters configuration identifies a coordination complex that is completely diamagnetic in nature?", opts: ["Low-spin d6 Octahedral layout", "High-spin d5 Octahedral profile", "High-spin d4 Tetrahedral format", "Low-spin d7 profile rows"] },	
                hi: { q: "कौन सा क्रिस्टल क्षेत्र विपाटन पैरामीटर विन्यास एक ऐसे उपसहसंयोजन संकुल की पहचान करता है जो पूर्णतः प्रतिचुंबकीय (Diamagnetic) प्रकृति का है?", opts: ["निम्न-प्रचक्रण d6 अष्टफलकीय विन्यास (t2g6 eg0, all electrons paired)", "उच्च-प्रचक्रण d5 अष्टफलकीय प्रोफाइल", "उच्च-प्रचक्रण d4 चतुष्फलकीय प्रारूप", "निम्न-प्रचक्रण d7 प्रोफाइल पंक्तियाँ"] },	
                correct: 0	
            },	
            {	
                en: { q: "The area of the region bounded by the curve $y^2 = 4x$ and the line $y = 2x$ is calculated as:", opts: ["1/3", "1/6", "2/3", "1"] },	
                hi: { q: "वक्र $y^2 = 4x$ तथा रेखा $y = 2x$ द्वारा घिरे क्षेत्र का परिकलित क्षेत्रफल कितना होगा?", opts: ["1/3", "1/6 (Integrating from x = 0 to 1 yields 1/6)", "2/3", "1"] },	
                correct: 1	
            },	
            {	
                en: { q: "The magnetic flux linking a closed loop track varies with time according to $\\Phi = 6t^2 - 5t + 1$. The induced EMF value at $t = 2$ seconds is:", opts: ["12 V", "19 V", "-19 V", "-24 V"] },	
                hi: { q: "एक बंद लूप ट्रैक से संबद्ध चुंबकीय फ्लक्स समय के साथ $\\Phi = 6t^2 - 5t + 1$ के अनुसार बदलता है। $t = 2$ सेकंड पर प्रेरित विद्युत वाहक बल (EMF) का परिमाण होगा:", opts: ["12 V", "19 V (dF/dt = 12t - 5; at t=2, 24-5 = 19 V)", "-19 V", "-24 V"] },	
                correct: 1	
            },	
            {	
                en: { q: "The structure containing the highest number of alpha-hydrogen units available to perform hyperconjugation stabilization is:", opts: ["But-1-ene", "trans-But-2-ene", "2-Methylbut-2-ene", "2,3-Dimethylbut-2-ene"] },	
                hi: { q: "अतिसंयुग्मन स्थिरीकरण (Hyperconjugation) प्रदर्शित करने के लिए उपलब्ध अल्फा-हाइड्रोजन इकाइयों की अधिकतम संख्या किस संरचना में है?", opts: ["ब्यूट-1-ीन", "ट्रांस-ब्यूट-2-ीन", "2-मेथिलब्यूट-2-ीन", "2,3-डाईमेथिलब्यूट-2-ीन (Contains 12 alpha hydrogens)"] },	
                correct: 3	
            },	
            {	
                en: { q: "If the system of linear equations $x + y + z = 2$, $2x + 3y + 2z = 5$, $2x + 3y + (a^2-1)z = a+1$ has infinitely many solutions, then:", opts: ["a = 3", "a = -3", "a = \\sqrt{3}", "a = -\\sqrt{3}"] },	
                hi: { q: "यदि रैखिक समीकरण निकाय $x + y + z = 2$, $2x + 3y + 2z = 5$, $2x + 3y + (a^2-1)z = a+1$ के अनंत समाधान (Infinitely many solutions) हैं, तो:", opts: ["a = 3", "a = -3", "a = \\sqrt{3} (a^2 - 1 = 2 implies a^2 = 3)", "a = -\\sqrt{3}"] },	
                correct: 2	
            },	
            {	
                en: { q: "A sound wave source moves towards a stationary observer with velocity $v_s = 0.2v$ (where $v$ is sound velocity). The ratio of apparent to true frequency is:", opts: ["5 / 4", "4 / 5", "1.2", "0.8"] },	
                hi: { q: "एक ध्वनि तरंग स्रोत एक स्थिर प्रेक्षक की ओर वेग $v_s = 0.2v$ (जहाँ $v$ ध्वनि का वेग है) से गति कर रहा है। आभासी आवृत्ति का वास्तविक आवृत्ति से अनुपात होगा:", opts: ["5 / 4 (f' = f * [v / (v - 0.2v)] = f * 5/4)", "4 / 5", "1.2", "0.8"] },	
                correct: 0	
            },	
            {	
                en: { q: "The rate constant equation coefficient mapping a zero-order chemical kinetics reaction format holds physical units matching:", opts: ["s-1", "mol L-1 s-1", "L mol-1 s-1", "L2 mol-2 s-1"] },	
                hi: { q: "एक शून्य-कोटि (Zero-order) की रासायनिक बलगतिकी अभिक्रिया प्रारूप के दर स्थिरांक की भौतिक इकाई क्या होती है?", opts: ["s-1", "mol L-1 s-1 (Same units as reaction rate)", "L mol-1 s-1", "L2 mol-2 s-1"] },	
                correct: 1	
            },	
            {	
                en: { q: "The vector equation representing a plane passing through three non-collinear layout positioning coordinate points $\\vec{a}, \\vec{b}, \\vec{c}$ is governed by:", opts: ["$(\\vec{r} - \\vec{a}) \\cdot [(\\vec{b} - \\vec{a}) \\times (\\vec{c} - \\vec{a})] = 0$", "$(\\vec{r} - \\vec{a}) \\times [(\\vec{b} - \\vec{a}) \\cdot (\\vec{c} - \\vec{a})] = 0$", "$\\vec{r} \\cdot (\\vec{a} \\times \\vec{b}) = \\vec{c}$", "$(\\vec{r} \\cdot \\vec{a}) + (\\vec{r} \\cdot \\vec{b}) = \\vec{c}$"] },	
                hi: { q: "तीन संरेखहीन (Non-collinear) स्थिति निर्देशांक बिंदुओं $\\vec{a}, \\vec{b}, \\vec{c}$ से गुजरने वाले समतल का वेक्टर समीकरण किसके द्वारा नियंत्रित होता है?", opts: ["$(\\vec{r} - \\vec{a}) \\cdot [(\\vec{b} - \\vec{a}) \\times (\\vec{c} - \\vec{a})] = 0$ (Standard coplanar vector plane format)", "$(\\vec{r} - \\vec{a}) \\times [(\\vec{b} - \\vec{a}) \\cdot (\\vec{c} - \\vec{a})] = 0$", "$\\vec{r} \\cdot (\\vec{a} \\times \\vec{b}) = \\vec{c}$", "$(\\vec{r} \\cdot \\vec{a}) + (\\vec{r} \\cdot \\vec{b}) = \\vec{c}$"] },	
                correct: 0	
            },	
            {	
                en: { q: "A particle executes simple harmonic motion (SHM) with amplitude $A$. At what displacement value from equilibrium does kinetic energy equal potential energy?", opts: ["x = A / 2", "x = A / \\sqrt{2}", "x = A / 2\\sqrt{2}", "x = A \\sqrt{3}/2"] },	
                hi: { q: "एक कण आयाम $A$ के साथ सरल आवर्त गति (SHM) कर रहा है। साम्यावस्था से किस विस्थापन मान पर गतिज ऊर्जा और स्थितिज ऊर्जा बराबर होती हैं?", opts: ["x = A / 2", "x = A / \\sqrt{2} (KE = PE at x = A/sqrt(2))", "x = A / 2\\sqrt{2}", "x = A \\sqrt{3}/2"] },	
                correct: 1	
            },	
            {	
                en: { q: "The chemical synthesis path that yields a primary aromatic amine via degrading an un-substituted amide intermediate using bromine and $KOH$ is:", opts: ["Hoffmann bromamide degradation", "Gabriel phthalimide synthesis", "Stephen nitrile profile route", "Cannizzaro reaction framework"] },	
                hi: { q: "ब्रोमीन और $KOH$ का उपयोग करके एक एमाइड मध्यवर्ती को प्राथमिक एरोमैटिक एमीन में बदलने वाला रासायनिक प्रक्रम कहलाता है:", opts: ["हाफमान ब्रोमामाइड निम्नीकरण (Hoffmann bromamide degradation)", "गेब्रियल थैलिमाइड संश्लेषण", "स्टीफन नाइट्राइल प्रोफाइल मार्ग", "कैनिज़ारो अभिक्रिया ढांचा"] },	
                correct: 0	
            },	
            {	
                en: { q: "The variance computed for the first $n$ natural numbers series layout can be evaluated via which formula configuration?", opts: ["(n^2 - 1) / 12", "(n^2 + 1) / 12", "(n - 1)^2 / 12", "(2n^2 - 1) / 6"] },	
                hi: { q: "प्रथम $n$ प्राकृत संख्याओं की श्रृंखला के लिए परिकलित प्रसरण (Variance) का सही सूत्र क्या होता है?", opts: ["(n^2 - 1) / 12 (Standard variance of first n natural numbers)", "(n^2 + 1) / 12", "(n - 1)^2 / 12", "(2n^2 - 1) / 6"] },	
                correct: 0	
            },	
            {	
                en: { q: "An unpolarized light beam of intensity $I_0$ passes through two polaroids aligned such that their transmission axes intersect at an angle $\\theta = 45^{\\circ}$. The output intensity is:", opts: ["$I_0 / 2$", "$I_0 / 4$", "$I_0 / 8$", "$3I_0 / 4$"] },	
                hi: { q: "तीव्रता $I_0$ का एक अध्रुवित प्रकाश किरण पुंज दो पोलरॉइडों से गुजरता है जिनके संचरण अक्ष $\\theta = 45^{\\circ}$ के कोण पर प्रतिच्छेद करते हैं। निर्गत प्रकाश की तीव्रता होगी:", opts: ["$I_0 / 2$", "$I_0 / 4$ (Using Malus Law: I0/2 * cos^2(45) = I0/4)", "$I_0 / 8$", "$3I_0 / 4$"] },	
                correct: 1	
            },	
            {	
                en: { q: "Which of the following oxoacids of Phosphorus contains a direct, distinctive covalent P-P linkage footprint inside its structural layout?", opts: ["Orthophosphoric acid", "Pyrophosphoric acid", "Hypophosphoric acid", "Metaphosphoric acid"] },	
                hi: { q: "फास्फोरस के निम्नलिखित ऑक्सोअम्लों में से किसमें एक प्रत्यक्ष, विशिष्ट सहसंयोजक P-P आबंध उपस्थित होता है?", opts: ["आर्थोफॉस्फोरिक अम्ल", "पायरोफॉस्फोरिक अम्ल", "हाइपोफॉस्फोरिक अम्ल ($H_4P_2O_6$ contains a P-P bond)", "मेटाफॉस्फोरिक अम्ल"] },	
                correct: 2	
            },	
            {	
                en: { q: "The value of the definite integral $\\int_{0}^{\\pi/2} \\frac{\\sin^{3/2}x}{\\sin^{3/2}x + \\cos^{3/2}x} dx$ is evaluated as:", opts: ["\\pi", "\\pi / 2", "\\pi / 4", "0"] },	
                hi: { q: "निश्चित समाकलन $\\int_{0}^{\\pi/2} \\frac{\\sin^{3/2}x}{\\sin^{3/2}x + \\cos^{3/2}x} dx$ का परिकलित मान क्या होगा?", opts: ["\\pi", "\\pi / 2", "\\pi / 4 (Using King's property: (b-a)/2 = pi/4)", "0"] },	
                correct: 2	
            },	
            {	
                en: { q: "A carnot heat engine working between temperature limits $T_1 = 600$ K and $T_2 = 300$ K has a calculated thermodynamic efficiency rating of:", opts: ["25 %", "50 %", "75 %", "100 %"] },	
                hi: { q: "तापमान सीमाओं $T_1 = 600$ K और $T_2 = 300$ K के बीच काम करने वाले कार्नोट ऊष्मा इंजन की परिकलित ऊष्मागतिकी दक्षता (Efficiency) क्या होगी?", opts: ["25 %", "50 % (Efficiency = 1 - 300/600 = 0.50)", "75 %", "100 %"] },	
                correct: 1	
            },	
            {	
                en: { q: "The chemical compound tracking format that functions as a highly volatile primary starting reagent layout for a standard Etard reaction sequence is:", opts: ["Benzene ring lines", "Toluene configuration layout", "Chlorobenzene compound", "Aniline amine structural matrix"] },	
                hi: { q: "एक मानक एिटार्ड अभिक्रिया अनुक्रम (Etard reaction) के लिए प्राथमिक प्रारंभिक अभिकर्मक के रूप में कार्य करने वाला यौगिक कौन सा है?", opts: ["बेंजीन वलय लाइनें", "टॉल्यूईन विन्यास (Toluene is oxidized to benzaldehyde via CrO2Cl2)", "क्लोरोबेंजीन यौगिक", "एनीलीन एमीन संरचनात्मक मैट्रिक्स"] },	
                correct: 1	
            },	
            {	
                en: { q: "If the complex number $z$ satisfies the constraint relationship $|z - 3i| = |z + 3i|$, then the locus of $z$ inside the complex plane tracks along:", opts: ["The real axis line", "The imaginary axis pathway", "A circle of radius 3 units", "A parabolic trajectory curve"] },	
                hi: { q: "यदि सम्मिश्र संख्या (Complex number) $z$ संबंध $|z - 3i| = |z + 3i|$ को संतुष्ट करती है, तो सम्मिश्र तल में $z$ का बिंदुथप (Locus) होगा:", opts: ["वास्तविक अक्ष रेखा (The Real Axis / x-axis)", "काल्पनिक अक्ष मार्ग", "3 इकाई त्रिज्या का एक वृत्त", "एक परवलयिक प्रक्षेपवक्र वक्र"] },	
                correct: 0	
            },	
            {	
                en: { q: "Two wires of identical material and length parameters have a diameter scaling ratio of 1:2. If stretched via equal force, elongation ratio matches:", opts: ["1 : 2", "2 : 1", "1 : 4", "4 : 1"] },	
                hi: { q: "समान पदार्थ और लंबाई के दो तारों के व्यासों का अनुपात 1:2 है। यदि इन्हें समान बल से खींचा जाए, तो उनकी लंबाई में वृद्धि का अनुपात होगा:", opts: ["1 : 2", "2 : 1", "1 : 4", "4 : 1 (Elongation is inversely proportional to square of diameter)"] },	
                correct: 3	
            },	
            {	
                en: { q: "According to molecular orbital theory metrics, which homonuclear diatomic species shows a formal calculated bond order index equal to zero?", opts: ["$Li_2$", "$Be_2$", "$B_2$", "$C_2$"] },	
                hi: { q: "आणविक कक्षक सिद्धांत (MOT) के अनुसार, किस समनाभिकीय द्विपरमाणुक प्रजाति का परिकलित आबंध कोटि (Bond order) मान शून्य होता है?", opts: ["$Li_2$", "$Be_2$ (Be2 has total 8 electrons, bond order = 0)", "$B_2$", "$C_2$"] },	
                correct: 1	
            },	
            {	
                en: { q: "The solution layout calculated for the differential equation configuration $\\frac{dy}{dx} + \\frac{y}{x} = x^2$ matches which option profile?", opts: ["$xy = \\frac{x^4}{4} + C$", "$y = x^3 + Cx$", "$xy = x^3 + C$", "$y = \\frac{x^4}{4} + C$"] },	
                hi: { q: "अवकल समीकरण $\\frac{dy}{dx} + \\frac{y}{x} = x^2$ का परिकलित हल विन्यास कौन सा विकल्प प्रदर्शित करता है?", opts: ["$xy = \\frac{x^4}{4} + C$ (Integrating factor is x, so d(xy)/dx = x^3)", "$y = x^3 + Cx$", "$xy = x^3 + C$", "$y = \\frac{x^4}{4} + C$"] },	
                correct: 0	
            },	
            {	
                en: { q: "An alternating current circuit grid has an inductor $L$ and resistor $R$ linked in series. The power factor matrix ($\cos \\phi$) is given by:", opts: ["$R / \\omega L$", "$R / \\sqrt{R^2 + \\omega^2L^2}$", "$\\omega L / R$", "$\\sqrt{R^2 + \\omega^2L^2} / R$"] },	
                hi: { q: "एक प्रत्यावर्ती धारा (AC) परिपथ में एक प्रेरक $L$ और प्रतिरोधक $R$ श्रेणीक्रम में जुड़े हैं। परिपथ का शक्ति गुणांक ($\cos \\phi$) किसके द्वारा व्यक्त होता है?", opts: ["$R / \\omega L$", "$R / \\sqrt{R^2 + \\omega^2L^2}$ (Power factor cos phi = R / Z)", "$\\omega L / R$", "$\\sqrt{R^2 + \\omega^2L^2} / R$"] },	
                correct: 1	
            },	
            {	
                en: { q: "The synthesis process of preparing high-value fluorobenzene compounds via heating diazonium fluoroborate salts intermediate layouts is named:", opts: ["Schiemann reaction", "Gattermann substitution format", "Sandmeyer coupling process", "Finkelstein halogen exchange path"] },	
                hi: { q: "डायजोनियम फ्लोरोबोरेट लवण मध्यवर्ती को गर्म करके फ्लोरोबेंजीन तैयार करने का प्रक्रम कहलाता है:", opts: ["बाल्ज-शामैन अभिक्रिया (Balz-Schiemann reaction)", "गाटरमान प्रतिस्थापन प्रारूप", "सैंडमेयर युग्मन प्रक्रम", "फिंकेलस्टीन हैलोजन विनिमय पथ"] },	
                correct: 0	
            },	
            {	
                en: { q: "If the vectors $\\vec{a} = 2\\hat{i} - \\hat{j} + \\hat{k}$, $\\vec{b} = \\hat{i} + 2\\hat{j} - 3\\hat{k}$ and $\\vec{c} = 3\\hat{i} + a\\hat{j} + 5\\hat{k}$ are coplanar lines, then $a$ equals:", opts: ["-2", "-4", "2", "4"] },	
                hi: { q: "यदि वेक्टर $\\vec{a} = 2\\hat{i} - \\hat{j} + \\hat{k}$, $\\vec{b} = \\hat{i} + 2\\hat{j} - 3\\hat{k}$ तथा $\\vec{c} = 3\\hat{i} + a\\hat{j} + 5\\hat{k}$ समतलीय (Coplanar) हैं, तो $a$ का मान है:", opts: ["-2", "-4 (Setting scalar triple product determinant to 0 yields a = -4)", "2", "4"] },	
                correct: 1	
            },	
            {	
                en: { q: "A target focal distance lens profile of concave configuration showing focal length $f$ is sliced cleanly into two equal symmetrical halves along axis line. The new halves show:", opts: ["Focal length $f/2$", "Focal length $f$", "Focal length $2f$", "Infinite focal state metric"] },	
                hi: { q: "एक अवतल या उत्तल लेंस (focal length $f$) को मुख्य अक्ष के अनुदिश दो समान सममित भागों में काटा जाता है। प्रत्येक नए कटे हुए भाग की फोकस दूरी होगी:", opts: ["फोकस दूरी $f/2$", "फोकस दूरी $f$ (Cutting along principal axis does not change curvature radius)", "फोकस दूरी $2f$", "अनंत फोकस स्थिति मीट्रिक"] },	
                correct: 1	
            },	
            {	
                en: { q: "The coagulation power of an electrolyte matrix evaluated for a positive ferric hydroxide sol configuration shows the highest velocity with:", opts: ["$NaCl$", "$Na_2SO_4$", "$Na_3PO_4$", "$K_4[Fe(CN)_6]$"] },	
                hi: { q: "धनात्मक फेरिक हाइड्रॉक्साइड सॉल (Positive sol) के लिए किस विद्युत अपघट्य मैट्रिक्स की स्कंदन शक्ति (Coagulation power) उच्चतम होगी?", opts: ["$NaCl$", "$Na_2SO_4$", "$Na_3PO_4$", "$K_4[Fe(CN)_6]$ (Hardy-Schulze rule: higher negative charge anion causes max coagulation)"] },	
                correct: 3	
            },	
            {	
                en: { q: "The shortest distance tracking path metric computed between the two skew lines $\\vec{r} = \\vec{a}_1 + \\lambda \\vec{b}_1$ and $\\vec{r} = \\vec{a}_2 + \\mu \\vec{b}_2$ matches:", opts: ["$|\\frac{(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{b}_1 \\times \\vec{b}_2)}{|\\vec{b}_1 \\times \\vec{b}_2|}|$", "$|\\frac{(\\vec{a}_2 - \\vec{a}_1) \\times (\\vec{b}_1 \\cdot \\vec{b}_2)}{|\\vec{b}_1 \\cdot \\vec{b}_2|}|$", "$|(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{b}_1 + \\vec{b}_2)|$", "Zero constant magnitude values"] },	
                hi: { q: "दो विषमरेखीय रेखाओं (Skew lines) $\\vec{r} = \\vec{a}_1 + \\lambda \\vec{b}_1$ तथा $\\vec{r} = \\vec{a}_2 + \\mu \\vec{b}_2$ के बीच की न्यूनतम दूरी का सही सूत्र क्या है?", opts: ["$|\\frac{(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{b}_1 \\times \\vec{b}_2)}{|\\vec{b}_1 \\times \\vec{b}_2|}|$ (Standard shortest distance formula)", "$|\\frac{(\\vec{a}_2 - \\vec{a}_1) \\times (\\vec{b}_1 \\cdot \\vec{b}_2)}{|\\vec{b}_1 \\cdot \\vec{b}_2|}|$", "$|(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{b}_1 + \\vec{b}_2)|$", "शून्य नियत परिमाण मान"] },	
                correct: 0	
            },	
            {	
                en: { q: "A galvanometer showing internal resistance wire rating $G$ is converted into an ammeter scaling interface via linking a shunt resistance $S$ in:", opts: ["Series configuration", "Parallel configuration", "Bridge architecture layout", "Open tracking junction style"] },	
                hi: { q: "आंतरिक प्रतिरोध $G$ वाले एक गैल्वेनोमीटर को शंट प्रतिरोध $S$ जोड़कर एक एमीटर (Ammeter) में बदला जाता है। यह शंट जुड़ा होना चाहिए:", opts: ["श्रेणीक्रम विन्यास में", "समांतर क्रम विन्यास में (Low resistance shunt connected in parallel)", "ब्रिज आर्किटेक्चर लेआउट में", "ओपन ट्रैकिंग जंक्शन शैली में"] },	
                correct: 1	
            },	
            {	
                en: { q: "Which chemical molecule configuration demonstrates perfect zero dipole moment calculation indices despite having polar bonds?", opts: ["$H_2O$", "$NH_3$", "Carbon tetrachloride ($CCl_4$)", "$CHCl_3$"] },	
                hi: { q: "कौन सा रासायनिक अणु ध्रुवीय आबंध (Polar bonds) होने के बावजूद पूर्ण शून्य द्विध्रुव आघूर्ण (Zero dipole moment) प्रदर्शित करता है?", opts: ["$H_2O$", "$NH_3$", "कार्बन टेट्राक्लोराइड ($CCl_4$ / Symmetrical tetrahedral cancellation)", "$CHCl_3$"] },	
                correct: 2	
            },	
            {	
                en: { q: "If the probability of hitting a target sample track configuration is $1/4$ across single tries, what is the probability of hitting it at least once in 3 trials?", opts: ["1/64", "3/4", "37/64", "27/64"] },	
                hi: { q: "यदि एकल प्रयास में किसी लक्ष्य को भेदने की प्रायिकता $1/4$ है, तो 3 प्रयासों में कम से कम एक बार लक्ष्य भेदने की प्रायिकता क्या होगी?", opts: ["1/64", "3/4", "37/64 (1 - P(none hits) = 1 - (3/4)^3 = 1 - 27/64 = 37/64)", "27/64"] },	
                correct: 2	
            },	
            {	
                en: { q: "A physical system thermal conduction loop transitions from gas phase state criteria directly into a solid state footprint via:", opts: ["Sublimation process lines", "Deposition pathway sequence", "Condensation vector changes", "Fusion thermodynamic parameters"] },	
                hi: { q: "एक भौतिक प्रणाली का गैसीय अवस्था से सीधे ठोस अवस्था में होने वाला रूपांतरण क्या कहलाता है?", opts: ["ऊर्ध्वपातन (Sublimation)", "निक्षेपण (Deposition)", "संघनन वेक्टर परिवर्तन", "गलन ऊष्मागतिकी पैरामीटर"] },	
                correct: 1	
            },	
            {	
                en: { q: "The chemical substance created when a primary alcohol starting chain layout is treated with Pyridinium Chlorochromate ($PCC$) reagent is:", opts: ["Aliphatic carboxylic acid", "Aldehydes profile template", "Ketone group configurations", "Ester macro-molecular grid"] },	
                hi: { q: "जब एक प्राथमिक अल्कोहल को पिरिडिनियम क्लोरोक्रोमेट ($PCC$) अभिकर्मक के साथ अभिकृत किया जाता है, तो बनने वाला मुख्य उत्पाद है:", opts: ["एलिफैटिक कार्बोक्सिलिक अम्ल", "एल्डिहाइड (Aldehydes - selective oxidation without moving to acid)", "कीटोन समूह विन्यास", "एस्टर मैक्रो-आणविक ग्रिड"] },	
                correct: 1	
            },	
            {	
                en: { q: "The general solution computed for the trigonometric equation format $\\tan^2 x = 1$ maps across coordinate indices grid via:", opts: ["$x = n\\pi \\pm \\pi/4$", "$x = n\\pi + \\pi/4$", "$x = 2n\\pi \\pm \\pi/4$", "$x = n\\pi \\pm \\pi/2$"] },	
                hi: { q: "त्रिकोणमितीय समीकरण $\\tan^2 x = 1$ का व्यापक हल (General solution) क्या होता है?", opts: ["$x = n\\pi \\pm \\pi/4$ (Standard general form for squared tan equation)", "$x = n\\pi + \\pi/4$", "$x = 2n\\pi \\pm \\pi/4$", "$x = n\\pi \\pm \\pi/2$"] },	
                correct: 0	
            },	
            {	
                en: { q: "A circular wire loop carrying current $I$ creates a magnetic field $B$ at its center. If radius parameter is doubled, the new center field index is:", opts: ["$2B$", "$B$", "$B / 2$", "$B / 4$"] },	
                hi: { q: "धारा $I$ वाला एक वृत्ताकार तार लूप अपने केंद्र पर चुंबकीय क्षेत्र $B$ उत्पन्न करता है। यदि त्रिज्या दोगुनी कर दी जाए, तो नया केंद्र क्षेत्र होगा:", opts: ["$2B$", "$B$", "$B / 2$ (B is inversely proportional to radius R)", "$B / 4$"] },	
                correct: 2	
            },	
            {	
                en: { q: "Which core parameter defines an azeotropic liquid mixture configuration showcasing a minimum boiling point profile?", opts: ["Positive deviation from Raoult's Law parameters", "Negative deviation from Raoult's Law grids", "Ideal solution thermodynamics rules alignment", "Exothermic enthalpy change of mixing tracks"] },	
                hi: { q: "कौन सा मुख्य मापदंड न्यूनतम क्वथनांक स्थिरक्वाथी (Minimum boiling azeotrope) द्रव मिश्रण विन्यास को परिभाषित करता है?", opts: ["राउल्ट के नियम से धनात्मक विचलन (Minimum boiling point = Positive deviation)", "राउल्ट के नियम से ऋणात्मक विचलन", "आदर्श विलयन ऊष्मागतिकी संरेखण", "मिश्रण का ऊष्माक्षेपी एन्थैल्पी परिवर्तन"] },	
                correct: 0	
            },	
            {	
                en: { q: "If $\\int \\frac{dx}{x^2 + 4x + 13} = A \\tan^{-1}(\\frac{x+2}{B}) + C$, then the scalar numeric metrics parameter matching $(A, B)$ maps to:", opts: ["(1/3, 3)", "(3, 1/3)", "(1/2, 2)", "(2, 1/2)"] },	
                hi: { q: "यदि $\\int \\frac{dx}{x^2 + 4x + 13} = A \\tan^{-1}(\\frac{x+2}{B}) + C$ है, तो अदिश संख्यात्मक पैरामीटर युग्म $(A, B)$ का मान होगा:", opts: ["(1/3, 3) (Completing the square yields (x+2)^2 + 3^2, leading to A=1/3, B=3)", "(3, 1/3)", "(1/2, 2)", "(2, 1/2)"] },	
                correct: 0	
            },	
            {	
                en: { q: "The work-function threshold energy belonging to a photoelectric sodium metal sheet layout is 2.3 eV. If hit by a photon of 4.0 eV, max KE matches:", opts: ["1.7 eV", "6.3 eV", "2.3 eV", "0.0 eV"] },	
                hi: { q: "एक सोडियम धातु की शीट का कार्य-फलन (Work-function) 2.3 eV है। यदि इस पर 4.0 eV का फोटॉन आपतित होता है, तो उत्सर्जित इलेक्ट्रॉन की अधिकतम गतिज ऊर्जा होगी:", opts: ["1.7 eV (Max KE = hnu - phi = 4.0 - 2.3 = 1.7 eV)", "6.3 eV", "2.3 eV", "0.0 eV"] },	
                correct: 0	
            },	
            {	
                en: { q: "The structural conformation model belonging to cyclohexane layout rings which registers the absolute minimum internal torsional strain energy is:", opts: ["Boat conformation rows", "Chair conformation orientation", "Twist boat lattice rows", "Half-chair stress format"] },	
                hi: { q: "साइक्लोहेक्सेन वलय का कौन सा संरूपण मॉडल (Conformation model) पूर्ण न्यूनतम आंतरिक मरोड़ी तनाव ऊर्जा (Torsional strain) प्रदर्शित करता है?", opts: ["नौका संरूपण (Boat)", "कुर्सी संरूपण (Chair conformation - most stable)", "मरोड़ी नौका जालक", "अर्ध-कुर्सी तनाव प्रारूप"] },	
                correct: 1	
            },	
            {	
                en: { q: "The value of $\\int_{-1}^{1} |x| dx$ is evaluated across definite boundary calculus metrics as:", opts: ["0", "1", "2", "1/2"] },	
                hi: { q: "निश्चित समाकलन $\\int_{-1}^{1} |x| dx$ का परिकलित मान क्या होगा?", opts: ["0", "1 (Evaluating two symmetrical triangles area 2 * (1/2 * 1 * 1) = 1)", "2", "1/2"] },	
                correct: 1	
            },	
            {	
                en: { q: "A standard step-up transformer conversion unit operates across input voltage lines of 110 V to transition output grids to 220 V. If secondary turns count matches 200, primary count is:", opts: ["100", "400", "50", "300"] },	
                hi: { q: "एक मानक उच्चायी ट्रांसफार्मर (Step-up transformer) 110 V की इनपुट लाइन को 220 V आउटपुट में बदलता है। यदि द्वितीयक कुंडली में 200 फेरे हैं, तो प्राथमिक कुंडली में फेरों की संख्या होगी:", opts: ["100 (Np/Ns = Vp/Vs implies Np/200 = 110/220)", "400", "50", "300"] },	
                correct: 0	
            },	
            {	
                en: { q: "Which chemical reagent format converts an aliphatic nitrile structure directly into a corresponding aldehyde via a selective partial reduction pathway?", opts: ["$LiAlH_4$ matrix core", "$DIBAL-H$ solution layout", "$NaBH_4$ reduction lines", "Zinc amalgam with concentrated $HCl$"] },	
                hi: { q: "कौन सा रासायनिक अभिकर्मक एक एलिफैटिक नाइट्राइल संरचना को आंशिक अपचयन मार्ग से सीधे एल्डिहाइड में बदल देता है?", opts: ["$LiAlH_4$ मैट्रिक्स कोर", "$DIBAL-H$ (Diisobutylaluminium hydride is used for selective nitrile reduction)", "$NaBH_4$ अपचयन लाइनें", "सांद्र $HCl$ के साथ जिंक अमलगम"] },	
                correct: 1	
            },	
            {	
                en: { q: "The eccentricity parameter ($e$) tracking a rectangular hyperbola curve structure configuration satisfies which index?", opts: ["e = 1", "e = \\sqrt{2}", "e = 2", "e > 2"] },	
                hi: { q: "एक समकोणीय अतिपरवलय (Rectangular hyperbola) वक्र संरचना की उत्केन्द्रता ($e$) का मान क्या होता है?", opts: ["e = 1", "e = \\sqrt{2} (Constant eccentricity for all rectangular hyperbolas)", "e = 2", "e > 2"] },	
                correct: 1	
            },	
            {	
                en: { q: "A solid metal sphere of thermal capacity matrix scale drops temperature values under Stefan-Boltzmann radiation cooling. Heat loss rate is proportional to:", opts: ["$T^4$", "$T^4 - T_0^4$", "$T^2$", "$T - T_0$"] },	
                hi: { q: "एक ठोस धातु का गोला स्टीफन-बोल्ट्जमैन विकिरण शीतलन के तहत तापमान कम करता है। इसके ऊष्मा हानि की शुद्ध दर किसके समानुपाती होती है?", opts: ["$T^4$", "$T^4 - T_0^4$ (Net rate of radiation heat loss to surroundings)", "$T^2$", "$T - T_0$"] },	
                correct: 1	
            },	
            {	
                en: { q: "The critical physical phenomena showing the conversion of a primary alkyl halide into an alkene when treated with alcoholic $KOH$ is a:", opts: ["Nucleophilic substitution route", "Electrophilic addition path", "Beta-elimination pathway", "Free-radical rearrangement"] },	
                hi: { q: "एल्कोहॉलिक $KOH$ के साथ अभिकृत करने पर एक एल्किल हैलाइड का एल्केन में बदलना किस भौतिक-रासायनिक परिघटना का उदाहरण है?", opts: ["नाभिकरागी प्रतिस्थापन मार्ग", "इलेक्ट्रॉनरागी संयोजन पथ", "बीटा-विलोपन मार्ग (Beta-elimination / Dehydrohalogenation)", "मुक्त-मूलक पुनर्विन्यास"] },	
                correct: 2	
            },	
            {	
                en: { q: "If $\\vec{a}$ and $\\vec{b}$ are perpendicular unit vectors, then the value calculated for $|\\vec{a} \\times \\vec{b}|$ is equal to:", opts: ["0", "1", "0.5", "-1"] },	
                hi: { q: "यदि $\\vec{a}$ तथा $\\vec{b}$ परस्पर लंबवत मात्रक वेक्टर (Perpendicular unit vectors) हैं, तो $|\\vec{a} \\times \\vec{b}|$ का परिकलित मान क्या होगा?", opts: ["0", "1 (Since theta = 90, |a x b| = |a||b|sin(90) = 1)", "0.5", "-1"] },	
                correct: 1	
            },	
            {	
                en: { q: "A simple pendulum tracking grid system exhibits a period length $T$ inside an unaccelerated elevator. If elevator accelerates upwards at acceleration $g$, new period is:", opts: ["$2T$", "$T / 2$", "$T / \\sqrt{2}$", "$T \\sqrt{2}$"] },	
                hi: { q: "एक सरल लोलक का त्वरणरहित लिफ्ट के भीतर आवर्तकाल $T$ है। यदि लिफ्ट ऊपर की ओर $g$ त्वरण से त्वरित होती है, तो नया आवर्तकाल होगा?", opts: ["$2T$", "$T / 2$", "$T / \\sqrt{2}$ (Effective gravity becomes g + g = 2g, so period scales by 1/sqrt(2))", "$T \\sqrt{2}$"] },	
                correct: 2	
            },	
            {	
                en: { q: "Which electronic configuration rules framework explains why Chromium ($Z=24$) tracks an outer shell layout configuration showing $3d^5 4s^1$?", opts: ["Heisenberg matrix criteria", "Symmetrical extra stability of half-filled subshells", "Inductive shift dispersion mechanics", "Markovnikov orientation rule parameters"] },	
                hi: { q: "कौन सा नियम यह स्पष्ट करता है कि क्रोमियम ($Z=24$) का बाह्य कोश विन्यास $3d^5 4s^1$ क्यों होता है?", opts: ["हाइजेनबर्ग मैट्रिक्स मानदंड", "अर्ध-भरे उपकोशों का सममित अतिरिक्त स्थायित्व (Extra stability of half-filled d-subshell)", "प्रेरणिक विस्थापन परिक्षेपण क्रियाविधि", "मार्कोनीकॉफ अभिविन्यास नियम पैरामीटर"] },	
                correct: 1	
            },	
            {	
                en: { q: "The focus coordinate tracking points mapped for the standard parabola configuration equation $y^2 = -16x$ corresponds to:", opts: ["(4, 0)", "(-4, 0)", "(0, 4)", "(0, -4)"] },	
                hi: { q: "मानक परवलय समीकरण $y^2 = -16x$ के लिए नाभि (Focus) के निर्देशांक क्या होंगे?", opts: ["(4, 0)", "(-4, 0) (Comparing with y^2 = -4ax where a = 4)", "(0, 4)", "(0, -4)"] },	
                correct: 1	
            },	
            {	
                en: { q: "A continuous long straight solenoid layout tracking system contains $n$ turns per unit length carrying current $I$. Magnetic field inside core is:", opts: ["$\\mu_0 n I$", "$\\mu_0 n I / 2$", "Zero scalar units", "$2 \\mu_0 n I$"] },	
                hi: { q: "एक लंबी सीधी परिनालिका (Solenoid) जिसमें प्रति इकाई लंबाई में $n$ फेरे हैं और धारा $I$ प्रवाहित हो रही है, के आंतरिक कोर में चुंबकीय क्षेत्र होता है:", opts: ["$\\mu_0 n I$ (Standard internal axial magnetic field formula)", "$\\mu_0 n I / 2$", "शून्य अदिश इकाइयाँ", "$2 \\mu_0 n I$"] },	
                correct: 0	
            },	
            {	
                en: { q: "The chemical integration step that creates a highly stable aromatic azo-dye complex layout starting from aniline at low temperature parameters is:", opts: ["Diazotization reaction", "Friedel-Crafts configuration conversion", "Reimer-Tiemann validation step", "Gattermann-Koch format layout"] },	
                hi: { q: "कम तापमान मापदंडों पर एनीलीन से शुरू करके एक अत्यधिक स्थिर एरोमैटिक एज़ो-डाई (Azo-dye) संकुल बनाने वाला प्रक्रम कहलाता है:", opts: ["डाईऐजोटीकरण अभिक्रिया (Diazotization reaction with HNO2)", "फ्रिडेल-क्राफ्ट्स विन्यास रूपांतरण", "रीमर-टीमैन सत्यापन चरण", "गाटरमान-कोच प्रारूप विन्यास"] },	
                correct: 0	
            },	
            {	
                en: { q: "The value of the limit evaluation sequence matrix $\\lim_{x \\to 0} \\frac{\\tan x - x}{x^3}$ is computed as:", opts: ["0", "1", "1/2", "1/3"] },	
                hi: { q: "सीमा मूल्यांकन अनुक्रम $\\lim_{x \\to 0} \\frac{\\tan x - x}{x^3}$ का परिकलित मान क्या होगा?", opts: ["0", "1", "1/2", "1/3 (Using Taylor series expansion of tan x)"] },	
                correct: 3	
            },	
            {	
                en: { q: "A sound tracking system maps waves traveling through an ideal gaseous enclosure layout grid. Wave speed velocity is independent of changes in:", opts: ["Enclosure temperature variables", "Enclosure gas pressure variations", "Molar mass parameter variables", "Specific heat constant metrics"] },	
                hi: { q: "एक आदर्श गैसीय विन्यास ग्रिड के माध्यम से यात्रा करने वाली ध्वनि तरंगों की चाल (Velocity of sound) किसके परिवर्तनों से स्वतंत्र होती है?", opts: ["तापमान चरों से", "गैस के दाब परिवर्तनों से (Independent of pressure at constant temperature)", "मोलर द्रव्यमान मापदंडों से", "विशिष्ट ऊष्मा स्थिरांक मीट्रिक से"] },	
                correct: 1	
            },	
            // --- ७६ ते १५० प्रश्नांचा संच (JEE Main & Advanced - Last 10 Years) ---	
            {	
                en: { q: "If the vertices of a triangle are $(0,0)$, $(3,0)$ and $(0,4)$, then what is the distance between its circumcenter and orthocenter?", opts: ["2.5 units", "1.5 units", "2.0 units", "5.0 units"] },	
                hi: { q: "यदि एक त्रिभुज के शीर्ष $(0,0)$, $(3,0)$ और $(0,4)$ हैं, तो इसके परिकेंद्र (Circumcenter) और लंबकेंद्र (Orthocenter) के बीच की दूरी क्या होगी?", opts: ["2.5 इकाई (Distance is equal to half of hypotenuse)", "1.5 इकाई", "2.0 इकाई", "5.0 इकाई"] },	
                correct: 0	
            },	
            {	
                en: { q: "A particle of mass $m$ is projected with velocity $v$ making an angle of $45^{\\circ}$ with the horizontal. What is the magnitude of angular momentum of the particle about the point of projection when it is at its maximum height?", opts: ["Zero", "$mv^3 / (4\\sqrt{2}g)$", "$mv^3 / (4g)$", "$mv^3 / (2\\sqrt{2}g)$"] },	
                hi: { q: "द्रव्यमान $m$ के एक कण को क्षैतिज से $45^{\\circ}$ का कोण बनाते हुए वेग $v$ से प्रक्षेपित किया जाता है। जब कण अपनी अधिकतम ऊंचाई पर होता है, तो प्रक्षेपण बिंदु के परितः इसके कोणीय संवेग (Angular momentum) का परिमाण क्या होगा?", opts: ["शून्य", "$mv^3 / (4\\sqrt{2}g)$ (Using L = m * v_cos(theta) * H_max)", "$mv^3 / (4g)$", "$mv^3 / (2\\sqrt{2}g)$"] },	
                correct: 1	
            },	
            {	
                en: { q: "Which of the following elements has the highest negative electron gain enthalpy trend index value in the periodic table?", opts: ["Fluorine ($F$)", "Chlorine ($Cl$)", "Bromine ($Br$)", "Oxygen ($O$)"] },	
                hi: { q: "आवर्त सारणी में निम्नलिखित में से किस तत्व की ऋणात्मक इलेक्ट्रॉन लब्धि एन्थैल्पी (Electron gain enthalpy) का मान उच्चतम होता है?", opts: ["फ्लोरीन ($F$)", "क्लोरीन ($Cl$ - due to lower inter-electronic repulsion than F)", "ब्रोमीन ($Br$)", "ऑक्सीजन ($O$)"] },	
                correct: 1	
            },	
            {	
                en: { q: "If the function $f(x) = \\frac{Kx}{\\sin x + \\tan x}$ is continuous everywhere at $x = 0$ with $f(0) = 2$, then the scalar numeric value of $K$ is:", opts: ["1", "2", "4", "0"] },	
                hi: { q: "यदि फलन $f(x) = \\frac{Kx}{\\sin x + \\tan x}$, $x = 0$ पर सतत (Continuous) है और $f(0) = 2$ है, तो $K$ का अदिश संख्यात्मक मान क्या होगा?", opts: ["1", "2", "4 (Using limit expansion, denominator yields 2x as x approaches 0)", "0"] },	
                correct: 2	
            },	
            {	
                en: { q: "Two coherent light sources of intensities $I$ and $4I$ interfere to create a fringe layout. What is the maximum possible intensity observed inside the setup?", opts: ["5 I", "9 I", "3 I", "25 I"] },	
                hi: { q: "तीव्रता $I$ और $4I$ के दो कलासंबद्ध (Coherent) प्रकाश स्रोत व्यतिकरण करके एक फ्रिंज प्रतिरूप बनाते हैं। इस व्यवस्था में देखी जा सकने वाली अधिकतम तीव्रता क्या होगी?", opts: ["5 I", "9 I (Using formula I_max = (sqrt(I1) + sqrt(I2))^2)", "3 I", "25 I"] },	
                correct: 1	
            },	
            {	
                en: { q: "The chemical compound created via heating an aqueous mixture framework containing Ammonium chloride and Sodium nitrite directly is:", opts: ["Nitrogen dioxide ($NO_2$)", "Dinitrogen oxide ($N_2O$)", "Nitrogen gas ($N_2$)", "Ammonia vapor ($NH_3$)"] },	
                hi: { q: "अमोनियम क्लोराइड और सोडियम नाइट्राइट के जलीय मिश्रण को सीधे गर्म करने पर बनने वाला रासायनिक यौगिक कौन सा है?", opts: ["नाइट्रोजन डाइऑक्साइड ($NO_2$)", "डाईनाइट्रोजन ऑक्साइड ($N_2O$)", "नाइट्रोजन गैस ($N_2$ - Laboratory preparation method)", "अमोनिया वाष्प ($NH_3$)"] },	
                correct: 2	
            },	
            {	
                en: { q: "The sum of the series $\\sum_{r=1}^{n} r(r+1)$ can be accurately evaluated using which algebraic identity track configuration?", opts: ["$n(n+1)(n+2) / 3$", "$n(n+1)(2n+1) / 6$", "$n^2(n+1)^2 / 4$", "$n(n+1) / 2$"] },	
                hi: { q: "श्रेणी $\\sum_{r=1}^{n} r(r+1)$ के योगफल का सही बीजगणितीय मान किसके बराबर होता है?", opts: ["$n(n+1)(n+2) / 3$ (Sum of r^2 + sum of r)", "$n(n+1)(2n+1) / 6$", "$n^2(n+1)^2 / 4$", "$n(n+1) / 2$"] },	
                correct: 0	
            },	
            {	
                en: { q: "A Carnot engine has efficiency $40 \\%$ when sink temperature is $300$ K. By how many Kelvin should the source temperature be increased to change efficiency to $60 \\%$?", opts: ["100 K", "250 K", "200 K", "150 K"] },	
                hi: { q: "जब सिंक का तापमान $300$ K होता है, तो कार्नोट इंजन की दक्षता $40 \\%$ होती है। दक्षता को $60 \\%$ करने के लिए स्रोत के तापमान में कितने केल्विन की वृद्धि की जानी चाहिए?", opts: ["100 K", "250 K (Initial source = 500K, Final source = 750K)", "200 K", "150 K"] },	
                correct: 1	
            },	
            {	
                en: { q: "Which core reaction condition converts a carboxylic acid directly into an alpha-chloro carboxylic acid structural layout via phosphorus catalyst?", opts: ["Rosenmund conversion", "Hell-Volhard-Zelinsky (HVZ) path", "Clemmensen transformation", "Kolbe electrolysis format"] },	
                hi: { q: "कौन सी अभिक्रिया स्थिति फॉस्फोरस उत्प्रेरक की उपस्थिति में कार्बोक्सिलिक अम्ल को सीधे अल्फा-क्लोरो कार्बोक्सिलिक अम्ल में परिवर्तित करती है?", opts: ["रोज़नमुंड रूपांतरण", "हेल-वोल्हाड-जेलिंस्की (HVZ) मार्ग", "क्लीमेंसन रूपांतरण", "कोल्बे वैद्युतअपघटन प्रारूप"] },	
                correct: 1	
            },	
            {	
                en: { q: "If $\\sin^{-1}x + \\sin^{-1}y = \\frac{2\\pi}{3}$, then the calculated value belonging to $\\cos^{-1}x + \\cos^{-1}y$ is equal to:", opts: ["\\pi", "\\pi / 2", "\\pi / 3", "\\pi / 6"] },	
                hi: { q: "यदि $\\sin^{-1}x + \\sin^{-1}y = \\frac{2\\pi}{3}$ है, तो $\\cos^{-1}x + \\cos^{-1}y$ का परिकलित मान किसके बराबर होगा?", opts: ["\\pi", "\\pi / 2", "\\pi / 3 (Using sin^-1 z + cos^-1 z = pi/2 identity)", "\\pi / 6"] },	
                correct: 2	
            },	
            {	
                en: { q: "An open container track holds water up to height $H$. A tiny orifice puncture is created at depth $h$ below free surface. The maximum horizontal range is when:", opts: ["h = H / 4", "h = H / 2", "h = H / 3", "h = H"] },	
                hi: { q: "एक खुला पात्र ऊंचाई $H$ तक पानी से भरा है। मुक्त सतह से नीचे $h$ गहराई पर एक छोटा छिद्र किया जाता है। क्षैतिज परास (Horizontal range) अधिकतम होने की स्थिति क्या है?", opts: ["h = H / 4", "h = H / 2 (Range is maximum when hole is at the center)", "h = H / 3", "h = H"] },	
                correct: 1	
            },	
            {	
                en: { q: "The packing efficiency metrics calculation registered for a standard Face-Centered Cubic (FCC) unit cell layout equals exactly:", opts: ["52.4 %", "68.0 %", "74.0 %", "32.0 %"] },	
                hi: { q: "एक मानक फलक-केंद्रित घनीय (FCC) एकक कोष्ठिका विन्यास के लिए परिकलित संकुलन क्षमता (Packing efficiency) का मान कितना होता है?", opts: ["52.4 %", "68.0 %", "74.0 % (Highest density packing among simple variants)", "32.0 %"] },	
                correct: 2	
            },	
            {	
                en: { q: "The number of ways in which 5 boys and 5 girls can sit around a circular table template grid layout such that no two girls sit together is:", opts: ["5! * 5!", "4! * 5!", "9!", "4! * 4!"] },	
                hi: { q: "5 लड़कों और 5 लड़कियों को एक वृत्ताकार मेज के चारों ओर इस प्रकार बैठाने के तरीकों की संख्या, जिससे कोई भी दो लड़कियाँ एक साथ न बैठें, होगी:", opts: ["5! * 5!", "4! * 5! (Fix boys around circle in (5-1)! ways, place girls in 5 gaps in 5! ways)", "9!", "4! * 4!"] },	
                correct: 1	
            },	
            {	
                en: { q: "A sound tracking interface shifts frequency values from $f$ to $2f$ indices. The ratio of their acoustic intensity matrix ratings at equal amplitude is:", opts: ["1 : 2", "2 : 1", "1 : 4", "4 : 1"] },	
                hi: { q: "एक ध्वनि प्रणाली आवृत्ति मान को $f$ से $2f$ सूचकांकों पर स्थानांतरित करती है। समान आयाम पर उनकी ध्वनि तीव्रताओं (Acoustic intensity) का अनुपात क्या होगा?", opts: ["1 : 2", "2 : 1", "1 : 4", "4 : 1 (Intensity is proportional to square of frequency)"] },	
                correct: 2	
            },	
            {	
                en: { q: "Which analytical test distinguishes primary, secondary, and tertiary amines using Benzene sulfonyl chloride reagent?", opts: ["Hinsberg test grid", "Lucas reagent method", "Carbylamine test profile", "Fehling solution template"] },	
                hi: { q: "बेंजीन सल्फोनिल क्लोराइड अभिकर्मक का उपयोग करके प्राथमिक, द्वितीयक और तृतीयक एमीनों में अंतर करने वाला विश्लेषणात्मक परीक्षण कौन सा है?", opts: ["हिन्सबर्ग परीक्षण ग्रिड (Hinsberg reagent test)", "ल्यूकास अभिकर्मक विधि", "कार्बिलामीन परीक्षण प्रोफाइल", "फेलिंग विलयन टेम्पलेट"] },	
                correct: 0	
            },	
            {	
                en: { q: "If $\\int e^x (\\frac{1 - \\sin x}{1 - \\cos x}) dx = f(x) + C$, then the mathematical function definition of $f(x)$ corresponds to:", opts: ["e^x \\tan(x/2)", "-e^x \\cot(x/2)", "e^x \\cot(x/2)", "-e^x \\tan(x/2)"] },	
                hi: { q: "यदि $\\int e^x (\\frac{1 - \\sin x}{1 - \\cos x}) dx = f(x) + C$ है, तो फलन $f(x)$ का सही मान क्या होगा?", opts: ["e^x \\tan(x/2)", "-e^x \\cot(x/2) (Standard e^x [f(x) + f'(x)] form integration)", "e^x \\cot(x/2)", "-e^x \\tan(x/2)"] },	
                correct: 1	
            },	
            {	
                en: { q: "An electric dipole consists of charges $+q$ and $-q$ separated by distance $2a$. The electric potential at distance $r$ on axial line satisfies:", opts: ["V proportional to 1/r", "V proportional to 1/r^2", "V proportional to 1/r^3", "V proportional to 1/r^4"] },	
                hi: { q: "एक विद्युत द्विध्रुव में $+q$ और $-q$ आवेश परस्पर $2a$ दूरी पर स्थित हैं। अक्षीय रेखा पर दूरी $r$ पर विद्युत विभव ($V$) किस संबंध को संतुष्ट करता है?", opts: ["V, 1/r के समानुपाती होता है", "V, 1/r^2 के समानुपाती होता है (Dipole potential drops off as inverse square)", "V, 1/r^3 के समानुपाती होता है", "V, 1/r^4 के समानुपाती होता है"] },	
                correct: 1	
            },	
            {	
                en: { q: "The standard reduction potentials for metals $A, B, C$ are $+0.5$ V, $-3.0$ V, and $-1.2$ V respectively. The correct increasing order of reducing power is:", opts: ["A < B < C", "A < C < B", "B < C < A", "C < A < B"] },	
                hi: { q: "धातुओं $A, B, C$ के मानक अपचयन विभव (Standard reduction potentials) क्रमशः $+0.5$ V, $-3.0$ V, और $-1.2$ V हैं। उनकी अपचायक क्षमता (Reducing power) का सही बढ़ता क्रम क्या है?", opts: ["A < B < C", "A < C < B (More negative reduction potential = Stronger reducing agent)", "B < C < A", "C < A < B"] },	
                correct: 1	
            },	
            {	
                en: { q: "The probability distribution matrix profile of a random variable satisfies $\\sum P(X) = 1$. If $P(X=k) = Ck^2$ for $k=1,2,3$, then $C$ equals:", opts: ["1/6", "1/14", "1/9", "1/36"] },	
                hi: { q: "एक यादृच्छिक चर (Random variable) का प्रायिकता वितरण $\\sum P(X) = 1$ को संतुष्ट करता है। यदि $k=1,2,3$ के लिए $P(X=k) = Ck^2$ है, तो $C$ का मान है:", opts: ["1/6", "1/14 (C*1 + C*4 + C*9 = 1 implies 14C = 1)", "1/9", "1/36"] },	
                correct: 1	
            },	
            {	
                en: { q: "A magnetic core material has relative permeability $\\mu_r = 4000$. The magnetic susceptibility parameter ($\\chi_m$) for this layout grid tracks across:", opts: ["4001", "3999", "4000", "2000"] },	
                hi: { q: "एक चुंबकीय कोर सामग्री की आपेक्षिक पारगम्यता $\\mu_r = 4000$ है। इस सामग्री की चुंबकीय प्रवृत्ति (Magnetic susceptibility - $\\chi_m$) का मान क्या होगा?", opts: ["4001", "3999 (Using relation chi_m = mu_r - 1)", "4000", "2000"] },	
                correct: 1	
            },	
            {	
                en: { q: "Which molecule sequence captures the correct increasing layout path configuration of carbon-oxygen bond length trends?", opts: ["$CO < CO_2 < CO_3^{2-}$", "$CO_3^{2-} < CO_2 < CO$", "$CO_2 < CO < CO_3^{2-}$", "$CO < CO_3^{2-} < CO_2$"] },	
                hi: { q: "कौन सा अणु अनुक्रम कार्बन-ऑक्सीजन आबंध लंबाई (Bond length) की सही बढ़ती हुई प्रवृत्ति को दर्शाता है?", opts: ["$CO < CO_2 < CO_3^{2-}$ (Triple bond < Double bond < Resonance hybrid fractional bond)", "$CO_3^{2-} < CO_2 < CO$", "$CO_2 < CO < CO_3^{2-}$", "$CO < CO_3^{2-} < CO_2$"] },	
                correct: 0	
            },	
            {	
                en: { q: "The angle between the two straight line intersection tracks given by vectors $\\vec{r} = \\hat{i} + \\lambda(2\\hat{i} - \\hat{j} + 2\\hat{k})$ and $\\vec{r} = \\hat{j} + \\mu(\\hat{i} + 2\\hat{j} + 2\\hat{k})$ is:", opts: ["$\\cos^{-1}(4/9)$", "$\\cos^{-1}(2/3)$", "$\\pi / 2$", "Zero scalar index"] },	
                hi: { q: "वेक्टर रेखाओं $\\vec{r} = \\hat{i} + \\lambda(2\\hat{i} - \\hat{j} + 2\\hat{k})$ तथा $\\vec{r} = \\hat{j} + \\mu(\\hat{i} + 2\\hat{j} + 2\\hat{k})$ के बीच का कोण क्या होगा?", opts: ["$\\cos^{-1}(4/9)$ (Using dot product of parallel vectors b1 and b2)", "$\\cos^{-1}(2/3)$", "$\\pi / 2$", "शून्य अदिश सूचकांक"] },	
                correct: 0	
            },	
            {	
                en: { q: "A particle with mass $m$ and charge $q$ enters a perpendicular uniform magnetic field $B$ with velocity $v$. The path radius scales by:", opts: ["$mv / qB$", "$qB / mv$", "$mv^2 / qB$", "$qB / mv^2$"] },	
                hi: { q: "द्रव्यमान $m$ और आवेश $q$ का एक कण लंबवत समरूप चुंबकीय क्षेत्र $B$ में वेग $v$ से प्रवेश करता है। इसके वृत्ताकार पथ की त्रिज्या का सूत्र क्या होगा?", opts: ["$mv / qB$ (Equating magnetic force to centripetal force yields r = mv/qB)", "$qB / mv$", "$mv^2 / qB$", "$qB / mv^2$"] },	
                correct: 0	
            },	
            {	
                en: { q: "The dynamic rate equation configuration for a first-order chemical reaction tracking format satisfies which parameter grid?", opts: ["$t_{1/2} = 0.693 / k$", "$t_{1/2} = a / 2k$", "$t_{1/2} = 1 / ak$", "$t_{1/2} = 1.386 / k$"] },	
                hi: { q: "प्रथम-कोटि (First-order) की रासायनिक बलगतिकी अभिक्रिया के अर्ध-आयु काल (Half-life) का सही संबंध कौन सा है?", opts: ["$t_{1/2} = 0.693 / k$ (Independent of initial reactant concentration)", "$t_{1/2} = a / 2k$", "$t_{1/2} = 1 / ak$", "$t_{1/2} = 1.386 / k$"] },	
                correct: 0	
            },	
            {	
                en: { q: "If the system matrix equation configuration matches $A^2 - A + I = 0$, then the matrix inverse definition $A^{-1}$ maps exactly to:", opts: ["$A + I$", "$I - A$", "$A - I$", "$A$"] },	
                hi: { q: "यदि आव्यूह समीकरण विन्यास $A^2 - A + I = 0$ को संतुष्ट करता है, तो व्युत्क्रम आव्यूह (Matrix inverse) $A^{-1}$ किसके बराबर होगा?", opts: ["$A + I$", "$I - A$ (Multiplying both sides by A^-1 yields A^-1 = I - A)", "$A - I$", "$A$"] },	
                correct: 1	
            },	
            {	
                en: { q: "A target satellite tracks along a circular orbit loop at height $R$ above earth surface (radius $R$). The orbital speed ratio relative to escape speed from earth surface is:", opts: ["1 / 2", "1 / sqrt(2)", "1 / 2 sqrt(2)", "sqrt(2)"] },	
                hi: { q: "एक कृत्रिम उपग्रह पृथ्वी की सतह से $R$ ऊंचाई (पृथ्वी की त्रिज्या $R$ है) पर एक वृत्ताकार कक्षा में चक्कर लगा रहा है। इसका कक्षीय वेग, पृथ्वी की सतह से पलायन वेग (Escape speed) का कितना गुना होगा?", opts: ["1 / 2", "1 / sqrt(2)", "1 / 2 sqrt(2) (V_orbital = sqrt(gR/2), V_escape = sqrt(2gR))", "sqrt(2)"] },	
                correct: 2	
            },	
            {	
                en: { q: "Which of the following carbohydrate molecules is classified strictly as a non-reducing sugar compound layout structure?", opts: ["Glucose", "Fructose", "Maltose", "Sucrose"] },	
                hi: { q: "निम्नलिखित में से कौन सा कार्बोहाइड्रेट अणु मुख्य रूप से एक अन-अपचायी शर्करा (Non-reducing sugar) के रूप में वर्गीकृत किया गया है?", opts: ["ग्लूकोज", "फ्रक्टोज", "माल्टोज", "सुक्रोज (Sucrose - glycosidic bond locks both reducing groups)"] },	
                correct: 3	
            },	
            {	
                en: { q: "The total number of localized points of local maxima and minima evaluated for the function $f(x) = x^3 - 3x + 2$ is computed as:", opts: ["0", "1", "2", "3"] },	
                hi: { q: "फलन $f(x) = x^3 - 3x + 2$ के लिए स्थानीय उच्चिष्ठ (Local maxima) और निम्निष्ठ (Local minima) बिंदुओं की कुल संख्या कितनी होगी?", opts: ["0", "1", "2 (Differentiating yields roots at x = +1 and x = -1)", "3"] },	
                correct: 2	
            },	
            {	
                en: { q: "A step interface parallel combination layout links two voltage cells showing EMF parameters $E_1, E_2$ and internal resistances $r_1, r_2$. Equivalent EMF matches:", opts: ["$E_1 + E_2$", "$(E_1r_2 + E_2r_1) / (r_1 + r_2)$", "$(E_1r_1 + E_2r_2) / (r_1 + r_2)$", "$E_1E_2 / (E_1 + E_2)$"] },	
                hi: { q: "विद्युत वाहक बल $E_1, E_2$ और आंतरिक प्रतिरोध $r_1, r_2$ वाले दो सेलों को समांतर क्रम में जोड़ा गया है। इस संयोजन का तुल्य विद्युत वाहक बल (Equivalent EMF) क्या होगा?", opts: ["$E_1 + E_2$", "$(E_1r_2 + E_2r_1) / (r_1 + r_2)$ (Standard parallel cell emf expression)", "$(E_1r_1 + E_2r_2) / (r_1 + r_2)$", "$E_1E_2 / (E_1 + E_2)$"] },	
                correct: 1	
            },	
            {	
                en: { q: "The chemical structural orientation displaying an exceptionally strong aromatic stabilization energy pattern configuration profile is:", opts: ["Cyclopentadienyl cation", "Cycloheptatrienyl cation (Tropylium)", "Cyclooctatetraene ring grid", "1,3-Cyclohexadiene lines"] },	
                hi: { q: "असाधारण रूप से उच्च एरोमैटिक स्थिरीकरण ऊर्जा प्रदर्शित करने वाली रासायनिक संरचना कौन सी है?", opts: ["साइक्लोपेंटाडाइनिल धनायन", "साइक्लोहेप्टाट्राइनिल धनायन (Tropylium cation - satisfies Huckel's 4n+2 rule with 6 pi electrons)", "साइक्लोऑक्टाटेट्राईन वलय ग्रिड", "1,3-साइक्लोहेक्साडाइन लाइनें"] },	
                correct: 1	
            },	
            {	
                en: { q: "The differential area matrix metric enclosed within the coordinate boundaries matching $y = |x|$ and $y = 1$ is:", opts: ["0.5", "1.0", "2.0", "1.5"] },	
                hi: { q: "समीकरण सीमाओं $y = |x|$ तथा $y = 1$ द्वारा घिरे क्षेत्र का कुल क्षेत्रफल कितना होगा?", opts: ["0.5", "1.0 (Forms a symmetrical triangle with base 2 and height 1, area = 1/2 * 2 * 1)", "2.0", "1.5"] },	
                correct: 1	
            },	
            {	
                en: { q: "A target radioactive compound tracking layout trace sample decays with a decay constant parameter value $\\lambda$. The mean-life is:", opts: ["$1 / \\lambda$", "$0.693 / \\lambda$", "$\\lambda^2$", "$2 / \\lambda$"] },	
                hi: { q: "एक रेडियोधर्मी पदार्थ का क्षय नियतांक (Decay constant) $\\lambda$ है। इस पदार्थ की माध्य-आयु (Mean-life) का सूत्र क्या होगा?", opts: ["$1 / \\lambda$ (Mean-life is the reciprocal of the decay constant)", "$0.693 / \\lambda$", "$\\lambda^2$", "$2 / \\lambda$"] },	
                correct: 0	
            },	
            {	
                en: { q: "Which complex molecule system template layout configuration maps a classic outer-orbital high-spin coordination structure?", opts: ["$[Co(NH_3)_6]^{3+}$", "$[Fe(CN)_6]^{3-}$", "$[CoF_6]^{3-}$", "$[Ni(CN)_4]^{2-}$"] },	
                hi: { q: "कौन सा संकुल अणु विन्यास एक बाह्य-कक्षक उच्च-प्रचक्रण (Outer-orbital high-spin) उपसहसंयोजन संरचना का उत्कृष्ट उदाहरण है?", opts: ["$[Co(NH_3)_6]^{3+}$", "$[Fe(CN)_6]^{3-}$", "$[CoF_6]^{3-}$ (F- is a weak field ligand, prevents pairing in d-orbitals)", "$[Ni(CN)_4]^{2-}$"] },	
                correct: 2	
            },	
            {	
                en: { q: "If the angle vector constraints between lines rows satisfies $\\cos \\theta = |\\frac{a_1a_2 + b_1b_2 + c_1c_2}{\\sqrt{a_1^2+b_1^2+c_1^2}\\sqrt{a_2^2+b_2^2+c_2^2}}| = 0$, lines are:", opts: ["Parallel configuration", "Perpendicular orientation", "Skew coordinate layout", "Coincident overlapping row"] },	
                hi: { q: "यदि दो रेखाओं के दिक्-अनुपातों के बीच संबंध $\\cos \\theta = 0$ को संतुष्ट करता है, तो दोनों रेखाएं परस्पर होंगी:", opts: ["समांतर विन्यास में", "लंबवत अभिविन्यास में (Perpendicular since angle is 90 degrees)", "विषमरेखीय निर्देशांक लेआउट में", "संपाती ओवरलैपिंग पंक्ति में"] },	
                correct: 1	
            },	
            {	
                en: { q: "A thin lens unit with refractive index 1.5 shows focal length $f$ inside air. When submerged inside a fluid medium of index 1.5, focal length is:", opts: ["Zero constant magnitude", "Infinite value scaling index", "$2f$", "$f / 2$"] },	
                hi: { q: "अपवर्तनांक 1.5 वाले एक पतले लेंस की वायु में फोकस दूरी $f$ है। जब इसे 1.5 अपवर्तनांक वाले द्रव माध्यम में डुबोया जाता है, तो इसकी नई फोकस दूरी होगी:", opts: ["शून्य नियत परिमाण", "अनंत मान सूचकांक (Lens maker's formula denominator becomes zero, flat profile behavior)", "$2f$", "$f / 2$"] },	
                correct: 1	
            },	
            {	
                en: { q: "The dynamic synthesis step which converts a primary alkyl halide into an extended carbon chain nitrile using sodium cyanide is a:", opts: ["$S_N1$ Substitution profile", "$S_N2$ Substitution profile", "Electrophilic displacement conversion", "Free radical propagation matrix"] },	
                hi: { q: "सोडियम साइनाइड का उपयोग करके एक प्राथमिक एल्किल हैलाइड को कार्बन श्रृंखला विस्तारित नाइट्राइल में बदलने वाला प्रक्रम है:", opts: ["$S_N1$ प्रतिस्थापन प्रोफाइल", "$S_N2$ प्रतिस्थापन प्रोफाइल (Primary halides strongly favor backside SN2 attack)", "इलेक्ट्रॉनरागी विस्थापन रूपांतरण", "मुक्त मूलक संचरण मैट्रिक्स"] },	
                correct: 1	
            },	
            {	
                en: { q: "The absolute solution matrix computed for the integration track $\\int_{0}^{1} x e^x dx$ tracks across numeric value:", opts: ["1", "e", "e - 1", "0"] },	
                hi: { q: "निश्चित समाकलन $\\int_{0}^{1} x e^x dx$ का परिकलित शुद्ध मान क्या होगा?", opts: ["1 (Using integration by parts: [x*e^x - e^x] evaluated from 0 to 1 yields 1)", "e", "e - 1", "0"] },	
                correct: 0	
            },	
            {	
                en: { q: "A simple thermodynamic loop tracking setup operates via adiabatic expansion paths. The correct physical equation statement matches:", opts: ["$Q = \\Delta U$", "$W = -\\Delta U$", "$Q = W$", "$\\Delta U = 0$"] },	
                hi: { q: "एक रुद्धोष्म प्रसार (Adiabatic expansion) प्रक्रम के लिए सही भौतिक-ऊष्मागतिकी कथन कौन सा है?", opts: ["$Q = \\Delta U$", "$W = -\\Delta U$ (Since Q = 0 in adiabatic steps, dU = -dW)", "$Q = W$", "$\\Delta U = 0$"] },	
                correct: 1	
            },	
            {	
                en: { q: "Which chemical reagent converts a benzene ring directly into a benzaldehyde structure via a formylation pathway?", opts: ["$CO + HCl$ with anhydrous $AlCl_3$", "$CrO_2Cl_2$ reagent matrix", "$KMnO_4$ alkaline track solution", "$SOCl_2$ solution layout"] },	
                hi: { q: "कौन सा रासायनिक अभिकर्मक फॉर्माइलेशन मार्ग (Formylation) से बेंजीन वलय को सीधे बेन्जैल्डिहाइड में बदल देता है?", opts: ["निर्जल $AlCl_3$ के साथ $CO + HCl$ (Gattermann-Koch reaction)", "$CrO_2Cl_2$ अभिकर्मक मैट्रिक्स", "$KMnO_4$ क्षारीय ट्रैक समाधान", "$SOCl_2$ समाधान लेआउट"] },	
                correct: 0	
            },	
            {	
                en: { q: "If a matrix profile $A$ acts as an orthogonal system matrix layout, then the mathematical product constraint relationship satisfies:", opts: ["$AA^T = I$", "$A = A^T$", "$A = -A^T$", "$A^2 = I$"] },	
                hi: { q: "यदि एक आव्यूह (Matrix) $A$ एक लांबिक आव्यूह (Orthogonal matrix) है, तो सही गणितीय संबंध क्या होगा?", opts: ["$AA^T = I$ (Definition of an orthogonal matrix configuration)", "$A = A^T$", "$A = -A^T$", "$A^2 = I$"] },	
                correct: 0	
            },	
            {	
                en: { q: "A sound wave tracking grid has maximum pressure amplitude $\\Delta P_{max}$. The intensity parameter scales across which variation track?", opts: ["Proportional to $\\Delta P_{max}$", "Proportional to $(\\Delta P_{max})^2$", "Inversely proportional to $\\Delta P_{max}$", "Independent of $\\Delta P_{max}$"] },	
                hi: { q: "एक ध्वनि तरंग विन्यास में अधिकतम दाब आयाम $\\Delta P_{max}$ है। तरंग की तीव्रता किस संबंध के अनुसार परिवर्तित होती है?", opts: ["$\\Delta P_{max}$ के समानुपाती", "$(\\Delta P_{max})^2$ के समानुपाती (Acoustic intensity scales quadratically with pressure deviations)", "$\\Delta P_{max}$ के व्युत्क्रमानुपाती", "$\\Delta P_{max}$ से स्वतंत्र"] },	
                correct: 1	
            },	
            {	
                en: { q: "The structural layout configuration mapping the highest basicity strength trend indicator index among the given options is:", opts: ["Aniline amine rows", "p-Nitroaniline molecule", "p-Toluidine molecule", "Diphenylamine complex rows"] },	
                hi: { q: "दिए गए विकल्पों में से कौन सी संरचना उच्चतम क्षारीयता (Basicity) प्रदर्शित करती है?", opts: ["एनीलीन एमीन पंक्तियाँ", "p-नाइट्रोएनीलीन अणु", "p-टॉलूइडीन अणु (Contains electron-donating methyl group, enhances lone pair availability)", "डाईफेनिलामीन जटिल पंक्तियाँ"] },	
                correct: 2	
            },	
            {	
                en: { q: "The value of the definite integral limits tracking $\\int_{0}^{\\pi} \\cos^3 x dx$ is computed as:", opts: ["0", "\\pi", "\\pi / 2", "1"] },	
                hi: { q: "निश्चित समाकलन $\\int_{0}^{\\pi} \\cos^3 x dx$ का परिकलित मान क्या होगा?", opts: ["0 (Using property: cos^3(pi - x) = -cos^3(x), odd function anti-symmetry across boundary)", "\\pi", "\\pi / 2", "1"] },	
                correct: 0	
            },	
            {	
                en: { q: "An electric field layout tracking framework is represented by $E = 3\\hat{i} + 4\\hat{j}$ N/C. The electric flux passing through a surface area of 10 units in y-z plane is:", opts: ["30 N m^2/C", "40 N m^2/C", "50 N m^2/C", "Zero constant units"] },	
                hi: { q: "एक विद्युत क्षेत्र विन्यास $E = 3\\hat{i} + 4\\hat{j}$ N/C द्वारा निरूपित है। y-z तल में 10 इकाई क्षेत्रफल की सतह से गुजरने वाला विद्युत फ्लक्स क्या होगा?", opts: ["30 N m^2/C (Area vector points along i-axis, so flux = 3 * 10 = 30)", "40 N m^2/C", "50 N m^2/C", "शून्य नियत इकाइयाँ"] },	
                correct: 0	
            },	
            {	
                en: { q: "Which chemical compound maps an example of an interstitial hydride storage lattice layout system format?", opts: ["$CH_4$", "$H_2O$", "Titanium hydride ($TiH_{1.73}$)", "$NaH$ crystalline ionic grids"] },	
                hi: { q: "कौन सा रासायनिक यौगिक एक अंतराकाशी हाइड्राइड (Interstitial hydride) जालक संरचना का उदाहरण है?", opts: ["$CH_4$", "$H_2O$", "टाइटेनियम हाइड्राइड ($TiH_{1.73}$ - Non-stoichiometric d-block hydride)", "$NaH$ क्रिस्टलीय आयनिक ग्रिड"] },	
                correct: 2	
            },	
            // --- १५१ ते २२५ प्रश्नांचा संच (JEE Main & Advanced - Last 10 Years) ---	
            {	
                en: { q: "If $\\int \\frac{dx}{\\cos^6 x} = A \\tan^5 x + B \\tan^3 x + C \\tan x + D$, then the value of the scalar matrix coefficient definition $A+B+C$ equals:", opts: ["1/5", "38/15", "23/15", "1"] },	
                hi: { q: "यदि $\\int \\frac{dx}{\\cos^6 x} = A \\tan^5 x + B \\tan^3 x + C \\tan x + D$ है, तो अदिश गुणांक मान $A+B+C$ किसके बराबर होगा?", opts: ["1/5", "38/15 (Substituting sec^2 x = 1 + tan^2 x yields A=1/5, B=2/3, C=1; Sum = 28/15 + 1 = 38/15)", "23/15", "1"] },	
                correct: 1	
            },	
            {	
                en: { q: "A solid cylinder of mass $M$ and radius $R$ rolls down an inclined plane of height $H$ without slipping. What is its linear velocity when it reaches the bottom?", opts: ["$\\sqrt{2gH}$", "$\\sqrt{4gH / 3}$", "$\\sqrt{gH}$", "$\\sqrt{4gH / 5}$"] },	
                hi: { q: "द्रव्यमान $M$ और त्रिज्या $R$ का एक ठोस बेलन (Solid cylinder) $H$ ऊंचाई के आनत तल पर बिना फिसले नीचे लुढ़कता है। जब यह सबसे नीचे पहुंचता है, तो इसका रेखीय वेग क्या होगा?", opts: ["$\\sqrt{2gH}$", "$\\sqrt{4gH / 3}$ (Using conservation of energy with rotational inertia included)", "$\\sqrt{gH}$", "$\\sqrt{4gH / 5}$"] },	
                correct: 1	
            },	
            {	
                en: { q: "Which of the following coordination compounds exhibits optical isomerism properties within its structural layout matrix?", opts: ["trans-$[Co(en)_2Cl_2]^+$", "cis-$[Co(en)_2Cl_2]^+$", "$[Co(NH_3)_4Cl_2]^+$", "$[Ni(Cl)_4]^{2-}$"] },	
                hi: { q: "निम्नलिखित उपसहसंयोजन यौगिकों में से कौन सा अपने संरचनात्मक विन्यास में प्रकाशिक समावयवता (Optical isomerism) प्रदर्शित करता है?", opts: ["trans-$[Co(en)_2Cl_2]^+$", "cis-$[Co(en)_2Cl_2]^+$ (Asymmetric structure lacking a plane of symmetry)", "$[Co(NH_3)_4Cl_2]^+$", "$[Ni(Cl)_4]^{2-}$"] },	
                correct: 1	
            },	
            {	
                en: { q: "If the area bounded by the curves $y^2 = ax$ and $x^2 = ay$ ($a > 0$) is exactly equal to 3 square units, then the value of parameter $a$ is:", opts: ["3", "9", "2", "4"] },	
                hi: { q: "यदि वक्रों $y^2 = ax$ तथा $x^2 = ay$ ($a > 0$) द्वारा घिरा क्षेत्रफल ठीक 3 वर्ग इकाई के बराबर है, तो पैरामीटर $a$ का मान क्या होगा?", opts: ["3", "9", "2", "4 (Using standard area formula a^2 / 3 = 3 implies a^2 = 9, so a = 3)"] },	
                correct: 0	
            },	
            {	
                en: { q: "A simple potentiometer wire system has length 4 m and resistance $8 \\, \\Omega$. If linked to a 2 V cell, the potential gradient along wire is:", opts: ["0.5 V/m", "1.0 V/m", "0.25 V/m", "2.0 V/m"] },	
                hi: { q: "एक सरल विभवमापी (Potentiometer) तार की लंबाई 4 m और प्रतिरोध $8 \\, \\Omega$ है। यदि इसे 2 V के सेल से जोड़ा जाए, तो तार के अनुदिश विभव प्रवणता (Potential gradient) होगी:", opts: ["0.5 V/m (Potential gradient V / L = 2V / 4m = 0.5 V/m)", "1.0 V/m", "0.25 V/m", "2.0 V/m"] },	
                correct: 0	
            },	
            {	
                en: { q: "The chemical transformation displaying a sudden functional shift of a ketone directly into an alcohol group via Zinc-amalgam and $HCl$ is:", opts: ["Clemmensen reduction", "Wolff-Kishner grid path", "Rosenmund reduction layout", "Stephen reduction sequence"] },	
                hi: { q: "जिंक अमलगम और सांद्र $HCl$ का उपयोग करके एक कीटोन को सीधे हाइड्रोकार्बन समूह (मेथिलीन समूह) में बदलने वाला रासायनिक प्रक्रम कहलाता है:", opts: ["क्लीमेंसन अपचयन (Clemmensen reduction format)", "वुल्फ-किश्नर ग्रिड पथ", "रोज़नमुंड अपचयन लेआउट", "स्टीफन अपचयन अनुक्रम"] },	
                correct: 0	
            },	
            {	
                en: { q: "If the distance between the two parallel planes given by equations $2x - y + 2z + 3 = 0$ and $4x - 2y + 4z + \\mu = 0$ is 1 unit, then $\\mu$ can be:", opts: ["9 or -3", "12 or -6", "3 or -9", "6 or -12"] },	
                hi: { q: "यदि समीकरणों $2x - y + 2z + 3 = 0$ और $4x - 2y + 4z + \\mu = 0$ द्वारा दिए गए दो समांतर समतलों के बीच की दूरी 1 इकाई है, तो $\\mu$ का मान हो सकता है:", opts: ["9 या -3", "12 या -6 (Rewriting first plane as 4x - 2y + 4z + 6 = 0; |6 - mu| / 6 = 1)", "3 या -9", "6 या -12"] },	
                correct: 1	
            },	
            {	
                en: { q: "An ideal gas expands isothermally from volume $V_1$ to $V_2$ inside a container. The change in the internal energy ($\\Delta U$) equals:", opts: ["Positive constant magnitude", "Negative scalar drops", "Zero absolute index units", "Infinite index accumulation"] },	
                hi: { q: "एक आदर्श गैस एक पात्र के भीतर समतापीय रूप से आयतन $V_1$ से $V_2$ तक प्रसारित होती है। इसकी आंतरिक ऊर्जा में परिवर्तन ($\\Delta U$) का मान होगा:", opts: ["धनात्मक नियत परिमाण", "ऋणात्मक अदिश गिरावट", "शून्य पूर्ण सूचकांक इकाइयाँ (Internal energy of ideal gas depends solely on temperature)", "अनंत सूचकांक संचय"] },	
                correct: 2	
            },	
            {	
                en: { q: "Which of the following liquid solutions exhibits a distinct negative deviation from Raoult's Law parameters?", opts: ["Ethanol and Acetone mixture", "Chloroform and Acetone mixture", "Benzene and Toluene layout", "Carbon tetrachloride and Methanol"] },	
                hi: { q: "निम्नलिखित द्रव विलयनों में से कौन सा राउल्ट के नियम के मापदंडों से स्पष्ट ऋणात्मक विचलन (Negative deviation) प्रदर्शित करता है?", opts: ["एथेनॉल और एसीटोन मिश्रण", "क्लोरोफॉर्म और एसीटोन मिश्रण (Due to strong inter-molecular hydrogen bonding between components)", "बेंजीन और टॉल्यूईन लेआउट", "कार्बन टेट्राक्लोराइड और मेथॉल"] },	
                correct: 1	
            },	
            {	
                en: { q: "The absolute coordinates of the focus point belonging to the hyperbola system layout equation $9x^2 - 16y^2 = 144$ are:", opts: ["(\\pm 3, 0)", "(\\pm 5, 0)", "(0, \\pm 5)", "(\\pm 4, 0)"] },	
                hi: { q: "अतिपरवलय समीकरण विन्यास $9x^2 - 16y^2 = 144$ के नाभि (Focus) के शुद्ध निर्देशांक क्या होंगे?", opts: ["(\\pm 3, 0)", "(\\pm 5, 0) (Standard hyperbola layout with a=4, b=3, giving e=5/4, focus = (+-ae, 0))", "(0, \\pm 5)", "(\\pm 4, 0)"] },	
                correct: 1	
            },	
            {	
                en: { q: "A metal block of density $\\rho$ floats in a liquid with $1/3$ of its total volume submerged. The density of the liquid medium is:", opts: ["$\\rho / 3$", "$2\\rho / 3$", "$3\\rho$", "$4\\rho$"] },	
                hi: { q: "घनत्व $\\rho$ का एक धातु का ब्लॉक एक द्रव में इस प्रकार तैरता है कि उसका $1/3$ भाग द्रव में डूबा रहता है। द्रव माध्यम का घनत्व क्या होगा?", opts: ["$\\rho / 3$", "$2\\rho / 3$", "$3\\rho$ (By principle of flotation: V * rho = (V/3) * rho_liquid)", "$4\\rho$"] },	
                correct: 2	
            },	
            {	
                en: { q: "The conversion path sequence that processes primary aliphatic alcohols into alkyl halides using thionyl chloride catalyst is named:", opts: ["Darzen's process framework", "Swarts substitution path", "Wurtz reaction matrix", "Hunsdiecker degradation tracks"] },	
                hi: { q: "थायोनिल क्लोराइड ($SOCl_2$) का उपयोग करके प्राथमिक एलिफैटिक अल्कोहल को एल्किल क्लोराइड में बदलने का सबसे उत्तम प्रक्रम कहलाता है:", opts: ["डार्जेन प्रक्रम ढांचा (Darzen's halogenation reaction template)", "स्वार्ट्स प्रतिस्थापन पथ", "वुर्ट्ज़ अभिक्रिया मैट्रिक्स", "हंसडीकर निम्नीकरण ट्रैक"] },	
                correct: 0	
            },	
            {	
                en: { q: "If $\\vec{a}, \\vec{b}, \\vec{c}$ are three non-coplanar vectors, then what is the scalar triple product value of $[\\vec{a}+\\vec{b} \\quad \\vec{b}+\\vec{c} \\quad \\vec{c}+\\vec{a}]$?", opts: ["0", "$[\\vec{a} \\quad \\vec{b} \\quad \\vec{c}]$", "$2 [\\vec{a} \\quad \\vec{b} \\quad \\vec{c}]$", "$3 [\\vec{a} \\quad \\vec{b} \\quad \\vec{c}]$"] },	
                hi: { q: "यदि $\\vec{a}, \\vec{b}, \\vec{c}$ तीन गैर-समतलीय वेक्टर हैं, तो अदिश त्रिक गुणनफल (Scalar triple product) $[\\vec{a}+\\vec{b} \\quad \\vec{b}+\\vec{c} \\quad \\vec{c}+\\vec{a}]$ का मान क्या होगा?", opts: ["0", "$[\\vec{a} \\quad \\vec{b} \\quad \\vec{c}]$", "$2 [\\vec{a} \\quad \\vec{b} \\quad \\vec{c}]$ (Standard property of scalar triple products)", "$3 [\\vec{a} \\quad \\vec{b} \\quad \\vec{c}]$"] },	
                correct: 2	
            },	
            {	
                en: { q: "A long straight wire carries current $I$. At distance $d$, magnetic field is $B$. At what distance does field drop down to value $B/3$?", opts: ["3 d", "9 d", "d / 3", "d / 9"] },	
                hi: { q: "एक लंबे सीधे तार में धारा $I$ प्रवाहित हो रही है। दूरी $d$ पर चुंबकीय क्षेत्र $B$ है। किस दूरी पर चुंबकीय क्षेत्र का मान घटकर $B/3$ रह जाएगा?", opts: ["3 d (Since field B is inversely proportional to distance d)", "9 d", "d / 3", "d / 9"] },	
                correct: 0	
            },	
            {	
                en: { q: "The chemical compound structure showing the lowest calculated boiling point trend index among the given hydride elements configuration is:", opts: ["$H_2O$", "$H_2S$", "$H_2Se$", "$H_2Te$"] },	
                hi: { q: "दिए गए हाइड्राइड तत्वों के विन्यास में से किस रासायनिक यौगिक का परिकलित क्वथनांक (Boiling point) सबसे कम होता है?", opts: ["$H_2O$", "$H_2S$ (Lacks hydrogen bonding and has smaller size/van der Waals forces than Se/Te)", "$H_2Se$", "$H_2Te$"] },	
                correct: 1	
            },	
            {	
                en: { q: "The numerical value of the definite calculus integral tracking limits $\\int_{0}^{1} \\frac{dx}{1 + x^2}$ is evaluated as:", opts: ["\\pi / 2", "\\pi / 4", "\\pi", "1"] },	
                hi: { q: "निश्चित समाकलन $\\int_{0}^{1} \\frac{dx}{1 + x^2}$ का परिकलित संख्यात्मक मान क्या होगा?", opts: ["\\pi / 2", "\\pi / 4 (Integration yields tan^-1(x), evaluated from 0 to 1 equals pi/4)", "\\pi", "1"] },	
                correct: 1	
            },	
            {	
                en: { q: "A target radio station broadcasts signal tracking configurations with wave frequency parameter 100 MHz. The wave wavelength matches:", opts: ["3 m", "30 m", "300 m", "0.3 m"] },	
                hi: { q: "एक रेडियो स्टेशन 100 MHz आवृत्ति की तरंगें प्रसारित करता है। इन तरंगों की तरंगदैर्ध्य (Wavelength) क्या होगी?", opts: ["3 m (Using relation lambda = c / nu -> 3x10^8 / 10^8 = 3 meters)", "30 m", "300 m", "0.3 m"] },	
                correct: 0	
            },	
            {	
                en: { q: "Which electronic configuration state pattern maps a transitional metal atom showing an oxidation potential status of +4 successfully?", opts: ["$Mn^{4+}$ layout", "$Cr^{3+}$ profile", "$Fe^{2+}$ matrix rows", "$Cu^{2+}$ format lines"] },	
                hi: { q: "कौन सा इलेक्ट्रॉनिक विन्यास संक्रमण धातु आयन की +4 ऑक्सीकरण अवस्था (Oxidation state) को सफलतापूर्वक प्रदर्शित करता है?", opts: ["$Mn^{4+}$ विन्यास (Manganese can easily reach +4 and +7 states)", "$Cr^{3+}$ प्रोफाइल", "$Fe^{2+}$ मैट्रिक्स पंक्तियाँ", "$Cu^{2+}$ प्रारूप लाइनें"] },	
                correct: 0	
            },	
            {	
                en: { q: "If the eccentricity parameter belonging to an ellipse structure layout satisfying formula scales down to zero, the layout is a:", opts: ["Perfect circle track", "Parabolic limit template", "Straight axis row line", "Rectangular hyperbola layout"] },	
                hi: { q: "यदि किसी दीर्घवृत्त (Ellipse) की उत्केन्द्रता (Eccentricity) घटकर शून्य हो जाती है, तो वह ज्यामिति किस रूप में बदल जाती है?", opts: ["पूर्ण वृत्त ट्रैक (A perfect circle setup where foci merge at the center)", "परवलयिक सीमा टेम्पलेट", "सीधी अक्ष पंक्ति रेखा", "समकोणीय अतिपरवलय लेआउट"] },	
                correct: 0	
            },	
            {	
                en: { q: "A target sound source has acoustic frequency $f$. If observer shifts directly away from source at speed $0.5v$, the observed frequency index is:", opts: ["$2f$", "$1.5f$", "$0.5f$", "$f$"] },	
                hi: { q: "एक ध्वनि स्रोत की आवृत्ति $f$ है। यदि प्रेक्षक स्रोत से दूर की ओर $0.5v$ (जहाँ $v$ ध्वनि वेग है) की चाल से गति करता है, तो आभासी आवृत्ति होगी:", opts: ["$2f$", "$1.5f$", "$0.5f$ (Using Doppler formula f' = f * [(v - 0.5v) / v] = 0.5f)", "$f$"] },	
                correct: 2	
            },	
            {	
                en: { q: "The unique chemical test used to identify presence of peptide bond linkage configurations inside a protein matrix solution layout is the:", opts: ["Biuret analytical test", "Barfoed reaction path", "Molisch carbohydrate test", "Ninhydrin profile rows"] },	
                hi: { q: "एक प्रोटीन समाधान के भीतर पेप्टाइड आबंध (Peptide bond) की उपस्थिति की पहचान करने के लिए उपयोग किया जाने वाला विशिष्ट रासायनिक परीक्षण है:", opts: ["बायूरेट विश्लेषणात्मक परीक्षण (Biuret test yields purple coordination complex with copper)", "बारफोर्ड अभिक्रिया पथ", "मोलिश कार्बोहाइड्रेट परीक्षण", "निनहाइड्रिन प्रोफाइल पंक्तियाँ"] },	
                correct: 0	
            },	
            {	
                en: { q: "The derivative of the function $f(x) = \\ln(\\sec x + \\tan x)$ with respect to independent variable $x$ evaluates to:", opts: ["$\\sec x$", "$\\tan x$", "$\\sec x + \\tan x$", "$\\frac{1}{\\sec x + \\tan x}$"] },	
                hi: { q: "स्वतंत्र चर $x$ के सापेक्ष फलन $f(x) = \\ln(\\sec x + \\tan x)$ का अवकलज (Derivative) किसके बराबर होगा?", opts: ["$\\sec x$ (Standard derivative result simplifying via basic trigonometric identities)", "$\\tan x$", "$\\sec x + \\tan x$", "$\\frac{1}{\\sec x + \\tan x}$"] },	
                correct: 0	
            },	
            {	
                en: { q: "An electric field lines system layout features a total net flux value equal to zero passing through a closed gaussian sphere. The net inside charge is:", opts: ["Positive constant", "Negative scalar", "Absolutely zero", "Infinite magnitude"] },	
                hi: { q: "गाउस के नियम के अनुसार यदि एक बंद गाउसीय सतह से गुजरने वाला कुल विद्युत फ्लक्स शून्य है, तो सतह के भीतर कुल आवेश (Net inside charge) होगा:", opts: ["धनात्मक नियत", "ऋणात्मक अदिश", "पूर्णतः शून्य (Net enclosed charge must be zero if total flux is zero)", "अनंत परिमाण"] },	
                correct: 2	
            },	
            {	
                en: { q: "Which chemical compound undergoes rapid racemization process mechanics during a nucleophilic substitution path via $S_N1$ mechanism?", opts: ["1-Chlorobutane", "2-Chlorobutane", "Chlorobenzene", "Methyl chloride lines"] },	
                hi: { q: "कौन सा रासायनिक यौगिक $S_N1$ क्रियाविधि द्वारा नाभिकरागी प्रतिस्थापन के दौरान तीव्र रेसमीकरण (Racemization) प्रदर्शित करता है?", opts: ["1-क्लोरोब्यूटेन", "2-क्लोरोब्यूटेन (Chiral substrate forming a planar carbocation intermediate)", "क्लोरोबेंजीन", "मेथिल क्लोराइड लाइनें"] },	
                correct: 1	
            },	
            {	
                en: { q: "The value of the definite integral limits tracking $\\int_{0}^{\\pi/4} \\tan x dx$ is computed as:", opts: ["1", "\\ln 2", "0.5 \\ln 2", "2 \\ln 2"] },	
                hi: { q: "निश्चित समाकलन $\\int_{0}^{\\pi/4} \\tan x dx$ का परिकलित मान क्या होगा?", opts: ["1", "\\ln 2", "0.5 \\ln 2 (Integration is ln|sec x|; evaluated from 0 to pi/4 yields ln(sqrt(2)) = 1/2 ln 2)", "2 \\ln 2"] },	
                correct: 2	
            },	
            // --- २२६ ते ३०० प्रश्नांचा संच (JEE Main & Advanced - Last 10 Years) ---	
            {	
                en: { q: "If $A$ is a square matrix of order 3 ऐसी कि $|A| = 4$, then what is the computed scalar matrix determinant value of $|\\text{adj}(2A)|$?", opts: ["16", "256", "1024", "4096"] },	
                hi: { q: "यदि $A$, कोटी 3 का एक वर्ग आव्यूह (Square matrix) है जिसके लिए $|A| = 4$ है, तो सारणिक $|\\text{adj}(2A)|$ का परिकलित मान क्या होगा?", opts: ["16", "256", "1024", "4096 (Using property: |adj(2A)| = |2A|^(3-1) = (2^3 * |A|)^2 = (8 * 4)^2 = 32^2 = 1024? Wait, (2^3 * 4)^2 = 32^2 = 1024. Let's trace carefully: |2A| = 2^3 * |A| = 8 * 4 = 32. Then |adj(2A)| = 32^(3-1) = 32^2 = 1024)"] },	
                correct: 2	
            },	
            {	
                en: { q: "A proton and an alpha particle are accelerated through the same potential difference $V$ from rest. What is the ratio of their de-Broglie wavelengths ($\\lambda_p : \\lambda_\\alpha$)?", opts: ["$1 : 1$", "$2 : 1$", "$\\sqrt{8} : 1$", "$1 : \\sqrt{8}$"] },	
                hi: { q: "एक प्रोटॉन और एक अल्फा कण को विराम अवस्था से समान विभवांतर $V$ द्वारा त्वरित किया जाता है। उनकी डी-ब्रोग्ली तरंगदैर्ध्यों का अनुपात ($\\lambda_p : \\lambda_\\alpha$) क्या होगा?", opts: ["$1 : 1$", "$2 : 1$", "$\\sqrt{8} : 1$ (Using formula lambda = h / sqrt(2mqV); ratio equals sqrt(m_alpha * q_alpha / (m_p * q_p)) = sqrt(4 * 2) = sqrt(8))", "$1 : \\sqrt{8}$"] },	
                correct: 2	
            },	
            {	
                en: { q: "Which of the following organic structures undergoes rapid aldol condensation when treated with a dilute alkaline solution?", opts: ["Benzaldehyde", "Formaldehyde", "Acetaldehyde", "Trimethylacetaldehyde"] },	
                hi: { q: "तनु क्षारीय विलयन (Dilute NaOH) के साथ उपचारित करने पर निम्नलिखित में से कौन सी कार्बनिक संरचना तीव्र एल्डोल संघनन (Aldol condensation) प्रदर्शित करती है?", opts: ["बेन्जैल्डिहाइड", "फॉर्मेल्डिहाइड", "एसीटैल्डिहाइड (Contains crucial alpha-hydrogen atoms necessary for enolate formation)", "ट्राइमेथिलएसीटैल्डिहाइड"] },	
                correct: 2	
            },	
            {	
                en: { q: "If the lines $\\frac{x-1}{2} = \\frac{y+1}{3} = \\frac{z-1}{4}$ and $\\frac{x-3}{1} = \\frac{y-k}{2} = \\frac{z}{1}$ intersect at a unique point, then the scalar value of $k$ equals:", opts: ["9/2", "2/9", "3/2", "2"] },	
                hi: { q: "यदि रेखाएं $\\frac{x-1}{2} = \\frac{y+1}{3} = \\frac{z-1}{4}$ और $\\frac{x-3}{1} = \\frac{y-k}{2} = \\frac{z}{1}$ एक बिंदु पर प्रतिच्छेद करती हैं, तो $k$ का मान क्या होगा?", opts: ["9/2 (Setting shortest distance determinant condition to zero yields k = 9/2)", "2/9", "3/2", "2"] },	
                correct: 0	
            },	
            {	
                en: { q: "A radioactive nucleus emits 3 alpha particles and 2 beta particles in sequence. The change in the atomic mass number ($A$) of the nucleus is:", opts: ["Decreases by 12", "Decreases by 6", "Decreases by 4", "Increases by 2"] },	
                hi: { q: "एक रेडियोधर्मी नाभिक अनुक्रम में 3 अल्फा कण और 2 बीटा कण उत्सर्जित करता है। नाभिक के द्रव्यमान संख्या ($A$) में होने वाला परिवर्तन क्या है?", opts: ["12 से घटता है (Each alpha emission drops mass A by 4; beta emission does not alter atomic mass number)", "6 से घटता है", "4 से घटता है", "2 से बढ़ता है"] },	
                correct: 0	
            },	
            {	
                en: { q: "The chemical reagent sequence that transforms an amide group directly into a primary amine with one less carbon atom is:", opts: ["Hoffmann bromamine pathway", "Gabriel phthalimide layout", "Friedel-Crafts reaction structure", "Cannizzaro reaction track"] },	
                hi: { q: "एक एमाइड समूह को सीधे एक कम कार्बन वाले प्राथमिक एमीन में बदलने वाला रासायनिक प्रक्रम कहलाता है:", opts: ["हाफमान ब्रोमामाइड निम्नीकरण (Hoffmann bromamide degradation via Br2 + KOH)", "गैब्रिएल थैलिमाइड लेआउट", "फ्रिडेल-क्राफ्ट्स अभिक्रिया संरचना", "कैनिज़ारो अभिक्रिया ट्रैक"] },	
                correct: 0	
            },	
            {	
                en: { q: "The term independent of $x$ in the binomial expansion tracking configuration of $(x^2 - \\frac{1}{x})^{9}$ is:", opts: ["84", "-84", "36", "-36"] },	
                hi: { q: "द्विपद प्रसार $(x^2 - \\frac{1}{x})^{9}$ में $x$ से स्वतंत्र पद (Term independent of x) का मान क्या होगा?", opts: ["84", "-84 (Using general term T_(r+1) = 9Cr * (x^2)^(9-r) * (-1/x)^r; setting power to 0 yields r=6, term is 9C6 = 84)", "36", "-36"] },	
                correct: 0	
            },	
            {	
                en: { q: "In a Young's Double Slit Experiment, if the separation between the slits is halved and distance to the screen is doubled, the fringe width becomes:", opts: ["Halved", "Doubled", "Four times", "Unchanged"] },	
                hi: { q: "यंग के द्वि-झिरी प्रयोग (YDSE) में, यदि झिरियों के बीच की दूरी आधी कर दी जाए और पर्दे की दूरी दोगुनी कर दी जाए, तो फ्रिंज चौड़ाई (Fringe width) हो जाएगी:", opts: ["आधी", "दोगुनी", "चार गुनी (Fringe width beta = lambda * D / d; shifting boundaries transforms index by 4x)", "अपरिवर्तित"] },	
                correct: 2	
            },	
            {	
                en: { q: "Which of the following gaseous configurations demonstrates an exceptionally high rate of ideal diffusion matching Graham's Law rules?", opts: ["$H_2$", "$He$", "$CH_4$", "$O_2$"] },	
                hi: { q: "ग्राहम के नियम के अनुसार निम्नलिखित में से कौन सी गैस विसरण (Diffusion) की उच्चतम दर प्रदर्शित करती है?", opts: ["$H_2$ (Lightest molecular weight implies faster molecular translation speed tracks)", "$He$", "$CH_4$", "$O_2$"] },	
                correct: 0	
            },	
            {	
                en: { q: "If $\\vec{a} = \\hat{i} + \\hat{j} + \\hat{k}$ and $\\vec{b} = \\hat{j} - \\hat{k}$, then a vector $\\vec{c}$ perpendicular to $\\vec{a}$ and coplanar with $\\vec{a}$ and $\\vec{b}$ satisfies:", opts: ["$2\\hat{i} - \\hat{j} - \\hat{k}$", "$-\\hat{i} + 2\\hat{j} - \\hat{k}$", "$2\\hat{i} + \\hat{j} - 3\\hat{k}$", "$-\\hat{i} - \\hat{j} + 2\\hat{k}$"] },	
                hi: { q: "यदि $\\vec{a} = \\hat{i} + \\hat{j} + \\hat{k}$ और $\\vec{b} = \\hat{j} - \\hat{k}$ हैं, तो एक वेक्टर $\\vec{c}$ जो $\\vec{a}$ के लंबवत है तथा $\\vec{a}$ और $\\vec{b}$ के साथ समतलीय है, होगा:", opts: ["$2\\hat{i} - \\hat{j} - \\hat{k}$ (Evaluating vector triple product (a x b) x a vector constraints)", "$-\\hat{i} + 2\\hat{j} - \\hat{k}$", "$2\\hat{i} + \\hat{j} - 3\\hat{k}$", "$-\\hat{i} - \\hat{j} + 2\\hat{k}$"] },	
                correct: 0	
            },	
            {	
                en: { q: "A parallel plate capacitor is charged and then disconnected from battery. If a dielectric slab is inserted between plates, stored energy:", opts: ["Increases", "Decreases", "Remains constant", "Becomes zero"] },	
                hi: { q: "एक समांतर प्लेट संधारित्र को आवेशित करके बैटरी से अलग कर दिया जाता है। यदि प्लेटों के बीच एक परावैद्युत पट्टिका (Dielectric slab) डाली जाती है, तो संचित ऊर्जा:", opts: ["बढ़ती है", "घटती है (Since charge Q remains constant, energy U = Q^2 / 2C drops as capacitance C scales up)", "स्थिर रहती है", "शून्य हो जाती है"] },	
                correct: 1	
            },	
            {	
                en: { q: "The primary chemical constituent formed when phenol is treated with Chloroform in presence of aqueous sodium hydroxide is:", opts: ["Salicylic acid", "Salicylaldehyde", "Acetophenone", "Benzoquinone"] },	
                hi: { q: "जलीय सोडियम हाइड्रॉक्साइड की उपस्थिति में फिनॉल को क्लोरोफॉर्म के साथ गर्म करने पर बनने वाला मुख्य रासायनिक उत्पाद क्या है?", opts: ["सेलिसिलिक अम्ल", "सेलिसिलैल्डिहाइड (Reimer-Tiemann reaction mechanism path forming ortho variant)", "एसीटोफिनोन", "बेन्जोक्विनोन"] },	
                correct: 1	
            },	
            {	
                en: { q: "The probability of getting a sum of 9 when two fair balanced dice are rolled simultaneously over a matrix surface is:", opts: ["1/9", "1/6", "1/12", "5/36"] },	
                hi: { q: "दो पासे एक साथ फेंकने पर उनके अंकों का योग 9 आने की प्रायिकता (Probability) क्या होगी?", opts: ["1/9 (Favorable pairs are (3,6), (4,5), (5,4), (6,3); 4/36 reduces directly to 1/9)", "1/6", "1/12", "5/36"] },	
                correct: 0	
            },	
            {	
                en: { q: "An alternating current circuit setup contains an inductance $L$ and resistance $R$ linked to frequency $\\omega$. The phase power factor is:", opts: ["$R / \\sqrt{R^2 + \\omega^2L^2}$", "$\\omega L / R$", "$R / \\omega L$", "$\\sqrt{R^2 + \\omega^2L^2} / R$"] },	
                hi: { q: "एक प्रत्यावर्ती धारा (AC) परिपथ में केवल प्रेरकत्व $L$ और प्रतिरोध $R$ श्रेणीक्रम में जुड़े हैं। इस परिपथ का शक्ति गुणांक (Power factor) क्या होगा?", opts: ["$R / \\sqrt{R^2 + \\omega^2L^2}$ (Power factor cos(phi) = R / Z expression profile)", "$\\omega L / R$", "$R / \\omega L$", "$\\sqrt{R^2 + \\omega^2L^2} / R$"] },	
                correct: 0	
            },	
            {	
                en: { q: "Which of the following statements represents a correct oxidation behavior pattern classification for an aqueous $KMnO_4$ solution setup?", opts: ["Acts as a strong reducing agent", "Oxidizes oxalic acid in acidic medium", "Reduces iron states inside solutions", "Stable color index indicator across zero limits"] },	
                hi: { q: "जलीय $KMnO_4$ विलयन के लिए निम्नलिखित में से कौन सा ऑक्सीकरण व्यवहार पैटर्न कथन पूरी तरह से सही है?", opts: ["एक मजबूत अपचायक के रूप में कार्य करता है", "अम्लीय माध्यम में ऑक्जेलिक अम्ल को ऑक्सीकृत करता है (Converts oxalate ions directly into carbon dioxide gas channels)", "विलयन के भीतर आयरन अवस्थाओं को अपचयित करता है", "शून्य सीमाओं पर स्थिर रंग सूचकांक संकेतक"] },	
                correct: 1	
            },	
            {	
                en: { q: "The value of the limit evaluation sequence constraint mapping $\\lim_{x \\to 0} \\frac{e^{2x} - 1}{\\ln(1 + x)}$ evaluates to:", opts: ["1", "2", "0", "Infinite limit"] },	
                hi: { q: "सीमा मूल्यांकन संबंध $\\lim_{x \\to 0} \\frac{e^{2x} - 1}{\\ln(1 + x)}$ का शुद्ध मान क्या होगा?", opts: ["1", "2 (Applying L'Hopital's rule directly yields 2/1 matching output)", "0", "अनंत सीमा"] },	
                correct: 1	
            },	
            {	
                en: { q: "A light beam hits an interface boundary at polarizing angle $60^{\\circ}$. The refractive index value calculated for the reflective medium matches:", opts: ["1.5", "$\\sqrt{3}$", "$1 / \\sqrt{3}$", "1.33"] },	
                hi: { q: "एक प्रकाश किरण किसी माध्यम की सतह पर ध्रुवण कोण (Polarizing angle) $60^{\\circ}$ पर आपतित होती है। ब्रूस्टर के नियम के अनुसार माध्यम का अपवर्तनांक होगा:", opts: ["1.5", "$\\sqrt{3}$ (Using Brewster's Law equation mu = tan(i_p) = tan(60) = sqrt(3))", "$1 / \\sqrt{3}$", "1.33"] },	
                correct: 1	
            },	
            {	
                en: { q: "The extraction of silver from its argentite ore matrix layout configuration via sodium cyanide solution is an example of:", opts: ["Leaching extraction chemistry", "Roasting processing grid", "Smelting furnace track", "Zone refining matrix path"] },	
                hi: { q: "सोडियम साइनाइड विलयन का उपयोग करके अर्जेंटाइट अयस्क से चांदी का निष्कर्षण किस प्रक्रम का उदाहरण है?", opts: ["निक्षालन निष्कर्षण रसायन (MacArthur-Forrest cyano leaching process framework)", "भर्जन प्रसंस्करण ग्रिड", "प्रगलन भट्टी ट्रैक", "क्षेत्र परिष्करण मैट्रिक्स पथ"] },	
                correct: 0	
            },	
            {	
                en: { q: "If the differential tracking layout statement satisfies $\\frac{dy}{dx} + y = e^{-x}$ with $y(0)=0$, the particular solution equation equals:", opts: ["$y = x e^{-x}$", "$y = e^{-x}$", "$y = x^2 e^{-x}$", "$y = -x e^{-x}$"] },	
                hi: { q: "यदि अवकल समीकरण $\\frac{dy}{dx} + y = e^{-x}$ को $y(0)=0$ के साथ हल किया जाए, तो इसका विशिष्ट हल क्या होगा?", opts: ["$y = x e^{-x}$ (Integrating factor is e^x; evaluating yields y * e^x = x + C; C=0)", "$y = e^{-x}$", "$y = x^2 e^{-x}$", "$y = -x e^{-x}$"] },	
                correct: 0	
            },	
            {	
                en: { q: "An electron falls from energy orbit status $n=3$ to ground state $n=1$ inside Hydrogen. The total count of possible spectral emission lines is:", opts: ["1", "2", "3", "6"] },	
                hi: { q: "हाइड्रोजन परमाणु में एक इलेक्ट्रॉन ऊर्जा स्तर $n=3$ से मूल स्तर $n=1$ में संक्रमण करता है। उत्सर्जित होने वाली संभावित स्पेक्ट्रमी रेखाओं (Spectral lines) की कुल संख्या होगी:", opts: ["1", "2", "3 (Using line summation formula N = n(n-1)/2 which maps to 3*2/2 = 3 lines)", "6"] },	
                correct: 2	
            },	
            {	
                en: { q: "Which of the following polymers is classified strictly as a thermosetting plastic material variant configuration?", opts: ["Polyvinyl chloride", "Nylon-6,6 structure", "Bakelite resin layout", "Polystyrene grid rows"] },	
                hi: { q: "निम्नलिखित बहुलकों (Polymers) में से किसे मुख्य रूप से एक तापदृढ़ प्लास्टिक (Thermosetting plastic) सामग्री के रूप में वर्गीकृत किया गया है?", opts: ["पॉलीविनाइल क्लोराइड", "नायलॉन-6,6 संरचना", "बेकेलाइट रेजिन लेआउट (Cross-linked polymer structure that hardens permanently upon heating)", "पॉलीस्टायरीन ग्रिड पंक्तियाँ"] },	
                correct: 2	
            },	
            {	
                en: { q: "The variance metric belonging to the first $n$ consecutive natural numbers calculated via standard statistical rows matches:", opts: ["$(n^2 - 1) / 12$", "$(n^2 + 1) / 12$", "$n(n+1) / 2$", "$(n-1)^2 / 4$"] },	
                hi: { q: "प्रथम $n$ प्राकृत संख्याओं के लिए परिकलित प्रसरण (Variance) का सही सांख्यिकीय सूत्र क्या होता है?", opts: ["$(n^2 - 1) / 12$ (Standard algebraic dispersion identity matching distribution layouts)", "$(n^2 + 1) / 12$", "$n(n+1) / 2$", "$(n-1)^2 / 4$"] },	
                correct: 0	
            },	
            {	
                en: { q: "A step-up transformer system scales input voltage index from 110 V to 220 V. If turn ratio matches $N_s/N_p$, the index rating scales by:", opts: ["0.5", "2.0", "4.0", "1.0"] },	
                hi: { q: "एक स्टेप-अप ट्रांसफार्मर इनपुट वोल्टेज को 110 V से 220 V में बदलता है। इस ट्रांसफार्मर के लिए फेरों का अनुपात ($N_s/N_p$) क्या होगा?", opts: ["0.5", "2.0 (Transformer ratio equation states V_s / V_p = N_s / N_p equals 2)", "4.0", "1.0"] },	
                correct: 1	
            },	
            {	
                en: { q: "The chemical element layout exhibiting the highest atomicity count configuration pattern naturally in its structural matrix row is:", opts: ["Phosphorus ($P$)", "Sulfur ($S$)", "Oxygen ($O$)", "Nitrogen ($N$)"] },	
                hi: { q: "अपने प्राकृतिक संरचनात्मक रूप में उच्चतम परमाणुकता (Atomicity) प्रदर्शित करने वाला तत्व कौन सा है?", opts: ["फॉस्फोरस ($P$)", "सल्फर ($S$ - Exists naturally as a crown-shaped S8 octatomic ring system template)", "ऑक्सीजन ($O$)", "नाइट्रोजन ($N$)"] },	
                correct: 1	
            },	
            {	
                en: { q: "The scalar evaluation index calculated for the vector cross system product $|\\vec{a} \\times \\vec{b}|^2 + (\\vec{a} \\cdot \\vec{b})^2$ yields exact match with:", opts: ["$a^2 b^2$", "Zero constant", "$2 a^2 b^2$", "$a^2 + b^2$"] },	
                hi: { q: "वेक्टर ज्यामिति संबंध $|\\vec{a} \\times \\vec{b}|^2 + (\\vec{a} \\cdot \\vec{b})^2$ का सरलतम सरलीकृत मान किसके बराबर होगा?", opts: ["$a^2 b^2$ (Lagrange's identity tracking system layout formats directly)", "शून्य नियत", "$2 a^2 b^2$", "$a^2 + b^2$"] },	
                correct: 0	
            },	
            // --- ३०१ ते ३७५ प्रश्नांचा संच (JEE Main & Advanced - Chapter-wise Special) ---	
            {	
                en: { q: "If $\\lim_{x \\to 0} \\frac{\\cos(\\sin x) - 1}{x^2} = L$, then the absolute evaluation of scalar limit index $L$ matches:", opts: ["0", "-1/2", "1/2", "1"] },	
                hi: { q: "यदि $\\lim_{x \\to 0} \\frac{\\cos(\\sin x) - 1}{x^2} = L$ है, तो अदिश सीमा सूचकांक $L$ का शुद्ध मान क्या होगा?", opts: ["0", "-1/2 (Using expansion or L'Hopital's rule, cos(t)-1 approx -t^2/2)", "1/2", "1"] },	
                correct: 1	
            },	
            {	
                en: { q: "A particle of mass $m$ is attached to a vertical spring of spring constant $k$. If it is dropped from rest at natural length, maximum extension is:", opts: ["mg / k", "2mg / k", "mg / 2k", "4mg / k"] },	
                hi: { q: "द्रव्यमान $m$ का एक कण स्प्रिंग नियतांक $k$ की एक ऊर्ध्वाधर स्प्रिंग से जुड़ा है। यदि इसे प्राकृतिक लंबाई से विराम अवस्था से छोड़ा जाए, तो अधिकतम विस्तार (Extension) होगा:", opts: ["mg / k", "2mg / k (By conservation of energy: mgx = 1/2 k x^2 yields x = 2mg/k)", "mg / 2k", "4mg / k"] },	
                correct: 1	
            },	
            {	
                en: { q: "Which of the following elements has the electronic configuration mapping strictly an exception to the Aufbau principle sequence?", opts: ["Iron ($Fe$)", "Chromium ($Cr$)", "Nickel ($Ni$)", "Manganese ($Mn$)"] },	
                hi: { q: "निम्नलिखित में से किस तत्व का इलेक्ट्रॉनिक विन्यास औफ्बाउ नियम (Aufbau principle) के क्रम का स्पष्ट अपवाद है?", opts: ["आयरन ($Fe$)", "क्रोमियम ($Cr$ - Has [Ar] 3d^5 4s^1 instead of 3d^4 4s^2 due to half-filled stability)", "निकेल ($Ni$)", "मैंगनीज ($Mn$)"] },	
                correct: 1	
            },	
            {	
                en: { q: "The total number of real roots belonging to the algebraic equation system layout $x^2 - 3|x| + 2 = 0$ is exactly:", opts: ["2", "4", "1", "0"] },	
                hi: { q: "बीजगणितीय समीकरण विन्यास $x^2 - 3|x| + 2 = 0$ के वास्तविक मूलों (Real roots) की कुल संख्या कितनी होगी?", opts: ["2", "4 (Since |x| can be 1 or 2, x yields four separate roots: +1, -1, +2, -2)", "1", "0"] },	
                correct: 1	
            },	
            {	
                en: { q: "A circular disc of mass $M$ and radius $R$ has a moment of inertia about an axis tangent to its rim and coplanar with the disc equal to:", opts: ["(1/2) M R^2", "3/2 M R^2", "5/4 M R^2", "7/4 M R^2"] },	
                hi: { q: "द्रव्यमान $M$ और त्रिज्या $R$ की एक वृत्ताकार डिस्क का उसके अपने ही तल में स्थित और रिम (Rim) को स्पर्श करने वाली अक्ष के परितः जड़त्व आघूर्ण (Moment of inertia) क्या होगा?", opts: ["(1/2) M R^2", "3/2 M R^2", "5/4 M R^2 (Using parallel axis theorem: I_diameter + M R^2 = 1/4 M R^2 + M R^2)", "7/4 M R^2"] },	
                correct: 2	
            },	
            {	
                en: { q: "The fundamental gas chemical reaction formula mapping an industrial production setup for Nitric acid is named:", opts: ["Haber's process framework", "Ostwald's process pattern", "Contact channel method", "Solvay synthesis matrix"] },	
                hi: { q: "नाइट्रिक अम्ल ($HNO_3$) के औद्योगिक निर्माण (Industrial production) के लिए उपयोग किए जाने वाले प्रक्रम का नाम क्या है?", opts: ["हैबर प्रक्रम ढांचा", "ओस्टवाल्ड प्रक्रम पैटर्न (Ostwald's catalytic oxidation of ammonia method)", "सम्पर्क चैनल विधि", "सॉल्वे संश्लेषण मैट्रिक्स"] },	
                correct: 1	
            },	
            {	
                en: { q: "If the position vectors of points $A$ and $B$ are $\\hat{i} - 2\\hat{j} + 3\\hat{k}$ and $3\\hat{i} + 4\\hat{j} - \\hat{k}$, then what is the midpoint vector coordinate layout?", opts: ["$2\\hat{i} + \\hat{j} + \\hat{k}$", "$4\\hat{i} + 2\\hat{j} + 2\\hat{k}$", "$2\\hat{i} + 2\\hat{j} + 2\\hat{k}$", "$\\hat{i} + 3\\hat{j} - 2\\hat{k}$"] },	
                hi: { q: "यदि बिंदुओं $A$ और $B$ के स्थिति वेक्टर क्रमशः $\\hat{i} - 2\\hat{j} + 3\\hat{k}$ और $3\\hat{i} + 4\\hat{j} - \\hat{k}$ हैं, तो मध्यबिंदु (Midpoint) का स्थिति वेक्टर क्या होगा?", opts: ["$2\\hat{i} + \\hat{j} + \\hat{k}$ (Using vector midpoint formula (A + B) / 2)", "$4\\hat{i} + 2\\hat{j} + 2\\hat{k}$", "$2\\hat{i} + 2\\hat{j} + 2\\hat{k}$", "$\\hat{i} + 3\\hat{j} - 2\\hat{k}$"] },	
                correct: 0	
            },	
            {	
                en: { q: "A tuning fork produces 4 beats per second with another fork of frequency 256 Hz. When loaded with wax, beat frequency decreases. Target index is:", opts: ["260 Hz", "252 Hz", "258 Hz", "254 Hz"] },	
                hi: { q: "एक स्वरित्र (Tuning fork) 256 Hz आवृत्ति के दूसरे स्वरित्र के साथ प्रति सेकंड 4 विस्पंद (Beats) उत्पन्न करता है। जब पहले स्वरित्र पर मोम लगाया जाता है, तो विस्पंद आवृत्ति घटती है। पहले स्वरित्र की मूल आवृत्ति क्या है?", opts: ["260 Hz (Loading with wax decreases frequency; original must be 256 + 4 = 260)", "252 Hz", "258 Hz", "254 Hz"] },	
                correct: 0	
            },	
            {	
                en: { q: "The chemical structural layout which yields a positive test during an alkaline Iodoform reaction tracking profile is:", opts: ["Methanol alcohol line", "Ethanol alcohol line", "Diethyl ether matrix", "Benzene ring structural paths"] },	
                hi: { q: "निम्नलिखित में से कौन सा रासायनिक यौगिक क्षारीय आयोडोफॉर्म परीक्षण (Iodoform test) में धनात्मक परिणाम देता है?", opts: ["मेथॉल अल्कोहल लाइन", "एथेनॉल अल्कोहल लाइन (Contains CH3-CH(OH)- group, which oxidizes to yield a methyl ketone format)", "डाईएथिल ईथर मैट्रिक्स", "बेंजीन वलय संरचनात्मक पथ"] },	
                correct: 1	
            },	
            {	
                en: { q: "If the matrix row calculation satisfies equation $A^3 = I$, then the scalar definition determinant value $|A|$ equals exactly:", opts: ["1", "3", "0", "9"] },	
                hi: { q: "यदि आव्यूह समीकरण विन्यास $A^3 = I$ संबंध को संतुष्ट करता है, तो सारणिक (Determinant) $|A|$ का शुद्ध मान क्या होगा?", opts: ["1 (Taking determinant on both sides: |A|^3 = |I| = 1 implies |A| = 1)", "3", "0", "9"] },	
                correct: 0	
            },	
            {	
                en: { q: "A soap bubble of radius $r$ is blown inside air (surface tension $T$). The excess internal pressure inside the bubble corresponds to:", opts: ["2T / r", "4T / r", "T / r", "8T / r"] },	
                hi: { q: "हवा में त्रिज्या $r$ का एक साबुन का बुलबुला (Soap bubble) बनाया जाता है (पृष्ठ तनाव $T$ है)। बुलबुले के भीतर आधिक्य दाब (Excess pressure) का सूत्र क्या होगा?", opts: ["2T / r", "4T / r (Soap bubbles have two free surface boundaries, doubling excess index calculations)", "T / r", "8T / r"] },	
                correct: 1	
            },	
            {	
                en: { q: "The crystalline solid system configuration matching exactly with a classic network covalent solid material framework layout is:", opts: ["Sodium chloride ($NaCl$)", "Silicon carbide ($SiC$)", "Dry ice solid carbon matrix", "Ice water crystalline setup"] },	
                hi: { q: "निम्नलिखित में से कौन सा क्रिस्टलीय ठोस पदार्थ एक सहसंयोजक नेटवर्क ठोस (Covalent network solid) का उत्कृष्ट उदाहरण है?", opts: ["सोडियम क्लोराइड ($NaCl$)", "सिलिकॉन कार्बाइड ($SiC$ - Forms diamond-like giant network macro-structures)", "शुष्क बर्फ ठोस कार्बन मैट्रिक्स", "बर्फ जल क्रिस्टलीय सेटअप"] },	
                correct: 1	
            },	
            {	
                en: { q: "The sum of all coefficients inside the binomial distribution layout configuration expansion of $(x + y)^{10}$ evaluates to:", opts: ["100", "512", "1024", "2048"] },	
                hi: { q: "द्विपद प्रसार $(x + y)^{10}$ के सभी गुणांकों का कुल योग (Sum of all coefficients) कितना होगा?", opts: ["100", "512", "1024 (Substituting variable indices x=1, y=1 directly yields 2^10 = 1024)", "2048"] },	
                correct: 2	
            },	
            {	
                en: { q: "An electric dipole inside a uniform electric field $E$ feels maximum torque when angle between dipole moment and field matches:", opts: ["Zero degrees", "45 degrees", "90 degrees", "180 degrees"] },	
                hi: { q: "एक समरूप विद्युत क्षेत्र $E$ में रखे विद्युत द्विध्रुव पर अधिकतम बल-आघूर्ण (Maximum torque) तब लगता है, जब द्विध्रुव आघूर्ण और क्षेत्र के बीच का कोण हो:", opts: ["शून्य डिग्री", "45 डिग्री", "90 डिग्री (Torque tau = p * E * sin(theta); maximum at sin(90) = 1)", "180 डिग्री"] },	
                correct: 2	
            },	
            {	
                en: { q: "Which chemical reagent converts an alkene directly into a cis-1,2-diol structure layout without altering carbon rows?", opts: ["Cold alkaline $KMnO_4$", "Acidified $K_2Cr_2O_7$", "$O_3$ zinc dust track", "$LiAlH_4$ matrix solvent"] },	
                hi: { q: "कौन सा रासायनिक अभिकर्मक एक एल्कीन को सीधे cis-1,2-डायल (Cis-diol) संरचना में परिवर्तित कर देता है?", opts: ["ठंडा क्षारीय $KMnO_4$ (Baeyer's reagent provides syn-hydroxylation)", "अम्लीय $K_2Cr_2O_7$", "$O_3$ जिंक डस्ट ट्रैक", "$LiAlH_4$ मैट्रिक्स विलायक"] },	
                correct: 0	
            },	
            {	
                en: { q: "If the standard tracking lines matrix expression matches $\\int \\sqrt{a^2 - x^2} dx = f(x) + C$, then $f(x)$ matches:", opts: ["$\\frac{x}{2}\\sqrt{a^2-x^2} + \\frac{a^2}{2}\\sin^{-1}(\\frac{x}{a})$", "$\\frac{x}{2}\\sqrt{a^2-x^2} - \\frac{a^2}{2}\\sin^{-1}(\\frac{x}{a})$", "$x\\sqrt{a^2-x^2} + a^2\\sin^{-1}(\\frac{x}{a})$", "$\\frac{x}{2}\\sqrt{a^2-x^2} + \\frac{a}{2}\\sin^{-1}(\\frac{x}{a})$"] },	
                hi: { q: "यदि मानक समाकलन संबंध $\\int \\sqrt{a^2 - x^2} dx = f(x) + C$ है, तो फलन $f(x)$ का सही मान क्या होगा?", opts: ["$\\frac{x}{2}\\sqrt{a^2-x^2} + \\frac{a^2}{2}\\sin^{-1}(\\frac{x}{a})$ (Standard trigonometric integration identity structure)", "$\\frac{x}{2}\\sqrt{a^2-x^2} - \\frac{a^2}{2}\\sin^{-1}(\\frac{x}{a})$", "$x\\sqrt{a^2-x^2} + a^2\\sin^{-1}(\\frac{x}{a})$", "$\\frac{x}{2}\\sqrt{a^2-x^2} + \\frac{a}{2}\\sin^{-1}(\\frac{x}{a})$"] },	
                correct: 0	
            },	
            {	
                en: { q: "A sample gas volume expands across path where pressure parameter is inversely proportional to volume squared. Bulk modulus is:", opts: ["P", "2 P", "3 P", "Zero constant"] },	
                hi: { q: "एक गैस नमूने का आयतन इस प्रकार बढ़ता है कि उसका दाब उसके आयतन के वर्ग के व्युत्क्रमानुपाती ($P \\propto 1/V^2$) रहता है। गैस का आयतन प्रत्यास्थता गुणांक (Bulk modulus) क्या होगा?", opts: ["P", "2 P (Using polytropic index expression tracks where Bulk Modulus maps directly to nP format)", "3 P", "शून्य नियत"] },	
                correct: 1	
            },	
            {	
                en: { q: "The coordination geometry structure displaying an hybridization format matching strictly $dsp^2$ geometry layout is:", opts: ["$[Ni(Cl)_4]^{2-}$", "$[Ni(CN)_4]^{2-}$", "$[Fe(Cl)_4]^{-}$", "$[Co(F)_6]^{3-}$"] },	
                hi: { q: "निम्नलिखित उपसहसंयोजन विन्यासों में से कौन सा $dsp^2$ संकरण (Hybridization) और समतल वर्गाकार (Square planar) ज्यामिति प्रदर्शित करता है?", opts: ["$[Ni(Cl)_4]^{2-}$", "$[Ni(CN)_4]^{2-}$ (CN- is a strong field ligand, forcing pairing of d electrons in nickel)", "$[Fe(Cl)_4]^{-}$", "$[Co(F)_6]^{3-}$"] },	
                correct: 1	
            },	
            {	
                en: { q: "The perpendicular distance from origin to coordinate plane boundary represented by equation $2x + 3y - 6z + 14 = 0$ is:", opts: ["2 units", "14 units", "7 units", "4 units"] },	
                hi: { q: "मूल बिंदु (Origin) से समतल समीकरण $2x + 3y - 6z + 14 = 0$ की लंबवत दूरी कितनी होगी?", opts: ["2 इकाई (Using distance formula d = |D| / sqrt(A^2 + B^2 + C^2) = 14 / sqrt(4+9+36) = 14/7)", "14 इकाई", "7 इकाई", "4 इकाई"] },	
                correct: 0	
            },	
            {	
                en: { q: "A standard alternating voltage source is given by $V = 100 \\sin(100t)$. The calculated root-mean-square (RMS) voltage value is:", opts: ["100 V", "50 V", "50 \\sqrt{2} V", "200 V"] },	
                hi: { q: "एक मानक प्रत्यावर्ती वोल्टेज स्रोत का समीकरण $V = 100 \\sin(100t)$ है। इसका वर्ग-माध्य-मूल (RMS) वोल्टेज मान क्या होगा?", opts: ["100 V", "50 V", "50 \\sqrt{2} V (Using formula V_rms = V_max / sqrt(2) = 100 / sqrt(2) = 50 * sqrt(2))", "200 V"] },	
                correct: 2	
            },	
            {	
                en: { q: "Which chemical compound undergoes a clean nucleophilic addition mechanism swiftly when reacting with Hydrogen cyanide?", opts: ["Propanone ketone rows", "Ethyl chloride lines", "Benzene liquid matrix", "Ethanol alcohol track"] },	
                hi: { q: "कौन सा रासायनिक यौगिक हाइड्रोजन साइनाइड ($HCN$) के साथ तीव्र नाभिकरागी योगात्मक (Nucleophilic addition) अभिक्रिया प्रदर्शित करता है?", opts: ["प्रोपेनोन कीटोन पंक्तियाँ (Carbonyl carbons have localized electropositive delta charges open to nucleophiles)", "एथिल क्लोराइड लाइनें", "बेंजीन द्रव मैट्रिक्स", "एथेनॉल अल्कोहल ट्रैक"] },	
                correct: 0	
            },	
            {	
                en: { q: "The probability tracking profile of rolling a total sum of 7 across two standard balanced dice tracking lines is computed as:", opts: ["1/6", "5/36", "1/12", "7/36"] },	
                hi: { q: "दो मानक पासों को फेंकने पर उनके अंकों का योग 7 आने की सही प्रायिकता (Probability) क्या होगी?", opts: ["1/6 (Favorable pairs are (1,6), (2,5), (3,4), (4,3), (5,2), (6,1); 6/36 reduces to 1/6)", "5/36", "1/12", "7/36"] },	
                correct: 0	
            },	
            {	
                en: { q: "A localized magnetic field flux boundary loop changes flux parameters from 10 Wb to 2 Wb in 2 seconds. Induced EMF equals:", opts: ["4 V", "8 V", "5 V", "16 V"] },	
                hi: { q: "एक बंद लूप से गुजरने वाला चुंबकीय फ्लक्स 2 सेकंड में 10 Wb से बदलकर 2 Wb हो जाता है। लूप में प्रेरित विद्युत वाहक बल (Induced EMF) क्या होगा?", opts: ["4 V (According to Faraday's law: EMF = - dPhi / dt = (10 - 2) / 2 = 8 / 2 = 4 Volts)", "8 V", "5 V", "16 V"] },	
                correct: 0	
            },	
            {	
                en: { q: "The parameter index configuration defining the dynamic standard cell potential of a dead discharged concentration battery is:", opts: ["Positive value constant", "Negative index drops", "Exactly absolute zero", "Infinite vector magnitude"] },	
                hi: { q: "पूर्णतः डिस्चार्ज हो चुकी (Dead battery) सेल के लिए सेल विभव ($E_{cell}$) का मान कितना होता है?", opts: ["धनात्मक मान नियत", "ऋणात्मक सूचकांक गिरावट", "पूर्णतः शून्य (At thermodynamic equilibrium, cell electrical potential drops to absolute zero)", "अनंत वेक्टर परिमाण"] },	
                correct: 2	
            },	
            {	
                en: { q: "If the vector matrices trace paths satisfy the loop configuration constraint equation $\\vec{a} \\cdot \\vec{b} = |\\vec{a} \\times \\vec{b}|$, the angle between vectors matches:", opts: ["$\\pi / 4$", "$\\pi / 2$", "Zero constant", "$\\pi$"] },	
                hi: { q: "यदि दो वेक्टरों के बीच संबंध $\\vec{a} \\cdot \\vec{b} = |\\vec{a} \\times \\vec{b}|$ को संतुष्ट करता है, तो उनके बीच का कोण क्या होगा?", opts: ["$\\pi / 4$ (Equating ab cos(theta) = ab sin(theta) implies tan(theta) = 1, so angle is 45 degrees)", "$\\pi / 2$", "शून्य नियत", "$\\pi$"] },	
                correct: 0	
            },	
            // --- ३७६ ते ४५० प्रश्नांचा संच (JEE Main & Advanced - Chapter-wise Special) ---	
            {	
                en: { q: "If $f(x) = \\int_{0}^{x} t \\sin t \\, dt$, then the exact value of the derivative function $f'( \\pi / 2 )$ is:", opts: ["\\pi / 2", "1", "0", "-\\pi / 2"] },	
                hi: { q: "यदि $f(x) = \\int_{0}^{x} t \\sin t \\, dt$ है, तो अवकलज फलन $f'( \\pi / 2 )$ का शुद्ध मान क्या होगा?", opts: ["\\pi / 2 (Using Leibniz rule, differentiating the integral directly yields f'(x) = x sin x)", "1", "0", "-\\pi / 2"] },	
                correct: 0	
            },	
            {	
                en: { q: "A charged particle moves through a region of space containing crossed uniform electric field $E$ and magnetic field $B$ without deflection. The speed must be:", opts: ["E / B", "B / E", "E B", "1 / (E B)"] },	
                hi: { q: "एक आवेशित कण बिना किसी विक्षेपण (Deflection) के एक ऐसे क्षेत्र से गुजरता है जहाँ समरूप विद्युत क्षेत्र $E$ और चुंबकीय क्षेत्र $B$ परस्पर लंबवत हैं। कण की चाल क्या होगी?", opts: ["E / B (Velocity selector condition: electric force qE matches magnetic force qvB)", "B / E", "E B", "1 / (E B)"] },	
                correct: 0	
            },	
            {	
                en: { q: "Which of the following nitrogenous organic bases is strictly absent inside a standard structural DNA molecule matrix framework?", opts: ["Adenine", "Guanine", "Cytosine", "Uracil"] },	
                hi: { q: "निम्नलिखित में से कौन सा नाइट्रोजनयुक्त कार्बनिक क्षार एक मानक DNA अणु की संरचना में पूर्णतः अनुपस्थित होता है?", opts: ["ऐडेनिन", "गुआनिन", "साइटोसिन", "यूरैसेिल (Uracil is exclusively found inside RNA molecular sequences instead of DNA)"] },	
                correct: 3	
            },	
            {	
                en: { q: "The absolute values of $x$ satisfying the matrix equation system constraint $\\begin{vmatrix} x & 2 \\\\ 2 & x \\end{vmatrix} = 0$ corresponds to:", opts: ["\\pm 2", "\\pm 4", "0", "\\pm 1"] },	
                hi: { q: "सारणिक समीकरण संबंध $\\begin{vmatrix} x & 2 \\\\ 2 & x \\end{vmatrix} = 0$ को संतुष्ट करने वाले $x$ के वास्तविक मान क्या होंगे?", opts: ["\\pm 2 (Expanding the 2x2 determinant yields x^2 - 4 = 0, which directly gives x = +-2)", "\\pm 4", "0", "\\pm 1"] },	
                correct: 0	
            },	
            {	
                en: { q: "A magnetic needle placed inside a non-uniform magnetic field experiences which of the following mechanical force systems?", opts: ["A force only", "A torque only", "Both a force and a torque", "Neither a force nor a torque"] },	
                hi: { q: "एक असमान (Non-uniform) चुंबकीय क्षेत्र में रखी गई चुंबकीय सुई निम्नलिखित में से किसका अनुभव करती है?", opts: ["केवल एक बल का", "केवल एक बल-आघूर्ण का", "एक बल और एक बल-आघूर्ण दोनों का (Net translational force is non-zero along with rotational alignment loops)", "न तो बल और न ही बल-आघूर्ण का"] },	
                correct: 2	
            },	
            {	
                en: { q: "The catalytic compound sequence used inside the industrial manufacturing layout of sulfuric acid via Contact Process is:", opts: ["Finely divided Iron ($Fe$)", "Vanadium pentoxide ($V_2O_5$)", "Platinized asbestos vapor", "Nickel matrix catalyst"] },	
                hi: { q: "सम्पर्क प्रक्रम (Contact Process) द्वारा सल्फ्यूरिक अम्ल के औद्योगिक निर्माण में उपयोग किया जाने वाला मुख्य उत्प्रेरक कौन सा है?", opts: ["सूक्ष्म विभाजित आयरन ($Fe$)", "वेनेडियम पेंटाऑक्साइड ($V_2O_5$ - Offers high yield and resistance to impurities over alternative elements)", "प्लैटिनमयुक्त एस्बेस्टस वाष्प", "निकेल मैट्रिक्स उत्प्रेरक"] },	
                correct: 1	
            },	
            {	
                en: { q: "The equation of the straight tangent line touching the circular path boundary $x^2 + y^2 = 25$ at coordinate point $(3,4)$ is:", opts: ["3x + 4y = 25", "4x + 3y = 25", "3x - 4y = 25", "4x - 3y = 25"] },	
                hi: { q: "वृत्ताकार पथ $x^2 + y^2 = 25$ के बिंदु $(3,4)$ पर स्पर्श रेखा (Tangent line) का सही समीकरण क्या होगा?", opts: ["3x + 4y = 25 (Using standard tangent transformation identity: xx1 + yy1 = r^2 format)", "4x + 3y = 25", "3x - 4y = 25", "4x - 3y = 25"] },	
                correct: 0	
            },	
            {	
                en: { q: "An electromagnetic wave propagates in space along x-axis. If electric vector points along y-axis, magnetic field vector points along:", opts: ["x-axis", "z-axis", "negative y-axis", "negative x-axis"] },	
                hi: { q: "एक विद्युत चुंबकीय तरंग अंतरिक्ष में x-अक्ष के अनुदिश संचालित होती है। यदि विद्युत क्षेत्र वेक्टर y-अक्ष की दिशा में है, तो चुंबकीय क्षेत्र वेक्टर किस दिशा में होगा?", opts: ["x-अक्ष", "z-अक्ष (Direction of wave propagation matches cross product direction of E x B)", "ऋणात्मक y-अक्ष", "ऋणात्मक x-अक्ष"] },	
                correct: 1	
            },	
            {	
                en: { q: "Which organic amine configuration yields an oily yellow nitrosamine compound when treated with nitrous acid ($HNO_2$)?", opts: ["Primary aliphatic amines", "Secondary aliphatic amines", "Tertiary aromatic amines", "Primary aniline elements"] },	
                hi: { q: "कौन सा कार्बनिक एमीन नाइट्रस अम्ल ($HNO_2$) के साथ अभिक्रिया करके एक तैलीय पीला नाइट्रोसैमीन (Oily yellow nitrosamine) यौगिक बनाता है?", opts: ["प्राथमिक एलिफैटिक एमीन", "द्वितीयक एलिफैटिक एमीन (Secondary amines react cleanly without gas evolution to form stable yellow layers)", "तृतीयक एरोमैटिक एमीन", "प्राथमिक एनीलीन तत्व"] },	
                correct: 1	
            },	
            {	
                en: { q: "If $A$ acts as a symmetric matrix structural layout configuration, then the transpose matrix conversion constraint satisfies:", opts: ["A^T = A", "A^T = -A", "A^T = A^-1", "A^T = 0"] },	
                hi: { q: "यदि एक आव्यूह $A$ एक सम्मित आव्यूह (Symmetric matrix) है, तो सही रूपांतरण संबंध क्या होगा?", opts: ["A^T = A (Definition of a symmetric matrix configuration where transpose retains identical rows)", "A^T = -A", "A^T = A^-1", "A^T = 0"] },	
                correct: 0	
            },	
            {	
                en: { q: "A target metal surface has work function 2.0 eV. Light of photon energy 5.0 eV strikes the surface. Stopping potential equals:", opts: ["7.0 V", "3.0 V", "2.5 V", "1.0 V"] },	
                hi: { q: "एक धातु की सतह का कार्य फलन (Work function) 2.0 eV है। 5.0 eV ऊर्जा का प्रकाश इस सतह पर आपतित होता है। निरोधी विभव (Stopping potential) क्या होगा?", opts: ["7.0 V", "3.0 V (By Einstein's equation: eV_s = K_max = h_nu - Phi = 5.0 - 2.0 = 3.0 eV, so V_s = 3 Volts)", "2.5 V", "1.0 V"] },	
                correct: 1	
            },	
            {	
                en: { q: "The calculated total number of ions generated when one mole of complex compound $[Co(NH_3)_5Cl]Cl_2$ dissolves inside water is:", opts: ["2 ions", "3 ions", "4 ions", "5 ions"] },	
                hi: { q: "जब जटिल यौगिक $[Co(NH_3)_5Cl]Cl_2$ का एक मोल पानी में घोला जाता है, तो उत्पन्न होने वाले आयनों की कुल संख्या कितनी होती है?", opts: ["2 आयन", "3 आयन (Yields 1 coordination complex cation and 2 chloride counter anions in solution)", "4 आयन", "5 आयन"] },	
                correct: 1	
            },	
            {	
                en: { q: "The angle generated between the asymptotic intersecting tracks belonging to the hyperbola system template $x^2 - y^2 = a^2$ is:", opts: ["30 degrees", "45 degrees", "60 degrees", "90 degrees"] },	
                hi: { q: "समकोणीय अतिपरवलय (Rectangular hyperbola) विन्यास $x^2 - y^2 = a^2$ के अनंतस्पर्शियों (Asymptotes) के बीच बनने वाला कोण कितना होता है?", opts: ["30 डिग्री", "45 डिग्री", "60 डिग्री", "90 डिग्री (Asymptotes match linear profiles y = +x and y = -x, intersecting orthogonally)"] },	
                correct: 3	
            },	
            {	
                en: { q: "A target wire conductor has resistance $R$. If it is stretched uniformly such that its total length is doubled, new resistance is:", opts: ["2 R", "4 R", "R / 2", "R / 4"] },	
                hi: { q: "एक चालक तार का प्रतिरोध $R$ है। यदि इसे समान रूप से इस प्रकार खींचा जाए कि इसकी कुल लंबाई दोगुनी हो जाए, तो नया प्रतिरोध क्या होगा?", opts: ["2 R", "4 R (Stretching doubles length and halves area, scaling up resistance quadratically by n^2)", "R / 2", "R / 4"] },	
                correct: 1	
            },	
            {	
                en: { q: "Which core parameter acts as a definitive state function instead of a path function according to classical thermodynamics?", opts: ["Heat energy transferred ($Q$)", "Work mechanics executed ($W$)", "Enthalpy thermodynamic rating ($H$)", "Frictional loss index"] },	
                hi: { q: "शास्त्रीय ऊष्मागतिकी (Thermodynamics) के अनुसार निम्नलिखित में से कौन सा चर एक अवस्था फलन (State function) है न कि पथ फलन (Path function)?", opts: ["स्थानांतरित ऊष्मा ऊर्जा ($Q$)", "किया गया कार्य ($W$)", "एन्थैल्पी गुणांक ($H$ - Independent of intermediate transformation trajectories)", "घर्षण हानि सूचकांक"] },	
                correct: 2	
            },	
            {	
                en: { q: "If the calculated numerical mean of a binomial probability layout equals 4 and variance matches 3, the number of trials $n$ is:", opts: ["12", "16", "8", "4"] },	
                hi: { q: "यदि एक द्विपद वितरण का माध्य (Mean) 4 है और प्रसरण (Variance) 3 है, तो परीक्षणों की संख्या ($n$) क्या होगी?", opts: ["12", "16 (Mean = np = 4, Variance = npq = 3; implies q = 3/4, so p = 1/4; n * (1/4) = 4)", "8", "4"] },	
                correct: 1	
            },	
            {	
                en: { q: "A simple harmonic oscillation setup displays velocity $v_1$ and $v_2$ at displacements $x_1$ and $x_2$. Periodic angular frequency is:", opts: ["$\\sqrt{\\frac{v_1^2 - v_2^2}{x_2^2 - x_1^2}}$", "$\\sqrt{\\frac{x_2^2 - x_1^2}{v_1^2 - v_2^2}}$", "$\\frac{v_1 - v_2}{x_2 - x_1}$", "$\\sqrt{\\frac{v_1^2 + v_2^2}{x_1^2 + x_2^2}}$"] },	
                hi: { q: "एक सरल आवर्त गति (SHM) विन्यास में विस्थापन $x_1$ और $x_2$ पर वेग क्रमशः $v_1$ और $v_2$ हैं। इसकी कोणीय आवृत्ति (Angular frequency) का सूत्र क्या होगा?", opts: ["$\\sqrt{\\frac{v_1^2 - v_2^2}{x_2^2 - x_1^2}}$ (Derived from standard energetic profile equation v^2 = omega^2 * (A^2 - x^2))", "$\\sqrt{\\frac{x_2^2 - x_1^2}{v_1^2 - v_2^2}}$", "$\\frac{v_1 - v_2}{x_2 - x_1}$", "$\\sqrt{\\frac{v_1^2 + v_2^2}{x_1^2 + x_2^2}}$"] },	
                correct: 0	
            },	
            {	
                en: { q: "The chemical structural orientation displaying an extraordinarily strong linkage configuration path via hydrogen bonds naturally is:", opts: ["$HF$", "$HCl$", "$HBr$", "$HI$"] },	
                hi: { q: "अपने प्राकृतिक रूप में हाइड्रोजन आबंध (Hydrogen bonding) का सबसे मजबूत अंतर्आण्विक विन्यास प्रदर्शित करने वाला यौगिक कौन सा है?", opts: ["$HF$ (Fluorine has the highest electronegativity rating, creating massive electrostatic dipoles)", "$HCl$", "$HBr$", "$HI$"] },	
                correct: 0	
            },	
            {	
                en: { q: "If the calculation sequence parameters satisfy $\\int \\frac{dx}{x(x^2 + 1)} = A \\ln|x| + B \\ln(x^2 + 1) + C$, then coefficients are:", opts: ["A = 1, B = -1/2", "A = 1, B = 1/2", "A = -1, B = 1/2", "A = 1/2, B = -1/2"] },	
                hi: { q: "यदि समाकलन समीकरण संबंध $\\int \\frac{dx}{x(x^2 + 1)} = A \\ln|x| + B \\ln(x^2 + 1) + C$ है, तो गुणांकों का मान क्या होगा?", opts: ["A = 1, B = -1/2 (Using partial fractions layout: 1 / [x(x^2+1)] = 1/x - x/(x^2+1))", "A = 1, B = 1/2", "A = -1, B = 1/2", "A = 1/2, B = -1/2"] },	
                correct: 0	
            },	
            {	
                en: { q: "A step tracking interface features a target galvanometer showing resistance $G$. To scale down sensitive track readings via a shunt fraction of $1/n$, shunt resistance is:", opts: ["G / n", "G / (n - 1)", "G * n", "G / (n + 1)"] },	
                hi: { q: "एक गैल्वेनोमीटर का प्रतिरोध $G$ है। धारा मापन क्षमता को $n$ गुना बढ़ाने के लिए (अर्थात शंट व्यवस्था द्वारा), आवश्यक शंट प्रतिरोध (Shunt resistance) का मान क्या होगा?", opts: ["G / n", "G / (n - 1) (Using standard circuit shunting criteria: Ig * G = (I - Ig) * S, where I = n * Ig)", "G * n", "G / (n + 1)"] },	
                correct: 1	
            },	
            {	
                en: { q: "Which crystal system lattice configuration displays unequal geometric parameters matching strictly $a \\neq b \\neq c$ and $\\alpha = \\beta = \\gamma = 90^{\\circ}$?", opts: ["Cubic grid variant", "Tetragonal grid variant", "Orthorhombic grid variant", "Triclinic extreme matrix"] },	
                hi: { q: "कौन सा क्रिस्टल समुदाय असमान कोर लंबाई $a \\neq b \\neq c$ लेकिन समकोणीय अक्षीय कोण $\\alpha = \\beta = \\gamma = 90^{\\circ}$ प्रदर्शित करता है?", opts: ["घनीय (Cubic) ग्रिड", "द्विसमलंबाक्ष (Tetragonal) ग्रिड", "विषमलम्बाक्ष (Orthorhombic - Matchbox geometry showing orthogonal axis vectors but staggered scales)", "त्रिनताक्ष (Triclinic) मैट्रिक्स"] },	
                correct: 2	
            },	
            {	
                en: { q: "The calculated shortest distance between the straight coordinate lines represented by vectors $\\vec{r} = \\hat{i} + \\lambda\\hat{j}$ and $\\vec{r} = \\hat{i} + \\mu\\hat{k}$ is:", opts: ["0", "1", "0.5", "Infinite units"] },	
                hi: { q: "वेक्टर रेखाओं $\\vec{r} = \\hat{i} + \\lambda\\hat{j}$ तथा $\\vec{r} = \\hat{i} + \\mu\\hat{k}$ के बीच की न्यूनतम दूरी (Shortest distance) क्या होगी?", opts: ["0 (Both trajectories pass through identical spatial coordinate point represented by vector i)", "1", "0.5", "अनंत इकाइयाँ"] },	
                correct: 0	
            },	
            {	
                en: { q: "A target gas tracking configuration expands at constant thermal status. The calculated structural work metric scales inside integration tracks across:", opts: ["W = n R T ln(V2 / V1)", "W = P (V2 - V1)", "W = zero absolute constant", "W = n R (T1 - T2)"] },	
                hi: { q: "एक आदर्श गैस स्थिर तापमान (Isothermal transformation) पर प्रसारित होती है। गैस द्वारा किए गए कार्य (Work done) का सही सूत्र क्या होगा?", opts: ["W = n R T ln(V2 / V1) (Standard logarithmic integration tracking expansion metrics over thermal systems)", "W = P (V2 - V1)", "W = शून्य पूर्ण नियतांक", "W = n R (T1 - T2)"] },	
                correct: 0	
            },	
            {	
                en: { q: "Which chemical organic reactant converts a primary amine directly into an intensely foul-smelling isocyanide structure compound under alkaline conditions?", opts: ["Chloroform ($CHCl_3$)", "Carbon tetrachloride ($CCl_4$)", "Methylene chloride ($CH_2Cl_2$)", "Ethyl iodide lines"] },	
                hi: { q: "कौन सा कार्बनिक अभिकर्मक क्षारीय माध्यम में प्राथमिक एमीन को एक अत्यधिक दुर्गंधयुक्त आइसोसाइनाइड (Isocyanide) यौगिक में बदल देता है?", opts: ["क्लोरोफॉर्म ($CHCl_3$ - Carbylamine chemical test track configuration)", "कार्बन टेट्राक्लोराइड ($CCl_4$)", "मेथिलीन क्लोराइड ($CH_2Cl_2$)", "एथिल आयोडाइड लाइनें"] },	
                correct: 0	
            },	
            {	
                en: { q: "The rate constant of a target reaction matches $k = 2.3 \\times 10^{-2} \\, \\text{s}^{-1}$. The integrated order classification belonging to this process layout is:", opts: ["Zero order", "First order", "Second order", "Third order"] },	
                hi: { q: "एक रासायनिक अभिक्रिया के वेग नियतांक ($k$) का मान $2.3 \\times 10^{-2} \\, \\text{s}^{-1}$ है। इस अभिक्रिया की कोटि (Order of reaction) क्या होगी?", opts: ["शून्य कोटि", "प्रथम कोटि (The unit per second s^-1 is exclusive to first order kinetic process rates)", "द्वितीयक कोटि", "तृतीयक कोटि"] },	
                correct: 1	
            },	
            // --- ४५१ ते ५२५ प्रश्नांचा संच (JEE Main & Advanced - High-Weightage Core) ---	
            {	
                en: { q: "If $\\int_{0}^{\\pi} x f(\\sin x) \\, dx = K \\int_{0}^{\\pi/2} f(\\sin x) \\, dx$, then the numerical value of the constant scalar parameter $K$ equals:", opts: ["\\pi", "2\\pi", "\\pi / 2", "0"] },	
                hi: { q: "यदि $\\int_{0}^{\\pi} x f(\\sin x) \\, dx = K \\int_{0}^{\\pi/2} f(\\sin x) \\, dx$ है, तो नियत अदिश पैरामीटर $K$ का संख्यात्मक मान क्या होगा?", opts: ["\\pi (Using integration property: integral from 0 to pi of x g(x) dx = pi/2 integral from 0 to pi of g(x) dx)", "2\\pi", "\\pi / 2", "0"] },	
                correct: 0	
            },	
            {	
                en: { q: "A projectile is thrown with an initial velocity $v$ at an angle $\\theta$ with the horizontal. If its maximum height equals its horizontal range, then $\\tan \\theta$ is:", opts: ["1", "2", "4", "0.5"] },	
                hi: { q: "एक प्रक्षेप्य (Projectile) को क्षैतिज से $\\theta$ कोण पर प्रारंभिक वेग $v$ से फेंका जाता है। यदि इसकी अधिकतम ऊंचाई क्षैतिज परास (Horizontal range) के बराबर है, तो $\\tan \\theta$ का मान होगा:", opts: ["1", "2", "4 (Equating v^2 sin^2(theta)/2g = v^2 sin(2theta)/g yields tan(theta) = 4)", "0.5"] },	
                correct: 2	
            },	
            {	
                en: { q: "Which of the following oxoacids of Phosphorus contains a distinct and direct P-P chemical bond within its structural framework?", opts: ["Hypophosphoric acid ($H_4P_2O_6$)", "Pyrophosphoric acid ($H_4P_2O_7$)", "Orthophosphoric acid ($H_3LO_4$)", "Metaphosphoric acid layout"] },	
                hi: { q: "फॉस्फोरस के निम्नलिखित ऑक्सोअम्लों (Oxoacids) में से किसमें इसकी संरचना के भीतर एक स्पष्ट और प्रत्यक्ष P-P रासायनिक आबंध उपस्थित होता है?", opts: ["हाइपोफॉस्फोरिक अम्ल ($H_4P_2O_6$ - Contains symmetrical (HO)2P(=O)-P(=O)(OH)2 structural core arrangement)", "पायरोफॉस्फोरिक अम्ल ($H_4P_2O_7$)", "ऑर्थोफॉस्फोरिक अम्ल ($H_3LO_4$)", "मेटाफॉस्फोरिक अम्ल लेआउट"] },	
                correct: 0	
            },	
            {	
                en: { q: "The general solution layout belonging to the standard linear differential equation $\\frac{dy}{dx} + \\frac{y}{x} = x^2$ is evaluated as:", opts: ["$4xy = x^4 + C$", "$xy = x^3 + C$", "$3xy = x^3 + C$", "$4xy = x^3 + C$"] },	
                hi: { q: "मानक रैखिक अवकल समीकरण $\\frac{dy}{dx} + \\frac{y}{x} = x^2$ का व्यापक हल (General solution) क्या होगा?", opts: ["$4xy = x^4 + C$ (Integrating factor is e^(int dx/x) = x; multiplying yields y*x = int x^3 dx = x^4/4 + C/4)", "$xy = x^3 + C$", "$3xy = x^3 + C$", "$4xy = x^3 + C$"] },	
                correct: 0	
            },	
            {	
                en: { q: "A paramagnetic material sample is placed inside a magnetic field. If temperature scales up to three times its initial value, susceptibility changes by:", opts: ["Multiplies by 3", "Drops to 1/3", "Remains unchanged", "Becomes absolute zero"] },	
                hi: { q: "एक अनुचुंबकीय पदार्थ (Paramagnetic material) को चुंबकीय क्षेत्र में रखा जाता है। यदि इसका तापमान प्रारंभिक मान से तीन गुना बढ़ जाता है, तो इसकी चुंबकीय प्रवृत्ति (Susceptibility) हो जाएगी:", opts: ["3 गुना बढ़ जाएगी", "1/3 रह जाएगी (According to Curie's Law, magnetic susceptibility is inversely proportional to absolute temperature)", "अपरिवर्तित रहेगी", "पूर्णतः शून्य हो जाएगी"] },	
                correct: 1	
            },	
            {	
                en: { q: "The intensive cell property that always decreases linearly during any spontaneous electrochemical cell reaction process is:", opts: ["Gibbs Free Energy changes ($\\Delta G$)", "Cell electrical potential ($E_{cell}$)", "Internal resistance factor", "Total ion concentration metrics"] },	
                hi: { q: "किसी भी स्वतः प्रवर्तित (Spontaneous) विद्युत रासायनिक सेल अभिक्रिया के दौरान घटने वाला मुख्य ऊष्मागतिकी मान (Thermodynamic property) कहलाता है:", opts: ["गिब्स मुक्त ऊर्जा परिवर्तन ($\\Delta G$ - Spontaneous processes require negative free energy shift criteria)", "सेल विद्युत विभव ($E_{cell}$)", "आंतरिक प्रतिरोध गुणांक", "कुल आयन सांद्रता संकेतक"] },	
                correct: 0	
            },	
            {	
                en: { q: "The point coordinates defining the local intersection of the lines $\\vec{r} = \\lambda(\\hat{i} + \\hat{j} + \\hat{k})$ and plane $x + y + z = 3$ is:", opts: ["(1, 1, 1)", "(2, 0, 1)", "(0, 0, 3)", "(1, 2, 0)"] },	
                hi: { q: "रेखा $\\vec{r} = \\lambda(\\hat{i} + \\hat{j} + \\hat{k})$ और समतल $x + y + z = 3$ के प्रतिच्छेद बिंदु (Intersection point) के निर्देशांक क्या होंगे?", opts: ["(1, 1, 1) (Substituting spatial coordinates x=lambda, y=lambda, z=lambda into plane equation yields 3*lambda = 3)", "(2, 0, 1)", "(0, 0, 3)", "(1, 2, 0)"] },	
                correct: 0	
            },	
            {	
                en: { q: "A circular loop carrying current $I$ features radius $R$. The magnetic field configuration exactly at the absolute center center equals:", opts: ["$\\mu_0 I / (2R)$", "$\\mu_0 I / (4R)$", "$\\mu_0 I / R$", "Zero constant value"] },	
                hi: { q: "त्रिज्या $R$ के एक वृत्ताकार लूप में धारा $I$ प्रवाहित हो रही है। इसके केंद्र (Center) पर उत्पन्न चुंबकीय क्षेत्र का सही मान क्या होगा?", opts: ["$\\mu_0 I / (2R)$ (Standard Biot-Savart integration application formula for a circular current loop element)", "$\\mu_0 I / (4R)$", "$\\mu_0 I / R$", "शून्य नियत मान"] },	
                correct: 0	
            },	
            {	
                en: { q: "Which chemical molecule geometry features a perfectly asymmetrical square pyramidal structural shape configuration?", opts: ["$SF_6$", "$XeF_4$", "$BrF_5$", "$PCl_5$"] },	
                hi: { q: "निम्नलिखित में से किस रासायनिक अणु की ज्यामिति पूर्णतः वर्ग पिरामिडीय (Square pyramidal) संरचनात्मक आकार जैसी होती है?", opts: ["$SF_6$", "$XeF_4$", "$BrF_5$ (Central Bromine features 5 bonding pairs and 1 localized lone pair arrangement)", "$PCl_5$"] },	
                correct: 2	
            },	
            {	
                en: { q: "If the probability of occurrence of event $A$ matches $0.4$ and event $B$ matches $0.5$ while independent, then $P(A \\cup B)$ is:", opts: ["0.9", "0.7", "0.2", "0.6"] },	
                hi: { q: "यदि घटना $A$ की प्रायिकता $0.4$ और घटना $B$ की प्रायिकता $0.5$ है तथा दोनों स्वतंत्र (Independent) हैं, तो $P(A \\cup B)$ का मान क्या होगा?", opts: ["0.9", "0.7 (Using formula P(A u B) = P(A) + P(B) - P(A)*P(B) which evaluates to 0.4 + 0.5 - 0.2 = 0.7)", "0.2", "0.6"] },	
                correct: 1	
            },	
            {	
                en: { q: "A uniform solid sphere rolls down an inclined track without slipping. The calculated fraction of total energy that is rotational equals:", opts: ["2/5", "2/7", "5/7", "1/2"] },	
                hi: { q: "एक समरूप ठोस गोला (Solid sphere) बिना फिसले एक आनत तल पर नीचे लुढ़कता है। इसकी कुल ऊर्जा का कितना भाग घूर्णन ऊर्जा (Rotational energy) होता है?", opts: ["2/5", "2/7 (Ratio of rotational energy K_rot / K_total = (1/2 I w^2) / (1/2 M v^2 + 1/2 I w^2) equals 2/7)", "5/7", "1/2"] },	
                correct: 1	
            },	
            {	
                en: { q: "The coordination isomer configuration exhibiting structural identity link shifts named linkage isomerism strictly features which ligand?", opts: ["$H_2O$", "$NH_3$", "$SCN^{-}$", "$Cl^{-}$"] },	
                hi: { q: "उपसहसंयोजन यौगिकों में बंधक समावयवता (Linkage isomerism) प्रदर्शित करने के लिए संकुल में कौन सा लिगैंड होना अनिवार्य है?", opts: ["$H_2O$", "$NH_3$", "$SCN^{-}$ (An ambidentate ligand capable of bonding via either Sulfur or Nitrogen donor atom matrix tracks)", "$Cl^{-}$"] },	
                correct: 2	
            },	
            {	
                en: { q: "The value of the definite calculus limit equation integrated via $\\int_{0}^{1} x(1-x)^{99} \\, dx$ matches exactly:", opts: ["1 / 10000", "1 / 10100", "1 / 9900", "1 / 10200"] },	
                hi: { q: "निश्चित समाकलन $\\int_{0}^{1} x(1-x)^{99} \\, dx$ का परिकलित शुद्ध मान क्या होगा?", opts: ["1 / 10000", "1 / 10100 (Applying King's property replaces x with 1-x; integral simplifies to int (1-x)x^99 dx = 1/100 - 1/101)", "1 / 9900", "1 / 10200"] },	
                correct: 1	
            },	
            {	
                en: { q: "A physical step tracking layout charges a parallel capacitor across battery layout. The localized electric energy density inside fields matches:", opts: ["0.5 \\epsilon_0 E^2", "\\epsilon_0 E^2", "2 \\epsilon_0 E^2", "0.5 \\epsilon_0^2 E"] },	
                hi: { q: "एक संधारित्र की प्लेटों के बीच विद्युत क्षेत्र में संचित ऊर्जा घनत्व (Energy density) का सही भौतिक सूत्र क्या होता है?", opts: ["0.5 \\epsilon_0 E^2 (Energy density per unit volume in electrostatic field configurations)", "\\epsilon_0 E^2", "2 \\epsilon_0 E^2", "0.5 \\epsilon_0^2 E"] },	
                correct: 0	
            },	
            {	
                en: { q: "Which chemical element configuration behaves as a distinct strong reducing agent hydride among the nitrogen group family layout row?", opts: ["$NH_3$", "$PH_3$", "$AsH_3$", "$BiH_3$"] },	
                hi: { q: "नाइट्रोजन परिवार (Group 15) के हाइड्राइड्स में से कौन सा हाइड्राइड सबसे प्रबल अपचायक (Strongest reducing agent) की तरह व्यवहार करता है?", opts: ["$NH_3$", "$PH_3$", "$AsH_3$", "$BiH_3$ (Due to its longest bond distance and lowest thermal bond dissociation energy layout)"] },	
                correct: 3	
            },	
            {	
                en: { q: "If vector matrix layout elements satisfy relation $|\\vec{a}| = 3, |\\vec{b}| = 4$ and cross parameter magnitude matches 6, the dot product is:", opts: ["$6\\sqrt{3}$", "$12$", "$6$", "$4\\sqrt{3}$"] },	
                hi: { q: "यदि दो वेक्टरों के परिमाण $|\\vec{a}| = 3, |\\vec{b}| = 4$ हैं और उनके क्रॉस प्रोडक्ट का परिमाण 6 है, तो उनका अदिश गुणनफल (Dot product) क्या होगा?", opts: ["$6\\sqrt{3}$ (Since sin(theta) = 6 / (3*4) = 0.5, implies theta = 30 degrees; dot product equals 3 * 4 * cos(30))", "$12$", "$6$", "$4\\sqrt{3}$"] },	
                correct: 0	
            },	
            {	
                en: { q: "A thermodynamic carnot engine cycle configuration functions tracking hot reservoir limits at 400 K and cold sink at 300 K. Efficiency is:", opts: ["25%", "50%", "75%", "33%"] },	
                hi: { q: "एक कार्नोट इंजन 400 K के ऊष्मा स्रोत और 300 K के सिंक के बीच कार्य करता है। इस इंजन की दक्षता (Efficiency) कितनी होगी?", opts: ["25% (Using Carnot thermal efficiency relation eta = 1 - T_sink / T_source = 1 - 300/400 = 0.25)", "50%", "75%", "33%"] },	
                correct: 0	
            },	
            {	
                en: { q: "The chemical compound structure that cannot be resolved into optically active enantiomeric configurations belongs strictly to:", opts: ["2-Chlorobutane", "Lactic acid layout", "Propan-2-ol rows", "2-Bromopropanoic acid"] },	
                hi: { q: "निम्नलिखित में से कौन सा रासायनिक यौगिक प्रकाशिक समावयवता (Optical isomerism) प्रदर्शित नहीं कर सकता?", opts: ["2-क्लोरोब्यूटेन", "लैक्टिक अम्ल लेआउट", "प्रोपेन-2-ऑल (Lacks an asymmetric chiral carbon center required to break mirror symmetry tracks)", "2-ब्रोमोप्रोपेनोइक अम्ल"] },	
                correct: 2	
            },	
            {	
                en: { q: "The maximum value calculated for the structural algebraic geometry trigonometric layout function $f(x) = 3 \\sin x + 4 \\cos x$ equals:", opts: ["5", "7", "1", "25"] },	
                hi: { q: "त्रिकोणमितीय फलन $f(x) = 3 \\sin x + 4 \\cos x$ का अधिकतम संभावित मान (Maximum value) कितना होगा?", opts: ["5 (Using standard boundary evaluation identity max value = sqrt(A^2 + B^2) = sqrt(9 + 16))", "7", "1", "25"] },	
                correct: 0	
            },	
            {	
                en: { q: "A physical thin prism has refractive index 1.5 and small angle $A$. The minimum deviation angle tracked through path equals:", opts: ["A", "0.5 A", "1.5 A", "2 A"] },	
                hi: { q: "एक पतले प्रिज्म का अपवर्तनांक 1.5 और प्रिज्म कोण $A$ है। इस प्रिज्म द्वारा उत्पन्न न्यूनतम विचलन कोण (Minimum deviation angle) क्या होगा?", opts: ["A", "0.5 A (Using thin prism approximation identity delta = (mu - 1) * A = (1.5 - 1) * A = 0.5A)", "1.5 A", "2 A"] },	
                correct: 1	
            },	
            {	
                en: { q: "Which chemical catalyst modification drastically minimizes the calculated activation energy index barrier during a chemical kinetic path?", opts: ["Enzymatic tracking lines", "Thermal solvent heating", "Pressure increment profiles", "Dilution volume increases"] },	
                hi: { q: "कौन सा रासायनिक परिवर्तन एक अभिक्रिया के लिए आवश्यक सक्रियण ऊर्जा (Activation energy) के अवरोध को सीधे कम कर देता है?", opts: ["उत्प्रेरक का उपयोग (Catalysts provide an alternative kinetic pathway with lower activation barrier indexes)", "थर्मल विलायक हीटिंग", "दबाव वृद्धि प्रोफाइल", "तनुकरण मात्रा में वृद्धि"] },	
                correct: 0	
            },	
            {	
                en: { q: "If the roots of the quadratic algebra equation system $x^2 - kx + 4 = 0$ are perfectly real and identical, the value of $k$ is:", opts: ["\\pm 2", "\\pm 4", "\\pm 1", "0"] },	
                hi: { q: "यदि द्विघात समीकरण $x^2 - kx + 4 = 0$ के मूल वास्तविक और समान (Real and equal) हैं, तो $k$ का मान क्या होगा?", opts: ["\\pm 2", "\\pm 4 (Setting discriminant D = b^2 - 4ac = 0 implies k^2 - 16 = 0, so k = +-4)", "\\pm 1", "0"] },	
                correct: 1	
            },	
            {	
                en: { q: "A step tracking loop system features a long solenoid containing $n$ turns per unit length carrying current $I$. Magnetic field is:", opts: ["\\mu_0 n I", "0.5 \\mu_0 n I", "\\mu_0 n I / 2", "Zero everywhere"] },	
                hi: { q: "एक लंबी परिनालिका (Solenoid) जिसमें प्रति इकाई लंबाई में $n$ फेरे हैं, में धारा $I$ प्रवाहित हो रही है। इसके भीतर चुंबकीय क्षेत्र होगा:", opts: ["\\mu_0 n I (Standard linear internal magnetic field distribution layout expression)", "0.5 \\mu_0 n I", "\\mu_0 n I / 2", "हर जगह शून्य"] },	
                correct: 0	
            },	
            {	
                en: { q: "The chemical synthesis configuration transforming benzaldehyde into cinnamic acid via sodium acetate and acetic anhydride is:", opts: ["Perkin reaction framework", "Claisen synthesis grid", "Cannizzaro reaction track", "Reimer-Tiemann sequence"] },	
                hi: { q: "सोडियम एसीटेट और एसिटिक एनहाइड्राइड का उपयोग करके बेन्जैल्डिहाइड को सिनामिक अम्ल (Cinnamic acid) में बदलने वाली अभिक्रिया कहलाती है:", opts: ["पर्किन अभिक्रिया (Perkin condensation framework involving aromatic aldehydes)", "क्लेन संश्लेषण ग्रिड", "कैनिज़ारो अभिक्रिया ट्रैक", "रीमर-टीमैन अनुक्रम"] },	
                correct: 0	
            },	
            {	
                en: { q: "The eccentricity belonging to a rectangular hyperbola system configuration layout tracking standard coordinate grids is:", opts: ["$\\sqrt{2}$", "2", "1", "0.5"] },	
                hi: { q: "एक समकोणीय अतिपरवलय (Rectangular hyperbola) की उत्केन्द्रता (Eccentricity) का निश्चित मान हमेशा कितना होता है?", opts: ["$\\sqrt{2}$ (Since asymptotes cross perpendicularly, algebraic scaling fixes eccentricity to sqrt(2))", "2", "1", "0.5"] },	
                correct: 0	
            },	
            // --- ५२6 ते ६०० प्रश्नांचा संच (JEE Main & Advanced - Last 10 Years) ---	
            {	
                en: { q: "If the inverse of a square matrix $A$ is given by $A^{-1} = \\frac{1}{10}\\begin{pmatrix} 4 & 2 \\\\ -3 & 1 \\end{pmatrix}$, then the matrix $A$ itself evaluates to:", opts: ["\\begin{pmatrix} 1 & -2 \\\\ 3 & 4 \\end{pmatrix}", "\\begin{pmatrix} 1 & -2 \\\\ 3 & 4 \\end{pmatrix} * 10", "\\begin{pmatrix} 1 & -2 \\\\ 3 & 4 \\end{pmatrix} * 0.1", "\\begin{pmatrix} 1 & 2 \\\\ -3 & 4 \\end{pmatrix}"] },	
                hi: { q: "यदि एक वर्ग आव्यूह $A$ का व्युत्क्रम (Inverse) $A^{-1} = \\frac{1}{10}\\begin{pmatrix} 4 & 2 \\\\ -3 & 1 \\end{pmatrix}$ द्वारा दिया गया है, तो आव्यूह $A$ का मान क्या होगा?", opts: ["\\begin{pmatrix} 1 & -2 \\\\ 3 & 4 \\end{pmatrix} (Taking the inverse of inverse matrix grid elements restores original matrix A format)", "\\begin{pmatrix} 1 & -2 \\\\ 3 & 4 \\end{pmatrix} * 10", "\\begin{pmatrix} 1 & -2 \\\\ 3 & 4 \\end{pmatrix} * 0.1", "\\begin{pmatrix} 1 & 2 \\\\ -3 & 4 \\end{pmatrix}"] },	
                correct: 0	
            },	
            {	
                en: { q: "In a Young's Double Slit experiment, if monochromatic light is replaced by white light, what type of fringe pattern is observed?", opts: ["No fringes are seen", "A central white fringe with a few colored fringes", "All colored fringes of equal width", "A completely dark screen profile"] },	
                hi: { q: "यंग के द्वि-झिरी प्रयोग (YDSE) में यदि एकवर्णीय प्रकाश (Monochromatic light) को श्वेत प्रकाश से बदल दिया जाए, तो कैसा फ्रिंज पैटर्न दिखाई देगा?", opts: ["कोई फ्रिंज दिखाई नहीं देगी", "एक केंद्रीय श्वेत फ्रिंज जिसके दोनों ओर कुछ रंगीन फ्रिंज दिखाई देंगी (Different wavelengths form overlapping maxima)", "समान चौड़ाई की सभी रंगीन फ्रिंज", "एक पूरी तरह से डार्क स्क्रीन प्रोफाइल"] },	
                correct: 1	
            },	
            {	
                en: { q: "Which of the following organic reaction pathways successfully processes an ester directly into a primary alcohol via reductive cleavage?", opts: ["$LiAlH_4$ reduction framework", "$NaBH_4$ transition route", "Rosenmund catalytic track", "Stephen sequence parameters"] },	
                hi: { q: "निम्नलिखित में से कौन सा कार्बनिक प्रक्रम एक एस्टर (Ester) को अपचयन द्वारा सीधे प्राथमिक अल्कोहल में परिवर्तित कर देता है?", opts: ["$LiAlH_4$ अपचयन ढांचा (Lithium aluminum hydride is a powerful nucleophilic reducing agent for carbonyl grids)", "$NaBH_4$ संक्रमण मार्ग", "रोज़नमुंड उत्प्रेरक ट्रैक", "स्टीफन अनुक्रम मापदंड"] },	
                correct: 0	
            },	
            {	
                en: { q: "If the angle between two straight intersecting lines tracking coordinates having slopes $m_1$ and $m_2$ is exactly $45^{\\circ}$, then:", opts: ["$|\\frac{m_1 - m_2}{1 + m_1 m_2}| = 1$", "$|\\frac{m_1 + m_2}{1 - m_1 m_2}| = 1$", "$m_1 m_2 = -1$", "$m_1 = m_2$"] },	
                hi: { q: "यदि प्रवणता (Slopes) $m_1$ और $m_2$ वाली दो प्रतिच्छेदी रेखाओं के बीच का कोण ठीक $45^{\\circ}$ है, तो सही संबंध क्या होगा?", opts: ["$|\\frac{m_1 - m_2}{1 + m_1 m_2}| = 1$ (Standard tangent slope angle intersection identity structure)", "$|\\frac{m_1 + m_2}{1 - m_1 m_2}| = 1$", "$m_1 m_2 = -1$", "$m_1 = m_2$"] },	
                correct: 0	
            },	
            {	
                en: { q: "A galvanometer of resistance $50 \\, \\Omega$ gives full scale deflection for 1 mA. To convert it into a voltmeter of range 10 V, series resistance is:", opts: ["9950 \\Omega", "10050 \\Omega", "950 \\Omega", "10000 \\Omega"] },	
                hi: { q: "एक गैल्वेनोमीटर जिसका प्रतिरोध $50 \\, \\Omega$ है, 1 mA धारा पर पूर्ण स्केल विक्षेपण देता है। इसे 10 V परास के वोल्टमीटर में बदलने के लिए श्रेणीक्रम में आवश्यक प्रतिरोध होगा:", opts: ["9950 \\Omega (Using formula R = V / Ig - G = 10 / 0.001 - 50 = 10000 - 50 = 9950 ohms)", "10050 \\Omega", "950 \\Omega", "10000 \\Omega"] },	
                correct: 0	
            },	
            {	
                en: { q: "The interhalogen compound structure showing a T-shaped geometric configuration framework naturally among the given list is:", opts: ["$ClF_3$", "$IF_7$", "$BrF_5$", "$ICl$"] },	
                hi: { q: "दिए गए अंतरा-हैलोजन (Interhalogen) यौगिकों में से कौन सा अपनी संरचना के भीतर स्वाभाविक रूप से T-आकार (T-shaped geometry) प्रदर्शित करता है?", opts: ["$ClF_3$ (Central Chlorine features 3 bonding pairs and 2 lone pairs under VSEPR layout rules)", "$IF_7$", "$BrF_5$", "$ICl$"] },	
                correct: 0	
            },	
            {	
                en: { q: "If three distinct fair coins are tossed simultaneously, what is the probability of obtaining at least two heads?", opts: ["1/2", "3/8", "5/8", "7/8"] },	
                hi: { q: "यदि तीन अलग-अलग सिक्कों को एक साथ उछाला जाता है, तो कम से कम दो चित (At least two heads) आने की प्रायिकता क्या होगी?", opts: ["1/2 (Favorable outcomes are HHH, HHT, HTH, THH which equals 4/8 reducing directly to 1/2)", "3/8", "5/8", "7/8"] },	
                correct: 0	
            },	
            {	
                en: { q: "An unpolarized light beam of intensity $I_0$ passes through a single ideal polaroid sheet. The intensity of transmitted light is:", opts: ["I_0", "0.5 I_0", "0.25 I_0", "Zero constant"] },	
                hi: { q: "तीव्रता $I_0$ का एक अध्रुवित प्रकाश पुंज एक आदर्श पोलेरॉइड शीट से गुजरता है। निर्गत प्रकाश की तीव्रता क्या होगी?", opts: ["I_0", "0.5 I_0 (Malus Law averaged over full angular distribution reduces unpolarized incident beam intensity by half)", "0.25 I_0", "शून्य नियत"] },	
                correct: 1	
            },	
            {	
                en: { q: "Which chemical compound undergoes a clean Hofmann Mustard Oil reaction path showing a distinct pungent smell when tested?", opts: ["Primary aliphatic amines", "Secondary aliphatic amines", "Tertiary aliphatic amines", "Nitrobenzene compounds"] },	
                hi: { q: "कौन सा रासायनिक यौगिक हाफमान मस्टर्ड ऑयल परीक्षण (Hofmann Mustard Oil reaction) में सरसों के तेल जैसी तीखी गंध वाला उत्पाद देता है?", opts: ["प्राथमिक एलिफैटिक एमीन (Reacts with CS2 and HgCl2 to form alkyl isothiocyanates cleanly)", "Secondary aliphatic amines", "Tertiary aliphatic amines", "Nitrobenzene compounds"] },	
                correct: 0	
            },	
            {	
                en: { q: "The value of the limit calculation tracking relation $\\lim_{x \\to \\infty} (1 + \\frac{2}{x})^x$ equates to:", opts: ["e", "e^2", "1", "e^{-2}"] },	
                hi: { q: "सीमा मूल्यांकन संबंध $\\lim_{x \\to \\infty} (1 + \\frac{2}{x})^x$ का शुद्ध मान क्या होगा?", opts: ["e", "e^2 (Standard exponential limit transformation identity rule where format yields e^(lim x*2/x))", "1", "e^{-2}"] },	
                correct: 1	
            },	
            {	
                en: { q: "A source of sound moves towards a stationary observer with speed equal to $1/10$ of sound speed. Ratio of observed to original frequency is:", opts: ["10/9", "9/10", "11/10", "10/11"] },	
                hi: { q: "ध्वनि का एक स्रोत एक स्थिर प्रेक्षक की ओर ध्वनि की चाल की $1/10$ चाल से गति कर रहा है। प्रेक्षित आवृत्ति और वास्तविक आवृत्ति का अनुपात होगा:", opts: ["10/9 (Using Doppler shifts formula f' = f * [v / (v - 0.1v)] = f * [1 / 0.9] = 10/9 f)", "9/10", "11/10", "10/11"] },	
                correct: 0	
            },	
            {	
                en: { q: "The coordination structure formula that successfully shows maximum electrical conductivity inside an aqueous solution is:", opts: ["$[Co(NH_3)_6]Cl_3$", "$[Co(NH_3)_5Cl]Cl_2$", "$[Co(NH_3)_4Cl_2]Cl$", "$[Co(NH_3)_3Cl_3]$"] },	
                hi: { q: "निम्नलिखित में से कौन सा उपसहसंयोजन संकुल जलीय विलयन के भीतर अधिकतम विद्युत चालकता (Maximum electrical conductivity) प्रदर्शित करता है?", opts: ["$[Co(NH_3)_6]Cl_3$ (Dissociates to produce 4 active ions per mole layout, maximizing charge transfer channels)", "$[Co(NH_3)_5Cl]Cl_2$", "$[Co(NH_3)_4Cl_2]Cl$", "$[Co(NH_3)_3Cl_3]$"] },	
                correct: 0	
            },	
            {	
                en: { q: "The length of the perpendicular line dropped from point $(1,2,3)$ onto the spatial coordinate plane $x + 2y + 2z - 2 = 0$ is:", opts: ["1 unit", "3 units", "2 units", "4 units"] },	
                hi: { q: "बिंदु $(1,2,3)$ से समतल $x + 2y + 2z - 2 = 0$ पर डाले गए लंब की लंबाई (Perpendicular distance) क्या होगी?", opts: ["1 इकाई", "3 इकाई (Using coordinate distance expression |1 + 4 + 6 - 2| / sqrt(1 + 4 + 4) = 9 / 3 = 3 units)", "2 इकाई", "4 इकाई"] },	
                correct: 1	
            },	
            {	
                en: { q: "An alternating current through a pure inductor lags behind the alternating voltage profile phase by an exact angle of:", opts: ["Zero degrees", "45 degrees", "90 degrees", "180 degrees"] },	
                hi: { q: "एक शुद्ध प्रेरक (Pure inductor) वाले AC परिपथ में प्रवाहित होने वाली धारा, वोल्टेज से कितने कोण से पीछे (Lags behind) रहती है?", opts: ["शून्य डिग्री", "45 डिग्री", "90 degrees (Phase difference phi is exactly pi/2 radians where voltage leads inductive loops)", "180 डिग्री"] },	
                correct: 2	
            },	
            {	
                en: { q: "Which chemical compound shows a fast dehydration rate when treated with concentrated sulfuric acid across heat channels?", opts: ["Propan-1-ol", "Propan-2-ol", "2-Methylpropan-2-ol", "Ethanol rows"] },	
                hi: { q: "सांद्र सल्फ्यूरिक अम्ल के साथ गर्म करने पर कौन सा रासायनिक यौगिक सबसे तीव्र निर्जलीकरण (Dehydration) दर प्रदर्शित करता है?", opts: ["Propan-1-ol", "Propan-2-ol", "2-Methylpropan-2-ol (Forms a highly stable tertiary carbocation intermediate during dehydration steps)", "Ethanol rows"] },	
                correct: 2	
            },	
            {	
                en: { q: "If the position matrix tracks satisfy $\\vec{a} \\cdot \\vec{b} = 0$ and $\\vec{a} \\times \\vec{c} = 0$ while vector $\\vec{a} \\neq 0$, angle between $\\vec{b}$ and $\\vec{c}$ is:", opts: ["Zero constant", "$\\pi / 2$", "$\\pi / 4$", "$\\pi$"] },	
                hi: { q: "यदि स्थिति वेक्टर संबंध $\\vec{a} \\cdot \\vec{b} = 0$ और $\\vec{a} \\times \\vec{c} = 0$ को संतुष्ट करते हैं (जहाँ $\\vec{a} \\neq 0$), तो $\\vec{b}$ और $\\vec{c}$ के बीच कोण होगा:", opts: ["शून्य नियत", "$\\pi / 2$ (Since c is parallel to a, and b is perpendicular to a, b must be orthogonal to c)", "$\\pi / 4$", "$\\pi$"] },	
                correct: 1	
            },	
            {	
                en: { q: "A target satellite orbits planet earth in a perfect circular path close to surface. The orbital velocity magnitude matches:", opts: ["$\\sqrt{gR}$", "$\\sqrt{2gR}$", "$gR$", "Zero constant value"] },	
                hi: { q: "एक उपग्रह पृथ्वी की सतह के ठीक निकट एक वृत्ताकार कक्षा में चक्कर लगा रहा है। इसका कक्षीय वेग (Orbital velocity) किसके बराबर होगा?", opts: ["$\\sqrt{gR}$ (Balancing gravitational force fields with centripetal orbital acceleration dynamics)", "$\\sqrt{2gR}$", "$gR$", "शून्य नियत मान"] },	
                correct: 0	
            },	
            {	
                en: { q: "The chemical synthesis processing grid that turns alkyl halides directly into extended alkanes using metallic sodium is named:", opts: ["Wurtz reaction matrix", "Fittig reaction path", "Frankland synthesis layout", "Kolbe synthesis tracks"] },	
                hi: { q: "शुष्क ईथर की उपस्थिति में धात्विक सोडियम का उपयोग करके एल्किल हैलाइड को उच्च एल्केन में बदलने वाला रासायनिक प्रक्रम कहलाता है:", opts: ["वुर्ट्ज़ अभिक्रिया (Wurtz reaction matrix path involving radical coupling transitions)", "फिटिग अभिक्रिया पथ", "फ्रैंकलैंड संश्लेषण लेआउट", "कोलबा संश्लेषण ट्रैक"] },	
                correct: 0	
            },	
            {	
                en: { q: "The mathematical derivative of function $f(x) = x^x$ with respect to independent coordinate $x$ maps identically to:", opts: ["$x^x (1 + \\ln x)$", "$x \\cdot x^{x-1}$", "$x^x \\ln x$", "$x^x / (1 + \\ln x)$"] },	
                hi: { q: "स्वतंत्र चर $x$ के सापेक्ष फलन $f(x) = x^x$ का सही अवकलज (Derivative) क्या होता है?", opts: ["$x^x (1 + \\ln x)$ (Using logarithmic differentiation transforms function into explicit solvable rows cleanly)", "$x \\cdot x^{x-1}$", "$x^x \\ln x$", "$x^x / (1 + \\ln x)$"] },	
                correct: 0	
            },	
            {	
                en: { q: "A physical radioactive sample drops activity down to $1/16$ of initial value in exactly 40 days. Half life matches:", opts: ["10 days", "20 days", "5 days", "8 days"] },	
                hi: { q: "एक रेडियोधर्मी नमूने की सक्रियता 40 दिनों में घटकर अपने प्रारंभिक मान का $1/16$ रह जाती है। इसकी अर्ध-आयु (Half-life) होगी:", opts: ["10 days (Since 1/16 equals (1/2)^4, 4 full half-life periods have passed across 40 days; T = 40/4)", "20 days", "5 days", "8 days"] },	
                correct: 0	
            },	
            {	
                en: { q: "Which chemical compound features the highest calculated structural magnetic moment index according to spin-only formula?", opts: ["$Fe^{2+}$ matrix rows", "$Mn^{2+}$ matrix rows", "$Cr^{3+}$ profile tracks", "$Cu^{2+}$ format lines"] },	
                hi: { q: "केवल-प्रचक्रण (Spin-only) सूत्र के अनुसार निम्नलिखित में से किस आयन का परिकलित चुंबकीय आघूर्ण सर्वाधिक होता है?", opts: ["$Fe^{2+}$ मैट्रिक्स पंक्तियाँ", "$Mn^{2+}$ मैट्रिक्स पंक्तियाँ (Contains 5 unpaired electrons, maximizing spin calculations to 5.92 BM)", "$Cr^{3+}$ प्रोफाइल ट्रैक", "$Cu^{2+}$ प्रारूप लाइनें"] },	
                correct: 1	
            },	
            {	
                en: { q: "If the area bounded by the straight coordinate lines $y = mx$, $x = 1$, and horizontal axis $y = 0$ is 2 square units, then $m$ is:", opts: ["2", "4", "1", "8"] },	
                hi: { q: "यदि रेखाओं $y = mx$, $x = 1$ तथा क्षैतिज अक्ष $y = 0$ द्वारा घिरा क्षेत्रफल 2 वर्ग इकाई है, तो $m$ का मान क्या होगा?", opts: ["2", "4 (Definite integral from 0 to 1 of mx dx yields m/2 = 2, which gives m = 4 directly)", "1", "8"] },	
                correct: 1	
            },	
            {	
                en: { q: "A target block floats inside a fluid interface layout with exactly half its total volume submerged. Buoyant upthrust equals:", opts: ["Weight of the block", "Half the weight of the block", "Double the weight of the block", "Zero absolute balance"] },	
                hi: { q: "एक ब्लॉक एक द्रव में इस प्रकार तैरता है कि उसका आधा आयतन डूबा रहता है। ब्लॉक पर लगने वाला प्लवन बल (Buoyant upthrust) किसके बराबर होगा?", opts: ["ब्लॉक के कुल वास्तविक वजन के बराबर (For a floating body, total buoyant upthrust perfectly offsets weight)", "Half the weight of the block", "Double the weight of the block", "Zero absolute balance"] },	
                correct: 0	
            },	
            {	
                en: { q: "The core product configuration formed when an organic aniline compound undergoes diazotization reaction mechanics near 0-5 °C is:", opts: ["Benzene liquid lines", "Benzene diazoniun chloride", "Chlorobenzene compound", "Nitrobenzene rows"] },	
                hi: { q: "जब एनीलीन को 0-5 °C पर सोडियम नाइट्राइट और $HCl$ के साथ उपचारित किया जाता है (Diazotization), तो मुख्य उत्पाद बनता है:", opts: ["बेंजीन द्रव लाइनें", "बेंजीन डायज़ोनियम क्लोराइड (Benzene diazoniun chloride - highly valuable synthetic precursor framework)", "क्लोरोबेंजीन यौगिक", "नाइट्रोबेंजीन पंक्तियाँ"] },	
                correct: 1	
            },	
            {	
                en: { q: "The integration evaluation tracking boundary metrics $\\int_{0}^{\\pi/2} \\frac{\\sin x}{\\sin x + \\cos x} \\, dx$ computes to:", opts: ["\\pi / 2", "\\pi / 4", "\\pi", "Zero constant index"] },	
                hi: { q: "निश्चित समाकलन $\\int_{0}^{\\pi/2} \\frac{\\sin x}{\\sin x + \\cos x} \\, dx$ का सही संख्यात्मक मान क्या होगा?", opts: ["\\pi / 2", "\\pi / 4 (Applying King's property property adds complementary structures yielding a simplified integral equal to pi/4)", "\\pi", "शून्य नियत सूचकांक"] },	
                correct: 1	
            },	
            // --- ६०१ ते ६7५ प्रश्नांचा संच (JEE Main & Advanced - High-Weightage Concept Track) ---	
            {	
                en: { q: "If the complex number expression satisfies $z^2 + |z|^2 = 0$, then the locus of $z$ inside the complex plane tracks:", opts: ["A circle along the origin", "The absolute real axis line", "The absolute imaginary axis line", "A unique coordinate point only"] },	
                hi: { q: "यदि सम्मिश्र संख्या (Complex number) $z^2 + |z|^2 = 0$ संबंध को संतुष्ट करती है, तो सम्मिश्र तल में $z$ का बिंदुथ (Locus) क्या होगा?", opts: ["मूल बिंदु पर एक वृत्त", "पूर्ण वास्तविक अक्ष रेखा", "पूर्ण काल्पनिक अक्ष रेखा (Substituting z = x + iy yields 2x^2 = 0, meaning x=0, which represents the y-axis strictly)", "केवल एक विशिष्ट बिंदु"] },	
                correct: 2	
            },	
            {	
                en: { q: "An alternating current circuit setup achieves a state of electrical resonance. The phase angle adjustment between voltage and current equals:", opts: ["Zero radians", "$\\pi / 2$ radians", "$\\pi$ radians", "$\\pi / 4$ radians"] },	
                hi: { q: "एक प्रत्यावर्ती धारा (AC) परिपथ में विद्युत अनुनाद (Resonance) की स्थिति उत्पन्न होती है। वोल्टेज और धारा के बीच का कलांतर (Phase angle) क्या होगा?", opts: ["शून्य रेडियन (At resonance, inductive reactance cancels capacitive reactance, leaving circuit purely resistive)", "$\\pi / 2$ रेडियन", "$\\pi$ रेडियन", "$\\pi / 4$ रेडियन"] },	
                correct: 0	
            },	
            {	
                en: { q: "Which of the following carbohydrate variants is classified strictly as a non-reducing sugar system format?", opts: ["Glucose monosaccharide", "Fructose monosaccharide", "Sucrose disaccharide", "Maltose disaccharide"] },	
                hi: { q: "निम्नलिखित में से कौन सी शर्करा एक अनपचायी शर्करा (Non-reducing sugar) के रूप में वर्गीकृत की गई है?", opts: ["ग्लूकोज मोनोसैकराइड", "फ्रक्टोज मोनोसैकराइड", "सुक्रोज डाइसैकराइड (Glycosidic linkage involves both reducing centers of glucose and fructose, locking hemiacetal structures)", "माल्टोज डाइसैकराइड"] },	
                correct: 2	
            },	
            {	
                en: { q: "If the straight line path coordinate equation $y = mx + 1$ acts as a tangent line to the parabolic path $y^2 = 4x$, then the slope parameter $m$ equals:", opts: ["1", "2", "0.5", "-1"] },	
                hi: { q: "यदि सरल रेखा $y = mx + 1$ परवलय (Parabola) $y^2 = 4x$ पर एक स्पर्श रेखा है, तो प्रवणता प्राचल $m$ का मान क्या होगा?", opts: ["1 (Using standard parabolic tangency condition c = a / m; where a=1 and c=1, yielding m = 1)", "2", "0.5", "-1"] },	
                correct: 0	
            },	
            {	
                en: { q: "A pure semiconductor slab features zero absolute temperature status ($T = 0 \\, \\text{K}$). The electrical conduction behavior mimics:", opts: ["A perfect conductor", "A perfect insulator", "A metallic alloy track", "A superconducting matrix loop"] },	
                hi: { q: "एक शुद्ध अर्धचालक (Intrinsic semiconductor) परम शून्य तापमान ($T = 0 \\, \\text{K}$) पर है। इसका व्यवहार कैसा होगा?", opts: ["एक आदर्श चालक जैसा", "एक पूर्ण कुचालक जैसा (At absolute zero temperature, no thermal excitation exists to pump valence electrons across the bandgap energy barrier)", "एक धात्विक मिश्र धातु जैसा", "एक सुपरकंडक्टिंग मैट्रिक्स लूप जैसा"] },	
                correct: 1	
            },	
            {	
                en: { q: "The chemical structural linkage connecting amino acid monomer configurations together inside a protein macro-structure is named:", opts: ["Glycosidic structural layout", "Peptide linkage configuration", "Phosphodiester linkage path", "Ester linkage grid lines"] },	
                hi: { q: "प्रोटीन की संरचना में अमीनो अम्ल इकाइयों को आपस में जोड़ने वाला रासायनिक आबंध (Linkage) कहलाता है:", opts: ["ग्लाइकोसिडिक संरचनात्मक लेआउट", "पेप्टाइड आबंध संरचना (-CO-NH- amide linkage built via elimination of water between carboxyl and amine domains)", "फास्फोडाइएस्टर लिंक पाथ", "एस्टर लिंकेज ग्रिड लाइनें"] },	
                correct: 1	
            },	
            {	
                en: { q: "The total number of common tangent lines that can be concurrently drawn between the circles $x^2 + y^2 = 4$ and $x^2 + y^2 - 10x + 9 = 0$ is:", opts: ["1", "2", "3", "4"] },	
                hi: { q: "वृत्तों $x^2 + y^2 = 4$ और $x^2 + y^2 - 10x + 9 = 0$ के बीच खींची जा सकने वाली उभयनिष्ठ स्पर्श रेखाओं (Common tangents) की कुल संख्या क्या होगी?", opts: ["1", "2", "3 (Evaluating center distances r1=2, r2=4, d=5, satisfying condition d = r1 + r2, showing circles touch externally)", "4"] },	
                correct: 2	
            },	
            {	
                en: { q: "The work function value of a photo-emissive metal target scales up. The calculated threshold wavelength index for electron release will:", opts: ["Scale up higher", "Drop down lower", "Stay entirely constant", "Vibrate across zero limits"] },	
                hi: { q: "यदि किसी प्रकाश-संवेदी धातु का कार्य फलन (Work function) बढ़ाया जाता है, तो इसके इलेक्ट्रॉन उत्सर्जन की देहली तरंगदैर्ध्य (Threshold wavelength):", opts: ["बढ़ जाएगी", "घट जाएगी (Since threshold energy Phi = hc / lambda_0; scaling up energy forces reciprocal drop inside wavelength limits)", "पूरी तरह से स्थिर रहेगी", "शून्य सीमाओं पर कंपन करेगी"] },	
                correct: 1	
            },	
            {	
                en: { q: "Which structural polymer classification is generated via a series of step-growth condensation reaction steps under heating?", opts: ["High density polyethylene", "Buna-S synthetic rubber", "Nylon-6,6 structure profile", "Teflon polymer rows"] },	
                hi: { q: "निम्नलिखित में से कौन सा बहुलक (Polymer) संघनन बहुलकीकरण (Condensation polymerization) प्रक्रम द्वारा निर्मित होता है?", opts: ["उच्च घनत्व पॉलीथीन", "बुना-एस सिंथेटिक रबर", "नायलॉन-6,6 संरचना प्रोफाइल (Formed cleanly via hexamethylenediamine and adipic acid condensation elimination loops)", "टेफ्लॉन पॉलिमर पंक्तियाँ"] },	
                correct: 2	
            },	
            {	
                en: { q: "If the vector lines calculation satisfies triple product statement $[\\vec{a} - \\vec{b} \\quad \\vec{b} - \\vec{c} \\quad \\vec{c} - \\vec{a}]$, the scalar result simplifies to:", opts: ["0", "1", "2", "$2 [\\vec{a} \\quad \\vec{b} \\quad \\vec{c}]$"] },	
                hi: { q: "यदि वेक्टर अदिश त्रिक गुणनफल (Scalar triple product) $[\\vec{a} - \\vec{b} \\quad \\vec{b} - \\vec{c} \\quad \\vec{c} - \\vec{a}]$ का मूल्यांकन किया जाए, तो परिणाम होगा:", opts: ["0 (Linear combinations form dependent cyclic transformations closing the geometric matrix bounds tightly to zero)", "1", "2", "$2 [\\vec{a} \\quad \\vec{b} \\quad \\vec{c}]$"] },	
                correct: 0	
            },	
            {	
                en: { q: "An optical microscope resolution limit scales inversely with wavelength $\\lambda$. If blue light replaces yellow light illumination, resolution:", opts: ["Decreases", "Increases", "Remains unchanged", "Becomes absolute zero"] },	
                hi: { q: "एक सूक्ष्मदर्शी (Microscope) की विभेदन क्षमता (Resolving power) आपतित प्रकाश की तरंगदैर्ध्य के व्युत्क्रमानुपाती होती है। यदि पीले प्रकाश के स्थान पर नीले प्रकाश का उपयोग किया जाए, तो विभेदन क्षमता:", opts: ["घटेगी", "बढ़ेगी (Wavelength decreases for blue light, causing reciprocal boost to resolving limits)", "अपरिवर्तित रहेगी", "पूर्णतः शून्य हो जाएगी"] },	
                correct: 1	
            },	
            {	
                en: { q: "The fundamental monomer structural configuration unit that polymerizes to yield natural cis-polyisoprene rubber matrix is:", opts: ["Chloroprene unit line", "Isoprene structural unit", "Styrene ring segment", "Acrylonitrile molecule rows"] },	
                hi: { q: "प्राकृतिक रबर (Natural rubber) का मुख्य संरचनात्मक मोनोमर (Monomer) इकाई कौन सा होता है?", opts: ["क्लोरोप्रीन यूनिट लाइन", "आइसोप्रीन संरचनात्मक इकाई (2-methyl-1,3-butadiene variant chain structure)", "स्टायरीन रिंग सेगमेंट", "एक्रिलोनाइट्राइल अणु पंक्तियाँ"] },	
                correct: 1	
            },	
            {	
                en: { q: "The point value coordinates defining the absolute focus belonging to the algebraic parabola equation arrangement $y^2 = -8x$ is:", opts: ["(2, 0)", "(-2, 0)", "(0, -2)", "(0, 2)"] },	
                hi: { q: "परवलय (Parabola) समीकरण विन्यास $y^2 = -8x$ के नाभि (Focus) के सही निर्देशांक क्या होंगे?", opts: ["(2, 0)", "(-2, 0) (Comparing structural layout with standard y^2 = -4ax framework maps 4a=8, implying a=2; focus is at (-a, 0))", "(0, -2)", "(0, 2)"] },	
                correct: 1	
            },	
            {	
                en: { q: "A magnetic core material displays low retentivity and exceptionally low coercivity behaviors. This profile fits design rules for:", opts: ["Permanent compass magnets", "Transformer electromagnets", "Highly stable steel bars", "Dielectric isolation boundaries"] },	
                hi: { q: "एक चुंबकीय पदार्थ की धारणशीलता (Retentivity) और निग्राहिता (Coercivity) दोनों बहुत कम हैं। यह चुंबकीय प्रोफ़ाइल किसके निर्माण के लिए सर्वोत्तम है?", opts: ["स्थायी कम्पास चुंबक", "ट्रांसफार्मर के विद्युत चुंबक (Soft magnetic materials reduce hysteretic loop power drops across cyclic AC translation)", "अत्यधिक स्थिर स्टील बार", "परावैद्युत अलगाव सीमाएं"] },	
                correct: 1	
            },	
            {	
                en: { q: "Which vitamin organic molecule configuration belongs cleanly inside the water-soluble chemical distribution classification chart?", opts: ["Vitamin A component", "Vitamin D component", "Vitamin C component", "Vitamin E component"] },	
                hi: { q: "निम्नलिखित में से कौन सा विटामिन जल में घुलनशील (Water-soluble vitamin) श्रेणी के अंतर्गत आता है?", opts: ["विटामिन A घटक", "विटामिन D घटक", "विटामिन C घटक (Ascorbic acid carries highly polar structures making it instantly soluble in aqueous phases)", "विटामिन E घटक"] },	
                correct: 2	
            },	
            {	
                en: { q: "If a straight coordinate variable path line tracks coordinates such that it passes through origin symmetrically, the direction cosines satisfy:", opts: ["$l^2 + m^2 + n^2 = 1$", "$l + m + n = 1$", "$l = m = n = 1$", "$l^2 + m^2 + n^2 = 0$"] },	
                hi: { q: "त्रिविमीय ज्यामिति (3D Geometry) में किसी भी रेखा के दिक्-कोज्याओं (Direction cosines) के बीच का सही मूलभूत संबंध क्या होता है?", opts: ["$l^2 + m^2 + n^2 = 1$ (Fundamental quadratic trace identity mapping vector direction normalization bounds)", "$l + m + n = 1$", "$l = m = n = 1$", "$l^2 + m^2 + n^2 = 0$"] },	
                correct: 0	
            },	
            {	
                en: { q: "A long straight wire carries stable current $I$. At perpendicular distance $d$, magnetic field drops to $B$. At distance $2d$, field is:", opts: ["2 B", "4 B", "B / 2", "B / 4"] },	
                hi: { q: "एक लंबे सीधे तार में स्थिर धारा $I$ प्रवाहित हो रही है। तार से $d$ दूरी पर चुंबकीय क्षेत्र $B$ है। $2d$ दूरी पर चुंबकीय क्षेत्र का मान क्या होगा?", opts: ["2 B", "4 B", "B / 2 (By Ampere's law, magnetic field surrounding a linear conductor drops off inversely with distance parameters)", "B / 4"] },	
                correct: 2	
            },	
            {	
                en: { q: "The primary chemical structural identity generated when glucose sugar reacts cleanly with Hydroxylamine tracking solution is:", opts: ["Glucose oxime layout", "Gluconic acid profile", "Sorbitol molecular trace", "Saccharic macro structure"] },	
                hi: { q: "जब ग्लूकोज हाइड्रोक्सिलएमीन ($NH_2OH$) के साथ अभिक्रिया करता है, तो बनने वाला मुख्य रासायनिक उत्पाद क्या कहलाता है?", opts: ["ग्लूकोज ऑक्सिम लेआउट (Hydroxylamine targets aldehyde carbonyl carbons forming stable C=N linkage transformations)", "ग्लूकोनिक अम्ल प्रोफाइल", "सॉर्बिटोल आणविक ट्रेस", "सैकेरिक मैक्रो संरचना"] },	
                correct: 0	
            },	
            {	
                en: { q: "The computed value belonging to the complex polar root configuration summation index $(1 + \\omega + \\omega^2)^{10}$ simplifies to:", opts: ["1", "0", "\\omega", "\\omega^2"] },	
                hi: { q: "इकाई के काल्पनिक घनमूलों (Cube roots of unity) के संबंध के आधार पर $(1 + \\omega + \\omega^2)^{10}$ का सरलीकृत मान क्या होगा?", opts: ["1", "0 (Since algebraic structural identity binds the summation loop 1 + omega + omega^2 directly to absolute zero)", "\\omega", "\\omega^2"] },	
                correct: 1	
            },	
            {	
                en: { q: "A physical laser beam has wavelength 600 nm. The calculated momentum index belonging to each photon inside the propagation stream is:", opts: ["1.1 x 10^-27 kg m/s", "2.2 x 10^-27 kg m/s", "6.6 x 10^-27 kg m/s", "4.4 x 10^-27 kg m/s"] },	
                hi: { q: "एक लेजर बीम की तरंगदैर्ध्य 600 nm है। इस प्रवाह के भीतर प्रत्येक फोटॉन का संवेग (Momentum) क्या होगा?", opts: ["1.1 x 10^-27 kg m/s (Using de-Broglie momentum equation p = h / lambda = 6.63*10^-34 / 600*10^-9)", "2.2 x 10^-27 kg m/s", "6.6 x 10^-27 kg m/s", "4.4 x 10^-27 kg m/s"] },	
                correct: 0	
            },	
            {	
                en: { q: "Which chemical compound undergoes swift alkaline hydrolysis via a clean unimolecular substitution ($S_N1$) kinetic pathway mechanism?", opts: ["Methyl chloride lines", "Ethyl bromide tracks", "Isopropyl chloride rows", "tert-Butyl chloride configuration"] },	
                hi: { q: "निम्नलिखित में से कौन सा एल्किल हैलाइड नाभिकरागी प्रतिस्थापन ($S_N1$) अभिक्रिया के प्रति सर्वाधिक क्रियाशीलता प्रदर्शित करता है?", opts: ["मेथिल क्लोराइड लाइनें", "एथिल ब्रोमाइड ट्रैक", "आइसोप्रोपिल क्लोराइड पंक्तियाँ", "tert-ब्यूटिल क्लोराइड (Forms a highly planar, resonance-stable tertiary carbocation intermediate structure configuration)"] },	
                correct: 3	
            },	
            {	
                en: { q: "The calculated area of the spatial triangle bound tightly by position coordinates vectors $\\vec{a} = 2\\hat{i}$ and $\\vec{b} = 3\\hat{j}$ is:", opts: ["6 square units", "3 square units", "1.5 square units", "12 square units"] },	
                hi: { q: "स्थिति वेक्टरों $\\vec{a} = 2\\hat{i}$ और $\\vec{b} = 3\\hat{j}$ द्वारा बनने वाले त्रिभुज का क्षेत्रफल (Area of triangle) कितना होगा?", opts: ["6 वर्ग इकाई", "3 वर्ग इकाई (Using vector area integration formula Area = 0.5 * |a x b| = 0.5 * |6 k| = 3 units)", "1.5 वर्ग इकाई", "12 वर्ग इकाई"] },	
                correct: 1	
            },	
            {	
                en: { q: "A target physical system tracking radioactive decay records a half-life of 100 seconds. Decaying kinetic constant rate is calculated near:", opts: ["0.00693 s^-1", "0.0693 s^-1", "0.693 s^-1", "0.000693 s^-1"] },	
                hi: { q: "एक रेडियोधर्मी नमूने की अर्ध-आयु (Half-life) 100 सेकंड है। इस क्षय प्रक्रम का वेग नियतांक (Decay constant) क्या होगा?", opts: ["0.00693 s^-1 (Using first order decay equation lambda = ln(2) / T_half-life = 0.6931 / 100 seconds parameters)", "0.0693 s^-1", "0.693 s^-1", "0.000693 s^-1"] },	
                correct: 0	
            },	
            {	
                en: { q: "The highly valuable industrial cross-linked resin copolymer synthesized via condensation of phenol and formaldehyde mixtures is named:", opts: ["Buna-N rubber rows", "Bakelite thermosetting material", "Neoprene synthetic layout", "Nylon-6 polymer chain"] },	
                hi: { q: "फिनॉल और फॉर्मेल्डिहाइड के संघनन द्वारा निर्मित होने वाला अत्यधिक उपयोगी व्यावसायिक क्रॉस-लिंक्ड पॉलीमर कहलाता है:", opts: ["बुना-एन रबर पंक्तियाँ", "बेकेलाइट (Thermosetting network structure providing extreme structural resilience under thermal loads)", "नियोप्रीन सिंथेटिक लेआउट", "नायलॉन-6 बहुलक श्रृंखला"] },	
                correct: 1	
            },	
            {	
                en: { q: "If the eccentricity belonging to an elliptical coordinate system track matches absolute zero, the geometric layout reshapes into:", opts: ["A straight line trajectory", "A perfect circle boundary", "A parabolic trajectory line", "A hyperbola splitting curve"] },	
                hi: { q: "यदि किसी दीर्घवृत्त (Ellipse) की उत्केन्द्रता (Eccentricity) शून्य हो जाती है, तो उसकी ज्यामितीय आकृति बदलकर हो जाएगी:", opts: ["एक सरल रेखा", "एक पूर्ण वृत्त (When eccentricity reaches absolute zero, both focal spots converge smoothly onto center position)", "एक परवलय", "एक अतिपरवलय"] },	
                correct: 1	
            },	
            // --- ६७६ ते ७५० प्रश्नांचा संच (JEE Main & Advanced - High-Weightage Core Match) ---	
            {	
                en: { q: "If the cross product calculation satisfies $|\\vec{a} \\times \\vec{b}|^2 + (\\vec{a} \\cdot \\vec{b})^2 = 144$ along with $|\\vec{a}| = 3$, then magnitude $|\\vec{b}|$ equals:", opts: ["3", "4", "12", "16"] },	
                hi: { q: "यदि वेक्टर संबंध $|\\vec{a} \\times \\vec{b}|^2 + (\\vec{a} \\cdot \\vec{b})^2 = 144$ को संतुष्ट करता है और $|\\vec{a}| = 3$ है, तो परिमाण $|\\vec{b}|$ का मान क्या होगा?", opts: ["3", "4 (Using Lagrange's identity identity, the expression simplifies to |a|^2 * |b|^2 = 144; substituting |a|=3 gives 9 * |b|^2 = 144)", "12", "16"] },	
                correct: 1	
            },	
            {	
                en: { q: "An equiconvex glass lens has refractive index 1.5 and focal length $f$ in air. If completely immersed inside water (index 1.33), new focal length is:", opts: ["f", "2 f", "4 f", "f / 2"] },	
                hi: { q: "एक सम-उभयोत्तल (Equiconvex) कांच के लेंस का अपवर्तनांक 1.5 और हवा में फोकस दूरी $f$ है। यदि इसे पानी (अपवर्तनांक 1.33) में डुबोया जाए, तो नई फोकस दूरी होगी:", opts: ["f", "2 f", "4 f (By Lens Maker's Formula, the focal length scales up cleanly by approximately four times inside water environments)", "f / 2"] },	
                correct: 2	
            },	
            {	
                en: { q: "Which of the following organic halide structures reacts fastest during a biomolecular nucleophilic substitution ($S_N2$) transition?", opts: ["Methyl chloride lines", "Ethyl chloride tracks", "Isopropyl chloride rows", "tert-Butyl chloride matrix"] },	
                hi: { q: "निम्नलिखित में से कौन सा कार्बनिक हैलाइड द्वि-अणुक नाभिकरागी प्रतिस्थापन ($S_N2$) अभिक्रिया के प्रति उच्चतम प्रतिक्रियाशीलता प्रदर्शित करता है?", opts: ["मेथिल क्लोराइड लाइनें (Lacks steric hindrance around the localized electropositive carbon atom center)", "एथिल क्लोराइड ट्रैक", "आइसोप्रोपिल क्लोराइड पंक्तियाँ", "tert-ब्यूटिल क्लोराइड मैट्रिक्स"] },	
                correct: 0	
            },	
            {	
                en: { q: "If the integration function boundaries satisfy $\\int_{-a}^{a} f(x) \\, dx = 0$, the mathematical function $f(x)$ must strictly be classified as:", opts: ["An even function format", "An odd function format", "A periodic function track", "A continuous constant line"] },	
                hi: { q: "यदि निश्चित समाकलन की सीमाएं संबंध $\\int_{-a}^{a} f(x) \\, dx = 0$ को संतुष्ट करती हैं, तो फलन $f(x)$ अनिवार्य रूप से किस प्रकार का होना चाहिए?", opts: ["एक सम फलन (Even function) प्रारूप", "एक विषम फलन (Odd function) प्रारूप (Symmetrical cancellation occurs across positive and negative coordinate domains when f(-x) = -f(x))", "एक आवर्ती फलन ट्रैक", "एक सतत नियत रेखा"] },	
                correct: 1	
            },	
            {	
                en: { q: "A step tracking interface features a transformer having turn ratio $N_p / N_s = 1 / 2$. If input AC voltage is 110 V, output voltage equals:", opts: ["55 V", "220 V", "110 V", "440 V"] },	
                hi: { q: "एक ट्रांसफार्मर में फेरों का अनुपात (Turn ratio) $N_p / N_s = 1 / 2$ है। यदि इनपुट AC वोल्टेज 110 V है, तो आउटपुट वोल्टेज क्या होगा?", opts: ["55 V", "220 V (Using step-up ratio conversion mechanics: V_s = V_p * [N_s / N_p] = 110 * 2 = 220 Volts)", "110 V", "440 V"] },	
                correct: 1	
            },	
            {	
                en: { q: "The chemical element transition compound displaying highest stable oxidation state (+8) among the first transition row matrix series is:", opts: ["Manganese ($Mn$)", "Chromium ($Cr$)", "Ruthenium ($Ru$)", "Osmium ($Os$)"] },	
                hi: { q: "संक्रमण तत्वों (d-block elements) में से कौन सा तत्व अपनी उच्चतम संभव ऑक्सीकरण अवस्था (+8) के लिए व्यापक रूप से जाना जाता है?", opts: ["मैंगनीज ($Mn$)", "क्रोमियम ($Cr$)", "रुथीनियम ($Ru$)", "ऑस्मियम ($Os$ - Forms stable tetrahedral volatile tetroxide compound OsO4 cleanly)"] },	
                correct: 3	
            },	
            {	
                en: { q: "The mathematical angle generated between the vector coordinate pathways $\\vec{a} = \\hat{i} + \\hat{j}$ and $\\vec{b} = \\hat{i} - \\hat{j}$ evaluates to:", opts: ["Zero degrees", "45 degrees", "90 degrees", "180 degrees"] },	
                hi: { q: "वेक्टर पथों $\\vec{a} = \\hat{i} + \\hat{j}$ तथा $\\vec{b} = \\hat{i} - \\hat{j}$ के बीच बनने वाला ज्यामितीय कोण कितना होगा?", opts: ["शून्य डिग्री", "45 डिग्री", "90 डिग्री (Evaluating scalar dot product: (1)(1) + (1)(-1) = 0, verifying orthogonal orientation metrics)", "180 डिग्री"] },	
                correct: 2	
            },	
            {	
                en: { q: "An ideal gas operates through an adiabatic expansion tracking profile. The relationship between temperature and volume satisfies:", opts: ["T * V^(gamma - 1) = Constant", "T * V^gamma = Constant", "T^gamma * V = Constant", "P * V = T"] },	
                hi: { q: "एक आदर्श गैस रुद्धोष्म प्रक्रम (Adiabatic process) के तहत प्रसारित होती है। इसके तापमान और आयतन के बीच का सही संबंध क्या होगा?", opts: ["T * V^(gamma - 1) = Constant (Derived from fundamental classical thermodynamic state equations across zero heat transfer bounds)", "T * V^gamma = Constant", "T^gamma * V = Constant", "P * V = T"] },	
                correct: 0	
            },	
            {	
                en: { q: "Which organic preparation layout converts an amide directly into a primary amine with one less carbon atom using Bromine and KOH?", opts: ["Gabriel Phthalimide path", "Hofmann Bromamide reaction", "Clemmensen reduction track", "Wolff-Kishner grid rows"] },	
                hi: { q: "कौन सा रासायनिक प्रक्रम किसी एमाइड को ब्रोमीन और $KOH$ द्वारा एक कम कार्बन वाले प्राथमिक एमीन में बदल देता है?", opts: ["गैब्रिएल थैलिमाइड पथ", "हाफमान ब्रोमामाइड निम्नीकरण अभिक्रिया (Hofmann Bromamide reaction involving degradation steps with single carbon drop outputs)", "क्लीमेंसन अपचयन ट्रैक", "वुल्फ-किश्नर ग्रिड पंक्तियाँ"] },	
                correct: 1	
            },	
            {	
                en: { q: "If the calculation parameters track the summation loop of $\\int_{0}^{\\pi/2} \\ln(\\tan x) \\, dx$, the integrated value evaluates to:", opts: ["0", "\\pi / 2", "\\ln 2", "-\\pi \\ln 2"] },	
                hi: { q: "निश्चित समाकलन संबंध $\\int_{0}^{\\pi/2} \\ln(\\tan x) \\, dx$ का सही संख्यात्मक मूल्यांकन क्या होगा?", opts: ["0 (Applying property complementary substitution transforms tan(x) into cot(x); adding both logs results in ln(1) = 0)", "\\pi / 2", "\\ln 2", "-\\pi \\ln 2"] },	
                correct: 0	
            },	
            {	
                en: { q: "A sound tracking waveguide records a fundamental resonance wavelength $\\lambda$ inside a tube closed at one end. The next overtone wavelength is:", opts: ["\\lambda / 2", "\\lambda / 3", "2 \\lambda / 3", "3 \\lambda"] },	
                hi: { q: "एक सिरे पर बंद ऑर्गन पाइप की मूल आवृत्ति की तरंगदैर्ध्य $\\lambda$ है। इस बंद पाइप में उत्पन्न होने वाले अगले अधिस्वरक (Overtone) की तरंगदैर्ध्य क्या होगी?", opts: ["\\lambda / 2", "\\lambda / 3 (Closed boundary structures support odd harmonic progressions cleanly: lambda_next = lambda / 3)", "2 \\lambda / 3", "3 \\lambda"] },	
                correct: 1	
            },	
            {	
                en: { q: "The chemical structural configuration displaying high paramagnetic characteristics among the given coordination oxide series is:", opts: ["$[Fe(CN)_6]^{3-}$ configuration", "$[Fe(F)_6]^{3-}$ configuration", "$[Co(NH_3)_6]^{3+}$ configuration", "$[Zn(H_2O)_6]^{2+}$ configuration"] },	
                hi: { q: "दिए गए उपसहसंयोजन संकुलों में से कौन सा अत्यधिक अनुचुंबकीय (High-spin paramagnetic) व्यवहार प्रदर्शित करता है?", opts: ["$[Fe(CN)_6]^{3-}$ विन्यास", "$[Fe(F)_6]^{3-}$ विन्यास (Fluoride is a weak field ligand, leaving 5 unpaired electrons inside iron d-orbital bands)", "$[Co(NH_3)_6]^{3+}$ विन्यास", "$[Zn(H_2O)_6]^{2+}$ विन्यास"] },	
                correct: 1	
            },	
            {	
                en: { q: "The differential area equation system tracing the full area wrapped inside circular boundary $x^2 + y^2 = a^2$ scales exactly to:", opts: ["\\pi a", "\\pi a^2", "2 \\pi a", "0.5 \\pi a^2"] },	
                hi: { q: "समाकलन विधि द्वारा वृत्ताकार वलय क्षेत्र $x^2 + y^2 = a^2$ द्वारा घिरे कुल क्षेत्रफल (Area of circle) का मान कितना प्राप्त होता है?", opts: ["\\pi a", "\\pi a^2 (Standard double integration variable polar transformation identity verification yield)", "2 \\pi a", "0.5 \\pi a^2"] },	
                correct: 1	
            },	
            {	
                en: { q: "A long linear wire is bent into a circle carrying current $I$. If its field at center is $B_c$, the field at distance $x \\gg R$ along axis drops as:", opts: ["1 / x", "1 / x^2", "1 / x^3", "Independent of x"] },	
                hi: { q: "एक वृत्ताकार धारावाही लूप के अक्ष (Axis) पर केंद्र से अत्यधिक दूरी $x$ ($x \\gg R$) पर चुंबकीय क्षेत्र की तीव्रता किस अनुपात में घटती है?", opts: ["1 / x", "1 / x^2", "1 / x^3 (Axial magnetic fields drop off exponentially in cubic proportion according to distant dipole laws)", "Independent of x"] },	
                correct: 2	
            },	
            {	
                en: { q: "Which organic synthesis path processes an aromatic benzene ring into an acyl-benzene derivative using an acid chloride and $AlCl_3$?", opts: ["Friedel-Crafts Acylation", "Wurtz-Fittig substitution", "Gattermann aldehyde synthesis", "Sandmeyer conversion lines"] },	
                hi: { q: "निर्जल $AlCl_3$ की उपस्थिति में बेंजीन की एसिड क्लोराइड के साथ अभिक्रिया द्वारा एशिल-बेंजीन बनाने वाला प्रक्रम क्या कहलाता है?", opts: ["फ्रीडेल-क्राफ्ट्स एसिलीकरण (Friedel-Crafts Acylation - classic electrophilic aromatic substitution pathway)", "वुर्ट्ज़-फिटिग प्रतिस्थापन", "गैटरमैन एल्डिहाइड संश्लेषण", "सैंडमेयर रूपांतरण लाइनें"] },	
                correct: 0	
            },	
            {	
                en: { q: "If the probability density layout for rolling a double value outcome across two balanced dice matches index $P$, then $P$ equals:", opts: ["1/36", "1/6", "5/36", "1/12"] },	
                hi: { q: "दो पासे एक साथ फेंकने पर दोनों पासों पर समान अंक (Doublet) आने की सही गणितीय प्रायिकता क्या होगी?", opts: ["1/36", "1/6 (Favorable combinations are six matching pairs: (1,1) through (6,6); 6/36 evaluates precisely to 1/6)", "5/36", "1/12"] },	
                correct: 1	
            },	
            {	
                en: { q: "A simple radio antenna picks up electromagnetic signals. The basic functional operation requires keeping tracking layouts tuned via:", opts: ["LCR resonant circuitry loops", "Pure resistive loading arrays", "Static thermal diode bridges", "Step down galvanic tracking"] },	
                hi: { q: "एक रेडियो रिसीवर में सिग्नलों को ट्यून (Tune) करने के लिए निम्नलिखित में से किस मूलभूत परिपथ का उपयोग किया जाता है?", opts: ["LCR अनुनादी परिपथ (LCR resonant circuitry loops permit highly selective band pass frequency tuning functions)", "शुद्ध प्रतिरोधी लोडिंग सरणियाँ", "स्थिर थर्मल डायोड ब्रिज", "स्टेप डाउन गैल्वेनिक ट्रैकिंग"] },	
                correct: 0	
            },	
            {	
                en: { q: "The specific arrangement layout tracking boiling point elevations for identical concentration solution states among listed options is:", opts: ["$NaCl > Glucose > BaCl_2$", "$BaCl_2 > NaCl > Glucose$", "$Glucose > NaCl > BaCl_2$", "$NaCl > BaCl_2 > Glucose$"] },	
                hi: { q: "समान मोलर सांद्रता वाले जलीय विलयनों के क्वथनांक उन्नयन (Boiling point elevation) का सही अवरोही क्रम कौन सा है?", opts: ["$NaCl > Glucose > BaCl_2$", "$BaCl_2 > NaCl > Glucose$ (Van't Hoff factor 'i' values yield 3 for BaCl2, 2 for NaCl, and 1 for Glucose rows)", "$Glucose > NaCl > BaCl_2$", "$NaCl > BaCl_2 > Glucose$"] },	
                correct: 1	
            },	
            {	
                en: { q: "The coordinate equation tracking the directional normal vector of the plane layout represented by $3x - 4y + 5z = 12$ matches:", opts: ["$3\\hat{i} - 4\\hat{j} + 5\\hat{k}$", "$3\\hat{i} + 4\\hat{j} + 5\\hat{k}$", "$\\hat{i} + \\hat{j} + \\hat{k}$", "$-3\\hat{i} + 4\\hat{j} - 5\\hat{k}$"] },	
                hi: { q: "समतल समीकरण $3x - 4y + 5z = 12$ के अभिलंब वेक्टर (Normal vector) के सही दिशात्मक निर्देशांक क्या होंगे?", opts: ["$3\\hat{i} - 4\\hat{j} + 5\\hat{k}$ (Coefficients of spatial variables extract direction coordinates of orthogonal boundary lines directly)", "$3\\hat{i} + 4\\hat{j} + 5\\hat{k}$", "$\\hat{i} + \\hat{j} + \\hat{k}$", "$-3\\hat{i} + 4\\hat{j} - 5\\hat{k}$"] },	
                correct: 0	
            },	
            {	
                en: { q: "A thin metal wire loop rotates inside a continuous uniform magnetic field. Total electric charge flowing through loop parameters shifts with:", opts: ["Total change inside magnetic flux", "Speed of structural rotation", "Intermediate path variations", "Thermal resistance index drop"] },	
                hi: { q: "एक चुंबकीय क्षेत्र में घूर्णन करते हुए बंद लूप में प्रवाहित होने वाले कुल प्रेरित आवेश (Induced charge) का मान निर्भर करता है:", opts: ["चुंबकीय फ्लक्स में कुल परिवर्तन पर (Induced charge Q = delta_Phi / R, completely independent of the speed of rotation metrics)", "घूर्णन की गति पर", "मध्यवर्ती पथ भिन्नताओं पर", "थर्मल प्रतिरोध सूचकांक गिरावट पर"] },	
                correct: 0	
            },	
            {	
                en: { q: "Which core element is commonly added inside a standard vulcanization rubber synthesis mix to crosslink polyisoprene matrix segments?", opts: ["Phosphorus rows", "Sulfur element powder", "Nitrogen tracking gas", "Silicon chemical chains"] },	
                hi: { q: "प्राकृतिक रबर के वल्कनीकरण (Vulcanization) प्रक्रम में रबर को अधिक मजबूत और लचीला बनाने के लिए क्या मिलाया जाता है?", opts: ["फास्फोरस पंक्तियाँ", "सल्फर तत्व पाउडर (Sulfur atoms form stable disulfide bridges crosslinking adjacent polymer linear pathways tightly)", "नाइट्रोजन ट्रैकिंग गैस", "सिलिकॉन रासायनिक श्रृंखलाएं"] },	
                correct: 1	
            },	
            {	
                en: { q: "If matrix layout satisfy multiplication mapping condition $A B = A$ and $B A = B$, then the square matrix elements are classified as:", opts: ["Idempotent matrices format", "Involutory matrices format", "Nilpotent matrices format", "Orthogonal matrices format"] },	
                hi: { q: "यदि दो वर्ग आव्यूह $A B = A$ और $B A = B$ संबंधों को संतुष्ट करते हैं, तो $A$ और $B$ किस श्रेणी के अंतर्गत आते हैं?", opts: ["वर्गसम आव्यूह (Idempotent matrices) प्रारूप (Evaluating properties confirms A^2 = A and B^2 = B identities identically)", "अंतर्वलनीय (Involutory) प्रारूप", "शून्यभावी (Nilpotent) प्रारूप", "लंबकोणीय (Orthogonal) प्रारूप"] },	
                correct: 0	
            },	
            {	
                en: { q: "A source charge produces an electrostatic potential field drops tracking formula $V = 2x^2$. Calculated electric field at coordinate $x=1$ equals:", opts: ["-4 V/m", "+4 V/m", "-2 V/m", "Zero constant balance"] },	
                hi: { q: "एक क्षेत्र में विद्युत विभव का समीकरण $V = 2x^2$ द्वारा निरूपित है। स्थिति $x=1$ पर विद्युत क्षेत्र की तीव्रता (Electric field) क्या होगी?", opts: ["-4 V/m (Using differential field relationship identity E = - dV / dx = - 4x; substituting x=1 yields -4 Volts per meter)", "+4 V/m", "-2 V/m", "शून्य नियत संतुलन"] },	
                correct: 0	
            },	
            {	
                en: { q: "The chemical compound structure showing a sharp and clean optical rotation configuration matching dextrorotatory d-glucose is also named:", opts: ["(+)-Glucose molecule", "(-)-Fructose molecule", "L-Glucose isomer grid", "Beta-anomeric compound"] },	
                hi: { q: "प्राकृतिक रूप से पाए जाने वाले दक्षिणध्रुवणघूर्णक (Dextrorotatory) ग्लूकोज अणु का सही रासायनिक नाम विन्यास क्या होता है?", opts: ["(+)-ग्लूकोज अणु (The (+) indicator explicitly represents clockwise rotation of plane polarized light tracking loops)", "(-)-फ्रक्टोज अणु", "L-ग्लूकोज समावयवी ग्रिड", "बीटा-एनोमेरिक यौगिक"] },	
                correct: 0	
            },	
            {	
                en: { q: "The value of the definite calculus area evaluated tracking integral function $\\int_{0}^{\\pi} \\sin^2 x \\, dx$ simplifies identically to:", opts: ["\\pi", "\\pi / 2", "2\\pi", "Zero constant index"] },	
                hi: { q: "निश्चित समाकलन $\\int_{0}^{\\pi} \\sin^2 x \\, dx$ का परिकलित शुद्ध मान क्या होगा?", opts: ["\\pi", "\\pi / 2 (Using trigonometric identity transformation to 1/2 * int (1 - cos(2x)) dx across boundaries 0 to pi)", "2\\pi", "शून्य नियत सूचकांक"] },	
                correct: 1	
            },	
            // --- ७५१ ते ८२५ प्रश्नांचा संच (JEE Main & Advanced - Special Track 10) ---	
            {	
                en: { q: "If the short vector projection distance of $\\vec{a}$ on $\\vec{b}$ matches exactly the scalar projection of $\\vec{b}$ on $\\vec{a}$, then:", opts: ["|a| = |b|", "a . b = 0", "a x b = 0", "|a| / |b| = 1 or vectors are orthogonal"] },	
                hi: { q: "यदि $\\vec{a}$ का $\\vec{b}$ पर प्रक्षेप (Projection), $\\vec{b}$ के $\\vec{a}$ पर प्रक्षेप के बिल्कुल बराबर है, तो सही संबंध क्या होगा?", opts: ["|a| = |b|", "a . b = 0", "a x b = 0", "|a| = |b| अथवा वेक्टर परस्पर लंबवत हैं (Equating formulations: (a.b)/|b| = (a.b)/|a| implies either numerators are zero or denominators match)"] },	
                correct: 3	
            },	
            {	
                en: { q: "A step tracking transformer core has power efficiency 100%. If input features 220V and 5A while output steps up to 440V, output current is:", opts: ["10 A", "2.5 A", "5 A", "1.25 A"] },	
                hi: { q: "एक आदर्श ट्रांसफार्मर की दक्षता 100% है। यदि इनपुट वोल्टेज 220V और धारा 5A है, तथा आउटपुट वोल्टेज 440V तक बढ़ाया जाता है, तो आउटपुट धारा क्या होगी?", opts: ["10 A", "2.5 A (For an ideal transformer, power remains invariant: V_p * I_p = V_s * I_s, so 220 * 5 = 440 * I_s)", "5 A", "1.25 A"] },	
                correct: 1	
            },	
            {	
                en: { q: "Which of the following biochemical organic complexes acts as an intense structural structural catalyst inside the human blood matrix to transport oxygen gas?", opts: ["Chlorophyll configuration", "Hemoglobin complex", "Vitamin B12 core", "Myosin structural row"] },	
                hi: { q: "मानव रक्त परिसंचरण प्रणाली में ऑक्सीजन गैस के परिवहन के लिए जिम्मेदार मुख्य उपसहसंयोजन यौगिक (Coordination complex) कौन सा है?", opts: ["क्लोरोफिल विन्यास", "हीमोग्लोबिन संकुल (Iron-based porphyrin macrocycle network configuration optimized for reversible oxygenation loops)", "विटामिन B12 कोर", "मायोसिन संरचनात्मक पंक्ति"] },	
                correct: 1	
            },	
            {	
                en: { q: "If the continuous lines calculation tracks equations $\\frac{x-1}{2} = \\frac{y-2}{3} = \\frac{z-3}{k}$ and $\\frac{x-2}{3} = \\frac{y-3}{4} = \\frac{z-4}{5}$ intersecting orthogonally, then $k$ is:", opts: ["-2", "-3.6", "2", "0"] },	
                hi: { q: "यदि त्रिविमीय रेखाएं $\\frac{x-1}{2} = \\frac{y-2}{3} = \\frac{z-3}{k}$ और $\\frac{x-2}{3} = \\frac{y-3}{4} = \\frac{z-4}{5}$ परस्पर लंबवत (Orthogonal) हैं, तो $k$ का मान क्या होगा?", opts: ["-2", "-3.6 (Applying orthogonal direction vector constraints: a1a2 + b1b2 + c1c2 = 0 matrix layout, yields 6 + 12 + 5k = 0)", "2", "0"] },	
                correct: 1	
            },	
            {	
                en: { q: "A metal ring is pulled horizontally out of a localized uniform vertical magnetic field region. The direction of induced current is:", opts: ["Clockwise always", "Counter-clockwise always", "Alternating periodically", "Zero absolute constant"] },	
                hi: { q: "एक धातु की अंगूठी (Ring) को एक ऊर्ध्वाधर चुंबकीय क्षेत्र क्षेत्र से बाहर खींचा जाता है। रिंग में प्रेरित धारा की दिशा क्या होगी?", opts: ["दक्षिणावर्त (Clockwise) हमेशा (By Lenz's Law, the induced field must oppose the drop in internal downward magnetic flux tracks)", "वामावर्त हमेशा", "आवर्ती रूप से बदलते हुए", "शून्य पूर्ण नियतांक"] },	
                correct: 0	
            },	
            {	
                en: { q: "The primary chemical functional product formed when an organic ketone molecule is reduced via Zinc amalgam ($Zn/Hg$) and concentrated $HCl$ is:", opts: ["Primary alcohol layout", "Secondary alcohol profile", "Alkane hydro-carbon row", "Carboxylic acid block"] },	
                hi: { q: "जब किसी कीटोन को जिंक अमलगम ($Zn/Hg$) और सांद्र $HCl$ के साथ अपचयित किया जाता है (Clemmensen reduction), तो मुख्य उत्पाद क्या बनता है?", opts: ["प्राथमिक अल्कोहल लेआउट", "द्वितीयक अल्कोहल प्रोफाइल", "एल्केन हाइड्रोकार्बन पंक्ति (The carbonyl C=O bridge is converted cleanly into a saturated -CH2- linkage group)", "कारबॉक्सीलिक अम्ल ब्लॉक"] },	
                correct: 2	
            },	
            {	
                en: { q: "The total number of terms containing real independent coordinate values inside the structural expansion grid of $(x + y + z)^{10}$ is calculated as:", opts: ["55", "66", "11", "220"] },	
                hi: { q: "त्रिपद बहुपद विन्यास $(x + y + z)^{10}$ के पूर्ण बीजगणितीय प्रसार (Expansion) में कुल पदों की संख्या कितनी होगी?", opts: ["55", "66 (Using standard combinatorics formula for multilinear compositions: nCr(n + r - 1, r - 1) = nCr(10 + 3 - 1, 3 - 1) = nCr(12, 2))", "11", "220"] },	
                correct: 1	
            },	
            {	
                en: { q: "An alternating current tracking voltage profile is given by $V = 220\\sqrt{2} \\sin(100\\pi t)$. The calculated root-mean-square ($V_{rms}$) voltage is:", opts: ["220 V", "110 V", "440 V", "311 V"] },	
                hi: { q: "एक प्रत्यावर्ती धारा वोल्टेज का समीकरण $V = 220\\sqrt{2} \\sin(100\\pi t)$ है। इसका वर्ग-माध्य-मूल विभव ($V_{rms}$) कितना होगा?", opts: ["220 V (V_rms is evaluated as maximum peak amplitude divided by sqrt(2); hence 220*sqrt(2) / sqrt(2) = 220 Volts)", "110 V", "440 V", "311 V"] },	
                correct: 0	
            },	
            {	
                en: { q: "Which chemical organic reactant converts a carboxylic acid directly into an acyl chloride compound via nucleophilic chlorine swap transformations?", opts: ["$PCl_5$", "$NaCl$ matrix", "$HCl$ solution", "$Cl_2$ gas rows"] },	
                hi: { q: "कौन सा रासायनिक अभिकर्मक कारबॉक्सीलिक अम्ल समूह (-COOH) को सीधे एसिल क्लोराइड (-COCl) में परिवर्तित कर देता है?", opts: ["$PCl_5$ (Phosphorus pentachloride acts as an aggressive hydroxyl group displacement agent across organic matrix rows)", "$NaCl$ मैट्रिक्स", "$HCl$ विलयन", "$Cl_2$ गैस पंक्तियाँ"] },	
                correct: 0	
            },	
            {	
                en: { q: "If two events $A$ and $B$ are such that $P(A) = 0.6$, $P(B) = 0.3$, and $P(A \\cap B) = 0.2$, the conditional probability metric $P(A|B)$ equals:", opts: ["1/3", "2/3", "1/2", "3/4"] },	
                hi: { q: "यदि दो घटनाएं $A$ और $B$ इस प्रकार हैं कि $P(A) = 0.6$, $P(B) = 0.3$, और $P(A \\cap B) = 0.2$ है, तो सप्रतिबंध प्रायिकता $P(A|B)$ का मान क्या होगा?", opts: ["1/3", "2/3 (Using definition formula for conditional events: P(A|B) = P(A intersects B) / P(B) which maps directly to 0.2 / 0.3)", "1/2", "3/4"] },	
                correct: 1	
            },	
            {	
                en: { q: "A flat circular loop of radius $R$ rotates with angular frequency $\\omega$ inside a uniform magnetic field $B$ orthogonal to axis. Peak induced EMF is:", opts: ["B \\pi R^2 \\omega", "0.5 B \\pi R^2 \\omega", "2 B \\pi R^2 \\omega", "Zero constant"] },	
                hi: { q: "त्रिज्या $R$ का एक वृत्ताकार लूप एक समरूप चुंबकीय क्षेत्र $B$ में कोणीय आवृत्ति $\\omega$ से घूम रहा है। इसमें उत्पन्न अधिकतम प्रेरित विद्युत वाहक बल (Peak EMF) होगा:", opts: ["B \\pi R^2 \\omega (Derived via differentiation of magnetic flux profile tracking equation: E_max = N * B * A * omega)", "0.5 B \\pi R^2 \\omega", "2 B \\pi R^2 \\omega", "शून्य नियत"] },	
                correct: 0	
            },	
            {	
                en: { q: "The reduction reaction configuration processing an alkyl cyanide into an aldehyde via Stannous chloride and $HCl$ is named:", opts: ["Stephen reduction path", "Rosenmund reduction loop", "Cannizzaro reaction grid", "Etard reaction sequence"] },	
                hi: { q: "अम्लीय माध्यम में स्टेनस क्लोराइड ($SnCl_2$ + $HCl$) का उपयोग करके एल्किल साइनाइड को एल्डिहाइड में बदलने वाली अपचयन अभिक्रिया कहलाती है:", opts: ["स्टीफन अपचयन (Stephen reduction path involving selective imine intermediate complex hydrolysis)", "रोज़नमुंड अपचयन लूप", "कैनिज़ारो अभिक्रिया ग्रिड", "एंटार्ड अभिक्रिया अनुक्रम"] },	
                correct: 0	
            },	
            {	
                en: { q: "The equation of the coordinate plane passing through point $(1,1,1)$ and parallel to plane framework $2x + 3y - 4z = 5$ evaluates to:", opts: ["2x + 3y - 4z = 1", "2x + 3y - 4z = 5", "x + y + z = 3", "2x + 3y - 4z = 0"] },	
                hi: { q: "बिंदु $(1,1,1)$ से गुजरने वाले और समतल $2x + 3y - 4z = 5$ के समानांतर (Parallel) समतल का सही समीकरण क्या होगा?", opts: ["2x + 3y - 4z = 1 (Parallel planes retain structural scalar direction coefficients; evaluating constants via coordinates yields 2+3-4=1)", "2x + 3y - 4z = 5", "x + y + z = 3", "2x + 3y - 4z = 0"] },	
                correct: 0	
            },	
            {	
                en: { q: "An LCR series circuit contains $R = 10 \\, \\Omega$, $X_L = 20 \\, \\Omega$ and $X_C = 20 \\, \\Omega$. The absolute total impedance of this system matches:", opts: ["10 \\Omega", "20 \\Omega", "40 \\Omega", "Zero ohms"] },	
                hi: { q: "एक श्रेणीबद्ध LCR परिपथ में $R = 10 \\, \\Omega$, $X_L = 20 \\, \\Omega$ तथा $X_C = 20 \\, \\Omega$ है। इस परिपथ की कुल प्रतिबाधा (Impedance) कितनी होगी?", opts: ["10 \\Omega (Since inductive and capacitive reactances cancel out entirely during resonance tracking phases: Z = sqrt(R^2 + (XL - XC)^2))", "20 \\Omega", "40 \\Omega", "शून्य ओम"] },	
                correct: 0	
            },	
            {	
                en: { q: "Which chemical organic structural identity yields a positive bright silver mirror deposit when tested inside Tollens solution track?", opts: ["Acetaldehyde rows", "Acetone format lines", "Benzophenone compound", "Diethyl ether grid"] },	
                hi: { q: "निम्नलिखित में से कौन सा रासायनिक यौगिक टॉलेन अभिकर्मक (Tollens' reagent) के साथ एक चमकदार रजत दर्पण (Silver mirror) बनाता है?", opts: ["एसेटाल्डिहाइड पंक्तियाँ (Aldehydes cleanly reduce ammoniacal silver nitrate complexes into metallic silver silver coatings)", "एसीटोन प्रारूप लाइनें", "बेंजोफेनोन यौगिक", "डाईएथिल ईथर ग्रिड"] },	
                correct: 0	
            },	
            {	
                en: { q: "If the calculation metrics satisfy probability statement $P(A) = 1/2$ and $P(B) = 0$, then the conditional evaluation parameter $P(A|B)$ is:", opts: ["0", "0.5", "1", "Not defined strictly"] },	
                hi: { q: "यदि प्रायिकता संबंध $P(A) = 1/2$ और $P(B) = 0$ है, तो सप्रतिबंध प्रायिकता $P(A|B)$ का मान क्या होगा?", opts: ["0", "0.5", "1", "परिभाषित नहीं है (Division by a zero-probability conditioning event framework breaks classical calculus metric bounds)"] },	
                correct: 3	
            },	
            {	
                en: { q: "A long straight solenoid exhibits self-inductance $L$. If the total number of turns is doubled while length stays constant, self-inductance becomes:", opts: ["2 L", "4 L", "L / 2", "Remains unchanged"] },	
                hi: { q: "एक लंबी परिनालिका का स्वप्रेरकत्व (Self-inductance) $L$ है। यदि परिनालिका के फेरों की कुल संख्या दोगुनी कर दी जाए, तो स्वप्रेरकत्व क्या होगा?", opts: ["2 L", "4 L (Self-inductance scales quadratically with the number of turns according to fundamental formula L = mu_0 * n^2 * A * l)", "L / 2", "अपरिवर्तित रहेगा"] },	
                correct: 1	
            },	
            {	
                en: { q: "The condensation tracking test that generates a beautifully deep red colored dye when an aromatic amine reacts with beta-naphthol under basic grids is:", opts: ["Azo dye coupling test", "Carbylamine foul test", "Hofmann mustard test", "Libermann nitroso test"] },	
                hi: { q: "क्षारीय माध्यम में बीटा-नैफ्थॉल के साथ प्राथमिक एरोमैटिक एमीन की अभिक्रिया द्वारा एक गहरा लाल रंग का रंजक (Azo dye) बनाने वाला परीक्षण कहलाता है:", opts: ["एजो रंजक परीक्षण (Azo dye coupling test - acts as a cornerstone validation channel for primary aromatic amines)", "कारबिलामीन दुर्गंध परीक्षण", "हाफमान मस्टर्ड परीक्षण", "लिबरमैन नाइट्रोसो परीक्षण"] },	
                correct: 0	
            },	
            {	
                en: { q: "The explicit mathematical distance separating the parallel plane sheets $x + y + z = 1$ and $x + y + z = 5$ equals:", opts: ["4 units", "4 / \\sqrt{3} units", "2 units", "Zero absolute units"] },	
                hi: { q: "समानांतर समतलों $x + y + z = 1$ और $x + y + z = 5$ के बीच की निश्चित दूरी कितनी होगी?", opts: ["4 इकाइयाँ", "4 / \\sqrt{3} units (Using standard metric separation equation for parallel structures: |d1 - d2| / sqrt(A^2 + B^2 + C^2))", "2 इकाइयाँ", "शून्य पूर्ण इकाइयाँ"] },	
                correct: 1	
            },	
            {	
                en: { q: "An electromagnetic induction setup displays a flux tracking relation given by $\\Phi = 6t^2 + 2t + 5$. Induced EMF magnitude at time $t = 2$ seconds is:", opts: ["26 V", "14 V", "24 V", "12 V"] },	
                hi: { q: "एक बंद परिपथ से जुड़े चुंबकीय फ्लक्स का समीकरण $\\Phi = 6t^2 + 2t + 5$ है। $t = 2$ सेकंड पर प्रेरित विद्युत वाहक बल (Induced EMF) का परिमाण क्या होगा?", opts: ["26 V (Differentiating flux with respect to time yields E = dPhi/dt = 12t + 2; substituting t=2 gives 12(2) + 2 = 26 Volts)", "14 V", "24 V", "12 V"] },	
                correct: 0	
            },	
            {	
                en: { q: "Which core reaction pathway converts a benzaldehyde aromatic ring directly into benzyl alcohol and sodium benzoate under concentrated NaOH?", opts: ["Cannizzaro disproportional reaction", "Aldol condensation path", "Perkin tracking framework", "Reimer-Tiemann grid conversion"] },	
                hi: { q: "सांद्र $NaOH$ की उपस्थिति में बेन्जैल्डिहाइड का स्व-ऑक्सीकरण और अपचयन (Disproportionation) होकर बेंज़िल अल्कोहल और सोडियम बेंजोएट बनने की प्रक्रिया कहलाती है:", opts: ["कैनिज़ारो अभिक्रिया (Cannizzaro reaction - base-driven disproportionation unique to aldehydes lacking alpha-hydrogens)", "एल्डोल संघनन पथ", "पर्किन ट्रैकिंग ढांचा", "रीमर-टीमैन ग्रिड रूपांतरण"] },	
                correct: 0	
            },	
            {	
                en: { q: "If a structural random variable $X$ displays a Poisson distribution format tracking variance parameter 3, the calculated numerical mean equals:", opts: ["1.5", "3", "9", "\\sqrt{3}"] },	
                hi: { q: "यदि एक यादृच्छिक चर (Random variable) $X$ का वितरण एक पॉइसन वितरण (Poisson distribution) है जिसका प्रसरण (Variance) 3 है, तो इसका माध्य (Mean) क्या होगा?", opts: ["1.5", "3 (A fundamental mathematical constraint of the Poisson distribution template sets mean identically equal to variance)", "9", "\\sqrt{3}"] },	
                correct: 1	
            },	
            {	
                en: { q: "A high-quality electrical choke coil used inside AC lines features which of the following internal structural parameter layouts?", opts: ["High resistance and low inductance", "Low resistance and high inductance", "High resistance and high inductance", "Zero inductance always"] },	
                hi: { q: "प्रत्यावर्ती धारा (AC) परिपथों में ऊर्जा हानि को न्यूनतम रखते हुए धारा नियंत्रित करने के लिए प्रयुक्त चोक कॉइल (Choke coil) की विशेषता होती है:", opts: ["उच्च प्रतिरोध और कम प्रेरकत्व", "कम प्रतिरोध और उच्च प्रेरकत्व (High inductance throttles current via inductive reactance while low resistance minimizes thermal dissipation)", "उच्च प्रतिरोध और उच्च प्रेरकत्व", "हमेशा शून्य प्रेरकत्व"] },	
                correct: 1	
            },	
            {	
                en: { q: "The chemical structural orientation displaying an exceptionally strong keto-enol tautomerism stability inside its enol format configuration is:", opts: ["Acetone liquid lines", "Acetylacetone compound structure", "Acetaldehyde tracking rows", "Ethyl acetate matrix rows"] },	
                hi: { q: "निम्नलिखित में से कौन सा रासायनिक यौगिक अपने एनोल (Enol) रूप में अत्यधिक स्थिरता प्रदर्शित करता है?", opts: ["एसीटोन द्रव लाइनें", "एसीटाइलएसीटोन (Acetylacetone - stabilized effectively via intramolecular hydrogen bonding and conjugated double bond configurations)", "एसेटाल्डिहाइड ट्रैकिंग पंक्तियाँ", "एथिल एसीटेट मैट्रिक्स पंक्तियाँ"] },	
                correct: 1	
            },	
            {	
                en: { q: "The exact directional ratio vector values defining the linear equation track $\\frac{x-5}{3} = \\frac{2y+4}{4} = \\frac{1-z}{2}$ maps cleanly to:", opts: ["3, 4, 2", "3, 2, -2", "3, 2, 2", "6, 4, -4"] },	
                hi: { q: "रेखा समीकरण विन्यास $\\frac{x-5}{3} = \\frac{2y+4}{4} = \\frac{1-z}{2}$ के सही दिक्-अनुपात (Direction ratios) क्या होंगे?", opts: ["3, 4, 2", "3, 2, -2 (Standardizing equations yields (x-5)/3 = (y+2)/2 = (z-1)/(-2); thus extracting denominators maps vector lines to 3, 2, -2)", "3, 2, 2", "6, 4, -4"] },	
                correct: 1	
            },	
            // --- ८२६ ते ९०० प्रश्नांचा संच (JEE Main & Advanced - High-Weightage Core) ---	
            {	
                en: { q: "If the determinant value calculation satisfies $\\begin{vmatrix} x & 1 & 1 \\\\ 1 & x & 1 \\\\ 1 & 1 & x \\end{vmatrix} = 0$, then the complete real solution set for coordinate $x$ is:", opts: ["\\{1, -2\\}", "\\{-1, 2\\}", "\\{1, 2\\}", "\\{-1, -2\\}"] },	
                hi: { q: "यदि सारणिक (Determinant) संबंध $\\begin{vmatrix} x & 1 & 1 \\\\ 1 & x & 1 \\\\ 1 & 1 & x \\end{vmatrix} = 0$ को संतुष्ट करता है, तो $x$ के वास्तविक हलों का पूर्ण समुच्चय क्या होगा?", opts: ["\\{1, -2\\} (Expanding the determinant grid equation yields factors (x - 1)^2 * (x + 2) = 0 cleanly)", "\\{-1, 2\\}", "\\{1, 2\\}", "\\{-1, -2\\}"] },	
                correct: 0	
            },	
            {	
                en: { q: "A convex lens of focal length $f$ forms a real image of size $m$ times the object size. The distance of the object from the lens focus is:", opts: ["m f", "f / m", "f * (m + 1)", "f * (m - 1) / m"] },	
                hi: { q: "फोकस दूरी $f$ का एक उत्तल लेंस वस्तु के आकार से $m$ गुना बड़ा वास्तविक प्रतिबिंब बनाता है। लेंस के फोकस से वस्तु की दूरी कितनी होगी?", opts: ["m f", "f / m (Using standard Newtonian forms for optical distances: x1 * x2 = f^2; since magnification m = f/x1, it yields x1 = f/m)", "f * (m + 1)", "f * (m - 1) / m"] },	
                correct: 1	
            },	
            {	
                en: { q: "Which coordination complex geometry format displays a high crystal field splitting energy (CFSE) index under strong cyanide fields?", opts: ["$[Fe(CN)_6]^{4-}$ low-spin", "$[Fe(H_2O)_6]^{2+}$ high-spin", "$[Co(F)_6]^{3-}$ configuration", "$[Zn(NH_3)_4]^{2+}$ format"] },	
                hi: { q: "मजबूत साइनाइड लिगैंड क्षेत्र के प्रभाव में निम्नलिखित में से कौन सा उपसहसंयोजन संकुल अधिकतम क्रिस्टल क्षेत्र विपाटन ऊर्जा (CFSE) प्रदर्शित करता है?", opts: ["$[Fe(CN)_6]^{4-}$ low-spin (Cyanide is a powerful strong-field ligand forcing maximum d-orbital electron pairing conversions)", "$[Fe(H_2O)_6]^{2+}$ high-spin", "$[Co(F)_6]^{3-}$ विन्यास", "$[Zn(NH_3)_4]^{2+}$ प्रारूप"] },	
                correct: 0	
            },	
            {	
                en: { q: "The calculated area of the region bounded by the parabolic path $y^2 = 4x$ and its vertical latus rectum axis line matches:", opts: ["8/3 square units", "4/3 square units", "2/3 square units", "16/3 square units"] },	
                hi: { q: "परवलय $y^2 = 4x$ और इसके नाभिलंब (Latus rectum) रेखा $x = 1$ द्वारा घिरे क्षेत्र का कुल क्षेत्रफल कितना होगा?", opts: ["8/3 square units (Integrating 2 * integral from 0 to 1 of 2*sqrt(x) dx evaluates directly to 8/3 fractional metrics)", "4/3 वर्ग इकाई", "2/3 वर्ग इकाई", "16/3 वर्ग इकाई"] },	
                correct: 0	
            },	
            {	
                en: { q: "A balanced Wheatstone bridge setup experiences a change where battery and galvanometer positions are swapped. The bridge balance state:", opts: ["Remains entirely unchanged", "Gets completely destroyed", "Inverts reciprocal ratios", "Becomes highly unstable"] },	
                hi: { q: "एक संतुलित व्हीटस्टोन ब्रिज (Wheatstone bridge) में यदि गैल्वेनोमीटर और बैटरी की स्थितियों को आपस में बदल दिया जाए, तो ब्रिज संतुलन पर क्या प्रभाव पड़ेगा?", opts: ["पूरी तरह से अपरिवर्तित रहेगा (Conjugate branch invariance theorem preserves network node null conditions)", "पूरी तरह से नष्ट हो जाएगा", "व्युत्क्रम अनुपातों को उलट देगा", "अत्यधिक अस्थिर हो जाएगा"] },	
                correct: 0	
            },	
            {	
                en: { q: "The reaction processing an organic primary amine with Chloroform and ethanolic KOH to generate an intensely foul-smelling product is named:", opts: ["Carbylamine reaction test", "Hofmann rearrangement track", "Gabriel Phthalimide grid", "Sandmeyer coupling process"] },	
                hi: { q: "क्लोरोफॉर्म और एथेनॉलिक $KOH$ के साथ प्राथमिक एमीन की अभिक्रिया द्वारा अत्यधिक अरुचिकर दुर्गंधयुक्त आइसोसाइनाइड यौगिक बनाने वाला परीक्षण कहलाता है:", opts: ["कारबिलामीन अभिक्रिया (Carbylamine reaction test - highly unique qualitative test for verifying primary amine status)", "हाफमान पुनर्विन्यास ट्रैक", "गैब्रिएल थैलिमाइड ग्रिड", "सैंडमेयर कपलिंग प्रक्रम"] },	
                correct: 0	
            },	
            {	
                en: { q: "If a system matrix equations structure satisfies relation $A^2 - A + I = 0$, then the calculated inverse matrix $A^{-1}$ maps to:", opts: ["I - A", "A - I", "A + I", "-A"] },	
                hi: { q: "यदि एक आव्यूह समीकरण $A^2 - A + I = 0$ संबंध को संतुष्ट करता है, तो इसका व्युत्क्रम आव्यूह (Inverse matrix) $A^{-1}$ किसके बराबर होगा?", opts: ["I - A (Multiplying the matrix identity string throughout by A^-1 leaves A^-1 = I - A cleanly)", "A - I", "A + I", "-A"] },	
                correct: 0	
            },	
            {	
                en: { q: "An unpolarized light beam strikes a flat glass block surface at the Brewster angle $\\theta_p$. The angle between reflected and refracted rays is:", opts: ["Zero degrees", "45 degrees", "90 degrees", "180 degrees"] },	
                hi: { q: "एक अध्रुवित प्रकाश पुंज ग्लास की सतह पर ब्रूस्टर कोण (Brewster's angle) $\\theta_p$ पर आपतित होता है। परावर्तित और अपवर्तित किरणों के बीच का कोण होगा:", opts: ["शून्य डिग्री", "45 डिग्री", "90 degrees (According to polarization principles, reflected and refracted vectors trace strictly orthogonal spatial trajectories)", "180 डिग्री"] },	
                correct: 2	
            },	
            {	
                en: { q: "Which chemical reagent processes a primary aromatic amine directly into an unstable diazonium salt matrix at low temperatures?", opts: ["$NaNO_2 + HCl$", "$HNO_3 + H_2SO_4$", "$NH_3 + Cu_2Cl_2$", "$POCl_3$ framework"] },	
                hi: { q: "निम्न तापमान (0-5 °C) पर प्राथमिक एरोमैटिक एमीन को सीधे डायज़ोनियम लवण (Diazonium salt) में बदलने के लिए किस अभिकर्मक का उपयोग किया जाता है?", opts: ["$NaNO_2 + HCl$ (Generates in-situ nitrous acid driving electrophilic nitrosation mechanisms cleanly across solution arrays)", "$HNO_3 + H_2SO_4$", "$NH_3 + Cu_2Cl_2$", "$POCl_3$ ढांचा"] },	
                correct: 0	
            },	
            {	
                en: { q: "The mathematical area bounded by the sinusoidal curve line $y = \\sin x$ and coordinate horizontal axis from $x = 0$ to $x = \\pi$ evaluates to:", opts: ["1 square unit", "2 square units", "0.5 square units", "\\pi square units"] },	
                hi: { q: "वक्र $y = \\sin x$ तथा क्षैतिज अक्ष द्वारा सीमा $x = 0$ से $x = \\pi$ के बीच घिरा शुद्ध क्षेत्रफल कितना होता है?", opts: ["1 वर्ग इकाई", "2 square units (Evaluating definite calculus tracking boundaries: integral from 0 to pi of sin(x) dx yields [-cos(x)] from 0 to pi = 2)", "0.5 वर्ग इकाई", "\\pi वर्ग इकाई"] },	
                correct: 1	
            },	
            {	
                en: { q: "A cylindrical copper conductor has length $L$ and internal resistance $R$. If stretched uniformly to double its original length, new resistance is:", opts: ["2 R", "4 R", "R / 2", "Remains unchanged"] },	
                hi: { q: "एक तांबे के बेलनाकार तार की लंबाई $L$ और प्रतिरोध $R$ है। यदि इसे समान रूप से खींचकर इसकी मूल लंबाई से दोगुना कर दिया जाए, तो नया प्रतिरोध होगा:", opts: ["2 R", "4 R (Stretching doubles length while thinning the cross-sectional area by half, multiplying net resistance bounds by four)", "R / 2", "अपरिवर्तित रहेगा"] },	
                correct: 1	
            },	
            {	
                en: { q: "The specific compound layout displaying strong optical isomerism configurations due to an asymmetric chiral center among given options is:", opts: ["2-Aminobutane", "1-Aminobutane", "Diethylamine rows", "Trimethylamine profile"] },	
                hi: { q: "निम्नलिखित में से कौन सा एमीन यौगिक एक असममित केंद् (Chiral center) की उपस्थिति के कारण प्रकाशिक समावयवता प्रदर्शित कर सकता है?", opts: ["2-एमीनोब्यूटेन (The second carbon atom binds four entirely separate groups: H, methyl, ethyl, and amine matrices cleanly)", "1-एमीनोब्यूटेन", "डाईएथिलएमीन पंक्तियाँ", "ट्राईमेथिलएमीन प्रोफाइल"] },	
                correct: 0	
            },	
            {	
                en: { q: "If the calculation metrics track values satisfying statement $A^T = -A$ for a square matrix, the matrix format is classified as:", opts: ["Symmetric matrix line", "Skew-symmetric matrix format", "Orthogonal matrix track", "Hermitian matrix loop"] },	
                hi: { q: "यदि किसी वर्ग आव्यूह के लिए उसका ट्रांसपोज़ संबंध $A^T = -A$ को संतुष्ट करता है, तो वह आव्यूह कहलाता है:", opts: ["सममित आव्यूह (Symmetric) रेखा", "विषम-सममित आव्यूह (Skew-symmetric) प्रारूप (Diagonal entries are bounded strictly to zero configurations under this constraint)", "लंबकोणीय आव्यूह ट्रैक", "हर्मिटीयन आव्यूह लूप"] },	
                correct: 1	
            },	
            {	
                en: { q: "An electric field radiation tracking vector features wavelength 300 nm. The calculated energy metric belonging to a single photon equals:", opts: ["6.6 x 10^-19 J", "3.3 x 10^-19 J", "4.4 x 10^-19 J", "2.2 x 10^-19 J"] },	
                hi: { q: "एक विद्युत चुंबकीय विकिरण की तरंगदैर्ध्य 300 nm है। इस प्रकाश के एक एकल फोटॉन की ऊर्जा कितनी होगी?", opts: ["6.6 x 10^-19 J (Using quantum definition Planck equation E = hc / lambda = (6.63*10^-34 * 3*10^8) / 300*10^-9)", "3.3 x 10^-19 J", "4.4 x 10^-19 J", "2.2 x 10^-19 J"] },	
                correct: 0	
            },	
            {	
                en: { q: "Which chemical testing pathway checks for primary amines using Benzenesulfonyl chloride reagent across alkaline matrix lines?", opts: ["Hinsberg reaction test", "Lucas reagent track", "Victor Meyer loop", "Biuret protein sequence"] },	
                hi: { q: "प्राथमिक, द्वितीयक और तृतीयक एमीनों के विभेदन के लिए बेंजीनसल्फोनिल क्लोराइड अभिकर्मक का उपयोग करने वाला परीक्षण कहलाता है:", opts: ["हिन्सबर्ग परीक्षण (Hinsberg reaction test - builds sulfonamide paths with distinct chemical solubility variations inside basic templates)", "ल्यूकास अभिकर्मक ट्रैक", "विक्टर मेयर लूप", "बाय्यूरेट प्रोटीन अनुक्रम"] },	
                correct: 0	
            },	
            {	
                en: { q: "The integrated area trapped inside the upper boundary loops between the crossing curves $y = x^2$ and $y = x$ matches exactly:", opts: ["1/6 square units", "1/3 square units", "1/2 square units", "1/12 square units"] },	
                hi: { q: "दो प्रतिच्छेदी वक्रों $y = x^2$ तथा $y = x$ के बीच घिरे बंद क्षेत्र का कुल क्षेत्रफल कितना होता है?", opts: ["1/6 square units (Evaluating definite integration from 0 to 1 for function configuration layout tracking expression [x - x^2] dx)", "1/3 वर्ग इकाई", "1/2 वर्ग इकाई", "1/12 वर्ग इकाई"] },	
                correct: 0	
            },	
            {	
                en: { q: "A potentiometer tracking wire layout features total length 10m. A constant cell stabilizes balance at 4m. If length expands to 20m, balance point is:", opts: ["8 m", "2 m", "4 m", "5 m"] },	
                hi: { q: "एक पोटेंशियोमीटर के तार की कुल लंबाई 10m है और एक सेल के लिए संतुलन बिंदु 4m पर मिलता है। यदि तार की लंबाई बढ़ाकर 20m कर दी जाए, तो नया संतुलन बिंदु होगा:", opts: ["8 m (Doubling total length drops the wire's potential gradient by half, forcing the balanced length parameters to double as well)", "2 m", "4 m", "5 m"] },	
                correct: 0	
            },	
            {	
                en: { q: "The square-planar structural geometry configuration naturally found inside the given transition metal coordination complex list belongs to:", opts: ["$[Ni(CN)_4]^{2-}$ arrangement", "$[Ni(Cl)_4]^{2-}$ arrangement", "$[Fe(Cl)_4]^{-}$ pattern", "$[Mn(Cl)_4]^{2-}$ pattern"] },	
                hi: { q: "दिए गए उपसहसंयोजन यौगिकों में से कौन सा अपनी संरचना के भीतर वर्ग-समतली (Square-planar) ज्यामिति प्रदर्शित करता है?", opts: ["$[Ni(CN)_4]^{2-}$ विन्यास (Strong-field cyanide triggers dsp2 hybridization configurations forcing a clean symmetric planar layout)", "$[Ni(Cl)_4]^{2-}$ विन्यास", "$[Fe(Cl)_4]^{-}$ पैटर्न", "$[Mn(Cl)_4]^{2-}$ पैटर्न"] },	
                correct: 0	
            },	
            {	
                en: { q: "If the product calculation of a matrix layout satisfies $A B = 0$ for non-zero square elements, the determinant properties mandate:", opts: ["|A| = 0 or |B| = 0", "|A| = 1 and |B| = 1", "|A| + |B| = 0", "Matrices must be identity structures"] },	
                hi: { q: "यदि दो गैर-शून्य वर्ग आव्यूहों का गुणनफल $A B = 0$ है, तो उनके सारणिकों (Determinants) के संदर्भ में कौन सा निष्कर्ष अनिवार्य है?", opts: ["|A| = 0 अथवा |B| = 0 (By determinant multiplication rules, |AB| = |A|*|B| = 0, proving at least one component matrix must be singular)", "|A| = 1 और |B| = 1", "|A| + |B| = 0", "आव्यूह अनिवार्य रूप से तत्समक होने चाहिए"] },	
                correct: 0	
            },	
            {	
                en: { q: "A radioactive chemical sample element processes half life timing tracking bounds close to 20 minutes. Disintegration fraction after 1 hour is:", opts: ["7/8", "1/8", "3/4", "15/16"] },	
                hi: { q: "एक रेडियोधर्मी नमूने की अर्ध-आयु 20 मिनट है। 1 घंटे (60 मिनट) के बाद इस पदार्थ का कितना भाग विघटित (Disintegrated fraction) हो जाएगा?", opts: ["7/8 (Three half-life cycles elapse; remaining fraction drops to (1/2)^3 = 1/8, meaning the disintegrated portion equals 1 - 1/8)", "1/8", "3/4", "15/16"] },	
                correct: 0	
            },	
            {	
                en: { q: "Which chemical synthesis row yields benzaldehyde directly from toluene using chromyl chloride ($CrO_2Cl_2$) inside solvent channels?", opts: ["Etard reaction pathway", "Gattermann-Koch path", "Cannizzaro reaction track", "Stephen sequence lines"] },	
                hi: { q: "क्रोमिल क्लोराइड ($CrO_2Cl_2$) का उपयोग करके टॉलूईन को सीधे बेन्जैल्डिहाइड में बदलने वाला विशिष्ट कार्बनिक प्रक्रम कहलाता है:", opts: ["एंटार्ड अभिक्रिया (Etard reaction pathway involving selective intermediate chromium complex transformations)", "गैटरमैन-कोच पथ", "कैनिज़ारो अभिक्रिया ट्रैक", "स्टीफन अनुक्रम लाइनें"] },	
                correct: 0	
            },	
            {	
                en: { q: "If the calculation bounds require mapping value for $\\int_{0}^{\\pi/2} \\frac{\\sqrt{\\sin x}}{\\sqrt{\\sin x} + \\sqrt{\\cos x}} \\, dx$, the result is:", opts: ["\\pi / 2", "\\pi / 4", "\\pi", "Zero constant"] },	
                hi: { q: "निश्चित समाकलन $\\int_{0}^{\\pi/2} \\frac{\\sqrt{\\sin x}}{\\sqrt{\\sin x} + \\sqrt{\\cos x}} \\, dx$ का परिकलित मान क्या होगा?", opts: ["\\pi / 2", "\\pi / 4 (Applying standard King's property properties balances numerator domains cleanly to evaluate precisely to pi/4)", "\\pi", "शून्य नियत"] },	
                correct: 1	
            },	
            {	
                en: { q: "A charged particle moves with velocity $v$ inside a uniform magnetic field $B$ parallel to tracking path line. Magnetic force equals:", opts: ["q v B", "0.5 q v B", "Zero Newton force", "- q v B"] },	
                hi: { q: "एक आवेशित कण वेग $v$ से एक समरूप चुंबकीय क्षेत्र $B$ के समानांतर (Parallel) गति कर रहा है। कण पर लगने वाला चुंबकीय बल क्या होगा?", opts: ["q v B", "0.5 q v B", "शून्य न्यूटन बल (Since cross product velocity orientation vector alignments contain sin(0) matching absolute zero)", "- q v B"] },	
                correct: 2	
            },	
            {	
                en: { q: "The structural compound possessing highest calculated basic strength inside a completely aqueous solution matrix environment is:", opts: ["Dimethylamine", "Methylamine", "Trimethylamine", "Aniline rows"] },	
                hi: { q: "जलीय विलयन (Aqueous solution) के भीतर निम्नलिखित में से कौन सा एमीन यौगिक सर्वाधिक क्षारीयता (Highest basic strength) प्रदर्शित करता है?", opts: ["डाईमेथिलएमीन (Secondary methyl substituted amines achieve ideal balance between inductive and hydration stabilization tracks)", "मेथिलएमीन", "ट्राईमेथिलएमीन", "एनीलीन पंक्तियाँ"] },	
                correct: 0	
            },	
            {	
                en: { q: "The numerical calculation evaluating system coordinates tracking relation $\\lim_{x \\to 0} \\frac{\\sin 5x}{x}$ resolves cleanly to:", opts: ["1", "5", "0", "1/5"] },	
                hi: { q: "सीमा मूल्यांकन (Limit calculation) संबंध $\\lim_{x \\to 0} \\frac{\\sin 5x}{x}$ का शुद्ध मान क्या होगा?", opts: ["1", "5 (Standard trigonometric limits configuration scaled via multiplying numerator and denominator fields directly by 5)", "0", "1/5"] },	
                correct: 1	
            },// --- ९०१ ते १,००० प्रश्नांचा संच (JEE Main & Advanced - GRAND FINALE TRACK) ---	
            {	
                en: { q: "If the differential equation tracking variable curves satisfies $x \\, dy + y \\, dx = 0$, the solution configuration maps to:", opts: ["x y = C", "x + y = C", "x^2 + y^2 = C", "y / x = C"] },	
                hi: { q: "यदि वक्र कुल का अवकल समीकरण (Differential equation) $x \\, dy + y \\, dx = 0$ है, तो इसका शुद्ध हल क्या होगा?", opts: ["x y = C (The expression is an exact differential matching d(xy) = 0, which directly integrates to a constant product layout)", "x + y = C", "x^2 + y^2 = C", "y / x = C"] },	
                correct: 0	
            },	
            {	
                en: { q: "Inside a forward-biased p-n junction diode setup, the structural thickness parameter defining the depletion region width will:", opts: ["Increase significantly", "Decrease significantly", "Stay completely invariant", "Vibrate across infinity bounds"] },	
                hi: { q: "अग्र-अभिनत p-n जंक्शन डायोड (Forward-biased p-n junction) विन्यास के भीतर, अवक्षय परत (Depletion region) की चौड़ाई पर क्या प्रभाव पड़ता है?", opts: ["काफी बढ़ जाती है", "काफी घट जाती है (Applied forward potential opposes the internal built-in field barrier, squeezing the charge depletion grid lines)", "पूरी तरह से अपरिवर्तित रहती है", "अनंत सीमाओं पर कंपन करती है"] },	
                correct: 1	
            },	
            {	
                en: { q: "Which chemical reagent processes an organic nitrobenzene ring structure directly into aniline via complete reduction paths?", opts: ["$Sn + HCl$", "$H_2O$ liquid", "$NaOH$ solution", "$CH_3Cl$ framework"] },	
                hi: { q: "कौन सा रासायनिक अभिकर्मक नाइट्रोबेंजीन को सीधे एनीलीन (Aniline) में अपचयित करने के लिए औद्योगिक स्तर पर सबसे उपयुक्त माना जाता है?", opts: ["$Sn + HCl$ (Metal-acid combinations supply active nascent hydrogen to replace nitro oxygen bonds with amine linkages cleanly)", "$H_2O$ द्रव", "$NaOH$ विलयन", "$CH_3Cl$ ढांचा"] },	
                correct: 0	
            },	
            {	
                en: { q: "If the direction cosines of a spatial line tracking coordinates are given by matrix row $(1/k, 1/k, 1/k)$, then the parameter $k$ must equal:", opts: ["\\sqrt{3}", "\\pm \\sqrt{3}", "3", "\\pm 3"] },	
                hi: { q: "यदि त्रिविमीय समतल में एक रेखा की दिक्-कोज्याएँ (Direction cosines) $(1/k, 1/k, 1/k)$ हैं, तो प्राचल $k$ का मान क्या होना चाहिए?", opts: ["\\sqrt{3}", "\\pm \\sqrt{3} (Satisfying normalization property l^2 + m^2 + n^2 = 1 yields 3 / k^2 = 1, solving cleanly to root forms)", "3", "\\pm 3"] },	
                correct: 1	
            },	
            {	
                en: { q: "A amplitude modulated transmission tracking setup uses a carrier wave of 10V and signal wave of 6V. Modulation index matches:", opts: ["0.6", "1.6", "0.3", "Zero constant"] },	
                hi: { q: "एक आयाम मॉडुलन (Amplitude modulation) प्रणाली में वाहक तरंग का विभव 10V और सिग्नल तरंग का विभव 6V है। मॉडुलन सूचकांक का मान क्या होगा?", opts: ["0.6 (Modulation index mu is explicitly evaluated as signal amplitude divided by carrier amplitude; 6 / 10 = 0.6)", "1.6", "0.3", "शून्य नियत"] },	
                correct: 0	
            },	
            {	
                en: { q: "The chemical base structural ring identity that is naturally found within RNA molecule strands but strictly absent inside DNA sequences is:", opts: ["Uracil pyrimidine base", "Thymine pyrimidine base", "Adenine purine base", "Guanine purine base"] },	
                hi: { q: "वह कौन सा नाइट्रोजनयुक्त क्षार (Nitrogenous base) है जो केवल RNA अणुओं में पाया जाता है और DNA में उपस्थित नहीं होता?", opts: ["यूरैसिल (Uracil pyrimidine base - replaces thymine configurations inside ribonucleic transcription layouts cleanly)", "थायमीन", "एडेनीन", "गुआनीन"] },	
                correct: 0	
            },	
            {	
                en: { q: "If the differential equation system tracks identity function form $\\frac{dy}{dx} + y = e^x$, then its calculated Integrating Factor (I.F.) is:", opts: ["e^x", "e^{-x}", "x", "e^{2x}"] },	
                hi: { q: "यदि एक रैखिक अवकल समीकरण (Linear differential equation) $\\frac{dy}{dx} + y = e^x$ है, तो इसका समाकलन गुणक (Integrating Factor) क्या होगा?", opts: ["e^x (Using linear template form I.F. = e^(integral P dx) where P=1; hence integrating 1 dx gives exponential x profile)", "e^{-x}", "x", "e^{2x}"] },	
                correct: 0	
            },	
            {	
                en: { q: "A logic gate assembly produces an absolute high output state (1) only when both input paths are grounded at absolute low states (0). Gate type is:", opts: ["NOR logic gate", "AND logic gate", "OR logic gate", "XOR logic gate"] },	
                hi: { q: "वह कौन सा लॉजिक गेट (Logic gate) है जो केवल तब उच्च आउटपुट (1) देता है जब उसके दोनों इनपुट निम्न स्थिति (0) पर होते हैं?", opts: ["NOR लॉजिक गेट (NOR layout acts as the exact inverted boolean profile of standard OR summation channels)", "AND लॉजिक गेट", "OR लॉजिक गेट", "XOR लॉजिक गेट"] },	
                correct: 0	
            },	
            {	
                en: { q: "The chemical structural polymer matrix built via alternate linkages of nucleotide segments via sugar phosphate ester paths is named:", opts: ["Nucleic acid macro structure", "Polypeptide amino chain", "Polysaccharide starch sheet", "Polyisoprene elastic block"] },	
                hi: { q: "फॉस्फोडाइएस्टर कड़ियों द्वारा जुड़े न्यूक्लियोटाइड मोनोमर्स की लंबी आवर्ती श्रृंखला से बनने वाला मैक्रो-अणु क्या कहलाता है?", opts: ["न्यूक्लिक अम्ल मैक्रो संरचना (Nucleic acids store genetic blueprints across biological systems via DNA and RNA tracks)", "पॉलीपेप्टाइड अमीनो श्रृंखला", "पॉलीसेकेराइड स्टार्च शीट", "पॉलीआइसोप्रीन इलास्टिक ब्लॉक"] },	
                correct: 0	
            },	
            {	
                en: { q: "The vector expression equation describing the straight line tracking coordinates that passes through point $\\vec{a}$ and runs parallel to direction $\\vec{b}$ is:", opts: ["$\\vec{r} = \\vec{a} + \\lambda \\vec{b}$", "$\\vec{r} = \\vec{b} + \\lambda \\vec{a}$", "$\\vec{r} \\cdot \\vec{b} = \\vec{a}$", "$\\vec{r} \\times \\vec{a} = \\vec{b}$"] },	
                hi: { q: "उस रेखा का सही वेक्टर समीकरण क्या होगा जो बिंदु $\\vec{a}$ से गुजरती है और वेक्टर $\\vec{b}$ के समानांतर (Parallel) गति करती है?", opts: ["$\\vec{r} = \\vec{a} + \\lambda \\vec{b}$ (Standard dimensional scaling equation mapping positional translation tracking lines cleanly)", "$\\vec{r} = \\vec{b} + \\lambda \\vec{a}$", "$\\vec{r} \\cdot \\vec{b} = \\vec{a}$", "$\\vec{r} \\times \\vec{a} = \\vec{b}$"] },	
                correct: 0	
            },	
            {	
                en: { q: "An intrinsic semiconductor target undergoes chemical doping with Pentavalent impurity atom arrays. The resulting crystal structure becomes:", opts: ["n-type semiconductor layout", "p-type semiconductor layout", "Insulating boundaries", "Superconducting wire matrix"] },	
                hi: { q: "जब एक शुद्ध अर्धचालक में पंचसंयोजी अशुद्धि (Pentavalent impurity) मिलाई जाती है, तो किस प्रकार का अर्धचालक प्राप्त होता है?", opts: ["n-प्रकार का अर्धचालक (Pentavalent atoms introduce free conduction electron tracks, increasing negative mobile charge grids)", "p-प्रकार का अर्धचालक", "अवरोधक सीमाएं", "सुपरकंडक्टिंग तार मैट्रिक्स"] },	
                correct: 0	
            },	
            {	
                en: { q: "Which core analytical process shows a distinct blue-violet color coloration when amino acid tracking streams react with Ninhydrin liquid?", opts: ["Ninhydrin validation path", "Biuret protein link", "Xanthoproteic nitration track", "Fehling solution loop"] },	
                hi: { q: "अमीनो अम्ल और प्रोटीन की उपस्थिति की पुष्टि करने के लिए निनहाइड्रिन अभिकर्मक के साथ गर्म करने पर गहरा नीला-बैंगनी रंग देने वाला परीक्षण है:", opts: ["निनहाइड्रिन परीक्षण (Ninhydrin validation path forming Ruhemann's purple chromophore configuration metrics)", "बाय्यूरेट प्रोटीन लिंक", "क्सैंथोप्रोटिक नाइट्रीकरण ट्रैक", "फेलिंग विलयन लूप"] },	
                correct: 0	
            },	
            {	
                en: { q: "The order and degree indices belonging to the calculus differential statement $(\\frac{d^2y}{dx^2})^3 + (\\frac{dy}{dx})^4 + y = 0$ map to:", opts: ["Order 2, Degree 3", "Order 3, Degree 2", "Order 2, Degree 4", "Order 1, Degree 4"] },	
                hi: { q: "अवकल समीकरण $(\\frac{d^2y}{dx^2})^3 + (\\frac{dy}{dx})^4 + y = 0$ की कोटि (Order) और घात (Degree) क्रमशः क्या होगी?", opts: ["कोटि 2, घात 3 (The highest order derivative present is two, and its corresponding algebraic power exponent index matches three)", "कोटि 3, घात 2", "कोटि 2, घात 4", "कोटि 1, घात 4"] },	
                correct: 0	
            },	
            {	
                en: { q: "A zener diode electronic solid state component is optimized primarily to operate inside which electrical breakdown infrastructure track?", opts: ["Reverse breakdown field under voltage regulation", "Forward conduction framework under amplification", "Saturating cutoff thermal bands", "Zero voltage balanced states"] },	
                hi: { q: "एक ज़ेनर डायोड (Zener diode) का मुख्य उपयोग परिपथों के भीतर किस भूमिका को निभाने के लिए किया जाता है?", opts: ["वोल्टेज रेगुलेटर के रूप में उत्क्रम भंजन (Reverse breakdown) क्षेत्र में (Maintains constant terminal voltage profiles across shifts in current levels)", "प्रवर्धन के तहत अग्र चालन ढांचा", "संतृप्त कटऑफ थर्मल बैंड", "शून्य वोल्टेज संतुलित अवस्थाएं"] },	
                correct: 0	
            },	
            {	
                en: { q: "The disaccharide carbohydrate configuration that yields two units of pure D-glucose upon complete chemical hydrolysis is:", opts: ["Maltose disaccharide structure", "Sucrose disaccharide sugar", "Lactose milk sugar lines", "Cellulose polymer segments"] },	
                hi: { q: "वह कौन सा डाइसैकराइड कार्बोहाइड्रेट (Disaccharide) है जिसके पूर्ण जल-अपघटन (Hydrolysis) से केवल D-ग्लूकोज की दो इकाइयाँ प्राप्त होती हैं?", opts: ["माल्टोज (Maltose disaccharide structure built via explicit alpha-1,4-glucosidic link couplings)", "सुक्रोज", "लैक्टोज", "सेल्यूलोज"] },	
                correct: 0	
            },	
            {	
                en: { q: "If the calculation parameters track orthogonal variable vector planes $2x - y + z = 3$ and $x + y + kz = 5$, then the constant index $k$ satisfies:", opts: ["-1", "1", "2", "0"] },	
                hi: { q: "यदि दो समतल समीकरण विन्यास $2x - y + z = 3$ और $x + y + kz = 5$ परस्पर लंबवत हैं, तो $k$ का मान क्या होगा?", opts: ["-1 (Orthogonal spatial planes satisfy dot scaling constraints: (2)(1) + (-1)(1) + (1)(k) = 0 leading directly to 1+k=0)", "1", "2", "0"] },	
                correct: 0	
            },	
            {	
                en: { q: "A dynamic p-n junction photovoltaic solar cell operational layout functions based on which sequence of structural events?", opts: ["Generation, Electron-hole Separation, Collection", "Thermal heating, Compression, Conduction", "Recombination, Multi-tier absorption, Doping shift", "Static cooling, Quenching, Ionic alignment"] },	
                hi: { q: "एक सौर सेल (Solar Cell) के कार्य करने की मूलभूत भौतिक प्रक्रिया का सही अनुक्रम कौन सा है?", opts: ["फोटॉन अवशोषण से जनन, इलेक्ट्रॉन-होल पृथक्करण, और संग्रहण (Clean multi-stage collection framework optimizing optical conversion paths)", "थर्मल हीटिंग, संपीड़न, चालन", "पुनर्संयोजन, बहु-स्तरीय अवशोषण, डोपिंग बदलाव", "स्थिर शीतलन, शमन, आयनिक संरेखण"] },	
                correct: 0	
            },	
            {	
                en: { q: "The qualitative testing pathway that generates a deep crimson red coloration when iron coordination tests encounter blood-like structures via thiocyanate is:", opts: ["Iron Thiocyanate validation", "Lucas halo test", "Iodoform carbonyl path", "Silver mirror verification"] },	
                hi: { q: "जब $Fe^{3+}$ आयनों वाले विलयन में पोटेशियम थायोसायनेट ($KSCN$) मिलाया जाता है, तो रक्त जैसा गहरा लाल (Blood-red) रंग किस उत्पाद के कारण आता है?", opts: ["$[Fe(SCN)]^{2+}$ संकुल निर्माण (Thiocyanate substitution creates an intensely colored blood-like charge-transfer coordination tracking complex)", "ल्यूकास हेलो परीक्षण", "आयोडोफॉर्म कार्बोनिल पाथ", "रजत दर्पण सत्यापन"] },	
                correct: 0	
            },	
            {	
                en: { q: "The general algebraic solution matching variables setup tracking differential formula $\\frac{dy}{dx} = \\frac{y}{x}$ models which geometric layout?", opts: ["A family of straight lines crossing the origin", "A nested family of perfect circles", "A parabolic trajectory curve grid", "A hyperbolic coordinate split framework"] },	
                hi: { q: "अवकल समीकरण $\\frac{dy}{dx} = \\frac{y}{x}$ का व्यापक हल किस ज्यामितीय आकृति के समूह (Family of curves) को निरूपित करता है?", opts: ["मूल बिंदु से गुजरने वाली सरल रेखाओं का कुल (Variables separation yields ln(y) = ln(x) + ln(C) which simplifies directly to linear y = Cx equations)", "वृत्तों का कुल", "परवलयिक वक्र ग्रिड", "अतिपरवलयिक निर्देशांक विभाजन ढांचा"] },	
                correct: 0	
            },	
            {	
                en: { q: "Inside a modern skywave electronic communication setup, electromagnetic waves are reflected back to earth surface by which layer?", opts: ["Ionosphere layer blocks", "Troposphere base frames", "Stratosphere quiet lines", "Exosphere outer boundaries"] },	
                hi: { q: "आकाश तरंग संचरण (Skywave propagation) के अंतर्गत रेडियो तरंगें वायुमंडल की किस परत द्वारा परावर्तित होकर पृथ्वी पर वापस लौटती हैं?", opts: ["आयनमंडल (Ionosphere layer blocks packed with free ions capable of bending targeted high frequency electromagnetic signals)", "क्षोभमंडल", "समतापमंडल", "बाह्यमंडल"] },	
                correct: 0	
            },	
            {	
                en: { q: "Which biochemical protein structural configuration features the exceptionally stable spiral arrangement held by localized hydrogen bonds?", opts: ["Alpha-helix configuration", "Beta-pleated sheet layout", "Random primary chain lines", "Quaternary multi-unit cluster"] },	
                hi: { q: "प्रोटीन की द्वितीयक संरचना (Secondary structure) में पाए जाने वाले अत्यधिक नियमित और स्थिर सर्पिलाकार विन्यास को क्या कहा जाता है?", opts: ["अल्फा-हेलिक्स संरचना (Alpha-helix - stabilized regularly via intramolecular hydrogen bonding rows tracking pitch limits)", "बीटा-प्लीटेड शीट लेआउट", "यादृच्छिक प्राथमिक श्रृंखला लाइनें", "चतुष्कीय बहु-इकाई क्लस्टर"] },	
                correct: 0	
            },	
            {	
                en: { q: "The shortest vector distance separating the spatial point $(2,3,4)$ from the horizontal coordinate axis line tracking $x$ scales to:", opts: ["5 units", "2 units", "\\sqrt{13} units", "4 units"] },	
                hi: { q: "बिंदु $(2,3,4)$ की $x$-अक्ष से न्यूनतम लंबवत दूरी कितनी होगी?", opts: ["5 इकाइयाँ (Evaluating coordinate distance drop formula on x-axis: sqrt(y^2 + z^2) = sqrt(3^2 + 4^2) = sqrt(25) = 5 units)", "2 इकाइयाँ", "\\sqrt{13} इकाइयाँ", "4 इकाइयाँ"] },	
                correct: 0	
            },	
            {	
                en: { q: "A full-wave rectifier network operates on an input AC electrical feed tracking 50 Hz cycle frequency. Output ripple tracking frequency maps to:", opts: ["100 Hz", "50 Hz", "25 Hz", "Zero continuous constant"] },	
                hi: { q: "एक पूर्ण-तरंग दिष्टकारी (Full-wave rectifier) परिपथ 50 Hz आवृत्ति वाले इनपुट AC सिग्नल पर कार्य करता है। इसके आउटपुट रिपल (Ripple) की आवृत्ति होगी:", opts: ["100 Hz (Full wave layouts process both polar halves of input cycles, effectively doubling output pulsation frequency profiles)", "50 Hz", "25 Hz", "शून्य सतत नियतांक"] },	
                correct: 0	
            },	
            {	
                en: { q: "The distinct testing path that uses a mixture of Iodine and Sodium hydroxide to form a bright yellow precipitate confirming methyl ketones is named:", opts: ["Iodoform test path", "Fehling copper track", "Tollens silver grid", "Biuret violet sequence"] },	
                hi: { q: "आयोडीन और $NaOH$ के साथ गर्म करने पर चमकीला पीला अवक्षेप (Yellow precipitate) देने वाला विशिष्ट कार्बोनिल परीक्षण क्या कहलाता है?", opts: ["आयोडोफॉर्म परीक्षण (Iodoform test path - highly specific validation tool for detecting active CH3CO- groups inside structures)", "फेलिंग कॉपर ट्रैक", "टॉलेन सिल्वर ग्रिड", "बाय्यूरेट बैंगनी अनुक्रम"] },	
                correct: 0	
            },	
            {	
                en: { q: "The particular integrated equation arrangement validating family trajectory curves matching statement $\\frac{dy}{dx} = -\\frac{x}{y}$ computes to:", opts: ["x^2 + y^2 = C", "x^2 - y^2 = C", "x y = C", "x + y = C"] },	
                hi: { q: "अवकल समीकरण $\\frac{dy}{dx} = -\\frac{x}{y}$ का सही समाकलित रूप किस ज्यामितीय वक्र वर्ग को प्रदर्शित करता है?", opts: ["x^2 + y^2 = C (Variables integration yields y dy = -x dx, which integrates cleanly to circular family profiles)", "x^2 - y^2 = C", "x y = C", "x + y = C"] },	
                correct: 0	
            },	
                {	
                    en: { q: "JEE Main: Work done in an adiabatic process is proportional to change in?", opts: ["Pressure", "Volume", "Temperature", "Entropy"] },	
                    hi: { q: "JEE Main: रुद्धोष्म प्रक्रम (Adiabatic process) में किया गया कार्य किसके परिवर्तन के समानुपाती होता है?", opts: ["दाब", "आयतन", "तापमान", "एंट्रॉपी"] },	
                    correct: 2	
        	
                },	
                {	
                    en: { q: "JEE Main: Work done in an adiabatic process is proportional to change in?", opts: ["Pressure", "Volume", "Temperature", "Entropy"] },	
                    hi: { q: "JEE Main: रुद्धोष्म प्रक्रम (Adiabatic process) में किया गया कार्य किसके परिवर्तन के समानुपाती होता है?", opts: ["दाब", "आयतन", "तापमान", "एंट्रॉपी"] },	
                    correct: 2	
                }	
            ]	
};
