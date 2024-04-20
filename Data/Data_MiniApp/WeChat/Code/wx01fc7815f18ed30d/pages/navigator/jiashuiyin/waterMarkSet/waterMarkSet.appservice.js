$gwx_XC_24=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_24 || [];
function gz$gwx_XC_24_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_24_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_24_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_24_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bady'])
Z([3,'container'])
Z([[6],[[6],[[7],[3,'appConfig']],[3,'ad']],[3,'wxcustomA']])
Z([[7],[3,'photoPath']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_24_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_24_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_24=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_24=true;
var x=['./pages/navigator/jiashuiyin/waterMarkSet/waterMarkSet.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_24_1()
var cZB=_n('view')
_rz(z,cZB,'class',0,e,s,gg)
var h1B=_n('privacy')
_(cZB,h1B)
var o2B=_n('view')
_rz(z,o2B,'class',1,e,s,gg)
var c3B=_v()
_(o2B,c3B)
if(_oz(z,2,e,s,gg)){c3B.wxVkey=1
}
var o4B=_v()
_(o2B,o4B)
if(_oz(z,3,e,s,gg)){o4B.wxVkey=1
}
c3B.wxXCkey=1
o4B.wxXCkey=1
_(cZB,o2B)
_(r,cZB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_24";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_24();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/navigator/jiashuiyin/waterMarkSet/waterMarkSet.wxml'] = [$gwx_XC_24, './pages/navigator/jiashuiyin/waterMarkSet/waterMarkSet.wxml'];else __wxAppCode__['pages/navigator/jiashuiyin/waterMarkSet/waterMarkSet.wxml'] = $gwx_XC_24( './pages/navigator/jiashuiyin/waterMarkSet/waterMarkSet.wxml' );
	;__wxRoute = "pages/navigator/jiashuiyin/waterMarkSet/waterMarkSet";__wxRouteBegin = true;__wxAppCurrentFile__="pages/navigator/jiashuiyin/waterMarkSet/waterMarkSet.js";define("pages/navigator/jiashuiyin/waterMarkSet/waterMarkSet.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
Page({data:{photoPath:"",imageWidth:0,imageHeight:0,text:"",colors:["gray","red","white","black","orange","yellow","green","blue","purple","darkcyan"],selectedColor:"gray",alpha:1},onLoad:function(t){},addPhotoTap:function(t){var a=this;wx.chooseImage({count:1,sizeType:["original"],sourceType:["album","camera"],success:function(t){var e=t.tempFilePaths[0];wx.showLoading({title:"安全检测中..."}),wx.uploadFile({url:getApp().globalData.appurl+"SensitiveProcessingInfo/pictureInvolvingYellowCheck",formData:{appid:wx.getAccountInfoSync().miniProgram.appId},filePath:e,name:"file",header:{"content-type":"multipart/form-data"},success:function(t){wx.hideLoading(),"ludeqi"==t.data&&wx.showModal({title:"提示",content:"请勿上传违规违法图片",showCancel:!1,success:()=>{}});const o=JSON.parse(t.data);console.log(e),200==o.code&&0==o.resultStatus?(wx.showToast({title:"图片检测完成",icon:"none",duration:1500}),a.setData({photoPath:e})):wx.showModal({title:"提示",content:o.data,showCancel:!1,success:()=>{}})},fail:function(t){wx.showToast({title:"上传失败",icon:"none",duration:2e3})},complete:function(t){console.log(t.errMsg)}})}})},showinte:function(){let t;this.data.appConfig.ad.wxinter&&(wx.createInterstitialAd&&(t=wx.createInterstitialAd({adUnitId:this.data.appConfig.ad.wxinter}),t.onLoad(()=>{}),t.offClose(),t.offError(),t.onError(t=>{}),t.onClose(()=>{})),t&&(1==this.data.appConfig.ad.insetgp?this.inadset=setInterval(()=>{t.show().catch(t=>{console.error(t)})},1e3*this.data.appConfig.ad.wxinsettime):setTimeout(()=>{t.show().catch(t=>{console.error(t)})},1e3*this.data.appConfig.ad.wxinsettime)))},textChange:function(t){var a=t.detail.value,e=this;wx.request({url:getApp().globalData.appurl+"SensitiveProcessingInfo/isSensitive",method:"POST",data:{info:a,appid:wx.getAccountInfoSync().miniProgram.appId},header:{"content-type":"application/json"},success:function(t){console.log(t.data),200==t.data.code&&0==t.data.resultStatus?e.setData({text:a}):(e.onClearTap(),wx.showModal({title:t.data.data,icon:"none",duration:800}))}})},onClearTap:function(t){this.setData({text:""})},previewTap:function(t){wx.previewImage({current:this.data.photoPath,urls:[this.data.photoPath]})},markTap:function(t){this.data.photoPath?this.data.text?wx.navigateTo({url:"/pages/navigator/jiashuiyin/waterMark/waterMark?photoPath="+this.data.photoPath+"&text="+this.data.text+"&color="+this.data.selectedColor+"&alpha="+this.data.alpha}):wx.showToast({title:"请输入水印文字",icon:"error"}):wx.showToast({title:"请先选择图片",icon:"error"})},colorTap:function(t){this.setData({selectedColor:t.currentTarget.dataset.color})},sliderChange:function(t){this.setData({alpha:(100-t.detail.value)/100})},onShareAppMessage:function(){return{title:"这里可以免费给加水印",path:"/pages/navigator/jiashuiyin/waterMarkSet/waterMarkSet"}},onShareTimeline:function(){return{title:"这里可以免费给加水印"}}});
},{isPage:true,isComponent:true,currentFile:'pages/navigator/jiashuiyin/waterMarkSet/waterMarkSet.js'});require("pages/navigator/jiashuiyin/waterMarkSet/waterMarkSet.js");