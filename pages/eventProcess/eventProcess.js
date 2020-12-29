// pages/eventProcess/eventProcess.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    eventTabList:[{title:'全部事件',id:1,num:10},{title:'紧急事件',id:2,num:4},{title:'普通事件',id:3,num:6}]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  bindToHistoryPage:()=>{
    console.log('goHistoryPage')
  },
  bindtabChange:function(e){
    let _this = this;
    console.log(e.detail,'222')
  },
  bindGoDetail:function(e){
    wx.navigateTo({
      url: `../eventDetail/eventDetail`
    })
    console.log(e.detail,'detail')
  }

})