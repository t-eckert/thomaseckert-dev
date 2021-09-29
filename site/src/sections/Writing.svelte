<script lang="typescript">
	import Tag from "../components/Tag.svelte"
	import type Writings from "../types/Writings"

	export let writings: Writings
</script>

<section>
	<header class="mb-2 border-b border-gray-200">
		<h1 class="font-medium text-sm text-gray-900">Writing</h1>
	</header>
	<main class="flex flex-col gap-1">
		{#each writings as writing}
			<div class="flex flex-row justify-between items-center">
				<a class="transition hover:underline" href={"/writing/" + writing.slug}>{writing.title}</a>
				<div class="flex flex-row gap-1">
					{#each writing.tags as tag}
						<Tag tag={tag} />
					{/each}
				</div>
			</div>
		{/each}
	</main>
</section>