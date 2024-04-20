$gwx_XC_58=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_58 || [];
function gz$gwx_XC_58_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_58_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_58_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_58_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'sendHeart'])
Z([[7],[3,'show_double_heart_mask']])
Z([3,''])
Z([[7],[3,'tips_show']])
Z([[7],[3,'tips']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_58_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_58_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_58=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_58=true;
var x=['./pages/collect_heart_help/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_58_1()
var fUM=_n('cy-userinfo')
_rz(z,fUM,'bindloginevent',0,e,s,gg)
_(r,fUM)
var oTM=_v()
_(r,oTM)
if(_oz(z,1,e,s,gg)){oTM.wxVkey=1
}
var cVM=_mz(z,'cy-modal',['btnText',2,'show',1,'title',2],[],e,s,gg)
_(r,cVM)
oTM.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_58";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_58();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/collect_heart_help/index.wxml'] = [$gwx_XC_58, './pages/collect_heart_help/index.wxml'];else __wxAppCode__['pages/collect_heart_help/index.wxml'] = $gwx_XC_58( './pages/collect_heart_help/index.wxml' );
	;__wxRoute = "pages/collect_heart_help/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/collect_heart_help/index.js";define("pages/collect_heart_help/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=getApp(),e=require("../../BC983DD1829A079CDAFE55D6E84D7B70.js"),a=require("../../840A1D64829A079CE26C7563276C7B70.js").doPoint,o=require("../../92BC1755829A079CF4DA7F52C55D7B70.js"),i=o.param,s=o.getQueryStr,r=e.baseUrl+"/events/activity/heart/help/page/",n=e.baseUrl+"/events/activity/send/heart/help/";Page({data:{show_double_heart_mask:!1,showIndex:0,tips_show:!1,collect_problem_id:"",end:!1,isLogin:!1,status:0},onShow:function(){var e=this;t.globalData.appIsLogin.then((function(){e.data.isLogin||(e.setData({isLogin:!0}),e.initData())}))},onLoad:function(t){var e="?".concat(decodeURIComponent(t.scene)),o=s("id",e||""),i=t.link;a("ActivityPageView",{activity_name:"sax_1",info:i?"link":"scan"}),this.setData({collect_problem_id:t.collect_problem_id||o}),this.initData();wx.setStorageSync("authorizationPointData",{from_type:"集爱心",activity_id:90,source_type:"smm-jax"})},initData:function(){var e=this,a=e.data.collect_problem_id,o=t.globalData.partner;wx.request({url:r,method:"GET",data:{partner:o,problem_id:a,from_wx_mini:1},success:function(t){var a=t.data;e.setData({image:a.image||"",nickname:a.nickname||"",collects:a.collects||[]}),e.countTime(a.left_timestamp),a.collects&&a.collects.count&&e.showIndexFn(a.collects.count)}})},freeQa:function(){a("ActivityClick",{activity_name:"sax_3",click_position:"sax_sup"})},backHome:function(){a("ActivityClick",{activity_name:"sax_3",click_position:"sax_tohome"})},sendHeart:function(){var e=this,a=e.data.collect_problem_id,o=t.globalData.partner,s={problem_id:a,partner:o,from_wx_mini:1};wx.request({url:n,header:{"Content-Type":"application/x-www-form-urlencoded",Cookie:t.globalData.sessionid},method:"POST",data:i(s),success:function(t){var o=t.data;0==o.error?(wx.setStorage({key:"double_heart_problem_id",data:a}),e.setData({show_double_heart_mask:!0,status:2})):4==o.error?e.setData({show_double_heart_mask:!0,status:1}):5==o.error?(wx.setStorage({key:"double_heart_problem_id",data:a}),e.setData({show_double_heart_mask:!0,status:2})):1!=o.error&&2!=o.error&&3!=o.error||e.setData({tips:o.error_msg,tips_show:!0})},fail:function(t){e.setData({tips:t&&t.data&&t.data.error_msg?t.data.error_msg:"赠送失败，可能已赠送过爱心给其他用户",tips_show:!0})}})},countTime:function(t){var e=t||0,a=0,o=0,i=0,s=this;if(0!=e)var r=setInterval((function(){(new Date).getTime(),e-=1e3,Math.floor(e/864e5),a=Math.floor(e%864e5/36e5),o=Math.floor(e%864e5%36e5/6e4),i=Math.floor(e%864e5%36e5%6e4/1e3),e<=0?(s.setData({end:!0}),console.log("已结束"),clearInterval(r)):s.setData({hour:a>9?a:"0"+a,minute:o>9?o:"0"+o,second:i>9?i:"0"+i})}),1e3);else s.setData({end:!0})},showIndexFn:function(t){var e=this;setInterval((function(){t==e.data.showIndex&&(e.data.showIndex=-1),e.setData({showIndex:++e.data.showIndex})}),3e3)},onShareAppMessage:function(){}});
},{isPage:true,isComponent:true,currentFile:'pages/collect_heart_help/index.js'});require("pages/collect_heart_help/index.js");