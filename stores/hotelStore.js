import { defineStore } from 'pinia';

export const useHotelStore = defineStore('hotel', {
  state: () => ({
    rooms: [],
    booking: {},
  }),
  actions: {
    setRooms(rooms) {
      this.rooms = rooms;
    },
    setBooking(booking) {
      this.booking = booking;
    },
  },
});
