export const generateKey = () => {
  const digits = Math.round(Math.random() * 100000);
  const chars = btoa(Math.random().toString()).substring(10, 15);
  return `${digits}-${chars}`.toUpperCase();
};

export default class AuthAPI {
  static async getRecoveryKeys(numKeys: number): Promise<string[]> {
    const recoveryKeys = Array.from({ length: numKeys }).map(generateKey);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(recoveryKeys);
      }, 1000);
    });
  }
}
