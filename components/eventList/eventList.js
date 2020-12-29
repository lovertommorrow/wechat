// components/eventList/eventList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    eventList:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindItemToDetail:function(e){
      this.triggerEvent('goEventDetail', {
        id: e.currentTarget.dataset.id
      })
    }
  }
})
