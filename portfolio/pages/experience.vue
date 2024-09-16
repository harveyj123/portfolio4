<template>
  <div class="w-[100vw] h-[100vh] flex justify-center items-start">
    <ol
      class="border-l border-neutral-300 dark:border-neutral-500 w-4/5 mt-[6rem]"
    >
      <Exptime
        title="Research Assistant at X-Lab@UB"
        date="September 2023 - Current"
        :des=points1
      ></Exptime>
    <Exptime
        title="Summer Design Institute: Software Engineer Intern for Staten Island Tech "
        date="June 2022 - August 2022; June 2023 - August 2023"
        :des=points2
      ></Exptime> 
      <Exptime
        title="Tech Incubator at Queens College: Intern"
        date="February 2022 - April 2022"
:des=points3
          ></Exptime> 
    </ol>
  </div>
</template>

<script setup lang="ts">
const points1 = [
  "-Identified and presented strategies like Nvidia Triton to better scale MLModelScope - a platform for evaluating, profiling and benchmarking ML models",
  "-Decoupled Hugging Face pipeline models into distinct preprocessing, prediction, and post-processing stages",
  "-Collaborated with a postdoctoral researcher on a Human-Computer Interaction (HCI) study to evaluate student-teacher interactions within the reading realm",
  "-Developed an application using Remix (React) to support the HCI study by allowing professors to assign academic papers and visualize student reading metrics with a 95% accuracy rate",
  "-Integrated MySQL and Django for comprehensive paper tracking, enabling actionable metrics that helped professors identify and address student learning challenges",
  "-Enabled fine-tuning capabilities for reading metrics, allowing tracking down to a page-by-page level for precise academic insights",
  "-Ensured accessibility standards by collaborating with UB’s Accessibility Resources office"
];

const points2 = [
  "-Created a QR code based attendance system, using Express.js and Google Sheets / Drive APIs, leading to a 10 minute reduction in attendance taking time",
  "-Improved a schedule builder app by resolving complex bugs like data management issues and user interface irregularities",
  "-Established front facing Kiosk software to streamline connecting to school WiFi for hundreds of students and teachers",
  "-Remodeled an internal Clearpass API (WiFi) wrapper to improve error handling and response/input data safety, ensuring WiFi stability"
];

const points3 = [
"-Built WordPress websites tailored to specific client needs, boosting online presence for a photography business and a clothing business"
];

</script>

<style scoped></style>
