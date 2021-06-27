Feature: Agoda Test

  @All-API @Page
  Scenario Outline: Validate "<value>" with "<param1>" parameter
    Given I add the url
    And I add parameter "<param1>" with "<param_val>"
    And I execute the API
    Then I validate "<validate1>" with "<validate_val>"

    Examples: 
      | value                          | param1 | param_val | validate1 | validate_val |
      | postive case with value 1      | pages  |         1 | count		  | 20					 |
      | negative case with value 20000 | pages  |     20000 | count		  | 20					 |
      | negative case with value !@    | pages  | !@        | count		  | 20					 |
      | negative case with value 2abc  | pages  | 2abc      | count		  | 20					 |
      | negative case with value xyz   | pages  | xyz       | count		  | 20					 |
      | negative case with value -10   | pages  |       -10 | count		  | 20					 |

  @All-API @Tags
  Scenario Outline: Validate "<value>" with "<param1>" parameter
    Given I add the url
    And I add parameter "<param1>" with "<param_val>"
    And I execute the API
    Then I validate "<validate1>" with "<validate_val>"

    Examples: 
      | value                                            | param1 | param_val                | validate1 | validate_val  |
      | postive case with value love-happiness           | tags   | love%7Chappiness         | count		  | 13					 |
      | postive case with value technology,famous-quotes | tags   | technology,famous-quotes | count		  | 4					   |
      | negative case with value 20000                   | tags   | 20000 									 | count		  | 0					   |
      | negative case with value !@                      | tags   | !@                       | count		  | 0					   |
      | negative case with value 2abc                    | tags   | 2abc                     | count		  | 0					   |
      | negative case with value xyz                     | tags   | xyz                      | count		  | 0					   |
      | negative case with value -10                     | tags   |                      -10 | count		  | 0					   |

  @All-API @Authors
  Scenario Outline: Validate "<value>" with "<param1>" parameter
    Given I add the url
    And I add parameter "<param1>" with "<param_val>"
    And I execute the API
   Then I validate "<validate1>" with "<validate_val>"

    Examples: 
      | value                                   | param1 | param_val       | validate1  | validate_val |
      | postive case with value albert-einstein | author | albert-einstein | count		  | 20					 |
      | postive case with value asd@-eins232$3n | author | asd@-eins232$3n | count		  | 0					 	 |
      | negative case with value 20000          | author |           20000 | count		  | 0					 	 |
      | negative case with value !@             | author | !@              | count		  | 0					   |
      | negative case with value 2abc           | author | 2abc            | count		  | 0					   |
      | negative case with value xyz            | author | xyz             | count		  | 0					   |
      | negative case with value -10            | author |             -10 | count		  | 0					   |