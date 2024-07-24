/* eslint-disable */
// @ts-ignore
import request from '@/request';
import * as API from './types';

/** 药店H5添加药品用药限制 POST /healthcenter/inquiryOrderMedicine/checkH5Medicine */
export async function checkH5MedicineUsingPost(
  body: API.CheckH5InquiryOrderMedicineVo,
  options?: { [key: string]: unknown }
) {
  return request<API.R>('/healthcenter/inquiryOrderMedicine/checkH5Medicine', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 药店H5添加药品用药限制开关 POST /healthcenter/inquiryOrderMedicine/checkH5MedicineSwitch */
export async function checkH5MedicineSwitchUsingPost(
  body: API.CheckH5InquiryOrderMedicineVo,
  options?: { [key: string]: unknown }
) {
  return request<API.R>(
    '/healthcenter/inquiryOrderMedicine/checkH5MedicineSwitch',
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

/** 药店H5添加药品 POST /healthcenter/inquiryOrderMedicine/saveH5Medicines */
export async function saveH5MedicinesUsingPost(
  body: API.SaveH5InquiryOrderMedicinesVo,
  options?: { [key: string]: unknown }
) {
  return request<API.R>('/healthcenter/inquiryOrderMedicine/saveH5Medicines', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 药店H5添加药品缓存 POST /healthcenter/inquiryOrderMedicine/saveH5MedicinesCache */
export async function saveH5MedicinesCacheUsingPost(
  body: API.SaveH5InquiryOrderMedicinesVo,
  options?: { [key: string]: unknown }
) {
  return request<API.R>(
    '/healthcenter/inquiryOrderMedicine/saveH5MedicinesCache',
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

/** 根据问诊单查询药店H5添加药品 POST /healthcenter/inquiryOrderMedicine/selectH5MedicineByOrderId */
export async function selectH5MedicineByOrderIdUsingPost(
  body: API.QueryH5InquiryOrderMedicinesVo,
  options?: { [key: string]: unknown }
) {
  return request<API.RListInquiryOrderMedicineH5Dto_>(
    '/healthcenter/inquiryOrderMedicine/selectH5MedicineByOrderId',
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

/** 根据问诊单查询药店H5添加药品缓存 POST /healthcenter/inquiryOrderMedicine/selectH5MedicineByOrderIdCache */
export async function selectH5MedicineByOrderIdCacheUsingPost(
  body: API.QueryH5InquiryOrderMedicinesVo,
  options?: { [key: string]: unknown }
) {
  return request<API.RListInquiryOrderMedicineH5Dto_>(
    '/healthcenter/inquiryOrderMedicine/selectH5MedicineByOrderIdCache',
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

/** 根据问诊单查询问诊选购药品 POST /healthcenter/inquiryOrderMedicine/selectMedicineByOrderId */
export async function selectMedicineByOrderIdUsingPost(
  body: API.InquiryOrderMedicine_,
  options?: { [key: string]: unknown }
) {
  return request<API.RListInquiryOrderMedicine_>(
    '/healthcenter/inquiryOrderMedicine/selectMedicineByOrderId',
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
