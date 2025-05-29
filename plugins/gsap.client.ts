// plugins/gsap.client.ts
import { defineNuxtPlugin } from '#app'         // ← เพิ่มบรรทัดนี้
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin(() => {
  gsap.registerPlugin(ScrollTrigger)
})