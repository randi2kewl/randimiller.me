<script>
    import Header from '../components/header.svelte';
    import Footer from '../components/footer.svelte';
    import Sidebar from '../components/sidebar.svelte';
</script>

<Header/>

<div class="flex flex-wrap max-w-screen-lg mx-auto">
        <Sidebar/>
        <main class="w-full sm:w-3/4">
            <slot></slot>
        </main>
</div>

<Footer/>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

    :global(body) {
        @apply font-sans text-gray-700;
    }

    :global(p) {
        @apply my-4;
    }

    :global(hr) {
        @apply w-28 mx-auto my-16 border-t-2 border-gray-300;
    }

    :global(a) {
        color: rgb(93, 147, 255);
    }

    :global(a:hover) {
        color: orange;
    }
</style>
