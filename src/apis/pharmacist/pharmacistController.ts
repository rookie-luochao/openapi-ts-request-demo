/* eslint-disable */
// @ts-ignore
const request = require('@/request');
import * as API from './types';

/** 管理员查询审方记录 GET /healthcenter/pharmacist/auditRecordAdmin */
export async function auditRecordAdminUsingGet(
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.auditRecordAdminUsingGETParams,
  options?: { [key: string]: unknown }
) {
  return request<API.R>('/healthcenter/pharmacist/auditRecordAdmin', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 药师查询审方记录 GET /healthcenter/pharmacist/auditRecordPharmacist */
export async function auditRecordPharmacistUsingGet(
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.auditRecordPharmacistUsingGETParams,
  options?: { [key: string]: unknown }
) {
  return request<API.R>('/healthcenter/pharmacist/auditRecordPharmacist', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 检查处方药品库存 GET /healthcenter/pharmacist/checkRpMedicineStock */
export async function checkRpMedicineStockUsingGet(
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.checkRpMedicineStockUsingGETParams,
  options?: { [key: string]: unknown }
) {
  return request<API.R>('/healthcenter/pharmacist/checkRpMedicineStock', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 确认接收处方单 POST /healthcenter/pharmacist/confirmReceipt */
export async function confirmReceiptUsingPost(
  body: API.DTO16,
  options?: { [key: string]: unknown }
) {
  return request<API.R>('/healthcenter/pharmacist/confirmReceipt', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询药师心跳 POST /healthcenter/pharmacist/getHeartbeat */
export async function getHeartbeatUsingPost(
  body: API.GetHeartBeatDTO,
  options?: { [key: string]: unknown }
) {
  return request<API.RDTO_>('/healthcenter/pharmacist/getHeartbeat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 药师心跳 POST /healthcenter/pharmacist/heartbeat */
export async function heartbeatUsingPost1(
  body: API.DTO17,
  options?: { [key: string]: unknown }
) {
  return request<API.R>('/healthcenter/pharmacist/heartbeat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 药师审方拒绝原因 GET /healthcenter/pharmacist/pharmacistRejectReason */
export async function pharmacistRejectReasonUsingGet(
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.pharmacistRejectReasonUsingGETParams,
  options?: { [key: string]: unknown }
) {
  return request<API.R>('/healthcenter/pharmacist/pharmacistRejectReason', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 审核处方 POST /healthcenter/pharmacist/reviewRp */
export async function reviewRpUsingPost(
  body: API.DTO8,
  options?: { [key: string]: unknown }
) {
  return request<API.R>('/healthcenter/pharmacist/reviewRp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 便民门诊-审核处方 POST /healthcenter/pharmacist/reviewRpConvenient */
export async function reviewRpConvenientUsingPost(
  body: API.DTO8,
  options?: { [key: string]: unknown }
) {
  return request<API.R>('/healthcenter/pharmacist/reviewRpConvenient', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询处方详情 GET /healthcenter/pharmacist/rpDetail */
export async function rpDetailUsingGet(
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.rpDetailUsingGETParams,
  options?: { [key: string]: unknown }
) {
  return request<API.R>('/healthcenter/pharmacist/rpDetail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询药师正在处理的处方单 GET /healthcenter/pharmacist/rpInProcess */
export async function rpInProcessUsingGet(
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.rpInProcessUsingGETParams,
  options?: { [key: string]: unknown }
) {
  return request<API.R>('/healthcenter/pharmacist/rpInProcess', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 分页查询药师正在处理的处方单 GET /healthcenter/pharmacist/rpInProcessPage */
export async function rpInProcessPageUsingGet(
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.rpInProcessPageUsingGETParams,
  options?: { [key: string]: unknown }
) {
  return request<API.RPageVO2>('/healthcenter/pharmacist/rpInProcessPage', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 药师查询处于审核状态的处方单 POST /healthcenter/pharmacist/rpOtherList */
export async function rpOtherListUsingPost(
  body: API.DTO8,
  options?: { [key: string]: unknown }
) {
  return request<API.R>('/healthcenter/pharmacist/rpOtherList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 分页药师查询处于审核状态的处方单 POST /healthcenter/pharmacist/rpOtherPage */
export async function rpOtherPageUsingPost(
  body: API.DTO8,
  options?: { [key: string]: unknown }
) {
  return request<API.RPageVO2>('/healthcenter/pharmacist/rpOtherPage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** test GET /healthcenter/pharmacist/test */
export async function testUsingGet1(
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.testUsingGET1Params,
  options?: { [key: string]: unknown }
) {
  return request<API.R>('/healthcenter/pharmacist/test', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 药师开始接单，尝试拉取一单待审核数据 POST /healthcenter/pharmacist/tryToFetchOneRp */
export async function tryToFetchOneRpUsingPost(
  body: API.Pinyin_13,
  options?: { [key: string]: unknown }
) {
  return request<API.R>('/healthcenter/pharmacist/tryToFetchOneRp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
