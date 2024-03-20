module.exports = {
  purge: {
    options: {
      safelist: [
        // A questo livello inserire le classi che devono essere essere escluse dal purge
        ...generateBreakpointsClasses([
          // A questo livello inserire le classi che devono essere essere escluse dal purge per ogni breakpoint
          ...generateNumberRange('grid-cols-$N', 1, 12),
          ...generateNumberRange('col-span-$N', 1, 12),
          // ...generateNumberRange Sono le classi che devono essere escluse dal purge per ogni breakpoint
          //    e per ogni numero passato nel range sostituendo $N con il numero dell'iterazione
        ])
      ],
    },
  },
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx,vue}',
    './components/**/*.{ts,tsx,vue}',
    './app/**/*.{ts,tsx,vue}',
    './src/**/*.{ts,tsx,vue}',
	],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        // sm	640px
        // md	768px
        // lg	1024px
        // xl	1280px
        "2xl": "1400px",
      },
    },
    extend: {
      transitionTimingFunction: {
        'in-expo': 'var(--cubic-bezier-ease-in-out)',
        'out-expo': 'var(--cubic-bezier-ease-in-out)',
      },
      spacing: {
        section: "5rem",
        header: "50px",
        header_respect: "70px",
      },
      colors: {

        

        "body": 'var(--color-body)',
        "background": {
            DEFAULT: 'var(--color-background-base)',
            "50": 'var(--color-background-50)',
            "100": 'var(--color-background-100)',
        },

        "black": 'var(--color-black)',
        'white': 'var(--color-white)',

        "dark": 'var(--color-dark)',
        "light": "var(--color-light)",

        "card": "var(--color-card)",

        "gray": {
          DEFAULT: "#d2d2d2",
          100: "#EDEDED",
          700: "#7e7e7e",
        },

        'primary': {
          DEFAULT: 'var(--color-primary) ',
          50: 'var(--color-primary-50)',
          100: 'var(--color-primary-100)',
          200: 'var(--color-primary-200)',
          300: 'var(--color-primary-300)',
          400: 'var(--color-primary-400)',
          500: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
          800: 'var(--color-primary-800)',
          900: 'var(--color-primary-900)',
          950: 'var(--color-primary-950)',
        },
        'secondary': {
          DEFAULT: 'var(--color-secondary) ',
          50: 'var(--color-secondary-50)',
          100: 'var(--color-secondary-100)',
          200: 'var(--color-secondary-200)',
          300: 'var(--color-secondary-300)',
          400: 'var(--color-secondary-400)',
          500: 'var(--color-secondary-500)',
          600: 'var(--color-secondary-600)',
          700: 'var(--color-secondary-700)',
          800: 'var(--color-secondary-800)',
          900: 'var(--color-secondary-900)',
          950: 'var(--color-secondary-950)',
        },
        'tertiary': {
          DEFAULT: 'var(--color-tertiary) ',
          50: 'var(--color-tertiary-50)',
          100: 'var(--color-tertiary-100)',
          200: 'var(--color-tertiary-200)',
          300: 'var(--color-tertiary-300)',
          400: 'var(--color-tertiary-400)',
          500: 'var(--color-tertiary-500)',
          600: 'var(--color-tertiary-600)',
          700: 'var(--color-tertiary-700)',
          800: 'var(--color-tertiary-800)',
          900: 'var(--color-tertiary-900)',
          950: 'var(--color-tertiary-950)',
        },

        'danger': {
          DEFAULT: 'var(--color-danger) ',
          50: 'var(--color-danger-50)',
          100: 'var(--color-danger-100)',
          200: 'var(--color-danger-200)',
          300: 'var(--color-danger-300)',
          400: 'var(--color-danger-400)',
          500: 'var(--color-danger-500)',
          600: 'var(--color-danger-600)',
          700: 'var(--color-danger-700)',
          800: 'var(--color-danger-800)',
          900: 'var(--color-danger-900)',
          950: 'var(--color-danger-950)',
        },
        'success': {
          DEFAULT: 'var(--color-success) ',
          50: 'var(--color-success-50)',
          100: 'var(--color-success-100)',
          200: 'var(--color-success-200)',
          300: 'var(--color-success-300)',
          400: 'var(--color-success-400)',
          500: 'var(--color-success-500)',
          600: 'var(--color-success-600)',
          700: 'var(--color-success-700)',
          800: 'var(--color-success-800)',
          900: 'var(--color-success-900)',
          950: 'var(--color-success-950)',
        },
        'warning': {
          DEFAULT: 'var(--color-warning) ',
          50: 'var(--color-warning-50)',
          100: 'var(--color-warning-100)',
          200: 'var(--color-warning-200)',
          300: 'var(--color-warning-300)',
          400: 'var(--color-warning-400)',
          500: 'var(--color-warning-500)',
          600: 'var(--color-warning-600)',
          700: 'var(--color-warning-700)',
          800: 'var(--color-warning-800)',
          900: 'var(--color-warning-900)',
          950: 'var(--color-warning-950)',
        },
        'info': {
          DEFAULT: 'var(--color-info) ',
          50: 'var(--color-info-50)',
          100: 'var(--color-info-100)',
          200: 'var(--color-info-200)',
          300: 'var(--color-info-300)',
          400: 'var(--color-info-400)',
          500: 'var(--color-info-500)',
          600: 'var(--color-info-600)',
          700: 'var(--color-info-700)',
          800: 'var(--color-info-800)',
          900: 'var(--color-info-900)',
          950: 'var(--color-info-950)',
        },

      },
    },
  },
  plugins: [],
}


/* 
* generateBreakpointsClasses
* questa funzione compone le classi per ogni breakpoint da quelle passate come parametro
* ES: sm:bg-red, md:bg-red, lg:bg-red, xl:bg-red, 2xl:bg-red
*/
function generateBreakpointsClasses(classes) {
  let whiteList = classes.map((className) => {
    return generateBreakpoints(className)
  }).flat()
  return whiteList
}

/*
* generateBreakpoints
* questa funzione chiama la funzione generateBreakpoints per ogni breakpoint
*/
function generateBreakpoints(className) {
  return [
    className,
    `sm:${className}`,
    `md:${className}`,
    `lg:${className}`,
    `xl:${className}`,
    `2xl:${className}`,
  ]
}

/* 
* generateNumberRange
* questa funzione genera un array di classi numeriche
* sostituendo $N con il numero dell'iterazione
* ES: generateNumberRange('grid-cols-$N', 1, 12) => ['grid-cols-1', 'grid-cols-2', 'grid-cols-3', ...]
*/
function generateNumberRange(className, start, end) {
  return Array.from({length: end - start + 1}, (_, i) => {
    return className.replace('$N', i + start)
  })
}
