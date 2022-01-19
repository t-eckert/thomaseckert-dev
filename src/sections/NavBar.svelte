<script>
	import Menu from "../components/Menu.svelte"
	import MenuButton from "../components/MenuButton.svelte"
	import PillLink from "../components/PillLink.svelte"

	const menuButtonBreakpoint = 840
	const links = [
		{
			name: "Writing",
			href: "/writing"
		},
		{
			name: "Bookmarks",
			href: "/bookmarks"
		},
		{
			name: "About",
			href: "/about"
		}
	]

	let pageWidth

	function toggleMenu(_) {
		menuIsOpen = !menuIsOpen
	}

	$: menuIsOpen = false
</script>

<svelte:window bind:innerWidth={pageWidth} />

<section
	class="z-10 sticky top-0 w-full border-b border-gray-50 bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg"
>
	<nav class="mx-auto max-w-6xl p-1 flex flex-row justify-between items-center">
		<PillLink href="/">Thomas Eckert</PillLink>
		{#if pageWidth < menuButtonBreakpoint}
			<div class="px-2 flex flex-row justify-end">
				<MenuButton on:click={toggleMenu} {menuIsOpen} />
				{#if menuIsOpen}
					<Menu>
						<div class="flex flex-col gap-1 items-end">
							{#each links as link}
								<PillLink href={link.href}>
									{link.name}
								</PillLink>
							{/each}
						</div>
					</Menu>
				{/if}
			</div>
		{:else}
			<div class="flex flex-row gap-1 items-center">
				{#each links as link}
					<PillLink href={link.href}>
						{link.name}
					</PillLink>
				{/each}
			</div>
		{/if}
	</nav>
</section>
