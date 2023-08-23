<template>
  <div
    class="pg-bg flex flex-col justify-center items-center gap-y-20 pt-28 pb-20 w-full bck-img"
  >
    <h2 class="text-black text-[3rem] font-bogart text-left">Projects</h2>

    <project
      image="https://res.cloudinary.com/dhjhxieah/image/upload/v1692725554/techanime.png"
      image_name="Tech Anime website IMG Preview"
      title="TechAnime"
      :derection_left="false"
      description="A anime website built to vote animes for awards inspired by my anime list. The site was built to visualize(in graphs) what SITHS Students watched and help them pick out what to watch with trending, most watched data, etc. I was the PM for the project and worked mostly on the backend and flushing out details on the frontend"
      :tags="['Nuxt3', 'TS', 'Django', 'GraphQL']"
      link="https://github.com/harveyj123/anime-frontend"
      status="Featured Project"
    />

    <project
      image="https://res.cloudinary.com/dhjhxieah/image/upload/v1655069616/personal-site/ezgif.com-gif-maker_tdq2de.gif"
      image_name="Uso Mania web game Gif"
      title="USO Mania"
      description="A web based 2D rhythm game inspired by Osu Mania and guitar hero. Passion project built for AP CSP with 3 other group mates. It features a leaderboard, authentication, and fun gameplay. I built backend and on the frontend I developed the game logic and Song selection page."
      :tags="['Nuxt2', 'mongodb', 'Express', 'Auth0', 'Pixi.js']"
      link="https://github.com/harveyj123/uso-mania-frontend"
      status="Featured Project"
    />

    <project
      image="https://res.cloudinary.com/dhjhxieah/image/upload/v1673483173/personal-site/taste-of-china.png"
      image_name="Taste of China Brooklyn Website Img"
      title="Taste of China Brooklyn"
      description="A menu website for the family owned business Taste Of China Brooklyn "
      :tags="['Assessable HTML' ,'Assessable CSS']"
      link="https://github.com/harveyj123/taste-of-china-website"
      status="Featured Project"
      :derection_left="false"
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

<script setup lang="ts"></script>

<style scoped>
.bck-img {
  background: linear-gradient(#fafafaee, hsla(0, 0%, 98%, 0.765)),
    url("../assets/imgs/bck-projects1.jpg");

  /* background-image: url("imgs/backround-img.webp"); */
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
}
.pg-bg {
  background-color: white;
}
</style>
