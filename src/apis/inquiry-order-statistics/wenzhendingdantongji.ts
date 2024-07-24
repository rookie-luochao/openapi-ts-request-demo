/* eslint-disable */
// @ts-ignore
import request from '../../request';
import * as API from './types';

/** 导出 POST /healthcenter/inquiryorderstatistics/exportInquiryOrderStatistics */
export async function exportInquiryOrderStatisticsUsingPost(
  body: API.InquiryOrderStatisticsDto,
  options?: { [key: string]: unknown }
) {
  return request<unknown>(
    '/healthcenter/inquiryorderstatistics/exportInquiryOrderStatistics',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    }
  );
}

/** 分页查询问诊订单列表-机构分组 POST /healthcenter/inquiryorderstatistics/pageInquiryOrderStatisticsByOrgID */
export async function pageInquiryOrderStatisticsByOrgIdUsingPost(
  body: API.InquiryOrderStatisticsDto,
  options?: { [key: string]: unknown }
) {
  return request<API.R>(
    '/healthcenter/inquiryorderstatistics/pageInquiryOrderStatisticsByOrgID',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    }
  );
}

/** 分页查询问诊订单列表-日期分组 POST /healthcenter/inquiryorderstatistics/pageInquiryOrderStatisticsByTime */
export async function pageInquiryOrderStatisticsByTimeUsingPost(
  body: API.InquiryOrderStatisticsDto,
  options?: { [key: string]: unknown }
) {
  return request<API.R>(
    '/healthcenter/inquiryorderstatistics/pageInquiryOrderStatisticsByTime',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    }
  );
}
