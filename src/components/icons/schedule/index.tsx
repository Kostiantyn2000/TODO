import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const ScheduleIcon = (props: SvgProps) => (
  <Svg width={18} height={20} fill="none" {...props}>
    <Path
      fill="#194A66"
      d="M17 20H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1Zm-1-2V2H2v16h14ZM5 5h8v2H5V5Zm0 4h8v2H5V9Zm0 4h8v2H5v-2Z"
    />
  </Svg>
);
