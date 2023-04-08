function getFormattedDateTime(dateObj) {
    let year = dateObj.getFullYear()
    let month = String(dateObj.getMonth() + 1).padStart(2, 0)
    let date = String(dateObj.getDate()).padStart(2, 0)
    let hours = dateObj.getUTCHours() + 5
    let minutes = dateObj.getUTCMinutes() + 45

    if (minutes > 59) hours += 1

    let meridiem = hours > 12 ? 'PM' : 'AM'
    minutes = String(minutes % 60).padStart(2, 0)
    hours = String(hours === 12 ? 12 : hours % 12).padStart(2, 0)

    return `${year}-${month}-${date} | ${hours}:${minutes} ${meridiem}`
}

export { getFormattedDateTime }
