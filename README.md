# Zonit - Sitio Web

Sitio web minimalista para Zonit, especialistas en automatización inteligente y sistemas solares.

## 🚀 Características

- **Stack Tecnológico**: Next.js 15 + TypeScript + TailwindCSS
- **Diseño**: Minimalista y responsivo
- **Paleta de Colores**: Personalizada según especificaciones de marca
- **Componentes**: Arquitectura modular y reutilizable
- **SEO**: Optimizado con metadatos y estructura semántica

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── (components)/          # Componentes reutilizables
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroMinimal.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── SplitSection.tsx
│   │   ├── BenefitsGrid.tsx
│   │   ├── Steps.tsx
│   │   ├── CTA.tsx
│   │   └── WhatsAppButton.tsx
│   ├── automatizacion/        # Páginas de automatización
│   │   ├── page.tsx
│   │   ├── control-iluminacion/
│   │   ├── audio-distribuido/
│   │   ├── control-accesos-seguridad/
│   │   ├── telefonia-ip-videoconferencia/
│   │   ├── video/
│   │   ├── cableado-estructurado/
│   │   └── audio-profesional/
│   ├── paneles-solares/       # Página independiente de solares
│   ├── nosotros/
│   ├── proyectos/
│   ├── blog/
│   ├── contacto/
│   └── page.tsx              # Página de inicio
├── globals.css               # Estilos globales y variables CSS
└── layout.tsx               # Layout principal
```

## 🎨 Paleta de Colores

- **Primario**: #1e1d37 (azul oscuro)
- **Secundario**: #02383d (verde/teal oscuro)
- **Acento Azul**: #74acd8 (azul claro)
- **Acento Lima**: #d3d801 (verde lima)
- **Fondo Claro**: #efeeed (gris claro)

## 📱 Páginas Implementadas

### Página Principal
- Hero con CTA principal
- Sección "Nosotros"
- Grid de beneficios (6 elementos)
- Servicios de automatización
- Teaser de paneles solares
- CTA final

### Automatización
- Página principal con grid de servicios
- 7 subpáginas especializadas:
  - Control e Iluminación
  - Audio Distribuido
  - Control de Accesos y Seguridad
  - Telefonía IP y Videoconferencia
  - Video
  - Cableado Estructurado
  - Audio Profesional

### Paneles Solares
- Contenido específico del cliente
- Beneficios: Energía renovable, ahorro hasta 99%, valor agregado
- Proceso: Evaluación, Cotización, Instalación
- Información sobre ROI (2-5 años)

### Otras Páginas
- **Nosotros**: Misión, visión, valores
- **Proyectos**: Galería con filtros
- **Blog**: Listado de artículos
- **Contacto**: Formulario completo

## 🛠️ Instalación y Desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build de producción
npm run build

# Iniciar servidor de producción
npm start
```

## 📦 Dependencias Principales

- **Next.js**: Framework React
- **TypeScript**: Tipado estático
- **TailwindCSS**: Framework CSS
- **Lucide React**: Iconos

## 🎯 Características Técnicas

- **App Router**: Next.js 13+ routing
- **Componentes Modulares**: Reutilizables y mantenibles
- **Responsive Design**: Mobile-first approach
- **Accesibilidad**: Semántica correcta y contraste AA
- **SEO**: Metadatos optimizados por página
- **Performance**: Build estático optimizado

## 📞 Contacto

- **Email**: info@zonit.com
- **Teléfono**: +52 81 1234 5678
- **Ubicación**: Monterrey, N.L., México

---

Desarrollado con ❤️ para Zonit