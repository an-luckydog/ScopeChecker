$gwx_XC_33=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_33 || [];
function gz$gwx_XC_33_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_33_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_33_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_33_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([[7],[3,'pics']])
Z([[7],[3,'percents']])
Z([[7],[3,'videoUrl']])
Z([[7],[3,'desc']])
Z(z[3])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_33_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_33_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_33=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_33=true;
var x=['./pages/video/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_33_1()
var aJC=_n('view')
_rz(z,aJC,'class',0,e,s,gg)
var tKC=_v()
_(aJC,tKC)
if(_oz(z,1,e,s,gg)){tKC.wxVkey=1
var xOC=_v()
_(tKC,xOC)
if(_oz(z,2,e,s,gg)){xOC.wxVkey=1
}
xOC.wxXCkey=1
}
var eLC=_v()
_(aJC,eLC)
if(_oz(z,3,e,s,gg)){eLC.wxVkey=1
}
var bMC=_v()
_(aJC,bMC)
if(_oz(z,4,e,s,gg)){bMC.wxVkey=1
}
var oNC=_v()
_(aJC,oNC)
if(_oz(z,5,e,s,gg)){oNC.wxVkey=1
}
tKC.wxXCkey=1
eLC.wxXCkey=1
bMC.wxXCkey=1
oNC.wxXCkey=1
_(r,aJC)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_33";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_33();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/video/index.wxml'] = [$gwx_XC_33, './pages/video/index.wxml'];else __wxAppCode__['pages/video/index.wxml'] = $gwx_XC_33( './pages/video/index.wxml' );
	;__wxRoute = "pages/video/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/video/index.js";define("pages/video/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
var t,o;t=require("../../utils/api"),o=null,Page({data:{pics:"",analysisUrl:"",videoUrl:"",hideResult:!0,jxList:[],desc:"",hideNotice:!1,notice:"",indicatorDots:!1,autoplay:!0,interval:3e3,duration:800,circular:!0,imgUrl:"",list_show:!1,currentindex:0,percents:0,imgUrls:[{appid:"",link:"",url:"https://qsyxcx.jinjinyl.cn/public/uploads/question/20230226/s_63fb7435e520a.png"},{appid:"",link:"",url:"https://qsyxcx.jinjinyl.cn/public/uploads/question/20230226/s_63fb7435e520a.png"}]},onLoad:function(){wx.request({url:getApp().globalData.ylurl+"jx.json",success:t=>{console.log(t),this.setData({jxList:t.data})}}),wx.createInterstitialAd&&((o=wx.createInterstitialAd({adUnitId:"adunit-8bb69150556722e4"})).onLoad((function(){o&&o.show().catch((function(t){console.error(t)}))})),o.onError((function(t){})),o.onClose((function(){})))},switchNotice:function(){this.setData({hideNotice:!0})},goad:function(){var t=this;wx.showModal({title:"提示",confirmText:"好的",confirmColor:"#d4237a",content:"需观看激励视频完成后可自动保存无水印视频",success(o){o.confirm?(console.log("用户点击确定"),t.getAd()):o.cancel&&console.log("用户点击取消")}})},getAd:function(){var t=null;wx.createRewardedVideoAd&&((t=wx.createRewardedVideoAd({adUnitId:"adunit-fe2abfc551decd11"})).onError(t=>{}),t.onClose(o=>{if(o&&o.isEnded||void 0===o)t.offClose(),this.saveTap();else{var e=this;wx.showModal({title:"观看未完成提示",confirmText:"继续观看",confirmColor:"#d4237a",content:"需观看完成后自动保存无水印视频",success(t){t.confirm?(console.log("用户点击确定"),e.getAd()):t.cancel&&console.log("用户点击取消")}})}})),t&&t.show().catch(o=>{t.load().then(()=>t.show())})},goadtu:function(){var t=this;wx.showModal({title:"提示",confirmText:"好的",confirmColor:"#d4237a",content:"需观看激励视频完成后可以一键保存图片",success(o){o.confirm?(console.log("用户点击确定"),t.getAdtu()):o.cancel&&console.log("用户点击取消")}})},getAdtu:function(){var t=null;wx.createRewardedVideoAd&&((t=wx.createRewardedVideoAd({adUnitId:"adunit-fe2abfc551decd11"})).onError(t=>{}),t.onClose(o=>{if(o&&o.isEnded||void 0===o)t.offClose(),this.saveTap();else{var e=this;wx.showModal({title:"观看未完成提示",confirmText:"继续观看",confirmColor:"#d4237a",content:"需观看完成后可以一键保存图片",success(t){t.confirm?(console.log("用户点击确定"),e.getAd()):t.cancel&&console.log("用户点击取消")}})}})),t&&t.show().catch(o=>{t.load().then(()=>t.show())})},download:function(){this.downloadFile(this.data.pics).then(t=>{this.setData({list_show:!1}),wx.showToast({title:"下载完成"})})},previewImage:function(t){let o=t.currentTarget.dataset.src;wx.previewImage({current:o,urls:this.data.pics}),wx.getImageInfo({src:this.data.pics[0],success(t){console.log(t),console.log(t.width),console.log(t.height)}})},downloadFile(t){this.setData({list_show:!0});let o=Promise.resolve();return t.forEach((e,s)=>{o=o.then(()=>{var o=10/t.length*10;return this.setData({currentindex:s+1,percents:(s+1)*o}),this.downloads(e)})}),o},downloads:function(t){console.log(t,"rul2222");let o=this;return new Promise((e,s)=>{wx.downloadFile({url:o.data.jxList.down2+t,success:function(t){var s=t.tempFilePath;wx.saveImageToPhotosAlbum({filePath:s,success:function(t){e(t)},fail:function(t){o.setData({list_show:!1})}})},fail:function(t){console.log(t,"err2222"),s(t)}})})},analysisTap:function(o){var e=this;let s=this;this.data.analysisUrl&&wx.request({url:getApp().globalData.appurl+"SensitiveProcessingInfo/isSensitive",method:"POST",data:{info:this.data.analysisUrl,appid:wx.getAccountInfoSync().miniProgram.appId},header:{"content-type":"application/json"},success:function(o){console.log(o.data),200==o.data.code&&0==o.data.resultStatus?(console.log("1234567890"),console.log(s.data),s.data.analysisUrl?s.getURLFromString(s.data.analysisUrl)?(wx.showLoading({title:"正在去水印"}),t.analysis(s.getURLFromString(s.data.analysisUrl),(function(t){wx.hideLoading(),console.log(t.url),e.setData({videoUrl:t.url,pics:t.pics,desc:t.title,hideResult:!1})}),(function(t){wx.hideLoading(),wx.showModal({title:"温馨提示",content:"该系统可能不支持您输入的短视频平台，请联系管理员",confirmText:"确定",showCancel:!1,confirmColor:"#ff4444"})}))):wx.showToast({icon:"error",title:"链接格式错误"}):wx.showToast({icon:"error",title:"链接不能为空"})):wx.showModal({title:o.data.data,icon:"none",duration:800})}}),""==this.data.analysisUrl&&wx.showToast({title:"不能为空哦",duration:2e3})},inputChange:function(t){this.setData({analysisUrl:t.detail.value})},ym:function(t){wx.showToast({icon:"none",duration:5e3,title:"请打开QQ浏览器粘贴下载原画质视频"})},gomore:function(t){wx.navigateTo({url:"/pages/my/my"})},pasteTap:function(t){var o=this;wx.getClipboardData({success:function(t){o.setData({analysisUrl:t.data})}})},clearTap:function(t){this.setData({analysisUrl:""})},save:function(){var t=this.data.videoUrl.replace("httpss","https");console.log(t);var o=encodeURIComponent(t);console.log("urlurlurlurlurl"),console.log(o),wx.showLoading({title:"正在下载"}),wx.downloadFile({url:this.data.jxList.down1+o,success:function(t){200===t.statusCode&&wx.saveVideoToPhotosAlbum({filePath:t.tempFilePath,success:function(t){wx.hideLoading(),wx.showToast({icon:"success",title:"保存成功"})},fail:function(t){wx.hideLoading()}})},fail:function(t){wx.hideLoading(),wx.showToast({icon:"error",title:"请重试"})}}).onProgressUpdate(t=>{wx.showLoading({title:"已下载"+t.progress+"%"}),this.setData({progress:t.progress+"%"})})},saveTap:function(t){var o=this;wx.getSetting({success:function(t){t.authSetting["scope.writePhotosAlbum"]?o.save():wx.authorize({scope:"scope.writePhotosAlbum",success:function(){o.save()}})}})},copyLinkTap:function(t){wx.setClipboardData({data:this.data.videoUrl,success:function(t){wx.showToast({icon:"success",title:"复制成功"})}})},copyLinkTap1:function(t){wx.setClipboardData({data:this.data.videoUrl,success:function(t){wx.showToast({icon:"none",duration:5e3,title:"请打开QQ浏览器粘贴下载原画质视频"})}})},copyDescTap:function(t){wx.setClipboardData({data:this.data.desc,success:function(t){wx.showToast({icon:"success",title:"复制成功"})}})},getURLFromString:function(t){var o=/(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g;return o.test(t)?t.match(o)[0]:""},guideTap:function(t){wx.navigateTo({url:"../../pages/guide/guide"})},questiopnTap:function(t){wx.navigateTo({url:"../../pages/question/question"})},onShareAppMessage:function(){return{title:"这里可以免费短视频去水印下载",path:"pages/video/index",imageUrl:"https://qsyxcx.jinjinyl.cn/public/uploads/question/20230226/s_63fb63f12bbda.jpg"}},onShareTimeline:function(){return{title:"这里可以免费短视频去水印下载"}}});
},{isPage:true,isComponent:true,currentFile:'pages/video/index.js'});require("pages/video/index.js");