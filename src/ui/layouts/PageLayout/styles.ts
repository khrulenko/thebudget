import { PaperProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

const createPageCanvasStyles: StyleFunction<PaperProps> = ({
  theme: { spacing },
}) => ({
  width: '100%',
  padding: spacing(4),

  borderRadius: spacing(6),
});

const createHeaderWrapperStyles: StyleFunction<PaperProps> = ({
  theme: { spacing },
}) => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: spacing(1),

  height: spacing(7),
});

export { createPageCanvasStyles, createHeaderWrapperStyles };
