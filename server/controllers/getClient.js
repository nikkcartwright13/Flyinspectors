const ClientModal = require("./../jsonModels/clientModal");

const getClient = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;
        const reverse = req.query.reverse === "true";

        const skip = (page - 1) * limit;
        const sortOrder = reverse ? -1 : 1;

        // წამოიღე მხოლოდ კონკრეტული ველები — სურვილის მიხედვით შეცვალე
        const clients = await ClientModal.find()
            // .select("firstName lastName userId") // ← მხოლოდ name, email და phone ველები წამოიღება
            .sort({ _id: sortOrder })
            .skip(skip)
            .limit(limit);

        const totalClients = await ClientModal.countDocuments();

        return res.status(200).send({
            data: clients,
            pagination: {
                page,
                limit,
                totalClients,
                totalPages: Math.ceil(totalClients / limit),
                reverse,
            },
        });
    } catch (error) {
        console.error("Error getting clients:", error);
        return res.status(500).send("Something went wrong while getting clients!");
    }
};

module.exports = { getClient };
