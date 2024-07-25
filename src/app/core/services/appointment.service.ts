import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor() { }

  getFakeAppointments() {
    // Giả mạo dữ liệu lịch hẹn
    return [
      { fullName: 'Nguyễn Văn A', email: 'van.a@example.com', phone: '0123456789', appointmentTime: '2024-06-06T10:00', location: 'location1' },
      { fullName: 'Trần Thị B', email: 'thi.b@example.com', phone: '0987654321', appointmentTime: '2024-06-07T11:00', location: 'location2' },
      { fullName: 'Lê Văn C', email: 'van.c@example.com', phone: '0123456789', appointmentTime: '2024-06-08T09:30', location: 'location3' },
    ];
  }
}
