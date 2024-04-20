const app = getApp();
import {
  evaluate
} from 'eval5.js'
var inputVal = '';
var msgList = [];
var receivedMessage = '';
var scope = '';
var windowWidth = wx.getSystemInfoSync().windowWidth;
var windowHeight = wx.getSystemInfoSync().windowHeight;
var keyHeight = 0;

let socketOpen = false;
let socketMsgQueue = [];
let lineCount = Math.floor(windowWidth / 16) - 6;
let curAnsCount = 0;
/**
 * 初始化数据
 */
function initData(that) {
  inputVal = '';
  msgList = [{
    speaker: 'server',
    contentType: 'text',
    content: "Hello, welcome to APIT."
  }, ]
  that.setData({
    msgList,
    inputVal
  })
}

function sendSocketMessage(msg) {
  if (socketOpen) {
    wx.sendSocketMessage({
      data: msg
    })
  } else {
    socketMsgQueue.push(msg)
  }
}



Page({
  /**
   * 页面的初始数据
   */
  data: {
    scrollHeight: '100vh',
    inputBottom: 0
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    initData(this);
    this.setData({
      cusHeadIcon: "/images/春日野穹.png",
    });
  },



  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (wx.getStorageSync('expireTime') == null || wx.getStorageSync('expireTime') < Date.now()) {
      wx.removeStorageSync('expireTime')
      let username = wx.getStorageSync('username')
      wx.removeStorageSync('username')
      wx.request({
        url: 'http://127.0.0.1:80/user/logout',
        method: "get",
        data: {
          "username": username,
        },
        success: ({
          data
        }) => {
          wx.showToast({
            icon: 'none',
            title: '身份验证到期，请重新登录',
            duration: 2500
          })
        }
      })

    }
    wx.request({
      url: 'http://127.0.0.1:80/user/checkUserKey',
      method: "get",
      data: {
        "username": wx.getStorageSync('username'),
        "key": wx.getStorageSync('key')
      },
      success: ({
        data
      }) => {
        if (data.code === 500) {
          wx.showToast({
            icon: 'none',
            title: data.message,
            duration: 2500
          })
          wx.removeStorageSync('username')
          wx.removeStorageSync('key')
          wx.redirectTo({
            url: '/pages/login/login',
          })
        }
      }
    })
    if (wx.getStorageSync('username') == null || wx.getStorageSync('username') === '') {
      wx.redirectTo({
        url: '/pages/login/login',
      })
    }

    wx.connectSocket({
      url: 'ws://127.0.0.1:80/chatWebSocket/' + wx.getStorageSync('username')
    })
    // console.log( new Date());
    // console.log(wx.getStorageSync('username'));



    wx.onSocketOpen((res) => {
      socketOpen = true
      console.log("打开socket");
      wx.showToast({
        icon: 'none',
        title: '会话建立成功',
        duration: 500
      })
      socketMsgQueue = [];
      wx.onSocketMessage((result) => {
        receivedMessage += result.data;
        result.data = result.data.replace(" ", "&nbsp;");
        curAnsCount++;
        if (curAnsCount % lineCount == 0) {
          wx.createSelectorQuery().select('#chatPage').boundingClientRect(function (rect) {
            // 使页面滚动到底部
            wx.pageScrollTo({
              scrollTop: rect.bottom
            })
          }).exec()
        }
        msgList[msgList.length - 1].content = msgList[msgList.length - 1].content + result.data
        this.setData({
          msgList
        })
      })
    })
  },
  onHide: function () {
    wx.closeSocket()
    wx.onSocketClose((result) => {
      console.log("socket关闭成功");
      wx.showToast({
        icon: 'none',
        title: '会话关闭成功',
        duration: 500
      })
    })
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
   * 获取聚焦
   */
  focus: function (e) {
    let res = wx.getSystemInfoSync()
    let navBarHeight = res.statusBarHeight + 44 //顶部状态栏+顶部导航，大部分机型默认44px
    keyHeight = e.detail.height - navBarHeight;
    if (keyHeight < 0) {
      keyHeight = 0
    }
    this.setData({
      scrollHeight: (windowHeight - keyHeight) + 'px'
    });
    this.setData({
      toView: 'msg-' + (msgList.length - 1),
      inputBottom: (keyHeight) + 'px'
    })
  },

  //失去聚焦(软键盘消失)
  blur: function (e) {
    this.setData({
      scrollHeight: '100vh',
      inputBottom: 0
    })
    this.setData({
      toView: 'msg-' + (msgList.length - 1)
    })

  },

  /**
   * 发送点击监听
   */
  sendClick: function (e) {
    receivedMessage = ''
    sendSocketMessage(e.detail.value)
    msgList.push({
      speaker: 'customer',
      contentType: 'text',
      content: e.detail.value,
    })
    msgList.push({
      speaker: 'server',
      contentType: 'text',
      content: ''
    })
    inputVal = '';
    this.setData({
      msgList,
      inputVal
    });
  },
  Run:function(e){
    try {
      const result = evaluate(receivedMessage, {
        app: this,
        setInterval,
        clearInterval,
        console,
        wx: wx // 传递微信小程序框架提供的 wx 对象
      });
    } catch (e) {
      console.log(e);
      wx.showToast({
        title: e.msg,
      })
    }
  },
  getSetting:function(e){
    wx.getSetting({
      success(res){
        scope = JSON.stringify(res.authSetting);
      }
    }),
    msgList.push({
      speaker: 'server',
      contentType: 'text',
      content: "当前的scope为："+scope
    });
    this.setData({
      msgList: msgList
    });
  },
  /**
   * 退回上一页
   */
  toBackClick: function () {
    wx.navigateBack({})
  }

})