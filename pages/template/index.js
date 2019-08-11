// 闭包变量
let i = 0;

Page({
  data: {
    text: "这是一段文本",
    isMale: false,
    names: ["Jon", "Bob", "Jack"],
    name: {
      firstName: "shuai",
      lastName: "li"
    },
    color: "red"
  },
  changeText: function(){
    i++;
    this.setData({
      text: "this is a text" + i
    })
  }
})
