import { UserInfo } from "../models/users.js";

export const updateCreator = async (req, res) => {
  try {
    const { name, file } = req.body;

    const { address } = req.query;
    if (!address) {
      res.send("All inputs required");
    }

    const filter = { address: address };
    const userInfo = await UserInfo.findOne(filter);
    console.log(userInfo);

    if (userInfo) {
      const update = {
        $set: {
          name: name,
          address: address,
          file: file,
        },
      };
      const results = await UserInfo.updateOne(filter, update);
      res.json(results);
    }
  } catch (err) {
    logger.error(err);
    res.send("Address not Matched");
  }
};
