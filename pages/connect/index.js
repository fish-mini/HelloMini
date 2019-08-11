// 获取应用实例
const data = require("./common");

Page({
  changeText: function(){
    i++;
    this.setData({
      text: "this is a text" + i
    })
  }
})
