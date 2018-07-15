export const dtoGetter = function(dto) {
  return function () {
    return dto;
  };
};

export const getUserFbAvatarByFbId = (facebookId: string): string => {
  return `https://graph.facebook.com/${facebookId}/picture?type=normal`;
};

export const getFacebookById = (facebookId: string): string => {
  return `https://facebook.com/${facebookId}`;
};

export const phoneValidatorRegex = /^(\([0-9]{3}\)\s*|[0-9]{3}\-)[0-9]{3}-[0-9]{4}$/;
