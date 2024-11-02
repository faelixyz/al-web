<script>
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Youtube, Code, Coffee, Brain, Rocket, Star } from 'lucide-svelte';

	let link = 'https://aundl.tech';
</script>

<div class="container mx-auto px-4 py-16 max-w-4xl">
	<h1 class="text-4xl font-extrabold mb-8 text-center">
		Über Uns
		<Badge variant="outline" class="ml-2 align-middle">Wir sind ein kleines Team</Badge>
	</h1>

	<div class="bg-card text-card-foreground rounded-lg p-6 mb-8">
		<p class="text-xl mb-4">Dieses Projekt wurde von A&L Technologies erstellt.</p>
		<ul class="list-disc pl-6 space-y-2">
			<li>Wir sind Felix S. und Tim E.</li>
			<li>Wir konzentrieren uns darauf, die besten Produkte zu entwickeln.</li>
			<li>Unser Ziel ist es, Nutzer zufriedenzustellen und zu unterstützen.</li>
		</ul>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
		<Card>
			<CardHeader>
				<CardTitle class="flex items-center">
					<Code class="w-6 h-6 mr-2 text-primary" />
					Code Qualität
				</CardTitle>
			</CardHeader>
			<CardContent>
				<p>Wir legen Wert auf sauberen und wartbaren Code.</p>
			</CardContent>
		</Card>
		<Card>
			<CardHeader>
				<CardTitle class="flex items-center">
					<Coffee class="w-6 h-6 mr-2 text-primary" />
					Wir köcheln unsere Projekte!
				</CardTitle>
			</CardHeader>
			<CardContent>
				<p>Unsere Projekte werden sehr oft getestet bevor wir sie publishen.</p>
			</CardContent>
		</Card>
		<Card>
			<CardHeader>
				<CardTitle class="flex items-center">
					<Brain class="w-6 h-6 mr-2 text-primary" />
					Kreativität
				</CardTitle>
			</CardHeader>
			<CardContent>
				<p>Wir bringen innovative Ideen in jedes Projekt ein.</p>
			</CardContent>
		</Card>
		<Card>
			<CardHeader>
				<CardTitle class="flex items-center">
					<Rocket class="w-6 h-6 mr-2 text-primary" />
					Auf zu neuen Höhen!
				</CardTitle>
			</CardHeader>
			<CardContent>
				<p>Wir streben immer nach Verbesserung und Wachstum.</p>
			</CardContent>
		</Card>
	</div>

	<div class="bg-muted p-6 rounded-lg mb-8">
		<h2 class="text-2xl font-bold mb-4 flex items-center">
			<Star class="w-6 h-6 mr-2 text-yellow-400" />
			Warum wir die Besten sind
		</h2>
		<ul class="list-disc pl-6 space-y-2">
			<li>Wir setzen auf moderne Technologien.</li>
			<li>Wir arbeiten effizient und zielorientiert.</li>
			<li>Wir schätzen unser Team und unsere Nutzer.</li>
		</ul>
	</div>

	<div class="text-center">
		<Button variant="default" class="animate-pulse" on:click={() => window.open(link, '_blank')}>
			<Youtube class="w-5 h-5 mr-2" />
			Unsere Projekte ansehen
		</Button>
	</div>
</div>

<svelte:head>
	<title>A&L Technologies - Über Uns</title>
</svelte:head>
