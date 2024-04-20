$gwx_XC_56=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_56 || [];
function gz$gwx_XC_56_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_56_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_56_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_56_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showPrivacy']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_56_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_56_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_56=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_56=true;
var x=['./components/privacy/privacy.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_56_1()
var oRT=_v()
_(r,oRT)
if(_oz(z,0,e,s,gg)){oRT.wxVkey=1
}
oRT.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_56";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_56();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/privacy/privacy.wxml'] = [$gwx_XC_56, './components/privacy/privacy.wxml'];else __wxAppCode__['components/privacy/privacy.wxml'] = $gwx_XC_56( './components/privacy/privacy.wxml' );
	;__wxRoute = "components/privacy/privacy";__wxRouteBegin = true;__wxAppCurrentFile__="components/privacy/privacy.js";define("components/privacy/privacy.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Component({data:{privacyContractName:"",showPrivacy:!1},pageLifetimes:{show:function(){var t=this,a=wx.getAppBaseInfo().SDKVersion;t.compareVersion(a,"2.32.3")>=0&&wx.getPrivacySetting&&wx.getPrivacySetting({success:function(a){console.log("<=======是否有权限======>",a),"getPrivacySetting:ok"==a.errMsg&&t.setData({privacyContractName:a.privacyContractName,showPrivacy:a.needAuthorization})}})}},methods:{openPrivacyContract:function(){wx.openPrivacyContract({fail:function(){wx.showToast({title:"遇到错误",icon:"error"})}})},exitMiniProgram:function(){wx.exitMiniProgram()},handleAgreePrivacyAuthorization:function(){this.setData({showPrivacy:!1}),console.log("<==============>",this.data.showPrivacy)},compareVersion:function(t,a){t=t.split("."),a=a.split(".");for(var i=Math.max(t.length,a.length);t.length<i;)t.push("0");for(;a.length<i;)a.push("0");for(var o=0;o<i;o++){var n=parseInt(t[o]),r=parseInt(a[o]);if(n>r)return 1;if(n<r)return-1}return 0},handleCatchtouchMove:function(){},showPrivacy:function(){this.setData({showPrivacy:!0})}}});
},{isPage:false,isComponent:true,currentFile:'components/privacy/privacy.js'});require("components/privacy/privacy.js");