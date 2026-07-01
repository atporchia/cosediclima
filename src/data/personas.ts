export interface Persona {
  id: string;
  slug: string;
  name: string;
  description: string;
  coreFear: string;
  identityDefense: string;
  persuasionStrategy: string;
  avoidSaying: string[];
  sayInstead: string[];
  bestFrames: string[];
  exampleReplies: {
    gentle: string;
    direct: string;
    sharp: string;
  };
}

export const personas: Persona[] = [
  {
    id: "complottista-anti-elite",
    slug: "complottista-anti-elite",
    name: "Complottista anti-élite",
    description:
      "Non si fida di governi, media, scienziati o istituzioni internazionali. Vede il clima come una scusa per controllo, tasse o manipolazione.",
    coreFear: "Essere controllato o manipolato da poteri forti.",
    identityDefense: "Io non sono una pecora. Io non credo alla propaganda.",
    persuasionStrategy:
      "Non partire da \"fidati degli esperti\". Parti da \"segui i soldi\" e mostra chi guadagna dal ritardo mentre le persone normali pagano il conto.",
    avoidSaying: [
      "Devi fidarti degli scienziati.",
      "Lo dice l'IPCC.",
      "Sei ignorante.",
      "È la verità ufficiale.",
    ],
    sayInstead: [
      "Non ti sto chiedendo di fidarti delle élite.",
      "Ti sto chiedendo chi ci guadagna se non facciamo nulla.",
      "I ricchi possono proteggersi. Gli altri pagano il conto.",
      "Guardiamo i dati, non la propaganda.",
    ],
    bestFrames: [
      "anti-manipolazione",
      "costo per le persone normali",
      "segui i soldi",
      "salute e danni locali",
    ],
    exampleReplies: {
      gentle:
        "Capisco perché non ti fidi delle élite. Ma proprio per questo chiediamoci chi ci guadagna se restiamo fermi mentre aumentano caldo, danni, assicurazioni e costi.",
      direct:
        "Non ti sto chiedendo di fidarti dei politici. Ti sto chiedendo di guardare chi paga. Se il clima peggiora, i ricchi si proteggono. Il conto arriva agli altri.",
      sharp:
        "Il trucco è farti credere che negare sia ribellione. Ma se resti fermo mentre altri scaricano i costi su di te, non ti stai ribellando: ti stanno fregando.",
    },
  },
  {
    id: "destra-anti-ue",
    slug: "destra-anti-ue",
    name: "Persona di destra anti-EU",
    description:
      "Diffida delle politiche climatiche viste come iniziative imposte dall'Unione Europea, percepite come lontane dagli interessi nazionali e dei lavoratori italiani.",
    coreFear: "Perdere sovranità nazionale e potere d'acquisto per decisioni prese altrove.",
    identityDefense: "Io difendo l'interesse del mio paese, non seguo le direttive di Bruxelles.",
    persuasionStrategy:
      "Non partire difendendo l'UE in blocco. Parti dal costo concreto della dipendenza energetica dall'estero e da come una transizione ben gestita rafforza l'autonomia energetica nazionale, non la indebolisce.",
    avoidSaying: [
      "Devi fidarti dell'Unione Europea.",
      "Lo dice Bruxelles quindi è giusto.",
      "Sei sovranista e basta.",
      "È la linea ufficiale del governo.",
    ],
    sayInstead: [
      "Non ti sto chiedendo di fidarti di Bruxelles.",
      "Ti sto chiedendo se ti conviene dipendere da gas e petrolio importati.",
      "Più energia prodotta qui, meno soldi che escono dal paese.",
      "Guardiamo l'interesse nazionale con i numeri, non con lo slogan.",
    ],
    bestFrames: [
      "sovranità energetica",
      "interesse nazionale",
      "autonomia dall'estero",
      "costo delle importazioni",
    ],
    exampleReplies: {
      gentle:
        "Capisco la diffidenza verso le decisioni prese a Bruxelles. Ma proprio per interesse nazionale ha senso chiedersi: ci conviene continuare a dipendere da gas e petrolio comprati all'estero?",
      direct:
        "Non ti sto chiedendo di fidarti dell'UE. Ti sto chiedendo se ha senso, per un paese come il nostro, restare dipendente da energia fossile importata invece di produrne di più qui.",
      sharp:
        "Il trucco è farti credere che rifiutare la transizione sia difendere il paese. In realtà lascia l'Italia dipendente da chi controlla gas e petrolio all'estero.",
    },
  },
  {
    id: "padre-pratico",
    slug: "padre-pratico",
    name: "Padre pratico",
    description:
      "Persona pragmatica, orientata a soluzioni concrete e al portafoglio familiare più che a discussioni ideologiche. Vuole sapere cosa conviene fare, non discutere teorie.",
    coreFear: "Prendere decisioni sbagliate che pesano sul bilancio familiare o sulla sicurezza dei figli.",
    identityDefense: "Io penso alla mia famiglia, non alle ideologie.",
    persuasionStrategy:
      "Non aprire con allarmismo globale. Parti da benefici pratici e concreti: bollette, salute dei figli, valore della casa, sicurezza da eventi estremi.",
    avoidSaying: [
      "Devi salvare il pianeta.",
      "È un dovere morale verso le generazioni future.",
      "Chi non agisce è egoista.",
      "Guarda i dati IPCC.",
    ],
    sayInstead: [
      "Meno consumi, meno bolletta.",
      "Meno caldo estremo, meno rischi per i tuoi figli d'estate.",
      "Una casa efficiente vale di più e costa meno da mantenere.",
      "Sono scelte pratiche, non ideologia.",
    ],
    bestFrames: ["risparmio economico", "salute dei figli", "valore della casa", "sicurezza pratica"],
    exampleReplies: {
      gentle:
        "Capisco che vuoi soluzioni concrete, non discorsi. Guarda solo la bolletta: casa più efficiente, meno consumi, meno spese ogni mese.",
      direct:
        "Non ti sto chiedendo di salvare il pianeta. Ti sto chiedendo se vuoi pagare meno in bolletta e proteggere i tuoi figli dalle ondate di calore sempre più frequenti.",
      sharp:
        "Ignorare il clima non è neutro per la tua famiglia: significa più bollette, più rischi di salute d'estate e una casa che vale meno negli anni.",
    },
  },
  {
    id: "madre-preoccupata",
    slug: "madre-preoccupata",
    name: "Madre preoccupata",
    description:
      "Già sensibile al tema ma spesso ansiosa o sopraffatta dalle notizie catastrofiste, rischia di scivolare nel doomismo più che nel negazionismo.",
    coreFear: "Che i propri figli crescano in un mondo pericoloso, e di non poter fare nulla per proteggerli.",
    identityDefense: "Sono una brava madre, ma mi sento impotente davanti a tutto questo.",
    persuasionStrategy:
      "Non aggiungere altro allarme. Offri azione concreta e proporzionata: informazioni chiare, gesti pratici, senso di controllo, evitando sia la minimizzazione sia il catastrofismo.",
    avoidSaying: [
      "È la fine del mondo.",
      "Non c'è più niente da fare.",
      "Se non agisci ora i tuoi figli non avranno futuro.",
      "Dovresti sentirti in colpa per come vivi.",
    ],
    sayInstead: [
      "Non è tutto o niente: ogni azione riduce un rischio reale.",
      "Puoi informarti e fare scelte pratiche senza vivere nel panico.",
      "Il problema è serio, ma non è senza speranza.",
      "Non sei sola: sono scelte collettive, non solo tue.",
    ],
    bestFrames: ["protezione dei figli", "azione proporzionata", "riduzione del rischio", "comunità, non colpa individuale"],
    exampleReplies: {
      gentle:
        "Capisco l'ansia per il futuro dei tuoi figli. La buona notizia è che non è tutto o niente: ogni azione, individuale e collettiva, riduce un rischio reale.",
      direct:
        "Non serve vivere nel panico né sentirsi in colpa da sole. Informarsi bene e fare scelte pratiche è già una risposta utile e concreta.",
      sharp:
        "Il catastrofismo paralizza tanto quanto la negazione. Il modo migliore per proteggere i tuoi figli è agire con lucidità, non con il terrore.",
    },
  },
  {
    id: "collega-cinico",
    slug: "collega-cinico",
    name: "Collega cinico",
    description:
      "Non nega apertamente il problema ma lo liquida con sarcasmo e distacco, come argomento \"di moda\" o non prioritario rispetto al lavoro quotidiano.",
    coreFear: "Sembrare ingenuo o \"buonista\" davanti ai colleghi se mostra interesse per il tema.",
    identityDefense: "Io sono realista, non seguo le mode del momento.",
    persuasionStrategy:
      "Non chiedere entusiasmo. Usa un tono altrettanto pragmatico e diretto, basato su rischio e costo aziendale/professionale concreto, non su valori.",
    avoidSaying: [
      "Dovresti impegnarti di più per il pianeta.",
      "Sei disinformato.",
      "È una questione di valori.",
      "Non ti importa niente del futuro?",
    ],
    sayInstead: [
      "È un rischio operativo concreto, non una moda.",
      "Le aziende che lo ignorano pagano costi più alti dopo.",
      "Non è idealismo, è gestione del rischio.",
      "Guarda i numeri, non il sentimento.",
    ],
    bestFrames: ["rischio operativo", "costo aziendale", "gestione del rischio", "pragmatismo, non valori"],
    exampleReplies: {
      gentle:
        "Capisco lo scetticismo verso l'ennesimo tema \"di moda\". Ma guardalo come rischio operativo: le aziende che lo ignorano pagano di più dopo, non prima.",
      direct:
        "Non ti sto chiedendo di crederci per valori. Te lo dico per pragmatismo: è un rischio economico concreto, misurabile, che aumenta più aspetti.",
      sharp:
        "Il sarcasmo non abbassa i costi assicurativi né i danni da eventi estremi. È un rischio reale, che tu ci creda per valori o no.",
    },
  },
  {
    id: "giovane-doomista",
    slug: "giovane-doomista",
    name: "Giovane doomista",
    description:
      "Consapevole del problema ma paralizzato dalla disperazione, convinto che sia ormai troppo tardi per fare qualcosa di significativo.",
    coreFear: "Che il proprio impegno sia inutile e che il futuro sia già segnato in negativo.",
    identityDefense: "Io vedo la realtà per quella che è, non mi illudo come gli altri.",
    persuasionStrategy:
      "Non minimizzare la sua ansia né rassicurarlo con ottimismo ingenuo. Distingui tra \"non tutto è evitabile\" e \"niente ha senso\", mostrando che l'azione riduce danni reali anche in scenari difficili.",
    avoidSaying: [
      "Andrà tutto bene.",
      "Non essere così pessimista.",
      "Basta ottimismo e si risolve tutto.",
      "Stai esagerando.",
    ],
    sayInstead: [
      "Non tutto è evitabile, ma non tutto è già deciso.",
      "Ogni frazione di grado in meno significa meno danni reali.",
      "La disperazione è comprensibile, ma non cambia i dati sugli scenari futuri.",
      "Anche nello scenario peggiore, agire riduce il danno.",
    ],
    bestFrames: ["riduzione del danno", "scenari non ancora decisi", "agire senza ottimismo ingenuo", "dati sugli scenari, non slogan"],
    exampleReplies: {
      gentle:
        "Capisco la disperazione, è una risposta comprensibile a informazioni pesanti. Ma i dati mostrano che gli scenari futuri non sono già scritti: dipendono dalle emissioni dei prossimi anni.",
      direct:
        "Non tutto è evitabile, ma non tutto ha smesso di contare. Ogni frazione di grado in meno si traduce in meno danni reali, anche in scenari difficili.",
      sharp:
        "Il doomismo non è più \"realista\" del negazionismo: entrambi portano alla stessa inazione, solo con un'emozione diversa.",
    },
  },
  {
    id: "piccolo-imprenditore",
    slug: "piccolo-imprenditore",
    name: "Piccolo imprenditore",
    description:
      "Preoccupato per i costi e la burocrazia legati a normative ambientali, teme che la transizione danneggi la sua attività più di quanto la aiuti.",
    coreFear: "Costi aggiuntivi insostenibili e regole imposte senza considerare la realtà di una piccola impresa.",
    identityDefense: "Io lavoro sul serio ogni giorno, non ho tempo per la burocrazia verde.",
    persuasionStrategy:
      "Non partire dal dovere ambientale. Parti da rischio energetico, costi futuri di adeguamento e opportunità concrete (incentivi, efficienza, competitività) rilevanti per un'impresa piccola.",
    avoidSaying: [
      "Le imprese devono fare la loro parte per il pianeta.",
      "Se non ti adegui sei parte del problema.",
      "È un obbligo morale per chi produce.",
      "Le grandi aziende inquinano di più, pensaci tu.",
    ],
    sayInstead: [
      "Meno dipendenza da energia importata, meno rischio sui costi.",
      "Investire in efficienza oggi riduce le spese fisse domani.",
      "Ci sono incentivi concreti per le piccole imprese che si adeguano prima.",
      "Ritardare l'adeguamento spesso costa più che anticiparlo.",
    ],
    bestFrames: ["costi energetici", "competitività", "incentivi disponibili", "rischio di ritardare l'adeguamento"],
    exampleReplies: {
      gentle:
        "Capisco la preoccupazione per i costi. Ma guardala anche al contrario: investire ora in efficienza energetica riduce le spese fisse dell'attività negli anni successivi.",
      direct:
        "Non ti sto chiedendo di fare sacrifici per il pianeta. Ti sto dicendo che ritardare l'adeguamento spesso costa più che anticiparlo, con incentivi che oggi esistono e domani potrebbero non esserci.",
      sharp:
        "La burocrazia è un problema reale, ma non è una scusa per ignorare un rischio energetico che colpirà comunque i tuoi costi, prima o poi.",
    },
  },
  {
    id: "odia-ambientalisti",
    slug: "odia-ambientalisti",
    name: "Persona che odia gli ambientalisti",
    description:
      "La sua opposizione nasce più da fastidio verso attivisti e comunicazione ambientalista (percepita come moralista o invadente) che da un rifiuto dei dati scientifici in sé.",
    coreFear: "Essere giudicato moralmente o sentirsi prescritto uno stile di vita da chi ritiene ipocrita o arrogante.",
    identityDefense: "Non sopporto chi mi dice come vivere dall'alto in basso.",
    persuasionStrategy:
      "Separa esplicitamente il dato scientifico dallo stile di comunicazione di singoli attivisti. Non difendere gli attivisti: dai ragione al fastidio, poi sposta sul merito.",
    avoidSaying: [
      "Gli ambientalisti hanno ragione su tutto.",
      "Devi rispettare chi protesta per il clima.",
      "Sei insensibile se non ti stanno simpatici.",
      "Sono eroi che salvano il pianeta.",
    ],
    sayInstead: [
      "Non devi apprezzare gli attivisti per guardare i dati.",
      "Puoi trovare fastidiosa una protesta e comunque valutare i numeri.",
      "Il messaggero non cambia la misura satellitare della temperatura.",
      "Parliamo dei dati, non delle persone che li comunicano.",
    ],
    bestFrames: ["separare messaggio e messaggero", "dati indipendenti dagli attivisti", "nessun obbligo di simpatia"],
    exampleReplies: {
      gentle:
        "Capisco il fastidio per certi toni. Ma prova a separare le persone dai dati: puoi non sopportare una protesta e comunque guardare le misurazioni di temperatura.",
      direct:
        "Non ti sto chiedendo di apprezzare nessun attivista. I dati satellitari sulla temperatura non dipendono da quanto ti sta simpatico chi li comunica.",
      sharp:
        "Confondere il fastidio per un messaggero con il giudizio sul messaggio è comodo, ma non cambia una virgola dei dati.",
    },
  },
  {
    id: "negazionista-pseudo-scientifico",
    slug: "negazionista-pseudo-scientifico",
    name: "Negazionista pseudo-scientifico",
    description:
      "Cita grafici, sigle e terminologia tecnica per sembrare informato, spesso attingendo a fonti non verificate o fuori contesto, e si presenta come \"colui che ha fatto le sue ricerche\".",
    coreFear: "Essere considerato uno che crede acriticamente a ciò che gli viene detto, invece che una persona che \"ha studiato la questione\".",
    identityDefense: "Io ho fatto le mie ricerche, non ripeto quello che dice la TV.",
    persuasionStrategy:
      "Non liquidare le sue fonti senza guardarle. Chiedi la fonte primaria, verifica insieme la metodologia, e confronta con fonti peer-reviewed, mantenendo un tono da pari a pari, non da lezione.",
    avoidSaying: [
      "Le tue fonti sono spazzatura.",
      "Non hai le competenze per capirlo.",
      "Fidati degli esperti e basta.",
      "Hai letto solo bufale.",
    ],
    sayInstead: [
      "Da dove viene esattamente questo grafico?",
      "È stato pubblicato su una rivista peer-reviewed?",
      "Confrontiamolo con i dati IPCC o Copernicus, che sono pubblici e verificabili.",
      "Anche io preferisco verificare le fonti prima di crederci.",
    ],
    bestFrames: ["verifica della fonte primaria", "peer-review", "confronto tra dati pubblici", "pari a pari, non lezione"],
    exampleReplies: {
      gentle:
        "Apprezzo che tu voglia verificare di persona invece di fidarti e basta. Guardiamo insieme da dove viene questo dato: è peer-reviewed o no?",
      direct:
        "Le tue fonti vanno controllate come qualsiasi altra: da dove viene il grafico, chi l'ha pubblicato, ed è stato verificato da altri scienziati indipendenti?",
      sharp:
        "\"Aver fatto le proprie ricerche\" non basta se la fonte non regge a un confronto con dati pubblici e verificabili come quelli IPCC o Copernicus.",
    },
  },
  {
    id: "non-mi-riguarda",
    slug: "non-mi-riguarda",
    name: "Persona \"non mi riguarda\"",
    description:
      "Non nega né si oppone attivamente, semplicemente considera il tema lontano dalla propria vita quotidiana e privo di conseguenze dirette per sé.",
    coreFear: "Nessuna paura specifica: piuttosto indifferenza, mancanza di percezione di rilevanza personale.",
    identityDefense: "Ho altri problemi a cui pensare, questo non mi tocca.",
    persuasionStrategy:
      "Non aprire con dati globali astratti. Rendi il tema immediatamente locale e personale: bolletta, salute, città, casa, quartiere.",
    avoidSaying: [
      "Il pianeta è in pericolo.",
      "Devi pensare alle generazioni future.",
      "È un'emergenza globale.",
      "Tutti dovrebbero preoccuparsene.",
    ],
    sayInstead: [
      "Riguarda la tua bolletta, quest'estate.",
      "Riguarda quanto farà caldo nella tua città tra dieci anni.",
      "Riguarda il valore della casa dove vivi.",
      "Non serve pensare al pianeta: basta pensare alla tua strada.",
    ],
    bestFrames: ["rilevanza locale", "impatto personale diretto", "bolletta e casa", "quartiere e città"],
    exampleReplies: {
      gentle:
        "Capisco che sembri lontano. Ma pensa alla tua bolletta e a quanto farà caldo nella tua città tra qualche estate: è già una cosa vicina.",
      direct:
        "Non ti chiedo di pensare al pianeta. Ti chiedo di pensare a quanto costerà climatizzare casa tua tra dieci estati sempre più calde.",
      sharp:
        "\"Non mi riguarda\" funziona solo finché non guardi la bolletta, la tua città d'estate, o il valore della tua casa vicino a un fiume.",
    },
  },
];

export function getPersonaBySlug(slug: string): Persona | undefined {
  return personas.find((persona) => persona.slug === slug);
}
