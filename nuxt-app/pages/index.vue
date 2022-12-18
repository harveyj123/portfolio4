<template>
 <div>
  <leftbar></leftbar>
  <Nav></Nav>
  <main ref="main">
   <landingpage></landingpage>
   <about-me></about-me>
   <about-me></about-me>
   <about-me></about-me>
   <!-- <section class="panel"><landingpage></landingpage></section>
   <section class="panel"><about-me></about-me></section>
   <section class="panel"><about-me></about-me></section>
   <section class="panel"><about-me></about-me></section> -->
  </main>

  <!-- <Home></Home>
  <Projects></Projects> -->
  <!-- <Footer></Footer> -->
 </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const main = ref();
const ctx = ref();
const scrollTween = ref();

const goToSection = (i) => {
 // Remove the GSAP instance with the specific ID
 // to prevent memory leak
 ctx.value.data.forEach((e) => {
  if (e.vars && e.vars.id === "scrollTween") {
   e.kill();
  }
 });
 ctx.value.add(() => {
  scrollTween.value = gsap.to(window, {
   scrollTo: { y: i * window.innerHeight, autoKill: false },
   duration: 0.7,
   id: "scrollTween",
   onComplete: () => (scrollTween.value = null),
   overwrite: true,
  });
 });
};

onMounted(() => {
 ctx.value = gsap.context((self) => {
  const panels = self.selector(".panel");
  panels.forEach((panel, i) => {
   ScrollTrigger.create({
    trigger: panel,
    start: "top bottom",
    end: "+=200%",
    onToggle: (self) =>
     self.isActive && !scrollTween.value && goToSection(i),
   });
  });
  ScrollTrigger.create({
   start: 0,
   end: "max",
   snap: 1 / (panels.length - 1),
  });
 }, main.value); // <- Scope!
});

onUnmounted(() => {
 ctx.value.revert(); // <- Easy Cleanup!
});
</script>

<style scoped>
/* @media screen and (max-width: 1300px) {
 html {
  font-size: 59%;
 }
}
@media screen and (max-width: 1000px) {
 html {
  font-size: 55%;
 }
}
@media screen and (max-width: 800px) {
 html {
  font-size: 52%;
 }
} */
/* body {
 font-family: "Poppins", sans-serif;
} */

.site-cont {
 background-color: black;
 width: 100vw;
}

.title {
 font-size: 4rem;
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
</style>
