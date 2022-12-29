import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "Flex2": {
      "callbacks": {}
    },
    "Div6": {
      "callbacks": {}
    },
    "Flex6": {
      "callbacks": {}
    },
    "Div16": {
      "callbacks": {}
    },
    "Flex16": {
      "callbacks": {}
    },
    "Flex17": {
      "callbacks": {}
    },
    "Div20": {
      "callbacks": {}
    },
    "Flex18": {
      "callbacks": {}
    },
    "Flex9": {
      "callbacks": {}
    },
    "Flex19": {
      "callbacks": {}
    },
    "Flex20": {
      "callbacks": {}
    },
    "Flex21": {
      "callbacks": {}
    },
    "Flex31": {
      "callbacks": {}
    },
    "Flex33": {
      "callbacks": {}
    },
    "Flex34": {
      "callbacks": {}
    },
    "Flex35": {
      "callbacks": {}
    },
    "Flex37": {
      "callbacks": {}
    },
    "Flex38": {
      "callbacks": {}
    },
    "Flex39": {
      "callbacks": {}
    },
    "Flex40": {
      "callbacks": {}
    },
    "Flex41": {
      "callbacks": {}
    },
    "Flex42": {
      "callbacks": {}
    },
    "Flex43": {
      "callbacks": {}
    },
    "Flex44": {
      "callbacks": {}
    },
    "Flex45": {
      "callbacks": {}
    },
    "Flex46": {
      "callbacks": {}
    },
    "TextBox6": {
      "custom": {
        "text": "PORTFOLIO"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox16": {
      "custom": {
        "text": "3) 10th"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox17": {
      "custom": {
        "text": "Sri Chaitanya Techno School | State Board | 2017"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox18": {
      "custom": {
        "text": "Percentage - 83.2%"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox27": {
      "custom": {
        "text": "An online examination website built with PHP /CSS / HTML5 /JS"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox31": {
      "custom": {
        "text": "Developed a mobile application using android studio which allows user to play the game"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1": {
      "custom": {
        "text": "A SRINIVAS PAVAN"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox7": {
      "custom": {
        "text": "-SOFTWARE DEVELOPER"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox3": {
      "custom": {
        "text": "* Linkedin- www.linkedin.com/in/a-srinivas-pavan-73b49223a"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox5": {
      "custom": {
        "text": "Phone:   9398295622"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link3": {
      "custom": {
        "text": "* GITHUB-github-https://github.com/ASPAVAN17 ",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox8": {
      "custom": {
        "text": "Education Qualifications:- "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox10": {
      "custom": {
        "text": "Sai Vidya Institute Of Technology | VTU | 2019-2023"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox9": {
      "custom": {
        "text": "1) B.E in Computer Science and engineering  "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox12": {
      "custom": {
        "text": "-CGPA: 7.92(till 6th sem)"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image3": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/ProfilePictureMaker.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox13": {
      "custom": {
        "text": "2) 12th"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox14": {
      "custom": {
        "text": "Sri Chaitanya Junior Kalasala | State Board | 2017-2019"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox15": {
      "custom": {
        "text": "Percentage - 81.8%"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox24": {
      "custom": {
        "text": "Technical Skills:"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Step1": {
      "custom": {
        "color": "#336699",
        "current": 8,
        "title": [
          "JAVA"
        ],
        "description": [
          "Intermediate"
        ]
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Step2": {
      "custom": {
        "color": "#f7042f",
        "current": 2,
        "title": [
          "Python"
        ],
        "description": [
          "Beginner"
        ]
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Step3": {
      "custom": {
        "color": "#336699",
        "current": 3,
        "title": [
          "Java Script"
        ],
        "description": [
          "Beginner"
        ]
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Step4": {
      "custom": {
        "color": "#a70505",
        "current": 4,
        "title": [
          "HTML5"
        ],
        "description": [
          "Intermediate"
        ]
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Step5": {
      "custom": {
        "color": "#336699",
        "current": 5,
        "title": [
          "CSS"
        ],
        "description": [
          "Intermediate"
        ]
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Step6": {
      "custom": {
        "color": "#ff0000",
        "current": 6,
        "title": [
          "MySQL"
        ],
        "description": [
          "Intermediate"
        ]
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox25": {
      "custom": {
        "text": "Projects :"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox26": {
      "custom": {
        "text": "1) Online Examination Platform"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox28": {
      "custom": {
        "text": "2) DICE GAME APPLICATION"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox32": {
      "custom": {
        "text": "3)Atom Simulation"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox34": {
      "custom": {
        "text": "Developed a application using C++ which allows user to understand the simulation of the elements"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox35": {
      "custom": {
        "text": "Extra Curricular Activities:"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox36": {
      "custom": {
        "text": "* Participated and Volunteered in NSS Camp which was organized by Avisa Charitable Trust Rural Development Program. "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox37": {
      "custom": {
        "text": "* Member and Office bearer in IEEE"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox38": {
      "custom": {
        "text": "* Volunteered in IEEE Events conducted in college."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox39": {
      "custom": {
        "text": "Hobbies:"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Accordion1": {
      "custom": {
        "title": [
          "CRICKET"
        ],
        "description": [],
        "open": []
      },
      "callbacks": {}
    },
    "Accordion2": {
      "custom": {
        "title": [
          "FOOTBALL"
        ],
        "description": [],
        "open": []
      },
      "callbacks": {}
    },
    "Accordion3": {
      "custom": {
        "title": [
          "COOKING"
        ],
        "description": [],
        "open": []
      },
      "callbacks": {}
    },
    "Accordion4": {
      "custom": {
        "title": [
          "TRAVELLING"
        ],
        "description": [],
        "open": []
      },
      "callbacks": {}
    }
  },
  "portfolio": {}
}};

useStore.setState(desktopModeProps);

export default useStore;
