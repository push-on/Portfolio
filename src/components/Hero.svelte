<script>
  import Profile from "../components/Profile.svelte"
</script>

<div
  class="h-screen flex flex-col justify-center text-white">
  <div class="flex">
    <div class="flex-grow flex flex-col justify-center">
      <h2 class="text-amber-300 whitespace-nowrap">Hi There, I'm</h2>
      <h1 class=" ">Pushon</h1>
      <h2 class="text-amber-300 whitespace-nowrap">Full Stack Devloper</h2>
      <p class=" max-w-[200px] sm:max-w-xs">
        I am passionate about solving business problems through human-centered
        design. Curious by nature and business-minded.
      </p>
      <div class="flex mt-16 lg:mt-40">
        <button class="bg-amber-300 text-black">Reach Out To Me</button>
      </div>
    </div>
    <Profile />
  </div>
</div>
