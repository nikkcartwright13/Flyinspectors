const CompanyModal = require("../jsonModels/companyModal");

// ფუნქცია უნიკალური 5-ციფრიანი ID-სთვის
const generateUniqueCompanyId = async () => {
    let unique = false;
    let newId;

    while (!unique) {
        newId = Math.floor(10000 + Math.random() * 90000).toString();
        const existing = await CompanyModal.findOne({ companyId: newId });
        if (!existing) unique = true;
    }

    return newId;
};

const createCompany = async (req, res) => {
    try {
        const {
            title,
            userName,
            password,
            document
        } = req.body;

        const companyId = await generateUniqueCompanyId();  // უნიკალური 5-ციფრიანი ID

        const company = new CompanyModal({
            companyId,
            title,
            userName,
            password,
            document,
        });

        const data = await company.save();

        return res.status(200).send(data);
    } catch (error) {
        return res.status(500).send("Something went wrong while creating company!");
    }
};

module.exports = { createCompany };
