const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  // 멀티네임 에러 안 뜨게하는법
  lintOnSave: false,
  // proxy 설정 CORS 를 피하기 위해
  // devServer: {
  //   proxy: {
  //     '/todo': {
  //       target: 'http://localhost',
  //     },
  //   },
  // },
});