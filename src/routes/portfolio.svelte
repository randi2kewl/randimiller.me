<script>
	import Title from '../components/title.svelte';
    import PortfolioItem from '../components/portfolio_item.svelte';

    const portfolio_items = [
        { title: "Kwalu", logo: "images/kwalu_logo.png", main: "images/kwalu.png", link: "/portfolio/kwalu", filters: ['web', 'backend', 'api', 'wordpress', 'php', 'css']},
        { title: "MoveHQ", logo: "images/barefoot_logo.png", main: "images/movehq.png", link: "", filters: ['api', 'backend',] },    
        { title: "Big Contacts", logo: "images/sureswift_logo.svg", main: "images/big_contacts.jpeg", link: "", filters: ['web', 'backend', 'frontend'] },    
        { title: "Mysite Auditor", logo: "images/sureswift_logo.svg", main: "images/mysiteauditor.png", link: "", filters: ['web', 'backend', 'frontend'] },    
        { title: "MailParser", logo: "images/sureswift_logo.svg", main: "images/mailparser.png", link: "", filters: ['web', 'backend', 'frontend'] },    
        { title: "DocParser", logo: "images/sureswift_logo.svg", main: "images/docparser.png", link: "", filters: ['web', 'backend', 'frontend'] },    
        { title: "Store Mapper", logo: "images/sureswift_logo.svg", main: "images/storemapper.png", link: "", filters: ['web', 'backend', 'frontend'] },    
        { title: "Feedback Panda", logo: "images/sureswift_logo.svg", main: "images/feedbackpanda.png", link: "", filters: ['web', 'app', 'backend', 'frontend', 'api'] },    
        { title: "Jell", logo: "images/sureswift_logo.svg", main: "images/jell.png", link: "", filters: ['web', 'backend', 'frontend', 'api'] },    
        { title: "Who'd You?", logo: "images/thrust_logo.png", main: "images/whod-you-app.png", link: "", filters: ['app', 'backend', 'api'] },    
        { title: "FanLabel", logo: "images/thrust_logo.png", main: "images/fanlabel.png", link: "", filters: ['web', 'app', 'backend', 'frontend', 'api'] },    
        { title: "FanLabel", logo: "images/thrust_logo.png", main: "images/fanlabel_app.png", link: "", filters: ['web', 'app', 'backend', 'frontend', 'api'] },    
        { title: "Solohealth Mobile App", logo: "images/solohealth_logo.png", main: "images/solohealth_app.jpg", link: "", filters: ['app', 'backend', 'frontend', 'api'] },    
        { title: "Solohealth", logo: "images/solohealth_logo.png", main: "images/solohealth.png", link: "", filters: ['web', 'backend', 'frontend', 'api'] },    
        { title: "Solohealth", logo: "images/solohealth_logo.png", main: "images/solohealth_kiosk.png", link: "", filters: ['software', 'backend', 'frontend', 'api'] },    
    ];

    const filter_options = ['all', 'api', 'app', 'backend', 'frontend', 'web', 'ruby', 'php', 'database', 'wordpress', 'css'];

    let filter = 'all';

    const filterItems = (filter, portfolio_items) => 
        portfolio_items.filter(p => filter === 'all' || p.filters.includes(filter));

</script>

<Title title="Portfolio of Work" />

<div class="flex justify-end">
    <select name="filters" id="filters" bind:value={filter}>
        {#each filter_options.sort() as option}
        <option value="{option}">{option.charAt(0).toUpperCase() + option.slice(1)}</option> 
        {/each}
    </select>
</div>


<section class="grid grid-cols-3 gap-4 mt-8">
    {#each filterItems(filter, portfolio_items) as item}
        <PortfolioItem item={item} />        
    {/each}
</section>
