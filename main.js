async function register ({ registerSetting }) {
  registerSetting({
    name: 'instructionsStatus',
    label: 'Enable instructions modal',
    type: 'input-checkbox',
    private: false
  })

  registerSetting({
    name: 'instructionsBody',
    label: 'Instructions body',
    type: 'markdown-enhanced',
    private: false
  })
}
async function unregister () {}

module.exports = {
  register,
  unregister
}
