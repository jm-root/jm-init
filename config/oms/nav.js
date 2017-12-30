module.exports = [
  {
    "icon": "icon-settings",
    "title": "赠送",
    "permission": "nav_uppoints_manage",
    "code": "app.uppoints.manage",
    "active": "app.uppoints",
    "children": [
      {
        "icon": "icon-puzzle",
        "title": "赠出",
        "code": "app.uppoints.uppoint",
        "permission": "nav_uppoints_uppoint",
        "uisref": "app.uppoints.uppoint"
      },
      {
        "icon": "icon-puzzle",
        "title": "赠出记录",
        "code": "app.uppoints.log",
        "permission": "nav_uppoints_log",
        "uisref": "app.uppoints.log"
      }
    ]
  },
  {
    "icon": "icon-settings",
    "title": "玩家管理",
    "permission": "nav_member_manage",
    "code": "app.member.manage",
    "active": "app.member",
    "children": [
      {
        "icon": "icon-puzzle",
        "title": "玩家信息",
        "code": "app.member.member",
        "permission": "nav_member_member",
        "uisref": "app.member.member"
      },
      {
        "icon": "icon-puzzle",
        "title": "在线状态",
        "code": "app.member.online",
        "permission": "nav_member_online",
        "uisref": "app.member.online"
      },
      {
        "icon": "icon-puzzle",
        "title": "实时在线统计",
        "code": "app.member.realtimeonline",
        "permission": "nav_member_realtimeonline",
        "uisref": "app.member.realtimeonline"
      },
      {
        "icon": "icon-puzzle",
        "title": "游戏记录",
        "code": "app.member.record",
        "permission": "nav_member_record",
        "uisref": "app.member.record"
      },
      {
        "icon": "icon-puzzle",
        "title": "创建用户",
        "code": "app.member.newmember",
        "permission": "nav_member_newmember",
        "uisref": "app.member.newmember"
      }
    ]
  },
  {
    "icon": "icon-settings",
    "title": "数据统计",
    "code": "app.data.manage",
    "permission": "nav_data_manage",
    "active": "app.data",
    "children": [
      {
        "icon": "icon-puzzle",
        "title": "玩家数据统计",
        "code": "app.data.player",
        "permission": "nav_data_player",
        "uisref": "app.data.player"
      },
      {
        "icon": "icon-puzzle",
        "title": "游戏内购统计",
        "code": "app.data.purchase",
        "permission": "nav_data_purchase",
        "uisref": "app.data.purchase"
      },
      {
        "icon": "icon-puzzle",
        "title": "五子棋流水",
        "code": "app.data.gobang",
        "permission": "nav_data_gobang",
        "uisref": "app.data.gobang"
      },
      {
        "icon": "icon-puzzle",
        "title": "五子棋统计",
        "code": "app.data.gobangstatistics",
        "permission": "nav_data_gobangstatistics",
        "uisref": "app.data.gobangstatistics"
      },
      {
        "icon": "icon-puzzle",
        "title": "游戏税费统计",
        "code": "app.data.taxes",
        "permission": "nav_data_taxes",
        "uisref": "app.data.taxes"
      },
      {
        "icon": "icon-puzzle",
        "title": "代理税费统计",
        "code": "app.data.agenttaxes",
        "permission": "nav_data_agenttaxes",
        "uisref": "app.data.agenttaxes"
      },
      {
        "icon": "icon-puzzle",
        "title": "每天税费统计",
        "code": "app.data.daytaxes",
        "permission": "nav_data_daytaxes",
        "uisref": "app.data.daytaxes"
      },
      {
        "icon": "icon-puzzle",
        "title": "游戏内购流水",
        "code": "app.data.buy",
        "permission": "nav_data_buy",
        "uisref": "app.data.buy"
      }
    ]
  },
  {
    "icon": "icon-settings",
    "title": "银行管理",
    "code": "app.bank.manage",
    "permission": "nav_bank_manage",
    "active": "app.bank",
    "children": [
      {
        "icon": " icon-puzzle",
        "title": "账户列表",
        "code": "app.bank.account",
        "permission": "nav_bank_account",
        "uisref": "app.bank.account"
      },
      {
        "icon": " icon-puzzle",
        "title": "转账",
        "code": "app.bank.transfer",
        "permission": "nav_bank_transfer",
        "uisref": "app.bank.transfer"
      },
      {
        "icon": " icon-puzzle",
        "title": "交易流水",
        "code": "app.bank.deal",
        "permission": "nav_bank_deal",
        "uisref": "app.bank.deal"
      },
      {
        "icon": " icon-puzzle",
        "title": "币种管理",
        "code": "app.bank.currency",
        "permission": "nav_bank_currency",
        "uisref": "app.bank.currency.list"
      }
    ]
  },
  {
    "icon": "icon-settings",
    "title": "权限管理",
    "code": "app.acl.manage",
    "permission": "nav_acl_manage",
    "active": "app.acl",
    "children": [
      {
        "icon": "icon-user",
        "title": "用户管理",
        "code": "app.acl.user",
        "permission": "nav_acl_users",
        "active": "app.acl.user",
        "uisref": "app.acl.users.list"
      },
      {
        "icon": "icon-user",
        "title": "角色管理",
        "code": "app.acl.role",
        "permission": "nav_acl_role",
        "uisref": "app.acl.role"
      },
      {
        "icon": "icon-star",
        "title": "资源管理",
        "code": "app.acl.resource",
        "permission": "nav_acl_resource",
        "uisref": "app.acl.resource"
      }
    ]
  },
  {
    "icon": "icon-settings",
    "title": "系统管理",
    "code": "app.system.manage",
    "permission": "nav_system_manage",
    "active": "app.system",
    "children": [
      {
        "icon": "icon-puzzle",
        "title": "系统日志",
        "code": "app.system.log",
        "permission": "nav_system_log",
        "uisref": "app.system.log"
      },
      {
        "icon": "icon-puzzle",
        "title": "用户管理",
        "code": "app.system.handleApp",
        "permission": "nav_system_handleApp",
        "uisref": "app.system.handleApp"
      },
      {
        "icon": "icon-puzzle",
        "title": "游戏开停服",
        "code": "app.member.info",
        "permission": "nav_system_info",
        "uisref": "app.member.info.list"
      }
    ]
  },
  {
    "icon": "icon-settings",
    "title": "配置管理",
    "code": "app.config.manage",
    "permission": "nav_config_manage",
    "active": "app.config",
    "children": [
      {
        "icon": "icon-puzzle",
        "title": "菜单配置",
        "code": "app.config.menus",
        "permission": "nav_config_menus",
        "uisref": "app.config.menus"
      },
      {
        "icon": "icon-puzzle",
        "title": "系统初始化",
        "code": "app.config.systeminit",
        "permission": "nav_config_systeminit",
        "uisref": "app.config.systeminit"
      },
      {
        "icon": "icon-puzzle",
        "title": "系统配置",
        "code": "app.config.systemconfig",
        "permission": "nav_config_systemconfig",
        "uisref": "app.config.systemconfig"
      },
      {
        "icon": "icon-puzzle",
        "title": "统一配置",
        "code": "app.config.unified",
        "permission": "nav_config_unified",
        "uisref": "app.config.unified"
      }
    ]
  }
]