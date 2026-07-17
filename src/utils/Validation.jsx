// Sign up validation

export const validateSignup=(name,phoneNo,email,password,confirmPassword)=>{
    if(!name || !phoneNo || !email || !password || !confirmPassword){
        return "All fields are required";
    }
    if(phoneNo.length!==10) return"Phone  Number must be 10 digits";
    const emailPattern=/\S+@\S+\.\S+/;
    if(!emailPattern.test(email)) return "Invalid email format";
    if(password.length<=6) return "Password must be at least 6 characters";
    if(password!==confirmPassword) return "Password do not match";

    return null; // no errer
}

// login validation
 export const validationLogin=(email,password)=>{
    if(!email|| !password) return "All fields are required"
    return null; // no error
 }