import VueProvideObservable from 'vue-provide-observable'


const propsFactory = () => {
  return {
    translationScope: null,
    defaultTranslationScope: null
  }
}

const nameMapper = (name) => `$${name}`

const VueTMixin = {
  mixins: [
    VueProvideObservable('vueT', propsFactory, nameMapper)
  ],
  inject: {
    vueT: {
      default: { wrapper: {} }
    }
  },
  computed: {
    $translationScope() {
      return this.$options.vueT || this.vueT.wrapper.translationScope || this.$defaultTranslationScope
    },
    $defaultTranslationScope() {
      return this.vueT.wrapper.defaultTranslationScope || 'defaults'
    }
  }
}

export default {
  install(Vue, options){
    Vue.mixin(VueTMixin)
  }
}