/* 19 Counting Sundays
https://projecteuler.net/problem=19

1 Jan 1900 was a Monday.
Thirty days has September,
April, June and November.
All the rest have thirty-one,
Saving February alone,
Which has twenty-eight, rain or shine.
And on leap years, twenty-nine.
A leap year occurs on any year evenly divisible by 4,
but not on a century unless it is divisible by 400.

How many Sundays fell on the first of the month during
the twentieth century (1 Jan 1901 to 31 Dec 2000)?
 */
def leapYear(year: Int): Boolean =
  year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)

def numDaysInYear(year: Int): Int = if leapYear(year) then 366 else 365

def lengthOfMonth(month: Int, year: Int): Int =
  if month < 1 || month > 12 then throw new IllegalArgumentException
  else if month == 2 then if leapYear(year) then 29 else 28
  else if List(9, 4, 6, 11) contains month then 30
  else 31

(1 to 12).map(lengthOfMonth(_, 1900)).sum == 365
(1 to 12).map(lengthOfMonth(_, 2000)).sum == 366
(1 to 12).map(lengthOfMonth(_, 2001)).sum == 365
(1 to 12).map(lengthOfMonth(_, 2012)).sum == 366
(1 to 12).map(lengthOfMonth(_, 2100)).sum == 365

def firstsOfMonths(year: Int): Set[Int] =
  (1 to 12).map(lengthOfMonth(_, year)).scanLeft(0)(_ + _).toSet.map(_ + 1)
  //                                  one-indexing------------------^^^^^^^

firstsOfMonths(2001)

def setOfDay(day: Int, year: Int): Set[Int] =
  val offset =
    if year == 1900 then 0
    else
      val sgn = (year - 1900).sign
      ((1900 until year by sgn).map(numDaysInYear(_)).sum)
  (1 to numDaysInYear(year))
    .filter(d => (d + offset) % 7 == day % 7)
    .toSet

(1900 until 1901).map(numDaysInYear(_)).sum % 7
// test data from wolframalpha:

(1 to numDaysInYear(1901)).filter(day => (day + 1) % 7 == 0).toSet

// minor cautionary tale:
(1 to numDaysInYear(1901)).filter(day => day % 7 == (-1) % 7).size
// this is because _%n can take 2n-1 different values:
(-15 to 15).map(_ % 7)

setOfDay(0, 1900).size == 52
setOfDay(1, 1900).size == 53
setOfDay(1, 1900) contains numDaysInYear(1900)

setOfDay(2, 1901) contains 1
setOfDay(3, 1902) contains 1

setOfDay(0, 1901)
setOfDay(0, 1901).size == 52
setOfDay(1, 1901).size == 52
setOfDay(2, 1901).size == 53
setOfDay(3, 1901).size == 52
setOfDay(4, 1901).size == 52
setOfDay(5, 1901).size == 52
setOfDay(6, 1901).size == 52
setOfDay(7, 1901).size == setOfDay(0, 1901).size

setOfDay(0, 1904).size == 52
setOfDay(0, 1905).size == 53
setOfDay(0, 1906).size == 52
setOfDay(0, 2000).size == 53
setOfDay(0, 2004).size == 52

(1901 to 2000)
  .map(year => (firstsOfMonths(year) & setOfDay(0, year)).size)
  .sum
