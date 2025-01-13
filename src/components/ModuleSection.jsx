// src/components/ModuleSection.jsx
const ModuleSection = ({ module }) => {
    const getLevelColor = (level) => {
      if (level.includes('Nivel 1')) return 'text-green-600';
      if (level.includes('Nivel 2')) return 'text-blue-600';
      return 'text-purple-600';
    };
   
    return (
      <section id={`${module.id}-section`} className="mb-8 scroll-mt-[40vh]">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <span className={`text-sm font-medium ${getLevelColor(module.level)}`}>
                {module.level}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-1">
                {module.title}
              </h2>
              <h3 className="text-lg md:text-xl text-gray-600 mt-1">
                {module.subtitle}
              </h3>
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              ↑ Sus
            </button>
          </div>
   
          {/* Kit Information */}
          <div className="space-y-6">
            {module.kitInfo?.options?.map((kit, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">{kit.name}</h4>
                    <p className="text-blue-600 font-bold mt-1">{kit.price}</p>
                  </div>
                </div>
   
                {/* Kit Contents */}
                <div className="mt-4">
                  <h5 className="font-semibold text-gray-700 mb-2">Conține:</h5>
                  <div className="grid md:grid-cols-2 gap-4">
                    {kit.contains.map((item, i) => (
                      <div key={i} className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
   
                {/* Advantages & Disadvantages */}
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h5 className="font-semibold text-green-600 mb-2">Avantaje:</h5>
                    <ul className="space-y-2">
                      {kit.advantages.map((adv, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>{adv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-red-600 mb-2">Dezavantaje:</h5>
                    <ul className="space-y-2">
                      {kit.disadvantages.map((disadv, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          <span>{disadv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
   
            {/* Setup Recommendations */}
            {module.kitInfo?.recommendedSetup && (
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-4">Setup Recomandat</h4>
                
                {/* Small Group */}
                <div className="mb-6">
                  <h5 className="font-semibold text-gray-700 mb-2">{module.kitInfo.recommendedSetup.small.title}</h5>
                  <ul className="space-y-2">
                    {module.kitInfo.recommendedSetup.small.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-blue-600 font-medium mt-2">{module.kitInfo.recommendedSetup.small.estimatedCost}</p>
                </div>
   
                {/* Large Group */}
                <div>
                  <h5 className="font-semibold text-gray-700 mb-2">{module.kitInfo.recommendedSetup.large.title}</h5>
                  <ul className="space-y-2">
                    {module.kitInfo.recommendedSetup.large.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-blue-600 font-medium mt-2">{module.kitInfo.recommendedSetup.large.estimatedCost}</p>
                </div>
              </div>
            )}
   
            {/* Projects Section */}
            {module.projects && (
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Proiecte</h3>
                {['basic', 'intermediate', 'advanced'].map((level) => (
                  module.projects[level] && (
                    <div key={level} className="mb-6">
                      <h4 className="text-xl font-bold text-gray-700 mb-3">
                        {module.projects[level].title}
                      </h4>
                      <div className="grid gap-4">
                        {module.projects[level].list.map((project, index) => (
                          <div key={index} className="bg-gray-50 rounded-lg p-4">
                            <h5 className="font-bold text-lg mb-2">{project.name}</h5>
                            <p className="text-gray-600 mb-3">{project.description}</p>
                            
                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                                {project.duration}
                              </span>
                              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                                {project.difficulty}
                              </span>
                            </div>
   
                            {/* Concepts */}
                            {project.concepts && (
                              <div className="mt-3">
                                <h6 className="font-semibold text-gray-700 mb-2">Concepte acoperite:</h6>
                                <div className="flex flex-wrap gap-2">
                                  {project.concepts.map((concept, i) => (
                                    <span key={i} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                                      {concept}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
   
                            {/* Detailed Steps */}
                            {project.detailedSteps && (
                              <div className="mt-4">
                                <h6 className="font-semibold text-gray-700 mb-2">Pași Detaliați:</h6>
                                {project.detailedSteps.map((phase, i) => (
                                  <div key={i} className="mb-3">
                                    <div className="font-medium text-blue-700">{phase.phase}</div>
                                    <ul className="list-disc pl-5 mt-1">
                                      {phase.steps.map((step, j) => (
                                        <li key={j} className="text-gray-600">{step}</li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            )}
   
                            {/* Learning Outcomes */}
                            {project.learningOutcomes && (
                              <div className="mt-4">
                                <h6 className="font-semibold text-gray-700 mb-2">Rezultate Învățare:</h6>
                                <ul className="list-disc pl-5">
                                  {project.learningOutcomes.map((outcome, i) => (
                                    <li key={i} className="text-gray-600">{outcome}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
   
                            {/* Extensions */}
                            {project.extensions && (
                              <div className="mt-4">
                                <h6 className="font-semibold text-gray-700 mb-2">Extensii Posibile:</h6>
                                <ul className="list-disc pl-5">
                                  {project.extensions.map((ext, i) => (
                                    <li key={i} className="text-gray-600">{ext}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                ))}
              </div>
            )}
   
            {/* Curriculum Section */}
            {module.curriculum && (
              <div className="mt-8 bg-blue-50 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Structură Curriculum</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Detalii Organizatorice</h4>
                    <ul className="space-y-2">
                      {Object.entries(module.curriculum.structure).map(([key, value]) => (
                        <li key={key} className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span className="text-gray-700">{value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
   
                  <div>
                    {Object.entries(module.curriculum.progression).map(([phase, data]) => (
                      <div key={phase} className="mb-4">
                        <h5 className="font-semibold text-gray-800 mb-2">{data.title}</h5>
                        <ul className="list-disc pl-5">
                          {data.content.map((item, i) => (
                            <li key={i} className="text-gray-600">{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
   
            {/* Evaluation Section */}
            {module.evaluation && (
              <div className="mt-6 bg-green-50 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Evaluare</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Metode de Evaluare</h4>
                    <ul className="space-y-2">
                      {module.evaluation.methods.map((method, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span className="text-gray-700">{method}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
   
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Criterii de Evaluare</h4>
                    <ul className="space-y-2">
                      {module.evaluation.criteria.map((criterion, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span className="text-gray-700">{criterion}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    );
   };
   
   export default ModuleSection;