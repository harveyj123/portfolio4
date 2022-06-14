<template>
 <div class="projects-cont" @click="test">
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
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
      asperiores incidunt totam. At eaque tempore, quae optio repellat
      aliquid aliquam omnis labore, accusantium ea illo id commodi
      necessitatibus tenetur itaque.
     </p>
     <div class="button-cont">
      <a
       class="about-project-link"
       href="https://github.com/staten-island-tech/fullstack-frontend-4-plus-1-frontend"
      >
       Code
      </a>
      <a
       class="about-project-link"
       href="https://uso-mania.netlify.app/"
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
    mounted() {
        console.log("mounted work")
    },
    methods: {
        test() {
            console.log("hi")
        }
    }
    
}
</script>
<style scoped>
#logo {
 width: 25%;
 height: 25%;
}

.about-project-link {
 display: flex;
 justify-content: center;
 text-decoration: none;
 align-items: center;
 border-radius: 2rem;
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
 height: 5%;
 font-size: 4rem;
 width: 100%;
}

.titles {
 font-size: 2rem;
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
