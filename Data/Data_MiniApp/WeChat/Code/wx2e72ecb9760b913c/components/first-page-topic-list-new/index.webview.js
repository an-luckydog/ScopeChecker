$gwx_XC_32=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_32 || [];
function gz$gwx_XC_32_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_32_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_32_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_32_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'topic-list-component'])
Z([a,[3,'tabbar '],[[2,'?:'],[[7],[3,'shouldTopicComponentFixed']],[1,'fixed'],[1,'']]])
Z([3,'getAllTopic'])
Z([a,[3,'type-button '],[[2,'?:'],[[2,'==='],[[7],[3,'currentType']],[1,'0']],[1,'active'],[1,'']]])
Z([3,'mini'])
Z([3,' 全部 '])
Z([3,'handleButtonTap'])
Z([a,z[3][1],[[2,'?:'],[[2,'==='],[[7],[3,'currentType']],[1,'2']],[1,'active'],[1,'']]])
Z([3,'2'])
Z(z[4])
Z([[2,'==='],[[7],[3,'currentType']],[1,'2']])
Z([3,'inner-image'])
Z([3,'https://resourced.chunyu.mobi/TXgAAAC1O3F0BH0W-d78a71ed-72ba-4ba5-aec2-2ce1187cae2a_w36_h36_.png'])
Z(z[11])
Z([3,'https://resourced.chunyu.mobi/Uu4AAABvB-lIl3oW-3647a560-6a40-4edb-814d-8a53b76f7862_w24_h24_.png'])
Z([3,' 语音 '])
Z(z[6])
Z([a,z[3][1],[[2,'?:'],[[2,'==='],[[7],[3,'currentType']],[1,'4']],[1,'active'],[1,'']]])
Z([3,'4'])
Z(z[4])
Z([[2,'==='],[[7],[3,'currentType']],[1,'4']])
Z(z[11])
Z([3,'https://resourced.chunyu.mobi/bEAAAACrNnF0BH0W-48f72970-c17b-408e-b446-c187e3f76823_w36_h36_.png'])
Z(z[11])
Z([3,'https://resourced.chunyu.mobi/daAAAAAtEulIl3oW-352d9ebb-b901-4920-adbc-9f685c3993ab_w24_h24_.png'])
Z([3,' 简答 '])
Z(z[6])
Z([a,z[3][1],[[2,'?:'],[[2,'==='],[[7],[3,'currentType']],[1,'1']],[1,'active'],[1,'']]])
Z([3,'1'])
Z(z[4])
Z([[2,'==='],[[7],[3,'currentType']],[1,'1']])
Z(z[11])
Z([3,'https://resourced.chunyu.mobi/ZU8AAABmNHF0BH0W-7d0bd606-ec0b-46df-aa67-497ac585ad02_w36_h36_.png'])
Z(z[11])
Z([3,'https://resourced.chunyu.mobi/mQ4AAADvBelIl3oW-307f030f-71ad-43fd-a190-02682fbebdc8_w24_h24_.png'])
Z([3,' 图文 '])
Z([3,'topic-holder'])
Z([[7],[3,'topicList']])
Z([3,'id'])
Z([3,'mainPage'])
Z([[7],[3,'item']])
Z([[7],[3,'isLoading']])
Z([[2,'!'],[[6],[[7],[3,'topicList']],[3,'length']]])
Z([3,'暂无资讯'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_32_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_32_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_32=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_32=true;
var x=['./components/first-page-topic-list-new/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_32_1()
var x9R=_n('view')
_rz(z,x9R,'class',0,e,s,gg)
var o0R=_n('view')
_rz(z,o0R,'class',1,e,s,gg)
var fAS=_mz(z,'button',['bind:tap',2,'class',1,'size',2],[],e,s,gg)
var cBS=_oz(z,5,e,s,gg)
_(fAS,cBS)
_(o0R,fAS)
var hCS=_mz(z,'button',['bind:tap',6,'class',1,'data-type',2,'size',3],[],e,s,gg)
var oDS=_v()
_(hCS,oDS)
if(_oz(z,10,e,s,gg)){oDS.wxVkey=1
var cES=_mz(z,'image',['class',11,'src',1],[],e,s,gg)
_(oDS,cES)
}
else{oDS.wxVkey=2
var oFS=_mz(z,'image',['class',13,'src',1],[],e,s,gg)
_(oDS,oFS)
}
var lGS=_oz(z,15,e,s,gg)
_(hCS,lGS)
oDS.wxXCkey=1
_(o0R,hCS)
var aHS=_mz(z,'button',['bind:tap',16,'class',1,'data-type',2,'size',3],[],e,s,gg)
var tIS=_v()
_(aHS,tIS)
if(_oz(z,20,e,s,gg)){tIS.wxVkey=1
var eJS=_mz(z,'image',['class',21,'src',1],[],e,s,gg)
_(tIS,eJS)
}
else{tIS.wxVkey=2
var bKS=_mz(z,'image',['class',23,'src',1],[],e,s,gg)
_(tIS,bKS)
}
var oLS=_oz(z,25,e,s,gg)
_(aHS,oLS)
tIS.wxXCkey=1
_(o0R,aHS)
var xMS=_mz(z,'button',['bind:tap',26,'class',1,'data-type',2,'size',3],[],e,s,gg)
var oNS=_v()
_(xMS,oNS)
if(_oz(z,30,e,s,gg)){oNS.wxVkey=1
var fOS=_mz(z,'image',['class',31,'src',1],[],e,s,gg)
_(oNS,fOS)
}
else{oNS.wxVkey=2
var cPS=_mz(z,'image',['class',33,'src',1],[],e,s,gg)
_(oNS,cPS)
}
var hQS=_oz(z,35,e,s,gg)
_(xMS,hQS)
oNS.wxXCkey=1
_(o0R,xMS)
_(x9R,o0R)
var oRS=_n('view')
_rz(z,oRS,'class',36,e,s,gg)
var cSS=_v()
_(oRS,cSS)
var oTS=function(aVS,lUS,tWS,gg){
var bYS=_mz(z,'single-topic',['fromType',39,'topicData',1],[],aVS,lUS,gg)
_(tWS,bYS)
return tWS
}
cSS.wxXCkey=4
_2z(z,37,oTS,e,s,gg,cSS,'item','index','id')
var oZS=_mz(z,'cy-loading',['loading',41,'noResult',1,'noResultTip',2],[],e,s,gg)
_(oRS,oZS)
_(x9R,oRS)
_(r,x9R)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_32";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_32();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/first-page-topic-list-new/index.wxml'] = [$gwx_XC_32, './components/first-page-topic-list-new/index.wxml'];else __wxAppCode__['components/first-page-topic-list-new/index.wxml'] = $gwx_XC_32( './components/first-page-topic-list-new/index.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['components/first-page-topic-list-new/index.wxss'] = setCssToHead([".",[1],"topic-list-component{height:100%;position:relative;width:100%}\n.",[1],"tabbar{background-color:#fff;box-sizing:border-box;display:-webkit-flex;display:flex;-webkit-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-justify-content:space-between;justify-content:space-between;padding:15px 15px 0;width:100vw;z-index:9999}\n.",[1],"tabbar,.",[1],"type-button{-webkit-align-items:center;align-items:center}\n.",[1],"type-button{background:#f7f7f7;border-radius:2px;color:#888;display:-webkit-flex!important;display:flex!important;font-size:14px!important;height:26px;-webkit-justify-content:center;justify-content:center;padding:0!important;width:78px}\n.",[1],"type-button.",[1],"active{background-color:#e8f9ee;color:#39d167}\n.",[1],"inner-image{height:12px;margin-right:5px;width:12px}\n.",[1],"topic-holder{background-color:#fff;min-height:200px;width:100vw}\n",],undefined,{path:"./components/first-page-topic-list-new/index.wxss"});
}