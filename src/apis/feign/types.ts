/* eslint-disable */
// @ts-ignore

export type ConfirmReceiptVO = {
  /** 药师ID */
  pharmacistID: string;
  /** 药师ID */
  pharmacistName: string;
  /** 处方ID */
  rpID: string;
};

export type qualifiedPharmacistListUsingGETParams = {
  /** rpID */
  rpID: string;
  /** serviceID */
  serviceID: string;
};

export type ReviewRpVO = {
  /** 其他药师员工ID */
  otherPharmacistStaffID: string;
  /** 药师ID */
  pharmacistID: string;
  /** 拒绝原因 */
  pharmacistRejectReason?: string;
  /** 拒绝类型 over_stock: 库存不足 */
  rejectType?: string;
  /** 处方ID */
  rpID: string;
  /** 审核状态(4:审方通过/5:审方不通过) */
  ruditStatus: string;
};

export type VO3 = {
  /** 药师类别CODE（zy:中医药师/xy:西医药师） */
  categoryCode?: string;
  /** 药师类别名称 */
  categoryName?: string;
  /** 药师ID */
  keyID?: string;
  /** 药师所属机构CODE */
  orgCode?: string;
  /** 药师所属机构ID */
  orgID?: string;
  /** 药师所属机构名称 */
  orgName?: string;
  /** 员工ID */
  orgStaffID?: string;
  /** 药师姓名 */
  pharmacistName?: string;
  /** 西药最大数量 */
  xyMax?: number;
  /** 中药最大数量 */
  zyMax?: number;
};
