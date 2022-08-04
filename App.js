
'use strict';
Employees.all= [];
// let min = 0;
// let max = 0;

function Employees ( employeeID,fullName,imgUrl,Department,level){
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.imgUrl = imgUrl;
    this.Department = Department;
    this.level = level;
    this.uniqId = function(counter){
        this.EmployeeID = counter +1;
    ++Id;
    },
    this.salary = function(){
        let min = 0;
        let max = 0;
        let salary1 = 0;
        let taxedSalary = 0;
        if (this.level == "Senior"){
            min = 1500;
            max = 2000;
            salary1 = Math.floor(Math.random()*(max- min)+ min);
            return salary1;
        } else if (this.level == "Mid-Senior" ){
             min = 1000;
             max = 1500;
             salary1 = Math.floor(Math.random()*(max- min)+ min);
            return salary1;

        }else {
             min = 500;
             max = 1000;
             salary1 = Math.floor(Math.random()*(max- min)+ min);
            return salary1;
        
        }
       
        taxedSalary = salary1 - (salary1*0.075); 
        return taxedSalary;
       
    }

    Employees.all.push(this);

}
Employees.prototype.render = function(){
    document.write("Employee name:",this.fullName);
    document.write("Department:",this.Department);
    document.write("Employee salary",this.salary());


}


let emp1 = new Employees(this.uniqId,"Ghazi Samer",'https://cdnblog.filecloud.com/blog/wp-content/uploads/2018/04/administrator1.jpg',"Administration","Senior");
let emp2 = new Employees(this.uniqId,"Lana Ali",'https://image.shutterstock.com/image-photo/business-concept-two-mans-working-600w-1116352550.jpg',"Finance","Senior");
let emp3 = new Employees(this.uniqId,"Tamara Ayoub",'https://media.istockphoto.com/photos/digital-marketing-concept-online-advertisement-picture-id1284549946?s=612x612',"Marketing","Senior");
let emp4 = new Employees(this.uniqId,"Safi Walid",'https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2020/07/03070917/system-administrator-job-description-and-career-1024x512.jpg',"Administration","Mid-Senior");
let emp5 = new Employees(this.uniqId,"Omar Zaid",'https://media.istockphoto.com/photos/programmer-working-with-program-code-picture-id1075599562',"Development","Senior");
let emp6 = new Employees(this.uniqId,"Rana Saleh",'https://media.istockphoto.com/photos/computer-programmer-working-on-new-software-program-picture-id1212006391?s=612x612',"Development","Junior");
let emp7 = new Employees(this.uniqId,"Hadi Ahmad",'https://image.shutterstock.com/image-photo/woman-accountant-use-calculator-computer-600w-1697077897.jpg',"Finance","Mid-Senior");

emp1.render();
emp2.render();
emp3.render();
emp4.render();
emp5.render();
emp6.render();
emp7.render();

