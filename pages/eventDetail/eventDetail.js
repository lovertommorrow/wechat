// pages/eventDetail/eventDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dealStatus:"等待工作人员处理...",
    showNoticeDialog:false,
    showReportDialog:false,
    showProcessedDialog:false,
    eventTimeline: [
      {
        id: 9,
        time: '08-01 8:08',
        status: 1,
        handler: '王小兰',
        message: '处理完成'
      },
      {
        id: 8,
        time: '08-01 8:07',
        status: 1,
        handler: '王小兰',
        message: '紧急上报相关事件'
      },
      {
        id: 7,
        time: '08-01 8:06',
        status: 1,
        handler: '王小兰',
        message: '已经打电话通知对应车主'
      },
      {
        id: 6,
        time: '08-01 8:05',
        status: 1,
        handler: 'auto',
        message: '系统判断车辆已经移走，处理完成'
      },
      {
        id: 5,
        time: '08-01 8:04',
        status: 1,
        handler: 'auto',
        message: 'AI语音通知车主移车，已接通'
      },
      {
        id: 4,
        time: "08-01 8:03",
        status: 1,
        handler: "auto",
        message: "微信通知网格员关注（等待工作人员处理...）"
      },
      {
        id: 3,
        time: "08-01 8:02",
        status: 0,
        handler: "auto",
        message: "AI语音通知车主移车，未接通"
      },
      {
        id: 2,
        time: "08-01 8:01",
        status: 1,
        handler: "auto",
        message: "自动识别车牌信息为浙B******，车主为张三"
      },
      {
        id: 1,
        time: "08-01 8:00",
        status: 0,
        handler: "auto",
        message: "摄像头监测消防通道堵塞，判断堵塞物"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  bindOpenNotice:function(e){
    this.setData({
      showNoticeDialog:true
    })
  },
  bindEmergencyReport:function(e){
    this.setData({
      showReportDialog:true
    })
  },
  bindProcessed:function(e){
    this.setData({
      showProcessedDialog:true
    })
  },
  bindCancel:function(e){
    this.setData({
      showNoticeDialog:false,
      showReportDialog:false,
      showProcessedDialog:false
    })
  },
  bindSave:function(e){
    this.setData({
      showNoticeDialog:false
    })
  },
  bindSaveReport:function(e){
    this.setData({
      showReportDialog:false
    })
  },
  bindSaveProcessed:function(){
    this.setData({
      showProcessedDialog:false
    })
  }
})