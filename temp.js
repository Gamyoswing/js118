 // 使用let優於var
 let ch=60;
 let eng=0;
 let math=60;     
 // || ->or && ->and
 if((ch>=60 || eng>=60) && math>=60){
     console.log("pass!");
 }else{
     console.log("fail~");
 }


 let x = 10;
 console.log(x++);
 // 常數宣告
 const PI = 3.1415926;
 // 型態轉換  Number,String,Boolean
 console.log(10==Number("10"));

 let email="mary@gmail.com";
 console.log(email);
 console.log(email.length);
 console.log(email[email.length-1]);        
 // i++ =>i+=1
 // i++ ++i
 for(let i=0;i<email.length;i++){
     console.log(i,email[i]);
 }

 let z=null;
 console.log(z+10);        
 // for i in range(len(email)):
 //     print(i,email[i])

 console.log(Math.PI);
 
 //0~10之間亂數 
 //0~1浮點數
 //0~10  randint(1,10)
 //1~49
 for(let i=0;i<10;i++)
 {
     let r = Math.floor(Math.random()*49)+1;
     console.log(r);
 }

 while(true){
     let r = getRandomInt(1,49);
     console.log(r);
        if(r==49){
         break;
     }
 }

 //函示宣告
 function getRandomInt(start,end){
     let x = Math.floor(Math.random()*end)+start;
     return x
 }
 









 //計算BMI 
 let height = prompt("請輸入身高(cm):");
 let weight = prompt("請輸入體重(kg):");
 let bmi = weight / (height / 100) ** 2;
 

 let result = "<ul>";
 result += "<li>身高:" + height + "</li>";
 result += "<li>體重:" + weight + "</li>";
 // 使用toFixed約束小數點
 result += "<li>BMI:" + bmi.toFixed(2) + "</li>";
 console.log("BMI:" + bmi);
 result += "</ul>";
 document.write(result);