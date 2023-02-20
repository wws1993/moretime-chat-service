/*
 * @Description: 静态错误捕捉，如果执行过程有错误，则捕捉并赋值给返回数组的第一个元素
 * @Author: wws1993
 * @Date: 2022-10-25 17:25
 * @LastEditTime: 2022-10-25 17:28
 * @LastEditors: wws1993
 * @FilePath: \webService\src\utils\CommonErrorHandler.ts
 * @Autograph: IE6粉丝头子
 * @HistoryVersion:
 */

async function SilentHandle<T, U = Error>(fn: Function, ...args: Array<unknown>): Promise<[U, null] | [null, T]> {
  let result: [U, null] | [null, T]

  try {
    result = [null, await fn(...args)]
  } catch (e: any) {
    result = [e, null]
  }

  return result
}

export default SilentHandle
