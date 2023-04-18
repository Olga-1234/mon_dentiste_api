# # Mon Dentiste Api
the application programming interface of mon dentiste center plateform <br/> Here's the documentation: https://mon-dentiste-api.onrender.com <br/>
## Build with
this application has been realized with the help of the following technologies<br/>
<img src="https://miro.medium.com/v2/resize:fit:736/1*3bMcQcLAE-fPjVEhnY5xsQ.png" alt="node, sequelize and mysql"/>  

## Description
<p>
<strong>Kesho Congo</strong> is a social action dealing with the care of <strong>malnourished children</strong>. Thanks to this application programming interface, it can <strong>manage</strong> and <strong>make available data in real time</strong> in order to exploit them via software and other tools.
</p>

## Main features

- User Management
- see cabinet appointments
- see appointments by users
- add items
- Make an appointment

## Install
To get the project running locally on your machine you need to have the following development tools installed:<br/>
- NodeJS and npm
- MySQL
- Git

1. Clone the project:

```
git clone https://github.com/Olga-1234/mon_dentiste_api.git && cd mon_dentiste_api && git checkout -b main
```

2. Install Node.JS packages via npm. Do you want to use yarn instead? Use `npm install --global yarn`.<br/>
Launch &nbsp;
`
npm install
`
or
`
yarn install
`
3. Add the environmental variables that will be used in the process: 
```
JWT_SECRET = <your_jwt_secret>
SENDGRID_API_KEY = <your_sendgrid_api_key>
SENDGRID_SENDER = <your_sendgrid_sender>
MAILNAME = <your_sendgrid_mail_account>
PASSMAIL = <your_sendgrid_account_password>


NODE_ENV = development
PORTLOCAL = 4000
DB_HOSTLOCAL = <localhost or 127.0.0.1>
DB_USERLOCAL = <root or your_mysql_username>
DB_PASSLOCAL = <"" or your_mysql_password>
DB_NAMELOCAL = kesho_db
DB_PORTLOCAL = 3306
DB_CHARSETLOCAL = utf8
DB_CONNECTION_LIMITLOCAL = 10
DB_CONNECTION_TIMEOUTLOCAL = 100000
```
4. Generate database and execute migrations.<br/>
run this sequelize-cli commands to create a mySQL database:<br/>
`npx sequelize-cli db:create`<br/>
and launch this one to run migrations:<br/>
`npx sequelize-cli db:migrate`

5. Run the project. <br/>
Launch &nbsp;
`
npm start
`
or
`
yarn start
`
