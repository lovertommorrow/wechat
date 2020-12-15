const TITLE_HEIGHT = 30
const ANCHOR_HEIGHT = 18
Page({
  data: {
    toView:'',
    singers: [],
    scrollTop:0,
    HOT_NAME:'热',
    listHeight:[],
    currentIndex:0,
    fixedTitle:'热',
    fixedTop:0,
    list:[
      {
        "index": "X",
        "name": "薛之谦",
        "isHot":true,
        "img":'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
      },
      {
        "index": "C",
        "name": "蔡依林",
        "isHot":true,
        "img":'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
      },
      {
        "index": "C",
        "name": "Cal",
        "isHot":false,
        "img":'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
      },
      {
        "index": "C",
        "name": "曹操",
        "isHot":true,
        "img":'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
      },
      {
        "index": "C",
        "name": "曹植",
        "isHot":false,
        "img":'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
      },
      {
        "index": "C",
        "name": "曹丕",
        "isHot":false,
        "img":'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
      },
      {
        "index": "C",
        "name": "蔡明",
        "isHot":true,
        "img":'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
      },
      {
        "index": "P",
        "name": "潘长江",
        "isHot":false,
        "img":'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
      },
      {
        "index": "P",
        "name": "潘仁美",
        "isHot":false,
        "img":'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
      },
      {
        "index": "Q",
        "name": "齐秦",
        "isHot":false,
        "img":'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
      },
      {
        "index": "a",
        "name": "艾伦",
        "isHot":false,
        "img":'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
      },
      {
        "index": "O",
        "name": "欧阳娜娜",
        "isHot":true,
        "img":'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
      },
      {
        "index": "F",
        "name": "冯绍峰",
        "isHot":false,
        "img":'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
      },
      {
          "index": "Z",
          "name": "周杰伦",
          "isHot":false,
          "img":'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
      },
      {
          "index": "B",
          "name": "BIGBANG (빅뱅)",
          "isHot":false,
          "img":'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
      },
      {
          "index": "B",
          "name": "陈奕迅",
          "isHot":false,
          "img":'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
      },
      {
          "index": "L",
          "name": "林俊杰",
          "isHot":false,
          "img":'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
      },
      {
          "index": "A",
          "name": "Alan Walker (艾伦·沃克)",
          "isHot":true,
          "img":'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
      },
    ]
  },
  onLoad: function () {
    var that = this,
        list = that.data.list;
    wx.hideLoading()
    this.setData({
      singers: this.normalizeSinger(list)
    })
    this.calculateHeight()
  },
  //处理数据
  normalizeSinger(list) {
    //歌手列表渲染
    let map = {
      hot: {
        title: this.data.HOT_NAME,
        items: []
      }
    }
    list.forEach((item) => {
      //热门
      if (item.isHot) {
        map.hot.items.push({
          name: item.name,
          avatar:item.img
        })
      }
      //其余数据
      const key = item.index.toUpperCase()//叫所有的转成大写
      if (!map[key]) {
        map[key] = {
          title: key,
          items: []
        }
      }
      map[key].items.push({
        name: item.name,
        avatar: item.img
      })
    })
    // 为了得到有序列表，我们需要处理 map
    let ret = []
    let hot = []
    for (let key in map) {
      let val = map[key]
      if (val.title.match(/[a-zA-Z]/)) {
        ret.push(val)
      } else if (val.title === this.data.HOT_NAME) {
        hot.push(val)
      }
    }
    ret.sort((a, b) => {
      return a.title.charCodeAt(0) - b.title.charCodeAt(0)
    })
    return hot.concat(ret)
  },
  scroll(e){
    var newY = e.detail.scrollTop;
    this.scrollY(newY);
  },
  scrollY(newY) {
    const listHeight = this.data.listHeight
    // 当滚动到顶部，newY>0
    if (newY == 0 || newY < 0) {
      this.setData({
        currentIndex:0,
        fixedTitle:this.data.HOT_NAME
      })
      return
    }
    // 在中间部分滚动
    for (let i = 0; i < listHeight.length - 1; i++) {
      let height1 = listHeight[i]
      let height2 = listHeight[i + 1]
      if (newY >= height1 && newY < height2) {
        this.setData({
          currentIndex:i,
          fixedTitle:this.data.singers[i].title
        })
        this.fixedTt(height2 - newY);
        return
      }
    }
    // 当滚动到底部，且-newY大于最后一个元素的上限
    this.setData({
      currentIndex: listHeight.length - 2,
      fixedTitle: this.data.singers[listHeight.length - 2].title
    })
  },
  fixedTt(newVal) {
    let fixedTop = (newVal > 0 && newVal < TITLE_HEIGHT) ? newVal - TITLE_HEIGHT : 0
    if (this.data.fixedTop === fixedTop) {
      return
    }
    this.setData({
      fixedTop:fixedTop
    })
  },
  //计算所有模块距离顶部的高度
  calculateHeight() {
    var lHeight = [],
        that = this;
    let height = 0;
    lHeight.push(height);
    var query = wx.createSelectorQuery();
    query.selectAll('.list-group').boundingClientRect(function(rects){
      var rect = rects,
          len = rect.length;
      for (let i = 0; i < len; i++) {
        height += rect[i].height;
        lHeight.push(height)
      }  
    }).exec();
    var calHeight = setInterval(function(){
      if (lHeight != [0]) {
        that.setData({
          listHeight: lHeight
        });
        clearInterval(calHeight);
      } 
    },1000)
  },
  //点击右边tab回到对应区域，通过id实现
  scrollToview(e){
    var id = e.target.dataset.id
    if (id == '热') {
      this.setData({
        scrollTop:0
      })
    } else {
      this.setData({
        toView: id
      })
    }
    
  }
})