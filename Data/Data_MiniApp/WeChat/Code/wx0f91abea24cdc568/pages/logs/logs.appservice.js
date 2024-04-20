$gwx_XC_3=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_3 || [];
function gz$gwx_XC_3_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_3_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_3_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_3=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_3=true;
var x=['./pages/logs/logs.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_3_1()
var hG=_n('Privacy')
_(r,hG)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_3";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_3();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/logs/logs.wxml'] = [$gwx_XC_3, './pages/logs/logs.wxml'];else __wxAppCode__['pages/logs/logs.wxml'] = $gwx_XC_3( './pages/logs/logs.wxml' );
	;__wxRoute = "pages/logs/logs";__wxRouteBegin = true;__wxAppCurrentFile__="pages/logs/logs.js";define("pages/logs/logs.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/defineProperty"),t=(require("../../utils/util.js"),require("../../utils/request"));Page({data:{dwdh:"",dwname:"",gh:"",ygname:"",upass:"",checkvalue:"记住密码",checked:""},onLoad:function(){},onShow:function(){var e=wx.getStorageSync("checkedtype");if(console.log(e,"chety"),"false"==e)this.setData({checked:"false"});else if("true"==e){this.setData({checked:"true"});var t=wx.getStorageSync("jcdwbh"),a=wx.getStorageSync("jcdwmc"),n=wx.getStorageSync("passwd"),o=wx.getStorageSync("ygname"),c=wx.getStorageSync("gh");this.setData({dwdh:t,dwname:a,upass:n,ygname:o,gh:c,checked:e})}},checkboxChange:function(e){0!==e.detail.value.length?(this.setData({checked:!0}),wx.setStorage({key:"checkedtype",data:"true"})):wx.setStorage({key:"checkedtype",data:"false"})},SetInputVal:function(t){var a=t.target.dataset.field;this.setData(e({},a,t.detail.value))},toLogin:function(){wx.showLoading({title:"正在登录中，请稍后..."});var e=this,a=wx.getStorageSync("checkedtype"),n={jcdwbh:e.data.dwdh,passwd:e.data.upass,zgbh:e.data.gh,ygname:e.data.ygname};return console.log(n,"data-------"),""==n.jcdwbh||""==n.passwd?(wx.hideLoading(),wx.showToast({title:"请输入检测单位代号或密码",icon:"none"}),!1):""==n.gh||""==n.ygname?(wx.hideLoading(),wx.showToast({title:"请输入登录工号以及员工姓名",icon:"none"}),!1):(wx.hideLoading(),void t.postForm("/jczx/jcdwlogin",n,(function(t){console.log(t),200==t.data.code?("true"==a&&(wx.setStorageSync("passwd",n.passwd),wx.setStorageSync("gh",n.zgbh),wx.setStorageSync("ygname",n.ygname)),wx.setStorageSync("jcdwbh",n.jcdwbh),wx.setStorageSync("jcdwmc",e.data.dwname),wx.setStorageSync("jgurl",t.data.data.JGURL),wx.showToast({title:"登录成功",duration:2e3,icon:"none",success:function(){setTimeout((function(){wx.redirectTo({url:"/pages/index/index?jcdwmc="+e.data.dwname})}),2e3)}})):(wx.showToast({title:"账号或密码错误，请重新输入",icon:"none"}),e.setData({upass:""}))})))},toGetDwName:function(e){var a=this,n={jcdwbh:e.detail.value};t.postForm("/jczx/findjcdwBybh",n,(function(e){""==e.data?(wx.showToast({title:"无此检测中心，请联系软件公司完善",icon:"none"}),a.setData({dwname:""})):a.setData({dwname:e.data.jcdwmc})}))},toGetUserInfo:function(e){var a=this,n={zgbh:e.detail.value,jcdwbh:a.data.dwdh};t.postForm("jczx/getUserNameByZgbh",n,(function(e){if(""==e.data)return wx.showToast({title:"未查询到该用户",icon:"none"}),a.setData({gh:""}),!1;a.setData({ygname:e.data.yg_name})}))}});
},{isPage:true,isComponent:true,currentFile:'pages/logs/logs.js'});require("pages/logs/logs.js");