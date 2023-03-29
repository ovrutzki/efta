export default interface IDay {
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
  attendance: IAttendance[];
  __v: number;
}
 interface IEvent {
    eventName: string;
    link: string;
    _id: string;
  }
  
 interface IAttendance {
    studentName: string;
    status: number;
    _id: string;
  }
  
  