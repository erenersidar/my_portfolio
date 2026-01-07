import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AGB | Sidar Erener",
  description:
    "Allgemeine Geschäftsbedingungen (Terms and Conditions) for the website of Sidar Erener.",
};

export default function AGBPage() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <div className="text-center">
        <h1 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Allgemeine Geschäftsbedingungen (AGB)
        </h1>
      </div>

      <div className="prose prose-invert prose-headings:text-primary prose-a:text-primary mx-auto">
        <h2 className="font-semibold text-xl">§ 1 Geltungsbereich</h2>
        <p>
          (1) Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle
          Verträge zwischen Sidar Erener, Filchnerstr. 78, 45472 Mülheim an der
          Ruhr (nachfolgend „Anbieter") und dem Kunden (nachfolgend „Kunde") über
          Dienstleistungen im Bereich Softwareentwicklung, Webentwicklung,
          App-Entwicklung und IT-Beratung.
        </p>
        <p>
          (2) Abweichende Bedingungen des Kunden werden nicht anerkannt, es sei
          denn, der Anbieter stimmt ihrer Geltung ausdrücklich schriftlich zu.
        </p>

        <h2 className="font-semibold text-xl">§ 2 Vertragsgegenstand</h2>
        <p>
          (1) Gegenstand des Vertrages ist die Erbringung von
          Softwareentwicklungsleistungen, einschließlich, aber nicht beschränkt
          auf:
        </p>
        <ul>
          <li>Entwicklung von Webanwendungen</li>
          <li>Entwicklung von mobilen Anwendungen (iOS, Android, Cross-Platform)</li>
          <li>Backend-Entwicklung und API-Design</li>
          <li>UI/UX-Design und Prototyping</li>
          <li>IT-Beratung und technische Konzeption</li>
          <li>Wartung und Support bestehender Systeme</li>
        </ul>
        <p>
          (2) Der genaue Leistungsumfang ergibt sich aus dem jeweiligen
          individuellen Angebot oder der Projektvereinbarung.
        </p>

        <h2 className="font-semibold text-xl">§ 3 Vertragsschluss</h2>
        <p>
          (1) Angebote des Anbieters sind freibleibend und unverbindlich, sofern
          sie nicht ausdrücklich als verbindlich gekennzeichnet sind.
        </p>
        <p>
          (2) Der Vertrag kommt durch schriftliche Auftragsbestätigung des
          Anbieters oder durch Beginn der Leistungserbringung zustande.
        </p>
        <p>
          (3) Mündliche Nebenabreden bedürfen zu ihrer Wirksamkeit der
          Schriftform.
        </p>

        <h2 className="font-semibold text-xl">§ 4 Leistungserbringung</h2>
        <p>
          (1) Der Anbieter erbringt seine Leistungen nach den anerkannten Regeln
          der Technik und mit der gebotenen Sorgfalt.
        </p>
        <p>
          (2) Termine und Fristen sind nur verbindlich, wenn sie ausdrücklich als
          verbindlich vereinbart wurden. Bei Verzögerungen durch den Kunden
          (z.B. verspätete Zulieferung von Materialien oder Informationen)
          verlängern sich die Fristen entsprechend.
        </p>
        <p>
          (3) Der Anbieter ist berechtigt, Dritte zur Erfüllung seiner
          vertraglichen Pflichten einzusetzen.
        </p>

        <h2 className="font-semibold text-xl">§ 5 Mitwirkungspflichten des Kunden</h2>
        <p>
          (1) Der Kunde stellt dem Anbieter alle für die Durchführung des
          Projekts erforderlichen Informationen, Unterlagen und Zugänge
          rechtzeitig und unentgeltlich zur Verfügung.
        </p>
        <p>
          (2) Der Kunde benennt einen Ansprechpartner, der zur Abgabe und
          Entgegennahme aller für die Vertragsdurchführung erforderlichen
          Erklärungen berechtigt ist.
        </p>
        <p>
          (3) Der Kunde prüft die vom Anbieter erstellten Arbeitsergebnisse
          unverzüglich und teilt etwaige Mängel oder Änderungswünsche innerhalb
          einer angemessenen Frist mit.
        </p>

        <h2 className="font-semibold text-xl">§ 6 Vergütung und Zahlung</h2>
        <p>
          (1) Die Vergütung richtet sich nach dem individuellen Angebot. Sofern
          nichts anderes vereinbart ist, erfolgt die Abrechnung nach Aufwand zu
          den im Angebot genannten Stundensätzen.
        </p>
        <p>
          (2) Alle Preise verstehen sich als Nettopreise zuzüglich der
          gesetzlichen Umsatzsteuer.
        </p>
        <p>
          (3) Rechnungen sind innerhalb von 14 Tagen nach Rechnungsdatum ohne
          Abzug zur Zahlung fällig, sofern nichts anderes vereinbart wurde.
        </p>
        <p>
          (4) Bei größeren Projekten ist der Anbieter berechtigt,
          Abschlagszahlungen entsprechend dem Projektfortschritt zu verlangen.
        </p>

        <h2 className="font-semibold text-xl">§ 7 Nutzungsrechte</h2>
        <p>
          (1) Mit vollständiger Bezahlung der vereinbarten Vergütung räumt der
          Anbieter dem Kunden die für den vereinbarten Zweck erforderlichen
          Nutzungsrechte an den erstellten Arbeitsergebnissen ein.
        </p>
        <p>
          (2) Sofern nicht ausdrücklich anders vereinbart, verbleiben die
          Urheberrechte beim Anbieter. Der Anbieter ist berechtigt, die
          erstellten Arbeiten in seinem Portfolio zu zeigen und als Referenz zu
          nutzen.
        </p>
        <p>
          (3) Open-Source-Komponenten unterliegen ihren jeweiligen Lizenzen.
        </p>

        <h2 className="font-semibold text-xl">§ 8 Gewährleistung</h2>
        <p>
          (1) Der Anbieter gewährleistet, dass die erbrachten Leistungen den
          vereinbarten Anforderungen entsprechen.
        </p>
        <p>
          (2) Mängel sind unverzüglich nach Entdeckung schriftlich anzuzeigen.
          Der Anbieter wird berechtigte Mängel innerhalb einer angemessenen Frist
          nachbessern.
        </p>
        <p>
          (3) Die Gewährleistungsfrist beträgt 12 Monate ab Abnahme, sofern
          nichts anderes vereinbart wurde.
        </p>
        <p>
          (4) Von der Gewährleistung ausgenommen sind Mängel, die durch
          unsachgemäße Nutzung, nachträgliche Änderungen durch den Kunden oder
          Dritte oder durch Einflüsse entstehen, die nicht vom Anbieter zu
          vertreten sind.
        </p>

        <h2 className="font-semibold text-xl">§ 9 Haftung</h2>
        <p>
          (1) Der Anbieter haftet unbeschränkt für Vorsatz und grobe
          Fahrlässigkeit sowie für Schäden aus der Verletzung des Lebens, des
          Körpers oder der Gesundheit.
        </p>
        <p>
          (2) Bei leichter Fahrlässigkeit haftet der Anbieter nur bei Verletzung
          wesentlicher Vertragspflichten (Kardinalpflichten). Die Haftung ist in
          diesen Fällen auf den vertragstypischen, vorhersehbaren Schaden
          begrenzt.
        </p>
        <p>
          (3) Die Haftung für indirekte Schäden, Folgeschäden und entgangenen
          Gewinn ist ausgeschlossen, soweit gesetzlich zulässig.
        </p>

        <h2 className="font-semibold text-xl">§ 10 Vertraulichkeit</h2>
        <p>
          (1) Beide Parteien verpflichten sich, alle im Rahmen der
          Vertragsanbahnung und -durchführung erlangten vertraulichen
          Informationen der jeweils anderen Partei geheim zu halten.
        </p>
        <p>
          (2) Diese Verpflichtung besteht auch nach Beendigung des Vertrages
          fort.
        </p>

        <h2 className="font-semibold text-xl">§ 11 Kündigung</h2>
        <p>
          (1) Bei Verträgen ohne feste Laufzeit kann jede Partei den Vertrag mit
          einer Frist von 4 Wochen zum Monatsende kündigen.
        </p>
        <p>
          (2) Das Recht zur außerordentlichen Kündigung aus wichtigem Grund
          bleibt unberührt.
        </p>
        <p>
          (3) Im Falle einer Kündigung hat der Kunde die bis zum
          Kündigungszeitpunkt erbrachten Leistungen zu vergüten.
        </p>

        <h2 className="font-semibold text-xl">§ 12 Schlussbestimmungen</h2>
        <p>
          (1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss
          des UN-Kaufrechts.
        </p>
        <p>
          (2) Gerichtsstand für alle Streitigkeiten aus dem Vertragsverhältnis
          ist, soweit gesetzlich zulässig, der Sitz des Anbieters.
        </p>
        <p>
          (3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder
          werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
        </p>
        <p>
          (4) Änderungen und Ergänzungen dieses Vertrages bedürfen der
          Schriftform. Dies gilt auch für die Aufhebung des
          Schriftformerfordernisses.
        </p>

        <p className="mt-8 text-sm text-muted-foreground">Stand: Januar 2025</p>
        <p className="text-sm text-muted-foreground">
          Siehe auch:{" "}
          <Link href="/impressum" className="underline">
            Impressum
          </Link>{" "}
          |{" "}
          <Link href="/datenschutz" className="underline">
            Datenschutzerklärung
          </Link>
        </p>
      </div>
    </div>
  );
}
