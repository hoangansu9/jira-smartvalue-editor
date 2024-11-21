export async function getConfig<T>(key: string): Promise<T | null> {
  if (!chrome?.storage?.sync) {
    return null;
  }
  return new Promise((resolve, reject) => {
    if (key != null) {
      chrome.storage.sync.get(key, function (obj: Record<string, T>) {
        resolve(obj[key]);
      });
    } else {
      reject(null);
    }
  });
}

export const saveConfig = async (key: string, value: string) => {
  if (!chrome.storage?.sync) {
    return;
  }
  try {
    await chrome.storage.sync.set({ [key]: value });
  } catch (error) {
    console.error(error);
  }
};
