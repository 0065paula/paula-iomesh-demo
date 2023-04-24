---
title: "Install IOMesh on OpenShift"
date: "2021-09-29"
description: "Install IOMesh on OpenShift"
---

As a certified OpenShift operator, IOMesh cloud native storage runs in an OpenShift cluster and is now officially available on [Red Hat Ecosystem Catalog](https://catalog.redhat.com/software/operators/detail/60b73139dd7db51a7e24a9e0). Red Hat OpenShift is a widely-deployed hybrid cloud container platform, being part of Red Hat Ecosystem Catalog means the product is tested, certified, supported and enterprise-grade.

IOMesh offers a new option for OpenShift users to provide persistent storage for business-critical applications. Through IOMesh Operator on the OperatorHub page of Red Hat OpenShift Container Platform, users can easily install, deploy, and upgrade IOMesh.

![img](../../iomesh_on_catalog.png)

_IOMesh is officially available on Red Hat Ecosystem Catalog_.

## **Prerequisites**

According to [IOMesh Installation Prerequisites](https://docs.iomesh.com/deploy/prerequisites), make sure that your OpenShift cluster meets the "Installation Requirements" and set up the worker nodes correctly according to the "Setup Worker Node" chapter.

## **Install IOMesh on OpenShift Container Platform**

1. Run IOMesh Operator pre-installation script in an environment where oc or kubectl can be used to access the OpenShift cluster, the script will install the dependencies of IOMesh Operator and specific IOMesh settings for the OpenShift cluster:

   ```shell
   curl -sSL https://iomesh.run/iomesh-operator-pre-install-openshift.sh | sh -
   ```

2. Log in to your OpenShift Container Platform and visit the **OperatorHub** page. Select **IOMesh Operator** and click **Install** to start the installation of IOMesh Operator.

![img](../../iomesh_operator_in_operatorhub.png)

_IOMesh Operator in OperaterHub_

3. On the **Installed Operators** > **IOMesh Operator** > **Create instance** > **YAML view**, fill in an IOMesh Custom Resources according to [IOMesh YAML](https://iomesh.run/iomesh.yaml), change the `spec.*.dataCIDR` to your own data network CIDR.

![img](../../installed_iomesh_operator.png)

_Installed IOMesh Operator_

4. Run IOMesh Operator post-installation script in an environment where oc or kubectl can be used to access the OpenShift cluster, the script will install IOMesh CSI Driver:

   ```shell
   curl -sSL https://iomesh.run/iomesh-operator-post-install-openshift.sh | sh -
   ```

## **Setup IOMesh**

After IOMesh is installed, block devices on worker nodes need to be mounted to the IOMesh cluster so that IOMesh could utilize them to construct and provide distributed storage service.

By default, IOMesh doesn't mount any block devices. Users have to [configure it manually](https://docs.iomesh.com/deploy/setup-iomesh) after installation.

---

After installation, IOMesh can provide persistent storage for OpenShift clusters, with abilities to snapshot and clone volumes, as well as visualized monitoring and management through standard monitoring software Prometheus and Grafana.

If there’s any question regarding the installation and usage of IOMesh, you are welcome to join [IOMesh Community on Slack](https://join.slack.com/t/iomesh/shared_invite/zt-pnqohdau-vZnhWMsm0ETSbPA_AJGCRw), for technical support.

Learn more about installing IOMesh on OpenShift: [IOMesh on RedHat Ecosystem Catalog](https://catalog.redhat.com/software/operators/detail/60b73139dd7db51a7e24a9e0)
