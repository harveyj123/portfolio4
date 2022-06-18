<template>
 <div class="footer-cont">
  <ul class="link-list">
   <NuxtLink
    class="link-list-inner-cont"
    to="https://github.com/harveyj123"
    target="_blank"
   >
    <svg
     xmlns="http://www.w3.org/2000/svg"
     class="icon"
     viewBox="0 0 512 512"
    >
     <path
      d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"
     ></path>
    </svg>
    <h3 class="svg-label">Github</h3>
   </NuxtLink>
   <NuxtLink
    class="link-list-inner-cont"
    to="mailto:harveyjiang11@gmail.com"
   >
    <svg
     xmlns="http://www.w3.org/2000/svg"
     class="icon"
     viewBox="0 0 512 512"
    >
     <path
      d="M332.64 64.58C313.18 43.57 286 32 256 32c-30.16 0-57.43 11.5-76.8 32.38-19.58 21.11-29.12 49.8-26.88 80.78C156.76 206.28 203.27 256 256 256s99.16-49.71 103.67-110.82c2.27-30.7-7.33-59.33-27.03-80.6zM432 480H80a31 31 0 01-24.2-11.13c-6.5-7.77-9.12-18.38-7.18-29.11C57.06 392.94 83.4 353.61 124.8 326c36.78-24.51 83.37-38 131.2-38s94.42 13.5 131.2 38c41.4 27.6 67.74 66.93 76.18 113.75 1.94 10.73-.68 21.34-7.18 29.11A31 31 0 01432 480z"
     ></path>
    </svg>
    <h3 class="svg-label">Contact</h3>
   </NuxtLink>
   <NuxtLink
    class="link-list-inner-cont"
    to="../assets/resume-tech.pdf"
    target="_blank"
   >
    <svg
     xmlns="http://www.w3.org/2000/svg"
     class="icon"
     viewBox="0 0 512 512"
    >
     <path
      d="M368 32H144a64.07 64.07 0 00-64 64v320a64.07 64.07 0 0064 64h224a64.07 64.07 0 0064-64V96a64.07 64.07 0 00-64-64zM256 304h-80a16 16 0 010-32h80a16 16 0 010 32zm80-80H176a16 16 0 010-32h160a16 16 0 010 32zm0-80H176a16 16 0 010-32h160a16 16 0 010 32z"
     ></path>
    </svg>
    <h3 class="svg-label">Resume</h3>
   </NuxtLink>
  </ul>
  <div class="copy-right-cont">
   Harvey Jiang Copyright © 2022 Harvey Jiang - All rights reserved ||
   Designed By: Harvey Jiang
  </div>
 </div>
</template>

<script>
export default {
 name: "Footer",
};
</script>

<style scoped>
.link-list-inner-cont {
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 text-decoration: none;
}

.footer-cont {
 width: 100vw;
 height: 15vh;
 background-color: grey;
}

.link-list {
 list-style-type: none;
 display: flex;
 justify-content: space-evenly;
 align-items: center;
 width: 100%;
 height: 75%;
}
.copy-right-cont {
 display: flex;
 justify-content: center;
 align-content: center;
 width: 100%;
 height: 25%;
}
</style>
