import { User } from "../models/User.js";
export declare class UserBuilder {
    private user;
    constructor();
    setName(name: string): this;
    setAge(age: number): this;
    setJob(job: string): this;
    setHobbies(hobbies: string[]): this;
    build(): User;
}
//# sourceMappingURL=UserBuilder.d.ts.map