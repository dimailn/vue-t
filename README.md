# vue-t

A small helper which allows you to write contextual translations in Vue.

# Installation

```npm i --save @dimailn/vue-t```

```javascript

import VueT from '@dimailn/vue-t'
Vue.use(VueT)

```

# Usage

This library provides two computed property for components - ```$translationScope``` and ```$defaultTranslationScope```.
These properties are inherited from parent components and you may change them by using ```vueT``` option.
Your translate method should use this properties to determine current scope for translations.

```vueT``` option may be used like this

```javascript

// This component has $translationScope === 'UserCard', based on name(recommended way)

{
  name: 'UserCard',
  vueT: true
}

```

or
```javascript
// This component has $translationScope === 'UserInformation'

{
  name: 'UserCard',
  vueT: 'UserInformation'
}

```

Now you may use ```$t``` in this way

```vue
<template>

<div>
  <span>{{$t('.title')}}</span>
</div>

</template>

<script>

export default {
  name: 'UserCard',
  vueT: true
}

</script>

```

