class A

class B:
  given A = new A()

class C extends B:
  given B = new B()
  usingA // No given instance of type A was found..

def usingA(using A) = 1
