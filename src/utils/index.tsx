export const classNames =
  (baseClassNames:string) =>
  (customClassNames = '') =>
    `${baseClassNames} ${customClassNames}`.trim();