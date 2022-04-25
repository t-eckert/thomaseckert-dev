<script lang=ts>
	export let url: string, title: string, favicon: string
</script>

<div class="flex flex-col bg-gray-800 rounded-md shadow-2xl">
	<div class="pt-1 flex flex-col">
		<div class="px-1 flex flex-row justify-between">
			<div class="pl-2 h-6 w-44 flex flex-row gap-2 items-center bg-gray-600 rounded-t-md">
				<img class="h-4 w-4" src={favicon} alt="" />
				<span class="text-xs text-gray-100">{title}</span>
			</div>
		</div>
		<div class="px-3 py-2 flex flex-row items-center w-full h-8 bg-gray-600">
			<a
				class="py-1 px-3 w-full max-w-6xl rounded-xl text-white text-xs bg-gray-800"
				href={url}
				target="_blank"
				rel="noopener noreferrer"
			>
				{url}
			</a>
		</div>
	</div>
	<slot />
</div>
