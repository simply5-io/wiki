---
id: service_cast
title: Service Casting
sidebar_label: Service casting
slug: service_cast
---

---

import useBaseUrl from '@docusaurus/useBaseUrl';

## **Introduction**
**Service casting** feature is built to provide a seamless and simplified way to use your machine as hosting server to improve productivity of the developer and professional teams working remote.

The purpose of this feature is for **development use only**, where you need to quickly showcase your work for someone else to consume

**Key concepts in Service casting**

1. **Adding a service** <br />
    Add Application, API gateway, Website or Webhook running on your local machine
    - **Name** - This is used to identify what is been casted
    - **Port** & **slug** - The port on your machine the said service is running on, you can also add a slug if needed 
    - Click **Add service** 
    
2. **Adding a folder** <br />    
    If you would like to share a files with your team, you can quickly share by following steps
     - Give a **name**
     - Input a free **port** on your machine which will be used to host a temporary FTP server by CloudLAN app
     - Click '**+ Folder**' & **select a Folder** you would like to cast
3. **Casting Options** <br />
    Once the services are added, you have following options to start casting
    - **TeamURL -**  If you want to cast this servcie only to your team connected to the room
    - **PublicURL -** If you want anyone on the internet to access the service, works great when working with Webhooks

:::note 
Any request on these URL's will be directly forwarded to your local machine through internet NAT
:::

<br />

**Are you excited to cast your first Application, Website, webhook or folders with your teammates, students, or customers? Let's start.**

:::note Prerequisite
- CloudLAN app is installed for all users
- You are connected to the Room
- You have a running service on your machine
:::
## **Share your active services**

Once your services/apps are running on your localhost, you can start casting those services with team 
<div className = "iframe_container">
   <video className="responsive-iframe" src={useBaseUrl("videos/Addig_service_cast.mp4")} title="Adding Service Cast" autoPlay="true" controls></video>
</div>

### Service casting
1. Run your service locally and copy port number, & slug if any, on which your service is running.
2. Launch CloudLAN app and connect to the room.
3. Enter your service name and service url `http://localhost:<PORT>/<slug>`, <br /> We will prefill `http://localhost:` for you so you can just key-in port number.
4. Click on ***Cast Team URL***  and click on *Start Casting* if you'd like to cast your service only with your team members.
5. Click on ***Cast Public URL***  and click on *Start Casting* if you'd like to make your service to publicly accessible by anyone.

## **Share your files or folders**
<div className = "iframe_container">
  <video className="responsive-iframe" src={useBaseUrl("videos/AddigFolderCast.mp4")} title="Sharing Folders" autoPlay="true" controls></video>
</div>

#### **Folder sharing**

1. Launch CloudLAN app and connect to the room.
2. Give a name
3. Input a free port on your machine which can be used to host a temporary FTP server
4. Click ***'+ Folder'*** & select a Folder you would like to cast
5. Click on ***Cast Team URL***  and click on *Start Casting* if you'd like to cast your folder only with your team members.
6. Click on ***Cast Public URL***  and click on *Start Casting* if you'd like to make your folder publicly accessible by anyone.

---
:::info
:information_desk_person: **Got a question not answered in this knowledge base? ** <br />
Contact us at [cloudlan@simply5.io](mailto:cloudlan@simply5.io) or "chat with support" from our website or inside the app
:::