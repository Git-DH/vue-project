<template>
  <img v-bind:src="imgSrc" alt="" srcset="" />
</template>

<script>
export default {
  data() {
    return {
      imgSrc: 'https://images.unsplash.com/photo-1657477267946-b433c0edbec9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    };
  },
};
</script>
<style scoped></style>
