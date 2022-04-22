<script>
	export let name, description, repo, site
	export let image = ""
</script>

<div class="flex flex-col border-violet-200 border rounded-md transition">
	{#if image !== ""}
		<div class="w-full">
			<img src={image} class="rounded-md rounded-b-none" alt="" />
		</div>
	{/if}

	<div class="p-3">
		<h3 class="mb-1 text-gray-900 font-medium">{name}</h3>
		<p class="mb-3 text-sm leading-4">{description}</p>

		<div class="flex flex-row gap-4">
			{#if repo}
				<a
					class="flex flex-row gap-1 items-center group text-sm"
					href={repo}
					rel="noopener noreferrer"
					target="blank_"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-4 w-4 text-gray-600  group-hover:text-violet-600 transition"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
						/>
					</svg>
					<span
						class="transition underline decoration-2 decoration-violet-400 group-hover:decoration-violet-500 group-hover:text-violet-600"
						>Repository</span
					>
				</a>
			{/if}
			{#if site}
				<a
					class="flex flex-row gap-1 items-center group text-sm"
					href={site}
					rel="noopener noreferrer"
					target="blank_"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-4 w-4 text-gray-600  group-hover:text-violet-600 transition"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
						/>
					</svg>
					<span
						class="transition underline decoration-2 decoration-violet-400 group-hover:decoration-violet-500 group-hover:text-violet-600"
						>Website</span
					>
				</a>
			{/if}
		</div>
	</div>
</div>
