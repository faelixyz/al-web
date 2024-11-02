<script>
	import { Button } from '$lib/components/ui/button';
	import {
		Accordion,
		AccordionItem,
		AccordionTrigger,
		AccordionContent
	} from '$lib/components/ui/accordion';
	import { Badge } from '$lib/components/ui/badge';
	import { Shield, CheckCircle, FileText, Lock, Info } from 'lucide-svelte';
</script>

<div class="container mx-auto px-4 py-16 max-w-3xl">
	<h1 class="text-4xl font-extrabold mb-8 text-center">
		Nutzungsbedingungen
		<Badge variant="outline" class="ml-2 align-middle">von A&L</Badge>
	</h1>

	<div class="bg-card text-card-foreground rounded-lg p-6 mb-8">
		<p class="text-xl mb-4">Zusammenfassung:</p>
		<ul class="list-disc pl-6 space-y-2">
			<li>Durch die Nutzung unserer Dienste stimmst du diesen Bedingungen zu.</li>
			<li>Respektiere andere Benutzer und unsere Plattform.</li>
			<li>Verstößt du gegen diese Bedingungen, behalten wir uns das Recht vor, dein Konto zu sperren oder zu entfernen.</li>
		</ul>
	</div>

	<Accordion class="mb-8">
		<AccordionItem value="item-1">
			<AccordionTrigger>1. Allgemeine Bestimmungen</AccordionTrigger>
			<AccordionContent>
				<div class="flex items-center space-x-2">
					<Info class="w-6 h-6 text-primary" />
					<span>
						Unsere Dienste stehen allen Nutzern offen, die die geltenden Bedingungen und Vorschriften akzeptieren. Mit der Nutzung erklärst du dich damit einverstanden, keine schädlichen Handlungen vorzunehmen, die das System oder andere Nutzer beeinträchtigen könnten.
					</span>
				</div>
			</AccordionContent>
		</AccordionItem>

		<AccordionItem value="item-2">
			<AccordionTrigger>2. Verpflichtungen des Nutzers</AccordionTrigger>
			<AccordionContent>
				<div class="flex items-center space-x-2">
					<CheckCircle class="w-6 h-6 text-primary" />
					<span>
						Als Nutzer unserer Plattform verpflichtest du dich, unsere Dienste verantwortungsbewusst und in Übereinstimmung mit diesen Bedingungen zu nutzen. Dazu gehört insbesondere:
						<ul class="list-disc pl-6 space-y-2 mt-2">
							<li>Kein Veröffentlichen von unangebrachten oder rechtswidrigen Inhalten.</li>
							<li>Kein Versuch, unbefugten Zugriff auf andere Konten oder Daten zu erhalten.</li>
							<li>Respektvoller Umgang mit anderen Nutzern und deren Beiträgen.</li>
						</ul>
					</span>
				</div>
			</AccordionContent>
		</AccordionItem>

		<AccordionItem value="item-3">
			<AccordionTrigger>3. Haftungsausschluss</AccordionTrigger>
			<AccordionContent>
				<div class="flex items-center space-x-2">
					<Shield class="w-6 h-6 text-primary" />
					<span>
						Unsere Dienste werden "wie besehen" zur Verfügung gestellt, und wir übernehmen keine Haftung für Schäden, Verluste oder Datenverlust, die durch die Nutzung unserer Dienste entstehen könnten. Die Nutzung erfolgt auf eigene Verantwortung.
					</span>
				</div>
			</AccordionContent>
		</AccordionItem>

		<AccordionItem value="item-4">
			<AccordionTrigger>4. Änderungen der Nutzungsbedingungen</AccordionTrigger>
			<AccordionContent>
				<div class="flex items-center space-x-2">
					<FileText class="w-6 h-6 text-primary" />
					<span>
						Wir behalten uns das Recht vor, diese Nutzungsbedingungen jederzeit zu ändern. Nutzer werden über wesentliche Änderungen informiert. Es liegt in der Verantwortung des Nutzers, regelmäßig die aktualisierten Bedingungen zu überprüfen.
					</span>
				</div>
			</AccordionContent>
		</AccordionItem>

		<AccordionItem value="item-5">
			<AccordionTrigger>5. Datensicherheit und Schutz</AccordionTrigger>
			<AccordionContent>
				<div class="flex items-center space-x-2">
					<Lock class="w-6 h-6 text-primary" />
					<span>
						Wir verpflichten uns zum Schutz deiner Daten und setzen moderne Sicherheitsmaßnahmen ein, um unbefugten Zugriff oder Missbrauch zu verhindern. Deine Daten werden stets vertraulich behandelt und nur im Rahmen der gesetzlichen Bestimmungen verwendet.
					</span>
				</div>
			</AccordionContent>
		</AccordionItem>
	</Accordion>

	<div class="bg-muted p-4 rounded-lg mb-8">
		<h2 class="text-2xl font-bold mb-4 flex items-center">
			<Lock class="w-6 h-6 mr-2" />
			Datenschutzrichtlinie
		</h2>
		<p>
			Unsere Datenschutzrichtlinie beschreibt, wie wir persönliche Informationen sammeln, nutzen und schützen. Durch die Nutzung unserer Dienste erklärst du dich mit der Verarbeitung deiner Daten gemäß unserer Datenschutzrichtlinie einverstanden.
		</p>
	</div>

	<div class="text-center">
		<Button variant="outline" class="animate-bounce">Verstanden und akzeptiert :)</Button>
	</div>
</div>

<svelte:head>
	<title>A&L Technologies - Nutzungsbedingungen</title>
</svelte:head>
