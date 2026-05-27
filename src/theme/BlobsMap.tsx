import type { BackgroundBlobsProps, BlobItem } from "src/types/components/tools";


export const VariantMap: Record<NonNullable<BackgroundBlobsProps['variant']>, BlobItem[]> = {
    home: [
        {
            width: 400,
            height: 360,
            top: -10,
            right: -40,
            background: `
                radial-gradient(ellipse 100% 70% at 80% 20%, rgba(84, 168, 246,0.2), transparent),
                radial-gradient(ellipse 100% 70% at 20% 90%, rgba(21, 122, 90, 0.1), transparent)`,
            borderRadius: '61% 39% 61% 39% / 37% 34% 66% 63%',
            filter: 'blur(10px)',
        },
    ],
    about: [],
    experience: [],
    projects: [],
    eduAndcert: [],
    skills: [],
    contact: [],
    footer: []
};