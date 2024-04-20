Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = [ "p", "pageUrl", "resUrl", "type", "connectType", "code", "resTime", "reqByte", "resByte", "traceid", "ts", "firCate", "secCate", "content", "ctags", "dump", "subs" ], e = {
    p: "project",
    resUrl: "resourceUrl",
    code: "statusCode",
    resTime: "responsetime",
    reqByte: "requestbyte",
    resByte: "responsebyte",
    ts: "timestamp",
    firCate: "firstCategory",
    secCate: "secondCategory",
    content: "logContent"
}, s = function() {
    function s(s) {
        var r = this;
        s && (t.forEach(function(t) {
            var i = e[t];
            r[t] = void 0 !== s[t] ? s[t] : i && void 0 !== s[i] ? s[i] : "";
        }), this.parse());
    }
    return s.prototype.parse = function() {
        if (this.type = this.type || "ajax", this.connectType = this.connectType || "https", 
        this.reqByte = this.reqByte || "0", this.resByte = this.resByte || "0", this.ts = this.ts || Date.now(), 
        this.ctags = this.ctags || {}, this.subs = this.subs || [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], 
        this.content && "string" != typeof this.content) try {
            this.content = JSON.stringify(this.content);
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            this.content = "";
        }
    }, s;
}();

exports.default = s;