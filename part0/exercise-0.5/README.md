sequenceDiagram
    participant browser
    participant server

    Note right of browser: User navigates to the SPA page
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: CSS file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: JavaScript file (SPA version)
    deactivate server

    Note right of browser: Browser executes SPA JavaScript code that immediately fetches JSON data

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, { "content": "CSS is fun", "date": "2023-1-2" }, ... ]
    deactivate server

    Note right of browser: SPA JavaScript renders the notes list on the page
