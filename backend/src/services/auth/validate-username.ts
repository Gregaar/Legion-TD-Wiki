import passwordValidator from "password-validator";

export default (userName: string): string[] | boolean => {
  const schema = new passwordValidator();
  schema.is().min(2);
  schema.is().max(16);
  schema.has().not().digits();
  schema.has().not().symbols();
  schema.has().not().spaces();

  return schema.validate(userName, { list: false });
};
