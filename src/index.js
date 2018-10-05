import WidgetUser from './WidgetUser.vue'
import WidgetUserList from './WidgetUserList.vue'
import VueI18n from 'vue-i18n'
import en from './lang/en.json'
import de from './lang/de.json'

WidgetUser.install = function (Vue, options) {
  Vue.use(VueI18n)

  const i18n = new VueI18n({
    locale: 'de',
    fallbackLocale: 'en',
    messages: { en, de }
  })

  Vue.prototype.$vcaI18n = i18n

  if (options != null && typeof options === 'object' && options.hasOwnProperty('uuid')) {
    Vue.prototype.$widgetUserDefaultUUID = options.uuid
  } else {
    Vue.prototype.$widgetUserDefaultUUID = null
  }
  if (options != null && typeof options === 'object' && options.hasOwnProperty('type')) {
    Vue.prototype.$widgetUserDefaultType = options.type
  } else {
    Vue.prototype.$widgetUserDefaultType = null
  }
  Vue.component('widget-user', WidgetUser)
}

WidgetUserList.install = function (Vue, options) {
  Vue.use(WidgetUser)
  Vue.component('widget-user-list', WidgetUserList)
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(WidgetUser)
  window.Vue.use(WidgetUserList)
}

export default WidgetUserList
const version = '__VERSION__'
// Export all components too
export {
  WidgetUser,
  WidgetUserList,
  version
}
