/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--minHeight': 8 + 'px',
    '--padding': 0,
    '--borderRadius': 4 + 'px',
  },
  medium: {
    '--minHeight': 12 + 'px',
    '--padding': 0,
    '--borderRadius': 4 + 'px',
  },
  large: {
    '--minHeight': 24 + 'px',
    '--padding': 4 + 'px',
    '--borderRadius': 8 + 'px',
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  return (
    <ProgressBarWrapper style={styles} role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100}>
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper>
        <Bar style={styles} width={value}></Bar>
      </BarWrapper>
    </ProgressBarWrapper>
  );
};

const ProgressBarWrapper = styled.div`
  max-width: 375px;
  border-radius: var(--borderRadius);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const Bar = styled.div`
  width: ${(props) => props.width + '%'};
  background-color: ${COLORS.primary};
  min-height: var(--minHeight);
  border-radius: 4px 0px 0px 4px;
`;

export default ProgressBar;
