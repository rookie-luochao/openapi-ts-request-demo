/* eslint-disable */
// @ts-ignore

export type InquiryOrderStatisticsDto = {
  endTime?: string;
  orgID?: string;
  pageIndex?: number;
  pageSize?: number;
  startTime?: string;
};

export type R = {
  /** 返回码 */
  code?: string;
  /** 返回数据 */
  data?: Record<string, unknown>;
  /** 返回消息 */
  message?: string;
  /** 是否成功 */
  success?: boolean;
};
