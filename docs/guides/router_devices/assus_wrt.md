---
id: assus_wrt
title: AsusWrt
sidebar_label: AsusWrt
slug: assus_wrt
---
---

## **Guide to install OpenVPN for AsusWrt**

### **1. Disable IPv6**

- In order to connect to OVPN - you will first need to disable IPv6.

> Only displayed once logged in.

### **2. Download the configuration file from CloudLAN App**

- Download the config file from the CloudLAN room - refer [this section](./../../../docs/guides/openvpn_clients.md)

### **3. Start the configuration of the router**

- Go to the router interface. Under **Advanced Settings**, select **LAN**.
- Choose **DHCP Server** in the new menu and change **DNS Server** to **46.227.67.134**

### **4. Upload configuration file to router**

- Go to the router interface and choose **VPN** in the left-hand menu under **Advanced settings**.
- Then choose the alternative **VPN Client** in the menu.
- Click on **Add profile** and the tab **OpenVPN**. Enter the information below

| Description            | OVPN                                                  |
| ---------------------- | ----------------------------------------------------- |
| **Username***          | (enter your username for OVPN)                        |
| **Password***          | (enter your password for OVPN)                        |
| **Import .ovpn** file* | Choose the download configuration and click on Upload |

- Click on **OK.**

### **5. Connect to OVPN**

- Click on **Activate** for the created profile in order to connect to OVPN.

### **6. Finished**

---
:::info
:information_desk_person: **Something we didn't cover?**
email us at [hello@simply5.io](mailto:hello@simply5.io) or "chat with support" from our website or inside the app
:::