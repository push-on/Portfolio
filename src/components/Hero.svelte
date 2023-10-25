<script>
  import myImg from "../assets/img-small.webp"
  import IntersectionObserver from "svelte-intersection-observer"
  import toast, { Toaster } from "svelte-french-toast"

  import { twMerge } from "tailwind-merge"
  import {
    Github,
    Mail,
    Linkedin,
    Twitter,
    Instagram,
    Copy,
    X,
  } from "lucide-svelte"
  import { fly, fade } from "svelte/transition"
  let element
  let showModal = false
</script>

<!-- Modal -->
{#if showModal}
  <div
    in:fade={{ duration: 300 }}
    out:fade={{ duration: 300, delay: 300 }}
    class={` fixed top-0 left-0 w-full h-full bg-black/30 backdrop-blur-sm z-50 flex justify-center items-center`}>
    <!-- Modal for email -->
    <Toaster />
    <div
      in:fly={{ y: -200, duration: 300, delay: 300 }}
      out:fly={{ y: -200, duration: 300 }}
      class="space-y-4 border-x-2 border-indigo-400/50 backdrop-blur-3xl w-11/12 sm:w-1/2 rounded-3xl p-10 flex flex-col bg-slate-950/50 shadow-2xl shadow-black relative">
      <h1 class="text-3xl uppercase">My Email</h1>

      <div>
        <div class="relative">
          <input
            name="myemail"
            class="w-full input"
            disabled
            type="text"
            value="mh.imranhossain@gmail.com" />

          <button
            class="absolute right-0 py-2 px-3 sm:py-4 sm:px-5 text-slate-400 hover:text-white active:text-slate-400 duration-200 rounded-full outline-none border-none"
            on:click={() => {
              navigator.clipboard.writeText("mh.imranhossain@gmail.com")
              toast.success("Copied to clipboard")
            }}
            type="button"><Copy size={20} /></button>
        </div>
      </div>

      <button
        class="absolute right-4 top-0 p-1 sm:p-2 text-slate-400 hover:text-white active:text-slate-400 duration-200 rounded-full backdrop-blur-sm hover:bg-white/20"
        on:click={() => (showModal = false)}><X /></button>
    </div>
  </div>
{/if}

<div
  class=" sm:h-screen flex justify-center sm:items-center text-white pt-24 sm:pt-20">
  <div class="w-full space-y-10 sm:space-y-24">
    <IntersectionObserver {element} let:intersecting>
      <div bind:this={element} class="flex justify-evenly flex-grow">
        <!-- Left side -->
        <div class=" flex-1">
          <div class="px-2 sm:px-10 md:px-15 lg:px-20 py-2">
            <h2
              class={twMerge(
                ` ${
                  intersecting
                    ? "animate-fade-down animate-delay-100 "
                    : "animate-fade-up animate-reverse  "
                } tracking-wide text-amber-400 whitespace-nowrap text-base sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold`
              )}>
              Hi There, I'm
            </h2>
            <div class="overflow-hidden">
              <h1
                class={twMerge(
                  ` ${
                    intersecting
                      ? "animate-fade-down animate-delay-200 "
                      : "animate-fade-up animate-reverse "
                  }
                 text-violet-100 text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-[9rem] font-bold `
                )}>
                Pushon
              </h1>
            </div>
            <h2
              class={twMerge(
                ` ${
                  intersecting
                    ? "animate-fade-down animate-delay-300 "
                    : "animate-fade-up animate-reverse "
                } tracking-wide  text-amber-400 whitespace-nowrap duration-100 text-base sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold`
              )}>
              Full Stack Devloper
            </h2>
            <p
              class={twMerge(
                ` ${
                  intersecting
                    ? "animate-fade-down animate-delay-300 "
                    : "animate-fade-up animate-reverse "
                }  text-violet-200 tracking-widest  w-full sm:max-w-md duration-100 text-xs sm:text-base lg:text-lg lg:font-medium`
              )}>
              I am passionate about solving business problems through
              human-centered design. Curious by nature and business-minded.
            </p>
            <div
              class={twMerge(
                ` ${
                  intersecting
                    ? "animate-fade-down animate-delay-500"
                    : "animate-fade-up animate-reverse "
                } `
              )}>
              <ul
                class="flex justify-evenly sm:justify-start sm:gap-4 sm:px-2 space-x-2 py-2 my-2 sm:my-4">
                <li class="">
                  <a href="https://github.com/push-on" target="_blank"
                    ><Github color="#c7d2fe" /></a>
                </li>
                <li class="">
                  <div
                    role="button"
                    tabindex="0"
                    aria-label="email modal"
                    on:mousedown={() => {
                      console.log("clicked")
                      showModal = true
                      console.log(showModal)
                    }}
                    class="cursor-pointer">
                    <Mail color="#c7d2fe" />
                  </div>
                </li>
                <li class="">
                  <a href="https://www.linkedin.com/in/pushon/" target="_blank"
                    ><Linkedin color="#c7d2fe" />
                  </a>
                </li>
                <li class="">
                  <a href="https://twitter.com/pushon_art" target="_blank"
                    ><Twitter color="#c7d2fe" />
                  </a>
                </li>
                <li class="">
                  <a
                    href="https://www.instagram.com/pushon_art/"
                    target="_blank"
                    ><Instagram color="#c7d2fe" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="flex-1 flex justify-center items-center">
          <div>
            <img
              loading="lazy"
              class={twMerge(
                ` ${
                  intersecting
                    ? "animate-fade-down animate-delay-300"
                    : "animate-fade-up animate-reverse "
                } shadow-2xl  shadow-black/40 rounded-full duration-100 w-fit sm:w-52 sm:h-52 lg:w-96 lg:h-96 `
              )}
              src={myImg}
              alt=""
              decoding="async" />
          </div>
        </div>
      </div>

      <div
        class={twMerge(
          ` ${
            intersecting
              ? "animate-fade-down animate-delay-300"
              : "animate-fade-up animate-reverse "
          } flex justify-evenly `
        )}>
        <div class="flex-1 flex justify-center items-center">
          <button class="backdrop-blur-3xl btn">See My Work</button>
        </div>
        <div class=" flex-1 flex justify-center items-center">
          <button class="backdrop-blur-3xl btn">Reach Out To Me</button>
        </div>
      </div>
    </IntersectionObserver>
  </div>
</div>
