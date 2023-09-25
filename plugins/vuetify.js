import { createVuetify} from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const customLightTheme = {
  dark: false,
  colors: {
    primary: "#006876",
    onprimary: "#ffffff",
    primarycontainer: "#84f3ff",
    onprimarycontainer: "#002023",
    secondary: "#4a6365",
    onsecondary: "#ffffff",
    secondarycontainer: "#cce7eb",
    onsecondarycontainer: "#00201e",
    tertiary: "#505e7d",
    ontertiary: "#ffffff",
    tertiarycontainer: "#d8e2ff",
    ontertiarycontainer: "#0b1b36",
    error: "#ba1a1a",
    onerror: "#ffffff",
    errorcontainer: "#ffdad6",
    onerrorcontainer: "#410002",
    background: "#fafdfd",
    onbackground: "#191c1d",
    surfacelowest: "#fafdfd",
    surfacelow: "#eff9f9",
    surface: "#e8f6f6",
    surfacehigh: "#e0f3f3",
    surfacehighest: "#d9f0f0",
    onsurface: "#191c1d",
    outline: "#6f797a",
    surfacevariant: "#dae4e5",
    onsurfacevariant: "#3f484a",

  },
};

const customDarkTheme = {
  dark: true,
  colors: {
    primary: "#4dd8e7",
    onprimary: "#00363b",
    primarycontainer: "#004f55",
    onprimarycontainer: "#87f3ff",
    secondary: "#b1cbce",
    onsecondary: "#1c3437",
    secondarycontainer: "#324b4e",
    onsecondarycontainer: "#cce7eb",
    tertiary: "#b8c6ea",
    ontertiary: "#22304c",
    tertiarycontainer: "#394764",
    ontertiarycontainer: "#d8e2ff",
    error: "#ffb4ab",
    onerror: "#690005",
    errorcontainer: "#93000a",
    onerrorcontainer: "#ffdad6",
    background: "#191c1d",
    onbackground: "#e0e3e3",
    surfacelowest: "#081414",
    surfacelow: "#112a2a",
    surface: "#143232",
    surfacehigh: "#1b4444",
    surfacehighest: "#225656",
    onsurface: "#e0e3e3",
    outline: "#899294",
    surfacevariant: "#3f484a",
    onsurfacevariant: "#bec8c9",
  },
}


export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    ssr: true,
    theme: {
      defaultTheme: 'customLightTheme',
      themes: {
        customLightTheme,
        customDarkTheme
      },
    },
  });
  nuxtApp.vueApp.use(vuetify);
});
