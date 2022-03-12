<script lang="ts">
	import { page } from '$app/stores';
	export let href: string;
	let base_path: string;
	$: base_path = '/' + $page.url.pathname.substring(1).split('/')[0];
</script>

<a
	class="w-full text-center {href == base_path
		? 'text-nav-active'
		: 'text-nav-inactive'} hover:text-nav-active align-middle leading-[3.5rem] duration-500"
	{href}><slot /></a
>
