<script>
  import { Rocket, Info, UserCircle2 } from "lucide-svelte"
  import { onMount } from "svelte"

  let navbar
  let lastScrollY = 0
  let hidden = false

  onMount(() => {
    navbar = document.getElementById("navbar")
    window.addEventListener("scroll", handleScroll)
  })

  function handleScroll() {
    let currentScrollY = window.scrollY
    if (currentScrollY > lastScrollY) {
      hidden = true
    } else {
      hidden = false
    }
    lastScrollY = currentScrollY
  }
</script>

<div
  id="navbar"
  class={`text-xm xl:text-xl fixed self-center top-8 md:top-12 z-10 w-[90%] flex justify-center items-center
  transition-all duration-500 ease-in-out
  ${hidden ? "-translate-y-96" : ""}`}>
  <div
    class="w-[28rem] xl:w-[50rem] py-2 px-2 sm:p-5 animate-fade-down animate-delay-300 rounded-full uppercase font-semibold text-indigo-200 flex justify-evenly items-center bg-gradient-to-r from-black/50 via-slate-950/40 to-violet-950/40 shadow-2xl shadow-black/40 backdrop-blur-3xl border-b-2 border-violet-400/70 overflow-y-auto">
    <a
      href="/"
      class="transform cursor-pointer w-fit h-fit py-2 px-3 xl:px-7 hover:text-white overflow-hidden">
      <span
        class="flex items-center space-x-2 animate-fade-right animate-delay-1000"
        ><Info class="" />
        <p>About</p></span>
    </a>

    <a
      href="/"
      class="transform cursor-pointer w-fit h-fit py-2 px-3 xl:px-7 hover:text-white overflow-hidden">
      <span
        class="flex items-center space-x-2 animate-fade-right animate-delay-1000"
        ><Rocket class="" />
        <p>Work</p></span>
    </a>

    <a
      href="/"
      class="transform cursor-pointer w-fit h-fit py-2 px-3 xl:px-7 hover:text-white overflow-hidden">
      <span
        class="flex items-center space-x-2 animate-fade-right animate-delay-1000"
        ><UserCircle2 class="" />
        <p>Contact</p></span>
    </a>
  </div>
</div>

<style lang="css">
  a {
    transition: text-shadow 0.3s ease-in-out, color 0.3s ease-in-out;
  }
  a:hover {
    text-shadow: rgb(252 211 77) 0 0 20px;
  }
</style>
