export default { // 외부에서 import가능하게 해주는 코드
    getIimestamp: function(date) { // date 파라미터는 Date객체
        date.setHours(date.getHours() + 9);
        return date.toISOString().replace('T','').substring(0, 19);
    }
}