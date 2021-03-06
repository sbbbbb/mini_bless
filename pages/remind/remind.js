const app = getApp();
Page({
  data: {
    remindList:[
      {
        'type':'comment',
        avatar:'http://dev.guotu.zsylife.cn/minidata/index01.png',
        name:"小明",
        time:"4月17日",
        comment:"谢谢你的祝福！",
        resource:"祝你们身体健康~！祝你们身体健康~！祝你们身体健康~！祝你们身体健康~！祝你们身体健康~！"
      },
      {
        'type': 'like',
        avatar: 'http://dev.guotu.zsylife.cn/minidata/index01.png',
        name: "小葱",
        time: "4月17日",
        resource: "祝你们身体健康~！"
      },
      {
        'type': 'comment',
        avatar: 'http://dev.guotu.zsylife.cn/minidata/index01.png',
        name: "大仙",
        time: "4月17日",
        comment: "谢谢你的祝福！",
        resource: "祝你们身体健康~！"
      },
      {
        'type': 'like',
        avatar: 'http://dev.guotu.zsylife.cn/minidata/index01.png',
        name: "狐狸",
        time: "4月17日",
        resource: "祝你们身体健康~！"
      },
    ],
    page:1
  },
  onLoad: function (options) {
    const that = this;
    const $data = Object.assign(app.globalData.ajaxPublic,{p:this.data.page});
    wx.request({
      url: app.globalData.baseServer + '/index.php/api/bless/notice_list',
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      dataType: 'json',
      data: app.globalData.ajaxPublic,
      success(res) {
        that.setData({remindList: res.data.data});
      },
      fail(res) {
        console.log(res);
      }
    }); 
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: "提醒"
    });
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})