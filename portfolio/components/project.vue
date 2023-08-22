<template>
  <div v-if="derection_left" class="flex container-flex">
    <div class="h-full flex items-center description max-w-[500px] z-30">
      <div class="font-fenix text-white relative flex flex-col gap-y-3 move">
        <p class="move-text text-accent1 text-black">{{ status }}</p>
        <h2 class="text-[3.5vmin] move-text font-uni text-black">
          {{ title }}
        </h2>
        <div class="bg-slate-800 p-8 rounded">
          <p>{{ description }}</p>
        </div>
        <div class="flex flex-row move-justify gap-x-3">
          <p
            v-for="tag in tags"
            :key="tag"
            class="move-text font-fenix rounded bg-black p-1 2xl:p-1 xl:p-1 sm:p-1 lg:p-1 xs:p-0.5"
          >
            {{ tag[0].toUpperCase() + tag.substring(1, tag.length) }}
          </p>
        </div>
        <div class="flex w-full move-justify">
          <a :href="link" target="_blank" aria-label="link to Github">
            <Icon
              class="text-3xl "
              aria-label="To see more go to my Github"
              name="icon-park:github"
            ></Icon>
          </a>
        </div>
      </div>
    </div>
    <div class="flex justify-center pic-container">
      <a :href="link" target="_blank" class="z-20 image">
        <div>
          <img
            :src="image"
            class="text-white pic rounded-lg"
            :alt="image_name"
          />
        </div>
      </a>
    </div>
  </div>
  <div v-else class="flex container-flex-1">
    <div class="flex justify-center pic-container">
      <div>
        <div>
          <img
            :src="image"
            class="text-white pic rounded-lg"
            :alt="image_name"
          />
        </div>
      </div>
    </div>
    <div class="h-full flex items-center description-1 max-w-[500px]">
      <div class="font-fenix text-white relative flex flex-col gap-y-3 move-1">
        <p class="move-text-1 text-accent1 text-black">{{ status }}</p>
        <h2 class="text-[3.5vmin] move-text-1 font-uni text-black">
          {{ title }}
        </h2>
        <div class="bg-slate-800 p-8 rounded">
          <p>{{ description }}</p>
        </div>
        <div class="flex flex-row move-justify-1 gap-x-3">
          <p
            v-for="tag in tags"
            :key="tag"
            class="move-text-1 font-fenix rounded bg-black 2xl:p-1 xl:p-1 sm:p-1 lg:p-1 xs:p-0.5"
          >
            {{ tag[0].toUpperCase() + tag.substring(1, tag.length) }}
          </p>
        </div>
        <div class="flex w-full move-justify-1"></div>
        <a
          :href="link"
          target="_blank"
          aria-label="link to project"
          class="move-justify-1 flex"
        >
          <Icon
            class="text-3xl"
            aria-label="To see more go to my Github"
            name="icon-park:github"
          ></Icon>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "project",
  props: {
    image: {
      type: String,
      default: "Image Name",
    },
    derection_left: {
      //
      type: Boolean,
      default: true,
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
.move-1 {
  right: 5rem;
}

.move-justify-1 {
  justify-content: end;
}

.move-text-1 {
  text-align: right;
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

@media (max-width: 900px) {
  .move-1 {
    right: 0%;
  }

  .move-justify-1 {
    justify-content: start;
  }

  .move-text-1 {
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

  .container-flex-1 {
    flex-direction: column;
  }

  .description-1 {
    order: 1;
    padding: 0 1em 0 1em;
  }
}

svg {
  fill: black;
  transition: all ease 0.2s;
}

svg:hover {
  fill: var(blue);
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
