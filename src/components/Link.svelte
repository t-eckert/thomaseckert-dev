<script lang="ts">
	type LinkStyle = "none" | "external" | "writing" | "bookmarks" | "notes" | "projects" | "about"

	const classStyle = (style: LinkStyle): string => {
		switch (style) {
			case "none":
				return "decoration-gray-700"
			case "external":
				return "decoration-sky-600"
			case "writing":
				return "decoration-rose-600"
			case "bookmarks":
				return "decoration-emerald-600"
			case "notes":
				return "decoration-violet-600"
			case "projects":
				return "decoration-yellow-600"
			case "about":
				return "decoration-gray-600"
		}
	}

	export let href: string,
		style: LinkStyle = "none"
</script>

<a
	{href}
	class={`font-medium underline decoration-2  text-gray-900  transition ${classStyle(style)}`}
>
	<slot />
</a>
