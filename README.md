# jm-init

对于基于JM微服务构架的系统进行统一初始化。

gateway
acl
passport
oms
bank
统一配置

curl -s http://www.jamma.cn/gateway.sh | sh

curl http://acl.app/acl/init

curl http://user.app/user/users -X POST -i -H "Content-Type:application/json" -d '{ "account": "root", "nick": "root", "password": "123", "_id":"596d5cb3baeeaf00203de4ec", "uid": 0  }'
curl http://acl.app/acl/users -X POST -i -H "Content-Type:application/json" -d '{ "acl_user":"596d5cb3baeeaf00203de4ec", "_id":"596d5cb3baeeaf00203de4ec", "nick": "root", "roles": ["root"] }'
curl http://acl.app/acl/users/596d5cb3baeeaf00203de4ec/roles -X PUT -i -H "Content-Type:application/json" -d '{ "roles": ["root"] }'

curl http://passport.app/login -X POST -i -H "Content-Type:application/json" -d '{ "username": "root", "password": "123" }'


## 配置参数

基本配置 请参考 [jm-server] (https://github.com/jm-root/jm-server)
