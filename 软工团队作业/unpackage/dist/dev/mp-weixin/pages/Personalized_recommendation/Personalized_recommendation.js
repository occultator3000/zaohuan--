"use strict";
const common_vendor = require("../../common/vendor.js");

const _sfc_main = {
  data() {
    return {
      destination: "",
      startDate: "",
      endDate: "",
      minBudget: "",
      maxBudget: "",
      accessible: "",
      familyFriendly: "",
      petFriendly: "",
      natureView: "",
      socialView: "",
      food: "",
      otherNeeds: ""
    };
  },
  methods: {
    submitForm() {
      console.log("提交表单");
      // 实际的提交逻辑可以在这里实现
    }
  }
};

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    // 表单渲染逻辑
  });
}

const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
