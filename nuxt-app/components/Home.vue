<template>
 <div class="container" @click="test">
  <div id="target"></div>
  <div class="inner-cont">
   <h1 class="home-title">Harvey Jiang</h1>
   <h2 class="home-sub-title">Full Stack Developer</h2>
   <ul class="link-list">
    <li>
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
    </li>
    <li>
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
    </li>
    <li>
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
    </li>
   </ul>
  </div>
 </div>
</template>

<script>
export default {
 name: "Home",

 mounted() {
  let i = 0;
  TweenLite.set("#target", { perspective: 1200 });
  // TweenLite.set("img", { xPercent: "-50%", yPercent: "-50%" });

  var total = 80;
  var warp = document.getElementById("target"),
   w = window.innerWidth,
   h = window.innerHeight;

  for (i = 0; i < total; i++) {
   var Div = document.createElement("div");
   TweenLite.set(Div, {
    attr: { class: "dot" },
    x: R(0, w),
    y: R(-200, -150),
    z: R(-200, 200),
   });
   warp.appendChild(Div);
   animm(Div);
  }

  function animm(elm) {
   TweenMax.to(elm, R(3, 6.5), {
    y: h + 100,
    ease: Linear.easeNone,
    repeat: -1,
    delay: -15,
   });
   //TweenMax.to(elm,R(1,2),{x:'+=100',rotationZ:R(0,180),repeat:-1,yoyo:true,ease:Sine.easeInOut});
   TweenMax.to(elm, R(5, 7), {
    x: "+=100",
    repeat: -1,
    yoyo: true,
    ease: Sine.easeInOut,
   });
   //TweenMax.to(elm,R(.5,2),{rotationX:R(0,360),rotationY:R(0,360),repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-5});
  }

  function R(min, max) {
   return min + Math.random() * (max - min);
  }
 },
};
</script>

<style>
.dot {
 width: 4rem;
 height: 4rem;
 position: absolute;
 border-radius: 50%;
 background: #fff;
 opacity: 0.2;
}

#target {
 /* display: flex;
 justify-items: center;
 align-items: center;
 flex-direction: column;

 height: 75vh;
 width: 100vw;
 color: white; */
 height: 100%;
 overflow: hidden;
}

.container {
 position: relative;
 /* display: flex;
 justify-items: center;
 align-items: center;
 flex-direction: column;

 height: 75vh;
 width: 100vw;
 color: white; */
 /* height: 70vh;
 
 overflow: hidden; */
 background-color: grey;
 height: 70vh;
}

.inner-cont {
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 height: 100%;
 width: 50%;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
}

.home-title {
 display: flex;
 justify-content: center;
 align-items: center;
 height: 25%;
 text-align: center;
 width: 100%;
 background: linear-gradient(to right, black 4px, transparent 4px) 0 0,
  linear-gradient(to right, black 4px, transparent 4px) 0 100%,
  linear-gradient(to left, black 4px, transparent 4px) 100% 0,
  linear-gradient(to left, black 4px, transparent 4px) 100% 100%,
  linear-gradient(to bottom, black 4px, transparent 4px) 0 0,
  linear-gradient(to bottom, black 4px, transparent 4px) 100% 0,
  linear-gradient(to top, black 4px, transparent 4px) 0 100%,
  linear-gradient(to top, black 4px, transparent 4px) 100% 100%;

 background-repeat: no-repeat;
 background-size: 2rem 2rem;
 font-size: 7rem;
}

.home-sub-title {
 font-size: 3rem;
 display: flex;
 justify-content: center;
 text-align: center;
 align-items: center;
 height: 25%;
 width: 100%;
}

.svg-label {
 color: black;
}
.sub-title {
 font-size: 2rem;
}
.icon {
 width: 3rem;
 height: 3rem;
}

.link-list {
 list-style-type: none;
 display: flex;
 justify-content: space-evenly;
 align-items: center;
 background-color: white;
 width: 60%;
 height: 23%;
 margin: 0;
 padding: 0;
 border-radius: 2rem;
}
</style>
