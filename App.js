var Id = 999;
emp1 = {
    EmployeeID :0,
    uniqueId : function(counter){
    
    this.EmployeeID = counter +1;
    ++Id;
    },
    FullName : "Ghazi Samer",
    imgUrl : URL(`https://www.istockphoto.com/photos/administrator`),
    Department:"Administration",
    Level:"Senior",
    salary : 0,
    getRandomSenior: function(){
        let salary = Math.floor(Math.random()*(2000 - 1500 )+ 1500);
        let taxedSal = salary - (salary*0.075); 
        console.log("salary :" +salary);
        console.log("taxedSalary :" +taxedSal);


    }

}
emp2 = {
    EmployeeID :0,
    uniqueId : function(counter){
    this.EmployeeID = counter +1;
    ++Id;
    },
    FullName : "Lana Ali",
    Department:"Finance",
    Level:"Senior",
    imgUrl : URL(`https://stocksnap.io/search/finance`),
    salary : 0,
    
    getRandomSenior: function(){
        let salary = Math.floor(Math.random()*(2000 - 1500 )+ 1500);
        let taxedSal = salary - (salary*0.075); 
        console.log("salary :" +salary);
        console.log("taxedSalary :" +taxedSal);


    }
}
emp3 = {
    EmployeeID :0,
    uniqueId : function(counter){
    
    this.EmployeeID = counter +1;
    ++Id;
    },
    FullName : "Tamara Ayoub",
    Department:"Marketing",
    Level:"Senior",
    salary : 0,
    imgUrl : URL(`https://thinkerscommunications.com/marketing/`),
    getRandomSenior: function(){
        let salary = Math.floor(Math.random()*(2000 - 1500 )+ 1500);
        let taxedSal = salary - (salary*0.075); 
        console.log("salary :" +salary);
        console.log("taxedSalary :" +taxedSal);


    }
}
emp4 = {
    EmployeeID :0,
    uniqueId : function(counter){
    
    this.EmployeeID = counter +1;
    ++Id;
    },
    FullName : "Safi Walid",
    Department:"Administration",
    Level:"Mid-Senior",
    salary : 0,
    imgUrl : URL(`https://www.shutterstock.com/search/administration`),
    getRandomSenior: function(){
        let salary = Math.floor(Math.random()*(1500 - 1000) + 1500);
        let taxedSal = salary - (salary*0.075); 
        console.log("salary :" +salary);
        console.log("taxedSalary :" +taxedSal);


    }
}
emp5 = {
    EmployeeID :0,
    uniqueId : function(counter){
    
    this.EmployeeID = counter +1;
    ++Id;
    },
    FullName : "Omar Zaid",
    Department:"Development	",
    Level:"Senior",
    salary : 0,
    imgUrl : URL(`https://pixabay.com/images/search/developer/`),
    getRandomSenior: function(){
        let salary = Math.floor(Math.random()*(2000 - 1500 )+ 1500);
        let taxedSal = salary - (salary*0.075); 
        console.log("salary :" +salary);
        console.log("taxedSalary :" +taxedSal);


    }
}
emp6 = {
    EmployeeID :0,
    uniqueId : function(counter){
    
    this.EmployeeID = counter +1;
    ++Id;
    },
    FullName : "Rana Saleh",
    Department:"Development	",
    Level:"	Junior",
    salary : 0,
    imgUrl : URL(`https://www.istockphoto.com/photos/developer`),
    getRandomSenior: function(min,max){
        let salary = Math.floor(Math.random(1000 - 500) + 500);
        let taxedSal = salary - (salary*0.075); 
        console.log("salary :" +salary);
        console.log("taxedSalary :" +taxedSal);


    }
}
emp7 = {
    EmployeeID :0,
    uniqueId : function(counter){
    
    this.EmployeeID = counter +1;
    ++Id;
    },
    FullName : "Hadi Ahmad",
    Department:"Finance	",
    Level:"	Mid-Senior",
    salary : 0,
    imgUrl : URL(`https://www.shutterstock.com/search/finance`),
    getRandomSenior: function(){
        let salary = Math.floor(Math.random()*(2000 - 1500 )+ 1500);
        let taxedSal = salary - (salary*0.075); 
        console.log("salary :" +salary);
        console.log("taxedSalary :" +taxedSal);


    }
}
console.log(emp1.FullName);
console.log(emp1.salary);
console.log(emp2.FullName);
console.log(emp2.salary);
console.log(emp3.FullName);
console.log(emp3.salary);
console.log(emp4.FullName);
console.log(emp4.salary);
console.log(emp5.FullName);
console.log(emp5.salary);
console.log(emp6.FullName);
console.log(emp6.salary);