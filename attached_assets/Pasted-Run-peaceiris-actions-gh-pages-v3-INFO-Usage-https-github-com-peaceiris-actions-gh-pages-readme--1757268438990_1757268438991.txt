Run peaceiris/actions-gh-pages@v3
[INFO] Usage https://github.com/peaceiris/actions-gh-pages#readme
Dump inputs
Setup auth token
Prepare publishing assets
  [INFO] ForceOrphan: false
  /usr/bin/git clone --depth=1 --single-branch --branch gh-pages ***github.com/saldoran/magerovska_website.git /home/runner/actions_github_pages_1757268358316
  Cloning into '/home/runner/actions_github_pages_1757268358316'...
  fatal: Remote branch gh-pages not found in upstream origin
  [INFO] first deployment, create new branch gh-pages
  [INFO] The process '/usr/bin/git' failed with exit code 128
  [INFO] chdir /home/runner/actions_github_pages_1757268358316
  /usr/bin/git init
  hint: Using 'master' as the name for the initial branch. This default branch name
  hint: is subject to change. To configure the initial branch name to use in all
  hint: of your new repositories, which will suppress this warning, call:
  hint:
  hint: 	git config --global init.defaultBranch <name>
  hint:
  hint: Names commonly chosen instead of 'master' are 'main', 'trunk' and
  hint: 'development'. The just-created branch can be renamed via this command:
  hint:
  hint: 	git branch -m <name>
  hint:
  hint: Disable this message with "git config set advice.defaultBranchName false"
  Initialized empty Git repository in /home/runner/actions_github_pages_1757268358316/.git/
  /usr/bin/git checkout --orphan gh-pages
  Switched to a new branch 'gh-pages'
  [INFO] prepare publishing assets
  [INFO] copy /home/runner/work/magerovska_website/magerovska_website/dist to /home/runner/actions_github_pages_1757268358316
  cp: no such file or directory: /home/runner/work/magerovska_website/magerovska_website/dist/.*
  [INFO] delete excluded assets
  rm: no paths given
  [INFO] Created /home/runner/actions_github_pages_1757268358316/.nojekyll
Setup Git config
Create a commit
Push the commit or tag
  /usr/bin/git push origin gh-pages
  remote: Permission to saldoran/magerovska_website.git denied to github-actions[bot].
  fatal: unable to access 'https://github.com/saldoran/magerovska_website.git/': The requested URL returned error: 403
  Error: Action failed with "The process '/usr/bin/git' failed with exit code 128"