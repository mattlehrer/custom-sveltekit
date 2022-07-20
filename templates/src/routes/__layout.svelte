<script>
	import Footer from '$lib/Footer.svelte';
	import Nav from '$lib/Nav.svelte';

	import '../app.css';
</script>

<Nav />

<!-- This div is so that the grid layout pins the footer to the bottom of the page even if the content is shorter than the page. -->
<div>
	<slot />
</div>

<Footer />
