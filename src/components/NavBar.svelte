<script>
  import { Home, Rocket, Info, UserCircle2 } from "lucide-svelte"
</script>

<div class="text-sm lg:text-xl fixed bottom-5 z-10 w-full flex justify-center items-center">
  <div
    class="w-[28rem] lg:w-[50rem] py-3 sm:p-5 animate-fade-up animate-delay-500 rounded-full uppercase font-semibold text-indigo-200 flex justify-evenly items-center bg-gradient-to-r from-black/60 via-slate-950/50 to-violet-950/50 shadow-xl shadow-black/30 backdrop-blur-3xl border-t-2 border-violet-400/70  overflow-y-auto">
    <a
      href="/"
      class="transform cursor-pointer w-fit h-fit py-2 px-3 lg:px-7 hover:text-white overflow-hidden">
      <span class="flex items-center space-x-2 animate-fade-left animate-delay-1000">
        <Home class="" />
        <p>Home</p>
      </span>
    </a>
    <a
      href="/"
      class="transform cursor-pointer w-fit h-fit py-2 px-3 lg:px-7 hover:text-white overflow-hidden ">
      <span class="flex items-center space-x-2 animate-fade-left animate-delay-1000"
        ><Rocket class="" />
        <p>Work</p></span>
    </a>
    <a
      href="/"
      class="transform cursor-pointer w-fit h-fit py-2 px-3 lg:px-7 hover:text-white overflow-hidden">
      <span class="flex items-center space-x-2 animate-fade-left animate-delay-1000"
        ><Info class="" />
        <p>About</p></span>
    </a>
    <a
      href="/"
      class="transform cursor-pointer w-fit h-fit py-2 px-3 lg:px-7 hover:text-white overflow-hidden">
      <span class="flex items-center space-x-2 animate-fade-left animate-delay-1000"
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
