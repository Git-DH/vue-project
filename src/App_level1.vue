<template>
  <h1>헬로우</h1>
  <div>{{ hello }}</div>
  <div>{{ hello }}</div>
  <div>{{ hello }}</div>
  <div v-if="1">보이냐?</div>
  <div>{{ hello }}</div>
  <input type="text" v-model="hello" name="" id="" />
  <button @click="changeHello">안녕하세요 변경</button>
  <favoriteSingerVue></favoriteSingerVue>
  <favoriteSingerPropsVue imgSrc="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></favoriteSingerPropsVue>
</template>

<script>
import favoriteSingerVue from './components/favoriteSinger.vue';
import favoriteSingerPropsVue from './components/favoriteSingerProps.vue';
export default {
  name: 'App',
  data() {
    return {
      hello: '안녕',
    };
  },
  methods: {
    changeHello() {
      this.hello = '안녕하세요';
    },
  },
  components: {
    favoriteSingerVue,
    favoriteSingerPropsVue,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  margin-top: 60px;
}
</style>
