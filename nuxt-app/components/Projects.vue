<template>
 <div class="projects-cont">
  <h2 class="sub-title">Projects</h2>
  <div class="projects-inner-cont">
   <h3 class="titles">USO</h3>
   <div class="project">
    <img
     class="project-img"
     src="https://res.cloudinary.com/dhjhxieah/image/upload/v1655069616/personal-site/ezgif.com-gif-maker_tdq2de.gif"
     alt=""
    />
    <div class="about-project">
     <p class="blurb">
      Worked in a 4 person group as a fullstack developer. I made the
      backend to create the login and logout with auth0, leaderboards,
      and settings by conneting the frontend with the backend with
      aysnc fetch calls. In the Frontend I aided in the game machanics
      using Pixi.js and other details like the audio bar.
     </p>
     <div class="button-cont">
      <a
       class="about-project-link"
       href="https://github.com/wilsonw13/uso-mania-frontend"
       target="_blank"
      >
       Frontend Code
      </a>
      <a
       class="about-project-link"
       href="https://github.com/wilsonw13/uso-mania-backend"
       target="_blank"
      >
       Backend Code
      </a>
      <a
       class="about-project-link"
       href="https://uso-mania.netlify.app/"
       target="_blank"
      >
       Demo
      </a>
     </div>
    </div>
   </div>
   <h4 class="titles">Technologies Used</h4>

   <ul class="tech-cont">
    <li>JavaScript</li>
    <li>Nuxt</li>
    <li>HTML</li>
    <li>MongoDB</li>
    <li>Express</li>
    <li>Node.js</li>
   </ul>
  </div>
 </div>
</template>

<script>
export default {
 methods: {
  //   test() {
  //    let t1 = gsap.timeline();
  //    t1.to(".project-img", { duration: 2, x: 100, opacity: 0.5 });
  //   },
 },
};
</script>
<style scoped>
#logo {
 width: 25%;
 height: 25%;
}

.about-project-link {
 display: flex;
 text-align: center;
 justify-content: center;
 text-decoration: none;
 align-items: center;
 border-radius: 2rem;
 font-size: 1rem;
 background-color: grey;
 color: white;
 width: 25%;
 height: 80%;
}

.blurb {
 height: 80%;
 margin: 0.8rem 0 0.8rem 0;
}
.button-cont {
 display: flex;
 justify-content: space-evenly;
 align-items: center;
 height: 20%;
 width: 100%;
}
.tech-cont {
 display: flex;
 justify-content: space-evenly;
 width: 100%;
}
.sub-title {
 display: flex;
 justify-content: center;
 align-items: center;
 height: 10%;
 font-size: 3rem;
 width: 100%;
}

.titles {
 margin: 2rem;
 font-size: 2.5rem;
}
.projects-inner-cont {
 width: 100%;
 height: 70%;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
}

.about-project {
 width: 40%;
 margin: 0 1rem 0 1rem;
 font-size: 1.5rem;
}
.project {
 width: 80%;
 height: 90%;
 display: flex;
 justify-content: center;
 align-content: center;
 flex-direction: row;
}
.project-img {
 width: 60%;
 height: 100%;
 border-radius: 0.7rem;
}
.projects-cont {
 display: flex;

 align-items: center;
 flex-direction: column;
 height: 100vh;
 width: 100vw;
}
</style>
