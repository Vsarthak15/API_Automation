$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GetAPI.feature");
formatter.feature({
  "line": 1,
  "name": "Agoda Test",
  "description": "",
  "id": "agoda-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Validate \"\u003cvalue\u003e\" with page parameter",
  "description": "",
  "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-page-parameter",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@All-API"
    },
    {
      "line": 3,
      "name": "@Page"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I add the url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I add parameter \"\u003cparam1\u003e\" with \"\u003cparam_val\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I execute the API",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I validate \"Resultcode\" with \"200\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-page-parameter;",
  "rows": [
    {
      "cells": [
        "value",
        "param1",
        "param_val"
      ],
      "line": 11,
      "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-page-parameter;;1"
    },
    {
      "cells": [
        "postive case with value 1",
        "pages",
        "1"
      ],
      "line": 12,
      "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-page-parameter;;2"
    },
    {
      "cells": [
        "negative case with value 20000",
        "pages",
        "20000"
      ],
      "line": 13,
      "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-page-parameter;;3"
    },
    {
      "cells": [
        "negative case with value !@",
        "pages",
        "!@"
      ],
      "line": 14,
      "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-page-parameter;;4"
    },
    {
      "cells": [
        "negative case with value 2abc",
        "pages",
        "2abc"
      ],
      "line": 15,
      "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-page-parameter;;5"
    },
    {
      "cells": [
        "negative case with value xyz",
        "pages",
        "xyz"
      ],
      "line": 16,
      "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-page-parameter;;6"
    },
    {
      "cells": [
        "negative case with value -10",
        "pages",
        "-10"
      ],
      "line": 17,
      "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-page-parameter;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Validate \"postive case with value 1\" with page parameter",
  "description": "",
  "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-page-parameter;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Page"
    },
    {
      "line": 3,
      "name": "@All-API"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I add the url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I add parameter \"pages\" with \"1\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I execute the API",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I validate \"Resultcode\" with \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.iAddTheurl()"
});
formatter.result({
  "duration": 93194500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pages",
      "offset": 17
    },
    {
      "val": "1",
      "offset": 30
    }
  ],
  "location": "StepDef.iAddParameters(String,String)"
});
formatter.result({
  "duration": 2161600,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 1833736800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Resultcode",
      "offset": 12
    },
    {
      "val": "200",
      "offset": 30
    }
  ],
  "location": "StepDef.iValidateResponse(String,String)"
});
formatter.result({
  "duration": 66600,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Validate \"negative case with value 20000\" with page parameter",
  "description": "",
  "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-page-parameter;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Page"
    },
    {
      "line": 3,
      "name": "@All-API"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I add the url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I add parameter \"pages\" with \"20000\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I execute the API",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I validate \"Resultcode\" with \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.iAddTheurl()"
});
formatter.result({
  "duration": 74500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pages",
      "offset": 17
    },
    {
      "val": "20000",
      "offset": 30
    }
  ],
  "location": "StepDef.iAddParameters(String,String)"
});
formatter.result({
  "duration": 74100,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 1001540500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Resultcode",
      "offset": 12
    },
    {
      "val": "200",
      "offset": 30
    }
  ],
  "location": "StepDef.iValidateResponse(String,String)"
});
formatter.result({
  "duration": 52300,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Validate \"negative case with value !@\" with page parameter",
  "description": "",
  "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-page-parameter;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Page"
    },
    {
      "line": 3,
      "name": "@All-API"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I add the url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I add parameter \"pages\" with \"!@\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I execute the API",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I validate \"Resultcode\" with \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.iAddTheurl()"
});
formatter.result({
  "duration": 49500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pages",
      "offset": 17
    },
    {
      "val": "!@",
      "offset": 30
    }
  ],
  "location": "StepDef.iAddParameters(String,String)"
});
formatter.result({
  "duration": 52200,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 984390300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Resultcode",
      "offset": 12
    },
    {
      "val": "200",
      "offset": 30
    }
  ],
  "location": "StepDef.iValidateResponse(String,String)"
});
formatter.result({
  "duration": 56000,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Validate \"negative case with value 2abc\" with page parameter",
  "description": "",
  "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-page-parameter;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Page"
    },
    {
      "line": 3,
      "name": "@All-API"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I add the url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I add parameter \"pages\" with \"2abc\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I execute the API",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I validate \"Resultcode\" with \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.iAddTheurl()"
});
formatter.result({
  "duration": 87300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pages",
      "offset": 17
    },
    {
      "val": "2abc",
      "offset": 30
    }
  ],
  "location": "StepDef.iAddParameters(String,String)"
});
formatter.result({
  "duration": 88600,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 992106700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Resultcode",
      "offset": 12
    },
    {
      "val": "200",
      "offset": 30
    }
  ],
  "location": "StepDef.iValidateResponse(String,String)"
});
formatter.result({
  "duration": 55600,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Validate \"negative case with value xyz\" with page parameter",
  "description": "",
  "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-page-parameter;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Page"
    },
    {
      "line": 3,
      "name": "@All-API"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I add the url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I add parameter \"pages\" with \"xyz\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I execute the API",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I validate \"Resultcode\" with \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.iAddTheurl()"
});
formatter.result({
  "duration": 51100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pages",
      "offset": 17
    },
    {
      "val": "xyz",
      "offset": 30
    }
  ],
  "location": "StepDef.iAddParameters(String,String)"
});
formatter.result({
  "duration": 62300,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 996403000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Resultcode",
      "offset": 12
    },
    {
      "val": "200",
      "offset": 30
    }
  ],
  "location": "StepDef.iValidateResponse(String,String)"
});
formatter.result({
  "duration": 54200,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Validate \"negative case with value -10\" with page parameter",
  "description": "",
  "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-page-parameter;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Page"
    },
    {
      "line": 3,
      "name": "@All-API"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I add the url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I add parameter \"pages\" with \"-10\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I execute the API",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I validate \"Resultcode\" with \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.iAddTheurl()"
});
formatter.result({
  "duration": 52400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pages",
      "offset": 17
    },
    {
      "val": "-10",
      "offset": 30
    }
  ],
  "location": "StepDef.iAddParameters(String,String)"
});
formatter.result({
  "duration": 61900,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 961933300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Resultcode",
      "offset": 12
    },
    {
      "val": "200",
      "offset": 30
    }
  ],
  "location": "StepDef.iValidateResponse(String,String)"
});
formatter.result({
  "duration": 55100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Validate \"\u003cvalue\u003e\" with page parameter",
  "description": "",
  "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-page-parameter",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@All-API"
    },
    {
      "line": 19,
      "name": "@Tags"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I add the url",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I add parameter \"\u003cparam1\u003e\" with \"\u003cparam_val\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I execute the API",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I validate \"Resultcode\" with \"200\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-page-parameter;",
  "rows": [
    {
      "cells": [
        "value",
        "param1",
        "param_val"
      ],
      "line": 27,
      "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-page-parameter;;1"
    },
    {
      "cells": [
        "postive case with value love-happiness",
        "tags",
        "love%7Chappiness"
      ],
      "line": 28,
      "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-page-parameter;;2"
    },
    {
      "cells": [
        "postive case with value technology,famous-quotes",
        "tags",
        "technology,famous-quotes"
      ],
      "line": 29,
      "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-page-parameter;;3"
    },
    {
      "cells": [
        "negative case with value 20000",
        "tags",
        "20000"
      ],
      "line": 30,
      "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-page-parameter;;4"
    },
    {
      "cells": [
        "negative case with value !@",
        "tags",
        "!@"
      ],
      "line": 31,
      "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-page-parameter;;5"
    },
    {
      "cells": [
        "negative case with value 2abc",
        "tags",
        "2abc"
      ],
      "line": 32,
      "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-page-parameter;;6"
    },
    {
      "cells": [
        "negative case with value xyz",
        "tags",
        "xyz"
      ],
      "line": 33,
      "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-page-parameter;;7"
    },
    {
      "cells": [
        "negative case with value -10",
        "tags",
        "-10"
      ],
      "line": 34,
      "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-page-parameter;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 28,
  "name": "Validate \"postive case with value love-happiness\" with page parameter",
  "description": "",
  "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-page-parameter;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@Tags"
    },
    {
      "line": 19,
      "name": "@All-API"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I add the url",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I add parameter \"tags\" with \"love%7Chappiness\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I execute the API",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I validate \"Resultcode\" with \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.iAddTheurl()"
});
formatter.result({
  "duration": 110100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tags",
      "offset": 17
    },
    {
      "val": "love%7Chappiness",
      "offset": 29
    }
  ],
  "location": "StepDef.iAddParameters(String,String)"
});
formatter.result({
  "duration": 116600,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 967895800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Resultcode",
      "offset": 12
    },
    {
      "val": "200",
      "offset": 30
    }
  ],
  "location": "StepDef.iValidateResponse(String,String)"
});
formatter.result({
  "duration": 54100,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Validate \"postive case with value technology,famous-quotes\" with page parameter",
  "description": "",
  "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-page-parameter;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@Tags"
    },
    {
      "line": 19,
      "name": "@All-API"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I add the url",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I add parameter \"tags\" with \"technology,famous-quotes\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I execute the API",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I validate \"Resultcode\" with \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.iAddTheurl()"
});
formatter.result({
  "duration": 52100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tags",
      "offset": 17
    },
    {
      "val": "technology,famous-quotes",
      "offset": 29
    }
  ],
  "location": "StepDef.iAddParameters(String,String)"
});
formatter.result({
  "duration": 72700,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 975227500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Resultcode",
      "offset": 12
    },
    {
      "val": "200",
      "offset": 30
    }
  ],
  "location": "StepDef.iValidateResponse(String,String)"
});
formatter.result({
  "duration": 60700,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Validate \"negative case with value 20000\" with page parameter",
  "description": "",
  "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-page-parameter;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@Tags"
    },
    {
      "line": 19,
      "name": "@All-API"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I add the url",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I add parameter \"tags\" with \"20000\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I execute the API",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I validate \"Resultcode\" with \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.iAddTheurl()"
});
formatter.result({
  "duration": 80100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tags",
      "offset": 17
    },
    {
      "val": "20000",
      "offset": 29
    }
  ],
  "location": "StepDef.iAddParameters(String,String)"
});
formatter.result({
  "duration": 76800,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 977750500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Resultcode",
      "offset": 12
    },
    {
      "val": "200",
      "offset": 30
    }
  ],
  "location": "StepDef.iValidateResponse(String,String)"
});
formatter.result({
  "duration": 56900,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Validate \"negative case with value !@\" with page parameter",
  "description": "",
  "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-page-parameter;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@Tags"
    },
    {
      "line": 19,
      "name": "@All-API"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I add the url",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I add parameter \"tags\" with \"!@\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I execute the API",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I validate \"Resultcode\" with \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.iAddTheurl()"
});
formatter.result({
  "duration": 55200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tags",
      "offset": 17
    },
    {
      "val": "!@",
      "offset": 29
    }
  ],
  "location": "StepDef.iAddParameters(String,String)"
});
formatter.result({
  "duration": 60700,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 958576500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Resultcode",
      "offset": 12
    },
    {
      "val": "200",
      "offset": 30
    }
  ],
  "location": "StepDef.iValidateResponse(String,String)"
});
formatter.result({
  "duration": 54900,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Validate \"negative case with value 2abc\" with page parameter",
  "description": "",
  "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-page-parameter;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@Tags"
    },
    {
      "line": 19,
      "name": "@All-API"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I add the url",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I add parameter \"tags\" with \"2abc\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I execute the API",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I validate \"Resultcode\" with \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.iAddTheurl()"
});
formatter.result({
  "duration": 50600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tags",
      "offset": 17
    },
    {
      "val": "2abc",
      "offset": 29
    }
  ],
  "location": "StepDef.iAddParameters(String,String)"
});
formatter.result({
  "duration": 64500,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 953373500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Resultcode",
      "offset": 12
    },
    {
      "val": "200",
      "offset": 30
    }
  ],
  "location": "StepDef.iValidateResponse(String,String)"
});
formatter.result({
  "duration": 66400,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Validate \"negative case with value xyz\" with page parameter",
  "description": "",
  "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-page-parameter;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@Tags"
    },
    {
      "line": 19,
      "name": "@All-API"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I add the url",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I add parameter \"tags\" with \"xyz\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I execute the API",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I validate \"Resultcode\" with \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.iAddTheurl()"
});
formatter.result({
  "duration": 118600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tags",
      "offset": 17
    },
    {
      "val": "xyz",
      "offset": 29
    }
  ],
  "location": "StepDef.iAddParameters(String,String)"
});
formatter.result({
  "duration": 74300,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 970407700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Resultcode",
      "offset": 12
    },
    {
      "val": "200",
      "offset": 30
    }
  ],
  "location": "StepDef.iValidateResponse(String,String)"
});
formatter.result({
  "duration": 58400,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Validate \"negative case with value -10\" with page parameter",
  "description": "",
  "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-page-parameter;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@Tags"
    },
    {
      "line": 19,
      "name": "@All-API"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I add the url",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I add parameter \"tags\" with \"-10\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I execute the API",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I validate \"Resultcode\" with \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.iAddTheurl()"
});
formatter.result({
  "duration": 56100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tags",
      "offset": 17
    },
    {
      "val": "-10",
      "offset": 29
    }
  ],
  "location": "StepDef.iAddParameters(String,String)"
});
formatter.result({
  "duration": 82700,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 977453600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Resultcode",
      "offset": 12
    },
    {
      "val": "200",
      "offset": 30
    }
  ],
  "location": "StepDef.iValidateResponse(String,String)"
});
formatter.result({
  "duration": 56600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 37,
  "name": "Validate \"\u003cvalue\u003e\" with page parameter",
  "description": "",
  "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-page-parameter",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@All-API"
    },
    {
      "line": 36,
      "name": "@Authors"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "I add the url",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I add parameter \"\u003cparam1\u003e\" with \"\u003cparam_val\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I execute the API",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I validate \"Resultcode\" with \"200\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 43,
  "name": "",
  "description": "",
  "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-page-parameter;",
  "rows": [
    {
      "cells": [
        "value",
        "param1",
        "param_val"
      ],
      "line": 44,
      "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-page-parameter;;1"
    },
    {
      "cells": [
        "postive case with value albert-einstein",
        "author",
        "albert-einstein"
      ],
      "line": 45,
      "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-page-parameter;;2"
    },
    {
      "cells": [
        "postive case with value asd@-eins232$3n",
        "author",
        "asd@-eins232$3n"
      ],
      "line": 46,
      "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-page-parameter;;3"
    },
    {
      "cells": [
        "negative case with value 20000",
        "author",
        "20000"
      ],
      "line": 47,
      "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-page-parameter;;4"
    },
    {
      "cells": [
        "negative case with value !@",
        "author",
        "!@"
      ],
      "line": 48,
      "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-page-parameter;;5"
    },
    {
      "cells": [
        "negative case with value 2abc",
        "author",
        "2abc"
      ],
      "line": 49,
      "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-page-parameter;;6"
    },
    {
      "cells": [
        "negative case with value xyz",
        "author",
        "xyz"
      ],
      "line": 50,
      "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-page-parameter;;7"
    },
    {
      "cells": [
        "negative case with value -10",
        "author",
        "-10"
      ],
      "line": 51,
      "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-page-parameter;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 45,
  "name": "Validate \"postive case with value albert-einstein\" with page parameter",
  "description": "",
  "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-page-parameter;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@Authors"
    },
    {
      "line": 36,
      "name": "@All-API"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "I add the url",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I add parameter \"author\" with \"albert-einstein\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I execute the API",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I validate \"Resultcode\" with \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.iAddTheurl()"
});
formatter.result({
  "duration": 84600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "author",
      "offset": 17
    },
    {
      "val": "albert-einstein",
      "offset": 31
    }
  ],
  "location": "StepDef.iAddParameters(String,String)"
});
formatter.result({
  "duration": 93400,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 968933200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Resultcode",
      "offset": 12
    },
    {
      "val": "200",
      "offset": 30
    }
  ],
  "location": "StepDef.iValidateResponse(String,String)"
});
formatter.result({
  "duration": 55200,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Validate \"postive case with value asd@-eins232$3n\" with page parameter",
  "description": "",
  "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-page-parameter;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@Authors"
    },
    {
      "line": 36,
      "name": "@All-API"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "I add the url",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I add parameter \"author\" with \"asd@-eins232$3n\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I execute the API",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I validate \"Resultcode\" with \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.iAddTheurl()"
});
formatter.result({
  "duration": 55900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "author",
      "offset": 17
    },
    {
      "val": "asd@-eins232$3n",
      "offset": 31
    }
  ],
  "location": "StepDef.iAddParameters(String,String)"
});
formatter.result({
  "duration": 61500,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 974586300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Resultcode",
      "offset": 12
    },
    {
      "val": "200",
      "offset": 30
    }
  ],
  "location": "StepDef.iValidateResponse(String,String)"
});
formatter.result({
  "duration": 54500,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Validate \"negative case with value 20000\" with page parameter",
  "description": "",
  "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-page-parameter;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@Authors"
    },
    {
      "line": 36,
      "name": "@All-API"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "I add the url",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I add parameter \"author\" with \"20000\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I execute the API",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I validate \"Resultcode\" with \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.iAddTheurl()"
});
formatter.result({
  "duration": 320300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "author",
      "offset": 17
    },
    {
      "val": "20000",
      "offset": 31
    }
  ],
  "location": "StepDef.iAddParameters(String,String)"
});
formatter.result({
  "duration": 247100,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 970478400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Resultcode",
      "offset": 12
    },
    {
      "val": "200",
      "offset": 30
    }
  ],
  "location": "StepDef.iValidateResponse(String,String)"
});
formatter.result({
  "duration": 329400,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Validate \"negative case with value !@\" with page parameter",
  "description": "",
  "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-page-parameter;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@Authors"
    },
    {
      "line": 36,
      "name": "@All-API"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "I add the url",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I add parameter \"author\" with \"!@\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I execute the API",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I validate \"Resultcode\" with \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.iAddTheurl()"
});
formatter.result({
  "duration": 66700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "author",
      "offset": 17
    },
    {
      "val": "!@",
      "offset": 31
    }
  ],
  "location": "StepDef.iAddParameters(String,String)"
});
formatter.result({
  "duration": 92500,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 958121000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Resultcode",
      "offset": 12
    },
    {
      "val": "200",
      "offset": 30
    }
  ],
  "location": "StepDef.iValidateResponse(String,String)"
});
formatter.result({
  "duration": 63300,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Validate \"negative case with value 2abc\" with page parameter",
  "description": "",
  "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-page-parameter;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@Authors"
    },
    {
      "line": 36,
      "name": "@All-API"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "I add the url",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I add parameter \"author\" with \"2abc\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I execute the API",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I validate \"Resultcode\" with \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.iAddTheurl()"
});
formatter.result({
  "duration": 44300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "author",
      "offset": 17
    },
    {
      "val": "2abc",
      "offset": 31
    }
  ],
  "location": "StepDef.iAddParameters(String,String)"
});
formatter.result({
  "duration": 47600,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 979716000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Resultcode",
      "offset": 12
    },
    {
      "val": "200",
      "offset": 30
    }
  ],
  "location": "StepDef.iValidateResponse(String,String)"
});
formatter.result({
  "duration": 61200,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Validate \"negative case with value xyz\" with page parameter",
  "description": "",
  "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-page-parameter;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@Authors"
    },
    {
      "line": 36,
      "name": "@All-API"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "I add the url",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I add parameter \"author\" with \"xyz\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I execute the API",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I validate \"Resultcode\" with \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.iAddTheurl()"
});
formatter.result({
  "duration": 60900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "author",
      "offset": 17
    },
    {
      "val": "xyz",
      "offset": 31
    }
  ],
  "location": "StepDef.iAddParameters(String,String)"
});
formatter.result({
  "duration": 64400,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 944521700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Resultcode",
      "offset": 12
    },
    {
      "val": "200",
      "offset": 30
    }
  ],
  "location": "StepDef.iValidateResponse(String,String)"
});
formatter.result({
  "duration": 54600,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Validate \"negative case with value -10\" with page parameter",
  "description": "",
  "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-page-parameter;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@Authors"
    },
    {
      "line": 36,
      "name": "@All-API"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "I add the url",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I add parameter \"author\" with \"-10\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I execute the API",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I validate \"Resultcode\" with \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.iAddTheurl()"
});
formatter.result({
  "duration": 55300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "author",
      "offset": 17
    },
    {
      "val": "-10",
      "offset": 31
    }
  ],
  "location": "StepDef.iAddParameters(String,String)"
});
formatter.result({
  "duration": 58100,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 991032800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Resultcode",
      "offset": 12
    },
    {
      "val": "200",
      "offset": 30
    }
  ],
  "location": "StepDef.iValidateResponse(String,String)"
});
formatter.result({
  "duration": 50000,
  "status": "passed"
});
});