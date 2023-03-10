const SECRET_KEY = "API_key_here";
const MAX_TOKENS = 500;
   
function Davinci3(prompt, model="text-davinci-003", temperature=0.5) {
    let endpoint = "https://api.openai.com/v1/completions";
    let apiKey = SECRET_KEY;
    let payload = {
        model: model,
        prompt: prompt,
        max_tokens: MAX_TOKENS,
        temperature: temperature
    };
     
    let options = {
       method: "post",
       contentType: "application/json",
       payload: JSON.stringify(payload),
       headers: {"Authorization": "Bearer " + apiKey}
    };
     
    let response = UrlFetchApp.fetch(endpoint, options);
    let json = response.getContentText();
    let data = JSON.parse(json);
     
    return data.choices[0].text.trim();
}
