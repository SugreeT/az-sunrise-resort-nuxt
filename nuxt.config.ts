export default defineNuxtConfig({
  compatibilityDate: '2024-11-01', // ระบุวันที่รองรับฟีเจอร์ของ Nuxt
  devtools: { enabled: true }, // เปิดเครื่องมือ DevTools
  pages: true, // เปิดใช้งานระบบ Pages
  css: [
    // '@/assets/tailwind.css', // TailwindCSS
    // '@/assets/css/bootstrap.css', // Bootstrap CSS
    '@/assets/css/bootstrap.min.css', // Bootstrap Minified CSS
    '@/assets/css/style.css', // Main Style CSS
    '@/assets/css/vendors.min.css', // Vendors Minified CSS
    '@/assets/css/custom.css', // Custom CSS
    // '@/assets/css/daterangepicker.css', // Daterangepicker CSS
    '@/assets/css/daterangepicker_v2.css', // Daterangepicker v2 CSS
    // '@/assets/css/day_menu.css', // Day Menu CSS
    // '@/assets/css/flex_slider.css', // Flex Slider CSS
    // '@/assets/css/owl.carousel.css', // Owl Carousel CSS
    // '@/assets/css/owl.theme.default.css', // Owl Theme Default CSS
    // '@/assets/css/vendors.css', // Vendors CSS
  
  ],
  modules: ['@pinia/nuxt'], // Pinia
  postcss: {
    plugins: {
      tailwindcss: {}, // ตรวจสอบว่า TailwindCSS ถูกโหลด
      autoprefixer: {}, // ใช้ Autoprefixer สำหรับเบราว์เซอร์
    },
  },
});
