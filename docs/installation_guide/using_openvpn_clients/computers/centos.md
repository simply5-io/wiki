---
id: centos
title: CentOS
sidebar_label: CentOS
slug: centos
---
---

## **Install OpenVPN on CentOS**

### **1. Run as superuser**

`su`

### **2. Enable EPEL**

Choose architecture CentOS 4 32bit CentOS 4 64bit CentOS 5 32bit CentOS 5 64bit CentOS 6 32bit CentOS 6 64bit CentOS 7 64bit

### **3. Download components**

```basic
yum update && yum install openvpn unzip wget
```

### **4. Download the configuration file**

```basic
cd /tmp && mkdir -p /etc/openvpn && mv config/* /etc/openvpn && chmod +x /etc/openvpn/update-resolv-conf && rm -rf config && rm -f ovpn-se-gothenburg.conf
```

### **5. Enter your login credentials**

```basic
echo "**CHANGE TO YOUR USERNAME**" >> /etc/openvpn/credentials
echo "**CHANGE TO YOUR PASSWORD**" >> /etc/openvpn/credentials
```

### **6. Start OpenVPN and see that everything works**

`openvpn --cd /etc/openvpn/ --config client.conf --daemon`

### **7. Verify that the connection was successful**

Wait for about a minute after running the last command, then run:

:::note
The service you should check is openvpn@NAME where NAME is the name of your configuration file (without the **".conf"**). So if your openvpn configuration file is /etc/openvpn/**ovpn**.conf you should use command as below.
:::

```basic
systemctl status openvpn@ovpn
```

You should see something like:

```cmd
openvpn@ovpn.service - OpenVPN connection to ovpn
  Loaded: loaded (/lib/systemd/system/openvpn@.service; enabled; vendor preset: enabled)
  Active: active (running) since Mon 2017-10-23 07:57:37 CEST; 2h 15min ago
  Docs: man:openvpn(8)
```

### **8. Done**

Congratulations! Now your CentOS will connect to CloudLAN Room automatically when it is started. 

---
:::info
:information_desk_person: **Have you any question which is not answered in this knowledge base? **
Contact us, We are here to help you. at [hello@simply5.io](mailto:hello@simply5.io) or "chat with support" from our website or inside the app
:::