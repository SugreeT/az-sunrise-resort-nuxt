<template>
  <div>
    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>

useHead({
  script: [
    { src: '/js/common_scripts.js', type: 'text/javascript', defer: true  },
    // { src: '/js/common_functions.js', type: 'text/javascript', defer: true  },
    // { src: '/phpmailer/validate.js', type: 'text/javascript', defer: true  },
    { src: '/coming_soon_assets/jquery.superslides.min.js', type: 'text/javascript', defer: true  },
    { src: '/coming_soon_assets/coming_soon_func.js', type: 'text/javascript', defer: true  },
  ],
});

</script>