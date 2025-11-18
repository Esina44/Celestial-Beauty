// Type declarations for importing CSS files (global side-effect imports and CSS modules)
// Place this file at the project root so TypeScript picks up CSS imports like `import './globals.css'`.
declare module '*.css';
declare module '*.scss';
declare module '*.sass';
declare module '*.less';

// CSS modules (typed as a mapping of class names -> string)
declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
declare module '*.module.sass' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

export {};
