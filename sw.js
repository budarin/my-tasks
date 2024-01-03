!(function () {
  "use strict";
  const e = self,
    t = 200,
    n = 206,
    r = "assets",
    a = "Content-Security-Policy";
  const i = "/api/",
    s = "get_tasks",
    o = { "Content-Type": "application/json; charset=utf-8" },
    c = "RELOAD_PAGE",
    d = "create_category",
    u = "update_category",
    l = "delete_category",
    f = "create_task",
    g = "update_task",
    _ = "delete_task",
    p = [d, u, l, f, g, _];
  const y = "tasks",
    m = "kv-storage";
  async function w(e) {
    if (e.icons && e.icons.length > 0) {
      let t;
      const n = JSON.stringify(e),
        r = await caches.open(m),
        a = await r.match(y);
      void 0 !== a && (t = await a.text()),
        (void 0 !== a && t === n) ||
          (await r.put(
            y,
            new Response(n, {
              headers: new Headers({
                ...o,
                "Content-Length": String(n.length),
              }),
            })
          ));
    }
  }
  let h = { tasks: [], categories: [], priorities: [], icons: [] };
  function b() {
    return h;
  }
  async function k(e) {
    (h = e), await w(e);
  }
  function v(e) {
    const t = new Date();
    return t.setDate(t.getDate() + e), t.toISOString();
  }
  const j = {
    icons: [
      { icon_id: 1, file_name: "page.png" },
      { icon_id: 2, file_name: "home.png" },
      { icon_id: 3, file_name: "other.png" },
      { icon_id: 4, file_name: "warning.png" },
      { icon_id: 5, file_name: "alert.png" },
      { icon_id: 6, file_name: "ball.png" },
      { icon_id: 7, file_name: "bug.png" },
      { icon_id: 8, file_name: "cart.png" },
      { icon_id: 9, file_name: "favorite.png" },
      { icon_id: 10, file_name: "inbox.png" },
      { icon_id: 11, file_name: "life.png" },
      { icon_id: 12, file_name: "mail.png" },
      { icon_id: 13, file_name: "twitter.png" },
      { icon_id: 14, file_name: "note.png" },
    ],
    priorities: [
      { priority_id: 1, priority_name: "низкий", color: "#808080" },
      { priority_id: 2, priority_name: "нормальный", color: "#000000" },
      { priority_id: 3, priority_name: "повышенный", color: "#008000" },
      { priority_id: 4, priority_name: "высокий", color: "#E56353" },
    ],
    categories: [
      { category_id: 1, icon_id: 3, category_name: "Работа" },
      { category_id: 2, icon_id: 2, category_name: "Дом" },
      { category_id: 3, icon_id: 6, category_name: "Здоровье" },
      { category_id: 4, icon_id: 7, category_name: "Фигня" },
    ],
    tasks: [
      {
        task_id: 1,
        priority_id: 1,
        category_id: 1,
        title: "Todo1",
        deleted: !1,
      },
      {
        task_id: 2,
        priority_id: 2,
        category_id: 2,
        title:
          "Hover your mouse over a project or item and click the icon on the right side of the item for more",
        due_date_time: v(-1),
      },
      {
        task_id: 3,
        priority_id: 3,
        category_id: 3,
        title: "Todo3",
        due_date_time: (function (e) {
          const t = new Date();
          return t.setMinutes(t.getMinutes() + e), t.toISOString();
        })(1),
      },
      {
        task_id: 4,
        priority_id: 4,
        category_id: 1,
        title: "Todo4",
        due_date_time: v(1),
        completed: !0,
        deleted: !1,
      },
      { task_id: 5, priority_id: 4, title: "Todo5" },
      {
        task_id: 6,
        category_id: 4,
        priority_id: 4,
        title: "Todo6",
        completed: !0,
        deleted: !1,
      },
      {
        task_id: 7,
        priority_id: 2,
        title: "Todo7",
        completed: !0,
        deleted: !0,
      },
    ],
  };
  async function q() {
    let e = b();
    const t = await caches.open(m),
      n = await t.match(y);
    if (e.icons && 0 === e.icons.length) {
      if (void 0 !== n) {
        const t = await n.json();
        if (t) return (e = t), await k(e), e;
      }
      if (e.icons && 0 === e.icons.length) return await k(j), j;
    }
    return n || (await w(e)), e;
  }
  async function O() {
    await (async function () {
      const t = await caches.open(r);
      let n = (await t.keys()).map((e) => new URL(e.url).pathname);
      const a = n.filter((t) => !e.assets.includes(t));
      a.length > 0 &&
        (await Promise.all(
          a.map(async (e) => {
            await t.delete(e), (n = n.filter((t) => t !== e));
          })
        ));
      const i = e.assets.filter((e) => !n.includes(e));
      i.length > 0 && (await t.addAll(i));
    })(),
      await q(),
      await (async function () {
        e.clients.matchAll().then((e) => {
          e.forEach((e) => e.postMessage({ type: c }));
        });
      })();
  }
  const T = () => {};
  let x = new Proxy({}, { get: () => T });
  const R = [
    "/android-chrome-192x192.1cfc30bbcbf340fc741d.png",
    "/android-chrome-512x512.558e975c145ffb2a28fd.png",
    "/android-chrome-maskable-192x192.126708023a549b771f76.png",
    "/android-chrome-maskable-512x512.d40a692f812ed7f5e7e3.png",
    "/app.6439c8886a317a442098.js",
    "/apple-touch-icon.7cb6aa9a5fc2e73f0df5.png",
    "/budarin.4a1954bad283653e8db0.js",
    "/error.8ad17092b67f41ed6f08.mp3",
    "/favicon-32x32.88ac8115acd8f90a85e8.png",
    "/favicon.31159ba4d345a313888e.ico",
    "/main.0eb59e0f92a6a7293746.js",
    "/npms.03b680477565bc10ec71.js",
    "/react.072e730091aa92f00ee4.js",
    "/roboto-regular-webfont.7c365dca831ccd4122ac.woff2",
    "/runtime.ed04418207af187c683e.js",
    "/todo.91f9a6b8aca587d9191a.svg",
    "/manifest.ac324a6fb175e1f1dba2c678265b6dc2.webmanifest",
    "/offline.95b816a08de4532bc68c8cbe21682432.html",
  ];
  function S(e) {}
  function E(e, t, n) {
    return new Response(
      JSON.stringify({ id: e, error: { code: 500, message: t, data: n } }),
      { headers: o, status: 200 }
    );
  }
  function A() {
    return (
      navigator.userAgent.toLowerCase().includes("chrome") ||
      navigator.userAgent.toLowerCase().includes("chromium")
    );
  }
  const I = (e) => e.startsWith("/offline.") && e.endsWith(".html"),
    L =
      "default-src 'none'; base-uri 'none'; object-src 'none'; connect-src 'self'; media-src 'self'; manifest-src 'self'; img-src 'self' data: ; worker-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'sha384-UHCgC9iSIiEs2yDLbWHT4b6uyXHwNMd3Fx95ZbjACO6ijVsew0khvdoFCOOuiHb4' 'sha384-Ul13hXxd26CuGKdSBqjdxgWgvOJ0LujQd8PL_Qms8nl8pC94Ey-zBvlEhpvMv9Na' 'sha384-2WZPK9bOk-gNZ-Z8eKZbUPTzTOgw5OrAYWl8epa74e2o9NSBRq32eXWfEnKLR9M9' 'sha384-xnWWkOTSvPAuspyBC92de_b4xZpLVwU4ZWtyeBuEHz3DqExMpCkH-aykTvk1EfrZ' 'sha384-2GjpEl-aVpVOO93DHCQGH_Jn-qRFoKCUiQBfv53so1es0KRP7cxC_kqEVTj-33tb' 'sha384-mKvTpL5idEXA_pmfTavsSTwY_Uah7A3pfb4TYz__AZS7QGb_hHaECOKTmuiKgwYB' 'sha384-sPCTtOGbmmK_q70iHqXpG7eR2m0JxeHXSHZk3RA8G17029-VL_Paf8UqM6Xg2A0y' 'sha384-ty3y9O6mev567h1uNhcyxH_teJgQklzRFoAy-FdmlOR45FfNXrXrLUzn8jpns3DY' 'unsafe-inline'; font-src 'self' data:; require-trusted-types-for 'script'; trusted-types webpack-tt default;";
  async function W(i, s, o) {
    const c = await caches.open(r),
      d = await c.match(s);
    if (d) {
      if (I(s) && !d.headers.get(a)) {
        const e = d.clone(),
          t = new Headers(d.headers);
        t.set(a, L);
        try {
          let n = await d.text();
          A() && (n = n.replace(/<script id="tt"[\s\S]*?<\/script>/gi, ""));
          const r = new Response(n, {
            status: e.status,
            statusText: e.statusText,
            headers: t,
          });
          return await c.put(s, r.clone()), r;
        } catch (e) {
          return d;
        }
      }
      return d;
    }
    return (async function (i, s) {
      let o;
      const c = await fetch(i);
      if (null === c.body) return c;
      const d = new Headers(c.headers);
      if (c.status === n) {
        const e = await c.blob(),
          t = await e.arrayBuffer();
        o = new Response(t, { headers: d });
      } else {
        let e;
        I(i)
          ? ((e = await c.text()),
            d.set(a, L),
            A() && (e = e.replace(/<script id="tt"[\s\S]*?<\/script>/gi, "")))
          : (e = await c.blob()),
          (o = new Response(e, {
            headers: d,
            status: c.status,
            statusText: c.statusText,
          }));
      }
      const u = o.status === t;
      if (!1 === u) return c;
      u && e.assets.includes(s) && (await caches.open(r)).put(i, o.clone());
      return o;
    })(s, o);
  }
  function $(e) {
    void 0 === e && (e = Date.now());
    const t = new Uint8Array(10);
    !(function (e) {
      if (
        void 0 !== globalThis.crypto &&
        "function" == typeof globalThis.crypto.getRandomValues
      )
        return globalThis.crypto.getRandomValues(e);
      if ("function" == typeof require) {
        const t = require("crypto").randomBytes(e.length);
        return e.set(t), e;
      }
      throw new Error(
        "Secure random number generation is not supported in this environment."
      );
    })(t);
    const n = e.toString(16).padStart(12, "0"),
      r = (function (e) {
        let t = "";
        for (let n = 0; n < e.length; n++) {
          const r = e[n].toString(16);
          t += 2 === r.length ? r : "0" + r;
        }
        return t;
      })(t);
    return `${n.substring(0, 8)}-${n.substring(8)}-${r.substring(
      0,
      4
    )}-${r.substring(4, 8)}-${r.substring(8)}`;
  }
  function C(e) {
    return "number" == typeof e && Number.isInteger(e);
  }
  const H = (e, t) => `Свойство сущности ${e} "${t}" должно быть целым числом`;
  function N(e, t) {
    return (
      void 0 === t && (t = 65536),
      (n) => "string" == typeof n && n.length >= e && n.length <= t
    );
  }
  const U = (e, t, n, r) =>
    `Свойство сущности ${e} "${t}" должно быть строкой длиной от ${n} до ${r} символов`;
  const P = (e, t, n, r) => {
    if (
      !1 ===
      (function (e) {
        return "object" == typeof e && null !== e;
      })(e)
    )
      return {
        error: { message: `Сущность "${r}" должна быть объектом`, data: e },
      };
    const a = e,
      i = Object.keys(t);
    for (let n = 0; n < i.length; n++) {
      const s = i[n],
        o = t[s];
      if (!0 === o.required && void 0 === a[s])
        return {
          error: {
            message: `Свойство "${s}" сущности ${r} отсутствует`,
            data: e,
          },
        };
      for (let t = 0; t < o.validators.length; t++) {
        const n = o.validators[t];
        if (!1 === n[0](a[s])) return { error: { message: n[1], data: e } };
      }
    }
    return { result: n(a) };
  };
  function D(e) {
    const { icon_id: t, category_name: n } = e || {};
    return { icon_id: t, category_name: n };
  }
  const K = "Категория",
    Z = {
      icon_id: { validators: [[C, H(K, "icon_id")]], required: !0 },
      category_name: {
        validators: [[N(3, 20), U(K, "category_name", 3, 20)]],
        required: !0,
      },
    },
    G = (e) => P(e, Z, D, K);
  function J(e) {
    const { category_id: t, icon_id: n, category_name: r } = e || {};
    return { category_id: t, icon_id: n, category_name: r };
  }
  const B = {
      category_id: { validators: [[C, H(K, "category_id")]], required: !0 },
      ...Z,
    },
    M = (e) => P(e, B, J, K);
  function V(e) {
    return (t) => void 0 === t || e(t);
  }
  function X(e) {
    return "boolean" == typeof e;
  }
  function z(e, t) {
    return `Свойство сущности ${e} "${t}" должно быть undefined или boolean`;
  }
  function F(e) {
    const {
      title: t,
      priority_id: n,
      category_id: r,
      description: a,
      due_date_time: i,
      deleted: s,
      completed: o,
    } = e || {};
    return {
      title: t,
      priority_id: n,
      category_id: r,
      description: a,
      due_date_time: i,
      deleted: s,
      completed: o,
    };
  }
  const Q = "Задача",
    Y = {
      title: { validators: [[N(3, 100), U(Q, "title", 3, 100)]], required: !0 },
      priority_id: { validators: [[C, H(Q, "priority_id")]], required: !0 },
      category_id: {
        validators: [
          [
            V(C),
            (function (e, t) {
              return `Свойство сущности ${e} "${t}" должно быть undefined или целым числом`;
            })(Q, "category_id"),
          ],
        ],
      },
      description: {
        validators: [[V(N(3, 1e3)), U(Q, "description", 3, 1e3)]],
      },
      due_date_time: {
        validators: [
          [
            V(function (e) {
              return /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/.test(e);
            }),
            `Свойство сущности ${Q} "due_date_time" должно быть датой в формате ISO`,
          ],
        ],
      },
      deleted: { validators: [[V(X), z(Q, "deleted")]] },
      completed: { validators: [[V(X), z(Q, "completed")]] },
    },
    ee = (e) => P(e, Y, F, Q);
  function te(e) {
    const {
      task_id: t,
      title: n,
      priority_id: r,
      category_id: a,
      description: i,
      due_date_time: s,
      deleted: o,
      completed: c,
    } = e || {};
    return {
      task_id: t,
      title: n,
      priority_id: r,
      category_id: a,
      description: i,
      due_date_time: s,
      deleted: o,
      completed: c,
    };
  }
  const ne = {
      task_id: { validators: [[C, H(Q, "task_id")]], required: !0 },
      ...Y,
    },
    re = (e) => P(e, ne, te, Q);
  function ae(e, t, n) {
    return (
      void 0 === n && (n = 200),
      new Response(JSON.stringify({ id: e, result: t }), {
        headers: o,
        status: n,
      })
    );
  }
  class ie {
    constructor(e, t) {
      (this.type = e), (this.data = t);
    }
  }
  async function se(t, n) {
    e.clients.matchAll().then((e) => {
      e.forEach((e) => {
        e.id !== t && e.postMessage(n);
      });
    });
  }
  async function oe(e) {
    const { request: t } = e,
      n = b(),
      { id: r, params: a } = await t.json(),
      i = await (async function (e, t) {
        const n = ee(t);
        if (!n.error) {
          const r = n.result;
          if (!e.priorities.find((e) => e.priority_id === r.priority_id))
            return {
              error: {
                message: "Не известный идентификатор приоритета",
                data: t,
              },
            };
          if (!e.categories.find((e) => e.category_id === r.category_id))
            return {
              error: {
                message: "Не известный идентификатор категории",
                data: t,
              },
            };
          const a = e.tasks.at(-1)?.task_id || 0,
            i = { ...r, task_id: a + 1 };
          return e.tasks.push(i), { result: i };
        }
        return n;
      })(n, a);
    if (i.result) {
      const t = i.result;
      return (
        await k(n), await se(e.clientId, new ie("create_task", t)), ae(r, t)
      );
    }
    return E(r, i.error.message, i.error.data);
  }
  async function ce(e) {
    const { request: t } = e,
      n = b(),
      { id: r, params: a } = await t.json(),
      i = await (async function (e, t) {
        const n = re(t);
        if (n.result) {
          const r = n.result,
            a = e.tasks.findIndex((e) => e.task_id === r.task_id);
          return -1 === a
            ? { error: { message: "Задача не найдена", data: t } }
            : e.priorities.find((e) => e.priority_id === r.priority_id)
            ? e.categories.find((e) => e.category_id === r.category_id)
              ? ((e.tasks[a] = r), { result: r })
              : {
                  error: {
                    message: "Не известный идентификатор категории",
                    data: t,
                  },
                }
            : {
                error: {
                  message: "Не известный идентификатор приоритета",
                  data: t,
                },
              };
        }
        return n;
      })(n, a);
    if (i.result) {
      const t = i.result;
      return (
        await k(n), await se(e.clientId, new ie("update_task", t)), ae(r, t)
      );
    }
    return E(r, i.error.message, i.error.data);
  }
  function de(e, t) {
    if (e === t) return !0;
    if (
      "object" != typeof e ||
      null === e ||
      "object" != typeof t ||
      null === t
    )
      return !1;
    const n = Object.keys(e),
      r = Object.keys(t);
    return (
      n.length === r.length && n.every((n) => r.includes(n) && de(e[n], t[n]))
    );
  }
  async function ue(e) {
    const { request: t } = e,
      n = b(),
      { id: r, params: a } = await t.json(),
      i = await (async function (e, t) {
        const n = re(t);
        if (n.result) {
          const r = n.result,
            a = e.tasks.findIndex((e) => de(te(e), te(r)));
          return -1 === a
            ? { error: { message: "Задача не найдена", data: t } }
            : (e.tasks.splice(a, 1), { result: r });
        }
        return n;
      })(n, a);
    if (i.result) {
      const t = i.result;
      return (
        await k(n), await se(e.clientId, new ie("delete_task", t)), ae(r, t)
      );
    }
    return E(r, i.error.message, i.error.data);
  }
  async function le(e) {
    const { request: t } = e,
      n = b(),
      { id: r, params: a } = await t.json(),
      i = await (async function (e, t) {
        const n = G(t);
        if (n.result) {
          const r = n.result,
            a = e.categories.find((e) => e.category_name === r.category_name);
          if (a)
            return {
              error: {
                message: "Категория с таким именем уже существует",
                data: t,
              },
            };
          if (!e.icons.find((e) => e.icon_id === r.icon_id))
            return {
              error: { message: "Не известный идентификатор иконки", data: t },
            };
          const i = e.categories.at(-1)?.category_id || 0,
            s = { ...r, category_id: i + 1 };
          return e.categories.push(s), { result: s };
        }
        return n;
      })(n, a);
    if (i.result) {
      const t = i.result;
      return (
        await k(n), await se(e.clientId, new ie("create_category", t)), ae(r, t)
      );
    }
    return E(r, i.error.message, i.error.data);
  }
  async function fe(e) {
    const { request: t } = e,
      n = b(),
      { id: r, params: a } = await t.json(),
      i = await (async function (e, t) {
        const n = M(t);
        if (n.result) {
          const r = n.result;
          let a = e.categories.findIndex(
            (e) => e.category_id === r.category_id
          );
          return -1 === a
            ? { error: { message: "Категория не найдена", data: t } }
            : e.categories.find(
                (e) =>
                  e.category_name === r.category_name &&
                  e.category_id !== r.category_id
              )
            ? {
                error: {
                  message: "Категория с таким именем уже существует",
                  data: t,
                },
              }
            : e.icons.find((e) => e.icon_id === r.icon_id)
            ? ((a = e.categories.findIndex(
                (e) => e.category_id === r.category_id
              )),
              (e.categories[a] = r),
              { result: r })
            : {
                error: {
                  message: "Не известный идентификатор иконки",
                  data: t,
                },
              };
        }
        return n;
      })(n, a);
    if (i.result) {
      const t = i.result;
      return k(n), await se(e.clientId, new ie("update_category", t)), ae(r, t);
    }
    return E(r, i.error.message, i.error.data);
  }
  async function ge(e) {
    const { request: t } = e,
      n = b(),
      { id: r, params: a } = await t.json(),
      i = await (async function (e, t) {
        const n = M(t);
        if (n.result) {
          const r = n.result,
            a = e.categories.findIndex((e) => de(e, r));
          return -1 === a
            ? { error: { message: "Категория не найдена", data: t } }
            : e.tasks.find((e) => e.category_id === r.category_id)
            ? {
                error: { message: "Категория используется в задачах", data: t },
              }
            : (e.categories.splice(a, 1), { result: r });
        }
        return n;
      })(n, a);
    if (i.result) {
      const t = i.result;
      return k(n), await se(e.clientId, new ie("delete_category", t)), ae(r, t);
    }
    return E(r, i.error.message, i.error.data);
  }
  async function _e(e, t) {
    switch (t) {
      case s:
        return (async function (e) {
          const { request: t } = e,
            n = await q(),
            r = t.headers.get("x-request-id");
          return new Response(JSON.stringify({ id: r, result: n }), {
            headers: o,
            status: 200,
          });
        })(e);
      case d:
        return le(e);
      case u:
        return fe(e);
      case l:
        return ge(e);
      case f:
        return oe(e);
      case g:
        return ce(e);
      case _:
        return ue(e);
      case "/log/info":
      case "/log/warn":
      case "/log/error":
        return (async function (e) {
          const { request: t } = e,
            n = (await t.json()).id || $();
          return new Response(JSON.stringify({ id: n, result: "Ok" }), {
            headers: o,
            status: 200,
          });
        })(e);
      default:
        return new Response(
          JSON.stringify({ error: { code: 404, error: "Not found" } }),
          { headers: o, status: 200 }
        );
    }
  }
  (e.id = Date.now()),
    (e.VERSION = "1.0.0"),
    (e.assets = R),
    (e.isRepearing = !1),
    (e.logger = x),
    (e.onerror = S),
    e.addEventListener("message", function (t) {
      t.data && "SKIP_WAITING" === t.data.type && e.skipWaiting();
    }),
    e.addEventListener("fetch", async function (t) {
      const n = t.request,
        a = (function (e) {
          const { pathname: t } = new URL(e);
          return t.startsWith(i) ? t.slice(i.length) : t;
        })(n.url);
      switch (n.method) {
        case "GET":
          return (
            (async function () {
              const t = await caches.open(r),
                n = (await t.keys()).map((e) => new URL(e.url).pathname),
                a = e.assets.filter(
                  (e) => !n.includes(e) && !e.startsWith("/offline.")
                );
              if (a.length > 0 && !e.isRepearing) {
                e.isRepearing = !0;
                try {
                  await t.addAll(a);
                } finally {
                  e.isRepearing = !1;
                }
              }
            })(),
            void (await (async function (t, n) {
              if ("document" !== t.request.destination || "/" !== n)
                e.assets.includes(n) && t.respondWith(W(0, t.request.url, n));
              else {
                const n =
                  e.assets.find(
                    (e) => e.startsWith("/offline.") && e.endsWith(".html")
                  ) || "";
                t.respondWith(W(0, n, n));
              }
            })(t, a))
          );
        case "POST": {
          const e = () => _e(t, a);
          return void (await (async function (e, t, n) {
            if (p.includes(t)) {
              const e = b();
              e.icons && 0 === e.icons.length && (await q());
            }
            e.respondWith(n());
          })(t, a, e));
        }
        default:
          t.respondWith(E(-1, "Не допустимый http метод"));
      }
    }),
    e.addEventListener("install", async function (t) {
      t.waitUntil(
        (async function () {
          const t = await caches.open(r),
            n = (await t.keys()).map((e) => new URL(e.url).pathname),
            a = e.assets.filter((e) => !n.includes(e));
          (e.loadedAssets = a), a.length > 0 && (await t.addAll(a));
        })()
      );
    }),
    e.addEventListener("activate", async function (t) {
      t.waitUntil(O()), t.waitUntil(e.clients.claim());
    });
})();
