// Script is from github.com/scriptHaus
// Use is licensed under GPL v3.0

function versionControl() {
 
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var today = Utilities.formatDate(new Date(), "PST", "EEE, MM/dd/yyyy");
    var folders = DriveApp.getFoldersByName(today);
    var folderSave = folders.hasNext() ? 
        folders.next() : DriveApp.createFolder(today);
  
    var request = {
      method: "GET",
      headers: {
        authorization: "Bearer " + ScriptApp.getOAuthToken(),
        muteHttpExceptions: true
      }};
  
    var url = ss.getUrl()
                .split("/edit")
                .join("/export?format=xlsx");

    var response = UrlFetchApp.fetch(url, request)
                              .getBlob()
                              .setName(today);
  
    folderSave.createFile(response); // save to drive in the new folder
}
