!(function () {
  var e = {
      466: function () {
        const e = document.querySelector('.nav__hamburger');
        e.addEventListener('click', () => {
          const t = document.querySelector('.nav__links'),
            n = document.querySelector('html');
          e.classList.toggle('nav__hamburger--active'),
            t.classList.toggle('nav__links--active'),
            n.classList.toggle('html--active');
        });
      },
      495: function (e, t, n) {
        'use strict';
        var r = JSON.parse(
            '{"MQ":[{"u2":"Moon","WL":"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.","TE":"384,400 km","Hm":"3 days"},{"u2":"Mars","WL":"Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!","TE":"225 mil. km","Hm":"9 months"},{"u2":"Europa","WL":"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.","TE":"628 mil. km","Hm":"3 years"},{"u2":"Titan","WL":"The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.","TE":"1.6 bil. km","Hm":"7 years"}]}'
          ),
          i = (n(466), n(8)),
          o = n(804),
          s = n(564),
          a = n(732);
        const c = document.querySelector('#destination__moon'),
          u = document.querySelector('#destination__mars'),
          l = document.querySelector('#destination__europa'),
          m = document.querySelector('#destination__titan'),
          d = document.querySelector('#destination__image'),
          p = document.querySelector('#destination__title'),
          h = document.querySelector('#destination__description'),
          f = document.querySelector('#destination__distance'),
          g = document.querySelector('#destination__travel');
        c.addEventListener('click', () => {
          (d.src = i),
            (p.innerHTML = r.MQ[0].u2),
            (h.innerHTML = r.MQ[0].WL),
            (f.innerHTML = r.MQ[0].TE),
            (g.innerHTML = r.MQ[0].Hm);
        }),
          u.addEventListener('click', () => {
            (d.src = o),
              (p.innerHTML = r.MQ[1].u2),
              (h.innerHTML = r.MQ[1].WL),
              (f.innerHTML = r.MQ[1].TE),
              (g.innerHTML = r.MQ[1].Hm);
          }),
          l.addEventListener('click', () => {
            (d.src = s),
              (p.innerHTML = r.MQ[2].u2),
              (h.innerHTML = r.MQ[2].WL),
              (f.innerHTML = r.MQ[2].TE),
              (g.innerHTML = r.MQ[2].Hm);
          }),
          m.addEventListener('click', () => {
            (d.src = a),
              (p.innerHTML = r.MQ[3].u2),
              (h.innerHTML = r.MQ[3].WL),
              (f.innerHTML = r.MQ[3].TE),
              (g.innerHTML = r.MQ[3].Hm);
          });
      },
      564: function (e, t, n) {
        'use strict';
        e.exports = n.p + './assets/destination/image-europa.webp';
      },
      804: function (e, t, n) {
        'use strict';
        e.exports = n.p + './assets/destination/image-mars.webp';
      },
      8: function (e, t, n) {
        'use strict';
        e.exports = n.p + './assets/destination/image-moon.webp';
      },
      732: function (e, t, n) {
        'use strict';
        e.exports = n.p + './assets/destination/image-titan.webp';
      },
    },
    t = {};
  function n(r) {
    var i = t[r];
    if (void 0 !== i) return i.exports;
    var o = (t[r] = {
      exports: {},
    });
    return e[r](o, o.exports, n), o.exports;
  }
  (n.g = (function () {
    if ('object' == typeof globalThis) return globalThis;
    try {
      return this || new Function('return this')();
    } catch (e) {
      if ('object' == typeof window) return window;
    }
  })()),
    (function () {
      var e;
      n.g.importScripts && (e = n.g.location + '');
      var t = n.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var r = t.getElementsByTagName('script');
        r.length && (e = r[r.length - 1].src);
      }
      if (!e)
        throw new Error(
          'Automatic publicPath is not supported in this browser'
        );
      (e = e
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (n.p = e);
    })(),
    n(495);
})();
