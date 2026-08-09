---
layout: lesson
title: Log in from macOS
permalink: /modules/login/macos/
platform: macOS
previous_url: /modules/login/
next_url: /modules/login/assessment/
---

# Log in from macOS

macOS includes both Terminal and an SSH client.

## Step 1: Open Terminal

1. Press `Command + Space`.
2. Enter `Terminal`.
3. Press Return.

You can also find Terminal under:

```text
Applications → Utilities → Terminal
```

Try it

{% include command.html command="whoami" explanation="Displays your local macOS username." %}

## Step 2: Check SSH
{% include command.html command="ssh -V" explanation="Confirms that the SSH client is available." %}

## Step 3: Connect to DelftBlue

{% include command.html command="ssh <netid>@login.delftblue.tudelft.nl" %}

Replace `<netid>` with your TU Delft NetID.

{% include questions/fill-command.html
   question="Complete the command using `jstudent` as the NetID."
   prefix="ssh "
   suffix="@login.delftblue.tudelft.nl"
    answer="jstudent"
    input_label="NetID"
%}

## Step 4: Confirm the host

{% include command.html command="pwd" %}

The first time you connect, you may see a message similar to:

```
The authenticity of host 'login.delftblue.tudelft.nl' cannot be established.
Are you sure you want to continue connecting?
```

Check that the hostname is exactly:

```
login.delftblue.tudelft.nl
```

Then press `yes` and Enter to continue.

> [**NOTE**]
> 
> Only accept a host when the hostname is correct. If the hostname is incorrect, stop and ask for assistance.

## Step 5: Enter your password

Enter your NetID password and press Enter.

> [**NOTE**]
> 
> The terminal will not display any characters while you type your password. This is normal, and is designed to increase security, so that people watching over your shoulder don't even know how many characters your password contains.

## Step 6: Recognize a successful login

After a successful login, you will see a welcome message similar to:

```
____       ________  ____  __
   / __ \___  / / __/ /_/ __ )/ /_  _____
  / / / / _ \/ / /_/ __/ __  / / / / / _ \
 / /_/ /  __/ / __/ /_/ /_/ / / /_/ /  __/
/_____/\___/_/_/  \__/_____/_/\__,_/\___/

As DelftBlue is a new system and was newly installed and configured, some things might not be fully working yet, and are still in the process of being set up.

For information about using DelftBlue, see the documentation: https://www.tudelft.nl/dhpc/documentation (login using your TU Delft account)
When you have questions, you can ask them in the DHPC chat service: https://mattermost.tudelft.nl/dhpc/ (login using your TU Delft account)

Last login: Thu Jul 21 16:56:39 2022 from 145.90.36.181


Quota information for storage pool scratch (ID: 1):

      user/group     ||           size          ||    chunk files
     name     |  id  ||    used    |    hard    ||  used   |  hard
--------------|------||------------|------------||---------|---------
      <netid>|588559||   20.63 GiB|    5.00 TiB||   278772|  1000000

Quota information for storage pool home (ID: 2):

      user/group     ||           size          ||    chunk files
     name     |  id  ||    used    |    hard    ||  used   |  hard
--------------|------||------------|------------||---------|---------
      <netid>|588559||    3.44 GiB|    8.00 GiB||    48433|  1000000

 11:54:16 up 48 days, 19:22,  6 users,  load average: 0.09, 0.20, 0.15

 [<netid>@login04 ~]$
```

The exact login-node number may be different.

You are now connected to a DelftBlue login node.

> [**IMPORTANT**]
> 
> Login nodes are intended for preparing files, managing jobs, and doing light work. Computationally intensive programs must be submitted as jobs.

## Step 7: Verify your session

{% include command.html command="whoami" %}

The output should be your NetID.

Next, run:

{% include command.html command="hostname" %}

The output should be the name of the login node you are connected to, for example `login04`.

Finally, run:

{% include command.html command="pwd" %}

The output should be your home directory, for example `/home/<netid>`.

{% include questions/match.html
   question="What does each part of this DelftBlue prompt mean?"
   description="Match each part of [jstudent@login04 ~]$ to its meaning."
   item_1="jstudent"
   item_2="login04"
   item_3="~"
   option_a="Your TU Delft NetID"
   option_b="The DelftBlue login node"
   option_c="Your home directory"
   answer_1="a"
   answer_2="b"
   answer_3="c"
%}

## Step 8: Log out safely

When you are finished, log out by typing:

{% include command.html command="exit" %}

You can also press:

```
Ctrl + D
```

You should return to the terminal on your own computer.