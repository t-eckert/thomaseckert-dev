<script lang="ts">
	import Menu from "../components/Menu.svelte"
	import MenuButton from "../components/MenuButton.svelte"
	import NavLinks from "../sections/NavLinks.svelte"

	const menuButtonBreakpoint = 840

	let pageWidth:number

	function toggleMenu(_: any) {
		menuIsOpen = !menuIsOpen
	}

	$: menuIsOpen = false
</script>

<svelte:window bind:innerWidth={pageWidth} />

<section
	class="z-50 sticky top-0 w-full border-b border-gray-50 bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg"
>
	<nav class="mx-auto max-w-6xl p-1 flex flex-row justify-between items-center">
		<a
			href="/"
			class="text-sm font-medium text-gray-700 animate hover:text-gray-900 decoration-transparent hover:decoration-transparent"
		>
			Thomas Eckert
		</a>
		{#if pageWidth < menuButtonBreakpoint}
			<div class="px-2 flex flex-row justify-end">
				<MenuButton on:click={toggleMenu} {menuIsOpen} />
				{#if menuIsOpen}
					<Menu>
						<div class="flex flex-col gap-1 items-end">
							<NavLinks />
						</div>
					</Menu>
				{/if}
			</div>
		{:else}
			<div class="flex flex-row gap-4 items-center text-sm font-medium text-gray-600">
				<NavLinks />
			</div>
		{/if}
	</nav>
</section>
