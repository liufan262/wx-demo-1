// pages/movies/movies.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     wx.request({
       url: 'http://t.yushu.im/v2/movie/top250',
       data:'',
       method: 'GET',
       success: function(res){
         console.log(res)
       },
       fail: function(){
         console.log('调用失败')
       }
     })
  },


})