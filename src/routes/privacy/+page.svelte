<script>
	import { Button } from '$lib/components/ui/button';
	import {
		Accordion,
		AccordionItem,
		AccordionTrigger,
		AccordionContent
	} from '$lib/components/ui/accordion';
	import { Badge } from '$lib/components/ui/badge';
	import { Trash2, Eye, Shield, Cookie, Fingerprint, CheckCircle } from 'lucide-svelte'; // Shield bleibt unverändert
</script>

<div class="container mx-auto px-4 py-16 max-w-3xl">
	<h1 class="text-4xl font-extrabold mb-8 text-center">
		Datenschutzerklärung
		<Badge variant="outline" class="ml-2 align-middle">von A&L</Badge>
	</h1>

	<div class="bg-card text-card-foreground rounded-lg p-6 mb-8">
		<p class="text-xl mb-4">Zusammenfassung:</p>
		<ul class="list-disc pl-6 space-y-2">
			<li>Wir erheben verschiedene Daten aus unseren Diensten.</li>
			<li>Ihre Geheimnisse sind bei uns sicher. Wenn alles öffentlich ist, kann nichts geleakt werden!</li>
			<li>Unser Respekt für Ihre Privatsphäre ist vorhanden.</li>
		</ul>
	</div>

	<Accordion class="mb-8">
		<AccordionItem value="item-1">
			<AccordionTrigger>Welche Daten sammeln wir?</AccordionTrigger>
			<AccordionContent>
				<div class="flex items-center space-x-2">
					<CheckCircle class="w-6 h-6 text-primary" />
					<span>
						<strong>A&L Domains:</strong>
						<ul>
							<li>Löschanfragen: Datum, Benutzerinformationen und ID.</li>
							<li>Subdomains: Informationen über die Subdomains und zugehörige Benutzer.</li>
							<li>Benutzer: Kontaktdaten, Anmeldeinformationen und Rolle im System.</li>
						</ul>
						<strong>AURA Counter:</strong>
						<ul>
							<li>Passwort zurücksetzen: Datum, Token und E-Mail-Adresse.</li>
							<li>Einlösbare und eingelöste Codes: Informationen über Benutzer und Codes.</li>
							<li>Transfers: Details zu den Transaktionen zwischen Benutzern.</li>
							<li>Benutzer: Kontoinformationen, Anmeldehistorie und Einstellungen.</li>
						</ul>
						<strong>Projekte Planer:</strong>
						<ul>
							<li>Ausgaben: Projektbezogene Ausgabeninformationen.</li>
							<li>Einladungen und Benachrichtigungen: Informationen über Projektteilnehmer und deren Status.</li>
							<li>Projekte: Details zu Projekten, einschließlich Budget und Verantwortlichen.</li>
							<li>Benutzer und Projektzuweisungen: Informationen zu Benutzern in Projekten.</li>
						</ul>
						<strong>PrizePal:</strong>
						<ul>
							<li>Giveaways: Endungen, Infos, Nachrichteninfo, Titel, Beschreibung usw.</li>
							<li>Teilnehmer: IP-Adressen, Discord-Infos.</li>
						</ul>
						<strong>Memer.lol:</strong>
						<ul>
							<li>Memes: Alle Memes, die CDN-URL, Ersteller.</li>
							<li>Likes: Wer welchen Meme geliked hat.</li>
							<li>Aktivität: Per DeviceID (Cookie: deviceid) wird deine Startseite angepasst.</li>

						</ul>
					</span>
				</div>
			</AccordionContent>
		</AccordionItem>
		<AccordionItem value="item-2">
			<AccordionTrigger>Wie verwenden wir Ihre Daten?</AccordionTrigger>
			<AccordionContent>
				<div class="flex items-center space-x-2">
					<Eye class="w-6 h-6 text-primary" />
					<span>Wir verwenden die Daten nicht für böse Zwecke, wir verwenden sie damit dein Konto, Projekte oder deine AURA nicht verloren geht 👍</span>
				</div>
			</AccordionContent>
		</AccordionItem>
		<AccordionItem value="item-3">
			<AccordionTrigger>Wie schützen wir Ihre Daten?</AccordionTrigger>
			<AccordionContent>
				<div class="flex items-center space-x-2">
					<Shield class="w-6 h-6 text-primary" /> <!-- Shield bleibt hier -->
					<span>Wir schützen Ihre Daten, indem wir sie in sichere Datenbanken speichern!</span>
				</div>
			</AccordionContent>
		</AccordionItem>
	</Accordion>

	<div class="bg-muted p-4 rounded-lg mb-8">
		<h2 class="text-2xl font-bold mb-4 flex items-center">
			<Cookie class="w-6 h-6 mr-2" />
			Cookie-Richtlinie
		</h2>
		<p>
			Es gibt keine Cookies, die wir speichern. Diese Website speichert keine Daten (aundl.tech). Andere Seiten wie AURA Counter, ProjektePlaner, PrizePal und A&L Domains speichern, dass du mit deinen Anmeldedaten angemeldet bist.
		</p>
	</div>

	<div class="bg-muted p-4 rounded-lg mb-8">
		<h2 class="text-2xl font-bold mb-4 flex items-center">
			<Fingerprint class="w-6 h-6 mr-2" />
			Fingerabdruck-Richtlinie
		</h2>
		<p>Wir verwenden kein Fingerprinting. was ist das überhaupt lol</p>
	</div>

	<div class="text-center">
		<Button variant="outline" class="animate-bounce">Keine hinterhältigen Tricks, wir versprechens :)</Button>
	</div>
</div>

<svelte:head>
	<title>A&L Technologies - Datenschutz</title>
</svelte:head>
