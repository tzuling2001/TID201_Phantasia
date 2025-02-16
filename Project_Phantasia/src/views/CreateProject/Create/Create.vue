<style>
@import "../../../Assets/css/main.css";
</style>

<template>
  <div class="Create">
    <!-- 左側邊欄 -->
    <div class="sidebar left-sidebar" :class="{ collapsed: isLeftCollapsed }">
      <button @click="toggleLeftSidebar">
        {{ isLeftCollapsed ? "展開" : "收縮" }}
      </button>
      <div class="sidebar-content">
        <!-- 左側邊欄內容 -->
        左側邊欄內容
      </div>
    </div>

    <!-- 主要內容區域 -->
    <div class="main-content">主要內容區域</div>

    <!-- 右側邊欄 -->
    <div class="sidebar right-sidebar" :class="{ collapsed: isRightCollapsed }">
      <button @click="toggleRightSidebar">
        {{ isRightCollapsed ? "展開" : "收縮" }}
      </button>
      <div class="sidebar-content">
        <!-- 右側邊欄內容 -->
        右側邊欄內容
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// 左側邊欄的收縮狀態
const isLeftCollapsed = ref(false);

// 右側邊欄的收縮狀態
const isRightCollapsed = ref(false);

// 切換左側邊欄的收縮狀態
const toggleLeftSidebar = () => {
  isLeftCollapsed.value = !isLeftCollapsed.value;
};

// 切換右側邊欄的收縮狀態
const toggleRightSidebar = () => {
  isRightCollapsed.value = !isRightCollapsed.value;
};
</script>
