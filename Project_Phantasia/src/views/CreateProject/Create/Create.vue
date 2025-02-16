<style>
@import "../../../Assets/css/main.css";
</style>

<template>
  <div class="Create">
    <!-- SideBarGroups -->
    <div class="CreateMenu">
      <!-- 左邊-Function  -->
      <div class="Menu Function" :class="{ close: isLeftClose }">
        <div class="FunctionBar">
          <CheckBox></CheckBox>
          <span class="Toggle" :class="{ close: isLeftClose }" @click="toggleFunction" />
        </div>
        <div class="MenuContent" :class="{ close: isLeftClose }">
          <CreateMenuContent />
        </div>
      </div>

      <!-- 右側-PageView -->
      <div class="Menu PageView" :class="{ close: isRightClose }">
        <div class="topBar">
          <span class="Toggle" :class="{ close: isRightClose }" @click="togglePageView" />
        </div>
        <div class="MenuContent" :class="{ close: isRightClose }">
          <!-- 右側邊欄內容 -->
          右側邊欄內容
        </div>
      </div>
    </div>
    <!-- 主要內容區域 -->
    <div class="main-content">主要內容區域</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CheckBox from "../../../components/Input/CheckBox.vue";
import CreateMenuContent from "../../../components/CreateMenuContent.vue";

// 左側邊欄的收縮狀態
const isLeftClose = ref(false);

// 右側邊欄的收縮狀態
const isRightClose = ref(false);

// 切換左側邊欄的收縮狀態
const toggleFunction = () => {
  isLeftClose.value = !isLeftClose.value;
};

// 切換右側邊欄的收縮狀態
const togglePageView = () => {
  isRightClose.value = !isRightClose.value;
};
</script>
