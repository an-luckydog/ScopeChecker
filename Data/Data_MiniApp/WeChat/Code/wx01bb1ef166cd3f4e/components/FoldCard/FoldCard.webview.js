$gwx_XC_20=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_20 || [];
function gz$gwx_XC_20_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_20_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_20_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_20_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'container '],[[2,'?:'],[[7],[3,'isCard']],[1,'card'],[1,'']],[3,' custom-card']])
Z([3,'handleArrowClick'])
Z([a,[3,'row '],[[2,'?:'],[[7],[3,'isFold']],[1,'down'],[1,'up']],[3,' '],[[2,'?:'],[[7],[3,'isCard']],[1,'padding'],[1,'']],[3,' custom-row']])
Z([3,'row-front'])
Z([[7],[3,'icon']])
Z([3,'icon'])
Z(z[4])
Z([3,'title'])
Z([a,[[7],[3,'title']]])
Z([3,'bottom'])
Z([a,[3,'arrow arrow-'],z[2][2]])
Z([[2,'!'],[[7],[3,'isFold']]])
Z([3,'content custom-content'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_20_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_20_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_20=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_20=true;
var x=['./components/FoldCard/FoldCard.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_20_1()
var oDF=_n('view')
_rz(z,oDF,'class',0,e,s,gg)
var oFF=_mz(z,'view',['bind:tap',1,'class',1],[],e,s,gg)
var fGF=_n('view')
_rz(z,fGF,'class',3,e,s,gg)
var cHF=_v()
_(fGF,cHF)
if(_oz(z,4,e,s,gg)){cHF.wxVkey=1
var hIF=_mz(z,'image',['class',5,'src',1],[],e,s,gg)
_(cHF,hIF)
}
var oJF=_n('text')
_rz(z,oJF,'class',7,e,s,gg)
var cKF=_oz(z,8,e,s,gg)
_(oJF,cKF)
_(fGF,oJF)
cHF.wxXCkey=1
_(oFF,fGF)
var oLF=_mz(z,'IcnArrow',['arrowTo',9,'class',1],[],e,s,gg)
_(oFF,oLF)
_(oDF,oFF)
var xEF=_v()
_(oDF,xEF)
if(_oz(z,11,e,s,gg)){xEF.wxVkey=1
var lMF=_n('view')
_rz(z,lMF,'class',12,e,s,gg)
var aNF=_n('slot')
_(lMF,aNF)
_(xEF,lMF)
}
xEF.wxXCkey=1
_(r,oDF)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_20";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_20();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/FoldCard/FoldCard.wxml'] = [$gwx_XC_20, './components/FoldCard/FoldCard.wxml'];else __wxAppCode__['components/FoldCard/FoldCard.wxml'] = $gwx_XC_20( './components/FoldCard/FoldCard.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['components/FoldCard/FoldCard.wxss'] = setCssToHead([".",[1],"container{background-color:#fff;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column}\n.",[1],"container.",[1],"card{border:.5px solid rgba(0,0,0,.1);border-radius:10px}\n.",[1],"container .",[1],"row{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;height:60px;-webkit-justify-content:space-between;justify-content:space-between}\n.",[1],"container .",[1],"row.",[1],"padding{padding:0 20px}\n.",[1],"container .",[1],"row.",[1],"highlight{opacity:.7}\n.",[1],"container .",[1],"row.",[1],"up{border-bottom:.5px solid rgba(0,0,0,.1)}\n.",[1],"container .",[1],"row.",[1],"down{border-bottom:none}\n.",[1],"container .",[1],"row .",[1],"row-front{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row}\n.",[1],"container .",[1],"row .",[1],"row-front .",[1],"icon{height:18px;width:18px}\n.",[1],"container .",[1],"row .",[1],"row-front .",[1],"title{color:rgba(0,0,0,.9);font-size:16px;font-weight:500}\n.",[1],"container .",[1],"content{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column}\n.",[1],"arrow{-webkit-flex:none;flex:none;margin-left:4px;transition:all .3s}\n.",[1],"arrow.",[1],"arrow-up{-webkit-transform:rotate(180deg);transform:rotate(180deg)}\n.",[1],"arrow.",[1],"arrow-down{-webkit-transform:rotate(0deg);transform:rotate(0deg)}\n",],undefined,{path:"./components/FoldCard/FoldCard.wxss"});
}