<template>
 <div class="container">
  <div id="target"></div>
  <div class="inner-cont">
   <h1 class="home-title">Harvey Jiang</h1>
   <h2 class="home-sub-title">Full Stack Developer</h2>
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
</style>
