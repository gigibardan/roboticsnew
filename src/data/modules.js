export const modules = [
    {
      id: 'level1-lego',
      level: 'Nivel 1 - Începător',
      title: 'LEGO Education SPIKE Essential & WeDo 2.0',
      subtitle: 'Introducere în Robotică (7-9 ani)',
      description: 'Primul pas în lumea roboticii folosind LEGO Education - o abordare prietenoasă și intuitivă',
      
      kitInfo: {
        title: 'Informații Kit-uri',
        options: [
          {
            name: 'LEGO Education SPIKE Essential',
            price: '~350-400€',
            contains: [
              'Hub programabil cu LED-uri și Bluetooth',
              '449 piese LEGO pentru construcție',
              'Motor mediu',
              'Senzor de culoare',
              'Senzor de distanță',
              'LED-uri și matrice LED colorată',
              'Cablu de conectare',
              'Cutie de sortare cu tavă'
            ],
            advantages: [
              'Calitate LEGO garantată',
              'Software foarte intuitiv',
              'Suport educațional excelent',
              'Materiale curriculare incluse',
              'Durabilitate ridicată'
            ],
            disadvantages: [
              'Cost mai ridicat',
              'Limitat la ecosistemul LEGO',
              'Mai puține posibilități de extindere'
            ]
          },
          {
            name: 'LEGO WeDo 2.0',
            price: '~200-250€',
            contains: [
              'Hub Bluetooth Smart',
              'Motor mediu',
              'Senzor de mișcare',
              'Senzor de înclinare',
              '280+ piese LEGO',
              'Cutie de sortare'
            ],
            advantages: [
              'Mai accesibil ca preț',
              'Perfect pentru începători',
              'Ușor de utilizat',
              'Software simplu'
            ],
            disadvantages: [
              'Mai puține componente',
              'Limitări în complexitatea proiectelor',
              'Un singur motor'
            ]
          }
        ],
        recommendedSetup: {
          small: {
            title: 'Setup Recomandat pentru Grupă Mică (8-12 copii)',
            items: [
              '4x SPIKE Essential SAU 6x WeDo 2.0',
              '4-6 tablete/laptopuri pentru programare',
              'Spațiu de lucru: minim 30mp',
              'Mese mari pentru lucru în echipă',
              'Dulap pentru depozitare'
            ],
            estimatedCost: 'SPIKE Essential: ~1600€ | WeDo 2.0: ~1400€'
          },
          large: {
            title: 'Setup Recomandat pentru Grupă Mare (12-16 copii)',
            items: [
              '6x SPIKE Essential SAU 8x WeDo 2.0',
              '6-8 tablete/laptopuri pentru programare',
              'Spațiu de lucru: minim 40mp',
              'Mese configurabile pentru lucru în echipă',
              'Sistem de proiecție',
              'Dulap pentru depozitare'
            ],
            estimatedCost: 'SPIKE Essential: ~2400€ | WeDo 2.0: ~1800€'
          }
        }
      },
  
      projects: {
        basic: {
          title: 'Proiecte de Bază (Primele 4-6 săptămâni)',
          list: [
            {
              name: 'Robot Dansator Interactiv',
              description: 'Robot care dansează în funcție de muzică și lumini, introducând concepte de bază în programare și mișcare.',
              difficulty: 'Începător',
              duration: '2-3 ședințe',
              concepts: ['Control motor', 'LED-uri', 'Secvențe', 'Sunete'],
              detailedSteps: [
                {
                  phase: 'Construcție',
                  steps: [
                    'Asamblarea bazei mobile cu două motoare',
                    'Adăugarea LED-urilor pentru efecte vizuale',
                    'Montarea hub-ului în poziție stabilă',
                    'Personalizarea aspectului robotului'
                  ]
                },
                {
                  phase: 'Programare',
                  steps: [
                    'Crearea secvențelor de mișcare de bază (înainte/înapoi, rotații)',
                    'Programarea efectelor LED pentru diferite stări',
                    'Adăugarea sunetelor și sincronizarea cu mișcările',
                    'Implementarea buclelor pentru repetarea secvențelor'
                  ]
                }
              ],
              learningOutcomes: [
                'Înțelegerea relației între comenzi și acțiuni',
                'Noțiuni de secvențialitate în programare',
                'Coordonarea mișcărilor cu efecte vizuale și audio',
                'Bazele programării cu blocuri vizuale'
              ],
              extensions: [
                'Adăugarea de mișcări complexe',
                'Sincronizare cu muzică externă',
                'Dans în oglindă cu alt robot',
                'Efecte de lumini personalizate'
              ]
            },
            {
              name: 'Animăluțe Robotice Interactive',
              description: 'Crearea unor animale robotice care reacționează la mediul înconjurător folosind senzori.',
              difficulty: 'Începător',
              duration: '2-3 ședințe',
              concepts: ['Senzori', 'Reacții', 'Comportament', 'Interactivitate'],
              detailedSteps: [
                {
                  phase: 'Construcție',
                  steps: [
                    'Alegerea și construirea scheletului de bază',
                    'Montarea senzorului de mișcare',
                    'Adăugarea elementelor mobile (cap, coadă)',
                    'Personalizarea aspectului'
                  ]
                },
                {
                  phase: 'Programare',
                  steps: [
                    'Programarea reacțiilor de bază la detectarea mișcării',
                    'Adăugarea de sunete specifice animalului',
                    'Crearea pattern-urilor de mișcare naturale',
                    'Implementarea stărilor de "somn" și "activ"'
                  ]
                }
              ],
              learningOutcomes: [
                'Înțelegerea funcționării senzorilor',
                'Logică condițională simplă',
                'Programarea comportamentelor interactive',
                'Creativitate în design'
              ]
            }
          ]
        },
        intermediate: {
          title: 'Proiecte Intermediare (Săptămânile 7-10)',
          list: [
            {
              name: 'Vehicul Autonom de Explorare',
              description: 'Robot mobil care poate naviga autonom și evita obstacole, colectând "date" din mediul înconjurător.',
              difficulty: 'Intermediar',
              duration: '3-4 ședințe',
              concepts: ['Senzori multipli', 'Logică avansată', 'Navigare', 'Colectare date'],
              detailedSteps: [
                {
                  phase: 'Construcție',
                  steps: [
                    'Asamblarea platformei mobile robuste',
                    'Montarea senzorilor (distanță, culoare)',
                    'Optimizarea poziției senzorilor',
                    'Adăugarea unui sistem de marcare a traseului'
                  ]
                },
                {
                  phase: 'Programare',
                  steps: [
                    'Algoritm de evitare obstacole',
                    'Urmărirea liniilor și marcajelor',
                    'Implementarea diferitelor moduri de operare',
                    'Sistem de logging al datelor colectate'
                  ]
                }
              ]
            }
          ]
        },
        advanced: {
          title: 'Proiecte Avansate (Săptămânile 11-14)',
          list: [
            {
              name: 'Stație Meteo Robotică',
              description: 'Un sistem automatizat care monitorizează și afișează diferite condiții folosind senzorii disponibili.',
              difficulty: 'Avansat',
              duration: '4 ședințe',
              concepts: ['Multi-senzori', 'Display', 'Logging', 'Automatizare'],
              detailedSteps: [
                {
                  phase: 'Construcție',
                  steps: [
                    'Construirea structurii de bază stabilă',
                    'Montarea matricei LED pentru afișaj',
                    'Poziționarea optimă a senzorilor',
                    'Sistem de rotire pentru scanare'
                  ]
                },
                {
                  phase: 'Programare',
                  steps: [
                    'Citirea și procesarea datelor de la senzori',
                    'Crearea interfeței de afișare',
                    'Implementarea sistemului de alertă',
                    'Programarea rutinelor de măsurare automată'
                  ]
                }
              ]
            }
          ]
        }
      },
  
      curriculum: {
        structure: {
          duration: '14-16 săptămâni',
          sessionsPerWeek: '1-2 sesiuni',
          sessionLength: '1.5 ore',
          groupSize: '8-12 copii',
          teacherStudent: '1:6 ratio recomandat'
        },
        progression: {
          initial: {
            title: 'Faza Inițială (4 săptămâni)',
            content: [
              'Introducere în robotică și kituri',
              'Construcție de bază',
              'Programare vizuală simplă',
              'Primele proiecte simple'
            ]
          },
          development: {
            title: 'Faza de Dezvoltare (6 săptămâni)',
            content: [
              'Proiecte intermediare',
              'Lucru cu senzori',
              'Programare mai complexă',
              'Rezolvare probleme'
            ]
          },
          advanced: {
            title: 'Faza Avansată (4-6 săptămâni)',
            content: [
              'Proiecte complexe',
              'Combinare concepte',
              'Creativitate și inovație',
              'Prezentări finale'
            ]
          }
        }
      },
  
      evaluation: {
        methods: [
          'Evaluare continuă prin observație',
          'Portfolio de proiecte',
          'Prezentări',
          'Mini-competiții prietenoase'
        ],
        criteria: [
          'Înțelegerea conceptelor',
          'Capacitatea de rezolvare a problemelor',
          'Creativitate în proiecte',
          'Lucru în echipă'
        ]
      }
    },

    {
        id: 'level1-mbot',
        level: 'Nivel 1 - Începător',
        title: 'mBot Explorer',
        subtitle: 'Robotică Practică (8-12 ani)',
        description: 'Introducere în robotică folosind platforma mBot - o abordare practică și accesibilă',
        
        kitInfo: {
          options: [
            {
              name: 'mBot v1.1',
              price: '~80-100€',
              contains: [
                'Placă mCore bazată pe Arduino',
                '2 motoare DC',
                'Senzor urmărire linie',
                'Senzor ultrasonic',
                'LED-uri RGB programabile',
                'Buzzer pentru sunete',
                'Telecomandă IR',
                'Conexiune Bluetooth/2.4G',
                'Carcasă și șasiu din aluminiu',
                'Roți și componente de asamblare'
              ],
              advantages: [
                'Cost accesibil',
                'Bazat pe Arduino - tranziție ușoară spre programare avansată',
                'Ușor de asamblat',
                'Multiple senzori incluși',
                'Comunitate mare de utilizatori',
                'Posibilitate de extindere cu module adiționale'
              ],
              disadvantages: [
                'Calitate materiale mai redusă față de LEGO',
                'Documentație mai puțin detaliată',
                'Suport educațional mai limitat',
                'Poate necesita mici reparații ocazionale'
              ]
            },
            {
              name: 'mBot2',
              price: '~130-150€',
              contains: [
                'Procesor dual-core ESP32',
                'Gyroscop și accelerometru',
                'Senzori de lumină și sunet',
                '2 motoare cu encoder',
                'Matrice LED 12x8',
                'Senzor urmărire linie',
                'Conexiune Wi-Fi',
                'Baterie Li-Po reîncărcabilă',
                'Structură metalică îmbunătățită'
              ],
              advantages: [
                'Hardware mai performant',
                'Mai mulți senzori integrați',
                'Conectivitate Wi-Fi modernă',
                'Baterie reîncărcabilă inclusă',
                'Construcție mai robustă'
              ],
              disadvantages: [
                'Preț mai ridicat',
                'Complexitate mai mare pentru începători',
                'Necesită actualizări firmware',
                'Compatibilitate limitată cu versiunea anterioară'
              ]
            }
          ],
          recommendedSetup: {
            small: {
              title: 'Setup Recomandat pentru Grupă Mică (8-12 copii)',
              items: [
                '6x mBot (permite lucru în echipe de 2)',
                '6 laptopuri/tablete pentru programare',
                'Spațiu minim 25mp pentru activități',
                'Masă mare pentru asamblare',
                'Dulap pentru depozitare',
                'Set baterii reîncărcabile + încărcător'
              ],
              estimatedCost: 'Cu mBot v1.1: ~600€ | Cu mBot2: ~900€'
            },
            large: {
              title: 'Setup Recomandat pentru Grupă Mare (12-16 copii)',
              items: [
                '8x mBot',
                '8 laptopuri/tablete',
                'Spațiu minim 40mp',
                'Multiple mese de lucru',
                'Sistem proiecție',
                'Dulapuri depozitare',
                'Kit-uri rezervă componente'
              ],
              estimatedCost: 'Cu mBot v1.1: ~800€ | Cu mBot2: ~1200€'
            }
          }
        },
    
        projects: {
            basic: {
              title: 'Proiecte de Bază (Primele 4-6 săptămâni)',
              list: [
                {
                  name: 'Primul Contact cu mBot',
                  description: 'Introducere în controlul de bază al robotului și primele programe',
                  difficulty: 'Începător',
                  duration: '2 ședințe',
                  concepts: ['Control de bază', 'LED-uri', 'Sunete', 'Mișcare simplă'],
                  detailedSteps: [
                    {
                      phase: 'Asamblare',
                      steps: [
                        'Identificarea componentelor mBot',
                        'Asamblarea șasiului și roților',
                        'Montarea plăcii principale și senzorilor',
                        'Conectarea motoarelor și verificare'
                      ]
                    },
                    {
                      phase: 'Programare Inițială',
                      steps: [
                        'Instalare și configurare mBlock',
                        'Primul program - LED-uri și sunete',
                        'Control motoare - mișcări de bază',
                        'Testare și depanare'
                      ]
                    }
                  ],
                  learningOutcomes: [
                    'Înțelegerea componentelor robotului',
                    'Bazele programării vizuale',
                    'Control LED-uri și motoare',
                    'Depanare probleme simple'
                  ]
                },
                {
                  name: 'Robot Interactiv cu Telecomandă',
                  description: 'Control la distanță al robotului folosind telecomanda IR',
                  difficulty: 'Începător-Intermediar',
                  duration: '2-3 ședințe',
                  concepts: ['Control IR', 'Funcții', 'Variabile', 'Control motoare'],
                  detailedSteps: [
                    {
                      phase: 'Programare',
                      steps: [
                        'Configurarea receptorului IR',
                        'Programarea butoanelor de direcție',
                        'Adăugarea controalelor pentru viteze',
                        'Implementarea efectelor speciale (lumini, sunete)'
                      ]
                    },
                    {
                      phase: 'Testare și Optimizare',
                      steps: [
                        'Testarea comenzilor de bază',
                        'Calibrarea vitezelor',
                        'Adăugarea funcțiilor personalizate',
                        'Optimizarea controlului'
                      ]
                    }
                  ],
                  learningOutcomes: [
                    'Înțelegerea comunicării IR',
                    'Programare evenimente',
                    'Control precis al mișcării',
                    'Logică de programare'
                  ]
                }
              ]
            },
            intermediate: {
              title: 'Proiecte Intermediare (Săptămânile 7-10)',
              list: [
                {
                  name: 'Line Follower Avansat',
                  description: 'Robot care urmărește linii cu diferite complexități și ia decizii',
                  difficulty: 'Intermediar',
                  duration: '3 ședințe',
                  concepts: ['Senzor IR', 'Algoritmi', 'Control PID', 'Logică decizională'],
                  detailedSteps: [
                    {
                      phase: 'Programare de Bază',
                      steps: [
                        'Înțelegerea senzorului de linie',
                        'Implementare algoritm de bază',
                        'Calibrare senzori',
                        'Testare pe trasee simple'
                      ]
                    },
                    {
                      phase: 'Optimizare',
                      steps: [
                        'Implementare control PID',
                        'Gestionare intersecții',
                        'Optimizare viteză',
                        'Testare pe trasee complexe'
                      ]
                    }
                  ],
                  learningOutcomes: [
                    'Algoritmi de control',
                    'Calibrare senzori',
                    'Optimizare performanță',
                    'Rezolvare probleme complexe'
                  ]
                },
                {
                  name: 'Sistem de Evitare Obstacole',
                  description: 'Robot autonom care navighează și evită obstacole',
                  difficulty: 'Intermediar',
                  duration: '3 ședințe',
                  concepts: ['Senzor ultrasonic', 'Algoritmi', 'Logică', 'Autonomie'],
                  detailedSteps: [
                    {
                      phase: 'Programare',
                      steps: [
                        'Citire date senzor ultrasonic',
                        'Implementare algoritm de evitare',
                        'Adăugare comportamente complexe',
                        'Optimizare decizii'
                      ]
                    }
                  ]
                }
              ]
            },
            advanced: {
              title: 'Proiecte Avansate (Săptămânile 11-14)',
              list: [
                {
                  name: 'Robot Multi-Funcțional',
                  description: 'Robot cu multiple moduri de operare și funcții complexe',
                  difficulty: 'Avansat',
                  duration: '4 ședințe',
                  concepts: ['Moduri multiple', 'Integrare senzori', 'Algoritmi complecși', 'State machine'],
                  detailedSteps: [
                    {
                      phase: 'Dezvoltare',
                      steps: [
                        'Implementare sistem de moduri',
                        'Integrare toate tipurile de senzori',
                        'Creare interfață utilizator',
                        'Optimizare și testare'
                      ]
                    }
                  ],
                  learningOutcomes: [
                    'Programare avansată',
                    'Gestionare complexitate',
                    'Integrare sisteme',
                    'Debug și optimizare'
                  ]
                },
                {
                  name: 'Sistem de Securitate Mobil',
                  description: 'Robot de patrulare cu detecție și alertare',
                  difficulty: 'Avansat',
                  duration: '3-4 ședințe',
                  concepts: ['Senzori multipli', 'Comunicație', 'Alertare', 'Autonomie'],
                  detailedSteps: [
                    {
                      phase: 'Implementare',
                      steps: [
                        'Sistem de patrulare autonom',
                        'Detecție și clasificare evenimente',
                        'Sistem de alertare',
                        'Logging și monitorizare'
                      ]
                    }
                  ]
                }
              ]
            }
          },
          curriculum: {
            structure: {
              duration: '14-16 săptămâni',
              sessionsPerWeek: '1-2 sesiuni',
              sessionLength: '1.5 ore',
              groupSize: '8-12 copii',
              teacherStudent: '1:6 ratio recomandat'
            },
            progression: {
              initial: {
                title: 'Faza Inițială (4 săptămâni)',
                content: [
                  'Introducere în robotică și platforma mBot',
                  'Asamblare și configurare inițială',
                  'Programare vizuală de bază în mBlock',
                  'Control de bază al robotului'
                ]
              },
              development: {
                title: 'Faza de Dezvoltare (6 săptămâni)',
                content: [
                  'Lucrul cu senzorii mBot',
                  'Programare intermediară',
                  'Proiecte de complexitate medie',
                  'Introducere în concepte Arduino'
                ]
              },
              advanced: {
                title: 'Faza Avansată (4-6 săptămâni)',
                content: [
                  'Proiecte complexe multi-senzor',
                  'Programare avansată',
                  'Introducere în code view (Arduino)',
                  'Personalizare și extindere proiecte'
                ]
              }
            }
          },
      
          evaluation: {
            methods: [
              'Evaluare continuă prin observație',
              'Proiecte practice individuale și în echipă',
              'Mini-hackathoane și provocări',
              'Prezentări demonstrative',
              'Portfolio digital cu proiecte'
            ],
            criteria: [
              'Înțelegerea și aplicarea conceptelor de robotică',
              'Capacitatea de rezolvare a problemelor tehnice',
              'Gândire algoritmică și logică',
              'Creativitate în dezvoltarea soluțiilor',
              'Documentarea și prezentarea proiectelor',
              'Lucru în echipă și comunicare'
            ]
          }
        }, // Închiderea modulului mBot

        {
            id: 'level2-advanced',
            level: 'Nivel 2 - Avansat',
            title: 'LEGO MINDSTORMS EV3 & SPIKE Prime',
            subtitle: 'Robotică Avansată (10-14 ani)',
            description: 'Platforme avansate pentru dezvoltarea de roboți complecși și învățarea programării',
        
            kitInfo: {
              options: [
                {
                  name: 'LEGO MINDSTORMS EV3 Education',
                  price: '~400-450€',
                  contains: [
                    'Brick programabil EV3 cu procesor ARM9',
                    '2x Motoare Mari',
                    '1x Motor Mediu',
                    'Senzor Giroscop',
                    'Senzor Ultrasonic',
                    'Senzor de Culoare',
                    '2x Senzori de Atingere',
                    '~540 piese LEGO Technic',
                    'Cutie de sortare cu tavă',
                    'Cabluri de conectare'
                  ],
                  advantages: [
                    'Foarte versatil și robust',
                    'Multiple limbaje de programare disponibile',
                    'Comunitate mare și resurse abundente',
                    'Perfect pentru competiții (FLL)',
                    'Compatibil cu piese LEGO Technic',
                    'Documentație extensivă'
                  ],
                  disadvantages: [
                    'Cel mai scump dintre toate opțiunile',
                    'Tehnologie mai veche (32-bit)',
                    'Conectivitate limitată (Bluetooth vechi)',
                    'Software poate fi încet pe PC-uri mai vechi'
                  ]
                },
                {
                  name: 'LEGO SPIKE Prime',
                  price: '~350-400€',
                  contains: [
                    'Hub programabil cu 6 porturi',
                    '2x Motoare Mari',
                    '1x Motor Mediu',
                    'Senzor de Culoare',
                    'Senzor de Distanță',
                    'Senzor de Forță',
                    '528 piese LEGO',
                    'Cutie de sortare',
                    'Hub reîncărcabil cu Bluetooth'
                  ],
                  advantages: [
                    'Hardware mai modern',
                    'Conectivitate mai bună',
                    'Interfață de programare modernă',
                    'Mai ușor de utilizat inițial',
                    'Baterie reîncărcabilă inclusă',
                    'Design mai prietenos'
                  ],
                  disadvantages: [
                    'Mai puține resurse disponibile',
                    'Mai puțin folosit în competiții',
                    'Mai puțin versatil pentru proiecte avansate',
                    'Preț ridicat'
                  ]
                }
              ],
              recommendedSetup: {
                small: {
                  title: 'Setup Recomandat pentru Grupă Mică (8-12 copii)',
                  items: [
                    '4x EV3/SPIKE Prime (lucru în echipe de 2-3)',
                    '4-6 laptopuri pentru programare',
                    'Spațiu minim 40mp pentru testare',
                    'Mese mari pentru construcție',
                    'Zone dedicate pentru testare',
                    'Dulap securizat pentru depozitare'
                  ],
                  estimatedCost: 'Cu EV3: ~1800€ | Cu SPIKE Prime: ~1600€'
                },
                large: {
                  title: 'Setup Recomandat pentru Grupă Mare (12-16 copii)',
                  items: [
                    '6x EV3/SPIKE Prime',
                    '6-8 laptopuri',
                    'Spațiu minim 60mp',
                    'Mese configurabile pentru echipe',
                    'Zonă competiții/demonstrații',
                    'Sistem proiecție',
                    'Dulapuri pentru proiecte în lucru'
                  ],
                  estimatedCost: 'Cu EV3: ~2700€ | Cu SPIKE Prime: ~2400€'
                }
              }
            },
        
            projects: {
                basic: {
                  title: 'Proiecte de Bază Nivel 2 (Primele 4-6 săptămâni)',
                  list: [
                    {
                      name: 'Vehicul Autonom Inteligent',
                      description: 'Robot mobil cu multiple moduri de navigare și evitare avansată a obstacolelor',
                      difficulty: 'Intermediar',
                      duration: '3-4 ședințe',
                      concepts: ['Giroscop', 'PID Control', 'Fuziune senzori', 'State machine'],
                      detailedSteps: [
                        {
                          phase: 'Construcție',
                          steps: [
                            'Asamblare șasiu robust cu 2 motoare mari',
                            'Montare senzori (ultrasonic, giroscop, culoare)',
                            'Optimizare poziționare pentru centru de greutate',
                            'Testare stabilitate și manevrabilitate'
                          ]
                        },
                        {
                          phase: 'Programare',
                          steps: [
                            'Implementare control precis mișcare folosind giroscop',
                            'Dezvoltare algoritm PID pentru urmărire linie',
                            'Programare evitare obstacole cu predicție',
                            'Creare sistem de navigare multi-mod'
                          ]
                        }
                      ],
                      learningOutcomes: [
                        'Înțelegerea controlului PID',
                        'Fuziunea datelor de la multipli senzori',
                        'Implementare algoritmi complecși',
                        'Optimizare performanță robot'
                      ]
                    },
                    {
                      name: 'Braț Robotic cu Control Precis',
                      description: 'Braț robotic programabil cu multiple grade de libertate și control precis',
                      difficulty: 'Intermediar-Avansat',
                      duration: '4 ședințe',
                      concepts: ['Cinematică', 'Control precis', 'Coordonate', 'Feedback'],
                      detailedSteps: [
                        {
                          phase: 'Construcție',
                          steps: [
                            'Asamblare structură stabilă cu 3 motoare',
                            'Implementare sistem de angrenaje pentru precizie',
                            'Adăugare senzor de atingere pentru calibrare',
                            'Optimizare contrabalans și stabilitate'
                          ]
                        },
                        {
                          phase: 'Programare',
                          steps: [
                            'Calibrare automată la pornire',
                            'Programare mișcări de bază coordonate',
                            'Implementare control prin coordonate',
                            'Dezvoltare secvențe de manipulare'
                          ]
                        }
                      ]
                    }
                  ]
                },
                intermediate: {
                  title: 'Proiecte Intermediare (Săptămânile 7-10)',
                  list: [
                    {
                      name: 'Sistem de Sortare Automat',
                      description: 'Robot care poate sorta obiecte după culoare, dimensiune sau greutate',
                      difficulty: 'Avansat',
                      duration: '4-5 ședințe',
                      concepts: ['Automatizare', 'Procesare paralelă', 'Clasificare', 'Optimizare'],
                      detailedSteps: [
                        {
                          phase: 'Construcție',
                          steps: [
                            'Construire sistem de alimentare',
                            'Implementare mecanism de scanare',
                            'Creare sistem de sortare cu multiple căi',
                            'Optimizare flux materiale'
                          ]
                        },
                        {
                          phase: 'Programare',
                          steps: [
                            'Dezvoltare algoritm de clasificare',
                            'Implementare logică de sortare',
                            'Optimizare timpi și precizie',
                            'Adăugare sistem de logging'
                          ]
                        }
                      ]
                    },
                    {
                      name: 'Robot pentru Competiții',
                      description: 'Robot versatil pentru diferite provocări de tip competiție',
                      difficulty: 'Avansat',
                      duration: '5-6 ședințe',
                      concepts: ['Design modular', 'Strategii', 'Optimizare', 'Fiabilitate'],
                      detailedSteps: [
                        {
                          phase: 'Design și Construcție',
                          steps: [
                            'Analiză cerințe competiție',
                            'Design modular adaptabil',
                            'Implementare sisteme redundante',
                            'Testare și optimizare'
                          ]
                        }
                      ]
                    }
                  ]
                },
                advanced: {
                  title: 'Proiecte Avansate (Săptămânile 11-14)',
                  list: [
                    {
                      name: 'Sistem Multi-Robot Coordonat',
                      description: 'Sistem de roboți care lucrează împreună pentru îndeplinirea unor sarcini complexe',
                      difficulty: 'Expert',
                      duration: '6 ședințe',
                      concepts: ['Comunicare', 'Coordonare', 'Algoritmi distribuiți', 'Sincronizare'],
                      detailedSteps: [
                        {
                          phase: 'Implementare',
                          steps: [
                            'Dezvoltare protocol comunicare',
                            'Implementare algoritmi coordonare',
                            'Creare sistem central de control',
                            'Optimizare performanță sistem'
                          ]
                        }
                      ]
                    }
                  ]
                }
              },

              curriculum: {
                structure: {
                  duration: '14-16 săptămâni',
                  sessionsPerWeek: '2 sesiuni',
                  sessionLength: '2 ore',
                  groupSize: '8-12 copii',
                  teacherStudent: '1:6 ratio recomandat'
                },
                progression: {
                  initial: {
                    title: 'Faza Inițială (4 săptămâni)',
                    content: [
                      'Introducere în robotică avansată',
                      'Construcție și mecanică complexă',
                      'Programare structurată',
                      'Lucrul cu senzori multipli',
                      'Concepte de control precis',
                      'Fundamentele competițiilor robotice'
                    ]
                  },
                  development: {
                    title: 'Faza de Dezvoltare (6 săptămâni)',
                    content: [
                      'Algoritmi avansați de control',
                      'Implementare PID și giroscop',
                      'Proiecte autonome complexe', 
                      'Optimizare și eficiență',
                      'Pregătire pentru competiții',
                      'Documentare tehnică'
                    ]
                  },
                  advanced: {
                    title: 'Faza Avansată (4-6 săptămâni)',
                    content: [
                      'Sisteme multi-robot',
                      'Algoritmi customizați',
                      'Proiecte de echipă complexe',
                      'Participare la competiții',
                      'Dezvoltare strategii avansate',
                      'Prezentări tehnice'
                    ]
                  }
                }
              },
           
              evaluation: {
                methods: [
                  'Evaluare continuă prin proiecte practice',
                  'Participare la competiții interne și externe',
                  'Documentație tehnică a proiectelor',
                  'Prezentări și demonstrații',
                  'Portfolio digital extins',
                  'Evaluare inter-perechi'
                ],
                criteria: [
                  'Capacitatea de rezolvare probleme complexe',
                  'Implementarea algoritmilor avansați',
                  'Optimizarea și eficiența soluțiilor',
                  'Documentare și prezentare tehnică',
                  'Lucru în echipă și management proiect',
                  'Performanța în competiții',
                  'Inovație și creativitate în design'
                ]
              }
            } // închidere modul nivel 2
 
        ];
  