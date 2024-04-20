$gwx_XC_9=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_9 || [];
function gz$gwx_XC_9_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_9_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_9_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_9_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([1,false])
Z([1,20007])
Z([3,'border-radius: 16rpx 16rpx 0 0'])
Z([[7],[3,'maskStyle']])
Z([3,'chlidx_1'])
Z(z[1])
Z([3,'bottom'])
Z([[7],[3,'visible']])
Z([3,'user'])
Z([[7],[3,'userInfo']])
Z([a,[[7],[3,'index']],[3,'+index']])
Z([[6],[[7],[3,'user']],[3,'avatarUrl']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_9_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_9_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_9=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_9=true;
var x=['./cms/RAW/components/registLogin/common/changePhoneModal/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_9_1()
var cGC=_mz(z,'ti-popup',['closeOnMask',0,'contentZIndex',1,'extContentStyle',1,'extMaskStyle',2,'id',3,'maskZIndex',4,'position',5,'visible',6],[],e,s,gg)
var oHC=_v()
_(cGC,oHC)
var lIC=function(tKC,aJC,eLC,gg){
var oNC=_v()
_(eLC,oNC)
if(_oz(z,11,tKC,aJC,gg)){oNC.wxVkey=1
}
oNC.wxXCkey=1
return eLC
}
oHC.wxXCkey=2
_2z(z,9,lIC,e,s,gg,oHC,'user','index','{{index}}+index')
_(r,cGC)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_9";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_9();	if (__vd_version_info__.delayedGwx) __wxAppCode__['cms/RAW/components/registLogin/common/changePhoneModal/index.wxml'] = [$gwx_XC_9, './cms/RAW/components/registLogin/common/changePhoneModal/index.wxml'];else __wxAppCode__['cms/RAW/components/registLogin/common/changePhoneModal/index.wxml'] = $gwx_XC_9( './cms/RAW/components/registLogin/common/changePhoneModal/index.wxml' );
	;__wxRoute = "cms/RAW/components/registLogin/common/changePhoneModal/index";__wxRouteBegin = true;__wxAppCurrentFile__="cms/RAW/components/registLogin/common/changePhoneModal/index.js";define("cms/RAW/components/registLogin/common/changePhoneModal/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../../../titan.bootstrap.js");var e=global.bc("platform","cms"),i=require("../../../../titan-scoped-env.js"),t=require("../../../../utils/util"),r=s(require("../../../../utils/request")),a=s(require("../../api.config"));function s(e){return e&&e.__esModule?e:{default:e}}var n=i.requirePlatform("cms").main.CMS;i.Component({properties:{afterMerge:Object},data:{visible:!1,userInfo:[]},methods:{open:function(e){var t=this;return new i.Promise((function(i,r){t.successCallback=i,t.failCallback=r;var a=e.uuid,s=e.relations,o=e.isUnique,u=void 0!==o&&o,l=n.getCurrentChannelStyle().primaryColor;t.setData({visible:!0,uuid:a,userInfo:s,primaryColor:l||"04c160",isUnique:u})}))},close:function(){this.setData({visible:!1}),this.failCallback("close")},changePhone:function(){var e=this,s=this.data,n=s.uuid,o=s.isUnique,u=(0,t.getPlatFormSource)();r.default.post(a.default.confirmChangePhone,{uuid:n,bindSource:o?2:u}).then((function(t){if(0!=t.errcode)return e.failCallback(t.errmsg),i.wx.showToast({title:t.errmsg||"错误啦",icon:"none"});e.setData({visible:!1},(function(){e.successCallback(t.data)}))}))}}}),global.ec(e);
},{isPage:false,isComponent:true,currentFile:'cms/RAW/components/registLogin/common/changePhoneModal/index.js'});require("cms/RAW/components/registLogin/common/changePhoneModal/index.js");