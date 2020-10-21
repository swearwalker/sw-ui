import * as components from './'

const ComponentLibrary = {
  install(Vue: any, options = {}) {
    // components
    for (const componentName in components) {
      // @ts-ignore
      const component = components[componentName]

      Vue.component(component.name, component)
    }
  }
}

export default ComponentLibrary

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(ComponentLibrary)
}