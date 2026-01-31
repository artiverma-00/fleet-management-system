export const signup = async (req, res) => {
  try {
    res.status(200).json({ message: "Signup endpoint" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
