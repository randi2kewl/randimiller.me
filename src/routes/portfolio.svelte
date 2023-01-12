<script>
	import Title from '../components/title.svelte';
    import PortfolioItem from '../components/portfolio_item.svelte';

    const portfolio_items = [
        { title: "Kwalu", logo: "images/kwalu_logo.png", main: "images/kwalu.png", link: "/portfolio/kwalu", filters: ['web', 'backend', 'api', 'wordpress', 'php', 'css', 'vite', 'gulp', 'tailwind', 'javascript', 'database']},
        { title: "MoveHQ", logo: "images/barefoot_logo.png", main: "images/movehq.png", link: "", filters: ['api', 'backend', 'ruby', 'docker', 'php'] }, 
        { title: "Big Contacts", logo: "images/sureswift_logo.svg", main: "images/big_contacts.jpeg", link: "", filters: ['web', 'backend', 'frontend', 'leadership', 'php', 'symphony', 'css', 'javascript', 'database', 'mysql', 'docker'] }, 
        { title: "Mysite Auditor", logo: "images/sureswift_logo.svg", main: "images/mysiteauditor.png", link: "", filters: ['web', 'backend', 'frontend', 'leadership', 'php'] }, 
        { title: "MailParser", logo: "images/sureswift_logo.svg", main: "images/mailparser.png", link: "", filters: ['web', 'backend', 'frontend', 'leadership', 'php', 'javascript', 'docker'] },
        { title: "DocParser", logo: "images/sureswift_logo.svg", main: "images/docparser.png", link: "", filters: ['web', 'backend', 'frontend', 'leadership', 'php', 'javascript', 'docker'] },
        { title: "Store Mapper", logo: "images/sureswift_logo.svg", main: "images/storemapper.png", link: "", filters: ['web', 'backend', 'frontend', 'leadership', 'php'] },
        { title: "Feedback Panda", logo: "images/sureswift_logo.svg", main: "images/feedbackpanda.png", link: "", filters: ['web', 'app', 'backend', 'frontend', 'api', 'leadership', 'elixer'] },
        { title: "Jell", logo: "images/sureswift_logo.svg", main: "images/jell.png", link: "", filters: ['web', 'backend', 'frontend', 'api', 'leadership', 'javascript', 'nodejs'] },
        { title: "Who'd You?", logo: "images/thrust_logo.png", main: "images/whod-you-app.png", link: "", filters: ['app', 'backend', 'api', 'leadership', 'nosql', 'google cloud', 'python', 'wordpress'] },
        { title: "FanLabel", logo: "images/thrust_logo.png", main: "images/fanlabel.png", link: "", filters: ['web', 'app', 'frontend', 'leadership', 'google cloud', 'wordpress'] },    
        { title: "FanLabel", logo: "images/thrust_logo.png", main: "images/fanlabel_app.png", link: "", filters: ['web', 'app', 'backend', 'frontend', 'api', 'leadership', 'python', 'google cloud', 'database', 'nosql'] },
        { title: "Solohealth Mobile App", logo: "images/solohealth_logo.png", main: "images/solohealth_app.jpg", link: "", filters: ['app', 'backend', 'frontend', 'api', 'php', 'database', 'mysql'] },    
        { title: "Solohealth", logo: "images/solohealth_logo.png", main: "images/solohealth.png", link: "", filters: ['web', 'backend', 'frontend', 'api', 'database', 'php', 'javascript', 'mysql'] },    
        { title: "Solohealth", logo: "images/solohealth_logo.png", main: "images/solohealth_kiosk.png", link: "", filters: ['software', 'backend', 'frontend', 'api', 'database', 'php', 'javascript', 'mysql'] },    
    ];

    let filter_options = ['all'];

    portfolio_items.forEach((item) => {
        item.filters.forEach((f) => {
            if(!filter_options.includes(f)) {
               filter_options.push(f); 
            }
        });
    });

    let filter = 'all';

    const filterItems = (filter, portfolio_items) => 
        portfolio_items.filter(p => filter === 'all' || p.filters.includes(filter));

</script>

<Title title="Portfolio of Work" />

<div class="flex justify-end">
    <label for="filters">Filter on experience:</label>
    <select name="filters" id="filters" class="border ml-4" bind:value={filter}>
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
