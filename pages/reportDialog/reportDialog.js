// pages/reportDialog/reportDialog.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isShow:{
      type:Boolean,
      value:false
    },
  },
  observers:{
    "isShow":function(val){
      if(!val){
        this.setData({
          textVal:''
        })
      }
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    textVal:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindCancel:function(e){
      this.triggerEvent('CancelReport',e)
    },
    bindSave:function(e){
      let _this = this
      this.triggerEvent('SaveReport',{val:_this.textVal})
    },
    bindInputText:function(e){
      this.setData({
        textVal:e.detail.value
      })
    }
  }
})
