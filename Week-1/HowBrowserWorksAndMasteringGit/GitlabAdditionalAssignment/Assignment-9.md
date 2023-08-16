# GitHub-Advanced-Hands-On

## Advanced Level Hands-On Assignment for Mastering GitHub


### Create a new repository on GitHub by name “GitHub-Advanced-Hands-On”


### Clone the Repository
git clone https://github.com/sanjeevdr/GitHub-Advanced-Hands-On.git

### Create a new branch called “dev”
git branch dev

### Switch to the new branch
git checkout dev

### Make changes to the “hello.txt” file by adding the following line to the end of the file:
### This is a dev branch change.
### Save the file and close it.

### Commit Changes to the Dev Branch
git add hello.txt
git commit -m "Add dev branch change to hello.txt"

### Push Changes to the Dev Branch
git push origin dev

### Switch back to the main branch
git checkout main

### Make changes to the “hello.txt” file by adding the following line to the end of the file:
### This is a main branch change.
### Save the file and close it.

### Commit Changes to the main Branch
git add hello.txt
git commit -m "Add dev branch change to hello.txt"

### Push Changes to the main Branch
git push origin dev

### Try to merge the dev branch into the main branch
git merge dev

Auto-merging hello.txt
CONFLICT (add/add): Merge conflict in hello.txt
Automatic merge failed; fix conflicts and then commit the result.


### You will get a conflict error because the same line has been modified in both branches. Open the “hello.txt” file and resolve the conflict by keeping both changes:
### Hello, GitHub! This is a dev branch change. This is a main branch change.
### Save the file and close it.

### Add the resolved file to the commit
git add hello.txt

### Commit the changes
git commit -m "Resolve conflict in hello.txt"

### Push Changes to the Main Branch
git push origin main


## Create a new folder 
mkdir GitExample2

### Change to the newly created folder
cd GitExample2

### Create a new repository on your local machine
git init

### Add the remote repository
git remote add origin https://github.com/sanjeevdr/GitExample2.git

### Fetch the changes from the remote repository
git fetch

### Create a new branch called “feature” and switch to it 
git branch feature
git checkout feature

### Make changes to the “hello.txt” file by adding the following line to the end of the file:
### This is a feature branch

### Commit and Push Changes to the Feature Branch 
git add hello.txt
git commit -m "Add feature branch change to hello.txt"

### Push the changes to the feature branch
git push origin feature

### Create a Pull Request Go to the GitHub repository page and click on the “Pull requests” tab. Click on the “New pull request” button. Select the main branch as the base branch and the feature branch as the compare branch. Review the changes and click on the “Create pull request” button.

### Merge the Pull Request Review the pull request and click on the “Merge pull request” button to merge the changes into the main branch.

### Use the following command to view the commit history
git log

### Use the following command to view the status of the repository
git status

### Use the following command to create a new branch and switch to it
git checkout -b newbranch

### Use the following command to delete a branch
git branch -d newbranch


