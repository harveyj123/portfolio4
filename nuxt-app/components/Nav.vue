<template>
 <div class="nav">
  <!-- <input type="checkbox" id="nav-check" /> -->
  <div class="nav-title">HJ</div>

  <!-- <div class="nav-btn">
   <label for="nav-check">
    <span></span>
    <span></span>
    <span></span>
   </label>
  </div> -->

  <div class="nav-links">
   <NuxtLink to="/" class="links">Home</NuxtLink>
   <NuxtLink to="mailto:harveyjiang11@gmail.com" class="links"
    >Contact</NuxtLink
   >
   <!-- <NuxtLink href="#" class="links">Blog</NuxtLink> -->
   <NuxtLink
    to="/resume-tech.pdf"
    class="links"
    target="_blank"
    id="bold-link"
    >Resume</NuxtLink
   >
  </div>
 </div>
</template>

<script>
export default {
 name: "Nav",
 mounted() {},
 data() {
  return {
   //    showMobileMenu: false,
  };
 },
};
</script>

<style scoped>
.nav {
 display: flex;
 height: 5vh;
 width: 100vw;
 background-color: #4d4d4d;
 position: fixed;
 z-index: 999;
 color: white;
 align-content: center;
 justify-content: center;
 display: flex;
}

.links {
 text-decoration: none;
 color: white;
 height: 100%;
 align-items: center;
 justify-content: center;
 display: flex;
 width: 10%;
 border-radius: 2rem;
}
#bold-link {
 background-color: navy;
}
#bold-link:hover {
 scale: 1.05;
}
.links:hover {
 background-color: black;
}
.nav-links {
 justify-content: flex-end;
 display: flex;
 align-items: center;
 width: 90%;
 height: 100%;
}
.nav-title {
 height: 100%;
 background-color: black;
 width: 4%;
 align-items: center;
 justify-content: center;
 display: flex;
 border-radius: 2rem;
}
</style>
