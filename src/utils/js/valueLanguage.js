import { i18n } from '@/main'

export const valueLanguage = (value, mess = false) => {
    if (!value)
        return null

    if (mess) {
        console.log("-- " + mess, value);
    }

    let locale = i18n.global.locale.value.toLowerCase()

    if (Object.prototype.hasOwnProperty.call(value, locale) && value[locale])
        return value[locale]

    let languages = ['it', 'en']
    languages = languages.filter(el => el != locale)

    let fall = null

    languages.forEach(lang => {
        if (value[lang]) {
            fall = value[lang]
            return
        }
    });

    return fall
}