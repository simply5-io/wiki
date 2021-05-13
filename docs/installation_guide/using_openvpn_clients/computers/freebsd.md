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

### **3. Download the configuration file**

Move the downloaded .ovpn file to OpenVPN folder

### **4. Enter your login credentials**

```basic
echo "**CHANGE TO YOUR USERNAME**" >> /usr/local/etc/openvpn/credentials
echo "**CHANGE TO YOUR PASSWORD**" >> /usr/local/etc/openvpn/credentials
```

### **5. Start OpenVPN and see that everything works**

```basic
openvpn --config /usr/local/etc/openvpn/clroom.conf --daemon
```

### **6. Verify that the connection was successful**
 Wait about a minute after running the last command, then run:    
:::note
The service you should check is openvpn@NAME where NAME is the name of your configuration file (without the **".conf"**). So if your openvpn configuration file is /etc/openvpn/**clroom**.conf you should use command as below.
:::

```basic
systemctl status openvpn@clroom

```

  You should see something like:

```basic
openvpn@clroom.service - OpenVPN connection to roomname
  Loaded: loaded (/lib/systemd/system/openvpn@.service; enabled; vendor preset: enabled)
  Active: active (running) since Mon 2017-10-23 07:57:37 CEST; 2h 15min ago
  

```

### **7. Done**

Congratulations! Your device is now connected to CloudLAN.

---

:::info
:information_desk_person: **Got a question not answered in this knowledge base? ** <br />
Contact us at [cloudlan@simply5.io](mailto:cloudlan@simply5.io) or "chat with support" from our website or inside the app
:::