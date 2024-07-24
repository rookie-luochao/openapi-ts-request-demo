/* eslint-disable */
// @ts-ignore

export type CheckH5InquiryOrderMedicineVo = {
  addTime?: string;
  /** drugCommonName */
  drugCommonName?: string;
  /** 患者patientID */
  patientID?: string;
  phone?: string;
};

export type InquiryOrderMedicine_ = {
  /** 添加时间 */
  addTime?: string;
  /** 添加人 */
  addUser?: string;
  antibiotic?: number;
  approvalNumber?: string;
  barCode?: string;
  /** 分类(西药/中成药/中药饮片/中药配方颗粒/医疗物资) */
  classCode?: string;
  /** 通用名 */
  commonName?: string;
  /** 厂商名称 */
  drugManufacturerName?: string;
  /** 规格 */
  drugSpec?: string;
  drugSpecification?: string;
  /** 剂型 */
  formType?: string;
  /** 购物车ID */
  goodsCartID?: string;
  /** 问诊药品id */
  inquiryItemID?: string;
  /** 问诊id */
  inquiryOrderID?: string;
  /** 库存单位 */
  inventoryUnit?: string;
  /** 删除标识(0:未删除 / 1:已删除) */
  isDelete?: number;
  /** 选购数量 */
  itemCount?: number;
  /** 商品图片 */
  itemImg?: string;
  /** 药品名称 */
  itemName?: string;
  /** 主键 */
  keyID?: string;
  /** 处方类别(RX:处方药/OTC:非处方药) */
  medicineType?: string;
  /** 最小包装单位 */
  minPackageUnit?: string;
  /** 最小包装数量 */
  minPackageValue?: number;
  /** 最小制剂单位 */
  minPreparationUnit?: string;
  /** 最小制剂数量 */
  minPreparationValue?: number;
  /** 更新时间(CURRENT_TIMESTAMP) */
  modifyTime?: string;
  /** 更新人 */
  modifyUser?: string;
  /** 医保编码 */
  nhsaCode?: string;
  nhsaType?: number;
  /** 机构Code([0-9][A-Z],6位为一段) */
  orgCode?: string;
  /** 机构ID */
  orgID?: string;
  /** 机构药品id */
  orgItemID?: string;
  originalParam?: Record<string, unknown>;
  remarkYb?: string;
  /** 零售价 */
  salePrice?: number;
  /** 供应商code */
  supplyCode?: string;
  /** 供应商id */
  supplyID?: string;
  supplyItemGoodsName?: string;
  /** 供应商药品id */
  supplyItemID?: string;
  /** 供应商名称 */
  supplyName?: string;
};

export type InquiryOrderMedicineH5Dto = {
  /** 添加时间 */
  addTime?: string;
  /** 添加人 */
  addUser?: string;
  antibiotic?: number;
  approvalNumber?: string;
  barCode?: string;
  /** 分类(西药/中成药/中药饮片/中药配方颗粒/医疗物资) */
  classCode?: string;
  /** 通用名 */
  commonName?: string;
  /** 厂商名称 */
  drugManufacturerName?: string;
  /** 规格 */
  drugSpec?: string;
  /** 剂型 */
  formType?: string;
  /** 购物车ID */
  goodsCartID?: string;
  /** 问诊药品id */
  inquiryItemID?: string;
  /** 问诊id */
  inquiryOrderID?: string;
  /** 库存单位 */
  inventoryUnit?: string;
  /** 删除标识(0:未删除 / 1:已删除) */
  isDelete?: number;
  /** 选购数量 */
  itemCount?: number;
  /** 商品图片 */
  itemImg?: string;
  /** 药品名称 */
  itemName?: string;
  /** 主键 */
  keyID?: string;
  /** 处方类别(RX:处方药/OTC:非处方药) */
  medicineType?: string;
  /** 最小包装单位 */
  minPackageUnit?: string;
  /** 最小包装数量 */
  minPackageValue?: number;
  /** 最小制剂单位 */
  minPreparationUnit?: string;
  /** 最小制剂数量 */
  minPreparationValue?: number;
  /** 更新时间(CURRENT_TIMESTAMP) */
  modifyTime?: string;
  /** 更新人 */
  modifyUser?: string;
  /** 医保编码 */
  nhsaCode?: string;
  nhsaType?: number;
  /** 机构Code([0-9][A-Z],6位为一段) */
  orgCode?: string;
  /** 机构ID */
  orgID?: string;
  /** 机构药品id */
  orgItemID?: string;
  remarkYb?: string;
  /** 零售价 */
  salePrice?: number;
  /** 供应商code */
  supplyCode?: string;
  /** 供应商id */
  supplyID?: string;
  supplyItemGoodsName?: string;
  /** 供应商药品id */
  supplyItemID?: string;
  /** 供应商名称 */
  supplyName?: string;
};

export type QueryH5InquiryOrderMedicinesVo = {
  inquiryOrderID?: string;
  /** 机构Code */
  orgCode?: string;
  /** 机构ID */
  orgID?: string;
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

export type RListInquiryOrderMedicine_ = {
  /** 返回码 */
  code?: string;
  /** 返回数据 */
  data?: InquiryOrderMedicine_[];
  /** 返回消息 */
  message?: string;
  /** 是否成功 */
  success?: boolean;
};

export type RListInquiryOrderMedicineH5Dto_ = {
  /** 返回码 */
  code?: string;
  /** 返回数据 */
  data?: InquiryOrderMedicineH5Dto[];
  /** 返回消息 */
  message?: string;
  /** 是否成功 */
  success?: boolean;
};

export type SaveH5InquiryOrderMedicinesVo = {
  inquiryOrderID?: string;
  inquiryOrderMedicineList?: InquiryOrderMedicineH5Dto[];
  /** 机构Code */
  orgCode?: string;
  /** 机构ID */
  orgID?: string;
};
