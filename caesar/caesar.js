function caesarC(string, shift) {
  let corrected = '';
  for (let i = 0; i < string.length; i += 1) {
    const charN = string[i].charCodeAt();

    if (charN >= 97 && charN <= 122) {
      corrected += String.fromCharCode(charN + shift);
    }
  }
  return corrected;
}
// A,B;C,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,x,y,z
export default caesarC;
