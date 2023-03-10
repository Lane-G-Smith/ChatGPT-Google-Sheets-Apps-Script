<h1 align="center">ChatGPT-Google-Sheets-Apps-Scripts</h1>
<table align="center">
  <tr>
    <td align="center" height="108" width="108">
        <img     src="https://seeklogo.com/images/G/google-apps-script-logo-BDEAA5E2DF-seeklogo.com.png"
        width="48"
        height="48"
        />
        <br /><strong>Apps Scripts</strong>
    </td>
    <td align="center" height="108">
      <p align="center">Simple code snippets for integrating OpenAI's GPT language models into your google sheets documents using Apps Scripts.
      </p>
     </td>
   </tr>
 </table>


## ChatGPT-Google-Sheets-Apps-Scripts installation instructions

### Go to OpenAI and set up an account
```sh
https://platform.openai.com/signup
```
## IMPORTANT!! Scripts do not protect secret API keys, do not share GPT enabled documents
### Open a new document in Google Ssheets, click Extensions / Apps Script
### push the + button near top left and choose Script to create new script
### clear page, then copy paste code from desired model js file to Script
### Place your secret OpenAI API key beyween quotation marks at the top of page where it says SECRET_API_KEY_HERE
### each function calls a different AI model and can be called using the KEYWORD immediately following the word "function" in line 4
### Use the new functionality by typing =KEYWORD("your prompt to GPT will go here") and pressing enter
### For GPT-3.5 models fill in the prompt at line 9,10,11 to specify desired functionality
