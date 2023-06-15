<template>
  <nav class="w-screen h border flex justify-center items-center text-xl font-mono" >
    <nuxt-link class="w-1/6 hover:underline flex justify-center items-center cursor-pointer" >HJ</nuxt-link>
    <nuxt-link class="w-1/12 hover:underline flex justify-center items-center cursor-pointer" v-for="link in navLinks">{{ link }}</nuxt-link>
  </nav>
</template>

<script setup lang="ts">
const navLinks: Array<string> = [
"About","Projects","Experince", "Contact"
]

</script>

<style scoped>
.h {
    height: 6vh;
}
</style>
