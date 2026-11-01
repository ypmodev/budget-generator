# 💰 Budget: Generador de presupuestos de servicios digitales

Aplicación web (SPA) que permite calcular al instante presupuestos personalizados de servicios de marketing digital y desarrollo web. Los usuarios pueden seleccionar servicios, configurar sus opciones, introducir sus datos y obtener un enlace único para consultar o compartir su presupuesto.

**Demo:** [Budget – Generador de presupuestos](https://ypmodev.github.io/budget-generator/)
## Vista previa de la aplicación

<table>
  <tr>
    <td width="33%" align="center">
      <strong>Selección de servicios</strong><br />
      <img src="./docs/screenshots/budget-services.jpg"
           alt="Selección de servicios"
           height="300" />
    </td>
    <td width="33%" align="center">
      <strong>Formulario y presupuestos</strong><br />
      <img src="./docs/screenshots/client-form.jpg"
           alt="Formulario y presupuestos"
           height="300" />
    </td>
    <td width="33%" align="center">
      <strong>Presupuesto compartido</strong><br />
      <img src="./docs/screenshots/shared-budget.jpg"
           alt="Presupuesto compartido"
           height="300" />
    </td>
  </tr>
</table>

## Funcionalidades

- **Nivel 1: Creación del presupuesto**
  - Selección de servicios (SEO, Ads y Web) mediante casillas de verificación (_checkboxes_).
  - Configurador del servicio Web (número de páginas e idiomas), con un aviso informativo sobre los costes adicionales.
  - Cálculo dinámico del importe total.
  - Formulario con los datos del cliente (nombre y apellidos, teléfono y email), con validación.

- **Nivel 2: Histórico de presupuestos**
  - Listado de presupuestos generados, con acceso al detalle de cada uno.
  - Búsqueda por nombre, email o teléfono.
  - Ordenación por fecha, importe o nombre.

- **Nivel 3: Compartir presupuestos**
  - URL única para cada presupuesto (`/budget/:id`), con la fecha, los datos del cliente, los servicios seleccionados, el desglose y el importe total.
  - Botón para copiar el enlace.

  ## Tecnologías

- **React, TypeScript y Vite:** desarrollo de una aplicación de página única (SPA) con tipado estático.
- **Tailwind CSS y shadcn/ui:** diseño _mobile-first_, con breakpoints `md` y `lg`, y componentes accesibles.
- **React Router:** gestión de las rutas de la aplicación y del detalle de cada presupuesto.
- **React Hook Form, Zod y @hookform/resolvers:** gestión del formulario y validación de datos.
- **Sonner y lucide-react:** notificaciones e iconos.
- **localStorage:** almacenamiento local y persistencia de los presupuestos.
- **Vitest y React Testing Library:** pruebas unitarias y de componentes.

## Instalación y uso

### Requisitos

- Node.js 22
- npm

### Instalación

Clona el repositorio e instala las dependencias:

```bash
git clone https://github.com/ypmodev/budget-generator.git
cd budget-generator
npm install
```

### Ejecutar en local

```bash
npm run dev
```

Abre en el navegador la URL que muestra la terminal.

### Otros comandos disponibles

| Comando                     | Descripción                                              |
| --------------------------- | -------------------------------------------------------- |
| `npm run build`             | Genera la versión de producción en `dist/`.              |
| `npm run preview`           | Permite previsualizar la versión de producción en local. |
| `npx vitest run`            | Ejecuta las pruebas automatizadas.                       |
| `npx vitest run --coverage` | Ejecuta las pruebas y genera el informe de cobertura.    |

## Cómo utilizar la aplicación

1. Selecciona los servicios que necesitas. El importe total se actualiza automáticamente.
2. Si seleccionas Web, configura el número de páginas e idiomas mediante los botones `+` y `−`. La primera vez que pulses `+`, aparecerá un aviso informativo sobre el coste de los extras (30 € por cada página o idioma adicional).
3. Introduce tus datos y pulsa **Sol·licitar pressupost**. Es necesario seleccionar al menos un servicio.
4. El presupuesto aparecerá en la lista **Pressupostos en curs**, desde donde podrás buscar y ordenar los presupuestos.
5. Selecciona un presupuesto para consultar su detalle y utiliza el botón de compartir para copiar su enlace.

## Estructura del proyecto

```text
src/
├── components/
│   ├── layout/              Layout (estructura general de la aplicación)
│   ├── ui/                  Componentes base de shadcn/ui
│   ├── Budget.tsx           Componente principal de creación del presupuesto
│   ├── BudgetList.tsx       Listado e histórico de presupuestos
│   ├── ServiceCard.tsx      Tarjeta de selección de servicios
│   ├── WebOptions.tsx       Configuración de extras de web
│   ├── ExtraCostModal.tsx   Modal informativo sobre costes adicionales
│   ├── FormClient.tsx       Formulario de datos del cliente
│   └── Banner.tsx           Banner de la aplicación
├── data/                    services.json y texts.json (datos y textos editables)
├── lib/                     utils.ts (función auxiliar de shadcn/ui)
├── pages/                   SharedBudget (detalle de un presupuesto)
├── router/                  router.tsx (configuración de rutas)
├── schemas/                 clientFormSchema.ts (validación del formulario)
├── services/                budgetStorage.ts (único acceso a localStorage)
├── test/                    ServiceCard.test.tsx y utils.test.ts
├── types/                   Tipos compartidos
└── utils/                   calculateBudget.ts y budgetFilters.ts (lógica sin React)

features/                    Escenarios Gherkin
public/images/               Banner de la aplicación
```

Los componentes gestionan la interfaz, `utils/` contiene las funciones de cálculo y filtrado, y `services/` se encarga del almacenamiento de los presupuestos.

## Pruebas

El proyecto utiliza **Vitest** y **React Testing Library** para realizar pruebas unitarias y de componentes.

Las pruebas automatizadas comprueban los siguientes comportamientos:

- `ServiceCard`: selección de un servicio mediante el checkbox.
- `calculateExtraCostWeb`: cálculo del coste de las páginas adicionales y comprobación de que el coste es cero cuando no hay extras.
- `getSelectedServices`: obtención de los servicios seleccionados.

Los escenarios de comportamiento están documentados por separado en `features/services.feature`, siguiendo la sintaxis Gherkin (`Given / When / Then`).

## Calidad y accesibilidad

Las métricas se han obtenido con **Lighthouse**, en una ventana de incógnito y sobre la versión de producción generada mediante `npm run build`.

### Capturas de Lighthouse

<table>
  <tr>
    <td width="50%" align="center">
      <img
        src="./docs/lighthouse/lighthouse-desktop.jpg"
        alt="Resultados de Lighthouse en escritorio"
        width="100%"
      />
    </td>
    <td width="50%" align="center">
      <img
        src="./docs/lighthouse/lighthouse-mobile.jpg"
        alt="Resultados de Lighthouse en móvil"
        width="95%"
      />
    </td>
  </tr>
</table>

**Accesibilidad:** la aplicación incorpora HTML semántico, etiquetas asociadas a los campos del formulario, atributos ARIA (`aria-invalid`, `aria-describedby`, `role="alert"`), navegación mediante teclado, foco visible y un modal accesible.

## Autoría

**Yanet Pérez** ([@ypmodev](https://github.com/ypmodev))
