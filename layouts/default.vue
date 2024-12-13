<template>
  <div>
    <Header />
    <main>
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

useHead({
  script: [
    { src: '/js/common_scripts.js', type: 'text/javascript' },
    { src: '/js/common_functions.js', type: 'text/javascript' },
    { src: '/js/datepicker_search.js', type: 'text/javascript' },
    { src: '/js/datepicker_inline.js', type: 'text/javascript' },
    { src: '/phpmailer/validate.js', type: 'text/javascript' },
  ],
});
</script>
