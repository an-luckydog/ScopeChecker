$gwx_XC_219=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_219 || [];
function gz$gwx_XC_219_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_219_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_219_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_219_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'video-test'])
Z([3,'qa-video-container'])
Z([3,''])
Z([3,'videoNone'])
Z([a,[3,'qa-video '],[[2,'?:'],[[7],[3,'isIos']],[1,'ios'],[1,'android']]])
Z([3,'qaVideo'])
Z([1,false])
Z([[7],[3,'video_src']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_219_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_219_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_219=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_219=true;
var x=['./pages/video_play/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_219_1()
var a6BH=_n('view')
_rz(z,a6BH,'class',0,e,s,gg)
var t7BH=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
var e8BH=_mz(z,'video',['controls',-1,'bindended',3,'class',1,'id',2,'showFullscreenBtn',3,'src',4],[],e,s,gg)
_(t7BH,e8BH)
_(a6BH,t7BH)
_(r,a6BH)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_219";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_219();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/video_play/index.wxml'] = [$gwx_XC_219, './pages/video_play/index.wxml'];else __wxAppCode__['pages/video_play/index.wxml'] = $gwx_XC_219( './pages/video_play/index.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['pages/video_play/index.wxss'] = setCssToHead(["body{height:100%}\n.",[1],"qa-video-container{background:#000;bottom:0;height:100%;left:0;position:fixed;top:0;width:100%;z-index:111}\n.",[1],"qa-video.",[1],"android{height:100%;width:100%;z-index:115}\n.",[1],"qa-video.",[1],"ios{bottom:constant(safe-area-inset-bottom);bottom:env(safe-area-inset-bottom);height:unset;left:0;position:fixed;right:0;top:0;width:unset;z-index:115}\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/video_play/index.wxss:1:1)",{path:"./pages/video_play/index.wxss"});
}