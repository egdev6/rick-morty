import { test, expect } from '@playwright/test'
import { LOCAL_URL } from '../src/constants'

test.beforeEach(async ({ page }) => {
  await page.goto(LOCAL_URL)
})

test.describe('HomePage render correctly', () => {
  test('Home container rendered', async ({ page }) => {
    const homePageContainer = await page.getByTestId('home-page-container')
    expect(homePageContainer).toBeTruthy()
  })
  test('Header container rendered', async ({ page }) => {
    const headerContainer = await page.getByTestId('header-container')
    expect(headerContainer).toBeTruthy()
  })
  test('Footer container rendered', async ({ page }) => {
    const footerContainer = await page.getByTestId('footer-container')
    expect(footerContainer).toBeTruthy()
  })
})

test.describe('Header render correctly', () => {
  test('Header render logo', async ({ page }) => {
    const logo = await page.getByTestId('header-logo')
    expect(logo).toBeTruthy()
  })
  test('Header render input name', async ({ page }) => {
    const inputName = await page.getByTestId('input-name')
    expect(inputName).toBeTruthy()
  })
  test('Header render clear button', async ({ page }) => {
    const clearButton = await page.getByTestId('clear-button')
    expect(clearButton).toBeTruthy()
  })
})

test.describe('Footer render correctly', () => {
  test('Footer render text', async ({ page }) => {
    const footerText = await page.getByTestId('footer-text')
    expect(footerText).toBeTruthy()
  })
})
