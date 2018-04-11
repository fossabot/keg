![intro](./media/intro.png)
# Keg

[![LICENSE][LICENSE IMAGE]][LICENSE LINK]

[NPM IMAGE]:http://img.shields.io/npm/v/vuex-keg.svg?style=flat
[NPM LINK]:https://www.npmjs.org/package/vuex-keg
[LICENSE IMAGE]:https://img.shields.io/npm/l/vuex-keg.svg
[LICENSE LINK]:https://www.npmjs.org/package/vuex-keg

> Vuex supporting custom util plugin.

## Installation
``
npm i -S vuex-keg
``

``
yarn add vuex-keg
``
## How to Register & Use this
````javascript
import Vue from 'vue'
import Vuex from 'vuex'
import VuexKeg, {keg} from './index'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
      count: 0,
    },
    mutation: {
      increase(state) {
        state.count += 1
      },
    },
    actions: {
      doSayHi: keg(({justSayHi, commit}, payload) => {
        // custom keg util
        justSayHi('foo')
        // do mutation
        commit('increase')
      })
    },
    plugins: [VuexKeg({
      plugins: {
        justSayHi: (store) => (context) => (yourPrams) => (window.console.log('hi!', yourPrams)),
      },
    })],
    })
  // result console 'hi!, foo'
````
