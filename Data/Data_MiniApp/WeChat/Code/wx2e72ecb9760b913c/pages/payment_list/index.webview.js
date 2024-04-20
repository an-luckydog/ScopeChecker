$gwx_XC_170=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_170 || [];
function gz$gwx_XC_170_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_170_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_170_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_170_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([[7],[3,'paymentList']])
Z([3,'redirect'])
Z([[2,'?:'],[[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'withdraw']],[[6],[[6],[[7],[3,'item']],[3,'related_info']],[3,'id']]],[[2,'+'],[1,'../bill_detail/index?record_id\x3d'],[[6],[[6],[[7],[3,'item']],[3,'related_info']],[3,'id']]],[1,'']])
Z([3,'record'])
Z([[6],[[7],[3,'item']],[3,'record_id']])
Z([3,'record__section'])
Z([3,'record__type'])
Z([a,[[6],[[7],[3,'item']],[3,'type_str']]])
Z([a,[3,'record__num '],[[2,'?:'],[[2,'||'],[[2,'||'],[[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'withdraw']],[[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'refund']]],[[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'prize']]],[1,'record__num--out'],[1,'record__num--in']]])
Z([a,[[6],[[7],[3,'item']],[3,'amount']]])
Z(z[6])
Z([3,'record__time'])
Z([a,[[6],[[7],[3,'item']],[3,'created_time']]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'recharge']])
Z([3,'record__status'])
Z([3,'充值成功'])
Z([[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'related_info']],[3,'status']],[1,'refunded']])
Z(z[15])
Z([3,'提现成功'])
Z([[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'related_info']],[3,'status']],[1,'reject']])
Z(z[15])
Z([3,'提现失败'])
Z([[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'related_info']],[3,'status']],[1,'refunding']])
Z(z[15])
Z([3,'进行中'])
Z([[2,'<'],[[7],[3,'list_num']],[1,20]])
Z([3,'load-more load-more--no'])
Z([3,'没有更多了'])
Z([3,'loadMore'])
Z([3,'load-more'])
Z([3,'weui-loading'])
Z([3,'weui-loadmore__tips'])
Z([3,'正在加载'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_170_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_170_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_170=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_170=true;
var x=['./pages/payment_list/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_170_1()
var o84E=_n('view')
_rz(z,o84E,'class',0,e,s,gg)
var c04E=_v()
_(o84E,c04E)
var hA5E=function(cC5E,oB5E,oD5E,gg){
var aF5E=_mz(z,'navigator',['openType',2,'url',1],[],cC5E,oB5E,gg)
var tG5E=_mz(z,'view',['class',4,'data-recordid',1],[],cC5E,oB5E,gg)
var eH5E=_n('view')
_rz(z,eH5E,'class',6,cC5E,oB5E,gg)
var bI5E=_n('text')
_rz(z,bI5E,'class',7,cC5E,oB5E,gg)
var oJ5E=_oz(z,8,cC5E,oB5E,gg)
_(bI5E,oJ5E)
_(eH5E,bI5E)
var xK5E=_n('text')
_rz(z,xK5E,'class',9,cC5E,oB5E,gg)
var oL5E=_oz(z,10,cC5E,oB5E,gg)
_(xK5E,oL5E)
_(eH5E,xK5E)
_(tG5E,eH5E)
var fM5E=_n('view')
_rz(z,fM5E,'class',11,cC5E,oB5E,gg)
var oR5E=_n('text')
_rz(z,oR5E,'class',12,cC5E,oB5E,gg)
var lS5E=_oz(z,13,cC5E,oB5E,gg)
_(oR5E,lS5E)
_(fM5E,oR5E)
var cN5E=_v()
_(fM5E,cN5E)
if(_oz(z,14,cC5E,oB5E,gg)){cN5E.wxVkey=1
var aT5E=_n('text')
_rz(z,aT5E,'class',15,cC5E,oB5E,gg)
var tU5E=_oz(z,16,cC5E,oB5E,gg)
_(aT5E,tU5E)
_(cN5E,aT5E)
}
var hO5E=_v()
_(fM5E,hO5E)
if(_oz(z,17,cC5E,oB5E,gg)){hO5E.wxVkey=1
var eV5E=_n('text')
_rz(z,eV5E,'class',18,cC5E,oB5E,gg)
var bW5E=_oz(z,19,cC5E,oB5E,gg)
_(eV5E,bW5E)
_(hO5E,eV5E)
}
var oP5E=_v()
_(fM5E,oP5E)
if(_oz(z,20,cC5E,oB5E,gg)){oP5E.wxVkey=1
var oX5E=_n('text')
_rz(z,oX5E,'class',21,cC5E,oB5E,gg)
var xY5E=_oz(z,22,cC5E,oB5E,gg)
_(oX5E,xY5E)
_(oP5E,oX5E)
}
var cQ5E=_v()
_(fM5E,cQ5E)
if(_oz(z,23,cC5E,oB5E,gg)){cQ5E.wxVkey=1
var oZ5E=_n('text')
_rz(z,oZ5E,'class',24,cC5E,oB5E,gg)
var f15E=_oz(z,25,cC5E,oB5E,gg)
_(oZ5E,f15E)
_(cQ5E,oZ5E)
}
cN5E.wxXCkey=1
hO5E.wxXCkey=1
oP5E.wxXCkey=1
cQ5E.wxXCkey=1
_(tG5E,fM5E)
_(aF5E,tG5E)
_(oD5E,aF5E)
return oD5E
}
c04E.wxXCkey=2
_2z(z,1,hA5E,e,s,gg,c04E,'item','index','')
var f94E=_v()
_(o84E,f94E)
if(_oz(z,26,e,s,gg)){f94E.wxVkey=1
var c25E=_n('view')
_rz(z,c25E,'class',27,e,s,gg)
var h35E=_oz(z,28,e,s,gg)
_(c25E,h35E)
_(f94E,c25E)
}
else{f94E.wxVkey=2
var o45E=_mz(z,'view',['bindtap',29,'class',1],[],e,s,gg)
var c55E=_n('view')
var o65E=_n('icon')
_rz(z,o65E,'class',31,e,s,gg)
_(c55E,o65E)
var l75E=_n('text')
_rz(z,l75E,'class',32,e,s,gg)
var a85E=_oz(z,33,e,s,gg)
_(l75E,a85E)
_(c55E,l75E)
_(o45E,c55E)
_(f94E,o45E)
}
f94E.wxXCkey=1
_(r,o84E)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_170";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_170();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/payment_list/index.wxml'] = [$gwx_XC_170, './pages/payment_list/index.wxml'];else __wxAppCode__['pages/payment_list/index.wxml'] = $gwx_XC_170( './pages/payment_list/index.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['pages/payment_list/index.wxss'] = setCssToHead([".",[1],"record{border-bottom:",[0,1]," solid #e7e7e7;padding:",[0,30]," ",[0,30]," ",[0,10],"}\n.",[1],"record__section{display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;-webkit-justify-content:space-between;justify-content:space-between;line-height:1.8}\n.",[1],"record__type{color:#323232}\n.",[1],"record__num,.",[1],"record__type{font-size:16px}\n.",[1],"record__num--out{color:#ff623e}\n.",[1],"record__num--in{color:#37cf6b}\n.",[1],"record__status,.",[1],"record__time{color:#999;font-size:14px}\n.",[1],"load-more{color:#37cf6b;font-size:16px;line-height:2.5;position:relative;text-align:center}\n.",[1],"load-more--no{color:#666}\n.",[1],"more-icon{border-left:4px solid transparent;border-right:4px solid transparent;border-top:6px solid #37cf6b;display:inline-block;height:0;margin-left:",[0,10],";width:0}\n",],undefined,{path:"./pages/payment_list/index.wxss"});
}