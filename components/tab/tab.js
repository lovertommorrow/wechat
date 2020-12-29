// components/tab/tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabList:{
      type:Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    activeNum:1,
    left: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindTabChange:function(e){
      console.log(e)
      this.setData({
        activeNum: e.currentTarget.dataset.id,
        left: e.currentTarget.dataset.id - 1,
      })
      this.triggerEvent('tabChange', {
        id: e.currentTarget.dataset.id
      })
    }
  }
})
