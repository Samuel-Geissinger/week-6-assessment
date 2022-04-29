
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
});

test('Check to see if play again button is visible', async () => {
    await driver.findElement(By.id('draw')).click();
    await driver.findElement(By.xpath('//button[@class="bot-btn"][1]')).click();
    await driver.findElement(By.xpath('//button[@class="bot-btn"][1]')).click();
    await driver.findElement(By.xpath('//button[@id="duel"]')).click();
    await driver.sleep(5000);
    const playAgain = await driver.findElement(By.xpath('//button[@id="play-again"]'));
    const classOnPlayAgain = await playAgain.getAttribute('class');
    expect(classOnPlayAgain).toBe("");
});

test("Check to see if adding a player to the duo will diplay the correct id", async () => {
    await driver.findElement(By.id("draw")).click();
    await driver.findElement(By.xpath('//button[@class="bot-btn"][1]')).click();
    const getPlayerDuo = await driver.findElement(By.xpath('//div[@id="player-duo"]')).getAttribute('id');
    expect(getPlayerDuo).toBe('player-duo');
});

