Feature: Select services

  Scenario: The client selects the SEO service
    Given the SEO service is not selected
    When the client clicks on the SEO checkbox
    Then the SEO service should be selected


Feature: Calculate extra web cost

  Scenario: Calculate cost when there are extra pages
    Given the included number of web pages is 1
    And the selected number of web pages is 2
    And each extra page costs 30 euros
    When the extra web cost is calculated
    Then the extra cost should be 30 euros

  Scenario: Return zero when there are no extra pages
    Given the included number of web pages is 1
    And the selected number of web pages is 1
    When the extra web cost is calculated
    Then the extra cost should be 0 euros


Feature: Get selected services

  Scenario: Get only the selected services
    Given the available services are SEO and Web
    And the SEO service is selected
    And the Web service is not selected
    When the selected services are retrieved
    Then only the SEO service should be returned