/* eslint-disable */
// @ts-ignore
import request from 'node-fetch';
import * as API from './types';

/** 操作话术, 更新排序或者禁用 POST /healthcenter/speechcraft/operate */
export async function operateSpeechcraftUsingPost(
  body: API.OperateSpeechcraftReqVO,
  options?: { [key: string]: unknown }
) {
  return request<API.R>('/healthcenter/speechcraft/operate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 分页查询个人话术 POST /healthcenter/speechcraft/personalSpeechCraftPage */
export async function personalSpeechCraftPageUsingPost(
  body: API.QueryPersonalSpeechCraftPage,
  options?: { [key: string]: unknown }
) {
  return request<API.R>('/healthcenter/speechcraft/personalSpeechCraftPage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询个人话术 GET /healthcenter/speechcraft/queryPersonalSpeechCraft */
export async function queryPersonalSpeechCraftUsingGet(
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.queryPersonalSpeechCraftUsingGETParams,
  options?: { [key: string]: unknown }
) {
  return request<API.R>('/healthcenter/speechcraft/queryPersonalSpeechCraft', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询话术信息 GET /healthcenter/speechcraft/querySpeechCraftByClientAppID */
export async function querySpeechCraftByClientAppIdUsingGet(
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.querySpeechCraftByClientAppIDUsingGETParams,
  options?: { [key: string]: unknown }
) {
  return request<API.R>(
    '/healthcenter/speechcraft/querySpeechCraftByClientAppID',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 查询话术 GET /healthcenter/speechcraft/querySpeechcraftByID */
export async function querySpeechcraftByIdUsingGet(
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.querySpeechcraftByIDUsingGETParams,
  options?: { [key: string]: unknown }
) {
  return request<API.R>('/healthcenter/speechcraft/querySpeechcraftByID', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 分页查询话术应用列表 GET /healthcenter/speechcraft/querySpeechcraftClientApps */
export async function querySpeechcraftClientAppsUsingGet(
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.querySpeechcraftClientAppsUsingGETParams,
  options?: { [key: string]: unknown }
) {
  return request<API.R>(
    '/healthcenter/speechcraft/querySpeechcraftClientApps',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 删除话术 GET /healthcenter/speechcraft/removeSpeechcraft */
export async function removeSpeechcraftUsingGet(
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.removeSpeechcraftUsingGETParams,
  options?: { [key: string]: unknown }
) {
  return request<API.R>('/healthcenter/speechcraft/removeSpeechcraft', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 保存或者更新个人话术 POST /healthcenter/speechcraft/saveOrUpdatePersonalSpeechCraft */
export async function saveOrUpdatePersonalSpeechCraftUsingPost(
  body: API.SavePersonSpeechcraftDto,
  options?: { [key: string]: unknown }
) {
  return request<API.R>(
    '/healthcenter/speechcraft/saveOrUpdatePersonalSpeechCraft',
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

/** 保存或者更新话术 POST /healthcenter/speechcraft/saveOrUpdateSpeechcraft */
export async function saveOrUpdateSpeechcraftUsingPost(
  body: API.SaveSpeechcraftDto,
  options?: { [key: string]: unknown }
) {
  return request<API.R>('/healthcenter/speechcraft/saveOrUpdateSpeechcraft', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
