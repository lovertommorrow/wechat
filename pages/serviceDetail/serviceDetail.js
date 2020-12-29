// pages/serviceDetail/serviceDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    uploaderList:[],//
    uploadNumber:0,//已经上传的图片数
    showUpload:true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  bindUploadImage:function(e){
    let _this = this;
    wx.chooseImage({
      count: 9 - _this.data.uploadNumber,
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success:function(res){
        console.log(res)
        let list = res.tempFilePaths
        _this.setData({
          uploaderList: _this.data.uploaderList.concat(res.tempFilePaths),
        })
        _this.setData({
          uploaderNum: _this.data.uploaderList.length
        })
        if(_this.uploadNumber === 9){
          _this.setData({
            showUpload:false
          })
        }

      }
    })
  },
  bindShowImg:function(e){
    let _this = this;
    console.log(e)
      wx.previewImage({
        urls: _this.data.uploaderList,
        current: _this.data.uploaderList[e.currentTarget.dataset.index]
      })
  },
  bindClearImg:function(e){
    let _this = this;
    let newArr = _this.data.uploaderList
    newArr.splice(e.currentTarget.dataset.index, 1)
    _this.setData({
      uploaderList: newArr,
      uploaderNum: _this.data.uploaderNum - 1,
    });
  }
})