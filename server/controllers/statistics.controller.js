const statistics = {
    views: 100,
    messages: 9,
    employees: 2,
}


export const getAllStatistics = (req, res) => {
    res.status(200).json(statistics)
}