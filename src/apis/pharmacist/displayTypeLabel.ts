/* eslint-disable */
// @ts-ignore
import * as API from './types';

export function displayauditRecordAdminUsingGETParams(
  field: keyof API.auditRecordAdminUsingGETParams
) {
  return {
    doctorName: '医生姓名',
    inquiryOrderID: '问诊单ID',
    orgCode: '机构CODE',
    pageIndex: '页码',
    pageSize: '页容量',
    pharmacistName: '药师姓名',
    pharmacistTimeEnd: '审方时间止',
    pharmacistTimeStart: '审方时间起',
    ruditStatus: '审方状态',
  }[field];
}

export function displayauditRecordPharmacistUsingGETParams(
  field: keyof API.auditRecordPharmacistUsingGETParams
) {
  return {
    doctorName: '医生姓名',
    inquiryOrderID: '问诊单ID',
    orgID: '机构ID',
    pageIndex: '页码',
    pageSize: '页容量',
    patientName: '患者姓名',
    pharmacistID: '药师ID',
    pharmacistName: '药师姓名',
    pharmacistTimeEnd: '审方时间止',
    pharmacistTimeStart: '审方时间起',
    rpID: '处方单ID',
    ruditStatus: '审方状态',
  }[field];
}

export function displaycheckRpMedicineStockUsingGETParams(
  field: keyof API.checkRpMedicineStockUsingGETParams
) {
  return {
    rpID: '处方ID',
  }[field];
}

export function displayDTO16(field: keyof API.DTO16) {
  return {
    pharmacistID: '药师ID',
    pharmacistName: '药师ID',
    rpID: '处方ID',
  }[field];
}

export function displayDTO17(field: keyof API.DTO17) {
  return {
    categoryCode: '类别Code',
    categoryName: '类别Name',
    orgCode: '机构编号',
    orgID: '机构ID',
    orgStaffID: '药师员工ID',
    pharmacistID: '药师ID',
    pharmacistName: '药师姓名',
    receiveStatus: '接单状态（0：暂停接单/1：开始接单）',
  }[field];
}

export function displayDTO8(field: keyof API.DTO8) {
  return {
    orgID: '机构ID',
    otherPharmacistStaffID: '其他药师员工ID',
    pageIndex: 'pageIndex',
    pageSize: 'pageSize',
    pharmacistID: '药师ID',
    pharmacistRejectReason: '拒绝原因',
    pharmacistRemark: '药师备注',
    rejectType: '拒绝类型 over_stock: 库存不足',
    rpID: '处方ID',
    ruditStatus: '审核状态(4:审方通过/5:审方不通过)',
  }[field];
}

export function displayGetHeartBeatDTO(field: keyof API.GetHeartBeatDTO) {
  return {
    orgCode: '机构编号',
    orgID: '机构ID',
    pharmacistID: '药师ID',
  }[field];
}

export function displayOrderItem(field: keyof API.OrderItem) {
  return {
    asc: 'asc',
    column: 'column',
  }[field];
}

export function displayPageVO2(field: keyof API.PageVO2) {
  return {
    countId: 'countId',
    current: 'current',
    hitCount: 'hitCount',
    maxLimit: 'maxLimit',
    optimizeCountSql: 'optimizeCountSql',
    orders: 'orders',
    pages: 'pages',
    records: 'records',
    searchCount: 'searchCount',
    size: 'size',
    total: 'total',
  }[field];
}

export function displaypharmacistRejectReasonUsingGETParams(
  field: keyof API.pharmacistRejectReasonUsingGETParams
) {
  return {
    orgID: '机构ID',
  }[field];
}

export function displayPinyin_13(field: keyof API.Pinyin_13) {
  return {
    orgCode: '机构code',
    orgID: '机构id',
    orgStaffID: '机构员工id',
    pharmacistID: '药师id',
    pharmacistName: '药师名称',
  }[field];
}

export function displayR(field: keyof API.R) {
  return {
    code: '返回码',
    data: '返回数据',
    message: '返回消息',
    success: '是否成功',
  }[field];
}

export function displayRDTO_(field: keyof API.RDTO_) {
  return {
    code: '返回码',
    data: 'data',
    message: '返回消息',
    success: '是否成功',
  }[field];
}

export function displayRPageVO2(field: keyof API.RPageVO2) {
  return {
    code: '返回码',
    data: 'data',
    message: '返回消息',
    success: '是否成功',
  }[field];
}

export function displayrpDetailUsingGETParams(
  field: keyof API.rpDetailUsingGETParams
) {
  return {
    rpID: '处方ID',
  }[field];
}

export function displayrpInProcessPageUsingGETParams(
  field: keyof API.rpInProcessPageUsingGETParams
) {
  return {
    orgID: '机构ID',
    pageIndex: 'pageIndex',
    pageSize: 'pageSize',
    pharmacistID: '药师ID',
    rpID: '处方ID',
  }[field];
}

export function displayrpInProcessUsingGETParams(
  field: keyof API.rpInProcessUsingGETParams
) {
  return {
    orgID: '机构ID',
    pharmacistID: '药师ID',
    rpID: '处方ID',
  }[field];
}

export function displayrpOtherListUsingPOSTParams(
  field: keyof API.rpOtherListUsingPOSTParams
) {
  return {
    orgID: '机构ID',
    pharmacistID: '药师ID',
    rpID: '处方ID',
  }[field];
}

export function displaytestUsingGET1Params(
  field: keyof API.testUsingGET1Params
) {
  return {
    rpID: 'rpID',
  }[field];
}

export function displayVO4(field: keyof API.VO4) {
  return {
    keyID: '处方ID',
    orgCode: '机构ID',
    orgID: '机构ID',
    patientAge: '患者年龄',
    patientName: '患者姓名',
    patientSex: '患者性别',
    pharmacistDisTime: 'pharmacistDisTime',
    pharmacistID: 'pharmacistID',
    pharmacistName: 'pharmacistName',
    pharmacistReceiptTime: '药师接单时间',
  }[field];
}
