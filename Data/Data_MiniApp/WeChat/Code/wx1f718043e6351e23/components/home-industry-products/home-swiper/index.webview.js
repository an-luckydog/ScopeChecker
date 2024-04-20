$gwx_XC_27=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_27 || [];
function gz$gwx_XC_27_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_27_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_27_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_27_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'banner-swiper-wrapper'])
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
Z(z[5])
Z([[8],'item',[[6],[[7],[3,'list']],[1,0]]])
Z(z[12])
Z(z[12])
Z([3,'banner-item'])
Z([[7],[3,'item']])
Z(z[7])
Z([3,'tarGoDetail'])
Z([3,'banner-item-one'])
Z([[7],[3,'active']])
Z(z[22])
Z([3,'banner-item-img'])
Z([3,'aspectFill'])
Z([[6],[[7],[3,'item']],[3,'banner']])
Z([3,'banner-item-text'])
Z([a,[[6],[[7],[3,'item']],[3,'name']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_27_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_27_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_27=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_27=true;
var x=['./components/home-industry-products/home-swiper/index.wxml'];d_[x[0]]={}
d_[x[0]]["bannerItem"]=function(e,s,r,gg){
var z=gz$gwx_XC_27_1()
var b=x[0]+':bannerItem'
r.wxVkey=b
gg.f=$gdc(f_["./components/home-industry-products/home-swiper/index.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',21,e,s,gg)
var xC=_v()
_(oB,xC)
var oD=function(cF,fE,hG,gg){
var cI=_mz(z,'view',['bindtap',24,'class',1,'data-index',2,'data-item',3],[],cF,fE,gg)
var oJ=_mz(z,'image',['class',28,'mode',1,'src',2],[],cF,fE,gg)
_(cI,oJ)
var lK=_n('view')
_rz(z,lK,'class',31,cF,fE,gg)
var aL=_oz(z,32,cF,fE,gg)
_(lK,aL)
_(cI,lK)
_(hG,cI)
return hG
}
xC.wxXCkey=2
_2z(z,22,oD,e,s,gg,xC,'item','index','index')
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_27_1()
var lCP=_n('view')
_rz(z,lCP,'class',0,e,s,gg)
var aDP=_v()
_(lCP,aDP)
if(_oz(z,1,e,s,gg)){aDP.wxVkey=1
var tEP=_mz(z,'swiper',['autoplay',2,'bindchange',1,'circular',2,'class',3],[],e,s,gg)
var eFP=_v()
_(tEP,eFP)
var bGP=function(xIP,oHP,oJP,gg){
var cLP=_n('swiper-item')
var hMP=_n('view')
_rz(z,hMP,'class',8,xIP,oHP,gg)
var oNP=_mz(z,'view',['class',9,'hoverClass',1],[],xIP,oHP,gg)
var cOP=_v()
_(oNP,cOP)
var oPP=_oz(z,12,xIP,oHP,gg)
var lQP=_gd(x[0],oPP,e_,d_)
if(lQP){
var aRP=_1z(z,11,xIP,oHP,gg) || {}
var cur_globalf=gg.f
cOP.wxXCkey=3
lQP(aRP,aRP,cOP,gg)
gg.f=cur_globalf
}
else _w(oPP,x[0],2,321)
_(hMP,oNP)
_(cLP,hMP)
_(oJP,cLP)
return oJP
}
eFP.wxXCkey=2
_2z(z,6,bGP,e,s,gg,eFP,'item','index','index')
_(aDP,tEP)
var tSP=_n('view')
_rz(z,tSP,'class',13,e,s,gg)
var eTP=_v()
_(tSP,eTP)
var bUP=function(xWP,oVP,oXP,gg){
var cZP=_n('view')
_rz(z,cZP,'class',16,xWP,oVP,gg)
_(oXP,cZP)
return oXP
}
eTP.wxXCkey=2
_2z(z,14,bUP,e,s,gg,eTP,'item','index','index')
_(aDP,tSP)
}
else{aDP.wxVkey=2
var h1P=_n('view')
_rz(z,h1P,'class',17,e,s,gg)
var o2P=_v()
_(h1P,o2P)
var c3P=_oz(z,19,e,s,gg)
var o4P=_gd(x[0],c3P,e_,d_)
if(o4P){
var l5P=_1z(z,18,e,s,gg) || {}
var cur_globalf=gg.f
o2P.wxXCkey=3
o4P(l5P,l5P,o2P,gg)
gg.f=cur_globalf
}
else _w(c3P,x[0],2,634)
_(aDP,h1P)
}
aDP.wxXCkey=1
_(r,lCP)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_27";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_27();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/home-industry-products/home-swiper/index.wxml'] = [$gwx_XC_27, './components/home-industry-products/home-swiper/index.wxml'];else __wxAppCode__['components/home-industry-products/home-swiper/index.wxml'] = $gwx_XC_27( './components/home-industry-products/home-swiper/index.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['components/home-industry-products/home-swiper/index.wxss'] = setCssToHead([".",[1],"banner-swiper-wrapper{height:",[0,202],";position:relative}\n.",[1],"banner-swiper{height:",[0,202],";padding-top:",[0,34],";width:",[0,750],"}\n.",[1],"banner-item,.",[1],"swiper-item{height:",[0,126],";position:relative;width:",[0,750],"}\n.",[1],"banner-item{display:block;display:-webkit-flex;display:flex;-webkit-justify-content:flex-start;justify-content:flex-start;padding:0 ",[0,42]," 0 ",[0,60],"}\n.",[1],"banner-item-one{height:",[0,126],";margin-right:",[0,37],";width:",[0,100],"}\n.",[1],"banner-item-one:last-child{margin-right:0}\n.",[1],"banner-item-img{background:#fff;border-radius:50%;box-shadow:",[0,0]," ",[0,20]," ",[0,38]," ",[0,2]," rgba(218,223,239,.5);display:block;height:",[0,84],";margin:0 auto ",[0,18],";width:",[0,84],"}\n.",[1],"banner-item-text{color:#2f2f2f;font-size:",[0,24],";line-height:",[0,24],";text-align:center}\n.",[1],"swiper-indicator{-webkit-align-items:center;align-items:center;bottom:0;display:-webkit-flex;display:flex;height:",[0,14],";-webkit-justify-content:center;justify-content:center;left:0;position:absolute;text-align:center;width:100%}\n.",[1],"swiper-indicator-dot{background:#dcdcdc;border-radius:50%;height:",[0,14],";margin:0 ",[0,5],";width:",[0,14],"}\n.",[1],"swiper-indicator-dot-active{background:#0052d9}\n",],undefined,{path:"./components/home-industry-products/home-swiper/index.wxss"});
}