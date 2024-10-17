import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, input, output } from '@angular/core';
import { Product } from '@interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {

  public product = input.required<Product>()

  public onIcrementQuantity = output<number>();

  public incrementQuantity(): void {
    this.onIcrementQuantity.emit(this.product().quantity + 1);
  }

  public loginEffect = effect(() => {
    console.log(this.product().name);
  })
}
