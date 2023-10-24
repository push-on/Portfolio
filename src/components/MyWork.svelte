<script>
  const myWork = [
    {
      title: "Project 1",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
      techStack: "React, Node.js, MongoDB",
      imageSrc: "https://placehold.co/600x400/000000/FFFFFF/png",
    },
    {
      title: "Project 2",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
      techStack: "Angular, Express, PostgreSQL",
      imageSrc: "https://placehold.co/600x400/000000/FFFFFF/png",
    },
    {
      title: "Project 3",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
      techStack: "Vue.js, Ruby on Rails, MySQL",
      imageSrc: "https://placehold.co/600x400/000000/FFFFFF/png",
    },
  ]
</script>

<div>
  <div class="overflow-hidden py-4 px-6 sm:px-10 md:px-15 lg:px-20">
    <h1
      class="text-violet-100 animate-fade-down duration-100 text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-[9rem] font-bold">
      My Work
    </h1>
  </div>
  {#each myWork as project (project.title)}
    <div

      class="flex justify-center items-center text-white py-10">
      <div class="w-full">
        <div class="flex justify-evenly flex-grow">
          <div class="flex-1">
            <div class="px-6 sm:px-10 md:px-15 lg:px-20">
              <div class="overflow-hidden py-4">
                <h2
                  class="animate-fade-down tracking-wide whitespace-nowrap duration-100 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
                  {project.title}
                </h2>
              </div>
              <div class="overflow-hidden py-4">
                <p
                  class="text-violet-200 tracking-widest animate-fade-down max-w-[200px] sm:max-w-md duration-100 text-sm sm:text-base lg:text-lg lg:font-medium">
                  {project.description}
                </p>
              </div>
              <div class="overflow-hidden py-4">
                <p
                  class="text-violet-200 tracking-widest animate-fade-down max-w-[200px] sm:max-w-md duration-100 text-sm sm:text-base lg:text-lg lg:font-medium">
                  Tech Stack: {project.techStack}
                </p>
              </div>
            </div>
          </div>
          <div
            class="flex-1 flex justify-center items-center pr-2 sm:pr-3 lg:pr-0">
            <img
              class="animate-fade-down rounded-3xl w-4/5 lg:w-3/5"
              src={project.imageSrc}
              alt="" />
          </div>
        </div>
        <div class="flex justify-evenly py-20">
          <div class="flex-1 flex justify-center items-center">
            <button>View Work</button>
          </div>
          <div class="flex-1 flex justify-center items-center">
            <button>See Live Demo</button>
          </div>
        </div>
      </div>
    </div>
  {/each}
</div>
