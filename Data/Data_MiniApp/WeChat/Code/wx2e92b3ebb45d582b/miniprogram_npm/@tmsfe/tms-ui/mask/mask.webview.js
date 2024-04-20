$gwx_XC_36=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_36 || [];
function gz$gwx_XC_36_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_36_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_36_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_36_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'handleMaskTap'])
Z([3,'touchmove'])
Z([a,[3,'ui-mask container-class '],[[7],[3,'effect']],[3,' '],[[2,'?:'],[[7],[3,'show']],[1,'show'],[1,'']],[3,' '],[[2,'?:'],[[7],[3,'center']],[1,'flex-col-vhc'],[1,'']],[3,' '],[[2,'?:'],[[7],[3,'iOSBlur']],[1,'blur-ios'],[1,'']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_36_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_36_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_36=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_36=true;
var x=['./miniprogram_npm/@tmsfe/tms-ui/mask/mask.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_36_1()
var l1EB=_mz(z,'view',['bindtap',0,'catch:touchmove',1,'class',1],[],e,s,gg)
var a2EB=_n('slot')
_(l1EB,a2EB)
_(r,l1EB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_36";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_36();
	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@tmsfe/tms-ui/mask/mask.wxml'] = [$gwx_XC_36, './miniprogram_npm/@tmsfe/tms-ui/mask/mask.wxml'];else __wxAppCode__['miniprogram_npm/@tmsfe/tms-ui/mask/mask.wxml'] = $gwx_XC_36( './miniprogram_npm/@tmsfe/tms-ui/mask/mask.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['miniprogram_npm/@tmsfe/tms-ui/mask/mask.wxss'] = setCssToHead([[2,"./miniprogram_npm/@tmsfe/tms-ui/flex.wxss"],".",[1],"ui-mask{background:rgba(0,0,0,.7);bottom:0;left:0;opacity:0;position:fixed;right:0;top:0;transition:opacity .25s ease-in;visibility:hidden;width:100%;z-index:9998}\n.",[1],"ui-mask.",[1],"scale-out{-webkit-transform:scale(0);transform:scale(0);transition:all .25s ease-in}\n.",[1],"ui-mask.",[1],"scale-out.",[1],"show{-webkit-transform:scale(1);transform:scale(1)}\n.",[1],"ui-mask.",[1],"scale-in{-webkit-transform:scale(1.5);transform:scale(1.5);transition:all .25s ease-in}\n.",[1],"ui-mask.",[1],"scale-in.",[1],"show{-webkit-transform:scale(1);transform:scale(1)}\n.",[1],"ui-mask.",[1],"blur-ios{-webkit-backdrop-filter:blur(1px) saturate(100%);backdrop-filter:blur(1px) saturate(100%);background:rgba(0,0,0,.4)}\n.",[1],"ui-mask.",[1],"show{opacity:1;visibility:visible}\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./miniprogram_npm/@tmsfe/tms-ui/mask/mask.wxss:1:177)",{path:"./miniprogram_npm/@tmsfe/tms-ui/mask/mask.wxss"});
}