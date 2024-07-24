/* eslint-disable */
// @ts-ignore

export type auditRecordAdminUsingGETParams = {
  /** 医生姓名 */
  doctorName?: string;
  /** 问诊单ID */
  inquiryOrderID?: string;
  /** 机构CODE */
  orgCode?: string;
  /** 页码 */
  pageIndex?: number;
  /** 页容量 */
  pageSize?: number;
  /** 药师姓名 */
  pharmacistName?: string;
  /** 审方时间止 */
  pharmacistTimeEnd: string;
  /** 审方时间起 */
  pharmacistTimeStart: string;
  /** 审方状态 */
  ruditStatus?: string;
};

export type auditRecordPharmacistUsingGETParams = {
  /** 医生姓名 */
  doctorName?: string;
  /** 问诊单ID */
  inquiryOrderID?: string;
  /** 机构ID */
  orgID?: string;
  /** 页码 */
  pageIndex?: number;
  /** 页容量 */
  pageSize?: number;
  /** 患者姓名 */
  patientName?: string;
  /** 药师ID */
  pharmacistID?: string;
  /** 药师姓名 */
  pharmacistName?: string;
  /** 审方时间止 */
  pharmacistTimeEnd: string;
  /** 审方时间起 */
  pharmacistTimeStart: string;
  /** 处方单ID */
  rpID?: string;
  /** 审方状态 */
  ruditStatus?: string;
};

export type checkRpMedicineStockUsingGETParams = {
  /** 处方ID */
  rpID: string;
};

export type DTO16 = {
  /** 药师ID */
  pharmacistID: string;
  /** 药师ID */
  pharmacistName: string;
  /** 处方ID */
  rpID: string;
};

export type DTO17 = {
  /** 类别Code */
  categoryCode?: string;
  /** 类别Name */
  categoryName?: string;
  /** 机构编号 */
  orgCode?: string;
  /** 机构ID */
  orgID?: string;
  /** 药师员工ID */
  orgStaffID?: string;
  /** 药师ID */
  pharmacistID?: string;
  /** 药师姓名 */
  pharmacistName?: string;
  /** 接单状态（0：暂停接单/1：开始接单） */
  receiveStatus?: string;
};

export type DTO8 = {
  /** 机构ID */
  orgID: string;
  /** 其他药师员工ID */
  otherPharmacistStaffID: string;
  pageIndex?: number;
  pageSize?: number;
  /** 药师ID */
  pharmacistID: string;
  /** 拒绝原因 */
  pharmacistRejectReason?: string;
  /** 药师备注 */
  pharmacistRemark?: string;
  /** 拒绝类型 over_stock: 库存不足 */
  rejectType?: string;
  /** 处方ID */
  rpID: string;
  /** 审核状态(4:审方通过/5:审方不通过) */
  ruditStatus: string;
};

export type GetHeartBeatDTO = {
  /** 机构编号 */
  orgCode?: string;
  /** 机构ID */
  orgID?: string;
  /** 药师ID */
  pharmacistID?: string;
};

export type OrderItem = {
  asc?: boolean;
  column?: string;
};

export type PageVO2 = {
  countId?: string;
  current?: number;
  hitCount?: boolean;
  maxLimit?: number;
  optimizeCountSql?: boolean;
  orders?: OrderItem[];
  pages?: number;
  records?: VO4[];
  searchCount?: boolean;
  size?: number;
  total?: number;
};

export type pharmacistRejectReasonUsingGETParams = {
  /** 机构ID */
  orgID: string;
};

export type Pinyin_13 = {
  /** 机构code */
  orgCode?: string;
  /** 机构id */
  orgID?: string;
  /** 机构员工id */
  orgStaffID?: string;
  /** 药师id */
  pharmacistID?: string;
  /** 药师名称 */
  pharmacistName?: string;
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

export type RDTO_ = {
  /** 返回码 */
  code?: string;
  data?: DTO17;
  /** 返回消息 */
  message?: string;
  /** 是否成功 */
  success?: boolean;
};

export type RPageVO2 = {
  /** 返回码 */
  code?: string;
  data?: PageVO2;
  /** 返回消息 */
  message?: string;
  /** 是否成功 */
  success?: boolean;
};

export type rpDetailUsingGETParams = {
  /** 处方ID */
  rpID: string;
};

export type rpInProcessPageUsingGETParams = {
  /** 机构ID */
  orgID: string;
  /** pageIndex */
  pageIndex: number;
  /** pageSize */
  pageSize: number;
  /** 药师ID */
  pharmacistID: string;
  /** 处方ID */
  rpID?: string;
};

export type rpInProcessUsingGETParams = {
  /** 机构ID */
  orgID: string;
  /** 药师ID */
  pharmacistID: string;
  /** 处方ID */
  rpID?: string;
};

export type rpOtherListUsingPOSTParams = {
  /** 机构ID */
  orgID: String;
  /** 药师ID */
  pharmacistID: String;
  /** 处方ID */
  rpID?: String;
};

export type testUsingGET1Params = {
  /** rpID */
  rpID: string;
};

export type VO4 = {
  /** 处方ID */
  keyID?: string;
  /** 机构ID */
  orgCode?: string;
  /** 机构ID */
  orgID?: string;
  /** 患者年龄 */
  patientAge?: number;
  /** 患者姓名 */
  patientName?: string;
  /** 患者性别 */
  patientSex?: number;
  pharmacistDisTime?: string;
  pharmacistID?: string;
  pharmacistName?: string;
  /** 药师接单时间 */
  pharmacistReceiptTime?: string;
};
