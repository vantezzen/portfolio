import { LegalPage, legalMetadata } from "@/components/legal/legal-page";

export const metadata = legalMetadata("Datenschutzerklärung");

function Ext({ href, children }: { href: string; children?: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer nofollow">
      {children ?? href}
    </a>
  );
}

export default function PrivacyPage() {
  return (
    <LegalPage title="Datenschutzerklärung">
      <p>
        Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck
        der Verarbeitung von personenbezogenen Daten (nachfolgend kurz „Daten“)
        im Rahmen der Erbringung unserer Leistungen sowie innerhalb unseres
        Onlineangebotes und der mit ihm verbundenen Webseiten, Funktionen und
        Inhalte sowie externen Onlinepräsenzen, wie z.B. unser Social Media
        Profile auf (nachfolgend gemeinsam bezeichnet als „Onlineangebot“). Im
        Hinblick auf die verwendeten Begrifflichkeiten, wie z.B. „Verarbeitung“
        oder „Verantwortlicher“ verweisen wir auf die Definitionen im Art. 4 der
        Datenschutzgrundverordnung (DSGVO).
      </p>

      <h2>Verantwortlicher</h2>
      <address>
        Bennett Hollstein
        <br />
        Reinbeckstr. 4-8, Apartement 322
        <br />
        12459 Berlin
        <br />
        Deutschland
        <br />
        E-Mail Addresse:{" "}
        <a href="mailto:properly+datenschutz@pm.me">
          properly+datenschutz@pm.me
        </a>
      </address>

      <h2>Arten der verarbeiteten Daten</h2>
      <ul>
        <li>Bestandsdaten (z.B., Personen-Stammdaten, Namen oder Adressen).</li>
        <li>Kontaktdaten (z.B., E-Mail, Telefonnummern).</li>
        <li>Inhaltsdaten (z.B., Texteingaben, Fotografien, Videos).</li>
        <li>
          Nutzungsdaten (z.B., besuchte Webseiten, Interesse an Inhalten,
          Zugriffszeiten).
        </li>
        <li>
          Meta-/Kommunikationsdaten (z.B., Geräte-Informationen, IP-Adressen).
        </li>
      </ul>

      <h2>Kategorien betroffener Personen</h2>
      <p>
        Besucher und Nutzer des Onlineangebotes (Nachfolgend bezeichnen wir die
        betroffenen Personen zusammenfassend auch als „Nutzer“).
      </p>

      <h2>Zweck der Verarbeitung</h2>
      <ul>
        <li>
          Zurverfügungstellung des Onlineangebotes, seiner Funktionen und
          Inhalte.
        </li>
        <li>Beantwortung von Kontaktanfragen und Kommunikation mit Nutzern.</li>
        <li>Sicherheitsmaßnahmen.</li>
        <li>Reichweitenmessung/Marketing</li>
      </ul>

      <h2>Verwendete Begrifflichkeiten</h2>
      <p>
        „Personenbezogene Daten“ sind alle Informationen, die sich auf eine
        identifizierte oder identifizierbare natürliche Person (im Folgenden
        „betroffene Person“) beziehen; als identifizierbar wird eine natürliche
        Person angesehen, die direkt oder indirekt, insbesondere mittels
        Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu
        Standortdaten, zu einer Online-Kennung (z.B. Cookie) oder zu einem oder
        mehreren besonderen Merkmalen identifiziert werden kann, die Ausdruck
        der physischen, physiologischen, genetischen, psychischen,
        wirtschaftlichen, kulturellen oder sozialen Identität dieser natürlichen
        Person sind.
      </p>
      <p>
        „Verarbeitung“ ist jeder mit oder ohne Hilfe automatisierter Verfahren
        ausgeführte Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit
        personenbezogenen Daten. Der Begriff reicht weit und umfasst praktisch
        jeden Umgang mit Daten.
      </p>
      <p>
        „Pseudonymisierung“ die Verarbeitung personenbezogener Daten in einer
        Weise, dass die personenbezogenen Daten ohne Hinzuziehung zusätzlicher
        Informationen nicht mehr einer spezifischen betroffenen Person
        zugeordnet werden können, sofern diese zusätzlichen Informationen
        gesondert aufbewahrt werden und technischen und organisatorischen
        Maßnahmen unterliegen, die gewährleisten, dass die personenbezogenen
        Daten nicht einer identifizierten oder identifizierbaren natürlichen
        Person zugewiesen werden.
      </p>
      <p>
        „Profiling“ jede Art der automatisierten Verarbeitung personenbezogener
        Daten, die darin besteht, dass diese personenbezogenen Daten verwendet
        werden, um bestimmte persönliche Aspekte, die sich auf eine natürliche
        Person beziehen, zu bewerten, insbesondere um Aspekte bezüglich
        Arbeitsleistung, wirtschaftliche Lage, Gesundheit, persönliche
        Vorlieben, Interessen, Zuverlässigkeit, Verhalten, Aufenthaltsort oder
        Ortswechsel dieser natürlichen Person zu analysieren oder vorherzusagen.
      </p>
      <p>
        Als „Verantwortlicher“ wird die natürliche oder juristische Person,
        Behörde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit
        anderen über die Zwecke und Mittel der Verarbeitung von
        personenbezogenen Daten entscheidet, bezeichnet.
      </p>
      <p>
        „Auftragsverarbeiter“ eine natürliche oder juristische Person, Behörde,
        Einrichtung oder andere Stelle, die personenbezogene Daten im Auftrag
        des Verantwortlichen verarbeitet.
      </p>

      <h2>Maßgebliche Rechtsgrundlagen</h2>
      <p>
        Nach Maßgabe des Art. 13 DSGVO teilen wir Ihnen die Rechtsgrundlagen
        unserer Datenverarbeitungen mit. Für Nutzer aus dem Geltungsbereich der
        Datenschutzgrundverordnung (DSGVO), d.h. der EU und des EWG gilt, sofern
        die Rechtsgrundlage in der Datenschutzerklärung nicht genannt wird,
        Folgendes:
      </p>
      <ul>
        <li>
          Die Rechtsgrundlage für die Einholung von Einwilligungen ist Art. 6
          Abs. 1 lit. a und Art. 7 DSGVO;
        </li>
        <li>
          Die Rechtsgrundlage für die Verarbeitung zur Erfüllung unserer
          Leistungen und Durchführung vertraglicher Maßnahmen sowie Beantwortung
          von Anfragen ist Art. 6 Abs. 1 lit. b DSGVO;
        </li>
        <li>
          Die Rechtsgrundlage für die Verarbeitung zur Erfüllung unserer
          rechtlichen Verpflichtungen ist Art. 6 Abs. 1 lit. c DSGVO;
        </li>
        <li>
          Für den Fall, dass lebenswichtige Interessen der betroffenen Person
          oder einer anderen natürlichen Person eine Verarbeitung
          personenbezogener Daten erforderlich machen, dient Art. 6 Abs. 1 lit.
          d DSGVO als Rechtsgrundlage.
        </li>
        <li>
          Die Rechtsgrundlage für die erforderliche Verarbeitung zur Wahrnehmung
          einer Aufgabe, die im öffentlichen Interesse liegt oder in Ausübung
          öffentlicher Gewalt erfolgt, die dem Verantwortlichen übertragen wurde
          ist Art. 6 Abs. 1 lit. e DSGVO.
        </li>
        <li>
          Die Rechtsgrundlage für die Verarbeitung zur Wahrung unserer
          berechtigten Interessen ist Art. 6 Abs. 1 lit. f DSGVO.
        </li>
        <li>
          Die Verarbeitung von Daten zu anderen Zwecken als denen, zu denen sie
          erhoben wurden, bestimmt sich nach den Vorgaben des Art 6 Abs. 4
          DSGVO.
        </li>
        <li>
          Die Verarbeitung von besonderen Kategorien von Daten (entsprechend
          Art. 9 Abs. 1 DSGVO) bestimmt sich nach den Vorgaben des Art. 9 Abs. 2
          DSGVO.
        </li>
      </ul>

      <h2>Sicherheitsmaßnahmen</h2>
      <p>
        Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter
        Berücksichtigung des Stands der Technik, der Implementierungskosten und
        der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie
        der unterschiedlichen Eintrittswahrscheinlichkeit und Schwere des
        Risikos für die Rechte und Freiheiten natürlicher Personen, geeignete
        technische und organisatorische Maßnahmen, um ein dem Risiko
        angemessenes Schutzniveau zu gewährleisten.
      </p>
      <p>
        Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit,
        Integrität und Verfügbarkeit von Daten durch Kontrolle des physischen
        Zugangs zu den Daten, als auch des sie betreffenden Zugriffs, der
        Eingabe, Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung.
        Des Weiteren haben wir Verfahren eingerichtet, die eine Wahrnehmung von
        Betroffenenrechten, Löschung von Daten und Reaktion auf Gefährdung der
        Daten gewährleisten. Ferner berücksichtigen wir den Schutz
        personenbezogener Daten bereits bei der Entwicklung, bzw. Auswahl von
        Hardware, Software sowie Verfahren, entsprechend dem Prinzip des
        Datenschutzes durch Technikgestaltung und durch datenschutzfreundliche
        Voreinstellungen.
      </p>

      <h2>
        Zusammenarbeit mit Auftragsverarbeitern, gemeinsam Verantwortlichen und
        Dritten
      </h2>
      <p>
        Sofern wir im Rahmen unserer Verarbeitung Daten gegenüber anderen
        Personen und Unternehmen (Auftragsverarbeitern, gemeinsam
        Verantwortlichen oder Dritten) offenbaren, sie an diese übermitteln oder
        ihnen sonst Zugriff auf die Daten gewähren, erfolgt dies nur auf
        Grundlage einer gesetzlichen Erlaubnis (z.B. wenn eine Übermittlung der
        Daten an Dritte, wie an Zahlungsdienstleister, zur Vertragserfüllung
        erforderlich ist), Nutzer eingewilligt haben, eine rechtliche
        Verpflichtung dies vorsieht oder auf Grundlage unserer berechtigten
        Interessen (z.B. beim Einsatz von Beauftragten, Webhostern, etc.).
      </p>
      <p>
        Sofern wir Daten anderen Unternehmen unserer Unternehmensgruppe
        offenbaren, übermitteln oder ihnen sonst den Zugriff gewähren, erfolgt
        dies insbesondere zu administrativen Zwecken als berechtigtes Interesse
        und darüberhinausgehend auf einer den gesetzlichen Vorgaben
        entsprechenden Grundlage.
      </p>

      <h2>Übermittlungen in Drittländer</h2>
      <p>
        Sofern wir Daten in einem Drittland (d.h. außerhalb der Europäischen
        Union (EU), des Europäischen Wirtschaftsraums (EWR) oder der Schweizer
        Eidgenossenschaft) verarbeiten oder dies im Rahmen der Inanspruchnahme
        von Diensten Dritter oder Offenlegung, bzw. Übermittlung von Daten an
        andere Personen oder Unternehmen geschieht, erfolgt dies nur, wenn es
        zur Erfüllung unserer (vor)vertraglichen Pflichten, auf Grundlage Ihrer
        Einwilligung, aufgrund einer rechtlichen Verpflichtung oder auf
        Grundlage unserer berechtigten Interessen geschieht. Vorbehaltlich
        gesetzlicher oder vertraglicher Erlaubnisse, verarbeiten oder lassen wir
        die Daten in einem Drittland nur beim Vorliegen der gesetzlichen
        Voraussetzungen. D.h. die Verarbeitung erfolgt z.B. auf Grundlage
        besonderer Garantien, wie der offiziell anerkannten Feststellung eines
        der EU entsprechenden Datenschutzniveaus (z.B. für die USA durch das
        „Privacy Shield“) oder Beachtung offiziell anerkannter spezieller
        vertraglicher Verpflichtungen.
      </p>

      <h2>Rechte der betroffenen Personen</h2>
      <p>
        Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob
        betreffende Daten verarbeitet werden und auf Auskunft über diese Daten
        sowie auf weitere Informationen und Kopie der Daten entsprechend den
        gesetzlichen Vorgaben.
      </p>
      <p>
        Sie haben entsprechend den gesetzlichen Vorgaben das Recht, die
        Vervollständigung der Sie betreffenden Daten oder die Berichtigung der
        Sie betreffenden unrichtigen Daten zu verlangen.
      </p>
      <p>
        Sie haben nach Maßgabe der gesetzlichen Vorgaben das Recht zu verlangen,
        dass betreffende Daten unverzüglich gelöscht werden, bzw. alternativ
        nach Maßgabe der gesetzlichen Vorgaben eine Einschränkung der
        Verarbeitung der Daten zu verlangen.
      </p>
      <p>
        Sie haben das Recht zu verlangen, dass die Sie betreffenden Daten, die
        Sie uns bereitgestellt haben nach Maßgabe der gesetzlichen Vorgaben zu
        erhalten und deren Übermittlung an andere Verantwortliche zu fordern.
      </p>
      <p>
        Sie haben ferner nach Maßgabe der gesetzlichen Vorgaben das Recht, eine
        Beschwerde bei der zuständigen Aufsichtsbehörde einzureichen.
      </p>

      <h2>Google reCaptcha</h2>
      <p>
        Wir verwenden Google reCAPTCHA der Firma Google Inc. (1600 Amphitheatre
        Parkway Mountain View, CA 94043, USA) um Spam zu verhindern.
      </p>
      <p>
        Rechtsgrundlage für die Verwendung ist Artikel 6 (1) f (Rechtmäßigkeit
        der Verarbeitung), denn es besteht ein berechtigtes Interesse diese
        Webseite vor Bots und Spam zu schützen.
      </p>
      <p>
        reCAPTCHA ist ein kostenloser Dienst, der Webseiten vor Spam und
        Missbrauch schützt. Es nutzt fortschrittliche Risikoanalysetechniken, um
        Menschen und Bots auseinander zu halten. Mit der neuen API wird eine
        signifikante Anzahl Ihrer gültigen menschlichen Benutzer die
        reCAPTCHA-Herausforderung bestehen, ohne ein CAPTCHA lösen zu müssen.
        Wir nutzen reCAPTCHA für die Absicherung von Formularen.
      </p>
      <p>
        Durch die Nutzung von reCAPTCHA werden Daten an Google übertragen die
        Google nutzt um festzustellen ob der Besucher ein Mensch oder ein
        (Spam)bot ist. Welche Daten von Google erfasst werden und wofür diese
        Daten verwendet werden, können Sie auf{" "}
        <Ext href="https://policies.google.com/privacy?hl=de-AT" /> nachlesen.
        Die Nutzungsbedingungen für Dienste und Produkte von Google können Sie
        unter <Ext href="https://policies.google.com/terms?hl=de-AT" />{" "}
        nachlesen.
      </p>

      <h2>Widerrufsrecht</h2>
      <p>
        Sie haben das Recht, erteilte Einwilligungen mit Wirkung für die Zukunft
        zu widerrufen.
      </p>

      <h2>Widerspruchsrecht</h2>
      <p>
        <strong>
          Sie können der künftigen Verarbeitung der Sie betreffenden Daten nach
          Maßgabe der gesetzlichen Vorgaben jederzeit widersprechen. Der
          Widerspruch kann insbesondere gegen die Verarbeitung für Zwecke der
          Direktwerbung erfolgen.
        </strong>
      </p>

      <h2>Cookies und Widerspruchsrecht bei Direktwerbung</h2>
      <p>
        Als „Cookies“ werden kleine Dateien bezeichnet, die auf Rechnern der
        Nutzer gespeichert werden. Innerhalb der Cookies können unterschiedliche
        Angaben gespeichert werden. Ein Cookie dient primär dazu, die Angaben zu
        einem Nutzer (bzw. dem Gerät auf dem das Cookie gespeichert ist) während
        oder auch nach seinem Besuch innerhalb eines Onlineangebotes zu
        speichern. Als temporäre Cookies, bzw. „Session-Cookies“ oder
        „transiente Cookies“, werden Cookies bezeichnet, die gelöscht werden,
        nachdem ein Nutzer ein Onlineangebot verlässt und seinen Browser
        schließt. In einem solchen Cookie kann z.B. der Inhalt eines Warenkorbs
        in einem Onlineshop oder ein Login-Status gespeichert werden. Als
        „permanent“ oder „persistent“ werden Cookies bezeichnet, die auch nach
        dem Schließen des Browsers gespeichert bleiben. So kann z.B. der
        Login-Status gespeichert werden, wenn die Nutzer diese nach mehreren
        Tagen aufsuchen. Ebenso können in einem solchen Cookie die Interessen
        der Nutzer gespeichert werden, die für Reichweitenmessung oder
        Marketingzwecke verwendet werden. Als „Third-Party-Cookie“ werden
        Cookies bezeichnet, die von anderen Anbietern als dem Verantwortlichen,
        der das Onlineangebot betreibt, angeboten werden (andernfalls, wenn es
        nur dessen Cookies sind spricht man von „First-Party Cookies“).
      </p>
      <p>
        Wir können temporäre und permanente Cookies einsetzen und klären
        hierüber im Rahmen unserer Datenschutzerklärung auf.
      </p>
      <p>
        Falls die Nutzer nicht möchten, dass Cookies auf ihrem Rechner
        gespeichert werden, werden sie gebeten die entsprechende Option in den
        Systemeinstellungen ihres Browsers zu deaktivieren. Gespeicherte Cookies
        können in den Systemeinstellungen des Browsers gelöscht werden. Der
        Ausschluss von Cookies kann zu Funktionseinschränkungen dieses
        Onlineangebotes führen.
      </p>
      <p>
        Ein genereller Widerspruch gegen den Einsatz der zu Zwecken des
        Onlinemarketing eingesetzten Cookies kann bei einer Vielzahl der
        Dienste, vor allem im Fall des Trackings, über die US-amerikanische
        Seite <Ext href="http://www.aboutads.info/choices/" /> oder die EU-Seite{" "}
        <Ext href="http://www.youronlinechoices.com/" /> erklärt werden. Des
        Weiteren kann die Speicherung von Cookies mittels deren Abschaltung in
        den Einstellungen des Browsers erreicht werden. Bitte beachten Sie, dass
        dann gegebenenfalls nicht alle Funktionen dieses Onlineangebotes genutzt
        werden können.
      </p>

      <h2>Löschung von Daten</h2>
      <p>
        Die von uns verarbeiteten Daten werden nach Maßgabe der gesetzlichen
        Vorgaben gelöscht oder in ihrer Verarbeitung eingeschränkt. Sofern nicht
        im Rahmen dieser Datenschutzerklärung ausdrücklich angegeben, werden die
        bei uns gespeicherten Daten gelöscht, sobald sie für ihre
        Zweckbestimmung nicht mehr erforderlich sind und der Löschung keine
        gesetzlichen Aufbewahrungspflichten entgegenstehen.
      </p>
      <p>
        Sofern die Daten nicht gelöscht werden, weil sie für andere und
        gesetzlich zulässige Zwecke erforderlich sind, wird deren Verarbeitung
        eingeschränkt. D.h. die Daten werden gesperrt und nicht für andere
        Zwecke verarbeitet. Das gilt z.B. für Daten, die aus handels- oder
        steuerrechtlichen Gründen aufbewahrt werden müssen.
      </p>

      <h2>Änderungen und Aktualisierungen der Datenschutzerklärung</h2>
      <p>
        Wir bitten Sie sich regelmäßig über den Inhalt unserer
        Datenschutzerklärung zu informieren. Wir passen die Datenschutzerklärung
        an, sobald die Änderungen der von uns durchgeführten Datenverarbeitungen
        dies erforderlich machen. Wir informieren Sie, sobald durch die
        Änderungen eine Mitwirkungshandlung Ihrerseits (z.B. Einwilligung) oder
        eine sonstige individuelle Benachrichtigung erforderlich wird.
      </p>

      <h2>Geschäftsbezogene Verarbeitung</h2>
      <p>Zusätzlich verarbeiten wir</p>
      <ul>
        <li>
          Vertragsdaten (z.B., Vertragsgegenstand, Laufzeit, Kundenkategorie).
        </li>
        <li>Zahlungsdaten (z.B., Bankverbindung, Zahlungshistorie)</li>
      </ul>
      <p>
        von unseren Kunden, Interessenten und Geschäftspartner zwecks Erbringung
        vertraglicher Leistungen, Service und Kundenpflege, Marketing, Werbung
        und Marktforschung.
      </p>

      <h2>Kontaktaufnahme</h2>
      <p>
        Bei der Kontaktaufnahme mit uns (z.B. per Kontaktformular, E-Mail,
        Telefon oder via sozialer Medien) werden die Angaben des Nutzers zur
        Bearbeitung der Kontaktanfrage und deren Abwicklung gem. Art. 6 Abs. 1
        lit. b. (im Rahmen vertraglicher-/vorvertraglicher Beziehungen), Art. 6
        Abs. 1 lit. f. (andere Anfragen) DSGVO verarbeitet. Die Angaben der
        Nutzer können in einem Customer-Relationship-Management System („CRM
        System“) oder vergleichbarer Anfragenorganisation gespeichert werden.
      </p>
      <p>
        Wir löschen die Anfragen, sofern diese nicht mehr erforderlich sind. Wir
        überprüfen die Erforderlichkeit alle zwei Jahre; Ferner gelten die
        gesetzlichen Archivierungspflichten.
      </p>

      <h2>Hosting und E-Mail-Versand</h2>
      <p>
        Die von uns in Anspruch genommenen Hosting-Leistungen dienen der
        Zurverfügungstellung der folgenden Leistungen: Infrastruktur- und
        Plattformdienstleistungen, Rechenkapazität, Speicherplatz und
        Datenbankdienste, E-Mail-Versand, Sicherheitsleistungen sowie technische
        Wartungsleistungen, die wir zum Zwecke des Betriebs dieses
        Onlineangebotes einsetzen.
      </p>
      <p>
        Hierbei verarbeiten wir, bzw. unser Hostinganbieter Bestandsdaten,
        Kontaktdaten, Inhaltsdaten, Vertragsdaten, Nutzungsdaten, Meta- und
        Kommunikationsdaten von Kunden, Interessenten und Besuchern dieses
        Onlineangebotes auf Grundlage unserer berechtigten Interessen an einer
        effizienten und sicheren Zurverfügungstellung dieses Onlineangebotes
        gem. Art. 6 Abs. 1 lit. f DSGVO i.V.m. Art. 28 DSGVO (Abschluss
        Auftragsverarbeitungsvertrag).
      </p>

      <h2>Datenerhebung durch Dritte</h2>
      <h3>Erhebung von Zugriffsdaten und Logfiles</h3>
      <p>
        Wir, bzw. unser Hostinganbieter, erhebt auf Grundlage unserer
        berechtigten Interessen im Sinne des Art. 6 Abs. 1 lit. f. DSGVO Daten
        über jeden Zugriff auf den Server, auf dem sich dieser Dienst befindet
        (sogenannte Serverlogfiles). Zu den Zugriffsdaten gehören Name der
        abgerufenen Webseite, Datei, Datum und Uhrzeit des Abrufs, übertragene
        Datenmenge, Meldung über erfolgreichen Abruf, Browsertyp nebst Version,
        das Betriebssystem des Nutzers, Referrer URL (die zuvor besuchte Seite),
        IP-Adresse und der anfragende Provider.
      </p>
      <p>
        Logfile-Informationen werden aus Sicherheitsgründen (z.B. zur Aufklärung
        von Missbrauchs- oder Betrugshandlungen) für die Dauer von maximal 7
        Tagen gespeichert und danach gelöscht. Daten, deren weitere Aufbewahrung
        zu Beweiszwecken erforderlich ist, sind bis zur endgültigen Klärung des
        jeweiligen Vorfalls von der Löschung ausgenommen.
      </p>
      <p>
        Für die Bereitstellung unserer Webseite nutzen wir die Dienste von{" "}
        <Ext href="https://www.netlify.com">Netlify</Ext>. Bitte beachten Sie
        hierfür die{" "}
        <Ext href="https://www.netlify.com/privacy/">Datenschutzerklärung</Ext>{" "}
        und{" "}
        <Ext href="https://www.netlify.com/gdpr/">GDPR/DSGVO Informationen</Ext>{" "}
        von Netlify.
      </p>

      <h3>SimpleAnalytics</h3>
      <p>
        To get critical information about the behavior of our visitors, we use{" "}
        <Ext href="https://simpleanalytics.com">Simple Analytics</Ext>. This
        analytics software gives us insight about our visitors only in general,
        but not about individuals per se, as it does not track visitors and does
        not store any personal identifiable information.{" "}
        <Ext href="https://docs.simpleanalytics.com/what-we-collect">
          Go to their documentation
        </Ext>{" "}
        to find out what Simple Analytics collects (and most importantly what
        they don’t).
      </p>

      <h3>KI-Chat „BenNet“</h3>
      <p>
        Auf dieser Website steht ein KI-Chatbot („BenNet“) zur Verfügung, der
        Fragen zu meiner Person, meiner Arbeit und meinen Projekten
        beantwortet. Die Nutzung ist freiwillig. Wenn Sie den Chat verwenden,
        werden Ihre eingegebenen Nachrichten und der bisherige
        Gesprächsverlauf an unseren Server übermittelt und von dort über das
        AI Gateway von{" "}
        <Ext href="https://vercel.com/legal/privacy-policy">
          Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA
        </Ext>{" "}
        an ein Sprachmodell (derzeit DeepSeek V4.1 Flash) weitergeleitet, um
        eine Antwort zu erzeugen. Bitte geben Sie im Chat keine
        personenbezogenen Daten ein.
      </p>
      <p>
        Der Gesprächsverlauf wird nur in Ihrem Browser gehalten und von uns
        nicht dauerhaft gespeichert. Zum Schutz vor Missbrauch wird Ihre
        IP-Adresse kurzzeitig im Arbeitsspeicher des Servers verarbeitet, um
        die Anzahl der Anfragen zu begrenzen. Rechtsgrundlage ist Art. 6 Abs.
        1 lit. f DSGVO (berechtigtes Interesse an der Bereitstellung der
        Funktion und der Missbrauchsabwehr). Es gelten ergänzend die{" "}
        <Ext href="https://vercel.com/legal/privacy-policy">
          Datenschutzhinweise von Vercel
        </Ext>
        .
      </p>

      <h3>Zusatz für „minimalpedia“</h3>
      <p>
        „minimalpedia“ ist eines meiner Projekte, welches unter{" "}
        <Ext href="https://minimalpedia.vantezzen.io/" /> bereitgestellt wird.
      </p>
      <p>
        Mit der Nutzung der Seite wird der hier verfügbaren
        Datenschutzerklärung, inklusive diesem Zusatz, zugestimmt.
      </p>
      <p>
        „minimalpedia“ sendet und empfängt während der Nutzung Daten von der{" "}
        <Ext href="https://en.wikipedia.org/w/api.php">
          Wikipedia API Datenschnittstelle
        </Ext>
        . Hierfür gilt zusätzlich die{" "}
        <Ext href="https://foundation.wikimedia.org/wiki/Privacy_policy">
          Datenschutzerklärung von Wikipedia
        </Ext>
        .
      </p>
      <p>
        Das Projekt wird auf Servern von{" "}
        <Ext href="https://www.github.com">
          Github Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA
        </Ext>{" "}
        gehostet. Beachten Sie daher auch die{" "}
        <Ext href="https://help.github.com/articles/github-privacy-policy/">
          GitHub Privacy Policy
        </Ext>{" "}
        und{" "}
        <Ext href="https://help.github.com/articles/global-privacy-practices/">
          GitHub Global Privacy Practices
        </Ext>
        .
      </p>

      <h2>Onlinepräsenzen in sozialen Medien</h2>
      <p>
        Wir unterhalten Onlinepräsenzen innerhalb sozialer Netzwerke und
        Plattformen, um mit den dort aktiven Kunden, Interessenten und Nutzern
        kommunizieren und sie dort über unsere Leistungen informieren zu können.
      </p>
      <p>
        Wir weisen darauf hin, dass dabei Daten der Nutzer außerhalb des Raumes
        der Europäischen Union verarbeitet werden können. Hierdurch können sich
        für die Nutzer Risiken ergeben, weil so z.B. die Durchsetzung der Rechte
        der Nutzer erschwert werden könnte. Im Hinblick auf US-Anbieter die
        unter dem Privacy-Shield zertifiziert sind, weisen wir darauf hin, dass
        sie sich damit verpflichten, die Datenschutzstandards der EU
        einzuhalten.
      </p>
      <p>
        Ferner werden die Daten der Nutzer im Regelfall für Marktforschungs- und
        Werbezwecke verarbeitet. So können z.B. aus dem Nutzungsverhalten und
        sich daraus ergebenden Interessen der Nutzer Nutzungsprofile erstellt
        werden. Die Nutzungsprofile können wiederum verwendet werden, um z.B.
        Werbeanzeigen innerhalb und außerhalb der Plattformen zu schalten, die
        mutmaßlich den Interessen der Nutzer entsprechen. Zu diesen Zwecken
        werden im Regelfall Cookies auf den Rechnern der Nutzer gespeichert, in
        denen das Nutzungsverhalten und die Interessen der Nutzer gespeichert
        werden. Ferner können in den Nutzungsprofilen auch Daten unabhängig der
        von den Nutzern verwendeten Geräte gespeichert werden (insbesondere wenn
        die Nutzer Mitglieder der jeweiligen Plattformen sind und bei diesen
        eingeloggt sind).
      </p>
      <p>
        Die Verarbeitung der personenbezogenen Daten der Nutzer erfolgt auf
        Grundlage unserer berechtigten Interessen an einer effektiven
        Information der Nutzer und Kommunikation mit den Nutzern gem. Art. 6
        Abs. 1 lit. f. DSGVO. Falls die Nutzer von den jeweiligen Anbietern der
        Plattformen um eine Einwilligung in die vorbeschriebene
        Datenverarbeitung gebeten werden, ist die Rechtsgrundlage der
        Verarbeitung Art. 6 Abs. 1 lit. a., Art. 7 DSGVO.
      </p>
      <p>
        Für eine detaillierte Darstellung der jeweiligen Verarbeitungen und der
        Widerspruchsmöglichkeiten (Opt-Out), verweisen wir auf die nachfolgend
        verlinkten Angaben der Anbieter.
      </p>
      <p>
        Auch im Fall von Auskunftsanfragen und der Geltendmachung von
        Nutzerrechten, weisen wir darauf hin, dass diese am effektivsten bei den
        Anbietern geltend gemacht werden können. Nur die Anbieter haben jeweils
        Zugriff auf die Daten der Nutzer und können direkt entsprechende
        Maßnahmen ergreifen und Auskünfte geben. Sollten Sie dennoch Hilfe
        benötigen, dann können Sie sich an uns wenden.
      </p>
      <ul>
        <li>
          Facebook, -Seiten, -Gruppen, (Facebook Ireland Ltd., 4 Grand Canal
          Square, Grand Canal Harbour, Dublin 2, Irland) auf Grundlage einer{" "}
          <Ext href="https://www.facebook.com/legal/terms/page_controller_addendum">
            Vereinbarung über gemeinsame Verarbeitung personenbezogener Daten
          </Ext>{" "}
          – Datenschutzerklärung:{" "}
          <Ext href="https://www.facebook.com/about/privacy/" />, speziell für
          Seiten:{" "}
          <Ext href="https://www.facebook.com/legal/terms/information_about_page_insights_data" />
          , Opt-Out: <Ext href="https://www.facebook.com/settings?tab=ads" />{" "}
          und <Ext href="http://www.youronlinechoices.com" />, Privacy Shield:{" "}
          <Ext href="https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&status=Active" />
          .
        </li>
        <li>
          Google/ YouTube (Google LLC, 1600 Amphitheatre Parkway, Mountain View,
          CA 94043, USA) – Datenschutzerklärung:{" "}
          <Ext href="https://policies.google.com/privacy" />, Opt-Out:{" "}
          <Ext href="https://adssettings.google.com/authenticated" />, Privacy
          Shield:{" "}
          <Ext href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active" />
          .
        </li>
        <li>
          Instagram (Instagram Inc., 1601 Willow Road, Menlo Park, CA, 94025,
          USA) – Datenschutzerklärung/ Opt-Out:{" "}
          <Ext href="http://instagram.com/about/legal/privacy/" />.
        </li>
        <li>
          Twitter (Twitter Inc., 1355 Market Street, Suite 900, San Francisco,
          CA 94103, USA) – Datenschutzerklärung:{" "}
          <Ext href="https://twitter.com/de/privacy" />, Opt-Out:{" "}
          <Ext href="https://twitter.com/personalization" />, Privacy Shield:{" "}
          <Ext href="https://www.privacyshield.gov/participant?id=a2zt0000000TORzAAO&status=Active" />
          .
        </li>
        <li>
          Pinterest (Pinterest Inc., 635 High Street, Palo Alto, CA, 94301, USA)
          – Datenschutzerklärung/ Opt-Out:{" "}
          <Ext href="https://about.pinterest.com/de/privacy-policy" />.
        </li>
        <li>
          LinkedIn (LinkedIn Ireland Unlimited Company Wilton Place, Dublin 2,
          Irland) – Datenschutzerklärung{" "}
          <Ext href="https://www.linkedin.com/legal/privacy-policy" />, Opt-Out:{" "}
          <Ext href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out" />
          , Privacy Shield:{" "}
          <Ext href="https://www.privacyshield.gov/participant?id=a2zt0000000L0UZAA0&status=Active" />
          .
        </li>
        <li>
          Xing (XING AG, Dammtorstraße 29-32, 20354 Hamburg, Deutschland) –
          Datenschutzerklärung/ Opt-Out:{" "}
          <Ext href="https://privacy.xing.com/de/datenschutzerklaerung" />.
        </li>
        <li>
          Wakelet (Wakelet Limited, 76 Quay Street, Manchester, M3 4PR, United
          Kingdom) – Datenschutzerklärung/ Opt-Out:{" "}
          <Ext href="https://wakelet.com/privacy.html" />.
        </li>
        <li>
          Soundcloud (SoundCloud Limited, Rheinsberger Str. 76/77, 10115 Berlin,
          Deutschland) – Datenschutzerklärung/ Opt-Out:{" "}
          <Ext href="https://soundcloud.com/pages/privacy" />.
        </li>
      </ul>

      <p className="text-sm text-neutral-400">
        <Ext href="https://datenschutz-generator.de">
          Erstellt mit Datenschutz-Generator.de von RA Dr. Thomas Schwenke
        </Ext>{" "}
        und dem{" "}
        <Ext href="https://www.firmenwebseiten.at/datenschutz-generator/">
          Datenschutz Generator von firmenwebseiten.at
        </Ext>{" "}
        in Kooperation mit{" "}
        <Ext href="https://www.geschenkekaufen.at">geschenkekaufen.at</Ext>.
      </p>
    </LegalPage>
  );
}
