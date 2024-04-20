$gwx_XC_84=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_84 || [];
function gz$gwx_XC_84_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_84_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_84_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_84_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'rprm-wrap-view'])
Z(z[0])
Z([[7],[3,'isTouch']])
Z([3,'canvasResponseArea'])
Z([3,'rprm-touch-view'])
Z([3,'wrpidx_3'])
Z([[6],[[7],[3,'showTipsContent']],[3,'show']])
Z([[2,'&&'],[[7],[3,'sceneId']],[[7],[3,'isHeatmap']]])
Z([[7],[3,'isShowArea']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_84_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_84_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_84=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_84=true;
var x=['./rprm/RAW/wrap/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_84_1()
var l36=_mz(z,'view',['class',0,'id',1],[],e,s,gg)
var e66=_n('slot')
_(l36,e66)
var a46=_v()
_(l36,a46)
if(_oz(z,2,e,s,gg)){a46.wxVkey=1
var b76=_mz(z,'view',['bindtap',3,'class',1,'id',2],[],e,s,gg)
var o86=_v()
_(b76,o86)
if(_oz(z,6,e,s,gg)){o86.wxVkey=1
}
o86.wxXCkey=1
_(a46,b76)
}
else if(_oz(z,7,e,s,gg)){a46.wxVkey=2
}
var t56=_v()
_(l36,t56)
if(_oz(z,8,e,s,gg)){t56.wxVkey=1
}
a46.wxXCkey=1
t56.wxXCkey=1
_(r,l36)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_84";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_84();	if (__vd_version_info__.delayedGwx) __wxAppCode__['rprm/RAW/wrap/index.wxml'] = [$gwx_XC_84, './rprm/RAW/wrap/index.wxml'];else __wxAppCode__['rprm/RAW/wrap/index.wxml'] = $gwx_XC_84( './rprm/RAW/wrap/index.wxml' );
	;__wxRoute = "rprm/RAW/wrap/index";__wxRouteBegin = true;__wxAppCurrentFile__="rprm/RAW/wrap/index.js";define("rprm/RAW/wrap/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../titan.bootstrap.js");var t=global.bc("platform","rprm"),e=require("../titan-scoped-env.js"),a=r(require("./ComponentSizeObserver")),n=r(require("./heatmap")),i=r(require("../lazySystemInfo"));function r(t){return t&&t.__esModule?t:{default:t}}var o=!1,s="",c="https://xapi.weimob.com/api3/applet",h="https://xapi.weimobqa.com/api3/applet",l="test",u="applet-token",p="edf0442958aa46ebaa62b1fbc0449894",d=function(){var t,a,n,i=h,r=c,o=l,s=p,d=u,f={"content-type":"application/json"},m=null===(t=e.wx.getExtConfigSync())||void 0===t||null===(a=t.form)||void 0===a||null===(n=a.basicInfo)||void 0===n?void 0:n.bosId;null!=m&&(f["weimob-bosid"]=String(m));var v="";switch(e.wx.rprm.environment){case"prerelease":case"production":f[d]=s,v=r;break;default:f[d]=o,v=i}return{baseUrl:v,header:f}},f=["rprm-wrap-view","rprm_heat_cvs","rprm-heatmap-data-show"],m="rprmPrivateScene";e.Component({inheritPageContext:!0,behaviors:[a.default],data:{isHeatmap:!1,maxPageDepth:0,isTouch:!1,showTipsContent:{show:!0,percent:0,top:-200},currentShowPoint:{},isShowArea:!1,showArea:{x:0,y:0,index:-20},screenSize:{height:"",width:""},sceneId:"",lines:[],scrollTop:0,pageHeight:0},methods:{hmap:function(){},getWxQRCodeParams:function(){var t=this,a=d(),n=a.baseUrl,i=a.header,r=this.data.sceneId;e.wx.request({url:"".concat(n,"/getWxQRCodeParam"),method:"POST",bypass:!0,header:i,data:{sceneId:r},success:function(e){var a=e.data,n=a.data?a.data:{};"heatmap"!==n.heatmapType&&"touch"!==n.heatmapType||(t.heatmapType=n.heatmapType,s||(s=n.url?n.url.split("?")[0]:""),t.getDetailPoint(n))}})},initCanvas:function(){var t=this,a=new e.Promise((function(a,n){t.createSelectorQuery().select("#rprm_heat_cvs").fields({node:!0,size:!0}).exec((function(i){if(i[0]){var r="unchanged",o=i[0].node;t.canvas=o;var s=e.wx.getSystemInfoSync(),c=s.windowWidth,h=s.windowHeight;o.width!==c&&(o.width=c),o.height!==h&&(o.height=h),t.ctx||(t.ctx=o.getContext("2d"),r="init"),t.setData({"showTipsContent.show":!1,screenSize:{width:c,height:h+t.scrollTop}}),a(r)}else n("获取canvas错误.")}))}));return a.catch((function(){})),a},showToast:function(){e.wx.showToast({title:"操作异常, 请重新尝试",icon:"error",duration:2e3})},getDetailPoint:function(t){var a=this,n=this;if(t.url&&!o){var r=t.url.split("?").length>1,s=this.data.sceneId,c="".concat("/"===t.url[0]?"":"/").concat(t.url).concat(r?"&".concat(m,"=").concat(s):"?".concat(m,"=").concat(s));e.setTimeout((function(){e.wx.reLaunch({url:c,success:function(){o=!0},fail:function(t){}})}))}else e.wx.hideHomeButton({}),n.initCanvas().then((function(){var r=d(),o=r.baseUrl,s=r.header,c=n.heatmapType;"touch"===c?e.wx.request({url:"".concat(o,"/touchDetail"),method:"POST",bypass:!0,data:t,header:s,success:function(t){var e=t.data,r=e.data;if(0==e.errcode){n.setData({pageHeight:a.componentSize.height}),n.onComponentSizeChanged((function(t){t.height!==a.data.pageHeight&&n.setData({pageHeight:a.componentSize.height})}));var o=r||{viewDetails:[],lineDetails:[],uv:0},s=o.viewDetails,c=o.lineDetails,h=o.uv,l=o.maxPageDepth;l=Math.trunc(l*i.default.value.windowWidth/750),(s=s.sort((function(t,e){return t.linePercent-e.linePercent}))).forEach((function(t){t.top=Math.floor((t.depth>=100?100:t.depth)/100*l)})),n.linePercentDetails=c,n.setData({lines:s,maxPageDepth:l,totalUv:h,isTouch:!0})}else n.showToast()}}):"heatmap"===c&&e.wx.request({url:"".concat(o,"/heatDetail"),method:"POST",bypass:!0,data:t,header:s,success:function(t){var a=t.data,i=a.data;if(0!=a.errcode)return n.showToast(),void n.setData({isHeatmap:!1});var r=(i||{elementDetails:[]}).elementDetails,o=void 0===r?[]:r;o.forEach((function(t){t.pointDetails=t.pointDetails.sort((function(t,e){return t.xp===e.xp?t.yp-e.yp:t.xp-e.xp}))})),n.points=o,n.setData({isShowArea:!0});var s=0,c=e.setInterval((function(){n.scrollRender(),(s+=1)>=5&&e.clearInterval(c)}),1e3)}})}))},drawPoint:function(t,e){var a=this,n=t.cX,i=t.cY,r=t.w,o=t.h,s=t.pointDetails,c=n-r/2,h=i-o/2-e;(void 0===s?[]:s).forEach((function(t){var e=t.xp,n=t.yp,i=Math.round(e/100*r),s=Math.round(n/100*o);a.heatmap.addPoint(c+i,h+s)}))},drawLineTips:function(t){var e=(this.linePercentDetails||[]).filter((function(e){return e.linePercent==t.percent}))[0].uv,a=void 0===e?10:e,n=Math.round(a/this.data.totalUv*100);t.y<this.data.pageHeight&&this.setData({showTipsContent:{top:t.y,percent:n,show:!0}})},drawHighlightRect:function(){if(this.currentSelectRect){var t=this.currentSelectRect,e=this.ctx;e.save();var a=t.top,n=t.left,i=t.w,r=t.h;e.strokeStyle="#5a8be7",e.lineWidth=2,e.strokeRect(n,a,i,r),e.restore()}},canvasResponseArea:function(){var t=this,e=arguments[0].detail,a=this.heatmapType,n=this.canvas,i=this.scrollTop,r=this.data.maxPageDepth;if("heatmap"===a){var o=this.canvasCanTap(e),s=this.currentSelectRect;o?(this.currentSelectRect=o,o.elementXpath&&this.createSelectorQuery().select(".rprm-heatmap-data-show").boundingClientRect().exec((function(e){if(e[0]){var a=e[0],r=a.width,s=a.height,c={x1:o.cX-o.w/2,x2:o.cX+o.w/2,y1:o.cY-o.h/2,y2:o.cY+o.h/2},h={x:c.x1,y:c.y2,index:10001};r+c.x1>n.width?(h.x=c.x2-r,s>n.height?h.y=c.y1:h.y=c.y2):s+c.y2>n.height&&(h.y=c.y1-s,r+c.x1>n.width?h.x=c.x2-r:h.x=c.x1),(h.x+r>n.width||h.x<=0)&&(h.x=10),(h.y>n.height+i||h.y<=0)&&(h.y=10),t.setData({showArea:h,currentShowPoint:o})}}))):(this.currentSelectRect=null,this.setData({"showArea.index":-20,isShowTouchArea:!1,currentShowPoint:{}}));var c=this.currentSelectRect;(c&&(!s||c.elementXpath!==s.elementXpath)||s)&&(this.drawHighlightRect(),this.scrollRender())}else if("touch"===a){var h=Math.floor(e.y),l=h/r*100,u=10;if(l>10&&(l=Math.round(l),u=10*Math.round(l/10)),u>100)return;this.drawLineTips({x:0,y:u/100*r,w:80,h:34,percent:u})}},canvasCanTap:function(t){for(var e=t.x,a=t.y,n=null,i=0,r=this.points||[],o=0;o<r.length;o++){var s=r[o],c=s.w/2,h=s.h/2;if(e>=s.cX-c&&e<=s.cX+c&&a>=s.cY-h&&a<=s.cY+h){var l=(s.elementXpath||"").split(",");(null===n||l>=i)&&(i=l,n=s)}}return n},findQuery:function(t){var e=this.getCurrentPage(),a=t.split(","),n=null;if(a.length<=1)n=e.createSelectorQuery();else{var i=0,r=e.selectComponent("#".concat(a[i]));try{for(;r&&i<a.length-2;)r=r.selectComponent("#".concat(a[++i]));n=r.createSelectorQuery()}catch(t){}}return n||e.createSelectorQuery()},getAllPoints:function(t){var a=this,n=this.points,i=void 0===n?[]:n;return new e.Promise((function(e){if(0!==i.length){var n=[],r=0,o=function(){(r+=1)>=i.length&&e(n)};i.forEach((function(e){var i=a.findQuery(e.elementXpath),r="string"==typeof e.elementXpath?e.elementXpath.split(","):[],s=r[r.length-1];-1===f.indexOf(s)?i.select("#".concat(s)).boundingClientRect().exec((function(a){var i=a[0];if(i){var r={cX:i.left+i.width/2,cY:i.top+i.height/2+t,w:i.width,h:i.height,left:i.left,top:i.top};e=Object.assign(e,r),n.push(e)}o()})):o()}))}else e([])}))},getCurrentPage:function(){var t=this.getPageId();return e.getCurrentPages().find((function(e){return e.getPageId()===t}))},scrollRender:function(){var t=this;if("heatmap"===this.heatmapType){if(this.heatmapDataVersion=(this.heatmapDataVersion||0)+1,this.heatmapLock)return;var a=this.heatmapDataVersion;this.heatmapLock=!0,this.initCanvas().then((function(){var i=t.scrollTop,r=void 0===i?0:i,o=t.canvas;t.heatmap||(t.heatmap=new n.default(o,{compInst:t,radius:o.width/25})),t.heatmap.reset(),t.getAllPoints(r).then((function(n){n.forEach((function(e){t.drawPoint(e,r)})),t.heatmap.draw(),t.drawHighlightRect(),t.setData({scrollTop:r}),e.setTimeout((function(){t.heatmapLock=!1,a!==t.heatmapDataVersion&&t.scrollRender()}),200)}))}))}else this.initCanvas()}},lifetimes:{ready:function(){if(!e.wx.rprm.globalConfig.disableHmView){this.scrollTop=0;var t=this.getCurrentPage();if(t){var a=t.options;if((a.scene||a[m])&&(!a.scene||"rprm/heatmap"===t.route)){var n=a.scene?a.scene:a[m]?a[m]:"";this.setData({sceneId:n,isHeatmap:s===t.route});var i=this;if(!s||!1!==this.data.isHeatmap){var r=null;if(this.data.sceneId){var o=this.getCurrentPage(),c=o.onPageScroll;o.onPageScroll=function(){try{var t=arguments[0].scrollTop;i.scrollTop=t,e.clearTimeout(r),r=e.setTimeout((function(){i.scrollRender()}),200)}catch(t){}if("function"==typeof c)return c.apply(this,arguments)},this.getWxQRCodeParams()}}}}}},detached:function(){var t=this.data,e=t.isShowArea,a=t.isTouch;(e||a)&&(s="",o=!1)}}}),global.ec(t);
},{isPage:false,isComponent:true,currentFile:'rprm/RAW/wrap/index.js'});require("rprm/RAW/wrap/index.js");