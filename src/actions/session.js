export const authenticating = phoneNumber => {
  return {
    type: 'AUTHENTICATING',
    phoneNumber,
  };
};

export const authenticated = () => {
  return {
    type: 'AUTHENTICATED',
  };
};