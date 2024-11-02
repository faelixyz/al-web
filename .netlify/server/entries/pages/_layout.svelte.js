import { g as get_store_value, c as create_ssr_component, a as subscribe, b as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { d as derived, w as writable } from "../../chunks/index.js";
import "../../chunks/index2.js";
import { I as Icon } from "../../chunks/Icon.js";
let timeoutAction;
let timeoutEnable;
function withoutTransition(action) {
  if (typeof document === "undefined")
    return;
  clearTimeout(timeoutAction);
  clearTimeout(timeoutEnable);
  const style = document.createElement("style");
  const css2 = document.createTextNode(`* {
     -webkit-transition: none !important;
     -moz-transition: none !important;
     -o-transition: none !important;
     -ms-transition: none !important;
     transition: none !important;
  }`);
  style.appendChild(css2);
  const disable = () => document.head.appendChild(style);
  const enable = () => document.head.removeChild(style);
  if (typeof window.getComputedStyle !== "undefined") {
    disable();
    action();
    window.getComputedStyle(style).opacity;
    enable();
    return;
  }
  if (typeof window.requestAnimationFrame !== "undefined") {
    disable();
    action();
    window.requestAnimationFrame(enable);
    return;
  }
  disable();
  timeoutAction = window.setTimeout(() => {
    action();
    timeoutEnable = window.setTimeout(enable, 120);
  }, 120);
}
function sanitizeClassNames(classNames) {
  return classNames.filter((className) => className.length > 0);
}
const noopStorage = {
  getItem: (_key) => null,
  setItem: (_key, _value) => {
  }
};
const isBrowser = typeof document !== "undefined";
const modes = ["dark", "light", "system"];
const modeStorageKey = writable("mode-watcher-mode");
const themeStorageKey = writable("mode-watcher-theme");
const userPrefersMode = createUserPrefersMode();
const systemPrefersMode = createSystemMode();
const themeColors = writable(void 0);
const theme = createCustomTheme();
const disableTransitions = writable(true);
const darkClassNames = writable([]);
const lightClassNames = writable([]);
createDerivedMode();
createDerivedTheme();
function createUserPrefersMode() {
  const defaultValue = "system";
  const storage = isBrowser ? localStorage : noopStorage;
  const initialValue = storage.getItem(getModeStorageKey());
  let value = isValidMode(initialValue) ? initialValue : defaultValue;
  function getModeStorageKey() {
    return get_store_value(modeStorageKey);
  }
  const { subscribe: subscribe2, set: _set } = writable(value, () => {
    if (!isBrowser)
      return;
    const handler = (e) => {
      if (e.key !== getModeStorageKey())
        return;
      const newValue = e.newValue;
      if (isValidMode(newValue)) {
        _set(value = newValue);
      } else {
        _set(value = defaultValue);
      }
    };
    addEventListener("storage", handler);
    return () => removeEventListener("storage", handler);
  });
  function set(v) {
    _set(value = v);
    storage.setItem(getModeStorageKey(), value);
  }
  return {
    subscribe: subscribe2,
    set
  };
}
function createCustomTheme() {
  const storage = isBrowser ? localStorage : noopStorage;
  const initialValue = storage.getItem(getThemeStorageKey());
  let value = initialValue === null || initialValue === void 0 ? "" : initialValue;
  function getThemeStorageKey() {
    return get_store_value(themeStorageKey);
  }
  const { subscribe: subscribe2, set: _set } = writable(value, () => {
    if (!isBrowser)
      return;
    const handler = (e) => {
      if (e.key !== getThemeStorageKey())
        return;
      const newValue = e.newValue;
      if (newValue === null) {
        _set(value = "");
      } else {
        _set(value = newValue);
      }
    };
    addEventListener("storage", handler);
    return () => removeEventListener("storage", handler);
  });
  function set(v) {
    _set(value = v);
    storage.setItem(getThemeStorageKey(), value);
  }
  return {
    subscribe: subscribe2,
    set
  };
}
function createSystemMode() {
  const defaultValue = void 0;
  let track = true;
  const { subscribe: subscribe2, set } = writable(defaultValue, () => {
    if (!isBrowser)
      return;
    const handler = (e) => {
      if (!track)
        return;
      set(e.matches ? "light" : "dark");
    };
    const mediaQueryState = window.matchMedia("(prefers-color-scheme: light)");
    mediaQueryState.addEventListener("change", handler);
    return () => mediaQueryState.removeEventListener("change", handler);
  });
  function query() {
    if (!isBrowser)
      return;
    const mediaQueryState = window.matchMedia("(prefers-color-scheme: light)");
    set(mediaQueryState.matches ? "light" : "dark");
  }
  function tracking(active) {
    track = active;
  }
  return {
    subscribe: subscribe2,
    query,
    tracking
  };
}
function createDerivedMode() {
  const { subscribe: subscribe2 } = derived([
    userPrefersMode,
    systemPrefersMode,
    themeColors,
    disableTransitions,
    darkClassNames,
    lightClassNames
  ], ([$userPrefersMode, $systemPrefersMode, $themeColors, $disableTransitions, $darkClassNames, $lightClassNames]) => {
    if (!isBrowser)
      return void 0;
    const derivedMode = $userPrefersMode === "system" ? $systemPrefersMode : $userPrefersMode;
    const sanitizedDarkClassNames = sanitizeClassNames($darkClassNames);
    const sanitizedLightClassNames = sanitizeClassNames($lightClassNames);
    function update() {
      const htmlEl = document.documentElement;
      const themeColorEl = document.querySelector('meta[name="theme-color"]');
      if (derivedMode === "light") {
        if (sanitizedDarkClassNames.length)
          htmlEl.classList.remove(...sanitizedDarkClassNames);
        if (sanitizedLightClassNames.length)
          htmlEl.classList.add(...sanitizedLightClassNames);
        htmlEl.style.colorScheme = "light";
        if (themeColorEl && $themeColors) {
          themeColorEl.setAttribute("content", $themeColors.light);
        }
      } else {
        if (sanitizedLightClassNames.length)
          htmlEl.classList.remove(...sanitizedLightClassNames);
        if (sanitizedDarkClassNames.length)
          htmlEl.classList.add(...sanitizedDarkClassNames);
        htmlEl.style.colorScheme = "dark";
        if (themeColorEl && $themeColors) {
          themeColorEl.setAttribute("content", $themeColors.dark);
        }
      }
    }
    if ($disableTransitions) {
      withoutTransition(update);
    } else {
      update();
    }
    return derivedMode;
  });
  return {
    subscribe: subscribe2
  };
}
function createDerivedTheme() {
  const { subscribe: subscribe2 } = derived([theme, disableTransitions], ([$theme, $disableTransitions]) => {
    if (!isBrowser)
      return void 0;
    function update() {
      const htmlEl = document.documentElement;
      htmlEl.setAttribute("data-theme", $theme);
    }
    if ($disableTransitions) {
      withoutTransition(update);
    } else {
      update();
    }
    return $theme;
  });
  return {
    subscribe: subscribe2
  };
}
function isValidMode(value) {
  if (typeof value !== "string")
    return false;
  return modes.includes(value);
}
function setMode(mode) {
  userPrefersMode.set(mode);
}
function defineConfig(config) {
  return config;
}
function setInitialMode({ defaultMode, themeColors: themeColors2, darkClassNames: darkClassNames2 = ["dark"], lightClassNames: lightClassNames2 = [], defaultTheme = "" }) {
  const rootEl = document.documentElement;
  const mode = localStorage.getItem("mode-watcher-mode") || defaultMode;
  const theme2 = localStorage.getItem("mode-watcher-theme") || defaultTheme;
  const light = mode === "light" || mode === "system" && window.matchMedia("(prefers-color-scheme: light)").matches;
  if (light) {
    if (darkClassNames2.length)
      rootEl.classList.remove(...darkClassNames2);
    if (lightClassNames2.length)
      rootEl.classList.add(...lightClassNames2);
  } else {
    if (lightClassNames2.length)
      rootEl.classList.remove(...lightClassNames2);
    if (darkClassNames2.length)
      rootEl.classList.add(...darkClassNames2);
  }
  rootEl.style.colorScheme = light ? "light" : "dark";
  if (themeColors2) {
    const themeMetaEl = document.querySelector('meta[name="theme-color"]');
    if (themeMetaEl) {
      themeMetaEl.setAttribute("content", mode === "light" ? themeColors2.light : themeColors2.dark);
    }
  }
  if (theme2) {
    rootEl.setAttribute("data-theme", theme2);
    localStorage.setItem("mode-watcher-theme", theme2);
  }
  localStorage.setItem("mode-watcher-mode", mode);
}
const Mode_watcher = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let trueNonce;
  let $$unsubscribe_themeStorageKeyStore;
  let $$unsubscribe_modeStorageKeyStore;
  $$unsubscribe_themeStorageKeyStore = subscribe(themeStorageKey, (value) => value);
  $$unsubscribe_modeStorageKeyStore = subscribe(modeStorageKey, (value) => value);
  let { track = true } = $$props;
  let { defaultMode = "system" } = $$props;
  let { themeColors: themeColors$1 = void 0 } = $$props;
  let { disableTransitions: disableTransitions$1 = true } = $$props;
  let { darkClassNames: darkClassNames$1 = ["dark"] } = $$props;
  let { lightClassNames: lightClassNames$1 = [] } = $$props;
  let { defaultTheme = "" } = $$props;
  let { nonce = "" } = $$props;
  let { themeStorageKey: themeStorageKey$1 = "mode-watcher-theme" } = $$props;
  let { modeStorageKey: modeStorageKey$1 = "mode-watcher-mode" } = $$props;
  const initConfig = defineConfig({
    defaultMode,
    themeColors: themeColors$1,
    darkClassNames: darkClassNames$1,
    lightClassNames: lightClassNames$1,
    defaultTheme,
    modeStorageKey: modeStorageKey$1,
    themeStorageKey: themeStorageKey$1
  });
  if ($$props.track === void 0 && $$bindings.track && track !== void 0) $$bindings.track(track);
  if ($$props.defaultMode === void 0 && $$bindings.defaultMode && defaultMode !== void 0) $$bindings.defaultMode(defaultMode);
  if ($$props.themeColors === void 0 && $$bindings.themeColors && themeColors$1 !== void 0) $$bindings.themeColors(themeColors$1);
  if ($$props.disableTransitions === void 0 && $$bindings.disableTransitions && disableTransitions$1 !== void 0) $$bindings.disableTransitions(disableTransitions$1);
  if ($$props.darkClassNames === void 0 && $$bindings.darkClassNames && darkClassNames$1 !== void 0) $$bindings.darkClassNames(darkClassNames$1);
  if ($$props.lightClassNames === void 0 && $$bindings.lightClassNames && lightClassNames$1 !== void 0) $$bindings.lightClassNames(lightClassNames$1);
  if ($$props.defaultTheme === void 0 && $$bindings.defaultTheme && defaultTheme !== void 0) $$bindings.defaultTheme(defaultTheme);
  if ($$props.nonce === void 0 && $$bindings.nonce && nonce !== void 0) $$bindings.nonce(nonce);
  if ($$props.themeStorageKey === void 0 && $$bindings.themeStorageKey && themeStorageKey$1 !== void 0) $$bindings.themeStorageKey(themeStorageKey$1);
  if ($$props.modeStorageKey === void 0 && $$bindings.modeStorageKey && modeStorageKey$1 !== void 0) $$bindings.modeStorageKey(modeStorageKey$1);
  {
    disableTransitions.set(disableTransitions$1);
  }
  {
    themeColors.set(themeColors$1);
  }
  {
    darkClassNames.set(darkClassNames$1);
  }
  {
    lightClassNames.set(lightClassNames$1);
  }
  {
    modeStorageKey.set(modeStorageKey$1);
  }
  {
    themeStorageKey.set(themeStorageKey$1);
  }
  trueNonce = typeof window === "undefined" ? nonce : "";
  $$unsubscribe_themeStorageKeyStore();
  $$unsubscribe_modeStorageKeyStore();
  return `${$$result.head += `<!-- HEAD_svelte-1nen96w_START -->${themeColors$1 ? `   <meta name="theme-color"${add_attribute("content", themeColors$1.dark, 0)}>` : ``}${trueNonce ? ` <!-- HTML_TAG_START -->${`<script nonce=${trueNonce}>(` + setInitialMode.toString() + `)(` + JSON.stringify(initConfig) + `);<\/script>`}<!-- HTML_TAG_END -->` : ` <!-- HTML_TAG_START -->${`<script>(` + setInitialMode.toString() + `)(` + JSON.stringify(initConfig) + `);<\/script>`}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-1nen96w_END -->`, ""}`;
});
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "line",
      {
        "x1": "4",
        "x2": "20",
        "y1": "12",
        "y2": "12"
      }
    ],
    [
      "line",
      {
        "x1": "4",
        "x2": "20",
        "y1": "6",
        "y2": "6"
      }
    ],
    [
      "line",
      {
        "x1": "4",
        "x2": "20",
        "y1": "18",
        "y2": "18"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "menu" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const css = {
  code: ".nav-link.svelte-1flux0{font-size:0.875rem;line-height:1.25rem;font-weight:500;--tw-text-opacity:1;color:hsl(var(--foreground) / var(--tw-text-opacity));transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:200ms\n}.nav-link.svelte-1flux0:hover{--tw-text-opacity:1;color:hsl(var(--primary) / var(--tw-text-opacity))\n}.mobile-nav-link.svelte-1flux0{display:block;border-radius:calc(var(--radius) - 2px);padding-left:0.75rem;padding-right:0.75rem;padding-top:0.5rem;padding-bottom:0.5rem;font-size:1rem;line-height:1.5rem;font-weight:500;--tw-text-opacity:1;color:hsl(var(--foreground) / var(--tw-text-opacity));transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:200ms\n}.mobile-nav-link.svelte-1flux0:hover{background-color:hsl(var(--primary) / 0.1);--tw-text-opacity:1;color:hsl(var(--primary) / var(--tw-text-opacity))\n}",
  map: `{"version":3,"file":"Navigation.svelte","sources":["Navigation.svelte"],"sourcesContent":["<script>\\r\\n\\timport { Button } from '$lib/components/ui/button';\\r\\n\\timport { Menu } from 'lucide-svelte';\\r\\n\\timport { fly } from 'svelte/transition';\\r\\n\\r\\n\\tlet discordLink = 'https://discord.gg/6CApBe3D94';\\r\\n\\tlet isMenuOpen = false;\\r\\n\\r\\n\\tfunction toggleMenu() {\\r\\n\\t\\tisMenuOpen = !isMenuOpen;\\r\\n\\t}\\r\\n<\/script>\\r\\n\\r\\n<nav class=\\"fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b\\">\\r\\n\\t<div class=\\"container mx-auto px-4\\">\\r\\n\\t\\t<div class=\\"flex items-center justify-between h-16\\">\\r\\n\\t\\t\\t<div class=\\"flex items-center\\">\\r\\n\\t\\t\\t\\t<a href=\\"/\\" class=\\"text-2xl font-bold text-primary mr-8\\">A&L Technologies</a>\\r\\n\\t\\t\\t\\t<div class=\\"hidden md:flex items-center space-x-6\\">\\r\\n\\t\\t\\t\\t\\t<a href=\\"/\\" class=\\"nav-link\\">Startseite</a>\\r\\n\\t\\t\\t\\t\\t<a href=\\"/about\\" class=\\"nav-link\\">Über uns</a>\\r\\n\\t\\t\\t\\t\\t<a href=\\"/privacy\\" class=\\"nav-link\\">Datenschutz</a>\\r\\n\\t\\t\\t\\t\\t<a href=\\"/tos\\" class=\\"nav-link\\">Nutzungsbedingungen</a>\\r\\n\\t\\t\\t\\t\\t<a href=\\"/pricing\\" class=\\"nav-link\\">Preise</a>\\r\\n\\t\\t\\t\\t\\t<a href={discordLink} target=\\"_blank\\" rel=\\"noopener noreferrer\\" class=\\"nav-link\\">Discord</a>\\r\\n\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t\\t<div class=\\"md:hidden\\">\\r\\n\\t\\t\\t\\t<button on:click={toggleMenu} class=\\"text-foreground hover:text-primary transition-colors\\">\\r\\n\\t\\t\\t\\t\\t<Menu size={24} />\\r\\n\\t\\t\\t\\t</button>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t</div>\\r\\n\\t</div>\\r\\n\\r\\n\\t{#if isMenuOpen}\\r\\n\\t\\t<div class=\\"md:hidden\\" transition:fly={{ y: -200, duration: 300 }}>\\r\\n\\t\\t\\t<div class=\\"px-2 pt-2 pb-3 space-y-1 sm:px-3\\">\\r\\n\\t\\t\\t\\t<a href=\\"/\\" class=\\"mobile-nav-link\\">Startseite</a>\\r\\n\\t\\t\\t\\t<a href=\\"/about\\" class=\\"mobile-nav-link\\">Über uns</a>\\r\\n\\t\\t\\t\\t<a href=\\"/privacy\\" class=\\"mobile-nav-link\\">Datenschutz</a>\\r\\n\\t\\t\\t\\t<a href=\\"/pricing\\" class=\\"mobile-nav-link\\">Preise</a>\\r\\n\\t\\t\\t\\t<a href={discordLink} target=\\"_blank\\" rel=\\"noopener noreferrer\\" class=\\"mobile-nav-link\\">Discord</a>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t</div>\\r\\n\\t{/if}\\r\\n</nav>\\r\\n\\r\\n<style lang=\\"postcss\\">\\r\\n\\t.nav-link {\\r\\n\\r\\n    font-size: 0.875rem;\\r\\n\\r\\n    line-height: 1.25rem;\\r\\n\\r\\n    font-weight: 500;\\r\\n\\r\\n    --tw-text-opacity: 1;\\r\\n\\r\\n    color: hsl(var(--foreground) / var(--tw-text-opacity));\\r\\n\\r\\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\\r\\n\\r\\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\\r\\n\\r\\n    transition-duration: 200ms\\n}\\r\\n\\r\\n.nav-link:hover {\\r\\n\\r\\n    --tw-text-opacity: 1;\\r\\n\\r\\n    color: hsl(var(--primary) / var(--tw-text-opacity))\\n}\\r\\n\\r\\n\\t.mobile-nav-link {\\r\\n\\r\\n    display: block;\\r\\n\\r\\n    border-radius: calc(var(--radius) - 2px);\\r\\n\\r\\n    padding-left: 0.75rem;\\r\\n\\r\\n    padding-right: 0.75rem;\\r\\n\\r\\n    padding-top: 0.5rem;\\r\\n\\r\\n    padding-bottom: 0.5rem;\\r\\n\\r\\n    font-size: 1rem;\\r\\n\\r\\n    line-height: 1.5rem;\\r\\n\\r\\n    font-weight: 500;\\r\\n\\r\\n    --tw-text-opacity: 1;\\r\\n\\r\\n    color: hsl(var(--foreground) / var(--tw-text-opacity));\\r\\n\\r\\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\\r\\n\\r\\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\\r\\n\\r\\n    transition-duration: 200ms\\n}\\r\\n\\r\\n\\t.mobile-nav-link:hover {\\r\\n\\r\\n    background-color: hsl(var(--primary) / 0.1);\\r\\n\\r\\n    --tw-text-opacity: 1;\\r\\n\\r\\n    color: hsl(var(--primary) / var(--tw-text-opacity))\\n}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAiDC,uBAAU,CAEP,SAAS,CAAE,QAAQ,CAEnB,WAAW,CAAE,OAAO,CAEpB,WAAW,CAAE,GAAG,CAEhB,iBAAiB,CAAE,CAAC,CAEpB,KAAK,CAAE,IAAI,IAAI,YAAY,CAAC,CAAC,CAAC,CAAC,IAAI,iBAAiB,CAAC,CAAC,CAEtD,mBAAmB,CAAE,KAAK,CAAC,CAAC,gBAAgB,CAAC,CAAC,YAAY,CAAC,CAAC,qBAAqB,CAAC,CAAC,IAAI,CAAC,CAAC,MAAM,CAE/F,0BAA0B,CAAE,aAAa,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,CAExD,mBAAmB,CAAE,KAAK;AAC9B,CAEA,uBAAS,MAAO,CAEZ,iBAAiB,CAAE,CAAC,CAEpB,KAAK,CAAE,IAAI,IAAI,SAAS,CAAC,CAAC,CAAC,CAAC,IAAI,iBAAiB,CAAC,CAAC;AACvD,CAEC,8BAAiB,CAEd,OAAO,CAAE,KAAK,CAEd,aAAa,CAAE,KAAK,IAAI,QAAQ,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAExC,YAAY,CAAE,OAAO,CAErB,aAAa,CAAE,OAAO,CAEtB,WAAW,CAAE,MAAM,CAEnB,cAAc,CAAE,MAAM,CAEtB,SAAS,CAAE,IAAI,CAEf,WAAW,CAAE,MAAM,CAEnB,WAAW,CAAE,GAAG,CAEhB,iBAAiB,CAAE,CAAC,CAEpB,KAAK,CAAE,IAAI,IAAI,YAAY,CAAC,CAAC,CAAC,CAAC,IAAI,iBAAiB,CAAC,CAAC,CAEtD,mBAAmB,CAAE,KAAK,CAAC,CAAC,gBAAgB,CAAC,CAAC,YAAY,CAAC,CAAC,qBAAqB,CAAC,CAAC,IAAI,CAAC,CAAC,MAAM,CAE/F,0BAA0B,CAAE,aAAa,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,CAExD,mBAAmB,CAAE,KAAK;AAC9B,CAEC,8BAAgB,MAAO,CAEpB,gBAAgB,CAAE,IAAI,IAAI,SAAS,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAE3C,iBAAiB,CAAE,CAAC,CAEpB,KAAK,CAAE,IAAI,IAAI,SAAS,CAAC,CAAC,CAAC,CAAC,IAAI,iBAAiB,CAAC,CAAC;AACvD"}`
};
let discordLink = "https://discord.gg/6CApBe3D94";
const Navigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<nav class="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b"><div class="container mx-auto px-4"><div class="flex items-center justify-between h-16"><div class="flex items-center"><a href="/" class="text-2xl font-bold text-primary mr-8" data-svelte-h="svelte-97rd1m">A&amp;L Technologies</a> <div class="hidden md:flex items-center space-x-6"><a href="/" class="nav-link svelte-1flux0" data-svelte-h="svelte-1muw6pi">Startseite</a> <a href="/about" class="nav-link svelte-1flux0" data-svelte-h="svelte-1ehe4k0">Über uns</a> <a href="/privacy" class="nav-link svelte-1flux0" data-svelte-h="svelte-1xby353">Datenschutz</a> <a href="/tos" class="nav-link svelte-1flux0" data-svelte-h="svelte-1ndxhqo">Nutzungsbedingungen</a> <a href="/pricing" class="nav-link svelte-1flux0" data-svelte-h="svelte-codsw0">Preise</a> <a${add_attribute("href", discordLink, 0)} target="_blank" rel="noopener noreferrer" class="nav-link svelte-1flux0">Discord</a></div></div> <div class="md:hidden"><button class="text-foreground hover:text-primary transition-colors">${validate_component(Menu, "Menu").$$render($$result, { size: 24 }, {}, {})}</button></div></div></div> ${``} </nav>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  setMode("dark");
  return `<div class="fixed inset-0 w-full h-screen bg-gradient-to-b from-primary-background to-ring" data-svelte-h="svelte-i4hm0w"><div class="absolute inset-0" style="background-image: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px); background-size: 40px 40px;"></div> <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-70"></div></div> ${validate_component(Mode_watcher, "ModeWatcher").$$render($$result, {}, {}, {})} ${validate_component(Navigation, "Navbar").$$render($$result, {}, {}, {})}  <div class="relative min-h-screen pt-14"> ${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};
