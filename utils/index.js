export const validateInput = (input) => {
  if (!/^\d+$/.test(input.value)) {
    return false;
  }
  return true;
};


export const validateAttempts = (attempts) => {
  if (attempts === 0) {
    window.location.replace('https://policia.es/_es/index.php'); 
    return false;
  }
  return true;
}
