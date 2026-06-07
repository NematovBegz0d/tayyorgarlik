// Maktab maslahatchisi — suhbatga tayyorgarlik materiali
// Barcha kontent strukturalangan ko'rinishda

const APP_DATA = {
  title: "Maktab Maslahatchisi",
  subtitle: "Suhbatga to'liq tayyorgarlik materiali",
  sections: [
    // ============ KIRISH / FLAGMAN ============
    {
      id: "kirish",
      label: "Kirish",
      icon: "🎓",
      heading: "Flagman javoblar va IT ustunlik",
      groups: [
        {
          id: "flagman",
          title: "Eng muhim javob: \"Maktab maslahatchisi kim? Istiqbolli rejangiz?\"",
          items: [
            {
              q: "Maktab maslahatchisi kim va istiqbolli rejangiz nima?",
              a: "Hurmatli komissiya a'zolari! Maktab maslahatchisi — bu O'zbekiston Respublikasi Prezidentining 2025-yil 8-sentabrdagi PQ-277-son hamda Vazirlar Mahkamasining 2025-yil 10-dekabrdagi 776-son qarorlari asosida joriy etilgan, \"Kelajak\" markazining umumiy o'rta ta'lim maktabidagi vertikal tuzilmasidir.\n\nMen shunchaki maslahat beruvchi emasman — men o'quvchi, ota-ona, maktab va \"Kelajak\" markazi o'rtasida ko'prik vazifasini bajaruvchi yo'naltiruvchi, ruhiy ko'makchi va tashabbuslarni qo'llab-quvvatlovchi shaxsman. Mening asosiy maqsadim — har bir o'quvchining iqtidorini ro'yobga chiqarish va uni faqat bugungi imtihonga emas, balki kelajak mehnat bozoriga tayyorlashdir.\n\nIstiqbolli rejam uch yo'nalishdan iborat:\n• Birinchidan, \"Prezident iqtidorli farzandlari\" milliy dasturini keng targ'ib qilib, tarmoq to'garaklari va \"O'quvchilar kengashi\" faoliyatini tizimli yo'lga qo'yaman.\n• Ikkinchidan, \"Mening kelajakdagi kasbim\" dasturi asosida 7–9-sinf o'quvchilarining kasbiy qiziqishini maktab psixologi bilan birgalikda aniqlab, har bir o'quvchi uchun shaxsiy kasbga yo'naltirish tavsiyasini ishlab chiqaman va uni ota-ona bilan muhokama qilaman.\n• Uchinchidan, \"Turon teatr\", \"Jadidlar izidan\", \"Debat\" va \"Raqamli avlod qizlari\" kabi klublar orqali o'quvchilarda yetakchilik, vatanparvarlik va ijodkorlikni shakllantiraman.\n\nPirovard maqsadim — har bir o'quvchi o'z salohiyatini anglab, ongli qaror qabul qila oladigan, Vatanga sadoqatli barkamol shaxs bo'lib yetishishidir.",
              keys: ["PQ-277", "776-son", "ko'prik", "Prezident iqtidorli farzandlari", "Mening kelajakdagi kasbim", "barkamol shaxs"]
            },
            {
              q: "Flagman javob (1-kun versiyasi — Jondor tumani 29-maktab)",
              a: "Maktab maslahatchisi — Prezidentimizning 2025-yil 8-sentabrdagi PQ-277-son hamda Vazirlar Mahkamasining 2025-yil 10-dekabrdagi 776-son qarorlari asosida joriy etilgan, \"Kelajak\" markazining umumiy o'rta ta'lim maktabidagi vertikal tuzilmasidir.\n\nMen oddiy maslahatchi emas — o'quvchining shaxsiy qiziqishi, qobiliyati va mehnat bozori talabi o'rtasida to'g'ri ko'prik quruvchi, uning kelajak karyera strategiyasini rejalashtiruvchi mutaxassisman.\n\nJondor tumani 29-maktabdagi istiqbol rejam:\n• 7–11-sinf o'quvchilarining raqamli kasbiy xaritasini yarataman;\n• \"Mening kelajakdagi kasbim\" dasturi asosida psixolog bilan kasbga yo'naltiraman;\n• 7 ta klubni, ayniqsa \"Raqamli avlod qizlari\"ni shaxsan tashkil etaman;\n• Jondor tumanidagi \"Ishga marhamat\" Monomarkaz va IT-Park bilan hamkorlik o'rnataman;\n• Har bir bitiruvchining shaxsiy portfoliosini yarataman.\n\nPirovard maqsadim — har bir o'quvchining iqtidorini ro'yobga chiqarib, uni kelajak mehnat bozoriga tayyorlash va bitiruvchilar bandligini eng yuqori darajaga yetkazishdir.",
              keys: ["raqamli kasbiy xarita", "7 klub", "Monomarkaz", "IT-Park", "portfolio", "2035-yilga tayyorlash"]
            },
            {
              q: "💪 IT ustunlik jumlasi (har javobda eslating)",
              a: "Men TATU — Toshkent axborot texnologiyalari universiteti bitiruvchisiman, dasturlash va kiberxavfsizlik mutaxassisiman. Shuning uchun o'quvchilarni zamonaviy kasblarga nafaqat yo'naltira olaman, balki ularga real ko'nikma — dasturlash, kiberxavfsizlik va sun'iy intellekt asoslarini bevosita o'rgata olaman. Bu mening eng katta ustunligim.",
              keys: ["TATU", "dasturlash", "kiberxavfsizlik", "real ko'nikma o'rgataman"]
            }
          ]
        }
      ]
    },

    // ============ SHABLON JAVOBLAR ============
    {
      id: "shablonlar",
      label: "Shablon javoblar",
      icon: "⭐",
      heading: "Har bir yo'nalish uchun mukammal shablon javob",
      principle: "Har bir shablon bitta tuzilishga quriladi: TA'RIF (hujjat/atama) → AMALIYOT (bosqichlar) → IT USTUNLIK → BOLA MANFAATI bilan yakun. Avval qisqa ta'rif, so'ng misol bilan ishonchli gapiring.",
      groups: [
        {
          id: "shablon-asosiy",
          title: "6 yo'nalish — 6 ta asosiy savol va flagman javob",
          items: [
            {
              q: "1️⃣ KASBLAR: Zamonaviy mehnat bozorida qaysi kasblar talab yuqori va siz o'quvchilarni qanday tayyorlaysiz?",
              a: "Hurmatli komissiya a'zolari! Bugungi mehnat bozori global raqamlashtirish va \"yashil iqtisodiyot\" ta'sirida tubdan o'zgarmoqda. Kelgusi 10 yilda eng talabgir kasblar — sun'iy intellekt va katta ma'lumotlar muhandisi, kiberxavfsizlik mutaxassisi, muqobil energiya muhandisi, agrotexnolog va raqamli marketolog bo'ladi.\n\nLekin men o'quvchilarga shuni singdiraman: bugun muhimi — aniq kasb emas, balki KOMPETENSIYA. Ya'ni \"4C\" — tanqidiy fikrlash, ijodkorlik, muloqot va hamkorlik, shuningdek raqamli savodxonlik va ingliz tili. Chunki kassir, oddiy operator yoki tarjimon kabi kasblar yo'qoladi, ammo o'rganishni biladigan inson hech qachon ishsiz qolmaydi.\n\nTATU bitiruvchisi sifatida men, ayniqsa AI va kiberxavfsizlik yo'nalishida o'quvchilarga nafaqat nazariya, balki real ko'nikma o'rgata olaman — bu mening eng katta ustunligim.\n\nAmaliyotda men \"Mening kelajakdagi kasbim\" dasturi asosida har bir o'quvchini \"Xohlayman – Qila olaman – Kerak\" formulasi bo'yicha yo'naltiraman: uning qiziqishi, qobiliyati va bozor talabi kesishgan nuqtani topaman.\n\nPirovard maqsadim — o'quvchini bitta diplomga emas, butun umr o'rganishga (lifelong learning) tayyor, raqobatbardosh shaxs qilib shakllantirish.",
              keys: ["AI/kiberxavfsizlik", "kasb emas — kompetensiya", "4C", "TATU ustunlik", "Xohlayman-Qila olaman-Kerak", "lifelong learning"]
            },
            {
              q: "2️⃣ AKADEMIK: Kasbga yo'naltirish va o'quvchilarni oliy ta'limga tayyorlash ishini qanday tashkil qilasiz?",
              a: "Men kasbga yo'naltirishni ilmiy, tizimli va bosqichma-bosqich olib boraman.\n\nBirinchidan, 7-sinfdan boshlab maktab psixologi bilan birgalikda har bir o'quvchining qiziqishi, qobiliyati va temperamentini test (Holland/Klimov), kuzatuv va suhbat orqali aniqlayman. Bitta testga emas, kompleks ma'lumotga tayanaman.\n\nIkkinchidan, \"Mening kelajakdagi kasbim\" dasturi asosida kasblar bilan amaliy tanishtiraman: videoroliklar, korxonalarga ekskursiyalar va kasb egalari bilan jonli uchrashuvlar orqali.\n\nUchinchidan, oliygohga kirmoqchi bo'lganlar uchun aniq yo'l xaritasi tuzaman: o'quvchini kuchli fan o'qituvchisiga biriktiraman, muntazam MOCK (sinov) imtihonlar o'tkazib uni real imtihon muhitiga va stressga tayyorlayman.\n\nIqtidorlilarni \"Prezident iqtidorli farzandlari\" dasturi orqali nufuzli, shu jumladan xorijiy oliygohlarga (IELTS/TOEFL, FLEX, DAAD) tayyorlayman, motivatsion xat va grant hujjatlarida hamrohlik qilaman.\n\nIT mutaxassisi sifatida raqamli kasblar bo'yicha o'quvchilarga eng aniq va real ma'lumot bera olaman. Maqsadim — har bir o'quvchini imkon qadar grant asosida o'ziga mos oliygohga kirgizish.",
              keys: ["psixolog (7-sinf)", "Holland/Klimov", "MOCK", "fan o'qituvchisiga biriktirish", "Prezident iqtidorli farzandlari", "grant/motivatsion xat"]
            },
            {
              q: "3️⃣ KLUBLAR: Qaysi klublarni tashkil etasiz va ularni qanday boshqarasiz?",
              a: "Nizomga ko'ra men yetti klubni tashkil etaman: \"Turon teatr\", \"Iqtidor ansambli\", \"Jadidlar izidan\", \"Eco-schools Uzbekistan\", \"Xorijiy tillar\", \"Debat\" va \"Raqamli avlod qizlari\". Har bir klub aniq bir ko'nikmani beradi: \"Debat\" — tanqidiy fikrlash va notiqlik, \"Jadidlar izidan\" — milliy o'zlik, \"Raqamli avlod qizlari\" — IT ko'nikmalari.\n\nHar qanday klub yoki tadbirni men bosqichma-bosqich tashkil qilaman: maqsadni belgilayman → ishchi guruh tuzaman → reja va ssenariy tayyorlayman → sifatli o'tkazaman → g'oliblarni rag'batlantirib, jarayonni ijtimoiy tarmoqlarda yoritaman.\n\nYettita klubni birvarakayiga boshqarish uchun har biriga alohida reja, jadval va mas'ul rahbar tayinlayman, o'quvchilarni qiziqishiga qarab taqsimlayman va klublarni o'zaro bog'layman.\n\nIT mutaxassisi sifatida men bu monitoringni \"Ijtimoiy portfolio\" moduli orqali raqamli va tizimli yuritaman — bu vaqtni tejaydi va xatoni kamaytiradi. Ayniqsa \"Raqamli avlod qizlari\"ni shaxsan o'zim Canva, SMM va dasturlash asoslarini o'rgatib olib boraman.\n\nMaqsadim — har bir o'quvchi kamida bitta klubda faol ishtirok etishi.",
              keys: ["7 klub", "6 bosqich", "reja+jadval+rahbar", "Ijtimoiy portfolio (raqamli)", "Raqamli avlod qizlari — shaxsan", "har bola — 1 klub"]
            },
            {
              q: "4️⃣ ISTIQBOL: Maslahatchi kim va sizning istiqbolli rejangiz qanday? (Flagman)",
              a: "Maktab maslahatchisi — Prezidentimizning 2025-yil 8-sentabrdagi PQ-277-son hamda Vazirlar Mahkamasining 2025-yil 10-dekabrdagi 776-son qarorlari asosida joriy etilgan, \"Kelajak\" markazining maktabdagi vertikal tuzilmasidir. Men o'quvchi, ota-ona, maktab va markaz o'rtasida ko'prik vazifasini bajaraman.\n\nIstiqbolli rejam aniq:\n• 1-oyda o'quvchilar ma'lumotlar bazasini tuzaman va so'rovnoma orqali qiziqishni aniqlayman;\n• 1-chorakda 3–4 klubni ishga tushirib, \"O'quvchilar kengashi\" saylovini o'tkazaman;\n• 2-chorakda 7–9-sinflarda kasbga yo'naltirish va iqtidorlilar uchun MOCK imtihonlarni boshlayman;\n• Yil yakunida kamida bitta yirik festival o'tkazib, qo'shimcha ta'limga jalbni oshiraman.\n\n3–5 yil ichida menejerlik sertifikatini olib, 29-maktabni tumandagi eng kuchli raqamli ta'lim markaziga aylantirishni maqsad qilaman.\n\nNega aynan men? Chunki TATU bitiruvchisiman — dasturlash va kiberxavfsizlikni bilaman; Nizomni puxta bilaman; va men buni lavozim emas, missiya deb bilaman.\n\nPirovard maqsadim — har bir o'quvchini bugungi imtihonga emas, kelajak mehnat bozoriga tayyorlash.",
              keys: ["PQ-277, 776-son", "ko'prik", "1-oy/1-chorak/yil yakuni", "raqamli ta'lim markazi", "lavozim emas, missiya"]
            },
            {
              q: "5️⃣ KEYSLAR: Muammoli vaziyatlarni qanday hal qilasiz? (Universal algoritm)",
              a: "Men har qanday muammoli vaziyatni bitta universal algoritm asosida, hissiyotga berilmasdan hal qilaman:\n\n1. Hech kimni AYBLAMAYMAN, avval diqqat bilan TINGLAYMAN;\n2. Muammoning haqiqiy SABABINI aniqlayman;\n3. Quruq gap emas, DALILGA tayanaman — test natijalari, portfolio, real misollar;\n4. Yolg'iz hal qilmayman — psixolog, ota-ona yoki ma'muriyat bilan HAMKORLIK qilaman;\n5. Har bir qarorda BOLANING MANFAATI va psixikasini birinchi o'ringa qo'yaman.\n\nMisol uchun, bola IT'ni, ota-ona shifokorlikni xohlasa — men \"oltin o'rta\" yechimni taklif qilaman: bioinformatika yoki tibbiy kibernetika kabi ikkala tomonni qondiruvchi yangi kasblar.\n\nAgar resurs yoki sharoit yetishmasa, \"sharoit yo'q\" deb qo'l qovushtirmayman — Nizomdagi huquqim asosida talab qilaman, grant loyihalar va homiylarni jalb qilaman.\n\nMening tamoyilim: har bir muammo — yechilishi mumkin bo'lgan vazifa, har bir bola esa — alohida e'tiborga loyiq shaxs.",
              keys: ["5 qadam algoritm", "ayblamayman → sabab → dalil → hamkorlik → bola manfaati", "oltin o'rta", "qo'l qovushtirmayman"]
            },
            {
              q: "6️⃣ TARBIYA: O'quvchilarda vatanparvarlik va milliy qadriyatlarni qanday tarbiyalaysiz?",
              a: "Mening tamoyilim aniq: tarbiya quruq nasihat va shior bilan emas, MUHIT, NAMUNA va AMALIY HARAKAT bilan shakllanadi. Shuning uchun har bir qadriyatni amaliy loyiha orqali singdiraman.\n\nVatanparvarlikni amaliyotda tarbiyalayman: tarixiy obidalarga ekskursiyalar, \"Jadidlar izidan\" klubi orqali Behbudiy, Cho'lpon, Avloniy kabi sakkiz allomaning merosini o'rganish, har dushanba Davlat madhiyasini jonli kuylash va obodonlashtirish kabi ezgu ishlar.\n\nMilliy va umuminsoniy qadriyatlarni muvozanatda beraman: bir tomondan Navro'z, kitobxonlik, milliy o'zlik; ikkinchi tomondan \"Debat\" va \"Do'stlik festivali\" orqali bag'rikenglik — chunki maqsadim o'z xalqini sevadigan, ayni paytda dunyoga ochiq inson tarbiyalash.\n\nHalollik, va'daga vafo va qariyalarga hurmat kabi fazilatlarni amaliy loyihalar — \"Halollik do'koni\" va \"Nuroniylar duosi\" volontyorligi orqali singdiraman.\n\nMen raqamli fuqarolikni ham o'rgataman: internet madaniyati, axborot xavfsizligi va feyk axborotni tanish — bu mening sohamiz.\n\nMaqsadim — o'quvchi \"Vatan uchun men nima qila olaman?\" degan savolga amaliy javob topadigan, daxldorlik tuyg'usiga ega barkamol shaxs bo'lib yetishishi.",
              keys: ["muhit-namuna-amaliy harakat", "8 jadid", "dushanba madhiya", "Do'stlik festivali", "Halollik do'koni/Nuroniylar duosi", "raqamli fuqarolik"]
            }
          ]
        }
      ]
    },

    // ============ HUQUQIY ASOS ============
    {
      id: "huquqiy",
      label: "Huquqiy asos",
      icon: "📘",
      heading: "Umumiy va huquqiy asos hamda vazifalar",
      groups: [
        {
          id: "bolim-1",
          title: "I bo'lim. Umumiy va huquqiy asos",
          items: [
            {
              q: "Maktab maslahatchisi lavozimi qaysi hujjatlar asosida joriy etilgan?",
              a: "Maktab maslahatchisi lavozimi ikki asosiy hujjat asosida joriy etilgan. Birinchisi — Prezidentimizning 2025-yil 8-sentabrdagi PQ-277-son \"Maktabdan tashqari ta'lim tizimini yangi bosqichga olib chiqish chora-tadbirlari to'g'risida\"gi qarori. Ikkinchisi — Vazirlar Mahkamasining 2025-yil 10-dekabrdagi 776-son qarori. Aynan shu hujjatlar negizida \"Barkamol avlod\" bolalar maktablari o'rnida \"Kelajak\" markazlari tashkil etildi va maktablarda maslahatchi lavozimi joriy qilindi.",
              keys: ["PQ-277", "776-son", "Kelajak markazi", "Barkamol avlod o'rnida"]
            },
            {
              q: "Maslahatchi kimga bo'ysunadi?",
              a: "Men ikki rahbarga to'g'ridan-to'g'ri bo'ysunaman: birinchisi — tegishli tuman yoki shahar \"Kelajak\" markazi direktori, ikkinchisi — men faoliyat yuritayotgan umumiy o'rta ta'lim maktabining direktori. Faoliyatim aynan shu ikki tomon tomonidan muvofiqlashtirib boriladi.",
              keys: ["Kelajak markazi direktori", "maktab direktori", "ikki rahbar"]
            },
            {
              q: "Maslahatchi qaysi qonun va hujjatlar asosida ishlaydi?",
              a: "Men o'zboshimchalik bilan emas, balki qonun va nizom asosida ishlayman. Faoliyatim O'zbekiston Respublikasi Konstitutsiyasi, \"Ta'lim to'g'risida\"gi Qonun, \"Kelajak\" markazining ustavi hamda maktabning me'yoriy hujjatlariga asoslanadi.",
              keys: ["Konstitutsiya", "Ta'lim to'g'risidagi Qonun", "ustav", "nizom"]
            },
            {
              q: "\"Kelajak\" markazi nima va qaysi yoshdagi bolalarga xizmat qiladi?",
              a: "\"Kelajak\" markazi — bu 6 yoshdan 18 yoshgacha bo'lgan bolalarga qo'shimcha ta'lim xizmatlarini ko'rsatuvchi davlat muassasasi bo'lib, yuridik shaxs maqomiga ega. U bolalarning bo'sh vaqtini mazmunli tashkil etish hamda ularning ilmiy, texnik, ijodiy va sport salohiyatini ro'yobga chiqarishga xizmat qiladi.",
              keys: ["6–18 yosh", "davlat muassasasi", "yuridik shaxs", "qo'shimcha ta'lim"]
            }
          ]
        },
        {
          id: "bolim-2",
          title: "II bo'lim. Asosiy vazifalar",
          items: [
            {
              q: "Maktab maslahatchisining asosiy vazifalarini sanab bering.",
              a: "Mening oltita asosiy vazifam bor:\n1. \"Prezident iqtidorli farzandlari\" milliy dasturi mazmunini yoritish va uni o'quvchilar o'rtasida keng targ'ib qilish.\n2. \"Kelajak\" markazlarining tarmoq to'garaklari faoliyatini maktabda tizimli tashkil etish.\n3. O'quvchilarni tarixiy obidalar, madaniy yodgorliklar, milliy va umuminsoniy qadriyatlar bilan yaqindan tanishtirish.\n4. Yetakchilik, tashabbuskorlik va jamoada ishlash ko'nikmalarini shakllantirish maqsadida loyihalar, klublar, debatlar hamda \"O'quvchilar kengashi\" faoliyatini yo'lga qo'yish.\n5. Madaniyat, san'at, kitobxonlik, sport va ekologiya yo'nalishida loyihalar tashkil etish.\n6. O'quvchilarning maktabdan tashqari ta'limga jalb etilganligi to'g'risidagi ma'lumotlar bazasini yuritish.",
              keys: ["6 ta vazifa", "dastur targ'iboti", "tarmoq to'garaklari", "qadriyatlar", "yetakchilik/klub", "ma'lumotlar bazasi"]
            }
          ]
        },
        {
          id: "bolim-3",
          title: "III bo'lim. Amaliy funksiyalar",
          items: [
            {
              q: "Maslahatchi kasbga yo'naltirishni qanday amalga oshiradi?",
              a: "Men dastlab so'rovnomalar orqali o'quvchilarning kasbga va oliy ta'limga bo'lgan qiziqishini aniqlayman. So'ngra \"Mening kelajakdagi kasbim\" dasturi asosida 7–9-sinf o'quvchilarining kasbiy qiziqishlari va qobiliyatlarini o'rganaman. Bu jarayonda maktab psixologi bilan hamkorlikda, o'quvchining temperamenti va shaxsiy xususiyatlarini hisobga olaman. Har bir o'quvchi uchun shaxsiy kasbga yo'naltirish tavsiyasini ishlab chiqib, uni ota-ona bilan muhokama qilaman.",
              keys: ["so'rovnoma", "7–9-sinf", "psixolog", "shaxsiy tavsiya", "ota-ona"]
            },
            {
              q: "O'quvchilarni kasblar bilan qanday tanishtirasiz?",
              a: "Men o'quvchilarga kasblar haqida to'liq tasavvur berish uchun uch xil usuldan foydalanaman: videoroliklar namoyishi, korxona va tashkilotlarga ekskursiyalar uyushtirish hamda kasb egalari bilan jonli uchrashuvlar tashkil etish.",
              keys: ["videorolik", "ekskursiya", "kasb egalari bilan uchrashuv"]
            },
            {
              q: "O'quvchining oliy ta'limga kirishiga qanday ko'maklashasiz?",
              a: "Oliy ta'limga kirishni istagan o'quvchilarni fan o'qituvchilariga biriktiraman. Prezident va ixtisoslashtirilgan maktablar maslahatchilari bilan hamkorlikda, \"Prezident iqtidorli farzandlari\" dasturi ishtirokchilari uchun sinov, ya'ni MOCK imtihonlarini o'tkazaman. Bu o'quvchilarni real imtihon sharoitiga oldindan tayyorlaydi.",
              keys: ["fan o'qituvchisiga biriktirish", "MOCK imtihon", "real imtihon sharoiti"]
            },
            {
              q: "\"O'quvchilar kengashi\" nima va uning vazifasi nima?",
              a: "\"O'quvchilar kengashi\" — bu o'quvchilarda liderlik va yumshoq ko'nikmalarni, ya'ni soft skillsni shakllantirishga qaratilgan o'zini o'zi boshqarish tuzilmasi. Men uning a'zolarini saylov yo'li bilan saylayman va ularning faoliyatini rivojlantirish uchun muntazam seminar va treninglar tashkil etaman. Bu o'quvchilarni mustaqil qaror qabul qilishga va mas'uliyatni his etishga o'rgatadi.",
              keys: ["o'zini-o'zi boshqarish", "saylov", "soft skills", "seminar/trening"]
            },
            {
              q: "Maslahatchi qaysi klublarni tashkil etadi?",
              a: "Nizomga ko'ra men quyidagi yetti klubni tashkil etaman: \"Turon teatr\", \"Iqtidor ansambli\", \"Jadidlar izidan\", \"Eco-schools Uzbekistan\", \"Xorijiy tillar\", \"Debat\" va \"Raqamli avlod qizlari\" klublari. Har bir klub o'quvchida muayyan ko'nikmani shakllantiradi: masalan, \"Debat\" tanqidiy fikrlashni, \"Jadidlar izidan\" milliy o'zlikni, \"Eco-schools\" esa ekologik madaniyatni rivojlantiradi.",
              keys: ["7 klub", "Turon teatr", "Debat", "Raqamli avlod qizlari", "har biri 1 ko'nikma"]
            },
            {
              q: "Inklyuziv to'garaklar kimlar uchun va siz ularni qanday tashkil qilasiz?",
              a: "Inklyuziv to'garaklar — alohida ta'lim ehtiyojlari bo'lgan bolalar uchun mo'ljallangan. Men bunday bolalarni hech kimdan kam his qildirmasdan, ularning qiziqishidan kelib chiqib to'garaklarga jalb qilaman va ular uchun teng imkoniyatli muhit yarataman.",
              keys: ["alohida ta'lim ehtiyoji", "teng imkoniyat", "qiziqishdan kelib chiqib"]
            },
            {
              q: "\"Ijtimoiy portfolio\" moduli nima?",
              a: "Bu — har bir o'quvchining qo'shimcha ta'limga, to'garak va klublarga jalb etilganligini qayd etib boruvchi elektron modul. Men bu modul orqali o'quvchining qaysi yo'nalishda faolligini tizimli kuzatib boraman.",
              keys: ["elektron modul", "jalb qayd etish", "tizimli kuzatuv"]
            }
          ]
        },
        {
          id: "bolim-4",
          title: "IV bo'lim. Zamonaviy tushunchalar",
          items: [
            {
              q: "STEAM nimani anglatadi?",
              a: "STEAM — beshta sohaning qisqartmasi: Science — tabiiy fanlar, Technology — texnologiyalar, Engineering — muhandislik, Art — san'at va Mathematics — matematika. Bu yondashuv o'quvchida yaxlit, ijodiy va amaliy fikrlashni shakllantiradi, chunki u fanlarni alohida emas, balki o'zaro bog'liq holda o'rgatadi.",
              keys: ["Science", "Technology", "Engineering", "Art", "Mathematics"]
            },
            {
              q: "\"Ijtimoiy-emotsional ta'lim\" modeli necha bosqichda amalga oshiriladi?",
              a: "Bu model to'rt bosqichda amalga oshiriladi: maktabgacha ta'lim, boshlang'ich ta'lim, tayanch o'rta va o'rta ta'lim. Uning maqsadi — bolada yetakchilik, jamoada ishlash, faol fuqarolik va kommunikativ ko'nikmalarni bosqichma-bosqich, yoshiga mos ravishda rivojlantirishdir.",
              keys: ["4 bosqich", "maktabgacha", "boshlang'ich", "tayanch o'rta", "o'rta"]
            },
            {
              q: "Markaz o'quvchilarni qaysi zamonaviy yo'nalishlarga jalb etadi?",
              a: "Markaz o'quvchilarni sun'iy intellekt va robototexnika yo'nalishlariga jalb etadi. Bundan tashqari mobilograf, dasturlash, SMM, ya'ni ilgari surish va reklama qilish, hamda modellashtirish kabi to'garaklar tashkil etiladi. Bu o'quvchining yaratuvchanlik ko'nikmalarini rivojlantiradi.",
              keys: ["sun'iy intellekt", "robototexnika", "mobilograf", "dasturlash", "SMM"]
            }
          ]
        },
        {
          id: "bolim-5",
          title: "V bo'lim. Huquq va majburiyatlar",
          items: [
            {
              q: "Maktab maslahatchisining huquqlari nimalardan iborat?",
              a: "Mening huquqlarim quyidagilar: belgilangan tartibda menejerlik sertifikatiga o'qish va sertifikat amal qilgan davrda lavozim maoshimga har oylik 30 foiz ustama olish; maktabning pedagogik kengashi va iqtidorli o'quvchilar komissiyasiga a'zo bo'lish; to'garaklar va pedagoglar faoliyatini o'rganish hamda bildirgi kiritish; ish rejasidagi tadbirlarning maktab tomonidan moliyalashtirilishini talab qilish; o'z faoliyatimga oid ma'lumotlarni targ'ib etish.",
              keys: ["30% ustama", "pedagogik kengash a'zosi", "moliyalashtirishni talab qilish"]
            },
            {
              q: "Maslahatchining majburiyatlari nimalardan iborat?",
              a: "Mening majburiyatlarim: Konstitutsiya, \"Ta'lim to'g'risida\", \"Pedagog maqomi to'g'risida\", \"Korrupsiyaga qarshi kurashish\" qonunlari va Mehnat kodeksi doirasida faoliyat yuritish; har oylik axborot va hisobotlarni maktab direktori hamda \"Kelajak\" markaziga o'z vaqtida taqdim etish; nomenklatura asosida hujjatlarni yuritish; o'ziga ajratilgan xona va mablag'lardan to'g'ri foydalanish. Eng muhimi — ijtimoiy tarmoqlar va ommaviy axborot vositalarida ta'lim tizimini obro'sizlantiradigan har qanday harakatga yo'l qo'ymaslik.",
              keys: ["qonun doirasida", "hisobot o'z vaqtida", "obro'sizlantirmaslik"]
            }
          ]
        },
        {
          id: "bolim-6",
          title: "VI bo'lim. Faoliyatni tashkil etish va sharoit",
          items: [
            {
              q: "Maslahatchi lavozimi o'quvchilar soniga qarab qanday joriy etiladi?",
              a: "Lavozim o'quvchilar soniga qarab beriladi: agar maktabda 300 nafargacha o'quvchi bo'lsa — 0,5 birlik, agar 301 nafar va undan ortiq bo'lsa — 1,0 birlik etib belgilanadi.",
              keys: ["300 gacha — 0,5", "301+ — 1,0"]
            },
            {
              q: "Maslahatchining maoshi qaysi lavozimga tenglashtiriladi va ustama qachondan beriladi?",
              a: "Mening lavozim maoshim umumiy o'rta ta'lim maktabi direktor o'rinbosari maoshiga tenglashtiriladi. Menejerlik sertifikatiga ega bo'lsam, 2026-yil 1-sentabrdan boshlab har oylik 30 foiz qo'shimcha ustama olaman.",
              keys: ["direktor o'rinbosari", "30% ustama", "2026-yil 1-sentabr"]
            },
            {
              q: "Maslahatchining ish xonasi qanday jihozlanadi?",
              a: "Menga alohida xona yoki ma'naviy-ma'rifiy ishlar bo'yicha direktor o'rinbosari bilan bir xona ajratiladi. Xona ish stoli va stul, \"O'quvchilar kengashi\" a'zolari uchun kamida to'qqiz kishilik stol-stullar, ikkita kitob javoni, kompyuter jamlanmasi, printer va flipchart hamda zarur kanselyariya buyumlari bilan jihozlanadi.",
              keys: ["alohida xona", "9 kishilik stol", "kompyuter", "printer", "flipchart"]
            },
            {
              q: "Maslahatchining ish rejasi qanday moliyalashtiriladi?",
              a: "Mening ish rejamda belgilangan chora-tadbirlar umumiy o'rta ta'lim maktabining ish rejasiga kiritiladi va maktab tomonidan moliyalashtiriladi.",
              keys: ["maktab ish rejasiga kiritiladi", "maktab moliyalashtiradi"]
            }
          ]
        },
        {
          id: "bolim-7",
          title: "VII bo'lim. Siyosat va moliya",
          items: [
            {
              q: "\"Kelajak\" markazlarini qo'llab-quvvatlash Jamg'armasi qanday shakllanadi?",
              a: "Jamg'arma bir necha manbadan shakllanadi: Davlat budjetidan har yili 70 milliard so'm ajratiladi; ota-onalar badali to'lovining 10 foizi; homiylik xayriyalari hamda xalqaro grantlar. Bunda Jamg'armaga tushgan mablag'ning kamida 40 foizi moddiy-texnika bazasini mustahkamlashga sarflanadi.",
              keys: ["70 mlrd so'm/yil", "to'lovning 10%", "40% moddiy-texnika bazasiga"]
            },
            {
              q: "Ota-onalar to'lovidan kimlar ozod etiladi?",
              a: "Ota-onalar to'lovidan ijtimoiy reyestrga kiritilgan oilalarning farzandlari (ta'lim oluvchilar umumiy sonining 15 foizi miqdorida), hamda nogironligi yoki alohida ta'lim ehtiyoji bo'lgan bolalar, yetim va ota-ona qaramog'idan mahrum bo'lgan bolalar ozod etiladi.",
              keys: ["ijtimoiy reyestr 15%", "nogironlik", "yetim bolalar"]
            }
          ]
        }
      ]
    },


    // ============ TEZ YODLASH ============
    {
      id: "tez-yodlash",
      label: "Tez yodlash",
      icon: "📌",
      heading: "Eng muhim raqam, fakt va maslahatlar",
      groups: [
        {
          id: "raqamlar",
          title: "Tez yodlash uchun — eng muhim raqam va faktlar",
          items: [
            { q: "Hujjatlar", a: "PQ-277 (08.09.2025) va 776-son (10.12.2025).", keys: ["PQ-277", "776-son"] },
            { q: "\"Kelajak\" markazi", a: "6–18 yosh, davlat muassasasi, yuridik shaxs.", keys: ["6–18 yosh", "yuridik shaxs"] },
            { q: "Shtat", a: "300 nafargacha — 0,5 birlik; 301+ — 1,0 birlik.", keys: ["0,5 / 1,0 birlik"] },
            { q: "Maosh", a: "Direktor o'rinbosariga teng; sertifikat bilan 30% ustama (2026-yil 1-sentabrdan).", keys: ["30% ustama"] },
            { q: "7 ta klub", a: "Turon teatr, Iqtidor ansambli, Jadidlar izidan, Eco-schools Uzbekistan, Xorijiy tillar, Debat, Raqamli avlod qizlari.", keys: ["7 klub"] },
            { q: "STEAM", a: "Science, Technology, Engineering, Art, Mathematics.", keys: ["STEAM"] },
            { q: "Ijtimoiy-emotsional ta'lim", a: "4 bosqich: maktabgacha – boshlang'ich – tayanch o'rta – o'rta.", keys: ["4 bosqich"] },
            { q: "Kasb dasturi", a: "\"Mening kelajakdagi kasbim\" — 7–9-sinflar.", keys: ["7–9-sinflar"] },
            { q: "Platformalar", a: "tanlov.uzedu.uz, test.uzedu.uz, \"Ijtimoiy portfolio\" moduli.", keys: ["tanlov.uzedu.uz", "test.uzedu.uz"] },
            { q: "Jamg'arma", a: "Yiliga 70 mlrd so'm; to'lovning 10% Jamg'armaga, 40% maktab fondiga.", keys: ["70 mlrd", "10% / 40%"] },
            { q: "6 ta asosiy vazifa", a: "Dastur targ'iboti, tarmoq to'garaklari, qadriyatlar, yetakchilik/klub, madaniyat-sport-ekologiya, ma'lumotlar bazasi.", keys: ["6 vazifa"] }
          ]
        },
        {
          id: "maslahatlar",
          title: "💡 Suhbatda omadli bo'lish uchun maslahatlar",
          items: [
            { q: "Hujjat nomi va raqamini ayting", a: "PQ-277, 776-son deb aniq aytsangiz, komissiyada kuchli taassurot qoldirasiz.", keys: ["aniqlik"] },
            { q: "Ishonchli va xotirjam gapiring", a: "Har savolga avval qisqa ta'rif, so'ng misol bilan javob bering.", keys: ["ta'rif + misol"] },
            { q: "Faol fe'l ishlating", a: "\"Men tashkil etaman, men yo'lga qo'yaman\" — bu sizning tashabbuskorligingizni ko'rsatadi.", keys: ["faol fe'l"] },
            { q: "Har javobni amaliyot bilan bog'lang", a: "Faqat nazariya emas, \"men buni shunday qilaman\" deb ayting.", keys: ["amaliyot"] }
          ]
        }
      ]
    },

    // ============ 1-KUN: KASBLAR ============
    {
      id: "kun-1",
      label: "1-kun: Kasblar",
      icon: "1️⃣",
      heading: "Kasblar va mehnat bozori (1–21)",
      groups: [
        {
          id: "kasblar",
          title: "1-mezon: Kasblar va mehnat bozori",
          items: [
            {
              q: "1. Kelasi 10 yilda mehnat bozorida talab yuqori bo'ladigan 10 ta kasb.",
              a: "Global raqamlashtirish va \"yashil iqtisodiyot\" tufayli quyidagi 10 kasbga talab eng yuqori bo'ladi:\n1. Sun'iy intellekt va katta ma'lumotlar muhandisi (AI & Data Scientist);\n2. Kiberxavfsizlik mutaxassisi;\n3. Muqobil energiya (quyosh, shamol) muhandisi;\n4. Agrotexnolog (aqlli qishloq xo'jaligi);\n5. Biotexnolog;\n6. Raqamli marketolog/targetolog;\n7. Robototexnik va dron operatori;\n8. E-commerce menejeri;\n9. Gerontolog va reabilitolog;\n10. Ruhiy salomatlik kouchi.\n\nMen, ayniqsa birinchi ikki kasbni — AI va kiberxavfsizlikni — o'z tajribam bilan o'quvchilarga o'rgata olaman.",
              keys: ["AI", "kiberxavfsizlik", "yashil energiya", "agrotexnolog", "robototexnik", "e-commerce", "kouch"]
            },
            {
              q: "2. 10–15 yil ichida yo'qolib ketadigan kasblar.",
              a: "Sun'iy intellekt va avtomatlashtirish tufayli kassir, ma'lumot kirituvchi operator, sayyohlik agenti, oddiy tarjimon, kuryer (dronlar almashtiradi), chiptachi va konveyer ishchisi yo'qoladi. Sababi — bu ishlarni mashina tezroq, arzonroq va xatosiz bajaradi.\n\nLekin men o'quvchilarga aytamanki, bu — qo'rquv emas, imkoniyat: yo'qolgan kasb o'rnida yangi kasb paydo bo'ladi.",
              keys: ["kassir", "operator", "tarjimon", "kuryer", "qo'rquv emas, imkoniyat"]
            },
            {
              q: "3. Avtomatlashtirish va robotlashtirish orqali yo'qoladigan kasblar (sabablari bilan).",
              a: "Birinchi navbatda qo'l mehnati va takroriy vazifalar yo'qoladi: zavoddagi qadoqlovchi va yig'uvchi ishchilar (robotlar), haydovchilar (haydovchisiz avtomobillar), arxiv xodimlari, matbaa teruvchilari. Umumiy sabab — mashina insondan tez, arzon va kamxato ishlaydi.",
              keys: ["qadoqlovchi", "haydovchi", "arxivchi", "mashina tez, arzon, kamxato"]
            },
            {
              q: "4. IT tufayli yuzaga kelgan 4 ta istiqbolli kasb.",
              a: "IT sohasi vakili sifatida aniq aytaman:\n1. Sun'iy intellekt (AI) mutaxassisi;\n2. Data analitik (ma'lumotlar tahlilchisi);\n3. Kiberxavfsizlik mutaxassisi — mening sohamiz;\n4. SMM/raqamli marketolog.\n\nQo'shimcha: veb/mobil dasturchi, UX/UI dizayner. Bular yuqori daromadli va masofaviy.",
              keys: ["AI", "data analitik", "kiberxavfsizlik", "SMM"]
            },
            {
              q: "5. Raqamli iqtisodiyotdagi istiqbolli kasblar.",
              a: "Dasturchi, AI mutaxassisi, data analitik, kiberxavfsizlik, SMM, UX/UI dizayner, blokcheyn mutaxassisi, e-commerce menejeri. Men TATUda olgan bilimim asosida maktabda IT to'garagini ochib, o'quvchilarni bularga amaliy tayyorlayman.",
              keys: ["dasturchi", "blokcheyn", "e-commerce", "IT to'garagi ochaman"]
            },
            {
              q: "6. Muhandislik va ishlab chiqarish sohasidagi istiqbolli kasblar.",
              a: "Robototexnika, mexatronika, muqobil energiya muhandisi, qurilish-arxitektura, oziq-ovqat texnologiyasi, avtomatlashtirish muhandisi, IT-muhandis. Sanoat rivojlangani sari talab ortadi. O'quvchilarni STEAM yo'nalishlariga qiziqtiraman.",
              keys: ["robototexnika", "mexatronika", "muqobil energiya", "STEAM"]
            },
            {
              q: "7. Texnika va muhandislik sohasining davlat iqtisodiyotiga foydasi.",
              a: "Texnika-muhandislik — iqtisodiyotning lokomotivi: ishlab chiqarishni rivojlantiradi (ish o'rni, daromad), innovatsiya va raqobatbardoshlikni oshiradi, infratuzilma (yo'l, ko'prik, energiya) yaratadi. Fakt: Germaniya, Janubiy Koreya, Yaponiya iqtisodiyoti aynan muhandislik va texnologiyaga asoslangan.",
              keys: ["lokomotiv", "ish o'rni", "innovatsiya", "Germaniya, Koreya, Yaponiya"]
            },
            {
              q: "8. Yuqori talabdagi kasblar va jamiyat taraqqiyotidagi o'rni (faktlar bilan).",
              a: "IT/dasturchi, AI, kiberxavfsizlik, muhandis, shifokor, moliya tahlilchisi. IT mutaxassis raqamli iqtisodiyotni, muhandis sanoatni, shifokor sog'liqni rivojlantiradi. Fakt: rivojlangan davlatlar iqtisodiyoti texnologiyaga asoslanadi; O'zbekistonda IT-Park eksporti yildan-yilga oshmoqda.",
              keys: ["IT, AI, muhandis, shifokor", "IT-Park eksporti oshmoqda"]
            },
            {
              q: "9. Masofaviy (onlayn) ishlasa bo'ladigan kasblar.",
              a: "Full-stack dasturchi, data analitik, grafik va UX/UI dizayner, SMM mutaxassisi, kopirayter, onlayn o'qituvchi, tarjimon, video-montajchi. Bu kasblar ayniqsa nogironligi bo'lgan va uzoq hududdagi o'quvchilar uchun teng imkoniyat yaratadi — joydan turib dunyoga ishlash mumkin.",
              keys: ["dasturchi", "dizayner", "SMM", "kopirayter", "joydan turib dunyoga"]
            },
            {
              q: "10. Qaysi kasblarga ijodiy yondashuv kerak? (faktlar bilan).",
              a: "Marketing (marketolog, kopirayter), dizayn (UX/UI, grafik), arxitektura, kontent-meykerlik, san'at, IT. Fakt: McKinsey tadqiqotlariga ko'ra, ijodiy fikrlash talab etadigan ish o'rinlari AI va robotlashtirish davrida eng kam qisqaradigan va eng yuqori maoshli sohalardir. Chunki mashina takrorlaydi, inson yaratadi.",
              keys: ["marketing", "dizayn", "kontent", "McKinsey: ijod eng kam qisqaradi"]
            },
            {
              q: "11. Zamonaviy texnologiyalar davrida kasblarning afzalligi (faktlar bilan).",
              a: "Masofaviy ishlash; yuqori daromad (IT/AI); global imkoniyat; og'ir mehnatning yengillashishi. Fakt: jahonda eng tez o'sayotgan sohalar — IT, AI, raqamli iqtisodiyot; O'zbekistonda IT-Park eksporti milliard dollarlarga yetdi.",
              keys: ["masofaviy", "yuqori daromad", "global", "IT-Park — milliard dollar"]
            },
            {
              q: "12. Soft skills nima va qaysi kasbda muhim?",
              a: "Soft skills — shaxsiy va ijtimoiy ko'nikmalar: muloqot, jamoada ishlash, liderlik, vaqtni boshqarish, tanqidiy fikrlash, emotsional intellekt. Oddiy qilib: hard skill — \"nima qila olishing\", soft skill — \"qanday qila olishing\". Deyarli barcha kasbda, ayniqsa \"inson-inson\" sohalarida (rahbar, o'qituvchi, shifokor, menejer) muhim. Hard skill ishga joylashtiradi, soft skill karyerada o'stiradi.",
              keys: ["muloqot", "jamoa", "liderlik", "hard — nima, soft — qanday", "ishga joylashtiradi / o'stiradi"]
            },
            {
              q: "13. Hayot davomida ta'lim (lifelong learning) va qayta tayyorlov.",
              a: "Bitta diplom bilan butun umr ishlash davri tugadi. Hayot davomida ta'lim — bilimni doimiy yangilash (misol: 20 yillik o'qituvchining AI dasturlarini o'rganishi). Qayta tayyorlov — kasbni butunlay yangilash (misol: ishsiz yoshning Monomarkazda 3 oyda dizayner bo'lib chiqishi va frilanser sifatida daromad topishi). Men o'quvchilarga \"o'rganishni o'rganish\"ni singdiraman.",
              keys: ["diplom davri tugadi", "o'qituvchi+AI", "Monomarkaz 3 oy", "o'rganishni o'rganish"]
            },
            {
              q: "14. Yo'qolmaydigan (uzoq muddatli) kasblar — afzallik va kamchilik.",
              a: "Insoniy empatiya va ijod talab qiladigan sohalar: shifokor-jarroh, psixolog, o'qituvchi, ijodkor-dizayner. Afzalligi: AI almashtirolmaydi, barqaror talab, yuqori nufuz. Kamchiligi: uzoq yillik o'qish, yuqori ruhiy yuklama (burnout xavfi).",
              keys: ["shifokor", "psixolog", "o'qituvchi", "AI almashtirolmaydi", "uzoq o'qish, burnout"]
            },
            {
              q: "15. Eng daromadli kasblar (bugun).",
              a: "IT/dasturchi, AI va data science, kiberxavfsizlik, shifokor-jarroh, moliya tahlilchisi. Lekin o'quvchiga doim aytaman: faqat daromadga emas, qiziqishi va qobiliyatiga mos kasbni tanlasin — sevib qilingan ish eng yuqori natija beradi.",
              keys: ["IT", "AI", "kiberxavfsizlik", "qiziqish + qobiliyat, faqat daromad emas"]
            },
            {
              q: "16. Kelajakda yaratilishi kutilayotgan kasblar.",
              a: "Kosmik turizm operatori, AI-axloq nazoratchisi, genetik muhandis, VR dizayneri, \"yashil\" energiya mutaxassisi. Bugungi maktab o'quvchisi hali mavjud bo'lmagan kasbda ishlashi mumkin — shuning uchun ularni yangilikka ochiq bo'lishga undayman.",
              keys: ["kosmik turizm", "AI-axloq", "genetik muhandis", "VR", "hali yo'q kasb"]
            },
            {
              q: "17. An'anaviy/milliy kasblar (afzallik va kamchilik).",
              a: "Novvoy, hunarmand, oshpaz, duradgor. Afzalligi: doimiy barqaror talab (odamlar doim non yeydi), mustaqil biznes imkoni, milliy meros saqlanadi. Kamchiligi: og'ir jismoniy mehnat, ish vaqti standart emas, daromad o'sishi chegaralangan. Eng yaxshi yo'l — milliy kasbni onlayn savdo va raqamli marketing bilan birlashtirish.",
              keys: ["novvoy", "oshpaz", "doim talab", "og'ir mehnat", "onlayn savdo bilan birlashtirish"]
            },
            {
              q: "18. Oilaviy/an'anaviy kasbni davom ettirish.",
              a: "Afzalligi: tayyor tajriba maktabi, oilaviy ustoz (mentor), tayyor mijozlar bazasi. Kamchiligi: bola majburlik ostida qiziqishidan voz kechishi, salohiyati ochilmay qolishi. Pozitsiyam: agar bolaning qiziqishiga mos kelsa — qo'llab-quvvatlayman, aks holda dalil bilan tushuntiraman. Bola manfaati birinchi.",
              keys: ["mentor", "mijozlar bazasi", "majburlik", "qiziqishiga mos bo'lsa — ha"]
            },
            {
              q: "19. Zamonaviy kasblarga tayyorlaydigan davlat tashkilotlari.",
              a: "• IT-Park (Raqamli texnologiyalar vazirligi) — dasturlash, dizayn, robototexnika;\n• \"Ishga marhamat\" Monomarkazlari — 30+ zamonaviy va ishchi kasbni bepul o'rgatadi;\n• Yoshlar ishlari agentligi — \"Ibrat farzandlari\", \"Ustoz AI\" loyihalari orqali til va texnologiya;\n• \"El-yurt umidi\" jamg'armasi.\n\nMen shu tashkilotlar bilan hamkorlik qilaman.",
              keys: ["IT-Park", "Ishga marhamat Monomarkaz", "Ibrat farzandlari", "Ustoz AI", "El-yurt umidi"]
            },
            {
              q: "20. Raqobatbardosh kasb egasi qanday bo'lishi kerak?",
              a: "Global bozor talabiga javob beradigan, ya'ni \"4C\" ko'nikmasiga ega: Critical thinking (tanqidiy fikrlash), Creativity (ijodkorlik), Communication (muloqot), Collaboration (hamkorlik). Bundan tashqari ingliz tilini biladigan, raqamli texnologiyalar bilan professional ishlaydigan va \"T-shaped\" (bir sohada chuqur, turdosh sohalarda umumiy bilim) mutaxassis.",
              keys: ["4C", "ingliz tili", "raqamli", "T-shaped"]
            },
            {
              q: "21. Nima uchun bir nechta ko'nikma o'rganish kerak? (mini skill).",
              a: "Bu zamonaviy dunyoda \"Slash career\" (ko'p tarmoqli karyera) deyiladi. Bir soha inqirozga uchrasa, ikkinchisi ishsizlikdan qutqaradi. Misol: ingliz tili o'qituvchisi SMM ni ham bilsa, xalqaro loyihalarda kontent-menejer bo'lib daromadini bir necha barobar oshiradi. Shuning uchun o'quvchilarni ko'p qirrali bo'lishga undayman.",
              keys: ["Slash career", "bir soha inqiroz — ikkinchisi qutqaradi", "o'qituvchi+SMM"]
            }
          ]
        }
      ]
    },


    // ============ 2-KUN: KLUBLAR ============
    {
      id: "kun-2",
      label: "2-kun: Klublar",
      icon: "2️⃣",
      heading: "Klublar va tadbirlar (87–104)",
      principle: "Men har qanday klub yoki tadbirni bosqichma-bosqich tashkil qilaman: maqsadni belgilayman → ishchi guruh tuzaman → reja va ssenariy tayyorlayman → sifatli o'tkazaman → g'oliblarni rag'batlantirib, jarayonni ijtimoiy tarmoqlarda yoritaman.",
      groups: [
        {
          id: "klublar-umumiy",
          title: "Umumiy savollar",
          items: [
            {
              q: "87. Maktab maslahatchisi qaysi klublarni tashkil etadi?",
              a: "Nizomga ko'ra men yetti klubni tashkil etaman: \"Turon teatr\", \"Iqtidor ansambli\", \"Jadidlar izidan\", \"Eco-schools Uzbekistan\", \"Xorijiy tillar\", \"Debat\" va \"Raqamli avlod qizlari\".\n\nHar bir klub o'quvchida muayyan ko'nikmani shakllantiradi: \"Debat\" — tanqidiy fikrlash, \"Jadidlar izidan\" — milliy o'zlik, \"Eco-schools\" — ekologik madaniyat, \"Raqamli avlod qizlari\" — IT ko'nikmalari. Har bir klubning aniq ish rejasi, jadvali va mas'ul rahbari bo'ladi. Men ularning faoliyatini doimiy tahlil qilib boraman, amaliy yordam ko'rsataman va har bir o'quvchining natijasini \"Ijtimoiy portfolio\" moduliga kiritaman. Maqsadim — har bir o'quvchi kamida bitta klubda faol ishtirok etishi.",
              keys: ["7 klub", "reja+jadval+rahbar", "Ijtimoiy portfolio", "har bola — 1 klub"]
            },
            {
              q: "88. Festival yoki tanlovni qanday tashkil qilasiz?",
              a: "Men har qanday tadbirni olti bosqichda, puxta tayyorgarlik bilan o'tkazaman:\n1. Tadbir maqsadini aniqlab, reja va ssenariy tuzaman.\n2. Moliyalashtirish masalasini hal qilaman — tadbirni maktab ish rejasiga kiritaman.\n3. Tashkiliy ishlarni yo'lga qo'yaman: sana, joy, mas'ul shaxslar, sahna bezagi va jihozlarni belgilayman.\n4. Baholash mezonlarini aniqlab, tadbirni sifatli o'tkazaman.\n5. G'olib va sovrindorlarni rag'batlantiraman.\n6. Butun jarayonni ommaviy axborot vositalari va ijtimoiy tarmoqlarda keng yoritib boraman.\n\nAgar mablag' bo'lmasa, maktab imkoniyati, o'quvchilar va ota-onalar ko'magi hamda homiylardan foydalanaman — chunki tadbirning qiymati pulda emas, g'oyada.",
              keys: ["6 bosqich", "maqsad → moliya → tashkiliy → o'tkazish → rag'bat → yoritish"]
            },
            {
              q: "89. Bir vaqtda 7 ta klubni qanday boshqarasiz?",
              a: "Bu — tizimli boshqaruv masalasi.\n1. Har klubga alohida ish rejasi, jadval va mas'ul rahbar tayinlayman.\n2. O'quvchilarni qiziqishlariga qarab klublarga taqsimlayman.\n3. Klublarni o'zaro bog'layman — masalan, \"Debat\" va \"Xorijiy tillar\" klublari birgalikda ingliz tilida debat o'tkazadi; \"Eco-schools\" a'zolari \"Raqamli avlod qizlari\"da ekologik loyiha tayyorlaydi.\n4. Jarayonlarni doimiy tahlil qilib, natijalarni elektron platformaga kiritaman.\n\nIT mutaxassisi sifatida men bu monitoringni raqamli, tizimli yuritaman — bu vaqtni tejaydi. Maqsad — har bir o'quvchi kamida bitta klubda faol bo'lishi.",
              keys: ["reja+jadval+rahbar", "qiziqishga qarab taqsim", "klublarni bog'lash", "raqamli monitoring"]
            }
          ]
        },
        {
          id: "turon-teatr",
          title: "🎭 \"Turon\" maktab teatri",
          items: [
            {
              q: "90. \"Turon teatr\" tanlovini qanday tashkil qilasiz?",
              a: "Bu tanlov teatr san'ati va sahna madaniyatini targ'ib qilishga qaratilgan. Ishtirokchilar — 7–10-sinf o'quvchilaridan iborat, 8 nafardan oshmagan jamoa. Tanlov uch bosqichda o'tkaziladi: mahalliy (mart), hududiy (aprel), respublika (iyun). Jamoalar turonteatri.uz platformasi orqali ariza topshiradi.\n\nMen maktabning ona tili, adabiyot va tarix o'qituvchilari bilan hamkorlikda klubni tashkil qilaman. O'quvchilar jadid bobolarimiz va adiblar asarlari asosida ssenariylar tayyorlaydi, men ularni bosqichma-bosqich — mashqlar, sahna nutqi va harakat madaniyati orqali tayyorlab boraman. Respublika bosqichi g'olibi xorijiy mamlakatga tajriba orttirish yo'llanmasini oladi.",
              keys: ["7–10-sinf", "8 nafar", "mart/aprel/iyun", "turonteatri.uz", "g'olib — xorijga"]
            },
            {
              q: "91. \"Turon teatr\" tanlovi necha shartdan iborat?",
              a: "Tanlov uch shartdan iborat:\n• I shart — \"Bizning maktab\" tanishtiruv (6 daqiqa, 10 ball): jamoa o'z maktabining yutuqlarini badiiy va sahna ko'rinishida tanishtiradi.\n• II shart — \"Madaniyat va san'at bilimdoni\" savol-javob (10 ta savol, 10 ball, 5 daqiqa): teatr va san'at tarixi, sohadagi islohotlar bo'yicha bilim sinaladi.\n• III shart — \"Teatr – ibratxona\" sahna spektakli (10 daqiqa, 30 ball): jamoa 5–11-sinf \"Adabiyot\" darsligidagi asardan parchani spektakl ko'rinishida namoyish etadi. Aktyorlik mahorati, sahna madaniyati, nutq, kiyim va dekoratsiya baholanadi.\n\nEng yuqori ball — III shartda (30 ball), shuning uchun men spektaklga alohida tayyorgarlik ko'raman.",
              keys: ["I — tanishtiruv (10)", "II — savol-javob (10)", "III — spektakl (30)", "eng ko'p ball — III"]
            },
            {
              q: "92. \"Turon teatr\" o'quvchiga nima beradi?",
              a: "Bu klub o'quvchida bir nechta muhim ko'nikmani rivojlantiradi: notiqlik san'ati, sahna madaniyati, badiiy did, jamoada ishlash va o'ziga ishonch. Bundan tashqari o'quvchilarni adabiyot, milliy qadriyatlar va teatr tarixi bilan yaqindan tanishtiradi. Eng muhimi — bu klub uyatchan o'quvchilarning ham o'zini namoyon qilishiga, sahnada qo'rquvni yengishiga yordam beradi. Bu ko'nikmalar kelajakda oliygoh intervyularida va har qanday kasbda asqotadi.",
              keys: ["notiqlik", "sahna madaniyati", "adabiyot", "jamoa", "qo'rquvni yengish"]
            }
          ]
        },
        {
          id: "raqamli-qizlar",
          title: "💻 \"Raqamli avlod qizlari\"",
          items: [
            {
              q: "93. \"Raqamli avlod qizlari\" klubini bosqichma-bosqich qanday tashkil qilasiz?",
              a: "Bu — mening eng kuchli yo'nalishim, chunki TATU bitiruvchisi va IT mutaxassisiman.\n1. Targ'ibot bosqichi: maktabda InfoWeek tashkil qilaman, plakat va videoroliklar orqali klubni targ'ib qilaman.\n2. A'zolarni ro'yxatga olib, ish rejasi va koordinator belgilayman.\n3. Mahorat darslari o'tkazaman — IT-Park rezidentlari, universitet talabalari va IT sohasidagi muvaffaqiyatli ayollarni taklif qilaman, o'zim ham qizlarga grafik dizayn (Canva), SMM, copy-writing va dasturlash asoslarini o'rgataman.\n4. Qizlarga real startap/loyiha tayyorlashda yordam beraman.\n5. Ularni tuman bosqichidan respublika tanloviga olib chiqaman va yutuqlarini mediada yoritaman.",
              keys: ["InfoWeek", "IT-Park rezidentlari", "Canva, SMM, dasturlash", "real startap", "tuman→respublika"]
            },
            {
              q: "94. Tanlov qaysi yo'nalishlarni qamrab oladi?",
              a: "Tanlov to'rt yo'nalishni qamrab oladi: Ta'lim, Sun'iy intellekt, Iqlim o'zgarishi, Yashil iqtisodiyot. Ikki yosh toifasida g'oliblar aniqlanadi: 16–20 yosh va 21–30 yosh. Ishtirokchilar individual yoki ikki kishilik jamoa bo'lib, qizlar.raqamliavlod.uz sayti orqali ro'yxatdan o'tadi. Har bir loyiha asosida yangi mahsulot yoki xizmat yaratish asosiy talab hisoblanadi.",
              keys: ["4 yo'nalish", "16–20 / 21–30 yosh", "2 nafar", "qizlar.raqamliavlod.uz"]
            },
            {
              q: "95. Tanlov necha bosqichda va qanday baholanadi?",
              a: "Tanlov uch bosqichda o'tkaziladi: tuman/shahar bosqichi (kuzgi ta'til davrida), viloyat bosqichi (qishki ta'til davrida) va respublika bosqichi.\n\nTuman bosqichida loyiha 75 ball bo'yicha baholanadi: yo'nalishga moslik (10 ball), loyiha taqdimoti (25 ball), innovatsionlik va ijodiy yondashuv (20 ball), kutilayotgan natija (20 ball). Loyiha himoyasi 3–5 daqiqa, taqdimot 12 sahifadan oshmasligi kerak.\n\nHar bosqichda har yosh toifasidan eng yaxshi loyihalar keyingi bosqichga o'tadi. Respublika g'oliblari \"Chet el ta'lim sayohati\"ni va ixtisoslik bo'yicha OTMga grant asosida kirish imkonini oladi.",
              keys: ["3 bosqich (kuz/qish/resp.)", "75 ball (10+25+20+20)", "himoya 3–5 daq", "g'olib — chet el + grant"]
            },
            {
              q: "96. Qizlarni IT va sun'iy intellektga qanday jalb qilasiz?",
              a: "Avvalo, qizlarda \"IT — faqat o'g'il bolalar uchun\" degan noto'g'ri stereotipni sindiraman. Buning uchun dunyoda va O'zbekistonda muvaffaqiyatga erishgan IT-ayollar misolini ko'rsataman. So'ng oddiy, qiziqarli va vizual loyihalardan boshlayman — masalan, o'z ijtimoiy sahifasini dizayn qilish yoki kichik ilova yaratish. Men o'zim ularga dasturlash va AI asoslarini sodda tilda o'rgataman. Eng faol qizlarni kichik sovg'alar va sertifikatlar bilan rag'batlantiraman. Maqsadim — har bir qizning g'oyasini real mahsulot yoki xizmatga aylantirish va ularda IT sohasiga ishonch uyg'otish.",
              keys: ["stereotipni sindirish", "IT-ayollar misoli", "oddiy/vizual loyiha", "men o'zim o'rgataman", "rag'bat"]
            }
          ]
        },
        {
          id: "iqtidor-ansambli",
          title: "🎼 \"Iqtidor\" maktab ansambli",
          items: [
            {
              q: "97. \"Iqtidor ansambli\" tanlovini qanday tashkil qilasiz?",
              a: "Bu — o'zbek milliy cholg'ulari ijrosi bo'yicha respublika tanlovi. Maqsadi — iqtidorli yoshlarni aniqlash, milliy san'atni ta'lim orqali rivojlantirish. Ishtirokchilar 6–10-sinf o'quvchilari (11–16 yosh), jamoa 5–8 nafardan iborat. Tanlov uch bosqichda: tuman (aprel, 2 asar), hududiy (may, 2 asar), respublika (iyun, 3 asar).\n\nMen maktabning musiqa o'qituvchisi bilan hamkorlikda iqtidorli o'quvchilarni aniqlab, ularni bosqichma-bosqich tayyorlab boraman, mashqlar va sahna chiqishlarini tashkil qilaman.",
              keys: ["milliy cholg'u", "6–10-sinf (11–16 yosh)", "5–8 nafar", "aprel/may/iyun (2/2/3 asar)"]
            },
            {
              q: "98. Ansambl tanlovida qanday talablar bor?",
              a: "Tanlovda faqat jonli ijro talab etiladi — audio fonogrammadan foydalanish taqiqlanadi, qo'shiq ham ijro etilmaydi, faqat milliy cholg'u. Chiqish vaqti 6 daqiqagacha.\n\nBaholash 40 ball bo'yicha amalga oshiriladi: ijro mahorati, ansambl uyg'unligi, milliy cholg'ulardan foydalanish, sahna madaniyati, musiqiy savodxonlik va badiiy talqin. Har bir mezon bo'yicha hakamlar alohida baho beradi. Respublika g'olibi xorijiy davlatga ta'lim sayohatini qo'lga kiritadi.",
              keys: ["jonli ijro (fonogramma yo'q)", "6 daqiqa", "40 ball", "g'olib — chet el sayohati"]
            },
            {
              q: "99. Ansambl tanlovi o'quvchiga nima beradi?",
              a: "Bu klub o'quvchida milliy san'atga muhabbat, musiqiy savodxonlik, jamoaviylik va sahna madaniyatini shakllantiradi. Ayniqsa, ansambl ijrosi orqali jamoada birgalikda ishlash va bir-birini his qilish ko'nikmasi rivojlanadi. Bu tanlov \"Prezident iqtidorli farzandlari\" tashabbusining ijodiy yo'nalishini to'ldiradi va o'quvchining iqtidorini xalqaro darajada namoyon etishiga imkon yaratadi.",
              keys: ["milliy san'at", "musiqiy savodxonlik", "jamoaviylik"]
            }
          ]
        },
        {
          id: "kengash-debat",
          title: "👑 Kengash, Debat, Xorijiy tillar, Jadidlar, Eco",
          items: [
            {
              q: "100. \"O'quvchilar kengashi\"ni qanday tashkil qilasiz?",
              a: "Bu — o'quvchilarda liderlik va yumshoq ko'nikmalarni (soft skills) shakllantiruvchi o'zini-o'zi boshqarish organi. Men uni demokratik saylov orqali tashkil qilaman: nomzodlar o'z dasturlarini taqdim etadi, o'quvchilar ovoz beradi. So'ng kengash a'zolari bilan muntazam seminar va treninglar o'tkazaman, ularning tashabbuslarini qo'llab-quvvatlayman, faoliyatini media va ijtimoiy tarmoqlarda yoritaman. Nizomga ko'ra ularga kamida 9 kishilik stol-stul ajratiladi. Bu organ o'quvchilarni mustaqil qaror qabul qilishga va mas'uliyatni his etishga o'rgatadi.",
              keys: ["o'zini-o'zi boshqarish", "demokratik saylov", "seminar/trening", "9 kishilik stol"]
            },
            {
              q: "101. \"Debat\" klubi o'quvchiga qanday foyda beradi?",
              a: "\"Debat\" klubini men \"Karl Popper\" formati asosida tashkil qilaman. Har hafta dolzarb ijtimoiy-iqtisodiy mavzu tanlanib, ikki jamoa (tarafdor va qarshi) bahslashadi.\n\nBu klub eng muhim soft skillsni rivojlantiradi: tanqidiy va mustaqil fikrlash, notiqlik (public speaking), fikrni dalil bilan asoslash, raqibni hurmat qilish, tez qaror qabul qilish va stressga chidamlilik. \"Xorijiy tillar\" klubi bilan birgalikda ingliz tilida ham debat o'tkazaman. Bu ko'nikmalar oliygoh intervyularida va kelajakdagi kasbda juda asqotadi.",
              keys: ["Karl Popper format", "2 jamoa (tarafdor/qarshi)", "tanqidiy fikrlash", "ingliz tilida ham"]
            },
            {
              q: "102. \"Xorijiy tillar\" klubini qanday tashkil qilasiz?",
              a: "Bu klubni haftada 2 marta, darsdan tashqari vaqtda erkin muloqot formatida (Speaking club) tashkil qilaman. Mashg'ulotlarni qiziqarli qilish uchun ingliz tilida kinolar muhokamasi, intellektual o'yinlar (Mafia, Alias) va munozaralardan foydalanaman.\n\nMaqsadim — o'quvchilarda tilga nisbatan qo'rquvni yo'qotib, erkin gapirish ko'nikmasini shakllantirish. Bundan tashqari klubni IELTS/CEFR sertifikatiga tayyorgarlik bilan bog'layman, chunki bu o'quvchilarga xorijiy grantlar va oliygohlarga yo'l ochadi.",
              keys: ["haftada 2 marta", "Speaking club", "kino muhokamasi", "Mafia/Alias", "IELTS/CEFR"]
            },
            {
              q: "103. \"Jadidlar izidan\" klubida nima qilasiz?",
              a: "Maktabning ona tili, adabiyot va tarix o'qituvchilari bilan hamkorlikda klubni tashkil qilaman. O'quvchilar 8 ta jadid alloma — Behbudiy, Cho'lpon, Fitrat, Avloniy, Abdulla Qodiriy, Munavvar Qori, Is'hoqxon Ibrat va G'ulom Zafariy — hayoti, asarlari va g'oyalarini o'rganadi. Ular shu allomalar asosida kichik ssenariylar yozib, sahna ko'rinishlari namoyish etadi.\n\nBu klub orqali o'quvchilarda kitobxonlik, milliy o'zlik, mustaqil va tanqidiy fikrlash hamda vatanparvarlik ko'nikmalari shakllanadi. Eng yaxshi ishtirokchilar respublika bosqichida xorijiy ta'lim sayohatiga ega bo'ladi.",
              keys: ["8 alloma", "ssenariy+sahna", "milliy o'zlik"]
            },
            {
              q: "104. \"Eco-schools\" klubi va alohida ta'lim ehtiyojli bolalar uchun nima qilasiz?",
              a: "Eco-schools: ekologik madaniyat shakllantiraman — ko'kalamzorlashtirish, chiqindilarni qayta ishlash (recycling), suv va energiya tejash, maktab hududini tozalash. Bosqichlar: muammoni aniqlash → eko-kengash tuzish → reja → amaliy harakat → natijani yoritish.\n\nInklyuziv to'garaklar: alohida ta'lim ehtiyojli bolalar uchun ularning imkoniyatiga mos faoliyat (IT, shaxmat, art-terapiya, mental arifmetika) tanlayman. Ularni jalb qilishda tengdoshlari orasidan \"Buddy\" (ko'ngilli do'st) tizimini yo'lga qo'yaman — sog'lom o'quvchi alohida ehtiyojli bolani to'garakka yetaklab keladi va birga qatnashadi. Maqsad — har bola jamoaning to'laqonli a'zosi bo'lishi.",
              keys: ["Eco: ko'kalamzor, recycling", "inklyuziv: IT/shaxmat/art-terapiya", "Buddy tizimi"]
            }
          ]
        }
      ]
    },


    // ============ 3-KUN: AKADEMIK + ISTIQBOL ============
    {
      id: "kun-3",
      label: "3-kun: Akademik & Istiqbol",
      icon: "3️⃣",
      heading: "Akademik rejalashtirish (22–34) va istiqbol rejalar (35–43)",
      principle: "Men kasbga yo'naltirishda \"Xohlayman – Qila olaman – Kerak\" formulasiga tayanaman: bolaning qiziqishi (xohlayman) + qobiliyati (qila olaman) + mehnat bozori talabi (kerak) kesishgan nuqtani topaman.",
      groups: [
        {
          id: "akademik",
          title: "2-mezon: Akademik rejalashtirish va oliygohlarga yo'naltirish",
          items: [
            {
              q: "22. Kasbga yo'naltirish ishini qanday tashkil qilasiz?",
              a: "Men kasbga yo'naltirishni tizimli va bosqichma-bosqich olib boraman:\n1. So'rovnomalar orqali o'quvchilarning kasb-hunarga va oliy ta'limga bo'lgan qiziqishini aniqlayman.\n2. Maktab psixologi bilan birgalikda 7-sinfdan boshlab har bir o'quvchining qiziqishi, qobiliyati, shaxsiy xususiyati va temperamentini o'rganaman.\n3. \"Mening kelajakdagi kasbim\" dasturi asosida 7–9-sinflar bilan ishlayman — kasblar haqida videoroliklar ko'rsataman, korxonalarga ekskursiya uyushtiraman va kasb egalari bilan uchrashuvlar tashkil qilaman.\n4. Yig'ilgan ma'lumotlar asosida har bir o'quvchi uchun shaxsiy kasbga yo'naltirish tavsiyasini ishlab chiqib, uni ota-ona bilan muhokama qilaman.\n\nIT mutaxassisi sifatida, ayniqsa raqamli kasblar bo'yicha o'quvchilarga aniq va real ma'lumot bera olaman. Maqsadim — har bir o'quvchini \"Xohlayman – Qila olaman – Kerak\" formulasiga mos kasbga yo'naltirish.",
              keys: ["so'rovnoma", "psixolog (7-sinf)", "Mening kelajakdagi kasbim", "shaxsiy tavsiya", "ota-ona"]
            },
            {
              q: "23. Psixolog bilan qanday hamkorlik qilasiz?",
              a: "Maktab psixologi — kasbga yo'naltirish ishidagi eng yaqin hamkorim. Nizomga ko'ra men 7-sinfdan boshlab aynan psixolog bilan birgalikda ishlayman. Biz birga o'quvchilarning qiziqishi, qobiliyati va temperamentini ilmiy metodlar — testlar, kuzatuvlar va suhbatlar orqali aniqlaymiz. Psixolog bolaning ichki psixologik xususiyatlarini baholaydi, men esa shu asosda unga mos kasb va ta'lim yo'nalishini tavsiya qilaman. Bu hamkorlik mening tavsiyalarimni obyektiv va ishonchli qiladi.",
              keys: ["eng yaqin hamkor", "7-sinf", "test/kuzatuv/suhbat", "psixolog — ichki dunyo, men — kasbiy yo'nalish"]
            },
            {
              q: "24. O'quvchining qiziqishini qanday aniqlaysiz?",
              a: "Men bitta usulga emas, kompleks usulga tayanaman: kuzatuv + so'rovnoma/anketa + psixologik test (masalan, Holland yoki Klimov testi) + individual suhbat + o'quv natijalari tahlili. Bularning hammasini birlashtirganda o'quvchining haqiqiy qiziqishi va qobiliyati aniq ko'rinadi. Bitta test yakuniy hukm emas — men har doim bir nechta manbaga tayanaman.",
              keys: ["kompleks", "Holland/Klimov testi", "bitta test — hukm emas"]
            },
            {
              q: "25. \"Mening kelajakdagi kasbim\" dasturi nima?",
              a: "Bu — Nizomda belgilangan, 7–9-sinf o'quvchilari bilan ishlashga mo'ljallangan kasbga yo'naltirish dasturi. Uning mohiyati — maktab psixologi bilan birgalikda har bir o'quvchining kasbiy qiziqishlari, qobiliyatlari va iqtidorlarini aniqlash. Olingan natijalar asosida men o'quvchini akademik ta'lim (oliy ta'limga tayyorlash) yoki kasb-hunar (amaliy mahorat) yo'nalishiga yo'naltiraman. Bu dastur o'quvchining kelajagini erta va to'g'ri rejalashtirishga yordam beradi.",
              keys: ["7–9-sinf", "psixolog bilan", "qiziqish+qobiliyat+iqtidor", "akademik yoki kasb-hunarga"]
            },
            {
              q: "26. O'quvchining qiziqishi ota-ona xohishiga zid bo'lsa? (vaziyat)",
              a: "Bu nozik vaziyatni dalil va hurmat asosida hal qilaman. Avval o'quvchi bilan suhbatlashib, uning haqiqiy qiziqishi va qobiliyatini psixologik test va portfolio natijalari bilan tasdiqlayman — quruq gap emas, dalilga tayanaman. So'ng ota-ona bilan uchrashib, bola haqida yig'ilgan obyektiv ma'lumotlarni tushuntiraman. Ota-onani aslo ayblamayman — men ular bilan hamkor bo'laman. Kerak bo'lsa, psixolog ishtirokida o'quvchi, ota-ona va men — uch tomon birga kelishuvga erishamiz.\n\nKelajakda shu kasb bilan yashaydigan shaxs bola bo'lgani uchun, bolaning fikri muhimroq. Lekin men buni ota-onaga bola tanlagan kasbning qanchalik istiqbolli ekanini aniq tahlillar bilan ko'rsatib tushuntiraman.",
              keys: ["dalilga tayanaman", "ota-onani ayblamayman", "uch tomon kelishuv", "bola fikri muhimroq"]
            },
            {
              q: "27. Hech narsaga qiziqmaydigan o'quvchi bilan qanday ishlaysiz?",
              a: "Men \"qiziqmaydigan bola yo'q, hali o'z qiziqishini topmagan bola bor\" tamoyiliga amal qilaman.\n1. Psixolog bilan birga sababini aniqlayman (oilaviy muammo, ishonchsizlik yoki noto'g'ri yo'nalish).\n2. Uni turli klub va faoliyatlarga (Turon teatr, Debat, IT to'garagi, sport) jalb qilaman.\n3. Unga kichik, erishish mumkin bo'lgan vazifa beraman — birinchi kichik muvaffaqiyat unda ishonch va qiziqish uyg'otadi.\n\nSabr bilan, har bir bolaga individual yondashib, uning ichidagi iqtidorni ochaman.",
              keys: ["qiziqmaydigan bola yo'q", "psixolog bilan sabab", "klubga jalb", "kichik vazifa → birinchi muvaffaqiyat"]
            },
            {
              q: "28. Bitiruvchilarni OTMga kirishga qanday tayyorlaysiz? (yo'l xaritasi)",
              a: "Men buni aniq yo'l xaritasi asosida olib boraman:\n1. O'quvchining qiziqishi, qobiliyati va maktab o'rtacha bahosini (GPA) tahlil qilaman.\n2. Oliy ta'limga kirishni istaganlarni kuchli fan o'qituvchilariga biriktiraman.\n3. MOCK (sinov) imtihonlari o'tkazaman — bu o'quvchini real imtihon muhitiga tayyorlaydi.\n4. Iqtidorlilarni \"Prezident iqtidorli farzandlari\" dasturi orqali nufuzli oliygohlarga tayyorlayman.\n5. Hujjat topshirish, motivatsion xat (motivation letter) yozish va grant bo'yicha hamrohlik qilaman.\n\nMaqsadim — o'quvchini imkon qadar grant asosida nufuzli oliygohga kirgizish.",
              keys: ["GPA tahlil", "fan o'qituvchisiga biriktirish", "MOCK", "Prezident iqtidorli farzandlari", "grant/motivation letter"]
            },
            {
              q: "29. MOCK imtihon nima va nima uchun o'tkaziladi?",
              a: "MOCK imtihon — sinov (mashq) imtihoni bo'lib, real imtihondan oldin o'tkaziladigan tayyorgarlik imtihoni. Men buni Prezident va ixtisoslashtirilgan maktablar maslahatchilari bilan hamkorlikda, Davlat test markazi andozalariga mos ravishda o'tkazaman.\n\nFoydasi: o'quvchi imtihon muhiti va formatiga ko'nikadi, stressga chidamli bo'ladi; men uning kuchli va zaif tomonlarini aniqlab, individual reja tuzaman; o'quvchining o'ziga ishonchi ortadi.\n\nMuhim: MOCK deyarli barcha fanlarda qo'llaniladi, faqat chet tilida emas — komissiya ikkilantirishga urinishi mumkin, ishonchdan qaytmang.",
              keys: ["sinov imtihoni", "Davlat test markazi andozasi", "format+stress", "deyarli barcha fanda"]
            },
            {
              q: "30. \"Prezident iqtidorli farzandlari\" dasturida nima qilasiz?",
              a: "Bu — iqtidorli yoshlarni barvaqt aniqlash va inson kapitalini rivojlantirishga qaratilgan milliy dastur. Maslahatchi sifatida men: milliy dasturni o'quvchilar orasida targ'ib qilaman; imtihon orqali saralangan iqtidorli o'quvchilarni o'zimga biriktiraman; ularni maxsus platforma orqali nufuzli xalqaro oliygohlarga tayyorlayman; MOCK imtihonlar o'tkazaman va mos fan o'qituvchisiga biriktiraman.\n\nMaqsadim — iqtidorli o'quvchilarni grant asosida nufuzli oliygohga kirgizish.",
              keys: ["milliy dastur targ'iboti", "imtihon orqali saralash", "platforma", "nufuzli oliygohga"]
            },
            {
              q: "31. Iqtidorli o'quvchini xorijiy oliygohga qanday tayyorlaysiz?",
              a: "Bosqichma-bosqich:\n1-bosqich (baholash): o'quvchining darajasini aniqlab, kuchli va zaif tomonini belgilayman;\n2-bosqich (til): IELTS, TOEFL, SAT ga tayyorlayman, \"Xorijiy tillar\" klubidan foydalanaman;\n3-bosqich (akademik): kuchli fan o'qituvchisiga biriktiraman va MOCK imtihonlar o'tkazaman;\n4-bosqich (grant): chet el grantlari (masalan, FLEX, DAAD) va stipendiyalar haqida ma'lumot beraman;\n5-bosqich (hujjat): motivatsion xat va arizalar bo'yicha hamrohlik qilaman.",
              keys: ["baholash", "IELTS/TOEFL/SAT", "fan o'qituvchisi+MOCK", "FLEX/DAAD", "motivatsion xat"]
            },
            {
              q: "32. O'quvchi chet elda o'qishni xohlasa, maslahatingiz?",
              a: "Bu ezgu va katta maqsadni men to'liq qo'llab-quvvatlayman. Avvalo, xalqaro til sertifikatlarini (IELTS/TOEFL) olishni va maktab o'rtacha bahosini (GPA) yuqori saqlashni maslahat beraman. So'ng u xohlagan davlatdagi eng mos va xavfsiz universitetlar hamda bepul grantlar ro'yxatini shakllantiraman. Firibgar konsalting firmalariga aldanib qolmaslik uchun hujjatlarni mustaqil topshirish yo'llarini o'rgataman.\n\nEng muhimi — \"brain drain emas, brain gain\" tamoyilini singdiraman: xorijda o'qib, bilimni Vatan ravnaqi uchun ishlatish g'oyasini.",
              keys: ["IELTS/TOEFL + GPA", "xavfsiz universitet + grant", "firibgardan ogohlantirish", "brain drain emas, brain gain"]
            },
            {
              q: "33. O'quvchi OTMga kirishdan umidini uzgan bo'lsa?",
              a: "1. Psixolog bilan umidsizlik sababini aniqlayman.\n2. Muvaffaqiyat hikoyalarini — qiyinchilikni yenggan insonlar misolini — ko'rsataman.\n3. Kichik, erishish mumkin bo'lgan maqsadlar qo'yib, har yutug'ini rag'batlantiraman, shu yo'l bilan ishonchni tiklayman.\n4. Muqobil yo'llarni ko'rsataman (kasb-hunar, MOOC kurslari, grant, kechroq topshirish).\n5. Fan o'qituvchisiga biriktirib, real reja tuzaman.\n\nMaqsad — o'quvchida \"sening ham imkoning bor\" degan ishonchni qaytarish.",
              keys: ["psixolog+sabab", "muvaffaqiyat hikoyasi", "kichik maqsad+rag'bat", "muqobil yo'l"]
            },
            {
              q: "34. To'garak va klublarning oliy ta'limga yo'naltirishdagi ahamiyati?",
              a: "Klublar o'quvchining iqtidorini erta ochadi va portfoliosini boyitadi. \"Xorijiy tillar\" klubi til sertifikatiga, \"Debat\" notiqlik va tanqidiy fikrlashga, \"Raqamli avlod qizlari\" IT yo'nalishiga tayyorlaydi. Bu ko'nikmalar oliygoh kirish jarayonida, ayniqsa intervyularda va grant olishda juda asqotadi. Klublardagi yutuqlar o'quvchining ijtimoiy portfoliosida qayd etiladi va bu uning kuchli \"vizit kartasi\"ga aylanadi.",
              keys: ["iqtidorni erta ochadi", "portfolio boyitadi", "intervyuda asqotadi"]
            }
          ]
        },
        {
          id: "istiqbol",
          title: "4-mezon: Sohaga doir istiqboldagi rejalar",
          items: [
            {
              q: "35. Maslahatchi kim va istiqbol rejangiz qanday?",
              a: "(Bu — flagman javob, \"Kirish\" bo'limida to'liq berilgan.) Qisqacha: maslahatchi — \"Kelajak\" markazining maktabdagi vertikal tuzilmasi, o'quvchi-ota-ona-maktab o'rtasida ko'prik. Rejam: o'quvchilar bazasini tuzish; raqamli kasbiy xarita; 7 klub + \"O'quvchilar kengashi\"; IT to'garagi ochish; iqtidorlilarni nufuzli oliygohlarga tayyorlash; har bitiruvchining portfoliosi.",
              keys: ["vertikal tuzilma", "ko'prik", "raqamli kasbiy xarita", "7 klub", "IT to'garagi", "portfolio"]
            },
            {
              q: "36. Ishga qabul qilinsangiz, birinchi yilda nimaga erishmoqchisiz?",
              a: "Birinchi yilni bosqichma-bosqich rejalashtiraman:\n• 1-oy (tahlil): o'quvchilar ma'lumotlar bazasini shakllantirish, so'rovnoma orqali qiziqish va ehtiyojni aniqlash;\n• 1-chorak: 3–4 ta klubni ishga tushirish, \"O'quvchilar kengashi\" saylovi;\n• 2-chorak: 7–9-sinflarda kasbga yo'naltirish, iqtidorlilar uchun MOCK imtihonlar;\n• Yil yakuni: kamida bitta yirik festival/tanlov, qo'shimcha ta'limga jalb ko'rsatkichini oshirish.\n\nHar bosqichni o'lchanadigan natija bilan baholayman. Maqsad — birinchi yildayoq ko'rinarli natija va o'quvchilar ishonchini qozonish.",
              keys: ["1-oy: baza/so'rovnoma", "1-chorak: klub+kengash", "2-chorak: kasbga yo'naltirish+MOCK", "yil yakuni: festival"]
            },
            {
              q: "37. 3–5 yildan keyin o'zingizni qanday ko'rasiz?",
              a: "Kasbiy jihatdan: menejerlik sertifikatini olgan, kuchli klublar tizimi va faol \"O'quvchilar kengashi\"ni shakllantirgan bo'laman. Natija jihatdan: o'quvchilarim nufuzli oliygohlarga kirgan, tanlovlarda g'olib bo'lgan. Shaxsiy jihatdan: ingliz tilim mukammal, balki magistratura yoki ilmiy darajaga ega bo'laman.\n\nIT mutaxassisi sifatida 29-maktabni Jondor tumanidagi eng kuchli raqamli ta'lim markaziga aylantirishni maqsad qilaman. Shuningdek, boshqa maslahatchilar uchun tajriba ulashadigan mutaxassis bo'lishni xohlayman.",
              keys: ["menejerlik sertifikati", "kuchli klublar", "o'quvchilar oliygohda", "eng kuchli raqamli ta'lim markazi"]
            },
            {
              q: "38. Ishingizda AI va raqamli texnologiyadan qanday foydalanasiz?",
              a: "Bu — mening eng kuchli tomonim, chunki TATU bitiruvchisiman.\n• \"Kelajak\" elektron platformasini va \"Ijtimoiy portfolio\" modulini professional yuritaman;\n• AI yordamida o'quv materiali, test va taqdimot tayyorlayman;\n• Excel'da ma'lumotlar bazasini tahlil qilaman, Canva/PowerPoint'da taqdimot yarataman;\n• o'quvchilarga raqamli xavfsizlik va media-savodxonlikni amaliy o'rgataman;\n• ularni \"Raqamli avlod qizlari\" orqali IT va AIga yo'naltiraman.\n\nEng muhimi — men AIni o'ylash o'rnini bosuvchi emas, yordamchi qurol sifatida o'rgataman.",
              keys: ["platforma+portfolio", "AI: material/test/taqdimot", "raqamli xavfsizlik", "AI — qurol, o'ylash o'rnini bosmaydi"]
            },
            {
              q: "39. O'quvchilarni qo'shimcha ta'limga jalb etishni qanday oshirasiz?",
              a: "Klublarni qiziqarli va zamonaviy qilaman (ayniqsa IT yo'nalishida); muvaffaqiyat hikoyalarini — tanlov g'oliblari, oliygohga kirganlarni — targ'ib qilaman; tadbirlarni media va ijtimoiy tarmoqlarda yoritaman; ota-onalar bilan ishlayman; har bolaga qiziqishiga mos individual taklif beraman.\n\nMaqsad — maktabda qo'shimcha ta'limga jalb madaniyatini yaratish.",
              keys: ["qiziqarli klub", "muvaffaqiyat hikoyasi", "media", "ota-ona", "individual taklif"]
            },
            {
              q: "40. \"Ijtimoiy portfolio\" modulini qanday yuritasiz?",
              a: "Bu — o'quvchining qo'shimcha ta'limga jalbini aks ettiruvchi rasmiy elektron modul. Har o'quvchi uchun \"Kelajak\" platformasida shaxsiy profil ochaman; unga klub/to'garakka jalbi, tanlov va tadbirlardagi ishtiroki, yutuqlari va sertifikatlarini tizimli kiritaman; muntazam yangilab boraman.\n\nIT mutaxassisi sifatida men bu modulni xatosiz va tizimli yurita olaman — bu mening kuchli tomonim. Bu portfolio \"Prezident iqtidorli farzandlari\" dasturiga nomzod tanlashda asosiy hujjat hisoblanadi.",
              keys: ["elektron modul", "shaxsiy profil", "jalb+yutuq+sertifikat", "Prezident iqtidorli farzandlari'ga asos"]
            },
            {
              q: "41. O'z malakangizni qanday oshirasiz?",
              a: "Uzluksiz o'rganaman: menejerlik sertifikatiga o'qiyman (sertifikat amal qilganda lavozim maoshiga +30% ustama); ingliz tilimni B2 darajaga yetkazaman; seminar, trening va konferensiyalarda ishtirok etib tajriba almashaman; IT sohamdagi yangiliklarni doimiy kuzatib boraman.\n\nTamoyilim — \"har kuni biror yangi narsa o'rganish\" (umrbod o'qish g'oyasi). Chunki maslahatchi o'z ustida ishlamasa, o'quvchilarga eskirgan maslahat beradi.",
              keys: ["menejerlik sertifikati (+30%)", "ingliz tili B2", "seminar/trening", "har kuni yangi narsa"]
            },
            {
              q: "42. Maslahatchining strategik (3 yillik) rejasi qanday?",
              a: "Rejam besh yo'nalishdan iborat:\n1. Psixologik qo'llab-quvvatlash — qiziqish/qobiliyat diagnostikasi, \"Ishonch qutisi\";\n2. Kasbga yo'naltirish — \"Bir kun – bir kasb\", kasb testlari, OTM hamkorligi;\n3. Milliy-ma'naviy tarbiya — festivallar, kitobxonlik, qadriyat seminarlari;\n4. Bo'sh vaqtni mazmunli tashkil etish — Debat, IT to'garagi, volontyorlik, sport;\n5. Raqamli profilaktika — internet xavfsizligi, kiberbulling profilaktikasi, media savodxonlik (mening sohamiz).\n\nMaqsad — o'quvchini psixologik barqaror, kasbiy ongli va raqamli davrga mos shaxs qilib shakllantirish.",
              keys: ["5 yo'nalish", "psixologik", "kasbga yo'naltirish", "milliy tarbiya", "bo'sh vaqt", "raqamli profilaktika"]
            },
            {
              q: "43. Nega aynan sizni tanlashimiz kerak? (yakuniy savol)",
              a: "Menda uchta kuchli tomon bor:\n1. TATU bitiruvchisiman — dasturlash va kiberxavfsizlikni bilaman, bu boshqa nomzodlarda kam uchraydi;\n2. Nizom talablarini puxta bilaman va ularni aniq reja bilan amalga oshira olaman;\n3. Men buni lavozim emas, missiya deb bilaman — Jondor tumani bolalarini raqamli kelajakka tayyorlash men uchun faxr.\n\nMenga ishonsangiz, natija bilan oqlayman.",
              keys: ["TATU (kam uchraydi)", "Nizomni bilaman+aniq reja", "lavozim emas, missiya"]
            }
          ]
        }
      ]
    },


    // ============ 4-KUN: TARBIYA ============
    {
      id: "kun-4",
      label: "4-kun: Tarbiya",
      icon: "4️⃣",
      heading: "Tarbiya va ijtimoiy-madaniy ko'nikmalar (44–60)",
      principle: "Tarbiya quruq nasihat va shior bilan emas, MUHIT, NAMUNA va AMALIY HARAKAT bilan shakllanadi. Shuning uchun men har bir qadriyatni amaliy loyihalar orqali singdiraman.",
      groups: [
        {
          id: "tarbiya",
          title: "6-mezon: Tarbiya va ijtimoiy-madaniy ko'nikmalar",
          items: [
            {
              q: "44. O'quvchilarda vatanparvarlik ruhini qanday tarbiyalaysiz?",
              a: "Vatanparvarlik — quruq shior emas, amaliy his-tuyg'u, shuning uchun men buni amaliyot orqali tarbiyalayman.\n1. Tarixiy obidalar va madaniy yodgorliklarga ekskursiyalar tashkil qilaman.\n2. \"Jadidlar izidan\" klubi orqali Behbudiy, Cho'lpon, Avloniy kabi ajdodlar merosini o'rgataman.\n3. Milliy bayramlar, davlat ramzlarini ulug'lash va vatan haqida kitobxonlik kechalarini o'tkazaman.\n4. Amaliy ezgu ishlar — ko'kalamzorlashtirish, obodonlashtirish, faxriylarga yordamga jalb qilaman.\n\nMaqsadim — o'quvchi \"Vatan uchun men nima qila olaman?\" degan savolga javob topishi.",
              keys: ["obidalarga ekskursiya", "Jadidlar izidan", "milliy bayram/ramz", "amaliy ezgu ish", "Vatan uchun men nima qila olaman?"]
            },
            {
              q: "45. O'zbekiston Mustaqilligi qadrini qanday shakllantirasiz?",
              a: "Mustaqillikni qadrlash — shunchaki bayramni nishonlash emas, balki ongli tushuncha shakllantirishdir.\n1. Tarixiy ongni kuchaytiraman — mustaqillikkacha va mustaqillikdan keyingi davrni real faktlar bilan solishtiraman.\n2. Faxriylar, tadbirkorlar bilan davra suhbatlari o'tkazaman.\n3. \"Mening Vatanim – mening faxrim\" kabi ijodiy tanlovlar tashkil qilaman.\n4. Mahalla va ijtimoiy loyihalarda amaliy ishtirok orqali mas'uliyat hissini oshiraman.\n\nMaqsad — o'quvchi \"Mustaqillik — bu mening imkoniyatim\" degan fikrga kelishi.",
              keys: ["ongli tushuncha", "davrlarni solishtirish", "faxriylar bilan suhbat", "Mustaqillik — mening imkoniyatim"]
            },
            {
              q: "46. Davlat tiliga hurmatni maktabda qanday amalga oshirasiz?",
              a: "Davlat tili — milliy o'zlik va birlik ramzi. Men buni tilning amaliy nufuzini ko'rsatish orqali singdiraman.\n1. Tilning maqomi va ahamiyatini tushuntiraman.\n2. Tilni amaliy va qiziqarli o'rgataman — xalq ertaklari, dostonlar, maqollar va rol o'yinlari orqali.\n3. Kitobxonlik orqali (Navoiy, Qodiriy, Cho'lpon) til boyligini oshiraman.\n4. \"Notiqlik san'ati\" va \"Eng yaxshi startap taqdimoti\" tanlovlarini faqat davlat tilida o'tkazaman.\n5. O'zim sof va chiroyli nutq bilan o'rnak bo'laman.\n\nO'quvchilarga o'zbek tilida ta'sirchan gapirish ham shaxsiy brend, ham yuksak madaniyat belgisi ekanini tushuntiraman.",
              keys: ["amaliy nufuz", "ertak/doston/maqol", "kitobxonlik", "Notiqlik san'ati tanlovi", "o'zim o'rnak"]
            },
            {
              q: "47. \"O'zbekistonlik\" tuyg'usini shakllantirishda maktabning roli?",
              a: "Maktab — bu tuyg'uning shakllanadigan asosiy o'chog'i va poydevoridir. Maktab quyidagilar orqali bu tuyg'uni shakllantiradi: milliy tarix, til va adabiyotni chuqur o'rgatish; milliy qadriyatlar va an'analarni singdirish; davlat ramzlari, bayramlar va vatanparvarlik tadbirlari; \"Jadidlar izidan\" klublari va kitobxonlik orqali ajdodlar merosi.\n\nEng muhimi — maktab o'quvchilarda umummilliy birdamlik hissini shakllantiradi: qaysi millat yoki hududdan bo'lmaylik, barchamiz yagona Vatan — O'zbekiston farzandimiz. Maslahatchi sifatida men o'quvchida o'z yurtiga mansublik, g'urur va daxldorlik tuyg'usini uyg'otaman.",
              keys: ["asosiy o'choq", "tarix/til/adabiyot", "umummilliy birdamlik", "yagona Vatan farzandi"]
            },
            {
              q: "48. Milliy va umuminsoniy qadriyatlarni qanday shakllantirasiz?",
              a: "Milliy qadriyatlar: tarixiy obidalarga ekskursiyalar; \"Jadidlar izidan\" klubi orqali ma'rifatparvar ajdodlar (Behbudiy, Cho'lpon, Fitrat, Avloniy) merosi; kitobxonlik loyihalari; milliy bayramlar (Navro'z).\n\nUmuminsoniy qadriyatlar: \"Debat\" va \"Xorijiy tillar\" klublari orqali global dunyo va boshqa madaniyatlarni hurmat qilish; \"Eco-schools\" orqali atrof-muhitga mas'uliyat.\n\nMaqsad — o'z xalqini sevadigan, ayni paytda dunyoga ochiq va bag'rikeng inson tarbiyalash.",
              keys: ["milliy: obida/Jadidlar/Navro'z", "umuminsoniy: Debat/Eco", "o'z xalqini sevadigan, dunyoga ochiq"]
            },
            {
              q: "49. Bag'rikenglik (tolerantlik)ni qanday shakllantirasiz?",
              a: "O'zbekiston ko'pmillatli, bag'rikeng mamlakat ekanini, har bir inson qadrli ekanini tushuntiraman.\n1. \"Dunyo xalqlari madaniyati va do'stligi\" festivalini tashkil qilaman — har bir sinf ma'lum bir millatning an'analari, kiyimlari va taomlarini namoyish etadi.\n2. \"Debat\" klubi orqali boshqacha fikrni hurmat qilishni o'rgataman.\n3. Inklyuziv (nogironligi bor) o'quvchilarga nisbatan sinfdoshlarida mehribonlik va teng munosabatni shakllantirish bo'yicha maxsus tushuntirish soatlarini o'tkazaman.\n4. Jamoaviy loyihalarda turli bolalarni birga ishlashga undayman.\n\nMaqsad — o'quvchi \"mendan farq qiluvchi\" insonni hurmatga loyiq deb bilishi.",
              keys: ["ko'pmillatli mamlakat", "Do'stlik festivali", "Debat", "inklyuziv mehribonlik", "farq qiluvchini hurmat"]
            },
            {
              q: "50. Milliy va shaxsiy o'zlikni anglash nima?",
              a: "Shaxsiy o'zlik — insonning o'z xarakteri, qobiliyati, qiziqishi, maqsadi va hayotiy pozitsiyasini anglashidir. Masalan, o'quvchining o'z ijodkorligini anglab dizayn sohasini tanlashi — shaxsiy o'zlik ifodasidir.\n\nMilliy o'zlik — insonning o'z millati, tili, tarixi, urf-odati va madaniyatini anglab, hurmat qilishi va faxrlanishidir. Masalan, Navro'zni qadrlash, milliy kiyimlarni hurmat qilish — milliy o'zlik ifodasidir.\n\nBu ikkisi bir-birini to'ldiradi: o'z milliy ildizini bilgan inson o'ziga ishonchli bo'ladi va jamiyatda faol, mas'uliyatli fuqaro bo'lib yetishadi.",
              keys: ["shaxsiy: xarakter/qobiliyat", "milliy: til/tarix/urf-odat", "ildizini bilgan — o'ziga ishonchli"]
            },
            {
              q: "51. Davlat ramzlariga hurmatni qanday shakllantirasiz?",
              a: "Davlat ramzlari — milliy mustaqillik timsoli.\n1. Har bir ramzning ma'nosi va tarixini tushuntiraman.\n2. Har dushanba kuni Davlat madhiyasini barcha o'quvchilar bilan birgalikda jonli va g'urur bilan kuylash tizimini yuqori saviyaga ko'taraman.\n3. \"Davlat ramzlari kuni\", bayroq va gerb ramzlari falsafasi bo'yicha viktorina va tanlovlar o'tkazaman.\n4. O'zim shaxsan o'rnak bo'laman.\n\nMaqsad — ramzlarga hurmat o'quvchining qalbidan, ongli his-tuyg'udan kelib chiqishi.",
              keys: ["ma'no+tarix", "dushanba — madhiya jonli", "Davlat ramzlari kuni viktorina", "o'zim o'rnak"]
            },
            {
              q: "52. O'quvchilarni tarixiy obidalarga sayohatni qanday tashkil qilasiz?",
              a: "Jarayonni besh bosqichda tashkil qilaman:\n1. Ruxsatnoma: maktab buyrug'i, ota-onalar roziligi va tegishli organ ruxsatini rasmiylashtirish;\n2. Xavfsizlik: xavfsiz transport va YHXB hamrohligini ta'minlash;\n3. Brifing: yo'lga chiqishdan oldin obida tarixi haqida qisqa ma'lumot berish;\n4. Amaliy vazifa: ekskursiyada o'quvchilarga rasmga olish yoki qaydlar yozish vazifasini berish;\n5. Yakun: maktabga qaytgach, ko'rganlari bo'yicha taqdimot yoki esse tayyorlash.\n\nMaqsad — vatanparvarlikni amaliy his qildirish, \"men shu buyuk xalqning vorisiman\" degan g'ururni uyg'otish.",
              keys: ["5 bosqich", "ruxsat → xavfsizlik → brifing → amaliy vazifa → taqdimot", "buyuk xalq vorisiman"]
            },
            {
              q: "53. Ekologik madaniyatni qanday shakllantirasiz?",
              a: "Maktabda \"Eco-schools Uzbekistan\" klubini va \"Eko-Maktab\" loyihasini tashkil qilaman.\n\nAmaliy aksiyalar: ko'kalamzorlashtirish (daraxt va gul ekish), chiqindilarni saralash va qayta ishlash (plastmassa va qog'ozni alohida yig'ish qutilari), suv va energiya tejash. Bundan tashqari \"Yashil burchak\" va \"Eng toza va eng yashil sinf\" haftalik tanlovini o'tkazib, jarayonni ijtimoiy tarmoqlarda yorituman. O'quvchilarni \"Raqamli avlod qizlari\"dagi \"Iqlim o'zgarishi\" va \"Yashil iqtisodiyot\" yo'nalishlarida loyiha tayyorlashga undayman.\n\nMaqsad — ekologik ong o'quvchining kundalik odatiga aylanishi.",
              keys: ["Eco-schools + Eko-Maktab", "daraxt ekish/recycling/tejash", "Eng yashil sinf tanlovi", "kundalik odat"]
            },
            {
              q: "54. Kitobxonlikka qiziqishni qanday oshirasiz?",
              a: "1. \"Jadidlar izidan\" klubini faollashtiraman.\n2. Kitobxonlik tanlovlari (\"Zukko kitobxon\", \"Yil kitobxoni\", kitob muhokamasi, mualliflar bilan uchrashuv) tashkil qilaman.\n3. \"Haftada bir kitob\" loyihasini yo'lga qo'yaman.\n4. O'quvchilarni ijtimoiy tarmoqda kitob taqrizi yozishga rag'batlantiraman — bu o'qish bilan media-savodxonlikni birlashtiradi.\n\n\"Zukko kitobxon\" tanlovini bosqichma-bosqich o'tkazaman: kitoblar ro'yxatini 2 oy oldin e'lon qilish → sinf bosqichlari → umummaktab finali → g'oliblarni ota-onalar ishtirokida taqdirlash. Maqsad — kitobni zavqli odatga aylantirish.",
              keys: ["Jadidlar izidan", "Zukko kitobxon", "Haftada bir kitob", "kitob taqrizi", "zavqli odat"]
            },
            {
              q: "55. Jadid allomalardan kimlarni bilasiz va ulardan nimani o'rgatasiz?",
              a: "8 ta alloma: Mahmudxo'ja Behbudiy, Abdulhamid Cho'lpon, Abdurauf Fitrat, Abdulla Avloniy, Abdulla Qodiriy, Munavvar Qori Abdurashidxonov, Is'hoqxon To'ra Ibrat, G'ulom Zafariy.\n\nUlar — milliy uyg'onish va ma'rifatparvarlik bayroqdorlari. Men ulardan: ilm-ma'rifatga intilish (Behbudiy, Avloniy), vatanparvarlik va milliy o'zlik (Cho'lpon, Fitrat), mustaqil va tanqidiy fikrlash hamda adabiy did (Abdulla Qodiriy) fazilatlarini o'rgataman.\n\nMaqsad — fidoyi, ma'rifatli va vatanparvar shaxs fazilatlarini shakllantirish.",
              keys: ["8 alloma", "Behbudiy, Cho'lpon, Fitrat, Avloniy, Qodiriy, Munavvar Qori, Ibrat, Zafariy", "milliy uyg'onish bayroqdorlari"]
            },
            {
              q: "56. O'quvchilarga \"O'zbekiston fuqarosi\" tushunchasini qanday singdirasiz?",
              a: "1. Konstitutsiya asosida fuqaroning huquq va burchlarini sodda tilda tushuntiraman — \"Mening huquqim va burchim\" mavzusida davra suhbatlari o'tkazaman.\n2. Fuqarolik mas'uliyati (qonunga hurmat, jamiyatga foyda) g'oyasini singdiraman.\n3. \"O'quvchilar kengashi\" saylovlari va volontyorlik orqali amaliy faollikni ta'minlayman.\n4. Raqamli fuqarolik — internet madaniyati, axborot xavfsizligi, feyk axborotni tanish ko'nikmasini o'rgataman (bu mening sohamiz).\n\nMaqsad — o'quvchi o'zini davlatning faol va daxldor a'zosi deb his qilishi.",
              keys: ["Konstitutsiya huquq+burch", "mas'uliyat", "Kengash/volontyorlik", "raqamli fuqarolik (feyk axborot)"]
            },
            {
              q: "57. Vatanni himoya qilish tuyg'usini qanday shakllantirasiz?",
              a: "1. Harbiy qismlarga ekskursiyalar va vatan himoyachilari, faxriylar bilan uchrashuvlar tashkil qilaman.\n2. Milliy qahramonlar (Jaloliddin Manguberdi, Amir Temur) va jadid bobolar fidoyiligi haqida hikoyalar so'zlayman.\n3. Harbiy-vatanparvarlik tadbirlari va harbiy sport musobaqalarini o'tkazaman.\n4. Amaliy ezgu ishlar (mahalla obodonligi, faxriylarga yordam)ga jalb qilaman.\n\nMaqsad — o'quvchi Vatanni himoya qilish faqat harbiy burch emas, har kungi halol mehnat ham ekanini tushunishi.",
              keys: ["harbiy qismga ekskursiya", "Manguberdi, Temur", "harbiy sport", "himoya — halol mehnat ham"]
            },
            {
              q: "58. Halollik, va'daga vafo, qariyalarga hurmatni qanday singdirasiz?",
              a: "Halollik: halol rizq barakali ekanini tushuntiraman; o'g'rilik, aldash va ko'chirmani qoralayman. Buni amaliy ko'rsataman — masalan, \"Halollik do'koni\" (sotuvchisiz do'kon, o'quvchi pulni o'zi qutiga tashlaydi) loyihasi orqali.\n\nVa'daga vafo: \"Va'da — qarz\", so'zida turish — insonning obro'si va kelajakdagi eng ishonchli kapitali; \"Mas'uliyat va dedlayn\" qoidasi orqali singdiraman, o'zim o'rnak bo'laman.\n\nQariyalarga hurmat: \"Nuroniylar duosi\" volontyorlik harakati orqali — o'quvchilar mahalladagi yolg'iz keksalardan xabar olib, maishiy yumushlarda yordam beradi.",
              keys: ["Halollik do'koni", "Va'da qarz, dedlayn", "Nuroniylar duosi volontyorlik"]
            },
            {
              q: "59. Estetik did va san'atga qiziqishni qanday rivojlantirasiz?",
              a: "\"Turon teatr\" klubi orqali sahna madaniyati, notiqlik va badiiy did; \"Iqtidor ansambli\" orqali musiqa, qo'shiq va raqs iqtidori; festival, ko'rik-tanlov va madaniy tadbirlar tashkil qilaman; iqtidorli o'quvchilarni san'at maktablari o'qituvchilariga biriktiraman.\n\nMaqsad — har bir o'quvchining ijodkorligini uyg'otish va estetik didini shakllantirish.",
              keys: ["Turon teatr", "Iqtidor ansambli", "festival/tanlov", "ijodkorlikni uyg'otish"]
            },
            {
              q: "60. Sport va sog'lom turmush tarzini qanday targ'ib qilasiz?",
              a: "Maktabda \"Maktab ligasi\" yoki \"Sinf chempionati\" tizimida doimiy sport musobaqalarini (futbol, voleybol, shaxmat) jozibador formatda yo'lga qo'yaman. Sportga qiziqmaydigan o'quvchilarni musobaqalarga hakam, sport tahlilchisi yoki tashkilotchi sifatida jalb qilaman — bu ularda sekin-asta qiziqish uyg'otadi. Sog'lom turmush tarzi tadbirlari o'tkazaman, zararli odatlardan ogohlantiraman.\n\nTamoyilim: \"jismonan faol bola — stressga chidamli bo'ladi\".",
              keys: ["Maktab ligasi/chempionat", "qiziqmaganni hakam qilish", "faol bola — stressga chidamli"]
            }
          ]
        }
      ]
    },


    // ============ 5-KUN: KEYSLAR ============
    {
      id: "kun-5",
      label: "5-kun: Keyslar",
      icon: "5️⃣",
      heading: "Muammoli vaziyatlar / keyslar (61–86)",
      principle: "UNIVERSAL ALGORITM (har keysda): 1) Ayblamayman, tinglayman → 2) Sababini aniqlayman → 3) Dalil/misol bilan tushuntiraman → 4) Hamkorlik (psixolog/ota-ona/ma'muriyat) → 5) Maqsad: bola manfaati.",
      groups: [
        {
          id: "ota-ona-keys",
          title: "👨‍👩‍👧 Ota-ona bilan bog'liq keyslar",
          items: [
            {
              q: "61. Bola bir kasbni, ota-ona boshqasini xohlaydi — kimning fikri muhim?",
              a: "Kelajakda shu kasb bilan yashaydigan shaxs bola bo'lgani uchun, bolaning fikri va qiziqishi muhimroq. Lekin ota-onani rad etmayman. Uchrashuv tashkil etib, bolaning kasbiy test natijalari va portfoliosini ota-onaga ko'rsataman; bola tanlagan kasbning qanchalik istiqbolli va serdaromad ekanini aniq tahlillar bilan tushuntirib, ikki tomonni kelishtiraman.",
              keys: ["bola fikri muhimroq", "rad etmayman", "test+portfolio", "uch tomon kelishuv"]
            },
            {
              q: "62. Qiz grant yutdi, ota-ona qarshi — qanday ko'ndirasiz?",
              a: "Ota-onani ayblamayman, xavotirini (xavfsizlik, masofa) tushunaman. Universitetning rasmiy xavfsizlik kafolatlari, yotoqxona sharoiti va u yerda o'qiyotgan boshqa o'zbekistonliklar tajribasini ko'rsataman. Grant — qizning kelajagi uchun tarixiy imkoniyat, butun oila va tuman uchun faxr ekanini tushuntiraman.",
              keys: ["xavotirni tushunish", "xavfsizlik kafolati/yotoqxona", "oila va tuman uchun faxr"]
            },
            {
              q: "63. Qiz harbiy/model bo'lmoqchi, ota-ona qarshi?",
              a: "Qizning intilishini hurmat qilaman. Harbiy soha faqat jang maydoni emas — harbiy psixologiya, kiberxavfsizlik, aloqa, tibbiyot, huquqshunoslik ham bor. Model esa — dizayn, brending kabi katta industriya. Ota-onaga real istiqbol va imkoniyatlarni dalil bilan ko'rsatib, xavotirini aritaman.",
              keys: ["intilishni hurmat", "harbiy — psixologiya/kiber/tibbiyot ham", "dalil bilan"]
            },
            {
              q: "64. Bola IT/matematikaga qiziqadi, ota-ona shifokor bo'lishini xohlaydi?",
              a: "Bu menga juda yaqin keys, IT mutaxassisiman. Men \"oltin o'rta\" yechimni taklif qilaman: tibbiyot va IT sintezidagi yangi kasblar — Bioinformatika, Tibbiy kibernetika, sog'liqni saqlashda data analitika. Shunda bolaning matematikaga qiziqishi ham saqlanadi, ota-onaning shifokorlik orzusi ham ushaladi.",
              keys: ["oltin o'rta", "Bioinformatika/Tibbiy kibernetika", "ikki tomon ham qondiriladi"]
            },
            {
              q: "65. Yevropa madaniyatiga qiziqadi, ota-ona milliy qadriyat tarafdori?",
              a: "Muvozanat yarataman: boshqa madaniyatni o'rganish dunyoqarashni kengaytiradi, lekin milliy ildizga sodiqlik muhim. Ota-onaga taqiqlash emas, yo'naltirish kerakligini tushuntiraman. Maqsad — milliy o'zligiga sodiq, dunyoga ochiq inson.",
              keys: ["muvozanat", "taqiqlash emas, yo'naltirish", "ildizga sodiq, dunyoga ochiq"]
            }
          ]
        },
        {
          id: "oquvchi-keys",
          title: "🎓 O'quvchi bilan bog'liq keyslar",
          items: [
            {
              q: "66. O'quvchi o'qishni ham, kasbni ham xohlamayapti?",
              a: "\"Qiziqmaydigan bola yo'q, o'z qiziqishini topmagan bola bor.\" Psixolog bilan sababini aniqlayman; \"Haqiqiy hayot hikoyasi\" metodi bilan tumandagi muvaffaqiyatli yoshlarni taklif qilaman; kichik amaliy vazifa berib, birinchi muvaffaqiyat zavqi orqali \"5 yildan keyin kim bo'laman?\" degan ichki savolni uyg'otaman.",
              keys: ["psixolog+sabab", "Haqiqiy hayot hikoyasi", "5 yildan keyin kim bo'laman?"]
            },
            {
              q: "67. Iqtidorli o'quvchining bilimi pasayib ketdi?",
              a: "Bu jiddiy signal — hayotida muammo (oila, sog'liq, tengdoshlar bosimi, tushkunlik) bor. Psixolog va sinf rahbari bilan sababini o'rganaman; bosim o'tkazmasdan samimiy suhbatlashaman; muammosini yechishga ko'maklashaman; yangi maqsad va rag'bat berib, so'ngan motivatsiyani qayta tiklayman.",
              keys: ["jiddiy signal", "psixolog+sabab", "bosimsiz suhbat", "yangi maqsad/rag'bat"]
            },
            {
              q: "68. Sinfda lider o'quvchi yo'q — qanday lider aniqlaysiz?",
              a: "\"Lider yo'q\" sinf bo'lmaydi — salohiyat ochilmagan. Sinfga kutilmagan jamoaviy vazifa (keys) tashlayman; shu jarayonda mas'uliyatni zimmasiga olib, jamoani tashkillagan yashirin liderni aniqlayman. \"Hafta sardori\" rotatsion tizimi bilan har bolaga imkon beraman.",
              keys: ["lider yo'q sinf bo'lmaydi", "kutilmagan jamoaviy vazifa", "Hafta sardori rotatsiya"]
            },
            {
              q: "69. O'quvchi bilimli, lekin jamoa oldida gapirishdan qo'rqadi?",
              a: "\"Kichik qadamlar\" metodi: avval 2–3 yaqin do'sti davrasida, keyin kichik guruh sardori, so'ng \"Debat\" klubiga jalb qilaman. Notiqlik — tug'ma iste'dod emas, rivojlantirsa bo'ladigan ko'nikma ekanini amalda ko'rsataman. Bilim + ishonch = muvaffaqiyat.",
              keys: ["Kichik qadamlar", "do'st→guruh→Debat", "notiqlik — ko'nikma, tug'ma emas"]
            },
            {
              q: "70. O'quvchi shaxsiy manfaatni jamoadan ustun qo'yyapti?",
              a: "Jamoaviy maqsad qo'yib, birgalikda erishish zavqini his qildiraman; fidoyilik qahramonlari misolini keltiraman; \"O'quvchilar kengashi\" va volontyorlik orqali o'zgalar uchun ishlash tajribasini beraman. \"Men\" emas, \"biz\" deb fikrlash.",
              keys: ["jamoaviy maqsad", "fidoyilik misoli", "volontyorlik", "men emas, biz"]
            },
            {
              q: "71. Optimist va pessimist o'quvchilar bilan qanday ishlaysiz?",
              a: "Optimist bilan: yuqori energiyasini yirik loyiha va liderlik vazifalariga yo'naltiraman. Pessimist bilan: tanqid qilmasdan, kichik va aniq muvaffaqiyat keltiradigan vazifalar beraman; har yutug'ini rag'batlantirib, xato — qo'rqinchli emas, rivojlanish bosqichi ekanini ko'rsataman.",
              keys: ["optimist — liderlik/loyiha", "pessimist — kichik muvaffaqiyat", "xato — rivojlanish bosqichi"]
            },
            {
              q: "72. O'quvchi OTMga kirishdan umidini uzgan?",
              a: "Psixolog bilan sababini aniqlayman; muvaffaqiyat hikoyalarini ko'rsataman; kichik maqsadlar bilan ishonchni tiklayman; muqobil yo'llarni (kasb-hunar, MOOC, grant) ko'rsataman. \"Sening ham imkoning bor.\"",
              keys: ["sabab", "muvaffaqiyat hikoyasi", "kichik maqsad", "muqobil yo'l"]
            }
          ]
        },
        {
          id: "oqituvchi-keys",
          title: "👨‍🏫 O'qituvchi bilan bog'liq keyslar",
          items: [
            {
              q: "73. O'qituvchi o'quvchilarni to'garagingizga qo'ymayapti?",
              a: "Sababni aniqlayman (jadval to'qnashuvi yoki maqsadni tushunmaslik); xushmuomalalik bilan suhbatlashib to'garak foydasini tushuntiraman, jadvalni moslashtiraman; hal bo'lmasa pedagogik kengash va direktor orqali yechim topaman. O'qituvchini g'anim emas, sherik qilaman.",
              keys: ["sabab", "suhbat+jadval moslash", "pedkengash/direktor", "sherik qilish"]
            },
            {
              q: "74. Biriktirilgan pedagog OTMga tayyorlashda sustkashlik qilyapti?",
              a: "Pedagog bilan holatni xushmuomalalik bilan muhokama qilaman. Agar dars yuklamasi ko'p bo'lsa, o'quvchiga qo'shimcha bepul onlayn platformalar (Khan Academy, Ibrat farzandlari) orqali tayyorlanish rejasini tuzaman. Hal bo'lmasa boshqa pedagogga qayta biriktiraman.",
              keys: ["suhbat", "onlayn platforma (Khan Academy/Ibrat farzandlari)", "qayta biriktirish"]
            },
            {
              q: "75. O'qituvchi yillik to'garak hisobotini topshirmadi?",
              a: "Sababini bilaman; hisobot namunasini ko'rsatib amaliy yordam beraman; aniq muddat belgilayman; hal bo'lmasa ma'muriyatga yetkazaman. IT mutaxassisi sifatida yagona qulay elektron hisobot shaklini joriy qilaman. Ayblash emas, tizimni yo'lga qo'yish.",
              keys: ["sabab", "namuna+yordam", "muddat", "elektron hisobot shakli (IT)"]
            }
          ]
        },
        {
          id: "tadbir-keys",
          title: "🎪 Tadbir / tashkiliy keyslar",
          items: [
            {
              q: "76. Ekskursiyaga olib bordingiz, o'quvchilar passiv?",
              a: "Passivlikni qiziqishga aylantirish uchun ularga kichik vazifalar beraman: \"Siz muhandisdan intervyu oling\", \"Siz ishlab chiqarish hajmini hisoblang\". Amaliy mas'uliyat passivlikni yo'qotadi.",
              keys: ["kichik vazifa (intervyu/hisoblash)", "amaliy mas'uliyat"]
            },
            {
              q: "77. Kasb tanlash videolari o'quvchilarni qiziqtirmadi?",
              a: "Passiv tomosha zerikarli. Formatni \"interaktiv kino-tahlil\"ga aylantiraman: videoni muhim joyida to'xtatib savol beraman (\"Siz bo'lsangiz qanday qaror qabul qilardingiz?\"). Videodan keyin kasb bo'yicha kichik amaliy o'yin (simulyatsiya) o'tkazaman. Ishtirok bor joyda qiziqish uyg'onadi.",
              keys: ["interaktiv kino-tahlil", "videoni to'xtatib savol", "simulyatsiya", "ishtirok = qiziqish"]
            },
            {
              q: "78. Festival kerak, lekin mablag' ham, homiy ham yo'q?",
              a: "Mablag' yo'qligi to'siq emas: maktab zali va o'quvchilarning o'z liboslaridan foydalanaman; o'quvchi va ota-onalarni jalb qilaman; sahna bezagini o'quvchilar tayyorlaydi; ijtimoiy tarmoqda yoritib, kelajakda homiy jalb qilaman. Festival qiymati pulda emas, g'oyada.",
              keys: ["mavjud imkoniyat", "ota-ona/o'quvchi jalb", "sahnani o'zlari", "qiymat g'oyada"]
            },
            {
              q: "79. \"Raqamli avlod qizlari\" klubida o'quvchilar kamayib ketdi?",
              a: "Demak nazariya ko'paygan, zerikarli bo'lgan. Formatni o'zgartiraman: o'yinlashtirish (gamifikatsiya), qizlarga o'zlari qiziqqan amaliy chiroyli loyihalar (dizayn, vizuallashtirish) beraman; eng faollarni sovg'a bilan rag'batlantiraman; muvaffaqiyatli ayollar bilan uchrashuv. Klubni qizlar o'zlari kelishni istaydigan maydonga aylantiraman.",
              keys: ["gamifikatsiya", "amaliy chiroyli loyiha", "rag'bat", "muvaffaqiyatli ayollar"]
            },
            {
              q: "80. To'garaklar faqat \"nomiga\" ishlamoqda?",
              a: "Sababni aniqlayman (dastur/rahbar/jadval); mazmunni yangilayman; malakali rahbar tayinlayman; to'garakni tanlov/festivalga yo'naltiraman; oy yakunida quruq hisobot emas, \"o'quvchilarning amaliy tayyor mahsuloti\" ko'rgazmasini talab qilaman.",
              keys: ["sabab", "mazmun yangilash", "amaliy mahsulot ko'rgazmasi"]
            }
          ]
        },
        {
          id: "intizom-keys",
          title: "⚖️ Intizom / axloq + vaqt / resurs keyslari",
          items: [
            {
              q: "81. Sizga korrupsion taklif qilinsa?",
              a: "Mutlaqo murosasizman. \"Korrupsiyaga qarshi kurashish to'g'risida\"gi Qonun va odob-axloq qoidalariga qat'iy rioya qilaman. Taklifni rad etaman va tegishli organlarga xabar beraman. Obro', halollik va o'quvchilar ishonchi har narsadan ustun. Maslahatchi — o'quvchilarga o'rnak.",
              keys: ["murosasiz", "Korrupsiya qonuni", "rad+xabar", "o'quvchilarga o'rnak"]
            },
            {
              q: "82. Sinfda o'g'rilik sodir bo'ldi, ota-ona kelib janjal qilyapti?",
              a: "Vaziyatni tinchlantiraman — ota-onani alohida xonaga, hurmat bilan tinglayman; psixolog bilan ham ayblanayotgan bola, ham boshqa o'quvchilar ruhiyatini himoya qilaman; masalani oshkora ayblovsiz, xolis o'rganaman (guvohsiz hech kimni aybdor qilmayman); ma'muriyat bilan adolatli yechim; halollik mavzusida tarbiyaviy sinf soati. Maqsad — bolalar psixikasini asrash.",
              keys: ["tinchlantirish", "psixolog+ruhiyat himoyasi", "guvohsiz aybdor qilmaslik", "tarbiyaviy soat"]
            },
            {
              q: "83. Prezident maktabi o'quvchilari past natija ko'rsatdi?",
              a: "Psixolog bilan sababini aniqlayman; individual reja; fan o'qituvchisi + MOCK; ota-ona bilan ish; yangi maqsad va rag'bat. Iqtidorni yo'qotmaslik — mening mas'uliyatim.",
              keys: ["sabab", "individual reja", "fan o'qituvchisi+MOCK", "rag'bat"]
            },
            {
              q: "84. Bir vaqtda bir nechta topshiriq berilsa, ustuvorlikni qanday belgilaysiz?",
              a: "Topshiriqlarni muhimligi va muddati bo'yicha tartiblayman — \"Eyzenxauer matritsasi\" yordamida \"muhim va shoshilinch\"larini birinchi bajaraman. Kun/hafta rejasini tuzaman; diqqatni jamlash uchun \"Pomodoro texnikasi\"dan foydalanaman. Aniq reja — vahimaning dushmani.",
              keys: ["Eyzenxauer matritsasi", "Pomodoro", "aniq reja — vahimaning dushmani"]
            },
            {
              q: "85. Ish uchun resurs yoki sharoit yetishmasa?",
              a: "Hal qilinadigan vazifa deb qabul qilaman: Nizomdagi huquqim asosida maktabdan sharoit talab qilaman; hududiy \"Kelajak\" markazi xulosasi bilan grant loyihalarda ishtirok etaman; homiy va hamkorlarni jalb qilaman; mavjud imkoniyatdan maksimal foydalanaman. \"Sharoit yo'q\" deb qo'l qovushtirmayman.",
              keys: ["Nizom huquqi", "grant loyiha", "homiy", "qo'l qovushtirmayman"]
            },
            {
              q: "86. Ijtimoiy himoyaga muhtoj oila farzandiga yo'l xaritasi.",
              a: "Ro'yxat (Ijtimoiy reyestr) → imtiyozlar haqida ma'lumot → qobiliyatini aniqlab bepul to'garak/klubga jalb → kasb-hunarga yo'naltirish → iqtidorli bo'lsa grant asosida oliygohga → maktab/homiy yordamida o'quv vositalari, mahalla hamkorligi. Maqsad — moddiy qiyinchilik iqtidorga to'sqinlik qilmasligi.",
              keys: ["ro'yxat → imtiyoz → bepul klub → kasb-hunar → grant → homiy/mahalla"]
            }
          ]
        }
      ]
    },

    // ============ UMUMIY TAKROR + BILETLAR ============
    {
      id: "takror",
      label: "Takror & Biletlar",
      icon: "🏁",
      heading: "Umumiy takror va sinov suhbati biletlari",
      groups: [
        {
          id: "mezonlar",
          title: "Umumiy takror — barcha 6 mezon",
          items: [
            { q: "1️⃣ Kasblar", a: "\"Kasb emas, kompetensiya\" · 10 istiqbolli kasb · hard/soft skill · 4C.", keys: ["4C", "hard/soft skill"] },
            { q: "2️⃣ Akademik", a: "\"Xohlayman-Qila olaman-Kerak\" · OTM yo'l xaritasi · MOCK · FLEX/DAAD.", keys: ["formula", "MOCK", "FLEX/DAAD"] },
            { q: "3️⃣ Klublar", a: "7 klub · Turon (3 shart) · Raqamli qizlar (75 ball) · Iqtidor (40 ball).", keys: ["7 klub", "75 ball", "40 ball"] },
            { q: "4️⃣ Istiqbol", a: "Flagman javob · birinchi yil rejasi · 5 yo'nalish · \"nega aynan siz\".", keys: ["flagman", "5 yo'nalish"] },
            { q: "5️⃣ Keyslar", a: "Universal algoritm (5 qadam): ayblamayman → sabab → dalil → hamkorlik → bola manfaati.", keys: ["5 qadam algoritm"] },
            { q: "6️⃣ Tarbiya", a: "\"Muhit-namuna-amaliy harakat\" · 8 jadid · Do'stlik festivali.", keys: ["muhit-namuna", "8 jadid"] },
            { q: "Asosiy raqamlar", a: "PQ-277 (08.09.2025) · 776-son (10.12.2025) · 6–18 yosh · stavka 0,5/1,0 · +30% ustama · STEAM.", keys: ["PQ-277", "776-son", "STEAM"] }
          ]
        },
        {
          id: "5-mezon-yakun",
          title: "5-mezon yakuni — eng muhim 5 ibora",
          items: [
            { q: "Eng muhim 5 ibora (keyslar uchun)", a: "1. \"Men hech kimni ayblamayman\"\n2. \"Sababini aniqlayman\"\n3. \"Dalilga (test/portfolio) tayanaman\"\n4. \"Bola manfaati va psixikasi birinchi\"\n5. \"Sharoit yo'q deb qo'l qovushtirmayman\"", keys: ["5 ibora"] }
          ]
        },
        {
          id: "biletlar",
          title: "🎤 Sinov suhbati — biletlar (baland ovozda, 2–3 daqiqa)",
          items: [
            { q: "🎫 Bilet 1", a: "1. 10–15 yil ichida yo'qolib ketadigan kasblar. (1-mezon)\n2. Davlat tiliga hurmatni maktabda qanday amalga oshirasiz? (6-mezon)\n3. \"Raqamli avlod qizlari\" klubini bosqichma-bosqich tashkil qiling. (3-mezon)\n4. Ota-ona qarshi: qiz grant yutdi. Qanday ko'ndirasiz? (5-mezon)\n5. Maslahatchi kim? Istiqbol rejangiz? (4-mezon)", keys: ["bilet 1"] },
            { q: "🎫 Bilet 2", a: "1. IT tufayli yuzaga kelgan istiqbolli kasblar. (1-mezon)\n2. Vatanparvarlik ruhini qanday tarbiyalaysiz? (6-mezon)\n3. \"Turon teatr\" tanlovi necha shartdan iborat? (3-mezon)\n4. O'quvchi o'qishni ham, kasbni ham xohlamayapti. Nima qilasiz? (5-mezon)\n5. Nega aynan sizni tanlashimiz kerak? (4-mezon)", keys: ["bilet 2"] },
            { q: "🎫 Bilet 3", a: "1. Soft skills nima va qaysi kasbda muhim? (1-mezon)\n2. Bag'rikenglikni qanday shakllantirasiz? (6-mezon)\n3. Bitiruvchilarni OTMga tayyorlash yo'l xaritasi. (2-mezon)\n4. Sizga korrupsion taklif qilinsa? (5-mezon)\n5. Birinchi yilda nimaga erishmoqchisiz? (4-mezon)", keys: ["bilet 3"] }
          ]
        },
        {
          id: "oxirgi-eslatma",
          title: "✓ Suhbat kuni — oxirgi eslatma",
          items: [
            { q: "Oxirgi eslatmalar", a: "• Kechasi yangi narsa o'rganmang — faqat flagman javobni o'qing va yaxshi uxlang.\n• Sekin, ishonchli, tabassum bilan gapiring (suhbat videoga olinadi).\n• Hujjat nomini ayting: \"PQ-277 ga ko'ra...\", \"Nizomga ko'ra...\".\n• IT ustunligingizni eslating — bu sizning eng kuchli kozingiz.\n• Har javobni \"bola manfaati birinchi\" bilan yakunlang.\n• MOCK savolida ikkilanmang: \"deyarli barcha fanlarda\".", keys: ["flagman", "IT ustunlik", "bola manfaati"] }
          ]
        }
      ]
    }
  ]
};

if (typeof module !== "undefined") { module.exports = APP_DATA; }
