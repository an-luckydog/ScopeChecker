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
Z([[7],[3,'showTips']])
Z([3,'btn_group'])
Z([[7],[3,'fButtonText']])
Z([[7],[3,'sButtonText']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_23_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_23_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_23=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_23=true;
var x=['./pages/market/coupon/index/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_23_1()
var l5I=_v()
_(r,l5I)
if(_oz(z,0,e,s,gg)){l5I.wxVkey=1
var a6I=_n('view')
_rz(z,a6I,'class',1,e,s,gg)
var t7I=_v()
_(a6I,t7I)
if(_oz(z,2,e,s,gg)){t7I.wxVkey=1
}
var e8I=_v()
_(a6I,e8I)
if(_oz(z,3,e,s,gg)){e8I.wxVkey=1
}
t7I.wxXCkey=1
e8I.wxXCkey=1
_(l5I,a6I)
}
l5I.wxXCkey=1
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_23();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/market/coupon/index/index.wxml'] = [$gwx_XC_23, './pages/market/coupon/index/index.wxml'];else __wxAppCode__['pages/market/coupon/index/index.wxml'] = $gwx_XC_23( './pages/market/coupon/index/index.wxml' );
	;__wxRoute = "pages/market/coupon/index/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/market/coupon/index/index.js";define("pages/market/coupon/index/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../../cwx/cwx.js");(0,e.CPage)({pageId:"10650075558",data:{title:"",msg:"",targetUrl:"",fButtonText:"",fButtonAction:"",sButtonText:"",sButtonAction:"",showTips:!1},onLoad:function(t){var o=this;wx.showToast({title:"数据请求中...",icon:"loading",duration:6e4}),this.ubtDevTrace("mkt_main_coupon",{action:"page onload",allianceid:t.allianceid||"",sid:t.sid||"",ouid:t.ouid||"",sourceid:t.sourceid||""}),e.cwx.user.checkLoginStatusFromServer((function(e){wx.j("E2X"),wx.hideToast(),e?(o.ubtDevTrace("mkt_main_coupon",{action:"hasLogin and start sendCoupon",checkLoginRes:e}),o.sendCoupon()):(o.ubtDevTrace("mkt_main_coupon",{action:"not login and handle start login",checkLoginRes:e,currentTime:new Date}),o.setData({showTips:!0,title:"您还没登录呢",msg:"登录后可获得“优享优惠券”",fButtonText:"登录领券",fButtonAction:"userLogin",sButtonText:"返回",sButtonAction:"goHome"}))}))},sendCoupon:function(){wx.j("ZXt");var t,o,n=this,a={},s="",c="",i=[];e.cwx.mkt.getUnion((function(e){wx.j("587"),a=e})),t={PlatformType:"WECHAT",AppID:e.cwx.appId,ActivityCode:String(a.allianceid),OpenID:e.cwx.cwx_mkt.openid,SourcePage:"SEND_COUPON_MIDDLE_PAGE",MarketInfo:{AID:String(a.allianceid),SID:String(a.sid),OUID:a.ouid,SourceID:String(a.sourceid),OuterID:""}},wx.showToast({title:"优惠券领取中...",icon:"loading",duration:6e4}),o=new Date,this.ubtDevTrace("mkt_main_coupon",{action:"start request activityCouponDistrbut",requestTime:o}),e.cwx.request({data:t,url:"/restapi/soa2/12673/activityCouponDistrbut?_fxpcqlniredt="+e.cwx.clientID,success:function(a){if(wx.j("unV"),wx.hideToast(),a&&a.data&&a.data.ResponseStatus&&"Success"==a.data.ResponseStatus.Ack){switch(c=a.data.resultCode||"",i=a.data.strategyList||[],n.setData({targetUrl:a.data.targetUrl||""}),s={timeDuration:new Date-o+"ms",request:JSON.stringify(t)},c){case"0":n.ubtDevTrace("mkt_main_coupon",Object.assign(s,{action:"send coupon success"}));break;case"-100":n.ubtDevTrace("mkt_main_coupon",Object.assign(s,{action:"sendCoupon rescode -100"}));break;case"-200":n.ubtDevTrace("mkt_main_coupon",Object.assign(s,{action:"sendCoupon rescode -200"}));break;case"-300":n.ubtDevTrace("mkt_main_coupon",Object.assign(s,{action:"sendCoupon rescode -300"}));break;case"-400":n.ubtDevTrace("mkt_main_coupon",Object.assign(s,{action:"sendCoupon rescode -400"}));break;case"-500":n.ubtDevTrace("mkt_main_coupon",Object.assign(s,{action:"sendCoupon rescode -500"}));break;case"-600":n.ubtDevTrace("mkt_main_coupon",Object.assign(s,{action:"sendCoupon rescode -600"}));break;case"-700":n.ubtDevTrace("mkt_main_coupon",Object.assign(s,{action:"sendCoupon rescode -700"}));break;case"-1000":n.ubtDevTrace("mkt_main_coupon",Object.assign(s,{action:"sendCoupon rescode -1000"}));break;case"1001":n.ubtDevTrace("mkt_main_coupon",Object.assign(s,{action:"sendCoupon rescode 1001"}));break;case"2001":n.ubtDevTrace("mkt_main_coupon",Object.assign(s,{action:"sendCoupon rescode 2001"}));break;case"2002":n.ubtDevTrace("mkt_main_coupon",Object.assign(s,{action:"sendCoupon rescode 2002"}));break;case"3000":n.ubtDevTrace("mkt_main_coupon",Object.assign(s,{action:"sendCoupon rescode 3000"}));break;case"3002":n.ubtDevTrace("mkt_main_coupon",Object.assign(s,{action:"sendCoupon rescode 3002"}));break;case"3004":n.ubtDevTrace("mkt_main_coupon",Object.assign(s,{action:"sendCoupon rescode 3004"}));break;case"3005":n.ubtDevTrace("mkt_main_coupon",Object.assign(s,{action:"sendCoupon rescode 3005"}));break;case"3013":n.ubtDevTrace("mkt_main_coupon",Object.assign(s,{action:"sendCoupon rescode 3013"}));break;case"3114":n.ubtDevTrace("mkt_main_coupon",Object.assign(s,{action:"sendCoupon rescode 3114"}));break;case"3119":n.ubtDevTrace("mkt_main_coupon",Object.assign(s,{action:"sendCoupon rescode 3119"}));break;case"3120":n.ubtDevTrace("mkt_main_coupon",Object.assign(s,{action:"sendCoupon rescode 3120"}));break;default:n.ubtDevTrace("mkt_main_coupon",Object.assign(s,{action:"sendCoupon rescode error"}))}if("0"==c||"-700"==c)if(n.setData({showTips:!1}),i&&i.length>0)try{e.cwx.mkt.addCard(i,"STRATEGY",(function(){wx.j("trF"),console.log("************ 添加微信卡券 - 成功 ****************"),n.goTargetUrl()}),(function(){wx.j("YTR"),console.log("************ 添加微信卡券 - 失败 ****************"),n.goTargetUrl()}))}catch(e){n.goTargetUrl()}else n.goTargetUrl();else n.setData({showTips:!0,title:"很抱歉",msg:"服务器开小差了，优惠券没领到"+(isNaN(Number(c))?"":"："+Math.abs(Number(c))),fButtonText:"继续购买",fButtonAction:"goTargetUrl",sButtonText:"",sButtonAction:""})}else n.setData({showTips:!0,title:"很抱歉",msg:"服务器开小差了，优惠券没领到",fButtonText:"",fButtonAction:"",sButtonText:"返回",sButtonAction:"goHome"})},fail:function(e){wx.j("VAA"),wx.hideToast(),n.ubtDevTrace("mkt_main_coupon",{action:"sendCoupon request error",timeDuration:new Date-o+"ms",request:JSON.stringify(t),response:"错误信息："+e}),n.setData({showTips:!0,title:"Oops!",msg:"您的网络不给力哦，请重试",fButtonText:"重新领取",fButtonAction:"sendCoupon",sButtonText:"返回",sButtonAction:"goHome"})}})},userLogin:function(){wx.j("qbF");var t=this;e.cwx.user.login({callback:function(e){wx.j("vXd"),e&&"0"==e.ReturnCode&&(t.ubtDevTrace("mkt_main_coupon",{action:"login success and handle sendCoupon",loginRes:e,currentTime:new Date}),t.setData({showTips:!1}),t.sendCoupon())}})},goTargetUrl:function(){wx.j("t2x");var t=this,o=this.data.targetUrl;-1!=e._.indexOf(e.__global.tabbar,o)?e.cwx.switchTab({url:"/"+o.trim()}):o?e.cwx.redirectTo({url:"../../../../"+o.trim(),fail:function(e){wx.j("x5D"),t.goHome()}}):(t.ubtDevTrace("mkt_main_coupon",{action:"coupon targetUrl is null",targetUrl:"未配置"}),t.goHome())},goHome:function(){wx.j("wvf"),e.cwx.switchTab({url:"/pages/home/homepage"})}});
},{isPage:true,isComponent:true,currentFile:'pages/market/coupon/index/index.js'});require("pages/market/coupon/index/index.js");