# Tripleten web_project_around

**Around Colombia:** Un **recorrido visual por algunos de los lugares más impresionantes de Colombia.** Este proyecto está diseñado para ser funcional, interactivo y visualmente atractivo, ofreciendo a los usuarios una experiencia dinámica para explorar destinos emblemáticos del país.

**Descripción:**
Este proyecto consiste en una página web que presenta **una galería de lugares** destacados de Colombia, donde los usuarios pueden:

- Explorar una lista inicial de tarjetas con imágenes y descripciones de los lugares.
- Añadir nuevos lugares mediante un formulario interactivo.
- Editar información de perfil en un formulario que sigue el mismo enfoque de validación.
- Ampliar imágenes en un popup para una mejor visualización.
- Interacción dinámica con elementos, como dar "me gusta" y eliminar tarjetas.
- El diseño sigue una metodología modular, utilizando componentes reutilizables y código limpio para facilitar la escalabilidad.

**Funcionalidad:**

1. Gestión de tarjetas:

- Visualización inicial de tarjetas con nombres e imágenes.
- Añadir nuevas tarjetas con título e imagen.
- Ampliación de imágenes en un popup.
- Botón para eliminar tarjetas existentes.
- Dar y quitar "me gusta" en cada tarjeta.

2. Formularios interactivos:

- Validación para asegurar la entrada de datos correcta.
- Bloqueo del botón de enviar hasta que el formulario sea válido.
- Restablecimiento automático de formularios después de ser enviados.

3. Popups dinámicos:

- Formularios y visualización de imágenes se abren en ventanas emergentes.
- Cerrado de popups con clics externos o tecla Escape.

4. Perfil editable:

-Cambiar nombre y descripción del perfil desde un formulario. 5. Estructura accesible:

- Navegación amigable para usuarios con teclado y lectores de pantalla.

**Tecnologías utilizadas:**
**HTML5:**

- Estructura semántica del contenido.
  **CSS3:**
- Diseño adaptativo (responsive).
- Metodología BEM (Block, Element, Modifier) para un código CSS modular y fácil de mantener.
  **JavaScript:**
- Clases y modularización para una mejor organización del código.
- Validación de formularios con lógica personalizada.
  **Webpack:**
- Empaquetado del proyecto con optimización para producción.

**Metodología BEM**
La metodología BEM ha sido aplicada en todo el proyecto para garantizar la claridad y escalabilidad del código. Ejemplo:

_Bloques:_ .profile, .card, .form.
_Elementos:_ .profile**title, .card**image, .form**input.
_Modificadores:_ .button**form_disabled, .card\_\_like-icon_active.

**Enlace GItHub:**
git@github.com:LinaGonzalezR/web_project_around.git

**Autor**
Desarrollado por **Lina González.**
