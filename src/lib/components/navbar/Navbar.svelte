<script lang="ts">
	import NavLink from '$lib/components/navbar/NavLink.svelte';
	let scroll: number;
</script>

<svelte:window bind:scrollY={scroll} />

<div
	class="bg-nav-bg sticky top-3 h-14 w-full flex justify-center content-center text-xl hover:opacity-100 duration-100 {scroll !==
	0
		? 'opacity-75 shadow-sm'
		: 'shadow-lg'}"
>
	<NavLink href="/">Home</NavLink>
	<NavLink href="/social">Social</NavLink>
</div>
