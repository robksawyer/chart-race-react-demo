import React, { Fragment } from 'react';
import { motion } from 'framer-motion'

const classes = {
    bar: {
      position: "relative",
    },
    container: {
      width: "100%",
      displamarginTop: "flex",
      position: "absolute",
    }
}

function Bar(props) {

  // const barDefaultStyle = {
  //   transition: `all ${props.timeout}ms ease-in-out`,
  //   ...props.prevStyle,
  // };
  // const posDefaultStyle = {
  //   transition: `all ${props.timeout}ms ease-in-out`,
  //   marginTop: props.prevStyle.marginTop,
  // }
  // const barTransitionStyles = {
  //     entering: props.prevStyle,
  //     entered:  props.currStyle,
  //     exiting: props.currStyle,
  // };
  // const posTransitionStyles = {
  //     entering: {marginTop: props.prevStyle.marginTop},
  //     entered: {marginTop: props.currStyle.marginTop},
  //     exiting: {marginTop: props.currStyle.marginTop},
  // }

  const barDefaultStyle = {
    ...props.prevStyle,
  };
  const posDefaultStyle = {
    marginTop: props.prevStyle.marginTop,
  }
  const barTransitionStyles = {
    initial: props.prevStyle,
    animate:  props.currStyle,
  };
  const posTransitionStyles = {
    initial: { marginTop: props.prevStyle.marginTop },
    animate: { marginTop: props.currStyle.marginTop },
    transition: {
      ease: 'easeInOut',
      duration: props.timeout
    }
  }
  return (
    <div style={classes.container}>
      <motion.div>
        <Fragment>
          <motion.div
            initial={{
              ...posDefaultStyle, 
              yChannelSelector: props.prevStyle.marginTop,
            }}
            animate={{
              width: `${props.width[0]}%`,
              marginTop: props.currStyle.marginTop,
            }}
            transition={{
              ease: 'easeInOut',
              duration: 1.25
            }}
          >
            {props.label}
          </motion.div>
          <motion.div
            animate={{
              width: `${props.width[1]}%`
            }}
            transition={{
              ease: 'easeInOut',
              duration: 1.25
            }}
          >
            <motion.div
              initial={{
                ...classes.bar,
                ...barDefaultStyle, 
                ...props.prevStyle,
              }}
              animate={{
                ...classes.bar,
                ...barDefaultStyle, 
                ...props.currStyle,
              }}
              transition={{
                ease: 'easeInOut',
                duration: 1.25
              }}
            />
          </motion.div>
          <motion.div
            initial={{
              ...posDefaultStyle,
              marginTop: props.prevStyle.marginTop,
            }}
            animate={{
              ...posDefaultStyle,
              marginTop: props.currStyle.marginTop,
              width: `${props.width[2]}%`
            }}
            transition={{
              ease: 'easeInOut',
              duration: 1.25
            }}
          >
            <div style={{...props.textBoxStyle}}>
              {props.value}
            </div>
          </motion.div>
        </Fragment>
      </motion.div>
    </div>
  );
}

export default Bar;
