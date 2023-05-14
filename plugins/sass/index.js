module.exports = {
  onPreBuild: async ({ utils: { run } }) => {
    await run.command(
      "sass sass:_site/css"
    );
  },
};
