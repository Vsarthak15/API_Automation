package TestSDET.QuotableAPI;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class ReqResMethod {
	public void hitGetRequest() throws Exception{
		try {
            URL url = new URL(Base.getURL);
            System.out.println("======================REQUEST: "+Base.getURL);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setRequestProperty("Accept", "application/json");
            if (conn.getResponseCode() != 200) {
                throw new RuntimeException("Failed : HTTP Error code : "
                        + conn.getResponseCode());
            }
            InputStreamReader in = new InputStreamReader(conn.getInputStream());
            BufferedReader br = new BufferedReader(in);
            String output;
            while ((output = br.readLine()) != null) {
                System.out.println("======================RESPONSE: "+output);
            }
            Base.actualResponse=output;
            conn.disconnect();
        } catch (Exception e) {
            System.out.println("Error while hitting the request!! Trace-" + e);
        }
	}
	public void addParam(String param, String val) {
	    StringBuilder endpoint = new StringBuilder(Base.getURL);
		if(!Base.getURL.contains("?")) {
			endpoint.append("?"+param+"="+val);
		}else {
			endpoint.append(","+param+"="+val);
		}
		Base.getURL=endpoint.toString();
	}
}
