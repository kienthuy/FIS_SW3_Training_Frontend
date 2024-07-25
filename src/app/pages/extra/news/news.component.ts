import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  newsItems: any[] = [
    { 
      title: 'Công Nghệ AI Đang Ngày Càng Lan Rộng Trong Công Nghiệp', 
      content: 'Trí tuệ nhân tạo (AI) đang ngày càng trở thành một phần không thể thiếu trong các lĩnh vực công nghiệp, từ sản xuất đến dịch vụ khách hàng.',
      imageUrl: 'https://example.com/ai.jpg' 
    },
    { 
      title: 'Blockchain và Tiềm Năng Đổi Mới Trong Ngành Ngân Hàng', 
      content: 'Công nghệ blockchain đang tạo ra một cuộc cách mạng trong ngành ngân hàng, mở ra cơ hội đổi mới và tăng cường tính bảo mật trong giao dịch tài chính.',
      imageUrl: 'https://example.com/blockchain.jpg'
    },
    { 
      title: 'Xu Hướng Cloud Computing Trong Doanh Nghiệp Đang Phát Triển Mạnh Mẽ', 
      content: 'Doanh nghiệp đang chuyển đổi đến mô hình cloud computing để tận dụng các ưu điểm về linh hoạt và hiệu suất trong quản lý dữ liệu và ứng dụng.',
      imageUrl: 'https://example.com/cloud.jpg'
    },
    // Add more news items as needed
  ];
  constructor() { }

  ngOnInit(): void {
    // Initialize component logic here
  }
}