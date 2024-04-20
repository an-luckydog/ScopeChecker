$gwx_XC_7=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_7 || [];
function gz$gwx_XC_7_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_7_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'recommand-content '],[[2,'?:'],[[7],[3,'ready']],[1,''],[1,'hidden']]])
Z([3,'title'])
Z([3,'为您推荐'])
Z([3,'tabs-selector'])
Z([1,true])
Z([[7],[3,'tabList']])
Z([3,'id'])
Z([3,'changeTab'])
Z([a,[3,'swiper-tab-item '],[[2,'?:'],[[2,'==='],[[7],[3,'currentTab']],[[6],[[7],[3,'item']],[3,'id']]],[1,'active'],[1,'']]])
Z([[6],[[7],[3,'item']],[3,'id']])
Z([a,[3,'\n      '],[[6],[[7],[3,'item']],[3,'name']],[3,'\n    ']])
Z([3,'tabItem'])
Z(z[5])
Z(z[6])
Z([a,[3,'swiper-tab-content '],[[2,'?:'],[[2,'==='],[[7],[3,'currentTab']],[[6],[[7],[3,'tabItem']],[3,'id']]],[1,''],[1,'hidden']]])
Z([3,'product'])
Z([[2,'||'],[[6],[[7],[3,'productMap']],[[6],[[7],[3,'tabItem']],[3,'id']]],[[4],[[5]]]])
Z(z[6])
Z([3,'onGoProduct'])
Z([3,'commondity-wrapper'])
Z([[6],[[7],[3,'product']],[3,'buss']])
Z([[6],[[7],[3,'product']],[3,'id']])
Z([[6],[[7],[3,'product']],[3,'name']])
Z(z[4])
Z([3,'commodity-pic-swiper'])
Z([3,'picIndex'])
Z([3,'picItem'])
Z([[6],[[7],[3,'product']],[3,'imageList']])
Z(z[25])
Z([3,'pic-swiper-item'])
Z([3,'commodity-pic'])
Z(z[4])
Z([3,'aspectFill'])
Z([[6],[[7],[3,'picItem']],[3,'url']])
Z([3,'commodity-info'])
Z([3,'name'])
Z([a,[[6],[[7],[3,'product']],[3,'name']]])
Z([3,'summary'])
Z([3,'amount-info'])
Z([3,'amount'])
Z([a,[[6],[[7],[3,'product']],[3,'amount']]])
Z([3,'origin-amount'])
Z([a,[3,'￥'],[[6],[[7],[3,'product']],[3,'originAmount']]])
Z([3,'like'])
Z([a,[[6],[[7],[3,'product']],[3,'collectTimes']],[3,'收藏']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_7_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_7=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_7=true;
var x=['./miniprogram_npm/@tmsfe/tms-ui/booking-recommand/booking-recommand.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_7_1()
var o6N=_n('view')
_rz(z,o6N,'class',0,e,s,gg)
var l7N=_n('view')
_rz(z,l7N,'class',1,e,s,gg)
var a8N=_oz(z,2,e,s,gg)
_(l7N,a8N)
_(o6N,l7N)
var t9N=_mz(z,'scroll-view',['class',3,'scrollX',1],[],e,s,gg)
var e0N=_v()
_(t9N,e0N)
var bAO=function(xCO,oBO,oDO,gg){
var cFO=_mz(z,'view',['bindtap',7,'class',1,'data-current',2],[],xCO,oBO,gg)
var hGO=_oz(z,10,xCO,oBO,gg)
_(cFO,hGO)
_(oDO,cFO)
return oDO
}
e0N.wxXCkey=2
_2z(z,5,bAO,e,s,gg,e0N,'item','index','id')
_(o6N,t9N)
var oHO=_v()
_(o6N,oHO)
var cIO=function(lKO,oJO,aLO,gg){
var eNO=_n('view')
_rz(z,eNO,'class',14,lKO,oJO,gg)
var bOO=_v()
_(eNO,bOO)
var oPO=function(oRO,xQO,fSO,gg){
var hUO=_mz(z,'view',['catch:tap',18,'class',1,'mark:buss',2,'mark:id',3,'mark:name',4],[],oRO,xQO,gg)
var oVO=_mz(z,'swiper',['autoplay',23,'class',1],[],oRO,xQO,gg)
var cWO=_v()
_(oVO,cWO)
var oXO=function(aZO,lYO,t1O,gg){
var b3O=_n('swiper-item')
_rz(z,b3O,'class',29,aZO,lYO,gg)
var o4O=_mz(z,'image',['class',30,'lazyLoad',1,'mode',2,'src',3],[],aZO,lYO,gg)
_(b3O,o4O)
_(t1O,b3O)
return t1O
}
cWO.wxXCkey=2
_2z(z,27,oXO,oRO,xQO,gg,cWO,'picItem','picIndex','picIndex')
_(hUO,oVO)
var x5O=_n('view')
_rz(z,x5O,'class',34,oRO,xQO,gg)
var o6O=_n('view')
_rz(z,o6O,'class',35,oRO,xQO,gg)
var f7O=_oz(z,36,oRO,xQO,gg)
_(o6O,f7O)
_(x5O,o6O)
var c8O=_n('view')
_rz(z,c8O,'class',37,oRO,xQO,gg)
var h9O=_n('view')
_rz(z,h9O,'class',38,oRO,xQO,gg)
var o0O=_n('text')
_rz(z,o0O,'class',39,oRO,xQO,gg)
var cAP=_oz(z,40,oRO,xQO,gg)
_(o0O,cAP)
_(h9O,o0O)
var oBP=_n('text')
_rz(z,oBP,'class',41,oRO,xQO,gg)
var lCP=_oz(z,42,oRO,xQO,gg)
_(oBP,lCP)
_(h9O,oBP)
_(c8O,h9O)
var aDP=_n('view')
_rz(z,aDP,'class',43,oRO,xQO,gg)
var tEP=_oz(z,44,oRO,xQO,gg)
_(aDP,tEP)
_(c8O,aDP)
_(x5O,c8O)
_(hUO,x5O)
_(fSO,hUO)
return fSO
}
bOO.wxXCkey=2
_2z(z,16,oPO,lKO,oJO,gg,bOO,'product','index','id')
_(aLO,eNO)
return aLO
}
oHO.wxXCkey=2
_2z(z,12,cIO,e,s,gg,oHO,'tabItem','index','id')
_(r,o6N)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_7";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_7();
	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@tmsfe/tms-ui/booking-recommand/booking-recommand.wxml'] = [$gwx_XC_7, './miniprogram_npm/@tmsfe/tms-ui/booking-recommand/booking-recommand.wxml'];else __wxAppCode__['miniprogram_npm/@tmsfe/tms-ui/booking-recommand/booking-recommand.wxml'] = $gwx_XC_7( './miniprogram_npm/@tmsfe/tms-ui/booking-recommand/booking-recommand.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['miniprogram_npm/@tmsfe/tms-ui/booking-recommand/booking-recommand.wxss'] = setCssToHead([".",[1],"title{color:#999;font-size:",[0,28],";margin:",[0,42]," auto;text-align:center}\n.",[1],"tabs-selector{box-sizing:border-box;padding:0 ",[0,30],";white-space:nowrap;width:100%}\n.",[1],"swiper-tab-item{background-color:#fff;border-radius:",[0,28],";color:#5e656f;display:inline-block;font-family:var(--fontMedium);font-size:",[0,24],";line-height:",[0,56],";margin-right:",[0,20],";padding:0 ",[0,30],"}\n.",[1],"swiper-tab-item:last-child{margin-right:0}\n.",[1],"swiper-tab-item.",[1],"active{background-color:#e4ecfc;color:#3f82ff}\n.",[1],"swiper-tab-content{display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:",[0,30],"}\n.",[1],"pic-swiper-item{border-radius:",[0,20],"}\n.",[1],"commondity-wrapper{margin-right:",[0,22],";width:",[0,334],"}\n.",[1],"commondity-wrapper:nth-child(2n){margin-right:0}\n.",[1],"commodity-pic-swiper{border-radius:",[0,20],";height:",[0,366],";margin-bottom:",[0,18],";width:100%}\nwx-image.",[1],"commodity-pic{height:100%;width:100%}\n.",[1],"commodity-info .",[1],"name{color:#000;font-family:var(--fontMedium);font-size:",[0,28],"}\n.",[1],"commodity-info .",[1],"summary{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-justify-content:space-between;justify-content:space-between;margin-top:",[0,10],"}\n.",[1],"summary .",[1],"amount-info{display:inline-block;font-family:var(--fontMedium);margin-bottom:",[0,10],"}\n.",[1],"amount-info .",[1],"amount{color:#ff2b22;font-family:DINAlternate-Bold;font-size:",[0,40],";margin-right:",[0,10],"}\n.",[1],"amount-info .",[1],"amount::before{content:\x22￥\x22;font-size:",[0,28],"}\n.",[1],"amount-info .",[1],"origin-amount{color:#999;font-size:",[0,22],";text-decoration:line-through}\n.",[1],"summary .",[1],"like{color:#666;display:inline-block;font-size:",[0,22],";padding-right:",[0,10],"}\n.",[1],"hidden{display:none}\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./miniprogram_npm/@tmsfe/tms-ui/booking-recommand/booking-recommand.wxss:1:784)",{path:"./miniprogram_npm/@tmsfe/tms-ui/booking-recommand/booking-recommand.wxss"});
}