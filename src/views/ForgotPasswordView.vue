<template>
  <div class="p-5 bg-base-200">
    <div class="flex items-center">
      <div>
        <font-awesome-icon icon="triangle-exclamation" class="ml-2 w-10 h-10 -rotate-12 text-warning" />
      </div>
      <div class="p-5 my-2 rounded text-white">
        <h2 class="text-3xl font-bold">Snap!</h2>
        <p>Contact us and we will get it sorted out asap</p>
      </div>
    </div>

    <button @click="$router.go(-1)" class="btn btn-wide text-white">Back</button>
  </div>
</template>

<script setup></script>
