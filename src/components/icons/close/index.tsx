import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const CloseIcon = (props: SvgProps) => (
  <Svg {...props} width={24} height={24} fill="none">
    <Path
      stroke="#14142B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m6 6 12.774 12.774M6 18.774 18.774 6"
    />
  </Svg>
);
