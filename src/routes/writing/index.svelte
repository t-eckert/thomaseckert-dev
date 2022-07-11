<script>
	import Tag from "src/components/Tag.svelte"
	import Writing from "src/components/previews/Writing.svelte"
	import ArrowLeft from "src/components/icons/ArrowLeft.svelte"
	import Link from "src/components/Link.svelte"

	export let writing, tags
</script>

<section class="mx-auto px-4 flex flex-col max-w-6xl">
	<header class="py-4 sm:py-12 flex flex-col gap-4 items-start">
		<Link href="/" resource="">
			<div class="flex flex-row items-center gap-0.5 group">
				<ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition text-gray-500" />
				<div>Home</div>
			</div>
		</Link>

		<h1 class="font-semibold text-2xl sm:text-7xl text-sky-900">Writing</h1>

		{#if tags.length !== 0}
			<div class="flex flex-col gap-1 items-baseline">
				<p class="text-sm font-medium text-gray-700">Filtering by tags</p>

				<div class="flex flex-row gap-2 items-center">
					{#each tags as tag}
						<Tag resource="writing" {tag} />
					{/each}
					<a
						href="/writing"
						class="text-xs px-1 py-0.5 bg-gray-100 transition hover:bg-gray-200 rounded font-medium"
						>Clear tags</a
					>
				</div>
			</div>
		{/if}
	</header>

	<main class="flex flex-col gap-4">
		{#each writing as w}
			<Writing writing={w} />
		{/each}
	</main>
</section>
