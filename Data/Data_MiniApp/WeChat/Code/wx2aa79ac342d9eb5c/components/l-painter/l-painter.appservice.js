$gwx_XC_7=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_7 || [];
function gz$gwx_XC_7_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_7_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'lime-painter'])
Z([3,'limepainter'])
Z([[7],[3,'a']])
Z([[7],[3,'k']])
Z([[7],[3,'b']])
Z([[7],[3,'r0']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_7_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_7=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_7=true;
var x=['./components/l-painter/l-painter.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_7_1()
var lCB=_mz(z,'view',['class',0,'ref',1],[],e,s,gg)
var aDB=_v()
_(lCB,aDB)
if(_oz(z,2,e,s,gg)){aDB.wxVkey=1
var tEB=_n('view')
_rz(z,tEB,'style',3,e,s,gg)
var eFB=_v()
_(tEB,eFB)
if(_oz(z,4,e,s,gg)){eFB.wxVkey=1
}
else{eFB.wxVkey=2
var bGB=_v()
_(eFB,bGB)
if(_oz(z,5,e,s,gg)){bGB.wxVkey=1
}
bGB.wxXCkey=1
}
eFB.wxXCkey=1
_(aDB,tEB)
}
var oHB=_n('slot')
_(lCB,oHB)
aDB.wxXCkey=1
_(r,lCB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_7";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_7();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/l-painter/l-painter.wxml'] = [$gwx_XC_7, './components/l-painter/l-painter.wxml'];else __wxAppCode__['components/l-painter/l-painter.wxml'] = $gwx_XC_7( './components/l-painter/l-painter.wxml' );
	;__wxRoute = "components/l-painter/l-painter";__wxRouteBegin = true;__wxAppCurrentFile__="components/l-painter/l-painter.js";define("components/l-painter/l-painter.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/regeneratorRuntime"),t=require("../../@babel/runtime/helpers/asyncToGenerator"),n=require("../../common/vendor.js"),r=require("../common/relation.js"),a=require("./props.js"),i=require("./utils.js"),s=require("./painter.js"),c={name:"lime-painter",mixins:[a.props,r.parent("painter"),{}],data:function(){return{use2dCanvas:!1,canvasHeight:150,canvasWidth:null,parentWidth:0,inited:!1,progress:0,firstRender:0,done:!1}},computed:{styles:function(){return"".concat(this.size).concat(this.customStyle||"",";")+(this.hidden&&"position: fixed; left: 1500rpx;")},canvasId:function(){return"l-painter".concat(this._&&this._.uid||this._uid)},size:function(){if(this.boardWidth&&this.boardHeight)return"width:".concat(this.boardWidth,"px; height: ").concat(this.boardHeight,"px;")},dpr:function(){return this.pixelRatio||n.index.getSystemInfoSync().pixelRatio},boardWidth:function(){var e=(this.elements&&this.elements.css||this.elements||this).width,t=void 0===e?0:e,n=i.toPx(t||this.width);return n||Math.max(n,i.toPx(this.canvasWidth))},boardHeight:function(){var e=(this.elements&&this.elements.css||this.elements||this).height,t=void 0===e?0:e,n=i.toPx(t||this.height);return n||Math.max(n,i.toPx(this.canvasHeight))},hasBoard:function(){return this.board&&Object.keys(this.board).length},elements:function(){return this.hasBoard?this.board:JSON.parse(JSON.stringify(this.el))}},created:function(){this.use2dCanvas="2d"===this.type&&i.canIUseCanvas2d()&&!i.isPC},mounted:function(){var n=this;return t(e().mark((function t(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.sleep(30);case 2:return e.next=4,n.getParentWeith();case 4:n.$nextTick((function(){setTimeout((function(){n.$watch("elements",n.watchRender,{deep:!0,immediate:!0})}),30)}));case 5:case"end":return e.stop()}}),t)})))()},unmounted:function(){this.done=!1,this.inited=!1,this.firstRender=0,this.progress=0,this.painter=null,clearTimeout(this.rendertimer)},methods:{watchRender:function(n,r){var a=this;return t(e().mark((function t(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n&&n.views&&(a.firstRender?a.firstRender:n.views.length)&&Object.keys(n).length&&JSON.stringify(n)!=JSON.stringify(r)&&(a.firstRender=1,a.progress=0,a.done=!1,clearTimeout(a.rendertimer),a.rendertimer=setTimeout((function(){a.render(n)}),a.beforeDelay));case 1:case"end":return e.stop()}}),t)})))()},setFilePath:function(n,r){var a=this;return t(e().mark((function t(){var s,c,o;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=n,c=(r||a).pathType,"base64"==(o=void 0===c?a.pathType:c)&&!i.isBase64(n)){e.next=10;break}if(e.t0="url"==o&&i.isBase64(n),!e.t0){e.next=8;break}return e.next=7,i.base64ToPath(n);case 7:s=e.sent;case 8:e.next=13;break;case 10:return e.next=12,i.pathToBase64(n);case 12:s=e.sent;case 13:return r&&r.isEmit&&a.$emit("success",s),e.abrupt("return",s);case 15:case"end":return e.stop()}}),t)})))()},getSize:function(n){var r=this;return t(e().mark((function t(){var a,s,c,o;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.css||n,s=a.width,c=n.css||n,o=c.height,e.t0=r.size,e.t0){e.next=12;break}if(!s&&!o){e.next=10;break}return r.canvasWidth=s||r.canvasWidth,r.canvasHeight=o||r.canvasHeight,e.next=8,i.sleep(30);case 8:e.next=12;break;case 10:return e.next=12,r.getParentWeith();case 12:case"end":return e.stop()}}),t)})))()},canvasToTempFilePathSync:function(e){var t=this;this.stopWatch&&this.stopWatch(),this.stopWatch=this.$watch("done",(function(n){n&&(t.canvasToTempFilePath(e),t.stopWatch&&t.stopWatch())}),{immediate:!0})},getParentWeith:function(){var e=this;return new Promise((function(t){n.index.createSelectorQuery().in(e).select(".lime-painter").boundingClientRect().exec((function(n){var r=n[0]||{},a=r.width,i=r.height;e.parentWidth=Math.ceil(a||0),e.canvasWidth=e.parentWidth||300,e.canvasHeight=i||e.canvasHeight||150,t(n[0])}))}))},render:function(){var n=arguments,r=this;return t(e().mark((function t(){var a,c,o,u,h,d,p,f,v,l,m,x,g;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.length>0&&void 0!==n[0]?n[0]:{},Object.keys(a).length){e.next=3;break}return e.abrupt("return");case 3:return r.progress=0,r.done=!1,e.next=7,r.getSize(a);case 7:return e.next=9,r.getContext();case 9:if(c=e.sent,o=r.use2dCanvas,u=r.boardWidth,h=r.boardHeight,d=r.canvas,p=r.afterDelay,!o||d){e.next=13;break}return e.abrupt("return",Promise.reject(new Error("canvas 没创建")));case 13:return r.boundary={top:0,left:0,width:u,height:h},r.painter=null,r.painter||(f=a.css||a,v=f.width,a.css,!v&&r.parentWidth&&Object.assign(a,{width:r.parentWidth}),l={context:c,canvas:d,width:u,height:h,pixelRatio:r.dpr,useCORS:r.useCORS,createImage:i.getImageInfo.bind(r),performance:r.performance,listen:{onProgress:function(e){r.progress=e,r.$emit("progress",e)},onEffectFail:function(e){r.$emit("faill",e)}}},r.painter=new s.kt(l)),e.next=16,r.painter.source(JSON.parse(JSON.stringify(a)));case 16:return m=e.sent,x=m.width,g=m.height,r.boundary.height=r.canvasHeight=g,r.boundary.width=r.canvasWidth=x,e.next=23,i.sleep(r.sleep);case 23:return e.next=25,r.painter.render();case 25:return e.next=27,new Promise((function(e){return r.$nextTick(e)}));case 27:if(e.t0=o,e.t0){e.next=31;break}return e.next=31,r.canvasDraw();case 31:if(e.t1=p&&o,!e.t1){e.next=35;break}return e.next=35,i.sleep(p);case 35:return r.$emit("done"),r.done=!0,r.isCanvasToTempFilePath&&r.canvasToTempFilePath().then((function(e){r.$emit("success",e.tempFilePath)})).catch((function(e){r.$emit("fail",new Error(JSON.stringify(e)))})),e.abrupt("return",Promise.resolve({ctx:c,draw:r.painter,node:r.node}));case 39:case"end":return e.stop()}}),t)})))()},canvasDraw:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return new Promise((function(n,r){return e.ctx.draw(t,(function(){return setTimeout((function(){return n()}),e.afterDelay)}))}))},getContext:function(){var r=this;return t(e().mark((function t(){var a,i,s;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.canvasWidth){e.next=2;break}return e.abrupt("return",(r.$emit("fail","painter no size"),Promise.reject()));case 2:if(!r.ctx||!r.inited){e.next=4;break}return e.abrupt("return",Promise.resolve(r.ctx));case 4:return a=r.type,i=r.use2dCanvas,r.dpr,r.boardWidth,r.boardHeight,s=function(){return new Promise((function(e){n.index.createSelectorQuery().in(r).select("#".concat(r.canvasId)).boundingClientRect().exec((function(t){if(t){var a=n.index.createCanvasContext(r.canvasId,r);if(r.inited||(r.inited=!0,r.use2dCanvas=!1,r.canvas=t),!a.measureText){var i=function(e){for(var t=0,n=0;n<e.length;n++)e.charCodeAt(n)>0&&e.charCodeAt(n)<128?t++:t+=2;return t};a.measureText=function(e){var t=a.state&&a.state.fontSize||12,n=a.__font;return n&&12==t&&(t=parseInt(n.split(" ")[3],10)),t/=2,{width:i(e)*t}}}r.ctx=a,e(r.ctx)}}))}))},e.abrupt("return",i?new Promise((function(e){n.index.createSelectorQuery().in(r).select("#".concat(r.canvasId)).node().exec((function(t){var n=(t&&t[0]||{}).node;if(n){var i=n.getContext(a);r.inited||(r.inited=!0,r.use2dCanvas=!0,r.canvas=n),r.ctx=i,e(r.ctx)}}))})):s());case 6:case"end":return e.stop()}}),t)})))()},canvasToTempFilePath:function(){var r=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise(function(){var i=t(e().mark((function i(s,c){var o,u,h,d,p,f,v;return e().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(o=r.use2dCanvas,u=r.canvasId,r.dpr,h=r.fileType,d=r.quality,r.boundary,p=Object.assign({canvasId:u,id:u,fileType:h,quality:d},a,{success:function(){var n=t(e().mark((function t(n){var i,c;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.setFilePath(n.tempFilePath||n,a);case 3:i=e.sent,c=Object.assign(n,{tempFilePath:i}),a.success&&a.success(c),s(c),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),r.$emit("fail",e.t0);case 11:case"end":return e.stop()}}),t,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()}),!o){i.next=22;break}if(p.canvas=r.canvas,i.prev=5,f=r.canvas.toDataURL("image/".concat(a.fileType||h).replace(/pg/,"peg"),a.quality||d),!/data:,/.test(f)){i.next=11;break}n.index.canvasToTempFilePath(p,r),i.next=15;break;case 11:return i.next=13,r.setFilePath(f,a);case 13:v=i.sent,a.success&&a.success({tempFilePath:v}),s({tempFilePath:v});case 15:i.next=20;break;case 17:i.prev=17,i.t0=i.catch(5),a.fail&&a.fail(i.t0),c(i.t0);case 20:i.next=23;break;case 22:n.index.canvasToTempFilePath(p,r);case 23:case"end":return i.stop()}}),i,null,[[5,17]])})));return function(e,t){return i.apply(this,arguments)}}())}}},o=n._export_sfc(c,[["render",function(e,t,r,a,i,s){return n.e({a:s.canvasId&&s.size},s.canvasId&&s.size?n.e({b:i.use2dCanvas},i.use2dCanvas?{c:s.canvasId,d:n.s(s.size)}:{e:s.canvasId,f:n.s(s.size),g:s.canvasId,h:s.boardWidth*s.dpr,i:s.boardHeight*s.dpr,j:e.hidpi},{k:n.s(s.styles)}):{})}]]);wx.createComponent(o);
},{isPage:false,isComponent:true,currentFile:'components/l-painter/l-painter.js'});require("components/l-painter/l-painter.js");