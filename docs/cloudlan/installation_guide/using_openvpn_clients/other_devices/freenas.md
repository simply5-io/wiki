---
id: freenas
title: FreeNAS
sidebar_label: FreeNAS
slug: freenas
---
---
## **Install OpenVPN on FreeNAS**

### **1. (Optional) Create jail**

If you want OpenVPN to run in a jail, you must first create one. If you already have jail, or don't want to use it go to step 2.

Go to the FreeNAS GUI. In the menu, click on **Jail** → **Add Jail**. Enter ovpn as the name for the jail.

### **2. Enable SSH**

SSH:ing into your FreeNAS server with the root account is disabled by default. You will therefore have to create a new user. In the menu, click on **Accounts** → **Users**. Click on **ADD** and fill out the form. Check the box to permit sudo on the account.

In the menu, click on **Services**. Make sure SSH is **On**. In the left menu, click on **Services** → **SSH**.

### **3. SSH to the NAS**

Use a SSH client to SSH to your NAS. If you're on Windows, we suggest Putty. If you're on macOS or Linux, use the terminal.

### **4. Enter the jail (if created)**

If you're using a jail, we now need to enter it. Write:

```basic
jls
```

Locate the **JID** for the jail you want. The name for the jail is under the **Hostname** column.

```basic
jexec **REPLACE WITH THE JID** tcsh
```

### **5. Enter the jail (if created)**

If you're using a jail, we now need to enter it. Write:

`jls`

### **6. Elevate privileges**

`sudo su -`

### **7. Enable auto start**

```basic
echo 'openvpn_enable="YES"' >> /etc/rc.conf && echo 'openvpn_enable="YES"' >> /conf/base/etc/rc.confecho 'openvpn_configfile="/usr/local/etc/openvpn/openvpn.conf"' >> /etc/rc.conf && echo 'openvpn_configfile="/usr/local/etc/openvpn/openvpn.conf"' >> /conf/base/etc/rc.conf
```

### **8. Download the configuration & set**

```basic
cd /tmp && mkdir -p /usr/local/etc/openvpn && mkdir /conf/base/etc/local/openvpn && cp config/* /conf/base/etc/local/openvpn && mv config/* /usr/local/etc/openvpn && rm -rf config 
```

### **9. Enter your login credentials**

```basic
echo "**CHANGE TO YOUR USERNAME**" >> /usr/local/etc/openvpn/credentials
echo "**CHANGE TO YOUR PASSWORD**" >> /usr/local/etc/openvpn/credentials
cp /usr/local/etc/openvpn/credentials /conf/base/etc/local/openvpn/credentials
```

### **10. Start OpenVPN and see that everything works**

```basic
/usr/local/etc/rc.d/openvpn start
```

### **11. Verify that the connection was successful**

Wait for about a minute after running the last command, then run:

The service you should check is openvpn@NAME where NAME is the name of your configuration file (without the .conf). So if your openvpn configuration file is /etc/openvpn/**ovpn**.conf you should use command as below.

```basic
systemctl status openvpn@ovpn

```

You should see something like:

```
openvpn@**ovpn**.service - OpenVPN connection to **ovpn**
  Loaded: loaded (/lib/systemd/system/openvpn@.service; enabled; vendor preset: enabled)
  Active: active (running) since Mon 2017-10-23 07:57:37 CEST; 2h 15min ago
  Docs: man:openvpn(8)

```

### **12. Done**

Congratulations! Now your **FreeNAS** will connect to CloudLAN Room automatically when it is started.

### **Troubleshooting**

In case the connection was not set up properly when you verified it in the previous step, please send us the OpenVPN log so we can assist. You can retrieve it by writing:

```basic
sudo -icat /tmp/openvpn.log
```

You can also check if OpenVPN is running properly by writing:

```basic
ps aux|grep openvpn
```
---

:::info
 ** Got a question not answered in this knowledge base?** <br />
 Contact us at [cloudlan@simply5.io](mailto:cloudlan@simply5.io) or "chat with support" from our website or inside the app
:::