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
  "name": "Validate \"\u003cvalue\u003e\" with \"\u003cparam1\u003e\" parameter",
  "description": "",
  "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-\"\u003cparam1\u003e\"-parameter",
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
  "name": "I validate \"\u003cvalidate1\u003e\" with \"\u003cvalidate_val\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-\"\u003cparam1\u003e\"-parameter;",
  "rows": [
    {
      "cells": [
        "value",
        "param1",
        "param_val",
        "validate1",
        "validate_val"
      ],
      "line": 11,
      "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-\"\u003cparam1\u003e\"-parameter;;1"
    },
    {
      "cells": [
        "postive case with value 1",
        "pages",
        "1",
        "count",
        "20"
      ],
      "line": 12,
      "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-\"\u003cparam1\u003e\"-parameter;;2"
    },
    {
      "cells": [
        "negative case with value",
        "pages",
        "",
        "count",
        "20"
      ],
      "line": 13,
      "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-\"\u003cparam1\u003e\"-parameter;;3"
    },
    {
      "cells": [
        "negative case with value 20000",
        "pages",
        "20000",
        "count",
        "20"
      ],
      "line": 14,
      "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-\"\u003cparam1\u003e\"-parameter;;4"
    },
    {
      "cells": [
        "negative case with value !@",
        "pages",
        "!@",
        "count",
        "20"
      ],
      "line": 15,
      "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-\"\u003cparam1\u003e\"-parameter;;5"
    },
    {
      "cells": [
        "negative case with value 2abc",
        "pages",
        "2abc",
        "count",
        "20"
      ],
      "line": 16,
      "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-\"\u003cparam1\u003e\"-parameter;;6"
    },
    {
      "cells": [
        "negative case with value xyz",
        "pages",
        "xyz",
        "count",
        "20"
      ],
      "line": 17,
      "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-\"\u003cparam1\u003e\"-parameter;;7"
    },
    {
      "cells": [
        "negative case with value -10",
        "pages",
        "-10",
        "count",
        "20"
      ],
      "line": 18,
      "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-\"\u003cparam1\u003e\"-parameter;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Validate \"postive case with value 1\" with \"pages\" parameter",
  "description": "",
  "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-\"\u003cparam1\u003e\"-parameter;;2",
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
  "name": "I validate \"count\" with \"20\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.iAddTheurl()"
});
formatter.result({
  "duration": 91561399,
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
  "duration": 2102100,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 1873859900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "count",
      "offset": 12
    },
    {
      "val": "20",
      "offset": 25
    }
  ],
  "location": "StepDef.iValidateResponse(String,String)"
});
formatter.result({
  "duration": 203035200,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Validate \"negative case with value\" with \"pages\" parameter",
  "description": "",
  "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-\"\u003cparam1\u003e\"-parameter;;3",
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
  "name": "I add parameter \"pages\" with \"\"",
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
  "name": "I validate \"count\" with \"20\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.iAddTheurl()"
});
formatter.result({
  "duration": 89800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pages",
      "offset": 17
    },
    {
      "val": "",
      "offset": 30
    }
  ],
  "location": "StepDef.iAddParameters(String,String)"
});
formatter.result({
  "duration": 68300,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 1000856300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "count",
      "offset": 12
    },
    {
      "val": "20",
      "offset": 25
    }
  ],
  "location": "StepDef.iValidateResponse(String,String)"
});
formatter.result({
  "duration": 1148400,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Validate \"negative case with value 20000\" with \"pages\" parameter",
  "description": "",
  "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-\"\u003cparam1\u003e\"-parameter;;4",
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
  "name": "I validate \"count\" with \"20\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.iAddTheurl()"
});
formatter.result({
  "duration": 58399,
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
  "duration": 129300,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 990012200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "count",
      "offset": 12
    },
    {
      "val": "20",
      "offset": 25
    }
  ],
  "location": "StepDef.iValidateResponse(String,String)"
});
formatter.result({
  "duration": 859000,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Validate \"negative case with value !@\" with \"pages\" parameter",
  "description": "",
  "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-\"\u003cparam1\u003e\"-parameter;;5",
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
  "name": "I validate \"count\" with \"20\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.iAddTheurl()"
});
formatter.result({
  "duration": 84999,
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
  "duration": 65700,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 977970401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "count",
      "offset": 12
    },
    {
      "val": "20",
      "offset": 25
    }
  ],
  "location": "StepDef.iValidateResponse(String,String)"
});
formatter.result({
  "duration": 893101,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Validate \"negative case with value 2abc\" with \"pages\" parameter",
  "description": "",
  "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-\"\u003cparam1\u003e\"-parameter;;6",
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
  "name": "I validate \"count\" with \"20\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.iAddTheurl()"
});
formatter.result({
  "duration": 47200,
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
  "duration": 139001,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 975633401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "count",
      "offset": 12
    },
    {
      "val": "20",
      "offset": 25
    }
  ],
  "location": "StepDef.iValidateResponse(String,String)"
});
formatter.result({
  "duration": 846899,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Validate \"negative case with value xyz\" with \"pages\" parameter",
  "description": "",
  "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-\"\u003cparam1\u003e\"-parameter;;7",
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
  "name": "I validate \"count\" with \"20\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.iAddTheurl()"
});
formatter.result({
  "duration": 59500,
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
  "duration": 60899,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 984554801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "count",
      "offset": 12
    },
    {
      "val": "20",
      "offset": 25
    }
  ],
  "location": "StepDef.iValidateResponse(String,String)"
});
formatter.result({
  "duration": 907400,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Validate \"negative case with value -10\" with \"pages\" parameter",
  "description": "",
  "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-\"\u003cparam1\u003e\"-parameter;;8",
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
  "name": "I validate \"count\" with \"20\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.iAddTheurl()"
});
formatter.result({
  "duration": 46400,
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
  "duration": 110800,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 990420001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "count",
      "offset": 12
    },
    {
      "val": "20",
      "offset": 25
    }
  ],
  "location": "StepDef.iValidateResponse(String,String)"
});
formatter.result({
  "duration": 828100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "Validate \"\u003cvalue\u003e\" with \"\u003cparam1\u003e\" parameter",
  "description": "",
  "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-\"\u003cparam1\u003e\"-parameter",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@All-API"
    },
    {
      "line": 20,
      "name": "@Tags"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I add the url",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I add parameter \"\u003cparam1\u003e\" with \"\u003cparam_val\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I execute the API",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I validate \"\u003cvalidate1\u003e\" with \"\u003cvalidate_val\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-\"\u003cparam1\u003e\"-parameter;",
  "rows": [
    {
      "cells": [
        "value",
        "param1",
        "param_val",
        "validate1",
        "validate_val"
      ],
      "line": 28,
      "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-\"\u003cparam1\u003e\"-parameter;;1"
    },
    {
      "cells": [
        "postive case with value love-happiness",
        "tags",
        "love%7Chappiness",
        "count",
        "13"
      ],
      "line": 29,
      "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-\"\u003cparam1\u003e\"-parameter;;2"
    },
    {
      "cells": [
        "postive case with value technology,famous-quotes",
        "tags",
        "technology,famous-quotes",
        "count",
        "4"
      ],
      "line": 30,
      "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-\"\u003cparam1\u003e\"-parameter;;3"
    },
    {
      "cells": [
        "negative case with value",
        "tags",
        "",
        "count",
        "20"
      ],
      "line": 31,
      "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-\"\u003cparam1\u003e\"-parameter;;4"
    },
    {
      "cells": [
        "negative case with value 20000",
        "tags",
        "20000",
        "count",
        "0"
      ],
      "line": 32,
      "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-\"\u003cparam1\u003e\"-parameter;;5"
    },
    {
      "cells": [
        "negative case with value !@",
        "tags",
        "!@",
        "count",
        "0"
      ],
      "line": 33,
      "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-\"\u003cparam1\u003e\"-parameter;;6"
    },
    {
      "cells": [
        "negative case with value 2abc",
        "tags",
        "2abc",
        "count",
        "0"
      ],
      "line": 34,
      "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-\"\u003cparam1\u003e\"-parameter;;7"
    },
    {
      "cells": [
        "negative case with value xyz",
        "tags",
        "xyz",
        "count",
        "0"
      ],
      "line": 35,
      "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-\"\u003cparam1\u003e\"-parameter;;8"
    },
    {
      "cells": [
        "negative case with value -10",
        "tags",
        "-10",
        "count",
        "0"
      ],
      "line": 36,
      "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-\"\u003cparam1\u003e\"-parameter;;9"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 29,
  "name": "Validate \"postive case with value love-happiness\" with \"tags\" parameter",
  "description": "",
  "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-\"\u003cparam1\u003e\"-parameter;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@Tags"
    },
    {
      "line": 20,
      "name": "@All-API"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I add the url",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I add parameter \"tags\" with \"love%7Chappiness\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I execute the API",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I validate \"count\" with \"13\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.iAddTheurl()"
});
formatter.result({
  "duration": 51800,
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
  "duration": 75699,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 959168800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "count",
      "offset": 12
    },
    {
      "val": "13",
      "offset": 25
    }
  ],
  "location": "StepDef.iValidateResponse(String,String)"
});
formatter.result({
  "duration": 986800,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Validate \"postive case with value technology,famous-quotes\" with \"tags\" parameter",
  "description": "",
  "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-\"\u003cparam1\u003e\"-parameter;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@Tags"
    },
    {
      "line": 20,
      "name": "@All-API"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I add the url",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I add parameter \"tags\" with \"technology,famous-quotes\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I execute the API",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I validate \"count\" with \"4\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.iAddTheurl()"
});
formatter.result({
  "duration": 54700,
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
  "duration": 62800,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 968899100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "count",
      "offset": 12
    },
    {
      "val": "4",
      "offset": 25
    }
  ],
  "location": "StepDef.iValidateResponse(String,String)"
});
formatter.result({
  "duration": 377600,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Validate \"negative case with value\" with \"tags\" parameter",
  "description": "",
  "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-\"\u003cparam1\u003e\"-parameter;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@Tags"
    },
    {
      "line": 20,
      "name": "@All-API"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I add the url",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I add parameter \"tags\" with \"\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I execute the API",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I validate \"count\" with \"20\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.iAddTheurl()"
});
formatter.result({
  "duration": 81000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tags",
      "offset": 17
    },
    {
      "val": "",
      "offset": 29
    }
  ],
  "location": "StepDef.iAddParameters(String,String)"
});
formatter.result({
  "duration": 62201,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 976514900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "count",
      "offset": 12
    },
    {
      "val": "20",
      "offset": 25
    }
  ],
  "location": "StepDef.iValidateResponse(String,String)"
});
formatter.result({
  "duration": 757400,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Validate \"negative case with value 20000\" with \"tags\" parameter",
  "description": "",
  "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-\"\u003cparam1\u003e\"-parameter;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@Tags"
    },
    {
      "line": 20,
      "name": "@All-API"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I add the url",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I add parameter \"tags\" with \"20000\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I execute the API",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I validate \"count\" with \"0\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.iAddTheurl()"
});
formatter.result({
  "duration": 46499,
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
  "duration": 68600,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 976257800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "count",
      "offset": 12
    },
    {
      "val": "0",
      "offset": 25
    }
  ],
  "location": "StepDef.iValidateResponse(String,String)"
});
formatter.result({
  "duration": 457700,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Validate \"negative case with value !@\" with \"tags\" parameter",
  "description": "",
  "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-\"\u003cparam1\u003e\"-parameter;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@Tags"
    },
    {
      "line": 20,
      "name": "@All-API"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I add the url",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I add parameter \"tags\" with \"!@\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I execute the API",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I validate \"count\" with \"0\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.iAddTheurl()"
});
formatter.result({
  "duration": 150900,
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
  "duration": 90200,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 970300300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "count",
      "offset": 12
    },
    {
      "val": "0",
      "offset": 25
    }
  ],
  "location": "StepDef.iValidateResponse(String,String)"
});
formatter.result({
  "duration": 302599,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Validate \"negative case with value 2abc\" with \"tags\" parameter",
  "description": "",
  "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-\"\u003cparam1\u003e\"-parameter;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@Tags"
    },
    {
      "line": 20,
      "name": "@All-API"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I add the url",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I add parameter \"tags\" with \"2abc\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I execute the API",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I validate \"count\" with \"0\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.iAddTheurl()"
});
formatter.result({
  "duration": 98400,
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
  "duration": 63700,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 973953000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "count",
      "offset": 12
    },
    {
      "val": "0",
      "offset": 25
    }
  ],
  "location": "StepDef.iValidateResponse(String,String)"
});
formatter.result({
  "duration": 250000,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Validate \"negative case with value xyz\" with \"tags\" parameter",
  "description": "",
  "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-\"\u003cparam1\u003e\"-parameter;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@Tags"
    },
    {
      "line": 20,
      "name": "@All-API"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I add the url",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I add parameter \"tags\" with \"xyz\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I execute the API",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I validate \"count\" with \"0\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.iAddTheurl()"
});
formatter.result({
  "duration": 76200,
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
  "duration": 62300,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 959792999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "count",
      "offset": 12
    },
    {
      "val": "0",
      "offset": 25
    }
  ],
  "location": "StepDef.iValidateResponse(String,String)"
});
formatter.result({
  "duration": 273100,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Validate \"negative case with value -10\" with \"tags\" parameter",
  "description": "",
  "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-\"\u003cparam1\u003e\"-parameter;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@Tags"
    },
    {
      "line": 20,
      "name": "@All-API"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I add the url",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I add parameter \"tags\" with \"-10\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I execute the API",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I validate \"count\" with \"0\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.iAddTheurl()"
});
formatter.result({
  "duration": 52500,
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
  "duration": 57200,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 970501200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "count",
      "offset": 12
    },
    {
      "val": "0",
      "offset": 25
    }
  ],
  "location": "StepDef.iValidateResponse(String,String)"
});
formatter.result({
  "duration": 426600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 39,
  "name": "Validate \"\u003cvalue\u003e\" with \"\u003cparam1\u003e\" parameter",
  "description": "",
  "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-\"\u003cparam1\u003e\"-parameter",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 38,
      "name": "@All-API"
    },
    {
      "line": 38,
      "name": "@Authors"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "I add the url",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "I add parameter \"\u003cparam1\u003e\" with \"\u003cparam_val\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I execute the API",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I validate \"\u003cvalidate1\u003e\" with \"\u003cvalidate_val\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 45,
  "name": "",
  "description": "",
  "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-\"\u003cparam1\u003e\"-parameter;",
  "rows": [
    {
      "cells": [
        "value",
        "param1",
        "param_val",
        "validate1",
        "validate_val"
      ],
      "line": 46,
      "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-\"\u003cparam1\u003e\"-parameter;;1"
    },
    {
      "cells": [
        "postive case with value albert-einstein",
        "author",
        "albert-einstein",
        "count",
        "20"
      ],
      "line": 47,
      "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-\"\u003cparam1\u003e\"-parameter;;2"
    },
    {
      "cells": [
        "postive case with value asd@-eins232$3n",
        "author",
        "asd@-eins232$3n",
        "count",
        "0"
      ],
      "line": 48,
      "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-\"\u003cparam1\u003e\"-parameter;;3"
    },
    {
      "cells": [
        "negative case with value",
        "author",
        "",
        "count",
        "20"
      ],
      "line": 49,
      "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-\"\u003cparam1\u003e\"-parameter;;4"
    },
    {
      "cells": [
        "negative case with value 20000",
        "author",
        "20000",
        "count",
        "0"
      ],
      "line": 50,
      "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-\"\u003cparam1\u003e\"-parameter;;5"
    },
    {
      "cells": [
        "negative case with value !@",
        "author",
        "!@",
        "count",
        "0"
      ],
      "line": 51,
      "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-\"\u003cparam1\u003e\"-parameter;;6"
    },
    {
      "cells": [
        "negative case with value 2abc",
        "author",
        "2abc",
        "count",
        "0"
      ],
      "line": 52,
      "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-\"\u003cparam1\u003e\"-parameter;;7"
    },
    {
      "cells": [
        "negative case with value xyz",
        "author",
        "xyz",
        "count",
        "0"
      ],
      "line": 53,
      "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-\"\u003cparam1\u003e\"-parameter;;8"
    },
    {
      "cells": [
        "negative case with value -10",
        "author",
        "-10",
        "count",
        "0"
      ],
      "line": 54,
      "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-\"\u003cparam1\u003e\"-parameter;;9"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 47,
  "name": "Validate \"postive case with value albert-einstein\" with \"author\" parameter",
  "description": "",
  "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-\"\u003cparam1\u003e\"-parameter;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 38,
      "name": "@Authors"
    },
    {
      "line": 38,
      "name": "@All-API"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "I add the url",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "I add parameter \"author\" with \"albert-einstein\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I execute the API",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I validate \"count\" with \"20\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.iAddTheurl()"
});
formatter.result({
  "duration": 399699,
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
  "duration": 367400,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 1006589600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "count",
      "offset": 12
    },
    {
      "val": "20",
      "offset": 25
    }
  ],
  "location": "StepDef.iValidateResponse(String,String)"
});
formatter.result({
  "duration": 1130801,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Validate \"postive case with value asd@-eins232$3n\" with \"author\" parameter",
  "description": "",
  "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-\"\u003cparam1\u003e\"-parameter;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 38,
      "name": "@Authors"
    },
    {
      "line": 38,
      "name": "@All-API"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "I add the url",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "I add parameter \"author\" with \"asd@-eins232$3n\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I execute the API",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I validate \"count\" with \"0\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.iAddTheurl()"
});
formatter.result({
  "duration": 119700,
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
  "duration": 105900,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 961516600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "count",
      "offset": 12
    },
    {
      "val": "0",
      "offset": 25
    }
  ],
  "location": "StepDef.iValidateResponse(String,String)"
});
formatter.result({
  "duration": 259401,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Validate \"negative case with value\" with \"author\" parameter",
  "description": "",
  "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-\"\u003cparam1\u003e\"-parameter;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 38,
      "name": "@Authors"
    },
    {
      "line": 38,
      "name": "@All-API"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "I add the url",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "I add parameter \"author\" with \"\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I execute the API",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I validate \"count\" with \"20\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.iAddTheurl()"
});
formatter.result({
  "duration": 49201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "author",
      "offset": 17
    },
    {
      "val": "",
      "offset": 31
    }
  ],
  "location": "StepDef.iAddParameters(String,String)"
});
formatter.result({
  "duration": 59500,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 995977100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "count",
      "offset": 12
    },
    {
      "val": "20",
      "offset": 25
    }
  ],
  "location": "StepDef.iValidateResponse(String,String)"
});
formatter.result({
  "duration": 552400,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Validate \"negative case with value 20000\" with \"author\" parameter",
  "description": "",
  "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-\"\u003cparam1\u003e\"-parameter;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 38,
      "name": "@Authors"
    },
    {
      "line": 38,
      "name": "@All-API"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "I add the url",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "I add parameter \"author\" with \"20000\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I execute the API",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I validate \"count\" with \"0\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.iAddTheurl()"
});
formatter.result({
  "duration": 64699,
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
  "duration": 129000,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 968948100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "count",
      "offset": 12
    },
    {
      "val": "0",
      "offset": 25
    }
  ],
  "location": "StepDef.iValidateResponse(String,String)"
});
formatter.result({
  "duration": 240201,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Validate \"negative case with value !@\" with \"author\" parameter",
  "description": "",
  "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-\"\u003cparam1\u003e\"-parameter;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 38,
      "name": "@Authors"
    },
    {
      "line": 38,
      "name": "@All-API"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "I add the url",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "I add parameter \"author\" with \"!@\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I execute the API",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I validate \"count\" with \"0\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.iAddTheurl()"
});
formatter.result({
  "duration": 96700,
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
  "duration": 68501,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 998677400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "count",
      "offset": 12
    },
    {
      "val": "0",
      "offset": 25
    }
  ],
  "location": "StepDef.iValidateResponse(String,String)"
});
formatter.result({
  "duration": 244399,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "Validate \"negative case with value 2abc\" with \"author\" parameter",
  "description": "",
  "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-\"\u003cparam1\u003e\"-parameter;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 38,
      "name": "@Authors"
    },
    {
      "line": 38,
      "name": "@All-API"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "I add the url",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "I add parameter \"author\" with \"2abc\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I execute the API",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I validate \"count\" with \"0\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.iAddTheurl()"
});
formatter.result({
  "duration": 41601,
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
  "duration": 46601,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 976618501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "count",
      "offset": 12
    },
    {
      "val": "0",
      "offset": 25
    }
  ],
  "location": "StepDef.iValidateResponse(String,String)"
});
formatter.result({
  "duration": 242200,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Validate \"negative case with value xyz\" with \"author\" parameter",
  "description": "",
  "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-\"\u003cparam1\u003e\"-parameter;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 38,
      "name": "@Authors"
    },
    {
      "line": 38,
      "name": "@All-API"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "I add the url",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "I add parameter \"author\" with \"xyz\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I execute the API",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I validate \"count\" with \"0\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.iAddTheurl()"
});
formatter.result({
  "duration": 82500,
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
  "duration": 61100,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 958972500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "count",
      "offset": 12
    },
    {
      "val": "0",
      "offset": 25
    }
  ],
  "location": "StepDef.iValidateResponse(String,String)"
});
formatter.result({
  "duration": 251300,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Validate \"negative case with value -10\" with \"author\" parameter",
  "description": "",
  "id": "agoda-test;validate-\"\u003cvalue\u003e\"-with-\"\u003cparam1\u003e\"-parameter;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 38,
      "name": "@Authors"
    },
    {
      "line": 38,
      "name": "@All-API"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "I add the url",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "I add parameter \"author\" with \"-10\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I execute the API",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I validate \"count\" with \"0\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.iAddTheurl()"
});
formatter.result({
  "duration": 102599,
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
  "duration": 59400,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.iExecuteAPI()"
});
formatter.result({
  "duration": 951037499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "count",
      "offset": 12
    },
    {
      "val": "0",
      "offset": 25
    }
  ],
  "location": "StepDef.iValidateResponse(String,String)"
});
formatter.result({
  "duration": 452000,
  "status": "passed"
});
});