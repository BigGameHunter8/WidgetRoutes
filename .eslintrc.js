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
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
    }
};