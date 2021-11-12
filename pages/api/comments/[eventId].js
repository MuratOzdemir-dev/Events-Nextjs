import axios from "axios";

const handler = async (req, res) => {
  const eventId = req.query.eventId;

  if (req.method === "POST") {
    const { email, name, text } = req.body;
    const newComment = {
      email,
      name,
      text,
      eventId,
    };
    try {
      const response = await axios.post(
        `${process.env.FIREBASE_API}/comments.json`,
        newComment
      );
      const data = await response.data;
      newComment.id = data.name;
      res.status(201).json({ message: "Succesfull", comment: newComment });
    } catch (error) {
      res.status(500).json({ error });
      return;
    }
  }
  // --------------------------------------------------------------------------------------

  if (req.method === "GET") {
    try {
      const response = await axios.get(
        `${process.env.FIREBASE_API}/comments.json`
      );
      const data = await response.data;
      const comments = [];
      for (const key in data) {
        const element = { id: key, ...data[key] };
        comments.push(element);
      }

      res.status(201).json({
        message: "Succesfull",
        comments,
      });
    } catch (error) {
      res.status(500).json({ error });
      return;
    }
  }
};

export default handler;
