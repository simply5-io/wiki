---
id: cloudlan_hosts_centos
title: Adopt CentOS Server
sidebar_label: Adopt CentOS Server
slug: cloudlan_hosts_centos
---

---

## How to Adopt CentOS server?
Before adopting a server make sure your resourses meets below prerequisites. 

### Prerequisites
---
- You are the admin of the room
- You are connected to the Room
- Have access to the server you are trying to adopt
- A Room has free license to adopt a server
- CentOS 7
---
### Instructions

The below Quick GIF demonstrates how to adopt ***CentOS Server*** and ***Service casting*** from servers without exposing its actual IP address using CloudLAN.

![assets/images/Add__adopt_CentOS_server.gif](assets/images/Add__adopt_CentOS_server.gif)

- Click on **Add New Server**
- Give it a name & click **Get code**
- Select CentOS from OS dropdown & the relevant installation command is copied to your clip board

```bash
sudo yum -y install wget; wgpet [https://cdn.simply5.io/cloudlan/apps/clan-server;](https://cdn.simply5.io/cloudlan/apps/clan-server;) chmod +x ./clan-server; sudo ./clan-server
```

- Paste the command into server terminal and execute it to install clan-server client
- Copy **One time code** from the CloudLAN App
- Paste **One time code** on your server terminal when server prompts for this one time code. (One time Code will be valid for only 10 minutes, you can regenerate if it expires )
- Client will install necessary driver & connect to CloudLAN room
- Server will be seen online from CloudLAN app and now you can cast services running on Server using **add service** button

**Quick troubleshoot** : If there are any error at the time of adoption please follow uninstall steps below & try readopting once again 

### Optional commands

Check status of running app

```bash
sudo systemctl status clan
```

Stop Clan-server client & temporarily disconnect from the room 

```bash
sudo systemctl stop clan; sudo kill openvpn
```

Start clan-server client & reconnect to the room

```bash
sudo systemctl start clan
```

Check IP adaptor status 

```bash
ifconfig
```

## How to Remove clan-server client in CentOS?

- First step is to disconnect from server side by running below command in the ser terminal.

```bash
sudo yum -y install wget; wget https://cdn.simply5.io/cloudlan/apps/uninstall-clan-server.sh; chmod +x ./uninstall-clan-server.sh; sudo ./uninstall-clan-server.sh
```

- Once your server is offline you can remove the server from your CloudLAN room using remove button.

![assets/images/Remove_CentOS_server.gif](assets/images/Remove_CentOS_server.gif)

---
:::info
:information_desk_person: **Something we didn't cover?**
email us at [hello@simply5.io](mailto:hello@simply5.io) or "chat with support" from our website or inside the app
:::