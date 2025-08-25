import { ProgressStatus } from './progress-indicator.types';

export const getProgressColor = (
  status?: ProgressStatus,
  isContainer?: boolean
) => {
  if (status == 'success') return isContainer ? '#157F3D' : '#BAF6CF';
  if (status == 'warning') return isContainer ? '#B35309' : '#FCE58A';
  if (status == 'error') return isContainer ? '#C53030' : '#FED7D7';
  if (status == 'normal') return '#292A2D';
  return isContainer ? '#DBE1FF' : '#B4C5FF';
};
