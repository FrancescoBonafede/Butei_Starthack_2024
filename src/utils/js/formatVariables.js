function euroFormat(price) {
    return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(price)
}

export { euroFormat }