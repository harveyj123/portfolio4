<template>
  <div class="h-screen w-screen bck-img flex justify-center items-center ">
    <!-- <nuxt-picture src="/imgs/backround-img.webp"></nuxt-picture> -->
    <div class="h-3/4 w-2/3">
      <h1 class="text-6xl h-1/6 items-center flex">Harvey Jiang,</h1>
      <h2 class="text-2xl items-top h flex">
        Full Stack Developer and Freshman at University at Buffalo
      </h2>
      <p class="text-xl my-4 w-full">
        Meet Harvey, A full stack developer who loves tinkering with new tech
        and is currently trying to build the next big thing. In his free time
        you might spot him roaming the streets trying new food, playing
        basketball, reading webtoons, or finding his next favorite song.
      </p>
      <div class="h-1/2 w-full flex">

        <ul class="h-full w-1/2">
          <li class="text-2xl underline h-1/4 flex justify-start items-center">
            Resume
          </li>
          <li class="text-2xl underline h-1/4 flex justify-start items-center">
            Portfolio
          </li>
          <li class="text-2xl underline h-1/4 flex justify-start items-center">
            My playlist
          </li>
          <li class="text-2xl underline h-1/4 flex justify-start items-center">
            Add your Music recomendation
          </li>
        </ul>
        <div class="flex justify-center items-center w-1/2">
          <nuxt-picture fit="inside"  height="700" src="/imgs/album-img.jpg"></nuxt-picture>
      </div>
    </div>

    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "home",
});
</script>

<style scoped>
.h {
  height: 10%;
  width: 100%;
}

.bck-img {
  background: linear-gradient(#fafafaee, hsla(0, 0%, 98%, 0.884)),
    url("imgs/backround-img.png");

  /* background-image: url("imgs/backround-img.webp"); */
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
}



</style>
