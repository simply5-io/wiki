---
id: cloudlan_service_cast
title: Service Casting
sidebar_label: Service Casting
slug: cloudlan_service_cast
---

---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Introduction
**Service casting** feature is built to provide a seamless and simplified way to use your machine as hosting server to improve productivity of the developer and professional teams working remote.

The purpose of this feature is for **development use only**, where you need to quickly cast your work for someone else to consume

There are Key concepts in **Service casting**

1. **Adding a service (Application, API gateway, Website, Webhook)**
    - **Name** - This is used to identify what is been casted
    - **Port** & **slug** - The port on your machine the said service is running on
    - Click **Add service**
2. **Adding a folder**
    If you would like to share a Folder, you can quickly share by following steps
     - Give a **name**
     - Input a free **port** on your machine which will be used to host a temporary FTP server
     - Click '**+ Folder**' & **select a Folder** you would like to cast
3. **Casting Options**
    - **TeamURL -**  If you want to cast this servcie only to your team connected to the room
    - **PublicURL -** If you want anyone on the internet to access the service

:::info 
Any request on these URL's will be directly forwarded to your local machine 
:::

**Are you excited to cast your first Application, Website, webhook or folders with your teammates, students, or customers? Let's start.**

### Prerequisites
---
- CloudLAN Client is installed
- You are connected to the Room
---
## **Share your active services**

Once your services/apps are running on your localhost, you can start casting those services with team in CloudLAN room.

<div className = "iframe_container">
   <video className="responsive-iframe" src={useBaseUrl("videos/Addig_service_cast.mp4")} title="Adding Service Cast" autoPlay="true" controls></video>
</div>

### Service casting
1. Run your service locally and copy port number, & slug if any, on which your service is running.
2. Launch CloudLAN app and connect to the room.
3. Enter your service name and service url `(http://localhost:<PORT>/<slug>)`, we will prefill `"http://localhost:`port_number for you so you can just key-in port number.
4. Click on ***Cast Team URL***  and click on *Start Casting* if you'd like to cast your service only with your team members.
5. Click on *Cast Public URL*  and click on *Start Casting* if you'd like to make your service to publicly accessible by anyone.

## **Share your files or folders**
<div className = "iframe_container">
  <video className="responsive-iframe" src={useBaseUrl("videos/AddigFolderCast.mp4")} title="Sharing Folders" autoPlay="true" controls></video>
</div>

#### **Folder sharing**

1. Launch CloudLAN app and connect to the room.
2. Give a name
3. Input a free port on your machine which will be used to host a temporary FTP server
4. Input a free port on your machine which will be used to host a temporary FTP server
5. Click '+ Folder' & select a Folder you would like to cast
6. Click on ***Cast Team URL***  and click on *Start Casting* if you'd like to cast your folder only with your team members.
7. Click on *Cast Public URL*  and click on *Start Casting* if you'd like to make your folder to publicly accessible by anyone.

---
:::info
:information_desk_person: **Have you any question which is not answered in this knowledge base? **
Contact us, We are here to help you. at [hello@simply5.io](mailto:hello@simply5.io) or "chat with support" from our website or inside the app
:::