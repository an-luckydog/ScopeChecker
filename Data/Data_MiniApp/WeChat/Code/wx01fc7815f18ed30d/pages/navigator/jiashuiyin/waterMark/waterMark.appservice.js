$gwx_XC_23=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_23 || [];
function gz$gwx_XC_23_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_23_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_23_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_23_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_23_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_23_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_23=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_23=true;
var x=['./pages/navigator/jiashuiyin/waterMark/waterMark.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_23_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_23";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_23();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/navigator/jiashuiyin/waterMark/waterMark.wxml'] = [$gwx_XC_23, './pages/navigator/jiashuiyin/waterMark/waterMark.wxml'];else __wxAppCode__['pages/navigator/jiashuiyin/waterMark/waterMark.wxml'] = $gwx_XC_23( './pages/navigator/jiashuiyin/waterMark/waterMark.wxml' );
	;__wxRoute = "pages/navigator/jiashuiyin/waterMark/waterMark";__wxRouteBegin = true;__wxAppCurrentFile__="pages/navigator/jiashuiyin/waterMark/waterMark.js";define("pages/navigator/jiashuiyin/waterMark/waterMark.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
var t,a,e,o,n,i;e="",o="",n="",i=20,Page({data:{imageWidth:0,imageHeight:0},onLoad:function(a){e=a.photoPath,o=a.text,n=a.color,t=a.alpha,this.mark()},showinte:function(){let t;this.data.appConfig.ad.wxinter&&(wx.createInterstitialAd&&(t=wx.createInterstitialAd({adUnitId:this.data.appConfig.ad.wxinter}),t.onLoad(()=>{}),t.offClose(),t.offError(),t.onError(t=>{}),t.onClose(()=>{})),t&&(1==this.data.appConfig.ad.insetgp?this.inadset=setInterval(()=>{t.show().catch(t=>{console.error(t)})},1e3*this.data.appConfig.ad.wxinsettime):setTimeout(()=>{t.show().catch(t=>{console.error(t)})},1e3*this.data.appConfig.ad.wxinsettime)))},mark:function(){i=o.length>5?20:30,a=o.length*i;var s=this,l=wx.createCanvasContext("myCanvas");wx.getImageInfo({src:e,success:function(e){var i=e.width,h=e.height;console.log("imgWidth="+i),console.log("imgHeight="+h);var c=wx.getSystemInfoSync().windowWidth;console.log("screenWidth="+c);var r=c,d=h/i*r;console.log("canvasWidth="+r),console.log("canvasHeight="+d),s.setData({imageWidth:r,imageHeight:d}),l.drawImage(e.path,0,0,r,d),l.rotate(30*Math.PI/180);for(var g=1;g<30;g++){l.beginPath(),l.setGlobalAlpha(t),l.setFontSize(18),l.setFillStyle(n),l.fillText(o,0,80*g);for(var w=1;w<30;w++)l.beginPath(),l.setGlobalAlpha(t),l.setFontSize(18),l.setFillStyle(n),l.fillText(o,a*w,80*g)}for(var f=0;f<30;f++){l.beginPath(),l.setGlobalAlpha(t),l.setFontSize(18),l.setFillStyle(n),l.fillText(o,0,-80*f);for(var p=1;p<30;p++)l.beginPath(),l.setGlobalAlpha(t),l.setFontSize(18),l.setFillStyle(n),l.fillText(o,a*p,-80*f)}l.draw(!1,(function(){wx.canvasToTempFilePath({x:0,y:0,width:i,height:h,destWidth:i,destHeight:h,canvasId:"myCanvas",success:function(t){wx.hideLoading(),s.addMarkPhotoPath=t.tempFilePath}})}))}})},ad_set:function(){var t=this;wx.createRewardedVideoAd&&((e=wx.createRewardedVideoAd({adUnitId:t.data.appConfig.ad.wxreward})).onLoad((function(){console.log("激励拉取成功")})),e.onError((function(t){})),e.onClose((function(a){a&&a.isEnded||void 0===a?(console.log("发放奖励"),t.saveTap()):wx.showModal({title:"提示",content:"Sorry...您需要看完视频才能保存～",showCancel:!1,confirmText:"好的"})})))},btnSave:function(){var t=this;console.log("打开激励视频"),wx.showModal({title:"提示",content:t.data.appConfig.ad.wxadysz,success:function(a){a.confirm?(console.log("用户点击确定"),e&&e.show().catch((function(){e.load().then((function(){return e.show()})).catch((function(a){t.saveTap(),console.log("激励视频显示失败")}))}))):a.cancel&&wx.showToast({title:"您放弃了保存图片",icon:"none"})}})},saveTap:function(t){wx.showLoading({title:"保存中"}),wx.saveImageToPhotosAlbum({filePath:this.addMarkPhotoPath,success:function(t){wx.hideLoading(),wx.showModal({content:"保存成功，请在相册中查看",confirmText:"知道了",showCancel:!1})}})},onShareAppMessage:function(){return{title:"这里可以免费给加水印",path:"pages/navigator/jiashuiyin/waterMark/waterMark"}}});
},{isPage:true,isComponent:true,currentFile:'pages/navigator/jiashuiyin/waterMark/waterMark.js'});require("pages/navigator/jiashuiyin/waterMark/waterMark.js");