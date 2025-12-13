class User {
    #username;
    #password;
    #email;
    #loginAttempt;

    constructor(username, password, email) {
        this.username = username;
        this.#password = this.#hashPassword(password);
        this.#email = email;
        this.#loginAttempt = 0;
    }

    #hashPassword(password) {
        return `hashed__${password}`;
    }

    getEmail() {
        return this.#email;
    }

    updatePassword(oldPassword, newPassword) {
        if (this.#password === this.#hashPassword(oldPassword)) {
            this.#password = this.#hashPassword(newPassword);
            console.log("Password updated successfully!");
        } else {
            console.log("Old password is incorrect!");
        }
    }

    login(user, password) {
        if (this.#loginAttempt >= 5) {
            console.log("Your Account Is Blocked")
        }
        if (user === this.username || user === this.#email) {
            if (this.#password === this.#hashPassword(password)) {
                console.log(`Login Success! Welcome ${this.username}`);


            } else {
                this.#loginAttempt++;
console.log("Password Not Match")
                console.log(`Login Failed! Attempt: ${this.#loginAttempt}`);
            }
        }else{
            console.log("User Not Exist")
        }
    }

    logout(){
        this.#loginAttempt = 0;
        console.log( "Logout Success")
    }
}

const user1 = new User("Arjun", "Arjun", "arjun@e.com");

console.log(user1.getEmail());
user1.login("Arjun", "Arjun");
user1.updatePassword("Arjun", "newpass");
user1.login("Arjun", "newpasds");
user1.logout()


