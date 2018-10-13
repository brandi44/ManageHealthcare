package Tests;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.junit.Test;
import static org.junit.Assert.*;

public class LoginTest {
	/**
	 * @param args
	 */

	@Test public void works() {
		String exePath = "C:\\Users\\brand\\Desktop\\SEP\\chromedriver.exe";
		System.setProperty("webdriver.chrome.driver", exePath);

// objects and variables instantiation
		WebDriver driver = new ChromeDriver();
		String appUrl = "https://healthcareltdv.azurewebsites.net/faces/login.xhtml";

// launch the chrome browser and open the application url
		driver.get(appUrl);


		// declare and initialize the variable to store the expected title of the webpage.
				String expectedTitle = "Healthcareltd";

		// fetch the title of the web page and save it into a string variable
				String actualTitle = driver.getTitle();

				
		// compare the expected title of the page with the actual title of the page and print the result
				if (expectedTitle.equals(actualTitle)) {
					System.out.println("Verification Successful - The correct title is displayed on the web page.");
				} else {
					System.out.println("Verification Failed - An incorrect title is displayed on the web page.");
				}

		// enter a valid username in the email textbox
				WebElement username = driver.findElement(By.id("form:username"));
				username.clear();
				
				username.sendKeys("Test");

				username.sendKeys("TestSelenium");

		// enter a valid password in the password textbox
				WebElement password = driver.findElement(By.id("form:password"));
				password.clear();

				password.sendKeys("123");

				password.sendKeys("password123");

		// click on the Sign in button
				WebElement SignInButton = driver.findElement(By.id("form:submit"));
				SignInButton.click();

		// close the web browser
				driver.close();
				System.out.println("Test script executed successfully.");

		// terminate the program
				System.exit(0);
			}

}