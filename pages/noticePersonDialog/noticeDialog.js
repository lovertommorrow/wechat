// pages/noticePersonDialog/noticeDialog.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isShow:{
      type:Boolean,
      value:false
    },
    msg:{
      type:String,
      value:'事件关联人张三，住址：1幢362号201室，电话13574689562'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindCancel:function(e){
      this.triggerEvent('Cancel',e)
    },
    bindSave:function(e){
      this.triggerEvent('Save',e)
    }
  }
})
