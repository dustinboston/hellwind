import config from "./hellwind.config.json" with { type: "json" };

const hellwindConfig = config as Record<string, string[] | null>;

/**
 * Converts a class value, media query, variable, etc into a string suitable as a class name.
 * @param str The string to convert
 * @returns the converted string
 */
function toClassNameString(str: string): string {
  // Handle, content symbols, e.g. the `|` in `content: "|"`.
  // Returns the word for the symbol so that `content: "|"` becomes `content-pipe`
  if (str === '" "') return "space";
  if (str === '"|"') return "pipe";
  if (str === '","') return "comma";
  if (str === '":"') return "colon";
  if (str === '"/"') return "slash";

  // Handles capitalized font names, e.g. Noto Sans
  str = str.toLowerCase();

  // Drop parens, colons, and quotes:
  // - `(min-width: 430px)` -> min-width-430px
  // - "Noto Sans" -> Noto Sans
  str = str.replace(/[():"]/g, "");

  // Only use one dash in variables, e.g. var(--xyz) -> var-xyz
  str = str.replace(/--/g, "-");

  // A leading dash is a minus sign
  str = str.replace(/^-/g, "minus-");

  // A dash before a dot is a minus sign
  str = str.replace(/-\./g, "minus-0");

  // A dot at the beginning of a string is a decimal, add a leading 0
  if (str.startsWith(".")) str = "0" + str;

  // Escape decimals so you can write numbers like 1.25rem.
  // Non standard but much easier to write.
  str = str.replace(/[.]/g, "\\.");

  // Commas to dashes, e.g. rgba(0,0,0,0) -> rgba-0-0-0-0
  str = str.replace(/,\s?/g, "-");

  // Forward slash in ratios, e.g. `1/1` -> `1x1`
  str = str.replace(/[/]/g, "x");

  // Convert spaces to dashes
  str = str.replace(/\s/g, "-");

  // Convert the percent sign to the word
  str = str.replace(/%/g, "-percent");

  // Remove trailing dashes
  str = str.replace(/-*$/, "");
  return str;
}

/**
 * Builds a rule from its parts.
 *
 * @param property The property name, e.g. "background-color"
 * @param value The value of the property, e.g. "var(--mui-blue-600)"
 * @param pseudoClass A pseudoClass such as :hover
 * @param mediaQueryClass An @media value like (min-width: 430px)
 * @returns
 */
function getRule(
  property: string,
  value: string,
  pseudoClass?: string,
  mediaQueryClass?: string,
) {
  const pseudoClassPrefix = pseudoClass ? `${pseudoClass}--` : "";
  const pseudoClassSuffix = pseudoClass ? `:${pseudoClass}` : "";
  const mediaQueryPrefix = mediaQueryClass ? `${mediaQueryClass}--` : "";

  return `.${mediaQueryPrefix}${pseudoClassPrefix}${property}-${
    toClassNameString(value)
  }${pseudoClassSuffix} { ${property}: ${value} }`;
}

/**
 * ## Global Values
 *
 * Every property gets these global values.
 * @todo Add to each property
 */
const globalValues = ["initial", "inherit", "unset", "revert", "revert-layer"];

if (import.meta.main) {
  const css: string[] = [];

  const properties: Array<[string, string[]]> = [];
  Object.entries(hellwindConfig).forEach(([k, v]) => {
    if (!k.startsWith("@") && !k.startsWith(":") && v !== null) {
      properties.push([k, v]);
    }
  });

  // Create the imports before everything else
  (config["@import"] ?? []).forEach((value) => css.push(`@import ${value};`));

  // Add the :root variables
  css.push(":root {");
  (config[":root"] ?? []).forEach((value) => css.push(`\t${value};`));
  css.push("}");

  ["", ...config["@media"]].forEach((mediaQuery) => {
    if (mediaQuery) css.push(`@media ${mediaQuery} {`);
    const mediaQueryClass = toClassNameString(mediaQuery);
    const indent = mediaQuery ? "\t" : "";

    properties.forEach(([property, values]) => {
      // Inject the global values for every property
      [...globalValues, ...values].forEach((value) => {
        css.push(
          indent + getRule(property, value, undefined, mediaQueryClass),
          indent + getRule(property, value, "any-link", mediaQueryClass),
          indent + getRule(property, value, "link", mediaQueryClass),
          indent + getRule(property, value, "visited", mediaQueryClass),
          indent + getRule(property, value, "hover", mediaQueryClass),
          indent + getRule(property, value, "focus", mediaQueryClass),
          indent + getRule(property, value, "active", mediaQueryClass),
        );
      });
    });

    if (mediaQuery) css.push(`}`);
  });

  const reset = await Deno.readTextFile("./_reset.css");
  const generated = css.join("\n");
  const hellwind = [`/** Hellwind 1.0 - Welcome to Hell */`, reset, generated];

  Deno.writeTextFile("./hellwind.css", hellwind.join("\n"));
}
