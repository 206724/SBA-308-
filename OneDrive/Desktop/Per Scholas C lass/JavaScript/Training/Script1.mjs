let number;
let Date_string ;


let CourseInfo= {"id":number,"name": String };
let AssignmentInfo = {"id":number,"name": String,"due_at" : Date_string,"points_possible": number}
let AssignmentGroup={"id": number,"name": String,"course_id" : number,"group_weight" : number,"assignment" : [AssignmentInfo]}
let LearnerSubmissions ={"learner_id":number,assignment_id: number,"submission":{"submitted_at": Date_string,"scrore":number}}

let learner_id_ =getLearnerId(LearnerSubmissions);
let weighted_avg= getAverage(AssignmentGroup);
let assignmnet_ID=getAssID(LearnerSubmissions);

function getLearnerData(course, AssignmentGroup, submissions) {
  // here, we would process this data to achieve the desired result.
  
getLearnerId(LearnerSubmissions)
{
let course_id =102;
return (course_id);   
}

getAverage(AssignmentGroup)
{
    let score1;
    let score2;
    let total_scrore=score1+score2;//47+150
    let total_points_possible=points_possible1+points_possible2;//50+150     let weighted_avg =total_scrore/total_points_possible;
    return weighted_avg;

}

getAssID(LearnerSubmissions)
{
 let assignment_id ;
 return assignment_id;
}

  
 }



let course_id =100;


if(course_id !==102 || 103 || 104)
    
    try{
    {  
   
    throw " error - please insert valid course_id";
    }
}
catch(error){
    console.log("please insert the correct value")
}

try{
if (points_possible<0) throw " Please insert the correct number";{

throw " error - please insert valid course_id";
}
}
catch(error){
console.log("please insert the correct value")
}

let submitted_at;
let due_at;
let learner_total;
if ( submitted_at > due_at){

    learner_total = learner_total;
}
 else
     learner_total =learner_total - learner_total*0.15; 






 
 
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

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);
