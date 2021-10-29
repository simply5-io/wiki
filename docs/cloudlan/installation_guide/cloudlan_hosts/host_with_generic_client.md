---
id: host_with_generic_client
title: Generic client for Hosts
sidebar_label: Generic Client
slug: host_with_Generic_client
---
---

You can connect any device which supports 3rd party OpenVPN client by using Generic client feature. 

:::note Prerequisite
- You are the admin of the room
- You are connected to the Room
- Have access to the host you are trying to adopt
- Room has free host license
:::

import useBaseUrl from '@docusaurus/useBaseUrl';


### Instructions

The below Quick video demonstrates how to Connect any device that supports OpenVPN Client using Host feature

<div className = "iframe_container">
  <video className="responsive-iframe" src={useBaseUrl("videos/Download_ovpn_config.mp4")} title="Download OpenVPN Config File" autoPlay="true" controls></video>
</div>


<br />

- Click on **Add New Server**
- Give it a *Name*, select **Generic Client** from Dropdown & click on continue.
- Click on **Download Config** Button and select a folder to save the config file.
- Follow guide provided by OpenVPN client to import the config file 
- Server will be seen online from CloudLAN app once connected

<br />

:::caution
Download & Copy the credentials before you close the windows, you will not be able to view these details again, Remove the Host & start over if needed
:::



## How to Readopt Host

Re-adoptions helps in cases where the host app got logged out or credentials are lost and you don't want the host IP to change.

- Once the Host shows as offline 
- Select a host and click on ***Re-adopt*** host option.
- A New Credentials for host re-adoption will be displayed 
- Use these in any OpenVPN client to connect to the room    


<br />

---
:::info
 ** Got a question not answered in this knowledge base?** <br />
 Contact us at [cloudlan@simply5.io](mailto:cloudlan@simply5.io) or "chat with support" from our website or inside the app
:::