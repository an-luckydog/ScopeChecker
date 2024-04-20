$gwx_XC_30=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_30 || [];
function gz$gwx_XC_30_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_30_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_30_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_30_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!='],[[7],[3,'mode']],[1,'list']])
Z([3,'banner-swiper-wrapper'])
Z([[2,'>'],[[6],[[7],[3,'list']],[3,'length']],[1,1]])
Z([[7],[3,'autoplay']])
Z([3,'swiperChange'])
Z([[2,'>'],[[6],[[7],[3,'list']],[3,'length']],[1,2]])
Z([3,'banner-swiper'])
Z([3,'1'])
Z([3,'27px'])
Z([3,'42px'])
Z([3,'true'])
Z([[7],[3,'list']])
Z([3,'index'])
Z([3,'swiper-item'])
Z([3,'banner-swiper-item'])
Z([3,'none'])
Z([[8],'item',[[7],[3,'item']]])
Z([3,'bannerItem'])
Z([3,'swiper-indicator'])
Z(z[11])
Z(z[12])
Z([a,[3,'swiper-indicator-dot '],[[2,'?:'],[[2,'=='],[[7],[3,'index']],[[7],[3,'bannerActive']]],[1,'swiper-indicator-dot-active'],[1,'']]])
Z([3,'cases-list'])
Z([[8],'item',[[6],[[7],[3,'list']],[1,0]]])
Z(z[17])
Z(z[11])
Z(z[12])
Z(z[16])
Z([3,'listItem'])
Z(z[17])
Z([3,'tarGoDetail'])
Z([3,'banner-item'])
Z([[7],[3,'item']])
Z([3,'banner-item-img'])
Z([3,'scaleToFill'])
Z([[6],[[7],[3,'item']],[3,'banner']])
Z(z[28])
Z(z[30])
Z([3,'list-item'])
Z(z[32])
Z([3,'list-item-info'])
Z([3,'list-item-title'])
Z([a,[[6],[[7],[3,'item']],[3,'title']]])
Z([3,'list-tag'])
Z([3,'label'])
Z([[6],[[7],[3,'item']],[3,'tag']])
Z(z[12])
Z([3,'list-tag-one'])
Z([a,[[6],[[7],[3,'label']],[3,'name']]])
Z([3,''])
Z([3,'list-item-thumb'])
Z(z[35])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_30_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_30_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_30=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_30=true;
var x=['./components/home-scene-application/index.wxml'];d_[x[0]]={}
d_[x[0]]["bannerItem"]=function(e,s,r,gg){
var z=gz$gwx_XC_30_1()
var b=x[0]+':bannerItem'
r.wxVkey=b
gg.f=$gdc(f_["./components/home-scene-application/index.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
var oB=_mz(z,'view',['bindtap',30,'class',1,'data-item',2],[],e,s,gg)
var xC=_mz(z,'image',['class',33,'mode',1,'src',2],[],e,s,gg)
_(oB,xC)
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[0]]["listItem"]=function(e,s,r,gg){
var z=gz$gwx_XC_30_1()
var b=x[0]+':listItem'
r.wxVkey=b
gg.f=$gdc(f_["./components/home-scene-application/index.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
var oB=_mz(z,'view',['bindtap',37,'class',1,'data-item',2],[],e,s,gg)
var xC=_n('view')
_rz(z,xC,'class',40,e,s,gg)
var oD=_n('view')
_rz(z,oD,'class',41,e,s,gg)
var fE=_oz(z,42,e,s,gg)
_(oD,fE)
_(xC,oD)
var cF=_n('view')
_rz(z,cF,'class',43,e,s,gg)
var hG=_v()
_(cF,hG)
var oH=function(oJ,cI,lK,gg){
var tM=_n('view')
_rz(z,tM,'class',47,oJ,cI,gg)
var eN=_oz(z,48,oJ,cI,gg)
_(tM,eN)
_(lK,tM)
return lK
}
hG.wxXCkey=2
_2z(z,45,oH,e,s,gg,hG,'label','index','index')
_(xC,cF)
_(oB,xC)
var bO=_mz(z,'image',['alt',49,'class',1,'src',2],[],e,s,gg)
_(oB,bO)
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_30_1()
var t5R=_v()
_(r,t5R)
if(_oz(z,0,e,s,gg)){t5R.wxVkey=1
var e6R=_n('view')
_rz(z,e6R,'class',1,e,s,gg)
var b7R=_v()
_(e6R,b7R)
if(_oz(z,2,e,s,gg)){b7R.wxVkey=1
var o8R=_mz(z,'swiper',['autoplay',3,'bindchange',1,'circular',2,'class',3,'displayMultipleItems',4,'nextMargin',5,'previousMargin',6,'snapToEdge',7],[],e,s,gg)
var x9R=_v()
_(o8R,x9R)
var o0R=function(cBS,fAS,hCS,gg){
var cES=_n('swiper-item')
var oFS=_n('view')
_rz(z,oFS,'class',13,cBS,fAS,gg)
var lGS=_mz(z,'view',['class',14,'hoverClass',1],[],cBS,fAS,gg)
var aHS=_v()
_(lGS,aHS)
var tIS=_oz(z,17,cBS,fAS,gg)
var eJS=_gd(x[0],tIS,e_,d_)
if(eJS){
var bKS=_1z(z,16,cBS,fAS,gg) || {}
var cur_globalf=gg.f
aHS.wxXCkey=3
eJS(bKS,bKS,aHS,gg)
gg.f=cur_globalf
}
else _w(tIS,x[0],2,478)
_(oFS,lGS)
_(cES,oFS)
_(hCS,cES)
return hCS
}
x9R.wxXCkey=2
_2z(z,11,o0R,e,s,gg,x9R,'item','index','index')
_(b7R,o8R)
var oLS=_n('view')
_rz(z,oLS,'class',18,e,s,gg)
var xMS=_v()
_(oLS,xMS)
var oNS=function(cPS,fOS,hQS,gg){
var cSS=_n('view')
_rz(z,cSS,'class',21,cPS,fOS,gg)
_(hQS,cSS)
return hQS
}
xMS.wxXCkey=2
_2z(z,19,oNS,e,s,gg,xMS,'item','index','index')
_(b7R,oLS)
}
else{b7R.wxVkey=2
var oTS=_n('view')
_rz(z,oTS,'class',22,e,s,gg)
var lUS=_v()
_(oTS,lUS)
var aVS=_oz(z,24,e,s,gg)
var tWS=_gd(x[0],aVS,e_,d_)
if(tWS){
var eXS=_1z(z,23,e,s,gg) || {}
var cur_globalf=gg.f
lUS.wxXCkey=3
tWS(eXS,eXS,lUS,gg)
gg.f=cur_globalf
}
else _w(aVS,x[0],2,798)
_(b7R,oTS)
}
b7R.wxXCkey=1
_(t5R,e6R)
}
else{t5R.wxVkey=2
var bYS=_n('view')
var oZS=_v()
_(bYS,oZS)
var x1S=function(f3S,o2S,c4S,gg){
var o6S=_v()
_(c4S,o6S)
var c7S=_oz(z,28,f3S,o2S,gg)
var o8S=_gd(x[0],c7S,e_,d_)
if(o8S){
var l9S=_1z(z,27,f3S,o2S,gg) || {}
var cur_globalf=gg.f
o6S.wxXCkey=3
o8S(l9S,l9S,o6S,gg)
gg.f=cur_globalf
}
else _w(c7S,x[0],4,70)
return c4S
}
oZS.wxXCkey=2
_2z(z,25,x1S,e,s,gg,oZS,'item','index','index')
_(t5R,bYS)
}
t5R.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_30";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_30();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/home-scene-application/index.wxml'] = [$gwx_XC_30, './components/home-scene-application/index.wxml'];else __wxAppCode__['components/home-scene-application/index.wxml'] = $gwx_XC_30( './components/home-scene-application/index.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['components/home-scene-application/index.wxss'] = setCssToHead([".",[1],"banner-swiper-wrapper{height:",[0,355],";margin:0;padding:0;position:relative;width:",[0,750],"}\n.",[1],"banner-swiper{height:",[0,355],"}\n.",[1],"banner-swiper wx-swiper-item{width:",[0,612],"!important}\n.",[1],"swiper-item{height:",[0,320],"}\n.",[1],"banner-item,.",[1],"swiper-item{position:relative;width:",[0,582],"}\n.",[1],"banner-item{border-radius:",[0,30],";box-shadow:0 0 ",[0,40]," #dadfef;display:block;height:",[0,328],";overflow:hidden}\n.",[1],"banner-item-img{display:block;height:100%;width:100%}\n.",[1],"swiper-indicator{-webkit-align-items:center;align-items:center;bottom:",[0,2],";display:-webkit-flex;display:flex;height:",[0,14],";-webkit-justify-content:center;justify-content:center;left:0;position:absolute;text-align:center;width:100%}\n.",[1],"swiper-indicator-dot{background:#dcdcdc;border-radius:50%;height:",[0,14],";margin:0 ",[0,5],";width:",[0,14],"}\n.",[1],"swiper-indicator-dot-active{background:#0052d9}\n.",[1],"cases-list{margin:0 ",[0,84],"}\n.",[1],"list-item{background:#fff;border-radius:",[0,30],";box-shadow:",[0,0]," ",[0,0]," ",[0,40]," ",[0,0]," #dadfef;display:-webkit-flex;display:flex;height:auto;-webkit-justify-content:space-between;justify-content:space-between;margin:0 ",[0,30]," ",[0,30]," ",[0,39],";padding:",[0,22]," ",[0,24]," ",[0,21]," ",[0,36],";width:",[0,681],"}\n.",[1],"list-item-thumb{background:#eee;height:",[0,150],";width:",[0,267],"}\n.",[1],"list-item-info{height:auto;width:",[0,415],"}\n.",[1],"list-item-title{-webkit-line-clamp:2;-webkit-box-orient:vertical;color:#273755;display:-webkit-box;font-size:",[0,28],";font-weight:600;height:",[0,72],";line-height:",[0,36],";margin-bottom:",[0,28],";overflow:hidden;text-align:left;width:",[0,370],"}\n.",[1],"list-tag{-webkit-flex-wrap:wrap;flex-wrap:wrap;overflow:hidden;width:100%}\n.",[1],"list-tag,.",[1],"list-tag-one{display:-webkit-flex;display:flex;height:",[0,36],"}\n.",[1],"list-tag-one{-webkit-align-items:center;align-items:center;border:",[0,2]," solid #0052d9;border-radius:",[0,10],";color:#0052d9;font-size:",[0,20],";-webkit-justify-content:center;justify-content:center;line-height:",[0,32],";margin-right:",[0,12],";padding:0 ",[0,13],";width:auto}\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./components/home-scene-application/index.wxss:1:132)",{path:"./components/home-scene-application/index.wxss"});
}