<script context="module">
	import marked from "marked"

	import Date from "../../components/Date.svelte"
	import Tag from "../../components/Tag.svelte"
	import fetchWriting from '../../actions/fetchWriting';

  export async function load({page}) {
		const writing = (await fetchWriting(page.params.slug))[0]
    return { props: { writing }}
  }
</script>

<script>
	export let writing
</script>

<header class="mt-12 mb-8 mx-auto max-w-4xl flex flex-col gap-2">
	<h1 class="text-6xl tracking-tight leading-tight font-semibold">{writing.title.replace(/\s/g, " ")}</h1>
	<div class="flex flex-row gap-1">
		<Date date={writing.updatedAt}/>
		{#each writing.tags as tag}
			<Tag tag={tag} />
		{/each}
	</div>
</header>

<main class="markdown">
	{@html marked(writing.content)}
</main>