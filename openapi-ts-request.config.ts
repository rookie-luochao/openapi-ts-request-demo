import type { GenerateServiceProps } from 'openapi-ts-request'

const schemaPath = 'http://10.0.0.52:7410/v2/api-docs?group=HealthCenter_API'

export default [
  {
    schemaPath: schemaPath,
    serversPath: './src/apis/inquiry-order-medicine',
    allowedTags: ['问诊药品'],
    requestLibPath: '@/request',
    isDisplayTypeLabel: true,
  },
  {
    schemaPath: schemaPath,
    serversPath: './src/apis/inquiry-order-statistics',
    allowedTags: ['问诊订单统计'],
    requestLibPath: '../../request',
  },
  {
    schemaPath: schemaPath,
    serversPath: './src/apis/pharmacist',
    allowedTags: ['pharmacist-controller'],
    requestImportStatement: 'const request = require("@/request")',
    isDisplayTypeLabel: true,
  },
  {
    schemaPath: schemaPath,
    serversPath: './src/apis/speechcraft',
    allowedTags: ['话术'],
    requestLibPath: 'node-fetch',
  },
  {
    schemaPath: schemaPath,
    serversPath: './src/apis/feign',
    allowedTags: ['pharmacist-feign-service'],
    requestLibPath: '@/request',
  },
] as GenerateServiceProps[]