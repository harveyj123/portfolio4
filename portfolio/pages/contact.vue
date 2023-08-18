<template>
  <!-- <section class="w-full h-[100dvh] flex justify-center items-center flex-col overflow-auto">
    <h1 class="h-[15%] flex justify-center items-center text-2xl">Contact</h1>
    <form class="w-[90%] h-1/2 flex flex-col justify-center items-center  ">
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="my-[6rem] block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
           Name
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 borde rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            v-model="Name"
            type="text"
          />

        </div>
      
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="email"
          >
            E-mail
          </label>
          <input
            v-model="emailRes"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="email"
            type="text"
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-password"
          >
            Message
          </label>
          <textarea
            class="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
            id="message"
            v-model="message"
          ></textarea>
        </div>
      </div>
      <div class="md:flex md:items-center">
      </div>
    </form>
    <button
            class="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            @click="send"
          >
            send
          </button>
  </section> -->
  <section class="bg-white">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 mt-12  text-4xl tracking-tight font-extrabold text-center text-gray-900">Contact Me</h2>
      <form action="#" class="space-y-8">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
              <input v-model="emailRes" type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 ">Your Name</label>
              <input type="text" v-model="Name" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 ">Your message</label>
              <textarea v-model="message" id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
         
      </form>
      <button @click="send" aria-label="Submit form" class="py-3 my-8 px-5 text-sm font-medium text-centerrounded-lg border sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
  </div>
</section>
</template>

<script setup lang="ts">
const Name = ref("");
const emailRes = ref("");
const message = ref("");
const mail = useMail("");


async function send() {
  if(Name.value !== "" && emailRes.value!== "" && message.value !== "") {
    await mail.send({
    from: `Harvey Jiang`,
    subject: "Portfolio Contact Me",
    text: `Name: ${Name.value} contact: ${emailRes.value} message: ${message.value} `
  //   text: `Name: ${firstName.value} ${lastName.value}, contact: ${email.value}, message: ${message.value}`,
  //   text: `Name: ${firstName.value} ${lastName.value}, contact: ${email.value}, message: ${message.value}`,
  });
  emailRes.value = ""
  message.value = ""
  Name.value = ""
  window.alert("Message Sent");
  }

  else {
    window.alert("Fill out all fields please");
  }


}

// const send1 = () => {
//     mail.send({
//   from: 'John Doe',
//   subject: 'Incredible',
//   text: 'This is an incredible test message',
// })
// }

// from: ${firstName.value} ${lastName.value},
//       subject: `${email.value}`,
//       text: `${message.value}`,
</script>

<style scoped></style>
