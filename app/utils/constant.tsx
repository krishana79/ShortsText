export const BASEPATH = "/shortstext";
export function getApiUrl(language: number): string {
  return typeof process !== "undefined"
    ? (language === 1
        ? process.env.REMIX_DOMAIN_ENG
        : process.env.REMIX_DOMAIN_HINDI) || ""
    : "";
}

export function getLanguageFromDomain(url: string): number {
  const domain = new URL(url).hostname;
  return domain.endsWith(".com") ? 1 : domain.endsWith(".in") ? 2 : 1;
}

export const isEncodedString = (str) => {
  str = `${str}`;

  try {
    if (decodeURIComponent(str) !== str) return true;
  } catch (e) {}

  if (/^[A-Za-z0-9+/=]+$/.test(str) && str.length % 4 === 0) {
    try {
      if (btoa(atob(str)) === str) return true;
    } catch (e) {}
  }

  const mojibakePattern = /Ã|¤|¢|©|§|¨|«|°|±|²|³|´|µ|¶|·|¸|»|¿/;
  if (mojibakePattern.test(str)) return true;

  return false;
};
