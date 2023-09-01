export const checkValidateData = (email, password, formType, name = null) => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    const isNameValid = /^[a-zA-Z ]+$/.test(name);
    if (formType === "signup" && !isNameValid) return "Full Name not valid"
    if (!isEmailValid) return "Email ID not valid"
    if (!isValidPassword) return "Password not valid"
    return null;
}