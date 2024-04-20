var r = {
    a: "Yz0*6VriskRoU#@^"
};

function a(r) {
    var a = new Array(), n = r.length, s = parseInt(n / 4), f = n % 4, o = 0;
    for (o = 0; o < s; o++) a[o] = e(r.substring(4 * o + 0, 4 * o + 4));
    return f > 0 && (a[o] = e(r.substring(4 * o + 0, n))), a;
}

function e(r) {
    var a = r.length, e = new Array(64);
    if (a < 4) {
        var n = 0, s = 0, f = 0, o = 0;
        for (n = 0; n < a; n++) {
            var c = r.charCodeAt(n);
            for (s = 0; s < 16; s++) {
                var l = 1, t = 0;
                for (t = 15; t > s; t--) l *= 2;
                e[16 * n + s] = parseInt(c / l) % 2;
            }
        }
        for (f = a; f < 4; f++) {
            c = 0;
            for (o = 0; o < 16; o++) {
                l = 1, t = 0;
                for (t = 15; t > o; t--) l *= 2;
                e[16 * f + o] = parseInt(c / l) % 2;
            }
        }
    } else for (n = 0; n < 4; n++) {
        c = r.charCodeAt(n);
        for (s = 0; s < 16; s++) {
            l = 1;
            for (t = 15; t > s; t--) l *= 2;
            e[16 * n + s] = parseInt(c / l) % 2;
        }
    }
    return e;
}

function n(r) {
    var a;
    switch (r) {
      case "0000":
        a = "0";
        break;

      case "0001":
        a = "1";
        break;

      case "0010":
        a = "2";
        break;

      case "0011":
        a = "3";
        break;

      case "0100":
        a = "4";
        break;

      case "0101":
        a = "5";
        break;

      case "0110":
        a = "6";
        break;

      case "0111":
        a = "7";
        break;

      case "1000":
        a = "8";
        break;

      case "1001":
        a = "9";
        break;

      case "1010":
        a = "A";
        break;

      case "1011":
        a = "B";
        break;

      case "1100":
        a = "C";
        break;

      case "1101":
        a = "D";
        break;

      case "1110":
        a = "E";
        break;

      case "1111":
        a = "F";
    }
    return a;
}

function s(r) {
    var a;
    switch (r) {
      case "0":
        a = "0000";
        break;

      case "1":
        a = "0001";
        break;

      case "2":
        a = "0010";
        break;

      case "3":
        a = "0011";
        break;

      case "4":
        a = "0100";
        break;

      case "5":
        a = "0101";
        break;

      case "6":
        a = "0110";
        break;

      case "7":
        a = "0111";
        break;

      case "8":
        a = "1000";
        break;

      case "9":
        a = "1001";
        break;

      case "A":
        a = "1010";
        break;

      case "B":
        a = "1011";
        break;

      case "C":
        a = "1100";
        break;

      case "D":
        a = "1101";
        break;

      case "E":
        a = "1110";
        break;

      case "F":
        a = "1111";
    }
    return a;
}

function f(r) {
    var a = "";
    for (i = 0; i < 4; i++) {
        var e = 0;
        for (j = 0; j < 16; j++) {
            var n = 1;
            for (m = 15; m > j; m--) n *= 2;
            e += r[16 * i + j] * n;
        }
        0 != e && (a += String.fromCharCode(e));
    }
    return a;
}

function o(r, a) {
    var e = A(a), n = v(r), s = new Array(32), f = new Array(32), o = new Array(32), c = 0, l = 0, t = 0, i = 0, g = 0;
    for (t = 0; t < 32; t++) s[t] = n[t], f[t] = n[32 + t];
    for (c = 0; c < 16; c++) {
        for (l = 0; l < 32; l++) o[l] = s[l], s[l] = f[l];
        var h = new Array(48);
        for (i = 0; i < 48; i++) h[i] = e[c][i];
        var p = k(y(b(k(u(f), h))), o);
        for (g = 0; g < 32; g++) f[g] = p[g];
    }
    var I = new Array(64);
    for (c = 0; c < 32; c++) I[c] = f[c], I[32 + c] = s[c];
    return w(I);
}

function c(r, a) {
    var e = A(a), n = v(r), s = new Array(32), f = new Array(32), o = new Array(32), c = 0, l = 0, t = 0, i = 0, g = 0;
    for (t = 0; t < 32; t++) s[t] = n[t], f[t] = n[32 + t];
    for (c = 15; c >= 0; c--) {
        for (l = 0; l < 32; l++) o[l] = s[l], s[l] = f[l];
        var h = new Array(48);
        for (i = 0; i < 48; i++) h[i] = e[c][i];
        var p = k(y(b(k(u(f), h))), o);
        for (g = 0; g < 32; g++) f[g] = p[g];
    }
    var I = new Array(64);
    for (c = 0; c < 32; c++) I[c] = f[c], I[32 + c] = s[c];
    return w(I);
}

function l(r) {
    for (var a = "", e = 0; e < 16; e++) a += s(r.substring(e, e + 1));
    return a;
}

function t(r) {
    for (var a = "", e = 0; e < 16; e++) {
        for (var s = "", f = 0; f < 4; f++) s += r[4 * e + f];
        a += n(s);
    }
    return a;
}

function u(r) {
    for (var a = new Array(48), e = 0; e < 8; e++) a[6 * e + 0] = 0 == e ? r[31] : r[4 * e - 1], 
    a[6 * e + 1] = r[4 * e + 0], a[6 * e + 2] = r[4 * e + 1], a[6 * e + 3] = r[4 * e + 2], 
    a[6 * e + 4] = r[4 * e + 3], a[6 * e + 5] = 7 == e ? r[0] : r[4 * e + 4];
    return a;
}

function b(r) {
    for (var a = new Array(32), e = "", n = [ [ 14, 4, 13, 1, 2, 15, 11, 8, 3, 10, 6, 12, 5, 9, 0, 7 ], [ 0, 15, 7, 4, 14, 2, 13, 1, 10, 6, 12, 11, 9, 5, 3, 8 ], [ 4, 1, 14, 8, 13, 6, 2, 11, 15, 12, 9, 7, 3, 10, 5, 0 ], [ 15, 12, 8, 2, 4, 9, 1, 7, 5, 11, 3, 14, 10, 0, 6, 13 ] ], s = [ [ 15, 1, 8, 14, 6, 11, 3, 4, 9, 7, 2, 13, 12, 0, 5, 10 ], [ 3, 13, 4, 7, 15, 2, 8, 14, 12, 0, 1, 10, 6, 9, 11, 5 ], [ 0, 14, 7, 11, 10, 4, 13, 1, 5, 8, 12, 6, 9, 3, 2, 15 ], [ 13, 8, 10, 1, 3, 15, 4, 2, 11, 6, 7, 12, 0, 5, 14, 9 ] ], f = [ [ 10, 0, 9, 14, 6, 3, 15, 5, 1, 13, 12, 7, 11, 4, 2, 8 ], [ 13, 7, 0, 9, 3, 4, 6, 10, 2, 8, 5, 14, 12, 11, 15, 1 ], [ 13, 6, 4, 9, 8, 15, 3, 0, 11, 1, 2, 12, 5, 10, 14, 7 ], [ 1, 10, 13, 0, 6, 9, 8, 7, 4, 15, 14, 3, 11, 5, 2, 12 ] ], o = [ [ 7, 13, 14, 3, 0, 6, 9, 10, 1, 2, 8, 5, 11, 12, 4, 15 ], [ 13, 8, 11, 5, 6, 15, 0, 3, 4, 7, 2, 12, 1, 10, 14, 9 ], [ 10, 6, 9, 0, 12, 11, 7, 13, 15, 1, 3, 14, 5, 2, 8, 4 ], [ 3, 15, 0, 6, 10, 1, 13, 8, 9, 4, 5, 11, 12, 7, 2, 14 ] ], c = [ [ 2, 12, 4, 1, 7, 10, 11, 6, 8, 5, 3, 15, 13, 0, 14, 9 ], [ 14, 11, 2, 12, 4, 7, 13, 1, 5, 0, 15, 10, 3, 9, 8, 6 ], [ 4, 2, 1, 11, 10, 13, 7, 8, 15, 9, 12, 5, 6, 3, 0, 14 ], [ 11, 8, 12, 7, 1, 14, 2, 13, 6, 15, 0, 9, 10, 4, 5, 3 ] ], l = [ [ 12, 1, 10, 15, 9, 2, 6, 8, 0, 13, 3, 4, 14, 7, 5, 11 ], [ 10, 15, 4, 2, 7, 12, 9, 5, 6, 1, 13, 14, 0, 11, 3, 8 ], [ 9, 14, 15, 5, 2, 8, 12, 3, 7, 0, 4, 10, 1, 13, 11, 6 ], [ 4, 3, 2, 12, 9, 5, 15, 10, 11, 14, 1, 7, 6, 0, 8, 13 ] ], t = [ [ 4, 11, 2, 14, 15, 0, 8, 13, 3, 12, 9, 7, 5, 10, 6, 1 ], [ 13, 0, 11, 7, 4, 9, 1, 10, 14, 3, 5, 12, 2, 15, 8, 6 ], [ 1, 4, 11, 13, 12, 3, 7, 14, 10, 15, 6, 8, 0, 5, 9, 2 ], [ 6, 11, 13, 8, 1, 4, 10, 7, 9, 5, 0, 15, 14, 2, 3, 12 ] ], u = [ [ 13, 2, 8, 4, 6, 15, 11, 1, 10, 9, 3, 14, 5, 0, 12, 7 ], [ 1, 15, 13, 8, 10, 3, 7, 4, 12, 5, 6, 11, 0, 14, 9, 2 ], [ 7, 11, 4, 1, 9, 12, 14, 2, 0, 6, 10, 13, 15, 3, 5, 8 ], [ 2, 1, 14, 7, 4, 10, 8, 13, 15, 12, 9, 0, 3, 5, 6, 11 ] ], b = 0; b < 8; b++) {
        var k, v;
        switch (k = 2 * r[6 * b + 0] + r[6 * b + 5], v = 2 * r[6 * b + 1] * 2 * 2 + 2 * r[6 * b + 2] * 2 + 2 * r[6 * b + 3] + r[6 * b + 4], 
        b) {
          case 0:
            e = g(n[k][v]);
            break;

          case 1:
            e = g(s[k][v]);
            break;

          case 2:
            e = g(f[k][v]);
            break;

          case 3:
            e = g(o[k][v]);
            break;

          case 4:
            e = g(c[k][v]);
            break;

          case 5:
            e = g(l[k][v]);
            break;

          case 6:
            e = g(t[k][v]);
            break;

          case 7:
            e = g(u[k][v]);
        }
        a[4 * b + 0] = parseInt(e.substring(0, 1)), a[4 * b + 1] = parseInt(e.substring(1, 2)), 
        a[4 * b + 2] = parseInt(e.substring(2, 3)), a[4 * b + 3] = parseInt(e.substring(3, 4));
    }
    return a;
}

function k(r, a) {
    for (var e = new Array(r.length), n = 0; n < r.length; n++) e[n] = r[n] ^ a[n];
    return e;
}

function v(r) {
    for (var a = new Array(64), e = 0, n = 1, s = 0; e < 4; e++, n += 2, s += 2) for (var f = 7, o = 0; f >= 0; f--, 
    o++) a[8 * e + o] = r[8 * f + n], a[8 * e + o + 32] = r[8 * f + s];
    return a;
}

function w(r) {
    var a = new Array(64);
    return a[0] = r[39], a[1] = r[7], a[2] = r[47], a[3] = r[15], a[4] = r[55], a[5] = r[23], 
    a[6] = r[63], a[7] = r[31], a[8] = r[38], a[9] = r[6], a[10] = r[46], a[11] = r[14], 
    a[12] = r[54], a[13] = r[22], a[14] = r[62], a[15] = r[30], a[16] = r[37], a[17] = r[5], 
    a[18] = r[45], a[19] = r[13], a[20] = r[53], a[21] = r[21], a[22] = r[61], a[23] = r[29], 
    a[24] = r[36], a[25] = r[4], a[26] = r[44], a[27] = r[12], a[28] = r[52], a[29] = r[20], 
    a[30] = r[60], a[31] = r[28], a[32] = r[35], a[33] = r[3], a[34] = r[43], a[35] = r[11], 
    a[36] = r[51], a[37] = r[19], a[38] = r[59], a[39] = r[27], a[40] = r[34], a[41] = r[2], 
    a[42] = r[42], a[43] = r[10], a[44] = r[50], a[45] = r[18], a[46] = r[58], a[47] = r[26], 
    a[48] = r[33], a[49] = r[1], a[50] = r[41], a[51] = r[9], a[52] = r[49], a[53] = r[17], 
    a[54] = r[57], a[55] = r[25], a[56] = r[32], a[57] = r[0], a[58] = r[40], a[59] = r[8], 
    a[60] = r[48], a[61] = r[16], a[62] = r[56], a[63] = r[24], a;
}

function A(r) {
    var a = new Array(56), e = new Array();
    e[0] = new Array(), e[1] = new Array(), e[2] = new Array(), e[3] = new Array(), 
    e[4] = new Array(), e[5] = new Array(), e[6] = new Array(), e[7] = new Array(), 
    e[8] = new Array(), e[9] = new Array(), e[10] = new Array(), e[11] = new Array(), 
    e[12] = new Array(), e[13] = new Array(), e[14] = new Array(), e[15] = new Array();
    var n = [ 1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1 ];
    for (o = 0; o < 7; o++) for (var s = 0, f = 7; s < 8; s++, f--) a[8 * o + s] = r[8 * f + o];
    var o = 0;
    for (o = 0; o < 16; o++) {
        for (var c = 0, l = 0, t = 0; t < n[o]; t++) {
            c = a[0], l = a[28];
            for (var u = 0; u < 27; u++) a[u] = a[u + 1], a[28 + u] = a[29 + u];
            a[27] = c, a[55] = l;
        }
        var b = new Array(48);
        switch (b[0] = a[13], b[1] = a[16], b[2] = a[10], b[3] = a[23], b[4] = a[0], b[5] = a[4], 
        b[6] = a[2], b[7] = a[27], b[8] = a[14], b[9] = a[5], b[10] = a[20], b[11] = a[9], 
        b[12] = a[22], b[13] = a[18], b[14] = a[11], b[15] = a[3], b[16] = a[25], b[17] = a[7], 
        b[18] = a[15], b[19] = a[6], b[20] = a[26], b[21] = a[19], b[22] = a[12], b[23] = a[1], 
        b[24] = a[40], b[25] = a[51], b[26] = a[30], b[27] = a[36], b[28] = a[46], b[29] = a[54], 
        b[30] = a[29], b[31] = a[39], b[32] = a[50], b[33] = a[44], b[34] = a[32], b[35] = a[47], 
        b[36] = a[43], b[37] = a[48], b[38] = a[38], b[39] = a[55], b[40] = a[33], b[41] = a[52], 
        b[42] = a[45], b[43] = a[41], b[44] = a[49], b[45] = a[35], b[46] = a[28], b[47] = a[31], 
        o) {
          case 0:
            for (var k = 0; k < 48; k++) e[0][k] = b[k];
            break;

          case 1:
            for (var v = 0; v < 48; v++) e[1][v] = b[v];
            break;

          case 2:
            for (var i = 0; i < 48; i++) e[2][i] = b[i];
            break;

          case 3:
            for (var w = 0; w < 48; w++) e[3][w] = b[w];
            break;

          case 4:
            for (var A = 0; A < 48; A++) e[4][A] = b[A];
            break;

          case 5:
            for (var y = 0; y < 48; y++) e[5][y] = b[y];
            break;

          case 6:
            for (var g = 0; g < 48; g++) e[6][g] = b[g];
            break;

          case 7:
            for (var h = 0; h < 48; h++) e[7][h] = b[h];
            break;

          case 8:
            for (var p = 0; p < 48; p++) e[8][p] = b[p];
            break;

          case 9:
            for (var I = 0; I < 48; I++) e[9][I] = b[I];
            break;

          case 10:
            for (var C = 0; C < 48; C++) e[10][C] = b[C];
            break;

          case 11:
            for (var j = 0; j < 48; j++) e[11][j] = b[j];
            break;

          case 12:
            for (var m = 0; m < 48; m++) e[12][m] = b[m];
            break;

          case 13:
            for (var d = 0; d < 48; d++) e[13][d] = b[d];
            break;

          case 14:
            for (var D = 0; D < 48; D++) e[14][D] = b[D];
            break;

          case 15:
            for (var E = 0; E < 48; E++) e[15][E] = b[E];
        }
    }
    return e;
}

function y(r) {
    var a = new Array(32);
    return a[0] = r[15], a[1] = r[6], a[2] = r[19], a[3] = r[20], a[4] = r[28], a[5] = r[11], 
    a[6] = r[27], a[7] = r[16], a[8] = r[0], a[9] = r[14], a[10] = r[22], a[11] = r[25], 
    a[12] = r[4], a[13] = r[17], a[14] = r[30], a[15] = r[9], a[16] = r[1], a[17] = r[7], 
    a[18] = r[23], a[19] = r[13], a[20] = r[31], a[21] = r[26], a[22] = r[2], a[23] = r[8], 
    a[24] = r[18], a[25] = r[12], a[26] = r[29], a[27] = r[5], a[28] = r[21], a[29] = r[10], 
    a[30] = r[3], a[31] = r[24], a;
}

function g(r) {
    var a = "";
    switch (r) {
      case 0:
        a = "0000";
        break;

      case 1:
        a = "0001";
        break;

      case 2:
        a = "0010";
        break;

      case 3:
        a = "0011";
        break;

      case 4:
        a = "0100";
        break;

      case 5:
        a = "0101";
        break;

      case 6:
        a = "0110";
        break;

      case 7:
        a = "0111";
        break;

      case 8:
        a = "1000";
        break;

      case 9:
        a = "1001";
        break;

      case 10:
        a = "1010";
        break;

      case 11:
        a = "1011";
        break;

      case 12:
        a = "1100";
        break;

      case 13:
        a = "1101";
        break;

      case 14:
        a = "1110";
        break;

      case 15:
        a = "1111";
    }
    return a;
}

module.exports = {
    strEnc: function(n, s, f, c) {
        var l, u, b, k, v, i, w = n.length, A = "";
        if (null != (s = null != r && null != r.a && "" != r.a ? r.a : s) && "" != s && (k = (l = a(s)).length), 
        null != f && "" != f && (v = (u = a(f)).length), null != c && "" != c && (i = (b = a(c)).length), 
        w > 0) if (w < 4) {
            var y = e(n);
            if (null != s && "" != s && null != f && "" != f && null != c && "" != c) {
                for (D = y, g = 0; g < k; g++) D = o(D, l[g]);
                for (d = 0; d < v; d++) D = o(D, u[d]);
                for (m = 0; m < i; m++) D = o(D, b[m]);
                j = D;
            } else if (null != s && "" != s && null != f && "" != f) {
                for (D = y, g = 0; g < k; g++) D = o(D, l[g]);
                for (d = 0; d < v; d++) D = o(D, u[d]);
                j = D;
            } else if (null != s && "" != s) {
                var g = 0;
                for (D = y, g = 0; g < k; g++) D = o(D, l[g]);
                j = D;
            }
            A = t(j);
        } else {
            var h = parseInt(w / 4), p = w % 4, I = 0;
            for (I = 0; I < h; I++) {
                var C = e(n.substring(4 * I + 0, 4 * I + 4));
                if (null != s && "" != s && null != f && "" != f && null != c && "" != c) {
                    for (D = C, g = 0; g < k; g++) D = o(D, l[g]);
                    for (d = 0; d < v; d++) D = o(D, u[d]);
                    for (m = 0; m < i; m++) D = o(D, b[m]);
                    j = D;
                } else if (null != s && "" != s && null != f && "" != f) {
                    for (D = C, g = 0; g < k; g++) D = o(D, l[g]);
                    for (d = 0; d < v; d++) D = o(D, u[d]);
                    j = D;
                } else if (null != s && "" != s) {
                    for (D = C, g = 0; g < k; g++) D = o(D, l[g]);
                    j = D;
                }
                A += t(j);
            }
            if (p > 0) {
                var j;
                C = e(n.substring(4 * h + 0, w));
                if (null != s && "" != s && null != f && "" != f && null != c && "" != c) {
                    var m;
                    for (D = C, g = 0; g < k; g++) D = o(D, l[g]);
                    for (d = 0; d < v; d++) D = o(D, u[d]);
                    for (m = 0; m < i; m++) D = o(D, b[m]);
                    j = D;
                } else if (null != s && "" != s && null != f && "" != f) {
                    var d;
                    for (D = C, g = 0; g < k; g++) D = o(D, l[g]);
                    for (d = 0; d < v; d++) D = o(D, u[d]);
                    j = D;
                } else if (null != s && "" != s) {
                    var D;
                    for (D = C, g = 0; g < k; g++) D = o(D, l[g]);
                    j = D;
                }
                A += t(j);
            }
        }
        return A;
    },
    strDec: function(r, e, n, s) {
        var o, t, u, b, k, v, i = r.length, w = "";
        null != e && "" != e && (b = (o = a(e)).length), null != n && "" != n && (k = (t = a(n)).length), 
        null != s && "" != s && (v = (u = a(s)).length);
        var A = parseInt(i / 16), y = 0;
        for (y = 0; y < A; y++) {
            var g, h = l(r.substring(16 * y + 0, 16 * y + 16)), p = new Array(64), I = 0;
            for (I = 0; I < 64; I++) p[I] = parseInt(h.substring(I, I + 1));
            if (null != e && "" != e && null != n && "" != n && null != s && "" != s) {
                for (C = p, j = v - 1; j >= 0; j--) C = c(C, u[j]);
                for (m = k - 1; m >= 0; m--) C = c(C, t[m]);
                for (d = b - 1; d >= 0; d--) C = c(C, o[d]);
                g = C;
            } else if (null != e && "" != e && null != n && "" != n) {
                for (C = p, j = k - 1; j >= 0; j--) C = c(C, t[j]);
                for (m = b - 1; m >= 0; m--) C = c(C, o[m]);
                g = C;
            } else if (null != e && "" != e) {
                var C, j, m, d;
                for (C = p, j = b - 1; j >= 0; j--) C = c(C, o[j]);
                g = C;
            }
            w += f(g);
        }
        return w;
    }
};