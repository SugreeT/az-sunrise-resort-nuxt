import { ref } from 'vue'

/**
 * reactive flag สำหรับบอกว่า กำลังโหลดอยู่หรือไม่
 */
export const isLoading = ref(false)

/**
 * composable สำหรับเข้าถึง isLoading
 */
export function useLoading() {
  return {
    isLoading,
    start: () => { isLoading.value = true },
    done:  () => { isLoading.value = false }
  }
}
