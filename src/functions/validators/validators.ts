//validators

export const required = (value: any) => (value ? undefined : "Required");

export const noNumbers = (value: any) =>
  !/\d/.test(value) ? undefined : "Numbers not allowed in field";

// export const noSpecialChars = (value: any) => {
//   const specCharRegex = /[^a-zA-Z0-9\s]/;

//   return specCharRegex.test(value)
//     ? "Special chararcters not allowed in field"
//     : undefined;
// };

export const noSpecialChars = (value: any) => {
  const specCharRegex = /[^a-zA-Z0-9åäöÅÄÖ\s]/; // Allow å, ä, ö

  return specCharRegex.test(value)
    ? "Special characters not allowed in field"
    : undefined;
};

export const isValidEmail = (value: any) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value) ? undefined : "Enter a valid email address";
};

export const noHtmlTags = (value: any) => {
  const htmlRegex = /<(script|iframe)[^>]*>|<[^>]*>|<|\s*>|<\/\s*>/;

  return htmlRegex.test(value) ? "Html characters not allowed." : undefined;
};

export const composeValidators =
  (...validators: any[]) =>
  (value: any) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );
