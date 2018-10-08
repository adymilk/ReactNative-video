import { NativeModules } from 'react-native';
const UMTJ = NativeModules.UMAnalyticsModule;
export const onPageStart = pageName => {
    //用于统计单个自定义页面的起始和onPageEnd同时使用，不可单独使用
    return UMTJ.onPageStart(pageName);
};
export const onPageEnd = pageName => {
    //用于统计单个Activity页面结束时间
    return UMTJ.onPageEnd(pageName);
};
export const onEvent = eventId => {
    //用于统计自定义事件的发生次数

    return UMTJ.onEvent(eventId);
};
export const onEventWithLable = (eventId, label) => {
    //用于统计自定义事件的发生次数 可传参数进去

    return UMTJ.onEventWithLable(eventId, label);
};
