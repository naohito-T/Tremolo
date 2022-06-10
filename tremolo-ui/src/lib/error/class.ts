export class NullPointer extends Error {
  constructor(selector: string) {
    super(`Null Pointer ${selector}`);
  }
}
