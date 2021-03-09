---
id: raspberrypi
title: Raspberry Pi
sidebar_label: Raspberry Pi
slug: guides/computers/raspberry_pi
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

### 5**. Download configuration file & setup OpenVPN**

```basic
cd /tmp mkdir -p /etc/openvpn && mv config/* /etc/openvpn && chmod +x /etc/openvpn/update-resolv-conf && rm -rf config && rm -f ovpn-se-gothenburg.zip
```

### 6**. Enter your login credentials**

```basic
echo "**CHANGE TO YOUR USERNAME**" >> /etc/openvpn/credentials
echo "**CHANGE TO YOUR PASSWORD**" >> /etc/openvpn/credentials
```

### 7**. Start OpenVPN and see that everything works**

```basic
sudo openvpn --config /etc/openvpn/ovpn.conf --daemon
```

### 8**. Verify that the connection was successful**

Wait for about a minute after running the last command, then run:

:::note
The service you should check is openvpn@NAME where NAME is the name of your configuration file (without the **".conf"**). So if your openvpn configuration file is /etc/openvpn/**ovpn**.conf you should use command as below.
:::

```basic
systemctl status openvpn@ovpn
```

You should see something like:

```basic
openvpn@ovpn.service - OpenVPN connection to ovpn
  Loaded: loaded (/lib/systemd/system/openvpn@.service; enabled; vendor preset: enabled)
  Active: active (running) since Mon 2017-10-23 07:57:37 CEST; 2h 15min ago
  Docs: man:openvpn(8)
```

### 9**. Done**
*Congratulations!* Now your Raspberry Pi will run behind OVPN. The Raspberry Pi will connect to **CloudLAN Room** automatically when it is started.

---
:::info
:information_desk_person: **Something we didn't cover?**
email us at [hello@simply5.io](mailto:hello@simply5.io) or "chat with support" from our website or inside the app
:::