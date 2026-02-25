import typography from '@tailwindcss/typography';
import containerQueries from '@tailwindcss/container-queries';
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['index.html', 'src/**/*.{js,ts,jsx,tsx,html,css}'],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px'
            }
        },
        extend: {
            colors: {
                border: 'oklch(var(--border))',
                input: 'oklch(var(--input))',
                ring: 'oklch(var(--ring) / <alpha-value>)',
                background: 'oklch(var(--background))',
                foreground: 'oklch(var(--foreground))',
                primary: {
                    DEFAULT: 'oklch(var(--primary) / <alpha-value>)',
                    foreground: 'oklch(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'oklch(var(--secondary) / <alpha-value>)',
                    foreground: 'oklch(var(--secondary-foreground))'
                },
                destructive: {
                    DEFAULT: 'oklch(var(--destructive) / <alpha-value>)',
                    foreground: 'oklch(var(--destructive-foreground))'
                },
                muted: {
                    DEFAULT: 'oklch(var(--muted) / <alpha-value>)',
                    foreground: 'oklch(var(--muted-foreground) / <alpha-value>)'
                },
                accent: {
                    DEFAULT: 'oklch(var(--accent) / <alpha-value>)',
                    foreground: 'oklch(var(--accent-foreground))'
                },
                popover: {
                    DEFAULT: 'oklch(var(--popover))',
                    foreground: 'oklch(var(--popover-foreground))'
                },
                card: {
                    DEFAULT: 'oklch(var(--card))',
                    foreground: 'oklch(var(--card-foreground))'
                },
                chart: {
                    1: 'oklch(var(--chart-1))',
                    2: 'oklch(var(--chart-2))',
                    3: 'oklch(var(--chart-3))',
                    4: 'oklch(var(--chart-4))',
                    5: 'oklch(var(--chart-5))'
                },
                gold: {
                    DEFAULT: '#D4AF37',
                    dark: '#996515',
                    light: '#F0D060'
                }
            },
            fontFamily: {
                sans: ['Playfair Display', 'Georgia', 'serif'],
                display: ['Great Vibes', 'cursive'],
                cinzel: ['Cinzel', 'serif'],
                'great-vibes': ['Great Vibes', 'cursive'],
                playfair: ['Playfair Display', 'Georgia', 'serif'],
                dancing: ['Dancing Script', 'cursive'],
                poppins: ['Poppins', 'sans-serif'],
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
                full: '9999px'
            },
            boxShadow: {
                xs: '0 1px 2px 0 rgba(0,0,0,0.05)',
                gold: '0 0 20px rgba(212, 175, 55, 0.4), 0 0 40px rgba(212, 175, 55, 0.2)',
                'gold-inset': 'inset 0 0 20px rgba(212, 175, 55, 0.1)',
                letter: '0 0 60px rgba(180,40,80,0.25), 0 0 120px rgba(100,10,50,0.3), inset 0 0 30px rgba(212,175,55,0.08)',
                envelope: '0 10px 30px rgba(0,0,0,0.5)',
                'letter-open': '0 20px 50px rgba(0,0,0,0.8)'
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                },
                bloomIn: {
                    '0%': { opacity: '0', transform: 'scale(0.88) translateY(24px)', filter: 'blur(6px)' },
                    '40%': { opacity: '0.7', transform: 'scale(1.02) translateY(-4px)', filter: 'blur(1px)' },
                    '70%': { opacity: '0.95', transform: 'scale(0.99) translateY(2px)', filter: 'blur(0)' },
                    '100%': { opacity: '1', transform: 'scale(1) translateY(0)', filter: 'blur(0)' }
                },
                fadeInLetter: {
                    from: { opacity: '0', transform: 'translateY(30px)' },
                    to: { opacity: '1', transform: 'translateY(0)' }
                },
                twinkle: {
                    '0%, 100%': { opacity: '0.2', transform: 'scale(0.85)' },
                    '50%': { opacity: '1', transform: 'scale(1.15)' }
                },
                floatDrift: {
                    '0%':   { transform: 'translate(0, 0)' },
                    '25%':  { transform: 'translate(var(--drift-x, 12px), calc(var(--drift-y, -8px) * 0.5))' },
                    '50%':  { transform: 'translate(calc(var(--drift-x, 12px) * 0.6), var(--drift-y, -8px))' },
                    '75%':  { transform: 'translate(calc(var(--drift-x, 12px) * -0.3), calc(var(--drift-y, -8px) * 0.3))' },
                    '100%': { transform: 'translate(0, 0)' }
                },
                floatUp: {
                    '0%':   { transform: 'translateY(0px) scale(1) rotate(0deg)' },
                    '20%':  { transform: 'translateY(-18px) scale(1.08) rotate(5deg)' },
                    '50%':  { transform: 'translateY(-38px) scale(0.95) rotate(-4deg)' },
                    '80%':  { transform: 'translateY(-22px) scale(1.05) rotate(3deg)' },
                    '100%': { transform: 'translateY(0px) scale(1) rotate(0deg)' }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'bloom-in': 'bloomIn 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards',
                'fade-in-letter': 'fadeInLetter 2s ease forwards',
                twinkle: 'twinkle 3s ease-in-out infinite',
                'float-drift': 'floatDrift 18s ease-in-out infinite',
                'float-up': 'floatUp 24s ease-in-out infinite'
            }
        }
    },
    plugins: [typography, containerQueries, animate]
};
