const myPlugin = {};

myPlugin.install = function(Vue) {
  Vue.prototype.$aa = (da) => {
      return da*2;
  }
};

export default myPlugin;