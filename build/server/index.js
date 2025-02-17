import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, useMatches, useActionData, useLoaderData, useParams, useRouteError, Meta, Links, ScrollRestoration, Scripts, Outlet, isRouteErrorResponse } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
function withComponentProps(Component) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      matches: useMatches()
    };
    return createElement(Component, props);
  };
}
function withErrorBoundaryProps(ErrorBoundary3) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      error: useRouteError()
    };
    return createElement(ErrorBoundary3, props);
  };
}
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
function Button({ text, variant = "primary", onClick }) {
  const variants = {
    primary: "bg-background hover:bg-gray-200 text-black border py-2 px-10 rounded-full",
    header: "bg-background hover:bg-gray-200 py-5 px-2",
    headerSecondary: "bg-primary hover:bg-hover text-white py-5 px-2",
    card: "bg-background hover:bg-gray-200 text-primary py-2 px-15 rounded-full font-bold"
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: `${variants[variant]} btn cursor-pointer text-paragraph-h1 font-lexend`,
      onClick: () => {
        onClick(text);
      },
      children: text
    }
  );
}
function Card({
  title,
  description,
  price,
  buttonText,
  img,
  nombre,
  puesto,
  variant = "offer"
}) {
  const variants = {
    offer: /* @__PURE__ */ jsxs("div", { className: "bg-primary rounded-lg shadow-lg text-white text-center flex flex-col h-full", children: [
      /* @__PURE__ */ jsxs("div", { className: "p-6 pb-0 flex-grow", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-bold text-subtitle-h2", children: title }),
        /* @__PURE__ */ jsx("p", { className: "mb-4", children: description })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "pb-6", children: [
        /* @__PURE__ */ jsxs("h2", { className: "font-bold text-subtitle-h2", children: [
          "DESDE ",
          price,
          "€"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center mt-4", children: /* @__PURE__ */ jsx(Button, { text: buttonText || "Boton", variant: "card", onClick: (text) => console.log("Click" + text) }) })
      ] })
    ] }),
    persons: /* @__PURE__ */ jsx("div", { className: "text-center flex flex-col h-full", children: /* @__PURE__ */ jsxs("div", { className: "flex-grow", children: [
      /* @__PURE__ */ jsx("img", { src: img, alt: "" }),
      /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-subtitle-h1 font-bold", children: nombre }),
        /* @__PURE__ */ jsx("h3", { className: "text-subtitle-h3", children: puesto })
      ] })
    ] }) })
  };
  return variants[variant];
}
function Input({ type, placeholder, extraClassName }) {
  return /* @__PURE__ */ jsx(
    "input",
    {
      type,
      placeholder,
      className: `text-paragraph-h1 font-lexend bg-background text-black border rounded-[20px] p-2 ${extraClassName}`
    }
  );
}
function Textarea({ name, placeholder, extraClassName }) {
  return /* @__PURE__ */ jsx(
    "textarea",
    {
      name,
      placeholder,
      className: `text-paragraph-h1 font-lexend bg-background text-black border rounded-[20px] p-2 pb-[5rem] ${extraClassName}`
    }
  );
}
function Form() {
  const handleClick = (text) => {
    console.log("Click" + text);
  };
  return /* @__PURE__ */ jsx("div", { className: "container mx-auto", children: /* @__PURE__ */ jsxs("form", { className: "grid grid-cols-3 gap-4 p-4 mx-auto w-full", children: [
    /* @__PURE__ */ jsx(
      Input,
      {
        type: "text",
        placeholder: "Nombre",
        extraClassName: "col-span-1"
      }
    ),
    /* @__PURE__ */ jsx(
      Input,
      {
        type: "text",
        placeholder: "Correo electrónico",
        extraClassName: "col-span-2"
      }
    ),
    /* @__PURE__ */ jsx(
      Input,
      {
        type: "text",
        placeholder: "Teléfono",
        extraClassName: "col-span-3"
      }
    ),
    /* @__PURE__ */ jsx(
      Textarea,
      {
        name: "mensaje",
        placeholder: "Mensaje",
        extraClassName: "col-span-3"
      }
    ),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("div", { className: "pb-3", children: [
        /* @__PURE__ */ jsx("input", { type: "checkbox", name: "terms", id: "terms" }),
        /* @__PURE__ */ jsx("label", { htmlFor: "terms", className: "text-paragraph-h1 font-lexend", children: " Acepto la Politica de Privacidad" })
      ] }),
      /* @__PURE__ */ jsx(Button, { text: "Enviar", onClick: handleClick })
    ] })
  ] }) });
}
const Welcome = withComponentProps(function Welcome2() {
  const handleClick = (text) => {
    console.log("Click" + text);
  };
  return /* @__PURE__ */ jsxs("div", {
    className: "bg-background flex flex-col items-center p-4",
    children: [/* @__PURE__ */ jsx("h1", {
      className: "text-3xl pb-10",
      children: "El header se muestra arriba"
    }), /* @__PURE__ */ jsx("h1", {
      className: "text-3xl",
      children: "Tipos de botones"
    }), /* @__PURE__ */ jsxs("div", {
      className: "justify-center space-x-4 mt-4",
      children: [/* @__PURE__ */ jsx(Button, {
        text: "Primary",
        onClick: handleClick
      }), /* @__PURE__ */ jsx(Button, {
        text: "Header",
        onClick: handleClick,
        variant: "header"
      }), /* @__PURE__ */ jsx(Button, {
        text: "HeaderSecondary",
        onClick: handleClick,
        variant: "headerSecondary"
      }), /* @__PURE__ */ jsx(Button, {
        text: "Card",
        onClick: handleClick,
        variant: "card"
      })]
    }), /* @__PURE__ */ jsx("h1", {
      className: "text-3xl",
      children: "Cards de ofertas"
    }), /* @__PURE__ */ jsxs("div", {
      className: "grid grid-cols-3 gap-4 mt-4 container mx-auto",
      children: [/* @__PURE__ */ jsx(Card, {
        title: "Oferta1",
        description: "loremp ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor.",
        price: 100,
        buttonText: "Boton1"
      }), /* @__PURE__ */ jsx(Card, {
        title: "Oferta2",
        description: "loremp ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor.",
        price: 100,
        buttonText: "Boton2"
      }), /* @__PURE__ */ jsx(Card, {
        title: "Oferta3",
        description: "loremp ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor. loremp ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor. loremp ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor. loremp ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor.",
        price: 100,
        buttonText: "Boton3"
      })]
    }), /* @__PURE__ */ jsx("h1", {
      className: "text-3xl",
      children: "Cards de personas"
    }), /* @__PURE__ */ jsxs("div", {
      className: "grid grid-cols-3 gap-4 mt-4",
      children: [/* @__PURE__ */ jsx(Card, {
        img: "https://w7.pngwing.com/pngs/640/269/png-transparent-silhouette-person-people-icon-animals-logo-head-thumbnail.png",
        nombre: "Nombre",
        puesto: "Puesto",
        variant: "persons"
      }), /* @__PURE__ */ jsx(Card, {
        img: "https://w7.pngwing.com/pngs/640/269/png-transparent-silhouette-person-people-icon-animals-logo-head-thumbnail.png",
        nombre: "Nombre",
        puesto: "Puesto",
        variant: "persons"
      }), /* @__PURE__ */ jsx(Card, {
        img: "https://w7.pngwing.com/pngs/640/269/png-transparent-silhouette-person-people-icon-animals-logo-head-thumbnail.png",
        nombre: "Nombre",
        puesto: "Puesto",
        variant: "persons"
      })]
    }), /* @__PURE__ */ jsx("h1", {
      className: "text-3xl",
      children: "Formulario"
    }), /* @__PURE__ */ jsx(Form, {}), /* @__PURE__ */ jsx("h1", {
      className: "text-3xl",
      children: "Footer"
    })]
  });
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Welcome
}, Symbol.toStringTag, { value: "Module" }));
function Header$1() {
  const handleClick = (text) => {
    console.log("Click" + text);
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-primary text-white flex justify-between items-center h-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "col flex ps-10", children: [
        /* @__PURE__ */ jsx("img", { className: "w-5 h-5", src: "./app/assets/icons/envelope.svg", alt: "" }),
        /* @__PURE__ */ jsx("p", { className: "ml-2 text-paragraph-h3", children: "info@dacasmarketing.online" }),
        /* @__PURE__ */ jsx("img", { className: "ml-10 w-5 h-5", src: "./app/assets/icons/phone.svg", alt: "" }),
        /* @__PURE__ */ jsx("p", { className: "ml-2 text-paragraph-h3", children: "+34 621 52 47 01" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "col flex pe-10", children: [
        /* @__PURE__ */ jsx("img", { className: "w-5 h-5", src: "./app/assets/icons/linkedin.svg", alt: "LinkedIn" }),
        /* @__PURE__ */ jsx("p", { className: "ml-2 mr-10 text-paragraph-h3", children: "LinkedIn" }),
        /* @__PURE__ */ jsx("img", { className: "w-5 h-5", src: "./app/assets/icons/insta.svg", alt: "Instagram" }),
        /* @__PURE__ */ jsx("p", { className: "ml-2 text-paragraph-h3", children: "Instagram" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-background flex justify-between items-center", children: [
      /* @__PURE__ */ jsx("div", { className: "col flex ps-10", children: /* @__PURE__ */ jsx("img", { src: "./app/assets/img/logoDacas.png", alt: "" }) }),
      /* @__PURE__ */ jsxs("div", { className: "col flex pe-10 gap-5", children: [
        /* @__PURE__ */ jsx(Button, { text: "Nosotros", onClick: handleClick, variant: "header" }),
        /* @__PURE__ */ jsx(Button, { text: "Servicios", onClick: handleClick, variant: "header" }),
        /* @__PURE__ */ jsx(Button, { text: "Noticias", onClick: handleClick, variant: "header" }),
        /* @__PURE__ */ jsx(Button, { text: "Contacto", onClick: handleClick, variant: "headerSecondary" })
      ] })
    ] })
  ] });
}
function Header() {
  return /* @__PURE__ */ jsx("footer", { className: "bg-gray-100 text-primary py-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto px-6 md:px-12 lg:px-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx("img", { src: "./app/assets/img/logoDacas.png", alt: "Dacas Marketing", className: "h-12" }),
        /* @__PURE__ */ jsx("p", { className: "text-paragraph-h1", children: "Our vision is to provide convenience and help increase your sales business." }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-10", children: [
          /* @__PURE__ */ jsx("a", { href: "#", className: "text-xl", children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faFacebookF }) }),
          /* @__PURE__ */ jsx("a", { href: "#", className: "text-xl", children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faTwitter }) }),
          /* @__PURE__ */ jsx("a", { href: "#", className: "text-xl", children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faInstagram }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "font-bold mb-4 text-subtitle-h3", children: "About" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-paragraph-h1", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:underline", children: "How it works" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:underline", children: "Featured" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:underline", children: "Partnership" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:underline", children: "Business Relation" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "font-bold mb-4 text-subtitle-h3", children: "Community" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-paragraph-h1", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:underline", children: "Events" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:underline", children: "Blog" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:underline", children: "Podcast" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:underline", children: "Invite a friend" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "font-bold mb-4 text-subtitle-h3", children: "Socials" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-paragraph-h1", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:underline", children: "Discord" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:underline", children: "Instagram" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:underline", children: "Twitter" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:underline", children: "Facebook" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-gray-300 my-6" }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between text-paragraph-h1", children: [
      /* @__PURE__ */ jsx("p", { className: "font-bold", children: "©2022 Dacas Marketing. All rights reserved" }),
      /* @__PURE__ */ jsxs("div", { className: "flex space-x-6 font-bold", children: [
        /* @__PURE__ */ jsx("a", { href: "#", className: "hover:underline", children: "Privacy & Policy" }),
        /* @__PURE__ */ jsx("a", { href: "#", className: "hover:underline", children: "Terms & Condition" })
      ] })
    ] })
  ] }) });
}
function meta({}) {
  return [{
    title: "New React Router App"
  }, {
    name: "description",
    content: "Welcome to React Router!"
  }];
}
const home = withComponentProps(function Home() {
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsx(Header$1, {}), /* @__PURE__ */ jsx(Welcome, {}), /* @__PURE__ */ jsx(Header, {})]
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-Dafql22G.js", "imports": ["/assets/chunk-IR6S3I6Y-eAU1VRJg.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/root-RQQABW6y.js", "imports": ["/assets/chunk-IR6S3I6Y-eAU1VRJg.js", "/assets/with-props-Dh2HRldE.js"], "css": ["/assets/root-j0ywECcK.css"] }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/home-An_DlL6V.js", "imports": ["/assets/with-props-Dh2HRldE.js", "/assets/chunk-IR6S3I6Y-eAU1VRJg.js", "/assets/welcome-Cd3OUrOT.js"], "css": [] }, "routes/welcome": { "id": "routes/welcome", "parentId": "routes/home", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/welcome-Df7zIKEp.js", "imports": ["/assets/welcome-Cd3OUrOT.js", "/assets/with-props-Dh2HRldE.js", "/assets/chunk-IR6S3I6Y-eAU1VRJg.js"], "css": [] }, "routes/about": { "id": "routes/about", "parentId": "routes/home", "path": "about", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/about-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/contact": { "id": "routes/contact", "parentId": "routes/home", "path": "contact", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/contact-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/services": { "id": "routes/services", "parentId": "routes/home", "path": "services", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/services-l0sNRNKZ.js", "imports": [], "css": [] } }, "url": "/assets/manifest-1e7988af.js", "version": "1e7988af" };
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "unstable_optimizeDeps": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/welcome": {
    id: "routes/welcome",
    parentId: "routes/home",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route2
  },
  "routes/about": {
    id: "routes/about",
    parentId: "routes/home",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "routes/home",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/services": {
    id: "routes/services",
    parentId: "routes/home",
    path: "services",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  publicPath,
  routes
};
