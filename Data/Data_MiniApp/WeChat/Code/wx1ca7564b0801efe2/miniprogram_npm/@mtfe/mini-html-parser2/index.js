Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t, e, i, s = require("../../../b/helpers/createForOfIteratorHelper"), n = require("../../../b/helpers/typeof"), o = Object.create, r = Object.defineProperty, a = Object.getOwnPropertyDescriptor, h = Object.getOwnPropertyNames, _ = Object.getPrototypeOf, c = Object.prototype.hasOwnProperty, p = function(t, e) {
    return function() {
        return e || t((e = {
            exports: {}
        }).exports, e), e.exports;
    };
}, u = p(function(t, e) {
    e.exports = {
        Text: "text",
        Directive: "directive",
        Comment: "comment",
        Script: "script",
        Style: "style",
        Tag: "tag",
        CDATA: "cdata",
        Doctype: "doctype",
        isTag: function(t) {
            return "tag" === t.type || "script" === t.type || "style" === t.type;
        }
    };
}), f = p(function(t, e) {
    var i = e.exports = {
        get firstChild() {
            var t = this.children;
            return t && t[0] || null;
        },
        get lastChild() {
            var t = this.children;
            return t && t[t.length - 1] || null;
        },
        get nodeType() {
            return n[this.type] || n.element;
        }
    }, s = {
        tagName: "name",
        childNodes: "children",
        parentNode: "parent",
        previousSibling: "prev",
        nextSibling: "next",
        nodeValue: "data"
    }, n = {
        element: 1,
        text: 3,
        cdata: 4,
        comment: 8
    };
    Object.keys(s).forEach(function(t) {
        var e = s[t];
        Object.defineProperty(i, t, {
            get: function() {
                return this[e] || null;
            },
            set: function(t) {
                return this[e] = t, t;
            }
        });
    });
}), l = p(function(t, e) {
    var i = f(), s = e.exports = Object.create(i), n = {
        tagName: "name"
    };
    Object.keys(n).forEach(function(t) {
        var e = n[t];
        Object.defineProperty(s, t, {
            get: function() {
                return this[e] || null;
            },
            set: function(t) {
                return this[e] = t, t;
            }
        });
    });
}), d = p(function(t, e) {
    var i = u(), s = /\s+/g, o = f(), r = l();
    function a(t, e, i) {
        "object" == n(t) ? (i = e, e = t, t = null) : "function" == typeof e && (i = e, 
        e = h), this._callback = t, this._options = e || h, this._elementCB = i, this.dom = [], 
        this._done = !1, this._tagStack = [], this._parser = this._parser || null;
    }
    var h = {
        normalizeWhitespace: !1,
        withStartIndices: !1,
        withEndIndices: !1
    };
    a.prototype.onparserinit = function(t) {
        this._parser = t;
    }, a.prototype.onreset = function() {
        a.call(this, this._callback, this._options, this._elementCB);
    }, a.prototype.onend = function() {
        this._done || (this._done = !0, this._parser = null, this._handleCallback(null));
    }, a.prototype._handleCallback = a.prototype.onerror = function(t) {
        if ("function" == typeof this._callback) this._callback(t, this.dom); else if (t) throw t;
    }, a.prototype.onclosetag = function() {
        var t = this._tagStack.pop();
        this._options.withEndIndices && t && (t.endIndex = this._parser.endIndex), this._elementCB && this._elementCB(t);
    }, a.prototype._createDomElement = function(t) {
        if (!this._options.withDomLvl1) return t;
        var e;
        for (var i in e = "tag" === t.type ? Object.create(r) : Object.create(o), t) t.hasOwnProperty(i) && (e[i] = t[i]);
        return e;
    }, a.prototype._addDomElement = function(t) {
        var e = this._tagStack[this._tagStack.length - 1], i = e ? e.children : this.dom, s = i[i.length - 1];
        t.next = null, this._options.withStartIndices && (t.startIndex = this._parser.startIndex), 
        this._options.withEndIndices && (t.endIndex = this._parser.endIndex), s ? (t.prev = s, 
        s.next = t) : t.prev = null, i.push(t), t.parent = e || null;
    }, a.prototype.onopentag = function(t, e) {
        var s = {
            type: "script" === t ? i.Script : "style" === t ? i.Style : i.Tag,
            name: t,
            attribs: e,
            children: []
        }, n = this._createDomElement(s);
        this._addDomElement(n), this._tagStack.push(n);
    }, a.prototype.ontext = function(t) {
        var e, n = this._options.normalizeWhitespace || this._options.ignoreWhitespace;
        if (!this._tagStack.length && this.dom.length && (e = this.dom[this.dom.length - 1]).type === i.Text) n ? e.data = (e.data + t).replace(s, " ") : e.data += t; else if (this._tagStack.length && (e = this._tagStack[this._tagStack.length - 1]) && (e = e.children[e.children.length - 1]) && e.type === i.Text) n ? e.data = (e.data + t).replace(s, " ") : e.data += t; else {
            n && (t = t.replace(s, " "));
            var o = this._createDomElement({
                data: t,
                type: i.Text
            });
            this._addDomElement(o);
        }
    }, a.prototype.oncomment = function(t) {
        var e = this._tagStack[this._tagStack.length - 1];
        if (e && e.type === i.Comment) e.data += t; else {
            var s = {
                data: t,
                type: i.Comment
            }, n = this._createDomElement(s);
            this._addDomElement(n), this._tagStack.push(n);
        }
    }, a.prototype.oncdatastart = function() {
        var t = {
            children: [ {
                data: "",
                type: i.Text
            } ],
            type: i.CDATA
        }, e = this._createDomElement(t);
        this._addDomElement(e), this._tagStack.push(e);
    }, a.prototype.oncommentend = a.prototype.oncdataend = function() {
        this._tagStack.pop();
    }, a.prototype.onprocessinginstruction = function(t, e) {
        var s = this._createDomElement({
            name: t,
            data: e,
            type: i.Directive
        });
        this._addDomElement(s);
    }, e.exports = a;
}), m = p(function(t, e) {
    e.exports = {
        0: 65533,
        128: 8364,
        130: 8218,
        131: 402,
        132: 8222,
        133: 8230,
        134: 8224,
        135: 8225,
        136: 710,
        137: 8240,
        138: 352,
        139: 8249,
        140: 338,
        142: 381,
        145: 8216,
        146: 8217,
        147: 8220,
        148: 8221,
        149: 8226,
        150: 8211,
        151: 8212,
        152: 732,
        153: 8482,
        154: 353,
        155: 8250,
        156: 339,
        158: 382,
        159: 376
    };
}), y = p(function(t, e) {
    var i = m();
    e.exports = function(t) {
        if (t >= 55296 && t <= 57343 || t > 1114111) return "�";
        t in i && (t = i[t]);
        var e = "";
        return t > 65535 && (t -= 65536, e += String.fromCharCode(t >>> 10 & 1023 | 55296), 
        t = 56320 | 1023 & t), e += String.fromCharCode(t);
    };
}), b = p(function(t, e) {
    e.exports = {
        Aacute: "Á",
        aacute: "á",
        Acirc: "Â",
        acirc: "â",
        acute: "´",
        AElig: "Æ",
        aelig: "æ",
        Agrave: "À",
        agrave: "à",
        amp: "&",
        AMP: "&",
        Aring: "Å",
        aring: "å",
        Atilde: "Ã",
        atilde: "ã",
        Auml: "Ä",
        auml: "ä",
        brvbar: "¦",
        Ccedil: "Ç",
        ccedil: "ç",
        cedil: "¸",
        cent: "¢",
        copy: "©",
        COPY: "©",
        curren: "¤",
        deg: "°",
        divide: "÷",
        Eacute: "É",
        eacute: "é",
        Ecirc: "Ê",
        ecirc: "ê",
        Egrave: "È",
        egrave: "è",
        ETH: "Ð",
        eth: "ð",
        Euml: "Ë",
        euml: "ë",
        frac12: "½",
        frac14: "¼",
        frac34: "¾",
        gt: ">",
        GT: ">",
        Iacute: "Í",
        iacute: "í",
        Icirc: "Î",
        icirc: "î",
        iexcl: "¡",
        Igrave: "Ì",
        igrave: "ì",
        iquest: "¿",
        Iuml: "Ï",
        iuml: "ï",
        laquo: "«",
        lt: "<",
        LT: "<",
        macr: "¯",
        micro: "µ",
        middot: "·",
        nbsp: " ",
        not: "¬",
        Ntilde: "Ñ",
        ntilde: "ñ",
        Oacute: "Ó",
        oacute: "ó",
        Ocirc: "Ô",
        ocirc: "ô",
        Ograve: "Ò",
        ograve: "ò",
        ordf: "ª",
        ordm: "º",
        Oslash: "Ø",
        oslash: "ø",
        Otilde: "Õ",
        otilde: "õ",
        Ouml: "Ö",
        ouml: "ö",
        para: "¶",
        plusmn: "±",
        pound: "£",
        quot: '"',
        QUOT: '"',
        raquo: "»",
        reg: "®",
        REG: "®",
        sect: "§",
        shy: "­",
        sup1: "¹",
        sup2: "²",
        sup3: "³",
        szlig: "ß",
        THORN: "Þ",
        thorn: "þ",
        times: "×",
        Uacute: "Ú",
        uacute: "ú",
        Ucirc: "Û",
        ucirc: "û",
        Ugrave: "Ù",
        ugrave: "ù",
        uml: "¨",
        Uuml: "Ü",
        uuml: "ü",
        Yacute: "Ý",
        yacute: "ý",
        yen: "¥",
        yuml: "ÿ"
    };
}), g = p(function(t, e) {
    e.exports = {
        amp: "&",
        apos: "'",
        gt: ">",
        lt: "<",
        quot: '"'
    };
}), x = p(function(t, e) {
    var i = y(), s = {}, n = b(), o = g(), r = 0, a = r++, h = r++, _ = r++, c = r++, p = r++, u = r++, f = r++, l = r++, d = r++, m = r++, x = r++, v = r++, S = r++, C = r++, E = r++, w = r++, A = r++, T = r++, k = r++, I = r++, O = r++, N = r++, L = r++, B = r++, P = r++, M = r++, j = r++, D = r++, z = r++, R = r++, V = r++, q = r++, F = r++, Q = r++, U = r++, H = r++, W = r++, Y = r++, G = r++, K = r++, X = r++, Z = r++, J = r++, $ = r++, tt = r++, et = r++, it = r++, st = r++, nt = r++, ot = r++, rt = r++, at = r++, ht = r++, _t = r++, ct = r++, pt = 0, ut = pt++, ft = pt++, lt = pt++;
    function dt(t) {
        return " " === t || "\n" === t || "\t" === t || "\f" === t || "\r" === t;
    }
    function mt(t, e, i) {
        var s = t.toLowerCase();
        return t === s ? function(t) {
            t === s ? this._state = e : (this._state = i, this._index--);
        } : function(n) {
            n === s || n === t ? this._state = e : (this._state = i, this._index--);
        };
    }
    function yt(t, e) {
        var i = t.toLowerCase();
        return function(s) {
            s === i || s === t ? this._state = e : (this._state = _, this._index--);
        };
    }
    function bt(t, e) {
        this._state = a, this._buffer = "", this._sectionStart = 0, this._index = 0, this._bufferOffset = 0, 
        this._baseState = a, this._special = ut, this._cbs = e, this._running = !0, this._ended = !1, 
        this._xmlMode = !(!t || !t.xmlMode), this._decodeEntities = !(!t || !t.decodeEntities);
    }
    bt.prototype._stateText = function(t) {
        "<" === t ? (this._index > this._sectionStart && this._cbs.ontext(this._getSection()), 
        this._state = h, this._sectionStart = this._index) : this._decodeEntities && this._special === ut && "&" === t && (this._index > this._sectionStart && this._cbs.ontext(this._getSection()), 
        this._baseState = a, this._state = rt, this._sectionStart = this._index);
    }, bt.prototype._stateBeforeTagName = function(t) {
        "/" === t ? this._state = p : "<" === t ? (this._cbs.ontext(this._getSection()), 
        this._sectionStart = this._index) : ">" === t || this._special !== ut || dt(t) ? this._state = a : "!" === t ? (this._state = E, 
        this._sectionStart = this._index + 1) : "?" === t ? (this._state = A, this._sectionStart = this._index + 1) : (this._state = this._xmlMode || "s" !== t && "S" !== t ? _ : V, 
        this._sectionStart = this._index);
    }, bt.prototype._stateInTagName = function(t) {
        ("/" === t || ">" === t || dt(t)) && (this._emitToken("onopentagname"), this._state = l, 
        this._index--);
    }, bt.prototype._stateBeforeCloseingTagName = function(t) {
        dt(t) || (">" === t ? this._state = a : this._special !== ut ? "s" === t || "S" === t ? this._state = q : (this._state = a, 
        this._index--) : (this._state = u, this._sectionStart = this._index));
    }, bt.prototype._stateInCloseingTagName = function(t) {
        (">" === t || dt(t)) && (this._emitToken("onclosetag"), this._state = f, this._index--);
    }, bt.prototype._stateAfterCloseingTagName = function(t) {
        ">" === t && (this._state = a, this._sectionStart = this._index + 1);
    }, bt.prototype._stateBeforeAttributeName = function(t) {
        ">" === t ? (this._cbs.onopentagend(), this._state = a, this._sectionStart = this._index + 1) : "/" === t ? this._state = c : dt(t) || (this._state = d, 
        this._sectionStart = this._index);
    }, bt.prototype._stateInSelfClosingTag = function(t) {
        ">" === t ? (this._cbs.onselfclosingtag(), this._state = a, this._sectionStart = this._index + 1) : dt(t) || (this._state = l, 
        this._index--);
    }, bt.prototype._stateInAttributeName = function(t) {
        ("=" === t || "/" === t || ">" === t || dt(t)) && (this._cbs.onattribname(this._getSection()), 
        this._sectionStart = -1, this._state = m, this._index--);
    }, bt.prototype._stateAfterAttributeName = function(t) {
        "=" === t ? this._state = x : "/" === t || ">" === t ? (this._cbs.onattribend(), 
        this._state = l, this._index--) : dt(t) || (this._cbs.onattribend(), this._state = d, 
        this._sectionStart = this._index);
    }, bt.prototype._stateBeforeAttributeValue = function(t) {
        '"' === t ? (this._state = v, this._sectionStart = this._index + 1) : "'" === t ? (this._state = S, 
        this._sectionStart = this._index + 1) : dt(t) || (this._state = C, this._sectionStart = this._index, 
        this._index--);
    }, bt.prototype._stateInAttributeValueDoubleQuotes = function(t) {
        '"' === t ? (this._emitToken("onattribdata"), this._cbs.onattribend(), this._state = l) : this._decodeEntities && "&" === t && (this._emitToken("onattribdata"), 
        this._baseState = this._state, this._state = rt, this._sectionStart = this._index);
    }, bt.prototype._stateInAttributeValueSingleQuotes = function(t) {
        "'" === t ? (this._emitToken("onattribdata"), this._cbs.onattribend(), this._state = l) : this._decodeEntities && "&" === t && (this._emitToken("onattribdata"), 
        this._baseState = this._state, this._state = rt, this._sectionStart = this._index);
    }, bt.prototype._stateInAttributeValueNoQuotes = function(t) {
        dt(t) || ">" === t ? (this._emitToken("onattribdata"), this._cbs.onattribend(), 
        this._state = l, this._index--) : this._decodeEntities && "&" === t && (this._emitToken("onattribdata"), 
        this._baseState = this._state, this._state = rt, this._sectionStart = this._index);
    }, bt.prototype._stateBeforeDeclaration = function(t) {
        this._state = "[" === t ? N : "-" === t ? T : w;
    }, bt.prototype._stateInDeclaration = function(t) {
        ">" === t && (this._cbs.ondeclaration(this._getSection()), this._state = a, this._sectionStart = this._index + 1);
    }, bt.prototype._stateInProcessingInstruction = function(t) {
        ">" === t && (this._cbs.onprocessinginstruction(this._getSection()), this._state = a, 
        this._sectionStart = this._index + 1);
    }, bt.prototype._stateBeforeComment = function(t) {
        "-" === t ? (this._state = k, this._sectionStart = this._index + 1) : this._state = w;
    }, bt.prototype._stateInComment = function(t) {
        "-" === t && (this._state = I);
    }, bt.prototype._stateAfterComment1 = function(t) {
        this._state = "-" === t ? O : k;
    }, bt.prototype._stateAfterComment2 = function(t) {
        ">" === t ? (this._cbs.oncomment(this._buffer.substring(this._sectionStart, this._index - 2)), 
        this._state = a, this._sectionStart = this._index + 1) : "-" !== t && (this._state = k);
    }, bt.prototype._stateBeforeCdata1 = mt("C", L, w), bt.prototype._stateBeforeCdata2 = mt("D", B, w), 
    bt.prototype._stateBeforeCdata3 = mt("A", P, w), bt.prototype._stateBeforeCdata4 = mt("T", M, w), 
    bt.prototype._stateBeforeCdata5 = mt("A", j, w), bt.prototype._stateBeforeCdata6 = function(t) {
        "[" === t ? (this._state = D, this._sectionStart = this._index + 1) : (this._state = w, 
        this._index--);
    }, bt.prototype._stateInCdata = function(t) {
        "]" === t && (this._state = z);
    }, bt.prototype._stateAfterCdata1 = function(t) {
        this._state = "]" === t ? R : D;
    }, bt.prototype._stateAfterCdata2 = function(t) {
        ">" === t ? (this._cbs.oncdata(this._buffer.substring(this._sectionStart, this._index - 2)), 
        this._state = a, this._sectionStart = this._index + 1) : "]" !== t && (this._state = D);
    }, bt.prototype._stateBeforeSpecial = function(t) {
        "c" === t || "C" === t ? this._state = F : "t" === t || "T" === t ? this._state = J : (this._state = _, 
        this._index--);
    }, bt.prototype._stateBeforeSpecialEnd = function(t) {
        this._special !== ft || "c" !== t && "C" !== t ? this._special !== lt || "t" !== t && "T" !== t ? this._state = a : this._state = it : this._state = Y;
    }, bt.prototype._stateBeforeScript1 = yt("R", Q), bt.prototype._stateBeforeScript2 = yt("I", U), 
    bt.prototype._stateBeforeScript3 = yt("P", H), bt.prototype._stateBeforeScript4 = yt("T", W), 
    bt.prototype._stateBeforeScript5 = function(t) {
        ("/" === t || ">" === t || dt(t)) && (this._special = ft), this._state = _, this._index--;
    }, bt.prototype._stateAfterScript1 = mt("R", G, a), bt.prototype._stateAfterScript2 = mt("I", K, a), 
    bt.prototype._stateAfterScript3 = mt("P", X, a), bt.prototype._stateAfterScript4 = mt("T", Z, a), 
    bt.prototype._stateAfterScript5 = function(t) {
        ">" === t || dt(t) ? (this._special = ut, this._state = u, this._sectionStart = this._index - 6, 
        this._index--) : this._state = a;
    }, bt.prototype._stateBeforeStyle1 = yt("Y", $), bt.prototype._stateBeforeStyle2 = yt("L", tt), 
    bt.prototype._stateBeforeStyle3 = yt("E", et), bt.prototype._stateBeforeStyle4 = function(t) {
        ("/" === t || ">" === t || dt(t)) && (this._special = lt), this._state = _, this._index--;
    }, bt.prototype._stateAfterStyle1 = mt("Y", st, a), bt.prototype._stateAfterStyle2 = mt("L", nt, a), 
    bt.prototype._stateAfterStyle3 = mt("E", ot, a), bt.prototype._stateAfterStyle4 = function(t) {
        ">" === t || dt(t) ? (this._special = ut, this._state = u, this._sectionStart = this._index - 5, 
        this._index--) : this._state = a;
    }, bt.prototype._stateBeforeEntity = mt("#", at, ht), bt.prototype._stateBeforeNumericEntity = mt("X", ct, _t), 
    bt.prototype._parseNamedEntityStrict = function() {
        if (this._sectionStart + 1 < this._index) {
            var t = this._buffer.substring(this._sectionStart + 1, this._index), e = this._xmlMode ? o : s;
            e.hasOwnProperty(t) && (this._emitPartial(e[t]), this._sectionStart = this._index + 1);
        }
    }, bt.prototype._parseLegacyEntity = function() {
        var t = this._sectionStart + 1, e = this._index - t;
        for (e > 6 && (e = 6); e >= 2; ) {
            var i = this._buffer.substr(t, e);
            if (n.hasOwnProperty(i)) return this._emitPartial(n[i]), void (this._sectionStart += e + 1);
            e--;
        }
    }, bt.prototype._stateInNamedEntity = function(t) {
        ";" === t ? (this._parseNamedEntityStrict(), this._sectionStart + 1 < this._index && !this._xmlMode && this._parseLegacyEntity(), 
        this._state = this._baseState) : (t < "a" || t > "z") && (t < "A" || t > "Z") && (t < "0" || t > "9") && (this._xmlMode || this._sectionStart + 1 === this._index || (this._baseState !== a ? "=" !== t && this._parseNamedEntityStrict() : this._parseLegacyEntity()), 
        this._state = this._baseState, this._index--);
    }, bt.prototype._decodeNumericEntity = function(t, e) {
        var s = this._sectionStart + t;
        if (s !== this._index) {
            var n = this._buffer.substring(s, this._index), o = parseInt(n, e);
            this._emitPartial(i(o)), this._sectionStart = this._index;
        } else this._sectionStart--;
        this._state = this._baseState;
    }, bt.prototype._stateInNumericEntity = function(t) {
        ";" === t ? (this._decodeNumericEntity(2, 10), this._sectionStart++) : (t < "0" || t > "9") && (this._xmlMode ? this._state = this._baseState : this._decodeNumericEntity(2, 10), 
        this._index--);
    }, bt.prototype._stateInHexEntity = function(t) {
        ";" === t ? (this._decodeNumericEntity(3, 16), this._sectionStart++) : (t < "a" || t > "f") && (t < "A" || t > "F") && (t < "0" || t > "9") && (this._xmlMode ? this._state = this._baseState : this._decodeNumericEntity(3, 16), 
        this._index--);
    }, bt.prototype._cleanup = function() {
        this._sectionStart < 0 ? (this._buffer = "", this._bufferOffset += this._index, 
        this._index = 0) : this._running && (this._state === a ? (this._sectionStart !== this._index && this._cbs.ontext(this._buffer.substr(this._sectionStart)), 
        this._buffer = "", this._bufferOffset += this._index, this._index = 0) : this._sectionStart === this._index ? (this._buffer = "", 
        this._bufferOffset += this._index, this._index = 0) : (this._buffer = this._buffer.substr(this._sectionStart), 
        this._index -= this._sectionStart, this._bufferOffset += this._sectionStart), this._sectionStart = 0);
    }, bt.prototype.write = function(t) {
        this._ended && this._cbs.onerror(Error(".write() after done!")), this._buffer += t, 
        this._parse();
    }, bt.prototype._parse = function() {
        for (;this._index < this._buffer.length && this._running; ) {
            var t = this._buffer.charAt(this._index);
            this._state === a ? this._stateText(t) : this._state === h ? this._stateBeforeTagName(t) : this._state === _ ? this._stateInTagName(t) : this._state === p ? this._stateBeforeCloseingTagName(t) : this._state === u ? this._stateInCloseingTagName(t) : this._state === f ? this._stateAfterCloseingTagName(t) : this._state === c ? this._stateInSelfClosingTag(t) : this._state === l ? this._stateBeforeAttributeName(t) : this._state === d ? this._stateInAttributeName(t) : this._state === m ? this._stateAfterAttributeName(t) : this._state === x ? this._stateBeforeAttributeValue(t) : this._state === v ? this._stateInAttributeValueDoubleQuotes(t) : this._state === S ? this._stateInAttributeValueSingleQuotes(t) : this._state === C ? this._stateInAttributeValueNoQuotes(t) : this._state === E ? this._stateBeforeDeclaration(t) : this._state === w ? this._stateInDeclaration(t) : this._state === A ? this._stateInProcessingInstruction(t) : this._state === T ? this._stateBeforeComment(t) : this._state === k ? this._stateInComment(t) : this._state === I ? this._stateAfterComment1(t) : this._state === O ? this._stateAfterComment2(t) : this._state === N ? this._stateBeforeCdata1(t) : this._state === L ? this._stateBeforeCdata2(t) : this._state === B ? this._stateBeforeCdata3(t) : this._state === P ? this._stateBeforeCdata4(t) : this._state === M ? this._stateBeforeCdata5(t) : this._state === j ? this._stateBeforeCdata6(t) : this._state === D ? this._stateInCdata(t) : this._state === z ? this._stateAfterCdata1(t) : this._state === R ? this._stateAfterCdata2(t) : this._state === V ? this._stateBeforeSpecial(t) : this._state === q ? this._stateBeforeSpecialEnd(t) : this._state === F ? this._stateBeforeScript1(t) : this._state === Q ? this._stateBeforeScript2(t) : this._state === U ? this._stateBeforeScript3(t) : this._state === H ? this._stateBeforeScript4(t) : this._state === W ? this._stateBeforeScript5(t) : this._state === Y ? this._stateAfterScript1(t) : this._state === G ? this._stateAfterScript2(t) : this._state === K ? this._stateAfterScript3(t) : this._state === X ? this._stateAfterScript4(t) : this._state === Z ? this._stateAfterScript5(t) : this._state === J ? this._stateBeforeStyle1(t) : this._state === $ ? this._stateBeforeStyle2(t) : this._state === tt ? this._stateBeforeStyle3(t) : this._state === et ? this._stateBeforeStyle4(t) : this._state === it ? this._stateAfterStyle1(t) : this._state === st ? this._stateAfterStyle2(t) : this._state === nt ? this._stateAfterStyle3(t) : this._state === ot ? this._stateAfterStyle4(t) : this._state === rt ? this._stateBeforeEntity(t) : this._state === at ? this._stateBeforeNumericEntity(t) : this._state === ht ? this._stateInNamedEntity(t) : this._state === _t ? this._stateInNumericEntity(t) : this._state === ct ? this._stateInHexEntity(t) : this._cbs.onerror(Error("unknown _state"), this._state), 
            this._index++;
        }
        this._cleanup();
    }, bt.prototype.pause = function() {
        this._running = !1;
    }, bt.prototype.resume = function() {
        this._running = !0, this._index < this._buffer.length && this._parse(), this._ended && this._finish();
    }, bt.prototype.end = function(t) {
        this._ended && this._cbs.onerror(Error(".end() after done!")), t && this.write(t), 
        this._ended = !0, this._running && this._finish();
    }, bt.prototype._finish = function() {
        this._sectionStart < this._index && this._handleTrailingData(), this._cbs.onend();
    }, bt.prototype._handleTrailingData = function() {
        var t = this._buffer.substr(this._sectionStart);
        this._state === D || this._state === z || this._state === R ? this._cbs.oncdata(t) : this._state === k || this._state === I || this._state === O ? this._cbs.oncomment(t) : this._state !== ht || this._xmlMode ? this._state !== _t || this._xmlMode ? this._state !== ct || this._xmlMode ? this._state !== _ && this._state !== l && this._state !== x && this._state !== m && this._state !== d && this._state !== S && this._state !== v && this._state !== C && this._state !== u && this._cbs.ontext(t) : (this._decodeNumericEntity(3, 16), 
        this._sectionStart < this._index && (this._state = this._baseState, this._handleTrailingData())) : (this._decodeNumericEntity(2, 10), 
        this._sectionStart < this._index && (this._state = this._baseState, this._handleTrailingData())) : (this._parseLegacyEntity(), 
        this._sectionStart < this._index && (this._state = this._baseState, this._handleTrailingData()));
    }, bt.prototype.reset = function() {
        bt.call(this, {
            xmlMode: this._xmlMode,
            decodeEntities: this._decodeEntities
        }, this._cbs);
    }, bt.prototype.getAbsoluteIndex = function() {
        return this._bufferOffset + this._index;
    }, bt.prototype._getSection = function() {
        return this._buffer.substring(this._sectionStart, this._index);
    }, bt.prototype._emitToken = function(t) {
        this._cbs[t](this._getSection()), this._sectionStart = -1;
    }, bt.prototype._emitPartial = function(t) {
        this._baseState !== a ? this._cbs.onattribdata(t) : this._cbs.ontext(t);
    }, e.exports = bt;
}), v = p(function(t, e) {
    "function" == typeof Object.create ? e.exports = function(t, e) {
        t.super_ = e, t.prototype = Object.create(e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        });
    } : e.exports = function(t, e) {
        t.super_ = e;
        var i = function() {};
        i.prototype = e.prototype, t.prototype = new i(), t.prototype.constructor = t;
    };
}), S = p(function(t, e) {
    var i, s = "object" == ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) ? Reflect : null, o = s && "function" == typeof s.apply ? s.apply : function(t, e, i) {
        return Function.prototype.apply.call(t, e, i);
    };
    i = s && "function" == typeof s.ownKeys ? s.ownKeys : Object.getOwnPropertySymbols ? function(t) {
        return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
    } : function(t) {
        return Object.getOwnPropertyNames(t);
    };
    var r = Number.isNaN || function(t) {
        return t != t;
    };
    function a() {
        a.init.call(this);
    }
    e.exports = a, e.exports.once = function(t, e) {
        return new Promise(function(i, s) {
            function n(i) {
                t.removeListener(e, o), s(i);
            }
            function o() {
                "function" == typeof t.removeListener && t.removeListener("error", n), i([].slice.call(arguments));
            }
            y(t, e, o, {
                once: !0
            }), "error" !== e && function(t, e, i) {
                "function" == typeof t.on && y(t, "error", e, i);
            }(t, n, {
                once: !0
            });
        });
    }, a.EventEmitter = a, a.prototype._events = void 0, a.prototype._eventsCount = 0, 
    a.prototype._maxListeners = void 0;
    var h = 10;
    function _(t) {
        if ("function" != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + n(t));
    }
    function c(t) {
        return void 0 === t._maxListeners ? a.defaultMaxListeners : t._maxListeners;
    }
    function p(t, e, i, s) {
        var n, o, r;
        if (_(i), void 0 === (o = t._events) ? (o = t._events = Object.create(null), t._eventsCount = 0) : (void 0 !== o.newListener && (t.emit("newListener", e, i.listener ? i.listener : i), 
        o = t._events), r = o[e]), void 0 === r) r = o[e] = i, ++t._eventsCount; else if ("function" == typeof r ? r = o[e] = s ? [ i, r ] : [ r, i ] : s ? r.unshift(i) : r.push(i), 
        (n = c(t)) > 0 && r.length > n && !r.warned) {
            r.warned = !0;
            var a = new Error("Possible EventEmitter memory leak detected. " + r.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            a.name = "MaxListenersExceededWarning", a.emitter = t, a.type = e, a.count = r.length, 
            function(t) {
                console && console.warn && console.warn(t);
            }(a);
        }
        return t;
    }
    function u() {
        if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 
        0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
    }
    function f(t, e, i) {
        var s = {
            fired: !1,
            wrapFn: void 0,
            target: t,
            type: e,
            listener: i
        }, n = u.bind(s);
        return n.listener = i, s.wrapFn = n, n;
    }
    function l(t, e, i) {
        var s = t._events;
        if (void 0 === s) return [];
        var n = s[e];
        return void 0 === n ? [] : "function" == typeof n ? i ? [ n.listener || n ] : [ n ] : i ? function(t) {
            for (var e = new Array(t.length), i = 0; i < e.length; ++i) e[i] = t[i].listener || t[i];
            return e;
        }(n) : m(n, n.length);
    }
    function d(t) {
        var e = this._events;
        if (void 0 !== e) {
            var i = e[t];
            if ("function" == typeof i) return 1;
            if (void 0 !== i) return i.length;
        }
        return 0;
    }
    function m(t, e) {
        for (var i = new Array(e), s = 0; s < e; ++s) i[s] = t[s];
        return i;
    }
    function y(t, e, i, s) {
        if ("function" == typeof t.on) s.once ? t.once(e, i) : t.on(e, i); else {
            if ("function" != typeof t.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + n(t));
            t.addEventListener(e, function n(o) {
                s.once && t.removeEventListener(e, n), i(o);
            });
        }
    }
    Object.defineProperty(a, "defaultMaxListeners", {
        enumerable: !0,
        get: function() {
            return h;
        },
        set: function(t) {
            if ("number" != typeof t || t < 0 || r(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
            h = t;
        }
    }), a.init = function() {
        (void 0 === this._events || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), 
        this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
    }, a.prototype.setMaxListeners = function(t) {
        if ("number" != typeof t || t < 0 || r(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
        return this._maxListeners = t, this;
    }, a.prototype.getMaxListeners = function() {
        return c(this);
    }, a.prototype.emit = function(t) {
        for (var e = [], i = 1; i < arguments.length; i++) e.push(arguments[i]);
        var s = "error" === t, n = this._events;
        if (void 0 !== n) s = s && void 0 === n.error; else if (!s) return !1;
        if (s) {
            var r;
            if (e.length > 0 && (r = e[0]), r instanceof Error) throw r;
            var a = new Error("Unhandled error." + (r ? " (" + r.message + ")" : ""));
            throw a.context = r, a;
        }
        var h = n[t];
        if (void 0 === h) return !1;
        if ("function" == typeof h) o(h, this, e); else {
            var _ = h.length, c = m(h, _);
            for (i = 0; i < _; ++i) o(c[i], this, e);
        }
        return !0;
    }, a.prototype.addListener = function(t, e) {
        return p(this, t, e, !1);
    }, a.prototype.on = a.prototype.addListener, a.prototype.prependListener = function(t, e) {
        return p(this, t, e, !0);
    }, a.prototype.once = function(t, e) {
        return _(e), this.on(t, f(this, t, e)), this;
    }, a.prototype.prependOnceListener = function(t, e) {
        return _(e), this.prependListener(t, f(this, t, e)), this;
    }, a.prototype.removeListener = function(t, e) {
        var i, s, n, o, r;
        if (_(e), void 0 === (s = this._events)) return this;
        if (void 0 === (i = s[t])) return this;
        if (i === e || i.listener === e) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete s[t], 
        s.removeListener && this.emit("removeListener", t, i.listener || e)); else if ("function" != typeof i) {
            for (n = -1, o = i.length - 1; o >= 0; o--) if (i[o] === e || i[o].listener === e) {
                r = i[o].listener, n = o;
                break;
            }
            if (n < 0) return this;
            0 === n ? i.shift() : function(t, e) {
                for (;e + 1 < t.length; e++) t[e] = t[e + 1];
                t.pop();
            }(i, n), 1 === i.length && (s[t] = i[0]), void 0 !== s.removeListener && this.emit("removeListener", t, r || e);
        }
        return this;
    }, a.prototype.off = a.prototype.removeListener, a.prototype.removeAllListeners = function(t) {
        var e, i, s;
        if (void 0 === (i = this._events)) return this;
        if (void 0 === i.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), 
        this._eventsCount = 0) : void 0 !== i[t] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete i[t]), 
        this;
        if (0 === arguments.length) {
            var n, o = Object.keys(i);
            for (s = 0; s < o.length; ++s) "removeListener" !== (n = o[s]) && this.removeAllListeners(n);
            return this.removeAllListeners("removeListener"), this._events = Object.create(null), 
            this._eventsCount = 0, this;
        }
        if ("function" == typeof (e = i[t])) this.removeListener(t, e); else if (void 0 !== e) for (s = e.length - 1; s >= 0; s--) this.removeListener(t, e[s]);
        return this;
    }, a.prototype.listeners = function(t) {
        return l(this, t, !0);
    }, a.prototype.rawListeners = function(t) {
        return l(this, t, !1);
    }, a.listenerCount = function(t, e) {
        return "function" == typeof t.listenerCount ? t.listenerCount(e) : d.call(t, e);
    }, a.prototype.listenerCount = d, a.prototype.eventNames = function() {
        return this._eventsCount > 0 ? i(this._events) : [];
    };
}), C = p(function(t, e) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = x(), s = {
        input: !0,
        option: !0,
        optgroup: !0,
        select: !0,
        button: !0,
        datalist: !0,
        textarea: !0
    }, n = {
        tr: {
            tr: !0,
            th: !0,
            td: !0
        },
        th: {
            th: !0
        },
        td: {
            thead: !0,
            th: !0,
            td: !0
        },
        body: {
            head: !0,
            link: !0,
            script: !0
        },
        li: {
            li: !0
        },
        p: {
            p: !0
        },
        h1: {
            p: !0
        },
        h2: {
            p: !0
        },
        h3: {
            p: !0
        },
        h4: {
            p: !0
        },
        h5: {
            p: !0
        },
        h6: {
            p: !0
        },
        select: s,
        input: s,
        output: s,
        button: s,
        datalist: s,
        textarea: s,
        option: {
            option: !0
        },
        optgroup: {
            optgroup: !0
        }
    }, o = {
        __proto__: null,
        area: !0,
        base: !0,
        basefont: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        frame: !0,
        hr: !0,
        img: !0,
        input: !0,
        isindex: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    }, r = {
        __proto__: null,
        math: !0,
        svg: !0
    }, a = {
        __proto__: null,
        mi: !0,
        mo: !0,
        mn: !0,
        ms: !0,
        mtext: !0,
        "annotation-xml": !0,
        foreignObject: !0,
        desc: !0,
        title: !0
    }, h = /\s|\//;
    function _(t, e) {
        this._options = e || {}, this._cbs = t || {}, this._tagname = "", this._attribname = "", 
        this._attribvalue = "", this._attribs = null, this._stack = [], this._foreignContext = [], 
        this.startIndex = 0, this.endIndex = null, this._lowerCaseTagNames = "lowerCaseTags" in this._options ? !!this._options.lowerCaseTags : !this._options.xmlMode, 
        this._lowerCaseAttributeNames = "lowerCaseAttributeNames" in this._options ? !!this._options.lowerCaseAttributeNames : !this._options.xmlMode, 
        this._options.Tokenizer && (i = this._options.Tokenizer), this._tokenizer = new i(this._options, this), 
        this._cbs.onparserinit && this._cbs.onparserinit(this);
    }
    v()(_, S().EventEmitter), _.prototype._updatePosition = function(t) {
        null === this.endIndex ? this._tokenizer._sectionStart <= t ? this.startIndex = 0 : this.startIndex = this._tokenizer._sectionStart - t : this.startIndex = this.endIndex + 1, 
        this.endIndex = this._tokenizer.getAbsoluteIndex();
    }, _.prototype.ontext = function(t) {
        this._updatePosition(1), this.endIndex--, this._cbs.ontext && this._cbs.ontext(t);
    }, _.prototype.onopentagname = function(t) {
        if (this._lowerCaseTagNames && (t = t.toLowerCase()), this._tagname = t, !this._options.xmlMode && t in n) for (var e; (e = this._stack[this._stack.length - 1]) in n[t]; this.onclosetag(e)) ;
        (this._options.xmlMode || !(t in o)) && (this._stack.push(t), t in r ? this._foreignContext.push(!0) : t in a && this._foreignContext.push(!1)), 
        this._cbs.onopentagname && this._cbs.onopentagname(t), this._cbs.onopentag && (this._attribs = {});
    }, _.prototype.onopentagend = function() {
        this._updatePosition(1), this._attribs && (this._cbs.onopentag && this._cbs.onopentag(this._tagname, this._attribs), 
        this._attribs = null), !this._options.xmlMode && this._cbs.onclosetag && this._tagname in o && this._cbs.onclosetag(this._tagname), 
        this._tagname = "";
    }, _.prototype.onclosetag = function(t) {
        if (this._updatePosition(1), this._lowerCaseTagNames && (t = t.toLowerCase()), (t in r || t in a) && this._foreignContext.pop(), 
        !this._stack.length || t in o && !this._options.xmlMode) !this._options.xmlMode && ("br" === t || "p" === t) && (this.onopentagname(t), 
        this._closeCurrentTag()); else {
            var e = this._stack.lastIndexOf(t);
            if (-1 !== e) if (this._cbs.onclosetag) for (e = this._stack.length - e; e--; ) this._cbs.onclosetag(this._stack.pop()); else this._stack.length = e; else "p" === t && !this._options.xmlMode && (this.onopentagname(t), 
            this._closeCurrentTag());
        }
    }, _.prototype.onselfclosingtag = function() {
        this._options.xmlMode || this._options.recognizeSelfClosing || this._foreignContext[this._foreignContext.length - 1] ? this._closeCurrentTag() : this.onopentagend();
    }, _.prototype._closeCurrentTag = function() {
        var t = this._tagname;
        this.onopentagend(), this._stack[this._stack.length - 1] === t && (this._cbs.onclosetag && this._cbs.onclosetag(t), 
        this._stack.pop());
    }, _.prototype.onattribname = function(t) {
        this._lowerCaseAttributeNames && (t = t.toLowerCase()), this._attribname = t;
    }, _.prototype.onattribdata = function(t) {
        this._attribvalue += t;
    }, _.prototype.onattribend = function() {
        this._cbs.onattribute && this._cbs.onattribute(this._attribname, this._attribvalue), 
        this._attribs && !Object.prototype.hasOwnProperty.call(this._attribs, this._attribname) && (this._attribs[this._attribname] = this._attribvalue), 
        this._attribname = "", this._attribvalue = "";
    }, _.prototype._getInstructionName = function(t) {
        var e = t.search(h), i = e < 0 ? t : t.substr(0, e);
        return this._lowerCaseTagNames && (i = i.toLowerCase()), i;
    }, _.prototype.ondeclaration = function(t) {
        if (this._cbs.onprocessinginstruction) {
            var e = this._getInstructionName(t);
            this._cbs.onprocessinginstruction("!" + e, "!" + t);
        }
    }, _.prototype.onprocessinginstruction = function(t) {
        if (this._cbs.onprocessinginstruction) {
            var e = this._getInstructionName(t);
            this._cbs.onprocessinginstruction("?" + e, "?" + t);
        }
    }, _.prototype.oncomment = function(t) {
        this._updatePosition(4), this._cbs.oncomment && this._cbs.oncomment(t), this._cbs.oncommentend && this._cbs.oncommentend();
    }, _.prototype.oncdata = function(t) {
        this._updatePosition(1), this._options.xmlMode || this._options.recognizeCDATA ? (this._cbs.oncdatastart && this._cbs.oncdatastart(), 
        this._cbs.ontext && this._cbs.ontext(t), this._cbs.oncdataend && this._cbs.oncdataend()) : this.oncomment("[CDATA[" + t + "]]");
    }, _.prototype.onerror = function(t) {
        this._cbs.onerror && this._cbs.onerror(t);
    }, _.prototype.onend = function() {
        if (this._cbs.onclosetag) for (var t = this._stack.length; t > 0; this._cbs.onclosetag(this._stack[--t])) ;
        this._cbs.onend && this._cbs.onend();
    }, _.prototype.reset = function() {
        this._cbs.onreset && this._cbs.onreset(), this._tokenizer.reset(), this._tagname = "", 
        this._attribname = "", this._attribs = null, this._stack = [], this._cbs.onparserinit && this._cbs.onparserinit(this);
    }, _.prototype.parseComplete = function(t) {
        this.reset(), this.end(t);
    }, _.prototype.write = function(t) {
        this._tokenizer.write(t);
    }, _.prototype.end = function(t) {
        this._tokenizer.end(t);
    }, _.prototype.pause = function() {
        this._tokenizer.pause();
    }, _.prototype.resume = function() {
        this._tokenizer.resume();
    }, _.prototype.parseChunk = _.prototype.write, _.prototype.done = _.prototype.end, 
    t.default = _, e.exports = t.default;
}), E = p(function(t, e) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(t, e) {
        var n = new i.default(function(t, i) {
            t && (console.error(t), e(t));
            try {
                e(null, r(i));
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                console.error(t), e(t);
            }
        }, {}), o = new s.default(n, {
            xmlMode: !1
        });
        o.write(t), o.done();
    };
    var i = n(d()), s = n(C());
    function n(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function o(t) {
        if (-1 === [ "tag", "text" ].indexOf(t.type)) throw new Error("not supported name " + t.name + " of type " + t.type);
        return "text" === t.type ? {
            type: t.type,
            text: t.data
        } : {
            name: t.name,
            children: r(t.children),
            attrs: t.attribs
        };
    }
    function r(t) {
        return t.map(o);
    }
    e.exports = t.default;
}), w = (t = E(), e = 1, i = null != t ? o(_(t)) : {}, function(t, e, i, o) {
    if (e && "object" == n(e) || "function" == typeof e) {
        var _, p = s(h(e));
        try {
            var u = function() {
                var s = _.value;
                !c.call(t, s) && s !== i && r(t, s, {
                    get: function() {
                        return e[s];
                    },
                    enumerable: !(o = a(e, s)) || o.enumerable
                });
            };
            for (p.s(); !(_ = p.n()).done; ) u();
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            p.e(t);
        } finally {
            p.f();
        }
    }
    return t;
}(!e && t && t.__esModule ? i : r(i, "default", {
    value: t,
    enumerable: !0
}), t)).default;

exports.default = w;