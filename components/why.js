import React from 'react';

const why_list = [
  {
    title: '降低持久化存储构建成本与运维难度',
    description:
      '可充分利用 Kubernetes Worker节点的硬件资源，节省硬件成本和机架空间；通过 Kubernetes 原生的操作方式和工具，管理 Kubernetes 使用的存储。',
  },
  {
    title: '可承载生产级别有状态应用',
    description:
      '具备丰富的企业级高可用特性；高性能与低延迟更好支撑有状态应用运行，提升业务效率。',
  },
  {
    title: '更加弹性、敏捷的投资与使用模式',
    description:
      '小规模起步，可根据业务发展按需投资，10分钟内可完成部署和存储服务上线。分钟级扩容让业务流程更加敏捷。',
  },
  {
    title: '消除兼容性问题',
    description:
      '无内核依赖，安装部署时无需考虑内核版本；可部署在 CNCF 认证的主流 K8s 集群中',
  },
];

const Why = () => {
  return (
    <div className="sectionContentWrapper grid grid-cols-1 sm:grid-cols-3">
      <h2 className="text-3xl md:text-4xl font-bold w-full leading-tight mb-20 col-span-1">
      Why IOMesh?
      </h2>
      <dl className="mx-auto grid grid-cols-1 max-w-7xl px-0 lg:px-8 col-span-1 sm:col-span-2 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 md:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 lg:gap-y-16">
        {why_list.map((why,index) => (
          <div key={index} className="relative pl-0 md:pl-9">
            <dt className="mb-4 font-semibold text-gray-900">
              {why.title}
            </dt>{' '}
            <dd className="inline">{why.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default Why;