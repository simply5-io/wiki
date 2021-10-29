---
id: quicktips
title: Quick Tips
sidebar_label: Quick Tips
slug: quick_tips
---


import useBaseUrl from '@docusaurus/useBaseUrl';

---

## Client Connection Health check
When a Client is connected to CloudLAN room, following tests will help determine the health of connection. 

### Internet Speed
Internet Connection speed determine the speed at which data can be transfered between Client & server. In Local office network scenario computers will be connected with 100Mbps/1Gbps LAN network connection, but when working remotely, even though Cloud server has 1 Gbps connection, Client maybe only connected using mobile data with 10 Mbps, so the maximum transfer speed between Client & Application Server will be 10Mbps.

You can test Client internet connection speed by going to [speedtest.net](https://www.speedtest.net/) or [fast.com](https://fast.com/). If you feel the connection is slow, try connecting to a faster internet connection.

### Connection latency
Latency test will show the distance of Client location to CloudLAN server & is represented in 'ms - milliseconds', time it takes to reach the server. While provisioning a CloudLAN room, we will automatically suggest the nearest Datacenter so the latency is minimum. In case you want to test it yourself,
 
**On Windows**
- Connect to CloudLAN room
- Open Command Prompt
- Type `ipconfig `and press enter
- Search for CloudLAN device IP as shown in the app & note the Gateway IP
- Type `ping [gateway IP]`  for eg. "ping 10.120.120.1"
  
**On Mac or Linux**
- Connect to CloudLAN room
- Open Command Prompt
- Type `ifconfig `and press enter
- Search for CloudLAN device IP as shown in the app & note the Gateway IP
- Type `ping [gateway IP]`  for eg. "ping 10.120.120.1"
  

Connection with under '100ms' is ideal. If its above '300ms', contact CloudLAN support so we can switch your room to a closer location. <br /> <br />
Sometimes the internet connection like low WiFi signal will also effect latency, so check latency over multiple connections if it look unusually high.

<br />

---
:::info
 ** Got a question not answered in this knowledge base?** <br />
 Contact us at [cloudlan@simply5.io](mailto:cloudlan@simply5.io) or "chat with support" from our website or inside the app
:::