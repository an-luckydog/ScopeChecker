window.defineDynamicLib("dynamicLib://bd_bcp_sdk_mini",(function(t,r,e,n){t("1",(function(t,r,e,n,i,a,o,u,l,c,s,d,f,m,p,h,v,y,g,b,_,S,C){Page({data:{},onLoad:function(t){this.setData({url:t.url})}})})),t("4",(function(t,r,e,n,i,a,o,u,l,c,s,d,f,m,p,h,v,y,g,b,_,S,C){var x=t(5);r.exports={openIM:x.openHnOrH5}})),t("5",(function(t,r,e,n,i,a,o,u,l,c,s,d,f,m,p,h,v,y,g,b,_,S,C){Object.defineProperty(e,"__esModule",{value:!0});var x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function P(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var n,i,a=[],o=!0,u=!1;try{for(e=e.call(t);!(o=(n=e.next()).done)&&(a.push(n.value),!r||a.length!==r);o=!0);}catch(t){u=!0,i=t}finally{try{o||null==e.return||e.return()}finally{if(u)throw i}}return a}(t,r)||function(t,r){if(!t)return;if("string"==typeof t)return w(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return w(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function A(t){return"undefined"===t&&(t=void 0),t}function I(t){try{return JSON.stringify(t)}catch(t){}}function O(t){return function(t){try{return JSON.parse(t)}catch(t){}}(I(t))}function k(t){return(k="function"==typeof Symbol&&"symbol"===x(Symbol.iterator)?function(t){return void 0===t?"undefined":x(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":x(t)})(t)}function T(t){return new function t(r){var e={},n=(r=r||"").indexOf("#"),i="";-1!==n&&(i=r.substring(n),r=r.substring(0,n));for(var a=r.split("?"),o=a[0],u=(a[1]||"").split("&"),l=0;l<u.length;l++){var c=u[l];if(c){var s=c.split("="),d=s[0],f=s[1]||"";try{f=decodeURIComponent(f)}catch(t){f=s[1]||""}e[d]=f}}var m=o.replace(/\?.*/,"").replace(/^(https?:)?\/\//i,"").replace(/\/.*/,""),p=m.replace(/:\d+$/,""),h=o.replace(/:?\/\/.*/,""),v=o.replace(/^(https?:)?\/\/.*?(\/|$)/i,"");function y(){var t=(h?h+":":"")+"//"+m+v,r=this.params;if(r){var e=[];for(var n in r){var a=r[n];if(null!=a){var o=k(a);if("string"!==o&&"number"!==o)try{a=JSON.stringify(a)}catch(t){continue}e.push(n+"="+encodeURIComponent(a))}}e&&e.length&&(t+="?"+e.join("&"))}return i&&(t+=i),t}v&&(v="/"+v),this.params=e,this.url=r,this.removeParam=function(t){delete this.params[t],this.url=y.call(this)},this.addParam=function(t,r){this.params[t]=r,this.url=y.call(this)},this.getHost=function(){return m},this.getHostname=function(){return p},this.getProtocol=function(){return h},this.getPathname=function(){return v},this.removeHash=function(){i="",this.url=y.call(this)},this.setOrigin=function(r){var e=new t(r);h=e.getProtocol(),p=e.getHostname(),m=e.getHost(),this.url=y.call(this)}}(t)}function H(){this._keyStr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}function D(t){var r=t.imParam,e=void 0===r?{}:r,n=t.ext,i=void 0===n?{}:n,a=t.options,o=void 0===a?{}:a,u=t.globalTradeid,l=t.inviteCache,c={im:{level1:e.level1,level2:A(e.level2),level3:A(e.level3),im_type:e.im_type}},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.question,e="我想咨询";if(r){if("去咨询更多问题"!==r)return e+'"'+r+'"';if(r.indexOf("？")>-1||r.indexOf("?")>-1)return r}var n=t.disease;if(n)return"我想咨询一下"+n;var i=t.doctor;if(i)return"我想咨询一下"+i+"大夫的情况"}(i);s&&(c.preset_message=s);var d=i.init_cards;d instanceof Array&&d.length>0&&(c.init_cards=d);var f=i.init_msg;f&&(c.preset_input={message:f.msg||"",action:f.type||""}),[["appid","appid","xyl_cip"],["channel","channel",""],["imlpAccessId","imlpAccessId",""],["ucid","ucid",""],["tradeid","tradeid",u],["clientSource","clientSource",""],["cuserid","cuserid",""],["localPageType","localPageType",""],["shopId","shopId",""],["merchantId","merchantId",""],["spuId","spuId",""],["productId","productId",""]].forEach((function(t){var r=P(t,3),n=r[0],i=r[1],a=r[2];c[i]=e[n]||a}));[["theme","theme"],["appKey","appKey"],["appName","appName"]].forEach((function(t){var r=P(t,2),e=r[0],n=r[1];o[e]&&(c[n]=o[e])}));var m=e.inviteType;if("smart"===m)c.inviteType=m,c.inviteData=e.inviteText||"";else if("manual"===m&&l[m]){var p=l.manual&&l.manual.length||1,h=(null==e?void 0:e.inviteSeq)||p;h=h<=l.manual.length?h:1;var v=l.manual[h-1];c.inviteType=m,c.inviteData=v.content,c.im={level1:v.level1,level2:A(v.level2),level3:A(v.level3)},c.im.im_type=v.imType}else if(l&&l[m]){var y=l[m][0];c.inviteType=m,c.inviteData=y.content}return c}H.prototype.encode=function(t){var r,e,n,i,a,o,u,l="",c=0;for(t=this._utf8_encode(t);c<t.length;)i=(r=t.charCodeAt(c++))>>2,a=(3&r)<<4|(e=t.charCodeAt(c++))>>4,o=(15&e)<<2|(n=t.charCodeAt(c++))>>6,u=63&n,isNaN(e)?o=u=64:isNaN(n)&&(u=64),l=l+this._keyStr.charAt(i)+this._keyStr.charAt(a)+this._keyStr.charAt(o)+this._keyStr.charAt(u);return l},H.prototype.decode=function(t){var r,e,n,i,a,o,u="",l=0;for(t=t.replace(/[^A-Za-z0-9\+\/\=]/g,"");l<t.length;)r=this._keyStr.indexOf(t.charAt(l++))<<2|(i=this._keyStr.indexOf(t.charAt(l++)))>>4,e=(15&i)<<4|(a=this._keyStr.indexOf(t.charAt(l++)))>>2,n=(3&a)<<6|(o=this._keyStr.indexOf(t.charAt(l++))),u+=String.fromCharCode(r),64!==a&&(u+=String.fromCharCode(e)),64!==o&&(u+=String.fromCharCode(n));return u=this._utf8_decode(u)},H.prototype._utf8_encode=function(t){t=t.replace(/\r\n/g,"\n");for(var r="",e=0;e<t.length;e++){var n=t.charCodeAt(e);n<128?r+=String.fromCharCode(n):n>127&&n<2048?(r+=String.fromCharCode(n>>6|192),r+=String.fromCharCode(63&n|128)):(r+=String.fromCharCode(n>>12|224),r+=String.fromCharCode(n>>6&63|128),r+=String.fromCharCode(63&n|128))}return r},H.prototype._utf8_decode=function(t){for(var r="",e=0,n=0,i=0,a=0;e<t.length;)(n=t.charCodeAt(e))<128?(r+=String.fromCharCode(n),e++):n>191&&n<224?(i=t.charCodeAt(e+1),r+=String.fromCharCode((31&n)<<6|63&i),e+=2):(i=t.charCodeAt(e+1),a=t.charCodeAt(e+2),r+=String.fromCharCode((15&n)<<12|(63&i)<<6|63&a),e+=3);return r};function N(t){var r=t.imParam,e=t.visitParam,n=t.options,i=t.isPopupInit,a=t.ext,o=t.baiduid,u=t.materialData,l=t.openImUrl,c=t.globalTradeid,s=t.inviteCache,d=t.paramsData,f=t.urlParams,m=t.isPreview,p=t.storage,h=t.xst,v=D({imParam:r,ext:a,options:n,globalTradeid:c,inviteCache:s}),y=I(v),g=function(t){var r=t.imParam,e=t.materialData,n=t.urlParams,i=t.isPreview,a=t.baiduid,o=t.storage,u=t.xst,l=t.configstr,c={};if(null!=r&&r.imid)c.imid=r.imid;else if(null!=r&&r.imUrl){var s=T(null==r?void 0:r.imUrl).params;null!=s&&s.imid&&(c.imid=s.imid)}if(!c.imid)return"error-log-noimid";c.config=l,c.from="sdk",i&&(c.preview=1);var d=null==r?void 0:r.fid,f=null==r?void 0:r.ch,m=null==r?void 0:r.zjopen;return d&&(c.fid=d),f&&(c.ch=f),m&&(c.zjopen=m),u&&(c.xst=u),a&&(c.baiduid=a),o&&(c.storage=o),null!=e&&e.params&&((null==e?void 0:e.key)&&(c.key=null==e?void 0:e.key),c.params=e.params),null!=n&&n.imlpFeature&&(c.feature=n.imlpFeature),c}({imParam:r,paramsData:d,materialData:u,urlParams:f,isPreview:m,baiduid:o,storage:p,xst:h,configstr:y=(new H).encode(y)});if("string"==typeof g&&"error-log-noimid"===g)return{error:"error-log-noimid",data:[{type:i?"popupInit":"openIM",data:{imParam:r,visitParam:e}}]};if(l){var b=T(l);return Object.entries(g).forEach((function(t){var r=P(t,2),e=r[0],n=r[1];b.addParam(e,n)})),{url:b.url}}var _=O(g);_.config=v;var S="";null!=u&&u.params&&(S="com");var C="//"+(n.domain||"ada.baidu.com")+"/imlp/"+S+"?"+function(t){t=t||{};var r=[];for(var e in t)t.hasOwnProperty(e)&&r.push(e+"="+encodeURIComponent(t[e]));return r.join("&")}(g);return{url:C=0===C.indexOf("//".concat("ada.baidu.com"))?"https:"+C:"http:"+C,urlParamsJson:_}}function j(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i.openBdboxWebview({module:"imChatHN",action:"entry",parameters:{url:t,sourceType:"swan"},success:function(t){},fail:function(){U(t,r)}})}function U(t,r){i.navigateTo({url:"dynamicLib://"+(r.dynamicLib||"bd_bcp_sdk_mini")+"/pages/cip/cip?url="+encodeURIComponent(t)})}function L(t){try{return!(!i||!i.canIUse("openBdboxWebview"))&&function(t,r){t=t.split("."),r=r.split(".");for(var e=Math.max(t.length,r.length);t.length<e;)t.push("0");for(;r.length<e;)r.push("0");for(var n=0;n<e;n++){var i=parseInt(t[n],10),a=parseInt(r[n],10);if(i>a)return 1;if(i<a)return-1}return 0}(i.getSystemInfoSync().version||"",t)>-1}catch(t){return!1}}e.openHnOrH5=function(t,r,e){!function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};L(r.minHnVersion||"12.21.0.0")?j(t,r):U(t,r)}(N({ext:(null==r?void 0:r.ext)||{},imParam:t,visitParam:r,options:e,xst:(null==e?void 0:e.xst)||(null==r?void 0:r.xst)||"",bd_bxst:(null==e?void 0:e.bd_bxst)||(null==r?void 0:r.bd_bxst)||""}).url,e)}})),window.__swanRoute="dynamicLib://bd_bcp_sdk_mini/pages/cip/cip",window.usingComponents=[],window.usingPluginComponents=[],r("1"),e.exports=function(){return r("4")}}),{}),window.__swanRoute="dynamicLib://bd_bcp_sdk_mini";
//# sourceMappingURL=/output/__dynamicLib__/bd_bcp_sdk_mini/app.js.map