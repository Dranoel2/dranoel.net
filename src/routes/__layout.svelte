<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import '../app.css';
</script>

<div class="p-3 h-full pb-8">
	<div class="w-full">
		<Navbar />

		<main id="main">
			<slot />
		</main>
	</div>

	<Footer />
</div>
