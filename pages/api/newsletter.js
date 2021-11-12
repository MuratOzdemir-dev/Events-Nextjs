import axios from "axios";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address." });
      return;
    }
    await axios.post(`${process.env.FIREBASE_API}/email_addresses.json`, {
      userEmail,
    });
    res.status(201).json({ message: `Signed up for ${userEmail}!` });
  }
};

export default handler;
