// pages/category/index.js

import {request} from "../../request/index.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 左边的菜单数据
    leftMenuList: [],
    // 右侧的菜单数据
    rightMenuList: [],
    // 被点击得左侧菜单
    currentIndex: 0,
    // 右侧滚动距离顶部
    scrollTop:0


  },

  // 接口的返回数据
  Cates:[],

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const Cates = wx.getStorageSync("cates");
    if (!Cates) {
      this.getCates()
    } else {
      if (Date.now() - Cates.time > 1000 * 10) {
        this.getCates()
      } else {
        this.Cates = Cates.data;
        // 左侧
        let leftMenuList = this.Cates.map(v => v.cat_name);
        // 右侧
        let rightMenuList = this.Cates[0].children;

        this.setData({
          leftMenuList,
          rightMenuList
        })

      }
    }
  },
  // 获取分类数据
  getCates() {
    request({
      url:"/categories"
    })
      .then(res => {
        this.Cates = res;

        // 把接口的数据存入本地数据中
        wx.setStorageSync("cates", {time:Date.now(),data:this.Caztes});

        // 左侧
        let leftMenuList = this.Cates.map(v => v.cat_name);
        // 右侧
        let rightMenuList = this.Cates[0].children;

        this.setData({
          leftMenuList,
          rightMenuList
        })
    })
  },
  // 左侧菜单点击事件
  handleItemTap(e) {
    const { index } = e.currentTarget.dataset;
    let rightMenuList = this.Cates[index].children;
    this.setData({
      currentIndex: index,
      rightMenuList,
      scrollTop:0
    })
    

  }


 
 
})