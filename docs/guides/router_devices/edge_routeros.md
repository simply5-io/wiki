---
id: edge_routeros
title: Edgerouter (EdgeOS)
sidebar_label: Edgerouter (EdgeOS)
slug: edge_routeros
---
---


## **Install OVPN on an Edgerouter (EdgeOS)**

### **1. SSH into the router**

- Connect to your EdgeRouter by typing **ssh ubnt@router IP**. If you have changed the name of the admin account, use that username instead. Router IP is the IP address of the EdgeRouter. For instance, **ssh ubnt@192.168.1.1**.

### 2**. Enter your login credentials**

```basic
echo "**CHANGE TO YOUR USERNAME**" >> /config/user-data/credentials
echo "**CHANGE TO YOUR PASSWORD**" >> /config/user-data/credentials
```

### 3**. Configure interfaces**

- Run the following commands:

```basic
configureset interfaces openvpn vtun0 config-file /config/user-data/ovpn.ovpnset interfaces openvpn vtun0 description 'OpenVPN VPN tunnel'commitedit service dns forwardingset name-server 46.227.67.134set name-server 192.165.9.158topset system name-server 127.0.0.1commitsaveexit
```

### 4**. Router interface**

- Open up your browser and log in to the Edgerouter browser interface. It's the same IP address that you used to SSH into in the first step, and is by default 192.168.1.1
- Navigate to **Firewall/NAT**. Click on **NAT**. Click on **+ Add Source NAT Rule**.
- Enter the following:
  
| Description             | masquerade for vtun0   |
| ----------------------- | ---------------------- |
| **Enable**              | Should be selected     |
| **Outbound Interface**  | vtun0                  |
| **Translation  **       | Use Masquerade         |
| **Exclude from NAT **   | Should not be selected |
| **Enable Logging**      | Should not be selected |
| **Protocol **           | All protocols          |
| **Src Address**         | (leave blank)          |
| **Src Port **           | (leave blank)          |
| **Src Address Group **  | (leave blank)          |
| **or interface Addr**   | (leave blank)          |
| **Src Network Group  ** | (leave blank)          |
| **Src Port Group **     | (leave blank)          |
| **Dest Address **       | (leave blank)          |
| **Dest Port**           | (leave blank)          |
| **Dest Address Group**  | (leave blank)          |
| **or Interface Addr**   | (leave blank)          |
| **Dest Network Group**  | (leave blank)          |
| **Dest Port Group**     | (leave blank)          |

- Save the changes.

- Click and drag **masquerade for vtun0** so that it is located above **masquerade for WAN**. After that, click on **Save Rule Order**.

![https://www.ovpn.com/images/rule_order.png](https://www.ovpn.com/images/rule_order.png)

### **6. Finished**

Congratulations! Now your **Edgerouter** will connect to **CloudLAN Room** automatically when it is started.

### **Troubleshooting**

In case the connection was not set up properly when you verified it in the previous step, please send us the OpenVPN log so we can assist. You can retrieve it by writing:

```basic
cat /tmp/openvpn.log
```

---

:::info
:information_desk_person: **Something we didn't cover?**
email us at [hello@simply5.io](mailto:hello@simply5.io) or "chat with support" from our website or inside the app
:::