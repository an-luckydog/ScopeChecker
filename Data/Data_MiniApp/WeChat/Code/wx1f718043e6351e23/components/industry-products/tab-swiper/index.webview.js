$gwx_XC_39=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_39 || [];
function gz$gwx_XC_39_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_39_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_39_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_39_1=[];
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
Z([[9],[[8],'item',[[7],[3,'item']]],[[8],'tabActive',[[7],[3,'tabActive']]]])
Z([3,'bannerItem'])
Z([3,'swiper-indicator'])
Z(z[6])
Z(z[7])
Z([a,[3,'swiper-indicator-dot '],[[2,'?:'],[[2,'=='],[[7],[3,'index']],[[7],[3,'bannerActive']]],[1,'swiper-indicator-dot-active'],[1,'']]])
Z(z[5])
Z([[9],[[8],'item',[[6],[[7],[3,'list']],[1,0]]],[[8],'tabActive',[[7],[3,'tabActive']]]])
Z(z[12])
Z(z[12])
Z([3,'banner-item'])
Z([3,'itemOne'])
Z([[7],[3,'item']])
Z(z[7])
Z([3,'tarGoDetail'])
Z([a,[3,'banner-item-one '],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'itemOne']],[3,'id']],[[7],[3,'tabActive']]],[1,'active'],[1,'']]])
Z([[7],[3,'itemOne']])
Z([3,'banner-item-text'])
Z([a,[[6],[[7],[3,'itemOne']],[3,'name']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_39_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_39_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_39=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_39=true;
var x=['./components/industry-products/tab-swiper/index.wxml'];d_[x[0]]={}
d_[x[0]]["bannerItem"]=function(e,s,r,gg){
var z=gz$gwx_XC_39_1()
var b=x[0]+':bannerItem'
r.wxVkey=b
gg.f=$gdc(f_["./components/industry-products/tab-swiper/index.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',21,e,s,gg)
var xC=_v()
_(oB,xC)
var oD=function(cF,fE,hG,gg){
var cI=_mz(z,'view',['bindtap',25,'class',1,'data-item',2],[],cF,fE,gg)
var oJ=_n('view')
_rz(z,oJ,'class',28,cF,fE,gg)
var lK=_oz(z,29,cF,fE,gg)
_(oJ,lK)
_(cI,oJ)
_(hG,cI)
return hG
}
xC.wxXCkey=2
_2z(z,23,oD,e,s,gg,xC,'itemOne','index','index')
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_39_1()
var o2W=_n('view')
_rz(z,o2W,'class',0,e,s,gg)
var c3W=_v()
_(o2W,c3W)
if(_oz(z,1,e,s,gg)){c3W.wxVkey=1
var o4W=_mz(z,'swiper',['autoplay',2,'bindchange',1,'circular',2,'class',3],[],e,s,gg)
var l5W=_v()
_(o4W,l5W)
var a6W=function(e8W,t7W,b9W,gg){
var xAX=_n('swiper-item')
var oBX=_n('view')
_rz(z,oBX,'class',8,e8W,t7W,gg)
var fCX=_mz(z,'view',['class',9,'hoverClass',1],[],e8W,t7W,gg)
var cDX=_v()
_(fCX,cDX)
var hEX=_oz(z,12,e8W,t7W,gg)
var oFX=_gd(x[0],hEX,e_,d_)
if(oFX){
var cGX=_1z(z,11,e8W,t7W,gg) || {}
var cur_globalf=gg.f
cDX.wxXCkey=3
oFX(cGX,cGX,cDX,gg)
gg.f=cur_globalf
}
else _w(hEX,x[0],2,321)
_(oBX,fCX)
_(xAX,oBX)
_(b9W,xAX)
return b9W
}
l5W.wxXCkey=2
_2z(z,6,a6W,e,s,gg,l5W,'item','index','index')
_(c3W,o4W)
var oHX=_n('view')
_rz(z,oHX,'class',13,e,s,gg)
var lIX=_v()
_(oHX,lIX)
var aJX=function(eLX,tKX,bMX,gg){
var xOX=_n('view')
_rz(z,xOX,'class',16,eLX,tKX,gg)
_(bMX,xOX)
return bMX
}
lIX.wxXCkey=2
_2z(z,14,aJX,e,s,gg,lIX,'item','index','index')
_(c3W,oHX)
}
else{c3W.wxVkey=2
var oPX=_n('view')
_rz(z,oPX,'class',17,e,s,gg)
var fQX=_v()
_(oPX,fQX)
var cRX=_oz(z,19,e,s,gg)
var hSX=_gd(x[0],cRX,e_,d_)
if(hSX){
var oTX=_1z(z,18,e,s,gg) || {}
var cur_globalf=gg.f
fQX.wxXCkey=3
hSX(oTX,oTX,fQX,gg)
gg.f=cur_globalf
}
else _w(cRX,x[0],2,644)
_(c3W,oPX)
}
c3W.wxXCkey=1
_(r,o2W)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_39";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_39();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/industry-products/tab-swiper/index.wxml'] = [$gwx_XC_39, './components/industry-products/tab-swiper/index.wxml'];else __wxAppCode__['components/industry-products/tab-swiper/index.wxml'] = $gwx_XC_39( './components/industry-products/tab-swiper/index.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['components/industry-products/tab-swiper/index.wxss'] = setCssToHead([".",[1],"banner-swiper-wrapper{height:",[0,109],";position:relative}\n.",[1],"banner-swiper{height:",[0,109],";padding-top:",[0,29],";width:",[0,750],"}\n.",[1],"swiper-item{height:",[0,80],"}\n.",[1],"banner-item,.",[1],"swiper-item{position:relative;width:",[0,750],"}\n.",[1],"banner-item{display:block;-webkit-justify-content:flex-start;justify-content:flex-start;padding:0 ",[0,43],"}\n.",[1],"banner-item,.",[1],"banner-item-one{display:-webkit-flex;display:flex;height:",[0,59],"}\n.",[1],"banner-item-one{-webkit-align-items:center;align-items:center;-webkit-justify-content:center;justify-content:center;margin-right:",[0,13],";width:",[0,122],"}\n.",[1],"banner-item-one.",[1],"active{border-bottom:",[0,5]," solid #0f5cdb}\n.",[1],"banner-item-one:last-child{margin-right:0}\n.",[1],"banner-item-text{color:#2f2f2f;font-size:",[0,24],";line-height:",[0,24],";text-align:center}\n.",[1],"swiper-indicator{-webkit-align-items:center;align-items:center;bottom:0;display:-webkit-flex;display:flex;height:",[0,14],";-webkit-justify-content:center;justify-content:center;left:0;position:absolute;text-align:center;width:100%}\n.",[1],"swiper-indicator-dot{background:#dcdcdc;border-radius:50%;height:",[0,14],";margin:0 ",[0,5],";width:",[0,14],"}\n.",[1],"swiper-indicator-dot-active{background:#0052d9}\n",],undefined,{path:"./components/industry-products/tab-swiper/index.wxss"});
}