
# Case 4:
num = 16

if num < 0:
   print("Enter a positive number")
else:
   sum = 0
   # use while loop to iterate until zero
   while(num > 0):
       sum += num
       num -= 1
   print("The sum is", sum)


# Case 5:
x = 5
y = 10

temp = x
x = y
y = temp

print('The value of x after swapping: {}'.format(x))
print('The value of y after swapping: {}'.format(y))




# Case 6: 
kilometers = float(input("Enter value in kilometers: "))

conv_fac = 0.621371

miles = kilometers * conv_fac
print('%0.2f kilometers is equal to %0.2f miles' % (kilometers,miles))
print(f"{round(kilometers, 2)} kilometers is equal to {miles} miles")



# Case 7:
num = float(input("Enter a number: "))
if num > 0:
   print("Positive number")
elif num == 0:
   print("Zero")
else:
   print("Negative number")