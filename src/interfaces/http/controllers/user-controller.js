const list = (req, res) => {
  res
    .status(200)
    .json({
      test: 'ok',
    });
};

module.exports = {
  list,
};
