export interface VolumeDataPoint {
  time: string;
  value: number;
}

export interface VolumeChartProps {
  data: VolumeDataPoint[];
}
