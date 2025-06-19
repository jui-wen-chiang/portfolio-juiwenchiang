const breakpoints = {
    xs: 0,      // phones
    sm: 600,    // tablets
    md: 900,    // small laptop
    lg: 1200,   // desktop
    xl: 1536,   // large desktop
};

const fullSize = {
    width: '100%',
    height: '100%'
};

const commBorderRadius = {
    borderRadius: '1rem'
};

// change the name
const dmSerifFontFamily = {
    letterSpacing: '0.3rem',
    [`@media (max-width:${breakpoints.sm}px)`]: {
        letterSpacing: '0.2rem',
    }
};

const commPadding = {
    padding: '1rem',
};

export { breakpoints, fullSize, commBorderRadius, commPadding, dmSerifFontFamily }