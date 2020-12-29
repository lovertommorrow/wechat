// pages/service/service.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    serviceTabList:[{title:'今日应关注',id:1,num:10},{title:'本月应关注',id:2,num:4},{title:'全部应关注',id:3,num:6}]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  bindtabChange:function(e){
    let _this = this;
    console.log(e.detail,'service')
  },
  bindGoDetail:function(e){
    wx.navigateTo({
      url: '../serviceDetail/serviceDetail',
    })
  }
})