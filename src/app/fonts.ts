// create a utility function that exports a font, imports it, 
// and applies its className where needed. This ensures the font 
// is preloaded only when it's rendered.

import { Inter, Chivo, Fira_Mono } from 'next/font/google'

export const inter = Inter({ subsets: ["latin"] });
export const chivo = Chivo({
    subsets: ["latin"],
    display: "swap",
    variable: '--font-chivo'
});
export const fira_mono = Fira_Mono({
    weight: '400',
    subsets: ["latin"],
    display: "swap",
    variable: '--font-fira-mono'
});
