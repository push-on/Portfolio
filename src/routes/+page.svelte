<script>
  import Footer from "../components/Footer.svelte"
  import Hero from "../components/Hero.svelte"
  import MyWork from "../components/MyWork.svelte"
  import NavBar from "../components/NavBar.svelte"
</script>

<!-- Content -->
<div class="w-full px-4 pt-4 md:px-8 md:pt-8">
  <div class=" rounded-t-3xl relative bg-slate-950">
    <div class="absolute flex w-full h-full z-0">
      <div
        class="flex-1 background rounded-tl-3xl border-l-2 border-l-violet-800" />
      <div
        class="rounded-tr-3xl border-r-2 border-r-violet-600 flex-1 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-300 via-violet-700 to-indigo-950" />
    </div>
    <div class="flex flex-col z-50 relative">
      <Hero />
      <MyWork />
      <Footer />
      <NavBar />
    </div>
  </div>
</div>

<style>
  .background {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100%" height="100%" fill="url(%23pattern)" /><defs><pattern id="pattern" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="5" fill="rgba(255,255,255,0.1)" /></pattern></defs></svg>');
    background-size: 100px 100px;
    background-color: transparent;
  }
</style>
