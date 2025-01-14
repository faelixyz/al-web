<script>
	import { Label } from '$lib/components/ui/label';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Download } from 'lucide-svelte';
</script>

<div class="flex flex-col items-center justify-center min-h-screen p-4">
	<div class="container mx-auto flex flex-col items-center justify-center gap-8 mb-16">
		<Label class="text-white text-3xl md:text-5xl font-bold mb-2">A&L Technologies</Label>
		<Label class="text-white/90 text-lg">
			Wir haben folgende Projekte:
		</Label>
	</div>

	<div class="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
		<Card>
			<CardHeader>
				<CardTitle>A&L Technologies Blog</CardTitle>
			</CardHeader>
			<CardContent>
				<p>
					Ein Blog, der interessante Inhalte und Neuigkeiten zu unseren Projekten bietet.
					<a href="https://blog.aundl.tech" target="_blank" class="text-indigo-400">Besuchen Sie den Blog</a>
				</p>
			</CardContent>
		</Card>

		<Card>
			<CardHeader>
				<CardTitle>ProjektePlaner</CardTitle>
			</CardHeader>
			<CardContent>
				<p>
					Ein Tool zur Planung und Verwaltung von Projekten.
					<a href="https://projekteplaner.de" target="_blank" class="text-indigo-400">Besuchen Sie ProjektePlaner</a>
				</p>
			</CardContent>
                        <CardContent>
				<p>
					Eine Webseite, wo man seine Memes teilen kann!
					<a href="https://memer.lol" target="_blank" class="text-indigo-400">Besuchen Sie ProjektePlaner</a>
				</p>
			</CardContent>
		</Card>

		<Card>
			<CardHeader>
				<CardTitle>AURA Counter</CardTitle>
			</CardHeader>
			<CardContent>
				<p>
					Wieviel AURA hast du?
					<a href="https://auracounter.de" target="_blank" class="text-indigo-400">Besuchen Sie AURA Counter</a>
				</p>
			</CardContent>
		</Card>

		<Card>
			<CardHeader>
				<CardTitle>PrizePal Discord Bot</CardTitle>
			</CardHeader>
			<CardContent>
				<p>
					Ein Bot für Discord, der Gewinnspiele und Aktionen verwaltet.
					<a href="https://p.aundl.tech" target="_blank" class="text-indigo-400">Besuchen Sie PrizePal</a>
				</p>
			</CardContent>
		</Card>

		<Card>
			<CardHeader>
				<CardTitle>PrizePal Discord Bot (Englisch)</CardTitle>
			</CardHeader>
			<CardContent>
				<p>
					Ein Bot für Discord, der Gewinnspiele und Aktionen verwaltet. In Englisch!
					<a href="https://us.p.aundl.tech" target="_blank" class="text-indigo-400">Besuchen Sie PrizePal US</a>
				</p>
			</CardContent>
		</Card>


		<Card>
			<CardHeader>
				<CardTitle>A&L Domains</CardTitle>
			</CardHeader>
			<CardContent>
				<p>
					Unsere Plattform für die Anlegung von kostenlosen Subdomains.
					<a href="https://domains.aundl.tech" target="_blank" class="text-indigo-400">Besuchen Sie A&L Domains</a>
				</p>
			</CardContent>
		</Card>
	</div>

</div>

<svelte:head>
	<title>A&L Technologies</title>
</svelte:head>
