Se va a crear el proyecto como un prototipo, se debe mantener la trazabilidad de las cosas que se hagan vs la issue que lo indico, para eso esta la carpeta de issues, para ver las issues que es el product backlog del proyecto, se trabaja sobre esas cosas y solo sobre ellas.

Debe ser un htlm con css, no importa mucho la estructura sino que la trazabilidad se mantenga, cada cosa que se cree debe decir a que tarea del product backlog corresponde (las issues)

# Para el agente orquestador

El agente orquestador se encargara de llamar de llamar a sub agentes que implementen una issue y explicar la trazabilidad las tareas de sus cosas, es decir el dice que su parte de codigo que uso corresponde a eso en un archivo escrito-

El agente orquestador no gasta tokens por ningun motivo en el tema de crear codigo solo tiene una lista como mejor le convenga para decir porque issue va ahora para llamar a otro sub agente para que haga la siguiente

# Para el agente que implementa las issues

El implementa solo la issue que le toco y nada mas, hace la trazabilidad del codigo que escribio con lo la issue que desarrollo, todo eso se hace sobre un archivo, si es posible 

El agente debe solo decir si se completo la tarea o no, nada mas de tokens, solo dice LO IMPLEMENTE O NO



El debe escribir la trazabilidad del codigo que genero, del endpoint que genero, de la pagina que genero, de la entrada que genero en el issue donde recibio lo que habia que hacer ahi escribe. mira la siguiente info



📝 2. PROCEDIMIENTO PARA AGREGAR UN SOLO COMENTARIO

La herramienta **no** lee modificaciones de texto directas dentro del archivo original del issue. Detecta archivos adicionales con el sufijo `.comment.md`.

1. Localiza el archivo de la issue en `.issues/open/` (Ejemplo: `42-fix-login-bug.md`).
2. En esa **misma carpeta**, crea un nuevo archivo con el mismo nombre agregando la extensión `.comment.md`:
   - *Ruta ejemplo:* `.issues/open/42-fix-login-bug.comment.md`
3. Escribe tu respuesta dentro de ese archivo utilizando sintaxis estándar de Markdown de manera directa (no requiere bloques YAML ni cabeceras).

---

📚 3. PROCEDIMIENTO PARA AGREGAR MÚLTIPLES COMENTARIOS

Si necesitas registrar varias respuestas independientes en una misma incidencia antes de subirlas a GitHub, utiliza uno de los siguientes métodos:

Método A: Archivos Numerados o con Marca de Tiempo (Recomendado para Agentes)

Crea archivos independientes en la misma carpeta del issue. El script los procesará en orden y los publicará como comentarios separados:

- `.issues/open/42-fix-login-bug.comment.md` *(Primer comentario)*
- `.issues/open/42-fix-login-bug.1.comment.md` *(Segundo comentario)*
- `.issues/open/42-fix-login-bug.2.comment.md` *(Tercer comentario)*



ahi agrgas la info de lo que has hecho entendido con el codigo agregado y todas esas cosas añadiendo que se agrego y todo eso
