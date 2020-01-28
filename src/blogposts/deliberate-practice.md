---
isHidden: false
path: "/blog/deliberate-practice"
date: "2020-01-28"
title: "Deliberate Practice - Getting over the Web Development Plateau"
description: "How I have hit my web development plateau, my framework for getting over it and continuing to improve."
---

When I started out in web development, I found it difficult, as many do, but through hours of tutorial watching/reading and then hours of working on personal projects I eventually got past the initial difficulty and could create most of what my mind could come up with. Now, even though the way I write code continues to improve with every new project, the actual projects I work on do little to stretch my abilities beyond what I already know how to do.

I have hit the **Web Development Plateau**.

Much like lifting weights at the gym (which I _totally_ do), I am now able to lift the weight with ease and so the next logical step is to increase the weight, that's obvious in the context of the gym, but when the weight is a vague web development skill, how do you increase it?

The following blogpost is mainly written for myself to establish _how_ I can get over the plateau, continue to improve and lift the next metaphorical web development weight.

## Deliberate Practice

I have recently finished re-reading the book **So Good They Can't Ignore You** by Cal Newport and so I am mostly parroting the ideas covered in the book but more from the angle of my specific use case, web development.

In the book, Cal describes **Deliberate Practice** as a _"focus on stretching your ability and receiving immediate feedback"_ providing an example of such focus by exploring how a guitar player, Jordan Tice, uses deliberate practice to improve. To improve his picking style for a new tune, he _"keeps adjusting the speed of his practicing to a point just past where he's comfortable. When he hits a wrong note, he immediately stops and starts over."_. This is as opposed to playing the same tunes he is comfortable with over and over again which doesn't stretch that muscle, akin to sticking with a weight you are comfortable with at the gym.

Cal then goes on to quote Geoff Colvin:

_"Doing things we know how to do well is enjoyable, and that's exactly the opposite of what deliberate practice demands....Deliberate practice is above all an effort of focus and concentration. That is what makes it 'deliberate', as distinct from the mindless playing of scales or hitting of tennis balls that most people engage in."_

which sums up perfectly the predicament I am in. Except other peoples mindless hitting of tennis balls is my mindless use of Flexbox to develop layouts or my failure to consider state management tools because I don't know how they work.

I am **comfortable** and, as Cal Newport says, _"If you're not uncomfortable, then you're probably stuck at an 'acceptable level'."_, in other words, you've **plateaued**

## A Framework for Deliberate Practice

So, taking Cal Newport's advice, we now know that the key to improving and being able to lift that heavier weight is **Deliberate Practice**, how can we go about applying this to web development?

Using the analogy of Jordan Tice, he chose something that was _difficult_ to play, and then learnt to play it until he was comfortable, then he moved onto the next thing. In web development we can compare this to implementing a feature, if we don't deploy deliberate practice we may choose a route that is _easy_ because we have encountered similar problems before however if we want to make use of deliberate practice, I think we need a framework to help us avoid defaulting to the easiest route.

Now this framework is something I intend to use for my own personal projects, but that doesn't mean it is suitable for everyone, the main exercise is to be thoughtful about the plateau and to aim to get out of my comfort zone wherever possible. 

In any case, I suggest you give **So Good They Can't Ignore You** by Cal Newport a read and determine for yourself how you can approach this issue.

## The Framework

**Increasing the weight**

I have identified that I can easily lift the current weight and so the purpose of the following steps are to figure out what the _heavier_ weight to lift should be:

1. Choose a task.
--
2. Note what needs to happen for the task to be considered completed without going into implementation-specific details.
--
3. Once you know what needs to happen, note the potential _known_ ways of implementing it, if any.
--
4. Next, research for ways to implement it other than the ways you've already noted down. Whilst reading up on different ways to approach the task, you might be tempted to fall back into the ways you know how to implement it as to approach it a different way is to make yourself uncomfortable with the task.
--
5. Once you have your list of potential implementations, rank them from 1-10 in both _Difficulty_ and _Suitability_.
--
6. Finally, choose the solution that ranks highly in both of the criteria; This is obviously very subjective and that's okay, the exercise is mainly about being thoughtful over getting an accurate rating.
--

It is important to note that this part of the framework isn't always required, there's no need to make every task difficult if there is an easy and proven solution but it is important to go through these steps, atleast for myself, to ensure that you aren't just defaulting to the easiest implementaton because it is comfortable (aka. mindlessly hitting tennis balls).

An example of the steps outlined above could be the following:

**Task:** Implement user authentication (login/sign-up)

**Completion indicator:** A user can sign up for an account by supplying a username and password which, if the username is valid, will create them an account. An existing user can also login in using their username and password which, if the details are correct, will authenticate them.

**Potential ways to implement:**

* Use a service such as Firebase to handle this automatically. (Difficulty: 3, Suitability: 6)
* Create our own authentication and store users within a database, potentially using libraries for hashing. (Difficulty: 9, Suitability: 9)

The suitability all depends on the project/task. Creating my own authenticaton is more suitable in the example above because I don't want to spend money where Firebase starts to cost money beyond a certain point _and_ one of my main goals is to learn new things; Firebase is less suitable for both of those aims and then the difficulty of creating my own authentication is much higher, allowing me to stretch my abilities.

Using the above framework, it is clear which option I would go for even though the second option is much more difficult and, if I wasn't thoughtful, I would most likely have chosen the easier option. This process can obviously be more in depth outside of this example and many other things can be factored into the rating of each approach.

**Becoming comfortable with the previously uncomfortable**

Jordan Tice continually practices a guitar piece until he can play it flawlessly, this is the perfect way to become comfortable with the previously uncomfortable but how do we apply that to web development? We can't just write the same function over and over again but we can solidify the steps we've taken to tackle our _uncomfortable_ task.

We've identified our approach and struggled through implementing it but now we need to derive value from having finished this beyond the obvious technical knowledge gained. The best way to do this is to **write a short case-study/explanation** on the approach taken. This doesn't have to be huge, even just some short notes written in a way that, if you came back to them a year later, they would read as a loose guide to the task and how you sucessfully implemented it.

As with the first part of the framework, you don't always need to do this if it doesn't make sense, it is more about being thoughtful.

**Getting feedback**

The final piece to the puzzle is, as Cal Newport puts it, is _"embracing honest feedback"_.

The reason this is so important is that the process of tackling something new or uncomfortable means you can't be sure that your approach is _"good"_ and, whilst _good_ is often subjective, getting outside feedback will allow you to better form your own internal definition of what _good_ means.

We're fortunate that the web development community has loads of different ways of getting feedback and that most people are happy to give feedback, the only caveat is that you must be able to take that feedback on board.

My approach is that, when I have finished a piece of work (this could be a full project or just a small piece of functionality), I will go to the various places (listed below) and ask for honest feedback, this is even better if I outline where I think any issues lie and then I will take any feedback and either apply it to my future projects, or improve the piece of functionality before moving on.

Some places to get great feedback:

* If you use JavaScript, the [/r/javascript](https://www.reddit.com/r/javascript/) subreddit has weekly threads titled **WTF Wednesday**  or **Showoff Saturday** where you can ask for honest feedback.

* The [/r/webdev](https://www.reddit.com/r/webdev/) subreddit has a similar **Showoff Saturday** thread if you want feedback on more than just JavaScript.

* Lots of communities exist on Discord for both specific technologies and for broader web development. Some of the ones I use are: [TypeScript Community](https://discordapp.com/invite/typescript), [SpeakJS](https://discordapp.com/invite/dAF4F28), [Devcord](https://devcord.com/) and [Svelte Community](https://discordapp.com/invite/yy75DKs)

### Final Notes
Just because I have supposedly _plateaued_ doesn't mean I am some perfect web developer, it just means that the stuff I am working on isn't stretching my current abilities and so this blogpost was a way for me to get my thoughts written down and hopefully allow me to take practical steps to continually improve as a web developer.

The post is written from the POV of personal projects where you have full freedom to decide what to implement and it isn't meant to be applied to every single thing you work on as a web developer, more just as a way to be thoughtful.

Although I talked specifically about working on a feature and evaluating more difficult approaches, a good way of kickstarting the process of deliberate practice is to choose a technology you haven't used before (if it make sense) when starting a new project. An example of this, for me, would be choosing to use CSS Grid over always defaulting to Flexbox.


Thanks for reading this short post, let me know how you would tackle this problem at the following github issue link: 
