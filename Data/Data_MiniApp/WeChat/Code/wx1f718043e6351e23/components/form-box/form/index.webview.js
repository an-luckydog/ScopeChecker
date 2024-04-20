$gwx_XC_16=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_16 || [];
function gz$gwx_XC_16_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_16_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_16_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_16_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'formConf']])
Z([3,'name'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'formType']],[1,'group']])
Z([3,'margin-bottom: 40rpx;'])
Z([[2,'!'],[[6],[[7],[3,'item']],[3,'isHideLabel']]])
Z([3,'form-label'])
Z([[6],[[7],[3,'item']],[3,'required']])
Z([3,'form-require'])
Z([3,'*'])
Z([3,'form-label-text'])
Z([a,[[6],[[7],[3,'item']],[3,'label']]])
Z([3,'child'])
Z([[6],[[7],[3,'item']],[3,'children']])
Z(z[1])
Z([[9],[[8],'formData',[[7],[3,'formData']]],[[8],'formObject',[[7],[3,'child']]]])
Z([3,'formGroup'])
Z([3,'margin-bottom:40rpx;'])
Z([[9],[[8],'formData',[[7],[3,'formData']]],[[8],'formObject',[[7],[3,'item']]]])
Z(z[15])
Z([3,'form-tips-text'])
Z([a,[3,'bottom-bar '],[[7],[3,'mode']]])
Z([[2,'==='],[[7],[3,'mode']],[1,'dialog']])
Z([3,'formSubmit'])
Z([3,'bottom-view  btn-primary btn'])
Z([3,' 提交 '])
Z(z[22])
Z(z[23])
Z([3,'bottom-view btn-primary btn'])
Z([3,'提交'])
Z([[2,'&&'],[[7],[3,'privacy']],[[2,'!'],[[6],[[7],[3,'footer']],[3,'text']]]])
Z([3,'color: #333;font-size: 24rpx;'])
Z([3,'checkchange'])
Z([3,'popcheckbox'])
Z([3,'#006eff'])
Z(z[32])
Z([3,'1'])
Z([3,'我已阅读, 并同意'])
Z([3,'popupin'])
Z([3,'font-weight: bold;color: #006eff;'])
Z([3,'《隐私声明》'])
Z([[2,'&&'],[[6],[[7],[3,'footer']],[3,'text']],[[7],[3,'privacy']]])
Z(z[30])
Z(z[31])
Z(z[32])
Z(z[33])
Z(z[32])
Z(z[35])
Z([3,'jumpPrivicy'])
Z([3,'display: inline-block;text-decoration: underline;vertical-align: middle;line-height: 24px;'])
Z([a,[[6],[[7],[3,'footer']],[3,'text']]])
Z(z[15])
Z([[6],[[7],[3,'formObject']],[3,'isCode']])
Z([3,'codeFieldValid'])
Z([3,'sendCode'])
Z([[6],[[7],[3,'formData']],[[6],[[7],[3,'formObject']],[3,'dependentPropertyName']]])
Z([3,'fieldChange'])
Z([[2,'?:'],[[6],[[7],[3,'formData']],[[6],[[7],[3,'formObject']],[3,'dependentPropertyName']]],[[6],[[6],[[7],[3,'formData']],[[6],[[7],[3,'formObject']],[3,'dependentPropertyName']]],[3,'value']],[1,'']])
Z([[7],[3,'formObject']])
Z([[6],[[6],[[7],[3,'formData']],[[6],[[7],[3,'formObject']],[3,'name']]],[3,'setError']])
Z([3,'doRequest'])
Z(z[55])
Z([3,'getOption'])
Z([3,'initOption'])
Z(z[56])
Z(z[57])
Z(z[58])
Z([3,'closepop'])
Z([[7],[3,'showpop']])
Z([[7],[3,'word']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_16_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_16_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_16=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_16=true;
var x=['./components/form-box/form/index.wxml'];d_[x[0]]={}
d_[x[0]]["formGroup"]=function(e,s,r,gg){
var z=gz$gwx_XC_16_1()
var b=x[0]+':formGroup'
r.wxVkey=b
gg.f=$gdc(f_["./components/form-box/form/index.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,51,e,s,gg)){oB.wxVkey=1
var xC=_mz(z,'form-code-view',['bind:codeFieldValid',52,'bind:sendCode',1,'dependentObject',2],[],e,s,gg)
var oD=_mz(z,'form-group',['bind:fieldChange',55,'dependentValue',1,'formObject',2,'setError',3],[],e,s,gg)
_(xC,oD)
_(oB,xC)
}
else{oB.wxVkey=2
var fE=_mz(z,'form-group',['bind:doRequest',59,'bind:fieldChange',1,'bind:getOption',2,'bind:initOption',3,'dependentValue',4,'formObject',5,'setError',6],[],e,s,gg)
_(oB,fE)
}
oB.wxXCkey=1
oB.wxXCkey=3
oB.wxXCkey=3
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_16_1()
var o8J=_v()
_(r,o8J)
var c9J=function(lAK,o0J,aBK,gg){
var eDK=_v()
_(aBK,eDK)
if(_oz(z,2,lAK,o0J,gg)){eDK.wxVkey=1
var bEK=_n('view')
_rz(z,bEK,'style',3,lAK,o0J,gg)
var oFK=_v()
_(bEK,oFK)
if(_oz(z,4,lAK,o0J,gg)){oFK.wxVkey=1
var xGK=_n('view')
_rz(z,xGK,'class',5,lAK,o0J,gg)
var oHK=_v()
_(xGK,oHK)
if(_oz(z,6,lAK,o0J,gg)){oHK.wxVkey=1
var fIK=_n('view')
_rz(z,fIK,'class',7,lAK,o0J,gg)
var cJK=_oz(z,8,lAK,o0J,gg)
_(fIK,cJK)
_(oHK,fIK)
}
var hKK=_n('view')
_rz(z,hKK,'class',9,lAK,o0J,gg)
var oLK=_oz(z,10,lAK,o0J,gg)
_(hKK,oLK)
_(xGK,hKK)
oHK.wxXCkey=1
_(oFK,xGK)
}
var cMK=_v()
_(bEK,cMK)
var oNK=function(aPK,lOK,tQK,gg){
var bSK=_v()
_(tQK,bSK)
var oTK=_oz(z,15,aPK,lOK,gg)
var xUK=_gd(x[0],oTK,e_,d_)
if(xUK){
var oVK=_1z(z,14,aPK,lOK,gg) || {}
var cur_globalf=gg.f
bSK.wxXCkey=3
xUK(oVK,oVK,bSK,gg)
gg.f=cur_globalf
}
else _w(oTK,x[0],3,377)
return tQK
}
cMK.wxXCkey=2
_2z(z,12,oNK,lAK,o0J,gg,cMK,'child','index','name')
oFK.wxXCkey=1
_(eDK,bEK)
}
else{eDK.wxVkey=2
var fWK=_n('view')
_rz(z,fWK,'style',16,lAK,o0J,gg)
var cXK=_v()
_(fWK,cXK)
var hYK=_oz(z,18,lAK,o0J,gg)
var oZK=_gd(x[0],hYK,e_,d_)
if(oZK){
var c1K=_1z(z,17,lAK,o0J,gg) || {}
var cur_globalf=gg.f
cXK.wxXCkey=3
oZK(c1K,c1K,cXK,gg)
gg.f=cur_globalf
}
else _w(hYK,x[0],3,512)
_(eDK,fWK)
}
eDK.wxXCkey=1
return aBK
}
o8J.wxXCkey=2
_2z(z,0,c9J,e,s,gg,o8J,'item','index','name')
var o2K=_n('view')
_rz(z,o2K,'class',19,e,s,gg)
_(r,o2K)
var l3K=_n('view')
_rz(z,l3K,'class',20,e,s,gg)
var a4K=_v()
_(l3K,a4K)
if(_oz(z,21,e,s,gg)){a4K.wxVkey=1
var t5K=_mz(z,'view',['bindtap',22,'class',1],[],e,s,gg)
var e6K=_oz(z,24,e,s,gg)
_(t5K,e6K)
_(a4K,t5K)
}
else{a4K.wxVkey=2
var b7K=_mz(z,'cover-view',['bindtap',25,'class',1],[],e,s,gg)
var o8K=_n('button')
_rz(z,o8K,'class',27,e,s,gg)
var x9K=_oz(z,28,e,s,gg)
_(o8K,x9K)
_(b7K,o8K)
_(a4K,b7K)
}
a4K.wxXCkey=1
_(r,l3K)
var c6J=_v()
_(r,c6J)
if(_oz(z,29,e,s,gg)){c6J.wxVkey=1
var o0K=_n('view')
_rz(z,o0K,'style',30,e,s,gg)
var fAL=_n('checkbox-group')
_rz(z,fAL,'bindchange',31,e,s,gg)
var cBL=_n('label')
_rz(z,cBL,'for',32,e,s,gg)
var hCL=_mz(z,'checkbox',['color',33,'id',1,'value',2],[],e,s,gg)
_(cBL,hCL)
var oDL=_oz(z,36,e,s,gg)
_(cBL,oDL)
var cEL=_mz(z,'text',['catchtap',37,'style',1],[],e,s,gg)
var oFL=_oz(z,39,e,s,gg)
_(cEL,oFL)
_(cBL,cEL)
_(fAL,cBL)
_(o0K,fAL)
_(c6J,o0K)
}
var h7J=_v()
_(r,h7J)
if(_oz(z,40,e,s,gg)){h7J.wxVkey=1
var lGL=_n('view')
_rz(z,lGL,'style',41,e,s,gg)
var aHL=_n('checkbox-group')
_rz(z,aHL,'bindchange',42,e,s,gg)
var tIL=_n('label')
_rz(z,tIL,'for',43,e,s,gg)
var eJL=_mz(z,'checkbox',['color',44,'id',1,'value',2],[],e,s,gg)
_(tIL,eJL)
var bKL=_mz(z,'text',['catchtap',47,'style',1],[],e,s,gg)
var oLL=_oz(z,49,e,s,gg)
_(bKL,oLL)
_(tIL,bKL)
_(aHL,tIL)
_(lGL,aHL)
_(h7J,lGL)
}
var xML=_mz(z,'popup',['btntap',66,'isShow',1,'word',2],[],e,s,gg)
_(r,xML)
c6J.wxXCkey=1
h7J.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_16";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_16();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/form-box/form/index.wxml'] = [$gwx_XC_16, './components/form-box/form/index.wxml'];else __wxAppCode__['components/form-box/form/index.wxml'] = $gwx_XC_16( './components/form-box/form/index.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['components/form-box/form/index.wxss'] = setCssToHead([".",[1],"form-label-text{box-sizing:border-box;color:#1a1a1a;font-size:",[0,28],";font-weight:700;min-width:",[0,155],";position:relative;text-align:left}\n.",[1],"form-label{line-height:",[0,30],";margin-bottom:",[0,16],"}\n.",[1],"form-require{color:#d84d50;float:left;font-size:",[0,24],";left:0;margin-right:",[0,10],"}\n.",[1],"bottom-bar,.",[1],"form-require{position:relative}\n.",[1],"bottom-view{bottom:0;left:0;position:fixed;z-index:1000}\n.",[1],"bottom-view,.",[1],"btn{height:",[0,96],";width:100%}\n.",[1],"btn{-webkit-align-items:center;align-items:center;border-radius:0;box-shadow:0 -4px 8px rgba(0,0,0,.15);display:-webkit-flex;display:flex;-webkit-flex:1;flex:1;font-size:",[0,32],";font-weight:700;-webkit-justify-content:center;justify-content:center;line-height:1.5;overflow:hidden;padding:0 ",[0,30],"}\n.",[1],"btn::after{content:none}\n.",[1],"btn-default{background:#fff;color:#333}\n.",[1],"btn-primary{background:#006eff;color:#fff}\n.",[1],"btn-primary.",[1],"btn-disabled{background:#999}\n.",[1],"btn-default.",[1],"btn-disabled{background:#f0f0f0}\n.",[1],"bottom-bar.",[1],"dialog .",[1],"bottom-view{position:unset}\n",],undefined,{path:"./components/form-box/form/index.wxss"});
}