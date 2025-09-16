export class User{
    name?:String;
    age?:number;
    jop?:string;
    hobbies?:string[];
    describe():void{

        console.log(`name ${this.name}, age ${this.age}, job ${this.jop}, hobbies ${this.hobbies}` )
    }
}