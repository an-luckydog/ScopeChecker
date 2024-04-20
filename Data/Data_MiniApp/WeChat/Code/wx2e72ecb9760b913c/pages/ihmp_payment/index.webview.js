$gwx_XC_134=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_134 || [];
function gz$gwx_XC_134_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_134_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_134_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_134_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!'],[[7],[3,'isLogin']]])
Z([3,'loginSuccess'])
Z([[7],[3,'loading']])
Z([3,'weui-loadmore'])
Z([3,'weui-loading'])
Z([3,'weui-loadmore__tips'])
Z([3,'正在加载'])
Z([[2,'&&'],[[2,'&&'],[[7],[3,'canUseWebView']],[[7],[3,'isLogin']]],[[2,'!'],[[7],[3,'loading']]]])
Z([[7],[3,'paymentUrl']])
Z([3,'tip'])
Z([3,'90'])
Z([3,'info'])
Z([3,'tip-desc'])
Z([3,'您当前版本不支持浏览,请升级微信'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_134_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_134_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_134=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_134=true;
var x=['./pages/ihmp_payment/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_134_1()
var cI7D=_v()
_(r,cI7D)
if(_oz(z,0,e,s,gg)){cI7D.wxVkey=1
var aL7D=_n('cy-authorize-login')
_rz(z,aL7D,'bindloginSuccess',1,e,s,gg)
_(cI7D,aL7D)
}
var oJ7D=_v()
_(r,oJ7D)
if(_oz(z,2,e,s,gg)){oJ7D.wxVkey=1
var tM7D=_n('view')
var eN7D=_n('view')
_rz(z,eN7D,'class',3,e,s,gg)
var bO7D=_n('view')
_rz(z,bO7D,'class',4,e,s,gg)
_(eN7D,bO7D)
var oP7D=_n('view')
_rz(z,oP7D,'class',5,e,s,gg)
var xQ7D=_oz(z,6,e,s,gg)
_(oP7D,xQ7D)
_(eN7D,oP7D)
_(tM7D,eN7D)
_(oJ7D,tM7D)
}
var lK7D=_v()
_(r,lK7D)
if(_oz(z,7,e,s,gg)){lK7D.wxVkey=1
var oR7D=_n('view')
var fS7D=_n('web-view')
_rz(z,fS7D,'src',8,e,s,gg)
_(oR7D,fS7D)
_(lK7D,oR7D)
}
else{lK7D.wxVkey=2
var cT7D=_n('view')
_rz(z,cT7D,'class',9,e,s,gg)
var hU7D=_mz(z,'icon',['size',10,'type',1],[],e,s,gg)
_(cT7D,hU7D)
var oV7D=_n('view')
_rz(z,oV7D,'class',12,e,s,gg)
var cW7D=_oz(z,13,e,s,gg)
_(oV7D,cW7D)
_(cT7D,oV7D)
_(lK7D,cT7D)
}
cI7D.wxXCkey=1
cI7D.wxXCkey=3
oJ7D.wxXCkey=1
lK7D.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_134";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_134();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/ihmp_payment/index.wxml'] = [$gwx_XC_134, './pages/ihmp_payment/index.wxml'];else __wxAppCode__['pages/ihmp_payment/index.wxml'] = $gwx_XC_134( './pages/ihmp_payment/index.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['pages/ihmp_payment/index.wxss'] = setCssToHead([".",[1],"tip{color:#888;font-size:12px;margin-top:150px;text-align:center}\n.",[1],"tip-desc{margin-top:16px}\n",],undefined,{path:"./pages/ihmp_payment/index.wxss"});
}