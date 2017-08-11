export const authenticating = (phoneNumber) => {
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

export const updateToken = (token) => {
  return {
    type: 'UPDATE_TOKEN',
    token,
  };
};

export const updateSocket = (socket) => {
  return {
    type: 'UPDATE_SOCKET',
    socket,
  };
};