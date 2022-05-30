!(function () {
  var e = {
      466: function () {
        const e = document.querySelector('.nav__hamburger');
        e.addEventListener('click', () => {
          const t = document.querySelector('.nav__links'),
            r = document.querySelector('html');
          e.classList.toggle('nav__hamburger--active'),
            t.classList.toggle('nav__links--active'),
            r.classList.toggle('html--active');
        });
      },
      961: function (e, t, r) {
        'use strict';
        var n = JSON.parse(
            '{"LB":[{"u2":"Launch vehicle","WL":"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth\'s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it\'s quite an awe-inspiring sight on the launch pad!"},{"u2":"Spaceport","WL":"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."},{"u2":"Space capsule","WL":"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth\'s atmosphere without wings. Our capsule is where you\'ll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."}]}'
          ),
          o = (r(466), r(258)),
          c = r(86),
          i = r(825),
          a = r(141),
          s = r(381),
          u = r(255);
        const l = document.querySelector('.technology__vehicle'),
          p = document.querySelector('.technology__spaceport'),
          d = document.querySelector('.technology__capsule'),
          h = document.querySelector('#technology__title'),
          g = document.querySelector('#technology__description'),
          f = document.querySelector('#technology__image');
        window.innerWidth <= 768 && (f.src = a),
          l.addEventListener('click', () => {
            (h.innerHTML = n.LB[0].u2),
              (g.innerHTML = n.LB[0].WL),
              window.innerWidth <= 768 ? (f.src = a) : (f.src = o);
          }),
          p.addEventListener('click', () => {
            (h.innerHTML = n.LB[1].u2),
              (g.innerHTML = n.LB[1].WL),
              window.innerWidth <= 768 ? (f.src = s) : (f.src = c);
          }),
          d.addEventListener('click', () => {
            (h.innerHTML = n.LB[2].u2),
              (g.innerHTML = n.LB[2].WL),
              window.innerWidth <= 768 ? (f.src = u) : (f.src = i);
          });
      },
      141: function (e, t, r) {
        'use strict';
        e.exports =
          r.p + './assets/technology/image-launch-vehicle-landscape.jpg';
      },
      258: function (e, t, r) {
        'use strict';
        e.exports =
          r.p + './assets/technology/image-launch-vehicle-portrait.jpg';
      },
      255: function (e, t, r) {
        'use strict';
        e.exports =
          r.p + './assets/technology/image-space-capsule-landscape.jpg';
      },
      825: function (e, t, r) {
        'use strict';
        e.exports =
          r.p + './assets/technology/image-space-capsule-portrait.jpg';
      },
      381: function (e, t, r) {
        'use strict';
        e.exports = r.p + './assets/technology/image-spaceport-landscape.jpg';
      },
      86: function (e, t, r) {
        'use strict';
        e.exports = r.p + './assets/technology/image-spaceport-portrait.jpg';
      },
    },
    t = {};
  function r(n) {
    var o = t[n];
    if (void 0 !== o) return o.exports;
    var c = (t[n] = { exports: {} });
    return e[n](c, c.exports, r), c.exports;
  }
  (r.g = (function () {
    if ('object' == typeof globalThis) return globalThis;
    try {
      return this || new Function('return this')();
    } catch (e) {
      if ('object' == typeof window) return window;
    }
  })()),
    (function () {
      var e;
      r.g.importScripts && (e = r.g.location + '');
      var t = r.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var n = t.getElementsByTagName('script');
        n.length && (e = n[n.length - 1].src);
      }
      if (!e)
        throw new Error(
          'Automatic publicPath is not supported in this browser'
        );
      (e = e
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (r.p = e);
    })(),
    r(961);
})();
