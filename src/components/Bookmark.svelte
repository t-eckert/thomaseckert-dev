<script lang="ts">
	export let description: string, link: string
</script>

<a
	href={link}
	target="blank_"
	rel="noopener noreferrer"
	class="font-medium transition underline decoration-2 decoration-rose-400 text-gray-900 hover:text-rose-600 hover:decoration-rose-500"
>
	{description}
</a>
