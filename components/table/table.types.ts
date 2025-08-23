import React from 'react';

export interface TableProps {
  columns: string[];
  gridTemplateColumns: string | string[];
  children: React.ReactNode;
}
