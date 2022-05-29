(() => {
  // Aplicando el principio de responsabilidad única
  // Aplicar la composición frente a la herencia

  type Gender = "M" | "F";

  interface PersonProps {
    birthdate: Date;
    gender: Gender;
    name: string;
  }

  class Person {
    public birthdate: Date;
    public gender: Gender;
    public name: string;

    constructor({ name, gender, birthdate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  interface UserProps {
    email: string;
    role: string;
  }

  class User {
    public email: string;
    public role: string;
    private lastAccess: Date;

    constructor({ email, role }: UserProps) {
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface SettingsProps {
    lastOpenFolder: string;
    workingDirectory: string;
  }

  class Settings {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({ workingDirectory, lastOpenFolder }: SettingsProps) {
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  interface UserSettingsProps {
    user: UserProps;
    person: PersonProps;
    settings: SettingsProps;
  }

  class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({
      person: personProps,
      user: userProps,
      settings: settingsProps,
    }: UserSettingsProps) {
      this.person = new Person(personProps);
      this.user = new User(userProps);
      this.settings = new Settings(settingsProps);
    }
  }

  const userSettings = new UserSettings({
    user: {
      email: "ejemplo@gmail.com",
      role: "ADMIN",
    },
    person: {
      name: "Ejemplo",
      gender: "M",
      birthdate: new Date("2000-12-01"),
    },
    settings: {
      lastOpenFolder: "cache",
      workingDirectory: "usr/settings",
    },
  });

  console.log({ userSettings });
})();
