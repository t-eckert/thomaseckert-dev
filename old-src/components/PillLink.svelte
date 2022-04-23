<script>
	export let href
</script>

<a
	class="text-sm font-medium px-2 py-0.5 rounded-full text-gray-700 animate hover:text-gray-900 decoration-transparent hover:decoration-transparent"
	{href}
>
	<slot />
</a>
