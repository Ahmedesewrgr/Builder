import { User } from "../models/User.js";
export class UserBuilder {
    user;
    constructor() {
        this.user = new User();
    }
    setName(name) {
        this.user.name = name;
        return this;
    }
    setAge(age) {
        this.user.age = age;
        return this;
    }
    setJob(job) {
        this.user.jop = job;
        return this;
    }
    setHobbies(hobbies) {
        this.user.hobbies = hobbies;
        return this;
    }
    build() {
        return this.user;
    }
}
//# sourceMappingURL=UserBuilder.js.map