import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const CalendarIcon = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      fill="#4A3780"
      d="M15 2h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4V0h2v2h6V0h2v2ZM2 8v10h16V8H2Zm2 4h5v4H4v-4Z"
    />
  </Svg>
);
