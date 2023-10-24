<script>
  import IntersectionObserver from "svelte-intersection-observer"
  import { twMerge } from "tailwind-merge"
  const myWork = [
    {
      projectID: null,
      projectInt: null,
      title: "Project 1",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
      techStack: "React, Node.js, MongoDB",
      imageSrc: "https://placehold.co/600x400/000000/FFFFFF/png",
    },
    {
      projectID: null,
      projectInt: null,

      title: "Project 2",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
      techStack: "Angular, Express, PostgreSQL",
      imageSrc: "https://placehold.co/600x400/000000/FFFFFF/png",
    },
    {
      projectID: null,
      projectInt: null,

      title: "Project 3",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
      techStack: "Vue.js, Ruby on Rails, MySQL",
      imageSrc: "https://placehold.co/600x400/000000/FFFFFF/png",
    },
  ]

  let myWorkID
  let myWorkInt
</script>

<div>
  <IntersectionObserver element={myWorkID} bind:intersecting={myWorkInt}>
    <div class=" py-2 px-2 sm:px-10 md:px-15 lg:px-20">
      <h1
        bind:this={myWorkID}
        class={twMerge(
          ` ${
            myWorkInt
              ? "animate-fade-down animate-delay-300 "
              : "animate-fade-up animate-reverse  "
          } text-violet-100 text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-[9rem] font-bold`
        )}>
        My Work
      </h1>
    </div>
  </IntersectionObserver>
  {#each myWork as project (project.title)}
    <IntersectionObserver
      element={project.projectID}
      bind:intersecting={project.projectInt}>
      <div
        bind:this={project.projectID}
        class="flex justify-center items-center text-white">
        <div class="w-full">
          <div class="flex justify-evenly flex-grow">
            <div class="flex-1">
              <div class="px-2 sm:px-10 md:px-15 lg:px-20">
                <div class="overflow-hidden py-4">
                  <h2
                    class={twMerge(
                      ` ${
                        project.projectInt
                          ? "animate-fade-down animate-delay-300 "
                          : "animate-fade-up animate-reverse  "
                      } tracking-wide whitespace-nowrap text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold`
                    )}>
                    {project.title}
                  </h2>
                </div>
                <div class="overflow-hidden py-4">
                  <p
                    class={twMerge(
                      ` ${
                        project.projectInt
                          ? "animate-fade-down animate-delay-300 "
                          : "animate-fade-up animate-reverse  "
                      }text-violet-200 tracking-widest max-w-[200px] sm:max-w-md text-sm sm:text-base lg:text-lg lg:font-medium`
                    )}>
                    {project.description}
                  </p>
                </div>
                <div class="overflow-hidden py-4">
                  <p
                    class={twMerge(
                      ` ${
                        project.projectInt
                          ? "animate-fade-down animate-delay-300 "
                          : "animate-fade-up animate-reverse  "
                      }text-violet-200 tracking-widest max-w-[200px] sm:max-w-md text-sm sm:text-base lg:text-lg lg:font-medium`
                    )}>
                    Tech Stack: {project.techStack}
                  </p>
                </div>
              </div>
            </div>
            <div
              class="flex-1 flex justify-center items-center pr-2 sm:pr-3 lg:pr-0">
              <img
                class={twMerge(
                  ` ${
                    project.projectInt
                      ? "animate-fade-down animate-delay-300 "
                      : "animate-fade-up animate-reverse  "
                  }rounded-3xl w-4/5 lg:w-3/5`
                )}
                src={project.imageSrc}
                alt="" />
            </div>
          </div>
          <div
            class={twMerge(
              ` ${
                project.projectInt
                  ? "animate-fade-down animate-delay-300 "
                  : "animate-fade-up animate-reverse  "
              }flex justify-evenly py-20`
            )}>
            <div class="flex-1 flex justify-center items-center">
              <button>View Work</button>
            </div>
            <div class="flex-1 flex justify-center items-center">
              <button>See Live Demo</button>
            </div>
          </div>
        </div>
      </div>
    </IntersectionObserver>
  {/each}
</div>
