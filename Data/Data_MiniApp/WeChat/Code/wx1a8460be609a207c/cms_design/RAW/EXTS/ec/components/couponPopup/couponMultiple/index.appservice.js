$gwx_XC_22=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_22 || [];
function gz$gwx_XC_22_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_22_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_22_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_22_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'popup-class'])
Z([3,'popup-content-class'])
Z([1,true])
Z([3,'cMeidx_2'])
Z([3,'center'])
Z([[7],[3,'modalVisible']])
Z([[7],[3,'couponList']])
Z([3,'useClick'])
Z([3,'#ff2e2e'])
Z([[7],[3,'item']])
Z([a,[3,'cMeidx_'],[[7],[3,'index']],[3,'_f']])
Z([3,'small'])
Z([3,'outlined'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_22_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_22_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_22=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_22=true;
var x=['./cms_design/RAW/EXTS/ec/components/couponPopup/couponMultiple/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_22_1()
var x9D=_mz(z,'ti-popup',['extClass',0,'extContentClass',1,'hasMask',1,'id',2,'position',3,'visible',4],[],e,s,gg)
var o0D=_v()
_(x9D,o0D)
var fAE=function(hCE,cBE,oDE,gg){
var oFE=_mz(z,'ti-button',['hairline',-1,'bind:tap',7,'color',1,'data-item',2,'id',3,'size',4,'variant',5],[],hCE,cBE,gg)
_(oDE,oFE)
return oDE
}
o0D.wxXCkey=4
_2z(z,6,fAE,e,s,gg,o0D,'item','index','')
_(r,x9D)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_22";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_22();	if (__vd_version_info__.delayedGwx) __wxAppCode__['cms_design/RAW/EXTS/ec/components/couponPopup/couponMultiple/index.wxml'] = [$gwx_XC_22, './cms_design/RAW/EXTS/ec/components/couponPopup/couponMultiple/index.wxml'];else __wxAppCode__['cms_design/RAW/EXTS/ec/components/couponPopup/couponMultiple/index.wxml'] = $gwx_XC_22( './cms_design/RAW/EXTS/ec/components/couponPopup/couponMultiple/index.wxml' );
	;__wxRoute = "cms_design/RAW/EXTS/ec/components/couponPopup/couponMultiple/index";__wxRouteBegin = true;__wxAppCurrentFile__="cms_design/RAW/EXTS/ec/components/couponPopup/couponMultiple/index.js";define("cms_design/RAW/EXTS/ec/components/couponPopup/couponMultiple/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../../titan.bootstrap.js");var t=global.bc("platform","ec"),e=require("../../../titan-scoped-env.js"),i=e.requirePlatform("cms").main.CMS;e.Component({properties:{couponList:{type:Array,value:[]},currentGoodsId:{type:String,value:""},visible:{type:Boolean,value:!1,observer:function(t,e){this.setData({modalVisible:t})}}},data:{modalVisible:!1},methods:{close:function(){this.triggerEvent("tap")},useClick:function(t){var e,o,r,a=null!==(e=null===(o=t.currentTarget)||void 0===o||null===(r=o.dataset)||void 0===r?void 0:r.item)&&void 0!==e?e:{};this.data.currentGoodsId==a.goodsId?this.triggerEvent("tap",{event:a}):i.navigator(a.miniActionUrl)}}}),global.ec(t);
},{isPage:false,isComponent:true,currentFile:'cms_design/RAW/EXTS/ec/components/couponPopup/couponMultiple/index.js'});require("cms_design/RAW/EXTS/ec/components/couponPopup/couponMultiple/index.js");