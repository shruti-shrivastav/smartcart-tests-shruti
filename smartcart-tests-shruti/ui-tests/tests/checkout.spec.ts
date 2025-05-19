import { test, expect } from '@playwright/test';
test('guest checkout flow', async ({ page }) => {
  await page.goto('http://localhost:8080');
  await page.click('[data-test="add-to-cart"]');
  await page.click('[data-test="cart"]');
  await page.click('text=Checkout');
  await expect(page.getByText('Order confirmation')).toBeVisible();
});
