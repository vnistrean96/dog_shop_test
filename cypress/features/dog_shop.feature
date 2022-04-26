Feature: Dog Shop page validation

    Scenario: Add dog to the shop
        When I open application
        And I fill adding form with data about the dog
        And I click on Add button
        Then the dog information is added with success

    Scenario: Verify dogs view table
        When I open application
        Then dogs view have the following columns "Breed, Nick, Price, Image, Actions"

    Scenario: Edit dog information
        When I open application
        And I click on Edit button
        And I save dogs information
        Then form is changed with Edit title
        And editing columns have old dogs data
        When I update information from the form
        And I click on Update button
        Then dogs information "is" updated on View table

    Scenario: Cancel editing dog information
        When I open application
        And I click on Edit button
        And I update information from the form
        And I click on Cancel button
        Then dogs information "is not" updated on View table

    Scenario: Delete dog information
        When I open application
        And I save dogs information
        And I click on Delete button
        Then dogs information is deleted from the View table

    # Assuming we do not have constraints on adding duplicated data dogs information
    Scenario: Add duplicated dog information to the shop
        When I open application
        And I save dogs information
        And I fill adding form with duplicated data about the dog
        And I click on Add button
        Then the dog information is added with success

    # Assuming we have as requirement that only image field can be optional
    Scenario: Add dog without image
        When I open application
        And I fill adding form with data about the dog without image
        And I click on Add button
        Then the dog information is added with success

    # Assuming we have as requirement all fields except image to be mandatory
    Scenario Outline: Add dog with empty mandatory fields
        When I open application
        And I fill adding form without "<mandatoryFields>" data about the dog
        And I click on Add button
        Then the dog information is not added
        Examples:
            | mandatoryFields |
            | Breed           |
            | Nick            |
            | Price           |

    # Assuming we have as requirement possability to delete all dogs information
    Scenario: Delete all dogs information
        When I open application
        And I delete all dogs information from data table
        Then Dogs data table has no data