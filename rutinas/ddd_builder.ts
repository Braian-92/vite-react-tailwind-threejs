import * as fs from 'fs';
import * as path from 'path';

const createStructure = (basePath: string, structure: string) => {
  // Normaliza el string de estructura, eliminando caracteres innecesarios
  const lines = structure.trim().split('\n');
  
  lines.forEach((line) => {
    // Calcula el nivel de indentación para determinar la jerarquía
    const depth = line.search(/\S/);
    const isFile = line.trim().includes('.'); // Detecta si es un archivo
    const name = line.trim().replace(/[#].*/, '').trim(); // Limpia comentarios
    
    if (name) {
      const fullPath = path.join(basePath, name);
      
      if (isFile) {
        // Crea el archivo si no existe
        if (!fs.existsSync(fullPath)) {
          fs.writeFileSync(fullPath, '', 'utf-8');
          console.log(`Archivo creado: ${fullPath}`);
        }
      } else {
        // Crea el directorio si no existe
        if (!fs.existsSync(fullPath)) {
          fs.mkdirSync(fullPath, { recursive: true });
          console.log(`Carpeta creada: ${fullPath}`);
        }
      }
    }
  });
};

// Define la estructura inicial como un string
const structure = `
src/
├── components/          # Componentes reutilizables
│   ├── Navbar.jsx       # Barra de navegación
│   └── ThreeScene.jsx   # Escena 3D
├── domains/             # Dominios del proyecto
│   ├── charts/          # Gráficos del dashboard
│   ├── data/            # Servicios para manejo de datos
│   └── visualization/   # Visualización 3D
├── styles/              # Estilos generales
│   └── index.css
├── App.jsx              # Punto principal de la aplicación
└── main.jsx             # Punto de entrada
`;

// Ejecuta la función para crear la estructura
createStructure(process.cwd(), structure);