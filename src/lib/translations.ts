import type { Translation } from "#lang/type/index.type.js";
import english from "#lang/en/index.js";
import simplifiedChinese from "#lang/zh-cn/index.js";
import traditionalChinese from "#lang/zh-tw/index.js";
import japanese from "#lang/ja/index.js";

export const translations: { [Name: string]: Translation } = {
  en: english,
  "zh-cn": simplifiedChinese,
  "zh-tw": traditionalChinese,
  ja: japanese,
};
