import { UserInfo } from "../models/users.js";

export const getCreator = async (req, res) => {
  try {
    const { address } = req.query;
    if (!address) {
      res.send("All inputs required");
    }

    const filter = { address: address };
    const userInfo = await UserInfo.findOne(filter);
    console.log(userInfo);

    if (userInfo) {
      const result = {
        name: userInfo.name,
        address: userInfo.address,
        file: userInfo.file,
      };
      res.json({ result });
    } else {
      console.log("No Data Found");
    }
  } catch (err) {
    logger.error(err);
    res.send("Txn object not found");
  }
};
