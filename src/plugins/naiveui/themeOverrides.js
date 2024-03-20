export default function exportOverride() {

    return {
        "common": {

            "successColor": getComputedStyle(document.documentElement).getPropertyValue('--color-success'),
            "successColorHover": getComputedStyle(document.documentElement).getPropertyValue('--color-success'),
            "successColorPressed": getComputedStyle(document.documentElement).getPropertyValue('--color-success-400'),
            "successColorSuppl": getComputedStyle(document.documentElement).getPropertyValue('--color-success-600'),

            "errorColor": getComputedStyle(document.documentElement).getPropertyValue('--color-danger'),
            "errorColorHover": getComputedStyle(document.documentElement).getPropertyValue('--color-danger-400'),
            "errorColorPressed": getComputedStyle(document.documentElement).getPropertyValue('--color-danger-600'),
            "errorColorSuppl": getComputedStyle(document.documentElement).getPropertyValue('--color-danger-600'),

            "warningColor": getComputedStyle(document.documentElement).getPropertyValue('--color-warning'),
            "warningColorHover": getComputedStyle(document.documentElement).getPropertyValue('--color-warning-400'),
            "warningColorPressed": getComputedStyle(document.documentElement).getPropertyValue('--color-warning-600'),
            "warningColorSuppl": getComputedStyle(document.documentElement).getPropertyValue('--color-warning-600'),

            "infoColor": getComputedStyle(document.documentElement).getPropertyValue('--color-info'),
            "infoColorHover": getComputedStyle(document.documentElement).getPropertyValue('--color-info-400'),
            "infoColorPressed": getComputedStyle(document.documentElement).getPropertyValue('--color-info-600'),
            "infoColorSuppl": getComputedStyle(document.documentElement).getPropertyValue('--color-info-600'),

            "cubicBezierEaseInOut": getComputedStyle(document.documentElement).getPropertyValue('--cubic-bezier-ease-in-out'),
            
            // "cardColor": getComputedStyle(document.documentElement).getPropertyValue('--color-bg-background-100'),

        },
        "Card": {
            "color": getComputedStyle(document.documentElement).getPropertyValue('--color-background-base'),
            "colorModal": getComputedStyle(document.documentElement).getPropertyValue('--color-primary'),
        },
        "Button": {

            "opacityDisabled": "1",
            "rippleDuration": "0s",

            "borderPrimary": "1px solid " + getComputedStyle(document.documentElement).getPropertyValue('--color-primary'),
            "borderHoverPrimary": "1px solid " + getComputedStyle(document.documentElement).getPropertyValue('--color-primary-400'),
            "borderPressedPrimary": "1px solid " + getComputedStyle(document.documentElement).getPropertyValue('--color-primary-600'),
            "borderFocusPrimary": "1px solid " + getComputedStyle(document.documentElement).getPropertyValue('--color-primary-600'),
            "borderDisabledPrimary": "1px solid " + getComputedStyle(document.documentElement).getPropertyValue('--color-primary-200'),
            
            "colorPrimary": getComputedStyle(document.documentElement).getPropertyValue('--color-primary'),
            "colorHoverPrimary": getComputedStyle(document.documentElement).getPropertyValue('--color-primary-400'),
            "colorPressedPrimary": getComputedStyle(document.documentElement).getPropertyValue('--color-primary-600'),
            "colorFocusPrimary": getComputedStyle(document.documentElement).getPropertyValue('--color-primary-600'),
            "colorDisabledPrimary": getComputedStyle(document.documentElement).getPropertyValue('--color-primary-200'),

            "textColorDisabledPrimary": "rgba(0,0,0,.3)",
        },
        "Tabs": {
            "tabPaddingMediumCard": "5px 12px"
        },
        "Tag": {
            "closeMargin": "0 0 0 12px"
        },
        "DataTable": {
            "resizableSize": "3px",
            "resizableContainerSize": "1.5px"
        },
        "LoadingBar": {
            "height": "5px"
        },
        "Notification": {
            "color": getComputedStyle(document.documentElement).getPropertyValue('--color-background-50'),
        },
        "Skeleton": {
            "color": getComputedStyle(document.documentElement).getPropertyValue('--color-skeleton'),
            "colorEnd": getComputedStyle(document.documentElement).getPropertyValue('--color-skeleton-end'),
        },
        "Dialog": {
            "color": getComputedStyle(document.documentElement).getPropertyValue('--color-background-100'),
        },
        "Input": {
            "boxShadowFocus": "none"
        },
        "Slider": {
            "indicatorColor": getComputedStyle(document.documentElement).getPropertyValue('--color-primary'),
            "fillColor": getComputedStyle(document.documentElement).getPropertyValue('--color-primary-600')
        }
    }
}
