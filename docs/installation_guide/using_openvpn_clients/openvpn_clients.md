---
id: openvpn_clients
title: OpenVPN Clients
sidebar_label: Introduction
slug: openvpn_clients
---

---

import useBaseUrl from '@docusaurus/useBaseUrl';

Make sure your resources meets prerequistes.

### Prerequisites

- You are the admin of the room
- You are connected to the Room
- Have access to the Linux based server/device you are trying to adopt
- Room has free server license

### Instructions

The below Quick video demonstrates how to Connect any device that supports OpenVPN Client and **Service casting** from servers without exposing its actual IP address using CloudLAN.

<div className = "iframe_container">
  <video className="responsive-iframe" src={useBaseUrl("videos/Download_ovpn_config.mp4")} title="Download OpenVPN Config File" autoPlay="true" controls></video>
</div>

- Click on **Add New Server**
- Give it a name, select Installation method **OpenVPN Client Config** & click on continue.
- Copy the credentials on secured place for future use.
- Click on **Download Config** Button and select a folder to save the config file.
- Do Follow the instructions mentioned on [OpenVPN Client guides](../using_openvpn_clients/computers/centos.md).
- Client will install necessary driver & connect to CloudLAN room
- Server will be seen online from CloudLAN app and now you can cast services running on Server using **add service** button

:::caution
**Download & Copy the credentials before you close the windows, you will not be able to view these details again.**
:::
:::tip
**Quick troubleshoot** : If there any error at the time of adoption please follow uninstall steps below & try readopting once again
:::

---

### :point_right: Not Sure how to configure your OpenVPN Client? [learn more](../using_openvpn_clients/computers/centos.md)

### How to Remove Host that is connected CloudLAN Room using OpenVPN Client Config?

- First step is to disconnect from server side by running below command in the ser terminal.
- Once your server is offline you can remove the server from your CloudLAN room using remove button.

---

:::info
:information_desk_person: **Have you any question which is not answered in this knowledge base? **
Contact us, We are here to help you. at [hello@simply5.io](mailto:hello@simply5.io) or "chat with support" from our website or inside the app
:::
