import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';
import { MatDrawer } from '@angular/material/sidenav';
import { CartService } from 'src/app/core/services/cart.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

const MOBILE_VIEW = 'screen and (max-width: 768px)';
const TABLET_VIEW = 'screen and (min-width: 769px) and (max-width: 1024px)';
const MONITOR_VIEW = 'screen and (min-width: 1024px)';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent implements OnInit {

  @ViewChild('leftsidenav') leftSidenav!: MatDrawer;
  @ViewChild('rightsidenav') rightSidenav!: MatDrawer;

  private layoutChangesSubscription = Subscription.EMPTY;
  private isMobileScreen = false;
  private isContentWidthFixed = true;
  private isCollapsedWidthFixed = false;

  cartItems: any[] = [];

  get isOver(): boolean {
    return this.isMobileScreen;
  }

  constructor(
    private breakpointObserver: BreakpointObserver,
    private dialog: MatDialog,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.layoutChangesSubscription = this.breakpointObserver
      .observe([MOBILE_VIEW, TABLET_VIEW, MONITOR_VIEW])
      .subscribe((state) => {
        this.isMobileScreen = state.breakpoints[MOBILE_VIEW];
        this.isContentWidthFixed = state.breakpoints[MONITOR_VIEW];
      });
    this.loadCartItems();
  }

  loadCartItems(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  ngOnDestroy() {
    this.layoutChangesSubscription.unsubscribe();
  }

  toggleCollapsed() {
    this.isContentWidthFixed = false;
  }

  onSidenavClosedStart() {
    this.isContentWidthFixed = false;
  }

  onSidenavOpenedChange(isOpened: boolean) {
    this.isCollapsedWidthFixed = !this.isOver;
  }

  closeRightSidebar(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target && target.classList.contains('mat-drawer-backdrop')) {
      this.rightSidenav.close();
      this.leftSidenav.toggle();
    }
  }

  getTotalQuantity(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0); // Tính tổng số lượng sản phẩm trong giỏ hàng
  }
}