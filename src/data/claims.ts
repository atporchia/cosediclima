export type ClaimVerdict =
  | "falso"
  | "fuorviante"
  | "parzialmente_vero"
  | "ritardo"
  | "doomismo"
  | "complotto"
  | "falsa_equivalenza";

export type ManipulationTechnique =
  | "cherry_picking"
  | "falso_equilibrio"
  | "complotto"
  | "benaltrismo"
  | "ritardo"
  | "doomismo"
  | "perfezione_impossibile"
  | "attacco_identitario"
  | "mezza_verita"
  | "sfiducia_generalizzata"
  | "falsa_incertezza"
  | "minimizzazione";

export interface ClimateClaim {
  id: string;
  slug: string;
  claim: string;
  aliases: string[];
  verdict: ClaimVerdict;
  technique: ManipulationTechnique;
  shortLabel: string;
  whyItPersuades: string;
  emotionalReframe: string;
  tenSecondReply: string;
  longerReply: string;
  scientificBackup: string;
  italianAngle: string;
  sourceIds: string[];
  tags: string[];
}

export const claims: ClimateClaim[] = [
  {
    id: "clima-sempre-cambiato",
    slug: "il-clima-e-sempre-cambiato",
    claim: "Il clima è sempre cambiato.",
    aliases: [
      "il clima cambia da sempre",
      "è sempre stato così col clima",
      "la terra ha sempre avuto cicli climatici",
    ],
    verdict: "fuorviante",
    technique: "mezza_verita",
    shortLabel: "Mezza verità che ignora causa e velocità",
    whyItPersuades:
      "È una frase vera in astratto, quindi sembra ragionevole. Ma sposta l'attenzione dal problema reale: velocità, causa, impatti e costi del cambiamento attuale.",
    emotionalReframe: "Questa frase viene usata per farti ignorare chi paga il conto.",
    tenSecondReply:
      "Sì, il clima è sempre cambiato. Ma stavolta il problema è la velocità, il costo, e chi ci lascia il conto.",
    longerReply:
      "Dire che il clima è sempre cambiato è come dire che gli incendi sono sempre esistiti. Vero, ma se qualcuno butta benzina sul fuoco, il problema cambia. Oggi il punto non è se il clima cambia: è quanto velocemente cambia, perché cambia, e chi paga i danni.",
    scientificBackup:
      "Il riscaldamento attuale è attribuito principalmente all'influenza umana secondo l'IPCC. Le temperature globali ed europee mostrano un trend di riscaldamento più rapido rispetto ai cambiamenti climatici naturali del passato, e l'Italia sta già registrando anomalie termiche e più giorni di caldo estremo.",
    italianAngle:
      "In Italia il cambiamento climatico non è teoria: riguarda caldo estremo, siccità, agricoltura, città invivibili d'estate, danni da eventi estremi e pressione sul sistema sanitario.",
    sourceIds: ["ipcc", "ispra", "copernicus-c3s"],
    tags: ["cambiamento-naturale", "velocita", "causa-umana"],
  },
  {
    id: "fa-freddo",
    slug: "fa-freddo-quindi-il-riscaldamento-non-esiste",
    claim: "Fa freddo, quindi il riscaldamento globale non esiste.",
    aliases: [
      "ha nevicato quindi non c'è riscaldamento globale",
      "fa un freddo cane, altro che riscaldamento globale",
    ],
    verdict: "fuorviante",
    technique: "cherry_picking",
    shortLabel: "Confonde meteo di un giorno con clima di decenni",
    whyItPersuades:
      "Il freddo percepito in un momento preciso sembra una prova diretta e personale, più convincente di una statistica su scala globale e pluriennale.",
    emotionalReframe: "Ti fa scambiare una sensazione di un giorno per una prova che vale decenni.",
    tenSecondReply:
      "Un giorno o una settimana freddi non cancellano una tendenza al riscaldamento misurata su decenni e su tutto il pianeta.",
    longerReply:
      "Il meteo è quello che succede oggi nella tua città; il clima è la tendenza media su decenni e sull'intero pianeta. Un'ondata di freddo locale può benissimo verificarsi dentro un pianeta che, nel complesso e nel lungo periodo, si sta riscaldando: sono scale diverse, e confonderle è l'errore più comune nel dibattito climatico.",
    scientificBackup:
      "I dati di temperatura globale di Copernicus e NASA mostrano un trend di riscaldamento di lungo periodo, calcolato su medie globali e pluriennali, non su singoli eventi locali. Un'ondata di freddo locale è compatibile con una tendenza al riscaldamento globale.",
    italianAngle:
      "In Italia si osservano sia ondate di calore più frequenti sia, occasionalmente, episodi di freddo intenso: il punto rilevante è la tendenza di lungo periodo registrata da ISPRA, non l'episodio isolato.",
    sourceIds: ["copernicus-c3s", "nasa-climate", "ispra"],
    tags: ["meteo-vs-clima", "cherry-picking"],
  },
  {
    id: "truffa-elite",
    slug: "e-tutta-una-truffa-delle-elite",
    claim: "È tutta una truffa delle élite.",
    aliases: [
      "il clima è un'invenzione delle élite",
      "è tutto un complotto globalista",
      "ce lo dicono per controllarci",
    ],
    verdict: "complotto",
    technique: "complotto",
    shortLabel: "Teoria del complotto indimostrabile",
    whyItPersuades:
      "Offre una spiegazione semplice (un piano segreto) e un nemico chiaro, e si protegge da qualsiasi prova contraria perché ogni smentita può essere letta come parte del complotto stesso.",
    emotionalReframe:
      "Ti chiede di credere a un piano segreto invece di guardare chi guadagna davvero a farti restare fermo.",
    tenSecondReply:
      "Non ti sto chiedendo di fidarti delle élite. Ti sto chiedendo di guardare chi ci guadagna se restiamo fermi.",
    longerReply:
      "Non serve credere a un piano segreto globale per constatare che il pianeta si sta riscaldando: bastano le misurazioni di temperatura raccolte da decine di agenzie indipendenti in tutto il mondo, con metodi pubblici e replicabili. La domanda utile non è \"chi complotta\", ma chi guadagna concretamente a farci discutere invece di agire — e la risposta, spesso, è chi vende combustibili fossili.",
    scientificBackup:
      "Le misurazioni di temperatura provengono da reti di osservazione indipendenti gestite da decine di paesi e agenzie diverse (NASA, NOAA, Copernicus, Met Office), con metodi pubblici e risultati coerenti tra loro: un accordo di questo tipo è difficile da spiegare con un complotto coordinato.",
    italianAngle:
      "In Italia i dati climatici sono raccolti da ISPRA in modo indipendente dalle istituzioni internazionali, e mostrano le stesse tendenze di riscaldamento osservate a livello globale.",
    sourceIds: ["nasa-climate", "noaa", "copernicus-c3s", "ispra"],
    tags: ["complotto", "elite", "sfiducia"],
  },
  {
    id: "cicli-solari",
    slug: "sono-i-cicli-solari",
    claim: "Sono i cicli solari.",
    aliases: [
      "è colpa del sole",
      "sono i cicli solari a scaldare la terra",
      "le macchie solari spiegano il riscaldamento",
    ],
    verdict: "falso",
    technique: "mezza_verita",
    shortLabel: "Il sole non spiega il riscaldamento recente",
    whyItPersuades:
      "È vero che il sole influenza il clima terrestre, quindi la frase parte da un fatto reale che la rende plausibile a prima vista.",
    emotionalReframe: "Usa un fatto vero su un'altra epoca per spiegare quello che sta succedendo oggi.",
    tenSecondReply:
      "Il sole conta, ma dagli anni '80 la sua attività è rimasta stabile o in leggero calo, mentre le temperature continuano a salire: i due andamenti si sono separati.",
    longerReply:
      "L'attività solare è un fattore climatico reale e ha influenzato il clima terrestre nel passato. Ma i dati satellitari mostrano che, dalla seconda metà del XX secolo, l'irraggiamento solare è rimasto sostanzialmente stabile o leggermente diminuito, mentre le temperature globali sono salite in modo marcato: se il sole fosse la causa principale, ci si aspetterebbe l'andamento opposto.",
    scientificBackup:
      "L'IPCC riporta che i contributi dei fattori naturali, incluso il sole, al riscaldamento osservato dal 1950 sono stimati come minimi rispetto al contributo delle attività umane, sulla base di misurazioni dirette dell'irraggiamento solare e di modelli che separano i diversi fattori climatici.",
    italianAngle:
      "Le anomalie di temperatura registrate in Italia negli ultimi decenni seguono l'andamento delle emissioni di gas serra, non quello dell'attività solare misurata dai satelliti.",
    sourceIds: ["ipcc", "nasa-climate"],
    tags: ["sole", "cause-naturali", "attribuzione"],
  },
  {
    id: "co2-naturale",
    slug: "la-co2-e-naturale",
    claim: "La CO₂ è naturale.",
    aliases: [
      "la co2 è un gas naturale, non può essere un problema",
      "le piante respirano co2, quindi fa bene",
    ],
    verdict: "fuorviante",
    technique: "mezza_verita",
    shortLabel: "Vero in astratto, ignora la quantità aggiunta dall'uomo",
    whyItPersuades:
      "È tecnicamente corretto che la CO₂ esiste in natura da sempre, quindi sembra assurdo definirla un problema.",
    emotionalReframe:
      "Ti fa confondere l'esistenza di una sostanza con la quantità aggiunta in più in pochissimo tempo.",
    tenSecondReply:
      "Anche l'acqua è naturale, ma troppa acqua in casa tua è un allagamento. Il problema della CO₂ non è che esiste, è quanta ne abbiamo aggiunta e quanto in fretta.",
    longerReply:
      "La CO₂ fa parte del ciclo naturale del carbonio da milioni di anni, questo è vero. Ma bruciando combustibili fossili l'uomo ha immesso in atmosfera un eccesso di CO₂ che i processi naturali (oceani, foreste) non riescono ad assorbire alla stessa velocità: la concentrazione atmosferica è oggi più alta di quanto non sia mai stata negli ultimi centinaia di migliaia di anni misurati nei ghiacci antartici.",
    scientificBackup:
      "Le misurazioni dirette di CO₂ atmosferica (Mauna Loa e altre stazioni) mostrano un aumento costante dall'inizio della rivoluzione industriale, e le analisi isotopiche confermano che l'aumento recente proviene in gran parte dalla combustione di combustibili fossili, non da fonti naturali.",
    italianAngle:
      "L'Italia, come il resto d'Europa, contribuisce a questo eccesso attraverso i propri consumi energetici e di trasporto, ed è già esposta agli effetti dell'aumento di CO₂ sul clima regionale.",
    sourceIds: ["nasa-climate", "noaa", "ipcc"],
    tags: ["co2", "naturale", "concentrazione"],
  },
  {
    id: "cina-inquina",
    slug: "e-allora-la-cina",
    claim: "La Cina inquina, quindi noi non possiamo fare nulla.",
    aliases: [
      "e allora la cina",
      "tanto la cina inquina più di tutti",
      "perché dovremmo fare sacrifici se la cina non lo fa",
    ],
    verdict: "falsa_equivalenza",
    technique: "benaltrismo",
    shortLabel: "Benaltrismo che scarica la responsabilità",
    whyItPersuades:
      "È vero che la Cina ha alte emissioni assolute, quindi la frase sembra basata su un dato reale e sposta comodamente la responsabilità altrove.",
    emotionalReframe: "Ti offre una scusa per non fare nulla, mentre il conto del ritardo arriva comunque anche a te.",
    tenSecondReply: "Dire \"e allora la Cina?\" è il modo perfetto per non fare nulla mentre il conto arriva anche a noi.",
    longerReply:
      "È vero che la Cina ha oggi le emissioni assolute più alte al mondo, in gran parte legate alla produzione industriale globale, inclusi molti beni consumati in Europa. Ma questo non riduce l'impatto delle emissioni italiane ed europee, né i rischi climatici e i costi che l'Italia sta già affrontando. Aspettare che agiscano gli altri prima di noi significa solo ritardare misure che ci convengono comunque, sul piano sanitario, economico ed energetico.",
    scientificBackup:
      "Gli inventari internazionali delle emissioni (utilizzati da IPCC e agenzie ambientali) mostrano che le emissioni si sommano a livello globale: la riduzione da parte di un paese ha un effetto reale sul totale, indipendentemente da cosa fanno gli altri paesi nello stesso momento.",
    italianAngle:
      "L'Italia, come membro dell'UE, ha impegni di riduzione delle emissioni che riguardano la propria produzione energetica, i trasporti e l'edilizia, aree su cui ha piena competenza decisionale indipendentemente dalle scelte cinesi.",
    sourceIds: ["ipcc", "eea"],
    tags: ["cina", "benaltrismo", "responsabilita"],
  },
  {
    id: "auto-elettriche-inquinano",
    slug: "le-auto-elettriche-inquinano-di-piu",
    claim: "Le auto elettriche inquinano più delle diesel.",
    aliases: [
      "le batterie inquinano di più delle auto a benzina",
      "l'elettrico non è davvero ecologico",
    ],
    verdict: "fuorviante",
    technique: "cherry_picking",
    shortLabel: "Isola la produzione della batteria, ignora l'intero ciclo di vita",
    whyItPersuades:
      "È vero che la produzione di una batteria genera più emissioni iniziali della produzione di un'auto a benzina, quindi la frase parte da un dato reale ma parziale.",
    emotionalReframe: "Ti mostra solo la partenza della gara, non l'intero percorso.",
    tenSecondReply:
      "La produzione della batteria pesa di più all'inizio, ma nell'intero ciclo di vita un'auto elettrica emette meno della sua equivalente diesel, soprattutto se la ricarica usa energia meno fossile.",
    longerReply:
      "È vero che costruire un'auto elettrica, per via della batteria, genera più emissioni rispetto a costruirne una diesel. Ma un'auto si usa per anni: le analisi sull'intero ciclo di vita (produzione, uso, fine vita) mostrano che, nella maggior parte dei mix elettrici europei attuali, un'auto elettrica pareggia e poi supera in emissioni evitate un'equivalente diesel entro i primi anni di utilizzo, e il vantaggio cresce quanto più la rete elettrica è decarbonizzata.",
    scientificBackup:
      "Le analisi di ciclo di vita pubblicate da agenzie ambientali europee confrontano produzione, uso e smaltimento di veicoli elettrici e a combustione, e nel mix energetico europeo medio le elettriche mostrano un'impronta di CO₂ complessiva inferiore su tutta la vita utile del veicolo.",
    italianAngle:
      "Il vantaggio delle auto elettriche in Italia dipende dal mix elettrico nazionale, che include ancora una quota di gas fossile: cresce quanto più la produzione elettrica italiana si decarbonizza con fonti rinnovabili.",
    sourceIds: ["eea"],
    tags: ["auto-elettriche", "ciclo-di-vita", "cherry-picking"],
  },
  {
    id: "rinnovabili-non-bastano",
    slug: "le-rinnovabili-non-bastano",
    claim: "Le rinnovabili non bastano.",
    aliases: [
      "il solare e l'eolico non possono sostituire il fossile",
      "le rinnovabili sono inaffidabili",
    ],
    verdict: "fuorviante",
    technique: "perfezione_impossibile",
    shortLabel: "Perfezione impossibile: scarta una soluzione perché parziale",
    whyItPersuades:
      "È vero che oggi le rinnovabili da sole non coprono ancora tutta la domanda energetica in ogni momento, quindi l'obiezione sembra fondata.",
    emotionalReframe: "Ti chiede una soluzione perfetta subito, altrimenti nessuna soluzione vale la pena.",
    tenSecondReply:
      "Una soluzione non deve risolvere tutto da sola per essere utile. Ogni quota di energia rinnovabile è emissioni fossili evitate, non un tutto-o-niente.",
    longerReply:
      "Nessuno sostiene che le rinnovabili risolvano da sole ogni aspetto della transizione energetica: servono anche reti più moderne, accumulo, efficienza ed elettrificazione dei consumi. Ma \"non bastano da sole, oggi, per tutto\" non equivale a \"non servono\": ogni quota di energia rinnovabile installata sostituisce energia fossile e riduce emissioni reali, misurabili anno dopo anno.",
    scientificBackup:
      "I rapporti dell'Agenzia Europea dell'Ambiente e i bilanci energetici mostrano una crescita costante della quota rinnovabile nel mix elettrico europeo, con una corrispondente riduzione delle emissioni del settore elettrico nei paesi dove la crescita è più rapida.",
    italianAngle:
      "In Italia le rinnovabili (soprattutto solare ed eolico) coprono già una quota significativa e crescente della produzione elettrica, pur restando il paese dipendente da importazioni di gas per una parte importante del proprio fabbisogno.",
    sourceIds: ["eea"],
    tags: ["rinnovabili", "transizione-energetica", "perfezione-impossibile"],
  },
  {
    id: "ambientalisti-ipocriti",
    slug: "gli-ambientalisti-sono-ipocriti",
    claim: "Gli ambientalisti sono ipocriti.",
    aliases: [
      "gli ecologisti prendono l'aereo e poi ci dicono cosa fare",
      "sono tutti ipocriti quelli che parlano di clima",
    ],
    verdict: "fuorviante",
    technique: "attacco_identitario",
    shortLabel: "Attacco identitario che sposta il focus dal dato al messaggero",
    whyItPersuades:
      "Trovare un'incoerenza personale in chi porta un messaggio è facile e soddisfacente, e permette di liquidare il messaggio senza doverlo valutare nel merito.",
    emotionalReframe: "Ti permette di ignorare il problema concentrandoti sulla persona che te lo ricorda.",
    tenSecondReply:
      "Anche se una persona che parla di clima prendesse un aereo, questo non cambia di un grado i dati satellitari sulla temperatura globale.",
    longerReply:
      "Le incoerenze personali di singoli attivisti o comunicatori, quando esistono, riguardano quelle persone, non i dati scientifici sul clima, che si basano su misurazioni indipendenti raccolte da agenzie di tutto il mondo. Concentrarsi sulla coerenza del messaggero, invece che sul merito del messaggio, è un modo comodo per evitare di discutere i dati.",
    scientificBackup:
      "Le misurazioni di temperatura, livello del mare e concentrazione di gas serra provengono da strumentazione scientifica indipendente e non dipendono in alcun modo dal comportamento personale di chi comunica questi dati al pubblico.",
    italianAngle:
      "Anche in Italia il dibattito pubblico tende a concentrarsi sulle presunte incoerenze di singoli comunicatori, distraendo dai dati ISPRA su temperature e eventi estremi nel paese.",
    sourceIds: ["ispra"],
    tags: ["attacco-identitario", "ambientalisti", "messaggero"],
  },
  {
    id: "non-possiamo-permetterci-transizione",
    slug: "non-possiamo-permetterci-la-transizione",
    claim: "Non possiamo permetterci la transizione.",
    aliases: [
      "non ce lo possiamo permettere economicamente",
      "costa troppo passare alle rinnovabili",
    ],
    verdict: "ritardo",
    technique: "ritardo",
    shortLabel: "Ritardismo economico che ignora il costo di non agire",
    whyItPersuades:
      "I costi della transizione (impianti, adeguamenti, investimenti) sono immediati e visibili, mentre i costi del non agire sono distribuiti nel tempo e meno visibili subito.",
    emotionalReframe: "Ti mostra solo il conto di oggi, nascondendo il conto — più alto — di domani.",
    tenSecondReply:
      "Non possiamo permetterci di non farla: il ritardo non elimina il costo, lo sposta più avanti e spesso lo aumenta.",
    longerReply:
      "La transizione energetica richiede investimenti reali, questo è vero. Ma continuare a dipendere da fonti fossili importate ha anch'esso un costo, spesso più alto e già in corso: bollette esposte alle crisi geopolitiche, danni climatici crescenti da riparare, spese sanitarie legate a inquinamento e caldo estremo. La domanda corretta non è \"possiamo permetterci di investire\", ma \"possiamo permetterci di continuare a pagare due volte, oggi in fatture e domani in danni\".",
    scientificBackup:
      "Le analisi economiche dell'Agenzia Europea dell'Ambiente e i rapporti sul rischio climatico mostrano che i costi economici degli impatti climatici (danni da eventi estremi, perdita di produttività) sono in aumento in Europa, e tendono a crescere quanto più si ritarda l'azione di mitigazione e adattamento.",
    italianAngle:
      "L'Italia importa una quota rilevante della propria energia da combustibili fossili esteri, esponendosi a shock sui prezzi; al tempo stesso affronta già danni economici crescenti da eventi climatici estremi (alluvioni, siccità, ondate di calore).",
    sourceIds: ["eea"],
    tags: ["transizione-energetica", "ritardismo", "costi"],
  },
  {
    id: "troppo-tardi",
    slug: "ormai-e-troppo-tardi",
    claim: "Ormai è troppo tardi.",
    aliases: [
      "tanto ormai è finita",
      "non si può più tornare indietro quindi che senso ha fare qualcosa",
    ],
    verdict: "doomismo",
    technique: "doomismo",
    shortLabel: "Doomismo che usa la disperazione come scusa per l'inazione",
    whyItPersuades:
      "Di fronte a informazioni allarmanti, la rassegnazione può sembrare più razionale e meno faticosa dell'azione.",
    emotionalReframe: "Ti offre sollievo emotivo immediato al prezzo di rinunciare a ridurre danni futuri reali.",
    tenSecondReply: "Troppo tardi per evitare tutto non significa troppo tardi per evitare il peggio: ogni frazione di grado in meno conta.",
    longerReply:
      "È vero che una parte del riscaldamento e dei suoi effetti è ormai inevitabile, ed è corretto dirlo senza minimizzare. Ma la scienza climatica è chiara su un punto: la differenza tra i diversi scenari futuri (di quanto si riscalda il pianeta) dipende dalle emissioni dei prossimi anni, non è già scritta. Ogni frazione di grado evitata si traduce in meno ondate di calore estreme, meno eventi meteo distruttivi, meno danni economici e sanitari. \"Non possiamo evitare tutto\" è molto diverso da \"non serve fare nulla\".",
    scientificBackup:
      "Gli scenari dell'IPCC mostrano differenze sostanziali negli impatti attesi (frequenza di eventi estremi, innalzamento del mare, rischi sanitari) tra un percorso di riscaldamento contenuto e uno di riscaldamento elevato, a seconda del livello di emissioni future.",
    italianAngle:
      "Per l'Italia, restare su un percorso di riscaldamento più contenuto significa concretamente meno giorni di caldo estremo, meno stress idrico e meno danni attesi alle coste e all'agricoltura rispetto a uno scenario di riscaldamento elevato.",
    sourceIds: ["ipcc"],
    tags: ["doomismo", "rassegnazione", "scenari-futuri"],
  },
  {
    id: "modelli-sbagliano",
    slug: "i-modelli-climatici-sbagliano-sempre",
    claim: "I modelli climatici sbagliano sempre.",
    aliases: [
      "i modelli climatici sono inaffidabili",
      "le previsioni sul clima sbagliano sempre",
    ],
    verdict: "fuorviante",
    technique: "falsa_incertezza",
    shortLabel: "Falsa incertezza: confonde margine di errore con inaffidabilità totale",
    whyItPersuades:
      "Ogni previsione ha margini di errore, ed è facile trovare singoli casi in cui un modello ha sovra- o sotto-stimato un dettaglio, il che sembra screditare tutto il resto.",
    emotionalReframe: "Ti fa passare dall'incertezza sui dettagli all'idea, sbagliata, che non si sappia nulla.",
    tenSecondReply:
      "I modelli hanno margini d'errore sui dettagli, non sul fatto di base: il pianeta si sta riscaldando per cause umane, e questo le previsioni storiche l'hanno azzeccato.",
    longerReply:
      "I modelli climatici, come ogni modello scientifico, hanno margini di incertezza su dettagli specifici (tempi esatti, entità locale di certi effetti). Ma le proiezioni di riscaldamento globale pubblicate decenni fa da climatologi come James Hansen si sono rivelate, con il senno di poi, sorprendentemente vicine ai dati di temperatura osservati negli anni successivi. L'incertezza sui dettagli non equivale a incertezza sul fenomeno di fondo.",
    scientificBackup:
      "Analisi retrospettive pubblicate su riviste scientifiche hanno confrontato le proiezioni dei modelli climatici degli anni '70-'90 con le temperature osservate successivamente, trovando un accordo sostanziale tra previsioni e dati reali, a conferma dell'affidabilità dei modelli sul trend di fondo.",
    italianAngle:
      "Le proiezioni climatiche regionali usate da ISPRA e Copernicus per l'Italia e il Mediterraneo — un'area indicata come particolarmente sensibile al riscaldamento — si sono finora confermate coerenti con le anomalie di temperatura osservate.",
    sourceIds: ["ipcc", "copernicus-c3s"],
    tags: ["modelli-climatici", "falsa-incertezza", "previsioni"],
  },
  {
    id: "scienziati-in-disaccordo",
    slug: "ci-sono-scienziati-in-disaccordo",
    claim: "Ci sono scienziati che non sono d'accordo.",
    aliases: [
      "non tutti gli scienziati sono d'accordo sul clima",
      "ci sono climatologi scettici",
    ],
    verdict: "fuorviante",
    technique: "falso_equilibrio",
    shortLabel: "Falso equilibrio tra consenso ampio e dissenso minoritario",
    whyItPersuades:
      "È letteralmente vero che esistono singoli scienziati scettici, quindi la frase è tecnicamente accurata mentre suggerisce un quadro fuorviante.",
    emotionalReframe: "Ti fa credere che il dibattito scientifico sia diviso a metà, quando non lo è.",
    tenSecondReply:
      "Il fatto che esista una minoranza contraria non significa che il peso delle prove sia diviso a metà: il consenso tra i climatologi attivi è molto ampio.",
    longerReply:
      "È vero che esistono singoli scienziati, anche con credenziali reali, che esprimono dissenso sul cambiamento climatico causato dall'uomo. Ma le analisi sistematiche della letteratura scientifica pubblicata mostrano un consenso molto ampio tra i climatologi attivi nel campo su riscaldamento globale e causa umana. Presentare il dibattito come diviso a metà, quando le prove non lo sono, è un falso equilibrio.",
    scientificBackup:
      "Le rassegne sistematiche della letteratura scientifica peer-reviewed sul clima riportano un consenso molto ampio tra gli studi e gli autori attivi nel campo specifico della climatologia riguardo al riscaldamento globale di origine antropica, come sintetizzato nei rapporti IPCC.",
    italianAngle:
      "Anche le principali istituzioni scientifiche italiane (università, CNR, ISPRA) aderiscono alla posizione di consenso internazionale sul riscaldamento globale di origine antropica.",
    sourceIds: ["ipcc", "ispra"],
    tags: ["consenso-scientifico", "falso-equilibrio"],
  },
  {
    id: "medioevo-piu-caldo",
    slug: "nel-medioevo-faceva-piu-caldo",
    claim: "Nel Medioevo faceva più caldo.",
    aliases: [
      "nel medioevo si coltivava la vite in inghilterra quindi faceva più caldo",
      "c'è sempre stato un periodo caldo medievale",
    ],
    verdict: "fuorviante",
    technique: "cherry_picking",
    shortLabel: "Confronta un fenomeno regionale antico con un riscaldamento globale attuale",
    whyItPersuades:
      "Il riferimento a un periodo caldo storico (il cosiddetto \"periodo caldo medievale\") è reale, quindi sembra un controesempio solido.",
    emotionalReframe:
      "Ti mette a confronto due cose diverse — un fenomeno regionale del passato e un riscaldamento globale misurato oggi — come se fossero uguali.",
    tenSecondReply:
      "Il periodo caldo medievale è stato un fenomeno soprattutto regionale, non globale e simultaneo come il riscaldamento attuale, misurato ovunque nello stesso momento.",
    longerReply:
      "Le ricostruzioni climatiche indicano che il cosiddetto \"periodo caldo medievale\" ha interessato soprattutto alcune regioni, in tempi diversi da luogo a luogo, senza raggiungere in modo sincrono e globale le temperature attuali. Il riscaldamento in corso oggi, invece, è misurato simultaneamente su tutto il pianeta con strumenti diretti, non solo ricostruito da indicatori indiretti (anelli degli alberi, sedimenti, ghiacci), ed è più rapido di qualunque variazione naturale nota degli ultimi millenni.",
    scientificBackup:
      "Le ricostruzioni paleoclimatiche riportate dall'IPCC mostrano che le variazioni climatiche pre-industriali, incluso il periodo caldo medievale, erano in gran parte regionali e non sincrone globalmente, a differenza del riscaldamento attuale osservato in modo coerente su scala planetaria.",
    italianAngle:
      "Le serie storiche italiane ed europee di temperatura mostrano un riscaldamento recente che supera, per rapidità e ampiezza geografica, le oscillazioni climatiche regionali documentate nel periodo medievale.",
    sourceIds: ["ipcc", "copernicus-c3s"],
    tags: ["storia-del-clima", "medioevo", "cherry-picking"],
  },
  {
    id: "cause-naturali",
    slug: "il-clima-cambia-per-cause-naturali",
    claim: "Il clima cambia per cause naturali.",
    aliases: [
      "il clima cambia naturalmente, non per colpa dell'uomo",
      "è tutto naturale, la terra ha sempre avuto variazioni",
    ],
    verdict: "fuorviante",
    technique: "mezza_verita",
    shortLabel: "Vero in generale, ma non spiega il riscaldamento recente",
    whyItPersuades:
      "È vero che esistono cause naturali di variazione climatica (vulcani, sole, cicli orbitali), quindi la frase parte da un fatto reale.",
    emotionalReframe: "Usa cause naturali reali per spiegare, in modo scorretto, un fenomeno che quelle stesse cause non riescono a giustificare.",
    tenSecondReply:
      "Le cause naturali esistono, ma da sole non spiegano il ritmo e l'entità del riscaldamento degli ultimi decenni: serve il contributo umano per far tornare i conti.",
    longerReply:
      "Fattori naturali come attività vulcanica, cicli solari e variazioni orbitali hanno sempre influenzato il clima terrestre. Ma quando i climatologi inseriscono nei modelli solo questi fattori naturali, senza le emissioni umane di gas serra, i modelli non riescono a riprodurre il riscaldamento osservato dalla metà del XX secolo in poi. Solo aggiungendo il contributo umano i modelli tornano a coincidere con i dati reali misurati.",
    scientificBackup:
      "Gli studi di attribuzione citati dall'IPCC confrontano simulazioni con soli fattori naturali e simulazioni che includono anche i fattori umani: solo queste ultime riproducono correttamente il riscaldamento osservato dal 1950 a oggi.",
    italianAngle:
      "Le anomalie di temperatura registrate in Italia negli ultimi decenni da ISPRA seguono lo stesso schema di attribuzione: non spiegabili dai soli fattori naturali.",
    sourceIds: ["ipcc", "ispra"],
    tags: ["cause-naturali", "attribuzione", "mezza-verita"],
  },
  {
    id: "solo-estate",
    slug: "e-solo-estate",
    claim: "È solo estate.",
    aliases: ["è normale che faccia caldo d'estate", "è solo il caldo di stagione"],
    verdict: "fuorviante",
    technique: "minimizzazione",
    shortLabel: "Minimizza un caldo estremo trattandolo come routine stagionale",
    whyItPersuades:
      "L'estate calda è un'esperienza familiare e attesa, quindi trattare un'ondata di caldo estremo come normale amministrazione sembra ragionevole.",
    emotionalReframe: "Ti fa trattare come normale un rischio che, per intensità e frequenza, non lo è più.",
    tenSecondReply: "Non è \"solo estate\": è caldo estremo, con un rischio sanitario misurabilmente più alto rispetto a decenni fa.",
    longerReply:
      "Fa caldo d'estate, questo è normale. Il punto non è che l'estate esiste, ma che le ondate di calore estremo sono diventate più frequenti, più intense e più lunghe rispetto al passato, con conseguenze dirette sulla mortalità, soprattutto tra le persone anziane e più vulnerabili. Trattare questo cambiamento come routine stagionale nasconde un rischio sanitario reale e crescente.",
    scientificBackup:
      "I rapporti Lancet Countdown e OMS documentano un aumento dell'esposizione a caldo estremo e della mortalità correlata al caldo negli ultimi decenni, distinguendo esplicitamente tra il caldo estivo normale e l'intensificazione delle ondate di calore osservata con il riscaldamento globale.",
    italianAngle:
      "ISPRA registra un aumento del numero di giorni di caldo estremo in molte città italiane rispetto alle medie storiche, un dato collegato a un maggiore rischio per la salute pubblica nei mesi estivi.",
    sourceIds: ["lancet-countdown", "who-climate-health", "ispra"],
    tags: ["caldo-estremo", "minimizzazione", "salute"],
  },
  {
    id: "alluvioni-sempre-state",
    slug: "le-alluvioni-ci-sono-sempre-state",
    claim: "Le alluvioni ci sono sempre state.",
    aliases: ["le inondazioni ci sono sempre state", "gli allagamenti sono sempre esistiti"],
    verdict: "fuorviante",
    technique: "mezza_verita",
    shortLabel: "Vero in generale, ignora l'aumento di intensità legato al clima",
    whyItPersuades:
      "È storicamente vero che le alluvioni sono un fenomeno antico, quindi sembra assurdo collegarle al cambiamento climatico attuale.",
    emotionalReframe: "Usa la storia del fenomeno per nascondere il suo aggravamento recente.",
    tenSecondReply:
      "Le alluvioni sono sempre esistite, ma un'atmosfera più calda trattiene più umidità e può rendere le piogge intense più probabili o più forti in molti contesti.",
    longerReply:
      "Le alluvioni non sono un fenomeno nuovo, questo è vero. Ma un'atmosfera più calda può trattenere più vapore acqueo, il che in molte regioni aumenta la probabilità o l'intensità delle piogge estreme, uno dei principali fattori scatenanti delle alluvioni. Gli studi di attribuzione valutano caso per caso quanto il cambiamento climatico abbia reso un evento specifico più probabile o più intenso, senza attribuire ogni singola alluvione al clima.",
    scientificBackup:
      "World Weather Attribution ha pubblicato analisi su singoli eventi di piogge estreme in Europa che indicano come il riscaldamento globale abbia reso quegli eventi più probabili o più intensi, usando un linguaggio probabilistico e non deterministico.",
    italianAngle:
      "Eventi di piogge estreme in Italia, come quelli che hanno colpito l'Emilia-Romagna, sono stati analizzati da studi di attribuzione che ne collegano l'intensità, in parte, al riscaldamento globale, oltre a fattori locali come uso del suolo e urbanizzazione.",
    sourceIds: ["world-weather-attribution", "ipcc"],
    tags: ["alluvioni", "attribuzione", "mezza-verita"],
  },
  {
    id: "incendi-piromani",
    slug: "gli-incendi-sono-colpa-dei-piromani",
    claim: "Gli incendi sono colpa dei piromani, non del clima.",
    aliases: [
      "gli incendi li appiccano i piromani, non il clima",
      "la colpa degli incendi è degli incendiari",
    ],
    verdict: "fuorviante",
    technique: "mezza_verita",
    shortLabel: "Falsa alternativa tra innesco umano e condizioni climatiche",
    whyItPersuades:
      "È vero che molti incendi hanno un innesco umano (doloso o accidentale), quindi la frase parte da un dato reale sulla causa immediata.",
    emotionalReframe: "Ti fa scegliere tra due spiegazioni che in realtà lavorano insieme, non si escludono.",
    tenSecondReply:
      "Chi accende il fuoco e le condizioni che lo fanno propagare sono due cose diverse: il clima non accende gli incendi, ma li rende più facili da propagare e più difficili da spegnere.",
    longerReply:
      "È vero che molti incendi hanno un innesco umano, doloso o accidentale. Ma la loro diffusione ed estensione dipende fortemente dalle condizioni ambientali: siccità prolungata, vegetazione secca, ondate di calore e vento rendono un incendio innescato molto più difficile da controllare e più esteso nei danni. Innesco e condizioni favorevoli sono due fattori distinti che si sommano, non si escludono a vicenda.",
    scientificBackup:
      "Gli studi di attribuzione su condizioni favorevoli agli incendi (fire weather) mostrano che il riscaldamento globale ha reso più frequenti le condizioni di siccità e calore che favoriscono la propagazione di incendi di grandi dimensioni in diverse regioni del mondo, incluso il Mediterraneo.",
    italianAngle:
      "In Italia le estati con più giorni di caldo estremo e siccità, monitorate da ISPRA, sono associate a stagioni con maggiore superficie boschiva percorsa dal fuoco, indipendentemente da chi abbia acceso il singolo innesco.",
    sourceIds: ["world-weather-attribution", "ispra"],
    tags: ["incendi", "siccita", "attribuzione"],
  },
  {
    id: "sovrappopolazione",
    slug: "il-problema-e-la-sovrappopolazione",
    claim: "Il problema è la sovrappopolazione.",
    aliases: [
      "il vero problema è che siamo troppi",
      "con tutta questa gente sulla terra è normale che il clima cambi",
    ],
    verdict: "fuorviante",
    technique: "benaltrismo",
    shortLabel: "Sposta la responsabilità su un fattore lontano dal proprio controllo",
    whyItPersuades:
      "La crescita della popolazione mondiale è un fatto reale, quindi collegarla al problema climatico sembra logico a prima vista.",
    emotionalReframe: "Sposta la responsabilità su miliardi di persone lontane invece che sulle scelte energetiche più vicine a noi.",
    tenSecondReply:
      "Le emissioni non dipendono solo da quante persone ci sono, ma soprattutto da quanto e come consumano energia: pochi paesi ad alto consumo pesano più di miliardi di persone a basso consumo.",
    longerReply:
      "La popolazione mondiale è cresciuta, questo è vero, ma le emissioni di gas serra sono distribuite in modo molto diseguale: una piccola parte della popolazione globale, nei paesi ad alto reddito, è responsabile di una quota di emissioni molto più che proporzionale rispetto al proprio numero. Concentrarsi sulla \"sovrappopolazione\" in astratto sposta l'attenzione dalle scelte energetiche concrete dei paesi e dei settori più emissivi, comprese le economie ricche come quella italiana.",
    scientificBackup:
      "Gli inventari internazionali delle emissioni pro capite mostrano differenze molto ampie tra paesi ad alto e basso reddito, indicando che il livello di consumo energetico, non solo il numero di abitanti, determina il contributo alle emissioni globali.",
    italianAngle:
      "Le emissioni pro capite italiane, pur inferiori a quelle di altri paesi ad alto reddito, restano nettamente superiori a quelle di gran parte dei paesi a crescita demografica più rapida, che contribuiscono in modo marginale al totale storico delle emissioni globali.",
    sourceIds: ["eea", "ipcc"],
    tags: ["sovrappopolazione", "benaltrismo", "emissioni-pro-capite"],
  },
  {
    id: "italia-conta-poco",
    slug: "litalia-conta-troppo-poco",
    claim: "L'Italia conta troppo poco.",
    aliases: [
      "l'italia inquina pochissimo rispetto al mondo",
      "cosa vuoi che cambi se lo fa solo l'italia",
    ],
    verdict: "ritardo",
    technique: "benaltrismo",
    shortLabel: "Ritardismo che usa la piccola quota nazionale come scusa",
    whyItPersuades:
      "È vero che le emissioni italiane sono una piccola quota del totale mondiale, quindi l'argomento sembra numericamente fondato.",
    emotionalReframe: "Ti fa sentire l'azione individuale e nazionale inutile, mentre in realtà somma con quella di altri paesi simili.",
    tenSecondReply:
      "Se ogni paese con una quota piccola dicesse lo stesso, non agirebbe quasi nessuno: le quote piccole, sommate, sono la maggioranza delle emissioni globali.",
    longerReply:
      "È vero che l'Italia, da sola, rappresenta una quota piccola delle emissioni mondiali. Ma questo ragionamento, se applicato da ogni singolo paese con una quota simile (la maggior parte dei paesi del mondo), porterebbe all'inazione quasi ovunque: le emissioni dei paesi \"piccoli\" sommate insieme costituiscono comunque una parte rilevante del totale globale. Inoltre l'Italia partecipa a impegni collettivi europei che, sommati, pesano in modo significativo.",
    scientificBackup:
      "Gli inventari delle emissioni mostrano che nessun singolo paese, eccetto pochissime grandi economie, rappresenta da solo una quota decisiva delle emissioni globali: la riduzione complessiva dipende dalla somma dei contributi di molti paesi, inclusi quelli di dimensioni medie.",
    italianAngle:
      "L'Italia fa parte dell'Unione Europea, che nel suo insieme rappresenta una quota storica ed attuale rilevante delle emissioni globali, e ha impegni di riduzione condivisi a livello comunitario.",
    sourceIds: ["eea"],
    tags: ["italia", "ritardismo", "quota-nazionale"],
  },
  {
    id: "europa-tassarci",
    slug: "leuropa-vuole-solo-tassarci",
    claim: "L'Europa vuole solo tassarci.",
    aliases: [
      "l'ue ci vuole solo far pagare più tasse verdi",
      "è tutta una scusa per tassarci di più",
    ],
    verdict: "fuorviante",
    technique: "sfiducia_generalizzata",
    shortLabel: "Sfiducia generalizzata verso le istituzioni europee",
    whyItPersuades:
      "La sfiducia verso tasse e istituzioni sovranazionali è un sentimento diffuso e reale, quindi la frase fa leva su un'emozione genuina.",
    emotionalReframe: "Ti chiede di ignorare il merito delle misure concentrandoti solo sulla sfiducia verso chi le propone.",
    tenSecondReply:
      "Non ti chiedo di fidarti ciecamente dell'UE. Ti chiedo di guardare cosa succede se continuiamo a dipendere da energia fossile importata: paghiamo comunque, ma senza alcun beneficio in cambio.",
    longerReply:
      "Alcune misure climatiche europee includono effettivamente strumenti di prezzo sul carbonio, questo è vero. Ma il confronto corretto non è \"pagare o non pagare\": è tra il costo di una transizione pianificata, con investimenti e sostegni, e il costo di continuare a dipendere da energia fossile importata, esposta a shock di prezzo internazionali che l'Italia ha già vissuto. Concentrarsi solo sulla sfiducia verso l'UE, ignorando questo confronto, lascia fuori la parte più importante della decisione.",
    scientificBackup:
      "I rapporti dell'Agenzia Europea dell'Ambiente sui costi economici del cambiamento climatico mostrano danni crescenti in Europa in assenza di azione, da confrontare con il costo degli strumenti di policy proposti a livello UE.",
    italianAngle:
      "L'Italia importa gran parte della propria energia da fonti fossili estere, un fattore che l'ha resa vulnerabile a shock sui prezzi energetici negli anni recenti, indipendentemente dalle politiche climatiche europee.",
    sourceIds: ["eea"],
    tags: ["unione-europea", "sfiducia", "tasse"],
  },
  {
    id: "propaganda-woke",
    slug: "e-propaganda-woke",
    claim: "È propaganda woke.",
    aliases: ["il clima è una scusa della sinistra", "è tutta ideologia woke"],
    verdict: "fuorviante",
    technique: "attacco_identitario",
    shortLabel: "Attacco identitario che etichetta il messaggio per screditarlo",
    whyItPersuades:
      "Associare un tema a un'etichetta politica polarizzante permette di respingerlo senza valutarne il contenuto, facendo leva sull'appartenenza di gruppo.",
    emotionalReframe: "Ti chiede di scegliere una squadra invece di guardare i dati.",
    tenSecondReply:
      "I dati di temperatura non hanno un'etichetta politica: li misurano le stesse agenzie scientifiche in tutti i paesi, con lo stesso metodo, da decenni.",
    longerReply:
      "Etichettare il cambiamento climatico come \"propaganda\" di una parte politica non cambia il fatto che le misurazioni di temperatura, livello del mare e concentrazione di gas serra provengono da agenzie scientifiche indipendenti, presenti in paesi con governi di ogni orientamento politico, che usano gli stessi strumenti e metodi da decenni. Il fenomeno fisico non appartiene a una fazione politica, anche se le politiche per affrontarlo possono essere discusse e sono legittimamente oggetto di dibattito.",
    scientificBackup:
      "Le reti di monitoraggio climatico globale (NASA, NOAA, Copernicus, agenzie nazionali di molti paesi con governi diversi) usano metodologie scientifiche indipendenti dal contesto politico e producono risultati coerenti tra loro.",
    italianAngle:
      "In Italia i dati climatici sono raccolti da ISPRA, ente tecnico-scientifico pubblico, con la stessa metodologia indipendentemente dal governo in carica.",
    sourceIds: ["nasa-climate", "noaa", "ispra"],
    tags: ["attacco-identitario", "politica", "polarizzazione"],
  },
  {
    id: "temperature-manipolate",
    slug: "le-temperature-sono-manipolate",
    claim: "Le temperature sono manipolate.",
    aliases: ["i dati sul clima sono falsificati", "hanno aggiustato i numeri delle temperature"],
    verdict: "complotto",
    technique: "complotto",
    shortLabel: "Complotto indimostrabile su dati raccolti da migliaia di stazioni indipendenti",
    whyItPersuades:
      "Mette in dubbio l'integrità dei dati stessi, un dubbio difficile da verificare per chi non lavora nel settore, e quindi difficile da smentire in una conversazione veloce.",
    emotionalReframe: "Ti chiede di sospettare migliaia di scienziati indipendenti invece di guardare i dati grezzi, pubblici e verificabili.",
    tenSecondReply:
      "I dati di temperatura vengono raccolti da migliaia di stazioni indipendenti in tutto il mondo, gestite da paesi diversi, e sono pubblici: chiunque può rianalizzarli, e infatti è già stato fatto più volte con gli stessi risultati.",
    longerReply:
      "I dati di temperatura globale non provengono da una singola fonte controllabile: sono raccolti da migliaia di stazioni meteorologiche terrestri, boe oceaniche e satelliti, gestiti da agenzie di paesi diversi e spesso politicamente distanti tra loro. Diversi gruppi indipendenti, inclusi progetti nati apposta per verificare in modo scettico questi dati, hanno rianalizzato le serie storiche grezze e ottenuto risultati sostanzialmente coincidenti con quelli delle agenzie ufficiali.",
    scientificBackup:
      "Progetti di rianalisi indipendente dei dati di temperatura globale, condotti anche da ricercatori inizialmente scettici sull'affidabilità dei dati ufficiali, hanno confermato in modo indipendente il trend di riscaldamento riportato dalle agenzie climatiche principali.",
    italianAngle:
      "I dati ISPRA sulle temperature italiane sono coerenti con le serie storiche europee di Copernicus, raccolte con strumentazione e metodi indipendenti.",
    sourceIds: ["nasa-climate", "noaa", "copernicus-c3s", "ispra"],
    tags: ["dati", "complotto", "manipolazione"],
  },
  {
    id: "prima-economia",
    slug: "prima-pensiamo-alleconomia",
    claim: "Prima pensiamo all'economia.",
    aliases: [
      "prima l'economia poi il clima",
      "non possiamo pensare al clima quando c'è la crisi economica",
    ],
    verdict: "ritardo",
    technique: "ritardo",
    shortLabel: "Ritardismo che presenta clima ed economia come alternativi",
    whyItPersuades:
      "In periodi di difficoltà economica percepita, dare priorità a bisogni immediati sembra più razionale che occuparsi di un problema percepito come lontano nel tempo.",
    emotionalReframe: "Ti fa scegliere tra due cose che, nel tempo, viaggiano insieme: il ritardo climatico ha un costo economico reale.",
    tenSecondReply:
      "Non è economia o clima: il ritardo climatico è già un costo economico, in danni da eventi estremi e in dipendenza da energia fossile importata.",
    longerReply:
      "Mettere in contrapposizione economia e clima presuppone che occuparsi del clima abbia solo costi e nessun beneficio economico, ma i dati mostrano il contrario: i danni economici da eventi climatici estremi sono già in aumento, e la dipendenza da combustibili fossili importati espone l'economia a shock di prezzo internazionali. Investire in efficienza energetica e fonti rinnovabili riduce entrambi questi rischi nel tempo, oltre a creare occupazione nei settori coinvolti.",
    scientificBackup:
      "I rapporti dell'Agenzia Europea dell'Ambiente sui costi economici degli eventi climatici estremi in Europa documentano un trend di danni crescenti, distinto dai costi di investimento nella transizione energetica.",
    italianAngle:
      "L'Italia ha già registrato danni economici rilevanti da alluvioni, siccità e ondate di calore negli ultimi anni, un costo che si somma, e non si contrappone, alla spesa per la transizione energetica.",
    sourceIds: ["eea"],
    tags: ["economia", "ritardismo", "costi"],
  },
  {
    id: "tecnologia-risolvera-tutto",
    slug: "la-tecnologia-risolvera-tutto",
    claim: "La tecnologia risolverà tutto.",
    aliases: [
      "basta aspettare che la tecnologia risolva tutto",
      "in futuro avremo la tecnologia per sistemare il clima",
    ],
    verdict: "ritardo",
    technique: "ritardo",
    shortLabel: "Ritardismo tecnologico: rimanda l'azione a soluzioni future non ancora disponibili",
    whyItPersuades:
      "La fiducia nel progresso tecnologico è un sentimento diffuso e in parte giustificato da reali innovazioni passate, quindi la frase suona ottimista e ragionevole.",
    emotionalReframe: "Ti offre una promessa comoda per rimandare oggi ciò che già sappiamo fare.",
    tenSecondReply:
      "La tecnologia aiuta, ma non è una scusa per rimandare le soluzioni che già abbiamo oggi e funzionano, come rinnovabili ed efficienza energetica.",
    longerReply:
      "L'innovazione tecnologica avrà probabilmente un ruolo importante nella transizione climatica, ma affidarsi solo a tecnologie future non ancora mature (come la cattura del carbonio su larga scala) come scusa per rimandare l'uso di soluzioni già disponibili e funzionanti oggi, come le rinnovabili e l'efficienza energetica, significa perdere tempo prezioso mentre le emissioni continuano ad accumularsi in atmosfera.",
    scientificBackup:
      "L'IPCC valuta un portafoglio di soluzioni già disponibili (rinnovabili, efficienza, elettrificazione) come determinante per la riduzione delle emissioni nei prossimi decenni, distinguendole dalle tecnologie ancora in fase di sviluppo su larga scala.",
    italianAngle:
      "In Italia le tecnologie rinnovabili mature (solare, eolico) sono già installabili e in crescita, mentre tecnologie più sperimentali restano a uno stadio meno avanzato di diffusione commerciale.",
    sourceIds: ["ipcc"],
    tags: ["tecnologia", "ritardismo", "soluzioni-future"],
  },
  {
    id: "non-cambia-nulla-io",
    slug: "non-cambia-nulla-se-faccio-qualcosa-io",
    claim: "Non cambia nulla se faccio qualcosa io.",
    aliases: ["tanto io da solo non cambio niente", "cosa vuoi che conti quello che faccio io"],
    verdict: "ritardo",
    technique: "ritardo",
    shortLabel: "Diluisce la responsabilità individuale fino a farla sparire",
    whyItPersuades:
      "Di fronte a un problema globale, il contributo di una singola persona sembra oggettivamente minuscolo, il che rende la conclusione (perché agire?) intuitiva.",
    emotionalReframe:
      "Ti fa sentire irrilevante da solo, ignorando che le scelte collettive nascono da somme di scelte individuali e da pressione su decisioni politiche più grandi.",
    tenSecondReply:
      "Nessuna singola persona sposta da sola il clima globale, ma le scelte individuali si sommano e influenzano anche le decisioni politiche e di mercato più grandi.",
    longerReply:
      "È vero che l'impatto climatico di una singola persona, isolato, è piccolo rispetto al totale globale. Ma questo vale per qualunque individuo in qualunque sistema collettivo: nessun singolo voto decide un'elezione, eppure le elezioni si decidono con i voti. Le scelte di consumo, di voto e di pressione pubblica dei singoli si sommano nel tempo e contribuiscono a cambiare policy, mercati e infrastrutture su scala più ampia, che è dove si gioca la parte più grande della riduzione delle emissioni.",
    scientificBackup:
      "Gli studi sui cambiamenti di comportamento collettivo e sulle policy climatiche indicano che l'azione individuale ha un ruolo complementare, non sostitutivo, rispetto alle policy sistemiche, ma può contribuire a determinarle attraverso domanda di mercato e pressione politica.",
    italianAngle:
      "In Italia le scelte di consumo energetico e di mobilità dei cittadini, sommate, incidono sulla domanda di energia nazionale e sulle priorità politiche discusse a livello locale e nazionale.",
    sourceIds: ["eea"],
    tags: ["azione-individuale", "responsabilita-diffusa", "ritardismo"],
  },
  {
    id: "previsioni-catastrofiste",
    slug: "sono-tutte-previsioni-catastrofiste",
    claim: "Sono tutte previsioni catastrofiste.",
    aliases: ["sono tutti allarmisti sul clima", "fanno terrorismo climatico"],
    verdict: "fuorviante",
    technique: "minimizzazione",
    shortLabel: "Minimizza proiezioni basate su dati come se fossero allarmismo generico",
    whyItPersuades:
      "Il linguaggio usato talvolta nel dibattito pubblico può apparire esagerato, ed è più facile respingere in blocco un \"tono catastrofista\" che valutare i singoli dati alla base delle proiezioni.",
    emotionalReframe: "Ti chiede di giudicare il tono invece dei numeri.",
    tenSecondReply:
      "Le proiezioni climatiche non sono previsioni apocalittiche generiche: sono scenari con range di probabilità pubblicati, basati su dati misurabili, non su sensazionalismo.",
    longerReply:
      "Alcuni titoli giornalistici possono usare toni allarmistici, ma le proiezioni scientifiche di base — pubblicate nei rapporti IPCC — presentano range di scenari con diversi livelli di probabilità, legati a diversi livelli di emissioni future, non previsioni uniche e catastrofiche. Il linguaggio mediatico non va confuso con il contenuto scientifico sottostante, che è più cauto e quantificato di quanto spesso venga riportato.",
    scientificBackup:
      "I rapporti IPCC presentano sistematicamente range di incertezza e diversi scenari di emissione (da quelli più contenuti a quelli più elevati), con relativa probabilità, evitando previsioni uniche o deterministiche.",
    italianAngle:
      "Le proiezioni per l'area mediterranea, incluso il territorio italiano, sono pubblicate con range di incertezza espliciti da ISPRA e Copernicus, non come previsioni univoche.",
    sourceIds: ["ipcc", "copernicus-c3s"],
    tags: ["catastrofismo", "minimizzazione", "proiezioni"],
  },
  {
    id: "neve-cade-ancora",
    slug: "la-neve-cade-ancora",
    claim: "La neve cade ancora, quindi non c'è riscaldamento.",
    aliases: [
      "ha nevicato tantissimo quindi il riscaldamento globale non esiste",
      "la neve smentisce il clima che cambia",
    ],
    verdict: "fuorviante",
    technique: "cherry_picking",
    shortLabel: "Cherry-picking: un evento locale non smentisce il trend globale",
    whyItPersuades: "La neve è associata intuitivamente al freddo, quindi la sua presenza sembra contraddire l'idea di riscaldamento globale.",
    emotionalReframe: "Ti fa scambiare un singolo evento meteo locale per una prova contro un trend globale su decenni.",
    tenSecondReply:
      "Un'atmosfera più calda può trattenere più umidità, e in alcune condizioni questo significa più neve in un singolo evento, senza smentire il riscaldamento medio di lungo periodo.",
    longerReply:
      "La presenza di neve in un dato luogo e momento non contraddice il riscaldamento globale: un'atmosfera più calda contiene più vapore acqueo, che in condizioni di temperatura ancora sotto lo zero può tradursi in nevicate più intense in singoli eventi. Il riscaldamento globale è una tendenza media misurata su tutto il pianeta e su decenni, non l'assenza di neve in ogni singolo luogo e momento.",
    scientificBackup:
      "Le analisi climatiche distinguono tra tendenza media di temperatura globale, che sta salendo, e variabilità meteorologica locale, incluse nevicate intense, che può comunque verificarsi all'interno di un pianeta più caldo in media.",
    italianAngle:
      "In Italia si osservano contemporaneamente una riduzione media della coltre nevosa complessiva sulle Alpi nel lungo periodo e occasionali nevicate intense in singoli eventi, dati che ISPRA e Copernicus monitorano separatamente.",
    sourceIds: ["copernicus-c3s", "ispra"],
    tags: ["neve", "meteo-vs-clima", "cherry-picking"],
  },
  {
    id: "scienziati-pagati-mentire",
    slug: "gli-scienziati-sono-pagati-per-mentire",
    claim: "Gli scienziati sono pagati per mentire.",
    aliases: [
      "gli scienziati climatici sono pagati per spaventarci",
      "la scienza del clima è un business",
    ],
    verdict: "complotto",
    technique: "complotto",
    shortLabel: "Complotto indimostrabile contro migliaia di ricercatori indipendenti",
    whyItPersuades:
      "Sospettare di un interesse economico nascosto è un'euristica di sfiducia comune, e in alcuni casi reali è successo davvero — ma qui viene applicata a chi comunica il consenso scientifico, non a chi lo nega.",
    emotionalReframe:
      "Il sospetto sui finanziamenti è legittimo — ma va rivolto a chi ha davvero un interesse economico a farti dubitare, che spesso è l'opposto di chi accusi.",
    tenSecondReply:
      "I finanziamenti nella scienza vanno controllati, giustamente — ma è documentato che è successo il contrario: aziende con interessi nei combustibili fossili hanno finanziato ricerche per generare dubbio, non il consenso scientifico.",
    longerReply:
      "Il sospetto sui conflitti di interesse nella scienza è legittimo e va sempre verificato caso per caso. Ma quando lo si fa seriamente, con documenti pubblici, si trova un pattern documentato opposto a quello suggerito da questa frase: aziende con interessi nei combustibili fossili hanno finanziato per decenni ricerche e campagne pensate per generare dubbio sul consenso scientifico, non il contrario. Il consenso scientifico sul riscaldamento globale, invece, si basa su migliaia di studi indipendenti, prodotti da istituzioni di paesi diversi, senza un singolo finanziatore comune.",
    scientificBackup:
      "Uno studio peer-reviewed (Supran & Oreskes, 2017) ha confrontato la ricerca interna di ExxonMobil con le sue comunicazioni pubbliche, trovando che l'azienda era internamente consapevole del riscaldamento causato dall'uomo mentre pubblicamente ne alimentava il dubbio; inchieste giornalistiche indipendenti e ricerche di trasparenza documentano casi simili di finanziamento organizzato del dubbio climatico.",
    italianAngle:
      "Il consenso scientifico usato in Italia da ISPRA e dalla comunità accademica nazionale si basa sulla stessa letteratura scientifica internazionale indipendente, non su un singolo finanziatore o interesse economico comune.",
    sourceIds: ["supran-oreskes-2017", "insideclimate-news-exxon", "ucs-climate-deception-dossiers", "ipcc"],
    tags: ["complotto", "finanziamenti", "conflitti-di-interesse"],
  },
  {
    id: "ciclo-non-crisi",
    slug: "il-clima-e-un-ciclo-non-una-crisi",
    claim: "Il clima è un ciclo, non una crisi.",
    aliases: ["il clima è ciclico, non è una crisi", "sono solo cicli naturali della terra"],
    verdict: "fuorviante",
    technique: "mezza_verita",
    shortLabel: "Vero che esistono cicli, fuorviante negare la crisi attuale",
    whyItPersuades:
      "È vero che il clima terrestre ha conosciuto cicli naturali su scale di migliaia o milioni di anni, quindi la frase parte da un fatto reale.",
    emotionalReframe: "Usa la parola \"ciclo\" per far sembrare normale e non preoccupante un cambiamento che, per velocità, non lo è.",
    tenSecondReply:
      "I cicli naturali esistono, ma avvengono su migliaia di anni: il riscaldamento attuale si sta verificando in poche decine di anni, una velocità senza precedenti recenti.",
    longerReply:
      "Il clima terrestre ha conosciuto cicli naturali di riscaldamento e raffreddamento su scale temporali di migliaia o milioni di anni, legati a fattori come le variazioni dell'orbita terrestre. Il riscaldamento osservato negli ultimi decenni, però, sta avvenendo su una scala temporale enormemente più breve — pochi decenni invece di millenni — un ritmo che rende il confronto con i cicli naturali del passato fuorviante: la velocità del cambiamento è essa stessa un fattore di rischio, perché lascia meno tempo per l'adattamento di ecosistemi e società.",
    scientificBackup:
      "Le ricostruzioni paleoclimatiche dell'IPCC mostrano che i cicli climatici naturali del passato si sono sviluppati su scale di migliaia di anni, mentre l'aumento di temperatura osservato dal XX secolo a oggi è avvenuto in un intervallo di tempo molto più breve, con un ritmo che i dati storici non trovano precedenti recenti comparabili.",
    italianAngle:
      "Le anomalie di temperatura registrate in Italia negli ultimi decenni da ISPRA mostrano un ritmo di cambiamento incompatibile, per velocità, con quello dei cicli climatici naturali di lungo periodo.",
    sourceIds: ["ipcc", "ispra"],
    tags: ["ciclo-naturale", "velocita", "mezza-verita"],
  },
];

export function getClaimBySlug(slug: string): ClimateClaim | undefined {
  return claims.find((claim) => claim.slug === slug);
}
