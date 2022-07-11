<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput @childAddTodo="addTodo"></TodoInput>
    <TodoList :propsItems="todoItems" @childRemoveTodo="removeTodo"></TodoList>
    <TodoFooter @childRemoveAll="removeAllTodo"></TodoFooter>
  </div>
  <AlertModal :show="modalShow" header="알림창" body="내용을 입력해 주세요."></AlertModal>
</template>

<script>
import TodoHeader from './components/todo/TodoHeader.vue';
import TodoInput from './components/todo/TodoInput.vue';
import TodoList from './components/todo/TodoList.vue';
import TodoFooter from './components/todo/TodoFooter.vue';
import AlertModal from './components/common/AlertModal.vue';
export default {
  name: 'App',
  data() {
    return {
      todoItems: [],
      cnt: 0,
    };
  },
  methods: {
    addTodo(todoItem) {
      // if (this.todoItems.includes(todoItem)) {
      //   alert('같은 todo가 존재합니다');
      // } else {
      //   this.todoItems.push(todoItem);
      // }
      this.todoItems.push({
        key: this.cnt++,
        value: todoItem,
      });
    },
    removeTodo(key) {
      // this.todoItems.splice(index, 1);
      this.todoItems.forEach((item, index) => {
        if (item.key === key) {
          this.todoItems.splice(index, 1);
        }
      });
    },
    removeAllTodo() {
      this.todoItems.splice(0);
    },
    changeValue() {
      const json = JSON.stringify(this.todoItems);
      localStorage.setItem('todoItems', json);
      localStorage.setItem('cnt', this.cnt);
    },
  },
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
    AlertModal,
  },
  // todoItems 배열 안에 값이 바뀌면 실행
  // 배열의 주솟값은 고정이라 deep으로 안에 내용이 바뀌는 지 확인해야함
  watch: {
    todoItems: {
      deep: true,
      handler() {
        this.changeValue();
      },
    },
  },
  created() {
    const json = localStorage.getItem('todoItems');
    if (json) {
      const todoItems = JSON.parse(json);
      todoItems.forEach((item) => {
        this.todoItems.push(item);
      });
      const cnt = ~~localStorage.getItem('cnt');
      this.cnt = cnt;
    }
    // if (localStorage.length > 0) {
    //   for (let i = 0; i < localStorage.length; i++) {
    //     this.todoItems.push(localStorage.key(i));
    //   }
    // }
  },
};
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f8;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
