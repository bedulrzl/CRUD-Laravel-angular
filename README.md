# CRUD-laravel Angular
Simple Example CRUD Laravel Angular

Download
First, clone project:

# clone
git clone https://github.com/bedulrzl/CRUD-laravelAngular.git

# Access project
cd CRUD-LaravelAngular / server &
cd CRUD-laravaelAngular / client

# Install dependencies
server - composer install
client - npm install

# Create file .env
cp .env.example .env

# Generate key
php artisan key:generate

# Run migrations (tables and Seeders)
php artisan migrate --seed

# Create Server
php artisan serve

# Access project
http://localhost:4200
