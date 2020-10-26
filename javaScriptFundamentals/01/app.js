
const fitBitData = {
    totalSteps : 303910,
    totalMiles : 211.7, 
    avgCalorie : 5755 ,
    workOutThisWeek : '5 of 7'
};

const student = {
    firstName : 'David',
    lastName  : 'Jones',
    strengths : ['Music','Art'], 
    exams     : {
      midterm : 92,
      final   : 88
    }
};

const average = (student.exams.midterm + student.exams.final)/2;

console.log(average);