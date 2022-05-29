(() => {
  type Gender = "M" | "F";

  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthday: Date
    ) {}
  }

  class User extends Person {
    private lastAccess: Date;
    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthday: Date
    ) {
      super(name, gender, birthday);
      this.lastAccess = new Date();
    }

    isCredentialsValid(): boolean {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenedFolder: string,
      public email: string,
      role: string,
      name: string,
      gender: Gender,
      birthday: Date
    ) {
      super(email, role, name, gender, birthday);
    }
  }

  const userSettings = new UserSettings(
    "usr/settings",
    "cache",
    "ejemplo@gamil.com",
    "ADMIN",
    "Ejemplo",
    "F",
    new Date("1990-05-17")
  );
  console.log({
    userSettings,
    hasValidCredentials: userSettings.isCredentialsValid(),
  });
})();
