import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import "../../../chunks/index2.js";
import { C as Card, a as Card_header, b as Card_title, c as Card_content } from "../../../chunks/card-title.js";
import "clsx";
import { B as Badge, a as Button } from "../../../chunks/index3.js";
import { I as Icon } from "../../../chunks/Icon.js";
const Brain = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"
      }
    ],
    [
      "path",
      {
        "d": "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"
      }
    ],
    [
      "path",
      {
        "d": "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"
      }
    ],
    ["path", { "d": "M17.599 6.5a3 3 0 0 0 .399-1.375" }],
    ["path", { "d": "M6.003 5.125A3 3 0 0 0 6.401 6.5" }],
    ["path", { "d": "M3.477 10.896a4 4 0 0 1 .585-.396" }],
    ["path", { "d": "M19.938 10.5a4 4 0 0 1 .585.396" }],
    ["path", { "d": "M6 18a4 4 0 0 1-1.967-.516" }],
    ["path", { "d": "M19.967 17.484A4 4 0 0 1 18 18" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "brain" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Code = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["polyline", { "points": "16 18 22 12 16 6" }],
    ["polyline", { "points": "8 6 2 12 8 18" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "code" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Coffee = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M10 2v2" }],
    ["path", { "d": "M14 2v2" }],
    [
      "path",
      {
        "d": "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"
      }
    ],
    ["path", { "d": "M6 2v2" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "coffee" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Rocket = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
      }
    ],
    [
      "path",
      {
        "d": "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"
      }
    ],
    [
      "path",
      {
        "d": "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"
      }
    ],
    [
      "path",
      {
        "d": "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "rocket" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Star = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "polygon",
      {
        "points": "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "star" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Youtube = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"
      }
    ],
    ["path", { "d": "m10 15 5-3-5-3z" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "youtube" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="container mx-auto px-4 py-16 max-w-4xl"><h1 class="text-4xl font-extrabold mb-8 text-center">Über Uns
		${validate_component(Badge, "Badge").$$render(
    $$result,
    {
      variant: "outline",
      class: "ml-2 align-middle"
    },
    {},
    {
      default: () => {
        return `Wir sind ein kleines Team`;
      }
    }
  )}</h1> <div class="bg-card text-card-foreground rounded-lg p-6 mb-8" data-svelte-h="svelte-kk9rcd"><p class="text-xl mb-4">Dieses Projekt wurde von A&amp;L Technologies erstellt.</p> <ul class="list-disc pl-6 space-y-2"><li>Wir sind Felix S. und Tim E.</li> <li>Wir konzentrieren uns darauf, die besten Produkte zu entwickeln.</li> <li>Unser Ziel ist es, Nutzer zufriedenzustellen und zu unterstützen.</li></ul></div> <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Card_header, "CardHeader").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Card_title, "CardTitle").$$render($$result, { class: "flex items-center" }, {}, {
            default: () => {
              return `${validate_component(Code, "Code").$$render($$result, { class: "w-6 h-6 mr-2 text-primary" }, {}, {})}
					Code Qualität`;
            }
          })}`;
        }
      })} ${validate_component(Card_content, "CardContent").$$render($$result, {}, {}, {
        default: () => {
          return `<p data-svelte-h="svelte-28oulo">Wir legen Wert auf sauberen und wartbaren Code.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Card_header, "CardHeader").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Card_title, "CardTitle").$$render($$result, { class: "flex items-center" }, {}, {
            default: () => {
              return `${validate_component(Coffee, "Coffee").$$render($$result, { class: "w-6 h-6 mr-2 text-primary" }, {}, {})}
					Wir köcheln unsere Projekte!`;
            }
          })}`;
        }
      })} ${validate_component(Card_content, "CardContent").$$render($$result, {}, {}, {
        default: () => {
          return `<p data-svelte-h="svelte-177f48a">Unsere Projekte werden sehr oft getestet bevor wir sie publishen.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Card_header, "CardHeader").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Card_title, "CardTitle").$$render($$result, { class: "flex items-center" }, {}, {
            default: () => {
              return `${validate_component(Brain, "Brain").$$render($$result, { class: "w-6 h-6 mr-2 text-primary" }, {}, {})}
					Kreativität`;
            }
          })}`;
        }
      })} ${validate_component(Card_content, "CardContent").$$render($$result, {}, {}, {
        default: () => {
          return `<p data-svelte-h="svelte-bcovpe">Wir bringen innovative Ideen in jedes Projekt ein.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Card_header, "CardHeader").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Card_title, "CardTitle").$$render($$result, { class: "flex items-center" }, {}, {
            default: () => {
              return `${validate_component(Rocket, "Rocket").$$render($$result, { class: "w-6 h-6 mr-2 text-primary" }, {}, {})}
					Auf zu neuen Höhen!`;
            }
          })}`;
        }
      })} ${validate_component(Card_content, "CardContent").$$render($$result, {}, {}, {
        default: () => {
          return `<p data-svelte-h="svelte-edhlrb">Wir streben immer nach Verbesserung und Wachstum.</p>`;
        }
      })}`;
    }
  })}</div> <div class="bg-muted p-6 rounded-lg mb-8"><h2 class="text-2xl font-bold mb-4 flex items-center">${validate_component(Star, "Star").$$render($$result, { class: "w-6 h-6 mr-2 text-yellow-400" }, {}, {})}
			Warum wir die Besten sind</h2> <ul class="list-disc pl-6 space-y-2" data-svelte-h="svelte-539hhr"><li>Wir setzen auf moderne Technologien.</li> <li>Wir arbeiten effizient und zielorientiert.</li> <li>Wir schätzen unser Team und unsere Nutzer.</li></ul></div> <div class="text-center">${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "default",
      class: "animate-pulse"
    },
    {},
    {
      default: () => {
        return `${validate_component(Youtube, "Youtube").$$render($$result, { class: "w-5 h-5 mr-2" }, {}, {})}
			Unsere Projekte ansehen`;
      }
    }
  )}</div></div> ${$$result.head += `<!-- HEAD_svelte-1mbjujd_START -->${$$result.title = `<title>A&amp;L Technologies - Über Uns</title>`, ""}<!-- HEAD_svelte-1mbjujd_END -->`, ""}`;
});
export {
  Page as default
};
