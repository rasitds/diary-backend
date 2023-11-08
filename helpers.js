const currentDate = () => {
    const current = new Date()
    const date = current.getDate() + "." + (current.getMonth()+1) + "." + current.getFullYear()
    return date
}


module.exports = { currentDate }