module.exports = {
  someSidebar: {
    "Getting Started": ['getting_started/introduction', 'getting_started/whats_new', "getting_started/cloudlan_room", "getting_started/hosts", "getting_started/service_cast", "getting_started/bookmark", "getting_started/generic_client"],
    
    "Installation guide": 
    [
      {"User Clients" :["installation_guide/client_apps/cloudlan_for_windows", "installation_guide/client_apps/cloudlan_for_macos", "installation_guide/client_apps/cloudlan_for_linux", "installation_guide/client_apps/user_generic_client"]} , 
      {"Host onboarding" :["installation_guide/cloudlan_hosts/host_agent_windows","installation_guide/cloudlan_hosts/host_agent_macos", "installation_guide/cloudlan_hosts/hosts_agent_raspbian","installation_guide/cloudlan_hosts/hosts_agent_centos", "installation_guide/cloudlan_hosts/hosts_agent_ubuntu", "installation_guide/cloudlan_hosts/host_with_generic_client"]} ,
      {"Using OpenVPN client":  
        [{"Computers": ["installation_guide/using_openvpn_clients/computers/debian", "installation_guide/using_openvpn_clients/computers/raspberrypi", "installation_guide/using_openvpn_clients/computers/freebsd"]},  
        {"Mobile Devices": ["installation_guide/using_openvpn_clients/phones_tablets/android"]
         }]}, 
    ],
    
    "Referrel Programs": ["referrel_programs/referrel_program"],
    "Help & Support": ["help_support/troubleshooting", {"FAQ's":["help_support/support/product_queries", "help_support/support/purchase_subscription" ]}]
  },
};
