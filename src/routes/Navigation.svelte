<script>
	import { Button } from '$lib/components/ui/button';
	import { Menu } from 'lucide-svelte';
	import { fly } from 'svelte/transition';

	let discordLink = 'https://discord.gg/6CApBe3D94';
	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<nav class="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
	<div class="container mx-auto px-4">
		<div class="flex items-center justify-between h-16">
			<div class="flex items-center">
				<a href="/" class="text-2xl font-bold text-primary mr-8">A&L Technologies</a>
				<div class="hidden md:flex items-center space-x-6">
					<a href="/" class="nav-link">Startseite</a>
					<a href="/about" class="nav-link">Über uns</a>
					<a href="/privacy" class="nav-link">Datenschutz</a>
					<a href="/tos" class="nav-link">Nutzungsbedingungen</a>
					<a href="/pricing" class="nav-link">Preise</a>
					<a href={discordLink} target="_blank" rel="noopener noreferrer" class="nav-link">Discord</a>
				</div>
			</div>
			<div class="md:hidden">
				<button on:click={toggleMenu} class="text-foreground hover:text-primary transition-colors">
					<Menu size={24} />
				</button>
			</div>
		</div>
	</div>

	{#if isMenuOpen}
		<div class="md:hidden" transition:fly={{ y: -200, duration: 300 }}>
			<div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
				<a href="/" class="mobile-nav-link">Startseite</a>
				<a href="/about" class="mobile-nav-link">Über uns</a>
				<a href="/privacy" class="mobile-nav-link">Datenschutz</a>
				<a href="/tos" class="mobile-nav-link">Nutzungsbedingungen</a>
				<a href="/pricing" class="mobile-nav-link">Preise</a>
				<a href={discordLink} target="_blank" rel="noopener noreferrer" class="mobile-nav-link">Discord</a>
			</div>
		</div>
	{/if}
</nav>

<style lang="postcss">
	.nav-link {
		@apply text-foreground hover:text-primary transition-colors duration-200 text-sm font-medium;
	}

	.mobile-nav-link {
		@apply block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200;
	}
</style>
