<template>
 <div class="flex container-flex">
  <div
   class="h-full flex items-center z-30 description max-w-[500px]"
  >
   <div
    class="font-fenix text-white relative flex flex-col gap-y-3 move"
   >
    <p class="move-text text-accent1">{{ status }}</p>
    <h2 class="text-[3.5vmin] move-text font-uni glitch">
     {{ title }}
    </h2>
    <div class="bg-slate-800 p-8 rounded">
     <p>{{ description }}</p>
    </div>
    <div class="flex flex-row move-justify gap-x-3">
     <p v-for="tag in tags" :key="tag" class="move-text font-fenix">
      {{ tag[0].toUpperCase() + tag.substring(1, tag.length) }}
     </p>
    </div>
    <div class="flex w-full move-justify">

    </div>
   </div>
  </div>
  <div class="flex justify-center pic-container">
   <div class="z-20 image">
    <div>
     <img
      :src="image"
      class="text-white pic rounded-lg"
      :alt="image_name"
     />
    </div>
   </div>
  </div>
 </div>
</template>

<script>
export default {
 name: "project-leftds",
 props: {
  image: {
   type: String,
   default: "Image Name",
  },
  image_name: {
   type: String,
   default: "Image Alt Name",
  },
  title: {
   type: String,
   default: "Title",
  },
  description: {
   type: String,
   default: "Description",
  },
  tags: {
   type: Array,
   default: ["Tags here"],
  },
  status: {
   type: String,
   default: "Side Project",
  },
  link: {
   type: String,
   default: "/",
  },
 },
};
</script>

<style scoped>
.glitch {
 text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
  -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
  0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
}

svg {
 fill: white;
 transition: all ease 0.2s;
}

svg:hover {
 fill: var(--hover_link);
 cursor: pointer;
}

.move {
 left: 5rem;
}

.move-justify {
 justify-content: start;
}

.move-text {
 text-align: left;
}
.pic {
 transition: all ease 0.3s;
 height: 20em;
 width: 30em;
}

.pic:hover {
 transform: scale(1.05);
}

.description-bg {
 background-color: var(--secondary);
}

.container-flex {
 flex-direction: row;
}

@media (max-width: 900px) {
 .move {
  left: 0%;
 }

 .move-justify {
  justify-content: start;
 }

 .move-text {
  text-align: left;
 }

 .description-bg {
  background-color: transparent;
  padding: 1rem 0 1rem 0;
 }
 .pic {
  height: 12em;
  width: 20em;
 }
 .pic-container {
  padding-bottom: 1rem;
 }

 .pic:hover {
  transform: none;
 }

 .container-flex {
  flex-direction: column;
 }

 .description {
  order: 1;
  padding: 0 2em 0 2em;
 }
}
</style>
