export function getUrlHash(): string {
  if (typeof window !== 'undefined') {
    const url = window.location.href;
    const hashIndex = url.indexOf("#");
    
    if (hashIndex === -1) {
      return "";
    } else {
      return url.substring(hashIndex + 1);
    }
  }
  return "";
}
