1- ejecutar estos comandos

npx shadcn@latest add sidebar
npc shadcn@latest add collapsible
npx shadcn@latest add dropdown-menu
npx shadcn@latest add avatar
npx shadcn@latest add breadcrumb

2- En los archivos que salga este error:

Fast refresh only works when a file only exports components. Use a new file to share constants or functions between components.eslint(react-refresh/only-export-components)

solo poner este comentario al principio del archivo:

/* eslint-disable react-refresh/only-export-components */


3- cargar el componente que ya tiene el sidebar en este caso seria <Page /> en el componente App

4- Aparecera este error:

Uncaught Error: `Tooltip` must be used within `TooltipProvider`

lo que hay que hacer es:
- ir al componente sidebar.tsx
- ubicar la funcion SidebarMenuButton
- en el return envolver los componentes de <Tooltip> con <TooltipProvider>
- volver a la pagina y ya funcionara

