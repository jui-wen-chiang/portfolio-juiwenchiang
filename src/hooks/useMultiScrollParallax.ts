// // hooks/useMultiScrollParallax.ts
// import { useMemo } from 'react';
// import { useScroll, useTransform } from 'framer-motion';
// import { useRef } from 'react';

// export function useMultiScrollParallax(length: number, distance: number) {
//   const refs = useMemo(() => Array.from({ length }, () => useRef(null)), [length]);
//   const transforms = refs.map(ref => {
//     const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
//     return useTransform(scrollYProgress, [0, 1], [0, -distance]);
//   });

//   return { refs, transforms };
// }