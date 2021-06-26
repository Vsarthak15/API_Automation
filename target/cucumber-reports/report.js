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
  "duration": 385221000,
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
  "duration": 3407900,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 1598257800,
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
  "duration": 217200,
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
  "duration": 179400,
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
  "duration": 252700,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 989264100,
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
  "duration": 126300,
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
  "duration": 238200,
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
  "duration": 133200,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 964236700,
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
  "duration": 103000,
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
  "duration": 106300,
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
  "duration": 94200,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 963321000,
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
  "duration": 105900,
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
  "duration": 191200,
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
  "duration": 157800,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 963509600,
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
  "duration": 3803800,
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
  "duration": 170600,
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
  "duration": 157400,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 1000102800,
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
  "duration": 110300,
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
  "duration": 192400,
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
  "duration": 137400,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 967911400,
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
  "duration": 98700,
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
  "duration": 179600,
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
  "duration": 247600,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 1000221600,
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
  "duration": 80900,
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
  "duration": 144700,
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
  "duration": 158600,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 962360700,
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
  "duration": 164600,
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
  "duration": 172300,
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
  "duration": 152100,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 971093500,
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
  "duration": 67600,
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
  "duration": 146500,
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
  "duration": 207600,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 976351500,
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
  "duration": 91700,
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
  "duration": 151300,
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
  "duration": 95000,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 982909200,
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
  "duration": 99900,
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
  "duration": 217400,
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
  "duration": 157700,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 971954000,
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
  "duration": 119900,
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
  "duration": 173100,
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
  "duration": 168000,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 1077404400,
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
  "duration": 67900,
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
  "duration": 228200,
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
  "duration": 155600,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 971800000,
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
  "duration": 112800,
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
  "duration": 633000,
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
  "duration": 448600,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 939774900,
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
  "duration": 527100,
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
  "duration": 85300,
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
  "duration": 75600,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 995670500,
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
  "duration": 102100,
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
  "duration": 85000,
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
  "duration": 83800,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 976514600,
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
  "duration": 101100,
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
  "duration": 126800,
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
  "duration": 91900,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 942040700,
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
  "duration": 101000,
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
  "duration": 147800,
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
  "duration": 136300,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 956398000,
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
  "duration": 78300,
  "status": "passed"
});
});