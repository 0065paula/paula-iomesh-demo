import React from "react";


const feature_list = [
  {
    title: '高性能',
    subItems: [
      {
        title: 'I/O 本地化',
        description: '本地节点有一个完整的副本，所有读 I/O 仅访问本地，降低应用跨节点数据读取带来的网络负载。'
      },
      {
        title: '支持冷热数据分层',
        description: '充分发挥不同类型存储介质的容量和性能优势，平衡性能与成本。'
      },
      {
        title: '支持全闪存',
        description: '进一步消除硬件对于性能提升的阻碍，保证全场景下的性能稳定，满足不断变化的业务需求。'
      },
      {
        title: '扩展的 LocalPV',
        description: '支持直接使用节点上的块设备，与仅限于目录的 Kubernetes 本地 PV 相比，提供卓越的 I/O 性能。'
      }
    ]
  },
  {
    title: '生产级别高可用与安全机制',
    subItems: [
      {
        title: '多副本机制',
        description: '保证数据的高可用性，并能够根据本地优先 、局部化分配 、容量均衡原则智能在节点间分配副本。'
      },
      {
        title: '快照保护',
        description: '提供 PV 的秒级快照能力，随时保存和使用历史数据。'
      },
      {
        title: '慢盘检测与自动隔离',
        description: '自动检测并隔离异常硬盘，降低对系统性能的影响，并减轻运维工作负担。'
      },
      {
        title: '安全性保障',
        description: '支持使用配置了 K8s Secret 的 StorageClass 创建带鉴权的 PV，仅允许持有凭证的用户使用 PV。'
      },
      {
        title: '业务优先的智能恢复策略',
        description: '以保障业务 I/O 为前提，根据业务负载自适应地调整数据恢复或迁移速度。'
      }
    ]
  },
  {
    title: '无缝对接用户 K8s 生态',
    subItems: [
      {
        title: '通过 K8s CSI 置备存储',
        description: '支持动态置备，提供本地卷和多副本分布式存储卷。'
      },
      {
        title: '使用 K8s Operator 统一运维',
        description: '基于 Helm Chart 部署，提供声明式 API 管理能力，加快部署与扩容。'
      },
      {
        title: '支持与 K8s 工具链集成',
        description: '支持将监控与报警功能集成进 Prometheus 和 Grafana ，提供可视化监控数据与报警提醒。'
      }
    ]
  },
  {
    title: '弹性与敏捷性',
    subItems: [
      {
        title: '小规模起步',
        description: '三节点起步，可根据实际业务需求按需投资，节省初期投入。'
      },
      {
        title: '快速上线与扩展',
        description: '依托云原生能力，10 分钟内可完成部署，支持分钟级扩容。'
      }
    ]
  },
  {
    title: '良好的开放性与兼容性',
    subItems: [
      {
        title: '无内核依赖',
        description: '直接运行在用户空间，无需引入额外的内核模块，安装部署升级无需考虑内核兼容性'
      },
      {
        title: '广泛兼容',
        description: '可部署在 CNCF 认证的主流 K8s 集群中'
      }
    ]
  }
  ];

export default function FeatureList() {
  return (
    <div className="sectionContentWrapper">
      <h2 className="mix-blend-luminosity text-3xl md:text-4xl font-bold w-full leading-tight mb-20 text-gray-700/80">
          Key Features
      </h2>
      <div className="mx-auto max-w-7xl space-y-8 sm:space-y-4 lg:space-y-16">
          {feature_list.map(feature => 
            <div key={feature.title} className="featureBlock bg-white rounded-2xl mx-auto grid grid-cols-1 gap-x-8 gap-y-8 px-0 sm:p-8 sm:gap-y-6 lg:mx-0 lg:p-12 lg:gap-y-12">
              <h2 className=" text-3xl font-bold tracking-tight text-gray-600 lg:text-4xl">
              {feature.title}
              </h2>
              <dl className="col-span-2 grid grid-cols-1 gap-x-16 gap-y-10 sm:grid-cols-2 md:grid-cols-3">
                {feature.subItems.map(feature_point =>
                  <div key={feature_point.title} >
                    <dt className="h-14 text-base font-semibold leading-7 text-gray-600">
                      {feature_point.title}
                    </dt>
                    <dd className="mt-1 text-base leading-7 text-gray-500">{feature_point.description}</dd>
                  </div>
                )}
              </dl>
            </div>
            )
          }
      </div>
    </div>
  )
}
