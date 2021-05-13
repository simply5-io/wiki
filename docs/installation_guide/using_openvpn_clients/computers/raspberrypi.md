---
id: raspberrypi
title: Raspberry Pi
sidebar_label: Raspberry Pi
slug: raspberry_pi
---
---
## **Install OpenVPN for Raspbian**

This guide was created for **Raspbian Buster Lite** but also works to set up an OpenVPN client on **Raspbian Buster with desktop**.

### **1. Update the Raspberry Pi**

```basic
sudo apt-get updatesudo apt-get upgrade
```

### **2. Install OpenVPN**

```basic
sudo apt-get install openvpn unzip
```

### **3. Make sure the time zone is correct**

Run the command below and go through the configuration prompt to select the correct time zone.

```basic
sudo dpkg-reconfigure tzdata
```

### 4**. Elevate your privileges to root**

```basic
sudo -i
```

### 5**. Download configuration file**

Move the downloaded .ovpn file to OpenVPN folder 

### 6**. Enter your login credentials**

```basic
echo "**CHANGE TO YOUR USERNAME**" >> /etc/openvpn/credentials
echo "**CHANGE TO YOUR PASSWORD**" >> /etc/openvpn/credentials
```

### 7**. Start OpenVPN and see that everything works**

```basic
sudo openvpn --config /etc/openvpn/clroom.conf --daemon
```

### 8**. Verify that the connection was successful**

Wait for about a minute after running the last command, then run:

:::note
The service you should check is openvpn@NAME where NAME is the name of your configuration file (without the **".conf"**). So if your openvpn configuration file is /etc/openvpn/**clroom**.conf you should use command as below.
:::

```basic
systemctl status openvpn@clroom
```


### 9**. Done**
*Congratulations!* Now your Raspberry Pi is connected to CloudLAN Room.

---
:::info
:information_desk_person: **Got a question not answered in this knowledge base? ** <br />
Contact us at [cloudlan@simply5.io](mailto:cloudlan@simply5.io) or "chat with support" from our website or inside the app
:::