
'use strict';

function Employees ( employeeID,fullName,imgUrl,Department,level){
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.imgUrl = imgUrl;
    this.Department = Department;
    this.level = level;
    this.salary = 0;
    this.uniqId = function(counter){
        this.EmployeeID = counter +1;
    ++Id;
    },
    this.taxedsal = function(min,max){
        if (this.level == "Senior"){
           let min = 1500;
           let max = 2000;
        } else if (this.level == "Mid-Senior" ){
            let min = 1000;
            let max = 1500;

        }else {
            let min = 500;
            let max = 1000;
        }
        let salary = Math.floor(Math.random()*(max- min)+ min);
        taxedSalary = salary - (salary*0.075); 
        this.salary = taxedSalary;
       
    }

}
Employees.prototype.render = function(){
    document.write("Employee name:",this.fullName);
    document.write("Department:",this.Department);
    document.write("Employee salary",this.taxedsal);


}


const emp1 = new Employees(this.uniqId,"Ghazi Samer",'https://cdnblog.filecloud.com/blog/wp-content/uploads/2018/04/administrator1.jpg',"Administration","Senior",this.taxedsal);
const emp2 = new Employees(this.uniqId,"Lana Ali",'https://image.shutterstock.com/image-photo/business-concept-two-mans-working-600w-1116352550.jpg',"Finance","Senior",this.taxedsal);
const emp3 = new Employees(this.uniqId,"Tamara Ayoub",'https://media.istockphoto.com/photos/digital-marketing-concept-online-advertisement-picture-id1284549946?s=612x612',"Marketing","Senior",this.taxedsal);
const emp4 = new Employees(this.uniqId,"Safi Walid",'https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2020/07/03070917/system-administrator-job-description-and-career-1024x512.jpg',"Administration","Mid-Senior",this.taxedsal);
const emp5 = new Employees(this.uniqId,"Omar Zaid",'https://media.istockphoto.com/photos/programmer-working-with-program-code-picture-id1075599562',"Development","Senior",this.taxedsal);
const emp6 = new Employees(this.uniqId,"Rana Saleh",'https://media.istockphoto.com/photos/computer-programmer-working-on-new-software-program-picture-id1212006391?s=612x612',"Development","Junior",this.taxedsal);
const emp7 = new Employees(this.uniqId,"Hadi Ahmad",'https://image.shutterstock.com/image-photo/woman-accountant-use-calculator-computer-600w-1697077897.jpg',"Finance","Mid-Senior",this.taxedsal);

emp1.render();
emp2.render();
emp3.render();
emp4.render();
emp5.render();
emp6.render();
emp7.render();

