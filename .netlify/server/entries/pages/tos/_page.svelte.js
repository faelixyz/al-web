import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import "../../../chunks/index2.js";
import { R as Root, A as Accordion_item, a as Accordion_trigger, b as Accordion_content } from "../../../chunks/index4.js";
import { B as Badge, a as Button } from "../../../chunks/index3.js";
import { I as Icon } from "../../../chunks/Icon.js";
const Circle_check_big = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M21.801 10A10 10 0 1 1 17 3.335" }],
    ["path", { "d": "m9 11 3 3L22 4" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "circle-check-big" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const File_text = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
      }
    ],
    ["path", { "d": "M14 2v4a2 2 0 0 0 2 2h4" }],
    ["path", { "d": "M10 9H8" }],
    ["path", { "d": "M16 13H8" }],
    ["path", { "d": "M16 17H8" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "file-text" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Info = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["path", { "d": "M12 16v-4" }],
    ["path", { "d": "M12 8h.01" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "info" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Lock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "18",
        "height": "11",
        "x": "3",
        "y": "11",
        "rx": "2",
        "ry": "2"
      }
    ],
    ["path", { "d": "M7 11V7a5 5 0 0 1 10 0v4" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "lock" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Shield = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "shield" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="container mx-auto px-4 py-16 max-w-3xl"><h1 class="text-4xl font-extrabold mb-8 text-center">Nutzungsbedingungen
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
  )}</h1> <div class="bg-card text-card-foreground rounded-lg p-6 mb-8" data-svelte-h="svelte-1qptntf"><p class="text-xl mb-4">Zusammenfassung:</p> <ul class="list-disc pl-6 space-y-2"><li>Durch die Nutzung unserer Dienste stimmst du diesen Bedingungen zu.</li> <li>Respektiere andere Benutzer und unsere Plattform.</li> <li>Verstößt du gegen diese Bedingungen, behalten wir uns das Recht vor, dein Konto zu sperren oder zu entfernen.</li></ul></div> ${validate_component(Root, "Accordion").$$render($$result, { class: "mb-8" }, {}, {
    default: () => {
      return `${validate_component(Accordion_item, "AccordionItem").$$render($$result, { value: "item-1" }, {}, {
        default: () => {
          return `${validate_component(Accordion_trigger, "AccordionTrigger").$$render($$result, {}, {}, {
            default: () => {
              return `1. Allgemeine Bestimmungen`;
            }
          })} ${validate_component(Accordion_content, "AccordionContent").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="flex items-center space-x-2">${validate_component(Info, "Info").$$render($$result, { class: "w-6 h-6 text-primary" }, {}, {})} <span data-svelte-h="svelte-s7ukb0">Unsere Dienste stehen allen Nutzern offen, die die geltenden Bedingungen und Vorschriften akzeptieren. Mit der Nutzung erklärst du dich damit einverstanden, keine schädlichen Handlungen vorzunehmen, die das System oder andere Nutzer beeinträchtigen könnten.</span></div>`;
            }
          })}`;
        }
      })} ${validate_component(Accordion_item, "AccordionItem").$$render($$result, { value: "item-2" }, {}, {
        default: () => {
          return `${validate_component(Accordion_trigger, "AccordionTrigger").$$render($$result, {}, {}, {
            default: () => {
              return `2. Verpflichtungen des Nutzers`;
            }
          })} ${validate_component(Accordion_content, "AccordionContent").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="flex items-center space-x-2">${validate_component(Circle_check_big, "CheckCircle").$$render($$result, { class: "w-6 h-6 text-primary" }, {}, {})} <span data-svelte-h="svelte-cb62eu">Als Nutzer unserer Plattform verpflichtest du dich, unsere Dienste verantwortungsbewusst und in Übereinstimmung mit diesen Bedingungen zu nutzen. Dazu gehört insbesondere:
						<ul class="list-disc pl-6 space-y-2 mt-2"><li>Kein Veröffentlichen von unangebrachten oder rechtswidrigen Inhalten.</li> <li>Kein Versuch, unbefugten Zugriff auf andere Konten oder Daten zu erhalten.</li> <li>Respektvoller Umgang mit anderen Nutzern und deren Beiträgen.</li></ul></span></div>`;
            }
          })}`;
        }
      })} ${validate_component(Accordion_item, "AccordionItem").$$render($$result, { value: "item-3" }, {}, {
        default: () => {
          return `${validate_component(Accordion_trigger, "AccordionTrigger").$$render($$result, {}, {}, {
            default: () => {
              return `3. Haftungsausschluss`;
            }
          })} ${validate_component(Accordion_content, "AccordionContent").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="flex items-center space-x-2">${validate_component(Shield, "Shield").$$render($$result, { class: "w-6 h-6 text-primary" }, {}, {})} <span data-svelte-h="svelte-1rxiojm">Unsere Dienste werden &quot;wie besehen&quot; zur Verfügung gestellt, und wir übernehmen keine Haftung für Schäden, Verluste oder Datenverlust, die durch die Nutzung unserer Dienste entstehen könnten. Die Nutzung erfolgt auf eigene Verantwortung.</span></div>`;
            }
          })}`;
        }
      })} ${validate_component(Accordion_item, "AccordionItem").$$render($$result, { value: "item-4" }, {}, {
        default: () => {
          return `${validate_component(Accordion_trigger, "AccordionTrigger").$$render($$result, {}, {}, {
            default: () => {
              return `4. Änderungen der Nutzungsbedingungen`;
            }
          })} ${validate_component(Accordion_content, "AccordionContent").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="flex items-center space-x-2">${validate_component(File_text, "FileText").$$render($$result, { class: "w-6 h-6 text-primary" }, {}, {})} <span data-svelte-h="svelte-vwwf4e">Wir behalten uns das Recht vor, diese Nutzungsbedingungen jederzeit zu ändern. Nutzer werden über wesentliche Änderungen informiert. Es liegt in der Verantwortung des Nutzers, regelmäßig die aktualisierten Bedingungen zu überprüfen.</span></div>`;
            }
          })}`;
        }
      })} ${validate_component(Accordion_item, "AccordionItem").$$render($$result, { value: "item-5" }, {}, {
        default: () => {
          return `${validate_component(Accordion_trigger, "AccordionTrigger").$$render($$result, {}, {}, {
            default: () => {
              return `5. Datensicherheit und Schutz`;
            }
          })} ${validate_component(Accordion_content, "AccordionContent").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="flex items-center space-x-2">${validate_component(Lock, "Lock").$$render($$result, { class: "w-6 h-6 text-primary" }, {}, {})} <span data-svelte-h="svelte-15wn37j">Wir verpflichten uns zum Schutz deiner Daten und setzen moderne Sicherheitsmaßnahmen ein, um unbefugten Zugriff oder Missbrauch zu verhindern. Deine Daten werden stets vertraulich behandelt und nur im Rahmen der gesetzlichen Bestimmungen verwendet.</span></div>`;
            }
          })}`;
        }
      })}`;
    }
  })} <div class="bg-muted p-4 rounded-lg mb-8"><h2 class="text-2xl font-bold mb-4 flex items-center">${validate_component(Lock, "Lock").$$render($$result, { class: "w-6 h-6 mr-2" }, {}, {})}
			Datenschutzrichtlinie</h2> <p data-svelte-h="svelte-1s0g42t">Unsere Datenschutzrichtlinie beschreibt, wie wir persönliche Informationen sammeln, nutzen und schützen. Durch die Nutzung unserer Dienste erklärst du dich mit der Verarbeitung deiner Daten gemäß unserer Datenschutzrichtlinie einverstanden.</p></div> <div class="text-center">${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "outline",
      class: "animate-bounce"
    },
    {},
    {
      default: () => {
        return `Verstanden und akzeptiert :)`;
      }
    }
  )}</div></div> ${$$result.head += `<!-- HEAD_svelte-fyz7ik_START -->${$$result.title = `<title>A&amp;L Technologies - Nutzungsbedingungen</title>`, ""}<!-- HEAD_svelte-fyz7ik_END -->`, ""}`;
});
export {
  Page as default
};
