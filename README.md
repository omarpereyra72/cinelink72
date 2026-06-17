# 🎬 CINELINK 72

Portal de cine gratuito online — canales de YouTube, plataformas de streaming y ciclo MICROCINE.

## Estructura del proyecto

```
cinelink72/
├── index.html               ← App principal
├── manifest.json            ← PWA manifest
├── sw.js                    ← Service Worker
├── README.md
├── icons/
│   ├── icon-72.png … icon-512.png
│   └── screenshot-wide.png
└── peliculas/
    ├── microcine.html       ← Ciclo anual de 12 películas
    └── imagenes/
        ├── pleno_sol.svg
        ├── angel_azul.svg
        ├── ninos_cielo.svg
        ├── fahrenheit.svg
        ├── hombre_mujer.svg
        ├── juegos_prohib.svg
        ├── strada.svg
        ├── ladron_bici.svg
        ├── grande_illusion.svg
        ├── noche.svg
        ├── 400_golpes.svg
        └── chaplin_kid.svg
        (reemplazar .svg por .jpg con pósters reales)
```

## Deploy en Vercel

1. Crear repo en GitHub y subir esta carpeta completa
2. Ir a vercel.com → Import Project → seleccionar repo
3. No requiere configuración — HTML estático puro
4. Dominio: `https://cinelink72.vercel.app` (o el que elijas)

## Pósters de películas

Los archivos en `peliculas/imagenes/` son pósters SVG de diseño propio.
Para reemplazarlos con los pósters reales, descargar imágenes JPG con los
mismos nombres (ej: `pleno_sol.jpg`) y colocarlas en la misma carpeta.
El HTML carga primero el .jpg y cae al .svg si no existe.

## MICROCINE — Contenido por película

Cada película incluye:
- Ficha técnica completa (director, elenco, fotografía, música, etc.)
- Texto de presentación para el auditorio (antes del film)
- 5 curiosidades de filmación
- Reflexión bíblica con versículos y preguntas de discusión
- Conclusión / cierre para después del film

## Instalar como PWA (Android TV / Google TV)

1. Deploy en Vercel → obtener URL pública
2. Abrir navegador en el TV → navegar a la URL
3. Menú → "Instalar app" o "Agregar a pantalla de inicio"
4. CINELINK 72 se instala en modo pantalla completa

---
CINELINK 72 · Portal de Cine Libre Online · EST. 2026
