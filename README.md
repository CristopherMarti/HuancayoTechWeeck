# Google Developer Group Landing Page

Este proyecto es una Landing Page moderna y con animaciones construida con **React 19**, **Vite** y **Tailwind CSS**. 
Ha sido diseñada para presentar eventos tecnológicos de la comunidad (como la "Tech Week"), destacando los speakers y la agenda, utilizando colores y estilos inspirados en las directrices de diseño de Google.

## Arquitectura y Tecnologías

- **Framework principal:** React 19 + TypeScript, ofreciendo una experiencia robusta y tipada.
- **Bundler:** Vite 6, asegurando arranques rápidos y construcciones eficientes.
- **Estilos:** Tailwind CSS 4, empleado para crear interfaces limpias, adaptables y con utilidades predefinidas.
- **Animaciones:** `motion/react` (Framer Motion), para animaciones fluidas al hacer scroll, animaciones de aparición en textos, y transiciones dinámicas entre secciones.
- **Iconografía:** Lucide React, una librería de íconos SVG minimalistas.

## Estructura de Componentes

La aplicación está modularizada en la carpeta `/src/components`, facilitando el mantenimiento y la escalabilidad. A continuación, el detalle del código principal:

### `App.tsx`
Actúa como la base del layout principal. Aquí se encuentra:
- Configuración global de los fondos usando `Background`.
- La cabecera principal (`Navbar`).
- El enrutamiento y la renderización en secciones `Hero`, `TechWeek`, `Speakers` y `Footer`.
- Uso de `useScroll` y `useTransform` (Framer Motion) para efectos sutiles ligados a la barra de navegación y al desplazamiento de la página.
- El componente interno `<SectionWrapper>` es el responsable de aplicar los efectos de "fade-in" ascendente cada vez que el usuario hace scroll para descubrir una nueva sección.

### `Hero.tsx`
Es la primera sección que ven los usuarios.
- **Diseño**: Posee un gran texto introductorio animado.
- **Interacción**: Aprovecha `motion` para animar su contenido de manera que los elementos caigan y se asienten visualmente cuando la página carga.

### `TechWeek.tsx`
Este componente gestiona la agenda de eventos ("Días de Innovación").
- **Lógica**: Maneja un estado local `activeDayIndex` que permite alternar los días (ej. Viernes 17, Sábado 18).
- **Animación en Badges**: Los pequeños rótulos o "badges" de categorías de evento (como "CHARLA", "SHOW", "PANEL") emplean animaciones letrea-por-letra utilizando `staggered` effects, haciendo que las palabras resalten sutilmente en bucle continuo de opacidad y desplazamiento (y-axis).
- **Filtros por día**: Un diseño tipo pestañas que cambia el estado para mostrar la información en forma de timeline.

### `Speakers.tsx`
Un listado de los invitados especiales.
- **Aparición gradual (Staggered Fade-in)**: Al hacer scroll a esta sección, cada nombre de los speakers tiene una animación escalonada donde letra por letra se va formando desde abajo, combinando la propiedad `whileInView` (disparada al entrar a pantalla).
- **Cartas (Cards)**: Grillas modernas adaptables que presentan imagen, nombre, rol, compañía, tema de charla y enlaces sociales de manera compacta.

### `Background.tsx`
Un componente dedicado exclusivamente a los detalles decorativos de fondo.
- Utiliza la técnica de gradientes CSS para emular luces suaves o "blobs" detrás del contenido, dándole profundidad al lienzo (por ejemplo, colores verde, rojo y azul desaturados típicos de Google).
- Renderiza pequeños íconos vectoriales flotantes y puntos en fondo que complementan el ambiente tecnológico.

## Ejecución del Proyecto

1. **Instalar dependencias:** 
   ```bash
   npm install
   ```
2. **Entorno de desarrollo local:**
   ```bash
   npm run dev
   ```
   La aplicación correrá en `http://localhost:3000`.

3. **Construir para producción:**
   ```bash
   npm run build
   ```
   Genera una versión empaquetada lista para el despliegue dentro del directorio `/dist`.
