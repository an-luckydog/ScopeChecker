$gwx_XC_11=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_11 || [];
function gz$gwx_XC_11_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_11_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_11_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_11_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'handlerCheckEvent'])
Z([a,[3,'checkbox-item '],[[2,'?:'],[[7],[3,'isChecked']],[1,'active'],[1,'']],[3,' '],[[2,'?:'],[[7],[3,'disabled']],[1,'disabled'],[1,'']]])
Z([[8],'isChecked',[[7],[3,'isChecked']]])
Z([[7],[3,'type']])
Z([3,'radio'])
Z([3,'checkbox'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_11_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_11_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_11=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_11=true;
var x=['./components/form-box/checkbox/index.wxml'];d_[x[0]]={}
d_[x[0]]["radio"]=function(e,s,r,gg){
var z=gz$gwx_XC_11_1()
var b=x[0]+':radio'
r.wxVkey=b
gg.f=$gdc(f_["./components/form-box/checkbox/index.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[0]]["checkbox"]=function(e,s,r,gg){
var z=gz$gwx_XC_11_1()
var b=x[0]+':checkbox'
r.wxVkey=b
gg.f=$gdc(f_["./components/form-box/checkbox/index.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_11_1()
var lIC=_mz(z,'view',['bindtap',0,'class',1],[],e,s,gg)
var aJC=_v()
_(lIC,aJC)
var tKC=_oz(z,3,e,s,gg)
var eLC=_gd(x[0],tKC,e_,d_)
if(eLC){
var bMC=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
aJC.wxXCkey=3
eLC(bMC,bMC,aJC,gg)
gg.f=cur_globalf
}
else _w(tKC,x[0],2,130)
_(r,lIC)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_11";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_11();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/form-box/checkbox/index.wxml'] = [$gwx_XC_11, './components/form-box/checkbox/index.wxml'];else __wxAppCode__['components/form-box/checkbox/index.wxml'] = $gwx_XC_11( './components/form-box/checkbox/index.wxml' );
	;__wxRoute = "components/form-box/checkbox/index";__wxRouteBegin = true;__wxAppCurrentFile__="components/form-box/checkbox/index.js";define("components/form-box/checkbox/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Component({properties:{isChecked:{type:Boolean,value:!1},label:{type:String,value:"Labelname"},value:{type:String,value:"",optionalTypes:[Number]},type:{type:String,value:"checkbox"},disabled:{type:Boolean,value:!1}},data:{},methods:{handlerCheckEvent:function(){var e=this.data,t=e.label,a=e.value,l=(e.type,e.disabled),i=e.isChecked;if(!l){var n=!i;this.setData({isChecked:n}),this.triggerEvent("checkevent",{label:t,value:a,checked:n})}}}});
},{isPage:false,isComponent:true,currentFile:'components/form-box/checkbox/index.js'});require("components/form-box/checkbox/index.js");