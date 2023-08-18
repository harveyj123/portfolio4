<template>
  <div
    class="h-screen w-screen bck-img flex justify-center items-center flex-col md:flex-row"
  >
    <div
      class="xs:w-[95%] xs:h-[60%] md:w-[70%] md:h-full flex justify-center flex-col md:m-2 lg:w-1/2 lg:h-[65%] lg:justify-start"
    >
      <h2 class="xs:text-3xl m-2 lg:text-7xl lg:my-4">Hello.</h2>
      <h1 class="xs:text-3xl m-2 lg:text-5xl lg:my-8">
        My name is Harvey Jiang.
      </h1>
      <p class="xs:text-lg m-2 lg:text-2xl lg:my-5">
        I am currently a freshman at the University at Buffalo studying computer
        science. I love tinkering with new tech and learning new skills to
        develop cool and interesting websites/software.
      </p>
      <p class="xs:text-lg m-2 lg:text-2xl lg:my-5">
        Outside of programming, I love trying new food out, playing badminton,
        and listing to music. If you have a song recommendation feel free to add
        it to my
        <NuxtLink
          to="https://open.spotify.com/playlist/1dlDEsCrTUKIsH1xfUckAv?si=797626b6c5614708&pt=63f3b717356a2c1bce5271017cafa062"
          target="_blank"
          class="font-bold lnk-hov"
          >public playlist</NuxtLink
        >
      </p>
      <div class="w-full xs:hidden sm:hidden lg:block">
        <NuxtLink to="https://github.com/harveyj123" aria-label="To see more go to my Github" target="_blank">
          <Icon class="m-6 xs:text-3xl icon-hov" name="bi:github"></Icon>
        </NuxtLink>
        <NuxtLink
          to="https://www.linkedin.com/in/harvey-jiang-557494234/"
          target="_blank"
        >
          <Icon class="m-6 xs:text-3xl icon-hov" aria-label="To see more go to my Linkedin" name="bi:linkedin"></Icon>
        </NuxtLink>
        <NuxtLink to="/contact" aria-label="link to my contact page">
          <Icon
            class="m-6 xs:text-3xl icon-hov"
            name="material-symbols:mail"
          ></Icon>
        </NuxtLink>
      </div>
    </div>
    <div
      class="border-2 lg:w-0 lg:h-full xs:h-0 xs:w-full sm:w-0 sm:h-full"
    ></div>
    <div
      class="xs:w-[95%] xs:h-[30%] md:h-full flex justify-center md:w-[30%] md:m-2 lg:w-[20] lg:h-1/2"
    >
      <div class="flex justify-evenly items-center">
        <div
          class="flex justify-center items-center flex-col xs:h-[100%] xs:w-[50%]"
        >
          <NuxtLink
            class="m-3 xs:text-2xl lnk-hov lg:text-3xl lg:my-5"
            v-for="link in navLinks"
            :to="`${link.name}`"
          >
            {{ link.des }}
          </NuxtLink>
          <NuxtLink
            class="m-3 xs:text-2xl lnk-hov lg:text-3xl lg:my-5"
            to="/resume.pdf"
            target="_blank"

            >Resume</NuxtLink
          >
        </div>
        <div
          class="flex justify-center items-center flex-col xs:h-[100%] xs:w-[50%] lg:hidden sm:flex xs:flex"
        >
          <NuxtLink to="https://github.com/harveyj123" target="_blank">
            <Icon class="m-3 xs:text-3xl icon-hov" aria-label="To see more go to my Github" name="bi:github"></Icon>
          </NuxtLink>
          <NuxtLink
            to="https://www.linkedin.com/in/harvey-jiang-557494234/"
            target="_blank"
          >
            <Icon class="m-3 xs:text-3xl icon-hov" aria-label="To see more go to my Linkdedin" name="bi:linkedin"></Icon>
          </NuxtLink>
          <NuxtLink to="/contact" aria-label="link to my Contact Page" target="_blank">
            <Icon
              class="m-3 xs:text-3xl icon-hov"
              name="material-symbols:mail"
            ></Icon>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "home",
});

interface navLinks {
  name: string;
  des: string;
}

const navLinks: Array<navLinks> = [
  { name: "projects", des: "Portfolio" },
  { name: "blog", des: "Blog" },
  { name: "contact", des: "Contact" },
];
// const navLinks2: Array<string> = ["portfolio", "resume","playlist" ,"contact"];

// let played = ref(false);
// let playButton = ref(true);

// let currDisplay = ref("none");
// let zIndex = ref("1");

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

.lnk-hov:hover,
.lnk-hov:active,
.lnk-hov:target {
  text-decoration: underline;
  scale: 1.2;
}

.icon-hov:hover,
.icon-hov:active,
.icon-hov:target {
  scale: 1.3;
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
    url("../assets/imgs/backround-img.png");

  /* background-image: url("imgs/backround-img.webp"); */
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
}
</style>
