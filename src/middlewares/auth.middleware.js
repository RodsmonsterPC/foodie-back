import jwt from "../middlewares/auth.middleware.js";

const isAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodeToken = jwt.verify(token);

    if (!decodeToken) {
      throw "Invalid user ID";
    } else {
      next();
    }
  } catch (error) {
    res.status(401).json({
      message: error.message,
    });
  }
};

const isAdmin = async (request, response, next) => {
  try {
    const token = request.headers.authorization.split(" ")[1];
    const tokenPayLoad = jwt.verify(token);

    if (!tokenPayLoad) throw new Error("Invalid authrization");
    const UserId = tokenPayLoad.id;
    const UserFound = await getUserById(UserId);

    if (!UserFound) throw new Error("Invalid authorization");

    const { role = "user" } = UserFound;
    if (role === "admin") {
      next();
    } else {
      response.status(401).json({
        success: false,
        message: "Unauthorization",
      });
    }
  } catch (error) {
    response.status(401).json({
      success: true,
      message: error.message,
    });
  }
};

export { isAuth, isAdmin };
