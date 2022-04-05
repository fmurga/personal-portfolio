import React, { FC } from 'react'
import { RoughNotation } from 'react-rough-notation';
interface Props {
  color: string;
  children: any;
}

export const RainbowHighligth: FC<Props> = ({ color, children }) => {
      // Change the animation duration depending on length of text we're animating (speed = distance / time)
  const animationDuration = Math.floor(30 * children.length);
  return (
    <RoughNotation
    type="highlight"
    multiline={true}
    padding={[0, 2]}
    iterations={1}
    animationDuration={animationDuration}
    color={color}
  >
    {children}
  </RoughNotation>
  )
}
