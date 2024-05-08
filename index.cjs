/**
 * Relucent Prettier Config.
 *
 * @copyright 2023 Relucent Ltd
 * @author    Relucent Ltd <hello@relucent.dev>
 * @see       https://relucent.dev
 */

const sortImports = require("@ianvs/prettier-plugin-sort-imports");
const shellScript = require("prettier-plugin-sh");
const packageFile = require("prettier-plugin-pkg");
const xml = require("prettier-plugin-xml");

/** @type {import("prettier").Config & import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
  proseWrap: "always",
  plugins: [
    sortImports,
    shellScript,
    packageFile,
    xml,
  ],
  importOrder: [
    // Preceding Space
    // See: https://github.com/IanVS/prettier-plugin-sort-imports?tab=readme-ov-file#6-enforce-a-blank-line-after-top-of-file-comments
    "",

    // Frameworks and Runtimes
    "^@?jest/.*$",
    "^react(-dom)?$",
    "^next(/.*|$)",
    "^@next(/.*|$)",
    "^@payloadcms(/.*|$)",
    "<BUILT_IN_MODULES>",

    // Third Party Source
    "<THIRD_PARTY_MODULES>",

    // Internal
    "^[.]",
    "^(@|\\d|_)",

    // Types
    "<TYPES>",
    "<TYPES>^[.]",
  ],
};
