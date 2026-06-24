# 🎬 CINELINK 72

Portal de cine gratuito online — canales de YouTube, plataformas de streaming y archivo MICROCINE.

## Estructura del proyecto

```
cinelink72/
├── index.html               ← App principal
├── manifest.json             ← PWA manifest
├── sw.js                     ← Service Worker
├── README.md
├── icons/
│   └── icon-72.png … icon-512.png
└── peliculas/
    ├── microcine.html        ← Archivo de 39 fichas de cine de culto
    └── imagenes/              ← 39 pósters (.svg placeholder, reemplazables por .jpg)
```

## Deploy en Vercel

1. Subir esta carpeta completa a un repositorio de GitHub
2. vercel.com → Import Project → seleccionar repo
3. Sin configuración adicional — HTML estático puro

## MICROCINE — 39 películas

**Ciclo anual (12 fichas, una por mes):** A Pleno Sol · El Ángel Azul · Los Niños del Cielo ·
Fahrenheit 451 · Un Hombre y una Mujer · Los Juegos Prohibidos · La Strada · Ladrón de
Bicicletas · La Gran Ilusión · La Noche · Los 400 Golpes · El Chico (Chaplin)

**Archivo extendido (27 fichas adicionales, filtrables por director):** El Círculo Rojo ·
On the Silver Globe · Alicia en las Ciudades · Opening Night · Qué Difícil es Ser un Dios ·
Tan Lejos, Tan Cerca · El Año Pasado en Marienbad · El Eclipse · El Desprecio · El Enigma
de Kaspar Hauser · París, Texas · Aguirre, la Ira de Dios · Ascensor para el Cadalso ·
Viridiana · Desayuno en Tiffany's · El Ángel Exterminador · Charada · Psicosis · Los
Pájaros · La Ventana Indiscreta · Rebeca · Ciudadano Kane · La Vida es Bella · Cinema
Paradiso · Amarcord · 8½ · El Gatopardo

Cada ficha incluye: datos técnicos completos, presentación para el auditorio, 5 curiosidades
de producción, reflexión bíblica con versículos y preguntas de discusión, y conclusión de
cierre — todo en redacción original.

## Pósters de películas

Los archivos en `peliculas/imagenes/` son pósters SVG de diseño propio. Para reemplazarlos
con pósters reales, subir imágenes JPG con el mismo nombre de archivo (ej: `pleno_sol.jpg`,
`circulo_rojo.jpg`) en la misma carpeta. El HTML carga primero el .jpg y cae al .svg si no
existe.

## Instalar como PWA (Android TV / Google TV)

1. Deploy en Vercel → obtener URL pública
2. Navegador del TV → menú → "Instalar app" / "Agregar a pantalla de inicio"

---
CINELINK 72 · Portal de Cine Libre Online · EST. 2026
