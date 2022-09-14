'''
Task 3:

Create a running Python project to check if all digits of a number divide it; given a
number n, find whether all digits of n divide it or not

'''


def checkDigitsDivisible(number, digit):
    ''' This function checks if the number digits are divisible '''

    return (digit != 0 and number % digit == 0)
      

def allDigitsDivisible(number):
    ''' This function iterates over the number digits to check if all are divisable on the given number '''
    for digit in range(len(number)):
     if  not (checkDigitsDivisible(int(number), int(number[digit]) )) :
            return print('No')
    return print('Yes')
      
  
print(' \n Check if all the number digits are divisible \n')

number= input('Enter a number: ')

allDigitsDivisible(number)