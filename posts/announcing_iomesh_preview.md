---
title: 'Outperforming Peer Products, IOMesh Takes Cloud Native Storage to the Next Level'
date: '2021-08-03'
description: 'Announcing IOMesh Preview Version'
---

Preview version of IOMesh, a cloud-native storage product specifically designed and developed for Kubernetes, was released today. Committed to accelerating the containerization journey of stateful applications such as databases, IOMesh possesses cloud-native characteristics including containerized deployment, automatic operation, declarative APIs, and demonstrates excellent performance: in TPC-C MySQL test under the same hardware conditions and test parameters, IOMesh achieved TPS 2.81 times that of Portworx.

In the cloud-native era, Kubernetes has become the de-facto standard for container orchestration and carries an increasing amount of stateful applications in production environments. CNCF (The Cloud Native Computing Foundation) Survey 2020 shows that Kubernetes use in production has increased to 83%, up from 78% last year, 55% of respondents use stateful applications in containers in production.

![img](../../cncf_survey1.png)
*Proportion of stateful applications deployed in containers in production (Source: CNCF 2020 Survey)*

However, the survey also shows that storage is still one of the major challenges for users to migrate to containers.

![img](../../cncf_survey2.png)
*Major challenges of using/deploying containers (Source: CNCF Survey 2020)*

In production environments, users expect storage products with the following core features to support their stateful applications:

- Kubernetes-based cloud-native deployment and DevOps
- High performance and low latency to meet scenario requirements (i.e. database)
- Stable product core engine to achieve high availability (HA) in production environments
- Powerful resilience and scalability 

Current mainstream storage solutions such as traditional storage and emerging cloud-native storage, are unable to fully meet above requirements in agility, stability and performance.

## **Built to Tackle Cloud Native Storage Challenges**

As a cloud-native storage product specifically designed and developed for Kubernetes, IOMesh takes ZBS as its core, a “production-ready” distributed storage system developed independently by SmartX, to provide production-level high performance and reliable persistent storage for business-critical applications such as MySQL, Cassandra, MongoDB, etc., contributing to the containerized transformation of stateful applications. IOMesh has now joined CNCF Cloud Native Landscape.

![img](../../arch.png)
*Architecture Diagram of IOMesh*

## **What Makes It Unique**

### **Kubernetes Native**

IOMesh is completely Kubernetes-based, allowing DevOps team to uniformly manage both applications and IOMesh storage systems running in containers with existing Kubernetes tools, which will significantly reduce complexity and cost of DevOps.

### **Outstanding Performance**

Storage performance is crucial to stable operations of IO-intensive applications such as databases. In the standard performance test for Kubernetes storage, IOMesh maintains extremely low and stable latency while achieving high IOPS, which can provide a strong guarantee for stable operations of target applications.

### **High Reliability**

IOMesh runs in user space without introducing additional kernel modules, therefore effectively ensures isolation and does not affect normal operations of other applications of the same node.

### **High Cost-Effectiveness**

IOMesh supports flexible deployment of multiple storage media, including NVMe SSD, SATA SSD, HDD, etc. The active and inactive data blocks are placed in different storage tiers via hot/cold data separation algorithm, fully leveraging capacity, performance and cost to maximize cost-effectiveness.

### **High Scalability**

IOMesh can start small from a three-node cluster and scale up or out by flexibly adding disks or nodes online, without interfering with running applications. The performance grows linearly with the number of nodes, achieving true scalability.

## **Outperforming Multiple Peer Products**

IOMesh, with peer products from Portworx, Longhorn and OpenEBS, were tested with TPC-C MySQL under the same hardware conditions and test parameters, in which IOMesh demonstrated industry-leading IO performance.

### **OLTP Database Performance**

IOMesh running MySQL database reached TPS 2.81 times that of Portworx, with P95 latency 70.07% lower than Portworx. Compared with other peer products, IOMesh also excels with high performance and low latency.

![img](../../performance1.png)
*OLTP database performance* 

### **Performance Stability Test**

In high-concurrency scenarios, IOMesh continues to provide excellent and stable IOPS performance output, significantly reducing IO jitter, and ensuring stable operations of IO-intensive applications.

![img](../../performance2.png)
*Performance stability test*

## **IOMesh Quick Guide**

To install IOMesh, you will need:

- A Kubernetes v1.17+ or OpenShift v4.0+ cluster with at least 3 Worker nodes;
- Each Worker node requires:
  - At least one free SSD for IOMesh journal and cache;
  - At least one free HDD for IOMesh datastore;
  - A 10GbE NIC or above for IOMesh storage network;
  - At least 100GB free space on /opt for metadata storage.

With IOMesh, you are able to:

- Create persistent volumes to provide persistent storage for applications and scale the existing persistent volume by editing PVC;
- Take a snapshot or a clone for a persistent volume and restore the volume based on the volume snapshot;
- Use Prometheus and Grafana to monitor and manage a storage cluster visually and comprehensively;
- Upgrade and scale a storage cluster online, ensuring business continuity and increasing DevOps efficiency.

## **Come Experience IOMesh!**

IOMesh provides a free community edition. Deployment is simple and convenient with just one line of command. You can access the latest version of installation requirements, methods, and operation guides from our [Documentation Center](http://docs.iomesh.com/about-iomesh/introduction). If there’s any question or suggestion about IOMesh, you are welcome to join our [IOMesh Community](https://join.slack.com/t/iomesh/shared_invite/zt-pnqohdau-vZnhWMsm0ETSbPA_AJGCRw) on Slack, where you will receive:

- Real-time product-related Q&As;
- Professional discussions of cloud-native technologies;
- In-depth insights into domain knowledge.

------

> **Note:**
> 1. *Performance Test Environment*  
>     - Chassis: SmartX HALO400
>     - Processor Per Node: 2 x Intel(R) Xeon(R) CPU E5-2620 v4 @ 2.10GHz
>     - Memory Per Node: 2 x 32GiB 2133Mhz
>     - SSDs Per Node: 960GB (2 x S4610 480G)
>     - HDD Per Node: 1T (1 x HDD 1T)
>     - Mgmt Network: Intel I350 1Gbps
>     - Storage Network: Intel 82599ES 10Gbps
>
> 2. *CNCF SURVEY 2020*: https://www.cncf.io/wp-content/uploads/2020/12/CNCF_Survey_Report_2020.pdf