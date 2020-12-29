// pages/processed/processedDialog.js
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

  /**
   * 组件的初始数据
   */
  data: {
    selectVal:'',
    textVal:''
  },

  observers:{
    "isShow":function(val){
      if(!val){
        this.setData({
          selectVal:'',
          textVal:''
        })
      }
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    bindRadioChange:function(e){
      this.setData({
        selectVal:e.detail.value
      })
    },
    bindTextInput:function(e){
      this.setData({
        textVal:e.detail.value
      })
    },
    bindCancel:function(e){
      this.triggerEvent('Cancel',e)
    },
    bindSave:function(e){
      let _this = this
      if(_this.data.selectVal == "2" && _this.data.textVal.length==0){
        return
      }
      this.triggerEvent('Save',e)
    }
  }
})
