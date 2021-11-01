import { v4 as uuidv4 } from "uuid";

const handler = (req, res) => {
  const eventId = req.query.eventId;

  if (req.method === "POST") {
    const { email, name, text } = req.body;
    const id = uuidv4();
    const newComment = {
      id,
      email,
      name,
      text,
    };
    res.status(201).json({ message: "Succesfull", comment: newComment });
  }

  if (req.method === "GET") {
    const dummyList = [
      {
        id: "c1",
        name: "Murat",
        text: "Nice",
      },
      {
        id: "c2",
        name: "Begüm",
        text: "Good",
      },
    ];
    res.status(201).json({
      message: "Succesfull",
      comments: dummyList,
    });
  }
};

export default handler;
