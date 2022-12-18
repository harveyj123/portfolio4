<template>
 <div class="overflow-y-hidden" ref="container">
  <h2 class="text-[7vmin] fc font-uni overflow-y-hidden" ref="appear">
   {{ text }}
  </h2>
 </div>
</template>

<script>
export default {
 name: "sectionHeader",
 props: {
  text: {
   type: String,
   default: "Section Text",
  },
  direction: {
   type: String,
   default: "N",
  },
 },
};
</script>

<style scoped>
.fc {
 color: #705959;
}

/* .glitch:after {
  content: "";
  position: absolute;
  bottom: 0;
  top: 0.75em;
  left: 30%;
  right: 0em;
  height: 1em;
  border-top: 1px solid white;
} */
</style>
