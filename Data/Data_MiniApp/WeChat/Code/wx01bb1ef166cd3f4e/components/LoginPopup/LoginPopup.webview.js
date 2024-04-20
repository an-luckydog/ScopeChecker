$gwx_XC_44=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_44 || [];
function gz$gwx_XC_44_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_44_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_44_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_44_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'closeHandle'])
Z([3,'width: 305px; border-radius: 10px; z-index: 1005; overflow: visible;'])
Z([3,'loginpopup'])
Z([3,'login-dialog'])
Z([3,'avatar-x'])
Z([3,'avatar'])
Z([[7],[3,'DEFAULT_AVATAR']])
Z([3,'title'])
Z([3,'您还未登录'])
Z([3,'onClickProtocol'])
Z([3,'protocol'])
Z([3,'相关操作涉及到用户信息，同意'])
Z([3,'color: #4e7da7;'])
Z([3,'《抽奖助手用户服务协议》'])
Z([3,'后再登录（可点击阅读）'])
Z([3,'btns'])
Z([3,'handleLogin'])
Z([3,'is-view btn red'])
Z([3,'highlight'])
Z([3,'我已同意'])
Z(z[0])
Z([3,'btn'])
Z(z[18])
Z([3,'暂不登录'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_44_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_44_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_44=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_44=true;
var x=['./components/LoginPopup/LoginPopup.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_44_1()
var xCO=_mz(z,'PopupBox',['bindpopupboxhide',0,'customStyle',1,'id',1],[],e,s,gg)
var oDO=_n('view')
_rz(z,oDO,'class',3,e,s,gg)
var fEO=_n('view')
_rz(z,fEO,'class',4,e,s,gg)
var cFO=_mz(z,'image',['webp',-1,'class',5,'src',1],[],e,s,gg)
_(fEO,cFO)
_(oDO,fEO)
var hGO=_n('view')
_rz(z,hGO,'class',7,e,s,gg)
var oHO=_oz(z,8,e,s,gg)
_(hGO,oHO)
_(oDO,hGO)
var cIO=_mz(z,'view',['bindtap',9,'class',1],[],e,s,gg)
var oJO=_n('text')
var lKO=_oz(z,11,e,s,gg)
_(oJO,lKO)
_(cIO,oJO)
var aLO=_n('text')
_rz(z,aLO,'style',12,e,s,gg)
var tMO=_oz(z,13,e,s,gg)
_(aLO,tMO)
_(cIO,aLO)
var eNO=_n('text')
var bOO=_oz(z,14,e,s,gg)
_(eNO,bOO)
_(cIO,eNO)
_(oDO,cIO)
var oPO=_n('view')
_rz(z,oPO,'class',15,e,s,gg)
var xQO=_mz(z,'button',['bindtap',16,'class',1,'hoverClass',2],[],e,s,gg)
var oRO=_oz(z,19,e,s,gg)
_(xQO,oRO)
_(oPO,xQO)
var fSO=_mz(z,'view',['bind:tap',20,'class',1,'hoverClass',2],[],e,s,gg)
var cTO=_oz(z,23,e,s,gg)
_(fSO,cTO)
_(oPO,fSO)
_(oDO,oPO)
_(xCO,oDO)
_(r,xCO)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_44";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_44();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/LoginPopup/LoginPopup.wxml'] = [$gwx_XC_44, './components/LoginPopup/LoginPopup.wxml'];else __wxAppCode__['components/LoginPopup/LoginPopup.wxml'] = $gwx_XC_44( './components/LoginPopup/LoginPopup.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['components/LoginPopup/LoginPopup.wxss'] = setCssToHead([".",[1],"is-view{background:inherit;border:none;border-radius:0;color:inherit;font-size:inherit;line-height:inherit;margin:0;overflow:initial;padding:0;text-align:inherit}\n.",[1],"is-view:after,.",[1],"is-view:before{display:none}\n.",[1],"is-ellipsis{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.",[1],"auth-phone-dialog-tip{color:#fff;font-size:13px;left:0;position:absolute;right:0;text-align:center;-webkit-transform:translateY(16px);transform:translateY(16px)}\n.",[1],"login-dialog{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;padding-top:30px}\n.",[1],"login-dialog .",[1],"avatar-x{background-color:#fff;border-radius:50%;margin-top:-70px;padding:4px}\n.",[1],"login-dialog .",[1],"avatar-x .",[1],"avatar{height:74px;width:74px}\n.",[1],"login-dialog .",[1],"title{color:rgba(0,0,0,.9);font-size:20px;font-weight:700;margin-top:20px}\n.",[1],"login-dialog .",[1],"desc{color:rgba(0,0,0,.5);font-size:13px;margin-top:8px}\n.",[1],"login-dialog .",[1],"btns{margin:0 0 20px}\n.",[1],"login-dialog .",[1],"btns .",[1],"btn{-webkit-align-items:center;align-items:center;border:1px solid rgba(0,0,0,.3);border-radius:6px;color:rgba(0,0,0,.5);display:-webkit-flex;display:flex;font-size:15px;font-weight:700;height:40px;-webkit-justify-content:center;justify-content:center;margin-bottom:10px;width:205px}\n.",[1],"login-dialog .",[1],"btns .",[1],"btn.",[1],"highlight{background:#ddd}\n.",[1],"login-dialog .",[1],"btns .",[1],"btn:last-child{margin-bottom:0}\n.",[1],"login-dialog .",[1],"btns .",[1],"btn.",[1],"red{background-color:#e2453a;border-color:#e2453a;color:#fff}\n.",[1],"login-dialog .",[1],"btns .",[1],"btn.",[1],"red.",[1],"highlight{opacity:.8}\n.",[1],"login-dialog .",[1],"protocol{color:rgba(0,0,0,.66);font-size:13px;padding-bottom:30px;padding-top:20px;text-align:center}\n",],undefined,{path:"./components/LoginPopup/LoginPopup.wxss"});
}