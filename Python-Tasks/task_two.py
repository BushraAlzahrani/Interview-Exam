
'''
Task 2:

Create a running Python project that can take two dates as input, and then
calculate the amount of time between them

'''

from datetime import datetime

print('\n Calculating the time between two dates!! \n')

# Getting the input dates from user
first_date_entry= input('Enter the first date in the following format dd/mm/yyyy: ')
second_date_entry= input('Enter the second date in the following format dd-mm-yyyy: ')


# convert the dates input into datetime format

first_date= datetime.strptime(first_date_entry, "%d/%m/%Y")
second_date= datetime.strptime(second_date_entry, "%d/%m/%Y")

# calcuating the differnce between the two dates

result_year = second_date.year - first_date.year
result_month = second_date.month - first_date.month
result_day = second_date.day - first_date.day

print(f' {result_year} Years, {result_month} months, {result_day} days')


