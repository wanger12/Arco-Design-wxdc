import axios from 'axios';
import type { TableData } from '@arco-design/web-vue/es/table/interface';

export interface ContentDataRecord {
  x: string;
  y: number;
}

export interface DataCountRecord {
  avatar: string;
  title: string;
  value: number;
}

export type DataCountList = DataCountRecord[];

export function queryContentData() {
  return axios.get<ContentDataRecord[]>('/api/content-data');
}
export function queryDataCount() {
  return axios.get<DataCountList[]>('/api/data-count');
}
export interface PopularRecord {
  key: number;
  clickNumber: string;
  title: string;
  increases: number;
}

export function queryPopularList(params: { type: string }) {
  return axios.get<TableData[]>('/api/popular/list', { params });
}
