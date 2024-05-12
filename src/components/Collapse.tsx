import React, { FC, HTMLAttributes, useEffect, useRef } from "react";
import { m, LazyMotion, domAnimation, AnimationProps } from "framer-motion";
import { twMerge } from "tailwind-merge";

type State = HTMLAttributes<HTMLDivElement> & {
  open?: boolean,
  animate?: AnimationProps["animate"]
}

const Collapse: FC<State> = (props) => {
  const { 
    open = true, 
    animate = {
      transition: { type: "tween", duration: .3 },
      height: open ? "auto" : 0,
    },
    className,
    children,
   ...rest 
  } = props

  return (
    <LazyMotion features={domAnimation} strict>
      <div aria-expanded={open} {...rest} className={twMerge('', className)}>
        <m.div
          style={{ overflow: "hidden" }}
          initial={{ height: 0, opacity: 1 }}
          animate={animate}
          exit={{ height: 0, opacity: 1 }}
        >
          {children}
        </m.div>
      </div>
    </LazyMotion>
  );
};

export default Collapse;