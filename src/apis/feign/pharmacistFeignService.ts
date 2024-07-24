/* eslint-disable */
// @ts-ignore
import request from '@/request';
import * as API from './types';

/** confirmReceipt POST /healthcenter/feign/pharmacist/confirmReceipt */
export async function confirmReceiptUsingPost1(
  body: API.ConfirmReceiptVO,
  options?: { [key: string]: unknown }
) {
  return request<unknown>('/healthcenter/feign/pharmacist/confirmReceipt', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** qualifiedPharmacistList GET /healthcenter/feign/pharmacist/qualifiedPharmacistList */
export async function qualifiedPharmacistListUsingGet(
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.qualifiedPharmacistListUsingGETParams,
  options?: { [key: string]: unknown }
) {
  return request<API.VO3[]>(
    '/healthcenter/feign/pharmacist/qualifiedPharmacistList',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** reviewRp POST /healthcenter/feign/pharmacist/reviewRp */
export async function reviewRpUsingPost1(
  body: API.ReviewRpVO,
  options?: { [key: string]: unknown }
) {
  return request<unknown>('/healthcenter/feign/pharmacist/reviewRp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
