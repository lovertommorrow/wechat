// components/dialog/dialog.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show:{
      type:Boolean,
      value:false
    },
    width:{
      type:String,
      value:"75%"
    },
    title:{
      type:String,
      value: '标题'
    },
    cancelText:{
      type:String,
      value:'取消'
    },
    saveText:{
      type:String,
      value:'确定'
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
    cancel:function(e){
      this.triggerEvent('cancel',e)
      console.log('cancel')
    },
    save:function(e){
      this.triggerEvent('save',e)
    }
  }
})
