$gwx_XC_11=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_11 || [];
function gz$gwx_XC_11_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_11_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_11_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_11_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'=='],[[7],[3,'is_complete']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_11_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_11_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_11=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_11=true;
var x=['./pages/createQrcode/createQrcode.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_11_1()
var cAB=_n('privacy')
_(r,cAB)
var o0=_v()
_(r,o0)
if(_oz(z,0,e,s,gg)){o0.wxVkey=1
}
o0.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_11";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_11();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/createQrcode/createQrcode.wxml'] = [$gwx_XC_11, './pages/createQrcode/createQrcode.wxml'];else __wxAppCode__['pages/createQrcode/createQrcode.wxml'] = $gwx_XC_11( './pages/createQrcode/createQrcode.wxml' );
	;__wxRoute = "pages/createQrcode/createQrcode";__wxRouteBegin = true;__wxAppCurrentFile__="pages/createQrcode/createQrcode.js";define("pages/createQrcode/createQrcode.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
!function(){var a=require("../../utils/weapp.qrcode.min.js"),e=getApp();let t=wx.getAccountInfoSync();Page({data:{qrcode_url:"",qrcode_Value:"",logo_url:"",is_complete:0,height:"100%",qrcode_background:"#FFFFFF",qrcode_foreground:"#000000",background_tips:!1},qrcode_Value:function(a){let e=this;var o=a.detail.value;o&&wx.request({url:getApp().globalData.appurl+"SensitiveProcessingInfo/isSensitive",method:"POST",data:{info:o,appid:t.miniProgram.appId},header:{"content-type":"application/json"},success:function(t){console.log(t.data),200==t.data.code&&0==t.data.resultStatus?e.setData({qrcode_url:e.toUtf8(a.detail.value),qrcode_zf:a.detail.value}):(e.onClearTap(),wx.showModal({title:t.data.data,icon:"none",duration:800}))}})},onClearTap:function(a){this.setData({qrcode_url:"",qrcode_zf:"",qrcode_Value:""})},qrcode_background:function(a){"#FFFFFF"!=a.detail.value?this.setData({qrcode_background:a.detail.value,background_tips:!0}):this.setData({qrcode_background:a.detail.value,background_tips:!1})},qrcode_foreground:function(a){this.setData({qrcode_foreground:a.detail.value})},formBindsubmit:function(a){var e=a;console.log(e),wx.showToast({title:"生成中...",icon:"loading",duration:1e3});var t=this.setCanvasSize(),o=e;this.createQrCode(o,"mycanvas",t.w,t.h)},setCanvasSize:function(){var a={};try{var e=wx.getSystemInfoSync().windowWidth/(750/686),t=e;a.w=e,a.h=t}catch(a){console.log("获取设备信息失败"+a)}return a},createQrCode:function(e,t,o,n){var i=this,c=i.data.qrcode_background,r=i.data.qrcode_foreground;a.api.draw(e,t,o,n,"","",c,r),setTimeout((function(){i.canvasToTempImage()}),1e3)},canvasToTempImage:function(){var a=this;wx.canvasToTempFilePath({canvasId:"mycanvas",success:function(e){var t=e.tempFilePath;console.log(t),a.setData({imagePath:t})},fail:function(a){console.log(a)}})},gojiema:function(){wx.navigateTo({url:"../../pages/scanQrcode/scanQrcode"})},savePic:function(){let a=this;wx.canvasToTempFilePath({x:0,y:50,width:2*a.data.windowWidth,height:2*a.data.contentHeight,canvasId:"mycanvas",success:function(e){wx.hideLoading();var t=e.tempFilePath;a.setData({canvasUrl:t}),""!==t&&(wx.hideLoading(),wx.previewImage({current:a.data.canvasUrl,urls:[a.data.canvasUrl],success:function(a){console.log("预览成功啦")}}))}})},queryIp:function(){let a=this;var e=a.data.qrcode_zf;a.data.qrcode_url?wx.request({url:getApp().globalData.appurl+"SensitiveProcessingInfo/isSensitive",method:"POST",data:{info:e,appid:t.miniProgram.appId},header:{"content-type":"application/json"},success:function(t){console.log(t.data),200==t.data.code&&0==t.data.resultStatus?(a.formBindsubmit(e),a.setData({is_complete:1})):wx.showModal({title:t.data.data,icon:"none",duration:800})}}):wx.showToast({title:"请输入字符串，可以是网址、文本等",icon:"none",duration:1e3})},onLoad:function(a){},toUtf8(a){var e,t,o,n;for(e="",o=a.length,t=0;t<o;t++)(n=a.charCodeAt(t))>=1&&n<=127?e+=a.charAt(t):n>2047?(e+=String.fromCharCode(224|n>>12&15),e+=String.fromCharCode(128|n>>6&63),e+=String.fromCharCode(128|n>>0&63)):(e+=String.fromCharCode(192|n>>6&31),e+=String.fromCharCode(128|n>>0&63));return e},downloadSkuQrCode:function(a){let e=this;wx.downloadFile({url:a,success:function(a){e.setData({qrCode:a.tempFilePath}),wx.hideLoading(),e.getData()},fail:function(a){wx.showToast({title:"下载二维码失败,稍后重试！",icon:"none",duration:5e3})}})},saveShareImg:function(){wx.showLoading({title:"正在保存",mask:!0}),setTimeout((function(){wx.canvasToTempFilePath({canvasId:"mycanvas",success:function(a){wx.hideLoading();var e=a.tempFilePath;wx.saveImageToPhotosAlbum({filePath:e,success(a){wx.showModal({content:"已成功保存到手机相册。",showCancel:!1,confirmText:"好的",confirmColor:"#333",success:function(a){a.confirm},fail:function(a){}})},fail:function(a){wx.showToast({title:a.errMsg,icon:"none",duration:2e3})}})}})}),1e3)},onReady:function(){},onShow:function(){e.pages=getCurrentPages()},onHide:function(){},onUnload:function(){},onShareAppMessage:function(){return{title:"二维码生成器",path:"/pages/createQrcode/createQrcode"}}})}();
},{isPage:true,isComponent:true,currentFile:'pages/createQrcode/createQrcode.js'});require("pages/createQrcode/createQrcode.js");