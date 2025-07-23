sequenceDiagram
    participant browser
    participant server

    Note right of browser: User fills in form and clicks Save button
    Note right of browser: JavaScript prevents default form submission
    Note right of browser: JavaScript immediately updates the page (note appears instantly)
    
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    Note right of server: Server processes JSON data and adds new note
    server-->>browser: 201 Created (JSON response, no redirect)
    deactivate server

    Note right of browser: JavaScript confirms server success, note remains visible

