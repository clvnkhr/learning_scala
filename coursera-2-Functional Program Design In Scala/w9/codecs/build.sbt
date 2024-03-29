course := "progfun2"
assignment := "codecs"

scalaVersion := "3.2.2"

scalacOptions ++= Seq("-deprecation")

libraryDependencies ++= Seq(
  "org.typelevel" %% "jawn-parser" % "1.1.2",
  "org.scalacheck" %% "scalacheck" % "1.15.4" % Test,
  "org.scalameta" %% "munit" % "0.7.26" % Test
)
