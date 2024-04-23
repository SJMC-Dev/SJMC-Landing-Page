# SJMC Landing Page

## Clone

```bash
git clone git@github.com:UNIkeEN/SJMC-Landing-Page.git
```

## Frontend

The frontend uses React, NextJS with Typescript. Please make sure you have `node>=20`.

```bash
cd frontend
npm install
```

To launch a development server, use

```bash
npm run dev
```

To build the project for the production environment, use

```bash
npm run build
```

Then the built files are located at `frontend/out/`.

## Backend

The backend uses the Python-based Django framework. Install the necessary package first.

```bash
cd backend
pip install -r requirements.txt
```

To initialize the database, please use

```bash
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser # Create admin user
```

To launch a development server, use

```bash
python manage.py runserver
```

To launch the production environment server, please use Gunicorn or another suitable server.

It should be noted that the backend also has static pages that need to be built for the production environment (i.e., the admin page).

```bash
# First set STATIC_ROOT in Django settings.py
python manage.py collectstatic
```