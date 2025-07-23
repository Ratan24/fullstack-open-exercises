
sequenceDiagram
    participant browser
    participant server

    Note right of browser: User fills in form and clicks Save button
    
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    Note right of server: Server processes form data and adds new note
    server-->>browser: 302 Redirect to /notes
    deactivate server

    Note right of browser: Browser follows redirect automatically
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document (with updated note count)
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: CSS file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: JavaScript file
    deactivate server

    Note right of browser: Browser executes JavaScript code that fetches JSON data

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, { "content": "My new note", "date": "2023-1-2" }, ... ]
    deactivate server

    Note right of browser: Browser renders the updated notes list including the new note
