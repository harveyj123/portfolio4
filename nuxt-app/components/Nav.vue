<template>
 <!-- <nav class="desk-nav">
  <NuxtLink to="/" id="home-btn">Harvey Jiang</NuxtLink>
  <ul class="link-wrapper">
   <NuxtLink to="/projects" class="nav-item-desk">Projects</NuxtLink>
   <NuxtLink to="mailto:harveyjiang11@gmail.com" class="nav-item-desk"
    >Contact</NuxtLink
   >
   <NuxtLink to="/resume-tech.pdf" class="nav-item-desk"
    >Resume</NuxtLink
   >
  </ul>
 </nav> -->

 <nav
  class="fixed z-50 flex flex-row w-full bg-primary ease-in-out duration-300 menu-container h-15"
  ref="menu-container"
 >
  <div id="logo">HJ</div>

  <div
   class="bg-primary flex flex-row justify-start items-center gap-x-10 p-3 z-40"
   ref="menu-options"
  >
   <NuxtLink to="/" class="text-white text-[0.8em] font-uni"
    >Home</NuxtLink
   >
   <NuxtLink to="/projects" class="text-black text-[0.8em] font-uni"
    >Projects</NuxtLink
   >
   <NuxtLink
    href="mailto:harveyjiang11@gmail.com"
    class="text-black text-[0.8em] font-uni"
    >Contact</NuxtLink
   >
  </div>
 </nav>
</template>

<script>
export default {
 name: "DeskNav",
};
</script>
<style scoped>
#logo {
 text-align: center;
 width: 20%;
 text-decoration: none;
 transition: all 0.4s;
 margin: 1rem 0;
 padding: 1rem 0;
 font-size: 1rem;
 color: #ca6e32;
 font-family: "Bungee", cursive;
 position: relative;
}
#logo::after {
 content: "";
 height: 4px;
 transform: scaleX(0);
 transition: transform 0.25s ease;
 transform-origin: left;
 left: 0;
 bottom: -4px;
 width: 100%;
 display: block;
 position: absolute;
}
#logo:hover::after {
 background-color: #ca6e32;
 transform: scaleX(1);
}
</style>
