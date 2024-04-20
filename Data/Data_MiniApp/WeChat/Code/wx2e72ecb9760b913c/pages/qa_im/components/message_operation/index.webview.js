$gwx_XC_184=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_184 || [];
function gz$gwx_XC_184_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_184_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_184_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_184_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'absolute-status '],[[7],[3,'messageDialogLocation']]])
Z([3,'index'])
Z([3,'typeName'])
Z([[7],[3,'messageDialogTypeMap']])
Z([3,'*this'])
Z([[2,'&&'],[[2,'==='],[[7],[3,'typeName']],[1,'copy']],[[2,'==='],[[7],[3,'msgType']],[1,'text']]])
Z([3,'handleCopy'])
Z([3,'status-button'])
Z([3,'复制'])
Z([[2,'&&'],[[2,'==='],[[7],[3,'typeName']],[1,'savePhoto']],[[2,'||'],[[2,'==='],[[7],[3,'msgType']],[1,'video']],[[2,'==='],[[7],[3,'msgType']],[1,'image']]]])
Z([3,'handleSavePhoto'])
Z(z[7])
Z([3,' 保存至相册 '])
Z([[2,'&&'],[[2,'&&'],[[2,'==='],[[7],[3,'typeName']],[1,'withdraw']],[[2,'<'],[[2,'-'],[[7],[3,'nowTime']],[[6],[[7],[3,'messageContent']],[3,'created_time_ms']]],[1,120000]]],[[2,'!'],[[7],[3,'isDoc']]]])
Z([3,'handleWithdraw'])
Z(z[7])
Z([3,' 撤回 '])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'==='],[[7],[3,'typeName']],[1,'reply']],[[7],[3,'isInEdit']]],[[6],[[6],[[6],[[7],[3,'messageContent']],[3,'content']],[1,0]],[3,'reply_info']]],[[6],[[6],[[6],[[6],[[7],[3,'messageContent']],[3,'content']],[1,0]],[3,'reply_info']],[3,'enable']]])
Z([3,'handleReply'])
Z(z[7])
Z([3,' 回复 '])
Z([[2,'==='],[[7],[3,'typeName']],[1,'translate']])
Z([3,'translate'])
Z(z[7])
Z([3,' 转文字 '])
Z([[2,'!'],[[2,'&&'],[[2,'==='],[[7],[3,'msgType']],[1,'file']],[[2,'>'],[[2,'-'],[[7],[3,'nowTime']],[[6],[[7],[3,'messageContent']],[3,'created_time_ms']]],[1,12000]]]])
Z([3,'icon'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_184_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_184_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_184=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_184=true;
var x=['./pages/qa_im/components/message_operation/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_184_1()
var b7FF=_n('view')
_rz(z,b7FF,'class',0,e,s,gg)
var x9FF=_v()
_(b7FF,x9FF)
var o0FF=function(cBGF,fAGF,hCGF,gg){
var cEGF=_v()
_(hCGF,cEGF)
if(_oz(z,5,cBGF,fAGF,gg)){cEGF.wxVkey=1
var eJGF=_mz(z,'view',['bindtap',6,'class',1],[],cBGF,fAGF,gg)
var bKGF=_oz(z,8,cBGF,fAGF,gg)
_(eJGF,bKGF)
_(cEGF,eJGF)
}
var oFGF=_v()
_(hCGF,oFGF)
if(_oz(z,9,cBGF,fAGF,gg)){oFGF.wxVkey=1
var oLGF=_mz(z,'view',['bindtap',10,'class',1],[],cBGF,fAGF,gg)
var xMGF=_oz(z,12,cBGF,fAGF,gg)
_(oLGF,xMGF)
_(oFGF,oLGF)
}
var lGGF=_v()
_(hCGF,lGGF)
if(_oz(z,13,cBGF,fAGF,gg)){lGGF.wxVkey=1
var oNGF=_mz(z,'view',['bindtap',14,'class',1],[],cBGF,fAGF,gg)
var fOGF=_oz(z,16,cBGF,fAGF,gg)
_(oNGF,fOGF)
_(lGGF,oNGF)
}
var aHGF=_v()
_(hCGF,aHGF)
if(_oz(z,17,cBGF,fAGF,gg)){aHGF.wxVkey=1
var cPGF=_mz(z,'view',['bindtap',18,'class',1],[],cBGF,fAGF,gg)
var hQGF=_oz(z,20,cBGF,fAGF,gg)
_(cPGF,hQGF)
_(aHGF,cPGF)
}
var tIGF=_v()
_(hCGF,tIGF)
if(_oz(z,21,cBGF,fAGF,gg)){tIGF.wxVkey=1
var oRGF=_mz(z,'view',['bindtap',22,'class',1],[],cBGF,fAGF,gg)
var cSGF=_oz(z,24,cBGF,fAGF,gg)
_(oRGF,cSGF)
_(tIGF,oRGF)
}
cEGF.wxXCkey=1
oFGF.wxXCkey=1
lGGF.wxXCkey=1
aHGF.wxXCkey=1
tIGF.wxXCkey=1
return hCGF
}
x9FF.wxXCkey=2
_2z(z,3,o0FF,e,s,gg,x9FF,'typeName','index','*this')
var o8FF=_v()
_(b7FF,o8FF)
if(_oz(z,25,e,s,gg)){o8FF.wxVkey=1
var oTGF=_n('view')
_rz(z,oTGF,'class',26,e,s,gg)
_(o8FF,oTGF)
}
o8FF.wxXCkey=1
_(r,b7FF)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_184";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_184();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/qa_im/components/message_operation/index.wxml'] = [$gwx_XC_184, './pages/qa_im/components/message_operation/index.wxml'];else __wxAppCode__['pages/qa_im/components/message_operation/index.wxml'] = $gwx_XC_184( './pages/qa_im/components/message_operation/index.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['pages/qa_im/components/message_operation/index.wxss'] = setCssToHead([".",[1],"absolute-status{background-color:#323534;border-radius:4px;overflow:initial;position:absolute;top:",[0,-84],";width:-webkit-max-content;width:max-content}\n.",[1],"absolute-status .",[1],"icon{border:",[0,15]," solid transparent;border-top-color:#262928;bottom:",[0,-28],";display:block;height:0;left:50%;position:absolute;-webkit-transform:translate(-50%,0);transform:translate(-50%,0);width:0}\n.",[1],"absolute-status .",[1],"status-button{background:#262928;border-radius:4px;color:#fff;font-size:",[0,28],";overflow:hidden;padding:",[0,10]," ",[0,20],"}\n.",[1],"absolute-status .",[1],"status-button:active{background:#323534}\n.",[1],"right{-webkit-justify-content:space-between;justify-content:space-between;right:",[0,30],"}\n.",[1],"left,.",[1],"right{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex}\n.",[1],"left{-webkit-justify-content:flex-start;justify-content:flex-start;left:0}\n",],undefined,{path:"./pages/qa_im/components/message_operation/index.wxss"});
}