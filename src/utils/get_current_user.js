async function getCurrentUserById(req, res) {
  try {
    const token = req.body.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    let userId = decoded.id;
    res.json({
      success: true,
      success_message: "currently logged in user id",
      userId: userId,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      success_message: "cannot find the currently logged in user id",
      error: error,
    });
  }
}
module.exports = getCurrentUserById;
