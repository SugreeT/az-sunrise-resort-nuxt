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
    { src: '/js/common_functions.js', type: 'text/javascript', defer: true  },
    // { src: '/js/datepicker_search.js', type: 'text/javascript', defer: true  },
    // { src: '/js/datepicker_inline.js', type: 'text/javascript', defer: true  },
    { src: '/phpmailer/validate.js', type: 'text/javascript', defer: true  },
    { src: '/js/day_menu.js', type: 'text/javascript', defer: true  },
  ],
});

</script>