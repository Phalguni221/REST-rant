About: This project is a compiled demonstration of the lessons learned in Back-End Development unit of the Full Stack Development Bootcamp at NJIT.
The REST-Rant project involves making a website which allows a website user to access individual portfolios of different kinds of bread via created routes. The user's expreience and interaction with the webpage would be highly depenedent on the proper functioning of the client-server model. 

Part 1 Instructions:
1. Project setup
2. Stub three routes
3. Creating a README file

Part 2: 
1.Stub remaining GET and POST routes
2. Planning mock restaurant data
3. Drawing wireframes
4. Making your first view

Part 3: 
1. Making more views
2. Creating a layout page
3. Expanding your README

Part 4:
1. Adding some style with CSS

Part 5: 
1. Forms
2. Validation
3. Navigation

#Table of Routes for Rest-Rant Website

|Method|Path|Purpose
|-----|-----|-------|
|GET  | /   |Home Page |
|GET  | /places | Places index page|
|POST | /places | Create new place|
|GET  | /places/new| Form page for creating a new place|
|GET  | /places/:id| Details about a particular place| 
|PUT  | /places/:id| Update a particular place|
|GET  | /places/:id/edit| Form page for editing an exisiting place|
|DELETE| /places/:id| Delete a particular place|
|POST | /places/:id/rant| Create a rant(comment) about a particular place|
|DELETE| /places/:id/rant/:rantid | Delete a rant(comment) about a particular place|
|GET  | * | 404 page (matches any route not defined above)|



5 Restaurants to Review 
- (H-Thai-M-L)-Chicago-IL-ThaiCuisine-![H-Thai-M-L Logo](https://github.com/Phalguni221/Thai-Restaurant-Menu/blob/main/logo.png?raw=true)
- BurgerKing-Mahwah-NJ-AmericanFastFood-![Burger King Logo](https://th.bing.com/th/id/R.180424d9891acbfe9e6446bfbd5d4368?rik=S%2bGdVKF0hj0o3Q&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f04%2fBurger_King_logo_emblem-2.png&ehk=j3T6tYeOtJNsvETcch%2fpSOBmsGu%2fkoYGPgbf6CgnpEY%3d&risl=&pid=ImgRaw&r=0)
- PandaExpress-NYC-NY-ChineseCuisine-![Panda Express Logo](https://th.bing.com/th/id/R.071a526af1d0c06352f33add065e9168?rik=HPu%2fihgHuVL6Tg&pid=ImgRaw&r=0)
- ChandPalace-Piscataway-NJ-IndianCuisine-![Chand Palace](https://th.bing.com/th/id/R.76313ea87f59e0697481b306f52a9e62?rik=GuraripsCkf5Pw&riu=http%3a%2f%2fwww.chandpalace.com%2fimages%2flogo.jpg&ehk=09eeX%2bGBrYLmEPmvZmLvnGnCoCskKw9Bm9a%2bWH22Rn4%3d&risl=&pid=ImgRaw&r=0)
- Applebee's-Rochester-NY-AmericanFood-![Applebee's Logo](https://th.bing.com/th/id/R.835fe3ca18ffc037b44cf9e031a64264?rik=usV9irs47936Kg&riu=http%3a%2f%2fbandbent.files.wordpress.com%2f2010%2f01%2fapplebees_new_logo_final-1_ucm6.jpg&ehk=3KJTZzKAoymzqbQdxNennb%2fJqfO4VpVH5IT8xHciWIw%3d&risl=&pid=ImgRaw&r=0)
