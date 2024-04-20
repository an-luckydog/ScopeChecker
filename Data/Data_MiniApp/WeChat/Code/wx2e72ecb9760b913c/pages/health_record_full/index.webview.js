$gwx_XC_128=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_128 || [];
function gz$gwx_XC_128_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_128_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_128_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_128_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'record-list'])
Z([[7],[3,'record_list']])
Z([[6],[[7],[3,'item']],[3,'id']])
Z([a,[3,'/pages/vip_webview/index?url\x3d'],[[6],[[7],[3,'item']],[3,'redirect_url']]])
Z([3,'item-list'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'sex']],[1,'男']])
Z([3,'item-img'])
Z([3,'https://static.chunyuyisheng.com/@/chunyu_mini/male.png'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'sex']],[1,'女']])
Z(z[7])
Z([3,'https://static.chunyuyisheng.com/@/chunyu_mini/female.png'])
Z([3,'background-size:10px 10px'])
Z([3,'item-info'])
Z([3,'person-name'])
Z([a,[[6],[[7],[3,'item']],[3,'patient_name']],[[2,'?:'],[[6],[[7],[3,'item']],[3,'patient_name']],[[2,'+'],[[2,'+'],[1,'('],[[6],[[7],[3,'item']],[3,'relation']]],[1,')']],[[6],[[7],[3,'item']],[3,'relation']]]])
Z([3,'person-info'])
Z([a,[[6],[[7],[3,'item']],[3,'sex']],[3,', ']])
Z([a,[[6],[[7],[3,'item']],[3,'age']]])
Z([[7],[3,'noData']])
Z([3,'cy-no-result'])
Z([3,'aspectFit'])
Z([3,'https://static.chunyuyisheng.com/@/chunyu_mini/dangan.png'])
Z([3,'width:54px;height:44px;'])
Z([3,'暂无个人档案'])
Z([3,'add-record-container'])
Z([3,'cy-btn'])
Z([3,'../health_record_edit/index?type\x3dadd'])
Z([3,'+添加新档案'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_128_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_128_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_128=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_128=true;
var x=['./pages/health_record_full/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_128_1()
var bEVD=_n('view')
_rz(z,bEVD,'class',0,e,s,gg)
var oFVD=_n('view')
_rz(z,oFVD,'class',1,e,s,gg)
var oHVD=_v()
_(oFVD,oHVD)
var fIVD=function(hKVD,cJVD,oLVD,gg){
var oNVD=_n('navigator')
_rz(z,oNVD,'url',4,hKVD,cJVD,gg)
var lOVD=_n('view')
_rz(z,lOVD,'class',5,hKVD,cJVD,gg)
var aPVD=_v()
_(lOVD,aPVD)
if(_oz(z,6,hKVD,cJVD,gg)){aPVD.wxVkey=1
var tQVD=_mz(z,'image',['class',7,'src',1],[],hKVD,cJVD,gg)
_(aPVD,tQVD)
}
else if(_oz(z,9,hKVD,cJVD,gg)){aPVD.wxVkey=2
var eRVD=_mz(z,'image',['class',10,'src',1,'style',2],[],hKVD,cJVD,gg)
_(aPVD,eRVD)
}
var bSVD=_n('view')
_rz(z,bSVD,'class',13,hKVD,cJVD,gg)
var oTVD=_n('view')
_rz(z,oTVD,'class',14,hKVD,cJVD,gg)
var xUVD=_oz(z,15,hKVD,cJVD,gg)
_(oTVD,xUVD)
_(bSVD,oTVD)
var oVVD=_n('view')
_rz(z,oVVD,'class',16,hKVD,cJVD,gg)
var fWVD=_n('text')
var cXVD=_oz(z,17,hKVD,cJVD,gg)
_(fWVD,cXVD)
_(oVVD,fWVD)
var hYVD=_n('text')
var oZVD=_oz(z,18,hKVD,cJVD,gg)
_(hYVD,oZVD)
_(oVVD,hYVD)
_(bSVD,oVVD)
_(lOVD,bSVD)
aPVD.wxXCkey=1
_(oNVD,lOVD)
_(oLVD,oNVD)
return oLVD
}
oHVD.wxXCkey=2
_2z(z,2,fIVD,e,s,gg,oHVD,'item','index','{{ item.id }}')
var xGVD=_v()
_(oFVD,xGVD)
if(_oz(z,19,e,s,gg)){xGVD.wxVkey=1
var c1VD=_n('view')
_rz(z,c1VD,'class',20,e,s,gg)
var o2VD=_mz(z,'image',['mode',21,'src',1,'style',2],[],e,s,gg)
_(c1VD,o2VD)
var l3VD=_n('view')
var a4VD=_oz(z,24,e,s,gg)
_(l3VD,a4VD)
_(c1VD,l3VD)
_(xGVD,c1VD)
}
xGVD.wxXCkey=1
_(bEVD,oFVD)
var t5VD=_n('view')
_rz(z,t5VD,'class',25,e,s,gg)
var e6VD=_mz(z,'navigator',['class',26,'url',1],[],e,s,gg)
var b7VD=_oz(z,28,e,s,gg)
_(e6VD,b7VD)
_(t5VD,e6VD)
_(bEVD,t5VD)
_(r,bEVD)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_128";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_128();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/health_record_full/index.wxml'] = [$gwx_XC_128, './pages/health_record_full/index.wxml'];else __wxAppCode__['pages/health_record_full/index.wxml'] = $gwx_XC_128( './pages/health_record_full/index.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['pages/health_record_full/index.wxss'] = setCssToHead(["body{background:#f2f5f7;height:100%}\n.",[1],"record-list{-webkit-overflow-scrolling:touch;background:#fff}\n.",[1],"item-list{border-bottom:1px solid #f4f4f4;height:",[0,180],";line-height:1.5;position:relative}\n.",[1],"item-img{background-color:#f1f1f1;border:1px solid #f4f4f4;border-radius:50%;height:",[0,100],";left:",[0,30],";position:absolute;top:",[0,40],";width:",[0,100],"}\n.",[1],"item-info{margin-left:",[0,180],"}\n.",[1],"person-name{color:#323232;font-size:16px;font-weight:700;padding-top:",[0,45],"}\n.",[1],"person-info{color:#666;font-size:13px}\n.",[1],"container{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;height:100%}\n.",[1],"record-list{background:transparent;-webkit-flex:1;flex:1;overflow:auto}\n.",[1],"item-list{background:#fff;margin-bottom:",[0,10],"}\n.",[1],"add-record-container{padding-bottom:",[0,30],"}\n.",[1],"add-record{background:#37cf6b;border-radius:2px;color:#fff;font-size:16px;line-height:1.5;margin:",[0,20]," auto auto;padding:",[0,28]," 0;text-align:center;width:",[0,690],"}\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/health_record_full/index.wxss:1:1)",{path:"./pages/health_record_full/index.wxss"});
}