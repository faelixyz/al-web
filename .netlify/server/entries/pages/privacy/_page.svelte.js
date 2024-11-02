import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import "../../../chunks/index2.js";
import { R as Root, A as Accordion_item, a as Accordion_trigger, b as Accordion_content } from "../../../chunks/index4.js";
import { B as Badge, a as Button } from "../../../chunks/index3.js";
import { I as Icon } from "../../../chunks/Icon.js";
const Cookie = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"
      }
    ],
    ["path", { "d": "M8.5 8.5v.01" }],
    ["path", { "d": "M16 15.5v.01" }],
    ["path", { "d": "M12 12v.01" }],
    ["path", { "d": "M11 17v.01" }],
    ["path", { "d": "M7 14v.01" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "cookie" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Eye = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
      }
    ],
    ["circle", { "cx": "12", "cy": "12", "r": "3" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "eye" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Fingerprint = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"
      }
    ],
    ["path", { "d": "M14 13.12c0 2.38 0 6.38-1 8.88" }],
    ["path", { "d": "M17.29 21.02c.12-.6.43-2.3.5-3.02" }],
    ["path", { "d": "M2 12a10 10 0 0 1 18-6" }],
    ["path", { "d": "M2 16h.01" }],
    ["path", { "d": "M21.8 16c.2-2 .131-5.354 0-6" }],
    [
      "path",
      {
        "d": "M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"
      }
    ],
    ["path", { "d": "M8.65 22c.21-.66.45-1.32.57-2" }],
    ["path", { "d": "M9 6.8a6 6 0 0 1 9 5.2v2" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "fingerprint" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Shield_off = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "m2 2 20 20" }],
    [
      "path",
      {
        "d": "M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71"
      }
    ],
    [
      "path",
      {
        "d": "M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "shield-off" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Trash_2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M3 6h18" }],
    [
      "path",
      {
        "d": "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"
      }
    ],
    [
      "path",
      {
        "d": "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"
      }
    ],
    [
      "line",
      {
        "x1": "10",
        "x2": "10",
        "y1": "11",
        "y2": "17"
      }
    ],
    [
      "line",
      {
        "x1": "14",
        "x2": "14",
        "y1": "11",
        "y2": "17"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "trash-2" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="container mx-auto px-4 py-16 max-w-3xl"><h1 class="text-4xl font-extrabold mb-8 text-center">Datenschutzerklärung
		${validate_component(Badge, "Badge").$$render(
    $$result,
    {
      variant: "outline",
      class: "ml-2 align-middle"
    },
    {},
    {
      default: () => {
        return `von A&amp;L`;
      }
    }
  )}</h1> <div class="bg-card text-card-foreground rounded-lg p-6 mb-8" data-svelte-h="svelte-1dhi5il"><p class="text-xl mb-4">Zusammenfassung:</p> <ul class="list-disc pl-6 space-y-2"><li>Wir erheben verschiedene Daten aus unseren Diensten.</li> <li>Ihre Geheimnisse sind bei uns sicher. Wenn alles öffentlich ist, kann nichts geleakt werden!</li> <li>Unser Respekt für Ihre Privatsphäre ist vorhanden.</li></ul></div> ${validate_component(Root, "Accordion").$$render($$result, { class: "mb-8" }, {}, {
    default: () => {
      return `${validate_component(Accordion_item, "AccordionItem").$$render($$result, { value: "item-1" }, {}, {
        default: () => {
          return `${validate_component(Accordion_trigger, "AccordionTrigger").$$render($$result, {}, {}, {
            default: () => {
              return `Welche Daten sammeln wir?`;
            }
          })} ${validate_component(Accordion_content, "AccordionContent").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="flex items-center space-x-2">${validate_component(Trash_2, "Trash2").$$render($$result, { class: "w-6 h-6 text-primary" }, {}, {})} <span data-svelte-h="svelte-1dtkt0k"><strong>A&amp;L Domains:</strong> <ul><li>Löschanfragen: Datum, Benutzerinformationen und ID.</li> <li>Subdomains: Informationen über die Subdomains und zugehörige Benutzer.</li> <li>Benutzer: Kontaktdaten, Anmeldeinformationen und Rolle im System.</li></ul> <strong>AURA Counter:</strong> <ul><li>Passwort zurücksetzen: Datum, Token und E-Mail-Adresse.</li> <li>Einlösbare und eingelöste Codes: Informationen über Benutzer und Codes.</li> <li>Transfers: Details zu den Transaktionen zwischen Benutzern.</li> <li>Benutzer: Kontoinformationen, Anmeldehistorie und Einstellungen.</li></ul> <strong>Projekte Planer:</strong> <ul><li>Ausgaben: Projektbezogene Ausgabeninformationen.</li> <li>Einladungen und Benachrichtigungen: Informationen über Projektteilnehmer und deren Status.</li> <li>Projekte: Details zu Projekten, einschließlich Budget und Verantwortlichen.</li> <li>Benutzer und Projektzuweisungen: Informationen zu Benutzern in Projekten.</li></ul></span></div>`;
            }
          })}`;
        }
      })} ${validate_component(Accordion_item, "AccordionItem").$$render($$result, { value: "item-2" }, {}, {
        default: () => {
          return `${validate_component(Accordion_trigger, "AccordionTrigger").$$render($$result, {}, {}, {
            default: () => {
              return `Wie verwenden wir Ihre Daten?`;
            }
          })} ${validate_component(Accordion_content, "AccordionContent").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="flex items-center space-x-2">${validate_component(Eye, "Eye").$$render($$result, { class: "w-6 h-6 text-primary" }, {}, {})} <span data-svelte-h="svelte-1732tvx">Wir verwenden die Daten nicht für böse Zwecke, wir verwenden sie damit dein Konto, Projekte oder deine AURA nicht verloren geht 👍</span></div>`;
            }
          })}`;
        }
      })} ${validate_component(Accordion_item, "AccordionItem").$$render($$result, { value: "item-3" }, {}, {
        default: () => {
          return `${validate_component(Accordion_trigger, "AccordionTrigger").$$render($$result, {}, {}, {
            default: () => {
              return `Wie schützen wir Ihre Daten?`;
            }
          })} ${validate_component(Accordion_content, "AccordionContent").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="flex items-center space-x-2">${validate_component(Shield_off, "ShieldOff").$$render($$result, { class: "w-6 h-6 text-primary" }, {}, {})} <span data-svelte-h="svelte-i2qgci">Wir schützen Ihre Daten, indem wir sie in sichere Datenbanken speichern!</span></div>`;
            }
          })}`;
        }
      })}`;
    }
  })} <div class="bg-muted p-4 rounded-lg mb-8"><h2 class="text-2xl font-bold mb-4 flex items-center">${validate_component(Cookie, "Cookie").$$render($$result, { class: "w-6 h-6 mr-2" }, {}, {})}
			Cookie-Richtlinie</h2> <p data-svelte-h="svelte-1n816a3">Es gibt keine Cookies, die wir speichern. Diese Website speichert keine Daten (aundl.tech). Andere Seiten wie AURA Counter, ProjektePlaner, PrizePal und A&amp;L Domains speichern, dass du mit deinen Anmeldedaten angemeldet bist.</p></div> <div class="bg-muted p-4 rounded-lg mb-8"><h2 class="text-2xl font-bold mb-4 flex items-center">${validate_component(Fingerprint, "Fingerprint").$$render($$result, { class: "w-6 h-6 mr-2" }, {}, {})}
			Fingerabdruck-Richtlinie</h2> <p data-svelte-h="svelte-1i6qz2o">Wir verwenden kein Fingerprinting. was ist das überhaupt lol</p></div> <div class="text-center">${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "outline",
      class: "animate-bounce"
    },
    {},
    {
      default: () => {
        return `Keine hinterhältigen Tricks, wir versprechens :)`;
      }
    }
  )}</div></div> ${$$result.head += `<!-- HEAD_svelte-6ixxh7_START -->${$$result.title = `<title>A&amp;L Technologies - Datenschutz</title>`, ""}<!-- HEAD_svelte-6ixxh7_END -->`, ""}`;
});
export {
  Page as default
};
