Set objFileToWrite = CreateObject(“Scripting.FileSystemObject”).OpenTextFile(“C:\file.txt”,2,true)
objFileToWrite.WriteLine(data)
objFileToWrite.Close
Set objFileToWrite = Nothing