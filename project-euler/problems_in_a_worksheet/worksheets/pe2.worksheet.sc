def pe2(f1: Int,f2: Int, total: Int): Int = 
  if f2 > 4000000 then total else
    val f3 = f1 + f2
    val newTotal = if f3 % 2 == 0 then total+f3 else total
    pe2(f2,f3,newTotal)

pe2(1,1,0)