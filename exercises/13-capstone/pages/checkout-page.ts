import { Locator, Page } from "@playwright/test";

export class CheckoutPage {
    readonly page: Page;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly postalCodeInput: Locator;
    readonly continueButton: Locator;
    readonly finishButton: Locator;
    readonly checkoutInformationPageTitle: Locator;
    readonly checkoutOverviewPageTitle: Locator;
    readonly checkoutCompletePageTitle: Locator;
    readonly checkoutConfirmationMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstNameInput = page.getByPlaceholder('First Name');
        this.lastNameInput = page.getByPlaceholder('Last Name');
        this.postalCodeInput = page.getByPlaceholder('Zip/Postal Code');
        this.continueButton = page.getByRole('button', { name: 'Continue' });
        this.finishButton = page.getByRole('button', { name: 'Finish' });
        this.checkoutInformationPageTitle = page.getByText('Checkout: Your Information' );
        this.checkoutOverviewPageTitle = page.getByText('Checkout: Overview' );
        this.checkoutCompletePageTitle = page.getByText('Checkout: Complete!' );
        this.checkoutConfirmationMessage = page.getByText('Thank you for your order!' );
    }
    
    async fillCheckoutInformation(firstName: string, lastName: string, postalCode: string) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
    }

    async continueCheckout() {
        await this.continueButton.click();
    }

    async finishCheckout() {
        await this.finishButton.click();
    }

    async isCheckoutInformationPageLoaded() {
        return await this.checkoutInformationPageTitle.isVisible();
    }

    async isCheckoutOverviewPageLoaded() {
        return await this.checkoutOverviewPageTitle.isVisible();
    }

    async isCheckoutCompletePageLoaded() {
        return await this.checkoutCompletePageTitle.isVisible();
    }

    async isCheckoutConfirmationMessageVisible() {
        return await this.checkoutConfirmationMessage.isVisible();
    }
}