---
id: freebsd
title: FreeBSD
sidebar_label: FreeBSD
slug: freebsd
---
---
## **Install OpenVPN on FreeBSD**

### **1. Run as superuser**

```basic
sudo tcsh
```

### **2. Download components**

```basic
pkg update && pkg install openvpn unzip
```

### **3. Download the configuration file & Run below command**

```basic
cd /tmp && mkdir -p /usr/local/etc/openvpn && mv config/* /usr/local/etc/openvpn && chmod +x /etc/openvpn/update-resolv-conf && rm -rf config 
```

### **4. Enter your login credentials**

```basic
echo "**CHANGE TO YOUR USERNAME**" >> /usr/local/etc/openvpn/credentials
echo "**CHANGE TO YOUR PASSWORD**" >> /usr/local/etc/openvpn/credentials
```

### **5. Start OpenVPN and see that everything works**

```basic
openvpn --config /usr/local/etc/openvpn/ovpn.conf --daemon
```

### **6. Verify that the connection was successful**
 Wait about a minute after running the last command, then run:    
:::note
The service you should check is openvpn@NAME where NAME is the name of your configuration file (without the **".conf"**). So if your openvpn configuration file is /etc/openvpn/**ovpn**.conf you should use command as below.
:::

```basic
systemctl status openvpn@ovpn

```

- You should see something like:

```basic
openvpn@ovpn.service - OpenVPN connection to ovpn
  Loaded: loaded (/lib/systemd/system/openvpn@.service; enabled; vendor preset: enabled)
  Active: active (running) since Mon 2017-10-23 07:57:37 CEST; 2h 15min ago
  Docs: man:openvpn(8)

```

### **7. Done**

Congratulations! Your device is now protected behind OVPN and will automatically connect to CloudLAN Room on reboots.

:::info
:information_desk_person: **Have you any question which is not answered in this knowledge base? **
Contact us, We are here to help you. at [hello@simply5.io](mailto:hello@simply5.io) or "chat with support" from our website or inside the app
:::