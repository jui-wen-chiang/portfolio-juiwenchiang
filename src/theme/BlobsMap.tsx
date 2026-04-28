import type { BackgroundBlobsProps, BlobItem } from "src/types/components/tools";
// import  { ColorScheme } from "src/theme/UIstandard";


export const VariantMap: Record<NonNullable<BackgroundBlobsProps['variant']>, BlobItem[]> = {
    home: [
        {
            width: 560,
            height: 460,
            top: 20,
            right: 60,
            background: `
                radial-gradient(ellipse 100% 70% at 80% 20%, rgba(84, 168, 246,0.35), transparent),
                radial-gradient(ellipse 100% 70% at 20% 90%, rgba(230, 84, 246, 0.1), transparent)`,
            borderRadius: '39% 61% 32% 68% / 49% 44% 56% 51%',
            filter: 'blur(15px)',
        }
    ],
    about: [],
    experience: [
        {
            width: 300,
            height: 250,
            bottom: -100,
            right: 100,
            background: `
                radial-gradient(ellipse at top,rgba(84, 168, 246,0.2), transparent), 
                radial-gradient(ellipse at bottom, rgba(230, 84, 246, 0), transparent)`,
            borderRadius: '73% 27% 53% 47% / 63% 44% 56% 37%',
            rotate: 50,
            zIndex: 10,
        }
    ],
    projects: [],
    eduAndcert: [
        {
            width: 300,
            height: 320,
            top: 20,
            right: 60,
            background: 'radial-gradient(circle, rgba(165,196,255,0.1) 0%, rgba(165,196,255,0.1) 54%)',
            borderRadius: '42% 58% 78% 22% / 31% 33% 67% 69%',
        }
    ],
    skills: [],
    contact: [],
    footer: [
        {
            width: 420,
            height: 420,
            bottom: -20,
            right: 50,
            background: `
                radial-gradient(ellipse 100% 70% at 20% 90%, rgba(84, 168, 246,0.2), transparent),
                radial-gradient(ellipse 100% 70% at 80% 10%, rgba(230, 84, 246, 0.1), transparent)`,
            borderRadius: '46% 54% 40% 60% / 35% 51% 49% 65%',
            filter: 'blur(10px)',
        }
    ]
};