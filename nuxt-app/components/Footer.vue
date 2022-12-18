<template>
 <footer
  class="pg-bg z-20 relative h-full flex flex-col justify-center items-center gap-y-5 p-10 overflow-x-hidden"
 >
  <a
   href="mailto:youweizhen540@gmail.com"
   class="font-fenix text-gray-300 eanchor"
   >Harveyjiang11@gmail.com</a
  >
  <a
   href="https://github.com/AntoDono/Portfolio"
   target="_blank"
   class="text-gray-300 font-fenix text-center"
  >
   Designed & built by Harvey Jiang.
   <br />
   MIT License
  </a>
 </footer>
</template>

<style scoped>
.social {
 display: none;
}

.pg-bg {
 background-color: #d19fa0;
}
.eanchor {
 display: none;
}

.eanchor:hover {
 transition: all ease 0.3s;
 color: var(--hover_link);
}

.link:hover {
 transition: all ease 0.2s;
 text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
  -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
  0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
}

@media (max-width: 800px) {
 .social {
  display: flex;
 }

 .eanchor {
  display: flex;
 }
}
</style>
