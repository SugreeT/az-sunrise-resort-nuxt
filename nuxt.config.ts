export default defineNuxtConfig({
  compatibilityDate: '2024-11-01', // ระบุวันที่รองรับฟีเจอร์ของ Nuxt
  devtools: { enabled: true }, // เปิดเครื่องมือ DevTools
  pages: true, // เปิดใช้งานระบบ Pages
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
        {
          rel: 'stylesheet',
          href: '/css/bootstrap.min.css', // Path สำหรับ Bootstrap
        },
        {
          rel: 'stylesheet',
          href: '/css/style.css', // Path สำหรับ Main Style CSS
        },
        {
          rel: 'stylesheet',
          href: '/css/vendors.min.css', // Path สำหรับ Vendors CSS
        },
        {
          rel: 'stylesheet',
          href: '/css/custom.css', // Path สำหรับ Custom CSS
        },

      ],
    },
  },
  css: [
  ],
  modules: ['@pinia/nuxt'], 
  postcss: {
    plugins: {
      tailwindcss: {}, // ตรวจสอบว่า TailwindCSS ถูกโหลด
      autoprefixer: {}, // ใช้ Autoprefixer สำหรับเบราว์เซอร์
    },
  },
  hooks: {
    'pages:extend' (pages) {
      pages.push({
        name: 'home',
        path: '/',
        file: '~/pages/index.vue',
        meta: { layout: 'default' }, // กำหนด layout ที่นี่
      },{
        name: 'index',
        path: '/index',
        file: '~/pages/index.vue',
        meta: { layout: 'default' }, // กำหนด layout ที่นี่
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
      },
      {
        name: 'custom-404',
        path: '/:pathMatch(.*)*',
        file: '~/pages/404.vue'  // ไฟล์ปลายทางที่จะ handle redirect
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
