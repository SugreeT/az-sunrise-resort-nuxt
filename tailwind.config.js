/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js}', // ตรวจสอบไฟล์ใน components
    './layouts/**/*.vue', // ตรวจสอบไฟล์ใน layouts
    './pages/**/*.vue', // ตรวจสอบไฟล์ใน pages
    './plugins/**/*.{js,ts}', // ตรวจสอบ plugins
    './nuxt.config.{js,ts}', // ตรวจสอบไฟล์ Nuxt config
  ],
  theme: {
    extend: {}, // กำหนดการปรับแต่ง theme เพิ่มเติม
  },
  plugins: [require('tailwind-scrollbar')],
};
