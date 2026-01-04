// /lib/pi.ts

export function getPi() {
  if (typeof window === "undefined") return null;
  return (window as any).Pi || null;
}

export function initPi() {
  const Pi = getPi();
  if (!Pi) return null;

  Pi.init({
    version: "2.0",
    sandbox: false, // set to true if testing
  });

  return Pi;
}
