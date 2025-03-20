"""
作者:xiaoFan
描述:一个小型的vue+ts+vite模板,内含tailwind,pinia及其持久化插件pinia-plugin-persistedstate的配置,axios的二次封装和router的配置
版本:1.0.0
"""
<script setup lang="ts">

</script>

<template>
 <div class="  flex flex-col justify-center items-center h-screen">
    <div class=" flex">
      <div class="m-[30px] "><img src="../assets/vue.svg" class=" size-[100px]"></div>
      <div class="m-[30px] bg-amber-600 rounded-full size-[100px] avatar-bg"></div>
    </div>
   <div>
      <text class="text-[50px] bg-clip-text text-transparent animated-gradient">vue+ts+vite</text>
   </div>
   <!-- <div class=" w-[540px] mt-[40px]">
      <text class="text-[20px]"></text>
   </div> -->
 </div>
 
</template>

<style scoped>
.avatar-bg {
  background-image: url('../assets/avatar.jpg');
  background-size: cover;
  background-position: center;
}
@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* 应用动画 */
.animated-gradient {
  background-image: linear-gradient(to right, #95d2e8, #8b5cf6);
  background-size: 200% 200%;
  animation: gradientAnimation 5s ease infinite;
}
</style>
