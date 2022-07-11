<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" @click="clearTodo">Clear All</span>
  </div>
</template>

<script>
export default {
  methods: {
    clearTodo() {
      // localStorage.clear();
      this.$emit('childRemoveAll');
    },
  },
};
</script>

<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: #fff;
  border-radius: 5px;
  margin: 0 auto;
}
.clearAllBtn {
  cursor: pointer;
  color: tomato;
  display: block;
  border-radius: 5px;
  transition: all 0.4s ease-in-out;
}
.clearAllBtn:hover {
  color: #fff;
  background-color: tomato;
}
</style>
