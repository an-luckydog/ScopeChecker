$gwx_XC_49=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_49 || [];
function gz$gwx_XC_49_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_49_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_49_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_49_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'loading'])
Z([[7],[3,'error']])
Z([3,' 系统繁忙，请稍后再试 '])
Z([3,'spinner'])
Z([3,'double-bounce1'])
Z([3,'double-bounce2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_49_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_49_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_49=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_49=true;
var x=['./components/loading/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_49_1()
var o40=_n('view')
_rz(z,o40,'class',0,e,s,gg)
var x50=_v()
_(o40,x50)
if(_oz(z,1,e,s,gg)){x50.wxVkey=1
var o60=_oz(z,2,e,s,gg)
_(x50,o60)
}
else{x50.wxVkey=2
var f70=_n('view')
_rz(z,f70,'class',3,e,s,gg)
var c80=_n('view')
_rz(z,c80,'class',4,e,s,gg)
_(f70,c80)
var h90=_n('view')
_rz(z,h90,'class',5,e,s,gg)
_(f70,h90)
_(x50,f70)
}
x50.wxXCkey=1
_(r,o40)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_49";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(outerGlobal.__webview_engine_version__)!='undefined'&&outerGlobal.__webview_engine_version__+1e-6>=0.02+1e-6&&outerGlobal.__mergeData__)
{
env=outerGlobal.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(outerGlobal.__webview_engine_version__)=='undefined'|| outerGlobal.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_49();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/loading/index.wxml'] = [$gwx_XC_49, './components/loading/index.wxml'];else __wxAppCode__['components/loading/index.wxml'] = $gwx_XC_49( './components/loading/index.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['components/loading/index.wxss'] = setCssToHead([".",[1],"loading{-webkit-align-items:center;align-items:center;color:#999;display:-webkit-flex;display:flex;font-size:",[0,32],";-webkit-justify-content:center;justify-content:center;left:0;margin-top:",[0,-50],";position:fixed;text-align:center;top:50%;width:100%}\n.",[1],"spinner{height:40px;position:relative;width:40px}\n.",[1],"double-bounce1,.",[1],"double-bounce2{-webkit-animation:sk-bounce 2s ease-in-out infinite;animation:sk-bounce 2s ease-in-out infinite;background-color:rgba(215,224,242,.86);border-radius:50%;height:100%;left:0;opacity:.6;position:absolute;top:0;width:100%}\n.",[1],"double-bounce2{-webkit-animation-delay:-1s;animation-delay:-1s}\n@-webkit-keyframes sk-bounce{0%,100%{-webkit-transform:scale(0)}\n50%{-webkit-transform:scale(1)}\n}@keyframes sk-bounce{0%,100%{transform:scale(0);-webkit-transform:scale(0)}\n50%{transform:scale(1);-webkit-transform:scale(1)}\n}",],undefined,{path:"./components/loading/index.wxss"});
}