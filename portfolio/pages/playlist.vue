<template>
<div class="bg-white min-h-screen text-gray-300 p-8">

<!-- header section -->
<div class="md:flex">
  <!--  album cover  -->
  <img class="mr-6 mb-4 md:mb-0" src="https://placekitten.com/g/150/150">

  <!--  content  -->
  <div class="flex flex-col justify-center">
    <h4 class="mt-0 mb-3 text-xL text-gray-400 tracking-widest uppercase">My Favorite Songs</h4>
    <h1 class="mt-0 mb-3 text-white">Middle Child Radio</h1>
    <p class="text-gray-500 text-xs mb-2">
      With J. Cole, Miguel, 6LACK, Future and more
    </p>
    <p class="text-gray-500 text-xs">
      Created by <a>Spotify</a> · 50 songs, 2 hr 54 min
    </p>
  </div>
</div>

<!--  action buttons  -->
<div class="mt-6 flex justify-between">
  <div class="flex">
  <button class="block bg-green-500 text-green-100 rounded-full py-2 px-10 mr-4">Play</button>
w
  </div>
  <!-- <div class="text-gray-400 text-xs text-right tracking-wider">
    <p class="uppercase mb-2">Followers</p>
    <p>5,040</p>
  </div> -->
</div>

<!-- songs go here -->
<div class="mt-10">
  <!-- header -->
  <div class="flex text-xs text-gray-500">
    <div class="p-2 w-10 flex-shrink-0"></div>
    <div class="p-2 w-10 flex-shrink-0"></div>
    <div class="p-2 w-full">Title</div>
    <div class="p-2 w-full">Artist</div>
    <div class="p-2 w-full">Album</div>
    <div class="p-2 w-10 flex-shrink-0"><span role="img">⏱</span></div>
  </div>
  
  <!-- song list -->
  <div class="text-xs text-black">
    <div class="flex border-b border-gray-900 hover:bg-gray-900">
      <div class="p-2 w-10 flex-shrink-0"><span>▶️</span></div>
      <div class="p-2 w-10 flex-shrink-0"><span>❤️</span></div>
      <div class="p-2 w-full">My Cool Song</div>
      <div class="p-2 w-full">J. Cole</div>
      <div class="p-2 w-full">MIDDLE CHILD</div>
      <div class="p-2 w-10 flex-shrink-0"><span role="img">3:34</span></div>
    </div>
    <div class="flex border-b border-gray-900 hover:bg-gray-900">
      <div class="p-2 w-10 flex-shrink-0"><span>▶️</span></div>
      <div class="p-2 w-10 flex-shrink-0"><span>❤️</span></div>
      <div class="p-2 w-full">This Song Goes Here</div>
      <div class="p-2 w-full">Kendrick Lamar</div>
      <div class="p-2 w-full">something goes here</div>
      <div class="p-2 w-10 flex-shrink-0"><span role="img">3:34</span></div>
    </div>
    <div class="flex border-b border-gray-900 hover:bg-gray-900">
      <div class="p-2 w-10 flex-shrink-0"><span>▶️</span></div>
      <div class="p-2 w-10 flex-shrink-0"><span>❤️</span></div>
      <div class="p-2 w-full">RNP</div>
      <div class="p-2 w-full">YNB Cordee</div>
      <div class="p-2 w-full">The Lost Boy</div>
      <div class="p-2 w-10 flex-shrink-0"><span role="img">2:54</span></div>
    </div>
    <div class="flex border-b border-gray-900 hover:bg-gray-900">
      <div class="p-2 w-10 flex-shrink-0"><span>▶️</span></div>
      <div class="p-2 w-10 flex-shrink-0"><span>❤️</span></div>
      <div class="p-2 w-full">Weekend</div>
      <div class="p-2 w-full">Mac Miller</div>
      <div class="p-2 w-full">GO:OD AM</div>
      <div class="p-2 w-10 flex-shrink-0"><span role="img">8:34</span></div>
    </div>
    <div class="flex border-b border-gray-900 hover:bg-gray-900">
      <div class="p-2 w-10 flex-shrink-0"><span>▶️</span></div>
      <div class="p-2 w-10 flex-shrink-0"><span>❤️</span></div>
      <div class="p-2 w-full">Spice Girl</div>
      <div class="p-2 w-full">Amine</div>
      <div class="p-2 w-full">Good For You</div>
      <div class="p-2 w-10 flex-shrink-0"><span role="img">9:34</span></div>
    </div>
  </div>
</div>


</div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>