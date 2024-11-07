<template>
  <view class="container"> <!-- 容器 -->
    <text class="page-title">智能旅游路线推荐</text> <!-- 页面标题 -->
    <view class="form"> <!-- 表单容器 -->
      <text class="form-subtitle">请填写您的旅游计划</text> <!-- 表单子标题 -->
      
      <!-- 目的地输入框 -->
      <view class="form-group">
        <label for="destination">目的地：</label>
        <input class="input-field" v-model="destination" placeholder="如福建省福州市鼓楼区，仅限国内" />
      </view>

      <!-- 时间输入 -->
      <view class="form-group">
        <label>时间：</label>
        <view class="date-inputs"> <!-- 日期输入容器 -->
          <input class="input-date" v-model="startDate" type="date" /> <!-- 开始日期输入框 -->
          <text class="date-separator">至</text> <!-- 日期分隔符 -->
          <input class="input-date" v-model="endDate" type="date" /> <!-- 结束日期输入框 -->
        </view>
      </view>

      <!-- 预算输入 -->
      <view class="form-group">
        <label>预算：</label>
        <view class="budget-inputs"> <!-- 预算输入容器 -->
          <input class="input-field budget-input" v-model="minBudget" placeholder="请输入预算下限" type="number" /> <!-- 最小预算输入框 -->
          <text class="budget-separator">—</text> <!-- 预算分隔符 -->
          <input class="input-field budget-input" v-model="maxBudget" placeholder="请输入预算上限" type="number" /> <!-- 最大预算输入框 -->
          <text class="currency">元</text> <!-- 货币单位 -->
        </view>
      </view>

<!-- 景点要求选择 -->
<text class="form-subtitle">请选择您对旅游景点的要求：</text>

<div class="form-group radio-group">
  <label>无障碍设施：</label>
  <div class="radio-item">
    <label><input type="radio" v-model="accessible" value="是" /> 是</label>
    <label><input type="radio" v-model="accessible" value="否" /> 否</label>
  </div>
</div>

<div class="form-group radio-group">
  <label>亲子友好：</label>
  <div class="radio-item">
    <label><input type="radio" v-model="familyFriendly" value="是" /> 是</label>
    <label><input type="radio" v-model="familyFriendly" value="否" /> 否</label>
  </div>
</div>

<div class="form-group radio-group">
  <label>宠物友好：</label>
  <div class="radio-item">
    <label><input type="radio" v-model="petFriendly" value="是" /> 是</label>
    <label><input type="radio" v-model="petFriendly" value="否" /> 否</label>
  </div>
</div>


      <!-- 个性需求输入 -->
      <text class="form-subtitle">请填写您对旅游景点的个性需求</text>
      <!-- 提示信息 -->
      <text class="optional-note">带*号为选填内容</text>
	  <view class="form-group">
        <label for="natureView"><text class="required">*</text>自然景观：</label>
        <input class="input-field" v-model="natureView" placeholder="如草原/海滩/雪山" />
      </view>
      <view class="form-group">
        <label for="socialView"><text class="required">*</text>社会景观：</label>
        <input class="input-field" v-model="socialView" placeholder="如纪念馆/博物馆/科技馆" />
      </view>
      <view class="form-group">
        <label for="food"><text class="required">*</text>周边饮食：</label>
        <input class="input-field" v-model="food" placeholder="如闽菜/川菜/粤菜" />
      </view>
      <view class="form-group">
        <label for="otherNeeds"><text class="required">*</text>其余需求：</label>
        <input class="input-field" v-model="otherNeeds" placeholder="填写对景点的其余需求" />
      </view>

      <!-- 提交按钮 -->
      <button class="submit-button" @click="submitForm">提交 获取景点推荐</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // 表单数据绑定
      destination: '', // 目的地
      startDate: '', // 开始日期
      endDate: '', // 结束日期
      minBudget: '', // 最小预算
      maxBudget: '', // 最大预算
      accessible: '是', // 默认选择“是”
      familyFriendly: '否', // 默认选择“否”
      petFriendly: '否', // 默认选择“否”
      natureView: '', // 自然景观
      socialView: '', // 社会景观
      food: '', // 周边饮食
      otherNeeds: '' // 其他需求
    };
  },
  methods: {
    // 提交表单方法
    submitForm() {
      console.log('提交表单');
      // 实际的提交逻辑
    }
  }
};
</script>

<style scoped>
/* 容器样式 */
.container {
  max-width: 700px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  
}

.page-title {
  display: block; /* 使其成为块级元素 */
  font-size: 32px;
  font-weight: bold;
  color: #007aff;
  text-align: center;
  margin-bottom: 25px;
}

/* 表单样式 */
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* 表单子标题样式 */
.form-subtitle {
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: rgba(0, 0, 0, 0.6); /* 字体颜色 */
  text-align: center; /* 居中 */
}

/* 表单组样式 */
.form-group {
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;
}

.input-field {
  width: 100%;
  max-width: 340px; /* 设置最大宽度为300px */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 5px;
  font-size: 16px;
}

/*日期输入框样式*/
.input-date {
  width: 40%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 5px;
  font-size: 16px;
}

/* 预算输入框样式 */
.budget-inputs {
  display: flex; /* 使子元素在同一行显示 */
  justify-content: space-between; /* 在子元素之间添加间距 */
  align-items: center; /* 垂直居中对齐 */
}

.date-inputs {
  display: flex; /* 使用 Flex 布局 */
  align-items: center; /* 垂直居中对齐 */
  justify-content: space-between; /* 水平分布输入框 */
}

/* 预算和日期分隔符样式 */
.budget-separator, .date-separator {
  margin: 0 5px;
  font-size: 10px;
}

/* 单选按钮组样式 */
.radio-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  width: 80%; /* 控制宽度使其居中 */
}

/* 单选按钮样式 */
.radio-group label {
  margin-right: 50px;
  font-size: 14px;
}

/* 单选按钮项样式 */
.radio-item {
  display: flex;
  align-items: center; /* 垂直居中对齐 */
  margin-bottom: 5px; /* 为每个单选按钮项增加底部间距 */
}

.radio-group input[type='radio'] {
  appearance: none;
  -webkit-appearance: none;
  width: 18px;
  height: 18px;
  border: 2px solid #007aff;
  border-radius: 50%;
  margin-right: 5px;
  cursor: pointer;
  position: relative;
}

/* 单选按钮选中后的样式 */
.radio-group input[type='radio']:checked::after {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 10px;
  height: 10px;
  background-color: #007aff;
  border-radius: 50%;
}

/* 提示信息样式 */
.optional-note {
  color: red; /* 设置字体颜色为红色 */
  font-size: 12px; /* 调整字体大小 */
  margin-top: 10px; /* 添加顶部外边距以增加间距 */
  margin-bottom: 20px; /* 添加底部外边距 */
}

/* 必填字段星号样式 */
.required {
  color: red;
}

/* 提交按钮样式 */
.submit-button {
  width: 100%;
  max-width: 600px;
  padding: 12px 0;
  background-color: #007aff;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 18px;
  margin-top: 20px;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #005bb5;
}
</style>
