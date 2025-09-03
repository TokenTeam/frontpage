export type DeviceType = "Android" | "iOS" | "HMOS" | "other";

export function getDeviceType(ua: string = navigator.userAgent): DeviceType {
  if (/android/i.test(ua)) return "Android";
  if (/iPhone|iPad|iPod/i.test(ua)) return "iOS";
  if (/OpenHarmony|ArkWeb/i.test(ua)) return "HMOS";
  return "other";
}
