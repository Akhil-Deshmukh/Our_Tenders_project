export const validateForm = (userDetails) => {
    let valid = true;
    let validateErrors = {
      name: "",
      mobile: "",
      email: "",
      city: "",
      gender: "",
      password: "",
      address: "",
    };
  
    const { name, mobile, address, city, gender, password, email } = userDetails;
  
    // Name validation
    if (name === "") {
      validateErrors.name = "*Please enter name";
      valid = false;
    } else if (!/^[A-Za-z ]+$/.test(name)) {
      validateErrors.name =
        "*Please enter a valid name (no special symbols or digits allowed)";
      valid = false;
    }
  
    // Email validation
    if (email === "") {
      validateErrors.email = "*Please enter email";
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      validateErrors.email = "*Please enter a valid email address";
      valid = false;
    }
  
    // Mobile validation
    if (mobile === "") {
      validateErrors.mobile = "*Please enter mobile number";
      valid = false;
    } else if (isNaN(mobile)) {
      validateErrors.mobile = "*Please enter a valid number (only digits allowed)";
      valid = false;
    } else if (!/^[6-9]{1}[0-9]{9}$/.test(mobile)) {
      validateErrors.mobile = "*Please enter a valid mobile number";
      valid = false;
    }
    
  
    // City validation
    if (city === "0") {
      validateErrors.city = "*Please select city";
      valid = false;
    }
  
    // Gender validation
    if (!gender) {
      validateErrors.gender = "*Please select gender";
      valid = false;
    }
  
    // Address validation
    if (address === "") {
      validateErrors.address = "*Please enter address";
      valid = false;
    }
  
    // Password validation
    if (password === "") {
      validateErrors.password = "*Please enter password";
      valid = false;
    } else if (password.length < 8) {
      validateErrors.password = "*Password must be at least 8 characters long";
      valid = false;
    } else if (!/[A-Z]/.test(password)) {
      validateErrors.password =
        "*Password must contain at least one uppercase letter";
      valid = false;
    } else if (!/[a-z]/.test(password)) {
      validateErrors.password =
        "*Password must contain at least one lowercase letter";
      valid = false;
    } else if (!/\d/.test(password)) {
      validateErrors.password = "*Password must contain at least one number";
      valid = false;
    }
  
    return { valid, validateErrors };
  };