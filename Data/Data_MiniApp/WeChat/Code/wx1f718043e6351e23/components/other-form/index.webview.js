$gwx_XC_53=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_53 || [];
function gz$gwx_XC_53_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_53_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_53_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_53_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'popup-wrapper'])
Z([3,'popup'])
Z([3,'closeDialog'])
Z([3,'close'])
Z([3,'x'])
Z([3,'popup-word'])
Z([3,'doRequest'])
Z([3,'onSubmit'])
Z([3,'getOption'])
Z([3,'initOption'])
Z([3,'sendCode'])
Z([[7],[3,'formFooter']])
Z([[7],[3,'otherFormList']])
Z([3,'dialog'])
Z([1,false])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_53_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_53_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_53=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_53=true;
var x=['./components/other-form/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_53_1()
var cJCB=_n('view')
_rz(z,cJCB,'class',0,e,s,gg)
var hKCB=_n('view')
_rz(z,hKCB,'class',1,e,s,gg)
var oLCB=_mz(z,'view',['bind:tap',2,'class',1],[],e,s,gg)
var cMCB=_oz(z,4,e,s,gg)
_(oLCB,cMCB)
_(hKCB,oLCB)
var oNCB=_mz(z,'scroll-view',['scrollY',-1,'class',5],[],e,s,gg)
var lOCB=_mz(z,'form-box',['bind:doRequest',6,'bind:formSubmit',1,'bind:getOption',2,'bind:initOption',3,'bind:sendCode',4,'footer',5,'formConf',6,'mode',7,'privacy',8],[],e,s,gg)
_(oNCB,lOCB)
_(hKCB,oNCB)
_(cJCB,hKCB)
_(r,cJCB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_53";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_53();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/other-form/index.wxml'] = [$gwx_XC_53, './components/other-form/index.wxml'];else __wxAppCode__['components/other-form/index.wxml'] = $gwx_XC_53( './components/other-form/index.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['components/other-form/index.wxss'] = setCssToHead([".",[1],"popup-wrapper{-webkit-align-items:center;align-items:center;background:rgba(0,0,0,.7);display:-webkit-flex;display:flex;height:100%;-webkit-justify-content:center;justify-content:center;left:0;position:fixed;top:0;width:100%;z-index:1000}\n.",[1],"popup{background:#fff;border-radius:",[0,2],";position:relative;width:",[0,640],";z-index:6}\n.",[1],"btn-close{display:block;font-size:0;height:",[0,50],";position:absolute;right:",[0,20],";top:",[0,20],";width:",[0,50],";z-index:10}\n.",[1],"popup-word{box-sizing:border-box;color:#333;font-size:13px;line-height:1.6;padding:",[0,60]," ",[0,30]," ",[0,80],";text-align:left}\n.",[1],"btn-go{background:#1061f8;border-radius:",[0,2],";bottom:",[0,40],";color:#fff;display:block;font-size:",[0,26],";font-weight:700;height:",[0,80],";left:50%;line-height:",[0,80],";margin-left:",[0,-235],";text-align:center;width:",[0,470],"}\n.",[1],"btn-go,.",[1],"close{position:absolute}\n.",[1],"close{background:transparent;border:0;font-size:",[0,30],";outline:0;padding:",[0,20],";right:",[0,10],";top:",[0,0],";z-index:999}\n",],undefined,{path:"./components/other-form/index.wxss"});
}