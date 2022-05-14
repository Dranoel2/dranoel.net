<script lang="ts">
	import { page } from '$app/stores';
	export let href: string;
	let base_path: string;
	$: base_path = '/' + $page.url.pathname.substring(1).split('/')[0];
</script>

<a
	class="w-full text-center {href == base_path
		? 'text-nav-active hover:text-nav-active'
		: 'text-nav-inactive hover:text-nav-inactive'} align-middle leading-[3.5rem] "
	{href}><slot /></a
>
