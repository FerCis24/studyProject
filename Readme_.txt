GESTIONAR VARIAS PÁGINAS EN EL FRONT CON LA LIBRERIA:
https://www.npmjs.com/package/react-router-dom

npm i react-router-dom

ANT DESIGN UI
https://ant.design/
https://ant.design/components/layout

In the Front (React) → 
    npm i antd +[E]
    import { Layout } from "antd";

GIT
→ git add .
→ git commit -m "mi mensaje"
→ git push origin main
    Asegúrate de reemplazar main con el nombre de la rama 
    en la que estás trabajando si es diferente.

→ git status

FORZAR CERRAR PUERTO 
Encuentra y termina el proceso que está utilizando el puerto 3000: Puedes encontrar y terminar el proceso que está utilizando el puerto 3000 utilizando el siguiente comando en la terminal de Windows:
→ 
    netstat -ano | findstr :3000

Esto te dará una lista de procesos que están utilizando el puerto 3000. Luego, puedes terminar el proceso utilizando el comando taskkill con el ID del proceso (PID) que obtuviste del comando anterior:
→ 
    taskkill /PID <PID> /F

Reemplaza <PID> con el ID del proceso que está utilizando el puerto 3000.

Cambia el puerto en tu aplicación: Si no puedes liberar el puerto 3000, puedes cambiar el puerto en tu aplicación a otro puerto disponible. Por ejemplo, puedes cambiar el puerto a 3001 en tu archivo app.js:

CSS class-name 
→ PATRON BEM
    → BLOQ
    → ELEMENT
    → MODIFIER
ejemplo → class-name: header-button-large
→ PATRONES EN LINEA
style={"js"{object}} → object={ property: "string-value" } ó num sin %, px, etc
ejemplo → 
<button style={{
    padding: "5px",
    border-radius: "5px"
}} />
ejemplo → ternario
style={{
    padding: 5,
    backgraund-color: tema === "dark" ? "white" : "black",
}}