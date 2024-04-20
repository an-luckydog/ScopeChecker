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
Z([[2,'&&'],[[2,'==='],[[7],[3,'typeName']],[1,'savePhoto']],[[2,'||'],[[2,'==='],[[7],[3,'msgType']],[1,'video']],[[2,'==='],[[7],[3,'msgType']],[1,'image']]]])
Z([[2,'&&'],[[2,'&&'],[[2,'==='],[[7],[3,'typeName']],[1,'withdraw']],[[2,'<'],[[2,'-'],[[7],[3,'nowTime']],[[6],[[7],[3,'messageContent']],[3,'created_time_ms']]],[1,120000]]],[[2,'!'],[[7],[3,'isDoc']]]])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'==='],[[7],[3,'typeName']],[1,'reply']],[[7],[3,'isInEdit']]],[[6],[[6],[[6],[[7],[3,'messageContent']],[3,'content']],[1,0]],[3,'reply_info']]],[[6],[[6],[[6],[[6],[[7],[3,'messageContent']],[3,'content']],[1,0]],[3,'reply_info']],[3,'enable']]])
Z([[2,'==='],[[7],[3,'typeName']],[1,'translate']])
Z([[2,'!'],[[2,'&&'],[[2,'==='],[[7],[3,'msgType']],[1,'file']],[[2,'>'],[[2,'-'],[[7],[3,'nowTime']],[[6],[[7],[3,'messageContent']],[3,'created_time_ms']]],[1,12000]]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_184_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_184_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_184=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_184=true;
var x=['./pages/qa_im/components/message_operation/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_184_1()
var o2IB=_n('view')
_rz(z,o2IB,'class',0,e,s,gg)
var o4IB=_v()
_(o2IB,o4IB)
var f5IB=function(h7IB,c6IB,o8IB,gg){
var o0IB=_v()
_(o8IB,o0IB)
if(_oz(z,5,h7IB,c6IB,gg)){o0IB.wxVkey=1
}
var lAJB=_v()
_(o8IB,lAJB)
if(_oz(z,6,h7IB,c6IB,gg)){lAJB.wxVkey=1
}
var aBJB=_v()
_(o8IB,aBJB)
if(_oz(z,7,h7IB,c6IB,gg)){aBJB.wxVkey=1
}
var tCJB=_v()
_(o8IB,tCJB)
if(_oz(z,8,h7IB,c6IB,gg)){tCJB.wxVkey=1
}
var eDJB=_v()
_(o8IB,eDJB)
if(_oz(z,9,h7IB,c6IB,gg)){eDJB.wxVkey=1
}
o0IB.wxXCkey=1
lAJB.wxXCkey=1
aBJB.wxXCkey=1
tCJB.wxXCkey=1
eDJB.wxXCkey=1
return o8IB
}
o4IB.wxXCkey=2
_2z(z,3,f5IB,e,s,gg,o4IB,'typeName','index','*this')
var x3IB=_v()
_(o2IB,x3IB)
if(_oz(z,10,e,s,gg)){x3IB.wxVkey=1
}
x3IB.wxXCkey=1
_(r,o2IB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_184";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_184();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/qa_im/components/message_operation/index.wxml'] = [$gwx_XC_184, './pages/qa_im/components/message_operation/index.wxml'];else __wxAppCode__['pages/qa_im/components/message_operation/index.wxml'] = $gwx_XC_184( './pages/qa_im/components/message_operation/index.wxml' );
	;__wxRoute = "pages/qa_im/components/message_operation/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/qa_im/components/message_operation/index.js";define("pages/qa_im/components/message_operation/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Component({properties:{messageDialogTypeMap:{type:Array,value:[]},messageDialogLocation:{type:String,value:"right"},messageContent:{type:Object,value:{}},isInEdit:{type:Boolean,value:!1},isDoc:{type:Boolean,value:!1}},data:{nowTime:"",msgType:""},lifetimes:{attached:function(){var e=this.data.messageContent.content,t=void 0===e?[]:e,a=t.length&&t[0].type||"";this.setData({msgType:a,nowTime:Date.parse(new Date)})}},methods:{handleCopy:function(){this.triggerEvent("copy",{messageInfo:this.data.messageContent})},handleSavePhoto:function(){this.triggerEvent("savePhoto",{messageInfo:this.data.messageContent})},handleWithdraw:function(){this.triggerEvent("withdraw",{messageInfo:this.data.messageContent})},handleSaveFile:function(){console.log("trigger download file"),this.triggerEvent("downloadFile",{messageInfo:this.data.messageContent})},handleReply:function(){this.triggerEvent("reply",{messageInfo:this.data.messageContent})},translate:function(){this.triggerEvent("translate",{messageInfo:this.data.messageContent,fromMessageOperator:!0})}}});
},{isPage:false,isComponent:true,currentFile:'pages/qa_im/components/message_operation/index.js'});require("pages/qa_im/components/message_operation/index.js");