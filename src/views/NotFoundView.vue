<template>
  <div class="p-2 bg-gray-800 m-4 rounded">
    <h3 class="text-3xl font-bold">That's Awkward</h3>
    <p>
      <span class="italic text-md ml-5">' {{ this.$route.fullPath }} '</span> could not be found
    </p>
    <div class="my-5" />
    <RouterLink to="/">Go Home</RouterLink>
  </div>
</template>
