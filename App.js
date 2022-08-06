

const main = document.getElementsByTagName('body');



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

}
Employees.prototype.render = function(){
    
    const imgEl = document.createElement('img');
    imgEl.src = this.imgUrl;
    imgEl.alt = this.fullName;
    main[0].appendChild(imgEl);
    
    const divEl1 = document.createElement('div');
    divEl1.textContent =`Name : ${this.fullName}`;
    const divEl2 = document.createElement('div');
    divEl2.textContent =`Department : ${this.Department}`;
    const divEl3 = document.createElement('div');
    // divEl3.textContent =`Salray : ${this.salary}`;
    main[0].appendChild(divEl1);
    main[0].appendChild(divEl2);
    main[0].appendChild(divEl3);

    

}

const emp1 = new Employees(this.uniqId,"Ghazi Samer",'https://raw.githubusercontent.com/LTUC/new-prep-course-std/main/Day10/Task/assets/Ghazi.jpg',"Administration","Senior",this.taxedsal);
const emp2 = new Employees(this.uniqId,"Lana Ali",'https://raw.githubusercontent.com/LTUC/new-prep-course-std/main/Day10/Task/assets/Lana.jpg',"Finance","Senior",this.taxedsal);
const emp3 = new Employees(this.uniqId,"Tamara Ayoub",'https://raw.githubusercontent.com/LTUC/new-prep-course-std/main/Day10/Task/assets/Tamara.jpg',"Marketing","Senior",this.taxedsal);
const emp4 = new Employees(this.uniqId,"Safi Walid",'https://raw.githubusercontent.com/LTUC/new-prep-course-std/main/Day10/Task/assets/Safi.jpg',"Administration","Mid-Senior",this.taxedsal);
const emp5 = new Employees(this.uniqId,"Omar Zaid",'https://raw.githubusercontent.com/LTUC/new-prep-course-std/main/Day10/Task/assets/Omar.jpg',"Development","Senior",this.taxedsal);
const emp6 = new Employees(this.uniqId,"Rana Saleh",'https://raw.githubusercontent.com/LTUC/new-prep-course-std/main/Day10/Task/assets/Rana.jpg',"Development","Junior",this.taxedsal);
const emp7 = new Employees(this.uniqId,"Hadi Ahmad",'https://raw.githubusercontent.com/LTUC/new-prep-course-std/main/Day10/Task/assets/Hadi.jpg',"Finance","Mid-Senior",this.taxedsal);

emp1.render();
emp2.render();
emp3.render();
emp4.render();
emp5.render();
emp6.render();
emp7.render();
