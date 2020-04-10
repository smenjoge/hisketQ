# hisketQ
Password Generator (wk3)
1. User input password length is stored in variable lenPassInp. 
2. User input is verified to be a number and between 8 to 128. If not a number or length is not in the range, appropriate error is returned.
3. The user is asked a series of questions about type of characters to include in the random password. User response to each question is captured in boolean variables.
4. If user did not choose at least one character type, return appropriate error message.
5. All possible values for all character types (Special char, captital lettes, small letters, numbers) are stored in different variables.
6. Based on the user choice, a superset variable is created by appending the values together. 
7. Random character is selected using charAt method on the superset variable and using the random number generation logic.
8. Above logic is performed in a loop for the number of times which user entered as Password length.
