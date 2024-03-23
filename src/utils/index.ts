// 获取cookie
export const getCookie = (name: string) =>
  document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith(`${name}=`))
    ?.split("=")[1];

//  rgbToHex()
export const rebToHex = (r: number, g: number, b: number): string => {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
};

// 检查日期是否正确
export const isDateValid = (): boolean => {
  return !Number.isNaN(new Date().valueOf());
};
