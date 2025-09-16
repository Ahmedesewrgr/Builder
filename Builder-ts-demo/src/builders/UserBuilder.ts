import { User } from "../models/User.js";

export class UserBuilder{

    private user: User;
    constructor(){
        this.user=new User();
    }
    setName(name:string):this{
        this.user.name=name;
        return this;
    }

    setAge(age:number):this{
        this.user.age=age;
        return this;
    }
    setJob(job:string):this{
        this.user.jop=job;
        return this;
    }
    setHobbies(hobbies:string[]):this{
        this.user.hobbies=hobbies;
        return this;
    }
    build():User{
        return this.user;
    }
}
