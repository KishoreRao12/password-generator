function genPW(pwlength,includelowercase,includeuppercase,includenumbers,includesymbols){
    const lowercaseChars="abcdefghjijklmnopqrstuvwxyz";
    const uppercaseChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars="1234567890";
    const symbolchars="!@#$%^&*";
    let allowedChars="";
    let password="";

    allowedChars+=includelowercase ? lowercaseChars: "";
    allowedChars+= includeuppercase ? uppercaseChars: "";
    allowedChars+=includenumbers ? numberChars: "";
    allowedChars+=includesymbols ? symbolchars: "";
     if (pwlength<=0){
        return ` password length must be atleast 1`;
     }    
     if(allowedChars.length===0){
        return `atleast one character needs to be selected`;
     }
     for(i=0;i<=pwlength;i++){
        const randomIndex= Math.floor(Math.random()*allowedChars.length);
        password+=allowedChars[randomIndex];
     }
     return password;
}
const pwlength=12;
const includelowercase= true;
const includeuppercase=true;
const includenumbers=true;
const includesymbols=true; 
const password=genPW(pwlength,
                    includelowercase,
                    includeuppercase,
                    includenumbers,
                    includesymbols);
console.log(`generated password:${password}`);
