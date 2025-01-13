import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { modules } from './data/modules';
import Diagram from './components/Diagram';
import ModuleSection from './components/ModuleSection';

function App() {
  const [isDiagramVisible, setIsDiagramVisible] = useState(true);

  const toggleDiagram = () => {
    setIsDiagramVisible(!isDiagramVisible);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header cu diagramă */}
      <div className="bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              Curriculum Robotică Educațională
            </h1>
            <button
              className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors"
              onClick={toggleDiagram}
            >
              {isDiagramVisible ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          </div>

          <div className={`transition-all duration-300 ${isDiagramVisible ? 'h-auto' : 'h-0'} overflow-hidden`}>
            {/* Legendă */}
            <div className="flex flex-col md:flex-row md:justify-center gap-2 md:gap-8 text-sm mb-4 px-2">
              <div className="flex items-center bg-green-100 px-3 py-2 rounded-lg w-full md:w-auto">
                <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                <span className="text-gray-600">Nivel 1 - Robotică Inițială</span>
              </div>
              <div className="flex items-center bg-blue-100 px-3 py-2 rounded-lg w-full md:w-auto">
                <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
                <span className="text-gray-600">Nivel 2 - Robotică Intermediară</span>
              </div>
              <div className="flex items-center bg-purple-100 px-3 py-2 rounded-lg w-full md:w-auto">
                <span className="w-3 h-3 rounded-full bg-purple-500 mr-2"></span>
                <span className="text-gray-600">Nivel 3 - Robotică Avansată</span>
              </div>
            </div>

            {/* Container pentru diagramă */}
            <div className="border rounded-lg overflow-hidden h-[450px] md:h-[350px]">
              <Diagram />
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* About section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Despre acest curriculum
            </h2>
            <p className="text-gray-600 mb-4">
              Acest curriculum este special creat pentru copiii între 7 și 14 ani, 
              oferind o progresie naturală în învățarea roboticii educaționale.
            </p>
            {/* Adăugăm mai multe detalii aici */}
          </div>

          {/* Module sections */}
          {modules.map(module => (
            <ModuleSection key={module.id} module={module} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-8">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-gray-600 text-sm">
            <p>© 2024 Curriculum Robotică Educațională</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;