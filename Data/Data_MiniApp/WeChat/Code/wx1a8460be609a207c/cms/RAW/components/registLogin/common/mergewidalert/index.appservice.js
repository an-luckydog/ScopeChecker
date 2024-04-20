$gwx_XC_10=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_10 || [];
function gz$gwx_XC_10_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_10_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'visible']])
Z([1,false])
Z([1,15001])
Z([3,'border-radius: 16rpx 16rpx 0 0'])
Z([[7],[3,'maskStyle']])
Z([3,'mitidx_2'])
Z([1,10002])
Z([3,'bottom'])
Z(z[0])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_10_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_10=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_10=true;
var x=['./cms/RAW/components/registLogin/common/mergewidalert/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_10_1()
var oPC=_v()
_(r,oPC)
if(_oz(z,0,e,s,gg)){oPC.wxVkey=1
var fQC=_mz(z,'ti-popup',['closeOnMask',1,'contentZIndex',1,'extContentStyle',2,'extMaskStyle',3,'id',4,'maskZIndex',5,'position',6,'visible',7],[],e,s,gg)
_(oPC,fQC)
}
oPC.wxXCkey=1
oPC.wxXCkey=3
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_10";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_10();	if (__vd_version_info__.delayedGwx) __wxAppCode__['cms/RAW/components/registLogin/common/mergewidalert/index.wxml'] = [$gwx_XC_10, './cms/RAW/components/registLogin/common/mergewidalert/index.wxml'];else __wxAppCode__['cms/RAW/components/registLogin/common/mergewidalert/index.wxml'] = $gwx_XC_10( './cms/RAW/components/registLogin/common/mergewidalert/index.wxml' );
	;__wxRoute = "cms/RAW/components/registLogin/common/mergewidalert/index";__wxRouteBegin = true;__wxAppCurrentFile__="cms/RAW/components/registLogin/common/mergewidalert/index.js";define("cms/RAW/components/registLogin/common/mergewidalert/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../../../titan.bootstrap.js");var e=global.bc("platform","cms"),t=require("../../../../titan-scoped-env.js"),r=require("../../../../utils/ext"),a=require("../../../../utils/util"),s=t.requirePlatform("cms").main.CMS;t.Component({properties:{afterMerge:Object},data:{visible:!1,selectedUser:{},userInfo:[]},methods:{open:function(e){var r=this;return new t.Promise((function(t,a){r.successCallback=t,r.failCallback=a;var i=e.uuid,o=e.relations,l=s.getCurrentChannelStyle().primaryColor;r.setData({visible:!0,uuid:i,userInfo:o,selectedUser:o[0],primaryColor:l})}))},close:function(){t.wx.showToast({title:"信息错误，重新授权一下您的信息",icon:"none"}),this.setData({visible:!1}),this.failCallback("close")},userSelected:function(e){var t=e.currentTarget.dataset.user;this.setData({selectedUser:t})},mergeWid:function(){var e=this,s=this.data,i=s.uuid,o=s.selectedUser,l=(0,a.getPlatFormSource)();a.getPlatFormChannel,a.WeiXin,"".concat((0,r.getExtHost)(),"/fe/mapi/user/confirmForAuth"),t.wx.request({url:"".concat((0,r.getExtHost)(),"/fe/mapi/user/confirmForAuth"),method:"post",data:Object.assign({},(0,r.getExtForm)(),{uuid:i,source:l,wid:o.wid})}).then((function(r){if(0!=r.data.errcode)return e.failCallback(r.data.errmsg),t.wx.showToast({title:r.data.errmsg||"合并账号信息错误",icon:"none"});e.setData({visible:!1}),e.successCallback(r.data)}))}}}),global.ec(e);
},{isPage:false,isComponent:true,currentFile:'cms/RAW/components/registLogin/common/mergewidalert/index.js'});require("cms/RAW/components/registLogin/common/mergewidalert/index.js");