class User{
    constructor(name,age,email){
        this.name=name,
        this.age=age,
        this.email=email,
        this.coins=0,
        this.courses=[]
    }

    login(){
        console.log(`${this.name} has logged in`);
    }
    
    logout(){
        console.log(`${this.name} has logged out`);
    }

    getDetails(){
        console.log(`Name of User :${this.name} \nAge is ${this.age} \nEmail is ${this.email} \nNumber of coins: ${this.coins} \nCourses are : ${this.courses}`);
        return this;
    }
}

class Moderator extends User{
    addCoins(user)
    {
        user.coins++;
    }

    removeCoins(user)
    {
        user.coins--;
    }
}


class Admin extends Moderator{
    addCourses(user,course){
        user.courses.push(course);
    }
    removeCourse(user,course){
        if(user.courses.includes(course))
        {
            user.courses = user.courses.filter((ele)=>{return ele!=course;})
        }
        else
        {
            console.log(`${user.name} does not have ${course} course`);
        }
    }

}


let user1 = new User("Siddhil",21,"S@gmail.com");
user1.getDetails()

let user2 = new User("Kunal",21,"K@gmail.com");
user2.getDetails()

let mod = new Moderator("Modu",30,"Modu@gmail.com")

//Adding coins to the users
mod.addCoins(user1)
mod.addCoins(user1)
mod.addCoins(user2)
mod.addCoins(user2)

user1.getDetails()
user2.getDetails()

//removing coins from the users
mod.removeCoins(user1)
mod.removeCoins(user2)
mod.removeCoins(user2)

user1.getDetails()
user2.getDetails()


adm = new Admin("Admin",40,"Admin@gmail.com")
adm.addCourses(user2,"ML");
adm.addCourses(user2,"Python");
adm.addCourses(user1,"JavaScript");

user1.getDetails()
user2.getDetails()

adm.removeCourse(user2,"ML")
adm.removeCourse(user1,"ML")
adm.removeCourse(user1,"JavaScript")

user1.getDetails()
user2.getDetails()

