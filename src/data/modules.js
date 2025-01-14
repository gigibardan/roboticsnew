export const modules = [
  {
      id: 'spike-essential',
      level: 'Nivel 1 - Începător',
      title: 'LEGO Education SPIKE Essential',
      subtitle: 'Introducere în Robotică (7-11 ani)',
      description: 'LEGO Education SPIKE Essential reprezintă primul pas în lumea fascinantă a roboticii educaționale. Acest kit combină piesele familiare LEGO cu tehnologie modernă, permițând copiilor să învețe bazele roboticii și programării într-un mod intuitiv și antrenant.\n\n' +
                  'Copiii vor explora:\n' +
                  '• Construcția și designul robotic folosind motoare și senzori\n' +
                  '• Programarea vizuală prin blocuri de cod intuitive\n' +
                  '• Rezolvarea creativă a problemelor prin proiecte practice\n' +
                  '• Dezvoltarea gândirii logice și computaționale\n' +
                  '• Abilitățile de lucru în echipă și comunicare\n\n' +
                  'Platforma este concepută special pentru începători, folosind un hub programabil, motoare precise și senzori versatili, împreună cu o interfață de programare vizuală adaptată vârstei.',

      projects: {
          basic: {
              title: 'Primii Pași în Robotică (Săptămânile 1-4)',
              list: [
                  {
                      name: 'Prietenul Robot',
                      description: 'Un proiect introductiv în care copiii construiesc un robot interactiv care poate răspunde la prezența persoanelor și a obiectelor din jur, folosind senzorul de distanță și LED-uri pentru feedback.',
                      difficulty: 'Începător',
                      duration: '2 ședințe',
                      concepts: [
                          'Componentele de bază SPIKE Essential',
                          'Motoare și mișcare de bază',
                          'Senzorul de distanță',
                          'LED-uri și feedback vizual',
                          'Programare prin blocuri',
                          'Bucle simple',
                          'Evenimente și așteptare'
                      ],
                      detailedSteps: [
                          {
                              phase: 'Construcție',
                              steps: [
                                  'Explorarea componentelor SPIKE Essential',
                                  'Construirea structurii de bază a robotului',
                                  'Montarea motorului și hub-ului',
                                  'Poziționarea senzorului de distanță',
                                  'Testarea stabilității'
                              ]
                          },
                          {
                              phase: 'Programare',
                              steps: [
                                  'Familiarizarea cu interfața de programare',
                                  'Controlul LED-urilor pentru expresii',
                                  'Programarea răspunsurilor la senzorul de distanță',
                                  'Adăugarea mișcărilor simple',
                                  'Testare și depanare'
                              ]
                          }
                      ],
                      learningOutcomes: [
                          'Înțelegerea componentelor de bază ale unui robot',
                          'Programare vizuală fundamentală',
                          'Utilizarea senzorilor pentru interacțiune',
                          'Gândire logică și secvențială',
                          'Rezolvarea problemelor simple'
                      ]
                  },
                  {
                      name: 'Vehicul Inteligent',
                      description: 'Copiii construiesc un vehicul robotizat care poate detecta și evita obstacole, demonstrând principiile de bază ale vehiculelor autonome.',
                      difficulty: 'Începător-Intermediar',
                      duration: '3 ședințe',
                      concepts: [
                          'Design mecanic de bază',
                          'Motoare pentru propulsie',
                          'Senzor de distanță pentru navigare',
                          'Algoritmi simpli de evitare',
                          'Condiții IF-THEN',
                          'Variabile pentru memorare'
                      ],
                      detailedSteps: [
                          {
                              phase: 'Construcție',
                              steps: [
                                  'Asamblarea șasiului mobil',
                                  'Montarea roților și motoarelor',
                                  'Instalarea senzorului de distanță',
                                  'Optimizarea designului pentru mobilitate',
                                  'Adăugarea elementelor de protecție'
                              ]
                          },
                          {
                              phase: 'Programare',
                              steps: [
                                  'Programarea mișcărilor de bază',
                                  'Implementarea detecției de obstacole',
                                  'Crearea comportamentului de evitare',
                                  'Adăugarea indicatorilor LED',
                                  'Testare în diferite medii'
                              ]
                          }
                      ],
                      learningOutcomes: [
                          'Principii de design mecanic',
                          'Logică condițională în programare',
                          'Comportamente autonome simple',
                          'Testare și optimizare',
                          'Rezolvarea problemelor practice'
                      ]
                  }
              ]
          },

          intermediate: {
            title: 'Proiecte Interactive (Săptămânile 5-8)',
            list: [
                {
                    name: 'Sistem de Sortare Automată',
                    description: 'Un proiect complex care introduce concepte de automatizare, folosind senzori pentru a sorta și procesa diferite obiecte bazate pe caracteristicile lor.',
                    difficulty: 'Intermediar',
                    duration: '3 ședințe',
                    concepts: [
                        'Utilizarea senzorului de culoare',
                        'Mecanisme de sortare',
                        'Programare cu mai multe variabile',
                        'Condiții multiple',
                        'Secvențe complexe de acțiuni',
                        'Gestionarea erorilor simple'
                    ],
                    detailedSteps: [
                        {
                            phase: 'Construcție',
                            steps: [
                                'Construirea sistemului de alimentare',
                                'Crearea mecanismului de sortare',
                                'Instalarea senzorilor',
                                'Asamblarea containerelor de sortare',
                                'Testarea mecanică a sistemului'
                            ]
                        },
                        {
                            phase: 'Programare',
                            steps: [
                                'Configurarea detecției de culoare',
                                'Programarea secvenței de sortare',
                                'Implementarea sistemului de numărare',
                                'Adăugarea feedback-ului LED',
                                'Optimizarea preciziei'
                            ]
                        }
                    ],
                    learningOutcomes: [
                        'Înțelegerea sistemelor automate',
                        'Logică complexă de programare',
                        'Managementul proceselor',
                        'Calibrare și precizie',
                        'Rezolvarea problemelor tehnice'
                    ]
                },
                {
                    name: 'Robot Interactiv cu Comenzi Multiple',
                    description: 'Un robot versatil care poate răspunde la diferite comenzi și poate executa mai multe sarcini, introducând concepte de programare mai avansate.',
                    difficulty: 'Intermediar',
                    duration: '3 ședințe',
                    concepts: [
                        'Interacțiune multi-senzor',
                        'Comenzi și răspunsuri',
                        'Funcții simple',
                        'Stări multiple',
                        'Evenimente și triggere',
                        'Feedback complex'
                    ],
                    detailedSteps: [
                        {
                            phase: 'Design și Construcție',
                            steps: [
                                'Proiectarea structurii robotului',
                                'Integrarea multiplilor senzori',
                                'Construirea sistemelor de răspuns',
                                'Adăugarea elementelor interactive',
                                'Testarea mecanismelor'
                            ]
                        },
                        {
                            phase: 'Programare',
                            steps: [
                                'Definirea comenzilor de bază',
                                'Programarea răspunsurilor',
                                'Implementarea stărilor multiple',
                                'Crearea sistemului de feedback',
                                'Testare și rafinare'
                            ]
                        }
                    ]
                }
            ]
        },

        advanced: {
          title: 'Proiecte Complexe (Săptămânile 9-12)',
          list: [
              {
                  name: 'Mini-Fabrică Inteligentă',
                  description: 'Un proiect complex care combină toate conceptele învățate pentru a crea o linie de producție automatizată în miniatură.',
                  difficulty: 'Avansat',
                  duration: '4 ședințe',
                  concepts: [
                      'Integrare multiplă sisteme',
                      'Automatizare completă',
                      'Coordonare senzori',
                      'Gestionare erori',
                      'Optimizare proces',
                      'Monitorizare stare'
                  ],
                  detailedSteps: [
                      {
                          phase: 'Design și Planificare',
                          steps: [
                              'Schițarea planului sistemului',
                              'Identificarea punctelor critice',
                              'Planificarea fluxului de lucru',
                              'Design modular',
                              'Strategii de control'
                          ]
                      },
                      {
                          phase: 'Implementare',
                          steps: [
                              'Construcția sistemelor componente',
                              'Integrarea senzorilor',
                              'Asamblarea liniei de producție',
                              'Implementarea sistemului de control',
                              'Testare și calibrare'
                          ]
                      },
                      {
                          phase: 'Programare Avansată',
                          steps: [
                              'Dezvoltarea logicii de control',
                              'Implementarea sistemului de monitorizare',
                              'Programarea răspunsurilor la erori',
                              'Optimizarea proceselor',
                              'Testare și validare'
                          ]
                      }
                  ],
                  learningOutcomes: [
                      'Gândire sistemică avansată',
                      'Management de proiect',
                      'Rezolvare probleme complexe',
                      'Optimizare și eficiență',
                      'Documentare tehnică'
                  ]
              }
          ]
      }
  },

  curriculum: {
      structure: {
          duration: '12 săptămâni',
          sessionsPerWeek: '1-2 sesiuni',
          sessionLength: '1.5 ore',
          maxGroupSize: 'maxim 15 copii' ,
          groupDetails: 'Lucru în echipe de 2-3 copii per kit',
          requirements: [
              'Vârsta recomandată: 7-11 ani. ',
              'Nu necesită experiență anterioară. ',
              'Necesita interes pentru tehnologie și construcții.'
          ]
      },
      progression: {
          initial: {
              title: 'Fundamente (Săptămânile 1-4)',
              content: [
                  'Introducere în robotică și componente',
                  'Primele construcții și programări',
                  'Utilizarea motoarelor și senzorilor',
                  'Concepte de bază în programare',
                  'Proiecte simple interactive'
              ]
          },
          development: {
              title: 'Dezvoltare și Aplicații (Săptămânile 5-8)',
              content: [
                  'Proiecte cu multiple componente',
                  'Programare intermediară',
                  'Automatizare simplă',
                  'Rezolvarea problemelor practice',
                  'Lucrul cu mai mulți senzori'
              ]
          },
          advanced: {
              title: 'Proiecte Avansate (Săptămânile 9-12)',
              content: [
                  'Sisteme robotice complexe',
                  'Automatizare avansată',
                  'Integrare multiplă sisteme',
                  'Optimizare și eficiență',
                  'Proiecte finale demonstrative'
              ]
          }
      }
  }
},




{
  id: 'mbot',
  level: 'Nivel 2 - Intermediar',
  title: 'mBot Explorer',
  subtitle: 'Robotică și Programare (9-13 ani)',
  description: 'mBot oferă o introducere practică în lumea roboticii bazate pe Arduino, permițând tranziția de la programarea vizuală la cea bazată pe text. Platforma combină electronica cu programarea, oferind o experiență completă de învățare.\n\n' +
              'În acest modul, elevii vor explora:\n' +
              '• Bazele roboticii și electronicii\n' +
              '• Programare vizuală și bazată pe text (Arduino)\n' +
              '• Senzori și actuatori avansați\n' +
              '• Algoritmi de control robotic\n' +
              '• Proiecte practice de automatizare\n\n' +
              'Platforma mBot oferă o tranziție perfectă între robotica de bază și proiectele electronice mai avansate, pregătind elevii pentru provocări mai complexe.',

  projects: {
      basic: {
          title: 'Introducere în mBot (Săptămânile 1-4)',
          list: [
              {
                  name: 'Control și Navigare',
                  description: 'Primul proiect cu mBot focusat pe înțelegerea platformei și controlul de bază al robotului.',
                  difficulty: 'Intermediar',
                  duration: '2 ședințe',
                  concepts: [
                      'Arhitectura mBot și Arduino',
                      'Controlul motoarelor DC',
                      'Senzori de bază (IR, ultrasonic)',
                      'Programare block-based în mBlock',
                      'Introducere în Arduino IDE',
                      'Bucle și condiții'
                  ],
                  detailedSteps: [
                      {
                          phase: 'Hardware și Asamblare',
                          steps: [
                              'Identificarea componentelor mBot',
                              'Asamblarea structurii de bază',
                              'Conexiuni electrice și verificare',
                              'Testarea componentelor individuale',
                              'Verificarea funcționalității'
                          ]
                      },
                      {
                          phase: 'Programare Inițială',
                          steps: [
                              'Configurarea mediului de programare',
                              'Primul program de control motoare',
                              'Testarea senzorilor de bază',
                              'Implementarea controlului de mișcare',
                              'Debugging și optimizare'
                          ]
                      }
                  ],
                  learningOutcomes: [
                      'Înțelegerea componentelor robotice',
                      'Bazele programării pentru robotică',
                      'Controlul motoarelor și senzorilor',
                      'Debugging hardware și software',
                      'Principii de electronică'
                  ]
              },
              {
                  name: 'Robot Reactiv',
                  description: 'Dezvoltarea unui robot care poate reacționa la mediul înconjurător folosind senzorii disponibili.',
                  difficulty: 'Intermediar',
                  duration: '3 ședințe',
                  concepts: [
                      'Senzori multipli',
                      'Comportamente reactive',
                      'Logică condițională avansată',
                      'Calibrare senzori',
                      'Introducere în C++ pentru Arduino'
                  ],
                  detailedSteps: [
                      {
                          phase: 'Setup și Configurare',
                          steps: [
                              'Configurarea senzorilor',
                              'Calibrare și testare',
                              'Implementare comportamente de bază',
                              'Testare reacții',
                              'Optimizare răspunsuri'
                          ]
                      }
                  ]
              }
          ]
      },

      intermediate: {
        title: 'Proiecte Avansate cu mBot (Săptămânile 5-8)',
        list: [
            {
                name: 'Line Follower Avansat',
                description: 'Un robot capabil să urmărească linii cu diferite complexități și să ia decizii în funcție de marcaje speciale.',
                difficulty: 'Intermediar-Avansat',
                duration: '3 ședințe',
                concepts: [
                    'Algoritmi PID pentru control',
                    'Senzori IR pentru linie',
                    'Optimizare viteză',
                    'Calibrare automată',
                    'Programare în Arduino C++',
                    'Gestionare intersecții'
                ],
                detailedSteps: [
                    {
                        phase: 'Dezvoltare Hardware',
                        steps: [
                            'Optimizarea poziției senzorilor IR',
                            'Ajustarea centrului de greutate',
                            'Modificări pentru stabilitate',
                            'Testare pe diferite suprafețe',
                            'Implementare sistem de calibrare'
                        ]
                    },
                    {
                        phase: 'Implementare Software',
                        steps: [
                            'Dezvoltarea algoritmului PID',
                            'Programarea detecției de intersecții',
                            'Implementarea deciziilor la marcaje',
                            'Optimizarea pentru viteză',
                            'Testare și ajustare parametri'
                        ]
                    }
                ],
                learningOutcomes: [
                    'Algoritmi de control avansat',
                    'Optimizare și calibrare',
                    'Programare C++ pentru Arduino',
                    'Debugging sistematic',
                    'Documentare tehnică'
                ]
            },
            {
                name: 'Sistem de Evitare Obstacole cu Mapping',
                description: 'Robot autonom care poate naviga într-un spațiu necunoscut, evitând obstacole și creând o hartă simplă a mediului.',
                difficulty: 'Avansat',
                duration: '4 ședințe',
                concepts: [
                    'Algoritmi de navigare',
                    'Senzor ultrasonic',
                    'Mapping simplu',
                    'Odometrie de bază',
                    'Luare de decizii autonomă'
                ],
                detailedSteps: [
                    {
                        phase: 'Dezvoltare',
                        steps: [
                            'Implementare sistem de navigație',
                            'Dezvoltare algoritm mapping',
                            'Integrare senzori pentru poziționare',
                            'Creare sistem decizie',
                            'Optimizare comportament'
                        ]
                    }
                ]
            }
        ]
    },
    advanced: {
        title: 'Proiecte Complexe (Săptămânile 9-12)',
        list: [
            {
                name: 'Smart Robot System',
                description: 'Un robot versatil care combină multiple funcționalități și poate fi controlat prin Bluetooth, demonstrând integrarea completă a conceptelor învățate.',
                difficulty: 'Foarte Avansat',
                duration: '4 ședințe',
                concepts: [
                    'Comunicație Bluetooth',
                    'Control prin aplicație mobilă',
                    'Integrare senzori multipli',
                    'Comportamente complexe',
                    'Procesare date în timp real'
                ],
                detailedSteps: [
                    {
                        phase: 'Implementare',
                        steps: [
                            'Dezvoltare protocoale comunicație',
                            'Creare interfață control',
                            'Implementare funcții complexe',
                            'Integrare sisteme',
                            'Testare și optimizare'
                        ]
                    }
                ]
            }
        ]
    }
},

curriculum: {
    structure: {
        duration: '12 săptămâni',
        sessionsPerWeek: '1-2 sesiuni',
        sessionLength: '1.5 - 2 ore',
        maxGroupSize: 'maxim 15 copii',
        groupDetails: 'Lucru individual sau în perechi',
        requirements: [
            'Vârsta recomandată: 9-13 ani',
            'Experiență de bază în programare vizuală',
            'Interes pentru electronică și programare'
        ]
    },
    progression: {
        initial: {
            title: 'Bazele mBot și Arduino',
            content: [
                'Introducere în platforma mBot',
                'Tranziție de la block la text programming',
                'Concepte de bază Arduino',
                'Control motoare și senzori',
                'Primele programe autonome'
            ]
        },
        development: {
            title: 'Dezvoltare Avansată',
            content: [
                'Programare C++ pentru Arduino',
                'Algoritmi de control complex',
                'Proiecte multi-senzor',
                'Comportamente autonome',
                'Optimizare și eficiență'
            ]
        },
        advanced: {
            title: 'Proiecte și Integrare',
            content: [
                'Sisteme robotice complexe',
                'Comunicație și control la distanță',
                'Proiecte personalizate',
                'Integrare concepte avansate',
                'Prezentări finale'
            ]
        }
    }
}
},


{
  id: 'spike-prime',
  level: 'Nivel 2 - Intermediar Avansat',
  title: 'LEGO SPIKE Prime',
  subtitle: 'Robotică și Programare Avansată (10-14 ani)',
  description: 'LEGO SPIKE Prime reprezintă o platformă avansată de robotică educațională, oferind posibilități extinse pentru proiecte complexe și introducere în programare Python.\n\n' +
              'În acest modul, elevii vor dezvolta:\n' +
              '• Abilități avansate de construcție și design mecanic\n' +
              '• Programare în Python pentru robotică\n' +
              '• Utilizarea senzorilor avansați (giroscop, forță, etc.)\n' +
              '• Implementarea algoritmilor de control complex\n' +
              '• Dezvoltarea proiectelor pentru competiții\n\n' +
              'SPIKE Prime oferă o platformă robustă pentru tranziția către robotica avansată și programarea text-based.',

  projects: {
      basic: {
          title: 'Fundamente SPIKE Prime (Săptămânile 1-4)',
          list: [
              {
                  name: 'Robot Omnidirecțional',
                  description: 'Construirea și programarea unui robot care se poate deplasa în toate direcțiile folosind roți omnidirecționale și control giroscopic.',
                  difficulty: 'Intermediar',
                  duration: '3 ședințe',
                  concepts: [
                      'Design mecanic avansat',
                      'Sistemul de roți omnidirecționale',
                      'Control cu giroscop',
                      'Bazele Python în SPIKE Prime',
                      'Cinematică robotică',
                      'Control precis al mișcării'
                  ],
                  detailedSteps: [
                      {
                          phase: 'Design și Construcție',
                          steps: [
                              'Proiectarea șasiului pentru stabilitate',
                              'Montarea roților omnidirecționale',
                              'Configurarea giroscopului',
                              'Optimizarea centrului de greutate',
                              'Testarea sistemului mecanic'
                          ]
                      },
                      {
                          phase: 'Programare',
                          steps: [
                              'Introducere în Python pentru SPIKE',
                              'Implementarea controlului de bază',
                              'Programarea mișcărilor omnidirecționale',
                              'Integrarea datelor giroscopice',
                              'Calibrare și testare'
                          ]
                      }
                  ],
                  learningOutcomes: [
                      'Înțelegerea sistemelor omnidirecționale',
                      'Programare în Python pentru roboți',
                      'Utilizarea senzorilor avansați',
                      'Optimizare mecanică',
                      'Debug și rezolvare probleme'
                  ]
              },
              {
                  name: 'Sistem de Ridicare și Manipulare',
                  description: 'Dezvoltarea unui braț robotic cu multiple grade de libertate, capabil să manipuleze obiecte cu precizie.',
                  difficulty: 'Intermediar-Avansat',
                  duration: '3 ședințe',
                  concepts: [
                      'Mecanisme de ridicare',
                      'Control servo precis',
                      'Programare orientată pe obiecte',
                      'Senzori de forță și poziție',
                      'Cinematică directă și inversă'
                  ],
                  detailedSteps: [
                      {
                          phase: 'Construcție',
                          steps: [
                              'Design braț articulated',
                              'Implementare sistem de prindere',
                              'Instalare senzori',
                              'Testare mecanică',
                              'Optimizare mișcări'
                          ]
                      }
                  ]
              }
          ]
      },

      intermediate: {
        title: 'Proiecte Avansate (Săptămânile 5-8)',
        list: [
            {
                name: 'Robot pentru Competiții',
                description: 'Dezvoltarea unui robot versatil pentru provocări tip competiție, capabil să îndeplinească multiple sarcini autonome.',
                difficulty: 'Avansat',
                duration: '4 ședințe',
                concepts: [
                    'Strategii de competiție',
                    'Programare modulară în Python',
                    'Senzori multipli',
                    'Control autonom avansat',
                    'Optimizare performanță',
                    'Gestionarea stărilor multiple'
                ],
                detailedSteps: [
                    {
                        phase: 'Design și Strategie',
                        steps: [
                            'Analiza cerințelor competiției',
                            'Proiectarea sistemelor modulare',
                            'Design pentru fiabilitate',
                            'Implementare sisteme redundante',
                            'Testare în condiții de competiție'
                        ]
                    },
                    {
                        phase: 'Programare Avansată',
                        steps: [
                            'Dezvoltare librării personalizate',
                            'Implementare strategii autonome',
                            'Sisteme de calibrare automată',
                            'Optimizare timpi execuție',
                            'Testare și depanare'
                        ]
                    }
                ],
                learningOutcomes: [
                    'Gândire strategică în robotică',
                    'Programare avansată Python',
                    'Optimizare și eficiență',
                    'Management proiect complex',
                    'Lucru sub presiune'
                ]
            },
            {
                name: 'Sistem Multi-Robot',
                description: 'Crearea unui sistem de roboți care colaborează pentru îndeplinirea unei sarcini comune.',
                difficulty: 'Foarte Avansat',
                duration: '4 ședințe',
                concepts: [
                    'Comunicare între roboți',
                    'Coordonare multi-agent',
                    'Sincronizare acțiuni',
                    'Gestiunea resurselor',
                    'Algoritmi distribuiți'
                ],
                detailedSteps: [
                    {
                        phase: 'Implementare',
                        steps: [
                            'Dezvoltare protocol comunicație',
                            'Implementare comportamente coordonate',
                            'Sistem de evitare coliziuni',
                            'Optimizare cooperare',
                            'Testare scenarii multiple'
                        ]
                    }
                ]
            }
        ]
    },
    advanced: {
        title: 'Proiecte Expert (Săptămânile 9-12)',
        list: [
            {
                name: 'Fabrică Inteligentă în Miniatură',
                description: 'Dezvoltarea unui sistem complet automatizat care simulează o linie de producție industrială.',
                difficulty: 'Expert',
                duration: '5 ședințe',
                concepts: [
                    'Automatizare industrială',
                    'Integrare sisteme complexe',
                    'Machine Learning elementar',
                    'Control calitate',
                    'Monitorizare proces'
                ],
                detailedSteps: [
                    {
                        phase: 'Dezvoltare',
                        steps: [
                            'Proiectare linie producție',
                            'Implementare control automat',
                            'Sistem detectare erori',
                            'Optimizare flux producție',
                            'Integrare monitorizare'
                        ]
                    }
                ]
            }
        ]
    }
},

curriculum: {
    structure: {
        duration: '12 săptămâni',
        sessionsPerWeek: '1-2 sesiuni',
        sessionLength: '1.5 - 2 ore',
        maxGroupSize: 'maxim 15 copii',
        groupDetails: 'Lucru în echipe de 2-3 per kit',
        requirements: [
            'Vârsta recomandată: 10-14 ani',
            'Experiență anterioară cu robotică de bază',
            'Cunoștințe elementare de programare'
        ]
    },
    progression: {
        initial: {
            title: 'Fundamente Avansate',
            content: [
                'Introducere în Python pentru SPIKE Prime',
                'Design mecanic și construcție avansată',
                'Utilizare senzori complecși',
                'Algoritmi de control de bază',
                'Proiecte individuale'
            ]
        },
        development: {
            title: 'Dezvoltare și Competiție',
            content: [
                'Programare avansată în Python',
                'Strategii pentru competiții',
                'Optimizare și eficiență',
                'Proiecte de echipă',
                'Pregătire pentru provocări'
            ]
        },
        advanced: {
            title: 'Sisteme Complexe',
            content: [
                'Integrare sisteme multiple',
                'Automatizare avansată',
                'Proiecte complexe de echipă',
                'Documentație tehnică',
                'Prezentări finale'
            ]
        }
    }
}
},



{
  id: 'microbit',
  level: 'Nivel 3 - Avansat',
  title: 'BBC micro:bit',
  subtitle: 'Electronică și IoT (11-15 ani)',
  description: 'BBC micro:bit reprezintă puntea ideală între robotică și electronică digitală, introducând concepte IoT și programare embedded.\n\n' +
              'Acest modul acoperă:\n' +
              '• Programare Python pentru sisteme embedded\n' +
              '• Concepte de electronică digitală\n' +
              '• Internet of Things (IoT)\n' +
              '• Comunicații wireless și rețele de senzori\n' +
              '• Proiecte practice de automatizare\n\n' +
              'Platforma micro:bit permite dezvoltarea de proiecte diverse, de la sisteme simple de monitorizare până la rețele complexe de dispozitive IoT.',

  projects: {
      basic: {
          title: 'Introducere în micro:bit (Săptămânile 1-4)',
          list: [
              {
                  name: 'Device Interactiv',
                  description: 'Crearea unui dispozitiv interactiv utilizând afișajul LED, senzorii și comunicația radio a micro:bit-ului.',
                  difficulty: 'Intermediar',
                  duration: '2 ședințe',
                  concepts: [
                      'Programare Python pentru micro:bit',
                      'Utilizare display LED matriceal',
                      'Senzori integrati (accelerometru, busolă)',
                      'Comunicație radio între dispozitive',
                      'Gestionare evenimente',
                      'Interfețe interactive'
                  ],
                  detailedSteps: [
                      {
                          phase: 'Setup și Programare',
                          steps: [
                              'Configurare mediu dezvoltare Mu Editor',
                              'Testare componente micro:bit',
                              'Programare display LED',
                              'Implementare interacțiuni',
                              'Testare funcționalități'
                          ]
                      },
                      {
                          phase: 'Dezvoltare Funcționalități',
                          steps: [
                              'Creare animații LED personalizate',
                              'Implementare detecție mișcare',
                              'Adăugare funcții interactive',
                              'Configurare comunicație radio',
                              'Optimizare consum energie'
                          ]
                      }
                  ],
                  learningOutcomes: [
                      'Bazele programării Python pentru embedded',
                      'Interfațare cu hardware',
                      'Gestionare resurse limitate',
                      'Debugging hardware/software',
                      'Design interfețe utilizator simple'
                  ]
              },
              {
                  name: 'Stație Meteo Wireless',
                  description: 'Dezvoltarea unei rețele de senzori pentru monitorizarea condițiilor de mediu, cu transmitere wireless a datelor.',
                  difficulty: 'Intermediar-Avansat',
                  duration: '3 ședințe',
                  concepts: [
                      'Rețele de senzori',
                      'Comunicație radio P2P',
                      'Procesare și agregare date',
                      'Salvare și vizualizare date',
                      'Managementul energiei'
                  ],
                  detailedSteps: [
                      {
                          phase: 'Implementare',
                          steps: [
                              'Setup senzori mediu',
                              'Configurare rețea radio',
                              'Programare colectare date',
                              'Implementare vizualizare',
                              'Testare sistem complet'
                          ]
                      }
                  ]
              }
          ]
      },

      intermediate: {
        title: 'Proiecte IoT și Rețele (Săptămânile 5-8)',
        list: [
            {
                name: 'Smart Home Control',
                description: 'Dezvoltarea unui sistem de automatizare pentru casă inteligentă folosind multiple dispozitive micro:bit.',
                difficulty: 'Avansat',
                duration: '4 ședințe',
                concepts: [
                    'Rețele mesh de senzori',
                    'Protocoale comunicație wireless',
                    'Automatizări complexe',
                    'Interfețe utilizator avansate',
                    'Gestionare evenimente multiple',
                    'Securitate de bază'
                ],
                detailedSteps: [
                    {
                        phase: 'Design Sistem',
                        steps: [
                            'Planificare arhitectură rețea',
                            'Setup noduri senzori',
                            'Configurare hub central',
                            'Implementare protocoale comunicație',
                            'Dezvoltare sistem control'
                        ]
                    },
                    {
                        phase: 'Programare',
                        steps: [
                            'Dezvoltare software noduri',
                            'Programare hub central',
                            'Implementare automatizări',
                            'Creare interfață control',
                            'Testare și optimizare'
                        ]
                    }
                ],
                learningOutcomes: [
                    'Arhitectură sisteme distribuite',
                    'Programare rețele de senzori',
                    'Managementul datelor',
                    'Protocoale IoT',
                    'Securitate de bază'
                ]
            },
            {
                name: 'Data Logger Avansat',
                description: 'Sistem de colectare și analiză date cu multiple puncte de măsurare și vizualizare în timp real.',
                difficulty: 'Avansat',
                duration: '3 ședințe',
                concepts: [
                    'Colectare date distribuită',
                    'Stocare și procesare date',
                    'Vizualizare în timp real',
                    'Analiză statistică',
                    'Export și raportare'
                ],
                detailedSteps: [
                    {
                        phase: 'Dezvoltare',
                        steps: [
                            'Implementare sistem colectare',
                            'Dezvoltare bază de date locală',
                            'Creare dashboard vizualizare',
                            'Implementare analiză',
                            'Sistem de alertare'
                        ]
                    }
                ]
            }
        ]
    },
    advanced: {
        title: 'Proiecte Complexe IoT (Săptămânile 9-12)',
        list: [
            {
                name: 'IoT Gateway și Cloud Integration',
                description: 'Dezvoltarea unui gateway IoT care conectează rețeaua de micro:bit-uri la servicii cloud pentru procesare și analiză avansată.',
                difficulty: 'Expert',
                duration: '4 ședințe',
                concepts: [
                    'Integrare cloud',
                    'APIs și web services',
                    'Securitate IoT',
                    'Procesare date avansată',
                    'Vizualizare și analiză cloud',
                    'Managementul dispozitivelor'
                ],
                detailedSteps: [
                    {
                        phase: 'Arhitectură și Implementare',
                        steps: [
                            'Design arhitectură sistem',
                            'Implementare gateway',
                            'Integrare servicii cloud',
                            'Dezvoltare API-uri',
                            'Implementare securitate',
                            'Testare și monitorizare'
                        ]
                    }
                ]
            }
        ]
    }
},

curriculum: {
    structure: {
        duration: '12 săptămâni',
        sessionsPerWeek: '1-2 sesiuni',
        sessionLength: '1,5 - 2 ore',
        maxGroupSize: 'maxim 15 copii',
        groupDetails: 'Lucru individual și în echipe mici',
        requirements: [
            'Vârsta recomandată: 11-15 ani',
            'Cunoștințe de bază Python',
            'Înțelegere concepte electronice simple'
        ]
    },
    progression: {
        initial: {
            title: 'Fundamente micro:bit și IoT',
            content: [
                'Introducere în micro:bit și Python',
                'Bazele electronicii digitale',
                'Senzori și actuatori',
                'Comunicație wireless de bază',
                'Primele proiecte IoT'
            ]
        },
        development: {
            title: 'Dezvoltare IoT Avansată',
            content: [
                'Rețele de senzori complexe',
                'Protocoale comunicație',
                'Automatizări IoT',
                'Procesare date distribuită',
                'Securitate în IoT'
            ]
        },
        advanced: {
            title: 'Sisteme IoT Complexe',
            content: [
                'Integrare cloud și APIs',
                'Managementul rețelelor IoT',
                'Analiza și vizualizarea datelor',
                'Proiecte practice complexe',
                'Documentație tehnică'
            ]
        }
    }
}
},



{
  id: 'arduino',
  level: 'Nivel 3 - Avansat',
  title: 'Arduino',
  subtitle: 'Robotică și Electronică Avansată (12-16 ani)',
  description: 'Arduino reprezintă platforma perfectă pentru învățarea aprofundată a electronicii și programării embedded, oferind posibilități nelimitate de dezvoltare.\n\n' +
              'În acest modul avansat, elevii vor explora:\n' +
              '• Programare C++ pentru sisteme embedded\n' +
              '• Electronică digitală și analogică avansată\n' +
              '• Design și implementare circuite\n' +
              '• Integrare senzori și actuatori complecși\n' +
              '• Dezvoltare proiecte hardware complexe\n\n' +
              'Platforma Arduino permite dezvoltarea de la zero a proiectelor, oferind control complet asupra hardware-ului și software-ului.',

  projects: {
      basic: {
          title: 'Fundamente Arduino (Săptămânile 1-4)',
          list: [
              {
                  name: 'Sistem de Monitorizare Mediu',
                  description: 'Dezvoltarea unui sistem complex de monitorizare a mediului cu multiple tipuri de senzori și display LCD.',
                  difficulty: 'Intermediar-Avansat',
                  duration: '3 ședințe',
                  concepts: [
                      'Bazele Arduino și C++',
                      'Interfațare senzori analogici/digitali',
                      'Comunicație I2C/SPI',
                      'Display LCD',
                      'Procesare date senzori',
                      'Calibrare și precizie'
                  ],
                  detailedSteps: [
                      {
                          phase: 'Hardware',
                          steps: [
                              'Design circuit pe breadboard',
                              'Conectare senzori multipli',
                              'Integrare display LCD',
                              'Testare conexiuni',
                              'Validare circuit'
                          ]
                      },
                      {
                          phase: 'Software',
                          steps: [
                              'Setup librării necesare',
                              'Implementare citire senzori',
                              'Procesare și filtrare date',
                              'Afișare informații LCD',
                              'Optimizare cod'
                          ]
                      }
                  ],
                  learningOutcomes: [
                      'Electronică practică',
                      'Programare C++ pentru Arduino',
                      'Debugging hardware/software',
                      'Procesare date senzori',
                      'Design interfețe utilizator'
                  ]
              }
          ]
      },

      intermediate: {
        title: 'Proiecte Robotică Avansată (Săptămânile 5-8)',
        list: [
            {
                name: 'Robot cu Sistem de Vedere',
                description: 'Dezvoltarea unui robot autonom care poate detecta, urmări și interacționa cu obiecte folosind procesare de imagine.',
                difficulty: 'Avansat',
                duration: '4 ședințe',
                concepts: [
                    'Procesare imagini',
                    'Control servomotoare',
                    'Algoritmi de tracking',
                    'PID control',
                    'Sistem de navigație',
                    'Integrare cameră'
                ],
                detailedSteps: [
                    {
                        phase: 'Hardware Setup',
                        steps: [
                            'Asamblare șasiu robot',
                            'Integrare cameră și servomotoare',
                            'Setup sistem motoare',
                            'Conectare senzori auxiliari',
                            'Testare componente'
                        ]
                    },
                    {
                        phase: 'Software',
                        steps: [
                            'Implementare procesare imagine',
                            'Dezvoltare algoritmi urmărire',
                            'Programare control mișcare',
                            'Integrare sistem complet',
                            'Optimizare performanță'
                        ]
                    }
                ],
                learningOutcomes: [
                    'Computer Vision de bază',
                    'Control motoare avansat',
                    'Algoritmi de navigație',
                    'Integrare sisteme complexe',
                    'Optimizare resurse'
                ]
            },
            {
                name: 'Braț Robotic cu Feedback',
                description: 'Construcția unui braț robotic precis cu multiple grade de libertate și feedback de poziție și forță.',
                difficulty: 'Avansat',
                duration: '4 ședințe',
                concepts: [
                    'Cinematică și dinamică',
                    'Control precis servomotoare',
                    'Senzori de forță',
                    'Encodere poziție',
                    'Interfață control',
                    'Path planning'
                ],
                detailedSteps: [
                    {
                        phase: 'Dezvoltare',
                        steps: [
                            'Design mecanic braț',
                            'Integrare servomotoare',
                            'Implementare senzori',
                            'Calibrare sistem',
                            'Testare precizie'
                        ]
                    }
                ]
            }
        ]
    },
    advanced: {
        title: 'Proiecte Expert (Săptămânile 9-12)',
        list: [
            {
                name: 'Quadcopter DIY',
                description: 'Construcția și programarea unui drone cu stabilizare automată și telemetrie.',
                difficulty: 'Expert',
                duration: '5 ședințe',
                concepts: [
                    'Control în timp real',
                    'Stabilizare PID',
                    'IMU și senzori de zbor',
                    'Comunicație radio',
                    'Telemetrie',
                    'Siguranță și failsafe'
                ],
                detailedSteps: [
                    {
                        phase: 'Hardware',
                        steps: [
                            'Asamblare frame',
                            'Setup sistem propulsie',
                            'Integrare controller zbor',
                            'Configurare radio control',
                            'Testare sisteme'
                        ]
                    },
                    {
                        phase: 'Software și Calibrare',
                        steps: [
                            'Programare controller zbor',
                            'Calibrare senzori',
                            'Setup PID control',
                            'Implementare funcții siguranță',
                            'Testare în condiții controlate'
                        ]
                    }
                ]
            }
        ]
    }
},

curriculum: {
    structure: {
        duration: '12 săptămâni',
        sessionsPerWeek: '1-2 sesiuni',
        sessionLength: '1.5 ore',
        maxGroupSize: 'maxim 15 copii',
        groupDetails: 'Lucru individual la proiecte',
        requirements: [
            'Vârsta recomandată: 12-16 ani',
            'Experiență anterioară cu electronică',
            'Cunoștințe programare C++ de bază',
            'Înțelegerea conceptelor de electronică digitală'
        ]
    },
    progression: {
        initial: {
            title: 'Fundamente Arduino',
            content: [
                'Programare C++ pentru Arduino',
                'Electronică digitală și analogică',
                'Interfațare senzori',
                'Comunicație serială',
                'Debugging hardware'
            ]
        },
        development: {
            title: 'Dezvoltare Robotică',
            content: [
                'Sisteme de control complex',
                'Integrare senzori avansați',
                'Algoritmi de control',
                'Proiecte robotice',
                'Optimizare sistem'
            ]
        },
        advanced: {
            title: 'Proiecte Complexe',
            content: [
                'Sisteme în timp real',
                'Control multicorp',
                'Telemetrie și monitorizare',
                'Proiecte personalizate',
                'Documentație tehnică'
            ]
        }
    }
}
}

]