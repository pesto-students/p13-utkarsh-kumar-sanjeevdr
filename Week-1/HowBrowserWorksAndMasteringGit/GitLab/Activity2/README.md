## Activity 2: Make a GitHub account and push your local repo to GitHub

### <u> Created a new local Git repository </u>
git init

### <u> Created a folder called Activity2 </u>
mkdir Activity2

### <u> Created a file called README.md </u>
echo "# git example" >> README.md

### <u> Added Activity2 folder </u>
git add Activity2/README.md

### <u> Commited the changes to repository </u>
git commit -m "first commit with folder"
 
### <u> Created a new remote Git repository on GitHub with name GitExample </u>

### <u> Connected the local Git repository, on to remote GitHub repo GitExample </u>
git remote add origin https://github.com/sanjeevdr/GitExample.git

### <u> Pushed local changes to remote main branch </u>
git push -u origin master

