<script>
    export let item = {
        title: "",
        logo: "",
        main: "",
    };

</script>

<a href="{item.link}">
    <div class="portfolio-item flex flex-col items-center rounded-lg overflow-hidden shadow hover:shadow-xl bg-gray-100">
        <img src="{item.main}" alt="{item.title} Portfolio" class="w-full h-auto">
        <img src="{item.logo}" alt="{item.title} Logo" class="w-auto h-6 m-1">
    </div>
</a>


<style lang="postcss">

</style>