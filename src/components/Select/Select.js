import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectWrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>

      <SelectPresentation>
        {displayedValue}
        <IconWrapper style={{ '--size': 24 + 'px' }}>
          <Icon id="chevron-down" strokeWidth={1} size={24}></Icon>
        </IconWrapper>
      </SelectPresentation>
    </SelectWrapper>
  );
};

const SelectWrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  appearance: none;
`;

const SelectPresentation = styled.div`
  padding: 12px 16px;
  color: ${COLORS.gray700};
  font-size: 1rem;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  width: 100%;
  padding-right: 52px;

  ${NativeSelect}:focus + & {
    /* Fallback style if webkit style is invalid */
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  bottom: 0;
  top: 0;
  right: 10px;
  margin: auto;
  width: var(--size);
  height: var(--size);
  pointer-events: none;
`;

export default Select;
