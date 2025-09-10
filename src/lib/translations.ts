import type { Translation } from '$lang/type/index.type';
import english from '$lang/en';
import simplifiedChinese from '$lang/zh-CN';
import traditionalChinese from '$lang/zh-TW';
import japanese from '$lang/ja';

export const translations: { [Name: string]: Translation } = {
	en: english,
	'zh-cn': simplifiedChinese,
	'zh-tw': traditionalChinese,
	ja: japanese
};
