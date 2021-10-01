<script context="module">
	import fetchWritings from '../actions/fetchWritings';

  export async function load() {
		const writings = await fetchWritings()
    return { props: { writings }}
  }
</script>

<script>
	import Introduction from "../sections/Introduction.svelte";
	import WritingList from "../sections/WritingList.svelte"

	export let writings
</script>

<svelte:head>
	<title>Thomas Eckert</title>
</svelte:head>

<section class="mx-auto pt-12 max-w-3xl flex flex-col gap-8">
	<Introduction/>
	<WritingList {writings}/>
</section>