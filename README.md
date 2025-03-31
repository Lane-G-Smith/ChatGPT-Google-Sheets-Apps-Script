<h1 align="center">ChatGPT-Google-Sheets-Apps-Script</h1>
<table align="center">
  <tr>
    <td align="center" height="108" width="108">
        <img     src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_Apps_Script.svg/512px-Google_Apps_Script.svg.png"
        width="48"
        height="48"
        />
        <br /><strong>Apps Scripts</strong>
    </td>
    <td align="center" height="108">
      <p align="center">Simple code snippets for integrating OpenAI's GPT language models into your Google Sheets documents using Apps Script.
        <p align="center">!!!Davinci3 is now deprecated!!!
      </p>
      </p>
     </td>
   </tr>
 </table>


## ChatGPT-Google-Sheets-Apps-Scripts installation instructions

### Go to OpenAI and set up an account
```sh
https://platform.openai.com/signup
```
## IMPORTANT!! Scripts do not protect secret API keys, do not share GPT-enabled documents
### Open a new document in Google Sheets, click Extensions / Apps Script
### Push the + button near the top left and choose Script to create a new script
### Clear the page, then copy and paste code from the desired model js file to Script
### Place your secret OpenAI API key between quotation marks at the top of the page where it says SECRET_API_KEY_HERE
### Each function calls a different AI model and can be called using the KEYWORD immediately following the word "function" in line 4 (GPT-4, TURBO, Davinci3)
### Use the new functionality by typing =KEYWORD("your prompt to GPT will go here") and pressing enter
### For GPT-3.5 models fill in the prompt at line 9,10,11 to specify desired functionality
