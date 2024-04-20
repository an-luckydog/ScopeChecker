$gwx_XC_24=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_24 || [];
function gz$gwx_XC_24_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_24_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_24_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_24_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'banner-swiper-wrapper '],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'list']],[3,'length']],[1,1]],[1,'banner-swiper-one'],[1,'']]])
Z([[2,'>'],[[6],[[7],[3,'list']],[3,'length']],[1,1]])
Z([[7],[3,'autoplay']])
Z([3,'swiperChange'])
Z([1,true])
Z([3,'banner-swiper'])
Z([[7],[3,'list']])
Z([3,'index'])
Z([3,'swiper-item'])
Z([3,'banner-swiper-item'])
Z([3,'none'])
Z([[8],'item',[[7],[3,'item']]])
Z([3,'bannerItem'])
Z([3,'swiper-indicator'])
Z(z[6])
Z(z[7])
Z([a,[3,'swiper-indicator-dot '],[[2,'?:'],[[2,'=='],[[7],[3,'index']],[[7],[3,'bannerActive']]],[1,'swiper-indicator-dot-active'],[1,'']]])
Z([3,'banner-list'])
Z([[8],'item',[[6],[[7],[3,'list']],[1,0]]])
Z(z[12])
Z(z[12])
Z([3,'tarGoDetail'])
Z([3,'banner-item'])
Z([[7],[3,'item']])
Z([3,'banner-item-img'])
Z([3,'aspectFill'])
Z([[6],[[7],[3,'item']],[3,'banner']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_24_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_24_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_24=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_24=true;
var x=['./components/home-brand-dynamics/index.wxml'];d_[x[0]]={}
d_[x[0]]["bannerItem"]=function(e,s,r,gg){
var z=gz$gwx_XC_24_1()
var b=x[0]+':bannerItem'
r.wxVkey=b
gg.f=$gdc(f_["./components/home-brand-dynamics/index.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
var oB=_mz(z,'view',['bindtap',21,'class',1,'data-item',2],[],e,s,gg)
var xC=_mz(z,'image',['class',24,'mode',1,'src',2],[],e,s,gg)
_(oB,xC)
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_24_1()
var aTN=_n('view')
_rz(z,aTN,'class',0,e,s,gg)
var tUN=_v()
_(aTN,tUN)
if(_oz(z,1,e,s,gg)){tUN.wxVkey=1
var eVN=_mz(z,'swiper',['autoplay',2,'bindchange',1,'circular',2,'class',3],[],e,s,gg)
var bWN=_v()
_(eVN,bWN)
var oXN=function(oZN,xYN,f1N,gg){
var h3N=_n('swiper-item')
var o4N=_n('view')
_rz(z,o4N,'class',8,oZN,xYN,gg)
var c5N=_mz(z,'view',['class',9,'hoverClass',1],[],oZN,xYN,gg)
var o6N=_v()
_(c5N,o6N)
var l7N=_oz(z,12,oZN,xYN,gg)
var a8N=_gd(x[0],l7N,e_,d_)
if(a8N){
var t9N=_1z(z,11,oZN,xYN,gg) || {}
var cur_globalf=gg.f
o6N.wxXCkey=3
a8N(t9N,t9N,o6N,gg)
gg.f=cur_globalf
}
else _w(l7N,x[0],2,363)
_(o4N,c5N)
_(h3N,o4N)
_(f1N,h3N)
return f1N
}
bWN.wxXCkey=2
_2z(z,6,oXN,e,s,gg,bWN,'item','index','index')
_(tUN,eVN)
var e0N=_n('view')
_rz(z,e0N,'class',13,e,s,gg)
var bAO=_v()
_(e0N,bAO)
var oBO=function(oDO,xCO,fEO,gg){
var hGO=_n('view')
_rz(z,hGO,'class',16,oDO,xCO,gg)
_(fEO,hGO)
return fEO
}
bAO.wxXCkey=2
_2z(z,14,oBO,e,s,gg,bAO,'item','index','index')
_(tUN,e0N)
}
else{tUN.wxVkey=2
var oHO=_n('view')
_rz(z,oHO,'class',17,e,s,gg)
var cIO=_v()
_(oHO,cIO)
var oJO=_oz(z,19,e,s,gg)
var lKO=_gd(x[0],oJO,e_,d_)
if(lKO){
var aLO=_1z(z,18,e,s,gg) || {}
var cur_globalf=gg.f
cIO.wxXCkey=3
lKO(aLO,aLO,cIO,gg)
gg.f=cur_globalf
}
else _w(oJO,x[0],2,674)
_(tUN,oHO)
}
tUN.wxXCkey=1
_(r,aTN)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_24";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_24();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/home-brand-dynamics/index.wxml'] = [$gwx_XC_24, './components/home-brand-dynamics/index.wxml'];else __wxAppCode__['components/home-brand-dynamics/index.wxml'] = $gwx_XC_24( './components/home-brand-dynamics/index.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['components/home-brand-dynamics/index.wxss'] = setCssToHead([".",[1],"banner-swiper-wrapper{height:",[0,421],";padding-top:",[0,9],";position:relative}\n.",[1],"banner-swiper-one{height:",[0,395],";padding-top:0}\n.",[1],"banner-swiper{height:100%}\n.",[1],"swiper-item{height:100%;position:relative;width:",[0,750],"}\n.",[1],"banner-item{border-radius:",[0,30],";display:block;height:",[0,375],";margin:0 ",[0,30],";overflow:hidden;position:relative;width:",[0,690],"}\n.",[1],"banner-item-img{display:block;height:100%;width:100%}\n.",[1],"swiper-indicator{-webkit-align-items:center;align-items:center;bottom:0;display:-webkit-flex;display:flex;height:",[0,14],";-webkit-justify-content:center;justify-content:center;left:0;position:absolute;text-align:center;width:100%}\n.",[1],"swiper-indicator-dot{background:#dcdcdc;border-radius:50%;height:",[0,14],";margin:0 ",[0,5],";width:",[0,14],"}\n.",[1],"swiper-indicator-dot-active{background:#0052d9}\n",],undefined,{path:"./components/home-brand-dynamics/index.wxss"});
}