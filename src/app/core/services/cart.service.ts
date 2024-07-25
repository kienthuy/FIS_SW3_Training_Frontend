import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly CART_KEY = 'cart';

  constructor() {}

  addToCart(item: any): void {
    let cartItems = this.getCartItems();
    const index = this.findItemIndexByProductCode(item.productCode);
    if (index !== -1) {
      // Nếu sản phẩm đã tồn tại trong giỏ hàng, cộng thêm số lượng
      cartItems[index].quantity += item.quantity;
    } else {
      // Nếu sản phẩm chưa tồn tại, thêm sản phẩm mới vào giỏ hàng
      cartItems.push(item);
    }
    localStorage.setItem(this.CART_KEY, JSON.stringify(cartItems));
  }

  getCartItems(): any[] {
    const cartItemsString = localStorage.getItem(this.CART_KEY);
    return cartItemsString ? JSON.parse(cartItemsString) : [];
  }

  clearCart(): void {
    localStorage.removeItem(this.CART_KEY);
  }

  findItemIndexByProductCode(productCode: string): number {
    const cartItems = this.getCartItems();
    return cartItems.findIndex((item: any) => item.productCode === productCode);
  }

  incrementItemQuantity(productCode: string, quantity: number): void {
    const index = this.findItemIndexByProductCode(productCode);
    if (index !== -1) {
      const cartItems = this.getCartItems();
      cartItems[index].quantity += quantity;
      localStorage.setItem(this.CART_KEY, JSON.stringify(cartItems));
    }
  }

  decrementItemQuantity(productCode: string, quantity: number): void {
    const index = this.findItemIndexByProductCode(productCode);
    if (index !== -1) {
      const cartItems = this.getCartItems();
      if (cartItems[index].quantity - quantity > 0) {
        cartItems[index].quantity -= quantity;
      } else {
        cartItems.splice(index, 1); // Xóa sản phẩm khỏi giỏ hàng nếu số lượng bằng hoặc nhỏ hơn 0
      }
      localStorage.setItem(this.CART_KEY, JSON.stringify(cartItems));
    }
  }

  removeItem(productCode: string): void {
    const index = this.findItemIndexByProductCode(productCode);
    if (index !== -1) {
      const cartItems = this.getCartItems();
      cartItems.splice(index, 1);
      localStorage.setItem(this.CART_KEY, JSON.stringify(cartItems));
    }
  }
}
