# You are given two lists of hostnames, hosts1.txt and hosts2.txt. The files contain fully qualified hostnames, with no spaces, one per line,  (newline).
# Write a python function that prints three sections:

# i.      Outputs all the hosts not in hosts1.txt that are in hosts2.txt.

#  ii.      Outputs all the hosts that are in hosts2.txt that are not in hosts1.txt

#  iii.      Outputs the hosts that are common to both lists.

# hosts1 = open("hosts1.txt").read().splitlines()
# hosts2 = open("hosts2.txt").read().splitlines()

hosts1 = ["red", "yellow", "blue", "green", "orange", "brown"]

hosts2 = ["red", "purple", "blue", "white", "orange", "black"]


def output(hosts1, hosts2):
    common = []
    unique1 = []
    unique2 = []
    for check1 in hosts1:
        for check2 in hosts2:
            if check1 == check2:
                common.append(check1)
    for check1 in hosts1:
        for check2 in hosts2:            
            if check1 not in common and check1 not in unique1:
                unique1.append(check1)
            elif check2 not in common and check2 not in unique2:
                unique2.append(check2)

                
    print "Hosts that are unique to hosts2: " + ', '.join(unique2) + "."
    print "Hosts that are unique to hosts1: " + ', '.join(unique1) + "."
    print "Hosts that are common to both lists: " + ', '.join(common) + "."
    
output(hosts1, hosts2)
