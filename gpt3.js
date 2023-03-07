/**
 * Function generates text using text-davinci-003 in Google Sheets
 * prompt = The text / question you want GPT-3 to complete / answer
 * model = The OpenAI model to use (text-davinci-003 is the default)
 * temperature = (0 is deterministic/factual,1 is creative/repetitive) (0.4 is the default)
 * return = The generated text / answer
 * Max_Tokens = length/cost of text generation, 1 token is about 4 characters (default is set at 500)
 */

 const SECRET_KEY = "your_secret_key_here";
 const MAX_TOKENS = 500;
 
 
 function GPT3(prompt, model="text-davinci-003", temperature=0.4) {
   var endpoint = "https://api.openai.com/v1/completions";
   var apiKey = SECRET_KEY;
   var payload = {
     model: model,
     prompt: prompt,
     max_tokens: MAX_TOKENS,
     temperature: temperature
   };
   
   var options = {
     method: "post",
     contentType: "application/json",
     payload: JSON.stringify(payload),
     headers: {
       "Authorization": "Bearer " + apiKey
     }
   };
   
   var response = UrlFetchApp.fetch(endpoint, options);
   var json = response.getContentText();
   var data = JSON.parse(json);
   
   return data.choices[0].text.trim();
 }