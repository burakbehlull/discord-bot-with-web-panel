# Discord Public Bot with Web Panel

### path: 
` npm install ` or ` yarn `

` npm run dev ` or ` yarn dev `

<br />

### Create an `.env` file on the server and client side and configure it like this:
` server `
```js
PORT = 80 // WEB LOCAL PORT
TOKEN = //BOT TOKEN
BOT_ID = // YOUR BOT
MONGO_URI = // MONGODB URL

SERVER_ID = // YOUR SERVER ID
```

` client `
```js
VITE_API_URI = // YOUR SERVER URL
```


| Route | Opposite |
| -------- | -------- |
| **/bot** | Where to set bot settings |
| **/user** | Where operations are performed on users on the server |
| **/server** | Server operations link path |
| **/auth** | Route that sets user login registration and admin privileges |

### **/bot**
| Route | About | Values |
| -------- | -------- | -------- |
| **/status** | Sets the bot's do not disturb or idle status | status |
| **/presence** | Sets the description of the bot playing and playing part | name, type |

### **/user**
| Route | About | Values |
| -------- | -------- | -------- |
| **/ban** | Bans the user | serverId, userId, reason |
| **/kick** | Kicks the user | serverId, userId, reason |
| **/unban** | Unbans the user | serverId, userId, reason |
| **/timeout** | Timeout the user | serverId, userId, time, reason |
| **/roles** | user roles add and remove | serverId, userId, roles, isDelete (true=delete, false=add) |

### **/server**
| Route | About | Values |
| -------- | -------- | -------- |
| **/** | Fetches all data on the server | serverId |
| **/roles** | Returns all roles on the server | serverId |
| **/channels** | Returns all channels on the server | serverId |

### **/auth**
| Route | About | Values |
| -------- | -------- | -------- |
| **/create** | User creates | username, displayName, email, password |

