$gwx_XC_21=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_21 || [];
function gz$gwx_XC_21_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_21_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_21_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_21_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_21_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_21_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_21=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_21=true;
var x=['./pages/navigator/combine/combine.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_21_1()
var oVB=_n('privacy')
_(r,oVB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_21";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_21();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/navigator/combine/combine.wxml'] = [$gwx_XC_21, './pages/navigator/combine/combine.wxml'];else __wxAppCode__['pages/navigator/combine/combine.wxml'] = $gwx_XC_21( './pages/navigator/combine/combine.wxml' );
	;__wxRoute = "pages/navigator/combine/combine";__wxRouteBegin = true;__wxAppCurrentFile__="pages/navigator/combine/combine.js";define("pages/navigator/combine/combine.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
Page({data:{imageInfo:[],imageUrls:[]},onShareAppMessage:function(){return{title:"给你推荐一个在线截图拼接工具",path:""}},onShareTimeline:function(){return{title:"给你推荐一个在线截图拼接工具"}},onReady:function(){},previewImage1:function(e){var t=this;wx.chooseImage({count:1,success:function(e){for(var a=0;a<e.tempFilePaths.length;a++){var n=e.tempFilePaths[a];wx.showLoading({title:"安全检测中..."}),wx.uploadFile({url:getApp().globalData.appurl+"SensitiveProcessingInfo/pictureInvolvingYellowCheck",formData:{appid:wx.getAccountInfoSync().miniProgram.appId},filePath:n,name:"file",header:{"content-type":"multipart/form-data"},success:function(i){wx.hideLoading();const o=JSON.parse(i.data);console.log(e.tempFilePaths[a]),200==o.code&&0==o.resultStatus?(wx.showToast({title:"图片检测完成",icon:"none",duration:1500}),t.getImageInfo(n)):wx.showModal({title:"提示",content:o.data,success:()=>{}})},fail:function(e){wx.showToast({title:"上传失败",icon:"none",duration:2e3})},complete:function(e){console.log(e.errMsg)}})}}})},previewImage:function(e){var t=this;wx.chooseImage({count:9,success:function(e){for(var a=0;a<e.tempFilePaths.length;a++)t.getImageInfo(e.tempFilePaths[a])}})},getImageInfo:function(e){var t=this;wx.getImageInfo({src:e,success:function(a){var n=t.data.imageInfo,i=t.data.imageUrls,o=new Object;o.url=e,o.width=a.width,o.height=a.height,n.push(o),i.push(e),t.setData({imageInfo:n,imageUrls:i})}})},changePreview:function(e){wx.previewImage({current:e.currentTarget.dataset.src,urls:this.data.imageUrls})},removeImage:function(e){var t=this,a=t.data.imageInfo,n=t.data.imageUrls,i=e.currentTarget.dataset.index;a.splice(i,1),n.splice(i,1),t.setData({imageInfo:a,imageUrls:n})},goToPage:function(e){var t=e.currentTarget.dataset.direction;null==this.data.imageInfo[1]?wx.showToast({title:"请至少选择两张图！",icon:"none"}):wx.navigateTo({url:"./show?imageInfo="+JSON.stringify(this.data.imageInfo)+"&direction="+t})}});
},{isPage:true,isComponent:true,currentFile:'pages/navigator/combine/combine.js'});require("pages/navigator/combine/combine.js");