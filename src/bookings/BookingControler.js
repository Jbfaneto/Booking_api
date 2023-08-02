class BookingController {
    constructor(service) {
        this.service = service
    }
    index(request){
        const bookings = this.service.findAllBookings()
        return { code: 200, body: { bookings } }
    }

    save(request) {
        const  { roomId, guestName, checkInDate, checkOutDate } = request.body
        
        if (!roomId || !guestName || !checkInDate || !checkOutDate ) {
            return { code: 400, body: { message: "Missing parameters" } }
        }
        const booking = this.service.createBooking( { roomId, guestName, checkInDate, checkOutDate } )
        return {code: 201, body: { message: "Booking created successfully", booking } }
    }
}
module.exports = BookingController