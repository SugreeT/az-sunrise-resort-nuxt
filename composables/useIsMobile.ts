// ไฟล์: /composables/useIsMobile.ts
import { ref, onMounted, onUnmounted } from 'vue'

export function useIsMobile() {
  // กำหนด breakpoint ว่าเล็กกว่าเท่าไหร่ถือเป็น mobile
  const MOBILE_WIDTH = 768

  // ref เก็บสถานะว่าเป็นมือถือหรือไม่
  const isMobile = ref(false)

  // ฟังก์ชันตรวจสอบหน้าจอ: ถ้า window.innerWidth ≤ MOBILE_WIDTH => ถือเป็น mobile
  function updateIsMobile() {
    isMobile.value = window.innerWidth <= MOBILE_WIDTH
  }

  onMounted(() => {
    // ตรวจสอบครั้งแรกตอน mounted
    updateIsMobile()
    // ฟัง event resize เพื่ออัปเดตค่า isMobile ทุกครั้ง
    window.addEventListener('resize', updateIsMobile)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateIsMobile)
  })

  return { isMobile }
}
