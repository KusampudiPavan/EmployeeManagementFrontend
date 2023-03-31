// function validation(data){
//     let error = {}
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     // const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

//     if(data.firstname ===""){
//         error.firstname="First name should not be empty"
//     }

//     if(data.lastname ===""){
//         error.lastname="Last name should not be empty"
//     }

//     if(data.phonenumber ===""){
//         error.phonenumber="PhoneNumber should not be empty"
//     }

//     if(data.addressline1 ===""){
//         error.addressline1="Address should not be empty"
//     }

//     if(data.state ===""){
//         error.state="State should not be empty"
//     }

//     if(data.city ===""){
//         error.city="City should not be empty"
//     }


//     if(data.email === ""){
//         error.email="Email should not be empty"
//     }
//     else if(!emailPattern.test(data.email)){
//         error.email="Email didn't match"
//     }

//     if(data.password === ""){
//         error.password = "Password should not be empty"
//     }
    
//     // else if(!passwordPattern.test(data.password)){
//     //     error.password="Password didn't match"
//     // }
//     // if(data.confirmpassword==='' || data.password !== data.confirmpassword){
//     //     error.confirmpassword="Passwords not matched"
//     // }else{
//     //     return null
//     // }
    



//     return error;

// }

// export default validation;