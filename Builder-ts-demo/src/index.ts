import { UserBuilder } from "./builders/UserBuilder.js";

const user =new UserBuilder()
.setName("ahmed")
.setAge(23)
.setJob("full stack engineer")
.setHobbies(["Coding"])
.build();
user.describe();
