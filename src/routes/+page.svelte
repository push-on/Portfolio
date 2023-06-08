<script>
  import Footer from "../components/Footer.svelte"
  import Hero from "../components/Hero.svelte"
  import MyWork from "../components/MyWork.svelte"
  import NavBar from "../components/NavBar.svelte"
</script>

<div class="w-full min-h-screen">
  <div class="w-full h-screen -z-10 fixed bg-black flex">
    <div class="bg-stone-900 w-full h-screen" />
    <div class="bg-amber-300 w-full h-screen" />
  </div>
  <div class="w-full flex flex-col">
    <NavBar />
    <div class="ml-0 lg:ml-20 pl-10 md:pl-20">
      <Hero />
      <MyWork />
    </div>
    <Footer />
  </div>
</div>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
