<script>
	import ArrowRight from "src/components/icons/ArrowRight.svelte"
	import Link from "src/components/Link.svelte"
</script>

<section class="max-w-md flex flex-col gap-4 sm:pt-10">
	<p>
		You can also find me on <Link href="https://twitter.com/thomaseckert_">Twitter</Link>,
		<Link href="https://github.com/t-eckert">GitHub</Link>, and
		<Link href="https://www.linkedin.com/in/thomas-eckert/">LinkedIn</Link>.
	</p>
	<p>
		The source code for this site is in
		<Link href="https://github.com/t-eckert/thomaseckert-dev">this repo</Link>
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
