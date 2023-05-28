const asyncResponseMock: Promise<void> = new Promise((resolve, reject) => {
  try {
    setTimeout(() => {
      resolve();
    }, 1);
  } catch (err) {
    reject(err);
  }
});

export { asyncResponseMock };
