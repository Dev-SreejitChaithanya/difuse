echo " Switching to branch master"
git checkout master

echo "Building app .."
npm run build

echo "Deploying files to server"
scp  -r build/* user@ip-address of linux machine :/var/www/ip-address/
# OR
scp  -r build/* user@ip-address of linux machine :/var/www/domainname/

echo "Done"