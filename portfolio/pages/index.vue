<template>
  <div class="h-screen w-screen bck-img flex justify-center items-center overflow-auto">
    <!-- <nuxt-picture src="/imgs/backround-img.webp"></nuxt-picture> -->
    <div class="h-[90%] lg:w-[75%] xs:w-[90%]">
        <div class="h-[40%]   flex flex-col justify-evenly items-start">
      <h1 class="lg:text-6xl md:text-3xl sm:text-4xl  xs:text-3xl h-1/6 items-center flex">Harvey Jiang,</h1>
      <h2 class="lg:text-4xl md:text-xl sm:text-xl xs:text-sm  items-top h flex">
         Developer and Freshman at University at Buffalo
      </h2>
      <p class="lg:text-2xl  md:text-sm sm:text-lg xs:text-sm my-4 w-full">
        Meet Harvey, A full stack developer who loves tinkering with new tech
        and is currently trying to build the next big thing. In his free time
        you might spot him roaming the streets trying new food, playing
        basketball, reading webtoons, or finding his next favorite song.
      </p>
    </div>
      <div class="h-[60%] w-full flex">
        <ul class="h-full w-1/4 xs:w-full">
          <li
            class="text-3xl underline h-1/4 flex lg:justify-start  items-center"
            v-for="link in navLinks"   
          >
            <NuxtLink :to="`${link.name}`">
              {{ link.des }}
            </NuxtLink>
          </li>

          <!-- <NuxtLink
            to="/projects"
            class="text-2xl underline h-1/4 flex justify-start items-center"
          >
            Portfolio
          </NuxtLink>
          <NuxtLink
            to="/playlist"
            class="text-2xl underline h-1/4 flex justify-start items-center"
          >
            My playlist
          </NuxtLink>
          <NuxtLink
            to=""
            class="text-2xl underline h-1/4 flex justify-start items-center"
          >
            Add your Music recomendation
          </NuxtLink> -->
        </ul>
        <div class=" h-full lg:h-full w-[75%]  xs:w-0  flex flex-col justify-center items-center">
            <img src="/imgs/album-img.jpg"  class="img sm:block xs:hidden " alt="">
          <audio controls class="lg:w-[70%] md:w-[80%] sm:w-[50%] sm:block xs:hidden  ">
            <source src="/music/suzume.opus">
        </audio>
        </div>


      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "home",
});

const navLinks: Array<object> = [{name: "portfolio",
des: "Explore my portfolio"},{name: "resume",
des: "Resume"},{name: "playlist",
des: "Listen to my favorite songs"},{name: "contact",
des: "Contact me through email or here"}];
  // const navLinks2: Array<string> = ["portfolio", "resume","playlist" ,"contact"];

// let played = ref(false);
// let playButton = ref(true);

// let currDisplay = ref("none");
// let zIndex = ref("1")

// let audio: any;

// onMounted(() => {
//   audio = new Audio("/music/suzume.opus");
//   audio.loop = false; // path to file
//   audio.volume = 0.3;
// });

// onBeforeRouteLeave((to, from) => {
//   audio.pause();
// });

// function playMusic() {
//   if (played.value === false) {
//     playButton.value = false;
//     played.value = true;
//     audio.play();
//   } else {
//     playButton.value = true;
//     played.value = false;
//     audio.pause();
//   }
// }

// function playMusicBtn() {
//   if (played.value === false) {
//     playButton.value = false;
//     played.value = true;
//     currDisplay.value = "";
//     audio.play();
//   } else {
//     playButton.value = true;
//     currDisplay.value = "";
//     played.value = false;
//     audio.pause();
//   }
// }

// function showPlayButton() {
//   currDisplay.value = "";
// }

// function hidePlayButton() {
//   currDisplay.value = "none";
// }
</script>

<style scoped>
.hov:hover {
  opacity: 0.8;
}

.img {
  max-width: 40%;
height: auto;
  /* height: 33.625rem;
  width: 27.5rem; */

}


/* 
audio::-webkit-media-controls-panel {
width: 60%;
} */



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
