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
Z([[7],[3,'isWebview']])
Z([[2,'=='],[[7],[3,'colltectStatus']],[1,'show']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_21_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_21_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_21=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_21=true;
var x=['./pages/market/components/collection/collection.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_21_1()
var eTI=_v()
_(r,eTI)
if(_oz(z,0,e,s,gg)){eTI.wxVkey=1
var bUI=_v()
_(eTI,bUI)
if(_oz(z,1,e,s,gg)){bUI.wxVkey=1
}
bUI.wxXCkey=1
}
else{eTI.wxVkey=2
}
eTI.wxXCkey=1
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_21();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/market/components/collection/collection.wxml'] = [$gwx_XC_21, './pages/market/components/collection/collection.wxml'];else __wxAppCode__['pages/market/components/collection/collection.wxml'] = $gwx_XC_21( './pages/market/components/collection/collection.wxml' );
	;__wxRoute = "pages/market/components/collection/collection";__wxRouteBegin = true;__wxAppCurrentFile__="pages/market/components/collection/collection.js";define("pages/market/components/collection/collection.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e,t=require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../@babel/runtime/regenerator")),a=require("../../../../@babel/runtime/helpers/asyncToGenerator"),o=require("../../../../cwx/cwx.js"),c=require("../../common/utils.js"),n="",r=getApp();Component({timer:null,externalClasses:["mkt-collection-layout"],properties:{isWebview:{type:Boolean,value:!1},isCustomNav:{type:Boolean,value:!0},delayTime:{type:Number,value:5e3},collectText:{type:String,value:'点击"..."添加到我的小程序，下次使用更方便'},daysBetween:{type:Number,value:7}},data:{colltectStatus:"",navHeight:4},pageLifetimes:{show:function(){e=o.cwx.getCurrentPage(),n=e&&(e.pageid||e.pageId)||""},hide:function(){this.setData({colltectStatus:""})}},ready:function(){var l=this;return a(t.default.mark((function a(){var i,s,u,d,g,m,p,w,x,h,b;return t.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=l.data.daysBetween,s=o.cwx.getStorageSync("mkt_new_collect_time")||0,u=o.cwx.getStorageSync("mkt_new_collect_click")||!1,s=Number(s),t.prev=3,e=o.cwx.getCurrentPage(),n=e&&(e.pageid||e.pageId)||"",d=e.options,g=e.route,!d||!d.hideCollection||"T"!=d.hideCollection){t.next=10;break}return t.abrupt("return");case 10:return l.data.isCustomNav&&(console.log("====是自定义导航==="),l.setData({navHeight:r.globalData.statusBarHeight+r.globalData.titleBarHeight})),t.next=13,c.fetch("22559","collectionConfig",{});case 13:if(m=t.sent,p=!1,console.log("====收藏组件配置====",m),!m.data||0!=m.code||!m.data.black_list){t.next=27;break}w=0;case 18:if(!(w<m.data.black_list.length)){t.next=27;break}if(!((x=m.data.black_list[w])==g||g.startsWith("cwx/component")&&d.data&&JSON.parse(d.data).url&&o.cwx.util.decodeURIComponentSafely(JSON.parse(d.data).url).includes(x)||"pages/market/web/index"==g&&o.cwx.util.decodeURIComponentSafely(d.from).includes(x))){t.next=24;break}return console.log("===黑名单==",g),p=!0,t.abrupt("break",27);case 24:w++,t.next=18;break;case 27:if(!p){t.next=29;break}return t.abrupt("return");case 29:h=!(!d||!d.cleanStorage),b=wx.getSystemInfoSync().SDKVersion||"0",l.logTrace("userSdkVersion","用户当前的基础库版本号",b||""),c.compareVersion(b,"2.29.1")>=0&&wx.checkIsAddedToMyMiniProgram?wx.checkIsAddedToMyMiniProgram({success:function(e){if(wx.j("VB7"),console.log("====检查是否需要展示 收藏组件1",e),!e.added){var t=new Date;(h||!s||u&&t.getTime()-s>24*i*3600*1e3||!u&&t.getMonth()+"-"+t.getDate()!=new Date(s).getMonth()+"-"+new Date(s).getDate())&&(console.log("======检查是否需要展示 收藏组件2"),l.setData({colltectStatus:"show"},(function(){wx.j("ZjE"),clearTimeout(l.timer),l.logTrace("showCollection","展示收藏浮层",""),l.timer=setTimeout((function(){wx.j("ccP"),l.setData({colltectStatus:"hide"})}),l.data.delayTime)})),o.cwx.setStorageSync("mkt_new_collect_time",(new Date).getTime()))}}}):console.log("===基础库版本过低==="),t.next=38;break;case 35:t.prev=35,t.t0=t.catch(3),console.log("====组件报错了吗",t.t0);case 38:case"end":return t.stop()}}),a,null,[[3,35]])})))()},methods:{closeCollection:function(){wx.j("SIq"),clearTimeout(this.timer),this.setData({colltectStatus:"hide"}),o.cwx.setStorageSync("mkt_new_collect_click",!0),this.logTrace("closeCollection","关闭收藏浮层","")},logTrace:function(t,a){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";wx.j("L0c");try{e&&e.ubtTrace&&e.ubtTrace(201002,{keyName:"mkt_2021Activity",activityName:"mkt_collection_component",actioncode:t||"",actionMsg:a||"",pageId:n||"",openId:o.cwx.cwx_mkt.openid||"",content:c||""})}catch(e){console.log("埋点报错",e)}}}});
},{isPage:false,isComponent:true,currentFile:'pages/market/components/collection/collection.js'});require("pages/market/components/collection/collection.js");