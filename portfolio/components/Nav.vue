<template>
  <!-- Main navigation container -->
  <nav
    class="z-30 flex w-full fixed flex-nowrap items-center justify-between bg-[#FFFFFF] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 lg:flex-wrap lg:justify-start lg:py-4"
  >
    <div class="flex w-full flex-wrap items-center justify-between px-3">
      <div class="ml-10">
        <NuxtLink class="text-xl text-neutral-800 hover:underline" to="/">HJ</NuxtLink>
      </div>
      <div class="ml-10 lg:hidden m-auto">
        <NuxtLink
          class="p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none lg:px-2 [&.active]:text-black/90"
          to="/resume.pdf"
          target="_blank"
          >Resume</NuxtLink
        >
      </div>
      <!-- Hamburger button for mobile view -->
      <button
        class="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"
        type="button"
        @click="showMenu = !showMenu"
      >
        <!-- Hamburger icon -->
        <span class="[&>svg]:w-7">
          <svg
            v-show="showMenu"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="h-7 w-7"
          >
            <path
              fill-rule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clip-rule="evenodd"
            />
          </svg>

          <Icon class="h-7 w-7" name="ep:close-bold" v-show="!showMenu"></Icon>
        </span>
      </button>

      <!-- Collapsible navbar container -->
      <div
        class="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
        id="navbarSupportedContent2"
      >
        <!-- Left links -->
        <ul
          class="list-style-none w-full flex flex-col pl-0 lg:flex-row justify-evenly items-center"
        >
          <!-- Home link -->
          <!-- <li class="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1" data-te-nav-item-ref>
            <NuxtLink
              class="active disabled:text-black/30 lg:px-2 [&.active]:text-black/90"
              aria-current="page"
              href="#"
              data-te-nav-link-ref
              >Home</NuxtLink
            >
          </li> -->

          <li
            v-for="link in navLinks"
            class="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1"
          >
            <NuxtLink
              class="p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none lg:px-2 [&.active]:text-black/90"
              :to="link"
              >{{ link }}</NuxtLink
            >
          </li>

          <li class="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1">      
            <NuxtLink
              class="p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none lg:px-2 [&.active]:text-black/90"
              to="
              /resume.pdf"
              target="_blank"
              >resume</NuxtLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class=" w-screen lg:hidden fixed border mt-11 z-30 bg-[#FFFFFF]">
    <div
      v-show="!showMenu"
      class="!visible mt-2 flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
      id="navbarSupportedContent2"
    >
      <!-- Left links -->
      <ul
        class="list-style-none w-full flex flex-col pl-0 lg:flex-row justify-evenly items-center"
      >
        <li v-for="link in navLinks" class="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1">
          <NuxtLink
            class="p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none lg:px-2 [&.active]:text-black/90"
            :to="link"
            >{{ link }}</NuxtLink
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const navLinks: Array<string> = ["blog", "projects", "experience", "contact"];
let showMenu = ref(true);
</script>

<style scoped>
.h {
  height: 6vh;
}
</style>
