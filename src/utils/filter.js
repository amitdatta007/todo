const filterer = (tasks, filter) => {

    const high = tasks.filter((task) => task.priority === 'high').sort((a, b) => (a.id - b.id))
    const medium = tasks.filter((task) => task.priority === 'medium').sort((a, b) => (a.id - b.id))
    const low = tasks.filter((task) => task.priority === 'low').sort((a, b) => (a.id - b.id))

    if (filter.name === 'Default') {
        return tasks.sort((a, b) => (a.id - b.id))
    }
    if (filter.name === 'Piority (High to Low)') {
        return [...high, ...medium, ...low]
    }
    if (filter.name === 'Piority (Low to High)') {
        return [...low, ...medium, ...high]
    }
    return tasks
}

export default filterer;