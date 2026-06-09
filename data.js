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
        a: "IT/dasturchi, AI, kiberxavfsizlik, muhandis, shifokor, moliya tahlilchisi. IT mutaxassis raqamli iqtisodiyotni, muhandis sanoatni, shifokor sog'liqni rivojlantiradi. Fakt: rivojlangan davlatlar iqtisodiyoti texnologiyaga asoslanadi; O'zbekistonda IT-Park eksporti yildan-yilga oshmoqda.",
        keys: ["IT, AI, muhandis, shifokor", "IT-Park eksporti oshmoqda"]
      },
      {
        q: "9. Masofaviy (onlayn) ishlasa bo'ladigan kasblar",
        a: "Full-stack dasturchi, data analitik, grafik va UX/UI dizayner, SMM mutaxassisi, kopirayter, onlayn o'qituvchi, tarjimon, video-montajchi. Bu kasblar ayniqsa nogironligi bo'lgan va uzoq hududdagi o'quvchilar uchun teng imkoniyat yaratadi — joydan turib dunyoga ishlash mumkin.",
        keys: ["dasturchi", "dizayner", "SMM", "kopirayter", "joydan turib dunyoga"]
      },
      {
        q: "10. Qaysi kasblarga ijodiy yondashuv kerak? (faktlar bilan)",
        a: "Marketing (marketolog, kopirayter), dizayn (UX/UI, grafik), arxitektura, kontent-meykerlik, san'at, IT. Fakt: McKinsey tadqiqotlariga ko'ra, ijodiy fikrlash talab etadigan ish o'rinlari AI va robotlashtirish davrida eng kam qisqaradigan va eng yuqori maoshli sohalardir. Chunki mashina takrorlaydi, inson yaratadi.",
        keys: ["marketing", "dizayn", "kontent", "McKinsey: ijod eng kam qisqaradi"]
      },
      {
        q: "11. Zamonaviy texnologiyalar davrida kasblarning afzalligi (faktlar bilan)",
        a: "Masofaviy ishlash; yuqori daromad (IT/AI); global imkoniyat; og'ir mehnatning yengillashishi. Fakt: jahonda eng tez o'sayotgan sohalar — IT, AI, raqamli iqtisodiyot; O'zbekistonda IT-Park eksporti milliard dollarlarga yetdi.",
        keys: ["masofaviy", "yuqori daromad", "global", "IT-Park — milliard dollar"]
      },
      {
        q: "12. Soft skills nima va qaysi kasbda muhim?",
        a: "Soft skills — shaxsiy va ijtimoiy ko'nikmalar: muloqot, jamoada ishlash, liderlik, vaqtni boshqarish, tanqidiy fikrlash, emotsional intellekt. Oddiy qilib: hard skill — \"nima qila olishing\", soft skill — \"qanday qila olishing\". Deyarli barcha kasbda, ayniqsa \"inson-inson\" sohalarida (rahbar, o'qituvchi, shifokor, menejer) muhim. Hard skill ishga joylashtiradi, soft skill karyerada o'stiradi.",
        keys: ["muloqot", "jamoa", "liderlik", "hard — nima, soft — qanday", "ishga joylashtiradi / o'stiradi"]
      },
      {
        q: "13. Hayot davomida ta'lim (lifelong learning) va qayta tayyorlov",
        a: "Bitta diplom bilan butun umr ishlash davri tugadi. Hayot davomida ta'lim — bilimni doimiy yangilash (misol: 20 yillik o'qituvchining AI dasturlarini o'rganishi). Qayta tayyorlov — kasbni butunlay yangilash (misol: ishsiz yoshning Monomarkazda 3 oyda dizayner bo'lib chiqishi va frilanser sifatida daromad topishi). Men o'quvchilarga \"o'rganishni o'rganish\"ni singdiraman.",
        keys: ["diplom davri tugadi", "o'qituvchi+AI", "Monomarkaz 3 oy", "o'rganishni o'rganish"]
      },
      {
        q: "14. Yo'qolmaydigan (uzoq muddatli) kasblar — afzallik va kamchilik",
        a: "Insoniy empatiya va ijod talab qiladigan sohalar: shifokor-jarroh, psixolog, o'qituvchi, ijodkor-dizayner. Afzalligi: AI almashtirolmaydi, barqaror talab, yuqori nufuz. Kamchiligi: uzoq yillik o'qish, yuqori ruhiy yuklama (burnout xavfi).",
        keys: ["shifokor", "psixolog", "o'qituvchi", "AI almashtirolmaydi", "uzoq o'qish, burnout"]
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
        a: "Novvoy, hunarmand, oshpaz, duradgor. Afzalligi: doimiy barqaror talab (odamlar doim non yeydi), mustaqil biznes imkoni, milliy meros saqlanadi. Kamchiligi: og'ir jismoniy mehnat, ish vaqti standart emas, daromad o'sishi chegaralangan. Eng yaxshi yo'l — milliy kasbni onlayn savdo va raqamli marketing bilan birlashtirish.",
        keys: ["novvoy", "oshpaz", "doim talab", "og'ir mehnat", "onlayn savdo bilan birlashtirish"]
      },
      {
        q: "18. Oilaviy/an'anaviy kasbni davom ettirish",
        a: "Afzalligi: tayyor tajriba maktabi, oilaviy ustoz (mentor), tayyor mijozlar bazasi. Kamchiligi: bola majburlik ostida qiziqishidan voz kechishi, salohiyati ochilmay qolishi. Pozitsiyam: agar bolaning qiziqishiga mos kelsa — qo'llab-quvvatlayman, aks holda dalil bilan tushuntiraman. Bola manfaati birinchi.",
        keys: ["mentor", "mijozlar bazasi", "majburlik", "qiziqishiga mos bo'lsa — ha"]
      },
      {
        q: "19. Zamonaviy kasblarga tayyorlaydigan davlat tashkilotlari",
        a: "IT-Park (Raqamli texnologiyalar vazirligi) — dasturlash, dizayn, robototexnika; \"Ishga marhamat\" Monomarkazlari — 30+ zamonaviy va ishchi kasbni bepul o'rgatadi; Yoshlar ishlari agentligi — \"Ibrat farzandlari\", \"Ustoz AI\" loyihalari orqali til va texnologiya; \"El-yurt umidi\" jamg'armasi. Men shu tashkilotlar bilan hamkorlik qilaman.",
        keys: ["IT-Park", "Ishga marhamat Monomarkaz", "Ibrat farzandlari, Ustoz AI", "El-yurt umidi"]
      },
      {
        q: "20. Raqobatbardosh kasb egasi qanday bo'lishi kerak?",
        a: "Global bozor talabiga javob beradigan, ya'ni \"4C\" ko'nikmasiga ega: Critical thinking (tanqidiy fikrlash), Creativity (ijodkorlik), Communication (muloqot), Collaboration (hamkorlik). Bundan tashqari ingliz tilini biladigan, raqamli texnologiyalar bilan professional ishlaydigan va \"T-shaped\" (bir sohada chuqur, turdosh sohalarda umumiy bilim) mutaxassis.",
        keys: ["4C", "ingliz tili", "raqamli", "T-shaped"]
      },
      {
        q: "21. Nima uchun bir nechta ko'nikma o'rganish kerak? (mini skill)",
        a: "Bu zamonaviy dunyoda \"Slash career\" (ko'p tarmoqli karyera) deyiladi. Bir soha inqirozga uchrasa, ikkinchisi ishsizlikdan qutqaradi. Misol: ingliz tili o'qituvchisi SMM ni ham bilsa, xalqaro loyihalarda kontent-menejer bo'lib daromadini bir necha barobar oshiradi. Shuning uchun o'quvchilarni ko'p qirrali bo'lishga undayman.",
        keys: ["Slash career", "bir soha inqiroz — ikkinchisi qutqaradi", "o'qituvchi+SMM"]
      }
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
        a: "Tizimli va bosqichma-bosqich: 1) so'rovnomalar orqali qiziqishni aniqlayman; 2) psixolog bilan 7-sinfdan boshlab qiziqish, qobiliyat, temperamentni o'rganaman; 3) \"Mening kelajakdagi kasbim\" dasturi asosida 7-9-sinflar bilan ishlayman — videoroliklar, korxonaga ekskursiya, kasb egalari bilan uchrashuv; 4) har bir o'quvchi uchun shaxsiy tavsiya ishlab chiqib, ota-ona bilan muhokama qilaman. Maqsad — \"Xohlayman - Qila olaman - Kerak\" formulasiga mos kasbga yo'naltirish.",
        keys: ["so'rovnoma", "psixolog (7-sinf)", "Mening kelajakdagi kasbim", "shaxsiy tavsiya", "ota-ona"]
      },
      {
        q: "23. Psixolog bilan qanday hamkorlik qilasiz?",
        a: "Maktab psixologi — eng yaqin hamkorim. Nizomga ko'ra 7-sinfdan boshlab birga ishlaymiz. Test, kuzatuv va suhbatlar orqali o'quvchining qiziqishi, qobiliyati va temperamentini aniqlaymiz. Psixolog bolaning ichki psixologik xususiyatlarini baholaydi, men esa shu asosda mos kasb va ta'lim yo'nalishini tavsiya qilaman. Bu hamkorlik tavsiyalarimni obyektiv va ishonchli qiladi.",
        keys: ["eng yaqin hamkor", "7-sinf", "test/kuzatuv/suhbat", "psixolog — ichki dunyo, men — kasbiy yo'nalish"]
      },
      {
        q: "24. O'quvchining qiziqishini qanday aniqlaysiz?",
        a: "Kompleks usulga tayanaman: kuzatuv + so'rovnoma/anketa + psixologik test (Holland yoki Klimov) + individual suhbat + o'quv natijalari tahlili. Bularning hammasi birlashganda o'quvchining haqiqiy qiziqishi va qobiliyati aniq ko'rinadi. Bitta test yakuniy hukm emas — men har doim bir nechta manbaga tayanaman.",
        keys: ["kompleks", "Holland/Klimov", "bitta test — hukm emas"]
      },
      {
        q: "25. \"Mening kelajakdagi kasbim\" dasturi nima?",
        a: "Nizomda belgilangan, 7-9-sinf o'quvchilari bilan ishlashga mo'ljallangan kasbga yo'naltirish dasturi. Mohiyati — psixolog bilan birgalikda har bir o'quvchining kasbiy qiziqishlari, qobiliyatlari va iqtidorlarini aniqlash. Natijalar asosida o'quvchini akademik ta'lim (oliy ta'limga tayyorlash) yoki kasb-hunar (amaliy mahorat) yo'nalishiga yo'naltiraman.",
        keys: ["7-9-sinf", "psixolog bilan", "qiziqish+qobiliyat+iqtidor", "akademik yoki kasb-hunarga"]
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
        a: "Aniq yo'l xaritasi: 1) qiziqish, qobiliyat va GPA tahlili; 2) oliy ta'limga kirishni istaganlarni kuchli fan o'qituvchilariga biriktirish; 3) MOCK (sinov) imtihonlari; 4) iqtidorlilarni \"Prezident iqtidorli farzandlari\" dasturi orqali nufuzli oliygohlarga tayyorlash; 5) hujjat topshirish, motivatsion xat yozish va grant bo'yicha hamrohlik. Maqsad — grant asosida nufuzli oliygohga kirgizish.",
        keys: ["GPA tahlil", "fan o'qituvchisiga biriktirish", "MOCK", "Prezident iqtidorli farzandlari", "hujjat/grant/motivation letter"]
      },
      {
        q: "29. MOCK imtihon nima va nima uchun o'tkaziladi?",
        a: "MOCK imtihon — sinov (mashq) imtihoni, real imtihondan oldin o'tkaziladigan tayyorgarlik. Prezident va ixtisoslashtirilgan maktablar maslahatchilari bilan hamkorlikda, Davlat test markazi andozalariga mos o'tkazaman. Foydasi: o'quvchi imtihon muhiti va formatiga ko'nikadi, stressga chidamli bo'ladi; kuchli va zaif tomonlarni aniqlab individual reja tuzaman; o'ziga ishonchi ortadi. Muhim: MOCK deyarli barcha fanlarda qo'llaniladi.",
        keys: ["sinov imtihoni", "format+stress", "deyarli barcha fanda"]
      },
      {
        q: "30. \"Prezident iqtidorli farzandlari\" dasturida nima qilasiz?",
        a: "Iqtidorli yoshlarni barvaqt aniqlash va inson kapitalini rivojlantirishga qaratilgan milliy dastur. Men: milliy dasturni targ'ib qilaman; imtihon orqali saralangan iqtidorlilarni o'zimga biriktiraman; ularni maxsus platforma orqali nufuzli xalqaro oliygohlarga tayyorlayman; MOCK imtihonlar o'tkazaman va mos fan o'qituvchisiga biriktiraman. Maqsad — grant asosida nufuzli oliygohga kirgizish.",
        keys: ["milliy dastur targ'iboti", "imtihon orqali saralash", "platforma", "nufuzli oliygohga"]
      },
      {
        q: "31. Iqtidorli o'quvchini xorijiy oliygohga qanday tayyorlaysiz?",
        a: "Bosqichma-bosqich: 1-bosqich (baholash) — darajani aniqlash; 2-bosqich (til) — IELTS, TOEFL, SAT, \"Xorijiy tillar\" klubi; 3-bosqich (akademik) — kuchli fan o'qituvchisi + MOCK; 4-bosqich (grant) — chet el grantlari (FLEX, DAAD) va stipendiyalar; 5-bosqich (hujjat) — motivatsion xat va arizalar bo'yicha hamrohlik.",
        keys: ["baholash", "IELTS/TOEFL/SAT", "fan o'qituvchisi+MOCK", "FLEX/DAAD", "motivatsion xat"]
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
        q: "34. To'garak va klublarning oliy ta'limga yo'naltirishdagi ahamiyati?",
        a: "Klublar o'quvchining iqtidorini erta ochadi va portfoliosini boyitadi. \"Xorijiy tillar\" til sertifikatiga, \"Debat\" notiqlik va tanqidiy fikrlashga, \"Raqamli avlod qizlari\" IT yo'nalishiga tayyorlaydi. Bu ko'nikmalar oliygoh kirish jarayonida, ayniqsa intervyularda va grant olishda asqotadi. Klublardagi yutuqlar ijtimoiy portfolioda qayd etiladi va kuchli \"vizit kartasi\"ga aylanadi.",
        keys: ["iqtidorni erta ochadi", "portfolio boyitadi", "intervyuda asqotadi"]
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
        a: "Bosqichma-bosqich: 1-oy (tahlil) — o'quvchilar bazasini shakllantirish, so'rovnoma orqali qiziqish va ehtiyojni aniqlash; 1-chorak — 3-4 ta klubni ishga tushirish, \"O'quvchilar kengashi\" saylovi; 2-chorak — 7-9-sinflarda kasbga yo'naltirish, iqtidorlilar uchun MOCK; yil yakuni — kamida bitta yirik festival/tanlov, qo'shimcha ta'limga jalb ko'rsatkichini oshirish. Har bosqichni o'lchanadigan natija bilan baholayman.",
        keys: ["1-oy: baza/so'rovnoma", "1-chorak: klub+kengash", "2-chorak: kasbga yo'naltirish+MOCK", "yil yakuni: festival"]
      },
      {
        q: "37. 3-5 yildan keyin o'zingizni qanday ko'rasiz?",
        a: "Kasbiy jihatdan: menejerlik sertifikatini olgan, kuchli klublar tizimi va faol \"O'quvchilar kengashi\"ni shakllantirgan bo'laman. Natija jihatdan: o'quvchilarim nufuzli oliygohlarga kirgan, tanlovlarda g'olib bo'lgan. Shaxsiy jihatdan: ingliz tilim mukammal, balki magistratura yoki ilmiy darajaga ega bo'laman. Maktabni tumandagi eng kuchli raqamli ta'lim markaziga aylantirishni maqsad qilaman.",
        keys: ["menejerlik sertifikati", "kuchli klublar", "o'quvchilar oliygohda", "eng kuchli raqamli ta'lim markazi"]
      },
      {
        q: "38. Ishingizda AI va raqamli texnologiyadan qanday foydalanasiz?",
        a: "Bu — eng kuchli tomonim, TATU bitiruvchisiman. \"Kelajak\" elektron platformasini va \"Ijtimoiy portfolio\" modulini professional yuritaman; AI yordamida o'quv materiali, test va taqdimot tayyorlayman; Excel'da bazani tahlil qilaman, Canva/PowerPoint'da taqdimot yarataman; o'quvchilarga raqamli xavfsizlik va media-savodxonlikni o'rgataman. Eng muhimi — AIni o'ylash o'rnini bosuvchi emas, yordamchi qurol sifatida o'rgataman.",
        keys: ["platforma+portfolio", "AI: material/test/taqdimot", "raqamli xavfsizlik", "AI — qurol, o'ylash o'rnini bosmaydi"]
      },
      {
        q: "39. O'quvchilarni qo'shimcha ta'limga jalb etishni qanday oshirasiz?",
        a: "Klublarni qiziqarli va zamonaviy qilaman (ayniqsa IT yo'nalishida); muvaffaqiyat hikoyalarini (tanlov g'oliblari, oliygohga kirganlar) targ'ib qilaman; tadbirlarni media va ijtimoiy tarmoqlarda yoritaman; ota-onalar bilan ishlayman; har bolaga qiziqishiga mos individual taklif beraman. Maqsad — maktabda qo'shimcha ta'limga jalb madaniyatini yaratish.",
        keys: ["qiziqarli klub", "muvaffaqiyat hikoyasi", "media", "ota-ona", "individual taklif"]
      },
      {
        q: "40. \"Ijtimoiy portfolio\" modulini qanday yuritasiz?",
        a: "Bu — o'quvchining qo'shimcha ta'limga jalbini aks ettiruvchi rasmiy elektron modul. Har o'quvchi uchun \"Kelajak\" platformasida shaxsiy profil ochaman; klub/to'garakka jalbi, tanlov va tadbirlardagi ishtiroki, yutuqlari va sertifikatlarini tizimli kiritaman; muntazam yangilab boraman. IT mutaxassisi sifatida bu modulni xatosiz yurita olaman. Bu portfolio \"Prezident iqtidorli farzandlari\" dasturiga nomzod tanlashda asosiy hujjat.",
        keys: ["elektron modul", "shaxsiy profil", "jalb+yutuq+sertifikat", "Prezident iqtidorli farzandlari'ga asos"]
      },
      {
        q: "41. O'z malakangizni qanday oshirasiz?",
        a: "Uzluksiz o'rganaman: menejerlik sertifikatiga o'qiyman (sertifikat amal qilganda lavozim maoshiga +30% ustama); ingliz tilimni B2 darajaga yetkazaman; seminar, trening va konferensiyalarda ishtirok etaman; IT sohamdagi yangiliklarni doimiy kuzataman. Tamoyilim — \"har kuni biror yangi narsa o'rganish\". Chunki maslahatchi o'z ustida ishlamasa, eskirgan maslahat beradi.",
        keys: ["menejerlik sertifikati (+30%)", "ingliz tili B2", "seminar/trening", "har kuni yangi narsa"]
      },
      {
        q: "42. Maslahatchining strategik (3 yillik) rejasi qanday?",
        a: "Besh yo'nalish: 1) Psixologik qo'llab-quvvatlash — diagnostika, \"Ishonch qutisi\"; 2) Kasbga yo'naltirish — \"Bir kun – bir kasb\", kasb testlari, OTM hamkorligi; 3) Milliy-ma'naviy tarbiya — festivallar, kitobxonlik, qadriyat seminarlari; 4) Bo'sh vaqtni mazmunli tashkil etish — Debat, IT to'garagi, volontyorlik, sport; 5) Raqamli profilaktika — internet xavfsizligi, kiberbulling profilaktikasi, media savodxonlik.",
        keys: ["psixologik", "kasbga yo'naltirish", "milliy tarbiya", "bo'sh vaqt", "raqamli profilaktika"]
      },
      {
        q: "43. Nega aynan sizni tanlashimiz kerak? (yakuniy savol)",
        a: "Uchta kuchli tomonim bor: 1) TATU bitiruvchisiman — dasturlash va kiberxavfsizlikni bilaman, bu boshqa nomzodlarda kam uchraydi; 2) Nizom talablarini puxta bilaman va ularni aniq reja bilan amalga oshira olaman; 3) men buni lavozim emas, missiya deb bilaman — tuman bolalarini raqamli kelajakka tayyorlash men uchun faxr. Menga ishonsangiz, natija bilan oqlayman.",
        keys: ["TATU (kam uchraydi)", "Nizomni bilaman+aniq reja", "lavozim emas, missiya"]
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
        a: "Nizomga ko'ra yetti klub: \"Turon teatr\", \"Iqtidor ansambli\", \"Jadidlar izidan\", \"Eco-schools Uzbekistan\", \"Xorijiy tillar\", \"Debat\" va \"Raqamli avlod qizlari\". Har klub muayyan ko'nikmani shakllantiradi: \"Debat\" — tanqidiy fikrlash, \"Jadidlar izidan\" — milliy o'zlik, \"Eco-schools\" — ekologik madaniyat, \"Raqamli avlod qizlari\" — IT. Har klubning aniq ish rejasi, jadvali va mas'ul rahbari bo'ladi. Maqsad — har bir o'quvchi kamida bitta klubda faol ishtirok etishi.",
        keys: ["7 klub", "har biri 1 ko'nikma", "reja+jadval+rahbar", "har bola — 1 klub"]
      },
      {
        q: "88. Festival yoki tanlovni qanday tashkil qilasiz?",
        a: "Olti bosqichda: 1) maqsadni aniqlab reja va ssenariy tuzaman; 2) moliyalashtirishni hal qilaman — tadbirni maktab ish rejasiga kiritaman; 3) tashkiliy ishlar — sana, joy, mas'ul shaxslar, sahna bezagi; 4) baholash mezonlarini aniqlab sifatli o'tkazaman; 5) g'olib va sovrindorlarni rag'batlantiraman; 6) jarayonni OAV va ijtimoiy tarmoqlarda yoritaman. Mablag' bo'lmasa maktab imkoniyati, o'quvchi va ota-onalar hamda homiylardan foydalanaman — tadbirning qiymati pulda emas, g'oyada.",
        keys: ["6 bosqich", "maqsad → moliya → tashkiliy → o'tkazish → rag'bat → yoritish"]
      },
      {
        q: "89. Bir vaqtda 7 ta klubni qanday boshqarasiz?",
        a: "Tizimli boshqaruv: 1) har klubga alohida ish rejasi, jadval va mas'ul rahbar; 2) o'quvchilarni qiziqishlariga qarab taqsimlash; 3) klublarni o'zaro bog'lash (masalan \"Debat\" + \"Xorijiy tillar\" ingliz tilida debat); 4) jarayonlarni doimiy tahlil qilib elektron platformaga kiritish. IT mutaxassisi sifatida monitoringni raqamli yuritaman — bu vaqtni tejaydi.",
        keys: ["reja+jadval+rahbar", "qiziqishga qarab taqsim", "klublarni bog'lash", "raqamli monitoring"]
      },
      {
        q: "90. \"Turon teatr\" tanlovini qanday tashkil qilasiz?",
        a: "Teatr san'ati va sahna madaniyatini targ'ib qiladi. Ishtirokchilar — 7-10-sinf, 8 nafardan oshmagan jamoa. Uch bosqich: mahalliy (mart), hududiy (aprel), respublika (iyun). turonteatri.uz platformasi orqali ariza. Ona tili, adabiyot va tarix o'qituvchilari bilan hamkorlikda jadid bobolarimiz asarlari asosida ssenariy tayyorlaymiz. Respublika g'olibi xorijiy mamlakatga yo'llanma oladi.",
        keys: ["7-10-sinf", "8 nafar", "mart/aprel/iyun", "turonteatri.uz", "g'olib — xorijga"]
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
        a: "Eng kuchli yo'nalishim (TATU bitiruvchisi). 1) targ'ibot — InfoWeek, plakat va videoroliklar; 2) a'zolarni ro'yxatga olib reja va koordinator belgilash; 3) mahorat darslari — IT-Park rezidentlari, talabalar va muvaffaqiyatli IT-ayollarni taklif qilaman, o'zim Canva, SMM, copy-writing va dasturlash asoslarini o'rgataman; 4) real startap/loyiha tayyorlashda yordam; 5) tuman bosqichidan respublika tanloviga olib chiqish va mediada yoritish.",
        keys: ["InfoWeek", "IT-Park rezidentlari", "Canva, SMM, dasturlash", "real startap", "tuman→respublika"]
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
        a: "O'quvchilarda liderlik va soft skillsni shakllantiruvchi o'zini-o'zi boshqarish organi. Demokratik saylov orqali tashkil qilaman: nomzodlar dasturini taqdim etadi, o'quvchilar ovoz beradi. So'ng muntazam seminar va treninglar o'tkazaman, tashabbuslarini qo'llab-quvvatlayman, faoliyatini mediada yoritaman. Nizomga ko'ra kamida 9 kishilik stol-stul ajratiladi. Bu organ mustaqil qaror qabul qilishga va mas'uliyatni his etishga o'rgatadi.",
        keys: ["o'zini-o'zi boshqarish", "demokratik saylov", "seminar/trening", "9 kishilik stol", "mustaqil qaror"]
      },
      {
        q: "101. \"Debat\" klubi o'quvchiga qanday foyda beradi?",
        a: "\"Karl Popper\" formati asosida tashkil qilaman. Har hafta dolzarb ijtimoiy-iqtisodiy mavzu tanlanib, ikki jamoa (tarafdor va qarshi) bahslashadi. Bu klub eng muhim soft skillsni rivojlantiradi: tanqidiy va mustaqil fikrlash, notiqlik, fikrni dalil bilan asoslash, raqibni hurmat qilish, tez qaror qabul qilish, stressga chidamlilik. \"Xorijiy tillar\" klubi bilan ingliz tilida ham debat o'tkazaman.",
        keys: ["Karl Popper format", "2 jamoa (tarafdor/qarshi)", "tanqidiy fikrlash, notiqlik", "ingliz tilida ham"]
      },
      {
        q: "102. \"Xorijiy tillar\" klubini qanday tashkil qilasiz?",
        a: "Haftada 2 marta, darsdan tashqari vaqtda erkin muloqot formatida (Speaking club). Qiziqarli qilish uchun ingliz tilida kinolar muhokamasi, intellektual o'yinlar (Mafia, Alias) va munozaralar. Maqsad — tilga nisbatan qo'rquvni yo'qotib, erkin gapirish ko'nikmasini shakllantirish. Klubni IELTS/CEFR sertifikatiga tayyorgarlik bilan bog'layman, chunki bu xorijiy grantlar va oliygohlarga yo'l ochadi.",
        keys: ["haftada 2 marta", "Speaking club", "kino muhokamasi", "Mafia/Alias", "IELTS/CEFR"]
      },
      {
        q: "103. \"Jadidlar izidan\" klubida nima qilasiz?",
        a: "Ona tili, adabiyot va tarix o'qituvchilari bilan hamkorlikda. O'quvchilar 8 ta jadid alloma — Behbudiy, Cho'lpon, Fitrat, Avloniy, Abdulla Qodiriy, Munavvar Qori, Is'hoqxon Ibrat va G'ulom Zafariy — hayoti, asarlari va g'oyalarini o'rganadi. Ular shu allomalar asosida kichik ssenariylar yozib, sahna ko'rinishlari namoyish etadi. Klub orqali kitobxonlik, milliy o'zlik, tanqidiy fikrlash va vatanparvarlik shakllanadi.",
        keys: ["8 alloma", "ssenariy+sahna", "milliy o'zlik"]
      },
      {
        q: "104. \"Eco-schools\" klubi va alohida ta'lim ehtiyojli bolalar uchun nima qilasiz?",
        a: "Eco-schools: ekologik madaniyat — ko'kalamzorlashtirish, chiqindilarni qayta ishlash (recycling), suv va energiya tejash, hudud tozalash. Bosqichlar: muammoni aniqlash → eko-kengash → reja → amaliy harakat → natijani yoritish. Inklyuziv to'garaklar: alohida ehtiyojli bolalar uchun imkoniyatiga mos faoliyat (IT, shaxmat, art-terapiya, mental arifmetika). Tengdoshlari orasidan \"Buddy\" (ko'ngilli do'st) tizimini yo'lga qo'yaman. Maqsad — har bola jamoaning to'laqonli a'zosi bo'lishi.",
        keys: ["Eco: ko'kalamzor, recycling, tejash", "inklyuziv: IT/shaxmat/art-terapiya", "Buddy tizimi"]
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
        a: "Bu menga juda yaqin keys, IT mutaxassisiman. \"Oltin o'rta\" yechimni taklif qilaman: tibbiyot va IT sintezidagi yangi kasblar — Bioinformatika, Tibbiy kibernetika, sog'liqni saqlashda data analitika. Shunda bolaning matematikaga qiziqishi ham saqlanadi, ota-onaning shifokorlik orzusi ham ushaladi.",
        keys: ["oltin o'rta", "Bioinformatika/Tibbiy kibernetika", "ikki tomon ham qondiriladi"]
      },
      {
        q: "65. Yevropa madaniyatiga qiziqadi, ota-ona milliy qadriyat tarafdori?",
        a: "Muvozanat yarataman: boshqa madaniyatni o'rganish dunyoqarashni kengaytiradi, lekin milliy ildizga sodiqlik muhim. Ota-onaga taqiqlash emas, yo'naltirish kerakligini tushuntiraman. Maqsad — milliy o'zligiga sodiq, dunyoga ochiq inson.",
        keys: ["muvozanat", "taqiqlash emas, yo'naltirish", "ildizga sodiq, dunyoga ochiq"]
      },
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
        a: "\"Kichik qadamlar\" metodi: avval 2-3 yaqin do'sti davrasida, keyin kichik guruh sardori, so'ng \"Debat\" klubiga jalb qilaman. Notiqlik — tug'ma iste'dod emas, rivojlantirsa bo'ladigan ko'nikma ekanini amalda ko'rsataman. Bilim + ishonch = muvaffaqiyat.",
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
      },
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
      },
      {
        q: "76. Ekskursiyaga olib bordingiz, o'quvchilar passiv?",
        a: "Passivlikni qiziqishga aylantirish uchun kichik vazifalar beraman: \"Siz muhandisdan intervyu oling\", \"Siz ishlab chiqarish hajmini hisoblang\". Amaliy mas'uliyat passivlikni yo'qotadi.",
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
      },
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
        q: "86. Ijtimoiy himoyaga muhtoj oila farzandiga yo'l xaritasi",
        a: "Ro'yxat (Ijtimoiy reyestr) → imtiyozlar haqida ma'lumot → qobiliyatini aniqlab bepul to'garak/klubga jalb → kasb-hunarga yo'naltirish → iqtidorli bo'lsa grant asosida oliygohga → maktab/homiy yordamida o'quv vositalari, mahalla hamkorligi. Maqsad — moddiy qiyinchilik iqtidorga to'sqinlik qilmasligi.",
        keys: ["ro'yxat → imtiyoz → bepul klub → kasb-hunar → grant → homiy/mahalla"]
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
