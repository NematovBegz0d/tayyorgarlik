// Maktab Maslahatchisi — Suhbatga Tayyorgarlik
// Barcha savol-javoblar bo'limlarga ajratilgan holda

const STUDY_DATA = [
  {
    id: "kirish",
    title: "Kirish — Flagman javob & IT ustunlik",
    icon: "🚀",
    intro: "Eng muhim javoblar. Suhbat boshida shu javoblarni mukammal aytsangiz, kuchli taassurot qoldirasiz.",
    items: [
      {
        q: "FLAGMAN JAVOB: Maktab maslahatchisi kim? Istiqbolli rejangiz?",
        a: "Hurmatli komissiya a'zolari! Maktab maslahatchisi — Prezidentimizning 2025-yil 8-sentabrdagi PQ-277-son hamda Vazirlar Mahkamasining 2025-yil 10-dekabrdagi 776-son qarorlari asosida joriy etilgan, \"Kelajak\" markazining umumiy o'rta ta'lim maktabidagi vertikal tuzilmasidir.\n\nMen oddiy maslahatchi emas — o'quvchining shaxsiy qiziqishi, qobiliyati va mehnat bozori talabi o'rtasida to'g'ri ko'prik quruvchi, uning kelajak karyera strategiyasini rejalashtiruvchi mutaxassisman.\n\nIstiqbol rejam:\n• 7-11-sinf o'quvchilarining raqamli kasbiy xaritasini yarataman;\n• \"Mening kelajakdagi kasbim\" dasturi asosida psixolog bilan kasbga yo'naltiraman;\n• 7 ta klubni, ayniqsa \"Raqamli avlod qizlari\"ni shaxsan tashkil etaman;\n• \"Ishga marhamat\" Monomarkaz va IT-Park bilan hamkorlik o'rnataman;\n• Har bir bitiruvchining shaxsiy portfoliosini yarataman.\n\nPirovard maqsadim — har bir o'quvchining iqtidorini ro'yobga chiqarib, uni kelajak mehnat bozoriga tayyorlash va bitiruvchilar bandligini eng yuqori darajaga yetkazishdir.",
        keys: ["PQ-277, 776", "ko'prik", "raqamli kasbiy xarita", "Mening kelajakdagi kasbim", "7 klub", "Monomarkaz/IT-Park", "portfolio"]
      },
      {
        q: "IT USTUNLIK JUMLASI (har javobda eslating)",
        a: "Men TATU — Toshkent axborot texnologiyalari universiteti bitiruvchisiman, dasturlash va kiberxavfsizlik mutaxassisiman. Shuning uchun o'quvchilarni zamonaviy kasblarga nafaqat yo'naltira olaman, balki ularga real ko'nikma — dasturlash, kiberxavfsizlik va sun'iy intellekt asoslarini bevosita o'rgata olaman. Bu mening eng katta ustunligim.",
        keys: ["TATU", "dasturlash", "kiberxavfsizlik", "real ko'nikma o'rgataman"]
      },
      {
        q: "FLAGMAN JAVOB (to'liq variant): Maktab maslahatchisi kim? Istiqbolli rejangiz?",
        a: "Hurmatli komissiya a'zolari! Maktab maslahatchisi — bu O'zbekiston Respublikasi Prezidentining 2025-yil 8-sentabrdagi PQ-277-son hamda Vazirlar Mahkamasining 2025-yil 10-dekabrdagi 776-son qarorlari asosida joriy etilgan, \"Kelajak\" markazining umumiy o'rta ta'lim maktabidagi vertikal tuzilmasidir.\n\nMen shunchaki maslahat beruvchi emasman — men o'quvchi, ota-ona, maktab va \"Kelajak\" markazi o'rtasida ko'prik vazifasini bajaruvchi yo'naltiruvchi, ruhiy ko'makchi va tashabbuslarni qo'llab-quvvatlovchi shaxsman.\n\nMening asosiy maqsadim — har bir o'quvchining iqtidorini ro'yobga chiqarish va uni faqat bugungi imtihonga emas, balki kelajak mehnat bozoriga tayyorlashdir.\n\nIstiqbolli rejam uch yo'nalishdan iborat:\n1. \"Prezident iqtidorli farzandlari\" milliy dasturini keng targ'ib qilib, tarmoq to'garaklari va \"O'quvchilar kengashi\" faoliyatini tizimli yo'lga qo'yaman.\n2. \"Mening kelajakdagi kasbim\" dasturi asosida 7-9-sinf o'quvchilarining kasbiy qiziqishini maktab psixologi bilan birgalikda aniqlab, har bir o'quvchi uchun shaxsiy kasbga yo'naltirish tavsiyasini ishlab chiqaman va uni ota-ona bilan muhokama qilaman.\n3. \"Turon teatr\", \"Jadidlar izidan\", \"Debat\" va \"Raqamli avlod qizlari\" kabi klublar orqali o'quvchilarda yetakchilik, vatanparvarlik va ijodkorlikni shakllantiraman.\n\nPirovard maqsadim — har bir o'quvchi o'z salohiyatini anglab, ongli qaror qabul qila oladigan, Vatanga sadoqatli barkamol shaxs bo'lib yetishishidir.",
        keys: ["PQ-277, 776", "vertikal tuzilma", "ko'prik", "3 yo'nalish", "Prezident iqtidorli farzandlari", "Mening kelajakdagi kasbim", "klublar", "barkamol shaxs"]
      },
      {
        q: "💡 Suhbatda omadli bo'lish uchun maslahatlar",
        a: "• Hujjat nomi va raqamini ayting — PQ-277, 776-son deb aniq aytsangiz, komissiyada kuchli taassurot qoldirasiz.\n• Ishonchli va xotirjam gapiring — har savolga avval qisqa ta'rif, so'ng misol bilan javob bering.\n• \"Men tashkil etaman, men yo'lga qo'yaman\" kabi faol fe'l ishlating — bu sizning tashabbuskorligingizni ko'rsatadi.\n• Har javobni amaliyot bilan bog'lang — faqat nazariya emas, \"men buni shunday qilaman\" deb ayting.\n• Tabassum bilan, sekin va ravon gapiring (suhbat ko'pincha videoga olinadi).\n• Har javobni \"bola manfaati birinchi\" g'oyasi bilan yakunlang.",
        keys: ["hujjat raqami", "qisqa ta'rif + misol", "faol fe'l", "amaliyot bilan bog'lash", "tabassum", "bola manfaati"]
      }
    ]
  },

  {
    id: "shablonlar",
    title: "Shablon javoblar — har yo'nalish uchun mukammal namuna",
    icon: "⭐",
    intro: "Har bir yo'nalish (mezon) uchun flagman darajadagi tayyor shablon. Tuzilishi: TA'RIF → AMALIYOT (bosqichlar) → IT USTUNLIK → BOLA MANFAATI bilan yakun.",
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
        a: "Maktab maslahatchisi — Prezidentimizning 2025-yil 8-sentabrdagi PQ-277-son hamda Vazirlar Mahkamasining 2025-yil 10-dekabrdagi 776-son qarorlari asosida joriy etilgan, \"Kelajak\" markazining maktabdagi vertikal tuzilmasidir. Men o'quvchi, ota-ona, maktab va markaz o'rtasida ko'prik vazifasini bajaraman.\n\nIstiqbolli rejam aniq:\n• 1-oyda o'quvchilar ma'lumotlar bazasini tuzaman va so'rovnoma orqali qiziqishni aniqlayman;\n• 1-chorakda 3–4 klubni ishga tushirib, \"O'quvchilar kengashi\" saylovini o'tkazaman;\n• 2-chorakda 7–9-sinflarda kasbga yo'naltirish va iqtidorlilar uchun MOCK imtihonlarni boshlayman;\n• Yil yakunida kamida bitta yirik festival o'tkazib, qo'shimcha ta'limga jalbni oshiraman.\n\n3–5 yil ichida menejerlik sertifikatini olib, maktabni tumandagi eng kuchli raqamli ta'lim markaziga aylantirishni maqsad qilaman.\n\nNega aynan men? Chunki TATU bitiruvchisiman — dasturlash va kiberxavfsizlikni bilaman; Nizomni puxta bilaman; va men buni lavozim emas, missiya deb bilaman.\n\nPirovard maqsadim — har bir o'quvchini bugungi imtihonga emas, kelajak mehnat bozoriga tayyorlash.",
        keys: ["PQ-277, 776", "ko'prik", "1-oy/1-chorak/yil yakuni", "raqamli ta'lim markazi", "lavozim emas, missiya"]
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
  },

  {
    id: "kasblar",
    title: "1-mezon: Kasblar va mehnat bozori",
    icon: "💼",
    intro: "Kelajak kasblari, IT, soft skills va mehnat bozori tendensiyalari (savol 1-21).",
    items: [
      {
        q: "1. Kelasi 10 yilda mehnat bozorida talab yuqori bo'ladigan 10 ta kasb",
        a: "Global raqamlashtirish va \"yashil iqtisodiyot\" tufayli quyidagi 10 kasbga talab eng yuqori bo'ladi:\n1) Sun'iy intellekt va katta ma'lumotlar muhandisi (AI & Data Scientist);\n2) Kiberxavfsizlik mutaxassisi;\n3) Muqobil energiya (quyosh, shamol) muhandisi;\n4) Agrotexnolog (aqlli qishloq xo'jaligi);\n5) Biotexnolog;\n6) Raqamli marketolog/targetolog;\n7) Robototexnik va dron operatori;\n8) E-commerce menejeri;\n9) Gerontolog va reabilitolog;\n10) Ruhiy salomatlik kouchi.\nMen, ayniqsa AI va kiberxavfsizlikni o'z tajribam bilan o'rgata olaman.",
        keys: ["AI", "kiberxavfsizlik", "yashil energiya", "agrotexnolog", "biotexnolog", "targetolog", "robototexnik", "e-commerce", "gerontolog", "kouch"]
      },
      {
        q: "2. 10-15 yil ichida yo'qolib ketadigan kasblar",
        a: "Tarixga nazar solsak, har bir davr o'z kasblarini olib kelgan va o'z kasblarini olib ketgan. Bugun ham shunday davr — sun'iy intellekt davri keldi.\nEng avval bir xil, takrorlanuvchi ishni bajaradigan kasblar — kassir, oddiy operator, ma'lumot kirituvchi, call-markaz xodimi — sekin-asta yo'qoladi. Sababi shuki, bu ishlarda inson aql emas, ko'proq mexanik harakat ishlatadi. Mexanik ishni esa mashina insondan yaxshiroq bajaradi.\nLekin men buni yo'qotish emas, almashinish deb ko'raman. Telefon stansiyalaridagi ulag'uvchilar yo'qolgani bilan aloqa sohasi yo'qolmadi — aksincha kengaydi. Demak, ish o'rni emas, ishning shakli o'zgaradi.\nMaslahatchi sifatida men o'quvchini bu o'zgarishdan qo'rqitmasdan, unga tayyorlayman. Bolaga shuni anglatamanki, eng ishonchli himoya — bu doimo o'rgana oladigan, o'zgarishga tayyor inson bo'lish. Chunki kelajakda eng band kasb — bu o'rganishdan to'xtamaslik.",
        keys: ["kassir", "operator", "call-markaz", "mexanik harakat", "almashinish", "ish shakli o'zgaradi", "o'rganishdan to'xtamaslik"]
      },
      {
        q: "3. Avtomatlashtirish va robotlashtirish orqali yo'qoladigan kasblar (sabablari bilan)",
        a: "Avtomatlashtirish — sanoat tarixidagi eng katta o'zgarishlardan biri. U insonni og'ir, zerikarli va xavfli ishlardan ozod qilmoqda.\nKonveyer ishchisi, omborxonadagi yuk taqsimlovchi, arxiv xodimi — bu kasblar o'rnini bugun robotlar va aqlli tizimlar egallamoqda. Sabab tushunarli: robot to'xtamaydi, charchamaydi, bir xil aniqlik bilan ishlayveradi.\nAmmo bu yerda eng nozik haqiqat shundaki, robot insonning mehnatini yengillashtiradi, lekin ma'nosini almashtira olmaydi. Mashina ishlay oladi, lekin nima uchun ishlash kerakligini hal qilolmaydi. Tasavvur, mehr, mas'uliyat — bular faqat insonga xos.\nTATU bitiruvchisi sifatida men texnologiyani ichidan bilaman va shuni aniq aytamanki, avtomatlashtirish insonni ishsiz qilmaydi — uni ortiqcha mehnatdan ozod qilib, fikrlashga vaqt beradi. Shuning uchun o'quvchilarimni mashina bilan raqobatga emas, mashina bilan hamkorlikka tayyorlayman. Kelajak — insonga qarshi mashina emas, balki inson va mashina birga ishlaydigan dunyo.",
        keys: ["konveyer", "omborxona", "arxiv", "robot to'xtamaydi", "ma'nosini almashtira olmaydi", "mashina bilan hamkorlik", "inson va mashina birga"]
      },
      {
        q: "4. IT tufayli yuzaga kelgan 4 ta istiqbolli kasb",
        a: "Bu savolga men alohida ishtiyoq bilan javob beraman, chunki men TATU bitiruvchisiman va bu olamning bir qismiman.\nAxborot texnologiyalari shunchaki yangi kasblar yaratgani yo'q — u butun bir yangi dunyo yaratdi. To'rtta yorqin misol keltiraman.\nSun'iy intellekt mutaxassisi — bugun mashinaga \"o'ylashni\" o'rgatadigan inson. Data analitik — raqamlar ichidan ma'no topadigan, ko'rinmas haqiqatni ko'rsatadigan inson. Kiberxavfsizlik mutaxassisi — bu mening sohamiz; raqamli dunyoning posboni, ma'lumotni o'g'ridan himoya qiladigan inson. Va raqamli marketolog — an'anaviy bozorni internet maydoniga olib chiqqan inson.\nE'tibor bering — bu kasblarning hammasi yangi, lekin har birining markazida baribir inson tafakkuri turadi.\nMenimcha mening eng katta ustunligim shundaki, men bu kasblar haqida faqat gapirib qolmayman. Maktabda IT to'garagi tashkil etib, o'quvchilarga dasturlash va sun'iy intellekt asoslarini bevosita o'rgatib, ularni shu olamga o'z qo'lim bilan yetaklab kira olaman.",
        keys: ["AI mutaxassisi", "data analitik", "kiberxavfsizlik", "raqamli marketolog", "inson tafakkuri", "IT to'garagi", "bevosita o'rgataman"]
      },
      {
        q: "5. Raqamli iqtisodiyotdagi istiqbolli kasblar",
        a: "Bugun iqtisodiyot zavod va dalalardan ham ko'ra ko'proq ekran ortida shakllanmoqda. Raqamli iqtisodiyot — yangi davr boyligining manbai.\nBu sohadagi eng istiqbolli kasblar — dasturchi, sun'iy intellekt mutaxassisi, data analitik, kiberxavfsizlik mutaxassisi, UX dizayner va elektron tijorat menejeri. Bularning o'ziga xosligi shundaki, inson endi boylik yaratish uchun bir joyga bog'lanib qolmaydi — u Toshkentda o'tirib, butun dunyo uchun ishlay oladi.\nQuvnoarli tomoni — O'zbekiston bu yo'nalishda ortda qolayotgani yo'q. IT-Park, \"Bir million dasturchi\" loyihasi yoshlarimiz oldida keng eshik ochmoqda. Davlatning o'zi bu kasblarni qo'llab-quvvatlayotgani — yoshlar uchun katta imkoniyat.\nMen TATU bitiruvchisi sifatida bu olamning ichidan turib o'quvchilarni yo'naltira olaman. Eng asosiy maqsadim esa bitta — o'quvchi texnologiyani faqat iste'mol qiladigan emas, balki uni o'zi yaratadigan insonga aylansin.",
        keys: ["dasturchi", "AI", "data analitik", "kiberxavfsizlik", "UX dizayner", "IT-Park", "Bir million dasturchi", "yaratuvchi inson"]
      },
      {
        q: "6. Muhandislik va ishlab chiqarish sohasidagi istiqbolli kasblar",
        a: "Har bir kuchli davlatning poydevorida muhandis turadi. Chunki g'oyani haqiqatga, chizmani binoga, fikrni mahsulotga aynan muhandis aylantiradi.\nIstiqbolli kasblar — robototexnika va mexatronika muhandisi, muqobil energiya mutaxassisi, avtomatlashtirish va qurilish muhandisi. Sanoat o'sgani sari bularga talab tobora kuchayadi.\nDavlat iqtisodiyotiga foydasini bir jumla bilan aytaman: muhandis bir vaqtning o'zida ish o'rni ham yaratadi, daromad ham keltiradi, kelajak ham quradi. U yaratgan yo'l, ko'prik va texnologiya butun jamiyatga xizmat qiladi. Buni tarix tasdiqlaydi — Germaniya, Yaponiya, Janubiy Koreya kabi davlatlar yer osti boyligi bilan emas, aynan muhandislik aqli bilan boyidi.\nShuning uchun maslahatchi sifatida men o'quvchilarni STEAM yo'nalishiga, loyihalash va robototexnika to'garaklariga jalb qilaman. Chunki bugun bolaning qo'liga asbob va chizmani tutqazsam, ertaga u mamlakatga zavod quradi.",
        keys: ["robototexnika", "mexatronika", "muqobil energiya", "STEAM", "Germaniya/Yaponiya/Koreya", "ish o'rni+daromad+kelajak", "bugun asbob — ertaga zavod"]
      },
      {
        q: "7. Texnika va muhandislik sohasining davlat iqtisodiyotiga foydasi",
        a: "Bugungi eng talabgir kasblar — IT va dasturlash, sun'iy intellekt, kiberxavfsizlik, shifokor-jarroh, muhandis va moliya tahlilchisi. Bu kasblar daromad ham, jamiyatga foyda ham keltiradi.\nLekin men o'quvchilarga doimo bir haqiqatni eslataman: maosh — kasbning mevasi, ildizi emas. Faqat pulni ko'zlab kasb tanlagan inson go'yo notanish manzilga shoshilib chiqqan yo'lovchiga o'xshaydi — yetib borgach, \"men aslida bu yerni xohlamagan ekanman\" deydi.\nShuning uchun men kasbga yo'naltirishda doimo uch savolni birga qo'yaman: o'quvchi nimani sevadi, nimaga qodir va jamiyatga nima kerak. Aynan shu uchovi uchrashgan joyda haqiqiy kasb tug'iladi — bunda inson ham rohat topadi, ham rizq.\nMening ishonchim shuki, o'z o'rnini topgan inson hech qachon \"ishga boraman\" demaydi — u har kuni o'zi sevgan ishga oshiqadi. Daromad esa bunday insonni hech qachon tark etmaydi.",
        keys: ["IT, AI, kiberxavfsizlik, muhandis", "maosh — meva, ildiz emas", "sevadi+qodir+kerak", "uch savol", "o'z o'rnini topgan inson"]
      },
      {
        q: "8. Yuqori talabdagi kasblar va jamiyat taraqqiyotidagi o'rni (faktlar bilan)",
        a: "Bugungi eng talabgir kasblar — IT va dasturlash, sun'iy intellekt, kiberxavfsizlik, shifokor-jarroh, muhandis va moliya tahlilchisi. Bu kasblar daromad ham, jamiyatga foyda ham keltiradi.\nLekin men o'quvchilarga doimo bir haqiqatni eslataman: maosh — kasbning mevasi, ildizi emas. Faqat pulni ko'zlab kasb tanlagan inson go'yo notanish manzilga shoshilib chiqqan yo'lovchiga o'xshaydi.\nShuning uchun men kasbga yo'naltirishda doimo uch savolni birga qo'yaman: o'quvchi nimani sevadi, nimaga qodir va jamiyatga nima kerak. Aynan shu uchovi uchrashgan joyda haqiqiy kasb tug'iladi.",
        keys: ["IT, AI, kiberxavfsizlik, muhandis, shifokor", "maosh — meva, ildiz emas", "sevadi+qodir+kerak"]
      },
      {
        q: "9. Masofaviy (onlayn) ishlasa bo'ladigan kasblar",
        a: "Internet insoniyat tarixida birinchi marta mehnatni joydan ozod qildi. Endi inson qayerda yashashidan qat'i nazar, butun dunyo uchun ishlay oladi.\nMasofaviy ishlasa bo'ladigan kasblar — dasturchi, veb va grafik dizayner, kontent yaratuvchi, SMM mutaxassisi, onlayn o'qituvchi, tarjimon, video-montajchi va data analitik. Bularning umumiy xususiyati shuki, ish natijasi qo'l kuchida emas, bilim va ijodda o'lchanadi.\nBu ayniqsa bizning sharoitimiz uchun katta imkoniyat. Uzoq tumanda yashayotgan qobiliyatli yosh ham endi shahar markazidagi tengdoshi bilan teng sharoitda mehnat qila oladi. Masofa endi to'siq emas.\nMaslahatchi sifatida men o'quvchilarga shuni uqtiraman: internet — vaqt o'tkazadigan o'yingoh emas, balki butun dunyoga ochilgan ish stoli bo'lishi mumkin.",
        keys: ["dasturchi", "dizayner", "SMM", "tarjimon", "joydan turib dunyoga", "masofa — to'siq emas", "internet — ish stoli"]
      },
      {
        q: "10. Qaysi kasblarga ijodiy yondashuv kerak? (faktlar bilan)",
        a: "Sun'iy intellekt davrida bir savol tobora muhim bo'lmoqda: mashina inson o'rnini bosa olmaydigan narsa nima? Javob — ijod.\nIjodiy yondashuv talab qiladigan kasblar ko'p: dizayner, arxitektor, reklama va marketing mutaxassisi, kontent yaratuvchi, san'atkor, jurnalist, hatto muhandis va dasturchi ham. Bu kasblarda tayyor shablon yetarli emas — har safar yangi g'oya, yangi yechim kerak.\nMashina mavjud ma'lumotni qayta ishlaydi, lekin yo'qdan yangilik yarata olmaydi. Aynan shu nuqtada inson mashinadan ustun turadi — ijod insonning eng qudratli qurolidir.\nShuning uchun men o'quvchilarda ijodiy tafakkurni erta uyg'otishni muhim deb bilaman. Turon teatr klubi orqali sahna va badiiy didni, Iqtidor ansambli orqali musiqiy ijodni, Debat klubi orqali esa mustaqil va noodatiy fikrlashni rivojlantiraman.",
        keys: ["dizayner/arxitektor/marketing/kontent", "mashina — takrorlaydi, inson — yaratadi", "Turon teatr/Iqtidor ansambli/Debat", "ijod — insonning qudratli quroli"]
      },
      {
        q: "11. Zamonaviy texnologiyalar davrida kasblarning afzalligi (faktlar bilan)",
        a: "Masofaviy ishlash; yuqori daromad (IT/AI); global imkoniyat; og'ir mehnatning yengillashishi. Fakt: jahonda eng tez o'sayotgan sohalar — IT, AI, raqamli iqtisodiyot; O'zbekistonda IT-Park eksporti milliard dollarlarga yetdi.",
        keys: ["masofaviy", "yuqori daromad", "global", "IT-Park — milliard dollar"]
      },
      {
        q: "12. Soft skills nima va qaysi kasbda muhim?",
        a: "Har bir insonda ikki xil ko'nikma bo'ladi. Biri — hard skills, ya'ni \"nimani qila olishing\": dasturlash, hisob-kitob, til bilish. Ikkinchisi — soft skills, ya'ni \"qanday qila olishing\": muloqot, jamoada ishlash, sabr, mas'uliyat, liderlik.\nOddiy qilib aytsam: hard skills sizni ishga oladi, soft skills sizni ishda olib qoladi va yuqoriga ko'taradi.\nSoft skills qaysi kasbda muhim? Deyarli barchasida, ayniqsa inson bilan ishlaydigan sohalarda — o'qituvchi, shifokor, psixolog, menejer, rahbar. Bugun ko'plab ish beruvchilar diplomdan ham ko'ra nomzodning muloqot madaniyati va jamoaga moslashuviga e'tibor qaratadi.\nEng qiziq tomoni shuki, soft skills aynan mashina taqlid qila olmaydigan, sof insoniy fazilatlardir. Men bu ko'nikmalarni darslikdan emas, amaliyotdan beraman: Debat klubi notiqlik, O'quvchilar kengashi liderlik, jamoaviy loyihalar hamkorlik ko'nikmasini shakllantiradi.",
        keys: ["hard — nima, soft — qanday", "ishga oladi / ishda o'stiradi", "mashina taqlid qilolmaydi", "Debat/Kengash/jamoaviy loyiha"]
      },
      {
        q: "13. Hayot davomida ta'lim (lifelong learning), MOOC, qayta tayyorlov",
        a: "Bir paytlar inson bir marta o'qib, bir kasb egallab, butun umr shu bilan yashardi. Bugun bu davr tugadi. Bilim juda tez yangilanmoqda — kecha o'rgangan narsa bugun eskirishi mumkin.\nShuning uchun umrbod ta'lim — lifelong learning — zamonamizning asosiy talabiga aylandi. Bu shuni anglatadiki, o'rganish maktab yoki universitet bilan tugamaydi, balki butun umr davom etadi.\nBu yo'lda yangi imkoniyat — MOOC, ya'ni ommaviy ochiq onlayn kurslar (Coursera, edX kabi platformalar). Ular orqali inson uyida o'tirib, dunyoning eng nufuzli universitetlari darslarini, ko'pincha bepul o'rganishi mumkin. Qayta tayyorlov ham shu falsafaning bir qismi: bir kasb yo'qolsa, inson yangisini o'rganib, mehnat bozoriga qaytadi.\nMaslahatchi sifatida men o'quvchilarga eng muhim ko'nikmani — o'rganishni o'rganishni singdiraman. Chunki men ularga bitta tayyor bilim bersam, bu vaqtincha yordam beradi. Lekin mustaqil o'rganishni o'rgatsam, bu butun umrga yetadi.",
        keys: ["lifelong learning", "MOOC: Coursera/edX", "bepul onlayn kurslar", "qayta tayyorlov", "o'rganishni o'rganish"]
      },
      {
        q: "14. Yo'qolmaydigan (uzoq muddatli) kasblar — afzallik va kamchilik",
        a: "Texnologiya qanchalik rivojlanmasin, ba'zi kasblar abadiy qoladi — chunki ular insonning eng asosiy ehtiyojlariga xizmat qiladi.\nBunday kasblar — shifokor, o'qituvchi, muhandis, oshpaz, qishloq xo'jaligi mutaxassisi. Inson har doim sog'liqqa, bilimga, oziq-ovqatga muhtoj bo'ladi. Shuning uchun bu kasblar hech qachon talabdan qolmaydi.\nAfzalligi — barqarorlik va ishonch. Bu kasbni egallagan inson kelajagidan xotirjam bo'ladi. Yana bir afzalligi — bu kasblar jamiyatda yuksak hurmatga sazovor.\nKamchiligi shundaki, ular uzoq va puxta tayyorgarlik talab qiladi. Bundan tashqari, bu kasb egasi doimo bilimini yangilab borishi shart — masalan, bugungi shifokor ham, o'qituvchi ham raqamli vositalarni bilishi kerak.\nMaslahatchi sifatida men o'quvchiga shuni tushuntiraman: barqaror kasb — bu rivojlanishdan to'xtash degani emas. Hatto eng qadimiy kasbda ham doimo o'rganib, zamonga hamqadam bo'lgan inson chinakam ustaga aylanadi.",
        keys: ["shifokor/o'qituvchi/muhandis/oshpaz", "barqarorlik va hurmat", "uzoq tayyorgarlik", "bilimini yangilab borish", "barqaror kasb — rivojlanishdan to'xtash emas"]
      },
      {
        q: "15. Eng daromadli kasblar (bugun)",
        a: "IT/dasturchi, AI va data science, kiberxavfsizlik, shifokor-jarroh, moliya tahlilchisi. Lekin o'quvchiga doim aytaman: faqat daromadga emas, qiziqishi va qobiliyatiga mos kasbni tanlasin — sevib qilingan ish eng yuqori natija beradi.",
        keys: ["IT", "AI", "kiberxavfsizlik", "qiziqish + qobiliyat, faqat daromad emas"]
      },
      {
        q: "16. Kelajakda yaratilishi kutilayotgan kasblar",
        a: "Eng qiziq haqiqat shundaki, bugun partada o\u02BBtirgan o\u02BBquvchilarimizning ko\u02BBpchiligi kelajakda hozir nomi ham yo\u02BBq kasblarda ishlaydi.\nTasavvur qilaylik: kosmik sayohatlar uyushtiruvchi, sun\u02BFiy intellekt qarorlarining adolatini nazorat qiluvchi, inson salomatligini gen darajasida tuzatuvchi muhandis, virtual olamlar yaratuvchi dizayner. Yigirma yil avval bu kasblar fantastika edi — bugun esa ostonada turibdi. Sabab oddiy: har bir yangi ixtiro yangi ehtiyoj tu\u02B3diradi, har bir ehtiyoj esa yangi kasbni dunyoga keltiradi.\nEndi eng muhim savol: men hali yo\u02BBq kasbga bolani qanday tayyorlayman? Aniq kasbni emas — moslashuv qobiliyatini beraman. Bolaga bitta baliqni emas, baliq tutishni o\u02BBrgataman.\nTATU bitiruvchisi sifatida texnologiya qanday tez eskirishini o\u02BBz ko\u02BBzim bilan ko\u02BBrganman. Shuning uchun o\u02BBquvchilarimga eng qimmatli ko\u02BBnikmani — o\u02BBzgarishdan qo\u02BBrqmaslik va doimo yangidan o\u02BBrganishni singdiraman. Men bolani bugunning emas, ertaning insoni qilib tarbiyalashga intilaman.",
        keys: ["kosmik turizm", "AI-axloq", "genetik muhandis", "VR", "hali yo'q kasb", "moslashuv qobiliyati", "baliq tutishni o'rgataman"]
      },
      {
        q: "17. An'anaviy/milliy kasblar (afzallik va kamchilik)",
        a: "Milliy hunarmandchilik — kulolchilik, kashtachilik, zardo'zlik, miskarlik — bu shunchaki kasb emas, balki avloddan-avlodga o'tib kelayotgan milliy xotira.\nAfzalliklari salmoqli. Birinchidan, bu kasblar xalqimizning o'zligini, madaniy merosini saqlaydi. Ikkinchidan, ularga doimiy talab bor — ayniqsa turizm rivojlanayotgan bugungi kunda milliy hunar mahsulotlari brendga aylanmoqda. Uchinchidan, hunarmand mustaqil, o'z ishining egasi bo'ladi.\nKamchiliklari ham bor. Bu kasblar ko'proq qo'l mehnatiga asoslanadi va vaqt talab qiladi. Bundan tashqari, zamon bilan yangilanmasa — bozori torayib qolishi mumkin.\nMening qarashim shu: milliy kasbni zamonaviylik bilan birlashtirish kerak. Men o'quvchilarni milliy hunarga Jadidlar izidan klubi orqali — o'zlik va meros ruhida qiziqtiraman, so'ng uni onlayn savdo va raqamli targ'ibot bilan boyitishga o'rgataman. Maqsadim — ildizi milliy, lekin shoxi zamonaviy bo'lgan yosh tarbiyalash.",
        keys: ["kulolchilik/kashtachilik/zardo'zlik", "milliy meros + turizm brend", "mustaqil egasi", "zamonaviylik bilan birlashtirish", "Jadidlar izidan", "ildizi milliy, shoxi zamonaviy"]
      },
      {
        q: "18. Oilaviy/an'anaviy kasbni davom ettirish",
        a: "Afzalligi: tayyor tajriba maktabi, oilaviy ustoz (mentor), tayyor mijozlar bazasi. Kamchiligi: bola majburlik ostida qiziqishidan voz kechishi, salohiyati ochilmay qolishi. Pozitsiyam: agar bolaning qiziqishiga mos kelsa — qo'llab-quvvatlayman, aks holda dalil bilan tushuntiraman. Bola manfaati birinchi.",
        keys: ["mentor", "mijozlar bazasi", "majburlik", "qiziqishiga mos bo'lsa — ha"]
      },
      {
        q: "19. Zamonaviy kasblarga tayyorlaydigan davlat tashkilotlari",
        a: "O'zbekistonda yoshlarni zamonaviy kasblarga tayyorlash davlat siyosatining ustuvor yo'nalishiga aylangan. Buning uchun bir qancha kuchli tashkilot va dasturlar faoliyat yuritadi.\nAvvalo, Ixtisoslashtirilgan ta'lim muassasalari agentligi va biz xizmat qilayotgan \"Kelajak\" markazlari — bevosita iqtidorli yoshlarni aniqlash va yo'naltirish bilan shug'ullanadi. IT-Park yoshlarni axborot texnologiyalari va raqamli kasblarga tayyorlaydi. \"El-yurt umidi\" jamg'armasi iqtidorlilarga xorijda o'qish imkonini beradi. Bundan tashqari Yoshlar ishlari agentligi, \"Ishga marhamat\" monomarkazlari va \"Digital Generation Uzbekistan\" tashkilotlari ham yoshlarni kasb-hunarga yo'naltirishda faol.\nMaslahatchi sifatida mening vazifam — o'quvchi bilan bu imkoniyatlar o'rtasida ko'prik bo'lish. Ko'pincha o'quvchi qobiliyatli bo'ladi-yu, lekin qanday imkoniyatlar borligini bilmaydi. Men shu eshiklarni unga ko'rsataman.",
        keys: ["Kelajak markazlari", "IT-Park", "El-yurt umidi", "Yoshlar ishlari agentligi", "Ishga marhamat monomarkaz", "Digital Generation Uzbekistan", "ko'prik bo'lish"]
      },
      {
        q: "20. Raqobatbardosh kasb egasi qanday bo'ladi (4C)",
        a: "Bugungi mehnat bozorida shunchaki diplomli bo'lish yetarli emas — raqobatbardosh bo'lish kerak. Jahon ta'limida buni \"4C\" deb ataladigan to'rt ko'nikma belgilaydi.\nBirinchisi — Critical thinking, ya'ni tanqidiy fikrlash: ma'lumotni ko'r-ko'rona qabul qilmasdan, tahlil qilib, o'z xulosasini chiqara olish. Ikkinchisi — Creativity, ya'ni ijodkorlik: muammoga yangicha, noodatiy yechim topa olish. Uchinchisi — Communication, ya'ni muloqot: o'z fikrini aniq yetkaza olish va boshqalarni tinglay olish. To'rtinchisi — Collaboration, ya'ni hamkorlik: jamoada, birga ishlay olish.\nBu to'rt ko'nikmaning go'zalligi shundaki, ular har qanday kasbga — shifokorga ham, dasturchiga ham, hunarmandga ham birdek kerak. Va eng muhimi — ularning hech birini mashina almashtira olmaydi.\nMen bu sifatlarni o'quvchilarda klublar tizimi orqali shakllantiraman: Debat tanqidiy fikrlash va muloqotni, Turon teatr ijodkorlik va sahna jasoratini, Eco-schools va jamoaviy loyihalar hamkorlikni o'rgatadi.",
        keys: ["4C: Critical thinking/Creativity/Communication/Collaboration", "har kasbda kerak", "mashina almashtira olmaydi", "Debat/Turon teatr/Eco-schools"]
      },
      {
        q: "21. Nima uchun bir nechta ko'nikma o'rganish kerak? (mini skill)",
        a: "Bu zamonaviy dunyoda \"Slash career\" (ko'p tarmoqli karyera) deyiladi. Bir soha inqirozga uchrasa, ikkinchisi ishsizlikdan qutqaradi. Misol: ingliz tili o'qituvchisi SMM ni ham bilsa, xalqaro loyihalarda kontent-menejer bo'lib daromadini bir necha barobar oshiradi. Shuning uchun o'quvchilarni ko'p qirrali bo'lishga undayman.",
        keys: ["Slash career", "bir soha inqiroz — ikkinchisi qutqaradi", "o'qituvchi+SMM"]
      },
      {
        q: "21a. Kasbga yo'naltirish (ASOSIY JAVOB — 4 bosqich)",
        a: "Kasbga yo'naltirish — bir martalik maslahat emas, balki o'quvchi bilan 7-sinfdan boshlab olib boriladigan tizimli jarayon. Men buni to'rt bosqichda amalga oshiraman: Anglash → Tanishtirish → Yo'naltirish → Kuzatish.\nBirinchi bosqich — Anglash (diagnostika). Psixolog bilan birgalikda har bir o'quvchining qiziqishi, qobiliyati va xarakterini so'rovnoma, test va kuzatuv orqali aniqlayman. Chunki o'quvchi avval o'zini bilmasa, qaysi kasb unga mosligini ham bilolmaydi.\nIkkinchi bosqich — Tanishtirish. Men kasbni o'quvchiga jonli ko'rsataman: kasb egalarini maktabga taklif qilaman, korxonalarga ekskursiya uyushtiraman, \"Kasblar haftaligi\" tashkil etaman. O'quvchi kasbni faqat eshitmasin — ko'rsin, his qilsin.\nUchinchi bosqich — Yo'naltirish. Yig'ilgan ma'lumot asosida har bir o'quvchini o'z yo'liga yo'naltiraman: akademik moyillarni oliy ta'lim va litseyga, amaliy moyillarni kasb-hunar va texnikumga. Bu qarorni o'quvchi va ota-ona bilan birga, dalil asosida qabul qilaman.\nTo'rtinchi bosqich — Kuzatish. Har bir o'quvchining rivojlanishini \"Ijtimoiy portfolio\" orqali kuzatib boraman, kerak bo'lsa rejani moslashtiraman.\nMaqsadim — har bir o'quvchi \"hamma shunday qildi\" deb emas, balki \"bu mening yo'lim\" deb ishonch bilan kasb tanlashi.",
        keys: ["4 bosqich: Anglash → Tanishtirish → Yo'naltirish → Kuzatish", "psixolog+test/so'rovnoma", "kasb egalari/ekskursiya/Kasblar haftaligi", "akademik yoki kasb-hunarga", "Ijtimoiy portfolio", "bu mening yo'lim"]
      },
      {
        q: "21b. Kasb tanlash haftaligini qanday tashkil etasiz?",
        a: "Kasblar haftaligi — o'quvchini kasb olamiga bevosita olib kiradigan eng ta'sirchan tadbir. Men uni puxta reja asosida o'tkazaman.\nAvval haftalik dasturini tuzaman — har bir kun bitta sohaga bag'ishlanadi: bir kun tibbiyot, bir kun muhandislik, bir kun IT, bir kun san'at. Har kuni o'sha soha kasb egasini maktabga taklif qilaman — jonli hikoya kitobdan kuchliroq ta'sir qiladi. Bundan tashqari mahorat darslari, korxonaga ekskursiya va kasbga oid film namoyishini tashkil etaman.\nHaftaning yakuniy kunida o'quvchilar \"Men kim bo'laman?\" loyihasini taqdim etadi — har biri o'zi orzu qilgan kasbni taqdimot yoki sahna ko'rinishida namoyish etadi.\nTadbirdan so'ng o'quvchilar bilan kichik suhbat o'tkazaman: \"Nima yoqdi? Qaysi kasb seni qiziqtirdi?\" So'ng natijani har bir o'quvchining \"Ijtimoiy portfolio\"siga kiritaman.",
        keys: ["har kun — bir soha", "kasb egasi jonli hikoya", "mahorat darsi/ekskursiya/film", "Men kim bo'laman? loyiha", "Ijtimoiy portfolioga kiritish"]
      },
      {
        q: "21c. Kasb tanlashda ota-onalar bilan qanday ishlaysiz?",
        a: "Kasb tanlashda ota-ona — mening eng muhim hamkorim, lekin ba'zan eng katta qiyinchilik ham aynan shu yerdan kelib chiqadi. Shuning uchun men ota-ona bilan tizimli ishlayman.\nAvval ota-onalar yig'ilishini tashkil etaman va ularga bugungi mehnat bozorini, talabgir kasblarni tushuntiraman. Ko'p ota-ona kasb haqida eski tasavvurda bo'ladi — men ularga zamon o'zgarganini dalil bilan ko'rsataman.\nSo'ng eng asosiy g'oyani yetkazaman: kasbni ota-ona xohishi yoki moda emas, bolaning qobiliyati va qiziqishi asosida tanlash kerak. Buning uchun psixologik diagnostika natijalarini har bir ota-ona bilan alohida muhokama qilaman.\nAgar bolaning qiziqishi ota-onaning xohishiga zid bo'lsa, men hech kimni ayblamayman. Test natijalarini dalil sifatida ko'rsataman va psixolog ishtirokida uch tomon — o'quvchi, ota-ona va men — birga kelishuvga erishaman.\nMening tamoyilim oddiy: ota-onaga \"majburlash emas, qo'llab-quvvatlash\" kerakligini tushuntiraman. Chunki sevib tanlangan kasb — umrbod quvonch, majburan tanlangani — umrbod afsus.",
        keys: ["ota-ona — eng muhim hamkor", "bugungi mehnat bozorini tushuntirish", "qobiliyat+qiziqish asosida", "psixolog+uch tomon kelishuv", "majburlash emas, qo'llab-quvvatlash"]
    ]
  },

  {
    id: "akademik",
    title: "2-mezon: Akademik rejalashtirish va oliygohlar",
    icon: "🎓",
    intro: "Kasbga yo'naltirish, OTMga tayyorlash, MOCK imtihon, xorijiy grantlar (savol 22-34). Formula: \"Xohlayman - Qila olaman - Kerak\".",
    items: [
      {
        q: "22. Kasbga yo'naltirish ishini qanday tashkil qilasiz?",
        a: "Kasbga yo'naltirish — bir martalik maslahat emas, balki 7-sinfdan boshlanadigan tizimli, bosqichma-bosqich jarayon. Nima uchun aynan 7-sinf? Chunki bu yoshda bolada qiziqishlar endi shakllana boshlaydi — ularni to'g'ri yo'naltirish uchun aynan shu payt eng qulay.\nMen buni to'rt bosqichda olib boraman.\nBirinchidan, psixolog bilan birgalikda har bir o'quvchining qiziqishi, qobiliyati va xarakterini test va so'rovnoma orqali aniqlayman — o'quvchi avval o'zini bilishi kerak.\nIkkinchidan, kasbni unga jonli ko'rsataman: kasb egalarini taklif qilaman, korxonalarga ekskursiya uyushtiraman, \"Kasblar haftaligi\" o'tkazaman.\nUchinchidan, yig'ilgan ma'lumot asosida har bir o'quvchini o'z yo'liga yo'naltiraman — akademik moyillarni oliy ta'limga, amaliy moyillarni kasb-hunarga. Bu qarorni albatta ota-ona bilan muhokama qilaman.\nTo'rtinchidan, o'quvchining rivojini \"Ijtimoiy portfolio\" orqali kuzatib boraman.\nMaqsadim — har bir o'quvchini haqiqiy qobiliyatiga mos ravishda yo'naltirish, toki u \"hamma shunday qildi\" deb emas, \"bu mening yo'lim\" deb ishonch bilan kasb tanlasin.",
        keys: ["7-sinfdan boshlanadi", "psixolog bilan test/so'rovnoma", "kasb egalari/ekskursiya/Kasblar haftaligi", "akademik yoki kasb-hunarga", "ota-ona bilan muhokama", "Ijtimoiy portfolio"]
      },
      {
        q: "23. Psixolog bilan qanday hamkorlik qilasiz?",
        a: "Maktab psixologi — kasbga yo'naltirish ishidagi mening eng yaqin hamkorim. Nizomga ko'ra ham men 7-sinfdan boshlab aynan psixolog bilan birgalikda ishlayman, va bu tasodifiy emas.\nBizning ishimizda rollar aniq taqsimlangan. Psixolog bolaning ichki psixologik dunyosini — xarakterini, temperamentini, qobiliyatini ilmiy metodlar orqali baholaydi. Men esa shu baho ustiga o'quvchining kasbiy va akademik yo'nalishini quraman.\nBiz birgalikda Holland yoki Klimov metodikasi kabi ilmiy testlarni, kuzatuv va suhbatlarni qo'llaymiz. Men hech qachon bitta usulga tayanmayman — kuzatuv, test, so'rovnoma va o'quv natijalarini birlashtirib, o'quvchi haqida to'liq tasvir hosil qilaman.\nBu hamkorlik nima uchun shunchalik muhim? Chunki o'quvchining kelajagi haqida qaror qabul qilarkanman, men taxminga emas, ilmiy dalilga tayanishim shart. Psixolog bilan birgalikdagi ish mening tavsiyalarimni obyektiv va ishonchli qiladi.\nBundan tashqari, psixolog bilan men nafaqat kasb masalasida, balki o'quvchining ruhiy holati, motivatsiyasi va muammoli vaziyatlarda ham doimo hamkorlik qilaman.",
        keys: ["eng yaqin hamkor", "7-sinf", "Holland/Klimov", "kuzatuv+test+so'rovnoma+o'quv natijalari", "taxminga emas, dalilga", "ruhiy holat va muammolarda ham"]
      },
      {
        q: "24. O'quvchining qiziqishini qanday aniqlaysiz?",
        a: "Kompleks usulga tayanaman: kuzatuv + so'rovnoma/anketa + psixologik test (Holland yoki Klimov) + individual suhbat + o'quv natijalari tahlili. Bularning hammasi birlashganda o'quvchining haqiqiy qiziqishi va qobiliyati aniq ko'rinadi. Bitta test yakuniy hukm emas — men har doim bir nechta manbaga tayanaman.",
        keys: ["kompleks", "Holland/Klimov", "bitta test — hukm emas"]
      },
      {
        q: "25. \"Mening kelajakdagi kasbim\" dasturi nima?",
        a: "\"Mening kelajakdagi kasbim\" — bu davlatimiz tomonidan o'quvchilarni ongli ravishda kasb-hunarga yo'naltirish maqsadida ishlab chiqilgan uzluksiz ta'lim dasturidir. Uning mohiyati — kasbiy qiziqish va iqtidorni erta aniqlab, bolani to'g'ri yo'lga solishdir.\nDastur yosh bo'yicha tabaqalashtirilgan. Boshlang'ich sinflar va bog'chalarda \"Atrofimizdagi kasblar\", \"Kasblar alifbosi\" kabi kichik dasturlar orqali — o'yin va rolli mashg'ulotlar shaklida — bolada kasblar haqida dastlabki tasavvur uyg'otiladi.\n7–9-sinflarda esa bevosita maslahatchi ishtirokida jiddiy ish boshlanadi: maxsus testlar o'tkaziladi, o'quvchilar korxonalarga ekskursiyaga olib boriladi, turli soha vakillari bilan uchrashuvlar tashkil etiladi. O'quvchilar o'z qiziqishlari asosida mustaqil ishlar va taqdimotlar tayyorlaydi.\nMen bu dastur asosida har bir o'quvchining qiziqishini erta aniqlab, uni akademik ta'lim yoki kasb-hunar yo'nalishiga yo'naltiraman. Bu dasturning eng katta qadri — bolaning kelajagini erta va to'g'ri rejalashtirishga yordam berishidir. Chunki kasb tanlash imtihon arafasida emas, yillar davomida pishib yetiladigan qarordir.",
        keys: ["uzluksiz ta'lim dasturi", "boshlang'ich: Kasblar alifbosi", "7-9-sinf: test/ekskursiya/uchrashuv/taqdimot", "akademik yoki kasb-hunarga", "kasb tanlash — yillar davomida pishadi"]
      },
      {
        q: "26. O'quvchining qiziqishi ota-ona xohishiga zid bo'lsa? (vaziyat)",
        a: "Dalil va hurmat asosida hal qilaman. Avval o'quvchi bilan suhbatlashib, qiziqishini psixologik test va portfolio natijalari bilan tasdiqlayman. So'ng ota-ona bilan uchrashib, obyektiv ma'lumotlarni tushuntiraman. Ota-onani ayblamayman — hamkor bo'laman. Kerak bo'lsa psixolog ishtirokida uch tomon kelishuvga erishamiz. Kelajakda shu kasb bilan yashaydigan bola bo'lgani uchun bolaning fikri muhimroq, lekin buni aniq tahlillar bilan ko'rsataman.",
        keys: ["dalilga tayanaman", "ota-onani ayblamayman", "uch tomon kelishuv", "bola fikri muhimroq"]
      },
      {
        q: "27. Hech narsaga qiziqmaydigan o'quvchi bilan qanday ishlaysiz?",
        a: "\"Qiziqmaydigan bola yo'q, hali o'z qiziqishini topmagan bola bor\" tamoyiliga amal qilaman. 1) psixolog bilan sababini aniqlayman; 2) turli klub va faoliyatlarga jalb qilaman; 3) unga kichik, erishish mumkin bo'lgan vazifa beraman — birinchi kichik muvaffaqiyat unda ishonch va qiziqish uyg'otadi. Sabr bilan, individual yondashib, ichidagi iqtidorni ochaman.",
        keys: ["qiziqmaydigan bola yo'q", "psixolog bilan sabab", "klubga jalb", "kichik vazifa → muvaffaqiyat"]
      },
      {
        q: "28. Bitiruvchilarni OTMga kirishga qanday tayyorlaysiz? (yo'l xaritasi)",
        a: "Bitiruvchilarni oliy ta'limga tayyorlash — bu tasodifiy emas, aniq yo'l xaritasi asosida olib boriladigan ish. Men buni bosqichma-bosqich quraman.\nAvval har bir bitiruvchining qiziqishi va qobiliyatini aniqlab, qaysi sohaga, qaysi yo'nalishga moyilligini belgilayman. So'ng shu asosda har biri uchun aniq tayyorgarlik rejasi tuzaman va ularni kuchli fan o'qituvchilariga biriktiraman.\nTayyorgarlik davomida MOCK — sinov imtihonlarini o'tkazaman. Bu orqali o'quvchining qaysi darajaga yetganini ko'raman va zaif tomonlarini vaqtida to'g'rilayman. Keyingi bosqichda hujjat topshirish, grant imkoniyatlari va ariza jarayonida hamrohlik qilaman.\nEng iqtidorli bitiruvchilarni esa \"Prezident iqtidorli farzandlari\" dasturi orqali nufuzli xorijiy oliygohlarga yo'naltiraman. Butun jarayonni ota-onalar bilan hamkorlikda olib boraman va har bir o'quvchining rivojini \"Ijtimoiy portfolio\" orqali kuzataman.\nMaqsadim — bironta ham bitiruvchi \"qayerga topshirishni bilmayman\" deb sarosimaga tushmasligi. Har biri o'z manziliga aniq reja bilan boradi.",
        keys: ["qiziqish+qobiliyat tahlili", "fan o'qituvchisiga biriktirish", "MOCK sinov imtihonlari", "hujjat/grant hamrohlik", "Prezident iqtidorli farzandlari", "Ijtimoiy portfolio"]
      },
      {
        q: "29. MOCK imtihon nima va nima uchun o'tkaziladi?",
        a: "MOCK imtihon — bu sinov, mashq imtihoni; real xalqaro imtihondan oldin, unga tayyorlik ko'rish uchun o'tkaziladigan imtihon.\nMen uni Prezident maktablari va ixtisoslashtirilgan maktablar maslahatchilari bilan hamkorlikda, real imtihon formatida — SAT, IELTS yoki fan olimpiadalari ko'rinishida tashkil etaman.\nFoydasi katta. Birinchidan, o'quvchi imtihon muhitiga va formatiga oldindan ko'nikadi, real imtihonda hayajonlanmaydi, stressga chidamli bo'ladi. Ikkinchidan, men uning kuchli va zaif tomonlarini aniqlab, individual reja tuzaman. Uchinchidan — eng muhimi — o'quvchining o'ziga ishonchi ortadi.\n⚠️ Agar komissiya \"MOCK qaysi fanlarda o'tkaziladi?\" deb so'rasa, ishonch bilan ayting: \"Deyarli barcha fanlarda — chunki maqsad o'quvchini real imtihonning to'liq formatiga tayyorlash.\" Komissiya sizni ikkilantirishga urinishi mumkin — javobingizdan qaytmang.",
        keys: ["sinov/mashq imtihoni", "SAT/IELTS/fan olimpiadalari", "stress chidamlilik", "kuchli/zaif tomonlar + individual reja", "deyarli barcha fanlarda"]
      },
      {
        q: "30. \"Prezident iqtidorli farzandlari\" dasturida nima qilasiz?",
        a: "Bu tashabbus Prezidentimizning 2025-yil 15-maydagi PF-86-son Farmoni asosida amalga oshiriladi. Uning bosh maqsadi — iqtidorli yoshlarni barvaqt aniqlab, ularni global mehnat bozorida raqobatbardosh mutaxassis qilib tarbiyalash, ya'ni mamlakat inson kapitalini boyitish.\nTashabbus uch komponentdan iborat: Milliy dastur, Al-Beruniy nomidagi xalqaro maktab-internat va iqtidorli yoshlarni qo'llab-quvvatlash hamjamiyati.\nMaktab maslahatchisi sifatida mening asosiy vazifam — Milliy dasturni amalga oshirish. Bunda imtihon orqali saralab olingan iqtidorli 9-sinf bitiruvchilari menga biriktiriladi. Men ularni 10–11-sinf davomida maxsus platforma orqali jahon reytingidagi nufuzli universitetlarga — TOP-100 va Ivy League oliygohlarga tayyorlayman.\nBuning uchun ularni kuchli fan o'qituvchilariga biriktiraman, MOCK — ya'ni sinov imtihonlarini tashkil etaman va \"Renessans\" oromgohidagi intensiv kurslarga yo'llayman.\nMaqsadim aniq — o'quvchilarimni nufuzli oliygohlarga grant asosida kirgizish. Chunki bitta iqtidorli o'quvchini dunyo darajasiga olib chiqsam, men nafaqat uning, balki mamlakatim kelajagiga hissa qo'shgan bo'laman.",
        keys: ["PF-86 (15-may 2025)", "3 komponent: Milliy dastur/Al-Beruniy/hamjamiyat", "9-sinf bitiruvchilari", "TOP-100 va Ivy League", "fan o'qituvchisi+MOCK+Renessans", "grant asosida kirgizish"]
      },
      {
        q: "31. Iqtidorli o'quvchini xorijiy oliygohga qanday tayyorlaysiz?",
        a: "Iqtidorli o'quvchini xorijiy oliygohga tayyorlash — bu izchil, bosqichma-bosqich ish. Men buni besh qadamda olib boraman.\nBirinchi qadam — baholash. O'quvchining hozirgi darajasini aniqlab, kuchli va zaif tomonlarini belgilayman. Bu — yo'lning xaritasi.\nIkkinchi qadam — til. Xorijda o'qishning kaliti — chet tili. O'quvchini IELTS, TOEFL yoki SAT ga tayyorlayman, bunda Xorijiy tillar klubidan foydalanaman.\nUchinchi qadam — fan. O'quvchini kuchli fan o'qituvchisiga biriktiraman va MOCK imtihonlar orqali bilimini sinab boraman.\nTo'rtinchi qadam — hamkorlik. Prezident maktablari va ixtisoslashtirilgan maktablar maslahatchilari bilan tajriba almashaman, chunki bu ish yolg'iz emas, birgalikda samaraliroq.\nBeshinchi qadam — hujjat va grant. O'quvchiga oliygohga kirish shartlari, grant imkoniyatlari va ariza topshirishda hamrohlik qilaman. Eng yaxshilarni \"Renessans\" oromgohidagi intensiv kurslarga yuboraman.\nMaqsadim — o'quvchining orzusini quruq xohish emas, aniq rejaga aylantirish. Men shuni uqtiraman: \"Orzu qil, lekin tizimli tayyorlan.\"",
        keys: ["5 qadam", "baholash → til(IELTS/TOEFL/SAT) → fan(MOCK) → hamkorlik → hujjat/grant", "Renessans oromgohi", "Orzu qil, tizimli tayyorlan"]
      },
      {
        q: "32. O'quvchi chet elda o'qishni xohlasa, maslahatingiz?",
        a: "To'liq qo'llab-quvvatlayman. Avvalo xalqaro til sertifikatlari (IELTS/TOEFL) va yuqori GPA saqlashni maslahat beraman. So'ng eng mos va xavfsiz universitetlar hamda bepul grantlar ro'yxatini shakllantiraman. Firibgar konsalting firmalariga aldanib qolmaslik uchun hujjatlarni mustaqil topshirish yo'llarini o'rgataman. Eng muhimi — \"brain drain emas, brain gain\" tamoyilini singdiraman.",
        keys: ["IELTS/TOEFL + GPA", "xavfsiz universitet + grant", "firibgardan ogohlantirish", "brain drain emas, brain gain"]
      },
      {
        q: "33. O'quvchi OTMga kirishdan umidini uzgan bo'lsa?",
        a: "1) psixolog bilan umidsizlik sababini aniqlayman; 2) muvaffaqiyat hikoyalarini ko'rsataman; 3) kichik, erishish mumkin bo'lgan maqsadlar qo'yib har yutug'ini rag'batlantiraman; 4) muqobil yo'llarni ko'rsataman (kasb-hunar, MOOC kurslari, grant, kechroq topshirish); 5) fan o'qituvchisiga biriktirib real reja tuzaman. Maqsad — \"sening ham imkoning bor\" ishonchini qaytarish.",
        keys: ["psixolog+sabab", "muvaffaqiyat hikoyasi", "kichik maqsad+rag'bat", "muqobil yo'l"]
      },
      {
        q: "34a. Al-Beruniy nomidagi maktab-internat haqida nima bilasiz?",
        a: "Al-Beruniy nomidagi xalqaro maktab-internat — PF-86 Farmoni bilan tashkil etilgan, akademik, boshqaruv va moliyaviy jihatdan to'liq mustaqil davlat ta'lim muassasasi.\nUning o'ziga xos jihatlari bor. Bu maktabga 8-sinf bitiruvchilari qabul qilinadi. O'quv jarayoni xalqaro standartda olib boriladi va bitiruvchilar International Baccalaureate — IB diplomini oladi, bu diplom dunyoning ko'plab nufuzli universitetlariga yo'l ochadi. O'quvchilar ingliz tilidan tashqari kamida yana bitta xorijiy tilni o'rganadi.\nBu maktab — davlatimizning iqtidorli yoshlarga bo'lgan e'tibori va inson kapitaliga qo'yayotgan sarmoyasining yorqin namunasi. Maslahatchi sifatida men iqtidorli o'quvchilarni shunday imkoniyatlardan xabardor qilaman va ularni bu darajaga intilishga ruhlantiraman.",
        keys: ["PF-86 farmoni", "8-sinf bitiruvchilari", "IB diplomi", "kamida 2 xorijiy til", "mustaqil davlat muassasasi"]
      },
      {
        q: "34b. Iqtidorli o'quvchi TOP-100 oliygohga kirsa, qanday rag'batlanasiz?",
        a: "PF-86 Farmonining 7-ilovasiga ko'ra, maslahatchi biriktirilgan o'quvchining nufuzli oliygohga qabul qilinishiga qarab bir martalik pul mukofoti oladi. Eng yuqori reytingdagi Ivy League universitetiga kirsa eng katta mukofot, TOP-50 va TOP-100 oliyohlar uchun esa tegishli rag'bat belgilangan.\nLekin men buni alohida ta'kidlamoqchiman: pul mukofoti men uchun maqsad emas, natijaning soyasidir. Mening eng katta mukofotim — biriktirilgan o'quvchimning orzusiga erishgani, dunyoning nufuzli dargohida o'qiyotgani.\nPul mukofoti esa — davlatning mening mehnatimni qadrlashi, e'tirof belgisi. Buni minnatdorchilik bilan qabul qilaman, lekin men bu ishni mukofot uchun emas, o'quvchilar kelajagi uchun qilaman. Chunki o'quvchim \"Siz tufayli men bu yerga yetdim\" deyishi — hech qanday pul bilan o'lchanmaydigan baxt.",
        keys: ["PF-86 7-ilova", "Ivy League — eng katta mukofot", "TOP-50 va TOP-100 — tegishli rag'bat", "mukofot — maqsad emas, natijaning soyasi", "o'quvchim yetishgani — eng katta baxt"]
      },
      {
        q: "34c. Portfolio (ijtimoiy va shaxsiy) shakllantirish",
        a: "Portfolio — bu o'quvchining yutuqlari to'plangan \"vizit kartasi\", uning kelajakdagi muvaffaqiyati uchun erta qo'yilgan poydevor.\nMen ikki turdagi portfolio bilan ishlayman. Birinchisi — \"Ijtimoiy portfolio\" — bu \"Kelajak\" platformasidagi rasmiy elektron modul. Unga har bir o'quvchining qaysi klub va to'garaklarga jalbi, tanlovlardagi ishtiroki, yutuqlari va sertifikatlari tizimli kiritiladi. Men buni muntazam yangilab boraman, shu orqali o'quvchining rivojini kuzataman va hisobot tayyorlayman.\nIkkinchisi — o'quvchining shaxsiy portfoliosi. Bunda men unga o'z kuchli tomonlarini aniqlash, CV va motivatsion xat yozish, sertifikatlarni tizimlashtirishni o'rgataman.\nBu portfolio nima uchun muhim? Chunki u oliyohga hujjat topshirishda, grant olishda va \"Prezident iqtidorli farzandlari\" dasturiga kirishda o'quvchining eng kuchli daliliga aylanadi. Men buni 8–9-sinfdan boshlayman, chunki erta tayyorgarlik — kech qolgandan har doim afzal.\nMaqsadim — bitiruvchi maktabni tugatganda quruq qo'l bilan emas, o'z yutuqlari to'plangan kuchli portfolio bilan hayotga qadam qo'yishi.",
        keys: ["ikki tur: ijtimoiy+shaxsiy", "Kelajak platformasi", "jalb+ishtirok+yutuq+sertifikat", "CV+motivatsion xat", "8-9-sinfdan boshlanadi", "quruq qo'l emas, portfolio bilan"]
      },
      {
        q: "34d. 8–9-sinf o'quvchilarining ko'pchiligi OTMga (yoki kollejga) qiziqadi — qanday yo'l tutasiz?",
        a: "Bu juda real holat, va men unga muvozanat bilan yondashaman.\nAvvalo shuni aytamanki, men OTMga intilishni ham, kasb-hunarga intilishni ham salbiy hodisa deb hisoblamayman — ikkalasi ham munosib yo'l. Mening vazifam — bu tanlov ongli bo'lishini ta'minlash.\nMuammo shundaki, ko'p o'quvchi \"hamma boryapti, men ham boraman\" deb ergashadi. Bu — moda, haqiqiy tanlov emas. Shuning uchun men avval psixolog bilan ularning qobiliyati va qiziqishini test orqali aniqlayman.\nAkademik bilimga moyil, lekin \"hamma ketyapti\" deb kollejga intilayotganlar bilan alohida ishlayman — ularning salohiyatini ko'rsataman. Amaliy moyillarni esa to'g'ri kasb-hunar muassasasiga yo'naltiraman va bu yo'l ham obro'li, daromadli ekanini muvaffaqiyatli kasb egalari misolida ko'rsataman.\nMen hech kimni majburlamayman — faqat to'liq ma'lumot beraman, toki bola barcha imkoniyatlarni ko'rib, o'zi ongli qaror qilsin. Tamoyilim: maqsadsiz tanlangan oliy ta'limdan ko'ra, sevib tanlangan kasb-hunar afzalroq. Muhimi — diplom emas, o'z o'rnini topish.",
        keys: ["ikkalasi ham munosib yo'l", "ongli tanlov", "moda emas, haqiqiy tanlov", "psixolog bilan test", "diplom emas, o'z o'rnini topish"]
      },
        a: "Ko'pchilik klubni shunchaki bo'sh vaqt mashg'uloti deb o'ylaydi. Aslida esa klub — oliy ta'limga, ayniqsa xorijiy oliygohlarga kirishning eng kuchli tayyorgarlik maydonidir.\nSababi shuki, bugun nufuzli universitetlar faqat baho va imtihon natijasiga qaramaydi — ular o'quvchining shaxs sifatidagi rivojiga, ko'nikmalariga, tashabbusiga e'tibor beradi. Aynan shu sifatlar klublarda shakllanadi.\nMisol bilan aytaman: Debat klubi tanqidiy fikrlash va notiqlikni beradi — bu oliygoh suhbatlarida (intervyu) juda asqotadi. Xorijiy tillar klubi IELTS va TOEFL ga tayyorlaydi. Raqamli avlod qizlari klubi real loyiha va startap tajribasini beradi — bu xorijiy oliygoh arizasida katta ustunlik. Jadidlar izidan esa keng dunyoqarash va ma'naviy salohiyatni shakllantiradi.\nDemak men klublarni o'quvchining akademik yo'liga xizmat qiladigan qilib tashkil etaman. Klubdagi har bir yutuq o'quvchining portfoliosiga kiritiladi va ertaga uning kuchli \"vizit kartasi\"ga aylanadi. Klub — o'quvchining oliygohga olib boradigan ko'rinmas zinapoyasi.",
        keys: ["nufuzli universitetlar — ko'nikma va tashabbusga qaraydi", "Debat — intervyuda asqotadi", "Xorijiy til — IELTS/TOEFL", "Raqamli avlod qizlari — startap tajribasi", "Jadidlar — dunyoqarash", "portfolio — vizit kartasi"]
      }
    ]
  },

  {
    id: "istiqbol",
    title: "4-mezon: Istiqboldagi rejalar",
    icon: "🎯",
    intro: "Birinchi yil rejasi, strategik reja, AI'dan foydalanish, \"Nega aynan siz?\" (savol 35-43).",
    items: [
      {
        q: "35. Maslahatchi kim va istiqbol rejangiz qanday?",
        a: "Maslahatchi — \"Kelajak\" markazining maktabdagi vertikal tuzilmasi, o'quvchi-ota-ona-maktab o'rtasida ko'prik. Rejam: o'quvchilar bazasini tuzish; raqamli kasbiy xarita; 7 klub + \"O'quvchilar kengashi\"; IT to'garagi ochish; iqtidorlilarni nufuzli oliygohlarga tayyorlash; har bitiruvchining portfoliosi.",
        keys: ["vertikal tuzilma", "ko'prik", "raqamli kasbiy xarita", "7 klub", "IT to'garagi", "portfolio"]
      },
      {
        q: "36. Ishga qabul qilinsangiz, birinchi yilda nimaga erishmoqchisiz?",
        a: "Men birinchi yilni aniq, o'lchanadigan bosqichlarga bo'laman.\nBirinchi oy — tahlil oyi. Buyruq bermayman, tinglayman. O'quvchilar ma'lumotlar bazasini shakllantiraman, so'rovnomalar orqali ularning qiziqishi va ehtiyojini aniqlayman, maktab muhiti bilan tanishaman. Chunki tushunmasdan tuzilgan reja qog'ozda qoladi.\nBirinchi chorak — ishga tushirish. Klublarni faollashtiraman, \"O'quvchilar kengashi\" saylovini o'tkazaman, 7–9-sinflarda kasbga yo'naltirish ishini boshlayman, iqtidorlilar uchun MOCK imtihonlar tashkil etaman.\nYil yakuni — natija. Kamida bitta yirik festival yoki tanlov o'tkazaman, qo'shimcha ta'limga jalb qilingan o'quvchilar sonini sezilarli oshiraman, iqtidorlilarni oliyohga tayyorlash jarayonini yo'lga qo'yaman.\nHar bosqichni men o'lchanadigan natija bilan baholayman. Maqsadim — birinchi yildayoq ko'rinadigan natija berish va eng muhimi, o'quvchilar hamda jamoaning ishonchini qozonish. Chunki ishonch — bir kunda emas, real natija bilan qozoniladi.",
        keys: ["1-oy: tahlil/baza/so'rovnoma", "1-chorak: klub+kengash+MOCK", "yil yakuni: festival+jalb oshirish", "o'lchanadigan natija", "ishonch real natija bilan qozoniladi"]
      },
      {
        q: "37. 3-5 yildan keyin o'zingizni qanday ko'rasiz?",
        a: "Men o'z kelajagimni uch jihatdan tasavvur qilaman.\nKasbiy jihatdan: menejerlik sertifikatini olgan, maktabda kuchli klublar tizimi va faol \"O'quvchilar kengashi\"ni shakllantirgan tajribali mutaxassis bo'laman.\nNatija jihatdan: o'quvchilarim nufuzli xorijiy oliygohlarga kirgan, respublika tanlovlarida g'olib bo'lgan bo'lishini xohlayman. Mening muvaffaqiyatim — o'quvchilarim muvaffaqiyatida ko'rinadi.\nShaxsiy jihatdan: ingliz tilimni mukammal darajaga yetkazgan, balki magistratura yoki ilmiy darajaga ega bo'laman.\nLekin eng katta orzuim shuki — men nafaqat o'zim natija beraman, balki boshqa maslahatchilar uchun ham tajriba ulashadigan, o'rnak bo'ladigan mutaxassisga aylanaman. Chunki bir maslahatchi bir maktabni o'zgartiradi, lekin tajribasini ulashgan maslahatchi — o'nlab maktabni.\nDemak 3–5 yildan keyin men o'zimni tinmay o'rgangan, o'sgan va atrofidagilarni ham o'stirgan inson sifatida ko'raman.",
        keys: ["menejerlik sertifikati", "o'quvchilarim xorijiy oliygohda", "magistratura/ilmiy daraja", "tajriba ulashaman", "bir maslahatchi — bir maktab, tajribasi — o'nlab"]
      },
      {
        q: "38. Ishingizda AI va raqamli texnologiyadan qanday foydalanasiz?",
        a: "Bu savolga men ayniqsa ishonch bilan javob beraman, chunki raqamli texnologiya mening ish uslubimning markazida turadi.\nBirinchidan, \"Kelajak\" elektron platformasini yuritaman, o'quv jarayoni ma'lumotlarini va \"Ijtimoiy portfolio\"ni shu yerda boshqaraman.\nIkkinchidan, kundalik ishimda raqamli vositalardan keng foydalanaman: Excelda o'quvchilar bazasini tahlil qilaman, Canva va PowerPointda taqdimot tayyorlayman.\nUchinchidan, sun'iy intellektdan o'quv materiali, ssenariy, so'rovnoma va test tayyorlashda yordamchi sifatida foydalanaman — bu menga vaqtni tejash va ishni sifatli qilish imkonini beradi.\nTo'rtinchidan, o'quvchilarni \"Raqamli avlod qizlari\" klubi va IT to'garaklari orqali bevosita IT va sun'iy intellektga yo'naltiraman.\nLekin men o'quvchilarga bir muhim narsani uqtiraman: sun'iy intellekt — insonning o'ylashi o'rnini bosuvchi emas, balki yordamchi vosita. Texnologiyani men ijodning o'rnini emas, qanotini deb bilaman. Maqsadim — o'quvchini texnologiyaning quli emas, egasi qilib tarbiyalash.",
        keys: ["Kelajak platformasi/portfolio", "Excel/Canva/PowerPoint", "AI: material/ssenariy/test", "Raqamli avlod qizlari/IT to'garagi", "AI — qanot, o'rin bosuvchi emas"]
      },
      {
        q: "39. O'quvchilarni qo'shimcha ta'limga jalb etishni qanday oshirasiz?",
        a: "Mening maqsadim — maktabda qo'shimcha ta'limga jalbni shunchaki majburiyat emas, madaniyatga aylantirish.\nBuni men bir necha yo'l bilan qilaman. Birinchidan, klublarni qiziqarli va zamonaviy qilaman — majburlab kelgan o'quvchi vaqt o'tkazadi, qiziqib kelgani rivojlanadi. Ikkinchidan, muvaffaqiyat hikoyalarini targ'ib qilaman — tanlov g'oliblari, oliyohga kirgan o'quvchilar misolida boshqalarni ilhomlantiraman. Uchinchidan, tadbirlarni media va ijtimoiy tarmoqlarda yoritaman. To'rtinchidan, ota-onalar bilan ishlayman. Beshinchidan, har bir o'quvchiga qiziqishiga mos individual taklif beraman.\nEng muhimi — men o'quvchini klubga majburan tortmayman, balki klubni shunday qiziqarli qilamanki, o'quvchining o'zi kelishni istasin.\nMaqsadim — har bir o'quvchi kamida bitta klub yoki to'garakda faol bo'lishi. Chunki bo'sh vaqtini mazmunli o'tkazgan bola — kelajagini ham mazmunli quradi.",
        keys: ["majburiyat emas, madaniyat", "muvaffaqiyat hikoyasi", "media/ijtimoiy tarmoq", "ota-ona bilan ishlash", "individual taklif", "o'zi kelishni istasin"]
      },
      {
        q: "40. \"Ijtimoiy portfolio\" modulini qanday yuritasiz?",
        a: "\"Ijtimoiy portfolio\" — bu \"Kelajak\" platformasidagi rasmiy elektron modul bo'lib, o'quvchining qo'shimcha ta'limga jalbini aks ettiradi.\nMen uni shunday yuritaman. Avval har bir o'quvchi uchun platformada shaxsiy profil ochaman. So'ng unga o'quvchining klub va to'garaklarga jalbini, tanlov va tadbirlardagi ishtirokini, yutuqlari va sertifikatlarini tizimli kiritaman. Bu ma'lumotlarni men muntazam yangilab boraman.\nBu modul nima uchun muhim? Chunki u uch vazifani bajaradi. Birinchidan, har bir o'quvchining rivojini kuzatish imkonini beradi. Ikkinchidan, hisobot tayyorlashda asos bo'ladi. Uchinchidan — eng muhimi — o'quvchining oliyohga kirishi, grant olishi va \"Prezident iqtidorli farzandlari\" dasturiga qabul qilinishida kuchli daligiga aylanadi.\nDemak Ijtimoiy portfolio — shunchaki hisobot emas, balki o'quvchining to'rt yillik mehnati saqlanadigan elektron xotira. Men uni puxta yuritsam, o'quvchi maktabni quruq qo'l bilan emas, o'z yutuqlari bilan tugatadi.",
        keys: ["shaxsiy profil", "jalb+ishtirok+yutuq+sertifikat", "3 vazifa: kuzatish/hisobot/dalil", "Prezident iqtidorli farzandlari", "elektron xotira"]
      },
      {
        q: "41. O'z malakangizni qanday oshirasiz?",
        a: "Men bir tamoyilga amal qilaman: har kuni biror yangi narsa o'rganish. Maslahatchi o'zi o'rganishdan to'xtasa, o'quvchini ham o'stirа olmaydi.\nBirinchidan, menejerlik sertifikatiga o'qiyman. Bu nafaqat malakamni oshiradi, balki Nizomga ko'ra sertifikat amal qilganda maoshimga +30% ustama ham beradi — ya'ni o'rganish ham bilim, ham moddiy rag'bat keltiradi.\nIkkinchidan, ingliz tilimni B2 darajasiga yetkazaman, chunki bu xorijiy oliyohlar bilan ishlash uchun zarur.\nUchinchidan, seminar, trening va konferensiyalarda muntazam ishtirok etaman, boshqa maslahatchilar bilan tajriba almashaman.\nTo'rtinchidan, PF-86 Farmonida ko'zda tutilgan xorijiy tajriba imkoniyatlaridan foydalanaman.\nMening qarashim shu: men o'quvchilarga \"umrbod o'rganish\" g'oyasini singdiraman. Lekin buni faqat aytib emas, o'zim o'rnak bo'lib ko'rsatishim kerak. Tinmay o'rayotgan ustozdan — tinmay o'rganadigan shogird chiqadi.",
        keys: ["menejerlik sertifikati +30%", "ingliz tili B2", "seminar/trening/tajriba almashuv", "PF-86 xorijiy tajriba", "tinmay o'rayotgan ustoz — tinmay o'rganadigan shogird"]
      },
      {
        q: "42. Maslahatchining strategik (3 yillik) rejasi qanday?",
        a: "Men o'z faoliyatimni besh strategik yo'nalish atrofida quraman.\nBirinchisi — psixologik qo'llab-quvvatlash: psixolog bilan har bir o'quvchining ruhiy holatini kuzatish, qiyin sharoitdagilarga alohida e'tibor.\nIkkinchisi — kasbga yo'naltirish: 7-sinfdan boshlab tizimli diagnostika va yo'naltirish.\nUchinchisi — milliy-ma'naviy tarbiya: vatanparvarlik, kitobxonlik, milliy qadriyatlarni singdirish.\nTo'rtinchisi — bo'sh vaqtni mazmunli tashkil etish: 7 ta klub va to'garaklar orqali.\nBeshinchisi — raqamli profilaktika va yo'naltirish: o'quvchilarni IT va sun'iy intellektga jalb qilish, internetdan to'g'ri foydalanishni o'rgatish.\nBu besh yo'nalish bir-birini to'ldiradi va men ularni uch yil davomida bosqichma-bosqich chuqurlashtirib boraman. Birinchi yil — poydevor qo'yish, ikkinchi yil — tizimni mustahkamlash, uchinchi yil — natija va tajriba ulashish.\nYakuniy maqsadim bitta — o'quvchini bugungi imtihonga emas, kelajak mehnat bozoriga, hayotga tayyorlash.",
        keys: ["psixologik", "kasbga yo'naltirish (7-sinfdan)", "milliy-ma'naviy tarbiya", "bo'sh vaqt (7 klub)", "raqamli profilaktika", "1-yil: poydevor / 2-yil: tizim / 3-yil: natija"]
      },
      {
        q: "43a. O'quvchining bo'sh vaqtini qanday rejalashtirasiz?",
        a: "Mening tamoyilim aniq: bo'sh vaqt nazoratsiz qolmasligi kerak. Chunki bola bo'sh vaqtini qayerga sarflasa, kelajagi o'sha tomonga shakllanadi.\nMen buni bosqichma-bosqich tashkil etaman. Avval diagnostika — anketa va kuzatuv orqali o'quvchining qiziqishini, ayniqsa e'tiborni talab qiladigan o'quvchilarni aniqlayman. So'ng uni qiziqishiga mos faoliyatga yo'naltiraman: intellektual yo'nalish uchun Debat, Zakovat, kitobxonlik; ijodiy uchun teatr, dizayn, musiqa; raqamli uchun IT va robototexnika. Bundan tashqari sportga jalb qilaman, chunki jismonan faol bola ruhan ham barqaror bo'ladi. \"Bir kun — bir kasb\" kabi loyihalar orqali kasbga yaqinlashtiraman va volontyorlikka undayman.\nMaqsadim — har bir o'quvchi kamida bitta ijodiy yoki sport faoliyatiga jalb qilinishi.\nChunki bo'sh vaqt — bu xavf ham, imkoniyat ham. To'g'ri yo'naltirilsa, u bolaning iqtidori ochiladigan eng qimmatli vaqtga aylanadi.",
        keys: ["diagnostika/anketa", "intellektual: Debat/Zakovat/kitob", "ijodiy: teatr/dizayn", "raqamli: IT/robototexnika", "volontyorlik", "bo'sh vaqt — xavf ham, imkoniyat ham"]
      },
      {
        q: "43b. Insho/esse tashkil etish rejangiz qanday?",
        a: "Men inshoni shunchaki yozma ish emas, balki o'quvchini fikrlashga, kasbga va tarbiyaga yo'naltirish vositasi sifatida qo'llayman.\nAvval yillik mavzularni belgilayman — masalan, \"Mening orzuimdagi kasb\", \"Vatan kelajagi — mening qo'limda\", \"Men 2035-yilda\", \"Internet: foyda va xavf\". Bu mavzular o'quvchini kelajak haqida o'ylashga undaydi.\nSo'ng inshoni bosqichma-bosqich olib boraman: mavzu e'loni → yo'naltiruvchi savollar berish → o'quvchining mustaqil yozishi → tahlil va izoh (feedback) → eng yaxshilarni mukofotlash.\nInshoni men aniq mezonlar bo'yicha baholayman: mavzu ochilishi, ijodkorlik, mantiqiylik va savodxonlik.\nMaqsadim ikki tomonlama. Bir tomondan, insho orqali o'quvchining fikrlash darajasini va qiziqishini aniqlab, uni to'g'ri yo'naltiraman. Ikkinchi tomondan, o'quvchida mustaqil fikrlash va o'z fikrini yozma bayon eta olish ko'nikmasini shakllantiraman. Chunki o'z fikrini yoza oladigan o'quvchi — o'z hayotini ham reja qila oladi.",
        keys: ["insho — yo'naltirish vositasi", "mavzular: kasb/Vatan/2035/internet", "e'lon → savol → yozish → feedback → mukofot", "mezonlar: mavzu/ijod/mantiq/savodxonlik", "o'z fikrini yoza olgan — hayotini ham reja qiladi"]
      },
      {
        q: "43. Nega aynan sizni tanlashimiz kerak? (yakuniy savol)",
        a: "Men bu savolga samimiy javob beraman. Menda uchta sifat bor deb ishonaman.\nBirinchisi — tashabbuskorlik. Men buyruq kutib o'tirmayman, o'zim yangi g'oya va loyihalar taklif qila olaman.\nIkkinchisi — tizimli fikrlash. Men ishni tasodifan emas, aniq reja va bosqichlar bilan olib boraman — buni bugungi suhbatda ham ko'rsatishga harakat qildim.\nUchinchisi — o'quvchilarga g'amxo'rlik. Men bu ishni lavozim uchun emas, ishonch bilan tanladim. Yoshlar bilan ishlash, ularning iqtidorini ochish menga chinakam zavq beradi.\nBundan tashqari, men Nizom talablarini, \"Prezident iqtidorli farzandlari\" dasturini chuqur bilaman va ularni aniq reja bilan amalga oshira olaman.\nLekin eng muhimi shu — men buni shunchaki ish deb emas, o'quvchilar kelajagiga qo'shilayotgan hissa deb bilaman. Menga ishonsangiz, men buni quruq va'da bilan emas, real natija bilan oqlayman. Chunki menga ishonch bildirilsa, men uni mehnatim bilan isbotlashga tayyorman.",
        keys: ["tashabbuskorlik", "tizimli fikrlash", "o'quvchilarga g'amxo'rlik", "Nizom + Prezident iqtidorli farzandlari", "ishonch — mehnat bilan isbotlayman"]
      }
    ]
  },

  {
    id: "klublar",
    title: "3-mezon: Klublar va tadbirlar",
    icon: "🎭",
    intro: "7 ta klub, Turon teatr, Raqamli avlod qizlari, Iqtidor ansambli (savol 87-104). Tamoyil: maqsad → ishchi guruh → reja → o'tkazish → rag'bat → yoritish.",
    items: [
      {
        q: "87. Maktab maslahatchisi qaysi klublarni tashkil etadi?",
        a: "Nizomga ko'ra men maktabda 7 ta klub tashkil etaman, va ularning har biri o'quvchining muayyan qobiliyatini ochishga xizmat qiladi.\nBirinchisi — Turon teatr, sahna san'ati va notiqlikni rivojlantiradi. Ikkinchisi — Iqtidor ansambli, musiqa va ijodiy iqtidorni. Uchinchisi — Jadidlar izidan, kitobxonlik va milliy o'zlikni. To'rtinchisi — Eco-schools, ekologik madaniyatni. Beshinchisi — Xorijiy tillar, chet tili ko'nikmasini. Oltinchisi — Debat, tanqidiy fikrlash va liderlikni. Yettinchisi — Raqamli avlod qizlari, qizlarni IT va innovatsiyaga jalb qiladi.\nBu klublarni men shunchaki ochib qo'ymayman. Har birining aniq ish rejasi, jadvali va mas'ul rahbari bo'ladi. Faoliyatni doimiy tahlil qilib, natijalarni \"Ijtimoiy portfolio\"ga kiritaman.\nMening maqsadim — har bir o'quvchi kamida bitta klubda faol bo'lishi. Chunki klub — o'quvchi o'z iqtidorini kashf etadigan, bo'sh vaqtini mazmunli o'tkazadigan va hayotga tayyorlanadigan maydon.",
        keys: ["7 klub", "Turon teatr/Iqtidor ansambli/Jadidlar/Eco/Xorijiy til/Debat/Raqamli avlod qizlari", "har biri — 1 qobiliyat", "reja+jadval+rahbar", "har bola — 1 klub"]
      },
      {
        q: "88. Festival yoki tanlovni qanday tashkil qilasiz?",
        a: "Har qanday tadbir — festival bo'ladimi, tanlov yoki sport musobaqasi — men uni aniq olti bosqichda tashkil etaman.\nBirinchi bosqich — reja va ssenariy: tadbirning maqsadi, shakli, dasturini belgilayman. Ikkinchi bosqich — moliyalashtirish: tadbirni maktab ish rejasiga kiritaman, kerak bo'lsa homiy jalb qilaman. Uchinchi bosqich — tashkiliy ishlar: sana, joy, mas'ullar va kerakli jihozni tayyorlayman. To'rtinchi bosqich — sifatli o'tkazish: tadbirni belgilangan reja asosida, qiziqarli formatda o'tkazaman. Beshinchi bosqich — yoritish: jarayonni media va ijtimoiy tarmoqlarda namoyish etaman. Oltinchi bosqich — tahlil: natijalarni baholayman, nima yaxshi o'tdi, nimani keyingisida yaxshilash kerakligini ko'rib chiqaman.\nBu tartib menga har qanday tadbirni izchil va sifatli o'tkazish imkonini beradi. Tanlovlarda esa men adolat va oshkoralikka alohida e'tibor beraman — g'oliblarni xolis aniqlayman, shunda ishtirokchilar ishonchi ortadi.\nMaqsadim — tadbir shunchaki \"bo'lib o'tish\" uchun emas, o'quvchiga ilhom, tajriba va yutuq berishi uchun o'tsin.",
        keys: ["6 bosqich", "reja → moliya → tashkiliy → o'tkazish → yoritish → tahlil", "adolat va oshkoralik", "ilhom, tajriba, yutuq"]
      },
      {
        q: "89. Bir vaqtda 7 ta klubni qanday boshqarasiz?",
        a: "Bu — tashkilotchilik ko'nikmasini sinaydigan savol, va men buni tizimli yondashuv bilan hal qilaman.\nBirinchidan, men har bir klubni yolg'iz boshqarmayman — har klubga alohida mas'ul rahbar tayinlayman, o'zim esa umumiy muvofiqlashtiruvchi bo'laman. Demak men dirijyorman, har bir cholg'uchi o'z partiyasini chaladi.\nIkkinchidan, aniq jadval tuzaman — klublar bir-biriga va dars vaqtiga to'qnash kelmaydi.\nUchinchidan, o'quvchilarni majburan emas, qiziqishiga qarab taqsimlayman.\nTo'rtinchidan — bu eng samarali usul — ba'zi klublarni birlashtiraman. Masalan, Debat va Xorijiy tillarni qo'shib, ingliz tilida debat o'tkazaman. Eco-schools a'zolarini Raqamli avlod qizlaridagi ekologik loyihaga jalb qilaman. Shunda klublar bir-birini kuchaytiradi.\nBeshinchidan, jarayonni doimiy tahlil qilib, natijalarni elektron platformaga kiritaman.\nShunday tizim bilan 7 ta klub ham bir-biriga xalaqit bermay, uyg'un ishlaydi. Maqsadim — har biri qog'ozda emas, amalda natija beradigan klub bo'lsin.",
        keys: ["har klubga mas'ul rahbar", "men — dirijyor", "aniq jadval", "qiziqishga qarab taqsim", "klublarni birlashtirish: Debat+Xorijiy til", "Eco+Raqamli avlod"]
      },
      {
        q: "90. \"Turon teatr\" tanlovini qanday tashkil qilasiz?",
        a: "Turon teatr — Maktabgacha va maktab ta'limi vazirligi hamda Madaniyat vazirligi hamkorligida o'tkaziladigan teatr tanlovi. U 7–10-sinf o'quvchilaridan, 8 nafargacha jamoadan iborat bo'ladi.\nTanlov uch shartdan iborat. Birinchi shart — \"Bizning maktab\" tanishtiruvi: jamoa o'z maktabini badiiy ko'rinishda taqdim etadi, 6 daqiqa vaqt, 10 ball. Ikkinchi shart — \"Madaniyat va san'at bilimdoni\" savol-javobi: jamoaga 10 ta savol beriladi, 10 ball. Uchinchi shart — \"Teatr-ibratxona\" sahna spektakli: o'quvchilar \"Adabiyot\" darsligidagi asardan parcha sahnalashtiradi, 10 daqiqa, eng yuqori — 30 ball.\nTanlov uch bosqichda o'tadi: mahalliy bosqich martda, hududiy bosqich aprelda, respublika bosqichi iyunda.\nEng quvonarlisi — respublika bosqichida 1-o'rinni egallagan jamoa xorijiy mamlakatga tajriba sayohati bilan taqdirlanadi.\nMen o'quvchilarni bu tanlovga bosqichma-bosqich tayyorlayman: asar tanlash, sahna mahorati, nutq ustida ishlayman. Maqsadim — o'quvchida sahna jasorati, badiiy did va jamoa ruhini shakllantirish.",
        keys: ["7-10-sinf", "8 nafar", "3 shart: tanishtiruv(10)+savol-javob(10)+spektakl(30)", "mart/aprel/iyun", "g'olib — xorijiy sayohat"]
      },
      {
        q: "91. \"Turon teatr\" tanlovi necha shartdan iborat?",
        a: "Uch shart: I — \"Bizning maktab\" tanishtiruv (6 daqiqa, 10 ball); II — \"Madaniyat va san'at bilimdoni\" savol-javob (10 ta savol, 10 ball, 5 daqiqa); III — \"Teatr – ibratxona\" sahna spektakli (10 daqiqa, 30 ball), 5-11-sinf \"Adabiyot\" darsligidagi asardan parcha. Eng yuqori ball — III shartda (30 ball), shuning uchun spektaklga alohida tayyorgarlik ko'raman.",
        keys: ["I — tanishtiruv (10)", "II — savol-javob (10)", "III — spektakl (30)", "eng ko'p ball — III"]
      },
      {
        q: "92. \"Turon teatr\" o'quvchiga nima beradi?",
        a: "Notiqlik san'ati, sahna madaniyati, badiiy did, jamoada ishlash va o'ziga ishonch rivojlanadi. Adabiyot, milliy qadriyatlar va teatr tarixi bilan tanishtiradi. Eng muhimi — uyatchan o'quvchilarning o'zini namoyon qilishiga, sahnada qo'rquvni yengishiga yordam beradi. Bu ko'nikmalar oliygoh intervyularida asqotadi.",
        keys: ["notiqlik", "sahna madaniyati", "adabiyot", "jamoa", "qo'rquvni yengish"]
      },
      {
        q: "93. \"Raqamli avlod qizlari\" klubini bosqichma-bosqich qanday tashkil qilasiz?",
        a: "Raqamli avlod qizlari — qizlarni IT va innovatsiyaga jalb qilishga qaratilgan tanlov. U to'rt yo'nalishni qamrab oladi: Ta'lim, Sun'iy intellekt, Iqlim o'zgarishi va Yashil iqtisodiyot.\nIkki yosh toifasi bor: 16–20 yosh va 21–30 yosh. Ishtirokchilar yakka yoki 2 nafargacha jamoa bo'lib qatnashadi, loyihani 3–5 daqiqada, 12 sahifagacha taqdimotda himoya qiladi.\nBallarga e'tibor: tuman bosqichida tanlov 75 ballik tizimda, viloyat va respublika bosqichlarida esa 70 ballik tizimda baholanadi. Tuman bosqichidan eng yaxshi 5 ta loyiha viloyatga, viloyatdan 3 ta loyiha respublikaga o'tadi.\nKlubni men bosqichma-bosqich tashkil etaman: avval InfoWeek va plakatlar orqali targ'ibot qilaman, so'ng a'zolar va koordinator bilan reja tuzaman. IT-Park rezidentlari va sohada muvaffaqiyatga erishgan ayollarni taklif qilib, mahorat darslari o'tkazaman. So'ng qizlarga real loyiha — startap tayyorlashda yordam beraman va ularni tuman bosqichidan respublikagacha olib chiqaman.\nG'olib qizlar \"Chet el ta'lim sayohati\" va grant bilan taqdirlanadi. Maqsadim — qizlarning g'oyasini real mahsulot yoki xizmatga aylantirish.",
        keys: ["4 yo'nalish: Ta'lim/AI/Iqlim/Yashil iqtisodiyot", "16-20 / 21-30 yosh", "75 ball (tuman) / 70 ball (viloyat+respublika)", "5 loyiha viloyatga / 3 ta respublikaga", "g'olib — chet el + grant"]
      },
      {
        q: "94. \"Raqamli avlod qizlari\" tanlovi qaysi yo'nalishlarni qamrab oladi?",
        a: "To'rt yo'nalish: Ta'lim, Sun'iy intellekt, Iqlim o'zgarishi, Yashil iqtisodiyot. Ikki yosh toifasi: 16-20 yosh va 21-30 yosh. Ishtirokchilar individual yoki ikki kishilik jamoa, qizlar.raqamliavlod.uz orqali ro'yxatdan o'tadi. Har loyiha asosida yangi mahsulot yoki xizmat yaratish asosiy talab.",
        keys: ["4 yo'nalish", "16-20 / 21-30 yosh", "2 nafar", "qizlar.raqamliavlod.uz"]
      },
      {
        q: "95. \"Raqamli avlod qizlari\" tanlovi necha bosqichda va qanday baholanadi?",
        a: "Uch bosqich: tuman/shahar (kuzgi ta'til), viloyat (qishki ta'til), respublika. Tuman bosqichida loyiha 75 ball bo'yicha: yo'nalishga moslik (10), loyiha taqdimoti (25), innovatsionlik (20), kutilayotgan natija (20). Himoya 3-5 daqiqa, taqdimot 12 sahifadan oshmasligi kerak. Respublika g'oliblari \"Chet el ta'lim sayohati\"ni va ixtisoslik bo'yicha OTMga grant asosida kirish imkonini oladi.",
        keys: ["3 bosqich", "75 ball (10+25+20+20)", "himoya 3-5 daq", "g'olib — chet el + grant"]
      },
      {
        q: "96. Qizlarni IT va sun'iy intellektga qanday jalb qilasiz?",
        a: "Avvalo \"IT — faqat o'g'il bolalar uchun\" stereotipni sindiraman — dunyoda va O'zbekistonda muvaffaqiyatli IT-ayollar misolini ko'rsataman. So'ng oddiy, qiziqarli va vizual loyihalardan boshlayman (o'z ijtimoiy sahifasini dizayn qilish, kichik ilova). O'zim dasturlash va AI asoslarini sodda tilda o'rgataman. Eng faollarni sovg'a va sertifikat bilan rag'batlantiraman. Maqsad — har qizning g'oyasini real mahsulotga aylantirish.",
        keys: ["stereotipni sindirish", "IT-ayollar misoli", "oddiy/vizual loyiha", "men o'zim o'rgataman", "rag'bat"]
      },
      {
        q: "97. \"Iqtidor ansambli\" tanlovini qanday tashkil qilasiz?",
        a: "O'zbek milliy cholg'ulari ijrosi bo'yicha respublika tanlovi. Maqsad — iqtidorli yoshlarni aniqlash, milliy san'atni rivojlantirish. Ishtirokchilar 6-10-sinf (11-16 yosh), jamoa 5-8 nafar. Uch bosqich: tuman (aprel, 2 asar), hududiy (may, 2 asar), respublika (iyun, 3 asar). Musiqa o'qituvchisi bilan hamkorlikda iqtidorlilarni aniqlab, bosqichma-bosqich tayyorlayman.",
        keys: ["milliy cholg'u", "6-10-sinf (11-16 yosh)", "5-8 nafar", "aprel/may/iyun", "musiqa o'qituvchisi bilan"]
      },
      {
        q: "98. Iqtidor ansambli tanlovida qanday talablar bor?",
        a: "Faqat jonli ijro — audio fonogramma taqiqlanadi, qo'shiq ham ijro etilmaydi, faqat milliy cholg'u. Chiqish 6 daqiqagacha. Baholash 40 ball: ijro mahorati, ansambl uyg'unligi, milliy cholg'ulardan foydalanish, sahna madaniyati, musiqiy savodxonlik va badiiy talqin. Respublika g'olibi xorijiy davlatga ta'lim sayohatini qo'lga kiritadi.",
        keys: ["jonli ijro (fonogramma yo'q)", "6 daqiqa", "40 ball", "g'olib — chet el sayohati"]
      },
      {
        q: "99. Iqtidor ansambli tanlovi o'quvchiga nima beradi?",
        a: "Milliy san'atga muhabbat, musiqiy savodxonlik, jamoaviylik va sahna madaniyatini shakllantiradi. Ayniqsa ansambl ijrosi orqali jamoada birgalikda ishlash va bir-birini his qilish ko'nikmasi rivojlanadi. Bu tanlov \"Prezident iqtidorli farzandlari\" tashabbusining ijodiy yo'nalishini to'ldiradi.",
        keys: ["milliy san'at", "musiqiy savodxonlik", "jamoaviylik", "Prezident iqtidorli farzandlari ijodiy yo'nalishi"]
      },
      {
        q: "100. \"O'quvchilar kengashi\"ni qanday tashkil qilasiz?",
        a: "O'quvchilar kengashi — bu o'quvchilarning o'zini-o'zi boshqarish organi, liderlik va yumshoq ko'nikmalarni shakllantiruvchi maktab.\nMen uni demokratik saylov orqali tashkil etaman. Bu jarayonning o'zi tarbiya — nomzodlar o'z dasturini taqdim etadi, o'quvchilar ovoz beradi. Shunda o'quvchi yoshligidanoq saylov, mas'uliyat va fuqarolik tushunchasini amalda o'rganadi.\nKengash tuzilgach, men ular bilan muntazam seminar va treninglar o'tkazaman, tashabbuslarini qo'llab-quvvatlayman, faoliyatini media va ijtimoiy tarmoqlarda yoritaman. Ularga maktab tadbirlarini o'zlari tashkil qilishni topshiraman — chunki liderlik faqat amaliyotda pishadi.\nEng muhimi — men \"lider yo'q\" degan sinfga ishonmayman. Har bir bolada liderlik salohiyati bor, faqat u ochilmagan bo'lishi mumkin. Shuning uchun passiv o'quvchilarga ham kichik mas'uliyat berib, navbatma-navbat rahbarlik qildiraman.\nMaqsadim — o'quvchilar maktabning shunchaki \"ishtirokchisi\" emas, balki egasi ekanini his qilishi. Liderlik — tug'ma emas, tarbiyalanadigan ko'nikma.",
        keys: ["o'zini-o'zi boshqarish", "demokratik saylov", "seminar/trening", "9 kishilik stol", "lider yo'q sinf bo'lmaydi", "liderlik — tarbiyalanadigan ko'nikma"]
      },
      {
        q: "101. \"Debat\" klubi o'quvchiga qanday foyda beradi?",
        a: "Bu ikki klub bir-birini to'ldiradi, shuning uchun men ularni ko'pincha birga olib boraman.\nDebat klubi o'quvchiga eng zarur soft skillsni beradi: tanqidiy va mustaqil fikrlash, notiqlik, o'z fikrini dalil bilan asoslash, raqibni hurmat qilish va tez qaror qabul qilish. Mexanizmi oddiy — bitta tezis atrofida ikki jamoa, tarafdor va qarshi, bahslashadi. Bu ko'nikmalar ayniqsa oliygoh suhbatlarida juda asqotadi.\nXorijiy tillar klubi esa chet tilini, ayniqsa ingliz tilini o'rgatadi, o'quvchini IELTS va TOEFL ga tayyorlaydi. Bugun chet tili — dunyoga ochilgan eshik.\nMen bu ikki klubni birlashtirib, ingliz tilida debat o'tkazaman — shunda o'quvchi bir vaqtda ham tilni, ham fikrlashni mashq qiladi. Speaking club formatida jonli muloqotni rivojlantiraman.\nMaqsadim — o'quvchi nafaqat bilimli, balki o'z fikrini dadil, dalil bilan va boshqa tillarda ham bayon eta oladigan shaxs bo'lib yetishishi. Bugungi dunyoda gapira olmaydigan bilim — yopiq sandiqdagi xazinaga o'xshaydi.",
        keys: ["tanqidiy fikrlash, notiqlik", "dalil bilan asoslash", "ingliz tilida debat", "IELTS/TOEFL", "gapira olmaydigan bilim — yopiq sandiq"]
      },
      {
        q: "102. \"Xorijiy tillar\" klubini qanday tashkil qilasiz?",
        a: "Haftada 2 marta, darsdan tashqari vaqtda erkin muloqot formatida (Speaking club). Qiziqarli qilish uchun ingliz tilida kinolar muhokamasi, intellektual o'yinlar (Mafia, Alias) va munozaralar. Maqsad — tilga nisbatan qo'rquvni yo'qotib, erkin gapirish ko'nikmasini shakllantirish. Klubni IELTS/CEFR sertifikatiga tayyorgarlik bilan bog'layman, chunki bu xorijiy grantlar va oliygohlarga yo'l ochadi.",
        keys: ["haftada 2 marta", "Speaking club", "kino muhokamasi", "Mafia/Alias", "IELTS/CEFR"]
      },
      {
        q: "103. \"Jadidlar izidan\" klubida nima qilasiz?",
        a: "Jadidlar izidan — kitobxonlik, milliy tarix va ma'naviyatni rivojlantiruvchi klub. Uning o'zagida milliy uyg'onish davrining sakkiz buyuk allomasi turadi.\nBular: Mahmudxo'ja Behbudiy, Abdulhamid Cho'lpon, Abdurauf Fitrat, Abdulla Avloniy, Abdulla Qodiriy, Munavvar qori Abdurashidxonov, Is'hoqxon Ibrat va G'ulom Zafariy. Ular — millatni uyg'otish va ma'rifat uchun jonini fido qilgan fidoyilar.\nKlubda men o'quvchilarni ularning asarlarini o'rganishga yo'naltiraman. Behbudiy va Avloniydan — ilm-ma'rifatga intilishni, Cho'lpon va Fitratdan — vatanparvarlik va milliy o'zlikni, Qodiriydan — mustaqil fikrlash va adabiy didni o'rgataman.\nKlub faoliyatini test, asar tahlili, erkin fikr va insho shartlari orqali olib boraman, o'quvchilarni kitobxonlikka jalb qilaman.\nMaqsadim — o'quvchida fidoyilik, ma'rifatparvarlik va vatanparvarlik fazilatlarini shakllantirish. Chunki ildizini bilgan inson — mustahkam shaxs bo'ladi. O'quvchi ajdodlari kim bo'lganini bilsa, o'zi kim ekanini ham anglaydi.",
        keys: ["8 alloma", "Behbudiy/Avloniy — ilm", "Cho'lpon/Fitrat — vatanparvarlik", "Qodiriy — mustaqil fikrlash", "ildizini bilgan — mustahkam shaxs"]
      },
      {
        q: "104. \"Eco-schools\" klubi va alohida ta'lim ehtiyojli bolalar uchun nima qilasiz?",
        a: "Bu ikki klub o'quvchining ikki xil qirrasini ochadi — biri ijodini, biri mas'uliyatini.\nEco-schools — ekologik madaniyatni shakllantiruvchi klub. Bunda amaliy ishlar ustun: ko'kalamzorlashtirish, daraxt ekish, chiqindilarni qayta ishlash, suv va energiya tejash, maktab hududini obodonlashtirish. Klub faoliyatini men aniq bosqichda olib boraman: muammoni aniqlash → eko-kengash tuzish → reja → amaliy harakat → natijani yoritish.\nEng qiziqji — Eco-schools a'zolarini Raqamli avlod qizlaridagi \"Iqlim o'zgarishi\" va \"Yashil iqtisodiyot\" yo'nalishlariga jalb qilaman, shunda ekologik g'oya real loyihaga aylanadi.\nAlohida ta'lim ehtiyojli bolalar uchun men inklyuziv to'garaklar yo'lga qo'yaman. Bunda tamoyilim aniq: bolaning nuqsoniga emas, imkoniyatiga qarayman. Psixolog va ota-ona bilan birgalikda bolaning imkoniyatini aniqlab, unga mos faoliyatni tanlayman — IT, shaxmat, art-terapiya. Tengdoshlari orasidan \"Buddy\" (ko'ngilli do'st) tizimini joriy etaman.\nMaqsadim — har bola jamoaning to'laqonli a'zosi bo'lishi. Chunki o'zi ekkan daraxtni bola asraydi — tabiatni sevgan bola esa rahmdil va mas'uliyatli inson bo'lib yetishadi.",
        keys: ["Eco: ko'kalamzor/recycling/tejash", "5 bosqich: muammo → kengash → reja → harakat → yoritish", "Raqamli avlod qizlari bog'lanish", "inklyuziv: IT/shaxmat/art-terapiya", "Buddy tizimi", "nuqsonga emas, imkoniyatga"]
      },
      {
        q: "105. \"Zakovat\" intellektual klubini tashkil etish va OAVda yoritish",
        a: "Zakovat — bilim, mantiqiy fikrlash va tezkorlikni rivojlantiruvchi intellektual klub.\nMen uni shunday tashkil etaman: o'quvchilarni 3–6 kishilik jamoalarga bo'laman va intellektual o'yin formatini quraman. Turli sohalardan — tarix, fan, adabiyot, mantiqdan — savollar tayyorlayman. Muntazam mashg'ulotlar o'tkazib, sinflararo va maktablararo turnirlar uyushtiraman, g'oliblarni rag'batlantiraman.\nOAVda yoritish masalasi. Bilim va iqtidorni ommalashtirish — boshqa o'quvchilarni ham ilhomlantirish demakdir. Buni men shunday qilaman: o'yin jarayonini sifatli suratga va videoga olaman, undan qiziqarli lavhalar, reels va postlar tayyorlayman. Bularni maktabning rasmiy sahifalarida maxsus heshteg bilan joylashtiraman, ishtirokchilarni teglab e'tibor jalb qilaman. Imkon bo'lsa, mahalliy televideniye bilan hamkorlik qilaman.\nMaqsadim — Zakovat orqali o'quvchilarda jamoaviy fikrlash, tezkor qaror va keng dunyoqarashni shakllantirish, bu o'yinni esa butun maktab faxrlanadigan brendga aylantirish. Chunki bilim ko'rsatilsa — boshqalarga ham yuqadi.",
        keys: ["3-6 kishilik jamoa", "turli soha savollar", "sinflararo/maktablararo turnir", "reels/postlar/heshteg", "mahalliy televideniye", "bilim ko'rsatilsa — boshqalarga yuqadi"]
      },
      {
        q: "106. Atlas / Milliy liboslar festivalini mablag'siz qanday o'tkazasiz?",
        a: "Bu savolning kaliti shundaki, komissiya \"mablag' yo'q\" sharti bilan sizni sinaydi. Men bunga tayyorman: mablag' yo'qligi — to'siq emas, ijodkorlikka chaqiriq.\nAvval tashkiliy guruh tuzaman — direktor, ma'naviyat o'rinbosari, san'at o'qituvchisi va men. Festival yo'nalishlarini belgilayman: atlas liboslar defilesi, \"Eng chiroyli libos\" tanlovi, milliy qo'shiq-raqs, atlas tarixi haqida sahna ko'rinishi va qo'l mehnati ko'rgazmasi.\nMablag'siz qanday? Birinchidan, mavjud imkoniyatdan foydalanaman — maktab zali va o'quvchilarning o'z milliy liboslari. Ikkinchidan, o'quvchilar va ota-onalarni jalb qilaman — libos, dekoratsiya, taom ularning ishtirokida tayyorlanadi. Uchinchidan, sahna bezagini o'quvchilarning o'zlari rasm va qo'l mehnati bilan tayyorlaydi. To'rtinchidan, festivalni ijtimoiy tarmoqda maxsus heshteg bilan yoritaman — bu kelajakda homiy jalb qilishga yo'l ochadi.\nMaqsadim ikki tomonlama: o'quvchida milliy o'zlik va estetik did, ayni paytda festivalning o'zi orqali shuni isbotlash — festival qiymati pulda emas, g'oya va ishtirokda.",
        keys: ["tashkiliy guruh", "atlas defil/qo'shiq-raqs/ko'rgazma", "maktab zali + o'z liboslar", "ota-onalar jalb", "sahna — o'quvchilar o'zi", "ijtimoiy tarmoq heshteg"]
      },
      {
        q: "107. \"Zukko / Eng yosh kitobxon\" tanlovini qanday tashkil qilasiz?",
        a: "Bu tanlov kitobxonlikni zavqli musobaqaga aylantiradigan eng yaxshi vosita.\nMen uni shunday o'tkazaman. Avval nizom va tavsiya etiladigan kitoblar ro'yxatini tuzaman, o'quvchilarga oldindan e'lon qilaman. So'ng o'quvchilar belgilangan kitoblarni o'qiydi. Tanlov bir necha shart asosida bo'ladi: kitob mazmuni bo'yicha savol-javob, asar tahlili va erkin fikr bayoni. Hakamlar baholaydi, tanlov bosqichma-bosqich o'tadi va g'oliblar rag'batlantiriladi.\nNatijalarni media va ijtimoiy tarmoqlarda yoritib, kitobxonlikni ommalashtiryaman.\nBu tanlovni men Jadidlar izidan klubi bilan bog'layman — chunki ikkalasi ham kitobxonlik va milliy ma'naviyatni rivojlantiradi.\nMaqsadim — kitobni majburiyat emas, zavqli odatga aylantirish. Chunki bola kitobni majburan emas, sevib o'qiganda, u nafaqat bilim, balki tafakkur va tasavvur ham orttiradi. Ko'p o'qigan o'quvchi — chuqur o'ylaydigan inson bo'lib yetishadi.",
        keys: ["kitoblar ro'yxati oldindan", "savol-javob/asar tahlili/erkin fikr", "bosqichma-bosqich", "Jadidlar izidan bilan bog'lash", "kitob — majburiyat emas, zavqli odat"]
      },
      {
        q: "108. Ekskursiya va kasb egalari bilan uchrashuvni qanday tashkil qilasiz?",
        a: "Bu — kasbni o'quvchiga jonli, real ko'rsatishning eng ta'sirchan usuli. Men uni uch bosqichda olib boraman.\nTayyorgarlik bosqichi: avval o'quvchilarning qiziqishini aniqlayman, so'ng korxona yoki kasb egalari bilan oldindan kelishaman, sana va transportni tashkil qilaman, xavfsizlikni ta'minlayman, ota-ona roziligini olaman.\nO'tkazish bosqichi: ekskursiyada o'quvchilar ish jarayonini o'z ko'zi bilan ko'radi, uchrashuvda esa kasb egasiga bevosita savol beradi. Mahorat darsi tashkil etilsa — yanada yaxshi.\nYakuniy bosqich: tadbirdan so'ng muhokama o'tkazaman — \"Nima yoqdi? Bu kasbni tanlaysanmi?\" So'ng natijani har bir o'quvchining \"Ijtimoiy portfolio\"siga kiritaman.\nNima uchun bu muhim? Chunki o'quvchi kasb haqida yuzlab video ko'rgandan ko'ra, bir marta uni o'z ko'zi bilan ko'rgani kuchliroq ta'sir qiladi. Maqsadim — kasbni quruq nazariya emas, real hayot sifatida tanishtirish. Ko'rgan bola — ongli tanlaydi.",
        keys: ["3 bosqich: tayyorgarlik/o'tkazish/yakun", "ota-ona roziligi", "kasb egasiga savol", "Ijtimoiy portfolioga kiritish", "ko'rgan bola — ongli tanlaydi"]
      },
      {
        q: "109. Iqtidorli o'quvchi loyihasini qanday ommalashtirasiz?",
        a: "Iqtidorli o'quvchining mehnati e'tirofga sazovor bo'lishi kerak — bu ham adolat, ham boshqalar uchun ilhom.\nMen buni bir necha yo'l bilan qilaman. Birinchidan, o'quvchining loyihasini media va ijtimoiy tarmoqlarda yoritaman. Ikkinchidan, uni tegishli tanlov va festivallarga yo'naltiraman — tuman, viloyat, respublika bosqichlariga. Uchinchidan, loyihani maktab va tuman taqdimotlarida namoyish etaman. To'rtinchidan, natijani \"Ijtimoiy portfolio\"ga kiritaman — bu kelajakda oliyohga kirishda asqotadi.\nBunda mening maqsadim ikki tomonlama. Bir tomondan, o'quvchining mehnati qadrlanadi, uning o'ziga ishonchi ortadi. Ikkinchi tomondan — bu boshqa o'quvchilarni ham ilhomlantiradi. Bitta o'quvchining muvaffaqiyati ko'rsatilsa, o'nlab o'quvchi \"men ham qila olaman\" deb harakatga keladi.\nDemak iqtidorni ommalashtirish — bitta bolani emas, butun maktabni rivojlantiradigan kuch. Yashiringan iqtidor — yonmagan chiroq; men uni butun maktabga ko'rsataman.",
        keys: ["media/ijtimoiy tarmoq", "tuman/viloyat/respublika tanlovlari", "maktab taqdimoti", "Ijtimoiy portfolio", "1 muvaffaqiyat — o'nlab ilhom", "yashiringan iqtidor — yonmagan chiroq"]
      }
    ]
  },

  {
    id: "tarbiya",
    title: "6-mezon: Tarbiya va ijtimoiy-madaniy ko'nikmalar",
    icon: "🌳",
    intro: "Vatanparvarlik, milliy qadriyatlar, bag'rikenglik, kitobxonlik (savol 44-60). Tamoyil: tarbiya MUHIT, NAMUNA va AMALIY HARAKAT bilan shakllanadi.",
    items: [
      {
        q: "44. O'quvchilarda vatanparvarlik ruhini qanday tarbiyalaysiz?",
        a: "Vatanparvarlik — bu bayram kuni aytilgan chiroyli so'zlar emas, balki har kuni o'quvchi qalbiga tomchilab singdiriladigan his-tuyg'u. Men buni uch qatlam orqali tarbiyalayman.\nBirinchi qatlam — bilim, ya'ni aql orqali. O'quvchi vatanini sevishi uchun avval uni bilishi kerak. \"Jadidlar izidan\" klubi, milliy tarix darslari va davlat ramzlarining ma'nosi orqali o'quvchida vatan haqida chuqur bilim shakllantiraman.\nIkkinchi qatlam — his, ya'ni yurak orqali. Bilim aqlni ishontiradi, lekin vatanparvarlik yurakdan keladi. Shuning uchun tarixiy obidalarga — Registon, Ichan qal'aga ekskursiyalar uyushtiraman. O'quvchi o'sha yerda turganida \"men shu buyuk xalqning vorisiman\" deb his qiladi. Faxriylar bilan uchrashuvlar uyushtiraman.\nUchinchi qatlam — amal, ya'ni qo'l orqali. Eng kuchli vatanparvarlik — ish bilan ko'rsatilgani. Ko'kalamzorlashtirish, obodonlashtirish, faxriylarga yordam aksiyalari orqali o'quvchi vatanga amaliy mehr ko'rsatadi.\nVatanni himoya qilish ruhi uchun esa milliy qahramonlar — Jaloliddin Manguberdi, Amir Temur va jadid bobolar fidoyiligi haqida hikoya qilaman.\nMaqsadim — o'quvchi \"Mustaqillik — bu mening imkoniyatim va mas'uliyatim\" deb anglashi. Chunki o'quvchi vatanini bilsa — sevadi, sevsa — asraydi.",
        keys: ["uch qatlam: bilim/his/amal", "Registon, Ichan qal'a", "faxriylar bilan uchrashuv", "Manguberdi, Temur", "Mustaqillik — imkoniyat va mas'uliyat"]
      },
      {
        q: "45. O'zbekiston Mustaqilligi qadrini qanday shakllantirasiz?",
        a: "Mustaqillik qadrini men o'quvchida taqqoslash va anglash orqali shakllantiraman.\nBirinchidan, tarixiy ong beraman — mustaqillikka qadar va undan keyingi davrni solishtirib ko'rsataman. O'quvchi bugungi imkoniyatlar — bepul ta'lim, xorijda o'qish, erkin rivojlanish — qaerdan kelganini anglashi kerak.\nIkkinchidan, faxriylar va guvohlar bilan davra suhbatlari uyushtiraman — ularning so'zi kitobdan chuqurroq ta'sir qiladi.\nUchinchidan, \"Mening Vatanim — mening faxrim\" kabi loyiha va insholarga o'quvchini jalb qilaman.\nTo'rtinchidan, milliy bayramlar va davlat ramzlarini ulug'lash orqali bu tuyg'uni mustahkamlayman.\nMaqsadim — o'quvchi mustaqillikni tayyor, o'z-o'zidan kelgan narsa emas, balki ajdodlar orzusi, qadranishi lozim bo'lgan boylik deb bilishi. O'quvchi \"Mustaqillik — bu mening imkoniyatim\" deb anglagan da, mustaqillik tarbiyasi o'z mevasini bergan bo'ladi.",
        keys: ["tarixiy ong", "davrlarni solishtirish", "faxriylar davra suhbati", "Mening Vatanim — faxrim", "Mustaqillik — imkoniyatim"]
      },
      {
        q: "46. Davlat tiliga hurmatni maktabda qanday amalga oshirasiz?",
        a: "Davlat tili — bu milliy o'zlik va birlik ramzidir, men unga hurmatni zavq va g'urur orqali singdiraman.\nBirinchidan, tilning maqomi va ahamiyatini tushuntiraman — davlat tili xalqni birlashtiruv ko'prik ekanini. Ikkinchidan, tilni quruq qoida orqali emas, qiziqarli va amaliy o'rgataman: xalq ertaklari, dostonlar, maqollar, rol o'yinlari orqali. Uchinchidan, kitobxonlik orqali — Navoiy, Qodiriy, Cho'lpon asarlari til boyligini ko'rsatadi. To'rtinchidan, \"har kuni bitta yangi so'z\" odatini, til olimpiadalari va insho tanlovlarini joriy etaman.\nEng muhimi — beshinchidan, men o'zim sof, toza o'zbek tilida gapirib o'rnak bo'laman. Chunki ustoz qanday gapirsa, shogird ham shunday gapiradi.\nMaqsadim — o'quvchida ona tiliga muhabbat va g'urur shakllantirish. Til — bu shunchaki muloqot vositasi emas, balki millatning ruhi va xotirasidur. Tilini asragan xalq — o'zligini asraydi.",
        keys: ["davlat tili — birlik ko'prigi", "ertak/doston/maqol", "har kuni bitta so'z", "til olimpiadasi", "o'zim o'rnak", "tilini asragan — o'zligini asraydi"]
      },
      {
        q: "47. \"O'zbekistonlik\" tuyg'usini shakllantirishda maktabning roli?",
        a: "Maktab — \"o'zbekistonlik\" tuyg'usi shakllanadigan asosiy o'choq va poydevor. Chunki bola o'z o'zligini aynan maktab yillarida anglab yetadi.\nMaktab buni bir necha yo'l bilan amalga oshiradi. Birinchidan, milliy tarix, ona tili va adabiyotni chuqur o'rgatish — Navoiy, Qodiriy, Amir Temur, Mirzo Ulug'bek orqali o'quvchi o'z xalqining buyukligini his qiladi. Ikkinchidan, milliy qadriyatlar va an'analar — Navro'z kabi bayramlar orqali. Uchinchidan, davlat ramzlari va vatanparvarlik tadbirlari. To'rtinchidan, \"Jadidlar izidan\" klubi va kitobxonlik orqali ajdodlar merosi.\nMaslahatchi sifatida men bu jarayonni faollashtiraman — o'quvchida o'z yurtiga mansubllik, g'urur va daxldorlik tuyg'usini uyg'otaman.\nMaqsadim — o'quvchi o'zini davlatning shunchaki fuqarosi emas, balki uning faol, daxldor va mas'ul a'zosi deb his qilishi. Chunki \"o'zbekistonlik\" — bu pasportdagi yozuv emas, qalbdagi tuyg'udir.",
        keys: ["asosiy o'choq", "Navoiy/Qodiriy/Temur/Ulug'bek", "Navro'z", "Jadidlar izidan", "pasportdagi yozuv emas, qalbdagi tuyg'u"]
      },
      {
        q: "48. Milliy va umuminsoniy qadriyatlarni qanday shakllantirasiz?",
        a: "Men o'quvchida ikki qanotni — milliy va umuminsoniy qadriyatlarni — barobar rivojlantiraman. Chunki inson bir qanot bilan ucha olmaydi.\nMilliy qadriyatlarni men tarixiy obidalarga ekskursiyalar, \"Jadidlar izidan\" klubi orqali ma'rifatparvar ajdodlar merosi, kitobxonlik loyihalari va milliy bayramlar orqali singdiraman. Bu o'quvchida o'z ildiziga sodiqlik shakllantiradi.\nUmuminsoniy qadriyatlarni esa \"Debat\" va \"Xorijiy tillar\" klublari orqali — boshqa madaniyatlarni hurmat qilish, \"Eco-schools\" orqali atrof-muhitga mas'uliyat, bag'rikenglik va insonparvarlik orqali beraman.\nMening yondashuvim shu: milliy va umuminsoniy qadriyatlar bir-biriga zid emas. Aksincha, o'z ildiziga mahkam turgan inson boshqa madaniyatlarni ham hurmat qila oladi. Ildizini bilmagan daraxt shamolda yiqiladi.\nMaqsadim — o'z xalqini sevadigan, ayni paytda dunyoga ochiq, bag'rikeng inson tarbiyalash. Ya'ni milliy o'zligiga sodiq, lekin jahonga peshvoz chiqadigan avlod.",
        keys: ["ikki qanot", "milliy: obida/Jadidlar/kitobxonlik", "umuminsoniy: Debat/Xorijiy til/Eco", "ildizini bilmagan daraxt", "milliy o'zligiga sodiq, jahonga peshvoz"]
      },
      {
        q: "49. Bag'rikenglik (tolerantlik)ni qanday shakllantirasiz?",
        a: "Bag'rikenglik — bu yuksak madaniyat belgisidir, va men buni o'quvchida ongli ravishda shakllantiraman.\nBirinchidan, o'quvchilarga O'zbekiston — ko'pmillatli, ko'pkonfessiyali, bag'rikeng mamlakat ekanini, har bir inson qadrli ekanini tushuntiraman. Ikkinchidan, turli madaniyatlarni o'rganaydigan tadbirlar — \"Do'stlik festivali\", xalqlar urf-odatlari kechalari — uyushtiraman. Uchinchidan, \"Debat\" klubi orqali boshqacha fikrni hurmat qilishni o'rgataman. To'rtinchidan, jamoaviy loyihalarda turli bolalarni birga ishlashga undayman.\nMening maqsadim — o'quvchi o'zidan farq qiluvchi insonni — boshqa millat, boshqa fikr, boshqa e'tiqod egasini — hurmatga loyiq deb bilishi.\nChunki bag'rikeng inson dunyoda tinch yashaydi va boshqalarga ham tinchlik olib keladi. Haqiqiy kuch — boshqalarni o'zingga o'xshatish emas, balki turlichilikni hurmat qila bilishdir.",
        keys: ["ko'pmillatli, ko'pkonfessiyali", "Do'stlik festivali", "Debat — boshqacha fikr", "turlichilikni hurmat qilish"]
      },
      {
        q: "50. Milliy va shaxsiy o'zlikni anglash nima?",
        a: "O'zlikni anglash — bu insonning \"men kimman?\" degan savolga javob topishidir, va men buni ikki darajada rivojlantiraman.\nMilliy o'zlik — o'quvchining o'zini buyuk xalqning vorisi deb bilishi. Buni men milliy tarix, til, adabiyot va ajdodlar merosi orqali shakllantiraman. Misol: \"Jadidlar izidan\" klubida o'quvchi Behbudiy va Fitrat merosini o'rganadi, Registonga borganida \"men shu xalqning farzandiman\" degan g'ururni his qiladi.\nShaxsiy o'zlik — o'quvchining o'z qiziqishi, qobiliyati va kuchli tomonini bilishi. Buni men psixolog bilan birgalikda diagnostika, kasbga yo'naltirish va klublar orqali ochaman.\nBu ikkasi bir-birini to'ldiradi: o'zini bilgan bola o'z yo'lini topadi, ildizini bilgan bola esa mustahkam turadi.\nMaqsadim — o'quvchi ham \"men kimman\" (shaxsan), ham \"men qaysi xalqning farzandiman\" (milliy) degan savollarga aniq javob topishi. Chunki o'zini anglagan inson — ildizi mustahkam daraxtdir.",
        keys: ["milliy o'zlik: xalq vorisi", "shaxsiy o'zlik: qiziqish+qobiliyat", "Jadidlar izidan / Registon", "psixolog+diagnostika", "ildizi mustahkam daraxt"]
      },
      {
        q: "51. Davlat ramzlariga hurmatni qanday shakllantirasiz?",
        a: "Davlat ramzlari — Bayroq, Gerb va Madhiya — milliy mustaqillik timsolidir. Men ularga hurmatni qalbdan, ongli his orqali shakllantiraman.\nBirinchidan, har bir ramzning ma'nosi va tarixini tushuntiraman — Bayroqdagi har bir rang, Herbdagi har bir timsol nimani anglatishini. O'quvchi ma'nosini bilsa, hurmat o'z-o'zidan paydo bo'ladi.\nIkkinchidan, rasmiy marosimlarni — bayroq ko'tarish, madhiyani birga ijro etish — tantanavon va chin dildan o'tkazaman.\nUchinchidan, \"Davlat ramzlari kuni\", viktorina va tanlovlar uyushtiraman.\nTo'rtinchidan — eng muhimi — men o'zim ramzlarga chuqur hurmat ko'rsatib, o'rnak bo'laman.\nMaqsadim — ramzlarga hurmat o'quvchining qalbidan, ongli tuyg'udan kelib chiqishi, majburiy marosim emas. Chunki davlat ramziga hurmat — bu Vatanga, o'z mustaqilligiga bo'lgan hurmatning ko'rinishidir.",
        keys: ["Bayroq, Gerb, Madhiya", "ma'no+tarix", "tantanavon ijro", "Davlat ramzlari kuni viktorina", "o'zim o'rnak"]
      },
      {
        q: "52. O'quvchilarni tarixiy obidalarga sayohatni qanday tashkil qilasiz?",
        a: "Tarixiy obidalarga sayohat — vatanparvarlikni amaliy his qildiradigan eng ta'sirli usul. Men uni besh bosqichda tashkil etaman.\nBirinchi bosqich — tayyorgarlik: obidani, ruxsatni, transportni belgilayman, ota-ona roziligini olaman va xavfsizlikni ta'minlayman.\nIkkinchi bosqich — ma'rifiy tayyorgarlik: borishdan oldin o'quvchilarga obida haqida qisqacha ma'lumot beraman, toki ular borganda \"bu nima?\" emas, \"ha, men buni bilaman!\" deb borsin.\nUchinchi bosqich — jarayon: obidada tarixni va ahamiyatni qiziqarli tushuntiraman, savol-javob o'tkazaman, o'quvchilar o'z ko'zi bilan ko'radi va his qiladi.\nTo'rtinchi bosqich — yakun: muhokama o'tkazaman — \"Nima ta'sir qildi? Nimani his qildingiz?\"\nBeshinchi bosqich — mustahkamlash: taassurotlarni insho yoki taqdimot qildiraman, natijani portfolioga kiritaman.\nMaqsadim — o'quvchi tarixni kitobda emas, o'z ko'zi bilan ko'rib his qilsin. Chunki ko'rgan va his qilgan bilim — eng mustahkam bilimdir.",
        keys: ["5 bosqich", "tayyorgarlik → ma'rifiy → jarayon → yakun → mustahkamlash", "ko'rgan va his qilgan bilim — mustahkam"]
      },
      {
        q: "53. Ekologik madaniyatni qanday shakllantirasiz?",
        a: "Ekologik madaniyat — bu tabiatga mas'uliyat va mehr, va men buni amaliyot orqali shakllantiraman.\nBirinchidan, \"Eco-schools\" klubini tashkil etaman. Ikkinchidan, amaliy aksiyalar o'tkazaman: ko'kalamzorlashtirish, daraxt va gul ekish, chiqindilarni qayta ishlash, suv va energiya tejash. Uchinchidan, \"yashil burchak\", ekologik tanlov va plakat ko'riklari uyushtiraman. To'rtinchidan, qushlar uchun donxona, hayvonlarga g'amxo'rlik orqali jonzotlarga mehr singdiraman. Beshinchidan, kundalik odatlarni o'zgartiraman — chiroqni o'chirish, suvni tejash, axlatni ajratish.\nEng muhimi — Eco-schools a'zolarini \"Raqamli avlod qizlari\"dagi \"Iqlim o'zgarishi\" va \"Yashil iqtisodiyot\" yo'nalishlariga jalb qilaman, shunda ekologik g'oya real loyihaga aylanadi.\nMaqsadim — ekologik ong o'quvchining kundalik odatiga aylanishi. Chunki o'zi ekkan daraxtni bola asraydi — tabiatni sevgan bola esa rahmdil va mas'uliyatli inson bo'lib yetishadi.",
        keys: ["Eco-schools", "ko'kalamzor/recycling/tejash", "qushlar donxonasi", "Raqamli avlod qizlari bog'lanish", "o'zi ekkan daraxtni asraydi"]
      },
      {
        q: "54. Kitobxonlikka qiziqishni qanday oshirasiz?",
        a: "Kitobxonlik — tafakkurning ozug'asi, va men buni majburiyat emas, zavqli odatga aylantirish ga harakat qilaman.\nBirinchidan, \"Jadidlar izidan\" klubini faollashtiraman. Ikkinchidan, kitobxonlik tanlovlari — \"Yil kitobxoni\", kitob muhokamalar, mualliflar bilan uchrashuvlar uyushtiraman. Uchinchidan, maktab kutubxonasini faollashtiraman. To'rtinchidan — zamonaviy yondashuv — o'quvchilarni ijtimoiy tarmoqda kitob taqrizi yozishga rag'batlantiraman, shunda o'qish va media-savodxonlik birlashadi.\nMening yondashuvim shu: men kitobni majburan \"o'qi\" deb buyurmayman, balki kitobni qiziqarli, zavqli qilib ko'rsataman. Bola majburan o'qisa — zerikadi, sevib o'qisa — rivojlanadi.\nMaqsadim — kitobni bola uchun do'stga aylantirish. Chunki ko'p o'qigan o'quvchi — chuqur o'ylaydigan, keng dunyoqarashli inson bo'lib yetishadi. Kitob o'qigan bola — ming hayot yashaydi.",
        keys: ["Jadidlar izidan", "Yil kitobxoni", "kitob muhokamasi", "ijtimoiy tarmoqda taqriz", "kitob — do'st", "ming hayot yashaydi"]
      },
      {
        q: "55. Jadid allomalardan kimlarni bilasiz va ulardan nimani o'rgatasiz?",
        a: "Jadid allomalar — milliy uyg'onish va ma'rifatparvarlik bayroqdorlari. Men o'quvchilarga sakkiz buyuk allomani o'rgataman:\nMahmudxo'ja Behbudiy, Abdulhamid Cho'lpon, Abdurauf Fitrat, Abdulla Avloniy, Abdulla Qodiriy, Munavvar Qori Abdurashidxonov, Is'hoqxon Ibrat va G'ulom Zafariy.\nUlardan nimani o'rgataman? Behbudiy va Avloniydan — ilm-ma'rifatga intilishni. Cho'lpon va Fitratdan — vatanparvarlik va milliy o'zlikni. Abdulla Qodiriydan — mustaqil, tanqidiy fikrlash va adabiy didni. Munavvar Qoridan — maorif va xalqni uyg'otishni.\nBu allomalar umumiy bir narsani o'rgatadi: ular xalqni jaholatdan qutqarish uchun jonini fido qildi, bilim va ma'rifatni eng katta qurol deb bildi.\nMaqsadim — o'quvchida fidoyilik, ma'rifatparvarlik va vatanparvarlik fazilatlarini shakllantirish. Chunki jadidlar bizga bir saboq qoldirdi: millatni faqat bilim va ma'rifat yuksaltiradi. Bugun ularning izidan borish — eng katta vatanparvarlikdir.",
        keys: ["8 alloma", "Behbudiy/Avloniy — ilm", "Cho'lpon/Fitrat — vatanparvarlik", "Qodiriy — tanqidiy fikr", "millatni bilim yuksaltiradi"]
      },
      {
        q: "56. O'quvchilarga \"O'zbekiston fuqarosi\" tushunchasini qanday singdirasiz?",
        a: "1) Konstitutsiya asosida fuqaroning huquq va burchlarini sodda tilda tushuntiraman — \"Mening huquqim va burchim\" davra suhbatlari; 2) fuqarolik mas'uliyati (qonunga hurmat, jamiyatga foyda); 3) \"O'quvchilar kengashi\" saylovlari va volontyorlik orqali amaliy faollik; 4) raqamli fuqarolik — internet madaniyati, axborot xavfsizligi, feyk axborotni tanish. Maqsad — o'quvchi o'zini davlatning faol va daxldor a'zosi deb his qilishi.",
        keys: ["Konstitutsiya huquq+burch", "mas'uliyat", "O'quvchilar kengashi/volontyorlik", "raqamli fuqarolik (feyk axborot)"]
      },
      {
        q: "57. Vatanni himoya qilish tuyg'usini qanday shakllantirasiz?",
        a: "Vatanparvarlik — bu bayram kuni aytilgan chiroyli so'zlar emas, balki har kuni o'quvchi qalbiga tomchilab singdiriladigan his-tuyg'u. Men buni uch qatlam orqali tarbiyalayman.\nBirinchi qatlam — bilim, ya'ni aql orqali. \"Jadidlar izidan\" klubi, milliy tarix darslari va davlat ramzlarining ma'nosi orqali o'quvchida vatan haqida chuqur bilim shakllantiraman.\nIkkinchi qatlam — his, ya'ni yurak orqali. Tarixiy obidalarga — Registon, Ichan qal'aga ekskursiyalar uyushtiraman. Faxriylar bilan uchrashuvlar uyushtiraman.\nUchinchi qatlam — amal, ya'ni qo'l orqali. Ko'kalamzorlashtirish, obodonlashtirish, faxriylarga yordam aksiyalari orqali o'quvchi vatanga amaliy mehr ko'rsatadi.\nVatanni himoya qilish ruhi uchun esa milliy qahramonlar — Jaloliddin Manguberdi, Amir Temur va jadid bobolar fidoyiligi haqida hikoya qilaman.\nMaqsadim — o'quvchi \"Mustaqillik — bu mening imkoniyatim va mas'uliyatim\" deb anglashi. Chunki o'quvchi vatanini bilsa — sevadi, sevsa — asraydi.",
        keys: ["uch qatlam: bilim/his/amal", "Registon, Ichan qal'a", "faxriylar", "Manguberdi, Temur", "Mustaqillik — imkoniyat va mas'uliyat"]
      },
      {
        q: "58. Halollik, va'daga vafo, qariyalarga hurmatni qanday singdirasiz?",
        a: "Bu uchala qadriyat — insonning ma'naviy poydevori, va men ularni amaliyot hamda o'rnak orqali singdiraman.\nHalollik — eng oliy fazilat. Men o'quvchilarga halol mehnat barakali ekanini, o'g'irlik, aldash, ko'chirishning qoralanishini tushuntiraman. Halollik dars, atrof-muhit va eng muhimi, ustoz o'rnagidan yuqadi. \"Halol topilgan bir so'm — harom yo'l bilan topilgan mingdan afzal.\"\nVa'daga vafo — insonning obro'si. So'zida turish — sharaf belgisi. Men o'quvchilarga kichik mas'uliyat berib, uni bajarishga o'rgataman, \"va'da — qarz\" qadriyatini singdiraman va o'zim so'zimda turib o'rnak bo'laman.\nQariyalarga hurmat — milliy qadriyatimiz. Faxriylar bilan uchrashuvlar, g'amxo'rlik aksiyalari orqali o'quvchida keksa avlodga hurmat va minnatdorlik tuyg'usini shakllantiraman.\nEng muhimi — bu qadriyatlarni men faqat aytib emas, o'zim amalda ko'rsatib o'rgataman. Chunki tarbiya — so'z bilan emas, o'rnak bilan beriladi.",
        keys: ["halollik — Halollik do'koni", "va'da — qarz, dedlayn", "qariyalarga hurmat — Nuroniylar duosi", "tarbiya so'z emas, o'rnak"]
      },
      {
        q: "59. Estetik did va san'atga qiziqishni qanday rivojlantirasiz?",
        a: "Men o'quvchining ham ruhini, ham tanini barobar tarbiyalashni muhim deb bilaman — chunki barkamol inson ikkasida ham yetuk bo'ladi.\nEstetik did va san'atni men \"Turon teatr\" orqali sahna madaniyati va notiqlik, \"Iqtidor ansambli\" orqali musiqa va ijodkorlik orqali rivojlantiraman. Festival, ko'rik-tanlov va madaniy tadbirlar uyushtiraman, iqtidorlilarni san'at maktabi o'qituvchilariga biriktiraman. Maqsad — har o'quvchining ijodkorligini uyg'otish.",
        keys: ["Turon teatr", "Iqtidor ansambli", "festival/tanlov", "san'at maktabi o'qituvchisi", "ijodkorlikni uyg'otish"]
      },
      {
        q: "60. Sport va sog'lom turmush tarzini qanday targ'ib qilasiz?",
        a: "Sport va sog'lom turmushni esa sport musobaqalari va to'garaklar (futbol, voleybol, shaxmat), sog'liq kunlari, jismoniy faollik odatini shakllantirish orqali targ'ib qilaman. Zararli odatlardan ogohlantiram.\nMening qarashim shu: barkamol avlod — bu faqat bilimli emas, balki estetik didli, jismonan sog'lom va ruhan barqaror insondir. Sog' tanda — sog' aql, go'zallikni tushungan qalbda esa — ezgulik yashaydi.",
        keys: ["futbol/voleybol/shaxmat", "sog'liq kunlari", "zararli odatlardan ogohlantirish", "sog' tanda — sog' aql"]
      },
      {
        q: "61. Ijtimoiy soha xodimi qanday xususiyatga ega bo'lishi kerak?",
        a: "Ijtimoiy soha xodimi — bu insonlar bilan, ayniqsa bolalar bilan ishlaydigan inson, shuning uchun unda maxsus fazilatlar bo'lishi shart.\nBirinchisi — empatiya, ya'ni hamdardlik: o'zganing holatini tushuna bilish. Ikkinchisi — muloqot va faol tinglash: o'z fikrini aniq bayon etish va boshqalarni eshita bilish. Uchinchisi — sabr va bag'rikenglik: har xil inson bilan til topa olish. To'rtinchisi — mas'uliyat va halollik, shu jumladan maxfiylik — insonning sirini saqlash. Beshinchisi — psixologik barqarorlik: qiyin vaziyatda o'zini yo'qotmaslik. Oltinchisi — xolislik: hech kimni ajratmay, adolatli bo'lish.\nMen bu fazilatlarni eng muhim deb bilaman, chunki ijtimoiy sohada bilim yetarli emas — bilimni qanday yetkazish, insonga qanday munosabatda bo'lish ham muhim.\nMening qarashim shu: hard skills — \"nima qila olishing\", soft skills — \"qanday qila olishing\". Ijtimoiy sohada esa aynan \"qanday\"i hal qiluvchi. Chunki biz inson qalbi bilan ishlaymiz — bu esa eng nozik va eng mas'uliyatli ishdir.",
        keys: ["empatiya", "muloqot va faol tinglash", "sabr va bag'rikenglik", "maxfiylik", "psixologik barqarorlik", "xolislik", "hard skills vs soft skills", "inson qalbi bilan ishlaymiz"]
      }
    ]
  },

  {
    id: "keyslar",
    title: "5-mezon: Muammoli vaziyatlar (keyslar)",
    icon: "⚖️",
    intro: "UNIVERSAL ALGORITM (har keysda): 1) Ayblamayman, tinglayman → 2) Sababini aniqlayman → 3) Dalil/misol bilan tushuntiraman → 4) Hamkorlik (psixolog/ota-ona/ma'muriyat) → 5) Maqsad: bola manfaati (savol 61-86).",
    items: [
      {
        q: "61. Bola bir kasbni, ota-ona boshqasini xohlaydi — kimning fikri muhim?",
        a: "Bolaning kelajagi haqida gap ketganda, eng muhim omil — bolaning o'z qobiliyati va qiziqishi. Chunki kasbni umr bo'yi bola yashaydi, ota-ona emas.\nLekin men ota-onani hech qachon ayblamayman — ularning xohishi ortida farzand uchun g'amxo'rlik turibdi. Shuning uchun men o'quvchi bilan suhbatlashib, qobiliyatini psixologik test natijalari bilan tasdiqlayman. So'ng ota-onaga bu obyektiv ma'lumotni dalil sifatida ko'rsataman — quruq gap bilan emas.\nAgar ziddiyat saqlansa, psixolog ishtirokida uch tomon — o'quvchi, ota-ona va men — birga o'tirib kelishuvga erishaman.\nMening ishonchim shu: eng yaxshi qaror — bola, ota-ona va maslahatchi birgalikda qabul qilgan qaror. Chunki sevib tanlangan kasb umr bo'yi quvonch, majburan tanlangani esa umr bo'yi afsus bo'ladi.",
        keys: ["bola fikri muhimroq", "ota-onani ayblamayman", "psixologik test — dalil", "uch tomon kelishuv", "sevib tanlangan — quvonch"]
      },
      {
        q: "62. Qiz grant yutdi, ota-ona qarshi — qanday ko'ndirasiz?",
        a: "Bu keyslarning hammasi bir mantiqqa bo'ysunadi: qizning intilishini hurmat qilaman, ota-onaning xavotirini esa tushunaman.\nQiz grant yutgan bo'lsa: men ota-onani ayblamayman, xavotirini eshitaman. So'ng faktlarni ko'rsataman — grant qizning o'z mehnati bilan qo'lga kiritilgan imkoniyat, ta'lim esa unga mustaqillik beradi. Ta'limli qiz — ertaga mustahkam oilaning asosi.\nKerak bo'lsa murosa taklif qilaman — yaqin shahardagi oliyoh, doimiy aloqa.\nMen ota-onaga bir gapni aytaman: \"Qizingizni qo'llab-quvvatlasangiz, ertaga u sizning eng katta faxringizga aylanadi.\" Bola orzusi — har doim birinchi o'rinda.",
        keys: ["xavotirini eshitaman", "grant — o'z mehnati", "ta'limli qiz — mustahkam oila", "murosa taklif", "bola orzusi birinchi"]
      },
      {
        q: "63. Qiz harbiy/model bo'lmoqchi, ota-ona qarshi?",
        a: "Qiz harbiy yoki model bo'lmoqchi bo'lsa ham xuddi shunday: qobiliyatini baholayman, ota-onaga bu sohalarning bugungi real imkoniyatlarini dalil bilan tushuntiraman. Masalan, moda — bu dizayn va brending kabi katta industriya; harbiy sohada esa ayollar uchun ham munosib o'rin bor.\nMen ota-onaga bir gapni aytaman: \"Qizingizni qo'llab-quvvatlasangiz, ertaga u sizning eng katta faxringizga aylanadi.\" Bola orzusi — har doim birinchi o'rinda.",
        keys: ["qobiliyatini baholash", "moda — dizayn va brending", "harbiy — ayollarga ham munosib o'rin", "dalil bilan tushuntirish", "bola orzusi birinchi"]
      },
      {
        q: "64. Bola IT/matematikaga qiziqadi, ota-ona shifokor bo'lishini xohlaydi?",
        a: "Bu — eng nozik keyslardan biri, chunki ikkala tomon ham haq.\nMen avval bolaning matematik qobiliyatini test va o'quv natijalari bilan tasdiqlayman. So'ng ota-onani ayblamasdan, obyektiv ma'lumotni tushuntiraman.\nEndi eng muhim qadam — \"oltin o'rta\"ni topish. Men ota-onaga shuni ko'rsatamanki, matematikaga moyillik bilan ham obro'li, daromadli kasblar bor: data science, sun'iy intellekt, moliya muhandisligi, bioinformatika. Hatto tibbiyot bilan IT birlashgan — tibbiy texnologiya, raqamli diagnostika kabi yangi sohalar mavjud. Demak bolaning qobiliyati ham, ota-onaning orzusi ham bitta nuqtada uchrashishi mumkin.\nPsixolog ishtirokida uch tomon kelishuvga erishaman.\nMening yondashuvim — ziddiyatni g'olib-mag'lubga aylantirmaslik, balki ikkala tomon ham yutadigan yechim topish. Chunki maqsad — kim haqligini isbotlash emas, bolaning baxtli kelajagi.",
        keys: ["oltin o'rta", "data science/AI/bioinformatika", "tibbiy texnologiya", "uch tomon kelishuv", "g'olib-mag'lub emas, ikki tomon yutadi"]
      },
      {
        q: "65. Yevropa madaniyatiga qiziqadi, ota-ona milliy qadriyat tarafdori?",
        a: "Muvozanat yarataman: boshqa madaniyatni o'rganish dunyoqarashni kengaytiradi, lekin milliy ildizga sodiqlik muhim. Ota-onaga taqiqlash emas, yo'naltirish kerakligini tushuntiraman. Maqsad — milliy o'zligiga sodiq, dunyoga ochiq inson.",
        keys: ["muvozanat", "taqiqlash emas, yo'naltirish", "ildizga sodiq, dunyoga ochiq"]
      },
      {
        q: "66. O'quvchi o'qishni ham, kasbni ham xohlamayapti?",
        a: "Men bir tamoyilga ishonaman: \"qiziqmaydigan bola yo'q — o'z qiziqishini hali topmagan bola bor.\"\nAvval ayblamayman va shoshilmayman. Psixolog bilan birgalikda sababini aniqlayman — bu oilaviy muammomi, o'ziga ishonchsizlikmi, yoki bola shunchaki o'zini topmaganmi?\nSo'ng uni turli faoliyatga jalb qilaman — Turon teatr, Debat, sport, Eco-schools. Maqsad — bolaga turli eshiklarni ko'rsatish, balki biror joyda uning chirog'i yonadi.\nEng muhimi — unga kichik, erishish mumkin bo'lgan vazifa beraman. Birinchi kichik muvaffaqiyat bolada uchqun yoqadi, o'sha uchqundan qiziqish olovi alangalaydi.\nMen sabr bilan, individual yondashaman. Chunki har bir bolada ochilmagan iqtidor bor — uni topish va uyg'otish mening vazifam. Bola loqayd emas — u faqat o'zini hali kashf etmagan.",
        keys: ["qiziqmaydigan bola yo'q", "psixolog bilan sabab", "turli faoliyatga jalb", "kichik vazifa — uchqun", "bola o'zini kashf etmagan"]
      },
      {
        q: "67. Iqtidorli o'quvchining bilimi pasayib ketdi?",
        a: "Iqtidorli o'quvchining bilimi pasayishi — bu menga signal: biror narsa noto'g'ri ketyapti.\nMen avval panikaga tushmaymen va ayblamayman. Psixolog bilan birgalikda sababini aniqlayman — bu charchoqmi, oilaviy muammomi, sog'liqmi, motivatsiya pasaygami yoki do'stlar ta'sirimi?\nSababga qarab individual reja tuzaman. Ota-ona bilan ishlayman, kerak bo'lsa yukini yengillashtiraman. So'ng unga yangi maqsad va rag'bat beraman — tanlov, oliyoh orzusi kabi.\nHolatini doimiy kuzatib boraman, har bir kichik yutuqini rag'batlantiraman, toki uning o'ziga ishonchi qaytsin.\nMen buni eng jiddiy vazifalardan biri deb bilaman. Chunki har bir iqtidorli o'quvchi — mamlakatning kelajagi. Bitta iqtidor so'nsa, bu nafaqat bolaning, balki butun jamiyatning yo'qotishi. Shuning uchun men hech bir iqtidorli o'quvchining yo'lda qolib ketishiga yo'l qo'ymayman.",
        keys: ["signal", "psixolog bilan sabab", "individual reja", "yangi maqsad + rag'bat", "iqtidor — mamlakatning kelajagi"]
      },
      {
        q: "68. Sinfda lider o'quvchi yo'q — qanday lider aniqlaysiz?",
        a: "Men avvalo bir narsaga ishonaman: \"lider yo'q\" sinf bo'lmaydi — faqat salohiyat ochilmagan bo'ladi.\nLiderni men bir kuzatuvda emas, jarayonda aniqlayman. Birinchidan, turli vaziyatlarda o'quvchilarni kuzataman — kim tashabbus ko'rsatadi, kim jamoani uyushtiradi. Ikkinchidan, har bir o'quvchiga navbatma-navbat kichik vazifa va rol beraman — masalan \"Hafta sardori\" tizimi orqali. Shunda yashirin liderlar o'zini namoyon qiladi. Uchinchidan, liderlik treninglari va o'yinlar o'tkazaman. To'rtinchidan, \"O'quvchilar kengashi\"ni demokratik saylov orqali tashkil etaman.\nEng muhimi — men bitta tayyor lider qidirmayman, balki har bolada liderlik fazilatini rivojlantiraman. Passiv o'quvchini ham kichik mas'uliyatdan boshlab tarbiyalayman.\nChunki liderlik — tug'ma fazilat emas, tarbiyalanadigan ko'nikma. Mening vazifam — uxlab yotgan salohiyatni uyg'otish.",
        keys: ["lider yo'q sinf bo'lmaydi", "Hafta sardori tizimi", "liderlik treningi", "O'quvchilar kengashi saylov", "liderlik — tarbiyalanadigan ko'nikma"]
      },
      {
        q: "69. O'quvchi bilimli, lekin jamoa oldida gapirishdan qo'rqadi?",
        a: "Bu — ko'p uchraydigan holat: bola bilimli, lekin auditoriya oldida qotib qoladi. Men buni jiddiy qabul qilaman, chunki bilim qo'rquv ostida ko'milib qolmasligi kerak.\nAvval psixolog bilan qo'rquvning sababini aniqlayman — bu uyatchanlikmi, o'tmishdagi salbiy tajribami, yoki o'ziga ishonchsizlikmi?\nSo'ng bosqichma-bosqich ishonch shakllantiraman: avval kichik guruhda gapirishdan boshlayman, keyin juftlikda, so'ng kattaroq auditoriyada. Uni Debat klubi va notiqlik mashg'ulotlariga jalb qilaman, kichik rollar bilan tadbirlarda qatnashtiram.\nHar bir kichik muvaffaqiyatini maqtab, ijobiy muhit yarataman — kulish yoki mensimaslikka aslo yo'l qo'ymayman.\nMaqsadim — bolada o'ziga ishonch uyg'otish. Chunki bilim va ishonch birlashganda, bu o'quvchi sinfning eng yorqin yulduziga aylanishi mumkin. Bilim — porox, ishonch esa — uchqun; ikkalasi uchrashganda natija portlaydi.",
        keys: ["psixolog bilan sabab", "bosqichma-bosqich: kichik guruh → juftlik → katta auditoriya", "Debat klubi", "ijobiy muhit", "bilim — porox, ishonch — uchqun"]
      },
      {
        q: "70. O'quvchi shaxsiy manfaatni jamoadan ustun qo'yyapti?",
        a: "Bu — tarbiyaviy keys, men uni \"men\"dan \"biz\"ga o'tkazish jarayoni deb ko'raman.\nAvval ayblamayman — bu yoshda o'zini o'ylash tabiiy. Lekin men o'quvchiga jamoada ishlashning qadrini amaliyotda ko'rsataman.\nBirinchidan, jamoaviy maqsad qo'yaman va birgalikda erishish zavqini his qildiraman. Ikkinchidan, jamoa uchun fidoyilik ko'rsatgan qahramonlar misolini keltiraman. Uchinchidan, uni \"O'quvchilar kengashi\" va volontyorlik faoliyatiga jalb qilaman — o'zgalar uchun ishlash tajribasini beraman. To'rtinchidan, jamoaga foyda keltirgan o'quvchini alohida rag'batlantiraman.\nMen o'quvchiga shuni anglataman: shaxsiy manfaat va jamoa manfaati bir-biriga zid emas — aksincha, jamoa yutsa, sen ham yutasan.\nMaqsadim — o'quvchida \"men\" emas, \"biz\" deb fikrlash madaniyatini shakllantirish. Chunki yakka kuch — bir, jamoa kuchi esa son-sanoqsiz.",
        keys: ["men→biz", "jamoaviy maqsad", "fidoyilik qahramonlari", "O'quvchilar kengashi/volontyorlik", "yakka kuch — bir, jamoa kuchi son-sanoqsiz"]
      },
      {
        q: "71. Optimist va pessimist o'quvchilar bilan qanday ishlaysiz?",
        a: "Har bir o'quvchi dunyoga o'z ko'zi bilan qaraydi, va men ikkalasiga ham individual yondashaman.\nOptimist o'quvchi — ishonchli, faol, lekin ba'zan haddan tashqari yengiltak bo'lishi, qiyinchilikni kam baholashi mumkin. Men uning ishonchini qo'llab-quvvatlayman, lekin ayni paytda real rejalashtirish va mehnat muhimligini singdiraman — toki orzusi havoyi bo'lib qolmasin.\nPessimist o'quvchi — ehtiyotkor, lekin o'ziga ishonmasligi, har ishdan oldin \"uddalay olmayman\" deyishi mumkin. Men unga kichik muvaffaqiyatlar orqali ishonch beraman, qiyinchilikni yenggan insonlar misolini ko'rsataman, har yutuqini rag'batlantiraman.\nMening yondashuvim — optimistni yerga qaytarish, pessimistni esa yuqoriga ko'tarish. Ikkalasini muvozanatga olib kelish.\nMaqsadim — har ikki o'quvchi ham real, ishonchli va mehnatkash shaxs bo'lib yetishishi. Chunki haqiqiy muvaffaqiyat — orzuga ishonish bilan unga mehnat qilishning birlashuvidir.",
        keys: ["optimist — real rejalashtirish singdiraman", "pessimist — kichik muvaffaqiyatlar", "optimistni yerga, pessimistni yuqoriga", "muvozanat", "orzuga ishonish + mehnat"]
      },
      {
        q: "72. O'quvchi OTMga kirishdan umidini uzgan?",
        a: "Psixolog bilan sababini aniqlayman; muvaffaqiyat hikoyalarini ko'rsataman; kichik maqsadlar bilan ishonchni tiklayman; muqobil yo'llarni (kasb-hunar, MOOC, grant) ko'rsataman. \"Sening ham imkoning bor.\"",
        keys: ["sabab", "muvaffaqiyat hikoyasi", "kichik maqsad", "muqobil yo'l"]
      },
      {
        q: "73. O'qituvchi o'quvchilarni to'garagingizga qo'ymayapti?",
        a: "Bu — ko'p uchraydigan ish vaziyati. Men uni ziddiyatga emas, hamkorlikka aylantiraman.\nAvval ayblamayman, sababini aniqlayman — bu jadval to'qnashuvimi, yoki o'qituvchi to'garakning foydasiga ishonmayaptimi?\nSo'ng o'qituvchi bilan xushmuomalalik bilan suhbatlashaman, to'garakning o'quvchi rivojiga foydasini tushuntiraman, jadvalni uning darslariga to'qnash kelmaydigan qilib moslashtiraman.\nAgar masala hal bo'lmasa, men a'zo bo'lgan pedagogik kengash va direktor orqali yechim topaman.\nMening maqsadim — o'qituvchini g'anim emas, sherik qilish. Chunki biz ikkalamiz ham bitta maqsad — o'quvchining rivoji uchun ishlaymiz. O'qituvchi raqib emas, hamkasb.\nEng asosiysi — bu jarayonda o'quvchining manfaati zarar ko'rmasligi kerak. Kattalar o'rtasidagi kelishmovchilik bolaning rivojiga to'siq bo'lmasligi shart.",
        keys: ["sababini aniqlayman", "xushmuomalalik bilan suhbat", "jadval moslashtirish", "pedkengash/direktor", "o'qituvchi — sherik, raqib emas"]
      },
      {
        q: "74. Biriktirilgan pedagog OTMga tayyorlashda sustkashlik qilyapti?",
        a: "Bu jiddiy holat, chunki o'quvchining oliyohga tayyorgarligi xavf ostida.\nAvval ayblamasdan, pedagog bilan suhbatlashib sababini aniqlayman — bandlikmi, charchoqmi, yoki mas'uliyatni yetarli his qilmayaptimi?\nSo'ng unga o'quvchining ahvoli muhimligini, vaqt ketayotganini tushuntiraman, real va qulay jadval tuzaman.\nAgar bu yordam bermasa, direktor va pedagogik kengash orqali masalani ko'taraman. Zarur bo'lsa, o'quvchini boshqa kuchli o'qituvchiga biriktiraman yoki ishonchli MOOC, onlayn resurslarni topib beraman.\nMening tamoyilim aniq: kattalarning sustkashligi tufayli o'quvchining tayyorgarligi to'xtab qolmasligi kerak. Vaqt — bitiruvchi uchun eng qimmatli boylik, uni boy berib bo'lmaydi. Shuning uchun men muammoni eshitib kutmayman, balki darhol muqobil yechim topaman.",
        keys: ["sababni aniqlayman", "vaqt ketayotganini tushuntiram", "direktorga ko'taraman", "onlayn MOOC resurslar", "vaqt — eng qimmatli boylik"]
      },
      {
        q: "75. O'qituvchi yillik to'garak hisobotini topshirmadi?",
        a: "Hisobot — to'garak natijasini ko'rsatadigan muhim hujjat, shuning uchun men buni e'tibordan chetda qoldirmayman.\nAvval ayblamayman. O'qituvchi bilan suhbatlashib sababini bilaman — bandlikmi, hujjat yuritishni bilmaslikmi, yoki shunchaki e'tiborsizlikmi?\nAgar sabab hujjatni qanday to'ldirishni bilmaslik bo'lsa, men hisobot namunasini ko'rsatib, amaliy yordam beraman. So'ng aniq muddat belgilayman.\nAgar shundan keyin ham hal bo'lmasa, masalani ma'muriyatga yetkazaman.\nLekin men bu yerda tizimli yechim ham taklif qilaman: barcha to'garak rahbarlari uchun yagona, qulay hisobot shaklini joriy qilaman — shunda hujjat yuritish hamma uchun oson bo'ladi va bunday muammo qaytarilmaydi.\nMening maqsadim — ayblash emas, tizimni yo'lga qo'yish. Chunki muammoning ildizini hal qilmasam, u har yili takrorlanaveradi.",
        keys: ["sababni bilaman", "namuna ko'rsatib yordam", "aniq muddat", "yagona hisobot shakli", "tizimni yo'lga qo'yish"]
      },
      {
        q: "76. Ekskursiyaga olib bordingiz, o'quvchilar passiv?",
        a: "Bu — format bilan bog'liq muammo, va men buni \"o'quvchi aybdor\" emas, \"format ishlamadi\" deb qabul qilaman.\nAvval passivlikning sababini aniqlayman — ko'pincha bu format zerikarli bo'lgani uchun.\nShuning uchun men interaktivlikka o'taman. Quruq video o'rniga jonli kasb egasi bilan uchrashuv, korxonaga ekskursiya, amaliy mahorat darsi tashkil etaman. Geymifikatsiyadan foydalanaman — \"Bir kun — bir kasb\" kvesti kabi. Eng yaxshisi — o'quvchilarning o'zlariga kasb haqida video tayyorlatib, tanlov uyushtiraman.\nEkskursiyada esa o'quvchilarni faol jalb qilaman — savol berishga undayman, kichik topshiriq beraman, keyin muhokama o'tkazaman.\nMening tamoyilim: o'quvchi tomoshabin bo'lganida zerikadi, ishtirokchi bo'lganida qiziqadi. Maqsadim — o'quvchini jarayonning chetida emas, markazida qo'yish. Faol ishtirokchi bo'lganda qiziqish o'z-o'zidan paydo bo'ladi.",
        keys: ["format ishlamadi", "jonli uchrashuv/ekskursiya", "geymifikatsiya", "kichik topshiriq + muhokama", "tomoshabin zerikadi, ishtirokchi qiziqadi"]
      },
      {
        q: "77. Kasb tanlash videolari o'quvchilarni qiziqtirmadi?",
        a: "Passiv tomosha zerikarli. Formatni \"interaktiv kino-tahlil\"ga aylantiraman: videoni muhim joyida to'xtatib savol beraman (\"Siz bo'lsangiz qanday qaror qabul qilardingiz?\"). Videodan keyin kasb bo'yicha kichik amaliy o'yin (simulyatsiya) o'tkazaman. Ishtirok bor joyda qiziqish uyg'onadi.",
        keys: ["interaktiv kino-tahlil", "videoni to'xtatib savol", "simulyatsiya", "ishtirok = qiziqish"]
      },
      {
        q: "78. Festival kerak, lekin mablag' ham, homiy ham yo'q?",
        a: "Bu savolda komissiya sizni \"mablag' yo'q\" sharti bilan sinaydi. Men buni to'siq emas, ijodkorlikka chaqiriq deb qabul qilaman.\nBirinchidan, mavjud imkoniyatdan maksimal foydalanaman — maktab zali, o'quvchilarning o'z resurslari. Ikkinchidan, o'quvchilar va ota-onalarni jalb qilaman — ko'p ota-ona o'z sohasida mutaxassis, bepul yordam bera oladi. Uchinchidan, sahna bezagi va dekoratsiyani o'quvchilarning o'zlari rasm va qo'l mehnati bilan tayyorlaydi. To'rtinchidan, festivalni ijtimoiy tarmoqda yoritaman — bu kelajakda homiy jalb qilishga yo'l ochadi. Grant loyihalarida ham ishtirok etaman.\nMening ishonchim shu: festivalning qiymati pulda emas, g'oya va ishtirokda. Kichik byudjet bilan ham, o'quvchilar qalbdan ishtirok etsa, esda qoladigan tadbir bo'ladi.\nMaqsadim — \"sharoit yo'q\" deb qo'l qovushtirib o'tirmaslik. Resurs topishni bilgan odam uchun resurs har doim topiladi.",
        keys: ["ijodkorlikka chaqiriq", "maktab zali va o'z resurslar", "ota-ona mutaxassis — bepul yordam", "sahna — o'quvchilar o'zi", "qiymat pulda emas, g'oyada"]
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
      },
      {
        q: "81. Sizga korrupsion taklif qilinsa?",
        a: "Bu savolda mening pozitsiyam murosasiz va qat'iy.\nMen korrupsion taklifni hech qanday ikkilanishsiz rad etaman. \"Korrupsiyaga qarshi kurashish to'g'risida\"gi Qonun va pedagogik odob-axloq qoidalariga qat'iy rioya qilaman, va belgilangan tartibda tegishli organlarga xabar beraman.\nMen buni nima uchun shunchalik qat'iy qilaman? Chunki men o'quvchilarga halollikni o'rgataman. Agar o'zim nohalol bo'lsam, mening barcha so'zlarim qiymatini yo'qotadi. Bola so'zga emas, o'rnakka qaraydi.\nMaslahatchi — o'quvchilar uchun namuna. Men uchun obro', halollik va o'quvchilar ishonchi har qanday moddiy manfaatdan ustun turadi.\nShaffoflik — mening asosiy tamoyilim. Men shunday inson bo'lishni xohlamanki, o'quvchilarim ertaga \"bizning ustozimiz halol odam edi\" deb eslashsin. Halol topilgan obro' — eng katta boylik.",
        keys: ["murosasiz", "Korrupsiya qonuni", "rad + xabar beraman", "bola so'zga emas, o'rnakka qaraydi", "halol obro' — eng katta boylik"]
      },
      {
        q: "82. Sinfda o'g'rilik sodir bo'ldi, ota-ona kelib janjal qilyapti?",
        a: "Bu — eng nozik keyslardan biri, chunki bu yerda bolalar psixikasi xavf ostida. Men juda ehtiyotkorlik bilan ish tutaman.\nBirinchi qadam — vaziyatni tinchlantirish. Ota-onani alohida xonaga taklif qilaman — jamoat oldida hech qachon bahsga kirmayman. Hurmat bilan tinglayman, chunki g'azablangan odam avval eshitilishini xohlaydi.\nIkkinchi qadam — psixolog bilan ishlab, ham ayblanayotgan bola, ham boshqa o'quvchilar ruhiyatini himoya qilaman.\nUchinchi qadam — masalani oshkora ayblovsiz, xolis o'rganaman. Guvohsiz, dalilsiz hech kimni aybdor qilmayman — chunki noto'g'ri ayblov bolaning butun hayotiga dog' tushiradi.\nTo'rtinchi qadam — sinf rahbari va ma'muriyat bilan adolatli yechim topaman.\nBeshinchi qadam — tarbiyaviy xulosa: halollik va o'zganing haqqi mavzusida sinf soati o'tkazaman.\nMaqsadim — bolalar psixikasini asrash va bu og'ir vaziyatni ham tarbiya imkoniyatiga aylantirish. Chunki bir tomonni tinglab qaror qilgan odam — ko'zi ko'r sudyaga o'xshaydi.",
        keys: ["5 qadam", "alohida xonaga", "psixolog — ruhiyat himoyasi", "guvohsiz aybdor qilmaslik", "tarbiyaviy sinf soati", "ko'zi ko'r sudya emas"]
      },
      {
        q: "83. Prezident maktabi o'quvchilari past natija ko'rsatdi?",
        a: "Iqtidorli o'quvchining bilimi pasayishi — bu menga signal: biror narsa noto'g'ri ketyapti.\nMen avval panikaga tushmayman va ayblamayman. Psixolog bilan birgalikda sababini aniqlayman — bu charchoqmi, oilaviy muammomi, sog'liqmi, motivatsiya pasaygami yoki do'stlar ta'sirimi?\nSababga qarab individual reja tuzaman. Ota-ona bilan ishlayman, kerak bo'lsa yukini yengillashtiraman. So'ng unga yangi maqsad va rag'bat beraman — tanlov, oliyoh orzusi kabi.\nHolatini doimiy kuzatib boraman, har bir kichik yutuqini rag'batlantiraman, toki uning o'ziga ishonchi qaytsin.\nMen buni eng jiddiy vazifalardan biri deb bilaman. Chunki har bir iqtidorli o'quvchi — mamlakatning kelajagi. Bitta iqtidor so'nsa, bu nafaqat bolaning, balki butun jamiyatning yo'qotishi. Shuning uchun men hech bir iqtidorli o'quvchining yo'lda qolib ketishiga yo'l qo'ymayman.",
        keys: ["signal", "psixolog bilan sabab", "individual reja", "yangi maqsad + rag'bat", "iqtidor — mamlakatning kelajagi"]
      },
      {
        q: "84. Bir vaqtda bir nechta topshiriq berilsa, ustuvorlikni qanday belgilaysiz?",
        a: "Bu — vaqtni boshqarish ko'nikmasini sinaydigan savol, men unga tizimli javob beraman.\nMen topshiriqlarni Eyzenxauer matritsasi tamoyili asosida tartiblayman: har bir vazifani ikki mezon bo'yicha baholayman — qanchalik muhim va qanchalik shoshilinch.\nShoshilinch va muhim ishlarni birinchi navbatda o'zim bajaraman. Muhim, lekin shoshilinch bo'lmaganlarini rejalashtirib qo'yaman. Shoshilinch, lekin kam muhimlarini imkon bo'lsa boshqaga topshiraman. Na muhim, na shoshilinch bo'lganlarini esa keyinga qoldiraman.\nMen kunlik va haftalik reja tuzaman, shunda hech bir muhim ish e'tibordan chetda qolmaydi. Agar resurs yoki vaqt yetishmasa, rahbariyat bilan maslahatlashib, real muddatni kelishaman.\nMening tamoyilim: aniq reja — vahimaning eng yaxshi dushmani. Ko'p ish bosib kelganda sarosimaga tushgan emas, balki ularni tartibga solgan inson g'alaba qozonadi. Tartibli ishlagan — tinch ishlaydi.",
        keys: ["Eyzenxauer matritsasi", "shoshilinch+muhim — birinchi", "kunlik/haftalik reja", "aniq reja — vahimaning dushmani", "tartibli ishlagan — tinch ishlaydi"]
      },
      {
        q: "85. Ish uchun resurs yoki sharoit yetishmasa?",
        a: "Men resurs yetishmovchiligini muammo emas, hal qilinadigan vazifa deb qabul qilaman.\nBirinchidan, Nizomdagi huquqim asosida maktabdan zarur sharoit va moliyalashtirishni talab qilaman — chunki bu mening qonuniy huquqim.\nIkkinchidan, hududiy \"Kelajak\" markazi xulosasi bilan grant loyihalarida ishtirok etaman.\nUchinchidan, homiy va hamkorlarni — mahalliy korxonalar, IT-Park, ota-onalarni jalb qilaman.\nTo'rtinchidan, mavjud imkoniyatdan maksimal foydalanaman.\nMen hech qachon \"sharoit yo'q\" deb qo'l qovushtirib o'tirmayman. Chunki sharoitni kutib o'tirgan odam hech narsa qilolmaydi, sharoitni yaratgan odam esa har doim yo'l topadi.\nMaqsadim — qiyinchilikni bahona qilmaslik. Resurs — topishni bilgan odamga topiladi. Eng katta resurs esa pul emas, balki tashabbus va ishtiyoqdir.",
        keys: ["Nizom huquqi — talab qilaman", "grant loyiha", "homiy/IT-Park/ota-ona", "qo'l qovushtirmayman", "eng katta resurs — tashabbus va ishtiyoq"]
      },
      {
        q: "86. Ijtimoiy himoyaga muhtoj oila farzandiga yo'l xaritasi",
        a: "Bu savol mening eng muhim vazifalarimdan biriga tegishli — hech bir bola moddiy qiyinchilik tufayli iqtidoridan ayrilmasligi kerak.\nMen aniq yo'l xaritasi bilan ishlayman. Birinchidan, Ijtimoiy reyestr asosida bunday o'quvchilar ro'yxatini shakllantiraman. Ikkinchidan, ularga mavjud imtiyozlar haqida ma'lumot beraman. Uchinchidan, qobiliyatini aniqlab, bepul to'garak va klublarga jalb qilaman. To'rtinchidan, tezroq mustaqillikka erishishi uchun kasb-hunarga yo'naltiraman. Beshinchidan, agar iqtidorli bo'lsa, bosqichma-bosqich reja bilan oliyohga grant asosida kirishiga ko'maklashaman. Oltinchidan, maktab va homiylar yordamida o'quv vositalari bilan ta'minlayman, mahalla bilan hamkorlik qilaman.\nPF-86 Farmonida ham Ijtimoiy reeyestrdagi oilalar farzandlariga alohida e'tibor va imtiyozlar belgilangan — men bundan to'liq foydalanaman.\nMaqsadim — moddiy qiyinchilik iqtidorga to'sqinlik qilmasligi, har bir bola teng imkoniyatga ega bo'lishi. Chunki iqtidor boylikni tanlamaydi — u har qanday oilada tug'ilishi mumkin.",
        keys: ["Ijtimoiy reyestr", "imtiyozlar", "bepul to'garak/klub", "kasb-hunar", "grant", "PF-86", "iqtidor boylikni tanlamaydi"]
      },
      {
        q: "87. Tanlov natijasidan norozilik (apellyatsiya tartibi)",
        a: "Tanlovlarda men adolat va oshkoralikni eng muhim tamoyil deb bilaman, va apellyatsiya tartibini aniq bilaman.\nTanlov natijasidan norozi bo'lgan ishtirokchi belgilangan muddatda — masalan Turon teatr tanlovida natija e'lon qilingach 15 daqiqa ichida — Apellyatsiya komissiyasiga murojaat qiladi. Komissiya 3 kishidan iborat bo'lib, hakamlar tarkibiga kirmagan mustaqil mutaxassislardan tuziladi va shikoyatni 1 soat ichida ko'rib chiqib, asoslangan javob beradi.\nMen o'z vazifamda eng muhimi — shaffof va xolis baholashni ta'minlash. Chunki baholash adolatli bo'lsa, apellyatsiyaga ehtiyoj ham kamayadi.\nNorozilik bo'lganda men ishtirokchini tinchlantiraman, jarayonni qonuniy va hurmat bilan olib boraman.\nMening tamoyilim: adolat faqat natijada emas, jarayonda ham ko'rinishi kerak. Ishtirokchi yutqazsa ham, \"menga adolatli munosabatda bo'lishdi\" deb ketishi kerak. Chunki shaffoflik — ishonchning poydevoridir.",
        keys: ["15 daqiqa ichida ariza", "3 kishilik komissiya", "1 soat ichida javob", "shaffof va xolis baholash", "shaffoflik — ishonch poydevori"]
      }
    ]
  },

  {
    id: "huquqiy",
    title: "Huquqiy asos, vazifalar va tashkiliy shartlar",
    icon: "📘",
    intro: "Hujjatlar, bo'ysunish, vazifalar, huquq-majburiyatlar, maosh, sharoit va zamonaviy tushunchalar (I-VII bo'limlar).",
    items: [
      {
        q: "Maktab maslahatchisi lavozimi qaysi hujjatlar asosida joriy etilgan?",
        a: "Ikki asosiy hujjat asosida: 1) Prezidentning 2025-yil 8-sentabrdagi PQ-277-son \"Maktabdan tashqari ta'lim tizimini yangi bosqichga olib chiqish chora-tadbirlari to'g'risida\"gi qarori; 2) Vazirlar Mahkamasining 2025-yil 10-dekabrdagi 776-son qarori. Shu hujjatlar negizida \"Barkamol avlod\" maktablari o'rnida \"Kelajak\" markazlari tashkil etildi va maslahatchi lavozimi joriy qilindi.",
        keys: ["PQ-277 (08.09.2025)", "776-son (10.12.2025)", "Kelajak markazlari"]
      },
      {
        q: "Maslahatchi kimga bo'ysunadi?",
        a: "Ikki rahbarga to'g'ridan-to'g'ri bo'ysunaman: 1) tegishli tuman yoki shahar \"Kelajak\" markazi direktori; 2) faoliyat yuritayotgan umumiy o'rta ta'lim maktabi direktori. Faoliyatim shu ikki tomon tomonidan muvofiqlashtirib boriladi.",
        keys: ["Kelajak markazi direktori", "maktab direktori", "ikki tomon"]
      },
      {
        q: "Maslahatchi qaysi qonun va hujjatlar asosida ishlaydi?",
        a: "O'zboshimchalik bilan emas, qonun va nizom asosida: O'zbekiston Respublikasi Konstitutsiyasi, \"Ta'lim to'g'risida\"gi Qonun, \"Kelajak\" markazining ustavi hamda maktabning me'yoriy hujjatlari.",
        keys: ["Konstitutsiya", "Ta'lim to'g'risida qonun", "Kelajak ustavi"]
      },
      {
        q: "\"Kelajak\" markazi nima va qaysi yoshdagi bolalarga xizmat qiladi?",
        a: "\"Kelajak\" markazi — 6 yoshdan 18 yoshgacha bo'lgan bolalarga qo'shimcha ta'lim xizmatlarini ko'rsatuvchi davlat muassasasi, yuridik shaxs maqomiga ega. Bolalarning bo'sh vaqtini mazmunli tashkil etish hamda ularning ilmiy, texnik, ijodiy va sport salohiyatini ro'yobga chiqarishga xizmat qiladi.",
        keys: ["6-18 yosh", "davlat muassasasi", "yuridik shaxs"]
      },
      {
        q: "Maktab maslahatchisining 6 ta asosiy vazifasi?",
        a: "1) \"Prezident iqtidorli farzandlari\" milliy dasturini yoritish va targ'ib qilish; 2) \"Kelajak\" markazlarining tarmoq to'garaklari faoliyatini maktabda tizimli tashkil etish; 3) o'quvchilarni tarixiy obidalar, madaniy yodgorliklar, milliy va umuminsoniy qadriyatlar bilan tanishtirish; 4) yetakchilik, tashabbuskorlik va jamoada ishlash uchun loyihalar, klublar, debatlar va \"O'quvchilar kengashi\"ni yo'lga qo'yish; 5) madaniyat, san'at, kitobxonlik, sport va ekologiya yo'nalishida loyihalar; 6) o'quvchilarning maktabdan tashqari ta'limga jalb etilganligi to'g'risidagi ma'lumotlar bazasini yuritish.",
        keys: ["dastur targ'iboti", "tarmoq to'garaklari", "qadriyatlar", "yetakchilik/klub", "madaniyat-sport-ekologiya", "ma'lumotlar bazasi"]
      },
      {
        q: "Maslahatchining huquqlari nimalardan iborat?",
        a: "Belgilangan tartibda menejerlik sertifikatiga o'qish va sertifikat amal qilgan davrda lavozim maoshiga har oylik 30% ustama olish; maktabning pedagogik kengashi va iqtidorli o'quvchilar komissiyasiga a'zo bo'lish; to'garaklar va pedagoglar faoliyatini o'rganish va bildirgi kiritish; ish rejasidagi tadbirlarning maktab tomonidan moliyalashtirilishini talab qilish; o'z faoliyatiga oid ma'lumotlarni targ'ib etish.",
        keys: ["menejerlik sertifikati +30%", "pedkengash a'zoligi", "faoliyatni o'rganish", "moliyalashtirishni talab"]
      },
      {
        q: "Maslahatchining majburiyatlari nimalardan iborat?",
        a: "Konstitutsiya, \"Ta'lim to'g'risida\", \"Pedagog maqomi to'g'risida\", \"Korrupsiyaga qarshi kurashish\" qonunlari va Mehnat kodeksi doirasida faoliyat; har oylik axborot va hisobotlarni maktab direktori va \"Kelajak\" markaziga o'z vaqtida taqdim etish; nomenklatura asosida hujjat yuritish; ajratilgan xona va mablag'lardan to'g'ri foydalanish. Eng muhimi — ijtimoiy tarmoq va OAVda ta'lim tizimini obro'sizlantiradigan harakatga yo'l qo'ymaslik.",
        keys: ["qonunlar doirasida", "har oylik hisobot", "nomenklatura", "obro'sizlantirmaslik"]
      },
      {
        q: "Maslahatchi lavozimi o'quvchilar soniga qarab qanday joriy etiladi?",
        a: "O'quvchilar soniga qarab: 300 nafargacha — 0,5 birlik; 301 nafar va undan ortiq — 1,0 birlik.",
        keys: ["300 gacha — 0,5", "301+ — 1,0"]
      },
      {
        q: "Maslahatchining maoshi qaysi lavozimga tenglashtiriladi va ustama qachondan beriladi?",
        a: "Lavozim maoshim umumiy o'rta ta'lim maktabi direktor o'rinbosari maoshiga tenglashtiriladi. Menejerlik sertifikatiga ega bo'lsam, 2026-yil 1-sentabrdan boshlab har oylik 30% qo'shimcha ustama olaman.",
        keys: ["direktor o'rinbosariga teng", "+30% (2026-yil 1-sentabr)"]
      },
      {
        q: "Maslahatchining ish xonasi qanday jihozlanadi?",
        a: "Alohida xona yoki ma'naviy-ma'rifiy ishlar bo'yicha direktor o'rinbosari bilan bir xona. Ish stoli va stul, \"O'quvchilar kengashi\" a'zolari uchun kamida to'qqiz kishilik stol-stullar, ikkita kitob javoni, kompyuter jamlanmasi, printer va flipchart hamda zarur kanselyariya buyumlari.",
        keys: ["alohida/birga xona", "9 kishilik stol", "kompyuter+printer+flipchart"]
      },
      {
        q: "STEAM nimani anglatadi?",
        a: "Beshta sohaning qisqartmasi: Science (tabiiy fanlar), Technology (texnologiyalar), Engineering (muhandislik), Art (san'at) va Mathematics (matematika). Bu yondashuv o'quvchida yaxlit, ijodiy va amaliy fikrlashni shakllantiradi, chunki fanlarni alohida emas, o'zaro bog'liq holda o'rgatadi.",
        keys: ["Science, Technology, Engineering, Art, Mathematics", "yaxlit ijodiy fikrlash"]
      },
      {
        q: "\"Ijtimoiy-emotsional ta'lim\" modeli necha bosqichda amalga oshiriladi?",
        a: "To'rt bosqichda: maktabgacha ta'lim, boshlang'ich ta'lim, tayanch o'rta va o'rta ta'lim. Maqsadi — bolada yetakchilik, jamoada ishlash, faol fuqarolik va kommunikativ ko'nikmalarni bosqichma-bosqich, yoshiga mos ravishda rivojlantirish.",
        keys: ["4 bosqich", "maktabgacha-boshlang'ich-tayanch o'rta-o'rta"]
      },
      {
        q: "Markaz o'quvchilarni qaysi zamonaviy yo'nalishlarga jalb etadi?",
        a: "Markaz o'quvchilarni sun'iy intellekt va robototexnika yo'nalishlariga jalb etadi. Bundan tashqari mobilograf, dasturlash, SMM (ilgari surish va reklama qilish) hamda modellashtirish kabi to'garaklar tashkil etiladi. Bu o'quvchining yaratuvchanlik ko'nikmalarini rivojlantiradi.",
        keys: ["sun'iy intellekt", "robototexnika", "mobilograf", "dasturlash, SMM", "modellashtirish"]
      },
      {
        q: "Maslahatchining ish rejasi qanday moliyalashtiriladi?",
        a: "Ish rejamda belgilangan chora-tadbirlar umumiy o'rta ta'lim maktabining ish rejasiga kiritiladi va maktab tomonidan moliyalashtiriladi.",
        keys: ["maktab ish rejasiga kiritiladi", "maktab moliyalashtiradi"]
      },
      {
        q: "\"Kelajak\" markazlarini qo'llab-quvvatlash Jamg'armasi qanday shakllanadi?",
        a: "Bir necha manbadan: Davlat budjetidan har yili 70 milliard so'm; ota-onalar badali to'lovining 10 foizi; homiylik xayriyalari hamda xalqaro grantlar. Jamg'armaga tushgan mablag'ning kamida 40 foizi moddiy-texnika bazasini mustahkamlashga sarflanadi.",
        keys: ["70 mlrd so'm/yil", "to'lovning 10%", "kamida 40% moddiy-texnika"]
      },
      {
        q: "Ota-onalar to'lovidan kimlar ozod etiladi?",
        a: "Ijtimoiy reyestrga kiritilgan oilalarning farzandlari (ta'lim oluvchilar umumiy sonining 15 foizi miqdorida), nogironligi yoki alohida ta'lim ehtiyoji bo'lgan bolalar, yetim va ota-ona qaramog'idan mahrum bo'lgan bolalar.",
        keys: ["ijtimoiy reyestr (15%)", "nogironlik/alohida ehtiyoj", "yetim bolalar"]
      }
    ]
  },

  {
    id: "yodlash",
    title: "Tez yodlash — raqamlar va faktlar",
    icon: "📌",
    intro: "Eng muhim raqam va faktlar. Bularni yoddan bilsangiz, har savolga ishonch bilan javob bera olasiz.",
    items: [
      {
        q: "Asosiy hujjatlar va sanalar",
        a: "PQ-277 — 2025-yil 8-sentabr. 776-son qaror — 2025-yil 10-dekabr. Shu ikki hujjat asosida \"Kelajak\" markazlari va maslahatchi lavozimi joriy etilgan.",
        keys: ["PQ-277 (08.09.2025)", "776-son (10.12.2025)"]
      },
      {
        q: "\"Kelajak\" markazi va shtat",
        a: "6-18 yosh, davlat muassasasi, yuridik shaxs. Shtat: 300 nafargacha — 0,5 birlik; 301 va undan ortiq — 1,0 birlik. Maosh: direktor o'rinbosariga teng; sertifikat bilan +30% (2026-yil 1-sentabrdan).",
        keys: ["6-18 yosh", "0,5 / 1,0 birlik", "+30% ustama"]
      },
      {
        q: "7 ta klub",
        a: "Turon teatr, Iqtidor ansambli, Jadidlar izidan, Eco-schools Uzbekistan, Xorijiy tillar, Debat, Raqamli avlod qizlari.",
        keys: ["7 klub"]
      },
      {
        q: "Platformalar va Jamg'arma",
        a: "Platformalar: tanlov.uzedu.uz, test.uzedu.uz, \"Ijtimoiy portfolio\" moduli, turonteatri.uz, qizlar.raqamliavlod.uz. Jamg'arma: yiliga 70 mlrd so'm; to'lovning 10% Jamg'armaga, kamida 40% moddiy-texnika bazasiga.",
        keys: ["tanlov.uzedu.uz", "test.uzedu.uz", "70 mlrd so'm"]
      },
      {
        q: "Asosiy formulalar va tushunchalar",
        a: "Kasb tanlash formulasi: \"Xohlayman – Qila olaman – Kerak\". 4C: Critical thinking, Creativity, Communication, Collaboration. T-shaped mutaxassis. Slash career. STEAM: Science, Technology, Engineering, Art, Mathematics. Keys algoritmi: ayblamayman → sabab → dalil → hamkorlik → bola manfaati.",
        keys: ["Xohlayman-Qila olaman-Kerak", "4C", "T-shaped", "STEAM", "keys algoritmi"]
      }
    ]
  },
  {
    id: "sinov",
    title: "Sinov suhbati — biletlar",
    icon: "🎤",
    intro: "Komissiya oldida turgandek, baland ovozda javob bering. Har savolga 2-3 daqiqa. Kameraga yozib mashq qiling.",
    items: [
      {
        q: "🎫 BILET 1",
        a: "1) 10-15 yil ichida yo'qolib ketadigan kasblar. (1-mezon)\n2) Davlat tiliga hurmatni maktabda qanday amalga oshirasiz? (6-mezon)\n3) \"Raqamli avlod qizlari\" klubini bosqichma-bosqich tashkil qiling. (3-mezon)\n4) Ota-ona qarshi: qiz grant yutdi. Qanday ko'ndirasiz? (5-mezon)\n5) Maslahatchi kim? Istiqbol rejangiz? (4-mezon)",
        keys: ["1-mezon", "6-mezon", "3-mezon", "5-mezon", "4-mezon"]
      },
      {
        q: "🎫 BILET 2",
        a: "1) IT tufayli yuzaga kelgan istiqbolli kasblar. (1-mezon)\n2) Vatanparvarlik ruhini qanday tarbiyalaysiz? (6-mezon)\n3) \"Turon teatr\" tanlovi necha shartdan iborat? (3-mezon)\n4) O'quvchi o'qishni ham, kasbni ham xohlamayapti. Nima qilasiz? (5-mezon)\n5) Nega aynan sizni tanlashimiz kerak? (4-mezon)",
        keys: ["1-mezon", "6-mezon", "3-mezon", "5-mezon", "4-mezon"]
      },
      {
        q: "🎫 BILET 3",
        a: "1) Soft skills nima va qaysi kasbda muhim? (1-mezon)\n2) Bag'rikenglikni qanday shakllantirasiz? (6-mezon)\n3) Bitiruvchilarni OTMga tayyorlash yo'l xaritasi. (2-mezon)\n4) Sizga korrupsion taklif qilinsa? (5-mezon)\n5) Birinchi yilda nimaga erishmoqchisiz? (4-mezon)",
        keys: ["1-mezon", "6-mezon", "2-mezon", "5-mezon", "4-mezon"]
      },
      {
        q: "✓ Suhbat kuni — oxirgi eslatma",
        a: "• Kechasi yangi narsa o'rganmang — faqat flagman javobni o'qing va yaxshi uxlang.\n• Sekin, ishonchli, tabassum bilan gapiring (suhbat videoga olinadi).\n• Hujjat nomini ayting: \"PQ-277 ga ko'ra...\", \"Nizomga ko'ra...\".\n• IT ustunligingizni eslating — bu eng kuchli kozingiz.\n• Har javobni \"bola manfaati birinchi\" bilan yakunlang.\n• MOCK savolida ikkilanmang: \"deyarli barcha fanlarda\".",
        keys: ["flagman javob", "tabassum", "hujjat raqami", "IT ustunlik", "bola manfaati"]
      }
    ]
  }
];


// 6 ta asosiy bo'lim (sidebar uchun). Har biri bir yoki bir nechta mavzuni o'z ichiga oladi.
const STUDY_GROUPS = [
  { id: "g0", icon: "🚀", title: "Kirish — Flagman javob & maslahatlar", sections: ["kirish"] },
  { id: "gs", icon: "⭐", title: "Shablon javoblar — har yo'nalish uchun namuna", sections: ["shablonlar"] },
  { id: "g1", icon: "💼", title: "1-mezon: Kasblar va mehnat bozori", sections: ["kasblar"] },
  { id: "g2", icon: "🎓", title: "2-mezon: Akademik va oliygohlar", sections: ["akademik"] },
  { id: "g3", icon: "🎭", title: "3-mezon: Klublar va tadbirlar", sections: ["klublar"] },
  { id: "g4", icon: "🎯", title: "4-mezon: Istiqbol reja & huquqiy asos", sections: ["istiqbol", "huquqiy", "yodlash"] },
  { id: "g5", icon: "⚖️", title: "5-mezon: Muammoli vaziyatlar & sinov", sections: ["keyslar", "sinov"] },
  { id: "g6", icon: "🌳", title: "6-mezon: Tarbiya va qadriyatlar", sections: ["tarbiya"] }
];
