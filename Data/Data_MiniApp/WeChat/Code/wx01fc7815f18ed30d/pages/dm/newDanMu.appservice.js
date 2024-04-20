$gwx_XC_13=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_13 || [];
function gz$gwx_XC_13_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_13_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_13_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_13_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showModalStatus']])
Z(z[0])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_13_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_13_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_13=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_13=true;
var x=['./pages/dm/newDanMu.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_13_1()
var aDB=_v()
_(r,aDB)
if(_oz(z,0,e,s,gg)){aDB.wxVkey=1
}
var tEB=_v()
_(r,tEB)
if(_oz(z,1,e,s,gg)){tEB.wxVkey=1
}
aDB.wxXCkey=1
tEB.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_13";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_13();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/dm/newDanMu.wxml'] = [$gwx_XC_13, './pages/dm/newDanMu.wxml'];else __wxAppCode__['pages/dm/newDanMu.wxml'] = $gwx_XC_13( './pages/dm/newDanMu.wxml' );
	;__wxRoute = "pages/dm/newDanMu";__wxRouteBegin = true;__wxAppCurrentFile__="pages/dm/newDanMu.js";define("pages/dm/newDanMu.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
Page({data:{inputText:"",text:"请输入弹幕内容~",sliderValOfFontSize:90,fontSize:300,fontColor:"white",backgroundColor:"black",animateTime:10,sliderValOfAnimateTime:90,currentTab:0,textMoveAnimate:null,colorArr:[{color:"pink"},{color:"red"},{color:"blue"},{color:"yellow"},{color:"white"},{color:"aqua"},{color:"green"},{color:"skyblue"},{color:"hotpink"},{color:"black"}]},setBackGroundColor(t){console.log(t.target.dataset.index);let a=t.target.dataset.index,e=this.data.colorArr[a].color;this.setData({backgroundColor:e})},setColor(t){let a=t.target.dataset.index,e=this.data.colorArr[a].color;this.setData({fontColor:e})},changeTextSpeend(t){console.log(t.detail.value);let a=t.detail.value;this.setData({animateTime:-.1*a+15,sliderValOfAnimateTime:a})},changeFontSize(t){console.log(t.detail.value);let a=t.detail.value;this.setData({fontSize:3*a+150,sliderValOfFontSize:a})},onClearTap:function(t){this.setData({inputText:""})},inputBlur(t){let a=this,e=t.detail.value;e&&wx.request({url:getApp().globalData.appurl+"SensitiveProcessingInfo/isSensitive",method:"POST",data:{info:e,appid:wx.getAccountInfoSync().miniProgram.appId},header:{"content-type":"application/json"},success:function(t){console.log(t.data),200==t.data.code&&0==t.data.resultStatus?a.setData({inputText:e}):(a.setData({inputText:""}),wx.showModal({title:t.data.data,icon:"none",duration:800}))}})},sendBtn(){let t=this;t.data.inputText&&wx.request({url:getApp().globalData.appurl+"SensitiveProcessingInfo/isSensitive",method:"POST",data:{info:t.data.inputText,appid:wx.getAccountInfoSync().miniProgram.appId},header:{"content-type":"application/json"},success:function(a){console.log(a.data),200==a.data.code&&0==a.data.resultStatus?t.setData({text:t.data.inputText}):wx.showModal({title:a.data.data,icon:"none",duration:800})}}),""==t.data.inputText&&wx.showToast({title:"不能为空哦",duration:2e3})},showModal:function(){var t=wx.createAnimation({duration:200,timingFunction:"linear",delay:0});this.animation=t,t.translateY(300).step(),this.setData({animationData:t.export(),showModalStatus:!0}),setTimeout(function(){t.translateY(0).step(),this.setData({animationData:t.export()})}.bind(this),200)},hideModal:function(){var t=wx.createAnimation({duration:200,timingFunction:"linear",delay:0});this.animation=t,t.translateY(300).step(),this.setData({animationData:t.export()}),setTimeout(function(){t.translateY(0).step(),this.setData({animationData:t.export(),showModalStatus:!1})}.bind(this),200)},onLoad:function(t){},swiperTab:function(t){this.setData({currentTab:t.detail.current})},clickTab:function(t){if(this.data.currentTab===t.target.dataset.current)return!1;this.setData({currentTab:t.target.dataset.current})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareTimeline:function(t){let a=this.data.path_image+this.data.shop.shop_img;return console.log(a),{title:"手持弹幕",query:"",imageUrl:""}},onShareAppMessage:function(){return{path:"pages/dm/newDanMu",title:"手持弹幕",desc:"",imageUrl:""}}});
},{isPage:true,isComponent:true,currentFile:'pages/dm/newDanMu.js'});require("pages/dm/newDanMu.js");