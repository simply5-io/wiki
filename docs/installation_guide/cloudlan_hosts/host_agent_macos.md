---
id: host_agent_macos
title: How to Adopt host running MacOS?
sidebar_label: MacOS 
slug: host_agent_macos
---
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Host Agent is integrated into CloudLAN Desktop clients. Go to [simply5.io/download](https://www.simply5.io/download) & download the MacOS Desktop app. 


:::note Prerequisite
- You are the admin of the room
- You are connected to the Room
- Have access to the host you are trying to adopt
- Room has free host license
:::

### Instructions

The below GIF demonstrates how to adopt ***MacOS machine*** 

<div className = "iframe_container">
    <video className="responsive-iframe" src={useBaseUrl("videos/how_to_add_host_and_adopt_mac.mp4")} title="Connecting to room" autoPlay="true" controls ></video>
</div>

- Install the MacOS Client on Host machine
- On your personal device, Go to ***Host*** tab on CloudLAN app
- Click on **Add host**
- Give it a name, Select ***Host agent*** & click **Continue**
- Select MacOS from OS dropdown 
- Copy **Adoption code** from the CloudLAN App
- On the Host machine's CloudLAN app login screen, click on "Adopt as a Host" 
- Type the **Adoption code** & click "Adopt" <br /> (Auth Code will be valid for only 10 minutes, you can regenerate if it expires )
- Agent will install necessary drivers & connect the machine to CloudLAN room
- Machine will be seen online from CloudLAN app and now you can add running on Server using **add service** button



<br />

CloudLAN app will automatically bootup one system reboot & connect to the room.


## How to Readopt Host

Re-adoptions helps in cases where the host app got logged out and you don't want the host IP to change.

- Once the Host shows as offline 
- Select a host and click on ***Re-adopt*** host option.
- A New Auth code for host re-adoption will be displayed 
- Copy new auth code 
- Follow Host adoption steps for MacOS
- Enter new auth code when it's prompt for adoption code.
- Once the Auth code is validated the client will be connected.
  
Below Quick GIF Demonstrates how to Re-adopt a host.

![how_readopt_host.gif](assets/images/how_readopt_host.gif)

---

:::info
 ** Got a question not answered in this knowledge base?** <br />
 Contact us at [cloudlan@simply5.io](mailto:cloudlan@simply5.io) or "chat with support" from our website or inside the app
:::