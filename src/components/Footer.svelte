<script>
  export let year = new Date().getFullYear()
</script>

<footer
  class="mt-20 h-64 w-full bg-black/10 backdrop-blur-3xl text-white flex items-center justify-center border-t-2 border-white/30">
  <div class="text-center">
    <p>&copy; {year} My Portfolio. All rights reserved.</p>
    <p>Created with Tailwind CSS and Svelte</p>
  </div>
</footer>
