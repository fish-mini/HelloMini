// 获取应用实例
const app = getApp();
// 输出全局定义的数据
console.log(app.globalData)

let i = 0;

Page({
  data: {
    text: "这是一段文本",
    isMale: false,
    names: ["Jon", "Bob", "Jack"],
    name: {
      firstName: "shuai",
      lastName: "li"
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      // 目标页面的路径
      url: '../logs/logs'
    })
  },
  changeText: function(){
    i++;
    this.setData({
      text: "this is a text" + i
    })
  }
})
