<script>
	import Repo from "../../components/Repo.svelte"
</script>

<section class="selection:bg-violet-600">
	<h2 class="font-semibold text-gray-900 text-2xl">Projects</h2>
	<div class="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
		<Repo
			name="Minnote"
			description="A small, local text editor for the web."
			repo="https://github.com/t-eckert/minnote"
			site="https://minnote.io/"
		/>
		<Repo
			name="50ph1a"
			description="VS Code Theme: It's snowing at night while you're coding."
			repo="https://github.com/t-eckert/50ph1a"
			site="https://marketplace.visualstudio.com/items?itemName=ThomasEckert.50ph1a"
		/>
	</div>
</section>
