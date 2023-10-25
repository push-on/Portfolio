<script>
  import myImg from "../assets/img-small.webp"
  import IntersectionObserver from "svelte-intersection-observer"
  import { twMerge } from "tailwind-merge"
  import { Github, Mail, Linkedin, Twitter, Instagram } from "lucide-svelte"
  let element
</script>

<div
  class=" sm:h-screen flex justify-center sm:items-center text-white pt-24 sm:pt-20">
  <div class="w-full space-y-10 sm:space-y-24">
    <IntersectionObserver {element} let:intersecting>
      <div bind:this={element} class="flex justify-evenly flex-grow">
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
                }  text-violet-200 tracking-widest  max-w-[200px] sm:max-w-md duration-100 text-xs sm:text-base lg:text-lg lg:font-medium`
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
                <li class="shadow-xl shadow-black">
                  <a href="https://github.com/push-on" target="_blank"
                    ><Github color="#c7d2fe" /></a>
                </li>
                <li class="shadow-xl shadow-black">
                  <a href="/" target="_blank"><Mail color="#c7d2fe" /></a>
                </li>
                <li class="shadow-xl shadow-black">
                  <a href="https://www.linkedin.com/in/pushon/" target="_blank"
                    ><Linkedin color="#c7d2fe" />
                  </a>
                </li>
                <li class="shadow-xl shadow-black">
                  <a href="https://twitter.com/pushon_art" target="_blank"
                    ><Twitter color="#c7d2fe" />
                  </a>
                </li>
                <li class="shadow-xl shadow-black">
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
                } shadow-2xl self-center  shadow-black/40 rounded-full duration-100 w-full  sm:w-52 sm:h-52 lg:w-96 lg:h-96`
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
          <button class="backdrop-blur-3xl">See My Work</button>
        </div>
        <div class=" flex-1 flex justify-center items-center">
          <button class="backdrop-blur-3xl">Reach Out To Me</button>
        </div>
      </div>
    </IntersectionObserver>
  </div>
</div>
