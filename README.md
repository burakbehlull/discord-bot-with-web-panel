# Discord Public Bot with Web Panel

| Route | Opposite |
| -------- | -------- |
| **/bot** | Where to set bot settings |
| **/user** | Where operations are performed on users on the server |
| **/auth** | Route that sets user login registration and admin privileges |

### **/user**
| Route | About | Values |
| -------- | -------- | -------- |
| **/ban** | Bans the user | serverId, userId, reason |
| **/kick** | Kicks the user | serverId, userId, reason |
| **/unban** | Unbans the user | serverId, userId, reason |

### **/bot**
| Route | About | Values |
| -------- | -------- | -------- |
| **/status** | Sets the bot's do not disturb or idle status | status |
| **/presence** | Sets the description of the bot playing and playing part | name, type |

