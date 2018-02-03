module.exports = {
  description() {
    return 'generates async (container) component';
  },

  fileMapTokens() {
    return {
      __smart__: options => options.settings.getSetting('smartPath'),
    };
  },
};
