export const account = {
  first: { y: -20, opacity: 0 },
  last: {
    opacity: 1,
    duration: 0.8,
    y: 30,
    transition: {
      duration: 1,
      y: {
        repeat: Infinity,
        duration: 2,
        ease: "easeInOut",
        repeatType: "reverse",
      },
    },
  },
};
