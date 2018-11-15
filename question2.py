# You have a list of integers. Write a function that takes one argument, the list of integers. The function should iterate over the list of integers. At each integer, the function should print the average of the integers processed so far.

list = [1, 4, 5, 6, 8, 10, 100]


def calculateList(list):
    newList = []
    for x in list:
        newList.append(x)
        average = sum(newList) / len(newList)
        print average
 
calculateList(list)      