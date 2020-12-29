// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    welcomeMsg: '欢迎李玉访问智慧社区！',
    welcomeDate:'2020/10/27 10:30:00',
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
  bindToPage:(e)=>{
    console.log(e.currentTarget)
    wx.navigateTo({
      url: `../${e.currentTarget.dataset.type}/${e.currentTarget.dataset.type}`
    })
    
  }
})