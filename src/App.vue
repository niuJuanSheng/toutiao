<template>
  <div id="app">
    <!-- 分类组件 -->
    <Category></Category>
    <!-- 频道组件 -->
    <NewList></NewList>
  </div>
</template>

<script>
import Category from '@/components/category.vue'
import NewList from '@/components/newList.vue'
export default {
  components: { Category, NewList }
}
</script>

<style scoped lang="less"></style>
