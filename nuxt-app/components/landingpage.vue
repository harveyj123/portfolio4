<template>
 <div class="outer-div">
  <h1>Hello, my name is <span class="bold">Harvey</span>.</h1>
  <p>Welcome to my profile.</p>
 </div>
</template>

<style scoped>
.outer-div {
 width: 100vw;
 height: 100vh;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 font-family: Courier New, monospace;
 background-color: rgba(255, 230, 230);
 overflow-x: hidden;
}

* {
 margin: 0;

 padding: 0;
 box-sizing: border-box;
}

h1 {
 color: #574142;
 font-size: 3.5vw;
 position: relative;
 width: max-content;
 font-weight: normal;
}

h1:before,
h1:after {
 content: "";
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
}

h1::before {
 background: rgba(255, 230, 230);
 animation: write 2.5s steps(25) 0.5s forwards; /* Number of steps */
 width: 100%;
}

h1::after {
 opacity: 1;
 width: 0.15em;
 background: black;
 animation: write 2.5s steps(25) 0.5s forwards,
  blink 0.75s steps(2) infinite;
}

p {
 font-size: 2.5vw;
 opacity: 0.4;
}

.bold {
 font-weight: 600;
}

@keyframes write {
 to {
  left: 100%;
 }
}

@keyframes blink {
 0% {
  opacity: 0;
 }
 49.9% {
  opacity: 0;
 }
 50% {
  opacity: 1;
 }
 100% {
  opacity: 1;
 }
}
</style>
