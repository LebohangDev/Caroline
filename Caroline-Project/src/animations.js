export const softFadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

export const softFadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export const containerStagger = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1
        }
    }
};

export const lineReveal = {
    hidden: { width: 0, opacity: 0 },
    visible: {
        width: "100%",
        opacity: 0.6,
        transition: { duration: 1, ease: "easeInOut" }
    }
};

export const imageReveal = {
    hidden: { opacity: 0, scale: 1.02, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 1.2, ease: "easeOut" }
    }
};

export const navVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.1 }
    }
};

export const buttonHover = {
    scale: 1.02,
    y: -2,
    transition: { duration: 0.2 }
};
