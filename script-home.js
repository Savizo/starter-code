!(function () {
  var t = {
      466: function () {
        const t = document.querySelector('.nav__hamburger');
        t.addEventListener('click', () => {
          const e = document.querySelector('.nav__links'),
            n = document.querySelector('html');
          t.classList.toggle('nav__hamburger--active'),
            e.classList.toggle('nav__links--active'),
            n.classList.toggle('html--active');
        });
      },
    },
    e = {};
  function n(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var c = (e[r] = {
      exports: {},
    });
    return t[r](c, c.exports, n), c.exports;
  }
  (n.n = function (t) {
    var e =
      t && t.__esModule
        ? function () {
            return t.default;
          }
        : function () {
            return t;
          };
    return (
      n.d(e, {
        a: e,
      }),
      e
    );
  }),
    (n.d = function (t, e) {
      for (var r in e)
        n.o(e, r) &&
          !n.o(t, r) &&
          Object.defineProperty(t, r, {
            enumerable: !0,
            get: e[r],
          });
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (function () {
      'use strict';
      n(466);
    })();
})();
