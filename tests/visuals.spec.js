import { test, expect } from '@playwright/test'
import { LOCAL_URL } from '../src/constants'

//Disabled test for easy commit
test.describe('Visual tests', () => {
  test.skip('Homepage visual test', async ({ page }) => {
    await page.goto(LOCAL_URL)
    await expect(page).toHaveScreenshot('homepage.png')
  })

  test.skip('Character visual test', async ({ page }) => {
    await page.goto(LOCAL_URL + 'character/1')
    await page.waitForTimeout(2000)
    await expect(page).toHaveScreenshot('character.png')
  })
})
