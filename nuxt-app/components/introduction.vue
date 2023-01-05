<template>
 <div
  class="h-auto bg-transparent flex justify-center items-start z-20 relative w-full"
  id="about"
 >
  <div
   class="flex justify-around items-center w-[80vw] flex-wrap border-2 border-white pt-10 pb-10"
  >
   <div class="pic-border">
    <img
     src="https://res.cloudinary.com/dhjhxieah/image/upload/v1671406694/personal-site/dog_sahf2d.jpg"
     class="pic rounded-xl"
     alt="picture of my dog"
    />
   </div>
   <div class="w-[500px] basis-auto" ref="description">
    <h2 class="text-black text-[3rem] font-bogart text-left">
     I'm Harvey Jiang,
    </h2>
    <p class="tx font-montserrat">
     a passionate high school student in the field of computer science
     and food.
    </p>
    <p class="tx font-montserrat pt-4">
     Over the years, I have learned many different skills and
     frameworks in web and software design. With those skills that I
     have acquired, I created multiple websites that benefit my
     community and some just for fun.
    </p>
    <p class="tx font-montserrat pt-4">
     Recently, I have been working on Rust, D3.js and the latest web
     frameworks such as Next.js.
    </p>
   </div>
  </div>
 </div>
</template>

<style scoped>
.tx {
 color: #705959;
}
.pic {
 /* height: 300px; */
 width: 300px;
}

@media (max-width: 700px) {
 .pic {
  /* height: 300px; */
  width: 300px;
 }
}
</style>
