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
Z([3,'cy-authorize-wrap'])
Z([3,'authorize-content'])
Z([3,'为了确保您各项服务正常使用，'])
Z([3,' 请先授权登录'])
Z([3,'authorize-footer'])
Z([3,'loginSuccess'])
Z([3,'loginFail'])
Z([3,'authorize-btn'])
Z([3,'立即授权'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_8_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_8_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_8=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_8=true;
var x=['./components/cy-authorize-login/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_8_1()
var bKE=_n('view')
_rz(z,bKE,'class',0,e,s,gg)
var oLE=_n('view')
_rz(z,oLE,'class',1,e,s,gg)
var xME=_n('view')
var oNE=_oz(z,2,e,s,gg)
_(xME,oNE)
_(oLE,xME)
var fOE=_oz(z,3,e,s,gg)
_(oLE,fOE)
_(bKE,oLE)
var cPE=_n('view')
_rz(z,cPE,'class',4,e,s,gg)
var hQE=_mz(z,'cy-userinfo',['bindloginevent',5,'bindloginfail',1],[],e,s,gg)
var oRE=_n('view')
_rz(z,oRE,'class',7,e,s,gg)
var cSE=_oz(z,8,e,s,gg)
_(oRE,cSE)
_(hQE,oRE)
_(cPE,hQE)
_(bKE,cPE)
_(r,bKE)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_8";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_8();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/cy-authorize-login/index.wxml'] = [$gwx_XC_8, './components/cy-authorize-login/index.wxml'];else __wxAppCode__['components/cy-authorize-login/index.wxml'] = $gwx_XC_8( './components/cy-authorize-login/index.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['components/cy-authorize-login/index.wxss'] = setCssToHead([".",[1],"cy-authorize-wrap{background-color:#fff;box-sizing:border-box;font-family:PingFangSC-Regular,sans-serif;height:100vh;left:0;padding:0 ",[0,60],";position:fixed;top:0;width:100vw;z-index:19}\n.",[1],"cy-authorize-wrap .",[1],"authorize-header{border-bottom:",[0,2]," solid #eee;text-align:center}\n.",[1],"cy-authorize-wrap .",[1],"authorize-header__logo{height:",[0,140],";margin:",[0,86]," 0 ",[0,88],";width:",[0,390],"}\n.",[1],"cy-authorize-wrap .",[1],"authorize-content{color:#323232;font-size:",[0,32],";margin-top:",[0,302],";text-align:center}\n.",[1],"cy-authorize-wrap .",[1],"authorize-btn{background:#39d167;border-radius:4px;color:#fff;font-family:PingFangSC-Regular;font-size:",[0,32],";height:",[0,88],";line-height:",[0,88],";margin:",[0,70]," auto 0;text-align:center;width:",[0,480],"}\n",],undefined,{path:"./components/cy-authorize-login/index.wxss"});
}