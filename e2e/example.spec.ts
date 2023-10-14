import { test, expect } from '@playwright/test'

test.describe('should navigate to the about page', () => {
    test("a", async ({ page }) => {
        // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
        await page.goto('http://localhost:3000/')
    })
})