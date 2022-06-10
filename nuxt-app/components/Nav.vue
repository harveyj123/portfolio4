<template>
 <header class="header">
  <nav class="navbar">
   <!-- <a href="#" class="nav-logo">HJ</a> -->
   <ul
    class="nav-menu"
    :class="{ active: showMobileMenu }"
    @click="showMobileMenu = !showMobileMenu"
   >
    <li class="nav-item">
     <NuxtLink to="/" class="nav-link">About</NuxtLink>
    </li>
    <li class="nav-item">
     <NuxtLink to="/" class="nav-link">Projects</NuxtLink>
    </li>
    <li class="nav-item">
     <NuxtLink to="/" class="nav-link">Blog</NuxtLink>
    </li>
    <li class="nav-item">
     <NuxtLink to="/" class="nav-link">Resume</NuxtLink>
    </li>
   </ul>
   <div
    class="hamburger"
    :class="{ active: showMobileMenu }"
    @click="showMobileMenu = !showMobileMenu"
   >
    >
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
   </div>
  </nav>
 </header>
</template>

<script>
export default {
 name: "Nav",
 mounted() {},
 data() {
  return {
   showMobileMenu: false,
  };
 },
 methods: {
  closeMenu() {
   hamburger.classList.remove("active");
   navMenu.classList.remove("active");
  },
 },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,500;1,400&display=swap");

* {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}

html {
 font-size: 62.5%;
 font-family: "Roboto", sans-serif;
}

li {
 list-style: none;
}

a {
 text-decoration: none;
}
.header {
 position: fixed;
 right: 0;
 border-bottom: 1px solid #e2e8f0;
}

.navbar {
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 1rem 1.5rem;
}

.hamburger {
 display: none;
}

.bar {
 display: block;
 width: 25px;
 height: 3px;
 margin: 5px auto;
 -webkit-transition: all 0.3s ease-in-out;
 transition: all 0.3s ease-in-out;
 background-color: #101010;
}

.nav-menu {
 display: flex;
 justify-content: space-between;
 align-items: center;
}

.nav-item {
 margin-left: 5rem;
}

.nav-link {
 font-size: 1.6rem;
 font-weight: 400;
 color: #475569;
}

.nav-link:hover {
 color: #482ff7;
}

.nav-logo {
 font-size: 2.1rem;
 font-weight: 500;
 color: #482ff7;
}

.nav-menu {
 position: fixed;
 right: -100%;
 top: 5rem;
 flex-direction: column;
 background-color: #fff;
 width: 25%;
 height: 50%;
 border-radius: 10px;
 text-align: center;
 transition: 0.3s;
 box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
}

.nav-menu.active {
 right: 0;
}

.nav-item {
 margin: 2.5rem 0;
}

.hamburger {
 display: block;
 cursor: pointer;
}
.hamburger.active .bar:nth-child(2) {
 opacity: 0;
}

.hamburger.active .bar:nth-child(1) {
 transform: translateY(8px) rotate(45deg);
}

.hamburger.active .bar:nth-child(3) {
 transform: translateY(-8px) rotate(-45deg);
}
</style>
