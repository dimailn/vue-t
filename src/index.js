import VueProvideObservable from 'vue-provide-observable'


const provideProps = () => {
  return {
    translationScope: null,
    defaultTranslationScope: null
  }
}

const nameMapper = (name) => `$${name}`


export default {
  mixins: [
    VueProvideObservable('$vueT', provideProps, nameMapper)
  ],
  inject: {
    $vueT: {
      default: {}
    }
  },
  computed: {
    $translationScope() {
      return this.$options.name || this.$vueT.translationScope || this.$defaultTranslationScope
    },
    $defaultTranslationScope() {
      return this.$vueT.defaultTranslationScope || 'defaults'
    }
  }
}