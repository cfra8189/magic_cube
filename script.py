import random

name = "Clarence"
question = "Does this code work?"
answer = ""

# Prints a random number from 1 - 12
random_number = random.randint(1, 12)
#print(random_number)

# Generate answers by assigning them to numbers from 1 -12 
# Using if/elif/else

if random_number == 1:
    answer = "Yes - Definitely"
elif random_number == 2:
    answer = "It is decidely so"
elif random_number == 3:
    answer = "Without a doubt"
elif random_number == 4:
    answer = "Reply hazy, try again"
elif random_number == 5:
    answer = "Ask again later"
elif random_number == 6:
    answer = "Better not tell you now"
elif random_number == 7:
    answer = "My sources say no"
elif random_number == 8:
    answer = "Outlook not so good"
elif random_number == 9:
    answer = "Very doubtful"
elif random_number == 10:
    answer = "H3# YESSSS!"
elif random_number == 11:
    answer = "H3# NOOOO!!"
elif random_number == 12:
    answer = "...no clue..."
else:
    answer = "hmmmmmm..."

if not name:
    print("Question: " + question)
else:
    print(name + " asks: " + question)

if not question:
    print("NO QUESTION!?")
else:
    print("Magic 8-Ball's answer: " + answer)
