/**
 * @desc check系 Utils
 */

export const checkEnv = (key: string) => {
  const env = process.env[key];
  if (!env) {
    throw new Error(`${key} is empty.`);
  }
  return env;
};
