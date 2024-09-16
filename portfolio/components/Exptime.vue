<template>
  <li>
    <div class="flex-start flex items-center pt-3 mt-2">
      <div
        class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
      <p class="text-sm  ">
        {{ date }}
      </p>
    </div>
    <div class="mb-6 ml-4 mt-2">
      <h4 class="mb-1.5 text-xl font-semibold">{{ title }}</h4>
      <p class="mb-3" v-for="description in des">
        {{ description }}
      </p>
    </div>
  </li>
</template>

<script setup lang="ts">
defineProps({
  date: String,
  title: String,
  des: Array<String>,
})
</script>

<style scoped>

</style>