---
id: hosts
title: Hosts
sidebar_label: Hosts
slug: hosts
---

---

Host feature is built for cases where you have an always-on Server/Machine/device/VM to be securely accessble by member of the room.<br /> 


:::note Prerequisite
- Room should be active with a free Host license.
- Only Room's admin can add Hosts to the room.
- Admin will be able to add Bookmark links of services running on the server 
- We currently support Ubuntu & CentOS flavors using CloudLAN Host Agent
:::

### **Ready to adopt a Host?**

 > **Your Free room comes with 1 host license to try out this feature**

*You have 2 methods *

1. **Host agent** - Easy to install application for your Linux servers that installs necessary drivers & adopts the server to your CloudLAN room using a Adoption code. Host agent also has built-in connect on reboot functionality which keeps the connection persistantly. <br /><br />
**Installation guide for **
   1.  [**CentOS**](../installation_guide/cloudlan_hosts/hosts_agent_centos.md)
   2.  [**Ubnutu**](../installation_guide/cloudlan_hosts/hosts_agent_ubuntu.md)
   3.  [**Windows**](../installation_guide/cloudlan_hosts/host_agent_windows.md)
   4.  [**MacOS**](../installation_guide/cloudlan_hosts/host_agent_macos.md)
   5.  [**Raspberry Pi**](../installation_guide/cloudlan_hosts/host_agent_raspbian.md)

2. [**Generic Clients**](./generic_client.md) - For servers running any other linux distributions or Operating systems, Generic Client feature provides you option to use any 3rd party OpenVPN client supported by the OS.

### When to use Hosts Feature?

- You want to access a machine behind Router/Firewalls without doing any port forwarding config on the router
- Hide public IP address of the host but still provide access to application running on them to the team
- Great to setup anywhere access to Raspberry Pi type project boards

### How Does Host Feature work?
When you connect a server to CloudLAN room using Host feature, server is assigned a Device IP & establishes an always-on connection with the room. Members of the room can view all the connected hosts & access services/applications running on those hosts using its Device IP. 

   
<br />

---

:::info
 ** Got a question not answered in this knowledge base?** <br />
 Contact us at [cloudlan@simply5.io](mailto:cloudlan@simply5.io) or "chat with support" from our website or inside the app
:::