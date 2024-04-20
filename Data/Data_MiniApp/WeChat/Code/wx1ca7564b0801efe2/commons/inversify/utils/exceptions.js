Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.tryAndThrowErrorIfStackOverflow = void 0;

exports.tryAndThrowErrorIfStackOverflow = function(r) {
    try {
        return r();
    } catch (r) {
        r = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(r);
        throw r;
    }
};