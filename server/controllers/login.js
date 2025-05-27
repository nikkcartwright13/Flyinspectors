const CompanyModal = require("../jsonModels/companyModal");


const login = async (req, res) => {
  try {
    const { userName, password } = req.body;

    if (!userName || !password) {
      return res.status(400).send("Username and password are required.");
    }

    const user = await CompanyModal.findOne({ userName }).select("-_id -__v")

    if (!user) {
      return res.status(401).send("User not found.");
    }

    if (user.password !== password) {
      return res.status(401).send("Invalid password.");
    }

    // წარმატებით მოიძებნა
    return res.status(200).json({ message: "Login successful", user });

  } catch (error) {
    console.error(error);
    return res.status(500).send("Something went wrong during login.");
  }
};

module.exports = { login };