export const isAllowedKey = (event) => {
  const allowedKeys = [8, 9, 37, 39];
  const keyCode = event.keyCode || event.which;
  if (keyCode >= 48 && keyCode <= 57) {
    return true;
  }
  if (allowedKeys.includes(keyCode)) {
    return true;
  }
  return false;
};
