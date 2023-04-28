const run = async () => {
  const script = await import(`./${process.argv[2]}`);
  await script.default();
};

run()
  .then(() => {
    console.log('SCRIPT FINISHED -----');
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
