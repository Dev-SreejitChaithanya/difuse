echo " Switching to branch master"
git checkout master

echo "Building app .."
npm run build

echo "Deploying files to server"
scp  -r build/* root@51.195.250.3:/var/www/difuse.io/


echo "Done"