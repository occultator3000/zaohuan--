"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      username: "",
      password: "",
      confirmPassword: "",
      errorMessage: "",
      loading: false
      // 加载状态
    };
  },
  methods: {
    async register() {
      if (!this.username || !this.password || !this.confirmPassword) {
        this.errorMessage = "所有字段不能为空";
        return;
      }
      if (this.password !== this.confirmPassword) {
        this.errorMessage = "密码和确认密码不一致";
        return;
      }
      this.loading = true;
      try {
        const response = await common_vendor.Ys.callFunction({
          name: "registeruser",
          data: {
            username: this.username,
            password: this.password
          }
        });
        this.loading = false;
        if (response.result.code === 200) {
          common_vendor.index.showToast({
            title: "注册成功",
            icon: "success"
          });
          common_vendor.index.navigateTo({
            url: "/pages/login/login"
          });
        } else {
          this.errorMessage = response.result.message;
        }
      } catch (error) {
        this.loading = false;
        this.errorMessage = "注册失败，请重试";
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.username,
    b: common_vendor.o(($event) => $data.username = $event.detail.value),
    c: $data.password,
    d: common_vendor.o(($event) => $data.password = $event.detail.value),
    e: $data.confirmPassword,
    f: common_vendor.o(($event) => $data.confirmPassword = $event.detail.value),
    g: common_vendor.o((...args) => $options.register && $options.register(...args)),
    h: $data.loading,
    i: $data.errorMessage
  }, $data.errorMessage ? {
    j: common_vendor.t($data.errorMessage)
  } : {}, {
    k: $data.loading
  }, $data.loading ? {} : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
