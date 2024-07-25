import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss']
})
export class RightSidebarComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  decrementQuantity(item: any): void {
    if (item.quantity > 1) {
      item.quantity--;
      this.cartService.decrementItemQuantity(item.productCode, 1); // Giảm số lượng sản phẩm
    }
  }

  incrementQuantity(item: any): void {
    item.quantity++;
    this.cartService.incrementItemQuantity(item.productCode, 1); // Tăng số lượng sản phẩm
  }

  removeItem(item: any): void {
    this.cartService.removeItem(item.productCode); // Xóa sản phẩm khỏi giỏ hàng
    this.loadCartItems(); // Tải lại danh sách sản phẩm trong giỏ hàng sau khi xóa
  }

  getTotalQuantity(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0); // Tính tổng số lượng sản phẩm trong giỏ hàng
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0); // Tính tổng giá của các sản phẩm trong giỏ hàng
  }

  closeSidebar(): void {
    // Cài đặt để đóng right sidebar tại đây
  }
}
