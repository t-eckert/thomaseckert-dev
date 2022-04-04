---
title: "GradientHub Devlog 00: Starting from Overengineered"
slug: "gradienthub-devlog-00-starting-from-overengineered"
tags: ["gradienthub", "kubernetes", "devlog"]
---
When starting a project, it is best to begin with an idea and implement it as simply as possible to get it to market quickly. I am not doing that.

I was inspired to make a project that was at least complicated enough that I could use Kubernetes in production, have to think about scaling, and optimistically add Consul to the deployment. I work on Consul's integration with Kubernetes, but I've never operated a production Kubernetes cluster. I think I should.

Today, I had the idea for this sufficiently complicated project that was still simple enough that I could build it on my own and write about it.

## GradientHub

GradientHub is a social network where users can create and share gradients. Gradients are a very popular part of web design today and I think this is a fun way to play with that. 

I like gradients as something users can create and display because I don't have to worry about users uploading photos which are hard to store and vet for inappropriate content.

I registered the domain `gradienthub.art` for $4/year from Namecheap. Other domains were closer to $36/year and above and I just didn't want to spend that money up front.

## Architecture

The architecture here is the real goal. I'm making this more complicated than it needs to be so I can learn. I'm going to start with a React frontend using Next.js. This will be supported by three backend services:

- Users: manages user profiles and which gradients they have made or liked.
- Gradients: manages gradients, loading them from the database and showing users who've liked them. This can also be a caching layer.
- Generator: generates random gradients.

I am going to use PostgreSQL as my database. I'll use a managed instance outside of Kubernetes.

## Getting something shipped

I believe the best way to get work shipped is to start it out with a pipeline deploying into a production environment. This way I know from the start how the project behaves in a production environment. I have had issues before with doing so much development locally that I end up with something I have to modify in unintuitive ways in order to get it to production.

My first task then is to get a base layer frontend, containerize it, and ship it to a Kubernetes cluster.

## Setting up Kubernetes

I decided to use Google Cloud Platform to run my Kubernetes cluster. Just because.

I set up the cluster in `us-east` and set it to use the release channel Kubernetes. I'm doing this by clicking through the web UI. I should be doing this with Terraform. Maybe I can formalize a TF file for this configuration later.

I'm not quite sure what the cost will be for this deployment. I'm setting up a pricing alert to let me know if the cost exceeds $20/month.

## Starting a Next.js Project

I am going to create a base Next.js project with Tailwind and TypeScript. I love TypeScript for frontend projects because it saves me from creating silly bugs.

I start off with 

``` bash
npx create-next-app@latest --ts
```

Yay!

![The default NextJS App](https://media.graphcms.com/LUd0O4vTwaxQK7OVtneg)

Using TailwindCSS, I made a splash screen.

``` html
<div className=\"pt-40 flex flex-col items-center justify-center\">
  <h1 className=\"mb-4 text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500\">
    GradientHub
  </h1>
  <p>This is a work in progress.</p>
  <p>
    Check the{\" \"}
    <a
        href=\"https://github.com/t-eckert/gradienthub\"
        target=\"_blank\"
        rel=\"noopener noreferrer\"
        className=\"font-medium bg-clip-text bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 hover:text-transparent  transition\"
    >
        GitHub repository
    </a>{\" \"}
    for more info.
  </p>
</div>
```

![A splash screen which reads \"GradientHub/ This is a work in progress./ Check the GitHub repository for more info.\"](https://media.graphcms.com/CKhQqF9BTFSlfOwKPaQc)

## Containerizing

I'm going to containerize the frontend service and push it to DockerHub. I pulled the Dockerfile and configuration from the [NextJS with Docker](https://github.com/vercel/next.js/tree/canary/examples/with-docker) example.

I built the image and pushed it to DockerHub as [`tecke/gradienthub-frontend`](https://hub.docker.com/repository/docker/tecke/gradienthub-frontend).

## Deploying to Kubernetes

Now I need to tell Kubernetes to run 3 pods with that image. I connected the Google Cloud Kubernetes cluster to [`kubectl`](https://kubernetes.io/docs/tasks/tools/). Now I need to write a deployment file and apply it to the cluster.

Here is the `frontend.yaml` deployment file.

``` yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: frontend
  labels:
    app: gradienthub-frontend
spec:
  replicas: 3
  selector:
    matchLabels:
      app: gradienthub-frontend
  template:
    metadata:
      labels:
        app: gradienthub-frontend
    spec:
      containers:
        - name: frontend
          image: tecke/gradienthub-frontend:latest
          ports:
            - containerPort: 3000
```

I applied the deployment and three replicas came right up!

Next, I need to create a Service to get a fixed IP to route requests to the pods. Eventually, I want to set all this up with the Consul API Gateway using the tech preview.

Here is `frontend-service.yaml`.

``` yaml
apiVersion: v1
kind: Service
metadata:
  name: frontend-service
spec:
  type: LoadBalancer
  selector:
    app: gradienthub-frontend
  ports:
    - port: 80
      targetPort: 3000
```

Deploying the Service of type LoadBalancer gave me a public IP of [`34.75.24.253`](http://34.75.24.253/).

I was able to visit the site in the browser! That's enough for the first day.