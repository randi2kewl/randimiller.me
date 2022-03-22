<script>
	import Title from '../components/title.svelte';
</script>

<Title title="Important Links" />

<h2>Social</h2>

<ul class="bullet-list">
    <li>
        <a href="https://www.linkedin.com/in/randilmiller/">LinkedIn</a>
    </li>
</ul>


<style lang="postcss">
    h2 {
        @apply text-2xl;
    }

    .bullet-list {
        @apply list-disc pl-8;
    }
</style>
