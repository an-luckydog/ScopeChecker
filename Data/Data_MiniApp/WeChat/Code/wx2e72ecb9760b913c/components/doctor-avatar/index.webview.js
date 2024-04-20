$gwx_XC_26=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_26 || [];
function gz$gwx_XC_26_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_26_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_26_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_26_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'doctor-avatar-holder'])
Z([a,[3,'width: '],[[7],[3,'size']],[3,'; height: '],[[7],[3,'size']]])
Z([3,'avatar-img'])
Z([3,'aspectFill'])
Z([[7],[3,'avatarUrl']])
Z([a,z[1][1],z[1][2],z[1][3],z[1][2]])
Z([[7],[3,'isActive']])
Z([3,'border-image'])
Z(z[3])
Z([[2,'?:'],[[7],[3,'isVip']],[1,'https://resource.chunyu.mobi/@/media/images/2022/08/22/b979/ae8f9133d59b_w150_h150_.png'],[1,'https://resource.chunyu.mobi/@/media/images/2022/08/22/e4a7/fe3a9aa576ee_w195_h195_.png']])
Z([a,z[1][1],z[1][2],z[1][3],z[1][2]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_26_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_26_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_26=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_26=true;
var x=['./components/doctor-avatar/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_26_1()
var lGL=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var tIL=_mz(z,'image',['class',2,'mode',1,'src',2,'style',3],[],e,s,gg)
_(lGL,tIL)
var aHL=_v()
_(lGL,aHL)
if(_oz(z,6,e,s,gg)){aHL.wxVkey=1
var eJL=_mz(z,'image',['class',7,'mode',1,'src',2,'style',3],[],e,s,gg)
_(aHL,eJL)
}
aHL.wxXCkey=1
_(r,lGL)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_26";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_26();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/doctor-avatar/index.wxml'] = [$gwx_XC_26, './components/doctor-avatar/index.wxml'];else __wxAppCode__['components/doctor-avatar/index.wxml'] = $gwx_XC_26( './components/doctor-avatar/index.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['components/doctor-avatar/index.wxss'] = setCssToHead([".",[1],"doctor-avatar-holder{height:",[0,100],";position:relative;width:",[0,100],"}\n.",[1],"border-image{display:block;left:0;position:absolute;top:0;z-index:2}\n.",[1],"avatar-img{border:1px solid #e7e7e7;border-radius:50%;box-sizing:border-box;height:",[0,100],";overflow:hidden;position:relative;width:",[0,100],";z-index:1}\n",],undefined,{path:"./components/doctor-avatar/index.wxss"});
}