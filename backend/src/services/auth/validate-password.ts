import passwordValidator from "password-validator";

export default (newPassword: string): string[] | boolean => {
  const schema = new passwordValidator();
  schema.is().min(6);
  schema.has().uppercase();
  schema.has().lowercase();
  schema.has().digits();
  schema.has().symbols();
  schema.has().not().spaces();
  schema.is().not().oneOf(["Passw0rd", "Password123!", "Password1!"]);

  return schema.validate(newPassword, { list: false });
};
