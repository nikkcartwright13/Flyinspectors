const ClientModal = require("./../jsonModels/clientModal");

const editStatus = async (req, res) => {
    try {
      const { userId, status, oldStatus } = req.body;

      await ClientModal.findOneAndUpdate(
        { userId: userId },
        { status: status,
          oldStatus: oldStatus 
        }
      );
    
    
      // const send = await clients.save();
    
      // return res.status(200).send(send);
      return res.status(200).send("Car seat has been reserved!");
    } catch (error) {
        return res.status(500).send("Something went wrong while creating car!");
    }
};

module.exports = {editStatus}