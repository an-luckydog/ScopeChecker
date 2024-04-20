$gwx_XC_141=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_141 || [];
function gz$gwx_XC_141_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_141_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_141_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_141_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bind-phone-main-container'])
Z([3,'tip-text'])
Z([3,' 为方便收取医生回复提醒，请绑定手机号后提交问题 '])
Z([3,'handleGetPhoneNumber'])
Z([3,'reset-button-class bind-button-text'])
Z([3,'暂时没有'])
Z([3,'getPhoneNumber'])
Z([3,' 立即绑定 '])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_141_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_141_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_141=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_141=true;
var x=['./pages/inquery/components/bind_phone_number/bind_phone_number.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_141_1()
var h3JE=_n('view')
_rz(z,h3JE,'class',0,e,s,gg)
var o4JE=_n('view')
_rz(z,o4JE,'class',1,e,s,gg)
var c5JE=_oz(z,2,e,s,gg)
_(o4JE,c5JE)
_(h3JE,o4JE)
var o6JE=_mz(z,'button',['bindgetphonenumber',3,'class',1,'data-track-info',2,'openType',3],[],e,s,gg)
var l7JE=_oz(z,7,e,s,gg)
_(o6JE,l7JE)
_(h3JE,o6JE)
_(r,h3JE)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_141";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_141();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/inquery/components/bind_phone_number/bind_phone_number.wxml'] = [$gwx_XC_141, './pages/inquery/components/bind_phone_number/bind_phone_number.wxml'];else __wxAppCode__['pages/inquery/components/bind_phone_number/bind_phone_number.wxml'] = $gwx_XC_141( './pages/inquery/components/bind_phone_number/bind_phone_number.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['pages/inquery/components/bind_phone_number/bind_phone_number.wxss'] = setCssToHead([".",[1],"bind-phone-main-container{padding-bottom:calc(5px + env(safe-area-inset-bottom));width:100%}\n.",[1],"tip-text{color:#fd632d;font-size:12px;line-height:1;margin-bottom:",[0,20],";margin-top:",[0,10],";text-align:center}\n.",[1],"reset-button-class{background-color:initial;border-radius:0;font-size:",[0,16],";line-height:1;padding-left:0;padding-right:0}\n.",[1],"bind-button-text{background-color:#39d167;border-radius:",[0,44],";border-radius:22px;color:#fff;font-size:",[0,32],";line-height:1;padding:",[0,26]," 0;text-align:center}\n",],undefined,{path:"./pages/inquery/components/bind_phone_number/bind_phone_number.wxss"});
}