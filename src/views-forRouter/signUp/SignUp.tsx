export const SignUp = () => {
  return (
    <>
      <h1>Sign Up</h1>
      <form>
        <label htmlFor="username">
          Username
          <input type="text" id="username" name="username" />
        </label>
        <label htmlFor="lastname">
          Last name
          <input type="text" id="lastname" name="lastname" />
        </label>
        <label htmlFor="email">
          e-mail
          <input type="text" id="email" name="email" />
        </label>
        <label htmlFor="password">
          Password
          <input type="text" id="password" name="password" />
        </label>
        <label htmlFor="repeatPassword">
          Repeat password
          <input type="text" id="repeatPassword" name="repeatPassword" />
        </label>
      </form>
    </>
  );
};
