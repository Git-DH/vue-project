<template>
  <img class="imgsize" :src="imgSrc" />
</template>

<script>
export default {
  props: {
    imgSrc: String,
  },
};
</script>
<style scoped>
.imgsize {
  width: 600px;
}
</style>
