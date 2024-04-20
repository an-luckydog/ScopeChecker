$gwx_XC_44=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_44 || [];
function gz$gwx_XC_44_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_44_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_44_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_44_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onClick'])
Z([[7],[3,'exData']])
Z([3,'picture'])
Z([3,'wieidx_1'])
Z([[7],[3,'moduleData']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_44_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_44_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_44=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_44=true;
var x=['./cms_design/RAW/miniprogram_npm/@design-platform/wx-picture/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_44_1()
var cLW=_mz(z,'picture-base',['bind:click',0,'exData',1,'from',1,'id',2,'moduleData',3],[],e,s,gg)
_(r,cLW)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_44";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_44();	if (__vd_version_info__.delayedGwx) __wxAppCode__['cms_design/RAW/miniprogram_npm/@design-platform/wx-picture/index.wxml'] = [$gwx_XC_44, './cms_design/RAW/miniprogram_npm/@design-platform/wx-picture/index.wxml'];else __wxAppCode__['cms_design/RAW/miniprogram_npm/@design-platform/wx-picture/index.wxml'] = $gwx_XC_44( './cms_design/RAW/miniprogram_npm/@design-platform/wx-picture/index.wxml' );
	;__wxRoute = "cms_design/RAW/miniprogram_npm/@design-platform/wx-picture/index";__wxRouteBegin = true;__wxAppCurrentFile__="cms_design/RAW/miniprogram_npm/@design-platform/wx-picture/index.js";define("cms_design/RAW/miniprogram_npm/@design-platform/wx-picture/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../../../@babel/runtime/helpers/regeneratorRuntime");require("../../../titan.bootstrap.js");var a,t=global.bc("package","cms_design"),r=require("../../../titan-scoped-env.js"),n=require("../../../../../@titan/env.js"),i=require("../wx-utils/jumpUrl.js"),o=(a=require("../wx-utils/behaviors.js"))&&a.__esModule?a:{default:a};r.Component({behaviors:[o.default],options:{addGlobalClass:!0},properties:{moduleData:Object,exData:Object},methods:{onClick:function(a){var t=this;return(0,n.babel_coroutine)(e().mark((function n(){var o,u,c,s,p,d,l,m,b,v,g,x,j,f,h,k,w,_,q,I,y,D,T,U,C,O,L;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=a.detail||{},u=o.eventType,c=o.index,s=o.type,p=o.urlobj,d=o.src,l=o.srclist,m=o.hotZoneUrlObj,o.hotZoneIndex,b=o.name,v="imageTap"===u?p:m,g={},e.prev=3,e.next=6,(0,i.getUrlInfoFromLink)(v);case 6:g=e.sent,e.next=11;break;case 9:e.prev=9,e.t0=e.catch(3);case 11:if(x=g.url,j=void 0===x?"":x,f=t.data,h=f.moduleData,k=h.id,w=h.moduleId,_=h.moduleName,q=h.style.previewPic,I=void 0===q?1:q,y=f.exData,D=y.pagename,T=void 0===D?"":D,U=y.pageId,C=void 0===U?"":U,O=y.currentPageId,L=void 0===O?"":O,r.wx.rprm.rec({en:"mat_tap",elementid:"imageTap"===u?"picture":"hotspot",eventtype:"tap",code:"imageTap"===u?0:1,position:c,title:b,pagename:T,pageid:C,nextpage:j,mid:k,module_id:w,module_name:_,inpageid:L}),j&&(1!=s||"imageTap"!==u)){e.next=19;break}if(I){e.next=16;break}return e.abrupt("return");case 16:r.wx.previewImage({current:"".concat(d,"?index=").concat(c),urls:l.map((function(e,a){return"".concat(e,"?index=").concat(a)}))}),e.next=20;break;case 19:(0,i.jumpUrlByLink)(v,t.data.exData,t);case 20:case"end":return e.stop()}}),n,null,[[3,9]])})))()}}}),global.ec(t);
},{isPage:false,isComponent:true,currentFile:'cms_design/RAW/miniprogram_npm/@design-platform/wx-picture/index.js'});require("cms_design/RAW/miniprogram_npm/@design-platform/wx-picture/index.js");