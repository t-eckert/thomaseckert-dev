<script context="module">
	import fetchWritings from '../../actions/fetchWritings';

	export async function load() {
		const writings = await fetchWritings();
		return { props: { writings } };
	}
</script>

<script>
	import WritingList from '../../sections/WritingList.svelte';

	export let writings;
</script>

<section class="mx-auto mt-12 mb-16 flex flex-col gap-16 max-w-4xl">
	<header class="flex flex-col gap-4">
		<h1 class="font-semibold text-6xl text-gray-900">Writing</h1>
		<p class="text-sm text-gray-700">
			Here I share some of my thoughts and other things I've learned along the way.
		</p>
	</header>
	<WritingList {writings} />
</section>
