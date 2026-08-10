---
layout: lesson
title: Transfer files from Windows
permalink: /modules/data-transfer/windows/
platform: Windows
previous_url: /modules/data-transfer/
#next_url: /modules/data-transfer/assessment/
---

# Transfer files from Windows

## Step 1: Open Windows Terminal

Open the Start menu and search for:

```text
Terminal
```

You can also use **PowerShell** or **Command Prompt**.

You may see a prompt similar to:

```text
PS C:\Users\jstudent>
```

This is your **local Windows computer**.

<div class="info-box">
<strong>Important:</strong> Run the <code>scp</code> commands in your local Windows terminal, not inside an SSH session on DelftBlue.
</div>

---

## Step 2: Check that `scp` is available

Run:

{% include command.html
   command="scp"
   explanation="This checks whether the SCP command is available on Windows."
%}

If `scp` is available, Windows should display its usage information.

---

## How an SCP command works

The basic structure is:

```text
scp source target
```

You tell `scp`:

1. **what you want to copy**, and
2. **where you want it to go**.

For DelftBlue, a remote location has this form:

```text
<netid>@login.delftblue.tudelft.nl:path
```

For example:

```text
jstudent@login.delftblue.tudelft.nl:~/data/
```

The part before the colon identifies DelftBlue. The part after the colon identifies the location on DelftBlue.

---

{% include questions/match.html
   question="Match each part of the DelftBlue location to its meaning."
   description="Consider: jstudent@login.delftblue.tudelft.nl:~/data/"
   item_1="jstudent"
   item_2="login.delftblue.tudelft.nl"
   item_3="~/data/"
   option_a="Your TU Delft NetID"
   option_b="The DelftBlue server"
   option_c="The destination folder on DelftBlue"
   answer_1="a"
   answer_2="b"
   answer_3="c"
%}

---

# Uploading data to DelftBlue

## Step 3: Create a test file

For this exercise, create a small text file on your Windows computer.

For example, create:

```text
hello.txt
```

inside your Downloads folder.

Then move to that folder in PowerShell:

{% include command.html
   command="cd $HOME\Downloads"
%}

You can check that the file is there with:

{% include command.html
   command="dir"
%}

Look for:

```text
hello.txt
```

---

## Step 4: Upload one file

The DelftBlue documentation gives the basic upload pattern:

```text
scp -p local-file <netid>@login.delftblue.tudelft.nl:destination
```

The `-p` option preserves file timestamps and permissions where applicable. :contentReference[oaicite:1]{index=1}

To copy `hello.txt` into your DelftBlue home directory, run:

{% include command.html
   command="scp -p hello.txt <netid>@login.delftblue.tudelft.nl:~/"
%}

Replace `<netid>` with your own TU Delft NetID.

For example:

```text
scp -p hello.txt jstudent@login.delftblue.tudelft.nl:~/
```

You may be asked for your TU Delft password.

<div class="info-box">
The file begins on your Windows computer and ends on DelftBlue. Therefore the Windows file comes first and the DelftBlue location comes second.
</div>

---

{% include questions/fill-command.html
   question="Complete the command to upload hello.txt using jstudent as the NetID."
   prefix="scp -p hello.txt "
   suffix="@login.delftblue.tudelft.nl:~/"
   answer="jstudent"
   input_label="NetID"
%}

---

## Step 5: Check that the upload worked

Log in to DelftBlue:

{% include command.html
   command="ssh <netid>@login.delftblue.tudelft.nl"
%}

Then run:

{% include command.html
   command="ls"
%}

You should see:

```text
hello.txt
```

Log out again:

{% include command.html
   command="exit"
%}

<div class="success-box">
If you can see <code>hello.txt</code> on DelftBlue, your first transfer worked.
</div>

---

# Uploading a folder

## Step 6: Copy a complete folder

To copy a folder, `scp` needs the `-r` option.

`-r` means **recursive**: copy the directory and everything inside it.

The DelftBlue documentation uses:

```text
scp -pr local-folder <netid>@login.delftblue.tudelft.nl:destination
```

for recursive folder transfers. :contentReference[oaicite:2]{index=2}

Suppose your Windows folder is:

```text
project
```

Upload it with:

{% include command.html
   command="scp -pr project <netid>@login.delftblue.tudelft.nl:~/"
%}

---

## Quick check

**Why is `-r` needed when transferring a folder?**

- A. It renames the folder
- B. It copies the folder and its contents recursively
- C. It reconnects to DelftBlue
- D. It removes the source folder

<details>
<summary>Show answer</summary>

**B.** `-r` tells `scp` to recursively copy the directory and everything inside it.

</details>

---

# Downloading data from DelftBlue

The same command can copy in the opposite direction.

The only important change is:

> DelftBlue becomes the **source**, and your Windows computer becomes the **target**.

---

## Step 7: Download one file

Suppose DelftBlue contains:

```text
~/results/output.txt
```

and you want to copy it into your current Windows directory.

Run this from your **Windows terminal**:

{% include command.html
   command="scp -p <netid>@login.delftblue.tudelft.nl:~/results/output.txt ."
%}

Here:

```text
.
```

means:

> the current directory on your Windows computer.

The DelftBlue documentation uses this same source-first pattern for downloading files. :contentReference[oaicite:3]{index=3}

---

## Which direction is this transfer going?

Consider:

```text
scp -p jstudent@login.delftblue.tudelft.nl:~/results/output.txt .
```

Where will `output.txt` go?

- A. Windows → DelftBlue
- B. DelftBlue → Windows
- C. DelftBlue → another DelftBlue folder

<details>
<summary>Show answer</summary>

**B. DelftBlue → Windows**

The DelftBlue path appears first, so it is the source. The `.` is the local destination.

</details>

---

# Downloading a folder

## Step 8: Download a complete folder

Suppose DelftBlue contains:

```text
~/results/
```

Download the folder with:

{% include command.html
   command="scp -pr <netid>@login.delftblue.tudelft.nl:~/results ."
%}

Again, `-r` is needed because `results` is a directory.

---

# Understanding source and destination

This is the most important rule in this lesson:

```text
scp SOURCE TARGET
```

### Upload

```text
Windows → DelftBlue
```

```bash
scp myfile.txt <netid>@login.delftblue.tudelft.nl:~/
```

### Download

```text
DelftBlue → Windows
```

```bash
scp <netid>@login.delftblue.tudelft.nl:~/myfile.txt .
```

The command itself does not have an “upload” or “download” mode. The direction is determined entirely by the order of **source** and **target**.

---

## Question: choose the correct command

You have a Windows file called:

```text
experiment.csv
```

You want to place it in:

```text
~/data/
```

on DelftBlue.

Which command is correct?

**A**

```text
scp -p <netid>@login.delftblue.tudelft.nl:~/data/ experiment.csv
```

**B**

```text
scp -p experiment.csv <netid>@login.delftblue.tudelft.nl:~/data/
```

**C**

```text
ssh experiment.csv <netid>@login.delftblue.tudelft.nl
```

<details>
<summary>Show answer</summary>

**B**

The local file is the source, so it comes first. The DelftBlue directory is the target, so it comes second.

</details>

---

# Common problems

## Connection timed out

If you are off campus, check that eduVPN is connected using **Institute Access**.

The documented `scp` commands work while connected to the university network or through eduVPN Institute Access. :contentReference[oaicite:4]{index=4}

---

## `No such file or directory`

Check:

- the spelling of the filename;
- whether your Windows terminal is currently in the correct directory;
- the DelftBlue path after the colon.

For example:

```text
scp -p hello.txt <netid>@login.delftblue.tudelft.nl:~/data/
```

will fail if `hello.txt` is not in your current Windows directory.

---

## `Permission denied`

Check:

- that your NetID is correct;
- that your password is correct;
- that you have permission to write to the DelftBlue destination.

---

# Optional: rsync

DelftBlue also documents `rsync` as a more powerful alternative to `scp`.

Unlike a simple copy, `rsync` synchronizes source and destination and transfers files that have changed. Its basic form is:

```text
rsync -av source target
```

Here:

- `-a` enables archive mode;
- `-v` displays what `rsync` is doing.

This is particularly useful for repeatedly transferring larger project directories. :contentReference[oaicite:5]{index=5}

For this beginner lesson, however, you only need to be comfortable with `scp`.

---

# Final challenge

Without looking at the examples above, construct commands for the following tasks.

### 1. Upload

Upload:

```text
simulation.py
```

from Windows into your DelftBlue home directory.

<details>
<summary>Show solution</summary>

```bash
scp -p simulation.py <netid>@login.delftblue.tudelft.nl:~/
```

</details>

### 2. Download

Download:

```text
~/results/final.csv
```

from DelftBlue into the current Windows directory.

<details>
<summary>Show solution</summary>

```bash
scp -p <netid>@login.delftblue.tudelft.nl:~/results/final.csv .
```

</details>

### 3. Upload a folder

Upload the folder:

```text
my_project
```

to DelftBlue.

<details>
<summary>Show solution</summary>

```bash
scp -pr my_project <netid>@login.delftblue.tudelft.nl:~/
```

</details>

---