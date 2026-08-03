import { Locator, Page } from "@playwright/test";

export class ProductPage {
    readonly page: Page;
    readonly productSortDropdown: Locator;
    readonly inventoryItems: Locator; 
    readonly shoppingCartBadge: Locator; 
    readonly shoppingCartIcon: Locator;
    readonly checkoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productSortDropdown = page.getByTestId('product-sort-container');
        this.inventoryItems = page.getByTestId('inventory-item'); 
        this.shoppingCartIcon = page.getByTestId('shopping-cart-link');
        this.shoppingCartBadge = page.getByTestId('shopping-cart-badge');
        this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
    }

    async gotoProductPage() {
        await this.page.goto('https://www.saucedemo.com/inventory.html');
    }

    async sortProducts(sortOption: string) {
        await this.productSortDropdown.selectOption({ label: sortOption });
    }

    async addProductToCart(productName: string) {
        await this.inventoryItems.filter({ hasText: productName }).getByRole('button', { name: 'Add to cart' }).click();
    }

    async goToCheckout() {
        await this.shoppingCartIcon.click();
        await this.checkoutButton.click();
    }

    async getCartItemCount() {
        return await this.shoppingCartBadge.textContent();
    }

    async getProductPrices() { 
        const priceElements = await this.page.getByTestId('inventory-item-price').all();
        const prices: number[] = [];
        for (const element of priceElements) {
            const text = await element.textContent();
            if (text) {
                prices.push(parseFloat(text.replace('$', '')));
            }
        }
        return prices;
    }
}