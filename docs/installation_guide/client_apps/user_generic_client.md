---
id: user_generic_client
title: Generic Client for User
sidebar_label: Generic Client
slug: user_generic_client

---
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Generic Client support lets you use any OpenVPN protocol supporting VPN client for connecting to CloudLAN room <br />

This feature is useful for platforms (OS) which are not yet supported by CloudLAN App and users who are comfortable setting up 3rd party clients. <br />


:::note Prerequisite
- You have active CloudLAN account
- You are member of the room 
- Room has active subscription
:::


**The following video clip demonstrates how to download a .ovpn config file & credentials from your Simply5 Account.**
<div className = "iframe_container">
   <video className="responsive-iframe" src={useBaseUrl("videos/Generic_client.mp4")} title="Download Generic client config" autoPlay="true" controls></video>
</div>

### Download your device configuration
- Visit your profile section at [**accounts.simply5.io**](https://accounts.simply5.io/) 
- Select **Generic Client** in the menu
- Select the room 
- Select the OS platform (for Android & iOS select Linux)
- Enter a device name you will use the configuration on
- Click '**Get Config**'
- Note down ID & Password generated
- Download the .ovpn configuration file 
- Follow instructions provided by the 3rd party client to get connected

:::note
Only 1 device configuration can be generated per room. Devices connecting using the configuration will shown as Online next to user name in CloudLAN App for other CloudLAN users
:::

CloudLAN provide various guides to walk you through the setup processes, otherwise you can also follow official guide provided by the OpenVPN client you are using.


---
:::info
 ** Got a question not answered in this knowledge base?** <br />
 Contact us at [cloudlan@simply5.io](mailto:cloudlan@simply5.io) or "chat with support" from our website or inside the app
:::