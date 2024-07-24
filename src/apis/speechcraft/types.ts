/* eslint-disable */
// @ts-ignore

export type OperateSpeechcraftReqVO = {
  enable?: number;
  sort?: number;
  speechcraftID?: string;
};

export type QueryPersonalSpeechCraftPage = {
  orgID?: string;
  orgStaffUserID?: string;
  pageIndex?: number;
  pageSize?: number;
  records?: SavePersonSpeechcraftDto[];
  total?: number;
};

export type queryPersonalSpeechCraftUsingGETParams = {
  /** orgID */
  orgID: string;
  /** orgStaffUserID */
  orgStaffUserID: string;
};

export type querySpeechCraftByClientAppIDUsingGETParams = {
  /** clientAppSerID */
  clientAppSerID: string;
};

export type querySpeechcraftByIDUsingGETParams = {
  /** speechcraftID */
  speechcraftID: string;
};

export type querySpeechcraftClientAppsUsingGETParams = {
  /** orgCode */
  orgCode: string;
  /** pageIndex */
  pageIndex: number;
  /** pageSize */
  pageSize: number;
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

export type removeSpeechcraftUsingGETParams = {
  /** speechcraftID */
  speechcraftID: string;
};

export type SavePersonSpeechcraftDto = {
  /** 是否启用1是 0 否 */
  enable?: number;
  orgCode?: string;
  orgID?: string;
  orgStaffUserID?: string;
  /** 话术详情 */
  saveSpeechcraftDetailDtos?: SaveSpeechcraftDetailDto[];
  sort?: number;
  /** 分类ID */
  speechcraftClassID?: string;
  /** 分类名称 */
  speechcraftClassName?: string;
  /** 分类排序 */
  speechcraftClassSort?: number;
  speechcraftID?: string;
  /** 标题 */
  speechcraftName?: string;
};

export type SaveSpeechcraftClassDto = {
  /** 话术签名和内容 */
  saveSpeechcraftDetailDtos?: SaveSpeechcraftDetailDto[];
  /** 分类排序 */
  sort?: number;
  /** 分类名称 */
  speechcraftClassName?: string;
};

export type SaveSpeechcraftDetailDto = {
  /** 是否启用 （1是，0否） */
  enable?: number;
  /** 话术排序 */
  sort?: number;
  /** 话术内容 */
  speechcraftDetailContent?: string;
  /** 话术签名 */
  speechcraftDetailName?: string;
};

export type SaveSpeechcraftDto = {
  orgCode?: string;
  orgID?: string;
  orgStaffUserID?: string;
  /** 分类 */
  saveSpeechcraftClassDtos?: SaveSpeechcraftClassDto[];
  speechcraftID?: string;
  /** 标题 */
  speechcraftName?: string;
};
