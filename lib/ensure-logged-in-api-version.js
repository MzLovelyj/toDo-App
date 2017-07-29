function ensureLoggedInApiVersion (req, res, next) {
    if (req.isAuthenticated()) {
      next();
      return;
    }

    res.status(401).json({ message: 'HEY YOU NEED TO BE LOGGED IN.' });
}


module.exports = ensureLoggedInApiVersion;
