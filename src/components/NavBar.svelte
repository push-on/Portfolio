<script>
  import { Home, Rocket, Info, UserCircle2 } from "lucide-svelte"
</script>

<div
  class=" uppercase font-semibold text-indigo-200 w-16 bg-gray-800 h-screen flex flex-col justify-evenly items-center bg-gradient-to-r from-black via-indigo-950 to-violet-900 border-r border-violet-600 text-xl overflow-y-auto">
  <a
    href="/"
    class="transform rotate-90 cursor-pointer w-fit h-fit py-2 px-7 hover:text-white overflow-hidden">
    <span class="flex items-center space-x-2 SlideDown">
      <Home class="-rotate-90" />
      <p>Home</p>
    </span>
  </a>
  <a
    href="/"
    class="  transform rotate-90 cursor-pointer w-fit h-fit py-2 px-7 hover:text-white overflow-hidden">
    <span class="flex items-center space-x-2 SlideDown"
      ><Rocket class="-rotate-90" />
      <p>Work</p></span>
  </a>
  <a
    href="/"
    class="  transform rotate-90 cursor-pointer w-fit h-fit py-2 px-7 hover:text-white overflow-hidden">
    <span class="flex items-center space-x-2 SlideDown"
      ><Info class="-rotate-90" />
      <p>About</p></span>
  </a>
  <a
    href="/"
    class=" transform rotate-90 cursor-pointer w-fit h-fit py-2 px-7 hover:text-white overflow-hidden">
    <span class="flex items-center space-x-2 SlideDown"
      ><UserCircle2 class="-rotate-90" />
      <p>Contact</p></span>
  </a>
</div>

<style lang="css">
  a {
    transition: text-shadow 0.3s ease-in-out, color 0.3s ease-in-out;
  }
  a:hover {
    text-shadow: rgb(252 211 77) 0 0 20px;
  }
  .SlideDown {
    animation-delay: 100ms;
    transform: translateX(-150%);
    animation-name: slideDown;
    animation-duration: 1.5s;
    animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
    animation-fill-mode: forwards;
  }

  @keyframes slideDown {
    to {
      transform: translate(0);
    }
  }
</style>
