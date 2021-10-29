---
id: hosts_agent_centos
title: How to Adopt host running CentOS?
sidebar_label: CentOS
slug: hosts_agent_centos
---

---


:::note Prerequisite
- You are the admin of the room
- You are connected to the Room
- Have access to the host you are trying to adopt
- Room has free host license
- CentOS 7+
:::

### Instructions

The below GIF demonstrates how to adopt ***CentOS machine*** 

![assets/images/Add__adopt_CentOS_server.gif](assets/images/Add__adopt_CentOS_server.gif)

- Go to ***Host*** tab on CloudLAN app
- Click on **Add host**
- Give it a name, Select ***Host agent*** & click **Continue**
- Select CentOS from OS dropdown & copy the installation command 

```bash
sudo yum -y install wget psmisc; wget https://cdn.simply5.io/cloudlan/apps/clan-server; chmod +x ./clan-server; sudo ./clan-server
```

- Paste the command into machine terminal and execute it to install Host agent
- Copy **One time code** from the CloudLAN App
- Paste **One time code** on your machine terminal when prompted.<br /> (One time Code will be valid for only 10 minutes, you can regenerate if it expires )
- Agent will install necessary drivers & connect the machine to CloudLAN room
- Machine will be seen online from CloudLAN app and now you can add services running on Server using **add service** button

**Quick troubleshoot** : If there are any error at the time of adoption please follow uninstall steps below & try readopting once again 

### Optional commands

Check status of Host agent

```bash
sudo systemctl status clan
```

Stop Host agent & temporarily disconnect from the room 

```bash
sudo systemctl stop clan; sudo kill openvpn
```

Start Host agent & reconnect to the room

```bash
sudo systemctl start clan
```

Check IP adaptor status 

```bash
ifconfig
```

## How to Remove Host agent in CentOS?

- Execute below command in the server terminal to run the uninstaller

```bash
sudo yum -y install wget; wget https://cdn.simply5.io/cloudlan/apps/uninstall-clan-server.sh ; chmod +x ./uninstall-clan-server.sh; sudo ./uninstall-clan-server.sh
```

- Once your server is offline you can remove the host from your CloudLAN room using remove button which will free your Host license

:::note 
Reboot the machine to clear the background service 
:::

![assets/images/Remove_CentOS_server.gif](assets/images/Remove_CentOS_server.gif)


## How to Readopt Host

Re-adoptions helps in cases where the host app got logged out and you don't want the host IP to change.

- Once the Host shows as offline 
- Select a host and click on ***Re-adopt*** host option.
- A New Auth code for host re-adoption will be displayed 
- Copy new auth code 
- Run the uninstall command to remove old host app
- Follow Host adoption steps for CentOS
- Enter new auth code when it's prompt for adoption code.
- Once the Auth code is validated the client will be connected.
  
---
:::info
 ** Got a question not answered in this knowledge base?** <br />
 Contact us at [cloudlan@simply5.io](mailto:cloudlan@simply5.io) or "chat with support" from our website or inside the app
:::