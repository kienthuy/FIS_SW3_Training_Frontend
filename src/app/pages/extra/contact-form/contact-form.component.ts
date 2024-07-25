import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../../core/services/contact.service';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  contactForm!: FormGroup;
  submitSuccess = false; // Biến để hiển thị thông báo thành công
  submitError = false;   // Biến để hiển thị thông báo lỗi
  showConfirmation = false; // Biến để hiển thị modal xác nhận

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  // Khởi tạo form với các validators
  initForm(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      message: ['', Validators.required]
    });
  }

  // Xác nhận gửi form
  confirmSubmit(): void {
    if (this.contactForm.valid) {
      this.showConfirmation = true; // Hiển thị modal xác nhận
    } else {
      console.error('Form is invalid');
    }
  }

  // Gửi form sau khi xác nhận
  onSubmit(): void {
    this.showConfirmation = false;
    if (this.contactForm.valid) {
      const contactData = this.contactForm.value;
      this.contactService.sendContactRequest(contactData).subscribe(response => {
        console.log('Contact request sent successfully:', response);
        this.showToast('success-toast'); // Hiển thị thông báo thành công
        this.contactForm.reset();
      }, error => {
        console.error('Error sending contact request:', error);
        this.showToast('error-toast'); // Hiển thị thông báo lỗi
      });
    }
  }

  // Hủy xác nhận gửi form
  cancelSubmit(): void {
    this.showConfirmation = false; // Ẩn modal xác nhận
  }

  // Xóa form
  onReset(): void {
    this.contactForm.reset();
  }

  // Hiển thị thông báo dạng toast
  showToast(toastType: string): void {
    this.submitSuccess = toastType === 'success-toast';
    this.submitError = toastType === 'error-toast';

    const toastElement = document.querySelector(`.${toastType}`) as HTMLElement;
    if (toastElement) {
      toastElement.classList.add('show');
      setTimeout(() => {
        toastElement.classList.remove('show');
        this.submitSuccess = false;
        this.submitError = false;
      }, 3000);
    }
  }
}
