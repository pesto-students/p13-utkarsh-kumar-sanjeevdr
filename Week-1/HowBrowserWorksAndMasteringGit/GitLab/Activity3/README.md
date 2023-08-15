## Activity 3: Create a branch and push your changes to the branch

### <u> Create a new branch by name example-branch and checkout the branch </u>
git checkout -b example-branch

### <u> Created a folder called Activity3 </u>
mkdir Activity3

### <u> Created a file called README.md </u>
echo "# git example" >> README.md

### <u> Added Activity3 folder</u>
git add Activity3/README.md

### <u> Commited the changes to branch </u>
git commit -m "commiting to a branch"

### <u> Pushed local changes to remote example-branch branch </u>
git push origin example-branch

### <u> Finally created a pull request from example-branch branch to main branch </u>

