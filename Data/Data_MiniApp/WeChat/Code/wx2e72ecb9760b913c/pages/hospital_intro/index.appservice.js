$gwx_XC_132=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_132 || [];
function gz$gwx_XC_132_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_132_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_132_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_132_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'isLogin']])
Z([3,'hospital-intro-wrap'])
Z([[7],[3,'description']])
Z([[7],[3,'address']])
Z([[7],[3,'roadmap']])
Z([[7],[3,'phone']])
Z([[7],[3,'showAuthorize']])
Z([3,'loginFail'])
Z([3,'loginSuccess'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_132_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_132_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_132=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_132=true;
var x=['./pages/hospital_intro/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_132_1()
var oT7=_v()
_(r,oT7)
if(_oz(z,0,e,s,gg)){oT7.wxVkey=1
var aV7=_n('view')
_rz(z,aV7,'class',1,e,s,gg)
var tW7=_v()
_(aV7,tW7)
if(_oz(z,2,e,s,gg)){tW7.wxVkey=1
}
var eX7=_v()
_(aV7,eX7)
if(_oz(z,3,e,s,gg)){eX7.wxVkey=1
var oZ7=_v()
_(eX7,oZ7)
if(_oz(z,4,e,s,gg)){oZ7.wxVkey=1
}
oZ7.wxXCkey=1
}
var bY7=_v()
_(aV7,bY7)
if(_oz(z,5,e,s,gg)){bY7.wxVkey=1
}
tW7.wxXCkey=1
eX7.wxXCkey=1
bY7.wxXCkey=1
_(oT7,aV7)
}
var lU7=_v()
_(r,lU7)
if(_oz(z,6,e,s,gg)){lU7.wxVkey=1
var x17=_mz(z,'cy-authorize',['bindloginFail',7,'bindloginSuccess',1],[],e,s,gg)
_(lU7,x17)
}
oT7.wxXCkey=1
lU7.wxXCkey=1
lU7.wxXCkey=3
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_132";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_132();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/hospital_intro/index.wxml'] = [$gwx_XC_132, './pages/hospital_intro/index.wxml'];else __wxAppCode__['pages/hospital_intro/index.wxml'] = $gwx_XC_132( './pages/hospital_intro/index.wxml' );
	;__wxRoute = "pages/hospital_intro/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/hospital_intro/index.js";define("pages/hospital_intro/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=getApp(),o=require("../../BC983DD1829A079CDAFE55D6E84D7B70.js").baseUrl+"/api/search/hospital/hospital_intro/",a=require("../../840A1D64829A079CE26C7563276C7B70.js").doPoint;Page({data:{isLogin:!1,showAuthorize:!1,hospitalId:0,desControlText:"展开全部",showAllDesc:!1,description:"",address:"",roadmap:"",phone:"",shareInfo:{},isShare:!1,inviterUserId:0},jumpQa:function(){a("AppClick",{click_position:"医院介绍页-温馨提示",platform_source:"weixin_mini"}),wx.navigateTo({url:"../fast_qa/index"})},onLoad:function(o){var a=this,i=o.hospitalId||0;o.hospitalName&&wx.setNavigationBarTitle({title:"".concat(o.hospitalName," - 春雨医生")}),this.setData({isShare:"true"===o.share,inviterUserId:o.inviterUserId||0,hospitalName:o.hospitalName||"",hospitalId:i}),t.globalData.appIsLogin.then((function(){a.loginSuccess()}),(function(){a.setData({isLogin:!1,showAuthorize:!0})}))},onReady:function(){},onShow:function(){},loginSuccess:function(){this.setData({isLogin:!0,showAuthorize:!1}),this.getHospitalIntro();var t=this.data,o=t.isShare,i=t.inviterUserId,e={page_title:"找医院-医院介绍",platform_source:"weixin_mini",hospital_name:t.hospitalName};o&&(e.inviter_user_id=i),a("PageView",e)},loginFail:function(){console.log("授权失败")},getHospitalIntro:function(){var a=this;wx.request({url:o,method:"GET",header:{"Content-Type":"application/json",Cookie:t.globalData.sessionid},data:{hospital_id:a.data.hospitalId,from_wx_mini:1,is_json:1,partner:t.globalData.partner},success:function(t){if(0===t.data.error_code){var o=t.data.description||"",i=t.data.address||"",e=t.data.roadmap||"",s=t.data.phone||"",n=t.data.share_info||{};a.setData({description:o,address:i,roadmap:e,phone:s,shareInfo:n})}else wx.showToast({title:t.data.error_msg||"医院信息请求失败",icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:"医院信息请求失败",icon:"none",duration:2e3}),console.log("error in get hospital info:",t)}})},descControl:function(){var t=!this.data.showAllDesc,o=t?"收起":"展开全部";this.setData({showAllDesc:t,desControlText:o})},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){var t=this.data,o=t.shareInfo,a=t.hospitalName,i=t.hospitalId,e=o.title||a||"",s="/pages/hospital_intro/index?share=true&hospitalId=".concat(i,"&inviterUserId=").concat(o.user_id,"&hospitalName=").concat(a);return console.log("share-title:",e),console.log("share-path:",s),{title:e,path:s}}});
},{isPage:true,isComponent:true,currentFile:'pages/hospital_intro/index.js'});require("pages/hospital_intro/index.js");