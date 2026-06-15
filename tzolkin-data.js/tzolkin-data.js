// PODATKI
const tzolkinSigns = [ "Imix (Krokodil)","Ik’ (Veter)","Akbal (Noč)","Kan (Seme)","Chicchan (Kača)","Cimi (Smrt)","Manik’ (Jelen)","Lamat (Zvezda)","Muluk (Voda)","Ok (Pes)","Chuwen (Opica)","Eb (Človek)","Ben (Trs)","Ix (Jaguar)","Men (Orel)","Cib (Jastreb)","Caban (Zemlja)","Etz’nab (Kremen)","Kawak (Nevihta)","Ajaw (Sonce)" ];

const tzolkinSignImages = [ "https://static.wixstatic.com/media/7535eb_8b15827f3f0749f58b47edf2ec8ff34a~mv2.png", "https://static.wixstatic.com/media/7535eb_da5c22d0b20c4650ae78bd78d44bdf90~mv2.png", "https://static.wixstatic.com/media/7535eb_1431fb4ee97a418383209553a73974e5~mv2.png", "https://static.wixstatic.com/media/7535eb_63fa92348cef45778a33ea8df474f3b8~mv2.png", "https://static.wixstatic.com/media/7535eb_b144e80ceccc4304b10027e8d2f1e674~mv2.png", "https://static.wixstatic.com/media/7535eb_9eda107ea6ed46e8880d6cd3394b3eca~mv2.png", "https://static.wixstatic.com/media/7535eb_498008e2e9fb4c7ebc66e4a2cf25a1d4~mv2.png", "https://static.wixstatic.com/media/7535eb_a86c9fe89c5f4f4d8a810c284e40bf13~mv2.png", "https://static.wixstatic.com/media/7535eb_b1612f1d298245a483212ca3997b6872~mv2.png", "https://static.wixstatic.com/media/7535eb_fcf459036d31451fb913cd556bdf98b1~mv2.png", "https://static.wixstatic.com/media/7535eb_c5e4c01f59e74424806a8b82d55ea9c9~mv2.png", "https://static.wixstatic.com/media/7535eb_8b1bd5f0bebf4e9e84734d0dd7c18a55~mv2.png", "https://static.wixstatic.com/media/7535eb_5a43cbda692c4bff8790b8d4fe769ec5~mv2.png", "https://static.wixstatic.com/media/7535eb_891ac2c5109f44c8927f69170b93aa78~mv2.png", "https://static.wixstatic.com/media/7535eb_bcc1d28cea634696895554c9f25a2788~mv2.png", "https://static.wixstatic.com/media/7535eb_acd453dcd54e4ca29483cb610e3bab2e~mv2.png", "https://static.wixstatic.com/media/7535eb_d413aa3902864a09a3c2bb1ae2996b53~mv2.png", "https://static.wixstatic.com/media/7535eb_57d9eafe0dd249ddb5194e43a629e516~mv2.png", "https://static.wixstatic.com/media/7535eb_413ee006283f479dbb46cc737b796bb4~mv2.png", "https://static.wixstatic.com/media/7535eb_18fc81a965aa4e69974f11d5bb68dc60~mv2.png" ];

const tzolkinNumbers = [

`Ton 1

Ti si začetek.

Prvi dih stvarstva.

V tebi živi sila namena, ki sproži gibanje novega cikla.

Nič še ni oblikovano, a vse že obstaja kot potencial.

Tvoja energija odpira vrata poti, ki še ne obstaja.

Ko si v skladu s sabo, se življenje začne organizirati okoli tvojega namena.

Vprašanje tega tona je:

Kaj želi skozi mene nastati?`,

`Ton 2

Ti si dvojnost.

Prvi trenutek zavedanja razlike.

V tebi se rojeva sposobnost razločevanja, izbire in notranjega dialoga.

Skozi kontraste spoznavaš resnico.

Skozi odnose spoznavaš sebe.

Tvoja pot ni enost, ampak razumevanje med poloma.

Vprašanje tega tona je:

Kaj v meni išče ravnovesje?`,

`Ton 3

Ti si gibanje.

Energija, ki se začne premikati.

Kar je bilo rojeno, zdaj išče izraz.

Tvoja duša ne ostaja v ideji, ampak jo prenaša v življenje.

Skozi tebe se začnejo stvari dogajati.

Tvoja prisotnost sproža tok.

Vprašanje tega tona je:

Kako se moja resnica izraža skozi delovanje?`,

`Ton 4

Ti si oblika.

Struktura, ki daje stabilnost toku.

Tvoja energija gradi temelje, na katerih lahko nekaj raste.

Ne ustvarjaš hitro, ustvarjaš trdno.

Tvoja moč je v stabilnosti in zanesljivosti.

Ko si prisotna, se stvari umirijo in dobijo obliko.

Vprašanje tega tona je:

Kaj v mojem življenju potrebuje strukturo?`,

`Ton 5

Ti si središče.

Točka moči in usmeritve.

V tebi se zbira energija, ki daje smer delovanju.

Tvoja naloga je aktivirati potencial in ga usmeriti.

Ko se osredotočiš, se stvari začnejo premikati.

Tvoja prisotnost krepi druge.

Vprašanje tega tona je:

Kam usmerjam svojo življenjsko moč?`,

`Ton 6

Ti si ravnovesje.

Ritem med gibanjem in mirovanjem.

Med dajanjem in sprejemanjem.

Tvoja energija išče harmonijo v vsakdanjem življenju.

Ko si v ravnovesju, postane vse lažje.

Tvoje življenje začne teči brez odpora.

Vprašanje tega tona je:

Kaj me vrača v ravnovesje?`,

`Ton 7

Ti si vrh.

Točka tišine in zavedanja.

Kanal, skozi katerega se povežejo višje ravni zavesti.

Tvoja intuicija je močna in neposredna.

V tebi se odpirajo vpogledi brez razlage.

Ko si mirna, slišiš več.

Vprašanje tega tona je:

Kaj mi želi povedati notranji glas?`,

`Ton 8

Ti si harmonija.

Usklajenost z resnico.

Ko živiš skladno s sabo, postaneš jasen odsev svojega bistva.

Tvoja energija razkriva, kje si v skladu in kje ne.

To je trenutek iskrenosti.

Vprašanje tega tona je:

Kaj v meni želi postati skladno?`,

`Ton 9

Ti si namen.

Energija osredotočenja in dokončevanja.

V tebi se krepi moč, da nekaj pripelješ do zrelosti.

To je faza globljega razumevanja poti.

Kar je zasajeno, zdaj dozoreva.

Vprašanje tega tona je:

Kaj v mojem življenju dozoreva?`,

`Ton 10

Ti si manifestacija.

Oblika, ki nastane iz energije.

Kar je bilo dolgo v notranjem svetu, zdaj postaja vidno.

Tvoja energija ustvarja rezultate v fizičnem svetu.

Misli postajajo dejanja.

Vprašanje tega tona je:

Kaj želim uresničiti?`,

`Ton 11

Ti si osvoboditev.

Raztapljanje starega.

Kar ne služi več tvoji poti, odhaja.

Tvoja energija čisti prostor za novo.

Včasih skozi spremembo, včasih skozi razpad.

A vedno z namenom rasti.

Vprašanje tega tona je:

Kaj sem pripravljena spustiti?`,

`Ton 12

Ti si povezovanje.

Most med ljudmi, idejami in svetovi.

Tvoja energija združuje in prinaša razumevanje.

Sodelovanje je tvoja naravna pot.

Ko deliš, se množi.

Vprašanje tega tona je:

Kako lahko prispevam celoti?`,

`Ton 13

Ti si transcendenca.

Zaključek in začetek hkrati.

V tebi živi modrost ciklov in zavedanje večnosti.

Kar se zaključi, se nikoli ne izgubi — samo spremeni obliko.

Tvoja energija povezuje svetove.

Vprašanje tega tona je:

Kam me vodi moj višji tok?`

];

const tzolkinNumberImages = [
"https://static.wixstatic.com/media/7535eb_8128aa403fb34a39a9abf4c539e07d4e~mv2.png",
"https://static.wixstatic.com/media/7535eb_58d9713024fd44e3b574ed6e66319df3~mv2.png",
"https://static.wixstatic.com/media/7535eb_fa772de6b389412a874060866aafe0d0~mv2.png",
"https://static.wixstatic.com/media/7535eb_034123a9c80d497da70e29c529f761ab~mv2.png",
"https://static.wixstatic.com/media/7535eb_0949be53659a4112b79aeaf88fba4182~mv2.png",
"https://static.wixstatic.com/media/7535eb_31c0710a2c40451c8be0474fca598690~mv2.png",
"https://static.wixstatic.com/media/7535eb_abc754938a3c47e5a3b497a802fbbc09~mv2.png",
"https://static.wixstatic.com/media/7535eb_a195a39082484f0eafd271594204fd99~mv2.png",
"https://static.wixstatic.com/media/7535eb_62f1b1f66190462faf5af9be6f04e3f3~mv2.png",
"https://static.wixstatic.com/media/7535eb_630ea6308de14ff089b351e4f1967594~mv2.png",
"https://static.wixstatic.com/media/7535eb_b098132554904e4d8d689176145249a0~mv2.png",
"https://static.wixstatic.com/media/7535eb_6cf0d4b4439a46eb952d52e6cd02bb28~mv2.png",
"https://static.wixstatic.com/media/7535eb_a5b6f5b75b254f1ca65fbe7cafb8086e~mv2.png"
];

// TVOJI PODROBNI OPISI
const tzolkinSignDescriptions = [

`Imix (Krokodil) 🌊

Ti si hči prvobitnih voda.

V tebi živi spomin na začetek.

Na trenutek, ko se je življenje prvič odločilo obstajati.

Imix je maternica stvarstva. Prostor, kjer ideje še nimajo oblike, a že nosijo potencial prihodnjih svetov.

Tvoja duša se je rodila z darom ustvarjanja.

Morda si skozi življenje večkrat začela znova. Morda si bila poklicana, da ustvariš nekaj, česar pred teboj ni bilo.

Tvoja moč ni v posnemanju.

Tvoja moč je v rojevanju novega.

Ko zaupaš svoji intuiciji, se odprejo vrata, ki jih razum ne more videti.

Ko poslušaš svoje notranje vode, te življenje vedno vodi nazaj k tvoji resnici.

Ne podcenjuj svojih občutkov.

Ne podcenjuj svojih vizij.

V njih govori tvoja Koda Časa.

✨ To je le prvi utrip tvoje osebne frekvence. Celotna knjiga Osebna Koda Časa™ razkrije globlje plasti tvojega kozmičnega zapisa.`,

`Ik' (Veter) 🌬

Ti si hči svetega diha.

Vse v tvojem življenju se začne z besedo.

Z mislijo.

Z vibracijo.

Veter je neviden, a premika svetove.

Tudi ti nosiš sposobnost vplivati na ljudi, pogosto bolj skozi energijo svojih besed kot skozi dejanja.

Tvoja duša je prišla učit resnico.

Ne popolnosti.

Ne ugajanja.

Resnico.

Ko govoriš iz srca, se odpirajo poti.

Ko skrivaš svojo resnico, se energija ustavi.

Življenje te vedno znova vabi, da zaupaš svojemu glasu.

Da izraziš tisto, kar želi skozi tebe priti na svet.

Tvoje besede niso naključne.

So semena prihodnosti.

✨ Tvoja Koda Časa skriva še mnogo več kot osnovni zapis tega naguala.`,

`Akbal (Noč) 🌙

Ti si hči sanj.

V tebi obstaja svet, ki ga drugi pogosto ne vidijo.

Akbal odpira vrata med vidnim in nevidnim.

Med zavestjo in podzavestjo.

Med človekom in dušo.

Tvoja moč ni vedno očitna.

Raste v tišini.

V trenutkih samote.

V prostorih, kjer se drugi izgubijo, ti pa najdeš smer.

Morda si že zgodaj začutila, da vidiš življenje nekoliko drugače.

Da zaznavaš več.

Da čutiš več.

To ni slabost.

To je dar.

Noč te uči zaupanja.

Ne v zunanje odgovore.

V notranje vedenje.

Ko si pripravljena stopiti skozi vrata neznanega, odkriješ svojo svetlobo.

✨ Tvoja osebna knjiga razkrije, kako se ta energija prepleta s tvojim tonom in življenjsko potjo.`,

`Kan (Seme) 🌱

Ti si hči potenciala.

V tebi spi gozd možnosti.

Vsaka misel.

Vsaka odločitev.

Vsaka izbira.

Je seme prihodnosti.

Kan te uči, da nič ni majhno.

Vsako seme nosi celotno drevo.

Vsaka odločitev nosi novo življenjsko smer.

Tvoja duša se je rodila z darom manifestacije.

Kar neguješ, raste.

Kar hraniš z energijo, se množi.

Zato postaja pomembno, kam usmerjaš svojo pozornost.

Življenje te vabi, da zaupaš procesu.

Ni ti treba poznati celotne poti.

Dovolj je, da posadiš prvo seme.

Narava bo opravila preostalo.

✨ V tvoji osebni Kodi Časa se skriva še mnogo globljih plasti tega zapisa.`,

`Chicchan (Kača) 🐍

Ti si hči življenjske sile.

V tebi teče starodavni ogenj.

Moč, ki ustvarja življenje.

Moč, ki zdravi.

Moč, ki preobraža.

Kača ne raste tako, da postane nekaj novega.

Raste tako, da odvrže staro kožo.

Tudi tvoja duša je prišla z darom preobrazbe.

Skozi življenje te bodo določeni cikli povabili, da pustiš za seboj identitete, ki so postale premajhne za tvojo resnico.

To ni izguba.

To je rojstvo.

Tvoje telo nosi modrost.

Tvoja intuicija nosi smer.

Tvoja energija nosi odgovor.

Ko zaupaš svoji življenjski sili, se začneš spominjati svoje resnične moči.

✨ Celotna Osebna Koda Časa™ razkrije, kako se ta energija izraža v tvoji življenjski zgodbi.`,

`Cimi (Smrt) 💀

Ti si hči prehoda.

V tvoji energiji živi sposobnost zaključevanja ciklov in odpiranja novih vrat.

Cimi ni konec.

Cimi je vrata.

Kar drugi doživljajo kot izgubo, ti sčasoma prepoznaš kot preobrazbo.

Tvoja duša razume nekaj, česar se mnogi bojijo.

Da življenje nikoli ne miruje.

Da vse raste.

Da vse dozoreva.

Da vse spreminja obliko.

Morda si skozi življenje večkrat stala na razpotjih, kjer si morala izpustiti staro različico sebe.

Vsakič si se rodila nekoliko bolj resnična.

Vsakič nekoliko bolj svobodna.

Tvoja moč je v zaupanju procesu.

Ko nehaš držati tisto, kar je zaključeno, se začne pretakati nova energija.

✨ V tvoji osebni Kodi Časa se skriva še globlji pomen teh prehodov.`,

`Manik' (Jelen) 🦌

Ti si hči svetega zdravljenja.

Tvoja energija prinaša mir.

Prinaša ravnovesje.

Prinaša prisotnost.

Jelen ne zdravi z močjo.

Zdravi s prisotnostjo.

S svojo nežnostjo.

S svojo modrostjo.

Tvoja duša nosi dar, da ljudi spomni na njihov notranji mir.

Morda tega niti ne opaziš.

A ljudje se pogosto počutijo bolje po srečanju s teboj.

Tvoja medicina ni v popolnosti.

Tvoja medicina je v iskrenosti.

V odprtem srcu.

V pripravljenosti poslušati.

Ko spoštuješ svojo občutljivost, postane ta tvoja največja moč.

✨ Celotna knjiga razkrije, kako se tvoja zdravilska energija izraža skozi življenjske cikle.`,

`Lamat (Zvezda) ⭐

Ti si hči svetlobe.

Rojena si bila, da siješ.

Ne zato, da bi bila občudovana.

Temveč zato, da bi spomnila druge na njihovo lastno svetlobo.

Lamat nosi energijo lepote.

Harmonije.

Ustvarjalnosti.

Obilja.

Tvoja duša razume, da je lepota sveta oblika medicine.

Da ustvarjanje zdravi.

Da radost odpira vrata.

Ko si povezana s svojo resnico, postane tvoje življenje svetilnik.

Ne siliš.

Ne prepričuješ.

Preprosto siješ.

In svetloba opravi svoje delo.

✨ Tvoja Koda Časa razkriva še globlje darove tvoje zvezdne narave.`,

`Muluk (Voda) 💧

Ti si hči svetih voda.

V tebi teče spomin na pretok življenja.

Na sprejemanje.

Na predajo.

Na zaupanje.

Tvoja duša je občutljiva.

Ne zato, ker bi bila šibka.

Temveč zato, ker zaznava več.

Muluk te uči, da čustva niso ovira.

So kompas.

So jezik duše.

Ko se nehaš boriti proti svojim občutkom, začneš razumeti njihovo modrost.

Voda vedno najde svojo pot.

Tudi ti jo boš.

Ne glede na to, koliko ovir se pojavi.

✨ V tvoji osebni knjigi se skriva še globlji zapis tvoje čustvene in duhovne pokrajine.`,

`Ok (Pes) 🐕

Ti si hči srca.

Tvoja največja moč je ljubezen.

Ne romantična predstava ljubezni.

Temveč tista tiha, zvesta, resnična prisotnost.

Ok nosi energijo prijateljstva.

Predanosti.

Zvestobe.

Srčne modrosti.

Tvoja duša se je rodila z darom povezovanja.

Ljudje ob tebi pogosto začutijo varnost.

Občutek doma.

Občutek sprejetosti.

Življenje te uči, da svoje srce ohraniš odprto tudi takrat, ko si bila ranjena.

Kajti tvoje srce ni bilo ustvarjeno za zapiranje.

Ustvarjeno je bilo za sijanje.

✨ Celotna Koda Časa razkrije še globlje plasti tvoje srčne medicine.`,

`Chuwen (Opica) 🐒

Ti si hči ustvarjalnosti.

V tebi živi otrok vesolja.

Tisti del duše, ki se še zna igrati.

Ki še zna sanjati.

Ki še zna ustvarjati brez strahu.

Opica je tkalka časa.

Prepleta niti dogodkov, srečanj in navdihov.

Tvoja energija pogosto prinaša lahkotnost tja, kjer so drugi postali preveč resni.

Življenje te uči, da radost ni nagrada.

Radost je pot.

Ko ustvarjaš iz srca, se povežeš s tokom življenja.

Ko si dovoliš igrivost, se začne prebujati tvoja resnična moč.

✨ Tvoja osebna knjiga razkriva, kako ustvarjalna energija oblikuje tvojo življenjsko pot.`,

`Eb (Človek) 🚶‍♀️

Ti si hči poti.

Vsak korak, ki ga narediš, ustvarja novo smer.

Eb nosi energijo svobodne volje.

Zavestne izbire.

Osebne odgovornosti.

Tvoja duša je prišla na Zemljo raziskovat življenje skozi izkušnjo.

Ni ti treba poznati vseh odgovorov.

Dovolj je, da narediš naslednji korak.

Vsaka odločitev odpira nova vrata.

Vsaka izkušnja nosi modrost.

Tvoja pot ni naključna.

Tudi takrat ne, ko je ne razumeš.

Ko zaupaš svojemu notranjemu vodstvu, se začne pot razkrivati sama.

✨ Tvoja Koda Časa razkrije globlji zemljevid tvoje življenjske poti.`,

`Ben (Trs) 🌾

Ti si hči svetega stebra.

Most med Nebom in Zemljo.

Ben nosi energijo pokončnosti.

Integritete.

Vizije.

Notranje moči.

Tvoja duša razume pomen korenin.

In pomen kril.

Učiš se stati trdno v svoji resnici, ne da bi izgubila svojo nežnost.

Življenje te pogosto kliče v vlogo vodnice.

Ne zato, ker bi morala voditi druge.

Temveč zato, ker si pripravljena živeti svojo resnico.

Tvoja prisotnost ustvarja prostor, kjer lahko rastejo tudi drugi.

✨ Celotna knjiga razkriva globlje poslanstvo tvoje energije Ben.`,

`Ix (Jaguar) 🐆

Ti si hči skrivnosti.

V tebi živi starodavni spomin na poti, po katerih večina ne hodi.

Jaguar ne potrebuje odobravanja sveta.

Pozna svojo moč.

Pozna svojo resnico.

Pozna svojo pot.

Tvoja energija je povezana z intuicijo.

Z magijo.

Z notranjim vedenjem.

Pogosto zaznavaš stvari, ki jih drugi spregledajo.

Vidiš pod površino.

Za besedami.

Za maskami.

Tvoja moč raste v tišini.

Ko zaupaš svoji notranji modrosti, postaneš neustavljiva.

✨ Tvoja osebna Koda Časa skriva še globlje skrivnosti tvoje duše.`,

`Men (Orel) 🦅

Ti si hči vizije.

Rojena si bila, da vidiš dlje.

Višje.

Širše.

Orel ne opazuje sveta iz omejitev.

Opazuje ga iz perspektive.

Tvoja duša nosi dar vpogleda.

Sposobnost povezovanja delov v celoto.

Razumevanja večje slike.

Morda si pogosto korak pred drugimi.

Morda vidiš možnosti tam, kjer drugi vidijo ovire.

Tvoja naloga ni, da se spustiš nižje.

Tvoja naloga je, da zaupaš svojemu pogledu.

Ko slediš svoji viziji, se odpirajo nove poti.

✨ Celotna knjiga razkriva, kako se tvoja vizija prepleta s tvojim življenjskim poslanstvom.`,
`Cib (Modrec) 🦉

Ti si hči modrosti.

V tebi živi spomin na mnoge poti.

Na zmage.

Na padce.

Na lekcije, ki jih duša zbira skozi čas.

Cib ni znanje.

Cib je razumevanje.

Je trenutek, ko izkušnja postane modrost.

Tvoja duša nosi sposobnost videti globlji pomen dogodkov.

Videti darilo tam, kjer drugi vidijo le preizkušnjo.

Videti zdravilo tam, kjer drugi vidijo rano.

Ena največjih lekcij tvoje poti je odpuščanje.

Ne zato, ker bi pozabila.

Temveč zato, ker se osvobodiš.

Ko odpustiš sebi, se osvobodi preteklost.

Ko odpustiš drugim, se osvobodi prihodnost.

V tvojem srcu živi modrost prednikov.

Zaupaj ji.

✨ Tvoja Osebna Koda Časa™ razkriva še globlje zapise modrosti, ki jih nosi tvoja duša.`,

`Caban (Zemlja) 🌎

Ti si hči Zemlje.

V tvojem srcu utripa ritem življenja.

Ritem narave.

Ritem gibanja.

Ritem evolucije.

Caban te spominja, da nisi ločena od sveta.

Si del velikega diha Zemlje.

Vsak tvoj korak odmeva skozi mrežo življenja.

Tvoja duša nosi dar povezovanja.

Povezovanja ljudi.

Idej.

Svetov.

Preteklosti in prihodnosti.

Ko poslušaš Zemljo, začneš slišati tudi sebe.

Ko spoštuješ svoje naravne cikle, se vrne notranji mir.

Ni ti treba hiteti.

Ni ti treba dohitevati.

Življenje že pozna svoj ritem.

Tvoja naloga je, da se mu pridružiš.

✨ Celotna knjiga razkrije, kako se tvoja energija povezuje z večjimi cikli časa.`,

`Etz'nab (Kremen) ✨

Ti si hči resnice.

Tvoja energija je ogledalo.

Svetlobni kremen, ki razkrije tisto, kar je bilo skrito.

Včasih je ta dar neudoben.

Kajti resnica ne prihaja vedno nežno.

A vedno prihaja osvobajajoče.

Tvoja duša nosi sposobnost videti jasno.

Brez mask.

Brez iluzij.

Brez pretvarjanja.

Življenje te uči iskrenosti.

Najprej do sebe.

Potem do sveta.

Ko si pripravljena pogledati svojo resnico, se začnejo raztapljati stari vzorci.

Kar ni resnično, odpade.

Kar je resnično, ostane.

In prav tam se rodi svoboda.

✨ Tvoja Osebna Koda Časa™ razkriva še globlje plasti tvoje notranje resnice.`,

`Kawak (Nevihta) ⛈️

Ti si hči preobrazbe.

V tebi živi moč nevihte.

Moč dežja.

Moč strele.

Moč ponovnega rojstva.

Kawak prihaja, ko je čas za spremembo.

Ko staro ne more več nositi novega.

Morda si v življenju doživela obdobja, ki so delovala kot vihar.

A vsaka nevihta je odstranjevala tisto, kar ni bilo več skladno s tvojo potjo.

Tvoja duša se ne boji preobrazbe.

Rodila se je zanjo.

Ko sprejmeš spremembo, se energija začne premikati.

Ko zaupaš procesu, se začne odpirati nova resničnost.

Po vsaki nevihti pride jasnejše nebo.

Po vsaki preobrazbi se rodi nova različica tebe.

✨ Tvoja osebna knjiga razkriva, kako energija preobrazbe oblikuje tvoje življenjske cikle.`,

`Ajaw (Sonce) ☀️

Ti si hči svetlobe.

V tvojem jedru gori iskra Stvarstva.

Ajaw je spomin na tvojo božansko naravo.

Na del tebe, ki nikoli ni bil ranjen.

Nikoli izgubljen.

Nikoli ločen.

Tvoja duša se je rodila z darom osvetljevanja poti.

Ko stopiš v svojo resnico, navdihuješ druge, da storijo enako.

Ni ti treba postati svetloba.

Svetloba že si.

Potrebno je le, da odstraniš vse, kar jo prekriva.

Ajaw te vabi, da zaupaš svoji veličini.

Ne egu.

Temveč svoji pristni naravi.

Naravi, ki ve, da smo vsi del istega Sonca.

Ko zasiješ brez strahu, se začne prebujati tudi svet okoli tebe.

✨ To je le prvi vpogled v tvojo Osebno Kodo Časa™. Celotna personalizirana knjiga razkrije tvoj KIN, ton, val časa, drevo življenja, darove duše, življenjske lekcije in globlji kozmični zapis, ki ga nosiš od rojstva.`

];


