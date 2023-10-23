<script>
  import "../app.css";
  import Bg from "../components/BG.svelte"
  import NavBar from "../components/NavBar.svelte"
</script>




<body class="w-full min-h-screen text-white ">
  <Bg />
  <div class="fixed h-screen">
    <NavBar />
  </div>
  
  <slot />
 
</body>