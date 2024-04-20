$gwx_XC_17=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_17 || [];
function gz$gwx_XC_17_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_17_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_17_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_17_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'image-tips'])
Z([3,'只支持：.jpg .jpeg .png'])
Z([3,'image-wrapper'])
Z([3,'setImg'])
Z([a,[3,'image-placeholder '],[[2,'?:'],[[7],[3,'previewImage']],[1,''],[1,'image-placeholder-noimg']]])
Z([[7],[3,'previewImage']])
Z([3,'image-placeholder-pic'])
Z([3,'aspectFit'])
Z(z[5])
Z([3,'loader-progress'])
Z([[2,'!'],[[7],[3,'uploading']]])
Z([3,'loading-text'])
Z([3,' 上传中... '])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_17_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_17_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_17=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_17=true;
var x=['./components/form-box/image/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_17_1()
var fOL=_n('text')
_rz(z,fOL,'class',0,e,s,gg)
var cPL=_oz(z,1,e,s,gg)
_(fOL,cPL)
_(r,fOL)
var hQL=_n('view')
_rz(z,hQL,'class',2,e,s,gg)
var oRL=_mz(z,'view',['bindtap',3,'class',1],[],e,s,gg)
var cSL=_v()
_(oRL,cSL)
if(_oz(z,5,e,s,gg)){cSL.wxVkey=1
var oTL=_mz(z,'image',['class',6,'mode',1,'src',2],[],e,s,gg)
_(cSL,oTL)
}
var lUL=_mz(z,'view',['class',9,'hidden',1],[],e,s,gg)
var aVL=_n('view')
_rz(z,aVL,'class',11,e,s,gg)
var tWL=_oz(z,12,e,s,gg)
_(aVL,tWL)
_(lUL,aVL)
_(oRL,lUL)
cSL.wxXCkey=1
_(hQL,oRL)
_(r,hQL)
var eXL=_n('Privacy')
_(r,eXL)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_17";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_17();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/form-box/image/index.wxml'] = [$gwx_XC_17, './components/form-box/image/index.wxml'];else __wxAppCode__['components/form-box/image/index.wxml'] = $gwx_XC_17( './components/form-box/image/index.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['components/form-box/image/index.wxss'] = setCssToHead([".",[1],"image-tips{color:#666;display:block;font-size:",[0,24],";margin-bottom:",[0,6],";padding:",[0,10]," ",[0,6],"}\n.",[1],"image-placeholder{background:#f5f5f5;box-sizing:border-box;height:",[0,260],";margin:0 auto;padding:",[0,10],";position:relative;width:100%}\n.",[1],"image-placeholder-noimg::before{background:#fff;content:\x22\x22;height:",[0,100],";left:50%;margin-left:",[0,-5],";margin-top:",[0,-50],";position:absolute;top:50%;width:",[0,10],"}\n.",[1],"image-placeholder-noimg::after{background:#fff;content:\x22\x22;height:",[0,10],";left:50%;margin-left:",[0,-50],";margin-top:",[0,-5],";position:absolute;top:50%;width:",[0,100],"}\n.",[1],"image-placeholder-pic{display:block;height:100%;width:100%}\n.",[1],"loader-progress{-webkit-align-items:center;align-items:center;background:rgba(0,0,0,.7);display:-webkit-flex;display:flex;height:100%;-webkit-justify-content:center;justify-content:center;left:0;position:absolute;top:0;width:100%;z-index:100}\n.",[1],"loader-progress-outer{background:#fff;border-radius:",[0,10],";height:",[0,8],";overflow:hidden;position:relative;width:",[0,200],"}\n.",[1],"loader-progress-inner{background:#005ebf;height:100%;max-width:100%;min-width:0;transition:width .2s;width:0}\n.",[1],"loading-text{color:#fff;font-size:",[0,24],"}\n",],undefined,{path:"./components/form-box/image/index.wxss"});
}