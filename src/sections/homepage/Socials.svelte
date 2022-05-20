<script>
	import ArrowRight from "src/components/icons/ArrowRight.svelte"
	import Link from "src/components/Link.svelte"
</script>

<section class="max-w-md flex flex-col gap-4 sm:pt-10">
	<p>
		You can also find me on <a
			href="https://twitter.com/thomaseckert_"
			target="blank_"
			rel="noopener noreferrer">Twitter</a
		>,
		<a href="https://github.com/t-eckert" target="blank_" rel="noopener noreferrer">GitHub</a>, and
		<a href="https://www.linkedin.com/in/thomas-eckert/" target="blank_" rel="noopener noreferrer"
			>LinkedIn</a
		>.
	</p>
	<p>
		The source code for this site is in
		<a
			href="https://github.com/t-eckert/thomaseckert-dev"
			target="blank_"
			rel="noopener noreferrer"
		>
			this repo
		</a>
		if you see something you'd like to borrow. It is built using SvelteKit, TailwindCSS, and deployed
		on Netlify.
	</p>
	<!-- <Link href="/about" resource="about">
		<div class="flex flex-row items-center gap-0.5 group">
			<div>About</div>
			<ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition text-yellow-500" />
		</div>
	</Link> -->
</section>
