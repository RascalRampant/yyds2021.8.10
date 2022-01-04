//Page Object
import {request} from "../../request/index.js"
Page({
  data: {
    // 轮播
    swiperList: [],
    // 分类导航
    catesList: [],
    // 楼层
    floorList:[]
  },
  //options(Object)
  onLoad: function (options) {
    // 发送轮播请求
    // wx.request({
    //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
    //   success: (result)=>{
    //     this.setData({
    //       swiperList:result.data.message
    //     })
    //   }
    // });
    
      this.getSwiperList(),
      this.getCatesList(),
      this.getFloorList()
        
      

    
  },

  // 轮播图数据
  getSwiperList(){
    request({
        url: '/home/swiperdata'
      })
        .then(result => {
          this.setData({
          swiperList:result
        })
      })
  },

  // 轮播图数据
  getCatesList(){
    request({
        url: '/home/catitems'
      })
        .then(result => {
          this.setData({
          catesList:result
        })
      })
  },
  // 楼层
  getFloorList(){
    request({
        url: '/home/floordata'
      })
        .then(result => {
          this.setData({
          floorList:result
        })
      })
  },
 
});


 