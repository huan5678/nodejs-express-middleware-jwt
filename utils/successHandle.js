const successHandle = (res, message = '', data) => {
  typeof data === 'array' || typeof data === 'object'
    ? res.send({
        status: true,
        message: message,
        data,
      })
    : res.send({
        status: true,
        message: message,
      });
};

module.exports = successHandle;
