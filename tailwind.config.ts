import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                // This connects the Next.js font loader to Tailwind
                sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui'],
                brand: ['var(--font-kalam)', 'cursive'],
                geist: ['var(--font-geist-sans)', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
export default config;