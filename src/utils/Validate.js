
export const validateEmail =(email)=>{
const result = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
return result ? null : "Email or Phone number is not valid";
}

export const validatePassword =(Password)=>{
    const result = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g.test(Password);
    return result ? null : "Password is not valid";
    }
    