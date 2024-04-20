$gwx_XC_10=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_10 || [];
function gz$gwx_XC_10_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_10_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'chk-group'])
Z([[7],[3,'checkList']])
Z([3,'label'])
Z([3,'handleCheck'])
Z([3,'chk-group-item'])
Z([[6],[[7],[3,'item']],[3,'disabled']])
Z([[6],[[7],[3,'item']],[3,'checked']])
Z([[6],[[7],[3,'item']],[3,'label']])
Z([[2,'?:'],[[7],[3,'multiple']],[1,'checkbox'],[1,'radio']])
Z([[7],[3,'index']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_10_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_10=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_10=true;
var x=['./components/form-box/checkbox-group/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_10_1()
var oRH=_n('view')
_rz(z,oRH,'class',0,e,s,gg)
var fSH=_v()
_(oRH,fSH)
var cTH=function(oVH,hUH,cWH,gg){
var lYH=_mz(z,'chkBox',['bindcheckevent',3,'class',1,'disabled',2,'isChecked',3,'label',4,'type',5,'value',6],[],oVH,hUH,gg)
_(cWH,lYH)
return cWH
}
fSH.wxXCkey=4
_2z(z,1,cTH,e,s,gg,fSH,'item','index','label')
_(r,oRH)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_10";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_10();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/form-box/checkbox-group/index.wxml'] = [$gwx_XC_10, './components/form-box/checkbox-group/index.wxml'];else __wxAppCode__['components/form-box/checkbox-group/index.wxml'] = $gwx_XC_10( './components/form-box/checkbox-group/index.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['components/form-box/checkbox-group/index.wxss'] = setCssToHead([".",[1],"chk-group{grid-gap:",[0,38],";-webkit-align-items:stretch;align-items:stretch;display:grid;grid-template-columns:1fr 1fr;margin-top:",[0,12],"}\n.",[1],"chk-group-item{overflow:hidden}\n.",[1],"input-other{border:1px solid #e4e4e4;border-radius:0;height:",[0,60],";line-height:",[0,60],";margin-bottom:",[0,60],";margin-top:",[0,20],";padding:0 ",[0,20],"}\n.",[1],"form-input{border-radius:0;color:#333;display:block;font-size:",[0,24],";height:100%;position:relative;width:100%;z-index:10}\n.",[1],"form-placeholder{color:#999;font-size:",[0,24],";height:",[0,75],";width:100%}\n",],undefined,{path:"./components/form-box/checkbox-group/index.wxss"});
}