<script context="module">
	import fetchWritings from '../actions/fetchWritings';

	export async function load() {
		const writings = await fetchWritings();
		return { props: { writings } };
	}
</script>

<script>
	import Introduction from '../sections/Introduction.svelte';
	import WritingList from '../sections/WritingList.svelte';

	export let writings;
</script>

<svelte:head>
	<title>Thomas Eckert</title>
</svelte:head>

<section class="mx-auto px-2 pt-4 sm:pt-12 max-w-3xl flex flex-col gap-8">
	<Introduction />
	<div class="flex flex-col gap-2">
		<h2 class="font-medium">Recent Writings</h2>
		<WritingList {writings} />
	</div>
</section>
