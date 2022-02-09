const withAuth = (req, res, next) => {
  // What functionality are we missing?
  if (!req.session.loggedIn) {
    res.redirect('/')
  } else {
    next()
  }
};

module.exports = withAuth;
