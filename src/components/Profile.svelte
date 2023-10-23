<script>
  import myImg from "../assets/img-small.webp"
</script>

<div>
  <img
    loading="lazy"
    class="imageLoad shadow-2xl shadow-black/40 rounded-full duration-100 w-44 h-44 sm:w-52 sm:h-52 lg:w-96 lg:h-96"
    src={myImg}
    alt=""
    decoding="async" />
</div>

<style>
  .imageLoad {
    animation-delay: 400ms;
    opacity: 0;
    animation-name: opacity;
    animation-duration: 1.5s;
    animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
    animation-fill-mode: forwards;
  }

  @keyframes opacity {
    to {
      opacity: 1;
    }
  }
</style>
