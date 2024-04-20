$gwx_XC_31=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_31 || [];
function gz$gwx_XC_31_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_31_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_31_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_31_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'banner-swiper-wrapper'])
Z([[2,'>'],[[6],[[7],[3,'list']],[3,'length']],[1,1]])
Z([1,true])
Z([3,'swiperChange'])
Z(z[2])
Z([3,'banner-swiper'])
Z([3,'3000'])
Z([[7],[3,'list']])
Z([3,'index'])
Z([3,'swiper-item'])
Z([3,'banner-swiper-item'])
Z([3,'none'])
Z([[9],[[8],'item',[[7],[3,'item']]],[[8],'index',[[7],[3,'index']]]])
Z([3,'bannerItem'])
Z([3,'swiper-indicator'])
Z(z[7])
Z(z[8])
Z([a,[3,'swiper-indicator-dot '],[[2,'?:'],[[2,'=='],[[7],[3,'index']],[[7],[3,'bannerActive']]],[1,'swiper-indicator-dot-active'],[1,'']]])
Z([3,'banner-list'])
Z([[8],'item',[[6],[[7],[3,'list']],[1,0]]])
Z(z[13])
Z(z[13])
Z([3,'tarGoDetail'])
Z([3,'banner-item'])
Z([[7],[3,'item']])
Z([[7],[3,'index']])
Z([3,'banner-item-img'])
Z([3,'scaleToFill'])
Z([[6],[[7],[3,'item']],[3,'banner']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_31_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_31_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_31=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_31=true;
var x=['./components/home-swiper/index.wxml'];d_[x[0]]={}
d_[x[0]]["bannerItem"]=function(e,s,r,gg){
var z=gz$gwx_XC_31_1()
var b=x[0]+':bannerItem'
r.wxVkey=b
gg.f=$gdc(f_["./components/home-swiper/index.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
var oB=_mz(z,'view',['bindtap',22,'class',1,'data-item',2,'data-key',3],[],e,s,gg)
var xC=_mz(z,'image',['class',26,'mode',1,'src',2],[],e,s,gg)
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
var z=gz$gwx_XC_31_1()
var tAT=_n('view')
_rz(z,tAT,'class',0,e,s,gg)
var eBT=_v()
_(tAT,eBT)
if(_oz(z,1,e,s,gg)){eBT.wxVkey=1
var bCT=_mz(z,'swiper',['autoplay',2,'bindchange',1,'circular',2,'class',3,'interval',4],[],e,s,gg)
var oDT=_v()
_(bCT,oDT)
var xET=function(fGT,oFT,cHT,gg){
var oJT=_n('swiper-item')
var cKT=_n('view')
_rz(z,cKT,'class',9,fGT,oFT,gg)
var oLT=_mz(z,'view',['class',10,'hoverClass',1],[],fGT,oFT,gg)
var lMT=_v()
_(oLT,lMT)
var aNT=_oz(z,13,fGT,oFT,gg)
var tOT=_gd(x[0],aNT,e_,d_)
if(tOT){
var ePT=_1z(z,12,fGT,oFT,gg) || {}
var cur_globalf=gg.f
lMT.wxXCkey=3
tOT(ePT,ePT,lMT,gg)
gg.f=cur_globalf
}
else _w(aNT,x[0],2,333)
_(cKT,oLT)
_(oJT,cKT)
_(cHT,oJT)
return cHT
}
oDT.wxXCkey=2
_2z(z,7,xET,e,s,gg,oDT,'item','index','index')
_(eBT,bCT)
var bQT=_n('view')
_rz(z,bQT,'class',14,e,s,gg)
var oRT=_v()
_(bQT,oRT)
var xST=function(fUT,oTT,cVT,gg){
var oXT=_n('view')
_rz(z,oXT,'class',17,fUT,oTT,gg)
_(cVT,oXT)
return cVT
}
oRT.wxXCkey=2
_2z(z,15,xST,e,s,gg,oRT,'item','index','index')
_(eBT,bQT)
}
else{eBT.wxVkey=2
var cYT=_n('view')
_rz(z,cYT,'class',18,e,s,gg)
var oZT=_v()
_(cYT,oZT)
var l1T=_oz(z,20,e,s,gg)
var a2T=_gd(x[0],l1T,e_,d_)
if(a2T){
var t3T=_1z(z,19,e,s,gg) || {}
var cur_globalf=gg.f
oZT.wxXCkey=3
a2T(t3T,t3T,oZT,gg)
gg.f=cur_globalf
}
else _w(l1T,x[0],2,651)
_(eBT,cYT)
}
eBT.wxXCkey=1
_(r,tAT)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_31";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_31();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/home-swiper/index.wxml'] = [$gwx_XC_31, './components/home-swiper/index.wxml'];else __wxAppCode__['components/home-swiper/index.wxml'] = $gwx_XC_31( './components/home-swiper/index.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['components/home-swiper/index.wxss'] = setCssToHead([".",[1],"banner-swiper-wrapper{height:",[0,420],";position:relative}\n.",[1],"banner-swiper{height:",[0,420],"}\n.",[1],"banner-item,.",[1],"swiper-item{height:",[0,420],";position:relative;width:",[0,750],"}\n.",[1],"banner-item{display:block}\n.",[1],"banner-item-img{display:block;height:100%;width:100%}\n.",[1],"swiper-indicator{-webkit-align-items:center;align-items:center;bottom:",[0,20],";display:-webkit-flex;display:flex;height:",[0,14],";-webkit-justify-content:center;justify-content:center;left:0;position:absolute;text-align:center;width:100%}\n.",[1],"swiper-indicator-dot{background:hsla(0,0%,84%,.4);border-radius:50%;height:",[0,14],";margin:0 ",[0,5],";width:",[0,14],"}\n.",[1],"swiper-indicator-dot-active{background:#fff}\n",],undefined,{path:"./components/home-swiper/index.wxss"});
}