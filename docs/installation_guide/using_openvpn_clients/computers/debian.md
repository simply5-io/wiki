---
id: debian
title: Debian
sidebar_label: Debian
slug: debian
---
---

## **Install OpenVPN for Debian**

### **1. Run as superuser**

`su`

### **2. Download components**

```basic
apt-get update && apt-get upgrade && apt-get install curl openvpn unzip
```

### **3. Download the configuration file**

Move the downloaded .ovpn file to OpenVPN folder

### **4. Enter your login credentials**

```basic
echo "**CHANGE TO YOUR USERNAME**" >> /etc/openvpn/credentials
echo "**CHANGE TO YOUR PASSWORD**" >> /etc/openvpn/credentials
```

### **5. Start OpenVPN and see that everything works**

```basic
openvpn --config /etc/openvpn/ovpn.conf --daemon
```

### **6. Verify that the connection was successful**

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

### **7. Done**
Congratulations! Now your Debian will connect to CloudLAN Room automatically when it is started. 

:::important Quick Commands
```basic
1. systemctl start openvpn    # Starts OpenVPN and connects to OVPN
2. systemctl stop openvpn     # Stops OpenVPN
3. systemctl restart openvpn  # Restarts OpenVPN
4. systemctl status openvpn   # Shows status for OpenVPN
```
:::

---

:::info
:information_desk_person: **Got a question not answered in this knowledge base? ** <br />
Contact us at [cloudlan@simply5.io](mailto:cloudlan@simply5.io) or "chat with support" from our website or inside the app
:::