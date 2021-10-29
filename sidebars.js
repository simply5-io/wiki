module.exports = {
  someSidebar: { 
    "Getting Started": ["cloudlan/getting_started/introduction",'cloudlan/getting_started/whats_new', "cloudlan/getting_started/cloudlan_room", "cloudlan/getting_started/hosts", "cloudlan/getting_started/service_cast", "cloudlan/getting_started/bookmark", "cloudlan/getting_started/generic_client", "cloudlan/getting_started/security_settings"],

    "Installation guide":
      [
        { "User Clients": ["cloudlan/installation_guide/client_apps/cloudlan_for_windows", "cloudlan/installation_guide/client_apps/cloudlan_for_macos", "cloudlan/installation_guide/client_apps/cloudlan_for_linux", "cloudlan/installation_guide/client_apps/user_generic_client"] },
        { "Host Agent": ["cloudlan/installation_guide/cloudlan_hosts/host_agent_windows", "cloudlan/installation_guide/cloudlan_hosts/host_agent_macos", "cloudlan/installation_guide/cloudlan_hosts/hosts_agent_raspbian", "cloudlan/installation_guide/cloudlan_hosts/hosts_agent_centos", "cloudlan/installation_guide/cloudlan_hosts/hosts_agent_ubuntu", "cloudlan/installation_guide/cloudlan_hosts/host_with_generic_client"] },
        {
          "OpenVPN clients":
            [{ "Computers": ["cloudlan/installation_guide/using_openvpn_clients/computers/debian", "cloudlan/installation_guide/using_openvpn_clients/computers/raspberrypi", "cloudlan/installation_guide/using_openvpn_clients/computers/freebsd"] },
            {
              "Mobile Devices": ["cloudlan/installation_guide/using_openvpn_clients/phones_tablets/android"]
            }]
        },
      ],

    "Referral Programs": ["cloudlan/referral_programs/referral_program"],
    "Help & Support": ["cloudlan/help_support/troubleshooting", "cloudlan/help_support/purchase_subscription", "cloudlan/help_support/quicktips", { "FAQ's": ["cloudlan/help_support/support/product_queries"] }]
  },
  node: {
    "Introduction": ['node/intro'],
    "Getting Started": ['node/getting_started/onboarding']
  }
};
