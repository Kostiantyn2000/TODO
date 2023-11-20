import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const CheckIcon = (props: SvgProps) => (
  <Svg width={18} height={13} fill="none" {...props}>
    <Path
      fill="#fff"
      d="M7 10.172 16.192.979l1.415 1.414L7 13 .636 6.636 2.05 5.222 7 10.172Z"
    />
  </Svg>
);
