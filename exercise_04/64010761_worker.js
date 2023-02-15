const returnDate = () => {
    const date = new Date()
    postMessage(date)
    setTimeout(returnDate,1000)
}
returnDate()