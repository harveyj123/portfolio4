<template>
  <nav class="w-screen h border flex justify-evenly items-center text-xl font-mono fixed bg-white z-50 " >
    <nuxt-link class="w-1/6 hover:underline flex justify-center items-center cursor-pointer" to="/">HJ</nuxt-link>
    <nuxt-link class="w-1/12 hover:underline flex justify-center items-center cursor-pointer"  :to="`${link}`" v-for="link in navLinks">{{ link[0].toUpperCase() + link.substring(1, link.length)  }}</nuxt-link>
    <NuxtLink class="w-1/12 hover:underline flex justify-center items-center cursor-pointer" to="/resume.pdf" target="_blank" download="resume.pdf">Resume</NuxtLink>
  </nav>
</template>

<script setup lang="ts">
const navLinks: Array<string> = [
"blog","portfolio", "Contact"
]

</script>

<style scoped>
.h {
    height: 6vh;
}
</style>
