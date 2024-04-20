$gwx_XC_96=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_96 || [];
function gz$gwx_XC_96_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_96_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_96_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_96_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_96_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_96_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_96=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_96=true;
var x=['./pages/give_qa_list/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_96_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_96";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_96();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/give_qa_list/index.wxml'] = [$gwx_XC_96, './pages/give_qa_list/index.wxml'];else __wxAppCode__['pages/give_qa_list/index.wxml'] = $gwx_XC_96( './pages/give_qa_list/index.wxml' );
	;__wxRoute = "pages/give_qa_list/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/give_qa_list/index.js";define("pages/give_qa_list/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=getApp(),t=require("../../BC983DD1829A079CDAFE55D6E84D7B70.js"),i=require("../../92BC1755829A079CF4DA7F52C55D7B70.js").param,a=t.baseUrl+"/weixin/pay/create_order/",r=t.baseUrl+"/events/activity/give_qa/intro/",s=require("../../840A1D64829A079CE26C7563276C7B70.js").doPoint;Page({data:{service_data:{image:"",title:"",desc:"",service_desc_list:[],price:0,order_name:"",order_type:"",service_type:"",service_sub_type:""}},onShow:function(){var t=this;e.globalData.appIsLogin.then((function(){t.getGiveqaIntro()}))},getGiveqaIntro:function(){var t=this;wx.request({url:r,header:{"Content-Type":"application/json",Cookie:e.globalData.sessionid},data:{from_wx_mini:1,partner:e.globalData.partner},success:function(e){var i=e.data;t.setData({service_data:i})},fail:function(e){wx.showToast({title:e.data.error_msg||"加载失败，请稍后重试"})}})},createOrder:function(){s("AppClick",{click_position:"giveqa_expert"});wx.showLoading({title:""});var t=this.data.service_data,r=t.order_type,n=t.order_name,o=t.service_type,c=t.service_sub_type,_=t.price,d={from_wx_mini:1,finish_success_url:"../qa_im/index?partner=chunyu_wap_mini",finish_fail_url:"",order_name:n,order_type:r,partner:e.globalData.partner,order_desc:"",info_dict:JSON.stringify({service_type:o,service_sub_type:c,source:"give_qa"})};wx.request({url:a,method:"POST",header:{"Content-Type":"application/x-www-form-urlencoded",Cookie:e.globalData.sessionid},data:i(d),success:function(e){if(e.data.success){var t=(e=e.data).payment_order_id;t?(wx.hideLoading(),wx.navigateTo({url:"../payment/index?mark=giveqa&price="+_+"&payment_order_id="+t})):wx.showToast({title:e.error_msg||"加载失败，请稍后重试"})}},fail:function(e){wx.showToast({title:e.data.error_msg||"加载失败，请稍后重试"})}})},onShareAppMessage:function(){return{title:"送你一次免费问诊的机会，新用户点击领取",path:"/pages/index/index?source=user_home_wx",imageUrl:"https://staff.chunyu.mobi/@/media/images/2018/09/06/912c/988213806965_w422_h338_.png"}},clickevent:function(e){var t=e.currentTarget.dataset.eventName;s("AppClick",{click_position:t})}});
},{isPage:true,isComponent:true,currentFile:'pages/give_qa_list/index.js'});require("pages/give_qa_list/index.js");