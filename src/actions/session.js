export const authenticating = (phoneNumber) => {
  return {
    type: 'AUTHENTICATING',
    phoneNumber,
  };
};