const Booking = require('./Booking')

class BookingService {
    constructor(repository) {
        this.repository = repository
    }

    findAllBookings() {
        return this.repository.findAll()
    }

    createBooking({roomId, guestName, checkInDate, checkOutDate }){
        const newBooking = new Booking(roomId, guestName, checkInDate, checkOutDate)
        
        const overlappingBooking = this.repository.findAll().find((booking) => {
            return (
                booking.roomId === newBooking.roomId &&
                booking.checkInDate < newBooking.checkOutDate &&
                booking.checkOutDate > newBooking.checkInDate 
            )
        })

        if (overlappingBooking) {
            throw new Error("THe room is not available for the selected date")
        }

        this.repository.create(newBooking)
        return newBooking
    }
}

module.exports = BookingService