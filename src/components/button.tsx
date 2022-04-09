import * as React from 'react';
import {Button as BaseuiButton} from 'baseui/button';

type Props = {
  onClick?: any;
  label: string;
};

function Button(props: Props) {
  return <BaseuiButton onClick={props.onClick}>{props.label}</BaseuiButton>;
}

export default Button;
