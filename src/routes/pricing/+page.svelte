<script>
	import { Button } from '$lib/components/ui/button';
	import {
		Card,
		CardContent,
		CardDescription,
		CardFooter,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card';
	import { Check } from 'lucide-svelte';

	let enterpriseEmail = 'developers@aundl.tech';
</script>

<div class="container mx-auto px-4 py-16 max-w-6xl">
	<h1 class="text-4xl font-extrabold mb-8 text-center">Preise</h1>

	<p class="text-xl text-center mb-12">Nimm die Option, die dir am besten passt! (Es gibt sehr viel Auswahl, vertrau mir)</p>

	<div class="grid grid-cols-1 md:grid-cols-1 gap-8 mb-12">
		<!-- Free Tier -->
		<Card>
			<CardHeader>
				<CardTitle class="flex items-center justify-between">
					Kostenlos
				</CardTitle>
				<CardDescription>Bei uns ist alles kostenlos! Es ist alles ein Hobby-Projekt! :)</CardDescription>
			</CardHeader>
			<CardContent>
				<p class="text-3xl font-bold mb-4">$0.00</p>
				<ul class="space-y-2">
					<li class="flex items-center">
						<Check class="w-5 h-5 mr-2 text-green-500" />
						Alle grundlegenden Funktionen
					</li>
					<li class="flex items-center">
						<Check class="w-5 h-5 mr-2 text-green-500" />
						Keine versteckten Gebühren
					</li>
					<li class="flex items-center">
						<Check class="w-5 h-5 mr-2 text-green-500" />
						Keine Premium-Unterstützung
					</li>
				</ul>
			</CardContent>
		</Card>
	</div>
</div>

<svelte:head>
	<title>A&L Technologies - Pricing</title>
</svelte:head>
