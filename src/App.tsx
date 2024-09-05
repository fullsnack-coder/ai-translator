import { useState } from "react";
import { getTranslation } from "./services/translations";

const App: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [sourceLanguage, setSourceLanguage] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("");
  const [sourceText, setSourceText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [naturalness, setNaturalness] = useState(3);

  const handleTranslate = async () => {
    setIsGenerating(true);

    const { text } = await getTranslation({
      text: sourceText,
      from: sourceLanguage,
      to: targetLanguage,
      naturallityLevel: naturalness,
    });

    setIsGenerating(false);
    setTranslatedText(text);
  };

  return (
    <section className="min-h-screen grid place-items-center">
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Super Traductor</h2>
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label
                htmlFor="sourceLanguage"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Idioma de origen
              </label>
              <select
                id="sourceLanguage"
                value={sourceLanguage}
                onChange={(e) => setSourceLanguage(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Seleccionar idioma</option>
                <option value="es">Español</option>
                <option value="en">Inglés</option>
                <option value="fr">Francés</option>
                <option value="ja">Japonés</option>
              </select>
            </div>
            <div className="flex-1">
              <label
                htmlFor="targetLanguage"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Idioma de destino
              </label>
              <select
                id="targetLanguage"
                value={targetLanguage}
                onChange={(e) => setTargetLanguage(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Seleccionar idioma</option>
                <option value="es">Español</option>
                <option value="en">Inglés</option>
                <option value="fr">Francés</option>
                <option value="ja">Japonés</option>
              </select>
            </div>
          </div>
          <div>
            <label
              htmlFor="sourceText"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Texto a traducir
            </label>
            <textarea
              id="sourceText"
              value={sourceText}
              onChange={(e) => setSourceText(e.target.value)}
              placeholder="Ingrese el texto que desea traducir"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[100px]"
            />
          </div>
          <div>
            <label
              htmlFor="translatedText"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Traducción
            </label>
            <textarea
              id="translatedText"
              value={translatedText}
              readOnly
              placeholder="La traducción aparecerá aquí"
              className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 min-h-[100px]"
            />
          </div>
          <div>
            <label
              htmlFor="naturalness"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nivel de naturalidad
            </label>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">Informal</span>
              <input
                type="range"
                id="naturalness"
                min="1"
                max="5"
                step="1"
                value={naturalness}
                onChange={(e) => setNaturalness(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-sm text-gray-500">Formal</span>
            </div>
            <div className="text-center text-sm text-gray-500 mt-2">
              Nivel seleccionado: {naturalness}
            </div>
          </div>
        </div>
        <button
          onClick={handleTranslate}
          className="w-full mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {isGenerating ? "Generando..." : "Generar traducción"}
        </button>
      </div>
    </section>
  );
};

export default App;
