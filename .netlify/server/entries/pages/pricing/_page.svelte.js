import { c as create_ssr_component, v as validate_component, f as compute_rest_props, h as spread, j as escape_attribute_value, i as escape_object } from "../../../chunks/ssr.js";
import "../../../chunks/index2.js";
import { C as Card, a as Card_header, b as Card_title, c as Card_content } from "../../../chunks/card-title.js";
import { c as cn } from "../../../chunks/utils.js";
import "clsx";
import { I as Icon } from "../../../chunks/Icon.js";
const Check = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "M20 6 9 17l-5-5" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "check" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Card_description = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  return `<p${spread(
    [
      {
        class: escape_attribute_value(cn("text-muted-foreground text-sm", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</p>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="container mx-auto px-4 py-16 max-w-6xl"><h1 class="text-4xl font-extrabold mb-8 text-center" data-svelte-h="svelte-1hm6pip">Preise</h1> <p class="text-xl text-center mb-12" data-svelte-h="svelte-15av8ae">Nimm die Option, die dir am besten passt! (Es gibt sehr viel Auswahl, vertrau mir)</p> <div class="grid grid-cols-1 md:grid-cols-1 gap-8 mb-12"> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Card_header, "CardHeader").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Card_title, "CardTitle").$$render(
            $$result,
            {
              class: "flex items-center justify-between"
            },
            {},
            {
              default: () => {
                return `Kostenlos`;
              }
            }
          )} ${validate_component(Card_description, "CardDescription").$$render($$result, {}, {}, {
            default: () => {
              return `Bei uns ist alles kostenlos! Es ist alles ein Hobby-Projekt! :)`;
            }
          })}`;
        }
      })} ${validate_component(Card_content, "CardContent").$$render($$result, {}, {}, {
        default: () => {
          return `<p class="text-3xl font-bold mb-4" data-svelte-h="svelte-12pwcgt">$0.00</p> <ul class="space-y-2"><li class="flex items-center">${validate_component(Check, "Check").$$render($$result, { class: "w-5 h-5 mr-2 text-green-500" }, {}, {})}
						Alle grundlegenden Funktionen</li> <li class="flex items-center">${validate_component(Check, "Check").$$render($$result, { class: "w-5 h-5 mr-2 text-green-500" }, {}, {})}
						Keine versteckten Gebühren</li> <li class="flex items-center">${validate_component(Check, "Check").$$render($$result, { class: "w-5 h-5 mr-2 text-green-500" }, {}, {})}
						Keine Premium-Unterstützung</li></ul>`;
        }
      })}`;
    }
  })}</div></div> ${$$result.head += `<!-- HEAD_svelte-hml12c_START -->${$$result.title = `<title>A&amp;L Technologies - Pricing</title>`, ""}<!-- HEAD_svelte-hml12c_END -->`, ""}`;
});
export {
  Page as default
};
