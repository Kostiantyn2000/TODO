import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg';

export const TimeIcon = (props: SvgProps) => (
  <Svg fill="none" {...props}>
    <G
      stroke="#4A3780"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.667}
      clipPath="url(#a)">
      <Path d="M10 18.333a8.333 8.333 0 1 0 0-16.666 8.333 8.333 0 0 0 0 16.666Z" />
      <Path d="M10 5v5l3.333 1.667" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
