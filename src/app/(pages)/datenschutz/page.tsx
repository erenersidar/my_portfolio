import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Sidar Erener",
  description: "Datenschutzerklärung (Privacy Policy) for the website of Sidar Erener.",
};

export default function DatenschutzPage() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <div className="text-center">
        <h1 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Datenschutzerklärung
        </h1>
      </div>

      <div className="prose prose-invert prose-headings:text-primary prose-a:text-primary mx-auto">
        <h2 className="font-semibold text-xl">1. Datenschutz auf einen Blick</h2>

        <h3 className="font-semibold">Allgemeine Hinweise</h3>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit
          Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
          Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
          identifiziert werden können. Ausführliche Informationen zum Thema
          Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten
          Datenschutzerklärung.
        </p>

        <h3 className="font-semibold">Datenerfassung auf dieser Website</h3>
        <p>
          <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
          <br />
          Die Datenverarbeitung auf dieser Website erfolgt durch den
          Websitebetreiber. Dessen Kontaktdaten können Sie dem{" "}
          <Link href="/impressum" className="underline">
            Impressum
          </Link>{" "}
          dieser Website entnehmen.
        </p>
        <p>
          <strong>Wie erfassen wir Ihre Daten?</strong>
          <br />
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
          mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein
          Kontaktformular eingeben. Andere Daten werden automatisch oder nach
          Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme
          erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser,
          Betriebssystem oder Uhrzeit des Seitenaufrufs).
        </p>
        <p>
          <strong>Wofür nutzen wir Ihre Daten?</strong>
          <br />
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der
          Website zu gewährleisten. Andere Daten können zur Analyse Ihres
          Nutzerverhaltens verwendet werden.
        </p>
        <p>
          <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong>
          <br />
          Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft,
          Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
          erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung
          dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur
          Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit
          für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter
          bestimmten Umständen die Einschränkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen.
        </p>

        <h2 className="font-semibold text-xl">2. Hosting</h2>
        <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>

        <h3 className="font-semibold">Vercel</h3>
        <p>
          Anbieter ist die Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789,
          USA (nachfolgend „Vercel"). Wenn Sie unsere Website besuchen, erfasst
          Vercel verschiedene Logfiles inklusive Ihrer IP-Adressen. Details
          entnehmen Sie der Datenschutzerklärung von Vercel:{" "}
          <a
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://vercel.com/legal/privacy-policy
          </a>
        </p>
        <p>
          Die Verwendung von Vercel erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
          DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst
          zuverlässigen Darstellung unserer Website.
        </p>

        <h2 className="font-semibold text-xl">
          3. Allgemeine Hinweise und Pflichtinformationen
        </h2>

        <h3 className="font-semibold">Datenschutz</h3>
        <p>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten
          sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
          entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser
          Datenschutzerklärung.
        </p>
        <p>
          Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei
          der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein
          lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
          möglich.
        </p>

        <h3 className="font-semibold">Hinweis zur verantwortlichen Stelle</h3>
        <p>
          Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website
          ist:
        </p>
        <p>
          Sidar Erener
          <br />
          Filchnerstr. 78
          <br />
          45472 Mülheim an der Ruhr
          <br />
          E-Mail: erener@apply10.com
        </p>
        <p>
          Verantwortliche Stelle ist die natürliche oder juristische Person, die
          allein oder gemeinsam mit anderen über die Zwecke und Mittel der
          Verarbeitung von personenbezogenen Daten entscheidet.
        </p>

        <h3 className="font-semibold">Speicherdauer</h3>
        <p>
          Soweit innerhalb dieser Datenschutzerklärung keine speziellere
          Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei
          uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein
          berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur
          Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir
          keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer
          personenbezogenen Daten haben.
        </p>

        <h3 className="font-semibold">
          Widerruf Ihrer Einwilligung zur Datenverarbeitung
        </h3>
        <p>
          Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
          Einwilligung möglich. Sie können eine bereits erteilte Einwilligung
          jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
          Datenverarbeitung bleibt vom Widerruf unberührt.
        </p>

        <h3 className="font-semibold">
          Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen (Art. 21
          DSGVO)
        </h3>
        <p>
          Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f
          DSGVO erfolgt, haben Sie jederzeit das Recht, aus Gründen, die sich aus
          Ihrer besonderen Situation ergeben, gegen die Verarbeitung Ihrer
          personenbezogenen Daten Widerspruch einzulegen. Legen Sie Widerspruch
          ein, werden wir Ihre betroffenen personenbezogenen Daten nicht mehr
          verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für
          die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten
          überwiegen.
        </p>

        <h3 className="font-semibold">
          Beschwerderecht bei der zuständigen Aufsichtsbehörde
        </h3>
        <p>
          Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
          Beschwerderecht bei einer Aufsichtsbehörde zu. Das Beschwerderecht
          besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
          gerichtlicher Rechtsbehelfe.
        </p>

        <h3 className="font-semibold">Recht auf Datenübertragbarkeit</h3>
        <p>
          Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung
          oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder
          an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen
          zu lassen.
        </p>

        <h3 className="font-semibold">Auskunft, Löschung und Berichtigung</h3>
        <p>
          Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit
          das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
          personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der
          Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung
          dieser Daten.
        </p>

        <h3 className="font-semibold">Recht auf Einschränkung der Verarbeitung</h3>
        <p>
          Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen, wenn die Richtigkeit der Daten von
          Ihnen bestritten wird, die Verarbeitung unrechtmäßig ist, wir die Daten
          nicht mehr benötigen oder Sie Widerspruch gegen die Verarbeitung
          eingelegt haben.
        </p>

        <h2 className="font-semibold text-xl">
          4. Datenerfassung auf dieser Website
        </h2>

        <h3 className="font-semibold">Kontaktformular</h3>
        <p>
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre
          Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen
          Kontaktdaten (Name, E-Mail-Adresse, Nachricht) zwecks Bearbeitung der
          Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese
          Daten geben wir nicht ohne Ihre Einwilligung weiter.
        </p>
        <p>
          Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
          lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags
          zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
          erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf
          unserem berechtigten Interesse an der effektiven Bearbeitung der an uns
          gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
          Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
        </p>
        <p>
          Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns,
          bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung
          widerrufen oder der Zweck für die Datenspeicherung entfällt. Zwingende
          gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben
          unberührt.
        </p>

        <h3 className="font-semibold">Anfrage per E-Mail</h3>
        <p>
          Wenn Sie uns per E-Mail kontaktieren, wird Ihre Anfrage inklusive aller
          daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke
          der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.
          Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
        </p>

        <h2 className="font-semibold text-xl">5. Cloudflare Turnstile</h2>
        <p>
          Wir nutzen Cloudflare Turnstile (nachfolgend „Turnstile") auf dieser
          Website. Anbieter ist die Cloudflare Inc., 101 Townsend St., San
          Francisco, CA 94107, USA (nachfolgend „Cloudflare").
        </p>
        <p>
          Mit Turnstile soll überprüft werden, ob die Dateneingabe auf dieser
          Website (z.B. in einem Kontaktformular) durch einen Menschen oder durch
          ein automatisiertes Programm erfolgt. Hierzu analysiert Turnstile das
          Verhalten des Websitebesuchers anhand verschiedener Merkmale.
        </p>
        <p>
          Diese Analyse beginnt automatisch, sobald der Websitebesucher eine
          Website mit aktivierter Turnstile-Funktion betritt. Zur Analyse wertet
          Turnstile verschiedene Informationen aus (z.B. IP-Adresse, Verweildauer
          des Websitebesuchers auf der Website oder vom Nutzer getätigte
          Mausbewegungen).
        </p>
        <p>
          Die Nutzung von Turnstile erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
          DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse daran, seine
          Webangebote vor missbräuchlicher automatisierter Ausspähung und vor SPAM
          zu schützen.
        </p>
        <p>
          Weitere Informationen zu Cloudflare Turnstile finden Sie in der
          Datenschutzerklärung von Cloudflare:{" "}
          <a
            href="https://www.cloudflare.com/privacypolicy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.cloudflare.com/privacypolicy/
          </a>
        </p>

        <h2 className="font-semibold text-xl">6. E-Mail-Versand</h2>
        <p>
          Nach dem Absenden des Kontaktformulars erhalten Sie eine automatische
          Bestätigungs-E-Mail an die von Ihnen angegebene E-Mail-Adresse. Der
          E-Mail-Versand erfolgt über unseren SMTP-Server.
        </p>
        <p>
          Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1
          lit. a DSGVO), die Sie durch das Absenden des Kontaktformulars und die
          Zustimmung zur Datenschutzerklärung erteilen.
        </p>

        <p className="mt-8 text-sm text-muted-foreground">
          Stand: Januar 2025
        </p>
        <p className="text-sm text-muted-foreground">
          Siehe auch:{" "}
          <Link href="/impressum" className="underline">
            Impressum
          </Link>
        </p>
      </div>
    </div>
  );
}
