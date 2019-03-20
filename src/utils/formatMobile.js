export const FormatMobile = (str) => {
  if (!str) return "";
  
  //Remove "-" in phonenumeber
  let phoneNumber = str.replace(/[-\s]/g, "");

  //Replace country code (etc +84) by "0"
  // phoneNumber = phoneNumber.replace(/^\+../g,"0")
  const lng =phoneNumber.length;
  return `${phoneNumber.slice(0, lng-6)}-${phoneNumber.slice(lng-6, lng-3)}-${phoneNumber.slice(lng-3, lng)}`;
}