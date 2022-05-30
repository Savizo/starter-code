!(function () {
  var e = {
      466: function () {
        const e = document.querySelector('.nav__hamburger');
        e.addEventListener('click', () => {
          const r = document.querySelector('.nav__links'),
            t = document.querySelector('html');
          e.classList.toggle('nav__hamburger--active'),
            r.classList.toggle('nav__links--active'),
            t.classList.toggle('html--active');
        });
      },
      319: function (e, r, t) {
        'use strict';
        var n = JSON.parse(
            '{"qb":[{"u2":"Douglas Hurley","rH":"Commander","A":"Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."},{"u2":"Mark Shuttleworth","rH":"Mission Specialist","A":"Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."},{"u2":"Victor Glover","rH":"Pilot","A":"Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."},{"u2":"Anousheh Ansari","rH":"Flight Engineer","A":"Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."}]}'
          ),
          i = (t(466), t(140)),
          o = t(294),
          c = t(795),
          a = t(297);
        const s = document.querySelector('.crew__douglas'),
          u = document.querySelector('.crew__mark'),
          l = document.querySelector('.crew__victor'),
          d = document.querySelector('.crew__anousheh'),
          h = document.querySelector('.crew__image'),
          m = document.querySelector('#crew__name'),
          p = document.querySelector('#crew__role'),
          f = document.querySelector('#crew__description');
        s.addEventListener('click', () => {
          (h.src = i),
            (m.innerHTML = n.qb[0].u2),
            (p.innerHTML = n.qb[0].rH),
            (f.innerHTML = n.qb[0].A);
        }),
          u.addEventListener('click', () => {
            (h.src = o),
              (m.innerHTML = n.qb[1].u2),
              (p.innerHTML = n.qb[1].rH),
              (f.innerHTML = n.qb[1].A);
          }),
          l.addEventListener('click', () => {
            (h.src = c),
              (m.innerHTML = n.qb[2].u2),
              (p.innerHTML = n.qb[2].rH),
              (f.innerHTML = n.qb[2].A);
          }),
          d.addEventListener('click', () => {
            (h.src = a),
              (m.innerHTML = n.qb[3].u2),
              (p.innerHTML = n.qb[3].rH),
              (f.innerHTML = n.qb[3].A);
          });
      },
      297: function (e, r, t) {
        'use strict';
        e.exports = t.p + './assets/crew/image-anousheh-ansari.png';
      },
      140: function (e, r, t) {
        'use strict';
        e.exports = t.p + './assets/crew/image-douglas-hurley.png';
      },
      294: function (e, r, t) {
        'use strict';
        e.exports = t.p + './assets/crew/image-mark-shuttleworth.png';
      },
      795: function (e, r, t) {
        'use strict';
        e.exports = t.p + './assets/crew/image-victor-glover.png';
      },
    },
    r = {};
  function t(n) {
    var i = r[n];
    if (void 0 !== i) return i.exports;
    var o = (r[n] = { exports: {} });
    return e[n](o, o.exports, t), o.exports;
  }
  (t.g = (function () {
    if ('object' == typeof globalThis) return globalThis;
    try {
      return this || new Function('return this')();
    } catch (e) {
      if ('object' == typeof window) return window;
    }
  })()),
    (function () {
      var e;
      t.g.importScripts && (e = t.g.location + '');
      var r = t.g.document;
      if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
        var n = r.getElementsByTagName('script');
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
        (t.p = e);
    })(),
    t(319);
})();
