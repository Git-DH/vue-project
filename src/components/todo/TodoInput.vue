<template>
  <div class="inputBox shadow">
    <input type="text" name="" v-model="newTodoItem" id="" @keyup.enter="addTodo" placeholder="Type what you have todo" />
    <span class="addContainer" @click="addTodo">
      <i class="addBtn fas fa-plus" aria-hidden="true"></i>
    </span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newTodoItem: '',
    };
  },
  methods: {
    addTodo() {
      // trim 양쪽에 빈값을 지움
      if (this.newTodoItem.trim() !== '') {
        const value = this.newTodoItem;
        // emit = 이벤트 발생
        this.$emit('childAddTodo', value);
      } else {
        this.$emit('modalOpen');
      }
      this.newTodoItem = '';
    },
  },
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background-color: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
  display: flex;
  padding-left: 5px;
}
.inputBox input {
  flex-grow: 1;
  border-style: none;
  font-size: 0.9rem;
  padding: 0 10px;
}
.addContainer {
  cursor: pointer;
  background: linear-gradient(to right, #6478fb, #8763fb);
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addContainer > .addBtn {
  color: white;
  vertical-align: middle;
}
</style>
