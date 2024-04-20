$gwx_XC_70=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_70 || [];
function gz$gwx_XC_70_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_70_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_70_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_70_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'unitId']])
Z([3,'wx-ad-component'])
Z([[7],[3,'isCustomAd']])
Z([3,'loadAdFall'])
Z([3,'loadAdSuccess'])
Z([3,'ad ext-class'])
Z(z[0])
Z([[7],[3,'adTheme']])
Z([[7],[3,'adType']])
Z([3,'loadAdClose'])
Z(z[3])
Z(z[4])
Z(z[5])
Z(z[0])
Z([[7],[3,'gridCount']])
Z([[7],[3,'gridOpacity']])
Z(z[0])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_70_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_70_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_70=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_70=true;
var x=['./components/WxAd/WxAd.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_70_1()
var lIX=_v()
_(r,lIX)
if(_oz(z,0,e,s,gg)){lIX.wxVkey=1
var aJX=_n('view')
_rz(z,aJX,'id',1,e,s,gg)
var tKX=_v()
_(aJX,tKX)
if(_oz(z,2,e,s,gg)){tKX.wxVkey=1
var eLX=_mz(z,'ad-custom',['binderror',3,'bindload',1,'class',2,'unitId',3],[],e,s,gg)
_(tKX,eLX)
}
else{tKX.wxVkey=2
var bMX=_mz(z,'ad',['adTheme',7,'adType',1,'bindclose',2,'binderror',3,'bindload',4,'class',5,'data-adid',6,'gridCount',7,'gridOpacity',8,'unitId',9],[],e,s,gg)
_(tKX,bMX)
}
tKX.wxXCkey=1
_(lIX,aJX)
}
lIX.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_70";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_70();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/WxAd/WxAd.wxml'] = [$gwx_XC_70, './components/WxAd/WxAd.wxml'];else __wxAppCode__['components/WxAd/WxAd.wxml'] = $gwx_XC_70( './components/WxAd/WxAd.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['components/WxAd/WxAd.wxss'] = setCssToHead([".",[1],"ad{position:relative;z-index:0}\n",],undefined,{path:"./components/WxAd/WxAd.wxss"});
}