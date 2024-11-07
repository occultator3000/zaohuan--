"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  methods: {
    // 跳转到登录页面
    navigateToLogin() {
      common_vendor.index.navigateTo({
        url: "/pages/login/login"
      });
    },
    // 跳转到注册页面
    navigateToRegister() {
      common_vendor.index.navigateTo({
        url: "/pages/register/register"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0,
    b: common_vendor.o((...args) => $options.navigateToLogin && $options.navigateToLogin(...args)),
    c: common_vendor.o((...args) => $options.navigateToRegister && $options.navigateToRegister(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-085f0530"]]);
wx.createPage(MiniProgramPage);
