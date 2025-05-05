<!-- pages/404.vue -->
<template>
    <div>
      <p>Page not found. Redirecting...</p>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      this.$router.replace('/index') // หรือ '/' แล้วแต่ที่คุณใช้
    }
  }
  </script>
  