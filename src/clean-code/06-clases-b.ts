(() => {
  type Gender = "M" | "F";

  interface PersonProperties {
    name: string;
    gender: Gender;
    brithday: Date;
  }

  interface UserProperties {
    email: string;
    role: string;
    person: PersonProperties;
  }

  interface UserSettingsProperties {
    workingDirectory: string;
    lastOpenedFolder: string;
    user: UserProperties;
  }

  class Person {
    public name: string;
    public gender: Gender;
    public birthday: Date;

    constructor({ name, gender, birthday }: PersonProperties) {
      this.name = name;
      this.gender = gender;
      this.birthday = birthday;
    }
  }

  class User extends Person {
    public email: string;
    public role: string;
    public person: PersonProperties;
    private lastAccess: Date;
    constructor({ email, role, person }: UserProperties) {
      super(person);
      this.person = person;
      this.email = email;
      this.role = role;
      this.lastAccess = new Date();
    }

    isCredentialsValid(): boolean {
      return true;
    }
  }

  class UserSettings extends User {
    public user: UserProperties;
    public workingDirectory: string;
    public lastOpenedFolder: string;
    constructor({
      workingDirectory,
      lastOpenedFolder,
      user,
    }: UserSettingsProperties) {
      super(user);
      this.user = user;
      this.workingDirectory = workingDirectory;
      this.lastOpenedFolder = lastOpenedFolder;
    }
  }

  const userSettingsProperties: UserSettingsProperties = {
    user: {
      person: {
        name: "Ejemplo",
        gender: "M",
        brithday: new Date("2000-12-01"),
      },
      email: "ejemplo@gmail.com",
      role: "ADMIN",
    },
    lastOpenedFolder: "cache",
    workingDirectory: "usr/settings",
  };
  const userSettings = new UserSettings(userSettingsProperties);
  console.log({
    userSettings,
    hasValidCredentials: userSettings.isCredentialsValid(),
  });
})();
