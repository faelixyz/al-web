import { c as create_ssr_component, f as compute_rest_props, a as subscribe, h as spread, i as escape_object, b as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import "dequal";
import { m as makeElement, a as addMeltEventListener } from "../../chunks/index2.js";
import { c as createBitAttrs, a as createDispatcher } from "../../chunks/events.js";
import { c as cn } from "../../chunks/utils.js";
import { C as Card, a as Card_header, b as Card_title, c as Card_content } from "../../chunks/card-title.js";
import "clsx";
function createLabel() {
  const root = makeElement("label", {
    action: (node) => {
      const mouseDown = addMeltEventListener(node, "mousedown", (e) => {
        if (!e.defaultPrevented && e.detail > 1) {
          e.preventDefault();
        }
      });
      return {
        destroy: mouseDown
      };
    }
  });
  return {
    elements: {
      root
    }
  };
}
function getLabelData() {
  const NAME = "label";
  const PARTS = ["root"];
  const getAttrs = createBitAttrs(NAME, PARTS);
  return {
    NAME,
    getAttrs
  };
}
const Label$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["asChild", "el"]);
  let $root, $$unsubscribe_root;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { root } } = createLabel();
  $$unsubscribe_root = subscribe(root, (value) => $root = value);
  createDispatcher();
  const { getAttrs } = getLabelData();
  const attrs = getAttrs("root");
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0) $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0) $$bindings.el(el);
  builder = $root;
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_root();
  return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<label${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</label>`}`;
});
const Label = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  return `${validate_component(Label$1, "LabelPrimitive.Root").$$render(
    $$result,
    Object.assign(
      {},
      {
        class: cn("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", className)
      },
      $$restProps
    ),
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-col items-center justify-center min-h-screen p-4"><div class="container mx-auto flex flex-col items-center justify-center gap-8 mb-16">${validate_component(Label, "Label").$$render(
    $$result,
    {
      class: "text-white text-3xl md:text-5xl font-bold mb-2"
    },
    {},
    {
      default: () => {
        return `A&amp;L Technologies`;
      }
    }
  )} ${validate_component(Label, "Label").$$render($$result, { class: "text-white/90 text-lg" }, {}, {
    default: () => {
      return `Wir haben folgende Projekte:`;
    }
  })}</div> <div class="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Card_header, "CardHeader").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Card_title, "CardTitle").$$render($$result, {}, {}, {
            default: () => {
              return `A&amp;L Technologies Blog`;
            }
          })}`;
        }
      })} ${validate_component(Card_content, "CardContent").$$render($$result, {}, {}, {
        default: () => {
          return `<p data-svelte-h="svelte-1knlp8s">Ein Blog, der interessante Inhalte und Neuigkeiten zu unseren Projekten bietet.
					<a href="https://blog.aundl.tech" target="_blank" class="text-indigo-400">Besuchen Sie den Blog</a></p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Card_header, "CardHeader").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Card_title, "CardTitle").$$render($$result, {}, {}, {
            default: () => {
              return `ProjektePlaner`;
            }
          })}`;
        }
      })} ${validate_component(Card_content, "CardContent").$$render($$result, {}, {}, {
        default: () => {
          return `<p data-svelte-h="svelte-145jfcl">Ein Tool zur Planung und Verwaltung von Projekten.
					<a href="https://projekteplaner.de" target="_blank" class="text-indigo-400">Besuchen Sie ProjektePlaner</a></p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Card_header, "CardHeader").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Card_title, "CardTitle").$$render($$result, {}, {}, {
            default: () => {
              return `AURA Counter`;
            }
          })}`;
        }
      })} ${validate_component(Card_content, "CardContent").$$render($$result, {}, {}, {
        default: () => {
          return `<p data-svelte-h="svelte-1rf0vim">Wieviel AURA hast du?
					<a href="https://auracounter.de" target="_blank" class="text-indigo-400">Besuchen Sie AURA Counter</a></p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Card_header, "CardHeader").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Card_title, "CardTitle").$$render($$result, {}, {}, {
            default: () => {
              return `PrizePal Discord Bot`;
            }
          })}`;
        }
      })} ${validate_component(Card_content, "CardContent").$$render($$result, {}, {}, {
        default: () => {
          return `<p data-svelte-h="svelte-1nmeaeq">Ein Bot für Discord, der Gewinnspiele und Aktionen verwaltet.
					<a href="https://p.aundl.tech" target="_blank" class="text-indigo-400">Besuchen Sie PrizePal</a></p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Card_header, "CardHeader").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Card_title, "CardTitle").$$render($$result, {}, {}, {
            default: () => {
              return `PrizePal Discord Bot (Englisch)`;
            }
          })}`;
        }
      })} ${validate_component(Card_content, "CardContent").$$render($$result, {}, {}, {
        default: () => {
          return `<p data-svelte-h="svelte-1e1bjdp">Ein Bot für Discord, der Gewinnspiele und Aktionen verwaltet. In Englisch!
					<a href="https://us.p.aundl.tech" target="_blank" class="text-indigo-400">Besuchen Sie PrizePal US</a></p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Card_header, "CardHeader").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Card_title, "CardTitle").$$render($$result, {}, {}, {
            default: () => {
              return `A&amp;L Domains`;
            }
          })}`;
        }
      })} ${validate_component(Card_content, "CardContent").$$render($$result, {}, {}, {
        default: () => {
          return `<p data-svelte-h="svelte-ss2k23">Unsere Plattform für die Anlegung von kostenlosen Subdomains.
					<a href="https://domains.aundl.tech" target="_blank" class="text-indigo-400">Besuchen Sie A&amp;L Domains</a></p>`;
        }
      })}`;
    }
  })}</div></div> ${$$result.head += `<!-- HEAD_svelte-b9ur1l_START -->${$$result.title = `<title>A&amp;L Technologies</title>`, ""}<!-- HEAD_svelte-b9ur1l_END -->`, ""}`;
});
export {
  Page as default
};
