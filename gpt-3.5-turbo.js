const SECRET_KEY = "";
const MAX_TOKENS = 500;
   
    function TURBO(prompt, model="gpt-3.5-turbo", temperature=0.5) {
     let apiKey = SECRET_KEY;
     let endpoint = "https://api.openai.com/v1/chat/completions";
     let payload = {
       messages:[
        {role: 'system', content: 'This is where you describe what gpt does and how it answers.'},
        {role: 'user', content: 'This is an example question'},
        {role: 'assistant', content: "This is an example answer"},
        {role: 'user', content: `${prompt}`},
            ],
       model: model,
       temperature: temperature,
       max_tokens: MAX_TOKENS,
     };
     let options = {
       method: "post",
       contentType: "application/json",
       payload: JSON.stringify(payload),
       headers: {
         "Authorization": "Bearer " + apiKey
       }
     };
     
     let response = UrlFetchApp.fetch(endpoint, options);
     let json = response.getContentText();
     let data = JSON.parse(json);    
     return data.choices[0].message.content.trim();
   }
