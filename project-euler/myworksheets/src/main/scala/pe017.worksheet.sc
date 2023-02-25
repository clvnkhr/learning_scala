// 17 Number Letter Counts

def toEnglish(n: Int): String =
  if n == 1 then "one"
  else if n == 2 then "two"
  else if n == 3 then "three"
  else if n == 4 then "four"
  else if n == 5 then "five"
  else if n == 6 then "six"
  else if n == 7 then "seven"
  else if n == 8 then "eight"
  else if n == 9 then "nine"
  else if n == 10 then "ten"
  else if n == 11 then "eleven"
  else if n == 12 then "twelve"
  else if n == 13 then "thirteen"
  else if n == 14 then "fourteen"
  else if n == 15 then "fifteen"
  else if n == 16 then "sixteen"
  else if n == 17 then "seventeen"
  else if n == 18 then "eighteen"
  else if n == 19 then "nineteen"
  else if n == 20 then "twenty"
  else if n == 30 then "thirty"
  else if n == 40 then "forty"
  else if n == 50 then "fifty"
  else if n == 60 then "sixty"
  else if n == 70 then "seventy"
  else if n == 80 then "eighty"
  else if n == 90 then "ninety"
  else if (21 to 99) contains n then
    toEnglish((n / 10) * 10) + toEnglish(n % 10)
  else if (100 to 900 by 100) contains n then toEnglish(n / 100) + "hundred"
  else if (101 to 999) contains n then
    toEnglish((n / 100) * 100) + "and" + toEnglish(n % 100)
  else if n == 1000 then "one" + "thousand"
  else "huh?"

(1 to 1000).map(toEnglish(_).length).sum
