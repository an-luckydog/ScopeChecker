var e = "", t = "", r = {}, s = require("./wxDiscode.js"), n = require("./htmlparser.js"), a = (l("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"), 
l("br,a,code,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video")), o = l("abbr,acronym,applet,b,basefont,bdo,big,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"), i = l("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");

l("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"), 
l("wxxxcode-style,script,style,view,scroll-view,block");

function l(e) {
    for (var t = {}, r = e.split(","), s = 0; s < r.length; s++) t[r[s]] = !0;
    return t;
}

function d(s) {
    var n = [];
    if (0 == e.length || !r) return (d = {
        node: "text"
    }).text = s, o = [ d ];
    s = s.replace(/\[([^\[\]]+)\]/g, ":$1:");
    for (var a = new RegExp("[:]"), o = s.split(a), i = 0; i < o.length; i++) {
        var l = o[i], d = {};
        r[l] ? (d.node = "element", d.tag = "emoji", d.text = r[l], d.baseSrc = t) : (d.node = "text", 
        d.text = l), n.push(d);
    }
    return n;
}

module.exports = {
    html2json: function(e, t) {
        e = function(e) {
            return e.replace(/\r?\n+/g, "").replace(/<!--.*?-->/gi, "").replace(/\/\*.*?\*\//gi, "").replace(/[ ]+</gi, "<");
        }(e = function(e) {
            return e.replace(/<\?xml.*\?>\n/, "").replace(/<.*!doctype.*\>\n/, "").replace(/<.*!DOCTYPE.*\>\n/, "");
        }(e)), e = s.strDiscode(e);
        var r = [], l = {
            node: t,
            nodes: [],
            images: [],
            imageUrls: []
        }, c = 0;
        return n(e, {
            start: function(e, n, d) {
                var u, p = {
                    node: "element",
                    tag: e
                };
                0 === r.length ? (p.index = c.toString(), c += 1) : (void 0 === (u = r[0]).nodes && (u.nodes = []), 
                p.index = u.index + "." + u.nodes.length);
                if (a[e] ? p.tagType = "block" : o[e] ? p.tagType = "inline" : i[e] && (p.tagType = "closeSelf"), 
                0 !== n.length && (p.attr = n.reduce(function(e, t) {
                    var r = t.name, s = t.value;
                    return "class" == r && (p.classStr = s), "style" == r && (p.styleStr = s), s.match(/ /) && (s = s.split(" ")), 
                    e[r] ? Array.isArray(e[r]) ? e[r].push(s) : e[r] = [ e[r], s ] : e[r] = s, e;
                }, {})), "img" === p.tag) {
                    p.imgIndex = l.images.length;
                    var g = p.attr.src;
                    "" == g[0] && g.splice(0, 1), g = s.urlToHttpUrl(g, "https"), p.attr.src = g, p.from = t, 
                    l.images.push(p), l.imageUrls.push(g);
                }
                if ("font" === p.tag) {
                    var m = [ "x-small", "small", "medium", "large", "x-large", "xx-large", "-webkit-xxx-large" ], h = {
                        color: "color",
                        face: "font-family",
                        size: "font-size"
                    };
                    for (var f in p.attr.style || (p.attr.style = []), p.styleStr || (p.styleStr = ""), 
                    h) if (p.attr[f]) {
                        var v = "size" === f ? m[p.attr[f] - 1] : p.attr[f];
                        p.attr.style.push(h[f]), p.attr.style.push(v), p.styleStr += h[f] + ": " + v + ";";
                    }
                }
                ("source" === p.tag && (l.source = p.attr.src), d) ? (void 0 === (u = r[0] || l).nodes && (u.nodes = []), 
                u.nodes.push(p)) : r.unshift(p);
            },
            end: function(e) {
                var t = r.shift();
                if (t.tag !== e && "video" === t.tag && l.source && (t.attr.src = l.source, delete l.source), 
                0 === r.length) l.nodes.push(t); else {
                    var s = r[0];
                    void 0 === s.nodes && (s.nodes = []), s.nodes.push(t);
                }
            },
            chars: function(e) {
                var t = {
                    node: "text",
                    text: e,
                    textArray: d(e)
                };
                if (0 === r.length) t.index = c.toString(), c += 1, l.nodes.push(t); else {
                    var s = r[0];
                    void 0 === s.nodes && (s.nodes = []), t.index = s.index + "." + s.nodes.length, 
                    s.nodes.push(t);
                }
            },
            comment: function(e) {}
        }), l;
    },
    emojisInit: function() {
        var s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/wxParse/emojis/", a = arguments.length > 2 ? arguments[2] : void 0;
        e = s, t = n, r = a;
    }
};