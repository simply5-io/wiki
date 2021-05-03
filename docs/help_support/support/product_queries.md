---
id: product_queries
title: 🦚 Product Queries
sidebar_label: Product Queries
slug: product_queries
---
<br />

### What is a CloudLAN room?

CloudLAN Room is a virtual VPN network to which all your users & servers can connect to & communicate with each other over private IP’s like you are connected on the same LAN network in an office.

### TeamURL vs PublicURL?

Simply5 CloudLAN gives you features to use your device as hosting server & two URLs generation methods of providing access to it 

**TeamURL** is only accessible for room members. 

**PublicURL** is publicly accessible over the internet without room connection.

### TeamVPN ON & OFF, When to use what?

CloudLAN is a virtual network that's provisioned for you & your team to connect & collaborate in.  

`You have 2 ways of connection to a CloudLAN room, TeamVPN ON or OFF.` <br /><br />
**Connect without TeamVPN (TeamVPN OFF)** <br />
 All your regular internet requests will be sent through your local internet connection. Use this when you are connected to a trusted WiFi network or you dont need to access any services only accessible through TeamVPN IP. This helps in better latency on VoIP or Web conferencing. <br /> 

**Connect with TeamVPN (TeamVPN ON)** <br />
All your internet traffic is securely routed through your CloudLAN room. This is useful when you are using an unknown WIFi network or want to access servers protected by firewall rules to allow only connection from whitelisted TeamVPN IP. <br /> 
Check our article on securing your cloud resources with TeamVPN. <br />


### What is Host license?

CloudLAN is built for communication between user devices, so they will need to login & connect to the room.

There are end devices like a VM on cloud provider or Raspberry Pi at home for which multiple CloudLAN members may need direct access all the time. 

For this use-case we are introducing **Host License.** Using simply adoption process get the end device connect to your room & the Host agent will keep the connection persistent still the server is removed from the room

### How many rooms can a user create ?

There are no limits on the number of rooms a user can create, if you are part of multiple project teams plz create multiple rooms & invite them to respective project rooms


### How many devices can be connected by a user?

Each user can connect using 2 devices simultaneously to a CloudLAN room. 

### Can I connect to 2 room at the same time?

Currently we are limiting 1 concurrent room connection per device. Contact support if you need more.

### What is unlimited data?

Based on the licenses, you would have received unlimited data on TeamVPN ON & OFF, & its truly Unlimited in sense we don't restrict but we do keep record of data usage. We have set Fair usage limits at 1TB/month which should be more than enough for normal usage, if you hit the limit, we shall review your account & increase the limits. Usage is bound by the [terms of use policy](https://www.simply5.io/termsofuse)

### How do I check data usage?

Overall room usage is shown in the rooms overview by clicking on ***Room name***, If you are an admin, next to each user, check on More options -> View Logs, you will find their total data usage for the month & individual sessions data in the list


### How is CloudLAN safe and secured?

Each CloudLAN room is linked to a dedicated Virtual Network instance, to which the members are connected to using an encrypted tunnels. All the communication happens securely over this encrypted connection. Make sure you use TeamVPN when connecting over unsecured public WiFi networks for secure traffic over untrusted networks.

### What are the features in a free room subscription?

Free CloudLAN room comes with 10 member licenses but its limited to 500MB/month of data transfer after which you can subscribe to a paid plan.


### How can I cast my localhost to a public URL using CloudLAN?

When your service is running on your localhost, simply login to the app and connect to a room then you can add service and cast it through a public URL.


<br />
---
:::info
:information_desk_person: **Got a question not answered in this knowledge base? ** <br />
Contact us at [cloudlan@simply5.io](mailto:cloudlan@simply5.io) or "chat with support" from our website or inside the app
:::