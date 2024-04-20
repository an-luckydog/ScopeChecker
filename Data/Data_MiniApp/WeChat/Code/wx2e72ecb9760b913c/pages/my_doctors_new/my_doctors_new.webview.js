$gwx_XC_160=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_160 || [];
function gz$gwx_XC_160_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_160_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_160_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_160_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'my-doctors-main-container'])
Z([3,'tab-header-container'])
Z([3,'onTabTab'])
Z([a,[3,'tab-item '],[[2,'?:'],[[2,'==='],[[7],[3,'currentTabIndex']],[1,0]],[1,'selected'],[1,'']]])
Z([3,'0'])
Z([3,' 咨询过 '])
Z(z[2])
Z([a,z[3][1],[[2,'?:'],[[2,'==='],[[7],[3,'currentTabIndex']],[1,1]],[1,'selected'],[1,'']]])
Z([3,'1'])
Z([3,' 已关注 '])
Z([3,'onScrollBottom'])
Z([a,[3,'doctor-list-scroll-view '],[[2,'?:'],[[2,'<='],[[6],[[7],[3,'doctorList']],[3,'length']],[1,0]],[1,'empty-list'],[1,'']]])
Z([1,0])
Z([1,true])
Z([[7],[3,'doctorList']])
Z([3,'doctor_id'])
Z([[2,'?:'],[[2,'==='],[[2,'+'],[[7],[3,'index']],[1,1]],[[6],[[7],[3,'doctorList']],[3,'length']]],[1,'last-item'],[1,'']])
Z([[7],[3,'item']])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'type']],[[6],[[6],[[7],[3,'typeMap']],[1,0]],[3,'value']]])
Z([[7],[3,'visitPageName']])
Z([[6],[[7],[3,'doctorList']],[3,'length']])
Z([3,'padding-placeholder'])
Z([[2,'<='],[[6],[[7],[3,'doctorList']],[3,'length']],[1,0]])
Z([3,'empty-indicator'])
Z([3,'empty-icon'])
Z([3,'widthFix'])
Z([3,'https://staff.chunyu.mobi/@/media/images/2022/04/26/bd2f/0c9d931314aa_w468_h270_.png'])
Z([3,'empty-text-1'])
Z([3,'暂无医生'])
Z([3,'empty-text-2'])
Z([a,[[6],[[6],[[7],[3,'typeMap']],[[7],[3,'currentTabIndex']]],[3,'desc']],[3,'的医生将显示在这里']])
Z([3,'toFindDoctor'])
Z([3,'button'])
Z([3,' 去找医生 '])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_160_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_160_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_160=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_160=true;
var x=['./pages/my_doctors_new/my_doctors_new.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_160_1()
var aBUE=_n('view')
_rz(z,aBUE,'class',0,e,s,gg)
var tCUE=_n('view')
_rz(z,tCUE,'class',1,e,s,gg)
var eDUE=_mz(z,'view',['bindtap',2,'class',1,'data-tab-index',2],[],e,s,gg)
var bEUE=_oz(z,5,e,s,gg)
_(eDUE,bEUE)
_(tCUE,eDUE)
var oFUE=_mz(z,'view',['bindtap',6,'class',1,'data-tab-index',2],[],e,s,gg)
var xGUE=_oz(z,9,e,s,gg)
_(oFUE,xGUE)
_(tCUE,oFUE)
_(aBUE,tCUE)
var oHUE=_mz(z,'scroll-view',['bindscrolltolower',10,'class',1,'lowerThreshold',2,'scrollY',3],[],e,s,gg)
var hKUE=_v()
_(oHUE,hKUE)
var oLUE=function(oNUE,cMUE,lOUE,gg){
var tQUE=_mz(z,'single-doctor',['class',16,'doctorInfo',1,'shouldButtonGroupShow',2,'visitPageName',3],[],oNUE,cMUE,gg)
_(lOUE,tQUE)
return lOUE
}
hKUE.wxXCkey=4
_2z(z,14,oLUE,e,s,gg,hKUE,'item','index','doctor_id')
var fIUE=_v()
_(oHUE,fIUE)
if(_oz(z,20,e,s,gg)){fIUE.wxVkey=1
var eRUE=_n('view')
_rz(z,eRUE,'class',21,e,s,gg)
_(fIUE,eRUE)
}
var cJUE=_v()
_(oHUE,cJUE)
if(_oz(z,22,e,s,gg)){cJUE.wxVkey=1
var bSUE=_n('view')
_rz(z,bSUE,'class',23,e,s,gg)
var oTUE=_mz(z,'image',['class',24,'mode',1,'src',2],[],e,s,gg)
_(bSUE,oTUE)
var xUUE=_n('view')
_rz(z,xUUE,'class',27,e,s,gg)
var oVUE=_oz(z,28,e,s,gg)
_(xUUE,oVUE)
_(bSUE,xUUE)
var fWUE=_n('view')
_rz(z,fWUE,'class',29,e,s,gg)
var cXUE=_oz(z,30,e,s,gg)
_(fWUE,cXUE)
_(bSUE,fWUE)
var hYUE=_mz(z,'view',['bind:tap',31,'class',1],[],e,s,gg)
var oZUE=_oz(z,33,e,s,gg)
_(hYUE,oZUE)
_(bSUE,hYUE)
_(cJUE,bSUE)
}
fIUE.wxXCkey=1
cJUE.wxXCkey=1
_(aBUE,oHUE)
_(r,aBUE)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_160";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_160();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/my_doctors_new/my_doctors_new.wxml'] = [$gwx_XC_160, './pages/my_doctors_new/my_doctors_new.wxml'];else __wxAppCode__['pages/my_doctors_new/my_doctors_new.wxml'] = $gwx_XC_160( './pages/my_doctors_new/my_doctors_new.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['pages/my_doctors_new/my_doctors_new.wxss'] = setCssToHead([".",[1],"my-doctors-main-container{box-sizing:border-box;display:-webkit-flex;display:flex;-webkit-flex-flow:column nowrap;flex-flow:column nowrap;height:100vh;overflow:hidden;width:100vw}\n.",[1],"tab-header-container{-webkit-align-items:center;align-items:center;border-bottom:1px solid #e7e7e7;display:-webkit-flex;display:flex;-webkit-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-justify-content:center;justify-content:center;width:100%}\n.",[1],"tab-item{color:#323232;-webkit-flex:1 1 0;flex:1 1 0;font-size:",[0,30],";line-height:1;padding:",[0,30]," 0;position:relative;text-align:center}\n.",[1],"doctor-list-scroll-view{box-sizing:border-box;-webkit-flex-grow:1;flex-grow:1;height:1px}\n.",[1],"doctor-list-scroll-view.",[1],"empty-list{background-color:#f7f7f7}\n.",[1],"tab-item.",[1],"selected::after{background:#39d167;border-radius:1.5px;bottom:",[0,14],";content:\x22\x22;height:",[0,6],";left:50%;position:absolute;-webkit-transform:translate(-50%,0);transform:translate(-50%,0);width:",[0,46],"}\n.",[1],"empty-indicator{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-flow:column nowrap;flex-flow:column nowrap;margin-top:",[0,296],";width:100%}\n.",[1],"empty-icon{display:block;width:",[0,312],"}\n.",[1],"empty-text-1{color:#666;font-size:",[0,30],";line-height:1}\n.",[1],"empty-text-2{color:#666;font-size:",[0,26],";line-height:1;margin-top:",[0,16],"}\n.",[1],"button{background:#39d167;border-radius:2px;color:#fff;margin-top:",[0,40],";padding:",[0,22]," 0;text-align:center;width:",[0,466],"}\n.",[1],"padding-placeholder{height:",[0,100],";width:100%}\n",],undefined,{path:"./pages/my_doctors_new/my_doctors_new.wxss"});
}