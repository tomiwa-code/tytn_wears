export const navbar = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 2.8,
      type: "easeInOut",
      duration: 0.8,
    },
  },
};

export const ham = (prop) => ({
  initial: {
    rotate: 0,
    y: 0,
  },
  animate: {
    rotate: prop === "top" ? 45 : -45,
    y: prop === "top" && 10,
  },
});

export const nav = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  exit: {
    y: -10,
    opacity: 0,
  },
};

export const cart = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.3,
    },
  },
  exit: {
    x: 100,
    opacity: 0,
  },
};

export const navLinks = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
};

export const hero = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

export const hideText = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      delay: 0.7,
      duration: 0.7,
    },
  },
};

export const hideText2 = {
  initial: {
    y: -30,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeOut",
      delay: 1.5,
      duration: 0.7,
    },
  },
};

export const heroImgAnimate = {
  initial: {
    y: 200,
    x: -100,
    opacity: 0,
    scale: 0.1,
  },
  animate: {
    y: 0,
    x: 0,
    opacity: 1,
    scale: [0.1, 0.5, 0.7, 0.8, 0.9, 1],
    transition: {
      type: "spring",
      stiffness: 120,
      delay: 2,
      duration: 0.5,
    },
  },
};

export const heroProd = {
  initial: {
    x: 200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      delay: 2.6,
    },
  },
};

export const fadeIn = (props) => ({
  initial: {
    y: props === "up" ? 50 : -10,
    opacity: 0,
  },
  animate: (custom) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      delay: custom * 1,
    },
  }),
});

export const prods = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 150,
    },
  },
};

export const slideAcross = {
  animate: (custom) => ({
    left: ["0%", "0%", "100%"],
    width: ["0%", "100%", "0%"],
    transition: {
      ease: "easeInOut",
      delay: custom * 1,
      duration: 0.8,
    },
  }),
};

export const hide = {
  initial: {
    opacity: 0,
  },
  animate: (custom) => ({
    opacity: 1,
    transition: {
      type: "easeInOut",
      delay: custom * 1,
    },
  }),
};

export const staggerParent = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

export const SlideIn = (props) => ({
  initial: {
    x: props === "left" ? -100 : 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.3,
    },
  },
});

export const IO = {
  initial: {
    opacity: 0,
    y: -10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
    },
  },
};
