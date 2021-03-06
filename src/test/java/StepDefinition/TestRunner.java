package StepDefinition;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(  monochrome = true,
                     features = {"Feature"},
                       plugin = {"pretty","html:target/cucumber-reports","json:target/cucumber-reports/cucumber.json"},
                           glue = {"StepDefinition/"})

public class TestRunner
{
	
}
