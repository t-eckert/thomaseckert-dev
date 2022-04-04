---
title: "GradientHub Devlog 02: Designing User Experience"
slug: "devlog-02-designing-user-experience"
tags: ["gradienthub", "kubernetes", "devlog"]
---
Now I want to begin sketching out what the site will be like for a user. I have a lot of ideas floating around in my head, but I need to give them some form so I can see what works well and what doesn't.

I like to begin with the mobile experience -- what is it like to use the site on a phone. This is the most constrained experience so it helps with removing extrenuous information.

I'm going to take inspiration from Instagram here. The most important part of the site is browsing gradients. It's also visually captivating and communicates a lot of information quickly. I could communicate the same information just as well by displaying a dense table of the CSS which creates the gradient, but that wouldn't be engaging. I think that engagement comes from not making the brain work to hard to extrapolate on a concept. The trick is to give the brain information in a way that it can immediately interact with.

Ok, so stealing from Instagram. Cool. We'll come back to that.

When a user first loads the site, they should be able to browse gradients. I don't care if they are logged in. They will just see the most popular gradients. I'm not trying to convert users and have them make profiles. The profiles are just there so that people can save gradients and create them.

There are three modalities of browsing gradients I can immediately think of: popular, recent, and saved. Maybe some day I want users to be able to follow other users and see what those users create, but I'll set that aside to avoid scope creep.

Without being logged in, the user will only have access to the popular and recent modalities. They will also need to have a clear way to create a profile or sign in.

I sketched out these two mobile views, one for a user who is not logged in, the other for a user who is.

![UX sketch of mobile phone layout with user not logged in.](https://media.graphcms.com/7mkiuk0eQXug2e69bLQg)

![UX sketch of mobile user logged in](https://media.graphcms.com/0Y6AEheTTkKqNfUjOLhs)

The desktop experience will be similar, but laid out as a grid. I'm going to go ahead and build that home screen to see how it feels.

## Building the home page

For this sketched out home page, I'm going to work solely in the Next app that I created on day one. There won't be any other services involved yet.

I think a solid place to start is a `Gradient` component. This component will take in a gradient encoded as CSS and render it.

![A browser displays a gradient square](https://media.graphcms.com/eRKors6gRaOhIxe41HQ4)

Incredible.

``` ts
type Props = {
  gradient: string
  className?: string
}

const Gradient: React.FC<Props> = ({ gradient, className }) => {
  return <div className={className} style={{ background: gradient }} />
}

export default Gradient
```

Now we need the mock API which will always return this gradient. Later, this will make an actual call to a service which will fetch gradients from a database.

Fantastic and obnoxious.

``` ts
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  gradient: string
}[]

const mockGradients: Data = []

for (let i = 0; i < 20; i++) {
  mockGradients.push({
    gradient: `linear-gradient(to right, #fad0c4 0%, #ffd1ff 100%)`,
  })
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(mockGradients)
}
```

The home page now needs to hit this endpoint, `/api/gradients`, and display the gradient. I'm going to use React Query to do this as it has nice caching and whatnot that will be helpful later.

I'll get back to that tomorrow though.