export interface Flashcard {
  id: string;
  tag: string;
  number: string;
  title: string;
  front: string;
  back: string;
  content: string;
  size?: 'normal' | 'wide' | 'tall' | 'featured';
  theme?: 'default' | 'dark' | 'accent' | 'outlined';
  quiz?: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
}

export type Category = 'gegenstand' | 'abstraktion' | 'logik' | 'leseempfehlungen';

export interface Topic {
  id: string;
  category: Category;
  number: string;
  title: string;
  quote: string;
  cards: Flashcard[];
}

export const topics: Topic[] = [
  {
    id: 'ware',
    category: 'gegenstand',
    number: '01',
    title: 'WARENFORM & WERT',
    quote: "\"Der Reichtum der Gesellschaften, in welchen kapitalistische Produktionsweise herrscht, erscheint als eine 'ungeheure Warensammlung'...\"",
    cards: [
      {
        id: 'w1',
        tag: 'Systematik',
        number: 'Karte 01 / Grundlagen',
        title: 'Zweck & Mittel',
        front: "In der Kritik der politischen Ökonomie geht es nicht um 'Gerechtigkeit', sondern um den systemimmanenten Zweck: Die Verwertung des Werts. Alles andere ist Mittel.",
        back: "Die kapitalistische Wirtschaft ist kein Instrument zur Versorgung der Menschen. Die Versorgung ist lediglich das unvermeidliche Abfallprodukt des eigentlichen Zwecks: Geld zu mehr Geld zu machen.",
        content: "## Der Irrtum vom Dienen zur Versorgung\n\nHäufig wird der Wirtschaft zugeschrieben, sie diene der Befriedigung menschlicher Bedürfnisse. Die materielle Analyse stellt das radikal auf den Kopf: Die Produktion von nützlichen Dingen (Gebrauchswerten) ist nur das Mittel. Der einzige Zweck der Veranstaltung ist die Vermehrung von abstraktem Reichtum (Wert, Geld).\n\nWenn ein Unternehmen keine Autos mehr profitabel verkaufen kann, hört es auf, Autos zu produzieren, egal, wie viele Menschen noch Mobilität brauchen. Genauso beim Wohnraum. Der Gebrauchswert ist lediglich der Träger, das 'Schmiermittel', damit die Verwertung von Wert stattfinden kann.",
        size: 'wide',
        theme: 'dark',
        quiz: {
          question: "Was ist der eigentliche Zweck der kapitalistischen Produktionsweise?",
          options: [
            "Die flächendeckende Versorgung der Gesellschaft mit Gütern.",
            "Die Schaffung von Arbeitsplätzen.",
            "Die Verwertung des Werts (Geld zu mehr Geld machen).",
            "Ein gerechter Ausgleich zwischen Angebot und Nachfrage."
          ],
          correctIndex: 2,
          explanation: "Bedürfnisbefriedigung und Versorgung sind nur unvermeidliche Mittel zum Zweck. Sobald kein Profit mehr winkt, stoppt die Produktion, egal wie groß der gesellschaftliche Bedarf ist."
        }
      },
      {
        id: 'w2',
        tag: 'Analyse',
        number: 'Karte 02 / Die Ware',
        title: 'Doppelcharakter',
        front: 'Gebrauchswert vs. Tauschwert. Die Ware befriedigt kein Bedürfnis, ohne vorher ihren Wert realisiert zu haben. Das ist der Widerspruch des Alltags.',
        back: 'Etwas kann für dich nützlich sein, aber wenn du es nicht bezahlen kannst (den Tauschwert nicht realisierst), bleibt der Gebrauchswert für dich unzugänglich. Bedürfnis ohne Kaufkraft ist gesellschaftlich irrelevant.',
        content: "## Der Antagonismus im Ding\n\nJede Ware hat zwei Seiten. Als Gebrauchswert ist sie nützlich für irgendjemanden (Brot stillt den Hunger). Als Wert (der als Tauschwert erscheint) ist sie ein Bruchteil des gesellschaftlichen Reichtums (Brot kostet 3 Euro).\n\nDer Konflikt: Der Verkäufer interessiert sich null für den Gebrauchswert, er will ihn loswerden, um an den Wert (Geld) zu kommen. Der Käufer will den Gebrauchswert, muss aber dafür Geld hergeben. Dieser gegensätzliche Bezug zur Ware ist die Grundlage aller wirtschaftlichen Konflikte.\n\nDas Paradox: Lebensmittel verrotten in Containern, während Menschen hungern, weil der Tauschwert nicht realisiert werden konnte. Das ist kein Systemfehler, sondern die logische Konsequenz der Warenform.",
        size: 'normal',
        theme: 'outlined',
        quiz: {
          question: "Was passiert, wenn eine produzierte Ware einen hohen Gebrauchswert für Hungernde hat, diese aber nicht über den nötigen Tauschwert (Geld) verfügen?",
          options: [
            "Der Staat springt automatisch ein und verteilt die Ware.",
            "Der Gebrauchswert kann gesellschaftlich nicht realisiert werden, die Ware bleibt unverkauft oder wird vernichtet.",
            "Die Produzenten verschenken die Ware, um Lagerkosten zu sparen.",
            "Die Preise sinken solange, bis jeder sie sich leisten kann."
          ],
          correctIndex: 1,
          explanation: "Ohne Kaufkraft gibt es aus Sicht der Marktwirtschaft kein 'Bedürfnis'. Der Verkäufer will seinen Tauschwert realisieren - kann er das nicht, ist der Gebrauchswert für den Markt und ihn wertlos."
        }
      },
      {
        id: 'w3',
        tag: 'Substanz',
        number: 'Karte 03 / Der Wert',
        title: 'Abstrakte Arbeit',
        front: 'Was macht völlig verschiedene Waren miteinander vergleichbar (z.B. iPhone und Brot)? Dass in ihnen menschliche Arbeitskraft verausgabt wurde.',
        back: 'Konkrete Arbeit schafft den Gebrauchswert. Abstrakte Arbeit (die rein zeitliche Verausgabung von Energie) bildet die Wertsubstanz. Im Kapitalismus zählt nur letztere als Quelle neuen Reichtums.',
        content: "## Die Reduktion des Menschen auf Zeit\n\nDamit ein iPhone und ein Laib Brot miteinander getauscht werden können, müssen sie etwas quantitativ gemeinsam haben. Physisch haben sie das nicht. Das Einzige, was alle Waren verbindet: Sie sind Produkte menschlicher Arbeit.\n\nAber nicht der konkreten Arbeit. Auf dem Markt wird von der spezifischen Art der Arbeit abstrahiert. Übrig bleibt die rein quantitative Leistung menschlicher Energie: Gesellschaftlich durchschnittlich notwendige Arbeitszeit.\n\nDie Konsequenz: Das Kapital zwingt dazu, Arbeitsprozesse immer weiter zu verdichten. Es geht nicht darum, gute Erzeugnisse zu schaffen, sondern in minimaler Zeit maximal viel abstrakten Wert zu produzieren. Der Mensch wird zum bloßen Parameter: Zeit.",
        size: 'tall',
        theme: 'default',
        quiz: {
          question: "Welche Art der Arbeit bildet die Substanz des Werts?",
          options: [
            "Die konkrete, handwerkliche Arbeit (z.B. das Tischlern).",
            "Die geistig-kreative Phase vor der Produktion.",
            "Abstrakte Arbeit (Verausgabung menschlicher Arbeitskraft gemessen in Zeit).",
            "Ausschließlich maschinelle Arbeit."
          ],
          correctIndex: 2,
          explanation: "Auf dem Markt wird von der Nützlichkeit der spezifischen (konkreten) Arbeit abgesehen. Waren stehen in einem quantitativen Tauschverhältnis zueinander, weil in ihnen unterschiedliche Quanta abstrakter, menschlicher Arbeitszeit stecken."
        }
      },
      {
        id: 'w4',
        tag: 'Dynamik',
        number: 'Karte 04 / Geld & Kapital',
        title: 'Die Endlose Schleife',
        front: 'Kapital ist kein ruhendes Geld. Kapital ist Wert, der sich verwertet. Ein Zyklus (Geld → Ware → Mehr Geld), der nie endet und keine natürliche Schranke kennt.',
        back: 'Der Kapitalist ist ein Getriebener. Die Konkurrenz zwingt ihn, seinen Profite immer wieder zu reinvestieren, sonst fliegen er und sein Unternehmen vom Markt.',
        content: "## G-W-G': Die vollendete Sinnlosigkeit\n\nDer einfache Warentausch läuft so: Ware → Geld → Ware (Ich verkaufe Schuhe, um Essen zu kaufen. Zweck: Bedürfnisbefriedigung).\n\nKapital funktioniert umgekehrt: Geld → Ware → Mehr Geld (G-W-G'). Man investiert Geld in Produktionsmittel und Arbeitskräfte (Ware), produziert neue Waren und verkauft sie wettbewerbsfähig, um am Ende mehr Geld zu haben als vorher.\n\nDieser Prozess hat kein logisches Ende. 100€ werden zu 110€. Die 110€ müssen wieder verwertet werden. Dieser Zwang ist die Triebkraft hinter Wachstum, technischem Fortschritt, aber auch der Zerstörung von Natur und Gesellschaft. Wer aufhört zu wachsen, wird von der Konkurrenz gefressen.",
        size: 'wide',
        theme: 'accent',
        quiz: {
          question: "Was beschreibt die Formel G-W-G' ?",
          options: [
            "Güter - Wert - Güter (Der gerechte Austausch auf dem Markt)",
            "Geld - Ware - Mehr Geld (Die Verwertungsbewegung des Kapitals)",
            "Grundrente - Ware - Gewinn (Die Einnahmen der Landbesitzer)",
            "Gesellschaft - Wert - Geld (Der Weg zur modernen Zivilisation)"
          ],
          correctIndex: 1,
          explanation: "Das Kapital wirft Geld in die Zirkulation, kauft Arbeitskraft und Maschinen, um durch die Produktion eine Ware zu erhalten, die sich für mehr Geld (G') verkaufen lässt als ursprünglich investiert wurde."
        }
      }
    ]
  },
  {
    id: 'lohnarbeit',
    category: 'gegenstand',
    number: '02',
    title: 'LOHNARBEIT & MEHRWERT',
    quote: "\"Das Kapital ist verstorbene Arbeit, die sich nur vampirmäßig belebt durch Einsaugung lebendiger Arbeit...\"",
    cards: [
      {
        id: 'l1',
        tag: 'Klassen',
        number: 'Karte 01 / Die Freiheit',
        title: 'Freie Knechtschaft',
        front: "Der Arbeiter ist 'frei' im doppelten Sinne: Frei von Produktionsmitteln und rechtlich frei, sich zu verkaufen. Eine notwendige Bedingung für Profit.",
        back: "Niemand zwingt den Lohnarbeiter mit Gewalt an die Maschinenkette. Er stimmt der Ausbeutung 'freiwillig' per Vertrag zu, weil ihm sonst der Hungertod droht. Der stumme Zwang der Verhältnisse.",
        content: "## Der Zwang der eigenen Eigentumslosigkeit\n\nEine der größten Ideologien der Gesellschaft ist die Idee, der Arbeitsvertrag sei ein Geschäft unter Gleichen. Rechtlich stimmt das: Niemand zwingt dich.\n\nAber sachlich liegt ein vollständiges Erpressungsverhältnis vor: Weil eine Klasse alle Produktionsmittel (Fabriken, Lizenzen, Land) besitzt und die große Masse nichts außer ihrer nackten Arbeitskraft, muss der Lohnarbeiter sich auf den Deal einlassen. Er tauscht seine Lebenszeit gegen sein reines Überleben (den Lohn). Diese bürgerliche 'Freiheit' (statt Sklaverei) ist der perfekte Mechanismus zur effizientesten Erpressung von Leistung.",
        size: 'featured',
        theme: 'dark',
        quiz: {
          question: "In welchem 'doppelten Sinne' ist der Lohnarbeiter frei?",
          options: [
            "Er ist steuerfrei und hat freie Berufswahl.",
            "Er ist frei von Sorgen und frei in seinen Entscheidungen.",
            "Er ist rechtlich eine freie Person und zugleich 'frei' von allem Besitz an Produktionsmitteln.",
            "Er hat Freizeit nach der Arbeit und freie Meinungsäußerung im Betrieb."
          ],
          correctIndex: 2,
          explanation: "Damit sich abstrakter Wert verwerten kann, braucht es Verkäufer ihrer eigenen Arbeitskraft. Diese müssen frei sein, Verträge zu schließen (keine Leibeigenschaft), aber auch 'frei' von allen Mitteln sein, selbst ihren Lebensunterhalt herzustellen - so dass sie zum Verkauf ihrer Leistung gezwungen sind."
        }
      },
      {
        id: 'l2',
        tag: 'Ausbeutung',
        number: 'Karte 02 / Mehrwert',
        title: 'Das offene Geheimnis',
        front: 'Woher kommt der Profit? Aus dem unbezahlten Teil des Arbeitstages. Der Lohn zahlt nur die Reproduktion der Arbeitskraft, niemals ihren vollen Ertrag.',
        back: 'In den ersten Stunden des Arbeitstages erarbeitet der Arbeiter den Wert seines eigenen Lohnes. Alles was er danach arbeitet, gehört dem Kapitalisten umsonst: Das ist der Mehrwert.',
        content: "## Die Mathematik der Ausbeutung\n\nProfit ist kein Aufpreis, den clevere Verkäufer einfach aufschlagen (sonst würden sie sich in der Konkurrenz nur gegenseitig das Geld aus der Tasche ziehen). Profit entsteht in der Produktion.\n\nDer Trick: Das Kapital bezahlt nicht den Wert der hergestellten Produkte, sondern den Wert der Arbeitskraft. Was ist Arbeitskraft wert? So viel, wie nötig ist, sie am Leben und funktionstüchtig zu halten (Miete, Essen, billige Erholung). \n\nDie Pointe: Wenn der Arbeiter nach 3 Stunden genug Wert produziert hat, um seinen Lohn abzudecken, arbeitet er die restlichen 5 Stunden des Tages gratis für das Unternehmen. Diese Differenz ist der Mehrwert. Es ist systematischer legaler Diebstahl nach den Regeln des gerechten Tauschs.",
        size: 'normal',
        theme: 'accent',
        quiz: {
          question: "Was genau bezahlt der Kapitalist dem Lohnarbeiter in Form des Lohns?",
          options: [
            "Einen fairen Anteil an den erwirtschafteten Gewinnen.",
            "Den exakten Wert der vom Arbeiter produzierten Waren.",
            "Den Wert der Ware Arbeitskraft (die Reproduktionskosten des Arbeiters).",
            "Nur die Steuern und Sozialabgaben."
          ],
          correctIndex: 2,
          explanation: "Wie bei jeder anderen Ware wird der Preis der Arbeitskraft im Durchschnitt durch ihre Herstellungskosten bestimmt - also das, was nötig ist, um den Arbeiter am Leben zu erhalten und fähig für den nächsten Arbeitstag zu machen."
        }
      },
      {
        id: 'l3',
        tag: 'Konflikt',
        number: 'Karte 03 / Lohnkampf',
        title: 'Ein Nullsummenspiel',
        front: 'Jeder Cent, der mehr als Lohn an den Arbeiter fließt, fehlt dem Kapital beim Profit. Ein unversöhnlicher Interessengegensatz, kein Missverständnis.',
        back: 'Gewerkschaften fordern faire Löhne. Das Kapital fordert Kostensenkungen für die Konkurrenzfähigkeit. Beides zugleich ist mathematisch unmöglich. Wer gewinnt, entscheidet einzig die Macht über den Ausfall der Produktion (Streik).',
        content: "## Die Lüge der Sozialpartnerschaft\n\nPolitik und Medien beschwören ständig, dass „Arbeitgeber und Arbeitnehmer im selben Boot sitzen“. Das ist analytisch falsch. \n\nDer Neuwert, der im Betrieb geschaffen wird, teilt sich auf in Lohn (v) und Mehrwert/Profit (m). Es ist eine einfache mathematische Gleichung: Was der eine kriegt, fehlt dem anderen. Erhöht sich der Lohn, sinkt die Profitrate. \n\nDa der Betrieb aber nur existiert, um Profit zu erwirtschaften, ist die Forderung der Arbeitnehmer nach einem 'guten Leben' immer ein Anschlag auf den fundamentalen Systemzweck. Deswegen ist der Klassenkampf kein moralischer Verfall, sondern objektiv in die Berechnung des Lohns eingeschrieben.",
        size: 'tall',
        theme: 'outlined',
        quiz: {
          question: "Warum gibt es einen objektiven Gegensatz zwischen Lohn und Profit?",
          options: [
            "Weil beide Seiten sich aus menschlicher Schwäche zu oft missverstehen.",
            "Weil das Management oft egoistische Fehler macht.",
            "Weil der aufgeteilte Neuwert ein Nullsummenspiel ist: Steigt der Anteil der Arbeit (Lohn), sinkt der Anteil des Kapitals (Profit).",
            "Weil staatliche Steuern es nicht zulassen, dass beide gut verdienen."
          ],
          correctIndex: 2,
          explanation: "Arbeit und Kapital streiten um die Aufteilung desselben, frisch geschaffenen Werts. Die Interessen sind hier diametral und unversöhnlich entgegengesetzt."
        }
      },
      {
        id: 'l4',
        tag: 'Krise',
        number: 'Karte 04 / Überproduktion',
        title: 'Der absurde Notstand',
        front: 'Nicht der Mangel ist im Kapitalismus das Problem, sondern der Überfluss. Zu viel Kapital, zu viele Waren, die sich nicht mehr rentabel verkaufen lassen.',
        back: 'Wenn Unternehmen massiv rationalisieren, sinken Preise und Löhne. Die ausgequetschte Masse hat am Ende nicht genug Lohn, um all die produzierten Waren zu kaufen. Resultat: Die Krise.',
        content: "## Armut durch Reichtum\n\nVor-kapitalistische Krisen waren Hungersnöte (Mangel an Dingen aufgrund der Natur). Die kapitalistische Krise ist eine Krise der Überproduktion (Mangel an kaufkräftiger Nachfrage für viel zu viel produzierte Dinge).\n\nWeil jedes Unternehmen versucht, Löhne zu drücken (Kosten senken!) aber gleichzeitig die massenhaft erzeugten Waren verkaufen will, sägt das Gesamtsystem den Ast ab, auf dem es sitzt. \n\nDas Resultat ist höchste Absurdität: Fabriken stehen still, Wohnungen stehen leer, Berge von Lebensmitteln werden vernichtet, und gleichzeitig sitzen Menschen arbeitslos auf der Straße und hungern, weil eben zu viel Reichtum (als Kapital) da ist, der momentan keinen Profit mehr abwirft. Ein System, das rational betrachtet völlig verrückt ist.",
        size: 'normal',
        theme: 'default',
        quiz: {
          question: "Was ist der charakteristische Grund einer kapitalistischen Krise?",
          options: [
            "Faulheit der arbeitenden Bevölkerung.",
            "Überproduktion an Waren in Relation zur noch vorhandenen Kaufkraft.",
            "Ein technologischer Rückstand der Industrie.",
            "Missernten und Naturkatastrophen."
          ],
          correctIndex: 1,
          explanation: "Die Krise bricht nicht aus, weil von irgendetwas Nützlichem zu wenig da wäre. Sie bricht aus, weil Güter und Kapital überakkumuliert wurden: Sie können nicht mehr Gewinn bringend an den Mann gebracht werden, da die Lohnsenkungen und Rationalisierungen die zahlungsfähige Nachfrage zerstört haben."
        }
      }
    ]
  },
  {
    id: 'staat',
    category: 'gegenstand',
    number: '03',
    title: 'STAAT & WELTMARKT',
    quote: "\"Der moderne Staat ist die politische Form der bürgerlichen Gesellschaft und ihr ideeller Gesamtkapitalist...\"",
    cards: [
      {
        id: 's1',
        tag: 'Funktion',
        number: 'Karte 01 / Gewaltmonopol',
        title: 'Die Voraussetzung',
        front: 'Der Staat ist kein neutraler Schiedsrichter, der über den Dingen schwebt. Er garantiert das Privateigentum und sichert damit gewaltsam die Ausbeutung.',
        back: 'Ohne staatliche Gewalt (Polizei, Strafrecht) könnte das rechtliche Konstrukt "Privateigentum an Produktionsmitteln" gegen die Masse der Besitzlosen nicht einen Tag existieren.',
        content: "## Der Wächter der Eigentumsordnung\n\nIm bürgerlichen Verständnis gilt der Staat oft als Instanz, die den bösen Markt nachträglich \"repariert\". Die materialistische Kritik zeigt: Der Staat setzt die bürgerliche Ökonomie überhaupt erst in Kraft.\n\nDas Gewaltmonopol stellt sicher, dass der Hungernde den Supermarkt nicht ausräumt. Es garantiert, dass Schuldner zahlen müssen. Der Staat ist die externe, übergeordnete Gewaltmacht, die den Antagonismus (Kapital vs Arbeit sowie Kapitalist vs Kapitalist) aushält und rechtlich formatiert. Er agiert, um das Klassenverhältnisses als solches aufrechtzuerhalten, nicht um es abzuschaffen.",
        size: 'wide',
        theme: 'outlined',
        quiz: {
          question: "Welche primäre Rolle hat der Staat für die kapitalistische Wirtschaft?",
          options: [
            "Er versucht, den Kapitalismus schrittweise in den Sozialismus zu überführen.",
            "Er ist eine neutrale Institution, die nur für Gerechtigkeit zwischen den Menschen sorgen will.",
            "Mit seinem Gewaltmonopol setzt er das Privateigentum an Produktionsmitteln und die rechtlichen Bedingungen der Ausbeutung durch.",
            "Er stört eigentlich nur die freie Wirtschaft und ist überflüssig."
          ],
          correctIndex: 2,
          explanation: "Zentrale Grundlage der Marktwirtschaft ist das exklusive Privateigentum an Fabriken, Lizenzen und Land. Herrschaft über diese Ressourcen erfordert eine staatliche Gewaltmaschinerie (Polizei, Justiz), die jeden bestraft, der sich an Reichtum bedient, den er nicht nach Marktregeln erworben hat."
        }
      },
      {
        id: 's2',
        tag: 'Demokratie',
        number: 'Karte 02 / Herrschaftsform',
        title: 'Die Standort-Verwaltung',
        front: 'Demokratie ist die beste Hülle für den Kapitalismus. Die Bürger stimmen alle paar Jahre freiwillig der Verwaltung ihrer eigenen Nützlichmachung zu.',
        back: 'Bei Wahlen entscheiden wir nicht über die System-Grundlagen, diese stehen in der Verfassung und im globalen Marktgeschehen fest. Wir bestimmen das Personal zur Exekution von „Sachzwängen“.',
        content: "## Die Kreuzchen für den Sachzwang\n\nDer Fehler der linker Sozialdemokratie: Sie hält den Staat für ein neutrales Werkzeug, das man durch Wahlen nur in die richtigen (linken) Hände bekommen müsse, um Gutes zu tun.\n\nJede Regierung (ob Grün, Rot, Schwarz oder Gelb) sieht sich am ersten Tag im Amt demselben Sachzwang ausgesetzt: Dem Gedeihen der nationalen Wirtschaft. Ohne florierendes Kapital gibt es keine Steuern; ohne Steuern keine staatliche Macht. \nDie Wähler fungieren in der Demokratie als Abnick-Verein, der aus verschiedenen Teams jenes Management (Regierung) wählt, welchem man zutraut, den nationalen Reichtum (den Kapitalstandort) bestmöglich gegen andere Nationen zu stärken, was fast immer Einschnitte für die abhängig Beschäftigten bedeutet.",
        size: 'normal',
        theme: 'default',
        quiz: {
          question: "Was ist aus radikal-kritischer Sicht ein Kernproblem demokratischer Wahlen im Kapitalismus?",
          options: [
            "Die Systemgrundlagen (Produktionsweise) stehen gar nicht zur Wahl, es geht nur um das effizienteste Management für den 'Standort'.",
            "Das Wahlsystem ist zu kompliziert.",
            "Es gibt zu wenig Parteien zur Auswahl.",
            "Die Politiker sind einfach noch nicht intelligent genug für gute Lösungen."
          ],
          correctIndex: 0,
          explanation: "Demokratie ändert nichts an den Kategorien Wert, Lohnarbeit und Profit. Die Regierung verwaltet diesen Staat und diese Ökonomie, sie kann und will die Ausbeutungslogik nicht abschaffen."
        }
      },
      {
        id: 's3',
        tag: 'Sozialstaat',
        number: 'Karte 03 / Der Reparaturbetrieb',
        title: 'Verschleiß-Wartung',
        front: 'Das Sozialsystem ist keine humane Wohltat, sondern Erhaltung von Humankapital. Der verschleißende Arbeiter wird am Leben gehalten, damit er wieder einsatzfähig wird.',
        back: 'Gesundheitswesen, Arbeitsschutz und Arbeitslosenversicherung sollen das \"Menschenmaterial\" der Nation für die Wirtschaft verwertbar halten.',
        content: "## Inventarpflege der Gesellschafts-Ressourcen\n\nWarum gibt es Dinge wie Kündigungsschutz oder Hartz IV / Bürgergeld?\n\nIm ungebremsten Frühkapitalismus haben Fabrikanten das Volk physisch vernichtet (Kinderarbeit, 16-Stunden-Tage, massiver Tod). Der Staat ist damals dazwischengegangen, weil ihm das Inventar ('Manpower', Soldaten, zukünftige Arbeiter) wegzustürzen drohte.\n\nDer moderne Sozialstaat lindert Härten exakt in dem Maß, dass das Proletariat weder physisch verreckt noch revoltiert. Hartz IV und Bürgergeld sind keine Hängematte. Es ist der organisierte Armutsdruck: So gering wie möglich bemessen, damit die Peitsche des Marktes spürbar bleibt und jeder jeden Drecksjob annehmen muss.",
        size: 'tall',
        theme: 'dark',
        quiz: {
          question: "Der Sozialstaat sichert Arbeitern bestimmte soziale Netze. Warum führt der Staat das ein?",
          options: [
            "Um den Kapitalismus innerlich zu überwinden.",
            "Weil Politiker tief im Innersten philanthropische Helfer sind.",
            "Um den totalen Verschleiß des nötigen 'Menschenmaterials' zu stoppen und Armut lediglich administrierbar zu machen.",
            "Um den Unternehmern zu schaden und ihre Macht zu beschränken."
          ],
          correctIndex: 2,
          explanation: "Ein Kapitalist schaut nur auf seinen betrieblichen Verschleiß. Der Staat blickt auf die Nation als Ganzes: Er muss regeln, dass auch morgen noch arbeitsfähige und nicht völlig rebellierende Menschenmassen bereistehen."
        }
      },
      {
        id: 's4',
        tag: 'Imperialismus',
        number: 'Karte 04 / Imperialismus',
        title: 'Bewaffneter Markt',
        front: 'Staaten konkurrieren auf dem Weltmarkt wie Firmen. Außenpolitik ist die Durchsetzung dieser nationalökonomischen Interessen, zur Not mit dem Militär.',
        back: 'Kein Staat ist vom anderen unabhängig. Wenn es um Absatzmärkte, Rohstoffe und geopolitischen Einfluss geht, wird notfalls der Ausnahmezustand (Krieg) verhängt.',
        content: "## Krieg als Fortsetzung der Ökonomie\n\nNationen streben danach, ihr eigenes (inländisches) Kapital auf dem internationalen Feld triumphieren zu lassen. Sie suchen den Zugriff auf Lithium, Öl oder Absatzmärkte, um ihre Konkurrenten (andere Länder) auszustechen.\n\nDer moralische Diskurs verdeckt das oft („Wir verteidigen unsere Werte“). In Wahrheit ist der Weltmarkt ein permanentes Hauen und Stechen um die Verwertung von Werten auf globaler Stufe. Wenn Zölle, Währungskriege und Erpressungen per IWF nicht mehr reichen, greift die imperialistische Logik zum Äußersten.\nKrieg ist kein Wahnsinn böser Diktatoren, sondern ein absolut rationales, wenn auch brutales Mittel in der Staatenkonkurrenz.",
        size: 'featured',
        theme: 'accent',
        quiz: {
          question: "Krieg und militärische Intervention entstehen in der kapitalistischen Weltordnung in der Regel durch...",
          options: [
            "Die psychologischen Defekte einzelner Machthaber.",
            "Zufällige diplomatische Entgleisungen.",
            "Unterschiedliche Religionen, die aufeinandertreffen.",
            "Harte ökonomische und strategische Konkurrenz der Staaten um Ressourcen, Sphären und Kapitalverwertung."
          ],
          correctIndex: 3,
          explanation: "Hinter ideologischen Begründungen verbergen sich handfeste materielle Interessen: Die Absicherung von Transportrouten, Rohstoffzugang und Absatzmärkten für das eigene nationale Kapital."
        }
      }
    ]
  },
  {
    id: 'ideologie',
    category: 'gegenstand',
    number: '04',
    title: 'BEWUSSTSEIN & IDEOLOGIE',
    quote: "\"Sie wissen das nicht, aber sie tun es.\"",
    cards: [
      {
        id: 'i1',
        tag: 'Fetischismus',
        number: 'Karte 01 / Warenfetisch',
        title: 'Verdeckte Verhältnisse',
        front: 'Dingen wohnt kein Wert von Natur aus inne. Aber wir haben eine Welt geschaffen, in der sich gesellschaftliche Verhältnisse in den Dingen verbergen.',
        back: 'Weil Menschen nur privat produzieren und erst auf dem Markt zusammenkommen, erscheint ihnen ihre eigene gesellschaftliche Verbindung als eine unheimliche Beziehungs-Macht der Dinge.',
        content: "## Die Naturgesetze der Wirtschaft\n\nWir sagen heute sätze wie: 'Die Märkte sind unruhig', 'Der Kurs bricht ein', 'Die Zinsen verlangen eine Anpassung'.\n\nWir sprechen von Wirtschaft so, als handle es sich um das Wetter oder um Naturgesetze, denen wir uns demütig unterwerfen müssen. Genau das meint der Marxsche Fetisch-Begriff: Wir haben ein System konstruiert, dessen Resultate sich völlig hinter unserm Rücken als anonyme Sachzwänge vollziehen. Dabei steckt im 'Dax' oder im 'Preis' nichts anderes als das menschliche Arbeitsblatt und Ausbeutungsverhältnis. Solange wir die Wirtschaft als Sachgesetz begreifen, sind wir unfähig sie als gemachtes System zu kritisieren.",
        size: 'tall',
        theme: 'dark',
        quiz: {
          question: "Was meint der Begriff 'Warenfetisch'?",
          options: [
            "Die psychologische Kaufsucht moderner Konsumenten.",
            "Die Verschleierung gesellschaftlicher Mensch-Mensch-Verhältnisse (Wirtschaft) als angebliche Sach-Verhältnisse und Naturgesetze.",
            "Eine abartige Neigung zu bestimmten Markenprodukten.",
            "Dass früher Leute an magische Gegenstände geglaubt haben."
          ],
          correctIndex: 1,
          explanation: "Der Fetischismus ordnet den produzierten Gegenständen (Waren/Geld) Eigenschaften zu, die in Wahrheit gesellschaftliche Beziehungen der Menschen untereinander sind (z.B. Wert). Die Menschen beten ihr eigens geschaffenes Produkt als ihren Herrn an."
        }
      },
      {
        id: 'i2',
        tag: 'Leistung',
        number: 'Karte 02 / Leistungsideologie',
        title: 'Die Meritokratie',
        front: '„Jeder ist seines Glückes Schmied.“ Die aggressivste bürgerliche Phrase. Wer scheitert, hat sich einfach nicht genug angestrengt.',
        back: 'In einem System, wo Privateigentum Millionen von Menschen strukturell aussperrt und systematisch Profit aus Lohnarbeit gezogen wird, ist der Reichtum nie Resultat eigner Arbeit, sondern fremder.',
        content: "## Das Märchen vom Fleiß\n\nWenn harte Arbeit reich machen würde, wären Krankenschwestern und Bauarbeiter Millionäre. Die Leistungsideologie erfüllt eine extrem wichtige Herrschaftsfunktion: Wer im Konkurrenzkampf um Ausbildungs- und Arbeitsplätze als Verlierer hervorgeht (und dieses System muss massenhaft Verlierer produzieren), dem wird eingeredet, er selbst trage die alleinige Schuld.\n\nDer Reichtum des erfolgreichen Gründers rührt nicht von seinem 18-Stunden-Tag her, sondern aus der Rechtsordnung, die es ihm erlaubt, die 8-Stunden-Tage von 10.000 anderen rechtmäßig abzuschöpfen. ",
        size: 'normal',
        theme: 'default',
        quiz: {
          question: "Welche gesellschaftliche Funktion erfüllt die Leistungsideologie?",
          options: [
            "Sie verhindert strukturelle Systemkritik, indem sie strukturell verursachte Armut in ein individuelles, moralisches Versagen umdeutet.",
            "Sie belohnt wirklich immer die fairsten und cleversten Arbeiter.",
            "Sie sorgt für eine ausgewogene und harmonische Gesellschaft.",
            "Sie motiviert die faulen Unternehmer dazu, auch mal an die Werkbank zu treten."
          ],
          correctIndex: 0,
          explanation: "Wenn die Arbeiterklasse glaubt, ihr Mangel läge an mangelnder Bemühung, sucht sie die Fehler bei sich selbst statt in der Art und Weise, wie die Gesellschaft eingerichtet ist."
        }
      },
      {
        id: 'i3',
        tag: 'Gerechtigkeit',
        number: 'Karte 03 / Falsche Kritik',
        title: 'Der Moralische Protest',
        front: 'Protest, der sich auf „Gerechtigkeit“ beruft, läuft immer ins Leere. Wer gerechte Löhne fordert, hat die Mechanik des Lohns schon als gut anerkannt.',
        back: 'Es gibt keinen bösen, gierigen Bankmanager, der alles kaputt macht. Der Manager exekutiert objektiv die Logik des Kapitals. Wer die Moral kritisiert, verzeiht dem System.',
        content: "## Gier als falsche Erklärung\n\nViel linke Kritik ist hochgradig moralisch und greift deshalb kurz. Man schimpft auf die „Heuschrecken“, auf die „gierigen Konzerne“ und die „korrupten Politiker“. Damit unterstellt man: Eigentlich wäre der Markt eine gute Sache, er wird nur von schlechten Menschen missbraucht.\n\nDas genaue Gegenteil ist der Fall: Kapitalismus in seiner Reinform zwingt zur maximalen Auspressung, zum Krieg um Rohstoffe und zum Raubbau. Der nette, menschenfreundliche CEO wird von der Konkurrenz ganz sachlich einfach wegrationalisiert. Eine kapitalistische Ökonomie ohne Härte ist ein Widerspruch in sich. Die Kritik muss dem Prinzip gelten, nicht dem moralischen Fehlverhalten von Personen.",
        size: 'wide',
        theme: 'accent',
        quiz: {
          question: "Warum ist die Kritik an der 'Gier' der Manager aus marxistischer Perspektive naiv?",
          options: [
            "Weil Manager in Wahrheit oft spenden und philanthropisch veranlagt sind.",
            "Weil Gier keine psychologische Veranlagung sein kann.",
            "Weil unerbittliches Profitstreben ein struktureller Überlebenszwang des Kapitals ist, die Manager füllen nur diese Charaktermaske aus.",
            "Weil Gewerkschaften viel gieriger sind."
          ],
          correctIndex: 2,
          explanation: "Das Kapital muss wachsen (Akkumulationszwang). Wer eine Fabrik leitet, wird von den Investoren und dem Konkurrenzmarkt dazu gezwungen, die Kosten zu senken, sonst geht das Unternehmen bankrott. Das System erzeugt das Verhalten, nicht umgekehrt."
        }
      },
      {
        id: 'i4',
        tag: 'Alternativen',
        number: 'Karte 04 / Utopien',
        title: 'Der linke Formfehler',
        front: 'Eine andere Gesellschaft lässt sich nicht per Post-It planen. Wer Skizzen von einer schönen neuen Welt malt, ignoriert den Kern: Es bedarf der Überwindung der Warenform.',
        back: 'Die Konzentration auf neue Konzepte (BGE, Tauschringe) ignoriert die Machtfrage. Die herrschende Klasse wird nicht freiwillig wegen eines guten Arguments abtreten.',
        content: "## Das bedingte Ende des falschen Ganzen\n\nMan fragt Kritikern oft: 'Was ist denn eurer Plan? Wie soll es ganz genau anders laufen?' Wer so fragt, denkt politisch wie ein sozialer Architekt, der ein Haus plant.\n\nAber eine befreite Gesellschaft, die nicht für Verwertung von Wert produziert, sondern geplant das herstellt, was die Menschheit braucht, entwickelt sich erst aus den Umständen der Aufhebung der alten Herrschaft. Keine Geldwirtschaft, keine Warenform, sondern assoziierte Produzenten organisieren ihren Stoffwechsel mit der Natur. Jedes Reformkonzept, das verspricht, den Kapitalstaat einfach durch Steuerreformen oder kleine Genossenschaften von innen heraus „weicher“ zu machen, kapituliert am systematischen Abwehrwillen des globalen Kapitals.",
        size: 'tall',
        theme: 'outlined',
        quiz: {
          question: "Was ist der Hauptkritikpunkt an reformistischen Ideen wie dem Bedingungslosen Grundeinkommen (BGE)?",
          options: [
            "Es ist logistisch nicht finanzierbar.",
            "Menschen würden dann nur noch fernsehen.",
            "Es taste die Grundstrukturen der Gesellschaft (Besitz an Produktionsmitteln, Zwang zur Kapitalverwertung) nicht an und bliebe Systemerhaltung.",
            "Es gibt den falschen Leuten zu viel Geld."
          ],
          correctIndex: 2,
          explanation: "Ein Grundeinkommen setzt weiterhin eine staatliche Herrschaft sowie einen florierenden kapitalistischen Wirtschaftsmotor voraus, aus dessen Erträgen das BGE gespeist wird. Die Trennung zwischen Besitzern und Lohnarbeitern bliebe fundamental erhalten."
        }
      }
    ]
  },
  {
    id: 'methodik',
    category: 'abstraktion',
    number: '01',
    title: 'METHODIK & LOGISCHER AUFBAU',
    quote: '"Die Methode des Aufsteigens vom Abstrakten zum Konkreten ist nur die Art für das Denken, sich das Konkrete anzueignen..."',
    cards: [
      {
        id: 'abs1',
        tag: 'Erkenntnis',
        number: 'Karte 01 / Methode',
        title: 'Die reale Abstraktion',
        front: 'Der Tauschakt abstrahiert tagtäglich praktisch von der tatsächlichen Nützlichkeit der Dinge und reduziert sie auf abstrakten Wert.',
        back: 'Die Abstraktion ist im Kapitalismus keine bloß gedankliche Leistung der Ökonomen. Sie findet auf dem Markt als "reale Abstraktion" statt, wenn Waren völlig ungeachtet ihrer sinnlichen Beschaffenheit gleichgesetzt werden.',
        content: "## Die reale Abstraktion\n\nDer gewöhnliche Verstand tut sich schwer mit der Kritik der politischen Ökonomie, weil er gewohnt ist, Dinge in ihrer reinen Gegenständlichkeit zu betrachten (ein Tisch ist ein Tisch).\n\nDie materialistische Methode zeigt, dass die Gesellschaft selbst praktisch abstrahiert. Im Akt des Tausches werden zwei verschiedene Naturgegenstände völlig gleichgesetzt. Die Marktteilnehmer tun das, ohne es bewusst zu wissen.\n\nDie wissenschaftliche Abstraktion muss also nicht die Wirklichkeit vereinfachen, sondern hinter die von der kapitalistischen Praxis bereits vollzogenen realen Abstraktionen blicken, um ihr Wesen offenzulegen. Nur so wird verständlich, warum gesellschaftliche Beziehungen der Menschen als sachliche Verhältnisse der Dinge erscheinen.",
        size: 'wide',
        theme: 'dark',
        quiz: {
          question: "Was meint die Kritik der politischen Ökonomie mit der 'Realen Abstraktion'?",
          options: [
            "Dass Marxisten ihre Argumente zu abstrakt formulieren.",
            "Den Vorgang im Tausch, bei dem von allen nützlichen Eigenschaften physischer Dinge praktisch abgesehen wird.",
            "Eine philosophische Denkrichtung im 19. Jahrhundert.",
            "Die Weigerung des Kapitals, Steuern zu zahlen."
          ],
          correctIndex: 1,
          explanation: "Die reale Abstraktion ist kein gedanklicher Fehler, sondern die tägliche Praxis der Marktwirtschaft. Jedes Preisschild tilgt die physischen Eigenarten eines Guts und degradiert es zum reinen Wertträger."
        }
      },
      {
        id: 'abs2',
        tag: 'Darstellung',
        number: 'Karte 02 / Struktur',
        title: 'Zum Konkreten',
        front: 'Man muss bei der einfachsten sozialen Form (der Ware) beginnen und sie logisch bis zum Weltmarkt aufrollen.',
        back: 'Das Problem ist nicht historisch, sondern theoretisch: Aus dem einfachsten inneren Widerspruch drängt sich die nächste Kategorie zwingend auf.',
        content: "## Das Aufsteigen vom Abstrakten zum Konkreten\n\nDie Kritik der politischen Ökonomie erzählt keine Historie (vom Tauschhandel in der Steinzeit bis zum Euro), sondern entfaltet die Bestimmungen des existierenden Systems. Sie beginnt bei der einfachsten Form: Der Ware.\n\nAus der Analyse der Ware entspringt als logische Notwendigkeit zur Lösung ihres innewohnenden Widerspruchs das Geld. Aus dem Geld wiederum erwächst als selbstverwertender Zweck das Kapital. Aus dem Kapital resultiert die Lohnarbeit usw.\n\nDiese logische Herleitung beweist, dass Phänomene wie Krise keine Unfälle sind, sondern in der Keimform theoretisch vorprogrammiert waren. Die abstrakte Theorie wird durch sukzessive Hinzunahme von Bestimmungen immer 'konkreter'.",
        size: 'tall',
        theme: 'outlined',
        quiz: {
          question: "Warum beginnt das logische Gebäude der Kritik beim Konzept der 'Ware'?",
          options: [
            "Weil früher alle Menschen Tauschhandel betrieben.",
            "Weil 'Warendealer' ein prägnantes Wort ist.",
            "Weil es die universelle, atomare Elementarform des modernen Reichtums ist.",
            "Aus didaktischen Gründen, weil es leicht erklärt ist."
          ],
          correctIndex: 2,
          explanation: "Im Kapitalismus erscheint aller Reichtum als Ansammung von Waren. Die Analyse dieser zellularen Elementarform offenbart die Keimform sämtlicher Krisen und Widersprüche des Gesamtsystems."
        }
      }
    ]
  },
  {
    id: 'dialektik',
    category: 'logik',
    number: '01',
    title: 'DIALEKTIK DES KAPITALS',
    quote: '"G - W - G\'... Wert, der sich als sich selbst verwertender Wert vollzieht."',
    cards: [
      {
        id: 'log1',
        tag: 'Dialektik',
        number: 'Karte 01 / Maßlosigkeit',
        title: 'Zweck der Vernunft',
        front: 'Die Logik des Kapitals kennt kein äußeres Ziel, keine endliche Bedürfnisbefriedigung. Der Zweck der Geldvermehrung ist grenzenlos.',
        back: 'Geld wird zu Kapital, indem es sich in den Produktionsprozess wirft, um als mehr Geld wieder aufzutauchen. Der Mensch fungiert darin als bloße Charaktermaske.',
        content: "## G-W-G' : Die maßlose Bewegung\n\nIn der einfachen Warenproduktion produziert ein Handwerker, verkauft sein Produkt und kauft davon Lebensmittel (W-G-W). Das Ziel ist Konsum, das Maß ist das menschliche Bedürfnis.\n\nDie Logik des Kapitals ist diametral entgegengesetzt: Das Kapital startet mit Geld (G), kauft Waren (W = Maschinen, fremde Arbeitskraft) um sie für MEHR Geld zu verkaufen (G').\n\nWarum? Weil Wert an sich keine innere Grenze kennt. Man kann abstrakt betrachtet immer noch mehr Geld machen. Und diese endlose, qualitätslose Maßlosigkeit zwingt die Kapitalisten unter Androhung des eigenen Bankrotts in den ständigen Expansionszwang. Das System kennt in sich selbst kein 'genug'.",
        size: 'featured',
        theme: 'accent',
        quiz: {
          question: "Was ist der wesentliche formale Unterschied zwischen W-G-W und G-W-G'?",
          options: [
            "Es gibt keinen, beide Male wird gehandelt.",
            "W-G-W hat die Bedürfnisbefriedigung als Ziel. G-W-G' hat die endlose Akkumulation von Wert als Selbstzweck.",
            "W-G-W ist für den Inlandsmarkt, G-W-G' für den Weltmarkt.",
            "G-W-G' ist steuerfrei."
          ],
          correctIndex: 1,
          explanation: "Während die Logik W-G-W mit dem Konsum ihr Ende findet, ist der Kapitalprozess maßlos und endlos, da reiner Wert prinzipiell immer weiter quantitativ vermehrt werden kann."
        }
      },
      {
        id: 'log2',
        tag: 'Widerspruch',
        number: 'Karte 02 / Krisentheorie',
        title: 'Logik der Krise',
        front: 'Krisen sind keine Betriebsunfälle oder Missmanagement. Sie sind der gewaltsame Ausgleich der antagonistischen Logik des Systems selbst.',
        back: 'Das Kapital tendiert dazu, die Produktivkräfte grenzenlos zu entwickeln, während die Konsumtionskraft durch den Zwang zur Lohnsenkung streng beschränkt bleibt.',
        content: "## Überakkumulation als notwendiges Prinzip\n\nDie Krise in der kapitalistischen Logik ist historisch völlig neu. In Vorkapitalistischen Zeiten grasierten Mangelkrisen (Missernten). Im Kapitalismus verarmen Massen und Firmen brechen zusammen, weil zu viel produziert wurde, was sich nicht mehr profitabel vermarkten lässt (Überproduktionskrise).\n\nDie treibende Logik:\n1. Unternehmen müssen profitabler werden (Automatisierung, Lohnsenkung).\n2. Es wird mehr Wert/Güter in kürzerer Zeit erschaffen.\n3. Gleichzeitig sinkt die Massenkaufkraft, um die Lohnkosten zu drücken.\n4. Die produzierten massenhaften Waren finden keine zahlungsfähigen Abnehmer, das Kapital kann sich nicht verwerten.\n\nDie Krise entwertet dann das überschüssige Kapital gewaltsam, bis sich die Profitraten erholen und der irre Kreislauf von Neuem beginnt.",
        size: 'normal',
        theme: 'default',
        quiz: {
          question: "Welches ist eine typische Krisenform nach der inneren Logik des Kapitals?",
          options: [
            "Die Mangelkrise (es fehlt physisch an Rohstoffen).",
            "Die moralische Krise (Leute arbeiten nicht mehr hart).",
            "Die demografische Krise.",
            "Die Überproduktions- & Überakkumulationskrise (zu viele unrentable Werte)."
          ],
          correctIndex: 3,
          explanation: "Kapitalistische Krisen zeichnen sich dadurch aus, dass sich auf der einen Seite Waren aufhäufen und auf der anderen Seite Lohnforderungen nicht mehr bedient werden, weil die Profitrate des Kapitals nicht mehr gesichert ist."
        }
      }
    ]
  },
  {
    id: 'fetisch',
    category: 'abstraktion',
    number: '02',
    title: 'FETISCH & MYSTIFIKATION',
    quote: '"Ein Geheimnis ist die Warenform also einfach deshalb, weil in ihr die gesellschaftlichen Charaktere der Menschenarbeit den Menschen als objektive Charaktere der Arbeitsprodukte [...] zurückspiegeln."',
    cards: [
      {
        id: 'fet1',
        tag: 'Fetischismus',
        number: 'Karte 01 / Fetisch',
        title: 'Geisterhafte Gegenständlichkeit',
        front: 'Im Kapitalismus nehmen soziale Verhältnisse zwischen Menschen die absurde Form von sachlichen Eigenschaften der Dinge an.',
        back: 'Dass ein Stück Papier (Geld) Macht über Menschen hat, ist keine Eigenschaft des Papiers, sondern ein verdinglichtes gesellschaftliches Verhältnis, das den Akteuren verborgen bleibt.',
        content: "## Der Warenfetischismus\n\nOft wird unter 'Fetischismus' umgangssprachlich der übertriebene Konsumwahn verstanden (z.B. ein 'Markenfetisch'). Marx meint damit jedoch etwas grundlegend anderes, tiefgreifenderes.\n\nWeil die Produzenten in dieser Gesellschaft erst über den Markt (den Tausch) miteinander in Kontakt treten, erscheint ihnen ihre eigene gesellschaftliche Arbeit nicht als direkte soziale Beziehung, sondern als eine sachliche Eigenschaft der Produkte selbst. Nicht Menschen bestimmen bewusst, wie viel wofür gearbeitet wird, sondern die fallenden oder steigenden 'Preise' der Dinge auf dem Markt diktieren den Menschen ihr Handeln.\n\nDas gesellschaftliche Verhältnis der Produzenten erscheint als ein gesellschaftliches Verhältnis von Dingen. Die Dinge (Märkte, Kurse, Preise) scheinen ein Eigenleben zu führen und beherrschen ihre eigenen Schöpfer.",
        size: 'wide',
        theme: 'dark',
        quiz: {
          question: "Was bezeichnet die marxsche Kritik rigoros als 'Warenfetischismus'?",
          options: [
            "Den psychologischen Drang, immer die neuesten Produkte kaufen zu müssen.",
            "Die sexuelle Aufladung von Werbung.",
            "Den Umstand, dass gesellschaftliche Verhältnisse zwischen Menschen als sachliche Eigenschaften von Dingen (Wert, Preis) erscheinen.",
            "Den Götzendienst in präkapitalistischen Gesellschaften."
          ],
          correctIndex: 2,
          explanation: "Fetischismus bedeutet hier, dass die Menschen von den Produkten ihrer eigenen Arbeit (dem Markt) beherrscht werden, als wären diese Produkte lebendige Autoritäten."
        }
      },
      {
        id: 'fet2',
        tag: 'Mystifikation',
        number: 'Karte 02 / Mystifikation',
        title: 'Der verkehrte Schein',
        front: 'Es ist kein böser Wille oder eine Täuschung der Medien: Der Kapitalismus erzeugt spontan den objektiv verkehrten Schein seiner selbst.',
        back: 'Der Lohn scheint die Arbeit voll zu bezahlen. Der Profit scheint aus der cleveren Anwendung von Maschinen zu stammen. Dieser Schein ist objektiv gegeben.',
        content: "## Objektive Mystifikation\n\nDie Kritik der politischen Ökonomie behauptet nicht, die Menschen seien einfach nur dumm oder würden von einer Elite absichtlich getäuscht. Die Verhältnisse selbst mystifizieren sich in der Praxis.\n\nBeispiel Lohnform: Wenn Arbeiter bezahlt werden, sieht es so aus, als würden sie für 8 Stunden Arbeit exakt den Wert von 8 Stunden Geld erhalten. Der Mehrwert (die unbezahlte Arbeit) ist unsichtbar. Er offenbart sich nicht auf der Gehaltsabrechnung. Dieser 'objektive Schein' ist notwendig.\n\nWer nur die Oberfläche der Wirtschaft betrachtet, wird zwangsläufig die bürgerliche Nationalökonomie reproduzieren. Die wissenschaftliche Abstraktion muss den verkehrten Schein durchdringen, um die darunterliegenden Aneignungsverhältnisse offenzulegen.",
        size: 'tall',
        theme: 'default',
        quiz: {
          question: "Worauf beruht laut Kritik die 'Mystifikation' der kapitalistischen Verhältnisse?",
          options: [
            "Auf einer globalen Verschwörung der Massenmedien.",
            "Auf der objektiven Form, wie ökonomische Akte (wie Lohnzahlung oder Profit) an der Oberfläche der Gesellschaft notwendig erscheinen.",
            "Auf der unzureichenden Schulbildung der Bevölkerung.",
            "Auf der kriminellen Energie von Bankern."
          ],
          correctIndex: 1,
          explanation: "Der Schein (z.B. dass der Lohn die gesamte getane Arbeit bezahle) liegt in der Struktur des Tausches von Arbeitskraft gegen Geld selbst begründet, nicht in bewusster Manipulation."
        }
      }
    ]
  },
  {
    id: 'profit',
    category: 'logik',
    number: '02',
    title: 'PROFITRATE & KONKURRENZ',
    quote: '"Die Schranke der kapitalistischen Produktionsweise manifestiert sich in dem Fall der Profitrate..."',
    cards: [
      {
        id: 'prof1',
        tag: 'Dynamik',
        number: 'Karte 01 / Das Gesetz',
        title: 'Tendenzfall der Profitrate',
        front: 'Der Zwang, menschliche Arbeit (die einzige Wertquelle) durch Maschinen zu ersetzen, untergräbt langfristig die Profitabilität des Gesamtsystems.',
        back: 'Weil Profite nur aus unbezahlter menschlicher Arbeit stammen, senkt die Automatisierung zwar kurzfristig die Stückkosten des einzelnen, untergräbt aber gesellschaftlich die Basis der Wertschöpfung.',
        content: "## Das Gesetz des tendenziellen Falls der Profitrate\n\nEin zentrales logisches Gesetz der Kapitalkritik: Der einzelne Kapitalist führt Maschinen ein, um billiger zu produzieren als die Konkurrenz (Extramehrwert). Die Maschine selbst schafft aber keinen neuen Wert, sie gibt nur ihren eigenen Wert sukzessive (durch Verschleiß) an das Produkt ab.\n\nDa NUR lebendige menschliche Arbeit neuen, zusätzlichen Wert schaffen kann, führt die Zunahme von Maschinen (konstantes Kapital) im Verhältnis zu Arbeitern (variables Kapital) paradoxerweise dazu, dass die Profitrate, der Profit gemessen am vorgeschossenen Gesamtkapital, tendenziell sinkt.\n\nDas Kapital sägt permanent an dem Ast, auf dem es sitzt. Es muss immer mehr Kapital vorschießen, um die gleiche Masse an Profit zu realisieren. Dieser innere Widerspruch treibt die Konzentration des Kapitals und heftige periodische Krisen an.",
        size: 'featured',
        theme: 'accent',
        quiz: {
          question: "Warum führt die massenhafte Einführung von Maschinen logisch zum Fall der generellen Profitrate?",
          options: [
            "Weil Maschinen zu teuer in der Wartung sind.",
            "Weil Maschinen streiken können.",
            "Weil ausschließlich lebendige Arbeit neuen (Mehr-)Wert schafft und ihr Anteil am investierten Gesamtkapital durch die Maschinisierung immer weiter zusammenschrumpft.",
            "Weil Maschinen die Umwelt verschmutzen."
          ],
          correctIndex: 2,
          explanation: "Obwohl Maschinen die Produktivität steigern, verdrängen sie die einzige Quelle von Wert, den Menschen. Je weniger Arbeitskraft im Verhältnis zum toten Kapital (Maschinen) eingesetzt wird, desto weniger relativer Mehrwert kann abgeschöpft werden."
        }
      },
      {
        id: 'prof2',
        tag: 'Konkurrenz',
        number: 'Karte 02 / Der Zwang',
        title: 'Konkurrenz der Kapitale',
        front: 'Konkurrenz ist nicht das erfreuliche "Beleben des Geschäfts", sondern der brutale Exekutor der inneren Gesetze des Kapitals.',
        back: 'Kein Kapitalist ist frei. Die Konkurrenz zwingt jedem Unternehmen als äußeres Zwangsgesetz die innere Logik des Systems auf (Wachstum, Automatisierung, Lohnsenkung).',
        content: "## Der Exekutor der immanenten Gesetze\n\nIn der herrschenden Ideologie gilt Konkurrenz als Garant für Qualität und faire Preise. Materialistisch betrachtet ist die Konkurrenz lediglich die äußere Form, in der sich die innere Natur des Kapitals durchsetzt.\n\nEin Unternehmer kann sich nicht aussuchen, ob er wachsen will oder ob er ethisch korrekt produzieren möchte. Tut er es nicht, produziert die Konkurrenz billiger und stürzt ihn in den Ruin. Die Konkurrenz ist der Peitschenhieb, der die Maßlosigkeit der Kapitalverwertung (G-W-G') rücksichtslos eintreibt.\n\nDeshalb sind Appelle an die 'Moral der Wirtschaftsbosse' systemisch wirkungslos. Die Akteure sind Getriebene ihrer eigenen Veranstaltung.",
        size: 'wide',
        theme: 'outlined',
        quiz: {
          question: "Welche Funktion erfüllt die Konkurrenz in der Logik des Kapitals?",
          options: [
            "Sie schützt die Verbraucher vor Monopolen.",
            "Sie dient als 'äußeres Zwangsgesetz', welches den Einzelunternehmen die inneren Gesetze der Profitmaximierung gewaltsam aufzwingt.",
            "Sie beweist, dass der Markt vollkommen rational ist.",
            "Sie ist eine Erfindung böser Unternehmer."
          ],
          correctIndex: 1,
          explanation: "Selbst wenn ein Unternehmer humane Löhne zahlen wollte, zwingt ihn der Konkurrent, der es nicht tut, unter Androhung des eigenen Bankrotts zur Anpassung an das Diktat der Profitabilität."
        }
      }
    ]
  },
  {
    id: 'kredit',
    category: 'gegenstand',
    number: '05',
    title: 'KREDIT & FIKTIVES KAPITAL',
    quote: '"Die Zirkulation des Kapitals vollzieht sich wesentlich durch den Kredit..."',
    cards: [
      {
        id: 'kred1',
        tag: 'Kredit',
        number: 'Karte 01 / Der Hebel',
        title: 'Beschleuniger der Akkumulation',
        front: 'Der Kredit ist kein neutraler Service der Bank, sondern die zwingende Methode des Gesamtkapitals, die individuellen Schranken der Profitproduktion zu durchbrechen.',
        back: 'Unternehmen müssen investieren, bevor sie Einnahmen haben. Der Kredit sozialisiert das brachliegende Geld der Gesellschaft und stellt es der individuellen Profitproduktion zur Verfügung.',
        content: "## Der Kredit als Hebel\n\nDie industrielle Produktion hat oft lange Umschlagzeiten. Ohne Kredite müsste ein Unternehmen jahrelang sparen, um eine neue Fabrik zu bauen.\n\nDas Kreditsystem sammelt jeden Cent, der gerade nicht im Wirtschaftskreislauf aktiv ist (Ersparnisse, Rücklagen), und wirft ihn als vorschießendes Kapital wieder in die Verwertung. Geld wird so zu 'zins-tragendem Kapital'. Der Zins ist lediglich ein abgezweigter Teil des später in der Produktion herausgequetschten Mehrwerts.\n\nDas Kreditsystem treibt die kapitalistische Produktion über ihre eigenen materiellen und zeitlichen Schranken hinaus und formt riesige Aktiengesellschaften aus, zugleich beschleunigt es damit massiv den Ausbruch von Überproduktionskrisen.",
        size: 'tall',
        theme: 'default',
        quiz: {
          question: "Woher stammt strukturell der Profit der Banken (der Zins)?",
          options: [
            "Es ist die Belohnung für ihren Fleiß beim Verwalten der Konten.",
            "Der Zins ist ein Aneignungstitel auf einen Teil des Mehrwerts, der später in der realen Produktion aus der Arbeiterschaft herausgepresst wird.",
            "Geld hat die magische Eigenschaft, sich selbst zu vermehren, wenn man es lagert.",
            "Aus den Gebühren, die Bürger für Überweisungen zahlen."
          ],
          correctIndex: 1,
          explanation: "Zins tragendes Kapital scheint sich zwar von selbst zu vermehren, faktisch ist der Zins aber ein Anspruch auf den in der Industrie erzeugten Profit (also unbezahlte Arbeit)."
        }
      },
      {
        id: 'kred2',
        tag: 'Das Ende',
        number: 'Karte 02 / Fiktives Kapital',
        title: 'Die Verselbstständigung',
        front: 'An den Finanzmärkten handelt die Gesellschaft mit Reichtum, der überhaupt noch nicht existiert. Papiere werden zum Fetisch des Reichtums, losgelöst von jedweder echten Arbeit.',
        back: 'In Aktien und Staatsanleihen wird ein Anspruch auf "zukünftigen Profit" verbrieft und gehandelt. Der Schein entsteht, dass Geld aus sich selbst heraus wächst, völlig ohne Produktionsprozess.',
        content: "## Fiktives Kapital\n\nWenn man eine Aktie für 10.000 Euro kauft, existiert dieser 'Wert' zunächst nur in der Hoffnung auf zukünftige Dividenden. Dieses Papier selbst wird nun als Kapital gehandelt.\n\nDas System verselbstständigt sich: Die Börse bewertet Unternehmen astronomisch hoch, weil auf massive zukünftige Ausbeutung gewettet wird. Das ist das 'fiktive Kapital'. Alles läuft glatt, solange der Kredit sich am Ende durch reale Profitproduktion rentiert.\n\nWenn jedoch die reale Basis (die Profitrate) stockt, bricht das Kartenhaus zusammen. Die Blase platzt, und das fiktive Kapital vernichtet sich in Tagen. Im Kapitalismus ist die Finanzkrise nie nur ein 'Bankenproblem', sondern der gewaltsame Ausbruch einer tieferliegenden Störung der realen Wertschöpfung.",
        size: 'wide',
        theme: 'dark',
        quiz: {
          question: "Was ist 'fiktives Kapital' in der materialistischen Analyse?",
          options: [
            "Falschgeld, das von Kriminellen gedruckt wird.",
            "Geld auf dem Girokonto.",
            "Kapitalisiertes Einkommen, bei dem Eigentumstitel (Aktien, Anleihen) einen gehandelten Wert erhalten, der auf bloßer Erwartung zukünftiger Profite basiert.",
            "Kredite, die nie zurückgezahlt werden."
          ],
          correctIndex: 2,
          explanation: "Fiktives Kapital ist die groteske Zuspitzung der Warenform: Ein Papier, das lediglich einen Anspruch auf die Resultate künftiger Ausbeutung verbrieft, wird so gehandelt, als enthielte es selbst den Wert."
        }
      }
    ]
  },
  {
    id: 'leseempfehlungen',
    category: 'leseempfehlungen',
    number: '04',
    title: 'Lernmaterial',
    quote: '"Die Waffe der Kritik kann allerdings die Kritik der Waffen nicht ersetzen, die materielle Gewalt muß gestürzt werden durch materielle Gewalt, allein auch die Theorie wird zur materiellen Gewalt, sobald sie die Massen ergreift." - Karl Marx',
    cards: [
      {
        id: 'lesen1',
        tag: 'Primärtext',
        number: 'Buch 01 / Das Fundament',
        title: 'Das Kapital, Band 1',
        front: 'Karl Marx - Exakter Titel: »Das Kapital. Kritik der politischen Ökonomie. Erster Band: Der Produktionsprozeß des Kapitals«. Das unumgängliche Hauptwerk.',
        back: 'Die detaillierte Entschlüsselung von Ware, Wert, Geld und der kapitalistischen Ausbeutung. Kein Text bringt die maschinelle Unterwerfung schonungsloser auf den Punkt.',
        content: "## Exakte Buchdaten\nTitel: Das Kapital. Kritik der politischen Ökonomie. Erster Band: Der Produktionsprozeß des Kapitals\nAutor: Karl Marx\nEdition: MEW Band 23 (Marx-Engels-Werke), Karl Dietz Verlag\nJahr: 1867\n\n---\n\n## Inhalt\nDas Hauptwerk der Einschätzung bürgerlicher Herrschaft. Marx analysiert hier nicht 'Gier' oder 'die Reichen', sondern er deckt die strukturelle Gesetzmäßigkeit auf, die alle Akteure im Markt zwingt, sich den Gesetzen von Wert und Verwertung zu beugen.\n\nBesonderes Augenmerk im 1. Band: Die Analyse beginnt bei der Ware und dem Doppelcharakter der in ihr steckenden Arbeit. Von dort aus wird das Geld entwickelt, dann die Verwandlung von Geld in Kapital und schließlich das Zentrum der Ausbeutung: Die Produktion des Mehrwerts (sowohl des absoluten durch Arbeitszeitverlängerung als auch des relativen durch Maschinerie).",
        size: 'wide',
        theme: 'dark'
      },
      {
        id: 'lesen2',
        tag: 'Klassenanalyse',
        number: 'Buch 02 / Die Ökonomie',
        title: 'Arbeit und Reichtum',
        front: 'Peter Decker, Konrad Hecker  - Exakter Titel: »Arbeit und Reichtum«. Eine systematische Erklärung der bürgerlichen Klassengesellschaft.',
        back: 'Die Beweisführung, warum Lohnarbeit kein Tausch auf Augenhöhe ist, sondern der systematische Ausschluss der Produzenten vom Reichtum.',
        content: "## Exakte Buchdaten\nTitel: Arbeit und Reichtum\nAutoren: Peter Decker, Konrad Hecker\nVerlag: Gegenstandpunkt Verlag, München\nJahr: 2014 (Überarbeitete Auflage)\n\n---\n\n## Inhalt\nKeine sozialwissenschaftliche Milieustudie, sondern die rücksichtslose theoretische Ableitung dessen, was Lohnarbeit ist. Der Text liefert den Beweis, dass der oft beklagte Widerspruch von Armut und Reichtum im Kapitalismus überhaupt kein 'Fehler' im System ist, sondern sein elementarer Zweck.\n\nWer Lohn arbeitet, macht sich selbst zum Mittel für fremden Reichtum. Das Buch seziert den Leistungsmythos, die Funktion von Arbeitslosigkeit als Hebel zur Lohnsenkung und die Rolle der Gewerkschaften, die im bürgerlichen Rahmen nur den 'Preis der Arbeit' aushandeln, ohne das Verhältnis selbst anzugreifen.",
        size: 'normal',
        theme: 'default'
      },
      {
        id: 'lesen3',
        tag: 'Staatstheorie',
        number: 'Buch 03 / Der Apparat',
        title: 'Der bürgerliche Staat',
        front: 'Karl Held, Audrey Hill - Exakter Titel: »Der bürgerliche Staat«. Die wohl wichtigste Ableitung der Notwendigkeit der Politik für das Kapital.',
        back: 'Der Staat ist keine neutrale Instanz, sondern der ideelle Gesamtkapitalist, der mit seinem Gewaltmonopol die Konkurrenz absichert.',
        content: "## Exakte Buchdaten\nTitel: Der bürgerliche Staat\nAutoren: Karl Held, Audrey Hill\nVerlag: Gegenstandpunkt Verlag (ehemals Resultate Verlag), München\nJahr: 1994\n\n---\n\n## Inhalt\nFür Leser in der Tradition der MG/Gegenstandpunkt das absolute Standardwerk zur Kritik der Politik. Der bürgerliche Staat wird hier nicht als Instrument einer elitären 'Kaste' oder als Verschwörung erklärt, sondern streng aus den Notwendigkeiten der Ökonomie abgeleitet.\n\nWeil Privateigentümer in der Konkurrenz rücksichtslos aufeinanderprallen, braucht es eine Gewalt, die über ihnen steht, sie zur Erhaltung ihrer eigenen Lebensgrundlage zwingt (z.B. Sozialstaat) und das rechtliche Format (Vertrag, Eigentum) absichert. Der Staat schützt die Bürger nicht vor dem Kapitalismus, er macht sie brauchbar für ihn. Demokratie wird als funktionell adäquate Form der Herrschaft dechiffriert.",
        size: 'tall',
        theme: 'accent'
      },
      {
        id: 'lesen4',
        tag: 'Weltmarkt & Krieg',
        number: 'Buch 04 / Imperialismus',
        title: 'Imperialismus 1',
        front: 'Gegenstandpunkt Redaktion - Exakter Titel: »Imperialismus 1: Zur politischen Ökonomie«.',
        back: 'Warum Nationalstaaten um den Reichtum der Welt konkurrieren und Kriege das unausweichliche Mittel ihrer Standortbehauptung sind.',
        content: "## Exakte Buchdaten\nTitel: Imperialismus 1: Zur politischen Ökonomie\nHerausgeber: Redaktion Gegenstandpunkt\nVerlag: Gegenstandpunkt Verlag, München\nJahr: 2000 (Basiswerk)\n\n---\n\n## Inhalt\nKrieg ist keine Anomalie oder das Resultat von \"bösen\" Politikern. Der Weltmarkt ist kein friedlicher Marktplatz, sondern die Arena, in der die Staaten den Reichtum ihrer jeweiligen nationalen Kapitale maximieren wollen.\n\nDieses Basiswerk bricht konsequent mit linken Illusionen von einer 'friedlichen internationalen Rechtsordnung'. Es zeigt, wie Außenhandel, Kreditwesen und militärische Drohung Hand in Hand gehen, um den 'Erfolg der Nation' auf Kosten anderer durchzusetzen. Die Analyse der Weltwährungsordnung und des Imperialismus der freien Zirkulation ist hier von zentraler Bedeutung.",
        size: 'wide',
        theme: 'dark'
      },
      {
        id: 'lesen5',
        tag: 'Ideologiekritik',
        number: 'Buch 05 / Das Subjekt',
        title: 'Die Psychologie d. b. Individuums',
        front: 'Karl Held - Exakter Titel: »Die Psychologie des bürgerlichen Individuums«.',
        back: 'Wie sich moderne Menschen geistig für die Konkurrenz zurichten und eine Moral ausbilden, die ihr Versagen ihnen selbst zuschreibt.',
        content: "## Exakte Buchdaten\nTitel: Die Psychologie des bürgerlichen Individuums\nAutor: Karl Held\nVerlag: Gegenstandpunkt Verlag, München\nJahr: 1991\n\n---\n\n## Inhalt\nWarum verteidigen Menschen ein System, das sie objektiv schädigt? Held zerlegt die gängigen linken Erklärungen (Verblendung, Manipulation durch Medien) und rückt stattdessen den freien Willen des Subjekts in den Fokus.\n\nDas bürgerliche Individuum übersetzt objektive Zwänge (Lohnarbeit, Konkurrenz) in sein individuelles Erfolgsprogramm. Es bildet ein Gewissen aus, rechnet sich Erfolge und Misserfolge als persönliches Verdienst zu und flüchtet, wenn es scheitert, in Ohnmacht, Moral oder Wahnsinn (von der Familie als 'sicherer Hafen' bis zum Nationalismus). Eines der faszinierendsten Bücher der theoretischen Tradition.",
        size: 'normal',
        theme: 'outlined'
      },
      {
        id: 'lesen6',
        tag: 'Programmatik',
        number: 'Buch 06 / Agitation',
        title: 'Manifest für seine Abschaffung',
        front: 'Redaktion Gegenstandpunkt - Exakter Titel: »Kapitalismus – Ein Manifest für seine Abschaffung«.',
        back: 'Der aktuellste Negativbeweis: Warum der Kapitalismus aus Prinzip unreformierbar ist und radikal beendet werden muss.',
        content: "## Exakte Buchdaten\nTitel: Kapitalismus – Ein Manifest für seine Abschaffung\nAutoren: Peter Decker, Konrad Hecker (Redaktion Gegenstandpunkt)\nVerlag: Gegenstandpunkt Verlag, München\nJahr: 2020\n\n---\n\n## Inhalt\nDer aktuellste Rundumschlag der Redaktion. Dieses Manifest ist kein utopischer Entwurf, wie der Kommunismus aussehen soll, sondern der geballte Negativbeweis: Warum der Kapitalismus aus Prinzip unreformierbar ist.\n\nWer einen komprimierten Einstieg in die argumentative Schärfe der Gegenstandpunkt-Theorie sucht, beginnt hier. Es behandelt alle Felder in Rekordzeit: Lohnarbeit, den Staat, den Segen der Demokratie, die Nation, den Krieg und schließlich die gnadenlose Kritik an zivilgesellschaftlichen linken Alternativen und Reformillusionen.",
        size: 'tall',
        theme: 'default'
      },
      {
        id: 'lesen7',
        tag: 'Vorträge (Audio)',
        number: 'Media 07 / YouTube',
        title: 'Marxismus Vorträge',
        front: 'YouTube-Kanal - Exakter Titel: »Marxismus Vorträge«. Das ultimative Archiv für Theorie und Kritik im Audioformat.',
        back: 'Hunderte Stunden Mitschnitte von Seminaren, Vorträgen und Diskussionsrunden aus der Tradition des Gegenstandpunkts.',
        content: "## Exakte Kanaldaten\nTitel:- Marxismus Vorträge\nYouTube\nLink: https://www.youtube.com/@marxismusvortraege\n\n---\n\n## Inhalt\nDa die Aneignung der Theorie durch reines Lesen extrem fordernd sein kann, ist dieser YouTube-Kanal für viele der eigentliche Schlüssel zum Verständnis. Der Kanal sammelt – inoffiziell, aber hochgradig systematisch – alte und neuere Audio-Mitschnitte von Vorträgen, Seminaren und Lesekreisen.\n\nHier hörst du Referenten (u.a. der Marxistischen Gruppe und des Gegenstandpunkts) dabei zu, wie sie die abstrakten Begriffe live am Rednerpult herleiten, Zwischenfragen aus dem Publikum beantworten und zivilgesellschaftliche Einwände in der Luft zerreißen. Besonders empfehlenswert sind die Einführungsveranstaltunge und Seminar-Reihen zum Kapital.",
        size: 'wide',
        theme: 'accent'
      }
    ]
  }
];
