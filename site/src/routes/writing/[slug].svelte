<script context="module">
	import fetchWriting from '../../actions/fetchWriting';

  export async function load({page}) {
		const writing = await fetchWriting(page.params.slug)
    return { props: { writing }}
  }
</script>

<script>
	export let writing
</script>

<p>
	{writing[0].content}
</p>