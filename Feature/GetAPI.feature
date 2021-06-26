Feature: Agoda Test

  @All-API @Page
  Scenario Outline: Validate "<value>" with page parameter
    Given I add the url
    And I add parameter "<param1>" with "<param_val>"
    And I execute the API
    Then I validate "Resultcode" with "200"

    Examples: 
      | value                          | param1 | param_val |
      | postive case with value 1      | pages  |         1 |
      | negative case with value 20000 | pages  |     20000 |
      | negative case with value !@    | pages  | !@        |
      | negative case with value 2abc  | pages  | 2abc      |
      | negative case with value xyz   | pages  | xyz       |
      | negative case with value -10   | pages  |       -10 |

  @All-API @Tags
  Scenario Outline: Validate "<value>" with page parameter
    Given I add the url
    And I add parameter "<param1>" with "<param_val>"
    And I execute the API
    Then I validate "Resultcode" with "200"

    Examples: 
      | value                                            | param1 | param_val                |
      | postive case with value love-happiness           | tags   | love%7Chappiness         |
      | postive case with value technology,famous-quotes | tags   | technology,famous-quotes |
      | negative case with value 20000                   | tags   |                    20000 |
      | negative case with value !@                      | tags   | !@                       |
      | negative case with value 2abc                    | tags   | 2abc                     |
      | negative case with value xyz                     | tags   | xyz                      |
      | negative case with value -10                     | tags   |                      -10 |

  @All-API @Authors
  Scenario Outline: Validate "<value>" with page parameter
    Given I add the url
    And I add parameter "<param1>" with "<param_val>"
    And I execute the API
    Then I validate "Resultcode" with "200"

    Examples: 
      | value                                   | param1 | param_val       |
      | postive case with value albert-einstein | author | albert-einstein |
      | postive case with value asd@-eins232$3n | author | asd@-eins232$3n |
      | negative case with value 20000          | author |           20000 |
      | negative case with value !@             | author | !@              |
      | negative case with value 2abc           | author | 2abc            |
      | negative case with value xyz            | author | xyz             |
      | negative case with value -10            | author |             -10 |
