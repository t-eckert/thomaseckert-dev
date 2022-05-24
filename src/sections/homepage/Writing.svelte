<script>
	import ArrowRight from "src/components/icons/ArrowRight.svelte"
	import WritingPreview from "src/components/previews/Writing.svelte"
	import Link from "src/components/Link.svelte"

	export let writing
</script>

<section class="flex flex-col gap-3 selection:bg-sky-600 items-start">
	<h2 class="font-semibold text-gray-900 text-2xl">Writing</h2>
	<div class="flex flex-col gap-2">
		{#each writing as w}
			<WritingPreview writing={w} />
		{/each}
	</div>
	<Link href="/writing" resource="writing">
		<div class="flex flex-row items-center gap-0.5 group">
			<div>More</div>
			<ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition text-sky-500" />
		</div>
	</Link>
</section>
