export const linkExpandVariants = {
    initial : {
        width : 0,
        opacity : 0
    },
    animate : {
        width: 60,
        opacity : 1,
        transition: {
          duration : .5
        }
    },
    exit : {
        width: 0,
        opacity : 0
    }
}

export const socialsHomeVariants = {
  initial: (i) => ({
    opacity: 0,
    x: -50 * i[0],
  }),
  animate: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      type: "spring", stiffness: 100,
      delay: i[1] + i[0] * 0.1,
    },
  }),
}

export const fadeInVariant = {
  initial: {
      opacity: 0,
  },
  animate: {
      opacity: 1,
      transition :{
          type: "tween",
          duration: 1,
          delay: 0,
      }
  }
}

export const fadeInFastVariant = {
  initial: {
      opacity: 0,
  },
  animate: {
      opacity: 1,
      transition :{
          type: "tween",
          duration: .2,
          delay: 0,
      }
  },
  exit : {
    opacity: 0,
    transition :{
      type: "tween",
      duration: .2,
      delay: 0,
    }
  }
}

export const progressVariant = {
  initial: {
      width:0
  },
  animate: (i) => ({
      width: i[0],
      transition: {
          delay:1+ i[1]*.25,
          duration: .5
      }
  })
}