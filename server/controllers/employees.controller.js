const employees = [{
        id: 1,
        name: "Иванов Александр Сергеевич",
        position: "Программист",
    },
    {
        id: 2,
        name: "Николаев Игорь Алексеевич",
        position: "Программист",
    }
]

export const getAllEmployees = (req, res) => {
    res.status(200).json(employees);
}

export const getEmployee = (req, res) => {
    const employeeIndex = employees.findIndex(item => item.id == req.params.id);
    res.status(200).json(employees[employeeIndex]);
}