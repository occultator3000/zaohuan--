"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      username: "",
      password: "",
      errorMessage: "",
      loading: false
      // 加载状态
    };
  },
  methods: {
    async login() {
      if (!this.username || !this.password) {
        this.errorMessage = "用户名和密码不能为空";
        return;
      }
      this.loading = true;
      try {
        const response = await common_vendor.Ys.callFunction({
          name: "loginuser",
          data: {
            username: this.username,
            password: this.password
          }
        });
        this.loading = false;
        if (response.result.code === 200) {
          common_vendor.index.setStorage({
            key: "username",
            // 存储的键
            data: this.username
            // 存储的值
          });
          common_vendor.index.setStorage({
            key: "userInfo",
            data: response.result.userInfo,
            success: () => {
              common_vendor.index.showToast({
                title: "登录成功",
                icon: "success"
              });
              common_vendor.index.switchTab({
                url: "/pages/tabbar/shouye/shouye"
              });
            }
          });
        } else {
          this.errorMessage = response.result.message;
        }
      } catch (error) {
        this.loading = false;
        this.errorMessage = "登录失败，请重试";
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
    e: common_vendor.o((...args) => $options.login && $options.login(...args)),
    f: $data.loading,
    g: $data.errorMessage
  }, $data.errorMessage ? {
    h: common_vendor.t($data.errorMessage)
  } : {}, {
    i: $data.loading
  }, $data.loading ? {} : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
