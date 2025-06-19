// src/utils/responsiveMixin.ts

/** 常用斷點 */
export const breakpoints = {
  xs: 0,      // phones
  sm: 600,    // tablets
  md: 900,    // small laptop
  lg: 1200,   // desktop
  xl: 1536,   // large desktop
};

/** 共用的 padding */
export const responsivePadding = {
  padding: '10rem',
  [`@media (max-width:${breakpoints.md}px)`]: {
    padding: '4rem 1rem',
  }
};

/** 橫向排版在小螢幕改為直向 */
export const responsiveRowLayout = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
  [`@media (max-width:${breakpoints.md}px)`]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '2rem 1rem'
  }
};

/** 垂直排版基礎樣式 */
export const responsiveColumnLayout = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  [`@media (max-width:${breakpoints.md}px)`]: {
    gap: '0.5rem'
  }
};

/** 文字大小縮放 */
export const responsiveTypography = {
  fontSize: '2rem',
  [`@media (max-width:${breakpoints.md}px)`]: {
    fontSize: '1.5rem'
  },
  [`@media (max-width:${breakpoints.sm}px)`]: {
    fontSize: '1.2rem'
  }
};

export const responsiveImage = {
  width: {
    xs: '100%',
    sm: '70%',
    md: '50%',
    lg: '35%',
  },
  maxWidth: '400px',
  height: 'auto',
  objectFit: 'cover',
  borderRadius: '1rem',
  display: 'block',
  margin: '0 auto'
};