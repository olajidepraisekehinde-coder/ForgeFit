
export const NairaDollar = (dollarAmount, exchangeRate) => {
    return dollarAmount * exchangeRate

}

export const calculateNight = (checkIn, checkOut) => {
    if (!checkIn || !checkOut) {
        return 0;
    }
    const start = new Date(checkIn)
    const end = new Date(checkOut)
    const differnce = end - start
    const nights = differnce / (1000 * 60 * 60 * 24);
    return nights
}

export const calculateSubtotal = (price, nights) => {
    return price * nights

}

export const calculateTax = (subtotal, taxRate = 0.10) => {
    return subtotal * taxRate
}

export const calculateTOTAL = (subtotal, tax) => {
    return subtotal + tax
}




 // const getNight = () => {
    //     if (!booking.checkIn || !booking.checkOut) {
    //         return 0;
    //     }
    //     const checkIn = new Date(booking.checkIn)
    //     const checkOut = new Date(booking.checkOut)
    //     const differnce = checkOut - checkIn
    //     const nights = differnce / (1000 * 60 * 60 * 24);
    //     return nights
    // }
    // const nights = getNight()

    // const subTotal = selectedRoom ? selectedRoom.price + nights : 0
    // const tax = subTotal * 0.10;

    // const total = subTotal + tax