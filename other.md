# Git

## Installation
Download Git Windows Setup from one of the following links:

[https://git-scm.com/download/win]()  
[https://git-for-windows.github.io/]()

The downloaded file looks like for example: *Git-2.12.0-64-bit.exe*

The installation includes a **Git bash** and **GUI client** (several others can be installed). During installation you can choose either to make available git commands from Windows Command Prompt (affects the PATH variable) or only from the Git bash.

## First time setup:  
[https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup]()

```
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
```

On a 32-bit machine:
```
$ git config --global core.editor "'C:/Program Files/Notepad++/notepad++.exe' -multiInst -nosession"
```
On a 64-bit machine:
```
$ git config --global core.editor "'C:/Program Files (x86)/Notepad++/notepad++.exe' -multiInst -nosession"
```

## GUI clients
List of available Git GUI Clients:  
[https://git-scm.com/downloads/guis]()

GitKraken:
[https://www.gitkraken.com/]()

## ConEmu
ConEmu is a console emulator with tabs. It is very handy to open multiple command prompts, bashes or other shells.   
It is possible to download an installer or a portable version.

[http://conemu.github.io/]()
