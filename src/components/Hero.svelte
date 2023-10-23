<script>
  import Profile from "../components/Profile.svelte"
</script>

<div class=" flex justify-center items-center text-white py-20">
  <div class="w-full">
    <div class="flex justify-evenly flex-grow">
      <div class=" flex-1">
        <div class="px-6 sm:px-20 py-20">
          <div class="overflow-hidden py-4">
            <h2
              class="SlideDown text-amber-300 whitespace-nowrap duration-100 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
              Hi There, I'm
            </h2>
          </div>
          <div class="overflow-hidden py-4">
            <h1
              class="SlideDown duration-100 text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bold">
              Pushon
            </h1>
          </div>
          <div class="overflow-hidden py-4">
            <h2
              class="SlideDown text-amber-300 whitespace-nowrap duration-100 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
              Full Stack Devloper
            </h2>
          </div>
          <div class="overflow-hidden py-4">
            <p
              class="SlideDown max-w-[200px] sm:max-w-xs duration-100 text-sm sm:text-base lg:text-lg lg:font-medium">
              I am passionate about solving business problems through
              human-centered design. Curious by nature and business-minded.
            </p>
          </div>
        </div>
      </div>
      <div class="flex-1 flex justify-center items-center">
        <Profile />
      </div>
    </div>
    <div class="flex justify-evenly">
      <div class=" flex-1 flex justify-center items-center">
        <button>Reach Out To Me</button>
      </div>
      <div class="flex-1 flex justify-center items-center">
        <button>See My Work</button>
      </div>
    </div>
  </div>
</div>

<style>
  .SlideDown {
    animation-delay: 300ms;
    transform: translateY(-150%);
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
