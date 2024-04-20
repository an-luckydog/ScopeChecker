$gwx_XC_52=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_52 || [];
function gz$gwx_XC_52_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_52_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_52_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_52_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'loading'])
Z([3,'tip'])
Z([a,[[6],[[7],[3,'tips']],[[7],[3,'index']]]])
Z([3,'progress'])
Z([[2,'&&'],[[7],[3,'loading']],[1,'--duration: 10s; --max-width: 95%']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_52_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_52_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_52=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_52=true;
var x=['./components/PageLoading/Progress/Progress.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_52_1()
var o4Q=_n('view')
_rz(z,o4Q,'class',0,e,s,gg)
var f5Q=_n('view')
_rz(z,f5Q,'class',1,e,s,gg)
var c6Q=_oz(z,2,e,s,gg)
_(f5Q,c6Q)
_(o4Q,f5Q)
var h7Q=_mz(z,'view',['class',3,'style',1],[],e,s,gg)
_(o4Q,h7Q)
_(r,o4Q)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_52";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_52();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/PageLoading/Progress/Progress.wxml'] = [$gwx_XC_52, './components/PageLoading/Progress/Progress.wxml'];else __wxAppCode__['components/PageLoading/Progress/Progress.wxml'] = $gwx_XC_52( './components/PageLoading/Progress/Progress.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['components/PageLoading/Progress/Progress.wxss'] = setCssToHead([".",[1],"loading{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column}\n.",[1],"tips{width:300px}\n.",[1],"tip,.",[1],"tips{height:40px}\n.",[1],"tip{color:rgba(0,0,0,.5);font-size:15px;line-height:40px;text-align:center}\n.",[1],"progress{background-color:#e9e9e9;border-radius:10px;height:6px;overflow:hidden;position:relative;width:205px}\n.",[1],"progress::before{-webkit-animation:Loading var(--duration,0s) linear both;animation:Loading var(--duration,0s) linear both;background-color:#e2453a;border-radius:10px;content:\x22\x22;height:100%;left:0;max-width:var(--max-width);position:absolute;top:0;width:100%}\n@-webkit-keyframes Loading{from{width:0}\nto{width:100%}\n}@keyframes Loading{from{width:0}\nto{width:100%}\n}",],undefined,{path:"./components/PageLoading/Progress/Progress.wxss"});
}