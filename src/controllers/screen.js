const prisma = require("../utils/prisma");

const getScreenSeatsById = async(req, res) => {
const seats = await prisma.seat.findMany({
    where: {
        id: ParseInt(req.params.id)
    },
})
res.json({screen: seats})
}

module.exports = { getScreenSeatsById } 