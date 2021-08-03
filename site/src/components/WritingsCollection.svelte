<script>
    const writings = [
        {
            title: "Changing Directory with a Python Context Manager",
            date: "4 January 2021",
        }
    ]
</script>

<section>
    {#each writings as writing}
        <div>{writing.title}</div>
    {/each}
</section>
