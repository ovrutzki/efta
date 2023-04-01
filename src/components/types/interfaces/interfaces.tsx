export  interface IDay {
    _id: string;
    dayNumber: number;
    date: string;
    events: IEvent[];
    mentorName: string;
    mentorPhone: string;
    address: string;
    hours: string[];
    dailyClassRoom: string;
    googleMeet: string;
    guestLecturer: boolean;
    attendance: IAttendanceForIDay[];
    courseCode:string;
    __v: number;
  }
   interface IEvent {
      eventName: string;
      link: string;
      _id: string;
    }

   interface IAttendanceForIDay {
      studentName: string;
      status: number;
      _id: string;
    }

export  interface IAttendance {
  date:string;
  studentName: string;
  phone:string;
  status: number;
  _id: string;
}