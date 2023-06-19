<template>
  <div class="h-screen w-screen bck-img flex justify-center items-center">
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
          <NuxtLink class="text-2xl underline h-1/4 flex justify-start items-center">
            Resume
          </NuxtLink>

          <NuxtLink to="/projects" class="text-2xl underline h-1/4 flex justify-start items-center">
            Portfolio
          </NuxtLink>
          <NuxtLink  to="/playlist" class="text-2xl underline h-1/4 flex justify-start items-center">
            My playlist
          </NuxtLink>
          <NuxtLink  to="" class="text-2xl underline h-1/4 flex justify-start items-center">
            Add your Music recomendation
          </NuxtLink>
        </ul>
        <div class="relative h-full w-1/2">
          <nuxt-picture
            @mouseover="showPlayButton()"
            @mouseleave="hidePlayButton()"
            @click="playMusic"
            class="hov absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
            fit="inside"
            height="750"
            src="/imgs/album-img.jpg"
          ></nuxt-picture>
          <Icon
            v-if="playButton"
            :style="{ display: currDisplay, }"
            class="right-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-20 w-20 play"
            name="material-symbols:play-circle"
          />
          <Icon
            v-else
            :style="{ display: currDisplay }"
            class="right-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-20 w-20 play"
            name="material-symbols:pause-circle"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "home",
});
let played = ref(false);
let playButton = ref(true);

let currDisplay = ref("none");

let audio;

onMounted(() => {
  audio = new Audio("/music/suzume.opus");
  audio.loop = false; // path to file
  audio.volume = 0.3;
})

function playMusic() {

  if (played.value === false) {
    playButton.value = false;
    played.value = true;
    audio.play();

  } 
  else {
    playButton.value = true;
    played.value = false;
    audio.pause();
  }
}

function showPlayButton() {
  currDisplay.value = "";
}

function hidePlayButton() {
  currDisplay.value = "none";
}
</script>

<style scoped>
.hov:hover {
  opacity: 0.8;
}

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
