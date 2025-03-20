<script setup lang="ts">

</script>

<template>
 <div class=" bg-amber-100 flex flex-col justify-center items-center h-screen">
    <div class=" flex">
      <div class="m-[30px] "><img src="../assets/vue.svg" class=" size-[100px]"></div>
      <div class="m-[30px] bg-amber-600 rounded-full size-[100px] avatar-bg"></div>
    </div>
   <div>
      <text class="text-[50px]">vue+ts+vite</text>
   </div>
   <div>
      <text class="text-[20px]">一个小型的vue+ts+vite模板，内含tailwind，pinia及其持久化插件</text>
   </div>
 </div>
 
</template>

<style scoped>
.avatar-bg {
  background-image: url('../assets/avatar.jpg');
  background-size: cover;
  background-position: center;
}
</style>
