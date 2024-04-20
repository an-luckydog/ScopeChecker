$gwx_XC_6=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_6 || [];
function gz$gwx_XC_6_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_6_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_6_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_6_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'get-phone'])
Z([3,'gPeidx_1'])
Z([[7],[3,'show']])
Z([3,'onGetPhone'])
Z([3,'btn_mobile'])
Z([3,'gPeidx_2'])
Z([3,'zh_CN'])
Z([3,'getPhoneNumber'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_6_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_6_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_6=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_6=true;
var x=['./cms/RAW/components/getPhone/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_6_1()
var c3B=_mz(z,'view',['class',0,'id',1],[],e,s,gg)
var o4B=_v()
_(c3B,o4B)
if(_oz(z,2,e,s,gg)){o4B.wxVkey=1
var l5B=_mz(z,'button',['bindgetphonenumber',3,'class',1,'id',2,'lang',3,'openType',4],[],e,s,gg)
var a6B=_n('slot')
_(l5B,a6B)
_(o4B,l5B)
}
else{o4B.wxVkey=2
var t7B=_n('slot')
_(o4B,t7B)
}
o4B.wxXCkey=1
_(r,c3B)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_6";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_6();	if (__vd_version_info__.delayedGwx) __wxAppCode__['cms/RAW/components/getPhone/index.wxml'] = [$gwx_XC_6, './cms/RAW/components/getPhone/index.wxml'];else __wxAppCode__['cms/RAW/components/getPhone/index.wxml'] = $gwx_XC_6( './cms/RAW/components/getPhone/index.wxml' );
	;__wxRoute = "cms/RAW/components/getPhone/index";__wxRouteBegin = true;__wxAppCurrentFile__="cms/RAW/components/getPhone/index.js";define("cms/RAW/components/getPhone/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../../../@babel/runtime/helpers/Arrayincludes"),require("../../titan.bootstrap.js");var e=global.bc("platform","cms"),i=require("../../titan-scoped-env.js"),t=require("../../utils/util"),n=require("../../utils/ext"),o=require("../../index"),s=(0,t.getPlatFormChannel)();i.requirePlatform("cms_sdk").main.SDK;i.Component({properties:{show:{type:Boolean,value:!0}},data:{isFinish:!0},ready:function(){this.checkSession()},methods:{checkSession:function(){"function"==typeof i.wx.checkSession&&i.wx.checkSession({success:function(){},fail:function(){o.auth.login()}})},onGetPhone:function(e){var o=this;if(this.data.isFinish)if(this.data.isFinish=!1,[t.WeiXin,t.Xhs].includes(s)){if(t.WeiXin==s&&(e.detail.errno,"getPhoneNumber:ok"===e.detail.errMsg)){var r=i.wx.getStorageSync("WOS_WXAPP_SESSION"),a=r.appid,c=r.openid,u=r.wid,h=r.bosId;i.wx.rprm.rec({en:"authphonerecord",bos_id:h,appid:a,openid:c,wid:u,time:Date.now(),channel:(0,t.getPlatFormSource)(),stattype:3428948312})}"getPhoneNumber:ok"===e.detail.errMsg?this.getPhone(e,e.detail):this.doEmit("fail",e,"",(null==e?void 0:e.detail)||{})}else s===t.AliPay&&i.my.getPhoneNumber({protocols:{isvAppId:(0,n.getExtForm)().isvAppId},success:function(e){var i=JSON.parse(e.response||"{}");i?o.getPhone(i):o.doEmit("fail",i,"")},fail:function(e){o.doEmit("fail",e.errorMessage,"")}})},getPhone:function(e,i){var t=this;o.auth.getUserPhone(e).then((function(n){t.doEmit("success",e,n,i)})).catch((function(i){t.doEmit("fail",e,i)}))},doEmit:function(e,i,t,n){this.data.isFinish=!0;var o={status:e,encryptedData:n||i,data:t,channel:s};this.triggerEvent("getphonenumber",o)}}}),global.ec(e);
},{isPage:false,isComponent:true,currentFile:'cms/RAW/components/getPhone/index.js'});require("cms/RAW/components/getPhone/index.js");