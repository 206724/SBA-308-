// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];
  
  function getLearnerData(course, ag, submissions) {
  }
  
  LearnerSubmissions.filter(function (item) {
    // console.log(item);
  });

  const search = LearnerSubmissions.filter(function (item) {
    return item.learner_id===125 ;
  });
  console.log(search)



  
//collect learner id number from learsummtion
let learner_summsion = (LearnerSubmissions) => { 
    let output = []; 
    for (let item of LearnerSubmissions) { 
        output.push(item.learner_id); 
    } 
    return output; 
}; 

let result = learner_summsion(LearnerSubmissions); 
console.log(result);


// this function helps to delet dupliate
function removeDuplicates(result) {
    return result.filter((item,
        index) => result.indexOf(item) === index);
}
let result1=(removeDuplicates(result));
console.log(result1);

function passToFunction(){
    let arrayToPass =result1;
    unmodifiableFunction(...arrayToPass);
}
function unmodifiableFunction(a, b) {
    console.log(`learner_id: ${a}
learner_id: ${b}`)

}
passToFunction()
// mismacthing course ID
const course_id_courseinf=CourseInfo.id
const course_id_assgroup =AssignmentGroup.course_id
try{
if(course_id_courseinf !== course_id_assgroup){
  }
  
}
catch(error){
  console.log("error--Please insert the correct cours_id")
}


  
//handling potential error , if points-possible
const points_possible_err= AssignmentGroup.assignments.points_possible

try{
  if (points_possible_err !==0)
    {
      points_possible_err
    }
    else 
    {
      throw" error- Points_Possible cannot be zero"
    }
  }
 catch(error){
  console.log("please Points_Possible cannot be zero")

 }   
// What if a value that you are expecting to be a number is instead a string? 
  
      try {
        if (typeof points_possible_err !=='string'){
        }
      } catch (error) {
         console.log("the point_possible cannot be string")
      }
    
  //submission due date 


  const submission_date = LearnerSubmissions[0].submission_date
   console.log(submission_date)
    const due_at_date = AssignmentGroup.assignments[1].due_at
   console.log(due_at_date)
  if (submission_date> due_at_date){
      const within_due_date= [LearnerSubmissions].submission.score;
      console.log(within_due_date)
    }    
 else{
     const after_due_date = ([LearnerSubmissions.submission].score)-([LearnerSubmissions.submission].score*.1)
     console.log(after_due_date)
 }

//calcualte score by learner_id_125

const learner_id_125=(LearnerSubmissions.filter(
  (element) => element.learner_id === 125))
  







 
 
 
 
 
 

  
  // const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
  // console.log(result);
  


























// let number;
// let Date_string ;


// let CourseInfo= {"id":number,"name": String };
// let AssignmentInfo = {"id":number,"name": String,"due_at" : Date_string,"points_possible": number}
// let AssignmentGroup={"id": number,"name": String,"course_id" : number,"group_weight" : number,"assignment" : [AssignmentInfo]}
// let LearnerSubmissions ={"learner_id":number,assignment_id: number,"submission":{"submitted_at": Date_string,"scrore":number}}

// let learner_id_ =getLearnerId(LearnerSubmissions);
// let weighted_avg= getAverage(AssignmentGroup);
// let assignmnet_ID=getAssID(LearnerSubmissions);

// function getLearnerData(course, AssignmentGroup, submissions) {
//   // here, we would process this data to achieve the desired result.
  
// getLearnerId(LearnerSubmissions)
// {
// let course_id =102;
// return (course_id);   
// }

// getAverage(AssignmentGroup)
// {
//     let score1;
//     let score2;
//     let total_scrore=score1+score2;//47+150
//     let total_points_possible=points_possible1+points_possible2;//50+150     let weighted_avg =total_scrore/total_points_possible;
//     return weighted_avg;

// }

// getAssID(LearnerSubmissions)
// {
//  let assignment_id ;
//  return assignment_id;
// }

  
//  }



// let course_id =100;


// if(course_id !==102 || 103 || 104)
    
//     try{
//     {  
   
//     throw " error - please insert valid course_id";
//     }
// }
// catch(error){
//     console.log("please insert the correct value")
// }

// try{
// if (points_possible<0) throw " Please insert the correct number";{

// throw " error - please insert valid course_id";
// }
// }
// catch(error){
// console.log("please insert the correct value")
// }

// let submitted_at;
// let due_at;
// let learner_total;
// if ( submitted_at > due_at){

//     learner_total = learner_total;
// }
//  else
//      learner_total =learner_total - learner_total*0.15; 






 
 
//   const result = [
//     {
//       id: 125,
//       avg: 0.985, // (47 + 150) / (50 + 150)
//       1: 0.94, // 47 / 50
//       2: 1.0 // 150 / 150
//     },
//     {
//       id: 132,
//       avg: 0.82, // (39 + 125) / (50 + 150)
//       1: 0.78, // 39 / 50
//       2: 0.833 // late: (140 - 15) / 150
//     }
//   ];

//   return result;
// }

// const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

// console.log(result);














































// // const str= "hello world";
// // for (let i =0;i<str.length;i++){
 
// // console.log(str[i])
// // }

// const str = "henllo world";
// for (const i in str){
//     console.log(str[i])
// }


// const student = {
//     name: "Monica",
//     class: 7,
//     age: 12,
// //   };
  
// //   for (let key in student) {
// //     console.log(`${key} *** ${student[key]}`);
// //   }
// let sum = 0;

// for (let i = 0; i < 5; i++) {

//   if (i % 2 === 0) continue;

//   sum += i;

// }

// const names = ["John", "Abagail", "Jerome", "Cynthia"];
// const greetings = [];

// for (let i = 0; i < names.length; i++) {
// 	greetings[i] = "Hello, " + names[i] + "!";
// 	console.log(greetings[i]);
// }
// objArray = [ { foo: 1, bar: 2}, { foo: 3, bar: 4}, { foo: 5, bar: 6} ];
// function getFields(input, field) {
//     var output = [];
//     for (var i=0; i < input.length ; ++i)
//         output.push(input[i][field]);
//     return output;
// }

// var result = getFields(objArray, "foo"); // returns [ 1, 3, 5 ]
// console.log(result)


// let learnerSubmission =[{"learner_id" : 4,"assignment_id": number,"submission":{ "submitted_at": Date_string,"score": number}}]

// learnerSubmission.forEach((row) => {
// 	row.forEach((object) => {
// 	  console.log(object.learner_id)

// 	});
// });