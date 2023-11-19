/*
Filename: SophisticatedCode.js

Description:
This code showcases a sophisticated implementation of a web-based hotel management system. It includes features like room management, booking management, guest management, and billing. 

Please note that this is a simplified version aiming to demonstrate complexity, and it does not include all the necessary dependencies, libraries, or error handling mechanisms that would be required in a production-ready application.

Author: AI Assistant

*/

// ----------------------------- Room Management -----------------------------

class Room {
  constructor(roomNumber, roomType, price) {
    this.roomNumber = roomNumber;
    this.roomType = roomType;
    this.price = price;
    this.isOccupied = false;
  }

  getRoomNumber() {
    return this.roomNumber;
  }

  getRoomType() {
    return this.roomType;
  }

  getPrice() {
    return this.price;
  }

  isRoomOccupied() {
    return this.isOccupied;
  }

  markOccupied() {
    this.isOccupied = true;
  }

  markVacant() {
    this.isOccupied = false;
  }
}

class RoomManager {
  constructor() {
    this.rooms = [];
  }

  addRoom(roomNumber, roomType, price) {
    const room = new Room(roomNumber, roomType, price);
    this.rooms.push(room);
  }

  getAllRooms() {
    return this.rooms;
  }

  getAvailableRooms() {
    return this.rooms.filter(room => !room.isRoomOccupied());
  }

  getOccupiedRooms() {
    return this.rooms.filter(room => room.isRoomOccupied());
  }

  getRoomByNumber(roomNumber) {
    return this.rooms.find(room => room.getRoomNumber() === roomNumber);
  }
}

// -------------------------- Booking Management ----------------------------

class Booking {
  constructor(room, guest, checkInDate, checkOutDate) {
    this.room = room;
    this.guest = guest;
    this.checkInDate = checkInDate;
    this.checkOutDate = checkOutDate;
  }

  getRoom() {
    return this.room;
  }

  getGuest() {
    return this.guest;
  }

  getCheckInDate() {
    return this.checkInDate;
  }

  getCheckOutDate() {
    return this.checkOutDate;
  }
}

class BookingManager {
  constructor() {
    this.bookings = [];
  }

  addBooking(room, guest, checkInDate, checkOutDate) {
    const booking = new Booking(room, guest, checkInDate, checkOutDate);
    this.bookings.push(booking);
    room.markOccupied();
  }

  getAllBookings() {
    return this.bookings;
  }

  cancelBooking(booking) {
    const index = this.bookings.indexOf(booking);
    if (index > -1) {
      this.bookings.splice(index, 1);
      booking.getRoom().markVacant();
    }
  }
}

// ---------------------------- Guest Management ----------------------------

class Guest {
  constructor(name, email, phoneNumber) {
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  getPhoneNumber() {
    return this.phoneNumber;
  }
}

class GuestManager {
  constructor() {
    this.guests = [];
  }

  registerGuest(name, email, phoneNumber) {
    const guest = new Guest(name, email, phoneNumber);
    this.guests.push(guest);
    return guest;
  }

  getGuests() {
    return this.guests;
  }

  searchGuestsByName(name) {
    return this.guests.filter(
      guest => guest.getName().toLowerCase().includes(name.toLowerCase())
    );
  }
}

// ----------------------------- Billing -------------------------------------

class BillingManager {
  calculateTotalBill(booking) {
    const daysStayed = this.calculateDaysStayed(booking);
    const roomPrice = booking.getRoom().getPrice();
    return daysStayed * roomPrice;
  }

  calculateDaysStayed(booking) {
    const checkInDate = new Date(booking.getCheckInDate());
    const checkOutDate = new Date(booking.getCheckOutDate());
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    
    return Math.ceil((checkOutDate - checkInDate) / millisecondsPerDay);
  }
}

// ------------------------ Hotel Management System -------------------------

class HotelManagementSystem {
  constructor() {
    this.roomManager = new RoomManager();
    this.bookingManager = new BookingManager();
    this.guestManager = new GuestManager();
    this.billingManager = new BillingManager();
  }

  initializeRooms() {
    this.roomManager.addRoom(101, "Single", 100);
    this.roomManager.addRoom(102, "Single", 100);
    this.roomManager.addRoom(201, "Double", 150);
    this.roomManager.addRoom(202, "Double", 150);
    this.roomManager.addRoom(301, "Suite", 200);
  }
}

// ------------------------------ Usage --------------------------------------

const hotel = new HotelManagementSystem();
hotel.initializeRooms();

const guest1 = hotel.guestManager.registerGuest("John Doe", "john@example.com", "123456789");
const guest2 = hotel.guestManager.registerGuest("Jane Smith", "jane@example.com", "987654321");

const availableRooms = hotel.roomManager.getAvailableRooms();
const roomToBook = availableRooms[0];

hotel.bookingManager.addBooking(roomToBook, guest1, "2022-01-01", "2022-01-05");

console.log("All rooms:", hotel.roomManager.getAllRooms());
console.log("Available rooms:", availableRooms);
console.log("Occupied rooms:", hotel.roomManager.getOccupiedRooms());
console.log("All bookings:", hotel.bookingManager.getAllBookings());
console.log("Total bill for booking:", hotel.billingManager.calculateTotalBill(hotel.bookingManager.getAllBookings()[0]));