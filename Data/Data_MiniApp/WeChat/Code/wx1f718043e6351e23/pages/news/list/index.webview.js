$gwx_XC_113=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_113 || [];
function gz$gwx_XC_113_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_113_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_113_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_113_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'新闻'])
Z([3,'page-bg'])
Z([a,[3,'min-height:calc(100vh - '],[[7],[3,'topHeight']],[3,'px)']])
Z([[7],[3,'ready']])
Z([[2,'<'],[[7],[3,'type']],[1,3]])
Z([3,'chooseIndustryIndex'])
Z([3,'chooseTabIndex'])
Z([[7],[3,'industryActive']])
Z([[7],[3,'homeIndustryList']])
Z([[7],[3,'tabActive']])
Z([3,'content'])
Z([3,'true'])
Z([a,[3,'height:calc(100vh - '],[[2,'?:'],[[2,'=='],[[7],[3,'type']],[1,3]],[1,0],[1,210]],[3,'rpx - 40rpx - '],z[2][2],z[2][3]])
Z([[2,'>'],[[6],[[7],[3,'industryNews']],[3,'length']],[1,0]])
Z([[7],[3,'industryNews']])
Z([3,'news'])
Z([3,'list-more'])
Z([3,'暂无数据'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_113_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_113_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_113=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_113=true;
var x=['./pages/news/list/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_113_1()
var o0VC=_n('header')
_rz(z,o0VC,'title',0,e,s,gg)
_(r,o0VC)
var lAWC=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
var aBWC=_v()
_(lAWC,aBWC)
if(_oz(z,3,e,s,gg)){aBWC.wxVkey=1
var tCWC=_v()
_(aBWC,tCWC)
if(_oz(z,4,e,s,gg)){tCWC.wxVkey=1
var eDWC=_mz(z,'industry-products',['bindindustryIndex',5,'bindtabIndex',1,'industryActive',2,'list',3,'tabActive',4],[],e,s,gg)
_(tCWC,eDWC)
}
var bEWC=_mz(z,'scroll-view',['class',10,'scrollY',1,'style',2],[],e,s,gg)
var oFWC=_v()
_(bEWC,oFWC)
if(_oz(z,13,e,s,gg)){oFWC.wxVkey=1
var xGWC=_mz(z,'industry-news',['list',14,'type',1],[],e,s,gg)
_(oFWC,xGWC)
}
else{oFWC.wxVkey=2
var oHWC=_n('view')
_rz(z,oHWC,'class',16,e,s,gg)
var fIWC=_oz(z,17,e,s,gg)
_(oHWC,fIWC)
_(oFWC,oHWC)
}
oFWC.wxXCkey=1
oFWC.wxXCkey=3
_(aBWC,bEWC)
var cJWC=_n('consult-btn')
_(aBWC,cJWC)
var hKWC=_n('home-tips')
_(aBWC,hKWC)
tCWC.wxXCkey=1
tCWC.wxXCkey=3
}
else{aBWC.wxVkey=2
var oLWC=_n('loading')
_(aBWC,oLWC)
}
aBWC.wxXCkey=1
aBWC.wxXCkey=3
aBWC.wxXCkey=3
_(r,lAWC)
var cMWC=_n('no-card-tip')
_(r,cMWC)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_113";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_113();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/news/list/index.wxml'] = [$gwx_XC_113, './pages/news/list/index.wxml'];else __wxAppCode__['pages/news/list/index.wxml'] = $gwx_XC_113( './pages/news/list/index.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['pages/news/list/index.wxss'] = setCssToHead([".",[1],"page-bg{padding-top:",[0,1],"}\n.",[1],"content{margin-top:",[0,36],";padding-bottom:",[0,30],"}\n",],undefined,{path:"./pages/news/list/index.wxss"});
}