const httpStatus = require("http-status");

module.exports.testController = async (req, res, next) => {
  try {
    return res.status(httpStatus.OK).json({
      code: httpStatus.OK,
      message: "Access Success updated!!!",
    });
  } catch (error) {
    next(error);
  }
};
