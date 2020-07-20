interface FormErrors {
  message: string;
}

interface ResetPasswordProps {
  (
    password: string,
    confirmPassword: string,
    setErrors: (
      val: FormErrors[] | ((val: FormErrors[]) => FormErrors[])
    ) => void
  ): number;
}

const validatePasswordReset: ResetPasswordProps = (
  password,
  confirmPassword,
  setFormErrors
) => {
  let errorCount = 0;

  setFormErrors((prevState) => []);

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

export default validatePasswordReset;
