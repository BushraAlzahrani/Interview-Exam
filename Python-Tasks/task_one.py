
'''
Task 1:

Given a list of names, create a running Python project that sorts it alphabetically,
Python has this functionality built-in, but see if you can do it without using sort()! '''


names = ['bushra','ameera','sara']

temp= 0

for i in range(len(names)):
    for j in range(len(names)):
        if (names[j]> names[i]):
           temp = names[i]
           names[i]=names[j]
           names[j]= temp
        

print('The list after being sorted alphabetically ',names)