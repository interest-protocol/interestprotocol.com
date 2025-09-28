export interface VolumeDataPoint {
  name: string;
  value: number;
}

export interface VolumeChartProps {
  data: VolumeDataPoint[];
}
