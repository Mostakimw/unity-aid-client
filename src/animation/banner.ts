export const banner = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.2, staggerChildren: 0.5, delayChildren: 0.8 },
  },
};

export const bannerChild = {
  hidden: { opacity: 0, x: -200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};
