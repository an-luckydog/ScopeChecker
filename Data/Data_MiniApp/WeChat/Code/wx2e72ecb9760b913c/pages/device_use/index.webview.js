$gwx_XC_65=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_65 || [];
function gz$gwx_XC_65_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_65_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_65_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_65_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'device-use-wrap'])
Z([[6],[[7],[3,'deviceInfo']],[3,'device_name']])
Z([[6],[[7],[3,'deviceInfo']],[3,'device_image']])
Z([[7],[3,'firstStepIcon']])
Z([[7],[3,'isShowSecondStep']])
Z([1,true])
Z(z[5])
Z(z[4])
Z([[6],[[7],[3,'deviceInfo']],[3,'only_self_ehr']])
Z([[7],[3,'recordInfo']])
Z([3,'您正在使用的设备'])
Z(z[4])
Z([3,'请遵从健康顾问线下指导，规范检测'])
Z([[7],[3,'secondDescImg']])
Z([[7],[3,'secondStepIcon']])
Z([[7],[3,'isShowThirdStep']])
Z([3,'设备正在使用中...'])
Z(z[15])
Z([[7],[3,'thirdStepIcon']])
Z([1,false])
Z([3,'设备使用结束，请查看检测报告'])
Z([[7],[3,'isShowUseBtn']])
Z([3,'fixed-btn-wrap'])
Z([3,'useDevice'])
Z([3,'fixed-btn'])
Z([a,[[7],[3,'btnText']]])
Z([3,'confirmEvent'])
Z([3,'我知道了'])
Z([[7],[3,'isShowDialog']])
Z([3,'dialog-content'])
Z([3,'content'])
Z([a,[[7],[3,'dialogTxt']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_65_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_65_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_65=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_65=true;
var x=['./pages/device_use/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_65_1()
var hSPB=_n('view')
_rz(z,hSPB,'class',0,e,s,gg)
var lWPB=_mz(z,'step',['desc',1,'descImg',1,'icon',2,'isAddPadding',3,'isHighlightDesc',4,'isShowRecord',5,'isUsingDevice',6,'onlySelfEhr',7,'recordInfo',8,'title',9],[],e,s,gg)
_(hSPB,lWPB)
var oTPB=_v()
_(hSPB,oTPB)
if(_oz(z,11,e,s,gg)){oTPB.wxVkey=1
var aXPB=_mz(z,'step',['desc',12,'descImg',1,'icon',2,'isAddPadding',3,'title',4],[],e,s,gg)
_(oTPB,aXPB)
}
var cUPB=_v()
_(hSPB,cUPB)
if(_oz(z,17,e,s,gg)){cUPB.wxVkey=1
var tYPB=_mz(z,'step',['icon',18,'isShowImg',1,'title',2],[],e,s,gg)
_(cUPB,tYPB)
}
var oVPB=_v()
_(hSPB,oVPB)
if(_oz(z,21,e,s,gg)){oVPB.wxVkey=1
var eZPB=_n('view')
_rz(z,eZPB,'class',22,e,s,gg)
var b1PB=_mz(z,'view',['bindtap',23,'class',1],[],e,s,gg)
var o2PB=_oz(z,25,e,s,gg)
_(b1PB,o2PB)
_(eZPB,b1PB)
_(oVPB,eZPB)
}
var x3PB=_mz(z,'cy_modal',['bind:confirmEvent',26,'btnText',1,'show',2],[],e,s,gg)
var o4PB=_mz(z,'view',['class',29,'slot',1],[],e,s,gg)
var f5PB=_oz(z,31,e,s,gg)
_(o4PB,f5PB)
_(x3PB,o4PB)
_(hSPB,x3PB)
oTPB.wxXCkey=1
oTPB.wxXCkey=3
cUPB.wxXCkey=1
cUPB.wxXCkey=3
oVPB.wxXCkey=1
_(r,hSPB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_65";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_65();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/device_use/index.wxml'] = [$gwx_XC_65, './pages/device_use/index.wxml'];else __wxAppCode__['pages/device_use/index.wxml'] = $gwx_XC_65( './pages/device_use/index.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['pages/device_use/index.wxss'] = setCssToHead([".",[1],"device-use-wrap{box-sizing:border-box;min-height:100vh;padding:",[0,46]," ",[0,30]," 0 ",[0,38],";width:100%}\n.",[1],"fixed-btn-wrap{background:#fff;bottom:0;box-shadow:0 2px 9px 0 rgba(0,0,0,.08);box-sizing:border-box;left:0;padding:",[0,16]," ",[0,30]," ",[0,56],";position:fixed;width:100%}\n.",[1],"fixed-btn{background:#39d167;border-radius:",[0,4],";color:#fff;font-size:16px;font-weight:700;line-height:",[0,36],";padding:",[0,26]," 0;text-align:center;width:100%}\n.",[1],"dialog-content{font-size:16px;padding-bottom:",[0,20],"}\n",],undefined,{path:"./pages/device_use/index.wxss"});
}