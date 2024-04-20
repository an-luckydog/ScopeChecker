$gwx_XC_0=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_0 || [];
function gz$gwx_XC_0_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_0_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_0_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_0_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'all'])
Z([3,'btnLongpress'])
Z([3,'btnClick'])
Z([a,[3,'button-box '],[[2,'?:'],[[2,'=='],[[7],[3,'showIcon']],[1,'true']],[1,'space-between'],[1,'center']]])
Z([[7],[3,'openType']])
Z([[7],[3,'buttonStyle']])
Z([[2,'=='],[[7],[3,'showIcon']],[1,'true']])
Z([3,'button-icon'])
Z([3,'aspectFit'])
Z([[7],[3,'iconSrc']])
Z([a,[[7],[3,'text']]])
Z(z[6])
Z([3,'button-blank'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_0_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_0_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_0=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_0=true;
var x=['./component/my-button/my-button.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_0_1()
var oB=_n('view')
_rz(z,oB,'class',0,e,s,gg)
var xC=_mz(z,'button',['bindlongtap',1,'bindtap',1,'class',2,'openType',3,'style',4],[],e,s,gg)
var oD=_v()
_(xC,oD)
if(_oz(z,6,e,s,gg)){oD.wxVkey=1
var cF=_mz(z,'image',['class',7,'mode',1,'src',2],[],e,s,gg)
_(oD,cF)
}
var hG=_n('text')
var oH=_oz(z,10,e,s,gg)
_(hG,oH)
_(xC,hG)
var fE=_v()
_(xC,fE)
if(_oz(z,11,e,s,gg)){fE.wxVkey=1
var cI=_n('view')
_rz(z,cI,'class',12,e,s,gg)
_(fE,cI)
}
oD.wxXCkey=1
fE.wxXCkey=1
_(oB,xC)
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_0";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_0();	if (__vd_version_info__.delayedGwx) __wxAppCode__['component/my-button/my-button.wxml'] = [$gwx_XC_0, './component/my-button/my-button.wxml'];else __wxAppCode__['component/my-button/my-button.wxml'] = $gwx_XC_0( './component/my-button/my-button.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['component/my-button/my-button.wxss'] = setCssToHead([".",[1],"button-box{background-color:#f44;border-radius:",[0,10],";height:",[0,100],";margin:0 auto}\n.",[1],"button-box,.",[1],"space-between{align-items:center;display:flex}\n.",[1],"space-between{justify-content:space-between}\n.",[1],"center{align-items:center;display:flex;justify-content:center}\n.",[1],"button-blank,.",[1],"button-icon,.",[1],"button-icon-blank{margin:",[0,20],";width:",[0,40],"}\n.",[1],"button-box\x3ewx-text{color:#fff;font-size:",[0,30],"}\n.",[1],"button-box:active{opacity:.5}\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./component/my-button/my-button.wxss:1:333)",{path:"./component/my-button/my-button.wxss"});
}