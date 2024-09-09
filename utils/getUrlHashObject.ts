export function getUrlHashObject(hash: string): Record<string, string> {
    const params = hash.split("&");
    const result: Record<string, string> = {};    
    for (const param of params) {
      const [key, value] = param.split("=");
      result[decodeURIComponent(key)] = decodeURIComponent(value);
    }    
    return result;
  }