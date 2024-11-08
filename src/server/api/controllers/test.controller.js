export const sayPong = async (req, res, next) => {
  try {
    return res.status(200).json('Pong');
  } catch (error) {
    next(error);
  }
};
