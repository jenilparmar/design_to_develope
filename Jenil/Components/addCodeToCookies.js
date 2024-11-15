import Cookies from 'js-cookie';

// Function to add a code to the array in cookies
export const addCodeToCookieArray = (code) => {
  if (code.length !== 6) {
    throw new Error('Code must be a 6-character string');
  }
  
  // Get the current cookie array
  const existingCodes = Cookies.get('Thoughtscodes');
  const codesArray = existingCodes ? JSON.parse(existingCodes) : [];


  if (!codesArray.includes(code)) {
    codesArray.push(code);
  }

  // Update the cookies
  Cookies.set('Thoughtscodes', JSON.stringify(codesArray), { expires: 30 });
};

// Function to get the array of codes from cookies
export const getCodesFromCookie = () => {
  const existingCodes = Cookies.get('Thoughtscodes');
  return existingCodes ? JSON.parse(existingCodes) : [];
};

// Function to remove a code from the cookie array
export const removeCodeFromCookie = (code) => {
  const existingCodes = Cookies.get('Thoughtscodes');
  const codesArray = existingCodes ? JSON.parse(existingCodes) : [];
  
  // Filter out the code to remove
  const updatedCodes = codesArray.filter(item => item !== code);
  
  // Update the cookies
  Cookies.set('codes', JSON.stringify(updatedCodes));
};
