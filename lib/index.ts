export const dtoGetter = function(dto) {
  return function () {
    return dto;
  };
};

export const getUserFbAvatarByFbId = (facebookId: number, type: 'large' | 'normal' | 'small' | 'square' = 'normal'): string => {
  return `https://graph.facebook.com/${facebookId}/picture?type=${type}`;
};

export const getFacebookById = (facebookId: number): string => {
  return `https://facebook.com/${facebookId}`;
};

export const phoneNumberValidatorRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

export const facebookUrlValidator = /(?:https?:\/\/)(?:www\.)?(?:facebook|fb|m\.facebook)\.(?:com|me)\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*([\w\-\.]+)(?:\/)?/;
