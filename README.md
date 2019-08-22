# GASversionControl
A script that saves a Sheets workbook as an .xlsx file in Drive. The is a great little script to set on a regular trigger (ie, Daily/Weekly/Monthly) to automatically save a copy of a sheets workbook in Drive.

This script downloads a copy of the current workbook and saves it in your main Drive folder.

---
### Installation

In order to use the script, you need to add one function to your Sheets workbook.   To begin, click on Script Editor from the Tools tab.

![Script Editor Menu Screenshot](screenshots/scriptEditor.png?raw=true "Script Editor")

This will open up the Google IDE where you will delete the sample JS data in the Code.gs tab...

![Sample JS Data Screenshot](screenshots/sampleJS.png?raw=true "Sample JS function")

...and replace it with the code from GASversionControl Code.js.  Be sure to save!

Once you have saved the file, you are ready to use GASversionControl!

---
### Using the script for the first time

In order to use this script for the first time, you will need to authorize the script to access the data.  When you open the Sidebar for the first time, you may see an Authorization prompt like this. 

![Authorization Screenshot](screenshots/Authorization.png?raw=true "Authorization")

Because this is a script that you are installing yourself (instead of buying an officially verified third-party script) you will need to acknowledge this fact by clicking on "Advanced"...

![Not Verified Screenshot](screenshots/notVerified.png?raw=true "Not Verified")

...then scroll down to the bottom and click on "Go to Untitled project (unsafe)".

![Unsafe Screenshot](screenshots/Unsafe.png?raw=true "Unsafe")

This will bring up another screen asking you to verify that you are allowing the script to access your Drive (for the attachments), Sheets (for the merge data) and Gmail (for sending the emails).  There is no third party info used in the script, but it does warn you that the script could include it (if you modified the script to do so).  To proceed, you must click the "Allow" button.

![Allow Screenshot](screenshots/Allow.png?raw=true "Allow")

Once you have finished that, you're ready to go!

---
### Instructions

(under construction)
