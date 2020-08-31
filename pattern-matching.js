// write a function which takes two parameters a filename and pattern which returns boolean if the filename matches with the pattern. No need to use pattern api or anything.
/* Test Cases

fileName: a.txt
pattern: *.txt
return true

fileName: aBC.txt
pattern: a*.txt
return true

fileName: 123aaabb.txt
pattern: 123*.txt
return true

fileName: aaabccsc.txt
pattern: a*b*c.txt
return true

fileName: aa12.txt
pattern: a15.txt
return false

fileName: aaa1234.txt
pattern: a*3.txt
return false
