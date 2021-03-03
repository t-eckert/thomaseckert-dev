<template>
    <div class="container about">
        <h1>Hi 👋</h1>
        <p>
            My name is Thomas Eckert. I live in Seattle, Washington with my
            wife,
            <a target="_blank" href="https://sophiaross.me/">Sophia</a>, and our
            corgi, Winona.
        </p>
        <p>
            I studied physics, focusing on nuclear interactions for fusion
            diagnostics. Much of this work involved programming simulations in
            C++. I wrote a
            <a
                target="_blank"
                href="https://www.houghton.edu/wp-content/uploads/2019/02/physics-thesis-thomas-eckert-2016.pdf"
                >thesis</a
            >
            and a
            <a target="_blank" href="https://arxiv.org/pdf/1707.09375.pdf"
                >paper</a
            >
            about it.
        </p>
        <p>
            After completing my Masters of Physics at the University of
            Rochester, I moved to Seattle and started working at Microsoft as an
            engineer. Today, I build platform tooling for defining SLOs on
            Azure.
        </p>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "About",

    components: {},

    async asyncData() {},

    mounted() {
        this.$store.commit("ui/SET_BREADCRUMBS", [
            { emoji: "🏡", name: "Home", link: "/" },
            { emoji: "👋", name: "About", link: "/" },
        ]);
    },
});
</script>
