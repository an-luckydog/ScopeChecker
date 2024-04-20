$gwx_XC_8=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_8 || [];
function gz$gwx_XC_8_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_8_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_8_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_8_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'item box-class '],[[2,'?:'],[[7],[3,'noBorderRadius']],[1,''],[1,'br-10']],[3,' '],[[2,'?:'],[[7],[3,'tag']],[1,'new'],[1,'']]])
Z([[2,'?:'],[[7],[3,'value']],[1,'hover'],[1,'']])
Z([a,[3,'--tag-content: \x22'],[[7],[3,'tag']],[3,'\x22;']])
Z([3,'row'])
Z([3,'label label-class'])
Z([3,'label'])
Z([[7],[3,'desc']])
Z([[7],[3,'showRight']])
Z([3,'value value-class'])
Z([[7],[3,'value']])
Z([3,'content'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_8_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_8_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_8=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_8=true;
var x=['./components/CellButton/CellButton.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_8_1()
var hU=_mz(z,'view',['class',0,'hoverClass',1,'style',1],[],e,s,gg)
var oV=_n('view')
_rz(z,oV,'class',3,e,s,gg)
var oX=_n('view')
_rz(z,oX,'class',4,e,s,gg)
var aZ=_n('slot')
_rz(z,aZ,'name',5,e,s,gg)
_(oX,aZ)
var lY=_v()
_(oX,lY)
if(_oz(z,6,e,s,gg)){lY.wxVkey=1
}
lY.wxXCkey=1
_(oV,oX)
var cW=_v()
_(oV,cW)
if(_oz(z,7,e,s,gg)){cW.wxVkey=1
var t1=_n('view')
_rz(z,t1,'class',8,e,s,gg)
var e2=_v()
_(t1,e2)
if(_oz(z,9,e,s,gg)){e2.wxVkey=1
}
else{e2.wxVkey=2
var b3=_n('slot')
_(e2,b3)
}
e2.wxXCkey=1
_(cW,t1)
}
cW.wxXCkey=1
_(hU,oV)
var o4=_n('slot')
_rz(z,o4,'name',10,e,s,gg)
_(hU,o4)
_(r,hU)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_8";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_8();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/CellButton/CellButton.wxml'] = [$gwx_XC_8, './components/CellButton/CellButton.wxml'];else __wxAppCode__['components/CellButton/CellButton.wxml'] = $gwx_XC_8( './components/CellButton/CellButton.wxml' );
	;__wxRoute = "components/CellButton/CellButton";__wxRouteBegin = true;__wxAppCurrentFile__="components/CellButton/CellButton.js";define("components/CellButton/CellButton.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Component({options:{multipleSlots:!0},externalClasses:["value-class","box-class","label-class"],properties:{label:String,desc:String,value:String,tag:String,noBorderRadius:Boolean,showRight:{type:Boolean,value:!0}}});
},{isPage:false,isComponent:true,currentFile:'components/CellButton/CellButton.js'});require("components/CellButton/CellButton.js");