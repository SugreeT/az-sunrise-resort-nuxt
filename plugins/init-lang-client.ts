// plugins/init-lang.client.ts
import { defineNuxtPlugin, useState } from '#app'

export default defineNuxtPlugin(() => {
  // 1) สร้าง reactive state ชื่อ 'lang' (default 'en')
  const lang = useState<string>('lang', () => 'en')

  // 2) ตอน client boot ขึ้นมา ให้อ่านค่าจาก localStorage
  if (process.client) {
    lang.value = (localStorage.getItem('lang') as string) || 'en'
  }
})
