<script lang="ts">
	interface video {
		title: string;
		thumbnail: string;
		id: string;
		description: string;
	}
	export let videos: video[];
</script>

<h1 class="text-xl">Youtube:</h1>
<ul class="grid grid-cols-4 gap-1">
	{#each videos as video}
		<li class="border-solid border-2 border-black p-1 h-full auto-rows-max">
			<a href="https://youtu.be/{video.id}">
				<img src={video.thumbnail} alt="The video thumbnail" />
				<h1 class="text-xl text-center border-b-black border-solid border-b-2">{video.title}</h1>
				<p>{video.description}</p>
			</a>
		</li>
	{/each}
</ul>
