<script lang="ts">
	import { page } from "$app/stores"

	type Link = {
		name: string
		href: string
		class: string
	}

	const links: Link[] = [
		{
			name: "Writing",
			href: "/writing",
			class: "hover:text-sky-600 transition"
		},
		{
			name: "Bookmarks",
			href: "/bookmarks",
			class: "hover:text-rose-600 transition"
		},
		{
			name: "Notes",
			href: "/notes",
			class: "hover:text-emerald-600 transition"
		},
		{
			name: "Projects",
			href: "/projects",
			class: "hover:text-violet-600 transition"
		},
		{
			name: "About",
			href: "/about",
			class: "hover:text-yellow-600 transition"
		}
	]
</script>

{#each links as link}
	<a href={link.href} class={link.class}>
		{link.name}
	</a>
{/each}
