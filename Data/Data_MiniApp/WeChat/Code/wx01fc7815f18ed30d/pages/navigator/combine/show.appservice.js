$gwx_XC_22=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_22 || [];
function gz$gwx_XC_22_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_22_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_22_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_22_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_22_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_22_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_22=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_22=true;
var x=['./pages/navigator/combine/show.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_22_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_22";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_22();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/navigator/combine/show.wxml'] = [$gwx_XC_22, './pages/navigator/combine/show.wxml'];else __wxAppCode__['pages/navigator/combine/show.wxml'] = $gwx_XC_22( './pages/navigator/combine/show.wxml' );
	;__wxRoute = "pages/navigator/combine/show";__wxRouteBegin = true;__wxAppCurrentFile__="pages/navigator/combine/show.js";define("pages/navigator/combine/show.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
Page({data:{imageInfo:[],direction:"vertical",canvasWidth:0,canvasHeight:0,systemHeight:0,systemWidth:0,showImage:{url:"",width:0,height:0},hidden:!1},onLoad:function(t){var e=this;e.setData({imageInfo:JSON.parse(t.imageInfo),direction:t.direction}),wx.getSystemInfo({success:function(t){e.setData({systemWidth:t.windowWidth,systemHeight:t.windowHeight})}}),console.log(e.data.imageInfo),wx.showLoading({title:"正在合并",mask:!0}),e.connectImage()},connectImage:function(){var t=this,e=wx.createCanvasContext("draw",t),a=0,i=0,h=t.data.imageInfo;if("vertical"==t.data.direction){a=t.data.systemWidth;for(var n=0,s=0;n<h.length;n++)i+=s=h[n].height*a/h[n].width;t.setData({canvasWidth:a,canvasHeight:i}),n=0,s=0;for(var o=0;n<h.length;n++)s=h[n].height*a/h[n].width,n>0&&(o+=h[n-1].height*a/h[n-1].width),e.drawImage(h[n].url,0,o,a,s)}else{i=t.data.systemHeight,n=0;for(var d=0;n<h.length;n++)a+=d=h[n].width*i/h[n].height;t.setData({canvasWidth:a,canvasHeight:i}),n=0,d=0;for(var g=0;n<h.length;n++)d=h[n].width*i/h[n].height,n>0&&(g+=h[n-1].width*i/h[n-1].height),e.drawImage(h[n].url,g,0,d,i)}e.draw(),setTimeout((function(e){wx.canvasToTempFilePath({canvasId:"draw",success:function(e){console.log(e.tempFilePath),t.setData({"showImage.url":e.tempFilePath,hidden:!0}),t.setShowImage(e.tempFilePath),wx.hideLoading()}},t)}),500)},previewImage:function(t){var e=[];e.push(this.data.showImage.url),wx.previewImage({current:e[0],urls:e})},setShowImage:function(t){var e=this,a=e.data.direction,i=0,h=0;wx.getSystemInfo({success:function(n){wx.getImageInfo({src:t,success:function(t){if("vertical"==a)s=.93,i=n.windowWidth*s,h=n.windowWidth/t.width*t.height*s;else{var s=.5;h=n.windowHeight*s,i=n.windowHeight/t.height*t.width*s}e.setData({"showImage.width":i,"showImage.height":h})}})}})}});
},{isPage:true,isComponent:true,currentFile:'pages/navigator/combine/show.js'});require("pages/navigator/combine/show.js");