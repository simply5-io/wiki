---
id: fedora
title: Fedora
sidebar_label: Fedora
slug: guides/computers/fedora
---
---

## **Install OpenVPN on Fedora**

### **1. Download components**

```basic
dnf update && dnf install openvpn unzip
```

### **3. Enter your login credentials**

```basic
echo "**CHANGE TO YOUR USERNAME**" >> /etc/openvpn/credentials
echo "**CHANGE TO YOUR PASSWORD**" >> /etc/openvpn/credentials
```

### **4. Start OpenVPN and see that everything works**

```basic
openvpn --config /etc/openvpn/ovpn.conf --daemon
```

### **5. Verify that the connection was successful**

Wait about a minute after running the last command, then run:

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

### **6. Done**

Congratulations! Your device is now protected behind OVPN and will automatically connect  to CloudLAN Room on reboots.

---
:::info
:information_desk_person: **Something we didn't cover?**
email us at [hello@simply5.io](mailto:hello@simply5.io) or "chat with support" from our website or inside the app
:::