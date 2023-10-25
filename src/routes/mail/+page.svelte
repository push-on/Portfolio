<script>
  import NavBar from "../../components/NavBar.svelte"
</script>

<div class="w-full h-screen px-4 pt-4 md:px-8 md:pt-8">
  <div class="rounded-t-3xl relative bg-slate-950">
    <div class="absolute flex w-full h-screen z-0">
      <div
        class="flex-1 background rounded-tl-3xl border-l-2 border-l-violet-800" />
      <div
        class="rounded-tr-3xl border-r-2 border-r-indigo-300 flex-1 bg-gradient-to-tr from-slate-950 via-indigo-950 to-violet-900" />
    </div>
    <div class="flex flex-col z-50 relative p-20">
      <article>
        <h1>Hello</h1>
      </article>
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
