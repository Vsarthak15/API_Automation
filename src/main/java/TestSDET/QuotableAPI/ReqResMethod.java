package TestSDET.QuotableAPI;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Iterator;
import java.util.Map;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

public class ReqResMethod {
	String ptr=null;
	
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
            Base.actualResponse.setLength(0);
            while ((output = br.readLine()) != null) {
                Base.actualResponse.append(output);
            	System.out.println("======================RESPONSE: "+output);
            }
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
	public String validateResponse(String tag) {
			try {
				String ptr= processJSON(Base.actualResponse+"",tag);
				return ptr;
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			return ptr; 

	}

	public String processJSON(String json, String tag) throws JsonMappingException, JsonProcessingException  {
        ObjectMapper mapper = new ObjectMapper();     
        JsonNode node = mapper.readTree(json);        
        String val=processNode(node, tag);        
//        val = val.replaceAll("^\"|\"$", "");        
        return val; 
    }
 
	public String processNode(JsonNode node, String tag) { 
		if(node.isArray()) {         
		// if the node is a list of items,        
		//  go through all the items and process them individually        
			for (final JsonNode objInArray : node)
			{             
				// process the item in the array        
				processNode(objInArray, tag);        
			}
		}else if(node.isContainerNode()) {        
			// if the node is an object,        
			//  go through all fields within the object        
			Iterator<Map.Entry<String, JsonNode>> it = node.fields();        
			while (it.hasNext()) {        
				Map.Entry<String, JsonNode> field = it.next();        
				if(field.getKey().equalsIgnoreCase(tag)){        
					ptr= field.getValue().toString();
					//        System.out.println("key: " + field.getKey());
					//        System.out.println("value: " + field.getValue());        
					return ptr;        
				}
				//process every field in the array        
				processNode(field.getValue(), tag);        
			}     
		} else {          
			// if node is a simple value (like string or int) so let's print it 
			//       System.out.println("value: " + node);     
		} 
		return ptr;         
	}
}
