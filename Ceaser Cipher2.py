userKey = int(input('Enter Key: '))



cipher = [
  {'A':1,1 + userKey:'A'},
  {'B':2,2 + userKey:'B'},
  {'C':3,3 + userKey:'C'},
  {'D':4,4 + userKey:'D'},
  {'E':5,5 + userKey:'E'},
  {'F':6,6 + userKey:'F'},
  {'G':7,7 + userKey:'G'},
  {'H':8,8 + userKey:'H'},
  {'I':9,9 + userKey:'I'},
  {'J':10,10 + userKey:'J'},
  {'K':11,11 + userKey:'K'},
  {'L':12,12 + userKey:'L'},
  {'M':13,13 + userKey:'M'},
  {'N':14,14 + userKey:'N'},
  {'O':15,15 + userKey:'O'},
  {'P':16,16 + userKey:'P'},
  {'Q':17,17 + userKey:'Q'},
  {'R':18,18 + userKey:'R'},
  {'S':19,19 + userKey:'S'},
  {'T':20,20 + userKey:'T'},
  {'U':21,21 + userKey:'U'},
  {'V':22,22 + userKey:'V'},
  {'W':23,23 + userKey:'W'},
  {'X':24,24 + userKey:'X'},
  {'Y':25,25 + userKey:'Y'},
  {'Z':26,26 + userKey:'Z'}
]


list = []



userInput = input("Enter text: ")

userInput = userInput.replace('','/')

list =userInput.strip().split('/')

list = list[1:-1]


for i in range(len(list)):
#   if list[i] == ' ':
#    print(' ',end='')
#   for x in cipher:
#    if list[i] == x[list[i] - userKey]:
#     print(x[list[i] - userKey],end='')
#     break

    print(list[i])

