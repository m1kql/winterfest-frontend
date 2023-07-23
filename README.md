# Winterfest Frontend 

<img alt="Website" src="https://img.shields.io/website?label=website&logo=vercel&style=plastic&up_message=online&url=https%3A%2F%2Fwinterfest-ayj.vercel.app">
<img alt="GitHub" src="https://img.shields.io/github/license/m1iang/winterfest-frontend?style=plastic">

![](winterfest-image.png)

To get everything setup, jump to: [Vue 3 + Typescript + Vite](#vue-3-typescript-vite)


# TODO

> There will be no pages rendering user data.
> Users can see other users on the leaderboard page, but they cannot see anything else about the user.

- [x] Insert problem statements into firebase database
- [x] Pages
  - [x] Finish the dashboard page 
    - [x] Show list of problems with difficulty tags and problem type tags
      - [ ] Add in difficulty filtering (low priority)
      - [ ] Add in tag filtering (low priority)
      - [x] Show user's points
      - [ ] Show their rank
  - [x] Problem page
    - [x] Show problem statement
    - [x] Show past user submissions to problem
    - [x] Show people who have solved the problem
    - [x] Show problem status after submission
  - [x] Submission page
    - [ ] Code editor
    - [x] Submission should redirect to problem page
    - [x] Make API request to JDoodle API/Judge0 API
  - [ ] Leaderboard page
    - [ ] Show list of users with points (users are not clickable)


# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.
