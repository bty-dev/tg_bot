export const authUser = (req, res) => {
    const {
        login,
        password
    } = req.body;

    if (login === "admin" && password === "admin") {
        res.status(200).json("Auth correct!")
    } else {
        res.status(400).json("Error!")
    }
}