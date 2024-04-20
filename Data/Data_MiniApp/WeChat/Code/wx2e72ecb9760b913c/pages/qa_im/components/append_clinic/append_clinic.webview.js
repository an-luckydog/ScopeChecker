$gwx_XC_178=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_178 || [];
function gz$gwx_XC_178_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_178_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_178_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_178_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page-container-main-body'])
Z([3,'title-text'])
Z([3,' 追加相近科室 '])
Z([3,'info-text'])
Z([3,' 系统发现下列科室医生也可回复您，追加更多科室（无需付费），医生响应更快 '])
Z([3,'clinic-list-holder'])
Z([3,'border-holder'])
Z([[7],[3,'clinicList']])
Z([3,'clinic_no'])
Z([3,'single-clinic'])
Z([3,'toggleClinic'])
Z([a,[3,'single-clinic-content '],[[2,'?:'],[[2,'==='],[[2,'+'],[[7],[3,'index']],[1,1]],[[6],[[7],[3,'clinicList']],[3,'length']]],[1,'last'],[1,'']]])
Z([[6],[[7],[3,'item']],[3,'clinic_no']])
Z([3,'clinic-name'])
Z([a,[[6],[[7],[3,'item']],[3,'clinic_name']]])
Z([3,'select-icon'])
Z([3,'aspectFill'])
Z([[2,'?:'],[[6],[[7],[3,'item']],[3,'is_select']],[1,'https://staff.chunyu.mobi/@/media/images/2023/03/15/5551/1800c8250b98_w48_h48_.png'],[1,'https://staff.chunyu.mobi/@/media/images/2023/03/15/ca95/a33fbf3355e3_w48_h48_.png']])
Z([3,'bottom-button-group'])
Z([3,'cancel'])
Z([3,'bottom-button'])
Z([3,'不追加'])
Z([3,'confirm'])
Z([3,'bottom-button select'])
Z([3,'确认追加'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_178_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_178_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_178=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_178=true;
var x=['./pages/qa_im/components/append_clinic/append_clinic.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_178_1()
var oJBF=_n('view')
_rz(z,oJBF,'class',0,e,s,gg)
var xKBF=_n('view')
_rz(z,xKBF,'class',1,e,s,gg)
var oLBF=_oz(z,2,e,s,gg)
_(xKBF,oLBF)
_(oJBF,xKBF)
var fMBF=_n('view')
_rz(z,fMBF,'class',3,e,s,gg)
var cNBF=_oz(z,4,e,s,gg)
_(fMBF,cNBF)
_(oJBF,fMBF)
var hOBF=_n('view')
_rz(z,hOBF,'class',5,e,s,gg)
var oPBF=_n('view')
_rz(z,oPBF,'class',6,e,s,gg)
var cQBF=_v()
_(oPBF,cQBF)
var oRBF=function(aTBF,lSBF,tUBF,gg){
var bWBF=_n('view')
_rz(z,bWBF,'class',9,aTBF,lSBF,gg)
var oXBF=_mz(z,'view',['bind:tap',10,'class',1,'data-clinic-no',2],[],aTBF,lSBF,gg)
var xYBF=_n('text')
_rz(z,xYBF,'class',13,aTBF,lSBF,gg)
var oZBF=_oz(z,14,aTBF,lSBF,gg)
_(xYBF,oZBF)
_(oXBF,xYBF)
var f1BF=_mz(z,'image',['class',15,'mode',1,'src',2],[],aTBF,lSBF,gg)
_(oXBF,f1BF)
_(bWBF,oXBF)
_(tUBF,bWBF)
return tUBF
}
cQBF.wxXCkey=2
_2z(z,7,oRBF,e,s,gg,cQBF,'item','index','clinic_no')
_(hOBF,oPBF)
_(oJBF,hOBF)
var c2BF=_n('view')
_rz(z,c2BF,'class',18,e,s,gg)
var h3BF=_mz(z,'view',['bind:tap',19,'class',1],[],e,s,gg)
var o4BF=_oz(z,21,e,s,gg)
_(h3BF,o4BF)
_(c2BF,h3BF)
var c5BF=_mz(z,'view',['bind:tap',22,'class',1],[],e,s,gg)
var o6BF=_oz(z,24,e,s,gg)
_(c5BF,o6BF)
_(c2BF,c5BF)
_(oJBF,c2BF)
_(r,oJBF)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_178";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_178();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/qa_im/components/append_clinic/append_clinic.wxml'] = [$gwx_XC_178, './pages/qa_im/components/append_clinic/append_clinic.wxml'];else __wxAppCode__['pages/qa_im/components/append_clinic/append_clinic.wxml'] = $gwx_XC_178( './pages/qa_im/components/append_clinic/append_clinic.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['pages/qa_im/components/append_clinic/append_clinic.wxss'] = setCssToHead([".",[1],"title-text{color:#1a1a1a;font-size:",[0,36],";font-weight:700;line-height:1;padding-top:",[0,40],";text-align:center}\n.",[1],"info-text{box-sizing:border-box;color:#666;font-size:",[0,32],";margin-top:",[0,20],";padding:0 ",[0,36]," ",[0,28],";width:100%}\n.",[1],"clinic-list-holder{padding:0 ",[0,30]," ",[0,30],"}\n.",[1],"border-holder{border-radius:4px;overflow:hidden}\n.",[1],"single-clinic{background:#f7f7f7;box-sizing:border-box;padding:0 ",[0,50],"}\n.",[1],"single-clinic,.",[1],"single-clinic-content{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-flow:row nowrap;flex-flow:row nowrap;width:100%}\n.",[1],"single-clinic-content{border-bottom:1px solid #e7e7e7;height:",[0,100],"}\n.",[1],"single-clinic-content.",[1],"last{border-bottom:1px solid transparent}\n.",[1],"clinic-name{color:#323232;font-size:",[0,32],"}\n.",[1],"select-icon{display:block;height:",[0,32],";margin-left:auto;width:",[0,32],"}\n.",[1],"bottom-button-group{-webkit-align-items:center;align-items:center;box-shadow:0 2px 9px 0 rgba(0,0,0,.08);box-sizing:border-box;display:-webkit-flex;display:flex;-webkit-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-justify-content:space-between;justify-content:space-between;padding:",[0,16]," ",[0,30]," calc(5px + env(safe-area-inset-bottom));width:100%}\n.",[1],"bottom-button{background-color:#fff;border:1px solid #e7e7e7;border-radius:2px;color:#666;-webkit-flex:0 0 ",[0,332],";flex:0 0 ",[0,332],";font-size:16px;height:",[0,88],";line-height:",[0,88],";text-align:center;width:",[0,332],"}\n.",[1],"bottom-button.",[1],"select{background-color:#39d167;border:1px solid transparent;color:#fff}\n",],undefined,{path:"./pages/qa_im/components/append_clinic/append_clinic.wxss"});
}