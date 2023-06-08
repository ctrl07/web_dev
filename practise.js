
class User{
    static count = 0;
    constructor(username, email, password) {
      this.username = username;
      this.email = email;
      this.password = password;
      User.count++
    }
    printNumberOfUsers(){
        console.log("currentnumberofusers =", User.count)
    }
    

}

class Member extends User {
  constructor(username, email, password ) {
      
    super(username, email, password);     // complete the super function only. Do not make any other changes
    this.package = '';    
    this.membershipactivetilldate = new Date(2023, 2, 3)//assume user has joined ur platform on 3rd March
    
  }
  
  purchaseMembership(membershippackagename) {
    
    this.package = membershippackagename; 
  }
  
  renewMembership(){
      //this.package==='MONTHLYPACKAGE'?this.membershipactivetilldate.setMonth(this.membershipactivetilldate.setMonth()+1):this.membershipactivetilldate.setYear(this.membershipactivetilldate.setYear()+1)
  
    if(membershippackagename === 'MONTHLYPACKAGE'){
        this.membershipactivetilldate.setMonth(this.membershipactivetilldate.setMonth()+1);
    }
    else if(membershippackagename === "YEARLYPACKAGE"){
        this.membershipactivetilldate.setYear(this.membershipactivetilldate.setYear()+1);  
    }
    
  }
  

  subscriptionActiveTill() {
    console.log(
      this.username +
        " is subscribed to " +
        this.package +
        " uptill " +
        this.membershipactivetilldate.toDateString()
    );
  }

}

function createNewStudents(username, email, password, membershippackagename){
    const mike = new Member(username, email, password);  
    mike.purchaseMembership(membershippackagename);
    mike.subscriptionActiveTill();

}

async function readInput() {
        let inputString = '';
        var output=[];
        process.stdin.on('data', inputStdin => {
            inputString += inputStdin;
            const inputArr = inputString.split(/(?:\r\n|\r|\n)/g)
            const argumentsArr = inputArr[0].split(',');
            createNewStudents(argumentsArr[0], argumentsArr[1], argumentsArr[2], argumentsArr[3] )
            process.exit();
            
        })
        

}
readInput();