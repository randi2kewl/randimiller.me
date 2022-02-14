<script>
    import Title from '../components/title.svelte';
</script>

<Title title="About me" />

<h2 id="welcome">Welcome</h2>
<p>Oh, hey there. Didn&#39;t see you come in.</p>
<p>
    Welcome to my little space on the internet. This is where I&#39;ll be blogging about productivity, startups, and technology. 
    This blog will be an intersection of everything that I learn and experiences that I have.
</p>

<hr>

<h2 id="who-am-i-">Who am I?</h2>
<p>
    My name is Randi Miller and I have been working in the tech industry for more than a decade now. 
    I have worked roles as a developer, team lead, director and consultant for startups and large organizations. 
    I currently provide CTO-level services for clients thru <a href="https://moderngeek.io">Modern Geek</a> 
    to help them get their products built.
</p>

<hr>

<h2 id="contact">Contact</h2>
<p>
    Feel free to reach out to me at <a href="mailto:randi@geekguy.co">randi@geekguy.co</a> for 
    any additional information.
</p>

<hr>

<h2 id="colophon">Colophon</h2>
<p>
    This site is built using <a href="https://svelte.dev">Svelte</a> and 
    <a href="kit.svelte.dev">Sveltekit</a>. You can find the sourcecode <a href="https://github.com/randi2kewl/randimiller.me">
     in my Github repo</a>.
</p>
<p>I alternate between VIM and Visual Studio Code as my IDE depending on my mood. Usually, VSC these days though unless I&#39;m working directly on a server.</p>

<hr>

<h2 id="personality-type">Personality Type</h2>
<p>I&#39;m an <a href="https://www.16personalities.com/entj-personality">ENTJ-T personality type</a>.</p>

<hr>

<h2 id="disclaimer">Disclaimer</h2>
<p>
    This is my personal blog. The opinions I express here do not necessarily represent those of my employer or clients. 
    The information I provide is on an as-is basis. I make no representations as to accuracy, completeness, 
    currentness, suitability, or validity of any information on this blog and will not be liable for any errors, 
    omissions, or delays in this information or any losses, injuries, or damages arising from its use.
</p>

<style lang="postcss">
	h2 {
		@apply text-2xl;
	}
</style>
