<template>
 <div
  class="pg-bg flex flex-col justify-center items-center gap-y-20 pt-28 pb-20 w-full bck-img"
 >
  <h2 class="text-black text-[3rem] font-bogart text-left">
   Projects
  </h2>

  
  <project
   image="https://res.cloudinary.com/dhjhxieah/image/upload/v1655069616/personal-site/ezgif.com-gif-maker_tdq2de.gif"
   image_name="Uso Mania web game Gif"
   title="USO Mania"
   :derection_left="false"
   description="A web based 2D rhythm game inspired by Osu Mania and guitar hero. Passion project built for AP CSP with 3 other group mates. It features a leaderboard and authentication."
   :tags="[
    'Nuxt',
    'mongodb',
    'Express',
    'Node.js',
    'Pixi.js',
   ]"
   link="https://uso-mania.netlify.app/"
   status="Featured Project"
   
  />

  <project
   image="https://res.cloudinary.com/dhjhxieah/image/upload/v1671396596/personal-site/wifi-siths_obyazw.jpg"
   image_name="SITHS Wifi connection website Preview"
   title="SITHS Device Registration"

   description="A Website built to be deployed on ubuntu kiosks that helps connects teachers and DOE devices to the internet system at Staten Island Tech."
   :tags="['Django', 'python', 'Ubuntu','Clearpass API']"
   status="Work Project"
  />


  <project
   image="https://res.cloudinary.com/dhjhxieah/image/upload/v1671398579/personal-site/TIQC_q40jh5.jpg"
   image_name="TIQC marketplace Website"
   title="TIQC Marketplace Website"
   description="An online marketplace/freelance site for exisiting and previous interns from Tech Incubator at Queens College"
   :tags="['wordpress']"
   link="https://harvey-dev.tiqc10x2.com/"
   status="Work Project"
   :derection_left= "false"
  />
  <!-- <project
   image="https://res.cloudinary.com/dhjhxieah/image/upload/v1671402942/personal-site/IBIS1_pytht3.jpg"
   image_name="IBIS Website"
   title="IBIS"
   description="A website that lets teachers make classes and assign courses to their students. The courses are meant for middle schools and teaches them how to build and deploy websites with HTML and CSS."
   :tags="[

    'Nuxt3',
    'SQLite',
    'Typescript',
    'Django rest framework',
  
   ]"

  /> -->
 </div>
</template>

<script setup lang="ts">


</script>

<style scoped>

.bck-img {
  background: linear-gradient(#fafafaee, hsla(0, 0%, 98%, 0.765)),
    url("../assets/imgs/bck-projects.jpg");

  /* background-image: url("imgs/backround-img.webp"); */
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
}
.pg-bg {
 background-color: white;
}
</style>
