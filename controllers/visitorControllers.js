import visitorsSchema from "../models/visitorsSchema.js";

const visitorControllers = async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required!" });
  }
  try {
    const add = new visitorsSchema({
      name,
      email,
      message,
    });
    await add.save();
    res.status(201).json({ message: "Message has been sent." });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export default visitorControllers;
