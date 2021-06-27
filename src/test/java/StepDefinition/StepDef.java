package StepDefinition;



import org.junit.Assert;
import TestSDET.QuotableAPI.Base;
import TestSDET.QuotableAPI.ReqResMethod;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class StepDef 
{
	ReqResMethod reqRes=new ReqResMethod();
	
	@Given("^I add the url$")
    public void iAddTheurl(){
        Base.getURL="https://quotable.io/quotes";
        System.out.println("======================"+"URL:"+ Base.getURL);
    }
	
	@And("^I add parameter \"(.*?)\" with \"(.*?)\"$")
    public void iAddParameters(String param, String val){
        reqRes.addParam(param, val);
        System.out.println("======================"+"URL with Parameters:"+ Base.getURL);
    }
	
	@Then("^I execute the API$")
	public void iExecuteAPI(){
		try {
			reqRes.hitGetRequest();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    }
	
	@Then("^I validate \"(.*?)\" with \"(.*?)\"$")
    public void iValidateResponse(String p1, String v1){
        String ptr=reqRes.validateResponse(p1);
        System.out.println("======================"+"Expected Value:"+ v1);
        System.out.println("======================"+"Actual Value:"+ ptr);
        if(!ptr.toLowerCase().equalsIgnoreCase(v1)){
        	Assert.assertEquals(ptr,v1);
        }else {
        	System.out.println("======================Assertion Passed");
        }
        
    }
}
