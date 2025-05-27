const CompanyModal = require("../jsonModels/companyModal");

const getCompany = async (req, res) => {
    try {
      const company = await CompanyModal.find();
  
      return res.status(200).send(company);
    } catch (error) {
      console.log(error)
      return res.status(500).send("Something went wrong while getting cars!");
    }
};

module.exports = {getCompany}