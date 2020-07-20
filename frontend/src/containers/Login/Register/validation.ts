import isEmail from "validator/lib/isEmail";

interface FormErrors {
  message: string;
}

interface ValidateRegisterArgs {
  (
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
    setErrors: (
      val: FormErrors[] | ((val: FormErrors[]) => FormErrors[])
    ) => void
  ): number;
}

const validateRegisterInput: ValidateRegisterArgs = (
  username,
  email,
  password,
  confirmPassword,
  setFormErrors
) => {
  let errorCount = 0;

  setFormErrors((prevState) => []);

  if (username.length < 2) {
    errorCount++;
    setFormErrors((prevErrors) => [
      ...prevErrors,
      { message: "Error:\nUsername must have at least 2 characters." },
    ]);
  }

  if (!username.match(/^[a-zA-Z]+$/)) {
    errorCount++;
    setFormErrors((prevErrors) => [
      ...prevErrors,
      { message: "Error:\nUsername cannot contain spaces, numbers or special characters." },
    ]);
  }

  if (!isEmail(email)) {
    errorCount++;
    setFormErrors((prevErrors) => [
      ...prevErrors,
      { message: "Error:\nPlease enter a valid email address." },
    ]);
  }

  if (password.trim().length < 6 || confirmPassword.trim().length < 6) {
    errorCount++;
    setFormErrors((prevErrors) => [
      ...prevErrors,
      { message: "Error:\nPasswords must be at least 6 characters long." },
    ]);
  }

  if (password !== confirmPassword) {
    errorCount++;
    setFormErrors((prevErrors) => [
      ...prevErrors,
      { message: "Error:\nPasswords must match." },
    ]);
  }

  if (
    !password.match(
      /^(?=.*[0-9])(?=.*[~`¬{}[\]/\\.,;:=+()_"'!@#\-$%£^&*?])[a-zA-Z0-9~`¬{}[\]/\\.,;:=+()_"'!@#\-$%£^&*?]{6,}$/gm
    ) ||
    !confirmPassword.match(
      /^(?=.*[0-9])(?=.*[~`¬{}[\]/\\.,;:=+()_"'!@#\-$%£^&*?])[a-zA-Z0-9~`¬{}[\]/\\.,;:=+()_"'!@#\-$%£^&*?]{6,}$/gm
    )
  ) {
    errorCount++;
    setFormErrors((prevErrors) => [
      ...prevErrors,
      {
        message:
          "Error:\nPasswords must be have 6 characters or more and include at least a lowercase, an uppercase character, a number and a special character.",
      },
    ]);
  }

  return errorCount;
};

export default validateRegisterInput;
