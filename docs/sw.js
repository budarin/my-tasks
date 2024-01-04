!(function () {
  var e = {
      401: function (e) {
        e.exports = { appPath: "/my-tasks/" };
      },
    },
    t = {};
  function r(n) {
    var a = t[n];
    if (void 0 !== a) return a.exports;
    var i = (t[n] = { exports: {} });
    return e[n](i, i.exports, r), i.exports;
  }
  !(function () {
    "use strict";
    const e = self,
      t = 200,
      n = 206,
      a = "assets",
      i = "Content-Security-Policy";
    const s = "/api/",
      o = "get_tasks",
      c = { "Content-Type": "application/json; charset=utf-8" },
      d = "RELOAD_PAGE",
      u = "create_category",
      l = "update_category",
      f = "delete_category",
      g = "create_task",
      p = "update_task",
      _ = "delete_task",
      y = [u, l, f, g, p, _];
    const m = "tasks",
      w = "kv-storage";
    async function h(e) {
      if (e.icons && e.icons.length > 0) {
        let t;
        const r = JSON.stringify(e),
          n = await caches.open(w),
          a = await n.match(m);
        void 0 !== a && (t = await a.text()),
          (void 0 !== a && t === r) ||
            (await n.put(
              m,
              new Response(r, {
                headers: new Headers({
                  ...c,
                  "Content-Length": String(r.length),
                }),
              })
            ));
      }
    }
    let b = { tasks: [], categories: [], priorities: [], icons: [] };
    function v() {
      return b;
    }
    async function k(e) {
      (b = e), await h(e);
    }
    function x(e) {
      const t = new Date();
      return t.setDate(t.getDate() + e), t.toISOString();
    }
    const S = {
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
          due_date_time: x(-1),
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
          due_date_time: x(1),
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
    async function T() {
      let e = v();
      const t = await caches.open(w),
        r = await t.match(m);
      if (e.icons && 0 === e.icons.length) {
        if (void 0 !== r) {
          const t = await r.json();
          if (t) return (e = t), await k(e), e;
        }
        if (e.icons && 0 === e.icons.length) return await k(S), S;
      }
      return r || (await h(e)), e;
    }
    async function j() {
      await (async function () {
        const t = await caches.open(a);
        let r = (await t.keys()).map((e) => new URL(e.url).pathname);
        const n = r.filter((t) => !e.assets.includes(t));
        n.length > 0 &&
          (await Promise.all(
            n.map(async (e) => {
              await t.delete(e), (r = r.filter((t) => t !== e));
            })
          ));
        const i = e.assets.filter((e) => !r.includes(e));
        i.length > 0 && (await t.addAll(i));
      })(),
        await T(),
        await (async function () {
          e.clients.matchAll().then((e) => {
            e.forEach((e) => e.postMessage({ type: d }));
          });
        })();
    }
    const O = () => {};
    let q = new Proxy({}, { get: () => O });
    const W = [
      "/my-tasks/android-chrome-192x192.1cfc30bbcbf340fc741d.png",
      "/my-tasks/android-chrome-512x512.558e975c145ffb2a28fd.png",
      "/my-tasks/android-chrome-maskable-192x192.126708023a549b771f76.png",
      "/my-tasks/android-chrome-maskable-512x512.d40a692f812ed7f5e7e3.png",
      "/my-tasks/app.b19d5e79b850c83bf2a7.js",
      "/my-tasks/apple-touch-icon.7cb6aa9a5fc2e73f0df5.png",
      "/my-tasks/budarin.4a1954bad283653e8db0.js",
      "/my-tasks/error.8ad17092b67f41ed6f08.mp3",
      "/my-tasks/favicon-32x32.88ac8115acd8f90a85e8.png",
      "/my-tasks/favicon.31159ba4d345a313888e.ico",
      "/my-tasks/main.c6bc6f34aadcef5cc14d.js",
      "/my-tasks/npms.03b680477565bc10ec71.js",
      "/my-tasks/react.072e730091aa92f00ee4.js",
      "/my-tasks/roboto-regular-webfont.7c365dca831ccd4122ac.woff2",
      "/my-tasks/runtime.bc4efe37b25cdad860ee.js",
      "/my-tasks/todo.91f9a6b8aca587d9191a.svg",
      "/my-tasks/manifest.64bc84174978136d0e8904b11fdb1943.webmanifest",
      "/my-tasks/offline.3a923f3b03070581b1e63f0d640b5d17.html",
    ];
    function E(e) {}
    function R(e, t, r) {
      return new Response(
        JSON.stringify({ id: e, error: { code: 500, message: t, data: r } }),
        { headers: c, status: 200 }
      );
    }
    function A() {
      return (
        navigator.userAgent.toLowerCase().includes("chrome") ||
        navigator.userAgent.toLowerCase().includes("chromium")
      );
    }
    var I = r(401);
    const L = (e) =>
        e.startsWith(`${I.appPath}offline.`) && e.endsWith(".html"),
      $ =
        "default-src 'none'; base-uri 'none'; object-src 'none'; connect-src 'self'; media-src 'self'; manifest-src 'self'; img-src 'self' data: ; worker-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'sha384-UHCgC9iSIiEs2yDLbWHT4b6uyXHwNMd3Fx95ZbjACO6ijVsew0khvdoFCOOuiHb4' 'sha384-Ul13hXxd26CuGKdSBqjdxgWgvOJ0LujQd8PL_Qms8nl8pC94Ey-zBvlEhpvMv9Na' 'sha384-2WZPK9bOk-gNZ-Z8eKZbUPTzTOgw5OrAYWl8epa74e2o9NSBRq32eXWfEnKLR9M9' 'sha384-xnWWkOTSvPAuspyBC92de_b4xZpLVwU4ZWtyeBuEHz3DqExMpCkH-aykTvk1EfrZ' 'sha384-4kiS01TcNDsGwyI0KZpj1tgmA51QHhhrjO9NCcp3Q3mw2SJ-lT4HyWb9FLrlgqnz' 'sha384-mKvTpL5idEXA_pmfTavsSTwY_Uah7A3pfb4TYz__AZS7QGb_hHaECOKTmuiKgwYB' 'sha384-SmxOpWuP2rfdOW8YH8vEapMM0BfsX06btGEEQvd4qeR4UJXAhLhyzoo1swWi8lMH' 'sha384-ZbAierk9Odvv87JLHat0EOWMwPreaC1hs5FxB5KeY8mYhNzmwDTb9jC5d0so89Wn' 'unsafe-inline'; font-src 'self' data:; require-trusted-types-for 'script'; trusted-types webpack-tt default;";
    async function C(r, s, o) {
      const c = await caches.open(a),
        d = await c.match(s);
      if (d) {
        if (L(s) && !d.headers.get(i)) {
          const e = d.clone(),
            t = new Headers(d.headers);
          t.set(i, $);
          try {
            let r = await d.text();
            A() && (r = r.replace(/<script id="tt"[\s\S]*?<\/script>/gi, ""));
            const n = new Response(r, {
              status: e.status,
              statusText: e.statusText,
              headers: t,
            });
            return await c.put(s, n.clone()), n;
          } catch (e) {
            return d;
          }
        }
        return d;
      }
      return (async function (r, s) {
        let o;
        const c = await fetch(r);
        if (null === c.body) return c;
        const d = new Headers(c.headers);
        if (c.status === n) {
          const e = await c.blob(),
            t = await e.arrayBuffer();
          o = new Response(t, { headers: d });
        } else {
          let e;
          L(r)
            ? ((e = await c.text()),
              d.set(i, $),
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
        u && e.assets.includes(s) && (await caches.open(a)).put(r, o.clone());
        return o;
      })(s, o);
    }
    function N(e) {
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
      const r = e.toString(16).padStart(12, "0"),
        n = (function (e) {
          let t = "";
          for (let r = 0; r < e.length; r++) {
            const n = e[r].toString(16);
            t += 2 === n.length ? n : "0" + n;
          }
          return t;
        })(t);
      return `${r.substring(0, 8)}-${r.substring(8)}-${n.substring(
        0,
        4
      )}-${n.substring(4, 8)}-${n.substring(8)}`;
    }
    function H(e) {
      return "number" == typeof e && Number.isInteger(e);
    }
    const P = (e, t) =>
      `Свойство сущности ${e} "${t}" должно быть целым числом`;
    function U(e, t) {
      return (
        void 0 === t && (t = 65536),
        (r) => "string" == typeof r && r.length >= e && r.length <= t
      );
    }
    const M = (e, t, r, n) =>
      `Свойство сущности ${e} "${t}" должно быть строкой длиной от ${r} до ${n} символов`;
    const Z = (e, t, r, n) => {
      if (
        !1 ===
        (function (e) {
          return "object" == typeof e && null !== e;
        })(e)
      )
        return {
          error: { message: `Сущность "${n}" должна быть объектом`, data: e },
        };
      const a = e,
        i = Object.keys(t);
      for (let r = 0; r < i.length; r++) {
        const s = i[r],
          o = t[s];
        if (!0 === o.required && void 0 === a[s])
          return {
            error: {
              message: `Свойство "${s}" сущности ${n} отсутствует`,
              data: e,
            },
          };
        for (let t = 0; t < o.validators.length; t++) {
          const r = o.validators[t];
          if (!1 === r[0](a[s])) return { error: { message: r[1], data: e } };
        }
      }
      return { result: r(a) };
    };
    function D(e) {
      const { icon_id: t, category_name: r } = e || {};
      return { icon_id: t, category_name: r };
    }
    const B = "Категория",
      J = {
        icon_id: { validators: [[H, P(B, "icon_id")]], required: !0 },
        category_name: {
          validators: [[U(3, 20), M(B, "category_name", 3, 20)]],
          required: !0,
        },
      },
      K = (e) => Z(e, J, D, B);
    function z(e) {
      const { category_id: t, icon_id: r, category_name: n } = e || {};
      return { category_id: t, icon_id: r, category_name: n };
    }
    const G = {
        category_id: { validators: [[H, P(B, "category_id")]], required: !0 },
        ...J,
      },
      Y = (e) => Z(e, G, z, B);
    function Q(e) {
      return (t) => void 0 === t || e(t);
    }
    function X(e) {
      return "boolean" == typeof e;
    }
    function V(e, t) {
      return `Свойство сущности ${e} "${t}" должно быть undefined или boolean`;
    }
    function F(e) {
      const {
        title: t,
        priority_id: r,
        category_id: n,
        description: a,
        due_date_time: i,
        deleted: s,
        completed: o,
      } = e || {};
      return {
        title: t,
        priority_id: r,
        category_id: n,
        description: a,
        due_date_time: i,
        deleted: s,
        completed: o,
      };
    }
    const ee = "Задача",
      te = {
        title: {
          validators: [[U(3, 100), M(ee, "title", 3, 100)]],
          required: !0,
        },
        priority_id: { validators: [[H, P(ee, "priority_id")]], required: !0 },
        category_id: {
          validators: [
            [
              Q(H),
              (function (e, t) {
                return `Свойство сущности ${e} "${t}" должно быть undefined или целым числом`;
              })(ee, "category_id"),
            ],
          ],
        },
        description: {
          validators: [[Q(U(3, 1e3)), M(ee, "description", 3, 1e3)]],
        },
        due_date_time: {
          validators: [
            [
              Q(function (e) {
                return /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/.test(
                  e
                );
              }),
              `Свойство сущности ${ee} "due_date_time" должно быть датой в формате ISO`,
            ],
          ],
        },
        deleted: { validators: [[Q(X), V(ee, "deleted")]] },
        completed: { validators: [[Q(X), V(ee, "completed")]] },
      },
      re = (e) => Z(e, te, F, ee);
    function ne(e) {
      const {
        task_id: t,
        title: r,
        priority_id: n,
        category_id: a,
        description: i,
        due_date_time: s,
        deleted: o,
        completed: c,
      } = e || {};
      return {
        task_id: t,
        title: r,
        priority_id: n,
        category_id: a,
        description: i,
        due_date_time: s,
        deleted: o,
        completed: c,
      };
    }
    const ae = {
        task_id: { validators: [[H, P(ee, "task_id")]], required: !0 },
        ...te,
      },
      ie = (e) => Z(e, ae, ne, ee);
    function se(e, t, r) {
      return (
        void 0 === r && (r = 200),
        new Response(JSON.stringify({ id: e, result: t }), {
          headers: c,
          status: r,
        })
      );
    }
    class oe {
      constructor(e, t) {
        (this.type = e), (this.data = t);
      }
    }
    async function ce(t, r) {
      e.clients.matchAll().then((e) => {
        e.forEach((e) => {
          e.id !== t && e.postMessage(r);
        });
      });
    }
    async function de(e) {
      const { request: t } = e,
        r = v(),
        { id: n, params: a } = await t.json(),
        i = await (async function (e, t) {
          const r = re(t);
          if (!r.error) {
            const n = r.result;
            if (!e.priorities.find((e) => e.priority_id === n.priority_id))
              return {
                error: {
                  message: "Не известный идентификатор приоритета",
                  data: t,
                },
              };
            if (!e.categories.find((e) => e.category_id === n.category_id))
              return {
                error: {
                  message: "Не известный идентификатор категории",
                  data: t,
                },
              };
            const a = e.tasks.at(-1)?.task_id || 0,
              i = { ...n, task_id: a + 1 };
            return e.tasks.push(i), { result: i };
          }
          return r;
        })(r, a);
      if (i.result) {
        const t = i.result;
        return (
          await k(r), await ce(e.clientId, new oe("create_task", t)), se(n, t)
        );
      }
      return R(n, i.error.message, i.error.data);
    }
    async function ue(e) {
      const { request: t } = e,
        r = v(),
        { id: n, params: a } = await t.json(),
        i = await (async function (e, t) {
          const r = ie(t);
          if (r.result) {
            const n = r.result,
              a = e.tasks.findIndex((e) => e.task_id === n.task_id);
            return -1 === a
              ? { error: { message: "Задача не найдена", data: t } }
              : e.priorities.find((e) => e.priority_id === n.priority_id)
              ? e.categories.find((e) => e.category_id === n.category_id)
                ? ((e.tasks[a] = n), { result: n })
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
          return r;
        })(r, a);
      if (i.result) {
        const t = i.result;
        return (
          await k(r), await ce(e.clientId, new oe("update_task", t)), se(n, t)
        );
      }
      return R(n, i.error.message, i.error.data);
    }
    function le(e, t) {
      if (e === t) return !0;
      if (
        "object" != typeof e ||
        null === e ||
        "object" != typeof t ||
        null === t
      )
        return !1;
      const r = Object.keys(e),
        n = Object.keys(t);
      return (
        r.length === n.length && r.every((r) => n.includes(r) && le(e[r], t[r]))
      );
    }
    async function fe(e) {
      const { request: t } = e,
        r = v(),
        { id: n, params: a } = await t.json(),
        i = await (async function (e, t) {
          const r = ie(t);
          if (r.result) {
            const n = r.result,
              a = e.tasks.findIndex((e) => le(ne(e), ne(n)));
            return -1 === a
              ? { error: { message: "Задача не найдена", data: t } }
              : (e.tasks.splice(a, 1), { result: n });
          }
          return r;
        })(r, a);
      if (i.result) {
        const t = i.result;
        return (
          await k(r), await ce(e.clientId, new oe("delete_task", t)), se(n, t)
        );
      }
      return R(n, i.error.message, i.error.data);
    }
    async function ge(e) {
      const { request: t } = e,
        r = v(),
        { id: n, params: a } = await t.json(),
        i = await (async function (e, t) {
          const r = K(t);
          if (r.result) {
            const n = r.result,
              a = e.categories.find((e) => e.category_name === n.category_name);
            if (a)
              return {
                error: {
                  message: "Категория с таким именем уже существует",
                  data: t,
                },
              };
            if (!e.icons.find((e) => e.icon_id === n.icon_id))
              return {
                error: {
                  message: "Не известный идентификатор иконки",
                  data: t,
                },
              };
            const i = e.categories.at(-1)?.category_id || 0,
              s = { ...n, category_id: i + 1 };
            return e.categories.push(s), { result: s };
          }
          return r;
        })(r, a);
      if (i.result) {
        const t = i.result;
        return (
          await k(r),
          await ce(e.clientId, new oe("create_category", t)),
          se(n, t)
        );
      }
      return R(n, i.error.message, i.error.data);
    }
    async function pe(e) {
      const { request: t } = e,
        r = v(),
        { id: n, params: a } = await t.json(),
        i = await (async function (e, t) {
          const r = Y(t);
          if (r.result) {
            const n = r.result;
            let a = e.categories.findIndex(
              (e) => e.category_id === n.category_id
            );
            return -1 === a
              ? { error: { message: "Категория не найдена", data: t } }
              : e.categories.find(
                  (e) =>
                    e.category_name === n.category_name &&
                    e.category_id !== n.category_id
                )
              ? {
                  error: {
                    message: "Категория с таким именем уже существует",
                    data: t,
                  },
                }
              : e.icons.find((e) => e.icon_id === n.icon_id)
              ? ((a = e.categories.findIndex(
                  (e) => e.category_id === n.category_id
                )),
                (e.categories[a] = n),
                { result: n })
              : {
                  error: {
                    message: "Не известный идентификатор иконки",
                    data: t,
                  },
                };
          }
          return r;
        })(r, a);
      if (i.result) {
        const t = i.result;
        return (
          k(r), await ce(e.clientId, new oe("update_category", t)), se(n, t)
        );
      }
      return R(n, i.error.message, i.error.data);
    }
    async function _e(e) {
      const { request: t } = e,
        r = v(),
        { id: n, params: a } = await t.json(),
        i = await (async function (e, t) {
          const r = Y(t);
          if (r.result) {
            const n = r.result,
              a = e.categories.findIndex((e) => le(e, n));
            return -1 === a
              ? { error: { message: "Категория не найдена", data: t } }
              : e.tasks.find((e) => e.category_id === n.category_id)
              ? {
                  error: {
                    message: "Категория используется в задачах",
                    data: t,
                  },
                }
              : (e.categories.splice(a, 1), { result: n });
          }
          return r;
        })(r, a);
      if (i.result) {
        const t = i.result;
        return (
          k(r), await ce(e.clientId, new oe("delete_category", t)), se(n, t)
        );
      }
      return R(n, i.error.message, i.error.data);
    }
    async function ye(e, t) {
      switch (t) {
        case o:
          return (async function (e) {
            const { request: t } = e,
              r = await T(),
              n = t.headers.get("x-request-id");
            return new Response(JSON.stringify({ id: n, result: r }), {
              headers: c,
              status: 200,
            });
          })(e);
        case u:
          return ge(e);
        case l:
          return pe(e);
        case f:
          return _e(e);
        case g:
          return de(e);
        case p:
          return ue(e);
        case _:
          return fe(e);
        case "/log/info":
        case "/log/warn":
        case "/log/error":
          return (async function (e) {
            const { request: t } = e,
              r = (await t.json()).id || N();
            return new Response(JSON.stringify({ id: r, result: "Ok" }), {
              headers: c,
              status: 200,
            });
          })(e);
        default:
          return new Response(
            JSON.stringify({ error: { code: 404, error: "Not found" } }),
            { headers: c, status: 200 }
          );
      }
    }
    (e.id = Date.now()),
      (e.VERSION = "1.0.0"),
      (e.assets = W),
      (e.isRepearing = !1),
      (e.logger = q),
      (e.onerror = E),
      e.addEventListener("message", function (t) {
        t.data && "SKIP_WAITING" === t.data.type && e.skipWaiting();
      }),
      e.addEventListener("fetch", async function (t) {
        const r = t.request,
          n = (function (e) {
            const { pathname: t } = new URL(e);
            return t.startsWith(s) ? t.slice(s.length) : t;
          })(r.url);
        switch (r.method) {
          case "GET":
            return (
              (async function () {
                const t = await caches.open(a),
                  r = (await t.keys()).map((e) => new URL(e.url).pathname),
                  n = e.assets.filter(
                    (e) => !r.includes(e) && !e.startsWith("/offline.")
                  );
                if (n.length > 0 && !e.isRepearing) {
                  e.isRepearing = !0;
                  try {
                    await t.addAll(n);
                  } finally {
                    e.isRepearing = !1;
                  }
                }
              })(),
              void (await (async function (t, r) {
                if ("document" !== t.request.destination || "/" !== r)
                  e.assets.includes(r) && t.respondWith(C(0, t.request.url, r));
                else {
                  const r =
                    e.assets.find(
                      (e) => e.startsWith("/offline.") && e.endsWith(".html")
                    ) || "";
                  t.respondWith(C(0, r, r));
                }
              })(t, n))
            );
          case "POST": {
            const e = () => ye(t, n);
            return void (await (async function (e, t, r) {
              if (y.includes(t)) {
                const e = v();
                e.icons && 0 === e.icons.length && (await T());
              }
              e.respondWith(r());
            })(t, n, e));
          }
          default:
            t.respondWith(R(-1, "Не допустимый http метод"));
        }
      }),
      e.addEventListener("install", async function (t) {
        t.waitUntil(
          (async function () {
            const t = await caches.open(a),
              r = (await t.keys()).map((e) => new URL(e.url).pathname),
              n = e.assets.filter((e) => !r.includes(e));
            (e.loadedAssets = n), n.length > 0 && (await t.addAll(n));
          })()
        );
      }),
      e.addEventListener("activate", async function (t) {
        t.waitUntil(j()), t.waitUntil(e.clients.claim());
      });
  })();
})();
