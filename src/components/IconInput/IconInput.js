import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    borderThickness: 1,
    height: 24,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    borderThickness: 2,
    height: 36,
  },
};

const IconInput = ({ label, icon, width = 250, size, ...rest }) => {
  const styles = SIZES[size];
  return (
    <InputWrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ '--size': styles.iconSize + 'px' }}>
        <Icon id={icon} size={styles.iconSize} />
      </IconWrapper>
      <Input
        style={{
          '--paddingLeft': styles.height + 'px',
          '--width': width + 'px',
          '--borderThickness': styles.borderThickness + 'px',
          '--fontSize': styles.fontSize + 'px',
          '--height': styles.height / 16 + 'rem',
        }}
        {...rest}
      ></Input>
    </InputWrapper>
  );
};

const InputWrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto 0;
  height: var(--size);
`;

const Input = styled.input`
  border: none;
  border-bottom: var(--borderThickness) solid ${COLORS.black};
  padding-left: var(--paddingLeft);
  color: inherit;
  font-size: var(--fontSize);
  font-weight: 700;
  outline-offset: 2px;
  width: var(--width);
  height: var(--height);

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

export default IconInput;
