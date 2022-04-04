---
title: "GradientHub Devlog 01: Changing Clouds"
slug: "gradienthub-devlog-01-changing-clouds"
tags: ["gradienthub", "kubernetes", "devlog"]
---

Google Cloud is too expensive for me. After running yesterday's deployment for 24 hours, I've run up a bill of $2. Extrapolating, that is $730/year. That's too steep for me for a side project. While I know Kubernetes is more expensive to run than serverless or individual VMs, I feel pretty confident I can get Kubernetes up and running for cheaper.

Before digging in, I have 3 candidates I'm considering: Azure, Linode, and DigitalOcean. I have credits on Azure that will cover the cost. I have confidence in Linode from listening to [The Changelog](https://changelog.com/). I've used DigitalOcean for a client project before and I like their UI.

I think for now, I'll move to Azure. I have $150 in monthly credits so I just won't have to worry about cost for now.

## Setting up Kubernetes on Azure

I'm going to give Terraform a go for setting up Kubernetes on Azure. I don't know what I'm doing, but I have the internet to help.

I started from [this walkthrough](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/kubernetes_cluster). To get to the point where this walkthrough starts, I had to install the Terraform CLI and the Azure CLI for authentication. I was a little confused on how to add a provider. I am guessing I should just have a separate `azure.tf` file that I run `terraform plan` on to set up?

After some consideration, I decided to just have everything for the infrastructure exist in an `azure.tf` file.

Altogether here is my `azure.tf` file.

``` tf
terraform {
  required_providers {
    azurerm = {
      source  = \"hashicorp/azurerm\"
      version = \"=2.93.1\"
    }
  }
}

provider \"azurerm\" {
  features {}
}


resource \"azurerm_resource_group\" \"gradienthub\" {
  name     = \"gradienthub\"
  location = \"East US 2\"
}

resource \"azurerm_kubernetes_cluster\" \"gradienthub-cluster-00\" {
  name                      = \"gradienthub-cluster-00\"
  location                  = azurerm_resource_group.gradienthub.location
  resource_group_name       = azurerm_resource_group.gradienthub.name
  dns_prefix                = \"gradienthub-cluster-00\"
  automatic_channel_upgrade = \"stable\"

  default_node_pool {
    name       = \"default\"
    node_count = 1
    vm_size    = \"Standard_D2_v2\"
  }

  identity {
    type = \"SystemAssigned\"
  }

  tags = {
    environment = \"production\"
  }
}
```

That infrastructure deployment worked wonderfully.

## Deployment

I ran the same deployment files that I wrote yesterday and got an external IP of [`20.88.116.197`](http://20.88.116.197/). I'll update my DNS then go to bed.