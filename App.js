var Id = 999;
emp1 = {
    EmployeeID :0,
    UniqueId : function(counter){
    
    this.EmployeeID = counter +1;
    ++Id;
    },
    FullName : "Ghazi Samer",
    imgUrl :'https://cdnblog.filecloud.com/blog/wp-content/uploads/2018/04/administrator1.jpg',
    Department:"Administration",
    Level:"Senior",
    salary : 0,
    getRandomSal :function(){
        let salary = Math.floor(Math.random()*(2000 - 1500 )+ 1500);
        taxedSalary = salary - (salary*0.075); 
        this.salary = taxedSalary;
       



    }

}
emp2 = {
    EmployeeID :0,
    UniqueId : function(counter){
    this.EmployeeID = counter +1;
    ++Id;
    },
    FullName : "Lana Ali",
    Department:"Finance",
    Level:"Senior",
    imgUrl :'https://image.shutterstock.com/image-photo/business-concept-two-mans-working-600w-1116352550.jpg',
    salary : 0,
    
    getRandomSal :function(){
        let salary = Math.floor(Math.random()*(2000 - 1500 )+ 1500);
        taxedSalary = salary - (salary*0.075); 
        this.salary = taxedSalary;
       
   


    }
}
emp3 = {
    EmployeeID :0,
    UniqueId : function(counter){
    
    this.EmployeeID = counter +1;
    ++Id;
    },
    FullName : "Tamara Ayoub",
    Department:"Marketing",
    Level:"Senior",
    salary : 0,
    imgUrl :'https://media.istockphoto.com/photos/digital-marketing-concept-online-advertisement-picture-id1284549946?s=612x612',
    getRandomSal: function(){
        let salary = Math.floor(Math.random()*(2000 - 1500 )+ 1500);
        taxedSalary  = salary - (salary*0.075); 
        this.salary = taxedSalary;
       

    }
}
emp4 = {
    EmployeeID :0,
    UniqueId : function(counter){
    
    this.EmployeeID = counter +1;
    ++Id;
    },
    FullName : "Safi Walid",
    Department:"Administration",
    Level:"Mid-Senior",
    salary : 0,
    imgUrl :'https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2020/07/03070917/system-administrator-job-description-and-career-1024x512.jpg',
    getRandomSal :function(){
        let salary = Math.floor(Math.random()*(1500 - 1000) + 1500);
        taxedSalary  = salary - (salary*0.075); 
        this.salary = taxedSalary;
       
    


    }
}
emp5 = {
    EmployeeID :0,
    UniqueId : function(counter){
    
    this.EmployeeID = counter +1;
    ++Id;
    },
    FullName : "Omar Zaid",
    Department:"Development	",
    Level:"Senior",
    salary : 0,
    imgUrl :'https://media.istockphoto.com/photos/programmer-working-with-program-code-picture-id1075599562',
    getRandomSal :function(){
        let salary = Math.floor(Math.random()*(2000 - 1500 )+ 1500);
        let taxedSalary  = salary - (salary*0.075); 
        this.salary = taxedSalary;
       


    }
}
emp6 = {
    EmployeeID :0,
    UniqueId : function(counter){
    
    this.EmployeeID = counter +1;
    ++Id;
    },
    FullName : "Rana Saleh",
    Department:"Development	",
    Level:"	Junior",
    salary : 0,
    imgUrl :'https://media.istockphoto.com/photos/computer-programmer-working-on-new-software-program-picture-id1212006391?s=612x612',
    getRandomSal :function(min,max){
        let salary = Math.floor(Math.random(1000 - 500) + 500);
        let taxedSalary  = salary - (salary*0.075); 
        this.salary = taxedSalary;
        


    }
}
emp7 = {
    EmployeeID :0,
    UniqueId : function(counter){
    
    this.EmployeeID = counter +1;
    ++Id;
    },
    FullName : "Hadi Ahmad",
    Department:"Finance	",
    Level:"	Mid-Senior",
    salary : 0,
    imgUrl :'https://image.shutterstock.com/image-photo/woman-accountant-use-calculator-computer-600w-1697077897.jpg',
    getRandomSal :function(){
        let salary = Math.floor(Math.random()*(2000 - 1500 )+ 1500);
        let taxedSalary = salary - (salary*0.075); 
        this.salary = taxedSalary;
        
      

    }
}
emp1.getRandomSal();
emp2.getRandomSal();
emp3.getRandomSal();
emp4.getRandomSal();
emp5.getRandomSal();
emp6.getRandomSal();
emp7.getRandomSal();
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
console.log(emp7.FullName);
console.log(emp7.salary);