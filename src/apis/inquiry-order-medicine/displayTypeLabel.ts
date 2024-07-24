/* eslint-disable */
// @ts-ignore
import * as API from './types';

export function displayCheckH5InquiryOrderMedicineVo(
  field: keyof API.CheckH5InquiryOrderMedicineVo
) {
  return {
    addTime: 'addTime',
    drugCommonName: 'drugCommonName',
    patientID: '患者patientID',
    phone: 'phone',
  }[field];
}

export function displayInquiryOrderMedicine_(
  field: keyof API.InquiryOrderMedicine_
) {
  return {
    addTime: '添加时间',
    addUser: '添加人',
    antibiotic: 'antibiotic',
    approvalNumber: 'approvalNumber',
    barCode: 'barCode',
    classCode: '分类(西药/中成药/中药饮片/中药配方颗粒/医疗物资)',
    commonName: '通用名',
    drugManufacturerName: '厂商名称',
    drugSpec: '规格',
    drugSpecification: 'drugSpecification',
    formType: '剂型',
    goodsCartID: '购物车ID',
    inquiryItemID: '问诊药品id',
    inquiryOrderID: '问诊id',
    inventoryUnit: '库存单位',
    isDelete: '删除标识(0:未删除 / 1:已删除)',
    itemCount: '选购数量',
    itemImg: '商品图片',
    itemName: '药品名称',
    keyID: '主键',
    medicineType: '处方类别(RX:处方药/OTC:非处方药)',
    minPackageUnit: '最小包装单位',
    minPackageValue: '最小包装数量',
    minPreparationUnit: '最小制剂单位',
    minPreparationValue: '最小制剂数量',
    modifyTime: '更新时间(CURRENT_TIMESTAMP)',
    modifyUser: '更新人',
    nhsaCode: '医保编码',
    nhsaType: 'nhsaType',
    orgCode: '机构Code([0-9][A-Z],6位为一段)',
    orgID: '机构ID',
    orgItemID: '机构药品id',
    originalParam: 'originalParam',
    remarkYb: 'remarkYb',
    salePrice: '零售价',
    supplyCode: '供应商code',
    supplyID: '供应商id',
    supplyItemGoodsName: 'supplyItemGoodsName',
    supplyItemID: '供应商药品id',
    supplyName: '供应商名称',
  }[field];
}

export function displayInquiryOrderMedicineH5Dto(
  field: keyof API.InquiryOrderMedicineH5Dto
) {
  return {
    addTime: '添加时间',
    addUser: '添加人',
    antibiotic: 'antibiotic',
    approvalNumber: 'approvalNumber',
    barCode: 'barCode',
    classCode: '分类(西药/中成药/中药饮片/中药配方颗粒/医疗物资)',
    commonName: '通用名',
    drugManufacturerName: '厂商名称',
    drugSpec: '规格',
    formType: '剂型',
    goodsCartID: '购物车ID',
    inquiryItemID: '问诊药品id',
    inquiryOrderID: '问诊id',
    inventoryUnit: '库存单位',
    isDelete: '删除标识(0:未删除 / 1:已删除)',
    itemCount: '选购数量',
    itemImg: '商品图片',
    itemName: '药品名称',
    keyID: '主键',
    medicineType: '处方类别(RX:处方药/OTC:非处方药)',
    minPackageUnit: '最小包装单位',
    minPackageValue: '最小包装数量',
    minPreparationUnit: '最小制剂单位',
    minPreparationValue: '最小制剂数量',
    modifyTime: '更新时间(CURRENT_TIMESTAMP)',
    modifyUser: '更新人',
    nhsaCode: '医保编码',
    nhsaType: 'nhsaType',
    orgCode: '机构Code([0-9][A-Z],6位为一段)',
    orgID: '机构ID',
    orgItemID: '机构药品id',
    remarkYb: 'remarkYb',
    salePrice: '零售价',
    supplyCode: '供应商code',
    supplyID: '供应商id',
    supplyItemGoodsName: 'supplyItemGoodsName',
    supplyItemID: '供应商药品id',
    supplyName: '供应商名称',
  }[field];
}

export function displayQueryH5InquiryOrderMedicinesVo(
  field: keyof API.QueryH5InquiryOrderMedicinesVo
) {
  return {
    inquiryOrderID: 'inquiryOrderID',
    orgCode: '机构Code',
    orgID: '机构ID',
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

export function displayRListInquiryOrderMedicine_(
  field: keyof API.RListInquiryOrderMedicine_
) {
  return {
    code: '返回码',
    data: '返回数据',
    message: '返回消息',
    success: '是否成功',
  }[field];
}

export function displayRListInquiryOrderMedicineH5Dto_(
  field: keyof API.RListInquiryOrderMedicineH5Dto_
) {
  return {
    code: '返回码',
    data: '返回数据',
    message: '返回消息',
    success: '是否成功',
  }[field];
}

export function displaySaveH5InquiryOrderMedicinesVo(
  field: keyof API.SaveH5InquiryOrderMedicinesVo
) {
  return {
    inquiryOrderID: 'inquiryOrderID',
    inquiryOrderMedicineList: 'inquiryOrderMedicineList',
    orgCode: '机构Code',
    orgID: '机构ID',
  }[field];
}
