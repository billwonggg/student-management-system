# script to generate the list of initial Student objects in Java
import json
import calendar
import random
import string


def getDOB(dob):
    dates = dob.split("-")
    return f"LocalDate.of({dates[0]}, Month.{calendar.month_name[int(dates[1])].upper()}, {int(dates[2])})"


def getEmail(email):
    emailarr = email.split("@")
    return f"{emailarr[0]}@{random.choice(['unsw', 'usyd', 'unimelb', 'ucla', 'berkeley','stanford', 'nyu'])}.edu"


s = open("MOCK_DATA.json", 'r').read()
data = json.loads(s)
arr = []
for person in data:
    arr.append(
        f"new Student(\"{person.get('firstname')}\", \"{person.get('surname')}\", \"{getEmail(person.get('email'))}\", {getDOB(person.get('dob'))}, '{person.get('gender')}', \"04{''.join(random.choices(string.digits,k= 8))}\")")

print(", \n".join(arr))
