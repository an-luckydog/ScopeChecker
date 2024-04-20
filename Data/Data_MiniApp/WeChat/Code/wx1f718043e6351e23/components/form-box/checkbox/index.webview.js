$gwx_XC_11=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_11 || [];
function gz$gwx_XC_11_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_11_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_11_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_11_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'handlerCheckEvent'])
Z([a,[3,'checkbox-item '],[[2,'?:'],[[7],[3,'isChecked']],[1,'active'],[1,'']],[3,' '],[[2,'?:'],[[7],[3,'disabled']],[1,'disabled'],[1,'']]])
Z([[8],'isChecked',[[7],[3,'isChecked']]])
Z([[7],[3,'type']])
Z([3,'checkbox-label'])
Z([a,[3,' '],[[7],[3,'label']],[3,' ']])
Z([3,'radio'])
Z([3,'checkbox-icon checkbox-icon-radio'])
Z([3,'checkbox-icon-radio-inner'])
Z([3,'checkbox'])
Z([3,'checkbox-icon checkbox-icon-chk'])
Z([3,'checkbox-icon-i'])
Z([[2,'!'],[[7],[3,'isChecked']]])
Z([3,'https://mkttencent-1256915710.file.myqcloud.com/saas/cloud-mini/img-icon/icon_form_check.png'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_11_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_11_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_11=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_11=true;
var x=['./components/form-box/checkbox/index.wxml'];d_[x[0]]={}
d_[x[0]]["radio"]=function(e,s,r,gg){
var z=gz$gwx_XC_11_1()
var b=x[0]+':radio'
r.wxVkey=b
gg.f=$gdc(f_["./components/form-box/checkbox/index.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',7,e,s,gg)
var xC=_n('view')
_rz(z,xC,'class',8,e,s,gg)
_(oB,xC)
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[0]]["checkbox"]=function(e,s,r,gg){
var z=gz$gwx_XC_11_1()
var b=x[0]+':checkbox'
r.wxVkey=b
gg.f=$gdc(f_["./components/form-box/checkbox/index.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',10,e,s,gg)
var xC=_mz(z,'image',['class',11,'hidden',1,'src',2],[],e,s,gg)
_(oB,xC)
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_11_1()
var t1H=_mz(z,'view',['bindtap',0,'class',1],[],e,s,gg)
var e2H=_v()
_(t1H,e2H)
var b3H=_oz(z,3,e,s,gg)
var o4H=_gd(x[0],b3H,e_,d_)
if(o4H){
var x5H=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
e2H.wxXCkey=3
o4H(x5H,x5H,e2H,gg)
gg.f=cur_globalf
}
else _w(b3H,x[0],2,130)
var o6H=_n('view')
_rz(z,o6H,'class',4,e,s,gg)
var f7H=_oz(z,5,e,s,gg)
_(o6H,f7H)
_(t1H,o6H)
_(r,t1H)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_11";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_11();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/form-box/checkbox/index.wxml'] = [$gwx_XC_11, './components/form-box/checkbox/index.wxml'];else __wxAppCode__['components/form-box/checkbox/index.wxml'] = $gwx_XC_11( './components/form-box/checkbox/index.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['components/form-box/checkbox/index.wxss'] = setCssToHead([".",[1],"checkbox-item{-webkit-align-items:center;align-items:center;box-sizing:border-box;color:#303030;display:-webkit-flex;display:flex;font-size:",[0,24],";font-weight:700;height:100%;-webkit-justify-content:flex-start;justify-content:flex-start;line-height:",[0,30],";width:100%}\n.",[1],"checkbox-item.",[1],"disabled{opacity:.6}\n.",[1],"checkbox-label{box-sizing:border-box;-webkit-flex:1;flex:1;line-height:",[0,41],";overflow:hidden}\n.",[1],"checkbox-icon{border:2px solid #bbb;border-radius:5px;box-sizing:border-box;margin-right:",[0,24],";position:relative;transition:background .1s,border .1s}\n.",[1],"checkbox-icon,.",[1],"checkbox-icon-i{display:block;height:",[0,41],";width:",[0,41],"}\n.",[1],"checkbox-icon-i{left:-2px;margin:0;position:absolute;top:-2px}\n.",[1],"checkbox-item.",[1],"active\x3e.",[1],"checkbox-icon{background:#0052d9;border-color:#0052d9}\n.",[1],"checkbox-icon-radio{border-radius:50%;padding:",[0,6],"}\n.",[1],"checkbox-item.",[1],"active\x3e.",[1],"checkbox-icon-radio{background:transparent;border-color:#0052d9}\n.",[1],"checkbox-icon-radio-inner{background:transparent;border-radius:50%;height:100%;transition:background .1s;width:100%}\n.",[1],"checkbox-item.",[1],"active .",[1],"checkbox-icon-radio-inner{background:#0052d9}\n",],undefined,{path:"./components/form-box/checkbox/index.wxss"});
}