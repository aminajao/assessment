/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    colors: {
      black: {
        50: '#d1d1d1',
        100: '#b2b2b2',
        200: '#8b8b8b',
        300: '#646464',
        400: '#3e3e3e',
        500: '#171717',
        600: '#131313',
        700: '#0f0f0f',
        800: '#0c0c0c',
        900: '#080808',
        111: '#000000',
      },
      blue: {
        50: '#cde1ec',
        100: '#abcde0',
        200: '#81b4d0',
        300: '#579bc0',
        400: '#2d82b1',
        500: '#0369a1',
        600: '#035886',
        700: '#02466b',
        800: '#023551',
        900: '#012336',
        111: '#011520',
        accent: '#7DD3FC',
      },
      primary: '#F97F39',
      secondary: '#001242',
      white: '#fff',
      text: '',
    },

    fontSize: {
      tiny: '10px',
      xs: '12px',
      base: '14px',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '3.5xl': '2rem',
      '4xl': '20px',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        xs: '',
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#F97F39',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('tailwindcss-animate')],
};
