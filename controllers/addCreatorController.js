// import { initSupplyBorrowAPR } from "../scripts/supply&BorrowAPR.js";
// import { logger } from "../logger.js";

// export const addCreator = async (req, res) => {
//   try {
//     // const result = await initSupplyBorrowAPR();

//     if (!result) {
//       res.send("Page not found");
//     }

//     res.send(result);
//   } catch (err) {
//     logger.error(err);
//     res.send("APR not found");
//   }
// };

import { UserInfo } from "../models/users.js";

export const addCreator = async (req, res) => {
  try {
    const { name, address, file } = req.body;

    // Create a new instance of TokenInfo model
    const newData = new UserInfo({
      name,
      address,
      file,
    });

    // Save the data to the database
    const savedData = await newData.save();

    res.json(savedData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
};
