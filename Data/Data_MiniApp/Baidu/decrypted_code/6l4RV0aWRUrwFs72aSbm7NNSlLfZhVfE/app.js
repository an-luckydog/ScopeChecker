window.define("5",function(n,e,t,o,a,i,s,r,c,u,g,l,p,f,d,w,m,y){i();Page({data:{motto:"Hello World",inputValue:"",userInfo:{},focus:!1,index:1,salary:0,array:["上海","北京","广州","深圳"],insurance:[{category:"养老",private_percentage:"8",company_percentage:"22"},{category:"医疗",private_percentage:"2",company_percentage:"12"},{category:"失业",private_percentage:"1",company_percentage:"1.8"},{category:"工伤",private_percentage:"0",company_percentage:"0.5"},{category:"生育",private_percentage:"0",company_percentage:"0.8"},{category:"公积金",private_percentage:"7",company_percentage:"7"}]},bindViewTap:function(){a.navigateTo({url:"../logs/logs"})},bindPickerChange:function(n){console.log("picker发送选择改变，携带值为",n.detail.value),this.setData({index:n.detail.value})},onLoad:function(){console.log("onLoad",this.data);this.total()},total:function(){var n=this.data.insurance,t=0,o=0;n&&n.forEach(function(n,e){t+=parseFloat(n.private_percentage),o+=parseFloat(n.company_percentage)}),t.toFixed(2),o.toFixed(2),this.setData({private_total:t,company_total:o})},bindKeyInput:function(n){console.log(n),this.setData({inputValue:n.detail.value})},modalView:function(n){a.showModal({title:"Warning",content:n,showCancel:!1,success:function(n){n.confirm&&console.log("用户点击确定")}})},startCount:function(){var n=this.data.inputValue;n?n/1?0<n?(17814<n?n=17814:n<2014&&(n=2014),this.setData({salary:n,focus:!1})):this.modalView("别开玩笑了，你还欠老板钱？"):this.modalView("请输入数字，OK？"):this.modalView("输入不能为空，请重新输入！")},resetData:function(){this.setData({salary:0,focus:!0,inputValue:""})}})}),window.define("6",function(n,e,t,o,a,i,s,r,c,u,g,l,p,f,d,w,m,y){var h=n(7);Page({data:{logs:[]},onLoad:function(){this.setData({logs:(a.getStorageSync("logs")||[]).map(function(n){return h.formatTime(new Date(n))})})}})}),window.define("7",function(n,e,t,o,a,i,s,r,c,u,g,l,p,f,d,w,m,y){function h(n){return(n=n.toString())[1]?n:"0"+n}e.exports={formatTime:function(n){var e=n.getFullYear(),t=n.getMonth()+1,o=n.getDate(),a=n.getHours(),i=n.getMinutes(),s=n.getSeconds();return[e,t,o].map(h).join("/")+" "+[a,i,s].map(h).join(":")}}}),window.define("8",function(n,e,t,o,a,i,s,r,c,u,g,l,p,f,d,w,m,y){App({onLaunch:function(){var n=a.getStorageSync("logs")||[];n.unshift(Date.now()),a.setStorageSync("logs",n)},getUserInfo:function(e){var t=this;this.globalData.userInfo?"function"==typeof e&&e(this.globalData.userInfo):a.login({success:function(){a.getUserInfo({success:function(n){t.globalData.userInfo=n.userInfo,"function"==typeof e&&e(t.globalData.userInfo)}})}})},globalData:{userInfo:null}})}),window.__swanRoute="app",window.usingComponents=[],window.usingPluginComponents=[],require("8"),window.__swanRoute="pages/index/index",window.usingComponents=[],window.usingPluginComponents=[],require("5"),window.__swanRoute="pages/logs/logs",window.usingComponents=[],window.usingPluginComponents=[],require("6");