module.exports = {
    "extends": "airbnb",
    "plugins":[
        "react","jsx-a11y","import"
    ],
    "env":{
        "browser":true,
        "node":true,
        "jasmine":true
    },

    "rules":{
        "no-param-reassign": 0,
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "linebreak-style": 0,
        "indent": [0, "tab", { "SwitchCase": 1, "VariableDeclarator": 1 }],
        "no-tabs": 0,
        "react/prop-types": 0,
        "react/jsx-indent": [0, "tab"],
        "react/jsx-indent-props": [0, "tab"],
        "arrow-body-style": ["error", "always"],
        "react/destructuring-assignment": 0,
        "allowElseIf": "true",
        "object-shorthand": 0,
        "object-curly-newline": 0,
        'react/no-array-index-key': 0,
        " jshint expr": "true"
    }
};