<template>
  <div>
    <Header />
    <main>
      <NuxtPage />
    </main>
    <Footer />
    <div :class="progressClass">
      <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
    </div>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

useHead({
  script: [
    { src: '/js/common_scripts.js', type: 'text/javascript', defer: true  },
    { src: '/js/common_functions.js', type: 'text/javascript', defer: true  },
    { src: '/js/datepicker_search.js', type: 'text/javascript', defer: true  },
    { src: '/js/datepicker_inline.js', type: 'text/javascript', defer: true  },
    { src: '/js/slider.js', type: 'text/javascript', defer: true  },
    { src: '/phpmailer/validate.js', type: 'text/javascript', defer: true  },
    {
      src: '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit',
      type: 'text/javascript',
    }
    
  ],
});

</script>
<script>
export default {
  data() {
    return {
      isActive: false, // ค่าเริ่มต้น
    };
  },
  computed: {
    progressClass() {
      return this.isActive ? 'progress-wrap active-progress' : 'progress-wrap';
    },
  },
  mounted() {
    // กำหนดให้ active เฉพาะหลังจากหน้าโหลดเสร็จ
    this.isActive = true;
  },
};
</script>

