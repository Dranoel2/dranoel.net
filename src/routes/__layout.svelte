<script lang="ts">
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import '../app.css';
</script>

<div class="p-3">
	<Navbar />

	<main id="main">
		<slot />
	</main>
</div>
