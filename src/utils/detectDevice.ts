export type DeviceType = "Android" | "iOS" | "other";

export function getDeviceType(ua: string = navigator.userAgent): DeviceType {
  if (/android/i.test(ua)) return "Android";
  if (/iPhone|iPad|iPod/i.test(ua)) return "iOS";
  return "other";
}
