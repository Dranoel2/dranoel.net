<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				title: `${status}: ${error.message}`
			}
		};
	}
</script>

<script lang="ts">
	export let title: string;
</script>

<h1 class="text-center text-xl">{title}</h1>
