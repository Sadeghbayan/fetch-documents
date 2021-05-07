## Documents List with sort and filter Project

A simple Vue.js application for fetching List of documents with sort and filter.

## Instructions for the demo

- I decided to build the project with Vue and Typescript.
- I used Vue CLI to set up the project and built on the structure provided by it
- I used v-calendar(https://vcalendar.io) for the datepickers
- Apply button should handle errors and basic validations, both datepickers should be filled and the value of the from should be less than to (errors will be shown).
- Filter box should be closed when apply/clear buttons clicked on Mobile.
- I decided to create simple store(no Vuex) as it's very simple to have it with the Vue3 new features.
- I created a hook for Api calls and reused it for other hooks to collect needed data.
- I used native `fetch()` to consume the APIs.
- There is utils folder in root directory which contains some JS functions around reusable and available through all the application.
- `Roboto` and `Verdana` fonts are using in the project. since `Verdana` is supported in most of the browsers I haven't added in font.scss `Verdana Mac: 99.1% Windows: 99.84%`
- In order to use the `mixins`, and `variables` available on the Vue files I imported them in vue.config.js
- I used `BEM` naming convention.

### Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
