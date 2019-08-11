// 获取应用实例
const app = getApp();

Page({
  toTemplate: function() {
    wx.navigateTo({
      // 目标页面的路径
      url: '../template/index'
    })
  },
  //事件处理函数
  toLogs: function() {
    wx.navigateTo({
      // 目标页面的路径
      url: '../logs/logs'
    })
  },
  //事件处理函数
  toLifecycle: function() {
    wx.navigateTo({
      // 目标页面的路径
      url: '../lifecycle/index'
    })
  },
})
