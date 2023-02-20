/*
 * @Description: 统一响应方法
 * @Author: wws1993
 * @Date: 2022-10-25 17:11
 * @LastEditTime: 2022-10-25 17:26
 * @LastEditors: wws1993
 * @FilePath: \webService\src\utils\CommonResponse.ts
 * @Autograph: IE6粉丝头子
 * @HistoryVersion:
 */

import { Response } from 'express'
import codeBusiness from '../constants/code.business'
import Logger from './Logger'

// 默认成功响应
function commonRes(res: Response, data: any, codeKey?: keyof typeof codeBusiness, message?: string) {
  codeKey = codeKey || 'success'
  const { code, msg } = codeBusiness[codeKey]

  return res.status(200).send({ code, data, msg: message || msg })
}

// 错误响应
commonRes.error = function (res: Response, error: Error) {
  Logger.error(error)
  this(res, null, 'error', error.message)
}

// 无权限响应
commonRes.denied = function (res: Response) {
  this(res, null, 'denied')
}

export default commonRes
