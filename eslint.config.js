import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
    {
        rules: {
            semi: [2, "always"],
        },
        languageOptions: {globals: {...globals.browser, ...globals.node}}
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,

];