export default defineNuxtConfig({
  compatibilityDate: '2024-11-01', // ระบุวันที่รองรับฟีเจอร์ของ Nuxt
  devtools: { enabled: true }, // เปิดเครื่องมือ DevTools
  pages: true, // เปิดใช้งานระบบ Pages
  css: [
    '@/assets/css/bootstrap.min.css', // Bootstrap Minified CSS
    '@/assets/css/style.css', // Main Style CSS
    '@/assets/css/vendors.min.css', // Vendors Minified CSS
    '@/assets/css/custom.css', // Custom CSS
    // '@/assets/css/daterangepicker_v2.css', // Daterangepicker v2 CSS
  
  ],
  modules: ['@pinia/nuxt'], // Pinia
  postcss: {
    plugins: {
      tailwindcss: {}, // ตรวจสอบว่า TailwindCSS ถูกโหลด
      autoprefixer: {}, // ใช้ Autoprefixer สำหรับเบราว์เซอร์
    },
  },
  app: {
    baseURL: '/', // หรือ '/subfolder/' หากใช้ Subdirectory
    buildAssetsDir: '/_nuxt/', // Path สำหรับ Static Assets
    head: {
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Caveat:wght@400;500&family=Montserrat:wght@300;400;500;600;700&display=swap',
        },
      ],
    },
  },
  hooks: {
    'pages:extend' (pages) {
      // add a route
      pages.push({
        name: 'home',
        path: '/',
        file: '~/pages/index.vue'
      },{
        name: 'index',
        path: '/index',
        file: '~/pages/index.vue'
      },{
        name: 'menu-of-the-day',
        path: '/menu-of-the-day',
        file: '~/pages/menu-of-the-day.vue',
        meta: { layout: 'default-blank' }, // กำหนด layout ที่นี่
      },{
        name: 'coming-soon',
        path: '/coming-soon',
        file: '~/pages/coming-soon.vue',
        meta: { layout: 'default-commingsoon' }, // กำหนด layout ที่นี่
      })

      // remove routes
      function removePagesMatching (pattern: RegExp, pages: NuxtPage[] = []) {
        const pagesToRemove: NuxtPage[] = []
        for (const page of pages) {
          if (page.file && pattern.test(page.file)) {
            pagesToRemove.push(page)
          } else {
            removePagesMatching(pattern, page.children)
          }
        }
        for (const page of pagesToRemove) {
          pages.splice(pages.indexOf(page), 1)
        }
      }
      removePagesMatching(/\.ts$/, pages)
    }
  }
});
