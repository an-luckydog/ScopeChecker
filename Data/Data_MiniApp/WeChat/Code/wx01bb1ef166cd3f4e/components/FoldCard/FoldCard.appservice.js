$gwx_XC_20=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_20 || [];
function gz$gwx_XC_20_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_20_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_20_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_20_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'container '],[[2,'?:'],[[7],[3,'isCard']],[1,'card'],[1,'']],[3,' custom-card']])
Z([3,'handleArrowClick'])
Z([a,[3,'row '],[[2,'?:'],[[7],[3,'isFold']],[1,'down'],[1,'up']],[3,' '],[[2,'?:'],[[7],[3,'isCard']],[1,'padding'],[1,'']],[3,' custom-row']])
Z([[7],[3,'icon']])
Z([3,'bottom'])
Z([a,[3,'arrow arrow-'],z[2][2]])
Z([[2,'!'],[[7],[3,'isFold']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_20_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_20_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_20=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_20=true;
var x=['./components/FoldCard/FoldCard.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_20_1()
var xAC=_n('view')
_rz(z,xAC,'class',0,e,s,gg)
var fCC=_mz(z,'view',['bind:tap',1,'class',1],[],e,s,gg)
var cDC=_v()
_(fCC,cDC)
if(_oz(z,3,e,s,gg)){cDC.wxVkey=1
}
var hEC=_mz(z,'IcnArrow',['arrowTo',4,'class',1],[],e,s,gg)
_(fCC,hEC)
cDC.wxXCkey=1
_(xAC,fCC)
var oBC=_v()
_(xAC,oBC)
if(_oz(z,6,e,s,gg)){oBC.wxVkey=1
var oFC=_n('slot')
_(oBC,oFC)
}
oBC.wxXCkey=1
_(r,xAC)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_20";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_20();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/FoldCard/FoldCard.wxml'] = [$gwx_XC_20, './components/FoldCard/FoldCard.wxml'];else __wxAppCode__['components/FoldCard/FoldCard.wxml'] = $gwx_XC_20( './components/FoldCard/FoldCard.wxml' );
	;__wxRoute = "components/FoldCard/FoldCard";__wxRouteBegin = true;__wxAppCurrentFile__="components/FoldCard/FoldCard.js";define("components/FoldCard/FoldCard.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Component({properties:{title:{type:String,value:""},icon:{type:String,value:""},isCard:{type:Boolean,value:!0},defaultCollapsed:{type:Boolean,value:!0}},externalClasses:["custom-card","custom-row","custom-content"],data:{isFold:!0},lifetimes:{attached:function(){var t=this.data.defaultCollapsed;!1===t&&this.setData({isFold:t})}},methods:{handleArrowClick:function(){this.triggerEvent("arrowclick"),this.setData({isFold:!this.data.isFold})}}});
},{isPage:false,isComponent:true,currentFile:'components/FoldCard/FoldCard.js'});require("components/FoldCard/FoldCard.js");