export enum learningWay {
    zoom = 1, frontal = 2
}


export class Course{
    courseCode?:number;
    courseName?:string;
    categoryId?:number;
    severalLessons?:number;
    startDate?:Date;
    sillybus?:string[];
    throughLearning?:learningWay;
    lecturerId?:number;
    imgURL?:string;


    constructor(courseCode:number,courseName:string,categoryId:number,
        severalLessons:number,startDate:Date,sillybus:string[]=[],
        throughLearning:learningWay,lecturerId:number,imgURL:string ){
            this.courseCode=courseCode;
            this.courseName=courseName;
            this.categoryId=categoryId;
            this.severalLessons=severalLessons;
            this.startDate=startDate;
            this.sillybus=sillybus;
            this.throughLearning=throughLearning;
            this.lecturerId=lecturerId;
            this.imgURL=imgURL;
        }
}